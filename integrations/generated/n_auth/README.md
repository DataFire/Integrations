# @datafire/n_auth

Client library for n-Auth

## Installation and Usage
```bash
npm install --save @datafire/n_auth
```
```js
let n_auth = require('@datafire/n_auth').create({
  api_key: ""
});

n_auth.nauth.post({
  "msg": ""
}).then(data => {
  console.log(data);
});
```

## Description

API for the server

## Actions

### nauth.post
Hook for the n-Auth protocol handler



```js
n_auth.nauth.post({
  "msg": ""
}, context)
```

#### Input
* input `object`
  * msg **required** `string`

#### Output
* output `string`

### servers.post
Create a new server. Required permission 'createserver'


```js
n_auth.servers.post({
  "servername": "",
  "owner": 0,
  "logo": ""
}, context)
```

#### Input
* input `object`
  * servername **required** `string`: Name for the server
  * owner **required** `integer`: Owner id
  * pinEnabled `boolean`: PIN protection enabled
  * logo **required** `string`

#### Output
* output [Status](#status)

### servers.server.get
Returns the configuration of a specific server.
Required permission: 'servers' or 'createserver' 



```js
n_auth.servers.server.get({
  "server": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id

#### Output
* output [Config](#config)

### servers.server.put
Update the configuration of a specific server.
Required permission: 'createserver' 



```js
n_auth.servers.server.put({
  "server": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * serverName `string`: server name
  * logo `string`
  * pinTimeout `integer`: time (minutes) since the last time the user entered his PIN, that the user is not requested a PIN at login.
  * pinTransTimeout `integer`: time (minutes) since the last time the user entered his PIN, that the user is not requested a PIN at transaction approval.
  * pingTime `integer`: time (seconds) that the n-Auth app has to reply to a ping request from the n-Auth server (continious authentication).
  * serverFlags `array`: server flags

#### Output
* output [Config](#config)

### servers.server.accounts.accountid.delete
Delete an account. Required permission 'accounts'



```js
n_auth.servers.server.accounts.accountid.delete({
  "server": "",
  "accountid": 0
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * accountid **required** `integer`: Accountid

#### Output
*Output schema unknown*

### servers.server.accounts.accountid.get
Returns the account



```js
n_auth.servers.server.accounts.accountid.get({
  "server": "",
  "accountid": 0
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * accountid **required** `integer`: Accountid

#### Output
* output [Account](#account)

### servers.server.accounts.accountid.put
Update an account. The only available change is (un)blocking the account. Required permission 'accounts'



```js
n_auth.servers.server.accounts.accountid.put({
  "server": "",
  "accountid": 0,
  "blocked": true
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * accountid **required** `integer`: Accountid
  * blocked **required** `boolean`: True if the account is blocked

#### Output
* output [Account](#account)

### servers.server.accounts.accountid.provokelogin.nonce.post
Provoke a login in the n-Auth app on the given session. Required permission 'sessions' or 'accounts'


```js
n_auth.servers.server.accounts.accountid.provokelogin.nonce.post({
  "server": "",
  "nonce": "",
  "accountid": 0
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * nonce **required** `string`: Base64 encoded nonce to identify the browser/webserver session
  * accountid **required** `integer`: Accountid

#### Output
* output [Status](#status)

### servers.server.sessions.nonce.get
Based on the browser/webserver session identifier, check if the user is logged in and return the associated username. The n-Auth server can handle multiple realms in which a user can separately be registrated. This also returns additional information: the data for a login visual (qr/nauth) code and whether or not a loggin can be provoked directly from the server. 
Required permission: 'sessions'



```js
n_auth.servers.server.sessions.nonce.get({
  "server": "",
  "nonce": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * nonce **required** `string`: Base64 encoded nonce to identify the browser/webserver session
  * realm `string`: Realm for the user registeration.

#### Output
* output [LoginStatus](#loginstatus)

### servers.server.sessions.nonce.logout.post
Force a logout on the given session

Required permission: 'sessions' 



```js
n_auth.servers.server.sessions.nonce.logout.post({
  "server": "",
  "nonce": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * nonce **required** `string`: Base64 encoded nonce to identify the browser/webserver session

#### Output
* output [Status](#status)

### servers.server.sessions.nonce.provokelogin.post
Provoke a login in the n-Auth app on the given session. Required permission: 'sessions'



```js
n_auth.servers.server.sessions.nonce.provokelogin.post({
  "server": "",
  "nonce": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * nonce **required** `string`: Base64 encoded nonce to identify the browser/webserver session

#### Output
* output [Status](#status)

### servers.server.sessions.nonce.qr.get
Returns the data for a n-auth or qr code.
Required permission: 'sessions'



```js
n_auth.servers.server.sessions.nonce.qr.get({
  "server": "",
  "type": "",
  "nonce": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * type **required** `string`: ENROL or LOGIN
  * nonce **required** `string`: Base64 encoded nonce to identify the browser/webserver session
  * img `string`: Type of image to show (currently 'nauth' and 'qr' are supported, format is PNG). If not set, the raw data encoded in the image will be returned.
  * name `string`: Only for ENROL, name to forward to the n-Auth app for this account.
  * userid `string`: Only for ENROL, userid to register this user under.
  * realm `string`: Only for ENROL (and if userid is set), realm of the userid

#### Output
*Output schema unknown*

### servers.server.sessions.nonce.registeruser.post
Register a user (under a certain realm) for the currently logged in user. You can also directly pass a userid when generating an ENROL qr code. Required permission 'users'


```js
n_auth.servers.server.sessions.nonce.registeruser.post({
  "server": "",
  "nonce": "",
  "userid": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * nonce **required** `string`: Base64 encoded nonce to identify the browser/webserver session
  * userid **required** `string`: Userid to register
  * realm `string`: Realm for the user registeration.

#### Output
* output [Status](#status)

### servers.server.users.get
Returns an array of arrays containing all accounts corresponding to all users
Required permission: 'users'



```js
n_auth.servers.server.users.get({
  "server": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * realm `string`: Only for ENROL (and if userid is set), realm of the userid

#### Output
*Output schema unknown*

### servers.server.users.userid.get
Returns an array containing all accounts corresponding to this user
Required permission: 'sessions' or 'users'



```js
n_auth.servers.server.users.userid.get({
  "server": "",
  "userid": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * realm `string`: realm of the userid
  * userid **required** `string`: Userid

#### Output
* output [Account](#account)

### servers.server.users.userid.provokelogin.nonce.post
Provoke a login in the n-Auth app on the given session. Required permission 'users' or 'sessions'


```js
n_auth.servers.server.users.userid.provokelogin.nonce.post({
  "server": "",
  "nonce": "",
  "userid": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id
  * nonce **required** `string`: Base64 encoded nonce to identify the browser/webserver session
  * realm `string`: realm of the userid
  * userid **required** `string`: Userid

#### Output
* output [Status](#status)

### servers.server.vash.get
Returns a PNG of the visual hash corresponding to this server. Required permission 'sessions' or 'servers'


```js
n_auth.servers.server.vash.get({
  "server": ""
}, context)
```

#### Input
* input `object`
  * server **required** `string`: Base64 encoded server id

#### Output
*Output schema unknown*



## Definitions

### Account
* Account `object`
  * blocked **required** `boolean`: True if the account is blocked
  * created `integer`: timestamp of creation
  * description **required** `string`: description of the account (e.g. device name)
  * id **required** `integer`: Account id
  * lastlogin `integer`: timestamp of last login
  * permVersion **required** `integer`: Protocol version number
  * publicKeyAuthRevoked **required** `boolean`: True if the authentication key has been revoked
  * publicKeyTransRevoked `boolean`: True if the transaction key has been revoked
  * serverId **required** `integer`: server id

### Config
* Config `object`
  * logo **required** `string`: Base 64 encoded logo
  * pinTimeout **required** `integer`: time (minutes) since the last time the user entered his PIN, that the user is not requested a PIN at login. -1 means that the user is never asked for a PIN before logging in, 0 means that the user is asked every time he wants to login
  * pinTransTimeout **required** `integer`: time (minutes) since the last time the user entered his PIN, that the user is not requested a PIN at transaction approval. -1 means that the user is never asked for a PIN before approving a transaction, 0 means that the user is asked every time he wants to approve a transaction
  * pingTime **required** `integer`: time (seconds) that the n-Auth app has before it needs to reply to a ping request from the n-Auth server (continious authentication)
  * serverFlags **required** `array`: server flags
    * items `string`
  * serverName **required** `string`: serverName
  * serverid **required** `string`: Base64 encoded id of the n-Auth server
  * serverpk **required** `string`: Base64 encoded public key of the n-Auth server

### LoginStatus
* LoginStatus `object`
  * canprovoke `boolean`: True if a login can be pushed from the server, false otherwise
  * loggedin **required** `boolean`: True if the user is loggedin, false otherwise
  * loginqrdata `string`: Base 64 encoded data that is represented in a LOGIN qr/nauth code
  * pk `string`: Base64 encoded public key of the n-Auth app. This uniquely identifies the account on the n-Auth app, regardless of the username
  * userid `string`: Username.

### Status
* Status `object`
  * result **required** `boolean`: True if the operation succeeded, false otherwise


