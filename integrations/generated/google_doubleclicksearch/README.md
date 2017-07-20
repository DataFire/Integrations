# @datafire/google_doubleclicksearch

Client library for DoubleClick Search

## Installation and Usage
```bash
npm install --save datafire @datafire/google_doubleclicksearch
```

```js
let datafire = require('datafire');
let google_doubleclicksearch = require('@datafire/google_doubleclicksearch').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_doubleclicksearch: account,
  }
})

google_doubleclicksearch.reports.generate({}, context).then(data => {
  console.log(data);
})
```

## Description
Reports and modifies your advertising data in DoubleClick Search (for example, campaigns, ad groups, keywords, and conversions).

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_doubleclicksearch.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_doubleclicksearch.oauthRefresh(null, context)
```


### conversion.get
Retrieves a list of conversions from a DoubleClick Search engine account.


```js
google_doubleclicksearch.conversion.get({
  "agencyId": "",
  "advertiserId": "",
  "engineAccountId": "",
  "endDate": 0,
  "rowCount": 0,
  "startDate": 0,
  "startRow": 0
}, context)
```

#### Parameters
* agencyId (string) **required** - Numeric ID of the agency.
* advertiserId (string) **required** - Numeric ID of the advertiser.
* engineAccountId (string) **required** - Numeric ID of the engine account.
* endDate (integer) **required** - Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
* rowCount (integer) **required** - The number of conversions to return per call.
* startDate (integer) **required** - First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
* startRow (integer) **required** - The 0-based starting index for retrieving conversions results.
* adGroupId (string) - Numeric ID of the ad group.
* adId (string) - Numeric ID of the ad.
* campaignId (string) - Numeric ID of the campaign.
* criterionId (string) - Numeric ID of the criterion.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### savedColumns.list
Retrieve the list of saved columns for a specified advertiser.


```js
google_doubleclicksearch.savedColumns.list({
  "agencyId": "",
  "advertiserId": ""
}, context)
```

#### Parameters
* agencyId (string) **required** - DS ID of the agency.
* advertiserId (string) **required** - DS ID of the advertiser.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### conversion.patch
Updates a batch of conversions in DoubleClick Search. This method supports patch semantics.


```js
google_doubleclicksearch.conversion.patch({
  "advertiserId": "",
  "agencyId": "",
  "endDate": 0,
  "engineAccountId": "",
  "rowCount": 0,
  "startDate": 0,
  "startRow": 0
}, context)
```

#### Parameters
* advertiserId (string) **required** - Numeric ID of the advertiser.
* agencyId (string) **required** - Numeric ID of the agency.
* endDate (integer) **required** - Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
* engineAccountId (string) **required** - Numeric ID of the engine account.
* rowCount (integer) **required** - The number of conversions to return per call.
* startDate (integer) **required** - First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
* startRow (integer) **required** - The 0-based starting index for retrieving conversions results.
* body (object) - A list of conversions.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### conversion.insert
Inserts a batch of new conversions into DoubleClick Search.


```js
google_doubleclicksearch.conversion.insert({}, context)
```

#### Parameters
* body (object) - A list of conversions.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### conversion.update
Updates a batch of conversions in DoubleClick Search.


```js
google_doubleclicksearch.conversion.update({}, context)
```

#### Parameters
* body (object) - A list of conversions.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### conversion.updateAvailability
Updates the availabilities of a batch of floodlight activities in DoubleClick Search.


```js
google_doubleclicksearch.conversion.updateAvailability({}, context)
```

#### Parameters
* empty (object) - The request to update availability.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.request
Inserts a report request into the reporting system.


```js
google_doubleclicksearch.reports.request({}, context)
```

#### Parameters
* reportRequest (object) - A request object used to create a DoubleClick Search report.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.generate
Generates and returns a report immediately.


```js
google_doubleclicksearch.reports.generate({}, context)
```

#### Parameters
* reportRequest (object) - A request object used to create a DoubleClick Search report.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.get
Polls for the status of a report request.


```js
google_doubleclicksearch.reports.get({
  "reportId": ""
}, context)
```

#### Parameters
* reportId (string) **required** - ID of the report request being polled.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.getFile
Downloads a report file encoded in UTF-8.


```js
google_doubleclicksearch.reports.getFile({
  "reportId": "",
  "reportFragment": 0
}, context)
```

#### Parameters
* reportId (string) **required** - ID of the report.
* reportFragment (integer) **required** - The index of the report fragment to download.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

