# @datafire/6_dot_authentiqio_appspot

Client library for Authentiq

## Installation and Usage
```bash
npm install --save @datafire/6_dot_authentiqio_appspot
```
```js
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

#### Input
* input `object`
  * email **required** `string`: primary email associated to Key (ID)
  * phone **required** `string`: primary phone number, international representation
  * code `string`: verification code sent by email

#### Output
* output `object`
  * status `string`: pending or done

### key_register
Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.key_register({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [AuthentiqID](#authentiqid)

#### Output
* output `object`
  * secret `string`: revoke key
  * status `string`: registered

### key_revoke
Revoke an Identity (Key) with a revocation secret


```js
dot_authentiqio_appspot.key_revoke({
  "PK": "",
  "secret": ""
}, context)
```

#### Input
* input `object`
  * PK **required** `string`: Public Signing Key - Authentiq ID (43 chars)
  * secret **required** `string`: revokation secret

#### Output
* output `object`
  * status `string`: done

### key.PK.get
Get public details of an Authentiq ID.



```js
dot_authentiqio_appspot.key.PK.get({
  "PK": ""
}, context)
```

#### Input
* input `object`
  * PK **required** `string`: Public Signing Key - Authentiq ID (43 chars)

#### Output
* output `object`
  * since `string`
  * status `string`
  * sub `string`: base64safe encoded public signing key

### key.PK.head
HEAD info on Authentiq ID



```js
dot_authentiqio_appspot.key.PK.head({
  "PK": ""
}, context)
```

#### Input
* input `object`
  * PK **required** `string`: Public Signing Key - Authentiq ID (43 chars)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * PK **required** `string`: Public Signing Key - Authentiq ID (43 chars)
  * body **required** [AuthentiqID](#authentiqid)

#### Output
* output `object`
  * status `string`: confirmed

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

#### Input
* input `object`
  * PK **required** `string`: Public Signing Key - Authentiq ID (43 chars)
  * body **required** [AuthentiqID](#authentiqid)

#### Output
* output `object`
  * status `string`: confirmed

### push_login_request
push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.push_login_request({
  "body": null,
  "callback": ""
}, context)
```

#### Input
* input `object`
  * body **required** [PushToken](#pushtoken)
  * callback **required** `string`: URI App will connect to

#### Output
* output `object`
  * status `string`: sent

### sign_request
scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.sign_request({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [Claims](#claims)
  * test `integer`: test only mode, using test issuer

#### Output
* output `object`
  * job `string`: 20-character ID
  * status `string`: waiting

### sign_delete
delete a verification job


```js
dot_authentiqio_appspot.sign_delete({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: Job ID (20 chars)

#### Output
* output `object`
  * status `string`: done

### sign_retrieve
get the status / current content of a verification job


```js
dot_authentiqio_appspot.sign_retrieve({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: Job ID (20 chars)

#### Output
* output `object`
  * exp `integer`
  * field `string`
  * sub `string`: base64safe encoded public signing key

### sign_retrieve_head
HEAD to get the status of a verification job


```js
dot_authentiqio_appspot.sign_retrieve_head({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: Job ID (20 chars)

#### Output
*Output schema unknown*

### sign_confirm
this is a scope confirmation


```js
dot_authentiqio_appspot.sign_confirm({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: Job ID (20 chars)

#### Output
* output `object`
  * status `string`: confirmed

### sign_update
authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples



```js
dot_authentiqio_appspot.sign_update({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: Job ID (20 chars)

#### Output
* output `object`
  * jwt `string`: result is JWT or JSON??
  * status `string`: ready



## Definitions

### AuthentiqID
* AuthentiqID `object`: Authentiq ID in JWT format, self-signed.
  * devtoken `string`: device token for push messages
  * sub **required** `string`: UUID and public signing key

### Claims
* Claims `object`: Claim in JWT format, self- or issuer-signed. 
  * email `string`
  * phone `string`
  * scope **required** `string`: claim scope
  * sub **required** `string`: UUID
  * type `string`

### Error
* Error `object`
  * detail `string`
  * error **required** `integer`
  * title `string`
  * type `string`: unique uri for this error

### PushToken
* PushToken `object`: PushToken in JWT format, self-signed. 
  * aud **required** `string`: audience (URI)
  * exp `integer`
  * iat `integer`
  * iss **required** `string`: issuer (URI)
  * nbf `integer`
  * sub **required** `string`: UUID and public signing key


