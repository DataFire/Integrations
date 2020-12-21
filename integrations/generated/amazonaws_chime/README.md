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

.then(data => {
  console.log(data);
});
```

## Description

<p>The Amazon Chime API (application programming interface) is designed for developers to perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice Connectors. This guide provides detailed information about the Amazon Chime API, including operations, types, inputs and outputs, and error codes. It also includes some server-side API actions to use with the Amazon Chime SDK. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.</p> <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls. We recommend using an AWS SDK or the AWS CLI. Each API operation includes links to information about using it with a language-specific AWS SDK or the AWS CLI.</p> <dl> <dt>Using an AWS SDK</dt> <dd> <p>You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.</p> </dd> <dt>Using the AWS CLI</dt> <dd> <p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a> in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the <i>AWS CLI Command Reference</i>.</p> </dd> <dt>Using REST</dt> <dd> <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports Signature Version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p> </dd> </dl> <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a> in the <i>Amazon Chime Administration Guide</i>.</p>

## Actions

### ListAccounts



```js
amazonaws_chime.ListAccounts({}, context)
```

#### Input
* input `object`
  * name `string`
  * user-email `string`
  * next-token `string`
  * max-results `integer`
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
  * Name **required** `string`: The name of the Amazon Chime account.

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
  * Name `string`: The new name for the specified Amazon Chime account.

#### Output
* output [UpdateAccountResponse](#updateaccountresponse)

### AssociateSigninDelegateGroupsWithAccount



```js
amazonaws_chime.AssociateSigninDelegateGroupsWithAccount({
  "accountId": "",
  "operation": "",
  "SigninDelegateGroups": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * operation **required** `string`
  * SigninDelegateGroups **required** `array`: The sign-in delegate groups.
    * items [SigninDelegateGroup](#signindelegategroup)

#### Output
* output [AssociateSigninDelegateGroupsWithAccountResponse](#associatesignindelegategroupswithaccountresponse)

### DisassociateSigninDelegateGroupsFromAccount



```js
amazonaws_chime.DisassociateSigninDelegateGroupsFromAccount({
  "accountId": "",
  "operation": "",
  "GroupNames": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * operation **required** `string`
  * GroupNames **required** `array`: The sign-in delegate group names.
    * items [String](#string)

#### Output
* output [DisassociateSigninDelegateGroupsFromAccountResponse](#disassociatesignindelegategroupsfromaccountresponse)

### ListBots



```js
amazonaws_chime.ListBots({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListBotsResponse](#listbotsresponse)

### CreateBot



```js
amazonaws_chime.CreateBot({
  "accountId": "",
  "DisplayName": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * DisplayName **required** `string`: The bot display name.
  * Domain `string`: The domain of the Amazon Chime Enterprise account.

#### Output
*Output schema unknown*

### GetBot



```js
amazonaws_chime.GetBot({
  "accountId": "",
  "botId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * botId **required** `string`

#### Output
* output [GetBotResponse](#getbotresponse)

### UpdateBot



```js
amazonaws_chime.UpdateBot({
  "accountId": "",
  "botId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * botId **required** `string`
  * Disabled `boolean`: When true, stops the specified bot from running in your account.

#### Output
* output [UpdateBotResponse](#updatebotresponse)

### RegenerateSecurityToken



```js
amazonaws_chime.RegenerateSecurityToken({
  "accountId": "",
  "botId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * botId **required** `string`
  * operation **required** `string`

#### Output
* output [RegenerateSecurityTokenResponse](#regeneratesecuritytokenresponse)

### DeleteEventsConfiguration



```js
amazonaws_chime.DeleteEventsConfiguration({
  "accountId": "",
  "botId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * botId **required** `string`

#### Output
*Output schema unknown*

### GetEventsConfiguration



```js
amazonaws_chime.GetEventsConfiguration({
  "accountId": "",
  "botId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * botId **required** `string`

#### Output
* output [GetEventsConfigurationResponse](#geteventsconfigurationresponse)

### PutEventsConfiguration



```js
amazonaws_chime.PutEventsConfiguration({
  "accountId": "",
  "botId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * botId **required** `string`
  * LambdaFunctionArn `string`: Lambda function ARN that allows the bot to receive outgoing events.
  * OutboundEventsHTTPSEndpoint `string`: HTTPS endpoint that allows the bot to receive outgoing events.

#### Output
*Output schema unknown*

### RedactConversationMessage



```js
amazonaws_chime.RedactConversationMessage({
  "accountId": "",
  "conversationId": "",
  "messageId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * conversationId **required** `string`
  * messageId **required** `string`
  * operation **required** `string`

#### Output
* output [RedactConversationMessageResponse](#redactconversationmessageresponse)

### GetRetentionSettings



```js
amazonaws_chime.GetRetentionSettings({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`

#### Output
* output [GetRetentionSettingsResponse](#getretentionsettingsresponse)

### PutRetentionSettings



```js
amazonaws_chime.PutRetentionSettings({
  "accountId": "",
  "RetentionSettings": {}
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * RetentionSettings **required** `object`: The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages.
    * ConversationRetentionSettings
      * RetentionDays
    * RoomRetentionSettings
      * RetentionDays

#### Output
*Output schema unknown*

### ListRooms



```js
amazonaws_chime.ListRooms({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * member-id `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRoomsResponse](#listroomsresponse)

### CreateRoom



```js
amazonaws_chime.CreateRoom({
  "accountId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * ClientRequestToken `string`: The idempotency token for the request.
  * Name **required** `string`: The room name.

#### Output
*Output schema unknown*

### DeleteRoom



```js
amazonaws_chime.DeleteRoom({
  "accountId": "",
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * roomId **required** `string`

#### Output
*Output schema unknown*

### GetRoom



```js
amazonaws_chime.GetRoom({
  "accountId": "",
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * roomId **required** `string`

#### Output
* output [GetRoomResponse](#getroomresponse)

### UpdateRoom



```js
amazonaws_chime.UpdateRoom({
  "accountId": "",
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * roomId **required** `string`
  * Name `string`: The room name.

#### Output
* output [UpdateRoomResponse](#updateroomresponse)

### ListRoomMemberships



```js
amazonaws_chime.ListRoomMemberships({
  "accountId": "",
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * roomId **required** `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRoomMembershipsResponse](#listroommembershipsresponse)

### CreateRoomMembership



```js
amazonaws_chime.CreateRoomMembership({
  "accountId": "",
  "roomId": "",
  "MemberId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * roomId **required** `string`
  * MemberId **required** `string`: The Amazon Chime member ID (user ID or bot ID).
  * Role `string` (values: Administrator, Member): The role of the member.

#### Output
*Output schema unknown*

### BatchCreateRoomMembership



```js
amazonaws_chime.BatchCreateRoomMembership({
  "accountId": "",
  "roomId": "",
  "operation": "",
  "MembershipItemList": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * roomId **required** `string`
  * operation **required** `string`
  * MembershipItemList **required** `array`: The list of membership items.
    * items [MembershipItem](#membershipitem)

#### Output
*Output schema unknown*

### DeleteRoomMembership



```js
amazonaws_chime.DeleteRoomMembership({
  "accountId": "",
  "roomId": "",
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * roomId **required** `string`
  * memberId **required** `string`

#### Output
*Output schema unknown*

### UpdateRoomMembership



```js
amazonaws_chime.UpdateRoomMembership({
  "accountId": "",
  "roomId": "",
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * roomId **required** `string`
  * memberId **required** `string`
  * Role `string` (values: Administrator, Member): The role of the member.

#### Output
* output [UpdateRoomMembershipResponse](#updateroommembershipresponse)

### RedactRoomMessage



```js
amazonaws_chime.RedactRoomMessage({
  "accountId": "",
  "roomId": "",
  "messageId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * roomId **required** `string`
  * messageId **required** `string`
  * operation **required** `string`

#### Output
* output [RedactRoomMessageResponse](#redactroommessageresponse)

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
  * AccountSettings **required** `object`: Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
    * DisableRemoteControl
    * EnableDialOut

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
  * accountId **required** `string`
  * user-email `string`
  * user-type `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

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
  * UpdateUserRequestItems **required** `array`: The request containing the user IDs and details to update.
    * items [UpdateUserRequestItem](#updateuserrequestitem)

#### Output
* output [BatchUpdateUserResponse](#batchupdateuserresponse)

### InviteUsers



```js
amazonaws_chime.InviteUsers({
  "accountId": "",
  "operation": "",
  "UserEmailList": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * operation **required** `string`
  * UserEmailList **required** `array`: The user email addresses to which to send the email invitation.
    * items [EmailAddress](#emailaddress)
  * UserType `string` (values: PrivateUser, SharedDevice): The user type.

#### Output
*Output schema unknown*

### CreateUser



```js
amazonaws_chime.CreateUser({
  "accountId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * operation **required** `string`
  * Email `string`: The user's email address.
  * UserType `string` (values: PrivateUser, SharedDevice): The user type.
  * Username `string`: The user name.

#### Output
*Output schema unknown*

### BatchSuspendUser



```js
amazonaws_chime.BatchSuspendUser({
  "accountId": "",
  "operation": "",
  "UserIdList": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * operation **required** `string`
  * UserIdList **required** `array`: The request containing the user IDs to suspend.
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [BatchSuspendUserResponse](#batchsuspenduserresponse)

### BatchUnsuspendUser



```js
amazonaws_chime.BatchUnsuspendUser({
  "accountId": "",
  "operation": "",
  "UserIdList": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * operation **required** `string`
  * UserIdList **required** `array`: The request containing the user IDs to unsuspend.
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [BatchUnsuspendUserResponse](#batchunsuspenduserresponse)

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
  * AlexaForBusinessMetadata `object`: The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.
    * AlexaForBusinessRoomArn
    * IsAlexaForBusinessEnabled
  * LicenseType `string` (values: Basic, Plus, Pro, ProTrial): The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to.
  * UserType `string` (values: PrivateUser, SharedDevice): The user type.

#### Output
* output [UpdateUserResponse](#updateuserresponse)

### AssociatePhoneNumberWithUser



```js
amazonaws_chime.AssociatePhoneNumberWithUser({
  "accountId": "",
  "userId": "",
  "operation": "",
  "E164PhoneNumber": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`
  * operation **required** `string`
  * E164PhoneNumber **required** `string`: The phone number, in E.164 format.

#### Output
* output [AssociatePhoneNumberWithUserResponse](#associatephonenumberwithuserresponse)

### DisassociatePhoneNumberFromUser



```js
amazonaws_chime.DisassociatePhoneNumberFromUser({
  "accountId": "",
  "userId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`
  * operation **required** `string`

#### Output
* output [DisassociatePhoneNumberFromUserResponse](#disassociatephonenumberfromuserresponse)

### LogoutUser



```js
amazonaws_chime.LogoutUser({
  "accountId": "",
  "userId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`
  * operation **required** `string`

#### Output
*Output schema unknown*

### ResetPersonalPIN



```js
amazonaws_chime.ResetPersonalPIN({
  "accountId": "",
  "userId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`
  * operation **required** `string`

#### Output
* output [ResetPersonalPINResponse](#resetpersonalpinresponse)

### GetUserSettings



```js
amazonaws_chime.GetUserSettings({
  "accountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`

#### Output
* output [GetUserSettingsResponse](#getusersettingsresponse)

### UpdateUserSettings



```js
amazonaws_chime.UpdateUserSettings({
  "accountId": "",
  "userId": "",
  "UserSettings": {}
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * userId **required** `string`
  * UserSettings **required** `object`: Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.
    * Telephony
      * InboundCalling **required**
      * OutboundCalling **required**
      * SMS **required**

#### Output
*Output schema unknown*

### CreateAppInstanceUser



```js
amazonaws_chime.CreateAppInstanceUser({
  "AppInstanceArn": "",
  "AppInstanceUserId": "",
  "Name": "",
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * AppInstanceArn **required** `string`: The ARN of the app instance request.
  * AppInstanceUserId **required** `string`: The user ID of the app instance.
  * ClientRequestToken **required** `string`: The token assigned to the user requesting an app instance.
  * Metadata `string`: The request's metadata. Limited to a 1KB string in UTF-8.
  * Name **required** `string`: The user's name.

#### Output
*Output schema unknown*

### ListAppInstanceUsers



```js
amazonaws_chime.ListAppInstanceUsers({
  "app-instance-arn": ""
}, context)
```

#### Input
* input `object`
  * app-instance-arn **required** `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListAppInstanceUsersResponse](#listappinstanceusersresponse)

### DeleteAppInstanceUser



```js
amazonaws_chime.DeleteAppInstanceUser({
  "appInstanceUserArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceUserArn **required** `string`

#### Output
*Output schema unknown*

### DescribeAppInstanceUser



```js
amazonaws_chime.DescribeAppInstanceUser({
  "appInstanceUserArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceUserArn **required** `string`

#### Output
* output [DescribeAppInstanceUserResponse](#describeappinstanceuserresponse)

### UpdateAppInstanceUser



```js
amazonaws_chime.UpdateAppInstanceUser({
  "appInstanceUserArn": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * appInstanceUserArn **required** `string`
  * Metadata `string`: The metadata of the app instance user.
  * Name **required** `string`: The name of the app instance user.

#### Output
* output [UpdateAppInstanceUserResponse](#updateappinstanceuserresponse)

### ListAppInstances



```js
amazonaws_chime.ListAppInstances({}, context)
```

#### Input
* input `object`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListAppInstancesResponse](#listappinstancesresponse)

### CreateAppInstance



```js
amazonaws_chime.CreateAppInstance({
  "Name": "",
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken **required** `string`: The <code>ClientRequestToken</code> of the app instance.
  * Metadata `string`: The metadata of the app instance. Limited to a 1KB string in UTF-8.
  * Name **required** `string`: The name of the app instance.

#### Output
*Output schema unknown*

### DeleteAppInstance



```js
amazonaws_chime.DeleteAppInstance({
  "appInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`

#### Output
*Output schema unknown*

### DescribeAppInstance



```js
amazonaws_chime.DescribeAppInstance({
  "appInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`

#### Output
* output [DescribeAppInstanceResponse](#describeappinstanceresponse)

### UpdateAppInstance



```js
amazonaws_chime.UpdateAppInstance({
  "appInstanceArn": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`
  * Metadata `string`: The metadata that you want to change.
  * Name **required** `string`: The name that you want to change.

#### Output
* output [UpdateAppInstanceResponse](#updateappinstanceresponse)

### ListAppInstanceAdmins



```js
amazonaws_chime.ListAppInstanceAdmins({
  "appInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListAppInstanceAdminsResponse](#listappinstanceadminsresponse)

### CreateAppInstanceAdmin



```js
amazonaws_chime.CreateAppInstanceAdmin({
  "appInstanceArn": "",
  "AppInstanceAdminArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`
  * AppInstanceAdminArn **required** `string`: The ARN of the administrator of the current app instance.

#### Output
*Output schema unknown*

### DeleteAppInstanceAdmin



```js
amazonaws_chime.DeleteAppInstanceAdmin({
  "appInstanceAdminArn": "",
  "appInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceAdminArn **required** `string`
  * appInstanceArn **required** `string`

#### Output
*Output schema unknown*

### DescribeAppInstanceAdmin



```js
amazonaws_chime.DescribeAppInstanceAdmin({
  "appInstanceAdminArn": "",
  "appInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceAdminArn **required** `string`
  * appInstanceArn **required** `string`

#### Output
* output [DescribeAppInstanceAdminResponse](#describeappinstanceadminresponse)

### GetAppInstanceRetentionSettings



```js
amazonaws_chime.GetAppInstanceRetentionSettings({
  "appInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`

#### Output
* output [GetAppInstanceRetentionSettingsResponse](#getappinstanceretentionsettingsresponse)

### PutAppInstanceRetentionSettings



```js
amazonaws_chime.PutAppInstanceRetentionSettings({
  "appInstanceArn": "",
  "AppInstanceRetentionSettings": {}
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`
  * AppInstanceRetentionSettings **required** `object`: The length of time in days to retain messages.
    * ChannelRetentionSettings
      * RetentionDays

#### Output
* output [PutAppInstanceRetentionSettingsResponse](#putappinstanceretentionsettingsresponse)

### DeleteAppInstanceStreamingConfigurations



```js
amazonaws_chime.DeleteAppInstanceStreamingConfigurations({
  "appInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`

#### Output
*Output schema unknown*

### GetAppInstanceStreamingConfigurations



```js
amazonaws_chime.GetAppInstanceStreamingConfigurations({
  "appInstanceArn": ""
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`

#### Output
* output [GetAppInstanceStreamingConfigurationsResponse](#getappinstancestreamingconfigurationsresponse)

### PutAppInstanceStreamingConfigurations



```js
amazonaws_chime.PutAppInstanceStreamingConfigurations({
  "appInstanceArn": "",
  "AppInstanceStreamingConfigurations": []
}, context)
```

#### Input
* input `object`
  * appInstanceArn **required** `string`
  * AppInstanceStreamingConfigurations **required** `array`: The streaming configurations set for an app instance.
    * items [AppInstanceStreamingConfiguration](#appinstancestreamingconfiguration)

#### Output
* output [PutAppInstanceStreamingConfigurationsResponse](#putappinstancestreamingconfigurationsresponse)

### CreateChannel



```js
amazonaws_chime.CreateChannel({
  "AppInstanceArn": "",
  "Name": "",
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * AppInstanceArn **required** `string`: The ARN of the channel request.
  * ClientRequestToken **required** `string`: The client token for the request. An <code>Idempotency</code> token.
  * Metadata `string`: The metadata of the creation request. Limited to 1KB and UTF-8.
  * Mode `string` (values: UNRESTRICTED, RESTRICTED): The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels.
  * Name **required** `string`: The name of the channel.
  * Privacy `string` (values: PUBLIC, PRIVATE): The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the app instance.
  * Tags `array`
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### ListChannels



```js
amazonaws_chime.ListChannels({
  "app-instance-arn": ""
}, context)
```

#### Input
* input `object`
  * app-instance-arn **required** `string`
  * privacy `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListChannelsResponse](#listchannelsresponse)

### ListChannelMembershipsForAppInstanceUser



```js
amazonaws_chime.ListChannelMembershipsForAppInstanceUser({
  "scope": ""
}, context)
```

#### Input
* input `object`
  * app-instance-user-arn `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`
  * scope **required** `string`

#### Output
* output [ListChannelMembershipsForAppInstanceUserResponse](#listchannelmembershipsforappinstanceuserresponse)

### ListChannelsModeratedByAppInstanceUser



```js
amazonaws_chime.ListChannelsModeratedByAppInstanceUser({
  "scope": ""
}, context)
```

#### Input
* input `object`
  * app-instance-user-arn `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`
  * scope **required** `string`

#### Output
* output [ListChannelsModeratedByAppInstanceUserResponse](#listchannelsmoderatedbyappinstanceuserresponse)

### DeleteChannel



```js
amazonaws_chime.DeleteChannel({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`

#### Output
*Output schema unknown*

### DescribeChannel



```js
amazonaws_chime.DescribeChannel({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`

#### Output
* output [DescribeChannelResponse](#describechannelresponse)

### UpdateChannel



```js
amazonaws_chime.UpdateChannel({
  "channelArn": "",
  "Name": "",
  "Mode": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * Metadata `string`: The metadata of the channel.
  * Mode **required** `string` (values: UNRESTRICTED, RESTRICTED): The mode of the update request.
  * Name **required** `string`: The name of the channel.

#### Output
* output [UpdateChannelResponse](#updatechannelresponse)

### DescribeChannelMembershipForAppInstanceUser



```js
amazonaws_chime.DescribeChannelMembershipForAppInstanceUser({
  "channelArn": "",
  "app-instance-user-arn": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * app-instance-user-arn **required** `string`
  * scope **required** `string`

#### Output
* output [DescribeChannelMembershipForAppInstanceUserResponse](#describechannelmembershipforappinstanceuserresponse)

### DescribeChannelModeratedByAppInstanceUser



```js
amazonaws_chime.DescribeChannelModeratedByAppInstanceUser({
  "channelArn": "",
  "app-instance-user-arn": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * app-instance-user-arn **required** `string`
  * scope **required** `string`

#### Output
* output [DescribeChannelModeratedByAppInstanceUserResponse](#describechannelmoderatedbyappinstanceuserresponse)

### ListChannelBans



```js
amazonaws_chime.ListChannelBans({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListChannelBansResponse](#listchannelbansresponse)

### CreateChannelBan



```js
amazonaws_chime.CreateChannelBan({
  "channelArn": "",
  "MemberArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * MemberArn **required** `string`: The ARN of the member being banned.

#### Output
*Output schema unknown*

### DeleteChannelBan



```js
amazonaws_chime.DeleteChannelBan({
  "channelArn": "",
  "memberArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * memberArn **required** `string`

#### Output
*Output schema unknown*

### DescribeChannelBan



```js
amazonaws_chime.DescribeChannelBan({
  "channelArn": "",
  "memberArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * memberArn **required** `string`

#### Output
* output [DescribeChannelBanResponse](#describechannelbanresponse)

### ListChannelMemberships



```js
amazonaws_chime.ListChannelMemberships({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * type `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListChannelMembershipsResponse](#listchannelmembershipsresponse)

### CreateChannelMembership



```js
amazonaws_chime.CreateChannelMembership({
  "channelArn": "",
  "MemberArn": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * MemberArn **required** `string`: The ARN of the member you want to add to the channel.
  * Type **required** `string` (values: DEFAULT, HIDDEN): The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.

#### Output
*Output schema unknown*

### DeleteChannelMembership



```js
amazonaws_chime.DeleteChannelMembership({
  "channelArn": "",
  "memberArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * memberArn **required** `string`

#### Output
*Output schema unknown*

### DescribeChannelMembership



```js
amazonaws_chime.DescribeChannelMembership({
  "channelArn": "",
  "memberArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * memberArn **required** `string`

#### Output
* output [DescribeChannelMembershipResponse](#describechannelmembershipresponse)

### ListChannelMessages



```js
amazonaws_chime.ListChannelMessages({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * sort-order `string`
  * not-before `string`
  * not-after `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListChannelMessagesResponse](#listchannelmessagesresponse)

### SendChannelMessage



```js
amazonaws_chime.SendChannelMessage({
  "channelArn": "",
  "Content": "",
  "Type": "",
  "Persistence": "",
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * ClientRequestToken **required** `string`: The <code>Idempotency</code> token for each client request.
  * Content **required** `string`: The content of the message.
  * Metadata `string`: The optional metadata for each message. 
  * Persistence **required** `string` (values: PERSISTENT, NON_PERSISTENT): Boolean that controls whether the message is persisted on the back end. Required.
  * Type **required** `string` (values: STANDARD, CONTROL): The type of message, <code>STANDARD</code> or <code>CONTROL</code>.

#### Output
*Output schema unknown*

### DeleteChannelMessage



```js
amazonaws_chime.DeleteChannelMessage({
  "channelArn": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * messageId **required** `string`

#### Output
*Output schema unknown*

### GetChannelMessage



```js
amazonaws_chime.GetChannelMessage({
  "channelArn": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * messageId **required** `string`

#### Output
* output [GetChannelMessageResponse](#getchannelmessageresponse)

### UpdateChannelMessage



```js
amazonaws_chime.UpdateChannelMessage({
  "channelArn": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * messageId **required** `string`
  * Content `string`: The content of the message being updated.
  * Metadata `string`: The metadata of the message being updated.

#### Output
* output [UpdateChannelMessageResponse](#updatechannelmessageresponse)

### RedactChannelMessage



```js
amazonaws_chime.RedactChannelMessage({
  "channelArn": "",
  "messageId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * messageId **required** `string`
  * operation **required** `string`

#### Output
* output [RedactChannelMessageResponse](#redactchannelmessageresponse)

### ListChannelModerators



```js
amazonaws_chime.ListChannelModerators({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListChannelModeratorsResponse](#listchannelmoderatorsresponse)

### CreateChannelModerator



```js
amazonaws_chime.CreateChannelModerator({
  "channelArn": "",
  "ChannelModeratorArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * ChannelModeratorArn **required** `string`: The ARN of the moderator.

#### Output
*Output schema unknown*

### DeleteChannelModerator



```js
amazonaws_chime.DeleteChannelModerator({
  "channelArn": "",
  "channelModeratorArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * channelModeratorArn **required** `string`

#### Output
*Output schema unknown*

### DescribeChannelModerator



```js
amazonaws_chime.DescribeChannelModerator({
  "channelArn": "",
  "channelModeratorArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`
  * channelModeratorArn **required** `string`

#### Output
* output [DescribeChannelModeratorResponse](#describechannelmoderatorresponse)

### UpdateChannelReadMarker



```js
amazonaws_chime.UpdateChannelReadMarker({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`

#### Output
* output [UpdateChannelReadMarkerResponse](#updatechannelreadmarkerresponse)

### GetMessagingSessionEndpoint



```js
amazonaws_chime.GetMessagingSessionEndpoint({}, context)
```

#### Input
* input `object`

#### Output
* output [GetMessagingSessionEndpointResponse](#getmessagingsessionendpointresponse)

### ListMeetings



```js
amazonaws_chime.ListMeetings({}, context)
```

#### Input
* input `object`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListMeetingsResponse](#listmeetingsresponse)

### CreateMeeting



```js
amazonaws_chime.CreateMeeting({
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken **required** `string`: The unique identifier for the client request. Use a different token for different meetings.
  * ExternalMeetingId `string`: The external meeting ID.
  * MediaRegion `string`: <p>The Region in which to create the meeting. Default: <code>us-east-1</code>.</p> <p>Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
  * MeetingHostId `string`: Reserved.
  * NotificationsConfiguration `object`: The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).
    * SnsTopicArn
    * SqsQueueArn
  * Tags `array`: The tag key-value pairs.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### CreateMeetingWithAttendees



```js
amazonaws_chime.CreateMeetingWithAttendees({
  "operation": "",
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`
  * Attendees `array`: The request containing the attendees to create.
    * items [CreateAttendeeRequestItem](#createattendeerequestitem)
  * ClientRequestToken **required** `string`: The unique identifier for the client request. Use a different token for different meetings.
  * ExternalMeetingId `string`: The external meeting ID.
  * MediaRegion `string`: <p>The Region in which to create the meeting. Default: <code>us-east-1</code>.</p> <p>Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
  * MeetingHostId `string`: Reserved.
  * NotificationsConfiguration `object`: The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).
    * SnsTopicArn
    * SqsQueueArn
  * Tags `array`: The tag key-value pairs.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### DeleteMeeting



```js
amazonaws_chime.DeleteMeeting({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`

#### Output
*Output schema unknown*

### GetMeeting



```js
amazonaws_chime.GetMeeting({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`

#### Output
* output [GetMeetingResponse](#getmeetingresponse)

### ListAttendees



```js
amazonaws_chime.ListAttendees({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListAttendeesResponse](#listattendeesresponse)

### CreateAttendee



```js
amazonaws_chime.CreateAttendee({
  "meetingId": "",
  "ExternalUserId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * ExternalUserId **required** `string`: The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application. If you create an attendee with the same external user id, the service returns the existing record.
  * Tags `array`: The tag key-value pairs.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### BatchCreateAttendee



```js
amazonaws_chime.BatchCreateAttendee({
  "meetingId": "",
  "operation": "",
  "Attendees": []
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * operation **required** `string`
  * Attendees **required** `array`: The request containing the attendees to create.
    * items [CreateAttendeeRequestItem](#createattendeerequestitem)

#### Output
*Output schema unknown*

### DeleteAttendee



```js
amazonaws_chime.DeleteAttendee({
  "meetingId": "",
  "attendeeId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * attendeeId **required** `string`

#### Output
*Output schema unknown*

### GetAttendee



```js
amazonaws_chime.GetAttendee({
  "meetingId": "",
  "attendeeId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * attendeeId **required** `string`

#### Output
* output [GetAttendeeResponse](#getattendeeresponse)

### ListAttendeeTags



```js
amazonaws_chime.ListAttendeeTags({
  "meetingId": "",
  "attendeeId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * attendeeId **required** `string`

#### Output
* output [ListAttendeeTagsResponse](#listattendeetagsresponse)

### TagAttendee



```js
amazonaws_chime.TagAttendee({
  "meetingId": "",
  "attendeeId": "",
  "operation": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * attendeeId **required** `string`
  * operation **required** `string`
  * Tags **required** `array`: The tag key-value pairs.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagAttendee



```js
amazonaws_chime.UntagAttendee({
  "meetingId": "",
  "attendeeId": "",
  "operation": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * attendeeId **required** `string`
  * operation **required** `string`
  * TagKeys **required** `array`: The tag keys.
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*

### CreateMeetingDialOut



```js
amazonaws_chime.CreateMeetingDialOut({
  "meetingId": "",
  "FromPhoneNumber": "",
  "ToPhoneNumber": "",
  "JoinToken": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * FromPhoneNumber **required** `string`: Phone number used as the caller ID when the remote party receives a call.
  * JoinToken **required** `string`: Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/chime/latest/APIReference/API_Attendee.html"> CreateAttendee API</a> to get a join token. 
  * ToPhoneNumber **required** `string`: Phone number called when inviting someone to a meeting.

#### Output
*Output schema unknown*

### ListMeetingTags



```js
amazonaws_chime.ListMeetingTags({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`

#### Output
* output [ListMeetingTagsResponse](#listmeetingtagsresponse)

### TagMeeting



```js
amazonaws_chime.TagMeeting({
  "meetingId": "",
  "operation": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * operation **required** `string`
  * Tags **required** `array`: The tag key-value pairs.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagMeeting



```js
amazonaws_chime.UntagMeeting({
  "meetingId": "",
  "operation": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`
  * operation **required** `string`
  * TagKeys **required** `array`: The tag keys.
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*

### ListPhoneNumberOrders



```js
amazonaws_chime.ListPhoneNumberOrders({}, context)
```

#### Input
* input `object`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListPhoneNumberOrdersResponse](#listphonenumberordersresponse)

### CreatePhoneNumberOrder



```js
amazonaws_chime.CreatePhoneNumberOrder({
  "ProductType": "",
  "E164PhoneNumbers": []
}, context)
```

#### Input
* input `object`
  * E164PhoneNumbers **required** `array`: List of phone numbers, in E.164 format.
    * items [E164PhoneNumber](#e164phonenumber)
  * ProductType **required** `string` (values: BusinessCalling, VoiceConnector): The phone number product type.

#### Output
*Output schema unknown*

### GetPhoneNumberOrder



```js
amazonaws_chime.GetPhoneNumberOrder({
  "phoneNumberOrderId": ""
}, context)
```

#### Input
* input `object`
  * phoneNumberOrderId **required** `string`

#### Output
* output [GetPhoneNumberOrderResponse](#getphonenumberorderresponse)

### ListPhoneNumbers



```js
amazonaws_chime.ListPhoneNumbers({}, context)
```

#### Input
* input `object`
  * status `string`
  * product-type `string`
  * filter-name `string`
  * filter-value `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListPhoneNumbersResponse](#listphonenumbersresponse)

### BatchDeletePhoneNumber



```js
amazonaws_chime.BatchDeletePhoneNumber({
  "operation": "",
  "PhoneNumberIds": []
}, context)
```

#### Input
* input `object`
  * operation **required** `string`
  * PhoneNumberIds **required** `array`: List of phone number IDs.
    * items [String](#string)

#### Output
* output [BatchDeletePhoneNumberResponse](#batchdeletephonenumberresponse)

### BatchUpdatePhoneNumber



```js
amazonaws_chime.BatchUpdatePhoneNumber({
  "operation": "",
  "UpdatePhoneNumberRequestItems": []
}, context)
```

#### Input
* input `object`
  * operation **required** `string`
  * UpdatePhoneNumberRequestItems **required** `array`: The request containing the phone number IDs and product types or calling names to update.
    * items [UpdatePhoneNumberRequestItem](#updatephonenumberrequestitem)

#### Output
* output [BatchUpdatePhoneNumberResponse](#batchupdatephonenumberresponse)

### DeletePhoneNumber



```js
amazonaws_chime.DeletePhoneNumber({
  "phoneNumberId": ""
}, context)
```

#### Input
* input `object`
  * phoneNumberId **required** `string`

#### Output
*Output schema unknown*

### GetPhoneNumber



```js
amazonaws_chime.GetPhoneNumber({
  "phoneNumberId": ""
}, context)
```

#### Input
* input `object`
  * phoneNumberId **required** `string`

#### Output
* output [GetPhoneNumberResponse](#getphonenumberresponse)

### UpdatePhoneNumber



```js
amazonaws_chime.UpdatePhoneNumber({
  "phoneNumberId": ""
}, context)
```

#### Input
* input `object`
  * phoneNumberId **required** `string`
  * CallingName `string`: The outbound calling name associated with the phone number.
  * ProductType `string` (values: BusinessCalling, VoiceConnector): The product type.

#### Output
* output [UpdatePhoneNumberResponse](#updatephonenumberresponse)

### RestorePhoneNumber



```js
amazonaws_chime.RestorePhoneNumber({
  "phoneNumberId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * phoneNumberId **required** `string`
  * operation **required** `string`

#### Output
* output [RestorePhoneNumberResponse](#restorephonenumberresponse)

### SearchAvailablePhoneNumbers



```js
amazonaws_chime.SearchAvailablePhoneNumbers({
  "type": ""
}, context)
```

#### Input
* input `object`
  * area-code `string`
  * city `string`
  * country `string`
  * state `string`
  * toll-free-prefix `string`
  * max-results `integer`
  * next-token `string`
  * type **required** `string`

#### Output
* output [SearchAvailablePhoneNumbersResponse](#searchavailablephonenumbersresponse)

### GetGlobalSettings



```js
amazonaws_chime.GetGlobalSettings({}, context)
```

#### Input
* input `object`

#### Output
* output [GetGlobalSettingsResponse](#getglobalsettingsresponse)

### UpdateGlobalSettings



```js
amazonaws_chime.UpdateGlobalSettings({
  "BusinessCalling": {},
  "VoiceConnector": {}
}, context)
```

#### Input
* input `object`
  * BusinessCalling **required** `object`: The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.
    * CdrBucket
  * VoiceConnector **required** `object`: The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.
    * CdrBucket

#### Output
*Output schema unknown*

### GetPhoneNumberSettings



```js
amazonaws_chime.GetPhoneNumberSettings({}, context)
```

#### Input
* input `object`

#### Output
* output [GetPhoneNumberSettingsResponse](#getphonenumbersettingsresponse)

### UpdatePhoneNumberSettings



```js
amazonaws_chime.UpdatePhoneNumberSettings({
  "CallingName": ""
}, context)
```

#### Input
* input `object`
  * CallingName **required** `string`: The default outbound calling name for the account.

#### Output
*Output schema unknown*

### ListSipMediaApplications



```js
amazonaws_chime.ListSipMediaApplications({}, context)
```

#### Input
* input `object`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListSipMediaApplicationsResponse](#listsipmediaapplicationsresponse)

### CreateSipMediaApplication



```js
amazonaws_chime.CreateSipMediaApplication({
  "AwsRegion": "",
  "Endpoints": []
}, context)
```

#### Input
* input `object`
  * AwsRegion **required** `string`: AWS Region assigned to the SIP media application.
  * Endpoints **required** `array`: List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.
    * items [SipMediaApplicationEndpoint](#sipmediaapplicationendpoint)
  * Name `string`: The SIP media application name.

#### Output
*Output schema unknown*

### DeleteSipMediaApplication



```js
amazonaws_chime.DeleteSipMediaApplication({
  "sipMediaApplicationId": ""
}, context)
```

#### Input
* input `object`
  * sipMediaApplicationId **required** `string`

#### Output
*Output schema unknown*

### GetSipMediaApplication



```js
amazonaws_chime.GetSipMediaApplication({
  "sipMediaApplicationId": ""
}, context)
```

#### Input
* input `object`
  * sipMediaApplicationId **required** `string`

#### Output
* output [GetSipMediaApplicationResponse](#getsipmediaapplicationresponse)

### UpdateSipMediaApplication



```js
amazonaws_chime.UpdateSipMediaApplication({
  "sipMediaApplicationId": ""
}, context)
```

#### Input
* input `object`
  * sipMediaApplicationId **required** `string`
  * Endpoints `array`: The new set of endpoints for the specified SIP media application.
    * items [SipMediaApplicationEndpoint](#sipmediaapplicationendpoint)
  * Name `string`: The new name for the specified SIP media application.

#### Output
* output [UpdateSipMediaApplicationResponse](#updatesipmediaapplicationresponse)

### CreateSipMediaApplicationCall



```js
amazonaws_chime.CreateSipMediaApplicationCall({
  "sipMediaApplicationId": ""
}, context)
```

#### Input
* input `object`
  * sipMediaApplicationId **required** `string`
  * FromPhoneNumber `string`: The phone number that a user calls from.
  * ToPhoneNumber `string`: The phone number that the user dials in order to connect to a meeting

#### Output
*Output schema unknown*

### GetSipMediaApplicationLoggingConfiguration



```js
amazonaws_chime.GetSipMediaApplicationLoggingConfiguration({
  "sipMediaApplicationId": ""
}, context)
```

#### Input
* input `object`
  * sipMediaApplicationId **required** `string`

#### Output
* output [GetSipMediaApplicationLoggingConfigurationResponse](#getsipmediaapplicationloggingconfigurationresponse)

### PutSipMediaApplicationLoggingConfiguration



```js
amazonaws_chime.PutSipMediaApplicationLoggingConfiguration({
  "sipMediaApplicationId": ""
}, context)
```

#### Input
* input `object`
  * sipMediaApplicationId **required** `string`
  * SipMediaApplicationLoggingConfiguration `object`: Logging configuration of the SIP media application.
    * EnableSipMediaApplicationMessageLogs

#### Output
* output [PutSipMediaApplicationLoggingConfigurationResponse](#putsipmediaapplicationloggingconfigurationresponse)

### ListSipRules



```js
amazonaws_chime.ListSipRules({}, context)
```

#### Input
* input `object`
  * sip-media-application `string`
  * max-results `integer`
  * next-token `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListSipRulesResponse](#listsiprulesresponse)

### CreateSipRule



```js
amazonaws_chime.CreateSipRule({
  "Name": "",
  "TriggerType": "",
  "TriggerValue": "",
  "TargetApplications": []
}, context)
```

#### Input
* input `object`
  * Disabled `boolean`: Enables or disables a rule. You must disable rules before you can delete them.
  * Name **required** `string`: The name of the SIP rule.
  * TargetApplications **required** `array`: List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.
    * items [SipRuleTargetApplication](#sipruletargetapplication)
  * TriggerType **required** `string` (values: ToPhoneNumber, RequestUriHostname): The type of trigger whose value is assigned to the SIP rule in <code>TriggerValue</code>. Allowed trigger values are <code>RequestUriHostname</code> and <code>ToPhoneNumber</code>.
  * TriggerValue **required** `string`: If <code>TriggerType</code> is <code>RequestUriHostname</code> then the value can be the outbound host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code> then the value can be a customer-owned phone number in E164 format. <code>SipRule</code> is triggered if the SIP application requests a host name, or a If <code>TriggerType</code> is <code>RequestUriHostname</code>, then the value can be the outbound hostname of an Amazon Chime Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, then the value can be a customer-owned phone number in E164 format. <code>SipRule</code> is triggered if the SIP application requests a host name, or a <code>ToPhoneNumber</code> value matches the incoming SIP request.

#### Output
*Output schema unknown*

### DeleteSipRule



```js
amazonaws_chime.DeleteSipRule({
  "sipRuleId": ""
}, context)
```

#### Input
* input `object`
  * sipRuleId **required** `string`

#### Output
*Output schema unknown*

### GetSipRule



```js
amazonaws_chime.GetSipRule({
  "sipRuleId": ""
}, context)
```

#### Input
* input `object`
  * sipRuleId **required** `string`

#### Output
* output [GetSipRuleResponse](#getsipruleresponse)

### UpdateSipRule



```js
amazonaws_chime.UpdateSipRule({
  "sipRuleId": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * sipRuleId **required** `string`
  * Disabled `boolean`: The new value specified to indicate whether the rule is disabled.
  * Name **required** `string`: The new name for the specified SIP rule.
  * TargetApplications `array`: The new value of the list of target applications.
    * items [SipRuleTargetApplication](#sipruletargetapplication)

#### Output
*Output schema unknown*

### ListTagsForResource



```js
amazonaws_chime.ListTagsForResource({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_chime.TagResource({
  "operation": "",
  "ResourceARN": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * operation **required** `string`
  * ResourceARN **required** `string`: The resource ARN.
  * Tags **required** `array`: The tag key-value pairs.
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_chime.UntagResource({
  "operation": "",
  "ResourceARN": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * operation **required** `string`
  * ResourceARN **required** `string`: The resource ARN.
  * TagKeys **required** `array`: The tag keys.
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*

### ListVoiceConnectorGroups



```js
amazonaws_chime.ListVoiceConnectorGroups({}, context)
```

#### Input
* input `object`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListVoiceConnectorGroupsResponse](#listvoiceconnectorgroupsresponse)

### CreateVoiceConnectorGroup



```js
amazonaws_chime.CreateVoiceConnectorGroup({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`: The name of the Amazon Chime Voice Connector group.
  * VoiceConnectorItems `array`: The Amazon Chime Voice Connectors to route inbound calls to.
    * items [VoiceConnectorItem](#voiceconnectoritem)

#### Output
*Output schema unknown*

### DeleteVoiceConnectorGroup



```js
amazonaws_chime.DeleteVoiceConnectorGroup({
  "voiceConnectorGroupId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorGroupId **required** `string`

#### Output
*Output schema unknown*

### GetVoiceConnectorGroup



```js
amazonaws_chime.GetVoiceConnectorGroup({
  "voiceConnectorGroupId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorGroupId **required** `string`

#### Output
* output [GetVoiceConnectorGroupResponse](#getvoiceconnectorgroupresponse)

### UpdateVoiceConnectorGroup



```js
amazonaws_chime.UpdateVoiceConnectorGroup({
  "voiceConnectorGroupId": "",
  "Name": "",
  "VoiceConnectorItems": []
}, context)
```

#### Input
* input `object`
  * voiceConnectorGroupId **required** `string`
  * Name **required** `string`: The name of the Amazon Chime Voice Connector group.
  * VoiceConnectorItems **required** `array`: The <code>VoiceConnectorItems</code> to associate with the group.
    * items [VoiceConnectorItem](#voiceconnectoritem)

#### Output
*Output schema unknown*

### AssociatePhoneNumbersWithVoiceConnectorGroup



```js
amazonaws_chime.AssociatePhoneNumbersWithVoiceConnectorGroup({
  "voiceConnectorGroupId": "",
  "operation": "",
  "E164PhoneNumbers": []
}, context)
```

#### Input
* input `object`
  * voiceConnectorGroupId **required** `string`
  * operation **required** `string`
  * E164PhoneNumbers **required** `array`: List of phone numbers, in E.164 format.
    * items [E164PhoneNumber](#e164phonenumber)
  * ForceAssociate `boolean`: If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.

#### Output
* output [AssociatePhoneNumbersWithVoiceConnectorGroupResponse](#associatephonenumberswithvoiceconnectorgroupresponse)

### DisassociatePhoneNumbersFromVoiceConnectorGroup



```js
amazonaws_chime.DisassociatePhoneNumbersFromVoiceConnectorGroup({
  "voiceConnectorGroupId": "",
  "operation": "",
  "E164PhoneNumbers": []
}, context)
```

#### Input
* input `object`
  * voiceConnectorGroupId **required** `string`
  * operation **required** `string`
  * E164PhoneNumbers **required** `array`: List of phone numbers, in E.164 format.
    * items [E164PhoneNumber](#e164phonenumber)

#### Output
* output [DisassociatePhoneNumbersFromVoiceConnectorGroupResponse](#disassociatephonenumbersfromvoiceconnectorgroupresponse)

### ListVoiceConnectors



```js
amazonaws_chime.ListVoiceConnectors({}, context)
```

#### Input
* input `object`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListVoiceConnectorsResponse](#listvoiceconnectorsresponse)

### CreateVoiceConnector



```js
amazonaws_chime.CreateVoiceConnector({
  "Name": "",
  "RequireEncryption": true
}, context)
```

#### Input
* input `object`
  * AwsRegion `string` (values: us-east-1, us-west-2): The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code>.
  * Name **required** `string`: The name of the Amazon Chime Voice Connector.
  * RequireEncryption **required** `boolean`: When enabled, requires encryption for the Amazon Chime Voice Connector.

#### Output
*Output schema unknown*

### DeleteVoiceConnector



```js
amazonaws_chime.DeleteVoiceConnector({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
*Output schema unknown*

### GetVoiceConnector



```js
amazonaws_chime.GetVoiceConnector({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
* output [GetVoiceConnectorResponse](#getvoiceconnectorresponse)

### UpdateVoiceConnector



```js
amazonaws_chime.UpdateVoiceConnector({
  "voiceConnectorId": "",
  "Name": "",
  "RequireEncryption": true
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * Name **required** `string`: The name of the Amazon Chime Voice Connector.
  * RequireEncryption **required** `boolean`: When enabled, requires encryption for the Amazon Chime Voice Connector.

#### Output
* output [UpdateVoiceConnectorResponse](#updatevoiceconnectorresponse)

### AssociatePhoneNumbersWithVoiceConnector



```js
amazonaws_chime.AssociatePhoneNumbersWithVoiceConnector({
  "voiceConnectorId": "",
  "operation": "",
  "E164PhoneNumbers": []
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * operation **required** `string`
  * E164PhoneNumbers **required** `array`: List of phone numbers, in E.164 format.
    * items [E164PhoneNumber](#e164phonenumber)
  * ForceAssociate `boolean`: If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.

#### Output
* output [AssociatePhoneNumbersWithVoiceConnectorResponse](#associatephonenumberswithvoiceconnectorresponse)

### DisassociatePhoneNumbersFromVoiceConnector



```js
amazonaws_chime.DisassociatePhoneNumbersFromVoiceConnector({
  "voiceConnectorId": "",
  "operation": "",
  "E164PhoneNumbers": []
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * operation **required** `string`
  * E164PhoneNumbers **required** `array`: List of phone numbers, in E.164 format.
    * items [E164PhoneNumber](#e164phonenumber)

#### Output
* output [DisassociatePhoneNumbersFromVoiceConnectorResponse](#disassociatephonenumbersfromvoiceconnectorresponse)

### DeleteVoiceConnectorEmergencyCallingConfiguration



```js
amazonaws_chime.DeleteVoiceConnectorEmergencyCallingConfiguration({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
*Output schema unknown*

### GetVoiceConnectorEmergencyCallingConfiguration



```js
amazonaws_chime.GetVoiceConnectorEmergencyCallingConfiguration({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
* output [GetVoiceConnectorEmergencyCallingConfigurationResponse](#getvoiceconnectoremergencycallingconfigurationresponse)

### PutVoiceConnectorEmergencyCallingConfiguration



```js
amazonaws_chime.PutVoiceConnectorEmergencyCallingConfiguration({
  "voiceConnectorId": "",
  "EmergencyCallingConfiguration": {}
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * EmergencyCallingConfiguration **required** `object`: The emergency calling configuration details associated with an Amazon Chime Voice Connector.
    * DNIS
      * items [DNISEmergencyCallingConfiguration](#dnisemergencycallingconfiguration)

#### Output
* output [PutVoiceConnectorEmergencyCallingConfigurationResponse](#putvoiceconnectoremergencycallingconfigurationresponse)

### GetVoiceConnectorLoggingConfiguration



```js
amazonaws_chime.GetVoiceConnectorLoggingConfiguration({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
* output [GetVoiceConnectorLoggingConfigurationResponse](#getvoiceconnectorloggingconfigurationresponse)

### PutVoiceConnectorLoggingConfiguration



```js
amazonaws_chime.PutVoiceConnectorLoggingConfiguration({
  "voiceConnectorId": "",
  "LoggingConfiguration": {}
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * LoggingConfiguration **required** `object`: The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
    * EnableSIPLogs

#### Output
* output [PutVoiceConnectorLoggingConfigurationResponse](#putvoiceconnectorloggingconfigurationresponse)

### DeleteVoiceConnectorOrigination



```js
amazonaws_chime.DeleteVoiceConnectorOrigination({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
*Output schema unknown*

### GetVoiceConnectorOrigination



```js
amazonaws_chime.GetVoiceConnectorOrigination({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
* output [GetVoiceConnectorOriginationResponse](#getvoiceconnectororiginationresponse)

### PutVoiceConnectorOrigination



```js
amazonaws_chime.PutVoiceConnectorOrigination({
  "voiceConnectorId": "",
  "Origination": {}
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * Origination **required** `object`: Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.
    * Disabled
    * Routes
      * items [OriginationRoute](#originationroute)

#### Output
* output [PutVoiceConnectorOriginationResponse](#putvoiceconnectororiginationresponse)

### DeleteVoiceConnectorProxy



```js
amazonaws_chime.DeleteVoiceConnectorProxy({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
*Output schema unknown*

### GetVoiceConnectorProxy



```js
amazonaws_chime.GetVoiceConnectorProxy({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
* output [GetVoiceConnectorProxyResponse](#getvoiceconnectorproxyresponse)

### PutVoiceConnectorProxy



```js
amazonaws_chime.PutVoiceConnectorProxy({
  "voiceConnectorId": "",
  "DefaultSessionExpiryMinutes": 0,
  "PhoneNumberPoolCountries": []
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * DefaultSessionExpiryMinutes **required** `integer`: The default number of minutes allowed for proxy sessions.
  * Disabled `boolean`: When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.
  * FallBackPhoneNumber `string`: The phone number to route calls to after a proxy session expires.
  * PhoneNumberPoolCountries **required** `array`: The countries for proxy phone numbers to be selected from.
    * items [Country](#country)

#### Output
* output [PutVoiceConnectorProxyResponse](#putvoiceconnectorproxyresponse)

### ListProxySessions



```js
amazonaws_chime.ListProxySessions({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * status `string`
  * next-token `string`
  * max-results `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListProxySessionsResponse](#listproxysessionsresponse)

### CreateProxySession



```js
amazonaws_chime.CreateProxySession({
  "voiceConnectorId": "",
  "ParticipantPhoneNumbers": [],
  "Capabilities": []
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * Capabilities **required** `array`: The proxy session capabilities.
    * items [Capability](#capability)
  * ExpiryMinutes `integer`: The number of minutes allowed for the proxy session.
  * GeoMatchLevel `string` (values: Country, AreaCode): The preference for matching the country or area code of the proxy phone number with that of the first participant.
  * GeoMatchParams `object`: The country and area code for a proxy phone number in a proxy phone session.
    * AreaCode
    * Country
  * Name `string`: The name of the proxy session.
  * NumberSelectionBehavior `string` (values: PreferSticky, AvoidSticky): The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.
  * ParticipantPhoneNumbers **required** `array`: The participant phone numbers.
    * items [E164PhoneNumber](#e164phonenumber)

#### Output
*Output schema unknown*

### DeleteProxySession



```js
amazonaws_chime.DeleteProxySession({
  "voiceConnectorId": "",
  "proxySessionId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * proxySessionId **required** `string`

#### Output
*Output schema unknown*

### GetProxySession



```js
amazonaws_chime.GetProxySession({
  "voiceConnectorId": "",
  "proxySessionId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * proxySessionId **required** `string`

#### Output
* output [GetProxySessionResponse](#getproxysessionresponse)

### UpdateProxySession



```js
amazonaws_chime.UpdateProxySession({
  "voiceConnectorId": "",
  "proxySessionId": "",
  "Capabilities": []
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * proxySessionId **required** `string`
  * Capabilities **required** `array`: The proxy session capabilities.
    * items [Capability](#capability)
  * ExpiryMinutes `integer`: The number of minutes allowed for the proxy session.

#### Output
*Output schema unknown*

### DeleteVoiceConnectorStreamingConfiguration



```js
amazonaws_chime.DeleteVoiceConnectorStreamingConfiguration({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
*Output schema unknown*

### GetVoiceConnectorStreamingConfiguration



```js
amazonaws_chime.GetVoiceConnectorStreamingConfiguration({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
* output [GetVoiceConnectorStreamingConfigurationResponse](#getvoiceconnectorstreamingconfigurationresponse)

### PutVoiceConnectorStreamingConfiguration



```js
amazonaws_chime.PutVoiceConnectorStreamingConfiguration({
  "voiceConnectorId": "",
  "StreamingConfiguration": {}
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * StreamingConfiguration **required** `object`: The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.
    * DataRetentionInHours
    * Disabled
    * StreamingNotificationTargets
      * items [StreamingNotificationTarget](#streamingnotificationtarget)

#### Output
* output [PutVoiceConnectorStreamingConfigurationResponse](#putvoiceconnectorstreamingconfigurationresponse)

### DeleteVoiceConnectorTermination



```js
amazonaws_chime.DeleteVoiceConnectorTermination({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
*Output schema unknown*

### GetVoiceConnectorTermination



```js
amazonaws_chime.GetVoiceConnectorTermination({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
* output [GetVoiceConnectorTerminationResponse](#getvoiceconnectorterminationresponse)

### PutVoiceConnectorTermination



```js
amazonaws_chime.PutVoiceConnectorTermination({
  "voiceConnectorId": "",
  "Termination": {}
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * Termination **required** `object`: Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.
    * CallingRegions
      * items [CallingRegion](#callingregion)
    * CidrAllowedList
      * items [String](#string)
    * CpsLimit
    * DefaultPhoneNumber
    * Disabled

#### Output
* output [PutVoiceConnectorTerminationResponse](#putvoiceconnectorterminationresponse)

### ListVoiceConnectorTerminationCredentials



```js
amazonaws_chime.ListVoiceConnectorTerminationCredentials({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
* output [ListVoiceConnectorTerminationCredentialsResponse](#listvoiceconnectorterminationcredentialsresponse)

### DeleteVoiceConnectorTerminationCredentials



```js
amazonaws_chime.DeleteVoiceConnectorTerminationCredentials({
  "voiceConnectorId": "",
  "operation": "",
  "Usernames": []
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * operation **required** `string`
  * Usernames **required** `array`: The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.
    * items [SensitiveString](#sensitivestring)

#### Output
*Output schema unknown*

### PutVoiceConnectorTerminationCredentials



```js
amazonaws_chime.PutVoiceConnectorTerminationCredentials({
  "voiceConnectorId": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`
  * operation **required** `string`
  * Credentials `array`: The termination SIP credentials.
    * items [Credential](#credential)

#### Output
*Output schema unknown*

### GetVoiceConnectorTerminationHealth



```js
amazonaws_chime.GetVoiceConnectorTerminationHealth({
  "voiceConnectorId": ""
}, context)
```

#### Input
* input `object`
  * voiceConnectorId **required** `string`

#### Output
* output [GetVoiceConnectorTerminationHealthResponse](#getvoiceconnectorterminationhealthresponse)



## Definitions

### AccessDeniedException


### Account
* Account `object`: The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.
  * AccountId **required**
  * AccountType
  * AwsAccountId **required**
  * CreatedTimestamp
  * DefaultLicense
  * Name **required**
  * SigninDelegateGroups
    * items [SigninDelegateGroup](#signindelegategroup)
  * SupportedLicenses
    * items [License](#license)

### AccountList
* AccountList `array`
  * items [Account](#account)

### AccountName
* AccountName `string`

### AccountSettings
* AccountSettings `object`: Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
  * DisableRemoteControl
  * EnableDialOut

### AccountType
* AccountType `string` (values: Team, EnterpriseDirectory, EnterpriseLWA, EnterpriseOIDC)

### AlexaForBusinessMetadata
* AlexaForBusinessMetadata `object`: The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.
  * AlexaForBusinessRoomArn
  * IsAlexaForBusinessEnabled

### Alpha2CountryCode
* Alpha2CountryCode `string`

### AppInstance
* AppInstance `object`: An instance of a Chime messaging application.
  * AppInstanceArn
  * CreatedTimestamp
  * LastUpdatedTimestamp
  * Metadata
  * Name

### AppInstanceAdmin
* AppInstanceAdmin `object`: Promotes a user to the administrator role for the duration of an app instance.
  * Admin
    * Arn
    * Name
  * AppInstanceArn
  * CreatedTimestamp

### AppInstanceAdminList
* AppInstanceAdminList `array`
  * items [AppInstanceAdminSummary](#appinstanceadminsummary)

### AppInstanceAdminSummary
* AppInstanceAdminSummary `object`: The identity and metadata of an administrator.
  * Admin
    * Arn
    * Name

### AppInstanceDataType
* AppInstanceDataType `string` (values: Channel, ChannelMessage)

### AppInstanceList
* AppInstanceList `array`
  * items [AppInstanceSummary](#appinstancesummary)

### AppInstanceRetentionSettings
* AppInstanceRetentionSettings `object`: The length of time in days to retain messages.
  * ChannelRetentionSettings
    * RetentionDays

### AppInstanceStreamingConfiguration
* AppInstanceStreamingConfiguration `object`: The streaming configuration of an app instance.
  * AppInstanceDataType **required**
  * ResourceArn **required**

### AppInstanceStreamingConfigurationList
* AppInstanceStreamingConfigurationList `array`
  * items [AppInstanceStreamingConfiguration](#appinstancestreamingconfiguration)

### AppInstanceSummary
* AppInstanceSummary `object`: The summary data for an app instance.
  * AppInstanceArn
  * Metadata
  * Name

### AppInstanceUser
* AppInstanceUser `object`: The app instance user.
  * AppInstanceUserArn
  * CreatedTimestamp
  * LastUpdatedTimestamp
  * Metadata
  * Name

### AppInstanceUserList
* AppInstanceUserList `array`
  * items [AppInstanceUserSummary](#appinstanceusersummary)

### AppInstanceUserMembershipSummary
* AppInstanceUserMembershipSummary `object`: Lists the channels to which app instance users belong.
  * ReadMarkerTimestamp
  * Type

### AppInstanceUserSummary
* AppInstanceUserSummary `object`: The app instance user summary data .
  * AppInstanceUserArn
  * Metadata
  * Name

### AreaCode
* AreaCode `string`

### Arn
* Arn `string`

### AssociatePhoneNumberWithUserRequest
* AssociatePhoneNumberWithUserRequest `object`
  * E164PhoneNumber **required**

### AssociatePhoneNumberWithUserResponse
* AssociatePhoneNumberWithUserResponse `object`

### AssociatePhoneNumbersWithVoiceConnectorGroupRequest
* AssociatePhoneNumbersWithVoiceConnectorGroupRequest `object`
  * E164PhoneNumbers **required**
    * items [E164PhoneNumber](#e164phonenumber)
  * ForceAssociate

### AssociatePhoneNumbersWithVoiceConnectorGroupResponse
* AssociatePhoneNumbersWithVoiceConnectorGroupResponse `object`
  * PhoneNumberErrors
    * items [PhoneNumberError](#phonenumbererror)

### AssociatePhoneNumbersWithVoiceConnectorRequest
* AssociatePhoneNumbersWithVoiceConnectorRequest `object`
  * E164PhoneNumbers **required**
    * items [E164PhoneNumber](#e164phonenumber)
  * ForceAssociate

### AssociatePhoneNumbersWithVoiceConnectorResponse
* AssociatePhoneNumbersWithVoiceConnectorResponse `object`
  * PhoneNumberErrors
    * items [PhoneNumberError](#phonenumbererror)

### AssociateSigninDelegateGroupsWithAccountRequest
* AssociateSigninDelegateGroupsWithAccountRequest `object`
  * SigninDelegateGroups **required**
    * items [SigninDelegateGroup](#signindelegategroup)

### AssociateSigninDelegateGroupsWithAccountResponse
* AssociateSigninDelegateGroupsWithAccountResponse `object`

### Attendee
* Attendee `object`: <p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting.</p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p>
  * AttendeeId
  * ExternalUserId
  * JoinToken

### AttendeeList
* AttendeeList `array`
  * items [Attendee](#attendee)

### AttendeeTagKeyList
* AttendeeTagKeyList `array`
  * items [TagKey](#tagkey)

### AttendeeTagList
* AttendeeTagList `array`
  * items [Tag](#tag)

### BadRequestException


### BatchCreateAttendeeErrorList
* BatchCreateAttendeeErrorList `array`
  * items [CreateAttendeeError](#createattendeeerror)

### BatchCreateAttendeeRequest
* BatchCreateAttendeeRequest `object`
  * Attendees **required**
    * items [CreateAttendeeRequestItem](#createattendeerequestitem)

### BatchCreateAttendeeResponse
* BatchCreateAttendeeResponse `object`
  * Attendees
    * items [Attendee](#attendee)
  * Errors
    * items [CreateAttendeeError](#createattendeeerror)

### BatchCreateRoomMembershipRequest
* BatchCreateRoomMembershipRequest `object`
  * MembershipItemList **required**
    * items [MembershipItem](#membershipitem)

### BatchCreateRoomMembershipResponse
* BatchCreateRoomMembershipResponse `object`
  * Errors
    * items [MemberError](#membererror)

### BatchDeletePhoneNumberRequest
* BatchDeletePhoneNumberRequest `object`
  * PhoneNumberIds **required**
    * items [String](#string)

### BatchDeletePhoneNumberResponse
* BatchDeletePhoneNumberResponse `object`
  * PhoneNumberErrors
    * items [PhoneNumberError](#phonenumbererror)

### BatchSuspendUserRequest
* BatchSuspendUserRequest `object`
  * UserIdList **required**
    * items [NonEmptyString](#nonemptystring)

### BatchSuspendUserResponse
* BatchSuspendUserResponse `object`
  * UserErrors
    * items [UserError](#usererror)

### BatchUnsuspendUserRequest
* BatchUnsuspendUserRequest `object`
  * UserIdList **required**
    * items [NonEmptyString](#nonemptystring)

### BatchUnsuspendUserResponse
* BatchUnsuspendUserResponse `object`
  * UserErrors
    * items [UserError](#usererror)

### BatchUpdatePhoneNumberRequest
* BatchUpdatePhoneNumberRequest `object`
  * UpdatePhoneNumberRequestItems **required**
    * items [UpdatePhoneNumberRequestItem](#updatephonenumberrequestitem)

### BatchUpdatePhoneNumberResponse
* BatchUpdatePhoneNumberResponse `object`
  * PhoneNumberErrors
    * items [PhoneNumberError](#phonenumbererror)

### BatchUpdateUserRequest
* BatchUpdateUserRequest `object`
  * UpdateUserRequestItems **required**
    * items [UpdateUserRequestItem](#updateuserrequestitem)

### BatchUpdateUserResponse
* BatchUpdateUserResponse `object`
  * UserErrors
    * items [UserError](#usererror)

### Boolean
* Boolean `boolean`

### Bot
* Bot `object`: A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.
  * BotEmail
  * BotId
  * BotType
  * CreatedTimestamp
  * Disabled
  * DisplayName
  * SecurityToken
  * UpdatedTimestamp
  * UserId

### BotList
* BotList `array`
  * items [Bot](#bot)

### BotType
* BotType `string` (values: ChatBot)

### BusinessCallingSettings
* BusinessCallingSettings `object`: The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.
  * CdrBucket

### CallingName
* CallingName `string`

### CallingNameStatus
* CallingNameStatus `string` (values: Unassigned, UpdateInProgress, UpdateSucceeded, UpdateFailed)

### CallingRegion
* CallingRegion `string`

### CallingRegionList
* CallingRegionList `array`
  * items [CallingRegion](#callingregion)

### Capability
* Capability `string` (values: Voice, SMS)

### CapabilityList
* CapabilityList `array`
  * items [Capability](#capability)

### Channel
* Channel `object`: Creates a channel.
  * ChannelArn
  * CreatedBy
    * Arn
    * Name
  * CreatedTimestamp
  * LastMessageTimestamp
  * LastUpdatedTimestamp
  * Metadata
  * Mode
  * Name
  * Privacy

### ChannelBan
* ChannelBan `object`: Bans a user from a channel.
  * ChannelArn
  * CreatedBy
    * Arn
    * Name
  * CreatedTimestamp
  * Member
    * Arn
    * Name

### ChannelBanSummary
* ChannelBanSummary `object`: The summary data for the channel ban.
  * Member
    * Arn
    * Name

### ChannelBanSummaryList
* ChannelBanSummaryList `array`
  * items [ChannelBanSummary](#channelbansummary)

### ChannelMembership
* ChannelMembership `object`: Creates a channel member.
  * ChannelArn
  * CreatedTimestamp
  * InvitedBy
    * Arn
    * Name
  * LastUpdatedTimestamp
  * Member
    * Arn
    * Name
  * Type

### ChannelMembershipForAppInstanceUserSummary
* ChannelMembershipForAppInstanceUserSummary `object`: Returns the channel membership summary data for an app instance.
  * AppInstanceUserMembershipSummary
    * ReadMarkerTimestamp
    * Type
  * ChannelSummary [ChannelSummary](#channelsummary)

### ChannelMembershipForAppInstanceUserSummaryList
* ChannelMembershipForAppInstanceUserSummaryList `array`
  * items [ChannelMembershipForAppInstanceUserSummary](#channelmembershipforappinstanceusersummary)

### ChannelMembershipSummary
* ChannelMembershipSummary `object`: The summary data of a channel membership.
  * Member
    * Arn
    * Name

### ChannelMembershipSummaryList
* ChannelMembershipSummaryList `array`
  * items [ChannelMembershipSummary](#channelmembershipsummary)

### ChannelMembershipType
* ChannelMembershipType `string` (values: DEFAULT, HIDDEN)

### ChannelMessage
* ChannelMessage `object`: Creates a message in a channel.
  * ChannelArn
  * Content
  * CreatedTimestamp
  * LastEditedTimestamp
  * LastUpdatedTimestamp
  * MessageId
  * Metadata
  * Persistence [ChannelMessagePersistenceType](#channelmessagepersistencetype)
  * Redacted
  * Sender
    * Arn
    * Name
  * Type

### ChannelMessagePersistenceType
* ChannelMessagePersistenceType `string` (values: PERSISTENT, NON_PERSISTENT)

### ChannelMessageSummary
* ChannelMessageSummary `object`: A summary of the messages in a channel.
  * Content
  * CreatedTimestamp
  * LastEditedTimestamp [Timestamp](#timestamp)
  * LastUpdatedTimestamp [Timestamp](#timestamp)
  * MessageId
  * Metadata
  * Redacted
  * Sender
    * Arn
    * Name
  * Type

### ChannelMessageSummaryList
* ChannelMessageSummaryList `array`
  * items [ChannelMessageSummary](#channelmessagesummary)

### ChannelMessageType
* ChannelMessageType `string` (values: STANDARD, CONTROL)

### ChannelMode
* ChannelMode `string` (values: UNRESTRICTED, RESTRICTED)

### ChannelModeratedByAppInstanceUserSummary
* ChannelModeratedByAppInstanceUserSummary `object`: Returns the summary data for a moderated channel.
  * ChannelSummary [ChannelSummary](#channelsummary)

### ChannelModeratedByAppInstanceUserSummaryList
* ChannelModeratedByAppInstanceUserSummaryList `array`
  * items [ChannelModeratedByAppInstanceUserSummary](#channelmoderatedbyappinstanceusersummary)

### ChannelModerator
* ChannelModerator `object`: Creates a moderator on a channel.
  * ChannelArn
  * CreatedBy
    * Arn
    * Name
  * CreatedTimestamp
  * Moderator
    * Arn
    * Name

### ChannelModeratorSummary
* ChannelModeratorSummary `object`: Summary data of the moderators in a channel.
  * Moderator
    * Arn
    * Name

### ChannelModeratorSummaryList
* ChannelModeratorSummaryList `array`
  * items [ChannelModeratorSummary](#channelmoderatorsummary)

### ChannelPrivacy
* ChannelPrivacy `string` (values: PUBLIC, PRIVATE)

### ChannelRetentionSettings
* ChannelRetentionSettings `object`: The retention settings for a channel.
  * RetentionDays

### ChannelSummary
* ChannelSummary `object`: The summary data for a channel.
  * ChannelArn
  * LastMessageTimestamp
  * Metadata
  * Mode
  * Name
  * Privacy

### ChannelSummaryList
* ChannelSummaryList `array`
  * items [ChannelSummary](#channelsummary)

### ChimeArn
* ChimeArn `string`

### ClientRequestToken
* ClientRequestToken `string`

### ConflictException


### Content
* Content `string`

### ConversationRetentionSettings
* ConversationRetentionSettings `object`: The retention settings that determine how long to retain chat conversation messages for an Amazon Chime Enterprise account.
  * RetentionDays

### Country
* Country `string`

### CountryList
* CountryList `array`
  * items [Country](#country)

### CpsLimit
* CpsLimit `integer`

### CreateAccountRequest
* CreateAccountRequest `object`
  * Name **required**

### CreateAccountResponse
* CreateAccountResponse `object`
  * Account [Account](#account)

### CreateAppInstanceAdminRequest
* CreateAppInstanceAdminRequest `object`
  * AppInstanceAdminArn **required**

### CreateAppInstanceAdminResponse
* CreateAppInstanceAdminResponse `object`
  * AppInstanceAdmin
    * Arn
    * Name
  * AppInstanceArn

### CreateAppInstanceRequest
* CreateAppInstanceRequest `object`
  * ClientRequestToken **required**
  * Metadata
  * Name **required**

### CreateAppInstanceResponse
* CreateAppInstanceResponse `object`
  * AppInstanceArn

### CreateAppInstanceUserRequest
* CreateAppInstanceUserRequest `object`
  * AppInstanceArn **required**
  * AppInstanceUserId **required**
  * ClientRequestToken **required**
  * Metadata
  * Name **required**

### CreateAppInstanceUserResponse
* CreateAppInstanceUserResponse `object`
  * AppInstanceUserArn

### CreateAttendeeError
* CreateAttendeeError `object`: The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.
  * ErrorCode
  * ErrorMessage
  * ExternalUserId

### CreateAttendeeRequest
* CreateAttendeeRequest `object`
  * ExternalUserId **required**
  * Tags
    * items [Tag](#tag)

### CreateAttendeeRequestItem
* CreateAttendeeRequestItem `object`: The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.
  * ExternalUserId **required**
  * Tags
    * items [Tag](#tag)

### CreateAttendeeRequestItemList
* CreateAttendeeRequestItemList `array`
  * items [CreateAttendeeRequestItem](#createattendeerequestitem)

### CreateAttendeeResponse
* CreateAttendeeResponse `object`
  * Attendee
    * AttendeeId
    * ExternalUserId
    * JoinToken

### CreateBotRequest
* CreateBotRequest `object`
  * DisplayName **required**
  * Domain

### CreateBotResponse
* CreateBotResponse `object`
  * Bot
    * BotEmail
    * BotId
    * BotType
    * CreatedTimestamp
    * Disabled
    * DisplayName
    * SecurityToken
    * UpdatedTimestamp
    * UserId

### CreateChannelBanRequest
* CreateChannelBanRequest `object`
  * MemberArn **required**

### CreateChannelBanResponse
* CreateChannelBanResponse `object`
  * ChannelArn
  * Member
    * Arn
    * Name

### CreateChannelMembershipRequest
* CreateChannelMembershipRequest `object`
  * MemberArn **required**
  * Type **required**

### CreateChannelMembershipResponse
* CreateChannelMembershipResponse `object`
  * ChannelArn
  * Member
    * Arn
    * Name

### CreateChannelModeratorRequest
* CreateChannelModeratorRequest `object`
  * ChannelModeratorArn **required**

### CreateChannelModeratorResponse
* CreateChannelModeratorResponse `object`
  * ChannelArn
  * ChannelModerator
    * Arn
    * Name

### CreateChannelRequest
* CreateChannelRequest `object`
  * AppInstanceArn **required**
  * ClientRequestToken **required**
  * Metadata
  * Mode
  * Name **required**
  * Privacy
  * Tags [TagList](#taglist)

### CreateChannelResponse
* CreateChannelResponse `object`
  * ChannelArn

### CreateMeetingDialOutRequest
* CreateMeetingDialOutRequest `object`
  * FromPhoneNumber **required**
  * JoinToken **required**
  * ToPhoneNumber **required**

### CreateMeetingDialOutResponse
* CreateMeetingDialOutResponse `object`
  * TransactionId

### CreateMeetingRequest
* CreateMeetingRequest `object`
  * ClientRequestToken **required**
  * ExternalMeetingId
  * MediaRegion
  * MeetingHostId
  * NotificationsConfiguration
    * SnsTopicArn
    * SqsQueueArn
  * Tags
    * items [Tag](#tag)

### CreateMeetingResponse
* CreateMeetingResponse `object`
  * Meeting
    * ExternalMeetingId
    * MediaPlacement
      * AudioFallbackUrl
      * AudioHostUrl
      * ScreenDataUrl
      * ScreenSharingUrl
      * ScreenViewingUrl
      * SignalingUrl
      * TurnControlUrl
    * MediaRegion
    * MeetingId

### CreateMeetingWithAttendeesRequest
* CreateMeetingWithAttendeesRequest `object`
  * Attendees
    * items [CreateAttendeeRequestItem](#createattendeerequestitem)
  * ClientRequestToken **required**
  * ExternalMeetingId
  * MediaRegion
  * MeetingHostId
  * NotificationsConfiguration [MeetingNotificationConfiguration](#meetingnotificationconfiguration)
  * Tags
    * items [Tag](#tag)

### CreateMeetingWithAttendeesRequestItemList
* CreateMeetingWithAttendeesRequestItemList `array`
  * items [CreateAttendeeRequestItem](#createattendeerequestitem)

### CreateMeetingWithAttendeesResponse
* CreateMeetingWithAttendeesResponse `object`
  * Attendees
    * items [Attendee](#attendee)
  * Errors
    * items [CreateAttendeeError](#createattendeeerror)
  * Meeting [Meeting](#meeting)

### CreatePhoneNumberOrderRequest
* CreatePhoneNumberOrderRequest `object`
  * E164PhoneNumbers **required**
    * items [E164PhoneNumber](#e164phonenumber)
  * ProductType **required**

### CreatePhoneNumberOrderResponse
* CreatePhoneNumberOrderResponse `object`
  * PhoneNumberOrder
    * CreatedTimestamp
    * OrderedPhoneNumbers
      * items [OrderedPhoneNumber](#orderedphonenumber)
    * PhoneNumberOrderId
    * ProductType
    * Status
    * UpdatedTimestamp

### CreateProxySessionRequest
* CreateProxySessionRequest `object`
  * Capabilities **required**
    * items [Capability](#capability)
  * ExpiryMinutes
  * GeoMatchLevel
  * GeoMatchParams
    * AreaCode **required**
    * Country **required**
  * Name
  * NumberSelectionBehavior
  * ParticipantPhoneNumbers **required**
    * items [E164PhoneNumber](#e164phonenumber)

### CreateProxySessionResponse
* CreateProxySessionResponse `object`
  * ProxySession
    * Capabilities
      * items [Capability](#capability)
    * CreatedTimestamp
    * EndedTimestamp
    * ExpiryMinutes
    * GeoMatchLevel
    * GeoMatchParams
      * AreaCode **required**
      * Country **required**
    * Name
    * NumberSelectionBehavior
    * Participants
      * items [Participant](#participant)
    * ProxySessionId
    * Status
    * UpdatedTimestamp
    * VoiceConnectorId

### CreateRoomMembershipRequest
* CreateRoomMembershipRequest `object`
  * MemberId **required**
  * Role

### CreateRoomMembershipResponse
* CreateRoomMembershipResponse `object`
  * RoomMembership
    * InvitedBy
    * Member [Member](#member)
    * Role
    * RoomId
    * UpdatedTimestamp

### CreateRoomRequest
* CreateRoomRequest `object`
  * ClientRequestToken
  * Name **required**

### CreateRoomResponse
* CreateRoomResponse `object`
  * Room
    * AccountId
    * CreatedBy
    * CreatedTimestamp
    * Name
    * RoomId
    * UpdatedTimestamp

### CreateSipMediaApplicationCallRequest
* CreateSipMediaApplicationCallRequest `object`
  * FromPhoneNumber
  * ToPhoneNumber

### CreateSipMediaApplicationCallResponse
* CreateSipMediaApplicationCallResponse `object`
  * SipMediaApplicationCall
    * TransactionId

### CreateSipMediaApplicationRequest
* CreateSipMediaApplicationRequest `object`
  * AwsRegion **required**
  * Endpoints **required**
    * items [SipMediaApplicationEndpoint](#sipmediaapplicationendpoint)
  * Name

### CreateSipMediaApplicationResponse
* CreateSipMediaApplicationResponse `object`
  * SipMediaApplication
    * AwsRegion
    * CreatedTimestamp
    * Endpoints
      * items [SipMediaApplicationEndpoint](#sipmediaapplicationendpoint)
    * Name
    * SipMediaApplicationId
    * UpdatedTimestamp

### CreateSipRuleRequest
* CreateSipRuleRequest `object`
  * Disabled
  * Name **required**
  * TargetApplications **required**
    * items [SipRuleTargetApplication](#sipruletargetapplication)
  * TriggerType **required**
  * TriggerValue **required**

### CreateSipRuleResponse
* CreateSipRuleResponse `object`
  * SipRule
    * CreatedTimestamp
    * Disabled
    * Name
    * SipRuleId
    * TargetApplications
      * items [SipRuleTargetApplication](#sipruletargetapplication)
    * TriggerType
    * TriggerValue
    * UpdatedTimestamp

### CreateUserRequest
* CreateUserRequest `object`
  * Email
  * UserType
  * Username

### CreateUserResponse
* CreateUserResponse `object`
  * User [User](#user)

### CreateVoiceConnectorGroupRequest
* CreateVoiceConnectorGroupRequest `object`
  * Name **required**
  * VoiceConnectorItems
    * items [VoiceConnectorItem](#voiceconnectoritem)

### CreateVoiceConnectorGroupResponse
* CreateVoiceConnectorGroupResponse `object`
  * VoiceConnectorGroup
    * CreatedTimestamp
    * Name
    * UpdatedTimestamp
    * VoiceConnectorGroupId
    * VoiceConnectorItems
      * items [VoiceConnectorItem](#voiceconnectoritem)

### CreateVoiceConnectorRequest
* CreateVoiceConnectorRequest `object`
  * AwsRegion
  * Name **required**
  * RequireEncryption **required**

### CreateVoiceConnectorResponse
* CreateVoiceConnectorResponse `object`
  * VoiceConnector
    * AwsRegion
    * CreatedTimestamp
    * Name
    * OutboundHostName
    * RequireEncryption
    * UpdatedTimestamp
    * VoiceConnectorId

### Credential
* Credential `object`: The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.
  * Password
  * Username

### CredentialList
* CredentialList `array`
  * items [Credential](#credential)

### DNISEmergencyCallingConfiguration
* DNISEmergencyCallingConfiguration `object`: The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration.
  * CallingCountry **required**
  * EmergencyPhoneNumber **required**
  * TestPhoneNumber

### DNISEmergencyCallingConfigurationList
* DNISEmergencyCallingConfigurationList `array`
  * items [DNISEmergencyCallingConfiguration](#dnisemergencycallingconfiguration)

### DataRetentionInHours
* DataRetentionInHours `integer`

### DeleteAccountRequest
* DeleteAccountRequest `object`

### DeleteAccountResponse
* DeleteAccountResponse `object`

### DeleteAppInstanceAdminRequest
* DeleteAppInstanceAdminRequest `object`

### DeleteAppInstanceRequest
* DeleteAppInstanceRequest `object`

### DeleteAppInstanceStreamingConfigurationsRequest
* DeleteAppInstanceStreamingConfigurationsRequest `object`

### DeleteAppInstanceUserRequest
* DeleteAppInstanceUserRequest `object`

### DeleteAttendeeRequest
* DeleteAttendeeRequest `object`

### DeleteChannelBanRequest
* DeleteChannelBanRequest `object`

### DeleteChannelMembershipRequest
* DeleteChannelMembershipRequest `object`

### DeleteChannelMessageRequest
* DeleteChannelMessageRequest `object`

### DeleteChannelModeratorRequest
* DeleteChannelModeratorRequest `object`

### DeleteChannelRequest
* DeleteChannelRequest `object`

### DeleteEventsConfigurationRequest
* DeleteEventsConfigurationRequest `object`

### DeleteMeetingRequest
* DeleteMeetingRequest `object`

### DeletePhoneNumberRequest
* DeletePhoneNumberRequest `object`

### DeleteProxySessionRequest
* DeleteProxySessionRequest `object`

### DeleteRoomMembershipRequest
* DeleteRoomMembershipRequest `object`

### DeleteRoomRequest
* DeleteRoomRequest `object`

### DeleteSipMediaApplicationRequest
* DeleteSipMediaApplicationRequest `object`

### DeleteSipRuleRequest
* DeleteSipRuleRequest `object`

### DeleteVoiceConnectorEmergencyCallingConfigurationRequest
* DeleteVoiceConnectorEmergencyCallingConfigurationRequest `object`

### DeleteVoiceConnectorGroupRequest
* DeleteVoiceConnectorGroupRequest `object`

### DeleteVoiceConnectorOriginationRequest
* DeleteVoiceConnectorOriginationRequest `object`

### DeleteVoiceConnectorProxyRequest
* DeleteVoiceConnectorProxyRequest `object`

### DeleteVoiceConnectorRequest
* DeleteVoiceConnectorRequest `object`

### DeleteVoiceConnectorStreamingConfigurationRequest
* DeleteVoiceConnectorStreamingConfigurationRequest `object`

### DeleteVoiceConnectorTerminationCredentialsRequest
* DeleteVoiceConnectorTerminationCredentialsRequest `object`
  * Usernames **required**
    * items [SensitiveString](#sensitivestring)

### DeleteVoiceConnectorTerminationRequest
* DeleteVoiceConnectorTerminationRequest `object`

### DescribeAppInstanceAdminRequest
* DescribeAppInstanceAdminRequest `object`

### DescribeAppInstanceAdminResponse
* DescribeAppInstanceAdminResponse `object`
  * AppInstanceAdmin
    * Admin
      * Arn
      * Name
    * AppInstanceArn
    * CreatedTimestamp

### DescribeAppInstanceRequest
* DescribeAppInstanceRequest `object`

### DescribeAppInstanceResponse
* DescribeAppInstanceResponse `object`
  * AppInstance
    * AppInstanceArn
    * CreatedTimestamp
    * LastUpdatedTimestamp
    * Metadata
    * Name

### DescribeAppInstanceUserRequest
* DescribeAppInstanceUserRequest `object`

### DescribeAppInstanceUserResponse
* DescribeAppInstanceUserResponse `object`
  * AppInstanceUser
    * AppInstanceUserArn
    * CreatedTimestamp
    * LastUpdatedTimestamp
    * Metadata
    * Name

### DescribeChannelBanRequest
* DescribeChannelBanRequest `object`

### DescribeChannelBanResponse
* DescribeChannelBanResponse `object`
  * ChannelBan
    * ChannelArn
    * CreatedBy
      * Arn
      * Name
    * CreatedTimestamp
    * Member
      * Arn
      * Name

### DescribeChannelMembershipForAppInstanceUserRequest
* DescribeChannelMembershipForAppInstanceUserRequest `object`

### DescribeChannelMembershipForAppInstanceUserResponse
* DescribeChannelMembershipForAppInstanceUserResponse `object`
  * ChannelMembership
    * AppInstanceUserMembershipSummary
      * ReadMarkerTimestamp
      * Type
    * ChannelSummary [ChannelSummary](#channelsummary)

### DescribeChannelMembershipRequest
* DescribeChannelMembershipRequest `object`

### DescribeChannelMembershipResponse
* DescribeChannelMembershipResponse `object`
  * ChannelMembership
    * ChannelArn
    * CreatedTimestamp
    * InvitedBy
      * Arn
      * Name
    * LastUpdatedTimestamp
    * Member
      * Arn
      * Name
    * Type

### DescribeChannelModeratedByAppInstanceUserRequest
* DescribeChannelModeratedByAppInstanceUserRequest `object`

### DescribeChannelModeratedByAppInstanceUserResponse
* DescribeChannelModeratedByAppInstanceUserResponse `object`
  * Channel
    * ChannelSummary [ChannelSummary](#channelsummary)

### DescribeChannelModeratorRequest
* DescribeChannelModeratorRequest `object`

### DescribeChannelModeratorResponse
* DescribeChannelModeratorResponse `object`
  * ChannelModerator
    * ChannelArn
    * CreatedBy
      * Arn
      * Name
    * CreatedTimestamp
    * Moderator
      * Arn
      * Name

### DescribeChannelRequest
* DescribeChannelRequest `object`

### DescribeChannelResponse
* DescribeChannelResponse `object`
  * Channel
    * ChannelArn
    * CreatedBy
      * Arn
      * Name
    * CreatedTimestamp
    * LastMessageTimestamp
    * LastUpdatedTimestamp
    * Metadata
    * Mode
    * Name
    * Privacy

### DisassociatePhoneNumberFromUserRequest
* DisassociatePhoneNumberFromUserRequest `object`

### DisassociatePhoneNumberFromUserResponse
* DisassociatePhoneNumberFromUserResponse `object`

### DisassociatePhoneNumbersFromVoiceConnectorGroupRequest
* DisassociatePhoneNumbersFromVoiceConnectorGroupRequest `object`
  * E164PhoneNumbers **required**
    * items [E164PhoneNumber](#e164phonenumber)

### DisassociatePhoneNumbersFromVoiceConnectorGroupResponse
* DisassociatePhoneNumbersFromVoiceConnectorGroupResponse `object`
  * PhoneNumberErrors
    * items [PhoneNumberError](#phonenumbererror)

### DisassociatePhoneNumbersFromVoiceConnectorRequest
* DisassociatePhoneNumbersFromVoiceConnectorRequest `object`
  * E164PhoneNumbers **required**
    * items [E164PhoneNumber](#e164phonenumber)

### DisassociatePhoneNumbersFromVoiceConnectorResponse
* DisassociatePhoneNumbersFromVoiceConnectorResponse `object`
  * PhoneNumberErrors
    * items [PhoneNumberError](#phonenumbererror)

### DisassociateSigninDelegateGroupsFromAccountRequest
* DisassociateSigninDelegateGroupsFromAccountRequest `object`
  * GroupNames **required**
    * items [String](#string)

### DisassociateSigninDelegateGroupsFromAccountResponse
* DisassociateSigninDelegateGroupsFromAccountResponse `object`

### E164PhoneNumber
* E164PhoneNumber `string`

### E164PhoneNumberList
* E164PhoneNumberList `array`
  * items [E164PhoneNumber](#e164phonenumber)

### EmailAddress
* EmailAddress `string`

### EmailStatus
* EmailStatus `string` (values: NotSent, Sent, Failed)

### EmergencyCallingConfiguration
* EmergencyCallingConfiguration `object`: The emergency calling configuration details associated with an Amazon Chime Voice Connector.
  * DNIS
    * items [DNISEmergencyCallingConfiguration](#dnisemergencycallingconfiguration)

### ErrorCode
* ErrorCode `string` (values: BadRequest, Conflict, Forbidden, NotFound, PreconditionFailed, ResourceLimitExceeded, ServiceFailure, AccessDenied, ServiceUnavailable, Throttled, Throttling, Unauthorized, Unprocessable, VoiceConnectorGroupAssociationsExist, PhoneNumberAssociationsExist)

### EventsConfiguration
* EventsConfiguration `object`: The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.
  * BotId
  * LambdaFunctionArn
  * OutboundEventsHTTPSEndpoint

### ExternalMeetingIdType
* ExternalMeetingIdType `string`

### ExternalUserIdType
* ExternalUserIdType `string`

### ForbiddenException


### FunctionArn
* FunctionArn `string`

### GeoMatchLevel
* GeoMatchLevel `string` (values: Country, AreaCode)

### GeoMatchParams
* GeoMatchParams `object`: The country and area code for a proxy phone number in a proxy phone session.
  * AreaCode **required**
  * Country **required**

### GetAccountRequest
* GetAccountRequest `object`

### GetAccountResponse
* GetAccountResponse `object`
  * Account [Account](#account)

### GetAccountSettingsRequest
* GetAccountSettingsRequest `object`

### GetAccountSettingsResponse
* GetAccountSettingsResponse `object`
  * AccountSettings
    * DisableRemoteControl
    * EnableDialOut

### GetAppInstanceRetentionSettingsRequest
* GetAppInstanceRetentionSettingsRequest `object`

### GetAppInstanceRetentionSettingsResponse
* GetAppInstanceRetentionSettingsResponse `object`
  * AppInstanceRetentionSettings
    * ChannelRetentionSettings
      * RetentionDays
  * InitiateDeletionTimestamp

### GetAppInstanceStreamingConfigurationsRequest
* GetAppInstanceStreamingConfigurationsRequest `object`

### GetAppInstanceStreamingConfigurationsResponse
* GetAppInstanceStreamingConfigurationsResponse `object`
  * AppInstanceStreamingConfigurations
    * items [AppInstanceStreamingConfiguration](#appinstancestreamingconfiguration)

### GetAttendeeRequest
* GetAttendeeRequest `object`

### GetAttendeeResponse
* GetAttendeeResponse `object`
  * Attendee
    * AttendeeId
    * ExternalUserId
    * JoinToken

### GetBotRequest
* GetBotRequest `object`

### GetBotResponse
* GetBotResponse `object`
  * Bot
    * BotEmail
    * BotId
    * BotType
    * CreatedTimestamp
    * Disabled
    * DisplayName
    * SecurityToken
    * UpdatedTimestamp
    * UserId

### GetChannelMessageRequest
* GetChannelMessageRequest `object`

### GetChannelMessageResponse
* GetChannelMessageResponse `object`
  * ChannelMessage
    * ChannelArn
    * Content
    * CreatedTimestamp
    * LastEditedTimestamp
    * LastUpdatedTimestamp
    * MessageId
    * Metadata
    * Persistence [ChannelMessagePersistenceType](#channelmessagepersistencetype)
    * Redacted
    * Sender
      * Arn
      * Name
    * Type

### GetEventsConfigurationRequest
* GetEventsConfigurationRequest `object`

### GetEventsConfigurationResponse
* GetEventsConfigurationResponse `object`
  * EventsConfiguration
    * BotId
    * LambdaFunctionArn
    * OutboundEventsHTTPSEndpoint

### GetGlobalSettingsResponse
* GetGlobalSettingsResponse `object`
  * BusinessCalling
    * CdrBucket
  * VoiceConnector
    * CdrBucket

### GetMeetingRequest
* GetMeetingRequest `object`

### GetMeetingResponse
* GetMeetingResponse `object`
  * Meeting
    * ExternalMeetingId
    * MediaPlacement
      * AudioFallbackUrl
      * AudioHostUrl
      * ScreenDataUrl
      * ScreenSharingUrl
      * ScreenViewingUrl
      * SignalingUrl
      * TurnControlUrl
    * MediaRegion
    * MeetingId

### GetMessagingSessionEndpointRequest
* GetMessagingSessionEndpointRequest `object`

### GetMessagingSessionEndpointResponse
* GetMessagingSessionEndpointResponse `object`
  * Endpoint
    * Url

### GetPhoneNumberOrderRequest
* GetPhoneNumberOrderRequest `object`

### GetPhoneNumberOrderResponse
* GetPhoneNumberOrderResponse `object`
  * PhoneNumberOrder
    * CreatedTimestamp
    * OrderedPhoneNumbers
      * items [OrderedPhoneNumber](#orderedphonenumber)
    * PhoneNumberOrderId
    * ProductType
    * Status
    * UpdatedTimestamp

### GetPhoneNumberRequest
* GetPhoneNumberRequest `object`

### GetPhoneNumberResponse
* GetPhoneNumberResponse `object`
  * PhoneNumber
    * Associations
      * items [PhoneNumberAssociation](#phonenumberassociation)
    * CallingName
    * CallingNameStatus
    * Capabilities
      * InboundCall
      * InboundMMS
      * InboundSMS
      * OutboundCall
      * OutboundMMS
      * OutboundSMS
    * CreatedTimestamp
    * DeletionTimestamp
    * E164PhoneNumber
    * PhoneNumberId
    * ProductType
    * Status
    * Type
    * UpdatedTimestamp

### GetPhoneNumberSettingsResponse
* GetPhoneNumberSettingsResponse `object`
  * CallingName
  * CallingNameUpdatedTimestamp

### GetProxySessionRequest
* GetProxySessionRequest `object`

### GetProxySessionResponse
* GetProxySessionResponse `object`
  * ProxySession
    * Capabilities
      * items [Capability](#capability)
    * CreatedTimestamp
    * EndedTimestamp
    * ExpiryMinutes
    * GeoMatchLevel
    * GeoMatchParams
      * AreaCode **required**
      * Country **required**
    * Name
    * NumberSelectionBehavior
    * Participants
      * items [Participant](#participant)
    * ProxySessionId
    * Status
    * UpdatedTimestamp
    * VoiceConnectorId

### GetRetentionSettingsRequest
* GetRetentionSettingsRequest `object`

### GetRetentionSettingsResponse
* GetRetentionSettingsResponse `object`
  * InitiateDeletionTimestamp
  * RetentionSettings
    * ConversationRetentionSettings
      * RetentionDays
    * RoomRetentionSettings
      * RetentionDays

### GetRoomRequest
* GetRoomRequest `object`

### GetRoomResponse
* GetRoomResponse `object`
  * Room
    * AccountId
    * CreatedBy
    * CreatedTimestamp
    * Name
    * RoomId
    * UpdatedTimestamp

### GetSipMediaApplicationLoggingConfigurationRequest
* GetSipMediaApplicationLoggingConfigurationRequest `object`

### GetSipMediaApplicationLoggingConfigurationResponse
* GetSipMediaApplicationLoggingConfigurationResponse `object`
  * SipMediaApplicationLoggingConfiguration
    * EnableSipMediaApplicationMessageLogs

### GetSipMediaApplicationRequest
* GetSipMediaApplicationRequest `object`

### GetSipMediaApplicationResponse
* GetSipMediaApplicationResponse `object`
  * SipMediaApplication
    * AwsRegion
    * CreatedTimestamp
    * Endpoints
      * items [SipMediaApplicationEndpoint](#sipmediaapplicationendpoint)
    * Name
    * SipMediaApplicationId
    * UpdatedTimestamp

### GetSipRuleRequest
* GetSipRuleRequest `object`

### GetSipRuleResponse
* GetSipRuleResponse `object`
  * SipRule
    * CreatedTimestamp
    * Disabled
    * Name
    * SipRuleId
    * TargetApplications
      * items [SipRuleTargetApplication](#sipruletargetapplication)
    * TriggerType
    * TriggerValue
    * UpdatedTimestamp

### GetUserRequest
* GetUserRequest `object`

### GetUserResponse
* GetUserResponse `object`
  * User
    * AccountId
    * AlexaForBusinessMetadata
      * AlexaForBusinessRoomArn
      * IsAlexaForBusinessEnabled
    * DisplayName
    * InvitedOn
    * LicenseType
    * PersonalPIN
    * PrimaryEmail
    * PrimaryProvisionedNumber
    * RegisteredOn
    * UserId **required**
    * UserInvitationStatus
    * UserRegistrationStatus
    * UserType

### GetUserSettingsRequest
* GetUserSettingsRequest `object`

### GetUserSettingsResponse
* GetUserSettingsResponse `object`
  * UserSettings
    * Telephony **required**
      * InboundCalling **required**
      * OutboundCalling **required**
      * SMS **required**

### GetVoiceConnectorEmergencyCallingConfigurationRequest
* GetVoiceConnectorEmergencyCallingConfigurationRequest `object`

### GetVoiceConnectorEmergencyCallingConfigurationResponse
* GetVoiceConnectorEmergencyCallingConfigurationResponse `object`
  * EmergencyCallingConfiguration
    * DNIS
      * items [DNISEmergencyCallingConfiguration](#dnisemergencycallingconfiguration)

### GetVoiceConnectorGroupRequest
* GetVoiceConnectorGroupRequest `object`

### GetVoiceConnectorGroupResponse
* GetVoiceConnectorGroupResponse `object`
  * VoiceConnectorGroup
    * CreatedTimestamp
    * Name
    * UpdatedTimestamp
    * VoiceConnectorGroupId
    * VoiceConnectorItems
      * items [VoiceConnectorItem](#voiceconnectoritem)

### GetVoiceConnectorLoggingConfigurationRequest
* GetVoiceConnectorLoggingConfigurationRequest `object`

### GetVoiceConnectorLoggingConfigurationResponse
* GetVoiceConnectorLoggingConfigurationResponse `object`
  * LoggingConfiguration
    * EnableSIPLogs

### GetVoiceConnectorOriginationRequest
* GetVoiceConnectorOriginationRequest `object`

### GetVoiceConnectorOriginationResponse
* GetVoiceConnectorOriginationResponse `object`
  * Origination
    * Disabled
    * Routes
      * items [OriginationRoute](#originationroute)

### GetVoiceConnectorProxyRequest
* GetVoiceConnectorProxyRequest `object`

### GetVoiceConnectorProxyResponse
* GetVoiceConnectorProxyResponse `object`
  * Proxy
    * DefaultSessionExpiryMinutes
    * Disabled
    * FallBackPhoneNumber
    * PhoneNumberCountries
      * items [String](#string)

### GetVoiceConnectorRequest
* GetVoiceConnectorRequest `object`

### GetVoiceConnectorResponse
* GetVoiceConnectorResponse `object`
  * VoiceConnector
    * AwsRegion
    * CreatedTimestamp
    * Name
    * OutboundHostName
    * RequireEncryption
    * UpdatedTimestamp
    * VoiceConnectorId

### GetVoiceConnectorStreamingConfigurationRequest
* GetVoiceConnectorStreamingConfigurationRequest `object`

### GetVoiceConnectorStreamingConfigurationResponse
* GetVoiceConnectorStreamingConfigurationResponse `object`
  * StreamingConfiguration
    * DataRetentionInHours **required**
    * Disabled
    * StreamingNotificationTargets
      * items [StreamingNotificationTarget](#streamingnotificationtarget)

### GetVoiceConnectorTerminationHealthRequest
* GetVoiceConnectorTerminationHealthRequest `object`

### GetVoiceConnectorTerminationHealthResponse
* GetVoiceConnectorTerminationHealthResponse `object`
  * TerminationHealth
    * Source
    * Timestamp

### GetVoiceConnectorTerminationRequest
* GetVoiceConnectorTerminationRequest `object`

### GetVoiceConnectorTerminationResponse
* GetVoiceConnectorTerminationResponse `object`
  * Termination
    * CallingRegions
      * items [CallingRegion](#callingregion)
    * CidrAllowedList
      * items [String](#string)
    * CpsLimit
    * DefaultPhoneNumber
    * Disabled

### GuidString
* GuidString `string`

### Identity
* Identity `object`: The ARN and name of a user.
  * Arn
  * Name

### Integer
* Integer `integer`

### Invite
* Invite `object`: Invitation object returned after emailing users to invite them to join the Amazon Chime <code>Team</code> account.
  * EmailAddress
  * EmailStatus
  * InviteId
  * Status

### InviteList
* InviteList `array`
  * items [Invite](#invite)

### InviteStatus
* InviteStatus `string` (values: Pending, Accepted, Failed)

### InviteUsersRequest
* InviteUsersRequest `object`
  * UserEmailList **required**
    * items [EmailAddress](#emailaddress)
  * UserType

### InviteUsersResponse
* InviteUsersResponse `object`
  * Invites
    * items [Invite](#invite)

### Iso8601Timestamp
* Iso8601Timestamp `string`

### JoinTokenString
* JoinTokenString `string`

### License
* License `string` (values: Basic, Plus, Pro, ProTrial)

### LicenseList
* LicenseList `array`
  * items [License](#license)

### ListAccountsRequest
* ListAccountsRequest `object`

### ListAccountsResponse
* ListAccountsResponse `object`
  * Accounts
    * items [Account](#account)
  * NextToken

### ListAppInstanceAdminsRequest
* ListAppInstanceAdminsRequest `object`

### ListAppInstanceAdminsResponse
* ListAppInstanceAdminsResponse `object`
  * AppInstanceAdmins
    * items [AppInstanceAdminSummary](#appinstanceadminsummary)
  * AppInstanceArn
  * NextToken

### ListAppInstanceUsersRequest
* ListAppInstanceUsersRequest `object`

### ListAppInstanceUsersResponse
* ListAppInstanceUsersResponse `object`
  * AppInstanceArn
  * AppInstanceUsers
    * items [AppInstanceUserSummary](#appinstanceusersummary)
  * NextToken

### ListAppInstancesRequest
* ListAppInstancesRequest `object`

### ListAppInstancesResponse
* ListAppInstancesResponse `object`
  * AppInstances
    * items [AppInstanceSummary](#appinstancesummary)
  * NextToken

### ListAttendeeTagsRequest
* ListAttendeeTagsRequest `object`

### ListAttendeeTagsResponse
* ListAttendeeTagsResponse `object`
  * Tags
    * items [Tag](#tag)

### ListAttendeesRequest
* ListAttendeesRequest `object`

### ListAttendeesResponse
* ListAttendeesResponse `object`
  * Attendees
    * items [Attendee](#attendee)
  * NextToken

### ListBotsRequest
* ListBotsRequest `object`

### ListBotsResponse
* ListBotsResponse `object`
  * Bots
    * items [Bot](#bot)
  * NextToken

### ListChannelBansRequest
* ListChannelBansRequest `object`

### ListChannelBansResponse
* ListChannelBansResponse `object`
  * ChannelArn
  * ChannelBans
    * items [ChannelBanSummary](#channelbansummary)
  * NextToken

### ListChannelMembershipsForAppInstanceUserRequest
* ListChannelMembershipsForAppInstanceUserRequest `object`

### ListChannelMembershipsForAppInstanceUserResponse
* ListChannelMembershipsForAppInstanceUserResponse `object`
  * ChannelMemberships
    * items [ChannelMembershipForAppInstanceUserSummary](#channelmembershipforappinstanceusersummary)
  * NextToken

### ListChannelMembershipsRequest
* ListChannelMembershipsRequest `object`

### ListChannelMembershipsResponse
* ListChannelMembershipsResponse `object`
  * ChannelArn
  * ChannelMemberships
    * items [ChannelMembershipSummary](#channelmembershipsummary)
  * NextToken

### ListChannelMessagesRequest
* ListChannelMessagesRequest `object`

### ListChannelMessagesResponse
* ListChannelMessagesResponse `object`
  * ChannelArn
  * ChannelMessages
    * items [ChannelMessageSummary](#channelmessagesummary)
  * NextToken

### ListChannelModeratorsRequest
* ListChannelModeratorsRequest `object`

### ListChannelModeratorsResponse
* ListChannelModeratorsResponse `object`
  * ChannelArn
  * ChannelModerators
    * items [ChannelModeratorSummary](#channelmoderatorsummary)
  * NextToken

### ListChannelsModeratedByAppInstanceUserRequest
* ListChannelsModeratedByAppInstanceUserRequest `object`

### ListChannelsModeratedByAppInstanceUserResponse
* ListChannelsModeratedByAppInstanceUserResponse `object`
  * Channels
    * items [ChannelModeratedByAppInstanceUserSummary](#channelmoderatedbyappinstanceusersummary)
  * NextToken

### ListChannelsRequest
* ListChannelsRequest `object`

### ListChannelsResponse
* ListChannelsResponse `object`
  * Channels
    * items [ChannelSummary](#channelsummary)
  * NextToken

### ListMeetingTagsRequest
* ListMeetingTagsRequest `object`

### ListMeetingTagsResponse
* ListMeetingTagsResponse `object`
  * Tags
    * items [Tag](#tag)

### ListMeetingsRequest
* ListMeetingsRequest `object`

### ListMeetingsResponse
* ListMeetingsResponse `object`
  * Meetings
    * items [Meeting](#meeting)
  * NextToken

### ListPhoneNumberOrdersRequest
* ListPhoneNumberOrdersRequest `object`

### ListPhoneNumberOrdersResponse
* ListPhoneNumberOrdersResponse `object`
  * NextToken
  * PhoneNumberOrders
    * items [PhoneNumberOrder](#phonenumberorder)

### ListPhoneNumbersRequest
* ListPhoneNumbersRequest `object`

### ListPhoneNumbersResponse
* ListPhoneNumbersResponse `object`
  * NextToken
  * PhoneNumbers
    * items [PhoneNumber](#phonenumber)

### ListProxySessionsRequest
* ListProxySessionsRequest `object`

### ListProxySessionsResponse
* ListProxySessionsResponse `object`
  * NextToken
  * ProxySessions
    * items [ProxySession](#proxysession)

### ListRoomMembershipsRequest
* ListRoomMembershipsRequest `object`

### ListRoomMembershipsResponse
* ListRoomMembershipsResponse `object`
  * NextToken
  * RoomMemberships
    * items [RoomMembership](#roommembership)

### ListRoomsRequest
* ListRoomsRequest `object`

### ListRoomsResponse
* ListRoomsResponse `object`
  * NextToken
  * Rooms
    * items [Room](#room)

### ListSipMediaApplicationsRequest
* ListSipMediaApplicationsRequest `object`

### ListSipMediaApplicationsResponse
* ListSipMediaApplicationsResponse `object`
  * NextToken
  * SipMediaApplications
    * items [SipMediaApplication](#sipmediaapplication)

### ListSipRulesRequest
* ListSipRulesRequest `object`

### ListSipRulesResponse
* ListSipRulesResponse `object`
  * NextToken
  * SipRules
    * items [SipRule](#siprule)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### ListUsersRequest
* ListUsersRequest `object`

### ListUsersResponse
* ListUsersResponse `object`
  * NextToken
  * Users
    * items [User](#user)

### ListVoiceConnectorGroupsRequest
* ListVoiceConnectorGroupsRequest `object`

### ListVoiceConnectorGroupsResponse
* ListVoiceConnectorGroupsResponse `object`
  * NextToken
  * VoiceConnectorGroups
    * items [VoiceConnectorGroup](#voiceconnectorgroup)

### ListVoiceConnectorTerminationCredentialsRequest
* ListVoiceConnectorTerminationCredentialsRequest `object`

### ListVoiceConnectorTerminationCredentialsResponse
* ListVoiceConnectorTerminationCredentialsResponse `object`
  * Usernames
    * items [SensitiveString](#sensitivestring)

### ListVoiceConnectorsRequest
* ListVoiceConnectorsRequest `object`

### ListVoiceConnectorsResponse
* ListVoiceConnectorsResponse `object`
  * NextToken
  * VoiceConnectors
    * items [VoiceConnector](#voiceconnector)

### LoggingConfiguration
* LoggingConfiguration `object`: The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
  * EnableSIPLogs

### LogoutUserRequest
* LogoutUserRequest `object`

### LogoutUserResponse
* LogoutUserResponse `object`

### MaxResults
* MaxResults `integer`

### MediaPlacement
* MediaPlacement `object`: A set of endpoints used by clients to connect to the media service group for a Amazon Chime SDK meeting.
  * AudioFallbackUrl
  * AudioHostUrl
  * ScreenDataUrl
  * ScreenSharingUrl
  * ScreenViewingUrl
  * SignalingUrl
  * TurnControlUrl

### Meeting
* Meeting `object`: A meeting created using the Amazon Chime SDK.
  * ExternalMeetingId
  * MediaPlacement
    * AudioFallbackUrl
    * AudioHostUrl
    * ScreenDataUrl
    * ScreenSharingUrl
    * ScreenViewingUrl
    * SignalingUrl
    * TurnControlUrl
  * MediaRegion
  * MeetingId

### MeetingList
* MeetingList `array`
  * items [Meeting](#meeting)

### MeetingNotificationConfiguration
* MeetingNotificationConfiguration `object`: The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).
  * SnsTopicArn
  * SqsQueueArn

### MeetingTagKeyList
* MeetingTagKeyList `array`
  * items [TagKey](#tagkey)

### MeetingTagList
* MeetingTagList `array`
  * items [Tag](#tag)

### Member
* Member `object`: The member details, such as email address, name, member ID, and member type.
  * AccountId
  * Email
  * FullName
  * MemberId
  * MemberType

### MemberError
* MemberError `object`: The list of errors returned when a member action results in an error.
  * ErrorCode
  * ErrorMessage
  * MemberId

### MemberErrorList
* MemberErrorList `array`
  * items [MemberError](#membererror)

### MemberType
* MemberType `string` (values: User, Bot, Webhook)

### MembershipItem
* MembershipItem `object`: Membership details, such as member ID and member role.
  * MemberId
  * Role

### MembershipItemList
* MembershipItemList `array`
  * items [MembershipItem](#membershipitem)

### MessageId
* MessageId `string`

### MessagingSessionEndpoint
* MessagingSessionEndpoint `object`: The endpoint of a meeting session.
  * Url

### Metadata
* Metadata `string`

### NextToken
* NextToken `string`

### NextTokenString
* NextTokenString `string`

### NonEmptyContent
* NonEmptyContent `string`

### NonEmptyResourceName
* NonEmptyResourceName `string`

### NonEmptyString
* NonEmptyString `string`

### NonEmptyString128
* NonEmptyString128 `string`

### NonEmptyStringList
* NonEmptyStringList `array`
  * items [String](#string)

### NonNullableBoolean
* NonNullableBoolean `boolean`

### NotFoundException


### NotificationTarget
* NotificationTarget `string` (values: EventBridge, SNS, SQS)

### NullableBoolean
* NullableBoolean `boolean`

### NumberSelectionBehavior
* NumberSelectionBehavior `string` (values: PreferSticky, AvoidSticky)

### OrderedPhoneNumber
* OrderedPhoneNumber `object`: A phone number for which an order has been placed.
  * E164PhoneNumber
  * Status

### OrderedPhoneNumberList
* OrderedPhoneNumberList `array`
  * items [OrderedPhoneNumber](#orderedphonenumber)

### OrderedPhoneNumberStatus
* OrderedPhoneNumberStatus `string` (values: Processing, Acquired, Failed)

### Origination
* Origination `object`: Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.
  * Disabled
  * Routes
    * items [OriginationRoute](#originationroute)

### OriginationRoute
* OriginationRoute `object`: Origination routes define call distribution properties for your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each Amazon Chime Voice Connector.
  * Host
  * Port
  * Priority
  * Protocol
  * Weight

### OriginationRouteList
* OriginationRouteList `array`
  * items [OriginationRoute](#originationroute)

### OriginationRoutePriority
* OriginationRoutePriority `integer`

### OriginationRouteProtocol
* OriginationRouteProtocol `string` (values: TCP, UDP)

### OriginationRouteWeight
* OriginationRouteWeight `integer`

### Participant
* Participant `object`: The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session.
  * PhoneNumber
  * ProxyPhoneNumber

### ParticipantPhoneNumberList
* ParticipantPhoneNumberList `array`
  * items [E164PhoneNumber](#e164phonenumber)

### Participants
* Participants `array`
  * items [Participant](#participant)

### PhoneNumber
* PhoneNumber `object`: A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector.
  * Associations
    * items [PhoneNumberAssociation](#phonenumberassociation)
  * CallingName
  * CallingNameStatus
  * Capabilities
    * InboundCall
    * InboundMMS
    * InboundSMS
    * OutboundCall
    * OutboundMMS
    * OutboundSMS
  * CreatedTimestamp
  * DeletionTimestamp
  * E164PhoneNumber
  * PhoneNumberId
  * ProductType
  * Status
  * Type
  * UpdatedTimestamp

### PhoneNumberAssociation
* PhoneNumberAssociation `object`: The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.
  * AssociatedTimestamp
  * Name
  * Value

### PhoneNumberAssociationList
* PhoneNumberAssociationList `array`
  * items [PhoneNumberAssociation](#phonenumberassociation)

### PhoneNumberAssociationName
* PhoneNumberAssociationName `string` (values: AccountId, UserId, VoiceConnectorId, VoiceConnectorGroupId, SipRuleId)

### PhoneNumberCapabilities
* PhoneNumberCapabilities `object`: The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging.
  * InboundCall
  * InboundMMS
  * InboundSMS
  * OutboundCall
  * OutboundMMS
  * OutboundSMS

### PhoneNumberError
* PhoneNumberError `object`: If the phone number action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
  * ErrorCode
  * ErrorMessage
  * PhoneNumberId

### PhoneNumberErrorList
* PhoneNumberErrorList `array`
  * items [PhoneNumberError](#phonenumbererror)

### PhoneNumberList
* PhoneNumberList `array`
  * items [PhoneNumber](#phonenumber)

### PhoneNumberMaxResults
* PhoneNumberMaxResults `integer`

### PhoneNumberOrder
* PhoneNumberOrder `object`: The details of a phone number order created for Amazon Chime.
  * CreatedTimestamp
  * OrderedPhoneNumbers
    * items [OrderedPhoneNumber](#orderedphonenumber)
  * PhoneNumberOrderId
  * ProductType
  * Status
  * UpdatedTimestamp

### PhoneNumberOrderList
* PhoneNumberOrderList `array`
  * items [PhoneNumberOrder](#phonenumberorder)

### PhoneNumberOrderStatus
* PhoneNumberOrderStatus `string` (values: Processing, Successful, Failed, Partial)

### PhoneNumberProductType
* PhoneNumberProductType `string` (values: BusinessCalling, VoiceConnector)

### PhoneNumberStatus
* PhoneNumberStatus `string` (values: AcquireInProgress, AcquireFailed, Unassigned, Assigned, ReleaseInProgress, DeleteInProgress, ReleaseFailed, DeleteFailed)

### PhoneNumberType
* PhoneNumberType `string` (values: Local, TollFree)

### Port
* Port `integer`

### PositiveInteger
* PositiveInteger `integer`

### ProfileServiceMaxResults
* ProfileServiceMaxResults `integer`

### Proxy
* Proxy `object`: The proxy configuration for an Amazon Chime Voice Connector.
  * DefaultSessionExpiryMinutes
  * Disabled
  * FallBackPhoneNumber
  * PhoneNumberCountries
    * items [String](#string)

### ProxySession
* ProxySession `object`: The proxy session for an Amazon Chime Voice Connector.
  * Capabilities
    * items [Capability](#capability)
  * CreatedTimestamp
  * EndedTimestamp
  * ExpiryMinutes
  * GeoMatchLevel
  * GeoMatchParams
    * AreaCode **required**
    * Country **required**
  * Name
  * NumberSelectionBehavior
  * Participants
    * items [Participant](#participant)
  * ProxySessionId
  * Status
  * UpdatedTimestamp
  * VoiceConnectorId

### ProxySessionNameString
* ProxySessionNameString `string`

### ProxySessionStatus
* ProxySessionStatus `string` (values: Open, InProgress, Closed)

### ProxySessions
* ProxySessions `array`
  * items [ProxySession](#proxysession)

### PutAppInstanceRetentionSettingsRequest
* PutAppInstanceRetentionSettingsRequest `object`
  * AppInstanceRetentionSettings **required**
    * ChannelRetentionSettings
      * RetentionDays

### PutAppInstanceRetentionSettingsResponse
* PutAppInstanceRetentionSettingsResponse `object`
  * AppInstanceRetentionSettings
    * ChannelRetentionSettings
      * RetentionDays
  * InitiateDeletionTimestamp

### PutAppInstanceStreamingConfigurationsRequest
* PutAppInstanceStreamingConfigurationsRequest `object`
  * AppInstanceStreamingConfigurations **required**
    * items [AppInstanceStreamingConfiguration](#appinstancestreamingconfiguration)

### PutAppInstanceStreamingConfigurationsResponse
* PutAppInstanceStreamingConfigurationsResponse `object`
  * AppInstanceStreamingConfigurations
    * items [AppInstanceStreamingConfiguration](#appinstancestreamingconfiguration)

### PutEventsConfigurationRequest
* PutEventsConfigurationRequest `object`
  * LambdaFunctionArn
  * OutboundEventsHTTPSEndpoint

### PutEventsConfigurationResponse
* PutEventsConfigurationResponse `object`
  * EventsConfiguration [EventsConfiguration](#eventsconfiguration)

### PutRetentionSettingsRequest
* PutRetentionSettingsRequest `object`
  * RetentionSettings **required**
    * ConversationRetentionSettings
      * RetentionDays
    * RoomRetentionSettings
      * RetentionDays

### PutRetentionSettingsResponse
* PutRetentionSettingsResponse `object`
  * InitiateDeletionTimestamp
  * RetentionSettings
    * ConversationRetentionSettings
      * RetentionDays
    * RoomRetentionSettings
      * RetentionDays

### PutSipMediaApplicationLoggingConfigurationRequest
* PutSipMediaApplicationLoggingConfigurationRequest `object`
  * SipMediaApplicationLoggingConfiguration
    * EnableSipMediaApplicationMessageLogs

### PutSipMediaApplicationLoggingConfigurationResponse
* PutSipMediaApplicationLoggingConfigurationResponse `object`
  * SipMediaApplicationLoggingConfiguration
    * EnableSipMediaApplicationMessageLogs

### PutVoiceConnectorEmergencyCallingConfigurationRequest
* PutVoiceConnectorEmergencyCallingConfigurationRequest `object`
  * EmergencyCallingConfiguration **required**
    * DNIS
      * items [DNISEmergencyCallingConfiguration](#dnisemergencycallingconfiguration)

### PutVoiceConnectorEmergencyCallingConfigurationResponse
* PutVoiceConnectorEmergencyCallingConfigurationResponse `object`
  * EmergencyCallingConfiguration
    * DNIS
      * items [DNISEmergencyCallingConfiguration](#dnisemergencycallingconfiguration)

### PutVoiceConnectorLoggingConfigurationRequest
* PutVoiceConnectorLoggingConfigurationRequest `object`
  * LoggingConfiguration **required**
    * EnableSIPLogs

### PutVoiceConnectorLoggingConfigurationResponse
* PutVoiceConnectorLoggingConfigurationResponse `object`
  * LoggingConfiguration
    * EnableSIPLogs

### PutVoiceConnectorOriginationRequest
* PutVoiceConnectorOriginationRequest `object`
  * Origination **required**
    * Disabled
    * Routes
      * items [OriginationRoute](#originationroute)

### PutVoiceConnectorOriginationResponse
* PutVoiceConnectorOriginationResponse `object`
  * Origination
    * Disabled
    * Routes
      * items [OriginationRoute](#originationroute)

### PutVoiceConnectorProxyRequest
* PutVoiceConnectorProxyRequest `object`
  * DefaultSessionExpiryMinutes **required**
  * Disabled
  * FallBackPhoneNumber
  * PhoneNumberPoolCountries **required**
    * items [Country](#country)

### PutVoiceConnectorProxyResponse
* PutVoiceConnectorProxyResponse `object`
  * Proxy
    * DefaultSessionExpiryMinutes
    * Disabled
    * FallBackPhoneNumber
    * PhoneNumberCountries
      * items [String](#string)

### PutVoiceConnectorStreamingConfigurationRequest
* PutVoiceConnectorStreamingConfigurationRequest `object`
  * StreamingConfiguration **required**
    * DataRetentionInHours **required**
    * Disabled
    * StreamingNotificationTargets
      * items [StreamingNotificationTarget](#streamingnotificationtarget)

### PutVoiceConnectorStreamingConfigurationResponse
* PutVoiceConnectorStreamingConfigurationResponse `object`
  * StreamingConfiguration
    * DataRetentionInHours **required**
    * Disabled
    * StreamingNotificationTargets
      * items [StreamingNotificationTarget](#streamingnotificationtarget)

### PutVoiceConnectorTerminationCredentialsRequest
* PutVoiceConnectorTerminationCredentialsRequest `object`
  * Credentials
    * items [Credential](#credential)

### PutVoiceConnectorTerminationRequest
* PutVoiceConnectorTerminationRequest `object`
  * Termination **required**
    * CallingRegions
      * items [CallingRegion](#callingregion)
    * CidrAllowedList
      * items [String](#string)
    * CpsLimit
    * DefaultPhoneNumber
    * Disabled

### PutVoiceConnectorTerminationResponse
* PutVoiceConnectorTerminationResponse `object`
  * Termination
    * CallingRegions
      * items [CallingRegion](#callingregion)
    * CidrAllowedList
      * items [String](#string)
    * CpsLimit
    * DefaultPhoneNumber
    * Disabled

### RedactChannelMessageRequest
* RedactChannelMessageRequest `object`

### RedactChannelMessageResponse
* RedactChannelMessageResponse `object`
  * ChannelArn
  * MessageId

### RedactConversationMessageRequest
* RedactConversationMessageRequest `object`

### RedactConversationMessageResponse
* RedactConversationMessageResponse `object`

### RedactRoomMessageRequest
* RedactRoomMessageRequest `object`

### RedactRoomMessageResponse
* RedactRoomMessageResponse `object`

### RegenerateSecurityTokenRequest
* RegenerateSecurityTokenRequest `object`

### RegenerateSecurityTokenResponse
* RegenerateSecurityTokenResponse `object`
  * Bot [Bot](#bot)

### RegistrationStatus
* RegistrationStatus `string` (values: Unregistered, Registered, Suspended)

### ResetPersonalPINRequest
* ResetPersonalPINRequest `object`

### ResetPersonalPINResponse
* ResetPersonalPINResponse `object`
  * User
    * AccountId
    * AlexaForBusinessMetadata
      * AlexaForBusinessRoomArn
      * IsAlexaForBusinessEnabled
    * DisplayName
    * InvitedOn
    * LicenseType
    * PersonalPIN
    * PrimaryEmail
    * PrimaryProvisionedNumber
    * RegisteredOn
    * UserId **required**
    * UserInvitationStatus
    * UserRegistrationStatus
    * UserType

### ResourceLimitExceededException


### ResourceName
* ResourceName `string`

### RestorePhoneNumberRequest
* RestorePhoneNumberRequest `object`

### RestorePhoneNumberResponse
* RestorePhoneNumberResponse `object`
  * PhoneNumber
    * Associations
      * items [PhoneNumberAssociation](#phonenumberassociation)
    * CallingName
    * CallingNameStatus
    * Capabilities
      * InboundCall
      * InboundMMS
      * InboundSMS
      * OutboundCall
      * OutboundMMS
      * OutboundSMS
    * CreatedTimestamp
    * DeletionTimestamp
    * E164PhoneNumber
    * PhoneNumberId
    * ProductType
    * Status
    * Type
    * UpdatedTimestamp

### ResultMax
* ResultMax `integer`

### RetentionDays
* RetentionDays `integer`

### RetentionSettings
* RetentionSettings `object`: The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages.
  * ConversationRetentionSettings
    * RetentionDays
  * RoomRetentionSettings
    * RetentionDays

### Room
* Room `object`: The Amazon Chime chat room details.
  * AccountId
  * CreatedBy
  * CreatedTimestamp
  * Name
  * RoomId
  * UpdatedTimestamp

### RoomList
* RoomList `array`
  * items [Room](#room)

### RoomMembership
* RoomMembership `object`: The room membership details.
  * InvitedBy
  * Member [Member](#member)
  * Role
  * RoomId
  * UpdatedTimestamp

### RoomMembershipList
* RoomMembershipList `array`
  * items [RoomMembership](#roommembership)

### RoomMembershipRole
* RoomMembershipRole `string` (values: Administrator, Member)

### RoomRetentionSettings
* RoomRetentionSettings `object`: The retention settings that determine how long to retain chat room messages for an Amazon Chime Enterprise account.
  * RetentionDays

### SearchAvailablePhoneNumbersRequest
* SearchAvailablePhoneNumbersRequest `object`

### SearchAvailablePhoneNumbersResponse
* SearchAvailablePhoneNumbersResponse `object`
  * E164PhoneNumbers
    * items [E164PhoneNumber](#e164phonenumber)

### SendChannelMessageRequest
* SendChannelMessageRequest `object`
  * ClientRequestToken **required**
  * Content **required**
  * Metadata
  * Persistence **required**
  * Type **required**

### SendChannelMessageResponse
* SendChannelMessageResponse `object`
  * ChannelArn
  * MessageId

### SensitiveString
* SensitiveString `string`

### SensitiveStringList
* SensitiveStringList `array`
  * items [SensitiveString](#sensitivestring)

### ServiceFailureException


### ServiceUnavailableException


### SigninDelegateGroup
* SigninDelegateGroup `object`: An Active Directory (AD) group whose members are granted permission to act as delegates.
  * GroupName

### SigninDelegateGroupList
* SigninDelegateGroupList `array`
  * items [SigninDelegateGroup](#signindelegategroup)

### SipApplicationPriority
* SipApplicationPriority `integer`

### SipMediaApplication
* SipMediaApplication `object`: The SIP media application details, including name and endpoints. An AWS account can have multiple SIP media applications.
  * AwsRegion
  * CreatedTimestamp
  * Endpoints
    * items [SipMediaApplicationEndpoint](#sipmediaapplicationendpoint)
  * Name
  * SipMediaApplicationId
  * UpdatedTimestamp

### SipMediaApplicationCall
* SipMediaApplicationCall `object`: A <code>Call</code> instance for a SIP media application.
  * TransactionId

### SipMediaApplicationEndpoint
* SipMediaApplicationEndpoint `object`: Endpoints to specify as part of a SIP media application.
  * LambdaArn

### SipMediaApplicationEndpointList
* SipMediaApplicationEndpointList `array`
  * items [SipMediaApplicationEndpoint](#sipmediaapplicationendpoint)

### SipMediaApplicationList
* SipMediaApplicationList `array`
  * items [SipMediaApplication](#sipmediaapplication)

### SipMediaApplicationLoggingConfiguration
* SipMediaApplicationLoggingConfiguration `object`: Logging configuration of the SIP media application.
  * EnableSipMediaApplicationMessageLogs

### SipMediaApplicationName
* SipMediaApplicationName `string`

### SipRule
* SipRule `object`: The SIP rule details, including name, triggers, and target applications. An AWS account can have multiple SIP rules.
  * CreatedTimestamp
  * Disabled
  * Name
  * SipRuleId
  * TargetApplications
    * items [SipRuleTargetApplication](#sipruletargetapplication)
  * TriggerType
  * TriggerValue
  * UpdatedTimestamp

### SipRuleList
* SipRuleList `array`
  * items [SipRule](#siprule)

### SipRuleName
* SipRuleName `string`

### SipRuleTargetApplication
* SipRuleTargetApplication `object`: Target SIP media application along with other details like priority and AWS Region to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided.
  * AwsRegion
  * Priority
  * SipMediaApplicationId

### SipRuleTargetApplicationList
* SipRuleTargetApplicationList `array`
  * items [SipRuleTargetApplication](#sipruletargetapplication)

### SipRuleTriggerType
* SipRuleTriggerType `string` (values: ToPhoneNumber, RequestUriHostname)

### SortOrder
* SortOrder `string` (values: ASCENDING, DESCENDING)

### StreamingConfiguration
* StreamingConfiguration `object`: The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.
  * DataRetentionInHours **required**
  * Disabled
  * StreamingNotificationTargets
    * items [StreamingNotificationTarget](#streamingnotificationtarget)

### StreamingNotificationTarget
* StreamingNotificationTarget `object`: The targeted recipient for a streaming configuration notification.
  * NotificationTarget **required**

### StreamingNotificationTargetList
* StreamingNotificationTargetList `array`
  * items [StreamingNotificationTarget](#streamingnotificationtarget)

### String
* String `string`

### String128
* String128 `string`

### StringList
* StringList `array`
  * items [String](#string)

### Tag
* Tag `object`: Describes a tag applied to a resource.
  * Key **required**
  * Value **required**

### TagAttendeeRequest
* TagAttendeeRequest `object`
  * Tags **required**
    * items [Tag](#tag)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagMeetingRequest
* TagMeetingRequest `object`
  * Tags **required**
    * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagValue
* TagValue `string`

### TelephonySettings
* TelephonySettings `object`: Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging.
  * InboundCalling **required**
  * OutboundCalling **required**
  * SMS **required**

### Termination
* Termination `object`: Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.
  * CallingRegions
    * items [CallingRegion](#callingregion)
  * CidrAllowedList
    * items [String](#string)
  * CpsLimit
  * DefaultPhoneNumber
  * Disabled

### TerminationHealth
* TerminationHealth `object`: The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure.
  * Source
  * Timestamp

### ThrottledClientException


### Timestamp
* Timestamp `string`

### TollFreePrefix
* TollFreePrefix `string`

### UnauthorizedClientException


### UnprocessableEntityException


### UntagAttendeeRequest
* UntagAttendeeRequest `object`
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagMeetingRequest
* UntagMeetingRequest `object`
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UpdateAccountRequest
* UpdateAccountRequest `object`
  * Name

### UpdateAccountResponse
* UpdateAccountResponse `object`
  * Account [Account](#account)

### UpdateAccountSettingsRequest
* UpdateAccountSettingsRequest `object`
  * AccountSettings **required**
    * DisableRemoteControl
    * EnableDialOut

### UpdateAccountSettingsResponse
* UpdateAccountSettingsResponse `object`

### UpdateAppInstanceRequest
* UpdateAppInstanceRequest `object`
  * Metadata
  * Name **required**

### UpdateAppInstanceResponse
* UpdateAppInstanceResponse `object`
  * AppInstanceArn

### UpdateAppInstanceUserRequest
* UpdateAppInstanceUserRequest `object`
  * Metadata
  * Name **required**

### UpdateAppInstanceUserResponse
* UpdateAppInstanceUserResponse `object`
  * AppInstanceUserArn

### UpdateBotRequest
* UpdateBotRequest `object`
  * Disabled

### UpdateBotResponse
* UpdateBotResponse `object`
  * Bot
    * BotEmail
    * BotId
    * BotType
    * CreatedTimestamp
    * Disabled
    * DisplayName
    * SecurityToken
    * UpdatedTimestamp
    * UserId

### UpdateChannelMessageRequest
* UpdateChannelMessageRequest `object`
  * Content
  * Metadata

### UpdateChannelMessageResponse
* UpdateChannelMessageResponse `object`
  * ChannelArn
  * MessageId

### UpdateChannelReadMarkerRequest
* UpdateChannelReadMarkerRequest `object`

### UpdateChannelReadMarkerResponse
* UpdateChannelReadMarkerResponse `object`
  * ChannelArn

### UpdateChannelRequest
* UpdateChannelRequest `object`
  * Metadata
  * Mode **required**
  * Name **required**

### UpdateChannelResponse
* UpdateChannelResponse `object`
  * ChannelArn

### UpdateGlobalSettingsRequest
* UpdateGlobalSettingsRequest `object`
  * BusinessCalling **required**
    * CdrBucket
  * VoiceConnector **required**
    * CdrBucket

### UpdatePhoneNumberRequest
* UpdatePhoneNumberRequest `object`
  * CallingName
  * ProductType

### UpdatePhoneNumberRequestItem
* UpdatePhoneNumberRequestItem `object`: The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.
  * CallingName
  * PhoneNumberId **required**
  * ProductType

### UpdatePhoneNumberRequestItemList
* UpdatePhoneNumberRequestItemList `array`
  * items [UpdatePhoneNumberRequestItem](#updatephonenumberrequestitem)

### UpdatePhoneNumberResponse
* UpdatePhoneNumberResponse `object`
  * PhoneNumber
    * Associations
      * items [PhoneNumberAssociation](#phonenumberassociation)
    * CallingName
    * CallingNameStatus
    * Capabilities
      * InboundCall
      * InboundMMS
      * InboundSMS
      * OutboundCall
      * OutboundMMS
      * OutboundSMS
    * CreatedTimestamp
    * DeletionTimestamp
    * E164PhoneNumber
    * PhoneNumberId
    * ProductType
    * Status
    * Type
    * UpdatedTimestamp

### UpdatePhoneNumberSettingsRequest
* UpdatePhoneNumberSettingsRequest `object`
  * CallingName **required**

### UpdateProxySessionRequest
* UpdateProxySessionRequest `object`
  * Capabilities **required**
    * items [Capability](#capability)
  * ExpiryMinutes

### UpdateProxySessionResponse
* UpdateProxySessionResponse `object`
  * ProxySession
    * Capabilities
      * items [Capability](#capability)
    * CreatedTimestamp
    * EndedTimestamp
    * ExpiryMinutes
    * GeoMatchLevel
    * GeoMatchParams
      * AreaCode **required**
      * Country **required**
    * Name
    * NumberSelectionBehavior
    * Participants
      * items [Participant](#participant)
    * ProxySessionId
    * Status
    * UpdatedTimestamp
    * VoiceConnectorId

### UpdateRoomMembershipRequest
* UpdateRoomMembershipRequest `object`
  * Role

### UpdateRoomMembershipResponse
* UpdateRoomMembershipResponse `object`
  * RoomMembership
    * InvitedBy
    * Member [Member](#member)
    * Role
    * RoomId
    * UpdatedTimestamp

### UpdateRoomRequest
* UpdateRoomRequest `object`
  * Name

### UpdateRoomResponse
* UpdateRoomResponse `object`
  * Room
    * AccountId
    * CreatedBy
    * CreatedTimestamp
    * Name
    * RoomId
    * UpdatedTimestamp

### UpdateSipMediaApplicationRequest
* UpdateSipMediaApplicationRequest `object`
  * Endpoints
    * items [SipMediaApplicationEndpoint](#sipmediaapplicationendpoint)
  * Name

### UpdateSipMediaApplicationResponse
* UpdateSipMediaApplicationResponse `object`
  * SipMediaApplication
    * AwsRegion
    * CreatedTimestamp
    * Endpoints
      * items [SipMediaApplicationEndpoint](#sipmediaapplicationendpoint)
    * Name
    * SipMediaApplicationId
    * UpdatedTimestamp

### UpdateSipRuleRequest
* UpdateSipRuleRequest `object`
  * Disabled
  * Name **required**
  * TargetApplications
    * items [SipRuleTargetApplication](#sipruletargetapplication)

### UpdateSipRuleResponse
* UpdateSipRuleResponse `object`
  * SipRule
    * CreatedTimestamp
    * Disabled
    * Name
    * SipRuleId
    * TargetApplications
      * items [SipRuleTargetApplication](#sipruletargetapplication)
    * TriggerType
    * TriggerValue
    * UpdatedTimestamp

### UpdateUserRequest
* UpdateUserRequest `object`
  * AlexaForBusinessMetadata
    * AlexaForBusinessRoomArn
    * IsAlexaForBusinessEnabled
  * LicenseType
  * UserType

### UpdateUserRequestItem
* UpdateUserRequestItem `object`: The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action.
  * AlexaForBusinessMetadata
    * AlexaForBusinessRoomArn
    * IsAlexaForBusinessEnabled
  * LicenseType
  * UserId **required**
  * UserType

### UpdateUserRequestItemList
* UpdateUserRequestItemList `array`
  * items [UpdateUserRequestItem](#updateuserrequestitem)

### UpdateUserResponse
* UpdateUserResponse `object`
  * User
    * AccountId
    * AlexaForBusinessMetadata
      * AlexaForBusinessRoomArn
      * IsAlexaForBusinessEnabled
    * DisplayName
    * InvitedOn
    * LicenseType
    * PersonalPIN
    * PrimaryEmail
    * PrimaryProvisionedNumber
    * RegisteredOn
    * UserId **required**
    * UserInvitationStatus
    * UserRegistrationStatus
    * UserType

### UpdateUserSettingsRequest
* UpdateUserSettingsRequest `object`
  * UserSettings **required**
    * Telephony **required**
      * InboundCalling **required**
      * OutboundCalling **required**
      * SMS **required**

### UpdateVoiceConnectorGroupRequest
* UpdateVoiceConnectorGroupRequest `object`
  * Name **required**
  * VoiceConnectorItems **required**
    * items [VoiceConnectorItem](#voiceconnectoritem)

### UpdateVoiceConnectorGroupResponse
* UpdateVoiceConnectorGroupResponse `object`
  * VoiceConnectorGroup
    * CreatedTimestamp
    * Name
    * UpdatedTimestamp
    * VoiceConnectorGroupId
    * VoiceConnectorItems
      * items [VoiceConnectorItem](#voiceconnectoritem)

### UpdateVoiceConnectorRequest
* UpdateVoiceConnectorRequest `object`
  * Name **required**
  * RequireEncryption **required**

### UpdateVoiceConnectorResponse
* UpdateVoiceConnectorResponse `object`
  * VoiceConnector
    * AwsRegion
    * CreatedTimestamp
    * Name
    * OutboundHostName
    * RequireEncryption
    * UpdatedTimestamp
    * VoiceConnectorId

### UriType
* UriType `string`

### UrlType
* UrlType `string`

### User
* User `object`: The user on the Amazon Chime account.
  * AccountId
  * AlexaForBusinessMetadata
    * AlexaForBusinessRoomArn
    * IsAlexaForBusinessEnabled
  * DisplayName
  * InvitedOn
  * LicenseType
  * PersonalPIN
  * PrimaryEmail
  * PrimaryProvisionedNumber
  * RegisteredOn
  * UserId **required**
  * UserInvitationStatus
  * UserRegistrationStatus
  * UserType

### UserEmailList
* UserEmailList `array`
  * items [EmailAddress](#emailaddress)

### UserError
* UserError `object`: The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages.
  * ErrorCode
  * ErrorMessage
  * UserId

### UserErrorList
* UserErrorList `array`
  * items [UserError](#usererror)

### UserId
* UserId `string`

### UserIdList
* UserIdList `array`
  * items [NonEmptyString](#nonemptystring)

### UserList
* UserList `array`
  * items [User](#user)

### UserName
* UserName `string`

### UserSettings
* UserSettings `object`: Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.
  * Telephony **required**
    * InboundCalling **required**
    * OutboundCalling **required**
    * SMS **required**

### UserType
* UserType `string` (values: PrivateUser, SharedDevice)

### VoiceConnector
* VoiceConnector `object`: The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings.
  * AwsRegion
  * CreatedTimestamp
  * Name
  * OutboundHostName
  * RequireEncryption
  * UpdatedTimestamp
  * VoiceConnectorId

### VoiceConnectorAwsRegion
* VoiceConnectorAwsRegion `string` (values: us-east-1, us-west-2)

### VoiceConnectorGroup
* VoiceConnectorGroup `object`: The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.
  * CreatedTimestamp
  * Name
  * UpdatedTimestamp
  * VoiceConnectorGroupId
  * VoiceConnectorItems
    * items [VoiceConnectorItem](#voiceconnectoritem)

### VoiceConnectorGroupList
* VoiceConnectorGroupList `array`
  * items [VoiceConnectorGroup](#voiceconnectorgroup)

### VoiceConnectorGroupName
* VoiceConnectorGroupName `string`

### VoiceConnectorItem
* VoiceConnectorItem `object`: For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3 <code>VoiceConnectorItems</code> per Amazon Chime Voice Connector group.
  * Priority **required**
  * VoiceConnectorId **required**

### VoiceConnectorItemList
* VoiceConnectorItemList `array`
  * items [VoiceConnectorItem](#voiceconnectoritem)

### VoiceConnectorItemPriority
* VoiceConnectorItemPriority `integer`

### VoiceConnectorList
* VoiceConnectorList `array`
  * items [VoiceConnector](#voiceconnector)

### VoiceConnectorName
* VoiceConnectorName `string`

### VoiceConnectorSettings
* VoiceConnectorSettings `object`: The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.
  * CdrBucket


