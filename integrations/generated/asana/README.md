# @datafire/asana

Client library for ASANA Developers API

## Installation and Usage
```bash
npm install --save @datafire/asana
```
```js
let asana = require('@datafire/asana').create({
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

ASANA Developers API

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
asana.oauthCallback({
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
asana.oauthRefresh(null, context)
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

### workspaces.workspace_gid.tags.post
Creates a new tag in a workspace or organization.


```js
asana.workspaces.workspace_gid.tags.post({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace or organization to create the tag in.
  * name `string`: Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * color `string`: Color of the tag. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * workspace `string`: The workspace or organization this tag is associated with. Once created, tags cannot be moved to a different workspace. This attribute can only be specified at creation time.

#### Output
*Output schema unknown*

### workspaces.workspace_gid.tags.get
Returns the compact tag records for all tags in the workspace.


```js
asana.workspaces.workspace_gid.tags.get({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace or organization to find tags in.
  * name `string`: Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * color `string`: Color of the tag. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * workspace `string`: The workspace or organization this tag is associated with. Once created, tags cannot be moved to a different workspace. This attribute can only be specified at creation time.

#### Output
* output `object`
  * data **required** `array`

### projects.project_gid.project_memberships.get
Returns the compact project membership records for the project.


```js
asana.projects.project_gid.project_memberships.get({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project for which to fetch memberships.
  * user `string`: If present, the user to filter the memberships to.

#### Output
* output `object`
  * data **required** `array`

### tasks.task_gid.dependents.get
Returns the compact representations of all of the dependents of a task.


```js
asana.tasks.task_gid.dependents.get({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to get dependents on.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### tasks.task_gid.put
A specific, existing task can be updated by making a PUT request on the URL for that task. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.


```js
asana.tasks.task_gid.put({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to update.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `object`
    * assignee **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * gid **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`
    * ... **required** `string`

### tasks.task_gid.delete
A specific, existing task can be deleted by making a DELETE request on the URL for that task. Deleted tasks go into the “trash” of the user making the delete request. Tasks can be recovered from the trash within a period of 30 days; afterward they are completely removed from the system.


```js
asana.tasks.task_gid.delete({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to delete.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `object`

### tasks.task_gid.get
Returns the complete task record for a single task.


```js
asana.tasks.task_gid.get({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to get.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `object`
    * assignee **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * created_at **required** `string`
    * ... **required** `string`

### events.get
Returns the full record for all events that have occurred since the sync token was created.


```js
asana.events.get({}, context)
```

#### Input
* input `object`
  * resource `string`: A resource ID to subscribe to. The resource can be a task or project.
  * sync `string`: A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated. On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a error, and include a fresh token in the response.

#### Output
* output `object`
  * data **required** `array`
    * items `object`
      * resource **required** `object`
        * resource_subtype **required** `string`
        * gid **required** `string`
        * id **required** `integer`
        * resource_type **required** `string`
        * name **required** `string`
      * parent **required** `null`
      * created_at **required** `string`
      * user **required** `object`
        * gid **required** `string`
        * id **required** `integer`
        * resource_type **required** `string`
        * name **required** `string`
      * action **required** `string`
      * type **required** `string`
  * sync **required** `string`

### workspaces.workspace_gid.removeUser.post
The user making this call must be an admin in the workspace. Returns an empty data record.


```js
asana.workspaces.workspace_gid.removeUser.post({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace or organization to invite the user to.
  * user `string`: An identifier for the user. Can be one of an email address, the globally unique identifier for the user, or the keyword to indicate the current user making the request.
  * name `string`: The name of the workspace.
  * is_organization `string`: Whether the workspace is an .

#### Output
*Output schema unknown*

### tasks.task_gid.removeProject.post
Removes the task from the specified project. The task will still exist in the system, but it will not be in the project anymore.


```js
asana.tasks.task_gid.removeProject.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to remove from a project.
  * project `string`: The project to remove the task from.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### workspaces.workspace_gid.tasks.search.get
The search endpoint allows you to build complex queries to find and fetch exactly the data you need from Asana. For a more comprehensive description of all the query parameters and limitations of this endpoint, see our long-form documentation for this feature.


```js
asana.workspaces.workspace_gid.tasks.search.get({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace or organization in which to search for tasks.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `array`

### tasks.task_gid.projects.get
Returns a compact representation of all of the projects the task is in.


```js
asana.tasks.task_gid.projects.get({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to get projects on.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### tasks.task_gid.removeTag.post
Removes a tag from the task. Returns an empty data block.


```js
asana.tasks.task_gid.removeTag.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to remove a tag from.
  * tag `string`: The tag to remove from the task.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### sections.section_gid.put
A specific, existing section can be updated by making a PUT request on the URL for that project. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged. (note that at this time, the only field that can be updated is the name field.)


```js
asana.sections.section_gid.put({}, context)
```

#### Input
* input `object`
  * section_gid `string`: The section to update.
  * name `string`: The name of the section (i.e. the text displayed as the section header).

#### Output
* output `object`
  * data **required** `array`
    * items `object`
      * name **required** `string`
      * created_at **required** `string`
      * project **required** `object`
        * gid **required** `string`
        * id **required** `integer`
        * resource_type **required** `string`
        * name **required** `string`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`

### sections.section_gid.delete
A specific, existing section can be deleted by making a DELETE request on the URL for that section.


```js
asana.sections.section_gid.delete({}, context)
```

#### Input
* input `object`
  * section_gid `string`: The section to delete.
  * name `string`: The name of the section (i.e. the text displayed as the section header).

#### Output
* output `object`
  * data **required** `object`

### sections.section_gid.get
Returns the complete record for a single section.


```js
asana.sections.section_gid.get({}, context)
```

#### Input
* input `object`
  * section_gid `string`: The section to get.
  * name `string`: The name of the section (i.e. the text displayed as the section header).

#### Output
*Output schema unknown*

### workspaces.workspace_gid.users.get
Returns the user records for all users in the specified workspace or organization.


```js
asana.workspaces.workspace_gid.users.get({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace in which to get users.

#### Output
* output `object`
  * data **required** `array`
    * items `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`

### project_statuses.project_status_gid.delete
Deletes a specific, existing project status update.


```js
asana.project_statuses.project_status_gid.delete({}, context)
```

#### Input
* input `object`
  * project-status_gid `string`: The project status update to delete.

#### Output
* output `object`
  * data **required** `object`

### project_statuses.project_status_gid.get
Returns the complete record for a single status update.


```js
asana.project_statuses.project_status_gid.get({}, context)
```

#### Input
* input `object`
  * project-status_gid `string`: The project status update to get.

#### Output
* output `object`
  * data **required** `object`
    * title **required** `string`
    * color **required** `string`
    * text **required** `string`
    * created_at **required** `string`
    * created_by **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * gid **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`

### teams.team_gid.projects.post
Creates a project shared with the given team.


```js
asana.teams.team_gid.projects.post({}, context)
```

#### Input
* input `object`
  * team_gid `string`: The team to create the project in.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
*Output schema unknown*

### teams.team_gid.projects.get
Returns the compact project records for all projects in the team.


```js
asana.teams.team_gid.projects.get({}, context)
```

#### Input
* input `object`
  * team_gid `string`: The team to find projects in.
  * archived `string`: Only return projects whose field takes on the value of this parameter.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
*Output schema unknown*

### users.user_gid.teams.get
Returns the compact records for all teams to which user is assigned.


```js
asana.users.user_gid.teams.get({}, context)
```

#### Input
* input `object`
  * user_gid `string`: An identifier for the user. Can be one of an email address, the globally unique identifier for the user, or the keyword to indicate the current user making the request.
  * organization `string`: The workspace or organization to filter teams on.
  * name `string`: The name of the team.
  * description `string`: The description of the team.
  * html_description `string`: The description of the team with formatting as HTML.

#### Output
*Output schema unknown*

### workspaces.workspace_gid.custom_fields.get
Returns a list of the compact representation of all of the custom fields in a workspace.


```js
asana.workspaces.workspace_gid.custom_fields.get({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace or organization to find custom field definitions in.
  * resource_subtype `string`: The type of custom field. Must be one of the given values.
  * name `string`: The name of the custom field.
  * description `string`: The description of the custom field.
  * type `string`: The type of the custom field. Must be one of the given values.
  * precision `string`: Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.

#### Output
* output `object`
  * data **required** `array`

### teams.team_gid.users.get
Returns the compact records for all users that are members of the team.


```js
asana.teams.team_gid.users.get({}, context)
```

#### Input
* input `object`
  * team_gid `string`: Globally unique identifier for the team.
  * name `string`: The name of the team.
  * description `string`: The description of the team.
  * html_description `string`: The description of the team with formatting as HTML.

#### Output
*Output schema unknown*

### projects.project_gid.put
A specific, existing project can be updated by making a PUT request on the URL for that project. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.


```js
asana.projects.project_gid.put({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to update.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
* output `object`
  * data **required** `object`
    * name **required** `string`
    * notes **required** `string`
    * gid **required** `string`
    * null **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`

### projects.project_gid.delete
A specific, existing project can be deleted by making a DELETE request on the URL for that project.


```js
asana.projects.project_gid.delete({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to delete.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
* output `object`
  * data **required** `object`

### projects.project_gid.get
Returns the complete project record for a single project.


```js
asana.projects.project_gid.get({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to get.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
* output `object`
  * data **required** `object`
    * name **required** `string`
    * notes **required** `string`
    * gid **required** `string`
    * null **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`

### projects.project_gid.custom_field_settings.get
Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, opt_fields and opt_expand can be used to include more data than is returned in the compact representation. See the getting started guide on input/output options for more information.


```js
asana.projects.project_gid.custom_field_settings.get({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The ID of the project for which to list custom field settings

#### Output
* output `object`
  * data **required** `array`

### teams.team_gid.get
Returns the full record for a single team.


```js
asana.teams.team_gid.get({}, context)
```

#### Input
* input `object`
  * team_gid `string`: Globally unique identifier for the team.
  * name `string`: The name of the team.
  * description `string`: The description of the team.
  * html_description `string`: The description of the team with formatting as HTML.

#### Output
*Output schema unknown*

### workspaces.workspace_gid.tasks.post
Creating a new task is as easy as POSTing to the /tasks endpoint with a data block containing the fields you’d like to set on the task. Any unspecified fields will take on default values.


```js
asana.workspaces.workspace_gid.tasks.post({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace to create a task in.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### tags.tag_gid.put
Updates the properties of a tag. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.


```js
asana.tags.tag_gid.put({}, context)
```

#### Input
* input `object`
  * tag_gid `string`: The tag to update.
  * name `string`: Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * color `string`: Color of the tag. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * workspace `string`: The workspace or organization this tag is associated with. Once created, tags cannot be moved to a different workspace. This attribute can only be specified at creation time.

#### Output
* output `object`
  * data **required** `object`
    * gid **required** `string`
    * null **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`
    * name **required** `string`

### tags.tag_gid.get
Returns the complete tag record for a single tag.


```js
asana.tags.tag_gid.get({}, context)
```

#### Input
* input `object`
  * tag_gid `string`: The tag to get.
  * name `string`: Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * color `string`: Color of the tag. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * workspace `string`: The workspace or organization this tag is associated with. Once created, tags cannot be moved to a different workspace. This attribute can only be specified at creation time.

#### Output
* output `object`
  * data **required** `object`
    * gid **required** `string`
    * null **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`
    * name **required** `string`

### organizations.organization_gid.teams.get
Returns the compact records for all teams in the organization visible to the authorized user.


```js
asana.organizations.organization_gid.teams.get({}, context)
```

#### Input
* input `object`
  * organization_gid `string`: Globally unique identifier for the workspace or organization.
  * name `string`: The name of the team.
  * description `string`: The description of the team.
  * html_description `string`: The description of the team with formatting as HTML.

#### Output
*Output schema unknown*

### tasks.task_gid.subtasks.post
Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.


```js
asana.tasks.task_gid.subtasks.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to add a subtask to.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `object`
    * name **required** `string`
    * parent **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * assignee **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * notes **required** `string`
    * modified_at **required** `string`
    * id **required** `integer`
    * assignee_status **required** `string`
    * completed_at **required** `null`
    * completed **required** `boolean`
    * followers **required** `array`
      * items `object`
        * gid **required** `string`
        * id **required** `integer`
        * resource_type **required** `string`
        * name **required** `string`
    * projects **required** `array`
    * workspace **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * due_on **required** `null`
    * gid **required** `string`
    * created_at **required** `string`
    * resource_type **required** `string`

### tasks.task_gid.subtasks.get
Returns a compact representation of all of the subtasks of a task.


```js
asana.tasks.task_gid.subtasks.get({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to get the subtasks of.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### tasks.task_gid.addFollowers.post
Adds each of the specified followers to the task, if they are not already following. Returns the complete, updated record for the affected task.


```js
asana.tasks.task_gid.addFollowers.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to add followers to.
  * followers `string`: An array of followers to add to the task.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `object`
    * ... **required** `string`
    * gid **required** `string`
    * followers **required** `array`
      * items `object`
        * gid **required** `string`
        * id **required** `integer`
        * resource_type **required** `string`
        * name **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`

### webhooks.post
Establishing a webhook is a two-part process. First, a simple HTTP POST similar to any other resource creation. Since you could have multiple webhooks we recommend specifying a unique local id for each target.


```js
asana.webhooks.post({}, context)
```

#### Input
* input `object`
  * resource `string`: A resource ID to subscribe to. The resource can be a task or project.
  * target `string`: The URL to receive the HTTP POST.
  * active `string`: If true, the webhook will send events - if false it is considered inactive and will not generate events.

#### Output
* output `object`
  * data **required** `object`
    * last_failure_at **required** `null`
    * resource **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * target **required** `string`
    * created_at **required** `string`
    * last_failure_content **required** `null`
    * last_success_at **required** `null`
    * active **required** `boolean`
    * id **required** `integer`
    * resource_type **required** `string`

### webhooks.get
Returns the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.


```js
asana.webhooks.get({}, context)
```

#### Input
* input `object`
  * workspace `string`: The workspace to query for webhooks in.
  * resource `string`: Only return webhooks for the given resource.
  * active `string`: If true, the webhook will send events - if false it is considered inactive and will not generate events.

#### Output
* output `object`
  * data **required** `array`

### workspaces.workspace_gid.typeahead.get
Retrieves objects in the workspace based on an auto-completion/typeahead search algorithm. This feature is meant to provide results quickly, so do not rely on this API to provide extremely accurate search results. The result set is limited to a single page of results with a maximum size, so you won’t be able to fetch large numbers of results.


```js
asana.workspaces.workspace_gid.typeahead.get({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace to fetch objects from.
  * type `string`: The type of values the typeahead should return. You can choose from one of the following: custom_field, project, tag, task, and user. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. ). Using multiple types is not yet supported.
  * query `string`: The string that will be used to search for relevant objects. If an empty string is passed in, the API will currently return an empty result set.
  * count `string`: The number of results to return. The default is if this parameter is omitted, with a minimum of and a maximum of . If there are fewer results found than requested, all will be returned.
  * name `string`: The name of the workspace.
  * is_organization `string`: Whether the workspace is an .

#### Output
*Output schema unknown*

### tasks.task_gid.removeDependencies.post
Unlinks a set of dependencies from this task.


```js
asana.tasks.task_gid.removeDependencies.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to remove dependencies from.
  * dependencies `string`: An array of task IDs to remove as dependencies.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### projects.project_gid.removeCustomFieldSetting.post
Remove a custom field setting on the project.


```js
asana.projects.project_gid.removeCustomFieldSetting.post({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to associate the custom field with
  * custom_field `string`: The id of the custom field to remove from this project.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
* output `object`
  * data **required** `object`

### project_memberships.project_membership_gid.get
Returns the project membership record.


```js
asana.project_memberships.project_membership_gid.get({}, context)
```

#### Input
* input `object`
  * project_membership_gid `string`: Globally unique identifier for the project membership.

#### Output
* output `object`
  * data **required** `object`
    * write_access **required** `string`
    * gid **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`
    * user **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`

### projects.project_gid.tasks.get
Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.


```js
asana.projects.project_gid.tasks.get({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project in which to search for tasks.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
* output `object`
  * data **required** `array`

### tasks.task_gid.removeDependents.post
Unlinks a set of dependents from this task.


```js
asana.tasks.task_gid.removeDependents.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to remove dependents from.
  * dependents `string`: An array of task IDs to remove as dependents.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### tasks.task_gid.addTag.post
Adds a tag to a task. Returns an empty data block.


```js
asana.tasks.task_gid.addTag.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to add a tag to.
  * tag `string`: The tag to add to the task.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### tags.tag_gid.tasks.get
Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.


```js
asana.tags.tag_gid.tasks.get({}, context)
```

#### Input
* input `object`
  * tag_gid `string`: The tag to fetch tasks from.
  * name `string`: Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * color `string`: Color of the tag. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * workspace `string`: The workspace or organization this tag is associated with. Once created, tags cannot be moved to a different workspace. This attribute can only be specified at creation time.

#### Output
* output `object`
  * data **required** `array`

### organization_exports.post
This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.


```js
asana.organization_exports.post({}, context)
```

#### Input
* input `object`
  * organization `string`: Globally unique identifier for the workspace or organization.

#### Output
*Output schema unknown*

### organization_exports.organization_export_gid.get
Returns details of a previously-requested Organization export.


```js
asana.organization_exports.organization_export_gid.get({}, context)
```

#### Input
* input `object`
  * organization_export_gid `string`: Globally unique identifier for the Organization export.
  * organization `string`: The Organization that is being exported. This can only be specified at create time.

#### Output
*Output schema unknown*

### custom_fields.post
Creates a new custom field in a workspace. Every custom field is required to be created in a specific workspace, and this workspace cannot be changed once set.


```js
asana.custom_fields.post({}, context)
```

#### Input
* input `object`
  * workspace `string`: The workspace to create a custom field in.
  * resource_subtype `string`: The type of the custom field. Must be one of the given values.
  * type `string`
  * name `string`: The name of the custom field.
  * description `string`: The description of the custom field.
  * precision `string`: The number of decimal places for the numerical values. Required if the custom field is of type ‘number’.
  * enum_options `string`: The discrete values the custom field can assume. Required if the custom field is of type ‘enum’.

#### Output
* output `object`
  * data **required** `array`
    * items `object`
      * resource_subtype **required** `string`
      * name **required** `string`
      * gid **required** `string`
      * type **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * description **required** `string`

### tasks.task_gid.stories.post
Adds a comment to a task. The comment will be authored by the currently authenticated user, and timestamped when the server receives the request.


```js
asana.tasks.task_gid.stories.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: Globally unique identifier for the task.
  * text `string`: The plain text of the comment to add.
  * created_at `string`: The time at which this story was created.
  * created_by `string`: The user who created the story.
  * liked `string`: True if the story is liked by the authorized user, false if not. This property only exists for stories that provide likes.
  * html_text `string`: HTML formatted text for a comment.
  * is_pinned `string`: Whether the story is pinned on the target. This field is only present on comment and attachment stories.
  * is_edited `string`: Whether the text of the story has been edited after creation. This field is only present on comment stories.

#### Output
*Output schema unknown*

### tasks.task_gid.stories.get
Returns the compact records for all stories on the task.


```js
asana.tasks.task_gid.stories.get({}, context)
```

#### Input
* input `object`
  * task_gid `string`: Globally unique identifier for the task.
  * created_at `string`: The time at which this story was created.
  * created_by `string`: The user who created the story.
  * liked `string`: True if the story is liked by the authorized user, false if not. This property only exists for stories that provide likes.
  * text `string`: Human-readable text for the story or comment. This will not include the name of the creator. This is not guaranteed to be stable for a given type of story. For example, text for a reassignment may always say “assigned to …” as the text for a story can both be edited and change based on the language settings of the user making the request. Use the property to discover the action that created the story.
  * html_text `string`: HTML formatted text for a comment.
  * is_pinned `string`: Whether the story is pinned on the target. This field is only present on comment and attachment stories.
  * is_edited `string`: Whether the text of the story has been edited after creation. This field is only present on comment stories.

#### Output
* output `object`
  * data **required** `array`
    * items `object`
      * resource_subtype **required** `string`
      * text **required** `string`
      * created_at **required** `string`
      * created_by **required** `object`
        * gid **required** `string`
        * id **required** `integer`
        * resource_type **required** `string`
        * name **required** `string`
      * gid **required** `string`
      * type **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`

### projects.project_gid.removeMembers.post
Removes the specified list of members from the project. Returns the updated project record.


```js
asana.projects.project_gid.removeMembers.post({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to remove members from.
  * members `string`: An array of user ids.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
*Output schema unknown*

### users.get
Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.


```js
asana.users.get({}, context)
```

#### Input
* input `object`
  * workspace `string`: The workspace or organization to filter users on.

#### Output
* output `object`
  * data **required** `object`
    * workspaces **required** `array`
    * name **required** `string`
    * id **required** `integer`
    * gid **required** `string`
    * email **required** `string`
    * resource_type **required** `string`

### teams.team_gid.addUser.post
The user making this call must be a member of the team in order to add others. The user to add must exist in the same organization as the team in order to be added. The user to add can be referenced by their globally unique user ID or their email address. Returns the full user record for the added user.


```js
asana.teams.team_gid.addUser.post({}, context)
```

#### Input
* input `object`
  * team_gid `string`: Globally unique identifier for the team.
  * user `string`: An identifier for the user. Can be one of an email address, the globally unique identifier for the user, or the keyword to indicate the current user making the request.
  * name `string`: The name of the team.
  * description `string`: The description of the team.
  * html_description `string`: The description of the team with formatting as HTML.

#### Output
*Output schema unknown*

### stories.story_gid.put
Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of text and html_text can be specified.


```js
asana.stories.story_gid.put({}, context)
```

#### Input
* input `object`
  * story_gid `string`: Globally unique identifier for the story.
  * text `string`: The plain text with which to update the comment.
  * html_text `string`: The rich text with which to update the comment.
  * is_pinned `string`: Whether the story should be pinned on the resource.
  * created_at `string`: The time at which this story was created.
  * created_by `string`: The user who created the story.
  * liked `string`: True if the story is liked by the authorized user, false if not. This property only exists for stories that provide likes.
  * is_edited `string`: Whether the text of the story has been edited after creation. This field is only present on comment stories.

#### Output
*Output schema unknown*

### stories.story_gid.delete
Deletes a story. A user can only delete stories they have created. Returns an empty data record.


```js
asana.stories.story_gid.delete({}, context)
```

#### Input
* input `object`
  * story_gid `string`: Globally unique identifier for the story.
  * created_at `string`: The time at which this story was created.
  * created_by `string`: The user who created the story.
  * liked `string`: True if the story is liked by the authorized user, false if not. This property only exists for stories that provide likes.
  * text `string`: Human-readable text for the story or comment. This will not include the name of the creator. This is not guaranteed to be stable for a given type of story. For example, text for a reassignment may always say “assigned to …” as the text for a story can both be edited and change based on the language settings of the user making the request. Use the property to discover the action that created the story.
  * html_text `string`: HTML formatted text for a comment.
  * is_pinned `string`: Whether the story is pinned on the target. This field is only present on comment and attachment stories.
  * is_edited `string`: Whether the text of the story has been edited after creation. This field is only present on comment stories.

#### Output
* output `object`
  * data **required** `object`

### stories.story_gid.get
Returns the full record for a single story.


```js
asana.stories.story_gid.get({}, context)
```

#### Input
* input `object`
  * story_gid `string`: Globally unique identifier for the story.
  * created_at `string`: The time at which this story was created.
  * created_by `string`: The user who created the story.
  * liked `string`: True if the story is liked by the authorized user, false if not. This property only exists for stories that provide likes.
  * text `string`: Human-readable text for the story or comment. This will not include the name of the creator. This is not guaranteed to be stable for a given type of story. For example, text for a reassignment may always say “assigned to …” as the text for a story can both be edited and change based on the language settings of the user making the request. Use the property to discover the action that created the story.
  * html_text `string`: HTML formatted text for a comment.
  * is_pinned `string`: Whether the story is pinned on the target. This field is only present on comment and attachment stories.
  * is_edited `string`: Whether the text of the story has been edited after creation. This field is only present on comment stories.

#### Output
*Output schema unknown*

### custom_fields.custom_field_gid.enum_options.insert.post
Moves a particular enum option to be either before or after another specified enum option in the custom field.


```js
asana.custom_fields.custom_field_gid.enum_options.insert.post({}, context)
```

#### Input
* input `object`
  * custom_field_gid `string`: Globally unique identifier for the custom field.
  * enum_option `string`: The ID of the enum option to relocate.
  * name `string`: The name of the enum option.
  * color `string`: The color of the enum option. Defaults to ‘none’.
  * before_enum_option `string`: An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
  * after_enum_option `string`: An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
  * resource_subtype `string`: The type of custom field. Must be one of the given values.
  * description `string`: The description of the custom field.
  * type `string`: The type of the custom field. Must be one of the given values.
  * precision `string`: Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.

#### Output
*Output schema unknown*

### tasks.task_gid.removeFollowers.post
Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.


```js
asana.tasks.task_gid.removeFollowers.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to remove followers from.
  * followers `string`: An array of followers to remove from the task.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `object`
    * ... **required** `string`
    * gid **required** `string`
    * followers **required** `array`
    * id **required** `integer`
    * resource_type **required** `string`

### attachments.attachment_gid.get
Returns the full record for a single attachment.


```js
asana.attachments.attachment_gid.get({}, context)
```

#### Input
* input `object`
  * attachment_gid `string`: Globally unique identifier for the attachment.

#### Output
* output `object`
  * data **required** `object`
    * name **required** `string`
    * parent **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * view_url **required** `string`
    * created_at **required** `string`
    * download_url **required** `string`
    * host **required** `string`
    * gid **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`

### custom_fields.custom_field_gid.put
A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged


```js
asana.custom_fields.custom_field_gid.put({}, context)
```

#### Input
* input `object`
  * custom_field_gid `string`: Globally unique identifier for the custom field.
  * resource_subtype `string`: The type of custom field. Must be one of the given values.
  * name `string`: The name of the custom field.
  * description `string`: The description of the custom field.
  * type `string`: The type of the custom field. Must be one of the given values.
  * precision `string`: Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.

#### Output
*Output schema unknown*

### custom_fields.custom_field_gid.delete
A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.


```js
asana.custom_fields.custom_field_gid.delete({}, context)
```

#### Input
* input `object`
  * custom_field_gid `string`: Globally unique identifier for the custom field.
  * resource_subtype `string`: The type of custom field. Must be one of the given values.
  * name `string`: The name of the custom field.
  * description `string`: The description of the custom field.
  * type `string`: The type of the custom field. Must be one of the given values.
  * precision `string`: Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.

#### Output
*Output schema unknown*

### custom_fields.custom_field_gid.get
Returns the complete definition of a custom field’s metadata.


```js
asana.custom_fields.custom_field_gid.get({}, context)
```

#### Input
* input `object`
  * custom_field_gid `string`: Globally unique identifier for the custom field.
  * resource_subtype `string`: The type of custom field. Must be one of the given values.
  * name `string`: The name of the custom field.
  * description `string`: The description of the custom field.
  * type `string`: The type of the custom field. Must be one of the given values.
  * precision `string`: Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.

#### Output
*Output schema unknown*

### users.me.get
Returns the full user record for the currently authenticated user.


```js
asana.users.me.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### projects.project_gid.addCustomFieldSetting.post
Create a new custom field setting on the project.


```js
asana.projects.project_gid.addCustomFieldSetting.post({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to associate the custom field with
  * custom_field `string`: The id of the custom field to associate with this project.
  * is_important `string`: Whether this field should be considered important to this project.
  * insert_before `string`: An id of a Custom Field Settings on this project, before which the new Custom Field Settings will be added. and parameters cannot both be specified.
  * insert_after `string`: An id of a Custom Field Settings on this project, after which the new Custom Field Settings will be added. and parameters cannot both be specified.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
* output `object`
  * data **required** `object`

### tasks.task_gid.attachments.post
This method uploads an attachment to a task and returns the compact record for the created attachment object. It is not possible to attach files from third party services such as Dropbox, Box & Google Drive via the API. You must download the file content first and then upload it as any other attachment.


```js
asana.tasks.task_gid.attachments.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: Globally unique identifier for the task.
  * file `string`: The file you want to upload. Be sure to add an ‘@’ before the file path, and use the —form option instead of the -d option. When uploading PDFs with curl, force the content-type to be pdf by appending the content type to the file path: —form “file=@file.pdf;type=application/pdf”.

#### Output
* output `object`
  * data **required** `object`
    * gid **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`
    * name **required** `string`

### tasks.task_gid.attachments.get
Returns the compact records for all attachments on the task.


```js
asana.tasks.task_gid.attachments.get({}, context)
```

#### Input
* input `object`
  * task_gid `string`: Globally unique identifier for the task.

#### Output
* output `object`
  * data **required** `array`

### tasks.task_gid.addProject.post
Adds the task to the specified project, in the optional location specified. If no location arguments are given, the task will be added to the end of the project.


```js
asana.tasks.task_gid.addProject.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to add to a project.
  * project `string`: The project to add the task to.
  * insert_after `string`: A task in the project to insert the task after, or to insert at the beginning of the list.
  * insert_before `string`: A task in the project to insert the task before, or to insert at the end of the list.
  * section `string`: A section in the project to insert the task into. The task will be inserted at the bottom of the section.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### tasks.task_gid.setParent.post
Changes the parent of a task. Each task may only be a subtask of a single parent, or no parent task at all. Returns an empty data block. When using insert_before and insert_after , at most one of those two options can be specified, and they must already be subtasks of the parent.


```js
asana.tasks.task_gid.setParent.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to change the parent of.
  * parent `string`: The new parent of the task, or for no parent.
  * insert_after `string`: A subtask of the parent to insert the task after, or to insert at the beginning of the list.
  * insert_before `string`: A subtask of the parent to insert the task before, or to insert at the end of the list.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `object`
    * ... **required** `string`
    * name **required** `string`
    * parent **required** `array`
      * items `object`
        * gid **required** `string`
        * id **required** `integer`
        * resource_type **required** `string`
        * name **required** `string`
    * gid **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`

### teams.team_gid.removeUser.post
The user to remove can be referenced by their globally unique user ID or their email address. Removes the user from the specified team. Returns an empty data record.


```js
asana.teams.team_gid.removeUser.post({}, context)
```

#### Input
* input `object`
  * team_gid `string`: Globally unique identifier for the team.
  * user `string`: An identifier for the user. Can be one of an email address, the globally unique identifier for the user, or the keyword to indicate the current user making the request.
  * name `string`: The name of the team.
  * description `string`: The description of the team.
  * html_description `string`: The description of the team with formatting as HTML.

#### Output
*Output schema unknown*

### custom_fields.custom_field_gid.enum_options.post
Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 50 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list.


```js
asana.custom_fields.custom_field_gid.enum_options.post({}, context)
```

#### Input
* input `object`
  * custom_field_gid `string`: Globally unique identifier for the custom field.
  * name `string`: The name of the enum option.
  * color `string`: The color of the enum option. Defaults to ‘none’.
  * insert_before `string`: An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
  * insert_after `string`: An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
  * resource_subtype `string`: The type of custom field. Must be one of the given values.
  * description `string`: The description of the custom field.
  * type `string`: The type of the custom field. Must be one of the given values.
  * precision `string`: Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.

#### Output
*Output schema unknown*

### projects.project_gid.sections.post
Creates a new section in a project.


```js
asana.projects.project_gid.sections.post({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to create the section in
  * name `string`: The text to be displayed as the section name. This cannot be an empty string.

#### Output
* output `object`
  * data **required** `array`
    * items `object`
      * name **required** `string`
      * created_at **required** `string`
      * project **required** `object`
        * gid **required** `string`
        * id **required** `integer`
        * resource_type **required** `string`
        * name **required** `string`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`

### projects.project_gid.sections.get
Returns the compact records for all sections in the specified project.


```js
asana.projects.project_gid.sections.get({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to get sections from.
  * name `string`: The name of the section (i.e. the text displayed as the section header).

#### Output
* output `object`
  * data **required** `array`

### tags.post
Creates a new tag in a workspace or organization.


```js
asana.tags.post({}, context)
```

#### Input
* input `object`
  * workspace `string`: The workspace or organization to create the tag in.
  * name `string`: Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * color `string`: Color of the tag. Must be either or one of: , , , , , , , , , , , , , , , , , .

#### Output
* output `object`
  * data **required** `object`
    * gid **required** `string`
    * null **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`
    * name **required** `string`

### tags.get
Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.


```js
asana.tags.get({}, context)
```

#### Input
* input `object`
  * workspace `string`: The workspace or organization to filter tags on.
  * team `string`: The team to filter tags on.
  * archived `string`: Only return tags whose field takes on the value of this parameter.
  * name `string`: Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * color `string`: Color of the tag. Must be either or one of: , , , , , , , , , , , , , , , , , .

#### Output
* output `object`
  * data **required** `object`
    * gid **required** `string`
    * null **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`
    * name **required** `string`

### projects.project_gid.project_statuses.post
Creates a new status update on the project.


```js
asana.projects.project_gid.project_statuses.post({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project on which to create a status update.
  * text `string`: The text of the project status update.
  * color `string`: The color to associate with the status update. Must be one of , , or .

#### Output
* output `object`
  * data **required** `object`
    * title **required** `string`
    * color **required** `string`
    * text **required** `string`
    * created_at **required** `string`
    * created_by **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * gid **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`

### projects.project_gid.project_statuses.get
Returns the compact project status update records for all updates on the project.


```js
asana.projects.project_gid.project_statuses.get({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to find status updates for.

#### Output
* output `object`
  * data **required** `array`

### users.user_gid.get
Returns the full user record for the single user with the provided ID.


```js
asana.users.user_gid.get({}, context)
```

#### Input
* input `object`
  * user_gid `string`: An identifier for the user. Can be one of an email address, the globally unique identifier for the user, or the keyword to indicate the current user making the request.

#### Output
* output `object`
  * data **required** `object`
    * workspaces **required** `array`
    * name **required** `string`
    * id **required** `integer`
    * gid **required** `string`
    * email **required** `string`
    * resource_type **required** `string`

### enum_options.enum_option_gid.put
Updates an existing enum option. Enum custom fields require at least one enabled enum option.


```js
asana.enum_options.enum_option_gid.put({}, context)
```

#### Input
* input `object`
  * enum_option_gid `string`: Globally unique identifier for the enum option.
  * name `string`: The name of the enum option.
  * color `string`: The color of the enum option. Defaults to ‘none’.
  * enabled `string`: Whether or not the enum option is a selectable value for the custom field.
  * resource_subtype `string`: The type of custom field. Must be one of the given values.
  * description `string`: The description of the custom field.
  * type `string`: The type of the custom field. Must be one of the given values.
  * precision `string`: Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.

#### Output
*Output schema unknown*

### workspaces.get
Returns the compact records for all workspaces visible to the authorized user.


```js
asana.workspaces.get({}, context)
```

#### Input
* input `object`
  * name `string`: The name of the workspace.
  * is_organization `string`: Whether the workspace is an .

#### Output
*Output schema unknown*

### projects.project_gid.sections.insert.post
Move sections relative to each other in a board view. One of before_section or after_section is required.


```js
asana.projects.project_gid.sections.insert.post({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project in which to reorder the given section
  * section `string`: The section to reorder
  * before_section `string`: Insert the given section immediately before the section specified by this parameter.
  * after_section `string`: Insert the given section immediately after the section specified by this parameter.
  * name `string`: The name of the section (i.e. the text displayed as the section header).

#### Output
* output `object`
  * data **required** `object`

### webhooks.webhook_gid.delete
This method permanently removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.


```js
asana.webhooks.webhook_gid.delete({}, context)
```

#### Input
* input `object`
  * webhook_gid `string`: The webhook to delete.
  * active `string`: If true, the webhook will send events - if false it is considered inactive and will not generate events.

#### Output
* output `object`
  * data **required** `object`

### webhooks.webhook_gid.get
Returns the full record for the given webhook.


```js
asana.webhooks.webhook_gid.get({}, context)
```

#### Input
* input `object`
  * webhook_gid `string`: The webhook to get.
  * active `string`: If true, the webhook will send events - if false it is considered inactive and will not generate events.

#### Output
* output `object`
  * data **required** `object`
    * resource **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * target **required** `string`
    * gid **required** `string`
    * active **required** `boolean`
    * id **required** `integer`
    * resource_type **required** `string`

### tasks.post
Creating a new task is as easy as POSTing to the /tasks endpoint with a data block containing the fields you’d like to set on the task. Any unspecified fields will take on default values.


```js
asana.tasks.post({}, context)
```

#### Input
* input `object`
  * workspace `string`: The workspace to create a task in.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `object`
    * ... **required** `string`
    * name **required** `string`
    * parent **required** `array`
      * items `object`
        * gid **required** `string`
        * id **required** `integer`
        * resource_type **required** `string`
        * name **required** `string`
    * gid **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`

### tasks.get
Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a project or tag if you do not specify assignee and workspace .


```js
asana.tasks.get({}, context)
```

#### Input
* input `object`
  * assignee `string`: The assignee to filter tasks on. If you specify , you must also specify the to filter on.
  * project `string`: The project to filter tasks on.
  * section `string`: The section to filter tasks on. Currently, this is only supported in board views.
  * workspace `string`: The workspace or organization to filter tasks on. If you specify , you must also specify the to filter on.
  * completed_since `string`: Only return tasks that are either incomplete or that have been completed since this time.
  * modified_since `string`: Only return tasks that have been modified since the given time. A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g. a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
* output `object`
  * data **required** `object`
    * assignee **required** `object`
      * gid **required** `string`
      * id **required** `integer`
      * resource_type **required** `string`
      * name **required** `string`
    * created_at **required** `string`
    * ... **required** `string`

### workspaces.workspace_gid.addUser.post
The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.


```js
asana.workspaces.workspace_gid.addUser.post({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace or organization to invite the user to.
  * user `string`: An identifier for the user. Can be one of an email address, the globally unique identifier for the user, or the keyword to indicate the current user making the request.
  * name `string`: The name of the workspace.
  * is_organization `string`: Whether the workspace is an .

#### Output
*Output schema unknown*

### tasks.task_gid.addDependents.post
Marks a set of tasks as dependents of this task, if they are not already dependents. A task can have at most 30 dependents.


```js
asana.tasks.task_gid.addDependents.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to add dependents to.
  * dependents `string`: An array of task IDs that should depend on this task.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### tasks.task_gid.dependencies.get
Returns the compact representations of all of the dependencies of a task.


```js
asana.tasks.task_gid.dependencies.get({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to get dependencies on.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### workspaces.workspace_gid.put
A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.


```js
asana.workspaces.workspace_gid.put({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace to update.
  * name `string`: The name of the workspace.
  * is_organization `string`: Whether the workspace is an .

#### Output
*Output schema unknown*

### workspaces.workspace_gid.get
Returns the full workspace record for a single workspace.


```js
asana.workspaces.workspace_gid.get({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: Globally unique identifier for the workspace or organization.
  * name `string`: The name of the workspace.
  * is_organization `string`: Whether the workspace is an .

#### Output
*Output schema unknown*

### projects.project_gid.addMembers.post
Adds the specified list of users as members of the project. Returns the updated project record.


```js
asana.projects.project_gid.addMembers.post({}, context)
```

#### Input
* input `object`
  * project_gid `string`: The project to add members to.
  * members `string`: An array of user ids.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
*Output schema unknown*

### sections.section_gid.tasks.get
Board view only: Returns the compact section records for all tasks within the given section.


```js
asana.sections.section_gid.tasks.get({}, context)
```

#### Input
* input `object`
  * section_gid `string`: The section in which to search for tasks.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### workspaces.workspace_gid.projects.post
If the workspace for your project is an organization, you must also supply a team to share the project with.


```js
asana.workspaces.workspace_gid.projects.post({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace or organization to create the project in.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
*Output schema unknown*

### workspaces.workspace_gid.projects.get
Returns the compact project records for all projects in the workspace.


```js
asana.workspaces.workspace_gid.projects.get({}, context)
```

#### Input
* input `object`
  * workspace_gid `string`: The workspace or organization to find projects in.
  * archived `string`: Only return projects whose field takes on the value of this parameter.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * workspace `string`: The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * team `string`: The team that this project is shared with. This field only exists for projects in organizations.
  * layout `string`: The layout (board or list view) of the project.

#### Output
* output `object`
  * data **required** `array`

### tasks.task_gid.tags.get
Returns a compact representation of all of the tags the task has.


```js
asana.tasks.task_gid.tags.get({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to get tags on.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*

### projects.post
Creates a new project in a workspace or team.


```js
asana.projects.post({}, context)
```

#### Input
* input `object`
  * workspace `string`: The workspace or organization to create the project in.
  * team `string`: If creating in an organization, the specific team to create the project in.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * archived `string`: True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * layout `string`: The layout (board or list view) of the project.

#### Output
* output `object`
  * data **required** `object`

### projects.get
Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.


```js
asana.projects.get({}, context)
```

#### Input
* input `object`
  * workspace `string`: The workspace or organization to filter projects on.
  * team `string`: The team to filter projects on.
  * archived `string`: Only return projects whose field takes on the value of this parameter.
  * name `string`: Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * owner `string`: The current owner of the project, may be null.
  * due_date `string`: The day on which this project is due. This takes a date with format YYYY-MM-DD.
  * start_on `string`: The day on which this project starts. This takes a date with format YYYY-MM-DD.
  * public `string`: True if the project is public to the organization. If false, do not share this project with other users in this organization without explicitly checking to see if they have access.
  * color `string`: Color of the project. Must be either or one of: , , , , , , , , , , , , , , , , , .
  * notes `string`: More detailed, free-form textual information associated with the project.
  * html_notes `string`: The notes of the project with formatting as HTML.
  * layout `string`: The layout (board or list view) of the project.

#### Output
* output `object`
  * data **required** `object`
    * name **required** `string`
    * notes **required** `string`
    * gid **required** `string`
    * null **required** `string`
    * id **required** `integer`
    * resource_type **required** `string`

### tasks.task_gid.addDependencies.post
Marks a set of tasks as dependencies of this task, if they are not already dependencies. A task can have at most 15 dependencies.


```js
asana.tasks.task_gid.addDependencies.post({}, context)
```

#### Input
* input `object`
  * task_gid `string`: The task to add dependencies to.
  * dependencies `string`: An array of task IDs that this task should depend on.
  * assignee `string`: User to which this task is assigned, or if the task is unassigned.
  * assignee_status `string`: Scheduling status of this task for the user it is assigned to. This field can only be set if the is non-null.
  * completed `string`: True if the task is currently marked complete, false if not.
  * custom_fields `string`: Array of custom fields applied to the task. These custom fields represent the values recorded on this task for a particular custom field. For example, these fields will contain an property for custom fields of type , a property for custom fields of type , and so on. Please note that the id returned on each custom field value to the id of the custom field, which allows referencing the custom field metadata through the endpoint.
  * due_on `string`: Date on which this task is due, or null if the task has no due date. This takes a date with YYYY-MM-DD format and should not be used together with .
  * due_at `string`: Date and time on which this task is due, or null if the task has no due time. This takes a UTC timestamp and should not be used together with .
  * external `string`: The external field allows you to store app-specific metadata on tasks, including an id that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external id is set, you can use the notation to reference your object anywhere in the API where you may use the original object id. See the page on Custom External Data for more details.
  * followers `string`: Array of users following this task.
  * liked `string`: True if the task is liked by the authorized user, false if not.
  * name `string`: Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
  * notes `string`: More detailed, free-form textual information associated with the task.
  * html_notes `string`: The notes of the text with formatting as HTML.
  * projects `string`: Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the and endpoints.
  * start_on `string`: Date on which this task is due, or null if the task has no start date. This field takes a date with YYYY-MM-DD format. or must be present in the request when setting or unsetting the parameter.
  * workspace `string`: The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
  * memberships `string`: Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the and endpoints. Note that over time, more types of memberships may be added to this property.
  * tags `string`: Array of tags associated with this task. This property may be specified on creation using just an array of tag IDs. In order to change tags on an existing task use and .

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
