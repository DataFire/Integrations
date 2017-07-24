# @datafire/amazonaws_cognito_idp

Client library for Amazon Cognito Identity Provider

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cognito_idp
```

```js
let datafire = require('datafire');
let amazonaws_cognito_idp = require('@datafire/amazonaws_cognito_idp').actions;
let context = new datafire.Context();

amazonaws_cognito_idp.AddCustomAttributes({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>Using the Amazon Cognito User Pools API, you can create a user pool to manage directories and users. You can authenticate a user to obtain tokens related to user identity and access policies.</p> <p>This API reference provides information about user pools in Amazon Cognito User Pools.</p> <p>For more information, see the Amazon Cognito Documentation.</p>

## Actions
### AddCustomAttributes



```js
amazonaws_cognito_idp.AddCustomAttributes({}, context)
```

#### Parameters

### AdminAddUserToGroup



```js
amazonaws_cognito_idp.AdminAddUserToGroup({}, context)
```

#### Parameters

### AdminConfirmSignUp



```js
amazonaws_cognito_idp.AdminConfirmSignUp({}, context)
```

#### Parameters

### AdminCreateUser



```js
amazonaws_cognito_idp.AdminCreateUser({}, context)
```

#### Parameters

### AdminDeleteUser



```js
amazonaws_cognito_idp.AdminDeleteUser({}, context)
```

#### Parameters

### AdminDeleteUserAttributes



```js
amazonaws_cognito_idp.AdminDeleteUserAttributes({}, context)
```

#### Parameters

### AdminDisableUser



```js
amazonaws_cognito_idp.AdminDisableUser({}, context)
```

#### Parameters

### AdminEnableUser



```js
amazonaws_cognito_idp.AdminEnableUser({}, context)
```

#### Parameters

### AdminForgetDevice



```js
amazonaws_cognito_idp.AdminForgetDevice({}, context)
```

#### Parameters

### AdminGetDevice



```js
amazonaws_cognito_idp.AdminGetDevice({}, context)
```

#### Parameters

### AdminGetUser



```js
amazonaws_cognito_idp.AdminGetUser({}, context)
```

#### Parameters

### AdminInitiateAuth



```js
amazonaws_cognito_idp.AdminInitiateAuth({}, context)
```

#### Parameters

### AdminListDevices



```js
amazonaws_cognito_idp.AdminListDevices({}, context)
```

#### Parameters

### AdminListGroupsForUser



```js
amazonaws_cognito_idp.AdminListGroupsForUser({}, context)
```

#### Parameters

### AdminRemoveUserFromGroup



```js
amazonaws_cognito_idp.AdminRemoveUserFromGroup({}, context)
```

#### Parameters

### AdminResetUserPassword



```js
amazonaws_cognito_idp.AdminResetUserPassword({}, context)
```

#### Parameters

### AdminRespondToAuthChallenge



```js
amazonaws_cognito_idp.AdminRespondToAuthChallenge({}, context)
```

#### Parameters

### AdminSetUserSettings



```js
amazonaws_cognito_idp.AdminSetUserSettings({}, context)
```

#### Parameters

### AdminUpdateDeviceStatus



```js
amazonaws_cognito_idp.AdminUpdateDeviceStatus({}, context)
```

#### Parameters

### AdminUpdateUserAttributes



```js
amazonaws_cognito_idp.AdminUpdateUserAttributes({}, context)
```

#### Parameters

### AdminUserGlobalSignOut



```js
amazonaws_cognito_idp.AdminUserGlobalSignOut({}, context)
```

#### Parameters

### ChangePassword



```js
amazonaws_cognito_idp.ChangePassword({}, context)
```

#### Parameters

### ConfirmDevice



```js
amazonaws_cognito_idp.ConfirmDevice({}, context)
```

#### Parameters

### ConfirmForgotPassword



```js
amazonaws_cognito_idp.ConfirmForgotPassword({}, context)
```

#### Parameters

### ConfirmSignUp



```js
amazonaws_cognito_idp.ConfirmSignUp({}, context)
```

#### Parameters

### CreateGroup



```js
amazonaws_cognito_idp.CreateGroup({}, context)
```

#### Parameters

### CreateUserImportJob



```js
amazonaws_cognito_idp.CreateUserImportJob({}, context)
```

#### Parameters

### CreateUserPool



```js
amazonaws_cognito_idp.CreateUserPool({}, context)
```

#### Parameters

### CreateUserPoolClient



```js
amazonaws_cognito_idp.CreateUserPoolClient({}, context)
```

#### Parameters

### DeleteGroup



```js
amazonaws_cognito_idp.DeleteGroup({}, context)
```

#### Parameters

### DeleteUser



```js
amazonaws_cognito_idp.DeleteUser({}, context)
```

#### Parameters

### DeleteUserAttributes



```js
amazonaws_cognito_idp.DeleteUserAttributes({}, context)
```

#### Parameters

### DeleteUserPool



```js
amazonaws_cognito_idp.DeleteUserPool({}, context)
```

#### Parameters

### DeleteUserPoolClient



```js
amazonaws_cognito_idp.DeleteUserPoolClient({}, context)
```

#### Parameters

### DescribeUserImportJob



```js
amazonaws_cognito_idp.DescribeUserImportJob({}, context)
```

#### Parameters

### DescribeUserPool



```js
amazonaws_cognito_idp.DescribeUserPool({}, context)
```

#### Parameters

### DescribeUserPoolClient



```js
amazonaws_cognito_idp.DescribeUserPoolClient({}, context)
```

#### Parameters

### ForgetDevice



```js
amazonaws_cognito_idp.ForgetDevice({}, context)
```

#### Parameters

### ForgotPassword



```js
amazonaws_cognito_idp.ForgotPassword({}, context)
```

#### Parameters

### GetCSVHeader



```js
amazonaws_cognito_idp.GetCSVHeader({}, context)
```

#### Parameters

### GetDevice



```js
amazonaws_cognito_idp.GetDevice({}, context)
```

#### Parameters

### GetGroup



```js
amazonaws_cognito_idp.GetGroup({}, context)
```

#### Parameters

### GetUser



```js
amazonaws_cognito_idp.GetUser({}, context)
```

#### Parameters

### GetUserAttributeVerificationCode



```js
amazonaws_cognito_idp.GetUserAttributeVerificationCode({}, context)
```

#### Parameters

### GlobalSignOut



```js
amazonaws_cognito_idp.GlobalSignOut({}, context)
```

#### Parameters

### InitiateAuth



```js
amazonaws_cognito_idp.InitiateAuth({}, context)
```

#### Parameters

### ListDevices



```js
amazonaws_cognito_idp.ListDevices({}, context)
```

#### Parameters

### ListGroups



```js
amazonaws_cognito_idp.ListGroups({}, context)
```

#### Parameters

### ListUserImportJobs



```js
amazonaws_cognito_idp.ListUserImportJobs({}, context)
```

#### Parameters

### ListUserPoolClients



```js
amazonaws_cognito_idp.ListUserPoolClients({}, context)
```

#### Parameters

### ListUserPools



```js
amazonaws_cognito_idp.ListUserPools({}, context)
```

#### Parameters

### ListUsers



```js
amazonaws_cognito_idp.ListUsers({}, context)
```

#### Parameters

### ListUsersInGroup



```js
amazonaws_cognito_idp.ListUsersInGroup({}, context)
```

#### Parameters

### ResendConfirmationCode



```js
amazonaws_cognito_idp.ResendConfirmationCode({}, context)
```

#### Parameters

### RespondToAuthChallenge



```js
amazonaws_cognito_idp.RespondToAuthChallenge({}, context)
```

#### Parameters

### SetUserSettings



```js
amazonaws_cognito_idp.SetUserSettings({}, context)
```

#### Parameters

### SignUp



```js
amazonaws_cognito_idp.SignUp({}, context)
```

#### Parameters

### StartUserImportJob



```js
amazonaws_cognito_idp.StartUserImportJob({}, context)
```

#### Parameters

### StopUserImportJob



```js
amazonaws_cognito_idp.StopUserImportJob({}, context)
```

#### Parameters

### UpdateDeviceStatus



```js
amazonaws_cognito_idp.UpdateDeviceStatus({}, context)
```

#### Parameters

### UpdateGroup



```js
amazonaws_cognito_idp.UpdateGroup({}, context)
```

#### Parameters

### UpdateUserAttributes



```js
amazonaws_cognito_idp.UpdateUserAttributes({}, context)
```

#### Parameters

### UpdateUserPool



```js
amazonaws_cognito_idp.UpdateUserPool({}, context)
```

#### Parameters

### UpdateUserPoolClient



```js
amazonaws_cognito_idp.UpdateUserPoolClient({}, context)
```

#### Parameters

### VerifyUserAttribute



```js
amazonaws_cognito_idp.VerifyUserAttribute({}, context)
```

#### Parameters

