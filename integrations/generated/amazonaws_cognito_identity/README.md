# @datafire/amazonaws_cognito_identity

Client library for Amazon Cognito Identity

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cognito_identity
```

```js
let datafire = require('datafire');
let amazonaws_cognito_identity = require('@datafire/amazonaws_cognito_identity').actions;
let context = new datafire.Context();

amazonaws_cognito_identity.CreateIdentityPool({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Cognito</fullname> <p>Amazon Cognito is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. Amazon Cognito uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.</p> <p>Using Amazon Cognito, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon), and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS credentials.</p> <p>To provide end-user credentials, first make an unsigned call to <a>GetId</a>. If the end user is authenticated with one of the supported identity providers, set the <code>Logins</code> map with the identity provider token. <code>GetId</code> returns a unique identifier for the user.</p> <p>Next, make an unsigned call to <a>GetCredentialsForIdentity</a>. This call expects the same <code>Logins</code> map as the <code>GetId</code> call, as well as the <code>IdentityID</code> originally returned by <code>GetId</code>. Assuming your identity pool has been configured via the <a>SetIdentityPoolRoles</a> operation, <code>GetCredentialsForIdentity</code> will return AWS credentials for your use. If your pool has not been configured with <code>SetIdentityPoolRoles</code>, or if you want to follow legacy flow, make an unsigned call to <a>GetOpenIdToken</a>, which returns the OpenID token necessary to call STS and retrieve AWS credentials. This call expects the same <code>Logins</code> map as the <code>GetId</code> call, as well as the <code>IdentityID</code> originally returned by <code>GetId</code>. The token returned by <code>GetOpenIdToken</code> can be passed to the STS operation <a href="http://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html">AssumeRoleWithWebIdentity</a> to retrieve AWS credentials.</p> <p>If you want to use Amazon Cognito in an Android, iOS, or Unity application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/index.html">AWS Mobile SDK Developer Guide</a>.</p>

## Actions
### CreateIdentityPool



```js
amazonaws_cognito_identity.CreateIdentityPool({}, context)
```

#### Parameters

### DeleteIdentities



```js
amazonaws_cognito_identity.DeleteIdentities({}, context)
```

#### Parameters

### DeleteIdentityPool



```js
amazonaws_cognito_identity.DeleteIdentityPool({}, context)
```

#### Parameters

### DescribeIdentity



```js
amazonaws_cognito_identity.DescribeIdentity({}, context)
```

#### Parameters

### DescribeIdentityPool



```js
amazonaws_cognito_identity.DescribeIdentityPool({}, context)
```

#### Parameters

### GetCredentialsForIdentity



```js
amazonaws_cognito_identity.GetCredentialsForIdentity({}, context)
```

#### Parameters

### GetId



```js
amazonaws_cognito_identity.GetId({}, context)
```

#### Parameters

### GetIdentityPoolRoles



```js
amazonaws_cognito_identity.GetIdentityPoolRoles({}, context)
```

#### Parameters

### GetOpenIdToken



```js
amazonaws_cognito_identity.GetOpenIdToken({}, context)
```

#### Parameters

### GetOpenIdTokenForDeveloperIdentity



```js
amazonaws_cognito_identity.GetOpenIdTokenForDeveloperIdentity({}, context)
```

#### Parameters

### ListIdentities



```js
amazonaws_cognito_identity.ListIdentities({}, context)
```

#### Parameters

### ListIdentityPools



```js
amazonaws_cognito_identity.ListIdentityPools({}, context)
```

#### Parameters

### LookupDeveloperIdentity



```js
amazonaws_cognito_identity.LookupDeveloperIdentity({}, context)
```

#### Parameters

### MergeDeveloperIdentities



```js
amazonaws_cognito_identity.MergeDeveloperIdentities({}, context)
```

#### Parameters

### SetIdentityPoolRoles



```js
amazonaws_cognito_identity.SetIdentityPoolRoles({}, context)
```

#### Parameters

### UnlinkDeveloperIdentity



```js
amazonaws_cognito_identity.UnlinkDeveloperIdentity({}, context)
```

#### Parameters

### UnlinkIdentity



```js
amazonaws_cognito_identity.UnlinkIdentity({}, context)
```

#### Parameters

### UpdateIdentityPool



```js
amazonaws_cognito_identity.UpdateIdentityPool({}, context)
```

#### Parameters

