# @datafire/google_pubsublite

Client library for Pub/Sub Lite API

## Installation and Usage
```bash
npm install --save @datafire/google_pubsublite
```
```js
let google_pubsublite = require('@datafire/google_pubsublite').create({
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



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_pubsublite.oauthCallback({
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
google_pubsublite.oauthRefresh(null, context)
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

### pubsublite.admin.projects.locations.topics.delete
Deletes the specified topic.


```js
google_pubsublite.pubsublite.admin.projects.locations.topics.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the topic to delete.
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
* output [Empty](#empty)

### pubsublite.admin.projects.locations.topics.get
Returns the topic configuration.


```js
google_pubsublite.pubsublite.admin.projects.locations.topics.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the topic whose configuration to return.
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
* output [Topic](#topic)

### pubsublite.admin.projects.locations.topics.patch
Updates properties of the specified topic.


```js
google_pubsublite.pubsublite.admin.projects.locations.topics.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}
  * updateMask `string`: Required. A mask specifying the topic fields to change.
  * body [Topic](#topic)
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
* output [Topic](#topic)

### pubsublite.admin.projects.locations.topics.getPartitions
Returns the partition information for the requested topic.


```js
google_pubsublite.pubsublite.admin.projects.locations.topics.getPartitions({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The topic whose partition information to return.
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
* output [TopicPartitions](#topicpartitions)

### pubsublite.admin.projects.locations.topics.subscriptions.list
Lists the subscriptions attached to the specified topic.


```js
google_pubsublite.pubsublite.admin.projects.locations.topics.subscriptions.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the topic whose subscriptions to list.
  * pageSize `integer`: The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned.
  * pageToken `string`: A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token.
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
* output [ListTopicSubscriptionsResponse](#listtopicsubscriptionsresponse)

### pubsublite.admin.projects.locations.subscriptions.list
Returns the list of subscriptions for the given project.


```js
google_pubsublite.pubsublite.admin.projects.locations.subscriptions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number}/locations/{location}`.
  * pageSize `integer`: The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned.
  * pageToken `string`: A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
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
* output [ListSubscriptionsResponse](#listsubscriptionsresponse)

### pubsublite.admin.projects.locations.subscriptions.create
Creates a new subscription.


```js
google_pubsublite.pubsublite.admin.projects.locations.subscriptions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent location in which to create the subscription. Structured like `projects/{project_number}/locations/{location}`.
  * subscriptionId `string`: Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`.
  * body [Subscription](#subscription)
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
* output [Subscription](#subscription)

### pubsublite.admin.projects.locations.topics.list
Returns the list of topics for the given project.


```js
google_pubsublite.pubsublite.admin.projects.locations.topics.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent whose topics are to be listed. Structured like `projects/{project_number}/locations/{location}`.
  * pageSize `integer`: The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned.
  * pageToken `string`: A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
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
* output [ListTopicsResponse](#listtopicsresponse)

### pubsublite.admin.projects.locations.topics.create
Creates a new topic.


```js
google_pubsublite.pubsublite.admin.projects.locations.topics.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent location in which to create the topic. Structured like `projects/{project_number}/locations/{location}`.
  * topicId `string`: Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
  * body [Topic](#topic)
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
* output [Topic](#topic)

### pubsublite.cursor.projects.locations.subscriptions.cursors.list
Returns all committed cursor information for a subscription.


```js
google_pubsublite.pubsublite.cursor.projects.locations.subscriptions.cursors.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number}/locations/{location}/subscriptions/{subscription_id}`.
  * pageSize `integer`: The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned.
  * pageToken `string`: A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token.
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
* output [ListPartitionCursorsResponse](#listpartitioncursorsresponse)

### pubsublite.topicStats.projects.locations.topics.computeMessageStats
Compute statistics about a range of messages in a given topic and partition.


```js
google_pubsublite.pubsublite.topicStats.projects.locations.topics.computeMessageStats({
  "topic": ""
}, context)
```

#### Input
* input `object`
  * topic **required** `string`: Required. The topic for which we should compute message stats.
  * body [ComputeMessageStatsRequest](#computemessagestatsrequest)
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
* output [ComputeMessageStatsResponse](#computemessagestatsresponse)



## Definitions

### Capacity
* Capacity `object`: The throughput capacity configuration for each partition.
  * publishMibPerSec `integer`: Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  * subscribeMibPerSec `integer`: Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 32.

### ComputeMessageStatsRequest
* ComputeMessageStatsRequest `object`: Compute statistics about a range of messages in a given topic and partition.
  * endCursor [Cursor](#cursor)
  * partition `string`: Required. The partition for which we should compute message stats.
  * startCursor [Cursor](#cursor)

### ComputeMessageStatsResponse
* ComputeMessageStatsResponse `object`: Response containing stats for messages in the requested topic and partition.
  * messageBytes `string`: The number of quota bytes accounted to these messages.
  * messageCount `string`: The count of messages.
  * minimumEventTime `string`: The minimum event timestamp across these messages. For the purposes of this computation, if a message does not have an event time, we use the publish time. The timestamp will be unset if there are no messages.
  * minimumPublishTime `string`: The minimum publish timestamp across these messages. Note that publish timestamps within a partition are not guaranteed to be non-decreasing. The timestamp will be unset if there are no messages.

### Cursor
* Cursor `object`: A cursor that describes the position of a message within a topic partition.
  * offset `string`: The offset of a message within a topic partition. Must be greater than or equal 0.

### DeliveryConfig
* DeliveryConfig `object`: The settings for a subscription's message delivery.
  * deliveryRequirement `string` (values: DELIVERY_REQUIREMENT_UNSPECIFIED, DELIVER_IMMEDIATELY, DELIVER_AFTER_STORED): The DeliveryRequirement for this subscription.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ListPartitionCursorsResponse
* ListPartitionCursorsResponse `object`: Response for ListPartitionCursors
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * partitionCursors `array`: The partition cursors from this request.
    * items [PartitionCursor](#partitioncursor)

### ListSubscriptionsResponse
* ListSubscriptionsResponse `object`: Response for ListSubscriptions.
  * nextPageToken `string`: A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
  * subscriptions `array`: The list of subscriptions in the requested parent. The order of the subscriptions is unspecified.
    * items [Subscription](#subscription)

### ListTopicSubscriptionsResponse
* ListTopicSubscriptionsResponse `object`: Response for ListTopicSubscriptions.
  * nextPageToken `string`: A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
  * subscriptions `array`: The names of subscriptions attached to the topic. The order of the subscriptions is unspecified.
    * items `string`

### ListTopicsResponse
* ListTopicsResponse `object`: Response for ListTopics.
  * nextPageToken `string`: A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
  * topics `array`: The list of topic in the requested parent. The order of the topics is unspecified.
    * items [Topic](#topic)

### PartitionConfig
* PartitionConfig `object`: The settings for a topic's partitions.
  * capacity [Capacity](#capacity)
  * count `string`: The number of partitions in the topic. Must be at least 1.
  * scale `integer`: DEPRECATED: Use capacity instead which can express a superset of configurations. Every partition in the topic is allocated throughput equivalent to `scale` times the standard partition throughput (4 MiB/s). This is also reflected in the cost of this topic; a topic with `scale` of 2 and count of 10 is charged for 20 partitions. This value must be in the range [1,4].

### PartitionCursor
* PartitionCursor `object`: A pair of a Cursor and the partition it is for.
  * cursor [Cursor](#cursor)
  * partition `string`: The partition this is for.

### RetentionConfig
* RetentionConfig `object`: The settings for a topic's message retention.
  * perPartitionBytes `string`: The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of `period`.
  * period `string`: How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`.

### Subscription
* Subscription `object`: Metadata about a subscription resource.
  * deliveryConfig [DeliveryConfig](#deliveryconfig)
  * name `string`: The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id}
  * topic `string`: The name of the topic this subscription is attached to. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}

### Topic
* Topic `object`: Metadata about a topic resource.
  * name `string`: The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}
  * partitionConfig [PartitionConfig](#partitionconfig)
  * retentionConfig [RetentionConfig](#retentionconfig)

### TopicPartitions
* TopicPartitions `object`: Response for GetTopicPartitions.
  * partitionCount `string`: The number of partitions in the topic.


