# @datafire/google_androidpublisher

Client library for Google Play Developer

## Installation and Usage
```bash
npm install --save @datafire/google_androidpublisher
```
```js
let google_androidpublisher = require('@datafire/google_androidpublisher').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_androidpublisher.edits.insert({
  "packageName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Lets Android application developers access their Google Play accounts.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_androidpublisher.oauthCallback({
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
google_androidpublisher.oauthRefresh(null, context)
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

### edits.insert
Creates a new edit for an app, populated with the app's current state.


```js
google_androidpublisher.edits.insert({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * body [AppEdit](#appedit)
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AppEdit](#appedit)

### edits.delete
Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.


```js
google_androidpublisher.edits.delete({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### edits.get
Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).


```js
google_androidpublisher.edits.get({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AppEdit](#appedit)

### edits.apks.list



```js
google_androidpublisher.edits.apks.list({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ApksListResponse](#apkslistresponse)

### edits.apks.upload



```js
google_androidpublisher.edits.apks.upload({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Apk](#apk)

### edits.apks.addexternallyhosted
Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.


```js
google_androidpublisher.edits.apks.addexternallyhosted({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * body [ApksAddExternallyHostedRequest](#apksaddexternallyhostedrequest)
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ApksAddExternallyHostedResponse](#apksaddexternallyhostedresponse)

### edits.deobfuscationfiles.upload
Uploads the deobfuscation file of the specified APK. If a deobfuscation file already exists, it will be replaced.


```js
google_androidpublisher.edits.deobfuscationfiles.upload({
  "apkVersionCode": 0,
  "deobfuscationFileType": "",
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The version code of the APK whose deobfuscation file is being uploaded.
  * deobfuscationFileType **required** `string` (values: proguard)
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier of the Android app for which the deobfuscatiuon files are being uploaded; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DeobfuscationFilesUploadResponse](#deobfuscationfilesuploadresponse)

### edits.expansionfiles.get
Fetches the Expansion File configuration for the APK specified.


```js
google_androidpublisher.edits.expansionfiles.get({
  "apkVersionCode": 0,
  "editId": "",
  "expansionFileType": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The version code of the APK whose Expansion File configuration is being read or modified.
  * editId **required** `string`: Unique identifier for this edit.
  * expansionFileType **required** `string` (values: main, patch)
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ExpansionFile](#expansionfile)

### edits.expansionfiles.patch
Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.


```js
google_androidpublisher.edits.expansionfiles.patch({
  "apkVersionCode": 0,
  "editId": "",
  "expansionFileType": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The version code of the APK whose Expansion File configuration is being read or modified.
  * body [ExpansionFile](#expansionfile)
  * editId **required** `string`: Unique identifier for this edit.
  * expansionFileType **required** `string` (values: main, patch)
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ExpansionFile](#expansionfile)

### edits.expansionfiles.upload
Uploads and attaches a new Expansion File to the APK specified.


```js
google_androidpublisher.edits.expansionfiles.upload({
  "apkVersionCode": 0,
  "editId": "",
  "expansionFileType": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The version code of the APK whose Expansion File configuration is being read or modified.
  * editId **required** `string`: Unique identifier for this edit.
  * expansionFileType **required** `string` (values: main, patch)
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ExpansionFilesUploadResponse](#expansionfilesuploadresponse)

### edits.expansionfiles.update
Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.


```js
google_androidpublisher.edits.expansionfiles.update({
  "apkVersionCode": 0,
  "editId": "",
  "expansionFileType": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The version code of the APK whose Expansion File configuration is being read or modified.
  * body [ExpansionFile](#expansionfile)
  * editId **required** `string`: Unique identifier for this edit.
  * expansionFileType **required** `string` (values: main, patch)
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ExpansionFile](#expansionfile)

### edits.apklistings.deleteall
Deletes all the APK-specific localized listings for a specified APK.


```js
google_androidpublisher.edits.apklistings.deleteall({
  "apkVersionCode": 0,
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### edits.apklistings.list
Lists all the APK-specific localized listings for a specified APK.


```js
google_androidpublisher.edits.apklistings.list({
  "apkVersionCode": 0,
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ApkListingsListResponse](#apklistingslistresponse)

### edits.apklistings.delete
Deletes the APK-specific localized listing for a specified APK and language code.


```js
google_androidpublisher.edits.apklistings.delete({
  "apkVersionCode": 0,
  "editId": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### edits.apklistings.get
Fetches the APK-specific localized listing for a specified APK and language code.


```js
google_androidpublisher.edits.apklistings.get({
  "apkVersionCode": 0,
  "editId": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ApkListing](#apklisting)

### edits.apklistings.patch
Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.


```js
google_androidpublisher.edits.apklistings.patch({
  "apkVersionCode": 0,
  "editId": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * body [ApkListing](#apklisting)
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ApkListing](#apklisting)

### edits.apklistings.update
Updates or creates the APK-specific localized listing for a specified APK and language code.


```js
google_androidpublisher.edits.apklistings.update({
  "apkVersionCode": 0,
  "editId": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * body [ApkListing](#apklisting)
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ApkListing](#apklisting)

### edits.bundles.list



```js
google_androidpublisher.edits.bundles.list({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [BundlesListResponse](#bundleslistresponse)

### edits.bundles.upload



```js
google_androidpublisher.edits.bundles.upload({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Bundle](#bundle)

### edits.details.get
Fetches app details for this edit. This includes the default language and developer support contact information.


```js
google_androidpublisher.edits.details.get({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AppDetails](#appdetails)

### edits.details.patch
Updates app details for this edit. This method supports patch semantics.


```js
google_androidpublisher.edits.details.patch({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * body [AppDetails](#appdetails)
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AppDetails](#appdetails)

### edits.details.update
Updates app details for this edit.


```js
google_androidpublisher.edits.details.update({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * body [AppDetails](#appdetails)
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AppDetails](#appdetails)

### edits.listings.deleteall
Deletes all localized listings from an edit.


```js
google_androidpublisher.edits.listings.deleteall({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### edits.listings.list
Returns all of the localized store listings attached to this edit.


```js
google_androidpublisher.edits.listings.list({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ListingsListResponse](#listingslistresponse)

### edits.listings.delete
Deletes the specified localized store listing from an edit.


```js
google_androidpublisher.edits.listings.delete({
  "editId": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### edits.listings.get
Fetches information about a localized store listing.


```js
google_androidpublisher.edits.listings.get({
  "editId": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Listing](#listing)

### edits.listings.patch
Creates or updates a localized store listing. This method supports patch semantics.


```js
google_androidpublisher.edits.listings.patch({
  "editId": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * body [Listing](#listing)
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Listing](#listing)

### edits.listings.update
Creates or updates a localized store listing.


```js
google_androidpublisher.edits.listings.update({
  "editId": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * body [Listing](#listing)
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Listing](#listing)

### edits.images.deleteall
Deletes all images for the specified language and image type.


```js
google_androidpublisher.edits.images.deleteall({
  "editId": "",
  "imageType": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * imageType **required** `string` (values: featureGraphic, icon, phoneScreenshots, promoGraphic, sevenInchScreenshots, tenInchScreenshots, tvBanner, tvScreenshots, wearScreenshots)
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ImagesDeleteAllResponse](#imagesdeleteallresponse)

### edits.images.list
Lists all images for the specified language and image type.


```js
google_androidpublisher.edits.images.list({
  "editId": "",
  "imageType": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * imageType **required** `string` (values: featureGraphic, icon, phoneScreenshots, promoGraphic, sevenInchScreenshots, tenInchScreenshots, tvBanner, tvScreenshots, wearScreenshots)
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ImagesListResponse](#imageslistresponse)

### edits.images.upload
Uploads a new image and adds it to the list of images for the specified language and image type.


```js
google_androidpublisher.edits.images.upload({
  "editId": "",
  "imageType": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * imageType **required** `string` (values: featureGraphic, icon, phoneScreenshots, promoGraphic, sevenInchScreenshots, tenInchScreenshots, tvBanner, tvScreenshots, wearScreenshots)
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ImagesUploadResponse](#imagesuploadresponse)

### edits.images.delete
Deletes the image (specified by id) from the edit.


```js
google_androidpublisher.edits.images.delete({
  "editId": "",
  "imageId": "",
  "imageType": "",
  "language": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * imageId **required** `string`: Unique identifier an image within the set of images attached to this edit.
  * imageType **required** `string` (values: featureGraphic, icon, phoneScreenshots, promoGraphic, sevenInchScreenshots, tenInchScreenshots, tvBanner, tvScreenshots, wearScreenshots)
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### edits.testers.get



```js
google_androidpublisher.edits.testers.get({
  "editId": "",
  "packageName": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * track **required** `string`: The track to read or modify. Acceptable values are: "alpha", "beta", "production", "rollout" or "internal".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Testers](#testers)

### edits.testers.patch



```js
google_androidpublisher.edits.testers.patch({
  "editId": "",
  "packageName": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * body [Testers](#testers)
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * track **required** `string`: The track to read or modify. Acceptable values are: "alpha", "beta", "production", "rollout" or "internal".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Testers](#testers)

### edits.testers.update



```js
google_androidpublisher.edits.testers.update({
  "editId": "",
  "packageName": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * body [Testers](#testers)
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * track **required** `string`: The track to read or modify. Acceptable values are: "alpha", "beta", "production", "rollout" or "internal".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Testers](#testers)

### edits.tracks.list
Lists all the track configurations for this edit.


```js
google_androidpublisher.edits.tracks.list({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [TracksListResponse](#trackslistresponse)

### edits.tracks.get
Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.


```js
google_androidpublisher.edits.tracks.get({
  "editId": "",
  "packageName": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * track **required** `string`: The track to read or modify.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Track](#track)

### edits.tracks.patch
Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume. This method supports patch semantics.


```js
google_androidpublisher.edits.tracks.patch({
  "editId": "",
  "packageName": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * body [Track](#track)
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * track **required** `string`: The track to read or modify.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Track](#track)

### edits.tracks.update
Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume.


```js
google_androidpublisher.edits.tracks.update({
  "editId": "",
  "packageName": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * body [Track](#track)
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * track **required** `string`: The track to read or modify.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Track](#track)

### edits.commit
Commits/applies the changes made in this edit back to the app.


```js
google_androidpublisher.edits.commit({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AppEdit](#appedit)

### edits.validate
Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.


```js
google_androidpublisher.edits.validate({
  "editId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * editId **required** `string`: Unique identifier for this edit.
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AppEdit](#appedit)

### inappproducts.list
List all the in-app products for an Android app, both subscriptions and managed in-app products..


```js
google_androidpublisher.inappproducts.list({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * packageName **required** `string`: Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
  * startIndex `integer`
  * token `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [InappproductsListResponse](#inappproductslistresponse)

### inappproducts.insert
Creates a new in-app product for an app.


```js
google_androidpublisher.inappproducts.insert({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * autoConvertMissingPrices `boolean`: If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
  * body [InAppProduct](#inappproduct)
  * packageName **required** `string`: Unique identifier for the Android app; for example, "com.spiffygame".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [InAppProduct](#inappproduct)

### inappproducts.delete
Delete an in-app product for an app.


```js
google_androidpublisher.inappproducts.delete({
  "packageName": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
  * sku **required** `string`: Unique identifier for the in-app product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### inappproducts.get
Returns information about the in-app product specified.


```js
google_androidpublisher.inappproducts.get({
  "packageName": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`
  * sku **required** `string`: Unique identifier for the in-app product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [InAppProduct](#inappproduct)

### inappproducts.patch
Updates the details of an in-app product. This method supports patch semantics.


```js
google_androidpublisher.inappproducts.patch({
  "packageName": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * autoConvertMissingPrices `boolean`: If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
  * body [InAppProduct](#inappproduct)
  * packageName **required** `string`: Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
  * sku **required** `string`: Unique identifier for the in-app product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [InAppProduct](#inappproduct)

### inappproducts.update
Updates the details of an in-app product.


```js
google_androidpublisher.inappproducts.update({
  "packageName": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * autoConvertMissingPrices `boolean`: If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
  * body [InAppProduct](#inappproduct)
  * packageName **required** `string`: Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
  * sku **required** `string`: Unique identifier for the in-app product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [InAppProduct](#inappproduct)

### orders.refund
Refund a user's subscription or in-app purchase order.


```js
google_androidpublisher.orders.refund({
  "orderId": "",
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * orderId **required** `string`: The order ID provided to the user when the subscription or in-app order was purchased.
  * packageName **required** `string`: The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
  * revoke `boolean`: Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### purchases.products.get
Checks the purchase and consumption status of an inapp item.


```js
google_androidpublisher.purchases.products.get({
  "packageName": "",
  "productId": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: The package name of the application the inapp product was sold in (for example, 'com.some.thing').
  * productId **required** `string`: The inapp product SKU (for example, 'com.some.thing.inapp1').
  * token **required** `string`: The token provided to the user's device when the inapp product was purchased.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ProductPurchase](#productpurchase)

### purchases.subscriptions.get
Checks whether a user's subscription purchase is valid and returns its expiry time.


```js
google_androidpublisher.purchases.subscriptions.get({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
  * subscriptionId **required** `string`: The purchased subscription ID (for example, 'monthly001').
  * token **required** `string`: The token provided to the user's device when the subscription was purchased.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SubscriptionPurchase](#subscriptionpurchase)

### purchases.subscriptions.cancel
Cancels a user's subscription purchase. The subscription remains valid until its expiration time.


```js
google_androidpublisher.purchases.subscriptions.cancel({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
  * subscriptionId **required** `string`: The purchased subscription ID (for example, 'monthly001').
  * token **required** `string`: The token provided to the user's device when the subscription was purchased.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### purchases.subscriptions.defer
Defers a user's subscription purchase until a specified future expiration time.


```js
google_androidpublisher.purchases.subscriptions.defer({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * body [SubscriptionPurchasesDeferRequest](#subscriptionpurchasesdeferrequest)
  * packageName **required** `string`: The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
  * subscriptionId **required** `string`: The purchased subscription ID (for example, 'monthly001').
  * token **required** `string`: The token provided to the user's device when the subscription was purchased.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SubscriptionPurchasesDeferResponse](#subscriptionpurchasesdeferresponse)

### purchases.subscriptions.refund
Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.


```js
google_androidpublisher.purchases.subscriptions.refund({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
  * subscriptionId **required** `string`: The purchased subscription ID (for example, 'monthly001').
  * token **required** `string`: The token provided to the user's device when the subscription was purchased.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### purchases.subscriptions.revoke
Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.


```js
google_androidpublisher.purchases.subscriptions.revoke({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
  * subscriptionId **required** `string`: The purchased subscription ID (for example, 'monthly001').
  * token **required** `string`: The token provided to the user's device when the subscription was purchased.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### purchases.voidedpurchases.list
Lists the purchases that were canceled, refunded or charged-back.


```js
google_androidpublisher.purchases.voidedpurchases.list({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * endTime `string`: The time, in milliseconds since the Epoch, of the newest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
  * maxResults `integer`
  * packageName **required** `string`: The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
  * startIndex `integer`
  * startTime `string`: The time, in milliseconds since the Epoch, of the oldest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
  * token `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [VoidedPurchasesListResponse](#voidedpurchaseslistresponse)

### reviews.list
Returns a list of reviews. Only reviews from last week will be returned.


```js
google_androidpublisher.reviews.list({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * packageName **required** `string`: Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
  * startIndex `integer`
  * token `string`
  * translationLanguage `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ReviewsListResponse](#reviewslistresponse)

### reviews.get
Returns a single review.


```js
google_androidpublisher.reviews.get({
  "packageName": "",
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
  * reviewId **required** `string`
  * translationLanguage `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Review](#review)

### reviews.reply
Reply to a single review, or update an existing reply.


```js
google_androidpublisher.reviews.reply({
  "packageName": "",
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * body [ReviewsReplyRequest](#reviewsreplyrequest)
  * packageName **required** `string`: Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
  * reviewId **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ReviewsReplyResponse](#reviewsreplyresponse)



## Definitions

### Apk
* Apk `object`
  * binary [ApkBinary](#apkbinary)
  * versionCode `integer`: The version code of the APK, as specified in the APK's manifest file.

### ApkBinary
* ApkBinary `object`: Represents the binary payload of an APK.
  * sha1 `string`: A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.
  * sha256 `string`: A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command.

### ApkListing
* ApkListing `object`
  * language `string`: The language code, in BCP 47 format (eg "en-US").
  * recentChanges `string`: Describe what's new in your APK.

### ApkListingsListResponse
* ApkListingsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apkListingsListResponse".
  * listings `array`
    * items [ApkListing](#apklisting)

### ApksAddExternallyHostedRequest
* ApksAddExternallyHostedRequest `object`
  * externallyHostedApk [ExternallyHostedApk](#externallyhostedapk)

### ApksAddExternallyHostedResponse
* ApksAddExternallyHostedResponse `object`
  * externallyHostedApk [ExternallyHostedApk](#externallyhostedapk)

### ApksListResponse
* ApksListResponse `object`
  * apks `array`
    * items [Apk](#apk)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apksListResponse".

### AppDetails
* AppDetails `object`
  * contactEmail `string`: The user-visible support email for this app.
  * contactPhone `string`: The user-visible support telephone number for this app.
  * contactWebsite `string`: The user-visible website for this app.
  * defaultLanguage `string`: Default language code, in BCP 47 format (eg "en-US").

### AppEdit
* AppEdit `object`: Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
  * expiryTimeSeconds `string`: The time at which the edit will expire and will be no longer valid for use in any subsequent API calls (encoded as seconds since the Epoch).
  * id `string`: The ID of the edit that can be used in subsequent API calls.

### Bundle
* Bundle `object`
  * sha1 `string`: A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command.
  * sha256 `string`: A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command.
  * versionCode `integer`: The version code of the Android App Bundle. As specified in the Android App Bundle's base module APK manifest file.

### BundlesListResponse
* BundlesListResponse `object`
  * bundles `array`
    * items [Bundle](#bundle)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidpublisher#bundlesListResponse".

### Comment
* Comment `object`
  * developerComment [DeveloperComment](#developercomment)
  * userComment [UserComment](#usercomment)

### DeobfuscationFile
* DeobfuscationFile `object`: Represents a deobfuscation file.
  * symbolType `string`: The type of the deobfuscation file.

### DeobfuscationFilesUploadResponse
* DeobfuscationFilesUploadResponse `object`
  * deobfuscationFile [DeobfuscationFile](#deobfuscationfile)

### DeveloperComment
* DeveloperComment `object`
  * lastModified [Timestamp](#timestamp)
  * text `string`: The content of the comment, i.e. reply body.

### DeviceMetadata
* DeviceMetadata `object`
  * cpuMake `string`: Device CPU make e.g. "Qualcomm"
  * cpuModel `string`: Device CPU model e.g. "MSM8974"
  * deviceClass `string`: Device class (e.g. tablet)
  * glEsVersion `integer`: OpenGL version
  * manufacturer `string`: Device manufacturer (e.g. Motorola)
  * nativePlatform `string`: Comma separated list of native platforms (e.g. "arm", "arm7")
  * productName `string`: Device model name (e.g. Droid)
  * ramMb `integer`: Device RAM in Megabytes e.g. "2048"
  * screenDensityDpi `integer`: Screen density in DPI
  * screenHeightPx `integer`: Screen height in pixels
  * screenWidthPx `integer`: Screen width in pixels

### ExpansionFile
* ExpansionFile `object`
  * fileSize `string`: If set this field indicates that this APK has an Expansion File uploaded to it: this APK does not reference another APK's Expansion File. The field's value is the size of the uploaded Expansion File in bytes.
  * referencesVersion `integer`: If set this APK's Expansion File references another APK's Expansion File. The file_size field will not be set.

### ExpansionFilesUploadResponse
* ExpansionFilesUploadResponse `object`
  * expansionFile [ExpansionFile](#expansionfile)

### ExternallyHostedApk
* ExternallyHostedApk `object`: Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel
  * applicationLabel `string`: The application label.
  * certificateBase64s `array`: A certificate (or array of certificates if a certificate-chain is used) used to signed this APK, represented as a base64 encoded byte array.
    * items `string`
  * externallyHostedUrl `string`: The URL at which the APK is hosted. This must be an https URL.
  * fileSha1Base64 `string`: The SHA1 checksum of this APK, represented as a base64 encoded byte array.
  * fileSha256Base64 `string`: The SHA256 checksum of this APK, represented as a base64 encoded byte array.
  * fileSize `string`: The file size in bytes of this APK.
  * iconBase64 `string`: The icon image from the APK, as a base64 encoded byte array.
  * maximumSdk `integer`: The maximum SDK supported by this APK (optional).
  * minimumSdk `integer`: The minimum SDK targeted by this APK.
  * nativeCodes `array`: The native code environments supported by this APK (optional).
    * items `string`
  * packageName `string`: The package name.
  * usesFeatures `array`: The features required by this APK (optional).
    * items `string`
  * usesPermissions `array`: The permissions requested by this APK.
    * items [ExternallyHostedApkUsesPermission](#externallyhostedapkusespermission)
  * versionCode `integer`: The version code of this APK.
  * versionName `string`: The version name of this APK.

### ExternallyHostedApkUsesPermission
* ExternallyHostedApkUsesPermission `object`: A permission used by this APK.
  * maxSdkVersion `integer`: Optionally, the maximum SDK version for which the permission is required.
  * name `string`: The name of the permission requested.

### Image
* Image `object`
  * id `string`: A unique id representing this image.
  * sha1 `string`: A sha1 hash of the image that was uploaded.
  * url `string`: A URL that will serve a preview of the image.

### ImagesDeleteAllResponse
* ImagesDeleteAllResponse `object`
  * deleted `array`
    * items [Image](#image)

### ImagesListResponse
* ImagesListResponse `object`
  * images `array`
    * items [Image](#image)

### ImagesUploadResponse
* ImagesUploadResponse `object`
  * image [Image](#image)

### InAppProduct
* InAppProduct `object`
  * defaultLanguage `string`: The default language of the localized data, as defined by BCP 47. e.g. "en-US", "en-GB".
  * defaultPrice [Price](#price)
  * listings `object`: List of localized title and description data.
  * packageName `string`: The package name of the parent app.
  * prices `object`: Prices per buyer region. None of these prices should be zero. In-app products can never be free.
  * purchaseType `string`: Purchase type enum value. Unmodifiable after creation.
  * season [Season](#season)
  * sku `string`: The stock-keeping-unit (SKU) of the product, unique within an app.
  * status `string`
  * subscriptionPeriod `string`: Subscription period, specified in ISO 8601 format. Acceptable values are "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year).
  * trialPeriod `string`: Trial period, specified in ISO 8601 format. Acceptable values are anything between "P7D" (seven days) and "P999D" (999 days). Seasonal subscriptions cannot have a trial period.

### InAppProductListing
* InAppProductListing `object`
  * description `string`
  * title `string`

### InappproductsListResponse
* InappproductsListResponse `object`
  * inappproduct `array`
    * items [InAppProduct](#inappproduct)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsListResponse".
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)

### Listing
* Listing `object`
  * fullDescription `string`: Full description of the app; this may be up to 4000 characters in length.
  * language `string`: Language localization code (for example, "de-AT" for Austrian German).
  * shortDescription `string`: Short description of the app (previously known as promo text); this may be up to 80 characters in length.
  * title `string`: App's localized title.
  * video `string`: URL of a promotional YouTube video for the app.

### ListingsListResponse
* ListingsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidpublisher#listingsListResponse".
  * listings `array`
    * items [Listing](#listing)

### MonthDay
* MonthDay `object`
  * day `integer`: Day of a month, value in [1, 31] range. Valid range depends on the specified month.
  * month `integer`: Month of a year. e.g. 1 = JAN, 2 = FEB etc.

### PageInfo
* PageInfo `object`
  * resultPerPage `integer`
  * startIndex `integer`
  * totalResults `integer`

### Price
* Price `object`
  * currency `string`: 3 letter Currency code, as defined by ISO 4217.
  * priceMicros `string`: The price in millionths of the currency base unit represented as a string.

### ProductPurchase
* ProductPurchase `object`: A ProductPurchase resource indicates the status of a user's inapp product purchase.
  * consumptionState `integer`: The consumption state of the inapp product. Possible values are:  
  * developerPayload `string`: A developer-specified string that contains supplemental information about an order.
  * kind `string`: This kind represents an inappPurchase object in the androidpublisher service.
  * orderId `string`: The order id associated with the purchase of the inapp product.
  * purchaseState `integer`: The purchase state of the order. Possible values are:  
  * purchaseTimeMillis `string`: The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
  * purchaseType `integer`: The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:  

### Prorate
* Prorate `object`
  * defaultPrice [Price](#price)
  * start [MonthDay](#monthday)

### Review
* Review `object`
  * authorName `string`: The name of the user who wrote the review.
  * comments `array`: A repeated field containing comments for the review.
    * items [Comment](#comment)
  * reviewId `string`: Unique identifier for this review.

### ReviewReplyResult
* ReviewReplyResult `object`
  * lastEdited [Timestamp](#timestamp)
  * replyText `string`: The reply text that was applied.

### ReviewsListResponse
* ReviewsListResponse `object`
  * pageInfo [PageInfo](#pageinfo)
  * reviews `array`
    * items [Review](#review)
  * tokenPagination [TokenPagination](#tokenpagination)

### ReviewsReplyRequest
* ReviewsReplyRequest `object`
  * replyText `string`: The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.

### ReviewsReplyResponse
* ReviewsReplyResponse `object`
  * result [ReviewReplyResult](#reviewreplyresult)

### Season
* Season `object`
  * end [MonthDay](#monthday)
  * prorations `array`: Optionally present list of prorations for the season. Each proration is a one-off discounted entry into a subscription. Each proration contains the first date on which the discount is available and the new pricing information.
    * items [Prorate](#prorate)
  * start [MonthDay](#monthday)

### SubscriptionCancelSurveyResult
* SubscriptionCancelSurveyResult `object`: Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
  * cancelSurveyReason `integer`: The cancellation reason the user chose in the survey. Possible values are:  
  * userInputCancelReason `string`: The customized input cancel reason from the user. Only present when cancelReason is 0.

### SubscriptionDeferralInfo
* SubscriptionDeferralInfo `object`: A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
  * desiredExpiryTimeMillis `string`: The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.
  * expectedExpiryTimeMillis `string`: The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur.

### SubscriptionPurchase
* SubscriptionPurchase `object`: A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
  * autoRenewing `boolean`: Whether the subscription will automatically be renewed when it reaches its current expiry time.
  * cancelReason `integer`: The reason why a subscription was canceled or is not auto-renewing. Possible values are:  
  * cancelSurveyResult [SubscriptionCancelSurveyResult](#subscriptioncancelsurveyresult)
  * countryCode `string`: ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
  * developerPayload `string`: A developer-specified string that contains supplemental information about an order.
  * emailAddress `string`: The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * expiryTimeMillis `string`: Time at which the subscription will expire, in milliseconds since the Epoch.
  * familyName `string`: The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * givenName `string`: The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * kind `string`: This kind represents a subscriptionPurchase object in the androidpublisher service.
  * linkedPurchaseToken `string`: The purchase token of the originating purchase if this subscription is one of the following:  
  * orderId `string`: The order id of the latest recurring order associated with the purchase of the subscription.
  * paymentState `integer`: The payment state of the subscription. Possible values are:  
  * priceAmountMicros `string`: Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
  * priceCurrencyCode `string`: ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
  * profileId `string`: The profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * profileName `string`: The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * purchaseType `integer`: The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:  
  * startTimeMillis `string`: Time at which the subscription was granted, in milliseconds since the Epoch.
  * userCancellationTimeMillis `string`: The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0.

### SubscriptionPurchasesDeferRequest
* SubscriptionPurchasesDeferRequest `object`
  * deferralInfo [SubscriptionDeferralInfo](#subscriptiondeferralinfo)

### SubscriptionPurchasesDeferResponse
* SubscriptionPurchasesDeferResponse `object`
  * newExpiryTimeMillis `string`: The new expiry time for the subscription in milliseconds since the Epoch.

### Testers
* Testers `object`
  * googleGroups `array`
    * items `string`
  * googlePlusCommunities `array`
    * items `string`

### Timestamp
* Timestamp `object`
  * nanos `integer`
  * seconds `string`

### TokenPagination
* TokenPagination `object`
  * nextPageToken `string`
  * previousPageToken `string`

### Track
* Track `object`
  * track `string`: Identifier for this track. One of "alpha", "beta", "production", "rollout" or "internal".
  * userFraction `number`
  * versionCodes `array`: Version codes to make active on this track. Note that this list should contain all versions you wish to be active, including those you wish to retain from previous releases.
    * items `integer`

### TracksListResponse
* TracksListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidpublisher#tracksListResponse".
  * tracks `array`
    * items [Track](#track)

### UserComment
* UserComment `object`
  * androidOsVersion `integer`: Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent.
  * appVersionCode `integer`: Integer version code of the app as installed at the time the review was written. May be absent.
  * appVersionName `string`: String version name of the app as installed at the time the review was written. May be absent.
  * device `string`: Codename for the reviewer's device, e.g. klte, flounder. May be absent.
  * deviceMetadata [DeviceMetadata](#devicemetadata)
  * lastModified [Timestamp](#timestamp)
  * originalText `string`: Untranslated text of the review, in the case where the review has been translated. If the review has not been translated this is left blank.
  * reviewerLanguage `string`: Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent.
  * starRating `integer`: The star rating associated with the review, from 1 to 5.
  * text `string`: The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character.
  * thumbsDownCount `integer`: Number of users who have given this review a thumbs down
  * thumbsUpCount `integer`: Number of users who have given this review a thumbs up

### VoidedPurchase
* VoidedPurchase `object`: A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
  * kind `string`: This kind represents a voided purchase object in the androidpublisher service.
  * purchaseTimeMillis `string`: The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970).
  * purchaseToken `string`: The token that was generated when a purchase was made. This uniquely identifies a purchase.
  * voidedTimeMillis `string`: The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).

### VoidedPurchasesListResponse
* VoidedPurchasesListResponse `object`
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)
  * voidedPurchases `array`
    * items [VoidedPurchase](#voidedpurchase)


