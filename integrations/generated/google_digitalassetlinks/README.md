# @datafire/google_digitalassetlinks

Client library for Digital Asset Links

## Installation and Usage
```bash
npm install --save @datafire/google_digitalassetlinks
```
```js
let google_digitalassetlinks = require('@datafire/google_digitalassetlinks').create();

google_digitalassetlinks.statements.list({}).then(data => {
  console.log(data);
});
```

## Description

API for discovering relationships between online assets such as web sites or mobile apps.

## Actions

### assetlinks.check
Determines whether the specified (directional) relationship exists between
the specified source and target assets.

The relation describes the intent of the link between the two assets as
claimed by the source asset.  An example for such relationships is the
delegation of privileges or permissions.

This command is most often used by infrastructure systems to check
preconditions for an action.  For example, a client may want to know if it
is OK to send a web URL to a particular mobile app instead. The client can
check for the relevant asset link from the website to the mobile app to
decide if the operation should be allowed.

A note about security: if you specify a secure asset as the source, such as
an HTTPS website or an Android app, the API will ensure that any
statements used to generate the response have been made in a secure way by
the owner of that asset.  Conversely, if the source asset is an insecure
HTTP website (that is, the URL starts with `http://` instead of `https://`),
the API cannot verify its statements securely, and it is not possible to
ensure that the website's statements have not been altered by a third
party.  For more information, see the [Digital Asset Links technical design
specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).


```js
google_digitalassetlinks.assetlinks.check({}, context)
```

#### Input
* input `object`
  * relation `string`: Query string for the relation.
  * source.androidApp.certificate.sha256Fingerprint `string`: The uppercase SHA-265 fingerprint of the certificate.  From the PEM
  * source.androidApp.packageName `string`: Android App assets are naturally identified by their Java package name.
  * source.web.site `string`: Web assets are identified by a URL that contains only the scheme, hostname
  * target.androidApp.certificate.sha256Fingerprint `string`: The uppercase SHA-265 fingerprint of the certificate.  From the PEM
  * target.androidApp.packageName `string`: Android App assets are naturally identified by their Java package name.
  * target.web.site `string`: Web assets are identified by a URL that contains only the scheme, hostname
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
* output [CheckResponse](#checkresponse)

### statements.list
Retrieves a list of all statements from a given source that match the
specified target and statement string.

The API guarantees that all statements with secure source assets, such as
HTTPS websites or Android apps, have been made in a secure way by the owner
of those assets, as described in the [Digital Asset Links technical design
specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).
Specifically, you should consider that for insecure websites (that is,
where the URL starts with `http://` instead of `https://`), this guarantee
cannot be made.

The `List` command is most useful in cases where the API client wants to
know all the ways in which two assets are related, or enumerate all the
relationships from a particular source asset.  Example: a feature that
helps users navigate to related items.  When a mobile app is running on a
device, the feature would make it easy to navigate to the corresponding web
site or Google+ profile.


```js
google_digitalassetlinks.statements.list({}, context)
```

#### Input
* input `object`
  * relation `string`: Use only associations that match the specified relation.
  * source.androidApp.certificate.sha256Fingerprint `string`: The uppercase SHA-265 fingerprint of the certificate.  From the PEM
  * source.androidApp.packageName `string`: Android App assets are naturally identified by their Java package name.
  * source.web.site `string`: Web assets are identified by a URL that contains only the scheme, hostname
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
* output [ListResponse](#listresponse)



## Definitions

### AndroidAppAsset
* AndroidAppAsset `object`: Describes an android app asset.
  * certificate [CertificateInfo](#certificateinfo)
  * packageName `string`: Android App assets are naturally identified by their Java package name.

### Asset
* Asset `object`: Uniquely identifies an asset.
  * androidApp [AndroidAppAsset](#androidappasset)
  * web [WebAsset](#webasset)

### CertificateInfo
* CertificateInfo `object`: Describes an X509 certificate.
  * sha256Fingerprint `string`: The uppercase SHA-265 fingerprint of the certificate.  From the PEM

### CheckResponse
* CheckResponse `object`: Response message for the CheckAssetLinks call.
  * debugString `string`: Human-readable message containing information intended to help end users
  * errorCode `array`: Error codes that describe the result of the Check operation.
    * items `string` (values: ERROR_CODE_UNSPECIFIED, ERROR_CODE_INVALID_QUERY, ERROR_CODE_FETCH_ERROR, ERROR_CODE_FAILED_SSL_VALIDATION, ERROR_CODE_REDIRECT, ERROR_CODE_TOO_LARGE, ERROR_CODE_MALFORMED_HTTP_RESPONSE, ERROR_CODE_WRONG_CONTENT_TYPE, ERROR_CODE_MALFORMED_CONTENT, ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE, ERROR_CODE_FETCH_BUDGET_EXHAUSTED)
  * linked `boolean`: Set to true if the assets specified in the request are linked by the
  * maxAge `string`: From serving time, how much longer the response should be considered valid

### ListResponse
* ListResponse `object`: Response message for the List call.
  * debugString `string`: Human-readable message containing information intended to help end users
  * errorCode `array`: Error codes that describe the result of the List operation.
    * items `string` (values: ERROR_CODE_UNSPECIFIED, ERROR_CODE_INVALID_QUERY, ERROR_CODE_FETCH_ERROR, ERROR_CODE_FAILED_SSL_VALIDATION, ERROR_CODE_REDIRECT, ERROR_CODE_TOO_LARGE, ERROR_CODE_MALFORMED_HTTP_RESPONSE, ERROR_CODE_WRONG_CONTENT_TYPE, ERROR_CODE_MALFORMED_CONTENT, ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE, ERROR_CODE_FETCH_BUDGET_EXHAUSTED)
  * maxAge `string`: From serving time, how much longer the response should be considered valid
  * statements `array`: A list of all the matching statements that have been found.
    * items [Statement](#statement)

### Statement
* Statement `object`: Describes a reliable statement that has been made about the relationship
  * relation `string`: The relation identifies the use of the statement as intended by the source
  * source [Asset](#asset)
  * target [Asset](#asset)

### WebAsset
* WebAsset `object`: Describes a web asset.
  * site `string`: Web assets are identified by a URL that contains only the scheme, hostname


