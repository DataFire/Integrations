# @datafire/dracoon_team

Client library for DRACOON

## Installation and Usage
```bash
npm install --save @datafire/dracoon_team
```
```js
let dracoon_team = require('@datafire/dracoon_team').create();

dracoon_team.getSdsServerTime({}).then(data => {
  console.log(data);
});
```

## Description

REST Web Services for DRACOON.<br> Version. 4.5.0  - built at: 1517571015562

## Actions

### login
### Functional Description:
Authenticates user and provides an authentication token that is required for most operations.

### Precondition:
Existing user that is not locked.

### Effects:
User is logged in.

### Further Information:
The provided token is valid for **2 hours**, every usage resets this period to 2 full hours again.  
Logging off invalidates the token.  

### Important:  
* If auth type `radius` is used, a token (request parameter) may be set, otherwise this parameter is ignored.  
* If the token is set, `password` is optional for this auth type.

### Currently supported languages (with ISO 639-1 code):
* German (de)
* English (en)
* Spanish (es)
* French (fr)


```js
dracoon_team.login({
  "body": {
    "login": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [LoginRequest](#loginrequest)

#### Output
* output [LoginResponse](#loginresponse)

### completeOpenIdLogin
### Functional Description:  
This is the second step of the OpenID Connect authentication.  
The user hands over the authorization code and is logged in.

### Precondition:
Existing user with activated OpenID Connect authentication that is not locked.

### Effects:
User is logged in.

### Further Information:
See [http://openid.net/developers/specs](http://openid.net/developers/specs) for further information.


```js
dracoon_team.completeOpenIdLogin({
  "code": "",
  "state": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: Authorization code
  * state **required** `string`: Authentication state

#### Output
* output [LoginResponse](#loginresponse)

### getOpenIdAuthResources
### Functional Description:  
Provides information about OpenID Connect authentication options.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getOpenIdAuthResources(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OpenIdAuthResources](#openidauthresources)

### ping
### Functional Description:
Test connection to DRACOON Server.

### Precondition:
None.

### Effects:
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

### requestPasswordReset
### Functional Description:  
Request an email with a request token for a certain user to reset his / her password.

### Precondition:
Registered user account.

### Effects:
Provided user receives email with reset token.

### Further Information:
None.

### Currently supported languages (with ISO 639-1 code):
* German (de)
* English (en)
* Spanish (es)
* French (fr)


```js
dracoon_team.requestPasswordReset({
  "body": {
    "login": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ResetPasswordRequest](#resetpasswordrequest)

#### Output
*Output schema unknown*

### validateResetPasswordToken
### Functional Description:  
Request all information for a password change dialogue e.g. real name of user.

### Precondition:
User received a password reset token.

### Effects:
None.

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
### Functional Description:  
Resets a user's password to a new value.

### Precondition:
User received a password reset token.

### Effects:
Newly transmitted password is set.

### Further Information:
None.


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

### getAuthInitResources
### Functional Description:  
Provides information about authentication options.

### Precondition: 
None.

### Effects: 
None.

### Further Information:
The server identifies the relevant customer by the passed HTTP header `Origin`.  
Use this call to customize the log-on form.  

### Important: 
The default language and authentication method are always provided as topmost entry.

### Currently supported languages (with ISO 639-1 code):
* German (de)
* English (en)
* Spanish (es)
* French (fr)


```js
dracoon_team.getAuthInitResources(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AuthInitResources](#authinitresources)

### getAuthSettings
### Functional Description:  
Retrieve the settings of authentication configuration.

### Precondition:
Right _"read global config"_ required.

### Effects:
None.

### Further Information:
None.

### Configuration settings for various authentication methods

### Authentication Methods

* **sql**  
    **Basic Authentication globally allowed**  
    This option must be activated to allow users to log in with their credentials stored in the database.  
    VALUE: `[true|false]`

* **active_directory**  
    **Active Directory Authentication globally allowed**  
    This option must be activated to allow users to log in with their Active Directory credentials.  
    VALUE: `[true|false]`

* **radius**  
    **RADIUS Authentication globally allowed**  
    This option must be activated to allow users to log in with their RADIUS username, their PIN and a token password.  
    VALUE: `[true|false]`

* **openid**  
    **OpenID Connect Authentication globally allowed**  
    This option must be activated to allow users to log in with their OpenID Connect identity.  
    VALUE: `[true|false]`

* **default_auth_method**  
    **Default authentication method without user context**  
    If this option is set, the chosen method will be provided as default authentication method if no user context is available.  
    Only one authentication method can be set and it must be allowed (see above).  
    If no value is set, there is no guarantee about the order of the returned methods.  
    Only activated authentication methods may be set as default authentication method.  
    VALUE: `[sql|active_directory|radius|openid]`

### Configurable settings for RADIUS authentication

### `DEPRECATED`

These settings will be ignored.  
Please use `/system/config/auth/radius` API.

* **radius-ip**  
    IP address of the RADIUS server  
    VALUE: `IPv4 address`

* **radius-port**  
    Port of the RADIUS server (usually 1812)  
    VALUE: `Port`

* **radius-sharedsec**  
    Shared Secret to access the RADIUS server  
    VALUE: `Shared Secret`

* **radius-otpPinFirst**  
    Sequence order of concatenated PIN and One-Time token  
    VALUE: `[true|false]`


```js
dracoon_team.getAuthSettings({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [ConfigOptionList](#configoptionlist)

### setAuthSettings
### Functional Description:
Change one or more settings of authentication configuration.

### Precondition:
Right _"change global config"_ required.

### Effects:
One or more global authentication setting gets changed.

### Further Information:
None.

### Configuration settings for various authentication methods

### Authentication Methods

* **sql**  
    **Basic Authentication globally allowed**  
    This option must be activated to allow users to log in with their credentials stored in the database.  
    VALUE: `[true|false]`

* **active_directory**  
    **Active Directory Authentication globally allowed**  
    This option must be activated to allow users to log in with their Active Directory credentials.  
    VALUE: `[true|false]`

* **radius**  
    **RADIUS Authentication globally allowed**  
    This option must be activated to allow users to log in with their RADIUS username, their PIN and a token password.  
    VALUE: `[true|false]`

* **openid**  
    **OpenID Connect Authentication globally allowed**  
    This option must be activated to allow users to log in with their OpenID Connect identity.  
    VALUE: `[true|false]`

* **default_auth_method**  
    **Default authentication method without user context**  
    If this option is set, the chosen method will be provided as default authentication method if no user context is available.  
    Only one authentication method can be set and it must be allowed (see above).  
    If no value is set, there is no guarantee about the order of the returned methods.  
    Only activated authentication methods may be set as default authentication method.  
    VALUE: `[sql|active_directory|radius|openid]`

### Configurable settings for RADIUS authentication

### `DEPRECATED`

These settings will be ignored.  
Please use `PUT /system/config/auth/radius` API.

* **radius-ip**  
    IP address of the RADIUS server  
    VALUE: `IPv4 address`

* **radius-port**  
    Port of the RADIUS server (usually 1812)  
    VALUE: `Port`

* **radius-sharedsec**  
    Shared Secret to access the RADIUS server  
    VALUE: `Shared Secret`

* **radius-otpPinFirst**  
    Sequence order of concatenated PIN and One-Time token  
    VALUE: `[true|false]`


```js
dracoon_team.setAuthSettings({
  "body": {
    "items": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ConfigOptionList](#configoptionlist)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getSystemSettings
### Functional Description:  
DRACOON configuration entry point.  
Returns a list of configurable system settings.

### Precondition:
Right _"read global config"_ required.

### Effects:
None.

### Further Information:

### Attention
If `eula_active` is true, but not accepted yet, or password must be changed, only the following two values are returned:
* **allow_system_global_weak_password**
* **eula_active**

### Configurable settings

* **allow_system_global_weak_password**  
    Allow weak password
    * A weak password has to fulfill the following criteria:  
        * is at least 8 characters long  
        * contains letters and numbers
    * A strong password has to fulfill the following criteria in addition:  
        * contains at least one special character  
        * contains upper and lower case characters

    VALUE: `[true|false]`

* **branding_server_branding_id** **`NEW`**  
    The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.  
    VALUE: `String`

* **branding_portal_url** **`NEW`**  
    Access URL to to the Branding Portal.  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `String`

* **branding_server_customer**  
    The UUID of the branding server customer, which corresponds to customer key in the branding server.  
    VALUE: `String`

* **branding_server_url**  
    Access URL to to the Branding Server.  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `String`

* **connect_as_drive**  
    Rooms can be mounted by WebDAV.  
    VALUE: `[true|false]`

* **dblog**  
    Write logs to local database  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[true|false]`

* **default_downloadshare_expiration_period**  
    Default expiration period for Download Shares in days.  
    VALUE: `Integer between 0 and 9999`

* **default_file_upload_expiration_date**  
    Default expiration period for all uploaded files in days.  
    VALUE: `Integer between 0 and 9999` (set 0 to disable)

* **default_language**  
    Define which language should be default.  
    VALUE: `cf. GET /auth/resources Model "Language"`

* **default_uploadshare_expiration_period**  
    Default expiration period for Upload Shares in days.  
    VALUE: `Integer between 0 and 9999`

* **email_from**  
    Sender of system-generated emails  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `Valid email address`

* **email_to_sales**  
    Contact email address for customers to request more user licenses or data volume.  
    VALUE: `Valid email address`

* **email_to_support**  
    Support email address for users.  
    VALUE: `Valid email address`

* **enable_client_side_crypto**  
    Activation status of **TripleCrypt™ Technology**.  
    Can only be enabled once; disabling is not possible.  
    VALUE: `[true|false]` (default: `false`)

* **eula_active**  
    Each user has to confirm the EULA at first login.  
    VALUE: `[true|false]`

* **eventlog_retention_period**  
    Retention period (in days) of event log entries.  
    After that period, all entries are deleted.  
    Recommended value: 7  
    VALUE: `Integer between 0 and 9999` (if set to 0: no logs are deleted)

* **file_size_js**  
    Maximum file size (in bytes) for downloads of encrypted files with JavaScript.  
    Bigger files will require a JavaApplet.  
    Recommended value: 10485760 (= 10MB)  
    VALUE: `Integer`

* **ip_address_logging**  
    Determines whether a user's IP address is logged on login.  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[true|false]`

* **mailserver**  
    Email server to send emails  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `DNS name or IPv4 of an email server`

* **mailserver_authentication_necessary**  
    Set to true if the email server requires authentication.  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[true|false]`

* **mailserver_password**  
**Password is no longer returned.**

* **mailserver_password_set**  
    Indicates if a password is set for the mailserver (because `mailserver_password` is always returned empty)  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[true|false]`

* **mailserver_port**  
    Email server port  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `Positive number`

* **mailserver_username**  
    User name for email server  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `User name for authentication`

* **mailserver_use_ssl**  
    Email server requires SSL connection?  
    Only visible for _Config Manager_ of Provider Customer  
    Requires mailserver_use_starttls to be false  
    VALUE: `[true|false]`

* **mailserver_use_starttls**  
    Email server requires StartTLS connection?  
    Only visible for _Config Manager_ of Provider Customer  
    Requires mailserver_use_ssl to be false  
    VALUE: `[true|false]`

* **syslog**  
    Write logs to a syslog interface  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[true|false]`

* **syslog_host**  
    Syslog Server (IP or FQDN)  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `DNS name or IPv4 of a syslog server`

* **syslog_port**  
    Syslog server port  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `Positive Number`

* **syslog_protocol**  
    Protocol to connect to syslog server  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[TCP|UDP]`

* **system_name**  
    System name  
    VALUE: `Display name of the DRACOON`

* **enable_email_notification_button**  
    Enable mail notification button  
    VALUE: `[true|false]`

* **allow_share_password_sms**  
    Allow sending of share passwords via SMS  
    VALUE: `[true|false]`

* **globally_allow_share_password_sms**  
    Allow sending of share passwords via SMS  
    Read only  
    VALUE: `[true|false]`

* **use_s3_storage**  
    Defines if S3 is used as storage backend  
    Read only  
    VALUE: `[true|false]`

* **s3_default_region**  
    Suggested S3 region  
    Read only  
    VALUE: `Region name`


```js
dracoon_team.getSystemSettings({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [ConfigOptionList](#configoptionlist)

### setSystemSetting
### Functional Description:
DRACOON configuration entry point.  
Returns a list of configurable settings.

### Precondition:
Right _"change global config"_ required.

### Effects:
One or more global authentication setting gets changed.

### Further Information:

### Attention
Only visible for _Config Manager_ of Provider Customer.

### Settings

### Configurable settings

* **allow_system_global_weak_password**  
    Allow weak password
    * A weak password has to fulfill the following criteria:  
        * is at least 8 characters long  
        * contains letters and numbers
    * A strong password has to fulfill the following criteria in addition:  
        * contains at least one special character  
        * contains upper and lower case characters

    VALUE: `[true|false]`

* **branding_server_branding_id** **`NEW`**  
    The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.  
    VALUE: `String`

* **branding_portal_url** **`NEW`**  
    Access URL to to the Branding Portal.  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `String`

* **branding_server_customer**  
    The UUID of the branding server customer, which corresponds to customer key in the branding server.  
    VALUE: `String`

* **branding_server_url**  
    Access URL to to the Branding Server.  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `String`

* **connect_as_drive**  
    Rooms can be mounted by WebDAV.  
    VALUE: `[true|false]`

* **dblog**  
    Write logs to local database  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[true|false]`

* **default_downloadshare_expiration_period**  
    Default expiration period for Download Shares in days.  
    VALUE: `Integer between 0 and 9999`

* **default_file_upload_expiration_date**  
    Default expiration period for all uploaded files in days.  
    VALUE: `Integer between 0 and 9999` (set 0 to disable)

* **default_language**  
    Define which language should be default.  
    VALUE: `cf. GET /auth/resources Model "Language"`

* **default_uploadshare_expiration_period**  
    Default expiration period for Upload Shares in days.  
    VALUE: `Integer between 0 and 9999`

* **email_from**  
    Sender of system-generated emails  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `Valid email address`

* **email_to_sales**  
    Contact email address for customers to request more user licenses or data volume.  
    VALUE: `Valid email address`

* **email_to_support**  
    Support email address for users.  
    VALUE: `Valid email address`

* **enable_client_side_crypto**  
    Activation status of **TripleCrypt™ technology**.  
    Can only be enabled once; disabling is not possible.  
    VALUE: `[true|false]` (default: `false`)

* **eula_active**  
    Each user has to confirm the EULA at first login.  
    VALUE: `[true|false]`

* **eventlog_retention_period**  
    Retention period (in days) of event log entries.  
    After that period, all entries are deleted.  
    Recommended value: 7  
    VALUE: `Integer between 0 and 9999` (if set to 0: no logs are deleted)

* **file_size_js**  
    Maximum file size (in bytes) for downloads of encrypted files with JavaScript.  
    Bigger files will require a JavaApplet.  
    Recommended value: 10485760 (= 10MB)  
    VALUE: `Integer`

* **ip_address_logging**  
    Determines whether a user's IP address is logged on login.  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[true|false]`

* **mailserver**  
    Email server to send emails  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `DNS name or IPv4 of an email server`

* **mailserver_authentication_necessary**  
    Set to true if the email server requires authentication.  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[true|false]`

* **mailserver_password**  
    Password for email server  
    VALUE: `Password for authentication`

* **mailserver_port**  
    Email server port  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `Positive number`

* **mailserver_username**  
    User name for email server  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `User name for authentication`

* **mailserver_use_ssl**  
    Email server requires SSL connection?  
    Only visible for _Config Manager_ of Provider Customer  
    Requires mailserver_use_starttls to be false  
    VALUE: `[true|false]`

* **mailserver_use_starttls**  
    Email server requires StartTLS connection?  
    Only visible for _Config Manager_ of Provider Customer  
    Requires mailserver_use_ssl to be false  
    VALUE: `[true|false]`

* **syslog**  
    Write logs to a syslog interface  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[true|false]`

* **syslog_host**  
    Syslog Server (IP or FQDN)  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `DNS name or IPv4 of a syslog server`

* **syslog_port**  
    Syslog server port  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `Positive Number`

* **syslog_protocol**  
    Protocol to connect to syslog server  
    Only visible for _Config Manager_ of Provider Customer  
    VALUE: `[TCP|UDP]`

* **system_name**  
    System name  
    VALUE: `Display name of the DRACOON`

* **enable_email_notification_button**  
    Enable mail notification button  
    VALUE: `[true|false]`

* **allow_share_password_sms**  
    Allow sending of share passwords via SMS  
    VALUE: `[true|false]`


```js
dracoon_team.setSystemSetting({
  "body": {
    "items": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ConfigOptionList](#configoptionlist)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getZipFileByToken
### Functional Description:  
Download multiple files in a ZIP archive.

### Precondition:
Valid download token.

### Effects:
None.

### Further Information:
Create a download token with `POST /nodes/zip`.


```js
dracoon_team.getZipFileByToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Download token

#### Output
* output `string`

### getFileDataByToken
### Functional Description:  
Download a file.

### Precondition:
Valid download token.

### Effects:
None.

### Further Information:
Range requests are supported (please cf. [RCF 7233](https://tools.ietf.org/html/rfc7233) for details).


```js
dracoon_team.getFileDataByToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Download token
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return 'application/octet-stream' instead of specific mimetype

#### Output
* output `string`

### getFileDataByToken_1
### Functional Description:  
Download a file.

### Precondition:
Valid download token.

### Effects:
None.

### Further Information:
Range requests are supported (please cf. [RCF 7233](https://tools.ietf.org/html/rfc7233) for details).


```js
dracoon_team.getFileDataByToken_1({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Download token
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return 'application/octet-stream' instead of specific mimetype

#### Output
* output `string`

### getAuditNodeUserData
### Functional Description:  
Retrieve a list of all nodes of type `room` and the room assignment users with permissions.

### Precondition:
Right _"read audit log"_ required.

### Effects:
None.

### Further Information:
None.

### Filter

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
Multiple fields are supported.

### Filter fields:

* **nodeId**  
    Node ID  
    OPERATOR: `eq` (Node ID equal value)  
    VALUE: `Search string`

* **nodeName**  
    Node name (Login)  
    OPERATOR: `cn|eq` (Node name contains value | equal value)  
    VALUE: `Search string`

* **nodeParentId**  
    Node parent ID  
    OPERATOR: `eq` (Parent ID equal value; parent ID 0 is the root node.)  
    VALUE: `Search string`

* **userId**  
    User ID  
    OPERATOR: `eq` (User ID equal value)  
    VALUE: `Search string`

* **userName**  
    User name (Login)  
    OPERATOR: `cn|eq` (User name contains value | equal value)  
    VALUE: `Search string`

* **userFirstName**  
    User first name  
    OPERATOR: `cn|eq` (User first name contains value | equal value)  
    VALUE: `Search string`

* **userLastName**  
    User last name  
    OPERATOR: `cn|eq` (User last name contains value | equal value)  
    VALUE: `Search string`

* **permissionsManage**  
    Filter the users that (don't) have manage right in this room  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`

* **nodeIsEncrypted**  
    Encrypted node filter  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`

* **nodeHasRecycleBin**  
    Recycle bin filter  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`
    
* **nodeHasActivitiesLog**  
    Activities log filter  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`

### Logical grouping:
Filtering according first three fields (`login`, `lastName`, `firstName`) is intrinsically processed by the API as logical _OR_.  
In opposite, filtering according to is processed intrinsically as logical _AND_.

### Example:
* `userName:cn:searchString_1|userFirstName:cn:searchString_2|nodeId:eq:2`  
Filter by user login containing `searchString_1` OR first name containing `searchString_2` and node ID equal 2.

### Sort

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields are supported.

### Sort fields:

* **nodeId**: Node ID
* **nodeName**: Node name
* **nodeParentId**: Node parent ID
* **nodeSize**: Node size
* **nodeQuota**: Node quota

### Example:
* `nodeName:asc`  
Sort by `nodeName` ascending.


```js
dracoon_team.getAuditNodeUserData({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output `array`
  * items [AuditNodeResponse](#auditnoderesponse)

### getLogEvents
### Functional Description:  
Retrieve eventlog (= audit log) events.

### Precondition:
Role _"Log Auditor"_ required.

### Effects:
None.

### Further Information:
Output may be limited to a certain number of entries.  
Please use filter criteria and paging.


```js
dracoon_team.getLogEvents({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * date_start `string`: Start date
  * date_end `string`: End date
  * type `integer`: Operation ID
  * user_id `integer`: User ID
  * status `integer`: Operation status:
  * user_client `string`: User client
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [LogEventList](#logeventlist)

### getLogOperations
### Functional Description:  
Retrieve eventlog (= audit log) operation IDs and the associated log operation description.

### Precondition:
Role _"Log Auditor"_ required.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getLogOperations({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [LogOperationList](#logoperationlist)

### getGroups
### Functional Description:  
Returns a list of user groups.

### Precondition:
Right _"read groups"_ required.

### Effects:
None.

### Further Information:
None.

### Filters

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`

### Filter fields:

* **name**  
    Group name  
    OPERATOR: `cn` (Group name contains value; multiple values not allowed)  
    VALUE: `Search string`

### Example: 
* `name:cn:searchString`  
Filter by group `name` containing `searchString`.

### Sorting

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields are supported.

### Sort fields:

* **name**: Group name
* **createdAt**: Creation date
* **expireAt**: Expiration date
* **cntUsers**: Amount of users

### Example:
* `name:asc|expireAt:desc`  
Sort by `name` ascending and by `expireAt` descending.


```js
dracoon_team.getGroups({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [GroupList](#grouplist)

### createGroup
### Functional Description:
Create a new user group.

### Precondition:
Right _"change groups"_ required.

### Effects:
A new group is created.

### Further Information:
* If a group should not expire, leave `expireAt` empty.
* Group names are limited to **150** characters
* Allowed characters: **All**


```js
dracoon_team.createGroup({
  "body": {
    "name": ""
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateGroupRequest](#creategrouprequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Group](#group)

### deleteGroup
### Functional Description:
Delete a user group.

### Precondition:
Right _"delete groups"_ required.

### Effects:
User group is deleted.

### Further Information:
None.


```js
dracoon_team.deleteGroup({
  "group_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getGroup
### Functional Description:  
Retrieve detailed information about one user group.

### Precondition:
Right _"read groups"_ required.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getGroup({
  "group_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Group](#group)

### updateGroup
### Functional Description:  
Update the meta data of a user group.

### Precondition:
Right _"change groups"_ required.

### Effects:
Meta data of a user group is updated.

### Further Information:
* If a group should not expire, leave `expireAt` empty.
* Group names are limited to **150** characters
* Allowed characters: **All**


```js
dracoon_team.updateGroup({
  "group_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * body **required** [UpdateGroupRequest](#updategrouprequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Group](#group)

### getGroupRoles
### Functional Description:  
Retrieve a list of all roles and the role assignment rights of a group.

### Precondition:
Right _"read groups"_ required.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getGroupRoles({
  "group_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoleList](#rolelist)

### getGroupRooms
### Functional Description:  
Retrieve a list of rooms, that are granted or may be granted to the group.

### Precondition:
Right _"read groups"_ required.

### Effects:
None.

### Further Information:
None.

### Filter

### Filter fields:

* **name**  
    Room name  
    OPERATOR: `cn` (multiple values not allowed)  
    VALUE: `search string`

* **isGranted**  
    Filter rooms which the group is or is not granted  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `true`)

* **effectivePerm**  
    Filter rooms with _DIRECT_ or _DIRECT_ **AND** _EFFECTIVE_ permissions  
    * `false`: _DIRECT_ permissions  
    * `true`:  _DIRECT_ **AND** _EFFECTIVE_ permissions  
    
    > _DIRECT_ means: e.g. room administrator grants read permissions to group of users **directly** on desired room.  
    _EFFECTIVE_ means: e.g. group of users gets read permissions on desired room through **inheritance**.  

    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]` (default: `true`)

### Example:
* `isGranted:eq:false|name:cn:searchString`  
Get all rooms where the group is not granted AND whose `name` is like `searchString`.


```js
dracoon_team.getGroupRooms({
  "group_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [RoomTreeDataList](#roomtreedatalist)

### deleteGroupMembers
### Functional Description:  
Remove group members.

### Precondition:
Right _"change groups"_ required.

### Effects:
Provided users are removed from the user group.

### Further Information:
Batch function.  
The provided users are removed from the user group.


```js
dracoon_team.deleteGroupMembers({
  "group_id": 0,
  "body": {
    "ids": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * body **required** [ChangeGroupMembersRequest](#changegroupmembersrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Group](#group)

### getGroupUsers
### Functional Description:  
Retrieve a list of group members.

### Precondition:
Right _"read groups"_ required.

### Effects:
None.

### Further Information:
None.

### Filter

### Filter fields:

* **displayName**  
    User display name (`firstName`, `lastName`, `login`)  
    OPERATOR: `cn` (multiple values not allowed)  
    VALUE: `search string`

* **isMember**  
    Filter the group members AND / OR users  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `true`)

### Example:
* `is_member:eq:false|displayName:cn:searchString`  
Get all users that are not in this group AND whose display name is like `searchString`.


```js
dracoon_team.getGroupUsers({
  "group_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [GroupUserList](#groupuserlist)

### addGroupMembers
### Functional Description:
Add members to a group.

### Precondition:
Right _"change groups"_ required.

### Effects:
New members are added to the group.

### Further Information:
Batch function.  
The newly provided members will be added to the existing ones.


```js
dracoon_team.addGroupMembers({
  "group_id": 0,
  "body": {
    "ids": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * group_id **required** `integer`: Group ID
  * body **required** [ChangeGroupMembersRequest](#changegroupmembersrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Group](#group)

### deleteNodes
### Functional Description:
Delete nodes (room, folder, file).

### Precondition:
Authenticated user with _"delete"_ permissions on supplied nodes.

### Effects:
Nodes are deleted.

### Further Information:
Nodes must be in same parent.


```js
dracoon_team.deleteNodes({
  "body": {
    "nodeIds": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [DeleteNodesRequest](#deletenodesrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getFsNodes
### Functional Description:  
Provides a hierarchical list of file system nodes (rooms, folders, files) of a given parent that are accessible by the current user.

### Precondition:
Authenticated user.

### Effects:
None.

### Further Information:
`EncryptionInfo` is not provided.

### Filter

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`

### Fields:

* **type**  
    Node type filter  
    OPERATOR: `eq` (multiple values allowed)  
    VALUE: `[room|folder|file]`

* **perm**  
    Permissions filter  
    OPERATOR: `eq` (multiple values allowed)  
    VALUE: `[manage|read|change|create|delete|manageDownloadShare|manageUploadShare|canReadRecycleBin|canRestoreRecycleBin|canDeleteRecycleBin]`

* **childPerm**  
    The same as **perm**, but less restrictive (applied to child nodes only)  
    OPERATOR: `eq` (multiple values allowed)  
    VALUE: `[manage|read|change|create|delete|manageDownloadShare|manageUploadShare|canReadRecycleBin|canRestoreRecycleBin|canDeleteRecycleBin]`

* **name**  
    Node name filter  
    OPERATOR: `cn` (name contains value, multiple values not allowed)  
    VALUE: `Search string`

* **encrypted**  
    Node encryption status filter  
    OPERATOR: `eq` (Node is encrypted, multiple values not allowed)  
    VALUE: `[true|false]`

* **branchVersion**  
    Node branch version  
    OPERATOR: `ge|le`  
    VALUE: `version number`

### Example:
* `type:eq:room:folder|perm:eq:read`  
Get nodes where type equals `room` OR `folder` AND user has `read` permissions.

### Sort

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields not supported.

### Sort fields:

* **name**: Node name
* **createdBy**: Creator user name
* **createdAt**: Creation date
* **updatedBy**: Modifier user name
* **updatedAt**: Modification date
* **fileType**: File type (extension)
* **classification**: Classification ID (for files only):  
    * 1 - public
    * 2 - for internal use only
    * 3 - confidential
    * 4 - strictly confidential
* **size**: Node size
* **cntAdmins**: **DEPRECATED (No effect)** For rooms only: Number of admins
* **cntUsers**: **DEPRECATED (No effect)** For rooms only: Number of users
* **nodeCntChildren**: For rooms / folders only: Number of direct children (not recursive)
* **cntDeletedVersions**: For files / folders only: Number of deleted versions of this file / folder (not recursive)

### Example:
* `name:desc`  
Sort by `name` descending.


```js
dracoon_team.getFsNodes({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * depth_level `integer`: * 0 - top level nodes only
  * parent_id `integer`: Parent node ID.
  * room_manager `boolean`: Show all rooms for management perspective.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [NodeList](#nodelist)

### deleteDeletedNodes
### Functional Description:
Permanently remove a list of nodes from the Recycle Bin.

### Precondition:
User has _"delete recycle bin"_ permissions in parent room.

### Effects:
All provided nodes are removed.

### Further Information:
The removal of deleted nodes from the Recycle Bin is irreversible.


```js
dracoon_team.deleteDeletedNodes({
  "body": {
    "deletedNodeIds": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [DeleteDeletedNodesRequest](#deletedeletednodesrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### restoreNodes
### Functional Description:  
Restore a list of deleted nodes.

### Precondition:
User has _"create"_ permissions in parent room and _"restore recycle bin"_ permissions.

### Effects:
The selected files are moved from the Recycle Bin to the chosen productive container.

### Further Information:
If no parent ID is provided, the node is restored to its previous location.  
The default resolution strategy is `autorename` that adds numbers to the file name until the conflict is solved.  
If an existing file is overwritten, it is moved to the Recycle Bin instead of the restored one.


```js
dracoon_team.restoreNodes({
  "body": {
    "deletedNodeIds": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [RestoreDeletedNodesRequest](#restoredeletednodesrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [NotRestoredNodeList](#notrestorednodelist)

### getFsDeletedNode
### Functional Description:  
Get the meta data of one deleted node.

### Precondition:
User can access parent room and has _"read recycle bin"_ permissions.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getFsDeletedNode({
  "deleted_node_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * deleted_node_id **required** `integer`: Deleted node ID
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [DeletedNode](#deletednode)

### setUserFileKeys
### Functional Description:  
Sets symmetric file keys for several users and files.

### Precondition:
User has file keys for the files.

### Effects:
Stores new file keys for other users.

### Further Information:
Only users with copies of the file key (encrypted with their public keys) can access a certain file.  
This endpoint is used for the distribution of file keys amongst an authorized user base.


```js
dracoon_team.setUserFileKeys({
  "body": {
    "items": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [UserFileKeySetBatchRequest](#userfilekeysetbatchrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### createFileUpload
### Functional Description:
This endpoint creates a new upload channel which is the first step in any file upload workflow.

### Precondition:
User has _"create"_ permissions in the parent container (room or folder).

### Effects:
A new upload channel for a file is created.  
Its ID and an upload token are returned.

### Further Information:
The upload ID is used for uploads with `X-Sds-Auth-Token` header, the upload token can be used for uploads without authentication header.

Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.

### Node naming convention

* Node (room, folder, file) names are limited to 150 characters.

* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9','.','/'`

* Not allowed characters in names:  
`'../', '\\', '<','>', ':', '\"', '|', '?', '*', '/'`



```js
dracoon_team.createFileUpload({
  "body": {
    "classification": 0,
    "name": "",
    "parentId": 0
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateFileUploadRequest](#createfileuploadrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [CreateFileUploadResponse](#createfileuploadresponse)

### cancelFileUpload
### Functional Description:
Cancel an upload and destroy the Upload Channel.

### Precondition:
An Upload Channel has been created.

### Effects:
The Upload Channel is removed and all temporary uploaded data is purged.

### Further Information:
It is recommended to notify the API about cancelled uploads if possible.


```js
dracoon_team.cancelFileUpload({
  "upload_id": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: Upload channel ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### uploadFile
### Functional Description:  
Uploads a file or parts of it in an active Upload Channel.

### Precondition:
An Upload Channel has been created.

### Effects:
A file or parts of it are uploaded to a temporary location.

### Further Information:
This endpoints supports chunked upload.  
Please cf. [RFC 7233](https://tools.ietf.org/html/rfc7233) for further information.


```js
dracoon_team.uploadFile({
  "upload_id": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: Upload channel ID
  * file `string`, `object`: File
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * Content-Range `string`: Content-Range
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [ChunkUploadResponse](#chunkuploadresponse)

### completeFileUpload
### Functional Description:
Finishes an upload and closes the corresponding Upload Channel.

### Precondition:
An Upload Channel has been created and data has been transmitted.

### Effects:
The upload is finished and the temporary file is moved to the productive environment.

### Further Information:
The provided file name might be changed in accordance with the resolution strategy:  
* **autorename**: changes the file name and adds a number to avoid conflicts.
* **overwrite**: deletes any old file with the same file name.
* **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.

Please ensure that all chunks have been transferred correctly before finishing the upload.

### 200 OK is not used by this API


```js
dracoon_team.completeFileUpload({
  "upload_id": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * upload_id **required** `string`: Upload channel ID
  * body [CompleteUploadRequest](#completeuploadrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### updateFile
### Functional Description:  
Updates a file's meta data.

### Precondition:
User has _"change"_ permissions in parent room.

### Effects:
Meta data changed.

### Further Information:
None.

### Node naming convention

* Node (room, folder, file) names are limited to 150 characters.

* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9','.','/'`

* Not allowed characters in names:  
`'../', '\\', '<','>', ':', '\"', '|', '?', '*', '/'`



```js
dracoon_team.updateFile({
  "file_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * body **required** [UpdateFileRequest](#updatefilerequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### getDataRoomFileKey
### Functional Description:  
Returns the file key for the room emergency password of a certain file (if available).

### Precondition:
User with _"read"_ permissions in parent room.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getDataRoomFileKey({
  "file_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [FileKey](#filekey)

### getDataSpaceFileKey
### Functional Description:  
Returns the file key for the system emergency password of a certain file (if available).

### Precondition:
User with _"read"_ permissions in parent room.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getDataSpaceFileKey({
  "file_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [FileKey](#filekey)

### getFileData
### Use `downloads` API

### Functional Description:
Download a file.

### Precondition:
User with _"read"_ permissions in parent room.

### Effects:
None.

### Further Information:
Range requests are supported (please cf. [RFC 7233](https://tools.ietf.org/html/rfc7233) for details).


```js
dracoon_team.getFileData({
  "file_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return 'application/octet-stream' instead of specific mimetype
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output `string`

### getFileData_1
### Use `downloads` API

### Functional Description:
Download a file.

### Precondition:
User with _"read"_ permissions in parent room.

### Effects:
None.

### Further Information:
Range requests are supported (please cf. [RFC 7233](https://tools.ietf.org/html/rfc7233) for details).


```js
dracoon_team.getFileData_1({
  "file_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return 'application/octet-stream' instead of specific mimetype
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output `string`

### createFileDownloadToken
### Functional Description:
Create a download token to retrieve a file without `X-Sds-Auth-Token` Header.

### Precondition:
User with _"read"_ permissions in parent room.

### Effects:
Download token is generated and returned.

### Further Information:
The token is necessary to access `downloads` ressources.


```js
dracoon_team.createFileDownloadToken({
  "file_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [DownloadTokenGenerateResponse](#downloadtokengenerateresponse)

### getUserFileKey
### Functional Description:  
Returns the file key for the current user (if available).

### Precondition:
User with _"read"_, _"create"_ or _"manage download share"_ permissions in parent room.

### Effects:
None.

### Further Information:
The symmetric file key is encrypted with the user's public key.  
File keys are generated with the workflow _"Generate file keys"_ that starts at `GET /nodes/missingFileKeys`.


```js
dracoon_team.getUserFileKey({
  "file_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `integer`: File ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [FileKey](#filekey)

### createFolder
### Functional Description:
Creates a new folder.

### Precondition:
User has _"create"_ permissions in current room.

### Effects:
A new folder is created.

### Further Information:
Folders cannot be created on top level (without parent element).

### Node naming convention

* Node (room, folder, file) names are limited to 150 characters.

* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9','.','/'`

* Not allowed characters in names:  
`'../', '\\', '<','>', ':', '\"', '|', '?', '*', '/'`



```js
dracoon_team.createFolder({
  "body": {
    "name": "",
    "parentId": 0
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateFolderRequest](#createfolderrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### updateFolder
### Functional Description:  
Renames an existing folder.

### Precondition:
User has _"change"_ permissions in current room.

### Effects:
The folder is renamed.

### Further Information:
None.

### Node naming convention

* Node (room, folder, file) names are limited to 150 characters.

* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9','.','/'`

* Not allowed characters in names:  
`'../', '\\', '<','>', ':', '\"', '|', '?', '*', '/'`



```js
dracoon_team.updateFolder({
  "folder_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `integer`: Folder ID
  * body **required** [UpdateFolderRequest](#updatefolderrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### missingFileKeys
### Functional Description:  
Requests a list of missing file keys that may be generated by the current user.

### Precondition:
User has a key pair.

### Effects:
None.

### Further Information:
Clients should regularly request missing file keys to provide access to files for other users.  
The returned list is ordered by priority (emergency passwords are returned first).  
### Please note: 
This API returns **1024** entries at maximum.  
There might be more entries even if a total of 1024 is returned.


```js
dracoon_team.missingFileKeys({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * room_id `integer`: Room ID
  * file_id `integer`: File ID
  * user_id `integer`: User ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [MissingKeysResponse](#missingkeysresponse)

### createRoom
### Functional Description:
Creates a new room at the provided parent node.  
Creation of top level rooms provided.

### Precondition:
User has _"create"_ permissions in the parent room.

### Effects:
A new room is created.

### Further Information:  
Rooms may only have other rooms as parent.  
Rooms on top level do not have any parent.  
Rooms may have rooms as children on n hierarchy levels.  
If permission inheritance is disabled, there must be at least one admin user / group (with neither the group nor the user having an expiration date).


```js
dracoon_team.createRoom({
  "body": {
    "name": ""
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateRoomRequest](#createroomrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### getPendingAssignments
### Functional Description:  
Requests a list of user-room assignments by groups that have not been approved yet  
These can have the state:
* **WAITING**  
* **DENIED**  
* **ACCEPTED**  

**ACCEPTED** assignments are already removed from the list.

### Precondition:
None.

### Effects:
None.

### Further Information:
Room administrators should regularly request pending assingments to provide access to rooms for other users.

### Filter

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`

### Fields:

* **userId**  
    User ID filter  
    OPERATOR: `eq`  
    VALUE: `Positive Integer`

* **groupId**  
    Group ID filter  
    OPERATOR: `eq`  
    VALUE: `Positive Integer`

* **roomId**  
    Room ID filter  
    OPERATOR: `eq`  
    VALUE: `Positive Integer`

* **state**  
    Assignment state  
    OPERATOR: `eq`  
    VALUE: `[WAITING|DENIED]`

### Sort

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields not supported.

### Sort fields:

* **userId**: User ID
* **groupId**: Group ID
* **roomId**: Room ID
* **state**: State

### Example:
* `userId:desc`  
Sort by user ID descending.


```js
dracoon_team.getPendingAssignments({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [PendingAssignmentList](#pendingassignmentlist)

### changePendingAssignments
### Functional Description:  
Handles a list of user-room assignments by groups that have not been approved yet  
**WAITING** or **DENIED** assignments can be **ACCEPTED**.

### Precondition:
None.

### Effects:
User-room assignment is approved and the user gets access to the group.

### Further Information:
Room administrators should regularly handle pending assignments to provide access to rooms for other users.


```js
dracoon_team.changePendingAssignments({
  "body": {
    "items": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [PendingAssignmentsRequest](#pendingassignmentsrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### updateRoom
### Functional Description:  
Update a room's meta data.

### Precondition:
User is admin in superordinated level.

### Effects:
Room's meta data is changed.

### Further Information:
None.

### Node naming convention

* Node (room, folder, file) names are limited to 150 characters.

* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9','.','/'`

* Not allowed characters in names:  
`'../', '\\', '<','>', ':', '\"', '|', '?', '*', '/'`


```js
dracoon_team.updateRoom({
  "room_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * body **required** [UpdateRoomRequest](#updateroomrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### getRoomActivitiesLog_1
### Use `nodes/rooms/{room_id}/events` API

### Functional Description:
Retrieve syslog (= audit log) events related to a room.

### Precondition:
Requires _"read"_ permissions on that room.

### Effects:
None.

### Further Information:
Output may be limited to a certain number of entries.  
Please use filter criteria and paging.


```js
dracoon_team.getRoomActivitiesLog_1({
  "room_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * date_start `string`: Start date
  * date_end `string`: End date
  * type `integer`: Operation ID
  * user_id `integer`: User ID
  * status `integer`: Operation status:
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [SyslogEventList](#syslogeventlist)

### configRoom
### Functional Description:
Updates a room.

### Precondition:
User needs to be room administrator.

### Effects:
Room's configuration is changed.

### Further Information:
None.


```js
dracoon_team.configRoom({
  "room_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * body **required** [ConfigRoomRequest](#configroomrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### encryptRoom
### Functional Description:  
Activates the client-side encryption for a room.

### Precondition:
User needs to be room administrator.

### Effects:
Encryption of room is activated.

### Further Information:
Only empty rooms at the top level may be encrypted.  
This endpoint may also be used to disable encryption of an empty room.


```js
dracoon_team.encryptRoom({
  "room_id": 0,
  "body": {
    "isEncrypted": true
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * body **required** [EncryptRoomRequest](#encryptroomrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### getRoomActivitiesLog
### Use `nodes/rooms/{room_id}/events` API

### Functional Description:
Retrieve syslog (= audit log) events related to a room.

### Precondition:
Requires _"read"_ permissions on that room.

### Effects:
None.

### Further Information:
Output may be limited to a certain number of entries.  
Please use filter criteria and paging.


```js
dracoon_team.getRoomActivitiesLog({
  "room_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * date_start `string`: Start date
  * date_end `string`: End date
  * type `integer`: Operation ID
  * user_id `integer`: User ID
  * status `integer`: Operation status:
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [LogEventList](#logeventlist)

### deleteRoomGroupsBatch
### Functional Description:  
Batch function.  
Revoke groups from room.

### Precondition:
User needs to be room administrator.

### Effects:
Group's permissions are revoked.

### Further Information:
None.


```js
dracoon_team.deleteRoomGroupsBatch({
  "room_id": 0,
  "body": {
    "ids": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * body **required** [RoomGroupsDeleteBatchRequest](#roomgroupsdeletebatchrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
*Output schema unknown*

### getRoomGroups
### Functional Description:  
Retrieve a list of groups that are and / or can be granted to the room.

### Precondition:
Any permissions on target room.

### Effects:
None.

### Further Information:
None.

### Filter

### Filter fields:

* **name**  
    Group name  
    OPERATOR: `cn` (multiple values not allowed)  
    VALUE: `search string`

* **isGranted**  
    Filter the groups that have (no) access to this room  
    **Attention! This filter is only available for room administrators.  
    Other users can only look for groups in their rooms, so this filter is true and cannot be overridden.**  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `true`)

* **permissionsManage**  
    Filter the groups that (don't) have manage right in this room  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`.

* **effectivePerm**  
    Filter groups with _DIRECT_ or _DIRECT_ **AND** _EFFECTIVE_ permissions  
    * `false`: _DIRECT_ permissions  
    * `true`:  _DIRECT_ **AND** _EFFECTIVE_ permissions  
    
    > _DIRECT_ means: e.g. room administrator grants read permissions to group of users **directly** on desired room.  
    _EFFECTIVE_ means: e.g. group of users gets read permissions on desired room through **inheritance**.  

    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]` (default: `true`)

* **groupId**  
    Filter the groups by ID  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `Positive Integer`

### Example:
* `isGranted:eq:false|name:cn:searchString`  
Get all groups that have no rights to this room of AND whose name is like `searchString`.


```js
dracoon_team.getRoomGroups({
  "room_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoomGroupList](#roomgrouplist)

### setRoomGroupsBatch
### Functional Description:
Batch function.  
All existing group permissions will be overwritten.

### Precondition:
User needs to be room administrator.

### Effects:
Group's permissions are changed.

### Further Information:
None.


```js
dracoon_team.setRoomGroupsBatch({
  "room_id": 0,
  "body": {
    "items": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * body **required** [RoomGroupsAddBatchRequest](#roomgroupsaddbatchrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### roomRescueKey
### Functional Description:  
Retrieve the room emergency password.

### Precondition:
User has _"read"_ permissions in that room.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.roomRescueKey({
  "room_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [UserKeyPairContainer](#userkeypaircontainer)

### deleteRoomUsersBatch
### Functional Description:  
Batch function.  
Revoke users from room.

### Precondition:
User needs to be room administrator.

### Effects:
User's permissions are revoked.

### Further Information:
None.


```js
dracoon_team.deleteRoomUsersBatch({
  "room_id": 0,
  "body": {
    "ids": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * body **required** [RoomUsersDeleteBatchRequest](#roomusersdeletebatchrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getRoomUsers
### Functional Description:  
Retrieve a list of users that are and / or can be granted to the room.

### Precondition:
Any permissions on target room.

### Effects:
None.

### Further Information:
None.

### Filter

### Filter fields:

* **displayName**  
    User display name (`firstName`, `lastName`, `login`)  
    OPERATOR: `cn` (multiple values not allowed)  
    VALUE: `search string`

* **isGranted**  
    Filter the users that have (no) access to this room  
    **Attention! This filter is only available for room administrators.  
    Other users can only look for users in their rooms, so this filter is true and cannot be overridden.**  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `true`)

* **permissionsManage**  
    Filter the users that (don't) have manage right in this room  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`.

* **effectivePerm**  
    Filter users with _DIRECT_ or _DIRECT_ **AND** _EFFECTIVE_ permissions  
    * `false`: _DIRECT_ permissions  
    * `true`:  _DIRECT_ **AND** _EFFECTIVE_ permissions  
    * `any`: _DIRECT_ **AND** _EFFECTIVE_ **AND** _OVER GROUP_ permissions  
    
    > _DIRECT_ means: e.g. room administrator grants read permissions to user **directly** on desired room.  
    _EFFECTIVE_ means: e.g. user gets read permissions on desired room through **inheritance**.  
    _OVER GROUP_ means: e.g. user gets read permissions on desired room through **group membership**.  

    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `false`)

* **userId**  
    Filter the users by ID  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `Positive Integer`

### Example:
* `isGranted:eq:true|displayName:cn:searchString|permissions_manage:eq:true`  
Get all users that have manage rights to this room of AND whose name is like `searchString`.

### The filters are connected by AND


```js
dracoon_team.getRoomUsers({
  "room_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoomUserList](#roomuserlist)

### setRoomUsersBatch
### Functional Description:
Batch function.  
All existing user permissions will be overwritten.

### Precondition:
User needs to be room administrator.

### Effects:
User's permissions are changed.

### Further Information:
None.


```js
dracoon_team.setRoomUsersBatch({
  "room_id": 0,
  "body": {
    "items": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * room_id **required** `integer`: Room ID
  * body **required** [RoomUsersAddBatchRequest](#roomusersaddbatchrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### searchFsNodes
### Functional Description:  
Provides a flat list of file system nodes (rooms, folders, files) of a given parent that are accessible by the current user.

### Precondition:
Authenticated user with _"read"_ permissions on parent room.

### Effects:
None.

### Further Information:  
A maximum of **500** results is returned.  
For more results please use paging (`offset` + `limit`).  
`EncryptionInfo` is not provided.  
Wildcard character is the asterisk character: `*`.

### Filter

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`

### Fields:

* **type**  
    Node type filter  
    OPERATOR: `eq`  
    VALUE: `[room|folder|file]`

* **fileType**  
    File type filter (file extension)  
    OPERATOR: `cn` (name contains value, multiple values not allowed)  
    VALUE: `Search string`

* **classification**  
    File classification filter  
    OPERATOR: `eq`  
    VALUE: `[1|2|3|4]`
    * 1 - public
    * 2 - for internal use only
    * 3 - confidential
    * 4 - strictly confidential

* **createdBy**  
    Creation username filter  
    OPERATOR: `cn` (name contains value, multiple values not allowed)  
    VALUE: `Search string`

* **createdAt**  
    Creation data filter  
    OPERATOR: `ge|le`  
    VALUE: `Date (yyyy-MM-dd)`

* **updatedBy**  
    Last change username filter  
    OPERATOR: `cn` (name contains value, multiple values not allowed)  
    VALUE: `Search string`

* **updatedAt**  
    Last change date filter  
    OPERATOR: `ge|le`  
    VALUE: `Date (yyyy-MM-dd)`

* **expireAt**  
    Expire date filter  
    OPERATOR: `ge|le`  
    VALUE: `Date (yyyy-MM-dd)`

* **size**  
    Size filter  
    OPERATOR: `ge|le`  
    VALUE: `Size in bytes`

* **isFavorite**  
    Favorite filter  
    OPERATOR: `eq`  
    VALUE: `[true|false]`

* **branchVersion**  
    Node branch version  
    OPERATOR: `ge|le`  
    VALUE: `Version Number`

### Example:
* `type:eq:file|createdAt:ge:2015-01-01`  
Get nodes where `type` equals `file` AND file was created at or after `2015-01-01`.

### Sort

Sort string syntax: `FIELD_NAME:ORDER`   
Order can be `asc` or `desc`.  
Multiple fields not supported.

### Sort fields:

* **name**: Node name
* **createdBy**: Creator user name
* **createdAt**: Creation date
* **updatedBy**: Modifier user name
* **updatedAt**: Modification date
* **fileType**: File type (extension)
* **classification**: Classification ID (for files only):  
    * 1 - public
    * 2 - for internal use only
    * 3 - confidential
    * 4 - strictly confidential
* **size**: Node size
* **cntAdmins**: **DEPRECATED (No Effect)** For rooms only: Number of admins
* **cntUsers**: **DEPRECATED (No Effect)** For rooms only: Number of users
* **nodeCntChildren**: For rooms / folders only: Number of direct children (not recursive)
* **cntDeletedVersions**: For files / folders only: Number of deleted versions of this file/folder (not recursive)
* **type**: Node type (room, folder, file)

### Example:
* `name:desc`  
Sort by `name` descending.


```js
dracoon_team.searchFsNodes({
  "search_string": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * search_string **required** `string`: Search string
  * depth_level `integer`: * 0 - top level nodes only
  * parent_id `integer`: Parent node ID.
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [NodeList](#nodelist)

### getNodesAsZip
### Functional Description:  
Create a download token to retrieve several files in one ZIP archive.

### Precondition:
User has _"read"_ permissions in parent room.

### Effects:
Download token is generated and returned.

### Further Information:
The token is necessary to access `downloads` resources.  
ZIP download is only available for files and folders.


```js
dracoon_team.getNodesAsZip({
  "body": {
    "nodeIds": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ZipDownloadRequest](#zipdownloadrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [DownloadTokenGenerateResponse](#downloadtokengenerateresponse)

### getNodesAsZipDownload
### Functional Description:  
Download multiple files in a ZIP archive.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getNodesAsZipDownload({
  "body": {
    "nodeIds": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ZipDownloadRequest](#zipdownloadrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output `string`

### deleteNode
### Functional Description:
Delete node (room, folder, file).

### Precondition:
Authenticated user with _"delete"_ permissions on supplied nodes.

### Effects:
Node gets deleted.

### Further Information:
None.


```js
dracoon_team.deleteNode({
  "node_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getFsNode
### Functional Description:  
Get node (room, folder, file).

### Precondition:
User has _"read"_ permissions in auth parent room.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getFsNode({
  "node_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### copyNodes
### Functional Description:
Copies nodes (folder, file) to another parent.

### Precondition:
Authenticated user with _"read"_ permissions in the source parent and _"create"_ permissions in the target parent node.

### Effects:
Nodes are copied to target parent.

### Further Information:
Nodes must be in same source parent.  
Rooms cannot be copied.


```js
dracoon_team.copyNodes({
  "node_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Target parent node ID
  * body **required** [CopyNodesRequest](#copynodesrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### emptyDeletedNodes
### Functional Description:  
Empty a Recycle Bin.

### Precondition:
User has _"delete recycle bin"_ permissions in parent room.

### Effects:
All files in the Recycle Bin are permanently removed.

### Further Information:
Actually removes the previously deleted files from the system.  
This action is irreversible.


```js
dracoon_team.emptyDeletedNodes({
  "node_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Parent node ID.
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getFsDeletedNodesSummary
### Functional Description:  
Retrieve a list of deleted nodes in a Recycle Bin.

### Precondition:
User can access parent room and has _"read recycle bin"_ permissions.

### Effects:
None.

### Further Information:
Only room IDs are accepted as node ID since only rooms have Recycle Bins.

### Filter

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`

### Fields:

* **type**  
    Node type filter  
    OPERATOR: `eq` (multiple values allowed)  
    VALUE: `[folder|file]`

* **name**  
    Node name filter  
    OPERATOR: `cn` (Node name contains value, multiple values not allowed)  
    VALUE: `Search string`

* **parentPath**  
    Parent path filter  
    OPERATOR: `cn` (Parent path contains value, multiple values not allowed)  
    VALUE: `Search string`

### Example:
* `type:eq:file:folder|name:cn:searchString_1|parentPath:cn:searchString_2`  
Get deleted nodes where type equals `file` or `folder` AND deleted node name containing `searchString_1` AND deleted node parent path containing `searchString 2`.

### Sort

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields not supported.

### Sort fields:

* **name**: Node name
* **cntVersions**: Number of deleted versions of this file
* **firstDeletedAt**: First deleted version
* **lastDeletedAt**: Last deleted version
* **parentPath**: Parent path of deleted node

### Example:
* `name:desc`  
Sort by `name` descending.


```js
dracoon_team.getFsDeletedNodesSummary({
  "node_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Auth parent node ID
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [DeletedNodeSummaryList](#deletednodesummarylist)

### getFsDeletedNodeVersions
### Functional Description:  
Retrieve all deleted versions of a node.

### Precondition:
User can access parent room and has _"read recycle bin"_ permissions.

### Effects:
None.

### Further Information:
The node is identified by three parameters:
* parent ID
* name
* type (file, folder).

### Sort

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields not supported.

### Sort fields:

* **expireAt**:Expiration date
* **accessedAt**: Last access date
* **size**: Node size
* **classification**: Classification ID (for files only):  
    * 1 - public
    * 2 - for internal use only
    * 3 - confidential
    * 4 - strictly confidential
* **createdAt**: Creation date
* **createdBy**: Node created by user
* **updatedAt**: Modification date
* **updatedBy**: Node modified by user
* **deletedAt**: Deleted date
* **deletedBy**: Node deleted by user

### Example:
* `expireAt:desc`  
Sort by `expireAt` descending.


```js
dracoon_team.getFsDeletedNodeVersions({
  "node_id": 0,
  "type": "",
  "name": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Auth parent node ID
  * type **required** `string` (values: file, folder): Node type
  * name **required** `string`: Node name
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [DeletedNodeVersionsList](#deletednodeversionslist)

### unmarkFavorite
### Functional Description:
Unmarks a node (room, folder, file) as favorite.

### Precondition:
User needs _"read"_ permissions on that node.

### Effects:
A node gets unmarked as favorite.

### Further Information:
None.


```js
dracoon_team.unmarkFavorite({
  "node_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### addFavorite
### Functional Description:  
Marks a node (room, folder, file) as favorite.

### Precondition:
User needs _"read"_ permissions on that node.

### Effects:
A node gets marked as favorite.

### Further Information:
None.


```js
dracoon_team.addFavorite({
  "node_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Node ID
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### moveNodes
### Functional Description:  
Moves nodes (folder, file) to another parent.

### Precondition:
Authenticated user with _"read"_ and _"delete"_ permissions in the source parent and _"create"_ permissions in the target parent node.

### Effects:
Nodes are moved to target parent.

### Further Information:
Nodes must be in same source parent.  
Rooms cannot be moved.


```js
dracoon_team.moveNodes({
  "node_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * node_id **required** `integer`: Target parent node ID
  * body **required** [MoveNodesRequest](#movenodesrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Node](#node)

### getCustomers
### Functional Description:  
Receive a list of customers.

### Precondition:
None.

### Effects:
None.

### Further Information:
This list returns a maximum of **1000** entries.  
Please use filters or searches to specify what you are looking for.  
Authentication with `X-Sds-Service-Token` required.

### Filter

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`

### Fields:

* **id**  
    Customer ID filter  
    OPERATOR: `eq`  
    VALUE: `Positive Integer`

* **companyName**  
    Company name filter  
    OPERATOR: `cn` (Company name contains value, multiple values not allowed)  
    VALUE: `search string`

* **customerContractType**  
    Customer contract type filter  
    OPERATOR: `eq`  
    VALUE: `demo|free|pay`

* **activationCode**  
    Activation code filter  
    OPERATOR: `cn|eq` (Activation code contains value | equals value, multiple values not allowed )  
    VALUE: `search string`

* **trialDaysLeft**  
    Left trial days filter  
    OPERATOR: `ge|le` (Number of trial days is greater or equal | less or equal)  
    VALUE: `Positive Integer`

* **providerCustomerId**  
    Provider Customer ID filter  
    OPERATOR: `cn|eq` (providerCustomerId contains value | equals value, multiple values not allowed )  
    VALUE: `search string`

* **quotaMax**  
    Maximum quota filter  
    OPERATOR: `ge|le` (Quota is greater or equal | less or equal)  
    VALUE: `Positive Integer`

* **quotaUsed**  
    Used quota filter  
    OPERATOR: `ge|le` (Quota is greater or equal | less or equal)  
    VALUE: `Positive Integer`

* **userMax**  
    Maximum user filter  
    OPERATOR: `ge|le` (User maximum is greater or equal | less or equal)  
    VALUE: `Positive Integer`

* **userUsed**  
    Used users filter  
    OPERATOR: `ge|le` (Number of registered users is greater or equal | less or equal)  
    VALUE: `Positive Integer`

* **lockStatus**  
    Lock status filter  
    OPERATOR: `eq`  
    VALUE: `Integer (0 or 1)`

* **createdAt**  
    Creation date filter  
    OPERATOR: `ge|le` (Date is greater or equal | less or equal)  
    VALUE: `Date`

* **updatedAt**  
    Update date filter  
    OPERATOR: `ge|le` (Date is greater or equal | less or equal)  
    VALUE: `Date`

* **lastLoginAt**  
    Last login filter  
    OPERATOR: `ge|le` (Date is greater or equal | less or equal)  
    VALUE: `Date`

* **userLogin**  
    User login filter  
    OPERATOR: `eq` (Customer user login name equal value, multiple values not allowed)  
    Search user all logins e.g. `sql`, `active_directory`, `radius`  
    VALUE: `search string`
    
* **attributeKey**  
    Customer attribute key filter  
    OPERATOR: `eq` (Customer attribute key equal value, multiple values not allowed)  
    Search customers with given customer attribute key.  
    VALUE: `search string`

* **attributeValue**  
    Customer attribute value filter  
    OPERATOR: `eq` (Customer attribute value equal value, multiple values not allowed)  
    Search customers with given customer attribute value.  
    VALUE: `search string`

### Sort

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields not supported.

### Sort fields:

* **companyName**: Company name
* **customerContractType**: Customer contract type
* **trialDaysLeft**: Number of remaining trial days (demo customers)
* **providerCustomerId**: Provider Customer ID (pay customers)
* **quotaMax**: Maximum quota
* **quotaUsed**: Currently used quota
* **userMax**: Maximum user number
* **userUsed**: Number of currently active users
* **lockStatus**: Lock status of customer
* **createdAt**: Creation date
* **updatedAt**: Date of last update
* **lastLoginAt**: Date of last login of any user of this customer

### Example:
* `companyName:desc`  
Sort by company `name` descending.


```js
dracoon_team.getCustomers({
  "X-Sds-Service-Token": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * sort `string`: Sort string
  * include_attributes `boolean`: Include custom customer attributes.
  * X-Sds-Service-Token **required** `string`: Service Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [CustomerList](#customerlist)

### newCustomerRequest
### Functional Description:
Create a new customer.

### Precondition:
None.

### Effects:
A new customer is created.

### Further Information:
Authentication with `X-Sds-Service-Token` required.  
If no company name is set, first name of the first administrator is used.  
Max quota has to be at least 1 GB (= 1 073 741 824 B).

### Authentication Method Options

* **SQL**  
    `none`

* **Active Directory**  
    (optional)  
    key: `"ad_config_id"`  
    value: "Active Directory configuration ID"  
    
    key: `"username"`  
    value: "Active Directory user name according to auth setting `userFilter`"

* **RADIUS**  
    key: `"username"`  
    value: "Radius user name"

* **OpenID Connect**  
    key: `"openid_config_id"`  
    value: "OpenID Connect configuration ID"  
    
    key: `"username"`  
    value: "OpenID Connect user name according to auth setting `mappingClaim`"


```js
dracoon_team.newCustomerRequest({
  "body": {
    "customerContractType": "",
    "firstAdminUser": {
      "firstName": "",
      "lastName": "",
      "login": ""
    },
    "quotaMax": 0,
    "userMax": 0
  },
  "X-Sds-Service-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [NewCustomerRequest](#newcustomerrequest)
  * X-Sds-Service-Token **required** `string`: Service Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [NewCustomerResponse](#newcustomerresponse)

### deleteCustomer
### Functional Description:
Delete a customer.

### Precondition:
None.

### Effects:
Customer is deleted.

### Further Information:
Authentication with `X-Sds-Service-Token` required.


```js
dracoon_team.deleteCustomer({
  "customer_id": 0,
  "X-Sds-Service-Token": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * X-Sds-Service-Token **required** `string`: Service Authentication token

#### Output
*Output schema unknown*

### getCustomer
### Functional Description:  
Receive details of a selected customer.

### Precondition:
Existing customer.

### Effects:
None.

### Further Information:
Authentication with `X-Sds-Service-Token` required.


```js
dracoon_team.getCustomer({
  "customer_id": 0,
  "X-Sds-Service-Token": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * include_attributes `boolean`: Include custom customer attributes.
  * X-Sds-Service-Token **required** `string`: Service Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Customer](#customer)

### updateCustomer
### Functional Description:  
Change selected attributes of a customer.

### Precondition:
Existing customer.

### Effects:
Update of attributes.

### Further Information:
Authentication with `X-Sds-Service-Token` required.


```js
dracoon_team.updateCustomer({
  "customer_id": 0,
  "body": {},
  "X-Sds-Service-Token": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * body **required** [UpdateCustomerRequest](#updatecustomerrequest)
  * X-Sds-Service-Token **required** `string`: Service Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UpdateCustomerResponse](#updatecustomerresponse)

### setAllCustomerAttributes
### Functional Description:  
Set custom customer attributes.

### Precondition:
Right _"change global config"_ required.

### Effects:
Custom customer attributes gets set.

### Further Information:
Batch function.  
All existing customer attributes will be deleted.  
Allowed characters for keys are: `[a-zA-Z0-9_-]`  
Characters are case-insensitive.



```js
dracoon_team.setAllCustomerAttributes({
  "customer_id": 0,
  "body": {},
  "X-Sds-Service-Token": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * body **required** [CustomerAttributes](#customerattributes)
  * X-Sds-Service-Token **required** `string`: Service Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Customer](#customer)

### setCustomerAttributes
### Functional Description:  
Add or edit custom customer attributes.

### Precondition:
Right _"change global config"_ required.

### Effects:
Custom customer attributes get added or edited.

### Further Information:
Batch function.  
If an entry exists before, it will be overwritten.  
Allowed characters for keys are: `[a-zA-Z0-9_-]`  
Characters are case-insensitive.


```js
dracoon_team.setCustomerAttributes({
  "customer_id": 0,
  "body": {},
  "X-Sds-Service-Token": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * body **required** [CustomerAttributes](#customerattributes)
  * X-Sds-Service-Token **required** `string`: Service Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [Customer](#customer)

### deleteCustomerAttributes
### Functional Description:
Delete custom customer attribute.

### Precondition:
Right _"change global config"_ required.

### Effects:
Custom customer attribute gets deleted.

### Further Information:
Allowed characters for keys are: `[a-zA-Z0-9_-]`  
Characters are case-insensitive.


```js
dracoon_team.deleteCustomerAttributes({
  "customer_id": 0,
  "key": "",
  "X-Sds-Service-Token": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * key **required** `string`: Key
  * X-Sds-Service-Token **required** `string`: Service Authentication token

#### Output
*Output schema unknown*

### getCustomerUsers
### Functional Description:  
Receive a list of users associated with a certain customer.

### Precondition:
None.

### Effects:
None.

### Further Information:
Authentication with `X-Sds-Service-Token` required.

### Filter

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
Multiple fields are supported.

### Filter fields:

* **login**  
    Login name  
    OPERATOR: `cn` (User login name contains value)  
    VALUE: `Search string`

* **firstName**  
    First name  
    OPERATOR: `cn` (User first name contains value)  
    VALUE: `Search string`

* **lastName**  
    Last name  
    OPERATOR: `cn` (User last name contains value)  
    VALUE: `Search string`

* **lockStatus**  
    Lock status:
    * 0 - Locked
    * 1 - Web access allowed
    * 2 - Web and mobile access allowed,  
    
    OPERATOR: `eq` (User lock status)  
    VALUE: `[0|1|2]`.

* **effectiveRoles**  
    Filter users with _DIRECT_ or _DIRECT_ **AND** _EFFECTIVE_ roles  
    * `false`: _DIRECT_ roles  
    * `true`:  _DIRECT_ **AND** _EFFECTIVE_ roles  

    > _DIRECT_ means: e.g. user gets role **directly** granted from someone with _grant permission_ right.  
    _EFFECTIVE_ means: e.g. user gets role through **group membership**.  

    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]` (default: `false`)


### Logical grouping:
Filtering according first three fields (`login`, `lastName`, `firstName`) is intrinsically processed by the API as logical _OR_.  
In opposite, filtering according to last three field (`lockStatus`) is processed intrinsically as logical _AND_.

### Example:
* `login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`  
Filter by `login` contains `searchString_1` or `firstName` contains `searchString_2` and user are not locked.

### Sort

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields are supported.

### Sort fields:

* **login**: Login name
* **firstName**: First name
* **lastName**: Last name
* **gender**: Gender
* **lockStatus**: User lock status
* **lastLoginSuccessAt**: Last successful logon date
* **expireAt**: Expiration date

### Example:
* `firstName:asc|lastLoginSuccessAt:desc`  
Sort by `firstName` ascending and by `lastLoginSuccessAt` descending.


```js
dracoon_team.getCustomerUsers({
  "customer_id": 0,
  "X-Sds-Service-Token": ""
}, context)
```

#### Input
* input `object`
  * customer_id **required** `integer`: Customer ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Service-Token **required** `string`: Service Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UserList](#userlist)

### getBrandingServerInfo
### Functional Description:  
Public branding information.

### Precondition:
None.

### Effects:
If `brandingServerBrandingId` is set, `brandingServerCustomer` is not supplied.

### Further Information:
None.


```js
dracoon_team.getBrandingServerInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BrandingServerInfo](#brandingserverinfo)

### getPublicDownloadShare
### Functional Description:  
Retrieve the public information of a Download Share.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getPublicDownloadShare({
  "access_key": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [PublicDownloadShare](#publicdownloadshare)

### createPublicDownloadShareToken
### Functional Description:
Generate a download token to retrieve a shared file.

### Precondition:
None.

### Effects:
Download token is generated and returned.

### Further Information:
After generating the download token a download is possible with:
* `GET /public/shares/downloads/{access_key}/{token}`


```js
dracoon_team.createPublicDownloadShareToken({
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

### getPublicFileData
### Functional Description:  
Download a file.

### Precondition:
Valid download token.

### Effects:
None.

### Further Information:
Range requests are supported (please cf. [RCF 7233](https://tools.ietf.org/html/rfc7233) for details).


```js
dracoon_team.getPublicFileData({
  "access_key": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * token **required** `string`: Download token
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return 'application/octet-stream' instead of specific mimetype

#### Output
* output `string`

### getPublicFileData_1
### Functional Description:  
Download a file.

### Precondition:
Valid download token.

### Effects:
None.

### Further Information:
Range requests are supported (please cf. [RCF 7233](https://tools.ietf.org/html/rfc7233) for details).


```js
dracoon_team.getPublicFileData_1({
  "access_key": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * token **required** `string`: Download token
  * Range `string`: Range
  * generic_mimetype `boolean`: Always return 'application/octet-stream' instead of specific mimetype

#### Output
* output `string`

### getPublicUploadShare
### Functional Description:  
Provides information about the desired Upload Share.

### Precondition:
None.

### Effects:
None.

### Further Information:
If no password is set, the returned information is reduced to the following attributes (if available):

* **name**
* **maxSlots**
* **createdAt**
* **isProtected**
* **isEncrypted**
* **showUploadedFiles**
* **userUserPublicKeyList** (if parent is end-to-end encrypted)

Only if the password is transmitted as `X-Sds-Share-Password` header, all values are returned.


```js
dracoon_team.getPublicUploadShare({
  "access_key": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * X-Sds-Share-Password `string`: Upload share password
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [PublicUploadShare](#publicuploadshare)

### createShareUpload
### Functional Description:  
Create a new upload channel.

### Precondition:
None.

### Effects:
Upload channel is created and corresponding token / upload ID returned.

### Further Information:
The token from the response can be used at:

* `POST /uploads/{token}`
* `PUT /uploads/{token}`
* `DELETE /uploads/{token}`

Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.

### Node naming convention

* Node (room, folder, file) names are limited to 150 characters.

* Not allowed names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9','.','/'`

* Not allowed characters in names:  
`'../', '\\', '<','>', ':', '\"', '|', '?', '*', '/'`



```js
dracoon_team.createShareUpload({
  "access_key": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * body **required** [CreateShareUploadChannelRequest](#createshareuploadchannelrequest)

#### Output
* output [CreateShareUploadChannelResponse](#createshareuploadchannelresponse)

### cancelShareUpload
### Functional Description:
Abort (chunked) upload via Upload Share.

### Precondition:
Valid Upload ID.

### Effects:
Aborts upload and invalidates upload ID / token.

### Further Information:
None.


```js
dracoon_team.cancelShareUpload({
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

### uploadShare
### Functional Description:  
Chunked upload of files via Upload Share.

### Precondition:
Valid upload ID.

### Effects:
Chunk of file is uploaded.

### Further Information:
Chunked uploads (range requests) are supported (please cf. [RCF 7233](https://tools.ietf.org/html/rfc7233) for details).


```js
dracoon_team.uploadShare({
  "access_key": "",
  "upload_id": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * upload_id **required** `string`: Upload channel ID
  * file `string`, `object`: File
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * Content-Range `string`: Content-Range
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [ChunkUploadResponse](#chunkuploadresponse)

### completeShareUpload
### Functional Description:
Finalize (chunked) upload via Upload Share.

### Precondition:
Valid upload ID.

### Effects:
Finalizes upload.

### Further Information:
Chunked uploads (range requests) are supported (please cf. [RCF 7233](https://tools.ietf.org/html/rfc7233) for details).  

Please ensure that all chunks have been transferred correctly before finishing the upload.  
If file hash has been created in time a `201 Created` will be responded and hash will be part of response, otherwise it will be a `202 Accepted` without it.

### 200 OK is not used by this API


```js
dracoon_team.completeShareUpload({
  "access_key": "",
  "upload_id": ""
}, context)
```

#### Input
* input `object`
  * access_key **required** `string`: Access key
  * upload_id **required** `string`: Upload channel ID
  * body [UserFileKeyList](#userfilekeylist)

#### Output
* output [PublicUploadedFileData](#publicuploadedfiledata)

### getSoftwareVersion
### Functional Description:  
Public software version information.

### Precondition:
None.

### Effects:
None.

### Further Information:
The version of DRACOON Server consists of two components:
* **API**
* **Core** (refered to as _"Server"_)

that are versioned individually.


```js
dracoon_team.getSoftwareVersion({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [SoftwareVersionData](#softwareversiondata)

### getSystemInfo
### Functional Description:  
Provides information about system.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getSystemInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SystemInfo](#systeminfo)

### getActiveDirectoryAuthInfo
### Functional Description:  
Provides information about Active Directory authentication options.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getActiveDirectoryAuthInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ActiveDirectoryAuthInfo](#activedirectoryauthinfo)

### getOpenIdAuthInfo
### Functional Description:  
Provides information about OpenID Connect authentication options.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getOpenIdAuthInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OpenIdAuthInfo](#openidauthinfo)

### getSdsServerTime
### Functional Description:  
Retrieve the actual server time.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getSdsServerTime({}, context)
```

#### Input
* input `object`
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [SdsServerTime](#sdsservertime)

### getRoles
### Functional Description:  
Retrieve a list of all Roles and the role assignment rights.

### Precondition:
Right _"read users"_ required.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getRoles({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoleList](#rolelist)

### deleteRoleGroups
### Functional Description:  
Removes one or more groups from a role.

### Precondition:
Role _"Group Manager"_ required.  
For each role, at least one non-expiring user must remain who keeps the role.

### Effects:
One or more groups will be removed from a role.

### Further Information:
None.


```js
dracoon_team.deleteRoleGroups({
  "role_id": 0,
  "body": {
    "ids": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * body **required** [GroupIds](#groupids)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoleGroupList](#rolegrouplist)

### getRoleGroups
### Functional Description:  
Get all groups of a role.

### Precondition:
Right _"read groups"_ required.

### Effects:
None.

### Further Information:
None.

### Filter

### Filter fields:

* **isMember**  
    Filter the groups which are / aren't member of that role  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `true`)

* **name**  
    Group name  
    OPERATOR: `cn` (Group name contains value; multiple values not allowed)  
    VALUE: `Search string`

### Example:
* `isMember:eq:false|name:cn:searchString`  
Get all groups that are not a member of that role AND whose `name` contains `searchString`.


```js
dracoon_team.getRoleGroups({
  "role_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoleGroupList](#rolegrouplist)

### addRoleGroups
### Functional Description:
Adds one or more groups to a role.

### Precondition:
Right _"grant permission on groups"_ required.

### Effects:
One or more groups will be added to a role.

### Further Information:
None.


```js
dracoon_team.addRoleGroups({
  "role_id": 0,
  "body": {
    "ids": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * body **required** [GroupIds](#groupids)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoleGroupList](#rolegrouplist)

### deleteRoleUsers
### Functional Description:  
Removes one or more users from a role.

### Precondition:
Role _"User Manager"_ required.  
For each role, at least one non-expiring user must remain who keeps the role.

### Effects:
One or more users will be removed from a role.

### Further Information:
None.


```js
dracoon_team.deleteRoleUsers({
  "role_id": 0,
  "body": {
    "ids": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * body **required** [UserIds](#userids)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoleUserList](#roleuserlist)

### getRoleUsers
### Functional Description:  
Get all users of a role.

### Precondition:
Right _"read users"_ required.

### Effects:
None.

### Further Information:
None.

### Filter

### Filter fields:

* **isMember**  
    Filter the users which are / aren't member of that role  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `true`)

* **displayName**  
    User display name (firstName, lastName, login)  
    OPERATOR: `cn` (User display name contains value; multiple values not allowed)  
    VALUE: `Search string`

### Example:
* `isMember:eq:false|displayName:cn:searchString`  
Get all users that are not member of that role AND whose display name contains `searchString`.


```js
dracoon_team.getRoleUsers({
  "role_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoleUserList](#roleuserlist)

### addRoleUsers
### Functional Description:
Adds one or more users to a role.

### Precondition:
Right _"grant permission on users"_ required.

### Effects:
One or more users will be added to a role.

### Further Information:
None.


```js
dracoon_team.addRoleUsers({
  "role_id": 0,
  "body": {
    "ids": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * role_id **required** `integer`: Role ID
  * body **required** [UserIds](#userids)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoleUserList](#roleuserlist)

### getDownloadShares
### Functional Description:  
Retrieve a list of Download Shares.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.

### Filters

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
Multiple fields is supported.

### Filter fields:

* **name**  
    Alias Name or File Name  
    OPERATOR: `cn` ( name contains value)  
    VALUE: `Search string`

* **createdBy**  
    Creator info  
    OPERATOR: `cn` (Creator info (`login`, `email`, `firstName`, `lastName`) contains value)  
    VALUE: `Search string`

* **accessKey**  
    Share access key  
    OPERATOR: `cn` (Share access key contains value)  
    VALUE: `Search string`

* **nodeId**  
    Source node ID  
    OPERATOR: `eq` (Source file / folder / room ID)  
    VALUE: `Search node ID`

* **userId**  
    Creator user ID  
    OPERATOR: `eq`  
    VALUE: `Search user ID`

### Example:
* `name:cn:searchString_1|createdBy:cn:searchString_2|nodeId:eq:1`  
Filter by file `name` contains `searchString_1` OR creator info (`login`, `email`, `firstName`, `lastName`) contains `searchString_2` OR node ID is equal to `1`.

### Sorting

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields is supported.

### Sort fields:

* **name**: Alias Name or File Name
* **classification**: Classification ID (for files only):  
    * 1 - public
    * 2 - for internal use only
    * 3 - confidential
    * 4 - strictly confidential
* **notifyCreator**: Notify creator on every download
* **expireAt**: Expiration date
* **createdAt**: Creation date
* **createdBy**: Creator info

### Example:
* `name:asc|expireAt:desc`  
Sort by `name` ascending and by `expireAt` descending.


```js
dracoon_team.getDownloadShares({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [DownloadShareList](#downloadsharelist)

### createDownloadShare
### Functional Description:
Create a new Download Share.

### Precondition:
User with _"manage download share"_ permissions on target node.

### Effects:
Download Share created.

### Further Information:

* **Access password:** limited to **150** characters.
* **Notes:** limited to **255** characters.
* **Alias names:** limited to **150** characters.


```js
dracoon_team.createDownloadShare({
  "body": {
    "fileId": 0,
    "nodeId": 0
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateDownloadShareRequest](#createdownloadsharerequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [DownloadShare](#downloadshare)

### deleteDownloadShare
### Functional Description:
Delete a Download Share.

### Precondition:
None.

### Effects:
Download Share is deleted.

### Further Information:
Only the Download Share is removed; the referenced file or container persists.


```js
dracoon_team.deleteDownloadShare({
  "share_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getDownloadShare
### Functional Description:  
Retrieve detailed information about one Download Share.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getDownloadShare({
  "share_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [DownloadShare](#downloadshare)

### getDownloadShareQr
### Functional Description:  
Retrieve detailed information about one Download Share.

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getDownloadShareQr({
  "share_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [DownloadShare](#downloadshare)

### getUploadShares
### Functional Description:  
Retrieve a list of Upload Shares (aka Upload Accounts).

### Precondition:
None.

### Effects:
None.

### Further Information:
None.

### Filters

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
Multiple fields is supported.

### Filter fields:

* **name**  
    Alias name  
    OPERATOR: `cn` (Alias name contains value)  
    VALUE: `search string`

* **createdBy**  
    Creator info  
    OPERATOR: `cn` (Creator info (`login`, `email`, `firstName`, `lastName`) contains value)  
    VALUE: `search string`

* **accessKey**  
    Share access key  
    OPERATOR: `cn` (Share access key contains value)  
    VALUE: `search string`

* **targetId**  
    Target node (room, folder)  
    **DEPRECATED** OPERATOR: `cn` (Target node contains value)  
    **NEW** OPERATOR: `eq` (Target node equal value)  
    VALUE: `search string`

* **userId**  
    Creator user ID  
    OPERATOR: `eq`  
    VALUE: `Search user ID`

### Example:
* `name:cn:searchString_1|createdBy:cn:searchString_2`  
Filter by alias `name` contains `searchString_1` OR creator info (`login`, `email`, `firstName`, `lastName`) contains `searchString_2`.

### Sorting

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields is supported.

### Sort fields:

* **name**: Alias name
* **expireAt**: Expiration date
* **notifyCreator**: Notify creator on every upload.
* **createdAt**: Creation date
* **createdBy**: Creator info

### Example:
* `name:asc|expireAt:desc`  
Sort by `name` ascending AND by `expireAt` descending.


```js
dracoon_team.getUploadShares({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Filter string
  * sort `string`: Sort string
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UploadShareList](#uploadsharelist)

### createUploadShare
### Functional Description:
Create a new Upload Share (aka Upload Account).

### Precondition:
User has _"manage upload share"_ permissions on target container.

### Effects:
Upload Share is created.

### Further Information:

* **Notes:** limited to **255** characters.
* **Alias Names:** are limited to **150** characters.
* **Send Mail:**:  
    * If `sendMail` is set to `false`: `mailRecipients`; `mailSubject`; `mailBody` are **optional**.  
    * If `sendMail` is set to `true`: `mailRecipients`; `mailSubject`; `mailBody` are **mandatory**.


```js
dracoon_team.createUploadShare({
  "body": {
    "name": "",
    "targetId": 0
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateUploadShareRequest](#createuploadsharerequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UploadShare](#uploadshare)

### deleteUploadShare
### Functional Description:
Delete an Upload Share (aka Upload Account).

### Precondition:
None.

### Effects:
Upload Share is deleted.

### Further Information:
Only the Upload Share is removed; already uploaded files and the target container persist.


```js
dracoon_team.deleteUploadShare({
  "share_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getUploadShare
### Functional Description:  
Retrieve detailed information about one Upload Share (aka Upload Account).

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getUploadShare({
  "share_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UploadShare](#uploadshare)

### getUploadShareQr
### Functional Description:  
Retrieve detailed information about one Upload Share (aka Upload Account).

### Precondition:
None.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getUploadShareQr({
  "share_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * share_id **required** `integer`: Share ID
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UploadShare](#uploadshare)

### getAuditNodeUserData_1
### Functional Description:  
Retrieve a list of all nodes of type `room` and the room assignment users with permissions.

### Precondition:
Right _"read audit log"_ required.

### Effects:
None.

### Further Information:
None.

### Filter

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
Multiple fields are supported.

### Filter fields:

* **nodeId**  
    Node ID  
    OPERATOR: `eq` (Node ID equal value)  
    VALUE: `Search string`

* **nodeName**  
    Node name (Login)  
    OPERATOR: `cn|eq` (Node name contains value | equal value)  
    VALUE: `Search string`

* **nodeParentId**  
    Node parent ID  
    OPERATOR: `eq` (Parent ID equal value; parent ID 0 is the root node.)  
    VALUE: `Search string`

* **userId**  
    User ID  
    OPERATOR: `eq` (User ID equal value)  
    VALUE: `Search string`

* **userName**  
    User name (Login)  
    OPERATOR: `cn|eq` (User name contains value | equal value)  
    VALUE: `Search string`

* **userFirstName**  
    User first name  
    OPERATOR: `cn|eq` (User first name contains value | equal value)  
    VALUE: `Search string`

* **userLastName**  
    User last name  
    OPERATOR: `cn|eq` (User last name contains value | equal value)  
    VALUE: `Search string`

* **permissionsManage**  
    Filter the users that (don't) have manage right in this room  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`

* **nodeIsEncrypted**  
    Encrypted node filter  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`

* **nodeHasRecycleBin**  
    Recycle bin filter  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`
    
* **nodeHasActivitiesLog**  
    Activities log filter  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]`

### Logical grouping:
Filtering according first three fields (`login`, `lastName`, `firstName`) is intrinsically processed by the API as logical _OR_.  
In opposite, filtering according to is processed intrinsically as logical _AND_.

### Example:
* `userName:cn:searchString_1|userFirstName:cn:searchString_2|nodeId:eq:2`  
Filter by user login containing `searchString_1` OR first name containing `searchString_2` and node ID equal 2.

### Sort

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields are supported.

### Sort fields:

* **nodeId**: Node ID
* **nodeName**: Node name
* **nodeParentId**: Node parent ID
* **nodeSize**: Node size
* **nodeQuota**: Node quota

### Example:
* `nodeName:asc`  
Sort by `nodeName` ascending.


```js
dracoon_team.getAuditNodeUserData_1({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Filter string
  * sort `string`: Sort string
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output `array`
  * items [AuditNodeResponse](#auditnoderesponse)

### getSyslogEvents
### Functional Description:  
Retrieve eventlog (= audit log) events.

### Precondition:
Role _"Log Auditor"_ required.

### Effects:
None.

### Further Information:
Output may be limited to a certain number of entries.  
Please use filter criteria and paging.


```js
dracoon_team.getSyslogEvents({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * date_start `string`: Start date
  * date_end `string`: End date
  * type `integer`: Operation ID
  * user_id `integer`: User ID
  * status `integer`: Operation status:
  * user_client `string`: User client
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [SyslogEventList](#syslogeventlist)

### getLogOperations_1
### Functional Description:  
Retrieve eventlog (= audit log) operation IDs and the associated log operation description.

### Precondition:
Role _"Log Auditor"_ required.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getLogOperations_1({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [LogOperationList](#logoperationlist)

### testAdConfig
### Functional Description:  
Test AD configuration.

### Precondition:
Role _Config Manager_.

### Effects:
None.

### Further Information:
DRACOON tries to establish a connection with the provided information.


```js
dracoon_team.testAdConfig({
  "body": {
    "ldapUsersDomain": "",
    "serverAdminName": "",
    "serverAdminPassword": "",
    "serverIp": "",
    "serverPort": 0,
    "useLdaps": true
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [TestActiveDirectoryConfigRequest](#testactivedirectoryconfigrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [TestActiveDirectoryConfigResponse](#testactivedirectoryconfigresponse)

### testRadiusConfig
Test RADIUS server availability


```js
dracoon_team.testRadiusConfig({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getAdConfigs
### Functional Description:  
Retrieve a list of configured ADs.

### Precondition:
Role _Config Manager_.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getAdConfigs({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [ActiveDirectoryConfigList](#activedirectoryconfiglist)

### createAdConfig
### Functional Description:
Create a new AD configuration.

### Precondition:
Role _Config Manager_.

### Effects:
New AD configuration created.

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
    "useLdaps": true,
    "userFilter": "",
    "userImport": true
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateActiveDirectoryConfigRequest](#createactivedirectoryconfigrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [ActiveDirectoryConfig](#activedirectoryconfig)

### deleteAdConfig
### Functional Description:
Delete an existing AD configuration.

### Precondition:
Role _Config Manager_.

### Effects:
AD configuration removed.

### Further Information:
None.


```js
dracoon_team.deleteAdConfig({
  "ad_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * ad_id **required** `integer`: Active Directory ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getAuthAdSetting
### Functional Description:  
Retrieve the configuration of a AD.

### Precondition:
Role _Config Manager_.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getAuthAdSetting({
  "ad_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * ad_id **required** `integer`: Active Directory ID
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [ActiveDirectoryConfig](#activedirectoryconfig)

### updateAuthAdSetting
### Functional Description:  
Update an existing AD configuration.

### Precondition:
Role _Config Manager_.

### Effects:
AD configuration updated.

### Further Information:
None.


```js
dracoon_team.updateAuthAdSetting({
  "ad_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * ad_id **required** `integer`: Active Directory ID
  * body **required** [UpdateActiveDirectoryConfigRequest](#updateactivedirectoryconfigrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [ActiveDirectoryConfig](#activedirectoryconfig)

### getOpenIdIdpConfigs
### Functional Description:  
Retrieve a list of configured OpenID Connect IDPs.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getOpenIdIdpConfigs({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output `array`
  * items [OpenIdIdpConfig](#openididpconfig)

### createOpenIdIdpConfig
### Functional Description:
Create a new OpenID Connect IDP configuration.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
New OpenID Connect IDP configuration is created.

### Further Information:
See [http://openid.net/developers/specs](http://openid.net/developers/specs) for further information.


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
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateOpenIdIdpConfigRequest](#createopenididpconfigrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [OpenIdIdpConfig](#openididpconfig)

### deleteOpenIdIdpConfig
### Functional Description:
Delete an existing OpenID Connect IDP configuration.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
OpenID Connect IDP configuration removed.

### Further Information:
None.


```js
dracoon_team.deleteOpenIdIdpConfig({
  "idp_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * idp_id **required** `integer`: OpenID IDP configuration ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getOpenIdIdpConfig
### Functional Description:  
Retrieve an OpenID Connect IDP configuration.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getOpenIdIdpConfig({
  "idp_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * idp_id **required** `integer`: OpenID IDP configuration ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [OpenIdIdpConfig](#openididpconfig)

### updateOpenIdIdpConfig
### Functional Description:  
Update an existing OpenID Connect IDP configuration.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
OpenID Connect IDP configuration is updated.

### Further Information:
See [http://openid.net/developers/specs](http://openid.net/developers/specs) for further information.


```js
dracoon_team.updateOpenIdIdpConfig({
  "idp_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * idp_id **required** `integer`: OpenID IDP configuration ID
  * body **required** [UpdateOpenIdIdpConfigRequest](#updateopenididpconfigrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [OpenIdIdpConfig](#openididpconfig)

### DeteteRadiusConfig
Delete RADIUS Configuration


```js
dracoon_team.DeteteRadiusConfig({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### GetRadiusConfig
Get RADIUS Configuration


```js
dracoon_team.GetRadiusConfig({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RadiusConfig](#radiusconfig)

### create
Create RADIUS Configuration


```js
dracoon_team.create({
  "body": {
    "ipAddress": "",
    "port": 0,
    "sharedSecret": ""
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [RadiusConfigCreateRequest](#radiusconfigcreaterequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RadiusConfig](#radiusconfig)

### UpdateRadiusConfig
Update RADIUS Configuration


```js
dracoon_team.UpdateRadiusConfig({
  "body": {
    "ipAddress": "",
    "port": 0,
    "sharedSecret": ""
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [RadiusConfigUpdateRequest](#radiusconfigupdaterequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RadiusConfig](#radiusconfig)

### getOAuthClients
### Functional Description:  
Retrieve a list of configured OAuth clients.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getOAuthClients({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output `array`
  * items [OAuthClient](#oauthclient)

### createOAuthClient
### Functional Description:
Create a new OAuth client.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
New OAuth client created.

### Further Information:  
Client secret must have:  
* at least 12 characters, at most 32 characters  
* only lower case characters, upper case characters and digits  
* at least 1 lower case character, 1 upper case character and 1 digit  

The client secret is optional and will be generated if it is left empty.  

Valid grant types are:  
* **authorization_code**  
* **implicit**  
* **password**  
* **client_credentials**  
* **refresh_token**  

Grant type `client_credentials` is actually not permitted!  

Default access token validity: **8 hours**  
Default refresh token validity: **30 days**


```js
dracoon_team.createOAuthClient({
  "body": {
    "clientId": "",
    "grantTypes": []
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateOAuthClientRequest](#createoauthclientrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [OAuthClient](#oauthclient)

### deleteOAuthClient
### Functional Description:
Delete an existing OAuth client.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
OAuth client removed.

### Further Information:
None.


```js
dracoon_team.deleteOAuthClient({
  "client_id": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getOAuthClient
### Functional Description:  
Retrieve the configuration of an OAuth client.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getOAuthClient({
  "client_id": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [OAuthClient](#oauthclient)

### updateOAuthClient
### Functional Description:  
Update an existing OAuth client.

### Precondition:
Role _Config Manager_ of the Provider Customer.

### Effects:
OAuth client updated.

### Further Information:  
Client secret must have:  
* at least 12 characters, at most 32 characters  
* only lower case characters, upper case characters and digits  
* at least 1 lower case character, 1 upper case character and 1 digit  

The client secret is optional and will be generated if it is left empty.  

Valid grant types are:  
* **authorization_code**  
* **implicit**  
* **password**  
* **client_credentials**  
* **refresh_token**  

Grant type `client_credentials` is actually not permitted!  



```js
dracoon_team.updateOAuthClient({
  "client_id": "",
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * body **required** [UpdateOAuthClientRequest](#updateoauthclientrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [OAuthClient](#oauthclient)

### GetS3Config
Get S3 Storage Configuration


```js
dracoon_team.GetS3Config({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [S3Config](#s3config)

### PostS3Config
Create S3 Storage Configuration


```js
dracoon_team.PostS3Config({
  "body": {
    "accessKey": "",
    "bucketName": "",
    "endpointUrl": "",
    "secretKey": ""
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [S3ConfigCreateRequest](#s3configcreaterequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [S3Config](#s3config)

### PutS3Config
Update S3 Storage Configuration


```js
dracoon_team.PutS3Config({
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [S3ConfigUpdateRequest](#s3configupdaterequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [S3Config](#s3config)

### cancelFileUploadByToken
### Functional Description:
Cancel file upload.

### Precondition:
Valid upload token.

### Effects:
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

### uploadFileByToken
### Functional Description:  
Upload a chunk of a file.

### Precondition:
Valid upload token.

### Effects:
Chunk uploaded.

### Further Information:
Use this API if you cannot set custom headers during uploads.  
Range requests are supported (please cf. [RCF 7233](https://tools.ietf.org/html/rfc7233) for details).


```js
dracoon_team.uploadFileByToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Upload token
  * file `string`, `object`: File
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * Content-Range `string`: Content-Range

#### Output
* output [ChunkUploadResponse](#chunkuploadresponse)

### completeFileUploadByToken
### Functional Description:
Finish uploading a file.

### Precondition:
Valid upload token.

### Effects:
File created.

### Further Information:
The provided file name might be changed in accordance with the resolution strategy:

* **autorename**: changes the file name and adds a number to avoid conflicts.
* **overwrite**: deletes any old file with the same file name.
* **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.

Please ensure that all chunks have been transferred correctly before finishing the upload.

### 200 OK is not used by this API


```js
dracoon_team.completeFileUploadByToken({
  "token": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Upload token
  * body [CompleteUploadRequest](#completeuploadrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [Node](#node)

### getUserInfo
### Functional Description:  
Retrieves all information regarding the current user's account.

### Precondition:
Valid auth token.

### Effects:
None.

### Further Information:
Setting the query parameter `more_info` to `true`, causes the API to return more details e.g. the user's groups.


```js
dracoon_team.getUserInfo({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * more_info `boolean`: Get more info for this user
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UserAccount](#useraccount)

### updateUserAccount
### Functional Description:  
Update current user's account.

### Precondition:
Valid auth token.

### Effects:
User updated.

### Further Information:
All input fields are limited to **150** characters.  
Allowed characters: **All**  

### Authentication Method Options

* **SQL**  
    `none`

* **Active Directory**  
    (optional)  
    key: `"ad_config_id"`  
    value: "Active Directory configuration ID"  
    
    key: `"username"`  
    value: "Active Directory user name according to auth setting `userFilter`"

* **RADIUS**  
    key: `"username"`  
    value: "Radius user name"

* **OpenID Connect**  
    key: `"openid_config_id"`  
    value: "OpenID Connect configuration ID"  
    
    key: `"username"`  
    value: "OpenID Connect user name according to auth setting `mappingClaim`"


```js
dracoon_team.updateUserAccount({
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [UpdateUserAccountRequest](#updateuseraccountrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UserAccount](#useraccount)

### getCustomerInfo
### Functional Description:  
Lean API to get: 
* customer name
* used / free space
* used / avaliable
* user account info

of a customer.

### Precondition:
Valid auth token.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getCustomerInfo({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [CustomerData](#customerdata)

### enableCustomerEncryption
### Functional Description:  
Activate client-side encryption for whole customer.

### Precondition:
Only available for _"Config Managers"_.

### Effects:
Client-side encryption is enabled.

### Further Information:
Sets the ability for this customer to encrypt rooms.  
Once enabled on customer level, it cannot be unset.  
On activation, a emergency keypair must be set.


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
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [EnableCustomerEncryptionRequest](#enablecustomerencryptionrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [CustomerData](#customerdata)

### getCustomerKeyPair
### Functional Description:  
Retrieve the customer's keypair (aka system emergency password).

### Precondition:
Valid auth token.

### Effects:
None.

### Further Information:
The private key is password-based encrypted with `AES256` / `PBKDF2`.  
Further details in crypto documentation.


```js
dracoon_team.getCustomerKeyPair({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [UserKeyPairContainer](#userkeypaircontainer)

### deleteUserKeyPair
### Functional Description:  
Delete the user's keypair.

### Precondition:
Valid auth token.

### Effects:
None.

### Further Information:
This will also remove all file keys that were encrypted with the user's public key.  
If the user had exclusive access to some files, those are removed as well since decrypting them became impossible.


```js
dracoon_team.deleteUserKeyPair({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getUserKeyPair
### Functional Description:  
Retrieve the user's keypair.

### Precondition:
Valid auth token.

### Effects:
None.

### Further Information:
The private key is password-based encrypted with `AES256` / `PBKDF2`.  
Further details in crypto documentation.


```js
dracoon_team.getUserKeyPair({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [UserKeyPairContainer](#userkeypaircontainer)

### setUserKeyPair
### Functional Description:  
Set the user's keypair.

### Precondition:
Valid auth token.

### Effects:
The keypair is set.

### Further Information:
Overwriting an existing keypair is not possible.  
Please delete the existing keypair first.  
The private key is password-based encrypted with `AES256` / `PBKDF2`.  
Further details in crypto documentation.


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
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [UserKeyPairContainer](#userkeypaircontainer)
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### changeUserPassword
### Functional Description:
Change the user's password.

### Precondition:
Valid auth token.

### Effects:
Password is changed.

### Further Information:
Password security configuration applies.


```js
dracoon_team.changeUserPassword({
  "body": {
    "newPassword": "",
    "oldPassword": ""
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ChangeUserPasswordRequest](#changeuserpasswordrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
*Output schema unknown*

### userLogout
### Functional Description:  
Logout a user.

### Precondition:
Valid authentication token.

### Effects:
User is logged out, authentication token invalidated.

### Further Information:
None.


```js
dracoon_team.userLogout({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * everywhere `boolean`: Invalidate all tokens
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getOAuthAuthorizations
### Functional Description:  
Retrieve info about all OAuth client authorizations.

### Precondition:
Valid auth token.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getOAuthAuthorizations({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output `array`
  * items [OAuthAuthorization](#oauthauthorization)

### deleteOAuthAuthorization
### Functional Description:
Delete authorizations of an OAuth client.

### Precondition:
Valid auth token; valid client ID.

### Effects:
Authorizations for OAuth client are revoked.

### Further Information:
None.


```js
dracoon_team.deleteOAuthAuthorization({
  "client_id": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: OAuth client ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### userPing
### Functional Description:
Test connection to DRACOON Server (while authenticated).

### Precondition:
None.

### Effects:
`200 OK` with principal information is returned if successful.

### Further Information:
None.


```js
dracoon_team.userPing({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output `string`

### getUsers
### Functional Description:  
Get users entry point.  
Returns a list of DRACOON users.

### Precondition:
Right _"read users"_ required.

### Effects:
None.

### Further Information:  
Authentication with `X-Sds-Auth-Token` required.

### Filter

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
Multiple fields are supported.

### Filter fields:

* **login**  
    Login name  
    OPERATOR: `cn` (User login name contains value)  
    VALUE: `Search string`

* **firstName**  
    First name  
    OPERATOR: `cn` (User first name contains value)  
    VALUE: `Search string`

* **lastName**  
    Last name  
    OPERATOR: `cn` (User last name contains value)  
    VALUE: `Search string`

* **lockStatus**  
    Lock status:
    * 0 - Locked
    * 1 - Web access allowed
    * 2 - Web and mobile access allowed  
    
    OPERATOR: `eq` (User lock status)  
    VALUE: `[0|1|2]`.

* **effectiveRoles**  
    Filter users with _DIRECT_ or _DIRECT_ **AND** _EFFECTIVE_ roles  
    * `false`: _DIRECT_ roles  
    * `true`:  _DIRECT_ **AND** _EFFECTIVE_ roles  

    > _DIRECT_ means: e.g. user gets role **directly** granted from someone with _grant permission_ right.  
    _EFFECTIVE_ means: e.g. user gets role through **group membership**.  

    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false]` (default: `false`)

### Logical grouping:
Filtering according first three fields (`login`, `lastName`, `firstName`) is intrinsically processed by the API as logical _OR_.  
In opposite, filtering according to last three field (lockStatus) is processed intrinsically as logical _AND_.

### Example:
* `login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`  
Filter by `login` contains `searchString_1` OR `firstName` contains `searchString_2` AND user are not locked.

### Sort

Sort string syntax: `FIELD_NAME:ORDER`  
Order can be `asc` or `desc`.  
Multiple fields are supported.

### Sort fields:

* **login**: Login name
* **firstName**: First name
* **lastName**: Last name
* **gender**: Gender
* **lockStatus**: User lock status
* **lastLoginSuccessAt**: Last successful logon date
* **expireAt**: Expiration date

### Example:
* `firstName:asc|lastLoginSuccessAt:desc`  
Sort by `firstName` ascending AND by `lastLoginSuccessAt` descending


```js
dracoon_team.getUsers({
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * sort `string`: Sort string
  * include_attributes `boolean`: Include custom user attributes.
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UserList](#userlist)

### createUser
### Functional Description:
Create a new user.

### Precondition:
Right _"change users"_ required.

### Effects:
A new user is created.

### Further Information:

* If a user should not expire, leave `expireAt` empty.
* All input fields are limited to **150** characters
* Allowed characters: **All**

### Authentication Method Options

* **SQL**  
    `none`

* **Active Directory**  
    (optional)  
    key: `"ad_config_id"`  
    value: "Active Directory configuration ID"  
    
    key: `"username"`  
    value: "Active Directory user name according to auth setting `userFilter`"

* **RADIUS**  
    key: `"username"`  
    value: "Radius user name"

* **OpenID Connect**  
    key: `"openid_config_id"`  
    value: "OpenID Connect configuration ID"  
    
    key: `"username"`  
    value: "OpenID Connect user name according to auth setting `mappingClaim`"


```js
dracoon_team.createUser({
  "body": {
    "authMethods": [],
    "firstName": "",
    "lastName": "",
    "login": ""
  },
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * body **required** [CreateUserRequest](#createuserrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UserData](#userdata)

### deleteUser
### Functional Description:
Delete a user.

### Precondition:
Right _"delete users"_ required.

### Effects:
User is deleted.

### Further Information:
User cannot be deleted if he is the last room administrator.


```js
dracoon_team.deleteUser({
  "user_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*

### getUser
### Functional Description:  
Retrieve detailed information about single user.

### Precondition:
Right _"read users"_ required.

### Effects:
None.

### Further Information:
None.

### Authentication Method Options

* **SQL**  
    `none`

* **Active Directory**  
    (optional)  
    key: `"ad_config_id"`  
    value: "Active Directory configuration ID"  
    
    key: `"username"`  
    value: "Active Directory user name according to auth setting `userFilter`"

* **RADIUS**  
    key: `"username"`  
    value: "Radius user name"

* **OpenID Connect**  
    key: `"openid_config_id"`  
    value: "OpenID Connect configuration ID"  
    
    key: `"username"`  
    value: "OpenID Connect user name according to auth setting `mappingClaim`"


```js
dracoon_team.getUser({
  "user_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * effective_roles `boolean`: Effective roles
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UserData](#userdata)

### updateUser
### Functional Description:  
Update the meta data of a user

### Precondition:
Right _"change users"_ required.

### Effects:
Meta data of a user is updated.

### Further Information:

* If a user should not expire, leave `expireAt` empty.
* All input fields are limited to **150** characters
* Allowed characters: **All**

### Authentication Method Options

* **SQL**  
    `none`

* **Active Directory**  
    (optional)  
    key: `"ad_config_id"`  
    value: "Active Directory configuration ID"  
    
    key: `"username"`  
    value: "Active Directory user name according to auth setting `userFilter`"

* **RADIUS**  
    key: `"username"`  
    value: "Radius user name"

* **OpenID Connect**  
    key: `"openid_config_id"`  
    value: "OpenID Connect configuration ID"  
    
    key: `"username"`  
    value: "OpenID Connect user name according to auth setting `mappingClaim`"


```js
dracoon_team.updateUser({
  "user_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * body **required** [UpdateUserRequest](#updateuserrequest)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UserData](#userdata)

### getUserGroups
### Functional Description:  
Retrieves a List of groups a user is member of and / or can become a member.

### Precondition:
Right _"read users"_ required.

### Effects:
None.

### Further Information:
None.

### Filter

### Filter fields:

* **name**  
    Group name  
    OPERATOR: `cn` (multiple values not allowed)  
    VALUE: `search string`

* **isMember**  
    Filter the groups which the user is or is not member of  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `true`)

### Example:
* `is_member:eq:false|name:cn:searchString`  
Get all groups that the user is not member of AND whose `name` is like `searchString`.


```js
dracoon_team.getUserGroups({
  "user_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [UserGroupList](#usergrouplist)

### getUserRoles
### Functional Description:  
Retrieve a list of all roles and the role assignment rights of a user.

### Precondition:
Right _"read users"_ required.

### Effects:
None.

### Further Information:
None.


```js
dracoon_team.getUserRoles({
  "user_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
* output [RoleList](#rolelist)

### getUsersRooms
### Functional Description:  
Retrieves a list of rooms granted to the user and / or that can be granted.

### Precondition:
Right _"read users"_ required.

### Effects:
None.

### Further Information:
None.

### Filter

### Filter fields:

* **name**  
    Room name  
    OPERATOR: `cn` (multiple values not allowed)  
    VALUE: `search string`

* **isGranted**  
    Filter the rooms which the user is or is not granted  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `true`)

* **isLastAdmin**  
    Filter the rooms which the user is last room administrator.  
    Only with connect `isGranted:eq:true` possible.  
    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true]`.

* **effectivePerm**  
    Filter rooms with _DIRECT_ or _DIRECT_ **AND** _EFFECTIVE_ permissions  
    * `false`: _DIRECT_ permissions  
    * `true`:  _DIRECT_ **AND** _EFFECTIVE_ permissions  
    * `any`: _DIRECT_ **AND** _EFFECTIVE_ **AND** _OVER GROUP_ permissions  
    
    > _DIRECT_ means: e.g. room administrator grants read permissions to user **directly** on desired room.  
    _EFFECTIVE_ means: e.g. user gets read permissions on desired room through **inheritance**.  
    _OVER GROUP_ means: e.g. user gets read permissions on desired room through **group membership**.  

    OPERATOR: `eq` (multiple values not allowed)  
    VALUE: `[true|false|any]` (default: `false`)

### Examples:
* `isGranted:eq:false|name:cn:searchString`  
Get all rooms that the user is not granted AND whose `name` is like `searchString`.

* `isGranted:eq:true|isLastAdmin:eq:true|name:cn:searchString`  
Get all rooms that the user is granted AND is last admin AND whose `name` is like `searchString`.


```js
dracoon_team.getUsersRooms({
  "user_id": 0,
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * offset `integer`: Range offset
  * limit `integer`: Range limit
  * filter `string`: Filter string
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [RoomTreeDataList](#roomtreedatalist)

### setAllUserAttributes
### Functional Description:  
Set custom user attributes.

### Precondition:
Right _"change users"_ required.

### Effects:
Custom user attributes gets set.

### Further Information:
Batch function.  
All existing user attributes will be deleted.  
Allowed characters for keys are: `[a-zA-Z0-9_-]`  
Characters are case-insensitive.


```js
dracoon_team.setAllUserAttributes({
  "user_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * body **required** [UserAttributes](#userattributes)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UserData](#userdata)

### setUserAttributes
### Functional Description:  
Set custom user attributes.

### Precondition:
Right _"change users"_ required.

### Effects:
Custom user attributes get added or edited.

### Further Information:
Batch function.  
If an entry exists before, it will be overwritten.  
Allowed characters for keys are: `[a-zA-Z0-9_-]`  
Characters are case-insensitive.


```js
dracoon_team.setUserAttributes({
  "user_id": 0,
  "body": {},
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * body **required** [UserAttributes](#userattributes)
  * X-Sds-Auth-Token **required** `string`: Authentication token
  * X-Sds-Date-Format `string`: Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)):

#### Output
* output [UserData](#userdata)

### deleteUserAttributes
### Functional Description:
Delete custom user attribute.

### Precondition:
Right _"change users"_ required.

### Effects:
Custom user attribute gets deleted.

### Further Information:
Allowed characters for keys are: `[a-zA-Z0-9_-]`  
Characters are case-insensitive.


```js
dracoon_team.deleteUserAttributes({
  "user_id": 0,
  "key": "",
  "X-Sds-Auth-Token": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User ID
  * key **required** `string`: Key
  * X-Sds-Auth-Token **required** `string`: Authentication token

#### Output
*Output schema unknown*



## Definitions

### ActiveDirectory
* ActiveDirectory `object`
  * alias **required** `string`: Unique name for an Active Directory configuration
  * id **required** `integer`: ID
  * isGlobalAvailable **required** `boolean`: Is available for all customers

### ActiveDirectoryAuthInfo
* ActiveDirectoryAuthInfo `object`
  * items **required** `array`: List of available Active Directories
    * items [ActiveDirectory](#activedirectory)

### ActiveDirectoryConfig
* ActiveDirectoryConfig `object`
  * adExportGroup **required** `string`: If 'ad_userimport' is set to true,
  * alias **required** `string`: Unique name for an Active Directory configuration
  * createHomeFolder **required** `boolean`: Determines whether a room is created for each user that is created by automatic import (like a home folder).
  * homeFolderParent `integer`: ID of the room in which the individual rooms for users will be created.
  * id **required** `integer`: ID
  * ldapUsersDomain **required** `string`: Search scope of Active Directory; only users below this node can log on.
  * sdsImportGroup `integer`: User group that is assigned to users who are created by automatic import.
  * serverAdminName **required** `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverIp **required** `string`: IPv4 or IPv6 address or host name
  * serverPort **required** `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps **required** `boolean`: Determines whether LDAPS should be used instead of plain LDAP.
  * userFilter **required** `string`: Name of Active Directory attribute that is used as login name.
  * userImport **required** `boolean`: Determines if an DRACOON account is automatically created for a new user

### ActiveDirectoryConfigList
* ActiveDirectoryConfigList `object`
  * items **required** `array`: List of Active Directory configurations
    * items [ActiveDirectoryConfig](#activedirectoryconfig)

### AuditNodeResponse
* AuditNodeResponse `object`
  * auditUserPermissionList **required** `array`: List of assigned users with permissions
    * items [AuditUserPermission](#audituserpermission)
  * nodeCntChildren **required** `integer`: Number of direct children
  * nodeCreatedAt `string`: Creation date
  * nodeCreatedBy [UserInfo](#userinfo)
  * nodeHasActivitiesLog `boolean`: Is activities log active (for rooms only)
  * nodeHasRecycleBin `boolean`: Is Recycle Bin active (for rooms only)
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
* AuditUserPermission `object`
  * permissions **required** [NodePermissions](#nodepermissions)
  * userFirstName **required** `string`: User first name
  * userId **required** `integer`: Unique identifier for the user
  * userLastName **required** `string`: User last name
  * userLogin **required** `string`: User login name

### AuthInitResources
* AuthInitResources `object`
  * authTypes **required** `array`: Supported authentication types
    * items [KeyValueEntry](#keyvalueentry)
  * languages **required** `array`: Supported languages
    * items [Language](#language)

### AuthMethod
* AuthMethod `object`
  * isEnabled **required** `boolean`: Is enabled
  * name **required** `string`: Name
  * priority **required** `integer`: Priority

### BrandingServerInfo
* BrandingServerInfo `object`
  * brandingServerBrandingId **required** `string`: UUID of Branding
  * brandingServerCustomer **required** `string`: Branding server customer UUID
  * brandingServerUrl `string`: Branding server URL

### ChangeGroupMembersRequest
* ChangeGroupMembersRequest `object`
  * ids **required** `array`: List of group IDs
    * items `integer`

### ChangeUserPasswordRequest
* ChangeUserPasswordRequest `object`
  * newPassword **required** `string`: New password
  * oldPassword **required** `string`: Old password

### ChunkUploadResponse
* ChunkUploadResponse `object`
  * hash **required** `string`: Hash value of transferred chunk
  * size **required** `integer`: Chunk size

### CompleteUploadRequest
* CompleteUploadRequest `object`
  * fileKey [FileKey](#filekey)
  * fileName `string`: New file name to store with
  * keepShareLinks `boolean`: Preserve Download Share Links and point them to the new node.
  * resolutionStrategy `string` (values: autorename, overwrite, fail): Node conflict resolution strategy:
  * userFileKeyList [UserFileKeyList](#userfilekeylist)

### ConfigOptionList
* ConfigOptionList `object`
  * items **required** `array`: List of key-value pairs
    * items [KeyValueEntry](#keyvalueentry)

### ConfigRoomRequest
* ConfigRoomRequest `object`
  * adminGroupIds `array`: List of group ids
    * items `integer`
  * adminIds `array`: List of user ids
    * items `integer`
  * hasActivitiesLog `boolean`: Is activities log active (for rooms only)
  * hasRecycleBin `boolean`: Is Recycle Bin active (for rooms only)
  * inheritPermissions `boolean`: Inherit permissions from parent room
  * newGroupMemberAcceptance `string`: Behaviour when new users are added to the group:
  * recycleBinRetentionPeriod `integer`: Retention period for deleted nodes in days
  * takeOverPermissions `boolean`: Take over existing permissions

### ConflictNode
* ConflictNode `object`
  * errorCode `integer`: Error code
  * errorMessage `string`: Error message
  * name `string`: Name
  * nodeId `integer`: Node ID

### CopyNode
* CopyNode `object`
  * id **required** `integer`: Source node ID
  * name `string`: New node name

### CopyNodesRequest
* CopyNodesRequest `object`
  * items `array`: List of nodes to be copied
    * items [CopyNode](#copynode)
  * keepShareLinks `boolean`: Preserve Download Share Links and point them to the new node.
  * nodeIds `array`: DEPRECATED: Node IDs; use 'items' attribute
    * items `integer`
  * resolutionStrategy `string` (values: autorename, overwrite, fail): Node conflict resolution strategy:

### CreateActiveDirectoryConfigRequest
* CreateActiveDirectoryConfigRequest `object`
  * adExportGroup `string`: If 'ad_userimport' is set to true,
  * alias **required** `string`: Unique name for an Active Directory configuration
  * createHomeFolder `boolean`: Determines whether a room is created for each user that is created by automatic import (like a home folder).
  * homeFolderParent `integer`: ID of the room in which the individual rooms for users will be created.
  * ldapUsersDomain **required** `string`: Search scope of Active Directory; only users below this node can log on.
  * sdsImportGroup `integer`: User group that is assigned to users who are created by automatic import.
  * serverAdminName **required** `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverAdminPassword **required** `string`: Password of Active Directory administrative account
  * serverIp **required** `string`: IPv4 or IPv6 address or host name
  * serverPort **required** `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps **required** `boolean`: Determines whether LDAPS should be used instead of plain LDAP.
  * userFilter **required** `string`: Name of Active Directory attribute that is used as login name.
  * userImport **required** `boolean`: Determines if an DRACOON account is automatically created for a new user

### CreateDownloadShareRequest
* CreateDownloadShareRequest `object`
  * expiration [ObjectExpiration](#objectexpiration)
  * fileId **required** `integer`: Source file ID
  * fileKey [FileKey](#filekey)
  * keyPair [UserKeyPairContainer](#userkeypaircontainer)
  * mailBody `string`: Notification email content
  * mailRecipients `string`: CSV string of recipient emails
  * mailSubject `string`: Notification email subject
  * maxDownloads `integer`: Max allowed downloads
  * name `string`: Alias name
  * nodeId **required** `integer`: Source node ID
  * notes `string`: User notes
  * notifyCreator `boolean`: Notify creator on every download.
  * password `string`: Access password, not allowed for encrypted shares
  * sendMail `boolean`: Notify recipients
  * sendSms `boolean`: Send share password via SMS
  * showCreatorName `boolean`: Show creator first and last name
  * showCreatorUsername `boolean`: Show creator email address
  * smsRecipients `string`: CSV string of recipient MSISDNS

### CreateFileUploadRequest
* CreateFileUploadRequest `object`
  * classification **required** `integer`: Classification ID (for files only):
  * expiration [ObjectExpiration](#objectexpiration)
  * name **required** `string`: File name
  * notes `string`: User notes
  * parentId **required** `integer`: Parent node ID (room or folder)
  * size `integer`: File size in byte

### CreateFileUploadResponse
* CreateFileUploadResponse `object`
  * token **required** `string`: DEPRECATED: Upload token
  * uploadId **required** `string`: Upload (channel) ID
  * uploadUrl `string`: (public) Upload URL

### CreateFolderRequest
* CreateFolderRequest `object`
  * name **required** `string`: Name
  * notes `string`: User notes
  * parentId **required** `integer`: Parent node ID (room or folder)

### CreateGroupRequest
* CreateGroupRequest `object`
  * expiration [ObjectExpiration](#objectexpiration)
  * name **required** `string`: Group name

### CreateOAuthClientRequest
* CreateOAuthClientRequest `object`
  * accessTokenValidity `integer`: Validity of the access token in seconds.
  * clientId **required** `string`: ID of the OAuth client
  * clientSecret `string`: Secret, which uses the client for authentication.
  * grantTypes **required** `array`: Authorized grant types
    * items `string`
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`
  * redirectUrl `string`: DEPRECATED: URL, to which a user is redirected after authorization.
  * refreshTokenValidity `integer`: Validity of the refresh token in seconds.

### CreateOpenIdIdpConfigRequest
* CreateOpenIdIdpConfigRequest `object`
  * authorizationEndPointUrl **required** `string`: URL of the authorization endpoint
  * clientId **required** `string`: ID of the OAuth client
  * clientSecret **required** `string`: Secret, which uses the client for authentication.
  * fallbackMappingClaim `string`: Name of the claim which is used for the user mapping fallback.
  * issuer **required** `string`: Issuer identifier of the IDP
  * jwksEndPointUrl **required** `string`: URL of the JWKS endpoint
  * mappingClaim **required** `string`: Name of the claim which is used for the user mapping.
  * name **required** `string`: Name of the IDP
  * pkceChallengeMethod `string`: PKCE code challenge method.
  * pkceEnabled `boolean`: Determines whether PKCE is enabled.
  * redirectUris **required** `array`: URIs, to which a user is redirected after authorization.
    * items `string`
  * scopes **required** `array`: List of requested scopes
    * items `string`
  * tokenEndPointUrl **required** `string`: URL of the token endpoint
  * userInfoEndPointUrl **required** `string`: URL of the user info endpoint
  * userUpdateEnabled `boolean`: Determines if the user metadata is updated with data from the IDP.

### CreateRoomRequest
* CreateRoomRequest `object`
  * adminGroupIds `array`: List of group ids
    * items `integer`
  * adminIds `array`: List of user ids
    * items `integer`
  * hasActivitiesLog `boolean`: Is activities log active (for rooms only)
  * hasRecycleBin `boolean`: Is Recycle Bin active (for rooms only)
  * inheritPermissions `boolean`: Inherit permissions from parent room
  * name **required** `string`: Name
  * newGroupMemberAcceptance `string`: Behaviour when new users are added to the group:
  * notes `string`: User notes
  * parentId `integer`: Parent room ID or 'null' to create a top level room
  * quota `integer`: Quota in byte
  * recycleBinRetentionPeriod `integer`: Retention period for deleted nodes in days

### CreateShareUploadChannelRequest
* CreateShareUploadChannelRequest `object`
  * name **required** `string`: File name
  * password `string`: Password
  * size `integer`: File size in byte

### CreateShareUploadChannelResponse
* CreateShareUploadChannelResponse `object`
  * token `string`: DEPRECATED: Upload token
  * uploadId **required** `string`: Upload (channel) ID
  * uploadUrl **required** `string`: (public) Upload URL

### CreateUploadShareRequest
* CreateUploadShareRequest `object`
  * expiration [ObjectExpiration](#objectexpiration)
  * filesExpiryPeriod `integer`: Number of days after which uploaded files expire
  * mailBody `string`: Notification email content
  * mailRecipients `string`: CSV string of recipient emails
  * mailSubject `string`: Notification email subject
  * maxSize `integer`: DEPRECATED: Maximal total size of uploaded files (in bytes)
  * maxSlots `integer`: DEPRECATED: Maximal amount of files to upload
  * name **required** `string`: Alias name
  * notes `string`: User notes
  * notifyCreator `boolean`: Notify creator on every upload.
  * password `string`: Password
  * sendMail `boolean`: Notify recipients
  * sendSms `boolean`: Send share password via SMS
  * showUploadedFiles `boolean`: Allow display of already uploaded files
  * smsRecipients `string`: CSV string of recipient MSISDNS
  * targetId **required** `integer`: Target room or folder ID

### CreateUserRequest
* CreateUserRequest `object`
  * authMethods **required** `array`: Authentication methods
    * items [UserAuthMethod](#userauthmethod)
  * email `string`: DEPRECATED: Email
  * expiration [ObjectExpiration](#objectexpiration)
  * firstName **required** `string`: User first name
  * gender `string` (values: m, f, n): Gender
  * lastName **required** `string`: User last name
  * login **required** `string`: User login name
  * title `string`: Job title

### Customer
* Customer `object`
  * activationCode `string`: Customer activation code string:
  * companyName **required** `string`: Company name
  * createdAt **required** `string`: Creation date
  * customerAttributes [CustomerAttributes](#customerattributes)
  * customerContractType **required** `string` (values: free, demo, pay): Customer type
  * id **required** `integer`: Unique identifier for the customer
  * lastLoginAt `string`: Date of last seen login for the customer
  * lockStatus **required** `boolean`: Lock status:
  * providerCustomerId `string`: Provider customer ID value (relevant only for type 'pay')
  * quotaMax **required** `integer`: Maximal disc space which can be allocated by customer in bytes.
  * quotaUsed **required** `integer`: Used amount of disc space in bytes
  * trialDaysLeft `integer`: Number of days left for trial period (relevant only for type demo)
  * updatedAt `string`: Modification date
  * userMax **required** `integer`: Maximal number of users
  * userUsed **required** `integer`: Number of users which are already allocated.

### CustomerAttributes
* CustomerAttributes `object`
  * items `array`: List of customer attributes
    * items [KeyValueEntry](#keyvalueentry)

### CustomerData
* CustomerData `object`
  * accountsLimit **required** `integer`: User accounts limit
  * accountsUsed **required** `integer`: User accounts used
  * cntFiles `integer`: Total number of files
  * cntFolders `integer`: Total number of folders
  * cntRooms `integer`: Total number of rooms
  * customerEncryptionEnabled **required** `boolean`: Clientside encryption for customer enabled
  * id **required** `integer`: Unique identifier for the customer
  * isProviderCustomer **required** `boolean`: Customer is Provider Customer
  * name **required** `string`: Customer name
  * spaceLimit **required** `integer`: Space limit (in bytes)
  * spaceUsed **required** `integer`: Space used (in bytes)

### CustomerList
* CustomerList `object`
  * items **required** `array`: List of customers
    * items [Customer](#customer)
  * range **required** [Range](#range)

### DeleteDeletedNodesRequest
* DeleteDeletedNodesRequest `object`
  * deletedNodeIds **required** `array`: List of deleted node IDs
    * items `integer`

### DeleteNodesRequest
* DeleteNodesRequest `object`
  * nodeIds **required** `array`: List of node IDs
    * items `integer`

### DeletedNode
* DeletedNode `object`
  * accessedAt `string`: Last access date
  * classification `integer`: Classification ID (for files only):
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
  * s3Key [UserInfo](#userinfo)
  * size `integer`: Node size in byte
  * type **required** `string` (values: room, folder): Node type
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### DeletedNodeSummary
* DeletedNodeSummary `object`
  * cntVersions **required** `integer`: Number of deleted versions of this file
  * firstDeletedAt **required** `string`: First deleted version
  * lastDeletedAt **required** `string`: Last deleted version
  * lastDeletedNodeId **required** `integer`: Node ID of last deleted version
  * name **required** `string`: Node name
  * parentId **required** `integer`: Parent node ID (room or folder)
  * parentPath **required** `string`: Parent node path
  * type **required** `string` (values: room, folder): Node type

### DeletedNodeSummaryList
* DeletedNodeSummaryList `object`
  * items **required** `array`: List of deleted nodes (summary)
    * items [DeletedNodeSummary](#deletednodesummary)
  * range **required** [Range](#range)

### DeletedNodeVersionsList
* DeletedNodeVersionsList `object`
  * items **required** `array`: List of deleted nodes
    * items [DeletedNode](#deletednode)
  * range **required** [Range](#range)

### DownloadShare
* DownloadShare `object`
  * accessKey **required** `string`: Share access key to generate secure link
  * classification `integer`: Classification ID (for files only):
  * cntDownloads **required** `integer`: Downloads counter (incremented on each download)
  * createdAt **required** `string`: Creation date
  * createdBy **required** [UserInfo](#userinfo)
  * dataUrl `string`: Path to shared download node
  * expireAt `string`: Expiration date
  * id **required** `integer`: Share ID
  * isEncrypted `boolean`: Encrypted share
  * isProtected `boolean`: Is share protected by password
  * maxDownloads `integer`: Max allowed downloads
  * name `string`: Alias name
  * nodeId **required** `integer`: Source node ID
  * nodePath `string`: Path to shared download node
  * notes `string`: User notes
  * notifyCreator **required** `boolean`: Notify creator on every download.
  * recipients `string`: CSV string of recipient emails
  * showCreatorName `boolean`: Show creator first and last name
  * showCreatorUsername `boolean`: Show creator email address
  * smsRecipients `string`: CSV string of recipient MSISDNS

### DownloadShareList
* DownloadShareList `object`
  * items **required** `array`: List of Download Shares
    * items [DownloadShare](#downloadshare)
  * range **required** [Range](#range)

### DownloadTokenGenerateResponse
* DownloadTokenGenerateResponse `object`
  * downloadUrl `string`: Download URL
  * token **required** `string`: DEPRECATED: Download token

### EnableCustomerEncryptionRequest
* EnableCustomerEncryptionRequest `object`
  * dataSpaceRescueKey **required** [UserKeyPairContainer](#userkeypaircontainer)
  * enableCustomerEncryption **required** `boolean`: Set 'true' to enable encryption for this customer

### EncryptRoomRequest
* EncryptRoomRequest `object`
  * dataRoomRescueKey [UserKeyPairContainer](#userkeypaircontainer)
  * isEncrypted **required** `boolean`: Encryption state
  * useDataSpaceRescueKey `boolean`: Use system emergency password for files in this room

### EncryptionInfo
* EncryptionInfo `object`
  * dataSpaceKeyState **required** `string` (values: none, pending, available): DRACOON key state
  * roomKeyState **required** `string` (values: none, pending, available): Room key state
  * userKeyState **required** `string` (values: none, pending, available): User key state

### ErrorResponse
* ErrorResponse `object`
  * code `integer`: HTTP status code
  * debugInfo `string`: Debug information
  * errorCode `integer`: Error code
  * message `string`: HTTP status code description

### FailoverServer
* FailoverServer `object`
  * failoverEnabled **required** `boolean`: RADIUS Failover Server is active
  * failoverIpAddress `string`: RADIUS Failover Server IP Address
  * failoverPort `integer`: RADIUS Failover Server Port

### FileFileKeys
* FileFileKeys `object`
  * fileKeyContainer [FileKeyContainer](#filekeycontainer)
  * id `integer`: File ID

### FileKey
* FileKey `object`
  * iv **required** `string`: Initial vector
  * key **required** `string`: Encryption key
  * tag **required** `string`: Authentication tag
  * version **required** `string`: Version

### FileKeyContainer
* FileKeyContainer `object`
  * iv **required** `string`: Initial vector
  * key **required** `string`: Encryption key
  * tag `string`: Authentication tag
  * version **required** `string`: Version

### FirstAdminUser
* FirstAdminUser `object`
  * authMethods `array`: Authentication methods
    * items [UserAuthMethod](#userauthmethod)
  * email `string`: DEPRECATED: Email
  * firstName **required** `string`: User first name
  * gender `string` (values: m, f, n): Gender
  * language `string`: Language ID or ISO 639-1 code
  * lastName **required** `string`: User last name
  * login **required** `string`: User login name
  * needsToChangeUserName `boolean`: If true, the user must change the 'userName' at the first login
  * notifyUser `boolean`: Notify user about his new account
  * password `string`: An initial password may be preset
  * title `string`: Job title

### Group
* Group `object`
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
* GroupIds `object`
  * ids **required** `array`: List of group IDs
    * items `integer`

### GroupList
* GroupList `object`
  * items **required** `array`: List of groups
    * items [Group](#group)
  * range **required** [Range](#range)

### GroupUser
* GroupUser `object`
  * displayName **required** `string`: Display name
  * email **required** `string`: DEPRECATED: Email
  * id **required** `integer`: Unique identifier for the user
  * isMember **required** `boolean`: Is group member
  * login **required** `string`: User login name

### GroupUserList
* GroupUserList `object`
  * items **required** `array`: List of group-user mappings
    * items [GroupUser](#groupuser)
  * range **required** [Range](#range)

### InputStream
* InputStream `object`

### KeyValueEntry
* KeyValueEntry `object`
  * key **required** `string`: Entry key
  * value **required** `string`: Entry value

### Language
* Language `object`
  * description **required** `string`: Description
  * isoCode **required** `string`: ISO 639-1 code
  * languageId **required** `integer`: Language ID

### LogEvent
* LogEvent `object`
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
  * status `integer`: Operation status:
  * time **required** `string`: Event timestamp
  * userClient `string`: Client
  * userId **required** `integer`: Unique identifier for the user
  * userIp `string`: User IP
  * userName `string`: User name

### LogEventList
* LogEventList `object`
  * items **required** `array`: List of log events
    * items [LogEvent](#logevent)
  * range **required** [Range](#range)

### LogOperationList
* LogOperationList `object`
  * operationList **required** `string`: List of all log operations

### LoginRequest
* LoginRequest `object`
  * authType `string`: Authentication type code
  * language `string`: Language ID or ISO 639-1 code
  * login **required** `string`: User login name
  * password **required** `string`: Password
  * state `string`: For RADIUS Access-Challenge
  * token `string`: Token

### LoginResponse
* LoginResponse `object`
  * token **required** `string`: Authentication token

### MissingKeysResponse
* MissingKeysResponse `object`
  * files `array`: List of file keys
    * items [FileFileKeys](#filefilekeys)
  * items `array`: List of user ID and file ID mappings
    * items [UserIdFileIdItem](#useridfileiditem)
  * range [Range](#range)
  * users `array`: List of user public keys
    * items [UserUserPublicKey](#useruserpublickey)

### MoveNode
* MoveNode `object`
  * id **required** `integer`: Source node ID
  * name `string`: New node name

### MoveNodesRequest
* MoveNodesRequest `object`
  * items `array`: List of nodes to be moved
    * items [MoveNode](#movenode)
  * keepShareLinks `boolean`: Preserve Download Share Links and point them to the new node.
  * nodeIds `array`: DEPRECATED: Node IDs; use 'items' attribute
    * items `integer`
  * resolutionStrategy `string` (values: autorename, overwrite, fail): Node conflict resolution strategy:

### NewCustomerRequest
* NewCustomerRequest `object`
  * activationCode `string`: Customer activation code string:
  * companyName `string`: Company name
  * customerAttributes [CustomerAttributes](#customerattributes)
  * customerContractType **required** `string` (values: free, demo, pay): Customer type
  * firstAdminUser **required** [FirstAdminUser](#firstadminuser)
  * lockStatus `boolean`: Lock status:
  * providerCustomerId `string`: Provider customer ID value (relevant only for type 'pay')
  * quotaMax **required** `integer`: Maximal disc space which can be allocated by customer in bytes.
  * trialDays `integer`: Number of days left for trial period (relevant only for type demo)
  * userMax **required** `integer`: Maximal number of users

### NewCustomerResponse
* NewCustomerResponse `object`
  * activationCode `string`: Customer activation code string:
  * companyName **required** `string`: Company name
  * createdAt `string`: Creation date
  * customerAttributes [CustomerAttributes](#customerattributes)
  * customerContractType **required** `string` (values: free, demo, pay): Customer type
  * firstAdminUser **required** [FirstAdminUser](#firstadminuser)
  * id `integer`: Unique identifier for the customer
  * lockStatus **required** `boolean`: Lock status:
  * providerCustomerId `string`: Provider customer ID value (relevant only for type 'pay')
  * quotaMax **required** `integer`: Maximal disc space which can be allocated by customer in bytes.
  * trialDays `integer`: Number of days left for trial period (relevant only for type demo)
  * userMax **required** `integer`: Maximal number of users

### Node
* Node `object`
  * branchVersion `integer`: Version of last change in this node or a node further down the tree.
  * children `array`: Child nodes list (if requested)
    * items [Node](#node)
  * classification `integer`: Classification ID (for files only):
  * cntAdmins `integer`: DEPRECATED: Number of admins (for rooms only)
  * cntChildren `integer`: Number of direct children
  * cntDeletedVersions `integer`: Number of deleted versions of this file/folder
  * cntDownloadShares `integer`: Returns the number of Download Shares of this node.
  * cntUploadShares `integer`: Returns the number of Upload Shares of this node.
  * cntUsers `integer`: DEPRECATED: Number of users (for rooms only)
  * createdAt `string`: Creation date
  * createdBy [UserInfo](#userinfo)
  * encryptionInfo [EncryptionInfo](#encryptioninfo)
  * expireAt `string`: Expiration date
  * fileType `string`: File type/extension (for files only)
  * hasActivitiesLog `boolean`: Is activities log active (for rooms only)
  * hasRecycleBin `boolean`: Is Recycle Bin active (for rooms only)
  * hash `string`: MD5 hash of file
  * id **required** `integer`: Node ID
  * inheritPermissions `boolean`: Inherit permissions from parent room
  * isEncrypted `boolean`: Encryption state
  * isFavorite `boolean`: Node is marked as favorite (for rooms/folders only)
  * mediaToken `string`: Media server media token
  * mediaType `string`: File media type (for files only)
  * name **required** `string`: Name
  * notes `string`: User notes
  * parentId `integer`: Parent node ID (room or folder)
  * parentPath `string`: Parent node path
  * permissions [NodePermissions](#nodepermissions)
  * quota `integer`: Quota in byte
  * recycleBinRetentionPeriod `integer`: Retention period for deleted nodes in days
  * s3Key `string`: S3 key
  * size `integer`: Node size in byte
  * type **required** `string` (values: room, folder, file): Node type
  * updatedAt `string`: Modification date
  * updatedBy [UserInfo](#userinfo)

### NodeBatchOperationErrorInfos
* NodeBatchOperationErrorInfos `object`
  * conflictNodes **required** `array`: List of nodes that caused a conflict
    * items [ConflictNode](#conflictnode)

### NodeBatchOperationErrorResponse
* NodeBatchOperationErrorResponse `object`
  * code `integer`: HTTP status code
  * debugInfo `string`: Debug information
  * errorCode `integer`: Error code
  * errorInfos **required** [NodeBatchOperationErrorInfos](#nodebatchoperationerrorinfos)
  * message `string`: HTTP status code description

### NodeList
* NodeList `object`
  * items **required** `array`: List of nodes
    * items [Node](#node)
  * range **required** [Range](#range)

### NodePermissions
* NodePermissions `object`
  * change **required** `boolean`: User/Group may update meta data of nodes: rename files and folders, change classification, etc.
  * create **required** `boolean`: User/Group may upload files, create folders and copy/move files to this room, overwriting is not possible.
  * delete **required** `boolean`: User/Group may overwrite and remove files/folders, move files from this room.
  * deleteRecycleBin **required** `boolean`: User/Group may permanently remove files/folders from the Recycle Bin.
  * manage **required** `boolean`: User/Group may grant all of the above permissions to other users and groups independently,
  * manageDownloadShare **required** `boolean`: User/Group may create Download Shares for files and containers view all previously created Download Shares in this room.
  * manageUploadShare **required** `boolean`: User/Group may create Upload Shares for containers, view all previously created Upload Shares in this room.
  * read **required** `boolean`: User/Group may see all rooms, files and folders in the room and download everything, copy files from this room.
  * readRecycleBin **required** `boolean`: User/Group may look up files/folders in the Recycle Bin.
  * restoreRecycleBin **required** `boolean`: User/Group may restore files/folders from Recycle Bin – room permissions required.

### NotRestoredNode
* NotRestoredNode `object`
  * id `integer`: Not restored node ID
  * name **required** `string`: Node name
  * parentId **required** `integer`: Parent node ID (room or folder)
  * parentPath **required** `string`: Parent node path
  * type **required** `string` (values: room, folder): Node type

### NotRestoredNodeList
* NotRestoredNodeList `object`
  * items **required** `array`: List of not restored nodes
    * items [NotRestoredNode](#notrestorednode)

### OAuthAuthorization
* OAuthAuthorization `object`
  * clientId **required** `string`: ID of the OAuth client
  * expiresAt `string`: Expiration date of the authorization

### OAuthClient
* OAuthClient `object`
  * accessTokenValidity `integer`: Validity of the access token in seconds.
  * clientId **required** `string`: ID of the OAuth client
  * clientSecret `string`: Secret, which uses the client for authentication.
  * grantTypes `array`: Authorized grant types
    * items `string`
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`
  * redirectUrl `string`: DEPRECATED: URL, to which a user is redirected after authorization.
  * refreshTokenValidity `integer`: Validity of the refresh token in seconds.

### ObjectExpiration
* ObjectExpiration `object`
  * enableExpiration **required** `boolean`: enabled/disabled
  * expireAt `string`: Expiration date

### OpenIdAuthInfo
* OpenIdAuthInfo `object`
  * items **required** `array`: List of available OpenID Connect identity providers
    * items [OpenIdProvider](#openidprovider)

### OpenIdAuthResources
* OpenIdAuthResources `object`
  * openIdProviders **required** `array`: List of available OpenID Connect identity providers
    * items [OpenIdProvider](#openidprovider)

### OpenIdIdpConfig
* OpenIdIdpConfig `object`
  * authorizationEndPointUrl `string`: URL of the authorization endpoint
  * clientId `string`: ID of the OAuth client
  * clientSecret `string`: Secret, which uses the client for authentication.
  * fallbackMappingClaim `string`: Name of the claim which is used for the user mapping fallback.
  * id **required** `integer`: ID
  * issuer `string`: Issuer identifier of the IDP
  * jwksEndPointUrl `string`: URL of the JWKS endpoint
  * mappingClaim `string`: Name of the claim which is used for the user mapping.
  * name `string`: Name of the IDP
  * pkceChallengeMethod `string`: PKCE code challenge method.
  * pkceEnabled `boolean`: Determines whether PKCE is enabled.
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`
  * scopes `array`: List of requested scopes
    * items `string`
  * tokenEndPointUrl `string`: URL of the token endpoint
  * userInfoEndPointUrl `string`: URL of the user info endpoint
  * userUpdateEnabled `boolean`: Determines if the user metadata is updated with data from the IDP.

### OpenIdProvider
* OpenIdProvider `object`
  * id **required** `integer`: ID
  * isGlobalAvailable `boolean`: Is available for all customers
  * issuer **required** `string`: Issuer identifier of the IDP
  * mappingClaim **required** `string`: Name of the claim which is used for the user mapping.
  * name **required** `string`: Name of the IDP

### PendingAssignment
* PendingAssignment `object`
  * groupId **required** `integer`: Unique identifier for the group
  * roomId **required** `integer`: Room ID
  * state **required** `string`: Acceptance state:
  * userId **required** `integer`: Unique identifier for the user

### PendingAssignmentData
* PendingAssignmentData `object`
  * groupId `integer`: DEPRECATED: Unique identifier for the group
  * pendingGroupData **required** [PendingGroupData](#pendinggroupdata)
  * pendingUserData **required** [PendingUserData](#pendinguserdata)
  * roomId **required** `integer`: Room ID
  * state **required** `string`: Acceptance state:
  * userId `integer`: DEPRECATED: Unique identifier for the user

### PendingAssignmentList
* PendingAssignmentList `object`
  * items **required** `array`: List of pending assignment information
    * items [PendingAssignmentData](#pendingassignmentdata)
  * range [Range](#range)

### PendingAssignmentsRequest
* PendingAssignmentsRequest `object`
  * items **required** `array`: List of pending assignments
    * items [PendingAssignment](#pendingassignment)

### PendingGroupData
* PendingGroupData `object`
  * id **required** `integer`: Unique identifier for the group
  * name **required** `string`: Group name

### PendingUserData
* PendingUserData `object`
  * displayName **required** `string`: Display name
  * email **required** `string`: DEPRECATED: Email
  * id **required** `integer`: Unique identifier for the user
  * login **required** `string`: User login name

### PrivateKeyContainer
* PrivateKeyContainer `object`
  * privateKey **required** `string`: Private key
  * version **required** `string`: Version

### PublicDownloadShare
* PublicDownloadShare `object`
  * createdAt **required** `string`: Creation date
  * creatorName **required** `string`: Creator name
  * creatorUsername `string`: Creator user name
  * expireAt `string`: Expiration date
  * fileKey [FileKey](#filekey)
  * fileName **required** `string`: File name
  * isEncrypted `boolean`: Encryption state
  * isProtected **required** `boolean`: Is share protected by password
  * limitReached **required** `boolean`: Downloads limit reached
  * name `string`: Share display name (alias name)
  * notes `string`: User notes
  * privateKeyContainer [PrivateKeyContainer](#privatekeycontainer)
  * size **required** `integer`: File size or container size not compressed (in bytes)

### PublicDownloadTokenGenerateRequest
* PublicDownloadTokenGenerateRequest `object`
  * password `string`: Password (only for password-protected shares)

### PublicDownloadTokenGenerateResponse
* PublicDownloadTokenGenerateResponse `object`
  * downloadUrl `string`: Download URL
  * token **required** `string`: DEPRECATED: Download token

### PublicKeyContainer
* PublicKeyContainer `object`
  * publicKey **required** `string`: Public key
  * version **required** `string`: Version

### PublicUploadShare
* PublicUploadShare `object`
  * createdAt **required** `string`: Creation date
  * expireAt `string`: Expiration date
  * isEncrypted `boolean`: Encryption state
  * isProtected **required** `boolean`: Is share protected by password
  * maxSize `number`: DEPRECATED: Maximal total size of uploaded files (in bytes)
  * maxSlots **required** `integer`: DEPRECATED: Maximal amount of files to upload
  * name `string`: Share display name (alias name)
  * notes `string`: User notes
  * showUploadedFiles `boolean`: Allow display of already uploaded files
  * uploadedFiles `array`: List of (public) uploaded files
    * items [PublicUploadedFileData](#publicuploadedfiledata)
  * userUserPublicKeyList [UserUserPublicKeyList](#useruserpublickeylist)

### PublicUploadedFileData
* PublicUploadedFileData `object`
  * createdAt **required** `string`: Creation date
  * hash `string`: Hash value of transferred file
  * name **required** `string`: Name
  * size **required** `integer`: File size in byte

### RadiusChallengeResponse
* RadiusChallengeResponse `object`
  * code `integer`: HTTP status code
  * debugInfo `string`: Debug information
  * errorCode `integer`: Error code
  * message `string`: HTTP status code description
  * replyMessage `string`: RADIUS Reply-Message
  * replyState `string`: For RADIUS Access-Challenge

### RadiusConfig
* RadiusConfig `object`
  * failoverServer [FailoverServer](#failoverserver)
  * id **required** `integer`: ID
  * ipAddress **required** `string`: RADIUS Server IP Address
  * name **required** `string`: Name
  * otpPinFirst **required** `boolean`: Sequence order of concatenated PIN and one-time token
  * port **required** `integer`: RADIUS Server Port
  * sharedSecret **required** `string`: Shared Secret to access the RADIUS server

### RadiusConfigCreateRequest
* RadiusConfigCreateRequest `object`
  * failoverServer [FailoverServer](#failoverserver)
  * ipAddress **required** `string`: RADIUS Server IP Address
  * otpPinFirst `boolean`: Sequence order of concatenated PIN and one-time token
  * port **required** `integer`: RADIUS Server Port
  * sharedSecret **required** `string`: Shared Secret to access the RADIUS server

### RadiusConfigUpdateRequest
* RadiusConfigUpdateRequest `object`
  * failoverServer [FailoverServer](#failoverserver)
  * ipAddress **required** `string`: RADIUS Server IP Address
  * otpPinFirst `boolean`: Sequence order of concatenated PIN and one-time token
  * port **required** `integer`: RADIUS Server Port
  * sharedSecret **required** `string`: Shared Secret to access the RADIUS server

### Range
* Range `object`
  * limit **required** `integer`: Range limit
  * offset **required** `integer`: Range offset
  * total **required** `integer`: Total items available

### ResetPasswordRequest
* ResetPasswordRequest `object`
  * language `string`: Language ID or ISO 639-1 code
  * login **required** `string`: User login name

### ResetPasswordTokenValidateResponse
* ResetPasswordTokenValidateResponse `object`
  * allowSystemGlobalWeakPassword `boolean`: Allow weak password
  * firstName **required** `string`: User first name
  * gender `string` (values: m, f, n): Gender
  * lastName **required** `string`: User last name
  * title `string`: Job title

### ResetPasswordWithTokenRequest
* ResetPasswordWithTokenRequest `object`
  * password **required** `string`: New password

### RestoreDeletedNodesRequest
* RestoreDeletedNodesRequest `object`
  * deletedNodeIds **required** `array`: List of deleted node IDs
    * items `integer`
  * keepShareLinks `boolean`: Preserve Download Share Links and point them to the new node.
  * parentId `integer`: Node parent ID
  * resolutionStrategy `string` (values: autorename, overwrite, fail): Node conflict resolution strategy:

### Right
* Right `object`
  * description **required** `string`: Right description
  * id **required** `integer`: Unique identifier for the right
  * name **required** `string`: Right (unique) name

### Role
* Role `object`
  * description **required** `string`: Role description
  * id **required** `integer`: Unique identifier for the role
  * items `array`: List of reachable right over role
    * items [Right](#right)
  * name **required** `string`: Role (unique) name

### RoleGroup
* RoleGroup `object`
  * id **required** `integer`: Unique identifier for the group
  * isMember **required** `boolean`: Is group member of the role
  * name **required** `string`: Group name

### RoleGroupList
* RoleGroupList `object`
  * items **required** `array`: List of role-group mappings
    * items [RoleGroup](#rolegroup)
  * range **required** [Range](#range)

### RoleList
* RoleList `object`
  * items **required** `array`: List of roles
    * items [Role](#role)

### RoleUser
* RoleUser `object`
  * displayName **required** `string`: Display name
  * id **required** `integer`: Unique identifier for the user
  * isMember **required** `boolean`: Is user member of the role

### RoleUserList
* RoleUserList `object`
  * items **required** `array`: List of role-user mappings
    * items [RoleUser](#roleuser)
  * range **required** [Range](#range)

### RoomData
* RoomData `object`
  * children `array`: List of rooms, where this room is a parent (if exist)
    * items [RoomData](#roomdata)
  * cntAdmins `integer`: DEPRECATED: Number of admins (for rooms only)
  * cntDownloadShares `integer`: Returns the number of Download Shares of this node.
  * cntUploadShares `integer`: Returns the number of Upload Shares of this node.
  * cntUsers `integer`: DEPRECATED: Number of users (for rooms only)
  * createdAt `string`: Expiration date
  * createdBy [UserInfo](#userinfo)
  * hasRecycleBin **required** `boolean`: Is Recycle Bin active (for rooms only)
  * id **required** `integer`: Room ID
  * isEncrypted **required** `boolean`: Encryption state
  * isFavorite `boolean`: Node is marked as favorite (for rooms/folders only)
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
* RoomGroup `object`
  * id **required** `integer`: Unique identifier for the group
  * isGranted **required** `boolean`: Is user granted room permissions
  * name **required** `string`: Group name
  * newGroupMemberAcceptance `string`: Behaviour when new users are added to the group:
  * permissions [NodePermissions](#nodepermissions)

### RoomGroupList
* RoomGroupList `object`
  * items **required** `array`: List of room-group mappings
    * items [RoomGroup](#roomgroup)
  * range **required** [Range](#range)

### RoomGroupsAddBatchRequest
* RoomGroupsAddBatchRequest `object`
  * items **required** `array`: List of room-group mappings
    * items [RoomGroupsAddBatchRequestItem](#roomgroupsaddbatchrequestitem)

### RoomGroupsAddBatchRequestItem
* RoomGroupsAddBatchRequestItem `object`
  * id **required** `integer`: Unique identifier for the group
  * newGroupMemberAcceptance `string`: Behaviour when new users are added to the group:
  * permissions **required** [NodePermissions](#nodepermissions)

### RoomGroupsDeleteBatchRequest
* RoomGroupsDeleteBatchRequest `object`
  * ids **required** `array`: List of group IDs
    * items `integer`

### RoomTreeDataList
* RoomTreeDataList `object`
  * items **required** `array`: List of room data information
    * items [RoomData](#roomdata)
  * range **required** [Range](#range)

### RoomUser
* RoomUser `object`
  * displayName **required** `string`: Display name
  * email **required** `string`: DEPRECATED: Email
  * id **required** `integer`: Unique identifier for the user
  * isGranted **required** `boolean`: Is user granted room permissions
  * login **required** `string`: User login name
  * permissions [NodePermissions](#nodepermissions)
  * publicKeyContainer [PublicKeyContainer](#publickeycontainer)

### RoomUserList
* RoomUserList `object`
  * items **required** `array`: List of room-user mappings
    * items [RoomUser](#roomuser)
  * range **required** [Range](#range)

### RoomUsersAddBatchRequest
* RoomUsersAddBatchRequest `object`
  * items **required** `array`: List of room-user mappings
    * items [RoomUsersAddBatchRequestItem](#roomusersaddbatchrequestitem)

### RoomUsersAddBatchRequestItem
* RoomUsersAddBatchRequestItem `object`
  * id **required** `integer`: Unique identifier for the user
  * permissions **required** [NodePermissions](#nodepermissions)

### RoomUsersDeleteBatchRequest
* RoomUsersDeleteBatchRequest `object`
  * ids **required** `array`: List of user IDs
    * items `integer`

### S3Config
* S3Config `object`
  * accessKey **required** `string`: Access key
  * bucketName **required** `string`: S3 bucket name
  * endpointUrl **required** `string`: S3 object storage endpoint URL
  * id **required** `integer`: ID
  * region `string`: S3 region
  * secretKey **required** `string`: Secret to key

### S3ConfigCreateRequest
* S3ConfigCreateRequest `object`
  * accessKey **required** `string`: Access key
  * bucketName **required** `string`: S3 bucket name
  * endpointUrl **required** `string`: S3 object storage endpoint URL
  * region `string`: S3 region
  * secretKey **required** `string`: Secret to key

### S3ConfigUpdateRequest
* S3ConfigUpdateRequest `object`
  * accessKey `string`: Access key
  * bucketName `string`: S3 bucket name
  * endpointUrl `string`: S3 object storage endpoint URL
  * region `string`: S3 region
  * secretKey `string`: Secret to key

### SdsServerTime
* SdsServerTime `object`
  * time `string`: DRACOON server time

### SoftwareVersionData
* SoftwareVersionData `object`
  * buildDate **required** `string`: Build date
  * restApiVersion **required** `string`: REST API version
  * scmRevisionNumber **required** `string`: Revision number e.g. 27575
  * sdsServerVersion **required** `string`: DRACOON server version

### SyslogEvent
* SyslogEvent `object`
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
  * status `integer`: Operation status:
  * time **required** `string`: Event timestamp
  * userClient `string`: Client
  * userId **required** `integer`: Unique identifier for the user
  * userIp `string`: User IP
  * userName `string`: User name

### SyslogEventList
* SyslogEventList `object`
  * items **required** `array`: List of log events
    * items [SyslogEvent](#syslogevent)
  * range **required** [Range](#range)

### SystemInfo
* SystemInfo `object`
  * authMethods **required** `array`: Authentication methods
    * items [AuthMethod](#authmethod)
  * defaultLanguage **required** `string`: System default language

### TestActiveDirectoryConfigRequest
* TestActiveDirectoryConfigRequest `object`
  * ldapUsersDomain **required** `string`: Search scope of Active Directory; only users below this node can log on.
  * serverAdminName **required** `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverAdminPassword **required** `string`: Password of Active Directory administrative account
  * serverIp **required** `string`: IPv4 or IPv6 address or host name
  * serverPort **required** `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps **required** `boolean`: Determines whether LDAPS should be used instead of plain LDAP.

### TestActiveDirectoryConfigResponse
* TestActiveDirectoryConfigResponse `object`
  * ldapUsersDomain **required** `string`: Search scope of Active Directory; only users below this node can log on.
  * serverAdminName **required** `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverAdminPassword **required** `string`: Password of Active Directory administrative account
  * serverIp **required** `string`: IPv4 or IPv6 address or host name
  * serverPort **required** `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps **required** `boolean`: Determines whether LDAPS should be used instead of plain LDAP.

### UpdateActiveDirectoryConfigRequest
* UpdateActiveDirectoryConfigRequest `object`
  * adExportGroup `string`: If 'ad_userimport' is set to true,
  * alias `string`: Alias name
  * createHomeFolder `boolean`: Determines whether a room is created for each user that is created by automatic import (like a home folder).
  * homeFolderParent `integer`: ID of the room in which the individual rooms for users will be created.
  * ldapUsersDomain `string`: Search scope of Active Directory; only users below this node can log on.
  * sdsImportGroup `integer`: User group that is assigned to users who are created by automatic import.
  * serverAdminName `string`: Distinguished Name (DN) of Active Directory administrative account
  * serverAdminPassword `string`: Password of Active Directory administrative account
  * serverIp `string`: IPv4 or IPv6 address or host name
  * serverPort `integer`: Port
  * sslFingerPrint `string`: SSL finger print of Active Directory server.
  * useLdaps `boolean`: Determines whether LDAPS should be used instead of plain LDAP.
  * userFilter `string`: Name of Active Directory attribute that is used as login name.
  * userImport `boolean`: Determines if an DRACOON account is automatically created for a new user

### UpdateCustomerRequest
* UpdateCustomerRequest `object`
  * companyName `string`: Company name
  * customerContractType `string` (values: free, demo, pay): Customer type
  * lockStatus `boolean`: Lock status:
  * providerCustomerId `string`: Provider customer ID value (relevant only for type 'pay')
  * quotaMax `integer`: Maximal disc space which can be allocated by customer in bytes.
  * userMax `integer`: Maximal number of users

### UpdateCustomerResponse
* UpdateCustomerResponse `object`
  * activationCode `string`: Customer activation code string:
  * companyName **required** `string`: Company name
  * createdAt `string`: Creation date
  * customerAttributes [CustomerAttributes](#customerattributes)
  * customerContractType **required** `string` (values: free, demo, pay): Customer type
  * id **required** `integer`: Unique identifier for the customer
  * lockStatus **required** `boolean`: Lock status:
  * providerCustomerId `string`: Provider customer ID value (relevant only for type 'pay')
  * quotaMax **required** `integer`: Maximal disc space which can be allocated by customer in bytes.
  * trialDays `integer`: Number of days left for trial period (relevant only for type demo)
  * userMax **required** `integer`: Maximal number of users

### UpdateFileRequest
* UpdateFileRequest `object`
  * classification `integer`: Expiration date/time
  * expiration [ObjectExpiration](#objectexpiration)
  * name `string`: File name
  * notes `string`: User notes

### UpdateFolderRequest
* UpdateFolderRequest `object`
  * name `string`: Folder name
  * notes `string`: User notes

### UpdateGroupRequest
* UpdateGroupRequest `object`
  * expiration [ObjectExpiration](#objectexpiration)
  * name `string`: Group name

### UpdateOAuthClientRequest
* UpdateOAuthClientRequest `object`
  * accessTokenValidity `integer`: Validity of the access token in seconds.
  * clientSecret `string`: Secret, which uses the client for authentication.
  * grantTypes `array`: Authorized grant types
    * items `string`
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`
  * redirectUrl `string`: DEPRECATED: URL, to which a user is redirected after authorization.
  * refreshTokenValidity `integer`: Validity of the refresh token in seconds.

### UpdateOpenIdIdpConfigRequest
* UpdateOpenIdIdpConfigRequest `object`
  * authorizationEndPointUrl `string`: URL of the authorization endpoint
  * clientId `string`: ID of the OAuth client
  * clientSecret `string`: Secret, which uses the client for authentication.
  * fallbackMappingClaim `string`: Name of the claim which is used for the user mapping fallback.
  * issuer `string`: Issuer identifier of the IDP
  * jwksEndPointUrl `string`: URL of the JWKS endpoint
  * mappingClaim `string`: Name of the claim which is used for the user mapping.
  * name `string`: Name of the IDP
  * pkceChallengeMethod `string`: PKCE code challenge method.
  * pkceEnabled `boolean`: Determines whether PKCE is enabled.
  * redirectUris `array`: URIs, to which a user is redirected after authorization.
    * items `string`
  * scopes `array`: List of requested scopes
    * items `string`
  * tokenEndPointUrl `string`: URL of the token endpoint
  * userInfoEndPointUrl `string`: URL of the user info endpoint
  * userUpdateEnabled `boolean`: Determines if the user metadata is updated with data from the IDP.

### UpdateRoomRequest
* UpdateRoomRequest `object`
  * name `string`: Name
  * notes `string`: User notes
  * quota `integer`: Quota in byte

### UpdateUserAccountRequest
* UpdateUserAccountRequest `object`
  * acceptEULA `boolean`: Accept EULA
  * email `string`: DEPRECATED: Email
  * firstName `string`: User first name
  * gender `string` (values: m, f, n): Gender
  * lastName `string`: User last name
  * login `string`: User login name
  * title `string`: Job title

### UpdateUserRequest
* UpdateUserRequest `object`
  * authMethods `array`: Authentication methods
    * items [UserAuthMethod](#userauthmethod)
  * email `string`: DEPRECATED: Email
  * expiration [ObjectExpiration](#objectexpiration)
  * firstName `string`: User first name
  * gender `string` (values: m, f, n): Gender
  * lastName `string`: User last name
  * lockStatus `integer`: Lock status:
  * title `string`: Job title

### UploadShare
* UploadShare `object`
  * accessKey **required** `string`: Share access key to generate secure link
  * cntFiles `integer`: Total amount of existing files uploaded with this share.
  * cntUploads `integer`: Total amount of uploads conducted with this share.
  * createdAt **required** `string`: Creation date
  * createdBy **required** [UserInfo](#userinfo)
  * dataUrl `string`: Upload Share URL
  * expireAt **required** `string`: Expiration date
  * filesExpiryPeriod `integer`: Number of days after which uploaded files expire
  * id **required** `integer`: Share ID
  * isEncrypted `boolean`: Encryption state
  * isProtected **required** `boolean`: Is share protected by password
  * maxSize `integer`: DEPRECATED: Maximal total size of uploaded files (in bytes)
  * maxSlots `integer`: DEPRECATED: Maximal amount of files to upload
  * name **required** `string`: Alias name
  * notes `string`: User notes
  * notifyCreator **required** `boolean`: Notify creator on every upload.
  * recipients `string`: CSV string of recipient emails
  * showUploadedFiles `boolean`: Allow display of already uploaded files
  * smsRecipients `string`: CSV string of recipient MSISDNS
  * targetId **required** `integer`: Target room or folder ID
  * targetPath `string`: Path to shared upload node

### UploadShareList
* UploadShareList `object`
  * items **required** `array`: List of Upload Shares
    * items [UploadShare](#uploadshare)
  * range **required** [Range](#range)

### UserAccount
* UserAccount `object`
  * authMethods **required** `array`: Authentication methods
    * items [UserAuthMethod](#userauthmethod)
  * customer **required** [CustomerData](#customerdata)
  * email `string`: DEPRECATED: Email
  * expireAt `string`: Expiration date
  * firstName **required** `string`: User first name
  * gender `string` (values: m, f, n): Gender
  * hasManageableRooms **required** `boolean`: User has manageable rooms
  * id **required** `integer`: Unique identifier for the user
  * isEncryptionEnabled `boolean`: User has generated private key.
  * lastLoginFailAt `string`: Last failed logon date
  * lastLoginFailIp `string`: Last failed logon IP address
  * lastLoginSuccessAt `string`: Last successful logon date
  * lastLoginSuccessIp `string`: Last successful logon IP address
  * lastName **required** `string`: User last name
  * lockStatus **required** `integer`: Lock status:
  * login **required** `string`: User login name
  * needsToAcceptEULA `boolean`: User has accepted EULA.
  * needsToChangePassword **required** `boolean`: User has changed the password
  * needsToChangeUserName `boolean`: If true, the user must change the 'userName' at the first login
  * title `string`: Job title
  * userAttributes [UserAttributes](#userattributes)
  * userGroups `array`: All groups the user is member of
    * items [UserGroup](#usergroup)
  * userRoles **required** [RoleList](#rolelist)

### UserAttributes
* UserAttributes `object`
  * items `array`: List of key-value pairs
    * items [KeyValueEntry](#keyvalueentry)

### UserAuthMethod
* UserAuthMethod `object`
  * authId **required** `string`: Authentication method ID
  * isEnabled **required** `boolean`: Is enabled
  * options `array`: Authentication method options
    * items [KeyValueEntry](#keyvalueentry)

### UserData
* UserData `object`
  * authMethods **required** `array`: Authentication methods
    * items [UserAuthMethod](#userauthmethod)
  * email **required** `string`: DEPRECATED: Email
  * expireAt `string`: Expiration date
  * firstName **required** `string`: User first name
  * gender `string` (values: m, f, n): Gender
  * hasManageableRooms `boolean`: User has manageable rooms
  * id **required** `integer`: Unique identifier for the user
  * isEncryptionEnabled `boolean`: User has generated private key.
  * lastLoginSuccessAt `string`: Last successful logon date
  * lastName **required** `string`: User last name
  * lockStatus **required** `integer`: Lock status:
  * login **required** `string`: User login name
  * publicKeyContainer [PublicKeyContainer](#publickeycontainer)
  * title `string`: Job title
  * userAttributes [UserAttributes](#userattributes)
  * userRoles [RoleList](#rolelist)

### UserFileKey
* UserFileKey `object`
  * fileKey **required** [FileKey](#filekey)
  * userId **required** `integer`: Unique identifier for the user

### UserFileKeyList
* UserFileKeyList `object`
  * items `array`: List of user file keys
    * items [UserFileKey](#userfilekey)

### UserFileKeySetBatchRequest
* UserFileKeySetBatchRequest `object`
  * items **required** `array`: List of user file keys
    * items [UserFileKeySetRequest](#userfilekeysetrequest)

### UserFileKeySetRequest
* UserFileKeySetRequest `object`
  * fileId **required** `integer`: File ID
  * fileKey **required** [FileKey](#filekey)
  * userId **required** `integer`: Unique identifier for the user

### UserGroup
* UserGroup `object`
  * id **required** `integer`: Unique identifier for the group
  * isMember **required** `boolean`: Is group member
  * name **required** `string`: Group name

### UserGroupList
* UserGroupList `object`
  * items **required** `array`: List of user-group mappings
    * items [UserGroup](#usergroup)
  * range **required** [Range](#range)

### UserIdFileIdItem
* UserIdFileIdItem `object`
  * fileId `integer`: File ID
  * userId `integer`: Unique identifier for the user

### UserIds
* UserIds `object`
  * ids **required** `array`: List of user IDs
    * items `integer`

### UserInfo
* UserInfo `object`
  * displayName **required** `string`: Display name
  * id **required** `integer`: Unique identifier for the user

### UserItem
* UserItem `object`
  * createdAt `string`: Creation date
  * email `string`: DEPRECATED: Email
  * expireAt `string`: Expiration date
  * firstName **required** `string`: User first name
  * gender `string` (values: m, f, n): Gender
  * hasManageableRooms **required** `boolean`: User has manageable rooms
  * id **required** `integer`: Unique identifier for the user
  * isEncryptionEnabled `boolean`: User has generated private key.
  * lastLoginSuccessAt `string`: Last successful logon date
  * lastName **required** `string`: User last name
  * lockStatus **required** `integer`: Lock status:
  * login **required** `string`: User login name
  * title `string`: Job title
  * userAttributes [UserAttributes](#userattributes)
  * userRoles **required** [RoleList](#rolelist)

### UserKeyPairContainer
* UserKeyPairContainer `object`
  * privateKeyContainer **required** [PrivateKeyContainer](#privatekeycontainer)
  * publicKeyContainer **required** [PublicKeyContainer](#publickeycontainer)

### UserList
* UserList `object`
  * items **required** `array`: List of users
    * items [UserItem](#useritem)
  * range **required** [Range](#range)

### UserUserPublicKey
* UserUserPublicKey `object`
  * id `integer`: Unique identifier for the user
  * publicKeyContainer [PublicKeyContainer](#publickeycontainer)

### UserUserPublicKeyList
* UserUserPublicKeyList `object`
  * items **required** `array`: List of user public keys
    * items [UserUserPublicKey](#useruserpublickey)

### ZipDownloadRequest
* ZipDownloadRequest `object`
  * nodeIds **required** `array`: List of node IDs
    * items `integer`


