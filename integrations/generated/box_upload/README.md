# @datafire/box_upload

Client library for Box 2.0 Uploads

## Installation and Usage
```bash
npm install --save datafire @datafire/box_upload
```

```js
let datafire = require('datafire');
let box_upload = require('@datafire/box_upload').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

box_upload.uploadFile({}).then(data => {
  console.log(data);
})
```

## Description
The Box Uploads API allows users to add a new file or add a new file version in the same way as uploading file.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
box_upload.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
box_upload.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### uploadFile
Use the Uploads API to allow users to add a new file.


```js
box_upload.uploadFile({
  "file": "",
  "attributes": ""
}, context)
```

#### Parameters
* file (string) **required** - File to upload
* attributes (string) **required** - File attributes

### createUploadSession
Use the Uploads API to create a new session to upload a new file.


```js
box_upload.createUploadSession({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### abortUploadSession
Abort the upload session and discard all data uploaded. This cannot be reversed.


```js
box_upload.abortUploadSession({
  "SESSION_ID": ""
}, context)
```

#### Parameters
* SESSION_ID (string) **required**

### getUploadSession
Return the information about this session.


```js
box_upload.getUploadSession({
  "SESSION_ID": ""
}, context)
```

#### Parameters
* SESSION_ID (string) **required**

### uploadPart
Upload a part of the file to this session.


```js
box_upload.uploadPart({
  "SESSION_ID": "",
  "Digest": "",
  "Content-Range": "",
  "bytes": ""
}, context)
```

#### Parameters
* SESSION_ID (string) **required**
* Digest (string) **required** - The message digest of the partbody, formatted as specified by RFC 3230. The usage is sha=BASE64_ENCODED_DIGEST. Currently only SHA-1 is supported.As per RFC 3230, the output from SHA-1 algorithm must be Base64 encoded.
* Content-Range (string) **required** - Byte range of part within overall file. E.g: bytes 8388608-16777215/445856194. It must not overlap with the range of a part already uploaded to this session.
* bytes (string) **required**

### commitUploadSession
Create a Box file comprised of the uploaded parts.


```js
box_upload.commitUploadSession({
  "SESSION_ID": "",
  "Digest": "",
  "body": {}
}, context)
```

#### Parameters
* SESSION_ID (string) **required**
* Digest (string) **required** - The message digest of the file, formatted as specified by RFC 3230. The usage is sha=BASE64_ENCODED_DIGEST. Currently only SHA-1 is supported.As per RFC 3230, the output from SHA-1 algorithm must be Base64 encoded.
* If-Match (string) - This is in the ‘etag’ field of the file object. See https://developer.box.com/v2.0/reference#if-match
* If-Non-Match (string) - This is in the ‘etag’ field of the file object. See https://developer.box.com/v2.0/reference#if-match
* body (object) **required**

### listParts
Return the list of parts uploaded so far for this session.


```js
box_upload.listParts({
  "SESSION_ID": ""
}, context)
```

#### Parameters
* SESSION_ID (string) **required**
* offset (integer) - Zero-based index of first part to return. Defaults to zero, if not specified.
* limit (integer) - How many parts to return. Defaults to 1000 if not specified, which is also the maximum value allowed.

### uploadFileVersion
This method is used to upload a new version of an existing file in a user’s account. 


```js
box_upload.uploadFileVersion({
  "FILE_ID": "",
  "file": ""
}, context)
```

#### Parameters
* FILE_ID (string) **required**
* If-Match (string) - This is in the ‘etag’ field of the file object
* attributes (string) - File attributes
* file (string) **required** - File to upload

### createUploadSessionNewVersion
Use the Uploads API to create a new session to upload a new version of existing file.


```js
box_upload.createUploadSessionNewVersion({
  "FILE_ID": "",
  "body": {}
}, context)
```

#### Parameters
* FILE_ID (string) **required**
* body (object) **required**

