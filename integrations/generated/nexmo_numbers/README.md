# @datafire/nexmo_numbers

Client library for Numbers API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_numbers
```
```js
let nexmo_numbers = require('@datafire/nexmo_numbers').create({
  apiKey: "",
  apiSecret: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Numbers API enables you to manage your existing numbers and buy new virtual numbers for use with the Vonage APIs. Further information is here: <https://developer.nexmo.com/numbers/overview>

## Actions

### getOwnedNumbers
Retrieve all the inbound numbers associated with your Vonage account.


```js
nexmo_numbers.getOwnedNumbers({}, context)
```

#### Input
* input `object`
  * application_id `string`: The Application that you want to return the numbers for.
  * has_application `boolean`: Set this optional field to `true` to restrict your results to numbers
  * country `string`: The two character country code in ISO 3166-1 alpha-2 format
  * pattern `string`: The number pattern you want to search for. Use in conjunction with `search_pattern`.
  * search_pattern `integer` (values: 0, 1, 2): The strategy you want to use for matching:
  * size `integer`: Page size
  * index `integer`: Page index

#### Output
* output [inbound-numbers](#inbound-numbers)

### buyANumber
Request to purchase a specific inbound number.


```js
nexmo_numbers.buyANumber({
  "country": "",
  "msisdn": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The two character country code in ISO 3166-1 alpha-2 format
  * msisdn **required** `string`: An available inbound virtual number.
  * target_api_key `string`: If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field.

#### Output
* output [response](#response)

### cancelANumber
Cancel your subscription for a specific inbound number.


```js
nexmo_numbers.cancelANumber({
  "country": "",
  "msisdn": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The two character country code in ISO 3166-1 alpha-2 format
  * msisdn **required** `string`: An available inbound virtual number.
  * target_api_key `string`: If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field.

#### Output
* output [response](#response)

### getAvailableNumbers
Retrieve inbound numbers that are available for the specified country.


```js
nexmo_numbers.getAvailableNumbers({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The two character country code to filter on (in ISO 3166-1 alpha-2 format)
  * type `string` (values: landline, mobile-lvn, landline-toll-free): Set this parameter to filter the type of number, such as mobile or landline
  * pattern `string`: The number pattern you want to search for. Use in conjunction with `search_pattern`.
  * search_pattern `integer` (values: 0, 1, 2): The strategy you want to use for matching:
  * features `string` (values: SMS, VOICE, SMS,VOICE, MMS, SMS,MMS, VOICE,MMS, SMS,MMS,VOICE): Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`.
  * size `integer`: Page size
  * index `integer`: Page index

#### Output
* output [available-numbers](#available-numbers)

### updateANumber
Change the behaviour of a number that you own.


```js
nexmo_numbers.updateANumber({
  "country": "",
  "msisdn": ""
}, context)
```

#### Input
* input `object`
  * app_id `string`: The Application that will handle inbound traffic to this number.
  * country **required** `string`: The two character country code in ISO 3166-1 alpha-2 format
  * messagesCallbackType `string` (values: app): <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
  * messagesCallbackValue `string`: <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
  * moHttpUrl `string`: An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook.
  * moSmppSysType `string`: The associated system type for your SMPP client
  * msisdn **required** `string`: An available inbound virtual number.
  * voiceCallbackType `string` (values: sip, tel, app): Specify whether inbound voice calls on your number are forwarded
  * voiceCallbackValue `string`: A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter.
  * voiceStatusCallback `string`: A webhook URI for Vonage to send a request to when a call ends

#### Output
* output [response](#response)



## Definitions

### account-unauthorized
* account-unauthorized `object`
  * error-code `string`: The status code of the response. `200` indicates a successful request.
  * error-code-label `string`: The status code description

### available-numbers
* available-numbers `object`
  * count `integer`: The total amount of numbers available in the pool.
  * numbers `array`: A paginated array of available numbers and their details.
    * items [availablenumber](#availablenumber)

### availablenumber
* availablenumber `object`
  * cost `string`: The monthly rental cost for this number, in Euros
  * country [country](#country)
  * features `array`: The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE`
    * items `string`
  * msisdn `string`: An available inbound virtual number.
  * type `string`: The type of number: `landline`, `landline-toll-free` or `mobile-lvn`

### country
* country `string`: The two character country code in ISO 3166-1 alpha-2 format

### inbound-numbers
* inbound-numbers `object`
  * count `integer`: The total amount of numbers owned by the account
  * numbers `array`: A paginated array of numbers and their details
    * items [ownednumber](#ownednumber)

### number-details
* number-details `object`
  * country **required** [country](#country)
  * msisdn **required** `string`: An available inbound virtual number.
  * target_api_key `string`: If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field.

### number-details-update
* number-details-update `object`
  * app_id `string`: The Application that will handle inbound traffic to this number.
  * country **required** [country](#country)
  * messagesCallbackType `string` (values: app): <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
  * messagesCallbackValue `string`: <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
  * moHttpUrl `string`: An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook.
  * moSmppSysType `string`: The associated system type for your SMPP client
  * msisdn **required** `string`: An available inbound virtual number.
  * voiceCallbackType `string` (values: sip, tel, app): Specify whether inbound voice calls on your number are forwarded
  * voiceCallbackValue `string`: A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter.
  * voiceStatusCallback `string`: A webhook URI for Vonage to send a request to when a call ends

### ownednumber
* ownednumber `object`
  * country [country](#country)
  * features `array`: The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE`
    * items `string`
  * messagesCallbackType `string`: The messages webhook type: always `app`
  * messagesCallbackValue `string`: An Application ID
  * moHttpUrl `string`: The URL of the webhook endpoint that handles inbound messages
  * msisdn `string`: An available inbound virtual number.
  * type `string`: The type of number: `landline`, `landline-toll-free` or `mobile-lvn`
  * voiceCallbackType `string`: The voice webhook type: `sip`, `tel`, or `app`
  * voiceCallbackValue `string`: A SIP URI, telephone number or Application ID

### response
* response `object`
  * error-code `string`: The status code of the response. `200` indicates a successful request.
  * error-code-label `string`: The status code description

### response420
* response420 `object`
  * error-code `string`: The status code of the response. `200` indicates a successful request.
  * error-code-label `string`: More detail about what happened. For example you may need to request the number via the dashboard, or you may already own this number.

### unauthorized
* unauthorized `object`
  * error-code `string`: The status code of the response. `200` indicates a successful request.
  * error-code-label `string`: The status code description


