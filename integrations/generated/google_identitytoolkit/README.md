# @datafire/google_identitytoolkit

Client library for Google Identity Toolkit

## Installation and Usage
```bash
npm install --save @datafire/google_identitytoolkit
```
```js
let google_identitytoolkit = require('@datafire/google_identitytoolkit').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_identitytoolkit.relyingparty.verifyPhoneNumber({}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_identitytoolkit.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### relyingparty.createAuthUri
Creates the URI used by the IdP to authenticate the user.


```js
google_identitytoolkit.relyingparty.createAuthUri({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyCreateAuthUriRequest](#identitytoolkitrelyingpartycreateauthurirequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CreateAuthUriResponse](#createauthuriresponse)

### relyingparty.deleteAccount
Delete user account.


```js
google_identitytoolkit.relyingparty.deleteAccount({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyDeleteAccountRequest](#identitytoolkitrelyingpartydeleteaccountrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DeleteAccountResponse](#deleteaccountresponse)

### relyingparty.downloadAccount
Batch download user accounts.


```js
google_identitytoolkit.relyingparty.downloadAccount({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyDownloadAccountRequest](#identitytoolkitrelyingpartydownloadaccountrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DownloadAccountResponse](#downloadaccountresponse)

### relyingparty.emailLinkSignin
Reset password for a user.


```js
google_identitytoolkit.relyingparty.emailLinkSignin({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyEmailLinkSigninRequest](#identitytoolkitrelyingpartyemaillinksigninrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EmailLinkSigninResponse](#emaillinksigninresponse)

### relyingparty.getAccountInfo
Returns the account info.


```js
google_identitytoolkit.relyingparty.getAccountInfo({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyGetAccountInfoRequest](#identitytoolkitrelyingpartygetaccountinforequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetAccountInfoResponse](#getaccountinforesponse)

### relyingparty.getOobConfirmationCode
Get a code for user action confirmation.


```js
google_identitytoolkit.relyingparty.getOobConfirmationCode({}, context)
```

#### Input
* input `object`
  * body [Relyingparty](#relyingparty)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetOobConfirmationCodeResponse](#getoobconfirmationcoderesponse)

### relyingparty.getProjectConfig
Get project configuration.


```js
google_identitytoolkit.relyingparty.getProjectConfig({}, context)
```

#### Input
* input `object`
  * delegatedProjectNumber `string`: Delegated GCP project number of the request.
  * projectNumber `string`: GCP project number of the request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [IdentitytoolkitRelyingpartyGetProjectConfigResponse](#identitytoolkitrelyingpartygetprojectconfigresponse)

### relyingparty.getRecaptchaParam
Get recaptcha secure param.


```js
google_identitytoolkit.relyingparty.getRecaptchaParam({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetRecaptchaParamResponse](#getrecaptchaparamresponse)

### relyingparty.getPublicKeys
Get token signing public key.


```js
google_identitytoolkit.relyingparty.getPublicKeys({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [IdentitytoolkitRelyingpartyGetPublicKeysResponse](#identitytoolkitrelyingpartygetpublickeysresponse)

### relyingparty.resetPassword
Reset password for a user.


```js
google_identitytoolkit.relyingparty.resetPassword({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyResetPasswordRequest](#identitytoolkitrelyingpartyresetpasswordrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ResetPasswordResponse](#resetpasswordresponse)

### relyingparty.sendVerificationCode
Send SMS verification code.


```js
google_identitytoolkit.relyingparty.sendVerificationCode({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartySendVerificationCodeRequest](#identitytoolkitrelyingpartysendverificationcoderequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [IdentitytoolkitRelyingpartySendVerificationCodeResponse](#identitytoolkitrelyingpartysendverificationcoderesponse)

### relyingparty.setAccountInfo
Set account info for a user.


```js
google_identitytoolkit.relyingparty.setAccountInfo({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartySetAccountInfoRequest](#identitytoolkitrelyingpartysetaccountinforequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SetAccountInfoResponse](#setaccountinforesponse)

### relyingparty.setProjectConfig
Set project configuration.


```js
google_identitytoolkit.relyingparty.setProjectConfig({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartySetProjectConfigRequest](#identitytoolkitrelyingpartysetprojectconfigrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [IdentitytoolkitRelyingpartySetProjectConfigResponse](#identitytoolkitrelyingpartysetprojectconfigresponse)

### relyingparty.signOutUser
Sign out user.


```js
google_identitytoolkit.relyingparty.signOutUser({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartySignOutUserRequest](#identitytoolkitrelyingpartysignoutuserrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [IdentitytoolkitRelyingpartySignOutUserResponse](#identitytoolkitrelyingpartysignoutuserresponse)

### relyingparty.signupNewUser
Signup new user.


```js
google_identitytoolkit.relyingparty.signupNewUser({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartySignupNewUserRequest](#identitytoolkitrelyingpartysignupnewuserrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SignupNewUserResponse](#signupnewuserresponse)

### relyingparty.uploadAccount
Batch upload existing user accounts.


```js
google_identitytoolkit.relyingparty.uploadAccount({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyUploadAccountRequest](#identitytoolkitrelyingpartyuploadaccountrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UploadAccountResponse](#uploadaccountresponse)

### relyingparty.verifyAssertion
Verifies the assertion returned by the IdP.


```js
google_identitytoolkit.relyingparty.verifyAssertion({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyVerifyAssertionRequest](#identitytoolkitrelyingpartyverifyassertionrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [VerifyAssertionResponse](#verifyassertionresponse)

### relyingparty.verifyCustomToken
Verifies the developer asserted ID token.


```js
google_identitytoolkit.relyingparty.verifyCustomToken({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyVerifyCustomTokenRequest](#identitytoolkitrelyingpartyverifycustomtokenrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [VerifyCustomTokenResponse](#verifycustomtokenresponse)

### relyingparty.verifyPassword
Verifies the user entered password.


```js
google_identitytoolkit.relyingparty.verifyPassword({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyVerifyPasswordRequest](#identitytoolkitrelyingpartyverifypasswordrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [VerifyPasswordResponse](#verifypasswordresponse)

### relyingparty.verifyPhoneNumber
Verifies ownership of a phone number and creates/updates the user account accordingly.


```js
google_identitytoolkit.relyingparty.verifyPhoneNumber({}, context)
```

#### Input
* input `object`
  * body [IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest](#identitytoolkitrelyingpartyverifyphonenumberrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse](#identitytoolkitrelyingpartyverifyphonenumberresponse)



## Definitions

### CreateAuthUriResponse
* CreateAuthUriResponse `object`: Response of creating the IDP authentication URL.
  * allProviders `array`: all providers the user has once used to do federated login
    * items `string`
  * authUri `string`: The URI used by the IDP to authenticate the user.
  * captchaRequired `boolean`: True if captcha is required.
  * forExistingProvider `boolean`: True if the authUri is for user's existing provider.
  * kind `string`: The fixed string identitytoolkit#CreateAuthUriResponse".
  * providerId `string`: The provider ID of the auth URI.
  * registered `boolean`: Whether the user is registered if the identifier is an email.
  * sessionId `string`: Session ID which should be passed in the following verifyAssertion request.
  * signinMethods `array`: All sign-in methods this user has used.
    * items `string`

### DeleteAccountResponse
* DeleteAccountResponse `object`: Respone of deleting account.
  * kind `string`: The fixed string "identitytoolkit#DeleteAccountResponse".

### DownloadAccountResponse
* DownloadAccountResponse `object`: Response of downloading accounts in batch.
  * kind `string`: The fixed string "identitytoolkit#DownloadAccountResponse".
  * nextPageToken `string`: The next page token. To be used in a subsequent request to return the next page of results.
  * users `array`: The user accounts data.
    * items [UserInfo](#userinfo)

### EmailLinkSigninResponse
* EmailLinkSigninResponse `object`: Response of email signIn.
  * email `string`: The user's email.
  * expiresIn `string`: Expiration time of STS id token in seconds.
  * idToken `string`: The STS id token to login the newly signed in user.
  * isNewUser `boolean`: Whether the user is new.
  * kind `string`: The fixed string "identitytoolkit#EmailLinkSigninResponse".
  * localId `string`: The RP local ID of the user.
  * refreshToken `string`: The refresh token for the signed in user.

### EmailTemplate
* EmailTemplate `object`: Template for an email template.
  * body `string`: Email body.
  * format `string`: Email body format.
  * from `string`: From address of the email.
  * fromDisplayName `string`: From display name.
  * replyTo `string`: Reply-to address.
  * subject `string`: Subject of the email.

### GetAccountInfoResponse
* GetAccountInfoResponse `object`: Response of getting account information.
  * kind `string`: The fixed string "identitytoolkit#GetAccountInfoResponse".
  * users `array`: The info of the users.
    * items [UserInfo](#userinfo)

### GetOobConfirmationCodeResponse
* GetOobConfirmationCodeResponse `object`: Response of getting a code for user confirmation (reset password, change email etc.).
  * email `string`: The email address that the email is sent to.
  * kind `string`: The fixed string "identitytoolkit#GetOobConfirmationCodeResponse".
  * oobCode `string`: The code to be send to the user.

### GetRecaptchaParamResponse
* GetRecaptchaParamResponse `object`: Response of getting recaptcha param.
  * kind `string`: The fixed string "identitytoolkit#GetRecaptchaParamResponse".
  * recaptchaSiteKey `string`: Site key registered at recaptcha.
  * recaptchaStoken `string`: The stoken field for the recaptcha widget, used to request captcha challenge.

### IdentitytoolkitRelyingpartyCreateAuthUriRequest
* IdentitytoolkitRelyingpartyCreateAuthUriRequest `object`: Request to get the IDP authentication URL.
  * appId `string`: The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS.
  * authFlowType `string`: Explicitly specify the auth flow type. Currently only support "CODE_FLOW" type. The field is only used for Google provider.
  * clientId `string`: The relying party OAuth client ID.
  * context `string`: The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
  * continueUri `string`: The URI to which the IDP redirects the user after the federated login flow.
  * customParameter `object`: The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token.
  * hostedDomain `string`: The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts.
  * identifier `string`: The email or federated ID of the user.
  * oauthConsumerKey `string`: The developer's consumer key for OpenId OAuth Extension
  * oauthScope `string`: Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant
  * openidRealm `string`: Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set.
  * otaApp `string`: The native app package for OTA installation.
  * providerId `string`: The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
  * sessionId `string`: The session_id passed by client.

### IdentitytoolkitRelyingpartyDeleteAccountRequest
* IdentitytoolkitRelyingpartyDeleteAccountRequest `object`: Request to delete account.
  * delegatedProjectNumber `string`: GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
  * idToken `string`: The GITKit token or STS id token of the authenticated user.
  * localId `string`: The local ID of the user.

### IdentitytoolkitRelyingpartyDownloadAccountRequest
* IdentitytoolkitRelyingpartyDownloadAccountRequest `object`: Request to download user account in batch.
  * delegatedProjectNumber `string`: GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
  * maxResults `integer`: The max number of results to return in the response.
  * nextPageToken `string`: The token for the next page. This should be taken from the previous response.
  * targetProjectId `string`: Specify which project (field value is actually project id) to operate. Only used when provided credential.

### IdentitytoolkitRelyingpartyEmailLinkSigninRequest
* IdentitytoolkitRelyingpartyEmailLinkSigninRequest `object`: Request to sign in with email.
  * email `string`: The email address of the user.
  * idToken `string`: Token for linking flow.
  * oobCode `string`: The confirmation code.

### IdentitytoolkitRelyingpartyGetAccountInfoRequest
* IdentitytoolkitRelyingpartyGetAccountInfoRequest `object`: Request to get the account information.
  * delegatedProjectNumber `string`: GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
  * email `array`: The list of emails of the users to inquiry.
    * items `string`
  * idToken `string`: The GITKit token of the authenticated user.
  * localId `array`: The list of local ID's of the users to inquiry.
    * items `string`
  * phoneNumber `array`: Privileged caller can query users by specified phone number.
    * items `string`

### IdentitytoolkitRelyingpartyGetProjectConfigResponse
* IdentitytoolkitRelyingpartyGetProjectConfigResponse `object`: Response of getting the project configuration.
  * allowPasswordUser `boolean`: Whether to allow password user sign in or sign up.
  * apiKey `string`: Browser API key, needed when making http request to Apiary.
  * authorizedDomains `array`: Authorized domains.
    * items `string`
  * changeEmailTemplate [EmailTemplate](#emailtemplate)
  * dynamicLinksDomain `string`
  * enableAnonymousUser `boolean`: Whether anonymous user is enabled.
  * idpConfig `array`: OAuth2 provider configuration.
    * items [IdpConfig](#idpconfig)
  * legacyResetPasswordTemplate [EmailTemplate](#emailtemplate)
  * projectId `string`: Project ID of the relying party.
  * resetPasswordTemplate [EmailTemplate](#emailtemplate)
  * useEmailSending `boolean`: Whether to use email sending provided by Firebear.
  * verifyEmailTemplate [EmailTemplate](#emailtemplate)

### IdentitytoolkitRelyingpartyGetPublicKeysResponse
* IdentitytoolkitRelyingpartyGetPublicKeysResponse `object`: Respone of getting public keys.

### IdentitytoolkitRelyingpartyResetPasswordRequest
* IdentitytoolkitRelyingpartyResetPasswordRequest `object`: Request to reset the password.
  * email `string`: The email address of the user.
  * newPassword `string`: The new password inputted by the user.
  * oldPassword `string`: The old password inputted by the user.
  * oobCode `string`: The confirmation code.

### IdentitytoolkitRelyingpartySendVerificationCodeRequest
* IdentitytoolkitRelyingpartySendVerificationCodeRequest `object`: Request for Identitytoolkit-SendVerificationCode
  * iosReceipt `string`: Receipt of successful app token validation with APNS.
  * iosSecret `string`: Secret delivered to iOS app via APNS.
  * phoneNumber `string`: The phone number to send the verification code to in E.164 format.
  * recaptchaToken `string`: Recaptcha solution.

### IdentitytoolkitRelyingpartySendVerificationCodeResponse
* IdentitytoolkitRelyingpartySendVerificationCodeResponse `object`: Response for Identitytoolkit-SendVerificationCode
  * sessionInfo `string`: Encrypted session information

### IdentitytoolkitRelyingpartySetAccountInfoRequest
* IdentitytoolkitRelyingpartySetAccountInfoRequest `object`: Request to set the account information.
  * captchaChallenge `string`: The captcha challenge.
  * captchaResponse `string`: Response to the captcha.
  * createdAt `string`: The timestamp when the account is created.
  * customAttributes `string`: The custom attributes to be set in the user's id token.
  * delegatedProjectNumber `string`: GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
  * deleteAttribute `array`: The attributes users request to delete.
    * items `string`
  * deleteProvider `array`: The IDPs the user request to delete.
    * items `string`
  * disableUser `boolean`: Whether to disable the user.
  * displayName `string`: The name of the user.
  * email `string`: The email of the user.
  * emailVerified `boolean`: Mark the email as verified or not.
  * idToken `string`: The GITKit token of the authenticated user.
  * instanceId `string`: Instance id token of the app.
  * lastLoginAt `string`: Last login timestamp.
  * localId `string`: The local ID of the user.
  * oobCode `string`: The out-of-band code of the change email request.
  * password `string`: The new password of the user.
  * phoneNumber `string`: Privileged caller can update user with specified phone number.
  * photoUrl `string`: The photo url of the user.
  * provider `array`: The associated IDPs of the user.
    * items `string`
  * returnSecureToken `boolean`: Whether return sts id token and refresh token instead of gitkit token.
  * upgradeToFederatedLogin `boolean`: Mark the user to upgrade to federated login.
  * validSince `string`: Timestamp in seconds for valid login token.

### IdentitytoolkitRelyingpartySetProjectConfigRequest
* IdentitytoolkitRelyingpartySetProjectConfigRequest `object`: Request to set the project configuration.
  * allowPasswordUser `boolean`: Whether to allow password user sign in or sign up.
  * apiKey `string`: Browser API key, needed when making http request to Apiary.
  * authorizedDomains `array`: Authorized domains for widget redirect.
    * items `string`
  * changeEmailTemplate [EmailTemplate](#emailtemplate)
  * delegatedProjectNumber `string`: GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
  * enableAnonymousUser `boolean`: Whether to enable anonymous user.
  * idpConfig `array`: Oauth2 provider configuration.
    * items [IdpConfig](#idpconfig)
  * legacyResetPasswordTemplate [EmailTemplate](#emailtemplate)
  * resetPasswordTemplate [EmailTemplate](#emailtemplate)
  * useEmailSending `boolean`: Whether to use email sending provided by Firebear.
  * verifyEmailTemplate [EmailTemplate](#emailtemplate)

### IdentitytoolkitRelyingpartySetProjectConfigResponse
* IdentitytoolkitRelyingpartySetProjectConfigResponse `object`: Response of setting the project configuration.
  * projectId `string`: Project ID of the relying party.

### IdentitytoolkitRelyingpartySignOutUserRequest
* IdentitytoolkitRelyingpartySignOutUserRequest `object`: Request to sign out user.
  * instanceId `string`: Instance id token of the app.
  * localId `string`: The local ID of the user.

### IdentitytoolkitRelyingpartySignOutUserResponse
* IdentitytoolkitRelyingpartySignOutUserResponse `object`: Response of signing out user.
  * localId `string`: The local ID of the user.

### IdentitytoolkitRelyingpartySignupNewUserRequest
* IdentitytoolkitRelyingpartySignupNewUserRequest `object`: Request to signup new user, create anonymous user or anonymous user reauth.
  * captchaChallenge `string`: The captcha challenge.
  * captchaResponse `string`: Response to the captcha.
  * disabled `boolean`: Whether to disable the user. Only can be used by service account.
  * displayName `string`: The name of the user.
  * email `string`: The email of the user.
  * emailVerified `boolean`: Mark the email as verified or not. Only can be used by service account.
  * idToken `string`: The GITKit token of the authenticated user.
  * instanceId `string`: Instance id token of the app.
  * localId `string`: Privileged caller can create user with specified user id.
  * password `string`: The new password of the user.
  * phoneNumber `string`: Privileged caller can create user with specified phone number.
  * photoUrl `string`: The photo url of the user.

### IdentitytoolkitRelyingpartyUploadAccountRequest
* IdentitytoolkitRelyingpartyUploadAccountRequest `object`: Request to upload user account in batch.
  * allowOverwrite `boolean`: Whether allow overwrite existing account when user local_id exists.
  * blockSize `integer`
  * cpuMemCost `integer`: The following 4 fields are for standard scrypt algorithm.
  * delegatedProjectNumber `string`: GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
  * dkLen `integer`
  * hashAlgorithm `string`: The password hash algorithm.
  * memoryCost `integer`: Memory cost for hash calculation. Used by scrypt similar algorithms.
  * parallelization `integer`
  * rounds `integer`: Rounds for hash calculation. Used by scrypt and similar algorithms.
  * saltSeparator `string`: The salt separator.
  * sanityCheck `boolean`: If true, backend will do sanity check(including duplicate email and federated id) when uploading account.
  * signerKey `string`: The key for to hash the password.
  * targetProjectId `string`: Specify which project (field value is actually project id) to operate. Only used when provided credential.
  * users `array`: The account info to be stored.
    * items [UserInfo](#userinfo)

### IdentitytoolkitRelyingpartyVerifyAssertionRequest
* IdentitytoolkitRelyingpartyVerifyAssertionRequest `object`: Request to verify the IDP assertion.
  * autoCreate `boolean`: When it's true, automatically creates a new account if the user doesn't exist. When it's false, allows existing user to sign in normally and throws exception if the user doesn't exist.
  * delegatedProjectNumber `string`: GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
  * idToken `string`: The GITKit token of the authenticated user.
  * instanceId `string`: Instance id token of the app.
  * pendingIdToken `string`: The GITKit token for the non-trusted IDP pending to be confirmed by the user.
  * postBody `string`: The post body if the request is a HTTP POST.
  * requestUri `string`: The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP.
  * returnIdpCredential `boolean`: Whether return 200 and IDP credential rather than throw exception when federated id is already linked.
  * returnRefreshToken `boolean`: Whether to return refresh tokens.
  * returnSecureToken `boolean`: Whether return sts id token and refresh token instead of gitkit token.
  * sessionId `string`: Session ID, which should match the one in previous createAuthUri request.

### IdentitytoolkitRelyingpartyVerifyCustomTokenRequest
* IdentitytoolkitRelyingpartyVerifyCustomTokenRequest `object`: Request to verify a custom token
  * delegatedProjectNumber `string`: GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
  * instanceId `string`: Instance id token of the app.
  * returnSecureToken `boolean`: Whether return sts id token and refresh token instead of gitkit token.
  * token `string`: The custom token to verify

### IdentitytoolkitRelyingpartyVerifyPasswordRequest
* IdentitytoolkitRelyingpartyVerifyPasswordRequest `object`: Request to verify the password.
  * captchaChallenge `string`: The captcha challenge.
  * captchaResponse `string`: Response to the captcha.
  * delegatedProjectNumber `string`: GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
  * email `string`: The email of the user.
  * idToken `string`: The GITKit token of the authenticated user.
  * instanceId `string`: Instance id token of the app.
  * password `string`: The password inputed by the user.
  * pendingIdToken `string`: The GITKit token for the non-trusted IDP, which is to be confirmed by the user.
  * returnSecureToken `boolean`: Whether return sts id token and refresh token instead of gitkit token.

### IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest
* IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest `object`: Request for Identitytoolkit-VerifyPhoneNumber
  * code `string`
  * idToken `string`
  * operation `string`
  * phoneNumber `string`
  * sessionInfo `string`: The session info previously returned by IdentityToolkit-SendVerificationCode.
  * temporaryProof `string`
  * verificationProof `string`

### IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
* IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse `object`: Response for Identitytoolkit-VerifyPhoneNumber
  * expiresIn `string`
  * idToken `string`
  * isNewUser `boolean`
  * localId `string`
  * phoneNumber `string`
  * refreshToken `string`
  * temporaryProof `string`
  * temporaryProofExpiresIn `string`
  * verificationProof `string`
  * verificationProofExpiresIn `string`

### IdpConfig
* IdpConfig `object`: Template for a single idp configuration.
  * clientId `string`: OAuth2 client ID.
  * enabled `boolean`: Whether this IDP is enabled.
  * experimentPercent `integer`: Percent of users who will be prompted/redirected federated login for this IDP.
  * provider `string`: OAuth2 provider.
  * secret `string`: OAuth2 client secret.
  * whitelistedAudiences `array`: Whitelisted client IDs for audience check.
    * items `string`

### Relyingparty
* Relyingparty `object`: Request of getting a code for user confirmation (reset password, change email etc.)
  * androidInstallApp `boolean`: whether or not to install the android app on the device where the link is opened
  * androidMinimumVersion `string`: minimum version of the app. if the version on the device is lower than this version then the user is taken to the play store to upgrade the app
  * androidPackageName `string`: android package name of the android app to handle the action code
  * canHandleCodeInApp `boolean`: whether or not the app can handle the oob code without first going to web
  * captchaResp `string`: The recaptcha response from the user.
  * challenge `string`: The recaptcha challenge presented to the user.
  * continueUrl `string`: The url to continue to the Gitkit app
  * email `string`: The email of the user.
  * iOSAppStoreId `string`: iOS app store id to download the app if it's not already installed
  * iOSBundleId `string`: the iOS bundle id of iOS app to handle the action code
  * idToken `string`: The user's Gitkit login token for email change.
  * kind `string`: The fixed string "identitytoolkit#relyingparty".
  * newEmail `string`: The new email if the code is for email change.
  * requestType `string`: The request type.
  * userIp `string`: The IP address of the user.

### ResetPasswordResponse
* ResetPasswordResponse `object`: Response of resetting the password.
  * email `string`: The user's email. If the out-of-band code is for email recovery, the user's original email.
  * kind `string`: The fixed string "identitytoolkit#ResetPasswordResponse".
  * newEmail `string`: If the out-of-band code is for email recovery, the user's new email.
  * requestType `string`: The request type.

### SetAccountInfoResponse
* SetAccountInfoResponse `object`: Respone of setting the account information.
  * displayName `string`: The name of the user.
  * email `string`: The email of the user.
  * emailVerified `boolean`: If email has been verified.
  * expiresIn `string`: If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
  * idToken `string`: The Gitkit id token to login the newly sign up user.
  * kind `string`: The fixed string "identitytoolkit#SetAccountInfoResponse".
  * localId `string`: The local ID of the user.
  * newEmail `string`: The new email the user attempts to change to.
  * passwordHash `string`: The user's hashed password.
  * photoUrl `string`: The photo url of the user.
  * providerUserInfo `array`: The user's profiles at the associated IdPs.
    * items `object`
      * displayName `string`: The user's display name at the IDP.
      * federatedId `string`: User's identifier at IDP.
      * photoUrl `string`: The user's photo url at the IDP.
      * providerId `string`: The IdP ID. For whitelisted IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
  * refreshToken `string`: If idToken is STS id token, then this field will be refresh token.

### SignupNewUserResponse
* SignupNewUserResponse `object`: Response of signing up new user, creating anonymous user or anonymous user reauth.
  * displayName `string`: The name of the user.
  * email `string`: The email of the user.
  * expiresIn `string`: If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
  * idToken `string`: The Gitkit id token to login the newly sign up user.
  * kind `string`: The fixed string "identitytoolkit#SignupNewUserResponse".
  * localId `string`: The RP local ID of the user.
  * refreshToken `string`: If idToken is STS id token, then this field will be refresh token.

### UploadAccountResponse
* UploadAccountResponse `object`: Respone of uploading accounts in batch.
  * error `array`: The error encountered while processing the account info.
    * items `object`
      * index `integer`: The index of the malformed account, starting from 0.
      * message `string`: Detailed error message for the account info.
  * kind `string`: The fixed string "identitytoolkit#UploadAccountResponse".

### UserInfo
* UserInfo `object`: Template for an individual account info.
  * createdAt `string`: User creation timestamp.
  * customAttributes `string`: The custom attributes to be set in the user's id token.
  * customAuth `boolean`: Whether the user is authenticated by the developer.
  * disabled `boolean`: Whether the user is disabled.
  * displayName `string`: The name of the user.
  * email `string`: The email of the user.
  * emailVerified `boolean`: Whether the email has been verified.
  * lastLoginAt `string`: last login timestamp.
  * localId `string`: The local ID of the user.
  * passwordHash `string`: The user's hashed password.
  * passwordUpdatedAt `number`: The timestamp when the password was last updated.
  * phoneNumber `string`: User's phone number.
  * photoUrl `string`: The URL of the user profile photo.
  * providerUserInfo `array`: The IDP of the user.
    * items `object`
      * displayName `string`: The user's display name at the IDP.
      * email `string`: User's email at IDP.
      * federatedId `string`: User's identifier at IDP.
      * phoneNumber `string`: User's phone number.
      * photoUrl `string`: The user's photo url at the IDP.
      * providerId `string`: The IdP ID. For white listed IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
      * rawId `string`: User's raw identifier directly returned from IDP.
      * screenName `string`: User's screen name at Twitter or login name at Github.
  * rawPassword `string`: The user's plain text password.
  * salt `string`: The user's password salt.
  * screenName `string`: User's screen name at Twitter or login name at Github.
  * validSince `string`: Timestamp in seconds for valid login token.
  * version `integer`: Version of the user's password.

### VerifyAssertionResponse
* VerifyAssertionResponse `object`: Response of verifying the IDP assertion.
  * action `string`: The action code.
  * appInstallationUrl `string`: URL for OTA app installation.
  * appScheme `string`: The custom scheme used by mobile app.
  * context `string`: The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
  * dateOfBirth `string`: The birth date of the IdP account.
  * displayName `string`: The display name of the user.
  * email `string`: The email returned by the IdP. NOTE: The federated login user may not own the email.
  * emailRecycled `boolean`: It's true if the email is recycled.
  * emailVerified `boolean`: The value is true if the IDP is also the email provider. It means the user owns the email.
  * errorMessage `string`: Client error code.
  * expiresIn `string`: If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
  * federatedId `string`: The unique ID identifies the IdP account.
  * firstName `string`: The first name of the user.
  * fullName `string`: The full name of the user.
  * idToken `string`: The ID token.
  * inputEmail `string`: It's the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email.
  * isNewUser `boolean`: True if it's a new user sign-in, false if it's a returning user.
  * kind `string`: The fixed string "identitytoolkit#VerifyAssertionResponse".
  * language `string`: The language preference of the user.
  * lastName `string`: The last name of the user.
  * localId `string`: The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
  * needConfirmation `boolean`: Whether the assertion is from a non-trusted IDP and need account linking confirmation.
  * needEmail `boolean`: Whether need client to supply email to complete the federated login flow.
  * nickName `string`: The nick name of the user.
  * oauthAccessToken `string`: The OAuth2 access token.
  * oauthAuthorizationCode `string`: The OAuth2 authorization code.
  * oauthExpireIn `integer`: The lifetime in seconds of the OAuth2 access token.
  * oauthIdToken `string`: The OIDC id token.
  * oauthRequestToken `string`: The user approved request token for the OpenID OAuth extension.
  * oauthScope `string`: The scope for the OpenID OAuth extension.
  * oauthTokenSecret `string`: The OAuth1 access token secret.
  * originalEmail `string`: The original email stored in the mapping storage. It's returned when the federated ID is associated to a different email.
  * photoUrl `string`: The URI of the public accessible profiel picture.
  * providerId `string`: The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the "providerId" param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the "identifier" param is federated ID in the createAuthUri request. The domain part of the federated ID is returned.
  * rawUserInfo `string`: Raw IDP-returned user info.
  * refreshToken `string`: If idToken is STS id token, then this field will be refresh token.
  * screenName `string`: The screen_name of a Twitter user or the login name at Github.
  * timeZone `string`: The timezone of the user.
  * verifiedProvider `array`: When action is 'map', contains the idps which can be used for confirmation.
    * items `string`

### VerifyCustomTokenResponse
* VerifyCustomTokenResponse `object`: Response from verifying a custom token
  * expiresIn `string`: If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
  * idToken `string`: The GITKit token for authenticated user.
  * isNewUser `boolean`: True if it's a new user sign-in, false if it's a returning user.
  * kind `string`: The fixed string "identitytoolkit#VerifyCustomTokenResponse".
  * refreshToken `string`: If idToken is STS id token, then this field will be refresh token.

### VerifyPasswordResponse
* VerifyPasswordResponse `object`: Request of verifying the password.
  * displayName `string`: The name of the user.
  * email `string`: The email returned by the IdP. NOTE: The federated login user may not own the email.
  * expiresIn `string`: If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
  * idToken `string`: The GITKit token for authenticated user.
  * kind `string`: The fixed string "identitytoolkit#VerifyPasswordResponse".
  * localId `string`: The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
  * oauthAccessToken `string`: The OAuth2 access token.
  * oauthAuthorizationCode `string`: The OAuth2 authorization code.
  * oauthExpireIn `integer`: The lifetime in seconds of the OAuth2 access token.
  * photoUrl `string`: The URI of the user's photo at IdP
  * refreshToken `string`: If idToken is STS id token, then this field will be refresh token.
  * registered `boolean`: Whether the email is registered.


