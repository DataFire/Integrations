# @datafire/google_domainsrdap

Client library for Domains RDAP API

## Installation and Usage
```bash
npm install --save @datafire/google_domainsrdap
```
```js
let google_domainsrdap = require('@datafire/google_domainsrdap').create();

.then(data => {
  console.log(data);
});
```

## Description

Read-only public API that lets users search for information about domain names.

## Actions

### domainsrdap.autnum.get
The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.


```js
google_domainsrdap.domainsrdap.autnum.get({
  "autnumId": ""
}, context)
```

#### Input
* input `object`
  * autnumId **required** `string`
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
* output [RdapResponse](#rdapresponse)

### domainsrdap.domain.get
Look up RDAP information for a domain by name.


```js
google_domainsrdap.domainsrdap.domain.get({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** `string`: Full domain name to look up. Example: "example.com"
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
* output [HttpBody](#httpbody)

### domainsrdap.getDomains
The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.


```js
google_domainsrdap.domainsrdap.getDomains({}, context)
```

#### Input
* input `object`
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
* output [RdapResponse](#rdapresponse)

### domainsrdap.getEntities
The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.


```js
google_domainsrdap.domainsrdap.getEntities({}, context)
```

#### Input
* input `object`
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
* output [RdapResponse](#rdapresponse)

### domainsrdap.entity.get
The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.


```js
google_domainsrdap.domainsrdap.entity.get({
  "entityId": ""
}, context)
```

#### Input
* input `object`
  * entityId **required** `string`
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
* output [RdapResponse](#rdapresponse)

### domainsrdap.getHelp
Get help information for the RDAP API, including links to documentation.


```js
google_domainsrdap.domainsrdap.getHelp({}, context)
```

#### Input
* input `object`
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
* output [HttpBody](#httpbody)

### domainsrdap.getIp
The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.


```js
google_domainsrdap.domainsrdap.getIp({}, context)
```

#### Input
* input `object`
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
* output [HttpBody](#httpbody)

### domainsrdap.ip.get
The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.


```js
google_domainsrdap.domainsrdap.ip.get({
  "ipId": "",
  "ipId1": ""
}, context)
```

#### Input
* input `object`
  * ipId **required** `string`
  * ipId1 **required** `string`
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
* output [RdapResponse](#rdapresponse)

### domainsrdap.nameserver.get
The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.


```js
google_domainsrdap.domainsrdap.nameserver.get({
  "nameserverId": ""
}, context)
```

#### Input
* input `object`
  * nameserverId **required** `string`
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
* output [RdapResponse](#rdapresponse)

### domainsrdap.getNameservers
The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.


```js
google_domainsrdap.domainsrdap.getNameservers({}, context)
```

#### Input
* input `object`
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
* output [RdapResponse](#rdapresponse)



## Definitions

### HttpBody
* HttpBody `object`: Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
  * contentType `string`: The HTTP Content-Type header value specifying the content type of the body.
  * data `string`: The HTTP request/response body as raw binary.
  * extensions `array`: Application specific response metadata. Must be set in the first response for streaming APIs.
    * items `object`

### Link
* Link `object`: Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).
  * href `string`: Target URL of a link. Example: "http://example.com/previous".
  * hreflang `string`: Language code of a link. Example: "en".
  * media `string`: Media type of the link destination. Example: "screen".
  * rel `string`: Relation type of a link. Example: "previous".
  * title `string`: Title of this link. Example: "title".
  * type `string`: Content type of the link. Example: "application/json".
  * value `string`: URL giving context for the link. Example: "http://example.com/current".

### Notice
* Notice `object`: Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3).
  * description `array`: Description of the notice.
    * items `string`
  * links `array`: Link to a document containing more information.
    * items [Link](#link)
  * title `string`: Title of a notice. Example: "Terms of Service".
  * type `string`: Type values defined in [section 10.2.1 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-10.2.1) specific to a whole response: "result set truncated due to authorization", "result set truncated due to excessive load", "result set truncated due to unexplainable reasons".

### RdapResponse
* RdapResponse `object`: Response to a general RDAP query.
  * description `array`: Error description.
    * items `string`
  * errorCode `integer`: Error HTTP code. Example: "501".
  * jsonResponse [HttpBody](#httpbody)
  * lang `string`: Error language code. Error response info fields are defined in [section 6 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-6).
  * notices `array`: Notices applying to this response.
    * items [Notice](#notice)
  * rdapConformance `array`: RDAP conformance level.
    * items `string`
  * title `string`: Error title.


