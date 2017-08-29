# @datafire/google_adsensehost

Client library for AdSense Host

## Installation and Usage
```bash
npm install --save datafire @datafire/google_adsensehost
```

```js
let datafire = require('datafire');
let google_adsensehost = require('@datafire/google_adsensehost').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_adsensehost.adclients.list({}).then(data => {
  console.log(data);
})
```

## Description
Generates performance reports, generates ad codes, and provides publisher management capabilities for AdSense Hosts.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adsensehost.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_adsensehost.oauthRefresh(null, context)
```


### accounts.list
List hosted accounts associated with this AdSense account by ad client id.


```js
google_adsensehost.accounts.list({
  "filterAdClientId": []
}, context)
```

#### Parameters
* filterAdClientId (array) **required** - Ad clients to list accounts for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.get
Get information about the selected associated AdSense account.


```js
google_adsensehost.accounts.get({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to get information about.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adclients.list
List all hosted ad clients in the specified hosted account.


```js
google_adsensehost.accounts.adclients.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account for which to list ad clients.
* maxResults (integer) - The maximum number of ad clients to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adclients.get
Get information about one of the ad clients in the specified publisher's AdSense account.


```js
google_adsensehost.accounts.adclients.get({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which contains the ad client.
* adClientId (string) **required** - Ad client to get.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.list
List all ad units in the specified publisher's AdSense account.


```js
google_adsensehost.accounts.adunits.list({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which contains the ad client.
* adClientId (string) **required** - Ad client for which to list ad units.
* includeInactive (boolean) - Whether to include inactive ad units. Default: true.
* maxResults (integer) - The maximum number of ad units to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.patch
Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.


```js
google_adsensehost.accounts.adunits.patch({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which contains the ad client.
* adClientId (string) **required** - Ad client which contains the ad unit.
* adUnitId (string) **required** - Ad unit to get.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.insert
Insert the supplied ad unit into the specified publisher AdSense account.


```js
google_adsensehost.accounts.adunits.insert({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which will contain the ad unit.
* adClientId (string) **required** - Ad client into which to insert the ad unit.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.update
Update the supplied ad unit in the specified publisher AdSense account.


```js
google_adsensehost.accounts.adunits.update({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which contains the ad client.
* adClientId (string) **required** - Ad client which contains the ad unit.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.delete
Delete the specified ad unit from the specified publisher AdSense account.


```js
google_adsensehost.accounts.adunits.delete({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which contains the ad unit.
* adClientId (string) **required** - Ad client for which to get ad unit.
* adUnitId (string) **required** - Ad unit to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.get
Get the specified host ad unit in this AdSense account.


```js
google_adsensehost.accounts.adunits.get({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which contains the ad unit.
* adClientId (string) **required** - Ad client for which to get ad unit.
* adUnitId (string) **required** - Ad unit to get.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.getAdCode
Get ad code for the specified ad unit, attaching the specified host custom channels.


```js
google_adsensehost.accounts.adunits.getAdCode({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which contains the ad client.
* adClientId (string) **required** - Ad client with contains the ad unit.
* adUnitId (string) **required** - Ad unit to get the code for.
* hostCustomChannelId (array) - Host custom channel to attach to the ad code.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adsensehost.accounts.reports.generate({
  "accountId": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Hosted account upon which to report.
* startDate (string) **required** - Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
* endDate (string) **required** - End of the date range to report on in "YYYY-MM-DD" format, inclusive.
* dimension (array) - Dimensions to base the report on.
* filter (array) - Filters to be run on the report.
* locale (string) - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
* maxResults (integer) - The maximum number of rows of report data to return.
* metric (array) - Numeric columns to include in the report.
* sort (array) - The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
* startIndex (integer) - Index of the first row of report data to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### adclients.list
List all host ad clients in this AdSense account.


```js
google_adsensehost.adclients.list({}, context)
```

#### Parameters
* maxResults (integer) - The maximum number of ad clients to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### adclients.get
Get information about one of the ad clients in the Host AdSense account.


```js
google_adsensehost.adclients.get({
  "adClientId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client to get.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### customchannels.list
List all host custom channels in this AdSense account.


```js
google_adsensehost.customchannels.list({
  "adClientId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client for which to list custom channels.
* maxResults (integer) - The maximum number of custom channels to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### customchannels.patch
Update a custom channel in the host AdSense account. This method supports patch semantics.


```js
google_adsensehost.customchannels.patch({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client in which the custom channel will be updated.
* customChannelId (string) **required** - Custom channel to get.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### customchannels.insert
Add a new custom channel to the host AdSense account.


```js
google_adsensehost.customchannels.insert({
  "adClientId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client to which the new custom channel will be added.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### customchannels.update
Update a custom channel in the host AdSense account.


```js
google_adsensehost.customchannels.update({
  "adClientId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client in which the custom channel will be updated.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### customchannels.delete
Delete a specific custom channel from the host AdSense account.


```js
google_adsensehost.customchannels.delete({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client from which to delete the custom channel.
* customChannelId (string) **required** - Custom channel to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### customchannels.get
Get a specific custom channel from the host AdSense account.


```js
google_adsensehost.customchannels.get({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client from which to get the custom channel.
* customChannelId (string) **required** - Custom channel to get.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlchannels.list
List all host URL channels in the host AdSense account.


```js
google_adsensehost.urlchannels.list({
  "adClientId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client for which to list URL channels.
* maxResults (integer) - The maximum number of URL channels to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlchannels.insert
Add a new URL channel to the host AdSense account.


```js
google_adsensehost.urlchannels.insert({
  "adClientId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client to which the new URL channel will be added.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlchannels.delete
Delete a URL channel from the host AdSense account.


```js
google_adsensehost.urlchannels.delete({
  "adClientId": "",
  "urlChannelId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client from which to delete the URL channel.
* urlChannelId (string) **required** - URL channel to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### associationsessions.start
Create an association session for initiating an association with an AdSense user.


```js
google_adsensehost.associationsessions.start({
  "productCode": [],
  "websiteUrl": ""
}, context)
```

#### Parameters
* productCode (array) **required** - Products to associate with the user.
* websiteUrl (string) **required** - The URL of the user's hosted website.
* userLocale (string) - The preferred locale of the user.
* websiteLocale (string) - The locale of the user's hosted website.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### associationsessions.verify
Verify an association session after the association callback returns from AdSense signup.


```js
google_adsensehost.associationsessions.verify({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - The token returned to the association callback URL.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adsensehost.reports.generate({
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* startDate (string) **required** - Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
* endDate (string) **required** - End of the date range to report on in "YYYY-MM-DD" format, inclusive.
* dimension (array) - Dimensions to base the report on.
* filter (array) - Filters to be run on the report.
* locale (string) - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
* maxResults (integer) - The maximum number of rows of report data to return.
* metric (array) - Numeric columns to include in the report.
* sort (array) - The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
* startIndex (integer) - Index of the first row of report data to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

