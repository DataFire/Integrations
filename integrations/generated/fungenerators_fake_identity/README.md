# @datafire/fungenerators_fake_identity

Client library for Fake identity generation API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_fake_identity
```
```js
let fungenerators_fake_identity = require('@datafire/fungenerators_fake_identity').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Generate random fake identities (name, address, email, phone , credit card info etc). [Click here to subscribe](http://fungenerators.com/api/fakeidentity/)


## Actions

### identity.company.get
Generate full company identity


```js
fungenerators_fake_identity.identity.company.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### identity.company.address.get
Generate postal addresses


```js
fungenerators_fake_identity.identity.company.address.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of addresses to return. Defaults to 1.

#### Output
*Output schema unknown*

### identity.company.name.get
Generate company name(s)


```js
fungenerators_fake_identity.identity.company.name.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of names to return. Defaults to 1.

#### Output
*Output schema unknown*

### identity.company.phonenumber.get
Generate random company phone number(s)


```js
fungenerators_fake_identity.identity.company.phonenumber.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of phone numbers to return. Defaults to 1.

#### Output
*Output schema unknown*

### identity.person.get
Generate full identity name, phone, email, address, credit card etc.


```js
fungenerators_fake_identity.identity.person.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### identity.person.address.get
Generate postal addresses


```js
fungenerators_fake_identity.identity.person.address.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of addresses to return. Defaults to 1.

#### Output
*Output schema unknown*

### identity.person.creditcard.get
Generate credit card details (number, type, expiration date, name on the card etc).


```js
fungenerators_fake_identity.identity.person.creditcard.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of credit card details to return. Defaults to 1.

#### Output
*Output schema unknown*

### identity.person.email.get
Generate random email ids


```js
fungenerators_fake_identity.identity.person.email.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of email ids to return. Defaults to 1.

#### Output
*Output schema unknown*

### identity.person.name.get
Generate full name(s)


```js
fungenerators_fake_identity.identity.person.name.get({}, context)
```

#### Input
* input `object`
  * gender `string`: Gender of the names. If not specified both gender names will be returned.
  * limit `integer`: No of names to return. Defaults to 1.

#### Output
*Output schema unknown*

### identity.person.name.first.get
Generate first name (in a given gender)


```js
fungenerators_fake_identity.identity.person.name.first.get({}, context)
```

#### Input
* input `object`
  * gender `string`: Gender of the names. If not specified both gender names will be returned.
  * limit `integer`: No of names to return. Defaults to 1.

#### Output
*Output schema unknown*

### identity.person.name.last.get
Generate last name(s)


```js
fungenerators_fake_identity.identity.person.name.last.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of names to return. Defaults to 1.

#### Output
*Output schema unknown*

### identity.person.phonenumber.get
Generate random phone number(s)


```js
fungenerators_fake_identity.identity.person.phonenumber.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: No of phone numbers to return. Defaults to 1.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
