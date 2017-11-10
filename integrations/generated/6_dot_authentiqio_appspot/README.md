# @datafire/6_dot_authentiqio_appspot

Client library for Authentiq

## Installation and Usage
```bash
npm install --save datafire @datafire/6_dot_authentiqio_appspot
```

```js
let datafire = require('datafire');
let dot_authentiqio_appspot = require('@datafire/6_dot_authentiqio_appspot').create();

dot_authentiqio_appspot.key_revoke_nosecret({}).then(data => {
  console.log(data);
})
```

## Description
Strong authentication, without the passwords.

## Actions
### key_revoke_nosecret
Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.



```js
dot_authentiqio_appspot.key_revoke_nosecret({
  "email": "",
  "phone": ""
}, context)
```

#### Parameters
* email (string) **required** - primary email associated to Key (ID)
* phone (string) **required** - primary phone number, international representation
* code (string) - verification code sent by email

### key_register
Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.key_register({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required** - Authentiq ID in JWT format, self-signed.

### key_revoke
Revoke an Identity (Key) with a revocation secret


```js
dot_authentiqio_appspot.key_revoke({
  "PK": "",
  "secret": ""
}, context)
```

#### Parameters
* PK (string) **required** - Public Signing Key - Authentiq ID (43 chars)
* secret (string) **required** - revokation secret

### key.PK.get
Get public details of an Authentiq ID.



```js
dot_authentiqio_appspot.key.PK.get({
  "PK": ""
}, context)
```

#### Parameters
* PK (string) **required** - Public Signing Key - Authentiq ID (43 chars)

### key.PK.head
HEAD info on Authentiq ID



```js
dot_authentiqio_appspot.key.PK.head({
  "PK": ""
}, context)
```

#### Parameters
* PK (string) **required** - Public Signing Key - Authentiq ID (43 chars)

### key_update
update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.key_update({
  "PK": "",
  "body": null
}, context)
```

#### Parameters
* PK (string) **required** - Public Signing Key - Authentiq ID (43 chars)
* body (undefined) **required** - Authentiq ID in JWT format, self-signed.

### key_bind
Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.key_bind({
  "PK": "",
  "body": null
}, context)
```

#### Parameters
* PK (string) **required** - Public Signing Key - Authentiq ID (43 chars)
* body (undefined) **required** - Authentiq ID in JWT format, self-signed.

### push_login_request
push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.push_login_request({
  "body": null,
  "callback": ""
}, context)
```

#### Parameters
* body (undefined) **required** - PushToken in JWT format, self-signed. 
* callback (string) **required** - URI App will connect to

### sign_request
scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.sign_request({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required** - Claim in JWT format, self- or issuer-signed. 
* test (integer) - test only mode, using test issuer

### sign_delete
delete a verification job


```js
dot_authentiqio_appspot.sign_delete({
  "job": ""
}, context)
```

#### Parameters
* job (string) **required** - Job ID (20 chars)

### sign_retrieve
get the status / current content of a verification job


```js
dot_authentiqio_appspot.sign_retrieve({
  "job": ""
}, context)
```

#### Parameters
* job (string) **required** - Job ID (20 chars)

### sign_retrieve_head
HEAD to get the status of a verification job


```js
dot_authentiqio_appspot.sign_retrieve_head({
  "job": ""
}, context)
```

#### Parameters
* job (string) **required** - Job ID (20 chars)

### sign_confirm
this is a scope confirmation


```js
dot_authentiqio_appspot.sign_confirm({
  "job": ""
}, context)
```

#### Parameters
* job (string) **required** - Job ID (20 chars)

### sign_update
authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.sign_update({
  "job": ""
}, context)
```

#### Parameters
* job (string) **required** - Job ID (20 chars)

