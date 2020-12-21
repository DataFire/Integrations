# @datafire/jira

Client library for Jira

## Installation and Usage
```bash
npm install --save @datafire/jira
```
```js
let jira = require('@datafire/jira').create({
  username: "",
  password: "",
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

The Jira Cloud Platform REST API

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
jira.oauthCallback({
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
jira.oauthRefresh(null, context)
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

### application_properties.get
Returns all application properties or a single application property.


```js
jira.application_properties.get({}, context)
```

#### Input
* input `object`
  * key `string`: The key of the application property.
  * keyFilter `string`: When a key isn't provided, this filters the list of results by the application property key using a regular expression. For example, using jira.lf.* will return all application properties with keys that start with jira.lf..
  * permissionLevel `string`: The permission level of all items being returned in the list.

#### Output
* output `array`
  * items `object`
    * defaultValue **required** `string`
    * desc **required** `string`
    * id **required** `string`
    * key **required** `string`
    * name **required** `string`
    * type **required** `string`
    * value **required** `string`

### application_properties.id.put
Changes the value of an application property. For example, you can change the value of the jira.clone.prefix from its default value of CLONE - to Clone - if you prefer sentence case capitalization. Editable properties are described below along with their default values.


```js
jira.application_properties.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * id `string`: The ID of the application property, for example jira.newsletter.tip.delay.days.
    * value `string`: The new value, for example -1.
  * id **required** `string`: The key of the application property to update.

#### Output
*Output schema unknown*

### application_properties.advanced_settings.get
Returns the application properties that are accessible on the Advanced Settings page. To navigate to the Advanced Settings page in Jira, choose the Jira icon > Jira settings > System, General Configuration and then click Advanced Settings (in the upper right).


```js
jira.application_properties.advanced_settings.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * defaultValue **required** `string`
    * desc **required** `string`
    * id **required** `string`
    * key **required** `string`
    * name **required** `string`
    * type **required** `string`
    * value **required** `string`

### applicationrole.get
Returns all application roles. In Jira, application roles are managed using the Application access configuration page.


```js
jira.applicationrole.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * defaultGroups **required** `array`
      * items `object`
    * defined **required** `boolean`
    * groups **required** `array`
      * items `object`
    * hasUnlimitedSeats **required** `boolean`
    * key **required** `string`
    * name **required** `string`
    * numberOfSeats **required** `number`
    * platform **required** `boolean`
    * remainingSeats **required** `number`
    * selectedByDefault **required** `boolean`
    * userCount **required** `number`
    * userCountDescription **required** `string`

### applicationrole.key.get
Returns an application role.


```js
jira.applicationrole.key.get({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The key of the application role. Use the Get all application roles method to get the key for each application role.

#### Output
* output `object`
  * defaultGroups **required** `array`
    * items `object`
  * defined **required** `boolean`
  * groups **required** `array`
    * items `object`
  * hasUnlimitedSeats **required** `boolean`
  * key **required** `string`
  * name **required** `string`
  * numberOfSeats **required** `number`
  * platform **required** `boolean`
  * remainingSeats **required** `number`
  * selectedByDefault **required** `boolean`
  * userCount **required** `number`
  * userCountDescription **required** `string`

### attachment.id.delete
Deletes an attachment from an issue.


```js
jira.attachment.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the attachment.

#### Output
*Output schema unknown*

### attachment.id.get
Returns the metadata for an attachment. Note that the attachment itself is not returned.


```js
jira.attachment.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the attachment.

#### Output
* output `object`
  * author **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * content **required** `string`
  * created **required** `string`
  * filename **required** `string`
  * id **required** `number`
  * mimeType **required** `string`
  * self **required** `string`
  * size **required** `number`
  * thumbnail **required** `string`

### attachment.id.expand.human.get
Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.


```js
jira.attachment.id.expand.human.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the attachment.

#### Output
* output `object`
  * entries **required** `array`
    * items `object`
      * index **required** `number`
      * label **required** `string`
      * mediaType **required** `string`
      * path **required** `string`
      * size **required** `string`
  * id **required** `number`
  * mediaType **required** `string`
  * name **required** `string`
  * totalEntryCount **required** `number`

### attachment.id.expand.raw.get
Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.


```js
jira.attachment.id.expand.raw.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the attachment.

#### Output
* output `object`
  * entries **required** `array`
    * items `object`
      * entryIndex **required** `number`
      * mediaType **required** `string`
      * name **required** `string`
      * size **required** `number`
  * totalEntryCount **required** `number`

### attachment.meta.get
Returns the global attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.


```js
jira.attachment.meta.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * enabled **required** `boolean`
  * uploadLimit **required** `number`

### auditing.record.get
Returns a list of audit records. The list can be filtered to include items:


```js
jira.auditing.record.get({}, context)
```

#### Input
* input `object`
  * filter `string`: The query string.
  * from `string`: The date and time on or after which returned audit records must have been created. If to is provided from must be before to or the result set will be empty.
  * limit `integer`: The maximum number of results to return. The maximum is 1000.
  * offset `integer`: The number of records to skip before returning the first result.
  * to `string`: The date and time on or before which returned audit results must have been created. If from is provided to must be after from or the result set will be empty.

#### Output
* output `object`
  * limit **required** `number`
  * offset **required** `number`
  * records **required** `array`
    * items `object`
      * associatedItems `array`
        * items `object`
          * id **required** `string`
          * name **required** `string`
          * parentId **required** `string`
          * parentName **required** `string`
          * typeName **required** `string`
      * authorKey **required** `string`
      * category **required** `string`
      * changedValues `array`
        * items `object`
          * changedFrom **required** `string`
          * changedTo **required** `string`
          * fieldName **required** `string`
      * created **required** `string`
      * description **required** `string`
      * eventSource **required** `string`
      * id **required** `number`
      * objectItem `object`
        * id **required** `string`
        * name **required** `string`
        * parentId **required** `string`
        * parentName **required** `string`
        * typeName **required** `string`
      * remoteAddress **required** `string`
      * summary **required** `string`
  * total **required** `number`

### avatar.type.system.get
Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.


```js
jira.avatar.type.system.get({
  "type": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`: The avatar type.

#### Output
* output `object`
  * system **required** `array`
    * items `object`
      * id **required** `string`
      * isDeletable **required** `boolean`
      * isSelected **required** `boolean`
      * isSystemAvatar **required** `boolean`
      * urls `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`

### comment.commentId.properties.get
Returns the keys of all the properties of a comment.


```js
jira.comment.commentId.properties.get({
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: The ID of the comment.

#### Output
* output `object`
  * keys **required** `array`
    * items `object`
      * key **required** `string`
      * self **required** `string`

### comment.commentId.properties.propertyKey.delete
Deletes a comment property.


```js
jira.comment.commentId.properties.propertyKey.delete({
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

### comment.commentId.properties.propertyKey.get
Returns the value of a comment property.


```js
jira.comment.commentId.properties.propertyKey.get({
  "commentId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: The ID of the comment.
  * propertyKey **required** `string`: The key of the property.

#### Output
* output `object`
  * key **required** `string`
  * value **required** `object`
    * stride.conversation.id **required** `string`
    * support.time **required** `string`

### comment.commentId.properties.propertyKey.put
Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.


```js
jira.comment.commentId.properties.propertyKey.put({
  "commentId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: The ID of the comment.
  * propertyKey **required** `string`: The key of the property. The maximum length is 255 characters.

#### Output
*Output schema unknown*

### comment.list.post
Returns the comments for a list of comment IDs.


```js
jira.comment.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * ids `array`: The list of comment IDs. Maximum of 1000 IDs can be specified. Required
      * items `integer`
  * expand `string` (values: renderedBody, properties): Use expand to include additional information about comments in the response. This parameter accepts multiple values separated by a comma:

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * author `object`
        * active **required** `boolean`
        * displayName **required** `string`
        * name **required** `string`
        * self **required** `string`
      * body `object`
        * content **required** `array`
          * items `object`
        * type **required** `string`
        * version **required** `number`
      * created **required** `string`
      * id **required** `string`
      * self **required** `string`
      * updateAuthor `object`
        * active **required** `boolean`
        * displayName **required** `string`
        * name **required** `string`
        * self **required** `string`
      * updated **required** `string`
      * visibility `object`
        * type **required** `string`
        * value **required** `string`

### component.post
Creates a component. Use components to provide containers for issues within a project. Permissions required: Any of the following:


```js
jira.component.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * assignee `object`: A user.
    * assigneeType `string` (values: PROJECT_DEFAULT, COMPONENT_LEAD, PROJECT_LEAD, UNASSIGNED): The nominal user type used to determine the assignee for issues created with this component. See realAssigneeType for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:
    * description `string`: The description for the component. Optional when creating or updating a component.
    * lead `object`: A user.
    * leadAccountId `string`: The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.Optional when creating or updating a component.
    * leadUserName `string`: This property has been deprecated in favour of leadAccountId due to privacy changes. See the migration guide for details.The username of the component's lead user. Optional when creating or updating a component.
    * name `string`: The unique name for the component in the project. Required when creating a component. Optional when updating a component. Maximum length 255 chars.
    * project `string`: The key of the project to which the component is assigned. Required when creating a component. Can't be updated.
    * projectId `integer`: Not used.
    * realAssignee `object`: A user.

#### Output
* output `object`
  * assignee **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * assigneeType **required** `string`
  * description **required** `string`
  * id **required** `string`
  * isAssigneeTypeValid **required** `boolean`
  * lead **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * name **required** `string`
  * project **required** `string`
  * projectId **required** `number`
  * realAssignee **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * realAssigneeType **required** `string`
  * self **required** `string`

### component.id.delete
Deletes a component. Permissions required: Any of the following:


```js
jira.component.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the component.
  * moveIssuesTo `string`: The ID of the component to replace the deleted component. If this value is null no replacement is made.

#### Output
*Output schema unknown*

### component.id.get
Returns a component. Permissions required: Browse projects project permission.


```js
jira.component.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the component.

#### Output
* output `object`
  * assignee **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * assigneeType **required** `string`
  * description **required** `string`
  * id **required** `string`
  * isAssigneeTypeValid **required** `boolean`
  * lead **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * name **required** `string`
  * project **required** `string`
  * projectId **required** `number`
  * realAssignee **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * realAssigneeType **required** `string`
  * self **required** `string`

### component.id.put
Modifies a component. Any fields included in the request are overwritten. If leadUserName is an empty string ("") the component lead is removed. Permissions required: Any of the following:


```js
jira.component.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * assignee `object`: A user.
    * assigneeType `string` (values: PROJECT_DEFAULT, COMPONENT_LEAD, PROJECT_LEAD, UNASSIGNED): The nominal user type used to determine the assignee for issues created with this component. See realAssigneeType for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:
    * description `string`: The description for the component. Optional when creating or updating a component.
    * lead `object`: A user.
    * leadAccountId `string`: The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.Optional when creating or updating a component.
    * leadUserName `string`: This property has been deprecated in favour of leadAccountId due to privacy changes. See the migration guide for details.The username of the component's lead user. Optional when creating or updating a component.
    * name `string`: The unique name for the component in the project. Required when creating a component. Optional when updating a component. Maximum length 255 chars.
    * project `string`: The key of the project to which the component is assigned. Required when creating a component. Can't be updated.
    * projectId `integer`: Not used.
    * realAssignee `object`: A user.
  * id **required** `string`

#### Output
*Output schema unknown*

### component.id.relatedIssueCounts.get
Returns the counts of issues assigned to the component. Permissions required: Permission to access Jira.


```js
jira.component.id.relatedIssueCounts.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the component.

#### Output
* output `object`
  * issueCount **required** `number`
  * self **required** `string`

### configuration.get
Returns the global settings in Jira. These settings determine whether optional features (for example, sub-tasks, time tracking, and others) are enabled. If time tracking is enabled, this method also returns the time tracking configuration.


```js
jira.configuration.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * attachmentsEnabled **required** `boolean`
  * issueLinkingEnabled **required** `boolean`
  * subTasksEnabled **required** `boolean`
  * timeTrackingConfiguration **required** `object`
    * defaultUnit **required** `string`
    * timeFormat **required** `string`
    * workingDaysPerWeek **required** `number`
    * workingHoursPerDay **required** `number`
  * timeTrackingEnabled **required** `boolean`
  * unassignedIssuesAllowed **required** `boolean`
  * votingEnabled **required** `boolean`
  * watchingEnabled **required** `boolean`

### configuration.timetracking.delete
Disables time tracking.


```js
jira.configuration.timetracking.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### configuration.timetracking.get
Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.


```js
jira.configuration.timetracking.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * key **required** `string`
  * name **required** `string`
  * url **required** `string`

### configuration.timetracking.put
Selects a time tracking provider.


```js
jira.configuration.timetracking.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * key `string`: The key for the time tracking provider (for example, JIRA).
    * name `string`: The name of the time tracking provider (for example, JIRA provided time tracking).

#### Output
*Output schema unknown*

### configuration.timetracking.list.get
Returns all time tracking providers. By default, Jira only has one time tracking provider: JIRA provided time tracking. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the Time Tracking Provider module.


```js
jira.configuration.timetracking.list.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * key **required** `string`
    * name **required** `string`
    * url **required** `string`

### configuration.timetracking.options.get
Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see Configuring time tracking.


```js
jira.configuration.timetracking.options.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * defaultUnit **required** `string`
  * timeFormat **required** `string`
  * workingDaysPerWeek **required** `number`
  * workingHoursPerDay **required** `number`

### configuration.timetracking.options.put
Sets the time tracking settings.


```js
jira.configuration.timetracking.options.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * defaultUnit `string` (values: minute, hour, day, week): The unit of time that will be applied to logged time by default.
    * timeFormat `string` (values: pretty, days, hours): The format that will appear on an issue's Time Spent field.
    * workingDaysPerWeek `number`: The number of days in a working week (for example, 5.5). This value is specified in days.
    * workingHoursPerDay `number`: The number of hours in a working day (for example, 7.6). This value is specified in hours.

#### Output
* output `object`
  * defaultUnit **required** `string`
  * timeFormat **required** `string`
  * workingDaysPerWeek **required** `number`
  * workingHoursPerDay **required** `number`

### customFieldOption.id.get
Returns a custom field option. For example, an option in a cascading select list.


```js
jira.customFieldOption.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the custom field option. To find this ID, configure the custom field and edit its options in Jira. Click the option and its ID will show in the URL as the selectedParentOptionId parameter.

#### Output
* output `object`
  * self **required** `string`
  * value **required** `string`

### dashboard.get
Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.


```js
jira.dashboard.get({}, context)
```

#### Input
* input `object`
  * filter `string` (values: favourite, my): The filter applied to the list of dashboards. Valid values are:
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 1000.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).

#### Output
* output `object`
  * dashboards **required** `array`
    * items `object`
      * id **required** `string`
      * isFavourite **required** `boolean`
      * name **required** `string`
      * owner `object`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * popularity **required** `number`
      * self **required** `string`
      * sharePermissions `array`
        * items `object`
          * group `object`
          * id **required** `number`
          * type **required** `string`
      * view **required** `string`
  * maxResults **required** `number`
  * next **required** `string`
  * prev **required** `string`
  * startAt **required** `number`
  * total **required** `number`

### dashboard.dashboardId.items.itemId.properties.get
Returns the keys of all properties for a dashboard item.


```js
jira.dashboard.dashboardId.items.itemId.properties.get({
  "dashboardId": "",
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * dashboardId **required** `string`: The ID of the dashboard.
  * itemId **required** `string`: The ID of the dashboard item.

#### Output
* output `object`
  * keys **required** `array`
    * items `object`
      * key **required** `string`
      * self **required** `string`

### dashboard.dashboardId.items.itemId.properties.propertyKey.delete
Deletes a dashboard item property.


```js
jira.dashboard.dashboardId.items.itemId.properties.propertyKey.delete({
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

### dashboard.dashboardId.items.itemId.properties.propertyKey.get
Returns the key and value of a dashboard item property.


```js
jira.dashboard.dashboardId.items.itemId.properties.propertyKey.get({
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
* output `object`
  * key **required** `string`
  * value **required** `object`
    * stride.conversation.id **required** `string`
    * support.time **required** `string`

### dashboard.dashboardId.items.itemId.properties.propertyKey.put
Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.


```js
jira.dashboard.dashboardId.items.itemId.properties.propertyKey.put({
  "dashboardId": "",
  "itemId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * dashboardId **required** `string`: The ID of the dashboard.
  * itemId **required** `string`: The ID of the dashboard item.
  * propertyKey **required** `string`: The key of the dashboard item property. The maximum length of the key is 255 bytes.

#### Output
*Output schema unknown*

### dashboard.id.get
Returns a dashboard.


```js
jira.dashboard.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the dashboard.

#### Output
* output `object`
  * id **required** `string`
  * isFavourite **required** `boolean`
  * name **required** `string`
  * popularity **required** `number`
  * self **required** `string`
  * sharePermissions **required** `array`
    * items `object`
      * type **required** `string`
  * view **required** `string`

### expression.eval.post
Evaluates a Jira expression and returns its value.


```js
jira.expression.eval.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * context `object`
    * expression `string`: The Jira expression to evaluate.
  * expand `string` (values: meta.complexity): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:

#### Output
* output `object`
  * meta **required** `object`
    * complexity **required** `object`
      * beans **required** `object`
        * limit **required** `number`
        * value **required** `number`
      * expensiveOperations **required** `object`
        * limit **required** `number`
        * value **required** `number`
      * primitiveValues **required** `object`
        * limit **required** `number`
        * value **required** `number`
      * steps **required** `object`
        * limit **required** `number`
        * value **required** `number`
  * value **required** `string`

### field.get
Returns all issue fields in Jira, both system and custom fields.


```js
jira.field.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * clauseNames **required** `array`
      * items `object`
    * custom **required** `boolean`
    * id **required** `string`
    * key **required** `string`
    * name **required** `string`
    * navigable **required** `boolean`
    * orderable **required** `boolean`
    * schema **required** `object`
      * system **required** `string`
      * type **required** `string`
    * searchable **required** `boolean`

### field.post
Creates a custom field.


```js
jira.field.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: The description of the custom field, which is displayed in the UI.
    * name `string`: The name of the custom field, which is displayed in the UI. This is not the unique identifier.
    * searcherKey `string` (values: com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher, com.atlassian.jira.plugin.system.customfieldtypes:daterange, com.atlassian.jira.plugin.system.customfieldtypes:datetimerange, com.atlassian.jira.plugin.system.customfieldtypes:exactnumber, com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher, com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher, com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher, com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher, com.atlassian.jira.plugin.system.customfieldtypes:numberrange, com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher): The searcher defines the way the field is searched in Jira. For example, com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher.The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):
    * type `string` (values: com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect, com.atlassian.jira.plugin.system.customfieldtypes:datepicker, com.atlassian.jira.plugin.system.customfieldtypes:datetime, com.atlassian.jira.plugin.system.customfieldtypes:float, com.atlassian.jira.plugin.system.customfieldtypes:grouppicker, com.atlassian.jira.plugin.system.customfieldtypes:importid, com.atlassian.jira.plugin.system.customfieldtypes:labels, com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes, com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker, com.atlassian.jira.plugin.system.customfieldtypes:multiselect): The type of the custom field. For example, com.atlassian.jira.plugin.system.customfieldtypes:grouppicker.

#### Output
* output `object`
  * clauseNames **required** `array`
    * items `object`
  * custom **required** `boolean`
  * id **required** `string`
  * name **required** `string`
  * navigable **required** `boolean`
  * orderable **required** `boolean`
  * schema **required** `object`
    * custom **required** `string`
    * customId **required** `number`
    * type **required** `string`
  * searchable **required** `boolean`

### field.fieldKey.option.get
Returns all options defined for a select list issue field. A select list issue field is a type of issue field that allows a user to select an value from a list of options.


```js
jira.field.fieldKey.option.get({
  "fieldKey": ""
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
  * maxResults `integer`: The maximum number of items to return per page. For example, 20.
  * startAt `integer`: The starting index of the returned objects. For example, 1.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * nextPage **required** `string`
  * self **required** `string`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * config `object`
        * attributes **required** `array`
          * items `object`
        * scope **required** `object`
          * global **required** `object`
          * projects **required** `array`
          * projects2 **required** `array`
      * id **required** `number`
      * properties `object`
        * description **required** `string`
        * founded **required** `string`
        * leader **required** `object`
          * email **required** `string`
          * name **required** `string`
        * members **required** `number`
      * value **required** `string`

### field.fieldKey.option.post
Creates an option for a select list issue field.


```js
jira.field.fieldKey.option.post({
  "fieldKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * config `object`
    * properties `object`: The properties can be any arbitrary key value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module.
    * value `string`: The option's name, which is displayed in the UI.
  * fieldKey **required** `string`

#### Output
* output `object`
  * config **required** `object`
    * attributes **required** `array`
      * items `object`
    * scope **required** `object`
      * global **required** `object`
      * projects **required** `array`
        * items `object`
      * projects2 **required** `array`
        * items `object`
          * attributes `array`
          * id **required** `number`
  * properties **required** `object`
    * description **required** `string`
    * founded **required** `string`
    * leader **required** `object`
      * email **required** `string`
      * name **required** `string`
    * members **required** `number`
  * value **required** `string`

### field.fieldKey.option.optionId.delete
Deletes an option from a select list issue field.


```js
jira.field.fieldKey.option.optionId.delete({
  "fieldKey": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
  * optionId **required** `integer`: The ID of the option to be deleted. For example, 3.

#### Output
*Output schema unknown*

### field.fieldKey.option.optionId.get
Returns an option from a select list issue field.


```js
jira.field.fieldKey.option.optionId.get({
  "fieldKey": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
  * optionId **required** `integer`: The ID of the option to be returned. For example, 3.

#### Output
* output `object`
  * config **required** `object`
    * attributes **required** `array`
      * items `object`
    * scope **required** `object`
      * global **required** `object`
      * projects **required** `array`
        * items `object`
      * projects2 **required** `array`
        * items `object`
          * attributes `array`
          * id **required** `number`
  * id **required** `number`
  * properties **required** `object`
    * description **required** `string`
    * founded **required** `string`
    * leader **required** `object`
      * email **required** `string`
      * name **required** `string`
    * members **required** `number`
  * value **required** `string`

### field.fieldKey.option.optionId.put
Updates an option for a select list issue field. If the option does not exist, a new option is created.


```js
jira.field.fieldKey.option.optionId.put({
  "fieldKey": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * config `object`
    * properties `object`: The properties can be any arbitrary key value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module.
    * value `string`: The option's name, which is displayed in the UI.
  * fieldKey **required** `string`: The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
  * optionId **required** `integer`: The ID of the option to be updated. For example, 3.

#### Output
* output `object`
  * config **required** `object`
    * attributes **required** `array`
      * items `object`
    * scope **required** `object`
      * global **required** `object`
      * projects **required** `array`
        * items `object`
      * projects2 **required** `array`
        * items `object`
          * attributes `array`
          * id **required** `number`
  * id **required** `number`
  * properties **required** `object`
    * description **required** `string`
    * founded **required** `string`
    * leader **required** `object`
      * email **required** `string`
      * name **required** `string`
    * members **required** `number`
  * value **required** `string`

### field.fieldKey.option.optionId.issue.delete
Deselects a select list issue field option in all issues that it has been selected in. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.


```js
jira.field.fieldKey.option.optionId.issue.delete({
  "fieldKey": "",
  "optionId": 0
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
  * jql `string`: A JQL query that specifies the issues to be updated. For example, project=10000.
  * optionId **required** `integer`: The ID of the option to be deselected. For example, 3.
  * replaceWith `integer`: The ID of the option that will replace the currently selected option. For example, 2.

#### Output
* output `object`
  * description **required** `string`
  * elapsedRuntime **required** `number`
  * id **required** `string`
  * result **required** `object`
    * errors **required** `object`
      * errorMessages **required** `array`
        * items `object`
      * errors **required** `object`
    * modifiedIssues **required** `array`
      * items `object`
    * unmodifiedIssues **required** `array`
      * items `object`
  * self **required** `string`
  * status **required** `string`

### field.fieldKey.option.suggestions.edit.get
Returns options defined for a select list issue field that can be viewed and selected by the currently logged in user.


```js
jira.field.fieldKey.option.suggestions.edit.get({
  "fieldKey": ""
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
  * maxResults `integer`: The maximum number of items to return per page. For example, 20.
  * projectId `integer`: Filters the results to options that are only available in the specified project. For example, 10000.
  * startAt `integer`: The starting index of the returned objects. For example, 1.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * nextPage **required** `string`
  * self **required** `string`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * id **required** `number`
      * properties `object`
        * description **required** `string`
        * founded **required** `string`
        * leader **required** `object`
          * email **required** `string`
          * name **required** `string`
        * members **required** `number`
      * value **required** `string`

### field.fieldKey.option.suggestions.search.get
Returns options defined for a select list issue field that can be viewed by the currently logged in user.


```js
jira.field.fieldKey.option.suggestions.search.get({
  "fieldKey": ""
}, context)
```

#### Input
* input `object`
  * fieldKey **required** `string`: The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
  * maxResults `integer`: The maximum number of items to return per page. For example, 20.
  * projectId `integer`: Filters the results to options that are only available in the specified project. For example, 10000.
  * startAt `integer`: The starting index of the returned objects. For example, 1.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * nextPage **required** `string`
  * self **required** `string`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * id **required** `number`
      * properties `object`
        * description **required** `string`
        * founded **required** `string`
        * leader **required** `object`
          * email **required** `string`
          * name **required** `string`
        * members **required** `number`
      * value **required** `string`

### filter.get
Returns all filters. Deprecated, use Search for filters that supports search and pagination. Permissions required: None, however only the following filters are returned:


```js
jira.filter.get({}, context)
```

#### Input
* input `object`
  * expand `string` (values: sharedUsers, subscriptions): Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:

#### Output
* output `object`
  * description **required** `string`
  * favourite **required** `boolean`
  * favouritedCount **required** `number`
  * id **required** `string`
  * jql **required** `string`
  * name **required** `string`
  * owner **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * searchUrl **required** `string`
  * self **required** `string`
  * sharePermissions **required** `array`
    * items `object`
  * subscriptions **required** `object`
    * end-index **required** `number`
    * items **required** `array`
      * items `object`
    * max-results **required** `number`
    * size **required** `number`
    * start-index **required** `number`
  * viewUrl **required** `string`

### filter.post
Creates a new filter. The new filter is not shared and not selected as a favorite. Permissions required: Permission to log in to Jira.


```js
jira.filter.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: A description of the filter (e.g., This filter returns open bugs for the Example project).
    * name `string`: The name of the filter (e.g., Open bugs for Example project). Must be unique.
    * owner `object`: A user.
    * sharedUsers `object`
    * sharePermissions `array`: The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter.
      * items `object`
    * subscriptions `object`
  * expand `string` (values: sharedUsers, subscriptions): Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:

#### Output
* output `object`
  * description **required** `string`
  * favourite **required** `boolean`
  * favouritedCount **required** `number`
  * id **required** `string`
  * jql **required** `string`
  * name **required** `string`
  * owner **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * searchUrl **required** `string`
  * self **required** `string`
  * sharePermissions **required** `array`
    * items `object`
  * subscriptions **required** `object`
    * end-index **required** `number`
    * items **required** `array`
      * items `object`
    * max-results **required** `number`
    * size **required** `number`
    * start-index **required** `number`
  * viewUrl **required** `string`

### filter.id.delete
Delete a filter. Permissions required: Permission to log in to Jira, however the following rules govern what a user can delete:


```js
jira.filter.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter to delete.

#### Output
*Output schema unknown*

### filter.id.get
Returns a filter. Permissions required: None, however the calling user must have permission view the filter.


```js
jira.filter.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * expand `string` (values: sharedUsers, subscriptions): Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
  * id **required** `integer`: The ID of the filter to return.

#### Output
* output `object`
  * description **required** `string`
  * favourite **required** `boolean`
  * favouritedCount **required** `number`
  * id **required** `string`
  * jql **required** `string`
  * name **required** `string`
  * owner **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * searchUrl **required** `string`
  * self **required** `string`
  * sharePermissions **required** `array`
    * items `object`
  * subscriptions **required** `object`
    * end-index **required** `number`
    * items **required** `array`
      * items `object`
    * max-results **required** `number`
    * size **required** `number`
    * start-index **required** `number`
  * viewUrl **required** `string`

### filter.id.put
Updates an existing filter. Use this method to update a filter's name, description, JQL, or sharing. Permissions required: Permission to log in to Jira, however the following rules govern what a user can update:


```js
jira.filter.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: A description of the filter (e.g., This filter returns open bugs for the Example project).
    * name `string`: The name of the filter (e.g., Open bugs for Example project). Must be unique.
    * owner `object`: A user.
    * sharedUsers `object`
    * sharePermissions `array`: The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter.
      * items `object`
    * subscriptions `object`
  * expand `string` (values: sharedUsers, subscriptions): Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
  * id **required** `integer`: The ID of the filter to update.

#### Output
* output `object`
  * description **required** `string`
  * favourite **required** `boolean`
  * favouritedCount **required** `number`
  * id **required** `string`
  * jql **required** `string`
  * name **required** `string`
  * owner **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * searchUrl **required** `string`
  * self **required** `string`
  * sharePermissions **required** `array`
    * items `object`
  * subscriptions **required** `object`
    * end-index **required** `number`
    * items **required** `array`
      * items `object`
    * max-results **required** `number`
    * size **required** `number`
    * start-index **required** `number`
  * viewUrl **required** `string`

### filter.id.columns.delete
Reset the user's column configuration for the filter to the default. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


```js
jira.filter.id.columns.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.

#### Output
*Output schema unknown*

### filter.id.columns.get
Returns the columns configured for a filter. The column configuration is used when the filter's results are viewed in List View with the Columns set to Filter. Permissions required: None, however the calling user must have permission to view the filter.


```js
jira.filter.id.columns.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.

#### Output
* output `array`
  * items `object`
    * label **required** `string`
    * value **required** `string`

### filter.id.columns.put
Sets the columns for a filter. Only navigable fields can be set as columns. Use Get fields to get the list fields in Jira. A navigable field has navigable set to true. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


```js
jira.filter.id.columns.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.

#### Output
*Output schema unknown*

### filter.id.favourite.delete
Removes a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


```js
jira.filter.id.favourite.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * expand `string` (values: sharedUsers, subscriptions): Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
  * id **required** `integer`: The ID of the filter.

#### Output
* output `object`
  * description **required** `string`
  * favourite **required** `boolean`
  * favouritedCount **required** `number`
  * id **required** `string`
  * jql **required** `string`
  * name **required** `string`
  * owner **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * searchUrl **required** `string`
  * self **required** `string`
  * sharePermissions **required** `array`
    * items `object`
  * subscriptions **required** `object`
    * end-index **required** `number`
    * items **required** `array`
      * items `object`
    * max-results **required** `number`
    * size **required** `number`
    * start-index **required** `number`
  * viewUrl **required** `string`

### filter.id.favourite.put
Add a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


```js
jira.filter.id.favourite.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * expand `string` (values: sharedUsers, subscriptions): Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
  * id **required** `integer`: The ID of the filter.

#### Output
* output `object`
  * description **required** `string`
  * favourite **required** `boolean`
  * favouritedCount **required** `number`
  * id **required** `string`
  * jql **required** `string`
  * name **required** `string`
  * owner **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * searchUrl **required** `string`
  * self **required** `string`
  * sharePermissions **required** `array`
    * items `object`
  * subscriptions **required** `object`
    * end-index **required** `number`
    * items **required** `array`
      * items `object`
    * max-results **required** `number`
    * size **required** `number`
    * start-index **required** `number`
  * viewUrl **required** `string`

### filter.id.permission.get
Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.


```js
jira.filter.id.permission.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.

#### Output
* output `array`
  * items `object`
    * id **required** `number`
    * project **required** `object`
      * avatarUrls **required** `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * id **required** `string`
      * key **required** `string`
      * name **required** `string`
      * projectCategory **required** `object`
        * description **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
      * self **required** `string`
      * simplified **required** `boolean`
      * style **required** `string`
    * role **required** `object`
      * actors **required** `array`
        * items `object`
          * actorGroup `object`
          * displayName **required** `string`
          * id **required** `number`
          * name **required** `string`
          * type **required** `string`
      * description **required** `string`
      * id **required** `number`
      * name **required** `string`
      * scope **required** `object`
        * project **required** `object`
          * id **required** `string`
        * type **required** `string`
      * self **required** `string`
    * type **required** `string`

### filter.id.permission.post
Add a share permissions to a filter. If you add a global share permission (i.e., all logged-in users or the public) it will overwrite all share permissions for the filter.Be aware that this method uses different objects for updating share permissions compared to Update filter. Permissions required: Share dashboards and filters global permission and the calling user must own the filter.


```js
jira.filter.id.permission.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * groupname `string`: The name of the group to share the filter with. Set type to group.
    * projectId `string`: The ID of the project to share the filter with. Set type to project.
    * projectRoleId `string`: The ID of the project role to share the filter with. Set type to projectRole and the projectId for the project that the role is in.
    * type `string` (values: project, group, projectRole, global, authenticated): The type of the share permission.Specify the type as follows:
  * id **required** `integer`: The ID of the filter.

#### Output
* output `array`
  * items `object`
    * id **required** `number`
    * project **required** `object`
      * avatarUrls **required** `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * id **required** `string`
      * key **required** `string`
      * name **required** `string`
      * projectCategory **required** `object`
        * description **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
      * self **required** `string`
      * simplified **required** `boolean`
      * style **required** `string`
    * role **required** `object`
      * actors **required** `array`
        * items `object`
          * actorGroup `object`
          * displayName **required** `string`
          * id **required** `number`
          * name **required** `string`
          * type **required** `string`
      * description **required** `string`
      * id **required** `number`
      * name **required** `string`
      * scope **required** `object`
        * project **required** `object`
          * id **required** `string`
        * type **required** `string`
      * self **required** `string`
    * type **required** `string`

### filter.id.permission.permissionId.delete
Deletes a share permission from a filter. Permissions required: Permission to log in to Jira (i.e., member of the users group) and the calling user must own the filter.


```js
jira.filter.id.permission.permissionId.delete({
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

### filter.id.permission.permissionId.get
Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.


```js
jira.filter.id.permission.permissionId.get({
  "id": 0,
  "permissionId": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the filter.
  * permissionId **required** `integer`: The ID of the share permission.

#### Output
* output `object`
  * id **required** `number`
  * type **required** `string`

### filter.defaultShareScope.get
Returns the default sharing settings for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).


```js
jira.filter.defaultShareScope.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * scope **required** `string`

### filter.defaultShareScope.put
Sets the default sharing for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).


```js
jira.filter.defaultShareScope.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * scope `string` (values: GLOBAL, AUTHENTICATED, PRIVATE): The scope of the default sharing for new filters and dashboards:

#### Output
* output `object`
  * scope **required** `string`

### filter.favourite.get
Returns the favorite filters of the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group).


```js
jira.filter.favourite.get({}, context)
```

#### Input
* input `object`
  * expand `string` (values: sharedUsers, subscriptions): Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:

#### Output
* output `array`
  * items `object`
    * description **required** `string`
    * favourite **required** `boolean`
    * favouritedCount **required** `number`
    * id **required** `string`
    * jql **required** `string`
    * name **required** `string`
    * owner **required** `object`
      * accountId **required** `string`
      * active **required** `boolean`
      * avatarUrls **required** `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * displayName **required** `string`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`
    * searchUrl **required** `string`
    * self **required** `string`
    * sharePermissions **required** `array`
      * items `object`
    * subscriptions **required** `object`
      * end-index **required** `number`
      * items **required** `array`
        * items `object`
      * max-results **required** `number`
      * size **required** `number`
      * start-index **required** `number`
    * viewUrl **required** `string`

### filter.my.get
Returns the filters owned by the calling user. If includeFavourites is true, the user's favorite filters are also returned. Permissions required: Permission to log in to Jira (i.e., member of the users group).


```js
jira.filter.my.get({}, context)
```

#### Input
* input `object`
  * expand `string` (values: sharedUsers, subscriptions): Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
  * includeFavourites `boolean`: Include the user's favorite filters in the response.

#### Output
* output `array`
  * items `object`
    * description **required** `string`
    * favourite **required** `boolean`
    * favouritedCount **required** `number`
    * id **required** `string`
    * jql **required** `string`
    * name **required** `string`
    * owner **required** `object`
      * accountId **required** `string`
      * active **required** `boolean`
      * avatarUrls **required** `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * displayName **required** `string`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`
    * searchUrl **required** `string`
    * self **required** `string`
    * sharePermissions **required** `array`
      * items `object`
    * subscriptions **required** `object`
      * end-index **required** `number`
      * items **required** `array`
        * items `object`
      * max-results **required** `number`
      * size **required** `number`
      * start-index **required** `number`
    * viewUrl **required** `string`

### filter.search.get
Search for filters. This method is similar to Get filters except that you can refine the results to include filters that have specific attributes. For example, filters with a particular name. Permissions required: None, however only the following filters are returned (if no search parameters are set):


```js
jira.filter.search.get({}, context)
```

#### Input
* input `object`
  * accountId `string`: Returns filters with an owner that exactly matches accountId of the owner. This parameter cannot be used with the owner parameter.
  * expand `string` (values: sharedUsers, subscriptions): Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
  * filterName `string`: Returns filters with a name that partially matches filterName.
  * groupname `string`: Returns filters that are shared with a group that has a name that exactly matches groupname.
  * maxResults `integer`: The maximum number of items to return per page. Max is 50.
  * orderBy `string` (values: id, name, description, owner, favourite_count, favouritedCount, is_favourite, favourite): Orders the results by a property of the filter. For example, name.
  * owner `string`: Returns filters with an owner that exactly matches owner. This parameter cannot be used with the accountId parameter.
  * projectId `integer`: Returns filters that are shared with a project that has an ID that exactly matches projectId.
  * startAt `integer`: The index of the first item to return in a page of results (page offset). The base index is 0.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * self **required** `string`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * description **required** `string`
      * favourite **required** `boolean`
      * favouritedCount **required** `number`
      * id **required** `string`
      * jql **required** `string`
      * name **required** `string`
      * owner `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * searchUrl **required** `string`
      * self **required** `string`
      * sharePermissions `array`
        * items `object`
      * subscriptions `array`
        * items `object`
      * viewUrl **required** `string`

### group.delete
Deletes a group.


```js
jira.group.delete({}, context)
```

#### Input
* input `object`
  * groupname `string`: The name of the group.
  * swapGroup `string`: The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs will be inaccessible after the deletion.

#### Output
*Output schema unknown*

### group.get
This resource is deprecated, use group/member.


```js
jira.group.get({}, context)
```

#### Input
* input `object`
  * expand `string`: List of fields to expand.
  * groupname `string`: The name of the group.

#### Output
*Output schema unknown*

### group.post
Creates a group.


```js
jira.group.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * name `string`: The name of the group.

#### Output
* output `object`
  * expand **required** `string`
  * name **required** `string`
  * self **required** `string`
  * users **required** `object`
    * end-index **required** `number`
    * items **required** `array`
      * items `object`
        * active **required** `boolean`
        * displayName **required** `string`
        * name **required** `string`
        * self **required** `string`
    * max-results **required** `number`
    * size **required** `number`
    * start-index **required** `number`

### group.member.get
Returns all users in a group. Users are ordered by username.


```js
jira.group.member.get({}, context)
```

#### Input
* input `object`
  * groupname `string`: The name of the group.
  * includeInactiveUsers `boolean`: Include inactive users.
  * maxResults `integer`: The maximum number of users to return per page.
  * startAt `integer`: The index of the first user to return.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * nextPage **required** `string`
  * self **required** `string`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * accountId **required** `string`
      * active **required** `boolean`
      * avatarUrls `object`
      * displayName **required** `string`
      * emailAddress **required** `string`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`
      * timeZone **required** `string`

### group.user.delete
Removes a user from a group. Permissions required: Administer Jira global permission.


```js
jira.group.user.delete({}, context)
```

#### Input
* input `object`
  * accountid `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
  * groupname `string`: The name of the group.
  * username `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.

#### Output
*Output schema unknown*

### group.user.post
Adds a user to a group.


```js
jira.group.user.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.
    * name `string`: This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The username of the user. For example, admin.
  * groupname `string`: The name of the group.

#### Output
*Output schema unknown*

### groups.picker.get
Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.


```js
jira.groups.picker.get({}, context)
```

#### Input
* input `object`
  * accountId `string`: Parameter not in use.
  * exclude `array`: A list of groups to exclude from the result.
  * maxResults `integer`: The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property jira.ajax.autocomplete.limit.
  * query `string`: The string to find in group names.
  * userName `string`: Parameter not in use.

#### Output
* output `object`
  * groups **required** `array`
    * items `object`
      * html **required** `string`
      * name **required** `string`
  * header **required** `string`
  * total **required** `number`

### groupuserpicker.get
Returns a list of users and groups matching a string. The string is used:


```js
jira.groupuserpicker.get({}, context)
```

#### Input
* input `object`
  * avatarSize `string`: The size of the avatar to return. If an invalid value is provided, the default value is used.
  * caseInsensitive `boolean`: Indicates whether the search for groups should be case insensitive.
  * excludeConnectAddons `boolean`: Indicates whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.
  * fieldId `string`: The custom field ID of the field this request is for.
  * issueTypeId `array`: The ID of an issue type that returned users and groups must have permission to view. To include multiple issue type IDs repeat this parameter, use of a comma separated list is not supported. Special values, such as -1 (all standard issue types) and -2 (all subtask issue types), are supported. This parameter is only used when fieldId is present.
  * maxResults `integer`: The maximum number of items to return in each list. The maximum is 1000.
  * projectId `array`: The ID of a project that returned users and groups must have permission to view. To include multiple projects repeat this parameter, use of a comma separated list is not supported. This parameter is only used when fieldId is present.
  * query `string`: The search string.
  * showAvatar `boolean`: Indicates whether the user avatar should be returned. If an invalid value is provided, the default value is used.

#### Output
* output `object`
  * groups **required** `object`
    * groups **required** `array`
      * items `object`
        * html **required** `string`
        * name **required** `string`
    * header **required** `string`
    * total **required** `number`
  * users **required** `object`
    * header **required** `string`
    * total **required** `number`
    * users **required** `array`
      * items `object`
        * accountId **required** `string`
        * avatarUrl **required** `string`
        * displayName **required** `string`
        * html **required** `string`
        * key **required** `string`
        * name **required** `string`

### issue.post
Creates an issue or, where the option to create sub-tasks is enabled in Jira, a sub-task. A transition may be applied, to move the issue or sub-task to a workflow step other than the default start step, and issue properties set.


```js
jira.issue.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * fields `object`: List of issue screen field to update, specifying the sub-field to update and its value. This field provides a straightforward option when setting a single sub-field. When multiple sub-fields or other operations are required, use update. Fields included in here cannot be included in update.
    * historyMetadata `object`: Details of issue history metadata. Deprecated.
    * properties `array`: Details of issue properties to be add or update.
      * items `object`
    * transition `object`: Details of an issue transition.
    * update `object`: List of operations to perform on issue screen fields. Note that fields included in here cannot be included in fields.
  * updateHistory `boolean`: Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira.

#### Output
* output `object`
  * id **required** `string`
  * key **required** `string`
  * self **required** `string`

### issue.issueIdOrKey.delete
Deletes an issue.


```js
jira.issue.issueIdOrKey.delete({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * deleteSubtasks `string`: Indicates whether the issue's sub-tasks are deleted when the issue is deleted.
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.get
Returns the details for an issue.


```js
jira.issue.issueIdOrKey.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: renderedFields, names, schema, transitions, operations, editmeta, changelog, versionedRepresentations, fields): Use expand to include additional information about the issues in the response. This parameter accepts multiple values separated by a comma:
  * fields `array` (values: *all, *navigable, summary,comment, -description, *navigable,-comment): A comma-separated list of fields to return for the issue. Use it to retrieve a subset of fields. Allowed values:
  * fieldsByKeys `boolean`: Indicates whether fields in fields are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
  * issueIdOrKey **required** `string`: The ID or key of the issue. For example, JRACLOUD-1549.
  * properties `array` (values: *all, *all,-prop1, prop1, prop1,prop2, prop2): A comma-separated list of issue properties to return for the issue. Allowed values:
  * updateHistory `boolean`: Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira. This also populates the JQL issues search lastViewed field.

#### Output
* output `object`
  * fields **required** `object`
    * attachment **required** `array`
      * items `object`
        * author `object`
          * accountId **required** `string`
          * active **required** `boolean`
          * avatarUrls **required** `object`
          * displayName **required** `string`
          * key **required** `string`
          * name **required** `string`
          * self **required** `string`
        * content **required** `string`
        * created **required** `string`
        * filename **required** `string`
        * id **required** `number`
        * mimeType **required** `string`
        * self **required** `string`
        * size **required** `number`
        * thumbnail **required** `string`
    * comment **required** `array`
      * items `object`
        * author `object`
          * active **required** `boolean`
          * displayName **required** `string`
          * name **required** `string`
          * self **required** `string`
        * body `object`
          * content **required** `array`
          * type **required** `string`
          * version **required** `number`
        * created **required** `string`
        * id **required** `string`
        * self **required** `string`
        * updateAuthor `object`
          * active **required** `boolean`
          * displayName **required** `string`
          * name **required** `string`
          * self **required** `string`
        * updated **required** `string`
        * visibility `object`
          * type **required** `string`
          * value **required** `string`
    * description **required** `object`
      * content **required** `array`
        * items `object`
          * content `array`
          * type **required** `string`
      * type **required** `string`
      * version **required** `number`
    * issuelinks **required** `array`
      * items `object`
        * id **required** `string`
        * outwardIssue `object`
          * fields **required** `object`
          * id **required** `string`
          * key **required** `string`
          * self **required** `string`
        * type `object`
          * id **required** `string`
          * inward **required** `string`
          * name **required** `string`
          * outward **required** `string`
    * project **required** `object`
      * avatarUrls **required** `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * id **required** `string`
      * key **required** `string`
      * name **required** `string`
      * projectCategory **required** `object`
        * description **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
      * self **required** `string`
      * simplified **required** `boolean`
      * style **required** `string`
    * sub-tasks **required** `array`
      * items `object`
        * id **required** `string`
        * outwardIssue `object`
          * fields **required** `object`
          * id **required** `string`
          * key **required** `string`
          * self **required** `string`
        * type `object`
          * id **required** `string`
          * inward **required** `string`
          * name **required** `string`
          * outward **required** `string`
    * timetracking **required** `object`
      * originalEstimate **required** `string`
      * originalEstimateSeconds **required** `number`
      * remainingEstimate **required** `string`
      * remainingEstimateSeconds **required** `number`
      * timeSpent **required** `string`
      * timeSpentSeconds **required** `number`
    * updated **required** `number`
    * watcher **required** `object`
      * isWatching **required** `boolean`
      * self **required** `string`
      * watchCount **required** `number`
      * watchers **required** `array`
        * items `object`
          * active **required** `boolean`
          * displayName **required** `string`
          * name **required** `string`
          * self **required** `string`
    * worklog **required** `array`
      * items `object`
        * author `object`
          * active **required** `boolean`
          * displayName **required** `string`
          * name **required** `string`
          * self **required** `string`
        * comment `object`
          * content **required** `array`
          * type **required** `string`
          * version **required** `number`
        * id **required** `string`
        * issueId **required** `string`
        * self **required** `string`
        * started **required** `string`
        * timeSpent **required** `string`
        * timeSpentSeconds **required** `number`
        * updateAuthor `object`
          * active **required** `boolean`
          * displayName **required** `string`
          * name **required** `string`
          * self **required** `string`
        * updated **required** `string`
        * visibility `object`
          * type **required** `string`
          * value **required** `string`
  * id **required** `string`
  * key **required** `string`
  * self **required** `string`

### issue.issueIdOrKey.put
Edits an issue. A transition may be applied and issue properties updated as part of the edit.


```js
jira.issue.issueIdOrKey.put({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * fields `object`: List of issue screen field to update, specifying the sub-field to update and its value. This field provides a straightforward option when setting a single sub-field. When multiple sub-fields or other operations are required, use update. Fields included in here cannot be included in update.
    * historyMetadata `object`: Details of issue history metadata. Deprecated.
    * properties `array`: Details of issue properties to be add or update.
      * items `object`
    * transition `object`: Details of an issue transition.
    * update `object`: List of operations to perform on issue screen fields. Note that fields included in here cannot be included in fields.
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * notifyUsers `boolean`: Indicates whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
  * overrideEditableFlag `boolean`: Indicates whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions.
  * overrideScreenSecurity `boolean`: Indicates whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.assignee.put
Assigns an issue to a user. Use this operation when the calling user does not have the Edit Issues permission but has the Assign issue permission for the project that the issue is in.


```js
jira.issue.issueIdOrKey.assignee.put({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.
    * active `boolean`: Indicates whether the user is active.
    * applicationRoles `object`: The application roles the user is assigned to.
    * avatarUrls `object`: The avatars of the user.
    * displayName `string`: The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
    * emailAddress `string`: The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
    * groups `object`: The groups that the user belongs to.
    * key `string`: This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The key of the user. For example, admin.
    * locale `string`: The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
    * name `string`: This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The username of the user. For example, admin.
    * timeZone `string`: The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
  * issueIdOrKey **required** `string`: The ID or key of the issue to be assigned.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.attachments.post
Adds one or more attachments to an issue. Attachments are posted as multipart/form-data (RFC 1867).


```js
jira.issue.issueIdOrKey.attachments.post({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue that attachments are added to.

#### Output
* output `array`
  * items `object`
    * author **required** `object`
      * accountId **required** `string`
      * active **required** `boolean`
      * avatarUrls **required** `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * displayName **required** `string`
      * emailAddress **required** `string`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`
      * timeZone **required** `string`
    * content **required** `string`
    * created **required** `string`
    * filename **required** `string`
    * id **required** `string`
    * mimeType **required** `string`
    * self **required** `string`
    * size **required** `number`
    * thumbnail **required** `string`

### issue.issueIdOrKey.changelog.get
Returns a paginated list of all updates of an issue, sorted by date, starting from the oldest.


```js
jira.issue.issueIdOrKey.changelog.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: ID or key of the issue.
  * maxResults `integer`: Maximum number of items to return per page. See Pagination section for more details.
  * startAt `integer`: Page offset, ie. index of the first item returned in the page of results. Base index: 0.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * nextPage **required** `string`
  * self **required** `string`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * author `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * emailAddress **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
        * timeZone **required** `string`
      * created **required** `string`
      * id **required** `string`
      * items `array`
        * items `object`
          * field **required** `string`
          * fieldId **required** `string`
          * fieldtype **required** `string`
          * fromString **required** `string`
          * toString **required** `string`

### issue.issueIdOrKey.comment.get
to get comments for


```js
jira.issue.issueIdOrKey.comment.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: optional flags: renderedBody (provides body rendered in HTML)
  * issueIdOrKey **required** `string`: to get comments for
  * maxResults `integer`: how many results on the page should be included. Defaults to 50.
  * orderBy `string`: ordering of the results.
  * startAt `integer`: the page offset, if not specified then defaults to 0

#### Output
* output `object`
  * comments **required** `array`
    * items `object`
      * author `object`
        * active **required** `boolean`
        * displayName **required** `string`
        * name **required** `string`
        * self **required** `string`
      * body `object`
        * content **required** `array`
          * items `object`
        * type **required** `string`
        * version **required** `number`
      * created **required** `string`
      * id **required** `string`
      * self **required** `string`
      * updateAuthor `object`
        * active **required** `boolean`
        * displayName **required** `string`
        * name **required** `string`
        * self **required** `string`
      * updated **required** `string`
      * visibility `object`
        * type **required** `string`
        * value **required** `string`
  * maxResults **required** `number`
  * startAt **required** `number`
  * total **required** `number`

### issue.issueIdOrKey.comment.post
a string containing the issue id or key the comment will be added to


```js
jira.issue.issueIdOrKey.comment.post({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * body `object`: The comment.
    * jsdPublic `boolean`: Indicates whether the comment is visible in Jira Service Desk. Optional on create and update. Defaults to true. If the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk projectthis parameter defaults to true.
    * properties `array`: A list of comment properties. Optional on create and update.
      * items `object`
    * visibility `object`: The group or role to which this comment is visible. Optional on create and update.
  * expand `string`: optional flags: renderedBody (provides body rendered in HTML)
  * issueIdOrKey **required** `string`: a string containing the issue id or key the comment will be added to

#### Output
* output `object`
  * author **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * body **required** `object`
    * content **required** `array`
      * items `object`
        * content `array`
          * items `object`
        * type **required** `string`
    * type **required** `string`
    * version **required** `number`
  * created **required** `string`
  * id **required** `string`
  * self **required** `string`
  * updateAuthor **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * updated **required** `string`
  * visibility **required** `object`
    * type **required** `string`
    * value **required** `string`

### issue.issueIdOrKey.comment.id.delete
a string containing the issue id or key the comment belongs to


```js
jira.issue.issueIdOrKey.comment.id.delete({
  "id": "",
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id of the comment to be deleted
  * issueIdOrKey **required** `string`: a string containing the issue id or key the comment belongs to

#### Output
*Output schema unknown*

### issue.issueIdOrKey.comment.id.get
of the issue the comment belongs to


```js
jira.issue.issueIdOrKey.comment.id.get({
  "id": "",
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: optional flags: renderedBody (provides body rendered in HTML)
  * id **required** `string`: the ID of the comment to request
  * issueIdOrKey **required** `string`: of the issue the comment belongs to

#### Output
* output `object`
  * author **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * body **required** `object`
    * content **required** `array`
      * items `object`
        * content `array`
          * items `object`
        * type **required** `string`
    * type **required** `string`
    * version **required** `number`
  * created **required** `string`
  * id **required** `string`
  * self **required** `string`
  * updateAuthor **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * updated **required** `string`
  * visibility **required** `object`
    * type **required** `string`
    * value **required** `string`

### issue.issueIdOrKey.comment.id.put
a string containing the issue id or key the comment belongs to


```js
jira.issue.issueIdOrKey.comment.id.put({
  "id": "",
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * body `object`: The comment.
    * jsdPublic `boolean`: Indicates whether the comment is visible in Jira Service Desk. Optional on create and update. Defaults to true. If the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk projectthis parameter defaults to true.
    * properties `array`: A list of comment properties. Optional on create and update.
      * items `object`
    * visibility `object`: The group or role to which this comment is visible. Optional on create and update.
  * expand `string`: optional flags: renderedBody (provides body rendered in HTML)
  * id **required** `string`: id of the comment to be updated
  * issueIdOrKey **required** `string`: a string containing the issue id or key the comment belongs to

#### Output
* output `object`
  * author **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * body **required** `object`
    * content **required** `array`
      * items `object`
        * content `array`
          * items `object`
        * type **required** `string`
    * type **required** `string`
    * version **required** `number`
  * created **required** `string`
  * id **required** `string`
  * self **required** `string`
  * updateAuthor **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * updated **required** `string`
  * visibility **required** `object`
    * type **required** `string`
    * value **required** `string`

### issue.issueIdOrKey.editmeta.get
Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in Edit issue.


```js
jira.issue.issueIdOrKey.editmeta.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * overrideEditableFlag `boolean`: Indicates whether non-editable fields should be returned. Available to connect app users with admin permissions.
  * overrideScreenSecurity `boolean`: Indicates whether hidden fields should be returned. Available to connect app users with admin permissions.

#### Output
* output `object`
  * fields **required** `object`
    * summary **required** `object`
      * allowedValues **required** `array`
        * items `object`
      * defaultValue **required** `string`
      * hasDefaultValue **required** `boolean`
      * key **required** `string`
      * name **required** `string`
      * operations **required** `array`
        * items `object`
      * required **required** `boolean`
      * schema **required** `object`
        * custom **required** `string`
        * customId **required** `number`
        * items **required** `string`
        * type **required** `string`

### issue.issueIdOrKey.notify.post
Creates an email notification for an issue and adds it to the mail queue.


```js
jira.issue.issueIdOrKey.notify.post({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * htmlBody `string`: The HTML body of the email notification for the issue.
    * restrict `object`
    * subject `string`: The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
    * textBody `string`: The plain text body of the email notification for the issue.
    * to `object`
  * issueIdOrKey **required** `string`: ID or key of the issue that the notification is sent for.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.properties.get
Returns the URIs and keys of an issue's properties.


```js
jira.issue.issueIdOrKey.properties.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The key or ID of the issue.

#### Output
* output `object`
  * keys **required** `array`
    * items `object`
      * key **required** `string`
      * self **required** `string`

### issue.issueIdOrKey.properties.propertyKey.delete
Deletes an issue's property.


```js
jira.issue.issueIdOrKey.properties.propertyKey.delete({
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

### issue.issueIdOrKey.properties.propertyKey.get
Returns the key and value of an issue's property.


```js
jira.issue.issueIdOrKey.properties.propertyKey.get({
  "issueIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The key or ID of the issue.
  * propertyKey **required** `string`: The key of the property.

#### Output
* output `object`
  * key **required** `string`
  * value **required** `object`
    * stride.conversation.id **required** `string`
    * support.time **required** `string`

### issue.issueIdOrKey.properties.propertyKey.put
Sets the value of an issue's property. Use this resource to store custom data against an issue.


```js
jira.issue.issueIdOrKey.properties.propertyKey.put({
  "issueIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * propertyKey **required** `string`: The key of the issue property. The maximum length is 255 characters.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.remotelink.delete
Deletes the remote issue link from the issue using the link's global ID.


```js
jira.issue.issueIdOrKey.remotelink.delete({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * globalId `string`: The global ID of a remote issue link.
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.remotelink.get
Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned.


```js
jira.issue.issueIdOrKey.remotelink.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * globalId `string`: The global ID of the remote issue link.
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
* output `array`
  * items `object`
    * application **required** `object`
      * name **required** `string`
      * type **required** `string`
    * globalId **required** `string`
    * id **required** `number`
    * object **required** `object`
      * icon **required** `object`
        * title **required** `string`
        * url16x16 **required** `string`
      * status **required** `object`
        * icon **required** `object`
          * link **required** `string`
          * title **required** `string`
          * url16x16 **required** `string`
        * resolved **required** `boolean`
      * summary **required** `string`
      * title **required** `string`
      * url **required** `string`
    * relationship **required** `string`
    * self **required** `string`

### issue.issueIdOrKey.remotelink.post
Creates or updates a remote issue link for an issue.


```js
jira.issue.issueIdOrKey.remotelink.post({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * application `object`: The application the linked item is in.
    * globalId `string`: The global ID of the link, such as the ID of the item on the remote system. The maximum length is 255 characters.
    * object `object`: The linked item.
    * relationship `string`: Description of the relationship between the issue and the linked item.
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
* output `object`
  * id **required** `number`
  * self **required** `string`

### issue.issueIdOrKey.remotelink.linkId.delete
Deletes a remote issue link from an issue.


```js
jira.issue.issueIdOrKey.remotelink.linkId.delete({
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

### issue.issueIdOrKey.remotelink.linkId.get
Returns a remote issue link for an issue.


```js
jira.issue.issueIdOrKey.remotelink.linkId.get({
  "issueIdOrKey": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * linkId **required** `string`: The ID of the remote issue link.

#### Output
* output `object`
  * application **required** `object`
    * name **required** `string`
    * type **required** `string`
  * globalId **required** `string`
  * id **required** `number`
  * object **required** `object`
    * icon **required** `object`
      * title **required** `string`
      * url16x16 **required** `string`
    * status **required** `object`
      * icon **required** `object`
        * link **required** `string`
        * title **required** `string`
        * url16x16 **required** `string`
      * resolved **required** `boolean`
    * summary **required** `string`
    * title **required** `string`
    * url **required** `string`
  * relationship **required** `string`
  * self **required** `string`

### issue.issueIdOrKey.remotelink.linkId.put
Updates a remote issue link for an issue.


```js
jira.issue.issueIdOrKey.remotelink.linkId.put({
  "issueIdOrKey": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * application `object`: The application the linked item is in.
    * globalId `string`: The global ID of the link, such as the ID of the item on the remote system. The maximum length is 255 characters.
    * object `object`: The linked item.
    * relationship `string`: Description of the relationship between the issue and the linked item.
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * linkId **required** `string`: The ID of the remote issue link.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.transitions.get
Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.


```js
jira.issue.issueIdOrKey.transitions.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: transitions.fields, fields, update): Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * skipRemoteOnlyCondition `boolean`: Indicates whether transitions with the condition Hide From User Condition are included in the response.
  * transitionId `string`: The ID of the transition.

#### Output
* output `object`
  * transitions **required** `array`
    * items `object`
      * fields `object`
        * summary **required** `object`
          * allowedValues **required** `array`
          * defaultValue **required** `string`
          * hasDefaultValue **required** `boolean`
          * key **required** `string`
          * name **required** `string`
          * operations **required** `array`
          * required **required** `boolean`
          * schema **required** `object`
      * hasScreen **required** `boolean`
      * id **required** `string`
      * isConditional **required** `boolean`
      * isGlobal **required** `boolean`
      * isInitial **required** `boolean`
      * name **required** `string`
      * to `object`
        * description **required** `string`
        * iconUrl **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
        * statusCategory **required** `object`
          * colorName **required** `string`
          * id **required** `number`
          * key **required** `string`
          * name **required** `string`
          * self **required** `string`

### issue.issueIdOrKey.transitions.post
Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. Optionally, issue properties can be set.


```js
jira.issue.issueIdOrKey.transitions.post({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * fields `object`: List of issue screen field to update, specifying the sub-field to update and its value. This field provides a straightforward option when setting a single sub-field. When multiple sub-fields or other operations are required, use update. Fields included in here cannot be included in update.
    * historyMetadata `object`: Details of issue history metadata. Deprecated.
    * properties `array`: Details of issue properties to be add or update.
      * items `object`
    * transition `object`: Details of an issue transition.
    * update `object`: List of operations to perform on issue screen fields. Note that fields included in here cannot be included in fields.
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.votes.delete
Deletes a user's vote from an issue. This is the equivalent of the user clicking Unvote on an issue in Jira.


```js
jira.issue.issueIdOrKey.votes.delete({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.votes.get
Returns details about the votes on an issue.


```js
jira.issue.issueIdOrKey.votes.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
* output `object`
  * hasVoted **required** `boolean`
  * self **required** `string`
  * voters **required** `array`
    * items `object`
      * accountId **required** `string`
      * active **required** `boolean`
      * avatarUrls `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * displayName **required** `string`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`
  * votes **required** `number`

### issue.issueIdOrKey.votes.post
Adds the user's vote to an issue. This is the equivalent of the user clicking Vote on an issue in Jira.


```js
jira.issue.issueIdOrKey.votes.post({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.watchers.delete
Deletes a user as a watcher of an issue.


```js
jira.issue.issueIdOrKey.watchers.delete({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user. Required if username is omitted, otherwise must be omitted.
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * username `string`: The name of the user. Required if accountId is omitted, otherwise must be omitted.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.watchers.get
Returns the watchers for an issue.


```js
jira.issue.issueIdOrKey.watchers.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
* output `object`
  * isWatching **required** `boolean`
  * self **required** `string`
  * watchCount **required** `number`
  * watchers **required** `array`
    * items `object`
      * active **required** `boolean`
      * displayName **required** `string`
      * name **required** `string`
      * self **required** `string`

### issue.issueIdOrKey.watchers.post
Adds a user as a watcher of an issue. If no user is specified the calling user is added.


```js
jira.issue.issueIdOrKey.watchers.post({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.worklog.get
Returns all worklogs for an issue.


```js
jira.issue.issueIdOrKey.worklog.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: properties): Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 1048576.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).

#### Output
* output `object`
  * maxResults **required** `number`
  * startAt **required** `number`
  * total **required** `number`
  * worklogs **required** `array`
    * items `object`
      * author `object`
        * active **required** `boolean`
        * displayName **required** `string`
        * name **required** `string`
        * self **required** `string`
      * comment `object`
        * content **required** `array`
          * items `object`
        * type **required** `string`
        * version **required** `number`
      * id **required** `string`
      * issueId **required** `string`
      * self **required** `string`
      * started **required** `string`
      * timeSpent **required** `string`
      * timeSpentSeconds **required** `number`
      * updateAuthor `object`
        * active **required** `boolean`
        * displayName **required** `string`
        * name **required** `string`
        * self **required** `string`
      * updated **required** `string`
      * visibility `object`
        * type **required** `string`
        * value **required** `string`

### issue.issueIdOrKey.worklog.post
Adds a worklog to an issue.


```js
jira.issue.issueIdOrKey.worklog.post({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * adjustEstimate `string` (values: new, newEstimate, leave, manual, reduceBy, auto, timeSpent): Defines how to update the issue's time estimate, the options are:
  * body `object`
    * author `object`: User details. Read only.
    * comment `object`: A comment about the worklog. Optional when creating or updating a worklog.
    * properties `array`: Details of properties for the worklog. Optional when creating or updating a worklog.
      * items `object`
    * started `string`: The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.
    * timeSpent `string`: The time spent working on the issue as days (#d), hours (#h), or minutes (#m or #). Required when creating a worklog if timeSpentSeconds isn't provided. Optional when updating a worklog. Cannot be provided if timeSpentSecond is provided.
    * timeSpentSeconds `integer`: The time in seconds spent working on the issue. Required when creating a worklog if timeSpent isn't provided. Optional when updating a worklog. Cannot be provided if timeSpent is provided.
    * updateAuthor `object`: User details. Read only.
    * visibility `object`: The group or role to which this item is visible.
  * expand `string` (values: properties): Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
  * issueIdOrKey **required** `string`: The ID or key the issue.
  * newEstimate `string`: The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
  * notifyUsers `boolean`: Indicates whether users watching the issue are notified by email.
  * overrideEditableFlag `boolean`: Indicates whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag.
  * reduceBy `string`: The amount to reduce the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m). For example, 2d. Required when adjustEstimate is manual.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.worklog.id.delete
Deletes a worklog from an issue.


```js
jira.issue.issueIdOrKey.worklog.id.delete({
  "id": "",
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * adjustEstimate `string` (values: new, newEstimate, leave, manual, increaseBy, auto, timeSpent): Defines how to update the issue's time estimate, the options are:
  * id **required** `string`: The ID of the worklog.
  * increaseBy `string`: The amount to increase the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is manual.
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * newEstimate `string`: The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
  * notifyUsers `boolean`: Indicates whether users watching the issue are notified by email.
  * overrideEditableFlag `boolean`: Indicates whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.worklog.id.get
Returns a worklog.


```js
jira.issue.issueIdOrKey.worklog.id.get({
  "id": "",
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: properties): Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
  * id **required** `string`: The ID of the worklog.
  * issueIdOrKey **required** `string`: The ID or key of the issue.

#### Output
* output `object`
  * author **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * comment **required** `object`
    * content **required** `array`
      * items `object`
        * content `array`
          * items `object`
        * type **required** `string`
    * type **required** `string`
    * version **required** `number`
  * id **required** `string`
  * issueId **required** `string`
  * self **required** `string`
  * started **required** `string`
  * timeSpent **required** `string`
  * timeSpentSeconds **required** `number`
  * updateAuthor **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * updated **required** `string`
  * visibility **required** `object`
    * type **required** `string`
    * value **required** `string`

### issue.issueIdOrKey.worklog.id.put
Updates a worklog.


```js
jira.issue.issueIdOrKey.worklog.id.put({
  "id": "",
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * adjustEstimate `string` (values: new, newEstimate, leave, auto, timeSpent, timeSpentSeconds): Defines how to update the issue's time estimate, the options are:
  * body `object`
    * author `object`: User details. Read only.
    * comment `object`: A comment about the worklog. Optional when creating or updating a worklog.
    * properties `array`: Details of properties for the worklog. Optional when creating or updating a worklog.
      * items `object`
    * started `string`: The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.
    * timeSpent `string`: The time spent working on the issue as days (#d), hours (#h), or minutes (#m or #). Required when creating a worklog if timeSpentSeconds isn't provided. Optional when updating a worklog. Cannot be provided if timeSpentSecond is provided.
    * timeSpentSeconds `integer`: The time in seconds spent working on the issue. Required when creating a worklog if timeSpent isn't provided. Optional when updating a worklog. Cannot be provided if timeSpent is provided.
    * updateAuthor `object`: User details. Read only.
    * visibility `object`: The group or role to which this item is visible.
  * expand `string` (values: properties): Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
  * id **required** `string`: The ID of the worklog.
  * issueIdOrKey **required** `string`: The ID or key the issue.
  * newEstimate `string`: The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
  * notifyUsers `boolean`: Indicates whether users watching the issue are notified by email.
  * overrideEditableFlag `boolean`: Indicates whether the worklog should be added to the issue even if the issue is not editable, for example, because the issue is closed. Only connect app users with admin permissions can use this flag.

#### Output
* output `object`
  * author **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * comment **required** `object`
    * content **required** `array`
      * items `object`
        * content `array`
          * items `object`
        * type **required** `string`
    * type **required** `string`
    * version **required** `number`
  * id **required** `string`
  * issueId **required** `string`
  * self **required** `string`
  * started **required** `string`
  * timeSpent **required** `string`
  * timeSpentSeconds **required** `number`
  * updateAuthor **required** `object`
    * active **required** `boolean`
    * displayName **required** `string`
    * name **required** `string`
    * self **required** `string`
  * updated **required** `string`
  * visibility **required** `object`
    * type **required** `string`
    * value **required** `string`

### issue.issueIdOrKey.worklog.worklogId.properties.get
Returns the keys of all properties for a worklog.


```js
jira.issue.issueIdOrKey.worklog.worklogId.properties.get({
  "issueIdOrKey": "",
  "worklogId": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * worklogId **required** `string`: The ID of the worklog.

#### Output
* output `object`
  * keys **required** `array`
    * items `object`
      * key **required** `string`
      * self **required** `string`

### issue.issueIdOrKey.worklog.worklogId.properties.propertyKey.delete
Deletes a worklog property.


```js
jira.issue.issueIdOrKey.worklog.worklogId.properties.propertyKey.delete({
  "issueIdOrKey": "",
  "propertyKey": "",
  "worklogId": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * propertyKey **required** `string`: The key of the property.
  * worklogId **required** `string`: The ID of the worklog.

#### Output
*Output schema unknown*

### issue.issueIdOrKey.worklog.worklogId.properties.propertyKey.get
Returns the value of a worklog property.


```js
jira.issue.issueIdOrKey.worklog.worklogId.properties.propertyKey.get({
  "issueIdOrKey": "",
  "propertyKey": "",
  "worklogId": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * propertyKey **required** `string`: The key of the property.
  * worklogId **required** `string`: The ID of the worklog.

#### Output
* output `object`
  * key **required** `string`
  * value **required** `object`
    * stride.conversation.id **required** `string`
    * support.time **required** `string`

### issue.issueIdOrKey.worklog.worklogId.properties.propertyKey.put
Sets the value of a worklog property. Use this operation to store custom data against the worklog.


```js
jira.issue.issueIdOrKey.worklog.worklogId.properties.propertyKey.put({
  "issueIdOrKey": "",
  "propertyKey": "",
  "worklogId": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The ID or key of the issue.
  * propertyKey **required** `string`: The key of the issue property. The maximum length is 255 characters.
  * worklogId **required** `string`: The ID of the worklog.

#### Output
*Output schema unknown*

### issue.bulk.post
Creates issues and, where the option to create sub-tasks is enabled in Jira, sub-tasks. Transitions may be applied, to move the issues or sub-tasks to a workflow step other than the default start step, and issue properties set.


```js
jira.issue.bulk.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * issueUpdates `array`
      * items `object`

#### Output
* output `object`
  * errors **required** `array`
    * items `object`
  * issues **required** `array`
    * items `object`
      * id **required** `string`
      * key **required** `string`
      * self **required** `string`

### issue.createmeta.get
Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in Create issue and Create issues.


```js
jira.issue.createmeta.get({}, context)
```

#### Input
* input `object`
  * expand `string` (values: projects.issuetypes.fields, fields, update): Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
  * issuetypeIds `array`: Comma-separated list of issue type IDs. May be specified multiple times and with issuetypeNames.
  * issuetypeNames `array`: Comma-separated list of issue type names. May be specified multiple times and with issuetypeIds.
  * projectIds `array`: Comma-separated list of project IDs. May be specified multiple times and with projectKeys.
  * projectKeys `array`: Comma-separated list of project keys. May be specified multiple times and with projectIds.

#### Output
* output `object`
  * projects **required** `array`
    * items `object`
      * avatarUrls `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * id **required** `string`
      * issuetypes `array`
        * items `object`
          * description **required** `string`
          * fields `object`
          * iconUrl **required** `string`
          * id **required** `string`
          * name **required** `string`
          * self **required** `string`
          * subtask **required** `boolean`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`

### issue.picker.get
Returns a list of suggested issues matching the auto-completion query for the user executing this request. This operation checks the user's history and browsing context to return issue suggestions.


```js
jira.issue.picker.get({}, context)
```

#### Input
* input `object`
  * currentIssueKey `string`: Key of the issue defining search context. The issue defining a context is excluded from the search results.
  * currentJQL `string`: JQL that defines the search context. Only issues matching this JQL query are included in the results. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
  * currentProjectId `string`: ID of a project defining search context. Only issues belonging to a given project are suggested.
  * query `string`: Query used to filter issue search results.
  * showSubTaskParent `boolean`: Set to false to exclude parent issue from the suggestions list if search is performed in the context of a sub-task.
  * showSubTasks `boolean`: Set to false to exclude subtasks from the suggestions list.

#### Output
*Output schema unknown*

### issue.properties.propertyKey.delete
Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.


```js
jira.issue.properties.propertyKey.delete({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * currentValue `object`: The value of properties to perform the bulk operation on.
    * entityIds `array`: List of issues to perform the bulk delete operation on.
      * items `integer`
  * propertyKey **required** `string`: The key of the property.

#### Output
*Output schema unknown*

### issue.properties.propertyKey.put
Sets a property value on multiple issues. The issues to be updated can be specified by a filter.


```js
jira.issue.properties.propertyKey.put({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * filter `object`: Bulk operation filter details.
    * value `object`: The value of the property. The value must be a valid, non-empty JSON blob. The maximum length is 32768 characters.
  * propertyKey **required** `string`: The key of the property. The maximum length is 255 characters.

#### Output
*Output schema unknown*

### issueLink.post
Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have Issue Linking enabled.


```js
jira.issueLink.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * comment `object`: A comment.
    * inwardIssue `object`: The ID or key of a linked issue.
    * outwardIssue `object`: The ID or key of a linked issue.
    * type `object`: This bean is used as follows:

#### Output
*Output schema unknown*

### issueLink.linkId.delete
Deletes an issue link.


```js
jira.issueLink.linkId.delete({
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: The ID of the issue link.

#### Output
*Output schema unknown*

### issueLink.linkId.get
Returns an issue link.


```js
jira.issueLink.linkId.get({
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: The ID of the issue link.

#### Output
* output `object`
  * id **required** `string`
  * inwardIssue **required** `object`
    * fields **required** `object`
      * issuetype **required** `object`
        * avatarId **required** `number`
        * description **required** `string`
        * iconUrl **required** `string`
        * id **required** `string`
        * name **required** `string`
        * scope **required** `object`
          * project **required** `object`
          * type **required** `string`
        * self **required** `string`
        * subtask **required** `boolean`
      * priority **required** `object`
        * description **required** `string`
        * iconUrl **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
        * statusColor **required** `string`
      * status **required** `object`
        * description **required** `string`
        * iconUrl **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
        * statusCategory **required** `object`
          * colorName **required** `string`
          * id **required** `number`
          * key **required** `string`
          * self **required** `string`
    * id **required** `string`
    * key **required** `string`
    * self **required** `string`
  * outwardIssue **required** `object`
    * fields **required** `object`
      * issuetype **required** `object`
        * avatarId **required** `number`
        * description **required** `string`
        * iconUrl **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
        * subtask **required** `boolean`
      * priority **required** `object`
        * description **required** `string`
        * iconUrl **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
        * statusColor **required** `string`
      * status **required** `object`
        * description **required** `string`
        * iconUrl **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
        * statusCategory **required** `object`
          * colorName **required** `string`
          * id **required** `number`
          * key **required** `string`
          * name **required** `string`
          * self **required** `string`
    * id **required** `string`
    * key **required** `string`
    * self **required** `string`
  * type **required** `object`
    * id **required** `string`
    * inward **required** `string`
    * name **required** `string`
    * outward **required** `string`
    * self **required** `string`

### issueLinkType.get
Returns a list of all issue link types.


```js
jira.issueLinkType.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * issueLinkTypes **required** `array`
    * items `object`
      * id **required** `string`
      * inward **required** `string`
      * name **required** `string`
      * outward **required** `string`
      * self **required** `string`

### issueLinkType.post
Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link's inward and outward relationships.


```js
jira.issueLinkType.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * id `string`: The ID of the issue link type and is used as follows:
    * inward `string`: The description of the issue link type inward link and is used as follows:
    * name `string`: The name of the issue link type and is used as follows:
    * outward `string`: The description of the issue link type outward link and is used as follows:

#### Output
* output `object`
  * id **required** `string`
  * inward **required** `string`
  * name **required** `string`
  * outward **required** `string`
  * self **required** `string`

### issueLinkType.issueLinkTypeId.delete
Deletes an issue link type.


```js
jira.issueLinkType.issueLinkTypeId.delete({
  "issueLinkTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueLinkTypeId **required** `string`: The ID of the issue link type.

#### Output
*Output schema unknown*

### issueLinkType.issueLinkTypeId.get
Returns an issue link type.


```js
jira.issueLinkType.issueLinkTypeId.get({
  "issueLinkTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueLinkTypeId **required** `string`: The ID of the issue link type.

#### Output
* output `object`
  * id **required** `string`
  * inward **required** `string`
  * name **required** `string`
  * outward **required** `string`
  * self **required** `string`

### issueLinkType.issueLinkTypeId.put
Updates an issue link type.


```js
jira.issueLinkType.issueLinkTypeId.put({
  "issueLinkTypeId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * id `string`: The ID of the issue link type and is used as follows:
    * inward `string`: The description of the issue link type inward link and is used as follows:
    * name `string`: The name of the issue link type and is used as follows:
    * outward `string`: The description of the issue link type outward link and is used as follows:
  * issueLinkTypeId **required** `string`: The ID of the issue link type.

#### Output
* output `object`
  * id **required** `string`
  * inward **required** `string`
  * name **required** `string`
  * outward **required** `string`
  * self **required** `string`

### issuesecurityschemes.get
Returns all issue security schemes.


```js
jira.issuesecurityschemes.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * issueSecuritySchemes **required** `array`
    * items `object`
      * defaultSecurityLevelId **required** `number`
      * description **required** `string`
      * id **required** `number`
      * name **required** `string`
      * self **required** `string`

### issuesecurityschemes.id.get
Returns an issue security scheme along with its security levels.


```js
jira.issuesecurityschemes.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the issue security scheme. Use the Get issue security schemes operation to get a list of issue security scheme IDs.

#### Output
* output `object`
  * defaultSecurityLevelId **required** `number`
  * description **required** `string`
  * id **required** `number`
  * levels **required** `array`
    * items `object`
      * description **required** `string`
      * id **required** `string`
      * name **required** `string`
      * self **required** `string`
  * name **required** `string`
  * self **required** `string`

### issuetype.get
Returns all issue types. Permissions required: Permission to access Jira, however, only issue types that are visible to the user are returned.


```js
jira.issuetype.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * avatarId **required** `number`
    * description **required** `string`
    * iconUrl **required** `string`
    * id **required** `string`
    * name **required** `string`
    * scope **required** `object`
      * project **required** `object`
        * id **required** `string`
      * type **required** `string`
    * self **required** `string`
    * subtask **required** `boolean`

### issuetype.post
Creates an issue type and adds it to the default issue type scheme. Permissions required: Administer Jira global permission.


```js
jira.issuetype.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: The description of the issue type.
    * name `string`: The unique name for the issue type. Maximum length 60 characters. Required.
    * type `string` (values: subtask, standard): Whether the issue type is subtype or standard. Defaults to standard.

#### Output
*Output schema unknown*

### issuetype.id.delete
Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (alternativeIssueTypeId). A list of alternative issue types can be obtained from the Get alternative issue types resource. Permissions required: Administer Jira global permission.


```js
jira.issuetype.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * alternativeIssueTypeId `string`: The ID of the replacement issue type.
  * id **required** `string`: The ID of the issue type.

#### Output
*Output schema unknown*

### issuetype.id.get
Returns an issue type. Permissions required:


```js
jira.issuetype.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue type.

#### Output
* output `object`
  * avatarId **required** `number`
  * description **required** `string`
  * iconUrl **required** `string`
  * id **required** `string`
  * name **required** `string`
  * self **required** `string`
  * subtask **required** `boolean`

### issuetype.id.put
Updates the issue type. Permissions required: Administer Jira global permission.


```js
jira.issuetype.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * avatarId `integer`: The ID of an issue type avatar.
    * description `string`: The description of the issue type.
    * name `string`: The unique name for the issue type. Maximum length 60 characters.
  * id **required** `string`: The ID of the issue type.

#### Output
*Output schema unknown*

### issuetype.id.alternatives.get
Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme. Permissions required: Permission to access Jira.


```js
jira.issuetype.id.alternatives.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue type.

#### Output
* output `array`
  * items `object`
    * avatarId **required** `number`
    * description **required** `string`
    * iconUrl **required** `string`
    * id **required** `string`
    * name **required** `string`
    * scope **required** `object`
      * project **required** `object`
        * id **required** `string`
      * type **required** `string`
    * self **required** `string`
    * subtask **required** `boolean`

### issuetype.id.avatar2.post
Loads an avatar for the issue type.


```js
jira.issuetype.id.avatar2.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue type.
  * size `integer`: The length of each side of the crop region.
  * x `integer`: The X coordinate of the top-left corner of the crop region.
  * y `integer`: The Y coordinate of the top-left corner of the crop region.

#### Output
* output `object`
  * id **required** `string`
  * isDeletable **required** `boolean`
  * isSelected **required** `boolean`
  * isSystemAvatar **required** `boolean`
  * urls **required** `object`
    * 16x16 **required** `string`
    * 24x24 **required** `string`
    * 32x32 **required** `string`
    * 48x48 **required** `string`

### issuetype.issueTypeId.properties.get
Returns all the issue type property keys of the issue type. Permissions required:


```js
jira.issuetype.issueTypeId.properties.get({
  "issueTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: The ID of the issue type.

#### Output
* output `object`
  * keys **required** `array`
    * items `object`
      * key **required** `string`
      * self **required** `string`

### issuetype.issueTypeId.properties.propertyKey.delete
Deletes the issue type property. Permissions required: Administer Jira global permission.


```js
jira.issuetype.issueTypeId.properties.propertyKey.delete({
  "issueTypeId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: The ID of the issue type.
  * propertyKey **required** `string`: The key of the property. Use Get issue type property keys to get a list of all issue type property keys.

#### Output
*Output schema unknown*

### issuetype.issueTypeId.properties.propertyKey.get
Returns the key and value of the issue type property. Permissions required:


```js
jira.issuetype.issueTypeId.properties.propertyKey.get({
  "issueTypeId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: The ID of the issue type.
  * propertyKey **required** `string`: The key of the property. Use Get issue type property keys to get a list of all issue type property keys.

#### Output
* output `object`
  * key **required** `string`
  * value **required** `object`
    * stride.conversation.id **required** `string`
    * support.time **required** `string`

### issuetype.issueTypeId.properties.propertyKey.put
Creates or updates the value of the issue type property. Use this resource to store and update data against an issue type. The value of the request body must be a valid, non-empty JSON blob. The maximum length of the property value is 32768 bytes. Permissions required: Administer Jira global permission.


```js
jira.issuetype.issueTypeId.properties.propertyKey.put({
  "issueTypeId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: The ID of the issue type.
  * propertyKey **required** `string`: The key of the issue type property. The maximum length of the key is 255 bytes.

#### Output
*Output schema unknown*

### jql.autocompletedata.get
Returns reference data for JQL searches. This is a downloadable version of the documentation provided in Advanced searching - fields reference and Advanced searching - functions reference, along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.


```js
jira.jql.autocompletedata.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * jqlReservedWords **required** `array`
    * items `object`
  * visibleFieldNames **required** `array`
    * items `object`
      * auto **required** `string`
      * cfid **required** `string`
      * displayName **required** `string`
      * operators `array`
        * items `object`
      * orderable **required** `string`
      * searchable **required** `string`
      * types `array`
        * items `object`
      * value **required** `string`
  * visibleFunctionNames **required** `array`
    * items `object`
      * displayName **required** `string`
      * isList **required** `string`
      * types `array`
        * items `object`
      * value **required** `string`

### jql.autocompletedata.suggestions.get
Returns the JQL search auto complete suggestions for a field.


```js
jira.jql.autocompletedata.suggestions.get({}, context)
```

#### Input
* input `object`
  * fieldName `string`: The name of the field.
  * fieldValue `string`: The partial field item name entered by the user.
  * predicateName `string`: The name of the CHANGED operator predicate for which the suggestions are generated. The valid predicate operators are by, from, and to.
  * predicateValue `string`: The partial predicate item name entered by the user.

#### Output
* output `object`
  * results **required** `array`
    * items `object`
      * displayName **required** `string`
      * value **required** `string`

### jql.pdcleaner.post
The query strings having personal data that need to be migrated. There should be at most 100 queries.


```js
jira.jql.pdcleaner.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * queryStrings `array`: The query strings having personal data that need to be migrated. There should be at most 100 queries.
      * items `string`

#### Output
* output `object`
  * queryStrings **required** `array`
    * items `object`

### mypermissions.get
Returns a list of permissions indicating which permissions the user has. Details of the user's permissions can be obtained in a global, project, or issue context.


```js
jira.mypermissions.get({}, context)
```

#### Input
* input `object`
  * issueId `string`: The ID of the issue.
  * issueKey `string`: The key of the issue. Ignored if issueId is provided.
  * permissions `string`: A comma separated list of permission keys. Omitting this parameter is deprecated. To get the list of available permissions, use Get all permissions. Note that deprecated keys cannot be used. Deprecated keys are not returned by Get all permissions but are returned by this operation if permissions is omitted.
  * projectId `string`: The ID of project.
  * projectKey `string`: The key of project. Ignored if projectId is provided.

#### Output
* output `object`
  * permissions **required** `object`
    * EDIT_ISSUE **required** `object`
      * description **required** `string`
      * havePermission **required** `boolean`
      * id **required** `string`
      * key **required** `string`
      * name **required** `string`
      * type **required** `string`

### mypreferences.delete
Deletes a preference of the user, which restores the default value of system defined settings.


```js
jira.mypreferences.delete({}, context)
```

#### Input
* input `object`
  * key `string`: The key of the preference.

#### Output
*Output schema unknown*

### mypreferences.get
Returns the value of a preference of the user.


```js
jira.mypreferences.get({}, context)
```

#### Input
* input `object`
  * key `string`: The key of the preference.

#### Output
*Output schema unknown*

### mypreferences.put
Creates a preference for the user or updates its value. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:


```js
jira.mypreferences.put({}, context)
```

#### Input
* input `object`
  * key `string`: The key of the preference. Maximum length is 255 characters.

#### Output
*Output schema unknown*

### mypreferences.locale.delete
Deletes the locale of the current user, which restores the default setting.


```js
jira.mypreferences.locale.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### mypreferences.locale.get
Returns the locale for the current user.


```js
jira.mypreferences.locale.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * locale **required** `string`

### mypreferences.locale.put
Sets the locale of the current user. The requested locale must be one supported by the instance of Jira.


```js
jira.mypreferences.locale.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * locale `string`: The locale code. The Java the locale format is used: a two character language code (ISO 639), an underscore, and two letter country code (ISO 3166). For example, en_US represents a locale of English (United States). Required on create.

#### Output
*Output schema unknown*

### myself.get
Returns details for the authenticated user.


```js
jira.myself.get({}, context)
```

#### Input
* input `object`
  * expand `string` (values: groups, applicationRoles): Use expand to include additional information about user in the response. This parameter accepts multiple values separated by a comma:

#### Output
* output `object`
  * accountId **required** `string`
  * active **required** `boolean`
  * applicationRoles **required** `object`
    * items **required** `array`
      * items `object`
    * size **required** `number`
  * avatarUrls **required** `object`
    * 16x16 **required** `string`
    * 24x24 **required** `string`
    * 32x32 **required** `string`
    * 48x48 **required** `string`
  * displayName **required** `string`
  * emailAddress **required** `string`
  * groups **required** `object`
    * items **required** `array`
      * items `object`
    * size **required** `number`
  * key **required** `string`
  * name **required** `string`
  * self **required** `string`
  * timeZone **required** `string`

### notificationscheme.get
Returns a paginated list of notification schemes in order by display name.


```js
jira.notificationscheme.get({}, context)
```

#### Input
* input `object`
  * expand `string` (values: all, field, group, notificationSchemeEvents, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  * maxResults `integer`: The maximum number of items to return per page. Max is 50.
  * startAt `integer`: The index of the first item to return in a page of results (page offset). The base index is 0.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * description **required** `string`
      * expand **required** `string`
      * id **required** `number`
      * name **required** `string`
      * notificationSchemeEvents `array`
        * items `object`
          * event `object`
          * notifications `array`
      * self **required** `string`

### notificationscheme.id.get
Returns a notification scheme, including the list of events and the recipients who will receive notifications for those events.


```js
jira.notificationscheme.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * expand `string` (values: all, field, group, notificationSchemeEvents, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  * id **required** `integer`: The ID of the notification scheme. Use Get notification schemes paginated to get a list of notification scheme IDs.

#### Output
* output `object`
  * description **required** `string`
  * expand **required** `string`
  * id **required** `number`
  * name **required** `string`
  * notificationSchemeEvents **required** `array`
    * items `object`
      * event `object`
        * description **required** `string`
        * id **required** `number`
        * name **required** `string`
      * notifications `array`
        * items `object`
          * expand **required** `string`
          * group `object`
          * id **required** `number`
          * notificationType **required** `string`
          * parameter **required** `string`
  * self **required** `string`

### permissions.get
Returns all permissions, including:


```js
jira.permissions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * permissions **required** `object`
    * BULK_CHANGE **required** `object`
      * description **required** `string`
      * key **required** `string`
      * name **required** `string`
      * type **required** `string`

### permissions.project.post
Returns all the projects where the user is granted a list of project permissions.


```js
jira.permissions.project.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * permissions `array`: A list of permission keys.
      * items `string`

#### Output
* output `object`
  * projects **required** `array`
    * items `object`
      * id **required** `number`
      * key **required** `string`

### permissionscheme.get
Returns all permission schemes.


```js
jira.permissionscheme.get({}, context)
```

#### Input
* input `object`
  * expand `string` (values: all, field, group, permissions, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:

#### Output
* output `object`
  * permissionSchemes **required** `array`
    * items `object`
      * description **required** `string`
      * id **required** `number`
      * name **required** `string`
      * self **required** `string`

### permissionscheme.post
Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants. Permissions required: Administer Jira global permission.


```js
jira.permissionscheme.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: A description for the permission scheme.
    * name `string`: The name of the permission scheme. Must be unique. Required when creating or updating a permission scheme.
    * permissions `array`: The permission scheme to create or update. See About permission schemes and grants for more information.
      * items `object`
    * scope `object`: The scope of the permission scheme
  * expand `string` (values: all, field, group, permissions, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:

#### Output
* output `object`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * permissions **required** `array`
    * items `object`
      * holder `object`
        * expand **required** `string`
        * parameter **required** `string`
        * type **required** `string`
      * id **required** `number`
      * permission **required** `string`
      * self **required** `string`
  * self **required** `string`

### permissionscheme.schemeId.delete
Deletes a permission scheme. Permissions required: Administer Jira global permission.


```js
jira.permissionscheme.schemeId.delete({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * schemeId **required** `integer`: The ID of the permission scheme being deleted (e.g., 10000).

#### Output
*Output schema unknown*

### permissionscheme.schemeId.get
Returns a permission scheme. Permissions required: Permission to log in to Jira.


```js
jira.permissionscheme.schemeId.get({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * expand `string` (values: all, field, group, permissions, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
  * schemeId **required** `integer`: The ID of the permission scheme to return (e.g., 10000).

#### Output
* output `object`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * permissions **required** `array`
    * items `object`
      * holder `object`
        * expand **required** `string`
        * parameter **required** `string`
        * type **required** `string`
      * id **required** `number`
      * permission **required** `string`
      * self **required** `string`
  * self **required** `string`

### permissionscheme.schemeId.put
Updates a permission scheme. Below are some important things to note when using this resource:


```js
jira.permissionscheme.schemeId.put({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: A description for the permission scheme.
    * name `string`: The name of the permission scheme. Must be unique. Required when creating or updating a permission scheme.
    * permissions `array`: The permission scheme to create or update. See About permission schemes and grants for more information.
      * items `object`
    * scope `object`: The scope of the permission scheme
  * expand `string` (values: all, field, group, permissions, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
  * schemeId **required** `integer`: The ID of the permission scheme to update (e.g., 10000).

#### Output
* output `object`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * permissions **required** `array`
    * items `object`
      * holder `object`
        * expand **required** `string`
        * parameter **required** `string`
        * type **required** `string`
      * id **required** `number`
      * permission **required** `string`
      * self **required** `string`
  * self **required** `string`

### permissionscheme.schemeId.permission.get
Returns all permission grants for a permission scheme. Permissions required: Permission to log in to Jira.


```js
jira.permissionscheme.schemeId.permission.get({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * expand `string` (values: permissions, user, group, projectRole, field, all): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
  * schemeId **required** `integer`: The ID of the permission scheme (e.g., 10010).

#### Output
* output `object`
  * expand **required** `string`
  * permissions **required** `array`
    * items `object`
      * holder `object`
        * expand **required** `string`
        * parameter **required** `string`
        * type **required** `string`
      * id **required** `number`
      * permission **required** `string`
      * self **required** `string`

### permissionscheme.schemeId.permission.post
Creates a new permission grant in the given permission scheme. Permissions required: Administer Jira global permission.


```js
jira.permissionscheme.schemeId.permission.post({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * holder `object`: The user or group being granted the permission. It consists of a type and a type-dependent parameter. See holderfor more information.
    * permission `string`: The permission to grant. Choose from the list of built-in permissions or from any custom permissions that have been added by apps. For more information about custom permissions, see the project permission and global permission module documentation.
  * expand `string` (values: permissions, user, group, projectRole, field, all): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
  * schemeId **required** `integer`: The ID of the permission scheme in which to create a new permission grant.

#### Output
* output `object`
  * holder **required** `object`
    * expand **required** `string`
    * parameter **required** `string`
    * type **required** `string`
  * id **required** `number`
  * permission **required** `string`
  * self **required** `string`

### permissionscheme.schemeId.permission.permissionId.delete
Deletes a permission grant from a permission scheme. See About permission schemes and grants for more details. Permissions required: Administer Jira global permission.


```js
jira.permissionscheme.schemeId.permission.permissionId.delete({
  "permissionId": 0,
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * permissionId **required** `integer`: The ID of the permission grant to delete (e.g., 10847).
  * schemeId **required** `integer`: The ID of the permission scheme to delete the permission grant from (e.g., 10000).

#### Output
*Output schema unknown*

### permissionscheme.schemeId.permission.permissionId.get
Returns a permission grant. Permissions required: Permission to log in to Jira.


```js
jira.permissionscheme.schemeId.permission.permissionId.get({
  "permissionId": 0,
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * expand `string` (values: all, field, group, permissions, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
  * permissionId **required** `integer`: The ID of the permission grant (e.g., 10000).
  * schemeId **required** `integer`: The ID of the permission scheme (e.g., 10010).

#### Output
* output `object`
  * holder **required** `object`
    * expand **required** `string`
    * parameter **required** `string`
    * type **required** `string`
  * id **required** `number`
  * permission **required** `string`
  * self **required** `string`

### priority.get
Returns the list of all issue priorities.


```js
jira.priority.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * description **required** `string`
    * iconUrl **required** `string`
    * id **required** `string`
    * name **required** `string`
    * self **required** `string`
    * statusColor **required** `string`

### priority.id.get
Returns an issue priority.


```js
jira.priority.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue priority.

#### Output
* output `object`
  * description **required** `string`
  * iconUrl **required** `string`
  * id **required** `string`
  * name **required** `string`
  * self **required** `string`
  * statusColor **required** `string`

### project.get
Returns all projects visible to the currently logged in user. Deprecated, use Get projects paginated that supports search and pagination. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, it returns all projects that are visible for anonymous users.


```js
jira.project.get({}, context)
```

#### Input
* input `object`
  * expand `string` (values: description, issueTypes, lead, projectKeys): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  * recent `integer`: Returns the most recently accessed projects for the current user. You may specify the number of results to return up to a maximum of 20. If no user is logged in, then the recently accessed projects will be returned based on the current HTTP session.

#### Output
* output `array`
  * items `object`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * id **required** `string`
    * key **required** `string`
    * name **required** `string`
    * projectCategory **required** `object`
      * description **required** `string`
      * id **required** `string`
      * name **required** `string`
      * self **required** `string`
    * self **required** `string`
    * simplified **required** `boolean`
    * style **required** `string`

### project.post
Creates a new project.


```js
jira.project.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * assigneeType `string` (values: PROJECT_LEAD, UNASSIGNED): The default assignee when creating issues for this project.
    * avatarId `integer`: An integer value for the project's avatar.
    * categoryId `integer`: The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
    * description `string`: A brief description of the project.
    * issueSecurityScheme `integer`: The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the Get issue security schemes resource to get all issue security scheme IDs.
    * key `string`: Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. Max length is 10 characters. Required when creating a project. Optional when updating a project.
    * lead `string`: Sets the username of the project lead. Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project.
    * leadAccountId `string`: Sets the project lead account id.Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project.
    * name `string`: The name of the project. Required when creating a project. Optional when updating a project.
    * notificationScheme `integer`: The ID of the notification scheme for the project. Use the Get notification schemes resource to get a list of notification scheme IDs.
    * permissionScheme `integer`: The ID of the permission scheme for the project. Use the Get all permission schemes resource to see a list of all permission scheme IDs.
    * projectTemplateKey `string` (values: com.pyxis.greenhopper.jira:gh-simplified-agility, com.pyxis.greenhopper.jira:gh-simplified-basic, com.pyxis.greenhopper.jira:gh-simplified-kanban, com.pyxis.greenhopper.jira:gh-simplified-scrum, com.atlassian.servicedesk:simplified-it-service-desk, com.atlassian.servicedesk:simplified-internal-service-desk, com.atlassian.servicedesk:simplified-external-service-desk, com.atlassian.jira-core-project-templates:jira-core-simplified-content-management, com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval, com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking): A prebuilt configuration for a project. The type of the projectTemplateKey must match with the type of the projectTypeKey. Required when creating a project. Not applicable for the Update project resource.
    * projectTypeKey `string` (values: software, service_desk, business): The project type, which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource. See the Update project type resource instead.
    * url `string`: A link to information about this project, such as project documentation

#### Output
* output `object`
  * id **required** `number`
  * key **required** `string`
  * self **required** `string`

### project.projectIdOrKey.delete
Deletes an existing project.


```js
jira.project.projectIdOrKey.delete({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
*Output schema unknown*

### project.projectIdOrKey.get
Returns the project details for the specified project.


```js
jira.project.projectIdOrKey.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: description, issueTypes, lead, projectKeys): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * assigneeType **required** `string`
  * avatarUrls **required** `object`
    * 16x16 **required** `string`
    * 24x24 **required** `string`
    * 32x32 **required** `string`
    * 48x48 **required** `string`
  * components **required** `array`
    * items `object`
      * assignee `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * assigneeType **required** `string`
      * description **required** `string`
      * id **required** `string`
      * isAssigneeTypeValid **required** `boolean`
      * lead `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * name **required** `string`
      * project **required** `string`
      * projectId **required** `number`
      * realAssignee `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * realAssigneeType **required** `string`
      * self **required** `string`
  * description **required** `string`
  * email **required** `string`
  * id **required** `string`
  * issueTypes **required** `array`
    * items `object`
      * avatarId **required** `number`
      * description **required** `string`
      * iconUrl **required** `string`
      * id **required** `string`
      * name **required** `string`
      * scope `object`
        * project **required** `object`
          * id **required** `string`
        * type **required** `string`
      * self **required** `string`
      * subtask **required** `boolean`
  * key **required** `string`
  * lead **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * name **required** `string`
  * projectCategory **required** `object`
    * description **required** `string`
    * id **required** `string`
    * name **required** `string`
    * self **required** `string`
  * roles **required** `object`
    * Developers **required** `string`
  * self **required** `string`
  * simplified **required** `boolean`
  * style **required** `string`
  * url **required** `string`
  * versions **required** `array`
    * items `object`

### project.projectIdOrKey.put
Updates the project details of an existing project.


```js
jira.project.projectIdOrKey.put({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * assigneeType `string` (values: PROJECT_LEAD, UNASSIGNED): The default assignee when creating issues for this project.
    * avatarId `integer`: An integer value for the project's avatar.
    * categoryId `integer`: The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
    * description `string`: A brief description of the project.
    * issueSecurityScheme `integer`: The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the Get issue security schemes resource to get all issue security scheme IDs.
    * key `string`: Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. Max length is 10 characters. Required when creating a project. Optional when updating a project.
    * lead `string`: Sets the username of the project lead. Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project.
    * leadAccountId `string`: Sets the project lead account id.Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project.
    * name `string`: The name of the project. Required when creating a project. Optional when updating a project.
    * notificationScheme `integer`: The ID of the notification scheme for the project. Use the Get notification schemes resource to get a list of notification scheme IDs.
    * permissionScheme `integer`: The ID of the permission scheme for the project. Use the Get all permission schemes resource to see a list of all permission scheme IDs.
    * projectTemplateKey `string` (values: com.pyxis.greenhopper.jira:gh-simplified-agility, com.pyxis.greenhopper.jira:gh-simplified-basic, com.pyxis.greenhopper.jira:gh-simplified-kanban, com.pyxis.greenhopper.jira:gh-simplified-scrum, com.atlassian.servicedesk:simplified-it-service-desk, com.atlassian.servicedesk:simplified-internal-service-desk, com.atlassian.servicedesk:simplified-external-service-desk, com.atlassian.jira-core-project-templates:jira-core-simplified-content-management, com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval, com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking): A prebuilt configuration for a project. The type of the projectTemplateKey must match with the type of the projectTypeKey. Required when creating a project. Not applicable for the Update project resource.
    * projectTypeKey `string` (values: software, service_desk, business): The project type, which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource. See the Update project type resource instead.
    * url `string`: A link to information about this project, such as project documentation
  * expand `string` (values: description, issueTypes, lead, projectKeys): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * assigneeType **required** `string`
  * avatarUrls **required** `object`
    * 16x16 **required** `string`
    * 24x24 **required** `string`
    * 32x32 **required** `string`
    * 48x48 **required** `string`
  * components **required** `array`
    * items `object`
      * assignee `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * assigneeType **required** `string`
      * description **required** `string`
      * id **required** `string`
      * isAssigneeTypeValid **required** `boolean`
      * lead `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * name **required** `string`
      * project **required** `string`
      * projectId **required** `number`
      * realAssignee `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * realAssigneeType **required** `string`
      * self **required** `string`
  * description **required** `string`
  * email **required** `string`
  * id **required** `string`
  * issueTypes **required** `array`
    * items `object`
      * avatarId **required** `number`
      * description **required** `string`
      * iconUrl **required** `string`
      * id **required** `string`
      * name **required** `string`
      * scope `object`
        * project **required** `object`
          * id **required** `string`
        * type **required** `string`
      * self **required** `string`
      * subtask **required** `boolean`
  * key **required** `string`
  * lead **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * name **required** `string`
  * projectCategory **required** `object`
    * description **required** `string`
    * id **required** `string`
    * name **required** `string`
    * self **required** `string`
  * roles **required** `object`
    * Developers **required** `string`
  * self **required** `string`
  * simplified **required** `boolean`
  * style **required** `string`
  * url **required** `string`
  * versions **required** `array`
    * items `object`

### project.projectIdOrKey.avatar.put
Sets the avatar displayed for a project.


```js
jira.project.projectIdOrKey.avatar.put({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * id `string`: The ID of the avatar. Required when setting the project avatar, otherwise read only.
  * projectIdOrKey **required** `string`: The ID or (case-sensitive) key of the project.

#### Output
*Output schema unknown*

### project.projectIdOrKey.avatar.id.delete
Deletes a custom avatar from a project. Note that system avatars cannot be deleted.


```js
jira.project.projectIdOrKey.avatar.id.delete({
  "id": 0,
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the avatar.
  * projectIdOrKey **required** `string`: The project ID or (case-sensitive) key.

#### Output
*Output schema unknown*

### project.projectIdOrKey.avatar2.post
Loads an avatar for a project.


```js
jira.project.projectIdOrKey.avatar2.post({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The ID or (case-sensitive) key of the project.
  * size `integer`: The length of each side of the crop region.
  * x `integer`: The X coordinate of the top-left corner of the crop region.
  * y `integer`: The Y coordinate of the top-left corner of the crop region.

#### Output
* output `object`
  * id **required** `string`
  * isDeletable **required** `boolean`
  * isSelected **required** `boolean`
  * isSystemAvatar **required** `boolean`

### project.projectIdOrKey.avatars.get
Returns all project avatars, grouped by system and custom avatars.


```js
jira.project.projectIdOrKey.avatars.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The ID or (case-sensitive) key of the project.

#### Output
* output `object`
  * custom **required** `array`
    * items `object`
      * id **required** `string`
      * isDeletable **required** `boolean`
      * isSelected **required** `boolean`
      * isSystemAvatar **required** `boolean`
      * urls `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
  * system **required** `array`
    * items `object`
      * id **required** `string`
      * isDeletable **required** `boolean`
      * isSelected **required** `boolean`
      * isSystemAvatar **required** `boolean`
      * urls `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`

### project.projectIdOrKey.component.get
Returns a paginated representation of all components existing in a single project. See the Get project components resource if you want to get a full list of versions without pagination.


```js
jira.project.projectIdOrKey.component.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of components to return per page. Max 50.
  * orderBy `string` (values: description, issueCount, lead, name): Order the results by a particular field:
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * query `string`: Filter the results using a literal string. Components with a matching name or description are returned (case insensitive).
  * startAt `integer`: The starting index of the returned list of components. The base index is 0.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * nextPage **required** `string`
  * self **required** `string`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * assignee `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * assigneeType **required** `string`
      * description **required** `string`
      * id **required** `string`
      * isAssigneeTypeValid **required** `boolean`
      * issueCount **required** `number`
      * lead `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * name **required** `string`
      * project **required** `string`
      * projectId **required** `number`
      * realAssignee `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * realAssigneeType **required** `string`
      * self **required** `string`

### project.projectIdOrKey.components.get
Returns all components existing in a single project. See the Get project components paginated resource if you want to get a full list of components with pagination.


```js
jira.project.projectIdOrKey.components.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `array`
  * items `object`
    * assignee **required** `object`
      * accountId **required** `string`
      * active **required** `boolean`
      * avatarUrls **required** `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * displayName **required** `string`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`
    * assigneeType **required** `string`
    * description **required** `string`
    * id **required** `string`
    * isAssigneeTypeValid **required** `boolean`
    * lead **required** `object`
      * accountId **required** `string`
      * active **required** `boolean`
      * avatarUrls **required** `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * displayName **required** `string`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`
    * name **required** `string`
    * project **required** `string`
    * projectId **required** `number`
    * realAssignee **required** `object`
      * accountId **required** `string`
      * active **required** `boolean`
      * avatarUrls **required** `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * displayName **required** `string`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`
    * realAssigneeType **required** `string`
    * self **required** `string`

### project.projectIdOrKey.properties.get
Returns all project property keys for the project.


```js
jira.project.projectIdOrKey.properties.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * keys **required** `array`
    * items `object`
      * key **required** `string`
      * self **required** `string`

### project.projectIdOrKey.properties.propertyKey.delete
Removes the property from the project.


```js
jira.project.projectIdOrKey.properties.propertyKey.delete({
  "projectIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * propertyKey **required** `string`: The project property key. Use Get project property keys to get a list of all project property keys.

#### Output
*Output schema unknown*

### project.projectIdOrKey.properties.propertyKey.get
Returns the value of the project property.


```js
jira.project.projectIdOrKey.properties.propertyKey.get({
  "projectIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * propertyKey **required** `string`: The project property key. Use Get project property keys to get a list of all project property keys.

#### Output
* output `object`
  * key **required** `string`
  * value **required** `object`
    * stride.conversation.id **required** `string`
    * support.time **required** `string`

### project.projectIdOrKey.properties.propertyKey.put
Sets the value of the project property. You can use project properties to store custom data against the project.


```js
jira.project.projectIdOrKey.properties.propertyKey.put({
  "projectIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * propertyKey **required** `string`: The key of the project property. The maximum length is 255 bytes.

#### Output
*Output schema unknown*

### project.projectIdOrKey.role.get
Returns a list of project roles for the project.


```js
jira.project.projectIdOrKey.role.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * Administrators **required** `string`
  * Developers **required** `string`
  * Users **required** `string`

### project.projectIdOrKey.role.id.delete
Deletes actors from a project role for the project.


```js
jira.project.projectIdOrKey.role.id.delete({
  "id": 0,
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * group `string`: The name of the group to remove from the project role.
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * user `string`: The user account ID of the user to remove from the project role.

#### Output
*Output schema unknown*

### project.projectIdOrKey.role.id.get
Returns the project role's details and actors associated with the project. The list of actors is sorted by display name.


```js
jira.project.projectIdOrKey.role.id.get({
  "id": 0,
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * actors **required** `array`
    * items `object`
      * actorGroup `object`
        * displayName **required** `string`
        * name **required** `string`
      * displayName **required** `string`
      * id **required** `number`
      * name **required** `string`
      * type **required** `string`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * scope **required** `object`
    * project **required** `object`
      * id **required** `string`
    * type **required** `string`
  * self **required** `string`

### project.projectIdOrKey.role.id.post
Adds additional actors to a project role for the project.


```js
jira.project.projectIdOrKey.role.id.post({
  "id": 0,
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * group `array`: The name of the group to add.
      * items `string`
    * user `array`: The user account ID of the user to add.
      * items `string`
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
*Output schema unknown*

### project.projectIdOrKey.role.id.put
Associates actors with the project role for the project, replacing all existing actors.


```js
jira.project.projectIdOrKey.role.id.put({
  "id": 0,
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * categorisedActors `object`: The actors to add to the project role for the project. Provide the group name or account ID. User key may be provided instead of account ID when not in GDPR-strict mode, however this is deprecated behavior. Add groups using atlassian-group-role-actor. Add users using atlassian-user-role-actor.
    * id `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * actors **required** `array`
    * items `object`
      * actorGroup `object`
        * displayName **required** `string`
        * name **required** `string`
      * displayName **required** `string`
      * id **required** `number`
      * name **required** `string`
      * type **required** `string`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * scope **required** `object`
    * project **required** `object`
      * id **required** `string`
    * type **required** `string`
  * self **required** `string`

### project.projectIdOrKey.roledetails.get
Returns all project roles and the details for each role. Note that the list of project roles is common to all projects.


```js
jira.project.projectIdOrKey.roledetails.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `array`
  * items `object`
    * actors **required** `array`
      * items `object`
        * actorGroup `object`
          * displayName **required** `string`
          * name **required** `string`
        * displayName **required** `string`
        * id **required** `number`
        * name **required** `string`
        * type **required** `string`
    * description **required** `string`
    * id **required** `number`
    * name **required** `string`
    * scope **required** `object`
      * project **required** `object`
        * id **required** `string`
      * type **required** `string`
    * self **required** `string`

### project.projectIdOrKey.statuses.get
Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.


```js
jira.project.projectIdOrKey.statuses.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `array`
  * items `object`
    * id **required** `string`
    * name **required** `string`
    * self **required** `string`
    * statuses **required** `array`
      * items `object`
        * description **required** `string`
        * iconUrl **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
    * subtask **required** `boolean`

### project.projectIdOrKey.type.newProjectTypeKey.put
Updates the project type.


```js
jira.project.projectIdOrKey.type.newProjectTypeKey.put({
  "newProjectTypeKey": "",
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * newProjectTypeKey **required** `string`: The key of the new project type.
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * assigneeType **required** `string`
  * avatarUrls **required** `object`
    * 16x16 **required** `string`
    * 24x24 **required** `string`
    * 32x32 **required** `string`
    * 48x48 **required** `string`
  * components **required** `array`
    * items `object`
      * assignee `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * assigneeType **required** `string`
      * description **required** `string`
      * id **required** `string`
      * isAssigneeTypeValid **required** `boolean`
      * lead `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * name **required** `string`
      * project **required** `string`
      * projectId **required** `number`
      * realAssignee `object`
        * accountId **required** `string`
        * active **required** `boolean`
        * avatarUrls **required** `object`
          * 16x16 **required** `string`
          * 24x24 **required** `string`
          * 32x32 **required** `string`
          * 48x48 **required** `string`
        * displayName **required** `string`
        * key **required** `string`
        * name **required** `string`
        * self **required** `string`
      * realAssigneeType **required** `string`
      * self **required** `string`
  * description **required** `string`
  * email **required** `string`
  * id **required** `string`
  * issueTypes **required** `array`
    * items `object`
      * avatarId **required** `number`
      * description **required** `string`
      * iconUrl **required** `string`
      * id **required** `string`
      * name **required** `string`
      * scope `object`
        * project **required** `object`
          * id **required** `string`
        * type **required** `string`
      * self **required** `string`
      * subtask **required** `boolean`
  * key **required** `string`
  * lead **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
  * name **required** `string`
  * projectCategory **required** `object`
    * description **required** `string`
    * id **required** `string`
    * name **required** `string`
    * self **required** `string`
  * roles **required** `object`
    * Developers **required** `string`
  * self **required** `string`
  * simplified **required** `boolean`
  * style **required** `string`
  * url **required** `string`
  * versions **required** `array`
    * items `object`

### project.projectIdOrKey.version.get
Returns a paginated representation of all versions existing in a single project. See the Get project versions resource if you want to get a full list of versions without pagination.


```js
jira.project.projectIdOrKey.version.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: issuesstatus, operations, remotelinks): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  * maxResults `integer`: The maximum number of versions to return per page. Max 50.
  * orderBy `string` (values: description, name, releaseDate, sequence, startDate): Order the results by a particular field:
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).
  * query `string`: Filter the results using a literal string. Versions with matching name or description are returned (case insensitive).
  * startAt `integer`: The starting index of the returned list of versions (page offset). The base index is 0.
  * status `string`: A comma separated string used to filter the results by version status.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * nextPage **required** `string`
  * self **required** `string`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * archived **required** `boolean`
      * description **required** `string`
      * id **required** `string`
      * name **required** `string`
      * overdue **required** `boolean`
      * projectId **required** `number`
      * released **required** `boolean`
      * releaseDate **required** `string`
      * self **required** `string`
      * userReleaseDate **required** `string`

### project.projectIdOrKey.versions.get
Returns all versions existing in a single project. The response is not paginated. Use Get project versions paginated if you want to get the versions in a project with pagination.


```js
jira.project.projectIdOrKey.versions.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: operations): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  * projectIdOrKey **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `array`
  * items `object`
    * archived **required** `boolean`
    * description **required** `string`
    * id **required** `string`
    * name **required** `string`
    * overdue **required** `boolean`
    * projectId **required** `number`
    * released **required** `boolean`
    * releaseDate **required** `string`
    * self **required** `string`
    * userReleaseDate **required** `string`

### project.projectKeyOrId.issuesecuritylevelscheme.get
Returns the issue security scheme associated with the project.


```js
jira.project.projectKeyOrId.issuesecuritylevelscheme.get({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * defaultSecurityLevelId **required** `number`
  * description **required** `string`
  * id **required** `number`
  * levels **required** `array`
    * items `object`
      * description **required** `string`
      * id **required** `string`
      * name **required** `string`
      * self **required** `string`
  * name **required** `string`
  * self **required** `string`

### project.projectKeyOrId.notificationscheme.get
Gets a notification scheme associated with the project. See the Get notification scheme resource for more information about notification schemes.


```js
jira.project.projectKeyOrId.notificationscheme.get({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: all, field, group, notificationSchemeEvents, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * description **required** `string`
  * expand **required** `string`
  * id **required** `number`
  * name **required** `string`
  * notificationSchemeEvents **required** `array`
    * items `object`
      * event `object`
        * description **required** `string`
        * id **required** `number`
        * name **required** `string`
      * notifications `array`
        * items `object`
          * expand **required** `string`
          * group `object`
          * id **required** `number`
          * notificationType **required** `string`
          * parameter **required** `string`
  * self **required** `string`

### project.projectKeyOrId.permissionscheme.get
Gets the permission scheme associated with the project.


```js
jira.project.projectKeyOrId.permissionscheme.get({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: all, field, group, permissions, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * self **required** `string`

### project.projectKeyOrId.permissionscheme.put
Associates a permission scheme with a particular project. See Managing project permissions for more information about permission schemes.


```js
jira.project.projectKeyOrId.permissionscheme.put({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * id `integer`: The ID of the permission scheme to associate with the project. Use the Get all permission schemes resource to get a list of permission scheme IDs.
  * expand `string` (values: all, field, group, permissions, projectRole, user): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * self **required** `string`

### project.projectKeyOrId.securitylevel.get
Returns all issue security levels for the project that the currently authenticated user has access to. If the user does not have permission to see an issue security level, then that level is not returned. If the user lacks the Set Issue Security permission, then an empty list is returned.


```js
jira.project.projectKeyOrId.securitylevel.get({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * projectKeyOrId **required** `string`: The project ID or project key (case sensitive).

#### Output
* output `object`
  * levels **required** `array`
    * items `object`
      * description **required** `string`
      * id **required** `string`
      * name **required** `string`
      * self **required** `string`

### project.search.get
Returns projects visible to the currently logged in user. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, then all projects visible to anonymous users are returned.


```js
jira.project.search.get({}, context)
```

#### Input
* input `object`
  * action `string`: Filter results by projects for which the calling user has permission to perform the given action. The view action corresponds with the Browse projects project permission, and the edit action corresponds with Administer project permissions.
  * categoryId `integer`: The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
  * expand `string` (values: description, projectKeys, lead, issueTypes, url): Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  * maxResults `integer`: The maximum number of items to return per page. Max 50.
  * orderBy `string` (values: category, key, name, owner): Order the results by a particular field. If the orderBy field is not set, then projects are listed in ascending order by project key:
  * query `string`: Filter the results using a literal string. Projects with a matching key or name are returned (case insensitive).
  * startAt `integer`: The starting index of the first item returned in the page of results (page offset). The base index is 0.
  * typeKey `string`: Orders results by the project type. This parameter accepts multiple values separated by a comma. Valid values are business, service_desk, and software.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * nextPage **required** `string`
  * self **required** `string`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * avatarUrls `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * id **required** `string`
      * key **required** `string`
      * name **required** `string`
      * projectCategory `object`
        * description **required** `string`
        * id **required** `string`
        * name **required** `string`
        * self **required** `string`
      * self **required** `string`
      * simplified **required** `boolean`
      * style **required** `string`

### project.type.get
Returns all project types, whether or not the instance has a valid license for each type.


```js
jira.project.type.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * color **required** `string`
    * descriptionI18nKey **required** `string`
    * formattedKey **required** `string`
    * icon **required** `string`
    * key **required** `string`

### project.type.projectTypeKey.get
Returns a project type.


```js
jira.project.type.projectTypeKey.get({
  "projectTypeKey": ""
}, context)
```

#### Input
* input `object`
  * projectTypeKey **required** `string`: The key of the project type.

#### Output
* output `object`
  * color **required** `string`
  * descriptionI18nKey **required** `string`
  * formattedKey **required** `string`
  * icon **required** `string`
  * key **required** `string`

### project.type.projectTypeKey.accessible.get
Returns a project type if it is accessible to the logged in user.


```js
jira.project.type.projectTypeKey.accessible.get({
  "projectTypeKey": ""
}, context)
```

#### Input
* input `object`
  * projectTypeKey **required** `string`: The key of the project type.

#### Output
* output `object`
  * color **required** `string`
  * descriptionI18nKey **required** `string`
  * formattedKey **required** `string`
  * icon **required** `string`
  * key **required** `string`

### projectCategory.get
Returns all project categories.


```js
jira.projectCategory.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * description **required** `string`
    * id **required** `string`
    * name **required** `string`
    * self **required** `string`

### projectCategory.post
Creates a project category.


```js
jira.projectCategory.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: The description of the project category. Required on create, optional on update.
    * name `string`: The name of the project category. Required on create, optional on update.

#### Output
* output `object`
  * description **required** `string`
  * id **required** `string`
  * name **required** `string`
  * self **required** `string`

### projectCategory.id.delete
Deletes a project category.


```js
jira.projectCategory.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the project category to delete.

#### Output
*Output schema unknown*

### projectCategory.id.get
Returns a project category.


```js
jira.projectCategory.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project category.

#### Output
* output `object`
  * description **required** `string`
  * id **required** `string`
  * name **required** `string`
  * self **required** `string`

### projectCategory.id.put
Updates a project category.


```js
jira.projectCategory.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: The description of the project category. Required on create, optional on update.
    * name `string`: The name of the project category. Required on create, optional on update.
  * id **required** `integer`

#### Output
* output `object`
  * description **required** `string`
  * id **required** `string`
  * name **required** `string`
  * self **required** `string`

### projectvalidate.key.get
Validates a project key by confirming the key is a valid string and not in use.


```js
jira.projectvalidate.key.get({}, context)
```

#### Input
* input `object`
  * key `string`: The project key.

#### Output
* output `object`
  * errorMessages **required** `array`
    * items `object`
  * errors **required** `object`
    * projectKey **required** `string`

### projectvalidate.validProjectKey.get
Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.


```js
jira.projectvalidate.validProjectKey.get({}, context)
```

#### Input
* input `object`
  * key `string`: The project key.

#### Output
* output `object`
  * 0 **required** `string`
  * 1 **required** `string`
  * 2 **required** `string`
  * 3 **required** `string`

### projectvalidate.validProjectName.get
Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.


```js
jira.projectvalidate.validProjectName.get({}, context)
```

#### Input
* input `object`
  * name `string`: The project name.

#### Output
* output `object`
  * 0 **required** `string`
  * 1 **required** `string`
  * 2 **required** `string`
  * 3 **required** `string`
  * 4 **required** `string`
  * 5 **required** `string`
  * 6 **required** `string`
  * 7 **required** `string`
  * 8 **required** `string`
  * 9 **required** `string`
  * 10 **required** `string`
  * 11 **required** `string`
  * 12 **required** `string`
  * 13 **required** `string`
  * 14 **required** `string`
  * 15 **required** `string`
  * 16 **required** `string`
  * 17 **required** `string`
  * 18 **required** `string`
  * 19 **required** `string`
  * 20 **required** `string`
  * 21 **required** `string`
  * 22 **required** `string`
  * 23 **required** `string`
  * 24 **required** `string`
  * 25 **required** `string`

### resolution.get
Returns a list of all issue resolution values.


```js
jira.resolution.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * description **required** `string`
    * id **required** `string`
    * name **required** `string`
    * self **required** `string`

### resolution.id.get
Returns an issue resolution value.


```js
jira.resolution.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue resolution value.

#### Output
* output `object`
  * description **required** `string`
  * id **required** `string`
  * name **required** `string`
  * self **required** `string`

### role.get
Gets a list of all project roles, complete with project role details and default actors.


```js
jira.role.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * actors **required** `array`
      * items `object`
        * actorGroup `object`
          * displayName **required** `string`
          * name **required** `string`
        * displayName **required** `string`
        * id **required** `number`
        * name **required** `string`
        * type **required** `string`
    * description **required** `string`
    * id **required** `number`
    * name **required** `string`
    * scope **required** `object`
      * project **required** `object`
        * id **required** `string`
      * type **required** `string`
    * self **required** `string`

### role.post
Creates a new project role with no default actors. You can use the Add default actors to project role the project method to add default actors to the project role after creating it.


```js
jira.role.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.
    * name `string`: The name of the project role. Must be unique. Cannot begin or end with whitespace. Max length is 255 characters. Required when creating a project role. Optional when partially updating a project role.

#### Output
* output `object`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * self **required** `string`

### role.id.delete
Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.


```js
jira.role.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role to delete. Use Get all project roles to get a list of project role IDs.
  * swap `integer`: The ID of the project role that will replace the one being deleted.

#### Output
*Output schema unknown*

### role.id.get
Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.


```js
jira.role.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.

#### Output
* output `object`
  * actors **required** `array`
    * items `object`
      * actorGroup `object`
        * displayName **required** `string`
        * name **required** `string`
      * displayName **required** `string`
      * id **required** `number`
      * name **required** `string`
      * type **required** `string`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * scope **required** `object`
    * project **required** `object`
      * id **required** `string`
    * type **required** `string`
  * self **required** `string`

### role.id.post
Update either the project role's name or its description.


```js
jira.role.id.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.
    * name `string`: The name of the project role. Must be unique. Cannot begin or end with whitespace. Max length is 255 characters. Required when creating a project role. Optional when partially updating a project role.
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.

#### Output
* output `object`
  * actors **required** `array`
    * items `object`
      * actorGroup `object`
        * displayName **required** `string`
        * name **required** `string`
      * displayName **required** `string`
      * id **required** `number`
      * name **required** `string`
      * type **required** `string`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * scope **required** `object`
    * project **required** `object`
      * id **required** `string`
    * type **required** `string`
  * self **required** `string`

### role.id.put
Update the project role's name and description. You must include both a name and a description in the request.


```js
jira.role.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.
    * name `string`: The name of the project role. Must be unique. Cannot begin or end with whitespace. Max length is 255 characters. Required when creating a project role. Optional when partially updating a project role.
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.

#### Output
* output `object`
  * actors **required** `array`
    * items `object`
      * actorGroup `object`
        * displayName **required** `string`
        * name **required** `string`
      * displayName **required** `string`
      * id **required** `number`
      * name **required** `string`
      * type **required** `string`
  * description **required** `string`
  * id **required** `number`
  * name **required** `string`
  * scope **required** `object`
    * project **required** `object`
      * id **required** `string`
    * type **required** `string`
  * self **required** `string`

### role.id.actors.delete
Removes default actors from the project role. You may remove either a group or user, but you cannot remove a group and a user in the same request.


```js
jira.role.id.actors.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * group `string`: The group name of the group to be removed as a default actor.
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.
  * user `string`: The user account ID of the user to remove as a default actor.

#### Output
* output `object`
  * actors **required** `array`
    * items `object`
      * actorGroup `object`
        * displayName **required** `string`
        * name **required** `string`
      * displayName **required** `string`
      * id **required** `number`
      * name **required** `string`
      * type **required** `string`

### role.id.actors.get
Returns the default actors for the project role.


```js
jira.role.id.actors.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.

#### Output
* output `object`
  * actors **required** `array`
    * items `object`
      * actorGroup `object`
        * displayName **required** `string`
        * name **required** `string`
      * displayName **required** `string`
      * id **required** `number`
      * name **required** `string`
      * type **required** `string`

### role.id.actors.post
Adds default actors to the given role. You may add either groups or users, but you cannot add groups and users in the same request.


```js
jira.role.id.actors.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * group `array`
      * items `string`
    * user `array`: The user account ID of the user to add as a default actor. When not in GDPR-strict-mode this may be user key instead, however this behaviour is deprecated. You can add multiple users separated by a comma (for example, "user":["12345678-9abc-def1-2345-6789abcdef12", "abcdef12-3456-789a-bcde-f123456789ab"]).
      * items `string`
  * id **required** `integer`: The ID of the project role. Use Get all project roles to get a list of project role IDs.

#### Output
* output `object`
  * actors **required** `array`
    * items `object`
      * actorGroup `object`
        * displayName **required** `string`
        * name **required** `string`
      * displayName **required** `string`
      * id **required** `number`
      * name **required** `string`
      * type **required** `string`

### screens.get
Returns all screens.


```js
jira.screens.get({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 100.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).

#### Output
*Output schema unknown*

### screens.screenId.availableFields.get
Returns the fields that can be added to a tab on a screen.


```js
jira.screens.screenId.availableFields.get({
  "screenId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: The ID of the screen.

#### Output
*Output schema unknown*

### screens.screenId.tabs.get
Returns the list of tabs for a screen.


```js
jira.screens.screenId.tabs.get({
  "screenId": 0
}, context)
```

#### Input
* input `object`
  * projectKey `string`: The key of the project.
  * screenId **required** `integer`: The ID of the screen.

#### Output
*Output schema unknown*

### screens.screenId.tabs.post
Creates a tab for a screen.


```js
jira.screens.screenId.tabs.post({
  "screenId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * name `string`: The name of the screen tab. Required on create and update. Maximum length is 255 characters.
  * screenId **required** `integer`: The ID of the screen.

#### Output
* output `object`
  * id **required** `number`
  * name **required** `string`

### screens.screenId.tabs.tabId.delete
Deletes a screen tab.


```js
jira.screens.screenId.tabs.tabId.delete({
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

### screens.screenId.tabs.tabId.put
Updates the name of a screen tab.


```js
jira.screens.screenId.tabs.tabId.put({
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * name `string`: The name of the screen tab. Required on create and update. Maximum length is 255 characters.
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.

#### Output
* output `object`
  * id **required** `number`
  * name **required** `string`

### screens.screenId.tabs.tabId.fields.get
Returns all fields for a screen tab.


```js
jira.screens.screenId.tabs.tabId.fields.get({
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * projectKey `string`: The key of the project.
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.

#### Output
*Output schema unknown*

### screens.screenId.tabs.tabId.fields.post
Adds a field to a screen tab.


```js
jira.screens.screenId.tabs.tabId.fields.post({
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * fieldId `string`: The ID of the field to add.
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.

#### Output
* output `object`
  * id **required** `string`
  * name **required** `string`

### screens.screenId.tabs.tabId.fields.id.delete
Removes a field from a screen tab.


```js
jira.screens.screenId.tabs.tabId.fields.id.delete({
  "id": "",
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the field.
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.

#### Output
*Output schema unknown*

### screens.screenId.tabs.tabId.fields.id.move.post
Moves a screen tab field.


```js
jira.screens.screenId.tabs.tabId.fields.id.move.post({
  "id": "",
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * after `string`: The ID of the screen tab field after which to place the moved screen tab field. Required if position isn't provided.
    * position `string` (values: Earlier, Later, First, Last): The named position to which the screen tab field should be moved. Required if after isn't provided.
  * id **required** `string`: The ID of the field.
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.

#### Output
*Output schema unknown*

### screens.screenId.tabs.tabId.move.pos.post
Moves a screen tab.


```js
jira.screens.screenId.tabs.tabId.move.pos.post({
  "pos": 0,
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * pos **required** `integer`: The position of tab. The base index is 0.
  * screenId **required** `integer`: The ID of the screen.
  * tabId **required** `integer`: The ID of the screen tab.

#### Output
*Output schema unknown*

### screens.addToDefault.fieldId.post
Adds a field to the default tab of the default screen.


```js
jira.screens.addToDefault.fieldId.post({
  "fieldId": ""
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The ID of the field.

#### Output
*Output schema unknown*

### search.get
Searches for issues using JQL. Permissions required: Permission to access Jira.


```js
jira.search.get({}, context)
```

#### Input
* input `object`
  * expand `string` (values: renderedFields, names, schema, transitions, operations, editmeta, changelog, versionedRepresentations, fields): Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma:
  * fields `array` (values: *all, *navigable, summary,comment, -description, *all,-comment): A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values:
  * fieldsByKeys `boolean`: Reference fields by their key (rather than ID).
  * jql `string`: The JQL that defines the search. If no JQL expression is provided, all issues are returned. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 100.
  * properties `array`: A comma-separated list of up to 5 issue properties to include in the results.
  * startAt `integer`: The index of the first item to return in the page of results (page offset).
  * validateQuery `string` (values: strict, warn, none, true, false): Determines how to validate the JQL query and treat the validation results. Supported values are:

#### Output
* output `object`
  * expand **required** `string`
  * issues **required** `array`
    * items `object`
      * expand **required** `string`
      * id **required** `string`
      * key **required** `string`
      * self **required** `string`
  * maxResults **required** `number`
  * startAt **required** `number`
  * total **required** `number`
  * warningMessages **required** `array`
    * items `object`

### search.post
Searches for issues using JQL. Permissions required: Permission to access Jira.


```js
jira.search.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * expand `array`: Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma:
      * items `string`
    * fields `array`: A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values
      * items `string`
    * fieldsByKeys `boolean`: Reference fields by their key (rather than ID). The default is false.
    * jql `string`: A JQL expression.
    * maxResults `integer`: The maximum number of items to return per page. The default is 50 and maximum is 100.
    * properties `array`: A comma-separated list of up to 5 issue properties to include in the results.
      * items `string`
    * startAt `integer`: The index of the first item to return in the page of results (page offset). The base index is 0.
    * validateQuery `string` (values: strict, warn, none, true, false): Determines how to validate the JQL query and treat the validation results. Supported values:

#### Output
* output `object`
  * expand **required** `string`
  * issues **required** `array`
    * items `object`
      * expand **required** `string`
      * id **required** `string`
      * key **required** `string`
      * self **required** `string`
  * maxResults **required** `number`
  * startAt **required** `number`
  * total **required** `number`
  * warningMessages **required** `array`
    * items `object`

### securitylevel.id.get
Returns details of an issue security level.


```js
jira.securitylevel.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the issue security level.

#### Output
* output `object`
  * description **required** `string`
  * id **required** `string`
  * name **required** `string`
  * self **required** `string`

### serverInfo.get
Returns information about the Jira instance.


```js
jira.serverInfo.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * baseUrl **required** `string`
  * buildDate **required** `string`
  * buildNumber **required** `number`
  * scmInfo **required** `string`
  * serverTime **required** `string`
  * serverTitle **required** `string`
  * version **required** `string`
  * versionNumbers **required** `array`
    * items `object`

### settings.columns.get
Returns the default issue navigator columns.


```js
jira.settings.columns.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * label **required** `string`
    * value **required** `string`

### settings.columns.put
Sets the default issue navigator columns.


```js
jira.settings.columns.put(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### status.get
Returns a list of all statuses associated with workflows.


```js
jira.status.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * description **required** `string`
    * iconUrl **required** `string`
    * id **required** `string`
    * name **required** `string`
    * self **required** `string`
    * statusCategory **required** `object`
      * colorName **required** `string`
      * id **required** `number`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`

### status.idOrName.get
Returns a status. The status must be associated with a workflow to be returned.


```js
jira.status.idOrName.get({
  "idOrName": ""
}, context)
```

#### Input
* input `object`
  * idOrName **required** `string`: The ID or name of the status.

#### Output
* output `object`
  * description **required** `string`
  * iconUrl **required** `string`
  * id **required** `string`
  * name **required** `string`
  * self **required** `string`
  * statusCategory **required** `object`
    * colorName **required** `string`
    * id **required** `number`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`

### statuscategory.get
Returns a list of all status categories.


```js
jira.statuscategory.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * colorName **required** `string`
    * id **required** `number`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`

### statuscategory.idOrKey.get
Returns a status category. Status categories provided a mechanism for categorizing statuses.


```js
jira.statuscategory.idOrKey.get({
  "idOrKey": ""
}, context)
```

#### Input
* input `object`
  * idOrKey **required** `string`: The ID or key of the status category.

#### Output
* output `object`
  * colorName **required** `string`
  * id **required** `number`
  * key **required** `string`
  * name **required** `string`
  * self **required** `string`

### task.taskId.get
Returns the status of a long-running asynchronous task.


```js
jira.task.taskId.get({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`: The ID of the task.

#### Output
* output `object`
  * description **required** `string`
  * elapsedRuntime **required** `number`
  * finished **required** `number`
  * id **required** `string`
  * lastUpdate **required** `number`
  * progress **required** `number`
  * result **required** `string`
  * self **required** `string`
  * started **required** `number`
  * status **required** `string`
  * submitted **required** `number`
  * submittedBy **required** `number`

### task.taskId.cancel.post
Cancels a task.


```js
jira.task.taskId.cancel.post({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`: The ID of the task.

#### Output
*Output schema unknown*

### universal_avatar.type.type.owner.entityId.get
Returns the system and custom avatars for a project or issue type.


```js
jira.universal_avatar.type.type.owner.entityId.get({
  "entityId": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * entityId **required** `string`: The ID of the entity item.
  * type **required** `string`: The type of the entity. Valid values are project and issuetype.

#### Output
* output `object`
  * custom **required** `array`
    * items `object`
      * id **required** `string`
      * isDeletable **required** `boolean`
      * isSelected **required** `boolean`
      * isSystemAvatar **required** `boolean`
      * urls `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
  * system **required** `array`
    * items `object`
      * id **required** `string`
      * isDeletable **required** `boolean`
      * isSelected **required** `boolean`
      * isSystemAvatar **required** `boolean`
      * urls `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`

### universal_avatar.type.type.owner.entityId.post
Loads a custom avatar for a project or issue type.


```js
jira.universal_avatar.type.type.owner.entityId.post({
  "entityId": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * entityId **required** `string`: The ID of the entity item.
  * size `integer`: The length of each side of the crop region.
  * type **required** `string`: The type of the entity. Valid values are project and issuetype.
  * x `integer`: The X coordinate of the top-left corner of the crop region.
  * y `integer`: The Y coordinate of the top-left corner of the crop region.

#### Output
* output `object`
  * id **required** `string`
  * isDeletable **required** `boolean`
  * isSelected **required** `boolean`
  * isSystemAvatar **required** `boolean`
  * urls **required** `object`
    * 16x16 **required** `string`
    * 24x24 **required** `string`
    * 32x32 **required** `string`
    * 48x48 **required** `string`

### universal_avatar.type.type.owner.owningObjectId.avatar.id.delete
Deletes an avatar from a project or issue type.


```js
jira.universal_avatar.type.type.owner.owningObjectId.avatar.id.delete({
  "id": 0,
  "owningObjectId": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the avatar.
  * owningObjectId **required** `string`: The ID of the entity item.
  * type **required** `string`: The type of the entity. Valid values are project and issuetype.

#### Output
*Output schema unknown*

### user.delete
Deletes a user. Permissions required: Site administration (i.e., member of the site-admin group).


```js
jira.user.delete({}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
  * key `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
  * username `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.

#### Output
*Output schema unknown*

### user.get
Returns a user. Permissions required: None.


```js
jira.user.get({}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
  * expand `string` (values: groups, applicationRoles): Use expand to include additional information about users in the response. This parameter accepts multiple values separated by a comma:
  * key `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
  * username `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.

#### Output
* output `object`
  * accountId **required** `string`
  * active **required** `boolean`
  * applicationRoles **required** `object`
    * items **required** `array`
      * items `object`
    * size **required** `number`
  * avatarUrls **required** `object`
    * 16x16 **required** `string`
    * 24x24 **required** `string`
    * 32x32 **required** `string`
    * 48x48 **required** `string`
  * displayName **required** `string`
  * emailAddress **required** `string`
  * groups **required** `object`
    * items **required** `array`
      * items `object`
    * size **required** `number`
  * key **required** `string`
  * name **required** `string`
  * self **required** `string`
  * timeZone **required** `string`

### user.post
Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated. The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting password from the request, include "notification": "true" to ensure the user is sent an email advising them that their account has been created. This email includes a link for the user to set their password. If the notification isn't sent for a generated password, the user will need to be sent a reset password request from Jira. Permissions required: Administer Jira global permission


```js
jira.user.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * applicationKeys `array`: Deprecated, do not use.
      * items `string`
    * displayName `string`: The display name for the user. Required.
    * emailAddress `string`: The email address for the user. Required.
    * key `string`: The key for the user. Read-only. This property has been deprecated due to privacy changes.See the migration guide for details.
    * name `string`: The username for the user. This property has been deprecated due to privacy changes. See the migration guide for details.
    * notification `string`: Sends the user an email confirmation that they have been added to Jira. Default is false.
    * password `string`: A password for the user. If a password is not set, a random password is generated.

#### Output
* output `object`
  * accountId **required** `string`
  * active **required** `boolean`
  * applicationRoles **required** `object`
    * items **required** `array`
      * items `object`
    * size **required** `number`
  * avatarUrls **required** `object`
    * 16x16 **required** `string`
    * 24x24 **required** `string`
    * 32x32 **required** `string`
    * 48x48 **required** `string`
  * displayName **required** `string`
  * emailAddress **required** `string`
  * groups **required** `object`
    * items **required** `array`
      * items `object`
    * size **required** `number`
  * key **required** `string`
  * name **required** `string`
  * self **required** `string`
  * timeZone **required** `string`

### user.assignable.multiProjectSearch.get
Returns a list of users who fulfill both of these criteria:


```js
jira.user.assignable.multiProjectSearch.get({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 1000.
  * projectKeys `string`: A comma-separated list of project keys (case sensitive).
  * query `string`: A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * username `string`: This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.

#### Output
* output `array`
  * items `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`

### user.assignable.search.get
Returns a list of users that can be assigned to an issue. Use this method to find the list of users who can be assigned to:


```js
jira.user.assignable.search.get({}, context)
```

#### Input
* input `object`
  * actionDescriptorId `integer`: The ID of the transition.
  * issueKey `string`: The key of the issue. Required, unless project is specified.
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 1000.
  * project `string`: The project ID or project key (case sensitive). Required, unless issueKey is specified.
  * query `string`: A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * username `string`: This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.

#### Output
* output `object`
  * accountId **required** `string`
  * active **required** `boolean`
  * applicationRoles **required** `object`
    * items **required** `array`
      * items `object`
    * size **required** `number`
  * avatarUrls **required** `object`
    * 16x16 **required** `string`
    * 24x24 **required** `string`
    * 32x32 **required** `string`
    * 48x48 **required** `string`
  * displayName **required** `string`
  * emailAddress **required** `string`
  * groups **required** `object`
    * items **required** `array`
      * items `object`
    * size **required** `number`
  * key **required** `string`
  * name **required** `string`
  * self **required** `string`
  * timeZone **required** `string`

### user.bulk.get
Returns details of users specified in a list of usernames or keys. Permissions required: Administer Jira global permission. Users with permission to access Jira can call this method, but empty search results are returned.


```js
jira.user.bulk.get({}, context)
```

#### Input
* input `object`
  * key `array`: Comma-separated list of user keys. Required if username isn't provided.
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 200.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * username `array`: Comma-separated list of usernames. Required if key isn't provided.

#### Output
* output `object`
  * isLast **required** `boolean`
  * maxResults **required** `number`
  * startAt **required** `number`
  * total **required** `number`
  * values **required** `array`
    * items `object`
      * accountId **required** `string`
      * active **required** `boolean`
      * applicationRoles `object`
        * items **required** `array`
          * items `object`
        * size **required** `number`
      * avatarUrls `object`
        * 16x16 **required** `string`
        * 24x24 **required** `string`
        * 32x32 **required** `string`
        * 48x48 **required** `string`
      * displayName **required** `string`
      * emailAddress **required** `string`
      * groups `object`
        * items **required** `array`
          * items `object`
        * size **required** `number`
      * key **required** `string`
      * name **required** `string`
      * self **required** `string`
      * timeZone **required** `string`

### user.columns.delete
Resets the default issue table columns for the user to the system default. If a username is not passed, the calling user's default columns are reset. Permissions required:


```js
jira.user.columns.delete({}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
  * username `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.

#### Output
*Output schema unknown*

### user.columns.get
Returns the default issue table columns for the user. If a username is not passed in the request, the calling user's details are returned. Permissions required:


```js
jira.user.columns.get({}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
  * username `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.

#### Output
*Output schema unknown*

### user.columns.put
Sets the default issue table columns for the user. If a username is not passed, the calling user's default columns are set. If no column details are sent, then all default columns are removed. The parameters for this resource are expressed as HTML form data. For example, in curl: curl -X PUT -d username=<username> -d columns=summary -d columns=description <url> Permissions required:


```js
jira.user.columns.put({}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.

#### Output
*Output schema unknown*

### user.groups.get
Returns the groups to which a user belongs. Permissions required: Browse users and groups global permission.


```js
jira.user.groups.get({}, context)
```

#### Input
* input `object`
  * accountId `string`: The account ID of the user.
  * key `string`: The key of the user.
  * username `string`: The username of the user. Deprecated in favour of accountId.

#### Output
* output `object`
  * name **required** `string`
  * self **required** `string`

### user.permission.search.get
Returns a list of users who fulfill both of these criteria:


```js
jira.user.permission.search.get({}, context)
```

#### Input
* input `object`
  * issueKey `string`: The issue key for the issue.
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 1000.
  * permissions `string`: A comma-separated list of permissions. The valid permissions are:
  * projectKey `string`: The project key for the project (case sensitive).
  * query `string`: A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * username `string`: This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.

#### Output
* output `array`
  * items `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`

### user.picker.get
Returns a list of users whose attributes match the query term. The returned object includes the html field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but will only get search results for an exact name match.


```js
jira.user.picker.get({}, context)
```

#### Input
* input `object`
  * exclude `array`: This parameter has been deprecated due to privacy changes. Use excludeAccountIds instead. See the migration guide for details. A comma-separated list of usernames to exclude from the search results.
  * excludeAccountIds `array`: A comma-separated list of account IDs to exclude from the search results.
  * maxResults `integer`: The maximum number of items to return. Maximum is 1000. The total number of matched users is returned in total.
  * query `string`: A search input that is matched against appropriate user attributes to find relevant users.
  * showAvatar `boolean`: Include the URI to the user's avatar.

#### Output
* output `object`
  * header **required** `string`
  * total **required** `number`
  * users **required** `array`
    * items `object`
      * accountId **required** `string`
      * avatarUrl **required** `string`
      * displayName **required** `string`
      * html **required** `string`
      * key **required** `string`
      * name **required** `string`

### user.properties.get
Returns the keys of all properties for a user. Permissions required:


```js
jira.user.properties.get({}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
  * userKey `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
  * username `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.

#### Output
* output `object`
  * keys **required** `array`
    * items `object`
      * key **required** `string`
      * self **required** `string`

### user.properties.propertyKey.delete
Deletes a property from a user. Permissions required:


```js
jira.user.properties.propertyKey.delete({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
  * propertyKey **required** `string`: The key of the user's property.
  * userKey `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
  * username `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.

#### Output
*Output schema unknown*

### user.properties.propertyKey.get
Returns the value of a user's property. If no property key is provided Get user property keys is called. Permissions required:


```js
jira.user.properties.propertyKey.get({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
  * propertyKey **required** `string`: The key of the user's property.
  * userKey `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
  * username `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.

#### Output
* output `object`
  * key **required** `string`
  * value **required** `object`
    * stride.conversation.id **required** `string`
    * support.time **required** `string`

### user.properties.propertyKey.put
Sets the value of a user's property. Use this resource to store custom data against a user. Permissions required:


```js
jira.user.properties.propertyKey.put({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * accountId `string`: The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
  * propertyKey **required** `string`: The key of the user's property. The maximum length of the key is 255 bytes.
  * userKey `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
  * username `string`: This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.

#### Output
*Output schema unknown*

### user.search.get
Returns a list of users that match the search string and property. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but empty search results are returned.


```js
jira.user.search.get({}, context)
```

#### Input
* input `object`
  * includeActive `boolean`: Include active users.
  * includeInactive `boolean`: Include inactive users.
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 1000.
  * property `string`: A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of nested from {"something":{"nested":1,"other":2}} use thepropertykey.something.nested=1.
  * query `string`: A query string that is matched against user attributes (key, name, displayName, and emailAddress) to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * username `string`: This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.

#### Output
* output `array`
  * items `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`

### user.search.query.get
Finds users using a structured query and returns user details. Permissions required: Browse users and groups global permission. The available queries statements are:


```js
jira.user.search.query.get({}, context)
```

#### Input
* input `object`
  * includeInactive `boolean`: Include inactive users in the results.
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 1000.
  * query `string`: The search query.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).

#### Output
*Output schema unknown*

### user.search.query.key.get
Finds users using a structured query and returns a list of user keys. Permissions required: Browse users and groups global permission. The available query statements are:


```js
jira.user.search.query.key.get({}, context)
```

#### Input
* input `object`
  * includeInactive `boolean`: Include inactive users in the results.
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 1000.
  * query `string`: The search query.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).

#### Output
*Output schema unknown*

### user.viewissue.search.get
Returns a list of users who fulfill both of these criteria:


```js
jira.user.viewissue.search.get({}, context)
```

#### Input
* input `object`
  * issueKey `string`: The issue key for the issue. Required, unless projectKey is specified.
  * maxResults `integer`: The maximum number of items to return per page. Maximum is 1000.
  * projectKey `string`: The project key for the project (case sensitive). Required, unless issueKey is specified.
  * query `string`: A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
  * startAt `integer`: The index of the first item to return in a page of results (page offset).
  * username `string`: This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.

#### Output
* output `array`
  * items `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`

### version.post
Creates a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.


```js
jira.version.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * archived `boolean`: Indicates that the version is archived. Optional when creating or updating a version.
    * description `string`: The description of the version. Optional when creating or updating a version.
    * issuesStatusForFixVersion `object`
    * moveUnfixedIssuesTo `string`: The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
    * name `string`: The unique name of the version. Required when creating a version. Optional when updating a version. Maximum length 255 chars.
    * operations `array`: If the expand option operations is used, returns the list of operations available for this version. Read only.
      * items `object`
    * project `string`: Deprecated. Use projectId.
    * projectId `integer`: The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
    * released `boolean`: Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
    * releaseDate `string`: The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
    * remotelinks `array`: If the expand option remotelinks is used, returns the list of remote links stored against this version. Read only.
      * items `object`
    * startDate `string`: The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.

#### Output
* output `object`
  * archived **required** `boolean`
  * description **required** `string`
  * name **required** `string`
  * project **required** `string`
  * projectId **required** `number`
  * released **required** `boolean`
  * releaseDate **required** `string`
  * userReleaseDate **required** `string`

### version.id.delete
Deletes a project version. Deprecated, use Delete and replace version that supports swapping version values in custom fields, in addition to the swapping for fixVersion and affectedVersion provided in this resource. Alternative versions can be provided to update issues that use the deleted version in fixVersion or affectedVersion. If alternatives are not provided, occurrences of fixVersion and affectedVersion that contain the deleted version are cleared. Permissions required: Administer Jira global permission or Administer Projects project permission.


```js
jira.version.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version.
  * moveAffectedIssuesTo `string`: The ID of the version to update affectedVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
  * moveFixIssuesTo `string`: The ID of the version to update fixVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.

#### Output
*Output schema unknown*

### version.id.get
Returns a project version. Permissions required: Browse projects project permission


```js
jira.version.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `string` (values: operations, remotelinks, issuesstatus): Use expand to include additional information about version in the response. This parameter accepts multiple values separated by a comma:
  * id **required** `string`: The ID of the version.

#### Output
* output `object`
  * archived **required** `boolean`
  * description **required** `string`
  * id **required** `string`
  * name **required** `string`
  * overdue **required** `boolean`
  * projectId **required** `number`
  * released **required** `boolean`
  * releaseDate **required** `string`
  * self **required** `string`
  * userReleaseDate **required** `string`

### version.id.put
Modifies a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.


```js
jira.version.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * archived `boolean`: Indicates that the version is archived. Optional when creating or updating a version.
    * description `string`: The description of the version. Optional when creating or updating a version.
    * issuesStatusForFixVersion `object`
    * moveUnfixedIssuesTo `string`: The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
    * name `string`: The unique name of the version. Required when creating a version. Optional when updating a version. Maximum length 255 chars.
    * operations `array`: If the expand option operations is used, returns the list of operations available for this version. Read only.
      * items `object`
    * project `string`: Deprecated. Use projectId.
    * projectId `integer`: The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
    * released `boolean`: Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
    * releaseDate `string`: The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
    * remotelinks `array`: If the expand option remotelinks is used, returns the list of remote links stored against this version. Read only.
      * items `object`
    * startDate `string`: The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
  * id **required** `string`: The ID of the version.

#### Output
*Output schema unknown*

### version.id.mergeto.moveIssuesTo.put
Merges two project versions. The merge is completed by deleting the version specified in id and replacing any occurrences of its ID in fixVersion with the version ID specified in moveIssuesTo. Consider using Delete and replace version instead. This resource supports swapping version values in fixVersion, affectedVersion, and custom fields. Permissions required: Administer Jira global permission or Administer Projects project permission.


```js
jira.version.id.mergeto.moveIssuesTo.put({
  "id": "",
  "moveIssuesTo": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version to delete.
  * moveIssuesTo **required** `string`: The ID of the version to merge into.

#### Output
*Output schema unknown*

### version.id.move.post
Modifies the version's sequence within the project, which affects the display order of the versions in Jira. Permissions required: Administer Jira global permission or Administer Projects project permission.


```js
jira.version.id.move.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * after `string`: The URI (self link) of the version after which to place the moved version. Cannot be used with position.
    * position `string` (values: Earlier, Later, First, Last): An absolute position in which to place the moved version. Cannot be used with after.
  * id **required** `string`: The ID of the version to be moved.

#### Output
* output `object`
  * archived **required** `boolean`
  * description **required** `string`
  * id **required** `string`
  * name **required** `string`
  * overdue **required** `boolean`
  * projectId **required** `number`
  * released **required** `boolean`
  * releaseDate **required** `string`
  * self **required** `string`
  * userReleaseDate **required** `string`

### version.id.relatedIssueCounts.get
Returns the following counts for a version:


```js
jira.version.id.relatedIssueCounts.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version.

#### Output
* output `object`
  * customFieldUsage **required** `array`
    * items `object`
      * customFieldId **required** `number`
      * fieldName **required** `string`
      * issueCountWithVersionInCustomField **required** `number`
  * issueCountWithCustomFieldsShowingVersion **required** `number`
  * issuesAffectedCount **required** `number`
  * issuesFixedCount **required** `number`
  * self **required** `string`

### version.id.removeAndSwap.post
Deletes a project version. Permissions required: Administer Jira global permission or Administer Projects project permission. Alternative versions can be provided to update issues that use the deleted version in fixVersion, affectedVersion, or any version picker custom fields. If alternatives are not provided, occurrences of fixVersion, affectedVersion, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.


```js
jira.version.id.removeAndSwap.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * customFieldReplacementList `array`: A JSON array of custom field IDs (customFieldId) and version IDs (moveTo) to update when the fields contain the deleted version.
      * items `object`
    * moveAffectedIssuesTo `integer`: The ID of the version to update affectedVersion to when the field contains the deleted version.
    * moveFixIssuesTo `integer`: The ID of the version to update fixVersion to when the field contains the deleted version.
  * id **required** `string`: The ID of the version.

#### Output
*Output schema unknown*

### version.id.unresolvedIssueCount.get
Returns counts of the issues and unresolved issues for the project version. Permissions required: Browse projects project permission


```js
jira.version.id.unresolvedIssueCount.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the version.

#### Output
* output `object`
  * issuesCount **required** `number`
  * issuesUnresolvedCount **required** `number`
  * self **required** `string`

### version.versionId.remotelink.delete
The version for which to delete ALL existing remote version links


```js
jira.version.versionId.remotelink.delete({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: The version for which to delete ALL existing remote version links

#### Output
*Output schema unknown*

### version.versionId.remotelink.get
a String containing the version ID


```js
jira.version.versionId.remotelink.get({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: a String containing the version ID

#### Output
* output `object`
  * links **required** `array`
    * items `object`
      * link `object`
        * colors **required** `array`
          * items `object`
        * globalId **required** `string`
        * myCustomLinkProperty **required** `boolean`
      * name **required** `string`
      * self **required** `string`

### version.versionId.remotelink.post
Create a remote version link via POST. The link's global ID will be taken from the JSON payload if provided; otherwise, it will be generated.


```js
jira.version.versionId.remotelink.post({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`

#### Output
*Output schema unknown*

### version.versionId.remotelink.globalId.delete
The version ID of the remote link


```js
jira.version.versionId.remotelink.globalId.delete({
  "globalId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * globalId **required** `string`: The global ID of the remote link
  * versionId **required** `string`: The version ID of the remote link

#### Output
*Output schema unknown*

### version.versionId.remotelink.globalId.get
A REST sub-resource representing a remote version link


```js
jira.version.versionId.remotelink.globalId.get({
  "globalId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * globalId **required** `string`: The id of the remote issue link to be returned. If {@code null} (not provided) all remote links for the issue are returned.
  * versionId **required** `string`: a String containing the version id

#### Output
* output `object`
  * link **required** `object`
    * colors **required** `array`
      * items `object`
    * globalId **required** `string`
    * myCustomLinkProperty **required** `boolean`
  * name **required** `string`
  * self **required** `string`

### version.versionId.remotelink.globalId.post



```js
jira.version.versionId.remotelink.globalId.post({
  "globalId": "",
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * globalId **required** `string`
  * versionId **required** `string`

#### Output
*Output schema unknown*

### version.remotelink.get
the global ID of the remote resource that is linked to the versions


```js
jira.version.remotelink.get({}, context)
```

#### Input
* input `object`
  * globalId `string`: the global ID of the remote resource that is linked to the versions

#### Output
* output `object`
  * links **required** `array`
    * items `object`
      * link `object`
        * colors **required** `array`
          * items `object`
        * globalId **required** `string`
        * myCustomLinkProperty **required** `boolean`
      * name **required** `string`
      * self **required** `string`

### workflow.get
Returns all workflows in Jira or a single workflow.


```js
jira.workflow.get({}, context)
```

#### Input
* input `object`
  * workflowName `string`: The name of the workflow to be returned. Only one workflow can be specified.

#### Output
* output `array`
  * items `object`
    * default **required** `boolean`
    * description **required** `string`
    * lastModifiedDate **required** `string`
    * lastModifiedUser **required** `string`
    * lastModifiedUserAccountId **required** `string`
    * name **required** `string`
    * steps **required** `number`

### workflow.transitions.transitionId.properties.delete
Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


```js
jira.workflow.transitions.transitionId.properties.delete({
  "transitionId": 0
}, context)
```

#### Input
* input `object`
  * key `string`: The name of the transition property to delete, also known as the name of the property.
  * transitionId **required** `integer`: The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
  * workflowMode `string`: The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
  * workflowName `string`: The name of the workflow that the transition belongs to.

#### Output
*Output schema unknown*

### workflow.transitions.transitionId.properties.get
Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


```js
jira.workflow.transitions.transitionId.properties.get({
  "transitionId": 0
}, context)
```

#### Input
* input `object`
  * includeReservedKeys `boolean`: Some properties with keys that have the jira. prefix are reserved, i.e., not editable. To include these properties in the results, set this parameter to true.
  * key `string`: The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
  * transitionId **required** `integer`: The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
  * workflowMode `string`: The workflow status. Set to live for active and inactive workflows, or draft for draft workflows.
  * workflowName `string`: The name of the workflow that the transition belongs to.

#### Output
* output `array`
  * items `object`
    * id **required** `string`
    * key **required** `string`
    * value **required** `string`

### workflow.transitions.transitionId.properties.post
Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


```js
jira.workflow.transitions.transitionId.properties.post({
  "transitionId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * key `string`: The key of the transition property. Also known as the name of the transition property.
    * value `string`: The value of the transition property.
  * key `string`: The key of the property being added, also known as the name of the property. Set this to the same value as the key defined in the request body.
  * transitionId **required** `integer`: The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
  * workflowMode `string`: The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
  * workflowName `string`: The name of the workflow that the transition belongs to.

#### Output
* output `object`
  * id **required** `string`
  * key **required** `string`
  * value **required** `string`

### workflow.transitions.transitionId.properties.put
Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


```js
jira.workflow.transitions.transitionId.properties.put({
  "transitionId": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * key `string`: The key of the transition property. Also known as the name of the transition property.
    * value `string`: The value of the transition property.
  * key `string`: The key of the property being updated, also known as the name of the property. Set this to the same value as the key defined in the request body.
  * transitionId **required** `integer`: The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
  * workflowMode `string`: The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
  * workflowName `string`: The name of the workflow that the transition belongs to.

#### Output
* output `object`
  * id **required** `string`
  * key **required** `string`
  * value **required** `string`

### workflowscheme.post
Creates a workflow scheme.


```js
jira.workflowscheme.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * defaultWorkflow `string`: The name of the default workflow for the workflow scheme. The default workflow has All Unassigned Issue Types assigned to it in Jira. If defaultWorkflow is not specified when creating a workflow scheme, it is set to Jira Workflow (jira).
    * description `string`: The description of the workflow scheme.
    * issueTypeMappings `object`: The issue type-project mappings, where each mapping is an issue type ID and project name pair. Note that an issue type can only be mapped to one project in a workflow scheme.
    * name `string`: The name of the workflow scheme. The name must be unique. Maximum length 255 characters.
    * updateDraftIfNeeded `boolean`: Indicates whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * name **required** `string`
  * self **required** `string`

### workflowscheme.id.delete
Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).


```js
jira.workflowscheme.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).

#### Output
*Output schema unknown*

### workflowscheme.id.get
Returns a workflow scheme.


```js
jira.workflowscheme.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
  * returnDraftIfExists `boolean`: Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * name **required** `string`
  * self **required** `string`

### workflowscheme.id.put
Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that updateDraftIfNeeded is set to true.


```js
jira.workflowscheme.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * defaultWorkflow `string`: The name of the default workflow for the workflow scheme. The default workflow has All Unassigned Issue Types assigned to it in Jira. If defaultWorkflow is not specified when creating a workflow scheme, it is set to Jira Workflow (jira).
    * description `string`: The description of the workflow scheme.
    * issueTypeMappings `object`: The issue type-project mappings, where each mapping is an issue type ID and project name pair. Note that an issue type can only be mapped to one project in a workflow scheme.
    * name `string`: The name of the workflow scheme. The name must be unique. Maximum length 255 characters.
    * updateDraftIfNeeded `boolean`: Indicates whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:
  * id **required** `integer`: The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * name **required** `string`
  * self **required** `string`

### workflowscheme.id.createdraft.post
Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme at any given time.


```js
jira.workflowscheme.id.createdraft.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the active workflow scheme that the draft is created from.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * lastModified **required** `string`
  * lastModifiedUser **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * applicationRoles **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * emailAddress **required** `string`
    * groups **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
    * timeZone **required** `string`
  * name **required** `string`
  * originalDefaultWorkflow **required** `string`
  * originalIssueTypeMappings **required** `object`
    * 10001 **required** `string`
  * self **required** `string`

### workflowscheme.id.default.delete
Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira's system workflow (the jira workflow).


```js
jira.workflowscheme.id.default.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * updateDraftIfNeeded `boolean`: Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * name **required** `string`
  * self **required** `string`

### workflowscheme.id.default.get
Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.


```js
jira.workflowscheme.id.default.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * returnDraftIfExists `boolean`: Set to true to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.

#### Output
* output `object`
  * workflow **required** `string`

### workflowscheme.id.default.put
Sets the default workflow for a workflow scheme.


```js
jira.workflowscheme.id.default.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * updateDraftIfNeeded `boolean`: Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to false.
    * workflow `string`: The name of the workflow to set as the default workflow. For example, jira.
  * id **required** `integer`: The ID of the workflow scheme.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * name **required** `string`
  * self **required** `string`

### workflowscheme.id.draft.delete
Deletes a draft workflow scheme.


```js
jira.workflowscheme.id.draft.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the active workflow scheme that the draft was originally created from.

#### Output
*Output schema unknown*

### workflowscheme.id.draft.get
Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See Configuring workflow schemes for more information.Note that:


```js
jira.workflowscheme.id.draft.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the active workflow scheme that the draft was originally created from.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * lastModified **required** `string`
  * lastModifiedUser **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * applicationRoles **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * emailAddress **required** `string`
    * groups **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
    * timeZone **required** `string`
  * name **required** `string`
  * originalDefaultWorkflow **required** `string`
  * originalIssueTypeMappings **required** `object`
    * 10001 **required** `string`
  * self **required** `string`

### workflowscheme.id.draft.put
Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme at any given time.


```js
jira.workflowscheme.id.draft.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * defaultWorkflow `string`: The name of the default workflow for the workflow scheme. The default workflow has All Unassigned Issue Types assigned to it in Jira. If defaultWorkflow is not specified when creating a workflow scheme, it is set to Jira Workflow (jira).
    * description `string`: The description of the workflow scheme.
    * issueTypeMappings `object`: The issue type-project mappings, where each mapping is an issue type ID and project name pair. Note that an issue type can only be mapped to one project in a workflow scheme.
    * name `string`: The name of the workflow scheme. The name must be unique. Maximum length 255 characters.
    * updateDraftIfNeeded `boolean`: Indicates whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:
  * id **required** `integer`: The ID of the active workflow scheme that the draft was originally created from.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * lastModified **required** `string`
  * lastModifiedUser **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * applicationRoles **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * emailAddress **required** `string`
    * groups **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
    * timeZone **required** `string`
  * name **required** `string`
  * originalDefaultWorkflow **required** `string`
  * originalIssueTypeMappings **required** `object`
    * 10001 **required** `string`
  * self **required** `string`

### workflowscheme.id.draft.default.delete
Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system workflow (the jira workflow).


```js
jira.workflowscheme.id.draft.default.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * lastModified **required** `string`
  * lastModifiedUser **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * applicationRoles **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * emailAddress **required** `string`
    * groups **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
    * timeZone **required** `string`
  * name **required** `string`
  * originalDefaultWorkflow **required** `string`
  * originalIssueTypeMappings **required** `object`
    * 10001 **required** `string`
  * self **required** `string`

### workflowscheme.id.draft.default.get
Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.


```js
jira.workflowscheme.id.draft.default.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.

#### Output
* output `object`
  * workflow **required** `string`

### workflowscheme.id.draft.default.put
Sets the default workflow for a workflow scheme's draft.


```js
jira.workflowscheme.id.draft.default.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * updateDraftIfNeeded `boolean`: Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to false.
    * workflow `string`: The name of the workflow to set as the default workflow. For example, jira.
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * lastModified **required** `string`
  * lastModifiedUser **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * applicationRoles **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * emailAddress **required** `string`
    * groups **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
    * timeZone **required** `string`
  * name **required** `string`
  * originalDefaultWorkflow **required** `string`
  * originalIssueTypeMappings **required** `object`
    * 10001 **required** `string`
  * self **required** `string`

### workflowscheme.id.draft.issuetype.issueType.delete
Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft.


```js
jira.workflowscheme.id.draft.issuetype.issueType.delete({
  "id": 0,
  "issueType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * issueType **required** `string`: The ID of the issue type.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * lastModified **required** `string`
  * lastModifiedUser **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * applicationRoles **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * emailAddress **required** `string`
    * groups **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
    * timeZone **required** `string`
  * name **required** `string`
  * originalDefaultWorkflow **required** `string`
  * originalIssueTypeMappings **required** `object`
    * 10001 **required** `string`
  * self **required** `string`

### workflowscheme.id.draft.issuetype.issueType.get
Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft.


```js
jira.workflowscheme.id.draft.issuetype.issueType.get({
  "id": 0,
  "issueType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * issueType **required** `string`: The ID of the issue type.

#### Output
* output `object`
  * issueType **required** `string`
  * workflow **required** `string`

### workflowscheme.id.draft.issuetype.issueType.put
Sets the workflow for an issue type in a workflow scheme's draft.


```js
jira.workflowscheme.id.draft.issuetype.issueType.put({
  "id": 0,
  "issueType": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * issueType `string`: The ID of the issue type. Not required if updating the issue type-workflow mapping.
    * updateDraftIfNeeded `boolean`: Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false. Only applicable when updating the workflow-issue types mapping.
    * workflow `string`: The name of the workflow. For example, jira.
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * issueType **required** `string`: The ID of the issue type.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * lastModified **required** `string`
  * lastModifiedUser **required** `object`
    * accountId **required** `string`
    * active **required** `boolean`
    * applicationRoles **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * avatarUrls **required** `object`
      * 16x16 **required** `string`
      * 24x24 **required** `string`
      * 32x32 **required** `string`
      * 48x48 **required** `string`
    * displayName **required** `string`
    * emailAddress **required** `string`
    * groups **required** `object`
      * items **required** `array`
        * items `object`
      * size **required** `number`
    * key **required** `string`
    * name **required** `string`
    * self **required** `string`
    * timeZone **required** `string`
  * name **required** `string`
  * originalDefaultWorkflow **required** `string`
  * originalIssueTypeMappings **required** `object`
    * 10001 **required** `string`
  * self **required** `string`

### workflowscheme.id.draft.workflow.delete
Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft.


```js
jira.workflowscheme.id.draft.workflow.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * workflowName `string`: The name of the workflow.

#### Output
*Output schema unknown*

### workflowscheme.id.draft.workflow.get
Returns the workflow-issue type mappings for a workflow scheme's draft.


```js
jira.workflowscheme.id.draft.workflow.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * workflowName `string`: The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.

#### Output
* output `object`
  * defaultMapping **required** `boolean`
  * issueTypes **required** `array`
    * items `object`
  * workflow **required** `string`

### workflowscheme.id.draft.workflow.put
Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.


```js
jira.workflowscheme.id.draft.workflow.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * defaultMapping `boolean`: Indicates whether the workflow is the default workflow for the workflow scheme.
    * issueTypes `array`: The list of issue type IDs.
      * items `string`
    * updateDraftIfNeeded `boolean`: Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to false.
    * workflow `string`: The name of the workflow. For example, jira. Optional if updating the workflow-issue types mapping.
  * id **required** `integer`: The ID of the workflow scheme that the draft belongs to.
  * workflowName `string`: The name of the workflow.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * name **required** `string`
  * self **required** `string`

### workflowscheme.id.issuetype.issueType.delete
Deletes the issue type-workflow mapping for an issue type in a workflow scheme.


```js
jira.workflowscheme.id.issuetype.issueType.delete({
  "id": 0,
  "issueType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * issueType **required** `string`: The ID of the issue type.
  * updateDraftIfNeeded `boolean`: Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * name **required** `string`
  * self **required** `string`

### workflowscheme.id.issuetype.issueType.get
Returns the issue type-workflow mapping for an issue type in a workflow scheme.


```js
jira.workflowscheme.id.issuetype.issueType.get({
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
* output `object`
  * issueType **required** `string`
  * workflow **required** `string`

### workflowscheme.id.issuetype.issueType.put
Sets the workflow for an issue type in a workflow scheme.


```js
jira.workflowscheme.id.issuetype.issueType.put({
  "id": 0,
  "issueType": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * issueType `string`: The ID of the issue type. Not required if updating the issue type-workflow mapping.
    * updateDraftIfNeeded `boolean`: Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false. Only applicable when updating the workflow-issue types mapping.
    * workflow `string`: The name of the workflow. For example, jira.
  * id **required** `integer`: The ID of the workflow scheme.
  * issueType **required** `string`: The ID of the issue type.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * name **required** `string`
  * self **required** `string`

### workflowscheme.id.workflow.delete
Deletes the workflow-issue type mapping for a workflow in a workflow scheme.


```js
jira.workflowscheme.id.workflow.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * updateDraftIfNeeded `boolean`: Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
  * workflowName `string`: The name of the workflow.

#### Output
*Output schema unknown*

### workflowscheme.id.workflow.get
Returns the workflow-issue type mappings for a workflow scheme.


```js
jira.workflowscheme.id.workflow.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the workflow scheme.
  * returnDraftIfExists `boolean`: Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
  * workflowName `string`: The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.

#### Output
* output `object`
  * defaultMapping **required** `boolean`
  * issueTypes **required** `array`
    * items `object`
  * workflow **required** `string`

### workflowscheme.id.workflow.put
Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.


```js
jira.workflowscheme.id.workflow.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * body `object`
    * defaultMapping `boolean`: Indicates whether the workflow is the default workflow for the workflow scheme.
    * issueTypes `array`: The list of issue type IDs.
      * items `string`
    * updateDraftIfNeeded `boolean`: Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to false.
    * workflow `string`: The name of the workflow. For example, jira. Optional if updating the workflow-issue types mapping.
  * id **required** `integer`: The ID of the workflow scheme.
  * workflowName `string`: The name of the workflow.

#### Output
* output `object`
  * defaultWorkflow **required** `string`
  * description **required** `string`
  * draft **required** `boolean`
  * id **required** `number`
  * issueTypeMappings **required** `object`
    * 10000 **required** `string`
    * 10001 **required** `string`
  * name **required** `string`
  * self **required** `string`

### worklog.deleted.get
Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.


```js
jira.worklog.deleted.get({}, context)
```

#### Input
* input `object`
  * since `integer`: The date and time, in UNIX timestamp format, after which deleted worklogs are returned.

#### Output
* output `object`
  * lastPage **required** `boolean`
  * nextPage **required** `string`
  * self **required** `string`
  * since **required** `number`
  * until **required** `number`
  * values **required** `array`
    * items `object`
      * properties `array`
        * items `object`
      * updatedTime **required** `number`
      * worklogId **required** `number`

### worklog.list.post
Returns worklog details for a list of worklog IDs.


```js
jira.worklog.list.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * ids `array`: A list of worklog IDs.
      * items `integer`
  * expand `string`: Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.

#### Output
* output `array`
  * items `object`
    * author **required** `object`
      * active **required** `boolean`
      * displayName **required** `string`
      * name **required** `string`
      * self **required** `string`
    * comment **required** `object`
      * content **required** `array`
        * items `object`
          * content `array`
          * type **required** `string`
      * type **required** `string`
      * version **required** `number`
    * id **required** `string`
    * issueId **required** `string`
    * self **required** `string`
    * started **required** `string`
    * timeSpent **required** `string`
    * timeSpentSeconds **required** `number`
    * updateAuthor **required** `object`
      * active **required** `boolean`
      * displayName **required** `string`
      * name **required** `string`
      * self **required** `string`
    * updated **required** `string`
    * visibility **required** `object`
      * type **required** `string`
      * value **required** `string`

### worklog.updated.get
Returns a list of IDs and update timestamps for worklogs updated after a date and time.


```js
jira.worklog.updated.get({}, context)
```

#### Input
* input `object`
  * expand `string`: Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
  * since `integer`: The date and time, in UNIX timestamp format, after which updated worklogs are returned.

#### Output
* output `object`
  * lastPage **required** `boolean`
  * nextPage **required** `string`
  * self **required** `string`
  * since **required** `number`
  * until **required** `number`
  * values **required** `array`
    * items `object`
      * properties `array`
        * items `object`
      * updatedTime **required** `number`
      * worklogId **required** `number`



## Definitions

*This integration has no definitions*
