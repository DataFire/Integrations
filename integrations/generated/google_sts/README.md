# @datafire/google_sts

Client library for Security Token Service API

## Installation and Usage
```bash
npm install --save @datafire/google_sts
```
```js
let google_sts = require('@datafire/google_sts').create();

.then(data => {
  console.log(data);
});
```

## Description

The Security Token Service exchanges Google or third-party credentials for a short-lived access token to Google Cloud resources.

## Actions

### sts.token
Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token.


```js
google_sts.sts.token({}, context)
```

#### Input
* input `object`
  * body [GoogleIdentityStsV1betaExchangeTokenRequest](#googleidentitystsv1betaexchangetokenrequest)
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
* output [GoogleIdentityStsV1betaExchangeTokenResponse](#googleidentitystsv1betaexchangetokenresponse)



## Definitions

### GoogleIdentityStsV1betaExchangeTokenRequest
* GoogleIdentityStsV1betaExchangeTokenRequest `object`: Request message for ExchangeToken.
  * audience `string`: The full resource name of the identity provider. For example, `//iam.googleapis.com/projects//workloadIdentityPools//providers/`. Required when exchanging an external credential for a Google access token.
  * grantType `string`: Required. The grant type. Must be `urn:ietf:params:oauth:grant-type:token-exchange`, which indicates a token exchange.
  * options `string`: A set of features that Security Token Service supports, in addition to the standard OAuth 2.0 token exchange, formatted as a serialized JSON object of Options.
  * requestedTokenType `string`: Required. The type of security token. Must be `urn:ietf:params:oauth:token-type:access_token`, which indicates an OAuth 2.0 access token.
  * scope `string`: The OAuth 2.0 scopes to include on the resulting access token, formatted as a list of space-delimited, case-sensitive strings. Required when exchanging an external credential for a Google access token.
  * subjectToken `string`: Required. The input token. This token is a either an external credential issued by a workload identity pool provider, or a short-lived access token issued by Google. If the token is an OIDC JWT, it must use the JWT format defined in [RFC 7523](https://tools.ietf.org/html/rfc7523), and the `subject_token_type` must be `urn:ietf:params:oauth:token-type:jwt`. The following headers are required: - `kid`: The identifier of the signing key securing the JWT. - `alg`: The cryptographic algorithm securing the JWT. Must be `RS256`. The following payload fields are required. For more information, see [RFC 7523, Section 3](https://tools.ietf.org/html/rfc7523#section-3): - `iss`: The issuer of the token. The issuer must provide a discovery document at the URL `/.well-known/openid-configuration`, where `` is the value of this field. The document must be formatted according to section 4.2 of the [OIDC 1.0 Discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse). - `iat`: The issue time, in seconds, since the Unix epoch. Must be in the past. - `exp`: The expiration time, in seconds, since the Unix epoch. Must be less than 48 hours after `iat`. Shorter expiration times are more secure. If possible, we recommend setting an expiration time less than 6 hours. - `sub`: The identity asserted in the JWT. - `aud`: Configured by the mapper policy. The default value is the service account's unique ID. Example header: ``` { "alg": "RS256", "kid": "us-east-11" } ``` Example payload: ``` { "iss": "https://accounts.google.com", "iat": 1517963104, "exp": 1517966704, "aud": "113475438248934895348", "sub": "113475438248934895348", "my_claims": { "additional_claim": "value" } } ``` If `subject_token` is an AWS token, it must be a serialized, [signed](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) request to the AWS [`GetCallerIdentity()`](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity) method. Format the request as URL-encoded JSON, and set the `subject_token_type` parameter to `urn:ietf:params:aws:token-type:aws4_request`. The following parameters are required: - `url`: The URL of the AWS STS endpoint for `GetCallerIdentity()`, such as `https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15`. Regional endpoints are also supported. - `method`: The HTTP request method: `POST`. - `headers`: The HTTP request headers, which must include: - `Authorization`: The request signature. - `x-amz-date`: The time you will send the request, formatted as an [ISO8601 Basic](https://docs.aws.amazon.com/general/latest/gr/sigv4_elements.html#sigv4_elements_date) string. This is typically set to the current time and used to prevent replay attacks. - `host`: The hostname of the `url` field; for example, `sts.amazonaws.com`. - `x-goog-cloud-target-resource`: The full, canonical resource name of the workload identity pool provider, with or without an `https:` prefix. To help ensure data integrity, we recommend including this header in the `SignedHeaders` field of the signed request. For example: //iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ If you are using temporary security credentials provided by AWS, you must also include the header `x-amz-security-token`, with the value ``. The following example shows a signed, serialized request: ``` { "headers":[ {"key": "x-amz-date", "value": "20200815T015049Z"}, {"key": "Authorization", "value": "AWS4-HMAC-SHA256+Credential=$credential,+SignedHeaders=host;x-amz-date;x-goog-cloud-target-resource,+Signature=$signature"}, {"key": "x-goog-cloud-target-resource", "value": "//iam.googleapis.com/projects//locations//workloadIdentityPools//providers/"}, {"key": "host", "value": "sts.amazonaws.com"} . ], "method":"POST", "url":"https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15" } ``` You can also use a Google-issued OAuth 2.0 access token with this field to obtain an access token with new security attributes applied, such as a Credential Access Boundary. In this case, set `subject_token_type` to `urn:ietf:params:oauth:token-type:access_token`. If an access token already contains security attributes, you cannot apply additional security attributes.
  * subjectTokenType `string`: Required. `urn:ietf:params:oauth:token-type:access_token`.

### GoogleIdentityStsV1betaExchangeTokenResponse
* GoogleIdentityStsV1betaExchangeTokenResponse `object`: Response message for ExchangeToken.
  * access_token `string`: An OAuth 2.0 security token, issued by Google, in response to the token exchange request. Tokens can vary in size, depending in part on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time.
  * expires_in `integer`: The amount of time, in seconds, between the time when the `access_token` was issued and the time when the `access_token` will expire. This field is absent when the `subject_token` in the request is a Google-issued, short-lived access token. In this case, the `access_token` has the same expiration time as the `subject_token`.
  * issued_token_type `string`: The token type. Always matches the value of `requested_token_type` from the request.
  * token_type `string`: The type of `access_token`. Always has the value `Bearer`.


