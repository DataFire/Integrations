# @datafire/google_admin

Client library for Admin Reports

## Installation and Usage
```bash
npm install --save datafire @datafire/google_admin
```

```js
let datafire = require('datafire');
let google_admin = require('@datafire/google_admin').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_admin.channels.stop({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_admin.oauthRefresh(null, context)
```


### activities.list
Retrieves a list of activities for a specific customer and application.


```js
google_admin.activities.list({
  "userKey": "",
  "applicationName": ""
}, context)
```

#### Parameters
* userKey (string) **required** - Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
* applicationName (string) **required** - Application name for which the events are to be retrieved.
* actorIpAddress (string) - IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
* customerId (string) - Represents the customer for which the data is to be fetched.
* endTime (string) - Return events which occurred at or before this time.
* eventName (string) - Name of the event being queried.
* filters (string) - Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
* maxResults (integer) - Number of activity records to be shown in each page.
* pageToken (string) - Token to specify next page.
* startTime (string) - Return events which occurred at or after this time.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### activities.watch
Push changes to activities


```js
google_admin.activities.watch({
  "userKey": "",
  "applicationName": ""
}, context)
```

#### Parameters
* userKey (string) **required** - Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
* applicationName (string) **required** - Application name for which the events are to be retrieved.
* actorIpAddress (string) - IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
* customerId (string) - Represents the customer for which the data is to be fetched.
* endTime (string) - Return events which occurred at or before this time.
* eventName (string) - Name of the event being queried.
* filters (string) - Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
* maxResults (integer) - Number of activity records to be shown in each page.
* pageToken (string) - Token to specify next page.
* startTime (string) - Return events which occurred at or after this time.
* resource (object) - An notification channel used to watch for resource changes.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### channels.stop
Stop watching resources through this channel


```js
google_admin.channels.stop({}, context)
```

#### Parameters
* resource (object) - An notification channel used to watch for resource changes.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### customerUsageReports.get
Retrieves a report which is a collection of properties / statistics for a specific customer.


```js
google_admin.customerUsageReports.get({
  "date": ""
}, context)
```

#### Parameters
* date (string) **required** - Represents the date in yyyy-mm-dd format for which the data is to be fetched.
* customerId (string) - Represents the customer for which the data is to be fetched.
* pageToken (string) - Token to specify next page.
* parameters (string) - Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userUsageReport.get
Retrieves a report which is a collection of properties / statistics for a set of users.


```js
google_admin.userUsageReport.get({
  "userKey": "",
  "date": ""
}, context)
```

#### Parameters
* userKey (string) **required** - Represents the profile id or the user email for which the data should be filtered.
* date (string) **required** - Represents the date in yyyy-mm-dd format for which the data is to be fetched.
* customerId (string) - Represents the customer for which the data is to be fetched.
* filters (string) - Represents the set of filters including parameter operator value.
* maxResults (integer) - Maximum number of results to return. Maximum allowed is 1000
* pageToken (string) - Token to specify next page.
* parameters (string) - Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

