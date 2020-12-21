# @datafire/google_admin

Client library for Admin SDK API

## Installation and Usage
```bash
npm install --save @datafire/google_admin
```
```js
let google_admin = require('@datafire/google_admin').create({
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

Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_admin.oauthCallback({
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
google_admin.oauthRefresh(null, context)
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

### reports.activities.list
Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 


```js
google_admin.reports.activities.list({
  "userKey": "",
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * userKey **required** `string`: Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique G Suite profile ID or their primary email address.
  * applicationName **required** `string` (values: application_name_undefined, access_transparency, admin, calendar, chat, drive, gcp, gplus, groups, groups_enterprise, jamboard, login, meet, mobile, rules, saml, token, user_accounts, context_aware_access, chrome, data_studio): Application name for which the events are to be retrieved.
  * actorIpAddress `string`: The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
  * customerId `string`: The unique ID of the customer to retrieve data for.
  * endTime `string`: Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past.
  * eventName `string`: The name of the event being queried by the API. Each `eventName` is related to a specific G Suite service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`.
  * filters `string`: The `filters` query string is a comma-separated list. The list is composed of event parameters that are manipulated by relational operators. Event parameters are in the form `parameter1 name[parameter1 value],parameter2 name[parameter2 value],...` These event parameters are associated with a specific `eventName`. An empty report is returned if the filtered request's parameter does not belong to the `eventName`. For more information about `eventName` parameters, see the list of event names for various applications above in `applicationName`. In the following Admin Activity example, the <> operator is URL-encoded in the request's query string (%3C%3E): GET...&eventName=CHANGE_CALENDAR_SETTING &filters=NEW_VALUE%3C%3EREAD_ONLY_ACCESS In the following Drive example, the list can be a view or edit event's `doc_id` parameter with a value that is manipulated by an 'equal to' (==) or 'not equal to' (<>) relational operator. In the first example, the report returns each edited document's `doc_id`. In the second example, the report returns each viewed document's `doc_id` that equals the value 12345 and does not return any viewed document's which have a `doc_id` value of 98765. The <> operator is URL-encoded in the request's query string (%3C%3E): GET...&eventName=edit&filters=doc_id GET...&eventName=view&filters=doc_id==12345,doc_id%3C%3E98765 The relational operators include: - `==` - 'equal to'. - `<>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `>` - 'greater than'. It is URL-encoded (%3E). - `>=` - 'greater than or equal to'. It is URL-encoded (%3E=). *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. If no parameters are requested, all parameters are returned. 
  * groupIdFilter `string`: Comma separated group ids (obfuscated) on which user activities are filtered, i.e, the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456"
  * maxResults `integer`: Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000.
  * orgUnitID `string`: ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
  * pageToken `string`: The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
  * startTime `string`: Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error.
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
* output [Activities](#activities)

### reports.activities.watch
Start receiving notifications for account activities. For more information, see Receiving Push Notifications.


```js
google_admin.reports.activities.watch({
  "userKey": "",
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * userKey **required** `string`: Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique G Suite profile ID or their primary email address.
  * applicationName **required** `string` (values: application_name_unspecified, access_transparency, admin, calendar, chat, drive, gcp, gplus, groups, groups_enterprise, jamboard, login, meet, mobile, rules, saml, token, user_accounts, context_aware_access, chrome, data_studio): Application name for which the events are to be retrieved.
  * actorIpAddress `string`: The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
  * customerId `string`: The unique ID of the customer to retrieve data for.
  * endTime `string`: Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past.
  * eventName `string`: The name of the event being queried by the API. Each `eventName` is related to a specific G Suite service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`.
  * filters `string`: The `filters` query string is a comma-separated list. The list is composed of event parameters that are manipulated by relational operators. Event parameters are in the form `parameter1 name[parameter1 value],parameter2 name[parameter2 value],...` These event parameters are associated with a specific `eventName`. An empty report is returned if the filtered request's parameter does not belong to the `eventName`. For more information about `eventName` parameters, see the list of event names for various applications above in `applicationName`. In the following Admin Activity example, the <> operator is URL-encoded in the request's query string (%3C%3E): GET...&eventName=CHANGE_CALENDAR_SETTING &filters=NEW_VALUE%3C%3EREAD_ONLY_ACCESS In the following Drive example, the list can be a view or edit event's `doc_id` parameter with a value that is manipulated by an 'equal to' (==) or 'not equal to' (<>) relational operator. In the first example, the report returns each edited document's `doc_id`. In the second example, the report returns each viewed document's `doc_id` that equals the value 12345 and does not return any viewed document's which have a `doc_id` value of 98765. The <> operator is URL-encoded in the request's query string (%3C%3E): GET...&eventName=edit&filters=doc_id GET...&eventName=view&filters=doc_id==12345,doc_id%3C%3E98765 The relational operators include: - `==` - 'equal to'. - `<>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `>` - 'greater than'. It is URL-encoded (%3E). - `>=` - 'greater than or equal to'. It is URL-encoded (%3E=). *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. If no parameters are requested, all parameters are returned. 
  * groupIdFilter `string`: Comma separated group ids (obfuscated) on which user activities are filtered, i.e, the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456"
  * maxResults `integer`: Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000.
  * orgUnitID `string`: ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
  * pageToken `string`: The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
  * startTime `string`: Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error.
  * body [Channel](#channel)
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
* output [Channel](#channel)

### reports.customerUsageReports.get
Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 


```js
google_admin.reports.customerUsageReports.get({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`: Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
  * customerId `string`: The unique ID of the customer to retrieve data for.
  * pageToken `string`: Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. For your follow-on requests getting all of the report's pages, enter the `nextPageToken` value in the `pageToken` query string.
  * parameters `string`: The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include `accounts`, `app_maker`, `apps_scripts`, `calendar`, `classroom`, `cros`, `docs`, `gmail`, `gplus`, `device_management`, `meet`, and `sites`. A `parameters` query string is in the CSV form of `app_name1:param_name1, app_name2:param_name2`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned. 
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
* output [UsageReports](#usagereports)

### reports.userUsageReport.get
Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.


```js
google_admin.reports.userUsageReport.get({
  "userKey": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * userKey **required** `string`: Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique G Suite profile ID or their primary email address.
  * date **required** `string`: Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
  * customerId `string`: The unique ID of the customer to retrieve data for.
  * filters `string`: The `filters` query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The `filters` query string includes the name of the application whose usage is returned in the report. The application values for the Users Usage Report include `accounts`, `docs`, and `gmail`. Filters are in the form `[application name]:parameter name[parameter value],...`. In this example, the `<>` 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last_login_time &filters=accounts:last_login_time%3C%3E2010-10-28T10:26:35.000Z The relational operators include: - `==` - 'equal to'. - `<>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `>` - 'greater than'. It is URL-encoded (%3E). - `>=` - 'greater than or equal to'. It is URL-encoded (%3E=). 
  * groupIdFilter `string`: Comma separated group ids (obfuscated) on which user activities are filtered, i.e, the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456"
  * maxResults `integer`: Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional.
  * orgUnitID `string`: ID of the organizational unit to report on. User activity will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
  * pageToken `string`: Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
  * parameters `string`: The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers Usage report include `accounts`, `app_maker`, `apps_scripts`, `calendar`, `classroom`, `cros`, `docs`, `gmail`, `gplus`, `device_management`, `meet`, and `sites`. A `parameters` query string is in the CSV form of `app_name1:param_name1, app_name2:param_name2`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned. 
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
* output [UsageReports](#usagereports)

### reports.entityUsageReports.get
Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.


```js
google_admin.reports.entityUsageReports.get({
  "entityType": "",
  "entityKey": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * entityType **required** `string` (values: entity_type_undefined, gplus_communities): Represents the type of entity for the report.
  * entityKey **required** `string` (values: entityKeyUndefined, all, entityKey): Represents the key of the object to filter the data with.
  * date **required** `string`: Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
  * customerId `string`: The unique ID of the customer to retrieve data for.
  * filters `string`: The `filters` query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The `filters` query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include `accounts`, `docs`, and `gmail`. Filters are in the form `[application name]:parameter name[parameter value],...`. In this example, the `<>` 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01 ?parameters=gplus:community_name,gplus:num_total_members &filters=gplus:num_total_members%3C%3E0 The relational operators include: - `==` - 'equal to'. - `<>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `>` - 'greater than'. It is URL-encoded (%3E). - `>=` - 'greater than or equal to'. It is URL-encoded (%3E=). Filters can only be applied to numeric parameters.
  * maxResults `integer`: Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page.
  * pageToken `string`: Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
  * parameters `string`: The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Entities usage report are only `gplus`. A `parameter` query string is in the CSV form of `[app_name1:param_name1], [app_name2:param_name2]...`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned. 
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
* output [UsageReports](#usagereports)

### admin.channels.stop
Stop watching resources through this channel.


```js
google_admin.admin.channels.stop({}, context)
```

#### Input
* input `object`
  * body [Channel](#channel)
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



## Definitions

### Activities
* Activities `object`: JSON template for a collection of activities.
  * etag `string`: ETag of the resource.
  * items `array`: Each activity record in the response.
    * items [Activity](#activity)
  * kind `string`: The type of API resource. For an activity report, the value is `reports#activities`.
  * nextPageToken `string`: Token for retrieving the follow-on next page of the report. The `nextPageToken` value is used in the request's `pageToken` query string.

### Activity
* Activity `object`: JSON template for the activity resource.
  * actor `object`: User doing the action.
    * callerType `string`: The type of actor.
    * email `string`: The primary email address of the actor. May be absent if there is no email address associated with the actor.
    * key `string`: Only present when `callerType` is `KEY`. Can be the `consumer_key` of the requestor for OAuth 2LO API requests or an identifier for robot accounts.
    * profileId `string`: The unique G Suite profile ID of the actor. May be absent if the actor is not a G Suite user.
  * etag `string`: ETag of the entry.
  * events `array`: Activity events in the report.
    * items `object`
      * parameters `array`: Parameter value pairs for various applications. For more information about `eventName` parameters, see the list of event names for various applications above in `applicationName`.
        * items `object`
          * boolValue `boolean`: Boolean value of the parameter.
          * intValue `string`: Integer value of the parameter.
          * messageValue `object`: Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
          * multiIntValue `array`: Integer values of the parameter.
          * multiMessageValue `array`: List of `messageValue` objects.
          * multiValue `array`: String values of the parameter.
          * name `string`: The name of the parameter.
          * value `string`: String value of the parameter.
      * name `string`: Name of the event. This is the specific name of the activity reported by the API. And each `eventName` is related to a specific G Suite service or feature which the API organizes into types of events. For `eventName` request parameters in general: - If no `eventName` is given, the report returns all possible instances of an `eventName`. - When you request an `eventName`, the API's response returns all activities which contain that `eventName`. It is possible that the returned activities will have other `eventName` properties in addition to the one requested. For more information about `eventName` properties, see the list of event names for various applications above in `applicationName`.
      * type `string`: Type of event. The G Suite service or feature that an administrator changes is identified in the `type` property which identifies an event using the `eventName` property. For a full list of the API's `type` categories, see the list of event names for various applications above in `applicationName`.
  * id `object`: Unique identifier for each activity record.
    * applicationName `string`: Application name to which the event belongs. For possible values see the list of applications above in `applicationName`.
    * customerId `string`: The unique identifier for a G suite account.
    * time `string`: Time of occurrence of the activity. This is in UNIX epoch time in seconds.
    * uniqueQualifier `string`: Unique qualifier if multiple events have the same time.
  * ipAddress `string`: IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into G Suite which may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. The API supports IPv4 and IPv6.
  * kind `string`: The type of API resource. For an activity report, the value is `audit#activity`.
  * ownerDomain `string`: This is the domain that is affected by the report's event. For example domain of Admin console or the Drive application's document owner.

### Channel
* Channel `object`: A notification channel used to watch for resource changes.
  * address `string`: The address where notifications are delivered for this channel.
  * expiration `string`: Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
  * id `string`: A UUID or similar unique string that identifies this channel.
  * kind `string`: Identifies this as a notification channel used to watch for changes to a resource, which is "`api#channel`".
  * params `object`: Additional parameters controlling delivery channel behavior. Optional.
  * payload `boolean`: A Boolean value to indicate whether payload is wanted. Optional.
  * resourceId `string`: An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
  * resourceUri `string`: A version-specific identifier for the watched resource.
  * token `string`: An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
  * type `string`: The type of delivery mechanism used for this channel. The value should be set to `"web_hook"`.

### NestedParameter
* NestedParameter `object`: JSON template for a parameter used in various reports.
  * boolValue `boolean`: Boolean value of the parameter.
  * intValue `string`: Integer value of the parameter.
  * multiBoolValue `array`: Multiple boolean values of the parameter.
    * items `boolean`
  * multiIntValue `array`: Multiple integer values of the parameter.
    * items `string`
  * multiValue `array`: Multiple string values of the parameter.
    * items `string`
  * name `string`: The name of the parameter.
  * value `string`: String value of the parameter.

### UsageReport
* UsageReport `object`: JSON template for a usage report.
  * parameters `array`: Output only. Parameter value pairs for various applications. For the Entity Usage Report parameters and values, see [the Entity Usage parameters reference](/admin-sdk/reports/v1/reference/usage-ref-appendix-a/entities).
    * items `object`
      * boolValue `boolean`: Output only. Boolean value of the parameter.
      * datetimeValue `string`: The RFC 3339 formatted value of the parameter, for example 2010-10-28T10:26:35.000Z.
      * intValue `string`: Output only. Integer value of the parameter.
      * msgValue `array`: Output only. Nested message value of the parameter.
        * items `object`
      * name `string`: The name of the parameter. For the User Usage Report parameter names, see the User Usage parameters reference.
      * stringValue `string`: Output only. String value of the parameter.
  * date `string`: Output only. The date of the report request.
  * entity `object`: Output only. Information about the type of the item.
    * customerId `string`: Output only. The unique identifier of the customer's account.
    * entityId `string`: Output only. Object key. Only relevant if entity.type = "OBJECT" Note: external-facing name of report is "Entities" rather than "Objects".
    * profileId `string`: Output only. The user's immutable G Suite profile identifier.
    * type `string`: Output only. The type of item. The value is `user`.
    * userEmail `string`: Output only. The user's email address. Only relevant if entity.type = "USER"
  * etag `string`: ETag of the resource.
  * kind `string`: The type of API resource. For a usage report, the value is `admin#reports#usageReport`.

### UsageReports
* UsageReports `object`
  * etag `string`: ETag of the resource.
  * kind `string`: The type of API resource. For a usage report, the value is `admin#reports#usageReports`.
  * nextPageToken `string`: Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. For your follow-on requests getting all of the report's pages, enter the `nextPageToken` value in the `pageToken` query string.
  * usageReports `array`: Various application parameter records.
    * items [UsageReport](#usagereport)
  * warnings `array`: Warnings, if any.
    * items `object`
      * code `string`: Machine readable code or warning type. The warning code value is `200`.
      * data `array`: Key-value pairs to give detailed information on the warning.
        * items `object`
          * key `string`: Key associated with a key-value pair to give detailed information on the warning.
          * value `string`: Value associated with a key-value pair to give detailed information on the warning.
      * message `string`: The human readable messages for a warning are: - Data is not available warning - Sorry, data for date yyyy-mm-dd for application "`application name`" is not available. - Partial data is available warning - Data for date yyyy-mm-dd for application "`application name`" is not available right now, please try again after a few hours. 


