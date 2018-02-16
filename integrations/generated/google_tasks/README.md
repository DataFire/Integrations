# @datafire/google_tasks

Client library for Tasks

## Installation and Usage
```bash
npm install --save @datafire/google_tasks
```
```js
let google_tasks = require('@datafire/google_tasks').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_tasks.tasklists.insert({}).then(data => {
  console.log(data);
});
```

## Description

Lets you manage your tasks and task lists.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_tasks.oauthCallback({
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
google_tasks.oauthRefresh(null, context)
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

### tasks.clear
Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.


```js
google_tasks.tasks.clear({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### tasks.list
Returns all tasks in the specified task list.


```js
google_tasks.tasks.list({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * completedMax `string`: Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
  * completedMin `string`: Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
  * dueMax `string`: Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
  * dueMin `string`: Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
  * maxResults `string`: Maximum number of task lists returned on one page. Optional. The default is 100.
  * pageToken `string`: Token specifying the result page to return. Optional.
  * showCompleted `boolean`: Flag indicating whether completed tasks are returned in the result. Optional. The default is True.
  * showDeleted `boolean`: Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
  * showHidden `boolean`: Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
  * tasklist **required** `string`: Task list identifier.
  * updatedMin `string`: Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Tasks](#tasks)

### tasks.insert
Creates a new task on the specified task list.


```js
google_tasks.tasks.insert({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * body [Task](#task)
  * parent `string`: Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
  * previous `string`: Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Task](#task)

### tasks.delete
Deletes the specified task from the task list.


```js
google_tasks.tasks.delete({
  "task": "",
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * task **required** `string`: Task identifier.
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### tasks.get
Returns the specified task.


```js
google_tasks.tasks.get({
  "task": "",
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * task **required** `string`: Task identifier.
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Task](#task)

### tasks.patch
Updates the specified task. This method supports patch semantics.


```js
google_tasks.tasks.patch({
  "task": "",
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * body [Task](#task)
  * task **required** `string`: Task identifier.
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Task](#task)

### tasks.update
Updates the specified task.


```js
google_tasks.tasks.update({
  "task": "",
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * body [Task](#task)
  * task **required** `string`: Task identifier.
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Task](#task)

### tasks.move
Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.


```js
google_tasks.tasks.move({
  "task": "",
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * parent `string`: New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
  * previous `string`: New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
  * task **required** `string`: Task identifier.
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Task](#task)

### tasklists.list
Returns all the authenticated user's task lists.


```js
google_tasks.tasklists.list({}, context)
```

#### Input
* input `object`
  * maxResults `string`: Maximum number of task lists returned on one page. Optional. The default is 100.
  * pageToken `string`: Token specifying the result page to return. Optional.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TaskLists](#tasklists)

### tasklists.insert
Creates a new task list and adds it to the authenticated user's task lists.


```js
google_tasks.tasklists.insert({}, context)
```

#### Input
* input `object`
  * body [TaskList](#tasklist)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TaskList](#tasklist)

### tasklists.delete
Deletes the authenticated user's specified task list.


```js
google_tasks.tasklists.delete({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### tasklists.get
Returns the authenticated user's specified task list.


```js
google_tasks.tasklists.get({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TaskList](#tasklist)

### tasklists.patch
Updates the authenticated user's specified task list. This method supports patch semantics.


```js
google_tasks.tasklists.patch({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * body [TaskList](#tasklist)
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TaskList](#tasklist)

### tasklists.update
Updates the authenticated user's specified task list.


```js
google_tasks.tasklists.update({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * body [TaskList](#tasklist)
  * tasklist **required** `string`: Task list identifier.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TaskList](#tasklist)



## Definitions

### Task
* Task `object`
  * completed `string`: Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
  * deleted `boolean`: Flag indicating whether the task has been deleted. The default if False.
  * due `string`: Due date of the task (as a RFC 3339 timestamp). Optional.
  * etag `string`: ETag of the resource.
  * hidden `boolean`: Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.
  * id `string`: Task identifier.
  * kind `string`: Type of the resource. This is always "tasks#task".
  * links `array`: Collection of links. This collection is read-only.
    * items `object`
      * description `string`: The description. In HTML speak: Everything between <a> and </a>.
      * link `string`: The URL.
      * type `string`: Type of the link, e.g. "email".
  * notes `string`: Notes describing the task. Optional.
  * parent `string`: Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level.
  * position `string`: String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position.
  * selfLink `string`: URL pointing to this task. Used to retrieve, update, or delete this task.
  * status `string`: Status of the task. This is either "needsAction" or "completed".
  * title `string`: Title of the task.
  * updated `string`: Last modification time of the task (as a RFC 3339 timestamp).

### TaskList
* TaskList `object`
  * etag `string`: ETag of the resource.
  * id `string`: Task list identifier.
  * kind `string`: Type of the resource. This is always "tasks#taskList".
  * selfLink `string`: URL pointing to this task list. Used to retrieve, update, or delete this task list.
  * title `string`: Title of the task list.
  * updated `string`: Last modification time of the task list (as a RFC 3339 timestamp).

### TaskLists
* TaskLists `object`
  * etag `string`: ETag of the resource.
  * items `array`: Collection of task lists.
    * items [TaskList](#tasklist)
  * kind `string`: Type of the resource. This is always "tasks#taskLists".
  * nextPageToken `string`: Token that can be used to request the next page of this result.

### Tasks
* Tasks `object`
  * etag `string`: ETag of the resource.
  * items `array`: Collection of tasks.
    * items [Task](#task)
  * kind `string`: Type of the resource. This is always "tasks#tasks".
  * nextPageToken `string`: Token used to access the next page of this result.


