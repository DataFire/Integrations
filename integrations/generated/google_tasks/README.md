# @datafire/google_tasks

Client library for Tasks API

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

.then(data => {
  console.log(data);
});
```

## Description

The Google Tasks API lets you manage your tasks and task lists.

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

### tasks.tasks.clear
Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.


```js
google_tasks.tasks.tasks.clear({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### tasks.tasks.list
Returns all tasks in the specified task list.


```js
google_tasks.tasks.tasks.list({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * completedMax `string`: Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
  * completedMin `string`: Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
  * dueMax `string`: Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
  * dueMin `string`: Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
  * maxResults `integer`: Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).
  * pageToken `string`: Token specifying the result page to return. Optional.
  * showCompleted `boolean`: Flag indicating whether completed tasks are returned in the result. Optional. The default is True. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps.
  * showDeleted `boolean`: Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
  * showHidden `boolean`: Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
  * updatedMin `string`: Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Tasks](#tasks)

### tasks.tasks.insert
Creates a new task on the specified task list.


```js
google_tasks.tasks.tasks.insert({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * parent `string`: Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
  * previous `string`: Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
  * body [Task](#task)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Task](#task)

### tasks.tasks.delete
Deletes the specified task from the task list.


```js
google_tasks.tasks.tasks.delete({
  "tasklist": "",
  "task": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * task **required** `string`: Task identifier.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### tasks.tasks.get
Returns the specified task.


```js
google_tasks.tasks.tasks.get({
  "tasklist": "",
  "task": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * task **required** `string`: Task identifier.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Task](#task)

### tasks.tasks.patch
Updates the specified task. This method supports patch semantics.


```js
google_tasks.tasks.tasks.patch({
  "tasklist": "",
  "task": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * task **required** `string`: Task identifier.
  * body [Task](#task)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Task](#task)

### tasks.tasks.update
Updates the specified task.


```js
google_tasks.tasks.tasks.update({
  "tasklist": "",
  "task": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * task **required** `string`: Task identifier.
  * body [Task](#task)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Task](#task)

### tasks.tasks.move
Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.


```js
google_tasks.tasks.tasks.move({
  "tasklist": "",
  "task": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * task **required** `string`: Task identifier.
  * parent `string`: New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
  * previous `string`: New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Task](#task)

### tasks.tasklists.list
Returns all the authenticated user's task lists.


```js
google_tasks.tasks.tasklists.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).
  * pageToken `string`: Token specifying the result page to return. Optional.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TaskLists](#tasklists)

### tasks.tasklists.insert
Creates a new task list and adds it to the authenticated user's task lists.


```js
google_tasks.tasks.tasklists.insert({}, context)
```

#### Input
* input `object`
  * body [TaskList](#tasklist)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TaskList](#tasklist)

### tasks.tasklists.delete
Deletes the authenticated user's specified task list.


```js
google_tasks.tasks.tasklists.delete({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### tasks.tasklists.get
Returns the authenticated user's specified task list.


```js
google_tasks.tasks.tasklists.get({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TaskList](#tasklist)

### tasks.tasklists.patch
Updates the authenticated user's specified task list. This method supports patch semantics.


```js
google_tasks.tasks.tasklists.patch({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * body [TaskList](#tasklist)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TaskList](#tasklist)

### tasks.tasklists.update
Updates the authenticated user's specified task list.


```js
google_tasks.tasks.tasklists.update({
  "tasklist": ""
}, context)
```

#### Input
* input `object`
  * tasklist **required** `string`: Task list identifier.
  * body [TaskList](#tasklist)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TaskList](#tasklist)



## Definitions

### Task
* Task `object`: LINT.IfChange
  * completed `string`: Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
  * deleted `boolean`: Flag indicating whether the task has been deleted. The default is False.
  * due `string`: Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API.
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


