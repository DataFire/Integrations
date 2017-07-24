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


### AdminAddUserToGroup



```js
amazonaws_cognito_idp.AdminAddUserToGroup({}, context)
```


### AdminConfirmSignUp



```js
amazonaws_cognito_idp.AdminConfirmSignUp({}, context)
```


### AdminCreateUser



```js
amazonaws_cognito_idp.AdminCreateUser({}, context)
```


### AdminDeleteUser



```js
amazonaws_cognito_idp.AdminDeleteUser({}, context)
```


### AdminDeleteUserAttributes



```js
amazonaws_cognito_idp.AdminDeleteUserAttributes({}, context)
```


### AdminDisableUser



```js
amazonaws_cognito_idp.AdminDisableUser({}, context)
```


### AdminEnableUser



```js
amazonaws_cognito_idp.AdminEnableUser({}, context)
```


### AdminForgetDevice



```js
amazonaws_cognito_idp.AdminForgetDevice({}, context)
```


### AdminGetDevice



```js
amazonaws_cognito_idp.AdminGetDevice({}, context)
```


### AdminGetUser



```js
amazonaws_cognito_idp.AdminGetUser({}, context)
```


### AdminInitiateAuth



```js
amazonaws_cognito_idp.AdminInitiateAuth({}, context)
```


### AdminListDevices



```js
amazonaws_cognito_idp.AdminListDevices({}, context)
```


### AdminListGroupsForUser



```js
amazonaws_cognito_idp.AdminListGroupsForUser({}, context)
```


### AdminRemoveUserFromGroup



```js
amazonaws_cognito_idp.AdminRemoveUserFromGroup({}, context)
```


### AdminResetUserPassword



```js
amazonaws_cognito_idp.AdminResetUserPassword({}, context)
```


### AdminRespondToAuthChallenge



```js
amazonaws_cognito_idp.AdminRespondToAuthChallenge({}, context)
```


### AdminSetUserSettings



```js
amazonaws_cognito_idp.AdminSetUserSettings({}, context)
```


### AdminUpdateDeviceStatus



```js
amazonaws_cognito_idp.AdminUpdateDeviceStatus({}, context)
```


### AdminUpdateUserAttributes



```js
amazonaws_cognito_idp.AdminUpdateUserAttributes({}, context)
```


### AdminUserGlobalSignOut



```js
amazonaws_cognito_idp.AdminUserGlobalSignOut({}, context)
```


### ChangePassword



```js
amazonaws_cognito_idp.ChangePassword({}, context)
```


### ConfirmDevice



```js
amazonaws_cognito_idp.ConfirmDevice({}, context)
```


### ConfirmForgotPassword



```js
amazonaws_cognito_idp.ConfirmForgotPassword({}, context)
```


### ConfirmSignUp



```js
amazonaws_cognito_idp.ConfirmSignUp({}, context)
```


### CreateGroup



```js
amazonaws_cognito_idp.CreateGroup({}, context)
```


### CreateUserImportJob



```js
amazonaws_cognito_idp.CreateUserImportJob({}, context)
```


### CreateUserPool



```js
amazonaws_cognito_idp.CreateUserPool({}, context)
```


### CreateUserPoolClient



```js
amazonaws_cognito_idp.CreateUserPoolClient({}, context)
```


### DeleteGroup



```js
amazonaws_cognito_idp.DeleteGroup({}, context)
```


### DeleteUser



```js
amazonaws_cognito_idp.DeleteUser({}, context)
```


### DeleteUserAttributes



```js
amazonaws_cognito_idp.DeleteUserAttributes({}, context)
```


### DeleteUserPool



```js
amazonaws_cognito_idp.DeleteUserPool({}, context)
```


### DeleteUserPoolClient



```js
amazonaws_cognito_idp.DeleteUserPoolClient({}, context)
```


### DescribeUserImportJob



```js
amazonaws_cognito_idp.DescribeUserImportJob({}, context)
```


### DescribeUserPool



```js
amazonaws_cognito_idp.DescribeUserPool({}, context)
```


### DescribeUserPoolClient



```js
amazonaws_cognito_idp.DescribeUserPoolClient({}, context)
```


### ForgetDevice



```js
amazonaws_cognito_idp.ForgetDevice({}, context)
```


### ForgotPassword



```js
amazonaws_cognito_idp.ForgotPassword({}, context)
```


### GetCSVHeader



```js
amazonaws_cognito_idp.GetCSVHeader({}, context)
```


### GetDevice



```js
amazonaws_cognito_idp.GetDevice({}, context)
```


### GetGroup



```js
amazonaws_cognito_idp.GetGroup({}, context)
```


### GetUser



```js
amazonaws_cognito_idp.GetUser({}, context)
```


### GetUserAttributeVerificationCode



```js
amazonaws_cognito_idp.GetUserAttributeVerificationCode({}, context)
```


### GlobalSignOut



```js
amazonaws_cognito_idp.GlobalSignOut({}, context)
```


### InitiateAuth



```js
amazonaws_cognito_idp.InitiateAuth({}, context)
```


### ListDevices



```js
amazonaws_cognito_idp.ListDevices({}, context)
```


### ListGroups



```js
amazonaws_cognito_idp.ListGroups({}, context)
```


### ListUserImportJobs



```js
amazonaws_cognito_idp.ListUserImportJobs({}, context)
```


### ListUserPoolClients



```js
amazonaws_cognito_idp.ListUserPoolClients({}, context)
```


### ListUserPools



```js
amazonaws_cognito_idp.ListUserPools({}, context)
```


### ListUsers



```js
amazonaws_cognito_idp.ListUsers({}, context)
```


### ListUsersInGroup



```js
amazonaws_cognito_idp.ListUsersInGroup({}, context)
```


### ResendConfirmationCode



```js
amazonaws_cognito_idp.ResendConfirmationCode({}, context)
```


### RespondToAuthChallenge



```js
amazonaws_cognito_idp.RespondToAuthChallenge({}, context)
```


### SetUserSettings



```js
amazonaws_cognito_idp.SetUserSettings({}, context)
```


### SignUp



```js
amazonaws_cognito_idp.SignUp({}, context)
```


### StartUserImportJob



```js
amazonaws_cognito_idp.StartUserImportJob({}, context)
```


### StopUserImportJob



```js
amazonaws_cognito_idp.StopUserImportJob({}, context)
```


### UpdateDeviceStatus



```js
amazonaws_cognito_idp.UpdateDeviceStatus({}, context)
```


### UpdateGroup



```js
amazonaws_cognito_idp.UpdateGroup({}, context)
```


### UpdateUserAttributes



```js
amazonaws_cognito_idp.UpdateUserAttributes({}, context)
```


### UpdateUserPool



```js
amazonaws_cognito_idp.UpdateUserPool({}, context)
```


### UpdateUserPoolClient



```js
amazonaws_cognito_idp.UpdateUserPoolClient({}, context)
```


### VerifyUserAttribute



```js
amazonaws_cognito_idp.VerifyUserAttribute({}, context)
```


