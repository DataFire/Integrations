# @datafire/google_pubsub

Client library for Google Cloud Pub/Sub

## Installation and Usage
```bash
npm install --save @datafire/google_pubsub
```
```js
let google_pubsub = require('@datafire/google_pubsub').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_pubsub.projects.topics.create({
  "name": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides reliable, many-to-many, asynchronous messaging between applications.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_pubsub.oauthCallback({
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
google_pubsub.oauthRefresh(null, context)
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

### projects.topics.create
Creates the given topic with the given name.


```js
google_pubsub.projects.topics.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [Topic](#topic)
  * name **required** `string`: The name of the topic. It must have the format
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Topic](#topic)

### projects.subscriptions.list
Lists matching subscriptions.


```js
google_pubsub.projects.subscriptions.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The name of the cloud project that subscriptions belong to.
  * pageToken `string`: The value returned by the last `ListSubscriptionsResponse`; indicates that
  * pageSize `integer`: Maximum number of subscriptions to return.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [ListSubscriptionsResponse](#listsubscriptionsresponse)

### projects.topics.list
Lists matching topics.


```js
google_pubsub.projects.topics.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The name of the cloud project that topics belong to.
  * pageToken `string`: The value returned by the last `ListTopicsResponse`; indicates that this is
  * pageSize `integer`: Maximum number of topics to return.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [ListTopicsResponse](#listtopicsresponse)

### projects.topics.getIamPolicy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.


```js
google_pubsub.projects.topics.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Policy](#policy)

### projects.topics.setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy.


```js
google_pubsub.projects.topics.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Policy](#policy)

### projects.topics.testIamPermissions
Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.


```js
google_pubsub.projects.topics.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)

### projects.subscriptions.delete
Deletes an existing subscription. All messages retained in the subscription
are immediately dropped. Calls to `Pull` after deletion will return
`NOT_FOUND`. After a subscription is deleted, a new one may be created with
the same name, but the new one has no association with the old
subscription or its topic unless the same topic is specified.


```js
google_pubsub.projects.subscriptions.delete({
  "subscription": ""
}, context)
```

#### Input
* input `object`
  * subscription **required** `string`: The subscription to delete.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Empty](#empty)

### projects.subscriptions.get
Gets the configuration details of a subscription.


```js
google_pubsub.projects.subscriptions.get({
  "subscription": ""
}, context)
```

#### Input
* input `object`
  * subscription **required** `string`: The name of the subscription to get.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Subscription](#subscription)

### projects.subscriptions.acknowledge
Acknowledges the messages associated with the `ack_ids` in the
`AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages
from the subscription.

Acknowledging a message whose ack deadline has expired may succeed,
but such a message may be redelivered later. Acknowledging a message more
than once will not result in an error.


```js
google_pubsub.projects.subscriptions.acknowledge({
  "subscription": ""
}, context)
```

#### Input
* input `object`
  * subscription **required** `string`: The subscription whose message is being acknowledged.
  * body [AcknowledgeRequest](#acknowledgerequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Empty](#empty)

### projects.subscriptions.modifyAckDeadline
Modifies the ack deadline for a specific message. This method is useful
to indicate that more time is needed to process a message by the
subscriber, or to make the message available for redelivery if the
processing was interrupted. Note that this does not modify the
subscription-level `ackDeadlineSeconds` used for subsequent messages.


```js
google_pubsub.projects.subscriptions.modifyAckDeadline({
  "subscription": ""
}, context)
```

#### Input
* input `object`
  * subscription **required** `string`: The name of the subscription.
  * body [ModifyAckDeadlineRequest](#modifyackdeadlinerequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Empty](#empty)

### projects.subscriptions.modifyPushConfig
Modifies the `PushConfig` for a specified subscription.

This may be used to change a push subscription to a pull one (signified by
an empty `PushConfig`) or vice versa, or change the endpoint URL and other
attributes of a push subscription. Messages will accumulate for delivery
continuously through the call regardless of changes to the `PushConfig`.


```js
google_pubsub.projects.subscriptions.modifyPushConfig({
  "subscription": ""
}, context)
```

#### Input
* input `object`
  * subscription **required** `string`: The name of the subscription.
  * body [ModifyPushConfigRequest](#modifypushconfigrequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Empty](#empty)

### projects.subscriptions.pull
Pulls messages from the server. Returns an empty list if there are no
messages available in the backlog. The server may return `UNAVAILABLE` if
there are too many concurrent pull requests pending for the given
subscription.


```js
google_pubsub.projects.subscriptions.pull({
  "subscription": ""
}, context)
```

#### Input
* input `object`
  * subscription **required** `string`: The subscription from which messages should be pulled.
  * body [PullRequest](#pullrequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [PullResponse](#pullresponse)

### projects.topics.delete
Deletes the topic with the given name. Returns `NOT_FOUND` if the topic
does not exist. After a topic is deleted, a new topic may be created with
the same name; this is an entirely new topic with none of the old
configuration or subscriptions. Existing subscriptions to this topic are
not deleted, but their `topic` field is set to `_deleted-topic_`.


```js
google_pubsub.projects.topics.delete({
  "topic": ""
}, context)
```

#### Input
* input `object`
  * topic **required** `string`: Name of the topic to delete.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Empty](#empty)

### projects.topics.get
Gets the configuration of a topic.


```js
google_pubsub.projects.topics.get({
  "topic": ""
}, context)
```

#### Input
* input `object`
  * topic **required** `string`: The name of the topic to get.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [Topic](#topic)

### projects.topics.subscriptions.list
Lists the name of the subscriptions for this topic.


```js
google_pubsub.projects.topics.subscriptions.list({
  "topic": ""
}, context)
```

#### Input
* input `object`
  * topic **required** `string`: The name of the topic that subscriptions are attached to.
  * pageToken `string`: The value returned by the last `ListTopicSubscriptionsResponse`; indicates
  * pageSize `integer`: Maximum number of subscription names to return.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [ListTopicSubscriptionsResponse](#listtopicsubscriptionsresponse)

### projects.topics.publish
Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic
does not exist. The message payload must not be empty; it must contain
 either a non-empty data field, or at least one attribute.


```js
google_pubsub.projects.topics.publish({
  "topic": ""
}, context)
```

#### Input
* input `object`
  * topic **required** `string`: The messages in the request will be published on this topic.
  * body [PublishRequest](#publishrequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

#### Output
* output [PublishResponse](#publishresponse)



## Definitions

### AcknowledgeRequest
* AcknowledgeRequest `object`: Request for the Acknowledge method.
  * ackIds `array`: The acknowledgment ID for the messages being acknowledged that was returned
    * items `string`

### Binding
* Binding `object`: Associates `members` with a `role`.
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ListSubscriptionsResponse
* ListSubscriptionsResponse `object`: Response for the `ListSubscriptions` method.
  * nextPageToken `string`: If not empty, indicates that there may be more subscriptions that match
  * subscriptions `array`: The subscriptions that match the request.
    * items [Subscription](#subscription)

### ListTopicSubscriptionsResponse
* ListTopicSubscriptionsResponse `object`: Response for the `ListTopicSubscriptions` method.
  * nextPageToken `string`: If not empty, indicates that there may be more subscriptions that match
  * subscriptions `array`: The names of the subscriptions that match the request.
    * items `string`

### ListTopicsResponse
* ListTopicsResponse `object`: Response for the `ListTopics` method.
  * nextPageToken `string`: If not empty, indicates that there may be more topics that match the
  * topics `array`: The resulting topics.
    * items [Topic](#topic)

### ModifyAckDeadlineRequest
* ModifyAckDeadlineRequest `object`: Request for the ModifyAckDeadline method.
  * ackDeadlineSeconds `integer`: The new ack deadline with respect to the time this request was sent to
  * ackIds `array`: List of acknowledgment IDs.
    * items `string`

### ModifyPushConfigRequest
* ModifyPushConfigRequest `object`: Request for the ModifyPushConfig method.
  * pushConfig [PushConfig](#pushconfig)

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Version of the `Policy`. The default version is 0.

### PublishRequest
* PublishRequest `object`: Request for the Publish method.
  * messages `array`: The messages to publish.
    * items [PubsubMessage](#pubsubmessage)

### PublishResponse
* PublishResponse `object`: Response for the `Publish` method.
  * messageIds `array`: The server-assigned ID of each published message, in the same order as
    * items `string`

### PubsubMessage
* PubsubMessage `object`: A message data and its attributes. The message payload must not be empty;
  * attributes `object`: Optional attributes for this message.
  * data `string`: The message payload.
  * messageId `string`: ID of this message, assigned by the server when the message is published.
  * publishTime `string`: The time at which the message was published, populated by the server when

### PullRequest
* PullRequest `object`: Request for the `Pull` method.
  * maxMessages `integer`: The maximum number of messages returned for this request. The Pub/Sub
  * returnImmediately `boolean`: If this field set to true, the system will respond immediately even if

### PullResponse
* PullResponse `object`: Response for the `Pull` method.
  * receivedMessages `array`: Received Pub/Sub messages. The Pub/Sub system will return zero messages if
    * items [ReceivedMessage](#receivedmessage)

### PushConfig
* PushConfig `object`: Configuration for a push delivery endpoint.
  * attributes `object`: Endpoint configuration attributes.
  * pushEndpoint `string`: A URL locating the endpoint to which messages should be pushed.

### ReceivedMessage
* ReceivedMessage `object`: A message and its corresponding acknowledgment ID.
  * ackId `string`: This ID can be used to acknowledge the received message.
  * message [PubsubMessage](#pubsubmessage)

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### Subscription
* Subscription `object`: A subscription resource.
  * ackDeadlineSeconds `integer`: This value is the maximum time after a subscriber receives a message
  * name `string`: The name of the subscription. It must have the format
  * pushConfig [PushConfig](#pushconfig)
  * topic `string`: The name of the topic from which this subscription is receiving messages.

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### Topic
* Topic `object`: A topic resource.
  * name `string`: The name of the topic. It must have the format


