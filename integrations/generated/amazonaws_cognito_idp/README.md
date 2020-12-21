# @datafire/amazonaws_cognito_idp

Client library for Amazon Cognito Identity Provider

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cognito_idp
```
```js
let amazonaws_cognito_idp = require('@datafire/amazonaws_cognito_idp').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Using the Amazon Cognito User Pools API, you can create a user pool to manage directories and users. You can authenticate a user to obtain tokens related to user identity and access policies.</p> <p>This API reference provides information about user pools in Amazon Cognito User Pools.</p> <p>For more information, see the Amazon Cognito Documentation.</p>

## Actions

### AddCustomAttributes



```js
amazonaws_cognito_idp.AddCustomAttributes({
  "UserPoolId": null,
  "CustomAttributes": null
}, context)
```

#### Input
* input `object`
  * CustomAttributes **required**
    * items [SchemaAttributeType](#schemaattributetype)
  * UserPoolId **required**

#### Output
* output [AddCustomAttributesResponse](#addcustomattributesresponse)

### AdminAddUserToGroup



```js
amazonaws_cognito_idp.AdminAddUserToGroup({
  "UserPoolId": null,
  "Username": null,
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * UserPoolId **required**
  * Username **required**

#### Output
*Output schema unknown*

### AdminConfirmSignUp



```js
amazonaws_cognito_idp.AdminConfirmSignUp({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * ClientMetadata
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminConfirmSignUpResponse](#adminconfirmsignupresponse)

### AdminCreateUser



```js
amazonaws_cognito_idp.AdminCreateUser({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * ClientMetadata
  * DesiredDeliveryMediums
    * items [DeliveryMediumType](#deliverymediumtype)
  * ForceAliasCreation
  * MessageAction
  * TemporaryPassword
  * UserAttributes
    * items [AttributeType](#attributetype)
  * UserPoolId **required**
  * Username **required**
  * ValidationData
    * items [AttributeType](#attributetype)

#### Output
* output [AdminCreateUserResponse](#admincreateuserresponse)

### AdminDeleteUser



```js
amazonaws_cognito_idp.AdminDeleteUser({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**
  * Username **required**

#### Output
*Output schema unknown*

### AdminDeleteUserAttributes



```js
amazonaws_cognito_idp.AdminDeleteUserAttributes({
  "UserPoolId": null,
  "Username": null,
  "UserAttributeNames": null
}, context)
```

#### Input
* input `object`
  * UserAttributeNames **required**
    * items [AttributeNameType](#attributenametype)
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminDeleteUserAttributesResponse](#admindeleteuserattributesresponse)

### AdminDisableProviderForUser



```js
amazonaws_cognito_idp.AdminDisableProviderForUser({
  "UserPoolId": null,
  "User": null
}, context)
```

#### Input
* input `object`
  * User **required**
    * ProviderAttributeName
    * ProviderAttributeValue
    * ProviderName
  * UserPoolId **required**

#### Output
* output [AdminDisableProviderForUserResponse](#admindisableproviderforuserresponse)

### AdminDisableUser



```js
amazonaws_cognito_idp.AdminDisableUser({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminDisableUserResponse](#admindisableuserresponse)

### AdminEnableUser



```js
amazonaws_cognito_idp.AdminEnableUser({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminEnableUserResponse](#adminenableuserresponse)

### AdminForgetDevice



```js
amazonaws_cognito_idp.AdminForgetDevice({
  "UserPoolId": null,
  "Username": null,
  "DeviceKey": null
}, context)
```

#### Input
* input `object`
  * DeviceKey **required**
  * UserPoolId **required**
  * Username **required**

#### Output
*Output schema unknown*

### AdminGetDevice



```js
amazonaws_cognito_idp.AdminGetDevice({
  "DeviceKey": null,
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * DeviceKey **required**
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminGetDeviceResponse](#admingetdeviceresponse)

### AdminGetUser



```js
amazonaws_cognito_idp.AdminGetUser({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminGetUserResponse](#admingetuserresponse)

### AdminInitiateAuth



```js
amazonaws_cognito_idp.AdminInitiateAuth({
  "UserPoolId": null,
  "ClientId": null,
  "AuthFlow": null
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * AuthFlow **required**
  * AuthParameters
  * ClientId **required**
  * ClientMetadata
  * ContextData
    * EncodedData
    * HttpHeaders **required**
      * items [HttpHeader](#httpheader)
    * IpAddress **required**
    * ServerName **required**
    * ServerPath **required**
  * UserPoolId **required**

#### Output
* output [AdminInitiateAuthResponse](#admininitiateauthresponse)

### AdminLinkProviderForUser



```js
amazonaws_cognito_idp.AdminLinkProviderForUser({
  "UserPoolId": null,
  "DestinationUser": null,
  "SourceUser": null
}, context)
```

#### Input
* input `object`
  * DestinationUser **required**
    * ProviderAttributeName
    * ProviderAttributeValue
    * ProviderName
  * SourceUser **required**
    * ProviderAttributeName
    * ProviderAttributeValue
    * ProviderName
  * UserPoolId **required**

#### Output
* output [AdminLinkProviderForUserResponse](#adminlinkproviderforuserresponse)

### AdminListDevices



```js
amazonaws_cognito_idp.AdminListDevices({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * Limit
  * PaginationToken
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminListDevicesResponse](#adminlistdevicesresponse)

### AdminListGroupsForUser



```js
amazonaws_cognito_idp.AdminListGroupsForUser({
  "Username": null,
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * Limit
  * NextToken
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminListGroupsForUserResponse](#adminlistgroupsforuserresponse)

### AdminListUserAuthEvents



```js
amazonaws_cognito_idp.AdminListUserAuthEvents({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminListUserAuthEventsResponse](#adminlistuserautheventsresponse)

### AdminRemoveUserFromGroup



```js
amazonaws_cognito_idp.AdminRemoveUserFromGroup({
  "UserPoolId": null,
  "Username": null,
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * UserPoolId **required**
  * Username **required**

#### Output
*Output schema unknown*

### AdminResetUserPassword



```js
amazonaws_cognito_idp.AdminResetUserPassword({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * ClientMetadata
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminResetUserPasswordResponse](#adminresetuserpasswordresponse)

### AdminRespondToAuthChallenge



```js
amazonaws_cognito_idp.AdminRespondToAuthChallenge({
  "UserPoolId": null,
  "ClientId": null,
  "ChallengeName": null
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ChallengeName **required**
  * ChallengeResponses
  * ClientId **required**
  * ClientMetadata
  * ContextData
    * EncodedData
    * HttpHeaders **required**
      * items [HttpHeader](#httpheader)
    * IpAddress **required**
    * ServerName **required**
    * ServerPath **required**
  * Session
  * UserPoolId **required**

#### Output
* output [AdminRespondToAuthChallengeResponse](#adminrespondtoauthchallengeresponse)

### AdminSetUserMFAPreference



```js
amazonaws_cognito_idp.AdminSetUserMFAPreference({
  "Username": null,
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * SMSMfaSettings
    * Enabled
    * PreferredMfa
  * SoftwareTokenMfaSettings
    * Enabled
    * PreferredMfa
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminSetUserMFAPreferenceResponse](#adminsetusermfapreferenceresponse)

### AdminSetUserPassword



```js
amazonaws_cognito_idp.AdminSetUserPassword({
  "UserPoolId": null,
  "Username": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * Password **required**
  * Permanent
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminSetUserPasswordResponse](#adminsetuserpasswordresponse)

### AdminSetUserSettings



```js
amazonaws_cognito_idp.AdminSetUserSettings({
  "UserPoolId": null,
  "Username": null,
  "MFAOptions": null
}, context)
```

#### Input
* input `object`
  * MFAOptions **required**
    * items [MFAOptionType](#mfaoptiontype)
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminSetUserSettingsResponse](#adminsetusersettingsresponse)

### AdminUpdateAuthEventFeedback



```js
amazonaws_cognito_idp.AdminUpdateAuthEventFeedback({
  "UserPoolId": null,
  "Username": null,
  "EventId": null,
  "FeedbackValue": null
}, context)
```

#### Input
* input `object`
  * EventId **required**
  * FeedbackValue **required**
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminUpdateAuthEventFeedbackResponse](#adminupdateautheventfeedbackresponse)

### AdminUpdateDeviceStatus



```js
amazonaws_cognito_idp.AdminUpdateDeviceStatus({
  "UserPoolId": null,
  "Username": null,
  "DeviceKey": null
}, context)
```

#### Input
* input `object`
  * DeviceKey **required**
  * DeviceRememberedStatus
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminUpdateDeviceStatusResponse](#adminupdatedevicestatusresponse)

### AdminUpdateUserAttributes



```js
amazonaws_cognito_idp.AdminUpdateUserAttributes({
  "UserPoolId": null,
  "Username": null,
  "UserAttributes": null
}, context)
```

#### Input
* input `object`
  * ClientMetadata
  * UserAttributes **required**
    * items [AttributeType](#attributetype)
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminUpdateUserAttributesResponse](#adminupdateuserattributesresponse)

### AdminUserGlobalSignOut



```js
amazonaws_cognito_idp.AdminUserGlobalSignOut({
  "UserPoolId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**
  * Username **required**

#### Output
* output [AdminUserGlobalSignOutResponse](#adminuserglobalsignoutresponse)

### AssociateSoftwareToken



```js
amazonaws_cognito_idp.AssociateSoftwareToken({}, context)
```

#### Input
* input `object`
  * AccessToken
  * Session

#### Output
* output [AssociateSoftwareTokenResponse](#associatesoftwaretokenresponse)

### ChangePassword



```js
amazonaws_cognito_idp.ChangePassword({
  "PreviousPassword": null,
  "ProposedPassword": null,
  "AccessToken": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * PreviousPassword **required**
  * ProposedPassword **required**

#### Output
* output [ChangePasswordResponse](#changepasswordresponse)

### ConfirmDevice



```js
amazonaws_cognito_idp.ConfirmDevice({
  "AccessToken": null,
  "DeviceKey": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * DeviceKey **required**
  * DeviceName
  * DeviceSecretVerifierConfig
    * PasswordVerifier
    * Salt

#### Output
* output [ConfirmDeviceResponse](#confirmdeviceresponse)

### ConfirmForgotPassword



```js
amazonaws_cognito_idp.ConfirmForgotPassword({
  "ClientId": null,
  "Username": null,
  "ConfirmationCode": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * ConfirmationCode **required**
  * Password **required**
  * SecretHash
  * UserContextData
    * EncodedData
  * Username **required**

#### Output
* output [ConfirmForgotPasswordResponse](#confirmforgotpasswordresponse)

### ConfirmSignUp



```js
amazonaws_cognito_idp.ConfirmSignUp({
  "ClientId": null,
  "Username": null,
  "ConfirmationCode": null
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * ConfirmationCode **required**
  * ForceAliasCreation
  * SecretHash
  * UserContextData
    * EncodedData
  * Username **required**

#### Output
* output [ConfirmSignUpResponse](#confirmsignupresponse)

### CreateGroup



```js
amazonaws_cognito_idp.CreateGroup({
  "GroupName": null,
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * Description
  * GroupName **required**
  * Precedence
  * RoleArn
  * UserPoolId **required**

#### Output
* output [CreateGroupResponse](#creategroupresponse)

### CreateIdentityProvider



```js
amazonaws_cognito_idp.CreateIdentityProvider({
  "UserPoolId": null,
  "ProviderName": null,
  "ProviderType": null,
  "ProviderDetails": null
}, context)
```

#### Input
* input `object`
  * AttributeMapping
  * IdpIdentifiers
    * items [IdpIdentifierType](#idpidentifiertype)
  * ProviderDetails **required**
  * ProviderName **required**
  * ProviderType **required**
  * UserPoolId **required**

#### Output
* output [CreateIdentityProviderResponse](#createidentityproviderresponse)

### CreateResourceServer



```js
amazonaws_cognito_idp.CreateResourceServer({
  "UserPoolId": null,
  "Identifier": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * Identifier **required**
  * Name **required**
  * Scopes
    * items [ResourceServerScopeType](#resourceserverscopetype)
  * UserPoolId **required**

#### Output
* output [CreateResourceServerResponse](#createresourceserverresponse)

### CreateUserImportJob



```js
amazonaws_cognito_idp.CreateUserImportJob({
  "JobName": null,
  "UserPoolId": null,
  "CloudWatchLogsRoleArn": null
}, context)
```

#### Input
* input `object`
  * CloudWatchLogsRoleArn **required**
  * JobName **required**
  * UserPoolId **required**

#### Output
* output [CreateUserImportJobResponse](#createuserimportjobresponse)

### CreateUserPool



```js
amazonaws_cognito_idp.CreateUserPool({
  "PoolName": null
}, context)
```

#### Input
* input `object`
  * AccountRecoverySetting
    * RecoveryMechanisms
      * items [RecoveryOptionType](#recoveryoptiontype)
  * AdminCreateUserConfig
    * AllowAdminCreateUserOnly
    * InviteMessageTemplate
      * EmailMessage
      * EmailSubject
      * SMSMessage
    * UnusedAccountValidityDays
  * AliasAttributes
    * items [AliasAttributeType](#aliasattributetype)
  * AutoVerifiedAttributes
    * items [VerifiedAttributeType](#verifiedattributetype)
  * DeviceConfiguration
    * ChallengeRequiredOnNewDevice
    * DeviceOnlyRememberedOnUserPrompt
  * EmailConfiguration
    * ConfigurationSet
    * EmailSendingAccount
    * From
    * ReplyToEmailAddress
    * SourceArn
  * EmailVerificationMessage
  * EmailVerificationSubject
  * LambdaConfig
    * CreateAuthChallenge
    * CustomEmailSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * CustomMessage
    * CustomSMSSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * DefineAuthChallenge
    * KMSKeyID
    * PostAuthentication
    * PostConfirmation
    * PreAuthentication
    * PreSignUp
    * PreTokenGeneration
    * UserMigration
    * VerifyAuthChallengeResponse
  * MfaConfiguration
  * Policies
    * PasswordPolicy
      * MinimumLength
      * RequireLowercase
      * RequireNumbers
      * RequireSymbols
      * RequireUppercase
      * TemporaryPasswordValidityDays
  * PoolName **required**
  * Schema
    * items [SchemaAttributeType](#schemaattributetype)
  * SmsAuthenticationMessage
  * SmsConfiguration
    * ExternalId
    * SnsCallerArn **required**
  * SmsVerificationMessage
  * UserPoolAddOns
    * AdvancedSecurityMode **required**
  * UserPoolTags
  * UsernameAttributes
    * items [UsernameAttributeType](#usernameattributetype)
  * UsernameConfiguration
    * CaseSensitive **required**
  * VerificationMessageTemplate
    * DefaultEmailOption
    * EmailMessage
    * EmailMessageByLink
    * EmailSubject
    * EmailSubjectByLink
    * SmsMessage

#### Output
* output [CreateUserPoolResponse](#createuserpoolresponse)

### CreateUserPoolClient



```js
amazonaws_cognito_idp.CreateUserPoolClient({
  "UserPoolId": null,
  "ClientName": null
}, context)
```

#### Input
* input `object`
  * AccessTokenValidity
  * AllowedOAuthFlows
    * items [OAuthFlowType](#oauthflowtype)
  * AllowedOAuthFlowsUserPoolClient
  * AllowedOAuthScopes
    * items [ScopeType](#scopetype)
  * AnalyticsConfiguration
    * ApplicationArn
    * ApplicationId
    * ExternalId
    * RoleArn
    * UserDataShared
  * CallbackURLs
    * items [RedirectUrlType](#redirecturltype)
  * ClientName **required**
  * DefaultRedirectURI
  * ExplicitAuthFlows
    * items [ExplicitAuthFlowsType](#explicitauthflowstype)
  * GenerateSecret
  * IdTokenValidity
  * LogoutURLs
    * items [RedirectUrlType](#redirecturltype)
  * PreventUserExistenceErrors
  * ReadAttributes
    * items [ClientPermissionType](#clientpermissiontype)
  * RefreshTokenValidity
  * SupportedIdentityProviders
    * items [ProviderNameType](#providernametype)
  * TokenValidityUnits
    * AccessToken
    * IdToken
    * RefreshToken
  * UserPoolId **required**
  * WriteAttributes
    * items [ClientPermissionType](#clientpermissiontype)

#### Output
* output [CreateUserPoolClientResponse](#createuserpoolclientresponse)

### CreateUserPoolDomain



```js
amazonaws_cognito_idp.CreateUserPoolDomain({
  "Domain": null,
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * CustomDomainConfig
    * CertificateArn **required**
  * Domain **required**
  * UserPoolId **required**

#### Output
* output [CreateUserPoolDomainResponse](#createuserpooldomainresponse)

### DeleteGroup



```js
amazonaws_cognito_idp.DeleteGroup({
  "GroupName": null,
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * UserPoolId **required**

#### Output
*Output schema unknown*

### DeleteIdentityProvider



```js
amazonaws_cognito_idp.DeleteIdentityProvider({
  "UserPoolId": null,
  "ProviderName": null
}, context)
```

#### Input
* input `object`
  * ProviderName **required**
  * UserPoolId **required**

#### Output
*Output schema unknown*

### DeleteResourceServer



```js
amazonaws_cognito_idp.DeleteResourceServer({
  "UserPoolId": null,
  "Identifier": null
}, context)
```

#### Input
* input `object`
  * Identifier **required**
  * UserPoolId **required**

#### Output
*Output schema unknown*

### DeleteUser



```js
amazonaws_cognito_idp.DeleteUser({
  "AccessToken": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**

#### Output
*Output schema unknown*

### DeleteUserAttributes



```js
amazonaws_cognito_idp.DeleteUserAttributes({
  "UserAttributeNames": null,
  "AccessToken": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * UserAttributeNames **required**
    * items [AttributeNameType](#attributenametype)

#### Output
* output [DeleteUserAttributesResponse](#deleteuserattributesresponse)

### DeleteUserPool



```js
amazonaws_cognito_idp.DeleteUserPool({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**

#### Output
*Output schema unknown*

### DeleteUserPoolClient



```js
amazonaws_cognito_idp.DeleteUserPoolClient({
  "UserPoolId": null,
  "ClientId": null
}, context)
```

#### Input
* input `object`
  * ClientId **required**
  * UserPoolId **required**

#### Output
*Output schema unknown*

### DeleteUserPoolDomain



```js
amazonaws_cognito_idp.DeleteUserPoolDomain({
  "Domain": null,
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * Domain **required**
  * UserPoolId **required**

#### Output
* output [DeleteUserPoolDomainResponse](#deleteuserpooldomainresponse)

### DescribeIdentityProvider



```js
amazonaws_cognito_idp.DescribeIdentityProvider({
  "UserPoolId": null,
  "ProviderName": null
}, context)
```

#### Input
* input `object`
  * ProviderName **required**
  * UserPoolId **required**

#### Output
* output [DescribeIdentityProviderResponse](#describeidentityproviderresponse)

### DescribeResourceServer



```js
amazonaws_cognito_idp.DescribeResourceServer({
  "UserPoolId": null,
  "Identifier": null
}, context)
```

#### Input
* input `object`
  * Identifier **required**
  * UserPoolId **required**

#### Output
* output [DescribeResourceServerResponse](#describeresourceserverresponse)

### DescribeRiskConfiguration



```js
amazonaws_cognito_idp.DescribeRiskConfiguration({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * ClientId
  * UserPoolId **required**

#### Output
* output [DescribeRiskConfigurationResponse](#describeriskconfigurationresponse)

### DescribeUserImportJob



```js
amazonaws_cognito_idp.DescribeUserImportJob({
  "UserPoolId": null,
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * UserPoolId **required**

#### Output
* output [DescribeUserImportJobResponse](#describeuserimportjobresponse)

### DescribeUserPool



```js
amazonaws_cognito_idp.DescribeUserPool({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**

#### Output
* output [DescribeUserPoolResponse](#describeuserpoolresponse)

### DescribeUserPoolClient



```js
amazonaws_cognito_idp.DescribeUserPoolClient({
  "UserPoolId": null,
  "ClientId": null
}, context)
```

#### Input
* input `object`
  * ClientId **required**
  * UserPoolId **required**

#### Output
* output [DescribeUserPoolClientResponse](#describeuserpoolclientresponse)

### DescribeUserPoolDomain



```js
amazonaws_cognito_idp.DescribeUserPoolDomain({
  "Domain": null
}, context)
```

#### Input
* input `object`
  * Domain **required**

#### Output
* output [DescribeUserPoolDomainResponse](#describeuserpooldomainresponse)

### ForgetDevice



```js
amazonaws_cognito_idp.ForgetDevice({
  "DeviceKey": null
}, context)
```

#### Input
* input `object`
  * AccessToken
  * DeviceKey **required**

#### Output
*Output schema unknown*

### ForgotPassword



```js
amazonaws_cognito_idp.ForgotPassword({
  "ClientId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * SecretHash
  * UserContextData
    * EncodedData
  * Username **required**

#### Output
* output [ForgotPasswordResponse](#forgotpasswordresponse)

### GetCSVHeader



```js
amazonaws_cognito_idp.GetCSVHeader({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**

#### Output
* output [GetCSVHeaderResponse](#getcsvheaderresponse)

### GetDevice



```js
amazonaws_cognito_idp.GetDevice({
  "DeviceKey": null
}, context)
```

#### Input
* input `object`
  * AccessToken
  * DeviceKey **required**

#### Output
* output [GetDeviceResponse](#getdeviceresponse)

### GetGroup



```js
amazonaws_cognito_idp.GetGroup({
  "GroupName": null,
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * GroupName **required**
  * UserPoolId **required**

#### Output
* output [GetGroupResponse](#getgroupresponse)

### GetIdentityProviderByIdentifier



```js
amazonaws_cognito_idp.GetIdentityProviderByIdentifier({
  "UserPoolId": null,
  "IdpIdentifier": null
}, context)
```

#### Input
* input `object`
  * IdpIdentifier **required**
  * UserPoolId **required**

#### Output
* output [GetIdentityProviderByIdentifierResponse](#getidentityproviderbyidentifierresponse)

### GetSigningCertificate



```js
amazonaws_cognito_idp.GetSigningCertificate({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**

#### Output
* output [GetSigningCertificateResponse](#getsigningcertificateresponse)

### GetUICustomization



```js
amazonaws_cognito_idp.GetUICustomization({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * ClientId
  * UserPoolId **required**

#### Output
* output [GetUICustomizationResponse](#getuicustomizationresponse)

### GetUser



```js
amazonaws_cognito_idp.GetUser({
  "AccessToken": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**

#### Output
* output [GetUserResponse](#getuserresponse)

### GetUserAttributeVerificationCode



```js
amazonaws_cognito_idp.GetUserAttributeVerificationCode({
  "AccessToken": null,
  "AttributeName": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * AttributeName **required**
  * ClientMetadata

#### Output
* output [GetUserAttributeVerificationCodeResponse](#getuserattributeverificationcoderesponse)

### GetUserPoolMfaConfig



```js
amazonaws_cognito_idp.GetUserPoolMfaConfig({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * UserPoolId **required**

#### Output
* output [GetUserPoolMfaConfigResponse](#getuserpoolmfaconfigresponse)

### GlobalSignOut



```js
amazonaws_cognito_idp.GlobalSignOut({
  "AccessToken": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**

#### Output
* output [GlobalSignOutResponse](#globalsignoutresponse)

### InitiateAuth



```js
amazonaws_cognito_idp.InitiateAuth({
  "AuthFlow": null,
  "ClientId": null
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * AuthFlow **required**
  * AuthParameters
  * ClientId **required**
  * ClientMetadata
  * UserContextData
    * EncodedData

#### Output
* output [InitiateAuthResponse](#initiateauthresponse)

### ListDevices



```js
amazonaws_cognito_idp.ListDevices({
  "AccessToken": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * Limit
  * PaginationToken

#### Output
* output [ListDevicesResponse](#listdevicesresponse)

### ListGroups



```js
amazonaws_cognito_idp.ListGroups({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * Limit
  * NextToken
  * UserPoolId **required**

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### ListIdentityProviders



```js
amazonaws_cognito_idp.ListIdentityProviders({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * UserPoolId **required**

#### Output
* output [ListIdentityProvidersResponse](#listidentityprovidersresponse)

### ListResourceServers



```js
amazonaws_cognito_idp.ListResourceServers({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * UserPoolId **required**

#### Output
* output [ListResourceServersResponse](#listresourceserversresponse)

### ListTagsForResource



```js
amazonaws_cognito_idp.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListUserImportJobs



```js
amazonaws_cognito_idp.ListUserImportJobs({
  "UserPoolId": null,
  "MaxResults": null
}, context)
```

#### Input
* input `object`
  * MaxResults **required**
  * PaginationToken
  * UserPoolId **required**

#### Output
* output [ListUserImportJobsResponse](#listuserimportjobsresponse)

### ListUserPoolClients



```js
amazonaws_cognito_idp.ListUserPoolClients({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * UserPoolId **required**

#### Output
* output [ListUserPoolClientsResponse](#listuserpoolclientsresponse)

### ListUserPools



```js
amazonaws_cognito_idp.ListUserPools({
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
* output [ListUserPoolsResponse](#listuserpoolsresponse)

### ListUsers



```js
amazonaws_cognito_idp.ListUsers({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * PaginationToken `string`
  * AttributesToGet
    * items [AttributeNameType](#attributenametype)
  * Filter
  * Limit
  * PaginationToken
  * UserPoolId **required**

#### Output
* output [ListUsersResponse](#listusersresponse)

### ListUsersInGroup



```js
amazonaws_cognito_idp.ListUsersInGroup({
  "UserPoolId": null,
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * GroupName **required**
  * Limit
  * NextToken
  * UserPoolId **required**

#### Output
* output [ListUsersInGroupResponse](#listusersingroupresponse)

### ResendConfirmationCode



```js
amazonaws_cognito_idp.ResendConfirmationCode({
  "ClientId": null,
  "Username": null
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * SecretHash
  * UserContextData
    * EncodedData
  * Username **required**

#### Output
* output [ResendConfirmationCodeResponse](#resendconfirmationcoderesponse)

### RespondToAuthChallenge



```js
amazonaws_cognito_idp.RespondToAuthChallenge({
  "ClientId": null,
  "ChallengeName": null
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ChallengeName **required**
  * ChallengeResponses
  * ClientId **required**
  * ClientMetadata
  * Session
  * UserContextData
    * EncodedData

#### Output
* output [RespondToAuthChallengeResponse](#respondtoauthchallengeresponse)

### SetRiskConfiguration



```js
amazonaws_cognito_idp.SetRiskConfiguration({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * AccountTakeoverRiskConfiguration
    * Actions **required**
      * HighAction
        * EventAction **required**
        * Notify **required**
      * LowAction
        * EventAction **required**
        * Notify **required**
      * MediumAction
        * EventAction **required**
        * Notify **required**
    * NotifyConfiguration
      * BlockEmail
        * HtmlBody
        * Subject **required**
        * TextBody
      * From
      * MfaEmail
        * HtmlBody
        * Subject **required**
        * TextBody
      * NoActionEmail
        * HtmlBody
        * Subject **required**
        * TextBody
      * ReplyTo
      * SourceArn **required**
  * ClientId
  * CompromisedCredentialsRiskConfiguration
    * Actions **required**
      * EventAction **required**
    * EventFilter
      * items [EventFilterType](#eventfiltertype)
  * RiskExceptionConfiguration
    * BlockedIPRangeList
      * items [StringType](#stringtype)
    * SkippedIPRangeList
      * items [StringType](#stringtype)
  * UserPoolId **required**

#### Output
* output [SetRiskConfigurationResponse](#setriskconfigurationresponse)

### SetUICustomization



```js
amazonaws_cognito_idp.SetUICustomization({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * CSS
  * ClientId
  * ImageFile
  * UserPoolId **required**

#### Output
* output [SetUICustomizationResponse](#setuicustomizationresponse)

### SetUserMFAPreference



```js
amazonaws_cognito_idp.SetUserMFAPreference({
  "AccessToken": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * SMSMfaSettings
    * Enabled
    * PreferredMfa
  * SoftwareTokenMfaSettings
    * Enabled
    * PreferredMfa

#### Output
* output [SetUserMFAPreferenceResponse](#setusermfapreferenceresponse)

### SetUserPoolMfaConfig



```js
amazonaws_cognito_idp.SetUserPoolMfaConfig({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * MfaConfiguration
  * SmsMfaConfiguration
    * SmsAuthenticationMessage
    * SmsConfiguration
      * ExternalId
      * SnsCallerArn **required**
  * SoftwareTokenMfaConfiguration
    * Enabled
  * UserPoolId **required**

#### Output
* output [SetUserPoolMfaConfigResponse](#setuserpoolmfaconfigresponse)

### SetUserSettings



```js
amazonaws_cognito_idp.SetUserSettings({
  "AccessToken": null,
  "MFAOptions": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * MFAOptions **required**
    * items [MFAOptionType](#mfaoptiontype)

#### Output
* output [SetUserSettingsResponse](#setusersettingsresponse)

### SignUp



```js
amazonaws_cognito_idp.SignUp({
  "ClientId": null,
  "Username": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * Password **required**
  * SecretHash
  * UserAttributes
    * items [AttributeType](#attributetype)
  * UserContextData
    * EncodedData
  * Username **required**
  * ValidationData
    * items [AttributeType](#attributetype)

#### Output
* output [SignUpResponse](#signupresponse)

### StartUserImportJob



```js
amazonaws_cognito_idp.StartUserImportJob({
  "UserPoolId": null,
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * UserPoolId **required**

#### Output
* output [StartUserImportJobResponse](#startuserimportjobresponse)

### StopUserImportJob



```js
amazonaws_cognito_idp.StopUserImportJob({
  "UserPoolId": null,
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * UserPoolId **required**

#### Output
* output [StopUserImportJobResponse](#stopuserimportjobresponse)

### TagResource



```js
amazonaws_cognito_idp.TagResource({
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

### UntagResource



```js
amazonaws_cognito_idp.UntagResource({
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

### UpdateAuthEventFeedback



```js
amazonaws_cognito_idp.UpdateAuthEventFeedback({
  "UserPoolId": null,
  "Username": null,
  "EventId": null,
  "FeedbackToken": null,
  "FeedbackValue": null
}, context)
```

#### Input
* input `object`
  * EventId **required**
  * FeedbackToken **required**
  * FeedbackValue **required**
  * UserPoolId **required**
  * Username **required**

#### Output
* output [UpdateAuthEventFeedbackResponse](#updateautheventfeedbackresponse)

### UpdateDeviceStatus



```js
amazonaws_cognito_idp.UpdateDeviceStatus({
  "AccessToken": null,
  "DeviceKey": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * DeviceKey **required**
  * DeviceRememberedStatus

#### Output
* output [UpdateDeviceStatusResponse](#updatedevicestatusresponse)

### UpdateGroup



```js
amazonaws_cognito_idp.UpdateGroup({
  "GroupName": null,
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * Description
  * GroupName **required**
  * Precedence
  * RoleArn
  * UserPoolId **required**

#### Output
* output [UpdateGroupResponse](#updategroupresponse)

### UpdateIdentityProvider



```js
amazonaws_cognito_idp.UpdateIdentityProvider({
  "UserPoolId": null,
  "ProviderName": null
}, context)
```

#### Input
* input `object`
  * AttributeMapping
  * IdpIdentifiers
    * items [IdpIdentifierType](#idpidentifiertype)
  * ProviderDetails
  * ProviderName **required**
  * UserPoolId **required**

#### Output
* output [UpdateIdentityProviderResponse](#updateidentityproviderresponse)

### UpdateResourceServer



```js
amazonaws_cognito_idp.UpdateResourceServer({
  "UserPoolId": null,
  "Identifier": null,
  "Name": null
}, context)
```

#### Input
* input `object`
  * Identifier **required**
  * Name **required**
  * Scopes
    * items [ResourceServerScopeType](#resourceserverscopetype)
  * UserPoolId **required**

#### Output
* output [UpdateResourceServerResponse](#updateresourceserverresponse)

### UpdateUserAttributes



```js
amazonaws_cognito_idp.UpdateUserAttributes({
  "UserAttributes": null,
  "AccessToken": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * ClientMetadata
  * UserAttributes **required**
    * items [AttributeType](#attributetype)

#### Output
* output [UpdateUserAttributesResponse](#updateuserattributesresponse)

### UpdateUserPool



```js
amazonaws_cognito_idp.UpdateUserPool({
  "UserPoolId": null
}, context)
```

#### Input
* input `object`
  * AccountRecoverySetting
    * RecoveryMechanisms
      * items [RecoveryOptionType](#recoveryoptiontype)
  * AdminCreateUserConfig
    * AllowAdminCreateUserOnly
    * InviteMessageTemplate
      * EmailMessage
      * EmailSubject
      * SMSMessage
    * UnusedAccountValidityDays
  * AutoVerifiedAttributes
    * items [VerifiedAttributeType](#verifiedattributetype)
  * DeviceConfiguration
    * ChallengeRequiredOnNewDevice
    * DeviceOnlyRememberedOnUserPrompt
  * EmailConfiguration
    * ConfigurationSet
    * EmailSendingAccount
    * From
    * ReplyToEmailAddress
    * SourceArn
  * EmailVerificationMessage
  * EmailVerificationSubject
  * LambdaConfig
    * CreateAuthChallenge
    * CustomEmailSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * CustomMessage
    * CustomSMSSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * DefineAuthChallenge
    * KMSKeyID
    * PostAuthentication
    * PostConfirmation
    * PreAuthentication
    * PreSignUp
    * PreTokenGeneration
    * UserMigration
    * VerifyAuthChallengeResponse
  * MfaConfiguration
  * Policies
    * PasswordPolicy
      * MinimumLength
      * RequireLowercase
      * RequireNumbers
      * RequireSymbols
      * RequireUppercase
      * TemporaryPasswordValidityDays
  * SmsAuthenticationMessage
  * SmsConfiguration
    * ExternalId
    * SnsCallerArn **required**
  * SmsVerificationMessage
  * UserPoolAddOns
    * AdvancedSecurityMode **required**
  * UserPoolId **required**
  * UserPoolTags
  * VerificationMessageTemplate
    * DefaultEmailOption
    * EmailMessage
    * EmailMessageByLink
    * EmailSubject
    * EmailSubjectByLink
    * SmsMessage

#### Output
* output [UpdateUserPoolResponse](#updateuserpoolresponse)

### UpdateUserPoolClient



```js
amazonaws_cognito_idp.UpdateUserPoolClient({
  "UserPoolId": null,
  "ClientId": null
}, context)
```

#### Input
* input `object`
  * AccessTokenValidity
  * AllowedOAuthFlows
    * items [OAuthFlowType](#oauthflowtype)
  * AllowedOAuthFlowsUserPoolClient
  * AllowedOAuthScopes
    * items [ScopeType](#scopetype)
  * AnalyticsConfiguration
    * ApplicationArn
    * ApplicationId
    * ExternalId
    * RoleArn
    * UserDataShared
  * CallbackURLs
    * items [RedirectUrlType](#redirecturltype)
  * ClientId **required**
  * ClientName
  * DefaultRedirectURI
  * ExplicitAuthFlows
    * items [ExplicitAuthFlowsType](#explicitauthflowstype)
  * IdTokenValidity
  * LogoutURLs
    * items [RedirectUrlType](#redirecturltype)
  * PreventUserExistenceErrors
  * ReadAttributes
    * items [ClientPermissionType](#clientpermissiontype)
  * RefreshTokenValidity
  * SupportedIdentityProviders
    * items [ProviderNameType](#providernametype)
  * TokenValidityUnits
    * AccessToken
    * IdToken
    * RefreshToken
  * UserPoolId **required**
  * WriteAttributes
    * items [ClientPermissionType](#clientpermissiontype)

#### Output
* output [UpdateUserPoolClientResponse](#updateuserpoolclientresponse)

### UpdateUserPoolDomain



```js
amazonaws_cognito_idp.UpdateUserPoolDomain({
  "Domain": null,
  "UserPoolId": null,
  "CustomDomainConfig": null
}, context)
```

#### Input
* input `object`
  * CustomDomainConfig **required**
    * CertificateArn **required**
  * Domain **required**
  * UserPoolId **required**

#### Output
* output [UpdateUserPoolDomainResponse](#updateuserpooldomainresponse)

### VerifySoftwareToken



```js
amazonaws_cognito_idp.VerifySoftwareToken({
  "UserCode": null
}, context)
```

#### Input
* input `object`
  * AccessToken
  * FriendlyDeviceName
  * Session
  * UserCode **required**

#### Output
* output [VerifySoftwareTokenResponse](#verifysoftwaretokenresponse)

### VerifyUserAttribute



```js
amazonaws_cognito_idp.VerifyUserAttribute({
  "AccessToken": null,
  "AttributeName": null,
  "Code": null
}, context)
```

#### Input
* input `object`
  * AccessToken **required**
  * AttributeName **required**
  * Code **required**

#### Output
* output [VerifyUserAttributeResponse](#verifyuserattributeresponse)



## Definitions

### AWSAccountIdType
* AWSAccountIdType `string`

### AccessTokenValidityType
* AccessTokenValidityType `integer`

### AccountRecoverySettingType
* AccountRecoverySettingType `object`: The data type for <code>AccountRecoverySetting</code>.
  * RecoveryMechanisms
    * items [RecoveryOptionType](#recoveryoptiontype)

### AccountTakeoverActionNotifyType
* AccountTakeoverActionNotifyType `boolean`

### AccountTakeoverActionType
* AccountTakeoverActionType `object`: Account takeover action type.
  * EventAction **required**
  * Notify **required**

### AccountTakeoverActionsType
* AccountTakeoverActionsType `object`: Account takeover actions type.
  * HighAction
    * EventAction **required**
    * Notify **required**
  * LowAction
    * EventAction **required**
    * Notify **required**
  * MediumAction
    * EventAction **required**
    * Notify **required**

### AccountTakeoverEventActionType
* AccountTakeoverEventActionType `string` (values: BLOCK, MFA_IF_CONFIGURED, MFA_REQUIRED, NO_ACTION)

### AccountTakeoverRiskConfigurationType
* AccountTakeoverRiskConfigurationType `object`: Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
  * Actions **required**
    * HighAction
      * EventAction **required**
      * Notify **required**
    * LowAction
      * EventAction **required**
      * Notify **required**
    * MediumAction
      * EventAction **required**
      * Notify **required**
  * NotifyConfiguration
    * BlockEmail
      * HtmlBody
      * Subject **required**
      * TextBody
    * From
    * MfaEmail
      * HtmlBody
      * Subject **required**
      * TextBody
    * NoActionEmail
      * HtmlBody
      * Subject **required**
      * TextBody
    * ReplyTo
    * SourceArn **required**

### AddCustomAttributesRequest
* AddCustomAttributesRequest `object`: Represents the request to add custom attributes.
  * CustomAttributes **required**
    * items [SchemaAttributeType](#schemaattributetype)
  * UserPoolId **required**

### AddCustomAttributesResponse
* AddCustomAttributesResponse `object`: Represents the response from the server for the request to add custom attributes.

### AdminAddUserToGroupRequest
* AdminAddUserToGroupRequest `object`
  * GroupName **required**
  * UserPoolId **required**
  * Username **required**

### AdminConfirmSignUpRequest
* AdminConfirmSignUpRequest `object`: Represents the request to confirm user registration.
  * ClientMetadata
  * UserPoolId **required**
  * Username **required**

### AdminConfirmSignUpResponse
* AdminConfirmSignUpResponse `object`: Represents the response from the server for the request to confirm registration.

### AdminCreateUserConfigType
* AdminCreateUserConfigType `object`: The configuration for creating a new user profile.
  * AllowAdminCreateUserOnly
  * InviteMessageTemplate
    * EmailMessage
    * EmailSubject
    * SMSMessage
  * UnusedAccountValidityDays

### AdminCreateUserRequest
* AdminCreateUserRequest `object`: Represents the request to create a user in the specified user pool.
  * ClientMetadata
  * DesiredDeliveryMediums
    * items [DeliveryMediumType](#deliverymediumtype)
  * ForceAliasCreation
  * MessageAction
  * TemporaryPassword
  * UserAttributes
    * items [AttributeType](#attributetype)
  * UserPoolId **required**
  * Username **required**
  * ValidationData
    * items [AttributeType](#attributetype)

### AdminCreateUserResponse
* AdminCreateUserResponse `object`: Represents the response from the server to the request to create the user.
  * User
    * Attributes
      * items [AttributeType](#attributetype)
    * Enabled
    * MFAOptions
      * items [MFAOptionType](#mfaoptiontype)
    * UserCreateDate
    * UserLastModifiedDate
    * UserStatus
    * Username

### AdminCreateUserUnusedAccountValidityDaysType
* AdminCreateUserUnusedAccountValidityDaysType `integer`

### AdminDeleteUserAttributesRequest
* AdminDeleteUserAttributesRequest `object`: Represents the request to delete user attributes as an administrator.
  * UserAttributeNames **required**
    * items [AttributeNameType](#attributenametype)
  * UserPoolId **required**
  * Username **required**

### AdminDeleteUserAttributesResponse
* AdminDeleteUserAttributesResponse `object`: Represents the response received from the server for a request to delete user attributes.

### AdminDeleteUserRequest
* AdminDeleteUserRequest `object`: Represents the request to delete a user as an administrator.
  * UserPoolId **required**
  * Username **required**

### AdminDisableProviderForUserRequest
* AdminDisableProviderForUserRequest `object`
  * User **required**
    * ProviderAttributeName
    * ProviderAttributeValue
    * ProviderName
  * UserPoolId **required**

### AdminDisableProviderForUserResponse
* AdminDisableProviderForUserResponse `object`

### AdminDisableUserRequest
* AdminDisableUserRequest `object`: Represents the request to disable any user as an administrator.
  * UserPoolId **required**
  * Username **required**

### AdminDisableUserResponse
* AdminDisableUserResponse `object`: Represents the response received from the server to disable the user as an administrator.

### AdminEnableUserRequest
* AdminEnableUserRequest `object`: Represents the request that enables the user as an administrator.
  * UserPoolId **required**
  * Username **required**

### AdminEnableUserResponse
* AdminEnableUserResponse `object`: Represents the response from the server for the request to enable a user as an administrator.

### AdminForgetDeviceRequest
* AdminForgetDeviceRequest `object`: Sends the forgot device request, as an administrator.
  * DeviceKey **required**
  * UserPoolId **required**
  * Username **required**

### AdminGetDeviceRequest
* AdminGetDeviceRequest `object`: Represents the request to get the device, as an administrator.
  * DeviceKey **required**
  * UserPoolId **required**
  * Username **required**

### AdminGetDeviceResponse
* AdminGetDeviceResponse `object`: Gets the device response, as an administrator.
  * Device **required**
    * DeviceAttributes
      * items [AttributeType](#attributetype)
    * DeviceCreateDate
    * DeviceKey
    * DeviceLastAuthenticatedDate
    * DeviceLastModifiedDate

### AdminGetUserRequest
* AdminGetUserRequest `object`: Represents the request to get the specified user as an administrator.
  * UserPoolId **required**
  * Username **required**

### AdminGetUserResponse
* AdminGetUserResponse `object`: Represents the response from the server from the request to get the specified user as an administrator.
  * Enabled
  * MFAOptions
    * items [MFAOptionType](#mfaoptiontype)
  * PreferredMfaSetting
  * UserAttributes
    * items [AttributeType](#attributetype)
  * UserCreateDate
  * UserLastModifiedDate
  * UserMFASettingList
    * items [StringType](#stringtype)
  * UserStatus
  * Username **required**

### AdminInitiateAuthRequest
* AdminInitiateAuthRequest `object`: Initiates the authorization request, as an administrator.
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * AuthFlow **required**
  * AuthParameters
  * ClientId **required**
  * ClientMetadata
  * ContextData
    * EncodedData
    * HttpHeaders **required**
      * items [HttpHeader](#httpheader)
    * IpAddress **required**
    * ServerName **required**
    * ServerPath **required**
  * UserPoolId **required**

### AdminInitiateAuthResponse
* AdminInitiateAuthResponse `object`: Initiates the authentication response, as an administrator.
  * AuthenticationResult
    * AccessToken
    * ExpiresIn
    * IdToken
    * NewDeviceMetadata
      * DeviceGroupKey
      * DeviceKey
    * RefreshToken
    * TokenType
  * ChallengeName
  * ChallengeParameters
  * Session

### AdminLinkProviderForUserRequest
* AdminLinkProviderForUserRequest `object`
  * DestinationUser **required**
    * ProviderAttributeName
    * ProviderAttributeValue
    * ProviderName
  * SourceUser **required**
    * ProviderAttributeName
    * ProviderAttributeValue
    * ProviderName
  * UserPoolId **required**

### AdminLinkProviderForUserResponse
* AdminLinkProviderForUserResponse `object`

### AdminListDevicesRequest
* AdminListDevicesRequest `object`: Represents the request to list devices, as an administrator.
  * Limit
  * PaginationToken
  * UserPoolId **required**
  * Username **required**

### AdminListDevicesResponse
* AdminListDevicesResponse `object`: Lists the device's response, as an administrator.
  * Devices
    * items [DeviceType](#devicetype)
  * PaginationToken

### AdminListGroupsForUserRequest
* AdminListGroupsForUserRequest `object`
  * Limit
  * NextToken
  * UserPoolId **required**
  * Username **required**

### AdminListGroupsForUserResponse
* AdminListGroupsForUserResponse `object`
  * Groups
    * items [GroupType](#grouptype)
  * NextToken

### AdminListUserAuthEventsRequest
* AdminListUserAuthEventsRequest `object`
  * MaxResults
  * NextToken
  * UserPoolId **required**
  * Username **required**

### AdminListUserAuthEventsResponse
* AdminListUserAuthEventsResponse `object`
  * AuthEvents
    * items [AuthEventType](#autheventtype)
  * NextToken

### AdminRemoveUserFromGroupRequest
* AdminRemoveUserFromGroupRequest `object`
  * GroupName **required**
  * UserPoolId **required**
  * Username **required**

### AdminResetUserPasswordRequest
* AdminResetUserPasswordRequest `object`: Represents the request to reset a user's password as an administrator.
  * ClientMetadata
  * UserPoolId **required**
  * Username **required**

### AdminResetUserPasswordResponse
* AdminResetUserPasswordResponse `object`: Represents the response from the server to reset a user password as an administrator.

### AdminRespondToAuthChallengeRequest
* AdminRespondToAuthChallengeRequest `object`: The request to respond to the authentication challenge, as an administrator.
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ChallengeName **required**
  * ChallengeResponses
  * ClientId **required**
  * ClientMetadata
  * ContextData
    * EncodedData
    * HttpHeaders **required**
      * items [HttpHeader](#httpheader)
    * IpAddress **required**
    * ServerName **required**
    * ServerPath **required**
  * Session
  * UserPoolId **required**

### AdminRespondToAuthChallengeResponse
* AdminRespondToAuthChallengeResponse `object`: Responds to the authentication challenge, as an administrator.
  * AuthenticationResult
    * AccessToken
    * ExpiresIn
    * IdToken
    * NewDeviceMetadata
      * DeviceGroupKey
      * DeviceKey
    * RefreshToken
    * TokenType
  * ChallengeName
  * ChallengeParameters
  * Session

### AdminSetUserMFAPreferenceRequest
* AdminSetUserMFAPreferenceRequest `object`
  * SMSMfaSettings
    * Enabled
    * PreferredMfa
  * SoftwareTokenMfaSettings
    * Enabled
    * PreferredMfa
  * UserPoolId **required**
  * Username **required**

### AdminSetUserMFAPreferenceResponse
* AdminSetUserMFAPreferenceResponse `object`

### AdminSetUserPasswordRequest
* AdminSetUserPasswordRequest `object`
  * Password **required**
  * Permanent
  * UserPoolId **required**
  * Username **required**

### AdminSetUserPasswordResponse
* AdminSetUserPasswordResponse `object`

### AdminSetUserSettingsRequest
* AdminSetUserSettingsRequest `object`: You can use this parameter to set an MFA configuration that uses the SMS delivery medium.
  * MFAOptions **required**
    * items [MFAOptionType](#mfaoptiontype)
  * UserPoolId **required**
  * Username **required**

### AdminSetUserSettingsResponse
* AdminSetUserSettingsResponse `object`: Represents the response from the server to set user settings as an administrator.

### AdminUpdateAuthEventFeedbackRequest
* AdminUpdateAuthEventFeedbackRequest `object`
  * EventId **required**
  * FeedbackValue **required**
  * UserPoolId **required**
  * Username **required**

### AdminUpdateAuthEventFeedbackResponse
* AdminUpdateAuthEventFeedbackResponse `object`

### AdminUpdateDeviceStatusRequest
* AdminUpdateDeviceStatusRequest `object`: The request to update the device status, as an administrator.
  * DeviceKey **required**
  * DeviceRememberedStatus
  * UserPoolId **required**
  * Username **required**

### AdminUpdateDeviceStatusResponse
* AdminUpdateDeviceStatusResponse `object`: The status response from the request to update the device, as an administrator.

### AdminUpdateUserAttributesRequest
* AdminUpdateUserAttributesRequest `object`: Represents the request to update the user's attributes as an administrator.
  * ClientMetadata
  * UserAttributes **required**
    * items [AttributeType](#attributetype)
  * UserPoolId **required**
  * Username **required**

### AdminUpdateUserAttributesResponse
* AdminUpdateUserAttributesResponse `object`: Represents the response from the server for the request to update user attributes as an administrator.

### AdminUserGlobalSignOutRequest
* AdminUserGlobalSignOutRequest `object`: The request to sign out of all devices, as an administrator.
  * UserPoolId **required**
  * Username **required**

### AdminUserGlobalSignOutResponse
* AdminUserGlobalSignOutResponse `object`: The global sign-out response, as an administrator.

### AdvancedSecurityModeType
* AdvancedSecurityModeType `string` (values: OFF, AUDIT, ENFORCED)

### AliasAttributeType
* AliasAttributeType `string` (values: phone_number, email, preferred_username)

### AliasAttributesListType
* AliasAttributesListType `array`
  * items [AliasAttributeType](#aliasattributetype)

### AliasExistsException


### AnalyticsConfigurationType
* AnalyticsConfigurationType `object`: <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1. In regions where Pinpoint is available, Cognito User Pools will support sending events to Amazon Pinpoint projects within that same region. </p> </note>
  * ApplicationArn
  * ApplicationId
  * ExternalId
  * RoleArn
  * UserDataShared

### AnalyticsMetadataType
* AnalyticsMetadataType `object`: <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note>
  * AnalyticsEndpointId

### ArnType
* ArnType `string`

### AssociateSoftwareTokenRequest
* AssociateSoftwareTokenRequest `object`
  * AccessToken
  * Session

### AssociateSoftwareTokenResponse
* AssociateSoftwareTokenResponse `object`
  * SecretCode
  * Session

### AttributeDataType
* AttributeDataType `string` (values: String, Number, DateTime, Boolean)

### AttributeListType
* AttributeListType `array`
  * items [AttributeType](#attributetype)

### AttributeMappingKeyType
* AttributeMappingKeyType `string`

### AttributeMappingType
* AttributeMappingType `object`

### AttributeNameListType
* AttributeNameListType `array`
  * items [AttributeNameType](#attributenametype)

### AttributeNameType
* AttributeNameType `string`

### AttributeType
* AttributeType `object`: Specifies whether the attribute is standard or custom.
  * Name **required**
  * Value

### AttributeValueType
* AttributeValueType `string`

### AuthEventType
* AuthEventType `object`: The authentication event type.
  * ChallengeResponses
    * items [ChallengeResponseType](#challengeresponsetype)
  * CreationDate
  * EventContextData
    * City
    * Country
    * DeviceName
    * IpAddress
    * Timezone
  * EventFeedback
    * FeedbackDate
    * FeedbackValue **required**
    * Provider **required**
  * EventId
  * EventResponse
  * EventRisk
    * CompromisedCredentialsDetected
    * RiskDecision
    * RiskLevel
  * EventType

### AuthEventsType
* AuthEventsType `array`
  * items [AuthEventType](#autheventtype)

### AuthFlowType
* AuthFlowType `string` (values: USER_SRP_AUTH, REFRESH_TOKEN_AUTH, REFRESH_TOKEN, CUSTOM_AUTH, ADMIN_NO_SRP_AUTH, USER_PASSWORD_AUTH, ADMIN_USER_PASSWORD_AUTH)

### AuthParametersType
* AuthParametersType `object`

### AuthenticationResultType
* AuthenticationResultType `object`: The authentication result.
  * AccessToken
  * ExpiresIn
  * IdToken
  * NewDeviceMetadata
    * DeviceGroupKey
    * DeviceKey
  * RefreshToken
  * TokenType

### BlockedIPRangeListType
* BlockedIPRangeListType `array`
  * items [StringType](#stringtype)

### BooleanType
* BooleanType `boolean`

### CSSType
* CSSType `string`

### CSSVersionType
* CSSVersionType `string`

### CallbackURLsListType
* CallbackURLsListType `array`
  * items [RedirectUrlType](#redirecturltype)

### ChallengeName
* ChallengeName `string` (values: Password, Mfa)

### ChallengeNameType
* ChallengeNameType `string` (values: SMS_MFA, SOFTWARE_TOKEN_MFA, SELECT_MFA_TYPE, MFA_SETUP, PASSWORD_VERIFIER, CUSTOM_CHALLENGE, DEVICE_SRP_AUTH, DEVICE_PASSWORD_VERIFIER, ADMIN_NO_SRP_AUTH, NEW_PASSWORD_REQUIRED)

### ChallengeParametersType
* ChallengeParametersType `object`

### ChallengeResponse
* ChallengeResponse `string` (values: Success, Failure)

### ChallengeResponseListType
* ChallengeResponseListType `array`
  * items [ChallengeResponseType](#challengeresponsetype)

### ChallengeResponseType
* ChallengeResponseType `object`: The challenge response type.
  * ChallengeName
  * ChallengeResponse

### ChallengeResponsesType
* ChallengeResponsesType `object`

### ChangePasswordRequest
* ChangePasswordRequest `object`: Represents the request to change a user password.
  * AccessToken **required**
  * PreviousPassword **required**
  * ProposedPassword **required**

### ChangePasswordResponse
* ChangePasswordResponse `object`: The response from the server to the change password request.

### ClientIdType
* ClientIdType `string`

### ClientMetadataType
* ClientMetadataType `object`

### ClientNameType
* ClientNameType `string`

### ClientPermissionListType
* ClientPermissionListType `array`
  * items [ClientPermissionType](#clientpermissiontype)

### ClientPermissionType
* ClientPermissionType `string`

### ClientSecretType
* ClientSecretType `string`

### CodeDeliveryDetailsListType
* CodeDeliveryDetailsListType `array`
  * items [CodeDeliveryDetailsType](#codedeliverydetailstype)

### CodeDeliveryDetailsType
* CodeDeliveryDetailsType `object`: The code delivery details being returned from the server.
  * AttributeName
  * DeliveryMedium
  * Destination

### CodeDeliveryFailureException


### CodeMismatchException


### CompletionMessageType
* CompletionMessageType `string`

### CompromisedCredentialsActionsType
* CompromisedCredentialsActionsType `object`: The compromised credentials actions type
  * EventAction **required**

### CompromisedCredentialsEventActionType
* CompromisedCredentialsEventActionType `string` (values: BLOCK, NO_ACTION)

### CompromisedCredentialsRiskConfigurationType
* CompromisedCredentialsRiskConfigurationType `object`: The compromised credentials risk configuration type.
  * Actions **required**
    * EventAction **required**
  * EventFilter
    * items [EventFilterType](#eventfiltertype)

### ConcurrentModificationException


### ConfirmDeviceRequest
* ConfirmDeviceRequest `object`: Confirms the device request.
  * AccessToken **required**
  * DeviceKey **required**
  * DeviceName
  * DeviceSecretVerifierConfig
    * PasswordVerifier
    * Salt

### ConfirmDeviceResponse
* ConfirmDeviceResponse `object`: Confirms the device response.
  * UserConfirmationNecessary

### ConfirmForgotPasswordRequest
* ConfirmForgotPasswordRequest `object`: The request representing the confirmation for a password reset.
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * ConfirmationCode **required**
  * Password **required**
  * SecretHash
  * UserContextData
    * EncodedData
  * Username **required**

### ConfirmForgotPasswordResponse
* ConfirmForgotPasswordResponse `object`: The response from the server that results from a user's request to retrieve a forgotten password.

### ConfirmSignUpRequest
* ConfirmSignUpRequest `object`: Represents the request to confirm registration of a user.
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * ConfirmationCode **required**
  * ForceAliasCreation
  * SecretHash
  * UserContextData
    * EncodedData
  * Username **required**

### ConfirmSignUpResponse
* ConfirmSignUpResponse `object`: Represents the response from the server for the registration confirmation.

### ConfirmationCodeType
* ConfirmationCodeType `string`

### ContextDataType
* ContextDataType `object`: Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
  * EncodedData
  * HttpHeaders **required**
    * items [HttpHeader](#httpheader)
  * IpAddress **required**
  * ServerName **required**
  * ServerPath **required**

### CreateGroupRequest
* CreateGroupRequest `object`
  * Description
  * GroupName **required**
  * Precedence
  * RoleArn
  * UserPoolId **required**

### CreateGroupResponse
* CreateGroupResponse `object`
  * Group
    * CreationDate
    * Description
    * GroupName
    * LastModifiedDate
    * Precedence
    * RoleArn
    * UserPoolId

### CreateIdentityProviderRequest
* CreateIdentityProviderRequest `object`
  * AttributeMapping
  * IdpIdentifiers
    * items [IdpIdentifierType](#idpidentifiertype)
  * ProviderDetails **required**
  * ProviderName **required**
  * ProviderType **required**
  * UserPoolId **required**

### CreateIdentityProviderResponse
* CreateIdentityProviderResponse `object`
  * IdentityProvider **required**
    * AttributeMapping
    * CreationDate
    * IdpIdentifiers
      * items [IdpIdentifierType](#idpidentifiertype)
    * LastModifiedDate
    * ProviderDetails
    * ProviderName
    * ProviderType
    * UserPoolId

### CreateResourceServerRequest
* CreateResourceServerRequest `object`
  * Identifier **required**
  * Name **required**
  * Scopes
    * items [ResourceServerScopeType](#resourceserverscopetype)
  * UserPoolId **required**

### CreateResourceServerResponse
* CreateResourceServerResponse `object`
  * ResourceServer **required**
    * Identifier
    * Name
    * Scopes
      * items [ResourceServerScopeType](#resourceserverscopetype)
    * UserPoolId

### CreateUserImportJobRequest
* CreateUserImportJobRequest `object`: Represents the request to create the user import job.
  * CloudWatchLogsRoleArn **required**
  * JobName **required**
  * UserPoolId **required**

### CreateUserImportJobResponse
* CreateUserImportJobResponse `object`: Represents the response from the server to the request to create the user import job.
  * UserImportJob
    * CloudWatchLogsRoleArn
    * CompletionDate
    * CompletionMessage
    * CreationDate
    * FailedUsers
    * ImportedUsers
    * JobId
    * JobName
    * PreSignedUrl
    * SkippedUsers
    * StartDate
    * Status
    * UserPoolId

### CreateUserPoolClientRequest
* CreateUserPoolClientRequest `object`: Represents the request to create a user pool client.
  * AccessTokenValidity
  * AllowedOAuthFlows
    * items [OAuthFlowType](#oauthflowtype)
  * AllowedOAuthFlowsUserPoolClient
  * AllowedOAuthScopes
    * items [ScopeType](#scopetype)
  * AnalyticsConfiguration
    * ApplicationArn
    * ApplicationId
    * ExternalId
    * RoleArn
    * UserDataShared
  * CallbackURLs
    * items [RedirectUrlType](#redirecturltype)
  * ClientName **required**
  * DefaultRedirectURI
  * ExplicitAuthFlows
    * items [ExplicitAuthFlowsType](#explicitauthflowstype)
  * GenerateSecret
  * IdTokenValidity
  * LogoutURLs
    * items [RedirectUrlType](#redirecturltype)
  * PreventUserExistenceErrors
  * ReadAttributes
    * items [ClientPermissionType](#clientpermissiontype)
  * RefreshTokenValidity
  * SupportedIdentityProviders
    * items [ProviderNameType](#providernametype)
  * TokenValidityUnits
    * AccessToken
    * IdToken
    * RefreshToken
  * UserPoolId **required**
  * WriteAttributes
    * items [ClientPermissionType](#clientpermissiontype)

### CreateUserPoolClientResponse
* CreateUserPoolClientResponse `object`: Represents the response from the server to create a user pool client.
  * UserPoolClient
    * AccessTokenValidity
    * AllowedOAuthFlows
      * items [OAuthFlowType](#oauthflowtype)
    * AllowedOAuthFlowsUserPoolClient
    * AllowedOAuthScopes
      * items [ScopeType](#scopetype)
    * AnalyticsConfiguration
      * ApplicationArn
      * ApplicationId
      * ExternalId
      * RoleArn
      * UserDataShared
    * CallbackURLs
      * items [RedirectUrlType](#redirecturltype)
    * ClientId
    * ClientName
    * ClientSecret
    * CreationDate
    * DefaultRedirectURI
    * ExplicitAuthFlows
      * items [ExplicitAuthFlowsType](#explicitauthflowstype)
    * IdTokenValidity
    * LastModifiedDate
    * LogoutURLs
      * items [RedirectUrlType](#redirecturltype)
    * PreventUserExistenceErrors
    * ReadAttributes
      * items [ClientPermissionType](#clientpermissiontype)
    * RefreshTokenValidity
    * SupportedIdentityProviders
      * items [ProviderNameType](#providernametype)
    * TokenValidityUnits
      * AccessToken
      * IdToken
      * RefreshToken
    * UserPoolId
    * WriteAttributes
      * items [ClientPermissionType](#clientpermissiontype)

### CreateUserPoolDomainRequest
* CreateUserPoolDomainRequest `object`
  * CustomDomainConfig
    * CertificateArn **required**
  * Domain **required**
  * UserPoolId **required**

### CreateUserPoolDomainResponse
* CreateUserPoolDomainResponse `object`
  * CloudFrontDomain

### CreateUserPoolRequest
* CreateUserPoolRequest `object`: Represents the request to create a user pool.
  * AccountRecoverySetting
    * RecoveryMechanisms
      * items [RecoveryOptionType](#recoveryoptiontype)
  * AdminCreateUserConfig
    * AllowAdminCreateUserOnly
    * InviteMessageTemplate
      * EmailMessage
      * EmailSubject
      * SMSMessage
    * UnusedAccountValidityDays
  * AliasAttributes
    * items [AliasAttributeType](#aliasattributetype)
  * AutoVerifiedAttributes
    * items [VerifiedAttributeType](#verifiedattributetype)
  * DeviceConfiguration
    * ChallengeRequiredOnNewDevice
    * DeviceOnlyRememberedOnUserPrompt
  * EmailConfiguration
    * ConfigurationSet
    * EmailSendingAccount
    * From
    * ReplyToEmailAddress
    * SourceArn
  * EmailVerificationMessage
  * EmailVerificationSubject
  * LambdaConfig
    * CreateAuthChallenge
    * CustomEmailSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * CustomMessage
    * CustomSMSSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * DefineAuthChallenge
    * KMSKeyID
    * PostAuthentication
    * PostConfirmation
    * PreAuthentication
    * PreSignUp
    * PreTokenGeneration
    * UserMigration
    * VerifyAuthChallengeResponse
  * MfaConfiguration
  * Policies
    * PasswordPolicy
      * MinimumLength
      * RequireLowercase
      * RequireNumbers
      * RequireSymbols
      * RequireUppercase
      * TemporaryPasswordValidityDays
  * PoolName **required**
  * Schema
    * items [SchemaAttributeType](#schemaattributetype)
  * SmsAuthenticationMessage
  * SmsConfiguration
    * ExternalId
    * SnsCallerArn **required**
  * SmsVerificationMessage
  * UserPoolAddOns
    * AdvancedSecurityMode **required**
  * UserPoolTags
  * UsernameAttributes
    * items [UsernameAttributeType](#usernameattributetype)
  * UsernameConfiguration
    * CaseSensitive **required**
  * VerificationMessageTemplate
    * DefaultEmailOption
    * EmailMessage
    * EmailMessageByLink
    * EmailSubject
    * EmailSubjectByLink
    * SmsMessage

### CreateUserPoolResponse
* CreateUserPoolResponse `object`: Represents the response from the server for the request to create a user pool.
  * UserPool
    * AccountRecoverySetting
      * RecoveryMechanisms
        * items [RecoveryOptionType](#recoveryoptiontype)
    * AdminCreateUserConfig
      * AllowAdminCreateUserOnly
      * InviteMessageTemplate
        * EmailMessage
        * EmailSubject
        * SMSMessage
      * UnusedAccountValidityDays
    * AliasAttributes
      * items [AliasAttributeType](#aliasattributetype)
    * Arn
    * AutoVerifiedAttributes
      * items [VerifiedAttributeType](#verifiedattributetype)
    * CreationDate
    * CustomDomain
    * DeviceConfiguration
      * ChallengeRequiredOnNewDevice
      * DeviceOnlyRememberedOnUserPrompt
    * Domain
    * EmailConfiguration
      * ConfigurationSet
      * EmailSendingAccount
      * From
      * ReplyToEmailAddress
      * SourceArn
    * EmailConfigurationFailure
    * EmailVerificationMessage
    * EmailVerificationSubject
    * EstimatedNumberOfUsers
    * Id
    * LambdaConfig
      * CreateAuthChallenge
      * CustomEmailSender
        * LambdaArn **required**
        * LambdaVersion **required**
      * CustomMessage
      * CustomSMSSender
        * LambdaArn **required**
        * LambdaVersion **required**
      * DefineAuthChallenge
      * KMSKeyID
      * PostAuthentication
      * PostConfirmation
      * PreAuthentication
      * PreSignUp
      * PreTokenGeneration
      * UserMigration
      * VerifyAuthChallengeResponse
    * LastModifiedDate
    * MfaConfiguration
    * Name
    * Policies
      * PasswordPolicy
        * MinimumLength
        * RequireLowercase
        * RequireNumbers
        * RequireSymbols
        * RequireUppercase
        * TemporaryPasswordValidityDays
    * SchemaAttributes
      * items [SchemaAttributeType](#schemaattributetype)
    * SmsAuthenticationMessage
    * SmsConfiguration
      * ExternalId
      * SnsCallerArn **required**
    * SmsConfigurationFailure
    * SmsVerificationMessage
    * Status
    * UserPoolAddOns
      * AdvancedSecurityMode **required**
    * UserPoolTags
    * UsernameAttributes
      * items [UsernameAttributeType](#usernameattributetype)
    * UsernameConfiguration
      * CaseSensitive **required**
    * VerificationMessageTemplate
      * DefaultEmailOption
      * EmailMessage
      * EmailMessageByLink
      * EmailSubject
      * EmailSubjectByLink
      * SmsMessage

### CustomAttributeNameType
* CustomAttributeNameType `string`

### CustomAttributesListType
* CustomAttributesListType `array`
  * items [SchemaAttributeType](#schemaattributetype)

### CustomDomainConfigType
* CustomDomainConfigType `object`: The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
  * CertificateArn **required**

### CustomEmailLambdaVersionConfigType
* CustomEmailLambdaVersionConfigType `object`: A custom email sender Lambda configuration type.
  * LambdaArn **required**
  * LambdaVersion **required**

### CustomEmailSenderLambdaVersionType
* CustomEmailSenderLambdaVersionType `string` (values: V1_0)

### CustomSMSLambdaVersionConfigType
* CustomSMSLambdaVersionConfigType `object`: A custom SMS sender Lambda configuration type.
  * LambdaArn **required**
  * LambdaVersion **required**

### CustomSMSSenderLambdaVersionType
* CustomSMSSenderLambdaVersionType `string` (values: V1_0)

### DateType
* DateType `string`

### DefaultEmailOptionType
* DefaultEmailOptionType `string` (values: CONFIRM_WITH_LINK, CONFIRM_WITH_CODE)

### DeleteGroupRequest
* DeleteGroupRequest `object`
  * GroupName **required**
  * UserPoolId **required**

### DeleteIdentityProviderRequest
* DeleteIdentityProviderRequest `object`
  * ProviderName **required**
  * UserPoolId **required**

### DeleteResourceServerRequest
* DeleteResourceServerRequest `object`
  * Identifier **required**
  * UserPoolId **required**

### DeleteUserAttributesRequest
* DeleteUserAttributesRequest `object`: Represents the request to delete user attributes.
  * AccessToken **required**
  * UserAttributeNames **required**
    * items [AttributeNameType](#attributenametype)

### DeleteUserAttributesResponse
* DeleteUserAttributesResponse `object`: Represents the response from the server to delete user attributes.

### DeleteUserPoolClientRequest
* DeleteUserPoolClientRequest `object`: Represents the request to delete a user pool client.
  * ClientId **required**
  * UserPoolId **required**

### DeleteUserPoolDomainRequest
* DeleteUserPoolDomainRequest `object`
  * Domain **required**
  * UserPoolId **required**

### DeleteUserPoolDomainResponse
* DeleteUserPoolDomainResponse `object`

### DeleteUserPoolRequest
* DeleteUserPoolRequest `object`: Represents the request to delete a user pool.
  * UserPoolId **required**

### DeleteUserRequest
* DeleteUserRequest `object`: Represents the request to delete a user.
  * AccessToken **required**

### DeliveryMediumListType
* DeliveryMediumListType `array`
  * items [DeliveryMediumType](#deliverymediumtype)

### DeliveryMediumType
* DeliveryMediumType `string` (values: SMS, EMAIL)

### DescribeIdentityProviderRequest
* DescribeIdentityProviderRequest `object`
  * ProviderName **required**
  * UserPoolId **required**

### DescribeIdentityProviderResponse
* DescribeIdentityProviderResponse `object`
  * IdentityProvider **required**
    * AttributeMapping
    * CreationDate
    * IdpIdentifiers
      * items [IdpIdentifierType](#idpidentifiertype)
    * LastModifiedDate
    * ProviderDetails
    * ProviderName
    * ProviderType
    * UserPoolId

### DescribeResourceServerRequest
* DescribeResourceServerRequest `object`
  * Identifier **required**
  * UserPoolId **required**

### DescribeResourceServerResponse
* DescribeResourceServerResponse `object`
  * ResourceServer **required**
    * Identifier
    * Name
    * Scopes
      * items [ResourceServerScopeType](#resourceserverscopetype)
    * UserPoolId

### DescribeRiskConfigurationRequest
* DescribeRiskConfigurationRequest `object`
  * ClientId
  * UserPoolId **required**

### DescribeRiskConfigurationResponse
* DescribeRiskConfigurationResponse `object`
  * RiskConfiguration **required**
    * AccountTakeoverRiskConfiguration
      * Actions **required**
        * HighAction
          * EventAction **required**
          * Notify **required**
        * LowAction
          * EventAction **required**
          * Notify **required**
        * MediumAction
          * EventAction **required**
          * Notify **required**
      * NotifyConfiguration
        * BlockEmail
          * HtmlBody
          * Subject **required**
          * TextBody
        * From
        * MfaEmail
          * HtmlBody
          * Subject **required**
          * TextBody
        * NoActionEmail
          * HtmlBody
          * Subject **required**
          * TextBody
        * ReplyTo
        * SourceArn **required**
    * ClientId
    * CompromisedCredentialsRiskConfiguration
      * Actions **required**
        * EventAction **required**
      * EventFilter
        * items [EventFilterType](#eventfiltertype)
    * LastModifiedDate
    * RiskExceptionConfiguration
      * BlockedIPRangeList
        * items [StringType](#stringtype)
      * SkippedIPRangeList
        * items [StringType](#stringtype)
    * UserPoolId

### DescribeUserImportJobRequest
* DescribeUserImportJobRequest `object`: Represents the request to describe the user import job.
  * JobId **required**
  * UserPoolId **required**

### DescribeUserImportJobResponse
* DescribeUserImportJobResponse `object`: Represents the response from the server to the request to describe the user import job.
  * UserImportJob
    * CloudWatchLogsRoleArn
    * CompletionDate
    * CompletionMessage
    * CreationDate
    * FailedUsers
    * ImportedUsers
    * JobId
    * JobName
    * PreSignedUrl
    * SkippedUsers
    * StartDate
    * Status
    * UserPoolId

### DescribeUserPoolClientRequest
* DescribeUserPoolClientRequest `object`: Represents the request to describe a user pool client.
  * ClientId **required**
  * UserPoolId **required**

### DescribeUserPoolClientResponse
* DescribeUserPoolClientResponse `object`: Represents the response from the server from a request to describe the user pool client.
  * UserPoolClient
    * AccessTokenValidity
    * AllowedOAuthFlows
      * items [OAuthFlowType](#oauthflowtype)
    * AllowedOAuthFlowsUserPoolClient
    * AllowedOAuthScopes
      * items [ScopeType](#scopetype)
    * AnalyticsConfiguration
      * ApplicationArn
      * ApplicationId
      * ExternalId
      * RoleArn
      * UserDataShared
    * CallbackURLs
      * items [RedirectUrlType](#redirecturltype)
    * ClientId
    * ClientName
    * ClientSecret
    * CreationDate
    * DefaultRedirectURI
    * ExplicitAuthFlows
      * items [ExplicitAuthFlowsType](#explicitauthflowstype)
    * IdTokenValidity
    * LastModifiedDate
    * LogoutURLs
      * items [RedirectUrlType](#redirecturltype)
    * PreventUserExistenceErrors
    * ReadAttributes
      * items [ClientPermissionType](#clientpermissiontype)
    * RefreshTokenValidity
    * SupportedIdentityProviders
      * items [ProviderNameType](#providernametype)
    * TokenValidityUnits
      * AccessToken
      * IdToken
      * RefreshToken
    * UserPoolId
    * WriteAttributes
      * items [ClientPermissionType](#clientpermissiontype)

### DescribeUserPoolDomainRequest
* DescribeUserPoolDomainRequest `object`
  * Domain **required**

### DescribeUserPoolDomainResponse
* DescribeUserPoolDomainResponse `object`
  * DomainDescription
    * AWSAccountId
    * CloudFrontDistribution
    * CustomDomainConfig
      * CertificateArn **required**
    * Domain
    * S3Bucket
    * Status
    * UserPoolId
    * Version

### DescribeUserPoolRequest
* DescribeUserPoolRequest `object`: Represents the request to describe the user pool.
  * UserPoolId **required**

### DescribeUserPoolResponse
* DescribeUserPoolResponse `object`: Represents the response to describe the user pool.
  * UserPool
    * AccountRecoverySetting
      * RecoveryMechanisms
        * items [RecoveryOptionType](#recoveryoptiontype)
    * AdminCreateUserConfig
      * AllowAdminCreateUserOnly
      * InviteMessageTemplate
        * EmailMessage
        * EmailSubject
        * SMSMessage
      * UnusedAccountValidityDays
    * AliasAttributes
      * items [AliasAttributeType](#aliasattributetype)
    * Arn
    * AutoVerifiedAttributes
      * items [VerifiedAttributeType](#verifiedattributetype)
    * CreationDate
    * CustomDomain
    * DeviceConfiguration
      * ChallengeRequiredOnNewDevice
      * DeviceOnlyRememberedOnUserPrompt
    * Domain
    * EmailConfiguration
      * ConfigurationSet
      * EmailSendingAccount
      * From
      * ReplyToEmailAddress
      * SourceArn
    * EmailConfigurationFailure
    * EmailVerificationMessage
    * EmailVerificationSubject
    * EstimatedNumberOfUsers
    * Id
    * LambdaConfig
      * CreateAuthChallenge
      * CustomEmailSender
        * LambdaArn **required**
        * LambdaVersion **required**
      * CustomMessage
      * CustomSMSSender
        * LambdaArn **required**
        * LambdaVersion **required**
      * DefineAuthChallenge
      * KMSKeyID
      * PostAuthentication
      * PostConfirmation
      * PreAuthentication
      * PreSignUp
      * PreTokenGeneration
      * UserMigration
      * VerifyAuthChallengeResponse
    * LastModifiedDate
    * MfaConfiguration
    * Name
    * Policies
      * PasswordPolicy
        * MinimumLength
        * RequireLowercase
        * RequireNumbers
        * RequireSymbols
        * RequireUppercase
        * TemporaryPasswordValidityDays
    * SchemaAttributes
      * items [SchemaAttributeType](#schemaattributetype)
    * SmsAuthenticationMessage
    * SmsConfiguration
      * ExternalId
      * SnsCallerArn **required**
    * SmsConfigurationFailure
    * SmsVerificationMessage
    * Status
    * UserPoolAddOns
      * AdvancedSecurityMode **required**
    * UserPoolTags
    * UsernameAttributes
      * items [UsernameAttributeType](#usernameattributetype)
    * UsernameConfiguration
      * CaseSensitive **required**
    * VerificationMessageTemplate
      * DefaultEmailOption
      * EmailMessage
      * EmailMessageByLink
      * EmailSubject
      * EmailSubjectByLink
      * SmsMessage

### DescriptionType
* DescriptionType `string`

### DeviceConfigurationType
* DeviceConfigurationType `object`: The configuration for the user pool's device tracking.
  * ChallengeRequiredOnNewDevice
  * DeviceOnlyRememberedOnUserPrompt

### DeviceKeyType
* DeviceKeyType `string`

### DeviceListType
* DeviceListType `array`
  * items [DeviceType](#devicetype)

### DeviceNameType
* DeviceNameType `string`

### DeviceRememberedStatusType
* DeviceRememberedStatusType `string` (values: remembered, not_remembered)

### DeviceSecretVerifierConfigType
* DeviceSecretVerifierConfigType `object`: The device verifier against which it will be authenticated.
  * PasswordVerifier
  * Salt

### DeviceType
* DeviceType `object`: The device type.
  * DeviceAttributes
    * items [AttributeType](#attributetype)
  * DeviceCreateDate
  * DeviceKey
  * DeviceLastAuthenticatedDate
  * DeviceLastModifiedDate

### DomainDescriptionType
* DomainDescriptionType `object`: A container for information about a domain.
  * AWSAccountId
  * CloudFrontDistribution
  * CustomDomainConfig
    * CertificateArn **required**
  * Domain
  * S3Bucket
  * Status
  * UserPoolId
  * Version

### DomainStatusType
* DomainStatusType `string` (values: CREATING, DELETING, UPDATING, ACTIVE, FAILED)

### DomainType
* DomainType `string`

### DomainVersionType
* DomainVersionType `string`

### DuplicateProviderException


### EmailAddressType
* EmailAddressType `string`

### EmailConfigurationType
* EmailConfigurationType `object`: <p>The email configuration type. </p> <note> <p>Amazon Cognito has specific regions for use with Amazon SES. For more information on the supported regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email Settings for Amazon Cognito User Pools</a>.</p> </note>
  * ConfigurationSet
  * EmailSendingAccount
  * From
  * ReplyToEmailAddress
  * SourceArn

### EmailNotificationBodyType
* EmailNotificationBodyType `string`

### EmailNotificationSubjectType
* EmailNotificationSubjectType `string`

### EmailSendingAccountType
* EmailSendingAccountType `string` (values: COGNITO_DEFAULT, DEVELOPER)

### EmailVerificationMessageByLinkType
* EmailVerificationMessageByLinkType `string`

### EmailVerificationMessageType
* EmailVerificationMessageType `string`

### EmailVerificationSubjectByLinkType
* EmailVerificationSubjectByLinkType `string`

### EmailVerificationSubjectType
* EmailVerificationSubjectType `string`

### EnableSoftwareTokenMFAException


### EventContextDataType
* EventContextDataType `object`: Specifies the user context data captured at the time of an event request.
  * City
  * Country
  * DeviceName
  * IpAddress
  * Timezone

### EventFeedbackType
* EventFeedbackType `object`: Specifies the event feedback type.
  * FeedbackDate
  * FeedbackValue **required**
  * Provider **required**

### EventFilterType
* EventFilterType `string` (values: SIGN_IN, PASSWORD_CHANGE, SIGN_UP)

### EventFiltersType
* EventFiltersType `array`
  * items [EventFilterType](#eventfiltertype)

### EventIdType
* EventIdType `string`

### EventResponseType
* EventResponseType `string` (values: Success, Failure)

### EventRiskType
* EventRiskType `object`: The event risk type.
  * CompromisedCredentialsDetected
  * RiskDecision
  * RiskLevel

### EventType
* EventType `string` (values: SignIn, SignUp, ForgotPassword)

### ExpiredCodeException


### ExplicitAuthFlowsListType
* ExplicitAuthFlowsListType `array`
  * items [ExplicitAuthFlowsType](#explicitauthflowstype)

### ExplicitAuthFlowsType
* ExplicitAuthFlowsType `string` (values: ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH, ALLOW_ADMIN_USER_PASSWORD_AUTH, ALLOW_CUSTOM_AUTH, ALLOW_USER_PASSWORD_AUTH, ALLOW_USER_SRP_AUTH, ALLOW_REFRESH_TOKEN_AUTH)

### FeedbackValueType
* FeedbackValueType `string` (values: Valid, Invalid)

### ForceAliasCreation
* ForceAliasCreation `boolean`

### ForgetDeviceRequest
* ForgetDeviceRequest `object`: Represents the request to forget the device.
  * AccessToken
  * DeviceKey **required**

### ForgotPasswordRequest
* ForgotPasswordRequest `object`: Represents the request to reset a user's password.
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * SecretHash
  * UserContextData
    * EncodedData
  * Username **required**

### ForgotPasswordResponse
* ForgotPasswordResponse `object`: Respresents the response from the server regarding the request to reset a password.
  * CodeDeliveryDetails
    * AttributeName
    * DeliveryMedium
    * Destination

### GenerateSecret
* GenerateSecret `boolean`

### GetCSVHeaderRequest
* GetCSVHeaderRequest `object`: Represents the request to get the header information for the .csv file for the user import job.
  * UserPoolId **required**

### GetCSVHeaderResponse
* GetCSVHeaderResponse `object`: Represents the response from the server to the request to get the header information for the .csv file for the user import job.
  * CSVHeader
    * items [StringType](#stringtype)
  * UserPoolId

### GetDeviceRequest
* GetDeviceRequest `object`: Represents the request to get the device.
  * AccessToken
  * DeviceKey **required**

### GetDeviceResponse
* GetDeviceResponse `object`: Gets the device response.
  * Device **required**
    * DeviceAttributes
      * items [AttributeType](#attributetype)
    * DeviceCreateDate
    * DeviceKey
    * DeviceLastAuthenticatedDate
    * DeviceLastModifiedDate

### GetGroupRequest
* GetGroupRequest `object`
  * GroupName **required**
  * UserPoolId **required**

### GetGroupResponse
* GetGroupResponse `object`
  * Group
    * CreationDate
    * Description
    * GroupName
    * LastModifiedDate
    * Precedence
    * RoleArn
    * UserPoolId

### GetIdentityProviderByIdentifierRequest
* GetIdentityProviderByIdentifierRequest `object`
  * IdpIdentifier **required**
  * UserPoolId **required**

### GetIdentityProviderByIdentifierResponse
* GetIdentityProviderByIdentifierResponse `object`
  * IdentityProvider **required**
    * AttributeMapping
    * CreationDate
    * IdpIdentifiers
      * items [IdpIdentifierType](#idpidentifiertype)
    * LastModifiedDate
    * ProviderDetails
    * ProviderName
    * ProviderType
    * UserPoolId

### GetSigningCertificateRequest
* GetSigningCertificateRequest `object`: Request to get a signing certificate from Cognito.
  * UserPoolId **required**

### GetSigningCertificateResponse
* GetSigningCertificateResponse `object`: Response from Cognito for a signing certificate request.
  * Certificate

### GetUICustomizationRequest
* GetUICustomizationRequest `object`
  * ClientId
  * UserPoolId **required**

### GetUICustomizationResponse
* GetUICustomizationResponse `object`
  * UICustomization **required**
    * CSS
    * CSSVersion
    * ClientId
    * CreationDate
    * ImageUrl
    * LastModifiedDate
    * UserPoolId

### GetUserAttributeVerificationCodeRequest
* GetUserAttributeVerificationCodeRequest `object`: Represents the request to get user attribute verification.
  * AccessToken **required**
  * AttributeName **required**
  * ClientMetadata

### GetUserAttributeVerificationCodeResponse
* GetUserAttributeVerificationCodeResponse `object`: The verification code response returned by the server response to get the user attribute verification code.
  * CodeDeliveryDetails
    * AttributeName
    * DeliveryMedium
    * Destination

### GetUserPoolMfaConfigRequest
* GetUserPoolMfaConfigRequest `object`
  * UserPoolId **required**

### GetUserPoolMfaConfigResponse
* GetUserPoolMfaConfigResponse `object`
  * MfaConfiguration
  * SmsMfaConfiguration
    * SmsAuthenticationMessage
    * SmsConfiguration
      * ExternalId
      * SnsCallerArn **required**
  * SoftwareTokenMfaConfiguration
    * Enabled

### GetUserRequest
* GetUserRequest `object`: Represents the request to get information about the user.
  * AccessToken **required**

### GetUserResponse
* GetUserResponse `object`: Represents the response from the server from the request to get information about the user.
  * MFAOptions
    * items [MFAOptionType](#mfaoptiontype)
  * PreferredMfaSetting
  * UserAttributes **required**
    * items [AttributeType](#attributetype)
  * UserMFASettingList
    * items [StringType](#stringtype)
  * Username **required**

### GlobalSignOutRequest
* GlobalSignOutRequest `object`: Represents the request to sign out all devices.
  * AccessToken **required**

### GlobalSignOutResponse
* GlobalSignOutResponse `object`: The response to the request to sign out all devices.

### GroupExistsException


### GroupListType
* GroupListType `array`
  * items [GroupType](#grouptype)

### GroupNameType
* GroupNameType `string`

### GroupType
* GroupType `object`: The group type.
  * CreationDate
  * Description
  * GroupName
  * LastModifiedDate
  * Precedence
  * RoleArn
  * UserPoolId

### HexStringType
* HexStringType `string`

### HttpHeader
* HttpHeader `object`: The HTTP header.
  * headerName
  * headerValue

### HttpHeaderList
* HttpHeaderList `array`
  * items [HttpHeader](#httpheader)

### IdTokenValidityType
* IdTokenValidityType `integer`

### IdentityProviderType
* IdentityProviderType `object`: A container for information about an identity provider.
  * AttributeMapping
  * CreationDate
  * IdpIdentifiers
    * items [IdpIdentifierType](#idpidentifiertype)
  * LastModifiedDate
  * ProviderDetails
  * ProviderName
  * ProviderType
  * UserPoolId

### IdentityProviderTypeType
* IdentityProviderTypeType `string` (values: SAML, Facebook, Google, LoginWithAmazon, SignInWithApple, OIDC)

### IdpIdentifierType
* IdpIdentifierType `string`

### IdpIdentifiersListType
* IdpIdentifiersListType `array`
  * items [IdpIdentifierType](#idpidentifiertype)

### ImageFileType
* ImageFileType `string`

### ImageUrlType
* ImageUrlType `string`

### InitiateAuthRequest
* InitiateAuthRequest `object`: Initiates the authentication request.
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * AuthFlow **required**
  * AuthParameters
  * ClientId **required**
  * ClientMetadata
  * UserContextData
    * EncodedData

### InitiateAuthResponse
* InitiateAuthResponse `object`: Initiates the authentication response.
  * AuthenticationResult
    * AccessToken
    * ExpiresIn
    * IdToken
    * NewDeviceMetadata
      * DeviceGroupKey
      * DeviceKey
    * RefreshToken
    * TokenType
  * ChallengeName
  * ChallengeParameters
  * Session

### IntegerType
* IntegerType `integer`

### InternalErrorException


### InvalidEmailRoleAccessPolicyException


### InvalidLambdaResponseException


### InvalidOAuthFlowException


### InvalidParameterException


### InvalidPasswordException


### InvalidSmsRoleAccessPolicyException


### InvalidSmsRoleTrustRelationshipException


### InvalidUserPoolConfigurationException


### LambdaConfigType
* LambdaConfigType `object`: Specifies the configuration for AWS Lambda triggers.
  * CreateAuthChallenge
  * CustomEmailSender
    * LambdaArn **required**
    * LambdaVersion **required**
  * CustomMessage
  * CustomSMSSender
    * LambdaArn **required**
    * LambdaVersion **required**
  * DefineAuthChallenge
  * KMSKeyID
  * PostAuthentication
  * PostConfirmation
  * PreAuthentication
  * PreSignUp
  * PreTokenGeneration
  * UserMigration
  * VerifyAuthChallengeResponse

### LimitExceededException


### ListDevicesRequest
* ListDevicesRequest `object`: Represents the request to list the devices.
  * AccessToken **required**
  * Limit
  * PaginationToken

### ListDevicesResponse
* ListDevicesResponse `object`: Represents the response to list devices.
  * Devices
    * items [DeviceType](#devicetype)
  * PaginationToken

### ListGroupsRequest
* ListGroupsRequest `object`
  * Limit
  * NextToken
  * UserPoolId **required**

### ListGroupsResponse
* ListGroupsResponse `object`
  * Groups
    * items [GroupType](#grouptype)
  * NextToken

### ListIdentityProvidersRequest
* ListIdentityProvidersRequest `object`
  * MaxResults
  * NextToken
  * UserPoolId **required**

### ListIdentityProvidersResponse
* ListIdentityProvidersResponse `object`
  * NextToken
  * Providers **required**
    * items [ProviderDescription](#providerdescription)

### ListOfStringTypes
* ListOfStringTypes `array`
  * items [StringType](#stringtype)

### ListProvidersLimitType
* ListProvidersLimitType `integer`

### ListResourceServersLimitType
* ListResourceServersLimitType `integer`

### ListResourceServersRequest
* ListResourceServersRequest `object`
  * MaxResults
  * NextToken
  * UserPoolId **required**

### ListResourceServersResponse
* ListResourceServersResponse `object`
  * NextToken
  * ResourceServers **required**
    * items [ResourceServerType](#resourceservertype)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### ListUserImportJobsRequest
* ListUserImportJobsRequest `object`: Represents the request to list the user import jobs.
  * MaxResults **required**
  * PaginationToken
  * UserPoolId **required**

### ListUserImportJobsResponse
* ListUserImportJobsResponse `object`: Represents the response from the server to the request to list the user import jobs.
  * PaginationToken
  * UserImportJobs
    * items [UserImportJobType](#userimportjobtype)

### ListUserPoolClientsRequest
* ListUserPoolClientsRequest `object`: Represents the request to list the user pool clients.
  * MaxResults
  * NextToken
  * UserPoolId **required**

### ListUserPoolClientsResponse
* ListUserPoolClientsResponse `object`: Represents the response from the server that lists user pool clients.
  * NextToken
  * UserPoolClients
    * items [UserPoolClientDescription](#userpoolclientdescription)

### ListUserPoolsRequest
* ListUserPoolsRequest `object`: Represents the request to list user pools.
  * MaxResults **required**
  * NextToken

### ListUserPoolsResponse
* ListUserPoolsResponse `object`: Represents the response to list user pools.
  * NextToken
  * UserPools
    * items [UserPoolDescriptionType](#userpooldescriptiontype)

### ListUsersInGroupRequest
* ListUsersInGroupRequest `object`
  * GroupName **required**
  * Limit
  * NextToken
  * UserPoolId **required**

### ListUsersInGroupResponse
* ListUsersInGroupResponse `object`
  * NextToken
  * Users
    * items [UserType](#usertype)

### ListUsersRequest
* ListUsersRequest `object`: Represents the request to list users.
  * AttributesToGet
    * items [AttributeNameType](#attributenametype)
  * Filter
  * Limit
  * PaginationToken
  * UserPoolId **required**

### ListUsersResponse
* ListUsersResponse `object`: The response from the request to list users.
  * PaginationToken
  * Users
    * items [UserType](#usertype)

### LogoutURLsListType
* LogoutURLsListType `array`
  * items [RedirectUrlType](#redirecturltype)

### LongType
* LongType `integer`

### MFAMethodNotFoundException


### MFAOptionListType
* MFAOptionListType `array`
  * items [MFAOptionType](#mfaoptiontype)

### MFAOptionType
* MFAOptionType `object`:  <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.
  * AttributeName
  * DeliveryMedium

### MessageActionType
* MessageActionType `string` (values: RESEND, SUPPRESS)

### MessageTemplateType
* MessageTemplateType `object`: The message template structure.
  * EmailMessage
  * EmailSubject
  * SMSMessage

### NewDeviceMetadataType
* NewDeviceMetadataType `object`: The new device metadata type.
  * DeviceGroupKey
  * DeviceKey

### NotAuthorizedException


### NotifyConfigurationType
* NotifyConfigurationType `object`: The notify configuration type.
  * BlockEmail
    * HtmlBody
    * Subject **required**
    * TextBody
  * From
  * MfaEmail
    * HtmlBody
    * Subject **required**
    * TextBody
  * NoActionEmail
    * HtmlBody
    * Subject **required**
    * TextBody
  * ReplyTo
  * SourceArn **required**

### NotifyEmailType
* NotifyEmailType `object`: The notify email type.
  * HtmlBody
  * Subject **required**
  * TextBody

### NumberAttributeConstraintsType
* NumberAttributeConstraintsType `object`: The minimum and maximum value of an attribute that is of the number data type.
  * MaxValue
  * MinValue

### OAuthFlowType
* OAuthFlowType `string` (values: code, implicit, client_credentials)

### OAuthFlowsType
* OAuthFlowsType `array`
  * items [OAuthFlowType](#oauthflowtype)

### PaginationKey
* PaginationKey `string`

### PaginationKeyType
* PaginationKeyType `string`

### PasswordPolicyMinLengthType
* PasswordPolicyMinLengthType `integer`

### PasswordPolicyType
* PasswordPolicyType `object`: The password policy type.
  * MinimumLength
  * RequireLowercase
  * RequireNumbers
  * RequireSymbols
  * RequireUppercase
  * TemporaryPasswordValidityDays

### PasswordResetRequiredException


### PasswordType
* PasswordType `string`

### PoolQueryLimitType
* PoolQueryLimitType `integer`

### PreSignedUrlType
* PreSignedUrlType `string`

### PrecedenceType
* PrecedenceType `integer`

### PreconditionNotMetException


### PreventUserExistenceErrorTypes
* PreventUserExistenceErrorTypes `string` (values: LEGACY, ENABLED)

### PriorityType
* PriorityType `integer`

### ProviderDescription
* ProviderDescription `object`: A container for identity provider details.
  * CreationDate
  * LastModifiedDate
  * ProviderName
  * ProviderType

### ProviderDetailsType
* ProviderDetailsType `object`

### ProviderNameType
* ProviderNameType `string`

### ProviderNameTypeV1
* ProviderNameTypeV1 `string`

### ProviderUserIdentifierType
* ProviderUserIdentifierType `object`: A container for information about an identity provider for a user pool.
  * ProviderAttributeName
  * ProviderAttributeValue
  * ProviderName

### ProvidersListType
* ProvidersListType `array`
  * items [ProviderDescription](#providerdescription)

### QueryLimit
* QueryLimit `integer`

### QueryLimitType
* QueryLimitType `integer`

### RecoveryMechanismsType
* RecoveryMechanismsType `array`
  * items [RecoveryOptionType](#recoveryoptiontype)

### RecoveryOptionNameType
* RecoveryOptionNameType `string` (values: verified_email, verified_phone_number, admin_only)

### RecoveryOptionType
* RecoveryOptionType `object`: A map containing a priority as a key, and recovery method name as a value.
  * Name **required**
  * Priority **required**

### RedirectUrlType
* RedirectUrlType `string`

### RefreshTokenValidityType
* RefreshTokenValidityType `integer`

### ResendConfirmationCodeRequest
* ResendConfirmationCodeRequest `object`: Represents the request to resend the confirmation code.
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * SecretHash
  * UserContextData
    * EncodedData
  * Username **required**

### ResendConfirmationCodeResponse
* ResendConfirmationCodeResponse `object`: The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code.
  * CodeDeliveryDetails
    * AttributeName
    * DeliveryMedium
    * Destination

### ResourceNotFoundException


### ResourceServerIdentifierType
* ResourceServerIdentifierType `string`

### ResourceServerNameType
* ResourceServerNameType `string`

### ResourceServerScopeDescriptionType
* ResourceServerScopeDescriptionType `string`

### ResourceServerScopeListType
* ResourceServerScopeListType `array`
  * items [ResourceServerScopeType](#resourceserverscopetype)

### ResourceServerScopeNameType
* ResourceServerScopeNameType `string`

### ResourceServerScopeType
* ResourceServerScopeType `object`: A resource server scope.
  * ScopeDescription **required**
  * ScopeName **required**

### ResourceServerType
* ResourceServerType `object`: A container for information about a resource server for a user pool.
  * Identifier
  * Name
  * Scopes
    * items [ResourceServerScopeType](#resourceserverscopetype)
  * UserPoolId

### ResourceServersListType
* ResourceServersListType `array`
  * items [ResourceServerType](#resourceservertype)

### RespondToAuthChallengeRequest
* RespondToAuthChallengeRequest `object`: The request to respond to an authentication challenge.
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ChallengeName **required**
  * ChallengeResponses
  * ClientId **required**
  * ClientMetadata
  * Session
  * UserContextData
    * EncodedData

### RespondToAuthChallengeResponse
* RespondToAuthChallengeResponse `object`: The response to respond to the authentication challenge.
  * AuthenticationResult
    * AccessToken
    * ExpiresIn
    * IdToken
    * NewDeviceMetadata
      * DeviceGroupKey
      * DeviceKey
    * RefreshToken
    * TokenType
  * ChallengeName
  * ChallengeParameters
  * Session

### RiskConfigurationType
* RiskConfigurationType `object`: The risk configuration type.
  * AccountTakeoverRiskConfiguration
    * Actions **required**
      * HighAction
        * EventAction **required**
        * Notify **required**
      * LowAction
        * EventAction **required**
        * Notify **required**
      * MediumAction
        * EventAction **required**
        * Notify **required**
    * NotifyConfiguration
      * BlockEmail
        * HtmlBody
        * Subject **required**
        * TextBody
      * From
      * MfaEmail
        * HtmlBody
        * Subject **required**
        * TextBody
      * NoActionEmail
        * HtmlBody
        * Subject **required**
        * TextBody
      * ReplyTo
      * SourceArn **required**
  * ClientId
  * CompromisedCredentialsRiskConfiguration
    * Actions **required**
      * EventAction **required**
    * EventFilter
      * items [EventFilterType](#eventfiltertype)
  * LastModifiedDate
  * RiskExceptionConfiguration
    * BlockedIPRangeList
      * items [StringType](#stringtype)
    * SkippedIPRangeList
      * items [StringType](#stringtype)
  * UserPoolId

### RiskDecisionType
* RiskDecisionType `string` (values: NoRisk, AccountTakeover, Block)

### RiskExceptionConfigurationType
* RiskExceptionConfigurationType `object`: The type of the configuration to override the risk decision.
  * BlockedIPRangeList
    * items [StringType](#stringtype)
  * SkippedIPRangeList
    * items [StringType](#stringtype)

### RiskLevelType
* RiskLevelType `string` (values: Low, Medium, High)

### S3BucketType
* S3BucketType `string`

### SESConfigurationSet
* SESConfigurationSet `string`

### SMSMfaSettingsType
* SMSMfaSettingsType `object`: The type used for enabling SMS MFA at the user level. Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts, disable MFA for users and turn on Adaptive Authentication for the user pool.
  * Enabled
  * PreferredMfa

### SchemaAttributeType
* SchemaAttributeType `object`: Contains information about the schema attribute.
  * AttributeDataType
  * DeveloperOnlyAttribute
  * Mutable
  * Name
  * NumberAttributeConstraints
    * MaxValue
    * MinValue
  * Required
  * StringAttributeConstraints
    * MaxLength
    * MinLength

### SchemaAttributesListType
* SchemaAttributesListType `array`
  * items [SchemaAttributeType](#schemaattributetype)

### ScopeDoesNotExistException


### ScopeListType
* ScopeListType `array`
  * items [ScopeType](#scopetype)

### ScopeType
* ScopeType `string`

### SearchPaginationTokenType
* SearchPaginationTokenType `string`

### SearchedAttributeNamesListType
* SearchedAttributeNamesListType `array`
  * items [AttributeNameType](#attributenametype)

### SecretCodeType
* SecretCodeType `string`

### SecretHashType
* SecretHashType `string`

### SessionType
* SessionType `string`

### SetRiskConfigurationRequest
* SetRiskConfigurationRequest `object`
  * AccountTakeoverRiskConfiguration
    * Actions **required**
      * HighAction
        * EventAction **required**
        * Notify **required**
      * LowAction
        * EventAction **required**
        * Notify **required**
      * MediumAction
        * EventAction **required**
        * Notify **required**
    * NotifyConfiguration
      * BlockEmail
        * HtmlBody
        * Subject **required**
        * TextBody
      * From
      * MfaEmail
        * HtmlBody
        * Subject **required**
        * TextBody
      * NoActionEmail
        * HtmlBody
        * Subject **required**
        * TextBody
      * ReplyTo
      * SourceArn **required**
  * ClientId
  * CompromisedCredentialsRiskConfiguration
    * Actions **required**
      * EventAction **required**
    * EventFilter
      * items [EventFilterType](#eventfiltertype)
  * RiskExceptionConfiguration
    * BlockedIPRangeList
      * items [StringType](#stringtype)
    * SkippedIPRangeList
      * items [StringType](#stringtype)
  * UserPoolId **required**

### SetRiskConfigurationResponse
* SetRiskConfigurationResponse `object`
  * RiskConfiguration **required**
    * AccountTakeoverRiskConfiguration
      * Actions **required**
        * HighAction
          * EventAction **required**
          * Notify **required**
        * LowAction
          * EventAction **required**
          * Notify **required**
        * MediumAction
          * EventAction **required**
          * Notify **required**
      * NotifyConfiguration
        * BlockEmail
          * HtmlBody
          * Subject **required**
          * TextBody
        * From
        * MfaEmail
          * HtmlBody
          * Subject **required**
          * TextBody
        * NoActionEmail
          * HtmlBody
          * Subject **required**
          * TextBody
        * ReplyTo
        * SourceArn **required**
    * ClientId
    * CompromisedCredentialsRiskConfiguration
      * Actions **required**
        * EventAction **required**
      * EventFilter
        * items [EventFilterType](#eventfiltertype)
    * LastModifiedDate
    * RiskExceptionConfiguration
      * BlockedIPRangeList
        * items [StringType](#stringtype)
      * SkippedIPRangeList
        * items [StringType](#stringtype)
    * UserPoolId

### SetUICustomizationRequest
* SetUICustomizationRequest `object`
  * CSS
  * ClientId
  * ImageFile
  * UserPoolId **required**

### SetUICustomizationResponse
* SetUICustomizationResponse `object`
  * UICustomization **required**
    * CSS
    * CSSVersion
    * ClientId
    * CreationDate
    * ImageUrl
    * LastModifiedDate
    * UserPoolId

### SetUserMFAPreferenceRequest
* SetUserMFAPreferenceRequest `object`
  * AccessToken **required**
  * SMSMfaSettings
    * Enabled
    * PreferredMfa
  * SoftwareTokenMfaSettings
    * Enabled
    * PreferredMfa

### SetUserMFAPreferenceResponse
* SetUserMFAPreferenceResponse `object`

### SetUserPoolMfaConfigRequest
* SetUserPoolMfaConfigRequest `object`
  * MfaConfiguration
  * SmsMfaConfiguration
    * SmsAuthenticationMessage
    * SmsConfiguration
      * ExternalId
      * SnsCallerArn **required**
  * SoftwareTokenMfaConfiguration
    * Enabled
  * UserPoolId **required**

### SetUserPoolMfaConfigResponse
* SetUserPoolMfaConfigResponse `object`
  * MfaConfiguration
  * SmsMfaConfiguration
    * SmsAuthenticationMessage
    * SmsConfiguration
      * ExternalId
      * SnsCallerArn **required**
  * SoftwareTokenMfaConfiguration
    * Enabled

### SetUserSettingsRequest
* SetUserSettingsRequest `object`: Represents the request to set user settings.
  * AccessToken **required**
  * MFAOptions **required**
    * items [MFAOptionType](#mfaoptiontype)

### SetUserSettingsResponse
* SetUserSettingsResponse `object`: The response from the server for a set user settings request.

### SignUpRequest
* SignUpRequest `object`: Represents the request to register a user.
  * AnalyticsMetadata
    * AnalyticsEndpointId
  * ClientId **required**
  * ClientMetadata
  * Password **required**
  * SecretHash
  * UserAttributes
    * items [AttributeType](#attributetype)
  * UserContextData
    * EncodedData
  * Username **required**
  * ValidationData
    * items [AttributeType](#attributetype)

### SignUpResponse
* SignUpResponse `object`: The response from the server for a registration request.
  * CodeDeliveryDetails
    * AttributeName
    * DeliveryMedium
    * Destination
  * UserConfirmed **required**
  * UserSub **required**

### SkippedIPRangeListType
* SkippedIPRangeListType `array`
  * items [StringType](#stringtype)

### SmsConfigurationType
* SmsConfigurationType `object`: The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account.
  * ExternalId
  * SnsCallerArn **required**

### SmsMfaConfigType
* SmsMfaConfigType `object`: The SMS text message multi-factor authentication (MFA) configuration type.
  * SmsAuthenticationMessage
  * SmsConfiguration
    * ExternalId
    * SnsCallerArn **required**

### SmsVerificationMessageType
* SmsVerificationMessageType `string`

### SoftwareTokenMFANotFoundException


### SoftwareTokenMFAUserCodeType
* SoftwareTokenMFAUserCodeType `string`

### SoftwareTokenMfaConfigType
* SoftwareTokenMfaConfigType `object`: The type used for enabling software token MFA at the user pool level.
  * Enabled

### SoftwareTokenMfaSettingsType
* SoftwareTokenMfaSettingsType `object`: The type used for enabling software token MFA at the user level. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts, disable MFA for users and turn on Adaptive Authentication for the user pool.
  * Enabled
  * PreferredMfa

### StartUserImportJobRequest
* StartUserImportJobRequest `object`: Represents the request to start the user import job.
  * JobId **required**
  * UserPoolId **required**

### StartUserImportJobResponse
* StartUserImportJobResponse `object`: Represents the response from the server to the request to start the user import job.
  * UserImportJob
    * CloudWatchLogsRoleArn
    * CompletionDate
    * CompletionMessage
    * CreationDate
    * FailedUsers
    * ImportedUsers
    * JobId
    * JobName
    * PreSignedUrl
    * SkippedUsers
    * StartDate
    * Status
    * UserPoolId

### StatusType
* StatusType `string` (values: Enabled, Disabled)

### StopUserImportJobRequest
* StopUserImportJobRequest `object`: Represents the request to stop the user import job.
  * JobId **required**
  * UserPoolId **required**

### StopUserImportJobResponse
* StopUserImportJobResponse `object`: Represents the response from the server to the request to stop the user import job.
  * UserImportJob
    * CloudWatchLogsRoleArn
    * CompletionDate
    * CompletionMessage
    * CreationDate
    * FailedUsers
    * ImportedUsers
    * JobId
    * JobName
    * PreSignedUrl
    * SkippedUsers
    * StartDate
    * Status
    * UserPoolId

### StringAttributeConstraintsType
* StringAttributeConstraintsType `object`: The constraints associated with a string attribute.
  * MaxLength
  * MinLength

### StringType
* StringType `string`

### SupportedIdentityProvidersListType
* SupportedIdentityProvidersListType `array`
  * items [ProviderNameType](#providernametype)

### TagKeysType
* TagKeysType `string`

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValueType
* TagValueType `string`

### TemporaryPasswordValidityDaysType
* TemporaryPasswordValidityDaysType `integer`

### TimeUnitsType
* TimeUnitsType `string` (values: seconds, minutes, hours, days)

### TokenModelType
* TokenModelType `string`

### TokenValidityUnitsType
* TokenValidityUnitsType `object`: The data type for TokenValidityUnits that specifics the time measurements for token validity.
  * AccessToken
  * IdToken
  * RefreshToken

### TooManyFailedAttemptsException


### TooManyRequestsException


### UICustomizationType
* UICustomizationType `object`: A container for the UI customization information for a user pool's built-in app UI.
  * CSS
  * CSSVersion
  * ClientId
  * CreationDate
  * ImageUrl
  * LastModifiedDate
  * UserPoolId

### UnexpectedLambdaException


### UnsupportedIdentityProviderException


### UnsupportedUserStateException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKeysType](#tagkeystype)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAuthEventFeedbackRequest
* UpdateAuthEventFeedbackRequest `object`
  * EventId **required**
  * FeedbackToken **required**
  * FeedbackValue **required**
  * UserPoolId **required**
  * Username **required**

### UpdateAuthEventFeedbackResponse
* UpdateAuthEventFeedbackResponse `object`

### UpdateDeviceStatusRequest
* UpdateDeviceStatusRequest `object`: Represents the request to update the device status.
  * AccessToken **required**
  * DeviceKey **required**
  * DeviceRememberedStatus

### UpdateDeviceStatusResponse
* UpdateDeviceStatusResponse `object`: The response to the request to update the device status.

### UpdateGroupRequest
* UpdateGroupRequest `object`
  * Description
  * GroupName **required**
  * Precedence
  * RoleArn
  * UserPoolId **required**

### UpdateGroupResponse
* UpdateGroupResponse `object`
  * Group
    * CreationDate
    * Description
    * GroupName
    * LastModifiedDate
    * Precedence
    * RoleArn
    * UserPoolId

### UpdateIdentityProviderRequest
* UpdateIdentityProviderRequest `object`
  * AttributeMapping
  * IdpIdentifiers
    * items [IdpIdentifierType](#idpidentifiertype)
  * ProviderDetails
  * ProviderName **required**
  * UserPoolId **required**

### UpdateIdentityProviderResponse
* UpdateIdentityProviderResponse `object`
  * IdentityProvider **required**
    * AttributeMapping
    * CreationDate
    * IdpIdentifiers
      * items [IdpIdentifierType](#idpidentifiertype)
    * LastModifiedDate
    * ProviderDetails
    * ProviderName
    * ProviderType
    * UserPoolId

### UpdateResourceServerRequest
* UpdateResourceServerRequest `object`
  * Identifier **required**
  * Name **required**
  * Scopes
    * items [ResourceServerScopeType](#resourceserverscopetype)
  * UserPoolId **required**

### UpdateResourceServerResponse
* UpdateResourceServerResponse `object`
  * ResourceServer **required**
    * Identifier
    * Name
    * Scopes
      * items [ResourceServerScopeType](#resourceserverscopetype)
    * UserPoolId

### UpdateUserAttributesRequest
* UpdateUserAttributesRequest `object`: Represents the request to update user attributes.
  * AccessToken **required**
  * ClientMetadata
  * UserAttributes **required**
    * items [AttributeType](#attributetype)

### UpdateUserAttributesResponse
* UpdateUserAttributesResponse `object`: Represents the response from the server for the request to update user attributes.
  * CodeDeliveryDetailsList
    * items [CodeDeliveryDetailsType](#codedeliverydetailstype)

### UpdateUserPoolClientRequest
* UpdateUserPoolClientRequest `object`: Represents the request to update the user pool client.
  * AccessTokenValidity
  * AllowedOAuthFlows
    * items [OAuthFlowType](#oauthflowtype)
  * AllowedOAuthFlowsUserPoolClient
  * AllowedOAuthScopes
    * items [ScopeType](#scopetype)
  * AnalyticsConfiguration
    * ApplicationArn
    * ApplicationId
    * ExternalId
    * RoleArn
    * UserDataShared
  * CallbackURLs
    * items [RedirectUrlType](#redirecturltype)
  * ClientId **required**
  * ClientName
  * DefaultRedirectURI
  * ExplicitAuthFlows
    * items [ExplicitAuthFlowsType](#explicitauthflowstype)
  * IdTokenValidity
  * LogoutURLs
    * items [RedirectUrlType](#redirecturltype)
  * PreventUserExistenceErrors
  * ReadAttributes
    * items [ClientPermissionType](#clientpermissiontype)
  * RefreshTokenValidity
  * SupportedIdentityProviders
    * items [ProviderNameType](#providernametype)
  * TokenValidityUnits
    * AccessToken
    * IdToken
    * RefreshToken
  * UserPoolId **required**
  * WriteAttributes
    * items [ClientPermissionType](#clientpermissiontype)

### UpdateUserPoolClientResponse
* UpdateUserPoolClientResponse `object`: Represents the response from the server to the request to update the user pool client.
  * UserPoolClient
    * AccessTokenValidity
    * AllowedOAuthFlows
      * items [OAuthFlowType](#oauthflowtype)
    * AllowedOAuthFlowsUserPoolClient
    * AllowedOAuthScopes
      * items [ScopeType](#scopetype)
    * AnalyticsConfiguration
      * ApplicationArn
      * ApplicationId
      * ExternalId
      * RoleArn
      * UserDataShared
    * CallbackURLs
      * items [RedirectUrlType](#redirecturltype)
    * ClientId
    * ClientName
    * ClientSecret
    * CreationDate
    * DefaultRedirectURI
    * ExplicitAuthFlows
      * items [ExplicitAuthFlowsType](#explicitauthflowstype)
    * IdTokenValidity
    * LastModifiedDate
    * LogoutURLs
      * items [RedirectUrlType](#redirecturltype)
    * PreventUserExistenceErrors
    * ReadAttributes
      * items [ClientPermissionType](#clientpermissiontype)
    * RefreshTokenValidity
    * SupportedIdentityProviders
      * items [ProviderNameType](#providernametype)
    * TokenValidityUnits
      * AccessToken
      * IdToken
      * RefreshToken
    * UserPoolId
    * WriteAttributes
      * items [ClientPermissionType](#clientpermissiontype)

### UpdateUserPoolDomainRequest
* UpdateUserPoolDomainRequest `object`: The UpdateUserPoolDomain request input.
  * CustomDomainConfig **required**
    * CertificateArn **required**
  * Domain **required**
  * UserPoolId **required**

### UpdateUserPoolDomainResponse
* UpdateUserPoolDomainResponse `object`: The UpdateUserPoolDomain response output.
  * CloudFrontDomain

### UpdateUserPoolRequest
* UpdateUserPoolRequest `object`: Represents the request to update the user pool.
  * AccountRecoverySetting
    * RecoveryMechanisms
      * items [RecoveryOptionType](#recoveryoptiontype)
  * AdminCreateUserConfig
    * AllowAdminCreateUserOnly
    * InviteMessageTemplate
      * EmailMessage
      * EmailSubject
      * SMSMessage
    * UnusedAccountValidityDays
  * AutoVerifiedAttributes
    * items [VerifiedAttributeType](#verifiedattributetype)
  * DeviceConfiguration
    * ChallengeRequiredOnNewDevice
    * DeviceOnlyRememberedOnUserPrompt
  * EmailConfiguration
    * ConfigurationSet
    * EmailSendingAccount
    * From
    * ReplyToEmailAddress
    * SourceArn
  * EmailVerificationMessage
  * EmailVerificationSubject
  * LambdaConfig
    * CreateAuthChallenge
    * CustomEmailSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * CustomMessage
    * CustomSMSSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * DefineAuthChallenge
    * KMSKeyID
    * PostAuthentication
    * PostConfirmation
    * PreAuthentication
    * PreSignUp
    * PreTokenGeneration
    * UserMigration
    * VerifyAuthChallengeResponse
  * MfaConfiguration
  * Policies
    * PasswordPolicy
      * MinimumLength
      * RequireLowercase
      * RequireNumbers
      * RequireSymbols
      * RequireUppercase
      * TemporaryPasswordValidityDays
  * SmsAuthenticationMessage
  * SmsConfiguration
    * ExternalId
    * SnsCallerArn **required**
  * SmsVerificationMessage
  * UserPoolAddOns
    * AdvancedSecurityMode **required**
  * UserPoolId **required**
  * UserPoolTags
  * VerificationMessageTemplate
    * DefaultEmailOption
    * EmailMessage
    * EmailMessageByLink
    * EmailSubject
    * EmailSubjectByLink
    * SmsMessage

### UpdateUserPoolResponse
* UpdateUserPoolResponse `object`: Represents the response from the server when you make a request to update the user pool.

### UserContextDataType
* UserContextDataType `object`: Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
  * EncodedData

### UserFilterType
* UserFilterType `string`

### UserImportInProgressException


### UserImportJobIdType
* UserImportJobIdType `string`

### UserImportJobNameType
* UserImportJobNameType `string`

### UserImportJobStatusType
* UserImportJobStatusType `string` (values: Created, Pending, InProgress, Stopping, Expired, Stopped, Failed, Succeeded)

### UserImportJobType
* UserImportJobType `object`: The user import job type.
  * CloudWatchLogsRoleArn
  * CompletionDate
  * CompletionMessage
  * CreationDate
  * FailedUsers
  * ImportedUsers
  * JobId
  * JobName
  * PreSignedUrl
  * SkippedUsers
  * StartDate
  * Status
  * UserPoolId

### UserImportJobsListType
* UserImportJobsListType `array`
  * items [UserImportJobType](#userimportjobtype)

### UserLambdaValidationException


### UserMFASettingListType
* UserMFASettingListType `array`
  * items [StringType](#stringtype)

### UserNotConfirmedException


### UserNotFoundException


### UserPoolAddOnNotEnabledException


### UserPoolAddOnsType
* UserPoolAddOnsType `object`: The user pool add-ons type.
  * AdvancedSecurityMode **required**

### UserPoolClientDescription
* UserPoolClientDescription `object`: The description of the user pool client.
  * ClientId
  * ClientName
  * UserPoolId

### UserPoolClientListType
* UserPoolClientListType `array`
  * items [UserPoolClientDescription](#userpoolclientdescription)

### UserPoolClientType
* UserPoolClientType `object`: Contains information about a user pool client.
  * AccessTokenValidity
  * AllowedOAuthFlows
    * items [OAuthFlowType](#oauthflowtype)
  * AllowedOAuthFlowsUserPoolClient
  * AllowedOAuthScopes
    * items [ScopeType](#scopetype)
  * AnalyticsConfiguration
    * ApplicationArn
    * ApplicationId
    * ExternalId
    * RoleArn
    * UserDataShared
  * CallbackURLs
    * items [RedirectUrlType](#redirecturltype)
  * ClientId
  * ClientName
  * ClientSecret
  * CreationDate
  * DefaultRedirectURI
  * ExplicitAuthFlows
    * items [ExplicitAuthFlowsType](#explicitauthflowstype)
  * IdTokenValidity
  * LastModifiedDate
  * LogoutURLs
    * items [RedirectUrlType](#redirecturltype)
  * PreventUserExistenceErrors
  * ReadAttributes
    * items [ClientPermissionType](#clientpermissiontype)
  * RefreshTokenValidity
  * SupportedIdentityProviders
    * items [ProviderNameType](#providernametype)
  * TokenValidityUnits
    * AccessToken
    * IdToken
    * RefreshToken
  * UserPoolId
  * WriteAttributes
    * items [ClientPermissionType](#clientpermissiontype)

### UserPoolDescriptionType
* UserPoolDescriptionType `object`: A user pool description.
  * CreationDate
  * Id
  * LambdaConfig
    * CreateAuthChallenge
    * CustomEmailSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * CustomMessage
    * CustomSMSSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * DefineAuthChallenge
    * KMSKeyID
    * PostAuthentication
    * PostConfirmation
    * PreAuthentication
    * PreSignUp
    * PreTokenGeneration
    * UserMigration
    * VerifyAuthChallengeResponse
  * LastModifiedDate
  * Name
  * Status

### UserPoolIdType
* UserPoolIdType `string`

### UserPoolListType
* UserPoolListType `array`
  * items [UserPoolDescriptionType](#userpooldescriptiontype)

### UserPoolMfaType
* UserPoolMfaType `string` (values: OFF, ON, OPTIONAL)

### UserPoolNameType
* UserPoolNameType `string`

### UserPoolPolicyType
* UserPoolPolicyType `object`: The policy associated with a user pool.
  * PasswordPolicy
    * MinimumLength
    * RequireLowercase
    * RequireNumbers
    * RequireSymbols
    * RequireUppercase
    * TemporaryPasswordValidityDays

### UserPoolTaggingException


### UserPoolTagsListType
* UserPoolTagsListType `array`
  * items [TagKeysType](#tagkeystype)

### UserPoolTagsType
* UserPoolTagsType `object`

### UserPoolType
* UserPoolType `object`: A container for information about the user pool.
  * AccountRecoverySetting
    * RecoveryMechanisms
      * items [RecoveryOptionType](#recoveryoptiontype)
  * AdminCreateUserConfig
    * AllowAdminCreateUserOnly
    * InviteMessageTemplate
      * EmailMessage
      * EmailSubject
      * SMSMessage
    * UnusedAccountValidityDays
  * AliasAttributes
    * items [AliasAttributeType](#aliasattributetype)
  * Arn
  * AutoVerifiedAttributes
    * items [VerifiedAttributeType](#verifiedattributetype)
  * CreationDate
  * CustomDomain
  * DeviceConfiguration
    * ChallengeRequiredOnNewDevice
    * DeviceOnlyRememberedOnUserPrompt
  * Domain
  * EmailConfiguration
    * ConfigurationSet
    * EmailSendingAccount
    * From
    * ReplyToEmailAddress
    * SourceArn
  * EmailConfigurationFailure
  * EmailVerificationMessage
  * EmailVerificationSubject
  * EstimatedNumberOfUsers
  * Id
  * LambdaConfig
    * CreateAuthChallenge
    * CustomEmailSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * CustomMessage
    * CustomSMSSender
      * LambdaArn **required**
      * LambdaVersion **required**
    * DefineAuthChallenge
    * KMSKeyID
    * PostAuthentication
    * PostConfirmation
    * PreAuthentication
    * PreSignUp
    * PreTokenGeneration
    * UserMigration
    * VerifyAuthChallengeResponse
  * LastModifiedDate
  * MfaConfiguration
  * Name
  * Policies
    * PasswordPolicy
      * MinimumLength
      * RequireLowercase
      * RequireNumbers
      * RequireSymbols
      * RequireUppercase
      * TemporaryPasswordValidityDays
  * SchemaAttributes
    * items [SchemaAttributeType](#schemaattributetype)
  * SmsAuthenticationMessage
  * SmsConfiguration
    * ExternalId
    * SnsCallerArn **required**
  * SmsConfigurationFailure
  * SmsVerificationMessage
  * Status
  * UserPoolAddOns
    * AdvancedSecurityMode **required**
  * UserPoolTags
  * UsernameAttributes
    * items [UsernameAttributeType](#usernameattributetype)
  * UsernameConfiguration
    * CaseSensitive **required**
  * VerificationMessageTemplate
    * DefaultEmailOption
    * EmailMessage
    * EmailMessageByLink
    * EmailSubject
    * EmailSubjectByLink
    * SmsMessage

### UserStatusType
* UserStatusType `string` (values: UNCONFIRMED, CONFIRMED, ARCHIVED, COMPROMISED, UNKNOWN, RESET_REQUIRED, FORCE_CHANGE_PASSWORD)

### UserType
* UserType `object`: The user type.
  * Attributes
    * items [AttributeType](#attributetype)
  * Enabled
  * MFAOptions
    * items [MFAOptionType](#mfaoptiontype)
  * UserCreateDate
  * UserLastModifiedDate
  * UserStatus
  * Username

### UsernameAttributeType
* UsernameAttributeType `string` (values: phone_number, email)

### UsernameAttributesListType
* UsernameAttributesListType `array`
  * items [UsernameAttributeType](#usernameattributetype)

### UsernameConfigurationType
* UsernameConfigurationType `object`: The username configuration type. 
  * CaseSensitive **required**

### UsernameExistsException


### UsernameType
* UsernameType `string`

### UsersListType
* UsersListType `array`
  * items [UserType](#usertype)

### VerificationMessageTemplateType
* VerificationMessageTemplateType `object`: The template for verification messages.
  * DefaultEmailOption
  * EmailMessage
  * EmailMessageByLink
  * EmailSubject
  * EmailSubjectByLink
  * SmsMessage

### VerifiedAttributeType
* VerifiedAttributeType `string` (values: phone_number, email)

### VerifiedAttributesListType
* VerifiedAttributesListType `array`
  * items [VerifiedAttributeType](#verifiedattributetype)

### VerifySoftwareTokenRequest
* VerifySoftwareTokenRequest `object`
  * AccessToken
  * FriendlyDeviceName
  * Session
  * UserCode **required**

### VerifySoftwareTokenResponse
* VerifySoftwareTokenResponse `object`
  * Session
  * Status

### VerifySoftwareTokenResponseType
* VerifySoftwareTokenResponseType `string` (values: SUCCESS, ERROR)

### VerifyUserAttributeRequest
* VerifyUserAttributeRequest `object`: Represents the request to verify user attributes.
  * AccessToken **required**
  * AttributeName **required**
  * Code **required**

### VerifyUserAttributeResponse
* VerifyUserAttributeResponse `object`: A container representing the response from the server from the request to verify user attributes.

### WrappedBooleanType
* WrappedBooleanType `boolean`


