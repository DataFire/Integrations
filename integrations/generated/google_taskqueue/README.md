# @datafire/google_taskqueue

Client library for TaskQueue

## Installation and Usage
```bash
npm install --save @datafire/google_taskqueue
```
```js
let google_taskqueue = require('@datafire/google_taskqueue').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_taskqueue.taskqueues.get({}).then(data => {
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
google_taskqueue.oauthRefresh(null, context)
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

### taskqueues.get
Get detailed information about a TaskQueue.


```js
google_taskqueue.taskqueues.get({
  "project": "",
  "taskqueue": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project under which the queue lies.
  * taskqueue **required** `string`: The id of the taskqueue to get the properties of.
  * getStats `boolean`: Whether to get stats. Optional.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TaskQueue](#taskqueue)

### tasks.list
List Tasks in a TaskQueue


```js
google_taskqueue.tasks.list({
  "project": "",
  "taskqueue": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project under which the queue lies.
  * taskqueue **required** `string`: The id of the taskqueue to list tasks from.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Tasks2](#tasks2)

### tasks.insert
Insert a new task in a TaskQueue


```js
google_taskqueue.tasks.insert({
  "project": "",
  "taskqueue": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project under which the queue lies
  * taskqueue **required** `string`: The taskqueue to insert the task into
  * body [Task](#task)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Task](#task)

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

#### Input
* input `object`
  * project **required** `string`: The project under which the queue lies.
  * taskqueue **required** `string`: The taskqueue to lease a task from.
  * numTasks **required** `integer`: The number of tasks to lease.
  * leaseSecs **required** `integer`: The lease in seconds.
  * groupByTag `boolean`: When true, all returned tasks will have the same tag
  * tag `string`: The tag allowed for tasks in the response. Must only be specified if group_by_tag is true. If group_by_tag is true and tag is not specified the tag will be that of the oldest task by eta, i.e. the first available tag
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Tasks](#tasks)

### tasks.delete
Delete a task from a TaskQueue.


```js
google_taskqueue.tasks.delete({
  "project": "",
  "taskqueue": "",
  "task": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project under which the queue lies.
  * taskqueue **required** `string`: The taskqueue to delete a task from.
  * task **required** `string`: The id of the task to delete.
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
Get a particular task from a TaskQueue.


```js
google_taskqueue.tasks.get({
  "project": "",
  "taskqueue": "",
  "task": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project under which the queue lies.
  * taskqueue **required** `string`: The taskqueue in which the task belongs.
  * task **required** `string`: The task to get properties of.
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
Update tasks that are leased out of a TaskQueue. This method supports patch semantics.


```js
google_taskqueue.tasks.patch({
  "project": "",
  "taskqueue": "",
  "task": "",
  "newLeaseSeconds": 0
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project under which the queue lies.
  * taskqueue **required** `string`
  * task **required** `string`
  * newLeaseSeconds **required** `integer`: The new lease in seconds.
  * body [Task](#task)
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
Update tasks that are leased out of a TaskQueue.


```js
google_taskqueue.tasks.update({
  "project": "",
  "taskqueue": "",
  "task": "",
  "newLeaseSeconds": 0
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project under which the queue lies.
  * taskqueue **required** `string`
  * task **required** `string`
  * newLeaseSeconds **required** `integer`: The new lease in seconds.
  * body [Task](#task)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Task](#task)



## Definitions

### Task
* Task `object`
  * enqueueTimestamp `string`: Time (in seconds since the epoch) at which the task was enqueued.
  * id `string`: Name of the task.
  * kind `string`: The kind of object returned, in this case set to task.
  * leaseTimestamp `string`: Time (in seconds since the epoch) at which the task lease will expire. This value is 0 if the task isnt currently leased out to a worker.
  * payloadBase64 `string`: A bag of bytes which is the task payload. The payload on the JSON side is always Base64 encoded.
  * queueName `string`: Name of the queue that the task is in.
  * retry_count `integer`: The number of leases applied to this task.
  * tag `string`: Tag for the task, could be used later to lease tasks grouped by a specific tag.

### TaskQueue
* TaskQueue `object`
  * acl `object`: ACLs that are applicable to this TaskQueue object.
    * adminEmails `array`: Email addresses of users who are "admins" of the TaskQueue. This means they can control the queue, eg set ACLs for the queue.
      * items `string`
    * consumerEmails `array`: Email addresses of users who can "consume" tasks from the TaskQueue. This means they can Dequeue and Delete tasks from the queue.
      * items `string`
    * producerEmails `array`: Email addresses of users who can "produce" tasks into the TaskQueue. This means they can Insert tasks into the queue.
      * items `string`
  * id `string`: Name of the taskqueue.
  * kind `string`: The kind of REST object returned, in this case taskqueue.
  * maxLeases `integer`: The number of times we should lease out tasks before giving up on them. If unset we lease them out forever until a worker deletes the task.
  * stats `object`: Statistics for the TaskQueue object in question.
    * leasedLastHour `string`: Number of tasks leased in the last hour.
    * leasedLastMinute `string`: Number of tasks leased in the last minute.
    * oldestTask `string`: The timestamp (in seconds since the epoch) of the oldest unfinished task.
    * totalTasks `integer`: Number of tasks in the queue.

### Tasks
* Tasks `object`
  * items `array`: The actual list of tasks returned as a result of the lease operation.
    * items [Task](#task)
  * kind `string`: The kind of object returned, a list of tasks.

### Tasks2
* Tasks2 `object`
  * items `array`: The actual list of tasks currently active in the TaskQueue.
    * items [Task](#task)
  * kind `string`: The kind of object returned, a list of tasks.


