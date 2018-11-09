# @datafire/amazonaws_chime

Client library for Amazon Chime

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_chime
```
```js
let amazonaws_chime = require('@datafire/amazonaws_chime').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_chime.ListAccounts({}).then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Chime is a communications service that transforms online meetings with a secure, easy-to-use application that you can trust. Amazon Chime works seamlessly across your devices so that you can stay connected. You can use Amazon Chime for online meetings, video conferencing, calls, and chat. You can also share content, both inside and outside your organization. Amazon Chime frees you to work productively from anywhere. </p> <p>The Amazon Chime API is designed for administrators to use to perform key tasks, such as creating and managing Amazon Chime accounts and users. This guide provides detailed information about the Amazon Chime API.</p> <p>Use host name <code>service.chime.aws.amazon.com</code> when working with the Amazon Chime API.</p>

## Actions

### ListAccounts



```js
amazonaws_chime.ListAccounts({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListAccountsResponse](#listaccountsresponse)

### CreateAccount



```js
amazonaws_chime.CreateAccount({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [AccountName](#accountname)

#### Output
*Output schema unknown*

### DeleteAccount



```js
amazonaws_chime.DeleteAccount({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`

#### Output
*Output schema unknown*

### GetAccount



```js
amazonaws_chime.GetAccount({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`

#### Output
* output [GetAccountResponse](#getaccountresponse)

### UpdateAccount



```js
amazonaws_chime.UpdateAccount({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * Name [AccountName](#accountname)

#### Output
* output [UpdateAccountResponse](#updateaccountresponse)

### GetAccountSettings



```js
amazonaws_chime.GetAccountSettings({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`

#### Output
* output [GetAccountSettingsResponse](#getaccountsettingsresponse)

### UpdateAccountSettings



```js
amazonaws_chime.UpdateAccountSettings({
  "accountId": "",
  "AccountSettings": {}
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * AccountSettings **required** [AccountSettings](#accountsettings)

#### Output
*Output schema unknown*

### ListUsers



```js
amazonaws_chime.ListUsers({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * accountId **required** `string`

#### Output
* output [ListUsersResponse](#listusersresponse)

### BatchUpdateUser



```js
amazonaws_chime.BatchUpdateUser({
  "accountId": "",
  "UpdateUserRequestItems": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * UpdateUserRequestItems **required** [UpdateUserRequestItemList](#updateuserrequestitemlist)

#### Output
* output [BatchUpdateUserResponse](#batchupdateuserresponse)

### GetUser



```js
amazonaws_chime.GetUser({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`

#### Output
* output [GetUserResponse](#getuserresponse)

### UpdateUser



```js
amazonaws_chime.UpdateUser({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`
  * LicenseType [License](#license)

#### Output
* output [UpdateUserResponse](#updateuserresponse)

### LogoutUser



```js
amazonaws_chime.LogoutUser({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### ResetPersonalPIN



```js
amazonaws_chime.ResetPersonalPIN({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`

#### Output
* output [ResetPersonalPINResponse](#resetpersonalpinresponse)

### InviteUsers



```js
amazonaws_chime.InviteUsers({
  "accountId": "",
  "UserEmailList": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * UserEmailList **required** [UserEmailList](#useremaillist)

#### Output
*Output schema unknown*

### BatchSuspendUser



```js
amazonaws_chime.BatchSuspendUser({
  "accountId": "",
  "UserIdList": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * UserIdList **required** [UserIdList](#useridlist)

#### Output
* output [BatchSuspendUserResponse](#batchsuspenduserresponse)

### BatchUnsuspendUser



```js
amazonaws_chime.BatchUnsuspendUser({
  "accountId": "",
  "UserIdList": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * UserIdList **required** [UserIdList](#useridlist)

#### Output
* output [BatchUnsuspendUserResponse](#batchunsuspenduserresponse)



## Definitions

### Account
* Account `object`: The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.
  * AccountId **required** [String](#string)
  * AccountType [AccountType](#accounttype)
  * AwsAccountId **required** [String](#string)
  * CreatedTimestamp [Iso8601Timestamp](#iso8601timestamp)
  * DefaultLicense [License](#license)
  * Name **required** [String](#string)
  * SupportedLicenses [LicenseList](#licenselist)

### AccountList
* AccountList `array`
  * items [Account](#account)

### AccountName
* AccountName `string`

### AccountSettings
* AccountSettings `object`: Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="http://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
  * DisableRemoteControl [Boolean](#boolean)
  * EnableDialOut [Boolean](#boolean)

### AccountType
* AccountType `string` (values: Team, EnterpriseDirectory, EnterpriseLWA, EnterpriseOIDC)

### BadRequestException


### BatchSuspendUserRequest
* BatchSuspendUserRequest `object`
  * UserIdList **required** [UserIdList](#useridlist)

### BatchSuspendUserResponse
* BatchSuspendUserResponse `object`
  * UserErrors [UserErrorList](#usererrorlist)

### BatchUnsuspendUserRequest
* BatchUnsuspendUserRequest `object`
  * UserIdList **required** [UserIdList](#useridlist)

### BatchUnsuspendUserResponse
* BatchUnsuspendUserResponse `object`
  * UserErrors [UserErrorList](#usererrorlist)

### BatchUpdateUserRequest
* BatchUpdateUserRequest `object`
  * UpdateUserRequestItems **required** [UpdateUserRequestItemList](#updateuserrequestitemlist)

### BatchUpdateUserResponse
* BatchUpdateUserResponse `object`
  * UserErrors [UserErrorList](#usererrorlist)

### Boolean
* Boolean `boolean`

### ConflictException


### CreateAccountRequest
* CreateAccountRequest `object`
  * Name **required** [AccountName](#accountname)

### CreateAccountResponse
* CreateAccountResponse `object`
  * Account [Account](#account)

### DeleteAccountRequest
* DeleteAccountRequest `object`

### DeleteAccountResponse
* DeleteAccountResponse `object`

### EmailAddress
* EmailAddress `string`

### EmailStatus
* EmailStatus `string` (values: NotSent, Sent, Failed)

### ErrorCode
* ErrorCode `string` (values: Unauthorized, Forbidden, NotFound, BadRequest, Conflict, ServiceFailure, ServiceUnavailable, Unprocessable, Throttled, PreconditionFailed)

### ForbiddenException


### GetAccountRequest
* GetAccountRequest `object`

### GetAccountResponse
* GetAccountResponse `object`
  * Account [Account](#account)

### GetAccountSettingsRequest
* GetAccountSettingsRequest `object`

### GetAccountSettingsResponse
* GetAccountSettingsResponse `object`
  * AccountSettings [AccountSettings](#accountsettings)

### GetUserRequest
* GetUserRequest `object`

### GetUserResponse
* GetUserResponse `object`
  * User [User](#user)

### Invite
* Invite `object`: Invitation object returned after emailing users to invite them to join the Amazon Chime <code>Team</code> account.
  * EmailAddress [EmailAddress](#emailaddress)
  * EmailStatus [EmailStatus](#emailstatus)
  * InviteId [String](#string)
  * Status [InviteStatus](#invitestatus)

### InviteList
* InviteList `array`
  * items [Invite](#invite)

### InviteStatus
* InviteStatus `string` (values: Pending, Accepted, Failed)

### InviteUsersRequest
* InviteUsersRequest `object`
  * UserEmailList **required** [UserEmailList](#useremaillist)

### InviteUsersResponse
* InviteUsersResponse `object`
  * Invites [InviteList](#invitelist)

### Iso8601Timestamp
* Iso8601Timestamp `string`

### License
* License `string` (values: Basic, Plus, Pro, ProTrial)

### LicenseList
* LicenseList `array`
  * items [License](#license)

### ListAccountsRequest
* ListAccountsRequest `object`

### ListAccountsResponse
* ListAccountsResponse `object`
  * Accounts [AccountList](#accountlist)
  * NextToken [String](#string)

### ListUsersRequest
* ListUsersRequest `object`

### ListUsersResponse
* ListUsersResponse `object`
  * NextToken [String](#string)
  * Users [UserList](#userlist)

### LogoutUserRequest
* LogoutUserRequest `object`

### LogoutUserResponse
* LogoutUserResponse `object`

### NonEmptyString
* NonEmptyString `string`

### NotFoundException


### ProfileServiceMaxResults
* ProfileServiceMaxResults `integer`

### RegistrationStatus
* RegistrationStatus `string` (values: Unregistered, Registered, Suspended)

### ResetPersonalPINRequest
* ResetPersonalPINRequest `object`

### ResetPersonalPINResponse
* ResetPersonalPINResponse `object`
  * User [User](#user)

### SensitiveString
* SensitiveString `string`

### ServiceFailureException


### ServiceUnavailableException


### String
* String `string`

### ThrottledClientException


### UnauthorizedClientException


### UnprocessableEntityException


### UpdateAccountRequest
* UpdateAccountRequest `object`
  * Name [AccountName](#accountname)

### UpdateAccountResponse
* UpdateAccountResponse `object`
  * Account [Account](#account)

### UpdateAccountSettingsRequest
* UpdateAccountSettingsRequest `object`
  * AccountSettings **required** [AccountSettings](#accountsettings)

### UpdateAccountSettingsResponse
* UpdateAccountSettingsResponse `object`

### UpdateUserRequest
* UpdateUserRequest `object`
  * LicenseType [License](#license)

### UpdateUserRequestItem
* UpdateUserRequestItem `object`: The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action.
  * LicenseType [License](#license)
  * UserId **required** [NonEmptyString](#nonemptystring)

### UpdateUserRequestItemList
* UpdateUserRequestItemList `array`
  * items [UpdateUserRequestItem](#updateuserrequestitem)

### UpdateUserResponse
* UpdateUserResponse `object`
  * User [User](#user)

### User
* User `object`: The user on the Amazon Chime account.
  * AccountId [String](#string)
  * DisplayName [SensitiveString](#sensitivestring)
  * InvitedOn [Iso8601Timestamp](#iso8601timestamp)
  * LicenseType [License](#license)
  * PersonalPIN [String](#string)
  * PrimaryEmail [EmailAddress](#emailaddress)
  * RegisteredOn [Iso8601Timestamp](#iso8601timestamp)
  * UserId **required** [String](#string)
  * UserInvitationStatus [InviteStatus](#invitestatus)
  * UserRegistrationStatus [RegistrationStatus](#registrationstatus)

### UserEmailList
* UserEmailList `array`
  * items [EmailAddress](#emailaddress)

### UserError
* UserError `object`: The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages.
  * ErrorCode [ErrorCode](#errorcode)
  * ErrorMessage [String](#string)
  * UserId [NonEmptyString](#nonemptystring)

### UserErrorList
* UserErrorList `array`
  * items [UserError](#usererror)

### UserIdList
* UserIdList `array`
  * items [NonEmptyString](#nonemptystring)

### UserList
* UserList `array`
  * items [User](#user)


