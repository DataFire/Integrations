# @datafire/whatsapp_local

Client library for WhatsApp Business API

## Installation and Usage
```bash
npm install --save @datafire/whatsapp_local
```
```js
let whatsapp_local = require('@datafire/whatsapp_local').create({
  bearerAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

See https://developers.facebook.com/docs/whatsapp

## Actions

### RequestCode
Request-Code


```js
whatsapp_local.RequestCode({
  "body": {
    "cc": "",
    "phone_number": "",
    "method": "",
    "cert": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Request-Code-Request-Body](#request-code-request-body)

#### Output
*Output schema unknown*

### SetShards
Set-Shards


```js
whatsapp_local.SetShards({
  "body": {
    "cc": "",
    "phone_number": "",
    "shards": 0,
    "pin": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Set-Shards-Request-Body](#set-shards-request-body)

#### Output
*Output schema unknown*

### RegisterAccount
Register-Account


```js
whatsapp_local.RegisterAccount({
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Register-Account-Request-Body](#register-account-request-body)

#### Output
*Output schema unknown*

### UploadCertificate
Upload-Certificate


```js
whatsapp_local.UploadCertificate({}, context)
```

#### Input
* input `object`
  * body `string`

#### Output
*Output schema unknown*

### DownloadCaCertificate
Download-CA-Certificate


```js
whatsapp_local.DownloadCaCertificate(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### DeleteWebhookCaCertificate
Delete Webhook CA Certificate


```js
whatsapp_local.DeleteWebhookCaCertificate(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### DownloadWebhookCaCertificate
Download Webhook CA Certificate


```js
whatsapp_local.DownloadWebhookCaCertificate(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### UploadWebhookCaCertificate
Upload Webhook CA Certificate


```js
whatsapp_local.UploadWebhookCaCertificate({}, context)
```

#### Input
* input `object`
  * body `string`

#### Output
*Output schema unknown*

### CheckContact
Check-Contact


```js
whatsapp_local.CheckContact({
  "body": {
    "contacts": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Check-Contact-Request-Body](#check-contact-request-body)

#### Output
* output [Check-Contact-Response](#check-contact-response)

### GetAllGroups
Get-All-Groups


```js
whatsapp_local.GetAllGroups(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Groups-Response](#groups-response)

### CreateGroup
Create-Group


```js
whatsapp_local.CreateGroup({
  "body": {
    "subject": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Create-Group-Request-Body](#create-group-request-body)

#### Output
* output [Groups-Response](#groups-response)

### GetGroupInfo
Get-Group-Info


```js
whatsapp_local.GetGroupInfo({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [Group-Response](#group-response)

### UpdateGroupInfo
Update-Group-Info


```js
whatsapp_local.UpdateGroupInfo({
  "GroupId": "",
  "body": {
    "subject": ""
  }
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * body **required** [Update-Group-Info-Request-Body](#update-group-info-request-body)

#### Output
*Output schema unknown*

### DemoteGroupAdmin
Demote-Group-Admin


```js
whatsapp_local.DemoteGroupAdmin({
  "GroupId": "",
  "body": {
    "wa_ids": []
  }
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * body **required** [Group-Admin-Request-Body](#group-admin-request-body)

#### Output
*Output schema unknown*

### PromoteToGroupAdmin
Promote-To-Group-Admin


```js
whatsapp_local.PromoteToGroupAdmin({
  "GroupId": "",
  "body": {
    "wa_ids": []
  }
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * body **required** [Group-Admin-Request-Body](#group-admin-request-body)

#### Output
*Output schema unknown*

### DeleteGroupIcon
Delete-Group-Icon


```js
whatsapp_local.DeleteGroupIcon({
  "GroupId": "",
  "File": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * File **required** `string`

#### Output
*Output schema unknown*

### GetGroupIconBinary
Get-Group-Icon-Binary


```js
whatsapp_local.GetGroupIconBinary({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
*Output schema unknown*

### SetGroupIcon
Set-Group-Icon


```js
whatsapp_local.SetGroupIcon({
  "GroupId": "",
  "File": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * File **required** `string`

#### Output
*Output schema unknown*

### DeleteGroupInvite
Delete-Group-Invite


```js
whatsapp_local.DeleteGroupInvite({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
*Output schema unknown*

### GetGroupInvite
Get-Group-Invite


```js
whatsapp_local.GetGroupInvite({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
* output [Group-Invite-Response](#group-invite-response)

### LeaveGroup
Leave-Group


```js
whatsapp_local.LeaveGroup({
  "GroupId": ""
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`

#### Output
*Output schema unknown*

### RemoveGroupParticipant
Remove-Group-Participant


```js
whatsapp_local.RemoveGroupParticipant({
  "GroupId": "",
  "body": {
    "wa_ids": []
  }
}, context)
```

#### Input
* input `object`
  * GroupId **required** `string`
  * body **required** [Remove-Group-Participant-Request-Body](#remove-group-participant-request-body)

#### Output
*Output schema unknown*

### CheckHealth
Check-Health


```js
whatsapp_local.CheckHealth(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### UploadMedia
Upload-Media


```js
whatsapp_local.UploadMedia({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
* output [Upload-Media-Response](#upload-media-response)

### DeleteMedia
Delete-Media


```js
whatsapp_local.DeleteMedia({
  "MediaId": ""
}, context)
```

#### Input
* input `object`
  * MediaId **required** `string`

#### Output
*Output schema unknown*

### DownloadMedia
Download-Media


```js
whatsapp_local.DownloadMedia({
  "MediaId": ""
}, context)
```

#### Input
* input `object`
  * MediaId **required** `string`

#### Output
*Output schema unknown*

### SendMessage
Send-Message


```js
whatsapp_local.SendMessage({
  "body": {
    "to": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Send-Message-Request-Body](#send-message-request-body)

#### Output
* output [Message-Response](#message-response)

### MarkMessageAsRead
Mark-Message-As-Read


```js
whatsapp_local.MarkMessageAsRead({
  "MessageID": "",
  "body": {
    "status": ""
  }
}, context)
```

#### Input
* input `object`
  * MessageID **required** `string`: Message ID from Webhook
  * body **required** [Mark-Message-As-Read-Request-Body](#mark-message-as-read-request-body)

#### Output
*Output schema unknown*

### GetMetrics
Get-Metrics (since v2.21.3)


```js
whatsapp_local.GetMetrics({}, context)
```

#### Input
* input `object`
  * format `string`

#### Output
* output `object`

### DisableTwoStep
Disable-Two-Step


```js
whatsapp_local.DisableTwoStep(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### EnableTwoStep
Enable-Two-Step


```js
whatsapp_local.EnableTwoStep({
  "body": {
    "pin": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Enable-Two-Step-Request-Body](#enable-two-step-request-body)

#### Output
*Output schema unknown*

### ResetApplicationSettings
Reset-Application-Settings


```js
whatsapp_local.ResetApplicationSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### GetApplicationSettings
Get-Application-Settings


```js
whatsapp_local.GetApplicationSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Application-Settings](#application-settings)

### UpdateApplicationSettings
If a field is not present in the request, no change is made to that setting. For example, if on_call_pager is not sent with the request, the existing configuration for on_call_pager is unchanged.


```js
whatsapp_local.UpdateApplicationSettings({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Application-Settings](#application-settings)

#### Output
* output [Response](#response)

### GetMediaProviders
Get-Media-Providers


```js
whatsapp_local.GetMediaProviders(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Get-Media-Providers-Response](#get-media-providers-response)

### UpdateMediaProviders
Update-Media-Providers


```js
whatsapp_local.UpdateMediaProviders({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** `array`
    * items [Media-Provider](#media-provider)

#### Output
*Output schema unknown*

### DeleteMediaProviders
Delete-Media-Providers


```js
whatsapp_local.DeleteMediaProviders({
  "ProviderName": ""
}, context)
```

#### Input
* input `object`
  * ProviderName **required** `string`: Provider Name

#### Output
*Output schema unknown*

### BackupSettings
Backup-Settings


```js
whatsapp_local.BackupSettings({
  "body": {
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Backup-Settings-Request-Body](#backup-settings-request-body)

#### Output
* output [Backup-Settings-Response](#backup-settings-response)

### GetBusinessProfile
Get-Business-Profile


```js
whatsapp_local.GetBusinessProfile(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Get-Business-Profile-Response](#get-business-profile-response)

### updateBusinessProfile
Update-Business-Profile


```js
whatsapp_local.updateBusinessProfile({
  "body": {
    "address": "",
    "description": "",
    "email": "",
    "vertical": "",
    "websites": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Business-Profile](#business-profile)

#### Output
*Output schema unknown*

### GetProfileAbout
Get-Profile-About


```js
whatsapp_local.GetProfileAbout(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Get-Profile-About-Response](#get-profile-about-response)

### UpdateProfileAbout
Update-Profile-About


```js
whatsapp_local.UpdateProfileAbout({
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Profile-About](#profile-about)

#### Output
*Output schema unknown*

### DeleteProfilePhoto
Delete-Profile-Photo


```js
whatsapp_local.DeleteProfilePhoto(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### GetProfilePhoto
Get-Profile-Photo


```js
whatsapp_local.GetProfilePhoto({}, context)
```

#### Input
* input `object`
  * format `string`

#### Output
* output [Get-Profile-Photo-Response](#get-profile-photo-response)

### UpdateProfilePhoto
Update-Profile-Photo


```js
whatsapp_local.UpdateProfilePhoto({
  "File": ""
}, context)
```

#### Input
* input `object`
  * File **required** `string`

#### Output
*Output schema unknown*

### RestoreSettings
Restore-Settings


```js
whatsapp_local.RestoreSettings({
  "body": {
    "password": "",
    "data": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Restore-Settings-Request-Body](#restore-settings-request-body)

#### Output
*Output schema unknown*

### GetAppStats
Get-App-Stats


```js
whatsapp_local.GetAppStats({}, context)
```

#### Input
* input `object`
  * format `string`

#### Output
* output `object`

### GetDbStats
Get-DB-Stats


```js
whatsapp_local.GetDbStats({}, context)
```

#### Input
* input `object`
  * format `string`

#### Output
* output `object`

### GetSupportInfo
Get-Support-Info


```js
whatsapp_local.GetSupportInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### CreateUser
Create-User


```js
whatsapp_local.CreateUser({
  "body": {
    "username": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Create-User-Request-Body](#create-user-request-body)

#### Output
* output [User-Response](#user-response)

### LoginUser
Login-User


```js
whatsapp_local.LoginUser({}, context)
```

#### Input
* input `object`
  * body [Login-Admin-Request-Body](#login-admin-request-body)

#### Output
* output [User-Login-Response](#user-login-response)

### LogoutUser
Logout-User


```js
whatsapp_local.LogoutUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### DeleteUser
Delete-User


```js
whatsapp_local.DeleteUser({
  "UserUsername": ""
}, context)
```

#### Input
* input `object`
  * UserUsername **required** `string`

#### Output
* output [User-Response](#user-response)

### GetUser
Get-User


```js
whatsapp_local.GetUser({
  "UserUsername": ""
}, context)
```

#### Input
* input `object`
  * UserUsername **required** `string`

#### Output
* output [Detailed-User-Response](#detailed-user-response)

### UpdateUser
Update-User


```js
whatsapp_local.UpdateUser({
  "UserUsername": "",
  "body": {
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * UserUsername **required** `string`
  * body **required** [Update-User-Request-Body](#update-user-request-body)

#### Output
* output [User-Response](#user-response)



## Definitions

### Address
* Address `object`
  * city **required** `string`: City name
  * country **required** `string`: Full country name
  * country_code **required** `string`: Two-letter country abbreviation
  * state **required** `string`: State abbreviation
  * street **required** `string`: Street number and name
  * type **required** `string`: Standard Values: HOME, WORK
  * zip **required** `string`: ZIP code

### Application-Settings
* Update-Application-Settings-Request-Body `object`
  * callback_backoff_delay_ms `string`: Backoff delay for a failed callback in milliseconds
  * callback_persist `boolean`: Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required.
  * heartbeat_interval `integer`: Multiconnect: Interval of the Master node monitoring of Coreapp nodes in seconds
  * max_callback_backoff_delay_ms `string`: Maximum delay for a failed callback in milliseconds
  * media [Media](#media)
  * on_call_pager `string`: Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages.
  * pass_through `boolean`: When true, removes messages from the local database after they are delivered to or read by the recipient. When false, saves all messages on local storage until they are explicitly deleted.
  * sent_status `boolean`: Receive a notification that a message is sent to server. When true, you will receive a message indicating that a message has been sent. If false (default), you will not receive notification.
  * unhealthy_interval `integer`: Multiconnect: Maximum amount of seconds a Master node waits for a Coreapp node to respond to a heartbeat before considering it unhealthy and starting the failover process.
  * webhooks [Webhooks](#webhooks)

### Audio
* Audio `object`: The media object containing audio

### AudioById
* AudioById `object`
  * id **required** `string`

### AudioByProvider
* AudioByProvider `object`
  * link **required** `string`
  * provider **required** [Provider](#provider)

### Backup-Settings
* Root Type for Backup-Settings `object`
  * data `string`: The data that has been backed up, encrypted for security.

### Backup-Settings-Request-Body
* Backup-Settings-Request `object`
  * password **required** `string`: Used to encrypt backup data for security

### Backup-Settings-Response
* Root Type for Backup-Settings-Response `object`: Save the data value as that will be used along with your password to restore the information.
  * settings [Backup-Settings](#backup-settings)

### Basic
* Root Type for Basic `object`
  * password `string`
  * username `string`

### Business-Profile
* Set-Business-Profile-Request `object`
  * address **required** `string`: Address of the business
  * description **required** `string`: Description of the business
  * email **required** `string`: Email address to contact the business
  * vertical **required** `string`: Industry of the business
  * websites **required** `array`: URLs associated with business (e.g., website, Facebook page, Instagram)
    * items `string`

### Business-Settings
* Root Type for Business-Settings `object`
  * business [Business-Settings-Business](#business-settings-business)

### Business-Settings-Business
* Root Type for Business-Settings-Business `object`
  * profile [Business-Profile](#business-profile)

### Check-Contact
* Check-Contact `object`
  * input `string`: The value you sent in the contacts field of the JSON request.
  * status `string` (values: processing, valid, invalid): Status of the user.
  * wa_id `string`: WhatsApp user identifier that can be used in other API calls. Only returned if the status is valid.

### Check-Contact-Request-Body
* Check-Contact-Request `object`
  * blocking `string` (values: no_wait, wait): Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).
  * contacts **required** `array`: Array of contact phone numbers. The numbers can be in any standard telephone number format.
    * items `string`

### Check-Contact-Response
* Check-Contact-Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * contacts `array`
    * items [Check-Contact](#check-contact)

### Check-Health-Response
* Root Type for Check-Health-Response `object`

### Config


### Config-Basic
* Config `object`
  * basic [Basic](#basic)

### Config-Bearer
* Config `object`
  * bearer **required** `string`

### Contact
* Contact `object`
  * addresses `array`: Full contact address(es)
    * items [Address](#address)
  * birthday `string`: YYYY-MM-DD formatted string
  * emails `array`: Contact email address(es)
    * items [Email](#email)
  * ims `array`
    * items `string`
  * name [Name](#name)
  * org [Org](#org)
  * phones `array`: Contact phone number(s)
    * items [Phone](#phone)
  * urls `array`: Contact URL(s)
    * items [Url](#url)

### Create-Group-Request-Body
* Create-Group-Request `object`
  * subject **required** `string`

### Create-User-Request-Body
* Create-User-Request `object`
  * password **required** `string`: username
  * username **required** `string`: password

### Currency
* Currency `object`
  * amount_1000 **required** `integer`
  * currency_code **required** `string`

### Date-Time-Component
* Date-Time-Component `object`: Date/time by component
  * day_of_month `integer`: The day of month
  * day_of_week `integer` (values: 1, 2, 3, 4, 5, 6, 7): Both strings and numbers are accepted. If different from the value derived from the date (if specified), use the derived value.
  * hour `integer`: The hour
  * minute `integer`: The minute
  * month `integer`: The month
  * year `integer`: The year

### Date-Time-Object
* Date-Time `object`: The Whatsapp Business API Client will attempt to format the date/time based on a specified localization.
  * component [Date-Time-Component](#date-time-component)
  * unix_epoch [Date-Time-Unix-Epoch](#date-time-unix-epoch)

### Date-Time-Unix-Epoch
* Date-Time-Unix-Epoch `object`: Date/time by Unix epoch
  * timestamp `integer`: Epoch timestamp in seconds

### Detailed-User-Response
* Root Type for Detailed-User-Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * users `array`
    * items [Detailed-User-Response-Item](#detailed-user-response-item)

### Detailed-User-Response-Item
* Root Type for Detailed-Response-Item `object`
  * ROLES [User-Role](#user-role)
  * username `string`

### Document
* Document `object`: The media object containing a document

### DocumentById
* Document `object`
  * caption **required** `string`
  * filename **required** `string`
  * id **required** `string`

### DocumentByProvider
* Document1 `object`
  * caption **required** `string`
  * filename **required** `string`
  * link **required** `string`
  * provider **required** [Provider](#provider)

### Email
* Email `object`
  * email **required** `string`
  * type **required** `string`

### Enable-Two-Step-Request-Body
* Enable-Two-Step-Request `object`
  * pin **required** `string`

### Error
* Error `object`
  * code `integer`: See the https://developers.facebook.com/docs/whatsapp/api/errors for more information.
  * details `string`: error detail
  * href `string`: location for error detail
  * title `string`: error title

### Gateway-Node-Status
* Root Type for Gateway-Node-Status `object`
  * gateway_status `string`
  * role `string` (values: primary_master, secondary_master, coreapp)

### Gateway-Status
* Gateway-Status `string` (values: connected, connecting, disconnected, uninitialized, unregistered)

### Get-Business-Profile-Response
* Root Type for Get-Business-Profile-Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * settings [Business-Settings](#business-settings)

### Get-Media-Providers-Response
* Root Type for Get-Media-Providers-Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * settings [Media-Provider-Settings](#media-provider-settings)

### Get-Profile-About-Response
* Root Type for Get-Profile-About-Response `object`
  * settings [Profile-About-Settings](#profile-about-settings)

### Get-Profile-Photo-Response
* Root Type for Get-Profile-Photo-Response `object`
  * settings [Profile-Photo-Settings](#profile-photo-settings)

### Group
* Groups-Response-Item `object`
  * creation_time `integer`: timestamp
  * id `string`

### Group-Admin-Request-Body
* Group-Admin-Request `object`
  * wa_ids **required** `array`: The WhatsApp IDs of the people to be added or removed as group admins
    * items `string`

### Group-Info
* Group-Response-Item `object`
  * admins `array`: Group administrators
    * items `string`
  * creation_time `integer`: Group creation time
  * creator `string`: ID of the creator of this group
  * participants `array`: Participants of the group
    * items `string`
  * subject `string`: Subject of the group

### Group-Invite
* Group-Invite `object`
  * link `string`

### Group-Invite-Response
* Group-Invite-Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * groups `array`
    * items [Group-Invite](#group-invite)

### Group-Response
* Group-Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * groups `array`
    * items [Group-Info](#group-info)

### Groups-Response
* GroupsResponse `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * groups `array`
    * items [Group](#group)

### Hsm
* Hsm `object`: The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure.
  * element_name **required** `string`: The element name that indicates which template to use within the namespace
  * language **required** [Language](#language)
  * localizable_params **required** `array`: This field is an array of values to apply to variables in the template
    * items [LocalizableParam](#localizableparam)
  * namespace **required** `string`: The namespace that will be used

### Image
* Image `object`: The media object containing an image

### ImageById
* ImageById `object`
  * caption **required** `string`
  * id **required** `string`

### ImageByProvider
* ImageByProvider `object`
  * caption **required** `string`
  * link **required** `string`
  * provider **required** [Provider](#provider)

### Language
* Language `object`
  * code **required** `string`: The code of the language or locale to use — Accepts both language and language_locale formats (e.g., en and en_US).
  * policy **required** `string` (values: fallback, deterministic): The language policy the message should follow

### LocalizableParam
* LocalizableParam `object`
  * currency [Currency](#currency)
  * date_time [Date-Time-Object](#date-time-object)
  * default **required** `string`: Default text if localization fails

### Location
* Location `object`
  * address **required** `string`: Address of the location. Only displayed if name is present.
  * latitude **required** `string`: Latitude of the location
  * longitude **required** `string`: Longitude of the location
  * name **required** `string`: Name of the location

### Login-Admin-Request-Body
* Login-Admin-Request `object`
  * new_password **required** `string`

### Mark-Message-As-Read-Request-Body
* Mark-Message-As-Read-Request `object`
  * status **required** `string`

### Media
* Media `object`
  * auto_download **required** `array`: An array specifying which types of media to automatically download.
    * items `string` (values: audio, document, voice, video, image.)

### Media-Provider
* Update-Media-Providers-Request `object`
  * config [Config](#config)
  * name `string`: The name for the provider
  * type `string`: The type of provider

### Media-Provider-Settings
* Root Type for Settings `object`
  * application [Media-Provider-Settings-Application](#media-provider-settings-application)

### Media-Provider-Settings-Application
* Root Type for Settings-Application `object`
  * media [Media-Provider-Settings-Application-Media](#media-provider-settings-application-media)

### Media-Provider-Settings-Application-Media
* Root Type for Settings-Application-Media `object`
  * providers `array`
    * items [Media-Provider](#media-provider)

### Message
* Message `object`
  * id `string`

### Message-Context
* Root Type for Message-Context `object`
  * from `string`: Sender Whatsapp id of context-message
  * group_id `string`: GroupId of context message
  * id `string`: message id
  * mentions `array`: Whats app ids
    * items `string`

### Message-Response
* Message-Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * messages `array`
    * items [Message](#message)

### Message-Type
* Message-Type `string` (values: audio, contacts, document, hsm, image, location, text, video, voice, unknown): type of the message

### Meta
* Meta `object`: Contains generic information such as WhatsApp Business API Client version.
  * api_status `string` (values: deprecated, experimental, stable)
  * version `string`

### Name
* Name `object`: Full contact name
  * first_name `string`: First name
  * formatted_name **required** `string`: Full name as it normally appears
  * last_name `string`: Last name
  * prefix `string`: Name preffix
  * suffix `string`: Name suffix

### Org
* Org `object`: Contact organization information
  * company **required** `string`: Name of the contact's company
  * department `string`: Name of the contact's department
  * title `string`: Contact's business title

### Phone
* Phone `object`
  * phone `string`
  * type `string`: Standard Values: CELL, MAIN, IPHONE, HOME, WORK
  * wa_id `string`: WhatsApp ID

### Profile-About
* Set-Profile-About-Request `object`
  * text **required** `string`: Text to display in your profile's About section

### Profile-About-Settings
* Root Type for Profile-About-Settings `object`
  * profile [Profile-About-Settings-Profile](#profile-about-settings-profile)

### Profile-About-Settings-Profile
* Root Type for About-XXX `object`
  * about [Profile-About](#profile-about)

### Profile-Photo-Settings
* Root Type for Profile-Photo-Settings `object`
  * profile `object`
    * photo `object`
      * link `string`

### Profile-Photo-Settings-Profile
* Root Type for Profile-Photo-Settings-Profile `object`
  * photo [Profile-Photo-Settings-Profile-Photo](#profile-photo-settings-profile-photo)

### Profile-Photo-Settings-Profile-Photo
* Root Type for Profile-Photo-Settings-Profile-Photo `object`
  * link `string`

### Provider
* Provider `object`
  * name **required** `string`

### Register-Account-Request-Body
* Register-Account-Request `object`
  * code **required** `string`

### Remove-Group-Participant-Request-Body
* Remove-Group-Participant-Request `object`
  * wa_ids **required** `array`
    * items `string`

### Request-Code-Account
* Root Type for Request-Code-Account `object`
  * vname `string`

### Request-Code-Request-Body
* Request-Code-Request `object`
  * cc **required** `string`: Numerical country code for the phone number you are registering
  * cert **required** `string`: Base64-encoded Verified Name certificate
  * method **required** `string` (values: sms, voice): Method of receiving your registration code
  * phone_number **required** `string`: Phone number you are registering, without the country code or plus symbol (+)
  * pin `string`: Existing 6-digit PIN — This is only required when two-factor verification is enabled on this account.

### Request-Code-Response
* Root Type for Request-Code-Response `object`
  * account `array`
    * items [Request-Code-Account](#request-code-account)

### Response
* Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)

### Restore-Settings-Request-Body
* Restore-Settings-Request `object`
  * data **required** `string`: The data that was returned by the /v1/settings/backup API call
  * password **required** `string`: The password you used in the /v1/settings/backup API call to encrypt the backup data

### Send-Message-Request-Body
* Send-Text-Message-Request `object`
  * audio [Audio](#audio)
  * contacts `array`
    * items [Contact](#contact)
  * document [Document](#document)
  * hsm [Hsm](#hsm)
  * image [Image](#image)
  * location [Location](#location)
  * preview_url `boolean`: Specifying preview_url in the request is optional when not including a URL in your message.
  * recipient_type `string` (values: individual, group): Determines whether the recipient is an individual or a group
  * text [Text](#text)
  * to **required** `string`: When recipient_type is individual, this field is the WhatsApp ID (phone number) returned from contacts endpoint. When recipient_type is group, this field is the WhatsApp group ID.
  * ttl `object`
  * type [Message-Type](#message-type)
  * video [Video](#video)

### Set-Shards-Request-Body
* Set-Shards-Request `object`
  * cc **required** `string`
  * phone_number **required** `string`
  * pin **required** `string`
  * shards **required** `integer` (values: 1, 2, 4, 8, 16, 32)

### Text
* Text `object`
  * body **required** `string`

### Update-Group-Info-Request-Body
* Update-Group-Info-Request `object`
  * subject **required** `string`

### Update-User-Request-Body
* Update-User-Request `object`
  * password **required** `string`: password

### Upload-Media
* Root Type for Upload-Media `object`
  * id `string`

### Upload-Media-Response
* Root Type for Upload-Media-Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * media `array`
    * items [Upload-Media](#upload-media)

### Url
* Root Type for Url `object`: Standard Values: HOME, WORK
  * type `string`: Standard Values: HOME, WORK
  * url `string`: URL

### User-Login-Response
* UserLoginResponse `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * users `array`
    * items [User-Login-Response-Item](#user-login-response-item)

### User-Login-Response-Item
* UserLoginResponseItem `object`
  * expires_after `string`: Token expiration timestamp. By default, this is 7 days.
  * token `string`: Authentication token to be used for all other WhatsApp Business API calls. The token must be sent in the authorization header in the format:

### User-Response
* Root Type for User-Create-Response `object`
  * errors `array`: Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
    * items [Error](#error)
  * meta [Meta](#meta)
  * users `array`
    * items [User-Response-Item](#user-response-item)

### User-Response-Item
* Root Type for User-Create-Response-Item `object`
  * username `string`

### User-Role
* User-Role `string` (values: ROLE_ADMIN, ROLE_USER)

### Video
* Video `object`: The media object containing a video

### VideoById
* VideoById `object`
  * caption **required** `string`
  * id **required** `string`

### VideoByProvider
* ByProvider `object`
  * caption **required** `string`
  * link **required** `string`
  * provider **required** [Provider](#provider)

### Webhook-Audio
* Root Type for Webhook-Audio `object`
  * caption `string`: Optional. Only present if specified.
  * file `string`: Absolute filename and location on media volume. This parameter is deprecated.
  * filename `string`: Filename on the sender's device. This will only be present in audio and document media messages.
  * id `string`: ID of the media. Can be used to delete the media if stored locally on the client.
  * link `string`
  * mime_type `string`: Mime type of media
  * sha256 `string`: Checksum

### Webhook-Contact
* Root Type for Webhook-Contact `object`
  * profile [Webhook-Contact-Profile](#webhook-contact-profile)
  * wa_id `string`: The WhatsApp ID of the contact

### Webhook-Contact-Profile
* Root Type for Webhook-Contact-Profile `object`
  * name `string`: Optional. As of v2.21.4, contains the sender's profile name.

### Webhook-Document
* Root Type for Webhook-Document `object`
  * caption `string`: Optional. Only present if specified.
  * file `string`: Absolute filename and location on media volume. This parameter is deprecated.
  * filename `string`: Filename on the sender's device. This will only be present in audio and document media messages.
  * id `string`: ID of the media. Can be used to delete the media if stored locally on the client.
  * link `string`
  * mime_type `string`: Mime type of media
  * sha256 `string`: Checksum

### Webhook-Event
* Root Type for Webhook-Event `object`
  * contacts `array`
    * items [Webhook-Contact](#webhook-contact)
  * errors `array`
    * items [Error](#error)
  * messages `array`
    * items [Webhook-Message](#webhook-message)
  * statuses `array`
    * items [Webhook-Status](#webhook-status)

### Webhook-Image
* Root Type for Webhook-Image `object`
  * caption `string`: Optional. Only present if specified.
  * file `string`: Absolute filename and location on media volume. This parameter is deprecated.
  * id `string`: ID of the media. Can be used to delete the media if stored locally on the client.
  * link `string`
  * mime_type `string`: Mime type of media
  * sha256 `string`: Checksum

### Webhook-Location
* Root Type for Webhook-Location `object`
  * address `string`: Address of the location
  * latitude `number`: Latitude of location being sent
  * longitude `number`: Longitude of location being sent
  * name `string`: Name of the location
  * url `string`: URL for the website where the user downloaded the location information

### Webhook-Message
* Root Type for Webhook-Message `object`
  * audio [Webhook-Audio](#webhook-audio)
  * contacts `array`
    * items [Contact](#contact)
  * context [Message-Context](#message-context)
  * document [Webhook-Document](#webhook-document)
  * errors `array`
    * items [Error](#error)
  * from `string`: WhatsApp ID of the sender
  * group_id `string`: Optional. WhatsApp group ID
  * id `string`: Message ID
  * image [Webhook-Image](#webhook-image)
  * location [Webhook-Location](#webhook-location)
  * system [Webhook-System](#webhook-system)
  * text [Webhook-Text](#webhook-text)
  * timestamp `string`: Message received timestamp
  * type [Message-Type](#message-type)
  * video [Webhook-Video](#webhook-video)
  * voice [Webhook-Voice](#webhook-voice)

### Webhook-Status
* Root Type for Webhook-Status `object`
  * errors `array`
    * items [Error](#error)
  * id `string`: Message ID
  * recipient_id `string`: WhatsApp ID of recipient
  * status `string` (values: sent, delivered, read, failed, deleted): Status of message
  * timestamp `string`: Timestamp of the status message

### Webhook-System
* Root Type for Webhook-System `object`
  * body `string`
  * type `string` (values: group_created, group_user_promoted, group_user_demoted, group_user_joined, group_user_left, group_subject_changed, group_description_changed, group_icon_changed, group_icon_deleted, group_invite_link_revoked, user_identity_changed, group_user_changed_number, group_error_fetching_photo, group_error_adding_users, group_error_adding_user, group_error_full_adding_users, group_error_removing_user, broadcast_list_created, group_ended, group_error_blocked_adding_user)

### Webhook-Text
* Root Type for Webhook-Text `object`
  * body `string`: Message text

### Webhook-Video
* Root Type for Webhook-Video `object`
  * caption `string`: Optional. Only present if specified.
  * file `string`: Absolute filename and location on media volume. This parameter is deprecated.
  * id `string`: ID of the media. Can be used to delete the media if stored locally on the client.
  * link `string`
  * mime_type `string`: Mime type of media
  * sha256 `string`: Checksum

### Webhook-Voice
* Root Type for Webhook-Voice `object`
  * caption `string`: Optional. Only present if specified.
  * file `string`: Absolute filename and location on media volume. This parameter is deprecated.
  * id `string`: ID of the media. Can be used to delete the media if stored locally on the client.
  * link `string`
  * mime_type `string`: Mime type of media
  * sha256 `string`: Checksum

### Webhooks
* Webhooks `object`
  * max_concurrent_requests `integer` (values: 6, 12, 18, 24): Configures the maximum number of inflight callback requests that are sent out. Can be set to 6 (default), 12, 18, or 24.
  * url `string`: Inbound and outbound notifications are routed to this URL. A HTTPS-based endpoint is required; HTTP will not work.


