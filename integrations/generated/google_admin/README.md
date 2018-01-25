# @datafire/google_admin

Client library for Admin Reports

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

google_admin.channels.stop({}).then(data => {
  console.log(data);
});
```

## Description

Fetches reports for the administrators of G Suite customers about the usage, collaboration, security, and risk for their users.

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

### activities.list
Retrieves a list of activities for a specific customer and application.


```js
google_admin.activities.list({
  "userKey": "",
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * userKey **required** `string`: Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
  * applicationName **required** `string`: Application name for which the events are to be retrieved.
  * actorIpAddress `string`: IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
  * customerId `string`: Represents the customer for which the data is to be fetched.
  * endTime `string`: Return events which occurred at or before this time.
  * eventName `string`: Name of the event being queried.
  * filters `string`: Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
  * maxResults `integer`: Number of activity records to be shown in each page.
  * pageToken `string`: Token to specify next page.
  * startTime `string`: Return events which occurred at or after this time.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Activities](#activities)

### activities.watch
Push changes to activities


```js
google_admin.activities.watch({
  "userKey": "",
  "applicationName": ""
}, context)
```

#### Input
* input `object`
  * userKey **required** `string`: Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
  * applicationName **required** `string`: Application name for which the events are to be retrieved.
  * actorIpAddress `string`: IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
  * customerId `string`: Represents the customer for which the data is to be fetched.
  * endTime `string`: Return events which occurred at or before this time.
  * eventName `string`: Name of the event being queried.
  * filters `string`: Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
  * maxResults `integer`: Number of activity records to be shown in each page.
  * pageToken `string`: Token to specify next page.
  * startTime `string`: Return events which occurred at or after this time.
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Channel](#channel)

### channels.stop
Stop watching resources through this channel


```js
google_admin.channels.stop({}, context)
```

#### Input
* input `object`
  * resource [Channel](#channel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### customerUsageReports.get
Retrieves a report which is a collection of properties / statistics for a specific customer.


```js
google_admin.customerUsageReports.get({
  "date": ""
}, context)
```

#### Input
* input `object`
  * date **required** `string`: Represents the date in yyyy-mm-dd format for which the data is to be fetched.
  * customerId `string`: Represents the customer for which the data is to be fetched.
  * pageToken `string`: Token to specify next page.
  * parameters `string`: Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UsageReports](#usagereports)

### userUsageReport.get
Retrieves a report which is a collection of properties / statistics for a set of users.


```js
google_admin.userUsageReport.get({
  "userKey": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * userKey **required** `string`: Represents the profile id or the user email for which the data should be filtered.
  * date **required** `string`: Represents the date in yyyy-mm-dd format for which the data is to be fetched.
  * customerId `string`: Represents the customer for which the data is to be fetched.
  * filters `string`: Represents the set of filters including parameter operator value.
  * maxResults `integer`: Maximum number of results to return. Maximum allowed is 1000
  * pageToken `string`: Token to specify next page.
  * parameters `string`: Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UsageReports](#usagereports)



## Definitions

### Activities
* Activities `object`: JSON template for a collection of activites.
  * etag `string`: ETag of the resource.
  * items `array`: Each record in read response.
    * items [Activity](#activity)
  * kind `string`: Kind of list response this is.
  * nextPageToken `string`: Token for retrieving the next page

### Activity
* Activity `object`: JSON template for the activity resource.
  * actor `object`: User doing the action.
    * callerType `string`: User or OAuth 2LO request.
    * email `string`: Email address of the user.
    * key `string`: For OAuth 2LO API requests, consumer_key of the requestor.
    * profileId `string`: Obfuscated user id of the user.
  * etag `string`: ETag of the entry.
  * events `array`: Activity events.
    * items `object`
      * name `string`: Name of event.
      * parameters `array`: Parameter value pairs for various applications.
        * items `object`
          * boolValue `boolean`: Boolean value of the parameter.
          * intValue `string`: Integral value of the parameter.
          * multiIntValue `array`: Multi-int value of the parameter.
            * items `string`
          * multiValue `array`: Multi-string value of the parameter.
            * items `string`
          * name `string`: The name of the parameter.
          * value `string`: String value of the parameter.
      * type `string`: Type of event.
  * id `object`: Unique identifier for each activity record.
    * applicationName `string`: Application name to which the event belongs.
    * customerId `string`: Obfuscated customer ID of the source customer.
    * time `string`: Time of occurrence of the activity.
    * uniqueQualifier `string`: Unique qualifier if multiple events have the same time.
  * ipAddress `string`: IP Address of the user doing the action.
  * kind `string`: Kind of resource this is.
  * ownerDomain `string`: Domain of source customer.

### Channel
* Channel `object`: An notification channel used to watch for resource changes.
  * address `string`: The address where notifications are delivered for this channel.
  * expiration `string`: Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
  * id `string`: A UUID or similar unique string that identifies this channel.
  * kind `string`: Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
  * params `object`: Additional parameters controlling delivery channel behavior. Optional.
  * payload `boolean`: A Boolean value to indicate whether payload is wanted. Optional.
  * resourceId `string`: An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
  * resourceUri `string`: A version-specific identifier for the watched resource.
  * token `string`: An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
  * type `string`: The type of delivery mechanism used for this channel.

### UsageReport
* UsageReport `object`: JSON template for a usage report.
  * date `string`: The date to which the record belongs.
  * entity `object`: Information about the type of the item.
    * customerId `string`: Obfuscated customer id for the record.
    * profileId `string`: Obfuscated user id for the record.
    * type `string`: The type of item, can be a customer or user.
    * userEmail `string`: user's email.
  * etag `string`: ETag of the resource.
  * kind `string`: The kind of object.
  * parameters `array`: Parameter value pairs for various applications.
    * items `object`
      * boolValue `boolean`: Boolean value of the parameter.
      * datetimeValue `string`: RFC 3339 formatted value of the parameter.
      * intValue `string`: Integral value of the parameter.
      * msgValue `array`: Nested message value of the parameter.
        * items `object`
      * name `string`: The name of the parameter.
      * stringValue `string`: String value of the parameter.

### UsageReports
* UsageReports `object`: JSON template for a collection of usage reports.
  * etag `string`: ETag of the resource.
  * kind `string`: The kind of object.
  * nextPageToken `string`: Token for retrieving the next page
  * usageReports `array`: Various application parameter records.
    * items [UsageReport](#usagereport)
  * warnings `array`: Warnings if any.
    * items `object`
      * code `string`: Machine readable code / warning type.
      * data `array`: Key-Value pairs to give detailed information on the warning.
        * items `object`
          * key `string`: Key associated with a key-value pair to give detailed information on the warning.
          * value `string`: Value associated with a key-value pair to give detailed information on the warning.
      * message `string`: Human readable message for the warning.


