# @datafire/amazonaws_cognito_idp

Client library for Amazon Cognito Identity Provider

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cognito_idp
```

```js
let datafire = require('datafire');
let amazonaws_cognito_idp = require('@datafire/amazonaws_cognito_idp').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_cognito_idp: account,
  }
})


amazonaws_cognito_idp.AddCustomAttributes({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>Using the Amazon Cognito User Pools API, you can create a user pool to manage directories and users. You can authenticate a user to obtain tokens related to user identity and access policies.</p> <p>This API reference provides information about user pools in Amazon Cognito User Pools.</p> <p>For more information, see the Amazon Cognito Documentation.</p>

## Actions
### AddCustomAttributes
Adds additional user attributes to the user pool schema.


```js
amazonaws_cognito_idp.AddCustomAttributes({
  "body": {
    "UserPoolId": "",
    "CustomAttributes": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to add custom attributes.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminAddUserToGroup
<p>Adds the specified user to the specified group.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminAddUserToGroup({
  "body": {
    "UserPoolId": "",
    "Username": "",
    "GroupName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminConfirmSignUp
<p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminConfirmSignUp({
  "body": {
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to confirm user registration.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminCreateUser
<p>Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS). This message is based on a template that you configured in your call to CreateUserPool or UpdateUserPool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminCreateUser({
  "body": {
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to create a user in the specified user pool.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminDeleteUser
<p>Deletes a user as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminDeleteUser({
  "body": {
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to delete a user as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminDeleteUserAttributes
<p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminDeleteUserAttributes({
  "body": {
    "UserPoolId": "",
    "Username": "",
    "UserAttributeNames": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to delete user attributes as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminDisableUser
<p>Disables the specified user as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminDisableUser({
  "body": {
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to disable any user as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminEnableUser
<p>Enables the specified user as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminEnableUser({
  "body": {
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request that enables the user as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminForgetDevice
<p>Forgets the device, as an administrator.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminForgetDevice({
  "body": {
    "UserPoolId": "",
    "Username": "",
    "DeviceKey": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Sends the forgot device request, as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminGetDevice
<p>Gets the device, as an administrator.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminGetDevice({
  "body": {
    "DeviceKey": "",
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to get the device, as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminGetUser
<p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminGetUser({
  "body": {
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to get the specified user as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminInitiateAuth
<p>Initiates the authentication flow, as an administrator.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminInitiateAuth({
  "body": {
    "UserPoolId": "",
    "ClientId": "",
    "AuthFlow": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Initiates the authorization request, as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminListDevices
<p>Lists devices, as an administrator.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminListDevices({
  "body": {
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to list devices, as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminListGroupsForUser
<p>Lists the groups that the user belongs to.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminListGroupsForUser({
  "body": {
    "Username": "",
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminRemoveUserFromGroup
<p>Removes the specified user from the specified group.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminRemoveUserFromGroup({
  "body": {
    "UserPoolId": "",
    "Username": "",
    "GroupName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminResetUserPassword
<p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminResetUserPassword({
  "body": {
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to reset a user's password as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminRespondToAuthChallenge
<p>Responds to an authentication challenge, as an administrator.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminRespondToAuthChallenge({
  "body": {
    "UserPoolId": "",
    "ClientId": "",
    "ChallengeName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to respond to the authentication challenge, as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminSetUserSettings
<p>Sets all the user settings for a specified user name. Works on any user.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminSetUserSettings({
  "body": {
    "UserPoolId": "",
    "Username": "",
    "MFAOptions": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to set user settings as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminUpdateDeviceStatus
<p>Updates the device status as an administrator.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminUpdateDeviceStatus({
  "body": {
    "UserPoolId": "",
    "Username": "",
    "DeviceKey": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to update the device status, as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminUpdateUserAttributes
<p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminUpdateUserAttributes({
  "body": {
    "UserPoolId": "",
    "Username": "",
    "UserAttributes": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to update the user's attributes as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AdminUserGlobalSignOut
<p>Signs out users from all devices, as an administrator.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.AdminUserGlobalSignOut({
  "body": {
    "UserPoolId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to sign out of all devices, as an administrator.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ChangePassword
Changes the password for a specified user in a user pool.


```js
amazonaws_cognito_idp.ChangePassword({
  "body": {
    "PreviousPassword": "",
    "ProposedPassword": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to change a user password.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ConfirmDevice
Confirms tracking of the device. This API call is the call that beings device tracking.


```js
amazonaws_cognito_idp.ConfirmDevice({
  "body": {
    "AccessToken": "",
    "DeviceKey": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Confirms the device request.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ConfirmForgotPassword
Allows a user to enter a code provided when they reset their password to update their password.


```js
amazonaws_cognito_idp.ConfirmForgotPassword({
  "body": {
    "ClientId": "",
    "Username": "",
    "ConfirmationCode": "",
    "Password": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request representing the confirmation for a password reset.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ConfirmSignUp
Confirms registration of a user and handles the existing alias from a previous user.


```js
amazonaws_cognito_idp.ConfirmSignUp({
  "body": {
    "ClientId": "",
    "Username": "",
    "ConfirmationCode": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to confirm registration of a user.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateGroup
<p>Creates a new group in the specified user pool.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.CreateGroup({
  "body": {
    "GroupName": "",
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateUserImportJob
Creates the user import job.


```js
amazonaws_cognito_idp.CreateUserImportJob({
  "body": {
    "JobName": "",
    "UserPoolId": "",
    "CloudWatchLogsRoleArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to create the user import job.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateUserPool
Creates a new Amazon Cognito user pool and sets the password policy for the pool.


```js
amazonaws_cognito_idp.CreateUserPool({
  "body": {
    "PoolName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to create a user pool.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateUserPoolClient
Creates the user pool client.


```js
amazonaws_cognito_idp.CreateUserPoolClient({
  "body": {
    "UserPoolId": "",
    "ClientName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to create a user pool client.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteGroup
<p>Deletes a group. Currently only groups with no members can be deleted.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.DeleteGroup({
  "body": {
    "GroupName": "",
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteUser
Allows a user to delete one's self.


```js
amazonaws_cognito_idp.DeleteUser({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to delete a user.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteUserAttributes
Deletes the attributes for a user.


```js
amazonaws_cognito_idp.DeleteUserAttributes({
  "body": {
    "UserAttributeNames": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to delete user attributes.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteUserPool
Deletes the specified Amazon Cognito user pool.


```js
amazonaws_cognito_idp.DeleteUserPool({
  "body": {
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to delete a user pool.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteUserPoolClient
Allows the developer to delete the user pool client.


```js
amazonaws_cognito_idp.DeleteUserPoolClient({
  "body": {
    "UserPoolId": "",
    "ClientId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to delete a user pool client.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeUserImportJob
Describes the user import job.


```js
amazonaws_cognito_idp.DescribeUserImportJob({
  "body": {
    "UserPoolId": "",
    "JobId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to describe the user import job.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeUserPool
Returns the configuration information and metadata of the specified user pool.


```js
amazonaws_cognito_idp.DescribeUserPool({
  "body": {
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to describe the user pool.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeUserPoolClient
Client method for returning the configuration information and metadata of the specified user pool client.


```js
amazonaws_cognito_idp.DescribeUserPoolClient({
  "body": {
    "UserPoolId": "",
    "ClientId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to describe a user pool client.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ForgetDevice
Forgets the specified device.


```js
amazonaws_cognito_idp.ForgetDevice({
  "body": {
    "DeviceKey": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to forget the device.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ForgotPassword
Retrieves the password for the specified client ID or username.


```js
amazonaws_cognito_idp.ForgotPassword({
  "body": {
    "ClientId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to reset a user's password.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetCSVHeader
Gets the header information for the .csv file to be used as input for the user import job.


```js
amazonaws_cognito_idp.GetCSVHeader({
  "body": {
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to get the header information for the .csv file for the user import job.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDevice
Gets the device.


```js
amazonaws_cognito_idp.GetDevice({
  "body": {
    "DeviceKey": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to get the device.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetGroup
<p>Gets a group.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.GetGroup({
  "body": {
    "GroupName": "",
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetUser
Gets the user attributes and metadata for a user.


```js
amazonaws_cognito_idp.GetUser({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to get information about the user.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetUserAttributeVerificationCode
Gets the user attribute verification code for the specified attribute name.


```js
amazonaws_cognito_idp.GetUserAttributeVerificationCode({
  "body": {
    "AttributeName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to get user attribute verification.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GlobalSignOut
Signs out users from all devices.


```js
amazonaws_cognito_idp.GlobalSignOut({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to sign out all devices.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### InitiateAuth
Initiates the authentication flow.


```js
amazonaws_cognito_idp.InitiateAuth({
  "body": {
    "AuthFlow": "",
    "ClientId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Initiates the authentication request.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDevices
Lists the devices.


```js
amazonaws_cognito_idp.ListDevices({
  "body": {
    "AccessToken": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to list the devices.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListGroups
<p>Lists the groups associated with a user pool.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.ListGroups({
  "body": {
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListUserImportJobs
Lists the user import jobs.


```js
amazonaws_cognito_idp.ListUserImportJobs({
  "body": {
    "UserPoolId": "",
    "MaxResults": 0
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to list the user import jobs.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListUserPoolClients
Lists the clients that have been created for the specified user pool.


```js
amazonaws_cognito_idp.ListUserPoolClients({
  "body": {
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to list the user pool clients.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListUserPools
Lists the user pools associated with an AWS account.


```js
amazonaws_cognito_idp.ListUserPools({
  "body": {
    "MaxResults": 0
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to list user pools.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListUsers
Lists the users in the Amazon Cognito user pool.


```js
amazonaws_cognito_idp.ListUsers({
  "body": {
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to list users.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListUsersInGroup
<p>Lists the users in the specified group.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.ListUsersInGroup({
  "body": {
    "UserPoolId": "",
    "GroupName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ResendConfirmationCode
Resends the confirmation (for confirmation of registration) to a specific user in the user pool.


```js
amazonaws_cognito_idp.ResendConfirmationCode({
  "body": {
    "ClientId": "",
    "Username": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to resend the confirmation code.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RespondToAuthChallenge
Responds to the authentication challenge.


```js
amazonaws_cognito_idp.RespondToAuthChallenge({
  "body": {
    "ClientId": "",
    "ChallengeName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to respond to an authentication challenge.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### SetUserSettings
Sets the user settings like multi-factor authentication (MFA). If MFA is to be removed for a particular attribute pass the attribute with code delivery as null. If null list is passed, all MFA options are removed.


```js
amazonaws_cognito_idp.SetUserSettings({
  "body": {
    "AccessToken": "",
    "MFAOptions": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to set user settings.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### SignUp
Registers the user in the specified user pool and creates a user name, password, and user attributes.


```js
amazonaws_cognito_idp.SignUp({
  "body": {
    "ClientId": "",
    "Username": "",
    "Password": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to register a user.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StartUserImportJob
Starts the user import.


```js
amazonaws_cognito_idp.StartUserImportJob({
  "body": {
    "UserPoolId": "",
    "JobId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to start the user import job.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StopUserImportJob
Stops the user import job.


```js
amazonaws_cognito_idp.StopUserImportJob({
  "body": {
    "UserPoolId": "",
    "JobId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to stop the user import job.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDeviceStatus
Updates the device status.


```js
amazonaws_cognito_idp.UpdateDeviceStatus({
  "body": {
    "AccessToken": "",
    "DeviceKey": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to update the device status.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateGroup
<p>Updates the specified group with the specified attributes.</p> <p>Requires developer credentials.</p>


```js
amazonaws_cognito_idp.UpdateGroup({
  "body": {
    "GroupName": "",
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateUserAttributes
Allows a user to update a specific attribute (one at a time).


```js
amazonaws_cognito_idp.UpdateUserAttributes({
  "body": {
    "UserAttributes": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to update user attributes.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateUserPool
Updates the specified user pool with the specified attributes.


```js
amazonaws_cognito_idp.UpdateUserPool({
  "body": {
    "UserPoolId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to update the user pool.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateUserPoolClient
Allows the developer to update the specified user pool client and password policy.


```js
amazonaws_cognito_idp.UpdateUserPoolClient({
  "body": {
    "UserPoolId": "",
    "ClientId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to update the user pool client.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### VerifyUserAttribute
Verifies the specified user attributes in the user pool.


```js
amazonaws_cognito_idp.VerifyUserAttribute({
  "body": {
    "AttributeName": "",
    "Code": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the request to verify user attributes.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

