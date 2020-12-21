# @datafire/nexmo_reports

Client library for Reports API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_reports
```
```js
let nexmo_reports = require('@datafire/nexmo_reports').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The [Reports API](/reports/overview) enables you to request a report of activity for your Vonage account.

Depending on your query pattern, you can choose from one of the two versions of the Reports API: asynchronous and synchronous. The asynchronous version is optimized for infrequent and large data queries (from several records to tens of millions). The synchronous version is optimized for frequent and periodic retrievals of small batches of data records (from one record to tens of thousand per query).

Only synchronous version supports retrival of data records by message/record ID.

Vonage recommends that you limit asynchronous queries to a maximum of 20 million records, by setting the start and end dates accordingly. On average, the asynchronous Reports API takes 5 - 10 minutes to generate 1 million records.


## Actions

### v2.reports.get
List reports created by the specified account based on filtered provided.


```js
nexmo_reports.v2.reports.get({
  "account_id": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * account_id **required** `string`: The account for which the list of reports will be queried.
  * status **required** `string`: A comma-separated list of report status values. Reports with any of the statuses specified are returned. The values in the comma-seperated list specified for `status` can be any of `PENDING`, `PROCESSING`, `SUCCESS`, `ABORTED`, `FAILED`, `TRUNCATED`.
  * date_from `string`: ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date from which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`.
  * date_to `string`: ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date until which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`.

#### Output
* output `object`
  * items_count `integer`: The number of reports in the list.
  * reports `array`: The list of reports.
    * items `object`
  * self_link `string`: URI of this search.

### v2.reports.post
Request a report on your account activity


```js
nexmo_reports.v2.reports.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### v2.reports.records.get
Fetch usage data synchronously


```js
nexmo_reports.v2.reports.records.get({
  "account_id": "",
  "product": ""
}, context)
```

#### Input
* input `object`
  * account_id **required** `string`: The account for which the list of reports will be queried.
  * product **required** `string` (values: SMS, VOICE-CALL, WEBSOCKET-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): The product to return records for
  * direction `string` (values: inbound, outbound): Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
  * id `string`: The UUID of the message or call to be searched for. You can specify a comma-separated list of UUIDs. If UUIDs are not found they are listed in the response in the `ids_not_found` field.
  * date_start `string`: ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports should begin. 
  * date_end `string`: **Must be no more than 24 hours later than `date_start`**
  * include_message `boolean` (values: true, false): Include the message contents in the records. Only applicable for use with products `SMS` and `MESSAGES`, where it is optional.
  * type `string` (values: ip-voice, cs-custom-event): The event type to search for. Only used, and is required, when product is `CONVERSATIONS`.
  * status `string` (values: delivered, expired, failed, rejected, accepted, buffered, unknown, deleted): The SMS status to search for. Optional where product is `SMS`.

#### Output
*Output schema unknown*

### v2.reports.report_id.delete
Cancel the execution of a pending or processing report.


```js
nexmo_reports.v2.reports.report_id.delete({
  "report_id": ""
}, context)
```

#### Input
* input `object`
  * report_id **required** `string`: UUID of the report

#### Output
*Output schema unknown*

### v2.reports.report_id.get
Retrieve status and metadata about a requested report.


```js
nexmo_reports.v2.reports.report_id.get({
  "report_id": ""
}, context)
```

#### Input
* input `object`
  * report_id **required** `string`: UUID of the report request (`request_id` in response).

#### Output
*Output schema unknown*

### v3.media.file_id.get
Download a zipped archive of the rendered report. The file is available for download for 72 hours.<br> The zip file will be named `<PRODUCT>_<REPORT_ID>.zip`<br> The csv file in the zip archive will be named as `report_<PRODUCT>_<ACCOUNT_ID>_<DATE>.csv` the date will be formatted as `yyyyMMdd`.



```js
nexmo_reports.v3.media.file_id.get({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`: UUID of the file.

#### Output
* output `object`
  * report `array`: The report in CSV format inside the zip archive.
    * items `object`



## Definitions

### ASR
* ASR: ASR
  * account_id **required** [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product **required** [product](#product)
  * direction [direction](#direction)
  * from [from](#from)
  * product [product_asr](#product_asr)
  * status [asr_status](#asr_status)
  * to [to](#to)

### CONVERSATIONS
* CONVERSATIONS: Conversations
  * account_id **required** [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product **required** [product](#product)
  * conversation_id [conversation_id](#conversation_id)
  * product [product_conversations](#product_conversations)
  * status [status](#status)
  * type [conversation_type](#conversation_type)

### MESSAGES
* MESSAGES: Messages
  * account_id **required** [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product **required** [product](#product)
  * direction **required** [direction](#direction)
  * from [from](#from)
  * id [id](#id)
  * include_message [include_message](#include_message)
  * product **required** [product_messages](#product_messages)
  * to [to](#to)

### NUMBER-INSIGHT
* NUMBER-INSIGHT: Number Insight
  * account_id **required** [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product **required** [product](#product)
  * network [network](#network)
  * number [number](#number)
  * product [product_ni](#product_ni)

### SMS
* SMS: SMS
  * account_id **required** [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product **required** [product](#product)
  * account_ref [account_ref](#account_ref)
  * client_ref [client_ref](#client_ref)
  * direction **required** [direction](#direction)
  * from [from](#from)
  * include_message [include_message](#include_message)
  * network [network](#network)
  * product **required** [product_sms](#product_sms)
  * status [sms_status](#sms_status)
  * to [to](#to)

### VERIFY-API
* VERIFY-API: Verify
  * account_id **required** [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product **required** [product](#product)
  * network [network](#network)
  * product [product_verify](#product_verify)
  * to [to](#to)

### VOICE-CALL
* VOICE-CALL: Voice Call
  * account_id **required** [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product **required** [product](#product)
  * direction [direction](#direction)
  * from [from](#from)
  * network [network](#network)
  * product [product_voice](#product_voice)
  * status [voice_status](#voice_status)
  * to [to](#to)

### WEBSOCKET-CALL
* WEBSOCKET-CALL: WebSocket Call
  * account_id **required** [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product **required** [product](#product)
  * product [product_websocket](#product_websocket)
  * status [websocket_status](#websocket_status)

### _links
* _links `object`
  * download_report `object`
    * href `string`: URL pointing to the generated report.
  * self `object`
    * href `string`: URI of this document.

### _links_create_report
* _links_create_report `object`
  * self `object`
    * href `string`: URI of this document.

### account_id
* account_id `string`: The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.

### account_ref
* account_ref `string`: Search for messages with this `account_ref`.

### application_id
* application_id `string`: Search only for requests attached to a particular Application ID.

### asr_fields
* asr_fields `object`: ASR
  * direction [direction](#direction)
  * from [from](#from)
  * product [product_asr](#product_asr)
  * status [asr_status](#asr_status)
  * to [to](#to)

### asr_response_create_report
* asr_response_create_report: ASR
  * _links [_links_create_report](#_links_create_report)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status_create_report](#request_status_create_report)
  * start_time [start_time](#start_time)
  * direction [direction](#direction)
  * from [from](#from)
  * product [product_asr](#product_asr)
  * status [asr_status](#asr_status)
  * to [to](#to)

### asr_response_get_report
* asr_response_get_report: ASR
  * _links [_links](#_links)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * items_count [items_count](#items_count)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)
  * start_time [start_time](#start_time)
  * direction [direction](#direction)
  * from [from](#from)
  * product [product_asr](#product_asr)
  * status [asr_status](#asr_status)
  * to [to](#to)

### asr_status
* asr_status `string` (values: ok, error): Search only for ASR with corresponding status.

### asr_status_description
* asr_status_description `string`: ASR error message.

### call_end_date
* call_end_date `string`: Date of the end of the call.

### call_start_date
* call_start_date `string`: Date of the start of the call.

### callback_url
* callback_url `string`: URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).

### client_ref
* client_ref `string`: Search for messages with this `client_ref`.

### conversation_id
* conversation_id `string`: Search only for Voice calls attached to this particular Conversation. This should include the "CON-" prefix.

### conversation_type
* conversation_type `string` (values: ip-voice, cs-custom-event): Type of conversation request. Only used, and is required, when product is `CONVERSATIONS`.

### conversations_fields
* conversations_fields `object`: Conversations
  * conversation_id [conversation_id](#conversation_id)
  * product [product_conversations](#product_conversations)
  * status [status](#status)
  * type [conversation_type](#conversation_type)

### conversations_response_create_report
* conversations_response_create_report: Conversations
  * _links [_links_create_report](#_links_create_report)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status_create_report](#request_status_create_report)
  * start_time [start_time](#start_time)
  * conversation_id [conversation_id](#conversation_id)
  * product [product_conversations](#product_conversations)
  * status [status](#status)
  * type [conversation_type](#conversation_type)

### conversations_response_get_report
* conversations_response_get_report: Conversations
  * _links [_links](#_links)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * items_count [items_count](#items_count)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)
  * start_time [start_time](#start_time)
  * conversation_id [conversation_id](#conversation_id)
  * product [product_conversations](#product_conversations)
  * status [status](#status)
  * type [conversation_type](#conversation_type)

### conversations_user_id
* conversations_user_id `string`: User ID of the caller.

### country
* country `string`: Country where the request was sent.

### country_name
* country_name `string`: Country name where the request was sent.

### csv_asr
* csv_asr `object`: ASR
  * account_id [account_id](#account_id)
  * call_date_start [call_start_date](#call_start_date)
  * call_id [request_id](#request_id)
  * currency [currency](#currency)
  * date_end [call_end_date](#call_end_date)
  * date_start [call_start_date](#call_start_date)
  * direction [direction](#direction)
  * duration [duration](#duration)
  * from [from](#from)
  * price [price](#price)
  * status [asr_status](#asr_status)
  * status_description [asr_status_description](#asr_status_description)
  * to [to](#to)
  * total_price [total_price](#total_price)

### csv_conversations_ip_voice
* csv_conversations_ip_voice `object`: IP Voice Conversations
  * account_id [account_id](#account_id)
  * application_id [application_id](#application_id)
  * conversation_id [conversation_id](#conversation_id)
  * currency [currency](#currency)
  * date_end [call_end_date](#call_end_date)
  * date_start [call_start_date](#call_start_date)
  * duration [duration](#duration)
  * leg_id [ip_voice_leg_id](#ip_voice_leg_id)
  * price [price](#price)
  * request_id [request_id](#request_id)
  * status [ip_voice_status](#ip_voice_status)
  * total_price [total_price](#total_price)
  * user_id [conversations_user_id](#conversations_user_id)

### csv_messages_inbound
* csv_messages_inbound `object`: Inbound Messages
  * account_id [account_id](#account_id)
  * currency [currency](#currency)
  * date_received [date](#date)
  * direction [direction](#direction)
  * from [from](#from)
  * message_body [message_body](#message_body)
  * message_id [message_id](#message_id)
  * provider [messages_provider](#messages_provider)
  * to [to](#to)
  * total_price [total_price](#total_price)

### csv_messages_outbound
* csv_messages_outbound `object`: Outbound Messages
  * account_id [account_id](#account_id)
  * client_ref [client_ref](#client_ref)
  * country [country](#country)
  * country_name [country_name](#country_name)
  * currency [currency](#currency)
  * date_finalized [date_finalized](#date_finalized)
  * date_received [date](#date)
  * direction [direction](#direction)
  * error_code [messages_error_code](#messages_error_code)
  * from [from](#from)
  * latency [latency](#latency)
  * message_body [message_body](#message_body)
  * message_id [message_id](#message_id)
  * provider [messages_provider](#messages_provider)
  * status [messages_status](#messages_status)
  * to [to](#to)
  * total_price [total_price](#total_price)

### csv_ni
* csv_ni `object`: Number Insight
  * account_id [account_id](#account_id)
  * country [ni_country](#ni_country)
  * country_name [ni_country_name](#ni_country_name)
  * currency [currency](#currency)
  * date_received [date](#date)
  * first_name [ni_first_name](#ni_first_name)
  * last_name [ni_last_name](#ni_last_name)
  * network [ni_network](#ni_network)
  * network_name [ni_network_name](#ni_network_name)
  * network_type [ni_network_type](#ni_network_type)
  * number [ni_number](#ni_number)
  * ported [ni_ported](#ni_ported)
  * product_type [ni_product_type](#ni_product_type)
  * reachable [ni_reachable](#ni_reachable)
  * request_id [request_id](#request_id)
  * response_code [ni_response_code](#ni_response_code)
  * status [ni_status](#ni_status)
  * total_price [total_price](#total_price)
  * valid [ni_valid](#ni_valid)

### csv_sms_inbound
* csv_sms_inbound `object`: Inbound SMS
  * account_id [account_id](#account_id)
  * country [country](#country)
  * country_name [country_name](#country_name)
  * currency [currency](#currency)
  * date_received [date](#date)
  * direction [direction](#direction)
  * from [from](#from)
  * message_body [message_body](#message_body)
  * message_id [message_id](#message_id)
  * network [network](#network)
  * network_name [network_name](#network_name)
  * to [to](#to)
  * total_price [price](#price)

### csv_sms_outbound
* csv_sms_outbound `object`: Outbound SMS
  * account_id [account_id](#account_id)
  * client_ref [client_ref](#client_ref)
  * country [country](#country)
  * country_name [country_name](#country_name)
  * currency [currency](#currency)
  * date_finalized [date_finalized](#date_finalized)
  * date_received [date](#date)
  * direction [direction](#direction)
  * error_code [error_code](#error_code)
  * error_code_description [error_code_description](#error_code_description)
  * from [from](#from)
  * latency [latency](#latency)
  * message_body [message_body](#message_body)
  * message_id [message_id](#message_id)
  * network [network](#network)
  * network_name [network_name](#network_name)
  * status [sms_status](#sms_status)
  * to [to](#to)
  * total_price [price](#price)

### csv_verify
* csv_verify `object`: Verify
  * account_id [account_id](#account_id)
  * country [country](#country)
  * country_name [country_name](#country_name)
  * currency [currency](#currency)
  * date_finalized [date_finalized](#date_finalized)
  * date_received [date](#date)
  * estimated_price [estimated_price](#estimated_price)
  * first_event_date [first_event_date](#first_event_date)
  * from [from](#from)
  * last_event_date [last_event_date](#last_event_date)
  * locale [locale](#locale)
  * network [network](#network)
  * network_name [network_name](#network_name)
  * number_type [number_type](#number_type)
  * price [price](#price)
  * pricing_model [pricing_model](#pricing_model)
  * request_id [request_id](#request_id)
  * sms_event_count [sms_event_count](#sms_event_count)
  * to [to](#to)
  * tts_event_count [tts_event_count](#tts_event_count)
  * verify_status [verify_status](#verify_status)

### csv_voice
* csv_voice `object`: Voice Call
  * account_id [account_id](#account_id)
  * call_id [request_id](#request_id)
  * country [country](#country)
  * country_name [country_name](#country_name)
  * currency [currency](#currency)
  * date_end [call_end_date](#call_end_date)
  * date_start [call_start_date](#call_start_date)
  * direction [direction](#direction)
  * duration [duration](#duration)
  * from [from](#from)
  * network [network](#network)
  * network_name [network_name](#network_name)
  * price [price](#price)
  * status [voice_status](#voice_status)
  * status_description [voice_status_description](#voice_status_description)
  * to [to](#to)
  * total_price [total_price](#total_price)

### csv_websockets
* csv_websockets `object`: WebSocket Call
  * account_id [account_id](#account_id)
  * call_id [request_id](#request_id)
  * currency [currency](#currency)
  * date_end [call_end_date](#call_end_date)
  * date_start [call_start_date](#call_start_date)
  * duration [duration](#duration)
  * price [price](#price)
  * status [websocket_status](#websocket_status)
  * total_price [total_price](#total_price)

### currency
* currency `string`: Currency of the price of the request.

### date
* date `string`: Date of the request.

### date_end
* date_end `string`: ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.

### date_finalized
* date_finalized `string`: Date when the request was finalized.

### date_start
* date_start `string`: ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.

### direction
* direction `string` (values: inbound, outbound): Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.

### duration
* duration `integer`: Duration of the call in seconds.

### error_code
* error_code `string`: Error code of the request.

### error_code_description
* error_code_description `string`: Description of the error code of the request.

### estimated_price
* estimated_price `string`: Estimated price of the verify request.

### file_id
* file_id `string`: Id of the generated report file.

### first_event_date
* first_event_date `string`: Date of the first verify event.

### from
* from `string`: Request from this number.

### id
* id `string`: Search only messages with the specified uuid.

### ids_not_found
* ids_not_found `string`: If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.

### include_message
* include_message `boolean`: Include the text of messages in the report.

### include_subaccounts
* include_subaccounts `boolean` (values: true, false): Whether to include subaccounts or not.

### instance
* instance `string`

### ip_voice_leg_id
* ip_voice_leg_id `string`: Id of the leg.

### ip_voice_status
* ip_voice_status `string`: Status of the conversation evnet.

### items_count
* items_count `integer`: The number of rows in the resulting file (when report has been completed).

### json_sms_inbound
* json_sms_inbound `object`: Inbound SMS
  * account_id [account_id](#account_id)
  * country [country](#country)
  * country_name [country_name](#country_name)
  * currency [currency](#currency)
  * date_received [date](#date)
  * direction
  * from [from](#from)
  * message_id [message_id](#message_id)
  * network [network](#network)
  * network_name [network_name](#network_name)
  * to [to](#to)
  * total_price [price](#price)

### json_sms_inbound_with_body
* json_sms_inbound_with_body
  * account_id [account_id](#account_id)
  * country [country](#country)
  * country_name [country_name](#country_name)
  * currency [currency](#currency)
  * date_received [date](#date)
  * direction
  * from [from](#from)
  * message_id [message_id](#message_id)
  * network [network](#network)
  * network_name [network_name](#network_name)
  * to [to](#to)
  * total_price [price](#price)
  * message_body [message_body](#message_body)

### json_sms_outbound
* json_sms_outbound `object`: Outbound SMS
  * account_id [account_id](#account_id)
  * client_ref [client_ref](#client_ref)
  * country [country](#country)
  * country_name [country_name](#country_name)
  * currency [currency](#currency)
  * date_finalized [date_finalized](#date_finalized)
  * date_received [date](#date)
  * direction [direction](#direction)
  * error_code [error_code](#error_code)
  * error_code_description [error_code_description](#error_code_description)
  * from [from](#from)
  * latency [latency](#latency)
  * message_id [message_id](#message_id)
  * network [network](#network)
  * network_name [network_name](#network_name)
  * status [sms_status](#sms_status)
  * to [to](#to)
  * total_price [price](#price)

### json_sms_outbound_with_body
* json_sms_outbound_with_body
  * account_id [account_id](#account_id)
  * client_ref [client_ref](#client_ref)
  * country [country](#country)
  * country_name [country_name](#country_name)
  * currency [currency](#currency)
  * date_finalized [date_finalized](#date_finalized)
  * date_received [date](#date)
  * direction [direction](#direction)
  * error_code [error_code](#error_code)
  * error_code_description [error_code_description](#error_code_description)
  * from [from](#from)
  * latency [latency](#latency)
  * message_id [message_id](#message_id)
  * network [network](#network)
  * network_name [network_name](#network_name)
  * status [sms_status](#sms_status)
  * to [to](#to)
  * total_price [price](#price)
  * message_body [message_body](#message_body)

### last_event_date
* last_event_date `string`: Date of the last verify event.

### latency
* latency `integer`: Latency of the request in ms.

### locale
* locale `string`: Locale used for the TTS.

### message_body
* message_body `string`: Body of the message sent. Only present if include_message parameter is set to true.

### message_id
* message_id `string`: Id of the request.

### messages_error_code
* messages_error_code `string`: Error code of the message.

### messages_fields
* messages_fields `object`: Messages
  * direction **required** [direction](#direction)
  * from [from](#from)
  * id [id](#id)
  * include_message [include_message](#include_message)
  * product **required** [product_messages](#product_messages)
  * to [to](#to)

### messages_provider
* messages_provider `string`: Provider of the message.

### messages_response_create_report
* messages_response_create_report: Messages
  * _links [_links_create_report](#_links_create_report)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status_create_report](#request_status_create_report)
  * start_time [start_time](#start_time)
  * direction **required** [direction](#direction)
  * from [from](#from)
  * id [id](#id)
  * include_message [include_message](#include_message)
  * product **required** [product_messages](#product_messages)
  * to [to](#to)

### messages_response_get_report
* messages_response_get_report: Messages
  * _links [_links](#_links)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * items_count [items_count](#items_count)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)
  * start_time [start_time](#start_time)
  * direction **required** [direction](#direction)
  * from [from](#from)
  * id [id](#id)
  * include_message [include_message](#include_message)
  * product **required** [product_messages](#product_messages)
  * to [to](#to)

### messages_status
* messages_status `string`: Status of the message.

### network
* network `string`: Network used to send the request.

### network_name
* network_name `string`: Name of the network used to send the request.

### ni_country
* ni_country `string`: Country of the looked up number.

### ni_country_name
* ni_country_name `string`: Country name of the looked up number.

### ni_first_name
* ni_first_name `string`: First name of the owner of the looked up number.

### ni_last_name
* ni_last_name `string`: Last name of the owner of the looked up number.

### ni_network
* ni_network `string`: Network of the looked up number.

### ni_network_name
* ni_network_name `string`: Network name of the looked up number.

### ni_network_type
* ni_network_type `string`: Network type of the looked up number.

### ni_number
* ni_number `string`: Number looked up for this request.

### ni_ported
* ni_ported `string`: Is the looked up number ported.

### ni_product_type
* ni_product_type `string`: Type of Number Insight request.

### ni_reachable
* ni_reachable `string`: Is the looked up number reachable.

### ni_response_code
* ni_response_code `string`: Response code of the Number Insight request.

### ni_status
* ni_status `string`: Status of the Number Insight request.

### ni_valid
* ni_valid `string`: Is the looked up number valid.

### number
* number `string`: Search only request for the target number.

### number_insight_fields
* number_insight_fields `object`: Number Insight
  * network [network](#network)
  * number [number](#number)
  * product [product_ni](#product_ni)

### number_insight_response_create_report
* number_insight_response_create_report: Number Insight
  * _links [_links_create_report](#_links_create_report)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status_create_report](#request_status_create_report)
  * start_time [start_time](#start_time)
  * network [network](#network)
  * number [number](#number)
  * product [product_ni](#product_ni)

### number_insight_response_get_report
* number_insight_response_get_report: Number Insight
  * _links [_links](#_links)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * items_count [items_count](#items_count)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)
  * start_time [start_time](#start_time)
  * network [network](#network)
  * number [number](#number)
  * product [product_ni](#product_ni)

### number_type
* number_type `string`: Type of phone number to which requests are sent.

### price
* price `number`: Price of the request.

### pricing_model
* pricing_model `string`: Pricing model used for this request.

### product
* product `string` (values: SMS, VOICE-CALL, WEBSOCKET-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): Which product you wish to generate a report for.

### product_asr
* product_asr `string` (values: SMS, VOICE-CALL, WEBSOCKET-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): Which product you wish to generate a report for.

### product_conversations
* product_conversations `string` (values: SMS, VOICE-CALL, WEBSOCKET-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): Which product you wish to generate a report for.

### product_messages
* product_messages `string` (values: SMS, VOICE-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): Which product you wish to generate a report for.

### product_ni
* product_ni `string` (values: SMS, VOICE-CALL, WEBSOCKET-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): Which product you wish to generate a report for.

### product_sms
* product_sms `string` (values: SMS, VOICE-CALL, WEBSOCKET-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): Which product you wish to generate a report for.

### product_verify
* product_verify `string` (values: SMS, VOICE-CALL, WEBSOCKET-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): Which product you wish to generate a report for.

### product_voice
* product_voice `string` (values: SMS, VOICE-CALL, WEBSOCKET-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): Which product you wish to generate a report for.

### product_websocket
* product_websocket `string` (values: SMS, VOICE-CALL, WEBSOCKET-CALL, VERIFY-API, NUMBER-INSIGHT, MESSAGES, CONVERSATIONS, ASR): Which product you wish to generate a report for.

### receive_time
* receive_time `string`: Time at which the report request was received by the service.

### report_request
* report_request `object`
  * account_id **required** [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product **required** [product](#product)

### report_response
* report_response `object`
  * _links [_links](#_links)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * items_count [items_count](#items_count)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)
  * start_time [start_time](#start_time)

### report_response_create_report
* report_response_create_report `object`
  * _links [_links_create_report](#_links_create_report)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status_create_report](#request_status_create_report)
  * start_time [start_time](#start_time)

### report_response_top_level
* report_response_top_level `object`
  * _links `object`
    * self `object`
      * href `string`
  * account_id [account_id](#account_id)
  * currency [currency](#currency)
  * ids_not_found [ids_not_found](#ids_not_found)
  * price [price](#price)
  * received_at [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)

### request_id
* request_id `string`: UUID of the request.

### request_status
* request_status `string` (values: PENDING, PROCESSING, SUCCESS, ABORTED, FAILED, TRUNCATED): Status of the request.

### request_status_create_report
* request_status_create_report `string` (values: PENDING, PROCESSING, SUCCESS, ABORTED, FAILED, TRUNCATED): Status of the request.

### sms_event_count
* sms_event_count `integer`: Number of sms sent for this verify request.

### sms_fields
* sms_fields `object`: SMS
  * account_ref [account_ref](#account_ref)
  * client_ref [client_ref](#client_ref)
  * direction **required** [direction](#direction)
  * from [from](#from)
  * include_message [include_message](#include_message)
  * network [network](#network)
  * product **required** [product_sms](#product_sms)
  * status [sms_status](#sms_status)
  * to [to](#to)

### sms_response_create_report
* sms_response_create_report: SMS
  * _links [_links_create_report](#_links_create_report)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status_create_report](#request_status_create_report)
  * start_time [start_time](#start_time)
  * account_ref [account_ref](#account_ref)
  * client_ref [client_ref](#client_ref)
  * direction **required** [direction](#direction)
  * from [from](#from)
  * include_message [include_message](#include_message)
  * network [network](#network)
  * product **required** [product_sms](#product_sms)
  * status [sms_status](#sms_status)
  * to [to](#to)

### sms_response_get_report
* sms_response_get_report: SMS
  * _links [_links](#_links)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * items_count [items_count](#items_count)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)
  * start_time [start_time](#start_time)
  * account_ref [account_ref](#account_ref)
  * client_ref [client_ref](#client_ref)
  * direction **required** [direction](#direction)
  * from [from](#from)
  * include_message [include_message](#include_message)
  * network [network](#network)
  * product **required** [product_sms](#product_sms)
  * status [sms_status](#sms_status)
  * to [to](#to)

### sms_status
* sms_status `string` (values: delivered, expired, failed, rejected, accepted, buffered, unknown): Search only for sms with the corresponding status.

### start_time
* start_time `string`: Time at which the report processing of the report has started.

### status
* status `string`: Search only for conversation events with the specified event status.

### to
* to `string`: Request to this number.

### total_price
* total_price `number`: Total price of the request.

### tts_event_count
* tts_event_count `integer`: Number of tts sent for this verify request.

### verify_api_fields
* verify_api_fields `object`: Verify
  * network [network](#network)
  * product [product_verify](#product_verify)
  * to [to](#to)

### verify_api_response_create_report
* verify_api_response_create_report: Verify
  * _links [_links_create_report](#_links_create_report)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status_create_report](#request_status_create_report)
  * start_time [start_time](#start_time)
  * network [network](#network)
  * product [product_verify](#product_verify)
  * to [to](#to)

### verify_api_response_get_report
* verify_api_response_get_report: Verify
  * _links [_links](#_links)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * items_count [items_count](#items_count)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)
  * start_time [start_time](#start_time)
  * network [network](#network)
  * product [product_verify](#product_verify)
  * to [to](#to)

### verify_status
* verify_status `string`: Status of the verify request.

### voice_call_fields
* voice_call_fields `object`: Voice Call
  * direction [direction](#direction)
  * from [from](#from)
  * network [network](#network)
  * product [product_voice](#product_voice)
  * status [voice_status](#voice_status)
  * to [to](#to)

### voice_call_response_create_report
* voice_call_response_create_report: Voice Call
  * _links [_links_create_report](#_links_create_report)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status_create_report](#request_status_create_report)
  * start_time [start_time](#start_time)
  * direction [direction](#direction)
  * from [from](#from)
  * network [network](#network)
  * product [product_voice](#product_voice)
  * status [voice_status](#voice_status)
  * to [to](#to)

### voice_call_response_get_report
* voice_call_response_get_report: Voice Call
  * _links [_links](#_links)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * items_count [items_count](#items_count)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)
  * start_time [start_time](#start_time)
  * direction [direction](#direction)
  * from [from](#from)
  * network [network](#network)
  * product [product_voice](#product_voice)
  * status [voice_status](#voice_status)
  * to [to](#to)

### voice_status
* voice_status `string` (values: started, ringing, answered, machine, completed, timeout, failed, rejected, cancelled, busy): Search only for voice call with the corresponding status.

### voice_status_description
* voice_status_description `string`: Description of the status of the call.

### websocket_call_fields
* websocket_call_fields `object`: WebSocket Call
  * product [product_websocket](#product_websocket)
  * status [websocket_status](#websocket_status)

### websocket_call_response_create_report
* websocket_call_response_create_report: WebSocket Call
  * _links [_links_create_report](#_links_create_report)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status_create_report](#request_status_create_report)
  * start_time [start_time](#start_time)
  * product [product_websocket](#product_websocket)
  * status [websocket_status](#websocket_status)

### websocket_call_response_get_report
* websocket_call_response_get_report: WebSocket Call
  * _links [_links](#_links)
  * account_id [account_id](#account_id)
  * callback_url [callback_url](#callback_url)
  * date_end [date_end](#date_end)
  * date_start [date_start](#date_start)
  * include_subaccounts [include_subaccounts](#include_subaccounts)
  * items_count [items_count](#items_count)
  * product [product](#product)
  * receive_time [receive_time](#receive_time)
  * request_id [request_id](#request_id)
  * request_status [request_status](#request_status)
  * start_time [start_time](#start_time)
  * product [product_websocket](#product_websocket)
  * status [websocket_status](#websocket_status)

### websocket_status
* websocket_status `string`: Search only for WebSocket call with corresponding status.


