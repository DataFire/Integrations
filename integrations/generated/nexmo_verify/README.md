# @datafire/nexmo_verify

Client library for Verify API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_verify
```
```js
let nexmo_verify = require('@datafire/nexmo_verify').create();

.then(data => {
  console.log(data);
});
```

## Description

The Verify API helps you to implement 2FA (two-factor authentication) in your applications. This is useful for:

* Protecting against spam, by preventing spammers from creating multiple accounts
* Monitoring suspicious activity, by forcing an account user to verify ownership of a number
* Ensuring that you can reach your users at any time because you have their correct phone number
More information is available at <https://developer.nexmo.com/verify>

## Actions

### verifyCheck
Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.

1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.

*Note that this endpoint is available by `GET` request as well as `POST`.*


```js
nexmo_verify.verifyCheck({
  "format": "",
  "api_key": "",
  "api_secret": "",
  "code": "",
  "request_id": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml): The response format.
  * api_key **required** `string`: You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
  * api_secret **required** `string`: You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
  * code **required** `string`: The verification code entered by your user.
  * ip_address `string`: (This field is no longer used)
  * request_id **required** `string`: The Verify request to check. This is the `request_id` you received in the response to the Verify request.

#### Output
*Output schema unknown*

### verifyControl
Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:


1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.

2. Check the `status` in the response.


*Note that this endpoint is available by `GET` request as well as `POST`.*


```js
nexmo_verify.verifyControl({
  "format": "",
  "api_key": "",
  "api_secret": "",
  "cmd": "",
  "request_id": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml): The response format.
  * api_key **required** `string`: You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
  * api_secret **required** `string`: You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
  * cmd **required** `string` (values: cancel, trigger_next_event): The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.
  * request_id **required** `string`: The `request_id` you received in the response to the Verify request.

#### Output
*Output schema unknown*

### verifyRequestWithPSD2
Use Verify request to generate and send a PIN to your user to authorize a payment:
1. Create a request to send a verification code to your user.
2. Check the `status` field in the response to ensure that your request was successful (zero is success).
3. Use the `request_id` field in the response for the Verify check.
(Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)


```js
nexmo_verify.verifyRequestWithPSD2({
  "format": "",
  "amount": 0,
  "api_key": "",
  "api_secret": "",
  "number": "",
  "payee": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml): The response format.
  * amount **required** `number`: The decimal amount of the payment to be confirmed, in Euros
  * api_key **required** `string`: You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
  * api_secret **required** `string`: You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
  * code_length `integer` (values: 4, 6): The length of the verification code.
  * country `string`: If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.
  * lg `string` (values: en-gb, bg-bg, cs-cz, da-dk, de-de, ee-et, el-gr, es-es, fi-fi, fr-fr, ga-ie, hu-hu, it-it, lv-lv, lt-lt, mt-mt, nl-nl, pl-pl, sk-sk, sl-si, sv-se): By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.
  * next_event_wait `integer`: Specifies the wait time in seconds between attempts to deliver the verification code.
  * number **required** `string`: The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
  * payee **required** `string`: An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.
  * pin_expiry `integer`: How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
  * workflow_id `integer` (values: 1, 2, 3, 4, 5, 6, 7): Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).

#### Output
*Output schema unknown*

### verifySearch
Use Verify search to check the status of past or current verification requests:

1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.

*Note that this endpoint is available by `POST` request as well as `GET`.*


```js
nexmo_verify.verifySearch({
  "format": "",
  "api_key": "",
  "api_secret": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml): The response format.
  * api_key **required** `string`: You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
  * api_secret **required** `string`: You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
  * request_id `string`: The `request_id` you received in the Verify Request Response.
  * request_ids `array`: More than one `request_id`. Each `request_id` is a new parameter in the Verify Search request.

#### Output
*Output schema unknown*

### verifyRequest
Use Verify request to generate and send a PIN to your user:

1. Create a request to send a verification code to your user.

2. Check the `status` field in the response to ensure that your request was successful (zero is success).

3. Use the `request_id` field in the response for the Verify check.

*Note that this endpoint is available by `GET` request as well as `POST`.*


```js
nexmo_verify.verifyRequest({
  "format": "",
  "api_key": "",
  "api_secret": "",
  "brand": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: json, xml): The response format.
  * api_key **required** `string`: You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
  * api_secret **required** `string`: You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
  * brand **required** `string`: An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your `Acme Inc` PIN is ..."
  * code_length `integer` (values: 4, 6): The length of the verification code.
  * country `string`: If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.
  * lg `string` (values: ar-xa, cs-cz, cy-cy, cy-gb, da-dk, de-de, el-gr, en-au, en-gb, en-in, en-us, es-es, es-mx, es-us, fi-fi, fil-ph, fr-ca, fr-fr, hi-in, hu-hu, id-id, is-is, it-it, ja-jp, ko-kr, nb-no, nl-nl, pl-pl, pt-br, pt-pt, ro-ro, ru-ru, sv-se, th-th, tr-tr, vi-vn, yue-cn, zh-cn, zh-tw): By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages>
  * next_event_wait `integer`: Specifies the wait time in seconds between attempts to deliver the verification code.
  * number **required** `string`: The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
  * pin_expiry `integer`: How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
  * sender_id `string`: An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.
  * workflow_id `integer` (values: 1, 2, 3, 4, 5, 6, 7): Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).

#### Output
*Output schema unknown*



## Definitions

### api_key
* api_key `string`: You can find your API key in your [account dashboard](https://dashboard.nexmo.com)

### api_secret
* api_secret `string`: You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)

### checkErrorResponse
* checkErrorResponse `object`: Error
  * error_text `string`: If the `status` is non-zero, this explains the error encountered.
  * request_id `string`: The `request_id` that you received in the response to the Verify request and used in the Verify check request.
  * status `string` (values: 0, 1, 2, 3, 4, 5, 6, 16, 17): Code | Text | Description

### checkRequest
* checkRequest `object`
  * api_key **required** [api_key](#api_key)
  * api_secret **required** [api_secret](#api_secret)
  * code **required** `string`: The verification code entered by your user.
  * ip_address `string`: (This field is no longer used)
  * request_id **required** `string`: The Verify request to check. This is the `request_id` you received in the response to the Verify request.

### checkResponse
* checkResponse `object`: Success
  * currency `string`: The currency code.
  * estimated_price_messages_sent [estimated_price_messages_sent](#estimated_price_messages_sent)
  * event_id `string`: The ID of the verification event, such as an SMS or TTS call.
  * price `string`: The cost incurred for this request.
  * request_id `string`: The `request_id` that you received in the response to the Verify request and used in the Verify check request.
  * status `string`: A value of `0` indicates that your user entered the correct code. If it is non-zero, check the `error_text`.

### controlErrorResponse
* controlErrorResponse `object`: Error
  * error_text `string`: If the `status` is non-zero, this explains the error encountered.
  * status `string` (values: 0, 1, 2, 3, 4, 5, 6, 8, 9, 19): Code | Text | Description

### controlRequest
* controlRequest `object`
  * api_key **required** [api_key](#api_key)
  * api_secret **required** [api_secret](#api_secret)
  * cmd **required** `string` (values: cancel, trigger_next_event): The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.
  * request_id **required** `string`: The `request_id` you received in the response to the Verify request.

### controlResponse
* controlResponse `object`: Success
  * command `string` (values: cancel, trigger_next_event): The `cmd` you sent in the request.
  * status `string`: `cmd` | Code | Description

### estimated_price_messages_sent
* estimated_price_messages_sent `string`: This field may not be present, depending on your pricing model. The

### psd2Request
* psd2Request `object`
  * amount **required** `number`: The decimal amount of the payment to be confirmed, in Euros
  * api_key **required** [api_key](#api_key)
  * api_secret **required** [api_secret](#api_secret)
  * code_length `integer` (values: 4, 6): The length of the verification code.
  * country `string`: If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.
  * lg `string` (values: en-gb, bg-bg, cs-cz, da-dk, de-de, ee-et, el-gr, es-es, fi-fi, fr-fr, ga-ie, hu-hu, it-it, lv-lv, lt-lt, mt-mt, nl-nl, pl-pl, sk-sk, sl-si, sv-se): By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.
  * next_event_wait `integer`: Specifies the wait time in seconds between attempts to deliver the verification code.
  * number **required** `string`: The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
  * payee **required** `string`: An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.
  * pin_expiry `integer`: How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
  * workflow_id `integer` (values: 1, 2, 3, 4, 5, 6, 7): Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).

### requestErrorResponse
* requestErrorResponse `object`: Error
  * error_text `string`: If `status` is non-zero, this explains the error encountered.
  * request_id `string`: The unique ID of the Verify request. This may be blank in an error situation
  * status `string` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20): Code | Text | Description

### requestResponse
* requestResponse `object`: Success
  * request_id `string`: The unique ID of the Verify request. You need this `request_id` for the Verify check.
  * status `string`: Indicates the outcome of the request; zero is success

### searchErrorResponse
* searchErrorResponse `object`: Error
  * error_text `string`: If `status` is not `SUCCESS`, this message explains the issue encountered.
  * request_id `string`: The `request_id` that you received in the response to the Verify request and used in the Verify search request. May be empty in an error situation.
  * status `string` (values: IN PROGRESS, FAILED, EXPIRED, CANCELLED, 101): Code | Description

### searchResponse
* searchResponse `object`: Success
  * account_id `string`: The Vonage account ID the request was for.
  * checks `array`: The list of checks made for this verification and their outcomes.
    * items `object`
      * code `string`: The code supplied with this check request
      * date_received `string`: The date and time this check was received (in the format YYYY-MM-DD HH:MM:SS)
      * ip_address `string`: The IP address, if available (this field is no longer used).
      * status `string` (values: VALID, INVALID)
  * currency `string`: The currency code.
  * date_finalized `string`: The date and time the verification request was completed. This response parameter is in the following format YYYY-MM-DD HH:MM:SS.
  * date_submitted `string`: The date and time the verification request was submitted, in the following format YYYY-MM-DD HH:MM:SS.
  * estimated_price_messages_sent [estimated_price_messages_sent](#estimated_price_messages_sent)
  * events `array`: The events that have taken place to verify this number, and their unique identifiers.
    * items `object`
      * id `string`
      * type `string` (values: tts, sms)
  * first_event_date `string`: The time the first verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS.
  * last_event_date `string`: The time the last verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS.
  * number `string`: The phone number this verification request was used for.
  * price `string`: The cost incurred for this verification request.
  * request_id `string`: The `request_id` that you received in the response to the Verify request and used in the Verify search request.
  * sender_id `string`: The `sender_id` you provided in the Verify request.
  * status `string` (values: IN PROGRESS, SUCCESS, FAILED, EXPIRED, CANCELLED): Code | Description

### verifyRequest
* verifyRequest `object`
  * api_key **required** [api_key](#api_key)
  * api_secret **required** [api_secret](#api_secret)
  * brand **required** `string`: An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your `Acme Inc` PIN is ..."
  * code_length `integer` (values: 4, 6): The length of the verification code.
  * country `string`: If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.
  * lg `string` (values: ar-xa, cs-cz, cy-cy, cy-gb, da-dk, de-de, el-gr, en-au, en-gb, en-in, en-us, es-es, es-mx, es-us, fi-fi, fil-ph, fr-ca, fr-fr, hi-in, hu-hu, id-id, is-is, it-it, ja-jp, ko-kr, nb-no, nl-nl, pl-pl, pt-br, pt-pt, ro-ro, ru-ru, sv-se, th-th, tr-tr, vi-vn, yue-cn, zh-cn, zh-tw): By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages>
  * next_event_wait `integer`: Specifies the wait time in seconds between attempts to deliver the verification code.
  * number **required** `string`: The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
  * pin_expiry `integer`: How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
  * sender_id `string`: An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.
  * workflow_id `integer` (values: 1, 2, 3, 4, 5, 6, 7): Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).


