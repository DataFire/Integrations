# @datafire/google_cloudtasks

Client library for Cloud Tasks

## Installation and Usage
```bash
npm install --save @datafire/google_cloudtasks
```
```js
let google_cloudtasks = require('@datafire/google_cloudtasks').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_cloudtasks.projects.locations.queues.tasks.delete({
  "name": ""
}).then(data => {
  console.log(data);
});
```

## Description

Manages the execution of large numbers of distributed requests. Cloud Tasks is in Alpha.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudtasks.oauthCallback({
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
google_cloudtasks.oauthRefresh(null, context)
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

### projects.locations.queues.tasks.delete
Deletes a task.

A task can be deleted if it is scheduled or dispatched. A task
cannot be deleted if it has completed successfully or permanently
failed.


```js
google_cloudtasks.projects.locations.queues.tasks.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### projects.locations.queues.tasks.get
Gets a task.


```js
google_cloudtasks.projects.locations.queues.tasks.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required.
  * responseView `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): The response_view specifies which subset of the Task will be
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Task](#task)

### projects.locations.queues.patch
Updates a queue.

This method creates the queue if it does not exist and updates
the queue if it does exist.

Queues created with this method allow tasks to live for a maximum of 31
days. After a task is 31 days old, the task will be deleted regardless of whether
it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are
using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
Read
[Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml)
before using this method.


```js
google_cloudtasks.projects.locations.queues.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [Queue](#queue)
  * name **required** `string`: The queue name.
  * updateMask `string`: A mask used to specify which fields of the queue are being updated.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Queue](#queue)

### projects.locations.list
Lists information about the supported locations for this service.


```js
google_cloudtasks.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: The standard list filter.
  * name **required** `string`: The resource that owns the locations collection, if applicable.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListLocationsResponse](#listlocationsresponse)

### projects.locations.queues.tasks.acknowledge
Acknowledges a pull task.

The worker, that is, the entity that
leased this task must call this method
to indicate that the work associated with the task has finished.

The worker must acknowledge a task within the
lease_duration or the lease
will expire and the task will become available to be leased
again. After the task is acknowledged, it will not be returned
by a later LeaseTasks,
GetTask, or
ListTasks.

To acknowledge multiple tasks at the same time, use
[HTTP batching](/storage/docs/json_api/v1/how-tos/batch)
or the batching documentation for your client library, for example
https://developers.google.com/api-client-library/python/guide/batch.


```js
google_cloudtasks.projects.locations.queues.tasks.acknowledge({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [AcknowledgeTaskRequest](#acknowledgetaskrequest)
  * name **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### projects.locations.queues.tasks.cancelLease
Cancel a pull task's lease.

The worker can use this method to cancel a task's lease by
setting its schedule_time to now. This will
make the task available to be leased to the next caller of
LeaseTasks.


```js
google_cloudtasks.projects.locations.queues.tasks.cancelLease({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CancelLeaseRequest](#cancelleaserequest)
  * name **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Task](#task)

### projects.locations.queues.pause
Pauses the queue.

If a queue is paused then the system will stop dispatching tasks
until the queue is resumed via
ResumeQueue. Tasks can still be added
when the queue is paused. A queue is paused if its
state is PAUSED.


```js
google_cloudtasks.projects.locations.queues.pause({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [PauseQueueRequest](#pausequeuerequest)
  * name **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Queue](#queue)

### projects.locations.queues.purge
Purges a queue by deleting all of its tasks.

All tasks created before this method is called are permanently deleted.

Purge operations can take up to one minute to take effect. Tasks
might be dispatched before the purge takes effect. A purge is irreversible.


```js
google_cloudtasks.projects.locations.queues.purge({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [PurgeQueueRequest](#purgequeuerequest)
  * name **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Queue](#queue)

### projects.locations.queues.tasks.renewLease
Renew the current lease of a pull task.

The worker can use this method to extend the lease by a new
duration, starting from now. The new task lease will be
returned in the task's schedule_time.


```js
google_cloudtasks.projects.locations.queues.tasks.renewLease({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [RenewLeaseRequest](#renewleaserequest)
  * name **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Task](#task)

### projects.locations.queues.resume
Resume a queue.

This method resumes a queue after it has been
PAUSED or
DISABLED. The state of a queue is stored
in the queue's state; after calling this method it
will be set to RUNNING.

WARNING: Resuming many high-QPS queues at the same time can
lead to target overloading. If you are resuming high-QPS
queues, follow the 500/50/5 pattern described in
[Managing Cloud Tasks Scaling Risks](/cloud-tasks/pdfs/managing-cloud-tasks-scaling-risks-2017-06-05.pdf).


```js
google_cloudtasks.projects.locations.queues.resume({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ResumeQueueRequest](#resumequeuerequest)
  * name **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Queue](#queue)

### projects.locations.queues.tasks.run
Forces a task to run now.

This command is meant to be used for manual debugging. For
example, RunTask can be used to retry a failed
task after a fix has been made or to manually force a task to be
dispatched now.

When this method is called, Cloud Tasks will dispatch the task to its
target, even if the queue is PAUSED.

The dispatched task is returned. That is, the task that is returned
contains the status after the task is dispatched but
before the task is received by its target.

If Cloud Tasks receives a successful response from the task's
handler, then the task will be deleted; otherwise the task's
schedule_time will be reset to the time that
RunTask was called plus the retry delay specified
in the queue and task's RetryConfig.

RunTask returns
NOT_FOUND when it is called on a
task that has already succeeded or permanently
failed. FAILED_PRECONDITION
is returned when RunTask is called on task
that is dispatched or already running.

RunTask cannot be called on
pull tasks.


```js
google_cloudtasks.projects.locations.queues.tasks.run({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [RunTaskRequest](#runtaskrequest)
  * name **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Task](#task)

### projects.locations.queues.list
Lists queues.

Queues are returned in lexicographical order.


```js
google_cloudtasks.projects.locations.queues.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: `filter` can be used to specify a subset of queues. Any Queue
  * pageSize `integer`: Requested page size.
  * pageToken `string`: A token identifying the page of results to return.
  * parent **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListQueuesResponse](#listqueuesresponse)

### projects.locations.queues.create
Creates a queue.

Queues created with this method allow tasks to live for a maximum of 31
days. After a task is 31 days old, the task will be deleted regardless of whether
it was dispatched or not.

WARNING: Using this method may have unintended side effects if you are
using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
Read
[Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml)
before using this method.


```js
google_cloudtasks.projects.locations.queues.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [Queue](#queue)
  * parent **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Queue](#queue)

### projects.locations.queues.tasks.list
Lists the tasks in a queue.

By default, only the BASIC view is retrieved
due to performance considerations;
response_view controls the
subset of information which is returned.


```js
google_cloudtasks.projects.locations.queues.tasks.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * orderBy `string`: Sort order used for the query. The only fields supported for sorting
  * pageSize `integer`: Requested page size. Fewer tasks than requested might be returned.
  * pageToken `string`: A token identifying the page of results to return.
  * parent **required** `string`: Required.
  * responseView `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): The response_view specifies which subset of the Task will be
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListTasksResponse](#listtasksresponse)

### projects.locations.queues.tasks.create
Creates a task and adds it to a queue.

To add multiple tasks at the same time, use
[HTTP batching](/storage/docs/json_api/v1/how-tos/batch)
or the batching documentation for your client library, for example
https://developers.google.com/api-client-library/python/guide/batch.

Tasks cannot be updated after creation; there is no UpdateTask command.

* For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),
  the maximum task size is 100KB.
* For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this
  the maximum task size is 1MB.


```js
google_cloudtasks.projects.locations.queues.tasks.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [CreateTaskRequest](#createtaskrequest)
  * parent **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Task](#task)

### projects.locations.queues.tasks.lease
Leases tasks from a pull queue for
lease_duration.

This method is invoked by the worker to obtain a lease. The
worker must acknowledge the task via
AcknowledgeTask after they have
performed the work associated with the task.

The payload is intended to store data that
the worker needs to perform the work associated with the task. To
return the payloads in the response, set
response_view to
FULL.

A maximum of 10 qps of LeaseTasks
requests are allowed per
queue. RESOURCE_EXHAUSTED
is returned when this limit is
exceeded. RESOURCE_EXHAUSTED
is also returned when
max_tasks_dispatched_per_second
is exceeded.


```js
google_cloudtasks.projects.locations.queues.tasks.lease({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [LeaseTasksRequest](#leasetasksrequest)
  * parent **required** `string`: Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [LeaseTasksResponse](#leasetasksresponse)

### projects.locations.queues.getIamPolicy
Gets the access control policy for a Queue.
Returns an empty policy if the resource exists and does not have a policy
set.

Authorization requires the following [Google IAM](/iam) permission on the
specified resource parent:

* `cloudtasks.queues.getIamPolicy`


```js
google_cloudtasks.projects.locations.queues.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [GetIamPolicyRequest](#getiampolicyrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Policy](#policy)

### projects.locations.queues.setIamPolicy
Sets the access control policy for a Queue. Replaces any existing
policy.

Note: The Cloud Console does not check queue-level IAM permissions yet.
Project-level permissions are required to use the Cloud Console.

Authorization requires the following [Google IAM](/iam) permission on the
specified resource parent:

* `cloudtasks.queues.setIamPolicy`


```js
google_cloudtasks.projects.locations.queues.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Policy](#policy)

### projects.locations.queues.testIamPermissions
Returns permissions that a caller has on a Queue.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.


```js
google_cloudtasks.projects.locations.queues.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### AcknowledgeTaskRequest
* AcknowledgeTaskRequest `object`: Request message for acknowledging a task using
  * scheduleTime `string`: Required.

### AppEngineHttpRequest
* AppEngineHttpRequest `object`: App Engine HTTP request.
  * appEngineRouting [AppEngineRouting](#appenginerouting)
  * headers `object`: HTTP request headers.
  * httpMethod `string` (values: HTTP_METHOD_UNSPECIFIED, POST, GET, HEAD, PUT, DELETE): The HTTP method to use for the request. The default is POST.
  * payload `string`: Payload.
  * relativeUrl `string`: The relative URL.

### AppEngineHttpTarget
* AppEngineHttpTarget `object`: App Engine HTTP target.
  * appEngineRoutingOverride [AppEngineRouting](#appenginerouting)

### AppEngineRouting
* AppEngineRouting `object`: App Engine Routing.
  * host `string`: Output only. The host that the task is sent to.
  * instance `string`: App instance.
  * service `string`: App service.
  * version `string`: App version.

### AttemptStatus
* AttemptStatus `object`: The status of a task attempt.
  * dispatchTime `string`: Output only. The time that this attempt was dispatched.
  * responseStatus [Status](#status)
  * responseTime `string`: Output only. The time that this attempt response was received.
  * scheduleTime `string`: Output only. The time that this attempt was scheduled.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### CancelLeaseRequest
* CancelLeaseRequest `object`: Request message for canceling a lease using
  * responseView `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): The response_view specifies which subset of the Task will be
  * scheduleTime `string`: Required.

### CreateTaskRequest
* CreateTaskRequest `object`: Request message for CreateTask.
  * responseView `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): The response_view specifies which subset of the Task will be
  * task [Task](#task)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.

### LeaseTasksRequest
* LeaseTasksRequest `object`: Request message for leasing tasks using LeaseTasks.
  * filter `string`: `filter` can be used to specify a subset of tasks to lease.
  * leaseDuration `string`: 
  * maxTasks `integer`: The maximum number of tasks to lease. The maximum that can be
  * responseView `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): The response_view specifies which subset of the Task will be

### LeaseTasksResponse
* LeaseTasksResponse `object`: Response message for leasing tasks using LeaseTasks.
  * tasks `array`: The leased tasks.
    * items [Task](#task)

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListQueuesResponse
* ListQueuesResponse `object`: Response message for ListQueues.
  * nextPageToken `string`: A token to retrieve next page of results.
  * queues `array`: The list of queues.
    * items [Queue](#queue)

### ListTasksResponse
* ListTasksResponse `object`: Response message for listing tasks using ListTasks.
  * nextPageToken `string`: A token to retrieve next page of results.
  * tasks `array`: The list of tasks.
    * items [Task](#task)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * labels `object`: Cross-service attributes for the location. For example
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given
  * name `string`: Resource name for the location, which may vary between implementations.

### PauseQueueRequest
* PauseQueueRequest `object`: Request message for PauseQueue.

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Deprecated.

### PullMessage
* PullMessage `object`: The pull message contains data that can be used by the caller of
  * payload `string`: A data payload consumed by the worker to execute the task.
  * tag `string`: The task's tag.

### PullTarget
* PullTarget `object`: Pull target.

### PurgeQueueRequest
* PurgeQueueRequest `object`: Request message for PurgeQueue.

### Queue
* Queue `object`: A queue is a container of related tasks. Queues are configured to manage
  * appEngineHttpTarget [AppEngineHttpTarget](#appenginehttptarget)
  * name `string`: The queue name.
  * pullTarget [PullTarget](#pulltarget)
  * purgeTime `string`: Output only. The last time this queue was purged.
  * rateLimits [RateLimits](#ratelimits)
  * retryConfig [RetryConfig](#retryconfig)
  * state `string` (values: STATE_UNSPECIFIED, RUNNING, PAUSED, DISABLED): Output only. The state of the queue.

### RateLimits
* RateLimits `object`: Rate limits.
  * maxBurstSize `integer`: Output only. The max burst size.
  * maxConcurrentTasks `integer`: The maximum number of concurrent tasks that Cloud Tasks allows
  * maxTasksDispatchedPerSecond `number`: The maximum rate at which tasks are dispatched from this queue.

### RenewLeaseRequest
* RenewLeaseRequest `object`: Request message for renewing a lease using
  * leaseDuration `string`: Required.
  * responseView `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): The response_view specifies which subset of the Task will be
  * scheduleTime `string`: Required.

### ResumeQueueRequest
* ResumeQueueRequest `object`: Request message for ResumeQueue.

### RetryConfig
* RetryConfig `object`: Retry config.
  * maxAttempts `integer`: The maximum number of attempts for a task.
  * maxBackoff `string`: A task will be [scheduled](Task.schedule_time) for retry between
  * maxDoublings `integer`: The time between retries will double `max_doublings` times.
  * maxRetryDuration `string`: If positive, `max_retry_duration` specifies the time limit for
  * minBackoff `string`: A task will be [scheduled](Task.schedule_time) for retry between
  * unlimitedAttempts `boolean`: If true, then the number of attempts is unlimited.

### RunTaskRequest
* RunTaskRequest `object`: Request message for forcing a task to run now using
  * responseView `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): The response_view specifies which subset of the Task will be

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### Task
* Task `object`: A unit of scheduled work.
  * appEngineHttpRequest [AppEngineHttpRequest](#appenginehttprequest)
  * createTime `string`: Output only. The time that the task was created.
  * name `string`: The task name.
  * pullMessage [PullMessage](#pullmessage)
  * scheduleTime `string`: The time when the task is scheduled to be attempted.
  * status [TaskStatus](#taskstatus)
  * view `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): Output only. The view specifies which subset of the Task has

### TaskStatus
* TaskStatus `object`: Status of the task.
  * attemptDispatchCount `integer`: Output only. The number of attempts dispatched.
  * attemptResponseCount `integer`: Output only. The number of attempts which have received a response.
  * firstAttemptStatus [AttemptStatus](#attemptstatus)
  * lastAttemptStatus [AttemptStatus](#attemptstatus)

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`


