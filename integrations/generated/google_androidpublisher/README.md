# @datafire/google_androidpublisher

Client library for Google Play Developer

## Installation and Usage
```bash
npm install --save datafire @datafire/google_androidpublisher
```

```js
let datafire = require('datafire');
let google_androidpublisher = require('@datafire/google_androidpublisher').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_androidpublisher: account,
  }
})

google_androidpublisher.inappproducts.batch({}, context).then(data => {
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_androidpublisher.oauthRefresh(null, context)
```


### inappproducts.batch



```js
google_androidpublisher.inappproducts.batch({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.insert
Creates a new edit for an app, populated with the app's current state.


```js
google_androidpublisher.edits.insert({
  "packageName": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* body (object) - Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.delete
Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.


```js
google_androidpublisher.edits.delete({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.get
Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).


```js
google_androidpublisher.edits.get({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.apks.list



```js
google_androidpublisher.edits.apks.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.apks.upload



```js
google_androidpublisher.edits.apks.upload({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.apks.addexternallyhosted
Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.


```js
google_androidpublisher.edits.apks.addexternallyhosted({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier of the Android app for which the deobfuscatiuon files are being uploaded; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The version code of the APK whose deobfuscation file is being uploaded.
* deobfuscationFileType (string) **required**
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The version code of the APK whose Expansion File configuration is being read or modified.
* expansionFileType (string) **required**
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The version code of the APK whose Expansion File configuration is being read or modified.
* expansionFileType (string) **required**
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The version code of the APK whose Expansion File configuration is being read or modified.
* expansionFileType (string) **required**
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The version code of the APK whose Expansion File configuration is being read or modified.
* expansionFileType (string) **required**
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.apklistings.deleteall
Deletes all the APK-specific localized listings for a specified APK.


```js
google_androidpublisher.edits.apklistings.deleteall({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The APK version code whose APK-specific listings should be read or modified.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.apklistings.list
Lists all the APK-specific localized listings for a specified APK.


```js
google_androidpublisher.edits.apklistings.list({
  "packageName": "",
  "editId": "",
  "apkVersionCode": 0
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The APK version code whose APK-specific listings should be read or modified.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The APK version code whose APK-specific listings should be read or modified.
* language (string) **required** - The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The APK version code whose APK-specific listings should be read or modified.
* language (string) **required** - The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The APK version code whose APK-specific listings should be read or modified.
* language (string) **required** - The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* apkVersionCode (integer) **required** - The APK version code whose APK-specific listings should be read or modified.
* language (string) **required** - The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.details.get
Fetches app details for this edit. This includes the default language and developer support contact information.


```js
google_androidpublisher.edits.details.get({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.details.patch
Updates app details for this edit. This method supports patch semantics.


```js
google_androidpublisher.edits.details.patch({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.details.update
Updates app details for this edit.


```js
google_androidpublisher.edits.details.update({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.listings.deleteall
Deletes all localized listings from an edit.


```js
google_androidpublisher.edits.listings.deleteall({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.listings.list
Returns all of the localized store listings attached to this edit.


```js
google_androidpublisher.edits.listings.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.listings.delete
Deletes the specified localized store listing from an edit.


```js
google_androidpublisher.edits.listings.delete({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* language (string) **required** - The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.listings.get
Fetches information about a localized store listing.


```js
google_androidpublisher.edits.listings.get({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* language (string) **required** - The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.listings.patch
Creates or updates a localized store listing. This method supports patch semantics.


```js
google_androidpublisher.edits.listings.patch({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* language (string) **required** - The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.listings.update
Creates or updates a localized store listing.


```js
google_androidpublisher.edits.listings.update({
  "packageName": "",
  "editId": "",
  "language": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* language (string) **required** - The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* language (string) **required** - The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
* imageType (string) **required**
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* language (string) **required** - The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
* imageType (string) **required**
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* language (string) **required** - The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
* imageType (string) **required**
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* language (string) **required** - The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
* imageType (string) **required**
* imageId (string) **required** - Unique identifier an image within the set of images attached to this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.testers.get



```js
google_androidpublisher.edits.testers.get({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* track (string) **required**
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.testers.patch



```js
google_androidpublisher.edits.testers.patch({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* track (string) **required**
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.testers.update



```js
google_androidpublisher.edits.testers.update({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* track (string) **required**
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.tracks.list
Lists all the track configurations for this edit.


```js
google_androidpublisher.edits.tracks.list({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.tracks.get
Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.


```js
google_androidpublisher.edits.tracks.get({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* track (string) **required** - The track type to read or modify.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.tracks.patch
Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume. This method supports patch semantics.


```js
google_androidpublisher.edits.tracks.patch({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* track (string) **required** - The track type to read or modify.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.tracks.update
Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume.


```js
google_androidpublisher.edits.tracks.update({
  "packageName": "",
  "editId": "",
  "track": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* track (string) **required** - The track type to read or modify.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.commit
Commits/applies the changes made in this edit back to the app.


```js
google_androidpublisher.edits.commit({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### edits.validate
Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.


```js
google_androidpublisher.edits.validate({
  "packageName": "",
  "editId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
* editId (string) **required** - Unique identifier for this edit.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### entitlements.list
Lists the user's current inapp item or subscription entitlements


```js
google_androidpublisher.entitlements.list({
  "packageName": ""
}, context)
```

#### Parameters
* packageName (string) **required** - The package name of the application the inapp product was sold in (for example, 'com.some.thing').
* maxResults (integer)
* productId (string) - The product id of the inapp product (for example, 'sku1'). This can be used to restrict the result set.
* startIndex (integer)
* token (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inappproducts.list
List all the in-app products for an Android app, both subscriptions and managed in-app products..


```js
google_androidpublisher.inappproducts.list({
  "packageName": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
* maxResults (integer)
* startIndex (integer)
* token (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inappproducts.insert
Creates a new in-app product for an app.


```js
google_androidpublisher.inappproducts.insert({
  "packageName": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app; for example, "com.spiffygame".
* autoConvertMissingPrices (boolean) - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inappproducts.delete
Delete an in-app product for an app.


```js
google_androidpublisher.inappproducts.delete({
  "packageName": "",
  "sku": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
* sku (string) **required** - Unique identifier for the in-app product.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inappproducts.get
Returns information about the in-app product specified.


```js
google_androidpublisher.inappproducts.get({
  "packageName": "",
  "sku": ""
}, context)
```

#### Parameters
* packageName (string) **required**
* sku (string) **required** - Unique identifier for the in-app product.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inappproducts.patch
Updates the details of an in-app product. This method supports patch semantics.


```js
google_androidpublisher.inappproducts.patch({
  "packageName": "",
  "sku": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
* sku (string) **required** - Unique identifier for the in-app product.
* autoConvertMissingPrices (boolean) - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inappproducts.update
Updates the details of an in-app product.


```js
google_androidpublisher.inappproducts.update({
  "packageName": "",
  "sku": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
* sku (string) **required** - Unique identifier for the in-app product.
* autoConvertMissingPrices (boolean) - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### purchases.products.get
Checks the purchase and consumption status of an inapp item.


```js
google_androidpublisher.purchases.products.get({
  "packageName": "",
  "productId": "",
  "token": ""
}, context)
```

#### Parameters
* packageName (string) **required** - The package name of the application the inapp product was sold in (for example, 'com.some.thing').
* productId (string) **required** - The inapp product SKU (for example, 'com.some.thing.inapp1').
* token (string) **required** - The token provided to the user's device when the inapp product was purchased.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### purchases.subscriptions.get
Checks whether a user's subscription purchase is valid and returns its expiry time.


```js
google_androidpublisher.purchases.subscriptions.get({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Parameters
* packageName (string) **required** - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
* subscriptionId (string) **required** - The purchased subscription ID (for example, 'monthly001').
* token (string) **required** - The token provided to the user's device when the subscription was purchased.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### purchases.subscriptions.cancel
Cancels a user's subscription purchase. The subscription remains valid until its expiration time.


```js
google_androidpublisher.purchases.subscriptions.cancel({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Parameters
* packageName (string) **required** - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
* subscriptionId (string) **required** - The purchased subscription ID (for example, 'monthly001').
* token (string) **required** - The token provided to the user's device when the subscription was purchased.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### purchases.subscriptions.defer
Defers a user's subscription purchase until a specified future expiration time.


```js
google_androidpublisher.purchases.subscriptions.defer({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Parameters
* packageName (string) **required** - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
* subscriptionId (string) **required** - The purchased subscription ID (for example, 'monthly001').
* token (string) **required** - The token provided to the user's device when the subscription was purchased.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### purchases.subscriptions.refund
Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.


```js
google_androidpublisher.purchases.subscriptions.refund({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Parameters
* packageName (string) **required** - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
* subscriptionId (string) **required** - The purchased subscription ID (for example, 'monthly001').
* token (string) **required** - The token provided to the user's device when the subscription was purchased.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### purchases.subscriptions.revoke
Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.


```js
google_androidpublisher.purchases.subscriptions.revoke({
  "packageName": "",
  "subscriptionId": "",
  "token": ""
}, context)
```

#### Parameters
* packageName (string) **required** - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
* subscriptionId (string) **required** - The purchased subscription ID (for example, 'monthly001').
* token (string) **required** - The token provided to the user's device when the subscription was purchased.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### purchases.voidedpurchases.list
Lists the purchases that were cancelled, refunded or charged-back.


```js
google_androidpublisher.purchases.voidedpurchases.list({
  "packageName": ""
}, context)
```

#### Parameters
* packageName (string) **required** - The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
* endTime (string) - The time, in milliseconds since the Epoch, of the newest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time.
* maxResults (integer)
* startIndex (integer)
* startTime (string) - The time, in milliseconds since the Epoch, of the oldest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days.
* token (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reviews.list
Returns a list of reviews. Only reviews from last week will be returned.


```js
google_androidpublisher.reviews.list({
  "packageName": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
* maxResults (integer)
* startIndex (integer)
* token (string)
* translationLanguage (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reviews.get
Returns a single review.


```js
google_androidpublisher.reviews.get({
  "packageName": "",
  "reviewId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
* reviewId (string) **required**
* translationLanguage (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reviews.reply
Reply to a single review, or update an existing reply.


```js
google_androidpublisher.reviews.reply({
  "packageName": "",
  "reviewId": ""
}, context)
```

#### Parameters
* packageName (string) **required** - Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
* reviewId (string) **required**
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

