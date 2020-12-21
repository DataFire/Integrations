# @datafire/google_analyticsadmin

Client library for Google Analytics Admin API

## Installation and Usage
```bash
npm install --save @datafire/google_analyticsadmin
```
```js
let google_analyticsadmin = require('@datafire/google_analyticsadmin').create({
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
google_analyticsadmin.oauthCallback({
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
google_analyticsadmin.oauthRefresh(null, context)
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

### analyticsadmin.accountSummaries.list
Returns summaries of all accounts accessible by the caller.


```js
google_analyticsadmin.analyticsadmin.accountSummaries.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
  * pageToken `string`: A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
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
* output [GoogleAnalyticsAdminV1alphaListAccountSummariesResponse](#googleanalyticsadminv1alphalistaccountsummariesresponse)

### analyticsadmin.accounts.list
Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.


```js
google_analyticsadmin.analyticsadmin.accounts.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
  * pageToken `string`: A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
  * showDeleted `boolean`: Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
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
* output [GoogleAnalyticsAdminV1alphaListAccountsResponse](#googleanalyticsadminv1alphalistaccountsresponse)

### analyticsadmin.accounts.provisionAccountTicket
Requests a ticket for creating an account.


```js
google_analyticsadmin.analyticsadmin.accounts.provisionAccountTicket({}, context)
```

#### Input
* input `object`
  * body [GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest](#googleanalyticsadminv1alphaprovisionaccountticketrequest)
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
* output [GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse](#googleanalyticsadminv1alphaprovisionaccountticketresponse)

### analyticsadmin.properties.list
Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.


```js
google_analyticsadmin.analyticsadmin.properties.list({}, context)
```

#### Input
* input `object`
  * filter `string`: Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. |
  * pageSize `integer`: The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
  * pageToken `string`: A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
  * showDeleted `boolean`: Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
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
* output [GoogleAnalyticsAdminV1alphaListPropertiesResponse](#googleanalyticsadminv1alphalistpropertiesresponse)

### analyticsadmin.properties.create
Creates an "GA4" property with the specified location and attributes.


```js
google_analyticsadmin.analyticsadmin.properties.create({}, context)
```

#### Input
* input `object`
  * body [GoogleAnalyticsAdminV1alphaProperty](#googleanalyticsadminv1alphaproperty)
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
* output [GoogleAnalyticsAdminV1alphaProperty](#googleanalyticsadminv1alphaproperty)

### analyticsadmin.properties.webDataStreams.delete
Deletes a web stream on a property.


```js
google_analyticsadmin.analyticsadmin.properties.webDataStreams.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the web data stream to delete. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/123/webDataStreams/456"
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### analyticsadmin.properties.webDataStreams.getGlobalSiteTag
Returns the Site Tag for the specified web stream. Site Tags are immutable singletons.


```js
google_analyticsadmin.analyticsadmin.properties.webDataStreams.getGlobalSiteTag({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id}/webDataStreams/{stream_id}/globalSiteTag Example: "properties/123/webDataStreams/456/globalSiteTag"
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
* output [GoogleAnalyticsAdminV1alphaGlobalSiteTag](#googleanalyticsadminv1alphaglobalsitetag)

### analyticsadmin.properties.webDataStreams.updateEnhancedMeasurementSettings
Updates the singleton enhanced measurement settings for this web stream. Note that the stream must enable enhanced measurement for these settings to take effect.


```js
google_analyticsadmin.analyticsadmin.properties.webDataStreams.updateEnhancedMeasurementSettings({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
  * updateMask `string`: Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
  * body [GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings](#googleanalyticsadminv1alphaenhancedmeasurementsettings)
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
* output [GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings](#googleanalyticsadminv1alphaenhancedmeasurementsettings)

### analyticsadmin.properties.androidAppDataStreams.list
Returns child android app streams under the specified parent property. Android app streams will be excluded if the caller does not have access. Returns an empty list if no relevant android app streams are found.


```js
google_analyticsadmin.analyticsadmin.properties.androidAppDataStreams.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent property. For example, to limit results to app streams under the property with Id 123: "properties/123"
  * pageSize `integer`: The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
  * pageToken `string`: A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidAppDataStreams` must match the call that provided the page token.
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
* output [GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse](#googleanalyticsadminv1alphalistandroidappdatastreamsresponse)

### analyticsadmin.properties.androidAppDataStreams.create
Creates an android app stream with the specified location and attributes.


```js
google_analyticsadmin.analyticsadmin.properties.androidAppDataStreams.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource where this android app data stream will be created. Format: properties/123
  * body [GoogleAnalyticsAdminV1alphaAndroidAppDataStream](#googleanalyticsadminv1alphaandroidappdatastream)
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
* output [GoogleAnalyticsAdminV1alphaAndroidAppDataStream](#googleanalyticsadminv1alphaandroidappdatastream)

### analyticsadmin.properties.firebaseLinks.list
Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.


```js
google_analyticsadmin.analyticsadmin.properties.firebaseLinks.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Format: properties/{property_id} Example: properties/1234
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
* output [GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse](#googleanalyticsadminv1alphalistfirebaselinksresponse)

### analyticsadmin.properties.firebaseLinks.create
Creates a FirebaseLink. Properties can have at most one FirebaseLink.


```js
google_analyticsadmin.analyticsadmin.properties.firebaseLinks.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Format: properties/{property_id} Example: properties/1234
  * body [GoogleAnalyticsAdminV1alphaFirebaseLink](#googleanalyticsadminv1alphafirebaselink)
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
* output [GoogleAnalyticsAdminV1alphaFirebaseLink](#googleanalyticsadminv1alphafirebaselink)

### analyticsadmin.properties.googleAdsLinks.list
Lists GoogleAdsLinks on a property.


```js
google_analyticsadmin.analyticsadmin.properties.googleAdsLinks.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Example format: properties/1234
  * pageSize `integer`: The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
  * pageToken `string`: A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
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
* output [GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse](#googleanalyticsadminv1alphalistgoogleadslinksresponse)

### analyticsadmin.properties.googleAdsLinks.create
Creates a GoogleAdsLink.


```js
google_analyticsadmin.analyticsadmin.properties.googleAdsLinks.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Example format: properties/1234
  * body [GoogleAnalyticsAdminV1alphaGoogleAdsLink](#googleanalyticsadminv1alphagoogleadslink)
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
* output [GoogleAnalyticsAdminV1alphaGoogleAdsLink](#googleanalyticsadminv1alphagoogleadslink)

### analyticsadmin.properties.iosAppDataStreams.list
Returns child iOS app data streams under the specified parent property. iOS app data streams will be excluded if the caller does not have access. Returns an empty list if no relevant iOS app data streams are found.


```js
google_analyticsadmin.analyticsadmin.properties.iosAppDataStreams.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent property. For example, to list results of app streams under the property with Id 123: "properties/123"
  * pageSize `integer`: The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
  * pageToken `string`: A page token, received from a previous `ListIosAppDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIosAppDataStreams` must match the call that provided the page token.
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
* output [GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse](#googleanalyticsadminv1alphalistiosappdatastreamsresponse)

### analyticsadmin.properties.iosAppDataStreams.create
Creates an iOS app data stream with the specified location and attributes.


```js
google_analyticsadmin.analyticsadmin.properties.iosAppDataStreams.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource where this ios app data stream will be created. Format: properties/123
  * body [GoogleAnalyticsAdminV1alphaIosAppDataStream](#googleanalyticsadminv1alphaiosappdatastream)
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
* output [GoogleAnalyticsAdminV1alphaIosAppDataStream](#googleanalyticsadminv1alphaiosappdatastream)

### analyticsadmin.properties.userLinks.list
Lists all user links on an account or property.


```js
google_analyticsadmin.analyticsadmin.properties.userLinks.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Example format: accounts/1234
  * pageSize `integer`: The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 200 user links will be returned. The maximum value is 500; values above 500 will be coerced to 500.
  * pageToken `string`: A page token, received from a previous `ListUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLinks` must match the call that provided the page token.
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
* output [GoogleAnalyticsAdminV1alphaListUserLinksResponse](#googleanalyticsadminv1alphalistuserlinksresponse)

### analyticsadmin.properties.userLinks.create
Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.


```js
google_analyticsadmin.analyticsadmin.properties.userLinks.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Example format: accounts/1234
  * notifyNewUser `boolean`: Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
  * body [GoogleAnalyticsAdminV1alphaUserLink](#googleanalyticsadminv1alphauserlink)
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
* output [GoogleAnalyticsAdminV1alphaUserLink](#googleanalyticsadminv1alphauserlink)

### analyticsadmin.properties.userLinks.audit
Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.


```js
google_analyticsadmin.analyticsadmin.properties.userLinks.audit({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Example format: accounts/1234
  * body [GoogleAnalyticsAdminV1alphaAuditUserLinksRequest](#googleanalyticsadminv1alphaaudituserlinksrequest)
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
* output [GoogleAnalyticsAdminV1alphaAuditUserLinksResponse](#googleanalyticsadminv1alphaaudituserlinksresponse)

### analyticsadmin.properties.userLinks.batchCreate
Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.


```js
google_analyticsadmin.analyticsadmin.properties.userLinks.batchCreate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The account or property that all user links in the request are for. This field is required. The parent field in the CreateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
  * body [GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest](#googleanalyticsadminv1alphabatchcreateuserlinksrequest)
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
* output [GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse](#googleanalyticsadminv1alphabatchcreateuserlinksresponse)

### analyticsadmin.properties.userLinks.batchDelete
Deletes information about multiple users' links to an account or property.


```js
google_analyticsadmin.analyticsadmin.properties.userLinks.batchDelete({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The account or property that all user links in the request are for. The parent of all values for user link names to delete must match this field. Example format: accounts/1234
  * body [GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest](#googleanalyticsadminv1alphabatchdeleteuserlinksrequest)
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### analyticsadmin.properties.userLinks.batchGet
Gets information about multiple users' links to an account or property.


```js
google_analyticsadmin.analyticsadmin.properties.userLinks.batchGet({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The account or property that all user links in the request are for. The parent of all provided values for the 'names' field must match this field. Example format: accounts/1234
  * names `array`: Required. The names of the user links to retrieve. A maximum of 1000 user links can be retrieved in a batch. Format: accounts/{accountId}/userLinks/{userLinkId}
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
* output [GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse](#googleanalyticsadminv1alphabatchgetuserlinksresponse)

### analyticsadmin.properties.userLinks.batchUpdate
Updates information about multiple users' links to an account or property.


```js
google_analyticsadmin.analyticsadmin.properties.userLinks.batchUpdate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The account or property that all user links in the request are for. The parent field in the UpdateUserLinkRequest messages must either be empty or match this field. Example format: accounts/1234
  * body [GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest](#googleanalyticsadminv1alphabatchupdateuserlinksrequest)
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
* output [GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse](#googleanalyticsadminv1alphabatchupdateuserlinksresponse)

### analyticsadmin.properties.webDataStreams.list
Returns child web data streams under the specified parent property. Web data streams will be excluded if the caller does not have access. Returns an empty list if no relevant web data streams are found.


```js
google_analyticsadmin.analyticsadmin.properties.webDataStreams.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent property. For example, to list results of web streams under the property with Id 123: "properties/123"
  * pageSize `integer`: The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
  * pageToken `string`: A page token, received from a previous `ListWebDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWebDataStreams` must match the call that provided the page token.
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
* output [GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse](#googleanalyticsadminv1alphalistwebdatastreamsresponse)

### analyticsadmin.properties.webDataStreams.create
Creates a web stream with the specified location and attributes.


```js
google_analyticsadmin.analyticsadmin.properties.webDataStreams.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource where this web data stream will be created. Format: properties/123
  * body [GoogleAnalyticsAdminV1alphaWebDataStream](#googleanalyticsadminv1alphawebdatastream)
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
* output [GoogleAnalyticsAdminV1alphaWebDataStream](#googleanalyticsadminv1alphawebdatastream)



## Definitions

### GoogleAnalyticsAdminV1alphaAccount
* GoogleAnalyticsAdminV1alphaAccount `object`: A resource message representing a Google Analytics account.
  * countryCode `string`: Country of business. Must be a non-deprecated code for a UN M.49 region. https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html
  * createTime `string`: Output only. Time when this account was originally created.
  * deleted `boolean`: Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested.
  * displayName `string`: Required. Human-readable display name for this account.
  * name `string`: Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
  * updateTime `string`: Output only. Time when account payload fields were last updated.

### GoogleAnalyticsAdminV1alphaAccountSummary
* GoogleAnalyticsAdminV1alphaAccountSummary `object`: A virtual resource representing an overview of an account and all its child GA4 properties.
  * account `string`: Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000"
  * displayName `string`: Display name for the account referred to in this account summary.
  * name `string`: Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000"
  * propertySummaries `array`: List of summaries for child accounts of this account.
    * items [GoogleAnalyticsAdminV1alphaPropertySummary](#googleanalyticsadminv1alphapropertysummary)

### GoogleAnalyticsAdminV1alphaAndroidAppDataStream
* GoogleAnalyticsAdminV1alphaAndroidAppDataStream `object`: A resource message representing a Google Analytics Android app stream.
  * createTime `string`: Output only. Time when this stream was originally created.
  * displayName `string`: Human-readable display name for the Data Stream. The max allowed display name length is 255 UTF-16 code units.
  * firebaseAppId `string`: Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated.
  * name `string`: Output only. Resource name of this Data Stream. Format: properties/{property_id}/androidAppDataStreams/{stream_id} Example: "properties/1000/androidAppDataStreams/2000"
  * packageName `string`: Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"
  * updateTime `string`: Output only. Time when stream payload fields were last updated.

### GoogleAnalyticsAdminV1alphaAuditUserLink
* GoogleAnalyticsAdminV1alphaAuditUserLink `object`: Read-only resource used to summarize a principal's effective roles.
  * directRoles `array`: Roles directly assigned to this user for this entity. Format: predefinedRoles/read Excludes roles that are inherited from an account (if this is for a property), group, or organization admin role.
    * items `string`
  * effectiveRoles `array`: Union of all permissions a user has at this account or property (includes direct permissions, group-inherited permissions, etc.). Format: predefinedRoles/read
    * items `string`
  * emailAddress `string`: Email address of the linked user
  * name `string`: Example format: properties/1234/userLinks/5678

### GoogleAnalyticsAdminV1alphaAuditUserLinksRequest
* GoogleAnalyticsAdminV1alphaAuditUserLinksRequest `object`: Request message for AuditUserLinks RPC.
  * pageSize `integer`: The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 1000 user links will be returned. The maximum value is 5000; values above 5000 will be coerced to 5000.
  * pageToken `string`: A page token, received from a previous `AuditUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `AuditUserLinks` must match the call that provided the page token.

### GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
* GoogleAnalyticsAdminV1alphaAuditUserLinksResponse `object`: Response message for AuditUserLinks RPC.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * userLinks `array`: List of AuditUserLinks. These will be ordered stably, but in an arbitrary order.
    * items [GoogleAnalyticsAdminV1alphaAuditUserLink](#googleanalyticsadminv1alphaaudituserlink)

### GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest
* GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest `object`: Request message for BatchCreateUserLinks RPC.
  * notifyNewUsers `boolean`: Optional. If set, then email the new users notifying them that they've been granted permissions to the resource. Regardless of whether this is set or not, notify_new_user field inside each individual request is ignored.
  * requests `array`: Required. The requests specifying the user links to create. A maximum of 1000 user links can be created in a batch.
    * items [GoogleAnalyticsAdminV1alphaCreateUserLinkRequest](#googleanalyticsadminv1alphacreateuserlinkrequest)

### GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
* GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse `object`: Response message for BatchCreateUserLinks RPC.
  * userLinks `array`: The user links created.
    * items [GoogleAnalyticsAdminV1alphaUserLink](#googleanalyticsadminv1alphauserlink)

### GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest
* GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest `object`: Request message for BatchDeleteUserLinks RPC.
  * requests `array`: Required. The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
    * items [GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest](#googleanalyticsadminv1alphadeleteuserlinkrequest)

### GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
* GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse `object`: Response message for BatchGetUserLinks RPC.
  * userLinks `array`: The requested user links.
    * items [GoogleAnalyticsAdminV1alphaUserLink](#googleanalyticsadminv1alphauserlink)

### GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest
* GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest `object`: Request message for BatchUpdateUserLinks RPC.
  * requests `array`: Required. The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
    * items [GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest](#googleanalyticsadminv1alphaupdateuserlinkrequest)

### GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
* GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse `object`: Response message for BatchUpdateUserLinks RPC.
  * userLinks `array`: The user links updated.
    * items [GoogleAnalyticsAdminV1alphaUserLink](#googleanalyticsadminv1alphauserlink)

### GoogleAnalyticsAdminV1alphaCreateUserLinkRequest
* GoogleAnalyticsAdminV1alphaCreateUserLinkRequest `object`: Request message for CreateUserLink RPC. Users can have multiple email addresses associated with their Google account, and one of these email addresses is the "primary" email address. Any of the email addresses associated with a Google account may be used for a new UserLink, but the returned UserLink will always contain the "primary" email address. As a result, the input and output email address for this request may differ.
  * notifyNewUser `boolean`: Optional. If set, then email the new user notifying them that they've been granted permissions to the resource.
  * parent `string`: Required. Example format: accounts/1234
  * userLink [GoogleAnalyticsAdminV1alphaUserLink](#googleanalyticsadminv1alphauserlink)

### GoogleAnalyticsAdminV1alphaDataSharingSettings
* GoogleAnalyticsAdminV1alphaDataSharingSettings `object`: A resource message representing data sharing settings of a Google Analytics account.
  * name `string`: Output only. Resource name. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
  * sharingWithGoogleAnySalesEnabled `boolean`: Allows any of Google sales to access the data in order to suggest configuration changes to improve results.
  * sharingWithGoogleAssignedSalesEnabled `boolean`: Allows Google sales teams that are assigned to the customer to access the data in order to suggest configuration changes to improve results. Sales team restrictions still apply when enabled.
  * sharingWithGoogleProductsEnabled `boolean`: Allows Google to use the data to improve other Google products or services.
  * sharingWithGoogleSupportEnabled `boolean`: Allows Google support to access the data in order to help troubleshoot issues.
  * sharingWithOthersEnabled `boolean`: Allows Google to share the data anonymously in aggregate form with others.

### GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest
* GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest `object`: Request message for DeleteUserLink RPC.
  * name `string`: Required. Example format: accounts/1234/userLinks/5678

### GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings
* GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings `object`: Singleton resource under a WebDataStream, configuring measurement of additional site interactions and content.
  * articlesAndBlogsEnabled `boolean`: Capture events when your visitors view content on your site that has articles or blog posts.
  * contentViewsEnabled `boolean`: Capture events when your visitors view content on your site that has structured data (eg, articles, blog posts, product details screens, etc.).
  * dataTaggedElementClicksEnabled `boolean`: If enabled, capture a click event each time a visitor clicks a link or element that has data attributes beginning with "data-ga".
  * excludedDomains `string`: Domains to exclude from measurement. Max length is 1024 characters.
  * fileDownloadsEnabled `boolean`: If enabled, capture a file download event each time a link is clicked with a common document, compressed file, application, video, or audio extension.
  * formInteractionsEnabled `boolean`: If enabled, capture a view search results event each time a visitor interacts with a form on your site.
  * name `string`: Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id}/enhancedMeasurementSettings Example: "properties/1000/webDataStreams/2000/enhancedMeasurementSettings"
  * outboundClicksEnabled `boolean`: If enabled, capture an outbound click event each time a visitor clicks a link that leads them away from your domain.
  * pageChangesEnabled `boolean`: If enabled, capture a page view event each time the website changes the browser history state.
  * pageLoadsEnabled `boolean`: If enabled, capture a page view event each time a page loads.
  * pageViewsEnabled `boolean`: Output only. If enabled, capture a page view event each time a page loads or the website changes the browser history state.
  * productsAndEcommerceEnabled `boolean`: Capture events when your visitors view content on your site that has product details screens, etc.
  * scrollsEnabled `boolean`: If enabled, capture scroll events each time a visitor gets to the bottom of a page.
  * searchQueryParameter `string`: Required. URL query parameters to interpret as site search parameters. Max length is 1024 characters. Must not be empty.
  * siteSearchEnabled `boolean`: If enabled, capture a view search results event each time a visitor performs a search on your site (based on a query parameter).
  * streamEnabled `boolean`: Indicates whether Enhanced Measurement Settings will be used to automatically measure interactions and content on this web stream. Changing this value does not affect the settings themselves, but determines whether they are respected.
  * urlQueryParameter `string`: Additional URL query parameters. Max length is 1024 characters.
  * videoEngagementEnabled `boolean`: If enabled, capture video play, progress, and complete events as visitors view embedded videos on your site.

### GoogleAnalyticsAdminV1alphaFirebaseLink
* GoogleAnalyticsAdminV1alphaFirebaseLink `object`: A link between an GA4 property and a Firebase project.
  * createTime `string`: Output only. Time when this FirebaseLink was originally created.
  * maximumUserAccess `string` (values: MAXIMUM_USER_ACCESS_UNSPECIFIED, NO_ACCESS, READ_AND_ANALYZE, EDITOR_WITHOUT_LINK_MANAGEMENT, EDITOR_INCLUDING_LINK_MANAGEMENT): Maximum user access to the GA4 property allowed to admins of the linked Firebase project.
  * name `string`: Output only. Example format: properties/1234/firebaseLinks/5678
  * project `string`: Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234'

### GoogleAnalyticsAdminV1alphaGlobalSiteTag
* GoogleAnalyticsAdminV1alphaGlobalSiteTag `object`: Read-only resource with the tag for sending data from a website to a WebDataStream.
  * snippet `string`: Immutable. JavaScript code snippet to be pasted as the first item into the head tag of every webpage to measure.

### GoogleAnalyticsAdminV1alphaGoogleAdsLink
* GoogleAnalyticsAdminV1alphaGoogleAdsLink `object`: A link between an GA4 property and a Google Ads account.
  * adsPersonalizationEnabled `boolean`: Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update it will be defaulted to true.
  * canManageClients `boolean`: Output only. If true, this link is for a Google Ads manager account.
  * createTime `string`: Output only. Time when this link was originally created.
  * customerId `string`: Immutable. Google Ads customer ID.
  * emailAddress `string`: Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved.
  * name `string`: Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
  * parent `string`: Immutable. Format: properties/{propertyId}
  * updateTime `string`: Output only. Time when this link was last updated.

### GoogleAnalyticsAdminV1alphaIosAppDataStream
* GoogleAnalyticsAdminV1alphaIosAppDataStream `object`: A resource message representing a Google Analytics IOS app stream.
  * bundleId `string`: Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"
  * createTime `string`: Output only. Time when this stream was originally created.
  * displayName `string`: Human-readable display name for the Data Stream. The max allowed display name length is 255 UTF-16 code units.
  * firebaseAppId `string`: Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated.
  * name `string`: Output only. Resource name of this Data Stream. Format: properties/{property_id}/iosAppDataStreams/{stream_id} Example: "properties/1000/iosAppDataStreams/2000"
  * updateTime `string`: Output only. Time when stream payload fields were last updated.

### GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
* GoogleAnalyticsAdminV1alphaListAccountSummariesResponse `object`: Response message for ListAccountSummaries RPC.
  * accountSummaries `array`: Account summaries of all accounts the caller has access to.
    * items [GoogleAnalyticsAdminV1alphaAccountSummary](#googleanalyticsadminv1alphaaccountsummary)
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### GoogleAnalyticsAdminV1alphaListAccountsResponse
* GoogleAnalyticsAdminV1alphaListAccountsResponse `object`: Request message for ListAccounts RPC.
  * accounts `array`: Results that were accessible to the caller.
    * items [GoogleAnalyticsAdminV1alphaAccount](#googleanalyticsadminv1alphaaccount)
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse
* GoogleAnalyticsAdminV1alphaListAndroidAppDataStreamsResponse `object`: Request message for ListAndroidDataStreams RPC.
  * androidAppDataStreams `array`: Results that matched the filter criteria and were accessible to the caller.
    * items [GoogleAnalyticsAdminV1alphaAndroidAppDataStream](#googleanalyticsadminv1alphaandroidappdatastream)
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
* GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse `object`: Response message for ListFirebaseLinks RPC
  * firebaseLinks `array`: List of FirebaseLinks. This will have at most one value.
    * items [GoogleAnalyticsAdminV1alphaFirebaseLink](#googleanalyticsadminv1alphafirebaselink)

### GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
* GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse `object`: Response message for ListGoogleAdsLinks RPC.
  * googleAdsLinks `array`: List of GoogleAdsLinks.
    * items [GoogleAnalyticsAdminV1alphaGoogleAdsLink](#googleanalyticsadminv1alphagoogleadslink)
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse
* GoogleAnalyticsAdminV1alphaListIosAppDataStreamsResponse `object`: Request message for ListIosAppDataStreams RPC.
  * iosAppDataStreams `array`: Results that matched the filter criteria and were accessible to the caller.
    * items [GoogleAnalyticsAdminV1alphaIosAppDataStream](#googleanalyticsadminv1alphaiosappdatastream)
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### GoogleAnalyticsAdminV1alphaListPropertiesResponse
* GoogleAnalyticsAdminV1alphaListPropertiesResponse `object`: Response message for ListProperties RPC.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * properties `array`: Results that matched the filter criteria and were accessible to the caller.
    * items [GoogleAnalyticsAdminV1alphaProperty](#googleanalyticsadminv1alphaproperty)

### GoogleAnalyticsAdminV1alphaListUserLinksResponse
* GoogleAnalyticsAdminV1alphaListUserLinksResponse `object`: Response message for ListUserLinks RPC.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * userLinks `array`: List of UserLinks. These will be ordered stably, but in an arbitrary order.
    * items [GoogleAnalyticsAdminV1alphaUserLink](#googleanalyticsadminv1alphauserlink)

### GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse
* GoogleAnalyticsAdminV1alphaListWebDataStreamsResponse `object`: Request message for ListWebDataStreams RPC.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * webDataStreams `array`: Results that matched the filter criteria and were accessible to the caller.
    * items [GoogleAnalyticsAdminV1alphaWebDataStream](#googleanalyticsadminv1alphawebdatastream)

### GoogleAnalyticsAdminV1alphaProperty
* GoogleAnalyticsAdminV1alphaProperty `object`: A resource message representing a Google Analytics GA4 property.
  * createTime `string`: Output only. Time when the entity was originally created.
  * currencyCode `string`: The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"
  * deleted `boolean`: Output only. Indicates whether this Property is soft-deleted or not. Deleted properties are excluded from List results unless specifically requested.
  * displayName `string`: Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.
  * industryCategory `string` (values: INDUSTRY_CATEGORY_UNSPECIFIED, AUTOMOTIVE, BUSINESS_AND_INDUSTRIAL_MARKETS, FINANCE, HEALTHCARE, TECHNOLOGY, TRAVEL, OTHER, ARTS_AND_ENTERTAINMENT, BEAUTY_AND_FITNESS, BOOKS_AND_LITERATURE, FOOD_AND_DRINK, GAMES, HOBBIES_AND_LEISURE, HOME_AND_GARDEN, INTERNET_AND_TELECOM, LAW_AND_GOVERNMENT, NEWS, ONLINE_COMMUNITIES, PEOPLE_AND_SOCIETY, PETS_AND_ANIMALS, REAL_ESTATE, REFERENCE, SCIENCE, SPORTS, JOBS_AND_EDUCATION, SHOPPING): Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK
  * name `string`: Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"
  * parent `string`: Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account} Example: "accounts/100"
  * timeZone `string`: Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"
  * updateTime `string`: Output only. Time when entity payload fields were last updated.

### GoogleAnalyticsAdminV1alphaPropertySummary
* GoogleAnalyticsAdminV1alphaPropertySummary `object`: A virtual resource representing metadata for an GA4 property.
  * displayName `string`: Display name for the property referred to in this account summary.
  * property `string`: Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000"

### GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest
* GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest `object`: Request message for ProvisionAccountTicket RPC.
  * account [GoogleAnalyticsAdminV1alphaAccount](#googleanalyticsadminv1alphaaccount)
  * redirectUri `string`: Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Developers Console as a Redirect URI

### GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse
* GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse `object`: Response message for ProvisionAccountTicket RPC.
  * accountTicketId `string`: The param to be passed in the ToS link.

### GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest
* GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest `object`: Request message for UpdateUserLink RPC.
  * userLink [GoogleAnalyticsAdminV1alphaUserLink](#googleanalyticsadminv1alphauserlink)

### GoogleAnalyticsAdminV1alphaUserLink
* GoogleAnalyticsAdminV1alphaUserLink `object`: A resource message representing a user's permissions on an Account or Property resource.
  * directRoles `array`: Roles directly assigned to this user for this account or property. Valid values: predefinedRoles/read predefinedRoles/collaborate predefinedRoles/edit predefinedRoles/manage-users Excludes roles that are inherited from a higher-level entity, group, or organization admin role. A UserLink that is updated to have an empty list of direct_roles will be deleted.
    * items `string`
  * emailAddress `string`: Email address of the user to link
  * name `string`: Example format: properties/1234/userLinks/5678

### GoogleAnalyticsAdminV1alphaWebDataStream
* GoogleAnalyticsAdminV1alphaWebDataStream `object`: A resource message representing a Google Analytics web stream.
  * createTime `string`: Output only. Time when this stream was originally created.
  * defaultUri `string`: Immutable. Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"
  * displayName `string`: Required. Human-readable display name for the Data Stream. The max allowed display name length is 100 UTF-16 code units.
  * firebaseAppId `string`: Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated.
  * measurementId `string`: Output only. Analytics "Measurement ID", without the "G-" prefix. Example: "G-1A2BCD345E" would just be "1A2BCD345E"
  * name `string`: Output only. Resource name of this Data Stream. Format: properties/{property_id}/webDataStreams/{stream_id} Example: "properties/1000/webDataStreams/2000"
  * updateTime `string`: Output only. Time when stream payload fields were last updated.

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.


