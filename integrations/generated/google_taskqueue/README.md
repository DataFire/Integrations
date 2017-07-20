# @datafire/google_taskqueue

Client library for TaskQueue

## Installation and Usage
```bash
npm install --save datafire @datafire/google_taskqueue
```

```js
let datafire = require('datafire');
let google_taskqueue = require('@datafire/google_taskqueue').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_taskqueue: account,
  }
})


google_taskqueue.taskqueues.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Accesses a Google App Engine Pull Task Queue over REST.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_taskqueue.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_taskqueue.oauthRefresh(null, context)
```


### taskqueues.get
Get detailed information about a TaskQueue.


```js
google_taskqueue.taskqueues.get({
  "project": "",
  "taskqueue": ""
}, context)
```

#### Parameters
* project (string) **required** - The project under which the queue lies.
* taskqueue (string) **required** - The id of the taskqueue to get the properties of.
* getStats (boolean) - Whether to get stats. Optional.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.list
List Tasks in a TaskQueue


```js
google_taskqueue.tasks.list({
  "project": "",
  "taskqueue": ""
}, context)
```

#### Parameters
* project (string) **required** - The project under which the queue lies.
* taskqueue (string) **required** - The id of the taskqueue to list tasks from.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.insert
Insert a new task in a TaskQueue


```js
google_taskqueue.tasks.insert({
  "project": "",
  "taskqueue": ""
}, context)
```

#### Parameters
* project (string) **required** - The project under which the queue lies
* taskqueue (string) **required** - The taskqueue to insert the task into
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.lease
Lease 1 or more tasks from a TaskQueue.


```js
google_taskqueue.tasks.lease({
  "project": "",
  "taskqueue": "",
  "numTasks": 0,
  "leaseSecs": 0
}, context)
```

#### Parameters
* project (string) **required** - The project under which the queue lies.
* taskqueue (string) **required** - The taskqueue to lease a task from.
* numTasks (integer) **required** - The number of tasks to lease.
* leaseSecs (integer) **required** - The lease in seconds.
* groupByTag (boolean) - When true, all returned tasks will have the same tag
* tag (string) - The tag allowed for tasks in the response. Must only be specified if group_by_tag is true. If group_by_tag is true and tag is not specified the tag will be that of the oldest task by eta, i.e. the first available tag
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.delete
Delete a task from a TaskQueue.


```js
google_taskqueue.tasks.delete({
  "project": "",
  "taskqueue": "",
  "task": ""
}, context)
```

#### Parameters
* project (string) **required** - The project under which the queue lies.
* taskqueue (string) **required** - The taskqueue to delete a task from.
* task (string) **required** - The id of the task to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.get
Get a particular task from a TaskQueue.


```js
google_taskqueue.tasks.get({
  "project": "",
  "taskqueue": "",
  "task": ""
}, context)
```

#### Parameters
* project (string) **required** - The project under which the queue lies.
* taskqueue (string) **required** - The taskqueue in which the task belongs.
* task (string) **required** - The task to get properties of.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.patch
Update tasks that are leased out of a TaskQueue. This method supports patch semantics.


```js
google_taskqueue.tasks.patch({
  "project": "",
  "taskqueue": "",
  "task": "",
  "newLeaseSeconds": 0
}, context)
```

#### Parameters
* project (string) **required** - The project under which the queue lies.
* taskqueue (string) **required**
* task (string) **required**
* newLeaseSeconds (integer) **required** - The new lease in seconds.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tasks.update
Update tasks that are leased out of a TaskQueue.


```js
google_taskqueue.tasks.update({
  "project": "",
  "taskqueue": "",
  "task": "",
  "newLeaseSeconds": 0
}, context)
```

#### Parameters
* project (string) **required** - The project under which the queue lies.
* taskqueue (string) **required**
* task (string) **required**
* newLeaseSeconds (integer) **required** - The new lease in seconds.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

