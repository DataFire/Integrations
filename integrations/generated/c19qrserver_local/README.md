# @datafire/c19qrserver_local

Client library for API for the COVID-19 Tracking QR Code Signin Server.

## Installation and Usage
```bash
npm install --save @datafire/c19qrserver_local
```
```js
let c19qrserver_local = require('@datafire/c19qrserver_local').create({
  TokenHeader: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This is the API for the COVID-19 Contact Tracing QRCode Signin Server

## Actions

### changePassword.post
Pass in your old password and your new password


```js
c19qrserver_local.changePassword.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * old_password `string`: The old (current) password
    * password `string`: The new password

#### Output
*Output schema unknown*

### login.post
Submit your email and password to get an API token


```js
c19qrserver_local.login.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * email `string`
    * password `string`
    * source `string` (values: iOS, android, web)

#### Output
* output [loginResponse](#loginresponse)

### logout.post
Log out by deleting your token off the server.


```js
c19qrserver_local.logout.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### requestPasswordReset.post
The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API.



```js
c19qrserver_local.requestPasswordReset.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * email `string`: The user whose password you want to reset

#### Output
* output [requestPasswordResetResponse](#requestpasswordresetresponse)

### signin.post
Create a new signin record


```js
c19qrserver_local.signin.post({}, context)
```

#### Input
* input `object`
  * body [signin](#signin)

#### Output
* output [signinResponse](#signinresponse)

### signin.signinId.delete
Delete a signin record      



```js
c19qrserver_local.signin.signinId.delete({
  "signinId": 0
}, context)
```

#### Input
* input `object`
  * signinId **required** `integer`: The ID of the signin record to be deleted.

#### Output
*Output schema unknown*

### signin.signinId.get
Retrieve the information associated with a signin record



```js
c19qrserver_local.signin.signinId.get({
  "signinId": 0
}, context)
```

#### Input
* input `object`
  * signinId **required** `integer`: The ID of the signin record to be retrieved.

#### Output
* output [signin](#signin)

### signin.signinId.put
Update a signin record



```js
c19qrserver_local.signin.signinId.put({
  "signinId": 0
}, context)
```

#### Input
* input `object`
  * signinId **required** `integer`: The ID of the signin record to be retrieved.
  * body [signin](#signin)

#### Output
* output [userRecord](#userrecord)

### signins.get
Returns a list of signin objects sorted by signin ID descending.


```js
c19qrserver_local.signins.get({}, context)
```

#### Input
* input `object`
  * less_than `integer`: Return signins with IDs less than this value.
  * return_count `integer`: Return this many objects

#### Output
* output `array`
  * items [signin](#signin)

### user.post
Use this endpoint to create a team member (user) record


```js
c19qrserver_local.user.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * admin `boolean`: If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.
    * email `string`: The email address of the user record you want to create
    * name `string`: The name of the user record you want to create
    * read_only `boolean`: Not used in this version of the API. For future use.

#### Output
* output [createUserResponse](#createuserresponse)

### user.userId.delete
To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens. 



```js
c19qrserver_local.user.userId.delete({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: The ID of the user record to be deleted.

#### Output
*Output schema unknown*

### user.userId.get
Retrieve the information associated with a user's account



```js
c19qrserver_local.user.userId.get({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: The ID of the user record to be retrieved.

#### Output
* output [userRecord](#userrecord)

### users.get
Retrieve the information associated with all team members' user records



```js
c19qrserver_local.users.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [userRecord](#userrecord)

### verifyPasswordChange.post
Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password.



```js
c19qrserver_local.verifyPasswordChange.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * guid `string`: The password reset code
    * password `string`: The new password

#### Output
*Output schema unknown*



## Definitions

### createUserResponse
* The object that's returned when a user record is created. `object`: The object that's returned when a user record is created.
  * email `string`: The user's email address
  * guid `string`: The user's password reset code

### invalidToken
* Invalid Token `object`: Invalid token
  * message `string`

### keyFailure
* Key Failure `object`: Key Failure
  * message `string`

### loginResponse
* Login Response `object`: Payload of successful login
  * admin `boolean`: True if this user is an admin. False otherwise
  * login_id `integer`: The login id for this user
  * name `string`: This user's name
  * read_only `boolean`: True if this user has permissions to write to the database. False otherwise
  * token `string`: The API key that will be used to authenticate the user.

### requestPasswordResetResponse
* Request Password Reset Response `object`: This object contains the password reset code for the user
  * email `string`: The user's email address
  * guid `string`: The password reset code

### signin
* Signin Object `object`: Payload of signin object
  * dt `number`: The original scan time in number of seconds since 1/1/1970 (GMT)
  * email `string`: The person's email
  * id `integer`: The record id
  * name **required** `string`: The person's name
  * phone **required** `string`: The person's phone number

### signinResponse
* Signin Response `object`: Response when you successfully create a signin record
  * result `integer`

### userRecord
* A team member user record `object`: A team member user record
  * admin `boolean`: If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.
  * email `string`: The user's email address
  * id `integer`: The id of the user's record
  * name `string`: The user's name
  * read_only `boolean`: Not used in this version of the API. For future use.


