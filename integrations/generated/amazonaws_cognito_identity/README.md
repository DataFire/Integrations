# @datafire/amazonaws_cognito_identity

Client library for Amazon Cognito Identity

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cognito_identity
```
```js
let amazonaws_cognito_identity = require('@datafire/amazonaws_cognito_identity').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Cognito Federated Identities</fullname> <p>Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. It uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.</p> <p>Using Amazon Cognito Federated Identities, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon Cognito user pool, and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS credentials.</p> <p>For a description of the authentication flow from the Amazon Cognito Developer Guide see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Authentication Flow</a>.</p> <p>For more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito Federated Identities</a>.</p>

## Actions

### CreateIdentityPool



```js
amazonaws_cognito_identity.CreateIdentityPool({
  "IdentityPoolName": null,
  "AllowUnauthenticatedIdentities": null
}, context)
```

#### Input
* input `object`
  * AllowClassicFlow
  * AllowUnauthenticatedIdentities **required**
  * CognitoIdentityProviders
    * items [CognitoIdentityProvider](#cognitoidentityprovider)
  * DeveloperProviderName
  * IdentityPoolName **required**
  * IdentityPoolTags
  * OpenIdConnectProviderARNs
    * items [ARNString](#arnstring)
  * SamlProviderARNs
    * items [ARNString](#arnstring)
  * SupportedLoginProviders

#### Output
* output [IdentityPool](#identitypool)

### DeleteIdentities



```js
amazonaws_cognito_identity.DeleteIdentities({
  "IdentityIdsToDelete": null
}, context)
```

#### Input
* input `object`
  * IdentityIdsToDelete **required**
    * items [IdentityId](#identityid)

#### Output
* output [DeleteIdentitiesResponse](#deleteidentitiesresponse)

### DeleteIdentityPool



```js
amazonaws_cognito_identity.DeleteIdentityPool({
  "IdentityPoolId": null
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required**

#### Output
*Output schema unknown*

### DescribeIdentity



```js
amazonaws_cognito_identity.DescribeIdentity({
  "IdentityId": null
}, context)
```

#### Input
* input `object`
  * IdentityId **required**

#### Output
* output [IdentityDescription](#identitydescription)

### DescribeIdentityPool



```js
amazonaws_cognito_identity.DescribeIdentityPool({
  "IdentityPoolId": null
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required**

#### Output
* output [IdentityPool](#identitypool)

### GetCredentialsForIdentity



```js
amazonaws_cognito_identity.GetCredentialsForIdentity({
  "IdentityId": null
}, context)
```

#### Input
* input `object`
  * CustomRoleArn
  * IdentityId **required**
  * Logins

#### Output
* output [GetCredentialsForIdentityResponse](#getcredentialsforidentityresponse)

### GetId



```js
amazonaws_cognito_identity.GetId({
  "IdentityPoolId": null
}, context)
```

#### Input
* input `object`
  * AccountId
  * IdentityPoolId **required**
  * Logins

#### Output
* output [GetIdResponse](#getidresponse)

### GetIdentityPoolRoles



```js
amazonaws_cognito_identity.GetIdentityPoolRoles({
  "IdentityPoolId": null
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required**

#### Output
* output [GetIdentityPoolRolesResponse](#getidentitypoolrolesresponse)

### GetOpenIdToken



```js
amazonaws_cognito_identity.GetOpenIdToken({
  "IdentityId": null
}, context)
```

#### Input
* input `object`
  * IdentityId **required**
  * Logins

#### Output
* output [GetOpenIdTokenResponse](#getopenidtokenresponse)

### GetOpenIdTokenForDeveloperIdentity



```js
amazonaws_cognito_identity.GetOpenIdTokenForDeveloperIdentity({
  "IdentityPoolId": null,
  "Logins": null
}, context)
```

#### Input
* input `object`
  * IdentityId
  * IdentityPoolId **required**
  * Logins **required**
  * TokenDuration

#### Output
* output [GetOpenIdTokenForDeveloperIdentityResponse](#getopenidtokenfordeveloperidentityresponse)

### ListIdentities



```js
amazonaws_cognito_identity.ListIdentities({
  "IdentityPoolId": null,
  "MaxResults": null
}, context)
```

#### Input
* input `object`
  * HideDisabled
  * IdentityPoolId **required**
  * MaxResults **required**
  * NextToken

#### Output
* output [ListIdentitiesResponse](#listidentitiesresponse)

### ListIdentityPools



```js
amazonaws_cognito_identity.ListIdentityPools({
  "MaxResults": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults **required**
  * NextToken

#### Output
* output [ListIdentityPoolsResponse](#listidentitypoolsresponse)

### ListTagsForResource



```js
amazonaws_cognito_identity.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### LookupDeveloperIdentity



```js
amazonaws_cognito_identity.LookupDeveloperIdentity({
  "IdentityPoolId": null
}, context)
```

#### Input
* input `object`
  * DeveloperUserIdentifier
  * IdentityId
  * IdentityPoolId **required**
  * MaxResults
  * NextToken

#### Output
* output [LookupDeveloperIdentityResponse](#lookupdeveloperidentityresponse)

### MergeDeveloperIdentities



```js
amazonaws_cognito_identity.MergeDeveloperIdentities({
  "SourceUserIdentifier": null,
  "DestinationUserIdentifier": null,
  "DeveloperProviderName": null,
  "IdentityPoolId": null
}, context)
```

#### Input
* input `object`
  * DestinationUserIdentifier **required**
  * DeveloperProviderName **required**
  * IdentityPoolId **required**
  * SourceUserIdentifier **required**

#### Output
* output [MergeDeveloperIdentitiesResponse](#mergedeveloperidentitiesresponse)

### SetIdentityPoolRoles



```js
amazonaws_cognito_identity.SetIdentityPoolRoles({
  "IdentityPoolId": null,
  "Roles": null
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required**
  * RoleMappings
  * Roles **required**

#### Output
*Output schema unknown*

### TagResource



```js
amazonaws_cognito_identity.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UnlinkDeveloperIdentity



```js
amazonaws_cognito_identity.UnlinkDeveloperIdentity({
  "IdentityId": null,
  "IdentityPoolId": null,
  "DeveloperProviderName": null,
  "DeveloperUserIdentifier": null
}, context)
```

#### Input
* input `object`
  * DeveloperProviderName **required**
  * DeveloperUserIdentifier **required**
  * IdentityId **required**
  * IdentityPoolId **required**

#### Output
*Output schema unknown*

### UnlinkIdentity



```js
amazonaws_cognito_identity.UnlinkIdentity({
  "IdentityId": null,
  "Logins": null,
  "LoginsToRemove": null
}, context)
```

#### Input
* input `object`
  * IdentityId **required**
  * Logins **required**
  * LoginsToRemove **required**
    * items [IdentityProviderName](#identityprovidername)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_cognito_identity.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKeysType](#tagkeystype)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateIdentityPool



```js
amazonaws_cognito_identity.UpdateIdentityPool({
  "IdentityPoolId": null,
  "IdentityPoolName": null,
  "AllowUnauthenticatedIdentities": null
}, context)
```

#### Input
* input `object`
  * AllowClassicFlow
  * AllowUnauthenticatedIdentities **required**
  * CognitoIdentityProviders
    * items [CognitoIdentityProvider](#cognitoidentityprovider)
  * DeveloperProviderName
  * IdentityPoolId **required**
  * IdentityPoolName **required**
  * IdentityPoolTags
  * OpenIdConnectProviderARNs
    * items [ARNString](#arnstring)
  * SamlProviderARNs
    * items [ARNString](#arnstring)
  * SupportedLoginProviders

#### Output
* output [IdentityPool](#identitypool)



## Definitions

### ARNString
* ARNString `string`

### AccessKeyString
* AccessKeyString `string`

### AccountId
* AccountId `string`

### AmbiguousRoleResolutionType
* AmbiguousRoleResolutionType `string` (values: AuthenticatedRole, Deny)

### ClaimName
* ClaimName `string`

### ClaimValue
* ClaimValue `string`

### ClassicFlow
* ClassicFlow `boolean`

### CognitoIdentityProvider
* CognitoIdentityProvider `object`: A provider representing an Amazon Cognito user pool and its client ID.
  * ClientId
  * ProviderName
  * ServerSideTokenCheck

### CognitoIdentityProviderClientId
* CognitoIdentityProviderClientId `string`

### CognitoIdentityProviderList
* CognitoIdentityProviderList `array`
  * items [CognitoIdentityProvider](#cognitoidentityprovider)

### CognitoIdentityProviderName
* CognitoIdentityProviderName `string`

### CognitoIdentityProviderTokenCheck
* CognitoIdentityProviderTokenCheck `boolean`

### ConcurrentModificationException


### CreateIdentityPoolInput
* CreateIdentityPoolInput `object`: Input to the CreateIdentityPool action.
  * AllowClassicFlow
  * AllowUnauthenticatedIdentities **required**
  * CognitoIdentityProviders
    * items [CognitoIdentityProvider](#cognitoidentityprovider)
  * DeveloperProviderName
  * IdentityPoolName **required**
  * IdentityPoolTags
  * OpenIdConnectProviderARNs
    * items [ARNString](#arnstring)
  * SamlProviderARNs
    * items [ARNString](#arnstring)
  * SupportedLoginProviders

### Credentials
* Credentials `object`: Credentials for the provided identity ID.
  * AccessKeyId
  * Expiration
  * SecretKey
  * SessionToken

### DateType
* DateType `string`

### DeleteIdentitiesInput
* DeleteIdentitiesInput `object`: Input to the <code>DeleteIdentities</code> action.
  * IdentityIdsToDelete **required**
    * items [IdentityId](#identityid)

### DeleteIdentitiesResponse
* DeleteIdentitiesResponse `object`: Returned in response to a successful <code>DeleteIdentities</code> operation.
  * UnprocessedIdentityIds
    * items [UnprocessedIdentityId](#unprocessedidentityid)

### DeleteIdentityPoolInput
* DeleteIdentityPoolInput `object`: Input to the DeleteIdentityPool action.
  * IdentityPoolId **required**

### DescribeIdentityInput
* DescribeIdentityInput `object`: Input to the <code>DescribeIdentity</code> action.
  * IdentityId **required**

### DescribeIdentityPoolInput
* DescribeIdentityPoolInput `object`: Input to the DescribeIdentityPool action.
  * IdentityPoolId **required**

### DeveloperProviderName
* DeveloperProviderName `string`

### DeveloperUserAlreadyRegisteredException


### DeveloperUserIdentifier
* DeveloperUserIdentifier `string`

### DeveloperUserIdentifierList
* DeveloperUserIdentifierList `array`
  * items [DeveloperUserIdentifier](#developeruseridentifier)

### ErrorCode
* ErrorCode `string` (values: AccessDenied, InternalServerError)

### ExternalServiceException


### GetCredentialsForIdentityInput
* GetCredentialsForIdentityInput `object`: Input to the <code>GetCredentialsForIdentity</code> action.
  * CustomRoleArn
  * IdentityId **required**
  * Logins

### GetCredentialsForIdentityResponse
* GetCredentialsForIdentityResponse `object`: Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.
  * Credentials
    * AccessKeyId
    * Expiration
    * SecretKey
    * SessionToken
  * IdentityId

### GetIdInput
* GetIdInput `object`: Input to the GetId action.
  * AccountId
  * IdentityPoolId **required**
  * Logins

### GetIdResponse
* GetIdResponse `object`: Returned in response to a GetId request.
  * IdentityId

### GetIdentityPoolRolesInput
* GetIdentityPoolRolesInput `object`: Input to the <code>GetIdentityPoolRoles</code> action.
  * IdentityPoolId **required**

### GetIdentityPoolRolesResponse
* GetIdentityPoolRolesResponse `object`: Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.
  * IdentityPoolId
  * RoleMappings
  * Roles

### GetOpenIdTokenForDeveloperIdentityInput
* GetOpenIdTokenForDeveloperIdentityInput `object`: Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.
  * IdentityId
  * IdentityPoolId **required**
  * Logins **required**
  * TokenDuration

### GetOpenIdTokenForDeveloperIdentityResponse
* GetOpenIdTokenForDeveloperIdentityResponse `object`: Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.
  * IdentityId
  * Token

### GetOpenIdTokenInput
* GetOpenIdTokenInput `object`: Input to the GetOpenIdToken action.
  * IdentityId **required**
  * Logins

### GetOpenIdTokenResponse
* GetOpenIdTokenResponse `object`: Returned in response to a successful GetOpenIdToken request.
  * IdentityId
  * Token

### HideDisabled
* HideDisabled `boolean`

### IdentitiesList
* IdentitiesList `array`
  * items [IdentityDescription](#identitydescription)

### IdentityDescription
* IdentityDescription `object`: A description of the identity.
  * CreationDate
  * IdentityId
  * LastModifiedDate
  * Logins
    * items [IdentityProviderName](#identityprovidername)

### IdentityId
* IdentityId `string`

### IdentityIdList
* IdentityIdList `array`
  * items [IdentityId](#identityid)

### IdentityPool
* IdentityPool `object`: An object representing an Amazon Cognito identity pool.
  * AllowClassicFlow
  * AllowUnauthenticatedIdentities **required**
  * CognitoIdentityProviders
    * items [CognitoIdentityProvider](#cognitoidentityprovider)
  * DeveloperProviderName
  * IdentityPoolId **required**
  * IdentityPoolName **required**
  * IdentityPoolTags
  * OpenIdConnectProviderARNs
    * items [ARNString](#arnstring)
  * SamlProviderARNs
    * items [ARNString](#arnstring)
  * SupportedLoginProviders

### IdentityPoolId
* IdentityPoolId `string`

### IdentityPoolName
* IdentityPoolName `string`

### IdentityPoolShortDescription
* IdentityPoolShortDescription `object`: A description of the identity pool.
  * IdentityPoolId
  * IdentityPoolName

### IdentityPoolTagsListType
* IdentityPoolTagsListType `array`
  * items [TagKeysType](#tagkeystype)

### IdentityPoolTagsType
* IdentityPoolTagsType `object`

### IdentityPoolUnauthenticated
* IdentityPoolUnauthenticated `boolean`

### IdentityPoolsList
* IdentityPoolsList `array`
  * items [IdentityPoolShortDescription](#identitypoolshortdescription)

### IdentityProviderId
* IdentityProviderId `string`

### IdentityProviderName
* IdentityProviderName `string`

### IdentityProviderToken
* IdentityProviderToken `string`

### IdentityProviders
* IdentityProviders `object`

### InternalErrorException


### InvalidIdentityPoolConfigurationException


### InvalidParameterException


### LimitExceededException


### ListIdentitiesInput
* ListIdentitiesInput `object`: Input to the ListIdentities action.
  * HideDisabled
  * IdentityPoolId **required**
  * MaxResults **required**
  * NextToken

### ListIdentitiesResponse
* ListIdentitiesResponse `object`: The response to a ListIdentities request.
  * Identities
    * items [IdentityDescription](#identitydescription)
  * IdentityPoolId
  * NextToken

### ListIdentityPoolsInput
* ListIdentityPoolsInput `object`: Input to the ListIdentityPools action.
  * MaxResults **required**
  * NextToken

### ListIdentityPoolsResponse
* ListIdentityPoolsResponse `object`: The result of a successful ListIdentityPools action.
  * IdentityPools
    * items [IdentityPoolShortDescription](#identitypoolshortdescription)
  * NextToken

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### LoginsList
* LoginsList `array`
  * items [IdentityProviderName](#identityprovidername)

### LoginsMap
* LoginsMap `object`

### LookupDeveloperIdentityInput
* LookupDeveloperIdentityInput `object`: Input to the <code>LookupDeveloperIdentityInput</code> action.
  * DeveloperUserIdentifier
  * IdentityId
  * IdentityPoolId **required**
  * MaxResults
  * NextToken

### LookupDeveloperIdentityResponse
* LookupDeveloperIdentityResponse `object`: Returned in response to a successful <code>LookupDeveloperIdentity</code> action.
  * DeveloperUserIdentifierList
    * items [DeveloperUserIdentifier](#developeruseridentifier)
  * IdentityId
  * NextToken

### MappingRule
* MappingRule `object`: A rule that maps a claim name, a claim value, and a match type to a role ARN.
  * Claim **required**
  * MatchType **required**
  * RoleARN **required**
  * Value **required**

### MappingRuleMatchType
* MappingRuleMatchType `string` (values: Equals, Contains, StartsWith, NotEqual)

### MappingRulesList
* MappingRulesList `array`
  * items [MappingRule](#mappingrule)

### MergeDeveloperIdentitiesInput
* MergeDeveloperIdentitiesInput `object`: Input to the <code>MergeDeveloperIdentities</code> action.
  * DestinationUserIdentifier **required**
  * DeveloperProviderName **required**
  * IdentityPoolId **required**
  * SourceUserIdentifier **required**

### MergeDeveloperIdentitiesResponse
* MergeDeveloperIdentitiesResponse `object`: Returned in response to a successful <code>MergeDeveloperIdentities</code> action.
  * IdentityId

### NotAuthorizedException


### OIDCProviderList
* OIDCProviderList `array`
  * items [ARNString](#arnstring)

### OIDCToken
* OIDCToken `string`

### PaginationKey
* PaginationKey `string`

### QueryLimit
* QueryLimit `integer`

### ResourceConflictException


### ResourceNotFoundException


### RoleMapping
* RoleMapping `object`: A role mapping.
  * AmbiguousRoleResolution
  * RulesConfiguration
    * Rules **required**
      * items [MappingRule](#mappingrule)
  * Type **required**

### RoleMappingMap
* RoleMappingMap `object`

### RoleMappingType
* RoleMappingType `string` (values: Token, Rules)

### RoleType
* RoleType `string`

### RolesMap
* RolesMap `object`

### RulesConfigurationType
* RulesConfigurationType `object`: A container for rules.
  * Rules **required**
    * items [MappingRule](#mappingrule)

### SAMLProviderList
* SAMLProviderList `array`
  * items [ARNString](#arnstring)

### SecretKeyString
* SecretKeyString `string`

### SessionTokenString
* SessionTokenString `string`

### SetIdentityPoolRolesInput
* SetIdentityPoolRolesInput `object`: Input to the <code>SetIdentityPoolRoles</code> action.
  * IdentityPoolId **required**
  * RoleMappings
  * Roles **required**

### TagKeysType
* TagKeysType `string`

### TagResourceInput
* TagResourceInput `object`
  * ResourceArn **required**
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValueType
* TagValueType `string`

### TokenDuration
* TokenDuration `integer`

### TooManyRequestsException


### UnlinkDeveloperIdentityInput
* UnlinkDeveloperIdentityInput `object`: Input to the <code>UnlinkDeveloperIdentity</code> action.
  * DeveloperProviderName **required**
  * DeveloperUserIdentifier **required**
  * IdentityId **required**
  * IdentityPoolId **required**

### UnlinkIdentityInput
* UnlinkIdentityInput `object`: Input to the UnlinkIdentity action.
  * IdentityId **required**
  * Logins **required**
  * LoginsToRemove **required**
    * items [IdentityProviderName](#identityprovidername)

### UnprocessedIdentityId
* UnprocessedIdentityId `object`: An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
  * ErrorCode
  * IdentityId

### UnprocessedIdentityIdList
* UnprocessedIdentityIdList `array`
  * items [UnprocessedIdentityId](#unprocessedidentityid)

### UntagResourceInput
* UntagResourceInput `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKeysType](#tagkeystype)

### UntagResourceResponse
* UntagResourceResponse `object`


