# @datafire/dropbox_content

Client library for Dropbox API

## Installation and Usage
```bash
npm install --save @datafire/dropbox_content
```
```js
let dropbox_content = require('@datafire/dropbox_content').create({
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

Dropbox API

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
dropbox_content.oauthCallback({
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
dropbox_content.oauthRefresh(null, context)
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

### files.download_zip.post
Download a folder from the user's Dropbox, as a zip file. The folder must be less than 20 GB in size and have fewer than 10,000 total files. The input cannot be a single file. Any single file must be less than 4GB in size.


```js
dropbox_content.files.download_zip.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["path"]}

#### Output
* output `object`
  * metadata **required** `object`
    * name **required** `string`
    * path_display **required** `string`
    * path_lower **required** `string`
    * sharing_info **required** `object`
      * read_only **required** `boolean`
      * parent_shared_folder_id **required** `string`
      * traverse_only **required** `boolean`
      * no_access **required** `boolean`
    * property_groups **required** `array`
      * items `object`
        * fields **required** `array`
          * items `object`
        * template_id **required** `string`
    * id **required** `string`

### oauth2.token.post
This endpoint only applies to apps using the authorization code flow . An app calls this endpoint to acquire a bearer token once the user has authorized the app. Calls to /oauth2/token need to be authenticated using the apps's key and secret. These can either be passed as application/x-www-form-urlencoded POST parameters (see parameters below) or via HTTP basic authentication . If basic authentication is used, the app key should be provided as the username, and the app secret should be provided as the password.


```js
dropbox_content.oauth2.token.post({}, context)
```

#### Input
* input `object`
  * code `string`: The code acquired by directing users to .
  * grant_type `string`: The grant type, which must be .
  * client_id `string`: If credentials are passed in parameters, this parameter should be present and should be the app's key (found in the ).
  * client_secret `string`: If credentials are passed in parameters, this parameter should be present and should be the app's secret.
  * redirect_uri `string`: Only used to validate that it matches the original , not used to redirect again.

#### Output
* output `object`
  * access_token **required** `string`
  * token_type **required** `string`
  * account_id **required** `string`
  * uid **required** `string`

### files.upload_session.finish.post
Finish an upload session and save the uploaded data to the given file path. A single request should not upload more than 150 MB. The maximum size of a file one can upload to an upload session is 350 GB. Calls to this endpoint will count as data transport calls for any Dropbox Business teams with a limit on the number of data transport calls allowed per month. For more information, see the Data transport limit page .


```js
dropbox_content.files.upload_session.finish.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["cursor", "commit"]}
  * file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### files.get_preview.post
Get a preview for a file. Currently, PDF previews are generated for files with the following extensions: .ai, .doc, .docm, .docx, .eps, .odp, .odt, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .rtf. HTML previews are generated for files with the following extensions: .csv, .ods, .xls, .xlsm, .xlsx. Other formats will return an unsupported extension error.


```js
dropbox_content.files.get_preview.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["path", "rev deprecated"]}

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### oauth2.authorize.get
This starts the OAuth 2.0 authorization flow. This isn't an API call—it's the web page that lets the user sign in to Dropbox and authorize your app. After the user decides whether or not to authorize your app, they will be redirected to the URI specified by redirect_uri . OAuth 2.0 supports two authorization flows: The code flow returns a code via the redirect_uri callback which should then be converted into a bearer token using the /oauth2/token call . This is the recommended flow for apps that are running on a server. The token or implicit grant flow returns the bearer token via the redirect_uri callback, rather than requiring your app to make a second call to a server. This is useful for pure client-side apps, such as mobile apps or JavaScript-based apps. For more information on the two flows, see Section 1.3 of the OAuth 2 spec . If the user isn't already signed in to the Dropbox web site, they will be prompted to do so on this web page. Note that some users use their Google account to sign in to Dropbox. In order to comply with Google's policy against processing the OAuth flow inside a web-view , you should not display this web page inside a web-view.


```js
dropbox_content.oauth2.authorize.get({}, context)
```

#### Input
* input `object`
  * response_type `string`: The grant type requested, either or .
  * client_id `string`: The app's key, found in the .
  * redirect_uri `string`: Where to redirect the user after authorization has completed. This must be the exact URI registered in the ; even 'localhost' must be listed if it is used for testing. All redirect URIs must be HTTPS except for localhost URIs. A redirect URI is required for the flow, but optional for the flow. If the redirect URI is omitted, the will be presented directly to the user and they will be invited to enter the information in your app.
  * state `string`: Up to 500 bytes of arbitrary data that will be passed back to your redirect URI. This parameter should be used to protect against cross-site request forgery (CSRF). See Sections and of the OAuth 2.0 threat model spec.
  * require_role `string`: If this parameter is specified, the user will be asked to authorize with a particular type of Dropbox account, either for a team account or for a personal account. Your app should still verify the type of Dropbox account after authorization since the user could modify or remove the parameter.
  * force_reapprove `boolean`: Whether or not to force the user to approve the app again if they've already done so. If (default), a user who has already approved the application may be automatically redirected to the URI specified by . If , the user will not be automatically redirected and will have to approve the app again.
  * disable_signup `boolean`: When true (default is false) users will not be able to sign up for a Dropbox account via the authorization page. Instead, the authorization page will show a link to the Dropbox iOS app in the App Store. This is only intended for use when necessary for compliance with App Store policies.
  * locale `string`: If the locale specified is a , Dropbox will direct users to a translated version of the authorization website. Locale tags should be .
  * force_reauthentication `boolean`: When (default is ) users will be signed out if they are currently signed in. This will make sure the user is brought to a page where they can create a new account or sign in to another account. This should only be used when there is a definite reason to believe that the user needs to sign in to a new or different account.

#### Output
*Output schema unknown*

### paper.docs.create.post
Creates a new Paper doc with the provided content.


```js
dropbox_content.paper.docs.create.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["import_format", "parent_folder_id"]}
  * file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * title **required** `string`
  * doc_id **required** `string`
  * revision **required** `integer`

### files.download.post
Download a file from a user's Dropbox.


```js
dropbox_content.files.download.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["path", "rev deprecated"]}

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### files.upload_session.append.post
Append more data to an upload session. When the parameter close is set, this call will close the session. A single request should not upload more than 150 MB. The maximum size of a file one can upload to an upload session is 350 GB. Calls to this endpoint will count as data transport calls for any Dropbox Business teams with a limit on the number of data transport calls allowed per month. For more information, see the Data transport limit page .


```js
dropbox_content.files.upload_session.append.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["cursor", "close"]}
  * file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
*Output schema unknown*

### deprecated.alpha.upload.post
Create a new file with the contents provided in the request. Note that this endpoint is part of the properties API alpha and is slightly different from upload . Do not use this to upload a file larger than 150 MB. Instead, create an upload session with upload_session/start .


```js
dropbox_content.deprecated.alpha.upload.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["path", "mode", "autorename", "client_modified", "mute", "property_groups", "strict_conflict"]}
  * file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### sharing.get_shared_link_file.post
Download the shared link's file from a user's Dropbox.


```js
dropbox_content.sharing.get_shared_link_file.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["url", "path", "link_password"]}

#### Output
* output `object`
  * name **required** `string`
  * url **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * .tag **required** `string`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * link_permissions **required** `object`
    * resolved_visibility **required** `object`
      * .tag **required** `string`
    * can_revoke **required** `boolean`
    * revoke_failure_reason **required** `object`
      * .tag **required** `string`
  * team_member_info **required** `object`
    * member_id **required** `string`
    * display_name **required** `string`
    * team_info **required** `object`
      * id **required** `string`
      * name **required** `string`
  * id **required** `string`
  * size **required** `integer`

### paper.docs.download.post
Exports and downloads Paper doc either as HTML or markdown.


```js
dropbox_content.paper.docs.download.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["doc_id", "export_format"]}

#### Output
* output `object`
  * owner **required** `string`
  * revision **required** `integer`
  * mime_type **required** `string`
  * title **required** `string`

### files.get_thumbnail.post
Get a thumbnail for an image. This method currently supports files with the following file extensions: jpg, jpeg, png, tiff, tif, gif and bmp. Photos that are larger than 20MB in size won't be converted to a thumbnail.


```js
dropbox_content.files.get_thumbnail.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["path", "format", "size", "mode"]}

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### files.upload.post
Create a new file with the contents provided in the request. Do not use this to upload a file larger than 150 MB. Instead, create an upload session with upload_session/start . Calls to this endpoint will count as data transport calls for any Dropbox Business teams with a limit on the number of data transport calls allowed per month. For more information, see the Data transport limit page .


```js
dropbox_content.files.upload.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["path", "mode", "autorename", "client_modified", "mute", "property_groups", "strict_conflict"]}
  * file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * name **required** `string`
  * client_modified **required** `string`
  * rev **required** `string`
  * path_display **required** `string`
  * has_explicit_shared_members **required** `boolean`
  * path_lower **required** `string`
  * server_modified **required** `string`
  * sharing_info **required** `object`
    * read_only **required** `boolean`
    * parent_shared_folder_id **required** `string`
    * modified_by **required** `string`
  * property_groups **required** `array`
    * items `object`
      * fields **required** `array`
        * items `object`
          * name **required** `string`
          * value **required** `string`
      * template_id **required** `string`
  * content_hash **required** `string`
  * id **required** `string`
  * size **required** `integer`

### files.upload_session.start.post
Upload sessions allow you to upload a single file in one or more requests, for example where the size of the file is greater than 150 MB. This call starts a new upload session with the given data. You can then use upload_session/append:2 to add more data and upload_session/finish to save all the data to a file in Dropbox. A single request should not upload more than 150 MB. The maximum size of a file one can upload to an upload session is 350 GB. An upload session can be used for a maximum of 48 hours. Attempting to use an UploadSessionStartResult.session_id with upload_session/append:2 or upload_session/finish more than 48 hours after its creation will return a UploadSessionLookupError.not_found. Calls to this endpoint will count as data transport calls for any Dropbox Business teams with a limit on the number of data transport calls allowed per month. For more information, see the Data transport limit page .


```js
dropbox_content.files.upload_session.start.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["close"]}
  * file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * session_id **required** `string`

### paper.docs.update.post
Updates an existing Paper doc with the provided content.


```js
dropbox_content.paper.docs.update.post({}, context)
```

#### Input
* input `object`
  * Dropbox-API-Arg `string`: {"properties": ["doc_id", "doc_update_policy", "revision", "import_format"]}
  * file `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * title **required** `string`
  * doc_id **required** `string`
  * revision **required** `integer`



## Definitions

*This integration has no definitions*
