# @datafire/beanstream

Client library for Beanstream Payments

## Installation and Usage
```bash
npm install --save datafire @datafire/beanstream
```

```js
let datafire = require('datafire');
let beanstream = require('@datafire/beanstream').actions;
let context = new datafire.Context();

beanstream.scripts.tokenization.tokens.post({}, context).then(data => {
  console.log(data);
})
```

## Description
https://www.beanstream.com/api/v1

## Actions
### payments.post
Make a payment using credit card, cash, cheque, profile, or token. Each payment type has its own json definition passed in the body. For all payments you have the standard Billing, Shipping, Comments, etc. fields that are optional. Only the amount is required along with the payment data for card, cash, cheque, profile, and token. You must change the payment_method for each payment type. Credit Card - "card", Payment Profile - "payment_profile", Legato Token - "token", Cash - "cash", Cheque - "cheque", Interac - "interac"


```js
beanstream.payments.post({}, context)
```

#### Parameters
* payment_request (undefined)

### payments.transId.get
Get a previous payment (transaction).


```js
beanstream.payments.transId.get({
  "transId": 0
}, context)
```

#### Parameters
* transId (number) **required** - The transaction id.

### payments.transId.completions.post
Complete a pre-authorized payment. The amount of the transaction to complete must be less than or equal to the original pre-auth amount. Complete must be set to true.


```js
beanstream.payments.transId.completions.post({
  "transId": 0
}, context)
```

#### Parameters
* transId (number) **required** - The transaction id.
* payment_request (undefined)

### payments.transId.returns.post
Return payment.


```js
beanstream.payments.transId.returns.post({
  "transId": 0,
  "return": null
}, context)
```

#### Parameters
* transId (number) **required** - The transaction id.
* return (undefined) **required**

### payments.transId.void.post
Void a transaction. You can void payments, returns, pre-auths, and completions. It will cancel that transaction.


```js
beanstream.payments.transId.void.post({
  "transId": 0,
  "void": null
}, context)
```

#### Parameters
* transId (number) **required** - The transaction id to void.
* void (undefined) **required**

### profiles.post
Create a new Payment Profile using either a card or a Legato token. You must supply one of them.


```js
beanstream.profiles.post({
  "createProfileBody": null
}, context)
```

#### Parameters
* createProfileBody (undefined) **required**

### profiles.profileId.delete
Delete a Payment Profile using the profile ID, also known as the Customer Code.


```js
beanstream.profiles.profileId.delete({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The profile id. (aka CustomerCode)

### profiles.profileId.get
Get a Payment Profile using the profile ID, also known as the Customer Code.


```js
beanstream.profiles.profileId.get({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The profile id. (aka CustomerCode)

### profiles.profileId.put
Create a new Payment Profile using either a card or a Legato token. You must supply one of them.


```js
beanstream.profiles.profileId.put({
  "profileId": "",
  "updateProfileBody": null
}, context)
```

#### Parameters
* profileId (string) **required** - The profile id. (aka CustomerCode)
* updateProfileBody (undefined) **required**

### profiles.profileId.cards.get
Get all of the cards on the profile.


```js
beanstream.profiles.profileId.cards.get({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The profile id. (aka CustomerCode)

### profiles.profileId.cards.post
Add a card to the profile. Note that there is a default limit of 1 card per profile. You can change this in your Profiles settings in the back office.


```js
beanstream.profiles.profileId.cards.post({
  "profileId": "",
  "card": null
}, context)
```

#### Parameters
* profileId (string) **required** - The profile id. (aka CustomerCode)
* card (undefined) **required**

### profiles.profileId.cards.cardId.delete
Delete a card on the profile.


```js
beanstream.profiles.profileId.cards.cardId.delete({
  "profileId": "",
  "cardId": 0
}, context)
```

#### Parameters
* profileId (string) **required** - The profile id. (aka CustomerCode)
* cardId (number) **required** - The card id.

### profiles.profileId.cards.cardId.put
Update the details of a card on the profile.


```js
beanstream.profiles.profileId.cards.cardId.put({
  "profileId": "",
  "cardId": 0,
  "card": null
}, context)
```

#### Parameters
* profileId (string) **required** - The profile id. (aka CustomerCode)
* cardId (number) **required** - The card id.
* card (undefined) **required**

### reports.post
Query for transactions using a date range and optional search criteria. This method allows you to page your search results if you are expecting a lot of results to be returned. The page start value begins at 1. If no records are found the API will return a 404 error message. For details on the parameters and allowed values for Criteria please visit the documentation http://developer.beanstream.com/documentation/analyze-payments/search-specific-criteria/


```js
beanstream.reports.post({}, context)
```

#### Parameters
* search_query (undefined)

### scripts.tokenization.tokens.post
NOTE that the full URL for this API call is https://www.beanstream.com/scripts/tokenization/tokens. Turn a credit card into a token using this service. This helps lessen your PCI scope by not passing the credit card information to your server. Instead you turn the card number into a token in the client app, then send the token to the server. When you send the token to Beanstream to make a payment, Beanstream then looks up the card number from that token and makes the payment. Tokens can also be used to create payment profiles.


```js
beanstream.scripts.tokenization.tokens.post({}, context)
```

#### Parameters
* token_request (undefined)

