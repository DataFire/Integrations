# @datafire/google_monitoring

Client library for Stackdriver Monitoring

## Installation and Usage
```bash
npm install --save datafire @datafire/google_monitoring
```

```js
let datafire = require('datafire');
let google_monitoring = require('@datafire/google_monitoring').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_monitoring.projects.groups.delete({}).then(data => {
  console.log(data);
})
```

## Description
Manages your Stackdriver Monitoring data and configurations. Most projects must be associated with a Stackdriver account, with a few exceptions as noted on the individual method pages.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_monitoring.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_monitoring.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### projects.groups.delete
Deletes an existing group.


```js
google_monitoring.projects.groups.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The group to delete. The format is "projects/{project_id_or_number}/groups/{group_id}".
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.groups.get
Gets a single group.


```js
google_monitoring.projects.groups.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The group to retrieve. The format is "projects/{project_id_or_number}/groups/{group_id}".
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.groups.update
Updates an existing group. You can change any group attributes except name.


```js
google_monitoring.projects.groups.update({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Output only. The name of this group. The format is "projects/{project_id_or_number}/groups/{group_id}". When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique {group_id} that is generated automatically.
* validateOnly (boolean) - If true, validate this request but do not update the existing group.
* body (object) - The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group's filter matches an available monitored resource, then that resource is a member of that group. Groups can contain any number of monitored resources, and each monitored resource can be a member of any number of groups.Groups can be nested in parent-child hierarchies. The parentName field identifies an optional parent for each group. If a group has a parent, then the only monitored resources available to be matched by the group's filter are the resources contained in the parent group. In other words, a group contains the monitored resources that match its filter and the filters of all the group's ancestors. A group without a parent can contain any monitored resource.For example, consider an infrastructure running a set of instances with two user-defined tags: "environment" and "role". A parent group has a filter, environment="production". A child of that parent group has a filter, role="transcoder". The parent group contains all instances in the production environment, regardless of their roles. The child group contains instances that have the transcoder role and are in the production environment.The monitored resources contained in a group can change at any moment, depending on what resources exist and what filters are associated with the group and its ancestors.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.collectdTimeSeries.create
Stackdriver Monitoring Agent only: Creates a new time series.<aside class="caution">This method is only for use by the Stackdriver Monitoring Agent. Use projects.timeSeries.create instead.</aside>


```js
google_monitoring.projects.collectdTimeSeries.create({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The project in which to create the time series. The format is "projects/PROJECT_ID_OR_NUMBER".
* body (object) - The CreateCollectdTimeSeries request.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.groups.list
Lists the existing groups.


```js
google_monitoring.projects.groups.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The project whose groups are to be listed. The format is "projects/{project_id_or_number}".
* childrenOfGroup (string) - A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups whose parentName field contains the group name. If no groups have this parent, the results are empty.
* descendantsOfGroup (string) - A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns the descendants of the specified group. This is a superset of the results returned by the childrenOfGroup filter, and includes children-of-children, and so forth.
* pageToken (string) - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
* pageSize (integer) - A positive number that is the maximum number of results to return.
* ancestorsOfGroup (string) - A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.groups.create
Creates a new group.


```js
google_monitoring.projects.groups.create({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The project in which to create the group. The format is "projects/{project_id_or_number}".
* validateOnly (boolean) - If true, validate this request but do not create the group.
* body (object) - The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group's filter matches an available monitored resource, then that resource is a member of that group. Groups can contain any number of monitored resources, and each monitored resource can be a member of any number of groups.Groups can be nested in parent-child hierarchies. The parentName field identifies an optional parent for each group. If a group has a parent, then the only monitored resources available to be matched by the group's filter are the resources contained in the parent group. In other words, a group contains the monitored resources that match its filter and the filters of all the group's ancestors. A group without a parent can contain any monitored resource.For example, consider an infrastructure running a set of instances with two user-defined tags: "environment" and "role". A parent group has a filter, environment="production". A child of that parent group has a filter, role="transcoder". The parent group contains all instances in the production environment, regardless of their roles. The child group contains instances that have the transcoder role and are in the production environment.The monitored resources contained in a group can change at any moment, depending on what resources exist and what filters are associated with the group and its ancestors.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.groups.members.list
Lists the monitored resources that are members of a group.


```js
google_monitoring.projects.groups.members.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The group whose members are listed. The format is "projects/{project_id_or_number}/groups/{group_id}".
* pageToken (string) - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
* interval.startTime (string) - Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
* pageSize (integer) - A positive number that is the maximum number of results to return.
* interval.endTime (string) - Required. The end of the time interval.
* filter (string) - An optional list filter describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter:
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.metricDescriptors.list
Lists metric descriptors that match a filter. This method does not require a Stackdriver account.


```js
google_monitoring.projects.metricDescriptors.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The project on which to execute the request. The format is "projects/{project_id_or_number}".
* pageToken (string) - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
* pageSize (integer) - A positive number that is the maximum number of results to return.
* filter (string) - If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the filter specifies which metric descriptors are to be returned. For example, the following filter matches all custom metrics:
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.metricDescriptors.create
Creates a new metric descriptor. User-created metric descriptors define custom metrics.


```js
google_monitoring.projects.metricDescriptors.create({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The project on which to execute the request. The format is "projects/{project_id_or_number}".
* body (object) - Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.monitoredResourceDescriptors.list
Lists monitored resource descriptors that match a filter. This method does not require a Stackdriver account.


```js
google_monitoring.projects.monitoredResourceDescriptors.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The project on which to execute the request. The format is "projects/{project_id_or_number}".
* pageToken (string) - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
* pageSize (integer) - A positive number that is the maximum number of results to return.
* filter (string) - An optional filter describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following filter returns only Google Compute Engine descriptors that have an id label:
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.timeSeries.list
Lists time series that match a filter. This method does not require a Stackdriver account.


```js
google_monitoring.projects.timeSeries.list({
  "name": ""
}, context)
```

#### Parameters
* aggregation.alignmentPeriod (string) - The alignment period for per-time series alignment. If present, alignmentPeriod must be at least 60 seconds. After per-time series alignment, each time series will contain data points only on the period boundaries. If perSeriesAligner is not specified or equals ALIGN_NONE, then this field is ignored. If perSeriesAligner is specified and does not equal ALIGN_NONE, then this field must be defined; otherwise an error is returned.
* aggregation.crossSeriesReducer (string) - The approach to be used to combine time series. Not all reducer functions may be applied to all time series, depending on the metric type and the value type of the original time series. Reduction may change the metric type of value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
* aggregation.groupByFields (array) - The set of fields to preserve when crossSeriesReducer is specified. The groupByFields determine how the time series are partitioned into subsets prior to applying the aggregation function. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The crossSeriesReducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in groupByFields are aggregated away. If groupByFields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If crossSeriesReducer is not defined, this field is ignored.
* aggregation.perSeriesAligner (string) - The approach to be used to align individual time series. Not all alignment functions may be applied to all time series, depending on the metric type and value type of the original time series. Alignment may change the metric type or the value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
* filter (string) - A monitoring filter that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example:
* interval.endTime (string) - Required. The end of the time interval.
* interval.startTime (string) - Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
* name (string) **required** - The project on which to execute the request. The format is "projects/{project_id_or_number}".
* orderBy (string) - Specifies the order in which the points of the time series should be returned. By default, results are not ordered. Currently, this field must be left blank.
* pageSize (integer) - A positive number that is the maximum number of results to return. When view field sets to FULL, it limits the number of Points server will return; if view field is HEADERS, it limits the number of TimeSeries server will return.
* pageToken (string) - If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
* secondaryAggregation.alignmentPeriod (string) - The alignment period for per-time series alignment. If present, alignmentPeriod must be at least 60 seconds. After per-time series alignment, each time series will contain data points only on the period boundaries. If perSeriesAligner is not specified or equals ALIGN_NONE, then this field is ignored. If perSeriesAligner is specified and does not equal ALIGN_NONE, then this field must be defined; otherwise an error is returned.
* secondaryAggregation.crossSeriesReducer (string) - The approach to be used to combine time series. Not all reducer functions may be applied to all time series, depending on the metric type and the value type of the original time series. Reduction may change the metric type of value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
* secondaryAggregation.groupByFields (array) - The set of fields to preserve when crossSeriesReducer is specified. The groupByFields determine how the time series are partitioned into subsets prior to applying the aggregation function. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The crossSeriesReducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in groupByFields are aggregated away. If groupByFields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If crossSeriesReducer is not defined, this field is ignored.
* secondaryAggregation.perSeriesAligner (string) - The approach to be used to align individual time series. Not all alignment functions may be applied to all time series, depending on the metric type and value type of the original time series. Alignment may change the metric type or the value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
* view (string) - Specifies which information is returned about the time series.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.timeSeries.create
Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.


```js
google_monitoring.projects.timeSeries.create({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The project on which to execute the request. The format is "projects/{project_id_or_number}".
* body (object) - The CreateTimeSeries request.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

