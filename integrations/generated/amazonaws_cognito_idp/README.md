# @datafire/amazonaws_cognito_idp

Client library for Amazon Cognito Identity Provider

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cognito_idp
```

```js
let datafire = require('datafire');
let amazonaws_cognito_idp = require('@datafire/amazonaws_cognito_idp').create();

amazonaws_cognito_idp.AddCustomAttributes({}).then(data => {
  console.log(data);
})
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

#### Parameters
* CustomAttributes (array) **required**
* UserPoolId (string) **required**

### AdminAddUserToGroup



```js
amazonaws_cognito_idp.AdminAddUserToGroup({
  "UserPoolId": "",
  "Username": "",
  "GroupName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* UserPoolId (string) **required**
* Username (string) **required**

### AdminConfirmSignUp



```js
amazonaws_cognito_idp.AdminConfirmSignUp({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**
* Username (string) **required**

### AdminCreateUser



```js
amazonaws_cognito_idp.AdminCreateUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* DesiredDeliveryMediums (array)
* ForceAliasCreation (boolean)
* MessageAction (string)
* TemporaryPassword (string)
* UserAttributes (array)
* UserPoolId (string) **required**
* Username (string) **required**
* ValidationData (array)

### AdminDeleteUser



```js
amazonaws_cognito_idp.AdminDeleteUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**
* Username (string) **required**

### AdminDeleteUserAttributes



```js
amazonaws_cognito_idp.AdminDeleteUserAttributes({
  "UserPoolId": "",
  "Username": "",
  "UserAttributeNames": []
}, context)
```

#### Parameters
* UserAttributeNames (array) **required**
* UserPoolId (string) **required**
* Username (string) **required**

### AdminDisableUser



```js
amazonaws_cognito_idp.AdminDisableUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**
* Username (string) **required**

### AdminEnableUser



```js
amazonaws_cognito_idp.AdminEnableUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**
* Username (string) **required**

### AdminForgetDevice



```js
amazonaws_cognito_idp.AdminForgetDevice({
  "UserPoolId": "",
  "Username": "",
  "DeviceKey": ""
}, context)
```

#### Parameters
* DeviceKey (string) **required**
* UserPoolId (string) **required**
* Username (string) **required**

### AdminGetDevice



```js
amazonaws_cognito_idp.AdminGetDevice({
  "DeviceKey": "",
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* DeviceKey (string) **required**
* UserPoolId (string) **required**
* Username (string) **required**

### AdminGetUser



```js
amazonaws_cognito_idp.AdminGetUser({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**
* Username (string) **required**

### AdminInitiateAuth



```js
amazonaws_cognito_idp.AdminInitiateAuth({
  "UserPoolId": "",
  "ClientId": "",
  "AuthFlow": ""
}, context)
```

#### Parameters
* AuthFlow (string) **required**
* AuthParameters (array)
* ClientId (string) **required**
* ClientMetadata (array)
* UserPoolId (string) **required**

### AdminListDevices



```js
amazonaws_cognito_idp.AdminListDevices({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* Limit (integer)
* PaginationToken (string)
* UserPoolId (string) **required**
* Username (string) **required**

### AdminListGroupsForUser



```js
amazonaws_cognito_idp.AdminListGroupsForUser({
  "Username": "",
  "UserPoolId": ""
}, context)
```

#### Parameters
* Limit (integer)
* NextToken (string)
* UserPoolId (string) **required**
* Username (string) **required**

### AdminRemoveUserFromGroup



```js
amazonaws_cognito_idp.AdminRemoveUserFromGroup({
  "UserPoolId": "",
  "Username": "",
  "GroupName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* UserPoolId (string) **required**
* Username (string) **required**

### AdminResetUserPassword



```js
amazonaws_cognito_idp.AdminResetUserPassword({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**
* Username (string) **required**

### AdminRespondToAuthChallenge



```js
amazonaws_cognito_idp.AdminRespondToAuthChallenge({
  "UserPoolId": "",
  "ClientId": "",
  "ChallengeName": ""
}, context)
```

#### Parameters
* ChallengeName (string) **required**
* ChallengeResponses (array)
* ClientId (string) **required**
* Session (string)
* UserPoolId (string) **required**

### AdminSetUserSettings



```js
amazonaws_cognito_idp.AdminSetUserSettings({
  "UserPoolId": "",
  "Username": "",
  "MFAOptions": []
}, context)
```

#### Parameters
* MFAOptions (array) **required**
* UserPoolId (string) **required**
* Username (string) **required**

### AdminUpdateDeviceStatus



```js
amazonaws_cognito_idp.AdminUpdateDeviceStatus({
  "UserPoolId": "",
  "Username": "",
  "DeviceKey": ""
}, context)
```

#### Parameters
* DeviceKey (string) **required**
* DeviceRememberedStatus (string)
* UserPoolId (string) **required**
* Username (string) **required**

### AdminUpdateUserAttributes



```js
amazonaws_cognito_idp.AdminUpdateUserAttributes({
  "UserPoolId": "",
  "Username": "",
  "UserAttributes": []
}, context)
```

#### Parameters
* UserAttributes (array) **required**
* UserPoolId (string) **required**
* Username (string) **required**

### AdminUserGlobalSignOut



```js
amazonaws_cognito_idp.AdminUserGlobalSignOut({
  "UserPoolId": "",
  "Username": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**
* Username (string) **required**

### ChangePassword



```js
amazonaws_cognito_idp.ChangePassword({
  "PreviousPassword": "",
  "ProposedPassword": ""
}, context)
```

#### Parameters
* AccessToken (string)
* PreviousPassword (string) **required**
* ProposedPassword (string) **required**

### ConfirmDevice



```js
amazonaws_cognito_idp.ConfirmDevice({
  "AccessToken": "",
  "DeviceKey": ""
}, context)
```

#### Parameters
* AccessToken (string) **required**
* DeviceKey (string) **required**
* DeviceName (string)
* DeviceSecretVerifierConfig (object) - The device verifier against which it will be authenticated.

### ConfirmForgotPassword



```js
amazonaws_cognito_idp.ConfirmForgotPassword({
  "ClientId": "",
  "Username": "",
  "ConfirmationCode": "",
  "Password": ""
}, context)
```

#### Parameters
* ClientId (string) **required**
* ConfirmationCode (string) **required**
* Password (string) **required**
* SecretHash (string)
* Username (string) **required**

### ConfirmSignUp



```js
amazonaws_cognito_idp.ConfirmSignUp({
  "ClientId": "",
  "Username": "",
  "ConfirmationCode": ""
}, context)
```

#### Parameters
* ClientId (string) **required**
* ConfirmationCode (string) **required**
* ForceAliasCreation (boolean)
* SecretHash (string)
* Username (string) **required**

### CreateGroup



```js
amazonaws_cognito_idp.CreateGroup({
  "GroupName": "",
  "UserPoolId": ""
}, context)
```

#### Parameters
* Description (string)
* GroupName (string) **required**
* Precedence (integer)
* RoleArn (string)
* UserPoolId (string) **required**

### CreateUserImportJob



```js
amazonaws_cognito_idp.CreateUserImportJob({
  "JobName": "",
  "UserPoolId": "",
  "CloudWatchLogsRoleArn": ""
}, context)
```

#### Parameters
* CloudWatchLogsRoleArn (string) **required**
* JobName (string) **required**
* UserPoolId (string) **required**

### CreateUserPool



```js
amazonaws_cognito_idp.CreateUserPool({
  "PoolName": ""
}, context)
```

#### Parameters
* AdminCreateUserConfig (object) - The type of configuration for creating a new user profile.
* AliasAttributes (array)
* AutoVerifiedAttributes (array)
* DeviceConfiguration (object) - The type of configuration for the user pool's device tracking.
* EmailConfiguration (object) - The email configuration type.
* EmailVerificationMessage (string)
* EmailVerificationSubject (string)
* LambdaConfig (object) - Specifies the type of configuration for AWS Lambda triggers.
* MfaConfiguration (string)
* Policies (object) - The type of policy in a user pool.
* PoolName (string) **required**
* Schema (array)
* SmsAuthenticationMessage (string)
* SmsConfiguration (object) - The SMS configuratoin type.
* SmsVerificationMessage (string)
* UserPoolTags (array)

### CreateUserPoolClient



```js
amazonaws_cognito_idp.CreateUserPoolClient({
  "UserPoolId": "",
  "ClientName": ""
}, context)
```

#### Parameters
* ClientName (string) **required**
* ExplicitAuthFlows (array)
* GenerateSecret (boolean)
* ReadAttributes (array)
* RefreshTokenValidity (integer)
* UserPoolId (string) **required**
* WriteAttributes (array)

### DeleteGroup



```js
amazonaws_cognito_idp.DeleteGroup({
  "GroupName": "",
  "UserPoolId": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* UserPoolId (string) **required**

### DeleteUser



```js
amazonaws_cognito_idp.DeleteUser({}, context)
```

#### Parameters
* AccessToken (string)

### DeleteUserAttributes



```js
amazonaws_cognito_idp.DeleteUserAttributes({
  "UserAttributeNames": []
}, context)
```

#### Parameters
* AccessToken (string)
* UserAttributeNames (array) **required**

### DeleteUserPool



```js
amazonaws_cognito_idp.DeleteUserPool({
  "UserPoolId": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**

### DeleteUserPoolClient



```js
amazonaws_cognito_idp.DeleteUserPoolClient({
  "UserPoolId": "",
  "ClientId": ""
}, context)
```

#### Parameters
* ClientId (string) **required**
* UserPoolId (string) **required**

### DescribeUserImportJob



```js
amazonaws_cognito_idp.DescribeUserImportJob({
  "UserPoolId": "",
  "JobId": ""
}, context)
```

#### Parameters
* JobId (string) **required**
* UserPoolId (string) **required**

### DescribeUserPool



```js
amazonaws_cognito_idp.DescribeUserPool({
  "UserPoolId": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**

### DescribeUserPoolClient



```js
amazonaws_cognito_idp.DescribeUserPoolClient({
  "UserPoolId": "",
  "ClientId": ""
}, context)
```

#### Parameters
* ClientId (string) **required**
* UserPoolId (string) **required**

### ForgetDevice



```js
amazonaws_cognito_idp.ForgetDevice({
  "DeviceKey": ""
}, context)
```

#### Parameters
* AccessToken (string)
* DeviceKey (string) **required**

### ForgotPassword



```js
amazonaws_cognito_idp.ForgotPassword({
  "ClientId": "",
  "Username": ""
}, context)
```

#### Parameters
* ClientId (string) **required**
* SecretHash (string)
* Username (string) **required**

### GetCSVHeader



```js
amazonaws_cognito_idp.GetCSVHeader({
  "UserPoolId": ""
}, context)
```

#### Parameters
* UserPoolId (string) **required**

### GetDevice



```js
amazonaws_cognito_idp.GetDevice({
  "DeviceKey": ""
}, context)
```

#### Parameters
* AccessToken (string)
* DeviceKey (string) **required**

### GetGroup



```js
amazonaws_cognito_idp.GetGroup({
  "GroupName": "",
  "UserPoolId": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* UserPoolId (string) **required**

### GetUser



```js
amazonaws_cognito_idp.GetUser({}, context)
```

#### Parameters
* AccessToken (string)

### GetUserAttributeVerificationCode



```js
amazonaws_cognito_idp.GetUserAttributeVerificationCode({
  "AttributeName": ""
}, context)
```

#### Parameters
* AccessToken (string)
* AttributeName (string) **required**

### GlobalSignOut



```js
amazonaws_cognito_idp.GlobalSignOut({}, context)
```

#### Parameters
* AccessToken (string)

### InitiateAuth



```js
amazonaws_cognito_idp.InitiateAuth({
  "AuthFlow": "",
  "ClientId": ""
}, context)
```

#### Parameters
* AuthFlow (string) **required**
* AuthParameters (array)
* ClientId (string) **required**
* ClientMetadata (array)

### ListDevices



```js
amazonaws_cognito_idp.ListDevices({
  "AccessToken": ""
}, context)
```

#### Parameters
* AccessToken (string) **required**
* Limit (integer)
* PaginationToken (string)

### ListGroups



```js
amazonaws_cognito_idp.ListGroups({
  "UserPoolId": ""
}, context)
```

#### Parameters
* Limit (integer)
* NextToken (string)
* UserPoolId (string) **required**

### ListUserImportJobs



```js
amazonaws_cognito_idp.ListUserImportJobs({
  "UserPoolId": "",
  "MaxResults": 0
}, context)
```

#### Parameters
* MaxResults (integer) **required**
* PaginationToken (string)
* UserPoolId (string) **required**

### ListUserPoolClients



```js
amazonaws_cognito_idp.ListUserPoolClients({
  "UserPoolId": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* UserPoolId (string) **required**

### ListUserPools



```js
amazonaws_cognito_idp.ListUserPools({
  "MaxResults": 0
}, context)
```

#### Parameters
* MaxResults (integer) **required**
* NextToken (string)

### ListUsers



```js
amazonaws_cognito_idp.ListUsers({
  "UserPoolId": ""
}, context)
```

#### Parameters
* AttributesToGet (array)
* Filter (string)
* Limit (integer)
* PaginationToken (string)
* UserPoolId (string) **required**

### ListUsersInGroup



```js
amazonaws_cognito_idp.ListUsersInGroup({
  "UserPoolId": "",
  "GroupName": ""
}, context)
```

#### Parameters
* GroupName (string) **required**
* Limit (integer)
* NextToken (string)
* UserPoolId (string) **required**

### ResendConfirmationCode



```js
amazonaws_cognito_idp.ResendConfirmationCode({
  "ClientId": "",
  "Username": ""
}, context)
```

#### Parameters
* ClientId (string) **required**
* SecretHash (string)
* Username (string) **required**

### RespondToAuthChallenge



```js
amazonaws_cognito_idp.RespondToAuthChallenge({
  "ClientId": "",
  "ChallengeName": ""
}, context)
```

#### Parameters
* ChallengeName (string) **required**
* ChallengeResponses (array)
* ClientId (string) **required**
* Session (string)

### SetUserSettings



```js
amazonaws_cognito_idp.SetUserSettings({
  "AccessToken": "",
  "MFAOptions": []
}, context)
```

#### Parameters
* AccessToken (string) **required**
* MFAOptions (array) **required**

### SignUp



```js
amazonaws_cognito_idp.SignUp({
  "ClientId": "",
  "Username": "",
  "Password": ""
}, context)
```

#### Parameters
* ClientId (string) **required**
* Password (string) **required**
* SecretHash (string)
* UserAttributes (array)
* Username (string) **required**
* ValidationData (array)

### StartUserImportJob



```js
amazonaws_cognito_idp.StartUserImportJob({
  "UserPoolId": "",
  "JobId": ""
}, context)
```

#### Parameters
* JobId (string) **required**
* UserPoolId (string) **required**

### StopUserImportJob



```js
amazonaws_cognito_idp.StopUserImportJob({
  "UserPoolId": "",
  "JobId": ""
}, context)
```

#### Parameters
* JobId (string) **required**
* UserPoolId (string) **required**

### UpdateDeviceStatus



```js
amazonaws_cognito_idp.UpdateDeviceStatus({
  "AccessToken": "",
  "DeviceKey": ""
}, context)
```

#### Parameters
* AccessToken (string) **required**
* DeviceKey (string) **required**
* DeviceRememberedStatus (string)

### UpdateGroup



```js
amazonaws_cognito_idp.UpdateGroup({
  "GroupName": "",
  "UserPoolId": ""
}, context)
```

#### Parameters
* Description (string)
* GroupName (string) **required**
* Precedence (integer)
* RoleArn (string)
* UserPoolId (string) **required**

### UpdateUserAttributes



```js
amazonaws_cognito_idp.UpdateUserAttributes({
  "UserAttributes": []
}, context)
```

#### Parameters
* AccessToken (string)
* UserAttributes (array) **required**

### UpdateUserPool



```js
amazonaws_cognito_idp.UpdateUserPool({
  "UserPoolId": ""
}, context)
```

#### Parameters
* AdminCreateUserConfig (object) - The type of configuration for creating a new user profile.
* AutoVerifiedAttributes (array)
* DeviceConfiguration (object) - The type of configuration for the user pool's device tracking.
* EmailConfiguration (object) - The email configuration type.
* EmailVerificationMessage (string)
* EmailVerificationSubject (string)
* LambdaConfig (object) - Specifies the type of configuration for AWS Lambda triggers.
* MfaConfiguration (string)
* Policies (object) - The type of policy in a user pool.
* SmsAuthenticationMessage (string)
* SmsConfiguration (object) - The SMS configuratoin type.
* SmsVerificationMessage (string)
* UserPoolId (string) **required**
* UserPoolTags (array)

### UpdateUserPoolClient



```js
amazonaws_cognito_idp.UpdateUserPoolClient({
  "UserPoolId": "",
  "ClientId": ""
}, context)
```

#### Parameters
* ClientId (string) **required**
* ClientName (string)
* ExplicitAuthFlows (array)
* ReadAttributes (array)
* RefreshTokenValidity (integer)
* UserPoolId (string) **required**
* WriteAttributes (array)

### VerifyUserAttribute



```js
amazonaws_cognito_idp.VerifyUserAttribute({
  "AttributeName": "",
  "Code": ""
}, context)
```

#### Parameters
* AccessToken (string)
* AttributeName (string) **required**
* Code (string) **required**

