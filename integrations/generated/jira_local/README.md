# @datafire/jira_local

Client library for JIRA 7.6.1

## Installation and Usage
```bash
npm install --save @datafire/jira_local
```
```js
let jira_local = require('@datafire/jira_local').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### api.2.application_properties.get
Returns an application property.


```js
jira_local.api.2.application_properties.get({}, context)
```

#### Input
* input `object`
  * key `string`: a String containing the property key
  * permissionLevel `string`: when fetching a list specifies the permission level of all items in the list
  * keyFilter `string`: when fetching a list allows the list to be filtered by the property's start of key

#### Output
*Output schema unknown*

### getAdvancedSettings
Returns the properties that are displayed on the "General Configuration > Advanced Settings" page.


```js
jira_local.getAdvancedSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### setPropertyViaRestfulTable
Modify an application property via PUT. The "value" field present in the PUT will override the existing value.


```js
jira_local.setPropertyViaRestfulTable({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getAll
Returns all ApplicationRoles in the system. Will also return an ETag header containing a version hash of the
 collection of ApplicationRoles.


```js
jira_local.getAll(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### putBulk
Updates the ApplicationRoles with the passed data if the version hash is the same as the server.
 Only the groups and default groups setting of the role may be updated. Requests to change the key
 or the name of the role will be silently ignored. It is acceptable to pass only the roles that are updated
 as roles that are present in the server but not in data to update with, will not be deleted.


```js
jira_local.putBulk({}, context)
```

#### Input
* input `object`
  * If-Match `string`

#### Output
*Output schema unknown*

### get
Returns the ApplicationRole with passed key if it exists.


```js
jira_local.get({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: the key of the role to update.

#### Output
*Output schema unknown*

### put
Updates the ApplicationRole with the passed data. Only the groups and default groups setting of the
 role may be updated. Requests to change the key or the name of the role will be silently ignored.
 <p>
 Optional: If versionHash is passed through the If-Match header the request will be rejected if not the
 same as server


```js
jira_local.put({
  "key": ""
}, context)
```

#### Input
* input `object`
  * If-Match `string`: the hash of the version to update. Optional Param
  * key **required** `string`: the key of the role to update.

#### Output
*Output schema unknown*

### getAttachmentMeta
Returns the meta information for an attachments, specifically if they are enabled and the maximum upload size
 allowed.


```js
jira_local.getAttachmentMeta(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### removeAttachment
Remove an attachment from an issue.


```js
jira_local.removeAttachment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id of the attachment to remove

#### Output
*Output schema unknown*

### getAttachment
Returns the meta-data for an attachment, including the URI of the actual attached file.


```js
jira_local.getAttachment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id of the attachment to remove

#### Output
*Output schema unknown*

### expandForHumans
Tries to expand an attachment. Output is human-readable and subject to change.


```js
jira_local.expandForHumans({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the attachment to expand.

#### Output
*Output schema unknown*

### expandForMachines
Tries to expand an attachment. Output is raw and should be backwards-compatible through the course of time.


```js
jira_local.expandForMachines({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the attachment to expand.

#### Output
*Output schema unknown*

### getRecords
Returns auditing records filtered using provided parameters


```js
jira_local.getRecords({}, context)
```

#### Input
* input `object`
  * offset `integer`: - the number of record from which search starts
  * limit `integer`: - maximum number of returned results (if is limit is <= 0 or > 1000, it will be set do default value: 1000)
  * filter `string`: - text query; each record that will be returned must contain the provided text in one of its fields
  * from `string`: - timestamp in past; 'from' must be less or equal 'to', otherwise the result set will be empty
  * to `string`: - timestamp in past; 'from' must be less or equal 'to', otherwise the result set will be empty
  * projectIds `string`: - list of project ids to look for
  * userIds `string`: - list of user ids to look for

#### Output
*Output schema unknown*

### addRecord
Store a record in Audit Log


```js
jira_local.addRecord(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getAllSystemAvatars
Returns all system avatars of the given type.


```js
jira_local.getAllSystemAvatars({
  "type": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`: the avatar type

#### Output
*Output schema unknown*

### storeTemporaryAvatar
Creates temporary avatar


```js
jira_local.storeTemporaryAvatar({
  "type": ""
}, context)
```

#### Input
* input `object`
  * filename `string`: name of file being uploaded
  * size `integer`: size of file
  * type **required** `string`: the avatar type

#### Output
*Output schema unknown*

### api.2.avatar.type.temporaryCrop.post
Updates the cropping instructions of the temporary avatar.


```js
jira_local.api.2.avatar.type.temporaryCrop.post({
  "type": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`: the avatar type

#### Output
*Output schema unknown*

### approveUpgrade



```js
jira_local.approveUpgrade(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### cancelUpgrade



```js
jira_local.cancelUpgrade(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### acknowledgeErrors



```js
jira_local.acknowledgeErrors(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### setReadyToUpgrade



```js
jira_local.setReadyToUpgrade(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getState



```js
jira_local.getState(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.2.comment.commentId.properties.get
Returns the keys of all properties for the comment identified by the key or by the id.


```js
jira_local.api.2.comment.commentId.properties.get({
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: the comment from which keys will be returned.

#### Output
*Output schema unknown*

### api.2.comment.commentId.properties.propertyKey.delete
Removes the property from the comment identified by the key or by the id. Ths user removing the property is required
 to have permissions to administer the comment.


```js
jira_local.api.2.comment.commentId.properties.propertyKey.delete({
  "commentId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: the comment from which keys will be returned.
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### api.2.comment.commentId.properties.propertyKey.get
Returns the value of the property with a given key from the comment identified by the key or by the id. The user who retrieves
 the property is required to have permissions to read the comment.


```js
jira_local.api.2.comment.commentId.properties.propertyKey.get({
  "commentId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: the comment from which keys will be returned.
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### api.2.comment.commentId.properties.propertyKey.put
Sets the value of the specified comment's property.
 <p>
 You can use this resource to store a custom data against the comment identified by the key or by the id. The user
 who stores the data is required to have permissions to administer the comment.
 </p>


```js
jira_local.api.2.comment.commentId.properties.propertyKey.put({
  "commentId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: the comment from which keys will be returned.
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### createComponent
Create a component via POST.


```js
jira_local.createComponent(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.2.component.id.delete
Delete a project component.


```js
jira_local.api.2.component.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * moveIssuesTo `string`: The new component applied to issues whose 'id' component will be deleted.
  * id **required** `string`: The component to delete.

#### Output
*Output schema unknown*

### getComponent
Returns a project component.


```js
jira_local.getComponent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The component to delete.

#### Output
*Output schema unknown*

### updateComponent
Modify a component via PUT. Any fields present in the PUT will override existing values. As a convenience, if a field
 is not present, it is silently ignored.
 <p>
 If leadUserName is an empty string ("") the component lead will be removed.


```js
jira_local.updateComponent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The component to delete.

#### Output
*Output schema unknown*

### getComponentRelatedIssues
Returns counts of issues related to this component.


```js
jira_local.getComponentRelatedIssues({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: a String containing the component id

#### Output
*Output schema unknown*

### getConfiguration
Returns the information if the optional features in JIRA are enabled or disabled. If the time tracking is enabled,
 it also returns the detailed information about time tracking configuration.


```js
jira_local.getConfiguration(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getCustomFieldOption
Returns a full representation of the Custom Field Option that has the given id.


```js
jira_local.getCustomFieldOption({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: a String containing an Custom Field Option id

#### Output
*Output schema unknown*

### list
Returns a list of all dashboards, optionally filtering them.


```js
jira_local.list({}, context)
```

#### Input
* input `object`
  * filter `string`: an optional filter that is applied to the list of dashboards. Valid values include
  * startAt `integer`: the index of the first dashboard to return (0-based). must be 0 or a multiple of
  * maxResults `integer`: a hint as to the the maximum number of dashboards to return in each call. Note that the

#### Output
*Output schema unknown*

### api.2.dashboard.dashboardId.items.itemId.properties.get
Returns the keys of all properties for the dashboard item identified by the id.


```js
jira_local.api.2.dashboard.dashboardId.items.itemId.properties.get({
  "itemId": "",
  "dashboardId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: the dashboard item from which keys will be returned.
  * dashboardId **required** `string`

#### Output
*Output schema unknown*

### api.2.dashboard.dashboardId.items.itemId.properties.propertyKey.delete
Removes the property from the dashboard item identified by the key or by the id. Ths user removing the property is required
 to have permissions to administer the dashboard item.


```js
jira_local.api.2.dashboard.dashboardId.items.itemId.properties.propertyKey.delete({
  "itemId": "",
  "dashboardId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: the dashboard item from which keys will be returned.
  * dashboardId **required** `string`
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### api.2.dashboard.dashboardId.items.itemId.properties.propertyKey.get
Returns the value of the property with a given key from the dashboard item identified by the id.
 The user who retrieves the property is required to have permissions to read the dashboard item.


```js
jira_local.api.2.dashboard.dashboardId.items.itemId.properties.propertyKey.get({
  "itemId": "",
  "dashboardId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: the dashboard item from which keys will be returned.
  * dashboardId **required** `string`
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### api.2.dashboard.dashboardId.items.itemId.properties.propertyKey.put
Sets the value of the specified dashboard item's property.
 <p>
 You can use this resource to store a custom data against the dashboard item identified by the id.
 The user who stores the data is required to have permissions to administer the dashboard item.
 </p>


```js
jira_local.api.2.dashboard.dashboardId.items.itemId.properties.propertyKey.put({
  "itemId": "",
  "dashboardId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: the dashboard item from which keys will be returned.
  * dashboardId **required** `string`
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### getDashboard
Returns a single dashboard.


```js
jira_local.getDashboard({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the dashboard id

#### Output
*Output schema unknown*

### getFields
Returns a list of all fields, both System and Custom


```js
jira_local.getFields(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### createCustomField
Creates a custom field using a definition (object encapsulating custom field data)


```js
jira_local.createCustomField(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### createFilter
Creates a new filter, and returns newly created filter.
 Currently sets permissions just using the users default sharing permissions


```js
jira_local.createFilter({}, context)
```

#### Input
* input `object`
  * expand `string`: the parameters to expand

#### Output
*Output schema unknown*

### getDefaultShareScope
Returns the default share scope of the logged-in user.


```js
jira_local.getDefaultShareScope(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### setDefaultShareScope
Sets the default share scope of the logged-in user. Available values are GLOBAL and PRIVATE.


```js
jira_local.setDefaultShareScope(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getFavouriteFilters
Returns the favourite filters of the logged-in user.


```js
jira_local.getFavouriteFilters({}, context)
```

#### Input
* input `object`
  * expand `string`: the parameters to expand
  * enableSharedUsers `boolean`: enable calculating shared users collection

#### Output
*Output schema unknown*

### deleteFilter
Delete a filter.


```js
jira_local.deleteFilter({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the filter being looked up

#### Output
*Output schema unknown*

### getFilter
Returns a filter given an id


```js
jira_local.getFilter({
  "id": 0
}, context)
```

#### Input
* input `object`
  * expand `string`: the parameters to expand
  * enableSharedUsers `boolean`: enable calculating shared users collection
  * id **required** `integer`: the id of the filter being looked up

#### Output
*Output schema unknown*

### editFilter
Updates an existing filter, and returns its new value.


```js
jira_local.editFilter({
  "id": 0
}, context)
```

#### Input
* input `object`
  * expand `string`: the parameters to expand
  * id **required** `integer`: the id of the filter being looked up

#### Output
*Output schema unknown*

### api.2.filter.id.columns.delete
Resets the columns for the given filter such that the filter no longer has its own column config.


```js
jira_local.api.2.filter.id.columns.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the filter

#### Output
*Output schema unknown*

### api.2.filter.id.columns.get
Returns the default columns for the given filter. Currently logged in user will be used as
 the user making such request.


```js
jira_local.api.2.filter.id.columns.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the filter

#### Output
*Output schema unknown*

### api.2.filter.id.columns.put
Sets the default columns for the given filter.


```js
jira_local.api.2.filter.id.columns.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the filter

#### Output
*Output schema unknown*

### getSharePermissions
Returns all share permissions of the given filter.


```js
jira_local.getSharePermissions({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### addSharePermission
Adds a share permissions to the given filter. Adding a global permission removes all previous permissions from the filter.


```js
jira_local.addSharePermission({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### deleteSharePermission
Removes a share permissions from the given filter.


```js
jira_local.deleteSharePermission({
  "id": 0,
  "permission-id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * permission-id **required** `integer`

#### Output
*Output schema unknown*

### getSharePermission
Returns a single share permission of the given filter.


```js
jira_local.getSharePermission({
  "permissionId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * permissionId **required** `integer`
  * id **required** `integer`

#### Output
*Output schema unknown*

### removeGroup
Deletes a group by given group parameter.
 <p>
 Returns no content


```js
jira_local.removeGroup({}, context)
```

#### Input
* input `object`
  * groupname `string`: (mandatory) The name of the group to delete.
  * swapGroup `string`: If you delete a group and content is restricted to that group, the content will be hidden from all users. 

#### Output
*Output schema unknown*

### getGroup
Returns REST representation for the requested group. Allows to get list of active users belonging to the
 specified group and its subgroups if "users" expand option is provided. You can page through users list by using
 indexes in expand param. For example to get users from index 10 to index 15 use "users[10:15]" expand value. This
 will return 6 users (if there are at least 16 users in this group). Indexes are 0-based and inclusive.
 <p>
 This resource is deprecated, please use group/member API instead.


```js
jira_local.getGroup({}, context)
```

#### Input
* input `object`
  * groupname `string`: A name of requested group.
  * expand `string`: List of fields to expand. Currently only available expand is "users".

#### Output
*Output schema unknown*

### createGroup
Creates a group by given group parameter
 <p>
 Returns REST representation for the requested group.


```js
jira_local.createGroup(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getUsersFromGroup
This resource returns a <a href="#pagination">paginated</a> list of users who are members of the specified group and its subgroups.
 Users in the page are ordered by user names. User of this resource is required to have sysadmin or admin permissions.


```js
jira_local.getUsersFromGroup({}, context)
```

#### Input
* input `object`
  * groupname `string`: a name of the group for which members will be returned.
  * includeInactiveUsers `boolean`: inactive users will be included in the response if set to true.
  * startAt `integer`: the index of the first user in group to return (0 based).
  * maxResults `integer`: the maximum number of users to return (max 50).

#### Output
*Output schema unknown*

### removeUserFromGroup
Removes given user from a group.
 <p>
 Returns no content


```js
jira_local.removeUserFromGroup({}, context)
```

#### Input
* input `object`
  * groupname `string`: A name of requested group.
  * username `string`: User to remove from a group

#### Output
*Output schema unknown*

### addUserToGroup
Adds given user to a group.
 <p>
 Returns the current state of the group.


```js
jira_local.addUserToGroup({}, context)
```

#### Input
* input `object`
  * groupname `string`: A name of requested group.

#### Output
*Output schema unknown*

### findGroups
Returns groups with substrings matching a given query. This is mainly for use with
 the group picker, so the returned groups contain html to be used as picker suggestions.
 The groups are also wrapped in a single response object that also contains a header for
 use in the picker, specifically <i>Showing X of Y matching groups</i>.
 <p>
 The number of groups returned is limited by the system property "jira.ajax.autocomplete.limit"
 <p>
 The groups will be unique and sorted.


```js
jira_local.findGroups({}, context)
```

#### Input
* input `object`
  * query `string`: a String to match groups agains
  * exclude `string`
  * maxResults `integer`
  * userName `string`

#### Output
*Output schema unknown*

### findUsersAndGroups
Returns a list of users and groups matching query with highlighting. This resource cannot be accessed
 anonymously.


```js
jira_local.findUsersAndGroups({}, context)
```

#### Input
* input `object`
  * query `string`: A string used to search username, Name or e-mail address
  * maxResults `integer`: the maximum number of users to return (defaults to 50). The maximum allowed value is 1000. If
  * showAvatar `boolean`
  * fieldId `string`: The custom field id, if this request comes from a custom field, such as a user picker. Optional.
  * projectId `string`: The list of project ids to further restrict the search
  * issueTypeId `string`: The list of issue type ids to further restrict the search.

#### Output
*Output schema unknown*

### getIndexSummary
Summarizes index condition of current node.
 <p/>
 Returned data consists of:
 <ul>
 <li><code>nodeId</code> - Node identifier.</li>
 <li><code>reportTime</code> - Time of this report creation.</li>
 <li><code>issueIndex</code> - Summary of issue index status.</li>
 <li><code>replicationQueues</code> - Map of index replication queues, where
 keys represent nodes from which replication operations came from.</li>
 </ul>
 <p/>
 <code>issueIndex</code> can contain:
 <ul>
 <li><code>indexReadable</code> - If <code>false</code> the end point failed to read data from issue index
 (check JIRA logs for detailed stack trace), otherwise <code>true</code>.
 When <code>false</code> other fields of <code>issueIndex</code> can be not visible.</li>
 <li><code>countInDatabase</code> - Count of issues found in database.</li>
 <li><code>countInIndex</code> - Count of issues found while querying index.</li>
 <li><code>lastUpdatedInDatabase</code> - Time of last update of issue found in database.</li>
 <li><code>lastUpdatedInIndex</code> - Time of last update of issue found while querying index.</li>
 </ul>
 <p/>
 <code>replicationQueues</code>'s map values can contain:
 <ul>
 <li><code>lastConsumedOperation</code> - Last executed index replication operation by current node from sending node's queue.</li>
 <li><code>lastConsumedOperation.id</code> - Identifier of the operation.</li>
 <li><code>lastConsumedOperation.replicationTime</code> - Time when the operation was sent to other nodes.</li>
 <li><code>lastOperationInQueue</code> - Last index replication operation in sending node's queue.</li>
 <li><code>lastOperationInQueue.id</code> - Identifier of the operation.</li>
 <li><code>lastOperationInQueue.replicationTime</code> - Time when the operation was sent to other nodes.</li>
 <li><code>queueSize</code> - Number of operations in queue from sending node to current node.</li>
 </ul>


```js
jira_local.getIndexSummary(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### createIssue
Creates an issue or a sub-task from a JSON representation.
 <p/>
 The fields that can be set on create, in either the fields parameter or the update parameter can be determined
 using the <b>/rest/api/2/issue/createmeta</b> resource.
 If a field is not configured to appear on the create screen, then it will not be in the createmeta, and a field
 validation error will occur if it is submitted.
 <p/>
 Creating a sub-task is similar to creating a regular issue, with two important differences:
 <ul>
 <li>the <code>issueType</code> field must correspond to a sub-task issue type (you can use
 <code>/issue/createmeta</code> to discover sub-task issue types), and</li>
 <li>you must provide a <code>parent</code> field in the issue create request containing the id or key of the
 parent issue.</li>
 </ul>


```js
jira_local.createIssue(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### createIssues
Creates issues or sub-tasks from a JSON representation.
 <p/>
 Creates many issues in one bulk operation.
 <p/>
 Creating a sub-task is similar to creating a regular issue. More details can be found in createIssue section:
 {@link IssueResource#createIssue(IssueUpdateBean)}}


```js
jira_local.createIssues(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getCreateIssueMeta
Returns the meta data for creating issues. This includes the available projects, issue types and fields,
 including field types and whether or not those fields are required.
 Projects will not be returned if the user does not have permission to create issues in that project.
 <p/>
 The fields in the createmeta correspond to the fields in the create screen for the project/issuetype.
 Fields not in the screen will not be in the createmeta.
 <p/>
 Fields will only be returned if <code>expand=projects.issuetypes.fields</code>.
 <p/>
 The results can be filtered by project and/or issue type, given by the query params.


```js
jira_local.getCreateIssueMeta({}, context)
```

#### Input
* input `object`
  * projectIds `string`: combined with the projectKeys param, lists the projects with which to filter the results. If absent, all projects are returned.
  * projectKeys `string`: combined with the projectIds param, lists the projects with which to filter the results. If null, all projects are returned.
  * issuetypeIds `string`: combinded with issuetypeNames, lists the issue types with which to filter the results. If null, all issue types are returned.
  * issuetypeNames `string`: combinded with issuetypeIds, lists the issue types with which to filter the results. If null, all issue types are returned.

#### Output
*Output schema unknown*

### getIssuePickerResource
Returns suggested issues which match the auto-completion query for the user which executes this request. This REST
 method will check the user's history and the user's browsing context and select this issues, which match the query.


```js
jira_local.getIssuePickerResource({}, context)
```

#### Input
* input `object`
  * query `string`: the query.
  * currentJQL `string`: the JQL in context of which the request is executed. Only issues which match this JQL query will be included in results.
  * currentIssueKey `string`: the key of the issue in context of which the request is executed. The issue which is in context will not be included in the auto-completion result, even if it matches the query.
  * currentProjectId `string`: the id of the project in context of which the request is executed. Suggested issues will be only from this project.
  * showSubTasks `boolean`: if set to false, subtasks will not be included in the list.
  * showSubTaskParent `boolean`: if set to false and request is executed in context of a subtask, the parent issue will not be included in the auto-completion result, even if it matches the query.

#### Output
*Output schema unknown*

### deleteIssue
Delete an issue.
 <p/>
 If the issue has subtasks you must set the parameter deleteSubtasks=true to delete the issue.
 You cannot delete an issue without its subtasks also being deleted.


```js
jira_local.deleteIssue({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * deleteSubtasks `string`: a String of true or false indicating that any subtasks should also be deleted.  If the
  * issueIdOrKey **required** `string`: the issue id or key to update (i.e. JRA-1330)

#### Output
*Output schema unknown*

### getIssue
Returns a full representation of the issue for the given issue key.
 <p>
 An issue JSON consists of the issue key, a collection of fields,
 a link to the workflow transition sub-resource, and (optionally) the HTML rendered values of any fields that support it
 (e.g. if wiki syntax is enabled for the description or comments).
 <p>
 The <code>fields</code> param (which can be specified multiple times) gives a comma-separated list of fields
 to include in the response. This can be used to retrieve a subset of fields.
 A particular field can be excluded by prefixing it with a minus.
 <p>
 By default, all (<code>*all</code>) fields are returned in this get-issue resource. Note: the default is different
 when doing a jql search -- the default there is just navigable fields (<code>*navigable</code>).
 <ul>
 <li><code>*all</code> - include all fields</li>
 <li><code>*navigable</code> - include just navigable fields</li>
 <li><code>summary,comment</code> - include just the summary and comments</li>
 <li><code>-comment</code> - include everything except comments (the default is <code>*all</code> for get-issue)</li>
 <li><code>*all,-comment</code> - include everything except comments</li>
 </ul>
 <p>
 The {@code properties} param is similar to {@code fields} and specifies a comma-separated list of issue
 properties to include. Unlike {@code fields}, properties are not included by default. To include them all
 send {@code ?properties=*all}. You can also include only specified properties or exclude some properties
 with a minus (-) sign.
 <p>
 <ul>
 <li>{@code *all} - include all properties</li>
 <li>{@code *all, -prop1} - include all properties except {@code prop1} </li>
 <li>{@code prop1, prop1} - include {@code prop1} and {@code prop2} properties </li>
 </ul>
 </p>
 <p/>
 JIRA will attempt to identify the issue by the <code>issueIdOrKey</code> path parameter. This can be an issue id,
 or an issue key. If the issue cannot be found via an exact match, JIRA will also look for the issue in a case-insensitive way, or
 by looking to see if the issue was moved. In either of these cases, the request will proceed as normal (a 302 or other redirect
 will <b>not</b> be returned). The issue key contained in the response will indicate the current value of issue's key.
 <p/>
 The <code>expand</code> param is used to include, hidden by default, parts of response. This can be used to include:
 <ul>
 <li><code>renderedFields</code> - field values in HTML format</li>
 <li><code>names</code> - display name of each field</li>
 <li><code>schema</code> - schema for each field which describes a type of the field</li>
 <li><code>transitions</code> - all possible transitions for the given issue</li>
 <li><code>operations</code> - all possibles operations which may be applied on issue</li>
 <li><code>editmeta</code> - information about how each field may be edited. It contains field's schema as well.</li>
 <li><code>changelog</code> - history of all changes of the given issue</li>
 <li><code>versionedRepresentations</code> -
 REST representations of all fields. Some field may contain more recent versions. RESET representations are numbered.
 The greatest number always represents the most recent version. It is recommended that the most recent version is used.
 version for these fields which provide a more recent REST representation.
 After including <code>versionedRepresentations</code> "fields" field become hidden.</li>
 </ul>


```js
jira_local.getIssue({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * fields `string`: the list of fields to return for the issue. By default, all fields are returned.
  * expand `string`
  * properties `string`: the list of properties to return for the issue. By default no properties are returned.
  * issueIdOrKey **required** `string`: the issue id or key to update (i.e. JRA-1330)

#### Output
*Output schema unknown*

### editIssue
Edits an issue from a JSON representation.
 <p/>
 The issue can either be updated by setting explicit the field value(s)
 or by using an operation to change the field value.
 <p/>
 The fields that can be updated, in either the fields parameter or the update parameter, can be determined
 using the <b>/rest/api/2/issue/{issueIdOrKey}/editmeta</b> resource.<br>
 If a field is not configured to appear on the edit screen, then it will not be in the editmeta, and a field
 validation error will occur if it is submitted.
 <p/>
 Specifying a "field_id": field_value in the "fields" is a shorthand for a "set" operation in the "update" section.<br>
 Field should appear either in "fields" or "update", not in both.


```js
jira_local.editIssue({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * notifyUsers `boolean`: send the email with notification that the issue was updated to users that watch it.
  * issueIdOrKey **required** `string`: the issue id or key to update (i.e. JRA-1330)

#### Output
*Output schema unknown*

### assign
Assigns an issue to a user.
 You can use this resource to assign issues when the user submitting the request has the assign permission but not the
 edit issue permission.
 If the name is "-1" automatic assignee is used.  A null name will remove the assignee.


```js
jira_local.assign({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: a String containing an issue key

#### Output
*Output schema unknown*

### addAttachment
Add one or more attachments to an issue.
 <p>
 This resource expects a multipart post. The media-type multipart/form-data is defined in RFC 1867. Most client
 libraries have classes that make dealing with multipart posts simple. For instance, in Java the Apache HTTP Components
 library provides a
 <a href="http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html">MultiPartEntity</a>
 that makes it simple to submit a multipart POST.
 <p>
 In order to protect against XSRF attacks, because this method accepts multipart/form-data, it has XSRF protection
 on it.  This means you must submit a header of X-Atlassian-Token: no-check with the request, otherwise it will be
 blocked.
 <p>
 The name of the multipart/form-data parameter that contains attachments must be "file"
 <p>
 A simple example to upload a file called "myfile.txt" to issue REST-123:
 <pre>curl -D- -u admin:admin -X POST -H "X-Atlassian-Token: no-check" -F "file=@myfile.txt" http://myhost/rest/api/2/issue/TEST-123/attachments</pre>


```js
jira_local.addAttachment({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue that you want to add the attachments to

#### Output
*Output schema unknown*

### getComments
Returns all comments for an issue.
 <p>
 Results can be ordered by the "created" field which means the date a comment was added.
 </p>


```js
jira_local.getComments({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * startAt `integer`: the page offset, if not specified then defaults to 0
  * maxResults `integer`: how many results on the page should be included. Defaults to 50.
  * orderBy `string`: ordering of the results.
  * expand `string`: optional flags: renderedBody (provides body rendered in HTML)
  * issueIdOrKey **required** `string`: a string containing the issue id or key the comment will be added to

#### Output
*Output schema unknown*

### addComment
Adds a new comment to an issue.


```js
jira_local.addComment({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: optional flags: renderedBody (provides body rendered in HTML)
  * issueIdOrKey **required** `string`: a string containing the issue id or key the comment will be added to

#### Output
*Output schema unknown*

### deleteComment
Deletes an existing comment .


```js
jira_local.deleteComment({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: of the issue the comment belongs to
  * id **required** `string`: the ID of the comment to request

#### Output
*Output schema unknown*

### getComment
Returns a single comment.


```js
jira_local.getComment({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: optional flags: renderedBody (provides body rendered in HTML)
  * issueIdOrKey **required** `string`: of the issue the comment belongs to
  * id **required** `string`: the ID of the comment to request

#### Output
*Output schema unknown*

### updateComment
Updates an existing comment using its JSON representation.


```js
jira_local.updateComment({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: optional flags: renderedBody (provides body rendered in HTML)
  * issueIdOrKey **required** `string`: of the issue the comment belongs to
  * id **required** `string`: the ID of the comment to request

#### Output
*Output schema unknown*

### getEditIssueMeta
Returns the meta data for editing an issue.
 <p/>
 The fields in the editmeta correspond to the fields in the edit screen for the issue.
 Fields not in the screen will not be in the editmeta.


```js
jira_local.getEditIssueMeta({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue whose edit meta data you want to view

#### Output
*Output schema unknown*

### notify
Sends a notification (email) to the list or recipients defined in the request.


```js
jira_local.notify({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: a string containing the issue id or key the comment will be added to

#### Output
*Output schema unknown*

### api.2.issue.issueIdOrKey.properties.get
Returns the keys of all properties for the issue identified by the key or by the id.


```js
jira_local.api.2.issue.issueIdOrKey.properties.get({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue from which keys will be returned.

#### Output
*Output schema unknown*

### api.2.issue.issueIdOrKey.properties.propertyKey.delete
Removes the property from the issue identified by the key or by the id. Ths user removing the property is required
 to have permissions to edit the issue.


```js
jira_local.api.2.issue.issueIdOrKey.properties.propertyKey.delete({
  "issueIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue from which keys will be returned.
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### api.2.issue.issueIdOrKey.properties.propertyKey.get
Returns the value of the property with a given key from the issue identified by the key or by the id. The user who retrieves
 the property is required to have permissions to read the issue.


```js
jira_local.api.2.issue.issueIdOrKey.properties.propertyKey.get({
  "issueIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue from which keys will be returned.
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### api.2.issue.issueIdOrKey.properties.propertyKey.put
Sets the value of the specified issue's property.
 <p>
 You can use this resource to store a custom data against the issue identified by the key or by the id. The user
 who stores the data is required to have permissions to edit the issue.
 </p>


```js
jira_local.api.2.issue.issueIdOrKey.properties.propertyKey.put({
  "issueIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue from which keys will be returned.
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### deleteRemoteIssueLinkByGlobalId
Delete the remote issue link with the given global id on the issue.


```js
jira_local.deleteRemoteIssueLinkByGlobalId({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * globalId `string`: the global id of the remote issue link
  * issueIdOrKey **required** `string`: the issue to create the remote issue link for

#### Output
*Output schema unknown*

### getRemoteIssueLinks
A REST sub-resource representing the remote issue links on the issue.


```js
jira_local.getRemoteIssueLinks({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * globalId `string`: The id of the remote issue link to be returned.  If null (not provided) all remote links for the
  * issueIdOrKey **required** `string`: the issue to create the remote issue link for

#### Output
*Output schema unknown*

### createOrUpdateRemoteIssueLink
Creates or updates a remote issue link from a JSON representation. If a globalId is provided and a remote issue link
 exists with that globalId, the remote issue link is updated. Otherwise, the remote issue link is created.


```js
jira_local.createOrUpdateRemoteIssueLink({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue to create the remote issue link for

#### Output
*Output schema unknown*

### deleteRemoteIssueLinkById
Delete the remote issue link with the given id on the issue.


```js
jira_local.deleteRemoteIssueLinkById({
  "linkId": "",
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: the id of the remote issue link
  * issueIdOrKey **required** `string`: the issue to create the remote issue link for

#### Output
*Output schema unknown*

### getRemoteIssueLinkById
Get the remote issue link with the given id on the issue.


```js
jira_local.getRemoteIssueLinkById({
  "linkId": "",
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: the id of the remote issue link
  * issueIdOrKey **required** `string`: the issue to create the remote issue link for

#### Output
*Output schema unknown*

### updateRemoteIssueLink
Updates a remote issue link from a JSON representation. Any fields not provided are set to null.


```js
jira_local.updateRemoteIssueLink({
  "linkId": "",
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: the id of the remote issue link
  * issueIdOrKey **required** `string`: the issue to create the remote issue link for

#### Output
*Output schema unknown*

### getSubTasks
Returns an issue's subtask list


```js
jira_local.getSubTasks({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The parent issue's key or id

#### Output
*Output schema unknown*

### canMoveSubTask



```js
jira_local.canMoveSubTask({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The parent issue's key or id

#### Output
*Output schema unknown*

### moveSubTasks
Reorders an issue's subtasks by moving the subtask at index "from"
 to index "to".


```js
jira_local.moveSubTasks({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: The parent issue's key or id

#### Output
*Output schema unknown*

### getTransitions
Get a list of the transitions possible for this issue by the current user, along with fields that are required and their types.
 <p/>
 Fields will only be returned if <code>expand=transitions.fields</code>.
 <p/>
 The fields in the metadata correspond to the fields in the transition screen for that transition.
 Fields not in the screen will not be in the metadata.


```js
jira_local.getTransitions({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * transitionId `string`
  * issueIdOrKey **required** `string`: the issue whose transitions you want to view

#### Output
*Output schema unknown*

### doTransition
Perform a transition on an issue.
 When performing the transition you can update or set other issue fields.
 <p/>
 The fields that can be set on transtion, in either the fields parameter or the update parameter can be determined
 using the <b>/rest/api/2/issue/{issueIdOrKey}/transitions?expand=transitions.fields</b> resource.
 If a field is not configured to appear on the transition screen, then it will not be in the transition metadata, and a field
 validation error will occur if it is submitted.


```js
jira_local.doTransition({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue whose transitions you want to view

#### Output
*Output schema unknown*

### removeVote
Remove your vote from an issue. (i.e. "unvote")


```js
jira_local.removeVote({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue to view voting information for

#### Output
*Output schema unknown*

### getVotes
A REST sub-resource representing the voters on the issue.


```js
jira_local.getVotes({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue to view voting information for

#### Output
*Output schema unknown*

### addVote
Cast your vote in favour of an issue.


```js
jira_local.addVote({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: the issue to view voting information for

#### Output
*Output schema unknown*

### removeWatcher
Removes a user from an issue's watcher list.


```js
jira_local.removeWatcher({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * username `string`: a String containing the name of the user to remove from the watcher list. Must not be null.
  * issueIdOrKey **required** `string`: a String containing an issue key.

#### Output
*Output schema unknown*

### getIssueWatchers
Returns the list of watchers for the issue with the given key.


```js
jira_local.getIssueWatchers({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: a String containing an issue key.

#### Output
*Output schema unknown*

### addWatcher
Adds a user to an issue's watcher list.


```js
jira_local.addWatcher({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: a String containing an issue key.

#### Output
*Output schema unknown*

### getIssueWorklog
Returns all work logs for an issue. <br/>
 <strong>Note:</strong> Work logs won't be returned if the Log work field is hidden for the project.


```js
jira_local.getIssueWorklog({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: a string containing the issue id or key the worklog will be added to

#### Output
*Output schema unknown*

### addWorklog
Adds a new worklog entry to an issue.


```js
jira_local.addWorklog({
  "issueIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * adjustEstimate `string`: (optional) allows you to provide specific instructions to update the remaining time estimate of the issue.  Valid values are
  * newEstimate `string`: (required when "new" is selected for adjustEstimate) the new value for the remaining estimate field. e.g. "2d"
  * reduceBy `string`: (required when "manual" is selected for adjustEstimate) the amount to reduce the remaining estimate by e.g. "2d"
  * issueIdOrKey **required** `string`: a string containing the issue id or key the worklog will be added to

#### Output
*Output schema unknown*

### deleteWorklog
Deletes an existing worklog entry.


```js
jira_local.deleteWorklog({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * adjustEstimate `string`: (optional) allows you to provide specific instructions to update the remaining time estimate of the issue.  Valid values are
  * newEstimate `string`: (required when "new" is selected for adjustEstimate) the new value for the remaining estimate field. e.g. "2d"
  * increaseBy `string`: (required when "manual" is selected for adjustEstimate) the amount to increase the remaining estimate by e.g. "2d"
  * issueIdOrKey **required** `string`: a string containing the issue id or key the worklog belongs to
  * id **required** `string`: id of the worklog to be deleted

#### Output
*Output schema unknown*

### getWorklog
Returns a specific worklog. <br/>
 <strong>Note:</strong> The work log won't be returned if the Log work field is hidden for the project.


```js
jira_local.getWorklog({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * issueIdOrKey **required** `string`: a string containing the issue id or key the worklog belongs to
  * id **required** `string`: id of the worklog to be deleted

#### Output
*Output schema unknown*

### updateWorklog
Updates an existing worklog entry.
 <p>Note that:</p>
  <ul>
      <li>Fields possible for editing are: comment, visibility, started, timeSpent and timeSpentSeconds.</li>
      <li>Either timeSpent or timeSpentSeconds can be set.</li>
      <li>Fields which are not set will not be updated.</li>
      <li>For a request to be valid, it has to have at least one field change.</li>
  </ul>


```js
jira_local.updateWorklog({
  "issueIdOrKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * adjustEstimate `string`: (optional) allows you to provide specific instructions to update the remaining time estimate of the issue.  Valid values are
  * newEstimate `string`: (required when "new" is selected for adjustEstimate) the new value for the remaining estimate field.
  * issueIdOrKey **required** `string`: a string containing the issue id or key the worklog belongs to
  * id **required** `string`: id of the worklog to be deleted

#### Output
*Output schema unknown*

### linkIssues
Creates an issue link between two issues.
 The user requires the link issue permission for the issue which will be linked to another issue.
 The specified link type in the request is used to create the link and will create a link from the first issue
 to the second issue using the outward description. It also create a link from the second issue to the first issue using the
 inward description of the issue link type.
 It will add the supplied comment to the first issue. The comment can have a restriction who can view it.
 If group is specified, only users of this group can view this comment, if roleLevel is specified only users who have the specified role can view this comment.
 The user who creates the issue link needs to belong to the specified group or have the specified role.


```js
jira_local.linkIssues(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### deleteIssueLink
Deletes an issue link with the specified id.
 To be able to delete an issue link you must be able to view both issues and must have the link issue permission
 for at least one of the issues.


```js
jira_local.deleteIssueLink({
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: the issue link id.

#### Output
*Output schema unknown*

### getIssueLink
Returns an issue link with the specified id.


```js
jira_local.getIssueLink({
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: the issue link id.

#### Output
*Output schema unknown*

### getIssueLinkTypes
Returns a list of available issue link types, if issue linking is enabled.
 Each issue link type has an id, a name and a label for the outward and inward link relationship.


```js
jira_local.getIssueLinkTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### createIssueLinkType
Create a new issue link type.


```js
jira_local.createIssueLinkType(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### deleteIssueLinkType
Delete the specified issue link type.


```js
jira_local.deleteIssueLinkType({
  "issueLinkTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueLinkTypeId **required** `string`

#### Output
*Output schema unknown*

### getIssueLinkType
Returns for a given issue link type id all information about this issue link type.


```js
jira_local.getIssueLinkType({
  "issueLinkTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueLinkTypeId **required** `string`

#### Output
*Output schema unknown*

### updateIssueLinkType
Update the specified issue link type.


```js
jira_local.updateIssueLinkType({
  "issueLinkTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueLinkTypeId **required** `string`

#### Output
*Output schema unknown*

### getIssueSecuritySchemes
Returns all issue security schemes that are defined.


```js
jira_local.getIssueSecuritySchemes(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.2.issuesecurityschemes.id.get
Returns the issue security scheme along with that are defined.


```js
jira_local.api.2.issuesecurityschemes.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### getIssueAllTypes
Returns a list of all issue types visible to the user


```js
jira_local.getIssueAllTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### createIssueType
Creates an issue type from a JSON representation and adds the issue newly created issue type to the default issue
 type scheme.


```js
jira_local.createIssueType(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.2.issuetype.id.delete
Deletes the specified issue type. If the issue type has any associated issues, these issues will be migrated to
 the alternative issue type specified in the parameter. You can determine the alternative issue types by calling
 the <b>/rest/api/2/issuetype/{id}/alternatives</b> resource.


```js
jira_local.api.2.issuetype.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * alternativeIssueTypeId `string`: the id of an issue type to which issues associated with the removed issue type will be migrated.
  * id **required** `string`: the id of the issue type to update.

#### Output
*Output schema unknown*

### api.2.issuetype.id.get
Returns a full representation of the issue type that has the given id.


```js
jira_local.api.2.issuetype.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the issue type to update.

#### Output
*Output schema unknown*

### updateIssueType
Updates the specified issue type from a JSON representation.


```js
jira_local.updateIssueType({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the issue type to update.

#### Output
*Output schema unknown*

### getAlternativeIssueTypes
Returns a list of all alternative issue types for the given issue type id. The list will contain these issues types, to which
 issues assigned to the given issue type can be migrated. The suitable alternatives are issue types which are assigned
 to the same workflow, the same field configuration and the same screen scheme.


```js
jira_local.getAlternativeIssueTypes({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### api.2.issuetype.id.avatar.post
Converts temporary avatar into a real avatar


```js
jira_local.api.2.issuetype.id.avatar.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the issue type, which avatar is updated.

#### Output
*Output schema unknown*

### api.2.issuetype.id.avatar.temporary.post
Creates temporary avatar using multipart. The response is sent back as JSON stored in a textarea. This is because
 the client uses remote iframing to submit avatars using multipart. So we must send them a valid HTML page back from
 which the client parses the JSON from.
 <p>
 Creating a temporary avatar is part of a 3-step process in uploading a new
 avatar for an issue type: upload, crop, confirm. This endpoint allows you to use a multipart upload
 instead of sending the image directly as the request body.
 </p>
 <p>
 You *must* use "avatar" as the name of the upload parameter:</p>
 <p>
 <pre>
 curl -c cookiejar.txt -X POST -u admin:admin -H "X-Atlassian-Token: no-check" \
   -F "avatar=@mynewavatar.png;type=image/png" \
   'http://localhost:8090/jira/rest/api/2/issuetype/1/avatar/temporary'
 </pre>


```js
jira_local.api.2.issuetype.id.avatar.temporary.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the issue type, which avatar is updated.

#### Output
*Output schema unknown*

### getPropertyKeys
Returns the keys of all properties for the issue type identified by the id.


```js
jira_local.getPropertyKeys({
  "issueTypeId": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: the issue type from which the keys will be returned

#### Output
*Output schema unknown*

### api.2.issuetype.issueTypeId.properties.propertyKey.delete
Removes the property from the issue type identified by the id. Ths user removing the property is required
 to have permissions to edit the issue type.


```js
jira_local.api.2.issuetype.issueTypeId.properties.propertyKey.delete({
  "issueTypeId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: the issue type from which the keys will be returned
  * propertyKey **required** `string`: the key of the property to return

#### Output
*Output schema unknown*

### api.2.issuetype.issueTypeId.properties.propertyKey.get
Returns the value of the property with a given key from the issue type identified by the id. The user who retrieves
 the property is required to have permissions to view the issue type.


```js
jira_local.api.2.issuetype.issueTypeId.properties.propertyKey.get({
  "issueTypeId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: the issue type from which the keys will be returned
  * propertyKey **required** `string`: the key of the property to return

#### Output
*Output schema unknown*

### api.2.issuetype.issueTypeId.properties.propertyKey.put
Sets the value of the specified issue type's property.
 <p>
 You can use this resource to store a custom data against an issue type identified by the id. The user
 who stores the data is required to have permissions to edit an issue type.
 </p>


```js
jira_local.api.2.issuetype.issueTypeId.properties.propertyKey.put({
  "issueTypeId": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * issueTypeId **required** `string`: the issue type from which the keys will be returned
  * propertyKey **required** `string`: the key of the property to return

#### Output
*Output schema unknown*

### getAutoComplete
Returns the auto complete data required for JQL searches.


```js
jira_local.getAutoComplete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getFieldAutoCompleteForQueryString
Returns auto complete suggestions for JQL search.


```js
jira_local.getFieldAutoCompleteForQueryString({}, context)
```

#### Input
* input `object`
  * fieldName `string`: the field name for which the suggestions are generated.
  * fieldValue `string`: the portion of the field value that has already been provided by the user.
  * predicateName `string`: the predicate for which the suggestions are generated. Suggestions are generated only for: "by", "from" and "to".
  * predicateValue `string`: the portion of the predicate value that has already been provided by the user.

#### Output
*Output schema unknown*

### validate



```js
jira_local.validate(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### areMetricsExposed



```js
jira_local.areMetricsExposed(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getAvailableMetrics



```js
jira_local.getAvailableMetrics(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### start



```js
jira_local.start(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### stop



```js
jira_local.stop(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getPermissions
Returns all permissions in the system and whether the currently logged in user has them. You can optionally provide a specific context to get permissions for
 (projectKey OR projectId OR issueKey OR issueId)
 <ul>
 <li> When no context supplied the project related permissions will return true if the user has that permission in ANY project </li>
 <li> If a project context is provided, project related permissions will return true if the user has the permissions in the specified project.
 For permissions that are determined using issue data (e.g Current Assignee), true will be returned if the user meets the permission criteria in ANY issue in that project </li>
 <li> If an issue context is provided, it will return whether or not the user has each permission in that specific issue</li>
 </ul>
 <p>
 NB: The above means that for issue-level permissions (EDIT_ISSUE for example), hasPermission may be true when no context is provided, or when a project context is provided,
 <b>but</b> may be false for any given (or all) issues. This would occur (for example) if Reporters were given the EDIT_ISSUE permission. This is because
 any user could be a reporter, except in the context of a concrete issue, where the reporter is known.
 </p>
 <p>
 Global permissions will still be returned for all scopes.
 </p>
 <p>
 Prior to version 6.4 this service returned project permissions with keys corresponding to com.atlassian.jira.security.Permissions.Permission constants.
 Since 6.4 those keys are considered deprecated and this service returns system project permission keys corresponding to constants defined in com.atlassian.jira.permission.ProjectPermissions.
 Permissions with legacy keys are still also returned for backwards compatibility, they are marked with an attribute deprecatedKey=true.
 The attribute is missing for project permissions with the current keys.
 </p>


```js
jira_local.getPermissions({}, context)
```

#### Input
* input `object`
  * projectKey `string`: - key of project to scope returned permissions for.
  * projectId `string`: - id of project to scope returned permissions for.
  * issueKey `string`: - key of the issue to scope returned permissions for.
  * issueId `string`: - id of the issue to scope returned permissions for.

#### Output
*Output schema unknown*

### removePreference
Removes preference of the currently logged in user. Preference key must be provided as input parameters (key). If
 key parameter is not provided or wrong - status code 404. If preference is unset - status code 204.


```js
jira_local.removePreference({}, context)
```

#### Input
* input `object`
  * key `string`: - key of the preference to be removed.

#### Output
*Output schema unknown*

### getPreference
Returns preference of the currently logged in user. Preference key must be provided as input parameter (key). The
 value is returned exactly as it is. If key parameter is not provided or wrong - status code 404. If value is
 found  - status code 200.


```js
jira_local.getPreference({}, context)
```

#### Input
* input `object`
  * key `string`: - key of the preference to be returned.

#### Output
*Output schema unknown*

### setPreference
Sets preference of the currently logged in user. Preference key must be provided as input parameters (key). Value
 must be provided as post body. If key or value parameter is not provided - status code 404. If preference is set
 - status code 204.


```js
jira_local.setPreference({}, context)
```

#### Input
* input `object`
  * key `string`: - key of the preference to be set.

#### Output
*Output schema unknown*

### api.2.myself.get
Returns currently logged user. This resource cannot be accessed anonymously.


```js
jira_local.api.2.myself.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.2.myself.put
Modify currently logged user. The "value" fields present will override the existing value.
 Fields skipped in request will not be changed. Only email and display name can be change that way.
 Requires user password.


```js
jira_local.api.2.myself.put(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### changeMyPassword
Modify caller password.


```js
jira_local.changeMyPassword(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getNotificationSchemes
Returns a <a href="#pagination">paginated</a> list of notification schemes. In order to access notification scheme, the calling user is
 required to have permissions to administer at least one project associated with the requested notification scheme. Each scheme contains
 a list of events and recipient configured to receive notifications for these events. Consumer should allow events without recipients to appear in response.
 The list is ordered by the scheme's name.
 Follow the documentation of /notificationscheme/{id} resource for all details about returned value.


```js
jira_local.getNotificationSchemes({}, context)
```

#### Input
* input `object`
  * startAt `integer`: the index of the first notification scheme to return (0 based).
  * maxResults `integer`: the maximum number of notification schemes to return (max 50).
  * expand `string`

#### Output
*Output schema unknown*

### api.2.notificationscheme.id.get
Returns a full representation of the notification scheme for the given id. This resource will return a
 notification scheme containing a list of events and recipient configured to receive notifications for these events. Consumer
 should allow events without recipients to appear in response. User accessing
 the data is required to have permissions to administer at least one project associated with the requested notification scheme.
 <p>
 Notification recipients can be:
 <ul>
 <li>current assignee - the value of the notificationType is CurrentAssignee</li>
 <li>issue reporter - the value of the notificationType is Reporter</li>
 <li>current user - the value of the notificationType is CurrentUser</li>
 <li>project lead - the value of the notificationType is ProjectLead</li>
 <li>component lead - the value of the notificationType is ComponentLead</li>
 <li>all watchers - the value of the notification type is AllWatchers</li>
 <li>configured user - the value of the notification type is User. Parameter will contain key of the user. Information about the user will be provided
 if <b>user</b> expand parameter is used. </li>
 <li>configured group - the value of the notification type is Group. Parameter will contain name of the group. Information about the group will be provided
 if <b>group</b> expand parameter is used. </li>
 <li>configured email address - the value of the notification type is EmailAddress, additionally information about the email will be provided.</li>
 <li>users or users in groups in the configured custom fields - the value of the notification type is UserCustomField or GroupCustomField. Parameter
 will contain id of the custom field. Information about the field will be provided if <b>field</b> expand parameter is used. </li>
 <li>configured project role - the value of the notification type is ProjectRole. Parameter will contain project role id. Information about the project role
 will be provided if <b>projectRole</b> expand parameter is used. </li>
 </ul>
 Please see the example for reference.
 </p>
 The events can be JIRA system events or events configured by administrator. In case of the system events, data about theirs
 ids, names and descriptions is provided. In case of custom events, the template event is included as well.


```js
jira_local.api.2.notificationscheme.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * expand `string`
  * id **required** `integer`: an id of the notification scheme to retrieve

#### Output
*Output schema unknown*

### getPasswordPolicy
Returns the list of requirements for the current password policy. For example, "The password must have at least 10 characters.",
 "The password must not be similar to the user's name or email address.", etc.


```js
jira_local.getPasswordPolicy({}, context)
```

#### Input
* input `object`
  * hasOldPassword `boolean`: whether or not the user will be required to enter their current password.  Use

#### Output
*Output schema unknown*

### policyCheckCreateUser
Returns a list of statements explaining why the password policy would disallow a proposed password for a new user.
 <p>
 You can use this method to test the password policy validation. This could be done prior to an action 
 where a new user and related password are created, using methods like the ones in 
 <a href="https://docs.atlassian.com/jira/latest/com/atlassian/jira/bc/user/UserService.html">UserService</a>.      
 For example, you could use this to validate a password in a create user form in the user interface, as the user enters it.<br/>
 The username and new password must be not empty to perform the validation.<br/>
 Note, this method will help you validate against the policy only. It won't check any other validations that might be performed 
 when creating a new user, e.g. checking whether a user with the same name already exists.
 </p>


```js
jira_local.policyCheckCreateUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### policyCheckUpdateUser
Returns a list of statements explaining why the password policy would disallow a proposed new password for a user with an existing password.
 <p>
 You can use this method to test the password policy validation. This could be done prior to an action where the password 
 is actually updated, using methods like <a href="https://docs.atlassian.com/jira/latest/com/atlassian/jira/web/action/user/ChangePassword.html">ChangePassword</a>      
 or <a href="https://docs.atlassian.com/jira/latest/com/atlassian/jira/web/action/user/ResetPassword.html">ResetPassword</a>. 
 For example, you could use this to validate a password in a change password form in the user interface, as the user enters it.<br/>
 The user must exist and the username and new password must be not empty, to perform the validation.<br/>
 Note, this method will help you validate against the policy only. It won't check any other validations that might be performed 
 when submitting a password change/reset request, e.g. verifying whether the old password is valid.
 </p>


```js
jira_local.policyCheckUpdateUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getAllPermissions
Returns all permissions that are present in the JIRA instance - Global, Project and the global ones added by plugins


```js
jira_local.getAllPermissions(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getPermissionSchemes
Returns a list of all permission schemes.
 <p>
 By default only shortened beans are returned. If you want to include permissions of all the schemes,
 then specify the <b>permissions</b> expand parameter. Permissions will be included also if you specify
 any other expand parameter.
 </p>


```js
jira_local.getPermissionSchemes({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
*Output schema unknown*

### createPermissionScheme
Create a new permission scheme.
 This method can create schemes with a defined permission set, or without.


```js
jira_local.createPermissionScheme({}, context)
```

#### Input
* input `object`
  * expand `string`

#### Output
*Output schema unknown*

### getSchemeAttribute



```js
jira_local.getSchemeAttribute({
  "permissionSchemeId": 0,
  "attributeKey": ""
}, context)
```

#### Input
* input `object`
  * permissionSchemeId **required** `integer`: permission scheme id
  * attributeKey **required** `string`: permission scheme attribute key

#### Output
*Output schema unknown*

### setSchemeAttribute
Updates or inserts the attribute for a permission scheme specified by permission scheme id.
 The attribute consists of the key and the value. The value will be converted to Boolean using Boolean#valueOf.


```js
jira_local.setSchemeAttribute({
  "permissionSchemeId": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * permissionSchemeId **required** `integer`: permission scheme id
  * key **required** `string`: permission scheme attribute key

#### Output
*Output schema unknown*

### deletePermissionScheme
Deletes a permission scheme identified by the given id.


```js
jira_local.deletePermissionScheme({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * schemeId **required** `integer`

#### Output
*Output schema unknown*

### getPermissionScheme
Returns a permission scheme identified by the given id.


```js
jira_local.getPermissionScheme({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * expand `string`
  * schemeId **required** `integer`

#### Output
*Output schema unknown*

### updatePermissionScheme
Updates a permission scheme.
 <p>
 If the permissions list is present then it will be set in the permission scheme, which basically means it will overwrite any permission grants that
 existed in the permission scheme. Sending an empty list will remove all permission grants from the permission scheme.
 </p>
 <p>
 To update just the name and description, do not send permissions list at all.
 </p>
 <p>
 To add or remove a single permission grant instead of updating the whole list at once use the <b>{schemeId}/permission/</b> resource.
 </p>


```js
jira_local.updatePermissionScheme({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * expand `string`
  * schemeId **required** `integer`

#### Output
*Output schema unknown*

### getPermissionSchemeGrants
Returns all permission grants of the given permission scheme.


```js
jira_local.getPermissionSchemeGrants({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * expand `string`
  * schemeId **required** `integer`

#### Output
*Output schema unknown*

### createPermissionGrant
Creates a permission grant in a permission scheme.


```js
jira_local.createPermissionGrant({
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * expand `string`
  * schemeId **required** `integer`

#### Output
*Output schema unknown*

### deletePermissionSchemeEntity
Deletes a permission grant from a permission scheme.


```js
jira_local.deletePermissionSchemeEntity({
  "permissionId": 0,
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * permissionId **required** `integer`
  * schemeId **required** `integer`

#### Output
*Output schema unknown*

### getPermissionSchemeGrant
Returns a permission grant identified by the given id.


```js
jira_local.getPermissionSchemeGrant({
  "permissionId": 0,
  "schemeId": 0
}, context)
```

#### Input
* input `object`
  * expand `string`
  * permissionId **required** `integer`
  * schemeId **required** `integer`

#### Output
*Output schema unknown*

### getPriorities
Returns a list of all issue priorities.


```js
jira_local.getPriorities(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getPriority
Returns an issue priority.


```js
jira_local.getPriority({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: a String containing the priority id

#### Output
*Output schema unknown*

### getAllProjects
Returns all projects which are visible for the currently logged in user. If no user is logged in, it returns the
 list of projects that are visible when using anonymous access.


```js
jira_local.getAllProjects({}, context)
```

#### Input
* input `object`
  * expand `string`: the parameters to expand
  * recent `integer`: if this parameter is set then only projects recently accessed by the current user (if not logged in then based on HTTP session) will be returned (maximum count limited to the specified number but no more than 20).

#### Output
*Output schema unknown*

### createProject
Creates a new project.


```js
jira_local.createProject(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getAllProjectTypes
Returns all the project types defined on the JIRA instance, not taking into account whether
 the license to use those project types is valid or not.


```js
jira_local.getAllProjectTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getProjectTypeByKey
Returns the project type with the given key.


```js
jira_local.getProjectTypeByKey({
  "projectTypeKey": ""
}, context)
```

#### Input
* input `object`
  * projectTypeKey **required** `string`

#### Output
*Output schema unknown*

### getAccessibleProjectTypeByKey
Returns the project type with the given key, if it is accessible to the logged in user.
 This takes into account whether the user is licensed on the Application that defines the project type.


```js
jira_local.getAccessibleProjectTypeByKey({
  "projectTypeKey": ""
}, context)
```

#### Input
* input `object`
  * projectTypeKey **required** `string`

#### Output
*Output schema unknown*

### deleteProject
Deletes a project.


```js
jira_local.deleteProject({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project id or project key

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.get
Contains a full representation of a project in JSON format.
 <p>
 All project keys associated with the project will only be returned if <code>expand=projectKeys</code>.
 <p>


```js
jira_local.api.2.project.projectIdOrKey.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: the parameters to expand
  * projectIdOrKey **required** `string`: the project id or project key

#### Output
*Output schema unknown*

### updateProject
Updates a project.
 <p>
 Only non null values sent in JSON will be updated in the project.</p>
 <p>
 Values available for the assigneeType field are: "PROJECT_LEAD" and "UNASSIGNED".</p>


```js
jira_local.updateProject({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: the parameters to expand in returned project
  * projectIdOrKey **required** `string`: the project id or project key

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.avatar.post
Converts temporary avatar into a real avatar


```js
jira_local.api.2.project.projectIdOrKey.avatar.post({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.avatar.put



```js
jira_local.api.2.project.projectIdOrKey.avatar.put({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.avatar.temporary.post
Creates temporary avatar using multipart. The response is sent back as JSON stored in a textarea. This is because
 the client uses remote iframing to submit avatars using multipart. So we must send them a valid HTML page back from
 which the client parses the JSON.


```js
jira_local.api.2.project.projectIdOrKey.avatar.temporary.post({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: Project id or project key

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.avatar.id.delete
Deletes avatar


```js
jira_local.api.2.project.projectIdOrKey.avatar.id.delete({
  "projectIdOrKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: Project id or project key
  * id **required** `integer`: database id for avatar

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.avatars.get
Returns all avatars which are visible for the currently logged in user.  The avatars are grouped into
 system and custom.


```js
jira_local.api.2.project.projectIdOrKey.avatars.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: project id or project key

#### Output
*Output schema unknown*

### getProjectComponents
Contains a full representation of a the specified project's components.


```js
jira_local.getProjectComponents({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project id or project key

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.properties.get
Returns the keys of all properties for the project identified by the key or by the id.


```js
jira_local.api.2.project.projectIdOrKey.properties.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project from which keys will be returned.

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.properties.propertyKey.delete
Removes the property from the project identified by the key or by the id. Ths user removing the property is required
 to have permissions to administer the project.


```js
jira_local.api.2.project.projectIdOrKey.properties.propertyKey.delete({
  "projectIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project from which keys will be returned.
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.properties.propertyKey.get
Returns the value of the property with a given key from the project identified by the key or by the id. The user who retrieves
 the property is required to have permissions to read the project.


```js
jira_local.api.2.project.projectIdOrKey.properties.propertyKey.get({
  "projectIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project from which keys will be returned.
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.properties.propertyKey.put
Sets the value of the specified project's property.
 <p>
 You can use this resource to store a custom data against the project identified by the key or by the id. The user
 who stores the data is required to have permissions to administer the project.
 </p>


```js
jira_local.api.2.project.projectIdOrKey.properties.propertyKey.put({
  "projectIdOrKey": "",
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project from which keys will be returned.
  * propertyKey **required** `string`: the key of the property to return.

#### Output
*Output schema unknown*

### api.2.project.projectIdOrKey.role.get
Returns all roles in the given project Id or key, with links to full details on each role.


```js
jira_local.api.2.project.projectIdOrKey.role.get({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project id or project key

#### Output
*Output schema unknown*

### deleteActor
Deletes actors (users or groups) from a project role.
 <p>
 <ul>
 <li>Delete a user from the role: <code>/rest/api/2/project/{projectIdOrKey}/role/{roleId}?user={username}</code></li>
 <li>Delete a group from the role: <code>/rest/api/2/project/{projectIdOrKey}/role/{roleId}?group={groupname}</code></li>
 </ul>


```js
jira_local.deleteActor({
  "projectIdOrKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * user `string`: the username to remove from the project role
  * group `string`: the groupname to remove from the project role
  * projectIdOrKey **required** `string`: the project id or project key
  * id **required** `integer`: the project role id

#### Output
*Output schema unknown*

### getProjectRole
Returns the details for a given project role in a project.


```js
jira_local.getProjectRole({
  "projectIdOrKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project id or project key
  * id **required** `integer`: the project role id

#### Output
*Output schema unknown*

### addActorUsers
Adds an actor (user or group) to a project role.


```js
jira_local.addActorUsers({
  "projectIdOrKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project id or project key
  * id **required** `integer`: the project role id

#### Output
*Output schema unknown*

### setActors
Updates a project role to include the specified actors (users or groups).


```js
jira_local.setActors({
  "projectIdOrKey": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: the project id or project key
  * id **required** `integer`: the project role id

#### Output
*Output schema unknown*

### getAllStatuses
Get all issue types with valid status values for a project


```js
jira_local.getAllStatuses({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: Project id or project key

#### Output
*Output schema unknown*

### updateProjectType
Updates the type of a project.


```js
jira_local.updateProjectType({
  "projectIdOrKey": "",
  "newProjectTypeKey": ""
}, context)
```

#### Input
* input `object`
  * projectIdOrKey **required** `string`: identity of the project to update
  * newProjectTypeKey **required** `string`: The key of the new project type

#### Output
*Output schema unknown*

### getProjectVersionsPaginated
Returns all versions for the specified project. Results are <a href="#pagination">paginated</a>.
 <p>
 Results can be ordered by the following fields:
 <ul>
 <li>sequence</li>
 <li>name</li>
 <li>startDate</li>
 <li>releaseDate</li>
 </ul>
 </p>


```js
jira_local.getProjectVersionsPaginated({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * startAt `integer`: the page offset, if not specified then defaults to 0
  * maxResults `integer`: how many results on the page should be included. Defaults to 50.
  * orderBy `string`: ordering of the results.
  * expand `string`: the parameters to expand
  * projectIdOrKey **required** `string`: the project id or project key

#### Output
*Output schema unknown*

### getProjectVersions
Contains a full representation of a the specified project's versions.


```js
jira_local.getProjectVersions({
  "projectIdOrKey": ""
}, context)
```

#### Input
* input `object`
  * expand `string`: the parameters to expand
  * projectIdOrKey **required** `string`: the project id or project key

#### Output
*Output schema unknown*

### api.2.project.projectKeyOrId.issuesecuritylevelscheme.get
Returns the issue security scheme for project.


```js
jira_local.api.2.project.projectKeyOrId.issuesecuritylevelscheme.get({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * projectKeyOrId **required** `string`

#### Output
*Output schema unknown*

### api.2.project.projectKeyOrId.notificationscheme.get
Gets a notification scheme associated with the project.
 Follow the documentation of /notificationscheme/{id} resource for all details about returned value.


```js
jira_local.api.2.project.projectKeyOrId.notificationscheme.get({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * expand `string`
  * projectKeyOrId **required** `string`: key or id of the project

#### Output
*Output schema unknown*

### getAssignedPermissionScheme
Gets a permission scheme assigned with a project.


```js
jira_local.getAssignedPermissionScheme({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * expand `string`
  * projectKeyOrId **required** `string`: key or id of the project

#### Output
*Output schema unknown*

### assignPermissionScheme
Assigns a permission scheme with a project.


```js
jira_local.assignPermissionScheme({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * expand `string`
  * projectKeyOrId **required** `string`: key or id of the project

#### Output
*Output schema unknown*

### getSecurityLevelsForProject
Returns all security levels for the project that the current logged in user has access to.
 If the user does not have the Set Issue Security permission, the list will be empty.


```js
jira_local.getSecurityLevelsForProject({
  "projectKeyOrId": ""
}, context)
```

#### Input
* input `object`
  * projectKeyOrId **required** `string`: - key or id of project to list the security levels for

#### Output
*Output schema unknown*

### getAllProjectCategories
Returns all project categories


```js
jira_local.getAllProjectCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### createProjectCategory
Create a project category via POST.


```js
jira_local.createProjectCategory(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### removeProjectCategory
Delete a project category.


```js
jira_local.removeProjectCategory({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### getProjectCategoryById
Contains a representation of a project category in JSON format.


```js
jira_local.getProjectCategoryById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### updateProjectCategory
Modify a project category via PUT. Any fields present in the PUT will override existing values. As a convenience, if a field
 is not present, it is silently ignored.


```js
jira_local.updateProjectCategory({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### api.2.projectvalidate.key.get
Validates a project key.


```js
jira_local.api.2.projectvalidate.key.get({}, context)
```

#### Input
* input `object`
  * key `string`: the project key

#### Output
*Output schema unknown*

### getReindexInfo
Returns information on the system reindexes.  If a reindex is currently taking place then information about this reindex is returned.
 If there is no active index task, then returns information about the latest reindex task run, otherwise returns a 404
 indicating that no reindex has taken place.


```js
jira_local.getReindexInfo({}, context)
```

#### Input
* input `object`
  * taskId `integer`: the id of an indexing task you wish to obtain details on.  If omitted, then defaults to the standard behaviour and

#### Output
*Output schema unknown*

### reindex
Kicks off a reindex.  Need Admin permissions to perform this reindex.


```js
jira_local.reindex({}, context)
```

#### Input
* input `object`
  * type `string`: Case insensitive String indicating type of reindex.  If omitted, then defaults to BACKGROUND_PREFERRED.
  * indexComments `boolean`: Indicates that comments should also be reindexed. Not relevant for foreground reindex, where comments are always reindexed.
  * indexChangeHistory `boolean`: Indicates that changeHistory should also be reindexed. Not relevant for foreground reindex, where changeHistory is always reindexed.
  * indexWorklogs `boolean`: Indicates that changeHistory should also be reindexed. Not relevant for foreground reindex, where changeHistory is always reindexed.

#### Output
*Output schema unknown*

### reindexIssues
Reindexes one or more individual issues.  Indexing is performed synchronously - the call returns when indexing of
 the issues has completed or a failure occurs.
 <p>
 Use either explicitly specified issue IDs or a JQL query to select issues to reindex.


```js
jira_local.reindexIssues({}, context)
```

#### Input
* input `object`
  * issueId `string`: the IDs or keys of one or more issues to reindex.
  * indexComments `boolean`: Indicates that comments should also be reindexed.
  * indexChangeHistory `boolean`: Indicates that changeHistory should also be reindexed.
  * indexWorklogs `boolean`: Indicates that changeHistory should also be reindexed.

#### Output
*Output schema unknown*

### getReindexProgress
Returns information on the system reindexes.  If a reindex is currently taking place then information about this reindex is returned.
 If there is no active index task, then returns information about the latest reindex task run, otherwise returns a 404
 indicating that no reindex has taken place.


```js
jira_local.getReindexProgress({}, context)
```

#### Input
* input `object`
  * taskId `integer`: the id of an indexing task you wish to obtain details on.  If omitted, then defaults to the standard behaviour and

#### Output
*Output schema unknown*

### processRequests
Executes any pending reindex requests.  Returns a JSON array containing the IDs of the reindex requests
 that are being processed.  Execution is asynchronous - progress of the returned tasks can be monitored through
 other REST calls.


```js
jira_local.processRequests(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getProgressBulk
Retrieves the progress of a multiple reindex requests.  Only reindex requests that actually exist will be returned
 in the results.


```js
jira_local.getProgressBulk({}, context)
```

#### Input
* input `object`
  * requestId `string`: the reindex request IDs.

#### Output
*Output schema unknown*

### getProgress
Retrieves the progress of a single reindex request.


```js
jira_local.getProgress({
  "requestId": 0
}, context)
```

#### Input
* input `object`
  * requestId **required** `integer`: the reindex request ID.

#### Output
*Output schema unknown*

### getResolutions
Returns a list of all resolutions.


```js
jira_local.getResolutions(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getResolution
Returns a resolution.


```js
jira_local.getResolution({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: a String containing the resolution id

#### Output
*Output schema unknown*

### api.2.role.get
Get all the ProjectRoles available in JIRA. Currently this list is global.


```js
jira_local.api.2.role.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### createProjectRole
Creates a new ProjectRole to be available in JIRA.
 The created role does not have any default actors assigned.


```js
jira_local.createProjectRole(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### deleteProjectRole
Deletes a role. May return 403 in the future


```js
jira_local.deleteProjectRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * swap `integer`: if given, removes a role even if it is used in scheme by replacing the role with the given one
  * id **required** `integer`

#### Output
*Output schema unknown*

### getProjectRolesById
Get a specific ProjectRole available in JIRA.


```js
jira_local.getProjectRolesById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### partialUpdateProjectRole
Partially updates a roles name or description.


```js
jira_local.partialUpdateProjectRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### fullyUpdateProjectRole
Fully updates a roles. Both name and description must be given.


```js
jira_local.fullyUpdateProjectRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
*Output schema unknown*

### deleteProjectRoleActorsFromRole
Removes default actor from the given role.


```js
jira_local.deleteProjectRoleActorsFromRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * user `string`: if given, removes an actor from given role
  * group `string`: if given, removes an actor from given role
  * id **required** `integer`: the role id to remove the actors from

#### Output
*Output schema unknown*

### getProjectRoleActorsForRole
Gets default actors for the given role.


```js
jira_local.getProjectRoleActorsForRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the role id to remove the actors from

#### Output
*Output schema unknown*

### addProjectRoleActorsToRole
Adds default actors to the given role. The request data should contain a list of usernames or a list of groups to add.


```js
jira_local.addProjectRoleActorsToRole({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the role id to remove the actors from

#### Output
*Output schema unknown*

### addFieldToDefaultScreen
Adds field or custom field to the default tab


```js
jira_local.addFieldToDefaultScreen({
  "fieldId": ""
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: id of field / custom field

#### Output
*Output schema unknown*

### getFieldsToAdd
Gets available fields for screen. i.e ones that haven't already been added.


```js
jira_local.getFieldsToAdd({
  "screenId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: id of screen

#### Output
*Output schema unknown*

### getAllTabs
Returns a list of all tabs for the given screen


```js
jira_local.getAllTabs({
  "screenId": 0
}, context)
```

#### Input
* input `object`
  * projectKey `string`: the key of the project; this parameter is optional
  * screenId **required** `integer`: id of screen

#### Output
*Output schema unknown*

### addTab
Creates tab for given screen


```js
jira_local.addTab({
  "screenId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: id of screen

#### Output
*Output schema unknown*

### deleteTab
Deletes tab to give screen


```js
jira_local.deleteTab({
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: id of screen
  * tabId **required** `integer`: id of tab

#### Output
*Output schema unknown*

### renameTab
Renames tab on given screen


```js
jira_local.renameTab({
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: id of screen
  * tabId **required** `integer`: id of tab

#### Output
*Output schema unknown*

### getAllFields
Gets all fields for a given tab


```js
jira_local.getAllFields({
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * projectKey `string`: the key of the project; this parameter is optional
  * screenId **required** `integer`: id of screen
  * tabId **required** `integer`: id of tab

#### Output
*Output schema unknown*

### addField
Adds field to the given tab.


```js
jira_local.addField({
  "screenId": 0,
  "tabId": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: id of screen
  * tabId **required** `integer`: id of tab

#### Output
*Output schema unknown*

### removeField
Removes field from given tab


```js
jira_local.removeField({
  "screenId": 0,
  "tabId": 0,
  "id": ""
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: id of screen
  * tabId **required** `integer`: id of tab
  * id **required** `string`

#### Output
*Output schema unknown*

### moveField
Moves field on the given tab


```js
jira_local.moveField({
  "screenId": 0,
  "tabId": 0,
  "id": ""
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: id of screen
  * tabId **required** `integer`: id of tab
  * id **required** `string`

#### Output
*Output schema unknown*

### moveTab
Moves tab position


```js
jira_local.moveTab({
  "screenId": 0,
  "tabId": 0,
  "pos": 0
}, context)
```

#### Input
* input `object`
  * screenId **required** `integer`: id of screen
  * tabId **required** `integer`: id of tab
  * pos **required** `integer`: position of tab

#### Output
*Output schema unknown*

### search
Searches for issues using JQL.
 <p>
 <b>Sorting</b>
 the <code>jql</code> parameter is a full <a href="http://confluence.atlassian.com/display/JIRA/Advanced+Searching">JQL</a>
 expression, and includes an <code>ORDER BY</code> clause.
 </p>
 <p>
 The <code>fields</code> param (which can be specified multiple times) gives a comma-separated list of fields
 to include in the response. This can be used to retrieve a subset of fields.
 A particular field can be excluded by prefixing it with a minus.
 <p>
 By default, only navigable (<code>*navigable</code>) fields are returned in this search resource. Note: the default is different
 in the get-issue resource -- the default there all fields (<code>*all</code>).
 <ul>
 <li><code>*all</code> - include all fields</li>
 <li><code>*navigable</code> - include just navigable fields</li>
 <li><code>summary,comment</code> - include just the summary and comments</li>
 <li><code>-description</code> - include navigable fields except the description (the default is <code>*navigable</code> for search)</li>
 <li><code>*all,-comment</code> - include everything except comments</li>
 </ul>
 <p>
 </p>
 <p><b>GET vs POST:</b>
 If the JQL query is too large to be encoded as a query param you should instead
 POST to this resource.
 </p>
 <p>
 <b>Expanding Issues in the Search Result:</b>
 It is possible to expand the issues returned by directly specifying the expansion on the expand parameter passed
 in to this resources.
 </p>
 <p>
 For instance, to expand the &quot;changelog&quot; for all the issues on the search result, it is neccesary to
 specify &quot;changelog&quot; as one of the values to expand.
 </p>


```js
jira_local.search({}, context)
```

#### Input
* input `object`
  * jql `string`: a JQL query string
  * startAt `integer`: the index of the first issue to return (0-based)
  * maxResults `integer`: the maximum number of issues to return (defaults to 50). The maximum allowable value is
  * validateQuery `boolean`: whether to validate the JQL query
  * fields `string`: the list of fields to return for each issue. By default, all navigable fields are returned.
  * expand `string`: A comma-separated list of the parameters to expand.

#### Output
*Output schema unknown*

### searchUsingSearchRequest
Performs a search using JQL.


```js
jira_local.searchUsingSearchRequest(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getIssuesecuritylevel
Returns a full representation of the security level that has the given id.


```js
jira_local.getIssuesecuritylevel({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: a String containing an issue security level id

#### Output
*Output schema unknown*

### getServerInfo
Returns general information about the current JIRA server.


```js
jira_local.getServerInfo({}, context)
```

#### Input
* input `object`
  * doHealthCheck `boolean`

#### Output
*Output schema unknown*

### setBaseURL
Sets the base URL that is configured for this JIRA instance.


```js
jira_local.setBaseURL(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getIssueNavigatorDefaultColumns
Returns the default system columns for issue navigator. Admin permission will be required.


```js
jira_local.getIssueNavigatorDefaultColumns(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### setIssueNavigatorDefaultColumns
Sets the default system columns for issue navigator. Admin permission will be required.


```js
jira_local.setIssueNavigatorDefaultColumns(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getStatuses
Returns a list of all statuses


```js
jira_local.getStatuses(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getStatus
Returns a full representation of the Status having the given id or name.


```js
jira_local.getStatus({
  "idOrName": ""
}, context)
```

#### Input
* input `object`
  * idOrName **required** `string`: a numeric Status id or a status name

#### Output
*Output schema unknown*

### getStatusCategories
Returns a list of all status categories


```js
jira_local.getStatusCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getStatusCategory
Returns a full representation of the StatusCategory having the given id or key


```js
jira_local.getStatusCategory({
  "idOrKey": ""
}, context)
```

#### Input
* input `object`
  * idOrKey **required** `string`: a numeric StatusCategory id or a status category key

#### Output
*Output schema unknown*

### getAvatars



```js
jira_local.getAvatars({
  "type": "",
  "owningObjectId": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`
  * owningObjectId **required** `string`

#### Output
*Output schema unknown*

### api.2.universal_avatar.type.type.owner.owningObjectId.avatar.post



```js
jira_local.api.2.universal_avatar.type.type.owner.owningObjectId.avatar.post({
  "type": "",
  "owningObjectId": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`
  * owningObjectId **required** `string`

#### Output
*Output schema unknown*

### api.2.universal_avatar.type.type.owner.owningObjectId.avatar.id.delete
Deletes avatar


```js
jira_local.api.2.universal_avatar.type.type.owner.owningObjectId.avatar.id.delete({
  "id": 0,
  "type": "",
  "owningObjectId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: database id for avatar
  * type **required** `string`: Project id or project key
  * owningObjectId **required** `string`

#### Output
*Output schema unknown*

### api.2.universal_avatar.type.type.owner.owningObjectId.temp.post



```js
jira_local.api.2.universal_avatar.type.type.owner.owningObjectId.temp.post({
  "type": "",
  "owningObjectId": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`
  * owningObjectId **required** `string`

#### Output
*Output schema unknown*

### getUpgradeResult
Returns the result of the last upgrade task.

 Returns {@link javax.ws.rs.core.Response#seeOther(java.net.URI)} if still running.


```js
jira_local.getUpgradeResult(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### runUpgradesNow
Runs any pending delayed upgrade tasks.  Need Admin permissions to do this.


```js
jira_local.runUpgradesNow(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### removeUser
Removes user.


```js
jira_local.removeUser({}, context)
```

#### Input
* input `object`
  * username `string`: the username
  * key `string`: user key

#### Output
*Output schema unknown*

### api.2.user.get
Returns a user. This resource cannot be accessed anonymously.


```js
jira_local.api.2.user.get({}, context)
```

#### Input
* input `object`
  * username `string`: the username
  * key `string`: user key

#### Output
*Output schema unknown*

### createUser
Create user. By default created user will not be notified with email.
 If password field is not set then password will be randomly generated.


```js
jira_local.createUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.2.user.put
Modify user. The "value" fields present will override the existing value.
 Fields skipped in request will not be changed.


```js
jira_local.api.2.user.put({}, context)
```

#### Input
* input `object`
  * username `string`: the username
  * key `string`: user key

#### Output
*Output schema unknown*

### removeUserFromApplication
Remove user from given application. Admin permission will be required to perform this operation.


```js
jira_local.removeUserFromApplication({}, context)
```

#### Input
* input `object`
  * username `string`: username
  * applicationKey `string`: application key

#### Output
*Output schema unknown*

### addUserToApplication
Add user to given application. Admin permission will be required to perform this operation.


```js
jira_local.addUserToApplication({}, context)
```

#### Input
* input `object`
  * username `string`: username
  * applicationKey `string`: application key

#### Output
*Output schema unknown*

### findBulkAssignableUsers
Returns a list of users that match the search string and can be assigned issues for all the given projects.
 This resource cannot be accessed anonymously.


```js
jira_local.findBulkAssignableUsers({}, context)
```

#### Input
* input `object`
  * username `string`: the username
  * projectKeys `string`: the keys of the projects we are finding assignable users for, comma-separated
  * startAt `integer`: the index of the first user to return (0-based)
  * maxResults `integer`: the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.

#### Output
*Output schema unknown*

### findAssignableUsers
Returns a list of users that match the search string. This resource cannot be accessed anonymously.
 Please note that this resource should be called with an issue key when a list of assignable users is retrieved
 for editing.  For create only a project key should be supplied.  The list of assignable users may be incorrect
 if it's called with the project key for editing.


```js
jira_local.findAssignableUsers({}, context)
```

#### Input
* input `object`
  * username `string`: the username
  * project `string`: the key of the project we are finding assignable users for
  * issueKey `string`: the issue key for the issue being edited we need to find assignable users for.
  * startAt `integer`: the index of the first user to return (0-based)
  * maxResults `integer`: the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
  * actionDescriptorId `integer`

#### Output
*Output schema unknown*

### api.2.user.avatar.post
Converts temporary avatar into a real avatar


```js
jira_local.api.2.user.avatar.post({}, context)
```

#### Input
* input `object`
  * username `string`: username

#### Output
*Output schema unknown*

### api.2.user.avatar.put



```js
jira_local.api.2.user.avatar.put({}, context)
```

#### Input
* input `object`
  * username `string`

#### Output
*Output schema unknown*

### api.2.user.avatar.temporary.post
Creates temporary avatar using multipart. The response is sent back as JSON stored in a textarea. This is because
 the client uses remote iframing to submit avatars using multipart. So we must send them a valid HTML page back from
 which the client parses the JSON from.
 <p>
 Creating a temporary avatar is part of a 3-step process in uploading a new
 avatar for a user: upload, crop, confirm. This endpoint allows you to use a multipart upload
 instead of sending the image directly as the request body.
 </p>
 <p>
 You *must* use "avatar" as the name of the upload parameter:</p>
 <p/>
 <pre>
 curl -c cookiejar.txt -X POST -u admin:admin -H "X-Atlassian-Token: no-check" \
   -F "avatar=@mynewavatar.png;type=image/png" \
   'http://localhost:8090/jira/rest/api/2/user/avatar/temporary?username=admin'
 </pre>


```js
jira_local.api.2.user.avatar.temporary.post({}, context)
```

#### Input
* input `object`
  * username `string`: Username

#### Output
*Output schema unknown*

### api.2.user.avatar.id.delete
Deletes avatar


```js
jira_local.api.2.user.avatar.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * username `string`: username
  * id **required** `integer`: database id for avatar

#### Output
*Output schema unknown*

### api.2.user.avatars.get
Returns all avatars which are visible for the currently logged in user.


```js
jira_local.api.2.user.avatars.get({}, context)
```

#### Input
* input `object`
  * username `string`: username

#### Output
*Output schema unknown*

### api.2.user.columns.delete
Reset the default columns for the given user to the system default. Admin permission will be required to get
 columns for a user other than the currently logged in user.


```js
jira_local.api.2.user.columns.delete({}, context)
```

#### Input
* input `object`
  * username `string`: username

#### Output
*Output schema unknown*

### api.2.user.columns.get
Returns the default columns for the given user. Admin permission will be required to get columns for a user
 other than the currently logged in user.


```js
jira_local.api.2.user.columns.get({}, context)
```

#### Input
* input `object`
  * username `string`: username

#### Output
*Output schema unknown*

### api.2.user.columns.put
Sets the default columns for the given user.  Admin permission will be required to get columns for a user
 other than the currently logged in user.


```js
jira_local.api.2.user.columns.put(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### changeUserPassword
Modify user password.


```js
jira_local.changeUserPassword({}, context)
```

#### Input
* input `object`
  * username `string`: the username
  * key `string`: user key

#### Output
*Output schema unknown*

### findUsersWithAllPermissions
Returns a list of active users that match the search string and have all specified permissions for the project or issue.<br>
 This resource can be accessed by users with ADMINISTER_PROJECT permission for the project or global ADMIN or SYSADMIN rights.


```js
jira_local.findUsersWithAllPermissions({}, context)
```

#### Input
* input `object`
  * username `string`: the username filter, list includes all users if unspecified
  * permissions `string`: comma separated list of permissions for project or issue returned users must have, see
  * issueKey `string`: the issue key for the issue for which returned users have specified permissions.
  * projectKey `string`: the optional project key to search for users with if no issueKey is supplied.
  * startAt `integer`: the index of the first user to return (0-based)
  * maxResults `integer`: the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.

#### Output
*Output schema unknown*

### findUsersForPicker
Returns a list of users matching query with highlighting. This resource cannot be accessed anonymously.


```js
jira_local.findUsersForPicker({}, context)
```

#### Input
* input `object`
  * query `string`: A string used to search username, Name or e-mail address
  * maxResults `integer`: the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
  * showAvatar `boolean`
  * exclude `string`

#### Output
*Output schema unknown*

### api.2.user.properties.get
Returns the keys of all properties for the user identified by the key or by the id.


```js
jira_local.api.2.user.properties.get({}, context)
```

#### Input
* input `object`
  * userKey `string`: key of the user whose properties are to be returned
  * username `string`: username of the user whose properties are to be returned

#### Output
*Output schema unknown*

### api.2.user.properties.propertyKey.delete
Removes the property from the user identified by the key or by the id. Ths user removing the property is required
 to have permissions to administer the user.


```js
jira_local.api.2.user.properties.propertyKey.delete({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * userKey `string`: key of the user whose property is to be removed
  * username `string`: username of the user whose property is to be removed
  * propertyKey **required** `string`

#### Output
*Output schema unknown*

### api.2.user.properties.propertyKey.get
Returns the value of the property with a given key from the user identified by the key or by the id. The user who retrieves
 the property is required to have permissions to read the user.


```js
jira_local.api.2.user.properties.propertyKey.get({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * userKey `string`: key of the user whose property is to be returned
  * username `string`: username of the user whose property is to be returned
  * propertyKey **required** `string`

#### Output
*Output schema unknown*

### api.2.user.properties.propertyKey.put
Sets the value of the specified user's property.
 <p>
 You can use this resource to store a custom data against the user identified by the key or by the id. The user
 who stores the data is required to have permissions to administer the user.
 </p>


```js
jira_local.api.2.user.properties.propertyKey.put({
  "propertyKey": ""
}, context)
```

#### Input
* input `object`
  * userKey `string`: key of the user whose property is to be set
  * username `string`: username of the user whose property is to be set
  * propertyKey **required** `string`

#### Output
*Output schema unknown*

### findUsers
Returns a list of users that match the search string. This resource cannot be accessed anonymously.


```js
jira_local.findUsers({}, context)
```

#### Input
* input `object`
  * username `string`: A query string used to search username, name or e-mail address
  * startAt `integer`: the index of the first user to return (0-based)
  * maxResults `integer`: the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
  * includeActive `boolean`: If true, then active users are included in the results (default true)
  * includeInactive `boolean`: If true, then inactive users are included in the results (default false)

#### Output
*Output schema unknown*

### findUsersWithBrowsePermission
Returns a list of active users that match the search string. This resource cannot be accessed anonymously 
 and requires the Browse Users global permission.
 Given an issue key this resource will provide a list of users that match the search string and have
 the browse issue permission for the issue provided.


```js
jira_local.findUsersWithBrowsePermission({}, context)
```

#### Input
* input `object`
  * username `string`: the username filter, no users returned if left blank
  * issueKey `string`: the issue key for the issue being edited we need to find viewable users for.
  * projectKey `string`: the optional project key to search for users with if no issueKey is supplied.
  * startAt `integer`: the index of the first user to return (0-based)
  * maxResults `integer`: the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.

#### Output
*Output schema unknown*

### createVersion
Create a version via POST.


```js
jira_local.createVersion(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRemoteVersionLinks
Returns the remote version links for a given global ID.


```js
jira_local.getRemoteVersionLinks({}, context)
```

#### Input
* input `object`
  * globalId `string`: the global ID of the remote resource that is linked to the versions

#### Output
*Output schema unknown*

### api.2.version.id.delete
Delete a project version.


```js
jira_local.api.2.version.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * moveFixIssuesTo `string`: The version to set fixVersion to on issues where the deleted version is the fix version,
  * moveAffectedIssuesTo `string`: The version to set affectedVersion to on issues where the deleted version is the affected version,
  * id **required** `string`: The version to delete

#### Output
*Output schema unknown*

### getVersion
Returns a project version.


```js
jira_local.getVersion({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `string`
  * id **required** `string`: The version to delete

#### Output
*Output schema unknown*

### updateVersion
Modify a version via PUT. Any fields present in the PUT will override existing values. As a convenience, if a field
 is not present, it is silently ignored.


```js
jira_local.updateVersion({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The version to delete

#### Output
*Output schema unknown*

### merge
Merge versions


```js
jira_local.merge({
  "moveIssuesTo": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * moveIssuesTo **required** `string`: The version to set fixVersion to on issues where the deleted version is the fix version,
  * id **required** `string`: The version that will be merged to version {@code moveIssuesTo} and removed

#### Output
*Output schema unknown*

### moveVersion
Modify a version's sequence within a project.
 <p/>
 The move version bean has 2 alternative field value pairs:
 <dl>
 <dt>position</dt><dd>An absolute position, which may have a value of 'First', 'Last', 'Earlier' or 'Later'</dd>
 <dt>after</dt><dd>A version to place this version after.  The value should be the self link of another version</dd>
 </dl>


```js
jira_local.moveVersion({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: a String containing the version id

#### Output
*Output schema unknown*

### getVersionRelatedIssues
Returns a bean containing the number of fixed in and affected issues for the given version.


```js
jira_local.getVersionRelatedIssues({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: a String containing the version id

#### Output
*Output schema unknown*

### api.2.version.id.removeAndSwap.post
Delete a project version.


```js
jira_local.api.2.version.id.removeAndSwap.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The version to delete

#### Output
*Output schema unknown*

### getVersionUnresolvedIssues
Returns the number of unresolved issues for the given version


```js
jira_local.getVersionUnresolvedIssues({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: a String containing the version id

#### Output
*Output schema unknown*

### deleteRemoteVersionLinksByVersionId
Delete all remote version links for a given version ID.


```js
jira_local.deleteRemoteVersionLinksByVersionId({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: The version for which to delete ALL existing remote version links

#### Output
*Output schema unknown*

### getRemoteVersionLinksByVersionId
Returns the remote version links associated with the given version ID.


```js
jira_local.getRemoteVersionLinksByVersionId({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: The version for which to delete ALL existing remote version links

#### Output
*Output schema unknown*

### api.2.version.versionId.remotelink.post
Create a remote version link via POST.  The link's global ID will be taken from the
 JSON payload if provided; otherwise, it will be generated.


```js
jira_local.api.2.version.versionId.remotelink.post({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: The version for which to delete ALL existing remote version links

#### Output
*Output schema unknown*

### deleteRemoteVersionLink
Delete a specific remote version link with the given version ID and global ID.


```js
jira_local.deleteRemoteVersionLink({
  "versionId": "",
  "globalId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: The version ID of the remote link
  * globalId **required** `string`: The global ID of the remote link

#### Output
*Output schema unknown*

### getRemoteVersionLink
A REST sub-resource representing a remote version link


```js
jira_local.getRemoteVersionLink({
  "versionId": "",
  "globalId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: The version ID of the remote link
  * globalId **required** `string`: The global ID of the remote link

#### Output
*Output schema unknown*

### api.2.version.versionId.remotelink.globalId.post
Create a remote version link via POST.  The link's global ID will be taken from the
 JSON payload if provided; otherwise, it will be generated.


```js
jira_local.api.2.version.versionId.remotelink.globalId.post({
  "versionId": "",
  "globalId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: The version ID of the remote link
  * globalId **required** `string`: The global ID of the remote link

#### Output
*Output schema unknown*

### getAllWorkflows
Returns all workflows.


```js
jira_local.getAllWorkflows({}, context)
```

#### Input
* input `object`
  * workflowName `string`

#### Output
*Output schema unknown*

### api.2.workflow.api.2.transitions.id.properties.delete
Delete a property from the passed transition on the passed workflow. It is not an error to delete a property that
 does not exist.


```js
jira_local.api.2.workflow.api.2.transitions.id.properties.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * key `string`: the name of the property to add.
  * workflowName `string`: the name of the workflow to use.
  * workflowMode `string`: the type of workflow to use. Can either be "live" or "draft".
  * id **required** `integer`: the ID of the transition within the workflow.

#### Output
*Output schema unknown*

### getProperties
Return the property or properties associated with a transition.


```js
jira_local.getProperties({
  "id": 0
}, context)
```

#### Input
* input `object`
  * includeReservedKeys `boolean`: some keys under the "jira." prefix are editable, some are not. Set this to true
  * key `string`: the name of the property key to query. Can be left off the query to return all properties.
  * workflowName `string`: the name of the workflow to use.
  * workflowMode `string`: the type of workflow to use. Can either be "live" or "draft".
  * id **required** `integer`: the ID of the transition within the workflow.

#### Output
*Output schema unknown*

### createProperty
Add a new property to a transition. Trying to add a property that already
 exists will fail.


```js
jira_local.createProperty({
  "id": 0
}, context)
```

#### Input
* input `object`
  * key `string`: the name of the property to add.
  * workflowName `string`: the name of the workflow to use.
  * workflowMode `string`: the type of workflow to use. Can either be "live" or "draft".
  * id **required** `integer`: the ID of the transition within the workflow.

#### Output
*Output schema unknown*

### updateProperty
Update/add new property to a transition. Trying to update a property that does
 not exist will result in a new property being added.


```js
jira_local.updateProperty({
  "id": 0
}, context)
```

#### Input
* input `object`
  * key `string`: the name of the property to add.
  * workflowName `string`: the name of the workflow to use.
  * workflowMode `string`: the type of workflow to use. Can either be "live" or "draft".
  * id **required** `integer`: the ID of the transition within the workflow.

#### Output
*Output schema unknown*

### createScheme
Create a new workflow scheme.
 <p/>
 The body contains a representation of the new scheme. Values not passed are assumed to be set to their defaults.


```js
jira_local.createScheme(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### deleteScheme
Delete the passed workflow scheme.


```js
jira_local.deleteScheme({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### getById
Returns the requested workflow scheme to the caller.


```js
jira_local.getById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * returnDraftIfExists `boolean`: when true indicates that a scheme's draft, if it exists, should be queried instead of
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### update
Update the passed workflow scheme.
 <p/>
 The body of the request is a representation of the workflow scheme. Values not passed are assumed to indicate
 no change for that field.
 <p/>
 The passed representation can have its updateDraftIfNeeded flag set to true to indicate that the draft
 should be created and/or updated when the actual scheme cannot be edited (e.g. when the scheme is being used by
 a project). Values not appearing the body will not be touched.


```js
jira_local.update({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### createDraftForParent
Create a draft for the passed scheme. The draft will be a copy of the state of the parent.


```js
jira_local.createDraftForParent({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### deleteDefault
Remove the default workflow from the passed workflow scheme.


```js
jira_local.deleteDefault({
  "id": 0
}, context)
```

#### Input
* input `object`
  * updateDraftIfNeeded `boolean`: when true will create and return a draft when the workflow scheme cannot be edited
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### getDefault
Return the default workflow from the passed workflow scheme.


```js
jira_local.getDefault({
  "id": 0
}, context)
```

#### Input
* input `object`
  * returnDraftIfExists `boolean`: when true indicates that a scheme's draft, if it exists, should be queried instead of
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### updateDefault
Set the default workflow for the passed workflow scheme.
 <p/>
 The passed representation can have its
 updateDraftIfNeeded flag set to true to indicate that the draft should be created/updated when the actual scheme
 cannot be edited.


```js
jira_local.updateDefault({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### deleteDraftById
Delete the passed draft workflow scheme.


```js
jira_local.deleteDraftById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### getDraftById
Returns the requested draft workflow scheme to the caller.


```js
jira_local.getDraftById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### updateDraft
Update a draft workflow scheme. The draft will created if necessary.
 <p/>
 The body is a representation of the workflow scheme. Values not passed are assumed to indicate no change for that field.


```js
jira_local.updateDraft({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### deleteDraftDefault
Remove the default workflow from the passed draft workflow scheme.


```js
jira_local.deleteDraftDefault({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### getDraftDefault
Return the default workflow from the passed draft workflow scheme to the caller.


```js
jira_local.getDraftDefault({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### updateDraftDefault
Set the default workflow for the passed draft workflow scheme.


```js
jira_local.updateDraftDefault({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### deleteDraftIssueType
Remove the specified issue type mapping from the draft scheme.


```js
jira_local.deleteDraftIssueType({
  "issueType": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * issueType **required** `string`: the issue type being set.
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### getDraftIssueType
Returns the issue type mapping for the passed draft workflow scheme.


```js
jira_local.getDraftIssueType({
  "issueType": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * issueType **required** `string`: the issue type being set.
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### setDraftIssueType
Set the issue type mapping for the passed draft scheme.
 <p/>
 The passed representation can have its updateDraftIfNeeded flag set to true to indicate that
 the draft should be created/updated when the actual scheme cannot be edited.


```js
jira_local.setDraftIssueType({
  "issueType": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * issueType **required** `string`: the issue type being set.
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### deleteDraftWorkflowMapping
Delete the passed workflow from the draft workflow scheme.


```js
jira_local.deleteDraftWorkflowMapping({
  "id": 0
}, context)
```

#### Input
* input `object`
  * workflowName `string`: the name of the workflow to delete.
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### getDraftWorkflow
Returns the draft workflow mappings or requested mapping to the caller.


```js
jira_local.getDraftWorkflow({
  "id": 0
}, context)
```

#### Input
* input `object`
  * workflowName `string`: the workflow mapping to return. Null can be passed to return all mappings. Must be a valid workflow name.
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### updateDraftWorkflowMapping
Update the draft scheme to include the passed mapping.
 <p/>
 The body is a representation of the workflow mapping.
 Values not passed are assumed to indicate no change for that field.


```js
jira_local.updateDraftWorkflowMapping({
  "id": 0
}, context)
```

#### Input
* input `object`
  * workflowName `string`: the name of the workflow mapping to update.
  * id **required** `integer`: the id of the parent scheme.

#### Output
*Output schema unknown*

### api.2.workflowscheme.id.issuetype.issueType.delete
Remove the specified issue type mapping from the scheme.


```js
jira_local.api.2.workflowscheme.id.issuetype.issueType.delete({
  "issueType": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * updateDraftIfNeeded `boolean`: when true will create and return a draft when the workflow scheme cannot be edited
  * issueType **required** `string`: the issue type being set.
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### api.2.workflowscheme.id.issuetype.issueType.get
Returns the issue type mapping for the passed workflow scheme.


```js
jira_local.api.2.workflowscheme.id.issuetype.issueType.get({
  "issueType": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * returnDraftIfExists `boolean`: when true indicates that a scheme's draft, if it exists, should be queried instead of
  * issueType **required** `string`: the issue type being set.
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### setIssueType
Set the issue type mapping for the passed scheme.
 <p/>
 The passed representation can have its updateDraftIfNeeded flag set to true to indicate that
 the draft should be created/updated when the actual scheme cannot be edited.


```js
jira_local.setIssueType({
  "issueType": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * issueType **required** `string`: the issue type being set.
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### deleteWorkflowMapping
Delete the passed workflow from the workflow scheme.


```js
jira_local.deleteWorkflowMapping({
  "id": 0
}, context)
```

#### Input
* input `object`
  * workflowName `string`: the name of the workflow to delete.
  * updateDraftIfNeeded `boolean`: flag to indicate if a draft should be created if necessary to delete the workflow
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### getWorkflow
Returns the workflow mappings or requested mapping to the caller for the passed scheme.


```js
jira_local.getWorkflow({
  "id": 0
}, context)
```

#### Input
* input `object`
  * workflowName `string`: the workflow mapping to return. Null can be passed to return all mappings. Must be a valid workflow name.
  * returnDraftIfExists `boolean`: when true indicates that a scheme's draft, if it exists, should be queried instead of
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### updateWorkflowMapping
Update the scheme to include the passed mapping.
 <p/>
 The body is a representation of the workflow mapping.
 Values not passed are assumed to indicate no change for that field.
 <p/>
 The passed representation can have its updateDraftIfNeeded flag set to true to indicate that the draft
 should be created/updated when the actual scheme cannot be edited.


```js
jira_local.updateWorkflowMapping({
  "id": 0
}, context)
```

#### Input
* input `object`
  * workflowName `string`: the name of the workflow mapping to update.
  * id **required** `integer`: the id of the scheme.

#### Output
*Output schema unknown*

### getIdsOfWorklogsDeletedSince
Returns worklogs id and delete time of worklogs that was deleted since given time.
 The returns set of worklogs is limited to 1000 elements.
 This API will not return worklogs deleted during last minute.


```js
jira_local.getIdsOfWorklogsDeletedSince({}, context)
```

#### Input
* input `object`
  * since `integer`: a date time in unix timestamp format since when deleted worklogs will be returned.

#### Output
*Output schema unknown*

### getWorklogsForIds
Returns worklogs for given worklog ids. Only worklogs to which the calling user has permissions, will be included in the result.
 The returns set of worklogs is limited to 1000 elements.


```js
jira_local.getWorklogsForIds(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getIdsOfWorklogsModifiedSince
Returns worklogs id and update time of worklogs that was updated since given time.
 The returns set of worklogs is limited to 1000 elements.
 This API will not return worklogs updated during last minute.


```js
jira_local.getIdsOfWorklogsModifiedSince({}, context)
```

#### Input
* input `object`
  * since `integer`: a date time in unix timestamp format since when updated worklogs will be returned.

#### Output
*Output schema unknown*

### logout
Logs the current user out of JIRA, destroying the existing session, if any.


```js
jira_local.logout(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### currentUser
Returns information about the currently authenticated user's session. If the caller is not authenticated they
 will get a 401 Unauthorized status code.


```js
jira_local.currentUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### login
Creates a new session for a user in JIRA. Once a session has been successfully created it can be used to access
 any of JIRA's remote APIs and also the web UI by passing the appropriate HTTP Cookie header.
 <p>
 Note that it is generally preferrable to use HTTP BASIC authentication with the REST API. However, this resource
 may be used to mimic the behaviour of JIRA's log-in page (e.g. to display log-in errors to a user).


```js
jira_local.login(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### release
This method invalidates the any current WebSudo session.


```js
jira_local.release(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
