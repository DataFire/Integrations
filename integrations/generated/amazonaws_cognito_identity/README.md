# @datafire/amazonaws_cognito_identity

Client library for Amazon Cognito Identity

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cognito_identity
```

```js
let datafire = require('datafire');
let amazonaws_cognito_identity = require('@datafire/amazonaws_cognito_identity').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_cognito_identity.CreateIdentityPool({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Cognito</fullname> <p>Amazon Cognito is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. Amazon Cognito uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.</p> <p>Using Amazon Cognito, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon), and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS credentials.</p> <p>To provide end-user credentials, first make an unsigned call to <a>GetId</a>. If the end user is authenticated with one of the supported identity providers, set the <code>Logins</code> map with the identity provider token. <code>GetId</code> returns a unique identifier for the user.</p> <p>Next, make an unsigned call to <a>GetCredentialsForIdentity</a>. This call expects the same <code>Logins</code> map as the <code>GetId</code> call, as well as the <code>IdentityID</code> originally returned by <code>GetId</code>. Assuming your identity pool has been configured via the <a>SetIdentityPoolRoles</a> operation, <code>GetCredentialsForIdentity</code> will return AWS credentials for your use. If your pool has not been configured with <code>SetIdentityPoolRoles</code>, or if you want to follow legacy flow, make an unsigned call to <a>GetOpenIdToken</a>, which returns the OpenID token necessary to call STS and retrieve AWS credentials. This call expects the same <code>Logins</code> map as the <code>GetId</code> call, as well as the <code>IdentityID</code> originally returned by <code>GetId</code>. The token returned by <code>GetOpenIdToken</code> can be passed to the STS operation <a href="http://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html">AssumeRoleWithWebIdentity</a> to retrieve AWS credentials.</p> <p>If you want to use Amazon Cognito in an Android, iOS, or Unity application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/index.html">AWS Mobile SDK Developer Guide</a>.</p>

## Actions
### CreateIdentityPool



```js
amazonaws_cognito_identity.CreateIdentityPool({
  "IdentityPoolName": "",
  "AllowUnauthenticatedIdentities": true
}, context)
```

#### Parameters
* AllowUnauthenticatedIdentities (boolean) **required**
* CognitoIdentityProviders (array)
* DeveloperProviderName (string)
* IdentityPoolName (string) **required**
* OpenIdConnectProviderARNs (array)
* SamlProviderARNs (array)
* SupportedLoginProviders (array)

### DeleteIdentities



```js
amazonaws_cognito_identity.DeleteIdentities({
  "IdentityIdsToDelete": []
}, context)
```

#### Parameters
* IdentityIdsToDelete (array) **required**

### DeleteIdentityPool



```js
amazonaws_cognito_identity.DeleteIdentityPool({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**

### DescribeIdentity



```js
amazonaws_cognito_identity.DescribeIdentity({
  "IdentityId": ""
}, context)
```

#### Parameters
* IdentityId (string) **required**

### DescribeIdentityPool



```js
amazonaws_cognito_identity.DescribeIdentityPool({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**

### GetCredentialsForIdentity



```js
amazonaws_cognito_identity.GetCredentialsForIdentity({
  "IdentityId": ""
}, context)
```

#### Parameters
* CustomRoleArn (string)
* IdentityId (string) **required**
* Logins (array)

### GetId



```js
amazonaws_cognito_identity.GetId({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* AccountId (string)
* IdentityPoolId (string) **required**
* Logins (array)

### GetIdentityPoolRoles



```js
amazonaws_cognito_identity.GetIdentityPoolRoles({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**

### GetOpenIdToken



```js
amazonaws_cognito_identity.GetOpenIdToken({
  "IdentityId": ""
}, context)
```

#### Parameters
* IdentityId (string) **required**
* Logins (array)

### GetOpenIdTokenForDeveloperIdentity



```js
amazonaws_cognito_identity.GetOpenIdTokenForDeveloperIdentity({
  "IdentityPoolId": "",
  "Logins": []
}, context)
```

#### Parameters
* IdentityId (string)
* IdentityPoolId (string) **required**
* Logins (array) **required**
* TokenDuration (integer)

### ListIdentities



```js
amazonaws_cognito_identity.ListIdentities({
  "IdentityPoolId": "",
  "MaxResults": 0
}, context)
```

#### Parameters
* HideDisabled (boolean)
* IdentityPoolId (string) **required**
* MaxResults (integer) **required**
* NextToken (string)

### ListIdentityPools



```js
amazonaws_cognito_identity.ListIdentityPools({
  "MaxResults": 0
}, context)
```

#### Parameters
* MaxResults (integer) **required**
* NextToken (string)

### LookupDeveloperIdentity



```js
amazonaws_cognito_identity.LookupDeveloperIdentity({
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* DeveloperUserIdentifier (string)
* IdentityId (string)
* IdentityPoolId (string) **required**
* MaxResults (integer)
* NextToken (string)

### MergeDeveloperIdentities



```js
amazonaws_cognito_identity.MergeDeveloperIdentities({
  "SourceUserIdentifier": "",
  "DestinationUserIdentifier": "",
  "DeveloperProviderName": "",
  "IdentityPoolId": ""
}, context)
```

#### Parameters
* DestinationUserIdentifier (string) **required**
* DeveloperProviderName (string) **required**
* IdentityPoolId (string) **required**
* SourceUserIdentifier (string) **required**

### SetIdentityPoolRoles



```js
amazonaws_cognito_identity.SetIdentityPoolRoles({
  "IdentityPoolId": "",
  "Roles": []
}, context)
```

#### Parameters
* IdentityPoolId (string) **required**
* RoleMappings (array)
* Roles (array) **required**

### UnlinkDeveloperIdentity



```js
amazonaws_cognito_identity.UnlinkDeveloperIdentity({
  "IdentityId": "",
  "IdentityPoolId": "",
  "DeveloperProviderName": "",
  "DeveloperUserIdentifier": ""
}, context)
```

#### Parameters
* DeveloperProviderName (string) **required**
* DeveloperUserIdentifier (string) **required**
* IdentityId (string) **required**
* IdentityPoolId (string) **required**

### UnlinkIdentity



```js
amazonaws_cognito_identity.UnlinkIdentity({
  "IdentityId": "",
  "Logins": [],
  "LoginsToRemove": []
}, context)
```

#### Parameters
* IdentityId (string) **required**
* Logins (array) **required**
* LoginsToRemove (array) **required**

### UpdateIdentityPool



```js
amazonaws_cognito_identity.UpdateIdentityPool({
  "IdentityPoolId": "",
  "IdentityPoolName": "",
  "AllowUnauthenticatedIdentities": true
}, context)
```

#### Parameters
* AllowUnauthenticatedIdentities (boolean) **required**
* CognitoIdentityProviders (array)
* DeveloperProviderName (string)
* IdentityPoolId (string) **required**
* IdentityPoolName (string) **required**
* OpenIdConnectProviderARNs (array)
* SamlProviderARNs (array)
* SupportedLoginProviders (array)

