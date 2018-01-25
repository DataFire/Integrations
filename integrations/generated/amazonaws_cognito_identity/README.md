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

amazonaws_cognito_identity.CreateIdentityPool({
  "IdentityPoolName": "",
  "AllowUnauthenticatedIdentities": true
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * AllowUnauthenticatedIdentities **required** [IdentityPoolUnauthenticated](#identitypoolunauthenticated)
  * CognitoIdentityProviders [CognitoIdentityProviderList](#cognitoidentityproviderlist)
  * DeveloperProviderName [DeveloperProviderName](#developerprovidername)
  * IdentityPoolName **required** [IdentityPoolName](#identitypoolname)
  * OpenIdConnectProviderARNs [OIDCProviderList](#oidcproviderlist)
  * SamlProviderARNs [SAMLProviderList](#samlproviderlist)
  * SupportedLoginProviders [IdentityProviders](#identityproviders)

#### Output
* output [IdentityPool](#identitypool)

### DeleteIdentities



```js
amazonaws_cognito_identity.DeleteIdentities({
  "IdentityIdsToDelete": []
}, context)
```

#### Input
* input `object`
  * IdentityIdsToDelete **required** [IdentityIdList](#identityidlist)

#### Output
* output [DeleteIdentitiesResponse](#deleteidentitiesresponse)

### DeleteIdentityPool



```js
amazonaws_cognito_identity.DeleteIdentityPool({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)

#### Output
*Output schema unknown*

### DescribeIdentity



```js
amazonaws_cognito_identity.DescribeIdentity({
  "IdentityId": ""
}, context)
```

#### Input
* input `object`
  * IdentityId **required** [IdentityId](#identityid)

#### Output
* output [IdentityDescription](#identitydescription)

### DescribeIdentityPool



```js
amazonaws_cognito_identity.DescribeIdentityPool({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)

#### Output
* output [IdentityPool](#identitypool)

### GetCredentialsForIdentity



```js
amazonaws_cognito_identity.GetCredentialsForIdentity({
  "IdentityId": ""
}, context)
```

#### Input
* input `object`
  * CustomRoleArn [ARNString](#arnstring)
  * IdentityId **required** [IdentityId](#identityid)
  * Logins [LoginsMap](#loginsmap)

#### Output
* output [GetCredentialsForIdentityResponse](#getcredentialsforidentityresponse)

### GetId



```js
amazonaws_cognito_identity.GetId({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * AccountId [AccountId](#accountid)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * Logins [LoginsMap](#loginsmap)

#### Output
* output [GetIdResponse](#getidresponse)

### GetIdentityPoolRoles



```js
amazonaws_cognito_identity.GetIdentityPoolRoles({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)

#### Output
* output [GetIdentityPoolRolesResponse](#getidentitypoolrolesresponse)

### GetOpenIdToken



```js
amazonaws_cognito_identity.GetOpenIdToken({
  "IdentityId": ""
}, context)
```

#### Input
* input `object`
  * IdentityId **required** [IdentityId](#identityid)
  * Logins [LoginsMap](#loginsmap)

#### Output
* output [GetOpenIdTokenResponse](#getopenidtokenresponse)

### GetOpenIdTokenForDeveloperIdentity



```js
amazonaws_cognito_identity.GetOpenIdTokenForDeveloperIdentity({
  "IdentityPoolId": "",
  "Logins": []
}, context)
```

#### Input
* input `object`
  * IdentityId [IdentityId](#identityid)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * Logins **required** [LoginsMap](#loginsmap)
  * TokenDuration [TokenDuration](#tokenduration)

#### Output
* output [GetOpenIdTokenForDeveloperIdentityResponse](#getopenidtokenfordeveloperidentityresponse)

### ListIdentities



```js
amazonaws_cognito_identity.ListIdentities({
  "IdentityPoolId": "",
  "MaxResults": 0
}, context)
```

#### Input
* input `object`
  * HideDisabled [HideDisabled](#hidedisabled)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * MaxResults **required** [QueryLimit](#querylimit)
  * NextToken [PaginationKey](#paginationkey)

#### Output
* output [ListIdentitiesResponse](#listidentitiesresponse)

### ListIdentityPools



```js
amazonaws_cognito_identity.ListIdentityPools({
  "MaxResults": 0
}, context)
```

#### Input
* input `object`
  * MaxResults **required** [QueryLimit](#querylimit)
  * NextToken [PaginationKey](#paginationkey)

#### Output
* output [ListIdentityPoolsResponse](#listidentitypoolsresponse)

### LookupDeveloperIdentity



```js
amazonaws_cognito_identity.LookupDeveloperIdentity({
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * DeveloperUserIdentifier [DeveloperUserIdentifier](#developeruseridentifier)
  * IdentityId [IdentityId](#identityid)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * MaxResults [QueryLimit](#querylimit)
  * NextToken [PaginationKey](#paginationkey)

#### Output
* output [LookupDeveloperIdentityResponse](#lookupdeveloperidentityresponse)

### MergeDeveloperIdentities



```js
amazonaws_cognito_identity.MergeDeveloperIdentities({
  "SourceUserIdentifier": "",
  "DestinationUserIdentifier": "",
  "DeveloperProviderName": "",
  "IdentityPoolId": ""
}, context)
```

#### Input
* input `object`
  * DestinationUserIdentifier **required** [DeveloperUserIdentifier](#developeruseridentifier)
  * DeveloperProviderName **required** [DeveloperProviderName](#developerprovidername)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * SourceUserIdentifier **required** [DeveloperUserIdentifier](#developeruseridentifier)

#### Output
* output [MergeDeveloperIdentitiesResponse](#mergedeveloperidentitiesresponse)

### SetIdentityPoolRoles



```js
amazonaws_cognito_identity.SetIdentityPoolRoles({
  "IdentityPoolId": "",
  "Roles": []
}, context)
```

#### Input
* input `object`
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * RoleMappings [RoleMappingMap](#rolemappingmap)
  * Roles **required** [RolesMap](#rolesmap)

#### Output
*Output schema unknown*

### UnlinkDeveloperIdentity



```js
amazonaws_cognito_identity.UnlinkDeveloperIdentity({
  "IdentityId": "",
  "IdentityPoolId": "",
  "DeveloperProviderName": "",
  "DeveloperUserIdentifier": ""
}, context)
```

#### Input
* input `object`
  * DeveloperProviderName **required** [DeveloperProviderName](#developerprovidername)
  * DeveloperUserIdentifier **required** [DeveloperUserIdentifier](#developeruseridentifier)
  * IdentityId **required** [IdentityId](#identityid)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)

#### Output
*Output schema unknown*

### UnlinkIdentity



```js
amazonaws_cognito_identity.UnlinkIdentity({
  "IdentityId": "",
  "Logins": [],
  "LoginsToRemove": []
}, context)
```

#### Input
* input `object`
  * IdentityId **required** [IdentityId](#identityid)
  * Logins **required** [LoginsMap](#loginsmap)
  * LoginsToRemove **required** [LoginsList](#loginslist)

#### Output
*Output schema unknown*

### UpdateIdentityPool



```js
amazonaws_cognito_identity.UpdateIdentityPool({
  "IdentityPoolId": "",
  "IdentityPoolName": "",
  "AllowUnauthenticatedIdentities": true
}, context)
```

#### Input
* input `object`
  * AllowUnauthenticatedIdentities **required** [IdentityPoolUnauthenticated](#identitypoolunauthenticated)
  * CognitoIdentityProviders [CognitoIdentityProviderList](#cognitoidentityproviderlist)
  * DeveloperProviderName [DeveloperProviderName](#developerprovidername)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * IdentityPoolName **required** [IdentityPoolName](#identitypoolname)
  * OpenIdConnectProviderARNs [OIDCProviderList](#oidcproviderlist)
  * SamlProviderARNs [SAMLProviderList](#samlproviderlist)
  * SupportedLoginProviders [IdentityProviders](#identityproviders)

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

### CognitoIdentityProvider
* CognitoIdentityProvider `object`: A provider representing an Amazon Cognito Identity User Pool and its client ID.
  * ClientId [CognitoIdentityProviderClientId](#cognitoidentityproviderclientid)
  * ProviderName [CognitoIdentityProviderName](#cognitoidentityprovidername)
  * ServerSideTokenCheck [CognitoIdentityProviderTokenCheck](#cognitoidentityprovidertokencheck)

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
* ConcurrentModificationException `object`: Thrown if there are parallel requests to modify a resource.
  * message [String](#string)

### CreateIdentityPoolInput
* CreateIdentityPoolInput `object`: Input to the CreateIdentityPool action.
  * AllowUnauthenticatedIdentities **required** [IdentityPoolUnauthenticated](#identitypoolunauthenticated)
  * CognitoIdentityProviders [CognitoIdentityProviderList](#cognitoidentityproviderlist)
  * DeveloperProviderName [DeveloperProviderName](#developerprovidername)
  * IdentityPoolName **required** [IdentityPoolName](#identitypoolname)
  * OpenIdConnectProviderARNs [OIDCProviderList](#oidcproviderlist)
  * SamlProviderARNs [SAMLProviderList](#samlproviderlist)
  * SupportedLoginProviders [IdentityProviders](#identityproviders)

### Credentials
* Credentials `object`: Credentials for the provided identity ID.
  * AccessKeyId [AccessKeyString](#accesskeystring)
  * Expiration [DateType](#datetype)
  * SecretKey [SecretKeyString](#secretkeystring)
  * SessionToken [SessionTokenString](#sessiontokenstring)

### DateType
* DateType `string`

### DeleteIdentitiesInput
* DeleteIdentitiesInput `object`: Input to the <code>DeleteIdentities</code> action.
  * IdentityIdsToDelete **required** [IdentityIdList](#identityidlist)

### DeleteIdentitiesResponse
* DeleteIdentitiesResponse `object`: Returned in response to a successful <code>DeleteIdentities</code> operation.
  * UnprocessedIdentityIds [UnprocessedIdentityIdList](#unprocessedidentityidlist)

### DeleteIdentityPoolInput
* DeleteIdentityPoolInput `object`: Input to the DeleteIdentityPool action.
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)

### DescribeIdentityInput
* DescribeIdentityInput `object`: Input to the <code>DescribeIdentity</code> action.
  * IdentityId **required** [IdentityId](#identityid)

### DescribeIdentityPoolInput
* DescribeIdentityPoolInput `object`: Input to the DescribeIdentityPool action.
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)

### DeveloperProviderName
* DeveloperProviderName `string`

### DeveloperUserAlreadyRegisteredException
* DeveloperUserAlreadyRegisteredException `object`: The provided developer user identifier is already registered with Cognito under a different identity ID.
  * message [String](#string)

### DeveloperUserIdentifier
* DeveloperUserIdentifier `string`

### DeveloperUserIdentifierList
* DeveloperUserIdentifierList `array`
  * items [DeveloperUserIdentifier](#developeruseridentifier)

### ErrorCode
* ErrorCode `string` (values: AccessDenied, InternalServerError)

### ExternalServiceException
* ExternalServiceException `object`: An exception thrown when a dependent service such as Facebook or Twitter is not responding
  * message [String](#string)

### GetCredentialsForIdentityInput
* GetCredentialsForIdentityInput `object`: Input to the <code>GetCredentialsForIdentity</code> action.
  * CustomRoleArn [ARNString](#arnstring)
  * IdentityId **required** [IdentityId](#identityid)
  * Logins [LoginsMap](#loginsmap)

### GetCredentialsForIdentityResponse
* GetCredentialsForIdentityResponse `object`: Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.
  * Credentials [Credentials](#credentials)
  * IdentityId [IdentityId](#identityid)

### GetIdInput
* GetIdInput `object`: Input to the GetId action.
  * AccountId [AccountId](#accountid)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * Logins [LoginsMap](#loginsmap)

### GetIdResponse
* GetIdResponse `object`: Returned in response to a GetId request.
  * IdentityId [IdentityId](#identityid)

### GetIdentityPoolRolesInput
* GetIdentityPoolRolesInput `object`: Input to the <code>GetIdentityPoolRoles</code> action.
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)

### GetIdentityPoolRolesResponse
* GetIdentityPoolRolesResponse `object`: Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.
  * IdentityPoolId [IdentityPoolId](#identitypoolid)
  * RoleMappings [RoleMappingMap](#rolemappingmap)
  * Roles [RolesMap](#rolesmap)

### GetOpenIdTokenForDeveloperIdentityInput
* GetOpenIdTokenForDeveloperIdentityInput `object`: Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.
  * IdentityId [IdentityId](#identityid)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * Logins **required** [LoginsMap](#loginsmap)
  * TokenDuration [TokenDuration](#tokenduration)

### GetOpenIdTokenForDeveloperIdentityResponse
* GetOpenIdTokenForDeveloperIdentityResponse `object`: Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.
  * IdentityId [IdentityId](#identityid)
  * Token [OIDCToken](#oidctoken)

### GetOpenIdTokenInput
* GetOpenIdTokenInput `object`: Input to the GetOpenIdToken action.
  * IdentityId **required** [IdentityId](#identityid)
  * Logins [LoginsMap](#loginsmap)

### GetOpenIdTokenResponse
* GetOpenIdTokenResponse `object`: Returned in response to a successful GetOpenIdToken request.
  * IdentityId [IdentityId](#identityid)
  * Token [OIDCToken](#oidctoken)

### HideDisabled
* HideDisabled `boolean`

### IdentitiesList
* IdentitiesList `array`
  * items [IdentityDescription](#identitydescription)

### IdentityDescription
* IdentityDescription `object`: A description of the identity.
  * CreationDate [DateType](#datetype)
  * IdentityId [IdentityId](#identityid)
  * LastModifiedDate [DateType](#datetype)
  * Logins [LoginsList](#loginslist)

### IdentityId
* IdentityId `string`

### IdentityIdList
* IdentityIdList `array`
  * items [IdentityId](#identityid)

### IdentityPool
* IdentityPool `object`: An object representing an Amazon Cognito identity pool.
  * AllowUnauthenticatedIdentities **required** [IdentityPoolUnauthenticated](#identitypoolunauthenticated)
  * CognitoIdentityProviders [CognitoIdentityProviderList](#cognitoidentityproviderlist)
  * DeveloperProviderName [DeveloperProviderName](#developerprovidername)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * IdentityPoolName **required** [IdentityPoolName](#identitypoolname)
  * OpenIdConnectProviderARNs [OIDCProviderList](#oidcproviderlist)
  * SamlProviderARNs [SAMLProviderList](#samlproviderlist)
  * SupportedLoginProviders [IdentityProviders](#identityproviders)

### IdentityPoolId
* IdentityPoolId `string`

### IdentityPoolName
* IdentityPoolName `string`

### IdentityPoolShortDescription
* IdentityPoolShortDescription `object`: A description of the identity pool.
  * IdentityPoolId [IdentityPoolId](#identitypoolid)
  * IdentityPoolName [IdentityPoolName](#identitypoolname)

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
* IdentityProviders `array`
  * items `object`
    * key [IdentityProviderName](#identityprovidername)
    * value [IdentityProviderId](#identityproviderid)

### InternalErrorException
* InternalErrorException `object`: Thrown when the service encounters an error during processing the request.
  * message [String](#string)

### InvalidIdentityPoolConfigurationException
* InvalidIdentityPoolConfigurationException `object`: Thrown if the identity pool has no role associated for the given auth type (auth/unauth) or if the AssumeRole fails.
  * message [String](#string)

### InvalidParameterException
* InvalidParameterException `object`: Thrown for missing or bad input parameter(s).
  * message [String](#string)

### LimitExceededException
* LimitExceededException `object`: Thrown when the total number of user pools has exceeded a preset limit.
  * message [String](#string)

### ListIdentitiesInput
* ListIdentitiesInput `object`: Input to the ListIdentities action.
  * HideDisabled [HideDisabled](#hidedisabled)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * MaxResults **required** [QueryLimit](#querylimit)
  * NextToken [PaginationKey](#paginationkey)

### ListIdentitiesResponse
* ListIdentitiesResponse `object`: The response to a ListIdentities request.
  * Identities [IdentitiesList](#identitieslist)
  * IdentityPoolId [IdentityPoolId](#identitypoolid)
  * NextToken [PaginationKey](#paginationkey)

### ListIdentityPoolsInput
* ListIdentityPoolsInput `object`: Input to the ListIdentityPools action.
  * MaxResults **required** [QueryLimit](#querylimit)
  * NextToken [PaginationKey](#paginationkey)

### ListIdentityPoolsResponse
* ListIdentityPoolsResponse `object`: The result of a successful ListIdentityPools action.
  * IdentityPools [IdentityPoolsList](#identitypoolslist)
  * NextToken [PaginationKey](#paginationkey)

### LoginsList
* LoginsList `array`
  * items [IdentityProviderName](#identityprovidername)

### LoginsMap
* LoginsMap `array`
  * items `object`
    * key [IdentityProviderName](#identityprovidername)
    * value [IdentityProviderToken](#identityprovidertoken)

### LookupDeveloperIdentityInput
* LookupDeveloperIdentityInput `object`: Input to the <code>LookupDeveloperIdentityInput</code> action.
  * DeveloperUserIdentifier [DeveloperUserIdentifier](#developeruseridentifier)
  * IdentityId [IdentityId](#identityid)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * MaxResults [QueryLimit](#querylimit)
  * NextToken [PaginationKey](#paginationkey)

### LookupDeveloperIdentityResponse
* LookupDeveloperIdentityResponse `object`: Returned in response to a successful <code>LookupDeveloperIdentity</code> action.
  * DeveloperUserIdentifierList [DeveloperUserIdentifierList](#developeruseridentifierlist)
  * IdentityId [IdentityId](#identityid)
  * NextToken [PaginationKey](#paginationkey)

### MappingRule
* MappingRule `object`: A rule that maps a claim name, a claim value, and a match type to a role ARN.
  * Claim **required** [ClaimName](#claimname)
  * MatchType **required** [MappingRuleMatchType](#mappingrulematchtype)
  * RoleARN **required** [ARNString](#arnstring)
  * Value **required** [ClaimValue](#claimvalue)

### MappingRuleMatchType
* MappingRuleMatchType `string` (values: Equals, Contains, StartsWith, NotEqual)

### MappingRulesList
* MappingRulesList `array`
  * items [MappingRule](#mappingrule)

### MergeDeveloperIdentitiesInput
* MergeDeveloperIdentitiesInput `object`: Input to the <code>MergeDeveloperIdentities</code> action.
  * DestinationUserIdentifier **required** [DeveloperUserIdentifier](#developeruseridentifier)
  * DeveloperProviderName **required** [DeveloperProviderName](#developerprovidername)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * SourceUserIdentifier **required** [DeveloperUserIdentifier](#developeruseridentifier)

### MergeDeveloperIdentitiesResponse
* MergeDeveloperIdentitiesResponse `object`: Returned in response to a successful <code>MergeDeveloperIdentities</code> action.
  * IdentityId [IdentityId](#identityid)

### NotAuthorizedException
* NotAuthorizedException `object`: Thrown when a user is not authorized to access the requested resource.
  * message [String](#string)

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
* ResourceConflictException `object`: Thrown when a user tries to use a login which is already linked to another account.
  * message [String](#string)

### ResourceNotFoundException
* ResourceNotFoundException `object`: Thrown when the requested resource (for example, a dataset or record) does not exist.
  * message [String](#string)

### RoleMapping
* RoleMapping `object`: A role mapping.
  * AmbiguousRoleResolution [AmbiguousRoleResolutionType](#ambiguousroleresolutiontype)
  * RulesConfiguration [RulesConfigurationType](#rulesconfigurationtype)
  * Type **required** [RoleMappingType](#rolemappingtype)

### RoleMappingMap
* RoleMappingMap `array`
  * items `object`
    * key [IdentityProviderName](#identityprovidername)
    * value [RoleMapping](#rolemapping)

### RoleMappingType
* RoleMappingType `string` (values: Token, Rules)

### RoleType
* RoleType `string`

### RolesMap
* RolesMap `array`
  * items `object`
    * key [RoleType](#roletype)
    * value [ARNString](#arnstring)

### RulesConfigurationType
* RulesConfigurationType `object`: A container for rules.
  * Rules **required** [MappingRulesList](#mappingruleslist)

### SAMLProviderList
* SAMLProviderList `array`
  * items [ARNString](#arnstring)

### SecretKeyString
* SecretKeyString `string`

### SessionTokenString
* SessionTokenString `string`

### SetIdentityPoolRolesInput
* SetIdentityPoolRolesInput `object`: Input to the <code>SetIdentityPoolRoles</code> action.
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)
  * RoleMappings [RoleMappingMap](#rolemappingmap)
  * Roles **required** [RolesMap](#rolesmap)

### String
* String `string`

### TokenDuration
* TokenDuration `integer`

### TooManyRequestsException
* TooManyRequestsException `object`: Thrown when a request is throttled.
  * message [String](#string)

### UnlinkDeveloperIdentityInput
* UnlinkDeveloperIdentityInput `object`: Input to the <code>UnlinkDeveloperIdentity</code> action.
  * DeveloperProviderName **required** [DeveloperProviderName](#developerprovidername)
  * DeveloperUserIdentifier **required** [DeveloperUserIdentifier](#developeruseridentifier)
  * IdentityId **required** [IdentityId](#identityid)
  * IdentityPoolId **required** [IdentityPoolId](#identitypoolid)

### UnlinkIdentityInput
* UnlinkIdentityInput `object`: Input to the UnlinkIdentity action.
  * IdentityId **required** [IdentityId](#identityid)
  * Logins **required** [LoginsMap](#loginsmap)
  * LoginsToRemove **required** [LoginsList](#loginslist)

### UnprocessedIdentityId
* UnprocessedIdentityId `object`: An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
  * ErrorCode [ErrorCode](#errorcode)
  * IdentityId [IdentityId](#identityid)

### UnprocessedIdentityIdList
* UnprocessedIdentityIdList `array`
  * items [UnprocessedIdentityId](#unprocessedidentityid)


