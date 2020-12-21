# @datafire/atlassian_jira

Client library for The Jira Cloud platform REST API

## Installation and Usage
```bash
npm install --save @datafire/atlassian_jira
```
```js
let atlassian_jira = require('@datafire/atlassian_jira').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Jira Cloud platform REST API documentation

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
atlassian_jira.oauthCallback({
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
atlassian_jira.oauthRefresh(null, context)
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

### getApplicationProperty
Returns all application properties or an application property.

If you specify a value for the `key` parameter, then an application property is returned as an object (not in an array). Otherwise, an array of all editable application properties is returned. See [Set application property](#api-rest-api-3-application-properties-id-put) for descriptions of editable properties.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getApplicationProperty({}, context)
```

#### Input
* input `object`
  * key `string`: The key of the application property.
  * permissionLevel `string`: The permission level of all items being returned in the list.
  * keyFilter `string`: When a `key` isn't provided, this filters the list of results by the application property `key` using a regular expression. For example, using `jira.lf.*` will return all application properties with keys that start with *jira.lf.*.

#### Output
* output `array`
  * items [ApplicationProperty](#applicationproperty)

### getAdvancedSettings
Returns the application properties that are accessible on the *Advanced Settings* page. To navigate to the *Advanced Settings* page in Jira, choose the Jira icon > **Jira settings** > **System**, **General Configuration** and then click **Advanced Settings** (in the upper right).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAdvancedSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ApplicationProperty](#applicationproperty)

### setApplicationProperty
Changes the value of an application property. For example, you can change the value of the `jira.clone.prefix` from its default value of *CLONE -* to *Clone -* if you prefer sentence case capitalization. Editable properties are described below along with their default values.

#### Advanced settings ####

The advanced settings below are also accessible in [Jira](https://confluence.atlassian.com/x/vYXKM).

| Key | Description | Default value |  
| -- | -- | -- |  
| `jira.clone.prefix` | The string of text prefixed to the title of a cloned issue. | `CLONE -` |  
| `jira.date.picker.java.format` | The date format for the Java (server-side) generated dates. This must be the same as the `jira.date.picker.javascript.format` format setting. | `d/MMM/yy` |  
| `jira.date.picker.javascript.format` | The date format for the JavaScript (client-side) generated dates. This must be the same as the `jira.date.picker.java.format` format setting. | `%e/%b/%y` |  
| `jira.date.time.picker.java.format` | The date format for the Java (server-side) generated date times. This must be the same as the `jira.date.time.picker.javascript.format` format setting. | `dd/MMM/yy h:mm a` |  
| `jira.date.time.picker.javascript.format` | The date format for the JavaScript (client-side) generated date times. This must be the same as the `jira.date.time.picker.java.format` format setting. | `%e/%b/%y %I:%M %p` |  
| `jira.issue.actions.order` | The default order of actions (such as *Comments* or *Change history*) displayed on the issue view. | `asc` |  
| `jira.table.cols.subtasks` | The columns to show while viewing subtask issues in a table. For example, a list of subtasks on an issue. | `issuetype, status, assignee, progress` |  
| `jira.view.issue.links.sort.order` | The sort order of the list of issue links on the issue view. | `type, status, priority` |  
| `jira.comment.collapsing.minimum.hidden` | The minimum number of comments required for comment collapsing to occur. A value of `0` disables comment collapsing. | `4` |  
| `jira.newsletter.tip.delay.days` | The number of days before a prompt to sign up to the Jira Insiders newsletter is shown. A value of `-1` disables this feature. | `7` |  


#### Look and feel ####

The settings listed below adjust the [look and feel](https://confluence.atlassian.com/x/VwCLLg).

| Key | Description | Default value |  
| -- | -- | -- |  
| `jira.lf.date.time` | The [ time format](https://docs.oracle.com/javase/6/docs/api/index.html?java/text/SimpleDateFormat.html). | `h:mm a` |  
| `jira.lf.date.day` | The [ day format](https://docs.oracle.com/javase/6/docs/api/index.html?java/text/SimpleDateFormat.html). | `EEEE h:mm a` |  
| `jira.lf.date.complete` | The [ date and time format](https://docs.oracle.com/javase/6/docs/api/index.html?java/text/SimpleDateFormat.html). | `dd/MMM/yy h:mm a` |  
| `jira.lf.date.dmy` | The [ date format](https://docs.oracle.com/javase/6/docs/api/index.html?java/text/SimpleDateFormat.html). | `dd/MMM/yy` |  
| `jira.date.time.picker.use.iso8061` | When enabled, sets Monday as the first day of the week in the date picker, as specified by the ISO8601 standard. | `false` |  
| `jira.lf.logo.url` | The URL of the logo image file. | `/images/icon-jira-logo.png` |  
| `jira.lf.logo.show.application.title` | Controls the visibility of the application title on the sidebar. | `false` |  
| `jira.lf.favicon.url` | The URL of the favicon. | `/favicon.ico` |  
| `jira.lf.favicon.hires.url` | The URL of the high-resolution favicon. | `/images/64jira.png` |  
| `jira.lf.top.adg3.bgcolour` | The background color of the sidebar. | `#0747A6` |  
| `jira.lf.top.adg3.textcolour` | The color of the text and logo of the sidebar. | `#DEEBFF` |  
| `jira.lf.hero.button.base.bg.colour` | The background color of the hero button. | `#3b7fc4` |  
| `jira.title` | The text for the application title. The application title can also be set in *General settings*. | `Jira` |  
| `jira.option.globalsharing` | Whether filters and dashboards can be shared with anyone signed into Jira. | `true` |  
| `xflow.product.suggestions.enabled` | Whether to expose product suggestions for other Atlassian products within Jira. | `true` |  


#### Other settings ####

| Key | Description | Default value |  
| -- | -- | -- |  
| `jira.issuenav.criteria.autoupdate` | Whether instant updates to search criteria is active. | `true` |  


*Note: Be careful when changing [application properties and advanced settings](https://confluence.atlassian.com/x/vYXKM).*

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.setApplicationProperty({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The key of the application property to update.
  * body **required** [SimpleApplicationPropertyBean](#simpleapplicationpropertybean)

#### Output
* output [ApplicationProperty](#applicationproperty)

### getAllApplicationRoles
Returns all application roles. In Jira, application roles are managed using the [Application access configuration](https://confluence.atlassian.com/x/3YxjL) page.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllApplicationRoles(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ApplicationRole](#applicationrole)

### getApplicationRole
Returns an application role.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getApplicationRole({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role.

#### Output
* output [ApplicationRole](#applicationrole)

### getAttachmentMeta
Returns the attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.

Note that there are also [project permissions](https://confluence.atlassian.com/x/yodKLg) that restrict whether users can create and delete attachments.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getAttachmentMeta(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AttachmentSettings](#attachmentsettings)

### removeAttachment
Deletes an attachment from an issue.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** For the project holding the issue containing the attachment:

 *  *Delete own attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment created by the calling user.
 *  *Delete all attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment created by any user.


```js
atlassian_jira.removeAttachment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the attachment.

#### Output
*Output schema unknown*

### getAttachment
Returns the metadata for an attachment. Note that the attachment itself is not returned.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.getAttachment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the attachment.

#### Output
* output [AttachmentMetadata](#attachmentmetadata)

### expandAttachmentForHumans
Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.

Use this operation to retrieve data that is presented to the user, as this operation returns the metadata for the attachment itself, such as the attachment's ID and name. Otherwise, use [ Get contents metadata for an expanded attachment](#api-rest-api-3-attachment-id-expand-raw-get), which only returns the metadata for the attachment's contents.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** For the issue containing the attachment:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.expandAttachmentForHumans({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the attachment.

#### Output
* output [AttachmentArchiveMetadataReadable](#attachmentarchivemetadatareadable)

### expandAttachmentForMachines
Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.

Use this operation if you are processing the data without presenting it to the user, as this operation only returns the metadata for the contents of the attachment. Otherwise, to retrieve data to present to the user, use [ Get all metadata for an expanded attachment](#api-rest-api-3-attachment-id-expand-human-get) which also returns the metadata for the attachment itself, such as the attachment's ID and name.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** For the issue containing the attachment:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.expandAttachmentForMachines({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the attachment.

#### Output
* output [AttachmentArchiveImpl](#attachmentarchiveimpl)

### getAuditRecords
Returns a list of audit records. The list can be filtered to include items:

 *  containing a string in at least one field. For example, providing *up* will return all audit records where one or more fields contains words such as *update*.
 *  created on or after a date and time.
 *  created or or before a date and time.
 *  created during a time period.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAuditRecords({}, context)
```

#### Input
* input `object`
  * offset `integer`: The number of records to skip before returning the first result.
  * limit `integer`: The maximum number of results to return.
  * filter `string`: The query string.
  * from `string`: The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned.
  * to `string`: The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned.

#### Output
* output [AuditRecords](#auditrecords)

### getAllSystemAvatars
Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getAllSystemAvatars({
  "type": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: issuetype, project, user): The avatar type.

#### Output
* output [SystemAvatars](#systemavatars)

### getCommentsByIds
Returns a [paginated](#pagination) list of just the comments for a list of comments specified by comment IDs.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** Comments are returned where the user:

 *  has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.getCommentsByIds({
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * expand `string`: Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:
  * body **required** [IssueCommentListRequestBean](#issuecommentlistrequestbean)

#### Output
* output [PageBeanComment](#pagebeancomment)

### getCommentPropertyKeys
Returns the keys of all the properties of a comment.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.getCommentPropertyKeys({
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: The ID of the comment.

#### Output
* output [PropertyKeys](#propertykeys)

### deleteCommentProperty
Deletes a comment property.

**[Permissions](#permissions) required:** either of:

 *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from any comment.
 *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from a comment created by the user.

Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.


```js
atlassian_jira.deleteCommentProperty({
  "commentId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: The ID of the comment.
  * propertyKey **required** `string`: The key of the property.

#### Output
*Output schema unknown*

### getCommentProperty
Returns the value of a comment property.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.getCommentProperty({
  "commentId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: The ID of the comment.
  * propertyKey **required** `string`: The key of the property.

#### Output
* output [EntityProperty](#entityproperty)

### setCommentProperty
Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.

The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.

**[Permissions](#permissions) required:** either of:

 *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on any comment.
 *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on a comment created by the user.

Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.


```js
atlassian_jira.setCommentProperty({
  "commentId": "",
  "propertyKey": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: The ID of the comment.
  * propertyKey **required** `string`: The key of the property. The maximum length is 255 characters.

#### Output
* output `object`

### createComponent
Creates a component. Use components to provide containers for issues within a project.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createComponent({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Component](#component)

#### Output
* output [Component](#component)

### deleteComponent
Deletes a component.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteComponent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the component.
  * moveIssuesTo `string`: The ID of the component to replace the deleted component. If this value is null no replacement is made.

#### Output
*Output schema unknown*

### getComponent
Returns a component.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component.


```js
atlassian_jira.getComponent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the component.

#### Output
* output [Component](#component)

### updateComponent
Updates a component. Any fields included in the request are overwritten. If `leadAccountId` is an empty string ("") the component lead is removed.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateComponent({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the component.
  * body **required** [Component](#component)

#### Output
* output [Component](#component)

### getComponentRelatedIssues
Returns the counts of issues assigned to the component.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getComponentRelatedIssues({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the component.

#### Output
* output [ComponentIssuesCount](#componentissuescount)

### getConfiguration
Returns the [global settings](https://confluence.atlassian.com/x/qYXKM) in Jira. These settings determine whether optional features (for example, subtasks, time tracking, and others) are enabled. If time tracking is enabled, this operation also returns the time tracking configuration.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getConfiguration(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Configuration](#configuration)

### getSelectedTimeTrackingImplementation
Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getSelectedTimeTrackingImplementation(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TimeTrackingProvider](#timetrackingprovider)

### selectTimeTrackingImplementation
Selects a time tracking provider.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.selectTimeTrackingImplementation({
  "body": {
    "key": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [TimeTrackingProvider](#timetrackingprovider)

#### Output
* output `object`

### getAvailableTimeTrackingImplementations
Returns all time tracking providers. By default, Jira only has one time tracking provider: *JIRA provided time tracking*. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the [ Time Tracking Provider](https://developer.atlassian.com/cloud/jira/platform/modules/time-tracking-provider/) module.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAvailableTimeTrackingImplementations(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TimeTrackingProvider](#timetrackingprovider)

### getSharedTimeTrackingConfiguration
Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getSharedTimeTrackingConfiguration(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TimeTrackingConfiguration](#timetrackingconfiguration)

### setSharedTimeTrackingConfiguration
Sets the time tracking settings.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.setSharedTimeTrackingConfiguration({
  "body": {
    "defaultUnit": "",
    "timeFormat": "",
    "workingDaysPerWeek": 0,
    "workingHoursPerDay": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [TimeTrackingConfiguration](#timetrackingconfiguration)

#### Output
* output [TimeTrackingConfiguration](#timetrackingconfiguration)

### getOptionsForField
Returns a [paginated](#pagination) list of options and, where the custom select field is of the type *Select List (cascading)*, cascading options for custom select fields. Cascading options are included in the item count when determining pagination. Only options from the global context are returned.

Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getOptionsForField({
  "fieldId": 0
}, context)
```

#### Input
* input `object`
  * fieldId **required** `integer`: The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\_10075* use *10075*.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanCustomFieldOptionDetails](#pagebeancustomfieldoptiondetails)

### createCustomFieldOptions
Creates options and, where the custom select field is of the type *Select List (cascading)*, cascading options for a custom select field. The options are added to the global context of the field.

Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createCustomFieldOptions({
  "fieldId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * fieldId **required** `integer`: The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\_10075* use *10075*.
  * body **required** [BulkCreateCustomFieldOptionRequest](#bulkcreatecustomfieldoptionrequest)

#### Output
* output `object`

### updateCustomFieldOptions
Updates the options on a custom select field. Where an updated option is in use on an issue, the value on the issue is also updated. Options that are not found are ignored. A maximum of 1000 options, including sub-options of *Select List (cascading)* fields, can be updated per request. The options are updated on the global context of the field.

Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateCustomFieldOptions({
  "fieldId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * fieldId **required** `integer`: The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\_10075* use *10075*.
  * body **required** [UpdateCustomFieldOption](#updatecustomfieldoption)

#### Output
* output `object`

### getCustomFieldOption
Returns a custom field option. For example, an option in a select list.

Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** The custom field option is returned as follows:

 *  if the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
 *  if the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the custom field is used in, and the field is visible in at least one layout the user has permission to view.


```js
atlassian_jira.getCustomFieldOption({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the custom field option.

#### Output
* output [CustomFieldOption](#customfieldoption)

### getAllDashboards
Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getAllDashboards({}, context)
```

#### Input
* input `object`
  * filter `string` (values: my, favourite): The filter applied to the list of dashboards. Valid values are:
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageOfDashboards](#pageofdashboards)

### createDashboard
Creates a dashboard.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.createDashboard({
  "body": {
    "name": "",
    "sharePermissions": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [DashboardDetails](#dashboarddetails)

#### Output
* output [Dashboard](#dashboard)

### getDashboardsPaginated
Returns a [paginated](#pagination) list of dashboards. This operation is similar to [Get dashboards](#api-rest-api-3-dashboard-get) except that the results can be refined to include dashboards that have specific attributes. For example, dashboards with a particular name. When multiple attributes are specified only filters matching all attributes are returned.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** The following dashboards that match the query parameters are returned:

 *  Dashboards owned by the user. Not returned for anonymous users.
 *  Dashboards shared with a group that the user is a member of. Not returned for anonymous users.
 *  Dashboards shared with a private project that the user can browse. Not returned for anonymous users.
 *  Dashboards shared with a public project.
 *  Dashboards shared with the public.


```js
atlassian_jira.getDashboardsPaginated({}, context)
```

#### Input
* input `object`
  * dashboardName `string`: String used to perform a case-insensitive partial match with `name`.
  * accountId `string`: User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter.
  * owner `string`: This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter.
  * groupname `string`: Group name used to returns dashboards that are shared with a group that matches `sharePermissions.group.name`.
  * projectId `integer`: Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`.
  * orderBy `string` (values: description, -description, +description, favorite_count, -favorite_count, +favorite_count, id, -id, +id, is_favorite, -is_favorite, +is_favorite, name, -name, +name, owner, -owner, +owner): [Order](#ordering) the results by a field:
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * expand `string`: Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [PageBeanDashboard](#pagebeandashboard)

### getDashboardItemPropertyKeys
Returns the keys of all properties for a dashboard item.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** The user must be the owner of the dashboard or be shared the dashboard. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users.


```js
atlassian_jira.getDashboardItemPropertyKeys({
  "dashboardId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * dashboardId **required** `string`: The ID of the dashboard.
  * itemId **required** `string`: The ID of the dashboard item.

#### Output
* output [PropertyKeys](#propertykeys)

### deleteDashboardItemProperty
Deletes a dashboard item property.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** The user must be the owner of the dashboard. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard.


```js
atlassian_jira.deleteDashboardItemProperty({
  "dashboardId": "",
  "itemId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * dashboardId **required** `string`: The ID of the dashboard.
  * itemId **required** `string`: The ID of the dashboard item.
  * propertyKey **required** `string`: The key of the dashboard item property.

#### Output
*Output schema unknown*

### getDashboardItemProperty
Returns the key and value of a dashboard item property.

A dashboard item enables an app to add user-specific information to a user dashboard. Dashboard items are exposed to users as gadgets that users can add to their dashboards. For more information on how users do this, see [Adding and customizing gadgets](https://confluence.atlassian.com/x/7AeiLQ).

When an app creates a dashboard item it registers a callback to receive the dashboard item ID. The callback fires whenever the item is rendered or, where the item is configurable, the user edits the item. The app then uses this resource to store the item's content or configuration details. For more information on working with dashboard items, see [ Building a dashboard item for a JIRA Connect add-on](https://developer.atlassian.com/server/jira/platform/guide-building-a-dashboard-item-for-a-jira-connect-add-on-33746254/) and the [Dashboard Item](https://developer.atlassian.com/cloud/jira/platform/modules/dashboard-item/) documentation.

There is no resource to set or get dashboard items.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** The user must be the owner of the dashboard or be shared the dashboard. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users.


```js
atlassian_jira.getDashboardItemProperty({
  "dashboardId": "",
  "itemId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * dashboardId **required** `string`: The ID of the dashboard.
  * itemId **required** `string`: The ID of the dashboard item.
  * propertyKey **required** `string`: The key of the dashboard item property.

#### Output
* output [EntityProperty](#entityproperty)

### setDashboardItemProperty
Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.

A dashboard item enables an app to add user-specific information to a user dashboard. Dashboard items are exposed to users as gadgets that users can add to their dashboards. For more information on how users do this, see [Adding and customizing gadgets](https://confluence.atlassian.com/x/7AeiLQ).

When an app creates a dashboard item it registers a callback to receive the dashboard item ID. The callback fires whenever the item is rendered or, where the item is configurable, the user edits the item. The app then uses this resource to store the item's content or configuration details. For more information on working with dashboard items, see [ Building a dashboard item for a JIRA Connect add-on](https://developer.atlassian.com/server/jira/platform/guide-building-a-dashboard-item-for-a-jira-connect-add-on-33746254/) and the [Dashboard Item](https://developer.atlassian.com/cloud/jira/platform/modules/dashboard-item/) documentation.

There is no resource to set or get dashboard items.

The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** The user must be the owner of the dashboard. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard.


```js
atlassian_jira.setDashboardItemProperty({
  "dashboardId": "",
  "itemId": "",
  "propertyKey": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * dashboardId **required** `string`: The ID of the dashboard.
  * itemId **required** `string`: The ID of the dashboard item.
  * propertyKey **required** `string`: The key of the dashboard item property. The maximum length is 255 characters.

#### Output
* output `object`

### deleteDashboard
Deletes a dashboard.

**[Permissions](#permissions) required:** None

The dashboard to be deleted must be owned by the user.


```js
atlassian_jira.deleteDashboard({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the dashboard.

#### Output
*Output schema unknown*

### getDashboard
Returns a dashboard.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.

However, to get a dashboard, the dashboard must be shared with the user or the user must own it. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users.


```js
atlassian_jira.getDashboard({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the dashboard.

#### Output
* output [Dashboard](#dashboard)

### updateDashboard
Updates a dashboard, replacing all the dashboard details with those provided.

**[Permissions](#permissions) required:** None

The dashboard to be updated must be owned by the user.


```js
atlassian_jira.updateDashboard({
  "id": "",
  "body": {
    "name": "",
    "sharePermissions": []
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the dashboard to update.
  * body **required** [DashboardDetails](#dashboarddetails)

#### Output
* output [Dashboard](#dashboard)

### copyDashboard
Copies a dashboard. Any values provided in the `dashboard` parameter replace those in the copied dashboard.

**[Permissions](#permissions) required:** None

The dashboard to be copied must be owned by or shared with the user.


```js
atlassian_jira.copyDashboard({
  "id": "",
  "body": {
    "name": "",
    "sharePermissions": []
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * body **required** [DashboardDetails](#dashboarddetails)

#### Output
* output [Dashboard](#dashboard)

### analyseExpression
Analyses and validates Jira expressions.

As an experimental feature, this operation can also attempt to type-check the expressions.

Learn more about Jira expressions in the [documentation](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/).

**[Permissions](#permissions) required**: None.


```js
atlassian_jira.analyseExpression({
  "body": {
    "expressions": []
  }
}, context)
```

#### Input
* input `object`
  * check `string` (values: syntax, type, complexity): The check to perform:
  * body **required** [JiraExpressionForAnalysis](#jiraexpressionforanalysis)

#### Output
* output [JiraExpressionsAnalysis](#jiraexpressionsanalysis)

### evaluateJiraExpression
Evaluates a Jira expression and returns its value.

This resource can be used to test Jira expressions that you plan to use elsewhere, or to fetch data in a flexible way. Consult the [Jira expressions documentation](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/) for more details.

#### Context variables ####

The following context variables are available to Jira expressions evaluated by this resource. Their presence depends on various factors; usually you need to manually request them in the context object sent in the payload, but some of them are added automatically under certain conditions.

 *  `user` ([User](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user)): The current user. Always available and equal to `null` if the request is anonymous.
 *  `app` ([App](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#app)): The Connect app that made the request. Available only for authenticated requests made by Connect Apps (read more here: [Authentication for Connect apps](https://developer.atlassian.com/cloud/jira/platform/security-for-connect-apps/)).
 *  `issue` ([Issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): The current issue. Available only when the issue is provided in the request context object.
 *  `issues` ([List](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#list) of [Issues](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): A collection of issues matching a JQL query. Available only when JQL is provided in the request context object.
 *  `project` ([Project](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#project)): The current project. Available only when the project is provided in the request context object.
 *  `sprint` ([Sprint](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#sprint)): The current sprint. Available only when the sprint is provided in the request context object.
 *  `board` ([Board](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#board)): The current board. Available only when the board is provided in the request context object.
 *  `serviceDesk` ([ServiceDesk](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#servicedesk)): The current service desk. Available only when the service desk is provided in the request context object.
 *  `customerRequest` ([CustomerRequest](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#customerrequest)): The current customer request. Available only when the customer request is provided in the request context object.

This operation can be accessed anonymously.

**[Permissions](#permissions) required**: None. However, an expression may return different results for different users depending on their permissions. For example, different users may see different comments on the same issue.  
Permission to access Jira Software is required to access Jira Software context variables (`board` and `sprint`) or fields (for example, `issue.sprint`).


```js
atlassian_jira.evaluateJiraExpression({
  "body": {
    "expression": ""
  }
}, context)
```

#### Input
* input `object`
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions.
  * body **required** [JiraExpressionEvalRequestBean](#jiraexpressionevalrequestbean)

#### Output
* output [JiraExpressionResult](#jiraexpressionresult)

### getFields
Returns system and custom issue fields according to the following rules:

 *  Fields that cannot be added to the issue navigator are always returned.
 *  Fields that cannot be placed on an issue screen are always returned.
 *  Fields that depend on global Jira settings are only returned if the setting is enabled. That is, timetracking fields, subtasks, votes, and watches.
 *  For all other fields, this operation only returns the fields that the user has permission to view (that is, the field is used in at least one project that the user has *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.)

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getFields(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [FieldDetails](#fielddetails)

### createCustomField
Creates a custom field.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createCustomField({
  "body": {
    "name": "",
    "searcherKey": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CustomFieldDefinitionJsonBean](#customfielddefinitionjsonbean)

#### Output
* output [FieldDetails](#fielddetails)

### getFieldsPaginated
Returns a [paginated](#pagination) list of fields for Classic Jira projects. The list can include:

 *  all fields.
 *  specific fields, by defining `id`.
 *  fields that contain a string in the field name or description, by defining `query`.
 *  specific fields that contain a string in the field name or description, by defining `id` and `query`.

Only custom fields can be queried, `type` must be set to `custom`.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getFieldsPaginated({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * type `array`: The type of fields to search.
  * id `array`: The IDs of the custom fields to return or, where `query` is specified, filter.
  * query `string`: String used to perform a case-insensitive partial match with field names or descriptions.
  * orderBy `string` (values: contextsCount, -contextsCount, +contextsCount, lastUsed, -lastUsed, +lastUsed, name, -name, +name, screensCount, -screensCount, +screensCount): [Order](#ordering) the results by a field:
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [PageBeanField](#pagebeanfield)

### getContextsForField
Returns a [paginated](#pagination) list of [ contexts](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html) for a custom field. Contexts can be returned as follows:

 *  With no other parameters set, all contexts.
 *  By defining `id` only, all contexts from the list of IDs.
 *  By defining `isAnyIssueType`, limit the list of contexts returned to either those that apply to all issue types (true) or those that apply to only a subset of issue types (false)
 *  By defining `isGlobalContext`, limit the list of contexts return to either those that apply to all projects (global contexts) (true) or those that apply to only a subset of projects (false).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getContextsForField({
  "fieldId": ""
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * isAnyIssueType `boolean`: Whether to return contexts that apply to all issue types.
  * isGlobalContext `boolean`: Whether to return contexts that apply to all projects.
  * contextId `array`: The list of context IDs. To include multiple contexts, separate IDs with ampersand: `contextId=10000&contextId=10001`.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanCustomFieldContext](#pagebeancustomfieldcontext)

### createCustomFieldContext
Creates a custom field context.

If `projectIds` is empty, a global context is created. A global context is one that applies to all project. If `issueTypeIds` is empty, the context applies to all issue types.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createCustomFieldContext({
  "fieldId": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * body **required** [CreateCustomFieldContext](#createcustomfieldcontext)

#### Output
* output [CreateCustomFieldContext](#createcustomfieldcontext)

### getCustomFieldContextsForProjectsAndIssueTypes
Returns a [paginated](#pagination) list of project and issue type mappings and, for each mapping, the ID of a [custom field context](https://confluence.atlassian.com/x/k44fOw) that applies to the project and issue type.

If there is no custom field context assigned to the project then, if present, the custom field context that applies to all projects is returned if it also applies to the issue type or all issue types. If a custom field context is not found, the returned custom field context ID is `null`.

Duplicate project and issue type mappings cannot be provided in the request.

The order of the returned values is the same as provided in the request.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getCustomFieldContextsForProjectsAndIssueTypes({
  "fieldId": "",
  "body": {
    "mappings": []
  }
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * body **required** [ProjectIssueTypeMappings](#projectissuetypemappings)

#### Output
* output [PageBeanContextForProjectAndIssueType](#pagebeancontextforprojectandissuetype)

### deleteCustomFieldContext
Deletes a [ custom field context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteCustomFieldContext({
  "fieldId": "",
  "contextId": 0
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context.

#### Output
* output `object`

### updateCustomFieldContext
Updates a [ custom field context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateCustomFieldContext({
  "fieldId": "",
  "contextId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context.
  * body **required** [CustomFieldContextUpdateDetails](#customfieldcontextupdatedetails)

#### Output
* output `object`

### addIssueTypesToContext
Adds issue types to a custom field context, appending the issue types to the issue types list.

A custom field context without any issue types applies to all issue types. Adding issue types to such a custom field context would result in it applying to only the listed issue types.

If any of the issue types exists in the custom field context, the operation fails and no issue types are added.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.addIssueTypesToContext({
  "fieldId": "",
  "contextId": 0,
  "body": {
    "issueTypeIds": []
  }
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context.
  * body **required** [IssueTypeIds](#issuetypeids)

#### Output
* output `object`

### getOptionsForContext
Returns a [paginated](#pagination) list of all custom field option for a context. Options are returned first then cascading options, in the order they display in Jira.

This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getOptionsForContext({
  "fieldId": "",
  "contextId": 0
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context.
  * optionId `integer`: The ID of the option.
  * onlyOptions `boolean`: Whether only options are returned.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanCustomFieldContextOption](#pagebeancustomfieldcontextoption)

### createCustomFieldOption
Creates options and, where the custom select field is of the type Select List (cascading), cascading options for a custom select field. The options are added to a context of the field.

This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createCustomFieldOption({
  "fieldId": "",
  "contextId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context.
  * body **required** [BulkCustomFieldOptionCreateRequest](#bulkcustomfieldoptioncreaterequest)

#### Output
* output [CustomFieldCreatedContextOptionsList](#customfieldcreatedcontextoptionslist)

### updateCustomFieldOption
Updates the options of a custom field.

If any of the options are not found, no options are updated. Options where the values in the request match the current values aren't updated and aren't reported in the response.

Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateCustomFieldOption({
  "fieldId": "",
  "contextId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context.
  * body **required** [BulkCustomFieldOptionUpdateRequest](#bulkcustomfieldoptionupdaterequest)

#### Output
* output [CustomFieldUpdatedContextOptionsList](#customfieldupdatedcontextoptionslist)

### reorderCustomFieldOptions
Changes the order of custom field options or cascading options in a context.

This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.reorderCustomFieldOptions({
  "fieldId": "",
  "contextId": 0,
  "body": {
    "customFieldOptionIds": []
  }
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context.
  * body **required** [OrderOfCustomFieldOptions](#orderofcustomfieldoptions)

#### Output
* output `object`

### deleteCustomFieldOption
Deletes a custom field option.

Options with cascading options cannot be deleted without deleting the cascading options first.

This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteCustomFieldOption({
  "fieldId": "",
  "contextId": 0,
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context from which an option should be deleted.
  * optionId **required** `integer`: The ID of the option to delete.

#### Output
*Output schema unknown*

### assignProjectsToCustomFieldContext
Assigns a custom field context to projects.

If any project in the request is assigned to any context of the custom field, the operation fails.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.assignProjectsToCustomFieldContext({
  "fieldId": "",
  "contextId": 0,
  "body": {
    "projectIds": []
  }
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context.
  * body **required** [ProjectIds](#projectids)

#### Output
* output `object`

### removeCustomFieldContextFromProjects
Removes a custom field context from projects.

A custom field context without any projects applies to all projects. Removing all projects from a custom field context would result in it applying to all projects.

If any project in the request is not assigned to the context, or the operation would result in two global contexts for the field, the operation fails.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.removeCustomFieldContextFromProjects({
  "fieldId": "",
  "contextId": 0,
  "body": {
    "projectIds": []
  }
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the custom field.
  * contextId **required** `integer`: The ID of the context.
  * body **required** [ProjectIds](#projectids)

#### Output
* output `object`

### getContextsForFieldDeprecated
Returns a [paginated](#pagination) list of the contexts a field is used in. Deprecated, use [ Get custom field contexts](#api-rest-api-3-field-fieldId-context-get).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getContextsForFieldDeprecated({
  "fieldId": ""
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the field to return contexts for.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanContext](#pagebeancontext)

### getScreensForField
Returns a [paginated](#pagination) list of the screens a field is used in.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getScreensForField({
  "fieldId": ""
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the field to return screens for.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanScreen](#pagebeanscreen)

### getAllIssueFieldOptions
Returns a [paginated](#pagination) list of all the options of a select list issue field. A select list issue field is a type of [issue field](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field/) that enables a user to select a value from a list of options.

Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.


```js
atlassian_jira.getAllIssueFieldOptions({
  "fieldKey": ""
}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * fieldKey **required** `string`: The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:

#### Output
* output [PageBeanIssueFieldOption](#pagebeanissuefieldoption)

### createIssueFieldOption
Creates an option for a select list issue field.

Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.


```js
atlassian_jira.createIssueFieldOption({
  "fieldKey": "",
  "body": {
    "value": ""
  }
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
  * body **required** [IssueFieldOptionCreateBean](#issuefieldoptioncreatebean)

#### Output
* output [IssueFieldOption](#issuefieldoption)

### getSelectableIssueFieldOptions
Returns a [paginated](#pagination) list of options for a select list issue field that can be viewed and selected by the user.

Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getSelectableIssueFieldOptions({
  "fieldKey": ""
}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * projectId `integer`: Filters the results to options that are only available in the specified project.
  * fieldKey **required** `string`: The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:

#### Output
* output [PageBeanIssueFieldOption](#pagebeanissuefieldoption)

### getVisibleIssueFieldOptions
Returns a [paginated](#pagination) list of options for a select list issue field that can be viewed by the user.

Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getVisibleIssueFieldOptions({
  "fieldKey": ""
}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * projectId `integer`: Filters the results to options that are only available in the specified project.
  * fieldKey **required** `string`: The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:

#### Output
* output [PageBeanIssueFieldOption](#pagebeanissuefieldoption)

### deleteIssueFieldOption
Deletes an option from a select list issue field.

Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.


```js
atlassian_jira.deleteIssueFieldOption({
  "fieldKey": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
  * optionId **required** `integer`: The ID of the option to be deleted.

#### Output
* output `object`

### getIssueFieldOption
Returns an option from a select list issue field.

Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.


```js
atlassian_jira.getIssueFieldOption({
  "fieldKey": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
  * optionId **required** `integer`: The ID of the option to be returned.

#### Output
* output [IssueFieldOption](#issuefieldoption)

### updateIssueFieldOption
Updates or creates an option for a select list issue field. This operation requires that the option ID is provided when creating an option, therefore, the option ID needs to be specified as a path and body parameter. The option ID provided in the path and body must be identical.

Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.


```js
atlassian_jira.updateIssueFieldOption({
  "fieldKey": "",
  "optionId": 0,
  "body": {
    "id": 0,
    "value": ""
  }
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
  * optionId **required** `integer`: The ID of the option to be updated.
  * body **required** [IssueFieldOption](#issuefieldoption)

#### Output
* output [IssueFieldOption](#issuefieldoption)

### replaceIssueFieldOption
Deselects an issue-field select-list option from all issues where it is selected. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.

This is an [asynchronous operation](#async). The response object contains a link to the long-running task.

Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.


```js
atlassian_jira.replaceIssueFieldOption({
  "fieldKey": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * replaceWith `integer`: The ID of the option that will replace the currently selected option.
  * jql `string`: A JQL query that specifies the issues to be updated. For example, *project=10000*.
  * fieldKey **required** `string`: The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
  * optionId **required** `integer`: The ID of the option to be deselected.

#### Output
* output [TaskProgressBeanRemoveOptionFromIssuesResult](#taskprogressbeanremoveoptionfromissuesresult)

### getAllFieldConfigurations
Returns a [paginated](#pagination) list of all field configurations.

Only field configurations used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllFieldConfigurations({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * id `array`: The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
  * isDefault `boolean`: If *true* returns the default field configuration only.

#### Output
* output [PageBeanFieldConfiguration](#pagebeanfieldconfiguration)

### getFieldConfigurationItems
Returns a [paginated](#pagination) list of all fields for a configuration.

Only the fields from configurations used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getFieldConfigurationItems({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the field configuration.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanFieldConfigurationItem](#pagebeanfieldconfigurationitem)

### getAllFieldConfigurationSchemes
Returns a [paginated](#pagination) list of field configuration schemes.

Only field configuration schemes used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllFieldConfigurationSchemes({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * id `array`: The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.

#### Output
* output [PageBeanFieldConfigurationScheme](#pagebeanfieldconfigurationscheme)

### getFieldConfigurationSchemeMappings
Returns a [paginated](#pagination) list of field configuration issue type items.

Only items used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getFieldConfigurationSchemeMappings({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * fieldConfigurationSchemeId `array`: The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`.

#### Output
* output [PageBeanFieldConfigurationIssueTypeItem](#pagebeanfieldconfigurationissuetypeitem)

### getFieldConfigurationSchemeProjectMapping
Returns a [paginated](#pagination) list of field configuration schemes and, for each scheme, a list of the projects that use it.

The list is sorted by field configuration scheme ID. The first item contains the list of project IDs assigned to the default field configuration scheme.

Only field configuration schemes used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getFieldConfigurationSchemeProjectMapping({
  "projectId": []
}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * projectId **required** `array`: The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.

#### Output
* output [PageBeanFieldConfigurationSchemeProjects](#pagebeanfieldconfigurationschemeprojects)

### assignFieldConfigurationSchemeToProject
Assigns a field configuration scheme to a project. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.

Field configuration schemes can only be assigned to classic projects.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.assignFieldConfigurationSchemeToProject({
  "body": {
    "projectId": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [FieldConfigurationSchemeProjectAssociation](#fieldconfigurationschemeprojectassociation)

#### Output
* output `object`

### getFilters
Returns all filters. Deprecated, use [ Search for filters](#api-rest-api-3-filter-search-get) that supports search and pagination.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None, however, only the following filters are returned:

 *  filters owned by the user.
 *  filters shared with a group that the user is a member of.
 *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  filters shared with a public project.
 *  filters shared with the public.


```js
atlassian_jira.getFilters({}, context)
```

#### Input
* input `object`
  * expand `string`: Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output `array`
  * items [Filter](#filter)

### createFilter
Creates a filter. The filter is shared according to the [default share scope](#api-rest-api-3-filter-post). The filter is not selected as a favorite.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.createFilter({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * expand `string`: Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
  * body **required** [Filter](#filter)

#### Output
* output [Filter](#filter)

### getDefaultShareScope
Returns the default sharing settings for new filters and dashboards for a user.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getDefaultShareScope(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [DefaultShareScope](#defaultsharescope)

### setDefaultShareScope
Sets the default sharing for new filters and dashboards for a user.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.setDefaultShareScope({
  "body": {
    "scope": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [DefaultShareScope](#defaultsharescope)

#### Output
* output [DefaultShareScope](#defaultsharescope)

### getFavouriteFilters
Returns the visible favorite filters of the user.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** A favorite filter is only visible to the user where the filter is:

 *  owned by the user.
 *  shared with a group that the user is a member of.
 *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  shared with a public project.
 *  shared with the public.

For example, if the user favorites a public filter that is subsequently made private that filter is not returned by this operation.


```js
atlassian_jira.getFavouriteFilters({}, context)
```

#### Input
* input `object`
  * expand `string`: Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output `array`
  * items [Filter](#filter)

### getMyFilters
Returns the filters owned by the user. If `includeFavourites` is `true`, the user's visible favorite filters are also returned.

**[Permissions](#permissions) required:** Permission to access Jira, however, a favorite filters is only visible to the user where the filter is:

 *  owned by the user.
 *  shared with a group that the user is a member of.
 *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  shared with a public project.
 *  shared with the public.

For example, if the user favorites a public filter that is subsequently made private that filter is not returned by this operation.


```js
atlassian_jira.getMyFilters({}, context)
```

#### Input
* input `object`
  * expand `string`: Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
  * includeFavourites `boolean`: Include the user's favorite filters in the response.

#### Output
* output `array`
  * items [Filter](#filter)

### getFiltersPaginated
Returns a [paginated](#pagination) list of filters. Use this operation to get:

 *  specific filters, by defining `id` only.
 *  filters that match all of the specified attributes. For example, all filters for a user with a particular word in their name. When multiple attributes are specified only filters matching all attributes are returned.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None, however, only the following filters that match the query parameters are returned:

 *  filters owned by the user.
 *  filters shared with a group that the user is a member of.
 *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  filters shared with a public project.
 *  filters shared with the public.


```js
atlassian_jira.getFiltersPaginated({}, context)
```

#### Input
* input `object`
  * filterName `string`: String used to perform a case-insensitive partial match with `name`.
  * accountId `string`: User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`.
  * owner `string`: This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`.
  * groupname `string`: Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`.
  * projectId `integer`: Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`.
  * id `array`: The list of filter IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
  * orderBy `string` (values: description, -description, +description, favorite_count, -favorite_count, +favorite_count, id, -id, +id, is_favorite, -is_favorite, +is_favorite, name, -name, +name, owner, -owner, +owner): [Order](#ordering) the results by a field:
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * expand `string`: Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [PageBeanFilterDetails](#pagebeanfilterdetails)

### deleteFilter
Delete a filter.

**[Permissions](#permissions) required:** Permission to access Jira, however filters can only be deleted by the creator of the filter or a user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteFilter({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter to delete.

#### Output
*Output schema unknown*

### getFilter
Returns a filter.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None, however, the filter is only returned where it is:

 *  owned by the user.
 *  shared with a group that the user is a member of.
 *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  shared with a public project.
 *  shared with the public.


```js
atlassian_jira.getFilter({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter to return.
  * expand `string`: Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [Filter](#filter)

### updateFilter
Updates a filter. Use this operation to update a filter's name, description, JQL, or sharing.

**[Permissions](#permissions) required:** Permission to access Jira, however the user must own the filter.


```js
atlassian_jira.updateFilter({
  "id": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter to update.
  * expand `string`: Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
  * body **required** [Filter](#filter)

#### Output
* output [Filter](#filter)

### resetColumns
Reset the user's column configuration for the filter to the default.

**[Permissions](#permissions) required:** Permission to access Jira, however, columns are only reset for:

 *  filters owned by the user.
 *  filters shared with a group that the user is a member of.
 *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  filters shared with a public project.
 *  filters shared with the public.


```js
atlassian_jira.resetColumns({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.

#### Output
*Output schema unknown*

### getColumns
Returns the columns configured for a filter. The column configuration is used when the filter's results are viewed in *List View* with the *Columns* set to *Filter*.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None, however, column details are only returned for:

 *  filters owned by the user.
 *  filters shared with a group that the user is a member of.
 *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  filters shared with a public project.
 *  filters shared with the public.


```js
atlassian_jira.getColumns({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.

#### Output
* output `array`
  * items [ColumnItem](#columnitem)

### setColumns
Sets the columns for a filter. Only navigable fields can be set as columns. Use [Get fields](#api-rest-api-3-field-get) to get the list fields in Jira. A navigable field has `navigable` set to `true`.

The parameters for this resource are expressed as HTML form data. For example, in curl:

`curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/filter/10000/columns`

**[Permissions](#permissions) required:** Permission to access Jira, however, columns are only set for:

 *  filters owned by the user.
 *  filters shared with a group that the user is a member of.
 *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  filters shared with a public project.
 *  filters shared with the public.


```js
atlassian_jira.setColumns({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.
  * body `array`: The IDs of the fields to set as columns. In the form data, specify each field as `columns=id`, where `id` is the *id* of a field (as seen in the response for [Get fields](#api-rest-api-<ver>-field-get)). For example, `columns=summary`.

#### Output
* output `object`

### deleteFavouriteForFilter
Removes a filter as a favorite for the user. Note that this operation only removes filters visible to the user from the user's favorites list. For example, if the user favorites a public filter that is subsequently made private (and is therefore no longer visible on their favorites list) they cannot remove it from their favorites list.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.deleteFavouriteForFilter({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.
  * expand `string`: Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [Filter](#filter)

### setFavouriteForFilter
Add a filter as a favorite for the user.

**[Permissions](#permissions) required:** Permission to access Jira, however, the user can only favorite:

 *  filters owned by the user.
 *  filters shared with a group that the user is a member of.
 *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  filters shared with a public project.
 *  filters shared with the public.


```js
atlassian_jira.setFavouriteForFilter({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.
  * expand `string`: Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [Filter](#filter)

### getSharePermissions
Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None, however, share permissions are only returned for:

 *  filters owned by the user.
 *  filters shared with a group that the user is a member of.
 *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  filters shared with a public project.
 *  filters shared with the public.


```js
atlassian_jira.getSharePermissions({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.

#### Output
* output `array`
  * items [SharePermission](#sharepermission)

### addSharePermission
Add a share permissions to a filter. If you add a global share permission (one for all logged-in users or the public) it will overwrite all share permissions for the filter.

Be aware that this operation uses different objects for updating share permissions compared to [Update filter](#api-rest-api-3-filter-id-put).

**[Permissions](#permissions) required:** *Share dashboards and filters* [global permission](https://confluence.atlassian.com/x/x4dKLg) and the user must own the filter.


```js
atlassian_jira.addSharePermission({
  "id": 0,
  "body": {
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.
  * body **required** [SharePermissionInputBean](#sharepermissioninputbean)

#### Output
* output `array`
  * items [SharePermission](#sharepermission)

### deleteSharePermission
Deletes a share permission from a filter.

**[Permissions](#permissions) required:** Permission to access Jira and the user must own the filter.


```js
atlassian_jira.deleteSharePermission({
  "id": 0,
  "permissionId": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.
  * permissionId **required** `integer`: The ID of the share permission.

#### Output
*Output schema unknown*

### getSharePermission
Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None, however, a share permission is only returned for:

 *  filters owned by the user.
 *  filters shared with a group that the user is a member of.
 *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
 *  filters shared with a public project.
 *  filters shared with the public.


```js
atlassian_jira.getSharePermission({
  "id": 0,
  "permissionId": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.
  * permissionId **required** `integer`: The ID of the share permission.

#### Output
* output [SharePermission](#sharepermission)

### removeGroup
Deletes a group.

**[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* strategic [group](https://confluence.atlassian.com/x/24xjL)).


```js
atlassian_jira.removeGroup({
  "groupname": ""
}, context)
```

#### Input
* input `object`
  * groupname **required** `string`: The name of the group.
  * swapGroup `string`: The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion.

#### Output
*Output schema unknown*

### getGroup
This operation is deprecated, use [`group/member`](#api-rest-api-3-group-member-get).

Returns all users in a group.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getGroup({
  "groupname": ""
}, context)
```

#### Input
* input `object`
  * groupname **required** `string`: The name of the group.
  * expand `string`: List of fields to expand.

#### Output
* output [Group](#group)

### createGroup
Creates a group.

**[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).


```js
atlassian_jira.createGroup({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AddGroupBean](#addgroupbean)

#### Output
* output [Group](#group)

### bulkGetGroups
Returns a [paginated](#pagination) list of groups.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.bulkGetGroups({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * groupId `array`: The ID of a group. To specify multiple IDs, pass multiple `groupId` parameters. For example, `groupId=5b10a2844c20165700ede21g&groupId=5b10ac8d82e05b22cc7d4ef5`.
  * groupName `array`: The name of a group. To specify multiple names, pass multiple `groupName` parameters. For example, `groupName=administrators&groupName=jira-software-users`.

#### Output
* output [PageBeanGroupDetails](#pagebeangroupdetails)

### getUsersFromGroup
Returns a [paginated](#pagination) list of all users in a group.

Note that users are ordered by username, however the username is not returned in the results due to privacy reasons.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getUsersFromGroup({
  "groupname": ""
}, context)
```

#### Input
* input `object`
  * groupname **required** `string`: The name of the group.
  * includeInactiveUsers `boolean`: Include inactive users.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanUserDetails](#pagebeanuserdetails)

### removeUserFromGroup
Removes a user from a group.

**[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).


```js
atlassian_jira.removeUserFromGroup({
  "groupname": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * groupname **required** `string`: The name of the group.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * accountId **required** `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.

#### Output
*Output schema unknown*

### addUserToGroup
Adds a user to a group.

**[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).


```js
atlassian_jira.addUserToGroup({
  "groupname": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * groupname **required** `string`: The name of the group (case sensitive).
  * body **required** [UpdateUserToGroupBean](#updateusertogroupbean)

#### Output
* output [Group](#group)

### findGroups
Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.

The primary use case for this resource is to populate a group picker suggestions list. To this end, the returned object includes the `html` field where the matched query term is highlighted in the group name with the HTML strong tag. Also, the groups list is wrapped in a response object that contains a header for use in the picker, specifically *Showing X of Y matching groups*.

The list returns with the groups sorted. If no groups match the list criteria, an empty list is returned.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg). Anonymous calls and calls by users without the required permission return an empty list.


```js
atlassian_jira.findGroups({}, context)
```

#### Input
* input `object`
  * accountId `string`: This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get).
  * query `string`: The string to find in group names.
  * exclude `array`: A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`.
  * maxResults `integer`: The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`.
  * userName `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.

#### Output
* output [FoundGroups](#foundgroups)

### findUsersAndGroups
Returns a list of users and groups matching a string. The string is used:

 *  for users, to find a case-insensitive match with display name and e-mail address. Note that if a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.
 *  for groups, to find a case-sensitive match with group name.

For example, if the string *tin* is used, records with the display name *Tina*, email address *sarah@tinplatetraining.com*, and the group *accounting* would be returned.

Optionally, the search can be refined to:

 *  the projects and issue types associated with a custom field, such as a user picker. The search can then be further refined to return only users and groups that have permission to view specific:
    
     *  projects.
     *  issue types.
    
    If multiple projects or issue types are specified, they must be a subset of those enabled for the custom field or no results are returned. For example, if a field is enabled for projects A, B, and C then the search could be limited to projects B and C. However, if the search is limited to projects B and D, nothing is returned.
 *  not return Connect app users and groups.
 *  return groups that have a case-insensitive match with the query.

The primary use case for this resource is to populate a picker field suggestion list with users or groups. To this end, the returned object includes an `html` field for each list. This field highlights the matched query term in the item name with the HTML strong tag. Also, each list is wrapped in a response object that contains a header for use in a picker, specifically *Showing X of Y matching groups*.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/yodKLg).


```js
atlassian_jira.findUsersAndGroups({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The search string.
  * maxResults `integer`: The maximum number of items to return in each list.
  * showAvatar `boolean`: Whether the user avatar should be returned. If an invalid value is provided, the default value is used.
  * fieldId `string`: The custom field ID of the field this request is for.
  * projectId `array`: The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. This parameter is only used when `fieldId` is present.
  * issueTypeId `array`: The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, `issueTypeId=10000&issueTypeId=10001`. Special values, such as `-1` (all standard issue types) and `-2` (all subtask issue types), are supported. This parameter is only used when `fieldId` is present.
  * avatarSize `string` (values: xsmall, xsmall@2x, xsmall@3x, small, small@2x, small@3x, medium, medium@2x, medium@3x, large, large@2x, large@3x, xlarge, xlarge@2x, xlarge@3x, xxlarge, xxlarge@2x, xxlarge@3x, xxxlarge, xxxlarge@2x, xxxlarge@3x): The size of the avatar to return. If an invalid value is provided, the default value is used.
  * caseInsensitive `boolean`: Whether the search for groups should be case insensitive.
  * excludeConnectAddons `boolean`: Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.

#### Output
* output [FoundUsersAndGroups](#foundusersandgroups)

### createIssue
Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. A transition may be applied, to move the issue or subtask to a workflow step other than the default start step, and issue properties set.

The content of the issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get). These are the same fields that appear on the issue's create screen. Note that the `description`, `environment`, and any `textarea` type custom fields (multi-line text fields) take Atlassian Document Format content. Single line custom fields (`textfield`) accept a string and don't handle Atlassian Document Format content.

Creating a subtask differs from creating an issue as follows:

 *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get) to find subtask issue types).
 *  `parent` must contain the ID or key of the parent issue.

In a next-gen project any issue may be made a child providing that the parent and child are members of the same project. In a classic project the parent field is only valid for subtasks.

**[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue or subtask is created.


```js
atlassian_jira.createIssue({
  "body": {}
}, context)
```

#### Input
* input `object`
  * updateHistory `boolean`: Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira.
  * body **required** [IssueUpdateDetails](#issueupdatedetails)

#### Output
* output [CreatedIssue](#createdissue)

### createIssues
Creates issues and, where the option to create subtasks is enabled in Jira, subtasks. Transitions may be applied, to move the issues or subtasks to a workflow step other than the default start step, and issue properties set.

The content of each issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get). These are the same fields that appear on the issues' create screens. Note that the `description`, `environment`, and any `textarea` type custom fields (multi-line text fields) take Atlassian Document Format content. Single line custom fields (`textfield`) accept a string and don't handle Atlassian Document Format content.

Creating a subtask differs from creating an issue as follows:

 *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get) to find subtask issue types).
 *  `parent` the must contain the ID or key of the parent issue.

**[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which each issue or subtask is created.


```js
atlassian_jira.createIssues({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [IssuesUpdateBean](#issuesupdatebean)

#### Output
* output [CreatedIssues](#createdissues)

### getCreateIssueMeta
Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in [ Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).

The request can be restricted to specific projects or issue types using the query parameters. The response will contain information for the valid projects, issue types, or project and issue type combinations requested. Note that invalid project, issue type, or project and issue type combinations do not generate errors.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects.


```js
atlassian_jira.getCreateIssueMeta({}, context)
```

#### Input
* input `object`
  * projectIds `array`: List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`.
  * projectKeys `array`: List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`.
  * issuetypeIds `array`: List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`.
  * issuetypeNames `array`: List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`.
  * expand `string`: Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).

#### Output
* output [IssueCreateMetadata](#issuecreatemetadata)

### getIssuePickerResource
Returns lists of issues matching a query string. Use this resource to provide auto-completion suggestions when the user is looking for an issue using a word or string.

This operation returns two lists:

 *  `History Search` which includes issues from the user's history of created, edited, or viewed issues that contain the string in the `query` parameter.
 *  `Current Search` which includes issues that match the JQL expression in `currentJQL` and contain the string in the `query` parameter.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getIssuePickerResource({}, context)
```

#### Input
* input `object`
  * query `string`: A string to match against text fields in the issue such as title, description, or comments.
  * currentJQL `string`: A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead.
  * currentIssueKey `string`: The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query.
  * currentProjectId `string`: The ID of a project that suggested issues must belong to.
  * showSubTasks `boolean`: Indicate whether to include subtasks in the suggestions list.
  * showSubTaskParent `boolean`: When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query.

#### Output
* output [IssuePickerSuggestions](#issuepickersuggestions)

### bulkSetIssuesProperties
Sets the values of entity properties on issues. It can set up to 10 entity properties on up to 10,000 issues.

The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON. The maximum length of single issue property value is 32768 characters. This operation can be accessed anonymously.

This operation is:

 *  transactional, either all properties are updated in all eligible issues or, when errors occur, no properties are updated.
 *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.bulkSetIssuesProperties({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [IssueEntityProperties](#issueentityproperties)

#### Output
*Output schema unknown*

### bulkDeleteIssueProperty
Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.

The criteria the filter used to identify eligible issues are:

 *  `entityIds` Only issues from this list are eligible.
 *  `currentValue` Only issues with the property set to this value are eligible.

If both criteria is specified, they are joined with the logical *AND*: only issues that satisfy both criteria are considered eligible.

If no filter criteria are specified, all the issues visible to the user and where the user has the EDIT\_ISSUES permission for the issue are considered eligible.

This operation is:

 *  transactional, either the property is deleted from all eligible issues or, when errors occur, no properties are deleted.
 *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.

**[Permissions](#permissions) required:**

 *  *Browse projects* [ project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.


```js
atlassian_jira.bulkDeleteIssueProperty({
  "propertyKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * propertyKey **required** `string`: The key of the property.
  * body **required** [IssueFilterForBulkPropertyDelete](#issuefilterforbulkpropertydelete)

#### Output
*Output schema unknown*

### bulkSetIssueProperty
Sets a property value on multiple issues. The issues to be updated can be specified by a filter.

The filter identifies issues eligible for update using these criteria:

 *  `entityIds` Only issues from this list are eligible.
 *  `currentValue` Only issues with the property set to this value are eligible.
 *  `hasProperty`:
    
     *  If *true*, only issues with the property are eligible.
     *  If *false*, only issues without the property are eligible.

If more than one criteria is specified, they are joined with the logical *AND*: only issues that satisfy all criteria are eligible.

If an invalid combination of criteria is provided, an error is returned. For example, specifying a `currentValue` and `hasProperty` as *false* would not match any issues (because without the property the property cannot have a value).

The filter is optional. Without the filter all the issues visible to the user and where the user has the EDIT\_ISSUES permission for the issue are considered eligible.

This operation is:

 *  transactional, either all eligible issues are updated or, when errors occur, none are updated.
 *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.


```js
atlassian_jira.bulkSetIssueProperty({
  "propertyKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * propertyKey **required** `string`: The key of the property. The maximum length is 255 characters.
  * body **required** [BulkIssuePropertyUpdateRequest](#bulkissuepropertyupdaterequest)

#### Output
*Output schema unknown*

### deleteIssue
Deletes an issue.

An issue cannot be deleted if it has one or more subtasks. To delete an issue with subtasks, set `deleteSubtasks`. This causes the issue's subtasks to be deleted with the issue.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Delete issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.deleteIssue({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * deleteSubtasks `string` (values: true, false): Whether the issue's subtasks are deleted when the issue is deleted.

#### Output
*Output schema unknown*

### getIssue
Returns the details for an issue.

The issue is identified by its ID or key, however, if the identifier doesn't match an issue, a case-insensitive search and check for moved issues is performed. If a matching issue is found its details are returned, a 302 or other redirect is **not** returned. The issue key returned in the response is the key of the issue found.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.getIssue({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * fields `array`: A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:
  * fieldsByKeys `boolean`: Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
  * expand `string`: Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:
  * properties `array`: A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:
  * updateHistory `boolean`: Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) `lastViewed` field.

#### Output
* output [IssueBean](#issuebean)

### editIssue
Edits an issue. A transition may be applied and issue properties updated as part of the edit.

The edits to the issue's fields are defined using `update` and `fields`. The fields that can be edited are determined using [ Get edit issue metadata](#api-rest-api-3-issue-issueIdOrKey-editmeta-get).

The parent field may be set by key or ID. For standard issue types, the parent may be removed by setting `update.parent.set.none` to *true*. Note that the `description`, `environment`, and any `textarea` type custom fields (multi-line text fields) take Atlassian Document Format content. Single line custom fields (`textfield`) accept a string and don't handle Atlassian Document Format content.

Connect app users with admin permissions (from user permissions and app scopes) can override the screen security configuration using `overrideScreenSecurity` and `overrideEditableFlag`.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.editIssue({
  "issueIdOrKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * notifyUsers `boolean`: Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
  * overrideScreenSecurity `boolean`: Whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions.
  * overrideEditableFlag `boolean`: Whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions.
  * body **required** [IssueUpdateDetails](#issueupdatedetails)

#### Output
* output `object`

### assignIssue
Assigns an issue to a user. Use this operation when the calling user does not have the *Edit Issues* permission but has the *Assign issue* permission for the project that the issue is in.

If `name` or `accountId` is set to:

 *  `"-1"`, the issue is assigned to the default assignee for the project.
 *  `null`, the issue is set to unassigned.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse Projects* and *Assign Issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.assignIssue({
  "issueIdOrKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue to be assigned.
  * body **required** [User](#user)

#### Output
* output `object`

### addAttachment
Adds one or more attachments to an issue. Attachments are posted as multipart/form-data ([RFC 1867](https://www.ietf.org/rfc/rfc1867.txt)).

Note that:

 *  The request must have a `X-Atlassian-Token: no-check` header, if not it is blocked. See [Special headers](#special-request-headers) for more information.
 *  The name of the multipart/form-data parameter that contains the attachments must be `file`.

The following example uploads a file called *myfile.txt* to the issue *TEST-123*:

`curl -D- -u admin:admin -X POST -H "X-Atlassian-Token: no-check" -F "file=@myfile.txt" https://your-domain.atlassian.net/rest/api/3/issue/TEST-123/attachments`

Tip: Use a client library. Many client libraries have classes for handling multipart POST operations. For example, in Java, the Apache HTTP Components library provides a [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html) class for multipart POST operations.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** 

 *  *Browse Projects* and *Create attachments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.addAttachment({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue that attachments are added to.
  * body `string`

#### Output
* output `array`
  * items [Attachment](#attachment)

### getChangeLogs
Returns a [paginated](#pagination) list of all changelogs for an issue sorted by date, starting from the oldest.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.getChangeLogs({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanChangelog](#pagebeanchangelog)

### getComments
Returns all comments for an issue.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** Comments are included in the response where the user has:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the comment has visibility restrictions, belongs to the group or has the role visibility is role visibility is restricted to.


```js
atlassian_jira.getComments({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * orderBy `string` (values: created, -created, +created): [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date.
  * expand `string`: Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.

#### Output
* output [PageOfComments](#pageofcomments)

### addComment
Adds a comment to an issue.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Add comments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.addComment({
  "issueIdOrKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * expand `string`: Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
  * body **required** [Comment](#comment)

#### Output
* output [Comment](#comment)

### deleteComment
Deletes a comment.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  *Delete all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any comment or *Delete own comments* to delete comment created by the user,
 *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.deleteComment({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * id **required** `string`: The ID of the comment.

#### Output
*Output schema unknown*

### getComment
Returns a comment.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.getComment({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * id **required** `string`: The ID of the comment.
  * expand `string`: Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.

#### Output
* output [Comment](#comment)

### updateComment
Updates a comment.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  *Edit all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any comment or *Edit own comments* to update comment created by the user.
 *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.updateComment({
  "issueIdOrKey": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * id **required** `string`: The ID of the comment.
  * expand `string`: Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
  * body **required** [Comment](#comment)

#### Output
* output [Comment](#comment)

### getEditIssueMeta
Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in [Edit issue](#api-rest-api-3-issue-issueIdOrKey-put).

Connect app users with admin permissions (from user permissions and app scopes) can return additional details using:

 *  `overrideScreenSecurity` Returns hidden fields.
 *  `overrideEditableFlag` Returns uneditable fields. For example, where an issue has a workflow status of closed none of its fields are editable.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

Note: For any fields to be editable the user must have the *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the issue.


```js
atlassian_jira.getEditIssueMeta({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * overrideScreenSecurity `boolean`: Whether hidden fields should be returned. Available to connect app users with admin permissions.
  * overrideEditableFlag `boolean`: Whether non-editable fields should be returned. Available to connect app users with admin permissions.

#### Output
* output [IssueUpdateMetadata](#issueupdatemetadata)

### notify
Creates an email notification for an issue and adds it to the mail queue.

**[Permissions](#permissions) required:**

 *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.notify({
  "issueIdOrKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: ID or key of the issue that the notification is sent for.
  * body **required** [Notification](#notification)

#### Output
* output `object`

### getIssuePropertyKeys
Returns the URLs and keys of an issue's properties.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** Property details are only returned where the user has:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.getIssuePropertyKeys({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The key or ID of the issue.

#### Output
* output [PropertyKeys](#propertykeys)

### deleteIssueProperty
Deletes an issue's property.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.deleteIssueProperty({
  "issueIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The key or ID of the issue.
  * propertyKey **required** `string`: The key of the property.

#### Output
*Output schema unknown*

### getIssueProperty
Returns the key and value of an issue's property.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.getIssueProperty({
  "issueIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The key or ID of the issue.
  * propertyKey **required** `string`: The key of the property.

#### Output
* output [EntityProperty](#entityproperty)

### setIssueProperty
Sets the value of an issue's property. Use this resource to store custom data against an issue.

The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.setIssueProperty({
  "issueIdOrKey": "",
  "propertyKey": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * propertyKey **required** `string`: The key of the issue property. The maximum length is 255 characters.

#### Output
* output `object`

### deleteRemoteIssueLinkByGlobalId
Deletes the remote issue link from the issue using the link's global ID. Where the global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.

This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is implemented, issue-level security permission to view the issue.


```js
atlassian_jira.deleteRemoteIssueLinkByGlobalId({
  "issueIdOrKey": "",
  "globalId": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * globalId **required** `string`: The global ID of a remote issue link.

#### Output
*Output schema unknown*

### getRemoteIssueLinks
Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned. Where a global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.

This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.getRemoteIssueLinks({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * globalId `string`: The global ID of the remote issue link.

#### Output
* output [RemoteIssueLink](#remoteissuelink)

### createOrUpdateRemoteIssueLink
Creates or updates a remote issue link for an issue.

If a `globalId` is provided and a remote issue link with that global ID is found it is updated. Any fields without values in the request are set to null. Otherwise, the remote issue link is created.

This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.createOrUpdateRemoteIssueLink({
  "issueIdOrKey": "",
  "body": {
    "object": null
  }
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * body **required** [RemoteIssueLinkRequest](#remoteissuelinkrequest)

#### Output
* output [RemoteIssueLinkIdentifies](#remoteissuelinkidentifies)

### deleteRemoteIssueLinkById
Deletes a remote issue link from an issue.

This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects*, *Edit issues*, and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.deleteRemoteIssueLinkById({
  "issueIdOrKey": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * linkId **required** `string`: The ID of a remote issue link.

#### Output
*Output schema unknown*

### getRemoteIssueLinkById
Returns a remote issue link for an issue.

This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.getRemoteIssueLinkById({
  "issueIdOrKey": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * linkId **required** `string`: The ID of the remote issue link.

#### Output
* output [RemoteIssueLink](#remoteissuelink)

### updateRemoteIssueLink
Updates a remote issue link for an issue.

Note: Fields without values in the request are set to null.

This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.updateRemoteIssueLink({
  "issueIdOrKey": "",
  "linkId": "",
  "body": {
    "object": null
  }
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * linkId **required** `string`: The ID of the remote issue link.
  * body **required** [RemoteIssueLinkRequest](#remoteissuelinkrequest)

#### Output
* output `object`

### getTransitions
Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.

Note, if a request is made for a transition that does not exist or cannot be performed on the issue, given its status, the response will return any empty transitions list.

This operation can be accessed anonymously.

**[Permissions](#permissions) required: A list or transition is returned only when the user has:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

However, if the user does not have the *Transition issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) the response will not list any transitions.


```js
atlassian_jira.getTransitions({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * expand `string`: Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post).
  * transitionId `string`: The ID of the transition.
  * skipRemoteOnlyCondition `boolean`: Whether transitions with the condition *Hide From User Condition* are included in the response.
  * includeUnavailableTransitions `boolean`: Whether details of transitions that fail a condition are included in the response
  * sortByOpsBarAndStatus `boolean`: Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value.

#### Output
* output [Transitions](#transitions)

### doTransition
Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen.

sortByCategory To update the fields on the transition screen, specify the fields in the `fields` or `update` parameters in the request body. Get details about the fields using [ Get transitions](#api-rest-api-3-issue-issueIdOrKey-transitions-get) with the `transitions.fields` expand.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Transition issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.doTransition({
  "issueIdOrKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * body **required** [IssueUpdateDetails](#issueupdatedetails)

#### Output
* output `object`

### removeVote
Deletes a user's vote from an issue. This is the equivalent of the user clicking *Unvote* on an issue in Jira.

This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.removeVote({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
*Output schema unknown*

### getVotes
Returns details about the votes on an issue.

This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is ini
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

Note that users with the necessary permissions for this operation but without the *View voters and watchers* project permissions are not returned details in the `voters` field.


```js
atlassian_jira.getVotes({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
* output [Votes](#votes)

### addVote
Adds the user's vote to an issue. This is the equivalent of the user clicking *Vote* on an issue in Jira.

This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.addVote({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
* output `object`

### removeWatcher
Deletes a user as a watcher of an issue.

This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  To remove users other than themselves from the watchlist, *Manage watcher list* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.


```js
atlassian_jira.removeWatcher({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.

#### Output
*Output schema unknown*

### getIssueWatchers
Returns the watchers for an issue.

This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is ini
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  To see details of users on the watchlist other than themselves, *View voters and watchers* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.


```js
atlassian_jira.getIssueWatchers({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
* output [Watchers](#watchers)

### addWatcher
Adds a user as a watcher of an issue by passing the account ID of the user. For example, `"5b10ac8d82e05b22cc7d4ef5"`. If no user is specified the calling user is added.

This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  To add users other than themselves to the watchlist, *Manage watcher list* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.


```js
atlassian_jira.addWatcher({
  "issueIdOrKey": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * body **required** `string`

#### Output
* output `object`

### getIssueWorklog
Returns worklogs for an issue, starting from the oldest worklog or from the worklog started on or after a date and time.

Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** Workloads are only returned where the user has:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.getIssueWorklog({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * startedAfter `integer`: The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned.
  * expand `string`: Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties.

#### Output
* output [PageOfWorklogs](#pageofworklogs)

### addWorklog
Adds a worklog to an issue.

Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* and *Work on issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.addWorklog({
  "issueIdOrKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key the issue.
  * notifyUsers `boolean`: Whether users watching the issue are notified by email.
  * adjustEstimate `string` (values: new, leave, manual, auto): Defines how to update the issue's time estimate, the options are:
  * newEstimate `string`: The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`.
  * reduceBy `string`: The amount to reduce the issue's remaining estimate by, as days (\#d), hours (\#h), or minutes (\#m). For example, *2d*. Required when `adjustEstimate` is `manual`.
  * expand `string`: Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties.
  * overrideEditableFlag `boolean`: Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag.
  * body **required** [Worklog](#worklog)

#### Output
* output [Worklog](#worklog)

### deleteWorklog
Deletes a worklog from an issue.

Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  *Delete all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any worklog or *Delete own worklogs* to delete worklogs created by the user,
 *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.deleteWorklog({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * id **required** `string`: The ID of the worklog.
  * notifyUsers `boolean`: Whether users watching the issue are notified by email.
  * adjustEstimate `string` (values: new, leave, manual, auto): Defines how to update the issue's time estimate, the options are:
  * newEstimate `string`: The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`.
  * increaseBy `string`: The amount to increase the issue's remaining estimate by, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `manual`.
  * overrideEditableFlag `boolean`: Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag.

#### Output
*Output schema unknown*

### getWorklog
Returns a worklog.

Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.getWorklog({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * id **required** `string`: The ID of the worklog.
  * expand `string`: Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts

#### Output
* output [Worklog](#worklog)

### updateWorklog
Updates a worklog.

Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit own worklogs* to update worklogs created by the user.
 *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.updateWorklog({
  "issueIdOrKey": "",
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key the issue.
  * id **required** `string`: The ID of the worklog.
  * notifyUsers `boolean`: Whether users watching the issue are notified by email.
  * adjustEstimate `string` (values: new, leave, manual, auto): Defines how to update the issue's time estimate, the options are:
  * newEstimate `string`: The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`.
  * expand `string`: Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties.
  * overrideEditableFlag `boolean`: Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Only connect app users with admin permissions can use this flag.
  * body **required** [Worklog](#worklog)

#### Output
* output [Worklog](#worklog)

### getWorklogPropertyKeys
Returns the keys of all properties for a worklog.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.getWorklogPropertyKeys({
  "issueIdOrKey": "",
  "worklogId": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * worklogId **required** `string`: The ID of the worklog.

#### Output
* output [PropertyKeys](#propertykeys)

### deleteWorklogProperty
Deletes a worklog property.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.deleteWorklogProperty({
  "issueIdOrKey": "",
  "worklogId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * worklogId **required** `string`: The ID of the worklog.
  * propertyKey **required** `string`: The key of the property.

#### Output
*Output schema unknown*

### getWorklogProperty
Returns the value of a worklog property.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.getWorklogProperty({
  "issueIdOrKey": "",
  "worklogId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * worklogId **required** `string`: The ID of the worklog.
  * propertyKey **required** `string`: The key of the property.

#### Output
* output [EntityProperty](#entityproperty)

### setWorklogProperty
Sets the value of a worklog property. Use this operation to store custom data against the worklog.

The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit own worklogs* to update worklogs created by the user.
 *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.setWorklogProperty({
  "issueIdOrKey": "",
  "worklogId": "",
  "propertyKey": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * worklogId **required** `string`: The ID of the worklog.
  * propertyKey **required** `string`: The key of the issue property. The maximum length is 255 characters.

#### Output
* output `object`

### linkIssues
Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have [Issue Linking](https://confluence.atlassian.com/x/yoXKM) enabled.

This resource returns nothing on the creation of an issue link. To obtain the ID of the issue link, use `https://your-domain.atlassian.net/rest/api/3/issue/[linked issue key]?fields=issuelinks`.

If the link request duplicates a link, the response indicates that the issue link was created. If the request included a comment, the comment is added.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse project* [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the issues to be linked,
 *  *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) on the project containing the from (outward) issue,
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
 *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.


```js
atlassian_jira.linkIssues({
  "body": {
    "inwardIssue": {},
    "outwardIssue": {},
    "type": {}
  }
}, context)
```

#### Input
* input `object`
  * body **required** [LinkIssueRequestJsonBean](#linkissuerequestjsonbean)

#### Output
* output `object`

### deleteIssueLink
Deletes an issue link.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  Browse project [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the issues in the link.
 *  *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one of the projects containing issues in the link.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, permission to view both of the issues.


```js
atlassian_jira.deleteIssueLink({
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: The ID of the issue link.

#### Output
*Output schema unknown*

### getIssueLink
Returns an issue link.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Browse project* [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the linked issues.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, permission to view both of the issues.


```js
atlassian_jira.getIssueLink({
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: The ID of the issue link.

#### Output
* output [IssueLink](#issuelink)

### getIssueLinkTypes
Returns a list of all issue link types.

To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.


```js
atlassian_jira.getIssueLinkTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [IssueLinkTypes](#issuelinktypes)

### createIssueLinkType
Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link's inward and outward relationships.

To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createIssueLinkType({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [IssueLinkType](#issuelinktype)

#### Output
* output [IssueLinkType](#issuelinktype)

### deleteIssueLinkType
Deletes an issue link type.

To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteIssueLinkType({
  "issueLinkTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueLinkTypeId **required** `string`: The ID of the issue link type.

#### Output
*Output schema unknown*

### getIssueLinkType
Returns an issue link type.

To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.


```js
atlassian_jira.getIssueLinkType({
  "issueLinkTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueLinkTypeId **required** `string`: The ID of the issue link type.

#### Output
* output [IssueLinkType](#issuelinktype)

### updateIssueLinkType
Updates an issue link type.

To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateIssueLinkType({
  "issueLinkTypeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueLinkTypeId **required** `string`: The ID of the issue link type.
  * body **required** [IssueLinkType](#issuelinktype)

#### Output
* output [IssueLinkType](#issuelinktype)

### getIssueSecuritySchemes
Returns all [issue security schemes](https://confluence.atlassian.com/x/J4lKLg).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getIssueSecuritySchemes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SecuritySchemes](#securityschemes)

### getIssueSecurityScheme
Returns an issue security scheme along with its security levels.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
 *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project that uses the requested issue security scheme.


```js
atlassian_jira.getIssueSecurityScheme({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.

#### Output
* output [SecurityScheme](#securityscheme)

### getIssueSecurityLevelMembers
Returns issue security level members.

Only issue security level members in context of classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getIssueSecurityLevelMembers({
  "issueSecuritySchemeId": 0
}, context)
```

#### Input
* input `object`
  * issueSecuritySchemeId **required** `integer`: The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * issueSecurityLevelId `array`: The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: `issueSecurityLevelId=10000&issueSecurityLevelId=10001`.
  * expand `string`: Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [PageBeanIssueSecurityLevelMember](#pagebeanissuesecuritylevelmember)

### getIssueAllTypes
Returns all issue types.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** Issue types are only returned as follows:

 *  if the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), all issue types are returned.
 *  if the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, the issue types associated with the projects the user has permission to browse are returned.


```js
atlassian_jira.getIssueAllTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [IssueTypeDetails](#issuetypedetails)

### createIssueType
Creates an issue type and adds it to the default issue type scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createIssueType({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [IssueTypeCreateBean](#issuetypecreatebean)

#### Output
* output [IssueTypeDetails](#issuetypedetails)

### deleteIssueType
Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (`alternativeIssueTypeId`). A list of alternative issue types are obtained from the [Get alternative issue types](#api-rest-api-3-issuetype-id-alternatives-get) resource.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteIssueType({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue type.
  * alternativeIssueTypeId `string`: The ID of the replacement issue type.

#### Output
*Output schema unknown*

### getIssueType
Returns an issue type.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) in a project the issue type is associated with or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getIssueType({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue type.

#### Output
* output [IssueTypeDetails](#issuetypedetails)

### updateIssueType
Updates the issue type.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateIssueType({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue type.
  * body **required** [IssueTypeUpdateBean](#issuetypeupdatebean)

#### Output
* output [IssueTypeDetails](#issuetypedetails)

### getAlternativeIssueTypes
Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getAlternativeIssueTypes({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue type.

#### Output
* output `array`
  * items [IssueTypeDetails](#issuetypedetails)

### createIssueTypeAvatar
Loads an avatar for the issue type.

Specify the avatar's local file location in the body of the request. Also, include the following headers:

 *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).
 *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.

For example:  
`curl --request POST \ --user email@example.com:<api_token> \ --header 'X-Atlassian-Token: no-check' \ --header 'Content-Type: image/< image_type>' \ --data-binary "<@/path/to/file/with/your/avatar>" \ --url 'https://your-domain.atlassian.net/rest/api/3/issuetype/{issueTypeId}'This`

The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image.

The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.

After creating the avatar, use [ Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type's displayed avatar.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createIssueTypeAvatar({
  "id": "",
  "size": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue type.
  * x `integer`: The X coordinate of the top-left corner of the crop region.
  * y `integer`: The Y coordinate of the top-left corner of the crop region.
  * size **required** `integer`: The length of each side of the crop region.

#### Output
* output [Avatar](#avatar)

### getIssueTypePropertyKeys
Returns all the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys of the issue type.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the property keys of any issue type.
 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the property keys of any issue types associated with the projects the user has permission to browse.


```js
atlassian_jira.getIssueTypePropertyKeys({
  "issueTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: The ID of the issue type.

#### Output
* output [PropertyKeys](#propertykeys)

### deleteIssueTypeProperty
Deletes the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteIssueTypeProperty({
  "issueTypeId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: The ID of the issue type.
  * propertyKey **required** `string`: The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.

#### Output
*Output schema unknown*

### getIssueTypeProperty
Returns the key and value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the details of any issue type.
 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the details of any issue types associated with the projects the user has permission to browse.


```js
atlassian_jira.getIssueTypeProperty({
  "issueTypeId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: The ID of the issue type.
  * propertyKey **required** `string`: The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.

#### Output
* output [EntityProperty](#entityproperty)

### setIssueTypeProperty
Creates or updates the value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). Use this resource to store and update data against an issue type.

The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.setIssueTypeProperty({
  "issueTypeId": "",
  "propertyKey": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: The ID of the issue type.
  * propertyKey **required** `string`: The key of the issue type property. The maximum length is 255 characters.

#### Output
* output `object`

### getAllIssueTypeSchemes
Returns a [paginated](#pagination) list of issue type schemes.

Only issue type schemes used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllIssueTypeSchemes({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * id `array`: The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.

#### Output
* output [PageBeanIssueTypeScheme](#pagebeanissuetypescheme)

### createIssueTypeScheme
Creates an issue type scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createIssueTypeScheme({
  "body": {
    "issueTypeIds": [],
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [IssueTypeSchemeDetails](#issuetypeschemedetails)

#### Output
* output [IssueTypeSchemeID](#issuetypeschemeid)

### getIssueTypeSchemesMapping
Returns a [paginated](#pagination) list of issue type scheme items.

Only issue type scheme items used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getIssueTypeSchemesMapping({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * issueTypeSchemeId `array`: The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`.

#### Output
* output [PageBeanIssueTypeSchemeMapping](#pagebeanissuetypeschememapping)

### getIssueTypeSchemeForProjects
Returns a [paginated](#pagination) list of issue type schemes and, for each issue type scheme, a list of the projects that use it.

Only issue type schemes used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getIssueTypeSchemeForProjects({
  "projectId": []
}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * projectId **required** `array`: The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`.

#### Output
* output [PageBeanIssueTypeSchemeProjects](#pagebeanissuetypeschemeprojects)

### assignIssueTypeSchemeToProject
Assigns an issue type scheme to a project.

If any issues in the project are assigned issue types not present in the new scheme, the operation will fail. To complete the assignment those issues must be updated to use issue types in the new scheme.

Issue type schemes can only be assigned to classic projects.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.assignIssueTypeSchemeToProject({
  "body": {
    "issueTypeSchemeId": "",
    "projectId": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [IssueTypeSchemeProjectAssociation](#issuetypeschemeprojectassociation)

#### Output
* output `object`

### deleteIssueTypeScheme
Deletes an issue type scheme.

Only issue type schemes used in classic projects can be deleted.

Any projects assigned to the scheme are reassigned to the default issue type scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteIssueTypeScheme({
  "issueTypeSchemeId": 0
}, context)
```

#### Input
* input `object`
  * issueTypeSchemeId **required** `integer`: The ID of the issue type scheme.

#### Output
* output `object`

### updateIssueTypeScheme
Updates an issue type scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateIssueTypeScheme({
  "issueTypeSchemeId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueTypeSchemeId **required** `integer`: The ID of the issue type scheme.
  * body **required** [IssueTypeSchemeUpdateDetails](#issuetypeschemeupdatedetails)

#### Output
* output `object`

### addIssueTypesToIssueTypeScheme
Adds issue types to an issue type scheme.

The added issue types are appended to the issue types list.

If any of the issue types exist in the issue type scheme, the operation fails and no issue types are added.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.addIssueTypesToIssueTypeScheme({
  "issueTypeSchemeId": 0,
  "body": {
    "issueTypeIds": []
  }
}, context)
```

#### Input
* input `object`
  * issueTypeSchemeId **required** `integer`: The ID of the issue type scheme.
  * body **required** [IssueTypeIDs](#issuetypeids)

#### Output
* output `object`

### reorderIssueTypesInIssueTypeScheme
Changes the order of issue types in an issue type scheme.

The request body parameters must meet the following requirements:

 *  all of the issue types must belong to the issue type scheme.
 *  either `after` or `position` must be provided.
 *  the issue type in `after` must not be in the issue type list.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.reorderIssueTypesInIssueTypeScheme({
  "issueTypeSchemeId": 0,
  "body": {
    "issueTypeIds": []
  }
}, context)
```

#### Input
* input `object`
  * issueTypeSchemeId **required** `integer`: The ID of the issue type scheme.
  * body **required** [OrderOfIssueTypes](#orderofissuetypes)

#### Output
* output `object`

### removeIssueTypeFromIssueTypeScheme
Removes an issue type from an issue type scheme.

This operation cannot remove:

 *  any issue type used by issues.
 *  any issue types from the default issue type scheme.
 *  the last standard issue type from an issue type scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.removeIssueTypeFromIssueTypeScheme({
  "issueTypeSchemeId": 0,
  "issueTypeId": 0
}, context)
```

#### Input
* input `object`
  * issueTypeSchemeId **required** `integer`: The ID of the issue type scheme.
  * issueTypeId **required** `integer`: The ID of the issue type.

#### Output
* output `object`

### getIssueTypeScreenSchemes
Returns a [paginated](#pagination) list of issue type screen schemes.

Only issue type screen schemes used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getIssueTypeScreenSchemes({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * id `array`: The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.

#### Output
* output [PageBeanIssueTypeScreenScheme](#pagebeanissuetypescreenscheme)

### createIssueTypeScreenScheme
Creates an issue type screen scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createIssueTypeScreenScheme({
  "body": {
    "issueTypeMappings": [],
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [IssueTypeScreenSchemeDetails](#issuetypescreenschemedetails)

#### Output
* output [IssueTypeScreenSchemeId](#issuetypescreenschemeid)

### getIssueTypeScreenSchemeMappings
Returns a [paginated](#pagination) list of issue type screen scheme items.

Only issue type screen schemes used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getIssueTypeScreenSchemeMappings({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * issueTypeScreenSchemeId `array`: The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`.

#### Output
* output [PageBeanIssueTypeScreenSchemeItem](#pagebeanissuetypescreenschemeitem)

### getIssueTypeScreenSchemeProjectAssociations
Returns a [paginated](#pagination) list of issue type screen schemes and, for each issue type screen scheme, a list of the projects that use it.

Only issue type screen schemes used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getIssueTypeScreenSchemeProjectAssociations({
  "projectId": []
}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * projectId **required** `array`: The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.

#### Output
* output [PageBeanIssueTypeScreenSchemesProjects](#pagebeanissuetypescreenschemesprojects)

### assignIssueTypeScreenSchemeToProject
Assigns an issue type screen scheme to a project.

Issue type screen schemes can only be assigned to classic projects.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.assignIssueTypeScreenSchemeToProject({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [IssueTypeScreenSchemeProjectAssociation](#issuetypescreenschemeprojectassociation)

#### Output
* output `object`

### deleteIssueTypeScreenScheme
Deletes an issue type screen scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteIssueTypeScreenScheme({
  "issueTypeScreenSchemeId": ""
}, context)
```

#### Input
* input `object`
  * issueTypeScreenSchemeId **required** `string`: The ID of the issue type screen scheme.

#### Output
* output `object`

### updateIssueTypeScreenScheme
Updates an issue type screen scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateIssueTypeScreenScheme({
  "issueTypeScreenSchemeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * issueTypeScreenSchemeId **required** `string`: The ID of the issue type screen scheme.
  * body **required** [IssueTypeScreenSchemeUpdateDetails](#issuetypescreenschemeupdatedetails)

#### Output
* output `object`

### appendMappingsForIssueTypeScreenScheme
Appends issue type to screen scheme mappings to an issue type screen scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.appendMappingsForIssueTypeScreenScheme({
  "issueTypeScreenSchemeId": "",
  "body": {
    "issueTypeMappings": []
  }
}, context)
```

#### Input
* input `object`
  * issueTypeScreenSchemeId **required** `string`: The ID of the issue type screen scheme.
  * body **required** [IssueTypeScreenSchemeMappingDetails](#issuetypescreenschememappingdetails)

#### Output
* output `object`

### updateDefaultScreenScheme
Updates the default screen scheme of an issue type screen scheme. The default screen scheme is used for all unmapped issue types.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateDefaultScreenScheme({
  "issueTypeScreenSchemeId": "",
  "body": {
    "screenSchemeId": ""
  }
}, context)
```

#### Input
* input `object`
  * issueTypeScreenSchemeId **required** `string`: The ID of the issue type screen scheme.
  * body **required** [UpdateDefaultScreenScheme](#updatedefaultscreenscheme)

#### Output
* output `object`

### removeMappingsFromIssueTypeScreenScheme
Removes issue type to screen scheme mappings from an issue type screen scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.removeMappingsFromIssueTypeScreenScheme({
  "issueTypeScreenSchemeId": "",
  "body": {
    "issueTypeIds": []
  }
}, context)
```

#### Input
* input `object`
  * issueTypeScreenSchemeId **required** `string`: The ID of the issue type screen scheme.
  * body **required** [IssueTypeIds](#issuetypeids)

#### Output
* output `object`

### getAutoComplete
Returns reference data for JQL searches. This is a downloadable version of the documentation provided in [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ) and [Advanced searching - functions reference](https://confluence.atlassian.com/x/hgORLQ), along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getAutoComplete(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [JQLReferenceData](#jqlreferencedata)

### getFieldAutoCompleteForQueryString
Returns the JQL search auto complete suggestions for a field.

Suggestions can be obtained by providing:

 *  `fieldName` to get a list of all values for the field.
 *  `fieldName` and `fieldValue` to get a list of values containing the text in `fieldValue`.
 *  `fieldName` and `predicateName` to get a list of all predicate values for the field.
 *  `fieldName`, `predicateName`, and `predicateValue` to get a list of predicate values containing the text in `predicateValue`.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getFieldAutoCompleteForQueryString({}, context)
```

#### Input
* input `object`
  * fieldName `string`: The name of the field.
  * fieldValue `string`: The partial field item name entered by the user.
  * predicateName `string`: The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*.
  * predicateValue `string`: The partial predicate item name entered by the user.

#### Output
* output [AutoCompleteSuggestions](#autocompletesuggestions)

### matchIssues
Checks whether one or more issues would be returned by one or more JQL queries.

**[Permissions](#permissions) required:** None, however, issues are only matched against JQL queries where the user has:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.matchIssues({
  "body": {
    "issueIds": [],
    "jqls": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [IssuesAndJQLQueries](#issuesandjqlqueries)

#### Output
* output [IssueMatches](#issuematches)

### parseJqlQueries
Parses and validates JQL queries.

Validation is performed in context of the current user.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.parseJqlQueries({
  "body": {
    "queries": []
  }
}, context)
```

#### Input
* input `object`
  * validation `string` (values: strict, warn, none): How to validate the JQL query and treat the validation results. Validation options include:
  * body **required** [JqlQueriesToParse](#jqlqueriestoparse)

#### Output
* output [ParsedJqlQueries](#parsedjqlqueries)

### migrateQueries
Converts one or more JQL queries with user identifiers (username or user key) to equivalent JQL queries with account IDs.

You may wish to use this operation if your system stores JQL queries and you want to make them GDPR-compliant. For more information about GDPR-related changes, see the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/).

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.migrateQueries({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [JQLPersonalDataMigrationRequest](#jqlpersonaldatamigrationrequest)

#### Output
* output [ConvertedJQLQueries](#convertedjqlqueries)

### getAllLabels
Returns a [paginated](#pagination) list of labels.


```js
atlassian_jira.getAllLabels({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanString](#pagebeanstring)

### getMyPermissions
Returns a list of permissions indicating which permissions the user has. Details of the user's permissions can be obtained in a global, project, or issue context.

The user is reported as having a project permission:

 *  in the global context, if the user has the project permission in any project.
 *  for a project, where the project permission is determined using issue data, if the user meets the permission's criteria for any issue in the project. Otherwise, if the user has the project permission in the project.
 *  for an issue, where a project permission is determined using issue data, if the user has the permission in the issue. Otherwise, if the user has the project permission in the project containing the issue.

This means that users may be shown as having an issue permission (such as EDIT\_ISSUES) in the global context or a project context but may not have the permission for any or all issues. For example, if Reporters have the EDIT\_ISSUES permission a user would be shown as having this permission in the global context or the context of a project, because any user can be a reporter. However, if they are not the user who reported the issue queried they would not have EDIT\_ISSUES permission for that issue.

Global permissions are unaffected by context.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getMyPermissions({}, context)
```

#### Input
* input `object`
  * projectKey `string`: The key of project. Ignored if `projectId` is provided.
  * projectId `string`: The ID of project.
  * issueKey `string`: The key of the issue. Ignored if `issueId` is provided.
  * issueId `string`: The ID of the issue.
  * permissions `string`: A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get).
  * projectUuid `string`
  * projectConfigurationUuid `string`

#### Output
* output [Permissions](#permissions)

### removePreference
Deletes a preference of the user, which restores the default value of system defined settings.

Note that these keys are deprecated:

 *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale.
 *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone.

Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.removePreference({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The key of the preference.

#### Output
*Output schema unknown*

### getPreference
Returns the value of a preference of the current user.

Note that these keys are deprecated:

 *  *jira.user.locale* The locale of the user. By default this is not set and the user takes the locale of the instance.
 *  *jira.user.timezone* The time zone of the user. By default this is not set and the user takes the timezone of the instance.

Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getPreference({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The key of the preference.

#### Output
* output `string`

### setPreference
Creates a preference for the user or updates a preference's value by sending a plain text string. For example, `false`. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:

 *  *user.notifications.mimetype* The mime type used in notifications sent to the user. Defaults to `html`.
 *  *user.notify.own.changes* Whether the user gets notified of their own changes. Defaults to `false`.
 *  *user.default.share.private* Whether new [ filters](https://confluence.atlassian.com/x/eQiiLQ) are set to private. Defaults to `true`.
 *  *user.keyboard.shortcuts.disabled* Whether keyboard shortcuts are disabled. Defaults to `false`.
 *  *user.autowatch.disabled* Whether the user automatically watches issues they create or add a comment to. By default, not set: the user takes the instance autowatch setting.

Note that these keys are deprecated:

 *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale.
 *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone.

Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.setPreference({
  "key": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The key of the preference. The maximum length is 255 characters.
  * body **required** `string`

#### Output
* output `object`

### deleteLocale
Deprecated, use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API instead.

Deletes the locale of the user, which restores the default setting.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.deleteLocale(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### getLocale
Returns the locale for the user.

If the user has no language preference set (which is the default setting) or this resource is accessed anonymous, the browser locale detected by Jira is returned. Jira detects the browser locale using the *Accept-Language* header in the request. However, if this doesn't match a locale available Jira, the site default locale is returned.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getLocale(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Locale](#locale)

### setLocale
Deprecated, use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API instead.

Sets the locale of the user. The locale must be one supported by the instance of Jira.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.setLocale({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Locale](#locale)

#### Output
* output `object`

### getCurrentUser
Returns details for the current user.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getCurrentUser({}, context)
```

#### Input
* input `object`
  * expand `string`: Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [User](#user)

### getNotificationSchemes
Returns a [paginated](#pagination) list of [notification schemes](https://confluence.atlassian.com/x/8YdKLg) ordered by display name.

### About notification schemes ###

A notification scheme is a list of events and recipients who will receive notifications for those events. The list is contained within the `notificationSchemeEvents` object and contains pairs of `events` and `notifications`:

 *  `event` Identifies the type of event. The events can be [Jira system events](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or [custom events](https://confluence.atlassian.com/x/AIlKLg).
 *  `notifications` Identifies the [recipients](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-recipientsRecipients) of notifications for each event. Recipients can be any of the following types:
    
     *  `CurrentAssignee`
     *  `Reporter`
     *  `CurrentUser`
     *  `ProjectLead`
     *  `ComponentLead`
     *  `User` (the `parameter` is the user key)
     *  `Group` (the `parameter` is the group name)
     *  `ProjectRole` (the `parameter` is the project role ID)
     *  `EmailAddress`
     *  `AllWatchers`
     *  `UserCustomField` (the `parameter` is the ID of the custom field)
     *  `GroupCustomField`(the `parameter` is the ID of the custom field)

*Note that you should allow for events without recipients to appear in responses.*

**[Permissions](#permissions) required:** Permission to access Jira, however the user must have permission to administer at least one project associated with a notification scheme for it to be returned.


```js
atlassian_jira.getNotificationSchemes({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [PageBeanNotificationScheme](#pagebeannotificationscheme)

### getNotificationScheme
Returns a [notification scheme](https://confluence.atlassian.com/x/8YdKLg), including the list of events and the recipients who will receive notifications for those events.

**[Permissions](#permissions) required:** Permission to access Jira, however the user must have permission to administer at least one project associated with the notification scheme.


```js
atlassian_jira.getNotificationScheme({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs.
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [NotificationScheme](#notificationscheme)

### getAllPermissions
Returns all permissions, including:

 *  global permissions.
 *  project permissions.
 *  global permissions added by plugins.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllPermissions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Permissions](#permissions)

### getBulkPermissions
Returns:

 *  for a list of global permissions, the global permissions granted to a user.
 *  for a list of project permissions and lists of projects and issues, for each project permission a list of the projects and issues a user can access or manipulate.

If no account ID is provided, the operation returns details for the logged in user.

Note that:

 *  Invalid project and issue IDs are ignored.
 *  A maximum of 1000 projects and 1000 issues can be checked.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to check the permissions for other users, otherwise none. However, Connect apps can make a call from the app server to the product to obtain permission details for any user, without admin permission. This Connect app ability doesn't apply to calls made using AP.request() in a browser.


```js
atlassian_jira.getBulkPermissions({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [BulkPermissionsRequestBean](#bulkpermissionsrequestbean)

#### Output
* output [BulkPermissionGrants](#bulkpermissiongrants)

### getPermittedProjects
Returns all the projects where the user is granted a list of project permissions.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getPermittedProjects({
  "body": {
    "permissions": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PermissionsKeysBean](#permissionskeysbean)

#### Output
* output [PermittedProjects](#permittedprojects)

### getAllPermissionSchemes
Returns all permission schemes.

### About permission schemes and grants ###

A permission scheme is a collection of permission grants. A permission grant consists of a `holder` and a `permission`.

#### Holder object ####

The `holder` object contains information about the user or group being granted the permission. For example, the *Administer projects* permission is granted to a group named *Teams in space administrators*. In this case, the type is `"type": "group"`, and the parameter is the group name, `"parameter": "Teams in space administrators"`. The `holder` object is defined by the following properties:

 *  `type` Identifies the user or group (see the list of types below).
 *  `parameter` The value of this property depends on the `type`. For example, if the `type` is a group, then you need to specify the group name.

The following `types` are available. The expected values for the `parameter` are given in parenthesis (some `types` may not have a `parameter`):

 *  `anyone` Grant for anonymous users.
 *  `applicationRole` Grant for users with access to the specified application (application name). See [Update product access settings](https://confluence.atlassian.com/x/3YxjL) for more information.
 *  `assignee` Grant for the user currently assigned to an issue.
 *  `group` Grant for the specified group (group name).
 *  `groupCustomField` Grant for a user in the group selected in the specified custom field (custom field ID).
 *  `projectLead` Grant for a project lead.
 *  `projectRole` Grant for the specified project role (project role ID).
 *  `reporter` Grant for the user who reported the issue.
 *  `sd.customer.portal.only` Jira Service Desk only. Grants customers permission to access the customer portal but not Jira. See [Customizing Jira Service Desk permissions](https://confluence.atlassian.com/x/24dKLg) for more information.
 *  `user` Grant for the specified user (user ID - historically this was the userkey but that is deprecated and the account ID should be used).
 *  `userCustomField` Grant for a user selected in the specified custom field (custom field ID).

#### Built-in permissions ####

The [built-in Jira permissions](https://confluence.atlassian.com/x/yodKLg) are listed below. Apps can also define custom permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information.

**Project permissions**

 *  `ADMINISTER_PROJECTS`
 *  `BROWSE_PROJECTS`
 *  `MANAGE_SPRINTS_PERMISSION` (Jira Software only)
 *  `SERVICEDESK_AGENT` (Jira Service Desk only)
 *  `VIEW_DEV_TOOLS` (Jira Software only)
 *  `VIEW_READONLY_WORKFLOW`

**Issue permissions**

 *  `ASSIGNABLE_USER`
 *  `ASSIGN_ISSUES`
 *  `CLOSE_ISSUES`
 *  `CREATE_ISSUES`
 *  `DELETE_ISSUES`
 *  `EDIT_ISSUES`
 *  `LINK_ISSUES`
 *  `MODIFY_REPORTER`
 *  `MOVE_ISSUES`
 *  `RESOLVE_ISSUES`
 *  `SCHEDULE_ISSUES`
 *  `SET_ISSUE_SECURITY`
 *  `TRANSITION_ISSUES`

**Voters and watchers permissions**

 *  `MANAGE_WATCHERS`
 *  `VIEW_VOTERS_AND_WATCHERS`

**Comments permissions**

 *  `ADD_COMMENTS`
 *  `DELETE_ALL_COMMENTS`
 *  `DELETE_OWN_COMMENTS`
 *  `EDIT_ALL_COMMENTS`
 *  `EDIT_OWN_COMMENTS`

**Attachments permissions**

 *  `CREATE_ATTACHMENTS`
 *  `DELETE_ALL_ATTACHMENTS`
 *  `DELETE_OWN_ATTACHMENTS`

**Time tracking permissions**

 *  `DELETE_ALL_WORKLOGS`
 *  `DELETE_OWN_WORKLOGS`
 *  `EDIT_ALL_WORKLOGS`
 *  `EDIT_OWN_WORKLOGS`
 *  `WORK_ON_ISSUES`

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getAllPermissionSchemes({}, context)
```

#### Input
* input `object`
  * expand `string`: Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:

#### Output
* output [PermissionSchemes](#permissionschemes)

### createPermissionScheme
Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createPermissionScheme({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * expand `string`: Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:
  * body **required** [PermissionScheme](#permissionscheme)

#### Output
* output [PermissionScheme](#permissionscheme)

### deletePermissionScheme
Deletes a permission scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deletePermissionScheme({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * schemeId **required** `integer`: The ID of the permission scheme being deleted.

#### Output
*Output schema unknown*

### getPermissionScheme
Returns a permission scheme.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getPermissionScheme({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * schemeId **required** `integer`: The ID of the permission scheme to return.
  * expand `string`: Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:

#### Output
* output [PermissionScheme](#permissionscheme)

### updatePermissionScheme
Updates a permission scheme. Below are some important things to note when using this resource:

 *  If a permissions list is present in the request, then it is set in the permission scheme, overwriting *all existing* grants.
 *  If you want to update only the name and description, then do not send a permissions list in the request.
 *  Sending an empty list will remove all permission grants from the permission scheme.

If you want to add or delete a permission grant instead of updating the whole list, see [Create permission grant](#api-rest-api-3-permissionscheme-schemeId-permission-post) or [Delete permission scheme entity](#api-rest-api-3-permissionscheme-schemeId-permission-permissionId-delete).

See [About permission schemes and grants](#about-permission-schemes) for more details.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updatePermissionScheme({
  "schemeId": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * schemeId **required** `integer`: The ID of the permission scheme to update.
  * expand `string`: Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:
  * body **required** [PermissionScheme](#permissionscheme)

#### Output
* output [PermissionScheme](#permissionscheme)

### getPermissionSchemeGrants
Returns all permission grants for a permission scheme.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getPermissionSchemeGrants({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * schemeId **required** `integer`: The ID of the permission scheme.
  * expand `string`: Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:

#### Output
* output [PermissionGrants](#permissiongrants)

### createPermissionGrant
Creates a permission grant in a permission scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createPermissionGrant({
  "schemeId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * schemeId **required** `integer`: The ID of the permission scheme in which to create a new permission grant.
  * expand `string`: Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:
  * body **required** [PermissionGrant](#permissiongrant)

#### Output
* output [PermissionGrant](#permissiongrant)

### deletePermissionSchemeEntity
Deletes a permission grant from a permission scheme. See [About permission schemes and grants](#about-permission-schemes) for more details.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deletePermissionSchemeEntity({
  "schemeId": 0,
  "permissionId": 0
}, context)
```

#### Input
* input `object`
  * schemeId **required** `integer`: The ID of the permission scheme to delete the permission grant from.
  * permissionId **required** `integer`: The ID of the permission grant to delete.

#### Output
*Output schema unknown*

### getPermissionSchemeGrant
Returns a permission grant.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getPermissionSchemeGrant({
  "schemeId": 0,
  "permissionId": 0
}, context)
```

#### Input
* input `object`
  * schemeId **required** `integer`: The ID of the permission scheme.
  * permissionId **required** `integer`: The ID of the permission grant.
  * expand `string`: Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:

#### Output
* output [PermissionGrant](#permissiongrant)

### getPriorities
Returns the list of all issue priorities.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getPriorities(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Priority](#priority)

### getPriority
Returns an issue priority.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getPriority({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue priority.

#### Output
* output [Priority](#priority)

### getAllProjects
Returns all projects visible to the user. Deprecated, use [ Get projects paginated](#api-rest-api-3-project-search-get) that supports search and pagination.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** Projects are returned only where the user has *Browse Projects* or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getAllProjects({}, context)
```

#### Input
* input `object`
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:
  * recent `integer`: Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session.
  * properties `array`: A list of project properties to return for the project. This parameter accepts a comma-separated list.

#### Output
* output `array`
  * items [Project](#project)

### createProject
Creates a project based on a project type template, as shown in the following table:

| Project Type Key | Project Template Key |  
|--|--|  
| `business` | `com.atlassian.jira-core-project-templates:jira-core-simplified-content-management`, `com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval`, `com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking`, `com.atlassian.jira-core-project-templates:jira-core-simplified-process-control`, `com.atlassian.jira-core-project-templates:jira-core-simplified-procurement`, `com.atlassian.jira-core-project-templates:jira-core-simplified-project-management`, `com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment`, `com.atlassian.jira-core-project-templates:jira-core-simplified-task-tracking` |  
| `service_desk` | `com.atlassian.servicedesk:simplified-it-service-desk`, `com.atlassian.servicedesk:simplified-internal-service-desk`, `com.atlassian.servicedesk:simplified-external-service-desk` |  
| `software` | `com.pyxis.greenhopper.jira:gh-simplified-agility-kanban`, `com.pyxis.greenhopper.jira:gh-simplified-agility-scrum`, `com.pyxis.greenhopper.jira:gh-simplified-basic`, `com.pyxis.greenhopper.jira:gh-simplified-kanban-classic`, `com.pyxis.greenhopper.jira:gh-simplified-scrum-classic` |  
The project types are available according to the installed Jira features as follows:

 *  Jira Core, the default, enables `business` projects.
 *  Jira Service Desk enables `service_desk` projects.
 *  Jira Software enables `software` projects.

To determine which features are installed, go to **Jira settings** > **Apps** > **Manage apps** and review the System Apps list. To add JIRA Software or JIRA Service Desk into a JIRA instance, use **Jira settings** > **Apps** > **Finding new apps**. For more information, see [ Managing add-ons](https://confluence.atlassian.com/x/S31NLg).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createProject({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ProjectInputBean](#projectinputbean)

#### Output
* output [ProjectIdentifiers](#projectidentifiers)

### searchProjects
Returns a [paginated](#pagination) list of projects visible to the user.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** Projects are returned only where the user has one of:

 *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
 *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.searchProjects({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * orderBy `string` (values: category, -category, +category, key, -key, +key, name, -name, +name, owner, -owner, +owner, issueCount, -issueCount, +issueCount, lastIssueUpdatedDate, -lastIssueUpdatedDate, +lastIssueUpdatedDate, archivedDate, +archivedDate, -archivedDate, deletedDate, +deletedDate, -deletedDate): [Order](#ordering) the results by a field.
  * query `string`: Filter the results using a literal string. Projects with a matching `key` or `name` are returned (case insensitive).
  * typeKey `string`: Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are `business`, `service_desk`, and `software`.
  * categoryId `integer`: The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.
  * searchBy `string`
  * action `string` (values: view, browse, edit): Filter results by projects for which the user can:
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:
  * status `array`: EXPERIMENTAL. Filter results by project status:

#### Output
* output [PageBeanProject](#pagebeanproject)

### getAllProjectTypes
Returns all [project types](https://confluence.atlassian.com/x/Var1Nw), whether or not the instance has a valid license for each type.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getAllProjectTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ProjectType](#projecttype)

### getAllAccessibleProjectTypes
Returns all [project types](https://confluence.atlassian.com/x/Var1Nw) with a valid license.


```js
atlassian_jira.getAllAccessibleProjectTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ProjectType](#projecttype)

### getProjectTypeByKey
Returns a [project type](https://confluence.atlassian.com/x/Var1Nw).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getProjectTypeByKey({
  "projectTypeKey": ""
}, context)
```

#### Input
* input `object`
  * projectTypeKey **required** `string` (values: software, service_desk, business): The key of the project type.

#### Output
* output [ProjectType](#projecttype)

### getAccessibleProjectTypeByKey
Returns a [project type](https://confluence.atlassian.com/x/Var1Nw) if it is accessible to the user.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getAccessibleProjectTypeByKey({
  "projectTypeKey": ""
}, context)
```

#### Input
* input `object`
  * projectTypeKey **required** `string` (values: software, service_desk, business): The key of the project type.

#### Output
* output [ProjectType](#projecttype)

### deleteProject
Deletes a project.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteProject({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * enableUndo `boolean`: Whether this project is placed in the Jira recycle bin where it will be available for restoration.

#### Output
*Output schema unknown*

### getProject
Returns the [project details](https://confluence.atlassian.com/x/ahLpNw) for a project.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getProject({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:
  * properties `array`: A list of project properties to return for the project. This parameter accepts a comma-separated list.

#### Output
* output [Project](#project)

### updateProject
Updates the [project details](https://confluence.atlassian.com/x/ahLpNw) of a project.

All parameters are optional in the body of the request.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateProject({
  "projectIdOrKey": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:
  * body **required** [ProjectInputBean](#projectinputbean)

#### Output
* output [Project](#project)

### archiveProject
Archives a project. Archived projects cannot be deleted. To delete an archived project, restore the project and then delete it. To restore a project, use the Jira UI.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.archiveProject({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`

### updateProjectAvatar
Sets the avatar displayed for a project.

Use [Load project avatar](#api-rest-api-3-project-projectIdOrKey-avatar2-post) to store avatars against the project, before using this operation to set the displayed avatar.

**[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).


```js
atlassian_jira.updateProjectAvatar({
  "projectIdOrKey": "",
  "body": {
    "id": ""
  }
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The ID or (case-sensitive) key of the project.
  * body **required** [Avatar](#avatar)

#### Output
* output `object`

### deleteProjectAvatar
Deletes a custom avatar from a project. Note that system avatars cannot be deleted.

**[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).


```js
atlassian_jira.deleteProjectAvatar({
  "projectIdOrKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or (case-sensitive) key.
  * id **required** `integer`: The ID of the avatar.

#### Output
*Output schema unknown*

### createProjectAvatar
Loads an avatar for a project.

Specify the avatar's local file location in the body of the request. Also, include the following headers:

 *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).
 *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.

For example:  
`curl --request POST `

`--user email@example.com:<api_token> `

`--header 'X-Atlassian-Token: no-check' `

`--header 'Content-Type: image/< image_type>' `

`--data-binary "<@/path/to/file/with/your/avatar>" `

`--url 'https://your-domain.atlassian.net/rest/api/3/project/{projectIdOrKey}/avatar2'`

The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image.

The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.

After creating the avatar use [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project's displayed avatar.

**[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).


```js
atlassian_jira.createProjectAvatar({
  "projectIdOrKey": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The ID or (case-sensitive) key of the project.
  * x `integer`: The X coordinate of the top-left corner of the crop region.
  * y `integer`: The Y coordinate of the top-left corner of the crop region.
  * size `integer`: The length of each side of the crop region.

#### Output
* output [Avatar](#avatar)

### getAllProjectAvatars
Returns all project avatars, grouped by system and custom avatars.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getAllProjectAvatars({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The ID or (case-sensitive) key of the project.

#### Output
* output [ProjectAvatars](#projectavatars)

### getProjectComponentsPaginated
Returns a [paginated](#pagination) list of all components in a project. See the [Get project components](#api-rest-api-3-project-projectIdOrKey-components-get) resource if you want to get a full list of versions without pagination.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getProjectComponentsPaginated({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * orderBy `string` (values: description, -description, +description, issueCount, -issueCount, +issueCount, lead, -lead, +lead, name, -name, +name): [Order](#ordering) the results by a field:
  * query `string`: Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).

#### Output
* output [PageBeanComponentWithIssueCount](#pagebeancomponentwithissuecount)

### getProjectComponents
Returns all components in a project. See the [Get project components paginated](#api-rest-api-3-project-projectIdOrKey-component-get) resource if you want to get a full list of components with pagination.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getProjectComponents({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `array`
  * items [Component](#component)

### deleteProjectAsynchronously
Deletes a project asynchronously.

This operation is:

 *  transactional, that is, if part of the delete fails the project is not deleted.
 *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteProjectAsynchronously({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output [TaskProgressBeanObject](#taskprogressbeanobject)

### getProjectPropertyKeys
Returns all [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys for the project.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getProjectPropertyKeys({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output [PropertyKeys](#propertykeys)

### deleteProjectProperty
Deletes the [property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) from a project.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.


```js
atlassian_jira.deleteProjectProperty({
  "projectIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * propertyKey **required** `string`: The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.

#### Output
*Output schema unknown*

### getProjectProperty
Returns the value of a [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.


```js
atlassian_jira.getProjectProperty({
  "projectIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * propertyKey **required** `string`: The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.

#### Output
* output [EntityProperty](#entityproperty)

### setProjectProperty
Sets the value of the [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). You can use project properties to store custom data against the project.

The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the property is created.


```js
atlassian_jira.setProjectProperty({
  "projectIdOrKey": "",
  "propertyKey": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * propertyKey **required** `string`: The key of the project property. The maximum length is 255 characters.

#### Output
* output `object`

### restore
Restores a project from the Jira recycle bin.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.restore({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output [Project](#project)

### getProjectRoles
Returns a list of [project roles](https://confluence.atlassian.com/x/3odKLg) for the project returning the name and self URL for each role.

Note that all project roles are shared with all projects in Jira Cloud. See [Get all project roles](#api-rest-api-3-role-get) for more information.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for any project on the site or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getProjectRoles({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`

### deleteActor
Deletes actors from a project role for the project.

To remove default actors from the project role, use [Delete default actors from project role](#api-rest-api-3-role-id-actors-delete).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteActor({
  "projectIdOrKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
  * user `string`: The user account ID of the user to remove from the project role.
  * group `string`: The name of the group to remove from the project role.

#### Output
*Output schema unknown*

### getProjectRole
Returns a project role's details and actors associated with the project. The list of actors is sorted by display name.

To check whether a user belongs to a role based on their group memberships, use [Get user](#api-rest-api-3-user-get) with the `groups` expand parameter selected. Then check whether the user keys and groups match with the actors returned for the project.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getProjectRole({
  "projectIdOrKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.

#### Output
* output [ProjectRole](#projectrole)

### addActorUsers
Adds actors to a project role for the project.

To replace all actors for the project, use [Set actors for project role](#api-rest-api-3-project-projectIdOrKey-role-id-put).

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.addActorUsers({
  "projectIdOrKey": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
  * body **required** [ActorsMap](#actorsmap)

#### Output
* output [ProjectRole](#projectrole)

### setActors
Sets the actors for a project role for a project, replacing all existing actors.

To add actors to the project without overwriting the existing list, use [Add actors to project role](#api-rest-api-3-project-projectIdOrKey-role-id-post).

**[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.setActors({
  "projectIdOrKey": "",
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
  * body **required** [ProjectRoleActorsUpdateBean](#projectroleactorsupdatebean)

#### Output
* output [ProjectRole](#projectrole)

### getProjectRoleDetails
Returns all [project roles](https://confluence.atlassian.com/x/3odKLg) and the details for each role. Note that the list of project roles is common to all projects.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getProjectRoleDetails({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * currentMember `boolean`: Whether the roles should be filtered to include only those the user is assigned to.
  * excludeConnectAddons `boolean`

#### Output
* output `array`
  * items [ProjectRole](#projectrole)

### getAllStatuses
Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getAllStatuses({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `array`
  * items [IssueTypeWithStatus](#issuetypewithstatus)

### updateProjectType
Deprecated, this feature is no longer supported and no alternatives are available, see [Convert project to a different template or type](https://confluence.atlassian.com/x/yEKeOQ). Updates a [project type](https://confluence.atlassian.com/x/GwiiLQ). The project type can be updated for classic projects only, project type cannot be updated for next-gen projects.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateProjectType({
  "projectIdOrKey": "",
  "newProjectTypeKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * newProjectTypeKey **required** `string` (values: software, service_desk, business): The key of the new project type.

#### Output
* output [Project](#project)

### getProjectVersionsPaginated
Returns a [paginated](#pagination) list of all versions in a project. See the [Get project versions](#api-rest-api-3-project-projectIdOrKey-versions-get) resource if you want to get a full list of versions without pagination.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getProjectVersionsPaginated({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * orderBy `string` (values: description, -description, +description, name, -name, +name, releaseDate, -releaseDate, +releaseDate, sequence, -sequence, +sequence, startDate, -startDate, +startDate): [Order](#ordering) the results by a field:
  * query `string`: Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive).
  * status `string`: A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`.
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [PageBeanVersion](#pagebeanversion)

### getProjectVersions
Returns all versions in a project. The response is not paginated. Use [Get project versions paginated](#api-rest-api-3-project-projectIdOrKey-version-get) if you want to get the versions in a project with pagination.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getProjectVersions({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version.

#### Output
* output `array`
  * items [Version](#version)

### getProjectEmail
Returns the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getProjectEmail({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: The project ID.

#### Output
* output [ProjectEmailAddress](#projectemailaddress)

### updateProjectEmail
Sets the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).

If `emailAddress` is an empty string, the default email address is restored.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.updateProjectEmail({
  "projectId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: The project ID.
  * body **required** [ProjectEmailAddress](#projectemailaddress)

#### Output
* output `object`

### getHierarchy
Get the issue type hierarchy for a next-gen project.

The issue type hierarchy for a project consists of:

 *  *Epic* at level 1 (optional).
 *  One or more issue types at level 0 such as *Story*, *Task*, or *Bug*. Where the issue type *Epic* is defined, these issue types are used to break down the content of an epic.
 *  *Subtask* at level -1 (optional). This issue type enables level 0 issue types to be broken down into components. Issues based on a level -1 issue type must have a parent issue.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.


```js
atlassian_jira.getHierarchy({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: The ID of the project.

#### Output
* output [ProjectIssueTypeHierarchy](#projectissuetypehierarchy)

### getProjectIssueSecurityScheme
Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).


```js
atlassian_jira.getProjectIssueSecurityScheme({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).

#### Output
* output [SecurityScheme](#securityscheme)

### getNotificationSchemeForProject
Gets a [notification scheme](https://confluence.atlassian.com/x/8YdKLg) associated with the project. See the [Get notification scheme](#api-rest-api-3-notificationscheme-id-get) resource for more information about notification schemes.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).


```js
atlassian_jira.getNotificationSchemeForProject({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [NotificationScheme](#notificationscheme)

### getAssignedPermissionScheme
Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).


```js
atlassian_jira.getAssignedPermissionScheme({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:

#### Output
* output [PermissionScheme](#permissionscheme)

### assignPermissionScheme
Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)


```js
atlassian_jira.assignPermissionScheme({
  "projectKeyOrId": "",
  "body": {
    "id": 0
  }
}, context)
```

#### Input
* input `object`
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:
  * body **required** [IdBean](#idbean)

#### Output
* output [PermissionScheme](#permissionscheme)

### getSecurityLevelsForProject
Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project.


```js
atlassian_jira.getSecurityLevelsForProject({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).

#### Output
* output [ProjectIssueSecurityLevels](#projectissuesecuritylevels)

### getAllProjectCategories
Returns all project categories.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getAllProjectCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ProjectCategory](#projectcategory)

### createProjectCategory
Creates a project category.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createProjectCategory({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ProjectCategory](#projectcategory)

#### Output
* output [ProjectCategory](#projectcategory)

### removeProjectCategory
Deletes a project category.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.removeProjectCategory({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the project category to delete.

#### Output
*Output schema unknown*

### getProjectCategoryById
Returns a project category.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getProjectCategoryById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project category.

#### Output
* output [ProjectCategory](#projectcategory)

### updateProjectCategory
Updates a project category.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateProjectCategory({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * body **required** [ProjectCategory](#projectcategory)

#### Output
* output [UpdatedProjectCategory](#updatedprojectcategory)

### validateProjectKey
Validates a project key by confirming the key is a valid string and not in use.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.validateProjectKey({}, context)
```

#### Input
* input `object`
  * key `string`: The project key.

#### Output
* output [ErrorCollection](#errorcollection)

### getValidProjectKey
Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getValidProjectKey({}, context)
```

#### Input
* input `object`
  * key `string`: The project key.

#### Output
* output `string`

### getValidProjectName
Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getValidProjectName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project name.

#### Output
* output `string`

### getResolutions
Returns a list of all issue resolution values.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getResolutions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Resolution](#resolution)

### getResolution
Returns an issue resolution value.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getResolution({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue resolution value.

#### Output
* output [Resolution](#resolution)

### getAllProjectRoles
Gets a list of all project roles, complete with project role details and default actors.

### About project roles ###

[Project roles](https://confluence.atlassian.com/x/3odKLg) are a flexible way to to associate users and groups with projects. In Jira Cloud, the list of project roles is shared globally with all projects, but each project can have a different set of actors associated with it (unlike groups, which have the same membership throughout all Jira applications).

Project roles are used in [permission schemes](#api-rest-api-3-permissionscheme-get), [email notification schemes](#api-rest-api-3-notificationscheme-get), [issue security levels](#api-rest-api-3-issuesecurityschemes-get), [comment visibility](#api-rest-api-3-comment-list-post), and workflow conditions.

#### Members and actors ####

In the Jira REST API, a member of a project role is called an *actor*. An *actor* is a group or user associated with a project role.

Actors may be set as [default members](https://confluence.atlassian.com/x/3odKLg#Managingprojectroles-Specifying'defaultmembers'foraprojectrole) of the project role or set at the project level:

 *  Default actors: Users and groups that are assigned to the project role for all newly created projects. The default actors can be removed at the project level later if desired.
 *  Actors: Users and groups that are associated with a project role for a project, which may differ from the default actors. This enables you to assign a user to different roles in different projects.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllProjectRoles(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ProjectRole](#projectrole)

### createProjectRole
Creates a new project role with no [default actors](#api-rest-api-3-resolution-get). You can use the [Add default actors to project role](#api-rest-api-3-role-id-actors-post) operation to add default actors to the project role after creating it.

*Note that although a new project role is available to all projects upon creation, any default actors that are associated with the project role are not added to projects that existed prior to the role being created.*<

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createProjectRole({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateUpdateRoleRequestBean](#createupdaterolerequestbean)

#### Output
* output [ProjectRole](#projectrole)

### deleteProjectRole
Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteProjectRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
  * swap `integer`: The ID of the project role that will replace the one being deleted.

#### Output
*Output schema unknown*

### getProjectRoleById
Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getProjectRoleById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.

#### Output
* output [ProjectRole](#projectrole)

### partialUpdateProjectRole
Updates either the project role's name or its description.

You cannot update both the name and description at the same time using this operation. If you send a request with a name and a description only the name is updated.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.partialUpdateProjectRole({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
  * body **required** [CreateUpdateRoleRequestBean](#createupdaterolerequestbean)

#### Output
* output [ProjectRole](#projectrole)

### fullyUpdateProjectRole
Updates the project role's name and description. You must include both a name and a description in the request.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.fullyUpdateProjectRole({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
  * body **required** [CreateUpdateRoleRequestBean](#createupdaterolerequestbean)

#### Output
* output [ProjectRole](#projectrole)

### deleteProjectRoleActorsFromRole
Deletes the [default actors](#api-rest-api-3-resolution-get) from a project role. You may delete a group or user, but you cannot delete a group and a user in the same request.

Changing a project role's default actors does not affect project role members for projects already created.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteProjectRoleActorsFromRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
  * user `string`: The user account ID of the user to remove as a default actor.
  * group `string`: The group name of the group to be removed as a default actor.

#### Output
* output [ProjectRole](#projectrole)

### getProjectRoleActorsForRole
Returns the [default actors](#api-rest-api-3-resolution-get) for the project role.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getProjectRoleActorsForRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.

#### Output
* output [ProjectRole](#projectrole)

### addProjectRoleActorsToRole
Adds [default actors](#api-rest-api-3-resolution-get) to a role. You may add groups or users, but you cannot add groups and users in the same request.

Changing a project role's default actors does not affect project role members for projects already created.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.addProjectRoleActorsToRole({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
  * body **required** [ActorInputBean](#actorinputbean)

#### Output
* output [ProjectRole](#projectrole)

### getScreens
Returns a [paginated](#pagination) list of all screens or those specified by one or more screen IDs.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getScreens({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * id `array`: The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.

#### Output
* output [PageBeanScreen](#pagebeanscreen)

### createScreen
Creates a screen with a default field tab.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createScreen({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ScreenDetails](#screendetails)

#### Output
* output [Screen](#screen)

### addFieldToDefaultScreen
Adds a field to the default tab of the default screen.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.addFieldToDefaultScreen({
  "fieldId": ""
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the field.

#### Output
* output `object`

### deleteScreen
Deletes a screen. A screen cannot be deleted if it is used in a screen scheme, workflow, or workflow draft.

Only screens used in classic projects can be deleted.


```js
atlassian_jira.deleteScreen({
  "screenId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.

#### Output
*Output schema unknown*

### updateScreen
Updates a screen. Only screens used in classic projects can be updated.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateScreen({
  "screenId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * body **required** [UpdateScreenDetails](#updatescreendetails)

#### Output
* output [Screen](#screen)

### getAvailableScreenFields
Returns the fields that can be added to a tab on a screen.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAvailableScreenFields({
  "screenId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.

#### Output
* output `array`
  * items [ScreenableField](#screenablefield)

### getAllScreenTabs
Returns the list of tabs for a screen.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
 *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.


```js
atlassian_jira.getAllScreenTabs({
  "screenId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * projectKey `string`: The key of the project.

#### Output
* output `array`
  * items [ScreenableTab](#screenabletab)

### addScreenTab
Creates a tab for a screen.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.addScreenTab({
  "screenId": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * body **required** [ScreenableTab](#screenabletab)

#### Output
* output [ScreenableTab](#screenabletab)

### deleteScreenTab
Deletes a screen tab.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteScreenTab({
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.

#### Output
*Output schema unknown*

### renameScreenTab
Updates the name of a screen tab.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.renameScreenTab({
  "screenId": 0,
  "tabId": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.
  * body **required** [ScreenableTab](#screenabletab)

#### Output
* output [ScreenableTab](#screenabletab)

### getAllScreenTabFields
Returns all fields for a screen tab.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
 *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.


```js
atlassian_jira.getAllScreenTabFields({
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.
  * projectKey `string`: The key of the project.

#### Output
* output `array`
  * items [ScreenableField](#screenablefield)

### addScreenTabField
Adds a field to a screen tab.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.addScreenTabField({
  "screenId": 0,
  "tabId": 0,
  "body": {
    "fieldId": ""
  }
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.
  * body **required** [AddFieldBean](#addfieldbean)

#### Output
* output [ScreenableField](#screenablefield)

### removeScreenTabField
Removes a field from a screen tab.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.removeScreenTabField({
  "screenId": 0,
  "tabId": 0,
  "id": ""
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.
  * id **required** `string`: The ID of the field.

#### Output
*Output schema unknown*

### moveScreenTabField
Moves a screen tab field.

If `after` and `position` are provided in the request, `position` is ignored.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.moveScreenTabField({
  "screenId": 0,
  "tabId": 0,
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.
  * id **required** `string`: The ID of the field.
  * body **required** [MoveFieldBean](#movefieldbean)

#### Output
* output `object`

### moveScreenTab
Moves a screen tab.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.moveScreenTab({
  "screenId": 0,
  "tabId": 0,
  "pos": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.
  * pos **required** `integer`: The position of tab. The base index is 0.

#### Output
* output `object`

### getScreenSchemes
Returns a [paginated](#pagination) list of screen schemes.

Only screen schemes used in classic projects are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getScreenSchemes({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * id `array`: The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.

#### Output
* output [PageBeanScreenScheme](#pagebeanscreenscheme)

### createScreenScheme
Creates a screen scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createScreenScheme({
  "body": {
    "name": "",
    "screens": null
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ScreenSchemeDetails](#screenschemedetails)

#### Output
* output [ScreenSchemeId](#screenschemeid)

### deleteScreenScheme
Deletes a screen scheme. A screen scheme cannot be deleted if it is used in an issue type screen scheme.

Only screens schemes used in classic projects can be deleted.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteScreenScheme({
  "screenSchemeId": ""
}, context)
```

#### Input
* input `object`
  * screenSchemeId **required** `string`: The ID of the screen scheme.

#### Output
*Output schema unknown*

### updateScreenScheme
Updates a screen scheme. Only screen schemes used in classic projects can be updated.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateScreenScheme({
  "screenSchemeId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * screenSchemeId **required** `string`: The ID of the screen scheme.
  * body **required** [UpdateScreenSchemeDetails](#updatescreenschemedetails)

#### Output
* output `object`

### searchForIssuesUsingJql
Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ).

If the JQL query expression is too large to be encoded as a query parameter, use the [POST](#api-rest-api-3-search-post) version of this resource.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** Issues are included in the response where the user has:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.searchForIssuesUsingJql({}, context)
```

#### Input
* input `object`
  * jql `string`: The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only.
  * validateQuery `string` (values: strict, warn, none, true, false): Determines how to validate the JQL query and treat the validation results. Supported values are:
  * fields `array`: A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:
  * expand `string`: Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:
  * properties `array`: A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, `properties=prop1,prop2&properties=prop3`. A maximum of 5 issue property keys can be specified.
  * fieldsByKeys `boolean`: Reference fields by their key (rather than ID).

#### Output
* output [SearchResults](#searchresults)

### searchForIssuesUsingJqlPost
Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ).

There is a [GET](#api-rest-api-3-search-get) version of this resource that can be used for smaller JQL query expressions.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** Issues are included in the response where the user has:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.


```js
atlassian_jira.searchForIssuesUsingJqlPost({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [SearchRequestBean](#searchrequestbean)

#### Output
* output [SearchResults](#searchresults)

### getIssueSecurityLevel
Returns details of an issue security level.

Use [Get issue security scheme](#api-rest-api-3-issuesecurityschemes-id-get) to obtain the IDs of issue security levels associated with the issue security scheme.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getIssueSecurityLevel({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue security level.

#### Output
* output [SecurityLevel](#securitylevel)

### getServerInfo
Returns information about the Jira instance.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getServerInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServerInformation](#serverinformation)

### getIssueNavigatorDefaultColumns
Returns the default issue navigator columns.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getIssueNavigatorDefaultColumns(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ColumnItem](#columnitem)

### setIssueNavigatorDefaultColumns
Sets the default issue navigator columns.

The `columns` parameter accepts a navigable field value and is expressed as HTML form data. To specify multiple columns, pass multiple `columns` parameters. For example, in curl:

`curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/settings/columns`

If no column details are sent, then all default columns are removed.

A navigable field is one that can be used as a column on the issue navigator. Find details of navigable issue columns using [Get fields](#api-rest-api-3-field-get).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.setIssueNavigatorDefaultColumns({}, context)
```

#### Input
* input `object`
  * body `array`: A navigable field value.

#### Output
* output `object`

### getStatuses
Returns a list of all statuses associated with workflows.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getStatuses(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [StatusDetails](#statusdetails)

### getStatus
Returns a status. The status must be associated with a workflow to be returned.

If a name is used on more than one status, only the status found first is returned. Therefore, identifying the status by its ID may be preferable.

This operation can be accessed anonymously.

[Permissions](#permissions) required: None.


```js
atlassian_jira.getStatus({
  "idOrName": ""
}, context)
```

#### Input
* input `object`
  * idOrName **required** `string`: The ID or name of the status.

#### Output
* output [StatusDetails](#statusdetails)

### getStatusCategories
Returns a list of all status categories.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getStatusCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [StatusCategory](#statuscategory)

### getStatusCategory
Returns a status category. Status categories provided a mechanism for categorizing [statuses](#api-rest-api-3-status-idOrName-get).

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getStatusCategory({
  "idOrKey": ""
}, context)
```

#### Input
* input `object`
  * idOrKey **required** `string`: The ID or key of the status category.

#### Output
* output [StatusCategory](#statuscategory)

### getTask
Returns the status of a [long-running asynchronous task](#async).

When a task has finished, this operation returns the JSON blob applicable to the task. See the documentation of the operation that created the task for details. Task details are not permanently retained. As of September 2019, details are retained for 14 days although this period may change without notice.

**[Permissions](#permissions) required:** either of:

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
 *  Creator of the task.


```js
atlassian_jira.getTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`: The ID of the task.

#### Output
* output [TaskProgressBeanObject](#taskprogressbeanobject)

### cancelTask
Cancels a task.

**[Permissions](#permissions) required:** either of:

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
 *  Creator of the task.


```js
atlassian_jira.cancelTask({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`: The ID of the task.

#### Output
* output `object`

### getAvatars
Returns the system and custom avatars for a project or issue type.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.getAvatars({
  "type": "",
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: project, issuetype): The avatar type.
  * entityId **required** `string`: The ID of the item the avatar is associated with.

#### Output
* output [Avatars](#avatars)

### storeAvatar
Loads a custom avatar for a project or issue type.

Specify the avatar's local file location in the body of the request. Also, include the following headers:

 *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).
 *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.

For example:  
`curl --request POST `

`--user email@example.com:<api_token> `

`--header 'X-Atlassian-Token: no-check' `

`--header 'Content-Type: image/< image_type>' `

`--data-binary "<@/path/to/file/with/your/avatar>" `

`--url 'https://your-domain.atlassian.net/rest/api/3/universal_avatar/type/{type}/owner/{entityId}'`

The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image.

The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.

After creating the avatar use:

 *  [Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type's displayed avatar.
 *  [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project's displayed avatar.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.storeAvatar({
  "type": "",
  "entityId": "",
  "size": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: project, issuetype): The avatar type.
  * entityId **required** `string`: The ID of the item the avatar is associated with.
  * x `integer`: The X coordinate of the top-left corner of the crop region.
  * y `integer`: The Y coordinate of the top-left corner of the crop region.
  * size **required** `integer`: The length of each side of the crop region.

#### Output
* output [Avatar](#avatar)

### deleteAvatar
Deletes an avatar from a project or issue type.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteAvatar({
  "type": "",
  "owningObjectId": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: project, issuetype): The avatar type.
  * owningObjectId **required** `string`: The ID of the item the avatar is associated with.
  * id **required** `integer`: The ID of the avatar.

#### Output
*Output schema unknown*

### removeUser
Deletes a user.

**[Permissions](#permissions) required:** Site administration (that is, membership of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).


```js
atlassian_jira.removeUser({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * key `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.

#### Output
*Output schema unknown*

### getUser
Returns a user.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getUser({}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
  * key `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
  * expand `string`: Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [User](#user)

### createUser
Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated.

The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting `password` from the request, include `"notification": "true"` to ensure the user is sent an email advising them that their account is created. This email includes a link for the user to set their password. If the notification isn't sent for a generated password, the user will need to be sent a reset password request from Jira.

If the user exists and has access to Jira, the operation returns a 201 status. If the user exists but does not have access to Jira, the operation returns a 400 status.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createUser({
  "body": {
    "displayName": "",
    "emailAddress": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [UserWriteBean](#userwritebean)

#### Output
* output [User](#user)

### findBulkAssignableUsers
Returns a list of users who can be assigned issues in one or more projects. The list may be restricted to users whose attributes match a string.

This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that can be assigned issues in the projects. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who can be assigned issues in the projects, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** None.


```js
atlassian_jira.findBulkAssignableUsers({
  "projectKeys": ""
}, context)
```

#### Input
* input `object`
  * query `string`: A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * accountId `string`: A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
  * projectKeys **required** `string`: A list of project keys (case sensitive). This parameter accepts a comma-separated list.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output `array`
  * items [User](#user)

### findAssignableUsers
Returns a list of users that can be assigned to an issue. Use this operation to find the list of users who can be assigned to:

 *  a new issue, by providing the `projectKeyOrId`.
 *  an updated issue, by providing the `issueKey`.
 *  to an issue during a transition (workflow action), by providing the `issueKey` and the transition id in `actionDescriptorId`. You can obtain the IDs of an issue's valid transitions using the `transitions` option in the `expand` parameter of [ Get issue](#api-rest-api-3-issue-issueIdOrKey-get).

In all these cases, you can pass an account ID to determine if a user can be assigned to an issue. The user is returned in the response if they can be assigned to the issue or issue transition.

This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that can be assigned the issue. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who can be assigned the issue, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.findAssignableUsers({}, context)
```

#### Input
* input `object`
  * query `string`: A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `username` or `accountId` is specified.
  * sessionId `string`: The sessionId of this request. SessionId is the same until the assignee is set.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * accountId `string`: A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
  * project `string`: The project ID or project key (case sensitive). Required, unless `issueKey` is specified.
  * issueKey `string`: The key of the issue. Required, unless `project` is specified.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue.
  * actionDescriptorId `integer`: The ID of the transition.
  * recommend `boolean`

#### Output
* output `array`
  * items [User](#user)

### bulkGetUsers
Returns a [paginated](#pagination) list of the users specified by one or more account IDs.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.bulkGetUsers({
  "accountId": []
}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * username `array`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * key `array`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * accountId **required** `array`: The account ID of a user. To specify multiple users, pass multiple `accountId` parameters. For example, `accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5`.

#### Output
* output [PageBeanUser](#pagebeanuser)

### bulkGetUsersMigration
Returns the account IDs for the users specified in the `key` or `username` parameters. Note that multiple `key` or `username` parameters can be specified.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.bulkGetUsersMigration({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * username `array`: Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, `username=fred&username=barney`. Required if `key` isn't provided. Cannot be provided if `key` is present.
  * key `array`: Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, `key=fred&key=barney`. Required if `username` isn't provided. Cannot be provided if `username` is present.

#### Output
* output `array`
  * items [UserMigrationBean](#usermigrationbean)

### resetUserColumns
Resets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user to the system default. If `accountId` is not passed, the calling user's default columns are reset.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.
 *  Permission to access Jira, to set the calling user's columns.


```js
atlassian_jira.resetUserColumns({}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.

#### Output
*Output schema unknown*

### getUserDefaultColumns
Returns the default [issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If `accountId` is not passed in the request, the calling user's details are returned.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLgl), to get the column details for any user.
 *  Permission to access Jira, to get the calling user's column details.


```js
atlassian_jira.getUserDefaultColumns({}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.

#### Output
* output `array`
  * items [ColumnItem](#columnitem)

### setUserColumns
Sets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If an account ID is not passed, the calling user's default columns are set. If no column details are sent, then all default columns are removed.

The parameters for this resource are expressed as HTML form data. For example, in curl:

`curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/user/columns?accountId=5b10ac8d82e05b22cc7d4ef5'`

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.
 *  Permission to access Jira, to set the calling user's columns.


```js
atlassian_jira.setUserColumns({}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * body `array`: The ID of a column to set. To set multiple columns, send multiple `columns` parameters.

#### Output
* output `object`

### getUserEmail
Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).


```js
atlassian_jira.getUserEmail({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`.

#### Output
* output [UnrestrictedUserEmail](#unrestricteduseremail)

### getUserEmailBulk
Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).


```js
atlassian_jira.getUserEmailBulk({
  "accountId": []
}, context)
```

#### Input
* input `object`
  * accountId **required** `array`: The account IDs of the users for which emails are required. An `accountId` is an identifier that uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value).

#### Output
* output [UnrestrictedUserEmail](#unrestricteduseremail)

### getUserGroups
Returns the groups to which a user belongs.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getUserGroups({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * key `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.

#### Output
* output `array`
  * items [GroupName](#groupname)

### findUsersWithAllPermissions
Returns a list of users who fulfill these criteria:

 *  their user attributes match a search string.
 *  they have a set of permissions for a project or issue.

If no search string is provided, a list of all users with the permissions is returned.

This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the search string and have permission for the project or issue. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the search string and have permission for the project or issue, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get users for any project.
 *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project, to get users for that project.


```js
atlassian_jira.findUsersWithAllPermissions({
  "permissions": ""
}, context)
```

#### Input
* input `object`
  * query `string`: A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * accountId `string`: A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
  * permissions **required** `string`: A comma separated list of permissions. Permissions can be specified as any:
  * issueKey `string`: The issue key for the issue.
  * projectKey `string`: The project key for the project (case sensitive).
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output `array`
  * items [User](#user)

### findUsersForPicker
Returns a list of users whose attributes match the query term. The returned object includes the `html` field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results.

This operation takes the users in the range defined by `maxResults`, up to the thousandth user, and then returns only the users from that range that match the query term. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the query term, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Anonymous calls and calls by users without the required permission return search results for an exact name match only.


```js
atlassian_jira.findUsersForPicker({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*.
  * maxResults `integer`: The maximum number of items to return. The total number of matched users is returned in `total`.
  * showAvatar `boolean`: Include the URI to the user's avatar.
  * exclude `array`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * excludeAccountIds `array`: A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, `excludeAccountIds=5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&excludeAccountIds=5b10ac8d82e05b22cc7d4ef5`. Cannot be provided with `exclude`.
  * avatarSize `string`
  * excludeConnectUsers `boolean`

#### Output
* output [FoundUsers](#foundusers)

### getUserPropertyKeys
Returns the keys of all properties for a user.

Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to access the property keys on any user.
 *  Access to Jira, to access the calling user's property keys.


```js
atlassian_jira.getUserPropertyKeys({}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * userKey `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.

#### Output
* output [PropertyKeys](#propertykeys)

### deleteUserProperty
Deletes a property from a user.

Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to delete a property from any user.
 *  Access to Jira, to delete a property from the calling user's record.


```js
atlassian_jira.deleteUserProperty({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * userKey `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * propertyKey **required** `string`: The key of the user's property.

#### Output
*Output schema unknown*

### getUserProperty
Returns the value of a user's property. If no property key is provided [Get user property keys](#api-rest-api-3-user-properties-get) is called.

Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get a property from any user.
 *  Access to Jira, to get a property from the calling user's record.


```js
atlassian_jira.getUserProperty({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * userKey `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * propertyKey **required** `string`: The key of the user's property.

#### Output
* output [EntityProperty](#entityproperty)

### setUserProperty
Sets the value of a user's property. Use this resource to store custom data against a user.

Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.

**[Permissions](#permissions) required:**

 *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set a property on any user.
 *  Access to Jira, to set a property on the calling user's record.


```js
atlassian_jira.setUserProperty({
  "propertyKey": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * userKey `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * propertyKey **required** `string`: The key of the user's property. The maximum length is 255 characters.

#### Output
* output `object`

### findUsers
Returns a list of users that match the search string and property.

This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the search string and property. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the search string and property, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Anonymous calls or calls by users without the required permission return empty search results.


```js
atlassian_jira.findUsers({}, context)
```

#### Input
* input `object`
  * query `string`: A query string that is matched against user attributes ( `displayName`, and `emailAddress`) to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` or `property` is specified.
  * username `string`
  * accountId `string`: A query string that is matched exactly against a user `accountId`. Required, unless `query` or `property` is specified.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * property `string`: A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of `nested` from `{"something":{"nested":1,"other":2}}` use `thepropertykey.something.nested=1`. Required, unless `accountId` or `query` is specified.

#### Output
* output `array`
  * items [User](#user)

### findUsersByQuery
Finds users with a structured query and returns a [paginated](#pagination) list of user details.

This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the structured query. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the structured query, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).

The query statements are:

 *  `is assignee of PROJ` Returns the users that are assignees of at least one issue in project *PROJ*.
 *  `is assignee of (PROJ-1, PROJ-2)` Returns users that are assignees on the issues *PROJ-1* or *PROJ-2*.
 *  `is reporter of (PROJ-1, PROJ-2)` Returns users that are reporters on the issues *PROJ-1* or *PROJ-2*.
 *  `is watcher of (PROJ-1, PROJ-2)` Returns users that are watchers on the issues *PROJ-1* or *PROJ-2*.
 *  `is voter of (PROJ-1, PROJ-2)` Returns users that are voters on the issues *PROJ-1* or *PROJ-2*.
 *  `is commenter of (PROJ-1, PROJ-2)` Returns users that have posted a comment on the issues *PROJ-1* or *PROJ-2*.
 *  `is transitioner of (PROJ-1, PROJ-2)` Returns users that have performed a transition on issues *PROJ-1* or *PROJ-2*.
 *  `[propertyKey].entity.property.path is "property value"` Returns users with the entity property value.

The list of issues can be extended as needed, as in *(PROJ-1, PROJ-2, ... PROJ-n)*. Statements can be combined using the `AND` and `OR` operators to form more complex queries. For example:

`is assignee of PROJ AND [propertyKey].entity.property.path is "property value"`


```js
atlassian_jira.findUsersByQuery({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The search query.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanUser](#pagebeanuser)

### findUserKeysByQuery
Finds users with a structured query and returns a [paginated](#pagination) list of user keys.

This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the structured query. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the structured query, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).

The query statements are:

 *  `is assignee of PROJ` Returns the users that are assignees of at least one issue in project *PROJ*.
 *  `is assignee of (PROJ-1, PROJ-2)` Returns users that are assignees on the issues *PROJ-1* or *PROJ-2*.
 *  `is reporter of (PROJ-1, PROJ-2)` Returns users that are reporters on the issues *PROJ-1* or *PROJ-2*.
 *  `is watcher of (PROJ-1, PROJ-2)` Returns users that are watchers on the issues *PROJ-1* or *PROJ-2*.
 *  `is voter of (PROJ-1, PROJ-2)` Returns users that are voters on the issues *PROJ-1* or *PROJ-2*.
 *  `is commenter of (PROJ-1, PROJ-2)` Returns users that have posted a comment on the issues *PROJ-1* or *PROJ-2*.
 *  `is transitioner of (PROJ-1, PROJ-2)` Returns users that have performed a transition on issues *PROJ-1* or *PROJ-2*.
 *  `[propertyKey].entity.property.path is "property value"` Returns users with the entity property value.

The list of issues can be extended as needed, as in *(PROJ-1, PROJ-2, ... PROJ-n)*. Statements can be combined using the `AND` and `OR` operators to form more complex queries. For example:

`is assignee of PROJ AND [propertyKey].entity.property.path is "property value"`


```js
atlassian_jira.findUserKeysByQuery({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The search query.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanUserKey](#pagebeanuserkey)

### findUsersWithBrowsePermission
Returns a list of users who fulfill these criteria:

 *  their user attributes match a search string.
 *  they have permission to browse issues.

Use this resource to find users who can browse:

 *  an issue, by providing the `issueKey`.
 *  any issue in a project, by providing the `projectKey`.

This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the search string and have permission to browse issues. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the search string and have permission to browse issues, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Anonymous calls and calls by users without the required permission return empty search results.


```js
atlassian_jira.findUsersWithBrowsePermission({}, context)
```

#### Input
* input `object`
  * query `string`: A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.
  * username `string`: This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * accountId `string`: A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
  * issueKey `string`: The issue key for the issue. Required, unless `projectKey` is specified.
  * projectKey `string`: The project key for the project (case sensitive). Required, unless `issueKey` is specified.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output `array`
  * items [User](#user)

### getAllUsersDefault
Returns a list of all (active and inactive) users.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllUsersDefault({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return.
  * maxResults `integer`: The maximum number of items to return.

#### Output
* output `array`
  * items [User](#user)

### getAllUsers
Returns a list of all (active and inactive) users.

**[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllUsers({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return.
  * maxResults `integer`: The maximum number of items to return.

#### Output
* output `array`
  * items [User](#user)

### createVersion
Creates a project version.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the version is added to.


```js
atlassian_jira.createVersion({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Version](#version)

#### Output
* output [Version](#version)

### deleteVersion
Deletes a project version.

Deprecated, use [ Delete and replace version](#api-rest-api-3-version-id-removeAndSwap-post) that supports swapping version values in custom fields, in addition to the swapping for `fixVersion` and `affectedVersion` provided in this resource.

Alternative versions can be provided to update issues that use the deleted version in `fixVersion` or `affectedVersion`. If alternatives are not provided, occurrences of `fixVersion` and `affectedVersion` that contain the deleted version are cleared.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.


```js
atlassian_jira.deleteVersion({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version.
  * moveFixIssuesTo `string`: The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
  * moveAffectedIssuesTo `string`: The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.

#### Output
*Output schema unknown*

### getVersion
Returns a project version.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the version.


```js
atlassian_jira.getVersion({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version.
  * expand `string`: Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [Version](#version)

### updateVersion
Updates a project version.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.


```js
atlassian_jira.updateVersion({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version.
  * body **required** [Version](#version)

#### Output
* output [Version](#version)

### mergeVersions
Merges two project versions. The merge is completed by deleting the version specified in `id` and replacing any occurrences of its ID in `fixVersion` with the version ID specified in `moveIssuesTo`.

Consider using [ Delete and replace version](#api-rest-api-3-version-id-removeAndSwap-post) instead. This resource supports swapping version values in `fixVersion`, `affectedVersion`, and custom fields.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.


```js
atlassian_jira.mergeVersions({
  "id": "",
  "moveIssuesTo": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version to delete.
  * moveIssuesTo **required** `string`: The ID of the version to merge into.

#### Output
* output `object`

### moveVersion
Modifies the version's sequence within the project, which affects the display order of the versions in Jira.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.


```js
atlassian_jira.moveVersion({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version to be moved.
  * body **required** [VersionMoveBean](#versionmovebean)

#### Output
* output [Version](#version)

### getVersionRelatedIssues
Returns the following counts for a version:

 *  Number of issues where the `fixVersion` is set to the version.
 *  Number of issues where the `affectedVersion` is set to the version.
 *  Number of issues where a version custom field is set to the version.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.


```js
atlassian_jira.getVersionRelatedIssues({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version.

#### Output
* output [VersionIssueCounts](#versionissuecounts)

### deleteAndReplaceVersion
Deletes a project version.

Alternative versions can be provided to update issues that use the deleted version in `fixVersion`, `affectedVersion`, or any version picker custom fields. If alternatives are not provided, occurrences of `fixVersion`, `affectedVersion`, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.


```js
atlassian_jira.deleteAndReplaceVersion({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version.
  * body **required** [DeleteAndReplaceVersionBean](#deleteandreplaceversionbean)

#### Output
* output `object`

### getVersionUnresolvedIssues
Returns counts of the issues and unresolved issues for the project version.

This operation can be accessed anonymously.

**[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.


```js
atlassian_jira.getVersionUnresolvedIssues({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version.

#### Output
* output [VersionUnresolvedIssuesCount](#versionunresolvedissuescount)

### deleteWebhookById
Removes webhooks by ID. Only webhooks registered by the calling Connect app are removed. If webhooks created by other apps are specified, they are ignored.

**[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation.


```js
atlassian_jira.deleteWebhookById({
  "body": {
    "webhookIds": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ContainerForWebhookIDs](#containerforwebhookids)

#### Output
*Output schema unknown*

### getDynamicWebhooksForApp
Returns a [paginated](#pagination) list of the webhooks registered by the calling app.

**[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation.


```js
atlassian_jira.getDynamicWebhooksForApp({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanWebhook](#pagebeanwebhook)

### registerDynamicWebhooks
Registers webhooks.

**[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation.


```js
atlassian_jira.registerDynamicWebhooks({
  "body": {
    "url": "",
    "webhooks": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WebhookRegistrationDetails](#webhookregistrationdetails)

#### Output
* output [ContainerForRegisteredWebhooks](#containerforregisteredwebhooks)

### getFailedWebhooks
Returns webhooks that have recently failed to be delivered to the requesting app after the maximum number of retries.

After 72 hours the failure may no longer be returned by this operation.

The oldest failure is returned first.

This method uses a cursor-based pagination. To request the next page use the failure time of the last webhook on the list as the `failedAfter` value or use the URL provided in `next`.

**[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation.


```js
atlassian_jira.getFailedWebhooks({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page.
  * after `integer`: The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch.

#### Output
* output [FailedWebhooks](#failedwebhooks)

### refreshWebhooks
Webhooks registered through the REST API expire after 30 days. Call this resource periodically to keep them alive.

Unrecognized webhook IDs (nonexistent or belonging to other apps) are ignored.

**[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/integrating-with-jira-cloud/#atlassian-connect) can use this operation.


```js
atlassian_jira.refreshWebhooks({
  "body": {
    "webhookIds": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ContainerForWebhookIDs](#containerforwebhookids)

#### Output
* output [WebhooksExpirationDate](#webhooksexpirationdate)

### getAllWorkflows
Returns all workflows in Jira or a workflow. Deprecated, use [Get workflows paginated](#api-rest-api-3-workflow-search-get).

If the `workflowName` parameter is specified, the workflow is returned as an object (not in an array). Otherwise, an array of workflow objects is returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllWorkflows({}, context)
```

#### Input
* input `object`
  * workflowName `string`: The name of the workflow to be returned. Only one workflow can be specified.

#### Output
* output `array`
  * items [DeprecatedWorkflow](#deprecatedworkflow)

### getWorkflowTransitionRuleConfigurations
Returns a [paginated](#pagination) list of workflows with transition rules. The workflows can be filtered to return only those containing workflow transition rules:

 *  of one or more transition rule types, such as [workflow post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/).
 *  matching one or more transition rule keys.

Only workflows containing transition rules created by the calling Connect app are returned. However, if a workflow is returned all transition rules that match the filters are returned for that workflow.

Due to server-side optimizations, workflows with an empty list of rules may be returned; these workflows can be ignored.

**[Permissions](#permissions) required:** Only Connect apps can use this operation.


```js
atlassian_jira.getWorkflowTransitionRuleConfigurations({
  "types": []
}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * types **required** `array`: The types of the transition rules to return.
  * keys `array`: The transition rule class keys, as defined in the Connect app descriptor, of the transition rules to return.
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to.

#### Output
* output [PageBeanWorkflowTransitionRules](#pagebeanworkflowtransitionrules)

### updateWorkflowTransitionRuleConfigurations
Updates configuration of workflow transition rules. The following rule types are supported:

 *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)
 *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)
 *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)

Only rules created by the calling Connect app can be updated.

**[Permissions](#permissions) required:** Only Connect apps can use this operation.


```js
atlassian_jira.updateWorkflowTransitionRuleConfigurations({
  "body": {
    "workflows": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WorkflowTransitionRulesUpdate](#workflowtransitionrulesupdate)

#### Output
* output [WorkflowTransitionRulesUpdateErrors](#workflowtransitionrulesupdateerrors)

### getWorkflowsPaginated
Returns a [paginated](#pagination) list of published classic workflows. When workflow names are specified, details of those workflows are returned. Otherwise, all published classic workflows are returned.

This operation does not return next-gen workflows.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getWorkflowsPaginated({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.
  * workflowName `array`: The name of a workflow to return.
  * expand `string`: Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:

#### Output
* output [PageBeanWorkflow](#pagebeanworkflow)

### deleteWorkflowTransitionProperty
Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteWorkflowTransitionProperty({
  "transitionId": 0,
  "key": "",
  "workflowName": ""
}, context)
```

#### Input
* input `object`
  * transitionId **required** `integer`: The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
  * key **required** `string`: The name of the transition property to delete, also known as the name of the property.
  * workflowName **required** `string`: The name of the workflow that the transition belongs to.
  * workflowMode `string` (values: live, draft): The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.

#### Output
*Output schema unknown*

### getWorkflowTransitionProperties
Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getWorkflowTransitionProperties({
  "transitionId": 0,
  "workflowName": ""
}, context)
```

#### Input
* input `object`
  * transitionId **required** `integer`: The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
  * includeReservedKeys `boolean`: Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*.
  * key `string`: The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
  * workflowName **required** `string`: The name of the workflow that the transition belongs to.
  * workflowMode `string` (values: live, draft): The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows.

#### Output
* output [WorkflowTransitionProperty](#workflowtransitionproperty)

### createWorkflowTransitionProperty
Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createWorkflowTransitionProperty({
  "transitionId": 0,
  "key": "",
  "workflowName": "",
  "body": {
    "value": ""
  }
}, context)
```

#### Input
* input `object`
  * transitionId **required** `integer`: The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
  * key **required** `string`: The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
  * workflowName **required** `string`: The name of the workflow that the transition belongs to.
  * workflowMode `string` (values: live, draft): The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited.
  * body **required** [WorkflowTransitionProperty](#workflowtransitionproperty)

#### Output
* output [WorkflowTransitionProperty](#workflowtransitionproperty)

### updateWorkflowTransitionProperty
Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateWorkflowTransitionProperty({
  "transitionId": 0,
  "key": "",
  "workflowName": "",
  "body": {
    "value": ""
  }
}, context)
```

#### Input
* input `object`
  * transitionId **required** `integer`: The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
  * key **required** `string`: The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
  * workflowName **required** `string`: The name of the workflow that the transition belongs to.
  * workflowMode `string` (values: live, draft): The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.
  * body **required** [WorkflowTransitionProperty](#workflowtransitionproperty)

#### Output
* output [WorkflowTransitionProperty](#workflowtransitionproperty)

### getAllWorkflowSchemes
Returns a [paginated](#pagination) list of all workflow schemes, not including draft workflow schemes.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getAllWorkflowSchemes({}, context)
```

#### Input
* input `object`
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * maxResults `integer`: The maximum number of items to return per page.

#### Output
* output [PageBeanWorkflowScheme](#pagebeanworkflowscheme)

### createWorkflowScheme
Creates a workflow scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createWorkflowScheme({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [WorkflowScheme](#workflowscheme)

#### Output
* output [WorkflowScheme](#workflowscheme)

### getWorkflowSchemeProjectAssociations
Returns a list of the workflow schemes associated with a list of projects. Each returned workflow scheme includes a list of the requested projects associated with it. Any next-gen or non-existent projects in the request are ignored and no errors are returned.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getWorkflowSchemeProjectAssociations({
  "projectId": []
}, context)
```

#### Input
* input `object`
  * projectId **required** `array`: The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`.

#### Output
* output [ContainerOfWorkflowSchemeAssociations](#containerofworkflowschemeassociations)

### associateSchemeWithProject
Assigns a workflow scheme to a project. This operation is performed only when there are no issues in the project.

Workflow schemes can only be assigned to classic projects.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.associateSchemeWithProject({
  "body": {
    "projectId": "",
    "workflowSchemeId": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [WorkflowSchemeProjectAssociation](#workflowschemeprojectassociation)

#### Output
* output `object`

### deleteWorkflowScheme
Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteWorkflowScheme({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.

#### Output
*Output schema unknown*

### getWorkflowScheme
Returns a workflow scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getWorkflowScheme({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
  * returnDraftIfExists `boolean`: Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.

#### Output
* output [WorkflowScheme](#workflowscheme)

### updateWorkflowScheme
Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that `updateDraftIfNeeded` is set to `true`.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateWorkflowScheme({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
  * body **required** [WorkflowScheme](#workflowscheme)

#### Output
* output [WorkflowScheme](#workflowscheme)

### createWorkflowSchemeDraftFromParent
Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.createWorkflowSchemeDraftFromParent({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the active workflow scheme that the draft is created from.

#### Output
* output [WorkflowScheme](#workflowscheme)

### deleteDefaultWorkflow
Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira's system workflow (the *jira* workflow).

Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` and a draft workflow scheme is created or updated with the default workflow reset. The draft workflow scheme can be published in Jira.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteDefaultWorkflow({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * updateDraftIfNeeded `boolean`: Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.

#### Output
* output [WorkflowScheme](#workflowscheme)

### getDefaultWorkflow
Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed in its issue types for the workflow scheme in Jira.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getDefaultWorkflow({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * returnDraftIfExists `boolean`: Set to `true` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.

#### Output
* output [DefaultWorkflow](#defaultworkflow)

### updateDefaultWorkflow
Sets the default workflow for a workflow scheme.

Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` in the request object and a draft workflow scheme is created or updated with the new default workflow. The draft workflow scheme can be published in Jira.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateDefaultWorkflow({
  "id": 0,
  "body": {
    "workflow": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * body **required** [DefaultWorkflow](#defaultworkflow)

#### Output
* output [WorkflowScheme](#workflowscheme)

### deleteWorkflowSchemeDraft
Deletes a draft workflow scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteWorkflowSchemeDraft({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the active workflow scheme that the draft was created from.

#### Output
*Output schema unknown*

### getWorkflowSchemeDraft
Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See [Configuring workflow schemes](https://confluence.atlassian.com/x/tohKLg) for more information.  
Note that:

 *  Only active workflow schemes can have draft workflow schemes.
 *  An active workflow scheme can only have one draft workflow scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getWorkflowSchemeDraft({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the active workflow scheme that the draft was created from.

#### Output
* output [WorkflowScheme](#workflowscheme)

### updateWorkflowSchemeDraft
Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateWorkflowSchemeDraft({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the active workflow scheme that the draft was created from.
  * body **required** [WorkflowScheme](#workflowscheme)

#### Output
* output [WorkflowScheme](#workflowscheme)

### deleteDraftDefaultWorkflow
Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system workflow (the *jira* workflow).

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteDraftDefaultWorkflow({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.

#### Output
* output [WorkflowScheme](#workflowscheme)

### getDraftDefaultWorkflow
Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed in its issue types for the workflow scheme in Jira.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getDraftDefaultWorkflow({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.

#### Output
* output [DefaultWorkflow](#defaultworkflow)

### updateDraftDefaultWorkflow
Sets the default workflow for a workflow scheme's draft.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateDraftDefaultWorkflow({
  "id": 0,
  "body": {
    "workflow": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * body **required** [DefaultWorkflow](#defaultworkflow)

#### Output
* output [WorkflowScheme](#workflowscheme)

### deleteWorkflowSchemeDraftIssueType
Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteWorkflowSchemeDraftIssueType({
  "id": 0,
  "issueType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * issueType **required** `string`: The ID of the issue type.

#### Output
* output [WorkflowScheme](#workflowscheme)

### getWorkflowSchemeDraftIssueType
Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getWorkflowSchemeDraftIssueType({
  "id": 0,
  "issueType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * issueType **required** `string`: The ID of the issue type.

#### Output
* output [IssueTypeWorkflowMapping](#issuetypeworkflowmapping)

### setWorkflowSchemeDraftIssueType
Sets the workflow for an issue type in a workflow scheme's draft.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.setWorkflowSchemeDraftIssueType({
  "id": 0,
  "issueType": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * issueType **required** `string`: The ID of the issue type.
  * body **required** [IssueTypeWorkflowMapping](#issuetypeworkflowmapping)

#### Output
* output [WorkflowScheme](#workflowscheme)

### deleteDraftWorkflowMapping
Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteDraftWorkflowMapping({
  "id": 0,
  "workflowName": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * workflowName **required** `string`: The name of the workflow.

#### Output
*Output schema unknown*

### getDraftWorkflow
Returns the workflow-issue type mappings for a workflow scheme's draft.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getDraftWorkflow({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * workflowName `string`: The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.

#### Output
* output [IssueTypesWorkflowMapping](#issuetypesworkflowmapping)

### updateDraftWorkflowMapping
Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateDraftWorkflowMapping({
  "id": 0,
  "workflowName": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * workflowName **required** `string`: The name of the workflow.
  * body **required** [IssueTypesWorkflowMapping](#issuetypesworkflowmapping)

#### Output
* output [WorkflowScheme](#workflowscheme)

### deleteWorkflowSchemeIssueType
Deletes the issue type-workflow mapping for an issue type in a workflow scheme.

Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` and a draft workflow scheme is created or updated with the issue type-workflow mapping deleted. The draft workflow scheme can be published in Jira.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteWorkflowSchemeIssueType({
  "id": 0,
  "issueType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * issueType **required** `string`: The ID of the issue type.
  * updateDraftIfNeeded `boolean`: Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`.

#### Output
* output [WorkflowScheme](#workflowscheme)

### getWorkflowSchemeIssueType
Returns the issue type-workflow mapping for an issue type in a workflow scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getWorkflowSchemeIssueType({
  "id": 0,
  "issueType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * issueType **required** `string`: The ID of the issue type.
  * returnDraftIfExists `boolean`: Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.

#### Output
* output [IssueTypeWorkflowMapping](#issuetypeworkflowmapping)

### setWorkflowSchemeIssueType
Sets the workflow for an issue type in a workflow scheme.

Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` in the request body and a draft workflow scheme is created or updated with the new issue type-workflow mapping. The draft workflow scheme can be published in Jira.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.setWorkflowSchemeIssueType({
  "id": 0,
  "issueType": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * issueType **required** `string`: The ID of the issue type.
  * body **required** [IssueTypeWorkflowMapping](#issuetypeworkflowmapping)

#### Output
* output [WorkflowScheme](#workflowscheme)

### deleteWorkflowMapping
Deletes the workflow-issue type mapping for a workflow in a workflow scheme.

Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` and a draft workflow scheme is created or updated with the workflow-issue type mapping deleted. The draft workflow scheme can be published in Jira.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.deleteWorkflowMapping({
  "id": 0,
  "workflowName": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * workflowName **required** `string`: The name of the workflow.
  * updateDraftIfNeeded `boolean`: Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.

#### Output
*Output schema unknown*

### getWorkflow
Returns the workflow-issue type mappings for a workflow scheme.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.getWorkflow({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * workflowName `string`: The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
  * returnDraftIfExists `boolean`: Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.

#### Output
* output [IssueTypesWorkflowMapping](#issuetypesworkflowmapping)

### updateWorkflowMapping
Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.

Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` in the request body and a draft workflow scheme is created or updated with the new workflow-issue types mappings. The draft workflow scheme can be published in Jira.

**[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).


```js
atlassian_jira.updateWorkflowMapping({
  "id": 0,
  "workflowName": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * workflowName **required** `string`: The name of the workflow.
  * body **required** [IssueTypesWorkflowMapping](#issuetypesworkflowmapping)

#### Output
* output [WorkflowScheme](#workflowscheme)

### getIdsOfWorklogsDeletedSince
Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.

This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set to true on the last page of worklogs.

This resource does not return worklogs deleted during the minute preceding the request.

**[Permissions](#permissions) required:** Permission to access Jira.


```js
atlassian_jira.getIdsOfWorklogsDeletedSince({}, context)
```

#### Input
* input `object`
  * since `integer`: The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned.

#### Output
* output [ChangedWorklogs](#changedworklogs)

### getWorklogsForIds
Returns worklog details for a list of worklog IDs.

The returned list of worklogs is limited to 1000 items.

**[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true:

 *  the worklog is set as *Viewable by All Users*.
 *  the user is a member of a project role or group with permission to view the worklog.


```js
atlassian_jira.getWorklogsForIds({
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * expand `string`: Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.
  * body **required** [WorklogIdsRequestBean](#worklogidsrequestbean)

#### Output
* output `array`
  * items [Worklog](#worklog)

### getIdsOfWorklogsModifiedSince
Returns a list of IDs and update timestamps for worklogs updated after a date and time.

This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set to true on the last page of worklogs.

This resource does not return worklogs updated during the minute preceding the request.

**[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true:

 *  the worklog is set as *Viewable by All Users*.
 *  the user is a member of a project role or group with permission to view the worklog.


```js
atlassian_jira.getIdsOfWorklogsModifiedSince({}, context)
```

#### Input
* input `object`
  * since `integer`: The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned.
  * expand `string`: Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.

#### Output
* output [ChangedWorklogs](#changedworklogs)

### AddonPropertiesResource.getAddonProperties_get
Gets all the properties of an app.

**[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.


```js
atlassian_jira.AddonPropertiesResource.getAddonProperties_get({
  "addonKey": ""
}, context)
```

#### Input
* input `object`
  * addonKey **required** `string`: The key of the app, as defined in its descriptor.

#### Output
* output [PropertyKeys](#propertykeys)

### AddonPropertiesResource.deleteAddonProperty_delete
Deletes an app's property.

**[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.


```js
atlassian_jira.AddonPropertiesResource.deleteAddonProperty_delete({
  "addonKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * addonKey **required** `string`: The key of the app, as defined in its descriptor.
  * propertyKey **required** `string`: The key of the property.

#### Output
*Output schema unknown*

### AddonPropertiesResource.getAddonProperty_get
Returns the key and value of an app's property.

**[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.


```js
atlassian_jira.AddonPropertiesResource.getAddonProperty_get({
  "addonKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * addonKey **required** `string`: The key of the app, as defined in its descriptor.
  * propertyKey **required** `string`: The key of the property.

#### Output
* output [EntityProperty](#entityproperty)

### AddonPropertiesResource.putAddonProperty_put
Sets the value of an app's property. Use this resource to store custom data for your app.

The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.

**[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.


```js
atlassian_jira.AddonPropertiesResource.putAddonProperty_put({
  "addonKey": "",
  "propertyKey": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * addonKey **required** `string`: The key of the app, as defined in its descriptor.
  * propertyKey **required** `string`: The key of the property.

#### Output
* output [OperationMessage](#operationmessage)

### DynamicModulesResource.removeModules_delete
Remove all or a list of modules registered by the calling app.

**[Permissions](#permissions) required:** Only Connect apps can make this request.


```js
atlassian_jira.DynamicModulesResource.removeModules_delete({}, context)
```

#### Input
* input `object`
  * moduleKey `array`: The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter.

#### Output
*Output schema unknown*

### DynamicModulesResource.getModules_get
Returns all modules registered dynamically by the calling app.

**[Permissions](#permissions) required:** Only Connect apps can make this request.


```js
atlassian_jira.DynamicModulesResource.getModules_get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ConnectModules](#connectmodules)

### DynamicModulesResource.registerModules_post
Registers a list of modules.

**[Permissions](#permissions) required:** Only Connect apps can make this request.


```js
atlassian_jira.DynamicModulesResource.registerModules_post({
  "body": {
    "modules": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ConnectModules](#connectmodules)

#### Output
*Output schema unknown*



## Definitions

### ActorInputBean
* ActorInputBean `object`
  * group `array`: The name of the group to add as a default actor. This parameter accepts a comma-separated list. For example, `"group":["project-admin", "jira-developers"]`.
    * items `string`
  * user `array`: The account IDs of the users to add as default actors. This parameter accepts a comma-separated list. For example, `"user":["5b10a2844c20165700ede21g", "5b109f2e9729b51b54dc274d"]`.
    * items `string`

### ActorsMap
* ActorsMap `object`
  * group `array`: The name of the group to add.
    * items `string`
  * user `array`: The user account ID of the user to add.
    * items `string`

### AddFieldBean
* AddFieldBean `object`
  * fieldId **required** `string`: The ID of the field to add.

### AddGroupBean
* AddGroupBean `object`
  * name **required** `string`: The name of the group.

### Application
* Application `object`: The application the linked item is in.
  * name `string`: The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link". Grouping and sorting of links may place links without an application name last.
  * type `string`: The name-spaced type of the application, used by registered rendering apps.

### ApplicationProperty
* ApplicationProperty `object`: Details of an application property.
  * allowedValues `array`: The allowed values, if applicable.
    * items `string`
  * defaultValue `string`: The default value of the application property.
  * desc `string`: The description of the application property.
  * example `string`
  * id `string`: The ID of the application property. The ID and key are the same.
  * key `string`: The key of the application property. The ID and key are the same.
  * name `string`: The name of the application property.
  * type `string`: The data type of the application property.
  * value `string`: The new value.

### ApplicationRole
* ApplicationRole `object`: Details of an application role.
  * defaultGroups `array`: The groups that are granted default access for this application role.
    * items `string`
  * defined `boolean`: Deprecated.
  * groups `array`: The groups associated with the application role.
    * items `string`
  * hasUnlimitedSeats `boolean`
  * key `string`: The key of the application role.
  * name `string`: The display name of the application role.
  * numberOfSeats `integer`: The maximum count of users on your license.
  * platform `boolean`: Indicates if the application role belongs to Jira platform (`jira-core`).
  * remainingSeats `integer`: The count of users remaining on your license.
  * selectedByDefault `boolean`: Determines whether this application role should be selected by default on user creation.
  * userCount `integer`: The number of users counting against your license.
  * userCountDescription `string`: The [type of users](https://confluence.atlassian.com/x/lRW3Ng) being counted against your license.

### AssociatedItemBean
* AssociatedItemBean `object`: Details of an item associated with the changed record.
  * id `string`: The ID of the associated record.
  * name `string`: The name of the associated record.
  * parentId `string`: The ID of the associated parent record.
  * parentName `string`: The name of the associated parent record.
  * typeName `string`: The type of the associated record.

### Attachment
* Attachment `object`: Details about an attachment.
  * author: Details of the user who added the attachment.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
    * active `boolean`: Whether the user is active.
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
  * content `string`: The content of the attachment.
  * created `string`: The datetime the attachment was created.
  * filename `string`: The file name of the attachment.
  * id `string`: The ID of the attachment.
  * mimeType `string`: The MIME type of the attachment.
  * self `string`: The URL of the attachment details response.
  * size `integer`: The size of the attachment.
  * thumbnail `string`: The URL of a thumbnail representing the attachment.

### AttachmentArchiveEntry
* AttachmentArchiveEntry `object`
  * abbreviatedName `string`
  * entryIndex `integer`
  * mediaType `string`
  * name `string`
  * size `integer`

### AttachmentArchiveImpl
* AttachmentArchiveImpl `object`
  * entries `array`: The list of the items included in the archive.
    * items [AttachmentArchiveEntry](#attachmentarchiveentry)
  * totalEntryCount `integer`: The number of items in the archive.

### AttachmentArchiveItemReadable
* AttachmentArchiveItemReadable `object`: Metadata for an item in an attachment archive.
  * index `integer`: The position of the item within the archive.
  * label `string`: The label for the archive item.
  * mediaType `string`: The MIME type of the archive item.
  * path `string`: The path of the archive item.
  * size `string`: The size of the archive item.

### AttachmentArchiveMetadataReadable
* AttachmentArchiveMetadataReadable `object`: Metadata for an archive (for example a zip) and its contents.
  * entries `array`: The list of the items included in the archive.
    * items [AttachmentArchiveItemReadable](#attachmentarchiveitemreadable)
  * id `integer`: The ID of the attachment.
  * mediaType `string`: The MIME type of the attachment.
  * name `string`: The name of the archive file.
  * totalEntryCount `integer`: The number of items included in the archive.

### AttachmentMetadata
* AttachmentMetadata `object`: Metadata for an issue attachment.
  * author: Details of the user who attached the file.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * content `string`: The URL of the attachment.
  * created `string`: The datetime the attachment was created.
  * filename `string`: The name of the attachment file.
  * id `integer`: The ID of the attachment.
  * mimeType `string`: The MIME type of the attachment.
  * properties `object`: Additional properties of the attachment.
  * self `string`: The URL of the attachment metadata details.
  * size `integer`: The size of the attachment.
  * thumbnail `string`: The URL of a thumbnail representing the attachment.

### AttachmentSettings
* AttachmentSettings `object`: Details of the instance's attachment settings.
  * enabled `boolean`: Whether the ability to add attachments is enabled.
  * uploadLimit `integer`: The maximum size of attachments permitted, in bytes.

### AuditRecordBean
* AuditRecordBean `object`: An audit record.
  * associatedItems `array`: The list of items associated with the changed record.
    * items [AssociatedItemBean](#associateditembean)
  * authorKey `string`: Deprecated, use `authorAccountId` instead. The key of the user who created the audit record.
  * category `string`: The category of the audit record. For a list of these categories, see the help article [Auditing in Jira applications](https://confluence.atlassian.com/x/noXKM).
  * changedValues `array`: The list of values changed in the record event.
    * items [ChangedValueBean](#changedvaluebean)
  * created `string`: The date and time on which the audit record was created.
  * description `string`: The description of the audit record.
  * eventSource `string`: The event the audit record originated from.
  * id `integer`: The ID of the audit record.
  * objectItem [AssociatedItemBean](#associateditembean)
  * remoteAddress `string`: The URL of the computer where the creation of the audit record was initiated.
  * summary `string`: The summary of the audit record.

### AuditRecords
* AuditRecords `object`: Container for a list of audit records.
  * limit `integer`: The requested or default limit on the number of audit items to be returned.
  * offset `integer`: The number of audit items skipped before the first item in this list.
  * records `array`: The list of audit items.
    * items [AuditRecordBean](#auditrecordbean)
  * total `integer`: The total number of audit items returned.

### AutoCompleteSuggestion
* AutoCompleteSuggestion `object`: A field auto-complete suggestion.
  * displayName `string`: The display name of a suggested item. If `fieldValue` or `predicateValue` are provided, the matching text is highlighted with the HTML bold tag.
  * value `string`: The value of a suggested item.

### AutoCompleteSuggestions
* AutoCompleteSuggestions `object`: The results from a JQL query.
  * results `array`: The list of suggested item.
    * items [AutoCompleteSuggestion](#autocompletesuggestion)

### Avatar
* Avatar `object`: Details of an avatar.
  * fileName `string`: The file name of the avatar icon. Returned for system avatars.
  * id **required** `string`: The ID of the avatar.
  * isDeletable `boolean`: Whether the avatar can be deleted.
  * isSelected `boolean`: Whether the avatar is used in Jira. For example, shown as a project's avatar.
  * isSystemAvatar `boolean`: Whether the avatar is a system avatar.
  * owner `string`: The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user.
  * urls `object`: The list of avatar icon URLs.

### AvatarUrlsBean
* AvatarUrlsBean `object`
  * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
  * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
  * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
  * 48x48 `string`: The URL of the item's 48x48 pixel avatar.

### Avatars
* Avatars `object`: Details about system and custom avatars.
  * custom `array`: Custom avatars list.
    * items [Avatar](#avatar)
  * system `array`: System avatars list.
    * items [Avatar](#avatar)

### BulkCreateCustomFieldOptionRequest
* BulkCreateCustomFieldOptionRequest `object`: Details of options to create for a custom field.
  * options `array`: Details of options to create.
    * items [CustomFieldOptionValue](#customfieldoptionvalue)

### BulkCustomFieldOptionCreateRequest
* BulkCustomFieldOptionCreateRequest `object`: Details of the options to create for a custom field.
  * options `array`: Details of options to create.
    * items [CustomFieldOptionCreate](#customfieldoptioncreate)

### BulkCustomFieldOptionUpdateRequest
* BulkCustomFieldOptionUpdateRequest `object`: Details of the options to update for a custom field.
  * options `array`: Details of the options to update.
    * items [CustomFieldOptionUpdate](#customfieldoptionupdate)

### BulkIssuePropertyUpdateRequest
* BulkIssuePropertyUpdateRequest `object`: Bulk issue property update request details.
  * filter: The bulk operation filter.
    * entityIds `array`: List of issues to perform the bulk operation on.
      * items `integer`
    * hasProperty `boolean`: Whether the bulk operation occurs only when the property is present on or absent from an issue.

### BulkOperationErrorResult
* BulkOperationErrorResult `object`
  * elementErrors [ErrorCollection](#errorcollection)
  * failedElementNumber `integer`
  * status `integer`

### BulkPermissionGrants
* BulkPermissionGrants `object`: Details of global and project permissions granted to the user.
  * globalPermissions **required** `array`: List of permissions granted to the user.
    * items `string`
  * projectPermissions **required** `array`: List of project permissions and the projects and issues those permissions provide access to.
    * items [BulkProjectPermissionGrants](#bulkprojectpermissiongrants)

### BulkPermissionsRequestBean
* BulkPermissionsRequestBean `object`: Details of global permissions to look up and project permissions with associated projects and issues to look up.
  * accountId `string`: The account ID of a user.
  * globalPermissions `array`: Global permissions to look up.
    * items `string`
  * projectPermissions `array`: Project permissions with associated projects and issues to look up.
    * items [BulkProjectPermissions](#bulkprojectpermissions)

### BulkProjectPermissionGrants
* BulkProjectPermissionGrants `object`: List of project permissions and the projects and issues those permissions grant access to.
  * issues **required** `array`: IDs of the issues the user has the permission for.
    * items `integer`
  * permission **required** `string`: A project permission,
  * projects **required** `array`: IDs of the projects the user has the permission for.
    * items `integer`

### BulkProjectPermissions
* BulkProjectPermissions `object`: Details of project permissions and associated issues and projects to look up.
  * issues `array`: List of issue IDs.
    * items `integer`
  * permissions **required** `array`: List of project permissions.
    * items `string`
  * projects `array`: List of project IDs.
    * items `integer`

### ChangeDetails
* ChangeDetails `object`: A change item.
  * field `string`: The name of the field changed.
  * fieldId `string`: The ID of the field changed.
  * fieldtype `string`: The type of the field changed.
  * from `string`: The details of the original value.
  * fromString `string`: The details of the original value as a string.
  * to `string`: The details of the new value.

### ChangedValueBean
* ChangedValueBean `object`: Details of names changed in the record event.
  * changedFrom `string`: The value of the field before the change.
  * changedTo `string`: The value of the field after the change.
  * fieldName `string`: The name of the field changed.

### ChangedWorklog
* ChangedWorklog `object`: Details of a changed worklog.
  * properties `array`: Details of properties associated with the change.
    * items [EntityProperty](#entityproperty)
  * updatedTime `integer`: The datetime of the change.
  * worklogId `integer`: The ID of the worklog.

### ChangedWorklogs
* ChangedWorklogs `object`: List of changed worklogs.
  * lastPage `boolean`
  * nextPage `string`: The URL of the next list of changed worklogs.
  * self `string`: The URL of this changed worklogs list.
  * since `integer`: The datetime of the first worklog item in the list.
  * until `integer`: The datetime of the last worklog item in the list.
  * values `array`: Changed worklog list.
    * items [ChangedWorklog](#changedworklog)

### Changelog
* Changelog `object`: A changelog.
  * author: The user who made the change.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
    * active `boolean`: Whether the user is active.
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
  * created `string`: The date on which the change took place.
  * historyMetadata: The history metadata associated with the changed.
    * activityDescription `string`: The activity described in the history record.
    * activityDescriptionKey `string`: The key of the activity described in the history record.
    * actor: Details of the user whose action created the history record.
      * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
      * displayName `string`: The display name of the user or system associated with a history record.
      * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
      * id `string`: The ID of the user or system associated with a history record.
      * type `string`: The type of the user or system associated with a history record.
      * url `string`: The URL of the user or system associated with a history record.
    * cause: Details of the cause that triggered the creation the history record.
      * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
      * displayName `string`: The display name of the user or system associated with a history record.
      * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
      * id `string`: The ID of the user or system associated with a history record.
      * type `string`: The type of the user or system associated with a history record.
      * url `string`: The URL of the user or system associated with a history record.
    * description `string`: The description of the history record.
    * descriptionKey `string`: The description key of the history record.
    * emailDescription `string`: The description of the email address associated the history record.
    * emailDescriptionKey `string`: The description key of the email address associated the history record.
    * extraData `object`: Additional arbitrary information about the history record.
    * generator: Details of the system that generated the history record.
      * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
      * displayName `string`: The display name of the user or system associated with a history record.
      * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
      * id `string`: The ID of the user or system associated with a history record.
      * type `string`: The type of the user or system associated with a history record.
      * url `string`: The URL of the user or system associated with a history record.
    * type `string`: The type of the history record.
  * id `string`: The ID of the changelog.
  * items `array`: The list of items changed.
    * items [ChangeDetails](#changedetails)

### ColumnItem
* ColumnItem `object`: Details of an issue navigator column item.
  * label `string`: The issue navigator column label.
  * value `string`: The issue navigator column value.

### Comment
* Comment `object`: A comment.
  * author: The ID of the user who created the comment.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
    * active `boolean`: Whether the user is active.
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
  * created `string`: The date and time at which the comment was created.
  * id `string`: The ID of the comment.
  * jsdPublic `boolean`: Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation.
  * properties `array`: A list of comment properties. Optional on create and update.
    * items [EntityProperty](#entityproperty)
  * renderedBody `string`: The rendered version of the comment.
  * self `string`: The URL of the comment.
  * updateAuthor: The ID of the user who updated the comment last.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
    * active `boolean`: Whether the user is active.
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
  * updated `string`: The date and time at which the comment was updated last.
  * visibility: The group or role to which this comment is visible. Optional on create and update.
    * type `string` (values: group, role): Whether visibility of this item is restricted to a group or role.
    * value `string`: The name of the group or role to which visibility of this item is restricted.

### Component
* Component `object`: Details about a project component.
  * assignee: The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * assigneeType `string` (values: PROJECT_DEFAULT, COMPONENT_LEAD, PROJECT_LEAD, UNASSIGNED): The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:
  * description `string`: The description for the component. Optional when creating or updating a component.
  * id `string`: The unique identifier for the component.
  * isAssigneeTypeValid `boolean`: Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
  * lead: The user details for the component's lead user.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * leadAccountId `string`: The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * leadUserName `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * name `string`: The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters.
  * project `string`: The key of the project the component is assigned to. Required when creating a component. Can't be updated.
  * projectId `integer`: The ID of the project the component is assigned to.
  * realAssignee: The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * realAssigneeType `string` (values: PROJECT_DEFAULT, COMPONENT_LEAD, PROJECT_LEAD, UNASSIGNED): The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:
  * self `string`: The URL of the component.

### ComponentIssuesCount
* ComponentIssuesCount `object`: Count of issues assigned to a component.
  * issueCount `integer`: The count of issues assigned to a component.
  * self `string`: The URL for this count of issues for a component.

### ComponentWithIssueCount
* ComponentWithIssueCount `object`: Details about a component with a count of the issues it contains.
  * assignee: The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * assigneeType `string` (values: PROJECT_DEFAULT, COMPONENT_LEAD, PROJECT_LEAD, UNASSIGNED): The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Takes the following values:
  * description `string`: The description for the component.
  * id `string`: The unique identifier for the component.
  * isAssigneeTypeValid `boolean`: Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
  * issueCount `integer`: Count of issues for the component.
  * lead: The user details for the component's lead user.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * name `string`: The name for the component.
  * project `string`: The key of the project to which the component is assigned.
  * projectId `integer`: Not used.
  * realAssignee: The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * realAssigneeType `string` (values: PROJECT_DEFAULT, COMPONENT_LEAD, PROJECT_LEAD, UNASSIGNED): The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:
  * self `string`: The URL for this count of the issues contained in the component.

### CompoundClause
* CompoundClause `object`: A JQL query clause that consists of nested clauses. For example, `(labels in (urgent, blocker) OR lastCommentedBy = currentUser()). Note that, where nesting is not defined, the parser nests JQL clauses based on the operator precedence. For example, "A OR B AND C" is parsed as "(A OR B) AND C". See Setting the precedence of operators for more information about precedence in JQL queries.`
  * clauses **required** `array`: The list of nested clauses.
    * items [JqlQueryClause](#jqlqueryclause)
  * operator **required** `string` (values: and, or, not): The operator between the clauses.

### Configuration
* Configuration `object`: Details about the configuration of Jira.
  * attachmentsEnabled `boolean`: Whether the ability to add attachments to issues is enabled.
  * issueLinkingEnabled `boolean`: Whether the ability to link issues is enabled.
  * subTasksEnabled `boolean`: Whether the ability to create subtasks for issues is enabled.
  * timeTrackingConfiguration: The configuration of time tracking.
    * defaultUnit **required** `string` (values: minute, hour, day, week): The default unit of time applied to logged time.
    * timeFormat **required** `string` (values: pretty, days, hours): The format that will appear on an issue's *Time Spent* field.
    * workingDaysPerWeek **required** `number`: The number of days in a working week.
    * workingHoursPerDay **required** `number`: The number of hours in a working day.
  * timeTrackingEnabled `boolean`: Whether the ability to track time is enabled. This property is deprecated.
  * unassignedIssuesAllowed `boolean`: Whether the ability to create unassigned issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
  * votingEnabled `boolean`: Whether the ability for users to vote on issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
  * watchingEnabled `boolean`: Whether the ability for users to watch issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.

### ConnectModule
* ConnectModule `object`: A [Connect module](https://developer.atlassian.com/cloud/jira/platform/about-jira-modules/) in the same format as in the

### ConnectModules
* ConnectModules `object`
  * modules **required** `array`: A list of app modules in the same format as the `modules` property in the
    * items [ConnectModule](#connectmodule)

### ConnectWorkflowTransitionRule
* ConnectWorkflowTransitionRule `object`: A workflow transition rule.
  * configuration **required** [RuleConfiguration](#ruleconfiguration)
  * id **required** `string`: The ID of the transition rule.
  * key **required** `string`: The key of the rule, as defined in the Connect app descriptor.
  * transition
    * id **required** `integer`: The transition ID.
    * name **required** `string`: The transition name.

### ContainerForRegisteredWebhooks
* ContainerForRegisteredWebhooks `object`: Container for a list of registered webhooks. Webhook details are returned in the same order as the request.
  * webhookRegistrationResult `array`: A list of registered webhooks.
    * items [RegisteredWebhook](#registeredwebhook)

### ContainerForWebhookIDs
* ContainerForWebhookIDs `object`: Container for a list of webhook IDs.
  * webhookIds **required** `array`: A list of webhook IDs.
    * items `integer`: A list of webhook IDs.

### ContainerOfWorkflowSchemeAssociations
* ContainerOfWorkflowSchemeAssociations `object`: A container for a list of workflow schemes together with the projects they are associated with.
  * values **required** `array`: A list of workflow schemes together with projects they are associated with.
    * items [WorkflowSchemeAssociations](#workflowschemeassociations)

### Context
* Context `object`: A context.
  * id `integer`: The ID of the context.
  * name `string`: The name of the context.
  * scope: The scope of the context.
    * project: The project the item has scope in.
      * avatarUrls: The URLs of the project's avatars.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * id `string`: The ID of the project.
      * key `string`: The key of the project.
      * name `string`: The name of the project.
      * projectCategory: The category the project belongs to.
        * description `string`: The name of the project category.
        * id `string`: The ID of the project category.
        * name `string`: The description of the project category.
        * self `string`: The URL of the project category.
      * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
      * self `string`: The URL of the project details.
      * simplified `boolean`: Whether or not the project is simplified.
    * type `string` (values: PROJECT, TEMPLATE): The type of scope.

### ContextForProjectAndIssueType
* ContextForProjectAndIssueType `object`: The project and issue type mapping with a matching custom field context.
  * contextId **required** `string`: The ID of the custom field context.
  * issueTypeId **required** `string`: The ID of the issue type.
  * projectId **required** `string`: The ID of the project.

### ConvertedJQLQueries
* ConvertedJQLQueries `object`: The converted JQL queries.
  * queriesWithUnknownUsers `array`: List of queries containing user information that could not be mapped to an existing user
    * items [JQLQueryWithUnknownUsers](#jqlquerywithunknownusers)
  * queryStrings `array`: The list of converted query strings with account IDs in place of user identifiers.
    * items `string`

### CreateCustomFieldContext
* CreateCustomFieldContext `object`: The details of a created custom field context.
  * description `string`: The description of the context.
  * id `string`: The ID of the context.
  * issueTypeIds `array`: The list of issue types IDs for the context. If the list is empty, the context refers to all issue types.
    * items `string`
  * name **required** `string`: The name of the context.
  * projectIds `array`: The list of project IDs associated with the context. If the list is empty, the context is global.
    * items `string`

### CreateUpdateRoleRequestBean
* CreateUpdateRoleRequestBean `object`
  * description `string`: A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.
  * name `string`: The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role.

### CreatedIssue
* CreatedIssue `object`: Details about a created issue or subtask.
  * id `string`: The ID of the created issue or subtask.
  * key `string`: The key of the created issue or subtask.
  * self `string`: The URL of the created issue or subtask.
  * transition: The response code and messages related to any requested transition.
    * errorCollection [ErrorCollection](#errorcollection)
    * status `integer`

### CreatedIssues
* CreatedIssues `object`: Details about the issues created and the errors for requests that failed.
  * errors `array`: Error details for failed issue creation requests.
    * items [BulkOperationErrorResult](#bulkoperationerrorresult)
  * issues `array`: Details of the issues created.
    * items [CreatedIssue](#createdissue)

### CustomFieldContext
* CustomFieldContext `object`: The details of a custom field context.
  * description **required** `string`: The description of the context.
  * id **required** `string`: The ID of the context.
  * isAnyIssueType **required** `boolean`: Whether the context apply to all issue types.
  * isGlobalContext **required** `boolean`: Whether the context is global.
  * name **required** `string`: The name of the context.

### CustomFieldContextOption
* CustomFieldContextOption `object`: Details of the custom field options for a context.
  * disabled **required** `boolean`: Whether the option is disabled.
  * id **required** `string`: The ID of the custom field option.
  * optionId `string`: For cascading options, the ID of the custom field option containing the cascading option.
  * value **required** `string`: The value of the custom field option.

### CustomFieldContextUpdateDetails
* CustomFieldContextUpdateDetails `object`: Details of a custom field context.
  * description `string`: The description of the custom field context. The maximum length is 255 characters.
  * name `string`: The name of the custom field context. The name must be unique. The maximum length is 255 characters.

### CustomFieldCreatedContextOptionsList
* CustomFieldCreatedContextOptionsList `object`: A list of custom field options for a context.
  * options `array`: The created custom field options.
    * items [CustomFieldContextOption](#customfieldcontextoption)

### CustomFieldDefinitionJsonBean
* CustomFieldDefinitionJsonBean `object`
  * description `string`: The description of the custom field, which is displayed in Jira.
  * name **required** `string`: The name of the custom field, which is displayed in Jira. This is not the unique identifier.
  * searcherKey **required** `string` (values: com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher, com.atlassian.jira.plugin.system.customfieldtypes:daterange, com.atlassian.jira.plugin.system.customfieldtypes:datetimerange, com.atlassian.jira.plugin.system.customfieldtypes:exactnumber, com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher, com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher, com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher, com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher, com.atlassian.jira.plugin.system.customfieldtypes:numberrange, com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher, com.atlassian.jira.plugin.system.customfieldtypes:textsearcher, com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher, com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher): The searcher defines the way the field is searched in Jira. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher*.  
  * type **required** `string` (values: com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect, com.atlassian.jira.plugin.system.customfieldtypes:datepicker, com.atlassian.jira.plugin.system.customfieldtypes:datetime, com.atlassian.jira.plugin.system.customfieldtypes:float, com.atlassian.jira.plugin.system.customfieldtypes:grouppicker, com.atlassian.jira.plugin.system.customfieldtypes:importid, com.atlassian.jira.plugin.system.customfieldtypes:labels, com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes, com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker, com.atlassian.jira.plugin.system.customfieldtypes:multiselect, com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker, com.atlassian.jira.plugin.system.customfieldtypes:multiversion, com.atlassian.jira.plugin.system.customfieldtypes:project, com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons, com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield, com.atlassian.jira.plugin.system.customfieldtypes:select, com.atlassian.jira.plugin.system.customfieldtypes:textarea, com.atlassian.jira.plugin.system.customfieldtypes:textfield, com.atlassian.jira.plugin.system.customfieldtypes:url, com.atlassian.jira.plugin.system.customfieldtypes:userpicker, com.atlassian.jira.plugin.system.customfieldtypes:version): The type of the custom field. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppicker*.

### CustomFieldOption
* CustomFieldOption `object`: Details of a custom option for a field.
  * self `string`: The URL of these custom field option details.
  * value `string`: The value of the custom field option.

### CustomFieldOptionCreate
* CustomFieldOptionCreate `object`: Details of a custom field option to create.
  * disabled `boolean`: Whether the option is disabled.
  * optionId `string`: For cascading options, the ID of the custom field object containing the cascading option.
  * value **required** `string`: The value of the custom field option.

### CustomFieldOptionDetails
* CustomFieldOptionDetails `object`: Details of a custom field option and its cascading options.
  * cascadingOptions `array`: The cascading options.
    * items `string`
  * id `integer`: The ID of the custom field option.
  * value `string`: The value of the custom field option.

### CustomFieldOptionUpdate
* CustomFieldOptionUpdate `object`: Details of a custom field option for a context.
  * disabled `boolean`: Whether the option is disabled.
  * id **required** `string`: The ID of the custom field option.
  * value `string`: The value of the custom field option.

### CustomFieldOptionValue
* CustomFieldOptionValue `object`: Value of a custom field option and the values of its cascading options.
  * cascadingOptions `array`: The cascading options.
    * items `string`
  * value **required** `string`: The value of the custom field option.

### CustomFieldReplacement
* CustomFieldReplacement `object`: Details about the replacement for a deleted version.
  * customFieldId `integer`: The ID of the custom field in which to replace the version number.
  * moveTo `integer`: The version number to use as a replacement for the deleted version.

### CustomFieldUpdatedContextOptionsList
* CustomFieldUpdatedContextOptionsList `object`: A list of custom field options for a context.
  * options `array`: The updated custom field options.
    * items [CustomFieldOptionUpdate](#customfieldoptionupdate)

### Dashboard
* Dashboard `object`: Details of a dashboard.
  * description `string`
  * id `string`: The ID of the dashboard.
  * isFavourite `boolean`: Whether the dashboard is selected as a favorite by the user.
  * name `string`: The name of the dashboard.
  * owner: The owner of the dashboard.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    * active `boolean`: Whether the user is active.
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the user's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the user's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the user's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the user's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * key `string`: This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
    * name `string`: This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
    * self `string`: The URL of the user.
  * popularity `integer`: The number of users who have this dashboard as a favorite.
  * rank `integer`: The rank of this dashboard.
  * self `string`: The URL of these dashboard details.
  * sharePermissions `array`: The details of any share permissions for the dashboard.
    * items [SharePermission](#sharepermission)
  * view `string`: The URL of the dashboard.

### DashboardDetails
* DashboardDetails `object`: Details of a dashboard.
  * description `string`: The description of the dashboard.
  * name **required** `string`: The name of the dashboard.
  * sharePermissions **required** `array`: The details of any share permissions for the dashboard.
    * items [SharePermission](#sharepermission)

### DefaultShareScope
* DefaultShareScope `object`: Details of the scope of the default sharing for new filters and dashboards.
  * scope **required** `string` (values: GLOBAL, AUTHENTICATED, PRIVATE): The scope of the default sharing for new filters and dashboards:

### DefaultWorkflow
* DefaultWorkflow `object`: Details about the default workflow.
  * updateDraftIfNeeded `boolean`: Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`.
  * workflow **required** `string`: The name of the workflow to set as the default workflow.

### DeleteAndReplaceVersionBean
* DeleteAndReplaceVersionBean `object`
  * customFieldReplacementList `array`: An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version.
    * items [CustomFieldReplacement](#customfieldreplacement)
  * moveAffectedIssuesTo `integer`: The ID of the version to update `affectedVersion` to when the field contains the deleted version.
  * moveFixIssuesTo `integer`: The ID of the version to update `fixVersion` to when the field contains the deleted version.

### DeprecatedWorkflow
* DeprecatedWorkflow `object`: Details about a workflow.
  * default `boolean`
  * description `string`: The description of the workflow.
  * lastModifiedDate `string`: The datetime the workflow was last modified.
  * lastModifiedUser `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * lastModifiedUserAccountId `string`: The account ID of the user that last modified the workflow.
  * name `string`: The name of the workflow.
  * scope: The scope where this workflow applies
    * project: The project the item has scope in.
      * avatarUrls: The URLs of the project's avatars.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * id `string`: The ID of the project.
      * key `string`: The key of the project.
      * name `string`: The name of the project.
      * projectCategory: The category the project belongs to.
        * description `string`: The name of the project category.
        * id `string`: The ID of the project category.
        * name `string`: The description of the project category.
        * self `string`: The URL of the project category.
      * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
      * self `string`: The URL of the project details.
      * simplified `boolean`: Whether or not the project is simplified.
    * type `string` (values: PROJECT, TEMPLATE): The type of scope.
  * steps `integer`: The number of steps included in the workflow.

### EntityProperty
* EntityProperty `object`: An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).
  * key `string`: The key of the property. Required on create and update.

### ErrorCollection
* ErrorCollection `object`: Error messages from an operation.
  * errorMessages `array`: The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
    * items `string`
  * errors `object`: The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
  * status `integer`

### ErrorMessage
* ErrorMessage `object`
  * message **required** `string`: The error message.

### EventNotification
* EventNotification `object`: Details about a notification associated with an event.
  * emailAddress `string`: The email address.
  * expand `string`: Expand options that include additional event notification details in the response.
  * field: The custom user or group field.
    * clauseNames `array`: The names that can be used to reference the field in an advanced search. For more information, see [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ).
      * items `string`
    * custom `boolean`: Whether the field is a custom field.
    * id `string`: The ID of the field.
    * key `string`: The key of the field.
    * name `string`: The name of the field.
    * navigable `boolean`: Whether the field can be used as a column on the issue navigator.
    * orderable `boolean`: Whether the content of the field can be used to order lists.
    * schema: The data schema for the field.
      * configuration `object`: If the field is a custom field, the configuration of the field.
      * custom `string`: If the field is a custom field, the URI of the field.
      * customId `integer`: If the field is a custom field, the custom ID of the field.
      * items `string`: When the data type is an array, the name of the field items within the array.
      * system `string`: If the field is a system field, the name of the field.
      * type **required** `string`: The data type of the field.
    * scope: The scope of the field.
      * project: The project the item has scope in.
        * avatarUrls: The URLs of the project's avatars.
          * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
          * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
          * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
          * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
        * id `string`: The ID of the project.
        * key `string`: The key of the project.
        * name `string`: The name of the project.
        * projectCategory: The category the project belongs to.
          * description `string`: The name of the project category.
          * id `string`: The ID of the project category.
          * name `string`: The description of the project category.
          * self `string`: The URL of the project category.
        * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
        * self `string`: The URL of the project details.
        * simplified `boolean`: Whether or not the project is simplified.
      * type `string` (values: PROJECT, TEMPLATE): The type of scope.
    * searchable `boolean`: Whether the content of the field can be searched.
  * group: The specified group.
    * name `string`: The name of group.
    * self `string`: The URL for these group details.
  * id `integer`: The ID of the notification.
  * notificationType `string` (values: CurrentAssignee, Reporter, CurrentUser, ProjectLead, ComponentLead, User, Group, ProjectRole, EmailAddress, AllWatchers, UserCustomField, GroupCustomField): Identifies the recipients of the notification.
  * parameter `string`: The value of the `notificationType`:
  * projectRole: The specified project role.
    * actors `array`: The list of users who act in this role.
      * items [RoleActor](#roleactor)
    * admin `boolean`: Whether this role is the admin role for the project.
    * currentUserRole `boolean`: Whether the calling user is part of this role.
    * default `boolean`: Whether this role is the default role for the project
    * description `string`: The description of the project role.
    * id `integer`: The ID of the project role.
    * name `string`: The name of the project role.
    * roleConfigurable `boolean`: Whether the roles are configurable for this project.
    * scope: The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
      * project: The project the item has scope in.
        * avatarUrls: The URLs of the project's avatars.
          * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
          * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
          * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
          * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
        * id `string`: The ID of the project.
        * key `string`: The key of the project.
        * name `string`: The name of the project.
        * projectCategory: The category the project belongs to.
          * description `string`: The name of the project category.
          * id `string`: The ID of the project category.
          * name `string`: The description of the project category.
          * self `string`: The URL of the project category.
        * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
        * self `string`: The URL of the project details.
        * simplified `boolean`: Whether or not the project is simplified.
      * type `string` (values: PROJECT, TEMPLATE): The type of scope.
    * self `string`: The URL the project role details.
    * translatedName `string`: The translated name of the project role.
  * user: The specified user.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
    * active `boolean`: Whether the user is active.
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.

### FailedWebhook
* FailedWebhook `object`: Details about a failed webhook.
  * body `string`: The webhook body.
  * failureTime **required** `integer`: The time the webhook was added to the list of failed webhooks (that is, the time of the last failed retry).
  * id **required** `string`: The webhook ID, as sent in the `X-Atlassian-Webhook-Identifier` header with the webhook.
  * url **required** `string`: The original webhook destination.

### FailedWebhooks
* FailedWebhooks `object`: A page of failed webhooks.
  * maxResults **required** `integer`: The maximum number of items on the page. If the list of values is shorter than this number, then there are no more pages.
  * next `string`: The URL to the next page of results. Present only if the request returned at least one result.The next page may be empty at the time of receiving the response, but new failed webhooks may appear in time. You can save the URL to the next page and query for new results periodically (for example, every hour).
  * values **required** `array`: The list of webhooks.
    * items [FailedWebhook](#failedwebhook)

### Field
* Field `object`: Details of a field.
  * contextsCount `integer`: Number of contexts where the field is used.
  * description `string`: The description of the field.
  * id **required** `string`: The ID of the field.
  * isLocked `boolean`: Whether the field is locked.
  * key `string`: The key of the field.
  * lastUsed [FieldLastUsed](#fieldlastused)
  * name **required** `string`: The name of the field.
  * schema **required** [JsonTypeBean](#jsontypebean)
  * screensCount `integer`: Number of screens where the field is used.

### FieldChangedClause
* FieldChangedClause `object`: A clause that asserts whether a field was changed. For example, `status CHANGED AFTER startOfMonth(-1M)`.See [CHANGED](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for more information about the CHANGED operator.
  * field **required** [JqlQueryField](#jqlqueryfield)
  * operator **required** `string` (values: changed): The operator applied to the field.
  * predicates **required** `array`: The list of time predicates.
    * items [JqlQueryClauseTimePredicate](#jqlqueryclausetimepredicate)

### FieldConfiguration
* FieldConfiguration `object`: Details of a field configuration.
  * description **required** `string`: The description of the field configuration.
  * id **required** `integer`: The ID of the field configuration.
  * isDefault `boolean`: Whether the field configuration is the default.
  * name **required** `string`: The name of the field configuration.

### FieldConfigurationIssueTypeItem
* FieldConfigurationIssueTypeItem `object`: The field configuration for an issue type.
  * fieldConfigurationId **required** `string`: The ID of the field configuration.
  * fieldConfigurationSchemeId **required** `string`: The ID of the field configuration scheme.
  * issueTypeId **required** `string`: The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration.

### FieldConfigurationItem
* FieldConfigurationItem `object`: A field within a field configuration.
  * description `string`: The description of the field within the field configuration.
  * id **required** `string`: The ID of the field within the field configuration.
  * isHidden `boolean`: Whether the field is hidden in the field configuration.
  * isRequired `boolean`: Whether the field is required in the field configuration.

### FieldConfigurationScheme
* FieldConfigurationScheme `object`: Details of a field configuration scheme.
  * description `string`: The description of the field configuration scheme.
  * id **required** `string`: The ID of the field configuration scheme.
  * name **required** `string`: The name of the field configuration scheme.

### FieldConfigurationSchemeProjectAssociation
* FieldConfigurationSchemeProjectAssociation `object`: Associated field configuration scheme and project.
  * fieldConfigurationSchemeId `string`: The ID of the field configuration scheme. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.
  * projectId **required** `string`: The ID of the project.

### FieldConfigurationSchemeProjects
* FieldConfigurationSchemeProjects `object`: Project list with assigned field configuration schema.
  * fieldConfigurationScheme [FieldConfigurationScheme](#fieldconfigurationscheme)
  * projectIds **required** `array`: The IDs of projects using the field configuration scheme.
    * items `string`: The IDs of projects using the field configuration scheme.

### FieldDetails
* FieldDetails `object`: Details about a field.
  * clauseNames `array`: The names that can be used to reference the field in an advanced search. For more information, see [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ).
    * items `string`
  * custom `boolean`: Whether the field is a custom field.
  * id `string`: The ID of the field.
  * key `string`: The key of the field.
  * name `string`: The name of the field.
  * navigable `boolean`: Whether the field can be used as a column on the issue navigator.
  * orderable `boolean`: Whether the content of the field can be used to order lists.
  * schema: The data schema for the field.
    * configuration `object`: If the field is a custom field, the configuration of the field.
    * custom `string`: If the field is a custom field, the URI of the field.
    * customId `integer`: If the field is a custom field, the custom ID of the field.
    * items `string`: When the data type is an array, the name of the field items within the array.
    * system `string`: If the field is a system field, the name of the field.
    * type **required** `string`: The data type of the field.
  * scope: The scope of the field.
    * project: The project the item has scope in.
      * avatarUrls: The URLs of the project's avatars.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * id `string`: The ID of the project.
      * key `string`: The key of the project.
      * name `string`: The name of the project.
      * projectCategory: The category the project belongs to.
        * description `string`: The name of the project category.
        * id `string`: The ID of the project category.
        * name `string`: The description of the project category.
        * self `string`: The URL of the project category.
      * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
      * self `string`: The URL of the project details.
      * simplified `boolean`: Whether or not the project is simplified.
    * type `string` (values: PROJECT, TEMPLATE): The type of scope.
  * searchable `boolean`: Whether the content of the field can be searched.

### FieldLastUsed
* FieldLastUsed `object`: Information about the most recent use of a field.
  * type `string` (values: TRACKED, NOT_TRACKED, NO_INFORMATION): Last used value type:
  * value `string`: The date when the value of the field last changed.

### FieldMetadata
* FieldMetadata `object`: The metadata describing an issue field.
  * allowedValues `array`: The list of values allowed in the field.
  * autoCompleteUrl `string`: The URL that can be used to automatically complete the field.
  * hasDefaultValue `boolean`: Whether the field has a default value.
  * key **required** `string`: The key of the field.
  * name **required** `string`: The name of the field.
  * operations **required** `array`: The list of operations that can be performed on the field.
    * items `string`
  * required **required** `boolean`: Whether the field is required.
  * schema **required**: The data type of the field.
    * configuration `object`: If the field is a custom field, the configuration of the field.
    * custom `string`: If the field is a custom field, the URI of the field.
    * customId `integer`: If the field is a custom field, the custom ID of the field.
    * items `string`: When the data type is an array, the name of the field items within the array.
    * system `string`: If the field is a system field, the name of the field.
    * type **required** `string`: The data type of the field.

### FieldReferenceData
* FieldReferenceData `object`: Details of a field that can be used in advanced searches.
  * auto `string` (values: true, false): Whether the field provide auto-complete suggestions.
  * cfid `string`: If the item is a custom field, the ID of the custom field.
  * displayName `string`: The display name of the field.
  * operators `array`: The valid search operators for the field.
    * items `string`
  * orderable `string` (values: true, false): Whether the field can be used in a query's `ORDER BY` clause.
  * searchable `string` (values: true, false): Whether the content of this field can be searched.
  * types `array`: The data types of items in the field.
    * items `string`
  * value `string`: The field identifier.

### FieldUpdateOperation
* FieldUpdateOperation `object`: Details of an operation to perform on a field.

### FieldValueClause
* FieldValueClause `object`: A clause that asserts the current value of a field. For example, `summary ~ test`.
  * field **required** [JqlQueryField](#jqlqueryfield)
  * operand **required** [JqlQueryClauseOperand](#jqlqueryclauseoperand)
  * operator **required** `string` (values: =, !=, >, <, >=, <=, in, not in, ~, ~=, is, is not): The operator between the field and operand.

### FieldWasClause
* FieldWasClause `object`: A clause that asserts a previous value of a field. For example, `status WAS "Resolved" BY currentUser() BEFORE "2019/02/02"`. See [WAS](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-WASWAS) for more information about the WAS operator.
  * field **required** [JqlQueryField](#jqlqueryfield)
  * operand **required** [JqlQueryClauseOperand](#jqlqueryclauseoperand)
  * operator **required** `string` (values: was, was in, was not in, was not): The operator between the field and operand.
  * predicates **required** `array`: The list of time predicates.
    * items [JqlQueryClauseTimePredicate](#jqlqueryclausetimepredicate)

### Fields
* Fields `object`: Key fields from the linked issue.
  * assignee: The assignee of the linked issue.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
    * active `boolean`: Whether the user is active.
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
  * issueType: The type of the linked issue.
    * avatarId `integer`: The ID of the issue type's avatar.
    * description `string`: The description of the issue type.
    * entityId `string`: Unique ID for next-gen projects.
    * iconUrl `string`: The URL of the issue type's avatar.
    * id `string`: The ID of the issue type.
    * name `string`: The name of the issue type.
    * scope: Details of the next-gen projects the issue type is available in.
      * project: The project the item has scope in.
        * avatarUrls: The URLs of the project's avatars.
          * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
          * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
          * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
          * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
        * id `string`: The ID of the project.
        * key `string`: The key of the project.
        * name `string`: The name of the project.
        * projectCategory: The category the project belongs to.
          * description `string`: The name of the project category.
          * id `string`: The ID of the project category.
          * name `string`: The description of the project category.
          * self `string`: The URL of the project category.
        * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
        * self `string`: The URL of the project details.
        * simplified `boolean`: Whether or not the project is simplified.
      * type `string` (values: PROJECT, TEMPLATE): The type of scope.
    * self `string`: The URL of these issue type details.
    * subtask `boolean`: Whether this issue type is used to create subtasks.
  * issuetype [IssueTypeDetails](#issuetypedetails)
  * priority: The priority of the linked issue.
    * description `string`: The description of the issue priority.
    * iconUrl `string`: The URL of the icon for the issue priority.
    * id `string`: The ID of the issue priority.
    * name `string`: The name of the issue priority.
    * self `string`: The URL of the issue priority.
    * statusColor `string`: The color used to indicate the issue priority.
  * status: The status of the linked issue.
    * description `string`: The description of the status.
    * iconUrl `string`: The URL of the icon used to represent the status.
    * id `string`: The ID of the status.
    * name `string`: The name of the status.
    * self `string`: The URL of the status.
    * statusCategory: The category assigned to the status.
      * colorName `string`: The name of the color used to represent the status category.
      * id `integer`: The ID of the status category.
      * key `string`: The key of the status category.
      * name `string`: The name of the status category.
      * self `string`: The URL of the status category.
  * summary `string`: The summary description of the linked issue.
  * timetracking: The time tracking of the linked issue.
    * originalEstimate `string`: The original estimate of time needed for this issue in readable format.
    * originalEstimateSeconds `integer`: The original estimate of time needed for this issue in seconds.
    * remainingEstimate `string`: The remaining estimate of time needed for this issue in readable format.
    * remainingEstimateSeconds `integer`: The remaining estimate of time needed for this issue in seconds.
    * timeSpent `string`: Time worked on this issue in readable format.
    * timeSpentSeconds `integer`: Time worked on this issue in seconds.

### Filter
* Filter `object`: Details about a filter.
  * description `string`: A description of the filter.
  * favourite `boolean`: Whether the filter is selected as a favorite.
  * favouritedCount `integer`: The count of how many users have selected this filter as a favorite, including the filter owner.
  * id `string`: The unique identifier for the filter.
  * jql `string`: The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.
  * name **required** `string`: The name of the filter. Must be unique.
  * owner: The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * searchUrl `string`: A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
  * self `string`: The URL of the filter.
  * sharePermissions `array`: The groups and projects that the filter is shared with.
    * items [SharePermission](#sharepermission)
  * sharedUsers: A paginated list of the users that the filter is shared with. This includes users that are members of the groups or can browse the projects that the filter is shared with.
    * end-index `integer`: The index of the last item returned on the page.
    * items `array`: The list of items.
      * items [User](#user)
    * max-results `integer`: The maximum number of results that could be on the page.
    * size `integer`: The number of items on the page.
    * start-index `integer`: The index of the first item returned on the page.
  * subscriptions: A paginated list of the users that are subscribed to the filter.
    * end-index `integer`: The index of the last item returned on the page.
    * items `array`: The list of items.
      * items [FilterSubscription](#filtersubscription)
    * max-results `integer`: The maximum number of results that could be on the page.
    * size `integer`: The number of items on the page.
    * start-index `integer`: The index of the first item returned on the page.
  * viewUrl `string`: A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.

### FilterDetails
* FilterDetails `object`: Details of a filter.
  * description `string`: A description of the filter.
  * favourite `boolean`: Whether the filter is selected as a favorite by any users, not including the filter owner.
  * favouritedCount `integer`: The count of how many users have selected this filter as a favorite, including the filter owner.
  * id `string`: The unique identifier for the filter.
  * jql `string`: The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.
  * name **required** `string`: The name of the filter. Must be unique.
  * owner: The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * searchUrl `string`: A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
  * self `string`: The URL of the filter.
  * sharePermissions `array`: The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter.
    * items [SharePermission](#sharepermission)
  * subscriptions `array`: The users that are subscribed to the filter.
    * items [FilterSubscription](#filtersubscription)
  * viewUrl `string`: A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.

### FilterSubscription
* FilterSubscription `object`: Details of a user or group subscribing to a filter.
  * group: The group subscribing to filter.
    * name `string`: The name of group.
    * self `string`: The URL for these group details.
  * id `integer`: The ID of the filter subscription.
  * user: The user subscribing to filter.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.

### FilterSubscriptionsList
* FilterSubscriptionsList `object`: A paginated list of subscriptions to a filter.
  * end-index `integer`: The index of the last item returned on the page.
  * items `array`: The list of items.
    * items [FilterSubscription](#filtersubscription)
  * max-results `integer`: The maximum number of results that could be on the page.
  * size `integer`: The number of items on the page.
  * start-index `integer`: The index of the first item returned on the page.

### FoundGroup
* FoundGroup `object`: A group found in a search.
  * groupId `string`: The ID of the group, if available, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
  * html `string`: The group name with the matched query string highlighted with the HTML bold tag.
  * labels `array`
    * items [GroupLabel](#grouplabel)
  * name `string`: The name of the group.

### FoundGroups
* FoundGroups `object`: The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups.
  * groups `array`
    * items [FoundGroup](#foundgroup)
  * header `string`: Header text indicating the number of groups in the response and the total number of groups found in the search.
  * total `integer`: The total number of groups found in the search.

### FoundUsers
* FoundUsers `object`: The list of users found in a search, including header text (Showing X of Y matching users) and total of matched users.
  * header `string`: Header text indicating the number of users in the response and the total number of users found in the search.
  * total `integer`: The total number of users found in the search.
  * users `array`
    * items [UserPickerUser](#userpickeruser)

### FoundUsersAndGroups
* FoundUsersAndGroups `object`: List of users and groups found in a search.
  * groups [FoundGroups](#foundgroups)
  * users [FoundUsers](#foundusers)

### FunctionOperand
* FunctionOperand `object`: An operand that is a function. See [Advanced searching - functions reference](https://confluence.atlassian.com/x/dwiiLQ) for more information about JQL functions.
  * arguments **required** `array`: The list of function arguments.
    * items `string`
  * function **required** `string`: The name of the function.

### FunctionReferenceData
* FunctionReferenceData `object`: Details of functions that can be used in advanced searches.
  * displayName `string`: The display name of the function.
  * isList `string` (values: true, false): Whether the function can take a list of arguments.
  * types `array`: The data types returned by the function.
    * items `string`
  * value `string`: The function identifier.

### GlobalScopeBean
* GlobalScopeBean `object`
  * attributes `array`: Defines the behavior of the option in the global context.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
    * items `string` (values: notSelectable, defaultValue)

### Group
* Group `object`
  * expand `string`: Expand options that include additional group details in the response.
  * name `string`: The name of group.
  * self `string`: The URL for these group details.
  * users: A paginated list of the users that are members of the group. A maximum of 50 users is returned in the list, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 50 users, use`?expand=users[51:100]`.
    * end-index `integer`: The index of the last item returned on the page.
    * items `array`: The list of items.
      * items [UserDetails](#userdetails)
    * max-results `integer`: The maximum number of results that could be on the page.
    * size `integer`: The number of items on the page.
    * start-index `integer`: The index of the first item returned on the page.

### GroupDetails
* GroupDetails `object`: Details about a group.
  * groupId `string`: The ID of the group, if available, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
  * name `string`: The name of the group.

### GroupLabel
* GroupLabel `object`: A group label.
  * text `string`: The group label name.
  * title `string`: The title of the group label.
  * type `string` (values: ADMIN, SINGLE, MULTIPLE): The type of the group label.

### GroupName
* GroupName `object`: Details about a group name.
  * name `string`: The name of group.
  * self `string`: The URL for these group details.

### HealthCheckResult
* HealthCheckResult `object`: Jira instance health check results. Deprecated and no longer returned.
  * description `string`: The description of the Jira health check item.
  * name `string`: The name of the Jira health check item.
  * passed `boolean`: Whether the Jira health check item passed or failed.

### Hierarchy
* Hierarchy `object`: Project Issue Type Hierarchy
  * level `array`
    * items [HierarchyLevel](#hierarchylevel)

### HierarchyLevel
* HierarchyLevel `object`
  * aboveLevelId `integer`
  * belowLevelId `integer`
  * externalUuid `string`
  * globalHierarchyLevel `string` (values: SUBTASK, BASE, EPIC)
  * id `integer`
  * issueTypeIds `array`
    * items `integer`
  * name `string`
  * projectConfigurationId `integer`

### HistoryMetadata
* HistoryMetadata `object`: Details of issue history metadata.
  * activityDescription `string`: The activity described in the history record.
  * activityDescriptionKey `string`: The key of the activity described in the history record.
  * actor: Details of the user whose action created the history record.
    * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
    * displayName `string`: The display name of the user or system associated with a history record.
    * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
    * id `string`: The ID of the user or system associated with a history record.
    * type `string`: The type of the user or system associated with a history record.
    * url `string`: The URL of the user or system associated with a history record.
  * cause: Details of the cause that triggered the creation the history record.
    * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
    * displayName `string`: The display name of the user or system associated with a history record.
    * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
    * id `string`: The ID of the user or system associated with a history record.
    * type `string`: The type of the user or system associated with a history record.
    * url `string`: The URL of the user or system associated with a history record.
  * description `string`: The description of the history record.
  * descriptionKey `string`: The description key of the history record.
  * emailDescription `string`: The description of the email address associated the history record.
  * emailDescriptionKey `string`: The description key of the email address associated the history record.
  * extraData `object`: Additional arbitrary information about the history record.
  * generator: Details of the system that generated the history record.
    * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
    * displayName `string`: The display name of the user or system associated with a history record.
    * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
    * id `string`: The ID of the user or system associated with a history record.
    * type `string`: The type of the user or system associated with a history record.
    * url `string`: The URL of the user or system associated with a history record.
  * type `string`: The type of the history record.

### HistoryMetadataParticipant
* HistoryMetadataParticipant `object`: Details of user or system associated with a issue history metadata item.
  * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
  * displayName `string`: The display name of the user or system associated with a history record.
  * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
  * id `string`: The ID of the user or system associated with a history record.
  * type `string`: The type of the user or system associated with a history record.
  * url `string`: The URL of the user or system associated with a history record.

### Icon
* Icon `object`: An icon. If no icon is defined:
  * link `string`: The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
  * title `string`: The title of the icon. This is used as follows:
  * url16x16 `string`: The URL of an icon that displays at 16x16 pixel in Jira.

### IconBean
* IconBean `object`: An icon.
  * link `string`: The URL of the tooltip, used only for a status icon.
  * title `string`: The title of the icon, for use as a tooltip on the icon.
  * url16x16 `string`: The URL of a 16x16 pixel icon.

### IdBean
* IdBean `object`
  * id **required** `integer`: The ID of the permission scheme to associate with the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to get a list of permission scheme IDs.

### IdOrKeyBean
* IdOrKeyBean `object`
  * id `integer`: The ID of the referenced item.
  * key `string`: The key of the referenced item.

### IncludedFields
* IncludedFields `object`
  * actuallyIncluded `array`
    * items `string`
  * excluded `array`
    * items `string`
  * included `array`
    * items `string`

### IssueBean
* IssueBean `object`
  * changelog: Details of changelogs associated with the issue.
    * histories `array`: The list of changelogs.
      * items [Changelog](#changelog)
    * maxResults `integer`: The maximum number of results that could be on the page.
    * startAt `integer`: The index of the first item returned on the page.
    * total `integer`: The number of results on the page.
  * editmeta: The metadata for the fields on the issue that can be amended.
    * fields `object`
  * expand `string`: Expand options that include additional issue details in the response.
  * fields `object`
  * fieldsToInclude [IncludedFields](#includedfields)
  * id `string`: The ID of the issue.
  * key `string`: The key of the issue.
  * names `object`: The ID and name of each field present on the issue.
  * operations: The operations that can be performed on the issue.
    * linkGroups `array`: Details of the link groups defining issue operations.
      * items [LinkGroup](#linkgroup)
  * properties `object`: Details of the issue properties identified in the request.
  * renderedFields `object`: The rendered value of each field present on the issue.
  * schema `object`: The schema describing each field present on the issue.
  * self `string`: The URL of the issue details.
  * transitions `array`: The transitions that can be performed on the issue.
    * items [IssueTransition](#issuetransition)
  * versionedRepresentations `object`: The versions of each field on the issue.

### IssueCommentListRequestBean
* IssueCommentListRequestBean `object`
  * ids **required** `array`: The list of comment IDs. A maximum of 1000 IDs can be specified.
    * items `integer`

### IssueCreateMetadata
* IssueCreateMetadata `object`: The wrapper for the issue creation metadata for a list of projects.
  * expand `string`: Expand options that include additional project details in the response.
  * projects `array`: List of projects and their issue creation metadata.
    * items [ProjectIssueCreateMetadata](#projectissuecreatemetadata)

### IssueEntityProperties
* IssueEntityProperties `object`: Lists of issues and entity properties. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.
  * entitiesIds `array`: A list of entity property IDs.
    * items `integer`
  * properties `object`: A list of entity property keys and values.

### IssueFieldOption
* IssueFieldOption `object`: Details of the options for a select list issue field.
  * config [IssueFieldOptionConfiguration](#issuefieldoptionconfiguration)
  * id **required** `integer`: The unique identifier for the option. This is only unique within the select field's set of options.
  * properties `object`: The properties of the object, as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see [Issue Field Option Property Index](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/)) are defined in the descriptor for the issue field module.
  * value **required** `string`: The option's name, which is displayed in Jira.

### IssueFieldOptionConfiguration
* IssueFieldOptionConfiguration `object`: Details of the projects the option is available in.
  * attributes `array`: DEPRECATED
    * items `string` (values: notSelectable, defaultValue)
  * scope: Defines the projects that the option is available in. If the scope is not defined, then the option is available in all projects.
    * global: Defines the behavior of the option within the global context. If this property is set, even if set to an empty object, then the option is available in all projects.
      * attributes `array`: Defines the behavior of the option in the global context.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
        * items `string` (values: notSelectable, defaultValue)
    * projects `array`: DEPRECATED
      * items `integer`
    * projects2 `array`: Defines the projects in which the option is available and the behavior of the option within each project. Specify one object per project. The behavior of the option in a project context overrides the behavior in the global context.
      * items [ProjectScopeBean](#projectscopebean)

### IssueFieldOptionCreateBean
* IssueFieldOptionCreateBean `object`
  * config [IssueFieldOptionConfiguration](#issuefieldoptionconfiguration)
  * properties `object`: The properties of the option as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module.
  * value **required** `string`: The option's name, which is displayed in Jira.

### IssueFieldOptionScopeBean
* IssueFieldOptionScopeBean `object`
  * global: Defines the behavior of the option within the global context. If this property is set, even if set to an empty object, then the option is available in all projects.
    * attributes `array`: Defines the behavior of the option in the global context.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
      * items `string` (values: notSelectable, defaultValue)
  * projects `array`: DEPRECATED
    * items `integer`
  * projects2 `array`: Defines the projects in which the option is available and the behavior of the option within each project. Specify one object per project. The behavior of the option in a project context overrides the behavior in the global context.
    * items [ProjectScopeBean](#projectscopebean)

### IssueFilterForBulkPropertyDelete
* IssueFilterForBulkPropertyDelete `object`: Bulk operation filter details.
  * entityIds `array`: List of issues to perform the bulk delete operation on.
    * items `integer`

### IssueFilterForBulkPropertySet
* IssueFilterForBulkPropertySet `object`: Bulk operation filter details.
  * entityIds `array`: List of issues to perform the bulk operation on.
    * items `integer`
  * hasProperty `boolean`: Whether the bulk operation occurs only when the property is present on or absent from an issue.

### IssueLink
* IssueLink `object`: Details of a link between issues.
  * id `string`: The ID of the issue link.
  * inwardIssue **required**: The issue the link joins to.
    * fields: The fields associated with the issue.
      * assignee: The assignee of the linked issue.
        * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
        * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
        * active `boolean`: Whether the user is active.
        * avatarUrls: The avatars of the user.
          * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
          * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
          * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
          * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
        * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
        * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
        * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
        * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
        * self `string`: The URL of the user.
        * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
      * issueType: The type of the linked issue.
        * avatarId `integer`: The ID of the issue type's avatar.
        * description `string`: The description of the issue type.
        * entityId `string`: Unique ID for next-gen projects.
        * iconUrl `string`: The URL of the issue type's avatar.
        * id `string`: The ID of the issue type.
        * name `string`: The name of the issue type.
        * scope: Details of the next-gen projects the issue type is available in.
          * project: The project the item has scope in.
          * type `string` (values: PROJECT, TEMPLATE): The type of scope.
        * self `string`: The URL of these issue type details.
        * subtask `boolean`: Whether this issue type is used to create subtasks.
      * issuetype [IssueTypeDetails](#issuetypedetails)
      * priority: The priority of the linked issue.
        * description `string`: The description of the issue priority.
        * iconUrl `string`: The URL of the icon for the issue priority.
        * id `string`: The ID of the issue priority.
        * name `string`: The name of the issue priority.
        * self `string`: The URL of the issue priority.
        * statusColor `string`: The color used to indicate the issue priority.
      * status: The status of the linked issue.
        * description `string`: The description of the status.
        * iconUrl `string`: The URL of the icon used to represent the status.
        * id `string`: The ID of the status.
        * name `string`: The name of the status.
        * self `string`: The URL of the status.
        * statusCategory: The category assigned to the status.
          * colorName `string`: The name of the color used to represent the status category.
          * id `integer`: The ID of the status category.
          * key `string`: The key of the status category.
          * name `string`: The name of the status category.
          * self `string`: The URL of the status category.
      * summary `string`: The summary description of the linked issue.
      * timetracking: The time tracking of the linked issue.
        * originalEstimate `string`: The original estimate of time needed for this issue in readable format.
        * originalEstimateSeconds `integer`: The original estimate of time needed for this issue in seconds.
        * remainingEstimate `string`: The remaining estimate of time needed for this issue in readable format.
        * remainingEstimateSeconds `integer`: The remaining estimate of time needed for this issue in seconds.
        * timeSpent `string`: Time worked on this issue in readable format.
        * timeSpentSeconds `integer`: Time worked on this issue in seconds.
    * id `string`: The ID of an issue. Required if `key` isn't provided.
    * key `string`: The key of an issue. Required if `id` isn't provided.
    * self `string`: The URL of the issue.
  * outwardIssue **required**: The issue the link originates from.
    * fields: The fields associated with the issue.
      * assignee: The assignee of the linked issue.
        * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
        * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
        * active `boolean`: Whether the user is active.
        * avatarUrls: The avatars of the user.
          * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
          * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
          * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
          * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
        * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
        * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
        * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
        * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
        * self `string`: The URL of the user.
        * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
      * issueType: The type of the linked issue.
        * avatarId `integer`: The ID of the issue type's avatar.
        * description `string`: The description of the issue type.
        * entityId `string`: Unique ID for next-gen projects.
        * iconUrl `string`: The URL of the issue type's avatar.
        * id `string`: The ID of the issue type.
        * name `string`: The name of the issue type.
        * scope: Details of the next-gen projects the issue type is available in.
          * project: The project the item has scope in.
          * type `string` (values: PROJECT, TEMPLATE): The type of scope.
        * self `string`: The URL of these issue type details.
        * subtask `boolean`: Whether this issue type is used to create subtasks.
      * issuetype [IssueTypeDetails](#issuetypedetails)
      * priority: The priority of the linked issue.
        * description `string`: The description of the issue priority.
        * iconUrl `string`: The URL of the icon for the issue priority.
        * id `string`: The ID of the issue priority.
        * name `string`: The name of the issue priority.
        * self `string`: The URL of the issue priority.
        * statusColor `string`: The color used to indicate the issue priority.
      * status: The status of the linked issue.
        * description `string`: The description of the status.
        * iconUrl `string`: The URL of the icon used to represent the status.
        * id `string`: The ID of the status.
        * name `string`: The name of the status.
        * self `string`: The URL of the status.
        * statusCategory: The category assigned to the status.
          * colorName `string`: The name of the color used to represent the status category.
          * id `integer`: The ID of the status category.
          * key `string`: The key of the status category.
          * name `string`: The name of the status category.
          * self `string`: The URL of the status category.
      * summary `string`: The summary description of the linked issue.
      * timetracking: The time tracking of the linked issue.
        * originalEstimate `string`: The original estimate of time needed for this issue in readable format.
        * originalEstimateSeconds `integer`: The original estimate of time needed for this issue in seconds.
        * remainingEstimate `string`: The remaining estimate of time needed for this issue in readable format.
        * remainingEstimateSeconds `integer`: The remaining estimate of time needed for this issue in seconds.
        * timeSpent `string`: Time worked on this issue in readable format.
        * timeSpentSeconds `integer`: Time worked on this issue in seconds.
    * id `string`: The ID of an issue. Required if `key` isn't provided.
    * key `string`: The key of an issue. Required if `id` isn't provided.
    * self `string`: The URL of the issue.
  * self `string`: The URL of the issue link.
  * type **required**: The type of link between the issues.
    * id `string`: The ID of the issue link type and is used as follows:
    * inward `string`: The description of the issue link type inward link and is used as follows:
    * name `string`: The name of the issue link type and is used as follows:
    * outward `string`: The description of the issue link type outward link and is used as follows:
    * self `string`: The URL of the issue link type. Read only.

### IssueLinkType
* IssueLinkType `object`: This object is used as follows:
  * id `string`: The ID of the issue link type and is used as follows:
  * inward `string`: The description of the issue link type inward link and is used as follows:
  * name `string`: The name of the issue link type and is used as follows:
  * outward `string`: The description of the issue link type outward link and is used as follows:
  * self `string`: The URL of the issue link type. Read only.

### IssueLinkTypes
* IssueLinkTypes `object`: A list of issue link type beans.
  * issueLinkTypes `array`: The issue link type bean.
    * items [IssueLinkType](#issuelinktype)

### IssueMatches
* IssueMatches `object`: A list of matched issues or errors for each JQL query, in the order the JQL queries were passed.
  * matches **required** `array`
    * items [IssueMatchesForJQL](#issuematchesforjql)

### IssueMatchesForJQL
* IssueMatchesForJQL `object`: A list of the issues matched to a JQL query or details of errors encountered during matching.
  * errors **required** `array`: A list of errors.
    * items `string`: A list of errors.
  * matchedIssues **required** `array`: A list of issue IDs.
    * items `integer`: A list of issue IDs.

### IssuePickerSuggestions
* IssuePickerSuggestions `object`: A list of issues suggested for use in auto-completion.
  * sections `array`: A list of issues for an issue type suggested for use in auto-completion.
    * items [IssuePickerSuggestionsIssueType](#issuepickersuggestionsissuetype)

### IssuePickerSuggestionsIssueType
* IssuePickerSuggestionsIssueType `object`: A type of issue suggested for use in auto-completion.
  * id `string`: The ID of the type of issues suggested for use in auto-completion.
  * issues `array`: A list of issues suggested for use in auto-completion.
    * items [SuggestedIssue](#suggestedissue)
  * label `string`: The label of the type of issues suggested for use in auto-completion.
  * msg `string`: If no issue suggestions are found, returns a message indicating no suggestions were found,
  * sub `string`: If issue suggestions are found, returns a message indicating the number of issues suggestions found and returned.

### IssueSecurityLevelMember
* IssueSecurityLevelMember `object`: Issue security level member.
  * holder **required**: The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. See [Holder object](#holder-object) in *Get all permission schemes* for more information.
    * expand `string`: Expand options that include additional permission holder details in the response.
    * parameter `string`: The identifier of permission holder.
    * type **required** `string`: The type of permission holder.
  * id **required** `integer`: The ID of the issue security level member.
  * issueSecurityLevelId **required** `integer`: The ID of the issue security level.

### IssueTransition
* IssueTransition `object`: Details of an issue transition.
  * expand `string`: Expand options that include additional transition details in the response.
  * fields `object`: Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.
  * hasScreen `boolean`: Whether there is a screen associated with the issue transition.
  * id `string`: The ID of the issue transition. Required when specifying a transition to undertake.
  * isAvailable `boolean`: Whether the transition is available to be performed.
  * isConditional `boolean`: Whether the issue has to meet criteria before the issue transition is applied.
  * isGlobal `boolean`: Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.
  * isInitial `boolean`: Whether this is the initial issue transition for the workflow.
  * looped `boolean`
  * name `string`: The name of the issue transition.
  * to: Details of the issue status after the transition.
    * description `string`: The description of the status.
    * iconUrl `string`: The URL of the icon used to represent the status.
    * id `string`: The ID of the status.
    * name `string`: The name of the status.
    * self `string`: The URL of the status.
    * statusCategory: The category assigned to the status.
      * colorName `string`: The name of the color used to represent the status category.
      * id `integer`: The ID of the status category.
      * key `string`: The key of the status category.
      * name `string`: The name of the status category.
      * self `string`: The URL of the status category.

### IssueTypeCreateBean
* IssueTypeCreateBean `object`
  * description `string`: The description of the issue type.
  * name **required** `string`: The unique name for the issue type. The maximum length is 60 characters.
  * type `string` (values: subtask, standard): Whether the issue type is `subtype` or `standard`. Defaults to `standard`.

### IssueTypeDetails
* IssueTypeDetails `object`: Details about an issue type.
  * avatarId `integer`: The ID of the issue type's avatar.
  * description `string`: The description of the issue type.
  * entityId `string`: Unique ID for next-gen projects.
  * iconUrl `string`: The URL of the issue type's avatar.
  * id `string`: The ID of the issue type.
  * name `string`: The name of the issue type.
  * scope: Details of the next-gen projects the issue type is available in.
    * project: The project the item has scope in.
      * avatarUrls: The URLs of the project's avatars.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * id `string`: The ID of the project.
      * key `string`: The key of the project.
      * name `string`: The name of the project.
      * projectCategory: The category the project belongs to.
        * description `string`: The name of the project category.
        * id `string`: The ID of the project category.
        * name `string`: The description of the project category.
        * self `string`: The URL of the project category.
      * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
      * self `string`: The URL of the project details.
      * simplified `boolean`: Whether or not the project is simplified.
    * type `string` (values: PROJECT, TEMPLATE): The type of scope.
  * self `string`: The URL of these issue type details.
  * subtask `boolean`: Whether this issue type is used to create subtasks.

### IssueTypeIDs
* IssueTypeIDs `object`: A list of issue type IDs.
  * issueTypeIds **required** `array`: List of issue type IDs.
    * items `string`

### IssueTypeIds
* IssueTypeIds `object`: The list of issue type IDs.
  * issueTypeIds **required** `array`: The list of issue type IDs.
    * items `string`

### IssueTypeInfo
* IssueTypeInfo `object`: Details of an issue type.
  * avatarId `integer`: The avatar of the issue type.
  * id `integer`: The ID of the issue type.
  * name `string`: The name of the issue type.

### IssueTypeIssueCreateMetadata
* IssueTypeIssueCreateMetadata `object`: Details of the issue creation metadata for an issue type.
  * avatarId `integer`: The ID of the issue type's avatar.
  * description `string`: The description of the issue type.
  * entityId `string`: Unique ID for next-gen projects.
  * expand `string`: Expand options that include additional issue type metadata details in the response.
  * fields `object`: List of the fields available when creating an issue for the issue type.
  * iconUrl `string`: The URL of the issue type's avatar.
  * id `string`: The ID of the issue type.
  * name `string`: The name of the issue type.
  * scope: Details of the next-gen projects the issue type is available in.
    * project: The project the item has scope in.
      * avatarUrls: The URLs of the project's avatars.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * id `string`: The ID of the project.
      * key `string`: The key of the project.
      * name `string`: The name of the project.
      * projectCategory: The category the project belongs to.
        * description `string`: The name of the project category.
        * id `string`: The ID of the project category.
        * name `string`: The description of the project category.
        * self `string`: The URL of the project category.
      * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
      * self `string`: The URL of the project details.
      * simplified `boolean`: Whether or not the project is simplified.
    * type `string` (values: PROJECT, TEMPLATE): The type of scope.
  * self `string`: The URL of these issue type details.
  * subtask `boolean`: Whether this issue type is used to create subtasks.

### IssueTypeScheme
* IssueTypeScheme `object`: Details of an issue type scheme.
  * defaultIssueTypeId `string`: The ID of the default issue type of the issue type scheme.
  * description `string`: The description of the issue type scheme.
  * id **required** `string`: The ID of the issue type scheme.
  * isDefault `boolean`: Whether the issue type scheme is the default.
  * name **required** `string`: The name of the issue type scheme.

### IssueTypeSchemeDetails
* IssueTypeSchemeDetails `object`: Details of an issue type scheme and its associated issue types.
  * defaultIssueTypeId `string`: The ID of the default issue type of the issue type scheme. This ID must be included in `issueTypeIds`.
  * description `string`: The description of the issue type scheme. The maximum length is 4000 characters.
  * issueTypeIds **required** `array`: The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required.
    * items `string`
  * name **required** `string`: The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.

### IssueTypeSchemeID
* IssueTypeSchemeID `object`: The ID of an issue type scheme.
  * issueTypeSchemeId **required** `string`: The ID of the issue type scheme.

### IssueTypeSchemeMapping
* IssueTypeSchemeMapping `object`: Issue type scheme item.
  * issueTypeId **required** `string`: The ID of the issue type.
  * issueTypeSchemeId **required** `string`: The ID of the issue type scheme.

### IssueTypeSchemeProjectAssociation
* IssueTypeSchemeProjectAssociation `object`: Details of the association between an issue type scheme and project.
  * issueTypeSchemeId **required** `string`: The ID of the issue type scheme.
  * projectId **required** `string`: The ID of the project.

### IssueTypeSchemeProjects
* IssueTypeSchemeProjects `object`: Issue type scheme with a list of the projects that use it.
  * issueTypeScheme **required**: Details of an issue type scheme.
    * defaultIssueTypeId `string`: The ID of the default issue type of the issue type scheme.
    * description `string`: The description of the issue type scheme.
    * id **required** `string`: The ID of the issue type scheme.
    * isDefault `boolean`: Whether the issue type scheme is the default.
    * name **required** `string`: The name of the issue type scheme.
  * projectIds **required** `array`: The IDs of the projects using the issue type scheme.
    * items `string`

### IssueTypeSchemeUpdateDetails
* IssueTypeSchemeUpdateDetails `object`: Details of the name, description, and default issue type for an issue type scheme.
  * defaultIssueTypeId `string`: The ID of the default issue type of the issue type scheme.
  * description `string`: The description of the issue type scheme. The maximum length is 4000 characters.
  * name `string`: The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.

### IssueTypeScreenScheme
* IssueTypeScreenScheme `object`: Details of an issue type screen scheme.
  * description `string`: The description of the issue type screen scheme.
  * id **required** `string`: The ID of the issue type screen scheme.
  * name **required** `string`: The name of the issue type screen scheme.

### IssueTypeScreenSchemeDetails
* IssueTypeScreenSchemeDetails `object`: The details of an issue type screen scheme.
  * description `string`: The description of the issue type screen scheme. The maximum length is 255 characters.
  * issueTypeMappings **required** `array`: The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme.
    * items [IssueTypeScreenSchemeMapping](#issuetypescreenschememapping)
  * name **required** `string`: The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.

### IssueTypeScreenSchemeId
* IssueTypeScreenSchemeId `object`: The ID of an issue type screen scheme.
  * id **required** `string`: The ID of the issue type screen scheme.

### IssueTypeScreenSchemeItem
* IssueTypeScreenSchemeItem `object`: The screen scheme for an issue type.
  * issueTypeId **required** `string`: The ID of the issue type or *default*. Only issue types used in classic projects are accepted. When creating an issue screen scheme, an entry for *default* must be provided and defines the mapping for all issue types without a screen scheme. Otherwise, a *default* entry can't be provided.
  * issueTypeScreenSchemeId **required** `string`: The ID of the issue type screen scheme.
  * screenSchemeId **required** `string`: The ID of the screen scheme.

### IssueTypeScreenSchemeMapping
* IssueTypeScreenSchemeMapping `object`: The IDs of the screen schemes for the issue type IDs.
  * issueTypeId **required** `string`: The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme.
  * screenSchemeId **required** `string`: The ID of the screen scheme. Only screen schemes used in classic projects are accepted.

### IssueTypeScreenSchemeMappingDetails
* IssueTypeScreenSchemeMappingDetails `object`: A list of issue type screen scheme mappings.
  * issueTypeMappings **required** `array`: The list of issue type to screen scheme mappings. A *default* entry cannot be specified because a default entry is added when an issue type screen scheme is created.
    * items [IssueTypeScreenSchemeMapping](#issuetypescreenschememapping)

### IssueTypeScreenSchemeProjectAssociation
* IssueTypeScreenSchemeProjectAssociation `object`: Associated issue type screen scheme and project.
  * issueTypeScreenSchemeId `string`: The ID of the issue type screen scheme.
  * projectId `string`: The ID of the project.

### IssueTypeScreenSchemeUpdateDetails
* IssueTypeScreenSchemeUpdateDetails `object`: Details of an issue type screen scheme.
  * description `string`: The description of the issue type screen scheme. The maximum length is 255 characters.
  * name `string`: The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.

### IssueTypeScreenSchemesProjects
* IssueTypeScreenSchemesProjects `object`: Issue type screen scheme with a list of the projects that use it.
  * issueTypeScreenScheme **required**: Details of an issue type screen scheme.
    * description `string`: The description of the issue type screen scheme.
    * id **required** `string`: The ID of the issue type screen scheme.
    * name **required** `string`: The name of the issue type screen scheme.
  * projectIds **required** `array`: The IDs of the projects using the issue type screen scheme.
    * items `string`

### IssueTypeUpdateBean
* IssueTypeUpdateBean `object`
  * avatarId `integer`: The ID of an issue type avatar.
  * description `string`: The description of the issue type.
  * name `string`: The unique name for the issue type. The maximum length is 60 characters.

### IssueTypeWithStatus
* IssueTypeWithStatus `object`: Status details for an issue type.
  * id **required** `string`: The ID of the issue type.
  * name **required** `string`: The name of the issue type.
  * self **required** `string`: The URL of the issue type's status details.
  * statuses **required** `array`: List of status details for the issue type.
    * items [StatusDetails](#statusdetails)
  * subtask **required** `boolean`: Whether this issue type represents subtasks.

### IssueTypeWorkflowMapping
* IssueTypeWorkflowMapping `object`: Details about the mapping between an issue type and a workflow.
  * issueType `string`: The ID of the issue type. Not required if updating the issue type-workflow mapping.
  * updateDraftIfNeeded `boolean`: Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping.
  * workflow `string`: The name of the workflow.

### IssueTypesWorkflowMapping
* IssueTypesWorkflowMapping `object`: Details about the mapping between issue types and a workflow.
  * defaultMapping `boolean`: Whether the workflow is the default workflow for the workflow scheme.
  * issueTypes `array`: The list of issue type IDs.
    * items `string`
  * updateDraftIfNeeded `boolean`: Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to `false`.
  * workflow `string`: The name of the workflow. Optional if updating the workflow-issue types mapping.

### IssueUpdateDetails
* IssueUpdateDetails `object`: Details of an issue update request.
  * fields `object`: List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`.
  * historyMetadata: Additional issue history details.
    * activityDescription `string`: The activity described in the history record.
    * activityDescriptionKey `string`: The key of the activity described in the history record.
    * actor: Details of the user whose action created the history record.
      * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
      * displayName `string`: The display name of the user or system associated with a history record.
      * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
      * id `string`: The ID of the user or system associated with a history record.
      * type `string`: The type of the user or system associated with a history record.
      * url `string`: The URL of the user or system associated with a history record.
    * cause: Details of the cause that triggered the creation the history record.
      * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
      * displayName `string`: The display name of the user or system associated with a history record.
      * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
      * id `string`: The ID of the user or system associated with a history record.
      * type `string`: The type of the user or system associated with a history record.
      * url `string`: The URL of the user or system associated with a history record.
    * description `string`: The description of the history record.
    * descriptionKey `string`: The description key of the history record.
    * emailDescription `string`: The description of the email address associated the history record.
    * emailDescriptionKey `string`: The description key of the email address associated the history record.
    * extraData `object`: Additional arbitrary information about the history record.
    * generator: Details of the system that generated the history record.
      * avatarUrl `string`: The URL to an avatar for the user or system associated with a history record.
      * displayName `string`: The display name of the user or system associated with a history record.
      * displayNameKey `string`: The key of the display name of the user or system associated with a history record.
      * id `string`: The ID of the user or system associated with a history record.
      * type `string`: The type of the user or system associated with a history record.
      * url `string`: The URL of the user or system associated with a history record.
    * type `string`: The type of the history record.
  * properties `array`: Details of issue properties to be add or update.
    * items [EntityProperty](#entityproperty)
  * transition: Details of a transition. Required when performing a transition, optional when creating or editing an issue.
    * expand `string`: Expand options that include additional transition details in the response.
    * fields `object`: Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.
    * hasScreen `boolean`: Whether there is a screen associated with the issue transition.
    * id `string`: The ID of the issue transition. Required when specifying a transition to undertake.
    * isAvailable `boolean`: Whether the transition is available to be performed.
    * isConditional `boolean`: Whether the issue has to meet criteria before the issue transition is applied.
    * isGlobal `boolean`: Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.
    * isInitial `boolean`: Whether this is the initial issue transition for the workflow.
    * looped `boolean`
    * name `string`: The name of the issue transition.
    * to: Details of the issue status after the transition.
      * description `string`: The description of the status.
      * iconUrl `string`: The URL of the icon used to represent the status.
      * id `string`: The ID of the status.
      * name `string`: The name of the status.
      * self `string`: The URL of the status.
      * statusCategory: The category assigned to the status.
        * colorName `string`: The name of the color used to represent the status category.
        * id `integer`: The ID of the status category.
        * key `string`: The key of the status category.
        * name `string`: The name of the status category.
        * self `string`: The URL of the status category.
  * update `object`: List of operations to perform on issue screen fields. Note that fields included in here cannot be included in `fields`.

### IssueUpdateMetadata
* IssueUpdateMetadata `object`: A list of editable field details.
  * fields `object`

### IssuesAndJQLQueries
* IssuesAndJQLQueries `object`: List of issues and JQL queries.
  * issueIds **required** `array`: A list of issue IDs.
    * items `integer`: A list of issue IDs.
  * jqls **required** `array`: A list of JQL queries.
    * items `string`: A list of JQL queries.

### IssuesJqlMetaDataBean
* IssuesJqlMetaDataBean `object`: The description of the page of issues loaded by the provided JQL query.
  * count **required** `integer`: The number of issues that were loaded in this evaluation.
  * maxResults **required** `integer`: The maximum number of issues that could be loaded in this evaluation.
  * startAt **required** `integer`: The index of the first issue.
  * totalCount **required** `integer`: The total number of issues the JQL returned.
  * validationWarnings `array`: Any warnings related to the JQL query. Present only if the validation mode was set to `warn`.
    * items `string`

### IssuesMetaBean
* IssuesMetaBean `object`: Meta data describing the `issues` context variable.
  * jql [IssuesJqlMetaDataBean](#issuesjqlmetadatabean)

### IssuesUpdateBean
* IssuesUpdateBean `object`
  * issueUpdates `array`
    * items [IssueUpdateDetails](#issueupdatedetails)

### JQLPersonalDataMigrationRequest
* JQLPersonalDataMigrationRequest `object`: The JQL queries to be converted.
  * queryStrings `array`: A list of queries with user identifiers. Maximum of 100 queries.
    * items `string`

### JQLQueryWithUnknownUsers
* JQLQueryWithUnknownUsers `object`: JQL queries that contained users that could not be found
  * convertedQuery `string`: The converted query, with accountIDs instead of user identifiers, or 'unknown' for users that could not be found
  * originalQuery `string`: The original query, for reference

### JQLReferenceData
* JQLReferenceData `object`: Lists of JQL reference data.
  * jqlReservedWords `array`: List of JQL query reserved words.
    * items `string`
  * visibleFieldNames `array`: List of fields usable in JQL queries.
    * items [FieldReferenceData](#fieldreferencedata)
  * visibleFunctionNames `array`: List of functions usable in JQL queries.
    * items [FunctionReferenceData](#functionreferencedata)

### JexpIssues
* JexpIssues `object`: The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable.
  * jql: The JQL query that specifies the set of issues available in the Jira expression.
    * maxResults `integer`: The maximum number of issues to return from the JQL query. Inspect `meta.issues.jql.maxResults` in the response to ensure the maximum value has not been exceeded.
    * query `string`: The JQL query.
    * startAt `integer`: The index of the first issue to return from the JQL query.
    * validation `string` (values: strict, warn, none): Determines how to validate the JQL query and treat the validation results.

### JexpJqlIssues
* JexpJqlIssues `object`: The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable. Not all issues returned by the JQL query are loaded, only those described by the `startAt` and `maxResults` properties. To determine whether it is necessary to iterate to ensure all the issues returned by the JQL query are evaluated, inspect `meta.issues.jql.count` in the response.
  * maxResults `integer`: The maximum number of issues to return from the JQL query. Inspect `meta.issues.jql.maxResults` in the response to ensure the maximum value has not been exceeded.
  * query `string`: The JQL query.
  * startAt `integer`: The index of the first issue to return from the JQL query.
  * validation `string` (values: strict, warn, none): Determines how to validate the JQL query and treat the validation results.

### JiraExpressionAnalysis
* JiraExpressionAnalysis `object`: Details about the analysed Jira expression.
  * complexity [JiraExpressionComplexity](#jiraexpressioncomplexity)
  * errors `array`: A list of validation errors. Not included if the expression is valid.
    * items [JiraExpressionValidationError](#jiraexpressionvalidationerror)
  * expression **required** `string`: The analysed expression.
  * type `string`: EXPERIMENTAL. The inferred type of the expression.
  * valid **required** `boolean`: Whether the expression is valid and the interpreter will evaluate it. Note that the expression may fail at runtime (for example, if it executes too many expensive operations).

### JiraExpressionComplexity
* JiraExpressionComplexity `object`: Details about the complexity of the analysed Jira expression.
  * expensiveOperations **required** `string`: Information that can be used to determine how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) the evaluation of the expression will perform. This information may be a formula or number. For example:
  * variables `object`: Variables used in the formula, mapped to the parts of the expression they refer to.

### JiraExpressionEvalContextBean
* JiraExpressionEvalContextBean `object`
  * board `integer`: The ID of the board that is available under the `board` variable when evaluating the expression.
  * customerRequest `integer`: The ID of the customer request that is available under the `customerRequest` variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type.
  * issue: The issue that is available under the `issue` variable when evaluating the expression.
    * id `integer`: The ID of the referenced item.
    * key `string`: The key of the referenced item.
  * issues: The collection of issues that is available under the `issues` variable when evaluating the expression.
    * jql: The JQL query that specifies the set of issues available in the Jira expression.
      * maxResults `integer`: The maximum number of issues to return from the JQL query. Inspect `meta.issues.jql.maxResults` in the response to ensure the maximum value has not been exceeded.
      * query `string`: The JQL query.
      * startAt `integer`: The index of the first issue to return from the JQL query.
      * validation `string` (values: strict, warn, none): Determines how to validate the JQL query and treat the validation results.
  * project: The project that is available under the `project` variable when evaluating the expression.
    * id `integer`: The ID of the referenced item.
    * key `string`: The key of the referenced item.
  * serviceDesk `integer`: The ID of the service desk that is available under the `serviceDesk` variable when evaluating the expression.
  * sprint `integer`: The ID of the sprint that is available under the `sprint` variable when evaluating the expression.

### JiraExpressionEvalRequestBean
* JiraExpressionEvalRequestBean `object`
  * context: The context in which the Jira expression is evaluated.
    * board `integer`: The ID of the board that is available under the `board` variable when evaluating the expression.
    * customerRequest `integer`: The ID of the customer request that is available under the `customerRequest` variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type.
    * issue: The issue that is available under the `issue` variable when evaluating the expression.
      * id `integer`: The ID of the referenced item.
      * key `string`: The key of the referenced item.
    * issues: The collection of issues that is available under the `issues` variable when evaluating the expression.
      * jql: The JQL query that specifies the set of issues available in the Jira expression.
        * maxResults `integer`: The maximum number of issues to return from the JQL query. Inspect `meta.issues.jql.maxResults` in the response to ensure the maximum value has not been exceeded.
        * query `string`: The JQL query.
        * startAt `integer`: The index of the first issue to return from the JQL query.
        * validation `string` (values: strict, warn, none): Determines how to validate the JQL query and treat the validation results.
    * project: The project that is available under the `project` variable when evaluating the expression.
      * id `integer`: The ID of the referenced item.
      * key `string`: The key of the referenced item.
    * serviceDesk `integer`: The ID of the service desk that is available under the `serviceDesk` variable when evaluating the expression.
    * sprint `integer`: The ID of the sprint that is available under the `sprint` variable when evaluating the expression.
  * expression **required** `string`: The Jira expression to evaluate.

### JiraExpressionEvaluationMetaDataBean
* JiraExpressionEvaluationMetaDataBean `object`
  * complexity: Contains information about the expression complexity. For example, the number of steps it took to evaluate the expression.
    * beans **required**: The number of Jira REST API beans returned in the response.
      * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
      * value **required** `integer`: The complexity value of the current expression.
    * expensiveOperations **required**: The number of expensive operations executed while evaluating the expression. Expensive operations are those that load additional data, such as entity properties, comments, or custom fields.
      * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
      * value **required** `integer`: The complexity value of the current expression.
    * primitiveValues **required**: The number of primitive values returned in the response.
      * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
      * value **required** `integer`: The complexity value of the current expression.
    * steps **required**: The number of steps it took to evaluate the expression, where a step is a high-level operation performed by the expression. A step is an operation such as arithmetic, accessing a property, accessing a context variable, or calling a function.
      * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
      * value **required** `integer`: The complexity value of the current expression.
  * issues: Contains information about the `issues` variable in the context. For example, is the issues were loaded with JQL, information about the page will be included here.
    * jql [IssuesJqlMetaDataBean](#issuesjqlmetadatabean)

### JiraExpressionForAnalysis
* JiraExpressionForAnalysis `object`: Details of Jira expressions for analysis.
  * contextVariables `object`: Context variables and their types. The type checker assumes that [common context variables](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables), such as `issue` or `project`, are available in context and sets their type. Use this property to override the default types or provide details of new variables.
  * expressions **required** `array`: The list of Jira expressions to analyse.
    * items `string`: The list of Jira expressions to analyse.

### JiraExpressionResult
* JiraExpressionResult `object`: The result of evaluating a Jira expression.
  * meta: Contains various characteristics of the performed expression evaluation.
    * complexity: Contains information about the expression complexity. For example, the number of steps it took to evaluate the expression.
      * beans **required**: The number of Jira REST API beans returned in the response.
        * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
        * value **required** `integer`: The complexity value of the current expression.
      * expensiveOperations **required**: The number of expensive operations executed while evaluating the expression. Expensive operations are those that load additional data, such as entity properties, comments, or custom fields.
        * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
        * value **required** `integer`: The complexity value of the current expression.
      * primitiveValues **required**: The number of primitive values returned in the response.
        * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
        * value **required** `integer`: The complexity value of the current expression.
      * steps **required**: The number of steps it took to evaluate the expression, where a step is a high-level operation performed by the expression. A step is an operation such as arithmetic, accessing a property, accessing a context variable, or calling a function.
        * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
        * value **required** `integer`: The complexity value of the current expression.
    * issues: Contains information about the `issues` variable in the context. For example, is the issues were loaded with JQL, information about the page will be included here.
      * jql [IssuesJqlMetaDataBean](#issuesjqlmetadatabean)

### JiraExpressionValidationError
* JiraExpressionValidationError `object`: Details about syntax and type errors. The error details apply to the entire expression, unless the object includes:
  * column `integer`: The text column in which the error occurred.
  * expression `string`: The part of the expression in which the error occurred.
  * line `integer`: The text line in which the error occurred.
  * message **required** `string`: Details about the error.
  * type **required** `string` (values: syntax, type, other): The error type.

### JiraExpressionsAnalysis
* JiraExpressionsAnalysis `object`: Details about the analysed Jira expression.
  * results **required** `array`: The results of Jira expressions analysis.
    * items [JiraExpressionAnalysis](#jiraexpressionanalysis)

### JiraExpressionsComplexityBean
* JiraExpressionsComplexityBean `object`
  * beans **required**: The number of Jira REST API beans returned in the response.
    * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
    * value **required** `integer`: The complexity value of the current expression.
  * expensiveOperations **required**: The number of expensive operations executed while evaluating the expression. Expensive operations are those that load additional data, such as entity properties, comments, or custom fields.
    * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
    * value **required** `integer`: The complexity value of the current expression.
  * primitiveValues **required**: The number of primitive values returned in the response.
    * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
    * value **required** `integer`: The complexity value of the current expression.
  * steps **required**: The number of steps it took to evaluate the expression, where a step is a high-level operation performed by the expression. A step is an operation such as arithmetic, accessing a property, accessing a context variable, or calling a function.
    * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
    * value **required** `integer`: The complexity value of the current expression.

### JiraExpressionsComplexityValueBean
* JiraExpressionsComplexityValueBean `object`
  * limit **required** `integer`: The maximum allowed complexity. The evaluation will fail if this value is exceeded.
  * value **required** `integer`: The complexity value of the current expression.

### JqlQueriesToParse
* JqlQueriesToParse `object`: A list of JQL queries to parse.
  * queries **required** `array`: A list of queries to parse.
    * items `string`

### JqlQuery
* JqlQuery `object`: A parsed JQL query.
  * orderBy [JqlQueryOrderByClause](#jqlqueryorderbyclause)
  * where [JqlQueryClause](#jqlqueryclause)

### JqlQueryClause
* JqlQueryClause `object`: A JQL query clause.

### JqlQueryClauseOperand
* JqlQueryClauseOperand `object`: Details of an operand in a JQL clause.

### JqlQueryClauseTimePredicate
* JqlQueryClauseTimePredicate `object`: A time predicate for a temporal JQL clause.
  * operand **required** [JqlQueryClauseOperand](#jqlqueryclauseoperand)
  * operator **required** `string` (values: before, after, from, to, on, during, by): The operator between the field and the operand.

### JqlQueryField
* JqlQueryField `object`: A field used in a JQL query. See [Advanced searching - fields reference](https://confluence.atlassian.com/x/dAiiLQ) for more information about fields in JQL queries.
  * name **required** `string`: The name of the field.
  * property `array`: When the field refers to a value in an entity property, details of the entity property value.
    * items [JqlQueryFieldEntityProperty](#jqlqueryfieldentityproperty)

### JqlQueryFieldEntityProperty
* JqlQueryFieldEntityProperty `object`: Details of an entity property.
  * entity **required** `string`: The object on which the property is set.
  * key **required** `string`: The key of the property.
  * path **required** `string`: The path in the property value to query.
  * type `string` (values: number, string, text, date, user): The type of the property value extraction. Not available if the extraction for the property is not registered on the instance with the [Entity property](https://developer.atlassian.com/cloud/jira/platform/modules/entity-property/) module.

### JqlQueryOrderByClause
* JqlQueryOrderByClause `object`: Details of the order-by JQL clause.
  * fields **required** `array`: The list of order-by clause fields and their ordering directives.
    * items [JqlQueryOrderByClauseElement](#jqlqueryorderbyclauseelement)

### JqlQueryOrderByClauseElement
* JqlQueryOrderByClauseElement `object`: An element of the order-by JQL clause.
  * direction `string` (values: asc, desc): The direction in which to order the results.
  * field **required** [JqlQueryField](#jqlqueryfield)

### JqlQueryUnitaryOperand
* JqlQueryUnitaryOperand `object`: An operand that can be part of a list operand.

### JsonNode
* JsonNode `object`
  * array `boolean`
  * bigDecimal `boolean`
  * bigInteger `boolean`
  * bigIntegerValue `integer`
  * binary `boolean`
  * binaryValue `array`
    * items `string`
  * boolean `boolean`
  * booleanValue `boolean`
  * containerNode `boolean`
  * decimalValue `number`
  * double `boolean`
  * doubleValue `number`
  * elements `object`
  * fieldNames `object`
  * fields `object`
  * floatingPointNumber `boolean`
  * int `boolean`
  * intValue `integer`
  * integralNumber `boolean`
  * long `boolean`
  * longValue `integer`
  * missingNode `boolean`
  * null `boolean`
  * number `boolean`
  * numberType `string` (values: INT, LONG, BIG_INTEGER, FLOAT, DOUBLE, BIG_DECIMAL)
  * numberValue `number`
  * object `boolean`
  * pojo `boolean`
  * textValue `string`
  * textual `boolean`
  * valueAsBoolean `boolean`
  * valueAsDouble `number`
  * valueAsInt `integer`
  * valueAsLong `integer`
  * valueAsText `string`
  * valueNode `boolean`

### JsonTypeBean
* JsonTypeBean `object`: The schema of a field.
  * configuration `object`: If the field is a custom field, the configuration of the field.
  * custom `string`: If the field is a custom field, the URI of the field.
  * customId `integer`: If the field is a custom field, the custom ID of the field.
  * items `string`: When the data type is an array, the name of the field items within the array.
  * system `string`: If the field is a system field, the name of the field.
  * type **required** `string`: The data type of the field.

### KeywordOperand
* KeywordOperand `object`: An operand that is a JQL keyword. See [Advanced searching - keywords reference](https://confluence.atlassian.com/jiracorecloud/advanced-searching-keywords-reference-765593717.html#Advancedsearching-keywordsreference-EMPTYEMPTY) for more information about operand keywords.
  * keyword **required** `string` (values: empty): The keyword that is the operand value.

### LinkGroup
* LinkGroup `object`: Details a link group, which defines issue operations.
  * groups `array`
    * items [LinkGroup](#linkgroup)
  * header [SimpleLink](#simplelink)
  * id `string`
  * links `array`
    * items [SimpleLink](#simplelink)
  * styleClass `string`
  * weight `integer`

### LinkIssueRequestJsonBean
* LinkIssueRequestJsonBean `object`
  * comment [Comment](#comment)
  * inwardIssue **required** [LinkedIssue](#linkedissue)
  * outwardIssue **required** [LinkedIssue](#linkedissue)
  * type **required** [IssueLinkType](#issuelinktype)

### LinkedIssue
* LinkedIssue `object`: The ID or key of a linked issue.
  * fields: The fields associated with the issue.
    * assignee: The assignee of the linked issue.
      * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
      * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
      * active `boolean`: Whether the user is active.
      * avatarUrls: The avatars of the user.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
      * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
      * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * self `string`: The URL of the user.
      * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
    * issueType: The type of the linked issue.
      * avatarId `integer`: The ID of the issue type's avatar.
      * description `string`: The description of the issue type.
      * entityId `string`: Unique ID for next-gen projects.
      * iconUrl `string`: The URL of the issue type's avatar.
      * id `string`: The ID of the issue type.
      * name `string`: The name of the issue type.
      * scope: Details of the next-gen projects the issue type is available in.
        * project: The project the item has scope in.
          * avatarUrls: The URLs of the project's avatars.
          * id `string`: The ID of the project.
          * key `string`: The key of the project.
          * name `string`: The name of the project.
          * projectCategory: The category the project belongs to.
          * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
          * self `string`: The URL of the project details.
          * simplified `boolean`: Whether or not the project is simplified.
        * type `string` (values: PROJECT, TEMPLATE): The type of scope.
      * self `string`: The URL of these issue type details.
      * subtask `boolean`: Whether this issue type is used to create subtasks.
    * issuetype [IssueTypeDetails](#issuetypedetails)
    * priority: The priority of the linked issue.
      * description `string`: The description of the issue priority.
      * iconUrl `string`: The URL of the icon for the issue priority.
      * id `string`: The ID of the issue priority.
      * name `string`: The name of the issue priority.
      * self `string`: The URL of the issue priority.
      * statusColor `string`: The color used to indicate the issue priority.
    * status: The status of the linked issue.
      * description `string`: The description of the status.
      * iconUrl `string`: The URL of the icon used to represent the status.
      * id `string`: The ID of the status.
      * name `string`: The name of the status.
      * self `string`: The URL of the status.
      * statusCategory: The category assigned to the status.
        * colorName `string`: The name of the color used to represent the status category.
        * id `integer`: The ID of the status category.
        * key `string`: The key of the status category.
        * name `string`: The name of the status category.
        * self `string`: The URL of the status category.
    * summary `string`: The summary description of the linked issue.
    * timetracking: The time tracking of the linked issue.
      * originalEstimate `string`: The original estimate of time needed for this issue in readable format.
      * originalEstimateSeconds `integer`: The original estimate of time needed for this issue in seconds.
      * remainingEstimate `string`: The remaining estimate of time needed for this issue in readable format.
      * remainingEstimateSeconds `integer`: The remaining estimate of time needed for this issue in seconds.
      * timeSpent `string`: Time worked on this issue in readable format.
      * timeSpentSeconds `integer`: Time worked on this issue in seconds.
  * id `string`: The ID of an issue. Required if `key` isn't provided.
  * key `string`: The key of an issue. Required if `id` isn't provided.
  * self `string`: The URL of the issue.

### ListOperand
* ListOperand `object`: An operand that is a list of values.
  * values **required** `array`: The list of operand values.
    * items [JqlQueryUnitaryOperand](#jqlqueryunitaryoperand)

### ListWrapperCallbackApplicationRole
* ListWrapperCallbackApplicationRole `object`

### ListWrapperCallbackGroupName
* ListWrapperCallbackGroupName `object`

### Locale
* Locale `object`: Details of a locale.
  * locale `string`: The locale code. The Java the locale format is used: a two character language code (ISO 639), an underscore, and two letter country code (ISO 3166). For example, en\_US represents a locale of English (United States). Required on create.

### MoveFieldBean
* MoveFieldBean `object`
  * after `string`: The ID of the screen tab field after which to place the moved screen tab field. Required if `position` isn't provided.
  * position `string` (values: Earlier, Later, First, Last): The named position to which the screen tab field should be moved. Required if `after` isn't provided.

### NestedResponse
* NestedResponse `object`
  * errorCollection [ErrorCollection](#errorcollection)
  * status `integer`

### Notification
* Notification `object`: Details about a notification.
  * htmlBody `string`: The HTML body of the email notification for the issue.
  * restrict: Restricts the notifications to users with the specified permissions.
    * groups `array`: List of group memberships required to receive the notification.
      * items [GroupName](#groupname)
    * permissions `array`: List of permissions required to receive the notification.
      * items [RestrictedPermission](#restrictedpermission)
  * subject `string`: The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
  * textBody `string`: The plain text body of the email notification for the issue.
  * to: The recipients of the email notification for the issue.
    * assignee `boolean`: Whether the notification should be sent to the issue's assignees.
    * groups `array`: List of groups to receive the notification.
      * items [GroupName](#groupname)
    * reporter `boolean`: Whether the notification should be sent to the issue's reporter.
    * users `array`: List of users to receive the notification.
      * items [UserDetails](#userdetails)
    * voters `boolean`: Whether the notification should be sent to the issue's voters.
    * watchers `boolean`: Whether the notification should be sent to the issue's watchers.

### NotificationEvent
* NotificationEvent `object`: Details about a notification event.
  * description `string`: The description of the event.
  * id `integer`: The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
  * name `string`: The name of the event.
  * templateEvent: The template of the event. Only custom events configured by Jira administrators have template.
    * description `string`: The description of the event.
    * id `integer`: The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
    * name `string`: The name of the event.
    * templateEvent: The template of the event. Only custom events configured by Jira administrators have template.
      * description `string`: The description of the event.
      * id `integer`: The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
      * name `string`: The name of the event.
      * templateEvent: The template of the event. Only custom events configured by Jira administrators have template.
        * description `string`: The description of the event.
        * id `integer`: The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
        * name `string`: The name of the event.
        * templateEvent: The template of the event. Only custom events configured by Jira administrators have template.
          * description `string`: The description of the event.
          * id `integer`: The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
          * name `string`: The name of the event.
          * templateEvent: The template of the event. Only custom events configured by Jira administrators have template.

### NotificationRecipients
* NotificationRecipients `object`: Details of the users and groups to receive the notification.
  * assignee `boolean`: Whether the notification should be sent to the issue's assignees.
  * groups `array`: List of groups to receive the notification.
    * items [GroupName](#groupname)
  * reporter `boolean`: Whether the notification should be sent to the issue's reporter.
  * users `array`: List of users to receive the notification.
    * items [UserDetails](#userdetails)
  * voters `boolean`: Whether the notification should be sent to the issue's voters.
  * watchers `boolean`: Whether the notification should be sent to the issue's watchers.

### NotificationRecipientsRestrictions
* NotificationRecipientsRestrictions `object`: Details of the group membership or permissions needed to receive the notification.
  * groups `array`: List of group memberships required to receive the notification.
    * items [GroupName](#groupname)
  * permissions `array`: List of permissions required to receive the notification.
    * items [RestrictedPermission](#restrictedpermission)

### NotificationScheme
* NotificationScheme `object`: Details about a notification scheme.
  * description `string`: The description of the notification scheme.
  * expand `string`: Expand options that include additional notification scheme details in the response.
  * id `integer`: The ID of the notification scheme.
  * name `string`: The name of the notification scheme.
  * notificationSchemeEvents `array`: The notification events and associated recipients.
    * items [NotificationSchemeEvent](#notificationschemeevent)
  * scope: The scope of the notification scheme.
    * project: The project the item has scope in.
      * avatarUrls: The URLs of the project's avatars.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * id `string`: The ID of the project.
      * key `string`: The key of the project.
      * name `string`: The name of the project.
      * projectCategory: The category the project belongs to.
        * description `string`: The name of the project category.
        * id `string`: The ID of the project category.
        * name `string`: The description of the project category.
        * self `string`: The URL of the project category.
      * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
      * self `string`: The URL of the project details.
      * simplified `boolean`: Whether or not the project is simplified.
    * type `string` (values: PROJECT, TEMPLATE): The type of scope.
  * self `string`

### NotificationSchemeEvent
* NotificationSchemeEvent `object`: Details about a notification scheme event.
  * event [NotificationEvent](#notificationevent)
  * notifications `array`
    * items [EventNotification](#eventnotification)

### OperationMessage
* OperationMessage `object`
  * message **required** `string`: The human-readable message that describes the result.
  * statusCode **required** `integer`: The status code of the response.

### Operations
* Operations `object`: Details of the operations that can be performed on the issue.
  * linkGroups `array`: Details of the link groups defining issue operations.
    * items [LinkGroup](#linkgroup)

### OrderOfCustomFieldOptions
* OrderOfCustomFieldOptions `object`: An ordered list of custom field option IDs and information on where to move them.
  * after `string`: The ID of the custom field option or cascading option to place the moved options after. Required if `position` isn't provided.
  * customFieldOptionIds **required** `array`: A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both.
    * items `string`
  * position `string` (values: First, Last): The position the custom field options should be moved to. Required if `after` isn't provided.

### OrderOfIssueTypes
* OrderOfIssueTypes `object`: An ordered list of issue type IDs and information about where to move them.
  * after `string`: The ID of the issue type to place the moved issue types after. Required if `position` isn't provided.
  * issueTypeIds **required** `array`: A list of the issue type IDs to move. The order of the issue type IDs in the list is the order they are given after the move.
    * items `string`
  * position `string` (values: First, Last): The position the issue types should be moved to. Required if `after` isn't provided.

### PageBeanChangelog
* PageBeanChangelog `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Changelog](#changelog)

### PageBeanComment
* PageBeanComment `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Comment](#comment)

### PageBeanComponentWithIssueCount
* PageBeanComponentWithIssueCount `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [ComponentWithIssueCount](#componentwithissuecount)

### PageBeanContext
* PageBeanContext `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Context](#context)

### PageBeanContextForProjectAndIssueType
* PageBeanContextForProjectAndIssueType `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [ContextForProjectAndIssueType](#contextforprojectandissuetype)

### PageBeanCustomFieldContext
* PageBeanCustomFieldContext `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [CustomFieldContext](#customfieldcontext)

### PageBeanCustomFieldContextOption
* PageBeanCustomFieldContextOption `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [CustomFieldContextOption](#customfieldcontextoption)

### PageBeanCustomFieldOptionDetails
* PageBeanCustomFieldOptionDetails `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [CustomFieldOptionDetails](#customfieldoptiondetails)

### PageBeanDashboard
* PageBeanDashboard `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Dashboard](#dashboard)

### PageBeanField
* PageBeanField `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Field](#field)

### PageBeanFieldConfiguration
* PageBeanFieldConfiguration `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [FieldConfiguration](#fieldconfiguration)

### PageBeanFieldConfigurationIssueTypeItem
* PageBeanFieldConfigurationIssueTypeItem `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [FieldConfigurationIssueTypeItem](#fieldconfigurationissuetypeitem)

### PageBeanFieldConfigurationItem
* PageBeanFieldConfigurationItem `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [FieldConfigurationItem](#fieldconfigurationitem)

### PageBeanFieldConfigurationScheme
* PageBeanFieldConfigurationScheme `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [FieldConfigurationScheme](#fieldconfigurationscheme)

### PageBeanFieldConfigurationSchemeProjects
* PageBeanFieldConfigurationSchemeProjects `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [FieldConfigurationSchemeProjects](#fieldconfigurationschemeprojects)

### PageBeanFilterDetails
* PageBeanFilterDetails `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [FilterDetails](#filterdetails)

### PageBeanGroupDetails
* PageBeanGroupDetails `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [GroupDetails](#groupdetails)

### PageBeanIssueFieldOption
* PageBeanIssueFieldOption `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [IssueFieldOption](#issuefieldoption)

### PageBeanIssueSecurityLevelMember
* PageBeanIssueSecurityLevelMember `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [IssueSecurityLevelMember](#issuesecuritylevelmember)

### PageBeanIssueTypeScheme
* PageBeanIssueTypeScheme `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [IssueTypeScheme](#issuetypescheme)

### PageBeanIssueTypeSchemeMapping
* PageBeanIssueTypeSchemeMapping `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [IssueTypeSchemeMapping](#issuetypeschememapping)

### PageBeanIssueTypeSchemeProjects
* PageBeanIssueTypeSchemeProjects `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [IssueTypeSchemeProjects](#issuetypeschemeprojects)

### PageBeanIssueTypeScreenScheme
* PageBeanIssueTypeScreenScheme `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [IssueTypeScreenScheme](#issuetypescreenscheme)

### PageBeanIssueTypeScreenSchemeItem
* PageBeanIssueTypeScreenSchemeItem `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [IssueTypeScreenSchemeItem](#issuetypescreenschemeitem)

### PageBeanIssueTypeScreenSchemesProjects
* PageBeanIssueTypeScreenSchemesProjects `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [IssueTypeScreenSchemesProjects](#issuetypescreenschemesprojects)

### PageBeanNotificationScheme
* PageBeanNotificationScheme `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [NotificationScheme](#notificationscheme)

### PageBeanProject
* PageBeanProject `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Project](#project)

### PageBeanScreen
* PageBeanScreen `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Screen](#screen)

### PageBeanScreenScheme
* PageBeanScreenScheme `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [ScreenScheme](#screenscheme)

### PageBeanString
* PageBeanString `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items `string`

### PageBeanUser
* PageBeanUser `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [User](#user)

### PageBeanUserDetails
* PageBeanUserDetails `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [UserDetails](#userdetails)

### PageBeanUserKey
* PageBeanUserKey `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [UserKey](#userkey)

### PageBeanVersion
* PageBeanVersion `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Version](#version)

### PageBeanWebhook
* PageBeanWebhook `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Webhook](#webhook)

### PageBeanWorkflow
* PageBeanWorkflow `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [Workflow](#workflow)

### PageBeanWorkflowScheme
* PageBeanWorkflowScheme `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [WorkflowScheme](#workflowscheme)

### PageBeanWorkflowTransitionRules
* PageBeanWorkflowTransitionRules `object`: A page of items.
  * isLast `boolean`: Whether this is the last page.
  * maxResults `integer`: The maximum number of items that could be returned.
  * nextPage `string`: If there is another page of results, the URL of the next page.
  * self `string`: The URL of the page.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.
  * values `array`: The list of items.
    * items [WorkflowTransitionRules](#workflowtransitionrules)

### PageOfChangelogs
* PageOfChangelogs `object`: A page of changelogs.
  * histories `array`: The list of changelogs.
    * items [Changelog](#changelog)
  * maxResults `integer`: The maximum number of results that could be on the page.
  * startAt `integer`: The index of the first item returned on the page.
  * total `integer`: The number of results on the page.

### PageOfComments
* PageOfComments `object`: A page of comments.
  * comments `array`: The list of comments.
    * items [Comment](#comment)
  * maxResults `integer`: The maximum number of items that could be returned.
  * startAt `integer`: The index of the first item returned.
  * total `integer`: The number of items returned.

### PageOfDashboards
* PageOfDashboards `object`: A page containing dashboard details.
  * dashboards `array`: List of dashboards.
    * items [Dashboard](#dashboard)
  * maxResults `integer`: The maximum number of results that could be on the page.
  * next `string`: The URL of the next page of results, if any.
  * prev `string`: The URL of the previous page of results, if any.
  * startAt `integer`: The index of the first item returned on the page.
  * total `integer`: The number of results on the page.

### PageOfWorklogs
* PageOfWorklogs `object`: Paginated list of worklog details
  * maxResults `integer`: The maximum number of results that could be on the page.
  * startAt `integer`: The index of the first item returned on the page.
  * total `integer`: The number of results on the page.
  * worklogs `array`: List of worklogs.
    * items [Worklog](#worklog)

### PagedListUserDetailsApplicationUser
* PagedListUserDetailsApplicationUser `object`: A paged list. To access additional details append `[start-index:end-index]` to the expand request. For example, `?expand=sharedUsers[10:40]` returns a list starting at item 10 and finishing at item 40.
  * end-index `integer`: The index of the last item returned on the page.
  * items `array`: The list of items.
    * items [UserDetails](#userdetails)
  * max-results `integer`: The maximum number of results that could be on the page.
  * size `integer`: The number of items on the page.
  * start-index `integer`: The index of the first item returned on the page.

### ParsedJqlQueries
* ParsedJqlQueries `object`: A list of parsed JQL queries.
  * queries **required** `array`: A list of parsed JQL queries.
    * items [ParsedJqlQuery](#parsedjqlquery)

### ParsedJqlQuery
* ParsedJqlQuery `object`: Details of a parsed JQL query.
  * errors `array`: The list of syntax or validation errors.
    * items `string`
  * query **required** `string`: The JQL query that was parsed and validated.
  * structure: The syntax tree of the query. Empty if the query was invalid.
    * orderBy [JqlQueryOrderByClause](#jqlqueryorderbyclause)
    * where [JqlQueryClause](#jqlqueryclause)

### PermissionGrant
* PermissionGrant `object`: Details about a permission granted to a user or group.
  * holder: The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. See [Holder object](#holder-object) in *Get all permission schemes* for more information.
    * expand `string`: Expand options that include additional permission holder details in the response.
    * parameter `string`: The identifier of permission holder.
    * type **required** `string`: The type of permission holder.
  * id `integer`: The ID of the permission granted details.
  * permission `string`: The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions.
  * self `string`: The URL of the permission granted details.

### PermissionGrants
* PermissionGrants `object`: List of permission grants.
  * expand `string`: Expand options that include additional permission grant details in the response.
  * permissions `array`: Permission grants list.
    * items [PermissionGrant](#permissiongrant)

### PermissionHolder
* PermissionHolder `object`: Details of a user, group, field, or project role that holds a permission. See [Holder object](#holder-object) in *Get all permission schemes* for more information.
  * expand `string`: Expand options that include additional permission holder details in the response.
  * parameter `string`: The identifier of permission holder.
  * type **required** `string`: The type of permission holder.

### PermissionScheme
* PermissionScheme `object`: Details of a permission scheme.
  * description `string`: A description for the permission scheme.
  * expand `string`: The expand options available for the permission scheme.
  * id `integer`: The ID of the permission scheme.
  * name **required** `string`: The name of the permission scheme. Must be unique.
  * permissions `array`: The permission scheme to create or update. See [About permission schemes and grants](#about-permission-schemes-and-grants) for more information.
    * items [PermissionGrant](#permissiongrant)
  * scope: The scope of the permission scheme.
    * project: The project the item has scope in.
      * avatarUrls: The URLs of the project's avatars.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * id `string`: The ID of the project.
      * key `string`: The key of the project.
      * name `string`: The name of the project.
      * projectCategory: The category the project belongs to.
        * description `string`: The name of the project category.
        * id `string`: The ID of the project category.
        * name `string`: The description of the project category.
        * self `string`: The URL of the project category.
      * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
      * self `string`: The URL of the project details.
      * simplified `boolean`: Whether or not the project is simplified.
    * type `string` (values: PROJECT, TEMPLATE): The type of scope.
  * self `string`: The URL of the permission scheme.

### PermissionSchemes
* PermissionSchemes `object`: List of all permission schemes.
  * permissionSchemes `array`: Permission schemes list.
    * items [PermissionScheme](#permissionscheme)

### Permissions
* Permissions `object`: Details about permissions.
  * permissions `object`: List of permissions.

### PermissionsKeysBean
* PermissionsKeysBean `object`
  * permissions **required** `array`: A list of permission keys.
    * items `string`

### PermittedProjects
* PermittedProjects `object`: A list of projects in which a user is granted permissions.
  * projects `array`: A list of projects.
    * items [ProjectIdentifierBean](#projectidentifierbean)

### Priority
* Priority `object`: An issue priority.
  * description `string`: The description of the issue priority.
  * iconUrl `string`: The URL of the icon for the issue priority.
  * id `string`: The ID of the issue priority.
  * name `string`: The name of the issue priority.
  * self `string`: The URL of the issue priority.
  * statusColor `string`: The color used to indicate the issue priority.

### Project
* Project `object`: Details about a project.
  * components `array`: List of the components contained in the project.
    * items [Component](#component)
  * archived `boolean`: Whether the project is archived.
  * archivedBy: The user who archived the project.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * archivedDate `string`: The date when the project was archived.
  * assigneeType `string` (values: PROJECT_LEAD, UNASSIGNED): The default assignee when creating issues for this project.
  * avatarUrls: The URLs of the project's avatars.
    * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
    * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
    * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
    * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
  * deleted `boolean`: Whether the project is marked as deleted.
  * deletedBy: The user who marked the project as deleted.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * deletedDate `string`: The date when the project was marked as deleted.
  * description `string`: A brief description of the project.
  * email `string`: An email address associated with the project.
  * expand `string`: Expand options that include additional project details in the response.
  * favourite `boolean`: Whether the project is selected as a favorite.
  * id `string`: The ID of the project.
  * insight: Insights about the project.
    * lastIssueUpdateTime `string`: The last issue update time.
    * totalIssueCount `integer`: Total issue count.
  * isPrivate `boolean`: Whether the project is private.
  * issueTypeHierarchy: The issue type hierarchy for the project
    * level `array`
      * items [HierarchyLevel](#hierarchylevel)
  * issueTypes `array`: List of the issue types available in the project.
    * items [IssueTypeDetails](#issuetypedetails)
  * key `string`: The key of the project.
  * lead: The username of the project lead.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * name `string`: The name of the project.
  * permissions: User permissions on the project
    * canEdit `boolean`: Whether the logged user can edit the project.
  * projectCategory: The category the project belongs to.
    * description `string`: The description of the project category. Required on create, optional on update.
    * id `string`: The ID of the project category.
    * name `string`: The name of the project category. Required on create, optional on update.
    * self `string`: The URL of the project category.
  * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
  * properties `object`: Map of project properties
  * retentionTillDate `string`: The date when the project is deleted permanently.
  * roles `object`: The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-3-role-post).
  * self `string`: The URL of the project details.
  * simplified `boolean`: Whether the project is simplified.
  * style `string` (values: classic, next-gen): The type of the project.
  * url `string`: A link to information about this project, such as project documentation.
  * uuid `string`: Unique ID for next-gen projects.
  * versions `array`: The versions defined in the project. For more information, see [Create version](#api-rest-api-3-version-post).
    * items [Version](#version)

### ProjectAvatars
* ProjectAvatars `object`: List of project avatars.
  * custom `array`: List of avatars added to Jira. These avatars may be deleted.
    * items [Avatar](#avatar)
  * system `array`: List of avatars included with Jira. These avatars cannot be deleted.
    * items [Avatar](#avatar)

### ProjectCategory
* ProjectCategory `object`: A project category.
  * description `string`: The description of the project category. Required on create, optional on update.
  * id `string`: The ID of the project category.
  * name `string`: The name of the project category. Required on create, optional on update.
  * self `string`: The URL of the project category.

### ProjectEmailAddress
* ProjectEmailAddress `object`: A project's sender email address.
  * emailAddress `string`: The email address.

### ProjectForScope
* ProjectForScope `object`: Details about a next-gen project.
  * avatarUrls: The URLs of the project's avatars.
    * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
    * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
    * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
    * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
  * id `string`: The ID of the project.
  * key `string`: The key of the project.
  * name `string`: The name of the project.
  * projectCategory: The category the project belongs to.
    * description `string`: The name of the project category.
    * id `string`: The ID of the project category.
    * name `string`: The description of the project category.
    * self `string`: The URL of the project category.
  * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
  * self `string`: The URL of the project details.
  * simplified `boolean`: Whether or not the project is simplified.

### ProjectIdentifierBean
* ProjectIdentifierBean `object`: The identifiers for a project.
  * id `integer`: The ID of the project.
  * key `string`: The key of the project.

### ProjectIdentifiers
* ProjectIdentifiers `object`: Identifiers for a project.
  * id **required** `integer`: The ID of the created project.
  * key **required** `string`: The key of the created project.
  * self **required** `string`: The URL of the created project.

### ProjectIds
* ProjectIds `object`: A list of project IDs.
  * projectIds **required** `array`: The IDs of projects.
    * items `string`

### ProjectInputBean
* ProjectInputBean `object`
  * assigneeType `string` (values: PROJECT_LEAD, UNASSIGNED): The default assignee when creating issues for this project.
  * avatarId `integer`: An integer value for the project's avatar.
  * categoryId `integer`: The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.
  * description `string`: A brief description of the project.
  * issueSecurityScheme `integer`: The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.
  * key `string`: Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters. Required when creating a project. Optional when updating a project.
  * lead `string`: This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Optional when updating a project. Cannot be provided with `leadAccountId`.
  * leadAccountId `string`: The account ID of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Optional when updating a project. Cannot be provided with `lead`.
  * name `string`: The name of the project. Required when creating a project. Optional when updating a project.
  * notificationScheme `integer`: The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.
  * permissionScheme `integer`: The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.
  * projectTemplateKey `string` (values: com.pyxis.greenhopper.jira:gh-simplified-agility-kanban, com.pyxis.greenhopper.jira:gh-simplified-agility-scrum, com.pyxis.greenhopper.jira:gh-simplified-basic, com.pyxis.greenhopper.jira:gh-simplified-kanban-classic, com.pyxis.greenhopper.jira:gh-simplified-scrum-classic, com.atlassian.servicedesk:simplified-it-service-desk, com.atlassian.servicedesk:simplified-internal-service-desk, com.atlassian.servicedesk:simplified-external-service-desk, com.atlassian.servicedesk:simplified-hr-service-desk, com.atlassian.servicedesk:simplified-facilities-service-desk, com.atlassian.jira-core-project-templates:jira-core-simplified-content-management, com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval, com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking, com.atlassian.jira-core-project-templates:jira-core-simplified-process-control, com.atlassian.jira-core-project-templates:jira-core-simplified-procurement, com.atlassian.jira-core-project-templates:jira-core-simplified-project-management, com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment, com.atlassian.jira-core-project-templates:jira-core-simplified-task-): A prebuilt configuration for a project. The type of the `projectTemplateKey` must match with the type of the `projectTypeKey`. Required when creating a project. Not applicable for the Update project resource.
  * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource.
  * url `string`: A link to information about this project, such as project documentation

### ProjectInsight
* ProjectInsight `object`: Additional details about a project.
  * lastIssueUpdateTime `string`: The last issue update time.
  * totalIssueCount `integer`: Total issue count.

### ProjectIssueCreateMetadata
* ProjectIssueCreateMetadata `object`: Details of the issue creation metadata for a project.
  * avatarUrls: List of the project's avatars, returning the avatar size and associated URL.
    * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
    * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
    * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
    * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
  * expand `string`: Expand options that include additional project issue create metadata details in the response.
  * id `string`: The ID of the project.
  * issuetypes `array`: List of the issue types supported by the project.
    * items [IssueTypeIssueCreateMetadata](#issuetypeissuecreatemetadata)
  * key `string`: The key of the project.
  * name `string`: The name of the project.
  * self `string`: The URL of the project.

### ProjectIssueSecurityLevels
* ProjectIssueSecurityLevels `object`: List of issue level security items in a project.
  * levels **required** `array`: Issue level security items list.
    * items [SecurityLevel](#securitylevel)

### ProjectIssueTypeHierarchy
* ProjectIssueTypeHierarchy `object`: The hierarchy of issue types within a project.
  * hierarchy `array`: Details of an issue type hierarchy level.
    * items [ProjectIssueTypesHierarchyLevel](#projectissuetypeshierarchylevel)
  * projectId `integer`: The ID of the project.

### ProjectIssueTypeMapping
* ProjectIssueTypeMapping `object`: The project and issue type mapping.
  * issueTypeId **required** `string`: The ID of the issue type.
  * projectId **required** `string`: The ID of the project.

### ProjectIssueTypeMappings
* ProjectIssueTypeMappings `object`: The project and issue type mappings.
  * mappings **required** `array`: The project and issue type mappings.
    * items [ProjectIssueTypeMapping](#projectissuetypemapping)

### ProjectIssueTypesHierarchyLevel
* ProjectIssueTypesHierarchyLevel `object`: Details of an issue type hierarchy level.
  * entityId `string`: The ID of the issue type hierarchy level.
  * issueTypes `array`: The list of issue types in the hierarchy level.
    * items [IssueTypeInfo](#issuetypeinfo)
  * level `integer`: The level of the issue type hierarchy level.
  * name `string`: The name of the issue type hierarchy level.

### ProjectPermissions
* ProjectPermissions `object`: Permissions which a user has on a project.
  * canEdit `boolean`: Whether the logged user can edit the project.

### ProjectRole
* ProjectRole `object`: Details about the roles in a project.
  * actors `array`: The list of users who act in this role.
    * items [RoleActor](#roleactor)
  * admin `boolean`: Whether this role is the admin role for the project.
  * currentUserRole `boolean`: Whether the calling user is part of this role.
  * default `boolean`: Whether this role is the default role for the project
  * description `string`: The description of the project role.
  * id `integer`: The ID of the project role.
  * name `string`: The name of the project role.
  * roleConfigurable `boolean`: Whether the roles are configurable for this project.
  * scope: The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
    * project: The project the item has scope in.
      * avatarUrls: The URLs of the project's avatars.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * id `string`: The ID of the project.
      * key `string`: The key of the project.
      * name `string`: The name of the project.
      * projectCategory: The category the project belongs to.
        * description `string`: The name of the project category.
        * id `string`: The ID of the project category.
        * name `string`: The description of the project category.
        * self `string`: The URL of the project category.
      * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
      * self `string`: The URL of the project details.
      * simplified `boolean`: Whether or not the project is simplified.
    * type `string` (values: PROJECT, TEMPLATE): The type of scope.
  * self `string`: The URL the project role details.
  * translatedName `string`: The translated name of the project role.

### ProjectRoleActorsUpdateBean
* ProjectRoleActorsUpdateBean `object`
  * categorisedActors `object`: The actors to add to the project role. Add groups using `atlassian-group-role-actor` and a list of group names. For example, `"atlassian-group-role-actor":["another","administrators"]}`. Add users using `atlassian-user-role-actor` and a list of account IDs. For example, `"atlassian-user-role-actor":["12345678-9abc-def1-2345-6789abcdef12", "abcdef12-3456-789a-bcde-f123456789ab"]`.
  * id `integer`: The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.

### ProjectRoleGroup
* ProjectRoleGroup `object`: Details of the group associated with the role.
  * displayName `string`: The display name of the group.
  * name `string`: The name of the group

### ProjectRoleUser
* ProjectRoleUser `object`: Details of the user associated with the role.
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import.

### ProjectScopeBean
* ProjectScopeBean `object`
  * attributes `array`: Defines the behavior of the option in the project.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
    * items `string` (values: notSelectable, defaultValue)
  * id `integer`: The ID of the project that the option's behavior applies to.

### ProjectType
* ProjectType `object`: Details about a project type.
  * color `string`: The color of the project type.
  * descriptionI18nKey `string`: The key of the project type's description.
  * formattedKey `string`: The formatted key of the project type.
  * icon `string`: The icon of the project type.
  * key `string`: The key of the project type.

### PropertyKey
* PropertyKey `object`: Property key details.
  * key `string`: The key of the property.
  * self `string`: The URL of the property.

### PropertyKeys
* PropertyKeys `object`: List of property keys.
  * keys `array`: Property key details.
    * items [PropertyKey](#propertykey)

### PublishedWorkflowId
* PublishedWorkflowId `object`: Properties that identify a published workflow.
  * name **required** `string`: The name of the workflow.

### RegisteredWebhook
* RegisteredWebhook `object`: ID of a registered webhook or error messages explaining why a webhook wasn't registered.
  * createdWebhookId `integer`: The ID of the webhook. Returned if the webhook is created.
  * errors `array`: Error messages specifying why the webhook creation failed.
    * items `string`: Error messages specifying why the webhook creation failed.

### RemoteIssueLink
* RemoteIssueLink `object`: Details of an issue remote link.
  * application: Details of the remote application the linked item is in.
    * name `string`: The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link". Grouping and sorting of links may place links without an application name last.
    * type `string`: The name-spaced type of the application, used by registered rendering apps.
  * globalId `string`: The global ID of the link, such as the ID of the item on the remote system.
  * id `integer`: The ID of the link.
  * object: Details of the item linked to.
    * icon: Details of the icon for the item. If no icon is defined, the default link icon is used in Jira.
      * link `string`: The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
      * title `string`: The title of the icon. This is used as follows:
      * url16x16 `string`: The URL of an icon that displays at 16x16 pixel in Jira.
    * status: The status of the item.
      * icon: Details of the icon representing the status. If not provided, no status icon displays in Jira.
        * link `string`: The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
        * title `string`: The title of the icon. This is used as follows:
        * url16x16 `string`: The URL of an icon that displays at 16x16 pixel in Jira.
      * resolved `boolean`: Whether the item is resolved. If set to "true", the link to the issue is displayed in a strikethrough font, otherwise the link displays in normal font.
    * summary `string`: The summary details of the item.
    * title **required** `string`: The title of the item.
    * url **required** `string`: The URL of the item.
  * relationship `string`: Description of the relationship between the issue and the linked item.
  * self `string`: The URL of the link.

### RemoteIssueLinkIdentifies
* RemoteIssueLinkIdentifies `object`: Details of the identifiers for a created or updated remote issue link.
  * id `integer`: The ID of the remote issue link, such as the ID of the item on the remote system.
  * self `string`: The URL of the remote issue link.

### RemoteIssueLinkRequest
* RemoteIssueLinkRequest `object`: Details of a remote issue link.
  * application: Details of the remote application the linked item is in. For example, trello.
    * name `string`: The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link". Grouping and sorting of links may place links without an application name last.
    * type `string`: The name-spaced type of the application, used by registered rendering apps.
  * globalId `string`: An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.
  * object **required**: Details of the item linked to.
    * icon: Details of the icon for the item. If no icon is defined, the default link icon is used in Jira.
      * link `string`: The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
      * title `string`: The title of the icon. This is used as follows:
      * url16x16 `string`: The URL of an icon that displays at 16x16 pixel in Jira.
    * status: The status of the item.
      * icon: Details of the icon representing the status. If not provided, no status icon displays in Jira.
        * link `string`: The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
        * title `string`: The title of the icon. This is used as follows:
        * url16x16 `string`: The URL of an icon that displays at 16x16 pixel in Jira.
      * resolved `boolean`: Whether the item is resolved. If set to "true", the link to the issue is displayed in a strikethrough font, otherwise the link displays in normal font.
    * summary `string`: The summary details of the item.
    * title **required** `string`: The title of the item.
    * url **required** `string`: The URL of the item.
  * relationship `string`: Description of the relationship between the issue and the linked item. If not set, the relationship description "links to" is used in Jira.

### RemoteObject
* RemoteObject `object`: The linked item.
  * icon: Details of the icon for the item. If no icon is defined, the default link icon is used in Jira.
    * link `string`: The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
    * title `string`: The title of the icon. This is used as follows:
    * url16x16 `string`: The URL of an icon that displays at 16x16 pixel in Jira.
  * status: The status of the item.
    * icon: Details of the icon representing the status. If not provided, no status icon displays in Jira.
      * link `string`: The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
      * title `string`: The title of the icon. This is used as follows:
      * url16x16 `string`: The URL of an icon that displays at 16x16 pixel in Jira.
    * resolved `boolean`: Whether the item is resolved. If set to "true", the link to the issue is displayed in a strikethrough font, otherwise the link displays in normal font.
  * summary `string`: The summary details of the item.
  * title **required** `string`: The title of the item.
  * url **required** `string`: The URL of the item.

### RemoveOptionFromIssuesResult
* RemoveOptionFromIssuesResult `object`
  * errors: A collection of errors related to unchanged issues. The collection size is limited, which means not all errors may be returned.
    * errorMessages `array`: The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
      * items `string`
    * errors `object`: The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
    * httpStatusCode `integer`
  * modifiedIssues `array`: The IDs of the modified issues.
    * items `integer`
  * unmodifiedIssues `array`: The IDs of the unchanged issues, those issues where errors prevent modification.
    * items `integer`

### RenamedCascadingOption
* RenamedCascadingOption `object`: Details of a custom field cascading option to rename.
  * newValue **required** `string`: The new value of the cascading option.
  * value **required** `string`: The value of the cascading option.

### RenamedOption
* RenamedOption `object`: Details of a custom field option to rename.
  * cascadingOptions `array`: The new values for the cascading options of this option. Only used for Select List (cascading) fields.
    * items [RenamedCascadingOption](#renamedcascadingoption)
  * newValue **required** `string`: The new value of the option.
  * value **required** `string`: The current option value.

### Resolution
* Resolution `object`: Details of an issue resolution.
  * description `string`: The description of the issue resolution.
  * id `string`: The ID of the issue resolution.
  * name `string`: The name of the issue resolution.
  * self `string`: The URL of the issue resolution.

### RestrictedPermission
* RestrictedPermission `object`: Details of the permission.
  * id `string`: The ID of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
  * key `string`: The key of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.

### RichText
* RichText `object`
  * emptyAdf `boolean`
  * valueSet `boolean`

### RoleActor
* RoleActor `object`: Details about a user assigned to a project role.
  * actorGroup
    * displayName `string`: The display name of the group.
    * name `string`: The name of the group
  * actorUser
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import.
  * avatarUrl `string`: The avatar of the role actor.
  * displayName `string`: The display name of the role actor. For users, depending on the user’s privacy setting, this may return an alternative value for the user's name.
  * id `integer`: The ID of the role actor.
  * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * type `string` (values: atlassian-group-role-actor, atlassian-user-role-actor): The type of role actor.

### RuleConfiguration
* RuleConfiguration `object`: A rule configuration.
  * value **required** `string`: Configuration of the rule, as it is stored by the Connect app on the rule configuration page.

### Scope
* Scope `object`: The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
  * project: The project the item has scope in.
    * avatarUrls: The URLs of the project's avatars.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * id `string`: The ID of the project.
    * key `string`: The key of the project.
    * name `string`: The name of the project.
    * projectCategory: The category the project belongs to.
      * description `string`: The name of the project category.
      * id `string`: The ID of the project category.
      * name `string`: The description of the project category.
      * self `string`: The URL of the project category.
    * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
    * self `string`: The URL of the project details.
    * simplified `boolean`: Whether or not the project is simplified.
  * type `string` (values: PROJECT, TEMPLATE): The type of scope.

### Screen
* Screen `object`: A screen.
  * description `string`: The description of the screen.
  * id `integer`: The ID of the screen.
  * name `string`: The name of the screen.
  * scope: The scope of the screen.
    * project: The project the item has scope in.
      * avatarUrls: The URLs of the project's avatars.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * id `string`: The ID of the project.
      * key `string`: The key of the project.
      * name `string`: The name of the project.
      * projectCategory: The category the project belongs to.
        * description `string`: The name of the project category.
        * id `string`: The ID of the project category.
        * name `string`: The description of the project category.
        * self `string`: The URL of the project category.
      * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
      * self `string`: The URL of the project details.
      * simplified `boolean`: Whether or not the project is simplified.
    * type `string` (values: PROJECT, TEMPLATE): The type of scope.

### ScreenDetails
* ScreenDetails `object`: Details of a screen.
  * description `string`: The description of the screen. The maximum length is 255 characters.
  * name **required** `string`: The name of the screen. The name must be unique. The maximum length is 255 characters.

### ScreenID
* ScreenID `object`: ID of a screen.
  * id **required** `string`: The ID of the screen.

### ScreenScheme
* ScreenScheme `object`: A screen scheme.
  * description `string`: The description of the screen scheme.
  * id `integer`: The ID of the screen scheme.
  * name `string`: The name of the screen scheme.
  * screens: The IDs of the screens for the screen types of the screen scheme.
    * create `integer`: The ID of the create screen.
    * default `integer`: The ID of the default screen. Required when creating a screen scheme.
    * edit `integer`: The ID of the edit screen.
    * view `integer`: The ID of the view screen.

### ScreenSchemeDetails
* ScreenSchemeDetails `object`: Details of a screen scheme.
  * description `string`: The description of the screen scheme. The maximum length is 255 characters.
  * name **required** `string`: The name of the screen scheme. The name must be unique. The maximum length is 255 characters.
  * screens **required**: The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted.
    * create `integer`: The ID of the create screen.
    * default `integer`: The ID of the default screen. Required when creating a screen scheme.
    * edit `integer`: The ID of the edit screen.
    * view `integer`: The ID of the view screen.

### ScreenSchemeId
* ScreenSchemeId `object`: The ID of a screen scheme.
  * id **required** `integer`: The ID of the screen scheme.

### ScreenTypes
* ScreenTypes `object`: The IDs of the screens for the screen types of the screen scheme.
  * create `integer`: The ID of the create screen.
  * default `integer`: The ID of the default screen. Required when creating a screen scheme.
  * edit `integer`: The ID of the edit screen.
  * view `integer`: The ID of the view screen.

### ScreenableField
* ScreenableField `object`: A screen tab field.
  * id `string`: The ID of the screen tab field.
  * name `string`: The name of the screen tab field. Required on create and update. The maximum length is 255 characters.

### ScreenableTab
* ScreenableTab `object`: A screen tab.
  * id `integer`: The ID of the screen tab.
  * name **required** `string`: The name of the screen tab. The maximum length is 255 characters.

### SearchRequestBean
* SearchRequestBean `object`
  * expand `array`: Use [expand](em>#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:
    * items `string`
  * fields `array`: A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:
    * items `string`
  * fieldsByKeys `boolean`: Reference fields by their key (rather than ID). The default is `false`.
  * jql `string`: A [JQL](https://confluence.atlassian.com/x/egORLQ) expression.
  * maxResults `integer`: The maximum number of items to return per page.
  * properties `array`: A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.
    * items `string`
  * startAt `integer`: The index of the first item to return in the page of results (page offset). The base index is `0`.
  * validateQuery `string` (values: strict, warn, none, true, false): Determines how to validate the JQL query and treat the validation results. Supported values:

### SearchResults
* SearchResults `object`: The result of a JQL search.
  * expand `string`: Expand options that include additional search result details in the response.
  * issues `array`: The list of issues found by the search.
    * items [IssueBean](#issuebean)
  * maxResults `integer`: The maximum number of results that could be on the page.
  * names `object`: The ID and name of each field in the search results.
  * schema `object`: The schema describing the field types in the search results.
  * startAt `integer`: The index of the first item returned on the page.
  * total `integer`: The number of results on the page.
  * warningMessages `array`: Any warnings related to the JQL query.
    * items `string`

### SecurityLevel
* SecurityLevel `object`: Details of an issue level security item.
  * description `string`: The description of the issue level security item.
  * id `string`: The ID of the issue level security item.
  * name `string`: The name of the issue level security item.
  * self `string`: The URL of the issue level security item.

### SecurityScheme
* SecurityScheme `object`: Details about a security scheme.
  * defaultSecurityLevelId `integer`: The ID of the default security level.
  * description `string`: The description of the issue security scheme.
  * id `integer`: The ID of the issue security scheme.
  * levels `array`
    * items [SecurityLevel](#securitylevel)
  * name `string`: The name of the issue security scheme.
  * self `string`: The URL of the issue security scheme.

### SecuritySchemes
* SecuritySchemes `object`: List of security schemes.
  * issueSecuritySchemes `array`: List of security schemes.
    * items [SecurityScheme](#securityscheme)

### ServerInformation
* ServerInformation `object`: Details about the Jira instance.
  * baseUrl `string`: The base URL of the Jira instance.
  * buildDate `string`: The timestamp when the Jira version was built.
  * buildNumber `integer`: The build number of the Jira version.
  * deploymentType `string`: The type of server deployment. This is always returned as *Cloud*.
  * healthChecks `array`: Jira instance health check results. Deprecated and no longer returned.
    * items [HealthCheckResult](#healthcheckresult)
  * scmInfo `string`: The unique identifier of the Jira version.
  * serverTime `string`: The time in Jira when this request was responded to.
  * serverTitle `string`: The name of the Jira instance.
  * version `string`: The version of Jira.
  * versionNumbers `array`: The major, minor, and revision version numbers of the Jira version.
    * items `integer`

### SharePermission
* SharePermission `object`: Details of a share permission for the filter.
  * group: The group that the filter is shared with. For a request, specify the `name` property for the group.
    * name `string`: The name of group.
    * self `string`: The URL for these group details.
  * id `integer`: The unique identifier of the share permission.
  * project: The project that the filter is shared with. This is similar to the project object returned by [Get project](#api-rest-api-3-project-projectIdOrKey-get) but it contains a subset of the properties, which are: `self`, `id`, `key`, `assigneeType`, `name`, `roles`, `avatarUrls`, `projectType`, `simplified`.  
    * components `array`: List of the components contained in the project.
      * items [Component](#component)
    * archived `boolean`: Whether the project is archived.
    * archivedBy: The user who archived the project.
      * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
      * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
      * active `boolean`: Whether the user is active.
      * applicationRoles: The application roles the user is assigned to.
        * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
        * items `array`
          * items [ApplicationRole](#applicationrole)
        * max-results `integer`
        * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
        * size `integer`
      * avatarUrls: The avatars of the user.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
      * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
      * expand `string`: Expand options that include additional user details in the response.
      * groups: The groups that the user belongs to.
        * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
        * items `array`
          * items [GroupName](#groupname)
        * max-results `integer`
        * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
        * size `integer`
      * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
      * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * self `string`: The URL of the user.
      * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
    * archivedDate `string`: The date when the project was archived.
    * assigneeType `string` (values: PROJECT_LEAD, UNASSIGNED): The default assignee when creating issues for this project.
    * avatarUrls: The URLs of the project's avatars.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * deleted `boolean`: Whether the project is marked as deleted.
    * deletedBy: The user who marked the project as deleted.
      * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
      * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
      * active `boolean`: Whether the user is active.
      * applicationRoles: The application roles the user is assigned to.
        * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
        * items `array`
          * items [ApplicationRole](#applicationrole)
        * max-results `integer`
        * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
        * size `integer`
      * avatarUrls: The avatars of the user.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
      * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
      * expand `string`: Expand options that include additional user details in the response.
      * groups: The groups that the user belongs to.
        * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
        * items `array`
          * items [GroupName](#groupname)
        * max-results `integer`
        * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
        * size `integer`
      * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
      * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * self `string`: The URL of the user.
      * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
    * deletedDate `string`: The date when the project was marked as deleted.
    * description `string`: A brief description of the project.
    * email `string`: An email address associated with the project.
    * expand `string`: Expand options that include additional project details in the response.
    * favourite `boolean`: Whether the project is selected as a favorite.
    * id `string`: The ID of the project.
    * insight: Insights about the project.
      * lastIssueUpdateTime `string`: The last issue update time.
      * totalIssueCount `integer`: Total issue count.
    * isPrivate `boolean`: Whether the project is private.
    * issueTypeHierarchy: The issue type hierarchy for the project
      * level `array`
        * items [HierarchyLevel](#hierarchylevel)
    * issueTypes `array`: List of the issue types available in the project.
      * items [IssueTypeDetails](#issuetypedetails)
    * key `string`: The key of the project.
    * lead: The username of the project lead.
      * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
      * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
      * active `boolean`: Whether the user is active.
      * applicationRoles: The application roles the user is assigned to.
        * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
        * items `array`
          * items [ApplicationRole](#applicationrole)
        * max-results `integer`
        * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
        * size `integer`
      * avatarUrls: The avatars of the user.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
      * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
      * expand `string`: Expand options that include additional user details in the response.
      * groups: The groups that the user belongs to.
        * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
        * items `array`
          * items [GroupName](#groupname)
        * max-results `integer`
        * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
        * size `integer`
      * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
      * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * self `string`: The URL of the user.
      * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: The name of the project.
    * permissions: User permissions on the project
      * canEdit `boolean`: Whether the logged user can edit the project.
    * projectCategory: The category the project belongs to.
      * description `string`: The description of the project category. Required on create, optional on update.
      * id `string`: The ID of the project category.
      * name `string`: The name of the project category. Required on create, optional on update.
      * self `string`: The URL of the project category.
    * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
    * properties `object`: Map of project properties
    * retentionTillDate `string`: The date when the project is deleted permanently.
    * roles `object`: The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-3-role-post).
    * self `string`: The URL of the project details.
    * simplified `boolean`: Whether the project is simplified.
    * style `string` (values: classic, next-gen): The type of the project.
    * url `string`: A link to information about this project, such as project documentation.
    * uuid `string`: Unique ID for next-gen projects.
    * versions `array`: The versions defined in the project. For more information, see [Create version](#api-rest-api-3-version-post).
      * items [Version](#version)
  * role: The project role that the filter is shared with.  
    * actors `array`: The list of users who act in this role.
      * items [RoleActor](#roleactor)
    * admin `boolean`: Whether this role is the admin role for the project.
    * currentUserRole `boolean`: Whether the calling user is part of this role.
    * default `boolean`: Whether this role is the default role for the project
    * description `string`: The description of the project role.
    * id `integer`: The ID of the project role.
    * name `string`: The name of the project role.
    * roleConfigurable `boolean`: Whether the roles are configurable for this project.
    * scope: The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
      * project: The project the item has scope in.
        * avatarUrls: The URLs of the project's avatars.
          * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
          * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
          * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
          * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
        * id `string`: The ID of the project.
        * key `string`: The key of the project.
        * name `string`: The name of the project.
        * projectCategory: The category the project belongs to.
          * description `string`: The name of the project category.
          * id `string`: The ID of the project category.
          * name `string`: The description of the project category.
          * self `string`: The URL of the project category.
        * projectTypeKey `string` (values: software, service_desk, business): The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
        * self `string`: The URL of the project details.
        * simplified `boolean`: Whether or not the project is simplified.
      * type `string` (values: PROJECT, TEMPLATE): The type of scope.
    * self `string`: The URL the project role details.
    * translatedName `string`: The translated name of the project role.
  * type **required** `string` (values: group, project, projectRole, global, loggedin, authenticated, project-unknown): The type of share permission:

### SharePermissionInputBean
* SharePermissionInputBean `object`
  * groupname `string`: The name of the group to share the filter with. Set `type` to `group`.
  * projectId `string`: The ID of the project to share the filter with. Set `type` to `project`.
  * projectRoleId `string`: The ID of the project role to share the filter with. Set `type` to `projectRole` and the `projectId` for the project that the role is in.
  * type **required** `string` (values: project, group, projectRole, global, authenticated): The type of the share permission.Specify the type as follows:

### SimpleApplicationPropertyBean
* SimpleApplicationPropertyBean `object`
  * id `string`: The ID of the application property.
  * value `string`: The new value.

### SimpleErrorCollection
* SimpleErrorCollection `object`
  * errorMessages `array`: The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
    * items `string`
  * errors `object`: The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
  * httpStatusCode `integer`

### SimpleLink
* SimpleLink `object`: Details about the operations available in this version.
  * href `string`
  * iconClass `string`
  * id `string`
  * label `string`
  * styleClass `string`
  * title `string`
  * weight `integer`

### SimpleListWrapperApplicationRole
* SimpleListWrapperApplicationRole `object`
  * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
  * items `array`
    * items [ApplicationRole](#applicationrole)
  * max-results `integer`
  * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
  * size `integer`

### SimpleListWrapperGroupName
* SimpleListWrapperGroupName `object`
  * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
  * items `array`
    * items [GroupName](#groupname)
  * max-results `integer`
  * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
  * size `integer`

### Status
* Status `object`: The status of the item.
  * icon: Details of the icon representing the status. If not provided, no status icon displays in Jira.
    * link `string`: The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
    * title `string`: The title of the icon. This is used as follows:
    * url16x16 `string`: The URL of an icon that displays at 16x16 pixel in Jira.
  * resolved `boolean`: Whether the item is resolved. If set to "true", the link to the issue is displayed in a strikethrough font, otherwise the link displays in normal font.

### StatusCategory
* StatusCategory `object`: A status category.
  * colorName `string`: The name of the color used to represent the status category.
  * id `integer`: The ID of the status category.
  * key `string`: The key of the status category.
  * name `string`: The name of the status category.
  * self `string`: The URL of the status category.

### StatusDetails
* StatusDetails `object`: A status.
  * description `string`: The description of the status.
  * iconUrl `string`: The URL of the icon used to represent the status.
  * id `string`: The ID of the status.
  * name `string`: The name of the status.
  * self `string`: The URL of the status.
  * statusCategory: The category assigned to the status.
    * colorName `string`: The name of the color used to represent the status category.
    * id `integer`: The ID of the status category.
    * key `string`: The key of the status category.
    * name `string`: The name of the status category.
    * self `string`: The URL of the status category.

### SuggestedIssue
* SuggestedIssue `object`: An issue suggested for use in the issue picker auto-completion.
  * id `integer`: The ID of the issue.
  * img `string`: The URL of the issue type's avatar.
  * key `string`: The key of the issue.
  * keyHtml `string`: The key of the issue in HTML format.
  * summary `string`: The phrase containing the query string in HTML format, with the string highlighted with HTML bold tags.
  * summaryText `string`: The phrase containing the query string, as plain text.

### SystemAvatars
* SystemAvatars `object`: List of system avatars.
  * system `array`: A list of avatar details.
    * items [Avatar](#avatar)

### TaskProgressBeanObject
* TaskProgressBeanObject `object`: Details about a task.
  * description `string`: The description of the task.
  * elapsedRuntime **required** `integer`: The execution time of the task, in milliseconds.
  * finished `integer`: A timestamp recording when the task was finished.
  * id **required** `string`: The ID of the task.
  * lastUpdate **required** `integer`: A timestamp recording when the task progress was last updated.
  * message `string`: Information about the progress of the task.
  * progress **required** `integer`: The progress of the task, as a percentage complete.
  * self **required** `string`: The URL of the task.
  * started `integer`: A timestamp recording when the task was started.
  * status **required** `string` (values: ENQUEUED, RUNNING, COMPLETE, FAILED, CANCEL_REQUESTED, CANCELLED, DEAD): The status of the task.
  * submitted **required** `integer`: A timestamp recording when the task was submitted.
  * submittedBy **required** `integer`: The ID of the user who submitted the task.

### TaskProgressBeanRemoveOptionFromIssuesResult
* TaskProgressBeanRemoveOptionFromIssuesResult `object`: Details about a task.
  * description `string`: The description of the task.
  * elapsedRuntime **required** `integer`: The execution time of the task, in milliseconds.
  * finished `integer`: A timestamp recording when the task was finished.
  * id **required** `string`: The ID of the task.
  * lastUpdate **required** `integer`: A timestamp recording when the task progress was last updated.
  * message `string`: Information about the progress of the task.
  * progress **required** `integer`: The progress of the task, as a percentage complete.
  * result: The result of the task execution.
    * errors: A collection of errors related to unchanged issues. The collection size is limited, which means not all errors may be returned.
      * errorMessages `array`: The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
        * items `string`
      * errors `object`: The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
      * httpStatusCode `integer`
    * modifiedIssues `array`: The IDs of the modified issues.
      * items `integer`
    * unmodifiedIssues `array`: The IDs of the unchanged issues, those issues where errors prevent modification.
      * items `integer`
  * self **required** `string`: The URL of the task.
  * started `integer`: A timestamp recording when the task was started.
  * status **required** `string` (values: ENQUEUED, RUNNING, COMPLETE, FAILED, CANCEL_REQUESTED, CANCELLED, DEAD): The status of the task.
  * submitted **required** `integer`: A timestamp recording when the task was submitted.
  * submittedBy **required** `integer`: The ID of the user who submitted the task.

### TimeTrackingConfiguration
* TimeTrackingConfiguration `object`: Details of the time tracking configuration.
  * defaultUnit **required** `string` (values: minute, hour, day, week): The default unit of time applied to logged time.
  * timeFormat **required** `string` (values: pretty, days, hours): The format that will appear on an issue's *Time Spent* field.
  * workingDaysPerWeek **required** `number`: The number of days in a working week.
  * workingHoursPerDay **required** `number`: The number of hours in a working day.

### TimeTrackingDetails
* TimeTrackingDetails `object`: Time tracking details.
  * originalEstimate `string`: The original estimate of time needed for this issue in readable format.
  * originalEstimateSeconds `integer`: The original estimate of time needed for this issue in seconds.
  * remainingEstimate `string`: The remaining estimate of time needed for this issue in readable format.
  * remainingEstimateSeconds `integer`: The remaining estimate of time needed for this issue in seconds.
  * timeSpent `string`: Time worked on this issue in readable format.
  * timeSpentSeconds `integer`: Time worked on this issue in seconds.

### TimeTrackingProvider
* TimeTrackingProvider `object`: Details about the time tracking provider.
  * key **required** `string`: The key for the time tracking provider. For example, *JIRA*.
  * name `string`: The name of the time tracking provider. For example, *JIRA provided time tracking*.
  * url `string`: The URL of the configuration page for the time tracking provider app. For example, */example/config/url*. This property is only returned if the `adminPageKey` property is set in the module descriptor of the time tracking provider app.

### Transition
* Transition `object`: Details of a workflow transition.
  * description **required** `string`: The description of the transition.
  * from **required** `array`: The statuses the transition can start from.
    * items `string`: The statuses the transition can start from.
  * id **required** `string`: The ID of the transition.
  * name **required** `string`: The name of the transition.
  * rules [WorkflowRules](#workflowrules)
  * screen [ScreenID](#screenid)
  * to **required** `string`: The status the transition goes to.
  * type **required** `string` (values: global, initial, directed): The type of the transition.

### Transitions
* Transitions `object`: List of issue transitions.
  * expand `string`: Expand options that include additional transitions details in the response.
  * transitions `array`: List of issue transitions.
    * items [IssueTransition](#issuetransition)

### UnrestrictedUserEmail
* UnrestrictedUserEmail `object`
  * accountId `string`: The accountId of the user
  * email `string`: The email of the user

### UpdateCustomFieldOption
* UpdateCustomFieldOption `object`: Details of the options to update for a custom field.
  * options `array`: Details of the options to update.
    * items [RenamedOption](#renamedoption)

### UpdateDefaultScreenScheme
* UpdateDefaultScreenScheme `object`: The ID of a screen scheme.
  * screenSchemeId **required** `string`: The ID of the screen scheme.

### UpdateScreenDetails
* UpdateScreenDetails `object`: Details of a screen.
  * description `string`: The description of the screen. The maximum length is 255 characters.
  * name `string`: The name of the screen. The name must be unique. The maximum length is 255 characters.

### UpdateScreenSchemeDetails
* UpdateScreenSchemeDetails `object`: Details of a screen scheme.
  * description `string`: The description of the screen scheme. The maximum length is 255 characters.
  * name `string`: The name of the screen scheme. The name must be unique. The maximum length is 255 characters.
  * screens: The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted.
    * create `string`: The ID of the create screen. To remove the screen association, pass a null.
    * default `string`: The ID of the default screen. When specified, must include a screen ID as a default screen is required.
    * edit `string`: The ID of the edit screen. To remove the screen association, pass a null.
    * view `string`: The ID of the view screen. To remove the screen association, pass a null.

### UpdateScreenTypes
* UpdateScreenTypes `object`: The IDs of the screens for the screen types of the screen scheme.
  * create `string`: The ID of the create screen. To remove the screen association, pass a null.
  * default `string`: The ID of the default screen. When specified, must include a screen ID as a default screen is required.
  * edit `string`: The ID of the edit screen. To remove the screen association, pass a null.
  * view `string`: The ID of the view screen. To remove the screen association, pass a null.

### UpdateUserToGroupBean
* UpdateUserToGroupBean `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.

### UpdatedProjectCategory
* UpdatedProjectCategory `object`: A project category.
  * description `string`: The name of the project category.
  * id `string`: The ID of the project category.
  * name `string`: The description of the project category.
  * self `string`: The URL of the project category.

### User
* User `object`: A user with details as permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
  * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
  * active `boolean`: Whether the user is active.
  * applicationRoles: The application roles the user is assigned to.
    * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
    * items `array`
      * items [ApplicationRole](#applicationrole)
    * max-results `integer`
    * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
    * size `integer`
  * avatarUrls: The avatars of the user.
    * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
    * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
    * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
    * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
  * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
  * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
  * expand `string`: Expand options that include additional user details in the response.
  * groups: The groups that the user belongs to.
    * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
    * items `array`
      * items [GroupName](#groupname)
    * max-results `integer`
    * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
    * size `integer`
  * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
  * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * self `string`: The URL of the user.
  * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.

### UserBean
* UserBean `object`
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * active `boolean`: Whether the user is active.
  * avatarUrls: The avatars of the user.
    * 16x16 `string`: The URL of the user's 16x16 pixel avatar.
    * 24x24 `string`: The URL of the user's 24x24 pixel avatar.
    * 32x32 `string`: The URL of the user's 32x32 pixel avatar.
    * 48x48 `string`: The URL of the user's 48x48 pixel avatar.
  * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
  * key `string`: This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
  * name `string`: This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
  * self `string`: The URL of the user.

### UserBeanAvatarUrls
* UserBeanAvatarUrls `object`
  * 16x16 `string`: The URL of the user's 16x16 pixel avatar.
  * 24x24 `string`: The URL of the user's 24x24 pixel avatar.
  * 32x32 `string`: The URL of the user's 32x32 pixel avatar.
  * 48x48 `string`: The URL of the user's 48x48 pixel avatar.

### UserDetails
* UserDetails `object`: User details permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
  * active `boolean`: Whether the user is active.
  * avatarUrls: The avatars of the user.
    * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
    * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
    * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
    * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
  * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
  * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
  * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * self `string`: The URL of the user.
  * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.

### UserKey
* UserKey `object`: List of user account IDs.
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import.
  * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.

### UserList
* UserList `object`: A paginated list of users sharing the filter. This includes users that are members of the groups or can browse the projects that the filter is shared with.
  * end-index `integer`: The index of the last item returned on the page.
  * items `array`: The list of items.
    * items [User](#user)
  * max-results `integer`: The maximum number of results that could be on the page.
  * size `integer`: The number of items on the page.
  * start-index `integer`: The index of the first item returned on the page.

### UserMigrationBean
* UserMigrationBean `object`
  * accountId `string`
  * key `string`
  * username `string`

### UserPermission
* UserPermission `object`: Details of a permission and its availability to a user.
  * deprecatedKey `boolean`: Indicate whether the permission key is deprecated. Note that deprecated keys cannot be used in the `permissions parameter of Get my permissions. Deprecated keys are not returned by Get all permissions.`
  * description `string`: The description of the permission.
  * havePermission `boolean`: Whether the permission is available to the user in the queried context.
  * id `string`: The ID of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
  * key `string`: The key of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
  * name `string`: The name of the permission.
  * type `string` (values: GLOBAL, PROJECT): The type of the permission.

### UserPickerUser
* UserPickerUser `object`: A user found in a search.
  * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  * avatarUrl `string`: The avatar URL of the user.
  * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may be returned as null.
  * html `string`: The display name, email address, and key of the user with the matched query string highlighted with the HTML bold tag.
  * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.

### UserWriteBean
* UserWriteBean `object`
  * applicationKeys `array`: Deprecated, do not use.
    * items `string`
  * displayName **required** `string`: The display name for the user.
  * emailAddress **required** `string`: The email address for the user.
  * key `string`: The key for the user. When provided with `name`, overrides the value in `name` to set both `name` and `key`. This property is deprecated because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * name `string`: The username for the user. This property is deprecated because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  * notification `string`: Sends the user an email confirmation that they have been added to Jira. Default is `false`.
  * password `string`: A password for the user. If a password is not set, a random password is generated.
  * self `string`: The URL of the user.

### ValueOperand
* ValueOperand `object`: An operand that is a user-provided value.
  * value **required** `string`: The operand value.

### Version
* Version `object`: Details about a project version.
  * archived `boolean`: Indicates that the version is archived. Optional when creating or updating a version.
  * description `string`: The description of the version. Optional when creating or updating a version.
  * expand `string`: Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:
  * id `string`: The ID of the version.
  * issuesStatusForFixVersion: If the expand option `issuesstatus` is used, returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.
    * done `integer`: Count of issues with status *done*.
    * inProgress `integer`: Count of issues with status *in progress*.
    * toDo `integer`: Count of issues with status *to do*.
    * unmapped `integer`: Count of issues with a status other than *to do*, *in progress*, and *done*.
  * moveUnfixedIssuesTo `string`: The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
  * name `string`: The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters.
  * operations `array`: If the expand option `operations` is used, returns the list of operations available for this version.
    * items [SimpleLink](#simplelink)
  * overdue `boolean`: Indicates that the version is overdue.
  * project `string`: Deprecated. Use `projectId`.
  * projectId `integer`: The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
  * releaseDate `string`: The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
  * released `boolean`: Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
  * self `string`: The URL of the version.
  * startDate `string`: The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
  * userReleaseDate `string`: The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format.
  * userStartDate `string`: The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format.

### VersionIssueCounts
* VersionIssueCounts `object`: Various counts of issues within a version.
  * customFieldUsage `array`: List of custom fields using the version.
    * items [VersionUsageInCustomField](#versionusageincustomfield)
  * issueCountWithCustomFieldsShowingVersion `integer`: Count of issues where a version custom field is set to the version.
  * issuesAffectedCount `integer`: Count of issues where the `affectedVersion` is set to the version.
  * issuesFixedCount `integer`: Count of issues where the `fixVersion` is set to the version.
  * self `string`: The URL of these count details.

### VersionIssuesStatus
* VersionIssuesStatus `object`: Counts of the number of issues in various statuses.
  * done `integer`: Count of issues with status *done*.
  * inProgress `integer`: Count of issues with status *in progress*.
  * toDo `integer`: Count of issues with status *to do*.
  * unmapped `integer`: Count of issues with a status other than *to do*, *in progress*, and *done*.

### VersionMoveBean
* VersionMoveBean `object`
  * after `string`: The URL (self link) of the version after which to place the moved version. Cannot be used with `position`.
  * position `string` (values: Earlier, Later, First, Last): An absolute position in which to place the moved version. Cannot be used with `after`.

### VersionUnresolvedIssuesCount
* VersionUnresolvedIssuesCount `object`: Count of a version's unresolved issues.
  * issuesCount `integer`: Count of issues.
  * issuesUnresolvedCount `integer`: Count of unresolved issues.
  * self `string`: The URL of these count details.

### VersionUsageInCustomField
* VersionUsageInCustomField `object`: List of custom fields using the version.
  * customFieldId `integer`: The ID of the custom field.
  * fieldName `string`: The name of the custom field.
  * issueCountWithVersionInCustomField `integer`: Count of the issues where the custom field contains the version.

### Visibility
* Visibility `object`: The group or role to which this item is visible.
  * type `string` (values: group, role): Whether visibility of this item is restricted to a group or role.
  * value `string`: The name of the group or role to which visibility of this item is restricted.

### Votes
* Votes `object`: The details of votes on an issue.
  * hasVoted `boolean`: Whether the user making this request has voted on the issue.
  * self `string`: The URL of these issue vote details.
  * voters `array`: List of the users who have voted on this issue. An empty list is returned when the calling user doesn't have the *View voters and watchers* project permission.
    * items [User](#user)
  * votes `integer`: The number of votes on the issue.

### Watchers
* Watchers `object`: The details of watchers on an issue.
  * isWatching `boolean`: Whether the calling user is watching this issue.
  * self `string`: The URL of these issue watcher details.
  * watchCount `integer`: The number of users watching this issue.
  * watchers `array`: Details of the users watching this issue.
    * items [UserDetails](#userdetails)

### Webhook
* Webhook `object`: A webhook.
  * events **required** `array`: The Jira events that trigger the webhook.
    * items `string` (values: jira:issue_created, jira:issue_updated, jira:issue_deleted, comment_created, comment_updated, comment_deleted, issue_property_set, issue_property_deleted)
  * expirationDate **required** `integer`
  * id **required** `integer`: The ID of the webhook.
  * jqlFilter **required** `string`: The JQL filter that specifies which issues the webhook is sent for.

### WebhookDetails
* WebhookDetails `object`: A list of webhooks.
  * events **required** `array`: The Jira events that trigger the webhook.
    * items `string` (values: jira:issue_created, jira:issue_updated, jira:issue_deleted, comment_created, comment_updated, comment_deleted, issue_property_set, issue_property_deleted)
  * jqlFilter **required** `string`: The JQL filter that specifies which issues the webhook is sent for. Only a subset of JQL can be used. The supported elements are:

### WebhookRegistrationDetails
* WebhookRegistrationDetails `object`: Details of webhooks to register.
  * url **required** `string`: The URL that specifies where to send the webhooks. This URL must use the same base URL as the Connect app.
  * webhooks **required** `array`: A list of webhooks.
    * items [WebhookDetails](#webhookdetails)

### WebhooksExpirationDate
* WebhooksExpirationDate `object`: The date the newly refreshed webhooks expire.
  * expirationDate **required** `integer`

### Workflow
* Workflow `object`: Details about a workflow.
  * description **required** `string`: The description of the workflow.
  * id **required** [PublishedWorkflowId](#publishedworkflowid)
  * statuses `array`: The statuses of the workflow.
    * items [WorkflowStatus](#workflowstatus)
  * transitions `array`: The transitions of the workflow.
    * items [Transition](#transition)

### WorkflowId
* WorkflowId `object`: Properties that identify a workflow.
  * draft **required** `boolean`: Whether the workflow is in the draft state.
  * name **required** `string`: The name of the workflow.

### WorkflowRules
* WorkflowRules `object`: A collection of transition rules.
  * conditions **required** `array`: The workflow conditions.
    * items [WorkflowTransitionRule](#workflowtransitionrule)
  * postFunctions **required** `array`: The workflow post functions.
    * items [WorkflowTransitionRule](#workflowtransitionrule)
  * validators **required** `array`: The workflow validators.
    * items [WorkflowTransitionRule](#workflowtransitionrule)

### WorkflowScheme
* WorkflowScheme `object`: Details about a workflow scheme.
  * defaultWorkflow `string`: The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.
  * description `string`: The description of the workflow scheme.
  * draft `boolean`: Whether the workflow scheme is a draft or not.
  * id `integer`: The ID of the workflow scheme.
  * issueTypeMappings `object`: The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
  * issueTypes `object`: The issue types available in Jira.
  * lastModified `string`: The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
  * lastModifiedUser: The user that last modified the draft workflow scheme. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
    * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
    * active `boolean`: Whether the user is active.
    * applicationRoles: The application roles the user is assigned to.
      * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * items `array`
        * items [ApplicationRole](#applicationrole)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
      * size `integer`
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * expand `string`: Expand options that include additional user details in the response.
    * groups: The groups that the user belongs to.
      * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * items `array`
        * items [GroupName](#groupname)
      * max-results `integer`
      * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
      * size `integer`
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * name `string`: The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.
  * originalDefaultWorkflow `string`: For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira.
  * originalIssueTypeMappings `object`: For draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
  * self `string`
  * updateDraftIfNeeded `boolean`: Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:

### WorkflowSchemeAssociations
* WorkflowSchemeAssociations `object`: A workflow scheme along with a list of projects that use it.
  * projectIds **required** `array`: The list of projects that use the workflow scheme.
    * items `string`
  * workflowScheme **required**: The workflow scheme.
    * defaultWorkflow `string`: The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.
    * description `string`: The description of the workflow scheme.
    * draft `boolean`: Whether the workflow scheme is a draft or not.
    * id `integer`: The ID of the workflow scheme.
    * issueTypeMappings `object`: The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
    * issueTypes `object`: The issue types available in Jira.
    * lastModified `string`: The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
    * lastModifiedUser: The user that last modified the draft workflow scheme. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
      * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
      * accountType `string` (values: atlassian, app, customer, unknown): The user account type. Can take the following values:
      * active `boolean`: Whether the user is active.
      * applicationRoles: The application roles the user is assigned to.
        * callback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
        * items `array`
          * items [ApplicationRole](#applicationrole)
        * max-results `integer`
        * pagingCallback [ListWrapperCallbackApplicationRole](#listwrappercallbackapplicationrole)
        * size `integer`
      * avatarUrls: The avatars of the user.
        * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
        * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
        * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
        * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
      * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
      * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
      * expand `string`: Expand options that include additional user details in the response.
      * groups: The groups that the user belongs to.
        * callback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
        * items `array`
          * items [GroupName](#groupname)
        * max-results `integer`
        * pagingCallback [ListWrapperCallbackGroupName](#listwrappercallbackgroupname)
        * size `integer`
      * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
      * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      * self `string`: The URL of the user.
      * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.
    * originalDefaultWorkflow `string`: For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira.
    * originalIssueTypeMappings `object`: For draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
    * self `string`
    * updateDraftIfNeeded `boolean`: Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:

### WorkflowSchemeProjectAssociation
* WorkflowSchemeProjectAssociation `object`: An associated workflow scheme and project.
  * projectId **required** `string`: The ID of the project.
  * workflowSchemeId **required** `string`: The ID of the workflow scheme.

### WorkflowStatus
* WorkflowStatus `object`: Details of a workflow status.
  * id **required** `string`: The ID of the issue status.
  * name **required** `string`: The name of the status in the workflow.
  * properties [WorkflowStatusProperties](#workflowstatusproperties)

### WorkflowStatusProperties
* WorkflowStatusProperties `object`: Properties of a workflow status.
  * issueEditable **required** `boolean`: Whether issues are editable in this status.

### WorkflowTransition
* WorkflowTransition `object`: A workflow transition.
  * id **required** `integer`: The transition ID.
  * name **required** `string`: The transition name.

### WorkflowTransitionProperty
* WorkflowTransitionProperty `object`: Details about the server Jira is running on.
  * id `string`: The ID of the transition property.
  * key `string`: The key of the transition property. Also known as the name of the transition property.
  * value **required** `string`: The value of the transition property.

### WorkflowTransitionRule
* WorkflowTransitionRule `object`: A workflow transition rule.
  * type **required** `string`: The type of the transition rule.

### WorkflowTransitionRules
* WorkflowTransitionRules `object`: A workflow with transition rules.
  * conditions **required** `array`: The list of conditions within the workflow.
    * items [ConnectWorkflowTransitionRule](#connectworkflowtransitionrule)
  * postFunctions **required** `array`: The list of post functions within the workflow.
    * items [ConnectWorkflowTransitionRule](#connectworkflowtransitionrule)
  * validators **required** `array`: The list of validators within the workflow.
    * items [ConnectWorkflowTransitionRule](#connectworkflowtransitionrule)
  * workflowId **required** [WorkflowId](#workflowid)

### WorkflowTransitionRulesUpdate
* WorkflowTransitionRulesUpdate `object`: Details about a workflow configuration update request.
  * workflows **required** `array`: The list of workflows with transition rules to update.
    * items [WorkflowTransitionRules](#workflowtransitionrules)

### WorkflowTransitionRulesUpdateErrorDetails
* WorkflowTransitionRulesUpdateErrorDetails `object`: Details of any errors encountered while updating workflow transition rules for a workflow.
  * ruleUpdateErrors **required** `object`: A list of transition rule update errors, indexed by the transition rule ID. Any transition rule that appears here wasn't updated.
  * updateErrors **required** `array`: The list of errors that specify why the workflow update failed. The workflow was not updated if the list contains any entries.
    * items `string`: An error specifying why the workflow update failed.
  * workflowId **required** [WorkflowId](#workflowid)

### WorkflowTransitionRulesUpdateErrors
* WorkflowTransitionRulesUpdateErrors `object`: Details of any errors encountered while updating workflow transition rules.
  * updateResults **required** `array`: A list of workflows.
    * items [WorkflowTransitionRulesUpdateErrorDetails](#workflowtransitionrulesupdateerrordetails)

### Worklog
* Worklog `object`: Details of a worklog.
  * author: Details of the user who created the worklog.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
    * active `boolean`: Whether the user is active.
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
  * created `string`: The datetime on which the worklog was created.
  * id `string`: The ID of the worklog record.
  * issueId `string`: The ID of the issue this worklog is for.
  * properties `array`: Details of properties for the worklog. Optional when creating or updating a worklog.
    * items [EntityProperty](#entityproperty)
  * self `string`: The URL of the worklog item.
  * started `string`: The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.
  * timeSpent `string`: The time spent working on the issue as days (\#d), hours (\#h), or minutes (\#m or \#). Required when creating a worklog if `timeSpentSeconds` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpentSecond` is provided.
  * timeSpentSeconds `integer`: The time in seconds spent working on the issue. Required when creating a worklog if `timeSpent` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpent` is provided.
  * updateAuthor: Details of the user who last updated the worklog.
    * accountId `string`: The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    * accountType `string`: The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
    * active `boolean`: Whether the user is active.
    * avatarUrls: The avatars of the user.
      * 16x16 `string`: The URL of the item's 16x16 pixel avatar.
      * 24x24 `string`: The URL of the item's 24x24 pixel avatar.
      * 32x32 `string`: The URL of the item's 32x32 pixel avatar.
      * 48x48 `string`: The URL of the item's 48x48 pixel avatar.
    * displayName `string`: The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
    * key `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * name `string`: This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * self `string`: The URL of the user.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
  * updated `string`: The datetime on which the worklog was last updated.
  * visibility: Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog.
    * type `string` (values: group, role): Whether visibility of this item is restricted to a group or role.
    * value `string`: The name of the group or role to which visibility of this item is restricted.

### WorklogIdsRequestBean
* WorklogIdsRequestBean `object`
  * ids **required** `array`: A list of worklog IDs.
    * items `integer`


