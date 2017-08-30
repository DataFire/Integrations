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

