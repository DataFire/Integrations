# @datafire/google_verifiedaccess

Client library for Chrome Verified Access API

## Installation and Usage
```bash
npm install --save @datafire/google_verifiedaccess
```
```js
let google_verifiedaccess = require('@datafire/google_verifiedaccess').create({
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

API for Verified Access chrome extension to provide credential verification for chrome devices connecting to an enterprise network

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_verifiedaccess.oauthCallback({
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
google_verifiedaccess.oauthRefresh(null, context)
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

### verifiedaccess.challenge.create
CreateChallenge API


```js
google_verifiedaccess.verifiedaccess.challenge.create({}, context)
```

#### Input
* input `object`
  * body [Empty](#empty)
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
* output [Challenge](#challenge)

### verifiedaccess.challenge.verify
VerifyChallengeResponse API


```js
google_verifiedaccess.verifiedaccess.challenge.verify({}, context)
```

#### Input
* input `object`
  * body [VerifyChallengeResponseRequest](#verifychallengeresponserequest)
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
* output [VerifyChallengeResponseResult](#verifychallengeresponseresult)



## Definitions

### Challenge
* Challenge `object`: Result message for VerifiedAccess.CreateChallenge.
  * alternativeChallenge [SignedData](#signeddata)
  * challenge [SignedData](#signeddata)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### SignedData
* SignedData `object`: The wrapper message of any data and its signature.
  * data `string`: The data to be signed.
  * signature `string`: The signature of the data field.

### VerifyChallengeResponseRequest
* VerifyChallengeResponseRequest `object`: signed ChallengeResponse
  * challengeResponse [SignedData](#signeddata)
  * expectedIdentity `string`: Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match.

### VerifyChallengeResponseResult
* VerifyChallengeResponseResult `object`: Result message for VerifiedAccess.VerifyChallengeResponse.
  * deviceEnrollmentId `string`: Device enrollment id is returned in this field (for the machine response only).
  * devicePermanentId `string`: Device permanent id is returned in this field (for the machine response only).
  * signedPublicKeyAndChallenge `string`: Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses)
  * verificationOutput `string`: For EMCert check, device permanent id is returned here. For EUCert check, signed_public_key_and_challenge [base64 encoded] is returned if present, otherwise empty string is returned. This field is deprecated, please use device_permanent_id or signed_public_key_and_challenge fields.


