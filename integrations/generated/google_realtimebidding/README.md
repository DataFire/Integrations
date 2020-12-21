# @datafire/google_realtimebidding

Client library for Real-time Bidding API

## Installation and Usage
```bash
npm install --save @datafire/google_realtimebidding
```
```js
let google_realtimebidding = require('@datafire/google_realtimebidding').create({
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

Allows external bidders to manage their RTB integration with Google. This includes managing bidder endpoints, QPS quotas, configuring what ad inventory to receive via pretargeting, submitting creatives for verification, and accessing creative metadata such as approval status.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_realtimebidding.oauthCallback({
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
google_realtimebidding.oauthRefresh(null, context)
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

### realtimebidding.bidders.pretargetingConfigs.delete
Deletes a pretargeting configuration.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the pretargeting configuration to delete. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
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

### realtimebidding.buyers.userLists.get
Gets a user list by its name.


```js
google_realtimebidding.realtimebidding.buyers.userLists.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the user list to be retrieved. See UserList.name.
  * view `string` (values: CREATIVE_VIEW_UNSPECIFIED, SERVING_DECISION_ONLY, FULL): Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
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
* output [UserList](#userlist)

### realtimebidding.buyers.creatives.patch
Updates a creative.


```js
google_realtimebidding.realtimebidding.buyers.creatives.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response.
  * updateMask `string`: Field mask to use for partial in-place updates.
  * body [Creative](#creative)
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
* output [Creative](#creative)

### realtimebidding.buyers.userLists.update
Update the given user list. Only user lists with URLRestrictions can be updated.


```js
google_realtimebidding.realtimebidding.buyers.userLists.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list.
  * body [UserList](#userlist)
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
* output [UserList](#userlist)

### realtimebidding.bidders.pretargetingConfigs.activate
Activates a pretargeting configuration.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.activate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
  * body [ActivatePretargetingConfigRequest](#activatepretargetingconfigrequest)
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
* output [PretargetingConfig](#pretargetingconfig)

### realtimebidding.buyers.userLists.close
Change the status of a user list to CLOSED. This prevents new users from being added to the user list.


```js
google_realtimebidding.realtimebidding.buyers.userLists.close({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the user list to close. See UserList.name
  * body [CloseUserListRequest](#closeuserlistrequest)
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
* output [UserList](#userlist)

### realtimebidding.buyers.userLists.getRemarketingTag
Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.


```js
google_realtimebidding.realtimebidding.buyers.userLists.getRemarketingTag({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. To fetch remarketing tag for an account, name must follow the pattern `buyers/{accountId}` where `{accountId}` represents ID of a buyer that owns the remarketing tag. For a bidder accessing remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch remarketing tag for a specific user list, name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
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
* output [GetRemarketingTagResponse](#getremarketingtagresponse)

### realtimebidding.buyers.userLists.open
Change the status of a user list to OPEN. This allows new users to be added to the user list.


```js
google_realtimebidding.realtimebidding.buyers.userLists.open({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the user list to open. See UserList.name
  * body [OpenUserListRequest](#openuserlistrequest)
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
* output [UserList](#userlist)

### realtimebidding.bidders.pretargetingConfigs.suspend
Suspends a pretargeting configuration.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.suspend({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
  * body [SuspendPretargetingConfigRequest](#suspendpretargetingconfigrequest)
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
* output [PretargetingConfig](#pretargetingconfig)

### realtimebidding.buyers.creatives.list
Lists creatives.


```js
google_realtimebidding.realtimebidding.buyers.creatives.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, e.g., for all creatives pertaining to bidder (`123`), use `bidders/123`.
  * filter `string`: Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
  * pageSize `integer`: Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method.
  * view `string` (values: CREATIVE_VIEW_UNSPECIFIED, SERVING_DECISION_ONLY, FULL): Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
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
* output [ListCreativesResponse](#listcreativesresponse)

### realtimebidding.buyers.creatives.create
Creates a creative.


```js
google_realtimebidding.realtimebidding.buyers.creatives.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer.
  * body [Creative](#creative)
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
* output [Creative](#creative)

### realtimebidding.bidders.creatives.watch
Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.


```js
google_realtimebidding.realtimebidding.bidders.creatives.watch({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId}`.
  * body [WatchCreativesRequest](#watchcreativesrequest)
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
* output [WatchCreativesResponse](#watchcreativesresponse)

### realtimebidding.bidders.pretargetingConfigs.list
Lists all pretargeting configurations for a single bidder.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the bidder whose pretargeting configurations will be listed. Format: bidders/{bidderAccountId}
  * pageSize `integer`: The maximum number of pretargeting configurations to return. If unspecified, at most 10 pretargeting configurations will be returned. The maximum value is 100; values above 100 will be coerced to 100.
  * pageToken `string`: A token identifying a page of results the server should return. This value is received from a previous `ListPretargetingConfigs` call in ListPretargetingConfigsResponse.nextPageToken.
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
* output [ListPretargetingConfigsResponse](#listpretargetingconfigsresponse)

### realtimebidding.bidders.pretargetingConfigs.create
Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the bidder to create the pretargeting configuration for. Format: bidders/{bidderAccountId}
  * body [PretargetingConfig](#pretargetingconfig)
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
* output [PretargetingConfig](#pretargetingconfig)

### realtimebidding.buyers.userLists.list
Lists the user lists visible to the current user.


```js
google_realtimebidding.realtimebidding.buyers.userLists.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
  * pageSize `integer`: The number of results to return per page.
  * pageToken `string`: Continuation page token (as received from a previous response).
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
* output [ListUserListsResponse](#listuserlistsresponse)

### realtimebidding.buyers.userLists.create
Create a new user list.


```js
google_realtimebidding.realtimebidding.buyers.userLists.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent buyer of the user list to be retrieved that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
  * body [UserList](#userlist)
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
* output [UserList](#userlist)

### realtimebidding.bidders.pretargetingConfigs.addTargetedApps
Adds targeted apps to the pretargeting configuration.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.addTargetedApps({
  "pretargetingConfig": ""
}, context)
```

#### Input
* input `object`
  * pretargetingConfig **required** `string`: Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
  * body [AddTargetedAppsRequest](#addtargetedappsrequest)
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
* output [PretargetingConfig](#pretargetingconfig)

### realtimebidding.bidders.pretargetingConfigs.addTargetedPublishers
Adds targeted publishers to the pretargeting config.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.addTargetedPublishers({
  "pretargetingConfig": ""
}, context)
```

#### Input
* input `object`
  * pretargetingConfig **required** `string`: Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
  * body [AddTargetedPublishersRequest](#addtargetedpublishersrequest)
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
* output [PretargetingConfig](#pretargetingconfig)

### realtimebidding.bidders.pretargetingConfigs.addTargetedSites
Adds targeted sites to the pretargeting configuration.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.addTargetedSites({
  "pretargetingConfig": ""
}, context)
```

#### Input
* input `object`
  * pretargetingConfig **required** `string`: Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
  * body [AddTargetedSitesRequest](#addtargetedsitesrequest)
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
* output [PretargetingConfig](#pretargetingconfig)

### realtimebidding.bidders.pretargetingConfigs.removeTargetedApps
Removes targeted apps from the pretargeting configuration.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.removeTargetedApps({
  "pretargetingConfig": ""
}, context)
```

#### Input
* input `object`
  * pretargetingConfig **required** `string`: Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
  * body [RemoveTargetedAppsRequest](#removetargetedappsrequest)
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
* output [PretargetingConfig](#pretargetingconfig)

### realtimebidding.bidders.pretargetingConfigs.removeTargetedPublishers
Removes targeted publishers from the pretargeting config.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.removeTargetedPublishers({
  "pretargetingConfig": ""
}, context)
```

#### Input
* input `object`
  * pretargetingConfig **required** `string`: Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
  * body [RemoveTargetedPublishersRequest](#removetargetedpublishersrequest)
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
* output [PretargetingConfig](#pretargetingconfig)

### realtimebidding.bidders.pretargetingConfigs.removeTargetedSites
Removes targeted sites from the pretargeting configuration.


```js
google_realtimebidding.realtimebidding.bidders.pretargetingConfigs.removeTargetedSites({
  "pretargetingConfig": ""
}, context)
```

#### Input
* input `object`
  * pretargetingConfig **required** `string`: Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
  * body [RemoveTargetedSitesRequest](#removetargetedsitesrequest)
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
* output [PretargetingConfig](#pretargetingconfig)



## Definitions

### ActivatePretargetingConfigRequest
* ActivatePretargetingConfigRequest `object`: A request to activate a pretargeting configuration. Sets the configuration's state to ACTIVE.

### AddTargetedAppsRequest
* AddTargetedAppsRequest `object`: A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
  * appIds `array`: A list of app IDs to target in the pretargeting configuration. These values will be added to the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values.
    * items `string`
  * targetingMode `string` (values: TARGETING_MODE_UNSPECIFIED, INCLUSIVE, EXCLUSIVE): Required. The targeting mode that should be applied to the list of app IDs. If there are existing targeted app IDs, must be equal to the existing PretargetingConfig.appTargeting.mobileAppTargeting.targetingMode or a 400 bad request error will be returned.

### AddTargetedPublishersRequest
* AddTargetedPublishersRequest `object`: A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
  * publisherIds `array`: A list of publisher IDs to target in the pretargeting configuration. These values will be added to the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details.
    * items `string`
  * targetingMode `string` (values: TARGETING_MODE_UNSPECIFIED, INCLUSIVE, EXCLUSIVE): Required. The targeting mode that should be applied to the list of publisher IDs. If are existing publisher IDs, must be equal to the existing PretargetingConfig.publisherTargeting.targetingMode or a 400 bad request error will be returned.

### AddTargetedSitesRequest
* AddTargetedSitesRequest `object`: A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
  * sites `array`: A list of site URLs to target in the pretargeting configuration. These values will be added to the list of targeted URLs in PretargetingConfig.webTargeting.values.
    * items `string`
  * targetingMode `string` (values: TARGETING_MODE_UNSPECIFIED, INCLUSIVE, EXCLUSIVE): Required. The targeting mode that should be applied to the list of site URLs. If there are existing targeted sites, must be equal to the existing PretargetingConfig.webTargeting.targetingMode or a 400 bad request error will be returned.

### AdvertiserAndBrand
* AdvertiserAndBrand `object`: Detected advertiser and brand information.
  * advertiserId `string`: See https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt for the list of possible values. Can be used to filter the response of the creatives.list method.
  * advertiserName `string`: Advertiser name. Can be used to filter the response of the creatives.list method.
  * brandId `string`: Detected brand ID or zero if no brand has been detected. See https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt for the list of possible values. Can be used to filter the response of the creatives.list method.
  * brandName `string`: Brand name. Can be used to filter the response of the creatives.list method.

### AppTargeting
* AppTargeting `object`: A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
  * mobileAppCategoryTargeting [NumericTargetingDimension](#numerictargetingdimension)
  * mobileAppTargeting [StringTargetingDimension](#stringtargetingdimension)

### CloseUserListRequest
* CloseUserListRequest `object`: A request to close a specified user list.

### Creative
* Creative `object`: A creative and its classification data.
  * accountId `string`: Output only. ID of the buyer account that this creative is owned by. Can be used to filter the response of the creatives.list method with equality and inequality check.
  * adChoicesDestinationUrl `string`: The link to AdChoices destination page. This is only supported for native ads.
  * advertiserName `string`: The name of the company being advertised in the creative. Can be used to filter the response of the creatives.list method.
  * agencyId `string`: The agency ID for this creative.
  * apiUpdateTime `string`: Output only. The last update timestamp of the creative via API.
  * creativeFormat `string` (values: CREATIVE_FORMAT_UNSPECIFIED, HTML, VIDEO, NATIVE): Output only. The format of this creative. Can be used to filter the response of the creatives.list method.
  * creativeId `string`: Buyer-specific creative ID that references this creative in bid responses. This field is Ignored in update operations. Can be used to filter the response of the creatives.list method. The maximum length of the creative ID is 128 bytes.
  * creativeServingDecision [CreativeServingDecision](#creativeservingdecision)
  * dealIds `array`: Output only. IDs of all of the deals with which this creative has been used in bidding. Can be used to filter the response of the creatives.list method.
    * items `string`
  * declaredAttributes `array`: All declared attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto") contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
    * items `string` (values: ATTRIBUTE_UNSPECIFIED, IMAGE_RICH_MEDIA, ADOBE_FLASH_FLV, IS_TAGGED, IS_COOKIE_TARGETED, IS_USER_INTEREST_TARGETED, EXPANDING_DIRECTION_NONE, EXPANDING_DIRECTION_UP, EXPANDING_DIRECTION_DOWN, EXPANDING_DIRECTION_LEFT, EXPANDING_DIRECTION_RIGHT, EXPANDING_DIRECTION_UP_LEFT, EXPANDING_DIRECTION_UP_RIGHT, EXPANDING_DIRECTION_DOWN_LEFT, EXPANDING_DIRECTION_DOWN_RIGHT, CREATIVE_TYPE_HTML, CREATIVE_TYPE_VAST_VIDEO, EXPANDING_DIRECTION_UP_OR_DOWN, EXPANDING_DIRECTION_LEFT_OR_RIGHT, EXPANDING_DIRECTION_ANY_DIAGONAL, EXPANDING_ACTION_ROLLOVER_TO_EXPAND, INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH, RICH_MEDIA_CAPABILITY_TYPE_MRAID, RICH_MEDIA_CAPABILITY_TYPE_FLASH, RICH_MEDIA_CAPABILITY_TYPE_HTML5, SKIPPABLE_INSTREAM_VIDEO, RICH_MEDIA_CAPABILITY_TYPE_SSL, RICH_MEDIA_CAPABILITY_TYPE_NON_SSL, RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL, NON_SKIPPABLE_INSTREAM_VIDEO, NATIVE_ELIGIBILITY_ELIGIBLE, NON_VPAID, NATIVE_ELIGIBILITY_NOT_ELIGIBLE, ANY_INTERSTITIAL, NON_INTERSTITIAL, IN_BANNER_VIDEO, RENDERING_SIZELESS_ADX, OMSDK_1_0)
  * declaredClickThroughUrls `array`: The set of declared destination URLs for the creative. Can be used to filter the response of the creatives.list method.
    * items `string`
  * declaredRestrictedCategories `array`: All declared restricted categories for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.
    * items `string` (values: RESTRICTED_CATEGORY_UNSPECIFIED, ALCOHOL)
  * declaredVendorIds `array`: IDs for the declared ad technology vendors that may be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method.
    * items `integer`
  * html [HtmlContent](#htmlcontent)
  * impressionTrackingUrls `array`: The set of URLs to be called to record an impression.
    * items `string`
  * name `string`: Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response.
  * native [NativeContent](#nativecontent)
  * restrictedCategories `array`: All restricted categories for the ads that may be shown from this creative.
    * items `string` (values: RESTRICTED_CATEGORY_UNSPECIFIED, ALCOHOL)
  * version `integer`: Output only. The version of this creative. Version for a new creative is 1 and it increments during subsequent creative updates.
  * video [VideoContent](#videocontent)

### CreativeDimensions
* CreativeDimensions `object`: The dimensions of a creative. This applies to only HTML and Native creatives.
  * height `string`: The height of the creative in pixels.
  * width `string`: The width of the creative in pixels.

### CreativeServingDecision
* CreativeServingDecision `object`: Top level status and detected attributes of a creative.
  * chinaPolicyCompliance [PolicyCompliance](#policycompliance)
  * dealsPolicyCompliance [PolicyCompliance](#policycompliance)
  * detectedAdvertisers `array`: Detected advertisers and brands.
    * items [AdvertiserAndBrand](#advertiserandbrand)
  * detectedAttributes `array`: Publisher-excludable attributes that were detected for this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
    * items `string` (values: ATTRIBUTE_UNSPECIFIED, IMAGE_RICH_MEDIA, ADOBE_FLASH_FLV, IS_TAGGED, IS_COOKIE_TARGETED, IS_USER_INTEREST_TARGETED, EXPANDING_DIRECTION_NONE, EXPANDING_DIRECTION_UP, EXPANDING_DIRECTION_DOWN, EXPANDING_DIRECTION_LEFT, EXPANDING_DIRECTION_RIGHT, EXPANDING_DIRECTION_UP_LEFT, EXPANDING_DIRECTION_UP_RIGHT, EXPANDING_DIRECTION_DOWN_LEFT, EXPANDING_DIRECTION_DOWN_RIGHT, CREATIVE_TYPE_HTML, CREATIVE_TYPE_VAST_VIDEO, EXPANDING_DIRECTION_UP_OR_DOWN, EXPANDING_DIRECTION_LEFT_OR_RIGHT, EXPANDING_DIRECTION_ANY_DIAGONAL, EXPANDING_ACTION_ROLLOVER_TO_EXPAND, INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH, RICH_MEDIA_CAPABILITY_TYPE_MRAID, RICH_MEDIA_CAPABILITY_TYPE_FLASH, RICH_MEDIA_CAPABILITY_TYPE_HTML5, SKIPPABLE_INSTREAM_VIDEO, RICH_MEDIA_CAPABILITY_TYPE_SSL, RICH_MEDIA_CAPABILITY_TYPE_NON_SSL, RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL, NON_SKIPPABLE_INSTREAM_VIDEO, NATIVE_ELIGIBILITY_ELIGIBLE, NON_VPAID, NATIVE_ELIGIBILITY_NOT_ELIGIBLE, ANY_INTERSTITIAL, NON_INTERSTITIAL, IN_BANNER_VIDEO, RENDERING_SIZELESS_ADX, OMSDK_1_0)
  * detectedClickThroughUrls `array`: The set of detected destination URLs for the creative. Can be used to filter the response of the creatives.list method.
    * items `string`
  * detectedDomains `array`: The detected domains for this creative.
    * items `string`
  * detectedLanguages `array`: The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes. Can be used to filter the response of the creatives.list method.
    * items `string`
  * detectedProductCategories `array`: Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs. Can be used to filter the response of the creatives.list method.
    * items `integer`
  * detectedSensitiveCategories `array`: Detected sensitive categories, if any. Can be used to filter the response of the creatives.list method. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.
    * items `integer`
  * detectedVendorIds `array`: IDs of the ad technology vendors that were detected to be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method. If the `allowed_vendor_type` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) does not contain one of the vendor type IDs that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction.
    * items `integer`
  * lastStatusUpdate `string`: The last time the creative status was updated. Can be used to filter the response of the creatives.list method.
  * networkPolicyCompliance [PolicyCompliance](#policycompliance)
  * platformPolicyCompliance [PolicyCompliance](#policycompliance)
  * russiaPolicyCompliance [PolicyCompliance](#policycompliance)

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### DestinationNotCrawlableEvidence
* DestinationNotCrawlableEvidence `object`: Evidence that the creative's destination URL was not crawlable by Google.
  * crawlTime `string`: Approximate time of the crawl.
  * crawledUrl `string`: Destination URL that was attempted to be crawled.
  * reason `string` (values: REASON_UNSPECIFIED, UNREACHABLE_ROBOTS, TIMEOUT_ROBOTS, ROBOTED_DENIED, UNKNOWN): Reason of destination not crawlable.

### DestinationNotWorkingEvidence
* DestinationNotWorkingEvidence `object`: Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.
  * dnsError `string` (values: DNS_ERROR_UNSPECIFIED, ERROR_DNS, GOOGLE_CRAWLER_DNS_ISSUE): DNS lookup errors.
  * expandedUrl `string`: The full non-working URL.
  * httpError `integer`: HTTP error code (e.g. 404 or 5xx)
  * invalidPage `string` (values: INVALID_PAGE_UNSPECIFIED, EMPTY_OR_ERROR_PAGE): Page was crawled successfully, but was detected as either a page with no content or an error page.
  * lastCheckTime `string`: Approximate time when the ad destination was last checked.
  * platform `string` (values: PLATFORM_UNSPECIFIED, PERSONAL_COMPUTER, ANDROID, IOS): Platform of the non-working URL.
  * redirectionError `string` (values: REDIRECTION_ERROR_UNSPECIFIED, TOO_MANY_REDIRECTS, INVALID_REDIRECT, EMPTY_REDIRECT, REDIRECT_ERROR_UNKNOWN): HTTP redirect chain error.
  * urlRejected `string` (values: URL_REJECTED_UNSPECIFIED, BAD_REQUEST, MALFORMED_URL, URL_REJECTED_UNKNOWN): Rejected because of malformed URLs or invalid requests.

### DestinationUrlEvidence
* DestinationUrlEvidence `object`: The full landing page URL of the destination.
  * destinationUrl `string`: The full landing page URL of the destination.

### DomainCallEvidence
* DomainCallEvidence `object`: Number of HTTP calls made by a creative, broken down by domain.
  * topHttpCallDomains `array`: Breakdown of the most frequent domains called via HTTP by the creative.
    * items [DomainCalls](#domaincalls)
  * totalHttpCallCount `integer`: The total number of HTTP calls made by the creative, including but not limited to the number of calls in the top_http_call_domains.

### DomainCalls
* DomainCalls `object`: The number of HTTP calls made to the given domain.
  * domain `string`: The domain name.
  * httpCallCount `integer`: Number of HTTP calls made to the domain.

### DownloadSizeEvidence
* DownloadSizeEvidence `object`: Total download size and URL-level download size breakdown for resources in a creative.
  * topUrlDownloadSizeBreakdowns `array`: Download size broken down by URLs with the top download size.
    * items [UrlDownloadSize](#urldownloadsize)
  * totalDownloadSizeKb `integer`: Total download size (in kilobytes) for all the resources in the creative.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GetRemarketingTagResponse
* GetRemarketingTagResponse `object`: Response for a request to get remarketing tag.
  * snippet `string`: A HTML tag that can be placed on the advertiser's page to add users to a user list. For more information and code samples on using snippet on your website refer to [Tag your site for remarketing]( https://support.google.com/google-ads/answer/2476688).

### HtmlContent
* HtmlContent `object`: HTML content for a creative.
  * height `integer`: The height of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method.
  * snippet `string`: The HTML snippet that displays the ad when inserted in the web page.
  * width `integer`: The width of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method.

### HttpCallEvidence
* HttpCallEvidence `object`: HTTP calls made by a creative that resulted in policy violations.
  * urls `array`: URLs of HTTP calls made by the creative.
    * items `string`

### HttpCookieEvidence
* HttpCookieEvidence `object`: Evidence for HTTP cookie-related policy violations.
  * cookieNames `array`: Names of cookies that violate Google policies. For TOO_MANY_COOKIES policy, this will be the cookie names of top domains with the largest number of cookies. For other policies, this will be all the cookie names that violate the policy.
    * items `string`
  * maxCookieCount `integer`: The largest number of cookies set by a creative. If this field is set, cookie_names above will be set to the cookie names of top domains with the largest number of cookies. This field will only be set for TOO_MANY_COOKIES policy.

### Image
* Image `object`: An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
  * height `integer`: Image height in pixels.
  * url `string`: The URL of the image.
  * width `integer`: Image width in pixels.

### ListCreativesResponse
* ListCreativesResponse `object`: A response for listing creatives.
  * creatives `array`: The list of creatives.
    * items [Creative](#creative)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.pageToken field in the subsequent call to the `ListCreatives` method to retrieve the next page of results.

### ListPretargetingConfigsResponse
* ListPretargetingConfigsResponse `object`: A response containing pretargeting configurations.
  * nextPageToken `string`: A token which can be passed to a subsequent call to the `ListPretargetingConfigs` method to retrieve the next page of results in ListPretargetingConfigsRequest.pageToken.
  * pretargetingConfigs `array`: List of pretargeting configurations.
    * items [PretargetingConfig](#pretargetingconfig)

### ListUserListsResponse
* ListUserListsResponse `object`: The list user list response.
  * nextPageToken `string`: The continuation page token to send back to the server in a subsequent request. Due to a currently known issue, it is recommended that the caller keep invoking the list method till the time a next page token is not returned (even if the result set is empty).
  * userLists `array`: List of user lists from the search.
    * items [UserList](#userlist)

### MediaFile
* MediaFile `object`: Information about each media file in the VAST.
  * bitrate `string`: Bitrate of the video file, in Kbps. Can be used to filter the response of the creatives.list method.
  * mimeType `string` (values: VIDEO_MIME_TYPE_UNSPECIFIED, MIME_VIDEO_XFLV, MIME_VIDEO_WEBM, MIME_VIDEO_MP4, MIME_VIDEO_OGG, MIME_VIDEO_YT_HOSTED, MIME_VIDEO_X_MS_WMV, MIME_VIDEO_3GPP, MIME_VIDEO_MOV, MIME_APPLICATION_SWF, MIME_APPLICATION_SURVEY, MIME_APPLICATION_JAVASCRIPT, MIME_APPLICATION_SILVERLIGHT, MIME_APPLICATION_MPEGURL, MIME_APPLICATION_MPEGDASH, MIME_AUDIO_MP4A, MIME_AUDIO_MP3, MIME_AUDIO_OGG): The MIME type of this media file. Can be used to filter the response of the creatives.list method.

### NativeContent
* NativeContent `object`: Native content for a creative.
  * advertiserName `string`: The name of the advertiser or sponsor, to be displayed in the ad creative.
  * appIcon [Image](#image)
  * body `string`: A long description of the ad.
  * callToAction `string`: A label for the button that the user is supposed to click.
  * clickLinkUrl `string`: The URL that the browser/SDK will load when the user clicks the ad.
  * clickTrackingUrl `string`: The URL to use for click tracking.
  * headline `string`: A short title for the ad.
  * image [Image](#image)
  * logo [Image](#image)
  * priceDisplayText `string`: The price of the promoted app including currency info.
  * starRating `number`: The app rating in the app store. Must be in the range [0-5].
  * videoUrl `string`: The URL to fetch a native video ad.

### NumericTargetingDimension
* NumericTargetingDimension `object`: Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
  * excludedIds `array`: The IDs excluded in a configuration.
    * items `string`
  * includedIds `array`: The IDs included in a configuration.
    * items `string`

### OpenUserListRequest
* OpenUserListRequest `object`: A request to open a specified user list.

### PolicyCompliance
* PolicyCompliance `object`: Policy compliance of the creative for a transaction type or a region.
  * status `string` (values: STATUS_UNSPECIFIED, PENDING_REVIEW, DISAPPROVED, APPROVED): Serving status for the given transaction type (e.g., open auction, deals) or region (e.g., China, Russia). Can be used to filter the response of the creatives.list method.
  * topics `array`: Topics related to the policy compliance for this transaction type (e.g., open auction, deals) or region (e.g., China, Russia). Topics may be present only if status is DISAPPROVED.
    * items [PolicyTopicEntry](#policytopicentry)

### PolicyTopicEntry
* PolicyTopicEntry `object`: Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
  * evidences `array`: Pieces of evidence associated with this policy topic entry.
    * items [PolicyTopicEvidence](#policytopicevidence)
  * helpCenterUrl `string`: URL of the help center article describing this policy topic.
  * policyTopic `string`: Policy topic this entry refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time. Can be used to filter the response of the creatives.list method

### PolicyTopicEvidence
* PolicyTopicEvidence `object`: Evidence associated with a policy topic entry.
  * destinationNotCrawlable [DestinationNotCrawlableEvidence](#destinationnotcrawlableevidence)
  * destinationNotWorking [DestinationNotWorkingEvidence](#destinationnotworkingevidence)
  * destinationUrl [DestinationUrlEvidence](#destinationurlevidence)
  * domainCall [DomainCallEvidence](#domaincallevidence)
  * downloadSize [DownloadSizeEvidence](#downloadsizeevidence)
  * httpCall [HttpCallEvidence](#httpcallevidence)
  * httpCookie [HttpCookieEvidence](#httpcookieevidence)

### PretargetingConfig
* PretargetingConfig `object`: Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
  * allowedUserTargetingModes `array`: Targeting modes included by this configuration. A bid request must allow all the specified targeting modes. An unset value allows all bid requests to be sent, regardless of which targeting modes they allow.
    * items `string` (values: USER_TARGETING_MODE_UNSPECIFIED, REMARKETING_ADS, INTEREST_BASED_TARGETING)
  * appTargeting [AppTargeting](#apptargeting)
  * billingId `string`: Output only. The identifier that corresponds to this pretargeting configuration that helps buyers track and attribute their spend across their own arbitrary divisions. If a bid request matches more than one configuration, the buyer chooses which billing_id to attribute each of their bids.
  * displayName `string`: The diplay name associated with this configuration. This name must be unique among all the pretargeting configurations a bidder has.
  * excludedContentLabelIds `array`: The sensitive content category label IDs excluded in this configuration. Bid requests for inventory with any of the specified content label IDs will not be sent. Refer to this file https://storage.googleapis.com/adx-rtb-dictionaries/content-labels.txt for category IDs.
    * items `string`
  * geoTargeting [NumericTargetingDimension](#numerictargetingdimension)
  * includedCreativeDimensions `array`: Creative dimensions included by this configuration. Only bid requests eligible for at least one of the specified creative dimensions will be sent. An unset value allows all bid requests to be sent, regardless of creative dimension.
    * items [CreativeDimensions](#creativedimensions)
  * includedEnvironments `array`: Environments that are being included. Bid requests will not be sent for a given environment if it is not included. Further restrictions can be applied to included environments to target only a subset of its inventory. An unset value includes all environments.
    * items `string` (values: ENVIRONMENT_UNSPECIFIED, APP, WEB)
  * includedFormats `array`: Creative formats included by this configuration. Only bid requests eligible for at least one of the specified creative formats will be sent. An unset value will allow all bid requests to be sent, regardless of format.
    * items `string` (values: CREATIVE_FORMAT_UNSPECIFIED, HTML, VAST, NATIVE)
  * includedLanguages `array`: The languages included in this configuration, represented by their language code. See https://developers.google.com/adwords/api/docs/appendix/languagecodes.
    * items `string`
  * includedMobileOperatingSystemIds `array`: The mobile operating systems included in this configuration as defined in https://storage.googleapis.com/adx-rtb-dictionaries/mobile-os.csv
    * items `string`
  * includedPlatforms `array`: The platforms included by this configration. Bid requests for devices with the specified platform types will be sent. An unset value allows all bid requests to be sent, regardless of platform.
    * items `string` (values: PLATFORM_UNSPECIFIED, PERSONAL_COMPUTER, PHONE, TABLET, CONNECTED_TV)
  * includedUserIdTypes `array`: User identifier types included in this configuration. At least one of the user identifier types specified in this list must be available for the bid request to be sent.
    * items `string` (values: USER_ID_TYPE_UNSPECIFIED, HOSTED_MATCH_DATA, GOOGLE_COOKIE, DEVICE_ID)
  * interstitialTargeting `string` (values: INTERSTITIAL_TARGETING_UNSPECIFIED, ONLY_INTERSTITIAL_REQUESTS, ONLY_NON_INTERSTITIAL_REQUESTS): The interstitial targeting specified for this configuration. The unset value will allow bid requests to be sent regardless of whether they are for interstitials or not.
  * invalidGeoIds `array`: Output only. Existing included or excluded geos that are invalid. Previously targeted geos may become invalid due to privacy restrictions.
    * items `string`
  * maximumQps `string`: The maximum QPS threshold for this configuration. The bidder should receive no more than this number of bid requests matching this configuration per second across all their bidding endpoints among all trading locations. Further information available at https://developers.google.com/authorized-buyers/rtb/peer-guide
  * minimumViewabilityDecile `integer`: The targeted minimum viewability decile, ranging in values [0, 10]. A value of 5 means that the configuration will only match adslots for which we predict at least 50% viewability. Values > 10 will be rounded down to 10. An unset value or a value of 0 indicates that bid requests will be sent regardless of viewability.
  * name `string`: Output only. Name of the pretargeting configuration that must follow the pattern `bidders/{bidder_account_id}/pretargetingConfigs/{config_id}`
  * publisherTargeting [StringTargetingDimension](#stringtargetingdimension)
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, SUSPENDED): Output only. The state of this pretargeting configuration.
  * userListTargeting [NumericTargetingDimension](#numerictargetingdimension)
  * verticalTargeting [NumericTargetingDimension](#numerictargetingdimension)
  * webTargeting [StringTargetingDimension](#stringtargetingdimension)

### RemoveTargetedAppsRequest
* RemoveTargetedAppsRequest `object`: A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
  * appIds `array`: A list of app IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values.
    * items `string`

### RemoveTargetedPublishersRequest
* RemoveTargetedPublishersRequest `object`: A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
  * publisherIds `array`: A list of publisher IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details.
    * items `string`

### RemoveTargetedSitesRequest
* RemoveTargetedSitesRequest `object`: A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
  * sites `array`: A list of site URLs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted URLs in PretargetingConfig.webTargeting.values.
    * items `string`

### StringTargetingDimension
* StringTargetingDimension `object`: Generic targeting with string values used in app, website and publisher targeting.
  * targetingMode `string` (values: TARGETING_MODE_UNSPECIFIED, INCLUSIVE, EXCLUSIVE): How the items in this list should be targeted.
  * values `array`: The values specified.
    * items `string`

### SuspendPretargetingConfigRequest
* SuspendPretargetingConfigRequest `object`: A request to suspend a pretargeting configuration. Sets the configuration's state to SUSPENDED.

### UrlDownloadSize
* UrlDownloadSize `object`: The URL-level breakdown for the download size.
  * downloadSizeKb `integer`: Download size of the URL in kilobytes.
  * normalizedUrl `string`: The normalized URL with query parameters and fragment removed.

### UrlRestriction
* UrlRestriction `object`: Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
  * endDate [Date](#date)
  * restrictionType `string` (values: RESTRICTION_TYPE_UNSPECIFIED, CONTAINS, EQUALS, STARTS_WITH, ENDS_WITH, DOES_NOT_EQUAL, DOES_NOT_CONTAIN, DOES_NOT_START_WITH, DOES_NOT_END_WITH): The restriction type for the specified URL.
  * startDate [Date](#date)
  * url `string`: Required. The URL to use for applying the restriction on the user list.

### UserList
* UserList `object`: Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
  * description `string`: The description for the user list.
  * displayName `string`: Required. Display name of the user list. This must be unique across all user lists for a given account.
  * membershipDurationDays `string`: Required. The number of days a user's cookie stays on the user list. The field must be between 0 and 540 inclusive.
  * name `string`: Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list.
  * status `string` (values: STATUS_UNSPECIFIED, OPEN, CLOSED): Output only. The status of the user list. A new user list starts out as open.
  * urlRestriction [UrlRestriction](#urlrestriction)

### VideoContent
* VideoContent `object`: Video content for a creative.
  * videoMetadata [VideoMetadata](#videometadata)
  * videoUrl `string`: The URL to fetch a video ad.
  * videoVastXml `string`: The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard.

### VideoMetadata
* VideoMetadata `object`: Video metadata for a creative.
  * duration `string`: The duration of the ad. Can be used to filter the response of the creatives.list method.
  * isValidVast `boolean`: Is this a valid VAST ad? Can be used to filter the response of the creatives.list method.
  * isVpaid `boolean`: Is this a VPAID ad? Can be used to filter the response of the creatives.list method.
  * mediaFiles `array`: The list of all media files declared in the VAST. If there are multiple VASTs in a wrapper chain, this includes the media files from the deepest one in the chain.
    * items [MediaFile](#mediafile)
  * skipOffset `string`: The minimum duration that the user has to watch before being able to skip this ad. If the field is not set, the ad is not skippable. If the field is set, the ad is skippable. Can be used to filter the response of the creatives.list method.
  * vastVersion `string` (values: VAST_VERSION_UNSPECIFIED, VAST_VERSION_1_0, VAST_VERSION_2_0, VAST_VERSION_3_0, VAST_VERSION_4_0): The maximum VAST version across all wrapped VAST documents. Can be used to filter the response of the creatives.list method.

### WatchCreativesRequest
* WatchCreativesRequest `object`: A request to receive push notifications when any of the creatives belonging to the bidder changes status.

### WatchCreativesResponse
* WatchCreativesResponse `object`: A response for the request to receive push notification when a bidder's creatives change status.
  * subscription `string`: The Pub/Sub subscription that can be used to pull creative status notifications. This would be of the format `projects/{project_id}/subscriptions/{subscription_id}`. Subscription is created with pull delivery. All service accounts belonging to the bidder will have read access to this subscription. Subscriptions that are inactive for more than 90 days will be disabled. Please use watchCreatives to re-enable the subscription.
  * topic `string`: The Pub/Sub topic that will be used to publish creative serving status notifications. This would be of the format `projects/{project_id}/topics/{topic_id}`.


