# @datafire/google_tasks

Client library for Tasks

## Installation and Usage
```bash
npm install --save datafire @datafire/google_tasks
```

```js
let datafire = require('datafire');
let google_tasks = require('@datafire/google_tasks').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_tasks: account,
  }
})

google_tasks.tasklists.insert({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_tasks.oauthRefresh(null, context)
```


### tasks.clear
Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.


```js
google_tasks.tasks.clear({
  "tasklist": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.list
Returns all tasks in the specified task list.


```js
google_tasks.tasks.list({
  "tasklist": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* completedMax (string) - Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
* completedMin (string) - Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
* dueMax (string) - Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
* dueMin (string) - Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
* maxResults (string) - Maximum number of task lists returned on one page. Optional. The default is 100.
* pageToken (string) - Token specifying the result page to return. Optional.
* showCompleted (boolean) - Flag indicating whether completed tasks are returned in the result. Optional. The default is True.
* showDeleted (boolean) - Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
* showHidden (boolean) - Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
* updatedMin (string) - Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.insert
Creates a new task on the specified task list.


```js
google_tasks.tasks.insert({
  "tasklist": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* parent (string) - Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
* previous (string) - Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.delete
Deletes the specified task from the task list.


```js
google_tasks.tasks.delete({
  "tasklist": "",
  "task": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* task (string) **required** - Task identifier.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.get
Returns the specified task.


```js
google_tasks.tasks.get({
  "tasklist": "",
  "task": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* task (string) **required** - Task identifier.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.patch
Updates the specified task. This method supports patch semantics.


```js
google_tasks.tasks.patch({
  "tasklist": "",
  "task": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* task (string) **required** - Task identifier.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.update
Updates the specified task.


```js
google_tasks.tasks.update({
  "tasklist": "",
  "task": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* task (string) **required** - Task identifier.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.move
Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.


```js
google_tasks.tasks.move({
  "tasklist": "",
  "task": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* task (string) **required** - Task identifier.
* parent (string) - New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
* previous (string) - New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasklists.list
Returns all the authenticated user's task lists.


```js
google_tasks.tasklists.list({}, context)
```

#### Parameters
* maxResults (string) - Maximum number of task lists returned on one page. Optional. The default is 100.
* pageToken (string) - Token specifying the result page to return. Optional.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasklists.insert
Creates a new task list and adds it to the authenticated user's task lists.


```js
google_tasks.tasklists.insert({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasklists.delete
Deletes the authenticated user's specified task list.


```js
google_tasks.tasklists.delete({
  "tasklist": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasklists.get
Returns the authenticated user's specified task list.


```js
google_tasks.tasklists.get({
  "tasklist": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasklists.patch
Updates the authenticated user's specified task list. This method supports patch semantics.


```js
google_tasks.tasklists.patch({
  "tasklist": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasklists.update
Updates the authenticated user's specified task list.


```js
google_tasks.tasklists.update({
  "tasklist": ""
}, context)
```

#### Parameters
* tasklist (string) **required** - Task list identifier.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

