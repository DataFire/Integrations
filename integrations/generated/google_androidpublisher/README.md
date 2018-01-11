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

google_androidpublisher.inappproducts.batch({}).then(data => {
  console.log(data);
})
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

### inappproducts.batch



```js
google_androidpublisher.inappproducts.batch({}, context)
```

#### Input
* input `object`
  * body [InappproductsBatchRequest](#inappproductsbatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InappproductsBatchResponse](#inappproductsbatchresponse)

### edits.insert
Creates a new edit for an app, populated with the app's current state.


```js
google_androidpublisher.edits.insert({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * body [AppEdit](#appedit)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AppEdit](#appedit)

### edits.delete
Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.


```js
google_androidpublisher.edits.delete({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### edits.get
Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).


```js
google_androidpublisher.edits.get({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AppEdit](#appedit)

### edits.apks.list



```js
google_androidpublisher.edits.apks.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ApksListResponse](#apkslistresponse)

### edits.apks.upload



```js
google_androidpublisher.edits.apks.upload({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Apk](#apk)

### edits.apks.addexternallyhosted
Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.


```js
google_androidpublisher.edits.apks.addexternallyhosted({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * body [ApksAddExternallyHostedRequest](#apksaddexternallyhostedrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ApksAddExternallyHostedResponse](#apksaddexternallyhostedresponse)

### edits.deobfuscationfiles.upload
Uploads the deobfuscation file of the specified APK. If a deobfuscation file already exists, it will be replaced.


```js
google_androidpublisher.edits.deobfuscationfiles.upload({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "deobfuscationFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier of the Android app for which the deobfuscatiuon files are being uploaded; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose deobfuscation file is being uploaded.
  * deobfuscationFileType **required** `string` (values: proguard)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DeobfuscationFilesUploadResponse](#deobfuscationfilesuploadresponse)

### edits.expansionfiles.get
Fetches the Expansion File configuration for the APK specified.


```js
google_androidpublisher.edits.expansionfiles.get({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "expansionFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose Expansion File configuration is being read or modified.
  * expansionFileType **required** `string` (values: main, patch)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ExpansionFile](#expansionfile)

### edits.expansionfiles.patch
Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.


```js
google_androidpublisher.edits.expansionfiles.patch({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "expansionFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose Expansion File configuration is being read or modified.
  * expansionFileType **required** `string` (values: main, patch)
  * body [ExpansionFile](#expansionfile)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ExpansionFile](#expansionfile)

### edits.expansionfiles.upload
Uploads and attaches a new Expansion File to the APK specified.


```js
google_androidpublisher.edits.expansionfiles.upload({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "expansionFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose Expansion File configuration is being read or modified.
  * expansionFileType **required** `string` (values: main, patch)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ExpansionFilesUploadResponse](#expansionfilesuploadresponse)

### edits.expansionfiles.update
Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.


```js
google_androidpublisher.edits.expansionfiles.update({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "expansionFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose Expansion File configuration is being read or modified.
  * expansionFileType **required** `string` (values: main, patch)
  * body [ExpansionFile](#expansionfile)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ExpansionFile](#expansionfile)

### edits.apklistings.deleteall
Deletes all the APK-specific localized listings for a specified APK.


```js
google_androidpublisher.edits.apklistings.deleteall({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### edits.apklistings.list
Lists all the APK-specific localized listings for a specified APK.


```js
google_androidpublisher.edits.apklistings.list({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ApkListingsListResponse](#apklistingslistresponse)

### edits.apklistings.delete
Deletes the APK-specific localized listing for a specified APK and language code.


```js
google_androidpublisher.edits.apklistings.delete({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * language **required** `string`: The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### edits.apklistings.get
Fetches the APK-specific localized listing for a specified APK and language code.


```js
google_androidpublisher.edits.apklistings.get({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * language **required** `string`: The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ApkListing](#apklisting)

### edits.apklistings.patch
Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.


```js
google_androidpublisher.edits.apklistings.patch({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * language **required** `string`: The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * body [ApkListing](#apklisting)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ApkListing](#apklisting)

### edits.apklistings.update
Updates or creates the APK-specific localized listing for a specified APK and language code.


```js
google_androidpublisher.edits.apklistings.update({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The APK version code whose APK-specific listings should be read or modified.
  * language **required** `string`: The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * body [ApkListing](#apklisting)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ApkListing](#apklisting)

### edits.details.get
Fetches app details for this edit. This includes the default language and developer support contact information.


```js
google_androidpublisher.edits.details.get({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AppDetails](#appdetails)

### edits.details.patch
Updates app details for this edit. This method supports patch semantics.


```js
google_androidpublisher.edits.details.patch({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * body [AppDetails](#appdetails)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AppDetails](#appdetails)

### edits.details.update
Updates app details for this edit.


```js
google_androidpublisher.edits.details.update({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * body [AppDetails](#appdetails)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AppDetails](#appdetails)

### edits.listings.deleteall
Deletes all localized listings from an edit.


```js
google_androidpublisher.edits.listings.deleteall({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### edits.listings.list
Returns all of the localized store listings attached to this edit.


```js
google_androidpublisher.edits.listings.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListingsListResponse](#listingslistresponse)

### edits.listings.delete
Deletes the specified localized store listing from an edit.


```js
google_androidpublisher.edits.listings.delete({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### edits.listings.get
Fetches information about a localized store listing.


```js
google_androidpublisher.edits.listings.get({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Listing](#listing)

### edits.listings.patch
Creates or updates a localized store listing. This method supports patch semantics.


```js
google_androidpublisher.edits.listings.patch({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * body [Listing](#listing)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Listing](#listing)

### edits.listings.update
Creates or updates a localized store listing.


```js
google_androidpublisher.edits.listings.update({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
  * body [Listing](#listing)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Listing](#listing)

### edits.images.deleteall
Deletes all images for the specified language and image type.


```js
google_androidpublisher.edits.images.deleteall({
  "packageName": "",
  "editId": "",
  "language": "",
  "imageType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
  * imageType **required** `string` (values: featureGraphic, icon, phoneScreenshots, promoGraphic, sevenInchScreenshots, tenInchScreenshots, tvBanner, tvScreenshots, wearScreenshots)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ImagesDeleteAllResponse](#imagesdeleteallresponse)

### edits.images.list
Lists all images for the specified language and image type.


```js
google_androidpublisher.edits.images.list({
  "packageName": "",
  "editId": "",
  "language": "",
  "imageType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
  * imageType **required** `string` (values: featureGraphic, icon, phoneScreenshots, promoGraphic, sevenInchScreenshots, tenInchScreenshots, tvBanner, tvScreenshots, wearScreenshots)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ImagesListResponse](#imageslistresponse)

### edits.images.upload
Uploads a new image and adds it to the list of images for the specified language and image type.


```js
google_androidpublisher.edits.images.upload({
  "packageName": "",
  "editId": "",
  "language": "",
  "imageType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
  * imageType **required** `string` (values: featureGraphic, icon, phoneScreenshots, promoGraphic, sevenInchScreenshots, tenInchScreenshots, tvBanner, tvScreenshots, wearScreenshots)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ImagesUploadResponse](#imagesuploadresponse)

### edits.images.delete
Deletes the image (specified by id) from the edit.


```js
google_androidpublisher.edits.images.delete({
  "packageName": "",
  "editId": "",
  "language": "",
  "imageType": "",
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * language **required** `string`: The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
  * imageType **required** `string` (values: featureGraphic, icon, phoneScreenshots, promoGraphic, sevenInchScreenshots, tenInchScreenshots, tvBanner, tvScreenshots, wearScreenshots)
  * imageId **required** `string`: Unique identifier an image within the set of images attached to this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### edits.testers.get



```js
google_androidpublisher.edits.testers.get({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * track **required** `string` (values: alpha, beta, production, rollout)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Testers](#testers)

### edits.testers.patch



```js
google_androidpublisher.edits.testers.patch({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * track **required** `string` (values: alpha, beta, production, rollout)
  * body [Testers](#testers)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Testers](#testers)

### edits.testers.update



```js
google_androidpublisher.edits.testers.update({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * track **required** `string` (values: alpha, beta, production, rollout)
  * body [Testers](#testers)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Testers](#testers)

### edits.tracks.list
Lists all the track configurations for this edit.


```js
google_androidpublisher.edits.tracks.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TracksListResponse](#trackslistresponse)

### edits.tracks.get
Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.


```js
google_androidpublisher.edits.tracks.get({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * track **required** `string` (values: alpha, beta, production, rollout): The track type to read or modify.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Track](#track)

### edits.tracks.patch
Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume. This method supports patch semantics.


```js
google_androidpublisher.edits.tracks.patch({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * track **required** `string` (values: alpha, beta, production, rollout): The track type to read or modify.
  * body [Track](#track)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Track](#track)

### edits.tracks.update
Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume.


```js
google_androidpublisher.edits.tracks.update({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * track **required** `string` (values: alpha, beta, production, rollout): The track type to read or modify.
  * body [Track](#track)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Track](#track)

### edits.commit
Commits/applies the changes made in this edit back to the app.


```js
google_androidpublisher.edits.commit({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AppEdit](#appedit)

### edits.validate
Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.


```js
google_androidpublisher.edits.validate({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
  * editId **required** `string`: Unique identifier for this edit.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AppEdit](#appedit)

### entitlements.list
Lists the user's current inapp item or subscription entitlements


```js
google_androidpublisher.entitlements.list({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: The package name of the application the inapp product was sold in (for example, 'com.some.thing').
  * maxResults `integer`
  * productId `string`: The product id of the inapp product (for example, 'sku1'). This can be used to restrict the result set.
  * startIndex `integer`
  * token `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntitlementsListResponse](#entitlementslistresponse)

### inappproducts.list
List all the in-app products for an Android app, both subscriptions and managed in-app products..


```js
google_androidpublisher.inappproducts.list({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
  * maxResults `integer`
  * startIndex `integer`
  * token `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * packageName **required** `string`: Unique identifier for the Android app; for example, "com.spiffygame".
  * autoConvertMissingPrices `boolean`: If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
  * body [InAppProduct](#inappproduct)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * packageName **required** `string`: Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
  * sku **required** `string`: Unique identifier for the in-app product.
  * autoConvertMissingPrices `boolean`: If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
  * body [InAppProduct](#inappproduct)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * packageName **required** `string`: Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
  * sku **required** `string`: Unique identifier for the in-app product.
  * autoConvertMissingPrices `boolean`: If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
  * body [InAppProduct](#inappproduct)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InAppProduct](#inappproduct)

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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * packageName **required** `string`: The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
  * subscriptionId **required** `string`: The purchased subscription ID (for example, 'monthly001').
  * token **required** `string`: The token provided to the user's device when the subscription was purchased.
  * body [SubscriptionPurchasesDeferRequest](#subscriptionpurchasesdeferrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### purchases.voidedpurchases.list
Lists the purchases that were cancelled, refunded or charged-back.


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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * packageName **required** `string`: Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
  * maxResults `integer`
  * startIndex `integer`
  * token `string`
  * translationLanguage `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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
  * packageName **required** `string`: Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
  * reviewId **required** `string`
  * body [ReviewsReplyRequest](#reviewsreplyrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

### Entitlement
* Entitlement `object`: An Entitlement resource indicates a user's current entitlement to an inapp item or subscription.
  * kind `string`: This kind represents an entitlement object in the androidpublisher service.
  * productId `string`: The SKU of the product.
  * productType `string`: The type of the inapp product. Possible values are:  
  * token `string`: The token which can be verified using the subscriptions or products API.

### EntitlementsListResponse
* EntitlementsListResponse `object`
  * pageInfo [PageInfo](#pageinfo)
  * resources `array`
    * items [Entitlement](#entitlement)
  * tokenPagination [TokenPagination](#tokenpagination)

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

### InappproductsBatchRequest
* InappproductsBatchRequest `object`
  * entrys `array`
    * items [InappproductsBatchRequestEntry](#inappproductsbatchrequestentry)

### InappproductsBatchRequestEntry
* InappproductsBatchRequestEntry `object`
  * batchId `integer`
  * inappproductsinsertrequest [InappproductsInsertRequest](#inappproductsinsertrequest)
  * inappproductsupdaterequest [InappproductsUpdateRequest](#inappproductsupdaterequest)
  * methodName `string`

### InappproductsBatchResponse
* InappproductsBatchResponse `object`
  * entrys `array`
    * items [InappproductsBatchResponseEntry](#inappproductsbatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsBatchResponse".

### InappproductsBatchResponseEntry
* InappproductsBatchResponseEntry `object`
  * batchId `integer`
  * inappproductsinsertresponse [InappproductsInsertResponse](#inappproductsinsertresponse)
  * inappproductsupdateresponse [InappproductsUpdateResponse](#inappproductsupdateresponse)

### InappproductsInsertRequest
* InappproductsInsertRequest `object`
  * inappproduct [InAppProduct](#inappproduct)

### InappproductsInsertResponse
* InappproductsInsertResponse `object`
  * inappproduct [InAppProduct](#inappproduct)

### InappproductsListResponse
* InappproductsListResponse `object`
  * inappproduct `array`
    * items [InAppProduct](#inappproduct)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsListResponse".
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)

### InappproductsUpdateRequest
* InappproductsUpdateRequest `object`
  * inappproduct [InAppProduct](#inappproduct)

### InappproductsUpdateResponse
* InappproductsUpdateResponse `object`
  * inappproduct [InAppProduct](#inappproduct)

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

### SubscriptionDeferralInfo
* SubscriptionDeferralInfo `object`: A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
  * desiredExpiryTimeMillis `string`: The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.
  * expectedExpiryTimeMillis `string`: The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur.

### SubscriptionPurchase
* SubscriptionPurchase `object`: A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
  * autoRenewing `boolean`: Whether the subscription will automatically be renewed when it reaches its current expiry time.
  * cancelReason `integer`: The reason why a subscription was cancelled or is not auto-renewing. Possible values are:  
  * countryCode `string`: ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
  * developerPayload `string`: A developer-specified string that contains supplemental information about an order.
  * expiryTimeMillis `string`: Time at which the subscription will expire, in milliseconds since the Epoch.
  * kind `string`: This kind represents a subscriptionPurchase object in the androidpublisher service.
  * orderId `string`: The order id of the latest recurring order associated with the purchase of the subscription.
  * paymentState `integer`: The payment state of the subscription. Possible values are:  
  * priceAmountMicros `string`: Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
  * priceCurrencyCode `string`: ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
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
  * track `string`
  * userFraction `number`
  * versionCodes `array`
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
* VoidedPurchase `object`: A VoidedPurchase resource indicates a purchase that was either cancelled/refunded/charged-back.
  * kind `string`: This kind represents a voided purchase object in the androidpublisher service.
  * purchaseTimeMillis `string`: The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970).
  * purchaseToken `string`: The token that was generated when a purchase was made. This uniquely identifies a purchase.
  * voidedTimeMillis `string`: The time at which the purchase was cancelled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).

### VoidedPurchasesListResponse
* VoidedPurchasesListResponse `object`
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)
  * voidedPurchases `array`
    * items [VoidedPurchase](#voidedpurchase)


