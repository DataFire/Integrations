# @datafire/dracoon_team

Client library for DRACOON API

## Installation and Usage
```bash
npm install --save @datafire/dracoon_team
```
```js
let dracoon_team = require('@datafire/dracoon_team').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

REST Web Services for DRACOON<br>built at: 2020-11-17 08:47:09<br><br>This page provides an overview of all available and documented DRACOON APIs, which are grouped by tags.<br>Each tag provides a collection of APIs that are intended for a specific area of the DRACOON.<br><br><a title='Developer Information' href='https://developer.dracoon.com'>Developer Information</a>&emsp;&emsp;<a title='Get SDKs on GitHub' href='https://github.com/dracoon'>Get SDKs on GitHub</a><br><br><a title='Terms of service' href='https://www.dracoon.com/terms/general-terms-and-conditions/'>Terms of service</a>

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
dracoon_team.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
dracoon_team.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### login
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.13.0</h3>

### Description:
Authenticates user and provides an authentication token (`X-Sds-Auth-Token`) that is required for the most operations.

### Precondition:
Existing user that is **NOT** locked.

### Postcondition:
User is logged in.

### Further Information:
The provided token is valid for **two hours**, every usage resets this period to two full hours again.  
Logging off invalidates the token.  

### Available authentication methods:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method (`authType`) | Description |
| :--- | :--- |
| `basic` | Log in with credentials stored in the database <br>Formerly known as `sql`.|
| `active_directory` | Log in with Active Directory credentials |
| `radius` | Log in with RADIUS username, PIN and token password.<br>Token (request parameter) may be set, otherwise this parameter is ignored. If token is set, password is optional. |
| `openid` | Please use `POST /auth/openid/login` API to login with OpenID Connect identity |

</details>


```js
dracoon_team.login({
  "body": {
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [LoginRequest](#loginrequest)

#### Output
* output [LoginResponse](#loginresponse)

### initiateOpenIdLogin
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>

### Description:
This is the first step of the OpenID Connect authentication.  
The user is send to the OpenID Connect identity provider to authenticate himself and retrieve an authorization code.

### Precondition:
None.

### Postcondition:
User is redirected to OpenID Connect identity provider to authenticate himself.

### Further Information:
None.


```js
dracoon_team.initiateOpenIdLogin({
  "issuer": "",
  "redirect_uri": "",
  "language": "",
  "test": true
}, context)
```

#### Input
* input `object`
  * issuer **required** `string`: Issuer identifier of the OpenID Connect identity provider
  * redirect_uri **required** `string`: Redirect URI to complete the OpenID Connect authentication
  * language **required** `string`: Language ID or ISO 639-1 code
  * test **required** `boolean`: Flag to test the authentication parameters.

#### Output
*Output schema unknown*

### completeOpenIdLogin
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>

### Description:  
This is the second step of the OpenID Connect authentication.  
The user hands over the authorization code and is logged in.

### Precondition:
Existing user with activated OpenID Connect authentication that is **NOT** locked.

### Postcondition:
User is logged in.

### Further Information:
None.


```js
dracoon_team.completeOpenIdLogin({
  "code": "",
  "state": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Authorization code
  * id_token `string`: Identity token
  * state **required** `string`: Authentication state

#### Output
* output [LoginResponse](#loginresponse)

### requestOpenIdAuthResources
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>

### Description:  
Provides information about OpenID Connect authentication options.

### Precondition:
None.

### Postcondition:
List of available OpenID Connect Providers is returned.

### Further Information:
Empty list is returned if OpenID Connect is **NOT** configured.


```js
dracoon_team.requestOpenIdAuthResources(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OpenIdAuthResources](#openidauthresources)

### ping
### Description:
Test connection to DRACOON Core Service.

### Precondition:
None.

### Postcondition:
`200 OK` with current date string is returned if successful.

### Further Information:
None.


```js
dracoon_team.ping(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### recoverUserName
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.13.0</h3>

### Description:  
Request an email with the user names of all accounts connected to the email.

### Precondition:
Valid email address.

### Postcondition:
An email is sent to the provided address, with a list of account user names connected to it.

### Further Information:
None.



```js
dracoon_team.recoverUserName({
  "body": {
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [RecoverUserNameRequest](#recoverusernamerequest)

#### Output
*Output schema unknown*

### requestPasswordReset
### Description:  
Request an email with a password reset token for a certain user to reset password.

### Precondition:
Registered user account.

### Postcondition:
Provided user receives email with password reset token.

### Further Information:
None.


```js
dracoon_team.requestPasswordReset({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ResetPasswordRequest](#resetpasswordrequest)

#### Output
*Output schema unknown*

### validateResetPasswordToken
### Description:  
Request all information for a password change dialogue e.g. real name of user.

### Precondition:
User received a password reset token.

### Postcondition:
Context information is returned.

### Further Information:
None.


```js
dracoon_team.validateResetPasswordToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Password reset token

#### Output
* output [ResetPasswordTokenValidateResponse](#resetpasswordtokenvalidateresponse)

### resetPassword
### Description:  
Resets user's password.

### Precondition:
User received a password reset token.

### Postcondition:
User's password is reset to the provided password.

### Further Information:
Forbidden characters in passwords: [`&`, `'`, `<`, `>`]


```js
dracoon_team.resetPassword({
  "token": "",
  "body": {
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Password reset token
  * body **required** [ResetPasswordWithTokenRequest](#resetpasswordwithtokenrequest)

#### Output
*Output schema unknown*

### requestSystemDefaultsInfo
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
Returns a list of configurable system default values.

### Precondition:
Authenticated user.

### Postcondition:
List of configurable default settings is returned.

### Further Information:
None.

### Configurable default values:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
| `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999` |
| `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999` |
| `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999` |
| `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |

</details>


```js
dracoon_team.requestSystemDefaultsInfo({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [SystemDefaults](#systemdefaults)

### requestGeneralSettingsInfo
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:
Returns a list of configurable general settings.

### Precondition:
Authenticated user.

### Postcondition:
List of configurable general settings is returned.

### Further Information:
None.

### Configurable general settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
| `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
| `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
| `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
| `useS3Storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
| `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
| `homeRoomsActive` | Determines whether each AD user has a personal home room | `true or false` |
| `homeRoomParentId` | Defines a node under which all personal home rooms are located. **NULL** if `homeRoomsActive` is `false` | `Long` |

</details>

### Deprecated general settings:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>Returns boolean value dependent on conjunction of `mediaServerConfigEnabled` AND `mediaServerEnabled` | `true or false` |
| <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |

</details>


```js
dracoon_team.requestGeneralSettingsInfo({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [GeneralSettingsInfo](#generalsettingsinfo)

### requestInfrastructurePropertiesInfo
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
Returns a list of read-only infrastructure properties.  

### Precondition:
Authenticated user.

### Postcondition:
List of infrastructure properties is returned.

### Further Information:
Source: `api.properties`

### Read-only infrastructure properties:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `smsConfigEnabled` | Determines whether sending of share passwords via SMS is **system-wide** enabled. | `true or false` |
| `mediaServerConfigEnabled` | Determines whether media server is **system-wide** enabled. | `true or false` |
| `s3DefaultRegion` | Suggested S3 region | `Region name` |
| `s3EnforceDirectUpload` | Enforce direct upload to S3 | `true or false` |
| `dracoonCloud` | Determines if the **DRACOON Core** is deployed in the cloud environment | `true or false` |
| `tenantUuid` | Current tenant UUID | `UUID` |

</details>



```js
dracoon_team.requestInfrastructurePropertiesInfo({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [InfrastructureProperties](#infrastructureproperties)

### requestNotificationChannelsInfo
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:
Retrieve a list of configured notification channels.

### Precondition:
Authenticated user.

### Postcondition:
List of notification channels is returned.

### Further Information:
None.


```js
dracoon_team.requestNotificationChannelsInfo({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [NotificationChannelList](#notificationchannellist)

### requestPasswordPoliciesConfigInfo
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>

### Description:  
Retrieve a list of configured password policies for all password types:  
* `login`
* `shares`
* `encryption`

### Precondition:
Authenticated user.

### Postcondition:
List of configured password policies is returned.

### Further Information:
None.

### Available password policies:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Value | Password Type |
| :--- | :--- | :--- | :--- |
| `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % & ' ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `api.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
| `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
| `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
| `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
| `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |

</details>


```js
dracoon_team.requestPasswordPoliciesConfigInfo({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [PasswordPoliciesConfig](#passwordpoliciesconfig)

### requestS3TagsInfo
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:
Retrieve all configured S3 tags.

### Precondition:
Authenticated user.

### Postcondition:
List of configured S3 tags is returned.

### Further Information:
An empty list is returned if no S3 tags are found / configured.


```js
dracoon_team.requestS3TagsInfo({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [S3TagList](#s3taglist)

### requestSystemSettings
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.6.0</h3>

### Description:  
Returns a list of configurable system settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> required.

### Postcondition:
List of configurable settings is returned.

### Further Information:
Check for every settings key new corresponding API and key below.

If `eula_active` is true, but **NOT** accepted yet, or password **MUST** be changed, only the following two values are returned:
* `allow_system_global_weak_password`
* `eula_active`

### Configurable settings
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `branding_server_branding_id` | The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.<br>cf. `GET /system/config/settings/branding` `BrandingConfig.brandingQualifier` | `String` |
| `branding_portal_url` | Access URL to to the Branding Portal<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/branding` `BrandingConfig.brandingProviderUrl` | `String` |
| `dblog` | Write logs to local database.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.enabled` | `true or false` |
| `default_downloadshare_expiration_period` | Default expiration period for Download Shares in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.downloadShareDefaultExpirationPeriod` | `Integer between 0 and 9999` |
| `default_file_upload_expiration_date` | Default expiration period for all uploaded files in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.fileDefaultExpirationPeriod` | `Integer between 0 and 9999` |
| `default_language` | Define which language should be default.<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.languageDefault` | cf. `GET /public/system/info` - `SystemInfo.languageDefault` |
| `default_uploadshare_expiration_period` | Default expiration period for Upload Shares in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.uploadShareDefaultExpirationPeriod` | `Integer between 0 and 9999` |
| `enable_client_side_crypto` | Activation status of client-side encryption<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `GET /system/config/settings/general` `GeneralSettings.cryptoEnabled` | `true or false`<br>default: `false` |
| `eula_active` | Each user has to confirm the EULA at first login.<br>cf. `GET /system/config/settings/general` `GeneralSettings.eulaEnabled` | `true or false` |
| `eventlog_retention_period` | Retention period (in days) of event log entries<br>After that period, all entries are deleted.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.retentionPeriod` | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: `7` |
| `ip_address_logging` | Determines whether a user's IP address is logged.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.logIpEnabled`<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.logIpEnabled` | `true or false` |
| `mailserver` | Email server to send emails.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.host` | `DNS name or IPv4 of an email server` |
| `mailserver_authentication_necessary` | Set to `true` if the email server requires authentication.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.authenticationEnabled` | `true or false` |
| `mailserver_password` | **Password is no longer returned.**<br>Check `mailserver_password_set` to determine whether password is set. |  |
| `mailserver_password_set` | Indicates if a password is set for the mailserver (because `mailserver_password` is always returned empty).<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.passwordDefined` | `true or false` |
| `mailserver_port` | Email server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.port` | `Valid port number` |
| `mailserver_username` | User ame for email server<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.username` | `Username for authentication` |
| `mailserver_use_ssl` | Email server requires SSL connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_starttls` to be `false`<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.username` | `true or false` |
| `mailserver_use_starttls` | Email server requires StartTLS connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_ssl` to be `false`<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.starttlsEnabled` | `true or false` |
| `syslog` | Write logs to a syslog interface.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.enabled` | `true or false` |
| `syslog_host` | Syslog server (IP or FQDN)<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.host` | `DNS name or IPv4 of a syslog server` |
| `syslog_port` | Syslog server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.port` | `Valid port number` |
| `syslog_protocol` | Protocol to connect to syslog server.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.protocol` | `TCP or UDP` |
| `enable_email_notification_button` | Enable mail notification button.<br>cf. `GET /system/config/settings/general` `GeneralSettings.emailNotificationButtonEnabled` | `true or false` |
| `allow_share_password_sms` | Allow sending of share passwords via SMS.<br>cf. `GET /system/config/settings/general` `GeneralSettings.sharePasswordSmsEnabled` | `true or false` |
| `globally_allow_share_password_sms` | Allow sending of share passwords via SMS **system-wide** (read-only).<br>cf. `GET /system/config/settings/infrastructure` `InfrastructureProperties.smsConfigEnabled` | `true or false` |
| `use_s3_storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `GET /system/config/settings/general` `GeneralSettings.useS3Storage` | `true or false` |
| `s3_default_region` |Suggested S3 region (read-only)<br>cf. `GET /system/config/settings/infrastructure` `InfrastructureProperties.s3DefaultRegion` | `Region name` |

</details>

### Deprecated settings
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| <del>`allow_system_global_weak_password`</del> | Determines whether weak password (cf. _Password Policy_ below) is allowed.<br>cf. `GET /system/config/settings/general` `GeneralSettings.weakPasswordEnabled`<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
| <del>`branding_server_customer`</del> | The UUID of the branding server customer, which corresponds to customer key in the branding server. | `String` |
| <del>`branding_server_url`</del> | Access URL to to the Branding Server.<br>Only visible for _Config Manager_ of Provider Customer. | `String` |
| <del>`email_from`</del> | Sender of system-generated emails<br>Only visible for _Config Manager_ of Provider Customer.<br>**Moved to branding** | `Valid email address` |
| <del>`email_to_sales`</del> | Contact email address for customers to request more user licenses or data volume.<br>**Moved to branding** | `Valid email address` |
| <del>`email_to_support`</del> | Support email address for users<br>**Moved to branding** | `Valid email address` |
| <del>`file_size_js`</del> | Maximum file size (in bytes) for downloads of encrypted files with JavaScript.<br>Bigger files will require a JavaApplet. | `Integer`<br>Recommended value: `10485760` (=`10MB`) |
| <del>`system_name`</del> | System name<br>**Moved to branding** use `product.title` | `Display name of the DRACOON` |

</details>


```js
dracoon_team.requestSystemSettings({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [ConfigOptionList](#configoptionlist)

### updateSystemSettings
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.6.0</h3>

### Description:
Update configurable settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more global settings gets changed.

### Further Information:
This API is deprecated and will be removed in the future.  
Check for every settings key new corresponding API and key below.

### Configurable settings:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `branding_server_branding_id` | The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.<br>cf. `PUT /system/config/settings/branding` `BrandingConfig.brandingQualifier` | `String` |
| `branding_portal_url` | Access URL to to the Branding Portal<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/branding` `BrandingConfig.brandingProviderUrl` | `String` |
| `dblog` | Write logs to local database.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.enabled` | `true or false` |
| `default_downloadshare_expiration_period` | Default expiration period for Download Shares in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.downloadShareDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
| `default_file_upload_expiration_date` | Default expiration period for all uploaded files in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.fileDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
| `default_language` | Define which language should be default.<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.languageDefault` | cf. `GET /public/system/info` - `SystemInfo.languageDefault` |
| `default_uploadshare_expiration_period` | Default expiration period for Upload Shares in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.uploadShareDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
| `enable_client_side_crypto` | Activation status of client-side encryption<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.cryptoEnabled` | `true or false`<br>default: `false` |
| `eula_active` | Each user has to confirm the EULA at first login.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.eulaEnabled` | `true or false` |
| `eventlog_retention_period` | Retention period (in days) of event log entries<br>After that period, all entries are deleted.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.retentionPeriod` | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: `7` |
| `ip_address_logging` | Determines whether a user's IP address is logged.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.logIpEnabled`<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.logIpEnabled` | `true or false` |
| `mailserver` | Email server to send emails.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.host` | `DNS name or IPv4 of an email server` |
| `mailserver_authentication_necessary` | Set to `true` if the email server requires authentication.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.authenticationEnabled` | `true or false` |
| `mailserver_password` | Password for email server<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.password` | `Password for authentication` |
| `mailserver_port` | Email server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.port` | `Valid port number` |
| `mailserver_username` | Username for email server<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.username` | `Username for authentication` |
| `mailserver_use_ssl` | Email server requires SSL connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_starttls` to be `false`<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.username` | `true or false` |
| `mailserver_use_starttls` | Email server requires StartTLS connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_ssl` to be `false`<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.starttlsEnabled` | `true or false` |
| `syslog` | Write logs to a syslog interface.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.enabled` | `true or false` |
| `syslog_host` | Syslog server (IP or FQDN)<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.host` | `DNS name or IPv4 of a syslog server` |
| `syslog_port` | Syslog server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.port` | `Valid port number` |
| `syslog_protocol` | Protocol to connect to syslog server.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.protocol` | `TCP or UDP` |
| `enable_email_notification_button` | Enable mail notification button.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.emailNotificationButtonEnabled` | `true or false` |
| `allow_share_password_sms` | Allow sending of share passwords via SMS.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.sharePasswordSmsEnabled` | `true or false` |

</details>

### Deprecated settings:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| <del>`allow_system_global_weak_password`</del> | Determines whether weak password (cf. _Password Policy_ below) is allowed.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.weakPasswordEnabled`<br>Use `PUT /system/config/policies/passwords` API to change configured password policies. | `true or false` |
| <del>`branding_server_customer`</del> | The UUID of the branding server customer, which corresponds to customer key in the branding server. | `String` |
| <del>`branding_server_url`</del> | Access URL to to the Branding Server.<br>Only visible for _Config Manager_ of Provider Customer. | `String` |
| <del>`email_from`</del> | Sender of system-generated emails<br>Only visible for _Config Manager_ of Provider Customer.<br>**Moved to branding** | `Valid email address` |
| <del>`email_to_sales`</del> | Contact email address for customers to request more user licenses or data volume.<br>**Moved to branding** | `Valid email address` |
| <del>`email_to_support`</del> | Support email address for users<br>**Moved to branding** | `Valid email address` |
| <del>`file_size_js`</del> | Maximum file size (in bytes) for downloads of encrypted files with JavaScript.<br>Bigger files will require a JavaApplet. | `Integer`<br>Recommended value: `10485760` (=`10MB`) |
| <del>`system_name`</del> | System name<br>**Moved to branding** use `product.title` | `Display name of the DRACOON` |

</details>


```js
dracoon_team.updateSystemSettings({
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ConfigOptionList](#configoptionlist)

#### Output
*Output schema unknown*

### downloadAvatar
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Download avatar for given user ID and UUID.

### Precondition:
Valid UUID.

### Postcondition:
Stream is returned.

### Further Information:
None.


```js
dracoon_team.downloadAvatar({
  "user_id": 0,
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * uuid **required** `string`: UUID of the avatar

#### Output
* output `string`

### downloadZipArchiveViaToken
### Description:
Download multiple files in a ZIP archive.

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Create a download token with `POST /nodes/zip` API.


```js
dracoon_team.downloadZipArchiveViaToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Download token

#### Output
*Output schema unknown*

### downloadFileViaToken
### Description:
Download a file.

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported.


```js
dracoon_team.downloadFileViaToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Download token
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return `application/octet-stream` instead of specific mimetype
  * inline `boolean`: Use Content-Disposition: `inline` instead of `attachment`

#### Output
*Output schema unknown*

### downloadFileViaToken_1
### Description:
Download a file.

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported.


```js
dracoon_team.downloadFileViaToken_1({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Download token
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return `application/octet-stream` instead of specific mimetype
  * inline `boolean`: Use Content-Disposition: `inline` instead of `attachment`

#### Output
*Output schema unknown*

### requestAuditNodeUserData
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description: 
Retrieve a list of all nodes of type room, and the room assignment users with permissions.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read audit log</span> required.

### Postcondition:
List of rooms and their assigned users is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Except for `userName`, `userFirstName` and  `userLastName` - these are connected via logical disjunction (**OR**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`userName:cn:searchString_1|userFirstName:cn:searchString_2|nodeId:eq:2`  
Filter by user login containing `searchString_1` **OR** first name containing `searchString_2` **AND** node ID equals `2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `nodeId` | Node ID filter | `eq` | Node ID equals value. | `positive Integer` |
| `nodeName` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
| `nodeParentId` | Node parent ID filter | `eq` | Parent ID equals value. | `positive Integer`<br>Parent ID `0` is the root node. |
| `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
| `userName` | Username (login) filter | `cn, eq` | Username contains / equals value. | `search String` |
| `userFirstName` | User first name filter | `cn, eq` | User first name contains / equals value. | `search String` |
| `userLastName` | User last name filter | `cn, eq` | User last name contains / equals value. | `search String` |
| `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room | `eq` |  | `true or false` |
| `nodeIsEncrypted` | Encrypted node filter | `eq` |  | `true or false` |
| `nodeHasActivitiesLog` | Activities log filter | `eq` |  | `true or false` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`nodeHasRecycleBin`</del> | Recycle bin filter<br>**Filter has no effect!** | `eq` |  | `true or false` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`nodeName:asc`  
Sort by `nodeName` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `nodeId` | Node ID |
| `nodeName` | Node name |
| `nodeParentId` | Node parent ID |
| `nodeSize` | Node size |
| `nodeQuota` | Node quota |

</details>


```js
dracoon_team.requestAuditNodeUserData({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output `array`
  * items [AuditNodeResponse](#auditnoderesponse)

### requestLogEventsAsJson
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description: 
Retrieve eventlog (audit log) events.

### Precondition:
Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.

### Postcondition:
List of audit log events is returned.

### Further Information:
Output is limited to **500** entries.  
For more results please use filter criteria and paging (`offset` + `limit`). 

Allowed `Accept-Header`:
* `Accept: application/json`
* `Accept: text/csv`  

---

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`time:desc`  
Sort by `time` descending (default sort option).

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `time` | Event timestamp |

</details>


```js
dracoon_team.requestLogEventsAsJson({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * date_start `string`: Filter events from given date
  * date_end `string`: Filter events until given date
  * type `integer`: Operation ID
  * user_id `integer`: User ID
  * status `string` (values: 0, 2): Operation status:
  * user_client `string`: User client
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [LogEventList](#logeventlist)

### requestLogOperations
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description: 
Retrieve eventlog (audit log) operation IDs and the associated log operation description.

### Precondition:
Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.

### Postcondition:
List of available log operations is returned.

### Further Information:
None.


```js
dracoon_team.requestLogOperations({}, context)
```

#### Input
* input `object`
  * is_deprecated `boolean`: Show only deprecated operations
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [LogOperationList](#logoperationlist)

### requestGroups
### Description:  
Returns a list of user groups.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
List of user groups is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:cn:searchString`  
Filter by group name containing `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Group name filter | `cn` | Group name contains value. | `search String` |
| `hasRole` | (**`NEW`**) Group role filter<br>For more information about roles check **`GET /roles`** API | `eq` | Group role equals value. | <ul><li>`CONFIG_MANAGER` - Manages global configuration</li><li>`USER_MANAGER` - Manages users</li><li>`GROUP_MANAGER` - Manages user groups</li><li>`ROOM_MANAGER` - Manages top level rooms</li><li>`LOG_AUDITOR` - Reads audit logs</li><li>`NONMEMBER_VIEWER` - Views users and groups when having room _"manage"_ permission</li></ul> |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:asc|expireAt:desc`  
Sort by `name` ascending **AND** by `expireAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Group name |
| `createdAt` | Creation date |
| `expireAt` | Expiration date |
| `cntUsers` | Amount of users |

</details>


```js
dracoon_team.requestGroups({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [GroupList](#grouplist)

### createGroup
### Description:
Create a new user group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
A new user group is created.

### Further Information:
* If a group should **NOT** expire, leave `expireAt` empty.
* Group names are limited to **150** characters
* **All** characters are allowed.


```js
dracoon_team.createGroup({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateGroupRequest](#creategrouprequest)

#### Output
* output [Group](#group)

### removeGroup
### Description:
Delete a user group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete groups</span> required.

### Postcondition: 
User group is deleted.

### Further Information:
None.


```js
dracoon_team.removeGroup({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestGroup
### Description:  
Retrieve detailed information about a user group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
User group is returned.

### Further Information:
None.


```js
dracoon_team.requestGroup({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [Group](#group)

### updateGroup
### Description:  
Update user group's metadata .

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
User group's metadata is changed.

### Further Information:
* If a group should **NOT** expire, leave `expireAt` empty.
* Group names are limited to **150** characters
* **All** characters are allowed.


```js
dracoon_team.updateGroup({
  "group_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateGroupRequest](#updategrouprequest)

#### Output
* output [Group](#group)

### requestLastAdminRoomsGroups
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:  
Retrieve a list of all rooms where the group is defined as last admin group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
List of rooms is returned. 

### Further Information:
An empty list is returned if no rooms were found where the group is defined as last admin group.


```js
dracoon_team.requestLastAdminRoomsGroups({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [LastAdminGroupRoomList](#lastadmingrouproomlist)

### requestGroupRoles
### Description:  
Retrieve a list of all roles granted to a group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
List of granted roles is returned.

### Further Information:
None.


```js
dracoon_team.requestGroupRoles({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoleList](#rolelist)

### requestGroupRooms
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>

### Description:  
Retrieves a list of rooms granted to the group and / or that can be granted.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
List of rooms is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isGranted:eq:false|name:cn:searchString`  
Get all rooms where the group is **NOT** granted **AND** whose name is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Room name filter | `cn` | Room name contains value. | `search String` |
| `isGranted` | Filter rooms which the group is (not) granted | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`:  DIRECT **AND** EFFECTIVE permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**. | `eq` |  | `true or false`<br>default: `true` |

</details>


```js
dracoon_team.requestGroupRooms({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * group_id **required** `integer`: Group ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoomTreeDataList](#roomtreedatalist)

### removeGroupMembers
### Description:  
Remove group members.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
Provided users are removed from the user group.

### Further Information:
Batch function.  
The provided users are removed from the user group.


```js
dracoon_team.removeGroupMembers({
  "group_id": 0,
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ChangeGroupMembersRequest](#changegroupmembersrequest)

#### Output
* output [Group](#group)

### requestGroupMembers
### Description:  
Retrieve a list of group member users or / and users who can become a member.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
List of users is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isMember:eq:false|user:cn:searchString`  
Get all users that are **NOT** in this group **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
| `isMember` | Filter group members | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |

</details>


```js
dracoon_team.requestGroupMembers({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [GroupUserList](#groupuserlist)

### addGroupMembers
### Description:
Add members to a group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
New members are added to the group.

### Further Information:
Batch function.  
The newly provided members will be added to the existing ones.


```js
dracoon_team.addGroupMembers({
  "group_id": 0,
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ChangeGroupMembersRequest](#changegroupmembersrequest)

#### Output
* output [Group](#group)

### removeNodes
### Description:
Delete nodes (room, folder or file).

### Precondition:
Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).

### Postcondition:
Nodes are deleted.

### Further Information:
Nodes **MUST** be in same parent.


```js
dracoon_team.removeNodes({
  "body": {
    "nodeIds": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [DeleteNodesRequest](#deletenodesrequest)

#### Output
*Output schema unknown*

### requestNodes
### Description:  
Provides a hierarchical list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.

### Precondition:
Authenticated user.

### Postcondition:
List of nodes is returned.

### Further Information:
`EncryptionInfo` is **NOT** provided.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`type:eq:room:folder|perm:eq:read`  
Get nodes where type equals (`room` **OR** `folder`) **AND** user has `read` permissions.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `type` | Node type filter | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder` | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
| `perm` | Permission filter | `eq` | Permission equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `perm:eq:read:create:delete` | <ul><li>`manage`</li><li>`read`</li><li>`change`</li><li>`create`</li><li>`delete`</li><li>`manageDownloadShare`</li><li>`manageUploadShare`</li><li>`canReadRecycleBin`</li><li>`canRestoreRecycleBin`</li><li>`canDeleteRecycleBin`</li></ul> |
| `childPerm` | Same as `perm`, but less restrictive (applies to child nodes only).<br>Child nodes of the parent node which do not meet the filter condition<br>are **NOT** returned. | `eq` | cf. `perm` | cf. `perm` |
| `name` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
| `encrypted` | Node encryption status filter | `eq` |  | `true or false` |
| `branchVersion` | Node branch version filter | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404` | `version number` |
| `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
| `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  
Nodes are sorted by type first, then by sent sort string.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc`  
Sort by `name` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Node name |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |
| `updatedAt` | Last modification date |
| `updatedBy` | Last modifier first name, last name |
| `fileType` | File type (extension) |
| `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
| `size` | Node size |
| `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
| `timestampCreation` | Creation timestamp |
| `timestampModification` | Modification timestamp |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`cntAdmins`</del> | Number of admins (for rooms only) |
| <del>`cntUsers`</del> | Number of users (for rooms only) |
| <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |

</details>


```js
dracoon_team.requestNodes({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * depth_level `integer`: * `0` - top level nodes only
  * parent_id `integer`: Parent node ID.
  * room_manager `boolean`: Show all rooms for management perspective.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [NodeList](#nodelist)

### removeNodeComment
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:
Delete an existing comment for a specific node.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment **OR** <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> in auth parent room.

### Postcondition:
Comment is deleted.

### Further Information:
None.


```js
dracoon_team.removeNodeComment({
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * comment_id **required** `integer`: Comment ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### updateNodeComment
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:
Edit the text of an existing comment for a specific node.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment.

### Postcondition:
Comments text gets changed.

### Further Information:
Maximum allowed text length: **65535** characters.


```js
dracoon_team.updateNodeComment({
  "comment_id": 0,
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * comment_id **required** `integer`: Comment ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ChangeNodeCommentRequest](#changenodecommentrequest)

#### Output
* output [Comment](#comment)

### removeDeletedNodes
### Description:
Permanently remove a list of nodes from the recycle bin.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.

### Postcondition:
All provided nodes are removed.

### Further Information:
The removal of deleted nodes from the recycle bin is irreversible.


```js
dracoon_team.removeDeletedNodes({
  "body": {
    "deletedNodeIds": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [DeleteDeletedNodesRequest](#deletedeletednodesrequest)

#### Output
*Output schema unknown*

### restoreNodes
### Description:  
Restore a list of deleted nodes.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in parent room and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; restore recycle bin</span> permissions.

### Postcondition:
The selected files are moved from the recycle bin to the chosen productive container.

### Further Information:
If no parent ID is provided, the node is restored to its previous location.  
The default resolution strategy is `autorename` that adds numbers to the file name until the conflict is solved.  
If an existing file is overwritten, it is moved to the recycle bin instead of the restored one.

Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`


```js
dracoon_team.restoreNodes({
  "body": {
    "deletedNodeIds": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [RestoreDeletedNodesRequest](#restoredeletednodesrequest)

#### Output
*Output schema unknown*

### requestDeletedNode
### Description:  
Get metadata of a deleted node.

### Precondition:
User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.

### Postcondition:
Requested deleted node is returned.

### Further Information:
None.


```js
dracoon_team.requestDeletedNode({
  "deleted_node_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * deleted_node_id **required** `integer`: Deleted node ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [DeletedNode](#deletednode)

### setUserFileKeys
### Description:  
Sets symmetric file keys for several users and files.

### Precondition:
User has file keys for the files.  
Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>

### Postcondition:
Stores new file keys for other users.

### Further Information:
Only users with copies of the file key (encrypted with their public keys) can access a certain file.  
This endpoint is used for the distribution of file keys amongst an authorized user base.  
User can set file key for himself.  
The users who already have a file key are ignored and keep the distributed file key



```js
dracoon_team.setUserFileKeys({
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UserFileKeySetBatchRequest](#userfilekeysetbatchrequest)

#### Output
*Output schema unknown*

### createFileUploadChannel
### Description:
This endpoint creates a new upload channel which is the first step in any file upload workflow.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).

### Postcondition:
A new upload channel for a file is created.  
Its ID and an upload token are returned.

### Further Information:
The upload ID is used for uploads with `X-Sds-Auth-Token` header, the upload token can be used for uploads without authentication header.

Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.

Notes are limited to **255** characters.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `



```js
dracoon_team.createFileUploadChannel({
  "body": {
    "name": "",
    "parentId": 0,
    "timestampCreation": "",
    "timestampModification": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateFileUploadRequest](#createfileuploadrequest)

#### Output
* output [CreateFileUploadResponse](#createfileuploadresponse)

### cancelFileUpload
### Description:
Cancel a (S3) file upload and destroy the upload channel.

### Precondition:
An upload channel has been created and user has to be the creator of the upload channel.

### Postcondition:
The upload channel is removed and all temporary uploaded data is purged.

### Further Information:
It is recommended to notify the API about cancelled uploads if possible.


```js
dracoon_team.cancelFileUpload({
  "upload_id": ""
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: Upload channel ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestUploadStatusFiles
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Request status of a S3 file upload.

### Precondition:
An upload channel has been created and user has to be the creator of the upload channel.

### Postcondition:
Status of S3 multipart upload request is returned.

### Further Information:
None.

### Possible errors:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Http Status | Error Code | Description |
| :--- | :--- | :--- |
| `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
| `400 Bad Request` | `-80001` | Invalid positive number |
| `400 Bad Request` | `-80002` | Invalid number |
| `400 Bad Request` | `-40001` | (Target) room is not encrypted |
| `400 Bad Request` | `-40755` | Bad file name |
| `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
| `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
| `403 Forbidden` |  | Access denied |
| `404 Not Found` | `-20501` | Upload not found |
| `404 Not Found` | `-40000` | Container not found |
| `404 Not Found` | `-41000` | Node not found |
| `404 Not Found` | `-70501` | User not found |
| `409 Conflict` | `-40010` | Container cannot be overwritten |
| `409 Conflict` |  | File cannot be overwritten |
| `500 Internal Server Error` |  | System Error |
| `502 Bad Gateway` |  | S3 Error |
| `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
| `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
| `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
| `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |

</details>


```js
dracoon_team.requestUploadStatusFiles({
  "upload_id": ""
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: Upload channel ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [S3FileUploadStatus](#s3fileuploadstatus)

### uploadFileAsMultipart
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.9.0</h3>

### Use `uploads` API

### Description:  
Uploads a file or parts of it in an active upload channel.

### Precondition:
An upload channel has been created.

### Postcondition:
A file or parts of it are uploaded to a temporary location.

### Further Information:
This endpoints supports chunked upload.  

Following `Content-Types` are supported by this API:
* `multipart/form-data`
* provided `Content-Type`   

For both file upload types set the correct `Content-Type` header and body.  

### Examples:  

* `multipart/form-data`
```
POST /api/v4/nodes/files/uploads/{upload_id} HTTP/1.1

Header:
...
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
...

Body:
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: text/plain

Content of file.txt
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

* any other `Content-Type`  
```
POST /api/v4/nodes/files/uploads/{upload_id}  HTTP/1.1

Header:
...
Content-Type: { ... }
...

Body:
raw content
```


```js
dracoon_team.uploadFileAsMultipart({
  "upload_id": ""
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: Upload channel ID
  * Content-Range `string`: Content-Range
  * X-Sds-Auth-Token `string`: Authentication token
  * file `string`

#### Output
* output [ChunkUploadResponse](#chunkuploadresponse)

### completeFileUpload
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.9.0</h3>

### Use `uploads` API

### Description:
Finishes an upload and closes the corresponding upload channel.

### Precondition:
An upload channel has been created and data has been transmitted.

### Postcondition:
The upload is finished and the temporary file is moved to the productive environment.

### Further Information:
The provided file name might be changed in accordance with the resolution strategy:  
* **autorename**: changes the file name and adds a number to avoid conflicts.
* **overwrite**: deletes any old file with the same file name.
* **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.

Please ensure that all chunks have been transferred correctly before finishing the upload.  
Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


```js
dracoon_team.completeFileUpload({
  "upload_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * upload_id **required** `string`: Upload channel ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CompleteUploadRequest](#completeuploadrequest)

#### Output
* output [Node](#node)

### completeS3FileUpload
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Finishes a S3 file upload and closes the corresponding upload channel.

### Precondition:
An upload channel has been created, data has been transmitted and user has to be the creator of the upload channel

### Postcondition:
Upload channel is closed. S3 multipart upload request is completed.

### Further Information:
Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`


```js
dracoon_team.completeS3FileUpload({
  "upload_id": "",
  "body": {
    "parts": []
  }
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: Upload channel ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CompleteS3FileUploadRequest](#completes3fileuploadrequest)

#### Output
*Output schema unknown*

### generatePresignedUrlsFiles
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Generate presigned URLs for S3 file upload.

### Precondition:
An upload channel has been created and user has to be the creator of the upload channel.

### Postcondition:
List of presigned URLs is returned.

### Further Information:
The size for each part must be >= 5 MB, except for the last part.  
The part number of the first part in S3 is 1 (not 0).  
Use HTTP method `PUT` for uploading bytes via presigned URL.


```js
dracoon_team.generatePresignedUrlsFiles({
  "upload_id": "",
  "body": {
    "firstPartNumber": 0,
    "lastPartNumber": 0,
    "size": 0
  }
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: Upload channel ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [GeneratePresignedUrlsRequest](#generatepresignedurlsrequest)

#### Output
* output [PresignedUrlList](#presignedurllist)

### updateFile
### Description:  
Updates file’s metadata.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.

### Postcondition:
File's metadata is changed.

### Further Information:
Notes are limited to **255** characters.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `



```js
dracoon_team.updateFile({
  "file_id": 0,
  "body": {
    "timestampCreation": "",
    "timestampModification": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * file_id **required** `integer`: File ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateFileRequest](#updatefilerequest)

#### Output
* output [Node](#node)

### requestRoomRescueKey
### Description:  
Returns the file key for the room emergency password / rescue key of a certain file (if available).

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
File key is returned.

### Further Information:
None.


```js
dracoon_team.requestRoomRescueKey({
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [FileKey](#filekey)

### requestSystemRescueKey
### Description:  
Returns the file key for the system emergency password / rescue key of a certain file (if available).

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
File key is returned.

### Further Information:
None.


```js
dracoon_team.requestSystemRescueKey({
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [FileKey](#filekey)

### downloadFile
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>

### Use `downloads` API

### Description:
Download a file.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported for details.


```js
dracoon_team.downloadFile({
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return `application/octet-stream` instead of specific mimetype
  * inline `boolean`: Use Content-Disposition: `inline` instead of `attachment`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### downloadFile_1
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>

### Use `downloads` API

### Description:
Download a file.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported for details.


```js
dracoon_team.downloadFile_1({
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return `application/octet-stream` instead of specific mimetype
  * inline `boolean`: Use Content-Disposition: `inline` instead of `attachment`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### generateDownloadUrl
### Description:
Create a download URL to retrieve a file without `X-Sds-Auth-Token` Header.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
Download token is generated and returned.

### Further Information:
The token is necessary to access `downloads` ressources.


```js
dracoon_team.generateDownloadUrl({
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [DownloadTokenGenerateResponse](#downloadtokengenerateresponse)

### requestUserFileKey
### Description:  
Returns the file key for the current user (if available).

### Precondition:
User with one of the following permissions in parent room: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>

### Postcondition:
File key is returned.

### Further Information:
The symmetric file key is encrypted with the user's public key.  
File keys are generated with the workflow _"Generate file keys"_ that starts at `GET /nodes/missingFileKeys`.


```js
dracoon_team.requestUserFileKey({
  "file_id": 0
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [FileKey](#filekey)

### createFolder
### Description:
Create a new folder.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in current room.

### Postcondition:
New folder is created.

### Further Information:
Folders **CANNOT** be created on top level (without parent element).  
Notes are limited to **255** characters.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `



```js
dracoon_team.createFolder({
  "body": {
    "name": "",
    "parentId": 0,
    "timestampCreation": "",
    "timestampModification": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateFolderRequest](#createfolderrequest)

#### Output
* output [Node](#node)

### updateFolder
### Description:  
Updates folder’s metadata.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.

### Postcondition:
Folder's metadata is changed.

### Further Information:
Notes are limited to **255** characters.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `



```js
dracoon_team.updateFolder({
  "folder_id": 0,
  "body": {
    "timestampCreation": "",
    "timestampModification": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * folder_id **required** `integer`: Folder ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateFolderRequest](#updatefolderrequest)

#### Output
* output [Node](#node)

### requestMissingFileKeys
### Description:  
Requests a list of missing file keys that may be generated by the current user.  

### Precondition:
User has a key pair.  
Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>

### Postcondition:
None.

### Further Information:
Clients **SHOULD** regularly request missing file keys to provide access to files for other users.  
The returned list is ordered by priority (emergency passwords / rescue keys are returned first).  
There might be more entries even if a total of **1024** is returned.



```js
dracoon_team.requestMissingFileKeys({}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * room_id `integer`: Room ID
  * file_id `integer`: File ID
  * user_id `integer`: User ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [MissingKeysResponse](#missingkeysresponse)

### createRoom
### Description:
Creates a new room at the provided parent node.  
Creation of top level rooms provided.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span> permissions in the parent room.

### Postcondition:
A new room is created.

### Further Information:  
Rooms may only have other rooms as parent.  
Rooms on top level do **NOT** have any parent.  
Rooms may have rooms as children on n hierarchy levels.  
If permission inheritance is disabled, there **MUST** be at least one admin user / group (with neither the group nor the user having an expiration date).

Notes are limited to **255** characters.

Provided (or default) classification is taken from room when file gets uploaded without any classification.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


```js
dracoon_team.createRoom({
  "body": {
    "name": "",
    "timestampCreation": "",
    "timestampModification": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateRoomRequest](#createroomrequest)

#### Output
* output [Node](#node)

### requestPendingAssignments
### Description:  
Requests a list of user-room assignments by groups that have **NOT** been approved yet  
These can have the state:
* **WAITING**  
* **DENIED**  
* **ACCEPTED**  

**ACCEPTED** assignments are already removed from the list.

### Precondition:
None.

### Postcondition:
List of user-room assignments is returned.

### Further Information:
Room administrators **SHOULD** regularly request pending assingments to provide access to rooms for other users.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`state:eq:WAITING`  
Filter assignments by state `WAITING`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
| `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
| `roomId` | Room ID filter | `eq` | Room ID equals value. | `positive Integer` |
| `state` | Assignment state | `eq` | Assignment state equals value. | `WAITING or DENIED` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`userId:desc`  
Sort by `userId` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `userId` | User ID |
| `groupId` | Group ID |
| `roomId` | Room ID |
| `state` | State |

</details>


```js
dracoon_team.requestPendingAssignments({}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [PendingAssignmentList](#pendingassignmentlist)

### changePendingAssignments
### Description:  
Handles a list of user-room assignments by groups that have **NOT** been approved yet  
**WAITING** or **DENIED** assignments can be **ACCEPTED**.

### Precondition:
None.

### Postcondition:
User-room assignment is approved and the user gets access to the group.

### Further Information:
Room administrators should **SHOULD** handle pending assignments to provide access to rooms for other users.


```js
dracoon_team.changePendingAssignments({
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [PendingAssignmentsRequest](#pendingassignmentsrequest)

#### Output
*Output schema unknown*

### updateRoom
### Description:  
Updates room’s metadata.

### Precondition:
User is a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> at superordinated level.

### Postcondition:
Room's metadata is changed.

### Further Information:
Notes are limited to **255** characters.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


```js
dracoon_team.updateRoom({
  "room_id": 0,
  "body": {
    "timestampCreation": "",
    "timestampModification": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateRoomRequest](#updateroomrequest)

#### Output
* output [Node](#node)

### requestRoomActivitiesLogAsJsonOld
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>

### Description:
Retrieve syslog (audit log) events related to a room.

### Precondition:
Requires <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on that room.

### Postcondition:
List of events is returned.

### Further Information:
Output may be limited to a certain number of entries.  
Please use filter criteria and paging.

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`time:desc`  
Sort by `time` descending (default sort option).

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `time` | Event timestamp |

</details>


```js
dracoon_team.requestRoomActivitiesLogAsJsonOld({
  "room_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * room_id **required** `integer`: Room ID
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * date_start `string`: Filter events from given date
  * date_end `string`: Filter events until given date
  * type `integer`: Operation ID
  * user_id `integer`: User ID
  * status `integer`: Operation status:
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [SyslogEventList](#syslogeventlist)

### configureRoom
### Description:
Configure a room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Room's configuration is changed.

### Further Information:
Provided (or default) classification is taken from room when file gets uploaded without any classification.  

To set `adminIds` or `adminGroupIds` the `inheritPermissions` value has to be `false`. Otherwise use:
* `PUT /nodes/rooms/{room_id}/groups`
* `PUT /nodes/rooms/{room_id}/users `  

APIs.


```js
dracoon_team.configureRoom({
  "room_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ConfigRoomRequest](#configroomrequest)

#### Output
* output [Node](#node)

### encryptRoom
### Description:  
Activates the client-side encryption for a room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Encryption of room is activated.

### Further Information:
Only empty rooms at the top level may be encrypted.  
This endpoint may also be used to disable encryption of an empty room.


```js
dracoon_team.encryptRoom({
  "room_id": 0,
  "body": {
    "isEncrypted": true
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [EncryptRoomRequest](#encryptroomrequest)

#### Output
* output [Node](#node)

### requestRoomActivitiesLogAsJson
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description:
Retrieve syslog (audit log) events related to a room.

### Precondition:
Requires <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on that room.

### Postcondition:
List of events is returned.

### Further Information:
Output may be limited to a certain number of entries.  
Please use filter criteria and paging.

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`time:desc`  
Sort by `time` descending (default sort option).

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `time` | Event timestamp |

</details>


```js
dracoon_team.requestRoomActivitiesLogAsJson({
  "room_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * room_id **required** `integer`: Room ID
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * date_start `string`: Filter events from given date
  * date_end `string`: Filter events until given date
  * type `integer`: Operation ID
  * user_id `integer`: User ID
  * status `integer`: Operation status:
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [LogEventList](#logeventlist)

### revokeRoomGroups
### Description:  
Revoke granted groups from room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Group's permissions are revoked.

### Further Information:
Batch function.  


```js
dracoon_team.revokeRoomGroups({
  "room_id": 0,
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [RoomGroupsDeleteBatchRequest](#roomgroupsdeletebatchrequest)

#### Output
*Output schema unknown*

### requestRoomGroups
### Description:  
Retrieve a list of groups that are and / or can be granted to the room.

### Precondition:
Any permissions on target room.

### Postcondition:
List of groups is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isGranted:eq:false|name:cn:searchString`  
Get all groups that are **NOT** granted to this room **AND** whose name is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Group name filter | `cn` | Group name contains value. | `search String` |
| `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
| `isGranted` | Filter the groups that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for groups in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `permissionsManage` | Filter the groups that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
| `effectivePerm` | Filter groups with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**. | `eq` |  | `true or false`<br>default: `false` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc`  
Sort by `name` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Group name |

</details>


```js
dracoon_team.requestRoomGroups({
  "room_id": 0
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoomGroupList](#roomgrouplist)

### updateRoomGroups
### Description:
All existing group permissions will be overwritten.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.

### Postcondition:
Group's permissions are changed.

### Further Information:
Batch function.  



```js
dracoon_team.updateRoomGroups({
  "room_id": 0,
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [RoomGroupsAddBatchRequest](#roomgroupsaddbatchrequest)

#### Output
*Output schema unknown*

### requestRoomRescueKeyPair
### Description:  
Retrieve the room emergency password (rescue key).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.

### Postcondition:
Key pair is returned.

### Further Information:
None.


```js
dracoon_team.requestRoomRescueKeyPair({
  "room_id": 0
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UserKeyPairContainer](#userkeypaircontainer)

### requestRoomS3Tags
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Retrieve a list of S3 tags assigned to a room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
List of assigned S3 tags is returned.

### Further Information:
None.


```js
dracoon_team.requestRoomS3Tags({
  "room_id": 0
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [S3TagList](#s3taglist)

### setRoomS3Tags
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Set S3 tags to a room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Provided S3 tags are assigned to a room.

### Further Information:
Every request overrides current S3 tags.  
Mandatory S3 tag IDs **MUST** be sent.


```js
dracoon_team.setRoomS3Tags({
  "room_id": 0,
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [S3TagIds](#s3tagids)

#### Output
* output [S3TagList](#s3taglist)

### revokeRoomUsers
### Description:  
Revoke granted users from room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
User's permissions are revoked.

### Further Information:
Batch function.  


```js
dracoon_team.revokeRoomUsers({
  "room_id": 0,
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [RoomUsersDeleteBatchRequest](#roomusersdeletebatchrequest)

#### Output
*Output schema unknown*

### requestRoomUsers
### Description:  
Retrieve a list of users that are and / or can be granted to the room.

### Precondition:
Any permissions on target room.

### Postcondition:
None.

### Further Information:
List of users is returned.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

> `permissionsManage:eq:true|user:cn:searchString`  
Get all users that have `manage` permissions to this room **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
| `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
| `isGranted` | Filter the users that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for users in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
| `effectivePerm` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`user:desc`  
Sort by `user` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`user`** | User - sort by `firstName`, `lastName`, `username`, `email` (in this order) |

</details>


```js
dracoon_team.requestRoomUsers({
  "room_id": 0
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoomUserList](#roomuserlist)

### updateRoomUsers
### Description:
All existing user permissions will be overwritten.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.

### Postcondition:
User's permissions are changed.

### Further Information:
Batch function.


```js
dracoon_team.updateRoomUsers({
  "room_id": 0,
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [RoomUsersAddBatchRequest](#roomusersaddbatchrequest)

#### Output
*Output schema unknown*

### requestListOfWebhooksForRoom
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of webhooks for the room scope with their assignment status.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
List of webhooks is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isAssigned:eq:true`  
Get a list of assigned webhooks to the room.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`isAssigned`** | Assigned/unassigned webhooks filter | `eq` |  | `true or false` |

</details>


```js
dracoon_team.requestListOfWebhooksForRoom({
  "room_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * room_id **required** `integer`: Room ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoomWebhookList](#roomwebhooklist)

### handleRoomWebhookAssignments
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Handle room webhook assignments.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
List of webhooks is returned.

### Further Information:
None.

### Available event types:

<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
| **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
| **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
| **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
| **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
| **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
| **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
| **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
| **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
| **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
| **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
| **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |

</details>


```js
dracoon_team.handleRoomWebhookAssignments({
  "room_id": 0,
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateRoomWebhookRequest](#updateroomwebhookrequest)

#### Output
* output [RoomWebhookList](#roomwebhooklist)

### searchNodes
### Description:  
Provides a flat list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.

### Precondition:
Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> nodes (i.e. `isBrowsable = true`).

### Postcondition:
List of nodes is returned.

### Further Information:  
Output is limited to **500** entries.  
For more results please use filter criteria and paging (`offset` + `limit`).  
`EncryptionInfo` is **NOT** provided.  
Wildcard character is the asterisk character: `*`

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`type:eq:file|createdAt:ge:2015-01-01`  
Get nodes where type equals `file` **AND** file creation date is **>=** `2015-01-01`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `type` | Node type filter | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder` | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
| `fileType` | File type filter (file extension) | `cn, eq` | File type contains / equals value. | `search String` |
| `classification` | Classification filter | `eq` | Classification equals value. | <ul><li>`1` - public</li><li>`2` - internal</li><li>`3` - confidential</li><li>`4` - strictly confidential</li></ul> |
| `createdBy` | Creator login filter | `cn, eq` | Creator login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
| `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `updatedBy` | Last modifier login filter | `cn, eq` | Last modifier login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
| `updatedById` | Last modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |
| `updatedAt` | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `expireAt` | Expiration date filter | `ge, le` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expireAt:ge:2016-12-31`&#124;`expireAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `size` | Node size filter | `ge, le` | Node size is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `size:ge:5`&#124;`size:le:10` | `size in bytes` |
| `isFavorite` | Favorite filter | `eq` |  | `true or false` |
| `branchVersion` | Node branch version filter | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404` | `version number` |
| `parentPath` | Parent path | `cn, eq` | Parent path contains / equals  value. | `search String` |
| `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
| `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc`  
Sort by `name` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Node name |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |
| `updatedAt` | Last modification date |
| `updatedBy` | Last modifier first name, last name |
| `fileType` | File type (extension) |
| `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
| `size` | Node size |
| `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
| `type` | Node type (room, folder, file) |
| `parentPath` | Parent path |
| `timestampCreation` | Creation timestamp |
| `timestampModification` | Modification timestamp |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`cntAdmins`</del> | Number of admins (for rooms only) |
| <del>`cntUsers`</del> | Number of users (for rooms only) |
| <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |

</details>


```js
dracoon_team.searchNodes({
  "search_string": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * search_string **required** `string`: Search string
  * depth_level `integer`: * `0` - top level nodes only (default)
  * parent_id `integer`: Parent node ID.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [NodeList](#nodelist)

### generateDownloadUrlForZipArchive
### Description:  
Create a download URL to retrieve several files in one ZIP archive.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
Download URL is generated and returned.

### Further Information:
The token is necessary to access `downloads` resources.  
ZIP download is only available for files and folders.


```js
dracoon_team.generateDownloadUrlForZipArchive({
  "body": {
    "nodeIds": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ZipDownloadRequest](#zipdownloadrequest)

#### Output
* output [DownloadTokenGenerateResponse](#downloadtokengenerateresponse)

### downloadZipArchive
### Description:  
Download multiple files in a ZIP archive.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.

### Postcondition:
Stream is returned.

### Further Information:
None.


```js
dracoon_team.downloadZipArchive({
  "body": {
    "nodeIds": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ZipDownloadRequest](#zipdownloadrequest)

#### Output
*Output schema unknown*

### removeNode
### Description:
Delete node (room, folder or file).

### Precondition:
Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).

### Postcondition:
Node gets deleted.

### Further Information:
None.


```js
dracoon_team.removeNode({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestNode
### Description:  
Get node (room, folder or file).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.

### Postcondition:
Requested node is returned.

### Further Information:
None.


```js
dracoon_team.requestNode({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [Node](#node)

### requestNodeComments
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:
Get comments for a specific node.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.

### Postcondition:
List with comments (sorted by `createdAt` timestamp) is returned.

### Further Information:
An empty list is returned if no comments were found.  
Output is limited to **500** entries.  
For more results please use filter criteria and paging (`offset` + `limit`). 



```js
dracoon_team.requestNodeComments({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * node_id **required** `integer`: Node ID
  * hide_deleted `boolean`: Hide deleted comments
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [CommentList](#commentlist)

### createNodeComment
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:
Create a comment for a specific node.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.

### Postcondition:
Comment is created.

### Further Information:
Maximum allowed text length: **65535** characters.


```js
dracoon_team.createNodeComment({
  "node_id": 0,
  "body": {
    "text": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateNodeCommentRequest](#createnodecommentrequest)

#### Output
* output [Comment](#comment)

### copyNodes
### Description:
Copies nodes (folder, file) to another parent.

### Precondition:
Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.

### Postcondition:
Nodes are copied to target parent.

### Further Information:
Nodes **MUST** be in same source parent.  
**Rooms **CANNOT** be copied.**

Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `



```js
dracoon_team.copyNodes({
  "node_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * node_id **required** `integer`: Target parent node ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CopyNodesRequest](#copynodesrequest)

#### Output
* output [Node](#node)

### emptyDeletedNodes
### Description:  
Empty a recycle bin.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.

### Postcondition:
All files in the recycle bin are permanently removed.

### Further Information:
Actually removes the previously deleted files from the system.  
**This action is irreversible.**


```js
dracoon_team.emptyDeletedNodes({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Room ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestDeletedNodesSummary
### Description:  
Retrieve a list of deleted nodes in a recycle bin.

### Precondition:
User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.

### Postcondition:
List of deleted nodes is returned.

### Further Information:
Only room IDs are accepted as parent ID since only rooms may have a recycle bin.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`type:eq:file:folder|name:cn:searchString_1|parentPath:cn:searchString_2`  
Get deleted nodes where type equals (`file` **OR** `folder`) **AND** deleted node name containing `searchString_1` **AND** deleted node parent path containing `searchString 2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `type` | Node type filter | `eq` | Node type equals value(s).<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:folder:file` | <ul><li>`folder`</li><li>`file`</li></ul> |
| `name` | Node name filter | `cn` | Node name contains value. | `search String` |
| `parentPath` | Parent path filter | `cn` | Parent path contains value. | `search String` |
| `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31`&#124;<br>`timestampCreation:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  
Nodes are sorted by type first, then by sent sort string.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc`  
Sort by `name` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Node name |
| `cntVersions` | Number of deleted versions of this file |
| `firstDeletedAt` | First deleted version |
| `lastDeletedAt` | Last deleted version |
| `parentPath` | Parent path of deleted node |
| `timestampCreation` | Creation timestamp |
| `timestampModification` | Modification timestamp |

</details>


```js
dracoon_team.requestDeletedNodesSummary({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * node_id **required** `integer`: Parent ID (can only be a room ID)
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [DeletedNodeSummaryList](#deletednodesummarylist)

### requestDeletedNodeVersions
### Description:  
Retrieve all deleted versions of a node.

### Precondition:
User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.

### Postcondition:
List of deleted versions of a node is returned.

### Further Information:
The node is identified by three parameters:
* parent ID (only room IDs are accepted as parent ID since only rooms may have a recycle bin.)
* name
* type (file, folder).

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`expireAt:desc`  
Sort by `expireAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `expireAt` | Expiration date |
| `accessedAt` | Last access date |
| `size` | Node size |
| `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |
| `updatedAt` | Last modification date |
| `updatedBy` | Last modifier first name, last name |
| `deletedAt` | Deleted date |
| `deletedBy` | Deleter first name, last name |

</details>


```js
dracoon_team.requestDeletedNodeVersions({
  "node_id": 0,
  "type": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * node_id **required** `integer`: Parent ID (room or folder ID)
  * type **required** `string`: Node type
  * name **required** `string`: Node name
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [DeletedNodeVersionsList](#deletednodeversionslist)

### removeFavorite
### Description:
Unmarks a node (room, folder or file) as favorite.

### Precondition:
Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).

### Postcondition:
A node gets unmarked as favorite.

### Further Information:
None.


```js
dracoon_team.removeFavorite({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### addFavorite
### Description:  
Marks a node (room, folder or file) as favorite.

### Precondition:
Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).

### Postcondition:
A node gets marked as favorite.

### Further Information:
None.


```js
dracoon_team.addFavorite({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [Node](#node)

### moveNodes
### Description:  
Moves nodes (folder, file) to another parent.

### Precondition:
Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.

### Postcondition:
Nodes are moved to target parent.

### Further Information:
Nodes **MUST** be in same source parent.  
**Rooms **CANNOT** be moved.**

Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `



```js
dracoon_team.moveNodes({
  "node_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * node_id **required** `integer`: Target parent node ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [MoveNodesRequest](#movenodesrequest)

#### Output
* output [Node](#node)

### requestNodeParents
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:  
Requests a list of node ancestors, sorted from root node to the node's direct parent node.

### Precondition:
User is allowed to browse through the node tree until the requested node.

### Postcondition:
List of parent nodes is returned.

### Further Information:
None.


```js
dracoon_team.requestNodeParents({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [NodeParentList](#nodeparentlist)

### requestCustomers
### Description:  
Receive a list of customers.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
List of customers is returned.

### Further Information:
This list returns a maximum of **1000** entries.  

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`trialDaysLeft:le:10|userMax:le:100`  
Get all customers with `10` trial days left **AND** user maximum **<=** `100`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `id` | Customer ID filter | `eq` | Customer ID equals value. | `positive Integer` |
| `companyName` | Company name filter | `cn` | Company name contains value. | `search String` |
| `customerContractType` | Customer contract type filter | `eq` | Customer contract type equals value. | <ul><li>`demo`</li><li>`free`</li><li>`pay`</li></ul> |
| `trialDaysLeft` | Left trial days filter | `ge, le` | Left trial days are greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `trialDaysLeft:ge:5`&#124;`trialDaysLeft:le:10` |
| `providerCustomerId` | Provider Customer ID filter | `cn, eq` | Provider Customer ID contains / equals value. | `search String` |
| `quotaMax` | Maximum quota filter | `ge, le` | Maximum quota is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `quotaMax:ge:1024`&#124;`quotaMax:le:1073741824` | `positive Integer` |
| `quotaUsed` | Used quota filter | `ge, le` | Used quota is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `quotaUsed:ge:1024`&#124;`quotaUsed:le:1073741824` | `positive Integer` |
| `userMax` | User maximum filter | `ge, le` | User maxiumum is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `userMax:ge:10`&#124;`userMax:le:100` | `positive Integer` |
| `userUsed` | Number of registered users filter | `ge, le` | Number of registered users is is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `userUsed:ge:10`&#124;`userUsed:le:100` | `positive Integer` |
| `isLocked` | Lock status filter | `eq` |  | `true or false` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `updatedAt` | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `lastLoginAt` | Last login date filter | `ge, le` | Last login date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `lastLoginAt:ge:2016-12-31`&#124;`lastLoginAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `userLogin` | User login filter | `eq` | User login name equals value.<br>Search user all logins e.g. `basic`, `active_directory`, `radius`. | `search String` |
| `attributeKey` | Customer attribute key filter | `eq`, `nex` | Customer attribute key equals value / Customer attribute does **NOT** exist at customer | `search String` |
| `attributeValue` | Customer attribute value filter | `eq` | Customer attribute value equals value. | `search String` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`activationCode`</del> | Activation code filter | `cn, eq` | Activation code contains / equals value. | `search String` |
| <del>`lockStatus`</del> | Lock status filter | `eq` |  | <ul><li>`0` - unlocked</li><li>`1` - locked</li></ul> |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`companyName:desc`  
Sort by `companyName` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `companyName` | Company name |
| `customerContractType` | Customer contract type |
| `trialDaysLeft` | Number of remaining trial days (demo customers) |
| `providerCustomerId` | Provider Customer ID |
| `quotaMax` | Maximum quota |
| `quotaUsed` | Currently used quota |
| `userMax` | Maximum user number |
| `userUsed` | Number of registered users |
| `isLocked` | Lock status of customer |
| `createdAt` | Creation date |
| `updatedAt` | Last modification date |
| `lastLoginAt` | Last login date of any user of this customer |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`lockStatus`</del> | Lock status of customer |

</details>


```js
dracoon_team.requestCustomers({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * include_attributes `boolean`: Include custom customer attributes.
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
* output [CustomerList](#customerlist)

### createCustomer
### Description:
Create a new customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.  

### Postcondition:
A new customer is created.

### Further Information:
If no company name is set, first letter of the first name separated by dot following by last name of the first administrator is used (e.g. `J.Doe`).  
Max quota has to be at least `1 MB` (= `1.048.576 B`).

If `basic` authentication is enabled, the first administrator will get `basic` authentication by default.  
To create a first administrator without `basic` authentication it **MUST** be disabled explicitly.  

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]

### Authentication Method Options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Option Key | Option Value |
| :--- | :--- | :--- |
| `basic` / `sql` | `username` | Unique user identifier |
| `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
|  | `username` | Active Directory username according to authentication setting `userFilter` |
| `radius` | `username` | RADIUS username |
| `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
|  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |

</details>



```js
dracoon_team.createCustomer({
  "body": {
    "customerContractType": "",
    "firstAdminUser": {
      "firstName": "",
      "lastName": ""
    },
    "quotaMax": 0,
    "userMax": 0
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Service-Token `string`: Service Authentication token
  * body **required** [NewCustomerRequest](#newcustomerrequest)

#### Output
* output [NewCustomerResponse](#newcustomerresponse)

### removeCustomer
### Description:
Delete a customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
Customer is deleted.

### Further Information:
None.


```js
dracoon_team.removeCustomer({
  "customer_id": 0
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
*Output schema unknown*

### requestCustomer
### Description:  
Receive details of a selected customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
Customer details are returned.

### Further Information:
None.


```js
dracoon_team.requestCustomer({
  "customer_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * customer_id **required** `integer`: Customer ID
  * include_attributes `boolean`: Include custom customer attributes.
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
* output [Customer](#customer)

### updateCustomer
### Description:  
Change selected attributes of a customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
Selected attributes of customer are updated.

### Further Information:
None.


```js
dracoon_team.updateCustomer({
  "customer_id": 0,
  "body": {
    "customerContractType": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * customer_id **required** `integer`: Customer ID
  * X-Sds-Service-Token `string`: Service Authentication token
  * body **required** [UpdateCustomerRequest](#updatecustomerrequest)

#### Output
* output [UpdateCustomerResponse](#updatecustomerresponse)

### requestCustomerAttributes
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>

### Description:  
Retrieve a list of customer attributes.

### Precondition:
Authentication with `X-Sds-Service-Token` required.  
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read all customers</span> required.

### Postcondition:
List of attributes is returned.

### Further Information:

### Filtering:
Filters are case insensitive.  
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:cn:searchString_1|value:cn:searchString_2`  
Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `key` | Customer attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
| `value` | Customer attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:asc|value:desc`  
Sort by `key` ascending **AND** by `value` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `key` | Customer attribute key |
| `value` | Customer attribute value |

</details>


```js
dracoon_team.requestCustomerAttributes({
  "customer_id": 0
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
* output [AttributesResponse](#attributesresponse)

### setCustomerAttributes
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>

### Description:  
Set custom customer attributes.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.

### Postcondition:
Custom customer attributes gets set.

### Further Information:
Batch function.  
All existing customer attributes will be deleted.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.



```js
dracoon_team.setCustomerAttributes({
  "customer_id": 0,
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * customer_id **required** `integer`: Customer ID
  * X-Sds-Service-Token `string`: Service Authentication token
  * body **required** [CustomerAttributes](#customerattributes)

#### Output
* output [Customer](#customer)

### updateCustomerAttributes
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>

### Description:  
Add or edit custom customer attributes.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.

### Postcondition:
Custom customer attributes get added or edited.

### Further Information:
Batch function.  
If an entry exists before, it will be overwritten.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.


```js
dracoon_team.updateCustomerAttributes({
  "customer_id": 0,
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * customer_id **required** `integer`: Customer ID
  * X-Sds-Service-Token `string`: Service Authentication token
  * body **required** [CustomerAttributes](#customerattributes)

#### Output
* output [Customer](#customer)

### removeCustomerAttribute
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>

### Description:
Delete a custom customer attribute.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.

### Postcondition:
Custom customer attribute gets deleted.

### Further Information:
* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.


```js
dracoon_team.removeCustomerAttribute({
  "customer_id": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * key **required** `string`: Key
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
*Output schema unknown*

### requestCustomerUsers
### Description:  
Receive a list of users associated with a certain customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
List of customer users is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Except for `login`, `firstName` and  `lastName` - these are connected via logical disjunction (**OR**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`  
Filter users by login contains `searchString_1` **OR** firstName contains `searchString_2` **AND** those who are **NOT** locked.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `email` | Email filter | `eq`, `cn` | Email contains value. | `search String` |
| `userName` | User name filter | `eq`, `cn` | UserName contains value. | `search String` |
| `firstName` | User first name filter | `cn` | User first name contains value. | `search String` |
| `lastName` | User last name filter | `cn` | User last name contains value. | `search String` |
| `isLocked` | User lock status filter | `eq` |  | `true or false` |
| `effectiveRoles` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles<ul><li>`false`: DIRECT roles</li><li>`true`: DIRECT **AND** EFFECTIVE roles</li></ul>DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.<br>EFFECTIVE means: e.g. user gets role through **group membership**. | `eq` |  | `true or false`<br>default: `false` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `phone` | Phone filter | `eq` | Phone equals value. | `search String` |
| `isEncryptionEnabled` | Encryption status filter<ul><li>client-side encryption</li><li>private key possession</li></ul> | `eq` |  | `true or false` |
| `hasRole` | (**`NEW`**) User role filter<br>Depends on **effectiveRoles**.<br>For more information about roles check **`GET /roles`** API | `eq` | User role equals value. | <ul><li>`CONFIG_MANAGER` - Manages global configuration</li><li>`USER_MANAGER` - Manages users</li><li>`GROUP_MANAGER` - Manages user groups</li><li>`ROOM_MANAGER` - Manages top level rooms</li><li>`LOG_AUDITOR` - Reads audit logs</li><li>`NONMEMBER_VIEWER` - Views users and groups when having room _"manage"_ permission</li></ul> |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`lockStatus`</del> | User lock status filter | `eq` | User lock status equals value. | <ul><li>`0` - Locked</li><li>`1` - Web access allowed</li><li>`2` - Web and mobile access allowed</li></ul> |
| <del>`login`</del> |  User login filter | `cn` | User login contains value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`firstName:asc|lastLoginSuccessAt:desc`  
Sort by `firstName` ascending **AND** by `lastLoginSuccessAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `userName` | User name |
| `email` | User email |
| `firstName` | User first name |
| `lastName` | User last name |
| `isLocked` | User lock status |
| `lastLoginSuccessAt` | Last successful login date |
| `expireAt` | Expiration date |
| `createdAt` | Creation date |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`gender`</del> | Gender |
| <del>`lockStatus`</del> | User lock status |
| <del>`login`</del> | User login |

</details>


```js
dracoon_team.requestCustomerUsers({
  "customer_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * customer_id **required** `integer`: Customer ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
* output [UserList](#userlist)

### requestListOfTenantWebhooks
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of webhooks for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
List of webhooks is returned.

### Further Information:  
Output is limited to **500** entries.  
For more results please use filter criteria and paging (`offset` + `limit`).  
`EncryptionInfo` is **NOT** provided.  
Wildcard character is the asterisk character: **`*`**

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:cn:goo|createdAt:ge:2015-01-01`  
Get webhooks where name contains `goo` **AND** webhook creation date is **>=** `2015-01-01`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`id`** | Webhook id filter | `eq` | Webhook id equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**). |`positive number`|
| **`name`** | Webhook type name| `cn, eq` | Webhook name contains / equals value. | `search String` |
| **`isEnabled`** | Webhook isEnabled filter | `eq` |  | `true or false` |
| **`createdAt`** | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| **`updatedAt`** | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| **`expiration`** | Expiration date filter | `ge, le, eq` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expiration:ge:2016-12-31`&#124;`expiration:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| **`lastFailStatus`** | Failure status filter | `eq` | Last HTTP status code. Set when a webhook is auto-disabled due to repeated delivery failures |`positive number`|

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc`  
Sort by `name` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`id`** | Webhook id |
| **`name`** | Webhook name |
| **`isEnabled`** | Webhook isEnabled |
| **`createdAt`** | Creation date |
| **`updatedAt`** | Last modification date |
| **`expiration`** | Expiration date |

</details>



```js
dracoon_team.requestListOfTenantWebhooks({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
* output [WebhookList](#webhooklist)

### createTenantWebhook
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Create a new webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Webhook is created for given event types.

### Further Information:
URL must begin with the `HTTPS` scheme.
Webhook names are limited to 150 characters.

### Available event types:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`customer.created`** | Triggered when a new customer is created | Tenant Webhook |
| **`customer.deleted`** | Triggered when a user is deleted | Tenant Webhook |
| **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Tenant Webhook |

</details>


```js
dracoon_team.createTenantWebhook({
  "body": {
    "eventTypeNames": [],
    "name": "",
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Service-Token `string`: Service Authentication token
  * body **required** [CreateWebhookRequest](#createwebhookrequest)

#### Output
* output [Webhook](#webhook)

### requestListOfEventTypesForTenant
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of available event types.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
List of available event types is returned.

### Further Information:
None.


```js
dracoon_team.requestListOfEventTypesForTenant({}, context)
```

#### Input
* input `object`
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
* output [EventTypeList](#eventtypelist)

### removeTenantWebhook
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Delete a webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Webhook is deleted.

### Further Information:
None.


```js
dracoon_team.removeTenantWebhook({
  "webhook_id": 0
}, context)
```

#### Input
* input `object`
  * webhook_id **required** `integer`: Webhook ID
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
*Output schema unknown*

### requestTenantWebhook
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a specific webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Webhook is returned.

### Further Information:
None.


```js
dracoon_team.requestTenantWebhook({
  "webhook_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * webhook_id **required** `integer`: Webhook ID
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
* output [Webhook](#webhook)

### updateTenantWebhook
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Update an existing webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Webhook is updated.

### Further Information:
URL must begin with the `HTTPS` scheme.
Webhook names are limited to 150 characters.

### Available event types:

<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`customer.created`** | Triggered when a new customer is created | Tenant Webhook |
| **`customer.deleted`** | Triggered when a user is deleted | Tenant Webhook |
| **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Tenant Webhook |

</details>


```js
dracoon_team.updateTenantWebhook({
  "webhook_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * webhook_id **required** `integer`: Webhook ID
  * X-Sds-Service-Token `string`: Service Authentication token
  * body **required** [UpdateWebhookRequest](#updatewebhookrequest)

#### Output
* output [Webhook](#webhook)

### resetTenantWebhookLifetime
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Reset the lifetime of a webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Lifetime of the webhook is reset.

### Further Information:
None.


```js
dracoon_team.resetTenantWebhookLifetime({
  "webhook_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * webhook_id **required** `integer`: Webhook ID
  * X-Sds-Service-Token `string`: Service Authentication token

#### Output
* output [Webhook](#webhook)

### requestPublicDownloadShareInfo
### Description:  
Retrieve the public information of a Download Share.

### Precondition:
None.

### Postcondition:
Download Share information is returned.

### Further Information:
None.


```js
dracoon_team.requestPublicDownloadShareInfo({
  "access_key": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * access_key **required** `string`: Access key

#### Output
* output [PublicDownloadShare](#publicdownloadshare)

### generateDownloadUrlPublic
### Description:
Generate a download URL to retrieve a shared file.

### Precondition:
None.

### Postcondition:
Download URL and token are generated and returned.

### Further Information:
Use `downloadUrl` the download `token` is deprecated.


```js
dracoon_team.generateDownloadUrlPublic({
  "access_key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * body **required** [PublicDownloadTokenGenerateRequest](#publicdownloadtokengeneraterequest)

#### Output
* output [PublicDownloadTokenGenerateResponse](#publicdownloadtokengenerateresponse)

### downloadFileViaTokenPublic
### Description:  
Download a file (or zip archive if target is a folder or room).

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported.  
Range requests are not allowed for zip archive download.


```js
dracoon_team.downloadFileViaTokenPublic({
  "access_key": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * token **required** `string`: Download token
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return `application/octet-stream` instead of specific mimetype
  * inline `boolean`: Use Content-Disposition: `inline` instead of `attachment`

#### Output
*Output schema unknown*

### downloadFileViaTokenPublic_1
### Description:  
Download a file (or zip archive if target is a folder or room).

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported.  
Range requests are not allowed for zip archive download.


```js
dracoon_team.downloadFileViaTokenPublic_1({
  "access_key": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * token **required** `string`: Download token
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return `application/octet-stream` instead of specific mimetype
  * inline `boolean`: Use Content-Disposition: `inline` instead of `attachment`

#### Output
*Output schema unknown*

### requestPublicUploadShareInfo
### Description:  
Provides information about the desired Upload Share.

### Precondition:
Only `userUserPublicKeyList` is returned to the users who owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>

### Postcondition:
None.

### Further Information:
If no password is set, the returned information is reduced to the following attributes (if available):

* `name`
* `maxSlots`
* `createdAt`
* `isProtected`
* `isEncrypted`
* `showUploadedFiles`
* `userUserPublicKeyList` (if parent is end-to-end encrypted)

Only if the password is transmitted as `X-Sds-Share-Password` header, all values are returned.



```js
dracoon_team.requestPublicUploadShareInfo({
  "access_key": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Share-Password `string`: Upload share password. Should be base64-encoded.
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * access_key **required** `string`: Access key

#### Output
* output [PublicUploadShare](#publicuploadshare)

### createShareUploadChannel
### Description:  
Create a new upload channel.

### Precondition:
None.

### Postcondition:
Upload channel is created and corresponding upload URL, token & upload ID are returned.

### Further Information:
Use `uploadUrl` the upload `token` is deprecated.  

Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `



```js
dracoon_team.createShareUploadChannel({
  "access_key": "",
  "body": {
    "name": "",
    "timestampCreation": "",
    "timestampModification": ""
  }
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * body **required** [CreateShareUploadChannelRequest](#createshareuploadchannelrequest)

#### Output
* output [CreateShareUploadChannelResponse](#createshareuploadchannelresponse)

### cancelFileUploadViaShare
### Description:
Abort (chunked) upload via Upload Share.

### Precondition:
Valid Upload ID.

### Postcondition:
Aborts upload and invalidates upload ID / token.

### Further Information:
None.


```js
dracoon_team.cancelFileUploadViaShare({
  "access_key": "",
  "upload_id": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * upload_id **required** `string`: Upload channel ID

#### Output
*Output schema unknown*

### requestUploadStatusPublic
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Request status of a S3 file upload.

### Precondition:
An upload channel has been created and the user has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).

### Postcondition:
Status of S3 multipart upload request is returned.

### Further Information:
None.

### Possible errors:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Http Status | Error Code | Description |
| :--- | :--- | :--- |
| `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
| `400 Bad Request` | `-80001` | Invalid positive number |
| `400 Bad Request` | `-80002` | Invalid number |
| `400 Bad Request` | `-40001` | (Target) room is not encrypted |
| `400 Bad Request` | `-40755` | Bad file name |
| `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
| `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
| `403 Forbidden` |  | Access denied |
| `404 Not Found` | `-20501` | Upload not found |
| `404 Not Found` | `-40000` | Container not found |
| `404 Not Found` | `-41000` | Node not found |
| `404 Not Found` | `-70501` | User not found |
| `409 Conflict` | `-40010` | Container cannot be overwritten |
| `409 Conflict` |  | File cannot be overwritten |
| `500 Internal Server Error` |  | System Error |
| `502 Bad Gateway` |  | S3 Error |
| `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
| `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
| `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
| `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |

</details>


```js
dracoon_team.requestUploadStatusPublic({
  "access_key": "",
  "upload_id": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * upload_id **required** `string`: Upload channel ID

#### Output
* output [S3ShareUploadStatus](#s3shareuploadstatus)

### uploadFileAsBinaryPublic_1
### Description:  
Chunked upload of files via Upload Share.

### Precondition:
Valid upload ID.

### Postcondition:
Chunk of file is uploaded.

### Further Information:
Chunked uploads (range requests) are supported.

Following `Content-Types` are supported by this API:
* `multipart/form-data`
* provided `Content-Type`  

For both file upload types set the correct `Content-Type` header and body.  

### Examples:  

* `multipart/form-data`
```
POST /api/v4/public/shares/uploads/{access_key}{upload_id} HTTP/1.1

Header:
...
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
...

Body:
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: text/plain

Content of file.txt
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

* any other `Content-Type`  
```
POST /api/v4/public/shares/uploads/{access_key}{upload_id} HTTP/1.1

Header:
...
Content-Type: { ... }
...

Body:
raw content
```


```js
dracoon_team.uploadFileAsBinaryPublic_1({
  "access_key": "",
  "upload_id": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * access_key **required** `string`: Access key
  * upload_id **required** `string`: Upload channel ID
  * Content-Range `string`: Content-Range
  * file `string`

#### Output
* output [ChunkUploadResponse](#chunkuploadresponse)

### completeFileUploadViaShare
### Description:
Finalize (chunked) upload via Upload Share.

### Precondition:
Valid upload ID.  
Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>

### Postcondition:
Finalizes upload.

### Further Information:
Chunked uploads (range requests) are supported.  

Please ensure that all chunks have been transferred correctly before finishing the upload.  
If file hash has been created in time a `201 Created` will be responded and hash will be part of response, otherwise it will be a `202 Accepted` without it.



```js
dracoon_team.completeFileUploadViaShare({
  "access_key": "",
  "upload_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * upload_id **required** `string`: Upload channel ID
  * body **required** [UserFileKeyList](#userfilekeylist)

#### Output
* output [PublicUploadedFileData](#publicuploadedfiledata)

### completeS3FileUploadViaShare
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Finishes a S3 file upload and closes the corresponding upload channel.

### Precondition:
Valid upload ID.  
Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>

### Postcondition:
Upload channel is closed. S3 multipart upload request is completed.

### Further Information:
None.



```js
dracoon_team.completeS3FileUploadViaShare({
  "access_key": "",
  "upload_id": "",
  "body": {
    "parts": []
  }
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * upload_id **required** `string`: Upload channel ID
  * body **required** [CompleteS3ShareUploadRequest](#completes3shareuploadrequest)

#### Output
*Output schema unknown*

### generatePresignedUrlsPublic
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Generate presigned URLs for S3 file upload.

### Precondition:
Valid upload ID

### Postcondition:
List of presigned URLs is returned.

### Further Information:
The size for each part must be >= 5 MB, except for the last part.  
The part number of the first part in S3 is 1 (not 0).  
Use HTTP method `PUT` for uploading bytes via presigned URL.


```js
dracoon_team.generatePresignedUrlsPublic({
  "access_key": "",
  "upload_id": "",
  "body": {
    "firstPartNumber": 0,
    "lastPartNumber": 0,
    "size": 0
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * access_key **required** `string`: Access key
  * upload_id **required** `string`: Upload channel ID
  * body **required** [GeneratePresignedUrlsRequest](#generatepresignedurlsrequest)

#### Output
* output [PresignedUrlList](#presignedurllist)

### requestThirdPartyDependencies
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Provides information about used third-party software dependencies.

### Precondition:
None.

### Postcondition:
List of the third-party software dependencies used by **DRACOON Core** (referred to as _"Server"_) is returned.

### Further Information:
None.




```js
dracoon_team.requestThirdPartyDependencies(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ThirdPartyDependenciesData](#thirdpartydependenciesdata)

### requestSoftwareVersion
### Description:  
Public software version information.

### Precondition:
None.

### Postcondition:
Sofware version information is returned.

### Further Information:
The version of DRACOON Server consists of two components:
* **API**
* **Core** (referred to as _"Server"_)

which are versioned individually.


```js
dracoon_team.requestSoftwareVersion({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))

#### Output
* output [SoftwareVersionData](#softwareversiondata)

### requestSystemInfo
### Description:  
Provides information about system.

### Precondition:
None.

### Postcondition:
System information is returned.

### Further Information:
Authentication methods are sorted by **priority** attribute.  
Smaller values have higher priority.  
Authentication method with highest priority is considered as default.

### System information:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
| `hideLoginInputFields` | Defines if login fields should be hidden. | `true or false` |
| `s3Hosts` | List of available S3 hosts. | `String array` |
| `s3EnforceDirectUpload` | Determines whether S3 direct upload is enforced or not. | `true or false` |
| `useS3Storage` | Determines whether S3 Storage enabled and used. | `true or false` |

</details>

### Authentication methods:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Description |
| :--- | :--- |
| `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
| `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
| `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
| `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
| `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |

</details>


```js
dracoon_team.requestSystemInfo({}, context)
```

#### Input
* input `object`
  * is_enabled `boolean`: Show only enabled authentication methods

#### Output
* output [SystemInfo](#systeminfo)

### requestActiveDirectoryAuthInfo
### Description:  
Provides information about Active Directory authentication options.

### Precondition:
None.

### Postcondition:
Active Directory authentication options information is returned.

### Further Information:
None.


```js
dracoon_team.requestActiveDirectoryAuthInfo({}, context)
```

#### Input
* input `object`
  * is_global_available `boolean`: Show only global available items

#### Output
* output [ActiveDirectoryAuthInfo](#activedirectoryauthinfo)

### requestOpenIdAuthInfo
### Description:  
Provides information about OpenID Connect authentication options.

### Precondition:
None.

### Postcondition:
OpenID Connect authentication options information is returned.

### Further Information:
None.


```js
dracoon_team.requestOpenIdAuthInfo({}, context)
```

#### Input
* input `object`
  * is_global_available `boolean`: Show only global available items

#### Output
* output [OpenIdAuthInfo](#openidauthinfo)

### requestSystemTime
### Description:  
Retrieve the actual server time.

### Precondition:
None.

### Postcondition:
Server time is returned.

### Further Information:
None.


```js
dracoon_team.requestSystemTime({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))

#### Output
* output [SdsServerTime](#sdsservertime)

### requestSubscriptionScopes
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:
Retrieve a list of subscription scopes.

### Precondition:
Authenticated user.

### Postcondition:
List of scopes is returned.

### Further Information:
None.


```js
dracoon_team.requestSubscriptionScopes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [NotificationScopeList](#notificationscopelist)

### requestUserAvatar
### Description:
Get user avatar.

### Precondition:
Valid user ID and avatar UUID

### Postcondition:
Avatar is returned.

### Further Information:
None.


```js
dracoon_team.requestUserAvatar({
  "uuid": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * uuid **required** `string`: UUID of the avatar
  * user_id **required** `integer`: User ID

#### Output
* output [Avatar](#avatar)

### requestRoles
### Description:  
Retrieve a list of all roles with assigned rights.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of roles with assigned rights is returned.

### Further Information:
None.


```js
dracoon_team.requestRoles({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoleList](#rolelist)

### revokeRoleGroups
### Description:  
Revoke granted group(s) from a role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.  
For each role, at least one non-expiring user **MUST** remain who may grant the role.

### Postcondition:
One or more groups will be removed from a role.

### Further Information:
None.


```js
dracoon_team.revokeRoleGroups({
  "role_id": 0,
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [GroupIds](#groupids)

#### Output
* output [RoleGroupList](#rolegrouplist)

### requestRoleGroups
### Description:  
Get all groups with a specific role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition:
List of to the role assigned groups is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isMember:eq:false|name:cn:searchString`  
Get all groups that are **NOT** a member of that role **AND** whose name contains `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `isMember` | Filter the groups which are (not) member of that role | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `name` | Group name filter | `cn` | Group name contains value. | `search String` |

</details>


```js
dracoon_team.requestRoleGroups({
  "role_id": 0
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoleGroupList](#rolegrouplist)

### addRoleGroups
### Description:
Assign group(s) to a role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.

### Postcondition:
One or more groups will be added to a role.

### Further Information:
None.


```js
dracoon_team.addRoleGroups({
  "role_id": 0,
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [GroupIds](#groupids)

#### Output
* output [RoleGroupList](#rolegrouplist)

### revokeRoleUsers
### Description:  
Revoke granted user(s) from a role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.  
For each role, at least one non-expiring user **MUST** remain who may grant the role.

### Postcondition:
One or more users will be removed from a role.

### Further Information:
None.


```js
dracoon_team.revokeRoleUsers({
  "role_id": 0,
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UserIds](#userids)

#### Output
* output [RoleUserList](#roleuserlist)

### requestRoleUsers
### Description:  
Retrieve a list of all roles with assigned rights.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of roles with assigned rights is returned.

### Further Information:
None.


```js
dracoon_team.requestRoleUsers({
  "role_id": 0
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoleUserList](#roleuserlist)

### addRoleUsers
### Description:
Assign user(s) to a role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.

### Postcondition:
One or more users will be added to a role.

### Further Information:
None.


```js
dracoon_team.addRoleUsers({
  "role_id": 0,
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UserIds](#userids)

#### Output
* output [RoleUserList](#roleuserlist)

### requestSettings
### Description:  
Retrieve customer related settings. 

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read config</span> required.

### Postcondition:
List of available settings is returned.

### Further Information:
None.

### Configurable customer settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `homeRoomParentName` | Name of the container in which all user's home rooms are located.<br>`null` if `homeRoomsActive` is `false`. | `String` |
| `homeRoomQuota` | Refers to the quota of each single user's home room.<br>`0` represents no quota.<br>`null` if `homeRoomsActive` is `false`. | `positive Long` |
| `homeRoomsActive` | If set to `true`, every user with an Active Directory account gets a personal homeroom.<br>Once activated, this **CANNOT** be deactivated. | `true or false` |


</details>


```js
dracoon_team.requestSettings({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [CustomerSettingsResponse](#customersettingsresponse)

### setSettings
### Description:  
Set customer related settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> required.

### Postcondition:
Provided settings are updated.

### Further Information:
None.

### Configurable customer settings
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `homeRoomParentName` | Name of the container in which all user's home rooms are located.<br>`null` if `homeRoomsActive` is `false`. | `String` |
| `homeRoomQuota` | Refers to the quota of each single user's home room.<br>`0` represents no quota.<br>`null` if `homeRoomsActive` is `false`. | `positive Long` |
| `homeRoomsActive` | If set to `true`, every user with an Active Directory account gets a personal homeroom.<br>Once activated, this **CANNOT** be deactivated. | `true or false` |

</details>

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Not allowed characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `



```js
dracoon_team.setSettings({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CustomerSettingsRequest](#customersettingsrequest)

#### Output
* output [CustomerSettingsResponse](#customersettingsresponse)

### requestNotificationChannels
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Retrieve a list of configured notification channels.

### Precondition:
Right _"change config"_ required.

### Postcondition:
List of notification channels is returned.

### Further Information:
None.



```js
dracoon_team.requestNotificationChannels({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [NotificationChannelList](#notificationchannellist)

### toggleNotificationChannels
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Toggle configured notification channels.

### Precondition:
Right _"change config"_ required.

### Postcondition:
Channel status is switched.

### Further Information:
None.



```js
dracoon_team.toggleNotificationChannels({
  "body": {
    "channelId": 0,
    "isEnabled": true
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [NotificationChannelActivationRequest](#notificationchannelactivationrequest)

#### Output
* output [NotificationChannelList](#notificationchannellist)

### requestListOfWebhooks
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of webhooks for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
List of webhooks is returned.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:cn:goo|createdAt:ge:2015-01-01`  
Get webhooks where name contains `goo` **AND** webhook creation date is **>=** `2015-01-01`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`id`** | Webhook id filter | `eq` | Webhook id equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**). |`positive number`|
| **`name`** | Webhook type name| `cn, eq` | Webhook name contains / equals value. | `search String` |
| **`isEnabled`** | Webhook isEnabled filter | `eq` |  | `true or false` |
| **`createdAt`** | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| **`updatedAt`** | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| **`expiration`** | Expiration date filter | `ge, le, eq` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expiration:ge:2016-12-31`&#124;`expiration:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| **`lastFailStatus`** | Failure status filter | `eq` | Last HTTP status code. Set when a webhook is auto-disabled due to repeated delivery failures |`positive number`|

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported. 
 
<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc`  
Sort by `name` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`id`** | Webhook id |
| **`name`** | Webhook name |
| **`isEnabled`** | Webhook isEnabled |
| **`createdAt`** | Creation date |
| **`updatedAt`** | Last modification date |
| **`expiration`** | Expiration date |

</details>



```js
dracoon_team.requestListOfWebhooks({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [WebhookList](#webhooklist)

### createWebhook
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Create a new webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
Webhook is created for given event types.

### Further Information:
URL must begin with the `HTTPS` scheme.  
Webhook names are limited to 150 characters.

### Available event types:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`user.created`** | Triggered when a new user is created | Customer Admin Webhook |
| **`user.deleted`** | Triggered when a user is deleted | Customer Admin Webhook |
| **`user.locked`** | Triggered when a user gets locked | Customer Admin Webhook |
|  |  |  |
| **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Customer Admin Webhook |
|  |  |  |
| **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
| **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
| **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
| **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
| **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
| **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
| **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
| **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
| **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
| **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
| **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
| **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |

</details>


```js
dracoon_team.createWebhook({
  "body": {
    "eventTypeNames": [],
    "name": "",
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateWebhookRequest](#createwebhookrequest)

#### Output
* output [Webhook](#webhook)

### requestListOfEventTypesForConfigManager
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of available (for <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span>) event types.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
List of available event types is returned.

### Further Information:
None.



```js
dracoon_team.requestListOfEventTypesForConfigManager({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [EventTypeList](#eventtypelist)

### removeWebhook
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Delete a webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
Webhook is deleted.

### Further Information:
None.


```js
dracoon_team.removeWebhook({
  "webhook_id": 0
}, context)
```

#### Input
* input `object`
  * webhook_id **required** `integer`: Webhook ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestWebhook
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a specific webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
Webhook is returned.

### Further Information:
None.


```js
dracoon_team.requestWebhook({
  "webhook_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * webhook_id **required** `integer`: Webhook ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [Webhook](#webhook)

### updateWebhook
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Update an existing webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
Webhook is updated.

### Further Information:
URL must begin with the `HTTPS` scheme.
Webhook names are limited to 150 characters.
Webhook event types can not be changed from Customer Admin Webhook types to Node Webhook types and vice versa  

### Available event types:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`user.created`** | Triggered when a new user is created | Customer Admin Webhook |
| **`user.deleted`** | Triggered when a user is deleted | Customer Admin Webhook |
| **`user.locked`** | Triggered when a user gets locked | Customer Admin Webhook |
|  |  |  |
| **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Customer Admin Webhook |
|  |  |  |
| **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
| **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
| **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
| **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
| **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
| **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
| **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
| **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
| **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
| **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
| **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
| **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |

</details>


```js
dracoon_team.updateWebhook({
  "webhook_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * webhook_id **required** `integer`: Webhook ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateWebhookRequest](#updatewebhookrequest)

#### Output
* output [Webhook](#webhook)

### resetWebhookLifetime
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Reset the lifetime of a webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
Lifetime of the webhook is reset.

### Further Information:
None.


```js
dracoon_team.resetWebhookLifetime({
  "webhook_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * webhook_id **required** `integer`: Webhook ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [Webhook](#webhook)

### deleteDownloadShares
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>

### Functional Description:
Delete multiple Download Shares.

### Precondition:
User with _"manage download share"_ permissions on target nodes.

### Postcondition:
Download Shares are deleted.

### Further Information:
Only the Download Shares are removed; the referenced files or containers persists.


```js
dracoon_team.deleteDownloadShares({
  "body": {
    "shareIds": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [DeleteDownloadSharesRequest](#deletedownloadsharesrequest)

#### Output
*Output schema unknown*

### requestDownloadShares
### Description:  
Retrieve a list of Download Shares.

### Precondition:
Authenticated user.

### Postcondition:
List of available Download Shares is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:cn:searchString_1|createdBy:cn:searchString_2`
Filter by file name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Alias or node name filter | `cn` | Alias or node name contains value. | `search String` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
| `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
| `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
| `nodeId` | Source node ID | `eq` | Source node (room, folder, file) ID equals value. | `positive Integer` |
| `userId` | Creator user ID | `eq` | Creator user ID equals value. | `positive Integer` |
| `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
| `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:asc|expireAt:desc`  
Sort by `name` ascending **AND** by `expireAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Alias or node name |
| `notifyCreator` | Notify creator on every download |
| `expireAt` | Expiration date |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`classification`</del> | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |

</details>


```js
dracoon_team.requestDownloadShares({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [DownloadShareList](#downloadsharelist)

### createDownloadShare
### Description:
Create a new Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is created.

### Further Information:

If the target node is a room: subordinary rooms are excluded from a Download Share.

* `name` is limited to **150** characters.
* `notes` are limited to **255** characters.
* `password` is limited to **150** characters.

Use `POST /shares/downloads/{share_id}/email` API for sending emails.  

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]


```js
dracoon_team.createDownloadShare({
  "body": {
    "nodeId": 0
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateDownloadShareRequest](#createdownloadsharerequest)

#### Output
* output [DownloadShare](#downloadshare)

### removeDownloadShare
### Description:
Delete a Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is deleted.

### Further Information:
Only the Download Share is removed; the referenced file or container persists.


```js
dracoon_team.removeDownloadShare({
  "share_id": 0
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestDownloadShare
### Description:  
Retrieve detailed information about one Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is returned

### Further Information:
None.


```js
dracoon_team.requestDownloadShare({
  "share_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [DownloadShare](#downloadshare)

### updateDownloadShare
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Update an existing Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is successfully updated.

### Further Information:
* `name` is limited to **150** characters.
* `notes` are limited to **255** characters.
* `password` is limited to **150** characters.

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]


```js
dracoon_team.updateDownloadShare({
  "share_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateDownloadShareRequest](#updatedownloadsharerequest)

#### Output
* output [DownloadShare](#downloadshare)

### sendDownloadShareLinkViaEmail
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Send an email to specific recipients for existing Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share link successfully sent.

### Further Information:
None.


```js
dracoon_team.sendDownloadShareLinkViaEmail({
  "share_id": 0,
  "body": {
    "body": "",
    "recipients": []
  }
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [DownloadShareLinkEmail](#downloadsharelinkemail)

#### Output
*Output schema unknown*

### requestDownloadShareQr
### Description:  
Retrieve detailed information about one Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is returned

### Further Information:
None.


```js
dracoon_team.requestDownloadShareQr({
  "share_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [DownloadShare](#downloadshare)

### deleteUploadShares
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>

### Functional Description:
Delete multiple Upload Shares (aka Upload Accounts).

### Precondition:
User has _"manage upload share"_ permissions on target containers.

### Postcondition:
Upload Shares are deleted.

### Further Information:
Only the Upload Shares are removed; already uploaded files and the target container persist.


```js
dracoon_team.deleteUploadShares({
  "body": {
    "shareIds": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [DeleteUploadSharesRequest](#deleteuploadsharesrequest)

#### Output
*Output schema unknown*

### requestUploadShares
### Description:  
Retrieve a list of Upload Shares (aka File Requests).

### Precondition:
Authenticated user.

### Postcondition:
List of available Upload Shares is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:cn:searchString_1|createdBy:cn:searchString_2`  
Filter by alias name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Alias name filter | `cn` | Alias name contains value. | `search String` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
| `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
| `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
| `userId` | Creator user ID | `eq` | Creator user ID equals value. | `positive Integer` |
| `targetId` | Target node ID | `eq` | Target node (room, folder) ID equals value. | `positive Integer` |
| `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
| `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`targetId`</del> | Target node ID | `cn` | Target node (room, folder) ID equals value. | `positive Integer` |

</details>

---

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:asc|expireAt:desc`  
Sort by `name` ascending **AND** by `expireAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Alias name |
| `notifyCreator` | Notify creator on every upload |
| `expireAt` | Expiration date |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |

</details>


```js
dracoon_team.requestUploadShares({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UploadShareList](#uploadsharelist)

### createUploadShare
### Description:
Create a new Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share is created.

### Further Information:

* `name` is limited to **150** characters.
* `notes` are limited to **255** characters.
* `password` is limited to **150** characters.

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]  

Use `POST /shares/uploads/{share_id}/email` API for sending emails.



```js
dracoon_team.createUploadShare({
  "body": {
    "targetId": 0
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateUploadShareRequest](#createuploadsharerequest)

#### Output
* output [UploadShare](#uploadshare)

### removeUploadShare
### Description:
Delete an Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share is deleted.

### Further Information:
Only the Upload Share is removed; already uploaded files and the target container persist.


```js
dracoon_team.removeUploadShare({
  "share_id": 0
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestUploadShare
### Description:  
Retrieve detailed information about one Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share is returned.

### Further Information:
None.


```js
dracoon_team.requestUploadShare({
  "share_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UploadShare](#uploadshare)

### updateUploadShare
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Update existing Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share successfully updated.

### Further Information:

* `name` is limited to **150** characters.
* `notes` are limited to **255** characters.
* `password` is limited to **150** characters.

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]


```js
dracoon_team.updateUploadShare({
  "share_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateUploadShareRequest](#updateuploadsharerequest)

#### Output
* output [UploadShare](#uploadshare)

### sendUploadShareLinkViaEmail
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Send an email to specific recipients for existing Upload Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share link successfully sent.

### Further Information:
None.


```js
dracoon_team.sendUploadShareLinkViaEmail({
  "share_id": 0,
  "body": {
    "body": "",
    "recipients": []
  }
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UploadShareLinkEmail](#uploadsharelinkemail)

#### Output
*Output schema unknown*

### requestUploadShareQr
### Description:  
Retrieve detailed information about one Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share is returned.

### Further Information:
None.


```js
dracoon_team.requestUploadShareQr({
  "share_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UploadShare](#uploadshare)

### requestAuditNodeUserDataSyslog
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>

### Description: 
Retrieve a list of all nodes of type room, and the room assignment users with permissions.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read audit log</span> required.

### Postcondition:
List of rooms and their assigned users is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Except for `userName`, `userFirstName` and  `userLastName` - these are connected via logical disjunction (**OR**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`userName:cn:searchString_1|userFirstName:cn:searchString_2|nodeId:eq:2`  
Filter by user login containing `searchString_1` **OR** first name containing `searchString_2` **AND** node ID equals `2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `nodeId` | Node ID filter | `eq` | Node ID equals value. | `positive Integer` |
| `nodeName` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
| `nodeParentId` | Node parent ID filter | `eq` | Parent ID equals value. | `positive Integer`<br>Parent ID `0` is the root node. |
| `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
| `userName` | Username (login) filter | `cn, eq` | Username contains / equals value. | `search String` |
| `userFirstName` | User first name filter | `cn, eq` | User first name contains / equals value. | `search String` |
| `userLastName` | User last name filter | `cn, eq` | User last name contains / equals value. | `search String` |
| `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room | `eq` |  | `true or false` |
| `nodeIsEncrypted` | Encrypted node filter | `eq` |  | `true or false` |
| `nodeHasActivitiesLog` | Activities log filter | `eq` |  | `true or false` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`nodeHasRecycleBin`</del> | Recycle bin filter<br>**Filter has no effect!** | `eq` |  | `true or false` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`nodeName:asc`  
Sort by `nodeName` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `nodeId` | Node ID |
| `nodeName` | Node name |
| `nodeParentId` | Node parent ID |
| `nodeSize` | Node size |
| `nodeQuota` | Node quota |

</details>


```js
dracoon_team.requestAuditNodeUserDataSyslog({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output `array`
  * items [AuditNodeResponse](#auditnoderesponse)

### requestSyslogEvents
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>

### Description: 
Retrieve eventlog (audit log) events.

### Precondition:
Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.

### Postcondition:
List of audit log events is returned.

### Further Information:
Output is limited to **500** entries.  
For more results please use filter criteria and paging (`offset` + `limit`). 

Allowed `Accept-Header`:
* `Accept: application/json`
* `Accept: text/csv`  

---

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`time:desc`  
Sort by `time` descending (default sort option).

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `time` | Event timestamp |

</details>


```js
dracoon_team.requestSyslogEvents({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * date_start `string`: Filter events from given date
  * date_end `string`: Filter events until given date
  * type `integer`: Operation ID
  * user_id `integer`: User ID
  * status `string` (values: 0, 2): Operation status:
  * user_client `string`: User client
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [SyslogEventList](#syslogeventlist)

### requestLogOperationsSyslog
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>

### Description: 
Retrieve eventlog (audit log) operation IDs and the associated log operation description.

### Precondition:
Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.

### Postcondition:
List of available log operations is returned.

### Further Information:
None.


```js
dracoon_team.requestLogOperationsSyslog({}, context)
```

#### Input
* input `object`
  * is_deprecated `boolean`: Show only deprecated operations
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [LogOperationList](#logoperationlist)

### testAdConfig
### Description:  
Test Active Directory configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Active Directory configuration is returned if successful.

### Further Information:
DRACOON tries to establish a connection with the provided information.


```js
dracoon_team.testAdConfig({
  "body": {
    "ldapUsersDomain": "",
    "serverAdminName": "",
    "serverAdminPassword": "",
    "serverIp": "",
    "serverPort": 0
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [TestActiveDirectoryConfigRequest](#testactivedirectoryconfigrequest)

#### Output
* output [TestActiveDirectoryConfigResponse](#testactivedirectoryconfigresponse)

### testRadiusConfig
### Description:  
Test RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
RADIUS configuration is returned if successful.

### Further Information:
DRACOON tries to establish a connection with the provided information.


```js
dracoon_team.testRadiusConfig({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestAdConfigs
### Description:  
Retrieve a list of configured Active Directories.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of Active Directory configurations is returned.

### Further Information:
None.


```js
dracoon_team.requestAdConfigs({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [ActiveDirectoryConfigList](#activedirectoryconfiglist)

### createAdConfig
### Description:
Create a new Active Directory configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New Active Directory configuration created.

### Further Information:
None.


```js
dracoon_team.createAdConfig({
  "body": {
    "alias": "",
    "ldapUsersDomain": "",
    "serverAdminName": "",
    "serverAdminPassword": "",
    "serverIp": "",
    "serverPort": 0,
    "userFilter": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateActiveDirectoryConfigRequest](#createactivedirectoryconfigrequest)

#### Output
* output [ActiveDirectoryConfig](#activedirectoryconfig)

### removeAdConfig
### Description:
Delete an existing Active Directory configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Active Directory configuration is removed.

### Further Information:
None.


```js
dracoon_team.removeAdConfig({
  "ad_id": 0
}, context)
```

#### Input
* input `object`
  * ad_id **required** `integer`: Active Directory ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestAdConfig
### Description:  
Retrieve the configuration of an Active Directory.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Active Directory configuration is returned.

### Further Information:
None.


```js
dracoon_team.requestAdConfig({
  "ad_id": 0
}, context)
```

#### Input
* input `object`
  * ad_id **required** `integer`: Active Directory ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [ActiveDirectoryConfig](#activedirectoryconfig)

### updateAdConfig
### Description:  
Update an existing Active Directory configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Active Directory configuration updated.

### Further Information:
None.


```js
dracoon_team.updateAdConfig({
  "ad_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * ad_id **required** `integer`: Active Directory ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateActiveDirectoryConfigRequest](#updateactivedirectoryconfigrequest)

#### Output
* output [ActiveDirectoryConfig](#activedirectoryconfig)

### requestOpenIdIdpConfigs
### Description:  
Retrieve a list of configured OpenID Connect IDPs.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of OpenID Connect IDP configurations is returned.

### Further Information:
None.


```js
dracoon_team.requestOpenIdIdpConfigs({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output `array`
  * items [OpenIdIdpConfig](#openididpconfig)

### createOpenIdIdpConfig
### Description:
Create new OpenID Connect IDP configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New OpenID Connect IDP configuration is created.

### Further Information:
None.


```js
dracoon_team.createOpenIdIdpConfig({
  "body": {
    "authorizationEndPointUrl": "",
    "clientId": "",
    "clientSecret": "",
    "issuer": "",
    "jwksEndPointUrl": "",
    "mappingClaim": "",
    "name": "",
    "redirectUris": [],
    "scopes": [],
    "tokenEndPointUrl": "",
    "userInfoEndPointUrl": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateOpenIdIdpConfigRequest](#createopenididpconfigrequest)

#### Output
* output [OpenIdIdpConfig](#openididpconfig)

### removeOpenIdIdpConfig
### Description:
Delete an existing OpenID Connect IDP configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OpenID Connect IDP configuration is removed.

### Further Information:
None.


```js
dracoon_team.removeOpenIdIdpConfig({
  "idp_id": 0
}, context)
```

#### Input
* input `object`
  * idp_id **required** `integer`: OpenID Connect IDP configuration ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestOpenIdIdpConfig
### Description:  
Retrieve an OpenID Connect IDP configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OpenID Connect IDP configuration is returned.

### Further Information:
None.


```js
dracoon_team.requestOpenIdIdpConfig({
  "idp_id": 0
}, context)
```

#### Input
* input `object`
  * idp_id **required** `integer`: OpenID Connect IDP configuration ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [OpenIdIdpConfig](#openididpconfig)

### updateOpenIdIdpConfig
### Description:  
Update an existing OpenID Connect IDP configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OpenID Connect IDP configuration is updated.

### Further Information:
None.


```js
dracoon_team.updateOpenIdIdpConfig({
  "idp_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * idp_id **required** `integer`: OpenID Connect IDP configuration ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateOpenIdIdpConfigRequest](#updateopenididpconfigrequest)

#### Output
* output [OpenIdIdpConfig](#openididpconfig)

### removeRadiusConfig
### Description:  
Delete existing RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
RADIUS configuration is deleted.

### Further Information:
None.


```js
dracoon_team.removeRadiusConfig({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestRadiusConfig
### Description:  
Retrieve a RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
RADIUS configuration is returned.

### Further Information:
None.


```js
dracoon_team.requestRadiusConfig({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RadiusConfig](#radiusconfig)

### createRadiusConfig
### Description:  
Create new RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New RADIUS configuration is created.

### Further Information:
None.


```js
dracoon_team.createRadiusConfig({
  "body": {
    "ipAddress": "",
    "port": 0,
    "sharedSecret": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [RadiusConfigCreateRequest](#radiusconfigcreaterequest)

#### Output
* output [RadiusConfig](#radiusconfig)

### updateRadiusConfig
### Description:  
Update existing RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
RADIUS configuration is updated.

### Further Information:
None.


```js
dracoon_team.updateRadiusConfig({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [RadiusConfigUpdateRequest](#radiusconfigupdaterequest)

#### Output
* output [RadiusConfig](#radiusconfig)

### requestOAuthClients
### Description:  
Retrieve a list of configured OAuth clients.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of OAuth clients is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isStandard:eq:true`  
Get standard OAuth clients.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `isStandard` | Standard client filter | `eq` |  | `true or false` |
| `isExternal` | External client filter | `eq` |  | `true or false` |
| `isEnabled` | Enabled/disabled clients filter | `eq` |  | `true or false` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`clientName:desc`  
Sort by `clientName` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `clientName` | Client name |
| `isStandard` | Is a standard client |
| `isExternal` | Is a external client |
| `isEnabled` | Is a enabled client |

</details>


```js
dracoon_team.requestOAuthClients({}, context)
```

#### Input
* input `object`
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output `array`
  * items [OAuthClient](#oauthclient)

### createOAuthClient
### Description:
Create a new OAuth client.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New OAuth client created.

### Further Information:  
Client secret **MUST** have:  
* at least 12 characters, at most 32 characters  
* only lower case characters, upper case characters and digits  
* at least 1 lower case character, 1 upper case character and 1 digit  

The client secret is optional and will be generated if it is left empty.  

Valid grant types are:  
* `authorization_code`  
* `implicit`  
* `password`  
* `client_credentials`  
* `refresh_token`  

Grant type `client_credentials` is currently **NOT** permitted!

Allowed characters for client ID are: `[a-zA-Z0-9_-]`

If grant types `authorization_code` or `implicit` are used, a
redirect URI **MUST** be provided!

Default access token validity: **8 hours**  
Default refresh token validity: **30 days**
Default approval validity: **½ year**


```js
dracoon_team.createOAuthClient({
  "body": {
    "clientName": "",
    "grantTypes": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateOAuthClientRequest](#createoauthclientrequest)

#### Output
* output [OAuthClient](#oauthclient)

### removeOAuthClient
### Description:
Delete an existing OAuth client.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OAuth client is removed.

### Further Information:
None.


```js
dracoon_team.removeOAuthClient({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestOAuthClient
### Description:  
Retrieve the configuration of an OAuth client.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OAuth client is returned.

### Further Information:
None.


```js
dracoon_team.requestOAuthClient({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [OAuthClient](#oauthclient)

### updateOAuthClient
### Description:  
Update an existing OAuth client.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OAuth client updated.

### Further Information:  
Client secret **MUST** have:  
* at least 12 characters, at most 32 characters  
* only lower case characters, upper case characters and digits  
* at least 1 lower case character, 1 upper case character and 1 digit  

The client secret is optional and will be generated if it is left empty.  

Valid grant types are:  
* `authorization_code`  
* `implicit`  
* `password`  
* `client_credentials`  
* `refresh_token`  

Grant type `client_credentials` is currently **NOT** permitted!

If grant types `authorization_code` or `implicit` are used, a
redirect URI **MUST** be provided!



```js
dracoon_team.updateOAuthClient({
  "client_id": "",
  "body": {
    "grantTypes": []
  }
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateOAuthClientRequest](#updateoauthclientrequest)

#### Output
* output [OAuthClient](#oauthclient)

### requestPasswordPoliciesConfig
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>

### Description:  
Retrieve a list of configured password policies for all password types:  
* `login`
* `shares`
* `encryption`

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of configured password policies is returned.

### Further Information:
None.

### Available password policies:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Value | Password Type |
| :--- | :--- | :--- | :--- |
| `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % & ' ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `api.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
| `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
| `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
| `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
| `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |

</details>


```js
dracoon_team.requestPasswordPoliciesConfig({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [PasswordPoliciesConfig](#passwordpoliciesconfig)

### changePasswordPoliciesConfig
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>

### Description:  
Change current password policies for any password types:  
* `login`
* `shares`
* `encryption`

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Password policies get changed.

### Further Information:
None.

### Available password policies:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Value | Recommended Value | Password Type |
| :--- | :--- | :--- | :--- | :--- |
| `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % & ' ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li><li>`all` - combination of `uppercase`, `lowercase`, `numeric` and `special`</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li><li>`all`</li></ul> | <ul><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li></ul>  | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4`<br><br>default:<ul><li>`none` - `0`</li><li>`all` - `4`</li><li>otherwise - amount of distinct values<br>cf. `mustContainCharacters` matrix</li></ul> | `3` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`: `12`</li><li>`shares`: `12`</li><li>`encryption`: `14`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `api.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li></ul> |
| `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfArchivedPasswords` | Number of passwords to archive. | `Integer between 0 and 10`<br>Set `0` to disable password history. | `3` | <ul><li>`login`</li></ul> |
| `passwordExpiration.enabled` | Determines whether password expiration is enabled.<br>Password expiration policy can only be enabled in context with `enforceLoginPasswordChange`. | `true or false` | `false` | <ul><li>`login`</li></ul> |
| `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` |  | <ul><li>`login`</li></ul> |
| `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | `true` | <ul><li>`login`</li></ul> |
| `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | `5` | <ul><li>`login`</li></ul> |
| `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | `10` | <ul><li>`login`</li></ul> |
| `enforceLoginPasswordChange` | Determines whether a login password change should be enforced for all users.<br>Only takes effect, if login password policies get stricter. | `true or false`<br>default: `false` |  | <ul><li>`login`</li></ul> |

</details>

### `mustContainCharacters` matrix:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

|  | `alpha` | `uppercase` | `lowercase` | `numeric` | `special` | `all` | `none` |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `alpha` | `alpha` | `uppercase` | `lowercase` | `alpha`<br>`numeric` | `alpha`<br>`special` | `all` | `none` |
| `uppercase` | `uppercase` | `uppercase` | `uppercase`<br>`lowercase` | `uppercase`<br>`numeric` | `uppercase`<br>`special` | `all` | `none` |
| `lowercase` | `lowercase` | `uppercase`<br>`lowercase` | `lowercase` | `lowercase`<br>`numeric` | `lowercase`<br>`special` | `all` | `none` |
| `numeric` | `alpha`<br>`numeric` | `uppercase`<br>`numeric` | `lowercase`<br>`numeric` | `numeric` | `numeric`<br>`special` | `all` | `none` |
| `special` | `alpha`<br>`special` | `uppercase`<br>`special` | `lowercase`<br>`special` | `numeric`<br>`special` | `special` | `all` | `none` |
| `all` | `all` | `all` | `all` | `all` | `all` | `all` | `none` |
| `none` | `none` | `none` |  `none` | `none` | `none` | `none` | `none` |

</details>


```js
dracoon_team.changePasswordPoliciesConfig({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdatePasswordPoliciesConfig](#updatepasswordpoliciesconfig)

#### Output
* output [PasswordPoliciesConfig](#passwordpoliciesconfig)

### requestPasswordPoliciesForPasswordType
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>

### Description:  
Retrieve a list of configured password policies for a certain password type:  
* `login`
* `shares`
* `encryption`

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of configured password policies is returned.

### Further Information:
None.

### Available password policies:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Value | Password Type |
| :--- | :--- | :--- | :--- |
| `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % & ' ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `api.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
| `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
| `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
| `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
| `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |

</details>


```js
dracoon_team.requestPasswordPoliciesForPasswordType({
  "password_type": null
}, context)
```

#### Input
* input `object`
  * password_type **required** `string` (values: login, encryption, shares): Password type
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [PasswordPoliciesConfig](#passwordpoliciesconfig)

### requestAuthConfig
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON authentication configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable authentication methods.

### Further Information:
Authentication methods are sorted by priority attribute.  
Smaller values have higher priority.  
Authentication method with highest priority is considered as default.  
Priority **MUST** be a positive value.

### Configurable authentication settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Description |
| :--- | :--- |
| `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
| `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
| `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
| `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |

</details>


```js
dracoon_team.requestAuthConfig({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [AuthConfig](#authconfig)

### updateAuthConfig
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON authentication configuration entry point.  
Change configurable authentication settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more authentication methods gets changed.

### Further Information:
Authentication methods are sorted by priority attribute.  
Smaller values have higher priority.  
Authentication method with highest priority is considered as default.  
Priority **MUST** be a positive value.

### Configurable authentication settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Description |
| :--- | :--- |
| `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
| `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
| `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
| `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |

</details>


```js
dracoon_team.updateAuthConfig({
  "body": {
    "authMethods": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [AuthConfig](#authconfig)

#### Output
* output [AuthConfig](#authconfig)

### requestSystemDefaults
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON system defaults configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable system default values.

### Further Information:
None.

### Configurable default values
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
| `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999` |
| `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999` |
| `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999` |
| `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |

</details>


```js
dracoon_team.requestSystemDefaults({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [SystemDefaults](#systemdefaults)

### updateSystemDefaults
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON system defaults configuration entry point.  
Change configurable system default values.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more system default values gets changed.

### Further Information:
None.

### Configurable default values
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
| `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
| `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
| `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
| `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |

</details>


```js
dracoon_team.updateSystemDefaults({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateSystemDefaults](#updatesystemdefaults)

#### Output
* output [SystemDefaults](#systemdefaults)

### requestEventlogConfig
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON eventlog configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable eventlog settings.

### Further Information:
None.

### Configurable eventlog settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `enabled` | Determines whether eventlog is enabled. | `true or false` |
| `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted |
| `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |

</details>


```js
dracoon_team.requestEventlogConfig({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [EventlogConfig](#eventlogconfig)

### updateEventlogConfig
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON eventlog configuration entry point.  
Change configurable eventlog settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more eventlog settings gets changed.

### Further Information:
None.

### Configurable eventlog settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `enabled` | Determines whether eventlog is enabled. | `true or false` |
| `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: 7 |
| `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |

</details>


```js
dracoon_team.updateEventlogConfig({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateEventlogConfig](#updateeventlogconfig)

#### Output
* output [EventlogConfig](#eventlogconfig)

### requestGeneralSettings
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON general settings configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable general settings.

### Further Information:

### Auth token restrictions:

A restriction is a lower bound for a token timeout and defines a duration after which a token is invalidated when it wasn't used.  
The access/refresh token validity duration of the client is the upper bound. A token is invalidated - in any case - when it has passed.  

Auth token restrictions are enabled by default.

* Default access token validity: **2 hours**  
* Default refresh token validity: **30 days**

### Configurable general settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
| `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
| `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
| `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
| `useS3Storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
| `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
| `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |
| `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |

</details>

### Deprecated configurable general settings:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>Returns boolean value dependent on conjunction of `mediaServerConfigEnabled` AND `mediaServerEnabled` | `true or false` |
| <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |

</details>


```js
dracoon_team.requestGeneralSettings({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [GeneralSettings](#generalsettings)

### updateGeneralSettings
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON general settings configuration entry point.  
Change configurable general settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more general settings gets changed.

### Further Information:
Auth token restrictions are enabled by default.
    
* Default access token validity: **2 hours**  
* Default refresh token validity: **30 days**

### Configurable general settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
| `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
| `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
| `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
| `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
| `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |
| `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |

</details>

### Deprecated configurable general settings:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>**CANNOT** be enabled if media server configuration is disabled in `api.properties`.<br>Check `mediaServerConfigEnabled` with `GET /system/config/settings/infrastructure`. | `true or false` |
| <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `PUT /system/config/policies/passwords` API to change configured password policies. | `true or false` |

</details>


```js
dracoon_team.updateGeneralSettings({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateGeneralSettings](#updategeneralsettings)

#### Output
* output [GeneralSettings](#generalsettings)

### requestInfrastructureProperties
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON infrastructure properties entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of read-only infrastructure properties.

### Further Information:
Source: `api.properties`

### Read-only infrastructure properties:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `smsConfigEnabled` | Determines whether sending of share passwords via SMS is **system-wide** enabled. | `true or false` |
| `mediaServerConfigEnabled` | Determines whether media server is **system-wide** enabled. | `true or false` |
| `s3DefaultRegion` | Suggested S3 region | `Region name` |
| `s3EnforceDirectUpload` | Enforce direct upload to S3 | `true or false` |
| `dracoonCloud` | Determines if the **DRACOON Core** is deployed in the cloud environment | `true or false` |
| `tenantUuid` | Current tenant UUID | `UUID` |

</details>


```js
dracoon_team.requestInfrastructureProperties({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [InfrastructureProperties](#infrastructureproperties)

### requestSyslogConfig
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON syslog configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable syslog settings.

### Further Information:
None.

### Configurable syslog settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `enabled` | Determines whether syslog is enabled. | `true or false` |
| `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
| `port` | Syslog server port | `Valid port number` |
| `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
| `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |

</details>


```js
dracoon_team.requestSyslogConfig({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [SyslogConfig](#syslogconfig)

### updateSyslogConfig
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON syslog configuration entry point.  
Change configurable syslog settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more syslog settings gets changed.

### Further Information:
None.

### Configurable syslog settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `enabled` | Set `true` to enable syslog. | `true or false` |
| `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
| `port` | Syslog server port | `Valid port number` |
| `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
| `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |

</details>


```js
dracoon_team.updateSyslogConfig({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateSyslogConfig](#updatesyslogconfig)

#### Output
* output [SyslogConfig](#syslogconfig)

### request3Config
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description:  
Retrieve S3 configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 configuration is returned.

### Further Information:
None.


```js
dracoon_team.request3Config({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [S3Config](#s3config)

### createS3Config
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description:  
Create new S3 configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New S3 configuration is created.

### Further Information:
Forbidden characters in bucket names: [`.`]


```js
dracoon_team.createS3Config({
  "body": {
    "accessKey": "",
    "bucketName": "",
    "endpointUrl": "",
    "secretKey": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [S3ConfigCreateRequest](#s3configcreaterequest)

#### Output
* output [S3Config](#s3config)

### updateS3Config
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description:  
Update existing S3 configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 configuration is updated.

### Further Information:
None.


```js
dracoon_team.updateS3Config({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [S3ConfigUpdateRequest](#s3configupdaterequest)

#### Output
* output [S3Config](#s3config)

### requestS3TagList
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Retrieve all configured S3 tags.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 tags are returned.

### Further Information:
An empty list is returned if no S3 tags are found / configured.


```js
dracoon_team.requestS3TagList({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [S3TagList](#s3taglist)

### createS3Tag
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Create new S3 tag.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New S3 tag is created.

### Further Information:
* Maximum key length: **128** characters.  
* Maximum value length: **256** characters.  
* Both S3 tag key and value are **case-sensitive** strings.  
* Maximum of **20 mandatory S3 tags** is allowed.


```js
dracoon_team.createS3Tag({
  "body": {
    "key": "",
    "value": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [S3TagCreateRequest](#s3tagcreaterequest)

#### Output
* output [S3Tag](#s3tag)

### removeS3Tag
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Delete S3 tag.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 tag gets deleted.

### Further Information:
None.


```js
dracoon_team.removeS3Tag({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: S3 tag ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestS3Tag
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Retrieve single S3 tag.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 tag is returned.

### Further Information:
None.


```js
dracoon_team.requestS3Tag({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: S3 tag ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [S3Tag](#s3tag)

### cancelFileUploadByToken
### Description:
Cancel file upload.

### Precondition:
Valid upload token.

### Postcondition:
Upload canceled, token invalidated and all already transfered chunks removed.

### Further Information:
It is recommended to notify the API about cancelled uploads if possible.


```js
dracoon_team.cancelFileUploadByToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Upload token

#### Output
*Output schema unknown*

### uploadFileByTokenAsBinary_1
### Description:  
Upload a (chunk of a) file.

### Precondition:
Valid upload token.

### Postcondition:
Chunk uploaded.

### Further Information:
Range requests are supported.  

Following `Content-Types` are supported by this API:
* `multipart/form-data`
* provided `Content-Type`

For both file upload types set the correct `Content-Type` header and body.  

### Examples:  

* `multipart/form-data`
```
POST /api/v4/uploads/{token} HTTP/1.1

Header:
...
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
...

Body:
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: text/plain

Content of file.txt
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

* any other `Content-Type` 
```
POST /api/v4/uploads/{token} HTTP/1.1

Header:
...
Content-Type: { ... }
...

Body:
raw content
```



```js
dracoon_team.uploadFileByTokenAsBinary_1({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Upload token
  * Content-Range `string`: Content-Range
  * file `string`

#### Output
* output [ChunkUploadResponse](#chunkuploadresponse)

### completeFileUploadByToken
### Description:
Finish uploading a file.

### Precondition:
Valid upload token.

### Postcondition:
File created.

### Further Information:
The provided file name might be changed in accordance with the resolution strategy:

* **autorename**: changes the file name and adds a number to avoid conflicts.
* **overwrite**: deletes any old file with the same file name.
* **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.

Please ensure that all chunks have been transferred correctly before finishing the upload.

Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`


```js
dracoon_team.completeFileUploadByToken({
  "token": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Upload token
  * body **required** [CompleteUploadRequest](#completeuploadrequest)

#### Output
* output [Node](#node)

### requestUserInfo
### Description:  
Retrieves all information regarding the current user's account.

### Precondition:
Authenticated user.

### Postcondition:
User information is returned.

### Further Information:
Setting the query parameter `more_info` to `true`, causes the API to return more details e.g. the user's groups.  

`customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.


```js
dracoon_team.requestUserInfo({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * more_info `boolean`: Get more info for this user
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UserAccount](#useraccount)

### updateUserAccount
### Description:  
Update current user's account.

### Precondition:
Authenticated user.

### Postcondition:
User's account is updated.

### Further Information:
* All input fields are limited to **150** characters.  
* **All** characters are allowed.  

`customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.


```js
dracoon_team.updateUserAccount({
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateUserAccountRequest](#updateuseraccountrequest)

#### Output
* output [UserAccount](#useraccount)

### resetAvatar
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:  
Reset (custom) avatar to default avatar.

### Precondition:
Authenticated user.

### Postcondition:
* User's avatar gets deleted.  
* Default avatar is set.

### Further Information:
None.


```js
dracoon_team.resetAvatar({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [Avatar](#avatar)

### requestAvatar
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Get the avatar.

### Precondition:
Authenticated user.

### Postcondition:
Avatar is returned.

### Further Information:
None.


```js
dracoon_team.requestAvatar({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [Avatar](#avatar)

### uploadAvatarAsMultipart
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Change the avatar.

### Precondition:
Authenticated user.

### Postcondition:
Avatar is changed.

### Further Information:
* Media type **MUST** be `jpeg` or `png`
* File size **MUST** bei less than `5 MB`
* Dimensions **MUST** be `256x256 px`


```js
dracoon_team.uploadAvatarAsMultipart({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * file `string`

#### Output
* output [Avatar](#avatar)

### requestCustomerInfo
### Description:  
Use this API to get: 
* customer name
* used / free space
* used / available
* user account info

of the according customer.

### Precondition:
Authenticated user.

### Postcondition:
Customer information is returned.

### Further Information:
None.


```js
dracoon_team.requestCustomerInfo({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [CustomerData](#customerdata)

### enableCustomerEncryption
### Description:  
Activate client-side encryption for according customer.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.

### Postcondition:
Client-side encryption is enabled.

### Further Information:
Sets the ability for this customer to encrypt rooms.  
Once enabled on customer level, it **CANNOT** be unset.  
On activation, a customer rescue key pair **MUST** be set.


```js
dracoon_team.enableCustomerEncryption({
  "body": {
    "dataSpaceRescueKey": {
      "privateKeyContainer": {
        "privateKey": "",
        "version": ""
      },
      "publicKeyContainer": {
        "publicKey": "",
        "version": ""
      }
    },
    "enableCustomerEncryption": true
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [EnableCustomerEncryptionRequest](#enablecustomerencryptionrequest)

#### Output
* output [CustomerData](#customerdata)

### requestCustomerKeyPair
### Description:  
Retrieve the customer rescue key pair.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is returned.

### Further Information:
The private key is password-based; encrypted with `AES256` / `PBKDF2`.


```js
dracoon_team.requestCustomerKeyPair({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UserKeyPairContainer](#userkeypaircontainer)

### removeUserKeyPair
### Description:  
Delete the user's key pair.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is returned.

### Further Information:
This will also remove all file keys that were encrypted with the user's public key.  
If the user had exclusive access to some files, those are removed as well since decrypting them became impossible.


```js
dracoon_team.removeUserKeyPair({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestUserKeyPair
### Description:  
Retrieve the user's key pair.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is returned. 

### Further Information:
The private key is password-based; encrypted with `AES256` / `PBKDF2`.


```js
dracoon_team.requestUserKeyPair({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UserKeyPairContainer](#userkeypaircontainer)

### setUserKeyPair
### Description:  
Set the user's key pair.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is set.

### Further Information:
Overwriting an existing key pair is **NOT** possible.  
Please delete the existing key pair first.  
The private key is password-based; encrypted with `AES256` / `PBKDF2`.


```js
dracoon_team.setUserKeyPair({
  "body": {
    "privateKeyContainer": {
      "privateKey": "",
      "version": ""
    },
    "publicKeyContainer": {
      "publicKey": "",
      "version": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UserKeyPairContainer](#userkeypaircontainer)

#### Output
*Output schema unknown*

### changeUserPassword
### Description:
Change the user's password.

### Precondition:
Authenticated user.

### Postcondition:
User's password is changed.

### Further Information:
The password **MUST** comply to configured password policies.  

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]


```js
dracoon_team.changeUserPassword({
  "body": {
    "newPassword": "",
    "oldPassword": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ChangeUserPasswordRequest](#changeuserpasswordrequest)

#### Output
*Output schema unknown*

### logout
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>

### Description:  
Log out a user.

### Precondition:
Authenticated user.

### Postcondition:
* User is logged out  
* Authentication token gets invalidated.

### Further Information:
None.


```js
dracoon_team.logout({}, context)
```

#### Input
* input `object`
  * everywhere `boolean`: Invalidate all tokens
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestListOfNotificationConfigs
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Retrieve a list of notification configurations for current user. 

### Precondition:
Authenticated user.

### Postcondition:
List of available notification configurations is returned.

### Further Information:
None.


```js
dracoon_team.requestListOfNotificationConfigs({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [NotificationConfigList](#notificationconfiglist)

### updateNotificationConfig
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Update notification configuration for current user. 

### Precondition:
Authenticated user.

### Postcondition:
Notification configuration is updated.

### Further Information:
Leave `channelIds` empty to disable notifications.
Please note that channel `email instant` is not valid for `file.created` events


```js
dracoon_team.updateNotificationConfig({
  "id": 0,
  "body": {
    "channelIds": []
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Unique identifier for a notification configuration
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [NotificationConfigChangeRequest](#notificationconfigchangerequest)

#### Output
* output [NotificationConfig](#notificationconfig)

### requestOAuthApprovals
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>

### Functional Description:  
Retrieve information about all OAuth client approvals.

### Precondition:
Authenticated user.

### Postcondition:
None.

### Further Information:
None.

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`clientName:desc`  
Sort by `clientName` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `clientName` | Client name |

</details>


```js
dracoon_team.requestOAuthApprovals({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output `array`
  * items [OAuthApproval](#oauthapproval)

### removeOAuthApproval
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>

### Functional Description:
Delete an OAuth client approval.

### Precondition:
Authenticated user and valid client ID

### Postcondition:
OAuth Client approval is revoked.

### Further Information:
None.


```js
dracoon_team.removeOAuthApproval({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestOAuthAuthorizations
### Description:  
Retrieve information about all OAuth client authorizations.

### Precondition:
Authenticated user.

### Postcondition:
List of OAuth client authorizations is returned.

### Further Information:

### Filtering:
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isStandard:eq:true`  
Get standard OAuth clients.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `isStandard` | Standard client filter | `eq` |  | `true or false` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`clientName:desc`  
Sort by `clientName` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `clientName` | Client name |

</details>


```js
dracoon_team.requestOAuthAuthorizations({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output `array`
  * items [OAuthAuthorization](#oauthauthorization)

### removeOAuthAuthorizations
### Description:
Delete all authorizations of a client.

### Precondition:
Authenticated user and valid client ID

### Postcondition:
All authorizations for the client are revoked.

### Further Information:
None.


```js
dracoon_team.removeOAuthAuthorizations({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### removeOAuthAuthorization
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>

### Description:
Delete an authorization.

### Precondition:
Authenticated user and valid client ID, authorization ID

### Postcondition:
Authorization is revoked.

### Further Information:
None.


```js
dracoon_team.removeOAuthAuthorization({
  "client_id": "",
  "authorization_id": 0
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * authorization_id **required** `integer`: OAuth authorization ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### pingUser
### Description:
Test connection to DRACOON Server (while authenticated).

### Precondition:
Authenticated user.

### Postcondition:
`200 OK` with principal information is returned if successful.

### Further Information:
None.


```js
dracoon_team.pingUser({}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output `string`

### requestProfileAttributes
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>

### Description:  
Retrieve a list of user profile attributes.

### Precondition:
None.

### Postcondition:
List of attributes is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:cn:searchString_1|value:cn:searchString_2`  
Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `key` | User profile attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
| `value` | User profile attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:asc|value:desc`  
Sort by `key` ascending **AND** by `value` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `key` | User profile attribute key |
| `value` | User profile attribute value |

</details>


```js
dracoon_team.requestProfileAttributes({}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [AttributesResponse](#attributesresponse)

### setProfileAttributes
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>

### Description:  
Set custom user profile attributes.

### Precondition:
None.

### Postcondition:
Custom user profile attributes are set.

### Further Information:
Batch function.  
All existing user profile attributes will be deleted.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**  
* Maximum key length is **255**  
* Maximum value length is **4096**


```js
dracoon_team.setProfileAttributes({
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ProfileAttributesRequest](#profileattributesrequest)

#### Output
* output [ProfileAttributes](#profileattributes)

### updateProfileAttributes
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>

### Description:  
Add or edit custom user profile attributes.

### Precondition:
None.

### Postcondition:
Custom user profile attributes are added or edited.

### Further Information:
Batch function.  
If an entry existed before, it will be overwritten.  
Range submodel is never returned.

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**  
* Maximum key length is **255**  
* Maximum value length is **4096**


```js
dracoon_team.updateProfileAttributes({
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [ProfileAttributesRequest](#profileattributesrequest)

#### Output
* output [ProfileAttributes](#profileattributes)

### removeProfileAttribute
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>

### Description:  
Delete custom user profile attribute.

### Precondition:
None.

### Postcondition:
Custom user profile attribute is deleted.

### Further Information:
Allowed characters for keys are: `[a-zA-Z0-9_-]`


```js
dracoon_team.removeProfileAttribute({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: Key
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### listDownloadShareSubscriptions
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Retrieve a list of subscribed Download Shares for current user. 

### Precondition:
Authenticated user.

### Postcondition:
List of subscribed Download Shares is returned.

### Further Information:
None.

### Filtering
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`authParentId:eq:#`  
Get download shares where `authParentId` equals `#`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`downloadShareId`** | Download Share ID filter | `eq` | Download Share ID equals value. | `long value` |
| **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`downloadShareId:desc`  
Sort by `downloadShareId` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`downloadShareId`** | Download Share ID |
| **`authParentId`** | Auth parent ID |

</details>


```js
dracoon_team.listDownloadShareSubscriptions({}, context)
```

#### Input
* input `object`
  * filter `string`: Filter string
  * limit `integer`: Range limit.
  * offset `integer`: Range offset
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [SubscribedDownloadShareList](#subscribeddownloadsharelist)

### unsubscribeDownloadShare
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Unsubscribe Download Share from notifications.

### Precondition:
User with _"manage download share"_ permissions on target node.

### Postcondition:
Download Share is unsubscribed.  
Notifications for this Download Share are disabled.

### Further Information:
None.


```js
dracoon_team.unsubscribeDownloadShare({
  "share_id": 0
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### subscribeDownloadShare
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Subscribe Download Share for notifications.

### Precondition:
User with _"manage download share"_ permissions on target node.

### Postcondition:
Download Share is subscribed.  
Notifications for this Download Share will be triggered in the future.

### Further Information:
None.


```js
dracoon_team.subscribeDownloadShare({
  "share_id": 0
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [SubscribedDownloadShare](#subscribeddownloadshare)

### listNodeSubscriptions
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Retrieve a list of subscribed nodes for current user. 

### Precondition:
Authenticated user.

### Postcondition:
List of subscribed nodes is returned.

### Further Information:
None.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`authParentId:eq:#`  
Get nodes where `authParentId` equals `#`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`nodeId`** | Node ID filter | `eq` | Node ID equals value. | `long value` |
| **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are **NOT** supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`nodeId:desc`  
Sort by `nodeId` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`nodeId`** | Node ID |
| **`authParentId`** | Auth parent ID |

</details>


```js
dracoon_team.listNodeSubscriptions({}, context)
```

#### Input
* input `object`
  * filter `string`: Filter string
  * limit `integer`: Range limit.
  * offset `integer`: Range offset
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [SubscribedNodeList](#subscribednodelist)

### unsubscribeNode
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Unsubscribe node from notifications.

### Precondition:
User has _"read"_ permissions in auth parent room.

### Postcondition:
Node is unsubscribed.  
Notifications for this node are disabled.

### Further Information:
None.


```js
dracoon_team.unsubscribeNode({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### subscribeNode
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Subscribe node for notifications.

### Precondition:
User has _"read"_ permissions in auth parent room.

### Postcondition:
Node is subscribed.  
Notifications for this node will be triggered in the future.

### Further Information:
None.


```js
dracoon_team.subscribeNode({
  "node_id": 0
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [SubscribedNode](#subscribednode)

### requestUsers
### Description:  
Returns a list of DRACOON users.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of users is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Except for `login`, `firstName` and  `lastName` - these are connected via logical disjunction (**OR**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`  
Filter users by login contains `searchString_1` **OR** firstName contains `searchString_2` **AND** those who are **NOT** locked.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `email` | Email filter | `eq`, `cn` | Email contains value. | `search String` |
| `userName` | User name filter | `eq`, `cn` | UserName contains value. | `search String` |
| `firstName` | User first name filter | `cn` | User first name contains value. | `search String` |
| `lastName` | User last name filter | `cn` | User last name contains value. | `search String` |
| `isLocked` | User lock status filter | `eq` |  | `true or false` |
| `effectiveRoles` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles<ul><li>`false`: DIRECT roles</li><li>`true`: DIRECT **AND** EFFECTIVE roles</li></ul>DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.<br>EFFECTIVE means: e.g. user gets role through **group membership**. | `eq` |  | `true or false`<br>default: `false` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `phone` | Phone filter | `eq` | Phone equals value. | `search String` |
| `isEncryptionEnabled` | Encryption status filter<ul><li>client-side encryption</li><li>private key possession</li></ul> | `eq` |  | `true or false` |
| `hasRole` | User role filter<br>Depends on **effectiveRoles**.<br>For more Roles information please call `GET /roles API` | `eq` | User role  equals value. | <ul><li>`CONFIG_MANAGER` - Manage global configs</li><li>`USER_MANAGER` - Manage Users</li><li>`GROUP_MANAGER` - Manage User-Groups</li><li>`ROOM_MANAGER` - Manage top level Data Rooms</li><li>`LOG_AUDITOR` - Read logs</li><li>`NONMEMBER_VIEWER` - View users and groups when having room manage permission</li></ul> |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`lockStatus`</del> | User lock status filter | `eq` | User lock status equals value. | <ul><li>`0` - Locked</li><li>`1` - Web access allowed</li><li>`2` - Web and mobile access allowed</li></ul> |
| <del>`login`</del> | User login filter | `cn` | User login contains value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`firstName:asc|lastLoginSuccessAt:desc`  
Sort by `firstName` ascending **AND** by `lastLoginSuccessAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `userName` | User name |
| `email` | User email |
| `firstName` | User first name |
| `lastName` | User last name |
| `isLocked` | User lock status |
| `lastLoginSuccessAt` | Last successful login date |
| `expireAt` | Expiration date |
| `createdAt` | Creation date |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`gender`</del> | Gender |
| <del>`lockStatus`</del> | User lock status |
| <del>`login`</del> | User login |

</details>


```js
dracoon_team.requestUsers({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * include_attributes `boolean`: Include custom user attributes.
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UserList](#userlist)

### createUser
### Description:
Create a new user.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
New user is created.

### Further Information:
* If a user should **NOT** expire, leave `expireAt` empty.
* All input fields are limited to **150** characters
* Forbidden characters in passwords: [`&`, `'`, `<`, `>`]

### Authentication Method Options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Option Key | Option Value |
| :--- | :--- | :--- |
| `basic` / `sql` | `username` | Unique user identifier |
| `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
|  | `username` | Active Directory username according to authentication setting `userFilter` |
| `radius` | `username` | RADIUS username |
| `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
|  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |

</details>


```js
dracoon_team.createUser({
  "body": {
    "firstName": "",
    "lastName": ""
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [CreateUserRequest](#createuserrequest)

#### Output
* output [UserData](#userdata)

### removeUser
### Description:
Delete a user.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete users</span> required.

### Postcondition:
User is deleted.

### Further Information:
User **CANNOT** be deleted if he is a last room administrator of any room.


```js
dracoon_team.removeUser({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*

### requestUser
### Description:  
Retrieve detailed information about a single user.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
User information is returned.

### Further Information:
None.

### Authentication Method Options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Option Key | Option Value |
| :--- | :--- | :--- |
| `basic` / `sql` | `username` | Unique user identifier |
| `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
|  | `username` | Active Directory username according to authentication setting `userFilter` |
| `radius` | `username` | RADIUS username |
| `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
|  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |

</details>


```js
dracoon_team.requestUser({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * user_id **required** `integer`: User ID
  * effective_roles `boolean`: Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles.
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UserData](#userdata)

### updateUser
### Description:  
Update user's metadata.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
User's metadata is updated.

### Further Information:
* If a user should **NOT** expire, leave `expireAt` empty.
* All input fields are limited to **150** characters
* **All** characters are allowed.

### Authentication Method Options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Option Key | Option Value |
| :--- | :--- | :--- |
| `basic` / `sql` | `username` | Unique user identifier |
| `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
|  | `username` | Active Directory username according to authentication setting `userFilter` |
| `radius` | `username` | RADIUS username |
| `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
|  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |

</details>


```js
dracoon_team.updateUser({
  "user_id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * user_id **required** `integer`: User ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UpdateUserRequest](#updateuserrequest)

#### Output
* output [UserData](#userdata)

### requestUserGroups
### Description:  
Retrieves a list of groups a user is member of and / or can become a member.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of groups is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isMember:eq:false|name:cn:searchString`  
Get all groups that the user is **NOT** member of **AND** whose name is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Group name filter | `cn` | Group name contains value. | `search String` |
| `isMember` | Filter the groups which the user is (not) member of | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |

</details>


```js
dracoon_team.requestUserGroups({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [UserGroupList](#usergrouplist)

### requestLastAdminRoomsUsers
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:  
Retrieve a list of all rooms where the user is last admin (except homeroom and its subordinary rooms).

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
List of rooms is returned. 

### Further Information:
An empty list is returned if no rooms were found where the user is last admin.


```js
dracoon_team.requestLastAdminRoomsUsers({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [LastAdminUserRoomList](#lastadminuserroomlist)

### requestUserRoles
### Description:  
Retrieve a list of all roles granted to a user.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of granted roles is returned.

### Further Information:
None.


```js
dracoon_team.requestUserRoles({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoleList](#rolelist)

### requestUsersRooms
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>

### Description:  
Retrieves a list of rooms granted to the user and / or that can be granted.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of rooms is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isGranted:eq:true|isLastAdmin:eq:true|name:cn:searchString`  
Get all rooms that the user is granted **AND** is last admin **AND** whose name is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Room name filter | `cn` | Room name contains value. | `search String` |
| `isGranted` | Filter the rooms which the user is (not) granted. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `isLastAdmin` | Filter the rooms which the user is last room administrator.<br>Only in connection with `isGranted:eq:true` filter possible. | `eq` |  | `true` |
| `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |

</details>


```js
dracoon_team.requestUsersRooms({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * user_id **required** `integer`: User ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [RoomTreeDataList](#roomtreedatalist)

### requestUserAttributes
<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>

### Description:  
Retrieve a list of user attributes.

### Precondition:
None.

### Postcondition:
List of attributes is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:cn:searchString_1|value:cn:searchString_2`  
Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `key` | User attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
| `value` | User attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:asc|value:desc`  
Sort by `key` ascending **AND** by `value` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `key` | User attribute key |
| `value` | User attribute value |

</details>


```js
dracoon_team.requestUserAttributes({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
* output [AttributesResponse](#attributesresponse)

### setUserAttributes
### Description:  
Set custom user attributes.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
Custom user attributes are set.

### Further Information:
Batch function.  
All existing user attributes will be deleted.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.


```js
dracoon_team.setUserAttributes({
  "user_id": 0,
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * user_id **required** `integer`: User ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UserAttributes](#userattributes)

#### Output
* output [UserData](#userdata)

### updateUserAttributes
### Description:  
Add or edit custom user attributes.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
Custom user attributes gets added or edited.

### Further Information:
Batch function.  
If an entry exists before, it will be overwritten.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.


```js
dracoon_team.updateUserAttributes({
  "user_id": 0,
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string` (values: UTC, LOCAL, OFFSET, EPOCH, LEET): Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
  * user_id **required** `integer`: User ID
  * X-Sds-Auth-Token `string`: Authentication token
  * body **required** [UserAttributes](#userattributes)

#### Output
* output [UserData](#userdata)

### removeUserAttribute
### Description:
Delete custom user attribute.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
Custom user attribute is deleted.

### Further Information:
* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.


```js
dracoon_team.removeUserAttribute({
  "user_id": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * key **required** `string`: Key
  * X-Sds-Auth-Token `string`: Authentication token

#### Output
*Output schema unknown*



## Definitions

### ActiveDirectory
* ActiveDirectory `object`: Active Directory information
  * alias **required** `string`: Unique name for an Active Directory configuration
  * id **required** `integer`: ID
  * isGlobalAvailable **required** `boolean`: Is available for all customers

### ActiveDirectoryAuthInfo
* ActiveDirectoryAuthInfo `object`: List of Active Directories
  * items **required** `array`: List of available Active Directories
    * items [ActiveDirectory](#activedirectory)

### ActiveDirectoryConfig
* ActiveDirectoryConfig `object`: Active Directory configuration
  * adExportGroup **required** `string`: If `userImport` is set to `true`,
  * alias **required** `string`: Unique name for an Active Directory configuration
  * createHomeFolder `boolean`: &#128679; Deprecated since v4.10.0
  * homeFolderParent `integer`: &#128679; Deprecated since v4.10.0
  * id **required** `integer`: ID
  * ldapUsersDomain **required** `string`: Search scope of Active Directory; only users below this node can log on.
  * sdsImportGroup `integer`: User group that is assigned to users who are created by automatic import.
  * serverAdminName **required** `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverIp **required** `string`: IPv4 or IPv6 address or host name
  * serverPort **required** `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps **required** `boolean`: Determines whether LDAPS should be used instead of plain LDAP.
  * userFilter **required** `string`: Name of Active Directory attribute that is used as login name.
  * userImport **required** `boolean`: Determines if a DRACOON account is automatically created for a new user

### ActiveDirectoryConfigList
* ActiveDirectoryConfigList `object`: List of Active Directory configurations
  * items **required** `array`: List of Active Directory configurations
    * items [ActiveDirectoryConfig](#activedirectoryconfig)

### AttributesResponse
* AttributesResponse `object`: Ranged list of attributes
  * items **required** `array`: List of key-value pairs
    * items [KeyValueEntry](#keyvalueentry)
  * range **required** [Range](#range)

### AuditNodeResponse
* AuditNodeResponse `object`: Audit node report
  * auditUserPermissionList **required** `array`: List of assigned users with permissions
    * items [AuditUserPermission](#audituserpermission)
  * nodeCntChildren **required** `integer`: Number of direct children
  * nodeCreatedAt `string`: Creation date
  * nodeCreatedBy [UserInfo](#userinfo)
  * nodeHasActivitiesLog `boolean`: Is activities log active (for rooms only)
  * nodeHasRecycleBin `boolean`: &#128679; Deprecated since v4.10.0
  * nodeId **required** `integer`: Node ID
  * nodeIsEncrypted `boolean`: Encryption state
  * nodeName **required** `string`: Node name
  * nodeParentId `integer`: Parent node ID (room or folder)
  * nodeParentPath **required** `string`: Parent node path
  * nodeQuota `integer`: Quota in byte
  * nodeRecycleBinRetentionPeriod `integer`: Retention period for deleted nodes in days
  * nodeSize `integer`: Node size in byte
  * nodeUpdatedAt `string`: Modification date
  * nodeUpdatedBy [UserInfo](#userinfo)

### AuditUserPermission
* AuditUserPermission `object`: Audit user permissions report
  * permissions **required** [NodePermissions](#nodepermissions)
  * userFirstName **required** `string`: User first name
  * userId **required** `integer`: Unique identifier for the user
  * userLastName **required** `string`: User last name
  * userLogin **required** `string`: User login name

### AuthConfig
* AuthConfig `object`: Authentication settings
  * authMethods **required** `array`: List of authentication methods
    * items [AuthMethod](#authmethod)

### AuthMethod
* AuthMethod `object`: Authentication method
  * isEnabled **required** `boolean`: Is enabled
  * name **required** `string`: Authentication methods:
  * priority **required** `integer`: Priority (smaller values have higher priority)

### AuthTokenRestrictions
* AuthTokenRestrictions `object`: Auth token restrictions
  * accessTokenValidity `integer`: &#128640; Since v4.13.0
  * refreshTokenValidity `integer`: &#128640; Since v4.13.0
  * restrictionEnabled `boolean`: &#128640; Since v4.13.0

### Avatar
* Avatar `object`: User avatar information
  * avatarUri **required** `string`: Avatar URI
  * avatarUuid **required** `string`: Avatar UUID
  * isCustomAvatar **required** `boolean`: Determines whether user updated his / her avatar with own image

### ChangeGroupMembersRequest
* ChangeGroupMembersRequest `object`: List of user IDs
  * ids **required** `array`: List of user IDs
    * items `integer`: List of user IDs

### ChangeNodeCommentRequest
* ChangeNodeCommentRequest `object`: Request model for updating a node comment
  * text **required** `string`: Comment text

### ChangeUserPasswordRequest
* ChangeUserPasswordRequest `object`: Request model for updating user's password
  * newPassword **required** `string`: New password
  * oldPassword **required** `string`: Old password

### CharacterRules
* CharacterRules `object`: Password character rules
  * mustContainCharacters **required** `array` (values: alpha, uppercase, lowercase, numeric, special, all, none): Characters which a password must contain:
    * items `string` (values: alpha, uppercase, lowercase, numeric, special, all, none): Characters which a password must contain:
  * numberOfCharacteristicsToEnforce **required** `integer`: Number of characteristics to enforce

### ChunkUploadResponse
* ChunkUploadResponse `object`: Chunk upload response
  * hash **required** `string`: Hash value of transferred chunk
  * size **required** `integer`: Chunk size

### Comment
* Comment `object`: Node comment information
  * createdAt **required** `string`: Creation date
  * createdBy **required** [UserInfo](#userinfo)
  * id **required** `integer`: Comment ID
  * isChanged **required** `boolean`: Determines whether comment was edited or not
  * isDeleted **required** `boolean`: Determines whether comment was deleted or not
  * text **required** `string`: Comment text
  * updatedAt **required** `string`: Modification date
  * updatedBy **required** [UserInfo](#userinfo)

### CommentList
* CommentList `object`: List of node comments
  * items **required** `array`: List of node comments
    * items [Comment](#comment)
  * range **required** [Range](#range)

### CompleteS3FileUploadRequest
* CompleteS3FileUploadRequest `object`: Request model for completing a S3 file upload
  * fileKey [FileKey](#filekey)
  * fileName `string`: New file name to store with
  * keepShareLinks `boolean`: Preserve Download Share Links and point them to the new node.
  * parts **required** `array`: List of S3 file upload parts
    * items [S3FileUploadPart](#s3fileuploadpart)
  * resolutionStrategy `string` (values: autorename, overwrite, fail): Node conflict resolution strategy:

### CompleteS3ShareUploadRequest
* CompleteS3ShareUploadRequest `object`: Request model for completing a S3 file upload
  * parts **required** `array`: List of S3 file upload parts
    * items [S3FileUploadPart](#s3fileuploadpart)
  * userFileKeyList `array`: List of user file keys
    * items [UserFileKey](#userfilekey)

### CompleteUploadRequest
* CompleteUploadRequest `object`: Request model for completing an upload
  * fileKey [FileKey](#filekey)
  * fileName `string`: New file name to store with
  * keepShareLinks `boolean`: Preserve Download Share Links and point them to the new node.
  * resolutionStrategy `string` (values: autorename, overwrite, fail): Node conflict resolution strategy:
  * userFileKeyList [UserFileKeyList](#userfilekeylist)

### ConfigOptionList
* ConfigOptionList `object`: List of key-value pairs
  * items **required** `array`: List of key-value pairs
    * items [KeyValueEntry](#keyvalueentry)

### ConfigRoomRequest
* ConfigRoomRequest `object`: Request model for configuring a room
  * adminGroupIds `array`: List of group ids
    * items `integer`: List of group ids
  * adminIds `array`: List of user ids
    * items `integer`: List of user ids
  * classification `integer` (values: 1, 2, 3, 4): Classification ID:
  * hasActivitiesLog `boolean`: Is activities log active (for rooms only)
  * hasRecycleBin `boolean`: &#128679; Deprecated since v4.10.0
  * inheritPermissions `boolean`: Inherit permissions from parent room
  * newGroupMemberAcceptance `string` (values: autoallow, pending): Behaviour when new users are added to the group:
  * recycleBinRetentionPeriod `integer`: Retention period for deleted nodes in days
  * takeOverPermissions `boolean`: Take over existing permissions

### CopyNode
* CopyNode `object`: Copied node information
  * id **required** `integer`: Source node ID
  * name `string`: New node name
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0

### CopyNodesRequest
* CopyNodesRequest `object`: Request model for copying nodes
  * items `array`: List of nodes to be copied
    * items [CopyNode](#copynode)
  * keepShareLinks `boolean`: Preserve Download Share Links and point them to the new node.
  * nodeIds `array`: &#128679; Deprecated since v4.5.0
    * items `integer`: Node IDs
  * resolutionStrategy `string` (values: autorename, overwrite, fail): Node conflict resolution strategy:

### CreateActiveDirectoryConfigRequest
* CreateActiveDirectoryConfigRequest `object`: Request model for creating an Active Directory configuration
  * adExportGroup `string`: If `userImport` is set to `true`,
  * alias **required** `string`: Unique name for an Active Directory configuration
  * createHomeFolder `boolean`: DEPRECATED, will be ignored
  * homeFolderParent `integer`: DEPRECATED, will be ignored
  * ldapUsersDomain **required** `string`: Search scope of Active Directory; only users below this node can log on.
  * sdsImportGroup `integer`: User group that is assigned to users who are created by automatic import.
  * serverAdminName **required** `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverAdminPassword **required** `string`: Password of Active Directory administrative account
  * serverIp **required** `string`: IPv4 or IPv6 address or host name
  * serverPort **required** `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps `boolean`: Determines whether LDAPS should be used instead of plain LDAP.
  * userFilter **required** `string`: Name of Active Directory attribute that is used as login name.
  * userImport `boolean`: Determines if a DRACOON account is automatically created for a new user

### CreateDownloadShareRequest
* CreateDownloadShareRequest `object`: Request model for creating a Download Share
  * creatorLanguage `string`: &#128679; Deprecated since v4.20.0
  * expiration [ObjectExpiration](#objectexpiration)
  * fileKey [FileKey](#filekey)
  * internalNotes `string`: &#128640; Since v4.11.0
  * keyPair [UserKeyPairContainer](#userkeypaircontainer)
  * mailBody `string`: &#128679; Deprecated since v4.11.0
  * mailRecipients `string`: &#128679; Deprecated since v4.11.0
  * mailSubject `string`: &#128679; Deprecated since v4.11.0
  * maxDownloads `integer`: Max allowed downloads
  * name `string`: Alias name
  * nodeId **required** `integer`: Source node ID
  * notes `string`: User notes
  * notifyCreator `boolean`: &#128679; Deprecated since v4.20.0
  * password `string`: Access password, not allowed for encrypted shares
  * receiverLanguage `string`: Language tag for messages to receiver
  * sendMail `boolean`: &#128679; Deprecated since v4.11.0
  * sendSms `boolean`: &#128679; Deprecated since v4.11.0
  * showCreatorName `boolean`: Show creator first and last name.
  * showCreatorUsername `boolean`: Show creator email address.
  * smsRecipients `string`: &#128679; Deprecated since v4.11.0
  * textMessageRecipients `array`: &#128640; Since v4.11.0
    * items `string`: List of recipient FQTNs

### CreateFileUploadRequest
* CreateFileUploadRequest `object`: Request model for creating an upload channel
  * classification `integer` (values: 1, 2, 3, 4): Classification ID:
  * directS3Upload `boolean`: &#128640; Since v4.15.0
  * expiration [ObjectExpiration](#objectexpiration)
  * name **required** `string`: File name
  * notes `string`: User notes
  * parentId **required** `integer`: Parent node ID (room or folder)
  * size `integer`: File size in byte
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0

### CreateFileUploadResponse
* CreateFileUploadResponse `object`: Upload channel information
  * token **required** `string`: &#128679; Deprecated since v4.3.0
  * uploadId **required** `string`: Upload (channel) ID
  * uploadUrl **required** `string`: (public) Upload URL

### CreateFolderRequest
* CreateFolderRequest `object`: Request model for creating a folder
  * name **required** `string`: Name
  * notes `string`: User notes
  * parentId **required** `integer`: Parent node ID (room or folder)
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0

### CreateGroupRequest
* CreateGroupRequest `object`: Request model for creating a group
  * expiration [ObjectExpiration](#objectexpiration)
  * name **required** `string`: Group name

### CreateNodeCommentRequest
* CreateNodeCommentRequest `object`: Request model for creating a node comment
  * text **required** `string`: Comment text

### CreateOAuthClientRequest
* CreateOAuthClientRequest `object`: Request model for creating an OAuth client
  * accessTokenValidity `integer`: Validity of the access token in seconds.
  * approvalValidity `integer`: &#128640; Since v4.22.0
  * clientId `string`: ID of the OAuth client
  * clientName **required** `string`: Name, which is shown at the client configuration and authorization.
  * clientSecret `string`: Secret, which client uses at authentication.
  * clientType `string` (values: confidential, public): Determines whether client is a confidential or public client.
  * grantTypes **required** `array` (values: authorization_code, client_credentials, implicit, password, refresh_token): Authorized grant types
    * items `string` (values: authorization_code, client_credentials, implicit, password, refresh_token): Authorized grant types
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`: URIs, to which a user is redirected after authorization.
  * refreshTokenValidity `integer`: Validity of the refresh token in seconds.

### CreateOpenIdIdpConfigRequest
* CreateOpenIdIdpConfigRequest `object`: Request model for creating an OpenID Connect IDP configuration
  * authorizationEndPointUrl **required** `string`: URL of the authorization endpoint
  * clientId **required** `string`: ID of the OpenID client
  * clientSecret **required** `string`: Secret, which client uses at authentication.
  * fallbackMappingClaim `string`: Name of the claim which is used for the user mapping fallback.
  * flow `string` (values: authorization_code, hybrid): &#128640; Since v4.11.0
  * issuer **required** `string`: Issuer identifier of the IDP
  * jwksEndPointUrl **required** `string`: URL of the JWKS endpoint
  * mappingClaim **required** `string`: Name of the claim which is used for the user mapping.
  * name **required** `string`: Name of the IDP
  * pkceChallengeMethod `string`: PKCE code challenge method.
  * pkceEnabled `boolean`: Determines whether PKCE is enabled.
  * redirectUris **required** `array`: URIs, to which a user is redirected after authorization.
    * items `string`: URIs, to which a user is redirected after authorization.
  * scopes **required** `array`: List of requested scopes
    * items `string`: List of requested scopes
  * tokenEndPointUrl **required** `string`: URL of the token endpoint
  * userImportEnabled `boolean`: Determines if a DRACOON account is automatically created for a new user
  * userImportGroup `integer`: User group that is assigned to users who are created by automatic import.
  * userInfoEndPointUrl **required** `string`: URL of the user info endpoint
  * userInfoSource `string` (values: user_info_endpoint, id_token): &#128640; Since v4.23.0
  * userManagementUrl `string`: URL of the user management UI.
  * userUpdateEnabled `boolean`: Determines if the DRACOON account is updated with data from AD / IDP.

### CreateRoomRequest
* CreateRoomRequest `object`: Request model for creating a room
  * adminGroupIds `array`: List of group ids
    * items `integer`: List of group ids
  * adminIds `array`: List of user ids
    * items `integer`: List of user ids
  * classification `integer` (values: 1, 2, 3, 4): Classification ID:
  * hasActivitiesLog `boolean`: Is activities log active (for rooms only)
  * hasRecycleBin `boolean`: &#128679; Deprecated since v4.10.0
  * inheritPermissions `boolean`: Inherit permissions from parent room
  * name **required** `string`: Name
  * newGroupMemberAcceptance `string` (values: autoallow, pending): Behaviour when new users are added to the group:
  * notes `string`: User notes
  * parentId `integer`: Parent room ID or `null` to create a top level room
  * quota `integer`: Quota in byte
  * recycleBinRetentionPeriod `integer`: Retention period for deleted nodes in days
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0

### CreateShareUploadChannelRequest
* CreateShareUploadChannelRequest `object`: Request model for creating an upload channel
  * directS3Upload `boolean`: &#128640; Since v4.15.0
  * name **required** `string`: File name
  * password `string`: Password
  * size `integer`: File size in byte
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0

### CreateShareUploadChannelResponse
* CreateShareUploadChannelResponse `object`: Upload channel information
  * token `string`: &#128679; Deprecated since v4.3.0
  * uploadId **required** `string`: Upload (channel) ID
  * uploadUrl **required** `string`: (public) Upload URL

### CreateUploadShareRequest
* CreateUploadShareRequest `object`: Request model for creating an Upload Share
  * creatorLanguage `string`: &#128679; Deprecated since v4.20.0
  * expiration [ObjectExpiration](#objectexpiration)
  * filesExpiryPeriod `integer`: Number of days after which uploaded files expire
  * internalNotes `string`: &#128640; Since v4.11.0
  * mailBody `string`: &#128679; Deprecated since v4.11.0
  * mailRecipients `string`: &#128679; Deprecated since v4.11.0
  * mailSubject `string`: &#128679; Deprecated since v4.11.0
  * maxSize `integer`: Maximal total size of uploaded files (in bytes)
  * maxSlots `integer`: Maximal amount of files to upload
  * name `string`: Alias name
  * notes `string`: User notes
  * notifyCreator `boolean`: &#128679; Deprecated since v4.20.0
  * password `string`: Password
  * receiverLanguage `string`: Language tag for messages to receiver
  * sendMail `boolean`: &#128679; Deprecated since v4.11.0
  * sendSms `boolean`: &#128679; Deprecated since v4.11.0
  * showCreatorName `boolean`: &#128640; Since v4.11.0
  * showCreatorUsername `boolean`: &#128640; Since v4.11.0
  * showUploadedFiles `boolean`: Allow display of already uploaded files
  * smsRecipients `string`: &#128679; Deprecated since v4.11.0
  * targetId **required** `integer`: Target room or folder ID
  * textMessageRecipients `array`: &#128640; Since v4.11.0
    * items `string`: List of recipient FQTNs

### CreateUserRequest
* CreateUserRequest `object`: Request model for creating an user
  * authData [UserAuthData](#userauthdata)
  * authMethods `array`: &#128679; Deprecated since v4.13.0
    * items [UserAuthMethod](#userauthmethod)
  * email `string`: Email 
  * expiration [ObjectExpiration](#objectexpiration)
  * firstName **required** `string`: User first name
  * gender `string`: &#128679; Deprecated since v4.12.0
  * isNonmemberViewer `boolean`: &#128640; Since v4.12.0
  * lastName **required** `string`: User last name
  * login `string`: &#128679; Deprecated since v4.13.0
  * needsToChangePassword `boolean`: &#128679; Deprecated since v4.13.0
  * notifyUser `boolean`: &#128640; Since v4.9.0
  * password `string`: &#128679; Deprecated since v4.13.0
  * phone `string`: Phone number
  * receiverLanguage `string`: IETF language tag
  * title `string`: &#128679; Deprecated since v4.18.0
  * userName `string`: &#128640; Since v4.13.0

### CreateWebhookRequest
* CreateWebhookRequest `object`: Request model for creating a webhook
  * eventTypeNames **required** `array`: List of names of event types
    * items `string`: List of names of event types
  * isEnabled `boolean`: Is enabled
  * name **required** `string`: Name
  * secret `string`: Secret; used for event message signatures
  * triggerExampleEvent `boolean`: If set to true, an example event is being created
  * url **required** `string`: URL (must begin with the `HTTPS` scheme)

### Customer
* Customer `object`: Customer information
  * activationCode `string`: &#128679; Deprecated since v4.8.0
  * companyName **required** `string`: Company name
  * createdAt **required** `string`: Creation date
  * customerAttributes [CustomerAttributes](#customerattributes)
  * customerContractType **required** `string` (values: demo, free, pay): Customer type
  * customerUuid **required** `string`: &#128640; Since v4.21.0
  * id **required** `integer`: Unique identifier for the customer
  * isLocked `boolean`: Customer is locked:
  * lastLoginAt `string`: Date of last seen login for the customer
  * lockStatus **required** `boolean`: &#128679; Deprecated since v4.7.0
  * providerCustomerId `string`: Provider customer ID
  * quotaMax **required** `integer`: Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
  * quotaUsed **required** `integer`: Used amount of disc space in bytes
  * trialDaysLeft `integer`: Number of days left for trial period (relevant only for type `demo`)
  * updatedAt `string`: Modification date
  * userMax **required** `integer`: Maximal number of users
  * userUsed **required** `integer`: Number of users which are already allocated.
  * webhooksMax `integer`: &#128640; Since v4.19.0

### CustomerAttributes
* CustomerAttributes `object`: List of customer attributes
  * items **required** `array`: List of customer attributes
    * items [KeyValueEntry](#keyvalueentry)

### CustomerData
* CustomerData `object`: Customer information
  * accountsLimit **required** `integer`: User accounts limit
  * accountsUsed **required** `integer`: User accounts used
  * cntFiles `integer`: &#128679; Deprecated since v4.11.0
  * cntFolders `integer`: &#128679; Deprecated since v4.11.0
  * cntRooms `integer`: &#128679; Deprecated since v4.11.0
  * customerEncryptionEnabled **required** `boolean`: Clientside encryption for customer enabled
  * id **required** `integer`: Unique identifier for the customer
  * isProviderCustomer **required** `boolean`: Customer is Provider Customer
  * name **required** `string`: Customer name
  * spaceLimit **required** `integer`: Space limit (in bytes). -1 for unlimited
  * spaceUsed **required** `integer`: Space used (in bytes)

### CustomerList
* CustomerList `object`: List of customers
  * items **required** `array`: List of customers
    * items [Customer](#customer)
  * range **required** [Range](#range)

### CustomerSettingsRequest
* CustomerSettingsRequest `object`: Request model for setting the customer settings
  * homeRoomParentName `string`: Homeroom Parent Name
  * homeRoomQuota `integer`: Homeroom Quota in bytes
  * homeRoomsActive `boolean`: Homerooms active

### CustomerSettingsResponse
* CustomerSettingsResponse `object`: Customer settings
  * homeRoomParentId `integer`: Homeroom Parent ID
  * homeRoomParentName `string`: Homeroom Parent Name
  * homeRoomQuota `integer`: Homeroom Quota in bytes
  * homeRoomsActive **required** `boolean`: Homerooms active

### DeleteDeletedNodesRequest
* DeleteDeletedNodesRequest `object`: Request model for deleting nodes from recycle bin
  * deletedNodeIds **required** `array`: List of deleted node IDs
    * items `integer`: List of deleted node IDs

### DeleteDownloadSharesRequest
* DeleteDownloadSharesRequest `object`: Request model for deleting Download Shares
  * shareIds **required** `array`: List of share IDs
    * items `integer`: List of share IDs

### DeleteNodesRequest
* DeleteNodesRequest `object`: Request model for deleting nodes
  * nodeIds **required** `array`: List of node IDs
    * items `integer`: List of node IDs

### DeleteUploadSharesRequest
* DeleteUploadSharesRequest `object`: Request model for deleting Upload Shares
  * shareIds **required** `array`: List of share IDs
    * items `integer`: List of share IDs

### DeletedNode
* DeletedNode `object`: Deleted node information (Deleted node can be a folder or file)
  * accessedAt `string`: Last access date
  * classification `integer` (values: 1, 2, 3, 4): Classification ID:
  * createdAt `string`: Creation date
  * createdBy [UserInfo](#userinfo)
  * deletedAt `string`: Deletion date
  * deletedBy [UserInfo](#userinfo)
  * expireAt `string`: Expiration date
  * id `integer`: Node ID
  * isEncrypted `boolean`: Encryption state
  * name **required** `string`: Node name
  * notes `string`: User notes
  * parentId **required** `integer`: Parent node ID (room or folder)
  * parentPath **required** `string`: Parent node path
  * size `integer`: Node size in byte
  * type **required** `string` (values: folder, file): Node type
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### DeletedNodeSummary
* DeletedNodeSummary `object`: Deleted node information (Deleted node can be a folder or file)
  * cntVersions **required** `integer`: Number of deleted versions of this file
  * firstDeletedAt **required** `string`: First deleted version
  * lastDeletedAt **required** `string`: Last deleted version
  * lastDeletedNodeId **required** `integer`: Node ID of last deleted version
  * name **required** `string`: Node name
  * parentId **required** `integer`: Parent node ID (room or folder)
  * parentPath **required** `string`: Parent node path
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0
  * type **required** `string` (values: folder, file): Node type

### DeletedNodeSummaryList
* DeletedNodeSummaryList `object`: List of deleted nodes
  * items **required** `array`: List of deleted nodes (summary)
    * items [DeletedNodeSummary](#deletednodesummary)
  * range **required** [Range](#range)

### DeletedNodeVersionsList
* DeletedNodeVersionsList `object`: List of deleted versions of nodes
  * items **required** `array`: List of deleted nodes
    * items [DeletedNode](#deletednode)
  * range **required** [Range](#range)

### DownloadShare
* DownloadShare `object`: Download Share information
  * accessKey **required** `string`: Share access key to generate secure link
  * classification `integer` (values: 1, 2, 3, 4): &#128679; Deprecated since v4.11.0
  * cntDownloads **required** `integer`: Downloads counter (incremented on each download)
  * createdAt **required** `string`: Creation date
  * createdBy **required** [UserInfo](#userinfo)
  * dataUrl `string`: Path to shared download node
  * expireAt `string`: Expiration date
  * id **required** `integer`: Share ID
  * internalNotes `string`: &#128640; Since v4.11.0
  * isEncrypted `boolean`: Encrypted share
  * isProtected `boolean`: Is share protected by password
  * maxDownloads `integer`: Max allowed downloads
  * name **required** `string`: Alias name
  * nodeId **required** `integer`: Source node ID
  * nodePath `string`: Path to shared download node
  * nodeType `string`: Node type
  * notes `string`: User notes
  * notifyCreator **required** `boolean`: &#128679; Deprecated since v4.20.0
  * recipients `string`: &#128679; Deprecated since v4.11.0
  * showCreatorName `boolean`: Show creator first and last name.
  * showCreatorUsername `boolean`: Show creator email address.
  * smsRecipients `string`: &#128679; Deprecated since v4.11.0
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### DownloadShareLinkEmail
* DownloadShareLinkEmail `object`: Request model for sending an email of a Download Share link
  * body **required** `string`: Notification email content
  * receiverLanguage `string`: Language tag for messages to receiver
  * recipients **required** `array`: List of recipient email addresses
    * items `string`: List of recipient email addresses

### DownloadShareList
* DownloadShareList `object`: List of Download Shares
  * items **required** `array`: List of Download Shares
    * items [DownloadShare](#downloadshare)
  * range **required** [Range](#range)

### DownloadTokenGenerateResponse
* DownloadTokenGenerateResponse `object`: Download URL
  * downloadUrl **required** `string`: Download URL
  * token **required** `string`: &#128679; Deprecated since v4.3.0

### EnableCustomerEncryptionRequest
* EnableCustomerEncryptionRequest `object`: Request model for enabling customer encryption
  * dataSpaceRescueKey **required** [UserKeyPairContainer](#userkeypaircontainer)
  * enableCustomerEncryption **required** `boolean`: Set `true` to enable encryption for this customer

### EncryptRoomRequest
* EncryptRoomRequest `object`: Request model for handling encryption settings for a room
  * dataRoomRescueKey [UserKeyPairContainer](#userkeypaircontainer)
  * isEncrypted **required** `boolean`: Encryption state
  * useDataSpaceRescueKey `boolean`: Use system emergency password (rescue key) for files in this room

### EncryptionInfo
* EncryptionInfo `object`: Encryption states
  * dataSpaceKeyState **required** `string` (values: none, available, pending): DRACOON key state
  * roomKeyState **required** `string` (values: none, available, pending): Room key state
  * userKeyState **required** `string` (values: none, available, pending): User key state

### EncryptionPasswordPolicies
* EncryptionPasswordPolicies `object`: Encryption password policies
  * characterRules [CharacterRules](#characterrules)
  * minLength `integer`: Minimum number of characters a password must contain
  * rejectKeyboardPatterns `boolean`: Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
  * rejectUserInfo `boolean`: Determines whether a password must NOT contain user info (first name, last name, email, user name)
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### ErrorResponse
* ErrorResponse `object`: Error information
  * code **required** `integer`: HTTP status code
  * debugInfo `string`: Debug information
  * errorCode `integer`: Internal error code
  * message **required** `string`: HTTP status code description

### EventType
* EventType `object`: Event type information
  * id **required** `integer`: ID
  * name **required** `string`: Name
  * usableCustomerAdminWebhook **required** `boolean`: Usable as customer admin webhook
  * usableNodeWebhook **required** `boolean`: Usable as node webhook
  * usablePushNotification **required** `boolean`: Usable as push notification
  * usableTenantWebhook **required** `boolean`: Usable as tenant webhook

### EventTypeList
* EventTypeList `object`: List of event types
  * items **required** `array`: List of event types
    * items [EventType](#eventtype)

### EventlogConfig
* EventlogConfig `object`: Eventlog settings
  * enabled `boolean`: Is eventlog enabled?
  * logIpEnabled `boolean`: Determines whether user’s IP address is logged.
  * retentionPeriod `integer`: Retention period (in days) of event log entries.

### FailoverServer
* FailoverServer `object`: Failover server information
  * failoverEnabled **required** `boolean`: RADIUS Failover Server is active
  * failoverIpAddress **required** `string`: RADIUS Failover Server IP Address
  * failoverPort **required** `integer`: RADIUS Failover Server Port

### FileFileKeys
* FileFileKeys `object`: File key information
  * fileKeyContainer [FileKeyContainer](#filekeycontainer)
  * id `integer`: File ID

### FileKey
* FileKey `object`: File key information
  * iv **required** `string`: Initial vector
  * key **required** `string`: Encryption key
  * tag **required** `string`: Authentication tag
  * version **required** `string`: Version

### FileKeyContainer
* FileKeyContainer `object`: File key container
  * iv **required** `string`: Initial vector
  * key **required** `string`: Encryption key
  * tag `string`: Authentication tag
  * version **required** `string`: Version

### FirstAdminUser
* FirstAdminUser `object`: First administrator user
  * authData [UserAuthData](#userauthdata)
  * authMethods `array`: &#128679; Deprecated since v4.13.0
    * items [UserAuthMethod](#userauthmethod)
  * email `string`: Email 
  * firstName **required** `string`: User first name
  * gender `string`: &#128679; Deprecated since v4.12.0
  * language `string`: &#128679; Deprecated since v4.7.0
  * lastName **required** `string`: User last name
  * login `string`: &#128679; Deprecated since v4.13.0
  * needsToChangePassword `boolean`: &#128679; Deprecated since v4.13.0
  * needsToChangeUserName `boolean`: &#128679; Deprecated since v4.13.0
  * notifyUser `boolean`: Notify user about his new account
  * password `string`: &#128679; Deprecated since v4.13.0
  * phone `string`: Phone number
  * receiverLanguage `string`: IETF language tag
  * title `string`: &#128679; Deprecated since v4.18.0
  * userName `string`: &#128640; Since v4.13.0

### GeneralSettings
* GeneralSettings `object`: General settings
  * authTokenRestrictions [AuthTokenRestrictions](#authtokenrestrictions)
  * cryptoEnabled `boolean`: Activation status of client-side encryption.
  * emailNotificationButtonEnabled `boolean`: Enable email notification button
  * eulaEnabled `boolean`: Each user has to confirm the EULA at first login.
  * hideLoginInputFields `boolean`: &#128640; Since v4.13.0
  * mediaServerEnabled `boolean`: &#128679; Deprecated since v4.12.0
  * s3TagsEnabled `boolean`: &#128640; Since v4.9.0
  * sharePasswordSmsEnabled `boolean`: Allow sending of share passwords via SMS
  * useS3Storage `boolean`: Defines if S3 is used as storage backend
  * weakPasswordEnabled `boolean`: &#128679; Deprecated since v4.14.0

### GeneralSettingsInfo
* GeneralSettingsInfo `object`: General settings
  * cryptoEnabled `boolean`: Activation status of client-side encryption.
  * emailNotificationButtonEnabled `boolean`: Enable email notification button
  * eulaEnabled `boolean`: Each user has to confirm the EULA at first login.
  * homeRoomParentId `integer`: &#128640; Since v4.10.0
  * homeRoomsActive `boolean`: &#128640; Since v4.10.0
  * mediaServerEnabled `boolean`: &#128679; Deprecated since v4.12.0
  * s3TagsEnabled `boolean`: &#128640; Since v4.9.0
  * sharePasswordSmsEnabled `boolean`: Allow sending of share passwords via SMS
  * useS3Storage `boolean`: Defines if S3 is used as storage backend
  * weakPasswordEnabled `boolean`: Allow weak password

### GeneratePresignedUrlsRequest
* GeneratePresignedUrlsRequest `object`: Request model for generating presigned URLs
  * firstPartNumber **required** `integer`: First part number of a range of requested presigned URLs (for S3 it is: `1`)
  * lastPartNumber **required** `integer`: Last part number of a range of requested presigned URLs
  * size **required** `integer`: `Content-Length` header size for each presigned URL (in bytes)

### Group
* Group `object`: Group information
  * cntUsers **required** `integer`: Amount of users
  * createdAt **required** `string`: Creation date
  * createdBy **required** [UserInfo](#userinfo)
  * expireAt `string`: Expiration date
  * groupRoles [RoleList](#rolelist)
  * id **required** `integer`: Unique identifier for the group
  * name **required** `string`: Group name
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### GroupIds
* GroupIds `object`: List of group IDs
  * ids **required** `array`: List of group IDs
    * items `integer`: List of group IDs

### GroupInfo
* GroupInfo `object`: Group information
  * id **required** `integer`: Unique identifier for the group
  * name **required** `string`: Group name

### GroupList
* GroupList `object`: List of groups
  * items **required** `array`: List of groups
    * items [Group](#group)
  * range **required** [Range](#range)

### GroupUser
* GroupUser `object`: User information
  * displayName **required** `string`: &#128679; Deprecated since v4.11.0
  * email **required** `string`: &#128679; Deprecated since v4.11.0
  * id **required** `integer`: &#128679; Deprecated since v4.11.0
  * isMember **required** `boolean`: Determines whether user is a member of the group or not
  * login **required** `string`: &#128679; Deprecated since v4.11.0
  * userInfo **required** [UserInfo](#userinfo)

### GroupUserList
* GroupUserList `object`: List of users
  * items **required** `array`: List of group-user mappings
    * items [GroupUser](#groupuser)
  * range **required** [Range](#range)

### InfrastructureProperties
* InfrastructureProperties `object`: Infrastructure properties
  * dracoonCloud `boolean`: &#128640; Since v4.21.0
  * mediaServerConfigEnabled `boolean`: Determines if the media server is enabled
  * s3DefaultRegion `string`: Suggested S3 Region
  * s3EnforceDirectUpload `boolean`: &#128640; Since v4.15.0
  * smsConfigEnabled `boolean`: Allow sending of share passwords via SMS
  * tenantUuid `string`: &#128640; Since v4.21.0

### KeyValueEntry
* KeyValueEntry `object`: Key-value pair
  * key **required** `string`: Entry key
  * value **required** `string`: Entry value

### LastAdminGroupRoom
* LastAdminGroupRoom `object`: Room information
  * id **required** `integer`: Room ID
  * name **required** `string`: Room name
  * parentId `integer`: Parent room ID
  * parentPath **required** `string`: Parent node path

### LastAdminGroupRoomList
* LastAdminGroupRoomList `object`: List of (last admin group) rooms
  * items **required** `array`: List of last admin rooms
    * items [LastAdminGroupRoom](#lastadmingrouproom)

### LastAdminUserRoom
* LastAdminUserRoom `object`: Room information
  * id **required** `integer`: Room ID
  * lastAdminInGroup **required** `boolean`: Determines whether user is last admin of a room due to being the last member of last admin group
  * lastAdminInGroupId `integer`: ID of the last admin group where the user is the only remaining member
  * name **required** `string`: Room name
  * parentId `integer`: Parent room ID
  * parentPath **required** `string`: Parent node path

### LastAdminUserRoomList
* LastAdminUserRoomList `object`: List of (last admin user) rooms
  * items **required** `array`: List of last admin rooms
    * items [LastAdminUserRoom](#lastadminuserroom)

### LogEvent
* LogEvent `object`: Log event information
  * attribute1 `string`: Attribute 1
  * attribute2 `string`: Attribute 2
  * attribute3 `string`: Attribute 3
  * authParentSource `string`: Auth parent source ID
  * authParentTarget `string`: Auth parent target ID
  * customerId `integer`: Unique identifier for the customer
  * id **required** `integer`: Event ID
  * message **required** `string`: Event description
  * objectId1 `integer`: Object ID 1
  * objectId2 `integer`: Object ID 2
  * objectName1 `string`: Object name 1
  * objectName2 `string`: Object name 2
  * objectType1 `integer`: Object type 1
  * objectType2 `integer`: Object type 2
  * operationId `integer`: Operation type ID
  * operationName `string`: Operation name
  * status `integer` (values: 0, 2): Operation status:
  * time **required** `string`: Event timestamp
  * userClient `string`: Client
  * userId **required** `integer`: Unique identifier for the user
  * userIp `string`: User IP
  * userName `string`: Username

### LogEventList
* LogEventList `object`: List of log events
  * items **required** `array`: List of log events
    * items [LogEvent](#logevent)
  * range **required** [Range](#range)

### LogOperation
* LogOperation `object`: Log operation
  * id **required** `integer`: Operation type ID
  * isDeprecated **required** `boolean`: Determines whether log operation is deprecated or not
  * name **required** `string`: Operation name

### LogOperationList
* LogOperationList `object`: List of log operations
  * operationList **required** `array`: List of all log operations
    * items [LogOperation](#logoperation)

### LoginPasswordPolicies
* LoginPasswordPolicies `object`: Login password policies
  * characterRules **required** [CharacterRules](#characterrules)
  * minLength **required** `integer`: Minimum number of characters a password must contain
  * numberOfArchivedPasswords **required** `integer`: Number of passwords to archive
  * passwordExpiration **required** [PasswordExpiration](#passwordexpiration)
  * rejectDictionaryWords **required** `boolean`: Determines whether a password must NOT contain word(s) from a dictionary
  * rejectKeyboardPatterns **required** `boolean`: Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
  * rejectUserInfo **required** `boolean`: Determines whether a password must NOT contain user info (first name, last name, email, user name)
  * updatedAt **required** `string`: Modification date
  * updatedBy **required** [UserInfo](#userinfo)
  * userLockout **required** [UserLockout](#userlockout)

### LoginRequest
* LoginRequest `object`: Request model for performing an authentication
  * authType `string` (values: basic, active_directory, radius): Authentication methods
  * language `string`: &#128679; Deprecated since v4.7.0
  * login `string`: &#128679; Deprecated since v4.7.0
  * password **required** `string`: Password
  * state `string`: For RADIUS Access-Challenge
  * token `string`: RADIUS Token
  * userName `string`: &#128640; Since v4.13.0

### LoginResponse
* LoginResponse `object`: Authentication token
  * token **required** `string`: Authentication token

### MissingKeysResponse
* MissingKeysResponse `object`: Missing keys information
  * files `array`: List of file keys
    * items [FileFileKeys](#filefilekeys)
  * items `array`: List of user ID and file ID mappings
    * items [UserIdFileIdItem](#useridfileiditem)
  * range [Range](#range)
  * users `array`: List of user public keys
    * items [UserUserPublicKey](#useruserpublickey)

### MoveNode
* MoveNode `object`: Moved node information
  * id **required** `integer`: Source node ID
  * name `string`: New node name
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0

### MoveNodesRequest
* MoveNodesRequest `object`: Request model for moving nodes
  * items `array`: List of nodes to be moved
    * items [MoveNode](#movenode)
  * keepShareLinks `boolean`: Preserve Download Share Links and point them to the new node.
  * nodeIds `array`: &#128679; Deprecated since v4.5.0
    * items `integer`: Node IDs
  * resolutionStrategy `string` (values: autorename, overwrite, fail): Node conflict resolution strategy:

### NewCustomerRequest
* NewCustomerRequest `object`: Request model for creating a customer
  * activationCode `string`: &#128679; Deprecated since v4.8.0
  * companyName `string`: Company name
  * customerAttributes [CustomerAttributes](#customerattributes)
  * customerContractType **required** `string` (values: demo, free, pay): Customer type
  * firstAdminUser **required** [FirstAdminUser](#firstadminuser)
  * isLocked `boolean`: Customer is locked:
  * lockStatus `boolean`: &#128679; Deprecated since v4.7.0
  * providerCustomerId `string`: Provider customer ID
  * quotaMax **required** `integer`: Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
  * trialDays `integer`: Number of days left for trial period (relevant only for type `demo`)
  * userMax **required** `integer`: Maximal number of users
  * webhooksMax `integer`: &#128640; Since v4.19.0

### NewCustomerResponse
* NewCustomerResponse `object`: Customer information
  * activationCode `string`: &#128679; Deprecated since v4.8.0
  * companyName **required** `string`: Company name
  * createdAt `string`: Creation date
  * customerAttributes [CustomerAttributes](#customerattributes)
  * customerContractType **required** `string` (values: demo, free, pay): Customer type
  * customerUuid **required** `string`: &#128640; Since v4.21.0
  * firstAdminUser **required** [FirstAdminUser](#firstadminuser)
  * id `integer`: Unique identifier for the customer
  * isLocked `boolean`: Customer is locked:
  * lockStatus **required** `boolean`: &#128679; Deprecated since v4.7.0
  * providerCustomerId `string`: Provider customer ID
  * quotaMax **required** `integer`: Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
  * trialDays `integer`: Number of days left for trial period (relevant only for type `demo`)
  * userMax **required** `integer`: Maximal number of users
  * webhooksMax `integer`: &#128640; Since v4.19.0

### Node
* Node `object`: Node information (Node can be a room, folder or file)
  * authParentId `integer`: &#128640; Since v4.15.0
  * branchVersion `integer`: Version of last change in this node or a node further down the tree.
  * children `array`: &#128679; Deprecated since v4.10.0
    * items [Node](#node)
  * classification `integer` (values: 1, 2, 3, 4): Classification ID:
  * cntAdmins `integer`: &#128679; Deprecated since v4.2.0
  * cntChildren `integer`: &#128679; Deprecated since v4.11.0
  * cntComments `integer`: Returns the number of comments of this node.
  * cntDeletedVersions `integer`: Number of deleted versions of this file / folder
  * cntDownloadShares `integer`: Returns the number of Download Shares of this node.
  * cntFiles `integer`: &#128640; Since v4.11.0
  * cntFolders `integer`: &#128640; Since v4.11.0
  * cntRooms `integer`: &#128640; Since v4.11.0
  * cntUploadShares `integer`: Returns the number of Upload Shares of this node.
  * cntUsers `integer`: &#128679; Deprecated since v4.2.0
  * createdAt `string`: Creation date
  * createdBy [UserInfo](#userinfo)
  * encryptionInfo [EncryptionInfo](#encryptioninfo)
  * expireAt `string`: Expiration date
  * fileType `string`: File type / extension (for files only)
  * hasActivitiesLog `boolean`: Is activities log active (for rooms only)
  * hasRecycleBin `boolean`: &#128679; Deprecated since v4.10.0
  * hash `string`: MD5 hash of file
  * id **required** `integer`: Node ID
  * inheritPermissions `boolean`: Inherit permissions from parent room
  * isBrowsable `boolean`: &#128640; Since v4.11.0
  * isEncrypted `boolean`: Encryption state
  * isFavorite `boolean`: Node is marked as favorite (for rooms / folders only)
  * mediaToken `string`: Media server media token
  * mediaType `string`: File media type (for files only)
  * name **required** `string`: Name
  * notes `string`: User notes
  * parentId `integer`: Parent node ID (room or folder)
  * parentPath `string`: Parent node path
  * permissions [NodePermissions](#nodepermissions)
  * quota `integer`: Quota in byte
  * recycleBinRetentionPeriod `integer`: Retention period for deleted nodes in days
  * size `integer`: Node size in byte
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0
  * type **required** `string` (values: room, folder, file): Node type
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### NodeList
* NodeList `object`: List of nodes
  * items **required** `array`: List of nodes
    * items [Node](#node)
  * range **required** [Range](#range)

### NodeParent
* NodeParent `object`: Parent node
  * id **required** `integer`: Node ID
  * name **required** `string`: Node name
  * parentId `integer`: Parent node ID (room or folder)
  * type **required** `string`: Node type

### NodeParentList
* NodeParentList `object`: List of parent nodes
  * items `array`: List of node parents
    * items [NodeParent](#nodeparent)

### NodePermissions
* NodePermissions `object`: Node permissions
  * change **required** `boolean`: User / Group may update metadata of nodes: rename files and folders, change classification, etc.
  * create **required** `boolean`: User / Group may upload files, create folders and copy / move files to this room, overwriting is not possible.
  * delete **required** `boolean`: User / Group may overwrite and remove files / folders, move files from this room.
  * deleteRecycleBin **required** `boolean`: User / Group may permanently remove files / folders from the recycle bin.
  * manage **required** `boolean`: User / Group may grant all of the above permissions to other users and groups independently,
  * manageDownloadShare **required** `boolean`: User / Group may create Download Shares for files and containers view all previously created Download Shares in this room.
  * manageUploadShare **required** `boolean`: User / Group may create Upload Shares for containers, view all previously created Upload Shares in this room.
  * read **required** `boolean`: User / Group may see all rooms, files and folders in the room and download everything, copy files from this room.
  * readRecycleBin **required** `boolean`: User / Group may look up files / folders in the recycle bin.
  * restoreRecycleBin **required** `boolean`: User / Group may restore files / folders from recycle bin - room permissions required.

### NotificationChannel
* NotificationChannel `object`: Notification channel information
  * frequency **required** `integer`: Channel frequency (aggregation window size in minutes)
  * id **required** `integer`: Channel ID
  * isEnabled **required** `boolean`: Determines whether channel is enabled
  * name **required** `string`: Name
  * type **required** `string`: Channel type (only `EMAIL` available at the moment)

### NotificationChannelActivationRequest
* NotificationChannelActivationRequest `object`: Request model for switching notification channel status
  * channelId **required** `integer`: Channel ID
  * isEnabled **required** `boolean`: Determines whether channel is enabled

### NotificationChannelList
* NotificationChannelList `object`: List of notification channels
  * items **required** `array`: List of notification channels
    * items [NotificationChannel](#notificationchannel)

### NotificationConfig
* NotificationConfig `object`: Notification configuration information
  * channelIds **required** `array`: List of notification channel IDs
    * items `integer`: List of notification channel IDs
  * eventTypeName **required** `string`: Event type name
  * id **required** `integer`: Notification configuration ID
  * scopeId **required** `integer`: Scope ID

### NotificationConfigChangeRequest
* NotificationConfigChangeRequest `object`: Request model for updating notification configuration
  * channelIds **required** `array`: List of notification channel IDs.
    * items `integer`: List of notification channel IDs.

### NotificationConfigList
* NotificationConfigList `object`: List of notification configurations
  * items **required** `array`: List of notification configurations
    * items [NotificationConfig](#notificationconfig)

### NotificationScope
* NotificationScope `object`: Notification scope information
  * id **required** `integer`: Scope ID
  * name **required** `string`: Name

### NotificationScopeList
* NotificationScopeList `object`: List of notification scopes
  * items **required** `array`: List of notification scopes
    * items [NotificationScope](#notificationscope)

### OAuthApproval
* OAuthApproval `object`: OAuth client approval information
  * clientId **required** `string`: ID of the OAuth client
  * clientName **required** `string`: Name, which is shown at the client configuration and authorization.
  * expiresAt `string`: Expiration date of the approval

### OAuthAuthorization
* OAuthAuthorization `object`: OAuth authorization
  * clientId **required** `string`: ID of the OAuth client
  * clientName **required** `string`: Name, which is shown at the client configuration and authorization.
  * createdAt `string`: &#128640; Since v4.13.0
  * expiresAt `string`: Expiration date of the authorization
  * id `integer`: &#128640; Since v4.12.0
  * isStandard `boolean`: &#128640; Since v4.12.0
  * usedAt `string`: &#128640; Since v4.13.0
  * userAgentCategory **required** `string` (values: browser, native, unknown): &#128640; Since v4.12.0
  * userAgentInfo `string`: &#128640; Since v4.12.0
  * userAgentOs `string`: &#128640; Since v4.12.0
  * userAgentType `string`: &#128640; Since v4.12.0

### OAuthClient
* OAuthClient `object`: OAuth client information
  * accessTokenValidity `integer`: Validity of the access token in seconds.
  * approvalValidity `integer`: &#128640; Since v4.22.0
  * clientId **required** `string`: ID of the OAuth client
  * clientName `string`: Name, which is shown at the client configuration and authorization.
  * clientSecret `string`: Secret, which client uses at authentication.
  * clientType `string` (values: confidential, public): Determines whether client is a confidential or public client.
  * grantTypes **required** `array` (values: authorization_code, client_credentials, implicit, password, refresh_token): Authorized grant types
    * items `string` (values: authorization_code, client_credentials, implicit, password, refresh_token): Authorized grant types
  * isEnabled `boolean`: Determines whether client is enabled.
  * isExternal `boolean`: Determines whether client is an external client.
  * isStandard `boolean`: Determines whether client is a standard client.
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`: URIs, to which a user is redirected after authorization.
  * refreshTokenValidity `integer`: Validity of the refresh token in seconds.

### ObjectExpiration
* ObjectExpiration `object`: Expiration information
  * enableExpiration **required** `boolean`: enabled / disabled
  * expireAt `string`: Expiration date

### OpenIdAuthInfo
* OpenIdAuthInfo `object`: List of OpenID Connect providers
  * items **required** `array`: List of available OpenID Connect identity providers
    * items [OpenIdProvider](#openidprovider)

### OpenIdAuthResources
* OpenIdAuthResources `object`: List of OpenID Connect providers
  * openIdProviders **required** `array`: List of available OpenID Connect identity providers
    * items [OpenIdProvider](#openidprovider)

### OpenIdIdpConfig
* OpenIdIdpConfig `object`: OpenID Connect IDP configuration
  * authorizationEndPointUrl `string`: URL of the authorization endpoint
  * clientId `string`: ID of the OpenID client
  * clientSecret `string`: Secret, which client uses at authentication.
  * fallbackMappingClaim `string`: Name of the claim which is used for the user mapping fallback.
  * flow `string` (values: authorization_code, hybrid): &#128640; Since v4.11.0
  * id **required** `integer`: ID
  * issuer `string`: Issuer identifier of the IDP
  * jwksEndPointUrl `string`: URL of the JWKS endpoint
  * mappingClaim `string`: Name of the claim which is used for the user mapping.
  * name `string`: Name of the IDP
  * pkceChallengeMethod `string`: PKCE code challenge method.
  * pkceEnabled `boolean`: Determines whether PKCE is enabled.
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`: URIs, to which a user is redirected after authorization.
  * scopes `array`: List of requested scopes
    * items `string`: List of requested scopes
  * tokenEndPointUrl `string`: URL of the token endpoint
  * userImportEnabled `boolean`: Determines if a DRACOON account is automatically created for a new user
  * userImportGroup `integer`: User group that is assigned to users who are created by automatic import.
  * userInfoEndPointUrl `string`: URL of the user info endpoint
  * userInfoSource `string` (values: user_info_endpoint, id_token): &#128640; Since v4.23.0
  * userManagementUrl `string`: URL of the user management UI.
  * userUpdateEnabled `boolean`: Determines if the DRACOON account is updated with data from AD / IDP.

### OpenIdProvider
* OpenIdProvider `object`: OpenID Connect provider information
  * id **required** `integer`: ID
  * isGlobalAvailable **required** `boolean`: Is available for all customers
  * issuer **required** `string`: Issuer identifier of the IDP
  * mappingClaim **required** `string`: Name of the claim which is used for the user mapping.
  * name **required** `string`: Name of the IDP
  * userManagementUrl `string`: URL of the user management UI.

### PasswordExpiration
* PasswordExpiration `object`: Password expiration information
  * enabled **required** `boolean`: Determines whether password expiration is enabled
  * maxPasswordAge `integer`: Maximum allowed password age (in days)

### PasswordPoliciesConfig
* PasswordPoliciesConfig `object`: Set of password policies
  * encryptionPasswordPolicies [EncryptionPasswordPolicies](#encryptionpasswordpolicies)
  * loginPasswordPolicies [LoginPasswordPolicies](#loginpasswordpolicies)
  * sharesPasswordPolicies [SharesPasswordPolicies](#sharespasswordpolicies)

### PendingAssignment
* PendingAssignment `object`: Pending assignment information
  * groupId **required** `integer`: Unique identifier for the group
  * roomId **required** `integer`: Room ID
  * state **required** `string` (values: ACCEPTED, DENIED, WAITING): Acceptance state:
  * userId **required** `integer`: Unique identifier for the user

### PendingAssignmentData
* PendingAssignmentData `object`: Pending assignment information
  * groupId `integer`: &#128679; Deprecated since v4.2.0
  * groupInfo **required** [GroupInfo](#groupinfo)
  * pendingGroupData **required** [PendingGroupData](#pendinggroupdata)
  * pendingUserData **required** [PendingUserData](#pendinguserdata)
  * roomId **required** `integer`: Room ID
  * state **required** `string` (values: ACCEPTED, DENIED, WAITING): Acceptance state:
  * userId `integer`: &#128679; Deprecated since v4.2.0
  * userInfo **required** [UserInfo](#userinfo)

### PendingAssignmentList
* PendingAssignmentList `object`: List of pending assignments
  * items **required** `array`: List of pending assignment information
    * items [PendingAssignmentData](#pendingassignmentdata)
  * range [Range](#range)

### PendingAssignmentsRequest
* PendingAssignmentsRequest `object`: Request model for handling pending assignments
  * items **required** `array`: List of pending assignments
    * items [PendingAssignment](#pendingassignment)

### PendingGroupData
* PendingGroupData `object`: Pending group information
  * id **required** `integer`: Unique identifier for the group
  * name **required** `string`: Group name

### PendingUserData
* PendingUserData `object`: Pending user information
  * displayName **required** `string`: Display name
  * email **required** `string`: Email 
  * id **required** `integer`: Unique identifier for the user
  * login **required** `string`: User login name

### PresignedUrl
* PresignedUrl `object`: Presigned URL information
  * partNumber **required** `integer`: Corresponding part number
  * url **required** `string`: S3 presigned URL

### PresignedUrlList
* PresignedUrlList `object`: List of generated presigned URLs
  * urls **required** `array`: List of S3 presigned URLs
    * items [PresignedUrl](#presignedurl)

### PrivateKeyContainer
* PrivateKeyContainer `object`: Private key container
  * privateKey **required** `string`: Private key
  * version **required** `string`: Version

### ProfileAttributes
* ProfileAttributes `object`: User profile attributes
  * items **required** `array`: List of key-value pairs
    * items [KeyValueEntry](#keyvalueentry)
  * range **required** [Range](#range)

### ProfileAttributesRequest
* ProfileAttributesRequest `object`: Request model for setting user profile attributes
  * items **required** `array`: List of key-value pairs
    * items [KeyValueEntry](#keyvalueentry)

### PublicDownloadShare
* PublicDownloadShare `object`: Download Share information
  * createdAt **required** `string`: Creation date
  * creatorName **required** `string`: Creator name
  * creatorUsername `string`: Creator username
  * expireAt `string`: Expiration date
  * fileKey [FileKey](#filekey)
  * fileName **required** `string`: File name
  * hasDownloadLimit **required** `boolean`: &#128640; Since v4.11.0
  * isEncrypted `boolean`: Encryption state
  * isProtected **required** `boolean`: Is share protected by password
  * limitReached **required** `boolean`: Downloads limit reached
  * mediaType **required** `string`: &#128640; Since v4.11.0
  * name `string`: Share display name (alias name)
  * notes `string`: User notes
  * privateKeyContainer [PrivateKeyContainer](#privatekeycontainer)
  * size **required** `integer`: File size or container size not compressed (in bytes)

### PublicDownloadTokenGenerateRequest
* PublicDownloadTokenGenerateRequest `object`: Request model for generating download URL
  * password `string`: Password (only for password-protected shares)

### PublicDownloadTokenGenerateResponse
* PublicDownloadTokenGenerateResponse `object`: Download URL
  * downloadUrl `string`: Download URL
  * token **required** `string`: &#128679; Deprecated since v4.3.0

### PublicKeyContainer
* PublicKeyContainer `object`: Public key container
  * publicKey **required** `string`: Public key
  * version **required** `string`: Version

### PublicUploadShare
* PublicUploadShare `object`: Upload Share information
  * createdAt **required** `string`: Creation date
  * creatorName **required** `string`: &#128640; Since v4.11.0
  * creatorUsername `string`: &#128640; Since v4.11.0
  * expireAt `string`: Expiration date
  * isEncrypted `boolean`: Encryption state
  * isProtected **required** `boolean`: Is share protected by password
  * maxSize `number`: &#128679; Deprecated since v4.2.0
  * maxSlots **required** `integer`: &#128679; Deprecated since v4.2.0
  * name `string`: Share display name (alias name)
  * notes `string`: User notes
  * remainingSize `integer`: Remaining size
  * remainingSlots `integer`: Remaining slots
  * showUploadedFiles `boolean`: Allow display of already uploaded files
  * uploadedFiles `array`: List of (public) uploaded files
    * items [PublicUploadedFileData](#publicuploadedfiledata)
  * userUserPublicKeyList [UserUserPublicKeyList](#useruserpublickeylist)

### PublicUploadedFileData
* PublicUploadedFileData `object`: File information
  * createdAt **required** `string`: Creation date
  * hash `string`: Hash value of transferred file
  * name **required** `string`: Name
  * size **required** `integer`: File size in byte

### RadiusChallengeResponse
* RadiusChallengeResponse `object`: RADIUS challenge reply
  * code **required** `integer`: HTTP status code
  * debugInfo `string`: Debug information
  * errorCode `integer`: Internal error code
  * message **required** `string`: HTTP status code description
  * replyMessage **required** `string`: RADIUS Reply-Message
  * replyState **required** `string`: For RADIUS Access-Challenge

### RadiusConfig
* RadiusConfig `object`: RADIUS configuration
  * failoverServer [FailoverServer](#failoverserver)
  * ipAddress **required** `string`: RADIUS Server IP Address
  * otpPinFirst **required** `boolean`: Sequence order of concatenated PIN and one-time token
  * port **required** `integer`: RADIUS Server Port
  * sharedSecret **required** `string`: Shared Secret to access the RADIUS server

### RadiusConfigCreateRequest
* RadiusConfigCreateRequest `object`: Request model for creating a RADIUS configuration
  * failoverServer [FailoverServer](#failoverserver)
  * ipAddress **required** `string`: RADIUS Server IP Address
  * otpPinFirst `boolean`: Sequence order of concatenated PIN and one-time token
  * port **required** `integer`: RADIUS Server Port
  * sharedSecret **required** `string`: Shared Secret to access the RADIUS server

### RadiusConfigUpdateRequest
* RadiusConfigUpdateRequest `object`: Request model for updating a RADIUS configuration
  * failoverServer [FailoverServer](#failoverserver)
  * ipAddress `string`: RADIUS Server IP Address
  * otpPinFirst `boolean`: Sequence order of concatenated PIN and one-time token
  * port `integer`: RADIUS Server Port
  * sharedSecret `string`: Shared Secret to access the RADIUS server

### Range
* Range `object`: Range information
  * limit **required** `integer`: Range limit. Maximum 500.
  * offset **required** `integer`: Range offset
  * total **required** `integer`: Total items available

### RecoverUserNameRequest
* RecoverUserNameRequest `object`: Recover usernames for email
  * creatorLanguage `string`: IETF language tag
  * email **required** `string`: Email 

### ResetPasswordRequest
* ResetPasswordRequest `object`: Request model for reseting user's login password
  * creatorLanguage `string`: IETF language tag
  * language `string`: &#128679; Deprecated since v4.7.0
  * login `string`: &#128679; Deprecated since v4.13.0
  * userName `string`: &#128640; Since v4.13.0

### ResetPasswordTokenValidateResponse
* ResetPasswordTokenValidateResponse `object`: Password reset information
  * allowSystemGlobalWeakPassword `boolean`: &#128679; Deprecated since v4.14.0
  * firstName **required** `string`: User first name
  * gender `string`: &#128679; Deprecated since v4.12.0
  * lastName **required** `string`: User last name
  * loginPasswordPolicies [LoginPasswordPolicies](#loginpasswordpolicies)
  * title `string`: &#128679; Deprecated since v4.18.0

### ResetPasswordWithTokenRequest
* ResetPasswordWithTokenRequest `object`: New password
  * password **required** `string`: New password

### RestoreDeletedNodesRequest
* RestoreDeletedNodesRequest `object`: Request model for restoring deleted nodes
  * deletedNodeIds **required** `array`: List of deleted node IDs
    * items `integer`: List of deleted node IDs
  * keepShareLinks `boolean`: Preserve Download Share Links and point them to the new node.
  * parentId `integer`: Node parent ID
  * resolutionStrategy `string` (values: autorename, overwrite, fail): Node conflict resolution strategy:

### Right
* Right `object`: Right information
  * description **required** `string`: Right description
  * id **required** `integer`: Unique identifier for the right
  * name **required** `string`: Right (unique) name

### Role
* Role `object`: Role information
  * description **required** `string`: Role description
  * id **required** `integer`: Unique identifier for the role
  * items `array`: List of reachable right over role
    * items [Right](#right)
  * name **required** `string`: Role (unique) name

### RoleGroup
* RoleGroup `object`: Group information
  * id **required** `integer`: Unique identifier for the group
  * isMember **required** `boolean`: Is group member of the role
  * name **required** `string`: Group name

### RoleGroupList
* RoleGroupList `object`: List of groups with assigned role
  * items **required** `array`: List of role-group mappings
    * items [RoleGroup](#rolegroup)
  * range **required** [Range](#range)

### RoleList
* RoleList `object`: List of roles
  * items **required** `array`: List of roles
    * items [Role](#role)

### RoleUser
* RoleUser `object`: User information
  * displayName **required** `string`: &#128679; Deprecated since v4.11.0
  * id **required** `integer`: &#128679; Deprecated since v4.11.0
  * isMember **required** `boolean`: Is user member of the role
  * userInfo **required** [UserInfo](#userinfo)

### RoleUserList
* RoleUserList `object`: List of users with assigned role
  * items **required** `array`: List of role-user mappings
    * items [RoleUser](#roleuser)
  * range **required** [Range](#range)

### RoomData
* RoomData `object`: Room information
  * children `array`: &#128679; Deprecated since v4.10.0
    * items [RoomData](#roomdata)
  * cntAdmins `integer`: &#128679; Deprecated since v4.2.0
  * cntDownloadShares `integer`: Returns the number of Download Shares of this node.
  * cntUploadShares `integer`: Returns the number of Upload Shares of this node.
  * cntUsers `integer`: &#128679; Deprecated since v4.2.0
  * createdAt `string`: Expiration date
  * createdBy [UserInfo](#userinfo)
  * hasRecycleBin **required** `boolean`: &#128679; Deprecated since v4.10.0
  * id **required** `integer`: Room ID
  * isEncrypted **required** `boolean`: Encryption state
  * isFavorite `boolean`: Node is marked as favorite (for rooms / folders only)
  * isGranted **required** `boolean`: Is user granted room permissions
  * name **required** `string`: Name
  * parentId `integer`: Parent node ID (room or folder)
  * permissions [NodePermissions](#nodepermissions)
  * quota `integer`: Quota in byte
  * recycleBinRetentionPeriod **required** `integer`: Retention period for deleted nodes in days
  * size `integer`: Room size
  * type `string` (values: room): Node type
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### RoomGroup
* RoomGroup `object`: Group information
  * id **required** `integer`: Unique identifier for the group
  * isGranted **required** `boolean`: Is user granted room permissions
  * name **required** `string`: Group name
  * newGroupMemberAcceptance `string` (values: autoallow, pending): Behaviour when new users are added to the group:
  * permissions [NodePermissions](#nodepermissions)

### RoomGroupList
* RoomGroupList `object`: List of groups
  * items **required** `array`: List of room-group mappings
    * items [RoomGroup](#roomgroup)
  * range **required** [Range](#range)

### RoomGroupsAddBatchRequest
* RoomGroupsAddBatchRequest `object`: Request model for granting group(s) to the room
  * items **required** `array`: List of room-group mappings
    * items [RoomGroupsAddBatchRequestItem](#roomgroupsaddbatchrequestitem)

### RoomGroupsAddBatchRequestItem
* RoomGroupsAddBatchRequestItem `object`: Request item model for granting group to the room
  * id **required** `integer`: Unique identifier for the group
  * newGroupMemberAcceptance `string` (values: autoallow, pending): Behaviour when new users are added to the group:
  * permissions **required** [NodePermissions](#nodepermissions)

### RoomGroupsDeleteBatchRequest
* RoomGroupsDeleteBatchRequest `object`: Request model for revoking group(s) from the room
  * ids **required** `array`: List of group IDs
    * items `integer`: List of group IDs

### RoomTreeDataList
* RoomTreeDataList `object`: List of rooms
  * items **required** `array`: List of room data information
    * items [RoomData](#roomdata)
  * range **required** [Range](#range)

### RoomUser
* RoomUser `object`: User information
  * displayName **required** `string`: &#128679; Deprecated since v4.11.0
  * email **required** `string`: &#128679; Deprecated since v4.11.0
  * id **required** `integer`: &#128679; Deprecated since v4.11.0
  * isGranted **required** `boolean`: Is user granted room permissions
  * login **required** `string`: &#128679; Deprecated since v4.11.0
  * permissions [NodePermissions](#nodepermissions)
  * publicKeyContainer [PublicKeyContainer](#publickeycontainer)
  * userInfo **required** [UserInfo](#userinfo)

### RoomUserList
* RoomUserList `object`: List of users
  * items **required** `array`: List of room-user mappings
    * items [RoomUser](#roomuser)
  * range **required** [Range](#range)

### RoomUsersAddBatchRequest
* RoomUsersAddBatchRequest `object`: Request model for granting user(s) to the room
  * items **required** `array`: List of room-user mappings
    * items [RoomUsersAddBatchRequestItem](#roomusersaddbatchrequestitem)

### RoomUsersAddBatchRequestItem
* RoomUsersAddBatchRequestItem `object`: Request item model for granting user to the room
  * id **required** `integer`: Unique identifier for the user
  * permissions **required** [NodePermissions](#nodepermissions)

### RoomUsersDeleteBatchRequest
* RoomUsersDeleteBatchRequest `object`: Request model for revoking user(s) from the room
  * ids **required** `array`: List of user IDs
    * items `integer`: List of user IDs

### RoomWebhook
* RoomWebhook `object`: Webhook information
  * isAssigned **required** `boolean`: Determines whether webhook is assigned to the room.
  * webhook **required** [Webhook](#webhook)

### RoomWebhookAssignment
* RoomWebhookAssignment `object`: Request model for handling webhook assignments
  * isAssigned **required** `boolean`: Determines whether webhook is assigned to the room.
  * webhookId **required** `integer`: Webhook ID

### RoomWebhookList
* RoomWebhookList `object`: List of webhooks
  * items **required** `array`: List of webhooks
    * items [RoomWebhook](#roomwebhook)
  * range **required** [Range](#range)

### S3Config
* S3Config `object`: S3 configuration
  * accessKeyDefined **required** `boolean`: Determines whether Access Key ID is defined
  * bucketName **required** `string`: S3 bucket name
  * endpointUrl **required** `string`: S3 object storage endpoint URL
  * region `string`: S3 region
  * secretKeyDefined **required** `boolean`: Determines whether Access Secret Key is defined

### S3ConfigCreateRequest
* S3ConfigCreateRequest `object`: Request model for creating a S3 configuration
  * accessKey **required** `string`: Access Key ID
  * bucketName **required** `string`: S3 bucket name
  * endpointUrl **required** `string`: S3 object storage endpoint URL
  * region `string`: S3 region
  * secretKey **required** `string`: Secret Access Key

### S3ConfigUpdateRequest
* S3ConfigUpdateRequest `object`: Request model for updating a S3 configuration
  * accessKey `string`: Access Key ID
  * bucketName `string`: S3 bucket name
  * endpointUrl `string`: S3 object storage endpoint URL
  * region `string`: S3 region
  * secretKey `string`: Secret Access Key

### S3FileUploadPart
* S3FileUploadPart `object`: S3 file upload part information
  * partEtag **required** `string`: Corresponding part ETag
  * partNumber **required** `integer`: Corresponding part number

### S3FileUploadStatus
* S3FileUploadStatus `object`: S3 file upload status information
  * errorDetails [ErrorResponse](#errorresponse)
  * node [Node](#node)
  * status **required** `string`: S3 file upload status:

### S3ShareUploadStatus
* S3ShareUploadStatus `object`: S3 file upload status information
  * errorDetails [ErrorResponse](#errorresponse)
  * fileName **required** `string`: File name
  * size `integer`: File size in byte
  * status **required** `string`: S3 file upload status:

### S3Tag
* S3Tag `object`: S3 tag information
  * id `integer`: S3 tag ID
  * isMandatory `boolean`: Determines whether S3 is mandatory or not
  * key `string`: S3 tag key
  * value `string`: S3 tag value

### S3TagCreateRequest
* S3TagCreateRequest `object`: Request model for creating a S3 tag
  * isMandatory `boolean`: Determines whether S3 is mandatory or not
  * key **required** `string`: S3 tag key
  * value **required** `string`: S3 tag value

### S3TagIds
* S3TagIds `object`: List of S3 tag IDs
  * ids **required** `array`: List of S3 tag IDs
    * items `integer`: List of S3 tag IDs

### S3TagList
* S3TagList `object`: List of S3 tags
  * items `array`: List of configured S3 tags
    * items [S3Tag](#s3tag)

### SdsServerTime
* SdsServerTime `object`: DRACOON server time
  * time `string`: DRACOON server time

### SharesPasswordPolicies
* SharesPasswordPolicies `object`: Shares password policies
  * characterRules [CharacterRules](#characterrules)
  * minLength `integer`: Minimum number of characters a password must contain
  * rejectDictionaryWords `boolean`: Determines whether a password must NOT contain word(s) from a dictionary
  * rejectKeyboardPatterns `boolean`: Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
  * rejectUserInfo `boolean`: Determines whether a password must NOT contain user info (first name, last name, email, user name)
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### SoftwareVersionData
* SoftwareVersionData `object`: Software version information
  * buildDate **required** `string`: Build date
  * restApiVersion **required** `string`: REST API version
  * scmRevisionNumber **required** `string`: Revision number
  * sdsServerVersion **required** `string`: DRACOON server version

### SubscribedDownloadShare
* SubscribedDownloadShare `object`: Subscribed download share information
  * authParentId `integer`: Auth parent room ID
  * id **required** `integer`: Share ID

### SubscribedDownloadShareList
* SubscribedDownloadShareList `object`: List of subscribed download shares
  * items **required** `array`: List of subscribed download shares
    * items [SubscribedDownloadShare](#subscribeddownloadshare)
  * range **required** [Range](#range)

### SubscribedNode
* SubscribedNode `object`: Subscribed node information
  * authParentId `integer`: Auth parent room ID
  * id **required** `integer`: Node ID
  * type `string` (values: room, folder, file): Node type

### SubscribedNodeList
* SubscribedNodeList `object`: List of subscribed nodes
  * items **required** `array`: List of subscribed nodes
    * items [SubscribedNode](#subscribednode)
  * range **required** [Range](#range)

### SyslogConfig
* SyslogConfig `object`: Syslog settings
  * host `string`: Syslog server (IP or FQDN)
  * enabled `boolean`: Is syslog enabled?
  * logIpEnabled `boolean`: Determines whether user’s IP address is logged.
  * port `integer`: Syslog server port
  * protocol `string` (values: TCP, UDP): Protocol to connect to syslog server

### SyslogEvent
* SyslogEvent `object`: Syslog event information
  * attribute1 `string`: Attribute 1
  * attribute2 `string`: Attribute 2
  * attribute3 `string`: Attribute 3
  * authParentSource `string`: Auth parent source ID
  * authParentTarget `string`: Auth parent target ID
  * customerId `integer`: Unique identifier for the customer
  * id **required** `integer`: Event ID
  * message **required** `string`: Event description
  * objectId1 `integer`: Object ID 1
  * objectId2 `integer`: Object ID 2
  * objectName1 `string`: Object name 1
  * objectName2 `string`: Object type 2
  * objectType1 `integer`: Object type 1
  * objectType2 `integer`: Object type 2
  * operationId `integer`: Operation type ID
  * operationName `string`: Operation name
  * status `integer` (values: 0, 2): Operation status:
  * time **required** `string`: Event timestamp
  * userClient `string`: Client
  * userId **required** `integer`: Unique identifier for the user
  * userIp `string`: User IP
  * userName `string`: Username

### SyslogEventList
* SyslogEventList `object`: List of syslog events
  * items **required** `array`: List of log events
    * items [SyslogEvent](#syslogevent)
  * range **required** [Range](#range)

### SystemDefaults
* SystemDefaults `object`: System defaults
  * downloadShareDefaultExpirationPeriod `integer`: Default expiration period for Download Shares in days.
  * fileDefaultExpirationPeriod `integer`: Default expiration period for all uploaded files in days.
  * hideLoginInputFields `boolean`: &#128640; Since v4.13.0
  * languageDefault `string`: Define which language should be default.
  * nonmemberViewerDefault `boolean`: &#128640; Since v4.12.0
  * uploadShareDefaultExpirationPeriod `integer`: Default expiration period for Upload Shares in days.

### SystemInfo
* SystemInfo `object`: System information (default language and authentication methods)
  * authMethods **required** `array`: &#128679; Deprecated since v4.13.0
    * items [AuthMethod](#authmethod)
  * hideLoginInputFields **required** `boolean`: &#128640; Since v4.13.0
  * languageDefault **required** `string`: System default language
  * s3EnforceDirectUpload **required** `boolean`: &#128640; Since v4.15.0
  * s3Hosts **required** `array`: &#128640; Since v4.14.0
    * items `string`: List of S3 Hosts for CSP header
  * useS3Storage **required** `boolean`: &#128640; Since v4.21.0

### TestActiveDirectoryConfigRequest
* TestActiveDirectoryConfigRequest `object`: Request model for testing connection for Active Directory configuration
  * ldapUsersDomain **required** `string`: Search scope of Active Directory; only users below this node can log on.
  * serverAdminName **required** `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverAdminPassword **required** `string`: Password of Active Directory administrative account
  * serverIp **required** `string`: IPv4 or IPv6 address or host name
  * serverPort **required** `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps `boolean`: Determines whether LDAPS should be used instead of plain LDAP.

### TestActiveDirectoryConfigResponse
* TestActiveDirectoryConfigResponse `object`: Response model for testing connection for Active Directory configuration
  * ldapUsersDomain **required** `string`: Search scope of Active Directory; only users below this node can log on.
  * serverAdminName **required** `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverAdminPassword **required** `string`: Password of Active Directory administrative account
  * serverIp **required** `string`: IPv4 or IPv6 address or host name
  * serverPort **required** `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps **required** `boolean`: Determines whether LDAPS should be used instead of plain LDAP.

### ThirdPartyDependenciesData
* ThirdPartyDependenciesData `object`: Third-party dependency information
  * artifactId **required** `string`: Third party dependencies artifactId
  * description **required** `string`: Third party dependencies description
  * groupId **required** `string`: Third party dependencies groupId
  * id **required** `string`: Third party dependencies id
  * licenses **required** `array`: Third party dependencies licenses type
    * items `string`: Third party dependencies licenses type
  * name **required** `string`: Third party dependencies name
  * type **required** `string`: Third party dependencies type
  * url **required** `string`: Third party dependencies url
  * version **required** `string`: Third party dependencies version

### UpdateActiveDirectoryConfigRequest
* UpdateActiveDirectoryConfigRequest `object`: Request model for updating an Active Directory configuration
  * adExportGroup `string`: If `userImport` is set to `true`,
  * alias `string`: Unique name for an Active Directory configuration
  * createHomeFolder `boolean`: DEPRECATED, will be ignored
  * homeFolderParent `integer`: DEPRECATED, will be ignored
  * ldapUsersDomain `string`: Search scope of Active Directory; only users below this node can log on.
  * sdsImportGroup `integer`: User group that is assigned to users who are created by automatic import.
  * serverAdminName `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverAdminPassword `string`: Password of Active Directory administrative account
  * serverIp `string`: IPv4 or IPv6 address or host name
  * serverPort `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps `boolean`: Determines whether LDAPS should be used instead of plain LDAP.
  * userFilter `string`: Name of Active Directory attribute that is used as login name.
  * userImport `boolean`: Determines if a DRACOON account is automatically created for a new user

### UpdateAuthTokenRestrictions
* UpdateAuthTokenRestrictions `object`: Request model for updating auth token settings
  * accessTokenValidity `integer`: &#128640; Since v4.13.0
  * overwriteEnabled **required** `boolean`: &#128640; Since v4.13.0
  * refreshTokenValidity `integer`: &#128640; Since v4.13.0

### UpdateCustomerRequest
* UpdateCustomerRequest `object`: Request model for updating a customer
  * companyName `string`: Company name
  * customerContractType **required** `string` (values: demo, free, pay): Customer type
  * isLocked `boolean`: Customer is locked:
  * lockStatus `boolean`: &#128679; Deprecated since v4.7.0
  * providerCustomerId `string`: Provider customer ID
  * quotaMax `integer`: Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
  * userMax `integer`: Maximal number of users
  * webhooksMax `integer`: &#128640; Since v4.19.0

### UpdateCustomerResponse
* UpdateCustomerResponse `object`: Customer information
  * activationCode `string`: &#128679; Deprecated since v4.8.0
  * companyName **required** `string`: Company name
  * createdAt `string`: Creation date
  * customerAttributes [CustomerAttributes](#customerattributes)
  * customerContractType **required** `string` (values: demo, free, pay): Customer type
  * customerUuid **required** `string`: &#128640; Since v4.21.0
  * id **required** `integer`: Unique identifier for the customer
  * isLocked `boolean`: Customer is locked:
  * lockStatus **required** `boolean`: &#128679; Deprecated since v4.7.0
  * providerCustomerId `string`: Provider customer ID
  * quotaMax **required** `integer`: Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
  * trialDays `integer`: Number of days left for trial period (relevant only for type `demo`)
  * updatedAt `string`: Modification date
  * userMax **required** `integer`: Maximal number of users
  * webhooksMax `integer`: &#128640; Since v4.19.0

### UpdateDownloadShareRequest
* UpdateDownloadShareRequest `object`: Request model for updating a Download Share
  * defaultCountry `string`: Country shorthand symbol (cf. ISO 3166-2)
  * expiration [ObjectExpiration](#objectexpiration)
  * internalNotes `string`: &#128640; Since v4.11.0
  * maxDownloads `integer`: Max allowed downloads
  * name `string`: Alias name
  * notes `string`: User notes
  * notifyCreator `boolean`: &#128679; Deprecated since v4.20.0
  * password `string`: Access password, not allowed for encrypted shares
  * receiverLanguage `string`: Language tag for messages to receiver
  * resetMaxDownloads `boolean`: Set 'true' to reset 'maxDownloads' for Download Share.
  * resetPassword `boolean`: Set 'true' to reset 'password' for Download Share.
  * showCreatorName `boolean`: Show creator first and last name.
  * showCreatorUsername `boolean`: Show creator email address.
  * textMessageRecipients `array`: List of recipient FQTNs
    * items `string`: List of recipient FQTNs

### UpdateEncryptionPasswordPolicies
* UpdateEncryptionPasswordPolicies `object`: Request model for updating encryption password policies
  * characterRules [CharacterRules](#characterrules)
  * minLength `integer`: Minimum number of characters a password must contain
  * rejectKeyboardPatterns `boolean`: Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
  * rejectUserInfo `boolean`: Determines whether a password must NOT contain user info (first name, last name, email, user name)

### UpdateEventlogConfig
* UpdateEventlogConfig `object`: Request model for updating eventlog settings
  * enabled `boolean`: Is eventlog enabled?
  * logIpEnabled `boolean`: Determines whether user’s IP address is logged.
  * retentionPeriod `integer`: Retention period (in days) of event log entries.

### UpdateFileRequest
* UpdateFileRequest `object`: Request model for updating file's metadata
  * classification `integer`: Classification ID:
  * expiration [ObjectExpiration](#objectexpiration)
  * name `string`: File name
  * notes `string`: User notes
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0

### UpdateFolderRequest
* UpdateFolderRequest `object`: Request model for updating folder's metadata
  * name `string`: Folder name
  * notes `string`: User notes
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0

### UpdateGeneralSettings
* UpdateGeneralSettings `object`: Request model for updating general settings
  * authTokenRestrictions [UpdateAuthTokenRestrictions](#updateauthtokenrestrictions)
  * cryptoEnabled `boolean`: Activation status of client-side encryption.
  * emailNotificationButtonEnabled `boolean`: Enable email notification button
  * eulaEnabled `boolean`: Each user has to confirm the EULA at first login.
  * hideLoginInputFields `boolean`: &#128679; Deprecated since v4.13.0
  * mediaServerEnabled `boolean`: &#128679; Deprecated since v4.12.0
  * s3TagsEnabled `boolean`: &#128640; Since v4.9.0
  * sharePasswordSmsEnabled `boolean`: Allow sending of share passwords via SMS
  * weakPasswordEnabled `boolean`: &#128679; Deprecated since v4.14.0

### UpdateGroupRequest
* UpdateGroupRequest `object`: Request model for updating group's metadata
  * expiration [ObjectExpiration](#objectexpiration)
  * name `string`: Group name

### UpdateLoginPasswordPolicies
* UpdateLoginPasswordPolicies `object`: Request model for updating login password policies
  * characterRules [CharacterRules](#characterrules)
  * enforceLoginPasswordChange `boolean`: Determines whether a login password change should be enforced for all users
  * minLength `integer`: Minimum number of characters a password must contain
  * numberOfArchivedPasswords `integer`: Number of passwords to archive
  * passwordExpiration [PasswordExpiration](#passwordexpiration)
  * rejectDictionaryWords `boolean`: Determines whether a password must NOT contain word(s) from a dictionary
  * rejectKeyboardPatterns `boolean`: Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
  * rejectUserInfo `boolean`: Determines whether a password must NOT contain user info (first name, last name, email, user name)
  * userLockout [UserLockout](#userlockout)

### UpdateOAuthClientRequest
* UpdateOAuthClientRequest `object`: Request model for updating an OAuth client
  * accessTokenValidity `integer`: Validity of the access token in seconds.
  * approvalValidity `integer`: &#128640; Since v4.22.0
  * clientName `string`: Name, which is shown at the client configuration and authorization.
  * clientSecret `string`: Secret, which client uses at authentication.
  * clientType `string` (values: confidential, public): Determines whether client is a confidential or public client.
  * grantTypes **required** `array` (values: authorization_code, client_credentials, implicit, password, refresh_token): Authorized grant types
    * items `string` (values: authorization_code, client_credentials, implicit, password, refresh_token): Authorized grant types
  * isEnabled `boolean`: Determines whether client is enabled.
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`: URIs, to which a user is redirected after authorization.
  * refreshTokenValidity `integer`: Validity of the refresh token in seconds.

### UpdateOpenIdIdpConfigRequest
* UpdateOpenIdIdpConfigRequest `object`: Request model for updating an OpenID Connect IDP configuration
  * authorizationEndPointUrl `string`: URL of the authorization endpoint
  * clientId `string`: ID of the OpenID client
  * clientSecret `string`: Secret, which client uses at authentication.
  * fallbackMappingClaim `string`: Name of the claim which is used for the user mapping fallback.
  * flow `string` (values: authorization_code, hybrid): &#128640; Since v4.11.0
  * issuer `string`: Issuer identifier of the IDP
  * jwksEndPointUrl `string`: URL of the JWKS endpoint
  * mappingClaim `string`: Name of the claim which is used for the user mapping.
  * name `string`: Name of the IDP
  * pkceChallengeMethod `string`: PKCE code challenge method.
  * pkceEnabled `boolean`: Determines whether PKCE is enabled.
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`: URIs, to which a user is redirected after authorization.
  * resetFallbackMappingClaim `boolean`: Set `true` to reset `fallbackMappingClaim`.
  * scopes `array`: List of requested scopes
    * items `string`: List of requested scopes
  * tokenEndPointUrl `string`: URL of the token endpoint
  * userImportEnabled `boolean`: Determines if a DRACOON account is automatically created for a new user
  * userImportGroup `integer`: User group that is assigned to users who are created by automatic import.
  * userInfoEndPointUrl `string`: URL of the user info endpoint
  * userInfoSource `string` (values: user_info_endpoint, id_token): &#128640; Since v4.23.0
  * userManagementUrl `string`: URL of the user management UI.
  * userUpdateEnabled `boolean`: Determines if the DRACOON account is updated with data from AD / IDP.

### UpdatePasswordPoliciesConfig
* UpdatePasswordPoliciesConfig `object`: Request model for updating a set of password policies
  * encryptionPasswordPolicies [UpdateEncryptionPasswordPolicies](#updateencryptionpasswordpolicies)
  * loginPasswordPolicies [UpdateLoginPasswordPolicies](#updateloginpasswordpolicies)
  * sharesPasswordPolicies [UpdateSharesPasswordPolicies](#updatesharespasswordpolicies)

### UpdateRoomRequest
* UpdateRoomRequest `object`: Request model for updating room's metadata
  * name `string`: Name
  * notes `string`: User notes
  * quota `integer`: Quota in byte
  * timestampCreation **required** `string`: &#128640; Since v4.22.0
  * timestampModification **required** `string`: &#128640; Since v4.22.0

### UpdateRoomWebhookRequest
* UpdateRoomWebhookRequest `object`: Request model for handling webhook assignments
  * items **required** `array`: Assign a webhook to a room to use it for node actions within the room 
    * items [RoomWebhookAssignment](#roomwebhookassignment)

### UpdateSharesPasswordPolicies
* UpdateSharesPasswordPolicies `object`: Request model for updating shares password policies
  * characterRules [CharacterRules](#characterrules)
  * minLength `integer`: Minimum number of characters a password must contain
  * rejectDictionaryWords `boolean`: Determines whether a password must NOT contain word(s) from a dictionary
  * rejectKeyboardPatterns `boolean`: Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
  * rejectUserInfo `boolean`: Determines whether a password must NOT contain user info (first name, last name, email, user name)

### UpdateSyslogConfig
* UpdateSyslogConfig `object`: Request model for updating syslog settings
  * host `string`: Syslog server (IP or FQDN)
  * enabled `boolean`: Is syslog enabled?
  * logIpEnabled `boolean`: Determines whether user’s IP address is logged.
  * port `integer`: Syslog server port
  * protocol `string` (values: TCP, UDP): Protocol to connect to syslog server

### UpdateSystemDefaults
* UpdateSystemDefaults `object`: Request model for updating system defaults
  * downloadShareDefaultExpirationPeriod `integer`: Default expiration period for Download Shares in days.
  * fileDefaultExpirationPeriod `integer`: Default expiration period for all uploaded files in days.
  * languageDefault `string`: Define which language should be default.
  * nonmemberViewerDefault `boolean`: &#128640; Since v4.12.0
  * uploadShareDefaultExpirationPeriod `integer`: Default expiration period for Upload Shares in days.

### UpdateUploadShareRequest
* UpdateUploadShareRequest `object`: Request model for updating an Upload Share
  * defaultCountry `string`: Country shorthand symbol (cf. ISO 3166-2)
  * expiration [ObjectExpiration](#objectexpiration)
  * filesExpiryPeriod `integer`: Number of days after which uploaded files expire
  * internalNotes `string`: &#128640; Since v4.11.0
  * maxSize `integer`: Maximal total size of uploaded files (in bytes)
  * maxSlots `integer`: Maximal amount of files to upload
  * name `string`: Alias name
  * notes `string`: User notes
  * notifyCreator `boolean`: &#128679; Deprecated since v4.20.0
  * password `string`: Password
  * receiverLanguage `string`: Language tag for messages to receiver
  * resetFilesExpiryPeriod `boolean`: Set 'true' to reset 'filesExpiryPeriod' for Upload Share
  * resetMaxSize `boolean`: Set 'true' to reset 'maxSize' for Upload Share
  * resetMaxSlots `boolean`: Set 'true' to reset 'maxSlots' for Upload Share
  * resetPassword `boolean`: Set 'true' to reset 'password' for Upload Share.
  * showCreatorName `boolean`: Show creator first and last name.
  * showCreatorUsername `boolean`: Show creator email address.
  * showUploadedFiles `boolean`: Allow display of already uploaded files
  * textMessageRecipients `array`: List of recipient FQTNs
    * items `string`: List of recipient FQTNs

### UpdateUserAccountRequest
* UpdateUserAccountRequest `object`: Request model for updating user account information
  * acceptEULA `boolean`: Accept EULA
  * email `string`: Email 
  * firstName `string`: User first name
  * gender `string`: &#128679; Deprecated since v4.12.0
  * language `string`: &#128640; Since v4.20.0
  * lastName `string`: User last name
  * login `string`: &#128679; Deprecated since v4.13.0
  * phone `string`: Phone number
  * title `string`: &#128679; Deprecated since v4.18.0
  * userName `string`: &#128640; Since v4.13.0

### UpdateUserRequest
* UpdateUserRequest `object`: Request model for updating user's metadata
  * authData [UserAuthDataUpdateRequest](#userauthdataupdaterequest)
  * authMethods `array`: &#128679; Deprecated since v4.13.0
    * items [UserAuthMethod](#userauthmethod)
  * email `string`: Email 
  * expiration [ObjectExpiration](#objectexpiration)
  * firstName `string`: User first name
  * gender `string`: &#128679; Deprecated since v4.12.0
  * isLocked `boolean`: User is locked:
  * lastName `string`: User last name
  * lockStatus `integer`: &#128679; Deprecated since v4.7.0
  * phone `string`: Phone number
  * receiverLanguage `string`: IETF language tag
  * title `string`: &#128679; Deprecated since v4.18.0
  * userName `string`: &#128640; Since v4.13.0

### UpdateWebhookRequest
* UpdateWebhookRequest `object`: Request model for updating a webhook
  * eventTypeNames `array`: List of names of event types
    * items `string`: List of names of event types
  * isEnabled `boolean`: Is enabled
  * name `string`: Name
  * secret `string`: Secret; used for event message signatures
  * triggerExampleEvent `boolean`: If set to true, an example event is being created
  * url `string`: URL (must begin with the `HTTPS` scheme)

### UploadShare
* UploadShare `object`: Upload Share information
  * accessKey **required** `string`: Share access key to generate secure link
  * cntFiles `integer`: Total amount of existing files uploaded with this share.
  * cntUploads `integer`: Total amount of uploads conducted with this share.
  * createdAt **required** `string`: Creation date
  * createdBy **required** [UserInfo](#userinfo)
  * dataUrl `string`: Upload Share URL
  * expireAt `string`: Expiration date
  * filesExpiryPeriod `integer`: Number of days after which uploaded files expire
  * id **required** `integer`: Share ID
  * internalNotes `string`: &#128640; Since v4.11.0
  * isEncrypted `boolean`: Encryption state
  * isProtected **required** `boolean`: Is share protected by password
  * maxSize `integer`: Maximal total size of uploaded files (in bytes)
  * maxSlots `integer`: Maximal amount of files to upload
  * name **required** `string`: Alias name
  * notes `string`: User notes
  * notifyCreator **required** `boolean`: &#128679; Deprecated since v4.20.0
  * recipients `string`: &#128679; Deprecated since v4.11.0
  * showCreatorName `boolean`: &#128640; Since v4.11.0
  * showCreatorUsername `boolean`: &#128640; Since v4.11.0
  * showUploadedFiles `boolean`: Allow display of already uploaded files
  * smsRecipients `string`: &#128679; Deprecated since v4.11.0
  * targetId **required** `integer`: Target room or folder ID
  * targetPath `string`: Path to shared upload node
  * targetType `string`: Node type
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### UploadShareLinkEmail
* UploadShareLinkEmail `object`: Request model for sending an email of an Upload Share link
  * body **required** `string`: Notification email content
  * receiverLanguage `string`: Language tag for messages to receiver
  * recipients **required** `array`: List of recipient email addresses
    * items `string`: List of recipient email addresses

### UploadShareList
* UploadShareList `object`: List of Upload Shares
  * items **required** `array`: List of Upload Shares
    * items [UploadShare](#uploadshare)
  * range **required** [Range](#range)

### UserAccount
* UserAccount `object`: User information
  * authData **required** [UserAuthData](#userauthdata)
  * authMethods `array`: &#128679; Deprecated since v4.13.0
    * items [UserAuthMethod](#userauthmethod)
  * customer **required** [CustomerData](#customerdata)
  * email `string`: Email 
  * expireAt `string`: Expiration date
  * firstName **required** `string`: User first name
  * gender `string`: &#128679; Deprecated since v4.12.0
  * hasManageableRooms **required** `boolean`: User has manageable rooms
  * homeRoomId `integer`: Homeroom ID
  * id **required** `integer`: Unique identifier for the user
  * isEncryptionEnabled `boolean`: User has generated private key.
  * isLocked **required** `boolean`: User is locked:
  * language **required** `string`: &#128640; Since v4.20.0
  * lastLoginFailAt `string`: Last failed logon date
  * lastLoginFailIp `string`: &#128679; Deprecated since v4.6.0
  * lastLoginSuccessAt `string`: Last successful logon date
  * lastLoginSuccessIp `string`: &#128679; Deprecated since v4.6.0
  * lastName **required** `string`: User last name
  * lockStatus **required** `integer`: &#128679; Deprecated since v4.7.0
  * login `string`: &#128679; Deprecated since v4.13.0
  * mustSetEmail `boolean`: &#128640; Since v4.13.0
  * needsToAcceptEULA `boolean`: User has accepted EULA.
  * needsToChangePassword **required** `boolean`: &#128679; Deprecated since v4.13.0
  * needsToChangeUserName `boolean`: &#128679; Deprecated since v4.13.0
  * phone `string`: Phone number
  * title `string`: &#128679; Deprecated since v4.18.0
  * userAttributes [UserAttributes](#userattributes)
  * userGroups `array`: All groups the user is member of
    * items [UserGroup](#usergroup)
  * userName **required** `string`: &#128640; Since v4.13.0
  * userRoles **required** [RoleList](#rolelist)

### UserAttributes
* UserAttributes `object`: User custom attributes (list of key-value pairs)
  * items **required** `array`: List of key-value pairs
    * items [KeyValueEntry](#keyvalueentry)

### UserAuthData
* UserAuthData `object`: User Authentication Data
  * adConfigId `integer`: ID of the user's Active Directory.
  * login `string`: User login name
  * method **required** `string`: Authentication method
  * mustChangePassword `boolean`: Determines whether user has to change his / her password
  * oidConfigId `integer`: ID of the user's OIDC provider.
  * password `string`: Password (only relevant for `basic` authentication type)

### UserAuthDataUpdateRequest
* UserAuthDataUpdateRequest `object`: User Authentication Data Update Request
  * adConfigId `integer`: ID of the user's Active Directory.
  * login `string`: User login name
  * method `string`: Authentication method
  * oidConfigId `integer`: ID of the user's OIDC provider.

### UserAuthMethod
* UserAuthMethod `object`: Authentication method
  * authId **required** `string`: Authentication method
  * isEnabled **required** `boolean`: Is enabled
  * options `array`: Authentication method options
    * items [KeyValueEntry](#keyvalueentry)

### UserData
* UserData `object`: User information
  * authData **required** [UserAuthData](#userauthdata)
  * authMethods `array`: &#128679; Deprecated since v4.13.0
    * items [UserAuthMethod](#userauthmethod)
  * avatarUuid **required** `string`: &#128640; Since v4.11.0
  * email `string`: Email 
  * expireAt `string`: Expiration date
  * firstName **required** `string`: User first name
  * gender `string`: &#128679; Deprecated since v4.12.0
  * hasManageableRooms `boolean`: User has manageable rooms
  * homeRoomId `integer`: Homeroom ID
  * id **required** `integer`: Unique identifier for the user
  * isEncryptionEnabled `boolean`: User has generated private key.
  * isLocked **required** `boolean`: User is locked:
  * lastLoginSuccessAt `string`: Last successful logon date
  * lastName **required** `string`: User last name
  * lockStatus **required** `integer`: &#128679; Deprecated since v4.7.0
  * login `string`: &#128679; Deprecated since v4.13.0
  * phone `string`: Phone number
  * publicKeyContainer [PublicKeyContainer](#publickeycontainer)
  * title `string`: &#128679; Deprecated since v4.18.0
  * userAttributes [UserAttributes](#userattributes)
  * userName **required** `string`: &#128640; Since v4.13.0
  * userRoles [RoleList](#rolelist)

### UserFileKey
* UserFileKey `object`: User file key
  * fileKey **required** [FileKey](#filekey)
  * userId **required** `integer`: Unique identifier for the user

### UserFileKeyList
* UserFileKeyList `object`: List of user file keys
  * items `array`: List of user file keys
    * items [UserFileKey](#userfilekey)

### UserFileKeySetBatchRequest
* UserFileKeySetBatchRequest `object`: List of request models for setting a user file key(s)
  * items **required** `array`: List of user file keys
    * items [UserFileKeySetRequest](#userfilekeysetrequest)

### UserFileKeySetRequest
* UserFileKeySetRequest `object`: Request model for setting a user file key
  * fileId **required** `integer`: File ID
  * fileKey **required** [FileKey](#filekey)
  * userId **required** `integer`: Unique identifier for the user

### UserGroup
* UserGroup `object`: Group information
  * id **required** `integer`: Unique identifier for the group
  * isMember **required** `boolean`: Determines whether user is a member of the group or not
  * name **required** `string`: Group name

### UserGroupList
* UserGroupList `object`: List of groups
  * items **required** `array`: List of user-group mappings
    * items [UserGroup](#usergroup)
  * range **required** [Range](#range)

### UserIdFileIdItem
* UserIdFileIdItem `object`: User ID and file ID mapping
  * fileId `integer`: File ID
  * userId `integer`: Unique identifier for the user

### UserIds
* UserIds `object`: List of user IDs
  * ids **required** `array`: List of user IDs
    * items `integer`: List of user IDs

### UserInfo
* UserInfo `object`: User information
  * avatarUuid **required** `string`: &#128640; Since v4.11.0
  * displayName `string`: &#128679; Deprecated since v4.11.0
  * email `string`: &#128640; Since v4.11.0
  * firstName **required** `string`: &#128640; Since v4.11.0
  * id **required** `integer`: Unique identifier for the user
  * lastName **required** `string`: &#128640; Since v4.11.0
  * title `string`: &#128679; Deprecated since v4.18.0
  * userName **required** `string`: &#128640; Since v4.13.0
  * userType **required** `string` (values: system, internal, external, deleted): &#128640; Since v4.11.0

### UserItem
* UserItem `object`: User information
  * avatarUuid **required** `string`: &#128640; Since v4.11.0
  * createdAt `string`: Creation date
  * email `string`: Email 
  * expireAt `string`: Expiration date
  * firstName **required** `string`: User first name
  * gender `string`: &#128679; Deprecated since v4.12.0
  * hasManageableRooms **required** `boolean`: User has manageable rooms
  * homeRoomId `integer`: Homeroom ID
  * id **required** `integer`: Unique identifier for the user
  * isEncryptionEnabled `boolean`: User has generated private key.
  * isLocked **required** `boolean`: User is locked:
  * lastLoginSuccessAt `string`: Last successful logon date
  * lastName **required** `string`: User last name
  * lockStatus **required** `integer`: &#128679; Deprecated since v4.7.0
  * login **required** `string`: &#128679; Deprecated since v4.13.0
  * phone `string`: Phone number
  * title `string`: &#128679; Deprecated since v4.18.0
  * userAttributes [UserAttributes](#userattributes)
  * userName **required** `string`: &#128640; Since v4.13.0
  * userRoles **required** [RoleList](#rolelist)

### UserKeyPairContainer
* UserKeyPairContainer `object`: Key pair container
  * privateKeyContainer **required** [PrivateKeyContainer](#privatekeycontainer)
  * publicKeyContainer **required** [PublicKeyContainer](#publickeycontainer)

### UserList
* UserList `object`: List of users
  * items **required** `array`: List of users
    * items [UserItem](#useritem)
  * range **required** [Range](#range)

### UserLockout
* UserLockout `object`: User lockout information
  * enabled **required** `boolean`: Determines whether user lockout is enabled
  * lockoutPeriod `integer`: Amount of minutes a user has to wait to make another login attempt after `maxNumberOfLoginFailures` has been exceeded
  * maxNumberOfLoginFailures `integer`: Maximum allowed number of failed login attempts

### UserUserPublicKey
* UserUserPublicKey `object`: Public key information
  * id `integer`: Unique identifier for the user
  * publicKeyContainer [PublicKeyContainer](#publickeycontainer)

### UserUserPublicKeyList
* UserUserPublicKeyList `object`: List of user public keys
  * items **required** `array`: List of user public keys
    * items [UserUserPublicKey](#useruserpublickey)

### Webhook
* Webhook `object`: Webhook information
  * createdAt **required** `string`: Creation date
  * createdBy [UserInfo](#userinfo)
  * eventTypeNames **required** `array`: List of names of event types
    * items `string`: List of names of event types
  * expireAt **required** `string`: Expiration date / time
  * failStatus `integer`: Last HTTP status code when a webhook is disabled due to delivery failures
  * id **required** `integer`: ID
  * isEnabled **required** `boolean`: Is enabled
  * name **required** `string`: Name
  * secret `string`: Secret; used for event message signatures
  * updatedAt **required** `string`: Modification date
  * updatedBy [UserInfo](#userinfo)
  * url **required** `string`: URL

### WebhookList
* WebhookList `object`: List of webhooks
  * items **required** `array`: List of webhooks
    * items [Webhook](#webhook)
  * range **required** [Range](#range)

### ZipDownloadRequest
* ZipDownloadRequest `object`: Request model for ZIP download
  * nodeIds **required** `array`: List of node IDs
    * items `integer`: List of node IDs


