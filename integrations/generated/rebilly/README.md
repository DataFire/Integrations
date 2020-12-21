# @datafire/rebilly

Client library for Rebilly

## Installation and Usage
```bash
npm install --save @datafire/rebilly
```
```js
let rebilly = require('@datafire/rebilly').create({
  JWT: "",
  PublishableApiKey: "",
  SecretApiKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

# Introduction
The Rebilly API is built on HTTP.  Our API is RESTful.  It has predictable
resource URLs.  It returns HTTP response codes to indicate errors.  It also
accepts and returns JSON in the HTTP body.  You can use your favorite
HTTP/REST library for your programming language to use Rebilly's API, or
you can use one of our SDKs (currently available in [PHP](https://github.com/Rebilly/rebilly-php)
and [Javascript](https://github.com/Rebilly/rebilly-js-sdk)).

We have other APIs that are also available.  Every action from our [app](https://app.rebilly.com)
is supported by an API which is documented and available for use so that you
may automate any workflows necessary.  This document contains the most commonly
integrated resources.

# Authentication
When you sign up for an account, you are given your first secret API key.
You can generate additional API keys, and delete API keys (as you may
need to rotate your keys in the future). You authenticate to the
Rebilly API by providing your secret key in the request header.

Rebilly offers three forms of authentication:  secret key, publishable key, JSON Web Tokens, and public signature key.
- [Secret API key](#section/Authentication/SecretApiKey): used for requests made
  from the server side. Never share these keys. Keep them guarded and secure.
- [Publishable API key](#section/Authentication/PublishableApiKey): used for
  requests from the client side. For now can only be used to create
  a [Payment Token](#operation/PostToken) and
  a [File token](#operation/PostFile).
- [JWT](#section/Authentication/JWT): short lifetime tokens that can be assigned a specific expiration time.

Never share your secret keys. Keep them guarded and secure.

<!-- ReDoc-Inject: <security-definitions> -->

# SDKs

Rebilly offers a Javascript SDK and a PHP SDK to help interact with
the API.  However, no SDK is required to use the API.

Rebilly also offers [FramePay](https://rebilly.github.io/framepay-docs/),
 a client-side iFrame-based solution to help
create payment tokens while minimizing PCI DSS compliance burdens
and maximizing the customizability. [FramePay](https://rebilly.github.io/framepay-docs/)
is interacting with the [payment tokens creation operation](#operation/PostToken).

## Javascript SDK

The [Javascript SDK](https://github.com/Rebilly/rebilly-js-sdk) is maintained
within Github, and contains the installation and usage instructions.

## PHP SDK
For all PHP SDK examples provided in these docs you will need to configure the `$client`.
You may do it like this:

```php
$client = new Rebilly\Client([
    'apiKey' => 'YourApiKeyHere',
    'baseUrl' => 'https://api.rebilly.com',
]);
```

# Using filter with Collections
Rebilly provides collections filtering. You can use `?filter` param on collection to define which records should be shown in the response.

Here is filter format description:

- Fields and values in filter are separated with `:`: `?filter=firstName:John`.

- Fields in filter are separated with `;`: `?filter=firstName:John;lastName:Doe`.

- You can use multiple values using `,` as values separator: `?filter=firstName:John,Bob`.

- To negate the filter use `!`: `?filter=firstName:!John`. Note that you can negate multiple values like this: `?filter=firstName:!John,Bob`. This filter rule will exclude all Johns and Bobs from the response.

- You can use range filters like this: `?filter=amount:1..10`.

- You can use gte (greater than or equals) filter like this: `?filter=amount:1..`, or lte (less than or equals) than filter like this: `?filter=amount:..10`.

- You can create some [predefined values lists](https://user-api-docs.rebilly.com/#tag/Lists) and use them in filter: `?filter=firstName:@yourListName`. You can also exclude list values: `?filter=firstName:!@yourListName`

# Expand to Include Embedded Objects
Rebilly provides the ability to pre-load additional
objects with a request.

You can use `?expand` param on most requests to expand
and include embedded objects within the
`_embedded` property of the response.

The `_embedded` property contains an array of
objects keyed by the expand parameter value(s).

You may expand multiple objects by passing them
as comma-separated to the expand value like so:

```
?expand=recentInvoice,customer
```

And in the response, you would see:

```
"_embedded": [
    "recentInvoice": {...},
    "customer": {...}
]
```
Expand may be utilitized not only on `GET` requests but also on `PATCH`, `POST`, `PUT` requests too.


# Getting Started Guide

Rebilly's API has over 300 operations.  That's more than you'll
need to implement your use cases.  If you have a use
case you would like to implement, please consult us for
feedback on the best API operations for the task.

Our getting started guide will demonstrate a basic order form use
case.  It will allow us to highlight core resources
in Rebilly that will be helpful for many other use cases
too.

Within 25 minutes, you'll have sent API requests (via our console)
to create a subscription order.

[Click here to visit our API Guide Tutorial](https://api-guides.rebilly.com/).


## Actions

### Get3DSecureCollection
Retrieve a list of ThreeDSecure entries


```js
rebilly.Get3DSecureCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [ThreeDSecure](#threedsecure)

### Post3DSecure
Create a ThreeDSecure entry



```js
rebilly.Post3DSecure({
  "body": {
    "enrolled": "",
    "enrollmentEci": "",
    "customerId": null,
    "gatewayAccountId": null,
    "paymentCardId": null,
    "websiteId": null,
    "currency": null,
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ThreeDSecure](#threedsecure)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [ThreeDSecure](#threedsecure)

### Get3DSecure
Retrieve a ThreeDSecure entry with specified identifier string



```js
rebilly.Get3DSecure({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [ThreeDSecure](#threedsecure)

### GetAttachmentCollection
Retrieve a list of Attachments



```js
rebilly.GetAttachmentCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * expand `string`: Expand a response to get a full related object included inside
  * fields `string`: Limit the returned fields to the list specified, separated by comma. Note that id is always returned.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Attachment](#attachment)

### PostAttachment
Create an Attachment



```js
rebilly.PostAttachment({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Attachment](#attachment)

### DeleteAttachment
Delete the Attachment with predefined identifier string



```js
rebilly.DeleteAttachment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetAttachment
Retrieve a Attachment with specified identifier string



```js
rebilly.GetAttachment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Attachment](#attachment)

### PutAttachment
Update the Attachment with predefined ID



```js
rebilly.PutAttachment({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Attachment](#attachment)

### GetAuthenticationOption
Read current authentication options



```js
rebilly.GetAuthenticationOption({}, context)
```

#### Input
* input `object`
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [AuthenticationOptions](#authenticationoptions)

### PutAuthenticationOption
Change options



```js
rebilly.PutAuthenticationOption({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [AuthenticationOptions](#authenticationoptions)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [AuthenticationOptions](#authenticationoptions)

### GetAuthenticationTokenCollection
Retrieve a list of auth tokens



```js
rebilly.GetAuthenticationTokenCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [AuthenticationToken](#authenticationtoken)

### PostAuthenticationToken
Login a customer



```js
rebilly.PostAuthenticationToken({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [AuthenticationToken](#authenticationtoken)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [AuthenticationToken](#authenticationtoken)

### DeleteAuthenticationToken
Logout a customer



```js
rebilly.DeleteAuthenticationToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetAuthenticationTokenVerification
Verify an authentication token



```js
rebilly.GetAuthenticationTokenVerification({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [AuthenticationToken](#authenticationtoken)

### PostAuthenticationTokenExchange
Exchange Authentication Token for JWT

It will also invalidate an Authentication Token by default (so it can only be exchanged once).



```js
rebilly.PostAuthenticationTokenExchange({
  "body": {},
  "token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CustomerJWT](#customerjwt)
  * token **required** `string`: The token identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [CustomerJWT](#customerjwt)

### GetBankAccountCollection
Retrieve a list of Bank Accounts



```js
rebilly.GetBankAccountCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [BankAccount](#bankaccount)

### PostBankAccount
Create a Bank Account



```js
rebilly.PostBankAccount({
  "body": null
}, context)
```

#### Input
* input `object`
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [BankAccount](#bankaccount)

### GetBankAccount
Retrieve a Bank Account with specified identifier string



```js
rebilly.GetBankAccount({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [BankAccount](#bankaccount)

### PatchBankAccount
Update bank account's values except for the account number and routing number



```js
rebilly.PatchBankAccount({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * accountType `string` (values: checking, savings, other): Bank's Account type.
    * address: The Address.
      * address `string`: The contact street address
      * address2 `string`: The contact street address (second line)
      * city `string`: The contact city
      * country `string`: The contact country ISO Alpha-2 code
      * emails [ContactEmails](#contactemails)
      * firstName `string`: The contact first name
      * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
      * lastName `string`: The contact last name
      * organization `string`: The contact organization
      * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
      * postalCode `string`: The contact postal code
      * region `string`: The contact region (state)
    * bankName `string`: Bank's name.
    * customFields [ResourceCustomFields](#resourcecustomfields)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [BankAccount](#bankaccount)

### PutBankAccount
Create or update a BankAccount with predefined identifier string



```js
rebilly.PutBankAccount({
  "body": null,
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [BankAccount](#bankaccount)

### PostBankAccountDeactivation
Deactivate a Bank Account



```js
rebilly.PostBankAccountDeactivation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [BankAccount](#bankaccount)

### GetBlacklistCollection
Retrieve a list of blacklists



```js
rebilly.GetBlacklistCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Blacklist](#blacklist)

### PostBlacklist
Create a blacklist



```js
rebilly.PostBlacklist({
  "body": {
    "type": "",
    "value": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Blacklist](#blacklist)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Blacklist](#blacklist)

### DeleteBlacklist
Delete a blacklist with predefined identifier string



```js
rebilly.DeleteBlacklist({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetBlacklist
Retrieve a blacklist with specified identifier string



```js
rebilly.GetBlacklist({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Blacklist](#blacklist)

### PutBlacklist
Create a blacklist with predefined identifier string



```js
rebilly.PutBlacklist({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Blacklist](#blacklist)

### GetContactCollection
Retrieve a list of contacts.  This may be useful
when giving the customer a choice between previous
addresses they've used before.



```js
rebilly.GetContactCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Contact](#contact)

### PostContact
Contacts are created automatically by data passed to the
contact-related hashes within the customer, invoice,
payment instrument (like payment card), subscriptions,
and more.
<div class="alert alert-warning">
  Note: This method should almost never be used.
  Please check with us on your use case before using it.
</div>



```js
rebilly.PostContact({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Contact](#contact)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Contact](#contact)

### DeleteContact
Delete a contact with predefined identifier string



```js
rebilly.DeleteContact({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetContact
Retrieve a contact with specified identifier string



```js
rebilly.GetContact({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Contact](#contact)

### PutContact
Create or update a contact with predefined identifier string



```js
rebilly.PutContact({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Contact](#contact)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Contact](#contact)

### GetCouponCollection
Retrieve a list of coupons



```js
rebilly.GetCouponCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Coupon](#coupon)

### PostCoupon
Create a coupon



```js
rebilly.PostCoupon({
  "body": {
    "discount": {},
    "issuedTime": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Coupon](#coupon)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Coupon](#coupon)

### GetCouponRedemptionCollection
Retrieve a list of coupon redemptions


```js
rebilly.GetCouponRedemptionCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [CouponRedemption](#couponredemption)

### PostCouponRedemption
Redeem a coupon



```js
rebilly.PostCouponRedemption({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CouponRedemption](#couponredemption)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [CouponRedemption](#couponredemption)

### GetCouponRedemption
Retrieve a coupon redemption with specified identifier string


```js
rebilly.GetCouponRedemption({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [CouponRedemption](#couponredemption)

### PostCouponRedemptionCancellation
Cancel a coupon redemption


```js
rebilly.PostCouponRedemptionCancellation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetCoupon
Retrieve a coupon with specified redemption code string



```js
rebilly.GetCoupon({
  "redemptionCode": ""
}, context)
```

#### Input
* input `object`
  * redemptionCode **required** `string`: The Coupon's redemption code
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Coupon](#coupon)

### PutCoupon
Create or update a coupon with predefined redemption code



```js
rebilly.PutCoupon({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Coupon](#coupon)

### PostCouponExpiration
Set a coupon's expiry time with the specified redemption code.
The expiredTime of a coupon must be greater than its issuedTime.
This cannot be performed on expired coupons.



```js
rebilly.PostCouponExpiration({
  "redemptionCode": ""
}, context)
```

#### Input
* input `object`
  * body [CouponExpiration](#couponexpiration)
  * redemptionCode **required** `string`: The coupon's redemption code
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Coupon](#coupon)

### GetCredentialCollection
Retrieve a list of credentials



```js
rebilly.GetCredentialCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Credential](#credential)

### PostCredential
Create a credential



```js
rebilly.PostCredential({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Credential](#credential)

### DeleteCredential
Delete a credential with predefined identifier string



```js
rebilly.DeleteCredential({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetCredential
Retrieve a credential with specified identifier string



```js
rebilly.GetCredential({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Credential](#credential)

### PutCredential
Create or update a credential with predefined identifier string



```js
rebilly.PutCredential({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Credential](#credential)

### GetCustomFieldCollection
Retrieve a schema of Custom Fields for the given resource type



```js
rebilly.GetCustomFieldCollection({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string` (values: customers, payment-cards, subscriptions, transactions, websites, contacts, products, plans): The resource type string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`: The list of custom fields
  * items [CustomField](#customfield)

### GetCustomField
Retrieve a schema of the given Custom Field for the given resource type



```js
rebilly.GetCustomField({
  "resource": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string` (values: customers, payment-cards, subscriptions, transactions, websites, contacts, products, plans): The resource type string
  * name **required** `string`: The custom field's identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [CustomField](#customfield)

### PutCustomField
Create or alter a schema of the given Custom Field for the given resource type.



```js
rebilly.PutCustomField({
  "body": {
    "type": ""
  },
  "resource": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CustomField](#customfield)
  * resource **required** `string` (values: customers, payment-cards, subscriptions, transactions, websites, contacts, products, plans): The resource type string
  * name **required** `string`: The custom field's identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [CustomField](#customfield)

### GetCustomerTimelineCustomEventTypeCollection
Retrieve a list of customer timeline custom event types



```js
rebilly.GetCustomerTimelineCustomEventTypeCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [CustomerTimelineCustomEvent](#customertimelinecustomevent)

### PostCustomerTimelineCustomEventType
Create Customer Timeline custom event type



```js
rebilly.PostCustomerTimelineCustomEventType({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CustomerTimelineCustomEvent](#customertimelinecustomevent)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [CustomerTimelineCustomEvent](#customertimelinecustomevent)

### GetCustomerTimelineCustomEventType
Retrieve customer timeline custom event type



```js
rebilly.GetCustomerTimelineCustomEventType({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [CustomerTimelineCustomEvent](#customertimelinecustomevent)

### GetCustomerTimelineEventCollection
Retrieve a list of customer timeline messages for all customers



```js
rebilly.GetCustomerTimelineEventCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [CustomerTimeline](#customertimeline)

### GetCustomerCollection
Retrieve a list of customers



```js
rebilly.GetCustomerCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * expand `string`: Expand a response to get a full related object included inside
  * fields `string`: Limit the returned fields to the list specified, separated by comma. Note that id is always returned.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Accept `string` (values: application/json, text/csv): The response media type
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Customer](#customer)

### PostCustomer
Create a customer without a predefined ID.
The customer's primary address
will be used as the default address for payment
instruments, subscriptions and invoices if none
are provided.

If you wish to create the customer with a predefined
ID (which we recommend to prevent duplication), you
may use our `PUT` request described below.

Read our guide to [preventing duplicates](https://api-guides.rebilly.com/core-concepts/preventing-duplicates)
to understand more.



```js
rebilly.PostCustomer({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Customer](#customer)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Customer](#customer)

### DeleteCustomer
Merge one duplicate customer to another target customer and delete the former.


```js
rebilly.DeleteCustomer({
  "targetCustomerId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * targetCustomerId **required** `string`: The customer idendifier to get the data of the deleted duplicate customer
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetCustomer
Retrieve a customer with specified identifier string



```js
rebilly.GetCustomer({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Customer](#customer)

### PutCustomer
Create or update (upsert) a customer with predefined identifier string.
Read our guide to [preventing duplicates](https://api-guides.rebilly.com/core-concepts/preventing-duplicates)
to understand more.



```js
rebilly.PutCustomer({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Customer](#customer)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Customer](#customer)

### DeleteCustomerLeadSource
Delete a Lead Source that belongs to a certain customer



```js
rebilly.DeleteCustomerLeadSource({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetCustomerLeadSource
Retrieve a Lead Source of given customer



```js
rebilly.GetCustomerLeadSource({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [LeadSource](#leadsource)

### PutCustomerLeadSource
Create a Lead Source for a customer



```js
rebilly.PutCustomerLeadSource({
  "body": null,
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [LeadSource](#leadsource)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [LeadSource](#leadsource)

### GetCustomerTimelineCollection
Retrieve a list of customer timeline messages



```js
rebilly.GetCustomerTimelineCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [CustomerTimeline](#customertimeline)

### PostCustomerTimeline
Create a customer Timeline comment or custom defined event



```js
rebilly.PostCustomerTimeline({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CustomerTimeline](#customertimeline)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [CustomerTimeline](#customertimeline)

### DeleteCustomerTimeline
Delete a Customer Timeline message with predefined identifier string



```js
rebilly.DeleteCustomerTimeline({
  "id": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * messageId **required** `string`: The Customer Timeline message ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetCustomerTimeline
Retrieve a customer message with specified identifier string



```js
rebilly.GetCustomerTimeline({
  "id": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * messageId **required** `string`: The Customer Timeline message ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [CustomerTimeline](#customertimeline)

### GetCustomerUpcomingInvoiceCollection
Retrieve a list of upcoming invoices from the subscriptions which belong to the given customer.
The endpoint is temporary before upcoming invoices get a complete integration.



```js
rebilly.GetCustomerUpcomingInvoiceCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: Expand a response to get a full related object included inside
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Invoice](#invoice)

### GetDisputeCollection
Retrieve a list of disputes



```js
rebilly.GetDisputeCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Dispute](#dispute)

### PostDispute
Create a dispute



```js
rebilly.PostDispute({
  "body": {
    "currency": null,
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Dispute](#dispute)

### GetDispute
Retrieve a dispute with specified identifier string



```js
rebilly.GetDispute({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Dispute](#dispute)

### PutDispute
Create or update a Dispute with predefined identifier string



```js
rebilly.PutDispute({
  "body": {
    "currency": null,
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Dispute](#dispute)

### GetDisputeMatchedRuleCollection
Get matched rules for the dispute


```js
rebilly.GetDisputeMatchedRuleCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [MatchedRule](#matchedrule)

### GetFileCollection
Retrieve a list of files



```js
rebilly.GetFileCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * expand `string`: Expand a response to get a full related object included inside
  * fields `string`: Limit the returned fields to the list specified, separated by comma. Note that id is always returned.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [File](#file)

### PostFile
Additionally, a file can be sent with:
 - multipart/form-data POST request: in this case all property names are the same as the JSON ones (`file` is an uploaded file)
 - file body request: the file body is sent as the request body, with the appropriate `Content-Type`. No additional
 properties can be set along the request data

The following file types only are allowed:
 - jpg
 - png
 - gif
 - pdf
 - mp3


If using a Publishable Api Key, only private files can be created. The files can later on be modified or used using
 a secret API key.



```js
rebilly.PostFile({
  "body": null
}, context)
```

#### Input
* input `object`
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [File](#file)

### DeleteFile
Delete the File with predefined identifier string



```js
rebilly.DeleteFile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetFile
Retrieve a File with specified identifier string



```js
rebilly.GetFile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [File](#file)

### PutFile
Update the File with predefined ID. Note that file can be uploaded with POST only.



```js
rebilly.PutFile({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [File](#file)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [File](#file)

### GetFileDownload
Download a file



```js
rebilly.GetFileDownload({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `string`

### GetFileDownloadExtension
Download image in specific format. Images are converted server-side



```js
rebilly.GetFileDownloadExtension({
  "id": "",
  "extension": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * extension **required** `string` (values: .png, .jpg, .gif): File extension which also indicates the desired file format
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `string`

### GetInvoiceCollection
Retrieve a list of invoices



```js
rebilly.GetInvoiceCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Accept `string` (values: application/json, text/csv): The response media type
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Invoice](#invoice)

### PostInvoice
Create an invoice



```js
rebilly.PostInvoice({
  "body": {
    "customerId": null,
    "websiteId": null,
    "currency": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Invoice](#invoice)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### GetInvoice
Retrieve an invoice with specified identifier string



```js
rebilly.GetInvoice({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept `string` (values: application/json, application/pdf): The response media type
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### PutInvoice
Create or update an invoice with predefined identifier string



```js
rebilly.PutInvoice({
  "body": {
    "customerId": null,
    "websiteId": null,
    "currency": null
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Invoice](#invoice)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### PostInvoiceAbandonment
Abandon an invoice with specified identifier string



```js
rebilly.PostInvoiceAbandonment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### PostInvoiceIssuance
Issue an invoice with specified identifier string. It must be in `draft` status.



```js
rebilly.PostInvoiceIssuance({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [InvoiceIssue](#invoiceissue)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### GetInvoiceItemCollection
Retrieve an invoice items with specified invoice identifier string



```js
rebilly.GetInvoiceItemCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [InvoiceItem](#invoiceitem)

### PostInvoiceItem
Create an invoice item



```js
rebilly.PostInvoiceItem({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [InvoiceItem](#invoiceitem)

### GetInvoiceMatchedRuleCollection
Get matched rules for the invoice


```js
rebilly.GetInvoiceMatchedRuleCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [MatchedRule](#matchedrule)

### PostInvoiceRecalculation
Recalculate an invoice with specified identifier string.
It will recalculate shipping rates, taxes, discounts. It is useful when coupon was revoked or customer redeemed coupon after invoice was issued and you want to apply it to this invoice.



```js
rebilly.PostInvoiceRecalculation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### PostInvoiceReissuance
Reissue an invoice with specified identifier string. It must be issued (status must be `unpaid` or `past-due`).



```js
rebilly.PostInvoiceReissuance({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [InvoiceReissue](#invoicereissue)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### GetInvoiceTimelineCollection
Retrieve a list of invoice timeline messages



```js
rebilly.GetInvoiceTimelineCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [InvoiceTimeline](#invoicetimeline)

### PostInvoiceTimeline
Create an invoice Timeline comment



```js
rebilly.PostInvoiceTimeline({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [InvoiceTimeline](#invoicetimeline)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [InvoiceTimeline](#invoicetimeline)

### DeleteInvoiceTimeline
Delete an Invoice Timeline message with predefined identifier string



```js
rebilly.DeleteInvoiceTimeline({
  "id": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * messageId **required** `string`: The Invoice Timeline message ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetInvoiceTimeline
Retrieve a invoice message with specified identifier string



```js
rebilly.GetInvoiceTimeline({
  "id": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * messageId **required** `string`: The Invoice Timeline message ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [InvoiceTimeline](#invoicetimeline)

### GetInvoiceTransactionAllocationCollection
Get the precise amounts from a transaction allocated as invoice payments


```js
rebilly.GetInvoiceTransactionAllocationCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [InvoiceTransactionAllocation](#invoicetransactionallocation)

### PostInvoiceVoid
Void an invoice with specified identifier string



```js
rebilly.PostInvoiceVoid({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### GetKycDocumentCollection
Retrieve a list of KYC documents



```js
rebilly.GetKycDocumentCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Accept `string` (values: application/json): The response media type
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [KycDocument](#kycdocument)

### PostKycDocument
Create a KYC Document



```js
rebilly.PostKycDocument({
  "body": {
    "fileId": null,
    "customerId": null,
    "documentType": "",
    "status": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [KycDocument](#kycdocument)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [KycDocument](#kycdocument)

### GetKycDocument
Retrieve a KYC document with specified identifier string.


```js
rebilly.GetKycDocument({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept `string` (values: application/json): The response media type
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [KycDocument](#kycdocument)

### PutKycDocument
Create or update a KYC document with predefined identifier string.


```js
rebilly.PutKycDocument({
  "body": {
    "fileId": null,
    "customerId": null,
    "documentType": "",
    "status": ""
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [KycDocument](#kycdocument)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [KycDocument](#kycdocument)

### PostKycDocumentAcceptance
Marks that status of the document as `accepted`. Updates the review time and reviewer information. Intended to be used for manual overrides.



```js
rebilly.PostKycDocumentAcceptance({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [KycDocument](#kycdocument)

### PostKycDocumentRejection
Marks that status of the document as `rejected`. Updates the review time and reviewer information. Intended to be used for manual overrides.



```js
rebilly.PostKycDocumentRejection({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [KycDocumentRejection](#kycdocumentrejection)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [KycDocument](#kycdocument)

### PostKycDocumentReview
Mark the KYC document as reviewed. Updates the review time and reviewer information.


```js
rebilly.PostKycDocumentReview({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [KycDocument](#kycdocument)

### GetPasswordTokenCollection
Retrieve a list of tokens



```js
rebilly.GetPasswordTokenCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [ResetPasswordToken](#resetpasswordtoken)

### PostPasswordToken
Create a Reset Password Token



```js
rebilly.PostPasswordToken({
  "body": {
    "username": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ResetPasswordToken](#resetpasswordtoken)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [ResetPasswordToken](#resetpasswordtoken)

### DeletePasswordToken
Delete a Reset Password Token with predefined identifier string



```js
rebilly.DeletePasswordToken({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetPasswordToken
Retrieve a Reset Password Token with specified identifier string



```js
rebilly.GetPasswordToken({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [ResetPasswordToken](#resetpasswordtoken)

### GetPaymentCardCollection
Retrieve a list of Payments Cards



```js
rebilly.GetPaymentCardCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [PaymentCard](#paymentcard)

### PostPaymentCard
Create a Payment Card



```js
rebilly.PostPaymentCard({
  "body": null
}, context)
```

#### Input
* input `object`
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PaymentCard](#paymentcard)

### GetPaymentCard
Retrieve a Payment Card with specified identifier string



```js
rebilly.GetPaymentCard({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PaymentCard](#paymentcard)

### PatchPaymentCard
Update any of the payment card's values except for the pan



```js
rebilly.PatchPaymentCard({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * billingAddress: Card's billing address
      * address `string`: The contact street address
      * address2 `string`: The contact street address (second line)
      * city `string`: The contact city
      * country `string`: The contact country ISO Alpha-2 code
      * emails [ContactEmails](#contactemails)
      * firstName `string`: The contact first name
      * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
      * lastName `string`: The contact last name
      * organization `string`: The contact organization
      * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
      * postalCode `string`: The contact postal code
      * region `string`: The contact region (state)
    * customFields [ResourceCustomFields](#resourcecustomfields)
    * cvv `string`: Card's cvv (card verification value).
    * expMonth `integer`: Card's expiry month
    * expYear `integer`: Card's expiry year
    * stickyGatewayAccountId: Sticky Gateway Account ID
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PaymentCard](#paymentcard)

### PutPaymentCard
Create a payment card with predefined ID


```js
rebilly.PutPaymentCard({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PaymentCard](#paymentcard)

### PostPaymentCardAuthorization
Authorize a Payment Card

Instead of using this endpoint a Payment Card will
be authorized on first usage (new transaction or order).



```js
rebilly.PostPaymentCardAuthorization({
  "body": {
    "websiteId": "",
    "currency": null
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * amount `number`: Amount
    * currency **required**
    * gatewayAccountId `string`: The Gateway account ID
    * redirectUrl `string`: Redirect URL
    * websiteId **required** `string`: The Website ID
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PaymentCard](#paymentcard)

### PostPaymentCardDeactivation
Deactivate a Payment Card



```js
rebilly.PostPaymentCardDeactivation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PaymentCard](#paymentcard)

### GetPaymentCardMatchedRuleCollection
Get matched rules for the payment card


```js
rebilly.GetPaymentCardMatchedRuleCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [MatchedRule](#matchedrule)

### GetPaymentInstrumentValidationCollection
Retrieve a Payment Instrument validation with specified identifier string



```js
rebilly.GetPaymentInstrumentValidationCollection({}, context)
```

#### Input
* input `object`
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [PaymentInstrumentValidation](#paymentinstrumentvalidation)

### PostPaymentInstrumentValidation
Validate a payment instrument



```js
rebilly.PostPaymentInstrumentValidation({}, context)
```

#### Input
* input `object`
  * body `object`
    * method **required** `string`: Payment method
    * paymentInstrumentId **required** `string`: Payment instrument ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PaymentInstrumentValidation](#paymentinstrumentvalidation)

### GetPaymentInstrumentValidation
Retrieve a list of validated payment instruments



```js
rebilly.GetPaymentInstrumentValidation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PaymentInstrumentValidation](#paymentinstrumentvalidation)

### GetPaymentCollection
Retrieve a payment list



```js
rebilly.GetPaymentCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Accept `string` (values: application/json, text/csv): The response media type
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Payment](#payment)

### PostPayment
Create a payment (deprecated).  Use create a transaction instead.



```js
rebilly.PostPayment({
  "body": {
    "websiteId": null,
    "customerId": null,
    "currency": null,
    "amount": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Payment](#payment)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Payment](#payment)

### GetPayment
Retrieve a payment with specified identifier string



```js
rebilly.GetPayment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Payment](#payment)

### PutPayment
Make a payment with predefined identifier string



```js
rebilly.PutPayment({
  "body": {
    "websiteId": null,
    "customerId": null,
    "currency": null,
    "amount": 0
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Payment](#payment)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Payment](#payment)

### GetPayPalAccountCollection
Retrieve a list of PayPal Accounts



```js
rebilly.GetPayPalAccountCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [PayPalAccount](#paypalaccount)

### PostPayPalAccount
Create a PayPal Account



```js
rebilly.PostPayPalAccount({
  "body": {
    "customerId": null,
    "billingAddress": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PayPalAccount](#paypalaccount)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PayPalAccount](#paypalaccount)

### GetPayPalAccount
Retrieve a PayPal Account with specified identifier string



```js
rebilly.GetPayPalAccount({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PayPalAccount](#paypalaccount)

### PutPayPalAccount
Create a PayPal account with predefined ID


```js
rebilly.PutPayPalAccount({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PayPalAccount](#paypalaccount)

### PostPayPalAccountActivation
Activate a PayPal Account

Instead of using this endpoint a PayPal Account will
be authorized on first usage (new transaction or order).



```js
rebilly.PostPayPalAccountActivation({
  "body": {
    "websiteId": "",
    "currency": null
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [PayPalAccountAuthorization](#paypalaccountauthorization)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PayPalAccount](#paypalaccount)

### PostPayPalAccountDeactivation
Deactivate a PayPal Account



```js
rebilly.PostPayPalAccountDeactivation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PayPalAccount](#paypalaccount)

### GetPlanCollection
Retrieve a list of plans



```js
rebilly.GetPlanCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Plan](#plan)

### PostPlan
Create a plan



```js
rebilly.PostPlan({
  "body": {
    "name": "",
    "currency": null,
    "productId": null,
    "pricing": {
      "formula": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Plan](#plan)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Plan](#plan)

### DeletePlan
Delete a Plan with predefined identifier string



```js
rebilly.DeletePlan({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetPlan
Retrieve a plan with specified identifier string



```js
rebilly.GetPlan({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Plan](#plan)

### PutPlan
Create or update a Plan with predefined identifier string



```js
rebilly.PutPlan({
  "body": {
    "name": "",
    "currency": null,
    "productId": null,
    "pricing": {
      "formula": ""
    }
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Plan](#plan)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Plan](#plan)

### GetProductCollection
Retrieve a list of products



```js
rebilly.GetProductCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Product](#product)

### PostProduct
Create a Product



```js
rebilly.PostProduct({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Product](#product)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Product](#product)

### DeleteProduct
Delete a product with predefined identifier string



```js
rebilly.DeleteProduct({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetProduct
Retrieve a product with specified identifier string



```js
rebilly.GetProduct({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Product](#product)

### PutProduct
Create a product with predefined identifier string



```js
rebilly.PutProduct({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Product](#product)

### GetSearch
Search merchant's data to return resources such as customers, invoices, orders, transactions



```js
rebilly.GetSearch({}, context)
```

#### Input
* input `object`
  * q `string`: The default or "global" search. It will search all searchable resources across as many fields as possible.
  * filter `string` (values: is, amount, bin, coupon, currency, date, email, last4, name, paypalUsername, plan, product, tag): The collection items filter requires a special format.
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Search](#search)

### GetShippingZoneCollection
Retrieve a list of shipping zones



```js
rebilly.GetShippingZoneCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [ShippingZone](#shippingzone)

### PostShippingZone
Create a Shipping Zone



```js
rebilly.PostShippingZone({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ShippingZone](#shippingzone)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [ShippingZone](#shippingzone)

### DeleteShippingZone
Delete a shipping zone with predefined identifier string



```js
rebilly.DeleteShippingZone({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetShippingZone
Retrieve a shipping zone with specified identifier string



```js
rebilly.GetShippingZone({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [ShippingZone](#shippingzone)

### PutShippingZone
Create a shipping zone with predefined identifier string



```js
rebilly.PutShippingZone({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [ShippingZone](#shippingzone)

### GetSubscriptionCancellationCollection
Retrieve a list of cancellations for all subscriptions


```js
rebilly.GetSubscriptionCancellationCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [SubscriptionCancellation](#subscriptioncancellation)

### PostSubscriptionCancellation
Cancel a subscription or preview the cancellation parameters before that


```js
rebilly.PostSubscriptionCancellation({
  "body": {
    "subscriptionId": null,
    "churnTime": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SubscriptionCancellation](#subscriptioncancellation)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [SubscriptionCancellation](#subscriptioncancellation)

### DeleteSubscriptionCancellation
Delete a subscription's cancellation. Only draft can be deleted.


```js
rebilly.DeleteSubscriptionCancellation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetSubscriptionCancellation
Retrieve a subscription сancellation with specified identifier string


```js
rebilly.GetSubscriptionCancellation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [SubscriptionCancellation](#subscriptioncancellation)

### PutSubscriptionCancellation
Cancel a subscription


```js
rebilly.PutSubscriptionCancellation({
  "body": {
    "subscriptionId": null,
    "churnTime": ""
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [SubscriptionCancellation](#subscriptioncancellation)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [SubscriptionCancellation](#subscriptioncancellation)

### GetSubscriptionReactivationCollection
Retrieve a list of reactivations for all subscriptions


```js
rebilly.GetSubscriptionReactivationCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [SubscriptionReactivation](#subscriptionreactivation)

### PostSubscriptionReactivation
Reactivate a subscription


```js
rebilly.PostSubscriptionReactivation({
  "body": {
    "subscriptionId": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SubscriptionReactivation](#subscriptionreactivation)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [SubscriptionReactivation](#subscriptionreactivation)

### GetSubscriptionReactivation
Retrieve a subscription reactivation with specified identifier string


```js
rebilly.GetSubscriptionReactivation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [SubscriptionReactivation](#subscriptionreactivation)

### GetSubscriptionCollection
Retrieve a list of subscriptions



```js
rebilly.GetSubscriptionCollection({}, context)
```

#### Input
* input `object`
  * expand `string`: Expand a response to get a full related object included inside
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Accept `string` (values: application/json, text/csv): The response media type
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Subscription](#subscription)

### PostSubscription
Create a subscription. Consider using the upsert
operation to accomplish this task.



```js
rebilly.PostSubscription({
  "body": {
    "orderType": "",
    "customerId": null,
    "websiteId": null,
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * expand `string`: Expand a response to get a full related object included inside
  * body **required** [Subscription](#subscription)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Subscription](#subscription)

### GetSubscription
Retrieve a subscription with specified identifier string



```js
rebilly.GetSubscription({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: Expand a response to get a full related object included inside
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Subscription](#subscription)

### PutSubscription
Create or update a subscription with predefined identifier string



```js
rebilly.PutSubscription({
  "body": {
    "orderType": "",
    "customerId": null,
    "websiteId": null,
    "items": []
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: Expand a response to get a full related object included inside
  * body **required** [Subscription](#subscription)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Subscription](#subscription)

### PostSubscriptionPlanChange
Change a subscription's plan and designate when and if there should be pro rata credits given.
Only active subscriptions with a single plan can be changed.
Edit pending unpaid subscriptions directly regardless the number of plans.



```js
rebilly.PostSubscriptionPlanChange({
  "body": {
    "planId": null,
    "renewalPolicy": "",
    "prorated": true
  },
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [SubscriptionChange](#subscriptionchange)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Subscription](#subscription)

### PostSubscriptionInterimInvoice
Issue an interim invoice for a subscription, typically used in conjunction with plan changes and pro rata adjustments.
This process creates an invoice, adds the subscription's line items to the invoice, and issues the invoice, and applies
payment to it if a transaction id is supplied.



```js
rebilly.PostSubscriptionInterimInvoice({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [SubscriptionInvoice](#subscriptioninvoice)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### GetSubscriptionMatchedRuleCollection
Get matched rules for the subscription


```js
rebilly.GetSubscriptionMatchedRuleCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [MatchedRule](#matchedrule)

### GetSubscriptionTimelineCollection
Retrieve a list of order timeline messages



```js
rebilly.GetSubscriptionTimelineCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [OrderTimeline](#ordertimeline)

### PostSubscriptionTimeline
Create an order Timeline comment



```js
rebilly.PostSubscriptionTimeline({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [OrderTimeline](#ordertimeline)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [OrderTimeline](#ordertimeline)

### DeleteSubscriptionTimeline
Delete an Order Timeline message with predefined identifier string



```js
rebilly.DeleteSubscriptionTimeline({
  "id": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * messageId **required** `string`: The Order Timeline message ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetSubscriptionTimeline
Retrieve a order message with specified identifier string



```js
rebilly.GetSubscriptionTimeline({
  "id": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * messageId **required** `string`: The Order Timeline message ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [OrderTimeline](#ordertimeline)

### GetSubscriptionUpcomingInvoiceCollection
Retrieve an upcoming invoice from the specified subscription.
The endpoint is temporary before upcoming invoices get a complete integration.



```js
rebilly.GetSubscriptionUpcomingInvoiceCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: Expand a response to get a full related object included inside
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Invoice](#invoice)

### PostUpcomingInvoiceIssuance
Issue an upcoming invoice with specified identifier string for early pay.



```js
rebilly.PostUpcomingInvoiceIssuance({
  "body": {},
  "id": "",
  "invoiceId": ""
}, context)
```

#### Input
* input `object`
  * body **required** [InvoiceIssue](#invoiceissue)
  * id **required** `string`: The resource identifier string
  * invoiceId **required** `string`: The Upcoming Invoice ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Invoice](#invoice)

### GetTagCollection
Retrieve a list of tags



```js
rebilly.GetTagCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Tag](#tag)

### PostTag
Create a tag



```js
rebilly.PostTag({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Tag](#tag)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Tag](#tag)

### DeleteTag
Delete a tag.
It's an asynchronous operation.



```js
rebilly.DeleteTag({
  "tag": ""
}, context)
```

#### Input
* input `object`
  * tag **required** `string`: The tag name
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetTag
Retrieve a tag



```js
rebilly.GetTag({
  "tag": ""
}, context)
```

#### Input
* input `object`
  * tag **required** `string`: The tag name
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Tag](#tag)

### PatchTag
Update a tag



```js
rebilly.PatchTag({
  "body": {
    "name": ""
  },
  "tag": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Tag](#tag)
  * tag **required** `string`: The tag name
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Tag](#tag)

### DeleteTagCustomerCollection
Untag a list of customers.
If the customer from the list is already untagged it will be ignored.
It's an asynchronous operation.



```js
rebilly.DeleteTagCustomerCollection({
  "body": {
    "customerIds": []
  },
  "tag": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * customerIds **required** `array`: The list of customer IDs
      * items `string`
  * tag **required** `string`: The tag name
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### PostTagCustomerCollection
Tag a list of customers.
If the customer from the list is already tagged it will be ignored.
It's an asynchronous operation.



```js
rebilly.PostTagCustomerCollection({
  "body": {
    "customerIds": []
  },
  "tag": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * customerIds **required** `array`: The list of customer IDs
      * items `string`
  * tag **required** `string`: The tag name
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### DeleteTagCustomer
Untag a customer



```js
rebilly.DeleteTagCustomer({
  "tag": "",
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * tag **required** `string`: The tag name
  * customerId **required** `string`: The customer identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### PostTagCustomer
Tag a customer



```js
rebilly.PostTagCustomer({
  "tag": "",
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * tag **required** `string`: The tag name
  * customerId **required** `string`: The customer identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetTokenCollection
Retrieve a list of tokens



```js
rebilly.GetTokenCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [PaymentToken](#paymenttoken)

### PostToken
[FramePay](https://rebilly.github.io/framepay-docs/)
is the recommended way to
create a payment token because it minimizes
PCI DSS compliance.  Once a payment token
is created, it can only be used once.

A payment token expires upon first use
or within 30 minutes of the token creation
(whichever comes first).



```js
rebilly.PostToken({
  "body": null
}, context)
```

#### Input
* input `object`
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetToken
Retrieve a token with specified identifier string



```js
rebilly.GetToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [PaymentToken](#paymenttoken)

### GetTransactionCollection
Retrieve a list of transactions



```js
rebilly.GetTransactionCollection({}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * q `string`: The partial search of the text fields.
  * sort `array`: The collection items sort field and order (prefix with "-" for descending sort).
  * Accept `string` (values: application/json, text/csv): The response media type
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [Transaction](#transaction)

### PostTransaction
Create a transactions of type `sale`, `authorize`, or `credit`.
This endpoint supports two main styles of transactions:
  1. A real-time decision and response.
  2. User approval/interaction is required.

A real-time decision is very familiar.  You send a request, and
inspect the `result` of the response for `approved` or `declined`.

However, many transactions, especially those for alternative
methods, require the user to interact with a 3rd party.  You
may be able to envision PayPal, for example, the user must
give permission to complete the payment (or accept the
billing agreement).

Even payment cards may require user approval in the case of
3D secure authentication.  In the event that approval is
required, you will receive a response back and notice
that the `result` is `unknown`.  You will find that the
`status` is `waiting-approval`. And you will find in the
`_links` section of the response a link for the `approvalUrl`.

In this case you would either open the `approvalUrl` in an
iframe or in a pop (better workflow for mobile).



```js
rebilly.PostTransaction({
  "body": {
    "websiteId": null,
    "customerId": null,
    "currency": null,
    "amount": 0,
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [TransactionRequest](#transactionrequest)
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Transaction](#transaction)

### GetTransaction
Retrieve a Transaction with specified identifier string



```js
rebilly.GetTransaction({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Transaction](#transaction)

### PostTransactionCancellation
Cancel a scheduled transaction. Once handled a transaction cannot be canceled


```js
rebilly.PostTransactionCancellation({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Transaction](#transaction)

### GetTransactionGatewayLogCollection
Retrieve Gateway communication Logs for Transaction with specified identifier string


```js
rebilly.GetTransactionGatewayLogCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [TransactionGatewayLog](#transactiongatewaylog)

### GetTransactionMatchedRuleCollection
Get matched rules for the transaction


```js
rebilly.GetTransactionMatchedRuleCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [MatchedRule](#matchedrule)

### PostTransactionRefund
Refund a Transaction with specified identifier string.
Note that the refund will be in the same currency as the original transaction.



```js
rebilly.PostTransactionRefund({
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
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [Transaction](#transaction)

### GetTransactionTimelineCollection
Retrieve a list of transaction timeline messages



```js
rebilly.GetTransactionTimelineCollection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The collection items limit
  * offset `integer`: The collection items offset
  * filter `string`: The collection items filter requires a special format.
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output `array`
  * items [TransactionTimeline](#transactiontimeline)

### PostTransactionTimeline
Create a transaction Timeline comment



```js
rebilly.PostTransactionTimeline({
  "body": {},
  "id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [TransactionTimeline](#transactiontimeline)
  * id **required** `string`: The resource identifier string
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [TransactionTimeline](#transactiontimeline)

### DeleteTransactionTimeline
Delete a Transaction Timeline message with predefined identifier string



```js
rebilly.DeleteTransactionTimeline({
  "id": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * messageId **required** `string`: The Transaction Timeline message ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
*Output schema unknown*

### GetTransactionTimeline
Retrieve a timeline message with specified identifier string



```js
rebilly.GetTransactionTimeline({
  "id": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The resource identifier string
  * messageId **required** `string`: The Transaction Timeline message ID
  * Organization-Id `string`: Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)

#### Output
* output [TransactionTimeline](#transactiontimeline)



## Definitions

### A1Gateway
* A1Gateway: A1Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: A1Gateway credentials object
    * accountId **required** `string`: A1Gateway account ID
    * password **required** `string`: A1Gateway password
  * mpi [A1GatewayMpis](#a1gatewaympis)

### A1GatewayMpis
* A1GatewayMpis `object`: A1Gateway Mpis
  * name **required** `string` (values: PaayMpi, Other)

### AlipayInstrument
* AlipayInstrument: Alipay payment instrument object
  * method **required** [Method](#method)

### AmexVPC
* AmexVPC: AmexVPC config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: AmexVPC credentials object
    * accessCode **required** `string`: Access Code
    * merchantId **required** `string`: Merchant ID
    * password **required** `string`: Password (used for refund, void and capture)
    * user **required** `string`: User (used for refund, void and capture)
  * settings **required** `object`: AmexVPC settings object
    * url **required** `string`: Virtual Payment Client URL

### AmountAdjustment
* AmountAdjustment `object`
  * method **required** `string` (values: none, partial, discount)

### ApcoPay
* ApcoPay: ApcoPay config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: ApcoPay credentials object
    * MerchantID **required** `string`: ApcoPay merchant ID
    * MerchantPassword **required** `string`: ApcoPay merchant password
    * profileID **required** `string`: ApcoPay profile ID
    * secretWord **required** `string`: ApcoPay secret word
  * settings `object`
    * method **required** `string` (values: AFTERPAY, IDEAL, CREDITCLICK, BANCONTACT, ONLINEUBERWEISEN): ApcoPay's method

### ApprovalUrlLink
* ApprovalUrlLink `object`
  * rel **required** `string` (values: approvalUrl): The link type
  * href **required** `string`: The link URL

### AsiaPaymentGateway
* AsiaPaymentGateway: AsiaPaymentGateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: AsiaPaymentGateway credentials object
    * merchantNumber **required** `string`: AsiaPaymentGateway merchant number
    * secretKey **required** `string`: AsiaPaymentGateway secret key for hash

### AstroPay
* AstroPay: AstroPay config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: AstroPay credentials object
    * secret_key **required** `string`: AstroPay secret key
    * web_pay_login **required** `string`: AstroPay web pay status login
    * web_pay_tran_key **required** `string`: AstroPay web pay status password
    * x_login **required** `string`: AstroPay login
    * x_tran_key **required** `string`: AstroPay transaction key
  * settings `object`: AstroPay settings object
    * banks `array`: list of banks which will show on hook page
      * items [AstroPayBanks](#astropaybanks)
    * skipStep `boolean`: Skip step for user to enter their personal information.

### AstroPay-CardInstrument
* AstroPay-CardInstrument: AstroPay Card payment instrument object
  * method **required** [Method](#method)

### AstroPayBanks
* AstroPayBanks `string` (values: CU, SE, BV, BM, SM, OX, BQ, EN, FA, BW, SS, SU, WA, FB, TC, I, BB, B, CA, SB, BL, NB, UI)

### AstroPayCard
* AstroPayCard: AstroPay Card config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: AstroPay Card credentials object
    * secret_key **required** `string`: AstroPay Card secret key
    * x_login **required** `string`: AstroPay Card login
    * x_tran_key **required** `string`: AstroPay Card transaction key

### Attachment
* Attachment `object`
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * createdTime: Creation date/time
  * description `string`: The Attachment description
  * fileId **required** `string`: Linked File object id
  * id
  * name `string`: The Original Attachment name
  * relatedId **required** `string`: Linked object Id
  * relatedType **required** `string` (values: customer, dispute, gateway-timeline-comment, invoice, organization, payment, plan, product, subscription, transaction, customer-timeline-comment, transaction-timeline-comment, order-timeline-comment): Linked object type
  * updatedTime: Latest update date/time

### AttachmentResourceLink
* AttachmentResourceLink `object`
  * rel **required** `string` (values: customer, dispute, invoice, payment, plan, product, subscription, transaction): The link type
  * href **required** `string`: The link URL

### AuthTransactionEmbed
* AuthTransactionEmbed `object`: Auth Transaction object
  * authTransaction [Transaction](#transaction)

### AuthTransactionLink
* AuthTransactionLink `object`
  * rel **required** `string` (values: authTransaction): The link type
  * href **required** `string`: The link URL

### AuthenticationOptions
* AuthenticationOptions `object`
  * authTokenTtl `integer`: The default lifetime of the auth-token in seconds
  * credentialTtl `integer`: The default lifetime of the credential in seconds
  * otpRequired `boolean`: Should OTP be required to exchange token
  * passwordPattern `string`: Allowed password pattern
  * resetTokenTtl `integer`: The default lifetime of the reset-token in seconds

### AuthenticationToken
* AuthenticationToken `object`
  * credentialId: The credential's ID
  * mode `string` (values: password, passwordless): The token's generation mode
  * otpRequired `boolean`: Should OTP be required to exchange this token
  * token `string`: The token identifier string

### AuthenticationTokenMetadata
* AuthenticationTokenMetadata `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * expiredTime `string`: Token's expired time

### AuthorizeNet
* AuthorizeNet: AuthorizeNet Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiLoginId **required** `string`: AuthorizeNet Gateway api login ID
    * transactionKey **required** `string`: AuthorizeNet Gateway Transaction Key

### BBANInstrument
* BBANInstrument: Payment Token instrument object
  * accountNumberType **required** `string` (values: IBAN, BBAN): Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).
  * accountNumber **required** `string`: Bank Account Number
  * accountType **required** `string` (values: checking, savings, other): Bank Account Type
  * bankName `string`: Bank name
  * bic `string`: Bank Identifier Code
  * last4 `string`: Bank Account Number's last 4 digits
  * routingNumber **required** `string`: Bank Routing Number

### BBANType
* BBANType: BBAN type object
  * accountNumberType **required** `string` (values: IBAN, BBAN): Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).
  * accountNumber **required** `string`: Bank's Account Number.
  * accountType **required** `string` (values: checking, savings, other): Bank's Account type.
  * address **required**: The Address.
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * bankName `string`: Bank's name.
  * bic `string`: Bank Identifier Code.
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The Customer's ID.
  * routingNumber **required** `string`: Bank's Routing Number.

### Bambora
* Bambora: Bambora Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiPasscode **required** `string`: Bambora Gateway API Passcode
    * merchantId **required** `string`: Bambora Gateway merchant ID

### BankAccount
* BankAccount `object`
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * accountNumberType `string` (values: BBAN, IBAN): Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).
  * accountType `string` (values: checking, savings, other): Bank's Account type.
  * address: The Address.
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * bankName `string`: Bank's name.
  * bic `string`: Bank Identifier Code
  * createdTime: Bank Account created time
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The Customer's ID.
  * fingerprint `string`: A unique value to identify the Bank Account. It contains alphanumeric values.
  * id: The bank account identifier string
  * last4 `string`: The last 4 digits of the bank account
  * method `string` (values: bank-account): The method of payment instrument
  * routingNumber `string`: Bank's Routing Number.
  * status `string` (values: active, deactivated): Bank Account status
  * updatedTime: Bank Account updated time

### BankAccountCreatePlain
* BankAccountCreatePlain `object`
  * accountNumberType **required** `string` (values: IBAN, BBAN): Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).

### BankAccountCreateToken
* BankAccountCreateToken `object`
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The Customer's ID.
  * token **required** `string`: BankAccountToken ID.

### BankAccountEmbed
* BankAccountEmbed `object`: Bank Account object
  * bankAccount [BankAccount](#bankaccount)

### BankAccountToken
* Bank Account Token `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * billingAddress **required**: The billing address object
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * createdTime: Token created time
  * expirationTime: Token expiration time
  * fingerprint `string`: Device fingerprint hash
  * id: The token identifier string
  * isUsed `boolean`: Whether the token was already used
  * leadSource
    * _links `array`: The links related to resource
    * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
    * campaign `string`: Lead Source's campaign (eg go-big-123)
    * clickId `string`: Lead Source's click id (may come from an ad server)
    * content `string`: Lead Source's content (eg smiley faces)
    * createdTime: LeadSource created time
    * medium `string`: Lead Source's medium (eg search, display)
    * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
    * salesAgent `string`: Lead Source's sales agent (eg James Bond)
    * source `string`: Lead Source's source (eg google, yahoo)
    * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
    * term `string`: Lead Source's term (eg salt shakers)
    * original
      * _links `array`: The links related to resource
      * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
      * campaign `string`: Lead Source's campaign (eg go-big-123)
      * clickId `string`: Lead Source's click id (may come from an ad server)
      * content `string`: Lead Source's content (eg smiley faces)
      * createdTime: LeadSource created time
      * medium `string`: Lead Source's medium (eg search, display)
      * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
      * salesAgent `string`: Lead Source's sales agent (eg James Bond)
      * source `string`: Lead Source's source (eg google, yahoo)
      * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
      * term `string`: Lead Source's term (eg salt shakers)
  * method **required** `string` (values: ach): The token payment method
  * paymentInstrument **required**: The payment instrument details
    * accountNumberType **required** `string` (values: IBAN, BBAN): Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).
  * updatedTime: Token updated time
  * usageTime: Token usage time

### BitPay
* BitPay: BitPay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: BitPay credentials object
    * token **required** `string`: BitPay merchant API token

### Blacklist
* Blacklist `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * createdTime: The blacklist created time
  * expirationTime `string`: The blacklist expiration time
  * id: The blacklist identifier string
  * type **required** `string` (values: payment-card, bank-account, customer-id, email, email-domain, ip-address, country, fingerprint, bin, address): The blacklist type
  * updatedTime: The blacklist updated time
  * value **required** `string`: The blacklist value

### BlueSnap
* BlueSnap: BlueSnap config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: BlueSnap credentials object
    * password **required** `string`: BlueSnap merchant's api password.
    * username **required** `string`: BlueSnap merchant's api username.

### BoletoInstrument
* BoletoInstrument: Boleto payment instrument object
  * method **required** [Method](#method)

### BraintreePayments
* BraintreePayments: BraintreePayments Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * merchantAccountId **required** `string`: BraintreePayments merchant account ID
    * merchantId **required** `string`: BraintreePayments merchant ID
    * privateKey **required** `string`: BraintreePayments Private Key
    * publicKey **required** `string`: BraintreePayments Public Key

### CASHlib
* CASHlib: CASHlib config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: CASHlib credentials object
    * apiKey **required** `string`: CASHlib API Key
    * merchantId **required** `string`: CASHlib merchant id

### CODVoucher
* CODVoucher: COD Voucher config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: COD Voucher credentials object
    * apiKey **required** `string`: COD Voucher API key
    * apiSecret **required** `string`: COD Voucher API secret

### CancelUrlLink
* CancelUrlLink `object`
  * rel **required** `string` (values: cancelUrl): The link type
  * href **required** `string`: The link URL

### CardinalCommerce
* CardinalCommerce: CardinalCommerce Mpi Credentials
  * name **required** `string` (values: PayvisionMpi, Payvision3DS2, CardinalCommerce, PaayMpi, Other)
  * merchantId **required** `string`: Cardinal MerchantId
  * processorId **required** `string`: Cardinal ProcessorId
  * transactionPwd **required** `string`: Cardinal TransactionPwd

### Cardknox
* Cardknox: Cardknox Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * xKey **required** `string`: Cardknox xKey

### CashToCode
* CashToCode: CashToCode config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: CashToCode credentials object
    * cashToCodePassword **required** `string`: CashToCode credentials password
    * cashToCodeUsername **required** `string`: CashToCode credentials Username
    * merchantPassword **required** `string`: Merchant credentials password
    * merchantUsername **required** `string`: Merchant credentials Username
  * settings `object`
    * skipAmountSelection `boolean`: Skip amount selection screen

### Cashflows
* Cashflows: Cashflows Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * authId **required** `string`: Cashflows Gateway auth ID
    * authPassword **required** `string`: Cashflows Gateway auth password

### CauriPayment
* CauriPayment: CauriPayment config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: CauriPayment credentials object
    * privateKey **required** `string`: CauriPayment merchant's private key.
    * publicKey **required** `string`: CauriPayment merchant's public key.

### Cayan
* Cayan: Cayan Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * merchantKey **required** `string`: Cayan Gateway merchant key
    * merchantName **required** `string`: Cayan Gateway merchant name
    * merchantSiteId **required** `string`: Cayan Gateway merchant site ID

### Chase
* Chase: Chase Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * coNumber **required** `string`: Chase Gateway CO Number used for delimited file reports
    * divisionId **required** `string`: Chase Gateway division ID
    * partialAuth **required** `boolean`: Support for Partial Auths
    * password **required** `string`: Chase Gateway Net Connect password
    * username **required** `string`: Chase Gateway Net Connect username

### China-UnionPayInstrument
* China-UnionPayInstrument: China UnionPay payment instrument object
  * method **required** [Method](#method)

### Citadel
* Citadel: Citadel config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Citadel credentials object
    * password **required** `string`: Password
    * storeId **required** `string`: Store ID
    * storeName **required** `string`: Store name
    * username **required** `string`: Username

### Clearhaus
* Clearhaus: Clearhaus Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiKey **required** `string`: Clearhaus api key
  * mpi [ClearhausMpis](#clearhausmpis)

### ClearhausMpi
* ClearhausMpi: Clearhaus Mpi Credentials
  * name **required** `string` (values: ClearhausMpi)
  * acquirerBin **required** `string`: Acquiring institution identification code.
  * apiKey **required** `string`: Mpi Api key
  * merchantId **required** `string`: Merchant account ID or Card Acceptor ID provided by the acquiring bank.

### ClearhausMpis
* ClearhausMpis `object`: Clearhaus Mpis
  * name **required** `string` (values: ClearhausMpi)

### CommonScheduleInstruction
* CommonScheduleInstruction `object`: The calculation instruction of scheduled time
  * method **required** `string` (values: auto, intelligent, immediately, date-interval, day-of-month, day-of-week)

### Condition
* Condition `object`
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation

### Conekta
* Conekta: Conekta config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Conekta credentials object
    * apiKey **required** `string`: Conekta private API key

### Contact
* Contact `object`
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * address `string`: The contact street address
  * address2 `string`: The contact street address (second line)
  * city `string`: The contact city
  * country `string`: The contact country ISO Alpha-2 code
  * createdTime: The contact created time
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId: The contact customer ID
  * emails [ContactEmails](#contactemails)
  * firstName `string`: The contact first name
  * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values, excluding id, customer id, createdTime, updatedTime.
  * id: The contact identifier string
  * lastName `string`: The contact last name
  * organization `string`: The contact organization
  * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
  * postalCode `string`: The contact postal code
  * region `string`: The contact region (state)
  * updatedTime: The contact updated time

### ContactEmails
* ContactEmails `array`: The list of emails
  * items `object`
    * label **required** `string`: The email label
    * primary `boolean`: True if email is primary
    * value **required** `string`: The email value

### ContactObject
* ContactObject `object`
  * address `string`: The contact street address
  * address2 `string`: The contact street address (second line)
  * city `string`: The contact city
  * country `string`: The contact country ISO Alpha-2 code
  * emails [ContactEmails](#contactemails)
  * firstName `string`: The contact first name
  * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
  * lastName `string`: The contact last name
  * organization `string`: The contact organization
  * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
  * postalCode `string`: The contact postal code
  * region `string`: The contact region (state)

### ContactPhoneNumbers
* ContactPhoneNumbers `array`: The list of phone numbers
  * items `object`
    * label **required** `string`: The phone label
    * primary `boolean`: True if phone is primary
    * value **required** `string`: The phone value

### Coppr
* Coppr: Coppr config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Coppr credentials object
    * apiKey **required** `string`: Coppr api key
    * organizationId **required** `string`: Coppr Organization's ID

### Coupon
* Coupon `object`: Coupons and Discounts
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * createdTime: Coupon created time
  * description `string`: Your coupon description. When it is not empty this is used for invoice discount item description,
  * discount **required** [Discount](#discount)
  * expiredTime `string`: Coupon's expire time (end time)
  * issuedTime **required** `string`: Coupon's issued time (start time)
  * redemptionCode: Coupon's redemption code
  * redemptionsCount `integer`: Coupon's redemptions count
  * restrictions `array`: Coupon restrictions
    * items [CouponRestriction](#couponrestriction)
  * status `string` (values: draft, issued, expired): If coupon enabled
  * updatedTime: Coupon updated time.

### CouponExpiration
* CouponExpiration `object`
  * expiredTime **required** `string`: The coupon's expiry time, must be greater than the issued time. Null or empty string will immediately expire the coupon.

### CouponRedemption
* CouponRedemption `object`: Coupons redemption log
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * additionalRestrictions `array`: Additional restrictions for coupon's redemptions
    * items [RedemptionRestriction](#redemptionrestriction)
  * canceledTime: Coupon redemption canceled time
  * createdTime: Coupon redeem time
  * customerId: Customer's ID
  * id
  * redemptionCode: Coupon's redemption code

### CouponRestriction
* CouponRestriction `object`: Coupon restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type

### Credential
* Credential `object`
  * _links `array`: The links related to resource
  * customerId **required** `string`: The credential's customer ID
  * expiredTime `string`: The credential's expired time
  * id: The credential identifier string
  * password **required** `string`: The credential's password
  * username **required** `string`: Credential's username

### Credorax
* Credorax: Credorax Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * merchantId **required** `string`: Credorax Gateway merchant ID
    * merchantMd5Signature **required** `string`: Credorax Gateway md5 signature

### Cryptonator
* Cryptonator: Cryptonator config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Cryptonator credentials object
    * merchant_id **required** `string`: Cryptonator merchant ID
    * secret **required** `string`: Cryptonator secret

### CurrencyCode
* CurrencyCode `string`: ISO 4217 alphabetic currency code

### CustomEventScheduleInstruction
* CustomEventScheduleInstruction `object`: The calculation instruction of scheduled time
  * method **required** `string` (values: date-interval, day-of-month, day-of-week)

### CustomField
* CustomField `object`: A separate Custom Field schema
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * description `string`: The custom field description
  * name `string`: The name of the custom field
  * type **required** `string` (values: array, boolean, datetime, integer, number, string, monetary): Type value    | Description

### Customer
* Customer `object`
  * tags `array`: A list of customer's tags
    * items [Tag](#tag)
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * averageValue [CustomerAverageValue](#customeraveragevalue)
  * createdTime: The customer created time
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * defaultPaymentInstrument [PaymentInstrument](#paymentinstrument)
  * id: The customer identifier string
  * invoiceCount `integer`: An auto-incrementing number based on the sequence of invoices. If set to 0, then this record is a Lead, otherwise is a Customer
  * lastPaymentTime: The most recent time of an approved payment for the customer
  * lifetimeRevenue [CustomerLifetimeRevenue](#customerlifetimerevenue)
  * paymentCount `integer`: The number of approved payments for the customer
  * paymentToken `string`: A write-only payment token; if supplied, it will be converted into a
  * primaryAddress [ContactObject](#contactobject)
  * revision `integer`: The number of times the customer data has been modified.
  * updatedTime: The customer updated time
  * websiteId: The website's ID

### CustomerAverageValue
* CustomerAverageValue `object`
  * amount `number`: Average approved payment amount in Merchant's reporting currency
  * amountUsd `number`: Average approved payment amount in USD
  * currency: Merchant's reporting currency

### CustomerEmbed
* CustomerEmbed `object`: Customer object
  * customer [Customer](#customer)

### CustomerJWT
* CustomerJWT `object`
  * _links `array`: The links related to resource
    * items [CustomerLink](#customerlink)
  * createdTime `string`: Session created time
  * customerId: The customer's ID
  * expiredTime `string`: Session expired time. Defaults to one hour
  * id: The session identifier string
  * invalidate `boolean`: Whether to invalidate token after exchange or not
  * oneTimePassword `string`: The one time password sent via an email. Should contain digits only.
  * token `string`: The session's token used for authentication
  * type `string` (values: customer): Session type
  * updatedTime: Session updated time

### CustomerLifetimeRevenue
* CustomerLifetimeRevenue `object`
  * amount `number`: Revenue amount in Merchant's reporting currency
  * amountUsd `number`: Revenue amount in USD
  * currency: Merchant's reporting currency

### CustomerLink
* CustomerLink `object`
  * rel **required** `string` (values: customer): The link type
  * href **required** `string`: The link URL

### CustomerTimeline
* CustomerTimeline `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * customData `object`: Timeline custom event data. Used with `custom-event` type. Will be transformed to `extraData` two-column table in response
  * customEventType `string`: Timeline custom event type. Used with `custom-event` type. Must be defined using [Customer Timeline custom event API](#operation/PostCustomerTimelineCustomEventType)
  * extraData [TimelineExtraData](#timelineextradata)
  * id: The Timeline message identifier string
  * message `string`: The message that describes the message details
  * occurredTime: Timeline message time
  * triggeredBy `string` (values: rebilly, app, direct-api): Shows who or what triggered the Timeline message
  * type `string` (values: customer-comment-created, customer-created, primary-address-changed, default-payment-instrument-changed, lead-source-changed, custom-fields-changed, coupon-applied, coupon-redeemed, coupon-redemption-canceled, kyc-document-created, kyc-document-accepted, kyc-document-manually-accepted, kyc-document-rejected, kyc-document-manually-rejected, payment-card-expired, payment-instrument-created, payment-instrument-deactivated, customer-blacklisted, customer-payment-card-blacklisted, invoice-created, invoice-issued, invoice-abandoned, invoice-voided, invoice-past-due, invoice-paid, invoice-partially-paid, invoice-disputed, invoice-refunded, invoice-partially-refunded, order-created, order-renewed, order-activated, order-completed, order-reactivated, order-canceled, order-upgraded, order-downgraded, order-churned, order-paid-early, transaction-approved, transaction-canceled, transaction-declined, transaction-abandoned, transaction-refunded, transaction-voided, transaction-discrepancy-found, transaction-amount-discrepancy-found, email-message-sent, custom-event-processed, custom-event, transaction-waiting-gateway): Timeline message type

### CustomerTimelineCustomEvent
* CustomerTimelineCustomEvent `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * createdTime: Customer Timeline Custom event created time
  * id: Customer Timeline Custom Event identifier string
  * name **required** `string`: Customer Timeline Custom Event type name. It must not be similar to any Rebilly system event.
  * updatedTime: Customer Timeline Custom event updated time

### DataCash
* DataCash: DataCash Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * client **required** `string`: DataCash Gateway client
    * masterCardPayoutsClient `string`: DataCash Gateway client for MasterCard payouts (OCT)
    * masterCardPayoutsPassword `string`: DataCash Gateway password for MasterCard payouts (OCT)
    * password **required** `string`: DataCash Gateway password
    * reportGroup `string`: DataCash report group
    * reportPassword `string`: DataCash report password
    * reportUser `string`: DataCash report user
    * visaPayoutsClient `string`: DataCash Gateway client for Visa payouts (OCT)
    * visaPayoutsPassword `string`: DataCash Gateway password for Visa payouts (OCT)
  * mpi [DataCashMpis](#datacashmpis)
  * settings `object`: Datacash settings object
    * delay `integer`: Auto Capture delay (in hours)
    * policy `integer`: Policy

### DataCashMpi
* DataCashMpi: DataCash Integrated
  * name **required** `string` (values: DataCashMpi)

### DataCashMpis
* DataCashMpis `object`: DataCash Mpis
  * name **required** `string` (values: DataCashMpi)

### DefaultPaymentInstrumentLink
* DefaultPaymentInstrumentLink `object`
  * rel **required** `string` (values: defaultPaymentInstrument): The link type
  * href **required** `string`: The link URL

### Dengi
* Dengi: Dengi Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * projectId **required** `string`: Dengi Gateway project ID
    * publicKey **required** `string`: Dengi Gateway public key
    * refundKey **required** `string`: Dengi Gateway refund key

### Discount
* Discount `object`
  * type `string` (values: fixed, percent): Discount type

### Dispute
* Dispute `object`
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * acquirerReferenceNumber `string`: The dispute's acquirer reference number
  * amount `number`: The dispute amount
  * category `string` (values: fraud, unrecognized, product-not-received, product-unacceptable, product-not-refunded, duplicate, subscription-canceled, uncategorized): The dispute's category
  * createdTime: Dispute created time
  * currency **required**
  * customerId `string`: The dispute's customer ID
  * deadlineTime `string`: Dispute deadline time
  * id: The dispute identifier string
  * postedTime **required** `string`: Dispute posted time
  * rawResponse `string`: Dispute raw response from gateway
  * reasonCode **required** `string` (values: 1000, 10.1, 10.2, 10.3, 10.4, 10.5, 11.1, 11.2, 11.3, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 2, 30, 31, 35, 37, 40, 41, 42, 46, 47, 49, 50, 53, 54, 55, 57, 59, 60, 62, 7, 70, 71, 72, 73, 74, 75, 76, 77, 79, 8, 80, 81, 82, 83, 85, 86, 93, 00, 63, A01, A02, A08, F10, F14, F22, F24, F29, C02, C04, C05, C08, C14, C18, C28, C31, C32, M10, M49, P01, P03, P04, P05, P07, P08, P22, P23, R03, R13, M01, FR1, FR4, FR6, AL, AP, AW, CA, CD, CR, DA, DP, DP1, EX, IC, IN, IS, LP, N, NA, NC, P, RG, RM, RN1, RN2, SV, TF, TNM, UA01, UA02, UA32, UA99, UA03, UA10, UA11, UA12, UA18, UA20, UA21, UA22, UA23, UA28, UA30, UA31, UA38, duplicate, fraudulent, subscription_canceled, product_unacceptable, product_not_received, unrecognized, credit_not_processed, customer_initiated, incorrect_account_details, insufficient_funds, bank_cannot_process, debit_not_authorized, general): The dispute's reason code
  * resolvedTime: Dispute resolved time
  * status **required** `string` (values: response-needed, under-review, forfeited, won, lost, unknown): The dispute's status
  * transactionId **required** `string`: The dispute's transaction ID
  * type **required** `string` (values: information-request, first-chargeback, second-chargeback, arbitration): The dispute's type
  * updatedTime: Dispute updated time

### DisputeLink
* DisputeLink `object`
  * rel **required** `string` (values: dispute): The link type
  * href **required** `string`: The link URL

### DueTimeShiftInstruction
* DueTimeShiftInstruction `object`: The calculation instruction of due time.
  * duration **required** `integer`: The number of the units

### EPG
* EPG: EPG config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: EPG credentials object
    * merchantId **required** `string`: Merchant ID
    * merchantKey **required** `string`: Merchant key
    * merchantPassword **required** `string`: Merchant password
    * productId **required** `string`: Product ID

### EPSInstrument
* EPSInstrument: EPS payment instrument object
  * method **required** [Method](#method)

### EcorePay
* EcorePay: EcorePay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * accountAuth **required** `string`: EcorePay Account Auth
    * accountId **required** `string`: EcorePay Account ID

### Elavon
* Elavon: Elavon config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Elavon credentials object
    * ssl_merchant_id **required** `string`: Elavon merchant ID
    * ssl_pin **required** `string`: Elavon pin
    * ssl_user_id **required** `string`: Elavon user ID

### Error
* Error `object`
  * error `string`
  * status `integer`: The HTTP status code.
  * title `string`: A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
  * type `string`: A URI reference [[RFC3986](https://tools.ietf.org/html/rfc3986)] that identifies the problem type. It should provide human-readable documentation for the problem type. When this member is not present, its value is assumed to be "about:blank".

### EventType
* EventType `string` (values: dispute-created, gateway-account-requested, transaction-processed, subscription-activated, subscription-canceled, subscription-created, subscription-renewed, payment-card-expired, invoice-past-due, invoice-paid, transaction-declined, transaction-process-requested, risk-score-changed, transaction-discrepancy-found): Rebilly event type

### File
* File `object`
  * tags `array`: The tags list
    * items `string`
  * _links `array`: The links related to resource
  * createdTime: The upload date/time
  * description `string`: The File description
  * extension `string`: The File extension
  * height `integer`: Image height, applicable to images only
  * id
  * isPublic `boolean`: Is the file available publicly (without authentication). If true, the permalink in the _links section contains the public URL.
  * mime `string` (values: image/png, image/jpeg, image/gif, application/pdf, audio/mpeg): The mime type
  * name `string`: Original File name
  * sha1 `string`: Hash sum of the file
  * size `integer`: The File size in bytes
  * updatedTime: The latest update date/time
  * width `integer`: Image width, applicable to images only

### FileCreateFromInline
* FileCreateFromInline `object`
  * tags `array`: The tags list
    * items `string`
  * description `string`: The file description
  * file **required** `string`: The file in base64 encoded format.
  * isPublic `boolean`: The File visibility. If public a permalink is provided.
  * name `string`: The file name used for downloading

### FileCreateFromUrl
* FileCreateFromUrl `object`
  * tags `array`: The tags list
    * items `string`
  * description `string`: The file description
  * isPublic `boolean`: The File visibility. If public a permalink is provided.
  * name `string`: The file name used for downloading
  * url **required** `string`: The URL of the file to upload.

### FileDownloadLink
* FileDownloadLink `object`
  * rel **required** `string` (values: download): The link type
  * href **required** `string`: The link URL

### FileEmbed
* FileEmbed `object`: File object
  * file [File](#file)

### FileLink
* FileLink `object`
  * rel **required** `string` (values: file): The link type
  * href **required** `string`: The link URL

### FinTecSystems
* FinTecSystems: FinTecSystems config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: FinTecSystems credentials object
    * apiKey **required** `string`: FinTecSystems api key
  * settings **required** `object`: FinTecSystems settings object
    * recipientBIC **required** `string`: BIC of the recipient account
    * recipientCountry **required** `string` (values: AT, CH, DE): Two letter country code
    * recipientHolder **required** `string`: Account holder of the recipient account
    * recipientIBAN **required** `string`: IBAN of the recipient account

### Finrax
* Finrax: Finrax config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Finrax credentials object
    * businessToken **required** `string`: Finrax business token

### Flexepin
* Flexepin: Flexepin Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiKey **required** `string`: Flexepin API Key
    * apiSecret **required** `string`: Flexepin API Secret

### FlexepinInstrument
* FlexepinInstrument: Flexepin payment instrument object
  * method **required** [Method](#method)

### Forte
* Forte: Forte Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * accountId **required** `string`: Forte Gateway account ID
    * apiAccessId **required** `string`: Forte Gateway api access ID
    * apiSecretKey **required** `string`: Forte Gateway api secret key
    * locationId **required** `string`: Forte Gateway location ID

### FundSend
* FundSend: FundSend Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * clientId **required** `string`: FundSend Gateway client ID
    * secretWord **required** `string`: FundSend Gateway secret word

### GET
* GET: GET Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * accountId **required** `string`: GET Gateway account ID
  * mpi [GETMpis](#getmpis)

### GETMpis
* GETMpis `object`: GET Mpis
  * name **required** `string` (values: PaayMpi, Other)

### GatewayAccount
* GatewayAccount `object`
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time

### GatewayAccountEmbed
* GatewayAccountEmbed `object`: Gateway Account object
  * gatewayAccount [GatewayAccount](#gatewayaccount)

### GatewayAccountLink
* GatewayAccountLink `object`
  * rel **required** `string` (values: gatewayAccount): The link type
  * href **required** `string`: The link URL

### Gigadat
* Gigadat: Gigadat config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Gigadat credentials object
    * accessToken **required** `string`: Gigadat access token
    * campaignId **required** `string`: Gigadat campaign ID
    * securityToken **required** `string`: Gigadat security token
  * settings `object`
    * sandbox **required** `boolean`: True if gateway account is in sandbox mode

### GlobalOne
* GlobalOne: GlobalOne Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * sharedSecret **required** `string`: GlobalOne Gateway shared secret
    * terminalId **required** `string`: GlobalOne Gateway terminal ID

### Gooney
* Gooney: Gooney config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Gooney credentials object
    * apiKey **required** `string`: Gooney API key
    * apiPassword `string`: Gooney API password
    * apiSecret **required** `string`: Gooney API secret
    * apiUser `string`: Gooney API user

### Gpaysafe
* Gpaysafe: Gpaysafe Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiKey **required** `string`: Gpaysafe apiKey

### Greenbox
* Greenbox: Greenbox config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Greenbox credentials object
    * clientId **required** `string`: Greenbox client ID
    * clientSecret **required** `string`: Greenbox client secret
    * locationId **required** `string`: Greenbox location ID

### IBANInstrument
* IBANInstrument: Payment Token instrument object
  * accountNumberType **required** `string` (values: IBAN, BBAN): Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).
  * accountNumber **required** `string`: Bank Account Number. Detailed information about all ISO 13616-compliant national IBAN formats is available
  * bankName `string`: Bank name
  * bic `string`: Bank Identifier Code
  * last4 `string`: Bank Account Number's last 4 digits

### IBANType
* IBANType: IBAN type object
  * accountNumberType **required** `string` (values: IBAN, BBAN): Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).
  * accountNumber **required** `string`: Bank's Account Number. Detailed information about all ISO 13616-compliant national IBAN formats is available
  * address **required**: The Address.
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * bankName `string`: Bank's name.
  * bic `string`: Bank Identifier Code.
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The Customer's ID.

### INOVAPAY
* INOVAPAY: INOVAPAY config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: INOVAPAY credentials object
    * apiKey **required** `string`: INOVAPAY API key
    * apiSecret **required** `string`: INOVAPAY API secret

### Ilixium
* Ilixium: Ilixium Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Ilixium credentials object
    * accountId **required** `string`: Ilixium Gateway account ID
    * digestPassword **required** `string`: Ilixium Gateway digest password
    * merchantId **required** `string`: Ilixium Gateway merchant ID
  * mpi [IlixiumMpis](#ilixiummpis)
  * settings `object`: Ilixium settings object
    * useIpFrame `boolean`: Force Ilixium to process via Ip Frame

### IlixiumMpi
* IlixiumMpi: Ilixium Integrated
  * name **required** `string` (values: IlixiumMpi)

### IlixiumMpis
* IlixiumMpis `object`: IlixiumMpis Mpis
  * name **required** `string` (values: IlixiumMpi)

### Ingenico
* Ingenico: Ingenico Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiKeyId **required** `string`: Ingenico Gateway api key ID
    * apiSecretKey **required** `string`: Ingenico Gateway api secret key
    * merchantId **required** `string`: Ingenico Gateway merchant ID
    * skipFraudService `boolean`: Ingenico skip fraud service
  * mpi [IngenicoMpis](#ingenicompis)

### IngenicoMpi
* IngenicoMpi: Ingenico Integrated
  * name **required** `string` (values: IngenicoMpi)

### IngenicoMpis
* IngenicoMpis `object`: Ingenico Mpis
  * name **required** `string` (values: IngenicoMpi)

### InitialInvoiceEmbed
* InitialInvoiceEmbed `object`: Initial Invoice object
  * initialInvoice [Invoice](#invoice)

### InitialInvoiceLink
* InitialInvoiceLink `object`
  * rel **required** `string` (values: initialInvoice): The link type
  * href **required** `string`: The link URL

### Inovio
* Inovio: Inovio config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Inovio credentials object
    * password **required** `string`: Inovio password
    * username **required** `string`: Inovio username
  * mpi [InovioMpis](#inoviompis)
  * settings **required** `object`: Inovio settings object
    * merchantAccountId **required** `string`: Inovio merchant account ID
    * productId **required** `string`: Inovio product ID
    * websiteId **required** `string`: Inovio website ID

### InovioMpi
* InovioMpi: Inovio Integrated
  * name **required** `string` (values: InovioMpi)

### InovioMpis
* InovioMpis `object`: Inovio Mpis
  * name **required** `string` (values: InovioMpi)

### InstaDebit
* InstaDebit: InstaDebit config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: InstaDebit credentials object
    * merchantId **required** `string`: InstaDebit merchant account number
    * password **required** `string`: InstaDebit merchant account password

### Intuit
* Intuit: Intuit Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * clientId **required** `string`: The Intuit client_id key
    * clientSecret **required** `string`: The Intuit client_secret key

### InvalidError
* InvalidError: Invalid data was sent
  * error `string`
  * status `integer`: The HTTP status code.
  * title `string`: A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
  * type `string`: A URI reference [[RFC3986](https://tools.ietf.org/html/rfc3986)] that identifies the problem type. It should provide human-readable documentation for the problem type. When this member is not present, its value is assumed to be "about:blank".
  * invalidFields `array`
    * items `object`
      * field `string`: The field name. Dot notation is used for nested object field names.
      * message `string`

### Invoice
* Invoice `object`
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * abandonedTime: Invoice abandoned time
  * amount `number`: The Invoice's amount
  * amountDue `number`: The Invoice's due amount
  * autopayRetryNumber `integer`: Invoice autopay retry number
  * autopayScheduledTime `string`: Invoice autopay scheduled time
  * billingAddress: Invoice's billing address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * collectionPeriod `integer`: Collection Period - difference between paidTime and issuedTime in days.
  * createdTime: Invoice created time
  * currency **required**
  * customerId **required**: The customer's ID
  * delinquentCollectionPeriod `integer`: Delinquent Collection Period - difference between paidTime and dueTime in days.
  * deliveryAddress: Invoice's delivery address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * discountAmount `number`: The Invoice's discounts amount
  * discounts `array`: Discounts applied
    * items
      * amount `number`: Total amount that was discounted by this Coupon
      * description `string`: Discount description
      * redemptionCode: Coupon's redemption code
      * redemptionId: Redemption ID
  * dueReminderNumber `integer`: Number of past due reminder events triggered
  * dueReminderTime: Time past due reminder event will be triggered
  * dueTime: Invoice due time
  * id: The invoice identifier string
  * invoiceNumber `integer`: An auto-incrementing number based on the sequence of invoices for any particular customer.
  * issuedTime: Invoice issued time
  * items `array`: Invoice Items array
    * items [InvoiceItem](#invoiceitem)
  * notes `string`: Notes for the customer which will be displayed on the invoice
  * organizationId: The organization's ID
  * paidTime: Invoice paid time
  * poNumber `string`: Purchase order number which will be displayed on the invoice
  * retryInstruction `object`: The invoice retry instruction
    * afterAttemptPolicies **required** `array`: The policy on the attempt finishes
      * items `string` (values: change-subscription-renewal-time)
    * afterRetryEndPolicies **required** `array`: The policy on the retry ends
      * items `string` (values: abandon-invoice, cancel-subscription)
    * attempts **required** `array`
      * items `object`
        * scheduleInstruction **required** [InvoiceRetryScheduleInstruction](#invoiceretryscheduleinstruction)
  * revision `integer`: The number of times the invoice data has been modified.
  * shippingAmount `number`: The Invoice's shipping amount
  * status `string` (values: draft, unpaid, paid, past-due, delinquent, abandoned, voided, partially-paid, partially-refunded, refunded, disputed): Invoice status.
  * subscriptionId: The related Subscription's ID if available, otherwise null
  * subtotalAmount `number`: The Invoice's subtotal amount
  * taxAmount `number`: The Invoice's taxes amount
  * taxes `array`: Taxes applied to this invoice
    * items
      * amount `number`: Tax amount
      * description `string`: Tax description
  * transactions `array`: Invoice transactions array
    * items [Transaction](#transaction)
  * type `string` (values: initial, renewal, interim, cancellation, one-time, refund, charge): Invoice type.
  * updatedTime: Invoice updated time
  * voidedTime: Invoice voided time
  * websiteId **required**: The website's ID

### InvoiceDiscount
* InvoiceDiscount `object`
  * amount `number`: Total amount that was discounted by this Coupon
  * description `string`: Discount description
  * redemptionCode: Coupon's redemption code
  * redemptionId: Redemption ID

### InvoiceIssue
* InvoiceIssue `object`
  * dueTime `string`: Invoice due time. Will be set same as `issuedTime` if `null` or omitted.
  * issuedTime `string`: Invoice issued time. Will be issued immediately if `null` or omitted.

### InvoiceItem
* InvoiceItem `object`
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * createdTime: Invoice item created time
  * description `string`: Invoice item's description
  * discountAmount `number`: Invoice item discount amount
  * id: The website identifier string
  * periodEndTime `string`: End time
  * periodNumber `integer`: Invoice item subscription period number
  * periodStartTime `string`: Start time
  * price `number`: Invoice item's total price
  * productId: The product's ID
  * quantity `integer`: Invoice item's quantity
  * type **required** `string` (values: debit, credit): Invoice item's type
  * unitPrice **required** `number`: Invoice item's price
  * updatedTime: Invoice item updated time

### InvoiceLink
* InvoiceLink `object`
  * rel **required** `string` (values: invoice): The link type
  * href **required** `string`: The link URL

### InvoiceReissue
* InvoiceReissue `object`
  * dueTime `string`: Invoice due time. Will be set as current date-time if `null` or omitted.

### InvoiceRetryScheduleInstruction
* InvoiceRetryScheduleInstruction `object`: The calculation instruction of scheduled time
  * method **required** `string` (values: intelligent, immediately, date-interval, day-of-month, day-of-week)

### InvoiceTax
* InvoiceTax `object`
  * amount `number`: Tax amount
  * description `string`: Tax description

### InvoiceTimeShift
* InvoiceTimeShift `object`: The invoice time shift in conjunction with `billingTiming` allows to setup different billing use cases such as:
  * dueTimeShift [DueTimeShiftInstruction](#duetimeshiftinstruction)
  * issueTimeShift [IssueTimeShiftInstruction](#issuetimeshiftinstruction)

### InvoiceTimeline
* InvoiceTimeline `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * extraData [TimelineExtraData](#timelineextradata)
  * id: The Timeline message identifier string
  * message `string`: The message that describes the message details
  * occurredTime: Timeline message time
  * triggeredBy `string` (values: rebilly, app, direct-api): Shows who or what triggered the Timeline event
  * type `string` (values: timeline-comment-created, invoice-created, invoice-issued, invoice-abandoned, invoice-voided, invoice-past-due, invoice-paid, invoice-partially-paid, invoice-disputed, invoice-refunded, invoice-partially-refunded, invoice-renewal-payment-declined, email-message-sent, coupon-applied, transaction-approved, transaction-abandoned, transaction-canceled, transaction-declined, transaction-refunded, transaction-voided): Timeline message type

### InvoiceTransactionAllocation
* InvoiceTransactionAllocation `object`
  * _links `array`: The links related to resource
  * amount `number`
  * currency
  * invoiceId [ResourceId](#resourceid)
  * transactionId [ResourceId](#resourceid)

### InvoicesEmbed
* InvoicesEmbed `object`: Invoices collection
  * invoices `array`
    * items [Invoice](#invoice)

### InvoicesLink
* InvoicesLink `object`
  * rel **required** `string` (values: invoices): The link type
  * href **required** `string`: The link URL

### IpayOptions
* IpayOptions: Ipay Options config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Ipay Options credentials object
    * rcode **required** `string`: Ipay Options rcode
    * sid **required** `string`: Ipay Options website ID
  * settings **required** `object`: Ipay Options settings object
    * extraStep `boolean`: Show extra step for user to enter their email and DNI number
    * platform `string` (values: SOAP, TxHandler): Platform which IpayOptions will process.
    * subdomain `string` (values: miglite, w88asiapay): Subdomain to use when sending request to IpayOptions.

### IssueTimeShiftInstruction
* IssueTimeShiftInstruction `object`: The calculation instruction of billing time.
  * chronology **required** `string` (values: before): The chronology of the billing time relatively to the service period start.
  * duration **required** `integer`: The number of the units

### JetPay
* JetPay: JetPay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * TerminalID **required** `string`: JetPay Gateway terminal ID

### Jeton
* Jeton: Jeton Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiKey **required** `string`: Jeton apiKey
  * settings `object`
    * method **required** `string` (values: CHECKOUT, DIRECT, QR, JETGO): Jeton's method

### KlarnaInstrument
* KlarnaInstrument: Klarna payment instrument object
  * method **required** [Method](#method)

### KycDocument
* KycDocument `object`
  * _links `array`: The links related to resource
  * createdTime: Creation date/time
  * customerId **required**: Linked Customer object id
  * documentMatches [KycDocumentMatches](#kycdocumentmatches)
  * documentType **required** `string` (values: identity-proof, address-proof): Document type submitted for validation, only identity-proof type is analyzed in an automated manner.
  * fileId **required**: Linked File object id
  * id
  * processedTime: Processing date/time
  * rejectionReason [KycDocumentRejection](#kycdocumentrejection)
  * reviewTime: Date and time of manual review.
  * reviewerId `string`: Reviewer's user ID.
  * reviewerName `string`: Reviewer's first and last name.
  * status **required** `string` (values: pending, in-progress, accepted, rejected): Status of the validation.
  * updatedTime: Latest update date/time

### KycDocumentMatches
* KycDocumentMatches `object`
  * data `object`
    * containsImage `boolean`: Flag that indicates if there is an image that contains a face on it
    * dateOfBirth: The date of birth found on the document, null if not found
    * expiryDate: The expiry date found on the document, null if not found
    * firstName `string`: The customer first name if it was matched, null otherwise
    * hasMinimalAge `boolean`: Checks the minimal age, 21+ for USA and 18+ for all other countries. Null if dateOfBirth could not be determined.
    * isIdentityDocument `boolean`: Flag that indicates if this looks like and ID
    * isPublishedOnline `boolean`: If there is an exact match found online
    * issueDate: The issued date found on the document, null if not found
    * lastName `string`: The customer last name if it was matched, null otherwise
  * score `number`: The calculated score that represents the % of confidence that this ID represents the given customer

### KycDocumentRejection
* KycDocumentRejection `object`
  * message `string`: The rejection message
  * type `string` (values: document-unreadable, document-expired, document-not-matching, underage-person, other)

### LPG
* LPG: LPG config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: LPG credentials object
    * payoutPassword `string`: LPG payout account password
    * payoutUsername `string`: LPG payout account username
    * publicKey **required** `string`: LPG public API key
    * secureKey **required** `string`: LPG secure API key

### LeadSource
* LeadSource
  * _links `array`: The links related to resource
  * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
  * campaign `string`: Lead Source's campaign (eg go-big-123)
  * clickId `string`: Lead Source's click id (may come from an ad server)
  * content `string`: Lead Source's content (eg smiley faces)
  * createdTime: LeadSource created time
  * medium `string`: Lead Source's medium (eg search, display)
  * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
  * salesAgent `string`: Lead Source's sales agent (eg James Bond)
  * source `string`: Lead Source's source (eg google, yahoo)
  * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
  * term `string`: Lead Source's term (eg salt shakers)
  * original
    * _links `array`: The links related to resource
    * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
    * campaign `string`: Lead Source's campaign (eg go-big-123)
    * clickId `string`: Lead Source's click id (may come from an ad server)
    * content `string`: Lead Source's content (eg smiley faces)
    * createdTime: LeadSource created time
    * medium `string`: Lead Source's medium (eg search, display)
    * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
    * salesAgent `string`: Lead Source's sales agent (eg James Bond)
    * source `string`: Lead Source's source (eg google, yahoo)
    * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
    * term `string`: Lead Source's term (eg salt shakers)

### LeadSourceData
* LeadSourceData `object`
  * _links `array`: The links related to resource
  * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
  * campaign `string`: Lead Source's campaign (eg go-big-123)
  * clickId `string`: Lead Source's click id (may come from an ad server)
  * content `string`: Lead Source's content (eg smiley faces)
  * createdTime: LeadSource created time
  * medium `string`: Lead Source's medium (eg search, display)
  * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
  * salesAgent `string`: Lead Source's sales agent (eg James Bond)
  * source `string`: Lead Source's source (eg google, yahoo)
  * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
  * term `string`: Lead Source's term (eg salt shakers)

### LeadSourceEmbed
* LeadSourceEmbed `object`: Lead Source object
  * leadSource [LeadSource](#leadsource)

### LeadSourceLink
* LeadSourceLink `object`
  * rel **required** `string` (values: leadSource): The link type
  * href **required** `string`: The link URL

### Link
* Link `object`
  * href **required** `string`: The link URL

### MatchedRule
* MatchedRule `object`
  * context `object`: Event's context
  * description `string`: Rule's description
  * event [EventType](#eventtype)
  * id: Event tracking id
  * occurredTime: Time when event occurred.
  * processedRules `object`: Processed rules
    * actions `array`: Rule actions applied
      * items `string`
    * name `string`: Rule name
    * result `string`: Rule result
  * rulesVersion `integer`: Rule version

### Method
* Method `string` (values: payment-card, ach, bank-account, cash, check, paypal, Alipay, ApplePay, AstroPay Card, bank-transfer, bitcoin, Boleto, cash-deposit, CASHlib, CashToCode, China UnionPay, CODVoucher, Conekta-oxxo, domestic-cards, echeck, ecoPayz, ecoVoucher, EPS, ePay.bg, Finrax, Flexepin, Giropay, GooglePay, Gpaysafe, iDebit, iDEAL, INOVAPAY-pin, INOVAPAY-wallet, InstaDebit, instant-bank-transfer, Interac-online, Interac-eTransfer, Interac-express-connect, Interac, invoice, Jeton, Klarna, LPG-online, LPG-payment-card, miscellaneous, Netbanking, Neteller, Nordea-Solo, OchaPay, online-bank-transfer, Onlineueberweisen, Pagsmile-lottery, Pagsmile-deposit-express, PayCash, Paysafecard, Pay4Fun, PinPay, phone, POLi, Przelewy24, QQPay, Resurs, SEPA, Skrill, Skrill Rapid Transfer, SMSVoucher, SparkPay, swift-dbt, ToditoCash-card, Trustly, UPayCard, voucher, WeChat Pay, Zotapay): The payment method

### Moneris
* Moneris: Moneris Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiToken **required** `string`: Moneris Gateway api token
    * storeId **required** `string`: Moneris Gateway store ID

### MpiName
* MpiName `string` (values: PayvisionMpi, WirecardMpi, IlixiumMpi, DataCashMpi, OptimalMpi, PaysafeMpi, IngenicoMpi, CardinalCommerce, PaayMpi, Panamerican, eMerchantPayMpi, SecureTradingMpi, ClearhausMpi, Other): The Merchant plug-in Name

### MtaPay
* MtaPay: MTA Pay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * accountId **required** `string`: MTA Pay Gateway account ID
    * md5key **required** `string`: MTA Pay Gateway md5key
    * partyId **required** `string`: MTA Pay Gateway party ID
  * settings **required** `object`: MTA Pay settings object
    * goods **required** `string`: MTA Pay Gateway goods
    * mobilePay **required** `string`: MTA Pay Gateway mobile pay param

### NMI
* NMI: NMI Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * password **required** `string`: NMI Gateway store ID
    * username **required** `string`: NMI Gateway api token
  * mpi [NMIMpis](#nmimpis)

### NMIMpis
* NMIMpis `object`: NMI Mpis
  * name **required** `string` (values: PaayMpi, Other)

### Netbanking
* Netbanking: Netbanking config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Netbanking credentials object
    * midcode **required** `string`: Netbanking MID code
    * midsecret **required** `string`: Netbanking MID secret key

### Neteller
* Neteller: Neteller Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Neteller credentials object
    * clientId **required** `string`: Neteller App Client ID
    * clientSecret **required** `string`: Neteller App Client Secret
    * webhookSecretKey **required** `string`: Neteller Webhook Secret Key
  * settings `object`: Neteller settings object
    * netellerGo `boolean`: Enable NETELLERgo! payment flow

### NinjaWallet
* NinjaWallet: NinjaWallet config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: NinjaWallet credentials object
    * apiKey **required** `string`: NinjaWallet api key
    * passphrase **required** `string`: NinjaWallet passphrase
    * secret **required** `string`: NinjaWallet secret

### OchaPay
* OchaPay: OchaPay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiPassword **required** `string`: OchaPay Gateway api password
    * apiUsername **required** `string`: OchaPay Gateway username
    * secretWord **required** `string`: OchaPay Gateway secret word

### OnBoardingUrlLink
* OnBoardingUrlLink `object`
  * rel **required** `string` (values: onBoardingUrl): The link type
  * href **required** `string`: The link URL

### Onlineueberweisen
* Onlineueberweisen: Onlineueberweisen config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Onlineueberweisen credentials object
    * apiKey **required** `string`: Onlineueberweisen API Key
    * nuaPayAccountId `string`: NuaPay account ID for reconciliation
    * nuaPayApiKey `string`: NuaPay API Key for reconciliation
  * settings **required** `object`: Onlineueberweisen settings object
    * autoAbandonTtl **required** `integer`: Auto-abandon if transaction is not reconciled after x hours
    * payformCode `string`: Onlineueberweisen payform code to use customized Payform template

### Optimal
* Optimal: Optimal Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * accountNum **required** `string`: Optimal Gateway account number
    * storeId **required** `string`: Optimal Gateway store ID
    * storePwd **required** `string`: Optimal Gateway store password
  * mpi [OptimalMpis](#optimalmpis)

### OptimalMpi
* OptimalMpi: Optimal Integrated
  * name **required** `string` (values: OptimalMpi)

### OptimalMpis
* OptimalMpis `object`: Optimal Mpis
  * name **required** `string` (values: OptimalMpi)

### OrderTimeline
* OrderTimeline `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * extraData [TimelineExtraData](#timelineextradata)
  * id: The Timeline message identifier string
  * message `string`: The message that describes the message details
  * occurredTime: Timeline message time
  * triggeredBy `string` (values: rebilly, app, direct-api): Shows who or what triggered the Timeline message
  * type `string` (values: timeline-comment-created, order-renewed, order-activated, order-completed, order-reactivated, order-canceled, order-upgraded, order-downgraded, order-billing-address-changed, order-delivery-address-changed, order-renewal-time-changed, order-churned, order-custom-fields-changed, order-items-changed, order-billing-anchor-changed, order-recurring-interval-changed, order-risk-metadata-changed, order-paid-early, order-quantity-changed, email-message-sent, coupon-applied, invoice-created, invoice-issued, invoice-abandoned, invoice-voided, invoice-past-due, invoice-paid, invoice-partially-paid, invoice-disputed, invoice-refunded, invoice-partially-refunded, invoice-renewal-payment-declined): Timeline message type

### Organization
* Organization `object`
  * _links `array`: The links related to resource
    * items [schemas_SelfLink](#schemas_selflink)
  * address `string`: The organization street address
  * address2 `string`: The organization street address
  * city `string`: The organization city
  * country **required** `string`: The organization country ISO Alpha-2 code
  * createdTime: The organization created time
  * emails [schemas_ContactEmails](#schemas_contactemails)
  * id: The organization identifier string
  * invoiceTimeZone `string`: Invoice will use this time zone to display time otherwise UTC will be used. Example "America/New_York"
  * isPrimary `boolean`: True, if Organization is primary (available to set as true only, other organizations will become as isPrimary=false)
  * name **required** `string`: The organization name
  * phoneNumbers [schemas_ContactPhoneNumbers](#schemas_contactphonenumbers)
  * postalCode `string`: The organization postal code
  * region `string`: The organization region (state)
  * taxDescriptor `string`: The organization's tax label. This will be displayed on the invoice.
  * updatedTime: The organization updated time

### OrganizationEmbed
* OrganizationEmbed `object`: Organization object
  * organization [Organization](#organization)

### OrganizationLink
* OrganizationLink `object`
  * rel **required** `string` (values: organization): The link type
  * href **required** `string`: The link URL

### Other
* Other: Other
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, eMerchantPayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PayvisionMpi, Payvision3DS2, CardinalCommerce, PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)

### PaayMpi
* PaayMpi: Paay
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, eMerchantPayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PayvisionMpi, Payvision3DS2, CardinalCommerce, PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)
  * name **required** `string` (values: PaayMpi, Other)
  * apiKey **required** `string`: Paay ApiKey
  * mpiUrl **required** `string`: Paay MPI url
  * sandboxMpiUrl **required** `string`: Paay sandbox MPI url
  * secret **required** `string`: Paay secret

### Pagsmile
* Pagsmile: Pagsmile Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * appId **required** `string`: Pagsmile app ID
    * merchantId **required** `string`: Pagsmile merchant ID
    * secretKey **required** `string`: Pagsmile secret key

### Panamerican
* Panamerican: Panamerican config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Panamerican credentials object
    * key **required** `string`: Panamerican's key
    * password **required** `string`: Panamerican's Password
  * mpi [PanamericanMpis](#panamericanmpis)
  * settings **required** `object`: Panamerican settings object
    * convertToAscii `boolean`: Will convert all chars to ascii
    * extraStep **required** `boolean`: Show extra step for user to enter their ID number

### PanamericanMpi
* PanamericanMpi: Panamerican Integrated
  * name **required** `string` (values: Panamerican)

### PanamericanMpis
* PanamericanMpis `object`: Panamerican Mpis
  * name **required** `string` (values: Panamerican)

### PandaGateway
* PandaGateway: Panda Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiCode **required** `string`: Panda Gateway api code
    * merchantCode **required** `string`: Panda Gateway merchant code
    * signKey **required** `string`: Panda Gateway sign key

### ParamountEft
* ParamountEft: Paramount config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Paramount credentials object
    * merchant_id **required** `string`: Merchant account ID
    * merchant_pass **required** `string`: Merchant account password
    * payee **required** `string`: Merchant name/descriptor

### ParentTransactionEmbed
* ParentTransactionEmbed `object`: Retried Transaction object
  * parentTransaction [Transaction](#transaction)

### ParentTransactionLink
* ParentTransactionLink `object`
  * rel **required** `string` (values: parentTransaction): The link type
  * href **required** `string`: The link URL

### Pay4Fun
* Pay4Fun: Pay4Fun config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Pay4Fun credentials object
    * merchantId **required** `string`: Pay4Fun merchant ID
    * merchantKey **required** `string`: Pay4Fun merchant key
    * merchantSecret **required** `string`: Pay4Fun merchant secret

### PayCash
* PayCash: PayCash config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: PayCash credentials object
    * emisor **required** `string`: Identify of the company
    * token **required** `string`: Token

### PayPal
* PayPal: PayPal Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * merchantIdInPayPal **required** `string`: PayPal Gateway merchant id

### PayPalAccount
* PayPalAccount `object`
  * _links `array`: The links related to resource
  * billingAddress **required**: The Customer's Billing Address.
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * createdTime: PayPal Account created time
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The Customer's ID.
  * id: The PayPal identifier string
  * method `string` (values: paypal): The method of payment instrument.
  * status `string` (values: inactive, active, deactivated): PayPal Account status
  * updatedTime: PayPal Account updated time
  * username `string`: PayPal username.

### PayPalAccountAuthorization
* PayPalAccountAuthorization `object`
  * amount `number`: The amount to authorize
  * currency **required**
  * gatewayAccountId `string`: The Gateway Account ID which use to send transactions
  * redirectUrl [TransactionRedirectUrl](#transactionredirecturl)
  * websiteId **required** `string`: The Website ID

### Payeezy
* Payeezy: Payeezy Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiKey **required** `string`: API Key
    * apiSecret **required** `string`: API Secret
    * merchantId **required** `string`: Payeezy Merchant ID
    * merchantToken **required** `string`: Merchant Token

### Payflow
* Payflow: Payflow config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Payflow credentials object
    * password **required** `string`: The password you defined while registering for the account.
    * user **required** `string`: If you set up one or more additional users on the account, this value is the ID of the user authorized to process transactions. If, however, you have not set up additional users, USER has the same value as VENDOR
    * vendor **required** `string`: Your merchant login ID created when you registered for the account.

### PaymenTechnologies
* PaymenTechnologies: PaymenTechnologies Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * authenticateId **required** `string`: PaymenTechnologies Gateway authenticate ID
    * authenticatePw **required** `string`: PaymenTechnologies Gateway authenticate password
    * publicKey **required** `string`: PaymenTechnologies Gateway API public key
    * secretKey **required** `string`: PaymenTechnologies Gateway API secret key
  * settings `object`
    * use3DSEndpoint `boolean`: Use 3DS endpoint

### Payment
* Payment `object`
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * amount **required** `number`: The payment amount
  * billingAddress: Billing Address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * createdTime: Payment created time
  * currency **required**
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The customer identifier string
  * description `string`: The payment description
  * id: The payment identifier string
  * invoiceIds `array`: The array of invoice identifiers
    * items [ResourceId](#resourceid)
  * paymentInstrument [PaymentInstrument](#paymentinstrument)
  * result `string` (values: approved, declined, canceled, abandoned, unknown): Payment result
  * retriedPaymentId: The retried payment ID
  * retryInstruction [PaymentRetry](#paymentretry)
  * retryNumber `integer`: The position in the sequence of retries
  * riskMetadata: Risk metadata
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
    * region `string`: Region for specified ipAddress
    * score `integer`: Risk score computed per all the factors
    * timeZone `string`: Time zone for specified ipAddress
    * vpnServiceName `string`: VPN service name, if available
  * scheduledTime `string`: The time the payment is scheduled for collection
  * status `string` (values: scheduled, queued, in-progress, incomplete, waiting-gateway, suspended, completed): Payment status
  * updatedTime: Payment updated time
  * websiteId **required**: The website identifier string

### PaymentCard
* PaymentCard `object`
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * bankCountry `string`: Payment Card bank country
  * bankName `string`: Payment Card bank name
  * billingAddress: The Billing Address.
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * bin `string`: The card's bin (the PAN's first 6 digits)
  * brand
  * createdTime: Card created time
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The Customer's ID.
  * expMonth `integer`: Card's expiry month.
  * expYear `integer`: Card's expiry year.
  * expirationReminderNumber `integer`: Number of expiration reminder events triggered
  * expirationReminderTime: Time expiration reminder event will be triggered
  * fingerprint `string`: A unique value to identify the PAN regardless of expiration dates.  It contains alphanumeric values.
  * id: The card identifier string
  * last4 `string`: The PAN's last 4 digits
  * method `string` (values: payment-card): The method of payment instrument.
  * panFingerprint `string`: A unique value to identify the PAN regardless of expiration dates.  It contains alphanumeric values. Use `fingerprint` instead.
  * status `string` (values: active, expired, inactive, deactivated, pending, verification-needed): Payment Card status.  When a card is `active` it means it has been used at least once for an approved transaction.
  * stickyGatewayAccountId `string`: Default Gateway Account ID used for transactions
  * updatedTime: Card updated time

### PaymentCardCreatePlain
* PaymentCardCreatePlain `object`
  * billingAddress **required**: The Billing Address.
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The Customer's ID.
  * cvv `string`: Card's cvv (card verification value).
  * expMonth **required** `integer`: Card's expiry month.
  * expYear **required** `integer`: Card's expiry year.
  * pan **required** `string`: The card PAN (Primary Account Number).

### PaymentCardCreateToken
* PaymentCardCreateToken `object`
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The Customer's ID.
  * token **required** `string`: PaymentCardToken ID.

### PaymentCardEmbed
* PaymentCardEmbed `object`: Payment Card object
  * paymentCard [PaymentCard](#paymentcard)

### PaymentCardLink
* PaymentCardLink `object`
  * rel **required** `string` (values: paymentCard): The link type
  * href **required** `string`: The link URL

### PaymentCardToken
* Payment Card Token `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * billingAddress **required**: The billing address object
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * createdTime: Token created time
  * expirationTime: Token expiration time
  * fingerprint `string`: Device fingerprint hash
  * id: The token identifier string
  * isUsed `boolean`: Whether the token was already used
  * leadSource
    * _links `array`: The links related to resource
    * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
    * campaign `string`: Lead Source's campaign (eg go-big-123)
    * clickId `string`: Lead Source's click id (may come from an ad server)
    * content `string`: Lead Source's content (eg smiley faces)
    * createdTime: LeadSource created time
    * medium `string`: Lead Source's medium (eg search, display)
    * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
    * salesAgent `string`: Lead Source's sales agent (eg James Bond)
    * source `string`: Lead Source's source (eg google, yahoo)
    * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
    * term `string`: Lead Source's term (eg salt shakers)
    * original
      * _links `array`: The links related to resource
      * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
      * campaign `string`: Lead Source's campaign (eg go-big-123)
      * clickId `string`: Lead Source's click id (may come from an ad server)
      * content `string`: Lead Source's content (eg smiley faces)
      * createdTime: LeadSource created time
      * medium `string`: Lead Source's medium (eg search, display)
      * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
      * salesAgent `string`: Lead Source's sales agent (eg James Bond)
      * source `string`: Lead Source's source (eg google, yahoo)
      * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
      * term `string`: Lead Source's term (eg salt shakers)
  * method **required** `string` (values: payment-card): The token payment method
  * paymentInstrument **required**: The payment instrument details
    * bin `string`: Payment Card BIN (the PAN's first 6 digits)
    * brand
    * cvv `string`: Payment Card CVV/CVC
    * expMonth **required** `integer`: Payment Card expiry month
    * expYear **required** `integer`: Payment Card expiry year
    * last4 `string`: Payment Card PAN's last 4 digits
    * pan **required** `string`: Payment Card PAN (Primary Account Number)
  * updatedTime: Token updated time
  * usageTime: Token usage time

### PaymentInstrument
* PaymentInstrument `object`
  * method **required** [Method](#method)

### PaymentInstrumentValidation
* PaymentInstrumentValidation `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * actionCode `string`: Action code
  * avsResult `string`: Address verification result
  * billingAddress: Billing address.
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * createdTime: Payment instrument validation created time.
  * cvvResult `string`: CVV result
  * expMonth `integer`: Payment card's expiry month.
  * expYear `integer`: Payment card's expiry year.
  * id: Payment instrument validation ID
  * method **required** `string`: Payment method
  * paymentInstrumentId **required** `string`: Payment instrument ID
  * responseCode `string`: Response code

### PaymentRetry
* PaymentRetry `object`
  * afterAttemptPolicy **required** `string` (values: none, change-subscription-renewal-time): The policy on the attempt finishes
  * afterRetryEndPolicy **required** `string` (values: none, cancel-subscription): The policy on the retry ends
  * attempts **required** `array`
    * items `object`
      * paymentInstruction **required** [AmountAdjustment](#amountadjustment)
      * scheduleInstruction **required** [CommonScheduleInstruction](#commonscheduleinstruction)

### PaymentToken
* Payment Token `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * billingAddress **required**: The billing address object
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * createdTime: Token created time
  * expirationTime: Token expiration time
  * fingerprint `string`: Device fingerprint hash
  * id: The token identifier string
  * isUsed `boolean`: Whether the token was already used
  * leadSource
    * _links `array`: The links related to resource
    * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
    * campaign `string`: Lead Source's campaign (eg go-big-123)
    * clickId `string`: Lead Source's click id (may come from an ad server)
    * content `string`: Lead Source's content (eg smiley faces)
    * createdTime: LeadSource created time
    * medium `string`: Lead Source's medium (eg search, display)
    * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
    * salesAgent `string`: Lead Source's sales agent (eg James Bond)
    * source `string`: Lead Source's source (eg google, yahoo)
    * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
    * term `string`: Lead Source's term (eg salt shakers)
    * original
      * _links `array`: The links related to resource
      * affiliate `string`: Lead Source's affiliate (eg 123, Bob Smith)
      * campaign `string`: Lead Source's campaign (eg go-big-123)
      * clickId `string`: Lead Source's click id (may come from an ad server)
      * content `string`: Lead Source's content (eg smiley faces)
      * createdTime: LeadSource created time
      * medium `string`: Lead Source's medium (eg search, display)
      * path `string`: Lead Source's path uri (eg www.example.com/some/landing/path)
      * salesAgent `string`: Lead Source's sales agent (eg James Bond)
      * source `string`: Lead Source's source (eg google, yahoo)
      * subAffiliate `string`: Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)
      * term `string`: Lead Source's term (eg salt shakers)
  * method **required**
  * updatedTime: Token updated time
  * usageTime: Token usage time

### Payr
* Payr: Payr Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiSecurityToken `string`: Hash of the password for the Alliance API (transaction reporting)
    * apiUserId `string`: Username for the Alliance API (transaction reporting)
    * clientId **required** `string`: Payr Gateway client ID
    * secretWord **required** `string`: Payr Gateway secret word

### Paysafe
* Paysafe: Paysafe Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * accountNum **required** `string`: Paysafe Gateway account number
    * storeId **required** `string`: Paysafe Gateway store ID
    * storePwd **required** `string`: Paysafe Gateway store password
  * mpi [PaysafeMpis](#paysafempis)

### PaysafeMpi
* PaysafeMpi: Paysafe Integrated
  * name **required** `string` (values: PaysafeMpi)

### PaysafeMpis
* PaysafeMpis `object`: Paysafe Mpis
  * name **required** `string` (values: PaysafeMpi)

### Paysafecash
* Paysafecash: Paysafecash Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiKey **required** `string`: Paysafecash API key

### Payvision
* Payvision: Payvision Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * memberGuid **required** `string`: Payvision Gateway member guid
    * memberId **required** `string`: Payvision Gateway member id
  * mpi [PayvisionMpis](#payvisionmpis)
  * settings `object`: Payvision settings object
    * avs `boolean`: Payvision Gateway avs
    * delay `integer`: Payvision Gateway delay
    * merchantAccountType **required** `integer`: Payvision merchant account type

### PayvisionMpi
* PayvisionMpi: Payvision Integrated
  * name **required** `string` (values: PayvisionMpi, Payvision3DS2, CardinalCommerce, PaayMpi, Other)

### PayvisionMpis
* PayvisionMpis `object`: Payvision Mpis
  * name **required** `string` (values: PayvisionMpi, Payvision3DS2, CardinalCommerce, PaayMpi, Other)

### PermalinkLink
* PermalinkLink `object`
  * rel **required** `string` (values: permalink): The link type
  * href **required** `string`: The link URL

### Plan
* Plan `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * createdTime: Plan created time
  * currency **required**
  * currencySign `string`: Currency sign
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * id: The plan identifier string
  * invoiceTimeShift: You can shift issue time and due time of invoices for this plan.
    * dueTimeShift [DueTimeShiftInstruction](#duetimeshiftinstruction)
    * issueTimeShift [IssueTimeShiftInstruction](#issuetimeshiftinstruction)
  * isActive `boolean`: If the plan is not active, customers cannot subscribe to the plan.
  * name **required** `string`: The plan name, displayed on invoices and receipts.
  * pricing **required** [PlanPriceFormula](#planpriceformula)
  * productId **required**: The related product identifier string
  * productOptions `object`: Name-value pairs to specify the product options.
  * recurringInterval: The service interval. For a one-time item, use `null`.
    * length **required** `integer`: The length of time
    * unit **required** `string` (values: day, week, month, year): The unit of time
    * billingTiming [PlanBillingTiming](#planbillingtiming)
    * limit `integer`: The number of invoices this subscription will generate (if 1, it will not generate any beyond the initial subscription creation).  For example, set this property to `12`, when the `periodUnit` is month and the `periodLength` is 1, for a 1 year contract billed monthly.
    * periodAnchorInstruction [ServicePeriodAnchorInstruction](#serviceperiodanchorinstruction)
  * setup `object`: The setup. Set `null` if no setup.
    * price **required** `number`: The price of a setup - 0 is a valid value (for free)
  * subscriptionCount `integer`: Number of subscriptions associated with this plan
  * trial `object`: The trial. Set `null` if no trial.
    * period **required** [PlanPeriod](#planperiod)
    * price **required** `number`: The price of the trial. For a free trial, use `0`.
  * updatedTime: Plan updated time

### PlanBillingTiming
* PlanBillingTiming `string` (values: prepaid, postpaid): The billing timing in relation to the service period.

### PlanEmbed
* PlanEmbed `object`: Plan object
  * plan [Plan](#plan)

### PlanPeriod
* PlanPeriod `object`
  * length **required** `integer`: The length of time
  * unit **required** `string` (values: day, week, month, year): The unit of time

### PlanPriceFormula
* PlanPriceFormula `object`
  * formula **required** `string` (values: fixed-fee, flat-rate, stairstep, tiered, volume): The price formula determines what algorithm is used to calculate the invoice price based on a few factors,

### Plugnpay
* Plugnpay: Plugnpay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * publisher-name **required** `string`: Plugnpay Gateway member id
    * publisher-password **required** `string`: Plugnpay Gateway avs

### PriceBasedShippingRate
* PriceBasedShippingRate `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * currency **required**
  * maxOrderSubtotal `number`: Maximum order subtotal for which this shipping rate is applicable (NULL if no maximum)
  * minOrderSubtotal `number`: Minimum order subtotal for which this shipping rate is applicable, defaults to 0.00
  * name **required** `string`: The shipping rate name
  * price **required** `number`: The shipping price - 0 is a valid value (for free)

### Product
* Product `object`: Products include digital goods, services, and physical goods.
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * accountingCode `string`: The product accounting code
  * createdTime: The product created time
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * description `string`: The product description
  * id: The product identifier string
  * name **required** `string`: The product name
  * options `array`: The product options such as Color, Size, etc.  The product options definition does not include option values.  Those are defined within the Plans.
    * items `string`
  * requiresShipping `boolean`: If the product requires shipping, shipping calculations will be applied
  * taxCategoryId `string` (values: 00000, 99999, 20010, 40030, 51020, 51010, 31000, 30070): The product's tax category identifier string
  * unitLabel `string`: The unit label, such as per `seat` or per `unit`.
  * updatedTime: The product updated time

### ProductEmbed
* ProductEmbed `object`: Product object
  * product [Product](#product)

### ProductLink
* ProductLink `object`
  * rel **required** `string` (values: product): The link type
  * href **required** `string`: The link URL

### Prosa
* Prosa: Prosa config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Prosa credentials object
    * accessToken **required** `string`: Access token
    * entityId **required** `string`: Entity ID

### QQPayInstrument
* QQPayInstrument: QQPay payment instrument object
  * method **required** [Method](#method)

### RPN
* RPN: RPN Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * key **required** `string`: RPN Key
    * mid **required** `string`: RPN MID

### Realex
* Realex: Realex Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * account **required** `string`: Realex Gateway account
    * merchantId **required** `string`: Realex Gateway merchant id
    * rebatePassword **required** `string`: Realex Gateway rebate password
    * secretKey **required** `string`: Realex Gateway secret key

### Realtime
* Realtime: Realtime Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * clientId **required** `string`: Realtime Gateway client ID
    * secretWord **required** `string`: Realtime Gateway secret word

### RecalculateInvoiceLink
* RecalculateInvoiceLink `object`
  * rel **required** `string` (values: recalculateInvoice): The link type
  * href **required** `string`: The link URL

### RecentInvoiceEmbed
* RecentInvoiceEmbed `object`: Recent Invoice object
  * recentInvoice [Invoice](#invoice)

### RecentInvoiceLink
* RecentInvoiceLink `object`
  * rel **required** `string` (values: recentInvoice): The link type
  * href **required** `string`: The link URL

### RedemptionRestriction
* RedemptionRestriction `object`: Redemption restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type

### Redsys
* Redsys: Redsys Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * merchantCode **required** `string`: Redsys Gateway merchant code
    * secretCode **required** `string`: Redsys Gateway secret code

### RefundUrlLink
* RefundUrlLink `object`
  * rel **required** `string` (values: refundUrl): The link type
  * href **required** `string`: The link URL

### ResetPasswordToken
* ResetPasswordToken `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * credentialId `string`: Token's credential ID
  * expiredTime `string`: Password expired time
  * token `string`: The token's identifier string
  * username **required** `string`: The token's username

### ResourceCustomFields
* ResourceCustomFields `object`: "Custom Fields list as a map `{"custom field name": "custom field value", ...}"`.

### ResourceId
* ResourceId `string`: The resource ID. Defaults to UUID v4

### RetriedTransactionEmbed
* RetriedTransactionEmbed `object`: Parent Transaction object
  * retriedTransaction [Transaction](#transaction)

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
  * region `string`: Region for specified ipAddress
  * score `integer`: Risk score computed per all the factors
  * timeZone `string`: Time zone for specified ipAddress
  * vpnServiceName `string`: VPN service name, if available

### Rotessa
* Rotessa: Rotessa config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Rotessa credentials object
    * apiKey **required** `string`: Rotessa api key
  * settings **required** `object`: Rotessa settings object
    * delay **required** `integer`: Rotessa Gateway time delay for them to process transaction

### SMSVoucher
* SMSVoucher: SMSVoucher Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * AppId **required** `string`: SMSVoucher AppId

### SMSVoucherInstrument
* SMSVoucherInstrument: SMSVoucher payment instrument object
  * method **required** [Method](#method)

### Sagepay
* Sagepay: Sagepay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * M_ID **required** `string`: Sagepay Gateway merchant ID
    * M_KEY **required** `string`: Sagepay Gateway merchant key

### SeamlessChex
* SeamlessChex: SeamlessChex config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: SeamlessChex credentials object
    * publicKey **required** `string`: SeamlessChex publishable key
    * secretKey **required** `string`: SeamlessChex secret key

### Search
* Search `object`
  * customers `array`: List of returned customers
    * items
      * tags `array`: A list of customer's tags
        * items [Tag](#tag)
      * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
      * _links `array`: The links related to resource
      * averageValue [CustomerAverageValue](#customeraveragevalue)
      * createdTime: The customer created time
      * customFields [ResourceCustomFields](#resourcecustomfields)
      * defaultPaymentInstrument [PaymentInstrument](#paymentinstrument)
      * id: The customer identifier string
      * invoiceCount `integer`: An auto-incrementing number based on the sequence of invoices. If set to 0, then this record is a Lead, otherwise is a Customer
      * lastPaymentTime: The most recent time of an approved payment for the customer
      * lifetimeRevenue [CustomerLifetimeRevenue](#customerlifetimerevenue)
      * paymentCount `integer`: The number of approved payments for the customer
      * paymentToken `string`: A write-only payment token; if supplied, it will be converted into a
      * primaryAddress [ContactObject](#contactobject)
      * revision `integer`: The number of times the customer data has been modified.
      * updatedTime: The customer updated time
      * websiteId: The website's ID
  * invoices `array`: List of returned invoices
    * items
      * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
      * _links `array`: The links related to resource
      * abandonedTime: Invoice abandoned time
      * amount `number`: The Invoice's amount
      * amountDue `number`: The Invoice's due amount
      * autopayRetryNumber `integer`: Invoice autopay retry number
      * autopayScheduledTime `string`: Invoice autopay scheduled time
      * billingAddress: Invoice's billing address
        * address `string`: The contact street address
        * address2 `string`: The contact street address (second line)
        * city `string`: The contact city
        * country `string`: The contact country ISO Alpha-2 code
        * emails [ContactEmails](#contactemails)
        * firstName `string`: The contact first name
        * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
        * lastName `string`: The contact last name
        * organization `string`: The contact organization
        * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
        * postalCode `string`: The contact postal code
        * region `string`: The contact region (state)
      * collectionPeriod `integer`: Collection Period - difference between paidTime and issuedTime in days.
      * createdTime: Invoice created time
      * currency **required**
      * customerId **required**: The customer's ID
      * delinquentCollectionPeriod `integer`: Delinquent Collection Period - difference between paidTime and dueTime in days.
      * deliveryAddress: Invoice's delivery address
        * address `string`: The contact street address
        * address2 `string`: The contact street address (second line)
        * city `string`: The contact city
        * country `string`: The contact country ISO Alpha-2 code
        * emails [ContactEmails](#contactemails)
        * firstName `string`: The contact first name
        * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
        * lastName `string`: The contact last name
        * organization `string`: The contact organization
        * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
        * postalCode `string`: The contact postal code
        * region `string`: The contact region (state)
      * discountAmount `number`: The Invoice's discounts amount
      * discounts `array`: Discounts applied
        * items
          * amount `number`: Total amount that was discounted by this Coupon
          * description `string`: Discount description
          * redemptionCode: Coupon's redemption code
          * redemptionId: Redemption ID
      * dueReminderNumber `integer`: Number of past due reminder events triggered
      * dueReminderTime: Time past due reminder event will be triggered
      * dueTime: Invoice due time
      * id: The invoice identifier string
      * invoiceNumber `integer`: An auto-incrementing number based on the sequence of invoices for any particular customer.
      * issuedTime: Invoice issued time
      * items `array`: Invoice Items array
        * items [InvoiceItem](#invoiceitem)
      * notes `string`: Notes for the customer which will be displayed on the invoice
      * organizationId: The organization's ID
      * paidTime: Invoice paid time
      * poNumber `string`: Purchase order number which will be displayed on the invoice
      * retryInstruction `object`: The invoice retry instruction
        * afterAttemptPolicies **required** `array`: The policy on the attempt finishes
          * items `string` (values: change-subscription-renewal-time)
        * afterRetryEndPolicies **required** `array`: The policy on the retry ends
          * items `string` (values: abandon-invoice, cancel-subscription)
        * attempts **required** `array`
          * items `object`
      * revision `integer`: The number of times the invoice data has been modified.
      * shippingAmount `number`: The Invoice's shipping amount
      * status `string` (values: draft, unpaid, paid, past-due, delinquent, abandoned, voided, partially-paid, partially-refunded, refunded, disputed): Invoice status.
      * subscriptionId: The related Subscription's ID if available, otherwise null
      * subtotalAmount `number`: The Invoice's subtotal amount
      * taxAmount `number`: The Invoice's taxes amount
      * taxes `array`: Taxes applied to this invoice
        * items
          * amount `number`: Tax amount
          * description `string`: Tax description
      * transactions `array`: Invoice transactions array
        * items [Transaction](#transaction)
      * type `string` (values: initial, renewal, interim, cancellation, one-time, refund, charge): Invoice type.
      * updatedTime: Invoice updated time
      * voidedTime: Invoice voided time
      * websiteId **required**: The website's ID
  * orders `array`: List of returned orders
    * items
      * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
      * _links `array`: The links related to resource
      * activationTime: Subscription activation time
      * billingAddress: Billing address
        * address `string`: The contact street address
        * address2 `string`: The contact street address (second line)
        * city `string`: The contact city
        * country `string`: The contact country ISO Alpha-2 code
        * emails [ContactEmails](#contactemails)
        * firstName `string`: The contact first name
        * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
        * lastName `string`: The contact last name
        * organization `string`: The contact organization
        * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
        * postalCode `string`: The contact postal code
        * region `string`: The contact region (state)
      * billingStatus `string` (values: unpaid, past-due, delinquent, paid, voided, refunded, disputed, voided): The billing status of the most recent invoice.  It may
      * couponIds `array`: A list of coupons to redeem on the customer and restrict to this subscription.
        * items `string`: Coupon ID
      * customerId **required**: Unique id for each customer
      * deliveryAddress: Delivery address
        * address `string`: The contact street address
        * address2 `string`: The contact street address (second line)
        * city `string`: The contact city
        * country `string`: The contact country ISO Alpha-2 code
        * emails [ContactEmails](#contactemails)
        * firstName `string`: The contact first name
        * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
        * lastName `string`: The contact last name
        * organization `string`: The contact organization
        * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
        * postalCode `string`: The contact postal code
        * region `string`: The contact region (state)
      * id: The Subscription identifier string
      * initialInvoiceId: Unique id for the initial invoice
      * items **required** `array`
        * items `object`
          * planId **required**: Unique id for each plan
          * quantity `integer`: Number of units of the product on the given plan
      * orderType **required** `string` (values: subscription-order, one-time-order): Specifies the type of order, a subscription or a one-time purchase.
      * poNumber `string`: Purchase order number, will be displayed on the issued invoices
      * recentInvoiceId: Unique id for the most recently issued invoice. It might not be `paid` yet.
      * revision `integer`: The number of times the subscription data has been modified.
      * riskMetadata: Risk metadata. If null, the value would coalesce to the risk metadata captured when creating the payment token.
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
        * region `string`: Region for specified ipAddress
        * score `integer`: Risk score computed per all the factors
        * timeZone `string`: Time zone for specified ipAddress
        * vpnServiceName `string`: VPN service name, if available
      * websiteId **required**: Unique id for each website
  * searched `array`: Names of searched resources, even if they returned nothing
    * items `string`
  * transactions `array`: List of returned transactions
    * items
      * 3ds
        * authenticated **required** `string` (values: yes, no, not applicable, attempted): The 3D Secure entry Auth Response Status
        * enrolled **required** `string` (values: yes, no, invalid card/timeout, unavailable): Is the cardholder enrolled in 3D Secure
        * liability **required** `string` (values: protected, not protected, protected (attempt))
      * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
      * _links `array`: The links related to resource
      * acquirerName: Acquirer name, available only when transaction use gateway, else null
      * amount `number`: The transactions's amount
      * billingAddress: Billing Address
        * address `string`: The contact street address
        * address2 `string`: The contact street address (second line)
        * city `string`: The contact city
        * country `string`: The contact country ISO Alpha-2 code
        * emails [ContactEmails](#contactemails)
        * firstName `string`: The contact first name
        * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
        * lastName `string`: The contact last name
        * organization `string`: The contact organization
        * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
        * postalCode `string`: The contact postal code
        * region `string`: The contact region (state)
      * billingDescriptor `string`: The billing descriptor that appears on the periodic billing statement. Commonly 12 or fewer characters for a credit card statement.
      * bin `string`: Payment Card BIN
      * bumpOffer `object`: Bump offer information. Null if hasBumpOffer is false
        * bonus `object`: Bonus amount and currency
          * amount `number`
          * currency
        * bump `object`: Bump amount and currency
          * amount `number`
          * currency
        * language `string`: The language of the bump offer that was displayed to user (useful for finding any translation problems)
        * order `object`: Initial amount and currency
          * amount `number`
          * currency
        * outcome `string` (values: rejected, selected, unknown): Bump offer outcome
        * usdBonus `number`: The amount of bonus amount translated to USD
        * usdBump `number`: The amount of bump amount translated to USD
        * usdOrder `number`: The amount of initial amount translated to USD
        * version `string`: The name of the version that was picked (useful for measuring split tests)
      * childTransactions `array`: The child transaction IDs
        * items [ResourceId](#resourceid)
      * createdTime: Transaction created time
      * currency
      * customFields [ResourceCustomFields](#resourcecustomfields)
      * customerId: Customer's ID
      * dcc `object`: Dynamic Currency Conversion detailed information. Null if hasDcc is false
        * base `object`: Initial amount and currency to convert from
          * amount `number`
          * currency
        * outcome `string` (values: rejected, selected, unknown): Dynamic Currency Conversion outcome
        * quote `object`: Suggested amount and currency to convert to
          * amount `number`
          * currency
        * usdMarkup `number`: The amount of markup translated to USD
      * description `string`: The payment description
      * gateway `object`: The related gateway information
        * avsResponse `object`: The AVS gateway's response
          * code `string`: The response code
          * message `string`: The response message
          * originalCode `string`: The raw response code
          * originalMessage `string`: The raw response message
        * cvvResponse `object`: The CVV gateway's response
          * code `string`: The response code
          * message `string`: The response message
          * originalCode `string`: The raw response code
          * originalMessage `string`: The raw response message
        * response `object`: The gateway's response
          * code `string`: The gateway's response code
          * message `string`: The gateway's response message
          * originalCode `string`: The raw, unmapped gateway's response code
          * originalMessage `string`: The raw, unmapped gateway's response message
          * type `string`: The gateway's response type
      * gatewayAccountId: The transactions's Gateway Account ID
      * gatewayName: Payment Gateway name, available only when transaction use gateway, else null
      * gatewayTransactionId: The gateway's transaction ID
      * hadDiscrepancy `boolean`: True if the transaction has been updated due to a disprepancy with its source of truth
      * has3ds `boolean`
      * hasBumpOffer `boolean`: True if transaction has a Bump offer
      * hasDcc `boolean`: True if transaction has Dynamic Currency Conversion applied
      * id: The transaction identifier string
      * invoiceIds `array`: The invoice IDs related to transaction
        * items [ResourceId](#resourceid)
      * isDisputed `boolean`: True if transaction is disputed
      * isRebill `boolean`
      * isReconciled `boolean`: True if the transaction has been verified with gateway batch data
      * isRetry `boolean`: True if this transaction is retry.
      * method: Payment Method
      * notificationUrl [TransactionNotificationUrl](#transactionnotificationurl)
      * orderId `string`: The transactions's order ID.  This ID must be unique within a 24 hour period. This field was renamed to the `requestId`.
      * parentTransactionId: The transactions's parent ID
      * paymentInstrument [PaymentInstrument](#paymentinstrument)
      * planIds `array`: The plan IDs related to transaction's subscription(s)
        * items [ResourceId](#resourceid)
      * processedTime: Transaction processed time
      * purchaseAmount `number`: The transactions's purchase amount
      * purchaseCurrency
      * rebillNumber `integer`: The transactions's rebill number
      * redirectUrl [TransactionRedirectUrl](#transactionredirecturl)
      * referenceData `object`: Transaction reference data
      * reportAmount `number`: The transactions's amount to report
      * reportCurrency
      * requestAmount `number`: The transactions's amount received in the payment request
      * requestCurrency
      * requestId `string`: The transactions's request ID.  This ID must be unique within a 24 hour period. Use this field to prevent duplicated transactions.
      * result `string` (values: abandoned, approved, canceled, declined, unknown): Transaction result
      * retriedTransactionId: The retried transaction ID
      * retriesResult `string` (values: approved, canceled, declined, scheduled): Retries sequence result
      * retryInstruction [PaymentRetry](#paymentretry)
      * retryNumber `integer`: The position in the sequence of retries
      * revision `integer`: The number of times the transaction data has been modified.
      * riskMetadata: Risk metadata
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
        * region `string`: Region for specified ipAddress
        * score `integer`: Risk score computed per all the factors
        * timeZone `string`: Time zone for specified ipAddress
        * vpnServiceName `string`: VPN service name, if available
      * riskScore `integer`: The transactions's risk score
      * scheduledTime `string`: The time the transaction is scheduled for collection
      * status `string` (values: completed, conn-error, disputed, never-sent, partially-refunded, pending, refunded, sending, timeout, voided, waiting-approval, waiting-capture, waiting-gateway, waiting-refund): Transaction status
      * subscriptionIds `array`: The subscription IDs related to transaction's invoice(s)
        * items [ResourceId](#resourceid)
      * type `string` (values: authorize, capture, credit, refund, sale, void): Transaction type
      * updatedTime: Transaction updated time
      * velocity `integer`: The number of transactions by the same customer in the past 24 hours
      * websiteId: Website's ID

### SecureTrading
* SecureTrading: SecureTrading config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: SecureTrading credentials object
    * password **required** `string`: SecureTrading web service password
    * username **required** `string`: SecureTrading web service username
    * websiteId **required** `string`: Website ID
  * mpi [SecureTradingMpis](#securetradingmpis)

### SecureTradingMpi
* SecureTradingMpi: SecureTrading Mpi
  * name **required** `string` (values: SecureTradingMpi)

### SecureTradingMpis
* SecureTradingMpis `object`: SecureTrading Mpis
  * name **required** `string` (values: SecureTradingMpi)

### SelfLink
* SelfLink `object`
  * rel **required** `string` (values: self): The link type
  * href **required** `string`: The link URL

### ServerTimestamp
* ServerTimestamp `string`: Read-only timestamp, automatically assigned on back-end.

### ServicePeriodAnchorInstruction
* ServicePeriodAnchorInstruction `object`: Instruction for calculating the service period anchor.
  * method **required** `string` (values: immediately, day-of-month, day-of-week)

### ShippingZone
* ShippingZone `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * countries `array`: Countries covered by the shipping zone. A country can only belong to one shipping zone (no overlapping).
    * items `string`: Country ISO Alpha-2 code
  * createdTime: The shipping zone created time
  * id: The shipping zone identifier string
  * name **required** `string`: The shipping zone name
  * rates `array`: Price-based shipping rate instructions
    * items: Price based shipping rate instruction
      * _links `array`: The links related to resource
        * items [SelfLink](#selflink)
      * currency **required**
      * maxOrderSubtotal `number`: Maximum order subtotal for which this shipping rate is applicable (NULL if no maximum)
      * minOrderSubtotal `number`: Minimum order subtotal for which this shipping rate is applicable, defaults to 0.00
      * name **required** `string`: The shipping rate name
      * price **required** `number`: The shipping price - 0 is a valid value (for free)
  * updatedTime: The shipping zone updated time

### SignedLinkLink
* SignedLinkLink `object`
  * rel **required** `string` (values: signedLink): The link type
  * href **required** `string`: The link URL

### Skrill
* Skrill: Skrill config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Skrill credentials object
    * accountEmail **required** `string`: Email address of your Skrill merchant account
    * mqiPassword `string`: Password used during MQI/API requests
    * secretWord **required** `string`: Secret word used for MD5 signature verifications

### Skrill-Rapid-TransferInstrument
* Skrill-Rapid-TransferInstrument: Skrill Rapid Transfer payment instrument object
  * method **required** [Method](#method)

### SmartInvoice
* SmartInvoice: SmartInvoice config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: SmartInvoice credentials object
    * applicationId **required** `string`: SmartInvoice application UID
    * merchantId **required** `string`: SmartInvoice merchant account UID
  * mpi [SmartInvoiceMpis](#smartinvoicempis)

### SmartInvoiceMpi
* SmartInvoiceMpi: SmartInvoice Integrated
  * name **required** `string` (values: SmartInvoiceMpi)

### SmartInvoiceMpis
* SmartInvoiceMpis `object`: SmartInvoice Mpis
  * name **required** `string` (values: SmartInvoiceMpi)

### Sofort
* Sofort: Sofort config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Sofort credentials object
    * configKey **required** `string`: Sofort configuration key

### SparkPay
* SparkPay: SparkPay config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: SparkPay credentials object
    * secretKey **required** `string`: SparkPay secret key
    * shopId **required** `string`: SparkPay shop ID

### StaticGateway
* StaticGateway: StaticGateway Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time

### Stripe
* Stripe: Stripe Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * redirectUrl **required** `string`: Stripe Gateway redirect url

### Subscription
* Subscription `object`
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * activationTime: Subscription activation time
  * billingAddress: Billing address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * billingStatus `string` (values: unpaid, past-due, delinquent, paid, voided, refunded, disputed, voided): The billing status of the most recent invoice.  It may
  * couponIds `array`: A list of coupons to redeem on the customer and restrict to this subscription.
    * items `string`: Coupon ID
  * customerId **required**: Unique id for each customer
  * deliveryAddress: Delivery address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * id: The Subscription identifier string
  * initialInvoiceId: Unique id for the initial invoice
  * items **required** `array`
    * items `object`
      * planId **required**: Unique id for each plan
      * quantity `integer`: Number of units of the product on the given plan
  * orderType **required** `string` (values: subscription-order, one-time-order): Specifies the type of order, a subscription or a one-time purchase.
  * poNumber `string`: Purchase order number, will be displayed on the issued invoices
  * recentInvoiceId: Unique id for the most recently issued invoice. It might not be `paid` yet.
  * revision `integer`: The number of times the subscription data has been modified.
  * riskMetadata: Risk metadata. If null, the value would coalesce to the risk metadata captured when creating the payment token.
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
    * region `string`: Region for specified ipAddress
    * score `integer`: Risk score computed per all the factors
    * timeZone `string`: Time zone for specified ipAddress
    * vpnServiceName `string`: VPN service name, if available
  * websiteId **required**: Unique id for each website

### SubscriptionCancellation
* SubscriptionCancellation `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * appliedInvoiceId: The identifier of the invoice where the cancellation fees or credits are applied.
  * canceledBy `string` (values: merchant, customer): Who did the cancellation
  * canceledTime `string`: The cancellation time (when the status is confirmed which is by default unless specified "draft").
  * churnTime **required** `string`: The time when the subscription will be deactivated.
  * createdTime: The time of resource creation (when it is posted).
  * description `string`: Cancel reason description in free form
  * id: Cancellation identifier
  * lineItemSubtotal `number`: Subtotal of the line items which will be added after the subscription's cancellation
  * lineItems: Items to be added to the new invoice. Proration item is generated and added automatically.
    * items [UpcomingInvoiceItem](#upcominginvoiceitem)
  * prorated `boolean`: Defines if the customer gets a pro-rata credit for the time remaining between `churnTime` and
  * proratedInvoiceId: Identifier of the invoice on which the cancellation proration is calculated.
  * reason `string` (values: did-not-use, did-not-want, missing-features, bugs-or-problems, do-not-remember, risk-warning, contract-expired, too-expensive, other, billing-failure): Cancellation reason
  * status `string` (values: draft, confirmed, completed, revoked): "draft" defines that the cancellation isn't applied on an invoice and subscription but
  * subscriptionId **required**: Identifier of the canceled subscription

### SubscriptionCancellationState
* SubscriptionCancellationState `object`
  * cancelCategory `string` (values: billing-failure, did-not-use, did-not-want, missing-features, bugs-or-problems, do-not-remember, risk-warning, contract-expired, too-expensive, never-started, switched-plan, other): Cancel category
  * cancelDescription `string`: Cancel reason description in free form
  * canceledBy `string` (values: merchant, customer, rebilly): Canceled by
  * canceledTime: Subscription canceled time

### SubscriptionChange
* SubscriptionChange `object`
  * effectiveTime `string`: The date from which the renewal time (for `reset` operations) and proration calculations are made.  If omitted, it will default to the current time.
  * planId **required**: The plan identifier string
  * preview `boolean`: If set to true, it will not change the subscription.  It allows for a way to preview the changes that would be made to a subscription.
  * prorated **required** `boolean`: Whether or not to give a pro rata credit for the amount of time remaining between the `effectiveTime` and the end of the current period.
  * quantity `integer`: Number of units of the product on the given plan. If null or omitted, current quantity will not be changed.
  * renewalPolicy **required** `string` (values: reset, retain): The value determines whether the subscription retains its current `renewalTime` or resets it to a newly calculated `renewalTime`.

### SubscriptionInvoice
* SubscriptionInvoice `object`
  * transactionId: If present, applies a payment to the invoice created.  If the payment is for the invoice total, it would be marked as paid.

### SubscriptionLink
* SubscriptionLink `object`
  * rel **required** `string` (values: subscription): The link type
  * href **required** `string`: The link URL

### SubscriptionMetadata
* SubscriptionMetadata `object`
  * _links `array`: The links related to resource
  * createdTime: Subscription created time
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * updatedTime: Subscription updated time

### SubscriptionReactivation
* SubscriptionReactivation `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * cancellationId: Identifier of the related cancellation
  * createdTime `string`: The time of resource creation (when it is posted).
  * description `string`: Reactivation reason description in free form
  * effectiveTime `string`: The date from which the service period would start, unless the subscription is canceled but still active.
  * id: Reactivation identifier
  * renewalTime `string`: The time of the next subscription renewal. If omitted then it is computed from the effective time.
  * subscriptionId **required**: Identifier of the reactivated subscription

### Tag
* Tag `object`: Tag
  * _links `array`: The links related to resource
  * createdTime: The tag's created time
  * id: The tag's identifier string
  * name **required** `string`: The tag's unique name, which is case-insensitive.
  * updatedTime: The tag's updated time

### TestProcessor
* TestProcessor: TestProcessor Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * mpi [TestProcessorMpis](#testprocessormpis)

### TestProcessorMpi
* TestProcessorMpi: TestProcessor Integrated
  * name **required** `string` (values: TestSandboxMpi)

### TestProcessorMpis
* TestProcessorMpis `object`: TestProcessorMpis Mpis
  * name **required** `string` (values: TestSandboxMpi)

### ThreeDSecure
* ThreeDSecure `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * amount **required** `number`: Transaction amount
  * cavv `string`: The 3D Secure entry cardholder authentication verification value
  * createdTime: The 3D Secure entry created time
  * currency **required**
  * customerId **required**: Related customer ID
  * eci `integer`: The 3D Secure entry electronic commerce indicator
  * enrolled **required** `string` (values: Y, N, U): Is the cardholder enrolled in 3DSecure
  * enrollmentEci **required** `string`: The 3D Secure entry enrollment eci
  * gatewayAccountId **required**: Related gateway account ID
  * id: The 3D Secure entry identifier string
  * payerAuthResponseStatus `string` (values: Y, N, U, A): The 3D Secure entry Auth Response Status
  * paymentCardId **required**: Related payment card ID
  * signatureVerification `string` (values: Y, N): If signature was verified
  * websiteId **required**: Related Website ID
  * xid `string`: The 3D Secure entry transaction Id

### ThreeDSecureResult
* ThreeDSecureResult `object`
  * authenticated **required** `string` (values: yes, no, not applicable, attempted): The 3D Secure entry Auth Response Status
  * enrolled **required** `string` (values: yes, no, invalid card/timeout, unavailable): Is the cardholder enrolled in 3D Secure
  * liability **required** `string` (values: protected, not protected, protected (attempt))

### TimelineAction
* TimelineAction `object`
  * action `string` (values: resend-email, redemption-cancel)

### TimelineExtraData
* TimelineExtraData `object`: Additional data
  * actions `array`: Actions available to a Timeline message. Can be empty in case no actions are available for a message
    * items [TimelineAction](#timelineaction)
  * author `object`: Timeline comment author data
    * userFullName `string`
    * userId `string`
  * links `array`
    * items `object`
      * placeholder `string`
      * resourceId [ResourceId](#resourceid)
      * resourceType `string` (values: kyc-document, invoice, subscription, transaction, email-message, dispute, credit-memo, coupon)
  * mentions `object`
  * tables `array`
    * items [TimelineTable](#timelinetable)

### TimelineTable
* TimelineTable `object`: Additional information about Timeline message
  * footer `string`: Data table footer
  * title `string`: Data table title
  * type `string` (values: two-columns, three-columns)

### ToditoCash
* ToditoCash: ToditoCash config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: ToditoCash credentials object
    * apiKey **required** `string`: ToditoCash API key

### TokenBankAccountInstrument
* TokenBankAccountInstrument `object`
  * accountNumberType **required** `string` (values: IBAN, BBAN): Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).

### TokenMethod
* TokenMethod `string` (values: cash, check, paypal, Alipay, AstroPay Card, bank-transfer, bitcoin, Boleto, cash-deposit, CASHlib, CashToCode, China UnionPay, domestic-cards, echeck, ecoPayz, ecoVoucher, EPS, ePay.bg, Flexepin, Giropay, Gpaysafe, iDebit, iDEAL, INOVAPAY-pin, INOVAPAY-wallet, InstaDebit, instant-bank-transfer, Interac-online, Interac-eTransfer, invoice, Jeton, Klarna, miscellaneous, Neteller, Nordea-Solo, OchaPay, online-bank-transfer, Onlineueberweisen, Paysafecard, Pay4Fun, PinPay, phone, POLi, Przelewy24, QQPay, Resurs, SEPA, Skrill, Skrill Rapid Transfer, SMSVoucher, SparkPay, Trustly, UPayCard, voucher, WeChat Pay): The token payment method

### TokenPaymentCardInstrument
* TokenPaymentCardInstrument `object`: Payment Token instrument object
  * bin `string`: Payment Card BIN (the PAN's first 6 digits)
  * brand
  * cvv `string`: Payment Card CVV/CVC
  * expMonth **required** `integer`: Payment Card expiry month
  * expYear **required** `integer`: Payment Card expiry year
  * last4 `string`: Payment Card PAN's last 4 digits
  * pan **required** `string`: Payment Card PAN (Primary Account Number)

### Transaction
* Transaction `object`
  * 3ds
    * authenticated **required** `string` (values: yes, no, not applicable, attempted): The 3D Secure entry Auth Response Status
    * enrolled **required** `string` (values: yes, no, invalid card/timeout, unavailable): Is the cardholder enrolled in 3D Secure
    * liability **required** `string` (values: protected, not protected, protected (attempt))
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * acquirerName: Acquirer name, available only when transaction use gateway, else null
  * amount `number`: The transactions's amount
  * billingAddress: Billing Address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * billingDescriptor `string`: The billing descriptor that appears on the periodic billing statement. Commonly 12 or fewer characters for a credit card statement.
  * bin `string`: Payment Card BIN
  * bumpOffer `object`: Bump offer information. Null if hasBumpOffer is false
    * bonus `object`: Bonus amount and currency
      * amount `number`
      * currency
    * bump `object`: Bump amount and currency
      * amount `number`
      * currency
    * language `string`: The language of the bump offer that was displayed to user (useful for finding any translation problems)
    * order `object`: Initial amount and currency
      * amount `number`
      * currency
    * outcome `string` (values: rejected, selected, unknown): Bump offer outcome
    * usdBonus `number`: The amount of bonus amount translated to USD
    * usdBump `number`: The amount of bump amount translated to USD
    * usdOrder `number`: The amount of initial amount translated to USD
    * version `string`: The name of the version that was picked (useful for measuring split tests)
  * childTransactions `array`: The child transaction IDs
    * items [ResourceId](#resourceid)
  * createdTime: Transaction created time
  * currency
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId: Customer's ID
  * dcc `object`: Dynamic Currency Conversion detailed information. Null if hasDcc is false
    * base `object`: Initial amount and currency to convert from
      * amount `number`
      * currency
    * outcome `string` (values: rejected, selected, unknown): Dynamic Currency Conversion outcome
    * quote `object`: Suggested amount and currency to convert to
      * amount `number`
      * currency
    * usdMarkup `number`: The amount of markup translated to USD
  * description `string`: The payment description
  * gateway `object`: The related gateway information
    * avsResponse `object`: The AVS gateway's response
      * code `string`: The response code
      * message `string`: The response message
      * originalCode `string`: The raw response code
      * originalMessage `string`: The raw response message
    * cvvResponse `object`: The CVV gateway's response
      * code `string`: The response code
      * message `string`: The response message
      * originalCode `string`: The raw response code
      * originalMessage `string`: The raw response message
    * response `object`: The gateway's response
      * code `string`: The gateway's response code
      * message `string`: The gateway's response message
      * originalCode `string`: The raw, unmapped gateway's response code
      * originalMessage `string`: The raw, unmapped gateway's response message
      * type `string`: The gateway's response type
  * gatewayAccountId: The transactions's Gateway Account ID
  * gatewayName: Payment Gateway name, available only when transaction use gateway, else null
  * gatewayTransactionId: The gateway's transaction ID
  * hadDiscrepancy `boolean`: True if the transaction has been updated due to a disprepancy with its source of truth
  * has3ds `boolean`
  * hasBumpOffer `boolean`: True if transaction has a Bump offer
  * hasDcc `boolean`: True if transaction has Dynamic Currency Conversion applied
  * id: The transaction identifier string
  * invoiceIds `array`: The invoice IDs related to transaction
    * items [ResourceId](#resourceid)
  * isDisputed `boolean`: True if transaction is disputed
  * isRebill `boolean`
  * isReconciled `boolean`: True if the transaction has been verified with gateway batch data
  * isRetry `boolean`: True if this transaction is retry.
  * method: Payment Method
  * notificationUrl [TransactionNotificationUrl](#transactionnotificationurl)
  * orderId `string`: The transactions's order ID.  This ID must be unique within a 24 hour period. This field was renamed to the `requestId`.
  * parentTransactionId: The transactions's parent ID
  * paymentInstrument [PaymentInstrument](#paymentinstrument)
  * planIds `array`: The plan IDs related to transaction's subscription(s)
    * items [ResourceId](#resourceid)
  * processedTime: Transaction processed time
  * purchaseAmount `number`: The transactions's purchase amount
  * purchaseCurrency
  * rebillNumber `integer`: The transactions's rebill number
  * redirectUrl [TransactionRedirectUrl](#transactionredirecturl)
  * referenceData `object`: Transaction reference data
  * reportAmount `number`: The transactions's amount to report
  * reportCurrency
  * requestAmount `number`: The transactions's amount received in the payment request
  * requestCurrency
  * requestId `string`: The transactions's request ID.  This ID must be unique within a 24 hour period. Use this field to prevent duplicated transactions.
  * result `string` (values: abandoned, approved, canceled, declined, unknown): Transaction result
  * retriedTransactionId: The retried transaction ID
  * retriesResult `string` (values: approved, canceled, declined, scheduled): Retries sequence result
  * retryInstruction [PaymentRetry](#paymentretry)
  * retryNumber `integer`: The position in the sequence of retries
  * revision `integer`: The number of times the transaction data has been modified.
  * riskMetadata: Risk metadata
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
    * region `string`: Region for specified ipAddress
    * score `integer`: Risk score computed per all the factors
    * timeZone `string`: Time zone for specified ipAddress
    * vpnServiceName `string`: VPN service name, if available
  * riskScore `integer`: The transactions's risk score
  * scheduledTime `string`: The time the transaction is scheduled for collection
  * status `string` (values: completed, conn-error, disputed, never-sent, partially-refunded, pending, refunded, sending, timeout, voided, waiting-approval, waiting-capture, waiting-gateway, waiting-refund): Transaction status
  * subscriptionIds `array`: The subscription IDs related to transaction's invoice(s)
    * items [ResourceId](#resourceid)
  * type `string` (values: authorize, capture, credit, refund, sale, void): Transaction type
  * updatedTime: Transaction updated time
  * velocity `integer`: The number of transactions by the same customer in the past 24 hours
  * websiteId: Website's ID

### TransactionAllocationsLink
* TransactionAllocationsLink `object`
  * rel **required** `string` (values: transactionAllocations): The link type
  * href **required** `string`: The link URL

### TransactionEmbed
* TransactionEmbed `object`: Transaction object
  * transaction [Transaction](#transaction)

### TransactionGatewayLog
* TransactionGatewayLog `object`
  * _links `array`: The links related to resource
    * items [TransactionLink](#transactionlink)
  * createdTime: The log entry created time
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

### TransactionNotificationUrl
* TransactionNotificationUrl `string`: The URL where a server-to-server POST notification will be sent.  It  will be sent when the

### TransactionRedirectUrl
* TransactionRedirectUrl `string`: The URL to redirect the end-user when an offsite transaction is completed.

### TransactionRefund
* TransactionRefund `object`
  * amount **required** `number`: Refund amount

### TransactionRequest
* TransactionRequest `object`
  * amount **required** `number`: The transaction amount.  Use `0` for a zero dollar verification. This is important if
  * billingAddress: Billing Address. If not supplied, we use the billing address associated with the payment instrument, and then customer.
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * currency **required**
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * customerId **required**: The customer identifier string
  * description `string`: The payment description
  * id: The payment identifier string
  * invoiceIds `array`: The array of invoice identifiers.  It's important to note that the transaction
    * items [ResourceId](#resourceid)
  * isProcessedOutside `boolean`: True if transaction was processed outside Rebilly
  * notificationUrl `string`: The URL where a server-to-server notification request type `POST` with a transaction payload will be sent
  * paymentInstrument [PaymentInstrument](#paymentinstrument)
  * processedTime `string`: The time the transaction was processed. Can be specified only if transaction was processed outside Rebilly.
  * redirectUrl `string`: The URL to redirect the end-user when an offsite transaction is completed.  Defaults to the website's configured URL.
  * requestId `string`: The request id is **recommended**. It prevents duplicate transaction requests within a short period of time. If a duplicate request is sent with the same `requestId` it will be ignored to prevent double-billing anyone.  It must be unique within a 24-hour period.  We recommend generating a UUID v4 as its value.
  * type **required** `string` (values: sale, authorize, credit): The type of transaction requested.
  * websiteId **required**: The website identifier string

### TransactionTimeline
* TransactionTimeline `object`
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * extraData [TimelineExtraData](#timelineextradata)
  * id: The Timeline message identifier string
  * message `string`: The message that describes the message details
  * occurredTime: Timeline message time
  * triggeredBy `string` (values: rebilly, app, direct-api): Shows who or what triggered the Timeline message
  * type `string` (values: timeline-comment-created, transaction-approved, transaction-canceled, transaction-declined, transaction-abandoned, transaction-refunded, transaction-voided, transaction-discrepancy-found, transaction-amount-discrepancy-found, transaction-reconciled, transaction-initiated, transaction-retried, risk-score-changed, transaction-timeout-resolved, dispute-created, dispute-won, dispute-lost, dispute-responded, dispute-forfeited, dispute-changed, gateway-response-received, transaction-scheduled-time-changed, transaction-rules-processed, transaction-capture-delayed, transaction-captured, transaction-waiting-gateway): Timeline message type

### UPayCard
* UPayCard: UPayCard Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * key **required** `string`: merchant key
    * receiver_account **required** `string`: merchant receiver account
    * secret **required** `string`: merchant secret
  * settings `object`: UpayCard settings object
    * tolerancePercentage `string`: Tolerance paercentage for settled amount

### UPayCardInstrument
* UPayCardInstrument: SMSVoucher payment instrument object
  * method **required** [Method](#method)

### USAePay
* USAePay: USAePay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * pin **required** `string`: USAePay Gateway pin
    * sourceKey **required** `string`: USAePay Gateway source key

### UpcomingInvoiceItem
* UpcomingInvoiceItem `object`: Line item
  * createdTime: Date-time when the item was added to the subscription
  * description `string`: Description of line item
  * periodEndTime `string`: Date-time when the period ends for this item
  * periodStartTime `string`: Date-time when the period begins for this item
  * quantity **required** `integer`: Quantity of line item
  * type **required** `string` (values: debit, credit): Type of line item
  * unitPriceAmount **required** `number`: Unit price of the line item
  * unitPriceCurrency **required**

### UpcomingInvoiceItemCollection
* UpcomingInvoiceItemCollection `array`
  * items [UpcomingInvoiceItem](#upcominginvoiceitem)

### VantivLitle
* VantivLitle: VantivLitle Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * merchantId **required** `string`: VantivLitle Gateway merchant ID
    * password **required** `string`: VantivLitle Gateway password
    * username **required** `string`: VantivLitle Gateway username
  * mpi [VantivLitleMpis](#vantivlitlempis)

### VantivLitleMpis
* VantivLitleMpis `object`: VantivLitle Mpis
  * name **required** `string` (values: PaayMpi, Other)

### Wallet88
* Wallet88: Wallet88 config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: Wallet88 credentials object
    * password **required** `string`: Wallet88 API password
    * username **required** `string`: Wallet88 API user

### Walpay
* Walpay: Walpay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * merchantName **required** `string`: Walpay Gateway merchant name
    * merchantPin **required** `string`: Walpay Gateway merchant pin
  * mpi [WalpayMpis](#walpaympis)

### WalpayMpis
* WalpayMpis `object`: WalpayMpis Mpis
  * name **required** `string` (values: PaayMpi, Other)

### WeChat-PayInstrument
* WeChat-PayInstrument: WeChat Pay payment instrument object
  * method **required** [Method](#method)

### WebsiteEmbed
* WebsiteEmbed `object`: Website object
  * website `object`

### WebsiteLink
* WebsiteLink `object`
  * rel **required** `string` (values: website): The link type
  * href **required** `string`: The link URL

### Wirecard
* Wirecard: Wirecard Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * businessSignature **required** `string`: Wirecard Gateway merchant business case signature
    * delay **required** `integer`: Wirecard Gateway delay
    * merchantPassword **required** `string`: Wirecard Gateway merchant password
    * merchantUsername **required** `string`: Wirecard Gateway merchant username
    * sftpPrivateKey `string`: Wirecard sftp private key.
    * sftpUsername `string`: Wirecard sftp username.
  * mpi [WirecardMpis](#wirecardmpis)

### WirecardMpi
* WirecardMpi: Wirecard Integrated
  * name **required** `string` (values: WirecardMpi)

### WirecardMpis
* WirecardMpis `object`: Wirecard Mpis
  * name **required** `string` (values: WirecardMpi)

### Worldpay
* Worldpay: Worldpay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * merchantCode **required** `string`: Worldpay Gateway merchant code
    * merchantPassword **required** `string`: Worldpay Gateway merchant password
  * mpi [WorldpayMpis](#worldpaympis)

### WorldpayMpis
* WorldpayMpis `object`: Worldpay Mpis
  * name **required** `string` (values: PaayMpi, Other)

### Zotapay
* Zotapay: Zotapay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * endpointId **required** `string`: Zotapay's endpoint ID
    * merchantId **required** `string`: Zotapay's merchant ID
    * merchantSecretKey **required** `string`: Zotapay's merchant secret key

### achInstrument
* achInstrument: ACH payment instrument object
  * method **required** [Method](#method)
  * bankAccountId **required**: The bank account identifier string

### acquirer-name
* acquirer-name `string` (values: Alipay, AIB, ApcoPay, AsiaPaymentGateway, AstroPay Card, Ipay Options, B+S, Bambora, BitPay, Bank of America, Bank of Moscow, Bank of Rebilly, Bank One, BMO Harris Bank, Borgun, BraintreePayments, Cardknox, CASHlib, Catalunya Caixa, Chase, ChinaUnionPay, CIM, Citadel, Clearhaus, CODVoucher, Conekta, Coppr, Credorax, Cryptonator, ecoPayz, EcorePay, Elavon, EMS, EPG, Fifth Third Bank, Finrax, First Data Buypass, First Data Nashville, First Data North, First Data Omaha, FinTecSystems, Flexepin, Forte, FundSend, Gigadat, Global East, Gooney, Gpaysafe, Heartland, HSBC, iCanPay, iCheque, Ilixium, Ingenico, INOVAPAY, Intuit, Jeton, LPG, Masapay, Merrick, Mission Valley Bank, Moneris, NATWEST, Netbanking, Neteller, NinjaWallet, NMI, OchaPay, Onlineueberweisen, Other, Panamerican, Panda Bank, Paramount, ParamountEft, Pay4fun, PayCash, PaymenTechnologies, Paynetics, PayPal, Payr, Payvision, Peoples Trust Company, Privatbank, Prosa, QQPay, RBC, RBS WorldPay, RealTime, Rotessa, Skrill, SmartInvoice, SMSVoucher, Sofort, SparkPay, State Bank of Mauritius, Stripe, TBI, TestProcessor, ToditoCash, TrustPay, TSYS, UPayCard, Vantiv, VoicePay, Wallet88, WeChat Pay, Wells Fargo, Wing Hang Bank, Wirecard, WorldPay, Zotapay): The acquirer name

### and
* and `object`: Logical AND
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * conditions **required** `array`
    * items [Condition](#condition)

### auto
* auto
  * method **required** `string` (values: auto, intelligent, immediately, date-interval, day-of-month, day-of-week)

### bank-accountInstrument
* bank-accountInstrument: ACH payment instrument object
  * method **required** [Method](#method)
  * bankAccountId **required**: The bank account identifier string

### between
* between `object`: Between condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * max **required** `string`
  * min **required** `string`
  * path **required** `string`

### bitcoinInstrument
* bitcoinInstrument: Bitcoin payment instrument object
  * method **required** [Method](#method)

### cashInstrument
* cashInstrument: Cash payment instrument object
  * method **required** [Method](#method)
  * receivedBy `string`: The receiver's name

### checkInstrument
* checkInstrument: Check payment instrument object
  * method **required** [Method](#method)
  * reference `string`: Reference data

### compare
* compare `object`
  * path **required** `string`
  * value **required** `string`

### date-interval
* date-interval
  * method **required** `string` (values: auto, intelligent, immediately, date-interval, day-of-month, day-of-week)
  * method **required** `string` (values: date-interval, day-of-month, day-of-week)
  * method **required** `string` (values: intelligent, immediately, date-interval, day-of-month, day-of-week)
  * duration **required** `integer`: The number of the units

### day-of-month
* day-of-month
  * method **required** `string` (values: auto, intelligent, immediately, date-interval, day-of-month, day-of-week)
  * method **required** `string` (values: date-interval, day-of-month, day-of-week)
  * method **required** `string` (values: immediately, day-of-month, day-of-week)
  * method **required** `string` (values: intelligent, immediately, date-interval, day-of-month, day-of-week)
  * day **required** `integer`: The day of the month when event will be scheduled.
  * time [extended-time-iso8601](#extended-time-iso8601)

### day-of-week
* day-of-week
  * method **required** `string` (values: auto, intelligent, immediately, date-interval, day-of-month, day-of-week)
  * method **required** `string` (values: date-interval, day-of-month, day-of-week)
  * method **required** `string` (values: immediately, day-of-month, day-of-week)
  * method **required** `string` (values: intelligent, immediately, date-interval, day-of-month, day-of-week)
  * day **required** [long-day-of-week](#long-day-of-week)
  * time [extended-time-iso8601](#extended-time-iso8601)
  * week `string` (values: next, first-in-month, last-in-month)

### discount
* discount
  * method **required** `string` (values: none, partial, discount)
  * type **required** `string` (values: percent, fixed): The payment amount discount type
  * value **required** `number`: The payment amount discount

### discounts-per-redemption
* discounts-per-redemption: discounts-per-redemption restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type
  * quantity **required** `integer`: Restriction quantity

### eMerchantPay
* eMerchantPay: eMerchantPay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiKey `string`: eMerchantPay Gateway api key
    * clientId `string`: eMerchantPay Gateway client ID
    * password `string`: eMerchantPay password for Genesis platform
    * token `string`: eMerchantPay token for Genesis platform
    * username `string`: eMerchantPay username for Genesis platform
  * mpi [eMerchantPayMpis](#emerchantpaympis)
  * settings `object`: eMerchantPay settings object
    * platform `string` (values: IPG, Genesis): eMerchantPay platform to process payment. default to IPG

### eMerchantPayMpis
* eMerchantPayMpis `object`: eMerchantPay Mpis
  * name **required** `string` (values: PaayMpi, eMerchantPayMpi, Other)

### ePay-bgInstrument
* ePay-bgInstrument: ePay.bg payment instrument object
  * method **required** [Method](#method)

### ecoPayz
* ecoPayz: ecoPayz config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: ecoPayz credentials object
    * merchantAccountNumber **required** `string`: ecoPayz merchant account number
    * merchantPassword **required** `string`: ecoPayz merchant password
    * paymentPageId **required** `string`: ecoPayz payment page ID
  * settings `object`: ecoPayz settings object
    * validCurrency **required** `string` (values: CAD, EUR, GBP, USD): Three letter currency code

### equals
* equals `object`: Equals condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * path **required** `string`
  * value **required** `string`

### extended-time-iso8601
* extended-time-iso8601 `string`: Extended ISO-8601 format of time

### fixed
* fixed: Coupon fixed amount discount
  * type `string` (values: fixed, percent): Discount type
  * amount **required** `number`: Discount amount
  * currency **required**

### fixed-fee
* fixed-fee
  * formula **required** `string` (values: fixed-fee, flat-rate, stairstep, tiered, volume): The price formula determines what algorithm is used to calculate the invoice price based on a few factors,
  * price **required** `number`: For the very simple price when it's fixed and does not depend on the quantity chosen by customer.

### flat-rate
* flat-rate
  * formula **required** `string` (values: fixed-fee, flat-rate, stairstep, tiered, volume): The price formula determines what algorithm is used to calculate the invoice price based on a few factors,
  * maxQuantity `integer`: If the value is `null`, it's assumed to be infinite.
  * price **required** `number`: Flat-rate pricing is represented in a simple price per unit.

### gateway-name
* gateway-name `string` (values: A1Gateway, AmexVPC, ApcoPay, AsiaPaymentGateway, AstroPay, AstroPayCard, AuthorizeNet, Bambora, BitPay, BlueSnap, BraintreePayments, Cardknox, Cashflows, CASHlib, CashToCode, CauriPayment, Cayan, Chase, Citadel, Clearhaus, CODVoucher, Conekta, Coppr, Credorax, Cryptonator, DataCash, Dengi, ecoPayz, EcorePay, Elavon, eMerchantPay, EPG, Finrax, Flexepin, FinTecSystems, FundSend, Forte, GET, Gigadat, GlobalOnePay, Gooney, Gpaysafe, Greenbox, iCanPay, iCheque, iDebit, Ilixium, Ingenico, INOVAPAY, Inovio, Intuit, InstaDebit, IpayOptions, JetPay, Jeton, LPG, Moneris, MtaPay, Netbanking, Neteller, NinjaWallet, NMI, OchaPay, Onlineueberweisen, Optimal, Pagsmile, Panamerican, ParamountEft, PandaGateway, Pay4Fun, PayCash, Payeezy, Payflow, PaymenTechnologies, PayPal, Payr, Paysafe, Paysafecash, Payvision, Plugnpay, Prosa, Realex, Realtime, Redsys, Rotessa, RPN, Sagepay, SeamlessChex, SecureTrading, Skrill, SmartInvoice, SMSVoucher, Sofort, SparkPay, StaticGateway, Stripe, TestProcessor, ToditoCash, UPayCard, USAePay, VantivLitle, vegaaH, Wallet88, Walpay, Wirecard, WorldlineAtosFrankfurt, Worldpay, Zotapay): The payment gateway name

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

### iCanPay
* iCanPay: iCanPay Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * authenticateId **required** `string`: iCanPay Gateway authenticate ID
    * authenticatePw **required** `string`: iCanPay Gateway authenticate password
    * publicKey **required** `string`: iCanPay Gateway API public key
    * secretKey **required** `string`: iCanPay Gateway API secret key

### iCheque
* iCheque: iCheque Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * apiSecurityToken `string`: Hash of the password for the Alliance API (transaction reporting)
    * apiUserId `string`: Username for the Alliance API (transaction reporting)
    * clientId **required** `string`: iCheque Gateway client ID
    * secretWord **required** `string`: iCheque Gateway secret word

### iDEALInstrument
* iDEALInstrument: iDEAL payment instrument object
  * method **required** [Method](#method)

### iDebit
* iDebit: iDebit config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`: iDebit credentials object
    * merchantId **required** `string`: iDebit merchant account number
    * password **required** `string`: iDebit merchant account password

### immediately
* immediately
  * method **required** `string` (values: auto, intelligent, immediately, date-interval, day-of-month, day-of-week)
  * method **required** `string` (values: immediately, day-of-month, day-of-week)
  * method **required** `string` (values: intelligent, immediately, date-interval, day-of-month, day-of-week)

### in
* in `object`: In condition
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * path **required** `string`
  * values **required** `array`
    * items `string`

### intelligent
* intelligent
  * method **required** `string` (values: auto, intelligent, immediately, date-interval, day-of-month, day-of-week)
  * method **required** `string` (values: date-interval, day-of-month, day-of-week)
  * method **required** `string` (values: intelligent, immediately, date-interval, day-of-month, day-of-week)
  * duration **required** `integer`: The number of the units

### logical
* logical `object`
  * conditions **required** `array`
    * items [Condition](#condition)

### logical-not
* logical-not `object`
  * condition **required** [Condition](#condition)

### long-day-of-week
* long-day-of-week `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)

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
* minimum-order-amount: minimum-order-amount restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type
  * amount **required** `integer`: Minimum order quantity
  * currency **required**

### not
* not `object`: Logical NOT
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * condition **required** [Condition](#condition)

### one-time-order
* one-time-order
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * activationTime: Subscription activation time
  * billingAddress: Billing address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * billingStatus `string` (values: unpaid, past-due, delinquent, paid, voided, refunded, disputed, voided): The billing status of the most recent invoice.  It may
  * couponIds `array`: A list of coupons to redeem on the customer and restrict to this subscription.
    * items `string`: Coupon ID
  * customerId **required**: Unique id for each customer
  * deliveryAddress: Delivery address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * id: The Subscription identifier string
  * initialInvoiceId: Unique id for the initial invoice
  * items **required** `array`
    * items `object`
      * planId **required**: Unique id for each plan
      * quantity `integer`: Number of units of the product on the given plan
  * orderType **required** `string` (values: subscription-order, one-time-order): Specifies the type of order, a subscription or a one-time purchase.
  * poNumber `string`: Purchase order number, will be displayed on the issued invoices
  * recentInvoiceId: Unique id for the most recently issued invoice. It might not be `paid` yet.
  * revision `integer`: The number of times the subscription data has been modified.
  * riskMetadata: Risk metadata. If null, the value would coalesce to the risk metadata captured when creating the payment token.
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
    * region `string`: Region for specified ipAddress
    * score `integer`: Risk score computed per all the factors
    * timeZone `string`: Time zone for specified ipAddress
    * vpnServiceName `string`: VPN service name, if available
  * websiteId **required**: Unique id for each website
  * status `string` (values: pending, completed, abandoned): One-time order status
  * _links `array`: The links related to resource
  * createdTime: Subscription created time
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * updatedTime: Subscription updated time

### or
* or `object`: Logical OR
  * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * conditions **required** `array`
    * items [Condition](#condition)

### paid-by-time
* paid-by-time: paid-by-time restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type
  * time **required** `string`: The time when the coupon's redemption is no longer valid and removed from unpaid invoices if applied. Note that this datetime cannot be changed.

### partial
* partial
  * method **required** `string` (values: none, partial, discount)
  * type **required** `string` (values: percent, fixed): The payment amount type
  * value **required** `number`: The payment amount

### password
* password
  * credentialId: The credential's ID
  * mode `string` (values: password, passwordless): The token's generation mode
  * otpRequired `boolean`: Should OTP be required to exchange this token
  * token `string`: The token identifier string
  * customerId: The token's customer ID
  * password `string`: The token's password
  * username `string`: The token's username
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * expiredTime `string`: Token's expired time

### passwordless
* passwordless
  * credentialId: The credential's ID
  * mode `string` (values: password, passwordless): The token's generation mode
  * otpRequired `boolean`: Should OTP be required to exchange this token
  * token `string`: The token identifier string
  * customerId: The token's customer ID
  * _links `array`: The links related to resource
    * items [SelfLink](#selflink)
  * expiredTime `string`: Token's expired time

### payment-card-brands
* payment-card-brands `string` (values: Visa, MasterCard, American Express, Discover, Maestro, Solo, Electron, JCB, Voyager, Diners Club, Switch, Laser, China UnionPay, AstroPay Card): Payment Card brand

### payment-cardInstrument
* payment-cardInstrument: Payment card payment instrument object
  * method **required** [Method](#method)
  * paymentCardId **required**: The payment card identifier string

### paypalInstrument
* paypalInstrument: PayPal payment instrument object
  * method **required** [Method](#method)
  * payPalAccountId **required**: The PayPal account identifier string

### percent
* percent: Coupon percent discount
  * type `string` (values: fixed, percent): Discount type
  * value **required** `number`: Discount percent

### redemption-cancel
* redemption-cancel: Cancel Redemption
  * action `string` (values: resend-email, redemption-cancel)
  * redemptionId

### redemptions-per-customer
* redemptions-per-customer: Quantity per Customer restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type
  * quantity **required** `integer`: Restriction value

### resend-email
* resend-email: Resend Email action
  * action `string` (values: resend-email, redemption-cancel)
  * messageId

### restrict-to-invoices
* restrict-to-invoices: restrict-to-invoices restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type
  * invoiceIds **required** `array`: Invoice IDs coupon can be applied to
    * items `string`

### restrict-to-plans
* restrict-to-plans: restrict-to-plans restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type
  * planIds **required** `array`: Plan IDs coupon can be applied to
    * items `string`

### restrict-to-products
* restrict-to-products: restrict-to-products restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type
  * productIds **required** `array`: Product IDs coupon can be applied to
    * items `string`

### restrict-to-subscriptions
* restrict-to-subscriptions: restrict-to-subscriptions restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type
  * subscriptionIds **required** `array`: Subscription IDs coupon can be applied to
    * items `string`

### schemas_ContactEmails
* schemas_ContactEmails `array`: The list of emails
  * items `object`
    * label **required** `string`: The email label
    * primary `boolean`: True if email is primary
    * value **required** `string`: The email value

### schemas_ContactPhoneNumbers
* schemas_ContactPhoneNumbers `array`: The list of phone numbers
  * items `object`
    * label **required** `string`: The phone label
    * primary `boolean`: True if phone is primary
    * value **required** `string`: The phone value

### schemas_Method
* schemas_Method `string` (values: payment-card, ach, bank-account, cash, check, paypal, Alipay, ApplePay, AstroPay-Card, bank-transfer, bitcoin, Boleto, cash-deposit, CASHlib, CashToCode, China-UnionPay, Conekta-oxxo, domestic-cards, echeck, ecoPayz, ecoVoucher, EPS, ePay-bg, Flexepin, Giropay, GooglePay, Gpaysafe, iDebit, iDEAL, INOVAPAY-pin, INOVAPAY-wallet, InstaDebit, instant-bank-transfer, Interac, Interac-online, Interac-eTransfer, invoice, Jeton, Klarna, LPG-online, LPG-payment-card, miscellaneous, Netbanking, Neteller, Nordea-Solo, OchaPay, online-bank-transfer, Onlineueberweisen, Pagsmile-lottery, Pagsmile-deposit-express, Pagsmile-boleto, PayCash, Paysafecard, Pay4Fun, PinPay, phone, POLi, Przelewy24, QQPay, Resurs, SEPA, Skrill, Skrill-Rapid-Transfer, SMSVoucher, SparkPay, swift-dbt, ToditoCash-card, Trustly, UPayCard, voucher, WeChat-Pay, Zotapay): The payment method

### schemas_ResourceId
* schemas_ResourceId `string`: The resource ID. Defaults to UUID v4

### schemas_SelfLink
* schemas_SelfLink `object`
  * rel **required** `string` (values: self): The link type
  * href **required** `string`: The link URL

### stairstep
* stairstep
  * formula **required** `string` (values: fixed-fee, flat-rate, stairstep, tiered, volume): The price formula determines what algorithm is used to calculate the invoice price based on a few factors,
  * brackets **required** `array`: The price brackets, along with the price formula,
    * items `object`
      * maxQuantity `integer`: If the value is `null`, it's assumed to be infinite.  It starts at the end of the previous bracket.
      * price `number`: If the price is 0, it's free.

### subscription-order
* subscription-order
  * _embedded `array`: Any embedded objects available that are requested by the `expand` querystring parameter.
  * _links `array`: The links related to resource
  * activationTime: Subscription activation time
  * billingAddress: Billing address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * billingStatus `string` (values: unpaid, past-due, delinquent, paid, voided, refunded, disputed, voided): The billing status of the most recent invoice.  It may
  * couponIds `array`: A list of coupons to redeem on the customer and restrict to this subscription.
    * items `string`: Coupon ID
  * customerId **required**: Unique id for each customer
  * deliveryAddress: Delivery address
    * address `string`: The contact street address
    * address2 `string`: The contact street address (second line)
    * city `string`: The contact city
    * country `string`: The contact country ISO Alpha-2 code
    * emails [ContactEmails](#contactemails)
    * firstName `string`: The contact first name
    * hash `string`: A hash that can be used to compare multiple contacts for identical attribute values
    * lastName `string`: The contact last name
    * organization `string`: The contact organization
    * phoneNumbers [ContactPhoneNumbers](#contactphonenumbers)
    * postalCode `string`: The contact postal code
    * region `string`: The contact region (state)
  * id: The Subscription identifier string
  * initialInvoiceId: Unique id for the initial invoice
  * items **required** `array`
    * items `object`
      * planId **required**: Unique id for each plan
      * quantity `integer`: Number of units of the product on the given plan
  * orderType **required** `string` (values: subscription-order, one-time-order): Specifies the type of order, a subscription or a one-time purchase.
  * poNumber `string`: Purchase order number, will be displayed on the issued invoices
  * recentInvoiceId: Unique id for the most recently issued invoice. It might not be `paid` yet.
  * revision `integer`: The number of times the subscription data has been modified.
  * riskMetadata: Risk metadata. If null, the value would coalesce to the risk metadata captured when creating the payment token.
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
    * region `string`: Region for specified ipAddress
    * score `integer`: Risk score computed per all the factors
    * timeZone `string`: Time zone for specified ipAddress
    * vpnServiceName `string`: VPN service name, if available
  * websiteId **required**: Unique id for each website
  * autopay `boolean`: Autopay determines if a payment attempt will be automatic
  * endTime: Subscription end time
  * inTrial `boolean`: True if the subscription is currently in a trial period
  * invoiceTimeShift: You can shift issue time and due time of invoices for this subscription.
    * dueTimeShift [DueTimeShiftInstruction](#duetimeshiftinstruction)
    * issueTimeShift [IssueTimeShiftInstruction](#issuetimeshiftinstruction)
  * lineItemSubtotal `object`: Subtotal of line items in this subscription (signed value). If credits exceed debits, it will be a negative number.
    * amount `number`
    * currency [CurrencyCode](#currencycode)
  * lineItems: Subscription line items which queue until the next renewal (or interim) invoice is issued for the subscription.
    * items [UpcomingInvoiceItem](#upcominginvoiceitem)
  * rebillNumber `integer`: The current period number
  * recurringInterval `object`: The recurring interval to override plan settings. To use plan settings, set `null`.
    * periodAnchorInstruction [ServicePeriodAnchorInstruction](#serviceperiodanchorinstruction)
  * renewalReminderNumber `integer`: Number of renewal reminder events triggered
  * renewalReminderTime: Time renewal reminder event will be triggered
  * renewalTime `string`: Subscription renewal time
  * startTime `string`: Subscription start time.  When the value is sent as null, it will use the current time. This value can't be in past more than one service period.
  * status `string` (values: pending, active, canceled, churned, suspended, paused, abandoned): The status of the subscription service. A subscription starts
  * trial `object`: To use plan defaults do not send the `trial` key, or send a `null` value with it.
    * enabled `boolean`: Enable or disable the trial for this subscription. If enabled for plans without trial prices, the trial will be free.
    * endTime **required** `string`: The time the trial should end
  * trialReminderNumber `integer`: Number of renewal reminder events triggered
  * trialReminderTime: Time renewal reminder event will be triggered
  * _links `array`: The links related to resource
  * createdTime: Subscription created time
  * customFields [ResourceCustomFields](#resourcecustomfields)
  * updatedTime: Subscription updated time
  * cancelCategory `string` (values: billing-failure, did-not-use, did-not-want, missing-features, bugs-or-problems, do-not-remember, risk-warning, contract-expired, too-expensive, never-started, switched-plan, other): Cancel category
  * cancelDescription `string`: Cancel reason description in free form
  * canceledBy `string` (values: merchant, customer, rebilly): Canceled by
  * canceledTime: Subscription canceled time

### three-columns
* three-columns
  * footer `string`: Data table footer
  * title `string`: Data table title
  * type `string` (values: two-columns, three-columns)
  * data `array`: Table data. Each array element represents a table row
    * items `object`
      * attribute `string`
      * newValue `string`
      * previousValue `string`

### tiered
* tiered
  * formula **required** `string` (values: fixed-fee, flat-rate, stairstep, tiered, volume): The price formula determines what algorithm is used to calculate the invoice price based on a few factors,
  * brackets **required** `array`: The price brackets, along with the price formula,
    * items `object`
      * maxQuantity `integer`: If the value is `null`, it's assumed to be infinite.  It starts at the end of the previous bracket.
      * price `number`: If the price is 0, it's free.

### time-plural-unit
* time-plural-unit `string` (values: seconds, minutes, hours, days, months, years)

### time-unit
* time-unit `string` (values: second, minute, hour, day, month, year)

### total-redemptions
* total-redemptions: total-redemptions restrictions
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, redemptions-per-customer, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, total-redemptions, paid-by-time): Coupon's restriction type
  * type **required** `string` (values: discounts-per-redemption, minimum-order-amount, restrict-to-invoices, restrict-to-plans, restrict-to-subscriptions, restrict-to-products, paid-by-time): Redemption's additional restriction type
  * quantity **required** `integer`: Total redemptions quantity

### two-columns
* two-columns
  * footer `string`: Data table footer
  * title `string`: Data table title
  * type `string` (values: two-columns, three-columns)
  * data `array`: Table data. Each array element represents a table row
    * items `object`
      * attribute `string`
      * value `string`

### vegaaH
* vegaaH: vegaaH Gateway config
  * _links `array`: The links related to resource
  * acceptedCurrencies **required** `array`: Accepted currencies (array of the currency three letter code)
    * items `string`
  * acquirerName **required** [acquirer-name](#acquirer-name)
  * additionalCriteria: The additional criteria that allows to check whether the gateway account can be selected for the transaction to be processed.
    * op **required** `string` (values: and, or, not, between, equals, in, gt, gte, lt, lte): The condition operation
  * approvalWindowTtl `integer`: The time window (in seconds) allotted for approving a suspended transaction before it is automatically canceled
  * cityField `string`: The gateway account's city field (also known as line 2 descriptor)
  * createdTime: Gateway Account created time
  * dccForceCurrency `string`: Force dynamic currency conversion to the specified currency on each sale.
  * dccMarkup `integer`: Dynamic currency conversion markup in basis points
  * descriptor `string`: The gateway account's descriptor
  * dynamicDescriptor `boolean`: True, if Gateway Account allows dynamic descriptor
  * excludedDccQuoteCurrencies `array`: Excluded Dynamic Currency Conversion Quote Currencies
    * items `string`
  * gatewayName **required** [gateway-name](#gateway-name)
  * id: The gateway identifier string
  * isDown `boolean`: True if gateway is currently in downtime period.
  * merchantCategoryCode **required** `integer`: The gateway account's merchant category code
  * method [schemas_Method](#schemas_method)
  * monthlyLimit `number`: Monthly Limit
  * organizationId **required**: Organization ID
  * paymentCardSchemes `array`: Accepted payment card brands
    * items [payment-card-brands](#payment-card-brands)
  * status `string` (values: active, inactive, pending, closed): The gateway account's status
  * threeDSecure `boolean`: True, if Gateway Account allows 3DSecure
  * timeout `integer`: Gateway Account request timeout in seconds
  * token `string`: Gateway Account token
  * updatedTime: Gateway Account updated time
  * credentials **required** `object`
    * password **required** `string`: vegaaH Gateway password
    * terminalId **required** `string`: vegaaH Gateway terminal ID

### volume
* volume
  * formula **required** `string` (values: fixed-fee, flat-rate, stairstep, tiered, volume): The price formula determines what algorithm is used to calculate the invoice price based on a few factors,
  * brackets **required** `array`: The price brackets, along with the price formula,
    * items `object`
      * maxQuantity `integer`: If the value is `null`, it's assumed to be infinite.  It starts at the end of the previous bracket.
      * price `number`: If the price is 0, it's free.


