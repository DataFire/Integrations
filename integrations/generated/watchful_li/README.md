# @datafire/watchful_li

Client library for watchful.li

## Installation and Usage
```bash
npm install --save datafire @datafire/watchful_li
```

```js
let datafire = require('datafire');
let watchful_li = require('@datafire/watchful_li').create();

watchful_li.getVersions({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### getAudits
Returns a list of audits


```js
watchful_li.getAudits({}, context)
```

#### Parameters
* limit (integer) - Number of object to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

### CreateAudits
Create a audit


```js
watchful_li.CreateAudits({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### getFieldsAudits
Returns a list of fields


```js
watchful_li.getFieldsAudits(null, context)
```

#### Parameters
*This action has no parameters*

### deleteAuditById
Delete a specific audit


```js
watchful_li.deleteAuditById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of audit that needs to be deleted

### getAuditById
Returns a audit based on ID


```js
watchful_li.getAuditById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of audit that needs to be fetched
* fields (string) - Fields to return separate by comas: name,id

### getExtensions
Returns a list Extensions


```js
watchful_li.getExtensions({}, context)
```

#### Parameters
* ext_name (string) - Do a 'LIKE' search, you can also use '%'
* siteids (string) - List of sites id separated by comma
* ext_prefix (string) - Do a 'LIKE' search, you can also use '%'. technical name of the extension com_xxxx
* version (string) - Do a 'LIKE' search, you can also use '%'
* vUpdate (integer) - update available for this extension
* fields (string) - Fields to return separate by comas: name,id
* limit (integer) - Number of object to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

### getFieldsExtensions
Returns a list of fields


```js
watchful_li.getFieldsExtensions(null, context)
```

#### Parameters
*This action has no parameters*

### ignoreExtensionUpdate
Set 'ignore updates' for a given extension / site_id


```js
watchful_li.ignoreExtensionUpdate({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the extension

### unignoreExtensionUpdate
Remove 'ignore updates' for a given extension


```js
watchful_li.unignoreExtensionUpdate({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the extension

### updateExtension
Update the extension on the remote site


```js
watchful_li.updateExtension({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the extension

### getFeedbacks
Returns a list of feedbacks


```js
watchful_li.getFeedbacks({}, context)
```

#### Parameters
* fields (string) - Fields to return separate by comas (es. name,id)

### createFeedbacks
Create a feedback


```js
watchful_li.createFeedbacks({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### getFieldsFeedbacks
Returns a list of fields


```js
watchful_li.getFieldsFeedbacks(null, context)
```

#### Parameters
*This action has no parameters*

### logs.get
Returns a list of logs


```js
watchful_li.logs.get({}, context)
```

#### Parameters
* log_type (string) - Type of the log
* log_entry (string) - Do a 'LIKE' search, you can also use '%'
* from (string) - Logs after this date, format YYYY-MM-DD HH:MM:SS
* to (string) - Logs before this date, format YYYY-MM-DD HH:MM:SS
* fields (string) - Fields to return separate by comas: name,id
* limit (integer) - Number of object to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

### getExportLogs
Returns a file contain the list of logs


```js
watchful_li.getExportLogs({
  "format": ""
}, context)
```

#### Parameters
* format (string) **required** - Format of exported file (PDF or CSV)
* site (integer) - Site id of the log
* filter_type (string) - Type of the log
* search (string) - Do a 'LIKE' search, you can also use '%'
* startdate (string) - Logs after this date, format YYYY-MM-DD HH:MM:SS
* enddate (string) - Logs before this date, format YYYY-MM-DD HH:MM:SS
* limit (integer) - Number of object to return (max 100, default 25)
* startid (integer) - Start of the return (default 0)

### getFieldsLogs
Returns a list of fields


```js
watchful_li.getFieldsLogs(null, context)
```

#### Parameters
*This action has no parameters*

### getTypesLogs
Returns a list of log types


```js
watchful_li.getTypesLogs(null, context)
```

#### Parameters
*This action has no parameters*

### deleteLogById
Delete a specific log


```js
watchful_li.deleteLogById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of log that needs to be deleted

### uploadZipPackage
Upload a ZIP package


```js
watchful_li.uploadZipPackage({
  "file": ""
}, context)
```

#### Parameters
* file (string) **required** - ZIP package

### reports.sites.id.get
Returns a PDF report based on a site ID


```js
watchful_li.reports.sites.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID that needs to be fetched
* from (string) - Start of the report, format YYYY-MM-DD, default today-30day 
* to (string) - End of the report, format YYYY-MM-DD, default today
* reports (string) - Type of reports separate by comas: Ga,Logs,Uptime
* log_type (string) - Type of the log to show in the report
* compare (integer) - Define if you want show previous values in Google Analytics graph

### reports.tags.id.get
Returns a report based on a site ID


```js
watchful_li.reports.tags.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID that needs to be fetched
* from (string) - Start of the report, format YYYY-MM-DD, default today-30day 
* to (string) - End of the report, format YYYY-MM-DD, default today
* reports (string) - Type of reports separate by comas: Ga,Logs,Uptime
* log_type (string) - Type of the log to show in the report
* compare (integer) - Define if you want show previous values in Google Analytics graph

### getSites
Returns a list of Sites


```js
watchful_li.getSites({}, context)
```

#### Parameters
* siteids (string) - List of sites id separated by comma
* name (string) - Site name. Do a 'LIKE' search, you can also use '%'
* access_url (string) - Access URL. Do a 'LIKE' search, you can also use '%'
* j_version (string) - Joomla version. Do a 'LIKE' search, you can also use '%'
* ip (string) - Ip address. Do a 'LIKE' search, you can also use '%'
* jUpdate (integer) - Joomla core update status (1: update required, 0: update not required)
* canUpdate (integer) - canUpdate
* published (integer) - Is published
* error (string) - Has errors
* nbUpdates (string)
* up (integer) - Is online
* fields (string) - Fields to return separated by commas (e.g. name,id)
* limit (integer) - Number of objects to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

### createSite
Create a site


```js
watchful_li.createSite({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### sites.metadata.get
Returns a list of fields


```js
watchful_li.sites.metadata.get(null, context)
```

#### Parameters
*This action has no parameters*

### sites.id.delete
Delete a specific Site


```js
watchful_li.sites.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of Site that needs to be deleted

### getSiteById
Return a site based on ID


```js
watchful_li.getSiteById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID that needs to be fetched
* fields (string) - Fields to return separate by comas: name,id

### sites.id.put
Update a site


```js
watchful_li.sites.id.put({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website that needs to be update
* body (undefined) **required**

### getSiteAudits
Return audits for a specific website


```js
watchful_li.getSiteAudits({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website
* fields (string) - Fields to return separate by comas: name,id
* limit (integer) - Number of object to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field

### createAudits
Create an audit for the site


```js
watchful_li.createAudits({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### addSiteToBackupQueue
Add the site to the backup queue


```js
watchful_li.addSiteToBackupQueue({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### getBackupProfiles
Return backup profile


```js
watchful_li.getBackupProfiles({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### getListBackups
List of latest backups


```js
watchful_li.getListBackups({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### startSiteBackup
Start a remote backup for the site


```js
watchful_li.startSiteBackup({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### stepSiteBackup
Step (continue) a remote backup for the site


```js
watchful_li.stepSiteBackup({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### sites.id.extensions.get
Get extensions for a site


```js
watchful_li.sites.id.extensions.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website
* fields (string) - Fields to return separate by comas: name,id
* limit (integer) - Number of object to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field

### installExtension
Install extension


```js
watchful_li.installExtension({
  "id": 0,
  "url": ""
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website
* url (string) **required** - URL to install the extension from

### sites.id.logs.get
Return logs for a specific website


```js
watchful_li.sites.id.logs.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website
* log_entry (string) - Do a 'LIKE' search, you can also use '%'
* log_type (string) - Type of the log
* from (string) - Logs after this date, format YYYY-MM-DD HH:MM:SS
* to (string) - Logs before this date, format YYYY-MM-DD HH:MM:SS
* fields (string) - Fields to return separate by comas: name,id
* limit (integer) - Number of object to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

### CreateLog
Create a custom log for a specific website


```js
watchful_li.CreateLog({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website
* body (undefined) **required**

### deleteMonitor
Return boolean


```js
watchful_li.deleteMonitor({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### postMonitor
Return boolean


```js
watchful_li.postMonitor({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### scanner
Scan the site for malware


```js
watchful_li.scanner({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### sites.id.tags.get
Return tags for a specific website


```js
watchful_li.sites.id.tags.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website
* name (string) - Do a 'LIKE' search, you can also use '%'
* type (string) - Bootstrap color of the tag
* fields (string) - Fields to return separate by comas: name,id
* limit (integer) - Number of object to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field

### postTags
Add tags for a specific website


```js
watchful_li.postTags({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website
* body (undefined) **required**

### updateJoomla
Update Joomla core on the remote site


```js
watchful_li.updateJoomla({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### getUptime
Return uptime data


```js
watchful_li.getUptime({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### validateSite
validate the site


```js
watchful_li.validateSite({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### validateDebugSite
validate the site, return the debug information


```js
watchful_li.validateDebugSite({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of the website

### getSsoUsers
Returns a list of SSO Users


```js
watchful_li.getSsoUsers(null, context)
```

#### Parameters
*This action has no parameters*

### CreateSsoUsers
Create a SSO User


```js
watchful_li.CreateSsoUsers({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### deleteSsoUserById
Delete a specific SSO User


```js
watchful_li.deleteSsoUserById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of SSO User that needs to be deleted

### getSsoUsersById
Returns a SSO User based on ID


```js
watchful_li.getSsoUsersById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of SSO User that needs to be fetched
* fields (string) - Fields to return separate by comas: name,id

### UpdateSsoUsers
Update a SSO User


```js
watchful_li.UpdateSsoUsers({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required** - ID of SSO User that needs to be updated
* body (undefined) **required**

### tags.get
Returns a list of tags


```js
watchful_li.tags.get({}, context)
```

#### Parameters
* name (string) - Do a 'LIKE' search, you can also use '%'
* type (string) - Bootstrap color of the tag
* fields (string) - Fields to return separate by comas: name,id
* limit (integer) - Number of object to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

### CreateTags
Create a tag


```js
watchful_li.CreateTags({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### tags.metadata.get
Returns a list of fields


```js
watchful_li.tags.metadata.get(null, context)
```

#### Parameters
*This action has no parameters*

### tags.id.delete
Delete a specific tag


```js
watchful_li.tags.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of tag that needs to be deleted

### getTagById
Returns a tag based on ID


```js
watchful_li.getTagById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of tag that needs to be fetched
* fields (string) - Fields to return separate by comas: name,id

### UpdateTag
Update a tag


```js
watchful_li.UpdateTag({
  "id": 0,
  "body": null
}, context)
```

#### Parameters
* id (integer) **required** - ID of tag
* body (undefined) **required**

### getSitesByTags
Returns a list of sites based with a specific tag id


```js
watchful_li.getSitesByTags({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of tag that needs to be fetched
* name (string) - Do a 'LIKE' search, you can also use '%'
* access_url (string) - Do a 'LIKE' search, you can also use '%'
* j_version (string) - Do a 'LIKE' search, you can also use '%'
* ip (string) - Do a 'LIKE' search, you can also use '%'
* jUpdate (integer) - Joomla core update
* published (integer) - is published
* error (string) - have errors
* nbUpdates (string)
* up (integer) - is the website online
* fields (string) - Fields to return separate by comas: name,id
* limit (integer) - Number of object to return (max 100, default 25)
* limitstart (integer) - Start of the return (default 0)
* order (string) - ORDER by this field separete by comas. Add + / - after field for set ASC / DESC: type+,name-

### getVersions
Get list of versions


```js
watchful_li.getVersions({}, context)
```

#### Parameters
* fields (string) - Fields to return separate by comas: name,id

### getVersion
Find a version by ID


```js
watchful_li.getVersion({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ID of version that needs to be fetched
* fields (string) - Fields to return separate by commas: name,id

