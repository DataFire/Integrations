# @datafire/google_firebasedynamiclinks

Client library for Firebase Dynamic Links

## Installation and Usage
```bash
npm install --save @datafire/google_firebasedynamiclinks
```
```js
let google_firebasedynamiclinks = require('@datafire/google_firebasedynamiclinks').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_firebasedynamiclinks.shortLinks.create({}).then(data => {
  console.log(data);
})
```

## Description

Programmatically creates and manages Firebase Dynamic Links.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_firebasedynamiclinks.oauthCallback({
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
google_firebasedynamiclinks.oauthRefresh(null, context)
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

### installAttribution
Get iOS strong/weak-match info for post-install attribution.


```js
google_firebasedynamiclinks.installAttribution({}, context)
```

#### Input
* input `object`
  * body [GetIosPostInstallAttributionRequest](#getiospostinstallattributionrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GetIosPostInstallAttributionResponse](#getiospostinstallattributionresponse)

### shortLinks.create
Creates a short Dynamic Link given either a valid long Dynamic Link or
details such as Dynamic Link domain, Android and iOS app information.
The created short Dynamic Link will not expire.

Repeated calls with the same long Dynamic Link or Dynamic Link information
will produce the same short Dynamic Link.

The Dynamic Link domain in the request must be owned by requester's
Firebase project.


```js
google_firebasedynamiclinks.shortLinks.create({}, context)
```

#### Input
* input `object`
  * body [CreateShortDynamicLinkRequest](#createshortdynamiclinkrequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [CreateShortDynamicLinkResponse](#createshortdynamiclinkresponse)

### getLinkStats
Fetches analytics stats of a short Dynamic Link for a given
duration. Metrics include number of clicks, redirects, installs,
app first opens, and app reopens.


```js
google_firebasedynamiclinks.getLinkStats({
  "dynamicLink": ""
}, context)
```

#### Input
* input `object`
  * durationDays `string`: The span of time requested in days.
  * dynamicLink **required** `string`: Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [DynamicLinkStats](#dynamiclinkstats)



## Definitions

### AnalyticsInfo
* AnalyticsInfo `object`: Tracking parameters supported by Dynamic Link.
  * googlePlayAnalytics [GooglePlayAnalytics](#googleplayanalytics)
  * itunesConnectAnalytics [ITunesConnectAnalytics](#itunesconnectanalytics)

### AndroidInfo
* AndroidInfo `object`: Android related attributes to the Dynamic Link.
  * androidFallbackLink `string`: Link to open on Android if the app is not installed.
  * androidLink `string`: If specified, this overrides the ‘link’ parameter on Android.
  * androidMinPackageVersionCode `string`: Minimum version code for the Android app. If the installed app’s version
  * androidPackageName `string`: Android package name of the app.

### CreateShortDynamicLinkRequest
* CreateShortDynamicLinkRequest `object`: Request to create a short Dynamic Link.
  * dynamicLinkInfo [DynamicLinkInfo](#dynamiclinkinfo)
  * longDynamicLink `string`: Full long Dynamic Link URL with desired query parameters specified.
  * suffix [Suffix](#suffix)

### CreateShortDynamicLinkResponse
* CreateShortDynamicLinkResponse `object`: Response to create a short Dynamic Link.
  * previewLink `string`: Preivew link to show the link flow chart.
  * shortLink `string`: Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz
  * warning `array`: Information about potential warnings on link creation.
    * items [DynamicLinkWarning](#dynamiclinkwarning)

### DesktopInfo
* DesktopInfo `object`: Desktop related attributes to the Dynamic Link.
  * desktopFallbackLink `string`: Link to open on desktop.

### DeviceInfo
* DeviceInfo `object`: Signals associated with the device making the request.
  * deviceModelName `string`: Device model name.
  * languageCode `string`: Device language code setting.
  * screenResolutionHeight `string`: Device display resolution height.
  * screenResolutionWidth `string`: Device display resolution width.
  * timezone `string`: Device timezone setting.

### DynamicLinkEventStat
* DynamicLinkEventStat `object`: Dynamic Link event stat.
  * count `string`: The number of times this event occurred.
  * event `string` (values: DYNAMIC_LINK_EVENT_UNSPECIFIED, CLICK, REDIRECT, APP_INSTALL, APP_FIRST_OPEN, APP_RE_OPEN): Link event.
  * platform `string` (values: DYNAMIC_LINK_PLATFORM_UNSPECIFIED, ANDROID, IOS, DESKTOP): Requested platform.

### DynamicLinkInfo
* DynamicLinkInfo `object`: Information about a Dynamic Link.
  * analyticsInfo [AnalyticsInfo](#analyticsinfo)
  * androidInfo [AndroidInfo](#androidinfo)
  * desktopInfo [DesktopInfo](#desktopinfo)
  * dynamicLinkDomain `string`: Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl
  * iosInfo [IosInfo](#iosinfo)
  * link `string`: The link your app will open, You can specify any URL your app can handle.
  * navigationInfo [NavigationInfo](#navigationinfo)
  * socialMetaTagInfo [SocialMetaTagInfo](#socialmetataginfo)

### DynamicLinkStats
* DynamicLinkStats `object`: Analytics stats of a Dynamic Link for a given timeframe.
  * linkEventStats `array`: Dynamic Link event stats.
    * items [DynamicLinkEventStat](#dynamiclinkeventstat)

### DynamicLinkWarning
* DynamicLinkWarning `object`: Dynamic Links warning messages.
  * warningCode `string` (values: CODE_UNSPECIFIED, NOT_IN_PROJECT_ANDROID_PACKAGE_NAME, NOT_INTEGER_ANDROID_PACKAGE_MIN_VERSION, UNNECESSARY_ANDROID_PACKAGE_MIN_VERSION, NOT_URI_ANDROID_LINK, UNNECESSARY_ANDROID_LINK, NOT_URI_ANDROID_FALLBACK_LINK, BAD_URI_SCHEME_ANDROID_FALLBACK_LINK, NOT_IN_PROJECT_IOS_BUNDLE_ID, NOT_IN_PROJECT_IPAD_BUNDLE_ID, UNNECESSARY_IOS_URL_SCHEME, NOT_NUMERIC_IOS_APP_STORE_ID, UNNECESSARY_IOS_APP_STORE_ID, NOT_URI_IOS_FALLBACK_LINK, BAD_URI_SCHEME_IOS_FALLBACK_LINK, NOT_URI_IPAD_FALLBACK_LINK, BAD_URI_SCHEME_IPAD_FALLBACK_LINK, BAD_DEBUG_PARAM, BAD_AD_PARAM, DEPRECATED_PARAM, UNRECOGNIZED_PARAM, TOO_LONG_PARAM, NOT_URI_SOCIAL_IMAGE_LINK, BAD_URI_SCHEME_SOCIAL_IMAGE_LINK, NOT_URI_SOCIAL_URL, BAD_URI_SCHEME_SOCIAL_URL, LINK_LENGTH_TOO_LONG, LINK_WITH_FRAGMENTS, NOT_MATCHING_IOS_BUNDLE_ID_AND_STORE_ID): The warning code.
  * warningDocumentLink `string`: The document describing the warning, and helps resolve.
  * warningMessage `string`: The warning message to help developers improve their requests.

### GetIosPostInstallAttributionRequest
* GetIosPostInstallAttributionRequest `object`: Request for iSDK to execute strong match flow for post-install attribution.
  * appInstallationTime `string`: App installation epoch time (https://en.wikipedia.org/wiki/Unix_time).
  * bundleId `string`: APP bundle ID.
  * device [DeviceInfo](#deviceinfo)
  * iosVersion `string`: iOS version, ie: 9.3.5.
  * retrievalMethod `string` (values: UNKNOWN_PAYLOAD_RETRIEVAL_METHOD, IMPLICIT_WEAK_MATCH, EXPLICIT_WEAK_MATCH, EXPLICIT_STRONG_AFTER_WEAK_MATCH): App post install attribution retrieval information. Disambiguates
  * sdkVersion `string`: Google SDK version.
  * uniqueMatchLinkToCheck `string`: Possible unique matched link that server need to check before performing
  * visualStyle `string` (values: UNKNOWN_VISUAL_STYLE, DEFAULT_STYLE, CUSTOM_STYLE): Strong match page information. Disambiguates between default UI and

### GetIosPostInstallAttributionResponse
* GetIosPostInstallAttributionResponse `object`: Response for iSDK to execute strong match flow for post-install attribution.
  * appMinimumVersion `string`: The minimum version for app, specified by dev through ?imv= parameter.
  * attributionConfidence `string` (values: UNKNOWN_ATTRIBUTION_CONFIDENCE, WEAK, DEFAULT, UNIQUE): The confidence of the returned attribution.
  * deepLink `string`: The deep-link attributed post-install via one of several techniques
  * externalBrowserDestinationLink `string`: User-agent specific custom-scheme URIs for iSDK to open. This will be set
  * fallbackLink `string`: The link to navigate to update the app if min version is not met.
  * invitationId `string`: Invitation ID attributed post-install via one of several techniques
  * isStrongMatchExecutable `boolean`: Instruction for iSDK to attemmpt to perform strong match. For instance,
  * matchMessage `string`: Describes why match failed, ie: "discarded due to low confidence".
  * requestedLink `string`: Entire FDL (short or long) attributed post-install via one of several
  * resolvedLink `string`: The entire FDL, expanded from a short link. It is the same as the
  * utmCampaign `string`: Scion campaign value to be propagated by iSDK to Scion at post-install.
  * utmMedium `string`: Scion medium value to be propagated by iSDK to Scion at post-install.
  * utmSource `string`: Scion source value to be propagated by iSDK to Scion at post-install.

### GooglePlayAnalytics
* GooglePlayAnalytics `object`: Parameters for Google Play Campaign Measurements.
  * gclid `string`: [AdWords autotagging parameter](https://support.google.com/analytics/answer/1033981?hl=en);
  * utmCampaign `string`: Campaign name; used for keyword analysis to identify a specific product
  * utmContent `string`: Campaign content; used for A/B testing and content-targeted ads to
  * utmMedium `string`: Campaign medium; used to identify a medium such as email or cost-per-click.
  * utmSource `string`: Campaign source; used to identify a search engine, newsletter, or other
  * utmTerm `string`: Campaign term; used with paid search to supply the keywords for ads.

### ITunesConnectAnalytics
* ITunesConnectAnalytics `object`: Parameters for iTunes Connect App Analytics.
  * at `string`: Affiliate token used to create affiliate-coded links.
  * ct `string`: Campaign text that developers can optionally add to any link in order to
  * mt `string`: iTune media types, including music, podcasts, audiobooks and so on.
  * pt `string`: Provider token that enables analytics for Dynamic Links from within iTunes

### IosInfo
* IosInfo `object`: iOS related attributes to the Dynamic Link..
  * iosAppStoreId `string`: iOS App Store ID.
  * iosBundleId `string`: iOS bundle ID of the app.
  * iosCustomScheme `string`: Custom (destination) scheme to use for iOS. By default, we’ll use the
  * iosFallbackLink `string`: Link to open on iOS if the app is not installed.
  * iosIpadBundleId `string`: iPad bundle ID of the app.
  * iosIpadFallbackLink `string`: If specified, this overrides the ios_fallback_link value on iPads.

### NavigationInfo
* NavigationInfo `object`: Information of navigation behavior.
  * enableForcedRedirect `boolean`: If this option is on, FDL click will be forced to redirect rather than

### SocialMetaTagInfo
* SocialMetaTagInfo `object`: Parameters for social meta tag params.
  * socialDescription `string`: A short description of the link. Optional.
  * socialImageLink `string`: An image url string. Optional.
  * socialTitle `string`: Title to be displayed. Optional.

### Suffix
* Suffix `object`: Short Dynamic Link suffix.
  * option `string` (values: OPTION_UNSPECIFIED, UNGUESSABLE, SHORT): Suffix option.


