# @datafire/google_identitytoolkit

Client library for Google Identity Toolkit

## Installation and Usage
```bash
npm install --save datafire @datafire/google_identitytoolkit
```

```js
let datafire = require('datafire');
let google_identitytoolkit = require('@datafire/google_identitytoolkit').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_identitytoolkit: account,
  }
})


google_identitytoolkit.relyingparty.verifyPassword({}, context).then(data => {
  console.log(data);
})
```

## Description
Help the third party sites to implement federated login.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_identitytoolkit.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_identitytoolkit.oauthRefresh(null, context)
```


### relyingparty.createAuthUri
Creates the URI used by the IdP to authenticate the user.


```js
google_identitytoolkit.relyingparty.createAuthUri({}, context)
```


### relyingparty.deleteAccount
Delete user account.


```js
google_identitytoolkit.relyingparty.deleteAccount({}, context)
```


### relyingparty.downloadAccount
Batch download user accounts.


```js
google_identitytoolkit.relyingparty.downloadAccount({}, context)
```


### relyingparty.getAccountInfo
Returns the account info.


```js
google_identitytoolkit.relyingparty.getAccountInfo({}, context)
```


### relyingparty.getOobConfirmationCode
Get a code for user action confirmation.


```js
google_identitytoolkit.relyingparty.getOobConfirmationCode({}, context)
```


### relyingparty.getProjectConfig
Get project configuration.


```js
google_identitytoolkit.relyingparty.getProjectConfig({}, context)
```


### relyingparty.getRecaptchaParam
Get recaptcha secure param.


```js
google_identitytoolkit.relyingparty.getRecaptchaParam({}, context)
```


### relyingparty.getPublicKeys
Get token signing public key.


```js
google_identitytoolkit.relyingparty.getPublicKeys({}, context)
```


### relyingparty.resetPassword
Reset password for a user.


```js
google_identitytoolkit.relyingparty.resetPassword({}, context)
```


### relyingparty.setAccountInfo
Set account info for a user.


```js
google_identitytoolkit.relyingparty.setAccountInfo({}, context)
```


### relyingparty.setProjectConfig
Set project configuration.


```js
google_identitytoolkit.relyingparty.setProjectConfig({}, context)
```


### relyingparty.signOutUser
Sign out user.


```js
google_identitytoolkit.relyingparty.signOutUser({}, context)
```


### relyingparty.signupNewUser
Signup new user.


```js
google_identitytoolkit.relyingparty.signupNewUser({}, context)
```


### relyingparty.uploadAccount
Batch upload existing user accounts.


```js
google_identitytoolkit.relyingparty.uploadAccount({}, context)
```


### relyingparty.verifyAssertion
Verifies the assertion returned by the IdP.


```js
google_identitytoolkit.relyingparty.verifyAssertion({}, context)
```


### relyingparty.verifyCustomToken
Verifies the developer asserted ID token.


```js
google_identitytoolkit.relyingparty.verifyCustomToken({}, context)
```


### relyingparty.verifyPassword
Verifies the user entered password.


```js
google_identitytoolkit.relyingparty.verifyPassword({}, context)
```


