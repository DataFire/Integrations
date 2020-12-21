# @datafire/amazonaws_amplifybackend

Client library for AmplifyBackend

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_amplifybackend
```
```js
let amazonaws_amplifybackend = require('@datafire/amazonaws_amplifybackend').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Amplify Admin API

## Actions

### CreateBackend



```js
amazonaws_amplifybackend.CreateBackend({
  "appId": "",
  "appName": "",
  "backendEnvironmentName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The app ID.
  * appName **required** `string`: The name of the app.
  * backendEnvironmentName **required** `string`: The name of the backend environment.
  * resourceConfig `object`: Defines the resource configuration for the data model in your Amplify project.
  * resourceName `string`: The name of the resource.

#### Output
* output [CreateBackendResponse](#createbackendresponse)

### CreateBackendAPI



```js
amazonaws_amplifybackend.CreateBackendAPI({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceConfig": {},
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`: The name of the backend environment.
  * resourceConfig **required** `object`: The resource configuration for the data model, configured as a part of the Amplify project.
    * AdditionalAuthTypes
      * items [BackendAPIAuthType](#backendapiauthtype)
    * ApiName
    * ConflictResolution
      * ResolutionStrategy
    * DefaultAuthType
      * Mode
      * Settings
        * CognitoUserPoolId
        * Description
        * ExpirationTime
        * OpenIDAuthTTL
        * OpenIDClientId
        * OpenIDIatTTL
        * OpenIDIssueURL
        * OpenIDProviderName
    * Service
    * TransformSchema
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [CreateBackendAPIResponse](#createbackendapiresponse)

### UpdateBackendAPI



```js
amazonaws_amplifybackend.UpdateBackendAPI({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * resourceConfig `object`: The resource configuration for the data model, configured as a part of the Amplify project.
    * AdditionalAuthTypes
      * items [BackendAPIAuthType](#backendapiauthtype)
    * ApiName
    * ConflictResolution
      * ResolutionStrategy
    * DefaultAuthType
      * Mode
      * Settings
        * CognitoUserPoolId
        * Description
        * ExpirationTime
        * OpenIDAuthTTL
        * OpenIDClientId
        * OpenIDIatTTL
        * OpenIDIssueURL
        * OpenIDProviderName
    * Service
    * TransformSchema
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [UpdateBackendAPIResponse](#updatebackendapiresponse)

### GetBackendAPI



```js
amazonaws_amplifybackend.GetBackendAPI({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * resourceConfig `object`: The resource configuration for the data model, configured as a part of the Amplify project.
    * AdditionalAuthTypes
      * items [BackendAPIAuthType](#backendapiauthtype)
    * ApiName
    * ConflictResolution
      * ResolutionStrategy
    * DefaultAuthType
      * Mode
      * Settings
        * CognitoUserPoolId
        * Description
        * ExpirationTime
        * OpenIDAuthTTL
        * OpenIDClientId
        * OpenIDIatTTL
        * OpenIDIssueURL
        * OpenIDProviderName
    * Service
    * TransformSchema
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [GetBackendAPIResponse](#getbackendapiresponse)

### GenerateBackendAPIModels



```js
amazonaws_amplifybackend.GenerateBackendAPIModels({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [GenerateBackendAPIModelsResponse](#generatebackendapimodelsresponse)

### GetBackendAPIModels



```js
amazonaws_amplifybackend.GetBackendAPIModels({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [GetBackendAPIModelsResponse](#getbackendapimodelsresponse)

### DeleteBackendAPI



```js
amazonaws_amplifybackend.DeleteBackendAPI({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * resourceConfig `object`: The resource configuration for the data model, configured as a part of the Amplify project.
    * AdditionalAuthTypes
      * items [BackendAPIAuthType](#backendapiauthtype)
    * ApiName
    * ConflictResolution
      * ResolutionStrategy
    * DefaultAuthType
      * Mode
      * Settings
        * CognitoUserPoolId
        * Description
        * ExpirationTime
        * OpenIDAuthTTL
        * OpenIDClientId
        * OpenIDIatTTL
        * OpenIDIssueURL
        * OpenIDProviderName
    * Service
    * TransformSchema
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [DeleteBackendAPIResponse](#deletebackendapiresponse)

### CreateBackendAuth



```js
amazonaws_amplifybackend.CreateBackendAuth({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceConfig": {},
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`: The name of the backend environment.
  * resourceConfig **required** `object`: Defines the resource configuration when creating an auth resource in your Amplify project.
    * AuthResources
    * IdentityPoolConfigs
      * IdentityPoolName **required**
      * UnauthenticatedLogin **required**
    * Service
    * UserPoolConfigs
      * ForgotPassword
        * DeliveryMethod **required**
        * EmailSettings
          * EmailMessage
          * EmailSubject
        * SmsSettings
          * SmsMessage
      * Mfa
        * MFAMode **required**
        * Settings
          * MfaTypes
          * SmsMessage
      * OAuth
        * DomainPrefix
        * OAuthGrantType **required**
        * OAuthScopes **required**
          * items [OAuthScopesElement](#oauthscopeselement)
        * RedirectSignInURIs **required**
          * items [__string](#__string)
        * RedirectSignOutURIs **required**
          * items [__string](#__string)
        * SocialProviderSettings
          * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
      * PasswordPolicy
        * AdditionalConstraints
          * items [AdditionalConstraintsElement](#additionalconstraintselement)
        * MinimumLength **required**
      * RequiredSignUpAttributes **required**
        * items [RequiredSignUpAttributesElement](#requiredsignupattributeselement)
      * SignInMethod **required**
      * UserPoolName **required**
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [CreateBackendAuthResponse](#createbackendauthresponse)

### UpdateBackendAuth



```js
amazonaws_amplifybackend.UpdateBackendAuth({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceConfig": {},
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * resourceConfig **required** `object`: Defines the resource configuration when updating an authentication resource in your Amplify project.
    * AuthResources
    * IdentityPoolConfigs
      * UnauthenticatedLogin
    * Service
    * UserPoolConfigs
      * ForgotPassword
        * DeliveryMethod
        * EmailSettings
          * EmailMessage
          * EmailSubject
        * SmsSettings
          * SmsMessage
      * Mfa
        * MFAMode
        * Settings
          * MfaTypes
          * SmsMessage
      * OAuth
        * DomainPrefix
        * OAuthGrantType
        * OAuthScopes
          * items [OAuthScopesElement](#oauthscopeselement)
        * RedirectSignInURIs
          * items [__string](#__string)
        * RedirectSignOutURIs
          * items [__string](#__string)
        * SocialProviderSettings
          * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
      * PasswordPolicy
        * AdditionalConstraints
          * items [AdditionalConstraintsElement](#additionalconstraintselement)
        * MinimumLength
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [UpdateBackendAuthResponse](#updatebackendauthresponse)

### GetBackendAuth



```js
amazonaws_amplifybackend.GetBackendAuth({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [GetBackendAuthResponse](#getbackendauthresponse)

### DeleteBackendAuth



```js
amazonaws_amplifybackend.DeleteBackendAuth({
  "appId": "",
  "backendEnvironmentName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * resourceName **required** `string`: The name of this resource.

#### Output
* output [DeleteBackendAuthResponse](#deletebackendauthresponse)

### CreateToken



```js
amazonaws_amplifybackend.CreateToken({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output [CreateTokenResponse](#createtokenresponse)

### GetToken



```js
amazonaws_amplifybackend.GetToken({
  "appId": "",
  "sessionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * sessionId **required** `string`

#### Output
* output [GetTokenResponse](#gettokenresponse)

### DeleteToken



```js
amazonaws_amplifybackend.DeleteToken({
  "appId": "",
  "sessionId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * sessionId **required** `string`

#### Output
* output [DeleteTokenResponse](#deletetokenresponse)

### CreateBackendConfig



```js
amazonaws_amplifybackend.CreateBackendConfig({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendManagerAppId `string`: The app ID for the backend manager.

#### Output
* output [CreateBackendConfigResponse](#createbackendconfigresponse)

### RemoveBackendConfig



```js
amazonaws_amplifybackend.RemoveBackendConfig({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output [RemoveBackendConfigResponse](#removebackendconfigresponse)

### UpdateBackendConfig



```js
amazonaws_amplifybackend.UpdateBackendConfig({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * loginAuthConfig `object`: The request object for this operation.
    * AwsCognitoIdentityPoolId
    * AwsCognitoRegion
    * AwsUserPoolsId
    * AwsUserPoolsWebClientId

#### Output
* output [UpdateBackendConfigResponse](#updatebackendconfigresponse)

### GetBackend



```js
amazonaws_amplifybackend.GetBackend({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName `string`: The name of the backend environment.

#### Output
* output [GetBackendResponse](#getbackendresponse)

### CloneBackend



```js
amazonaws_amplifybackend.CloneBackend({
  "appId": "",
  "backendEnvironmentName": "",
  "targetEnvironmentName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * targetEnvironmentName **required** `string`: The name of the destination backend environment to be created.

#### Output
* output [CloneBackendResponse](#clonebackendresponse)

### DeleteBackend



```js
amazonaws_amplifybackend.DeleteBackend({
  "appId": "",
  "backendEnvironmentName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`

#### Output
* output [DeleteBackendResponse](#deletebackendresponse)

### ListBackendJobs



```js
amazonaws_amplifybackend.ListBackendJobs({
  "appId": "",
  "backendEnvironmentName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * MaxResults `string`
  * NextToken `string`
  * jobId `string`: The ID for the job.
  * maxResults `integer`: The maximum number of results that you want in the response.
  * nextToken `string`: The token for the next set of results.
  * operation `string`: Filters the list of response objects to include only those with the specified operation name.
  * status `string`: Filters the list of response objects to include only those with the specified status.

#### Output
* output [ListBackendJobsResponse](#listbackendjobsresponse)

### GetBackendJob



```js
amazonaws_amplifybackend.GetBackendJob({
  "appId": "",
  "backendEnvironmentName": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * jobId **required** `string`

#### Output
* output [GetBackendJobResponse](#getbackendjobresponse)

### UpdateBackendJob



```js
amazonaws_amplifybackend.UpdateBackendJob({
  "appId": "",
  "backendEnvironmentName": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * backendEnvironmentName **required** `string`
  * jobId **required** `string`
  * operation `string`: Filters the list of response objects to include only those with the specified operation name.
  * status `string`: Filters the list of response objects to include only those with the specified status.

#### Output
* output [UpdateBackendJobResponse](#updatebackendjobresponse)

### RemoveAllBackends



```js
amazonaws_amplifybackend.RemoveAllBackends({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * cleanAmplifyApp `boolean`: Cleans up the Amplify Console app if this value is set to true.

#### Output
* output [RemoveAllBackendsResponse](#removeallbackendsresponse)



## Definitions

### AdditionalConstraintsElement
* AdditionalConstraintsElement `string` (values: REQUIRE_DIGIT, REQUIRE_LOWERCASE, REQUIRE_SYMBOL, REQUIRE_UPPERCASE)

### AuthResources
* AuthResources `string` (values: USER_POOL_ONLY, IDENTITY_POOL_AND_USER_POOL)

### BackendAPIAppSyncAuthSettings
* BackendAPIAppSyncAuthSettings `object`: The authentication settings for accessing provisioned data models in your Amplify project.
  * CognitoUserPoolId
  * Description
  * ExpirationTime
  * OpenIDAuthTTL
  * OpenIDClientId
  * OpenIDIatTTL
  * OpenIDIssueURL
  * OpenIDProviderName

### BackendAPIAuthType
* BackendAPIAuthType `object`: Describes the auth types for your configured data models.
  * Mode
  * Settings
    * CognitoUserPoolId
    * Description
    * ExpirationTime
    * OpenIDAuthTTL
    * OpenIDClientId
    * OpenIDIatTTL
    * OpenIDIssueURL
    * OpenIDProviderName

### BackendAPIConflictResolution
* BackendAPIConflictResolution `object`: Describes the conflict resolution configuration for the data model configured in your Amplify project.
  * ResolutionStrategy

### BackendAPIResourceConfig
* BackendAPIResourceConfig `object`: The resource configuration for the data model, configured as a part of the Amplify project.
  * AdditionalAuthTypes
    * items [BackendAPIAuthType](#backendapiauthtype)
  * ApiName
  * ConflictResolution
    * ResolutionStrategy
  * DefaultAuthType
    * Mode
    * Settings
      * CognitoUserPoolId
      * Description
      * ExpirationTime
      * OpenIDAuthTTL
      * OpenIDClientId
      * OpenIDIatTTL
      * OpenIDIssueURL
      * OpenIDProviderName
  * Service
  * TransformSchema

### BackendAuthSocialProviderConfig
* BackendAuthSocialProviderConfig `object`: Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
  * ClientId
  * ClientSecret

### BackendJobRespObj
* BackendJobRespObj `object`: The response object for this operation.
  * AppId **required**
  * BackendEnvironmentName **required**
  * CreateTime
  * Error
  * JobId
  * Operation
  * Status
  * UpdateTime

### BadRequestException


### CloneBackendRequest
* CloneBackendRequest `object`: The request body for CloneBackend.
  * TargetEnvironmentName **required**

### CloneBackendResponse
* CloneBackendResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### CreateBackendAPIRequest
* CreateBackendAPIRequest `object`: The request body for CreateBackendAPI.
  * BackendEnvironmentName **required**
  * ResourceConfig **required**
    * AdditionalAuthTypes
      * items [BackendAPIAuthType](#backendapiauthtype)
    * ApiName
    * ConflictResolution
      * ResolutionStrategy
    * DefaultAuthType
      * Mode
      * Settings
        * CognitoUserPoolId
        * Description
        * ExpirationTime
        * OpenIDAuthTTL
        * OpenIDClientId
        * OpenIDIatTTL
        * OpenIDIssueURL
        * OpenIDProviderName
    * Service
    * TransformSchema
  * ResourceName **required**

### CreateBackendAPIResponse
* CreateBackendAPIResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### CreateBackendAuthForgotPasswordConfig
* CreateBackendAuthForgotPasswordConfig `object`: Describes the forgot password policy for authenticating into the Amplify app.
  * DeliveryMethod **required**
  * EmailSettings
    * EmailMessage
    * EmailSubject
  * SmsSettings
    * SmsMessage

### CreateBackendAuthIdentityPoolConfig
* CreateBackendAuthIdentityPoolConfig `object`: Describes authorization configurations for the auth resources, configured as a part of your Amplify project.
  * IdentityPoolName **required**
  * UnauthenticatedLogin **required**

### CreateBackendAuthMFAConfig
* CreateBackendAuthMFAConfig `object`: Describes whether to apply multi-factor authentication (MFA) policies for your Amazon Cognito user pool that's configured as a part of your Amplify project.
  * MFAMode **required**
  * Settings
    * MfaTypes
      * items [MfaTypesElement](#mfatypeselement)
    * SmsMessage

### CreateBackendAuthOAuthConfig
* CreateBackendAuthOAuthConfig `object`: Creates the OAuth configuration for your Amplify project.
  * DomainPrefix
  * OAuthGrantType **required**
  * OAuthScopes **required**
    * items [OAuthScopesElement](#oauthscopeselement)
  * RedirectSignInURIs **required**
    * items [__string](#__string)
  * RedirectSignOutURIs **required**
    * items [__string](#__string)
  * SocialProviderSettings
    * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
    * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
    * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)

### CreateBackendAuthPasswordPolicyConfig
* CreateBackendAuthPasswordPolicyConfig `object`: The password policy configuration for the backend of your Amplify project.
  * AdditionalConstraints
    * items [AdditionalConstraintsElement](#additionalconstraintselement)
  * MinimumLength **required**

### CreateBackendAuthRequest
* CreateBackendAuthRequest `object`: The request body for CreateBackendAuth.
  * BackendEnvironmentName **required**
  * ResourceConfig **required**
    * AuthResources **required**
    * IdentityPoolConfigs
      * IdentityPoolName **required**
      * UnauthenticatedLogin **required**
    * Service **required**
    * UserPoolConfigs **required**
      * ForgotPassword
        * DeliveryMethod **required**
        * EmailSettings
          * EmailMessage
          * EmailSubject
        * SmsSettings
          * SmsMessage
      * Mfa
        * MFAMode **required**
        * Settings
          * MfaTypes
          * SmsMessage
      * OAuth
        * DomainPrefix
        * OAuthGrantType **required**
        * OAuthScopes **required**
          * items [OAuthScopesElement](#oauthscopeselement)
        * RedirectSignInURIs **required**
          * items [__string](#__string)
        * RedirectSignOutURIs **required**
          * items [__string](#__string)
        * SocialProviderSettings
          * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
      * PasswordPolicy
        * AdditionalConstraints
          * items [AdditionalConstraintsElement](#additionalconstraintselement)
        * MinimumLength **required**
      * RequiredSignUpAttributes **required**
        * items [RequiredSignUpAttributesElement](#requiredsignupattributeselement)
      * SignInMethod **required**
      * UserPoolName **required**
  * ResourceName **required**

### CreateBackendAuthResourceConfig
* CreateBackendAuthResourceConfig `object`: Defines the resource configuration when creating an auth resource in your Amplify project.
  * AuthResources **required**
  * IdentityPoolConfigs
    * IdentityPoolName **required**
    * UnauthenticatedLogin **required**
  * Service **required**
  * UserPoolConfigs **required**
    * ForgotPassword
      * DeliveryMethod **required**
      * EmailSettings
        * EmailMessage
        * EmailSubject
      * SmsSettings
        * SmsMessage
    * Mfa
      * MFAMode **required**
      * Settings
        * MfaTypes
          * items [MfaTypesElement](#mfatypeselement)
        * SmsMessage
    * OAuth
      * DomainPrefix
      * OAuthGrantType **required**
      * OAuthScopes **required**
        * items [OAuthScopesElement](#oauthscopeselement)
      * RedirectSignInURIs **required**
        * items [__string](#__string)
      * RedirectSignOutURIs **required**
        * items [__string](#__string)
      * SocialProviderSettings
        * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
        * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
        * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
    * PasswordPolicy
      * AdditionalConstraints
        * items [AdditionalConstraintsElement](#additionalconstraintselement)
      * MinimumLength **required**
    * RequiredSignUpAttributes **required**
      * items [RequiredSignUpAttributesElement](#requiredsignupattributeselement)
    * SignInMethod **required**
    * UserPoolName **required**

### CreateBackendAuthResponse
* CreateBackendAuthResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### CreateBackendAuthUserPoolConfig
* CreateBackendAuthUserPoolConfig `object`: Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.
  * ForgotPassword
    * DeliveryMethod **required**
    * EmailSettings
      * EmailMessage
      * EmailSubject
    * SmsSettings
      * SmsMessage
  * Mfa
    * MFAMode **required**
    * Settings
      * MfaTypes
        * items [MfaTypesElement](#mfatypeselement)
      * SmsMessage
  * OAuth
    * DomainPrefix
    * OAuthGrantType **required**
    * OAuthScopes **required**
      * items [OAuthScopesElement](#oauthscopeselement)
    * RedirectSignInURIs **required**
      * items [__string](#__string)
    * RedirectSignOutURIs **required**
      * items [__string](#__string)
    * SocialProviderSettings
      * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
      * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
      * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
  * PasswordPolicy
    * AdditionalConstraints
      * items [AdditionalConstraintsElement](#additionalconstraintselement)
    * MinimumLength **required**
  * RequiredSignUpAttributes **required**
    * items [RequiredSignUpAttributesElement](#requiredsignupattributeselement)
  * SignInMethod **required**
  * UserPoolName **required**

### CreateBackendConfigRequest
* CreateBackendConfigRequest `object`: The request body for CreateBackendConfig.
  * BackendManagerAppId

### CreateBackendConfigResponse
* CreateBackendConfigResponse `object`
  * AppId
  * BackendEnvironmentName
  * JobId
  * Status

### CreateBackendRequest
* CreateBackendRequest `object`: The request body for CreateBackend.
  * AppId **required**
  * AppName **required**
  * BackendEnvironmentName **required**
  * ResourceConfig
  * ResourceName

### CreateBackendResponse
* CreateBackendResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### CreateTokenRequest
* CreateTokenRequest `object`

### CreateTokenResponse
* CreateTokenResponse `object`
  * AppId
  * ChallengeCode
  * SessionId
  * Ttl

### DeleteBackendAPIRequest
* DeleteBackendAPIRequest `object`: The request body for DeleteBackendAPI.
  * ResourceConfig
    * AdditionalAuthTypes
      * items [BackendAPIAuthType](#backendapiauthtype)
    * ApiName
    * ConflictResolution
      * ResolutionStrategy
    * DefaultAuthType
      * Mode
      * Settings
        * CognitoUserPoolId
        * Description
        * ExpirationTime
        * OpenIDAuthTTL
        * OpenIDClientId
        * OpenIDIatTTL
        * OpenIDIssueURL
        * OpenIDProviderName
    * Service
    * TransformSchema
  * ResourceName **required**

### DeleteBackendAPIResponse
* DeleteBackendAPIResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### DeleteBackendAuthRequest
* DeleteBackendAuthRequest `object`: The request body for DeleteBackendAuth.
  * ResourceName **required**

### DeleteBackendAuthResponse
* DeleteBackendAuthResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### DeleteBackendRequest
* DeleteBackendRequest `object`

### DeleteBackendResponse
* DeleteBackendResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### DeleteTokenRequest
* DeleteTokenRequest `object`

### DeleteTokenResponse
* DeleteTokenResponse `object`
  * IsSuccess

### DeliveryMethod
* DeliveryMethod `string` (values: EMAIL, SMS)

### EmailSettings
* EmailSettings `object`: The configuration for the email sent when an app user forgets their password.
  * EmailMessage
  * EmailSubject

### GatewayTimeoutException


### GenerateBackendAPIModelsRequest
* GenerateBackendAPIModelsRequest `object`: The request body for GenerateBackendAPIModels.
  * ResourceName **required**

### GenerateBackendAPIModelsResponse
* GenerateBackendAPIModelsResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### GetBackendAPIModelsRequest
* GetBackendAPIModelsRequest `object`: The request body for GetBackendAPIModels.
  * ResourceName **required**

### GetBackendAPIModelsResponse
* GetBackendAPIModelsResponse `object`
  * Models
  * Status

### GetBackendAPIRequest
* GetBackendAPIRequest `object`: The request body for GetBackendAPI.
  * ResourceConfig
    * AdditionalAuthTypes
      * items [BackendAPIAuthType](#backendapiauthtype)
    * ApiName
    * ConflictResolution
      * ResolutionStrategy
    * DefaultAuthType
      * Mode
      * Settings
        * CognitoUserPoolId
        * Description
        * ExpirationTime
        * OpenIDAuthTTL
        * OpenIDClientId
        * OpenIDIatTTL
        * OpenIDIssueURL
        * OpenIDProviderName
    * Service
    * TransformSchema
  * ResourceName **required**

### GetBackendAPIResponse
* GetBackendAPIResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * ResourceConfig
    * AdditionalAuthTypes
      * items [BackendAPIAuthType](#backendapiauthtype)
    * ApiName
    * ConflictResolution
      * ResolutionStrategy
    * DefaultAuthType
      * Mode
      * Settings
        * CognitoUserPoolId
        * Description
        * ExpirationTime
        * OpenIDAuthTTL
        * OpenIDClientId
        * OpenIDIatTTL
        * OpenIDIssueURL
        * OpenIDProviderName
    * Service
    * TransformSchema
  * ResourceName

### GetBackendAuthRequest
* GetBackendAuthRequest `object`: The request body for GetBackendAuth.
  * ResourceName **required**

### GetBackendAuthResponse
* GetBackendAuthResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * ResourceConfig
    * AuthResources **required**
    * IdentityPoolConfigs
      * IdentityPoolName **required**
      * UnauthenticatedLogin **required**
    * Service **required**
    * UserPoolConfigs **required**
      * ForgotPassword
        * DeliveryMethod **required**
        * EmailSettings
          * EmailMessage
          * EmailSubject
        * SmsSettings
          * SmsMessage
      * Mfa
        * MFAMode **required**
        * Settings
          * MfaTypes
          * SmsMessage
      * OAuth
        * DomainPrefix
        * OAuthGrantType **required**
        * OAuthScopes **required**
          * items [OAuthScopesElement](#oauthscopeselement)
        * RedirectSignInURIs **required**
          * items [__string](#__string)
        * RedirectSignOutURIs **required**
          * items [__string](#__string)
        * SocialProviderSettings
          * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
      * PasswordPolicy
        * AdditionalConstraints
          * items [AdditionalConstraintsElement](#additionalconstraintselement)
        * MinimumLength **required**
      * RequiredSignUpAttributes **required**
        * items [RequiredSignUpAttributesElement](#requiredsignupattributeselement)
      * SignInMethod **required**
      * UserPoolName **required**
  * ResourceName

### GetBackendJobRequest
* GetBackendJobRequest `object`

### GetBackendJobResponse
* GetBackendJobResponse `object`
  * AppId
  * BackendEnvironmentName
  * CreateTime
  * Error
  * JobId
  * Operation
  * Status
  * UpdateTime

### GetBackendRequest
* GetBackendRequest `object`: The request body for GetBackend.
  * BackendEnvironmentName

### GetBackendResponse
* GetBackendResponse `object`
  * AmplifyMetaConfig
  * AppId
  * AppName
  * BackendEnvironmentList
    * items [__string](#__string)
  * BackendEnvironmentName
  * Error

### GetTokenRequest
* GetTokenRequest `object`

### GetTokenResponse
* GetTokenResponse `object`
  * AppId
  * ChallengeCode
  * SessionId
  * Ttl

### ListBackendJobsRequest
* ListBackendJobsRequest `object`: The request body for ListBackendJobs.
  * JobId
  * MaxResults
  * NextToken
  * Operation
  * Status

### ListBackendJobsResponse
* ListBackendJobsResponse `object`
  * Jobs
    * items [BackendJobRespObj](#backendjobrespobj)
  * NextToken

### ListOfAdditionalConstraintsElement
* ListOfAdditionalConstraintsElement `array`
  * items [AdditionalConstraintsElement](#additionalconstraintselement)

### ListOfBackendAPIAuthType
* ListOfBackendAPIAuthType `array`
  * items [BackendAPIAuthType](#backendapiauthtype)

### ListOfBackendJobRespObj
* ListOfBackendJobRespObj `array`
  * items [BackendJobRespObj](#backendjobrespobj)

### ListOfMfaTypesElement
* ListOfMfaTypesElement `array`
  * items [MfaTypesElement](#mfatypeselement)

### ListOfOAuthScopesElement
* ListOfOAuthScopesElement `array`
  * items [OAuthScopesElement](#oauthscopeselement)

### ListOfRequiredSignUpAttributesElement
* ListOfRequiredSignUpAttributesElement `array`
  * items [RequiredSignUpAttributesElement](#requiredsignupattributeselement)

### ListOf__string
* ListOf__string `array`
  * items [__string](#__string)

### LoginAuthConfigReqObj
* LoginAuthConfigReqObj `object`: The request object for this operation.
  * AwsCognitoIdentityPoolId
  * AwsCognitoRegion
  * AwsUserPoolsId
  * AwsUserPoolsWebClientId

### MFAMode
* MFAMode `string` (values: ON, OFF, OPTIONAL)

### MfaTypesElement
* MfaTypesElement `string` (values: SMS, TOTP)

### Mode
* Mode `string` (values: API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, OPENID_CONNECT)

### NotFoundException


### OAuthGrantType
* OAuthGrantType `string` (values: CODE, IMPLICIT)

### OAuthScopesElement
* OAuthScopesElement `string` (values: PHONE, EMAIL, OPENID, PROFILE, AWS_COGNITO_SIGNIN_USER_ADMIN)

### RemoveAllBackendsRequest
* RemoveAllBackendsRequest `object`: The request body for RemoveAllBackends.
  * CleanAmplifyApp

### RemoveAllBackendsResponse
* RemoveAllBackendsResponse `object`
  * AppId
  * Error
  * JobId
  * Operation
  * Status

### RemoveBackendConfigRequest
* RemoveBackendConfigRequest `object`

### RemoveBackendConfigResponse
* RemoveBackendConfigResponse `object`
  * Error

### RequiredSignUpAttributesElement
* RequiredSignUpAttributesElement `string` (values: ADDRESS, BIRTHDATE, EMAIL, FAMILY_NAME, GENDER, GIVEN_NAME, LOCALE, MIDDLE_NAME, NAME, NICKNAME, PHONE_NUMBER, PICTURE, PREFERRED_USERNAME, PROFILE, UPDATED_AT, WEBSITE, ZONE_INFO)

### ResolutionStrategy
* ResolutionStrategy `string` (values: OPTIMISTIC_CONCURRENCY, LAMBDA, AUTOMERGE, NONE)

### ResourceConfig
* ResourceConfig `object`: Defines the resource configuration for the data model in your Amplify project.

### Service
* Service `string` (values: COGNITO)

### Settings
* Settings `object`: The settings of your MFA configuration for the backend of your Amplify project.
  * MfaTypes
    * items [MfaTypesElement](#mfatypeselement)
  * SmsMessage

### SignInMethod
* SignInMethod `string` (values: EMAIL, EMAIL_AND_PHONE_NUMBER, PHONE_NUMBER, USERNAME)

### SmsSettings
* SmsSettings `object`: SMS settings for authentication.
  * SmsMessage

### SocialProviderSettings
* SocialProviderSettings `object`: The settings for using the social identity providers for access to your Amplify app.
  * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
  * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
  * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)

### Status
* Status `string` (values: LATEST, STALE)

### TooManyRequestsException


### UpdateBackendAPIRequest
* UpdateBackendAPIRequest `object`: The request body for UpdateBackendAPI.
  * ResourceConfig
    * AdditionalAuthTypes
      * items [BackendAPIAuthType](#backendapiauthtype)
    * ApiName
    * ConflictResolution
      * ResolutionStrategy
    * DefaultAuthType
      * Mode
      * Settings
        * CognitoUserPoolId
        * Description
        * ExpirationTime
        * OpenIDAuthTTL
        * OpenIDClientId
        * OpenIDIatTTL
        * OpenIDIssueURL
        * OpenIDProviderName
    * Service
    * TransformSchema
  * ResourceName **required**

### UpdateBackendAPIResponse
* UpdateBackendAPIResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### UpdateBackendAuthForgotPasswordConfig
* UpdateBackendAuthForgotPasswordConfig `object`: Describes the forgot password policy for authenticating into the Amplify app.
  * DeliveryMethod
  * EmailSettings
    * EmailMessage
    * EmailSubject
  * SmsSettings
    * SmsMessage

### UpdateBackendAuthIdentityPoolConfig
* UpdateBackendAuthIdentityPoolConfig `object`: Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
  * UnauthenticatedLogin

### UpdateBackendAuthMFAConfig
* UpdateBackendAuthMFAConfig `object`: Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.
  * MFAMode
  * Settings
    * MfaTypes
      * items [MfaTypesElement](#mfatypeselement)
    * SmsMessage

### UpdateBackendAuthOAuthConfig
* UpdateBackendAuthOAuthConfig `object`: The OAuth configurations for authenticating users into your Amplify app.
  * DomainPrefix
  * OAuthGrantType
  * OAuthScopes
    * items [OAuthScopesElement](#oauthscopeselement)
  * RedirectSignInURIs
    * items [__string](#__string)
  * RedirectSignOutURIs
    * items [__string](#__string)
  * SocialProviderSettings
    * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
    * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
    * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)

### UpdateBackendAuthPasswordPolicyConfig
* UpdateBackendAuthPasswordPolicyConfig `object`: Describes the password policy for your Amazon Cognito user pool that's configured as a part of your Amplify project.
  * AdditionalConstraints
    * items [AdditionalConstraintsElement](#additionalconstraintselement)
  * MinimumLength

### UpdateBackendAuthRequest
* UpdateBackendAuthRequest `object`: The request body for UpdateBackendAuth.
  * ResourceConfig **required**
    * AuthResources **required**
    * IdentityPoolConfigs
      * UnauthenticatedLogin
    * Service **required**
    * UserPoolConfigs **required**
      * ForgotPassword
        * DeliveryMethod
        * EmailSettings
          * EmailMessage
          * EmailSubject
        * SmsSettings
          * SmsMessage
      * Mfa
        * MFAMode
        * Settings
          * MfaTypes
          * SmsMessage
      * OAuth
        * DomainPrefix
        * OAuthGrantType
        * OAuthScopes
          * items [OAuthScopesElement](#oauthscopeselement)
        * RedirectSignInURIs
          * items [__string](#__string)
        * RedirectSignOutURIs
          * items [__string](#__string)
        * SocialProviderSettings
          * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
          * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
      * PasswordPolicy
        * AdditionalConstraints
          * items [AdditionalConstraintsElement](#additionalconstraintselement)
        * MinimumLength
  * ResourceName **required**

### UpdateBackendAuthResourceConfig
* UpdateBackendAuthResourceConfig `object`: Defines the resource configuration when updating an authentication resource in your Amplify project.
  * AuthResources **required**
  * IdentityPoolConfigs
    * UnauthenticatedLogin
  * Service **required**
  * UserPoolConfigs **required**
    * ForgotPassword
      * DeliveryMethod
      * EmailSettings
        * EmailMessage
        * EmailSubject
      * SmsSettings
        * SmsMessage
    * Mfa
      * MFAMode
      * Settings
        * MfaTypes
          * items [MfaTypesElement](#mfatypeselement)
        * SmsMessage
    * OAuth
      * DomainPrefix
      * OAuthGrantType
      * OAuthScopes
        * items [OAuthScopesElement](#oauthscopeselement)
      * RedirectSignInURIs
        * items [__string](#__string)
      * RedirectSignOutURIs
        * items [__string](#__string)
      * SocialProviderSettings
        * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
        * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
        * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
    * PasswordPolicy
      * AdditionalConstraints
        * items [AdditionalConstraintsElement](#additionalconstraintselement)
      * MinimumLength

### UpdateBackendAuthResponse
* UpdateBackendAuthResponse `object`
  * AppId
  * BackendEnvironmentName
  * Error
  * JobId
  * Operation
  * Status

### UpdateBackendAuthUserPoolConfig
* UpdateBackendAuthUserPoolConfig `object`: Describes the Amazon Cognito user pool configuration to configure the authorization resource for your Amplify project on an update.
  * ForgotPassword
    * DeliveryMethod
    * EmailSettings
      * EmailMessage
      * EmailSubject
    * SmsSettings
      * SmsMessage
  * Mfa
    * MFAMode
    * Settings
      * MfaTypes
        * items [MfaTypesElement](#mfatypeselement)
      * SmsMessage
  * OAuth
    * DomainPrefix
    * OAuthGrantType
    * OAuthScopes
      * items [OAuthScopesElement](#oauthscopeselement)
    * RedirectSignInURIs
      * items [__string](#__string)
    * RedirectSignOutURIs
      * items [__string](#__string)
    * SocialProviderSettings
      * Facebook [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
      * Google [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
      * LoginWithAmazon [BackendAuthSocialProviderConfig](#backendauthsocialproviderconfig)
  * PasswordPolicy
    * AdditionalConstraints
      * items [AdditionalConstraintsElement](#additionalconstraintselement)
    * MinimumLength

### UpdateBackendConfigRequest
* UpdateBackendConfigRequest `object`: The request body for UpdateBackendConfig.
  * LoginAuthConfig
    * AwsCognitoIdentityPoolId
    * AwsCognitoRegion
    * AwsUserPoolsId
    * AwsUserPoolsWebClientId

### UpdateBackendConfigResponse
* UpdateBackendConfigResponse `object`
  * AppId
  * BackendManagerAppId
  * Error
  * LoginAuthConfig
    * AwsCognitoIdentityPoolId
    * AwsCognitoRegion
    * AwsUserPoolsId
    * AwsUserPoolsWebClientId

### UpdateBackendJobRequest
* UpdateBackendJobRequest `object`: The request body for GetBackendJob.
  * Operation
  * Status

### UpdateBackendJobResponse
* UpdateBackendJobResponse `object`
  * AppId
  * BackendEnvironmentName
  * CreateTime
  * Error
  * JobId
  * Operation
  * Status
  * UpdateTime

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integerMin1Max25
* __integerMin1Max25 `integer`

### __string
* __string `string`


