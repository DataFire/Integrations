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

amazonaws_cognito_idp.AddCustomAttributes({
  "UserPoolId": "",
  "CustomAttributes": []
}).then(data => {
  console.log(data);
});
```

## Description

<p>Using the Amazon Cognito User Pools API, you can create a user pool to manage directories and users. You can authenticate a user to obtain tokens related to user identity and access policies.</p> <p>This API reference provides information about user pools in Amazon Cognito User Pools.</p> <p>For more information, see the Amazon Cognito Documentation.</p>

## Actions

### AddCustomAttributes



```js
amazonaws_cognito_idp.AddCustomAttributes({
  "UserPoolId": "",
  "CustomAttributes": []
}, context)
```

#### Input
* input `object`
  * CustomAttributes **required** [CustomAttributesListType](#customattributeslisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [AddCustomAttributesResponse](#addcustomattributesresponse)

### AdminAddUserToGroup



```js
amazonaws_cognito_idp.AdminAddUserToGroup({
  "UserPoolId": "",
  "Username": "",
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
*Output schema unknown*

### AdminConfirmSignUp



```js
amazonaws_cognito_idp.AdminConfirmSignUp({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminConfirmSignUpResponse](#adminconfirmsignupresponse)

### AdminCreateUser



```js
amazonaws_cognito_idp.AdminCreateUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * DesiredDeliveryMediums [DeliveryMediumListType](#deliverymediumlisttype)
  * ForceAliasCreation [ForceAliasCreation](#forcealiascreation)
  * MessageAction [MessageActionType](#messageactiontype)
  * TemporaryPassword [PasswordType](#passwordtype)
  * UserAttributes [AttributeListType](#attributelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)
  * ValidationData [AttributeListType](#attributelisttype)

#### Output
* output [AdminCreateUserResponse](#admincreateuserresponse)

### AdminDeleteUser



```js
amazonaws_cognito_idp.AdminDeleteUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
*Output schema unknown*

### AdminDeleteUserAttributes



```js
amazonaws_cognito_idp.AdminDeleteUserAttributes({
  "UserPoolId": "",
  "Username": "",
  "UserAttributeNames": []
}, context)
```

#### Input
* input `object`
  * UserAttributeNames **required** [AttributeNameListType](#attributenamelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminDeleteUserAttributesResponse](#admindeleteuserattributesresponse)

### AdminDisableProviderForUser



```js
amazonaws_cognito_idp.AdminDisableProviderForUser({
  "UserPoolId": "",
  "User": {}
}, context)
```

#### Input
* input `object`
  * User **required** [ProviderUserIdentifierType](#provideruseridentifiertype)
  * UserPoolId **required** [StringType](#stringtype)

#### Output
* output [AdminDisableProviderForUserResponse](#admindisableproviderforuserresponse)

### AdminDisableUser



```js
amazonaws_cognito_idp.AdminDisableUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminDisableUserResponse](#admindisableuserresponse)

### AdminEnableUser



```js
amazonaws_cognito_idp.AdminEnableUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminEnableUserResponse](#adminenableuserresponse)

### AdminForgetDevice



```js
amazonaws_cognito_idp.AdminForgetDevice({
  "UserPoolId": "",
  "Username": "",
  "DeviceKey": ""
}, context)
```

#### Input
* input `object`
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
*Output schema unknown*

### AdminGetDevice



```js
amazonaws_cognito_idp.AdminGetDevice({
  "DeviceKey": "",
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminGetDeviceResponse](#admingetdeviceresponse)

### AdminGetUser



```js
amazonaws_cognito_idp.AdminGetUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminGetUserResponse](#admingetuserresponse)

### AdminInitiateAuth



```js
amazonaws_cognito_idp.AdminInitiateAuth({
  "UserPoolId": "",
  "ClientId": "",
  "AuthFlow": ""
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * AuthFlow **required** [AuthFlowType](#authflowtype)
  * AuthParameters [AuthParametersType](#authparameterstype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ClientMetadata [ClientMetadataType](#clientmetadatatype)
  * ContextData [ContextDataType](#contextdatatype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [AdminInitiateAuthResponse](#admininitiateauthresponse)

### AdminLinkProviderForUser



```js
amazonaws_cognito_idp.AdminLinkProviderForUser({
  "UserPoolId": "",
  "DestinationUser": {},
  "SourceUser": {}
}, context)
```

#### Input
* input `object`
  * DestinationUser **required** [ProviderUserIdentifierType](#provideruseridentifiertype)
  * SourceUser **required** [ProviderUserIdentifierType](#provideruseridentifiertype)
  * UserPoolId **required** [StringType](#stringtype)

#### Output
* output [AdminLinkProviderForUserResponse](#adminlinkproviderforuserresponse)

### AdminListDevices



```js
amazonaws_cognito_idp.AdminListDevices({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * Limit [QueryLimitType](#querylimittype)
  * PaginationToken [SearchPaginationTokenType](#searchpaginationtokentype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminListDevicesResponse](#adminlistdevicesresponse)

### AdminListGroupsForUser



```js
amazonaws_cognito_idp.AdminListGroupsForUser({
  "Username": "",
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * Limit [QueryLimitType](#querylimittype)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminListGroupsForUserResponse](#adminlistgroupsforuserresponse)

### AdminListUserAuthEvents



```js
amazonaws_cognito_idp.AdminListUserAuthEvents({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [QueryLimitType](#querylimittype)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminListUserAuthEventsResponse](#adminlistuserautheventsresponse)

### AdminRemoveUserFromGroup



```js
amazonaws_cognito_idp.AdminRemoveUserFromGroup({
  "UserPoolId": "",
  "Username": "",
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
*Output schema unknown*

### AdminResetUserPassword



```js
amazonaws_cognito_idp.AdminResetUserPassword({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminResetUserPasswordResponse](#adminresetuserpasswordresponse)

### AdminRespondToAuthChallenge



```js
amazonaws_cognito_idp.AdminRespondToAuthChallenge({
  "UserPoolId": "",
  "ClientId": "",
  "ChallengeName": ""
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ChallengeName **required** [ChallengeNameType](#challengenametype)
  * ChallengeResponses [ChallengeResponsesType](#challengeresponsestype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ContextData [ContextDataType](#contextdatatype)
  * Session [SessionType](#sessiontype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [AdminRespondToAuthChallengeResponse](#adminrespondtoauthchallengeresponse)

### AdminSetUserMFAPreference



```js
amazonaws_cognito_idp.AdminSetUserMFAPreference({
  "Username": "",
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * SMSMfaSettings [SMSMfaSettingsType](#smsmfasettingstype)
  * SoftwareTokenMfaSettings [SoftwareTokenMfaSettingsType](#softwaretokenmfasettingstype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminSetUserMFAPreferenceResponse](#adminsetusermfapreferenceresponse)

### AdminSetUserSettings



```js
amazonaws_cognito_idp.AdminSetUserSettings({
  "UserPoolId": "",
  "Username": "",
  "MFAOptions": []
}, context)
```

#### Input
* input `object`
  * MFAOptions **required** [MFAOptionListType](#mfaoptionlisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminSetUserSettingsResponse](#adminsetusersettingsresponse)

### AdminUpdateAuthEventFeedback



```js
amazonaws_cognito_idp.AdminUpdateAuthEventFeedback({
  "UserPoolId": "",
  "Username": "",
  "EventId": "",
  "FeedbackValue": ""
}, context)
```

#### Input
* input `object`
  * EventId **required** [EventIdType](#eventidtype)
  * FeedbackValue **required** [FeedbackValueType](#feedbackvaluetype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminUpdateAuthEventFeedbackResponse](#adminupdateautheventfeedbackresponse)

### AdminUpdateDeviceStatus



```js
amazonaws_cognito_idp.AdminUpdateDeviceStatus({
  "UserPoolId": "",
  "Username": "",
  "DeviceKey": ""
}, context)
```

#### Input
* input `object`
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * DeviceRememberedStatus [DeviceRememberedStatusType](#devicerememberedstatustype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminUpdateDeviceStatusResponse](#adminupdatedevicestatusresponse)

### AdminUpdateUserAttributes



```js
amazonaws_cognito_idp.AdminUpdateUserAttributes({
  "UserPoolId": "",
  "Username": "",
  "UserAttributes": []
}, context)
```

#### Input
* input `object`
  * UserAttributes **required** [AttributeListType](#attributelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminUpdateUserAttributesResponse](#adminupdateuserattributesresponse)

### AdminUserGlobalSignOut



```js
amazonaws_cognito_idp.AdminUserGlobalSignOut({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [AdminUserGlobalSignOutResponse](#adminuserglobalsignoutresponse)

### AssociateSoftwareToken



```js
amazonaws_cognito_idp.AssociateSoftwareToken({}, context)
```

#### Input
* input `object`
  * AccessToken [TokenModelType](#tokenmodeltype)
  * Session [SessionType](#sessiontype)

#### Output
* output [AssociateSoftwareTokenResponse](#associatesoftwaretokenresponse)

### ChangePassword



```js
amazonaws_cognito_idp.ChangePassword({
  "PreviousPassword": "",
  "ProposedPassword": "",
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * PreviousPassword **required** [PasswordType](#passwordtype)
  * ProposedPassword **required** [PasswordType](#passwordtype)

#### Output
* output [ChangePasswordResponse](#changepasswordresponse)

### ConfirmDevice



```js
amazonaws_cognito_idp.ConfirmDevice({
  "AccessToken": "",
  "DeviceKey": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * DeviceName [DeviceNameType](#devicenametype)
  * DeviceSecretVerifierConfig [DeviceSecretVerifierConfigType](#devicesecretverifierconfigtype)

#### Output
* output [ConfirmDeviceResponse](#confirmdeviceresponse)

### ConfirmForgotPassword



```js
amazonaws_cognito_idp.ConfirmForgotPassword({
  "ClientId": "",
  "Username": "",
  "ConfirmationCode": "",
  "Password": ""
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ConfirmationCode **required** [ConfirmationCodeType](#confirmationcodetype)
  * Password **required** [PasswordType](#passwordtype)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [ConfirmForgotPasswordResponse](#confirmforgotpasswordresponse)

### ConfirmSignUp



```js
amazonaws_cognito_idp.ConfirmSignUp({
  "ClientId": "",
  "Username": "",
  "ConfirmationCode": ""
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ConfirmationCode **required** [ConfirmationCodeType](#confirmationcodetype)
  * ForceAliasCreation [ForceAliasCreation](#forcealiascreation)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [ConfirmSignUpResponse](#confirmsignupresponse)

### CreateGroup



```js
amazonaws_cognito_idp.CreateGroup({
  "GroupName": "",
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * Description [DescriptionType](#descriptiontype)
  * GroupName **required** [GroupNameType](#groupnametype)
  * Precedence [PrecedenceType](#precedencetype)
  * RoleArn [ArnType](#arntype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [CreateGroupResponse](#creategroupresponse)

### CreateIdentityProvider



```js
amazonaws_cognito_idp.CreateIdentityProvider({
  "UserPoolId": "",
  "ProviderName": "",
  "ProviderType": "",
  "ProviderDetails": []
}, context)
```

#### Input
* input `object`
  * AttributeMapping [AttributeMappingType](#attributemappingtype)
  * IdpIdentifiers [IdpIdentifiersListType](#idpidentifierslisttype)
  * ProviderDetails **required** [ProviderDetailsType](#providerdetailstype)
  * ProviderName **required** [ProviderNameTypeV1](#providernametypev1)
  * ProviderType **required** [IdentityProviderTypeType](#identityprovidertypetype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [CreateIdentityProviderResponse](#createidentityproviderresponse)

### CreateResourceServer



```js
amazonaws_cognito_idp.CreateResourceServer({
  "UserPoolId": "",
  "Identifier": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Identifier **required** [ResourceServerIdentifierType](#resourceserveridentifiertype)
  * Name **required** [ResourceServerNameType](#resourceservernametype)
  * Scopes [ResourceServerScopeListType](#resourceserverscopelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [CreateResourceServerResponse](#createresourceserverresponse)

### CreateUserImportJob



```js
amazonaws_cognito_idp.CreateUserImportJob({
  "JobName": "",
  "UserPoolId": "",
  "CloudWatchLogsRoleArn": ""
}, context)
```

#### Input
* input `object`
  * CloudWatchLogsRoleArn **required** [ArnType](#arntype)
  * JobName **required** [UserImportJobNameType](#userimportjobnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [CreateUserImportJobResponse](#createuserimportjobresponse)

### CreateUserPool



```js
amazonaws_cognito_idp.CreateUserPool({
  "PoolName": ""
}, context)
```

#### Input
* input `object`
  * AdminCreateUserConfig [AdminCreateUserConfigType](#admincreateuserconfigtype)
  * AliasAttributes [AliasAttributesListType](#aliasattributeslisttype)
  * AutoVerifiedAttributes [VerifiedAttributesListType](#verifiedattributeslisttype)
  * DeviceConfiguration [DeviceConfigurationType](#deviceconfigurationtype)
  * EmailConfiguration [EmailConfigurationType](#emailconfigurationtype)
  * EmailVerificationMessage [EmailVerificationMessageType](#emailverificationmessagetype)
  * EmailVerificationSubject [EmailVerificationSubjectType](#emailverificationsubjecttype)
  * LambdaConfig [LambdaConfigType](#lambdaconfigtype)
  * MfaConfiguration [UserPoolMfaType](#userpoolmfatype)
  * Policies [UserPoolPolicyType](#userpoolpolicytype)
  * PoolName **required** [UserPoolNameType](#userpoolnametype)
  * Schema [SchemaAttributesListType](#schemaattributeslisttype)
  * SmsAuthenticationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * SmsConfiguration [SmsConfigurationType](#smsconfigurationtype)
  * SmsVerificationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * UserPoolAddOns [UserPoolAddOnsType](#userpooladdonstype)
  * UserPoolTags [UserPoolTagsType](#userpooltagstype)
  * UsernameAttributes [UsernameAttributesListType](#usernameattributeslisttype)
  * VerificationMessageTemplate [VerificationMessageTemplateType](#verificationmessagetemplatetype)

#### Output
* output [CreateUserPoolResponse](#createuserpoolresponse)

### CreateUserPoolClient



```js
amazonaws_cognito_idp.CreateUserPoolClient({
  "UserPoolId": "",
  "ClientName": ""
}, context)
```

#### Input
* input `object`
  * AllowedOAuthFlows [OAuthFlowsType](#oauthflowstype)
  * AllowedOAuthFlowsUserPoolClient [BooleanType](#booleantype)
  * AllowedOAuthScopes [ScopeListType](#scopelisttype)
  * AnalyticsConfiguration [AnalyticsConfigurationType](#analyticsconfigurationtype)
  * CallbackURLs [CallbackURLsListType](#callbackurlslisttype)
  * ClientName **required** [ClientNameType](#clientnametype)
  * DefaultRedirectURI [RedirectUrlType](#redirecturltype)
  * ExplicitAuthFlows [ExplicitAuthFlowsListType](#explicitauthflowslisttype)
  * GenerateSecret [GenerateSecret](#generatesecret)
  * LogoutURLs [LogoutURLsListType](#logouturlslisttype)
  * ReadAttributes [ClientPermissionListType](#clientpermissionlisttype)
  * RefreshTokenValidity [RefreshTokenValidityType](#refreshtokenvaliditytype)
  * SupportedIdentityProviders [SupportedIdentityProvidersListType](#supportedidentityproviderslisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * WriteAttributes [ClientPermissionListType](#clientpermissionlisttype)

#### Output
* output [CreateUserPoolClientResponse](#createuserpoolclientresponse)

### CreateUserPoolDomain



```js
amazonaws_cognito_idp.CreateUserPoolDomain({
  "Domain": "",
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * Domain **required** [DomainType](#domaintype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [CreateUserPoolDomainResponse](#createuserpooldomainresponse)

### DeleteGroup



```js
amazonaws_cognito_idp.DeleteGroup({
  "GroupName": "",
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
*Output schema unknown*

### DeleteIdentityProvider



```js
amazonaws_cognito_idp.DeleteIdentityProvider({
  "UserPoolId": "",
  "ProviderName": ""
}, context)
```

#### Input
* input `object`
  * ProviderName **required** [ProviderNameType](#providernametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
*Output schema unknown*

### DeleteResourceServer



```js
amazonaws_cognito_idp.DeleteResourceServer({
  "UserPoolId": "",
  "Identifier": ""
}, context)
```

#### Input
* input `object`
  * Identifier **required** [ResourceServerIdentifierType](#resourceserveridentifiertype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
*Output schema unknown*

### DeleteUser



```js
amazonaws_cognito_idp.DeleteUser({
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)

#### Output
*Output schema unknown*

### DeleteUserAttributes



```js
amazonaws_cognito_idp.DeleteUserAttributes({
  "UserAttributeNames": [],
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * UserAttributeNames **required** [AttributeNameListType](#attributenamelisttype)

#### Output
* output [DeleteUserAttributesResponse](#deleteuserattributesresponse)

### DeleteUserPool



```js
amazonaws_cognito_idp.DeleteUserPool({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
*Output schema unknown*

### DeleteUserPoolClient



```js
amazonaws_cognito_idp.DeleteUserPoolClient({
  "UserPoolId": "",
  "ClientId": ""
}, context)
```

#### Input
* input `object`
  * ClientId **required** [ClientIdType](#clientidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
*Output schema unknown*

### DeleteUserPoolDomain



```js
amazonaws_cognito_idp.DeleteUserPoolDomain({
  "Domain": "",
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * Domain **required** [DomainType](#domaintype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [DeleteUserPoolDomainResponse](#deleteuserpooldomainresponse)

### DescribeIdentityProvider



```js
amazonaws_cognito_idp.DescribeIdentityProvider({
  "UserPoolId": "",
  "ProviderName": ""
}, context)
```

#### Input
* input `object`
  * ProviderName **required** [ProviderNameType](#providernametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [DescribeIdentityProviderResponse](#describeidentityproviderresponse)

### DescribeResourceServer



```js
amazonaws_cognito_idp.DescribeResourceServer({
  "UserPoolId": "",
  "Identifier": ""
}, context)
```

#### Input
* input `object`
  * Identifier **required** [ResourceServerIdentifierType](#resourceserveridentifiertype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [DescribeResourceServerResponse](#describeresourceserverresponse)

### DescribeRiskConfiguration



```js
amazonaws_cognito_idp.DescribeRiskConfiguration({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * ClientId [ClientIdType](#clientidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [DescribeRiskConfigurationResponse](#describeriskconfigurationresponse)

### DescribeUserImportJob



```js
amazonaws_cognito_idp.DescribeUserImportJob({
  "UserPoolId": "",
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** [UserImportJobIdType](#userimportjobidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [DescribeUserImportJobResponse](#describeuserimportjobresponse)

### DescribeUserPool



```js
amazonaws_cognito_idp.DescribeUserPool({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [DescribeUserPoolResponse](#describeuserpoolresponse)

### DescribeUserPoolClient



```js
amazonaws_cognito_idp.DescribeUserPoolClient({
  "UserPoolId": "",
  "ClientId": ""
}, context)
```

#### Input
* input `object`
  * ClientId **required** [ClientIdType](#clientidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [DescribeUserPoolClientResponse](#describeuserpoolclientresponse)

### DescribeUserPoolDomain



```js
amazonaws_cognito_idp.DescribeUserPoolDomain({
  "Domain": ""
}, context)
```

#### Input
* input `object`
  * Domain **required** [DomainType](#domaintype)

#### Output
* output [DescribeUserPoolDomainResponse](#describeuserpooldomainresponse)

### ForgetDevice



```js
amazonaws_cognito_idp.ForgetDevice({
  "DeviceKey": ""
}, context)
```

#### Input
* input `object`
  * AccessToken [TokenModelType](#tokenmodeltype)
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)

#### Output
*Output schema unknown*

### ForgotPassword



```js
amazonaws_cognito_idp.ForgotPassword({
  "ClientId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [ForgotPasswordResponse](#forgotpasswordresponse)

### GetCSVHeader



```js
amazonaws_cognito_idp.GetCSVHeader({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [GetCSVHeaderResponse](#getcsvheaderresponse)

### GetDevice



```js
amazonaws_cognito_idp.GetDevice({
  "DeviceKey": ""
}, context)
```

#### Input
* input `object`
  * AccessToken [TokenModelType](#tokenmodeltype)
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)

#### Output
* output [GetDeviceResponse](#getdeviceresponse)

### GetGroup



```js
amazonaws_cognito_idp.GetGroup({
  "GroupName": "",
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [GetGroupResponse](#getgroupresponse)

### GetIdentityProviderByIdentifier



```js
amazonaws_cognito_idp.GetIdentityProviderByIdentifier({
  "UserPoolId": "",
  "IdpIdentifier": ""
}, context)
```

#### Input
* input `object`
  * IdpIdentifier **required** [IdpIdentifierType](#idpidentifiertype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [GetIdentityProviderByIdentifierResponse](#getidentityproviderbyidentifierresponse)

### GetSigningCertificate



```js
amazonaws_cognito_idp.GetSigningCertificate({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [GetSigningCertificateResponse](#getsigningcertificateresponse)

### GetUICustomization



```js
amazonaws_cognito_idp.GetUICustomization({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * ClientId [ClientIdType](#clientidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [GetUICustomizationResponse](#getuicustomizationresponse)

### GetUser



```js
amazonaws_cognito_idp.GetUser({
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)

#### Output
* output [GetUserResponse](#getuserresponse)

### GetUserAttributeVerificationCode



```js
amazonaws_cognito_idp.GetUserAttributeVerificationCode({
  "AccessToken": "",
  "AttributeName": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * AttributeName **required** [AttributeNameType](#attributenametype)

#### Output
* output [GetUserAttributeVerificationCodeResponse](#getuserattributeverificationcoderesponse)

### GetUserPoolMfaConfig



```js
amazonaws_cognito_idp.GetUserPoolMfaConfig({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [GetUserPoolMfaConfigResponse](#getuserpoolmfaconfigresponse)

### GlobalSignOut



```js
amazonaws_cognito_idp.GlobalSignOut({
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)

#### Output
* output [GlobalSignOutResponse](#globalsignoutresponse)

### InitiateAuth



```js
amazonaws_cognito_idp.InitiateAuth({
  "AuthFlow": "",
  "ClientId": ""
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * AuthFlow **required** [AuthFlowType](#authflowtype)
  * AuthParameters [AuthParametersType](#authparameterstype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ClientMetadata [ClientMetadataType](#clientmetadatatype)
  * UserContextData [UserContextDataType](#usercontextdatatype)

#### Output
* output [InitiateAuthResponse](#initiateauthresponse)

### ListDevices



```js
amazonaws_cognito_idp.ListDevices({
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * Limit [QueryLimitType](#querylimittype)
  * PaginationToken [SearchPaginationTokenType](#searchpaginationtokentype)

#### Output
* output [ListDevicesResponse](#listdevicesresponse)

### ListGroups



```js
amazonaws_cognito_idp.ListGroups({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * Limit [QueryLimitType](#querylimittype)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [ListGroupsResponse](#listgroupsresponse)

### ListIdentityProviders



```js
amazonaws_cognito_idp.ListIdentityProviders({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [ListProvidersLimitType](#listproviderslimittype)
  * NextToken [PaginationKeyType](#paginationkeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [ListIdentityProvidersResponse](#listidentityprovidersresponse)

### ListResourceServers



```js
amazonaws_cognito_idp.ListResourceServers({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [ListResourceServersLimitType](#listresourceserverslimittype)
  * NextToken [PaginationKeyType](#paginationkeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [ListResourceServersResponse](#listresourceserversresponse)

### ListUserImportJobs



```js
amazonaws_cognito_idp.ListUserImportJobs({
  "UserPoolId": "",
  "MaxResults": 0
}, context)
```

#### Input
* input `object`
  * MaxResults **required** [PoolQueryLimitType](#poolquerylimittype)
  * PaginationToken [PaginationKeyType](#paginationkeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [ListUserImportJobsResponse](#listuserimportjobsresponse)

### ListUserPoolClients



```js
amazonaws_cognito_idp.ListUserPoolClients({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [QueryLimit](#querylimit)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [ListUserPoolClientsResponse](#listuserpoolclientsresponse)

### ListUserPools



```js
amazonaws_cognito_idp.ListUserPools({
  "MaxResults": 0
}, context)
```

#### Input
* input `object`
  * MaxResults **required** [PoolQueryLimitType](#poolquerylimittype)
  * NextToken [PaginationKeyType](#paginationkeytype)

#### Output
* output [ListUserPoolsResponse](#listuserpoolsresponse)

### ListUsers



```js
amazonaws_cognito_idp.ListUsers({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * AttributesToGet [SearchedAttributeNamesListType](#searchedattributenameslisttype)
  * Filter [UserFilterType](#userfiltertype)
  * Limit [QueryLimitType](#querylimittype)
  * PaginationToken [SearchPaginationTokenType](#searchpaginationtokentype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [ListUsersResponse](#listusersresponse)

### ListUsersInGroup



```js
amazonaws_cognito_idp.ListUsersInGroup({
  "UserPoolId": "",
  "GroupName": ""
}, context)
```

#### Input
* input `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * Limit [QueryLimitType](#querylimittype)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [ListUsersInGroupResponse](#listusersingroupresponse)

### ResendConfirmationCode



```js
amazonaws_cognito_idp.ResendConfirmationCode({
  "ClientId": "",
  "Username": ""
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [ResendConfirmationCodeResponse](#resendconfirmationcoderesponse)

### RespondToAuthChallenge



```js
amazonaws_cognito_idp.RespondToAuthChallenge({
  "ClientId": "",
  "ChallengeName": ""
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ChallengeName **required** [ChallengeNameType](#challengenametype)
  * ChallengeResponses [ChallengeResponsesType](#challengeresponsestype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * Session [SessionType](#sessiontype)
  * UserContextData [UserContextDataType](#usercontextdatatype)

#### Output
* output [RespondToAuthChallengeResponse](#respondtoauthchallengeresponse)

### SetRiskConfiguration



```js
amazonaws_cognito_idp.SetRiskConfiguration({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * AccountTakeoverRiskConfiguration [AccountTakeoverRiskConfigurationType](#accounttakeoverriskconfigurationtype)
  * ClientId [ClientIdType](#clientidtype)
  * CompromisedCredentialsRiskConfiguration [CompromisedCredentialsRiskConfigurationType](#compromisedcredentialsriskconfigurationtype)
  * RiskExceptionConfiguration [RiskExceptionConfigurationType](#riskexceptionconfigurationtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [SetRiskConfigurationResponse](#setriskconfigurationresponse)

### SetUICustomization



```js
amazonaws_cognito_idp.SetUICustomization({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * CSS [CSSType](#csstype)
  * ClientId [ClientIdType](#clientidtype)
  * ImageFile [ImageFileType](#imagefiletype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [SetUICustomizationResponse](#setuicustomizationresponse)

### SetUserMFAPreference



```js
amazonaws_cognito_idp.SetUserMFAPreference({
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * SMSMfaSettings [SMSMfaSettingsType](#smsmfasettingstype)
  * SoftwareTokenMfaSettings [SoftwareTokenMfaSettingsType](#softwaretokenmfasettingstype)

#### Output
* output [SetUserMFAPreferenceResponse](#setusermfapreferenceresponse)

### SetUserPoolMfaConfig



```js
amazonaws_cognito_idp.SetUserPoolMfaConfig({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * MfaConfiguration [UserPoolMfaType](#userpoolmfatype)
  * SmsMfaConfiguration [SmsMfaConfigType](#smsmfaconfigtype)
  * SoftwareTokenMfaConfiguration [SoftwareTokenMfaConfigType](#softwaretokenmfaconfigtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [SetUserPoolMfaConfigResponse](#setuserpoolmfaconfigresponse)

### SetUserSettings



```js
amazonaws_cognito_idp.SetUserSettings({
  "AccessToken": "",
  "MFAOptions": []
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * MFAOptions **required** [MFAOptionListType](#mfaoptionlisttype)

#### Output
* output [SetUserSettingsResponse](#setusersettingsresponse)

### SignUp



```js
amazonaws_cognito_idp.SignUp({
  "ClientId": "",
  "Username": "",
  "Password": ""
}, context)
```

#### Input
* input `object`
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * Password **required** [PasswordType](#passwordtype)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserAttributes [AttributeListType](#attributelisttype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)
  * ValidationData [AttributeListType](#attributelisttype)

#### Output
* output [SignUpResponse](#signupresponse)

### StartUserImportJob



```js
amazonaws_cognito_idp.StartUserImportJob({
  "UserPoolId": "",
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** [UserImportJobIdType](#userimportjobidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [StartUserImportJobResponse](#startuserimportjobresponse)

### StopUserImportJob



```js
amazonaws_cognito_idp.StopUserImportJob({
  "UserPoolId": "",
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** [UserImportJobIdType](#userimportjobidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [StopUserImportJobResponse](#stopuserimportjobresponse)

### UpdateAuthEventFeedback



```js
amazonaws_cognito_idp.UpdateAuthEventFeedback({
  "UserPoolId": "",
  "Username": "",
  "EventId": "",
  "FeedbackToken": "",
  "FeedbackValue": ""
}, context)
```

#### Input
* input `object`
  * EventId **required** [EventIdType](#eventidtype)
  * FeedbackToken **required** [TokenModelType](#tokenmodeltype)
  * FeedbackValue **required** [FeedbackValueType](#feedbackvaluetype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

#### Output
* output [UpdateAuthEventFeedbackResponse](#updateautheventfeedbackresponse)

### UpdateDeviceStatus



```js
amazonaws_cognito_idp.UpdateDeviceStatus({
  "AccessToken": "",
  "DeviceKey": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * DeviceRememberedStatus [DeviceRememberedStatusType](#devicerememberedstatustype)

#### Output
* output [UpdateDeviceStatusResponse](#updatedevicestatusresponse)

### UpdateGroup



```js
amazonaws_cognito_idp.UpdateGroup({
  "GroupName": "",
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * Description [DescriptionType](#descriptiontype)
  * GroupName **required** [GroupNameType](#groupnametype)
  * Precedence [PrecedenceType](#precedencetype)
  * RoleArn [ArnType](#arntype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [UpdateGroupResponse](#updategroupresponse)

### UpdateIdentityProvider



```js
amazonaws_cognito_idp.UpdateIdentityProvider({
  "UserPoolId": "",
  "ProviderName": ""
}, context)
```

#### Input
* input `object`
  * AttributeMapping [AttributeMappingType](#attributemappingtype)
  * IdpIdentifiers [IdpIdentifiersListType](#idpidentifierslisttype)
  * ProviderDetails [ProviderDetailsType](#providerdetailstype)
  * ProviderName **required** [ProviderNameType](#providernametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [UpdateIdentityProviderResponse](#updateidentityproviderresponse)

### UpdateResourceServer



```js
amazonaws_cognito_idp.UpdateResourceServer({
  "UserPoolId": "",
  "Identifier": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Identifier **required** [ResourceServerIdentifierType](#resourceserveridentifiertype)
  * Name **required** [ResourceServerNameType](#resourceservernametype)
  * Scopes [ResourceServerScopeListType](#resourceserverscopelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

#### Output
* output [UpdateResourceServerResponse](#updateresourceserverresponse)

### UpdateUserAttributes



```js
amazonaws_cognito_idp.UpdateUserAttributes({
  "UserAttributes": [],
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * UserAttributes **required** [AttributeListType](#attributelisttype)

#### Output
* output [UpdateUserAttributesResponse](#updateuserattributesresponse)

### UpdateUserPool



```js
amazonaws_cognito_idp.UpdateUserPool({
  "UserPoolId": ""
}, context)
```

#### Input
* input `object`
  * AdminCreateUserConfig [AdminCreateUserConfigType](#admincreateuserconfigtype)
  * AutoVerifiedAttributes [VerifiedAttributesListType](#verifiedattributeslisttype)
  * DeviceConfiguration [DeviceConfigurationType](#deviceconfigurationtype)
  * EmailConfiguration [EmailConfigurationType](#emailconfigurationtype)
  * EmailVerificationMessage [EmailVerificationMessageType](#emailverificationmessagetype)
  * EmailVerificationSubject [EmailVerificationSubjectType](#emailverificationsubjecttype)
  * LambdaConfig [LambdaConfigType](#lambdaconfigtype)
  * MfaConfiguration [UserPoolMfaType](#userpoolmfatype)
  * Policies [UserPoolPolicyType](#userpoolpolicytype)
  * SmsAuthenticationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * SmsConfiguration [SmsConfigurationType](#smsconfigurationtype)
  * SmsVerificationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * UserPoolAddOns [UserPoolAddOnsType](#userpooladdonstype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * UserPoolTags [UserPoolTagsType](#userpooltagstype)
  * VerificationMessageTemplate [VerificationMessageTemplateType](#verificationmessagetemplatetype)

#### Output
* output [UpdateUserPoolResponse](#updateuserpoolresponse)

### UpdateUserPoolClient



```js
amazonaws_cognito_idp.UpdateUserPoolClient({
  "UserPoolId": "",
  "ClientId": ""
}, context)
```

#### Input
* input `object`
  * AllowedOAuthFlows [OAuthFlowsType](#oauthflowstype)
  * AllowedOAuthFlowsUserPoolClient [BooleanType](#booleantype)
  * AllowedOAuthScopes [ScopeListType](#scopelisttype)
  * AnalyticsConfiguration [AnalyticsConfigurationType](#analyticsconfigurationtype)
  * CallbackURLs [CallbackURLsListType](#callbackurlslisttype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ClientName [ClientNameType](#clientnametype)
  * DefaultRedirectURI [RedirectUrlType](#redirecturltype)
  * ExplicitAuthFlows [ExplicitAuthFlowsListType](#explicitauthflowslisttype)
  * LogoutURLs [LogoutURLsListType](#logouturlslisttype)
  * ReadAttributes [ClientPermissionListType](#clientpermissionlisttype)
  * RefreshTokenValidity [RefreshTokenValidityType](#refreshtokenvaliditytype)
  * SupportedIdentityProviders [SupportedIdentityProvidersListType](#supportedidentityproviderslisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * WriteAttributes [ClientPermissionListType](#clientpermissionlisttype)

#### Output
* output [UpdateUserPoolClientResponse](#updateuserpoolclientresponse)

### VerifySoftwareToken



```js
amazonaws_cognito_idp.VerifySoftwareToken({
  "UserCode": ""
}, context)
```

#### Input
* input `object`
  * AccessToken [TokenModelType](#tokenmodeltype)
  * FriendlyDeviceName [StringType](#stringtype)
  * Session [SessionType](#sessiontype)
  * UserCode **required** [SoftwareTokenMFAUserCodeType](#softwaretokenmfausercodetype)

#### Output
* output [VerifySoftwareTokenResponse](#verifysoftwaretokenresponse)

### VerifyUserAttribute



```js
amazonaws_cognito_idp.VerifyUserAttribute({
  "AccessToken": "",
  "AttributeName": "",
  "Code": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * AttributeName **required** [AttributeNameType](#attributenametype)
  * Code **required** [ConfirmationCodeType](#confirmationcodetype)

#### Output
* output [VerifyUserAttributeResponse](#verifyuserattributeresponse)



## Definitions

### AWSAccountIdType
* AWSAccountIdType `string`

### AccountTakeoverActionNotifyType
* AccountTakeoverActionNotifyType `boolean`

### AccountTakeoverActionType
* AccountTakeoverActionType `object`: Account takeover action type.
  * EventAction **required** [AccountTakeoverEventActionType](#accounttakeovereventactiontype)
  * Notify **required** [AccountTakeoverActionNotifyType](#accounttakeoveractionnotifytype)

### AccountTakeoverActionsType
* AccountTakeoverActionsType `object`: Account takeover actions type.
  * HighAction [AccountTakeoverActionType](#accounttakeoveractiontype)
  * LowAction [AccountTakeoverActionType](#accounttakeoveractiontype)
  * MediumAction [AccountTakeoverActionType](#accounttakeoveractiontype)

### AccountTakeoverEventActionType
* AccountTakeoverEventActionType `string` (values: BLOCK, MFA_IF_CONFIGURED, MFA_REQUIRED, NO_ACTION)

### AccountTakeoverRiskConfigurationType
* AccountTakeoverRiskConfigurationType `object`: Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
  * Actions **required** [AccountTakeoverActionsType](#accounttakeoveractionstype)
  * NotifyConfiguration [NotifyConfigurationType](#notifyconfigurationtype)

### AddCustomAttributesRequest
* AddCustomAttributesRequest `object`: Represents the request to add custom attributes.
  * CustomAttributes **required** [CustomAttributesListType](#customattributeslisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### AddCustomAttributesResponse
* AddCustomAttributesResponse `object`: Represents the response from the server for the request to add custom attributes.

### AdminAddUserToGroupRequest
* AdminAddUserToGroupRequest `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminConfirmSignUpRequest
* AdminConfirmSignUpRequest `object`: Represents the request to confirm user registration.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminConfirmSignUpResponse
* AdminConfirmSignUpResponse `object`: Represents the response from the server for the request to confirm registration.

### AdminCreateUserConfigType
* AdminCreateUserConfigType `object`: The configuration for creating a new user profile.
  * AllowAdminCreateUserOnly [BooleanType](#booleantype)
  * InviteMessageTemplate [MessageTemplateType](#messagetemplatetype)
  * UnusedAccountValidityDays [AdminCreateUserUnusedAccountValidityDaysType](#admincreateuserunusedaccountvaliditydaystype)

### AdminCreateUserRequest
* AdminCreateUserRequest `object`: Represents the request to create a user in the specified user pool.
  * DesiredDeliveryMediums [DeliveryMediumListType](#deliverymediumlisttype)
  * ForceAliasCreation [ForceAliasCreation](#forcealiascreation)
  * MessageAction [MessageActionType](#messageactiontype)
  * TemporaryPassword [PasswordType](#passwordtype)
  * UserAttributes [AttributeListType](#attributelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)
  * ValidationData [AttributeListType](#attributelisttype)

### AdminCreateUserResponse
* AdminCreateUserResponse `object`: Represents the response from the server to the request to create the user.
  * User [UserType](#usertype)

### AdminCreateUserUnusedAccountValidityDaysType
* AdminCreateUserUnusedAccountValidityDaysType `integer`

### AdminDeleteUserAttributesRequest
* AdminDeleteUserAttributesRequest `object`: Represents the request to delete user attributes as an administrator.
  * UserAttributeNames **required** [AttributeNameListType](#attributenamelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminDeleteUserAttributesResponse
* AdminDeleteUserAttributesResponse `object`: Represents the response received from the server for a request to delete user attributes.

### AdminDeleteUserRequest
* AdminDeleteUserRequest `object`: Represents the request to delete a user as an administrator.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminDisableProviderForUserRequest
* AdminDisableProviderForUserRequest `object`
  * User **required** [ProviderUserIdentifierType](#provideruseridentifiertype)
  * UserPoolId **required** [StringType](#stringtype)

### AdminDisableProviderForUserResponse
* AdminDisableProviderForUserResponse `object`

### AdminDisableUserRequest
* AdminDisableUserRequest `object`: Represents the request to disable any user as an administrator.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminDisableUserResponse
* AdminDisableUserResponse `object`: Represents the response received from the server to disable the user as an administrator.

### AdminEnableUserRequest
* AdminEnableUserRequest `object`: Represents the request that enables the user as an administrator.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminEnableUserResponse
* AdminEnableUserResponse `object`: Represents the response from the server for the request to enable a user as an administrator.

### AdminForgetDeviceRequest
* AdminForgetDeviceRequest `object`: Sends the forgot device request, as an administrator.
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminGetDeviceRequest
* AdminGetDeviceRequest `object`: Represents the request to get the device, as an administrator.
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminGetDeviceResponse
* AdminGetDeviceResponse `object`: Gets the device response, as an administrator.
  * Device **required** [DeviceType](#devicetype)

### AdminGetUserRequest
* AdminGetUserRequest `object`: Represents the request to get the specified user as an administrator.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminGetUserResponse
* AdminGetUserResponse `object`: Represents the response from the server from the request to get the specified user as an administrator.
  * Enabled [BooleanType](#booleantype)
  * MFAOptions [MFAOptionListType](#mfaoptionlisttype)
  * PreferredMfaSetting [StringType](#stringtype)
  * UserAttributes [AttributeListType](#attributelisttype)
  * UserCreateDate [DateType](#datetype)
  * UserLastModifiedDate [DateType](#datetype)
  * UserMFASettingList [UserMFASettingListType](#usermfasettinglisttype)
  * UserStatus [UserStatusType](#userstatustype)
  * Username **required** [UsernameType](#usernametype)

### AdminInitiateAuthRequest
* AdminInitiateAuthRequest `object`: Initiates the authorization request, as an administrator.
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * AuthFlow **required** [AuthFlowType](#authflowtype)
  * AuthParameters [AuthParametersType](#authparameterstype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ClientMetadata [ClientMetadataType](#clientmetadatatype)
  * ContextData [ContextDataType](#contextdatatype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### AdminInitiateAuthResponse
* AdminInitiateAuthResponse `object`: Initiates the authentication response, as an administrator.
  * AuthenticationResult [AuthenticationResultType](#authenticationresulttype)
  * ChallengeName [ChallengeNameType](#challengenametype)
  * ChallengeParameters [ChallengeParametersType](#challengeparameterstype)
  * Session [SessionType](#sessiontype)

### AdminLinkProviderForUserRequest
* AdminLinkProviderForUserRequest `object`
  * DestinationUser **required** [ProviderUserIdentifierType](#provideruseridentifiertype)
  * SourceUser **required** [ProviderUserIdentifierType](#provideruseridentifiertype)
  * UserPoolId **required** [StringType](#stringtype)

### AdminLinkProviderForUserResponse
* AdminLinkProviderForUserResponse `object`

### AdminListDevicesRequest
* AdminListDevicesRequest `object`: Represents the request to list devices, as an administrator.
  * Limit [QueryLimitType](#querylimittype)
  * PaginationToken [SearchPaginationTokenType](#searchpaginationtokentype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminListDevicesResponse
* AdminListDevicesResponse `object`: Lists the device's response, as an administrator.
  * Devices [DeviceListType](#devicelisttype)
  * PaginationToken [SearchPaginationTokenType](#searchpaginationtokentype)

### AdminListGroupsForUserRequest
* AdminListGroupsForUserRequest `object`
  * Limit [QueryLimitType](#querylimittype)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminListGroupsForUserResponse
* AdminListGroupsForUserResponse `object`
  * Groups [GroupListType](#grouplisttype)
  * NextToken [PaginationKey](#paginationkey)

### AdminListUserAuthEventsRequest
* AdminListUserAuthEventsRequest `object`
  * MaxResults [QueryLimitType](#querylimittype)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminListUserAuthEventsResponse
* AdminListUserAuthEventsResponse `object`
  * AuthEvents [AuthEventsType](#autheventstype)
  * NextToken [PaginationKey](#paginationkey)

### AdminRemoveUserFromGroupRequest
* AdminRemoveUserFromGroupRequest `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminResetUserPasswordRequest
* AdminResetUserPasswordRequest `object`: Represents the request to reset a user's password as an administrator.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminResetUserPasswordResponse
* AdminResetUserPasswordResponse `object`: Represents the response from the server to reset a user password as an administrator.

### AdminRespondToAuthChallengeRequest
* AdminRespondToAuthChallengeRequest `object`: The request to respond to the authentication challenge, as an administrator.
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ChallengeName **required** [ChallengeNameType](#challengenametype)
  * ChallengeResponses [ChallengeResponsesType](#challengeresponsestype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ContextData [ContextDataType](#contextdatatype)
  * Session [SessionType](#sessiontype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### AdminRespondToAuthChallengeResponse
* AdminRespondToAuthChallengeResponse `object`: Responds to the authentication challenge, as an administrator.
  * AuthenticationResult [AuthenticationResultType](#authenticationresulttype)
  * ChallengeName [ChallengeNameType](#challengenametype)
  * ChallengeParameters [ChallengeParametersType](#challengeparameterstype)
  * Session [SessionType](#sessiontype)

### AdminSetUserMFAPreferenceRequest
* AdminSetUserMFAPreferenceRequest `object`
  * SMSMfaSettings [SMSMfaSettingsType](#smsmfasettingstype)
  * SoftwareTokenMfaSettings [SoftwareTokenMfaSettingsType](#softwaretokenmfasettingstype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminSetUserMFAPreferenceResponse
* AdminSetUserMFAPreferenceResponse `object`

### AdminSetUserSettingsRequest
* AdminSetUserSettingsRequest `object`: Represents the request to set user settings as an administrator.
  * MFAOptions **required** [MFAOptionListType](#mfaoptionlisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminSetUserSettingsResponse
* AdminSetUserSettingsResponse `object`: Represents the response from the server to set user settings as an administrator.

### AdminUpdateAuthEventFeedbackRequest
* AdminUpdateAuthEventFeedbackRequest `object`
  * EventId **required** [EventIdType](#eventidtype)
  * FeedbackValue **required** [FeedbackValueType](#feedbackvaluetype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminUpdateAuthEventFeedbackResponse
* AdminUpdateAuthEventFeedbackResponse `object`

### AdminUpdateDeviceStatusRequest
* AdminUpdateDeviceStatusRequest `object`: The request to update the device status, as an administrator.
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * DeviceRememberedStatus [DeviceRememberedStatusType](#devicerememberedstatustype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminUpdateDeviceStatusResponse
* AdminUpdateDeviceStatusResponse `object`: The status response from the request to update the device, as an administrator.

### AdminUpdateUserAttributesRequest
* AdminUpdateUserAttributesRequest `object`: Represents the request to update the user's attributes as an administrator.
  * UserAttributes **required** [AttributeListType](#attributelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### AdminUpdateUserAttributesResponse
* AdminUpdateUserAttributesResponse `object`: Represents the response from the server for the request to update user attributes as an administrator.

### AdminUserGlobalSignOutRequest
* AdminUserGlobalSignOutRequest `object`: The request to sign out of all devices, as an administrator.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

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
* AliasExistsException `object`: This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.
  * message [MessageType](#messagetype)

### AnalyticsConfigurationType
* AnalyticsConfigurationType `object`: The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.
  * ApplicationId **required** [HexStringType](#hexstringtype)
  * ExternalId **required** [StringType](#stringtype)
  * RoleArn **required** [ArnType](#arntype)
  * UserDataShared [BooleanType](#booleantype)

### AnalyticsMetadataType
* AnalyticsMetadataType `object`: <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p>
  * AnalyticsEndpointId [StringType](#stringtype)

### ArnType
* ArnType `string`

### AssociateSoftwareTokenRequest
* AssociateSoftwareTokenRequest `object`
  * AccessToken [TokenModelType](#tokenmodeltype)
  * Session [SessionType](#sessiontype)

### AssociateSoftwareTokenResponse
* AssociateSoftwareTokenResponse `object`
  * SecretCode [SecretCodeType](#secretcodetype)
  * Session [SessionType](#sessiontype)

### AttributeDataType
* AttributeDataType `string` (values: String, Number, DateTime, Boolean)

### AttributeListType
* AttributeListType `array`
  * items [AttributeType](#attributetype)

### AttributeMappingKeyType
* AttributeMappingKeyType `string`

### AttributeMappingType
* AttributeMappingType `array`
  * items `object`
    * key [AttributeMappingKeyType](#attributemappingkeytype)
    * value [StringType](#stringtype)

### AttributeNameListType
* AttributeNameListType `array`
  * items [AttributeNameType](#attributenametype)

### AttributeNameType
* AttributeNameType `string`

### AttributeType
* AttributeType `object`: Specifies whether the attribute is standard or custom.
  * Name **required** [AttributeNameType](#attributenametype)
  * Value [AttributeValueType](#attributevaluetype)

### AttributeValueType
* AttributeValueType `string`

### AuthEventType
* AuthEventType `object`: The authentication event type.
  * ChallengeResponses [ChallengeResponseListType](#challengeresponselisttype)
  * CreationDate [DateType](#datetype)
  * EventContextData [EventContextDataType](#eventcontextdatatype)
  * EventFeedback [EventFeedbackType](#eventfeedbacktype)
  * EventId [StringType](#stringtype)
  * EventResponse [EventResponseType](#eventresponsetype)
  * EventRisk [EventRiskType](#eventrisktype)
  * EventType [EventType](#eventtype)

### AuthEventsType
* AuthEventsType `array`
  * items [AuthEventType](#autheventtype)

### AuthFlowType
* AuthFlowType `string` (values: USER_SRP_AUTH, REFRESH_TOKEN_AUTH, REFRESH_TOKEN, CUSTOM_AUTH, ADMIN_NO_SRP_AUTH, USER_PASSWORD_AUTH)

### AuthParametersType
* AuthParametersType `array`
  * items `object`
    * key [StringType](#stringtype)
    * value [StringType](#stringtype)

### AuthenticationResultType
* AuthenticationResultType `object`: The authentication result.
  * AccessToken [TokenModelType](#tokenmodeltype)
  * ExpiresIn [IntegerType](#integertype)
  * IdToken [TokenModelType](#tokenmodeltype)
  * NewDeviceMetadata [NewDeviceMetadataType](#newdevicemetadatatype)
  * RefreshToken [TokenModelType](#tokenmodeltype)
  * TokenType [StringType](#stringtype)

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
* ChallengeParametersType `array`
  * items `object`
    * key [StringType](#stringtype)
    * value [StringType](#stringtype)

### ChallengeResponse
* ChallengeResponse `string` (values: Success, Failure)

### ChallengeResponseListType
* ChallengeResponseListType `array`
  * items [ChallengeResponseType](#challengeresponsetype)

### ChallengeResponseType
* ChallengeResponseType `object`: The challenge response type.
  * ChallengeName [ChallengeName](#challengename)
  * ChallengeResponse [ChallengeResponse](#challengeresponse)

### ChallengeResponsesType
* ChallengeResponsesType `array`
  * items `object`
    * key [StringType](#stringtype)
    * value [StringType](#stringtype)

### ChangePasswordRequest
* ChangePasswordRequest `object`: Represents the request to change a user password.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * PreviousPassword **required** [PasswordType](#passwordtype)
  * ProposedPassword **required** [PasswordType](#passwordtype)

### ChangePasswordResponse
* ChangePasswordResponse `object`: The response from the server to the change password request.

### ClientIdType
* ClientIdType `string`

### ClientMetadataType
* ClientMetadataType `array`
  * items `object`
    * key [StringType](#stringtype)
    * value [StringType](#stringtype)

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
  * AttributeName [AttributeNameType](#attributenametype)
  * DeliveryMedium [DeliveryMediumType](#deliverymediumtype)
  * Destination [StringType](#stringtype)

### CodeDeliveryFailureException
* CodeDeliveryFailureException `object`: This exception is thrown when a verification code fails to deliver successfully.
  * message [MessageType](#messagetype)

### CodeMismatchException
* CodeMismatchException `object`: This exception is thrown if the provided code does not match what the server was expecting.
  * message [MessageType](#messagetype)

### CompletionMessageType
* CompletionMessageType `string`

### CompromisedCredentialsActionsType
* CompromisedCredentialsActionsType `object`: The compromised credentials actions type
  * EventAction **required** [CompromisedCredentialsEventActionType](#compromisedcredentialseventactiontype)

### CompromisedCredentialsEventActionType
* CompromisedCredentialsEventActionType `string` (values: BLOCK, NO_ACTION)

### CompromisedCredentialsRiskConfigurationType
* CompromisedCredentialsRiskConfigurationType `object`: The compromised credentials risk configuration type.
  * Actions **required** [CompromisedCredentialsActionsType](#compromisedcredentialsactionstype)
  * EventFilter [EventFiltersType](#eventfilterstype)

### ConcurrentModificationException
* ConcurrentModificationException `object`: This exception is thrown if two or more modifications are happening concurrently.
  * message [MessageType](#messagetype)

### ConfirmDeviceRequest
* ConfirmDeviceRequest `object`: Confirms the device request.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * DeviceName [DeviceNameType](#devicenametype)
  * DeviceSecretVerifierConfig [DeviceSecretVerifierConfigType](#devicesecretverifierconfigtype)

### ConfirmDeviceResponse
* ConfirmDeviceResponse `object`: Confirms the device response.
  * UserConfirmationNecessary [BooleanType](#booleantype)

### ConfirmForgotPasswordRequest
* ConfirmForgotPasswordRequest `object`: The request representing the confirmation for a password reset.
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ConfirmationCode **required** [ConfirmationCodeType](#confirmationcodetype)
  * Password **required** [PasswordType](#passwordtype)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)

### ConfirmForgotPasswordResponse
* ConfirmForgotPasswordResponse `object`: The response from the server that results from a user's request to retrieve a forgotten password.

### ConfirmSignUpRequest
* ConfirmSignUpRequest `object`: Represents the request to confirm registration of a user.
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ConfirmationCode **required** [ConfirmationCodeType](#confirmationcodetype)
  * ForceAliasCreation [ForceAliasCreation](#forcealiascreation)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)

### ConfirmSignUpResponse
* ConfirmSignUpResponse `object`: Represents the response from the server for the registration confirmation.

### ConfirmationCodeType
* ConfirmationCodeType `string`

### ContextDataType
* ContextDataType `object`: Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
  * EncodedData [StringType](#stringtype)
  * HttpHeaders **required** [HttpHeaderList](#httpheaderlist)
  * IpAddress **required** [StringType](#stringtype)
  * ServerName **required** [StringType](#stringtype)
  * ServerPath **required** [StringType](#stringtype)

### CreateGroupRequest
* CreateGroupRequest `object`
  * Description [DescriptionType](#descriptiontype)
  * GroupName **required** [GroupNameType](#groupnametype)
  * Precedence [PrecedenceType](#precedencetype)
  * RoleArn [ArnType](#arntype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### CreateGroupResponse
* CreateGroupResponse `object`
  * Group [GroupType](#grouptype)

### CreateIdentityProviderRequest
* CreateIdentityProviderRequest `object`
  * AttributeMapping [AttributeMappingType](#attributemappingtype)
  * IdpIdentifiers [IdpIdentifiersListType](#idpidentifierslisttype)
  * ProviderDetails **required** [ProviderDetailsType](#providerdetailstype)
  * ProviderName **required** [ProviderNameTypeV1](#providernametypev1)
  * ProviderType **required** [IdentityProviderTypeType](#identityprovidertypetype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### CreateIdentityProviderResponse
* CreateIdentityProviderResponse `object`
  * IdentityProvider **required** [IdentityProviderType](#identityprovidertype)

### CreateResourceServerRequest
* CreateResourceServerRequest `object`
  * Identifier **required** [ResourceServerIdentifierType](#resourceserveridentifiertype)
  * Name **required** [ResourceServerNameType](#resourceservernametype)
  * Scopes [ResourceServerScopeListType](#resourceserverscopelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### CreateResourceServerResponse
* CreateResourceServerResponse `object`
  * ResourceServer **required** [ResourceServerType](#resourceservertype)

### CreateUserImportJobRequest
* CreateUserImportJobRequest `object`: Represents the request to create the user import job.
  * CloudWatchLogsRoleArn **required** [ArnType](#arntype)
  * JobName **required** [UserImportJobNameType](#userimportjobnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### CreateUserImportJobResponse
* CreateUserImportJobResponse `object`: Represents the response from the server to the request to create the user import job.
  * UserImportJob [UserImportJobType](#userimportjobtype)

### CreateUserPoolClientRequest
* CreateUserPoolClientRequest `object`: Represents the request to create a user pool client.
  * AllowedOAuthFlows [OAuthFlowsType](#oauthflowstype)
  * AllowedOAuthFlowsUserPoolClient [BooleanType](#booleantype)
  * AllowedOAuthScopes [ScopeListType](#scopelisttype)
  * AnalyticsConfiguration [AnalyticsConfigurationType](#analyticsconfigurationtype)
  * CallbackURLs [CallbackURLsListType](#callbackurlslisttype)
  * ClientName **required** [ClientNameType](#clientnametype)
  * DefaultRedirectURI [RedirectUrlType](#redirecturltype)
  * ExplicitAuthFlows [ExplicitAuthFlowsListType](#explicitauthflowslisttype)
  * GenerateSecret [GenerateSecret](#generatesecret)
  * LogoutURLs [LogoutURLsListType](#logouturlslisttype)
  * ReadAttributes [ClientPermissionListType](#clientpermissionlisttype)
  * RefreshTokenValidity [RefreshTokenValidityType](#refreshtokenvaliditytype)
  * SupportedIdentityProviders [SupportedIdentityProvidersListType](#supportedidentityproviderslisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * WriteAttributes [ClientPermissionListType](#clientpermissionlisttype)

### CreateUserPoolClientResponse
* CreateUserPoolClientResponse `object`: Represents the response from the server to create a user pool client.
  * UserPoolClient [UserPoolClientType](#userpoolclienttype)

### CreateUserPoolDomainRequest
* CreateUserPoolDomainRequest `object`
  * Domain **required** [DomainType](#domaintype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### CreateUserPoolDomainResponse
* CreateUserPoolDomainResponse `object`

### CreateUserPoolRequest
* CreateUserPoolRequest `object`: Represents the request to create a user pool.
  * AdminCreateUserConfig [AdminCreateUserConfigType](#admincreateuserconfigtype)
  * AliasAttributes [AliasAttributesListType](#aliasattributeslisttype)
  * AutoVerifiedAttributes [VerifiedAttributesListType](#verifiedattributeslisttype)
  * DeviceConfiguration [DeviceConfigurationType](#deviceconfigurationtype)
  * EmailConfiguration [EmailConfigurationType](#emailconfigurationtype)
  * EmailVerificationMessage [EmailVerificationMessageType](#emailverificationmessagetype)
  * EmailVerificationSubject [EmailVerificationSubjectType](#emailverificationsubjecttype)
  * LambdaConfig [LambdaConfigType](#lambdaconfigtype)
  * MfaConfiguration [UserPoolMfaType](#userpoolmfatype)
  * Policies [UserPoolPolicyType](#userpoolpolicytype)
  * PoolName **required** [UserPoolNameType](#userpoolnametype)
  * Schema [SchemaAttributesListType](#schemaattributeslisttype)
  * SmsAuthenticationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * SmsConfiguration [SmsConfigurationType](#smsconfigurationtype)
  * SmsVerificationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * UserPoolAddOns [UserPoolAddOnsType](#userpooladdonstype)
  * UserPoolTags [UserPoolTagsType](#userpooltagstype)
  * UsernameAttributes [UsernameAttributesListType](#usernameattributeslisttype)
  * VerificationMessageTemplate [VerificationMessageTemplateType](#verificationmessagetemplatetype)

### CreateUserPoolResponse
* CreateUserPoolResponse `object`: Represents the response from the server for the request to create a user pool.
  * UserPool [UserPoolType](#userpooltype)

### CustomAttributeNameType
* CustomAttributeNameType `string`

### CustomAttributesListType
* CustomAttributesListType `array`
  * items [SchemaAttributeType](#schemaattributetype)

### DateType
* DateType `string`

### DefaultEmailOptionType
* DefaultEmailOptionType `string` (values: CONFIRM_WITH_LINK, CONFIRM_WITH_CODE)

### DeleteGroupRequest
* DeleteGroupRequest `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DeleteIdentityProviderRequest
* DeleteIdentityProviderRequest `object`
  * ProviderName **required** [ProviderNameType](#providernametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DeleteResourceServerRequest
* DeleteResourceServerRequest `object`
  * Identifier **required** [ResourceServerIdentifierType](#resourceserveridentifiertype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DeleteUserAttributesRequest
* DeleteUserAttributesRequest `object`: Represents the request to delete user attributes.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * UserAttributeNames **required** [AttributeNameListType](#attributenamelisttype)

### DeleteUserAttributesResponse
* DeleteUserAttributesResponse `object`: Represents the response from the server to delete user attributes.

### DeleteUserPoolClientRequest
* DeleteUserPoolClientRequest `object`: Represents the request to delete a user pool client.
  * ClientId **required** [ClientIdType](#clientidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DeleteUserPoolDomainRequest
* DeleteUserPoolDomainRequest `object`
  * Domain **required** [DomainType](#domaintype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DeleteUserPoolDomainResponse
* DeleteUserPoolDomainResponse `object`

### DeleteUserPoolRequest
* DeleteUserPoolRequest `object`: Represents the request to delete a user pool.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DeleteUserRequest
* DeleteUserRequest `object`: Represents the request to delete a user.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)

### DeliveryMediumListType
* DeliveryMediumListType `array`
  * items [DeliveryMediumType](#deliverymediumtype)

### DeliveryMediumType
* DeliveryMediumType `string` (values: SMS, EMAIL)

### DescribeIdentityProviderRequest
* DescribeIdentityProviderRequest `object`
  * ProviderName **required** [ProviderNameType](#providernametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DescribeIdentityProviderResponse
* DescribeIdentityProviderResponse `object`
  * IdentityProvider **required** [IdentityProviderType](#identityprovidertype)

### DescribeResourceServerRequest
* DescribeResourceServerRequest `object`
  * Identifier **required** [ResourceServerIdentifierType](#resourceserveridentifiertype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DescribeResourceServerResponse
* DescribeResourceServerResponse `object`
  * ResourceServer **required** [ResourceServerType](#resourceservertype)

### DescribeRiskConfigurationRequest
* DescribeRiskConfigurationRequest `object`
  * ClientId [ClientIdType](#clientidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DescribeRiskConfigurationResponse
* DescribeRiskConfigurationResponse `object`
  * RiskConfiguration **required** [RiskConfigurationType](#riskconfigurationtype)

### DescribeUserImportJobRequest
* DescribeUserImportJobRequest `object`: Represents the request to describe the user import job.
  * JobId **required** [UserImportJobIdType](#userimportjobidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DescribeUserImportJobResponse
* DescribeUserImportJobResponse `object`: Represents the response from the server to the request to describe the user import job.
  * UserImportJob [UserImportJobType](#userimportjobtype)

### DescribeUserPoolClientRequest
* DescribeUserPoolClientRequest `object`: Represents the request to describe a user pool client.
  * ClientId **required** [ClientIdType](#clientidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DescribeUserPoolClientResponse
* DescribeUserPoolClientResponse `object`: Represents the response from the server from a request to describe the user pool client.
  * UserPoolClient [UserPoolClientType](#userpoolclienttype)

### DescribeUserPoolDomainRequest
* DescribeUserPoolDomainRequest `object`
  * Domain **required** [DomainType](#domaintype)

### DescribeUserPoolDomainResponse
* DescribeUserPoolDomainResponse `object`
  * DomainDescription [DomainDescriptionType](#domaindescriptiontype)

### DescribeUserPoolRequest
* DescribeUserPoolRequest `object`: Represents the request to describe the user pool.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### DescribeUserPoolResponse
* DescribeUserPoolResponse `object`: Represents the response to describe the user pool.
  * UserPool [UserPoolType](#userpooltype)

### DescriptionType
* DescriptionType `string`

### DeviceConfigurationType
* DeviceConfigurationType `object`: The configuration for the user pool's device tracking.
  * ChallengeRequiredOnNewDevice [BooleanType](#booleantype)
  * DeviceOnlyRememberedOnUserPrompt [BooleanType](#booleantype)

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
  * PasswordVerifier [StringType](#stringtype)
  * Salt [StringType](#stringtype)

### DeviceType
* DeviceType `object`: The device type.
  * DeviceAttributes [AttributeListType](#attributelisttype)
  * DeviceCreateDate [DateType](#datetype)
  * DeviceKey [DeviceKeyType](#devicekeytype)
  * DeviceLastAuthenticatedDate [DateType](#datetype)
  * DeviceLastModifiedDate [DateType](#datetype)

### DomainDescriptionType
* DomainDescriptionType `object`: A container for information about a domain.
  * AWSAccountId [AWSAccountIdType](#awsaccountidtype)
  * CloudFrontDistribution [ArnType](#arntype)
  * Domain [DomainType](#domaintype)
  * S3Bucket [S3BucketType](#s3buckettype)
  * Status [DomainStatusType](#domainstatustype)
  * UserPoolId [UserPoolIdType](#userpoolidtype)
  * Version [DomainVersionType](#domainversiontype)

### DomainStatusType
* DomainStatusType `string` (values: CREATING, DELETING, UPDATING, ACTIVE, FAILED)

### DomainType
* DomainType `string`

### DomainVersionType
* DomainVersionType `string`

### DuplicateProviderException
* DuplicateProviderException `object`: This exception is thrown when the provider is already supported by the user pool.
  * message [MessageType](#messagetype)

### EmailAddressType
* EmailAddressType `string`

### EmailConfigurationType
* EmailConfigurationType `object`: The email configuration type.
  * ReplyToEmailAddress [EmailAddressType](#emailaddresstype)
  * SourceArn [ArnType](#arntype)

### EmailNotificationBodyType
* EmailNotificationBodyType `string`

### EmailNotificationSubjectType
* EmailNotificationSubjectType `string`

### EmailVerificationMessageByLinkType
* EmailVerificationMessageByLinkType `string`

### EmailVerificationMessageType
* EmailVerificationMessageType `string`

### EmailVerificationSubjectByLinkType
* EmailVerificationSubjectByLinkType `string`

### EmailVerificationSubjectType
* EmailVerificationSubjectType `string`

### EnableSoftwareTokenMFAException
* EnableSoftwareTokenMFAException `object`: This exception is thrown when there is a code mismatch and the service fails to configure the software token TOTP multi-factor authentication (MFA).
  * message [MessageType](#messagetype)

### EventContextDataType
* EventContextDataType `object`: Specifies the user context data captured at the time of an event request.
  * City [StringType](#stringtype)
  * Country [StringType](#stringtype)
  * DeviceName [StringType](#stringtype)
  * IpAddress [StringType](#stringtype)
  * Timezone [StringType](#stringtype)

### EventFeedbackType
* EventFeedbackType `object`: Specifies the event feedback type.
  * FeedbackDate [DateType](#datetype)
  * FeedbackValue **required** [FeedbackValueType](#feedbackvaluetype)
  * Provider **required** [StringType](#stringtype)

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
  * RiskDecision [RiskDecisionType](#riskdecisiontype)
  * RiskLevel [RiskLevelType](#riskleveltype)

### EventType
* EventType `string` (values: SignIn, SignUp, ForgotPassword)

### ExpiredCodeException
* ExpiredCodeException `object`: This exception is thrown if a code has expired.
  * message [MessageType](#messagetype)

### ExplicitAuthFlowsListType
* ExplicitAuthFlowsListType `array`
  * items [ExplicitAuthFlowsType](#explicitauthflowstype)

### ExplicitAuthFlowsType
* ExplicitAuthFlowsType `string` (values: ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH)

### FeedbackValueType
* FeedbackValueType `string` (values: Valid, Invalid)

### ForceAliasCreation
* ForceAliasCreation `boolean`

### ForgetDeviceRequest
* ForgetDeviceRequest `object`: Represents the request to forget the device.
  * AccessToken [TokenModelType](#tokenmodeltype)
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)

### ForgotPasswordRequest
* ForgotPasswordRequest `object`: Represents the request to reset a user's password.
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)

### ForgotPasswordResponse
* ForgotPasswordResponse `object`: Respresents the response from the server regarding the request to reset a password.
  * CodeDeliveryDetails [CodeDeliveryDetailsType](#codedeliverydetailstype)

### GenerateSecret
* GenerateSecret `boolean`

### GetCSVHeaderRequest
* GetCSVHeaderRequest `object`: Represents the request to get the header information for the .csv file for the user import job.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### GetCSVHeaderResponse
* GetCSVHeaderResponse `object`: Represents the response from the server to the request to get the header information for the .csv file for the user import job.
  * CSVHeader [ListOfStringTypes](#listofstringtypes)
  * UserPoolId [UserPoolIdType](#userpoolidtype)

### GetDeviceRequest
* GetDeviceRequest `object`: Represents the request to get the device.
  * AccessToken [TokenModelType](#tokenmodeltype)
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)

### GetDeviceResponse
* GetDeviceResponse `object`: Gets the device response.
  * Device **required** [DeviceType](#devicetype)

### GetGroupRequest
* GetGroupRequest `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### GetGroupResponse
* GetGroupResponse `object`
  * Group [GroupType](#grouptype)

### GetIdentityProviderByIdentifierRequest
* GetIdentityProviderByIdentifierRequest `object`
  * IdpIdentifier **required** [IdpIdentifierType](#idpidentifiertype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### GetIdentityProviderByIdentifierResponse
* GetIdentityProviderByIdentifierResponse `object`
  * IdentityProvider **required** [IdentityProviderType](#identityprovidertype)

### GetSigningCertificateRequest
* GetSigningCertificateRequest `object`: Request to get a signing certificate from Cognito.
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### GetSigningCertificateResponse
* GetSigningCertificateResponse `object`: Response from Cognito for a signing certificate request.
  * Certificate [StringType](#stringtype)

### GetUICustomizationRequest
* GetUICustomizationRequest `object`
  * ClientId [ClientIdType](#clientidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### GetUICustomizationResponse
* GetUICustomizationResponse `object`
  * UICustomization **required** [UICustomizationType](#uicustomizationtype)

### GetUserAttributeVerificationCodeRequest
* GetUserAttributeVerificationCodeRequest `object`: Represents the request to get user attribute verification.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * AttributeName **required** [AttributeNameType](#attributenametype)

### GetUserAttributeVerificationCodeResponse
* GetUserAttributeVerificationCodeResponse `object`: The verification code response returned by the server response to get the user attribute verification code.
  * CodeDeliveryDetails [CodeDeliveryDetailsType](#codedeliverydetailstype)

### GetUserPoolMfaConfigRequest
* GetUserPoolMfaConfigRequest `object`
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### GetUserPoolMfaConfigResponse
* GetUserPoolMfaConfigResponse `object`
  * MfaConfiguration [UserPoolMfaType](#userpoolmfatype)
  * SmsMfaConfiguration [SmsMfaConfigType](#smsmfaconfigtype)
  * SoftwareTokenMfaConfiguration [SoftwareTokenMfaConfigType](#softwaretokenmfaconfigtype)

### GetUserRequest
* GetUserRequest `object`: Represents the request to get information about the user.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)

### GetUserResponse
* GetUserResponse `object`: Represents the response from the server from the request to get information about the user.
  * MFAOptions [MFAOptionListType](#mfaoptionlisttype)
  * PreferredMfaSetting [StringType](#stringtype)
  * UserAttributes **required** [AttributeListType](#attributelisttype)
  * UserMFASettingList [UserMFASettingListType](#usermfasettinglisttype)
  * Username **required** [UsernameType](#usernametype)

### GlobalSignOutRequest
* GlobalSignOutRequest `object`: Represents the request to sign out all devices.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)

### GlobalSignOutResponse
* GlobalSignOutResponse `object`: The response to the request to sign out all devices.

### GroupExistsException
* GroupExistsException `object`: This exception is thrown when Amazon Cognito encounters a group that already exists in the user pool.
  * message [MessageType](#messagetype)

### GroupListType
* GroupListType `array`
  * items [GroupType](#grouptype)

### GroupNameType
* GroupNameType `string`

### GroupType
* GroupType `object`: The group type.
  * CreationDate [DateType](#datetype)
  * Description [DescriptionType](#descriptiontype)
  * GroupName [GroupNameType](#groupnametype)
  * LastModifiedDate [DateType](#datetype)
  * Precedence [PrecedenceType](#precedencetype)
  * RoleArn [ArnType](#arntype)
  * UserPoolId [UserPoolIdType](#userpoolidtype)

### HexStringType
* HexStringType `string`

### HttpHeader
* HttpHeader `object`: The HTTP header.
  * headerName [StringType](#stringtype)
  * headerValue [StringType](#stringtype)

### HttpHeaderList
* HttpHeaderList `array`
  * items [HttpHeader](#httpheader)

### IdentityProviderType
* IdentityProviderType `object`: A container for information about an identity provider.
  * AttributeMapping [AttributeMappingType](#attributemappingtype)
  * CreationDate [DateType](#datetype)
  * IdpIdentifiers [IdpIdentifiersListType](#idpidentifierslisttype)
  * LastModifiedDate [DateType](#datetype)
  * ProviderDetails [ProviderDetailsType](#providerdetailstype)
  * ProviderName [ProviderNameType](#providernametype)
  * ProviderType [IdentityProviderTypeType](#identityprovidertypetype)
  * UserPoolId [UserPoolIdType](#userpoolidtype)

### IdentityProviderTypeType
* IdentityProviderTypeType `string` (values: SAML, Facebook, Google, LoginWithAmazon, OIDC)

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
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * AuthFlow **required** [AuthFlowType](#authflowtype)
  * AuthParameters [AuthParametersType](#authparameterstype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ClientMetadata [ClientMetadataType](#clientmetadatatype)
  * UserContextData [UserContextDataType](#usercontextdatatype)

### InitiateAuthResponse
* InitiateAuthResponse `object`: Initiates the authentication response.
  * AuthenticationResult [AuthenticationResultType](#authenticationresulttype)
  * ChallengeName [ChallengeNameType](#challengenametype)
  * ChallengeParameters [ChallengeParametersType](#challengeparameterstype)
  * Session [SessionType](#sessiontype)

### IntegerType
* IntegerType `integer`

### InternalErrorException
* InternalErrorException `object`: This exception is thrown when Amazon Cognito encounters an internal error.
  * message [MessageType](#messagetype)

### InvalidEmailRoleAccessPolicyException
* InvalidEmailRoleAccessPolicyException `object`: This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.
  * message [MessageType](#messagetype)

### InvalidLambdaResponseException
* InvalidLambdaResponseException `object`: This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.
  * message [MessageType](#messagetype)

### InvalidOAuthFlowException
* InvalidOAuthFlowException `object`: This exception is thrown when the specified OAuth flow is invalid.
  * message [MessageType](#messagetype)

### InvalidParameterException
* InvalidParameterException `object`: This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
  * message [MessageType](#messagetype)

### InvalidPasswordException
* InvalidPasswordException `object`: This exception is thrown when the Amazon Cognito service encounters an invalid password.
  * message [MessageType](#messagetype)

### InvalidSmsRoleAccessPolicyException
* InvalidSmsRoleAccessPolicyException `object`: This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.
  * message [MessageType](#messagetype)

### InvalidSmsRoleTrustRelationshipException
* InvalidSmsRoleTrustRelationshipException `object`: This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.
  * message [MessageType](#messagetype)

### InvalidUserPoolConfigurationException
* InvalidUserPoolConfigurationException `object`: This exception is thrown when the user pool configuration is invalid.
  * message [MessageType](#messagetype)

### LambdaConfigType
* LambdaConfigType `object`: Specifies the configuration for AWS Lambda triggers.
  * CreateAuthChallenge [ArnType](#arntype)
  * CustomMessage [ArnType](#arntype)
  * DefineAuthChallenge [ArnType](#arntype)
  * PostAuthentication [ArnType](#arntype)
  * PostConfirmation [ArnType](#arntype)
  * PreAuthentication [ArnType](#arntype)
  * PreSignUp [ArnType](#arntype)
  * PreTokenGeneration [ArnType](#arntype)
  * UserMigration [ArnType](#arntype)
  * VerifyAuthChallengeResponse [ArnType](#arntype)

### LimitExceededException
* LimitExceededException `object`: This exception is thrown when a user exceeds the limit for a requested AWS resource.
  * message [MessageType](#messagetype)

### ListDevicesRequest
* ListDevicesRequest `object`: Represents the request to list the devices.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * Limit [QueryLimitType](#querylimittype)
  * PaginationToken [SearchPaginationTokenType](#searchpaginationtokentype)

### ListDevicesResponse
* ListDevicesResponse `object`: Represents the response to list devices.
  * Devices [DeviceListType](#devicelisttype)
  * PaginationToken [SearchPaginationTokenType](#searchpaginationtokentype)

### ListGroupsRequest
* ListGroupsRequest `object`
  * Limit [QueryLimitType](#querylimittype)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### ListGroupsResponse
* ListGroupsResponse `object`
  * Groups [GroupListType](#grouplisttype)
  * NextToken [PaginationKey](#paginationkey)

### ListIdentityProvidersRequest
* ListIdentityProvidersRequest `object`
  * MaxResults [ListProvidersLimitType](#listproviderslimittype)
  * NextToken [PaginationKeyType](#paginationkeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### ListIdentityProvidersResponse
* ListIdentityProvidersResponse `object`
  * NextToken [PaginationKeyType](#paginationkeytype)
  * Providers **required** [ProvidersListType](#providerslisttype)

### ListOfStringTypes
* ListOfStringTypes `array`
  * items [StringType](#stringtype)

### ListProvidersLimitType
* ListProvidersLimitType `integer`

### ListResourceServersLimitType
* ListResourceServersLimitType `integer`

### ListResourceServersRequest
* ListResourceServersRequest `object`
  * MaxResults [ListResourceServersLimitType](#listresourceserverslimittype)
  * NextToken [PaginationKeyType](#paginationkeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### ListResourceServersResponse
* ListResourceServersResponse `object`
  * NextToken [PaginationKeyType](#paginationkeytype)
  * ResourceServers **required** [ResourceServersListType](#resourceserverslisttype)

### ListUserImportJobsRequest
* ListUserImportJobsRequest `object`: Represents the request to list the user import jobs.
  * MaxResults **required** [PoolQueryLimitType](#poolquerylimittype)
  * PaginationToken [PaginationKeyType](#paginationkeytype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### ListUserImportJobsResponse
* ListUserImportJobsResponse `object`: Represents the response from the server to the request to list the user import jobs.
  * PaginationToken [PaginationKeyType](#paginationkeytype)
  * UserImportJobs [UserImportJobsListType](#userimportjobslisttype)

### ListUserPoolClientsRequest
* ListUserPoolClientsRequest `object`: Represents the request to list the user pool clients.
  * MaxResults [QueryLimit](#querylimit)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### ListUserPoolClientsResponse
* ListUserPoolClientsResponse `object`: Represents the response from the server that lists user pool clients.
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolClients [UserPoolClientListType](#userpoolclientlisttype)

### ListUserPoolsRequest
* ListUserPoolsRequest `object`: Represents the request to list user pools.
  * MaxResults **required** [PoolQueryLimitType](#poolquerylimittype)
  * NextToken [PaginationKeyType](#paginationkeytype)

### ListUserPoolsResponse
* ListUserPoolsResponse `object`: Represents the response to list user pools.
  * NextToken [PaginationKeyType](#paginationkeytype)
  * UserPools [UserPoolListType](#userpoollisttype)

### ListUsersInGroupRequest
* ListUsersInGroupRequest `object`
  * GroupName **required** [GroupNameType](#groupnametype)
  * Limit [QueryLimitType](#querylimittype)
  * NextToken [PaginationKey](#paginationkey)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### ListUsersInGroupResponse
* ListUsersInGroupResponse `object`
  * NextToken [PaginationKey](#paginationkey)
  * Users [UsersListType](#userslisttype)

### ListUsersRequest
* ListUsersRequest `object`: Represents the request to list users.
  * AttributesToGet [SearchedAttributeNamesListType](#searchedattributenameslisttype)
  * Filter [UserFilterType](#userfiltertype)
  * Limit [QueryLimitType](#querylimittype)
  * PaginationToken [SearchPaginationTokenType](#searchpaginationtokentype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### ListUsersResponse
* ListUsersResponse `object`: The response from the request to list users.
  * PaginationToken [SearchPaginationTokenType](#searchpaginationtokentype)
  * Users [UsersListType](#userslisttype)

### LogoutURLsListType
* LogoutURLsListType `array`
  * items [RedirectUrlType](#redirecturltype)

### LongType
* LongType `integer`

### MFAMethodNotFoundException
* MFAMethodNotFoundException `object`: This exception is thrown when Amazon Cognito cannot find a multi-factor authentication (MFA) method.
  * message [MessageType](#messagetype)

### MFAOptionListType
* MFAOptionListType `array`
  * items [MFAOptionType](#mfaoptiontype)

### MFAOptionType
* MFAOptionType `object`: Specifies the different settings for multi-factor authentication (MFA).
  * AttributeName [AttributeNameType](#attributenametype)
  * DeliveryMedium [DeliveryMediumType](#deliverymediumtype)

### MessageActionType
* MessageActionType `string` (values: RESEND, SUPPRESS)

### MessageTemplateType
* MessageTemplateType `object`: The message template structure.
  * EmailMessage [EmailVerificationMessageType](#emailverificationmessagetype)
  * EmailSubject [EmailVerificationSubjectType](#emailverificationsubjecttype)
  * SMSMessage [SmsVerificationMessageType](#smsverificationmessagetype)

### MessageType
* MessageType `string`

### NewDeviceMetadataType
* NewDeviceMetadataType `object`: The new device metadata type.
  * DeviceGroupKey [StringType](#stringtype)
  * DeviceKey [DeviceKeyType](#devicekeytype)

### NotAuthorizedException
* NotAuthorizedException `object`: This exception is thrown when a user is not authorized.
  * message [MessageType](#messagetype)

### NotifyConfigurationType
* NotifyConfigurationType `object`: The notify configuration type.
  * BlockEmail [NotifyEmailType](#notifyemailtype)
  * From [StringType](#stringtype)
  * MfaEmail [NotifyEmailType](#notifyemailtype)
  * NoActionEmail [NotifyEmailType](#notifyemailtype)
  * ReplyTo [StringType](#stringtype)
  * SourceArn **required** [ArnType](#arntype)

### NotifyEmailType
* NotifyEmailType `object`: The notify email type.
  * HtmlBody [EmailNotificationBodyType](#emailnotificationbodytype)
  * Subject **required** [EmailNotificationSubjectType](#emailnotificationsubjecttype)
  * TextBody [EmailNotificationBodyType](#emailnotificationbodytype)

### NumberAttributeConstraintsType
* NumberAttributeConstraintsType `object`: The minimum and maximum value of an attribute that is of the number data type.
  * MaxValue [StringType](#stringtype)
  * MinValue [StringType](#stringtype)

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
  * MinimumLength [PasswordPolicyMinLengthType](#passwordpolicyminlengthtype)
  * RequireLowercase [BooleanType](#booleantype)
  * RequireNumbers [BooleanType](#booleantype)
  * RequireSymbols [BooleanType](#booleantype)
  * RequireUppercase [BooleanType](#booleantype)

### PasswordResetRequiredException
* PasswordResetRequiredException `object`: This exception is thrown when a password reset is required.
  * message [MessageType](#messagetype)

### PasswordType
* PasswordType `string`

### PoolQueryLimitType
* PoolQueryLimitType `integer`

### PreSignedUrlType
* PreSignedUrlType `string`

### PrecedenceType
* PrecedenceType `integer`

### PreconditionNotMetException
* PreconditionNotMetException `object`: This exception is thrown when a precondition is not met.
  * message [MessageType](#messagetype)

### ProviderDescription
* ProviderDescription `object`: A container for identity provider details.
  * CreationDate [DateType](#datetype)
  * LastModifiedDate [DateType](#datetype)
  * ProviderName [ProviderNameType](#providernametype)
  * ProviderType [IdentityProviderTypeType](#identityprovidertypetype)

### ProviderDetailsType
* ProviderDetailsType `array`
  * items `object`
    * key [StringType](#stringtype)
    * value [StringType](#stringtype)

### ProviderNameType
* ProviderNameType `string`

### ProviderNameTypeV1
* ProviderNameTypeV1 `string`

### ProviderUserIdentifierType
* ProviderUserIdentifierType `object`: A container for information about an identity provider for a user pool.
  * ProviderAttributeName [StringType](#stringtype)
  * ProviderAttributeValue [StringType](#stringtype)
  * ProviderName [ProviderNameType](#providernametype)

### ProvidersListType
* ProvidersListType `array`
  * items [ProviderDescription](#providerdescription)

### QueryLimit
* QueryLimit `integer`

### QueryLimitType
* QueryLimitType `integer`

### RedirectUrlType
* RedirectUrlType `string`

### RefreshTokenValidityType
* RefreshTokenValidityType `integer`

### ResendConfirmationCodeRequest
* ResendConfirmationCodeRequest `object`: Represents the request to resend the confirmation code.
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)

### ResendConfirmationCodeResponse
* ResendConfirmationCodeResponse `object`: The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code.
  * CodeDeliveryDetails [CodeDeliveryDetailsType](#codedeliverydetailstype)

### ResourceNotFoundException
* ResourceNotFoundException `object`: This exception is thrown when the Amazon Cognito service cannot find the requested resource.
  * message [MessageType](#messagetype)

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
  * ScopeDescription **required** [ResourceServerScopeDescriptionType](#resourceserverscopedescriptiontype)
  * ScopeName **required** [ResourceServerScopeNameType](#resourceserverscopenametype)

### ResourceServerType
* ResourceServerType `object`: A container for information about a resource server for a user pool.
  * Identifier [ResourceServerIdentifierType](#resourceserveridentifiertype)
  * Name [ResourceServerNameType](#resourceservernametype)
  * Scopes [ResourceServerScopeListType](#resourceserverscopelisttype)
  * UserPoolId [UserPoolIdType](#userpoolidtype)

### ResourceServersListType
* ResourceServersListType `array`
  * items [ResourceServerType](#resourceservertype)

### RespondToAuthChallengeRequest
* RespondToAuthChallengeRequest `object`: The request to respond to an authentication challenge.
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ChallengeName **required** [ChallengeNameType](#challengenametype)
  * ChallengeResponses [ChallengeResponsesType](#challengeresponsestype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * Session [SessionType](#sessiontype)
  * UserContextData [UserContextDataType](#usercontextdatatype)

### RespondToAuthChallengeResponse
* RespondToAuthChallengeResponse `object`: The response to respond to the authentication challenge.
  * AuthenticationResult [AuthenticationResultType](#authenticationresulttype)
  * ChallengeName [ChallengeNameType](#challengenametype)
  * ChallengeParameters [ChallengeParametersType](#challengeparameterstype)
  * Session [SessionType](#sessiontype)

### RiskConfigurationType
* RiskConfigurationType `object`: The risk configuration type.
  * AccountTakeoverRiskConfiguration [AccountTakeoverRiskConfigurationType](#accounttakeoverriskconfigurationtype)
  * ClientId [ClientIdType](#clientidtype)
  * CompromisedCredentialsRiskConfiguration [CompromisedCredentialsRiskConfigurationType](#compromisedcredentialsriskconfigurationtype)
  * LastModifiedDate [DateType](#datetype)
  * RiskExceptionConfiguration [RiskExceptionConfigurationType](#riskexceptionconfigurationtype)
  * UserPoolId [UserPoolIdType](#userpoolidtype)

### RiskDecisionType
* RiskDecisionType `string` (values: NoRisk, AccountTakeover, Block)

### RiskExceptionConfigurationType
* RiskExceptionConfigurationType `object`: The type of the configuration to override the risk decision.
  * BlockedIPRangeList [BlockedIPRangeListType](#blockediprangelisttype)
  * SkippedIPRangeList [SkippedIPRangeListType](#skippediprangelisttype)

### RiskLevelType
* RiskLevelType `string` (values: Low, Medium, High)

### S3BucketType
* S3BucketType `string`

### SMSMfaSettingsType
* SMSMfaSettingsType `object`: The SMS multi-factor authentication (MFA) settings type.
  * Enabled [BooleanType](#booleantype)
  * PreferredMfa [BooleanType](#booleantype)

### SchemaAttributeType
* SchemaAttributeType `object`: Contains information about the schema attribute.
  * AttributeDataType [AttributeDataType](#attributedatatype)
  * DeveloperOnlyAttribute [BooleanType](#booleantype)
  * Mutable [BooleanType](#booleantype)
  * Name [CustomAttributeNameType](#customattributenametype)
  * NumberAttributeConstraints [NumberAttributeConstraintsType](#numberattributeconstraintstype)
  * Required [BooleanType](#booleantype)
  * StringAttributeConstraints [StringAttributeConstraintsType](#stringattributeconstraintstype)

### SchemaAttributesListType
* SchemaAttributesListType `array`
  * items [SchemaAttributeType](#schemaattributetype)

### ScopeDoesNotExistException
* ScopeDoesNotExistException `object`: This exception is thrown when the specified scope does not exist.
  * message [MessageType](#messagetype)

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
  * AccountTakeoverRiskConfiguration [AccountTakeoverRiskConfigurationType](#accounttakeoverriskconfigurationtype)
  * ClientId [ClientIdType](#clientidtype)
  * CompromisedCredentialsRiskConfiguration [CompromisedCredentialsRiskConfigurationType](#compromisedcredentialsriskconfigurationtype)
  * RiskExceptionConfiguration [RiskExceptionConfigurationType](#riskexceptionconfigurationtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### SetRiskConfigurationResponse
* SetRiskConfigurationResponse `object`
  * RiskConfiguration **required** [RiskConfigurationType](#riskconfigurationtype)

### SetUICustomizationRequest
* SetUICustomizationRequest `object`
  * CSS [CSSType](#csstype)
  * ClientId [ClientIdType](#clientidtype)
  * ImageFile [ImageFileType](#imagefiletype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### SetUICustomizationResponse
* SetUICustomizationResponse `object`
  * UICustomization **required** [UICustomizationType](#uicustomizationtype)

### SetUserMFAPreferenceRequest
* SetUserMFAPreferenceRequest `object`
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * SMSMfaSettings [SMSMfaSettingsType](#smsmfasettingstype)
  * SoftwareTokenMfaSettings [SoftwareTokenMfaSettingsType](#softwaretokenmfasettingstype)

### SetUserMFAPreferenceResponse
* SetUserMFAPreferenceResponse `object`

### SetUserPoolMfaConfigRequest
* SetUserPoolMfaConfigRequest `object`
  * MfaConfiguration [UserPoolMfaType](#userpoolmfatype)
  * SmsMfaConfiguration [SmsMfaConfigType](#smsmfaconfigtype)
  * SoftwareTokenMfaConfiguration [SoftwareTokenMfaConfigType](#softwaretokenmfaconfigtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### SetUserPoolMfaConfigResponse
* SetUserPoolMfaConfigResponse `object`
  * MfaConfiguration [UserPoolMfaType](#userpoolmfatype)
  * SmsMfaConfiguration [SmsMfaConfigType](#smsmfaconfigtype)
  * SoftwareTokenMfaConfiguration [SoftwareTokenMfaConfigType](#softwaretokenmfaconfigtype)

### SetUserSettingsRequest
* SetUserSettingsRequest `object`: Represents the request to set user settings.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * MFAOptions **required** [MFAOptionListType](#mfaoptionlisttype)

### SetUserSettingsResponse
* SetUserSettingsResponse `object`: The response from the server for a set user settings request.

### SignUpRequest
* SignUpRequest `object`: Represents the request to register a user.
  * AnalyticsMetadata [AnalyticsMetadataType](#analyticsmetadatatype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * Password **required** [PasswordType](#passwordtype)
  * SecretHash [SecretHashType](#secrethashtype)
  * UserAttributes [AttributeListType](#attributelisttype)
  * UserContextData [UserContextDataType](#usercontextdatatype)
  * Username **required** [UsernameType](#usernametype)
  * ValidationData [AttributeListType](#attributelisttype)

### SignUpResponse
* SignUpResponse `object`: The response from the server for a registration request.
  * CodeDeliveryDetails [CodeDeliveryDetailsType](#codedeliverydetailstype)
  * UserConfirmed **required** [BooleanType](#booleantype)
  * UserSub **required** [StringType](#stringtype)

### SkippedIPRangeListType
* SkippedIPRangeListType `array`
  * items [StringType](#stringtype)

### SmsConfigurationType
* SmsConfigurationType `object`: The SMS configuration type.
  * ExternalId [StringType](#stringtype)
  * SnsCallerArn **required** [ArnType](#arntype)

### SmsMfaConfigType
* SmsMfaConfigType `object`: The SMS text message multi-factor authentication (MFA) configuration type.
  * SmsAuthenticationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * SmsConfiguration [SmsConfigurationType](#smsconfigurationtype)

### SmsVerificationMessageType
* SmsVerificationMessageType `string`

### SoftwareTokenMFANotFoundException
* SoftwareTokenMFANotFoundException `object`: This exception is thrown when the software token TOTP multi-factor authentication (MFA) is not enabled for the user pool.
  * message [MessageType](#messagetype)

### SoftwareTokenMFAUserCodeType
* SoftwareTokenMFAUserCodeType `string`

### SoftwareTokenMfaConfigType
* SoftwareTokenMfaConfigType `object`: The type used for enabling software token MFA at the user pool level.
  * Enabled [BooleanType](#booleantype)

### SoftwareTokenMfaSettingsType
* SoftwareTokenMfaSettingsType `object`: The type used for enabling software token MFA at the user level.
  * Enabled [BooleanType](#booleantype)
  * PreferredMfa [BooleanType](#booleantype)

### StartUserImportJobRequest
* StartUserImportJobRequest `object`: Represents the request to start the user import job.
  * JobId **required** [UserImportJobIdType](#userimportjobidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### StartUserImportJobResponse
* StartUserImportJobResponse `object`: Represents the response from the server to the request to start the user import job.
  * UserImportJob [UserImportJobType](#userimportjobtype)

### StatusType
* StatusType `string` (values: Enabled, Disabled)

### StopUserImportJobRequest
* StopUserImportJobRequest `object`: Represents the request to stop the user import job.
  * JobId **required** [UserImportJobIdType](#userimportjobidtype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### StopUserImportJobResponse
* StopUserImportJobResponse `object`: Represents the response from the server to the request to stop the user import job.
  * UserImportJob [UserImportJobType](#userimportjobtype)

### StringAttributeConstraintsType
* StringAttributeConstraintsType `object`: The constraints associated with a string attribute.
  * MaxLength [StringType](#stringtype)
  * MinLength [StringType](#stringtype)

### StringType
* StringType `string`

### SupportedIdentityProvidersListType
* SupportedIdentityProvidersListType `array`
  * items [ProviderNameType](#providernametype)

### TokenModelType
* TokenModelType `string`

### TooManyFailedAttemptsException
* TooManyFailedAttemptsException `object`: This exception is thrown when the user has made too many failed attempts for a given action (e.g., sign in).
  * message [MessageType](#messagetype)

### TooManyRequestsException
* TooManyRequestsException `object`: This exception is thrown when the user has made too many requests for a given operation.
  * message [MessageType](#messagetype)

### UICustomizationType
* UICustomizationType `object`: A container for the UI customization information for a user pool's built-in app UI.
  * CSS [CSSType](#csstype)
  * CSSVersion [CSSVersionType](#cssversiontype)
  * ClientId [ClientIdType](#clientidtype)
  * CreationDate [DateType](#datetype)
  * ImageUrl [ImageUrlType](#imageurltype)
  * LastModifiedDate [DateType](#datetype)
  * UserPoolId [UserPoolIdType](#userpoolidtype)

### UnexpectedLambdaException
* UnexpectedLambdaException `object`: This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.
  * message [MessageType](#messagetype)

### UnsupportedIdentityProviderException
* UnsupportedIdentityProviderException `object`: This exception is thrown when the specified identifier is not supported.
  * message [MessageType](#messagetype)

### UnsupportedUserStateException
* UnsupportedUserStateException `object`: The request failed because the user is in an unsupported state.
  * message [MessageType](#messagetype)

### UpdateAuthEventFeedbackRequest
* UpdateAuthEventFeedbackRequest `object`
  * EventId **required** [EventIdType](#eventidtype)
  * FeedbackToken **required** [TokenModelType](#tokenmodeltype)
  * FeedbackValue **required** [FeedbackValueType](#feedbackvaluetype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * Username **required** [UsernameType](#usernametype)

### UpdateAuthEventFeedbackResponse
* UpdateAuthEventFeedbackResponse `object`

### UpdateDeviceStatusRequest
* UpdateDeviceStatusRequest `object`: Represents the request to update the device status.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * DeviceKey **required** [DeviceKeyType](#devicekeytype)
  * DeviceRememberedStatus [DeviceRememberedStatusType](#devicerememberedstatustype)

### UpdateDeviceStatusResponse
* UpdateDeviceStatusResponse `object`: The response to the request to update the device status.

### UpdateGroupRequest
* UpdateGroupRequest `object`
  * Description [DescriptionType](#descriptiontype)
  * GroupName **required** [GroupNameType](#groupnametype)
  * Precedence [PrecedenceType](#precedencetype)
  * RoleArn [ArnType](#arntype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### UpdateGroupResponse
* UpdateGroupResponse `object`
  * Group [GroupType](#grouptype)

### UpdateIdentityProviderRequest
* UpdateIdentityProviderRequest `object`
  * AttributeMapping [AttributeMappingType](#attributemappingtype)
  * IdpIdentifiers [IdpIdentifiersListType](#idpidentifierslisttype)
  * ProviderDetails [ProviderDetailsType](#providerdetailstype)
  * ProviderName **required** [ProviderNameType](#providernametype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### UpdateIdentityProviderResponse
* UpdateIdentityProviderResponse `object`
  * IdentityProvider **required** [IdentityProviderType](#identityprovidertype)

### UpdateResourceServerRequest
* UpdateResourceServerRequest `object`
  * Identifier **required** [ResourceServerIdentifierType](#resourceserveridentifiertype)
  * Name **required** [ResourceServerNameType](#resourceservernametype)
  * Scopes [ResourceServerScopeListType](#resourceserverscopelisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)

### UpdateResourceServerResponse
* UpdateResourceServerResponse `object`
  * ResourceServer **required** [ResourceServerType](#resourceservertype)

### UpdateUserAttributesRequest
* UpdateUserAttributesRequest `object`: Represents the request to update user attributes.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * UserAttributes **required** [AttributeListType](#attributelisttype)

### UpdateUserAttributesResponse
* UpdateUserAttributesResponse `object`: Represents the response from the server for the request to update user attributes.
  * CodeDeliveryDetailsList [CodeDeliveryDetailsListType](#codedeliverydetailslisttype)

### UpdateUserPoolClientRequest
* UpdateUserPoolClientRequest `object`: Represents the request to update the user pool client.
  * AllowedOAuthFlows [OAuthFlowsType](#oauthflowstype)
  * AllowedOAuthFlowsUserPoolClient [BooleanType](#booleantype)
  * AllowedOAuthScopes [ScopeListType](#scopelisttype)
  * AnalyticsConfiguration [AnalyticsConfigurationType](#analyticsconfigurationtype)
  * CallbackURLs [CallbackURLsListType](#callbackurlslisttype)
  * ClientId **required** [ClientIdType](#clientidtype)
  * ClientName [ClientNameType](#clientnametype)
  * DefaultRedirectURI [RedirectUrlType](#redirecturltype)
  * ExplicitAuthFlows [ExplicitAuthFlowsListType](#explicitauthflowslisttype)
  * LogoutURLs [LogoutURLsListType](#logouturlslisttype)
  * ReadAttributes [ClientPermissionListType](#clientpermissionlisttype)
  * RefreshTokenValidity [RefreshTokenValidityType](#refreshtokenvaliditytype)
  * SupportedIdentityProviders [SupportedIdentityProvidersListType](#supportedidentityproviderslisttype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * WriteAttributes [ClientPermissionListType](#clientpermissionlisttype)

### UpdateUserPoolClientResponse
* UpdateUserPoolClientResponse `object`: Represents the response from the server to the request to update the user pool client.
  * UserPoolClient [UserPoolClientType](#userpoolclienttype)

### UpdateUserPoolRequest
* UpdateUserPoolRequest `object`: Represents the request to update the user pool.
  * AdminCreateUserConfig [AdminCreateUserConfigType](#admincreateuserconfigtype)
  * AutoVerifiedAttributes [VerifiedAttributesListType](#verifiedattributeslisttype)
  * DeviceConfiguration [DeviceConfigurationType](#deviceconfigurationtype)
  * EmailConfiguration [EmailConfigurationType](#emailconfigurationtype)
  * EmailVerificationMessage [EmailVerificationMessageType](#emailverificationmessagetype)
  * EmailVerificationSubject [EmailVerificationSubjectType](#emailverificationsubjecttype)
  * LambdaConfig [LambdaConfigType](#lambdaconfigtype)
  * MfaConfiguration [UserPoolMfaType](#userpoolmfatype)
  * Policies [UserPoolPolicyType](#userpoolpolicytype)
  * SmsAuthenticationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * SmsConfiguration [SmsConfigurationType](#smsconfigurationtype)
  * SmsVerificationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * UserPoolAddOns [UserPoolAddOnsType](#userpooladdonstype)
  * UserPoolId **required** [UserPoolIdType](#userpoolidtype)
  * UserPoolTags [UserPoolTagsType](#userpooltagstype)
  * VerificationMessageTemplate [VerificationMessageTemplateType](#verificationmessagetemplatetype)

### UpdateUserPoolResponse
* UpdateUserPoolResponse `object`: Represents the response from the server when you make a request to update the user pool.

### UserContextDataType
* UserContextDataType `object`: Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
  * EncodedData [StringType](#stringtype)

### UserFilterType
* UserFilterType `string`

### UserImportInProgressException
* UserImportInProgressException `object`: This exception is thrown when you are trying to modify a user pool while a user import job is in progress for that pool.
  * message [MessageType](#messagetype)

### UserImportJobIdType
* UserImportJobIdType `string`

### UserImportJobNameType
* UserImportJobNameType `string`

### UserImportJobStatusType
* UserImportJobStatusType `string` (values: Created, Pending, InProgress, Stopping, Expired, Stopped, Failed, Succeeded)

### UserImportJobType
* UserImportJobType `object`: The user import job type.
  * CloudWatchLogsRoleArn [ArnType](#arntype)
  * CompletionDate [DateType](#datetype)
  * CompletionMessage [CompletionMessageType](#completionmessagetype)
  * CreationDate [DateType](#datetype)
  * FailedUsers [LongType](#longtype)
  * ImportedUsers [LongType](#longtype)
  * JobId [UserImportJobIdType](#userimportjobidtype)
  * JobName [UserImportJobNameType](#userimportjobnametype)
  * PreSignedUrl [PreSignedUrlType](#presignedurltype)
  * SkippedUsers [LongType](#longtype)
  * StartDate [DateType](#datetype)
  * Status [UserImportJobStatusType](#userimportjobstatustype)
  * UserPoolId [UserPoolIdType](#userpoolidtype)

### UserImportJobsListType
* UserImportJobsListType `array`
  * items [UserImportJobType](#userimportjobtype)

### UserLambdaValidationException
* UserLambdaValidationException `object`: This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.
  * message [MessageType](#messagetype)

### UserMFASettingListType
* UserMFASettingListType `array`
  * items [StringType](#stringtype)

### UserNotConfirmedException
* UserNotConfirmedException `object`: This exception is thrown when a user is not confirmed successfully.
  * message [MessageType](#messagetype)

### UserNotFoundException
* UserNotFoundException `object`: This exception is thrown when a user is not found.
  * message [MessageType](#messagetype)

### UserPoolAddOnNotEnabledException
* UserPoolAddOnNotEnabledException `object`: This exception is thrown when user pool add-ons are not enabled.
  * message [MessageType](#messagetype)

### UserPoolAddOnsType
* UserPoolAddOnsType `object`: The user pool add-ons type.
  * AdvancedSecurityMode **required** [AdvancedSecurityModeType](#advancedsecuritymodetype)

### UserPoolClientDescription
* UserPoolClientDescription `object`: The description of the user pool client.
  * ClientId [ClientIdType](#clientidtype)
  * ClientName [ClientNameType](#clientnametype)
  * UserPoolId [UserPoolIdType](#userpoolidtype)

### UserPoolClientListType
* UserPoolClientListType `array`
  * items [UserPoolClientDescription](#userpoolclientdescription)

### UserPoolClientType
* UserPoolClientType `object`: Contains information about a user pool client.
  * AllowedOAuthFlows [OAuthFlowsType](#oauthflowstype)
  * AllowedOAuthFlowsUserPoolClient [BooleanType](#booleantype)
  * AllowedOAuthScopes [ScopeListType](#scopelisttype)
  * AnalyticsConfiguration [AnalyticsConfigurationType](#analyticsconfigurationtype)
  * CallbackURLs [CallbackURLsListType](#callbackurlslisttype)
  * ClientId [ClientIdType](#clientidtype)
  * ClientName [ClientNameType](#clientnametype)
  * ClientSecret [ClientSecretType](#clientsecrettype)
  * CreationDate [DateType](#datetype)
  * DefaultRedirectURI [RedirectUrlType](#redirecturltype)
  * ExplicitAuthFlows [ExplicitAuthFlowsListType](#explicitauthflowslisttype)
  * LastModifiedDate [DateType](#datetype)
  * LogoutURLs [LogoutURLsListType](#logouturlslisttype)
  * ReadAttributes [ClientPermissionListType](#clientpermissionlisttype)
  * RefreshTokenValidity [RefreshTokenValidityType](#refreshtokenvaliditytype)
  * SupportedIdentityProviders [SupportedIdentityProvidersListType](#supportedidentityproviderslisttype)
  * UserPoolId [UserPoolIdType](#userpoolidtype)
  * WriteAttributes [ClientPermissionListType](#clientpermissionlisttype)

### UserPoolDescriptionType
* UserPoolDescriptionType `object`: A user pool description.
  * CreationDate [DateType](#datetype)
  * Id [UserPoolIdType](#userpoolidtype)
  * LambdaConfig [LambdaConfigType](#lambdaconfigtype)
  * LastModifiedDate [DateType](#datetype)
  * Name [UserPoolNameType](#userpoolnametype)
  * Status [StatusType](#statustype)

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
  * PasswordPolicy [PasswordPolicyType](#passwordpolicytype)

### UserPoolTaggingException
* UserPoolTaggingException `object`: This exception is thrown when a user pool tag cannot be set or updated.
  * message [MessageType](#messagetype)

### UserPoolTagsType
* UserPoolTagsType `array`
  * items `object`
    * key [StringType](#stringtype)
    * value [StringType](#stringtype)

### UserPoolType
* UserPoolType `object`: A container for information about the user pool.
  * AdminCreateUserConfig [AdminCreateUserConfigType](#admincreateuserconfigtype)
  * AliasAttributes [AliasAttributesListType](#aliasattributeslisttype)
  * Arn [ArnType](#arntype)
  * AutoVerifiedAttributes [VerifiedAttributesListType](#verifiedattributeslisttype)
  * CreationDate [DateType](#datetype)
  * DeviceConfiguration [DeviceConfigurationType](#deviceconfigurationtype)
  * Domain [DomainType](#domaintype)
  * EmailConfiguration [EmailConfigurationType](#emailconfigurationtype)
  * EmailConfigurationFailure [StringType](#stringtype)
  * EmailVerificationMessage [EmailVerificationMessageType](#emailverificationmessagetype)
  * EmailVerificationSubject [EmailVerificationSubjectType](#emailverificationsubjecttype)
  * EstimatedNumberOfUsers [IntegerType](#integertype)
  * Id [UserPoolIdType](#userpoolidtype)
  * LambdaConfig [LambdaConfigType](#lambdaconfigtype)
  * LastModifiedDate [DateType](#datetype)
  * MfaConfiguration [UserPoolMfaType](#userpoolmfatype)
  * Name [UserPoolNameType](#userpoolnametype)
  * Policies [UserPoolPolicyType](#userpoolpolicytype)
  * SchemaAttributes [SchemaAttributesListType](#schemaattributeslisttype)
  * SmsAuthenticationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * SmsConfiguration [SmsConfigurationType](#smsconfigurationtype)
  * SmsConfigurationFailure [StringType](#stringtype)
  * SmsVerificationMessage [SmsVerificationMessageType](#smsverificationmessagetype)
  * Status [StatusType](#statustype)
  * UserPoolAddOns [UserPoolAddOnsType](#userpooladdonstype)
  * UserPoolTags [UserPoolTagsType](#userpooltagstype)
  * UsernameAttributes [UsernameAttributesListType](#usernameattributeslisttype)
  * VerificationMessageTemplate [VerificationMessageTemplateType](#verificationmessagetemplatetype)

### UserStatusType
* UserStatusType `string` (values: UNCONFIRMED, CONFIRMED, ARCHIVED, COMPROMISED, UNKNOWN, RESET_REQUIRED, FORCE_CHANGE_PASSWORD)

### UserType
* UserType `object`: The user type.
  * Attributes [AttributeListType](#attributelisttype)
  * Enabled [BooleanType](#booleantype)
  * MFAOptions [MFAOptionListType](#mfaoptionlisttype)
  * UserCreateDate [DateType](#datetype)
  * UserLastModifiedDate [DateType](#datetype)
  * UserStatus [UserStatusType](#userstatustype)
  * Username [UsernameType](#usernametype)

### UsernameAttributeType
* UsernameAttributeType `string` (values: phone_number, email)

### UsernameAttributesListType
* UsernameAttributesListType `array`
  * items [UsernameAttributeType](#usernameattributetype)

### UsernameExistsException
* UsernameExistsException `object`: This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.
  * message [MessageType](#messagetype)

### UsernameType
* UsernameType `string`

### UsersListType
* UsersListType `array`
  * items [UserType](#usertype)

### VerificationMessageTemplateType
* VerificationMessageTemplateType `object`: The template for verification messages.
  * DefaultEmailOption [DefaultEmailOptionType](#defaultemailoptiontype)
  * EmailMessage [EmailVerificationMessageType](#emailverificationmessagetype)
  * EmailMessageByLink [EmailVerificationMessageByLinkType](#emailverificationmessagebylinktype)
  * EmailSubject [EmailVerificationSubjectType](#emailverificationsubjecttype)
  * EmailSubjectByLink [EmailVerificationSubjectByLinkType](#emailverificationsubjectbylinktype)
  * SmsMessage [SmsVerificationMessageType](#smsverificationmessagetype)

### VerifiedAttributeType
* VerifiedAttributeType `string` (values: phone_number, email)

### VerifiedAttributesListType
* VerifiedAttributesListType `array`
  * items [VerifiedAttributeType](#verifiedattributetype)

### VerifySoftwareTokenRequest
* VerifySoftwareTokenRequest `object`
  * AccessToken [TokenModelType](#tokenmodeltype)
  * FriendlyDeviceName [StringType](#stringtype)
  * Session [SessionType](#sessiontype)
  * UserCode **required** [SoftwareTokenMFAUserCodeType](#softwaretokenmfausercodetype)

### VerifySoftwareTokenResponse
* VerifySoftwareTokenResponse `object`
  * Session [SessionType](#sessiontype)
  * Status [VerifySoftwareTokenResponseType](#verifysoftwaretokenresponsetype)

### VerifySoftwareTokenResponseType
* VerifySoftwareTokenResponseType `string` (values: SUCCESS, ERROR)

### VerifyUserAttributeRequest
* VerifyUserAttributeRequest `object`: Represents the request to verify user attributes.
  * AccessToken **required** [TokenModelType](#tokenmodeltype)
  * AttributeName **required** [AttributeNameType](#attributenametype)
  * Code **required** [ConfirmationCodeType](#confirmationcodetype)

### VerifyUserAttributeResponse
* VerifyUserAttributeResponse `object`: A container representing the response from the server from the request to verify user attributes.


