# @datafire/google_monitoring

Client library for Cloud Monitoring API

## Installation and Usage
```bash
npm install --save @datafire/google_monitoring
```
```js
let google_monitoring = require('@datafire/google_monitoring').create({
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

Manages your Cloud Monitoring data and configurations. Most projects must be associated with a Workspace, with a few exceptions as noted on the individual method pages. The table entries below are presented in alphabetical order, not in order of common use. For explanations of the concepts found in the table entries, read the Cloud Monitoring documentation.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_monitoring.oauthCallback({
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
google_monitoring.oauthRefresh(null, context)
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

### monitoring.uptimeCheckIps.list
Returns the list of IP addresses that checkers run from


```js
google_monitoring.monitoring.uptimeCheckIps.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned. NOTE: this field is not yet implemented
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. NOTE: this field is not yet implemented
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
* output [ListUptimeCheckIpsResponse](#listuptimecheckipsresponse)

### monitoring.services.serviceLevelObjectives.delete
Delete the given ServiceLevelObjective.


```js
google_monitoring.monitoring.services.serviceLevelObjectives.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the ServiceLevelObjective to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] 
  * force `boolean`: If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). If false, channels that are still referenced by an existing alerting policy will fail to be deleted in a delete operation.
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

### monitoring.services.serviceLevelObjectives.get
Get a ServiceLevelObjective by name.


```js
google_monitoring.monitoring.services.serviceLevelObjectives.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the ServiceLevelObjective to get. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] 
  * view `string` (values: VIEW_UNSPECIFIED, FULL, EXPLICIT): View of the ServiceLevelObjective to return. If DEFAULT, return the ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
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
* output [ServiceLevelObjective](#servicelevelobjective)

### monitoring.services.serviceLevelObjectives.patch
Update the given ServiceLevelObjective.


```js
google_monitoring.monitoring.services.serviceLevelObjectives.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] 
  * updateMask `string`: A set of field paths defining which fields to use for the update.
  * body [ServiceLevelObjective](#servicelevelobjective)
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
* output [ServiceLevelObjective](#servicelevelobjective)

### monitoring.projects.groups.update
Updates an existing group. You can change any group attributes except name.


```js
google_monitoring.monitoring.projects.groups.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically.
  * validateOnly `boolean`: If true, validate this request but do not update the existing group.
  * body [Group](#group)
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
* output [Group](#group)

### monitoring.projects.alertPolicies.list
Lists the existing alerting policies for the workspace.


```js
google_monitoring.monitoring.projects.alertPolicies.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project whose alert policies are to be listed. The format is: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the GetAlertPolicy operation, instead.
  * filter `string`: If provided, this field specifies the criteria that must be met by alert policies to be included in the response.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
  * orderBy `string`: A comma-separated list of fields by which to sort the result. Supports the same set of field references as the filter field. Entries can be prefixed with a minus sign to sort by the field in descending order.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
  * pageSize `integer`: The maximum number of results to return in a single response.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
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
* output [ListAlertPoliciesResponse](#listalertpoliciesresponse)

### monitoring.projects.alertPolicies.create
Creates a new alerting policy.


```js
google_monitoring.monitoring.projects.alertPolicies.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project in which to create the alerting policy. The format is: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a workspace, otherwise INVALID_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT_POLICY_ID], identifying the policy in the container.
  * body [AlertPolicy](#alertpolicy)
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
* output [AlertPolicy](#alertpolicy)

### monitoring.projects.collectdTimeSeries.create
Stackdriver Monitoring Agent only: Creates a new time series.This method is only for use by the Stackdriver Monitoring Agent. Use projects.timeSeries.create instead.


```js
google_monitoring.monitoring.projects.collectdTimeSeries.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The project in which to create the time series. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * body [CreateCollectdTimeSeriesRequest](#createcollectdtimeseriesrequest)
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
* output [CreateCollectdTimeSeriesResponse](#createcollectdtimeseriesresponse)

### monitoring.projects.groups.list
Lists the existing groups.


```js
google_monitoring.monitoring.projects.groups.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project whose groups are to be listed. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * ancestorsOfGroup `string`: A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.
  * childrenOfGroup `string`: A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns groups whose parent_name field contains the group name. If no groups have this parent, the results are empty.
  * descendantsOfGroup `string`: A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns the descendants of the specified group. This is a superset of the results returned by the children_of_group filter, and includes children-of-children, and so forth.
  * pageSize `integer`: A positive number that is the maximum number of results to return.
  * pageToken `string`: If this field is not empty then it must contain the next_page_token value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
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
* output [ListGroupsResponse](#listgroupsresponse)

### monitoring.projects.groups.create
Creates a new group.


```js
google_monitoring.monitoring.projects.groups.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project in which to create the group. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * validateOnly `boolean`: If true, validate this request but do not create the group.
  * body [Group](#group)
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
* output [Group](#group)

### monitoring.projects.groups.members.list
Lists the monitored resources that are members of a group.


```js
google_monitoring.monitoring.projects.groups.members.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The group whose members are listed. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] 
  * filter `string`: An optional list filter (https://cloud.google.com/monitoring/api/learn_more#filtering) describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter: `resource.type = "gce_instance"` 
  * interval.endTime `string`: Required. The end of the time interval.
  * interval.startTime `string`: Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
  * pageSize `integer`: A positive number that is the maximum number of results to return.
  * pageToken `string`: If this field is not empty then it must contain the next_page_token value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
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
* output [ListGroupMembersResponse](#listgroupmembersresponse)

### monitoring.projects.metricDescriptors.list
Lists metric descriptors that match a filter. This method does not require a Workspace.


```js
google_monitoring.monitoring.projects.metricDescriptors.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * filter `string`: If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the filter (https://cloud.google.com/monitoring/api/v3/filters) specifies which metric descriptors are to be returned. For example, the following filter matches all custom metrics (https://cloud.google.com/monitoring/custom-metrics): metric.type = starts_with("custom.googleapis.com/") 
  * pageSize `integer`: A positive number that is the maximum number of results to return.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
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
* output [ListMetricDescriptorsResponse](#listmetricdescriptorsresponse)

### monitoring.projects.metricDescriptors.create
Creates a new metric descriptor. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics).


```js
google_monitoring.monitoring.projects.metricDescriptors.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * body [MetricDescriptor](#metricdescriptor)
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
* output [MetricDescriptor](#metricdescriptor)

### monitoring.projects.monitoredResourceDescriptors.list
Lists monitored resource descriptors that match a filter. This method does not require a Workspace.


```js
google_monitoring.monitoring.projects.monitoredResourceDescriptors.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * filter `string`: An optional filter (https://cloud.google.com/monitoring/api/v3/filters) describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following filter returns only Google Compute Engine descriptors that have an id label: resource.type = starts_with("gce_") AND resource.label:id 
  * pageSize `integer`: A positive number that is the maximum number of results to return.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
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
* output [ListMonitoredResourceDescriptorsResponse](#listmonitoredresourcedescriptorsresponse)

### monitoring.projects.notificationChannelDescriptors.list
Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.


```js
google_monitoring.monitoring.projects.notificationChannelDescriptors.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The REST resource name of the parent from which to retrieve the notification channel descriptors. The expected syntax is: projects/[PROJECT_ID_OR_NUMBER] Note that this names the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor operation, instead.
  * pageSize `integer`: The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service.
  * pageToken `string`: If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results.
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
* output [ListNotificationChannelDescriptorsResponse](#listnotificationchanneldescriptorsresponse)

### monitoring.projects.notificationChannels.list
Lists the notification channels that have been created for the project.


```js
google_monitoring.monitoring.projects.notificationChannels.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] This names the container in which to look for the notification channels; it does not name a specific channel. To query a specific channel by REST resource name, use the GetNotificationChannel operation.
  * filter `string`: If provided, this field specifies the criteria that must be met by notification channels to be included in the response.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
  * orderBy `string`: A comma-separated list of fields by which to sort the result. Supports the same set of fields as in filter. Entries can be prefixed with a minus sign to sort in descending rather than ascending order.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
  * pageSize `integer`: The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service.
  * pageToken `string`: If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results.
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
* output [ListNotificationChannelsResponse](#listnotificationchannelsresponse)

### monitoring.projects.notificationChannels.create
Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.


```js
google_monitoring.monitoring.projects.notificationChannels.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] This names the container into which the channel will be written, this does not name the newly created channel. The resulting channel's name will have a normalized version of this field as a prefix, but will add /notificationChannels/[CHANNEL_ID] to identify the channel.
  * body [NotificationChannel](#notificationchannel)
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
* output [NotificationChannel](#notificationchannel)

### monitoring.projects.timeSeries.list
Lists time series that match a filter. This method does not require a Workspace.


```js
google_monitoring.monitoring.projects.timeSeries.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * aggregation.alignmentPeriod `string`: The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
  * aggregation.crossSeriesReducer `string` (values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05): The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
  * aggregation.groupByFields `array`: The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
  * aggregation.perSeriesAligner `string` (values: ALIGN_NONE, ALIGN_DELTA, ALIGN_RATE, ALIGN_INTERPOLATE, ALIGN_NEXT_OLDER, ALIGN_MIN, ALIGN_MAX, ALIGN_MEAN, ALIGN_COUNT, ALIGN_SUM, ALIGN_STDDEV, ALIGN_COUNT_TRUE, ALIGN_COUNT_FALSE, ALIGN_FRACTION_TRUE, ALIGN_PERCENTILE_99, ALIGN_PERCENTILE_95, ALIGN_PERCENTILE_50, ALIGN_PERCENTILE_05, ALIGN_PERCENT_CHANGE): An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
  * filter `string`: Required. A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.labels.instance_name = "my-instance-name" 
  * interval.endTime `string`: Required. The end of the time interval.
  * interval.startTime `string`: Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
  * orderBy `string`: Unsupported: must be left blank. The points in each time series are currently returned in reverse time order (most recent to oldest).
  * pageSize `integer`: A positive number that is the maximum number of results to return. If page_size is empty or more than 100,000 results, the effective page_size is 100,000 results. If view is set to FULL, this is the maximum number of Points returned. If view is set to HEADERS, this is the maximum number of TimeSeries returned.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
  * secondaryAggregation.alignmentPeriod `string`: The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
  * secondaryAggregation.crossSeriesReducer `string` (values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05): The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
  * secondaryAggregation.groupByFields `array`: The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
  * secondaryAggregation.perSeriesAligner `string` (values: ALIGN_NONE, ALIGN_DELTA, ALIGN_RATE, ALIGN_INTERPOLATE, ALIGN_NEXT_OLDER, ALIGN_MIN, ALIGN_MAX, ALIGN_MEAN, ALIGN_COUNT, ALIGN_SUM, ALIGN_STDDEV, ALIGN_COUNT_TRUE, ALIGN_COUNT_FALSE, ALIGN_FRACTION_TRUE, ALIGN_PERCENTILE_99, ALIGN_PERCENTILE_95, ALIGN_PERCENTILE_50, ALIGN_PERCENTILE_05, ALIGN_PERCENT_CHANGE): An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
  * view `string` (values: FULL, HEADERS): Required. Specifies which information is returned about the time series.
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
* output [ListTimeSeriesResponse](#listtimeseriesresponse)

### monitoring.projects.timeSeries.create
Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.


```js
google_monitoring.monitoring.projects.timeSeries.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * body [CreateTimeSeriesRequest](#createtimeseriesrequest)
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

### monitoring.projects.timeSeries.query
Queries time series using Monitoring Query Language. This method does not require a Workspace.


```js
google_monitoring.monitoring.projects.timeSeries.query({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * body [QueryTimeSeriesRequest](#querytimeseriesrequest)
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
* output [QueryTimeSeriesResponse](#querytimeseriesresponse)

### monitoring.projects.notificationChannels.getVerificationCode
Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.


```js
google_monitoring.monitoring.projects.notificationChannels.getVerificationCode({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The notification channel for which a verification code is to be generated and retrieved. This must name a channel that is already verified; if the specified channel is not verified, the request will fail.
  * body [GetNotificationChannelVerificationCodeRequest](#getnotificationchannelverificationcoderequest)
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
* output [GetNotificationChannelVerificationCodeResponse](#getnotificationchannelverificationcoderesponse)

### monitoring.projects.notificationChannels.sendVerificationCode
Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.


```js
google_monitoring.monitoring.projects.notificationChannels.sendVerificationCode({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The notification channel to which to send a verification code.
  * body [SendNotificationChannelVerificationCodeRequest](#sendnotificationchannelverificationcoderequest)
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

### monitoring.projects.notificationChannels.verify
Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.


```js
google_monitoring.monitoring.projects.notificationChannels.verify({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The notification channel to verify.
  * body [VerifyNotificationChannelRequest](#verifynotificationchannelrequest)
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
* output [NotificationChannel](#notificationchannel)

### monitoring.services.serviceLevelObjectives.list
List the ServiceLevelObjectives for the given Service.


```js
google_monitoring.monitoring.services.serviceLevelObjectives.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the parent containing the listed SLOs, either a project or a Monitoring Workspace. The formats are: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] workspaces/[HOST_PROJECT_ID_OR_NUMBER]/services/- 
  * filter `string`: A filter specifying what ServiceLevelObjectives to return.
  * pageSize `integer`: A non-negative number that is the maximum number of results to return. When 0, use default page size.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
  * view `string` (values: VIEW_UNSPECIFIED, FULL, EXPLICIT): View of the ServiceLevelObjectives to return. If DEFAULT, return each ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
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
* output [ListServiceLevelObjectivesResponse](#listservicelevelobjectivesresponse)

### monitoring.services.serviceLevelObjectives.create
Create a ServiceLevelObjective for the given Service.


```js
google_monitoring.monitoring.services.serviceLevelObjectives.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the parent Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] 
  * serviceLevelObjectiveId `string`: Optional. The ServiceLevelObjective id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. Must match the pattern [a-z0-9\-]+
  * body [ServiceLevelObjective](#servicelevelobjective)
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
* output [ServiceLevelObjective](#servicelevelobjective)

### monitoring.services.list
List Services for this workspace.


```js
google_monitoring.monitoring.services.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the parent containing the listed services, either a project or a Monitoring Workspace. The formats are: projects/[PROJECT_ID_OR_NUMBER] workspaces/[HOST_PROJECT_ID_OR_NUMBER] 
  * filter `string`: A filter specifying what Services to return. The filter currently supports the following fields: - `identifier_case` - `app_engine.module_id` - `cloud_endpoints.service` (reserved for future use) - `mesh_istio.mesh_uid` - `mesh_istio.service_namespace` - `mesh_istio.service_name` - `cluster_istio.location` (deprecated) - `cluster_istio.cluster_name` (deprecated) - `cluster_istio.service_namespace` (deprecated) - `cluster_istio.service_name` (deprecated) identifier_case refers to which option in the identifier oneof is populated. For example, the filter identifier_case = "CUSTOM" would match all services with a value for the custom field. Valid options are "CUSTOM", "APP_ENGINE", "MESH_ISTIO", plus "CLUSTER_ISTIO" (deprecated) and "CLOUD_ENDPOINTS" (reserved for future use).
  * pageSize `integer`: A non-negative number that is the maximum number of results to return. When 0, use default page size.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
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
* output [ListServicesResponse](#listservicesresponse)

### monitoring.services.create
Create a Service.


```js
google_monitoring.monitoring.services.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the parent workspace. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * serviceId `string`: Optional. The Service id to use for this Service. If omitted, an id will be generated instead. Must match the pattern [a-z0-9\-]+
  * body [Service](#service)
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
* output [Service](#service)

### monitoring.projects.uptimeCheckConfigs.list
Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).


```js
google_monitoring.monitoring.projects.uptimeCheckConfigs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project whose Uptime check configurations are listed. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * pageSize `integer`: The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
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
* output [ListUptimeCheckConfigsResponse](#listuptimecheckconfigsresponse)

### monitoring.projects.uptimeCheckConfigs.create
Creates a new Uptime check configuration.


```js
google_monitoring.monitoring.projects.uptimeCheckConfigs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project in which to create the Uptime check. The format is: projects/[PROJECT_ID_OR_NUMBER] 
  * body [UptimeCheckConfig](#uptimecheckconfig)
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
* output [UptimeCheckConfig](#uptimecheckconfig)



## Definitions

### Aggregation
* Aggregation `object`: Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation).
  * alignmentPeriod `string`: The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
  * crossSeriesReducer `string` (values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05): The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
  * groupByFields `array`: The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
    * items `string`
  * perSeriesAligner `string` (values: ALIGN_NONE, ALIGN_DELTA, ALIGN_RATE, ALIGN_INTERPOLATE, ALIGN_NEXT_OLDER, ALIGN_MIN, ALIGN_MAX, ALIGN_MEAN, ALIGN_COUNT, ALIGN_SUM, ALIGN_STDDEV, ALIGN_COUNT_TRUE, ALIGN_COUNT_FALSE, ALIGN_FRACTION_TRUE, ALIGN_PERCENTILE_99, ALIGN_PERCENTILE_95, ALIGN_PERCENTILE_50, ALIGN_PERCENTILE_05, ALIGN_PERCENT_CHANGE): An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.

### AlertPolicy
* AlertPolicy `object`: A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/).
  * combiner `string` (values: COMBINE_UNSPECIFIED, AND, OR, AND_WITH_MATCHING_RESOURCE): How to combine the results of multiple conditions to determine if an incident should be opened. If condition_time_series_query_language is present, this must be COMBINE_UNSPECIFIED.
  * conditions `array`: A list of conditions for the policy. The conditions are combined by AND or OR according to the combiner field. If the combined conditions evaluate to true, then an incident is created. A policy can have from one to six conditions. If condition_time_series_query_language is present, it must be the only condition.
    * items [Condition](#condition)
  * creationRecord [MutationRecord](#mutationrecord)
  * displayName `string`: A short name or phrase used to identify the policy in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple policies in the same project. The name is limited to 512 Unicode characters.
  * documentation [Documentation](#documentation)
  * enabled `boolean`: Whether or not the policy is enabled. On write, the default interpretation if unset is that the policy is enabled. On read, clients should not make any assumption about the state if it has not been populated. The field should always be populated on List and Get operations, unless a field projection has been specified that strips it out.
  * mutationRecord [MutationRecord](#mutationrecord)
  * name `string`: Required if the policy exists. The resource name for this policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Stackdriver Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request.
  * notificationChannels `array`: Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. Each element of this array corresponds to the name field in each of the NotificationChannel objects that are returned from the ListNotificationChannels method. The format of the entries in this field is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] 
    * items `string`
  * userLabels `object`: User-supplied key/value data to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  * validity [Status](#status)

### AppEngine
* AppEngine `object`: App Engine service. Learn more at https://cloud.google.com/appengine.
  * moduleId `string`: The ID of the App Engine module underlying this service. Corresponds to the module_id resource label in the gae_app monitored resource: https://cloud.google.com/monitoring/api/resources#tag_gae_app

### AvailabilityCriteria
* AvailabilityCriteria `object`: Future parameters for the availability SLI.

### BasicAuthentication
* BasicAuthentication `object`: The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks.
  * password `string`: The password to use when authenticating with the HTTP server.
  * username `string`: The username to use when authenticating with the HTTP server.

### BasicSli
* BasicSli `object`: An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.
  * availability [AvailabilityCriteria](#availabilitycriteria)
  * latency [LatencyCriteria](#latencycriteria)
  * location `array`: OPTIONAL: The set of locations to which this SLI is relevant. Telemetry from other locations will not be used to calculate performance for this SLI. If omitted, this SLI applies to all locations in which the Service has activity. For service types that don't support breaking down by location, setting this field will result in an error.
    * items `string`
  * method `array`: OPTIONAL: The set of RPCs to which this SLI is relevant. Telemetry from other methods will not be used to calculate performance for this SLI. If omitted, this SLI applies to all the Service's methods. For service types that don't support breaking down by method, setting this field will result in an error.
    * items `string`
  * version `array`: OPTIONAL: The set of API versions to which this SLI is relevant. Telemetry from other API versions will not be used to calculate performance for this SLI. If omitted, this SLI applies to all API versions. For service types that don't support breaking down by version, setting this field will result in an error.
    * items `string`

### BucketOptions
* BucketOptions `object`: BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite.
  * explicitBuckets [Explicit](#explicit)
  * exponentialBuckets [Exponential](#exponential)
  * linearBuckets [Linear](#linear)

### CloudEndpoints
* CloudEndpoints `object`: Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints.
  * service `string`: The name of the Cloud Endpoints service underlying this service. Corresponds to the service resource label in the api monitored resource: https://cloud.google.com/monitoring/api/resources#tag_api

### ClusterIstio
* ClusterIstio `object`: Istio service scoped to a single Kubernetes cluster. Learn more at http://istio.io. Clusters running OSS Istio will have their services ingested as this type.
  * clusterName `string`: The name of the Kubernetes cluster in which this Istio service is defined. Corresponds to the cluster_name resource label in k8s_cluster resources.
  * location `string`: The location of the Kubernetes cluster in which this Istio service is defined. Corresponds to the location resource label in k8s_cluster resources.
  * serviceName `string`: The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics.
  * serviceNamespace `string`: The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics.

### CollectdPayload
* CollectdPayload `object`: A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information.
  * endTime `string`: The end time of the interval.
  * metadata `object`: The measurement metadata. Example: "process_id" -> 12345
  * plugin `string`: The name of the plugin. Example: "disk".
  * pluginInstance `string`: The instance name of the plugin Example: "hdcl".
  * startTime `string`: The start time of the interval.
  * type `string`: The measurement type. Example: "memory".
  * typeInstance `string`: The measurement type instance. Example: "used".
  * values `array`: The measured values during this time interval. Each value must have a different data_source_name.
    * items [CollectdValue](#collectdvalue)

### CollectdPayloadError
* CollectdPayloadError `object`: Describes the error status for payloads that were not written.
  * error [Status](#status)
  * index `integer`: The zero-based index in CreateCollectdTimeSeriesRequest.collectd_payloads.
  * valueErrors `array`: Records the error status for values that were not written due to an error.Failed payloads for which nothing is written will not include partial value errors.
    * items [CollectdValueError](#collectdvalueerror)

### CollectdValue
* CollectdValue `object`: A single data point from a collectd-based plugin.
  * dataSourceName `string`: The data source for the collectd value. For example, there are two data sources for network measurements: "rx" and "tx".
  * dataSourceType `string` (values: UNSPECIFIED_DATA_SOURCE_TYPE, GAUGE, COUNTER, DERIVE, ABSOLUTE): The type of measurement.
  * value [TypedValue](#typedvalue)

### CollectdValueError
* CollectdValueError `object`: Describes the error status for values that were not written.
  * error [Status](#status)
  * index `integer`: The zero-based index in CollectdPayload.values within the parent CreateCollectdTimeSeriesRequest.collectd_payloads.

### Condition
* Condition `object`: A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
  * conditionAbsent [MetricAbsence](#metricabsence)
  * conditionMonitoringQueryLanguage [MonitoringQueryLanguageCondition](#monitoringquerylanguagecondition)
  * conditionThreshold [MetricThreshold](#metricthreshold)
  * displayName `string`: A short name or phrase used to identify the condition in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple conditions in the same policy.
  * name `string`: Required if the condition exists. The unique resource name for this condition. Its format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID] [CONDITION_ID] is assigned by Stackdriver Monitoring when the condition is created as part of a new or updated alerting policy.When calling the alertPolicies.create method, do not include the name field in the conditions of the requested alerting policy. Stackdriver Monitoring creates the condition identifiers and includes them in the new policy.When calling the alertPolicies.update method to update a policy, including a condition name causes the existing condition to be updated. Conditions without names are added to the updated policy. Existing conditions are deleted if they are not updated.Best practice is to preserve [CONDITION_ID] if you make only small changes, such as those to condition thresholds, durations, or trigger values. Otherwise, treat the change as a new condition and let the existing condition be deleted.

### ContentMatcher
* ContentMatcher `object`: Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching.
  * content `string`: String or regex content to match. Maximum 1024 bytes. An empty content string indicates no content matching is to be performed.
  * matcher `string` (values: CONTENT_MATCHER_OPTION_UNSPECIFIED, CONTAINS_STRING, NOT_CONTAINS_STRING, MATCHES_REGEX, NOT_MATCHES_REGEX): The type of content matcher that will be applied to the server output, compared to the content string when the check is run.

### CreateCollectdTimeSeriesRequest
* CreateCollectdTimeSeriesRequest `object`: The CreateCollectdTimeSeries request.
  * collectdPayloads `array`: The collectd payloads representing the time series data. You must not include more than a single point for each time series, so no two payloads can have the same values for all of the fields plugin, plugin_instance, type, and type_instance.
    * items [CollectdPayload](#collectdpayload)
  * collectdVersion `string`: The version of collectd that collected the data. Example: "5.3.0-192.el6".
  * resource [MonitoredResource](#monitoredresource)

### CreateCollectdTimeSeriesResponse
* CreateCollectdTimeSeriesResponse `object`: The CreateCollectdTimeSeries response.
  * payloadErrors `array`: Records the error status for points that were not written due to an error in the request.Failed requests for which nothing is written will return an error response instead. Requests where data points were rejected by the backend will set summary instead.
    * items [CollectdPayloadError](#collectdpayloaderror)
  * summary [CreateTimeSeriesSummary](#createtimeseriessummary)

### CreateTimeSeriesRequest
* CreateTimeSeriesRequest `object`: The CreateTimeSeries request.
  * timeSeries `array`: Required. The new data to be added to a list of time series. Adds at most one data point to each of several time series. The new data point must be more recent than any other point in its time series. Each TimeSeries value must fully specify a unique time series by supplying all label values for the metric and the monitored resource.The maximum number of TimeSeries objects per Create request is 200.
    * items [TimeSeries](#timeseries)

### CreateTimeSeriesSummary
* CreateTimeSeriesSummary `object`: Summary of the result of a failed request to write data to a time series.
  * errors `array`: The number of points that failed to be written. Order is not guaranteed.
    * items [Error](#error)
  * successPointCount `integer`: The number of points that were successfully written.
  * totalPointCount `integer`: The number of points in the request.

### Custom
* Custom `object`: Custom view of service telemetry. Currently a place-holder pending final design.

### Distribution
* Distribution `object`: Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless.
  * bucketCounts `array`: Required in the Cloud Monitoring API v3. The values for each bucket specified in bucket_options. The sum of the values in bucketCounts must equal the value in the count field of the Distribution object. The order of the bucket counts follows the numbering schemes described for the three bucket types. The underflow bucket has number 0; the finite buckets, if any, have numbers 1 through N-2; and the overflow bucket has number N-1. The size of bucket_counts must not be greater than N. If the size is less than N, then the remaining buckets are assigned values of zero.
    * items `string`
  * bucketOptions [BucketOptions](#bucketoptions)
  * count `string`: The number of values in the population. Must be non-negative. This value must equal the sum of the values in bucket_counts if a histogram is provided.
  * exemplars `array`: Must be in increasing order of value field.
    * items [Exemplar](#exemplar)
  * mean `number`: The arithmetic mean of the values in the population. If count is zero then this field must be zero.
  * range [Range](#range)
  * sumOfSquaredDeviation `number`: The sum of squared deviations from the mean of the values in the population. For values x_i this is: Sum[i=1..n]((x_i - mean)^2) Knuth, "The Art of Computer Programming", Vol. 2, page 232, 3rd edition describes Welford's method for accumulating this sum in one pass.If count is zero then this field must be zero.

### DistributionCut
* DistributionCut `object`: A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the count of values x in the Distribution such that range.min <= x < range.max.
  * distributionFilter `string`: A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries aggregating values. Must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE.
  * range [GoogleMonitoringV3Range](#googlemonitoringv3range)

### Documentation
* Documentation `object`: A content string and a MIME type that describes the content string's format.
  * content `string`: The text of the documentation, interpreted according to mime_type. The content may not exceed 8,192 Unicode characters and may not exceed more than 10,240 bytes when encoded in UTF-8 format, whichever is smaller.
  * mimeType `string`: The format of the content field. Presently, only the value "text/markdown" is supported. See Markdown (https://en.wikipedia.org/wiki/Markdown) for more information.

### DroppedLabels
* DroppedLabels `object`: A set of (label, value) pairs that were removed from a Distribution time series during aggregation and then added as an attachment to a Distribution.Exemplar.The full label set for the exemplars is constructed by using the dropped pairs in combination with the label values that remain on the aggregated Distribution time series. The constructed full label set can be used to identify the specific entity, such as the instance or job, which might be contributing to a long-tail. However, with dropped labels, the storage requirements are reduced because only the aggregated distribution values for a large group of time series are stored.Note that there are no guarantees on ordering of the labels from exemplar-to-exemplar and from distribution-to-distribution in the same stream, and there may be duplicates. It is up to clients to resolve any ambiguities.
  * label `object`: Map from label to its value, for all labels dropped in any aggregation.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for Empty is empty JSON object {}.

### Error
* Error `object`: Detailed information about an error category.
  * pointCount `integer`: The number of points that couldn't be written because of status.
  * status [Status](#status)

### Exemplar
* Exemplar `object`: Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc.
  * attachments `array`: Contextual information about the example value. Examples are:Trace: type.googleapis.com/google.monitoring.v3.SpanContextLiteral string: type.googleapis.com/google.protobuf.StringValueLabels dropped during aggregation: type.googleapis.com/google.monitoring.v3.DroppedLabelsThere may be only a single attachment of any given message type in a single exemplar, and this is enforced by the system.
    * items `object`
  * timestamp `string`: The observation (sampling) time of the above value.
  * value `number`: Value of the exemplar point. This value determines to which bucket the exemplar belongs.

### Explicit
* Explicit `object`: Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets.
  * bounds `array`: The values must be monotonically increasing.
    * items `number`

### Exponential
* Exponential `object`: Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i). Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)).
  * growthFactor `number`: Must be greater than 1.
  * numFiniteBuckets `integer`: Must be greater than 0.
  * scale `number`: Must be greater than 0.

### Field
* Field `object`: A single field of a message type.
  * cardinality `string` (values: CARDINALITY_UNKNOWN, CARDINALITY_OPTIONAL, CARDINALITY_REQUIRED, CARDINALITY_REPEATED): The field cardinality.
  * defaultValue `string`: The string value of the default value of this field. Proto2 syntax only.
  * jsonName `string`: The field JSON name.
  * kind `string` (values: TYPE_UNKNOWN, TYPE_DOUBLE, TYPE_FLOAT, TYPE_INT64, TYPE_UINT64, TYPE_INT32, TYPE_FIXED64, TYPE_FIXED32, TYPE_BOOL, TYPE_STRING, TYPE_GROUP, TYPE_MESSAGE, TYPE_BYTES, TYPE_UINT32, TYPE_ENUM, TYPE_SFIXED32, TYPE_SFIXED64, TYPE_SINT32, TYPE_SINT64): The field type.
  * name `string`: The field name.
  * number `integer`: The field number.
  * oneofIndex `integer`: The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
  * options `array`: The protocol buffer options.
    * items [Option](#option)
  * packed `boolean`: Whether to use alternative packed wire representation.
  * typeUrl `string`: The field type URL, without the scheme, for message or enumeration types. Example: "type.googleapis.com/google.protobuf.Timestamp".

### GetNotificationChannelVerificationCodeRequest
* GetNotificationChannelVerificationCodeRequest `object`: The GetNotificationChannelVerificationCode request.
  * expireTime `string`: The desired expiration time. If specified, the API will guarantee that the returned code will not be valid after the specified timestamp; however, the API cannot guarantee that the returned code will be valid for at least as long as the requested time (the API puts an upper bound on the amount of time for which a code may be valid). If omitted, a default expiration will be used, which may be less than the max permissible expiration (so specifying an expiration may extend the code's lifetime over omitting an expiration, even though the API does impose an upper limit on the maximum expiration that is permitted).

### GetNotificationChannelVerificationCodeResponse
* GetNotificationChannelVerificationCodeResponse `object`: The GetNotificationChannelVerificationCode request.
  * code `string`: The verification code, which may be used to verify other channels that have an equivalent identity (i.e. other channels of the same type with the same fingerprint such as other email channels with the same email address or other sms channels with the same number).
  * expireTime `string`: The expiration time associated with the code that was returned. If an expiration was provided in the request, this is the minimum of the requested expiration in the request and the max permitted expiration.

### GoogleMonitoringV3Range
* GoogleMonitoringV3Range `object`: Range of numerical values, inclusive of min and exclusive of max. If the open range "< range.max" is desired, set range.min = -infinity. If the open range ">= range.min" is desired, set range.max = infinity.
  * max `number`: Range maximum.
  * min `number`: Range minimum.

### Group
* Group `object`: The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group's filter matches an available monitored resource, then that resource is a member of that group. Groups can contain any number of monitored resources, and each monitored resource can be a member of any number of groups.Groups can be nested in parent-child hierarchies. The parentName field identifies an optional parent for each group. If a group has a parent, then the only monitored resources available to be matched by the group's filter are the resources contained in the parent group. In other words, a group contains the monitored resources that match its filter and the filters of all the group's ancestors. A group without a parent can contain any monitored resource.For example, consider an infrastructure running a set of instances with two user-defined tags: "environment" and "role". A parent group has a filter, environment="production". A child of that parent group has a filter, role="transcoder". The parent group contains all instances in the production environment, regardless of their roles. The child group contains instances that have the transcoder role and are in the production environment.The monitored resources contained in a group can change at any moment, depending on what resources exist and what filters are associated with the group and its ancestors.
  * displayName `string`: A user-assigned name for this group, used only for display purposes.
  * filter `string`: The filter used to determine which monitored resources belong to this group.
  * isCluster `boolean`: If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters.
  * name `string`: Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically.
  * parentName `string`: The name of the group's parent, if it has one. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] For groups with no parent, parent_name is the empty string, "".

### HttpCheck
* HttpCheck `object`: Information involved in an HTTP/HTTPS Uptime check request.
  * authInfo [BasicAuthentication](#basicauthentication)
  * body `string`: The request body associated with the HTTP POST request. If content_type is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the request_method is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note: As with all bytes fields, JSON representations are base64 encoded. e.g.: "foo=bar" in URL-encoded form is "foo%3Dbar" and in base64 encoding is "Zm9vJTI1M0RiYXI=".
  * contentType `string` (values: TYPE_UNSPECIFIED, URL_ENCODED): The content type header to use for the check. The following configurations result in errors: 1. Content type is specified in both the headers field and the content_type field. 2. Request method is GET and content_type is not TYPE_UNSPECIFIED 3. Request method is POST and content_type is TYPE_UNSPECIFIED. 4. Request method is POST and a "Content-Type" header is provided via headers field. The content_type field should be used instead.
  * headers `object`: The list of headers to send as part of the Uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.
  * maskHeaders `boolean`: Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to true then the headers will be obscured with ******.
  * path `string`: Optional (defaults to "/"). The path to the page against which to run the check. Will be combined with the host (specified within the monitored_resource) and port to construct the full URL. If the provided path does not begin with "/", a "/" will be prepended automatically.
  * port `integer`: Optional (defaults to 80 when use_ssl is false, and 443 when use_ssl is true). The TCP port on the HTTP server against which to run the check. Will be combined with host (specified within the monitored_resource) and path to construct the full URL.
  * requestMethod `string` (values: METHOD_UNSPECIFIED, GET, POST): The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then request_method defaults to GET.
  * useSsl `boolean`: If true, use HTTPS instead of HTTP to run the check.
  * validateSsl `boolean`: Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where monitored_resource is set to uptime_url. If use_ssl is false, setting validate_ssl to true has no effect.

### InternalChecker
* InternalChecker `object`: An internal checker allows Uptime checks to run on private/internal GCP resources.
  * displayName `string`: The checker's human-readable name. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.
  * gcpZone `string`: The GCP zone the Uptime check should egress from. Only respected for internal Uptime checks, where internal_network is specified.
  * name `string`: A unique resource name for this InternalChecker. The format is: projects/[PROJECT_ID_OR_NUMBER]/internalCheckers/[INTERNAL_CHECKER_ID] [PROJECT_ID_OR_NUMBER] is the Stackdriver Workspace project for the Uptime check config associated with the internal checker.
  * network `string`: The GCP VPC network (https://cloud.google.com/vpc/docs/vpc) where the internal resource lives (ex: "default").
  * peerProjectId `string`: The GCP project ID where the internal checker lives. Not necessary the same as the Workspace project.
  * state `string` (values: UNSPECIFIED, CREATING, RUNNING): The current operational state of the internal checker.

### LabelDescriptor
* LabelDescriptor `object`: A description of a label.
  * description `string`: A human-readable description for the label.
  * key `string`: The key for this label. The key must meet the following criteria: Does not exceed 100 characters. Matches the following regular expression: [a-zA-Z][a-zA-Z0-9_]* The first character must be an upper- or lower-case letter. The remaining characters must be letters, digits, or underscores.
  * valueType `string` (values: STRING, BOOL, INT64): The type of data that can be assigned to the label.

### LabelValue
* LabelValue `object`: A label value.
  * boolValue `boolean`: A bool label value.
  * int64Value `string`: An int64 label value.
  * stringValue `string`: A string label value.

### LatencyCriteria
* LatencyCriteria `object`: Parameters for a latency threshold SLI.
  * threshold `string`: Good service is defined to be the count of requests made to this service that return in no more than threshold.

### Linear
* Linear `object`: Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i). Lower bound (1 <= i < N): offset + (width * (i - 1)).
  * numFiniteBuckets `integer`: Must be greater than 0.
  * offset `number`: Lower bound of the first bucket.
  * width `number`: Must be greater than 0.

### ListAlertPoliciesResponse
* ListAlertPoliciesResponse `object`: The protocol for the ListAlertPolicies response.
  * alertPolicies `array`: The returned alert policies.
    * items [AlertPolicy](#alertpolicy)
  * nextPageToken `string`: If there might be more results than were returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
  * totalSize `integer`: The total number of alert policies in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158

### ListGroupMembersResponse
* ListGroupMembersResponse `object`: The ListGroupMembers response.
  * members `array`: A set of monitored resources in the group.
    * items [MonitoredResource](#monitoredresource)
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
  * totalSize `integer`: The total number of elements matching this request.

### ListGroupsResponse
* ListGroupsResponse `object`: The ListGroups response.
  * group `array`: The groups that match the specified filters.
    * items [Group](#group)
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.

### ListMetricDescriptorsResponse
* ListMetricDescriptorsResponse `object`: The ListMetricDescriptors response.
  * metricDescriptors `array`: The metric descriptors that are available to the project and that match the value of filter, if present.
    * items [MetricDescriptor](#metricdescriptor)
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.

### ListMonitoredResourceDescriptorsResponse
* ListMonitoredResourceDescriptorsResponse `object`: The ListMonitoredResourceDescriptors response.
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
  * resourceDescriptors `array`: The monitored resource descriptors that are available to this project and that match filter, if present.
    * items [MonitoredResourceDescriptor](#monitoredresourcedescriptor)

### ListNotificationChannelDescriptorsResponse
* ListNotificationChannelDescriptorsResponse `object`: The ListNotificationChannelDescriptors response.
  * channelDescriptors `array`: The monitored resource descriptors supported for the specified project, optionally filtered.
    * items [NotificationChannelDescriptor](#notificationchanneldescriptor)
  * nextPageToken `string`: If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned.

### ListNotificationChannelsResponse
* ListNotificationChannelsResponse `object`: The ListNotificationChannels response.
  * nextPageToken `string`: If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned.
  * notificationChannels `array`: The notification channels defined for the specified project.
    * items [NotificationChannel](#notificationchannel)
  * totalSize `integer`: The total number of notification channels in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158

### ListServiceLevelObjectivesResponse
* ListServiceLevelObjectivesResponse `object`: The ListServiceLevelObjectives response.
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
  * serviceLevelObjectives `array`: The ServiceLevelObjectives matching the specified filter.
    * items [ServiceLevelObjective](#servicelevelobjective)

### ListServicesResponse
* ListServicesResponse `object`: The ListServices response.
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
  * services `array`: The Services matching the specified filter.
    * items [Service](#service)

### ListTimeSeriesResponse
* ListTimeSeriesResponse `object`: The ListTimeSeries response.
  * executionErrors `array`: Query execution errors that may have caused the time series data returned to be incomplete.
    * items [Status](#status)
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
  * timeSeries `array`: One or more time series that match the filter included in the request.
    * items [TimeSeries](#timeseries)
  * unit `string`: The unit in which all time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. If different time_series have different units (for example, because they come from different metric types, or a unit is absent), then unit will be "{not_a_unit}".

### ListUptimeCheckConfigsResponse
* ListUptimeCheckConfigsResponse `object`: The protocol for the ListUptimeCheckConfigs response.
  * nextPageToken `string`: This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field).
  * totalSize `integer`: The total number of Uptime check configurations for the project, irrespective of any pagination.
  * uptimeCheckConfigs `array`: The returned Uptime check configurations.
    * items [UptimeCheckConfig](#uptimecheckconfig)

### ListUptimeCheckIpsResponse
* ListUptimeCheckIpsResponse `object`: The protocol for the ListUptimeCheckIps response.
  * nextPageToken `string`: This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field). NOTE: this field is not yet implemented
  * uptimeCheckIps `array`: The returned list of IP addresses (including region and location) that the checkers run from.
    * items [UptimeCheckIp](#uptimecheckip)

### MeshIstio
* MeshIstio `object`: Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.
  * meshUid `string`: Identifier for the mesh in which this Istio service is defined. Corresponds to the mesh_uid metric label in Istio metrics.
  * serviceName `string`: The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics.
  * serviceNamespace `string`: The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics.

### Metric
* Metric `object`: A specific metric, identified by specifying values for all of the labels of a MetricDescriptor.
  * labels `object`: The set of label values that uniquely identify this metric. All labels listed in the MetricDescriptor must be assigned values.
  * type `string`: An existing metric type, see google.api.MetricDescriptor. For example, custom.googleapis.com/invoice/paid/amount.

### MetricAbsence
* MetricAbsence `object`: A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration.
  * aggregations `array`: Specifies the alignment of data points in individual time series as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resrouces). Multiple aggregations are applied in the order specified.This field is similar to the one in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list). It is advisable to use the ListTimeSeries method when debugging this field.
    * items [Aggregation](#aggregation)
  * duration `string`: The amount of time that a time series must fail to report new data to be considered failing. Currently, only values that are a multiple of a minute--e.g. 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. The Duration.nanos field is ignored.
  * filter `string`: A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length.
  * trigger [Trigger](#trigger)

### MetricDescriptor
* MetricDescriptor `object`: Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
  * description `string`: A detailed description of the metric, which can be used in documentation.
  * displayName `string`: A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
  * labels `array`: The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed.
    * items [LabelDescriptor](#labeldescriptor)
  * launchStage `string` (values: LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED): Optional. The launch stage of the metric definition.
  * metadata [MetricDescriptorMetadata](#metricdescriptormetadata)
  * metricKind `string` (values: METRIC_KIND_UNSPECIFIED, GAUGE, DELTA, CUMULATIVE): Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported.
  * monitoredResourceTypes `array`: Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here.
    * items `string`
  * name `string`: The resource name of the metric descriptor.
  * type `string`: The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" 
  * unit `string`: The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems may scale the values to be more easily displayed (so a value of 0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as 3.5MBy). However, if the unit is KBy, then the value of the metric is always in thousands of bytes, no matter how it may be displayed..If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (http://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/{email} or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k{watt}.h.The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, {request}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing { or }. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or {new-users}/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k{page_views}/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent").
  * valueType `string` (values: VALUE_TYPE_UNSPECIFIED, BOOL, INT64, DOUBLE, STRING, DISTRIBUTION, MONEY): Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported.

### MetricDescriptorMetadata
* MetricDescriptorMetadata `object`: Additional annotations that can be used to guide the usage of a metric.
  * ingestDelay `string`: The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors.
  * launchStage `string` (values: LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED): Deprecated. Must use the MetricDescriptor.launch_stage instead.
  * samplePeriod `string`: The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period.

### MetricRange
* MetricRange `object`: A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x < range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.
  * range [GoogleMonitoringV3Range](#googlemonitoringv3range)
  * timeSeries `string`: A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality.

### MetricThreshold
* MetricThreshold `object`: A condition type that compares a collection of time series against a threshold.
  * aggregations `array`: Specifies the alignment of data points in individual time series as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resrouces). Multiple aggregations are applied in the order specified.This field is similar to the one in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list). It is advisable to use the ListTimeSeries method when debugging this field.
    * items [Aggregation](#aggregation)
  * comparison `string` (values: COMPARISON_UNSPECIFIED, COMPARISON_GT, COMPARISON_GE, COMPARISON_LT, COMPARISON_LE, COMPARISON_EQ, COMPARISON_NE): The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). The comparison is applied on each time series, with the time series on the left-hand side and the threshold on the right-hand side.Only COMPARISON_LT and COMPARISON_GT are supported currently.
  * denominatorAggregations `array`: Specifies the alignment of data points in individual time series selected by denominatorFilter as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources).When computing ratios, the aggregations and denominator_aggregations fields must use the same alignment period and produce time series that have the same periodicity and labels.
    * items [Aggregation](#aggregation)
  * denominatorFilter `string`: A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. If a denominator_filter is specified, the time series specified by the filter field will be used as the numerator.The filter must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.
  * duration `string`: The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly.
  * filter `string`: A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length.
  * thresholdValue `number`: A value against which to compare the time series.
  * trigger [Trigger](#trigger)

### MonitoredResource
* MonitoredResource `object`: An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "instance_id" and "zone": { "type": "gce_instance", "labels": { "instance_id": "12345678901234", "zone": "us-central1-a" }} 
  * labels `object`: Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".
  * type `string`: Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types and Logging resource types.

### MonitoredResourceDescriptor
* MonitoredResourceDescriptor `object`: An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.
  * description `string`: Optional. A detailed description of the monitored resource type that might be used in documentation.
  * displayName `string`: Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database".
  * labels `array`: Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone".
    * items [LabelDescriptor](#labeldescriptor)
  * launchStage `string` (values: LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED): Optional. The launch stage of the monitored resource definition.
  * name `string`: Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}".
  * type `string`: Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL.

### MonitoredResourceMetadata
* MonitoredResourceMetadata `object`: Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.
  * systemLabels `object`: Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example: { "name": "my-test-instance", "security_group": ["a", "b", "c"], "spot_instance": false } 
  * userLabels `object`: Output only. A map of user-defined metadata labels.

### MonitoringQueryLanguageCondition
* MonitoringQueryLanguageCondition `object`: A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql).
  * duration `string`: The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly.
  * query `string`: Monitoring Query Language (https://cloud.google.com/monitoring/mql) query that outputs a boolean stream.
  * trigger [Trigger](#trigger)

### MutationRecord
* MutationRecord `object`: Describes a change made to a configuration.
  * mutateTime `string`: When the change occurred.
  * mutatedBy `string`: The email address of the user making the change.

### NotificationChannel
* NotificationChannel `object`: A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
  * description `string`: An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.
  * displayName `string`: An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.
  * enabled `boolean`: Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.
  * labels `object`: Configuration fields that define the channel and its behavior. The permissible and required labels are specified in the NotificationChannelDescriptor.labels of the NotificationChannelDescriptor corresponding to the type field.
  * name `string`: The full REST resource name for this channel. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation.
  * type `string`: The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field.
  * userLabels `object`: User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  * verificationStatus `string` (values: VERIFICATION_STATUS_UNSPECIFIED, UNVERIFIED, VERIFIED): Indicates whether this channel has been verified or not. On a ListNotificationChannels or GetNotificationChannel operation, this field is expected to be populated.If the value is UNVERIFIED, then it indicates that the channel is non-functioning (it both requires verification and lacks verification); otherwise, it is assumed that the channel works.If the channel is neither VERIFIED nor UNVERIFIED, it implies that the channel is of a type that does not require verification or that this specific channel has been exempted from verification because it was created prior to verification being required for channels of this type.This field cannot be modified using a standard UpdateNotificationChannel operation. To change the value of this field, you must call VerifyNotificationChannel.

### NotificationChannelDescriptor
* NotificationChannelDescriptor `object`: A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.
  * description `string`: A human-readable description of the notification channel type. The description may include a description of the properties of the channel and pointers to external documentation.
  * displayName `string`: A human-readable name for the notification channel type. This form of the name is suitable for a user interface.
  * labels `array`: The set of labels that must be defined to identify a particular channel of the corresponding type. Each label includes a description for how that field should be populated.
    * items [LabelDescriptor](#labeldescriptor)
  * launchStage `string` (values: LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED): The product launch stage for channels of this type.
  * name `string`: The full REST resource name for this descriptor. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[TYPE] In the above, [TYPE] is the value of the type field.
  * type `string`: The type of notification channel, such as "email" and "sms". To view the full list of channels, see Channel descriptors (https://cloud.google.com/monitoring/alerts/using-channels-api#ncd). Notification channel types are globally unique.

### Option
* Option `object`: A protocol buffer option, which can be attached to a message, field, enumeration, etc.
  * name `string`: The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, "map_entry". For custom options, it should be the fully-qualified name. For example, "google.api.http".
  * value `object`: The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.

### PerformanceThreshold
* PerformanceThreshold `object`: A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
  * basicSliPerformance [BasicSli](#basicsli)
  * performance [RequestBasedSli](#requestbasedsli)
  * threshold `number`: If window performance >= threshold, the window is counted as good.

### Point
* Point `object`: A single data point in a time series.
  * interval [TimeInterval](#timeinterval)
  * value [TypedValue](#typedvalue)

### PointData
* PointData `object`: A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object.
  * timeInterval [TimeInterval](#timeinterval)
  * values `array`: The values that make up the point.
    * items [TypedValue](#typedvalue)

### QueryTimeSeriesRequest
* QueryTimeSeriesRequest `object`: The QueryTimeSeries request.
  * pageSize `integer`: A positive number that is the maximum number of time_series_data to return.
  * pageToken `string`: If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
  * query `string`: Required. The query in the Monitoring Query Language (https://cloud.google.com/monitoring/mql/reference) format. The default time zone is in UTC.

### QueryTimeSeriesResponse
* QueryTimeSeriesResponse `object`: The QueryTimeSeries response.
  * nextPageToken `string`: If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
  * partialErrors `array`: Query execution errors that may have caused the time series data returned to be incomplete. The available data will be available in the response.
    * items [Status](#status)
  * timeSeriesData `array`: The time series data.
    * items [TimeSeriesData](#timeseriesdata)
  * timeSeriesDescriptor [TimeSeriesDescriptor](#timeseriesdescriptor)

### Range
* Range `object`: The range of the population values.
  * max `number`: The maximum of the population values.
  * min `number`: The minimum of the population values.

### RequestBasedSli
* RequestBasedSli `object`: Service Level Indicators for which atomic units of service are counted directly.
  * distributionCut [DistributionCut](#distributioncut)
  * goodTotalRatio [TimeSeriesRatio](#timeseriesratio)

### ResourceGroup
* ResourceGroup `object`: The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.
  * groupId `string`: The group of resources being monitored. Should be only the [GROUP_ID], and not the full-path projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID].
  * resourceType `string` (values: RESOURCE_TYPE_UNSPECIFIED, INSTANCE, AWS_ELB_LOAD_BALANCER): The resource type of the group members.

### SendNotificationChannelVerificationCodeRequest
* SendNotificationChannelVerificationCodeRequest `object`: The SendNotificationChannelVerificationCode request.

### Service
* Service `object`: A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
  * appEngine [AppEngine](#appengine)
  * cloudEndpoints [CloudEndpoints](#cloudendpoints)
  * clusterIstio [ClusterIstio](#clusteristio)
  * custom [Custom](#custom)
  * displayName `string`: Name used for UI elements listing this Service.
  * meshIstio [MeshIstio](#meshistio)
  * name `string`: Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] 
  * telemetry [Telemetry](#telemetry)

### ServiceLevelIndicator
* ServiceLevelIndicator `object`: A Service-Level Indicator (SLI) describes the "performance" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a "custom" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries.
  * basicSli [BasicSli](#basicsli)
  * requestBased [RequestBasedSli](#requestbasedsli)
  * windowsBased [WindowsBasedSli](#windowsbasedsli)

### ServiceLevelObjective
* ServiceLevelObjective `object`: A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99% of requests in each rolling week have latency below 200 milliseconds" or "99.5% of requests in each calendar month return successfully."
  * calendarPeriod `string` (values: CALENDAR_PERIOD_UNSPECIFIED, DAY, WEEK, FORTNIGHT, MONTH, QUARTER, HALF, YEAR): A calendar period, semantically "since the start of the current ". At this time, only DAY, WEEK, FORTNIGHT, and MONTH are supported.
  * displayName `string`: Name used for UI elements listing this SLO.
  * goal `number`: The fraction of service that must be good in order for this objective to be met. 0 < goal <= 0.999.
  * name `string`: Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] 
  * rollingPeriod `string`: A rolling time period, semantically "in the past ". Must be an integer multiple of 1 day no larger than 30 days.
  * serviceLevelIndicator [ServiceLevelIndicator](#servicelevelindicator)

### SourceContext
* SourceContext `object`: SourceContext represents information about the source of a protobuf element, like the file in which it is defined.
  * fileName `string`: The path-qualified name of the .proto file that contained the associated protobuf element. For example: "google/protobuf/source_context.proto".

### SpanContext
* SpanContext `object`: The context of a span, attached to Exemplars in Distribution values during aggregation.It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] 
  * spanName `string`: The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] [TRACE_ID] is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.[SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.

### Status
* Status `object`: The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TcpCheck
* TcpCheck `object`: Information required for a TCP Uptime check request.
  * port `integer`: The TCP port on the server against which to run the check. Will be combined with host (specified within the monitored_resource) to construct the full URL. Required.

### Telemetry
* Telemetry `object`: Configuration for how to query telemetry on a Service.
  * resourceName `string`: The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names.

### TimeInterval
* TimeInterval `object`: A closed time interval. It extends from the start time to the end time, and includes both: [startTime, endTime]. Valid time intervals depend on the MetricKind of the metric value. The end time must not be earlier than the start time. When writing data points, the start time must not be more than 25 hours in the past and the end time must not be more than five minutes in the future. For GAUGE metrics, the startTime value is technically optional; if no value is specified, the start time defaults to the value of the end time, and the interval represents a single point in time. If both start and end times are specified, they must be identical. Such an interval is valid only for GAUGE metrics, which are point-in-time measurements. The end time of a new interval must be at least a millisecond after the end time of the previous interval. For DELTA metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For DELTA metrics, the start time of the next interval must be at least a millisecond after the end time of the previous interval. For CUMULATIVE metrics, the start time and end time must specify a a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points. The new start time must be at least a millisecond after the end time of the previous interval. The start time of a new interval must be at least a millisecond after the end time of the previous interval because intervals are closed. If the start time of a new interval is the same as the end time of the previous interval, then data written at the new start time could overwrite data written at the previous end time.
  * endTime `string`: Required. The end of the time interval.
  * startTime `string`: Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.

### TimeSeries
* TimeSeries `object`: A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
  * metadata [MonitoredResourceMetadata](#monitoredresourcemetadata)
  * metric [Metric](#metric)
  * metricKind `string` (values: METRIC_KIND_UNSPECIFIED, GAUGE, DELTA, CUMULATIVE): The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE.
  * points `array`: The data points of this time series. When listing time series, points are returned in reverse time order.When creating a time series, this field must contain exactly one point and the point's type must be the same as the value type of the associated metric. If the associated metric's descriptor must be auto-created, then the value type of the descriptor is determined by the point's type, which must be BOOL, INT64, DOUBLE, or DISTRIBUTION.
    * items [Point](#point)
  * resource [MonitoredResource](#monitoredresource)
  * unit `string`: The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.
  * valueType `string` (values: VALUE_TYPE_UNSPECIFIED, BOOL, INT64, DOUBLE, STRING, DISTRIBUTION, MONEY): The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field.

### TimeSeriesData
* TimeSeriesData `object`: Represents the values of a time series associated with a TimeSeriesDescriptor.
  * labelValues `array`: The values of the labels in the time series identifier, given in the same order as the label_descriptors field of the TimeSeriesDescriptor associated with this object. Each value must have a value of the type given in the corresponding entry of label_descriptors.
    * items [LabelValue](#labelvalue)
  * pointData `array`: The points in the time series.
    * items [PointData](#pointdata)

### TimeSeriesDescriptor
* TimeSeriesDescriptor `object`: A descriptor for the labels and points in a time series.
  * labelDescriptors `array`: Descriptors for the labels.
    * items [LabelDescriptor](#labeldescriptor)
  * pointDescriptors `array`: Descriptors for the point data value columns.
    * items [ValueDescriptor](#valuedescriptor)

### TimeSeriesRatio
* TimeSeriesRatio `object`: A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed.
  * badServiceFilter `string`: A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying bad service, either demanded service that was not provided or demanded service that was of inadequate quality. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE.
  * goodServiceFilter `string`: A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE.
  * totalServiceFilter `string`: A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying total demanded service. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE.

### Trigger
* Trigger `object`: Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used.
  * count `integer`: The absolute number of time series that must fail the predicate for the condition to be triggered.
  * percent `number`: The percentage of time series that must fail the predicate for the condition to be triggered.

### Type
* Type `object`: A protocol buffer message type.
  * fields `array`: The list of fields.
    * items [Field](#field)
  * name `string`: The fully qualified message name.
  * oneofs `array`: The list of types appearing in oneof definitions in this type.
    * items `string`
  * options `array`: The protocol buffer options.
    * items [Option](#option)
  * sourceContext [SourceContext](#sourcecontext)
  * syntax `string` (values: SYNTAX_PROTO2, SYNTAX_PROTO3): The source syntax.

### TypedValue
* TypedValue `object`: A single strongly-typed value.
  * boolValue `boolean`: A Boolean value: true or false.
  * distributionValue [Distribution](#distribution)
  * doubleValue `number`: A 64-bit double-precision floating-point number. Its magnitude is approximately ±10±300 and it has 16 significant digits of precision.
  * int64Value `string`: A 64-bit integer. Its range is approximately ±9.2x1018.
  * stringValue `string`: A variable-length string value.

### UptimeCheckConfig
* UptimeCheckConfig `object`: This message configures which resources and services to monitor for availability.
  * contentMatchers `array`: The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the content_matchers list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.
    * items [ContentMatcher](#contentmatcher)
  * displayName `string`: A human-friendly name for the Uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required.
  * httpCheck [HttpCheck](#httpcheck)
  * internalCheckers `array`: The internal checkers that this check will egress from. If is_internal is true and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this UptimeCheckConfig.
    * items [InternalChecker](#internalchecker)
  * isInternal `boolean`: If this is true, then checks are made only from the 'internal_checkers'. If it is false, then checks are made only from the 'selected_regions'. It is an error to provide 'selected_regions' when is_internal is true, or to provide 'internal_checkers' when is_internal is false.
  * monitoredResource [MonitoredResource](#monitoredresource)
  * name `string`: A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response.
  * period `string`: How often, in seconds, the Uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 60s.
  * resourceGroup [ResourceGroup](#resourcegroup)
  * selectedRegions `array`: The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions.
    * items `string` (values: REGION_UNSPECIFIED, USA, EUROPE, SOUTH_AMERICA, ASIA_PACIFIC)
  * tcpCheck [TcpCheck](#tcpcheck)
  * timeout `string`: The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.

### UptimeCheckIp
* UptimeCheckIp `object`: Contains the region, location, and list of IP addresses where checkers in the location run from.
  * ipAddress `string`: The IP address from which the Uptime check originates. This is a fully specified IP address (not an IP address range). Most IP addresses, as of this publication, are in IPv4 format; however, one should not rely on the IP addresses being in IPv4 format indefinitely, and should support interpreting this field in either IPv4 or IPv6 format.
  * location `string`: A more specific location within the region that typically encodes a particular city/town/metro (and its containing state/province or country) within the broader umbrella region category.
  * region `string` (values: REGION_UNSPECIFIED, USA, EUROPE, SOUTH_AMERICA, ASIA_PACIFIC): A broad region category in which the IP address is located.

### ValueDescriptor
* ValueDescriptor `object`: A descriptor for the value columns in a data point.
  * key `string`: The value key.
  * metricKind `string` (values: METRIC_KIND_UNSPECIFIED, GAUGE, DELTA, CUMULATIVE): The value stream kind.
  * unit `string`: The unit in which time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. unit is only valid if value_type is INTEGER, DOUBLE, DISTRIBUTION.
  * valueType `string` (values: VALUE_TYPE_UNSPECIFIED, BOOL, INT64, DOUBLE, STRING, DISTRIBUTION, MONEY): The value type.

### VerifyNotificationChannelRequest
* VerifyNotificationChannelRequest `object`: The VerifyNotificationChannel request.
  * code `string`: Required. The verification code that was delivered to the channel as a result of invoking the SendNotificationChannelVerificationCode API method or that was retrieved from a verified channel via GetNotificationChannelVerificationCode. For example, one might have "G-123456" or "TKNZGhhd2EyN3I1MnRnMjRv" (in general, one is only guaranteed that the code is valid UTF-8; one should not make any assumptions regarding the structure or format of the code).

### WindowsBasedSli
* WindowsBasedSli `object`: A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.
  * goodBadMetricFilter `string`: A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries with ValueType = BOOL. The window is good if any true values appear in the window.
  * goodTotalRatioThreshold [PerformanceThreshold](#performancethreshold)
  * metricMeanInRange [MetricRange](#metricrange)
  * metricSumInRange [MetricRange](#metricrange)
  * windowPeriod `string`: Duration over which window quality is evaluated. Must be an integer fraction of a day and at least 60s.


