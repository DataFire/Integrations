# @datafire/google_firebasedynamiclinks

Client library for Firebase Dynamic Links API

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

.then(data => {
  console.log(data);
});
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

### firebasedynamiclinks.installAttribution
Get iOS strong/weak-match info for post-install attribution.


```js
google_firebasedynamiclinks.firebasedynamiclinks.installAttribution({}, context)
```

#### Input
* input `object`
  * body [GetIosPostInstallAttributionRequest](#getiospostinstallattributionrequest)
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
* output [GetIosPostInstallAttributionResponse](#getiospostinstallattributionresponse)

### firebasedynamiclinks.managedShortLinks.create
Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.


```js
google_firebasedynamiclinks.firebasedynamiclinks.managedShortLinks.create({}, context)
```

#### Input
* input `object`
  * body [CreateManagedShortLinkRequest](#createmanagedshortlinkrequest)
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
* output [CreateManagedShortLinkResponse](#createmanagedshortlinkresponse)

### firebasedynamiclinks.reopenAttribution
Get iOS reopen attribution for app universal link open deeplinking.


```js
google_firebasedynamiclinks.firebasedynamiclinks.reopenAttribution({}, context)
```

#### Input
* input `object`
  * body [GetIosReopenAttributionRequest](#getiosreopenattributionrequest)
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
* output [GetIosReopenAttributionResponse](#getiosreopenattributionresponse)

### firebasedynamiclinks.shortLinks.create
Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.


```js
google_firebasedynamiclinks.firebasedynamiclinks.shortLinks.create({}, context)
```

#### Input
* input `object`
  * body [CreateShortDynamicLinkRequest](#createshortdynamiclinkrequest)
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
* output [CreateShortDynamicLinkResponse](#createshortdynamiclinkresponse)

### firebasedynamiclinks.getLinkStats
Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.


```js
google_firebasedynamiclinks.firebasedynamiclinks.getLinkStats({
  "dynamicLink": ""
}, context)
```

#### Input
* input `object`
  * dynamicLink **required** `string`: Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
  * durationDays `string`: The span of time requested in days.
  * sdkVersion `string`: Google SDK version. Version takes the form "$major.$minor.$patch"
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
  * androidMinPackageVersionCode `string`: Minimum version code for the Android app. If the installed app’s version code is lower, then the user is taken to the Play Store.
  * androidPackageName `string`: Android package name of the app.

### CreateManagedShortLinkRequest
* CreateManagedShortLinkRequest `object`: Request to create a managed Short Dynamic Link.
  * dynamicLinkInfo [DynamicLinkInfo](#dynamiclinkinfo)
  * longDynamicLink `string`: Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
  * name `string`: Link name to associate with the link. It's used for marketer to identify manually-created links in the Firebase console (https://console.firebase.google.com/). Links must be named to be tracked.
  * sdkVersion `string`: Google SDK version. Version takes the form "$major.$minor.$patch"
  * suffix [Suffix](#suffix)

### CreateManagedShortLinkResponse
* CreateManagedShortLinkResponse `object`: Response to create a short Dynamic Link.
  * managedShortLink [ManagedShortLink](#managedshortlink)
  * previewLink `string`: Preview link to show the link flow chart. (debug info.)
  * warning `array`: Information about potential warnings on link creation.
    * items [DynamicLinkWarning](#dynamiclinkwarning)

### CreateShortDynamicLinkRequest
* CreateShortDynamicLinkRequest `object`: Request to create a short Dynamic Link.
  * dynamicLinkInfo [DynamicLinkInfo](#dynamiclinkinfo)
  * longDynamicLink `string`: Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
  * sdkVersion `string`: Google SDK version. Version takes the form "$major.$minor.$patch"
  * suffix [Suffix](#suffix)

### CreateShortDynamicLinkResponse
* CreateShortDynamicLinkResponse `object`: Response to create a short Dynamic Link.
  * previewLink `string`: Preview link to show the link flow chart. (debug info.)
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
  * languageCodeFromWebview `string`: Device language code setting obtained by executing JavaScript code in WebView.
  * languageCodeRaw `string`: Device language code raw setting. iOS does returns language code in different format than iOS WebView. For example WebView returns en_US, but iOS returns en-US. Field below will return raw value returned by iOS.
  * screenResolutionHeight `string`: Device display resolution height.
  * screenResolutionWidth `string`: Device display resolution width.
  * timezone `string`: Device timezone setting.

### DynamicLinkEventStat
* DynamicLinkEventStat `object`: Dynamic Link event stat.
  * count `string`: The number of times this event occurred.
  * event `string` (values: DYNAMIC_LINK_EVENT_UNSPECIFIED, CLICK, REDIRECT, APP_INSTALL, APP_FIRST_OPEN, APP_RE_OPEN): Link event.
  * platform `string` (values: DYNAMIC_LINK_PLATFORM_UNSPECIFIED, ANDROID, IOS, DESKTOP, OTHER): Requested platform.

### DynamicLinkInfo
* DynamicLinkInfo `object`: Information about a Dynamic Link.
  * analyticsInfo [AnalyticsInfo](#analyticsinfo)
  * androidInfo [AndroidInfo](#androidinfo)
  * desktopInfo [DesktopInfo](#desktopinfo)
  * domainUriPrefix `string`: E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps More examples can be found in description of getNormalizedUriPrefix in j/c/g/firebase/dynamiclinks/uri/DdlDomain.java Will fallback to dynamic_link_domain is this field is missing
  * dynamicLinkDomain `string`: Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl [Learn more](https://firebase.google.com/docs/dynamic-links/android/receive) on how to set up Dynamic Link domain associated with your Firebase project. Required if missing domain_uri_prefix.
  * iosInfo [IosInfo](#iosinfo)
  * link `string`: The link your app will open, You can specify any URL your app can handle. This link must be a well-formatted URL, be properly URL-encoded, and use the HTTP or HTTPS scheme. See 'link' parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). Required.
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
* GetIosPostInstallAttributionRequest `object`: Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.
  * appInstallationTime `string`: App installation epoch time (https://en.wikipedia.org/wiki/Unix_time). This is a client signal for a more accurate weak match.
  * bundleId `string`: APP bundle ID.
  * device [DeviceInfo](#deviceinfo)
  * iosVersion `string`: iOS version, ie: 9.3.5. Consider adding "build".
  * retrievalMethod `string` (values: UNKNOWN_PAYLOAD_RETRIEVAL_METHOD, IMPLICIT_WEAK_MATCH, EXPLICIT_WEAK_MATCH, EXPLICIT_STRONG_AFTER_WEAK_MATCH): App post install attribution retrieval information. Disambiguates mechanism (iSDK or developer invoked) to retrieve payload from clicked link.
  * sdkVersion `string`: Google SDK version. Version takes the form "$major.$minor.$patch"
  * uniqueMatchLinkToCheck `string`: Possible unique matched link that server need to check before performing fingerprint match. If passed link is short server need to expand the link. If link is long server need to vslidate the link.
  * visualStyle `string` (values: UNKNOWN_VISUAL_STYLE, DEFAULT_STYLE, CUSTOM_STYLE): Strong match page information. Disambiguates between default UI and custom page to present when strong match succeeds/fails to find cookie.

### GetIosPostInstallAttributionResponse
* GetIosPostInstallAttributionResponse `object`: Response for iSDK to execute strong match flow for post-install attribution.
  * appMinimumVersion `string`: The minimum version for app, specified by dev through ?imv= parameter. Return to iSDK to allow app to evaluate if current version meets this.
  * attributionConfidence `string` (values: UNKNOWN_ATTRIBUTION_CONFIDENCE, WEAK, DEFAULT, UNIQUE): The confidence of the returned attribution.
  * deepLink `string`: The deep-link attributed post-install via one of several techniques (fingerprint, copy unique).
  * externalBrowserDestinationLink `string`: User-agent specific custom-scheme URIs for iSDK to open. This will be set according to the user-agent tha the click was originally made in. There is no Safari-equivalent custom-scheme open URLs. ie: googlechrome://www.example.com ie: firefox://open-url?url=http://www.example.com ie: opera-http://example.com
  * fallbackLink `string`: The link to navigate to update the app if min version is not met. This is either (in order): 1) fallback link (from ?ifl= parameter, if specified by developer) or 2) AppStore URL (from ?isi= parameter, if specified), or 3) the payload link (from required link= parameter).
  * invitationId `string`: Invitation ID attributed post-install via one of several techniques (fingerprint, copy unique).
  * isStrongMatchExecutable `boolean`: Instruction for iSDK to attemmpt to perform strong match. For instance, if browser does not support/allow cookie or outside of support browsers, this will be false.
  * matchMessage `string`: Describes why match failed, ie: "discarded due to low confidence". This message will be publicly visible.
  * requestIpVersion `string` (values: UNKNOWN_IP_VERSION, IP_V4, IP_V6): Which IP version the request was made from.
  * requestedLink `string`: Entire FDL (short or long) attributed post-install via one of several techniques (fingerprint, copy unique).
  * resolvedLink `string`: The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long. Parameters from this should not be used directly (ie: server can default utm_[campaign|medium|source] to a value when requested_link lack them, server determine the best fallback_link when requested_link specifies >1 fallback links).
  * utmCampaign `string`: Scion campaign value to be propagated by iSDK to Scion at post-install.
  * utmContent `string`: Scion content value to be propagated by iSDK to Scion at app-reopen.
  * utmMedium `string`: Scion medium value to be propagated by iSDK to Scion at post-install.
  * utmSource `string`: Scion source value to be propagated by iSDK to Scion at post-install.
  * utmTerm `string`: Scion term value to be propagated by iSDK to Scion at app-reopen.

### GetIosReopenAttributionRequest
* GetIosReopenAttributionRequest `object`: Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
  * bundleId `string`: APP bundle ID.
  * requestedLink `string`: FDL link to be verified from an app universal link open. The FDL link can be one of: 1) short FDL. e.g. .page.link/, or 2) long FDL. e.g. .page.link/?{query params}, or 3) Invite FDL. e.g. .page.link/i/
  * sdkVersion `string`: Google SDK version. Version takes the form "$major.$minor.$patch"

### GetIosReopenAttributionResponse
* GetIosReopenAttributionResponse `object`: Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
  * deepLink `string`: The deep-link attributed the app universal link open. For both regular FDL links and invite FDL links.
  * invitationId `string`: Optional invitation ID, for only invite typed requested FDL links.
  * iosMinAppVersion `string`: FDL input value of the "&imv=" parameter, minimum app version to be returned to Google Firebase SDK running on iOS-9.
  * resolvedLink `string`: The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long.
  * utmCampaign `string`: Scion campaign value to be propagated by iSDK to Scion at app-reopen.
  * utmContent `string`: Scion content value to be propagated by iSDK to Scion at app-reopen.
  * utmMedium `string`: Scion medium value to be propagated by iSDK to Scion at app-reopen.
  * utmSource `string`: Scion source value to be propagated by iSDK to Scion at app-reopen.
  * utmTerm `string`: Scion term value to be propagated by iSDK to Scion at app-reopen.

### GooglePlayAnalytics
* GooglePlayAnalytics `object`: Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
  * gclid `string`: [AdWords autotagging parameter](https://support.google.com/analytics/answer/1033981?hl=en); used to measure Google AdWords ads. This value is generated dynamically and should never be modified.
  * utmCampaign `string`: Campaign name; used for keyword analysis to identify a specific product promotion or strategic campaign.
  * utmContent `string`: Campaign content; used for A/B testing and content-targeted ads to differentiate ads or links that point to the same URL.
  * utmMedium `string`: Campaign medium; used to identify a medium such as email or cost-per-click.
  * utmSource `string`: Campaign source; used to identify a search engine, newsletter, or other source.
  * utmTerm `string`: Campaign term; used with paid search to supply the keywords for ads.

### ITunesConnectAnalytics
* ITunesConnectAnalytics `object`: Parameters for iTunes Connect App Analytics.
  * at `string`: Affiliate token used to create affiliate-coded links.
  * ct `string`: Campaign text that developers can optionally add to any link in order to track sales from a specific marketing campaign.
  * mt `string`: iTune media types, including music, podcasts, audiobooks and so on.
  * pt `string`: Provider token that enables analytics for Dynamic Links from within iTunes Connect.

### IosInfo
* IosInfo `object`: iOS related attributes to the Dynamic Link..
  * iosAppStoreId `string`: iOS App Store ID.
  * iosBundleId `string`: iOS bundle ID of the app.
  * iosCustomScheme `string`: Custom (destination) scheme to use for iOS. By default, we’ll use the bundle ID as the custom scheme. Developer can override this behavior using this param.
  * iosFallbackLink `string`: Link to open on iOS if the app is not installed.
  * iosIpadBundleId `string`: iPad bundle ID of the app.
  * iosIpadFallbackLink `string`: If specified, this overrides the ios_fallback_link value on iPads.
  * iosMinimumVersion `string`: iOS minimum version.

### ManagedShortLink
* ManagedShortLink `object`: Managed Short Link.
  * info [DynamicLinkInfo](#dynamiclinkinfo)
  * creationTime `string`: Creation timestamp of the short link.
  * flaggedAttribute `array`: Attributes that have been flagged about this short url.
    * items `string` (values: UNSPECIFIED_ATTRIBUTE, SPAM)
  * link `string`: Short durable link url, for example, "https://sample.app.goo.gl/xyz123". Required.
  * linkName `string`: Link name defined by the creator. Required.
  * visibility `string` (values: UNSPECIFIED_VISIBILITY, UNARCHIVED, ARCHIVED, NEVER_SHOWN): Visibility status of link.

### NavigationInfo
* NavigationInfo `object`: Information of navigation behavior.
  * enableForcedRedirect `boolean`: If this option is on, FDL click will be forced to redirect rather than show an interstitial page.

### SocialMetaTagInfo
* SocialMetaTagInfo `object`: Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
  * socialDescription `string`: A short description of the link. Optional.
  * socialImageLink `string`: An image url string. Optional.
  * socialTitle `string`: Title to be displayed. Optional.

### Suffix
* Suffix `object`: Short Dynamic Link suffix.
  * customSuffix `string`: Only applies to Option.CUSTOM.
  * option `string` (values: OPTION_UNSPECIFIED, UNGUESSABLE, SHORT, CUSTOM): Suffix option.


