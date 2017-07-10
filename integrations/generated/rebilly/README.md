# @datafire/rebilly
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


## Operation: 3dsecure.get
Retrieve a list of ThreeDSecure entries

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ThreeDSecure"
  },
  "type": "array"
}
```
## Operation: 3dsecure.post
Create a ThreeDSecure entry


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ThreeDSecure"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ThreeDSecure"
}
```
## Operation: 3dsecure.id.get
Retrieve a ThreeDSecure entry with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ThreeDSecure"
}
```
## Operation: activation.token.post
Sends a token to activate user account


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The token string"
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api_keys.get
Retrieve a list of api keys


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ApiKey"
  },
  "type": "array"
}
```
## Operation: api_keys.post
Create an api key


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ApiKey"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApiKey"
}
```
## Operation: api_keys.id.delete
Delete api key with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api_keys.id.get
Retrieve api key with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApiKey"
}
```
## Operation: api_keys.id.put
Create or update api key with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ApiKey"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApiKey"
}
```
## Operation: attachments.get
Retrieve a list of Attachments


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "filter": {
      "type": "string",
      "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n"
    },
    "q": {
      "type": "string",
      "description": "The partial search of the text fields."
    },
    "expand": {
      "type": "string",
      "description": "Expand response to get full related object intead of ID.  See the expand guide for more info."
    },
    "fields": {
      "type": "string",
      "description": "Limit the returned fields to the list specified, separated by comma.  Note that id is always returned."
    },
    "sort": {
      "type": "array",
      "description": "The collection items sort field and order (prefix with \"-\" for descending sort)."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Attachment"
  },
  "type": "array"
}
```
## Operation: attachments.post
Create an Attachment


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Attachment"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Attachment"
}
```
## Operation: attachments.id.delete
Delete the Attachment with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: attachments.id.get
Retrieve a Attachment with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Attachment"
}
```
## Operation: attachments.id.put
Update the Attachment with predefined ID


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Attachment"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Attachment"
}
```
## Operation: authentication_options.get
Read current authentication options


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AuthenticationOptions"
  },
  "type": "array"
}
```
## Operation: authentication_options.put
Change options


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/AuthenticationOptions"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthenticationOptions"
}
```
## Operation: authentication_tokens.get
Retrieve a list of auth tokens


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/AuthenticationToken"
  },
  "type": "array"
}
```
## Operation: authentication_tokens.post
Login a user (customer)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/AuthenticationToken"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthenticationToken"
}
```
## Operation: authentication_tokens.token.delete
Logout a user


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The token identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: authentication_tokens.token.get
Verify an authentication token


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The token identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AuthenticationToken"
}
```
## Operation: bank_accounts.get
Retrieve a list of Bank Accounts


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BankAccount"
  },
  "type": "array"
}
```
## Operation: bank_accounts.post
Create a Bank Account


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/BankAccount"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BankAccount"
}
```
## Operation: bank_accounts.id.get
Retrieve a Bank Account with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BankAccount"
}
```
## Operation: bank_accounts.id.put
Create or update a BankAccount with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/BankAccount"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BankAccount"
}
```
## Operation: bank_accounts.id.deactivation.post
Deactivate a Bank Account


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BankAccount"
}
```
## Operation: blacklists.get
Retrieve a list of blacklists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Blacklist"
  },
  "type": "array"
}
```
## Operation: blacklists.post
Create a blacklist


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Blacklist"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Blacklist"
}
```
## Operation: blacklists.id.delete
Delete a blacklist with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blacklists.id.get
Retrieve a blacklist with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Blacklist"
}
```
## Operation: blacklists.id.put
Create a blacklist with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Blacklist"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Blacklist"
}
```
## Operation: checkout_pages.get
Retrieve a list of checkout pages


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CheckoutPage"
  },
  "type": "array"
}
```
## Operation: checkout_pages.post
Create a Checkout Page


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CheckoutPage"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckoutPage"
}
```
## Operation: checkout_pages.id.delete
Delete a Checkout Page with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: checkout_pages.id.get
Retrieve a Checkout Page with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckoutPage"
}
```
## Operation: checkout_pages.id.put
Create or update a Checkout Page with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CheckoutPage"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckoutPage"
}
```
## Operation: contacts.get
Retrieve a list of contacts


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Contact"
  },
  "type": "array"
}
```
## Operation: contacts.post
Create a contact


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Contact"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Contact"
}
```
## Operation: contacts.id.get
Retrieve a contact with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Contact"
}
```
## Operation: contacts.id.put
Create or update a contact with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Contact"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Contact"
}
```
## Operation: coupons.get
Retrieve a list of coupons


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "filter": {
      "type": "string",
      "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n"
    },
    "q": {
      "type": "string",
      "description": "The partial search of the text fields."
    },
    "criteria": {
      "type": "string",
      "description": "The json criteria for collection"
    },
    "sort": {
      "type": "array",
      "description": "The collection items sort field and order (prefix with \"-\" for descending sort)."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Coupon"
  },
  "type": "array"
}
```
## Operation: coupons.post
Create a coupon


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Coupon"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Coupon"
}
```
## Operation: coupons_redemptions.get
Retrieve a list of coupon redemptions

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "filter": {
      "type": "string",
      "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n"
    },
    "q": {
      "type": "string",
      "description": "The partial search of the text fields."
    },
    "criteria": {
      "type": "string",
      "description": "The json criteria for collection"
    },
    "sort": {
      "type": "array",
      "description": "The collection items sort field and order (prefix with \"-\" for descending sort)."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CouponRedemption"
  },
  "type": "array"
}
```
## Operation: coupons_redemptions.post
Redeem a coupon


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CouponRedemption"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CouponRedemption"
}
```
## Operation: coupons_redemptions.id.get
Retrieve a coupon redemption with specified identifier string

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CouponRedemption"
}
```
## Operation: coupons_redemptions.id.cancel.post
Cancel a coupon redemption

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: coupons.redemptionCode.get
Retrieve a coupon with specified redemption code string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "redemptionCode": {
      "type": "string",
      "description": "The Coupon's redemption code"
    }
  },
  "additionalProperties": false,
  "required": [
    "redemptionCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Coupon"
}
```
## Operation: coupons.redemptionCode.put
Create or update a coupon with predefined redemption code


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Coupon"
    },
    "redemptionCode": {
      "type": "string",
      "description": "The Coupon's redemption code"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "redemptionCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Coupon"
}
```
## Operation: credential_hashes.emails.post
Create an email credential


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SmtpCredential"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SmtpCredential"
}
```
## Operation: credential_hashes.emails.hash.get
Retrieve an email credential with specified token identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hash": {
      "type": "string",
      "description": "The token identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "hash"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SmtpCredential"
}
```
## Operation: credential_hashes.webhooks.post
Create a webhook credential


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/WebhookCredential"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebhookCredential"
}
```
## Operation: credential_hashes.webhooks.hash.get
Retrieve a webhook credential with specified token identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "hash": {
      "type": "string",
      "description": "The token identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "hash"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebhookCredential"
}
```
## Operation: credentials.get
Retrieve a list of credentials


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Credential"
  },
  "type": "array"
}
```
## Operation: credentials.post
Create a credential


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Credential"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Credential"
}
```
## Operation: credentials.id.delete
Delete a credential with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: credentials.id.get
Retrieve a credential with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Credential"
}
```
## Operation: credentials.id.put
Create or update a credential with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Credential"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Credential"
}
```
## Operation: custom_events.get
Retrieve a list of custom events


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CustomEvent"
  },
  "type": "array"
}
```
## Operation: custom_events.post
Create a custom event


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CustomEvent"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomEvent"
}
```
## Operation: custom_events.id.delete
Delete a custom event with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: custom_events.id.get
Retrieve a custom event with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomEvent"
}
```
## Operation: custom_events.id.put
Create a custom event with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CustomEvent"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomEvent"
}
```
## Operation: custom_events.id.rules.get
Retrieve a list of rules for custom event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleSet"
}
```
## Operation: custom_events.id.rules.put
Update the rules for custom event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/RuleSet"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleSet"
}
```
## Operation: custom_events.id.rules.history.get
Retrieve the change history of the set of rules for the selected custom event.
The history is updated each time you change the rules.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "filter": {
      "type": "string",
      "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n"
    },
    "q": {
      "type": "string",
      "description": "The partial search of the text fields."
    },
    "sort": {
      "type": "array",
      "description": "The collection items sort field and order (prefix with \"-\" for descending sort)."
    },
    "fields": {
      "type": "string",
      "description": "Limit the returned fields to the list specified, separated by comma.  Note that id is always returned."
    },
    "expand": {
      "type": "string",
      "description": "Expand response to get full related object intead of ID.  See the expand guide for more info."
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RuleSetHistoryItem"
  },
  "type": "array"
}
```
## Operation: custom_events.id.rules.history.version.get
Retrieve the record from the change history of the set of rules for the selected custom event.
A history record is created each time you change the rules.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Limit the returned fields to the list specified, separated by comma.  Note that id is always returned."
    },
    "expand": {
      "type": "string",
      "description": "Expand response to get full related object intead of ID.  See the expand guide for more info."
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    },
    "version": {
      "type": "integer",
      "description": "The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleSetHistoryItem"
}
```
## Operation: custom_events.id.rules.versions.version.get
Retrieve the version of the selected set of rules for the selected custom event.
The versions are created each time you change the rules.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Limit the returned fields to the list specified, separated by comma.  Note that id is always returned."
    },
    "expand": {
      "type": "string",
      "description": "Expand response to get full related object intead of ID.  See the expand guide for more info."
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    },
    "version": {
      "type": "integer",
      "description": "The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleSetVersion"
}
```
## Operation: custom_fields.resource.get
Retrieve a schema of Custom Fields for the given resource type


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resource": {
      "type": "string",
      "description": "The resource type string",
      "enum": [
        "customers",
        "payment-cards",
        "subscriptions",
        "payments",
        "websites",
        "contacts",
        "products"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "resource"
  ]
}
```
### Output Schema
```json
{
  "description": "The list of custom fields",
  "items": {
    "$ref": "#/definitions/CustomField"
  },
  "type": "array"
}
```
## Operation: custom_fields.resource.name.delete
Delete a custom field by its name


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resource": {
      "type": "string",
      "description": "The resource type string",
      "enum": [
        "customers",
        "payment-cards",
        "subscriptions",
        "payments",
        "websites",
        "contacts",
        "products"
      ]
    },
    "name": {
      "type": "string",
      "description": "The custom field's identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "resource",
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: custom_fields.resource.name.get
Retrieve a schema of the given Custom Field for the given resource type


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resource": {
      "type": "string",
      "description": "The resource type string",
      "enum": [
        "customers",
        "payment-cards",
        "subscriptions",
        "payments",
        "websites",
        "contacts",
        "products"
      ]
    },
    "name": {
      "type": "string",
      "description": "The custom field's identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "resource",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomField"
}
```
## Operation: custom_fields.resource.name.put
Create or alter a schema of the given Custom Field for the given resource type.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CustomField"
    },
    "resource": {
      "type": "string",
      "description": "The resource type string",
      "enum": [
        "customers",
        "payment-cards",
        "subscriptions",
        "payments",
        "websites",
        "contacts",
        "products"
      ]
    },
    "name": {
      "type": "string",
      "description": "The custom field's identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "resource",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomField"
}
```
## Operation: customers.get
Retrieve a list of customers


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "filter": {
      "type": "string",
      "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n"
    },
    "q": {
      "type": "string",
      "description": "The partial search of the text fields."
    },
    "expand": {
      "type": "string",
      "description": "Expand response to get full related object intead of ID.  See the expand guide for more info."
    },
    "fields": {
      "type": "string",
      "description": "Limit the returned fields to the list specified, separated by comma.  Note that id is always returned."
    },
    "sort": {
      "type": "array",
      "description": "The collection items sort field and order (prefix with \"-\" for descending sort)."
    },
    "Accept": {
      "type": "string",
      "description": "The response media type",
      "enum": [
        "application/json",
        "text/csv"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Customer"
  },
  "type": "array"
}
```
## Operation: customers.post
Create a customer


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Customer"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Customer"
}
```
## Operation: customers.id.get
Retrieve a customer with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Customer"
}
```
## Operation: customers.id.put
Create a customer with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Customer"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Customer"
}
```
## Operation: customers.id.lead_source.delete
Delete a Lead Source that belongs to a certain customer


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: customers.id.lead_source.get
Retrieve a Lead Source of given customer


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadSource"
}
```
## Operation: customers.id.lead_source.put
Create a Lead Source for a customer


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/LeadSource"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadSource"
}
```
## Operation: disputes.get
Retrieve a list of disputes


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Dispute"
  },
  "type": "array"
}
```
## Operation: disputes.post
Create a dispute


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Dispute"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Dispute"
}
```
## Operation: disputes.id.get
Retrieve a dispute with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Dispute"
}
```
## Operation: disputes.id.put
Create or update a Dispute with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Dispute"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Dispute"
}
```
## Operation: events.get
Retrieve a list of existing events

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/SystemEvent"
  },
  "type": "array"
}
```
## Operation: events.eventType.get
Retrieve the event information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "eventType": {
      "type": "string",
      "description": "The event type"
    }
  },
  "additionalProperties": false,
  "required": [
    "eventType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SystemEvent"
}
```
## Operation: events.eventType.rules.get
Retrieve a list of rules for event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "eventType": {
      "type": "string",
      "description": "The event type"
    }
  },
  "additionalProperties": false,
  "required": [
    "eventType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleSet"
}
```
## Operation: events.eventType.rules.put
Update the rules for event

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/RuleSet"
    },
    "eventType": {
      "type": "string",
      "description": "The event type"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "eventType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleSet"
}
```
## Operation: events.eventType.rules.history.get
Retrieve the change history of the selected set of rules.
The history is updated each time you change the rules.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "filter": {
      "type": "string",
      "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n"
    },
    "q": {
      "type": "string",
      "description": "The partial search of the text fields."
    },
    "sort": {
      "type": "array",
      "description": "The collection items sort field and order (prefix with \"-\" for descending sort)."
    },
    "fields": {
      "type": "string",
      "description": "Limit the returned fields to the list specified, separated by comma.  Note that id is always returned."
    },
    "expand": {
      "type": "string",
      "description": "Expand response to get full related object intead of ID.  See the expand guide for more info."
    },
    "eventType": {
      "type": "string",
      "description": "The event type"
    }
  },
  "additionalProperties": false,
  "required": [
    "eventType"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RuleSetHistoryItem"
  },
  "type": "array"
}
```
## Operation: events.eventType.rules.history.version.get
Retrieve the record from the change history of the selected set of rules.
A history record is created each time you change the rules.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Limit the returned fields to the list specified, separated by comma.  Note that id is always returned."
    },
    "expand": {
      "type": "string",
      "description": "Expand response to get full related object intead of ID.  See the expand guide for more info."
    },
    "eventType": {
      "type": "string",
      "description": "The event type"
    },
    "version": {
      "type": "integer",
      "description": "The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "eventType",
    "version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleSetHistoryItem"
}
```
## Operation: events.eventType.rules.versions.version.get
Retrieve the version of the selected set of rules.
The versions are created each time you change the rules.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Limit the returned fields to the list specified, separated by comma.  Note that id is always returned."
    },
    "expand": {
      "type": "string",
      "description": "Expand response to get full related object intead of ID.  See the expand guide for more info."
    },
    "eventType": {
      "type": "string",
      "description": "The event type"
    },
    "version": {
      "type": "integer",
      "description": "The rule set version. Expand response to get full related object instead of ID.  See the expand guide for more info.",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "eventType",
    "version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RuleSetVersion"
}
```
## Operation: files.get
Retrieve a list of files


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "filter": {
      "type": "string",
      "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n"
    },
    "q": {
      "type": "string",
      "description": "The partial search of the text fields."
    },
    "expand": {
      "type": "string",
      "description": "Expand response to get full related object intead of ID.  See the expand guide for more info."
    },
    "fields": {
      "type": "string",
      "description": "Limit the returned fields to the list specified, separated by comma.  Note that id is always returned."
    },
    "sort": {
      "type": "array",
      "description": "The collection items sort field and order (prefix with \"-\" for descending sort)."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/File"
  },
  "type": "array"
}
```
## Operation: files.post
Create a file


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "properties": {
        "url": {
          "description": "The file URL",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/File"
}
```
## Operation: files.id.delete
Delete the File with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: files.id.get
Retrieve a File with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/File"
}
```
## Operation: files.id.put
Update the File with predefined ID


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/File"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/File"
}
```
## Operation: files.id.download.get
Retrieve a file


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "readOnly": true,
  "type": "string"
}
```
## Operation: files.id.downloadextension.get
Used for converting images server-side


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    },
    "extension": {
      "type": "string",
      "description": "File extension which also indicates the desired file format",
      "enum": [
        ".png",
        ".jpg"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "extension"
  ]
}
```
### Output Schema
```json
{
  "readOnly": true,
  "type": "string"
}
```
## Operation: forgot_password.post
Sends an email with a link containing a token to reset user password


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Email"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gateway_accounts.get
Retrieve a list of gateway accounts


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/GatewayAccount"
  },
  "type": "array"
}
```
## Operation: gateway_accounts.post
Create a Gateway Account


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GatewayAccount"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GatewayAccount"
}
```
## Operation: gateway_accounts.id.delete
Delete a Gateway Account with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gateway_accounts.id.get
Retrieve a Gateway Account with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GatewayAccount"
}
```
## Operation: gateway_accounts.id.patch
Update a GatewayAccount with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GatewayAccount"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GatewayAccount"
}
```
## Operation: gateway_accounts.id.put
Create or update a GatewayAccount with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GatewayAccount"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GatewayAccount"
}
```
## Operation: invoices.get
Retrieve a list of invoices


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "Accept": {
      "type": "string",
      "description": "The response media type",
      "enum": [
        "application/json",
        "text/csv"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Invoice"
  },
  "type": "array"
}
```
## Operation: invoices.post
Create an invoice


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Invoice"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invoice"
}
```
## Operation: invoices.id.get
Retrieve an invoice with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "The response media type",
      "enum": [
        "application/json",
        "application/pdf"
      ]
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invoice"
}
```
## Operation: invoices.id.put
Create or update an invoice with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Invoice"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invoice"
}
```
## Operation: invoices.id.abandon.post
Abandon an invoice with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invoice"
}
```
## Operation: invoices.id.issue.post
Issue an invoice with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/InvoiceIssue"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invoice"
}
```
## Operation: invoices.id.items.get
Retrieve an invoice items with specified invoice identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/InvoiceItem"
  },
  "type": "array"
}
```
## Operation: invoices.id.items.post
Create an invoice item


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/InvoiceItem"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InvoiceItem"
}
```
## Operation: invoices.id.lead_source.delete
Delete a Lead Source that belongs to a certain invoice


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: invoices.id.lead_source.get
Retrieve a Lead Source of given invoice


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadSource"
}
```
## Operation: invoices.id.lead_source.put
Create a Lead Source for an invoice


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/LeadSource"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadSource"
}
```
## Operation: invoices.id.void.post
Void an invoice with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invoice"
}
```
## Operation: layouts.get
Retrieve a layout list


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Layout"
  },
  "type": "array"
}
```
## Operation: layouts.post
Create a layout


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Layout"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Layout"
}
```
## Operation: layouts.id.delete
Delete a layout with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layouts.id.get
Retrieve a layout with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Layout"
}
```
## Operation: layouts.id.put
Create or update a layout with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Layout"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Layout"
}
```
## Operation: lists.get
Retrieve a collection of Lists


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "filter": {
      "type": "string",
      "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n"
    },
    "criteria": {
      "type": "string",
      "description": "The json criteria for collection"
    },
    "sort": {
      "type": "array",
      "description": "The collection items sort field and order (prefix with \"-\" for descending sort)."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/List"
  },
  "type": "array"
}
```
## Operation: lists.post
Create a List


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/List"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/List"
}
```
## Operation: lists.id.delete
Delete a list with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: lists.id.get
Retrieve latest version of List with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/List"
}
```
## Operation: lists.id.put
Create or update a list with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/List"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/List"
}
```
## Operation: lists.id.version.get
Retrieve List's exact version

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    },
    "version": {
      "type": "integer",
      "description": "List version",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/List"
}
```
## Operation: notes.get
Retrieve a list of notes


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Note"
  },
  "type": "array"
}
```
## Operation: notes.post
Create a note


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Note"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: notes.id.get
Retrieve a note with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: notes.id.put
Create or update a note with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Note"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: organizations.get
Retrieve a list of organizations


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Organization"
  },
  "type": "array"
}
```
## Operation: organizations.post
Create a organization


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Organization"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Organization"
}
```
## Operation: organizations.id.delete
Delete a organization with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: organizations.id.get
Retrieve a organization with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Organization"
}
```
## Operation: organizations.id.put
Create or update a organization with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Organization"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Organization"
}
```
## Operation: password_tokens.get
Retrieve a list of tokens


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ResetPasswordToken"
  },
  "type": "array"
}
```
## Operation: password_tokens.post
Create a Reset Password Token


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ResetPasswordToken"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResetPasswordToken"
}
```
## Operation: password_tokens.id.delete
Delete a Reset Password Token with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: password_tokens.id.get
Retrieve a Reset Password Token with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ResetPasswordToken"
}
```
## Operation: payment_cards.get
Retrieve a list of Payments Cards


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PaymentCard"
  },
  "type": "array"
}
```
## Operation: payment_cards.post
Create a Payment Card


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PaymentCard"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PaymentCard"
}
```
## Operation: payment_cards_migrations.get
Retrieve a list of payment cards ready for migration


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PaymentCard"
  },
  "type": "array"
}
```
## Operation: payment_cards_migrations.migrate.post
Migrate payment cards to another gateway account


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PaymentCardMigrationRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PaymentCardMigrationResponse"
}
```
## Operation: payment_cards.id.get
Retrieve a Payment Card with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PaymentCard"
}
```
## Operation: payment_cards.id.put
Create a payment card with predefined ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PaymentCard"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PaymentCard"
}
```
## Operation: payment_cards.id.authorization.post
Authorize a Payment Card


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "properties": {
        "amount": {
          "description": "Amount",
          "format": "double",
          "type": "number"
        },
        "currency": {
          "description": "Currency (three letter code)",
          "type": "string"
        },
        "gatewayAccountId": {
          "description": "The Gateway account ID",
          "type": "string"
        },
        "websiteId": {
          "description": "The Website ID",
          "type": "string"
        }
      },
      "required": [
        "websiteId",
        "currency"
      ],
      "type": "object"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PaymentCard"
}
```
## Operation: payment_cards.id.deactivation.post
Deactivate a Payment Card


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PaymentCard"
}
```
## Operation: payments.get
Retrieve a payment list


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "Accept": {
      "type": "string",
      "description": "The response media type",
      "enum": [
        "application/json",
        "text/csv"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Payment"
  },
  "type": "array"
}
```
## Operation: payments.post
Create a payment


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Payment"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Payment"
  },
  "type": "array"
}
```
## Operation: payments.id.get
Retrieve a payment with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Payment"
}
```
## Operation: payments.id.put
Make a payment with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Payment"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Payment"
  },
  "type": "array"
}
```
## Operation: plans.get
Retrieve a list of plans


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Plan"
  },
  "type": "array"
}
```
## Operation: plans.post
Create a plan


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Plan"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Plan"
}
```
## Operation: plans.id.delete
Delete a Plan with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: plans.id.get
Retrieve a plan with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Plan"
}
```
## Operation: plans.id.put
Create or update a Plan with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Plan"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Plan"
}
```
## Operation: previews.rule_actions.send_email.post
Send a test email


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SendTestEmail"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendTestEmail"
}
```
## Operation: previews.rule_actions.trigger_webhook.post
Trigger a test webhook


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SendPreviewWebhook"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendPreviewWebhook"
}
```
## Operation: previews.webhooks.post
Trigger a test webhook


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GlobalWebhook"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.get
Retrieve a list of products


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Product"
  },
  "type": "array"
}
```
## Operation: products.post
Create a Product


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Product"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Product"
}
```
## Operation: products.id.delete
Delete a product with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.id.get
Retrieve a product with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Product"
}
```
## Operation: products.id.put
Create a product with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Product"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Product"
}
```
## Operation: profile.get
Retrieve user's profile


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: profile.put
Update user's profile


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Profile"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Profile"
}
```
## Operation: queue.custom_events.get
Retrieve a list of scheduled custom events


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CustomEvent"
  },
  "type": "array"
}
```
## Operation: queue.custom_events.id.delete
Delete a scheduled custom event with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: queue.custom_events.id.get
Retrieve a scheduled custom event with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomEvent"
}
```
## Operation: queue.payments.get
Retrieve a scheduled payment list


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Payment"
  },
  "type": "array"
}
```
## Operation: queue.payments.id.get
Retrieve a payment with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Payment"
}
```
## Operation: queue.payments.id.put
Update pending payment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Payment"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Payment"
}
```
## Operation: queue.payments.id.cancel.post
Cancel a scheduled payment with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Payment"
}
```
## Operation: sessions.get
Retrieve a list of sessions


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Session"
  },
  "type": "array"
}
```
## Operation: sessions.post
Create a session


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Session"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Session"
}
```
## Operation: sessions.id.delete
Delete a Session with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sessions.id.get
Retrieve a Session with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Session"
}
```
## Operation: sessions.id.put
Create or update a Session with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Session"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Session"
}
```
## Operation: shipping_zones.get
Retrieve a list of shipping zones


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ShippingZone"
  },
  "type": "array"
}
```
## Operation: shipping_zones.post
Create a Shipping Zone


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ShippingZone"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShippingZone"
}
```
## Operation: shipping_zones.id.delete
Delete a shipping zone with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping_zones.id.get
Retrieve a shipping zone with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShippingZone"
}
```
## Operation: shipping_zones.id.put
Create a shipping zone with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ShippingZone"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ShippingZone"
}
```
## Operation: signin.post
Create a session with email and password


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Signin"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Session"
}
```
## Operation: signup.post
Creates a new user and sends an email confirmation


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Signup"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: status.get
Retrieve API current status


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Status"
}
```
## Operation: subscriptions.get
Retrieve a list of subscriptions


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "Accept": {
      "type": "string",
      "description": "The response media type",
      "enum": [
        "application/json",
        "text/csv"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Subscription"
  },
  "type": "array"
}
```
## Operation: subscriptions.post
Create a subscription


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Subscription"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subscription"
}
```
## Operation: subscriptions.id.get
Retrieve a subscription with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subscription"
}
```
## Operation: subscriptions.id.put
Create or update a subscription with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Subscription"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subscription"
}
```
## Operation: subscriptions.id.cancel.post
Cancel a subscription


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SubscriptionCancel"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subscription"
}
```
## Operation: subscriptions.id.lead_source.delete
Delete a Lead Source that belongs to a certain Subscription


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: subscriptions.id.lead_source.get
Retrieve a Lead Source of given subscription


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadSource"
}
```
## Operation: subscriptions.id.lead_source.put
Create a Lead Source for a Subscription


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/LeadSource"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadSource"
}
```
## Operation: subscriptions.id.switch.post
Switch a subscription


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SubscriptionSwitch"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Subscription"
}
```
## Operation: tax_categories.get
Retrieve a list of tax categories


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/TaxCategory"
  },
  "type": "array"
}
```
## Operation: tokens.get
Retrieve a list of tokens


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/PaymentToken"
  },
  "type": "array"
}
```
## Operation: tokens.post
Create a token


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PaymentToken"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PaymentToken"
}
```
## Operation: tokens.token.get
Retrieve a token with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The token identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PaymentToken"
}
```
## Operation: tokens.token.expiration.post
Expire a token


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PaymentToken"
    },
    "token": {
      "type": "string",
      "description": "The token identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PaymentToken"
}
```
## Operation: tracking.api.get
Retrieve a list of tracking API logs

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "Accept": {
      "type": "string",
      "description": "The response media type",
      "enum": [
        "application/json",
        "text/csv"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ApiTracking"
  },
  "type": "array"
}
```
## Operation: tracking.api.id.get
Retrieve a tracking API log with specified identifier string

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApiTracking"
}
```
## Operation: tracking.lists.get
Retrieve Lists changes history

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/List"
  },
  "type": "array"
}
```
## Operation: tracking.subscriptions.get
Retrieve a list of tracking subscription logs

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/SubscriptionTracking"
  },
  "type": "array"
}
```
## Operation: tracking.subscriptions.id.get
Retrieve a tracking subscription log with specified identifier string

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SubscriptionTracking"
}
```
## Operation: tracking.website_webhooks.get
Retrieve a list of tracking webhook notifications

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/WebsiteWebhookTracking"
  },
  "type": "array"
}
```
## Operation: tracking.website_webhooks.id.get
Retrieve a tracking webhook notification with specified identifier string

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebsiteWebhookTracking"
}
```
## Operation: transactions.get
Retrieve a list of transactions


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "filter": {
      "type": "string",
      "description": "The collection items filter requires a special format.\nUse \",\" for multiple allowed values.  Use \";\" for multiple fields.\nSee the filter guide for more options and examples about this format.\n"
    },
    "sort": {
      "type": "array",
      "description": "The collection items sort field and order (prefix with \"-\" for descending sort)."
    },
    "Accept": {
      "type": "string",
      "description": "The response media type",
      "enum": [
        "application/json",
        "text/csv"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Transaction"
  },
  "type": "array"
}
```
## Operation: transactions.id.get
Retrieve a Transaction with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Transaction"
}
```
## Operation: transactions.id.gateway_logs.get
Retrieve Gateway communication Logs for Transaction with specified identifier string

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TransactionGatewayLog"
}
```
## Operation: transactions.id.lead_source.delete
Delete a Lead Source that belongs to a certain transaction


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: transactions.id.lead_source.get
Retrieve a Lead Source of given transaction


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadSource"
}
```
## Operation: transactions.id.lead_source.put
Create a Lead Source for a transaction


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/LeadSource"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadSource"
}
```
## Operation: transactions.id.refund.post
Refund a Transaction with specified identifier string.
Note that the refund will be in the same currency as the original transaction.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/TransactionRefund"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Transaction"
}
```
## Operation: users.get
Retrieve a list of users


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/User"
  },
  "type": "array"
}
```
## Operation: users.post
Create an user


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/User"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.reset_password.token.post
Reset user password


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ResetPassword"
    },
    "token": {
      "type": "string",
      "description": "The token string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.id.delete
Delete user with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.id.get
Retrieve user with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.id.put
Create or update user with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/User"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.id.password.post
Updates user's password with the specified newPassword. And checks if currentPassword matches the actual one.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdatePassword"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.id.totp_reset.post
Reset (renew) totpSecret


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: webhooks.get
Retrieve a list of webhooks


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/GlobalWebhook"
  },
  "type": "array"
}
```
## Operation: webhooks.post
Create a webhook


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GlobalWebhook"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GlobalWebhook"
}
```
## Operation: webhooks.id.get
Retrieve a webhook with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GlobalWebhook"
}
```
## Operation: webhooks.id.put
Create or update a webhook with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GlobalWebhook"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GlobalWebhook"
}
```
## Operation: websites.get
Retrieve a list of websites


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The collection items limit",
      "maximum": 1000,
      "minimum": 0
    },
    "offset": {
      "type": "integer",
      "description": "The collection items offset",
      "minimum": 0
    },
    "Accept": {
      "type": "string",
      "description": "The response media type",
      "enum": [
        "application/json",
        "text/csv"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Website"
  },
  "type": "array"
}
```
## Operation: websites.post
Create a website


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Website"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Website"
}
```
## Operation: websites.id.delete
Delete a website with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: websites.id.get
Retrieve a website with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Website"
}
```
## Operation: websites.id.put
Create or update a website with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Website"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Website"
}
```
## Operation: websites.id.webhook.delete
Delete a webhook that belongs to a website with predefined ID


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: websites.id.webhook.get
Retrieve a webhook for website with specified identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebsiteWebhook"
}
```
## Operation: websites.id.webhook.put
Create or update a webhook for website with predefined identifier string


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/WebsiteWebhook"
    },
    "id": {
      "type": "string",
      "description": "The resource identifier string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebsiteWebhook"
}
```
