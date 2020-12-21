# @datafire/google_androidpublisher

Client library for Google Play Android Developer API

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

.then(data => {
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

### androidpublisher.internalappsharingartifacts.uploadapk
Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.


```js
google_androidpublisher.androidpublisher.internalappsharingartifacts.uploadapk({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
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
* output [InternalAppSharingArtifact](#internalappsharingartifact)

### androidpublisher.internalappsharingartifacts.uploadbundle
Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.


```js
google_androidpublisher.androidpublisher.internalappsharingartifacts.uploadbundle({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
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
* output [InternalAppSharingArtifact](#internalappsharingartifact)

### androidpublisher.edits.insert
Creates a new edit for an app.


```js
google_androidpublisher.androidpublisher.edits.insert({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * body [AppEdit](#appedit)
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
* output [AppEdit](#appedit)

### androidpublisher.edits.delete
Deletes an app edit.


```js
google_androidpublisher.androidpublisher.edits.delete({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
*Output schema unknown*

### androidpublisher.edits.get
Gets an app edit.


```js
google_androidpublisher.androidpublisher.edits.get({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
* output [AppEdit](#appedit)

### androidpublisher.edits.apks.list
Lists all current APKs of the app and edit.


```js
google_androidpublisher.androidpublisher.edits.apks.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
* output [ApksListResponse](#apkslistresponse)

### androidpublisher.edits.apks.upload
Uploads an APK and adds to the current edit.


```js
google_androidpublisher.androidpublisher.edits.apks.upload({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
* output [Apk](#apk)

### androidpublisher.edits.apks.addexternallyhosted
Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.


```js
google_androidpublisher.androidpublisher.edits.apks.addexternallyhosted({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * body [ApksAddExternallyHostedRequest](#apksaddexternallyhostedrequest)
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
* output [ApksAddExternallyHostedResponse](#apksaddexternallyhostedresponse)

### androidpublisher.edits.deobfuscationfiles.upload
Uploads a new deobfuscation file and attaches to the specified APK.


```js
google_androidpublisher.androidpublisher.edits.deobfuscationfiles.upload({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "deobfuscationFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Unique identifier for the Android app.
  * editId **required** `string`: Unique identifier for this edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose Deobfuscation File is being uploaded.
  * deobfuscationFileType **required** `string` (values: deobfuscationFileTypeUnspecified, proguard, nativeCode): The type of the deobfuscation file.
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
* output [DeobfuscationFilesUploadResponse](#deobfuscationfilesuploadresponse)

### androidpublisher.edits.expansionfiles.get
Fetches the expansion file configuration for the specified APK.


```js
google_androidpublisher.androidpublisher.edits.expansionfiles.get({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "expansionFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose expansion file configuration is being read or modified.
  * expansionFileType **required** `string` (values: expansionFileTypeUnspecified, main, patch): The file type of the file configuration which is being read or modified.
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
* output [ExpansionFile](#expansionfile)

### androidpublisher.edits.expansionfiles.patch
Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.


```js
google_androidpublisher.androidpublisher.edits.expansionfiles.patch({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "expansionFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose expansion file configuration is being read or modified.
  * expansionFileType **required** `string` (values: expansionFileTypeUnspecified, main, patch): The file type of the expansion file configuration which is being updated.
  * body [ExpansionFile](#expansionfile)
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
* output [ExpansionFile](#expansionfile)

### androidpublisher.edits.expansionfiles.upload
Uploads a new expansion file and attaches to the specified APK.


```js
google_androidpublisher.androidpublisher.edits.expansionfiles.upload({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "expansionFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose expansion file configuration is being read or modified.
  * expansionFileType **required** `string` (values: expansionFileTypeUnspecified, main, patch): The file type of the expansion file configuration which is being updated.
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
* output [ExpansionFilesUploadResponse](#expansionfilesuploadresponse)

### androidpublisher.edits.expansionfiles.update
Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.


```js
google_androidpublisher.androidpublisher.edits.expansionfiles.update({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0,
  "expansionFileType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * apkVersionCode **required** `integer`: The version code of the APK whose expansion file configuration is being read or modified.
  * expansionFileType **required** `string` (values: expansionFileTypeUnspecified, main, patch): The file type of the file configuration which is being read or modified.
  * body [ExpansionFile](#expansionfile)
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
* output [ExpansionFile](#expansionfile)

### androidpublisher.edits.bundles.list
Lists all current Android App Bundles of the app and edit.


```js
google_androidpublisher.androidpublisher.edits.bundles.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
* output [BundlesListResponse](#bundleslistresponse)

### androidpublisher.edits.bundles.upload
Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.


```js
google_androidpublisher.androidpublisher.edits.bundles.upload({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * ackBundleInstallationWarning `boolean`: Must be set to true if the bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).
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
* output [Bundle](#bundle)

### androidpublisher.edits.details.get
Gets details of an app.


```js
google_androidpublisher.androidpublisher.edits.details.get({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
* output [AppDetails](#appdetails)

### androidpublisher.edits.details.patch
Patches details of an app.


```js
google_androidpublisher.androidpublisher.edits.details.patch({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * body [AppDetails](#appdetails)
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
* output [AppDetails](#appdetails)

### androidpublisher.edits.details.update
Updates details of an app.


```js
google_androidpublisher.androidpublisher.edits.details.update({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * body [AppDetails](#appdetails)
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
* output [AppDetails](#appdetails)

### androidpublisher.edits.listings.deleteall
Deletes all store listings.


```js
google_androidpublisher.androidpublisher.edits.listings.deleteall({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
*Output schema unknown*

### androidpublisher.edits.listings.list
Lists all localized store listings.


```js
google_androidpublisher.androidpublisher.edits.listings.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
* output [ListingsListResponse](#listingslistresponse)

### androidpublisher.edits.listings.delete
Deletes a localized store listing.


```js
google_androidpublisher.androidpublisher.edits.listings.delete({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * language **required** `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
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
*Output schema unknown*

### androidpublisher.edits.listings.get
Gets a localized store listing.


```js
google_androidpublisher.androidpublisher.edits.listings.get({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * language **required** `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
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
* output [Listing](#listing)

### androidpublisher.edits.listings.patch
Patches a localized store listing.


```js
google_androidpublisher.androidpublisher.edits.listings.patch({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * language **required** `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
  * body [Listing](#listing)
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
* output [Listing](#listing)

### androidpublisher.edits.listings.update
Creates or updates a localized store listing.


```js
google_androidpublisher.androidpublisher.edits.listings.update({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * language **required** `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
  * body [Listing](#listing)
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
* output [Listing](#listing)

### androidpublisher.edits.images.deleteall
Deletes all images for the specified language and image type. Returns an empty response if no images are found.


```js
google_androidpublisher.androidpublisher.edits.images.deleteall({
  "packageName": "",
  "editId": "",
  "language": "",
  "imageType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * language **required** `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
  * imageType **required** `string` (values: appImageTypeUnspecified, phoneScreenshots, sevenInchScreenshots, tenInchScreenshots, tvScreenshots, wearScreenshots, icon, featureGraphic, tvBanner): Type of the Image. Providing an image type that refers to no images is a no-op.
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
* output [ImagesDeleteAllResponse](#imagesdeleteallresponse)

### androidpublisher.edits.images.list
Lists all images. The response may be empty.


```js
google_androidpublisher.androidpublisher.edits.images.list({
  "packageName": "",
  "editId": "",
  "language": "",
  "imageType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * language **required** `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language.
  * imageType **required** `string` (values: appImageTypeUnspecified, phoneScreenshots, sevenInchScreenshots, tenInchScreenshots, tvScreenshots, wearScreenshots, icon, featureGraphic, tvBanner): Type of the Image. Providing an image type that refers to no images will return an empty response.
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
* output [ImagesListResponse](#imageslistresponse)

### androidpublisher.edits.images.upload
Uploads an image of the specified language and image type, and adds to the edit.


```js
google_androidpublisher.androidpublisher.edits.images.upload({
  "packageName": "",
  "editId": "",
  "language": "",
  "imageType": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * language **required** `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
  * imageType **required** `string` (values: appImageTypeUnspecified, phoneScreenshots, sevenInchScreenshots, tenInchScreenshots, tvScreenshots, wearScreenshots, icon, featureGraphic, tvBanner): Type of the Image.
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
* output [ImagesUploadResponse](#imagesuploadresponse)

### androidpublisher.edits.images.delete
Deletes the image (specified by id) from the edit.


```js
google_androidpublisher.androidpublisher.edits.images.delete({
  "packageName": "",
  "editId": "",
  "language": "",
  "imageType": "",
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * language **required** `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
  * imageType **required** `string` (values: appImageTypeUnspecified, phoneScreenshots, sevenInchScreenshots, tenInchScreenshots, tvScreenshots, wearScreenshots, icon, featureGraphic, tvBanner): Type of the Image.
  * imageId **required** `string`: Unique identifier an image within the set of images attached to this edit.
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
*Output schema unknown*

### androidpublisher.edits.testers.get
Gets testers.


```js
google_androidpublisher.androidpublisher.edits.testers.get({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * track **required** `string`: The track to read from.
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
* output [Testers](#testers)

### androidpublisher.edits.testers.patch
Patches testers.


```js
google_androidpublisher.androidpublisher.edits.testers.patch({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * track **required** `string`: The track to update.
  * body [Testers](#testers)
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
* output [Testers](#testers)

### androidpublisher.edits.testers.update
Updates testers.


```js
google_androidpublisher.androidpublisher.edits.testers.update({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * track **required** `string`: The track to update.
  * body [Testers](#testers)
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
* output [Testers](#testers)

### androidpublisher.edits.tracks.list
Lists all tracks.


```js
google_androidpublisher.androidpublisher.edits.tracks.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
* output [TracksListResponse](#trackslistresponse)

### androidpublisher.edits.tracks.get
Gets a track.


```js
google_androidpublisher.androidpublisher.edits.tracks.get({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * track **required** `string`: Identifier of the track.
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
* output [Track](#track)

### androidpublisher.edits.tracks.patch
Patches a track.


```js
google_androidpublisher.androidpublisher.edits.tracks.patch({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * track **required** `string`: Identifier of the track.
  * body [Track](#track)
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
* output [Track](#track)

### androidpublisher.edits.tracks.update
Updates a track.


```js
google_androidpublisher.androidpublisher.edits.tracks.update({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
  * track **required** `string`: Identifier of the track.
  * body [Track](#track)
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
* output [Track](#track)

### androidpublisher.edits.commit
Commits an app edit.


```js
google_androidpublisher.androidpublisher.edits.commit({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
* output [AppEdit](#appedit)

### androidpublisher.edits.validate
Validates an app edit.


```js
google_androidpublisher.androidpublisher.edits.validate({
  "packageName": "",
  "editId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * editId **required** `string`: Identifier of the edit.
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
* output [AppEdit](#appedit)

### androidpublisher.inappproducts.list
Lists all in-app products - both managed products and subscriptions.


```js
google_androidpublisher.androidpublisher.inappproducts.list({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * maxResults `integer`: How many results the list operation should return.
  * startIndex `integer`: The index of the first element to return.
  * token `string`: Pagination token. If empty, list starts at the first product.
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
* output [InappproductsListResponse](#inappproductslistresponse)

### androidpublisher.inappproducts.insert
Creates an in-app product (i.e. a managed product or a subscriptions).


```js
google_androidpublisher.androidpublisher.inappproducts.insert({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * autoConvertMissingPrices `boolean`: If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
  * body [InAppProduct](#inappproduct)
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
* output [InAppProduct](#inappproduct)

### androidpublisher.inappproducts.delete
Deletes an in-app product (i.e. a managed product or a subscriptions).


```js
google_androidpublisher.androidpublisher.inappproducts.delete({
  "packageName": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * sku **required** `string`: Unique identifier for the in-app product.
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
*Output schema unknown*

### androidpublisher.inappproducts.get
Gets an in-app product, which can be a managed product or a subscription.


```js
google_androidpublisher.androidpublisher.inappproducts.get({
  "packageName": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * sku **required** `string`: Unique identifier for the in-app product.
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
* output [InAppProduct](#inappproduct)

### androidpublisher.inappproducts.patch
Patches an in-app product (i.e. a managed product or a subscriptions).


```js
google_androidpublisher.androidpublisher.inappproducts.patch({
  "packageName": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * sku **required** `string`: Unique identifier for the in-app product.
  * autoConvertMissingPrices `boolean`: If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
  * body [InAppProduct](#inappproduct)
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
* output [InAppProduct](#inappproduct)

### androidpublisher.inappproducts.update
Updates an in-app product (i.e. a managed product or a subscriptions).


```js
google_androidpublisher.androidpublisher.inappproducts.update({
  "packageName": "",
  "sku": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * sku **required** `string`: Unique identifier for the in-app product.
  * autoConvertMissingPrices `boolean`: If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
  * body [InAppProduct](#inappproduct)
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
* output [InAppProduct](#inappproduct)

### androidpublisher.orders.refund
Refund a user's subscription or in-app purchase order.


```js
google_androidpublisher.androidpublisher.orders.refund({
  "packageName": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
  * orderId **required** `string`: The order ID provided to the user when the subscription or in-app order was purchased.
  * revoke `boolean`: Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional).
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
*Output schema unknown*

### androidpublisher.purchases.products.get
Checks the purchase and consumption status of an inapp item.


```js
google_androidpublisher.androidpublisher.purchases.products.get({
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
* output [ProductPurchase](#productpurchase)

### androidpublisher.purchases.products.acknowledge
Acknowledges a purchase of an inapp item.


```js
google_androidpublisher.androidpublisher.purchases.products.acknowledge({
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
  * body [ProductPurchasesAcknowledgeRequest](#productpurchasesacknowledgerequest)
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
*Output schema unknown*

### androidpublisher.purchases.subscriptions.get
Checks whether a user's subscription purchase is valid and returns its expiry time.


```js
google_androidpublisher.androidpublisher.purchases.subscriptions.get({
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
* output [SubscriptionPurchase](#subscriptionpurchase)

### androidpublisher.purchases.subscriptions.acknowledge
Acknowledges a subscription purchase.


```js
google_androidpublisher.androidpublisher.purchases.subscriptions.acknowledge({
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
  * body [SubscriptionPurchasesAcknowledgeRequest](#subscriptionpurchasesacknowledgerequest)
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
*Output schema unknown*

### androidpublisher.purchases.subscriptions.cancel
Cancels a user's subscription purchase. The subscription remains valid until its expiration time.


```js
google_androidpublisher.androidpublisher.purchases.subscriptions.cancel({
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
*Output schema unknown*

### androidpublisher.purchases.subscriptions.defer
Defers a user's subscription purchase until a specified future expiration time.


```js
google_androidpublisher.androidpublisher.purchases.subscriptions.defer({
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
* output [SubscriptionPurchasesDeferResponse](#subscriptionpurchasesdeferresponse)

### androidpublisher.purchases.subscriptions.refund
Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.


```js
google_androidpublisher.androidpublisher.purchases.subscriptions.refund({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
  * subscriptionId **required** `string`: "The purchased subscription ID (for example, 'monthly001').
  * token **required** `string`: The token provided to the user's device when the subscription was purchased.
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
*Output schema unknown*

### androidpublisher.purchases.subscriptions.revoke
Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.


```js
google_androidpublisher.androidpublisher.purchases.subscriptions.revoke({
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
*Output schema unknown*

### androidpublisher.purchases.voidedpurchases.list
Lists the purchases that were canceled, refunded or charged-back.


```js
google_androidpublisher.androidpublisher.purchases.voidedpurchases.list({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
  * endTime `string`: The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
  * maxResults `integer`: Defines how many results the list operation should return. The default number depends on the resource collection.
  * startIndex `integer`: Defines the index of the first element to return. This can only be used if indexed paging is enabled.
  * startTime `string`: The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
  * token `string`: Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
  * type `integer`: The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
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
* output [VoidedPurchasesListResponse](#voidedpurchaseslistresponse)

### androidpublisher.reviews.list
Lists all reviews.


```js
google_androidpublisher.androidpublisher.reviews.list({
  "packageName": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * maxResults `integer`: How many results the list operation should return.
  * startIndex `integer`: The index of the first element to return.
  * token `string`: Pagination token. If empty, list starts at the first review.
  * translationLanguage `string`: Language localization code.
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
* output [ReviewsListResponse](#reviewslistresponse)

### androidpublisher.reviews.get
Gets a single review.


```js
google_androidpublisher.androidpublisher.reviews.get({
  "packageName": "",
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * reviewId **required** `string`: Unique identifier for a review.
  * translationLanguage `string`: Language localization code.
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
* output [Review](#review)

### androidpublisher.reviews.reply
Replies to a single review, or updates an existing reply.


```js
google_androidpublisher.androidpublisher.reviews.reply({
  "packageName": "",
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * reviewId **required** `string`: Unique identifier for a review.
  * body [ReviewsReplyRequest](#reviewsreplyrequest)
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
* output [ReviewsReplyResponse](#reviewsreplyresponse)

### androidpublisher.systemapks.variants.list
Returns the list of previously created system APK variants.


```js
google_androidpublisher.androidpublisher.systemapks.variants.list({
  "packageName": "",
  "versionCode": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * versionCode **required** `string`: The version code of the App Bundle.
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
* output [SystemApksListResponse](#systemapkslistresponse)

### androidpublisher.systemapks.variants.create
Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.


```js
google_androidpublisher.androidpublisher.systemapks.variants.create({
  "packageName": "",
  "versionCode": ""
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * versionCode **required** `string`: The version code of the App Bundle.
  * body [Variant](#variant)
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
* output [Variant](#variant)

### androidpublisher.systemapks.variants.get
Returns a previously created system APK variant.


```js
google_androidpublisher.androidpublisher.systemapks.variants.get({
  "packageName": "",
  "versionCode": "",
  "variantId": 0
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * versionCode **required** `string`: The version code of the App Bundle.
  * variantId **required** `integer`: The ID of a previously created system APK variant.
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
* output [Variant](#variant)

### androidpublisher.systemapks.variants.download
Downloads a previously created system APK which is suitable for inclusion in a system image.


```js
google_androidpublisher.androidpublisher.systemapks.variants.download({
  "packageName": "",
  "versionCode": "",
  "variantId": 0
}, context)
```

#### Input
* input `object`
  * packageName **required** `string`: Package name of the app.
  * versionCode **required** `string`: The version code of the App Bundle.
  * variantId **required** `integer`: The ID of a previously created system APK variant.
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
*Output schema unknown*



## Definitions

### Apk
* Apk `object`: Information about an APK. The resource for ApksService.
  * binary [ApkBinary](#apkbinary)
  * versionCode `integer`: The version code of the APK, as specified in the manifest file.

### ApkBinary
* ApkBinary `object`: Represents the binary payload of an APK.
  * sha1 `string`: A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.
  * sha256 `string`: A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command.

### ApksAddExternallyHostedRequest
* ApksAddExternallyHostedRequest `object`: Request to create a new externally hosted APK.
  * externallyHostedApk [ExternallyHostedApk](#externallyhostedapk)

### ApksAddExternallyHostedResponse
* ApksAddExternallyHostedResponse `object`: Response for creating a new externally hosted APK.
  * externallyHostedApk [ExternallyHostedApk](#externallyhostedapk)

### ApksListResponse
* ApksListResponse `object`: Response listing all APKs.
  * apks `array`: All APKs.
    * items [Apk](#apk)
  * kind `string`: The kind of this response ("androidpublisher#apksListResponse").

### AppDetails
* AppDetails `object`: The app details. The resource for DetailsService.
  * contactEmail `string`: The user-visible support email for this app.
  * contactPhone `string`: The user-visible support telephone number for this app.
  * contactWebsite `string`: The user-visible website for this app.
  * defaultLanguage `string`: Default language code, in BCP 47 format (eg "en-US").

### AppEdit
* AppEdit `object`: An app edit. The resource for EditsService.
  * expiryTimeSeconds `string`: Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use.
  * id `string`: Output only. Identifier of the edit. Can be used in subsequent API calls.

### Bundle
* Bundle `object`: Information about a bundle. The resource for BundlesService.
  * sha1 `string`: A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command.
  * sha256 `string`: A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command.
  * versionCode `integer`: The version code of the Android App Bundle, as specified in the Android App Bundle's base module APK manifest file.

### BundlesListResponse
* BundlesListResponse `object`: Response listing all bundles.
  * bundles `array`: All bundles.
    * items [Bundle](#bundle)
  * kind `string`: The kind of this response ("androidpublisher#bundlesListResponse").

### Comment
* Comment `object`: An entry of conversation between user and developer.
  * developerComment [DeveloperComment](#developercomment)
  * userComment [UserComment](#usercomment)

### CountryTargeting
* CountryTargeting `object`: Country targeting specification.
  * countries `array`: Countries to target, specified as two letter [CLDR codes](https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html).
    * items `string`
  * includeRestOfWorld `boolean`: Include "rest of world" as well as explicitly targeted countries.

### DeobfuscationFile
* DeobfuscationFile `object`: Represents a deobfuscation file.
  * symbolType `string` (values: deobfuscationFileTypeUnspecified, proguard, nativeCode): The type of the deobfuscation file.

### DeobfuscationFilesUploadResponse
* DeobfuscationFilesUploadResponse `object`: Responses for the upload.
  * deobfuscationFile [DeobfuscationFile](#deobfuscationfile)

### DeveloperComment
* DeveloperComment `object`: Developer entry from conversation between user and developer.
  * lastModified [Timestamp](#timestamp)
  * text `string`: The content of the comment, i.e. reply body.

### DeviceMetadata
* DeviceMetadata `object`: Characteristics of the user's device.
  * cpuMake `string`: Device CPU make, e.g. "Qualcomm"
  * cpuModel `string`: Device CPU model, e.g. "MSM8974"
  * deviceClass `string`: Device class (e.g. tablet)
  * glEsVersion `integer`: OpenGL version
  * manufacturer `string`: Device manufacturer (e.g. Motorola)
  * nativePlatform `string`: Comma separated list of native platforms (e.g. "arm", "arm7")
  * productName `string`: Device model name (e.g. Droid)
  * ramMb `integer`: Device RAM in Megabytes, e.g. "2048"
  * screenDensityDpi `integer`: Screen density in DPI
  * screenHeightPx `integer`: Screen height in pixels
  * screenWidthPx `integer`: Screen width in pixels

### DeviceSpec
* DeviceSpec `object`: The device spec used to generate a system APK.
  * screenDensity `integer`: Screen dpi.
  * supportedAbis `array`: Supported ABI architectures in the order of preference. The values should be the string as reported by the platform, e.g. "armeabi-v7a", "x86_64".
    * items `string`
  * supportedLocales `array`: All installed locales represented as BCP-47 strings, e.g. "en-US".
    * items `string`

### ExpansionFile
* ExpansionFile `object`: An expansion file. The resource for ExpansionFilesService.
  * fileSize `string`: If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes.
  * referencesVersion `integer`: If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set.

### ExpansionFilesUploadResponse
* ExpansionFilesUploadResponse `object`: Response for uploading an expansion file.
  * expansionFile [ExpansionFile](#expansionfile)

### ExternallyHostedApk
* ExternallyHostedApk `object`: Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
  * applicationLabel `string`: The application label.
  * certificateBase64s `array`: A certificate (or array of certificates if a certificate-chain is used) used to sign this APK, represented as a base64 encoded byte array.
    * items `string`
  * externallyHostedUrl `string`: The URL at which the APK is hosted. This must be an https URL.
  * fileSha1Base64 `string`: The sha1 checksum of this APK, represented as a base64 encoded byte array.
  * fileSha256Base64 `string`: The sha256 checksum of this APK, represented as a base64 encoded byte array.
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
    * items [UsesPermission](#usespermission)
  * versionCode `integer`: The version code of this APK.
  * versionName `string`: The version name of this APK.

### Image
* Image `object`: An uploaded image. The resource for ImagesService.
  * id `string`: A unique id representing this image.
  * sha1 `string`: A sha1 hash of the image.
  * sha256 `string`: A sha256 hash of the image.
  * url `string`: A URL that will serve a preview of the image.

### ImagesDeleteAllResponse
* ImagesDeleteAllResponse `object`: Response for deleting all images.
  * deleted `array`: The deleted images.
    * items [Image](#image)

### ImagesListResponse
* ImagesListResponse `object`: Response listing all images.
  * images `array`: All listed Images.
    * items [Image](#image)

### ImagesUploadResponse
* ImagesUploadResponse `object`: Response for uploading an image.
  * image [Image](#image)

### InAppProduct
* InAppProduct `object`: An in-app product. The resource for InappproductsService.
  * defaultLanguage `string`: Default language of the localized data, as defined by BCP-47. e.g. "en-US".
  * defaultPrice [Price](#price)
  * gracePeriod `string`: Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days).
  * listings `object`: List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US".
  * packageName `string`: Package name of the parent app.
  * prices `object`: Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2.
  * purchaseType `string` (values: purchaseTypeUnspecified, managedUser, subscription): The type of the product, e.g. a recurring subscription.
  * sku `string`: Stock-keeping-unit (SKU) of the product, unique within an app.
  * status `string` (values: statusUnspecified, active, inactive): The status of the product, e.g. whether it's active.
  * subscriptionPeriod `string`: Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year).
  * trialPeriod `string`: Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days).

### InAppProductListing
* InAppProductListing `object`: Store listing of a single in-app product.
  * benefits `array`: Localized entitlement benefits for a subscription.
    * items `string`
  * description `string`: Description for the store listing.
  * title `string`: Title for the store listing.

### InappproductsListResponse
* InappproductsListResponse `object`: Response listing all in-app products.
  * inappproduct `array`: All in-app products.
    * items [InAppProduct](#inappproduct)
  * kind `string`: The kind of this response ("androidpublisher#inappproductsListResponse").
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)

### InternalAppSharingArtifact
* InternalAppSharingArtifact `object`: An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
  * certificateFingerprint `string`: The sha256 fingerprint of the certificate used to sign the generated artifact.
  * downloadUrl `string`: The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it.
  * sha256 `string`: The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command.

### IntroductoryPriceInfo
* IntroductoryPriceInfo `object`: Contains the introductory price information for a subscription.
  * introductoryPriceAmountMicros `string`: Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
  * introductoryPriceCurrencyCode `string`: ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
  * introductoryPriceCycles `integer`: The number of billing period to offer introductory pricing.
  * introductoryPricePeriod `string`: Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year).

### Listing
* Listing `object`: A localized store listing. The resource for ListingsService.
  * fullDescription `string`: Full description of the app.
  * language `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
  * shortDescription `string`: Short description of the app.
  * title `string`: Localized title of the app.
  * video `string`: URL of a promotional YouTube video for the app.

### ListingsListResponse
* ListingsListResponse `object`: Response listing all localized listings.
  * kind `string`: The kind of this response ("androidpublisher#listingsListResponse").
  * listings `array`: All localized listings.
    * items [Listing](#listing)

### LocalizedText
* LocalizedText `object`: Release notes specification, i.e. language and text.
  * language `string`: Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
  * text `string`: The text in the given language.

### PageInfo
* PageInfo `object`: Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
  * resultPerPage `integer`: Maximum number of results returned in one page. ! The number of results included in the API response.
  * startIndex `integer`: Index of the first result returned in the current page.
  * totalResults `integer`: Total number of results available on the backend ! The total number of results in the result set.

### Price
* Price `object`: Definition of a price, i.e. currency and units.
  * currency `string`: 3 letter Currency code, as defined by ISO 4217. See java/com/google/common/money/CurrencyCode.java
  * priceMicros `string`: Price in 1/million of the currency base unit, represented as a string.

### ProductPurchase
* ProductPurchase `object`: A ProductPurchase resource indicates the status of a user's inapp product purchase.
  * acknowledgementState `integer`: The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged
  * consumptionState `integer`: The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed
  * developerPayload `string`: A developer-specified string that contains supplemental information about an order.
  * kind `string`: This kind represents an inappPurchase object in the androidpublisher service.
  * obfuscatedExternalAccountId `string`: An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
  * obfuscatedExternalProfileId `string`: An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
  * orderId `string`: The order id associated with the purchase of the inapp product.
  * productId `string`: The inapp product SKU.
  * purchaseState `integer`: The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending
  * purchaseTimeMillis `string`: The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
  * purchaseToken `string`: The purchase token generated to identify this purchase.
  * purchaseType `integer`: The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) 2. Rewarded (i.e. from watching a video ad instead of paying)
  * quantity `integer`: The quantity associated with the purchase of the inapp product.
  * regionCode `string`: ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted.

### ProductPurchasesAcknowledgeRequest
* ProductPurchasesAcknowledgeRequest `object`: Request for the product.purchases.acknowledge API.
  * developerPayload `string`: Payload to attach to the purchase.

### Review
* Review `object`: An Android app review.
  * authorName `string`: The name of the user who wrote the review.
  * comments `array`: A repeated field containing comments for the review.
    * items [Comment](#comment)
  * reviewId `string`: Unique identifier for this review.

### ReviewReplyResult
* ReviewReplyResult `object`: The result of replying/updating a reply to review.
  * lastEdited [Timestamp](#timestamp)
  * replyText `string`: The reply text that was applied.

### ReviewsListResponse
* ReviewsListResponse `object`: Response listing reviews.
  * pageInfo [PageInfo](#pageinfo)
  * reviews `array`: List of reviews.
    * items [Review](#review)
  * tokenPagination [TokenPagination](#tokenpagination)

### ReviewsReplyRequest
* ReviewsReplyRequest `object`: Request to reply to review or update existing reply.
  * replyText `string`: The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.

### ReviewsReplyResponse
* ReviewsReplyResponse `object`: Response on status of replying to a review.
  * result [ReviewReplyResult](#reviewreplyresult)

### SubscriptionCancelSurveyResult
* SubscriptionCancelSurveyResult `object`: Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
  * cancelSurveyReason `integer`: The cancellation reason the user chose in the survey. Possible values are: 0. Other 1. I don't use this service enough 2. Technical issues 3. Cost-related reasons 4. I found a better app
  * userInputCancelReason `string`: The customized input cancel reason from the user. Only present when cancelReason is 0.

### SubscriptionDeferralInfo
* SubscriptionDeferralInfo `object`: A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
  * desiredExpiryTimeMillis `string`: The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.
  * expectedExpiryTimeMillis `string`: The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur.

### SubscriptionPriceChange
* SubscriptionPriceChange `object`: Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
  * newPrice [Price](#price)
  * state `integer`: The current state of the price change. Possible values are: 0. Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API. 1. Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.

### SubscriptionPurchase
* SubscriptionPurchase `object`: A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
  * acknowledgementState `integer`: The acknowledgement state of the subscription product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged
  * autoRenewing `boolean`: Whether the subscription will automatically be renewed when it reaches its current expiry time.
  * autoResumeTimeMillis `string`: Time at which the subscription will be automatically resumed, in milliseconds since the Epoch. Only present if the user has requested to pause the subscription.
  * cancelReason `integer`: The reason why a subscription was canceled or is not auto-renewing. Possible values are: 0. User canceled the subscription 1. Subscription was canceled by the system, for example because of a billing problem 2. Subscription was replaced with a new subscription 3. Subscription was canceled by the developer
  * cancelSurveyResult [SubscriptionCancelSurveyResult](#subscriptioncancelsurveyresult)
  * countryCode `string`: ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
  * developerPayload `string`: A developer-specified string that contains supplemental information about an order.
  * emailAddress `string`: The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * expiryTimeMillis `string`: Time at which the subscription will expire, in milliseconds since the Epoch.
  * externalAccountId `string`: User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.
  * familyName `string`: The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * givenName `string`: The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * introductoryPriceInfo [IntroductoryPriceInfo](#introductorypriceinfo)
  * kind `string`: This kind represents a subscriptionPurchase object in the androidpublisher service.
  * linkedPurchaseToken `string`: The purchase token of the originating purchase if this subscription is one of the following: 0. Re-signup of a canceled but non-lapsed subscription 1. Upgrade/downgrade from a previous subscription For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.
  * obfuscatedExternalAccountId `string`: An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
  * obfuscatedExternalProfileId `string`: An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
  * orderId `string`: The order id of the latest recurring order associated with the purchase of the subscription.
  * paymentState `integer`: The payment state of the subscription. Possible values are: 0. Payment pending 1. Payment received 2. Free trial 3. Pending deferred upgrade/downgrade Not present for canceled, expired subscriptions.
  * priceAmountMicros `string`: Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
  * priceChange [SubscriptionPriceChange](#subscriptionpricechange)
  * priceCurrencyCode `string`: ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
  * profileId `string`: The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * profileName `string`: The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
  * promotionCode `string`: The promotion code applied on this purchase. This field is only set if a vanity code promotion is applied when the subscription was purchased.
  * promotionType `integer`: The type of promotion applied on this purchase. This field is only set if a promotion is applied when the subscription was purchased. Possible values are: 0. One time code 1. Vanity code
  * purchaseType `integer`: The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code)
  * startTimeMillis `string`: Time at which the subscription was granted, in milliseconds since the Epoch.
  * userCancellationTimeMillis `string`: The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0.

### SubscriptionPurchasesAcknowledgeRequest
* SubscriptionPurchasesAcknowledgeRequest `object`: Request for the purchases.subscriptions.acknowledge API.
  * developerPayload `string`: Payload to attach to the purchase.

### SubscriptionPurchasesDeferRequest
* SubscriptionPurchasesDeferRequest `object`: Request for the purchases.subscriptions.defer API.
  * deferralInfo [SubscriptionDeferralInfo](#subscriptiondeferralinfo)

### SubscriptionPurchasesDeferResponse
* SubscriptionPurchasesDeferResponse `object`: Response for the purchases.subscriptions.defer API.
  * newExpiryTimeMillis `string`: The new expiry time for the subscription in milliseconds since the Epoch.

### SystemApksListResponse
* SystemApksListResponse `object`: Response to list previously created system APK variants.
  * variants `array`: All system APK variants created.
    * items [Variant](#variant)

### Testers
* Testers `object`: The testers of an app. The resource for TestersService.
  * googleGroups `array`: All testing Google Groups, as email addresses.
    * items `string`

### Timestamp
* Timestamp `object`: A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
  * nanos `integer`: Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive.
  * seconds `string`: Represents seconds of UTC time since Unix epoch.

### TokenPagination
* TokenPagination `object`: Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page.
  * nextPageToken `string`: Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index.
  * previousPageToken `string`

### Track
* Track `object`: A track configuration. The resource for TracksService.
  * releases `array`: In a read request, represents all active releases in the track. In an update request, represents desired changes.
    * items [TrackRelease](#trackrelease)
  * track `string`: Identifier of the track.

### TrackRelease
* TrackRelease `object`: A release within a track.
  * countryTargeting [CountryTargeting](#countrytargeting)
  * inAppUpdatePriority `integer`: In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates.
  * name `string`: The release name. Not required to be unique. If not set, the name is generated from the APK's version_name. If the release contains multiple APKs, the name is generated from the date.
  * releaseNotes `array`: A description of what is new in this release.
    * items [LocalizedText](#localizedtext)
  * status `string` (values: statusUnspecified, draft, inProgress, halted, completed): The status of the release.
  * userFraction `number`: Fraction of users who are eligible for a staged release. 0 < fraction < 1. Can only be set when status is "inProgress" or "halted".
  * versionCodes `array`: Version codes of all APKs in the release. Must include version codes to retain from previous releases.
    * items `string`

### TracksListResponse
* TracksListResponse `object`: Response listing all tracks.
  * kind `string`: The kind of this response ("androidpublisher#tracksListResponse").
  * tracks `array`: All tracks.
    * items [Track](#track)

### UserComment
* UserComment `object`: User entry from conversation between user and developer.
  * androidOsVersion `integer`: Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent.
  * appVersionCode `integer`: Integer version code of the app as installed at the time the review was written. May be absent.
  * appVersionName `string`: String version name of the app as installed at the time the review was written. May be absent.
  * device `string`: Codename for the reviewer's device, e.g. klte, flounder. May be absent.
  * deviceMetadata [DeviceMetadata](#devicemetadata)
  * lastModified [Timestamp](#timestamp)
  * originalText `string`: Untranslated text of the review, where the review was translated. If the review was not translated this is left blank.
  * reviewerLanguage `string`: Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent.
  * starRating `integer`: The star rating associated with the review, from 1 to 5.
  * text `string`: The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character.
  * thumbsDownCount `integer`: Number of users who have given this review a thumbs down.
  * thumbsUpCount `integer`: Number of users who have given this review a thumbs up.

### UsesPermission
* UsesPermission `object`: A permission used by this APK.
  * maxSdkVersion `integer`: Optionally, the maximum SDK version for which the permission is required.
  * name `string`: The name of the permission requested.

### Variant
* Variant `object`: APK that is suitable for inclusion in a system image. The resource of SystemApksService.
  * deviceSpec [DeviceSpec](#devicespec)
  * variantId `integer`: Output only. The ID of a previously created system APK variant.

### VoidedPurchase
* VoidedPurchase `object`: A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
  * kind `string`: This kind represents a voided purchase object in the androidpublisher service.
  * orderId `string`: The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal.
  * purchaseTimeMillis `string`: The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970).
  * purchaseToken `string`: The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API).
  * voidedReason `integer`: The reason why the purchase was voided, possible values are: 0. Other 1. Remorse 2. Not_received 3. Defective 4. Accidental_purchase 5. Fraud 6. Friendly_fraud 7. Chargeback
  * voidedSource `integer`: The initiator of voided purchase, possible values are: 0. User 1. Developer 2. Google
  * voidedTimeMillis `string`: The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).

### VoidedPurchasesListResponse
* VoidedPurchasesListResponse `object`: Response for the voidedpurchases.list API.
  * pageInfo [PageInfo](#pageinfo)
  * tokenPagination [TokenPagination](#tokenpagination)
  * voidedPurchases `array`
    * items [VoidedPurchase](#voidedpurchase)


