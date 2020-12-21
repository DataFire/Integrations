# @datafire/nexmo_redact

Client library for Redact API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_redact
```
```js
let nexmo_redact = require('@datafire/nexmo_redact').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The [Redact API](/redact/overview) helps organisations meet their privacy compliance obligations. It provides controlled, on-demand redaction of private information from transactional records in the long-term storage. Note, Redact API does not have the capability to redact the short-lived server logs that are retained for a few weeks. For SMS customers that need immediate redaction, Vonage suggests using [Advanced Auto-redact](/redact/overview#auto-redact-vs-redact-api).

## Actions

### transaction.post
Redact a specific message


```js
nexmo_redact.transaction.post({
  "body": {
    "id": "",
    "product": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [RedactTransaction](#redacttransaction)

#### Output
*Output schema unknown*



## Definitions

### ErrorInvalidId
* ErrorInvalidId `object`
  * detail **required** `string`: Additional information about the error
  * instance **required** `string`: Internal Trace ID
  * title **required** `string`: Generic error message
  * type **required** `string`: Link to error / remediation options

### ErrorInvalidJson
* ErrorInvalidJson `object`: Invalid JSON
  * detail **required** `string`: Additional information about the error
  * instance **required** `string`: Internal Trace ID
  * title **required** `string`: Generic error message
  * type **required** `string`: Link to error / remediation options

### ErrorPrematureRedaction
* ErrorPrematureRedaction `object`: Premature Redaction
  * detail **required** `string`: Additional information about the error
  * instance **required** `string`: Internal Trace ID
  * title **required** `string`: Generic error message
  * type **required** `string`: Link to error / remediation options

### ErrorThrottled
* ErrorThrottled `object`
  * detail **required** `string`: Additional information about the error
  * instance **required** `string`: Internal Trace ID
  * title **required** `string`: Generic error message
  * type **required** `string`: Link to error / remediation options

### ErrorUnauthorized
* ErrorUnauthorized `object`
  * error_title **required** `string`: Error title
  * type **required** `string`: Machine readable error type

### ErrorUnprovisioned
* ErrorUnprovisioned `object`: Unprovisioned
  * detail **required** `string`: Additional information about the error
  * instance **required** `string`: Internal Trace ID
  * title **required** `string`: Generic error message
  * type **required** `string`: Link to error / remediation options

### ErrorUnsupportedProduct
* ErrorUnsupportedProduct `object`: Unsupported Product
  * detail **required** `string`: Additional information about the error
  * instance **required** `string`: Internal Trace ID
  * title **required** `string`: Generic error message
  * type **required** `string`: Link to error / remediation options

### RedactTransaction
* RedactTransaction `object`
  * id **required** `string`: The transaction ID to redact
  * product **required** `string` (values: sms, voice, number-insight, verify, verify-sdk, messages): Product name that the ID provided relates to
  * type **required** `string` (values: inbound, outbound): Required if redacting SMS data


