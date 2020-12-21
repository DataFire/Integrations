# @datafire/amazonaws_sso_oidc

Client library for AWS SSO OIDC

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sso_oidc
```
```js
let amazonaws_sso_oidc = require('@datafire/amazonaws_sso_oidc').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS Single Sign-On (SSO) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI or a native application) to register with AWS SSO. The service also enables the client to fetch the user’s access token upon successful authentication and authorization with AWS SSO. This service conforms with the OAuth 2.0 based implementation of the device authorization grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>).</p> <p>For general information about AWS SSO, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is AWS Single Sign-On?</a> in the <i>AWS SSO User Guide</i>.</p> <p>This API reference guide describes the AWS SSO OIDC operations that you can call programatically and includes detailed information on data types and errors.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms such as Java, Ruby, .Net, iOS, and Android. The SDKs provide a convenient way to create programmatic access to AWS SSO and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

## Actions

### RegisterClient



```js
amazonaws_sso_oidc.RegisterClient({
  "clientName": "",
  "clientType": ""
}, context)
```

#### Input
* input `object`
  * clientName **required** `string`: The friendly name of the client.
  * clientType **required** `string`: The type of client. The service supports only <code>public</code> as a client type. Anything other than public will be rejected by the service.
  * scopes `array`: The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.
    * items [Scope](#scope)

#### Output
* output [RegisterClientResponse](#registerclientresponse)

### StartDeviceAuthorization



```js
amazonaws_sso_oidc.StartDeviceAuthorization({
  "clientId": "",
  "clientSecret": "",
  "startUrl": ""
}, context)
```

#### Input
* input `object`
  * clientId **required** `string`: The unique identifier string for the client that is registered with AWS SSO. This value should come from the persisted result of the <a>RegisterClient</a> API operation.
  * clientSecret **required** `string`: A secret string that is generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API operation.
  * startUrl **required** `string`: The URL for the AWS SSO user portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using the User Portal</a> in the <i>AWS Single Sign-On User Guide</i>.

#### Output
* output [StartDeviceAuthorizationResponse](#startdeviceauthorizationresponse)

### CreateToken



```js
amazonaws_sso_oidc.CreateToken({
  "clientId": "",
  "clientSecret": "",
  "grantType": "",
  "deviceCode": ""
}, context)
```

#### Input
* input `object`
  * clientId **required** `string`: The unique identifier string for each client. This value should come from the persisted result of the <a>RegisterClient</a> API.
  * clientSecret **required** `string`: A secret string generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API.
  * code `string`: The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token.
  * deviceCode **required** `string`: Used only when calling this API for the device code grant type. This short-term code is used to identify this authentication attempt. This should come from an in-memory reference to the result of the <a>StartDeviceAuthorization</a> API.
  * grantType **required** `string`: Supports grant types for authorization code, refresh token, and device code request.
  * redirectUri `string`: The location of the application that will receive the authorization code. Users authorize the service to send the request to this location.
  * refreshToken `string`: The token used to obtain an access token in the event that the access token is invalid or expired. This token is not issued by the service.
  * scope `array`: The list of scopes that is defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.
    * items [Scope](#scope)

#### Output
* output [CreateTokenResponse](#createtokenresponse)



## Definitions

### AccessDeniedException


### AccessToken
* AccessToken `string`

### AuthCode
* AuthCode `string`

### AuthorizationPendingException


### ClientId
* ClientId `string`

### ClientName
* ClientName `string`

### ClientSecret
* ClientSecret `string`

### ClientType
* ClientType `string`

### CreateTokenRequest
* CreateTokenRequest `object`
  * clientId **required**
  * clientSecret **required**
  * code
  * deviceCode **required**
  * grantType **required**
  * redirectUri
  * refreshToken
  * scope
    * items [Scope](#scope)

### CreateTokenResponse
* CreateTokenResponse `object`
  * accessToken
  * expiresIn
  * idToken
  * refreshToken
  * tokenType

### DeviceCode
* DeviceCode `string`

### ExpirationInSeconds
* ExpirationInSeconds `integer`

### ExpiredTokenException


### GrantType
* GrantType `string`

### IdToken
* IdToken `string`

### InternalServerException


### IntervalInSeconds
* IntervalInSeconds `integer`

### InvalidClientException


### InvalidClientMetadataException


### InvalidGrantException


### InvalidRequestException


### InvalidScopeException


### LongTimeStampType
* LongTimeStampType `integer`

### RefreshToken
* RefreshToken `string`

### RegisterClientRequest
* RegisterClientRequest `object`
  * clientName **required**
  * clientType **required**
  * scopes
    * items [Scope](#scope)

### RegisterClientResponse
* RegisterClientResponse `object`
  * authorizationEndpoint
  * clientId
  * clientIdIssuedAt
  * clientSecret
  * clientSecretExpiresAt
  * tokenEndpoint

### Scope
* Scope `string`

### Scopes
* Scopes `array`
  * items [Scope](#scope)

### SlowDownException


### StartDeviceAuthorizationRequest
* StartDeviceAuthorizationRequest `object`
  * clientId **required**
  * clientSecret **required**
  * startUrl **required**

### StartDeviceAuthorizationResponse
* StartDeviceAuthorizationResponse `object`
  * deviceCode
  * expiresIn
  * interval
  * userCode
  * verificationUri
  * verificationUriComplete

### TokenType
* TokenType `string`

### URI
* URI `string`

### UnauthorizedClientException


### UnsupportedGrantTypeException


### UserCode
* UserCode `string`


