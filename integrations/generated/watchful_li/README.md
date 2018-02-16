# @datafire/watchful_li

Client library for watchful.li

## Installation and Usage
```bash
npm install --save @datafire/watchful_li
```
```js
let watchful_li = require('@datafire/watchful_li').create();

watchful_li.tags.get({}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### getAudits
Returns a list of audits


```js
watchful_li.getAudits({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of object to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

#### Output
* output [Audit](#audit)

### getFieldsAudits
Returns a list of fields


```js
watchful_li.getFieldsAudits(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### deleteAuditById
Delete a specific audit


```js
watchful_li.deleteAuditById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of audit that needs to be deleted

#### Output
* output `string`

### getAuditById
Returns a audit based on ID


```js
watchful_li.getAuditById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of audit that needs to be fetched
  * fields `string`: Fields to return separate by comas: name,id

#### Output
* output [Audit](#audit)

### getExtensions
Returns a list Extensions


```js
watchful_li.getExtensions({}, context)
```

#### Input
* input `object`
  * ext_name `string`: Do a 'LIKE' search, you can also use '%'
  * siteids `string`: List of sites id separated by comma
  * ext_prefix `string`: Do a 'LIKE' search, you can also use '%'. technical name of the extension com_xxxx
  * version `string`: Do a 'LIKE' search, you can also use '%'
  * vUpdate `integer` (values: 1, 0): update available for this extension
  * fields `string`: Fields to return separate by comas: name,id
  * limit `integer`: Number of object to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

#### Output
* output [Extension](#extension)

### getFieldsExtensions
Returns a list of fields


```js
watchful_li.getFieldsExtensions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### ignoreExtensionUpdate
Set 'ignore updates' for a given extension / site_id


```js
watchful_li.ignoreExtensionUpdate({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the extension

#### Output
* output `string`

### unignoreExtensionUpdate
Remove 'ignore updates' for a given extension


```js
watchful_li.unignoreExtensionUpdate({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the extension

#### Output
* output `string`

### updateExtension
Update the extension on the remote site


```js
watchful_li.updateExtension({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the extension

#### Output
* output `string`

### getFeedbacks
Returns a list of feedbacks


```js
watchful_li.getFeedbacks({}, context)
```

#### Input
* input `object`
  * fields `string`: Fields to return separate by comas (es. name,id)

#### Output
* output [Feedback](#feedback)

### createFeedbacks
Create a feedback


```js
watchful_li.createFeedbacks({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [Feedback](#feedback)

#### Output
* output [Audit](#audit)

### getFieldsFeedbacks
Returns a list of fields


```js
watchful_li.getFieldsFeedbacks(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### logs.get
Returns a list of logs


```js
watchful_li.logs.get({}, context)
```

#### Input
* input `object`
  * log_type `string` (values: , plugin_sends_error, curlerror, modified_file, word_not_in_homepage, file_not_exists, update_available, new_extension, deleted_extension, extension_not_saved, modified_value_files, custom): Type of the log
  * log_entry `string`: Do a 'LIKE' search, you can also use '%'
  * from `string`: Logs after this date, format YYYY-MM-DD HH:MM:SS
  * to `string`: Logs before this date, format YYYY-MM-DD HH:MM:SS
  * fields `string`: Fields to return separate by comas: name,id
  * limit `integer`: Number of object to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

#### Output
* output [Log](#log)

### getExportLogs
Returns a file contain the list of logs


```js
watchful_li.getExportLogs({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: csv, pdf): Format of exported file (PDF or CSV)
  * site `integer`: Site id of the log
  * filter_type `string` (values: , plugin_sends_error, curlerror, modified_file, word_not_in_homepage, file_not_exists, update_available, new_extension, deleted_extension, extension_not_saved, modified_value_files, custom): Type of the log
  * search `string`: Do a 'LIKE' search, you can also use '%'
  * startdate `string`: Logs after this date, format YYYY-MM-DD HH:MM:SS
  * enddate `string`: Logs before this date, format YYYY-MM-DD HH:MM:SS
  * limit `integer`: Number of object to return (max 100, default 25)
  * startid `integer`: Start of the return (default 0)

#### Output
*Output schema unknown*

### getFieldsLogs
Returns a list of fields


```js
watchful_li.getFieldsLogs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### getTypesLogs
Returns a list of log types


```js
watchful_li.getTypesLogs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### deleteLogById
Delete a specific log


```js
watchful_li.deleteLogById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of log that needs to be deleted

#### Output
* output `string`

### packages.post



```js
watchful_li.packages.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### reports.sites.id.get
Returns a PDF report based on a site ID


```js
watchful_li.reports.sites.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID that needs to be fetched
  * from `string`: Start of the report, format YYYY-MM-DD, default today-30day 
  * to `string`: End of the report, format YYYY-MM-DD, default today
  * reports `string`: Type of reports separate by comas: Ga,Logs,Uptime
  * log_type `string` (values: , plugin_sends_error, curlerror, modified_file, word_not_in_homepage, file_not_exists, update_available, new_extension, deleted_extension, extension_not_saved, modified_value_files): Type of the log to show in the report
  * compare `integer` (values: 0, 1): Define if you want show previous values in Google Analytics graph

#### Output
* output [Reports](#reports)

### reports.tags.id.get
Returns a report based on a site ID


```js
watchful_li.reports.tags.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID that needs to be fetched
  * from `string`: Start of the report, format YYYY-MM-DD, default today-30day 
  * to `string`: End of the report, format YYYY-MM-DD, default today
  * reports `string`: Type of reports separate by comas: Ga,Logs,Uptime
  * log_type `string` (values: , plugin_sends_error, curlerror, modified_file, word_not_in_homepage, file_not_exists, update_available, new_extension, deleted_extension, extension_not_saved, modified_value_files): Type of the log to show in the report
  * compare `integer` (values: 0, 1): Define if you want show previous values in Google Analytics graph

#### Output
* output [Reports](#reports)

### getSites
Returns a list of Sites


```js
watchful_li.getSites({}, context)
```

#### Input
* input `object`
  * siteids `string`: List of sites id separated by comma
  * name `string`: Site name. Do a 'LIKE' search, you can also use '%'
  * access_url `string`: Access URL. Do a 'LIKE' search, you can also use '%'
  * j_version `string`: Joomla version. Do a 'LIKE' search, you can also use '%'
  * ip `string`: Ip address. Do a 'LIKE' search, you can also use '%'
  * jUpdate `integer` (values: 1, 0): Joomla core update status (1: update required, 0: update not required)
  * canUpdate `integer` (values: 1, 0): canUpdate
  * published `integer` (values: 1, 0): Is published
  * error `string`: Has errors
  * nbUpdates `string`
  * up `integer` (values: 1, 0): Is online
  * fields `string`: Fields to return separated by commas (e.g. name,id)
  * limit `integer`: Number of objects to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

#### Output
* output [Site](#site)

### createSite
Create a site


```js
watchful_li.createSite({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [PostSite](#postsite)

#### Output
* output [Site](#site)

### sites.metadata.get
Returns a list of fields


```js
watchful_li.sites.metadata.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### sites.id.delete
Delete a specific Site


```js
watchful_li.sites.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of Site that needs to be deleted

#### Output
* output `string`

### getSiteById
Return a site based on ID


```js
watchful_li.getSiteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID that needs to be fetched
  * fields `string`: Fields to return separate by comas: name,id

#### Output
* output [Site](#site)

### sites.id.put
Update a site


```js
watchful_li.sites.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website that needs to be update
  * body **required** [PostSite](#postsite)

#### Output
* output [Site](#site)

### getSiteAudits
Return audits for a specific website


```js
watchful_li.getSiteAudits({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website
  * fields `string`: Fields to return separate by comas: name,id
  * limit `integer`: Number of object to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field

#### Output
* output [Audits](#audits)

### createAudits
Create an audit for the site


```js
watchful_li.createAudits({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output [Audit](#audit)

### addSiteToBackupQueue
Add the site to the backup queue


```js
watchful_li.addSiteToBackupQueue({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output [Site](#site)

### getBackupProfiles
Return backup profile


```js
watchful_li.getBackupProfiles({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
*Output schema unknown*

### getListBackups
List of latest backups


```js
watchful_li.getListBackups({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
*Output schema unknown*

### startSiteBackup
Start a remote backup for the site


```js
watchful_li.startSiteBackup({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output [Site](#site)

### stepSiteBackup
Step (continue) a remote backup for the site


```js
watchful_li.stepSiteBackup({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output [Site](#site)

### sites.id.extensions.get
Get extensions for a site


```js
watchful_li.sites.id.extensions.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website
  * fields `string`: Fields to return separate by comas: name,id
  * limit `integer`: Number of object to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field

#### Output
* output [Extension](#extension)

### installExtension
Install extension


```js
watchful_li.installExtension({
  "id": 0,
  "url": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website
  * url **required** `string`: URL to install the extension from

#### Output
*Output schema unknown*

### sites.id.logs.get
Return logs for a specific website


```js
watchful_li.sites.id.logs.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website
  * log_entry `string`: Do a 'LIKE' search, you can also use '%'
  * log_type `string` (values: , plugin_sends_error, curlerror, modified_file, word_not_in_homepage, file_not_exists, update_available, new_extension, deleted_extension, extension_not_saved, modified_value_files): Type of the log
  * from `string`: Logs after this date, format YYYY-MM-DD HH:MM:SS
  * to `string`: Logs before this date, format YYYY-MM-DD HH:MM:SS
  * fields `string`: Fields to return separate by comas: name,id
  * limit `integer`: Number of object to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

#### Output
* output [Log](#log)

### CreateLog
Create a custom log for a specific website


```js
watchful_li.CreateLog({
  "id": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website
  * body **required** [PostLog](#postlog)

#### Output
* output [Log](#log)

### deleteMonitor
Return boolean


```js
watchful_li.deleteMonitor({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output [Monitor](#monitor)

### postMonitor
Return boolean


```js
watchful_li.postMonitor({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output [Monitor](#monitor)

### scanner
Scan the site for malware


```js
watchful_li.scanner({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output `string`

### seoAnalyze
SEO analyze for a page


```js
watchful_li.seoAnalyze({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output `string`

### sites.id.tags.get
Return tags for a specific website


```js
watchful_li.sites.id.tags.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website
  * name `string`: Do a 'LIKE' search, you can also use '%'
  * type `string` (values: , default, success, warning, important, info, inverse): Bootstrap color of the tag
  * fields `string`: Fields to return separate by comas: name,id
  * limit `integer`: Number of object to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field

#### Output
* output [Tag](#tag)

### postTags
Add tags for a specific website


```js
watchful_li.postTags({
  "id": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website
  * body **required** [Tag](#tag)

#### Output
* output [Site](#site)

### updateJoomla
Update Joomla core on the remote site


```js
watchful_li.updateJoomla({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output `string`

### getUptime
Return uptime data


```js
watchful_li.getUptime({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output [Uptime](#uptime)

### validateSite
validate the site


```js
watchful_li.validateSite({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output [Log](#log)

### validateDebugSite
validate the site, return the debug information


```js
watchful_li.validateDebugSite({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the website

#### Output
* output [Log](#log)

### getSsoUsers
Returns a list of SSO Users


```js
watchful_li.getSsoUsers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SsoUsers](#ssousers)

### CreateSsoUsers
Create a SSO User


```js
watchful_li.CreateSsoUsers({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [SsoUsers](#ssousers)

#### Output
* output [SsoUsers](#ssousers)

### deleteSsoUserById
Delete a specific SSO User


```js
watchful_li.deleteSsoUserById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of SSO User that needs to be deleted

#### Output
* output `string`

### getSsoUsersById
Returns a SSO User based on ID


```js
watchful_li.getSsoUsersById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of SSO User that needs to be fetched
  * fields `string`: Fields to return separate by comas: name,id

#### Output
* output [SsoUsers](#ssousers)

### UpdateSsoUsers
Update a SSO User


```js
watchful_li.UpdateSsoUsers({
  "id": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of SSO User that needs to be updated
  * body **required** [SsoUsers](#ssousers)

#### Output
* output [SsoUsers](#ssousers)

### tags.get
Returns a list of tags


```js
watchful_li.tags.get({}, context)
```

#### Input
* input `object`
  * name `string`: Do a 'LIKE' search, you can also use '%'
  * type `string` (values: , default, success, warning, important, info, inverse): Bootstrap color of the tag
  * fields `string`: Fields to return separate by comas: name,id
  * limit `integer`: Number of object to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

#### Output
* output [Tag](#tag)

### CreateTags
Create a tag


```js
watchful_li.CreateTags({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [Tag](#tag)

#### Output
* output [Tag](#tag)

### tags.metadata.get
Returns a list of fields


```js
watchful_li.tags.metadata.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### tags.id.delete
Delete a specific tag


```js
watchful_li.tags.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of tag that needs to be deleted

#### Output
* output `string`

### getTagById
Returns a tag based on ID


```js
watchful_li.getTagById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of tag that needs to be fetched
  * fields `string`: Fields to return separate by comas: name,id

#### Output
* output [Tag](#tag)

### UpdateTag
Update a tag


```js
watchful_li.UpdateTag({
  "id": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of tag
  * body **required** [Tag](#tag)

#### Output
* output [Tag](#tag)

### getSitesByTags
Returns a list of sites based with a specific tag id


```js
watchful_li.getSitesByTags({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of tag that needs to be fetched
  * name `string`: Do a 'LIKE' search, you can also use '%'
  * access_url `string`: Do a 'LIKE' search, you can also use '%'
  * j_version `string`: Do a 'LIKE' search, you can also use '%'
  * ip `string`: Do a 'LIKE' search, you can also use '%'
  * jUpdate `integer` (values: 1, 0): Joomla core update
  * published `integer` (values: 1, 0): is published
  * error `string`: have errors
  * nbUpdates `string`
  * up `integer` (values: 1, 0): is the website online
  * fields `string`: Fields to return separate by comas: name,id
  * limit `integer`: Number of object to return (max 100, default 25)
  * limitstart `integer`: Start of the return (default 0)
  * order `string`: ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

#### Output
* output [Site](#site)



## Definitions

### Audit
* Audit `object`
  * id **required** `integer`: Unique identifier for the audit

### Audits
* Audits `array`
  * items [Audit](#audit)

### Extension
* Extension `object`
  * date `string`: Date of release
  * ext_name `string`: Extension name
  * idx_site **required** `integer`: Unique identifier for the site
  * newVersion `string`: New version
  * type **required** `string`: Datetime of the log
  * url `string`: Author URL
  * vUpdate `integer`: Update is available
  * version `string`: Extension version

### Feedback
* Feedback `object`
  * id **required** `integer`: Unique identifier for the feedback

### Log
* Log `object`
  * Site name `string`: Name of the site / readyonly
  * id_log **required** `integer`: Unique identifier for the log
  * idx_site **required** `integer`: Unique identifier for the site
  * log_date **required** `string`: Datetime of the log
  * log_entry **required** `string`: Log information
  * log_level **required** `integer`: Level of log
  * log_type `string`: Type of log
  * userid **required** `integer`: Unique identifier for the user

### Monitor


### PostLog
* PostLog `object`
  * log_date `string`: Datetime of the log
  * log_entry **required** `string`: Log information
  * log_level **required** `integer`: Level of log

### PostSite
* PostSite `object`
  * access_url **required** `string`: URL of the site
  * admin_url `string`: Adminsitration URL
  * akeebaProfile `string`: Akeeba Profile
  * backupSchedule `string`: Backup Schedule
  * dateBackup `string`: Date backup
  * name `string`: Friendly name for the site
  * notes `string`: Personnal note for the site
  * published `boolean`: Published status of site
  * secret_word `string`: Watchful secret word
  * tags `string`: JSON encoded array of tags for the site (e.g. [{<q>name</q>:<q>mytag</q>},{<q>name</q>:<q>anothertag</q>}])
  * word_akeeba `string`: Akeeba backup word
  * word_check `string`: Word checked for uptime

### Reports


### Site
* Site `object`
  * access_url `string`: URL of the site
  * admin_url `string`: Adminsitration URL
  * akeebaProfile `string`: Akeeba Profile
  * backupSchedule `string`: Backup Schedule
  * canBackup `boolean`: Site can be backuped
  * canUpdate `boolean`: Site can use remote installer
  * dateBackup `string`: Date backup
  * date_last_check `string`: Watchful Last check
  * error `boolean`: Error status of site
  * ip `string`: server IP
  * jUpdate `boolean`: ?
  * j_version `string`: Joomla site version
  * monitorid `boolean`: Id of the associated UptimeRobot monitor
  * name `string`: Friendly name for the site
  * nbUpdates `string`: Number of updates
  * new_j_version `string`: Joomla site version
  * notes `string`: Personnal note for the site
  * published `boolean`: Published status of site
  * secret_word `string`: Watchful secret word
  * siteid **required** `integer`: Unique identifier for the site
  * tags `array`: List of tags for this site

  * up `boolean`: Site status
  * word_akeeba `string`: Akeeba backup word
  * word_check `string`: Word checked for uptime

### SsoUsers
* SsoUsers `object`
  * email **required** `string`: Email of the SSO User
  * groupid **required** `integer`: Security Joomla group ID
  * id **required** `integer`: Unique identifier for the SSO User
  * lastLoginDate `string`: Last login date on remote site
  * lastLoginSite `integer`: Site Id of the last remote login
  * name **required** `string`: Account display name
  * password **required** `string`: Password of the SSO User
  * userid **required** `integer`: Watchful user account
  * username **required** `string`: Username of the SSO User

### Tag
* Tag `object`
  * id **required** `integer`: Unique identifier for the tag
  * name **required** `string`: Friendly name for the tag
  * nbSites `integer`: Number of sites use this tag (required field id)
  * type `string` (values: default, success, warning, important, info, inverse): Bootstrap color of the tag

### Uptime


### Version



