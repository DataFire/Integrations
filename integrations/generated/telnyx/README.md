# @datafire/telnyx

Client library for Telnyx API

## Installation and Usage
```bash
npm install --save @datafire/telnyx
```
```js
let telnyx = require('@datafire/telnyx').create({
  BearerAuth: "",
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

SIP trunking, SMS, MMS, Call Control and Telephony Data Services.

## Actions

### DeleteBulkTelephonyCredential
Delete several credentials in bulk.


```js
telnyx.DeleteBulkTelephonyCredential({
  "filter[tag]": ""
}, context)
```

#### Input
* input `object`
  * filter[tag] **required** `string`: Filter by tag, required by bulk operations.

#### Output
* output `object`
  * data `object`
    * credentials `integer`: Amount of credentials affected

### UpdateBulkTelephonyCredential
Update several credentials in bulk.


```js
telnyx.UpdateBulkTelephonyCredential({
  "filter[tag]": "",
  "body": {
    "tag": "",
    "connection_id": ""
  }
}, context)
```

#### Input
* input `object`
  * filter[tag] **required** `string`: Filter by tag, required by bulk operations.
  * body **required** [BulkCredentialRequest](#bulkcredentialrequest)

#### Output
* output `object`
  * data `object`
    * credentials `integer`: Amount of credentials affected

### CreateBulkTelephonyCredential
Creates several credentials in bulk.


```js
telnyx.CreateBulkTelephonyCredential({
  "body": {
    "tag": "",
    "connection_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [BulkCredentialRequest](#bulkcredentialrequest)

#### Output
* output `object`
  * data `object`
    * credentials `integer`: Amount of credentials affected

### BulkSIMCardNetworkPreferences
This API allows dispatching the same operation described for the PUT sim_cards/:sim_card_id/network_preferences API for multiple SIM cards at once.<br/><br/>
Although, a SIM card network preference may fail individually under any validation triggered as a consequence of its state. For example, a SIM can't have an in-progress OTA update for applying a Network Preference, so they'll fail when requested in this API. In that scenario, the specific error will be present in the response along with the successful definitions in the "errors" response node.



```js
telnyx.BulkSIMCardNetworkPreferences({}, context)
```

#### Input
* input `object`
  * body `object`
    * mobile_operator_networks_preferences [MobileOperatorNetworksPreferencesRequest](#mobileoperatornetworkspreferencesrequest)
    * sim_card_ids `array`
      * items `string`

#### Output
* output `object`
  * data `array`: Multi requested SIM cards network preferences.
    * items [SIMCardNetworkPreferenceWithOTAUpdates](#simcardnetworkpreferencewithotaupdates)
  * errors `array`
    * items [Error](#error)

### SimCardRegister
Register the SIM cards associated with the provided registration codes to the current user's account.<br/><br/>
If <code>sim_card_group_id</code> is provided, the SIM cards will be associated with that group. Otherwise, the default group for the current user, which is already data-enabled, will be used.<br/><br/>



```js
telnyx.SimCardRegister({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [SIMCardRegistration](#simcardregistration)

#### Output
* output `object`
  * data `array`: Successfully registered SIM cards.
    * items [SimpleSIMCard](#simplesimcard)
  * errors `array`
    * items [Error](#error)

### BulkCredentialAction
Perform activate or deactivate action on all credentials filtered by the provided tag. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.


```js
telnyx.BulkCredentialAction({
  "action": "",
  "filter[tag]": ""
}, context)
```

#### Input
* input `object`
  * action **required** `string` (values: activate, deactivate): Identifies the action to be taken. Activate will change the status to active. Deactivate will change the status to inactive.
  * filter[tag] **required** `string`: Filter by tag, required by bulk operations.

#### Output
* output `object`
  * data `object`
    * credentials `integer`: Amount of credentials affected

### findAddresss
Returns a list of your addresses.


```js
telnyx.findAddresss({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[customer_reference][eq] `string`: Filter addresses via the customer reference set. Matching is not case-sensitive.
  * filter[customer_reference][contains] `string`: If present, addresses with <code>customer_reference</code> containing the given value will be returned. Matching is not case-sensitive.
  * filter[street_address][contains] `string`: If present, addresses with <code>street_address</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
  * filter[address_book][eq] `string`: If present, only returns results with the <code>address_book</code> flag set to the given value.
  * sort `string` (values: created_at, first_name, last_name, business_name, street_address): Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>

#### Output
* output `object`
  * data `array`
    * items [Address](#address)
  * meta [PaginationMeta](#paginationmeta)

### CreateAddress
Creates an address.


```js
telnyx.CreateAddress({
  "body": {
    "first_name": "",
    "last_name": "",
    "business_name": "",
    "street_address": "",
    "locality": "",
    "country_code": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AddressCreate](#addresscreate)

#### Output
* output `object`
  * data [Address](#address)

### validateAddress
Validates an address for emergency services.


```js
telnyx.validateAddress({
  "body": {
    "country_code": "",
    "street_address": "",
    "locality": "",
    "postal_code": "",
    "administrative_area": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ValidateAddressRequest](#validateaddressrequest)

#### Output
* output `object`
  * data [ValidateAddressResult](#validateaddressresult)

### DeleteAddress
Deletes an existing address.


```js
telnyx.DeleteAddress({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: address ID

#### Output
* output `object`
  * data [Address](#address)

### getAddress
Retrieves the details of an existing address.


```js
telnyx.getAddress({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: address ID

#### Output
* output `object`
  * data [Address](#address)

### listAvailablePhoneNumbers
List available phone numbers


```js
telnyx.listAvailablePhoneNumbers({}, context)
```

#### Input
* input `object`
  * filter[phone_number][starts_with] `string`: Filter numbers starting with a pattern (meant to be used after `national_destination_code` filter has been set).
  * filter[phone_number][ends_with] `string`: Filter numbers ending with a pattern.
  * filter[phone_number][contains] `string`: Filter numbers containing a pattern.
  * filter[locality] `string`: Filter phone numbers by city.
  * filter[administrative_area] `string`: Filter phone numbers by US state/CA province.
  * filter[country_code] `string`: Filter phone numbers by ISO alpha-2 country code.
  * filter[national_destination_code] `string`: Filter by the national destination code of the number. This filter is only applicable to North American numbers.
  * filter[rate_center] `string`: Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers.
  * filter[number_type] `string` (values: toll-free, national, mobile, local): Filter phone numbers by number type.
  * filter[features] `array`: Filter if the phone number should be used for voice, fax, mms, sms, emergency.
  * filter[limit] `integer`: Limits the number of results.
  * filter[best_effort] `boolean`: Filter to determine if best effort results should be included.
  * filter[quickship] `boolean`: Filter to exclude phone numbers that need additional time after to purchase to receive phone calls.
  * filter[reservable] `boolean`: Filter to exclude phone numbers that cannot be reserved before purchase.

#### Output
* output `object`
  * data `array`
    * items [AvailablePhoneNumber](#availablephonenumber)
  * meta [AvailablePhoneNumbersMetadata](#availablephonenumbersmetadata)

### getUserBalance
Retrieve user balance details


```js
telnyx.getUserBalance(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data [UserBalance](#userbalance)

### listBillingGroups
List all billing groups


```js
telnyx.listBillingGroups({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [BillingGroup](#billinggroup)
  * meta [PaginationMeta](#paginationmeta)

### createBillingGroup
Create a billing group


```js
telnyx.createBillingGroup({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [NewBillingGroup](#newbillinggroup)

#### Output
* output `object`
  * data [BillingGroup](#billinggroup)

### deleteBillingGroup
Delete a billing group


```js
telnyx.deleteBillingGroup({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the billing group

#### Output
* output `object`
  * data [BillingGroup](#billinggroup)

### retrieveBillingGroup
Retrieve a billing group


```js
telnyx.retrieveBillingGroup({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the billing group

#### Output
* output `object`
  * data [BillingGroup](#billinggroup)

### updateBillingGroup
Update a billing group


```js
telnyx.updateBillingGroup({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the billing group
  * body **required** [UpdateBillingGroup](#updatebillinggroup)

#### Output
* output `object`
  * data [BillingGroup](#billinggroup)

### listCallControlApplications
Return a list of call control applications.


```js
telnyx.listCallControlApplications({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[application_name][contains] `string`: If present, applications with <code>application_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
  * filter[outbound.outbound_voice_profile_id] `string`: Identifies the associated outbound voice profile.
  * sort `string` (values: created_at, connection_name, active): Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>

#### Output
* output `object`
  * data `array`
    * items [CallControlApplication](#callcontrolapplication)
  * meta [PaginationMeta](#paginationmeta)

### createCallControlApplication
Create a call control application.


```js
telnyx.createCallControlApplication({
  "body": {
    "application_name": "",
    "webhook_event_url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateCallControlApplicationRequest](#createcallcontrolapplicationrequest)

#### Output
* output `object`
  * data [CallControlApplication](#callcontrolapplication)

### deleteCallControlApplication
Deletes a call control application.


```js
telnyx.deleteCallControlApplication({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [CallControlApplication](#callcontrolapplication)

### retrieveCallControlApplication
Retrieves the details of an existing call control application.


```js
telnyx.retrieveCallControlApplication({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [CallControlApplication](#callcontrolapplication)

### updateCallControlApplication
Updates settings of an existing call control application.


```js
telnyx.updateCallControlApplication({
  "id": "",
  "body": {
    "application_name": "",
    "webhook_event_url": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [UpdateCallControlApplicationRequest](#updatecallcontrolapplicationrequest)

#### Output
* output `object`
  * data [CallControlApplication](#callcontrolapplication)

### listCallEvents
Filters call events by given filter parameters. Events are ordered by `event_timestamp`. If filter for `call_leg_id` or `call_session_id` is not present, it only filters events from the last 24 hours.

**Note**: Only one `filter[event_timestamp]` can be passed.



```js
telnyx.listCallEvents({}, context)
```

#### Input
* input `object`
  * filter[call_leg_id] `string`: The unique identifier of an individual call leg.
  * filter[call_session_id] `string`: The unique identifier of the call control session. A session may include multiple call leg events.
  * filter[status] `string` (values: delivered, failed): Event status
  * filter[type] `string` (values: command, webhook): Event type
  * filter[event_timestamp][gt] `string`: Event timestamp: greater than
  * filter[event_timestamp][gte] `string`: Event timestamp: greater than or equal
  * filter[event_timestamp][lt] `string`: Event timestamp: lower than
  * filter[event_timestamp][lte] `string`: Event timestamp: lower than or equal
  * filter[event_timestamp][eq] `string`: Event timestamp: equal
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [CallEvent](#callevent)
  * meta [PaginationMeta](#paginationmeta)

### callDial
Dial a number or SIP URI from a given connection. A successful response will include a `call_leg_id` which can be used to correlate the command with subsequent webhooks.

**Expected Webhooks:**

- `call.initiated`
- `call.answered` or `call.hangup`
- `call.machine.detection.ended` if `answering_machine_detection` was requested
- `call.machine.greeting.ended` if `answering_machine_detection` was set to `detect_beep`, `greeting_end` or `detect_words`


```js
telnyx.callDial({
  "body": {
    "connection_id": "",
    "to": "",
    "from": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CallRequest](#callrequest)

#### Output
* output `object`
  * data [Call](#call)

### retrieveCallStatus
Returns the status of a call (data is available 10 minutes after call ended).


```js
telnyx.retrieveCallStatus({
  "call_control_id": ""
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call

#### Output
* output `object`
  * data [Call](#call)

### callAnswer
Answer an incoming call. You must issue this command before executing subsequent commands on an incoming call.

**Expected Webhooks:**

- `call.answered`



```js
telnyx.callAnswer({
  "call_control_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [AnswerRequest](#answerrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callBridge
Bridge two call control calls.

**Expected Webhooks:**

- `call.bridged` for Leg A
- `call.bridged` for Leg B



```js
telnyx.callBridge({
  "call_control_id": "",
  "body": {
    "call_control_id": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [BridgeRequest](#bridgerequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callForkStart
Call forking allows you to stream the media from a call to a specific target in realtime. 
This stream can be used to enable realtime audio analysis to support a 
variety of use cases, including fraud detection, or the creation of AI-generated audio responses. 
Requests must specify either the `target` attribute or the `rx` and `tx` attributes.

**Expected Webhooks:**

- `call.fork.started`
- `call.fork.stopped`

**Simple Telnyx RTP Encapsulation Protocol (STREP)**

*Note: This header/encapsulation is not used when the `rx` and `tx`
parameters have been specified; it only applies when media is forked
using the `target` attribute.*

If the destination for forked media is specified using the "target"
attribute, the RTP will be encapsulated in an extra Telnyx protocol,
which adds a 24 byte header to the RTP payload in each packet. The STREP
header includes the Call Control `call_leg_id` for stream
identification, along with bits that represent the direction (inbound or
outbound) of the media. This 24-byte header sits between the UDP header
and the RTP header.

The STREP header makes it possible to fork RTP for multiple calls (or
two RTP streams for the same call) to the same IP:port, where the
streams can be demultiplexed by your application using the information
in the header. Of course, it's still possible to ignore this header
completely, for example, if sending forked media for different calls to
different ports or IP addresses. In this case, simply strip 24 bytes
(or use the second byte to find the header length) from the received UDP
payload to get the RTP (RTP header and payload).

```
STREP Specification

  0                   1                   2                   3
  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |1 1|Version|L|D|    HeaderLen  |  reserved (2 bytes)           |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |       reserved (4 bytes, for UDP ports or anything else)      |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |               The call_leg_id                                 |
 |                   from Call Control                           |
 |                       (128 bits / 16 bytes)                   |
 |                           (this is binary data)               |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

 11
   Static bits 11, always set to 11 to easily distinguish forked media
   from RTP (10) and T.38 media (usually 00) and SIP (which begins
   with a capital letter, so begins with bits 01). This is a magic number.

 Version
   Four bits to indicate the version number of the protocol, starting at 0001.

 L
   One bit to represent the leg of the call (A or B).
   0 represents the A (first) leg of the call.
   1 represents the B (second) leg of the call.

 D
   One bit to represent the direction of this RTP stream.
   0 represents media received by Telnyx.
   1 represents media transmitted by Telnyx.

 HeaderLen (1 byte)
   The length of the header in bytes.
   Note that this value does not include the length of the payload. The total
   size of the RTP can be calculated by subtracting the HeaderLen from the UDP
   length (minus 8 for the UDP header).
   In version 1, this value will always be 24.

 Reserved (6 bytes)
   Reserved for future use and to make sure that the header is a multiple of 32 bits

 Call Leg ID
   A 128-bit identifier for the call leg.
   This is the call_leg_id from Call Control.
```



```js
telnyx.callForkStart({
  "call_control_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [StartForkingRequest](#startforkingrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callForkStop
Stop forking a call.

**Expected Webhooks:**

- `call.fork.stopped`



```js
telnyx.callForkStop({
  "call_control_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [StopForkingRequest](#stopforkingrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callGatherStop
Stop current gather.

**Expected Webhooks:**

- `call.gather.ended`



```js
telnyx.callGatherStop({
  "call_control_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [StopGatherRequest](#stopgatherrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callGatherUsingAudio
Play an audio file on the call until the required DTMF signals are gathered to build interactive menus.

You can pass a list of valid digits along with an 'invalid_audio_url', which will be played back at the beginning of each prompt. Playback will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_audio` command.

**Expected Webhooks:**

- `call.playback.started`
- `call.playback.ended`
- `call.dtmf.received` (you may receive many of these webhooks)
- `call.gather.ended`



```js
telnyx.callGatherUsingAudio({
  "call_control_id": "",
  "body": {
    "audio_url": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [GatherUsingAudioRequest](#gatherusingaudiorequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callGatherUsingSpeak
Convert text to speech and play it on the call until the required DTMF signals are gathered to build interactive menus.

You can pass a list of valid digits along with an 'invalid_payload', which will be played back at the beginning of each prompt. Speech will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_speak` command.

**Expected Webhooks:**

- `call.dtmf.received` (you may receive many of these webhooks)
- `call.gather.ended`



```js
telnyx.callGatherUsingSpeak({
  "call_control_id": "",
  "body": {
    "voice": "",
    "language": "",
    "payload": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [GatherUsingSpeakRequest](#gatherusingspeakrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callHangup
Hang up the call.

**Expected Webhooks:**

- `call.hangup`
- `call.recording.saved`



```js
telnyx.callHangup({
  "call_control_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [HangupRequest](#hanguprequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callPlaybackStart
Play an audio file on the call. If multiple play audio commands are issued consecutively,
the audio files will be placed in a queue awaiting playback.

*Notes:*

- When `overlay` is enabled, `loop` is limited to 1, and `target_legs` is limited to `self`.
- A customer cannot Play Audio with `overlay=true` unless there is a Play Audio with `overlay=false` actively playing.

**Expected Webhooks:**

- `call.playback.started`
- `call.playback.ended`



```js
telnyx.callPlaybackStart({
  "call_control_id": "",
  "body": {
    "audio_url": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [PlayAudioUrlRequest](#playaudiourlrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callPlaybackStop
Stop audio being played on the call.

**Expected Webhooks:**

- `call.playback.ended` or `call.speak.ended`



```js
telnyx.callPlaybackStop({
  "call_control_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [PlaybackStopRequest](#playbackstoprequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callRecordPause
Pause recording the call. Recording can be resumed via Resume recording command.

**Expected Webhooks:**

There are no webhooks associated with this command.



```js
telnyx.callRecordPause({
  "call_control_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [PauseRecordingRequest](#pauserecordingrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callRecordResume
Resume recording the call.

**Expected Webhooks:**

There are no webhooks associated with this command.



```js
telnyx.callRecordResume({
  "call_control_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [ResumeRecordingRequest](#resumerecordingrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callRecordStart
Start recording the call. Recording will stop on call hang-up, or can be initiated via the Stop Recording command.

**Expected Webhooks:**

- `call.recording.saved`



```js
telnyx.callRecordStart({
  "call_control_id": "",
  "body": {
    "format": "",
    "channels": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [StartRecordingRequest](#startrecordingrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callRecordStop
Stop recording the call.

**Expected Webhooks:**

- `call.recording.saved`



```js
telnyx.callRecordStop({
  "call_control_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [StopRecordingRequest](#stoprecordingrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callRefer
Initiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any point in the duration of a call.

**Expected Webhooks:**

- `call.refer.started`
- `call.refer.completed`
- `call.refer.failed`



```js
telnyx.callRefer({
  "call_control_id": "",
  "body": {
    "sip_address": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [ReferRequest](#referrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callReject
Reject an incoming call.

**Expected Webhooks:**

- `call.hangup`



```js
telnyx.callReject({
  "call_control_id": "",
  "body": {
    "cause": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [RejectRequest](#rejectrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callSendDTMF
Sends DTMF tones from this leg. DTMF tones will be heard by the other end of the call.

**Expected Webhooks:**

There are no webhooks associated with this command.



```js
telnyx.callSendDTMF({
  "call_control_id": "",
  "body": {
    "digits": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [SendDTMFRequest](#senddtmfrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callSpeak
Convert text to speech and play it back on the call. If multiple speak text commands are issued consecutively, the audio files will be placed in a queue awaiting playback.

**Expected Webhooks:**

- `call.speak.started`
- `call.speak.ended`



```js
telnyx.callSpeak({
  "call_control_id": "",
  "body": {
    "payload": "",
    "voice": "",
    "language": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [SpeakRequest](#speakrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### callTransfer
Transfer a call to a new destination. If the transfer is unsuccessful, a `call.hangup` webhook for the other call (Leg B) will be sent indicating that the transfer could not be completed. The original call will remain active and may be issued additional commands, potentially transfering the call to an alternate destination.

**Expected Webhooks:**

- `call.initiated`
- `call.bridged` to Leg B
- `call.answered` or `call.hangup`
- `call.machine.detection.ended` if `answering_machine_detection` was requested
- `call.machine.greeting.ended` if `answering_machine_detection` was set to `detect_beep`, `greeting_end` or `detect_words`


```js
telnyx.callTransfer({
  "call_control_id": "",
  "body": {
    "to": ""
  }
}, context)
```

#### Input
* input `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * body **required** [TransferCallRequest](#transfercallrequest)

#### Output
* output `object`
  * data [CallControlCommandResult](#callcontrolcommandresult)

### listConferences
Lists conferences. Conferences are created on demand, and will expire after all participants have left the conference or after 4 hours regardless of the number of active participants. Conferences are listed in descending order by `expires_at`.


```js
telnyx.listConferences({}, context)
```

#### Input
* input `object`
  * filter[name] `string`: If present, conferences will be filtered to those with a matching `name` attribute. Matching is case-sensitive
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [Conference](#conference)
  * meta [PaginationMeta](#paginationmeta)

### createConference
Create a conference from an existing call leg using a `call_control_id` and a conference name. Upon creating the conference, the call will be automatically bridged to the conference. Conferences will expire after all participants have left the conference or after 4 hours regardless of the number of active participants.

**Expected Webhooks:**

- `conference.created`
- `conference.participant.joined`
- `conference.participant.left`
- `conference.ended`
- `conference.recording.saved`



```js
telnyx.createConference({
  "body": {
    "call_control_id": "",
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateConferenceRequest](#createconferencerequest)

#### Output
* output `object`
  * data [Conference](#conference)

### listConferenceParticipants
Lists conference participants


```js
telnyx.listConferenceParticipants({
  "conference_id": ""
}, context)
```

#### Input
* input `object`
  * conference_id **required** `string`: Uniquely identifies the conference by id or name
  * filter[muted] `boolean`: If present, participants will be filtered to those who are/are not muted
  * filter[on_hold] `boolean`: If present, participants will be filtered to those who are/are not put on hold
  * filter[whispering] `boolean`: If present, participants will be filtered to those who are whispering or are not
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [Participant](#participant)
  * meta [PaginationMeta](#paginationmeta)

### retrieveConference
Retrieve an existing conference


```js
telnyx.retrieveConference({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the conference by id or name

#### Output
* output `object`
  * data [Conference](#conference)

### conferenceDialParticipantIn
Dials a phone number and, when the call is answered, automatically joins them into the specified conference.

**Expected Webhooks:**

- `call.hangup`
- `call.answered`
- `conference.participant.joined`
- `conference.participant.left`



```js
telnyx.conferenceDialParticipantIn({
  "id": "",
  "body": {
    "call_control_id": "",
    "from": "",
    "to": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the conference by id or name
  * body **required** [ConferenceCallRequest](#conferencecallrequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### conferenceHoldParticipants
Hold a list of participants in a conference call


```js
telnyx.conferenceHoldParticipants({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the conference by id or name
  * body **required** [ConferenceHoldRequest](#conferenceholdrequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### conferenceJoin
Join an existing call leg to a conference. Issue the Join Conference command with the conference ID in the path and the `call_control_id` of the leg you wish to join to the conference as an attribute.

**Expected Webhooks:**

- `conference.participant.joined`
- `conference.participant.left`



```js
telnyx.conferenceJoin({
  "id": "",
  "body": {
    "call_control_id": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the conference by id or name
  * body **required** [JoinConferenceRequest](#joinconferencerequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### conferenceMuteParticipants
Mute a list of participants in a conference call


```js
telnyx.conferenceMuteParticipants({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the conference by id or name
  * body **required** [ConferenceMuteRequest](#conferencemuterequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### conferencePlayAudio
Play audio to all or some participants on a conference call.


```js
telnyx.conferencePlayAudio({
  "id": "",
  "body": {
    "audio_url": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the conference by id or name
  * body **required** [ConferencePlayRequest](#conferenceplayrequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### conferenceStartRecording
Start recording the conference. Recording will stop on conference end, or via the Stop Recording command.

**Expected Webhooks:**

- `conference.recording.saved`


```js
telnyx.conferenceStartRecording({
  "id": "",
  "body": {
    "format": "",
    "channels": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Specifies the conference to record by id or name
  * body **required** [StartRecordingRequest](#startrecordingrequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### conferenceStopRecording
Stop recording the conference.

**Expected Webhooks:**

- `conference.recording.saved`



```js
telnyx.conferenceStopRecording({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Specifies the conference to stop the recording for by id or name
  * body **required** [StopRecordingRequest](#stoprecordingrequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### conferenceSpeakText
Convert text to speech and play it to all or some participants.


```js
telnyx.conferenceSpeakText({
  "id": "",
  "body": {
    "payload": "",
    "voice": "",
    "language": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Specifies the conference by id or name
  * body **required** [ConferenceSpeakRequest](#conferencespeakrequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### conferenceUnholdParticipants
Unhold a list of participants in a conference call


```js
telnyx.conferenceUnholdParticipants({
  "id": "",
  "body": {
    "call_control_ids": []
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the conference by id or name
  * body **required** [ConferenceUnholdRequest](#conferenceunholdrequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### conferenceUnmuteParticipants
Unmute a list of participants in a conference call


```js
telnyx.conferenceUnmuteParticipants({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the conference by id or name
  * body **required** [ConferenceUnmuteRequest](#conferenceunmuterequest)

#### Output
* output `object`
  * data [ConferenceCommandResult](#conferencecommandresult)

### listConnections
Returns a list of your connections irrespective of type.


```js
telnyx.listConnections({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[connection_name][contains] `string`: If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
  * filter[outbound_voice_profile_id] `string`: Identifies the associated outbound voice profile.
  * sort `string` (values: created_at, connection_name, active): Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>

#### Output
* output `object`
  * data `array`
    * items [Connection](#connection)
  * meta [PaginationMeta](#paginationmeta)

### retrieveConnection
Retrieves the high-level details of an existing connection. To retrieve specific authentication information, use the endpoint for the specific connection type.


```js
telnyx.retrieveConnection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: IP Connection ID

#### Output
* output `object`
  * data [Connection](#connection)

### listCredentialConnections
Returns a list of your credential connections.


```js
telnyx.listCredentialConnections({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[connection_name][contains] `string`: If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
  * filter[outbound.outbound_voice_profile_id] `string`: Identifies the associated outbound voice profile.
  * sort `string` (values: created_at, connection_name, active): Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>

#### Output
* output `object`
  * data `array`
    * items [CredentialConnection](#credentialconnection)
  * meta [PaginationMeta](#paginationmeta)

### createCredentialConnection
Creates a credential connection.


```js
telnyx.createCredentialConnection({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateCredentialConnectionRequest](#createcredentialconnectionrequest)

#### Output
* output `object`
  * data [CredentialConnection](#credentialconnection)

### deleteCredentialConnection
Deletes an existing credential connection.


```js
telnyx.deleteCredentialConnection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [CredentialConnection](#credentialconnection)

### retrieveCredentialConnection
Retrieves the details of an existing credential connection.


```js
telnyx.retrieveCredentialConnection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [CredentialConnection](#credentialconnection)

### updateCredentialConnection
Updates settings of an existing credential connection.


```js
telnyx.updateCredentialConnection({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [UpdateCredentialConnectionRequest](#updatecredentialconnectionrequest)

#### Output
* output `object`
  * data [CredentialConnection](#credentialconnection)

### listFaxApplications
This endpoint returns a list of your Fax Applications inside the 'data' attribute of the response. You can adjust which applications are listed by using filters. Fax Applications are used to configure how you send and receive faxes using the Programmable Fax API with Telnyx.


```js
telnyx.listFaxApplications({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[application_name][contains] `string`: If present, applications with <code>application_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
  * filter[outbound.outbound_voice_profile_id] `string`: Identifies the associated outbound voice profile.
  * sort `string` (values: created_at, connection_name, active): Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>

#### Output
* output `object`
  * data `array`
    * items [FaxApplication](#faxapplication)
  * meta [PaginationMeta](#paginationmeta)

### CreateFaxApplication
Creates a new Fax Application based on the parameters sent in the request. The application name and webhook URL are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.


```js
telnyx.CreateFaxApplication({
  "body": {
    "application_name": "",
    "webhook_event_url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateFaxApplicationRequest](#createfaxapplicationrequest)

#### Output
* output `object`
  * data [FaxApplication](#faxapplication)

### DeleteFaxApplication
Permanently deletes a Fax Application. Deletion may be prevented if the application is in use by phone numbers.


```js
telnyx.DeleteFaxApplication({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [FaxApplication](#faxapplication)

### getFaxApplication
Return the details of an existing Fax Application inside the 'data' attribute of the response.


```js
telnyx.getFaxApplication({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [FaxApplication](#faxapplication)

### UpdateFaxApplication
Updates settings of an existing Fax Application based on the parameters of the request.


```js
telnyx.UpdateFaxApplication({
  "id": "",
  "body": {
    "application_name": "",
    "webhook_event_url": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [UpdateFaxApplicationRequest](#updatefaxapplicationrequest)

#### Output
* output `object`
  * data [FaxApplication](#faxapplication)

### ListFaxes
View a list of faxes


```js
telnyx.ListFaxes({}, context)
```

#### Input
* input `object`
  * filter[created_at][gte] `string`: ISO 8601 date time for filtering faxes created after or on that date
  * filter[created_at][gt] `string`: ISO 8601 date time for filtering faxes created after that date
  * filter[created_at][lte] `string`: ISO 8601 formatted date time for filtering faxes created on or before that date
  * filter[created_at][lt] `string`: ISO 8601 formatted date time for filtering faxes created before that date
  * filter[direction][eq] `string`: The direction, inbound or outbound, for filtering faxes sent from this account
  * filter[from][eq] `string`: The phone number, in E.164 format for filtering faxes sent from this number
  * page[size] `integer`: Number of fax resourcxes for the single page returned
  * page[number] `integer`: Number of the page to be retrieved

#### Output
* output `object`
  * data `array`
    * items [Fax](#fax)
  * meta `object`

### SendFax
Send a fax


```js
telnyx.SendFax({
  "body": {
    "connection_id": "",
    "media_url": "",
    "to": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SendFaxRequest](#sendfaxrequest)

#### Output
* output `object`
  * data [Fax](#fax)

### DeleteFax
Delete a fax


```js
telnyx.DeleteFax({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique identifier of a fax.

#### Output
*Output schema unknown*

### ViewFax
View a fax


```js
telnyx.ViewFax({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique identifier of a fax.

#### Output
* output `object`
  * data [Fax](#fax)

### listFqdnConnections
Returns a list of your FQDN connections.


```js
telnyx.listFqdnConnections({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[connection_name][contains] `string`: If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
  * sort `string` (values: created_at, connection_name, active): Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>

#### Output
* output `object`
  * data `array`
    * items [FqdnConnection](#fqdnconnection)
  * meta [PaginationMeta](#paginationmeta)

### createFqdnConnection
Creates a FQDN connection.


```js
telnyx.createFqdnConnection({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [CreateFqdnConnectionRequest](#createfqdnconnectionrequest)

#### Output
* output `object`
  * data [FqdnConnection](#fqdnconnection)

### deleteFqdnConnection
Deletes an FQDN connection.


```js
telnyx.deleteFqdnConnection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: FQDN Connection ID

#### Output
* output `object`
  * data [FqdnConnection](#fqdnconnection)

### retrieveFqdnConnection
Retrieves the details of an existing FQDN connection.


```js
telnyx.retrieveFqdnConnection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: FQDN Connection ID

#### Output
* output `object`
  * data [FqdnConnection](#fqdnconnection)

### updateFqdnConnection
Updates settings of an existing FQDN connection.


```js
telnyx.updateFqdnConnection({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: FQDN Connection ID
  * body **required** [UpdateFqdnConnectionRequest](#updatefqdnconnectionrequest)

#### Output
* output `object`
  * data [FqdnConnection](#fqdnconnection)

### listFqdns
Get all FQDNs belonging to the user that match the given filters.


```js
telnyx.listFqdns({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[connection_id] `string`: ID of the FQDN connection to which the FQDN belongs.
  * filter[fqdn] `string`: FQDN represented by the resource.
  * filter[port] `integer`: Port to use when connecting to the FQDN.
  * filter[dns_record_type] `string`: DNS record type used by the FQDN.

#### Output
* output `object`
  * data `array`
    * items [Fqdn](#fqdn)

### createFqdn
Create a new FQDN object.


```js
telnyx.createFqdn({}, context)
```

#### Input
* input `object`
  * body [CreateFqdnRequest](#createfqdnrequest)

#### Output
* output `object`
  * data [Fqdn](#fqdn)

### deleteFqdn
Delete an FQDN.


```js
telnyx.deleteFqdn({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [Fqdn](#fqdn)

### retrieveFqdn
Return the details regarding a specific FQDN.


```js
telnyx.retrieveFqdn({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [Fqdn](#fqdn)

### updateFqdn
Update the details of a specific FQDN.


```js
telnyx.updateFqdn({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body [UpdateFqdnRequest](#updatefqdnrequest)

#### Output
* output `object`
  * data [Fqdn](#fqdn)

### listIpConnections
Returns a list of your IP connections.


```js
telnyx.listIpConnections({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[connection_name][contains] `string`: If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
  * filter[outbound.outbound_voice_profile_id] `string`: Identifies the associated outbound voice profile.
  * sort `string` (values: created_at, connection_name, active): Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>

#### Output
* output `object`
  * data `array`
    * items [IpConnection](#ipconnection)
  * meta [PaginationMeta](#paginationmeta)

### createIpConnection
Creates an IP connection.


```js
telnyx.createIpConnection({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [CreateIpConnectionRequest](#createipconnectionrequest)

#### Output
* output `object`
  * data [IpConnection](#ipconnection)

### deleteIpConnection
Deletes an existing IP connection.


```js
telnyx.deleteIpConnection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.

#### Output
* output `object`
  * data [IpConnection](#ipconnection)

### retrieveIpConnection
Retrieves the details of an existing ip connection.


```js
telnyx.retrieveIpConnection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: IP Connection ID

#### Output
* output `object`
  * data [IpConnection](#ipconnection)

### updateIpConnection
Updates settings of an existing IP connection.


```js
telnyx.updateIpConnection({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.
  * body **required** [UpdateIpConnectionRequest](#updateipconnectionrequest)

#### Output
* output `object`
  * data [IpConnection](#ipconnection)

### listIps
Get all IPs belonging to the user that match the given filters.


```js
telnyx.listIps({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[connection_id] `string`: ID of the IP Connection to which this IP should be attached.
  * filter[ip_address] `string`: IP adddress represented by this resource.
  * filter[port] `integer`: Port to use when connecting to this IP.

#### Output
* output `object`
  * data `array`
    * items [Ip](#ip)

### createIp
Create a new IP object.


```js
telnyx.createIp({}, context)
```

#### Input
* input `object`
  * body [CreateIpRequest](#createiprequest)

#### Output
* output `object`
  * data [Ip](#ip)

### deleteIp
Delete an IP.


```js
telnyx.deleteIp({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.

#### Output
* output `object`
  * data [Ip](#ip)

### retrieveIp
Return the details regarding a specific IP.


```js
telnyx.retrieveIp({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.

#### Output
* output `object`
  * data [Ip](#ip)

### updateIp
Update the details of a specific IP.


```js
telnyx.updateIp({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.
  * body [UpdateIpRequest](#updateiprequest)

#### Output
* output `object`
  * data [Ip](#ip)

### createLedgerBillingGroupReport
Create a ledger billing group report


```js
telnyx.createLedgerBillingGroupReport({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [NewLedgerBillingGroupReport](#newledgerbillinggroupreport)

#### Output
* output `object`
  * data [LedgerBillingGroupReport](#ledgerbillinggroupreport)

### retrieveLedgerBillingGroupReport
Retrieve a ledger billing group report


```js
telnyx.retrieveLedgerBillingGroupReport({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the ledger billing group report

#### Output
* output `object`
  * data [LedgerBillingGroupReport](#ledgerbillinggroupreport)

### createMessage
Send a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number Pool.

This endpoint allows you to send a message with any messaging resource.
Current messaging resources include: long-code, short-code, number-pool, and
alphanumeric-sender-id.



```js
telnyx.createMessage({}, context)
```

#### Input
* input `object`
  * body [CreateMessageRequest](#createmessagerequest)

#### Output
* output `object`
  * data [OutboundMessagePayload](#outboundmessagepayload)

### createLongCodeMessage
Send a long code message


```js
telnyx.createLongCodeMessage({}, context)
```

#### Input
* input `object`
  * body [CreateLongCodeMessageRequest](#createlongcodemessagerequest)

#### Output
* output `object`
  * data [OutboundMessagePayload](#outboundmessagepayload)

### createNumberPoolMessage
Send a message using number pool


```js
telnyx.createNumberPoolMessage({}, context)
```

#### Input
* input `object`
  * body [CreateNumberPoolMessageRequest](#createnumberpoolmessagerequest)

#### Output
* output `object`
  * data [OutboundMessagePayload](#outboundmessagepayload)

### createShortCodeMessage
Send a short code message


```js
telnyx.createShortCodeMessage({}, context)
```

#### Input
* input `object`
  * body [CreateShortCodeMessageRequest](#createshortcodemessagerequest)

#### Output
* output `object`
  * data [OutboundMessagePayload](#outboundmessagepayload)

### retrieveMessage
Note: This API endpoint can only retrieve messages that are no older than 10 days since their creation. If you require messages older than this, please generate an [MDR report.](https://developers.telnyx.com/docs/api/v1/reports/MDR-Reports)


```js
telnyx.retrieveMessage({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the message

#### Output
* output `object`
  * data [OutboundMessagePayload](#outboundmessagepayload)

### listMessagingHostedNumberOrder
List messaging hosted number orders


```js
telnyx.listMessagingHostedNumberOrder({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [MessagingHostedNumberOrder](#messaginghostednumberorder)
  * meta [PaginationMeta](#paginationmeta)

### createMessagingHostedNumberOrder
Create a messaging hosted number order


```js
telnyx.createMessagingHostedNumberOrder({}, context)
```

#### Input
* input `object`
  * body [CreateMessagingHostedNumberOrderRequest](#createmessaginghostednumberorderrequest)

#### Output
* output `object`
  * data [MessagingHostedNumberOrder](#messaginghostednumberorder)

### retrieveMessagingHostedNumberOrder
Retrieve a messaging hosted number order


```js
telnyx.retrieveMessagingHostedNumberOrder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.

#### Output
* output `object`
  * data [MessagingHostedNumberOrder](#messaginghostednumberorder)

### uploadFileMessagingHostedNumberOrder
Upload file required for a messaging hosted number order


```js
telnyx.uploadFileMessagingHostedNumberOrder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.
  * bill `string`: Must be the last month's bill with proof of ownership of all of the numbers in the order in PDF format.
  * loa `string`: Must be a signed LOA for the numbers in the order in PDF format.

#### Output
* output `object`
  * data [MessagingHostedNumberOrder](#messaginghostednumberorder)

### deleteMessagingHostedNumber
Delete a messaging hosted number


```js
telnyx.deleteMessagingHostedNumber({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.

#### Output
* output `object`
  * data [HostedNumber](#hostednumber)

### listMessagingProfileMetrics
List messaging profile metrics


```js
telnyx.listMessagingProfileMetrics({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * id `string`: The id of the messaging profile(s) to retrieve
  * time_frame `string` (values: 1h, 3h, 24h, 3d, 7d, 30d): The timeframe for which you'd like to retrieve metrics.

#### Output
* output `object`
  * data `array`
    * items [MessagingProfileHighLevelMetrics](#messagingprofilehighlevelmetrics)
  * meta [PaginationMeta](#paginationmeta)

### listMessagingProfiles
List messaging profiles


```js
telnyx.listMessagingProfiles({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [MessagingProfile](#messagingprofile)
  * meta [PaginationMeta](#paginationmeta)

### createMessagingProfile
Create a messaging profile


```js
telnyx.createMessagingProfile({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateMessagingProfileRequest](#createmessagingprofilerequest)

#### Output
* output `object`
  * data [MessagingProfile](#messagingprofile)

### deleteMessagingProfile
Delete a messaging profile


```js
telnyx.deleteMessagingProfile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the messaging profile to retrieve

#### Output
* output `object`
  * data [MessagingProfile](#messagingprofile)

### retrieveMessagingProfile
Retrieve a messaging profile


```js
telnyx.retrieveMessagingProfile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the messaging profile to retrieve

#### Output
* output `object`
  * data [MessagingProfile](#messagingprofile)

### updateMessagingProfile
Update a messaging profile


```js
telnyx.updateMessagingProfile({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the messaging profile to retrieve
  * body **required** [UpdateMessagingProfileRequest](#updatemessagingprofilerequest)

#### Output
* output `object`
  * data [MessagingProfile](#messagingprofile)

### retrieveMessagingProfileDetailedMetrics
Retrieve messaging profile metrics


```js
telnyx.retrieveMessagingProfileDetailedMetrics({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the messaging profile to retrieve
  * time_frame `string` (values: 1h, 3h, 24h, 3d, 7d, 30d): The timeframe for which you'd like to retrieve metrics.

#### Output
* output `object`
  * data [MessagingProfileDetailedMetrics](#messagingprofiledetailedmetrics)

### listMessagingProfilePhoneNumbers
List phone numbers associated with a messaging profile


```js
telnyx.listMessagingProfilePhoneNumbers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * id **required** `string`: The id of the messaging profile to retrieve

#### Output
* output `object`
  * data `array`
    * items [PhoneNumberWithMessagingSettings](#phonenumberwithmessagingsettings)
  * meta [PaginationMeta](#paginationmeta)

### listMessagingProfileShortCodes
List short codes associated with a messaging profile


```js
telnyx.listMessagingProfileShortCodes({
  "id": ""
}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * id **required** `string`: The id of the messaging profile to retrieve

#### Output
* output `object`
  * data `array`
    * items [ShortCode](#shortcode)
  * meta [PaginationMeta](#paginationmeta)

### listMessagingUrlDomains
List messaging URL domains


```js
telnyx.listMessagingUrlDomains({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [MessagingUrlDomain](#messagingurldomain)
  * meta [PaginationMeta](#paginationmeta)

### MobileOperatorNetworksGet
Telnyx has a set of GSM mobile operators partners that are available through our mobile network roaming. This resource is entirely managed by Telnyx and may change over time. That means that this resource won't allow any write operations for it. Still, it's available so it can be used as a support resource that can be related to other resources or become a configuration option.


```js
telnyx.MobileOperatorNetworksGet({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[name][starts_with] `string`: Filter by name starting with.
  * filter[name][contains] `string`: Filter by name containing match.
  * filter[name][ends_with] `string`: Filter by name ending with.
  * filter[country_code] `string`: Filter by exact country_code.
  * filter[mcc] `string`: Filter by exact MCC.
  * filter[mnc] `string`: Filter by exact MNC.
  * filter[tadig] `string`: Filter by exact TADIG.

#### Output
* output `object`
  * data `array`
    * items [MobileOperatorNetwork](#mobileoperatornetwork)
  * meta [PaginationMeta](#paginationmeta)

### listNotificationChannels
List notification channels.


```js
telnyx.listNotificationChannels({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[channel_type_id][eq] `string` (values: webhook, sms, email, voice): Filter by the id of a channel type

#### Output
* output `object`
  * data `array`
    * items [NotificationChannel](#notificationchannel)
  * meta [PaginationMeta](#paginationmeta)

### createNotificationChannels
Create a notification channel.


```js
telnyx.createNotificationChannels({}, context)
```

#### Input
* input `object`
  * body [NotificationChannel](#notificationchannel)

#### Output
* output `object`
  * data [NotificationChannel](#notificationchannel)

### deleteNotificationChannel
Delete a notification channel.


```js
telnyx.deleteNotificationChannel({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the resource.

#### Output
* output `object`
  * data [NotificationChannel](#notificationchannel)

### retrieveNotificationChannel
Retrieve a notification channel.


```js
telnyx.retrieveNotificationChannel({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the resource.

#### Output
* output `object`
  * data [NotificationChannel](#notificationchannel)

### updateNotificationChannel
Update a notification channel.


```js
telnyx.updateNotificationChannel({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the resource.
  * body **required** [NotificationChannel](#notificationchannel)

#### Output
* output `object`
  * data [NotificationChannel](#notificationchannel)

### findNotificationsEventsConditions
Returns a list of your notifications events conditions.


```js
telnyx.findNotificationsEventsConditions({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[associated_record_type][eq] `string` (values: account, phone_number): Filter by the associated record type

#### Output
* output `object`
  * data `array`
    * items [NotificationEventCondition](#notificationeventcondition)
  * meta [PaginationMeta](#paginationmeta)

### findNotificationsEvents
Returns a list of your notifications events.


```js
telnyx.findNotificationsEvents({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [NotificationEvent](#notificationevent)
  * meta [PaginationMeta](#paginationmeta)

### findNotificationsProfiles
Returns a list of your notifications profiles.


```js
telnyx.findNotificationsProfiles({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [NotificationProfile](#notificationprofile)
  * meta [PaginationMeta](#paginationmeta)

### createNotificationProfile
Create a notification profile.


```js
telnyx.createNotificationProfile({}, context)
```

#### Input
* input `object`
  * body [NotificationProfile](#notificationprofile)

#### Output
* output `object`
  * data [NotificationProfile](#notificationprofile)

### deleteNotificationProfile
Delete a notification profile.


```js
telnyx.deleteNotificationProfile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the resource.

#### Output
* output `object`
  * data [NotificationProfile](#notificationprofile)

### retrieveNotificationProfile
Retrieve a notification profile.


```js
telnyx.retrieveNotificationProfile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the resource.

#### Output
* output `object`
  * data [NotificationProfile](#notificationprofile)

### updateNotificationProfile
Update a notification profile.


```js
telnyx.updateNotificationProfile({
  "id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the resource.
  * body **required** [NotificationProfile](#notificationprofile)

#### Output
* output `object`
  * data [NotificationProfile](#notificationprofile)

### listNotificationSettings
List notification settings.


```js
telnyx.listNotificationSettings({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[notification_profile_id][eq] `string`: Filter by the id of a notification profile
  * filter[notification_channel][eq] `string`: Filter by the id of a notification channel
  * filter[notification_event_condition_id][eq] `string`: Filter by the id of a notification channel
  * filter[associated_record_type][eq] `string` (values: account, phone_number): Filter by the associated record type
  * filter[status][eq] `string` (values: enabled, enable-received, enable-pending, enable-submtited, delete-received, delete-pending, delete-submitted, deleted): The status of a notification setting

#### Output
* output `object`
  * data `array`
    * items [NotificationSetting](#notificationsetting)
  * meta [PaginationMeta](#paginationmeta)

### createNotificationSetting
Add a notification setting.


```js
telnyx.createNotificationSetting({}, context)
```

#### Input
* input `object`
  * body [NotificationSetting](#notificationsetting)

#### Output
* output `object`
  * data [NotificationSetting](#notificationsetting)

### deleteNotificationSetting
Delete a notification setting.


```js
telnyx.deleteNotificationSetting({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the resource.

#### Output
* output `object`
  * data [NotificationSetting](#notificationsetting)

### retrieveNotificationSetting
Retrieve a notification setting.


```js
telnyx.retrieveNotificationSetting({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the resource.

#### Output
* output `object`
  * data [NotificationSetting](#notificationsetting)

### NumberLookup
Returns information about the provided phone number.


```js
telnyx.NumberLookup({
  "phone_number": ""
}, context)
```

#### Input
* input `object`
  * phone_number **required** `string`: The phone number to be looked up
  * type `string` (values: carrier, caller-name): Specifies the type of number lookup to be performed

#### Output
* output `object`
  * data [NumberLookupRecord](#numberlookuprecord)

### listNumberOrderDocuments
Gets a paginated list of number order documents.


```js
telnyx.listNumberOrderDocuments({}, context)
```

#### Input
* input `object`
  * filter[requirement_id] `string`: Filter number order documents by `requirement_id`.
  * filter[created_at][gt] `string`: Filter number order documents after this datetime.
  * filter[created_at][lt] `string`: Filter number order documents from before this datetime.
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [NumberOrderDocument](#numberorderdocument)
  * meta [PaginationMeta](#paginationmeta)

### createNumberOrderDocument
Upload a phone number order document.


```js
telnyx.createNumberOrderDocument({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [CreateNumberOrderDocumentRequest](#createnumberorderdocumentrequest)

#### Output
* output `object`
  * data [NumberOrderDocument](#numberorderdocument)

### retrieveNumberOrderDocument
Gets a single number order document.


```js
telnyx.retrieveNumberOrderDocument({
  "number_order_document_id": ""
}, context)
```

#### Input
* input `object`
  * number_order_document_id **required** `string`: The number order document ID.

#### Output
* output `object`
  * data [NumberOrderDocument](#numberorderdocument)

### updateNumberOrderDocument
Updates a number order document.


```js
telnyx.updateNumberOrderDocument({
  "number_order_document_id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * number_order_document_id **required** `string`: The number order document ID.
  * body **required** [UpdateNumberOrderDocumentRequest](#updatenumberorderdocumentrequest)

#### Output
* output `object`
  * data [NumberOrderDocument](#numberorderdocument)

### listNumberOrders
Get a paginated list of number orders.


```js
telnyx.listNumberOrders({}, context)
```

#### Input
* input `object`
  * filter[status] `string`: Filter number orders by status.
  * filter[created_at][gt] `string`: Filter number orders later than this value.
  * filter[created_at][lt] `string`: Filter number orders earlier than this value.
  * filter[phone_numbers.phone_number] `string`: Filter number orders having these phone numbers.
  * filter[customer_reference] `string`: Filter number orders via the customer reference set.
  * filter[requirements_met] `boolean`: Filter number orders by requirements met.
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [NumberOrder](#numberorder)
  * meta [PaginationMeta](#paginationmeta)

### createNumberOrder
Creates a phone number order.


```js
telnyx.createNumberOrder({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [CreateNumberOrderRequest](#createnumberorderrequest)

#### Output
* output `object`
  * data [NumberOrder](#numberorder)

### retrieveNumberOrder
Get an existing phone number order.


```js
telnyx.retrieveNumberOrder({
  "number_order_id": ""
}, context)
```

#### Input
* input `object`
  * number_order_id **required** `string`: The number order ID.

#### Output
* output `object`
  * data [NumberOrder](#numberorder)

### updateNumberOrder
Updates a phone number order.


```js
telnyx.updateNumberOrder({
  "number_order_id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * number_order_id **required** `string`: The number order ID.
  * body **required** [UpdateNumberOrderRequest](#updatenumberorderrequest)

#### Output
* output `object`
  * data [NumberOrder](#numberorder)

### listNumberReservations
Gets a paginated list of phone number reservations.


```js
telnyx.listNumberReservations({}, context)
```

#### Input
* input `object`
  * filter[status] `string`: Filter number reservations by status.
  * filter[created_at][gt] `string`: Filter number reservations later than this value.
  * filter[created_at][lt] `string`: Filter number reservations earlier than this value.
  * filter[phone_numbers.phone_number] `string`: Filter number reservations having these phone numbers.
  * filter[customer_reference] `string`: Filter number reservations via the customer reference set.
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [NumberReservation](#numberreservation)
  * meta [PaginationMeta](#paginationmeta)

### createNumberReservation
Creates a Phone Number Reservation for multiple numbers.


```js
telnyx.createNumberReservation({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [CreateNumberReservationRequest](#createnumberreservationrequest)

#### Output
* output `object`
  * data [NumberReservation](#numberreservation)

### retrieveNumberReservation
Gets a single phone number reservation.


```js
telnyx.retrieveNumberReservation({
  "number_reservation_id": ""
}, context)
```

#### Input
* input `object`
  * number_reservation_id **required** `string`: The number reservation ID.

#### Output
* output `object`
  * data [NumberReservation](#numberreservation)

### extendNumberReservationExpiryTime
Extends reservation expiry time on all phone numbers.


```js
telnyx.extendNumberReservationExpiryTime({
  "number_reservation_id": ""
}, context)
```

#### Input
* input `object`
  * number_reservation_id **required** `string`: The number reservation ID.

#### Output
* output `object`
  * data [NumberReservation](#numberreservation)

### OTAUpdatesList
List OTA updates


```js
telnyx.OTAUpdatesList({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[sim_card_id] `string`: The SIM card identification UUID.
  * filter[status] `string` (values: in-progress, completed, failed): Filter by possible OTA updates statuses.
  * filter[type] `string` (values: sim_card_network_preferences): Filter by type.

#### Output
* output `object`
  * data `array`
    * items [SimplifiedOTAUpdate](#simplifiedotaupdate)
  * meta [PaginationMeta](#paginationmeta)

### OTAUpdateGET
This API returns the details of an Over the Air (OTA) update.


```js
telnyx.OTAUpdateGET({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [CompleteOTAUpdate](#completeotaupdate)

### getOutboundVoiceProfiles
Get all outbound voice profiles belonging to the user that match the given filters.


```js
telnyx.getOutboundVoiceProfiles({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[name][contains] `string`: Optional filter on outbound voice profile name.
  * sort `string` (values: enabled, -enabled, created_at, -created_at, name, -name, service_plan, -service_plan, traffic_type, -traffic_type, usage_payment_method, -usage_payment_method): Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code>-</code> prefix.<br/><br/>

#### Output
* output [MultipleOutboundVoiceProfiles](#multipleoutboundvoiceprofiles)

### createOutboundVoiceProfile
Create an outbound voice profile.


```js
telnyx.createOutboundVoiceProfile({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [OutboundVoiceProfileWritable](#outboundvoiceprofilewritable)

#### Output
* output [SingleOutboundVoiceProfile](#singleoutboundvoiceprofile)

### deleteOutboundVoiceProfile
Deletes an existing outbound voice profile.


```js
telnyx.deleteOutboundVoiceProfile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output [SingleOutboundVoiceProfile](#singleoutboundvoiceprofile)

### getOutboundVoiceProfile
Retrieves the details of an existing outbound voice profile.


```js
telnyx.getOutboundVoiceProfile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output [SingleOutboundVoiceProfile](#singleoutboundvoiceprofile)

### updateOutboundVoiceProfile
Updates an existing outbound voice profile.


```js
telnyx.updateOutboundVoiceProfile({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [OutboundVoiceProfileWritable](#outboundvoiceprofilewritable)

#### Output
* output [SingleOutboundVoiceProfile](#singleoutboundvoiceprofile)

### listPhoneNumberRegulatoryRequirements
Gets a paginated list of phone number regulatory requirements.


```js
telnyx.listPhoneNumberRegulatoryRequirements({}, context)
```

#### Input
* input `object`
  * filter[phone_number] `array`: The list of phone numbers to retrieve regulatory requirements for.
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [PhoneNumberRegulatoryGroup](#phonenumberregulatorygroup)
  * meta [PaginationMeta](#paginationmeta)

### listPhoneNumbers
List phone numbers


```js
telnyx.listPhoneNumbers({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[tag] `string`: Filter by phone number tags.
  * filter[phone_number] `string`: Filter by phone number. Requires at least three digits.
  * filter[status] `string` (values: purchase_pending, purchase_failed, port_pending, active, deleted, port_failed, emergency_only, ported_out, port_out_pending): Filter by phone number status.
  * filter[voice.connection_name][contains] `string`: Filter contains connection name. Requires at least three characters.
  * filter[voice.connection_name][starts_with] `string`: Filter starts with connection name. Requires at least three characters.
  * filter[voice.connection_name][ends_with] `string`: Filter ends with connection name. Requires at least three characters.
  * filter[voice.connection_name][eq] `string`: Filter by connection name.
  * filter[usage_payment_method] `string` (values: pay-per-minute, channel): Filter by usage_payment_method.
  * filter[billing_group_id] `string`: Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string 'null'.
  * filter[emergency_address_id] `string`: Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string 'null'.
  * filter[customer_reference] `string`: Filter numbers via the customer_reference set.
  * sort `string` (values: purchased_at, phone_number, connection_name, usage_payment_method): Specifies the sort order for results. If not given, results are sorted by created_at in descending order.

#### Output
* output `object`
  * data `array`
    * items [PhoneNumberDetailed](#phonenumberdetailed)
  * meta [PaginationMeta](#paginationmeta)

### listCsvDownloads
List CSV downloads


```js
telnyx.listCsvDownloads({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [CsvDownload](#csvdownload)
  * meta [PaginationMeta](#paginationmeta)

### createCsvDownload
Create a CSV download


```js
telnyx.createCsvDownload(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [CsvDownload](#csvdownload)

### retrieveCsvDownload
Retrieve a CSV download


```js
telnyx.retrieveCsvDownload({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the CSV download.

#### Output
* output `object`
  * data `array`
    * items [CsvDownload](#csvdownload)

### listOutboundChannels
Returns the inbound channels for your account. Inbound channels allows you to use Channel Billing for calls to your Telnyx phone numbers. Please check the Telnyx Support Articles section for full information and examples of how to utilize Channel Billing.


```js
telnyx.listOutboundChannels(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `object`
    * channels `integer`: The current number of concurrent channels set for the account
    * record_type `string`: Identifies the type of the response

### updateOutboundChannels
Update the inbound channels for the account


```js
telnyx.updateOutboundChannels({
  "body": {
    "channels": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * channels **required** `integer`: The new number of concurrent channels for the account

#### Output
* output `object`
  * data `object`
    * channels `integer`: The number of channels set for the account
    * record_type `string`: Identifies the type of the response

### listPhoneNumbersWithMessagingSettings
List phone numbers with messaging settings


```js
telnyx.listPhoneNumbersWithMessagingSettings({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [PhoneNumberWithMessagingSettings](#phonenumberwithmessagingsettings)
  * meta [PaginationMeta](#paginationmeta)

### listPhoneNumbersWithVoiceSettings
List phone numbers with voice settings


```js
telnyx.listPhoneNumbersWithVoiceSettings({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[phone_number] `string`: Filter by phone number. Requires at least three digits.
  * filter[connection_name][contains] `string`: Filter contains connection name. Requires at least three characters.
  * filter[customer_reference] `string`: Filter numbers via the customer_reference set.
  * filter[usage_payment_method] `string` (values: pay-per-minute, channel): Filter by usage_payment_method.
  * sort `string` (values: purchased_at, phone_number, connection_name, usage_payment_method): Specifies the sort order for results. If not given, results are sorted by created_at in descending order.

#### Output
* output `object`
  * data `array`
    * items [PhoneNumberWithVoiceSettings](#phonenumberwithvoicesettings)
  * meta [PaginationMeta](#paginationmeta)

### deletePhoneNumber
Delete a phone number


```js
telnyx.deletePhoneNumber({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [PhoneNumberDetailed](#phonenumberdetailed)

### retrievePhoneNumber
Retrieve a phone number


```js
telnyx.retrievePhoneNumber({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [PhoneNumberDetailed](#phonenumberdetailed)

### updatePhoneNumber
Update a phone number


```js
telnyx.updatePhoneNumber({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [UpdatePhoneNumberRequest](#updatephonenumberrequest)

#### Output
* output `object`
  * data [PhoneNumberDetailed](#phonenumberdetailed)

### enableEmergencyPhoneNumber
Enable emergency for a phone number


```js
telnyx.enableEmergencyPhoneNumber({
  "id": "",
  "body": {
    "emergency_enabled": true,
    "emergency_address_id": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [PhoneNumberEnableEmergencyRequest](#phonenumberenableemergencyrequest)

#### Output
* output `object`
  * data [PhoneNumberWithVoiceSettings](#phonenumberwithvoicesettings)

### retrievePhoneNumberWithMessagingSettings
Retrieve a phone number with messaging settings


```js
telnyx.retrievePhoneNumberWithMessagingSettings({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.

#### Output
* output `object`
  * data [PhoneNumberWithMessagingSettings](#phonenumberwithmessagingsettings)

### updatePhoneNumberWithMessagingSettings
Update a phone number with messaging settings


```js
telnyx.updatePhoneNumberWithMessagingSettings({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the type of resource.
  * body **required** [UpdatePhoneNumberMessagingSettingsRequest](#updatephonenumbermessagingsettingsrequest)

#### Output
* output `object`
  * data [PhoneNumberWithMessagingSettings](#phonenumberwithmessagingsettings)

### retrievePhoneNumberWithVoiceSettings
Retrieve a phone number with voice settings


```js
telnyx.retrievePhoneNumberWithVoiceSettings({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [PhoneNumberWithVoiceSettings](#phonenumberwithvoicesettings)

### updatePhoneNumberWithVoiceSettings
Update a phone number with voice settings


```js
telnyx.updatePhoneNumberWithVoiceSettings({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [UpdatePhoneNumberVoiceSettingsRequest](#updatephonenumbervoicesettingsrequest)

#### Output
* output `object`
  * data [PhoneNumberWithVoiceSettings](#phonenumberwithvoicesettings)

### postPortabilityCheck
Runs a portability check, returning the results immediately.


```js
telnyx.postPortabilityCheck({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * phone_numbers `array`: The list of +E.164 formatted phone numbers to check for portability
      * items `string`

#### Output
* output `object`
  * data `array`
    * items [PortabilityCheckDetails](#portabilitycheckdetails)

### listPortoutRequest
Returns the portout requests according to filters


```js
telnyx.listPortoutRequest({}, context)
```

#### Input
* input `object`
  * filter[carrier_name] `string`: Filter by new carrier name.
  * filter[spid] `string`: Filter by new carrier spid.
  * filter[status] `string` (values: pending, approved, rejected, ported): Filter by portout status.
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [PortoutDetails](#portoutdetails)
  * meta [Metadata](#metadata)

### findPortoutRequest
Returns the portout request based on the ID provided


```js
telnyx.findPortoutRequest({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Portout id

#### Output
* output `object`
  * data [PortoutDetails](#portoutdetails)

### findPortoutComments
Returns a list of comments for a portout request.


```js
telnyx.findPortoutComments({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Portout id

#### Output
* output `object`
  * data `array`
    * items [PortoutComment](#portoutcomment)
  * meta [Metadata](#metadata)

### postPortRequestComment
Creates a comment on a portout request.


```js
telnyx.postPortRequestComment({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Portout id
  * body **required** `object`
    * body `string`: Comment to post on this portout request

#### Output
* output `object`
  * data [PortoutComment](#portoutcomment)

### updatePortoutRequest
Authorize or reject portout request


```js
telnyx.updatePortoutRequest({
  "id": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Portout id
  * status **required** `string` (values: authorized, rejected): Updated portout status

#### Output
* output `object`
  * data [PortoutDetails](#portoutdetails)

### listRecordings
Lists recordings for the authenticated user


```js
telnyx.listRecordings({}, context)
```

#### Input
* input `object`
  * filter[conference_id] `string`: Return only recordings associated with a given conference
  * filter[created_at][gte] `string`: Return only recordings created later than or at given ISO 8601 datetime
  * filter[created_at][lte] `string`: Return only recordings created earlier than or at given ISO 8601 datetime
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [Recording](#recording)
  * meta [PaginationMeta](#paginationmeta)

### retrieveRecording
Retrieve a recording from the authenticated user's recordings


```js
telnyx.retrieveRecording({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the recording

#### Output
* output `object`
  * data [Recording](#recording)

### listNumberOrderRegulatoryRequirements
Gets a paginated list of number order regulatory requirements.


```js
telnyx.listNumberOrderRegulatoryRequirements({}, context)
```

#### Input
* input `object`
  * filter[requirement_id] `string`: Filter number order regulatory requirements by `requirement_id`.
  * filter[field_type] `string`: Filter number order regulatory requirements by `field_type`.
  * filter[requirement_type] `string`: Filter number order regulatory requirements by `requirement_type`.
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [RegulatoryRequirement](#regulatoryrequirement)
  * meta [PaginationMeta](#paginationmeta)

### retrieveNumberOrderRegulatoryRequirement
Gets a single number order regulatory requirement.


```js
telnyx.retrieveNumberOrderRegulatoryRequirement({
  "requirement_id": ""
}, context)
```

#### Input
* input `object`
  * requirement_id **required** `string`: The number order regulatory requirement ID.

#### Output
* output `object`
  * data [RegulatoryRequirement](#regulatoryrequirement)

### getCdrRequests
Fetch all previous requests for messaging detail reports. Messaging detail reports are reports for pulling all messaging records. 


```js
telnyx.getCdrRequests({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Page number
  * page[size] `integer`: Size of the page

#### Output
* output [MdrGetDetailReportV2Resp](#mdrgetdetailreportv2resp)

### submitMdrRequest
Submit a request for new messaging detail report. Messaging detail report pulls all raw messaging data according to defined filters.


```js
telnyx.submitMdrRequest({
  "body": {
    "end_date": "",
    "start_date": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [MdrPostDetailReportV2Req](#mdrpostdetailreportv2req)

#### Output
* output [MdrPostDetailReportV2Resp](#mdrpostdetailreportv2resp)

### deleteMdrRequest
Delete generated messaging detail report by id


```js
telnyx.deleteMdrRequest({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output [MdrDeleteDetailReportV2Resp](#mdrdeletedetailreportv2resp)

### getMdrRequest
Fetch single messaging detail report by id.


```js
telnyx.getMdrRequest({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output [MdrGetDetailReportByIdV2Resp](#mdrgetdetailreportbyidv2resp)

### getUsageReports
Fetch all messaging usage reports. Usage reports are aggregated messaging data for specified time period and breakdown


```js
telnyx.getUsageReports({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: Page number
  * page[size] `integer`: Size of the page

#### Output
* output [MdrGetUsageReportsV2Resp](#mdrgetusagereportsv2resp)

### submitUsageReport
Submit request for new new messaging usage report. This endpoint will pull and aggregate messaging data in specified time period. 


```js
telnyx.submitUsageReport({
  "body": {
    "aggregation_type": "",
    "end_date": "",
    "start_date": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [MdrPostUsageReportV2Req](#mdrpostusagereportv2req)

#### Output
* output [MdrPostUsageReportsV2Resp](#mdrpostusagereportsv2resp)

### deleteUsageReport
Delete messaging usage report by id


```js
telnyx.deleteUsageReport({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output [MdrDeleteUsageReportsV2Resp](#mdrdeleteusagereportsv2resp)

### getUsageReport
Fetch a single messaging usage report by id


```js
telnyx.getUsageReport({
  "id": null
}, context)
```

#### Input
* input `object`

#### Output
* output [MdrGetUsageReportsByIdV2Resp](#mdrgetusagereportsbyidv2resp)

### getPaginatedMdrs
Fetch all Mdr records 


```js
telnyx.getPaginatedMdrs({}, context)
```

#### Input
* input `object`
  * start_date `string`: Pagination start date
  * end_date `string`: Pagination end date
  * last_fetched_date `string`: End date of last fetched page

#### Output
* output [MdrGetDetailV2Resp](#mdrgetdetailv2resp)

### listShortCodes
List short codes


```js
telnyx.listShortCodes({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[messaging_profile_id] `string`: Filter by Messaging Profile ID. Use the string `null` for phone numbers without assigned profiles. A synonym for the `/messaging_profiles/{id}/short_codes` endpoint when querying about an extant profile.

#### Output
* output `object`
  * data `array`
    * items [ShortCode](#shortcode)
  * meta [PaginationMeta](#paginationmeta)

### retrieveShortCode
Retrieve a short code


```js
telnyx.retrieveShortCode({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the short code

#### Output
* output `object`
  * data [ShortCode](#shortcode)

### updateShortCode
Update the settings for a specific short code. To unbind a short code from a profile, set the `messaging_profile_id` to `null` or an empty string.


```js
telnyx.updateShortCode({
  "id": "",
  "body": {
    "messaging_profile_id": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the short code
  * body **required** [UpdateShortCodeRequest](#updateshortcoderequest)

#### Output
* output `object`
  * data [ShortCode](#shortcode)

### SimCardGroupsGetAll
Get all SIM card groups belonging to the user that match the given filters.


```js
telnyx.SimCardGroupsGetAll({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[name] `string`: A valid SIM card group name.

#### Output
* output `object`
  * data `array`
    * items [SIMCardGroup](#simcardgroup)
  * meta [PaginationMeta](#paginationmeta)

### SimCardGroupsPost
Creates a new SIM card group object


```js
telnyx.SimCardGroupsPost({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SIMCardGroupCreate](#simcardgroupcreate)

#### Output
* output `object`
  * data [SIMCardGroup](#simcardgroup)

### SimCardGroupDelete
Permanently deletes a SIM card group


```js
telnyx.SimCardGroupDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [SIMCardGroup](#simcardgroup)

### SimCardGroupsGet
Returns the details regarding a specific SIM card group


```js
telnyx.SimCardGroupsGet({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [SIMCardGroup](#simcardgroup)

### SimCardGroupUpdate
Updates a SIM card group


```js
telnyx.SimCardGroupUpdate({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [SIMCardGroupPatch](#simcardgrouppatch)

#### Output
* output `object`
  * data [SIMCardGroup](#simcardgroup)

### SimCardsGet
Get all SIM cards belonging to the user that match the given filters.


```js
telnyx.SimCardsGet({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * include_sim_card_group `boolean`: It includes the associated SIM card group object in the response when present.
  * filter[sim_card_group_id] `string`: A valid SIM card group ID.
  * filter[tags] `array`: A list of SIM card tags to filter on.<br/><br/>
  * filter[iccid] `string`: A search string to partially match for the SIM card's ICCID.

#### Output
* output `object`
  * data `array`
    * items [SimpleSIMCard](#simplesimcard)
  * meta [PaginationMeta](#paginationmeta)

### SimCardDelete
The SIM card will be decommissioned, removed from your account and you will stop being charged.<br />The SIM card won't be able to connect to the network after the deletion is completed, thus making it impossible to consume data.<br/>
Transitioning to the disabled state may take a period of time.</br>
Until the transition is completed, the SIM card status will be disabling <code>disabling</code>.<br />In order to re-enable the SIM card, you will need to re-register it.


```js
telnyx.SimCardDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [SIMCard](#simcard)

### SimCardGet
Returns the details regarding a specific SIM card.


```js
telnyx.SimCardGet({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * include_sim_card_group `boolean`: It includes the associated SIM card group object in the response when present.

#### Output
* output `object`
  * data [SIMCard](#simcard)

### SimCardUpdate
Updates a SIM card's group and tags


```js
telnyx.SimCardUpdate({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [SIMCard](#simcard)

#### Output
* output `object`
  * data [SIMCard](#simcard)

### SimCardDisable
The SIM card won't be able to connect to the network after the disabling is completed, thus making it impossible to consume data.<br/>
Transitioning to the disabled state may take a period of time.</br>
Until the transition is completed, the SIM card status will be <code>disabling</code>.



```js
telnyx.SimCardDisable({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [SimpleSIMCard](#simplesimcard)

### SimCardEnable
The SIM card will be able to connect to the network once the enabling is complete, thus making it possible to consume data.<br/>
To enable a SIM card, it must be associated with a data-enabled SIM card group.<br/>
Transitioning to the enabled state may take a period of time. Until the transition is completed, the SIM card status will be <code>enabling</code>.



```js
telnyx.SimCardEnable({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [SimpleSIMCard](#simplesimcard)

### SIMCardNetworkPreferencesDelete
This API asynchronously removes the custom-defined network preferences settings. After this operation is done the Telnyx default settings, the same applied for an unaltered SIM card, will be in place.



```js
telnyx.SIMCardNetworkPreferencesDelete({
  "sim_card_id": ""
}, context)
```

#### Input
* input `object`
  * sim_card_id **required** `string`: Identifies a SIM card.

#### Output
* output `object`
  * data [SIMCardNetworkPreferenceWithOTAUpdates](#simcardnetworkpreferencewithotaupdates)

### SIMCardNetworkPreferencesGet
It returns the network preferences currently applied in the SIM card.



```js
telnyx.SIMCardNetworkPreferencesGet({
  "sim_card_id": ""
}, context)
```

#### Input
* input `object`
  * sim_card_id **required** `string`: Identifies a SIM card.
  * include_ota_updates `boolean`: It includes the associated OTA update objects in the response when present.

#### Output
* output `object`
  * data [SIMCardNetworkPreferenceWithOTAUpdates](#simcardnetworkpreferencewithotaupdates)

### SIMCardNetworkPreferencesPut
This API allows setting or updating a SIM card network preference. <br/><br/>
Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/>
There can be multiple scenarios where an operator can be preferred over another, for example, when a specific mobile operator can provide better network latency or better pricing.



```js
telnyx.SIMCardNetworkPreferencesPut({
  "sim_card_id": ""
}, context)
```

#### Input
* input `object`
  * sim_card_id **required** `string`: Identifies a SIM card.
  * body `object`
    * mobile_operator_networks_preferences `array`: A list of mobile operator networks and the priority that should be applied when the SIM is connecting to the network.
      * items [MobileOperatorNetworkPreferencesRequest](#mobileoperatornetworkpreferencesrequest)

#### Output
* output `object`
  * data [SIMCardNetworkPreferenceWithOTAUpdates](#simcardnetworkpreferencewithotaupdates)

### SIMCardPublicIPDelete
This API asynchronously removes an existing public IP from a SIM card.



```js
telnyx.SIMCardPublicIPDelete({
  "sim_card_id": ""
}, context)
```

#### Input
* input `object`
  * sim_card_id **required** `string`: Identifies a SIM card.

#### Output
* output `object`
  * data [SIMCardPublicIP](#simcardpublicip)

### SIMCardPublicIPGet
It returns the public IP requested for a SIM card.



```js
telnyx.SIMCardPublicIPGet({
  "sim_card_id": ""
}, context)
```

#### Input
* input `object`
  * sim_card_id **required** `string`: Identifies a SIM card.

#### Output
* output `object`
  * data [SIMCardPublicIP](#simcardpublicip)

### SIMCardPublicIPPost
This API will asynchronously map a random public IP to a SIM card, making it reachable on the public internet. <br/><br/>
 The request will return the resource as ""provisioning"" right away, and it'll eventually get ""provisioned"", meaning it completed the setup. <br/><br/>
 Setting up a public IP will generate charges, and we won't be able to provide the IP if the account doesn't have a balance. In that case, this operation will succeed, but its status will change to failed eventually, and the resource will be updated with the associated status. The IP resource will need to be deleted and re-created with our DELETE and POST APIs in this scenario.


```js
telnyx.SIMCardPublicIPPost({
  "sim_card_id": ""
}, context)
```

#### Input
* input `object`
  * sim_card_id **required** `string`: Identifies a SIM card.

#### Output
* output `object`
  * data [SIMCardPublicIP](#simcardpublicip)

### findTelephonyCredentials
List all On-demand Credentials.


```js
telnyx.findTelephonyCredentials({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[tag] `string`: Filter by tag
  * filter[name] `string`: Filter by name
  * filter[status] `string`: Filter by status
  * filter[resource_id] `string`: Filter by resource_id
  * filter[sip_username] `string`: Filter by sip_username

#### Output
* output `object`
  * data `array`
    * items [TelephonyCredential](#telephonycredential)
  * meta [PaginationMeta](#paginationmeta)

### CreateTelephonyCredential
Create a credential.


```js
telnyx.CreateTelephonyCredential({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [TelephonyCredentialCreate](#telephonycredentialcreate)

#### Output
* output `object`
  * data [TelephonyCredential](#telephonycredential)

### listTags
Returns a list of tags used on Credentials


```js
telnyx.listTags({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items `object`
      * amount `integer`
      * tag `string`
  * meta [PaginationMeta](#paginationmeta)

### DeleteTelephonyCredential
Delete an existing credential.


```js
telnyx.DeleteTelephonyCredential({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [TelephonyCredential](#telephonycredential)

### getTelephonyCredential
Get the details of an existing On-demand Credential.


```js
telnyx.getTelephonyCredential({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [TelephonyCredential](#telephonycredential)

### UpdateTelephonyCredential
Update an existing credential.


```js
telnyx.UpdateTelephonyCredential({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [TelephonyCredentialUpdate](#telephonycredentialupdate)

#### Output
* output `object`
  * data [TelephonyCredential](#telephonycredential)

### telephonyCredentialAction
Perform activate or deactivate action on provided Credential. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.


```js
telnyx.telephonyCredentialAction({
  "id": "",
  "action": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * action **required** `string` (values: activate, deactivate): Identifies the action to be taken.

#### Output
* output `object`
  * data [TelephonyCredential](#telephonycredential)

### CreateTelephonyCredentialToken
Create an Access Token (JWT) for the credential.


```js
telnyx.CreateTelephonyCredentialToken({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `string`

### findTexmlApplications
Returns a list of your TeXML Applications.


```js
telnyx.findTexmlApplications({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page
  * filter[friendly_name][contains] `string`: If present, applications with <code>friendly_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.
  * filter[outbound.outbound_voice_profile_id] `string`: Identifies the associated outbound voice profile.
  * sort `string` (values: created_at, connection_name, active): Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>

#### Output
* output `object`
  * data `array`
    * items [TexmlApplication](#texmlapplication)
  * meta [PaginationMeta](#paginationmeta)

### CreateTexmlApplication
Creates a TeXML Application.


```js
telnyx.CreateTexmlApplication({
  "body": {
    "friendly_name": "",
    "voice_url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CreateTexmlApplicationRequest](#createtexmlapplicationrequest)

#### Output
* output `object`
  * data [TexmlApplication](#texmlapplication)

### DeleteTexmlApplication
Deletes a TeXML Application.


```js
telnyx.DeleteTexmlApplication({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [TexmlApplication](#texmlapplication)

### getTexmlApplication
Retrieves the details of an existing TeXML Application.


```js
telnyx.getTexmlApplication({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [TexmlApplication](#texmlapplication)

### UpdateTexmlApplication
Updates settings of an existing TeXML Application.


```js
telnyx.UpdateTexmlApplication({
  "id": "",
  "body": {
    "friendly_name": "",
    "voice_url": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.
  * body **required** [UpdateTexmlApplicationRequest](#updatetexmlapplicationrequest)

#### Output
* output `object`
  * data [TexmlApplication](#texmlapplication)

### createVerification
Trigger a verification


```js
telnyx.createVerification({
  "body": {
    "phone_number": "",
    "verify_profile_id": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [VerificationRequest](#verificationrequest)

#### Output
* output [CreateVerificationResponse](#createverificationresponse)

### retrieveVerificationByPhoneNumber
Retrieve a verification by phone number


```js
telnyx.retrieveVerificationByPhoneNumber({
  "phone_number": ""
}, context)
```

#### Input
* input `object`
  * phone_number **required** `string`: The phone number associated with the verification to retrieve.

#### Output
* output [ListVerificationsResponse](#listverificationsresponse)

### verifyVerificationByPhoneNumber
Submit a verification code


```js
telnyx.verifyVerificationByPhoneNumber({
  "phone_number": "",
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * phone_number **required** `string`: The phone number associated with the verification being verified.
  * body **required** [VerificationCodeRequest](#verificationcoderequest)

#### Output
* output [VerificationVerify](#verificationverify)

### retrieveVerificationById
Retrieve a verification


```js
telnyx.retrieveVerificationById({
  "verification_id": ""
}, context)
```

#### Input
* input `object`
  * verification_id **required** `string`: The identifier of the verification to retrieve.

#### Output
* output [RetrieveVerificationResponse](#retrieveverificationresponse)

### listVerifyProfiles
Gets a paginated list of Verify profiles.


```js
telnyx.listVerifyProfiles({}, context)
```

#### Input
* input `object`
  * filter[name] `string`: Optional filter for profile names.
  * page[size] `integer`
  * page[number] `integer`

#### Output
* output [ListVerifyProfilesResponse](#listverifyprofilesresponse)

### createVerifyProfile
Creates a new Verify profile to associate verifications with.


```js
telnyx.createVerifyProfile({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [VerifyProfileRequest](#verifyprofilerequest)

#### Output
* output [CreateVerifyProfileResponse](#createverifyprofileresponse)

### deleteVerifyProfile
Delete a Verify profile


```js
telnyx.deleteVerifyProfile({
  "verify_profile_id": ""
}, context)
```

#### Input
* input `object`
  * verify_profile_id **required** `string`: The identifier of the Verify profile to delete.

#### Output
* output [DeleteVerifyProfileResponse](#deleteverifyprofileresponse)

### retrieveVerifyProfile
Gets a single Verify profile.


```js
telnyx.retrieveVerifyProfile({
  "verify_profile_id": ""
}, context)
```

#### Input
* input `object`
  * verify_profile_id **required** `string`: The identifier of the Verify profile to retrieve.

#### Output
* output [CreateVerifyProfileResponse](#createverifyprofileresponse)

### updateVerifyProfile
Update a Verify profile


```js
telnyx.updateVerifyProfile({
  "verify_profile_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * verify_profile_id **required** `string`: The identifier of the Verify profile to update.
  * body **required** [VerifyProfileRequest](#verifyprofilerequest)

#### Output
* output [UpdateVerifyProfileResponse](#updateverifyprofileresponse)

### getWebhookDeliveries
Lists webhook_deliveries for the authenticated user


```js
telnyx.getWebhookDeliveries({}, context)
```

#### Input
* input `object`
  * filter[status][eq] `string` (values: delivered, failed): Return only webhook_deliveries matching the given `status`
  * filter[webhook][contains] `string`: Return only webhook deliveries whose `webhook` component contains the given text
  * filter[attempts][contains] `string`: Return only webhook_deliveries whose `attempts` component contains the given text
  * filter[started_at][gte] `string`: Return only webhook_deliveries whose delivery started later than or at given ISO 8601 datetime
  * filter[started_at][lte] `string`: Return only webhook_deliveries whose delivery started earlier than or at given ISO 8601 datetime
  * filter[finished_at][gte] `string`: Return only webhook_deliveries whose delivery finished later than or at given ISO 8601 datetime
  * filter[finished_at][lte] `string`: Return only webhook_deliveries whose delivery finished earlier than or at given ISO 8601 datetime
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [webhook_delivery](#webhook_delivery)
  * meta [PaginationMetaSimple](#paginationmetasimple)

### getWebhookDelivery
Provides webhook_delivery debug data, such as timestamps, delivery status and attempts.


```js
telnyx.getWebhookDelivery({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Uniquely identifies the webhook_delivery.

#### Output
* output `object`
  * data [webhook_delivery](#webhook_delivery)

### getWdrReports
Returns the WDR Reports that match the given parameters.


```js
telnyx.getWdrReports({}, context)
```

#### Input
* input `object`
  * page[number] `integer`: The page number to load
  * page[size] `integer`: The size of the page

#### Output
* output `object`
  * data `array`
    * items [WdrReport](#wdrreport)

### createWdrReport
Asynchronously create a report containing Wireless Detail Records (WDRs) for the SIM cards that consumed wireless data in the given time period.



```js
telnyx.createWdrReport({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [WdrReportRequest](#wdrreportrequest)

#### Output
* output `object`
  * data [WdrReport](#wdrreport)

### deleteWdrReport
Deletes one specific WDR report


```js
telnyx.deleteWdrReport({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [WdrReport](#wdrreport)

### getWdrReport
Returns one specific WDR report


```js
telnyx.getWdrReport({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifies the resource.

#### Output
* output `object`
  * data [WdrReport](#wdrreport)



## Definitions

### Address
* Address `object`
  * address_book [address_book](#address_book)
  * administrative_area [administrative_area](#administrative_area)
  * borough [borough](#borough)
  * business_name [business_name](#business_name)
  * country_code [country_code](#country_code)
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * customer_reference [customer_reference](#customer_reference)
  * extended_address [extended_address](#extended_address)
  * first_name [first_name](#first_name)
  * id `string`: Uniquely identifies the address.
  * last_name [last_name](#last_name)
  * locality [locality](#locality)
  * neighborhood [neighborhood](#neighborhood)
  * phone_number [phone_number](#phone_number)
  * postal_code [postal_code](#postal_code)
  * record_type `string`: Identifies the type of the resource.
  * street_address [street_address](#street_address)
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### AddressCreate
* AddressCreate `object`
  * address_book [address_book](#address_book)
  * administrative_area [administrative_area](#administrative_area)
  * borough [borough](#borough)
  * business_name **required** [business_name](#business_name)
  * country_code **required** [country_code](#country_code)
  * customer_reference [customer_reference](#customer_reference)
  * extended_address [extended_address](#extended_address)
  * first_name **required** [first_name](#first_name)
  * last_name **required** [last_name](#last_name)
  * locality **required** [locality](#locality)
  * neighborhood [neighborhood](#neighborhood)
  * phone_number [phone_number](#phone_number)
  * postal_code [postal_code](#postal_code)
  * street_address **required** [street_address](#street_address)

### AnchorsiteOverride
* Anchorsite Override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.

### AnswerRequest
* Answer Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * webhook_url `string`: Use this field to override the URL for which Telnyx will send subsuqeunt webhooks to for this call.
  * webhook_url_method `string` (values: POST, GET): HTTP request type used for `webhook_url`.

### ApplicationName
* Application Name `string`: A user-assigned name to help manage the application.

### AvailablePhoneNumber
* AvailablePhoneNumber `object`
  * best_effort `boolean`: Specifies whether the phone number is an exact match based on the search criteria or not.
  * cost_information [CostInformation](#costinformation)
  * phone_number `string`
  * quickship `boolean`: Specifies whether the phone number can receive calls immediately after purchase or not.
  * record_type `string` (values: available_phone_number)
  * region_information `array`
    * items [RegionInformation](#regioninformation)
  * regulatory_requirements `array`
    * items [RegulatoryRequirement](#regulatoryrequirement)
  * reservable `boolean`: Specifies whether the phone number can be reserved before purchase or not.
  * vanity_format `string`

### AvailablePhoneNumbersMetadata
* AvailablePhoneNumbersMetadata `object`
  * best_effort_results `integer`
  * total_results `integer`

### BillingGroup
* BillingGroup `object`
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * deleted_at `string`: ISO 8601 formatted date indicating when the resource was removed.
  * id `string`: Identifies the type of resource.
  * name `string`: A user-specified name for the billing group
  * organization_id `string`: Identifies the organization that owns the resource.
  * record_type `string` (values: billing_group): Identifies the type of the resource.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### BridgeRequest
* Bridge Request `object`
  * call_control_id **required** `string`: The Call Control ID of the call you want to bridge with.
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * park_after_unbridge `string`: Specifies behavior after the bridge ends (i.e. the opposite leg either hangs up or is transferred). If supplied with the value `self`, the current leg will be parked after unbridge. If not set, the default behavior is to hang up the leg.

### BulkCredentialRequest
* Bulk Credential Request `object`
  * amount `integer`: Amount of credentials to be created. A single tag can hold at maximum 1000 credentials
  * connection_id **required** `string`: Identifies the connection this credential is associated with.
  * name `string`: A default name for all credentials.
  * tag **required** `string`: Tags a credential for bulk operations. A single tag can hold at maximum 1000 credentials.

### Call
* Call `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call.
  * call_leg_id **required** `string`: ID that is unique to the call and can be used to correlate webhook events
  * call_session_id **required** `string`: ID that is unique to the call session and can be used to correlate webhook events
  * is_alive **required** `boolean`: Indicates whether the call is alive or not. For Dial command it will always be `false` (dialing is asynchronous).
  * record_type **required** `string` (values: call)

### CallAnswered
* Call Answered `object`
  * event_type `string` (values: call.answered): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * from `string`: Number or SIP URI placing the call.
    * state `string` (values: answered): State received from a command.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallAnsweredEvent
* Call Answered Event `object`
  * data [CallAnswered](#callanswered)

### CallBridged
* Call Bridged `object`
  * event_type `string` (values: call.bridged): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * from `string`: Number or SIP URI placing the call.
    * state `string` (values: bridged): State received from a command.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallBridgedEvent
* Call Bridged Event `object`
  * data [CallBridged](#callbridged)

### CallControlApplication
* Call Control Application `object`
  * active `boolean`: Specifies whether the connection can be used.
  * anchorsite_override `string` (values: "Latency", "Chicago, IL", "Ashburn, VA", "San Jose, CA"): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * application_name `string`: A user-assigned name to help manage the application.
  * created_at `string`: ISO 8601 formatted date of when the resource was created
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * first_command_timeout `boolean`: Specifies whether calls to phone numbers associated with this connection should hangup after timing out.
  * first_command_timeout_secs `integer`: Specifies how many seconds to wait before timing out a dial command.
  * id `string`
  * inbound [CallControlApplicationInbound](#callcontrolapplicationinbound)
  * outbound [CallControlApplicationOutbound](#callcontrolapplicationoutbound)
  * record_type `string` (values: call_control_application)
  * updated_at `string`: ISO 8601 formatted date of when the resource was last updated
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as `https`.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as `https`.
  * webhook_timeout_secs `integer`

### CallControlApplicationInbound
* Call Control Application Inbound `object`
  * channel_limit `integer`: When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
  * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
  * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).

### CallControlApplicationOutbound
* Call Control Application Outbound `object`
  * channel_limit `integer`: When set, this will limit the total number of outbound calls to phone numbers associated with this connection.
  * outbound_voice_profile_id `string`: Identifies the associated outbound voice profile.

### CallControlCommandResult
* Call Control Command Result `object`
  * result `string`

### CallDtmfReceived
* Call DTMF Received `object`
  * event_type `string` (values: call.dtmf.received): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Identifies the type of resource.
    * digit `string`: The received DTMF digit or symbol.
    * from `string`: Number or SIP URI placing the call.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallDtmfReceivedEvent
* Call DTMF Received Event `object`
  * data [CallDtmfReceived](#calldtmfreceived)

### CallEvent
* Call Event `object`
  * call_leg_id **required** `string`: Uniquely identifies an individual call leg.
  * call_session_id **required** `string`: Uniquely identifies the call control session. A session may include multiple call leg events.
  * event_timestamp **required** `string`: Event timestamp
  * metadata **required** `object`: Event metadata, which includes raw event, and extra information based on event type
  * name **required** `string`: Event name
  * record_type **required** `string` (values: call_event)
  * type **required** `string` (values: command, webhook): Event type

### CallForkStarted
* Call Fork Started `object`
  * event_type `string` (values: call.fork.started): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * connection_id `string`: Telnyx connection ID used in the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallForkStartedEvent
* Call Fork Started Event `object`
  * data [CallForkStarted](#callforkstarted)

### CallForkStopped
* Call Fork Stopped `object`
  * event_type `string` (values: call.fork.stopped): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * connection_id `string`: Telnyx connection ID used in the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallForkStoppedEvent
* Call Fork Stopped Event `object`
  * data [CallForkStopped](#callforkstopped)

### CallForwarding
* CallForwarding `object`: The call forwarding settings for a phone number.
  * call_forwarding_enabled `boolean`: Indicates if call forwarding will be enabled for this number if forwards_to and forwarding_type are filled in. Defaults to true for backwards compatibility with APIV1 use of numbers endpoints.
  * forwarding_type `string` (values: always, on_failure): Call forwarding type. 'forwards_to' must be set for this to have an effect.
  * forwards_to `string`: The phone number to which inbound calls to this number are forwarded. Inbound calls will not be forwarded if this field is left blank. If set, must be a +E.164-formatted phone number.

### CallGatherEnded
* Call Gather Ended `object`
  * event_type `string` (values: call.gather.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * digits `string`: The received DTMF digit or symbol.
    * from `string`: Number or SIP URI placing the call.
    * status `string` (values: valid, invalid, call_hangup, cancelled, cancelled_amd): Reflects how command ended.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallGatherEndedEvent
* Call Gather Ended Event `object`
  * data [CallGatherEnded](#callgatherended)

### CallHangup
* Call Hangup `object`
  * event_type `string` (values: call.hangup): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * from `string`: Number or SIP URI placing the call.
    * hangup_cause `string` (values: call_rejected, normal_clearing, originator_cancel, timeout, time_limit, user_busy, not_found, unspecified): The reason the call was ended (`call_rejected`, `normal_clearing`, `originator_cancel`, `timeout`, `time_limit`, `user_busy`, `not_found` or `unspecified`).
    * hangup_source `string` (values: caller, callee, unknown): The party who ended the call (`callee`, `caller`, `unknown`).
    * sip_hangup_cause `string`: The reason the call was ended (SIP response code). If the SIP response is unavailable (in inbound calls for example) this is set to `unspecified`.
    * state `string` (values: hangup): State received from a command.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallHangupEvent
* Call Hangup Event `object`
  * data [CallHangup](#callhangup)

### CallInitiated
* Call Initiated `object`
  * event_type `string` (values: call.initiated): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * direction `string` (values: incoming, outgoing): Whether the call is `incoming` or `outgoing`.
    * from `string`: Number or SIP URI placing the call.
    * state `string` (values: parked, bridging): State received from a command.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallInitiatedEvent
* Call Initiated Event `object`
  * data [CallInitiated](#callinitiated)

### CallMachineDetectionEnded
* Call Machine Detection Ended `object`
  * event_type `string` (values: call.machine.detection.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * from `string`: Number or SIP URI placing the call.
    * result `string` (values: human, machine, not_sure): Answering machine detection result.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallMachineDetectionEndedEvent
* Call Machine Detection Ended Event `object`
  * data [CallMachineDetectionEnded](#callmachinedetectionended)

### CallMachineGreetingEnded
* Call Machine Greeting Ended `object`
  * event_type `string` (values: call.machine.greeting.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * from `string`: Number or SIP URI placing the call.
    * result `string` (values: ended, not_sure): Answering machine greeting ended result.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallMachineGreetingEndedEvent
* Call Machine Greeting Ended Event `object`
  * data [CallMachineGreetingEnded](#callmachinegreetingended)

### CallPlaybackEnded
* Call Playback Ended `object`
  * event_type `string` (values: call.playback.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * media_url `string`: The audio URL being played back.
    * overlay `boolean`: Whether the audio is going to be played in overlay mode or not.
    * status `string` (values: valid, invalid, call_hangup): Reflects how command ended.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallPlaybackEndedEvent
* Call Playback Ended Event `object`
  * data [CallPlaybackEnded](#callplaybackended)

### CallPlaybackStarted
* Call Playback Started `object`
  * event_type `string` (values: call.playback.started): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * media_url `string`: The audio URL being played back.
    * overlay `boolean`: Whether the audio is going to be played in overlay mode or not.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallPlaybackStartedEvent
* Call Playback Started Event `object`
  * data [CallPlaybackStarted](#callplaybackstarted)

### CallRecording
* CallRecording `object`: The call recording settings for a phone number.
  * inbound_call_recording_channels `string` (values: single, dual): When using 'dual' channels, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.
  * inbound_call_recording_enabled `boolean`: When enabled, any inbound call to this number will be recorded.
  * inbound_call_recording_format `string` (values: wav, mp3): The audio file format for calls being recorded.

### CallRecordingSaved
* Call Recording Saved `object`
  * event_type `string` (values: call.recording.saved): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * channels `string` (values: single, dual): Whether recording was recorded in `single` or `dual` channel.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * public_recording_urls `object`: Recording URLs in requested format. The URL is valid for as long as the file exists. For security purposes, this feature is activated on a per request basis.  Please contact customer support with your Account ID to request activation.
      * mp3 `string`: Recording URL in requested `mp3` format.
      * wav `string`: Recording URL in requested `wav` format.
    * recording_ended_at `string`: ISO 8601 datetime of when recording ended.
    * recording_started_at `string`: ISO 8601 datetime of when recording started.
    * recording_urls `object`: Recording URLs in requested format valid for 10 minutes. After 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings documentation, or via Mission Control under Reporting -> Recordings.
      * mp3 `string`: Recording URL in requested `mp3` format.
      * wav `string`: Recording URL in requested `wav` format.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallRecordingSavedEvent
* Call Recording Saved Event `object`
  * data [CallRecordingSaved](#callrecordingsaved)

### CallReferCompleted
* CallReferCompleted `object`
  * event_type `string` (values: call.refer.completed): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Unique ID for controlling the call.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * from `string`: Number or SIP URI placing the call.
    * sip_notify_response `integer`: SIP NOTIFY event status for tracking the REFER attempt.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallReferCompletedEvent
* Call Recording Saved Event `object`
  * data [CallReferCompleted](#callrefercompleted)

### CallReferFailed
* CallReferFailed `object`
  * event_type `string` (values: call.refer.failed): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Unique ID for controlling the call.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * from `string`: Number or SIP URI placing the call.
    * sip_notify_response `integer`: SIP NOTIFY event status for tracking the REFER attempt.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallReferFailedEvent
* Call Recording Saved Event `object`
  * data [CallReferFailed](#callreferfailed)

### CallReferStarted
* Call Refer Started `object`
  * event_type `string` (values: call.refer.started): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Unique ID for controlling the call.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * from `string`: Number or SIP URI placing the call.
    * sip_notify_response `integer`: SIP NOTIFY event status for tracking the REFER attempt.
    * to `string`: Destination number or SIP URI of the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallReferStartedEvent
* Call Refer Started Event `object`
  * data [CallReferStarted](#callreferstarted)

### CallRequest
* Dial Request `object`
  * answering_machine_detection `string` (values: detect, detect_beep, detect_words, greeting_end, disabled): Enables Answering Machine Detection. When a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If 'greeting_end' or 'detect_words' is used and a 'machine' is detected, you will receive another 'call.machine.greeting.ended' webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive 'call.machine.greeting.ended' if a beep is detected.
  * answering_machine_detection_config `object`: Optional configuration parameters to modify 'answering_machine_detection' performance.
    * after_greeting_silence_millis `integer`: Silence duration threshold after a greeting message or voice for it be considered human.
    * between_words_silence_millis `integer`: Maximum threshold for silence between words.
    * greeting_duration_millis `integer`: Maximum threshold of a human greeting. If greeting longer than this value, considered machine.
    * greeting_silence_duration_millis `integer`: If machine already detected, maximum threshold for silence between words. If exceeded, the greeting is considered ended.
    * greeting_total_analysis_time_millis `integer`: If machine already detected, maximum timeout threshold to determine the end of the machine greeting.
    * initial_silence_millis `integer`: If initial silence duration is greater than this value, consider it a machine.
    * maximum_number_of_words `integer`: If number of detected words is greater than this value, consder it a machine.
    * maximum_word_length_millis `integer`: If a single word lasts longer than this threshold, consider it a machine.
    * silence_threshold `integer`: Minimum noise threshold for any analysis.
    * total_analysis_time_millis `integer`: Maximum timeout threshold for overall detection.
  * audio_url `string`: The URL of a file to be played back to the callee when the call is answered. The URL can point to either a WAV or MP3 file.
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * connection_id **required** `string`: The ID of the connection to be used when dialing the destination.
  * custom_headers `array`: Custom headers to be added to the SIP INVITE.
    * items [CustomSipHeader](#customsipheader)
  * from **required** `string`: The `from` number to be used as the caller id presented to the destination (`to` number). The number should be in +E164 format. This attribute will default to the `from` number of the original call if omitted.
  * link_to `string`: Use another call's control id for sharing the same call session id
  * sip_auth_password `string`: SIP Authentication password used for SIP challenges.
  * sip_auth_username `string`: SIP Authentication username used for SIP challenges.
  * time_limit_secs `integer`: Sets the maximum duration of a Call Control Leg in seconds. If the time limit is reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `time_limit` will be sent. For example, by setting a time limit of 120 seconds, a Call Leg will be automatically terminated two minutes after being answered. The default time limit is 14400 seconds or 4 hours and this is also the maximum allowed call length.
  * timeout_secs `integer`: The number of seconds that Telnyx will wait for the call to be answered by the destination to which it is being called. If the timeout is reached before an answer is received, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum value is 120 seconds.
  * to **required** `string`: The DID or SIP URI to dial out to.
  * webhook_url `string`: Use this field to override the URL for which Telnyx will send subsuqeunt webhooks to for this call.
  * webhook_url_method `string` (values: POST, GET): HTTP request type used for `webhook_url`.

### CallSpeakEnded
* Call Speak Ended `object`
  * event_type `string` (values: call.speak.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
    * status `string` (values: completed, call_hangup): Reflects how `speak` ended.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallSpeakEndedEvent
* Call Speak Ended Event `object`
  * data [CallSpeakEnded](#callspeakended)

### CallSpeakStarted
* Call Speak Started `object`
  * event_type `string` (values: call.speak.started): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * connection_id `string`: Telnyx connection ID used in the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### CallSpeakStartedEvent
* Call Speak Started Event `object`
  * data [CallSpeakStarted](#callspeakstarted)

### CallerName
* CallerName `object`
  * caller_name `string`: The name of the requested phone number's owner as per the CNAM database
  * error_code `string`: A caller-name lookup specific error code, expressed as a stringified 5-digit integer

### Carrier
* Carrier `object`
  * error_code `string`: Unused
  * mobile_country_code `string`: Region code that matches the specific country calling code if the requested phone number type is mobile
  * mobile_network_code `string`: National destination code (NDC), with a 0 prefix, if an NDC is found and the requested phone number type is mobile
  * name `string`: SPID (Service Provider ID) name, if the requested phone number has been ported; otherwise, the name of carrier who owns the phone number block
  * type `string` (values: fixed line, mobile, voip, fixed line or mobile, toll free, premium rate, shared cost, personal number, pager, uan, voicemail, unknown): A phone number type that identifies the type of service associated with the requested phone number

### CnamListing
* CnamListing `object`: The CNAM listing settings for a phone number.
  * cnam_listing_details `string`: The CNAM listing details for this number. Must be alphanumeric characters or spaces with a maximum length of 15. Requires cnam_listing_enabled to also be set to true.
  * cnam_listing_enabled `boolean`: Enables CNAM listings for this number. Requires cnam_listing_details to also be set.

### CompleteOTAUpdate
* OTAUpdate `object`: This object represents an Over the Air (OTA) update request. It allows tracking the current status of a operation that apply settings in a particular SIM card. <br/><br/>
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * id `string`: Identifies the resource.
  * record_type `string`
  * settings `object`: A JSON object representation of the operation. The information present here will relate directly to the source of the OTA request.
    * mobile_operator_networks_preferences [MobileOperatorNetworksPreferencesResponse](#mobileoperatornetworkspreferencesresponse)
  * sim_card_id `string`: The indentification UUID of the related SIM card resource.
  * status `string` (values: in-progress, completed, failed)
  * type `string` (values: sim_card_network_preferences): Represents the type of the operation requested. This will relate directly to the source of the request.
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### Conference
* Conference `object`
  * connection_id `string`: Identifies the connection associated with the conference
  * created_at **required** `string`: ISO 8601 formatted date of when the conference was created
  * end_reason `string` (values: all_left, ended_via_api, host_left, time_exceeded): Reason why the conference ended
  * ended_by `object`: IDs related to who ended the conference. It is expected for them to all be there or all be null
    * call_control_id `string`: Call Control ID which ended the conference
    * call_session_id `string`: Call Session ID which ended the conference
  * expires_at **required** `string`: ISO 8601 formatted date of when the conference will expire
  * id **required** `string`: Uniquely identifies the conference
  * name **required** `string`: Name of the conference
  * record_type **required** `string` (values: conference)
  * region `string`: Region where the conference is hosted
  * status `string` (values: init, in_progress, completed): Status of the conference
  * updated_at `string`: ISO 8601 formatted date of when the conference was last updated

### ConferenceCallRequest
* Conference Dial Request `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
  * from **required** `string`: The `from` number to be used as the caller id presented to the destination (`to` number).
  * hold `boolean`: Whether the participant should be put on hold immediately after joining the conference.
  * hold_audio_url `string`: The URL of an audio file to be played to the participant when they are put on hold after joining the conference. This property takes effect only if "hold" is set to "true".
  * mute `boolean`: Whether the participant should be muted immediately after joining the conference.
  * start_conference_on_enter `boolean`: Whether the conference should be started after the participant joins the conference.
  * supervisor_role `string` (values: barge, monitor, none, whisper): Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
  * to **required** `string`: The DID or SIP URI to dial out and bridge to the given call.
  * whisper_call_control_ids `array`: Array of unique call_control_ids the joining supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.
    * items `string`

### ConferenceCommandResult
* Conference Command Result `object`
  * result **required** `string`

### ConferenceCreated
* Conference Created `object`
  * event_type `string` (values: conference.created): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * conference_id `string`: Conference ID that the participant joined.
    * connection_id `string`: Telnyx connection ID used in the call.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceCreatedEvent
* Conference Created Event `object`
  * data [ConferenceCreated](#conferencecreated)

### ConferenceEnded
* Conference Ended `object`
  * event_type `string` (values: conference.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * conference_id `string`: Conference ID that the participant joined.
    * connection_id `string`: Telnyx connection ID used in the call.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
    * reason `string` (values: all_left, host_left, time_exceeded): Reason the conference ended.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceEndedEvent
* Conference Ended Event `object`
  * data [ConferenceEnded](#conferenceended)

### ConferenceHoldRequest
* Conference Hold Request `object`
  * audio_url `string`: The URL of a file to be played back at the beginning of each prompt. The URL can point to either a WAV or MP3 file.
  * call_control_ids `array`: List of unique identifiers and tokens for controlling the call. When empty all participants will be placed on hold.
    * items `string`

### ConferenceMuteRequest
* Conference Mute Request `object`
  * call_control_ids `array`: Array of unique identifiers and tokens for controlling the call. When empty all participants will be muted.
    * items `string`

### ConferenceParticipantJoined
* Conference Participant Joined `object`
  * event_type `string` (values: conference.participant.joined): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * conference_id `string`: Conference ID that the participant joined.
    * connection_id `string`: Telnyx connection ID used in the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceParticipantJoinedEvent
* Conference Participant Joined Event `object`
  * data [ConferenceParticipantJoined](#conferenceparticipantjoined)

### ConferenceParticipantLeft
* Conference Participant Left `object`
  * event_type `string` (values: conference.participant.left): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * payload `object`
    * call_control_id `string`: Call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * conference_id `string`: Conference ID that the participant joined.
    * connection_id `string`: Telnyx connection ID used in the call.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceParticipantLeftEvent
* Conference Participant Left Event `object`
  * data [ConferenceParticipantLeft](#conferenceparticipantleft)

### ConferenceParticipantPlaybackEnded
* Conference Participant Playback Ended `object`
  * event_type `string` (values: conference.participant.playback.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * call_control_id `string`: Participant's call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * conference_id `string`: ID of the conference the text was spoken in.
    * connection_id `string`: Telnyx connection ID used in the call.
    * creator_call_session_id `string`: ID that is unique to the call session that started the conference.
    * media_url `string`: The URL to the audio file being played.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceParticipantPlaybackEndedEvent
* Conference Participant Playback Ended Event `object`
  * data [ConferenceParticipantPlaybackEnded](#conferenceparticipantplaybackended)

### ConferenceParticipantPlaybackStarted
* Conference Participant Playback Started `object`
  * event_type `string` (values: conference.participant.playback.started): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * call_control_id `string`: Participant's call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * conference_id `string`: ID of the conference the text was spoken in.
    * connection_id `string`: Telnyx connection ID used in the call.
    * creator_call_session_id `string`: ID that is unique to the call session that started the conference.
    * media_url `string`: The URL to the audio file being played.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceParticipantPlaybackStartedEvent
* Conference Participant Playback Started Event `object`
  * data [ConferenceParticipantPlaybackStarted](#conferenceparticipantplaybackstarted)

### ConferenceParticipantSpeakEnded
* Conference Participant Speak Ended `object`
  * event_type `string` (values: conference.participant.speak.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * call_control_id `string`: Participant's call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * conference_id `string`: ID of the conference the text was spoken in.
    * connection_id `string`: Telnyx connection ID used in the call.
    * creator_call_session_id `string`: ID that is unique to the call session that started the conference.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceParticipantSpeakEndedEvent
* Conference Participant Speak Ended Event `object`
  * data [ConferenceParticipantSpeakEnded](#conferenceparticipantspeakended)

### ConferenceParticipantSpeakStarted
* Conference Participant Speak Started `object`
  * event_type `string` (values: conference.participant.speak.started): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * call_control_id `string`: Participant's call ID used to issue commands via Call Control API.
    * call_leg_id `string`: ID that is unique to the call and can be used to correlate webhook events.
    * call_session_id `string`: ID that is unique to the call session and can be used to correlate webhook events.
    * client_state `string`: State received from a command.
    * conference_id `string`: ID of the conference the text was spoken in.
    * connection_id `string`: Telnyx connection ID used in the call.
    * creator_call_session_id `string`: ID that is unique to the call session that started the conference.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceParticipantSpeakStartedEvent
* Conference Participant Speak Started Event `object`
  * data [ConferenceParticipantSpeakStarted](#conferenceparticipantspeakstarted)

### ConferencePlayRequest
* Conference Play Request `object`
  * audio_url **required** `string`: The URL of the file to be played back in the conference. The URL can point to either a WAV or MP3 file.
  * call_control_ids `array`: List of call control ids identifying participants the audio file should be played to. If not given, the audio file will be played to the entire conference.
    * items `string`
  * loop [Loopcount](#loopcount)

### ConferencePlaybackEnded
* Conference Playback Ended `object`
  * event_type `string` (values: conference.playback.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * conference_id `string`: ID of the conference the text was spoken in.
    * connection_id `string`: Telnyx connection ID used in the call.
    * creator_call_session_id `string`: ID that is unique to the call session that started the conference.
    * media_url `string`: The URL to the audio file being played.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferencePlaybackEndedEvent
* Conference Playback Ended Event `object`
  * data [ConferencePlaybackEnded](#conferenceplaybackended)

### ConferencePlaybackStarted
* Conference Playback Started `object`
  * event_type `string` (values: conference.playback.started): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * conference_id `string`: ID of the conference the text was spoken in.
    * connection_id `string`: Telnyx connection ID used in the call.
    * creator_call_session_id `string`: ID that is unique to the call session that started the conference.
    * media_url `string`: The URL to the audio file being played.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferencePlaybackStartedEvent
* Conference Playback Started Event `object`
  * data [ConferencePlaybackStarted](#conferenceplaybackstarted)

### ConferenceSpeakEnded
* Conference Speak Ended `object`
  * event_type `string` (values: conference.speak.ended): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * conference_id `string`: ID of the conference the text was spoken in.
    * connection_id `string`: Telnyx connection ID used in the call.
    * creator_call_session_id `string`: ID that is unique to the call session that started the conference.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceSpeakEndedEvent
* Conference Speak Ended Event `object`
  * data [ConferenceSpeakEnded](#conferencespeakended)

### ConferenceSpeakRequest
* Conference Speak Request `object`
  * call_control_ids `array`: Call Control IDs of participants who will hear the spoken text. When empty all participants will hear the spoken text.
    * items `string`
  * command_id `string`: Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
  * language **required** `string` (values: arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-MX, es-US, fr-CA, fr-FR, hi-IN, is-IS, it-IT, ja-JP, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR): The language used to speak the text.
  * payload **required** `string`: The text or SSML to be converted into speech. There is a 5,000 character limit.
  * payload_type `string` (values: text, ssml): The type of the provided payload. The payload can either be plain text, or Speech Synthesis Markup Language (SSML).
  * voice **required** `string` (values: male, female): The gender of the voice used to speak the text.

### ConferenceSpeakStarted
* Conference Speak Started `object`
  * event_type `string` (values: conference.speak.started): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * conference_id `string`: ID of the conference the text was spoken in.
    * connection_id `string`: Telnyx connection ID used in the call.
    * creator_call_session_id `string`: ID that is unique to the call session that started the conference.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
  * record_type `string` (values: event): Identifies the type of the resource.

### ConferenceSpeakStartedEvent
* Conference Speak Started Event `object`
  * data [ConferenceSpeakStarted](#conferencespeakstarted)

### ConferenceUnholdRequest
* Conference Unhold Request `object`
  * call_control_ids **required** `array`: List of unique identifiers and tokens for controlling the call. Enter each call control ID to be unheld.
    * items `string`

### ConferenceUnmuteRequest
* Conference Unmute Request `object`
  * call_control_ids `array`: List of unique identifiers and tokens for controlling the call. Enter each call control ID to be unmuted. When empty all participants will be unmuted.
    * items `string`

### Connection
* Connection `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * id `string`: Identifies the specific resource.
  * outbound_voice_profile_id [OutboundVoiceProfileId](#outboundvoiceprofileid)
  * record_type `string`: Identifies the type of the resource.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent.

### ConnectionActive
* Connection Active `boolean`: Specifies whether the connection can be used.

### ConnectionName
* Connection Name `string`: A user-assigned name to help manage the connection.

### ConnectionRtcpSettings
* Connection RTCP Settings `object`
  * capture_enabled `boolean`: BETA - Enable the capture and storage of RTCP messages to create QoS reports on the Telnyx Mission Control Portal.
  * port `string` (values: rtcp-mux, rtp+1): RTCP port by default is rtp+1, it can also be set to rtcp-mux
  * report_frequency_secs `integer`: RTCP reports are sent to customers based on the frequency set. Frequency is in seconds and it can be set to values from 5 to 3000 seconds.

### ConsumedData
* ConsumedData `object`: Represents the amount of data consumed.
  * amount `integer`
  * unit `string`

### CostInformation
* CostInformation `object`
  * currency `string`: The ISO 4217 code for the currency.
  * monthly_cost `string`
  * upfront_cost `string`

### CreateCallControlApplicationRequest
* Create Call Control Application Request `object`
  * active `boolean`: Specifies whether the connection can be used.
  * anchorsite_override `string` (values: "Latency", "Chicago, IL", "Ashburn, VA", "San Jose, CA"): <code>Latency</code> directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * application_name **required** `string`: A user-assigned name to help manage the application.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * first_command_timeout `boolean`: Specifies whether calls to phone numbers associated with this connection should hangup after timing out.
  * first_command_timeout_secs `integer`: Specifies how many seconds to wait before timing out a dial command.
  * inbound [CallControlApplicationInbound](#callcontrolapplicationinbound)
  * outbound [CallControlApplicationOutbound](#callcontrolapplicationoutbound)
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url **required** `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### CreateConferenceRequest
* Create Conference Request `object`
  * beep_enabled `string` (values: always, never, on_enter, on_exit): Whether a beep sound should be played when participants join and/or leave the conference.
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * comfort_noise `boolean`: Toggle background comfort noise.
  * command_id `string`: Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
  * duration_minutes `integer`: Time length (minutes) after which the conference will end.
  * hold_audio_url `string`: The URL to an audio file to be played to participants joining the conference. Takes effect only when "start_conference_on_create" is set to "false".
  * name **required** `string`: Name of the conference
  * start_conference_on_create `boolean`: Whether the conference should be started on creation. If the conference isn't started all participants that join are automatically put on hold. Defaults to "true".

### CreateCredentialConnectionRequest
* Create Credential Connection Request `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * default_on_hold_comfort_noise_enabled `boolean`: When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * encode_contact_header_enabled `boolean`: Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
  * encrypted_media `string` (values: SRTP, ZRTP): Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
  * inbound [CredentialInbound](#credentialinbound)
  * onnet_t38_passthrough_enabled `boolean`: Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.
  * outbound [CredentialOutbound](#credentialoutbound)
  * password `string`: The password to be used as part of the credentials. Must be 8 to 128 characters long.
  * rtcp_settings `object`
    * capture_enabled `boolean`: BETA - Enable the capture and storage of RTCP messages to create QoS reports on the Telnyx Mission Control Portal.
    * port `string` (values: rtcp-mux, rtp+1): RTCP port by default is rtp+1, it can also be set to rtcp-mux
    * report_frequency_seconds `integer`: RTCP reports are sent to customers based on the frequency set. Frequency is in seconds and it can be set to values from 5 to 3000 seconds.
  * sip_uri_calling_preference `string` (values: disabled, unrestricted, internal): This feature enables inbound SIP URI calls to your Credential Auth Connection. If enabled for all (unrestricted) then anyone who calls the SIP URI <your-username>@telnyx.com will be connected to your Connection. You can also choose to allow only calls that are originated on any Connections under your account (internal).
  * user_name `string`: The user name to be used as part of the credentials. Must be 4-32 characters long and alphanumeric values only (no spaces or special characters).
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### CreateFaxApplicationRequest
* Create Fax Application Request `object`
  * active [ConnectionActive](#connectionactive)
  * anchorsite_override [AnchorsiteOverride](#anchorsiteoverride)
  * application_name **required** [ApplicationName](#applicationname)
  * inbound `object`
    * channel_limit `integer`: When set, this will limit the number of concurrent inbound calls to phone numbers associated with this connection.
    * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
    * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * outbound `object`
    * channel_limit `integer`: When set, this will limit the number of concurrent outbound calls to phone numbers associated with this connection.
    * outbound_voice_profile_id [OutboundVoiceProfileId](#outboundvoiceprofileid)
  * webhook_event_failover_url [WebhookEventFailoverUrl](#webhookeventfailoverurl)
  * webhook_event_url **required** [WebhookEventUrl](#webhookeventurl)
  * webhook_timeout_secs [WebhookTimeoutSecs](#webhooktimeoutsecs)

### CreateFqdnConnectionRequest
* Create Fqdn Connection Request `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * default_on_hold_comfort_noise_enabled `boolean`: When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * encode_contact_header_enabled `boolean`: Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
  * encrypted_media `string` (values: SRTP, ZRTP): Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
  * inbound [CreateInboundFqdnRequest](#createinboundfqdnrequest)
  * onnet_t38_passthrough_enabled `boolean`: Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.
  * rtcp_settings [ConnectionRtcpSettings](#connectionrtcpsettings)
  * transport_protocol `string` (values: UDP, TCP, TLS): One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### CreateFqdnRequest
* Create Fqdn Request `object`
  * connection_id `string`: ID of the FQDN connection to which this IP should be attached.
  * dns_record_type `string`: The DNS record type for the FQDN. For cases where a port is not set, the DNS record type must be 'srv'. For cases where a port is set, the DNS record type must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060 will be used.
  * fqdn **required** `string`: FQDN represented by this resource.
  * port `integer`: Port to use when connecting to this FQDN.

### CreateInboundFqdnRequest
* Create Inbound Fqdn Request `object`
  * ani_number_format `string` (values: +E.164, E.164, +E.164-national, E.164-national): This setting allows you to set the format with which the caller's number (ANI) is sent for inbound phone calls.
  * channel_limit `integer`: When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
  * codecs `array`: Defines the list of codecs that Telnyx will send for inbound calls to a specific number on your portal account, in priority order. This only works when the Connection the number is assigned to uses Media Handling mode: default. OPUS and H.264 codecs are available only when using TCP or TLS transport for SIP.
    * items `string`
  * default_routing_method `string` (values: sequential, round-robin): Default routing method to be used when a number is associated with the connection. Must be one of the routing method types or left blank, other values are not allowed.
  * dnis_number_format `string` (values: +e164, e164, national)
  * generate_ringback_tone `boolean`: Generate ringback tone through 183 session progress message with early media.
  * isup_headers_enabled `boolean`: When set, inbound phone calls will receive ISUP parameters via SIP headers. (Only when available and only when using TCP or TLS transport.)
  * prack_enabled `boolean`: Enable PRACK messages as defined in RFC3262.
  * privacy_zone_enabled `boolean`: By default, Telnyx does not send caller-id information when the caller has chosen to hide this information. When this option is enabled, Telnyx will send the SIP header Privacy:id plus the caller-id information so that the receiver side can choose when to hide it.
  * sip_compact_headers_enabled `boolean`: Defaults to true.
  * sip_region `string` (values: US, Europe, Australia): Selects which `sip_region` to receive inbound calls from. If null, the default region (US) will be used.
  * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
  * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * timeout_1xx_secs `integer`: Time(sec) before aborting if connection is not made.
  * timeout_2xx_secs `integer`: Time(sec) before aborting if call is unanswered (min: 1, max: 600).

### CreateInboundIpRequest
* Create Inbound Ip Request `object`
  * ani_number_format `string` (values: +E.164, E.164, +E.164-national, E.164-national): This setting allows you to set the format with which the caller's number (ANI) is sent for inbound phone calls.
  * channel_limit `integer`: When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
  * codecs `array`: Defines the list of codecs that Telnyx will send for inbound calls to a specific number on your portal account, in priority order. This only works when the Connection the number is assigned to uses Media Handling mode: default. OPUS and H.264 codecs are available only when using TCP or TLS transport for SIP.
    * items `string`
  * default_routing_method `string` (values: sequential, round-robin): Default routing method to be used when a number is associated with the connection. Must be one of the routing method types or left blank, other values are not allowed.
  * dnis_number_format `string` (values: +e164, e164, national)
  * generate_ringback_tone `boolean`: Generate ringback tone through 183 session progress message with early media.
  * isup_headers_enabled `boolean`: When set, inbound phone calls will receive ISUP parameters via SIP headers. (Only when available and only when using TCP or TLS transport.)
  * prack_enabled `boolean`: Enable PRACK messages as defined in RFC3262.
  * privacy_zone_enabled `boolean`: By default, Telnyx does not send caller-id information when the caller has chosen to hide this information. When this option is enabled, Telnyx will send the SIP header Privacy:id plus the caller-id information so that the receiver side can choose when to hide it.
  * sip_compact_headers_enabled `boolean`: Defaults to true.
  * sip_region `string` (values: US, Europe, Australia): Selects which `sip_region` to receive inbound calls from. If null, the default region (US) will be used.
  * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
  * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * timeout_1xx_secs `integer`: Time(sec) before aborting if connection is not made.
  * timeout_2xx_secs `integer`: Time(sec) before aborting if call is unanswered (min: 1, max: 600).

### CreateIpConnectionRequest
* Create IP Connection Request `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * default_on_hold_comfort_noise_enabled `boolean`: When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * encode_contact_header_enabled `boolean`: Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
  * encrypted_media `string` (values: SRTP, ZRTP): Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
  * inbound [CreateInboundIpRequest](#createinboundiprequest)
  * onnet_t38_passthrough_enabled `boolean`: Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.
  * outbound [OutboundIp](#outboundip)
  * rtcp_settings [ConnectionRtcpSettings](#connectionrtcpsettings)
  * transport_protocol `string` (values: UDP, TCP, TLS): One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### CreateIpRequest
* Create Ip Request `object`
  * connection_id `string`: ID of the IP Connection to which this IP should be attached.
  * ip_address **required** `string`: IP adddress represented by this resource.
  * port `integer`: Port to use when connecting to this IP.

### CreateLongCodeMessageRequest
* CreateLongCodeMessageRequest `object`
  * auto_detect `boolean`: Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.
  * from **required** `string`: Phone number, in +E.164 format, used to send the message.
  * media_urls `array`: A list of media URLs. The total media size must be less than 1 MB.
    * items `string`
  * subject `string`: Subject of multimedia message
  * text `string`: Message body (i.e., content) as a non-empty string.
  * to **required** [ToNumber](#tonumber)
  * type `string` (values: SMS, MMS): The protocol for sending the message, either SMS or MMS.
  * use_profile_webhooks `boolean`: If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.
  * webhook_failover_url `string`: The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.
  * webhook_url `string`: The URL where webhooks related to this message will be sent.

### CreateMessageRequest
* CreateMessageRequest `object`
  * auto_detect `boolean`: Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.
  * from `string`: Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).
  * media_urls `array`: A list of media URLs. The total media size must be less than 1 MB.
    * items `string`
  * messaging_profile_id `string`: Unique identifier for a messaging profile.
  * subject `string`: Subject of multimedia message
  * text `string`: Message body (i.e., content) as a non-empty string.
  * to **required** [ToNumber](#tonumber)
  * type `string` (values: SMS, MMS): The protocol for sending the message, either SMS or MMS.
  * use_profile_webhooks `boolean`: If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.
  * webhook_failover_url `string`: The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.
  * webhook_url `string`: The URL where webhooks related to this message will be sent.

### CreateMessagingHostedNumberOrderRequest
* CreateMessagingHostedNumberOrderRequest `object`
  * messaging_profile_id `string`: Automatically associate the number with this messaging profile ID when the order is complete.
  * phone_numbers `array`: Phone numbers to be used for hosted messaging.
    * items `string`

### CreateMessagingProfileRequest
* CreateMessagingProfileRequest `object`
  * enabled `boolean`: Specifies whether the messaging profile is enabled or not.
  * name **required** `string`: A user friendly name for the messaging profile.
  * number_pool_settings [NumberPoolSettings](#numberpoolsettings)
  * url_shortener_settings [UrlShortenerSettings](#urlshortenersettings)
  * webhook_api_version `string` (values: 1, 2, 2010-04-01): Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.
  * webhook_failover_url `string`: The failover URL where webhooks related to this messaging profile will be sent if sending to the primary URL fails.
  * webhook_url `string`: The URL where webhooks related to this messaging profile will be sent.

### CreateNumberOrderDocumentRequest
* CreateNumberOrderDocumentRequest `object`
  * created_at `string`: An ISO 8901 datetime string denoting when the number order document was uploaded.
  * customer_reference `string`: A customer reference string for customer look ups.
  * file_id `string`: The id of the file to associate as a number order document.
  * id `string`
  * record_type `string`
  * requirement_type `string` (values: address_proof, identification, reg_form)
  * requirements_id `string`: Unique id for a requirement.

### CreateNumberOrderRequest
* CreateNumberOrderRequest `object`
  * connection_id `string`: Identifies the connection associated with this phone number.
  * created_at `string`: An ISO 8901 datetime string denoting when the number order was created.
  * customer_reference `string`: A customer reference string for customer look ups.
  * id `string`
  * messaging_profile_id `string`: Identifies the messaging profile associated with the phone number.
  * phone_numbers `array`
    * items [PhoneNumber](#phonenumber)
  * phone_numbers_count `integer`: The count of phone numbers in the number order.
  * record_type `string`
  * requirements_met `boolean`: True if all requirements are met for every phone number, false otherwise.
  * status `string` (values: pending, success, failure): The status of the order.
  * updated_at `string`: An ISO 8901 datetime string for when the number order was updated.

### CreateNumberPoolMessageRequest
* CreateNumberPoolMessageRequest `object`
  * auto_detect `boolean`: Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.
  * media_urls `array`: A list of media URLs. The total media size must be less than 1 MB.
    * items `string`
  * messaging_profile_id **required** `string`: Unique identifier for a messaging profile.
  * subject `string`: Subject of multimedia message
  * text `string`: Message body (i.e., content) as a non-empty string.
  * to **required** [ToNumber](#tonumber)
  * type `string` (values: SMS, MMS): The protocol for sending the message, either SMS or MMS.
  * use_profile_webhooks `boolean`: If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.
  * webhook_failover_url `string`: The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.
  * webhook_url `string`: The URL where webhooks related to this message will be sent.

### CreateNumberReservationRequest
* CreateNumberReservationRequest `object`
  * created_at `string`: An ISO 8901 datetime string denoting when the numbers reservation was created.
  * customer_reference `string`: A customer reference string for customer look ups.
  * id `string`
  * phone_numbers `array`
    * items [ReservedPhoneNumber](#reservedphonenumber)
  * record_type `string`
  * status `string` (values: pending, success, failure): The status of the entire reservation.
  * updated_at `string`: An ISO 8901 datetime string for when the number reservation was updated.

### CreateShortCodeMessageRequest
* CreateShortCodeMessageRequest `object`
  * auto_detect `boolean`: Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.
  * from **required** `string`: Phone number, in +E.164 format, used to send the message.
  * media_urls `array`: A list of media URLs. The total media size must be less than 1 MB.
    * items `string`
  * subject `string`: Subject of multimedia message
  * text `string`: Message body (i.e., content) as a non-empty string.
  * to **required** [ToNumber](#tonumber)
  * type `string` (values: SMS, MMS): The protocol for sending the message, either SMS or MMS.
  * use_profile_webhooks `boolean`: If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.
  * webhook_failover_url `string`: The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.
  * webhook_url `string`: The URL where webhooks related to this message will be sent.

### CreateTexmlApplicationRequest
* Create Texml Application Request `object`
  * active [ConnectionActive](#connectionactive)
  * anchorsite_override [AnchorsiteOverride](#anchorsiteoverride)
  * dtmf_type [DtmfType](#dtmftype)
  * first_command_timeout [FirstCommandTimeout](#firstcommandtimeout)
  * first_command_timeout_secs [FirstCommandTimeoutSecs](#firstcommandtimeoutsecs)
  * friendly_name **required** [ApplicationName](#applicationname)
  * inbound `object`
    * channel_limit `integer`: When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
    * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
    * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * outbound `object`
    * channel_limit `integer`: When set, this will limit the total number of outbound calls to phone numbers associated with this connection.
    * outbound_voice_profile_id [OutboundVoiceProfileId](#outboundvoiceprofileid)
  * status_callback `string`: URL for Telnyx to send requests to containing information about call progress events.
  * status_callback_method `string` (values: get, post): HTTP request method Telnyx should use when requesting the status_callback URL.
  * voice_fallback_url `string`: URL to which Telnyx will deliver your XML Translator webhooks if we get an error response from your voice_url.
  * voice_method `string` (values: get, post): HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either 'get' or 'post'.
  * voice_url **required** `string`: URL to which Telnyx will deliver your XML Translator webhooks.

### CreateVerificationResponse
* CreateVerifyVerificationResponse `object`
  * data **required** [Verification](#verification)

### CreateVerifyProfileResponse
* CreateVerifyProfileResponse `object`
  * data **required** [VerifyProfile](#verifyprofile)

### CreatedAt
* Created At `string`: ISO 8601 formatted date indicating when the resource was created.

### CredentialConnection
* Credential Connection `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * created_at `string`: ISO-8601 formatted date indicating when the resource was created.
  * default_on_hold_comfort_noise_enabled `boolean`: When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * encode_contact_header_enabled `boolean`: Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
  * encrypted_media `string` (values: SRTP, ZRTP): Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
  * id `string`: Identifies the type of resource.
  * inbound [CredentialInbound](#credentialinbound)
  * onnet_t38_passthrough_enabled `boolean`: Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.
  * outbound [CredentialOutbound](#credentialoutbound)
  * password `string`: The password to be used as part of the credentials. Must be 8 to 128 characters long.
  * record_type `string`: Identifies the type of the resource.
  * rtcp_settings `object`
    * capture_enabled `boolean`: BETA - Enable the capture and storage of RTCP messages to create QoS reports on the Telnyx Mission Control Portal.
    * port `string` (values: rtcp-mux, rtp+1): RTCP port by default is rtp+1, it can also be set to rtcp-mux
    * report_frequency_seconds `integer`: RTCP reports are sent to customers based on the frequency set. Frequency is in seconds and it can be set to values from 5 to 3000 seconds.
  * sip_uri_calling_preference `string` (values: disabled, unrestricted, internal): This feature enables inbound SIP URI calls to your Credential Auth Connection. If enabled for all (unrestricted) then anyone who calls the SIP URI <your-username>@telnyx.com will be connected to your Connection. You can also choose to allow only calls that are originated on any Connections under your account (internal).
  * updated_at `string`: ISO-8601 formatted date indicating when the resource was updated.
  * user_name `string`: The user name to be used as part of the credentials. Must be 4-32 characters long and alphanumeric values only (no spaces or special characters).
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### CredentialInbound
* Credential Inbound `object`
  * ani_number_format `string` (values: +E.164, E.164, +E.164-national, E.164-national): This setting allows you to set the format with which the caller's number (ANI) is sent for inbound phone calls.
  * channel_limit `integer`: When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
  * codecs `array`: Defines the list of codecs that Telnyx will send for inbound calls to a specific number on your portal account, in priority order. This only works when the Connection the number is assigned to uses Media Handling mode: default. OPUS and H.264 codecs are available only when using TCP or TLS transport for SIP.
    * items `string`
  * dnis_number_format `string` (values: +e164, e164, national)
  * generate_ringback_tone `boolean`: Generate ringback tone through 183 session progress message with early media.
  * isup_headers_enabled `boolean`: When set, inbound phone calls will receive ISUP parameters via SIP headers. (Only when available and only when using TCP or TLS transport.)
  * prack_enabled `boolean`: Enable PRACK messages as defined in RFC3262.
  * privacy_zone_enabled `boolean`: By default, Telnyx does not send caller-id information when the caller has chosen to hide this information. When this option is enabled, Telnyx will send the SIP header Privacy:id plus the caller-id information so that the receiver side can choose when to hide it.
  * sip_compact_headers_enabled `boolean`: Defaults to true.
  * timeout_1xx_secs `integer`: Time(sec) before aborting if connection is not made.
  * timeout_2xx_secs `string`: Time(sec) before aborting if call is unanswered (min: 1, max: 600).

### CredentialOutbound
* Credential Outbound `object`
  * ani_override `string`: Set a phone number as the ani_override value to override caller id number on outbound calls.
  * ani_override_type `string` (values: always, normal, emergency): Specifies when we apply your ani_override setting. Only applies when ani_override is not blank.
  * call_parking_enabled `boolean`: Forces all SIP calls originated on this connection to be "parked" instead of "bridged" to the destination specified on the URI. Parked calls will return ringback to the caller and will await for a Call Control command to define which action will be taken next.
  * channel_limit `integer`: When set, this will limit the total number of outbound calls to phone numbers associated with this connection.
  * generate_ringback_tone `boolean`: Generate ringback tone through 183 session progress message with early media.
  * instant_ringback_enabled `boolean`: When set, ringback will not wait for indication before sending ringback tone to calling party.
  * localization `string`: A 2-character country code specifying the country whose national dialing rules should be used. For example, if set to `US` then any US number can be dialed without preprending +1 to the number. When left blank, Telnyx will try US and GB dialing rules, in that order, by default.
  * outbound_voice_profile_id [OutboundVoiceProfileId](#outboundvoiceprofileid)
  * t38_reinvite_source `string` (values: telnyx, customer, disabled, passthru, caller-passthru, callee-passthru): This setting only affects connections with Fax-type Outbound Voice Profiles. The setting dictates whether or not Telnyx sends a t.38 reinvite.<br/><br/> By default, Telnyx will send the re-invite. If set to `customer`, the caller is expected to send the t.38 reinvite.

### CsvDownload
* CsvDownload `object`
  * id `string`: Identifies the resource.
  * record_type `string`: Identifies the type of the resource.
  * status `string` (values: pending, complete, failed, expired): Indicates the completion level of the CSV report. Only complete CSV download requests will be able to be retrieved.
  * url `string`: The URL at which the CSV file can be retrieved.

### CustomSipHeader
* Custom SIP Header `object`
  * name **required** `string`: The name of the header to add.
  * value **required** `string`: The value of the header.

### DeleteVerifyProfileResponse
* DeleteVerifyProfileResponse `object`
  * data **required** [VerifyProfile](#verifyprofile)

### DetailRecordPaginationMeta
* DetailRecordPaginationMeta `object`
  * current_page_size `integer`
  * last_fetched_date `string`

### DtmfType
* DTMF Type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.

### EmergencySettings
* EmergencySettings `object`: The emergency services settings for a phone number.
  * emergency_address_id `string`: Identifies the address to be used with emergency services.
  * emergency_enabled `boolean`: Allows you to enable or disable emergency services on the phone number. In order to enable emergency services, you must also set an emergency_address_id.
  * emergency_status `string` (values: disabled, active, provisioning, deprovisioning): Represents the state of the number regarding emergency activation.

### Error
* Error `object`
  * code **required** `string`
  * detail `string`
  * meta `object`
  * source `object`
    * parameter `string`: Indicates which query parameter caused the error.
    * pointer `string`: JSON pointer (RFC6901) to the offending entity.
  * title **required** `string`

### Errors
* Errors `object`
  * errors `array`
    * items [Error](#error)

### Fax
* Fax `object`
  * connection_id `string`: The connection ID to send the fax with.
  * created_at `string`: ISO 8601 timestamp when resource was created
  * from `string`: The phone number, in E.164 format, the fax will be sent from.
  * id `string`: Identifies the fax.
  * media_url `string`: The URL to the PDF used for the fax's media.
  * quality `string`: The quality of the fax. Can be normal, high, very_high
  * record_type `string` (values: fax): Identifies the type of the resource.
  * status `string` (values: queued, media.processed, sending, delivered, failed): Status of the fax
  * store_media `boolean`: Should fax media be stored on temporary URL
  * stored_media_url `boolean`: If store_media was set to true, this is a link to temporary location. Link expires after 2h.
  * to `string`: The phone number, in E.164 format, the fax will be sent to or SIP URI
  * updated_at `string`: ISO 8601 timestamp when resource was updated
  * webhook_failover_url `string`: Optional failover URL that will receive fax webhooks if `webhook_url` doesn't return a 2XX response
  * webhook_url `string`: URL that will receive fax webhooks

### FaxApplication
* Fax Application `object`
  * active [ConnectionActive](#connectionactive)
  * anchorsite_override [AnchorsiteOverride](#anchorsiteoverride)
  * application_name [ApplicationName](#applicationname)
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * id [IntId](#intid)
  * inbound `object`
    * channel_limit `integer`: When set, this will limit the number of concurrent inbound calls to phone numbers associated with this connection.
    * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
    * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * outbound `object`
    * channel_limit `integer`: When set, this will limit the number of concurrent outbound calls to phone numbers associated with this connection.
    * outbound_voice_profile_id [OutboundVoiceProfileId](#outboundvoiceprofileid)
  * record_type `string`: Identifies the type of the resource.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.
  * webhook_event_failover_url [WebhookEventFailoverUrl](#webhookeventfailoverurl)
  * webhook_event_url [WebhookEventUrl](#webhookeventurl)
  * webhook_timeout_secs [WebhookTimeoutSecs](#webhooktimeoutsecs)

### FaxDelivered
* FaxDelivered `object`
  * event_type `string` (values: fax.delivered): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * connection_id `string`: The ID of the connection that was used to send the fax.
    * from `string`: The phone number, in E.164 format, the fax will be sent from.
    * id `string`: Identifies the fax.
    * original_media_url `string`: The original URL to the PDF used for the fax's media.
    * status `string` (values: delivered): The status of the fax.
    * to `string`: The phone number, in E.164 format, the fax will be sent to or SIP URI
    * user_id `string`: Identifier of the user to whom the fax belongs
  * record_type `string` (values: event): Identifies the type of the resource.

### FaxFailed
* FaxFailed `object`
  * event_type `string` (values: fax.failed): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * connection_id `string`: The ID of the connection that was used to send the fax.
    * failure_reason `string` (values: rejected): Cause of the sending failure
    * from `string`: The phone number, in E.164 format, the fax will be sent from.
    * id `string`: Identifies the fax.
    * original_media_url `string`: The original URL to the PDF used for the fax's media.
    * status `string` (values: failed): The status of the fax.
    * to `string`: The phone number, in E.164 format, the fax will be sent to or SIP URI
    * user_id `string`: Identifier of the user to whom the fax belongs
  * record_type `string` (values: event): Identifies the type of the resource.

### FaxMediaProcessed
* FaxMediaProcessed `object`
  * event_type `string` (values: fax.media.processed): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * connection_id `string`: The ID of the connection that was used to send the fax.
    * from `string`: The phone number, in E.164 format, the fax will be sent from.
    * id `string`: Identifies the fax.
    * original_media_url `string`: The original URL to the PDF used for the fax's media.
    * status `string` (values: media.processed): The status of the fax.
    * to `string`: The phone number, in E.164 format, the fax will be sent to or SIP URI
    * user_id `string`: Identifier of the user to whom the fax belongs
  * record_type `string` (values: event): Identifies the type of the resource.

### FaxQueued
* FaxQueued `object`
  * event_type `string` (values: fax.queued): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * connection_id `string`: The ID of the connection that was used to send the fax.
    * from `string`: The phone number, in E.164 format, the fax will be sent from.
    * id `string`: Identifies the fax.
    * original_media_url `string`: The original URL to the PDF used for the fax's media.
    * status `string` (values: queued): The status of the fax.
    * to `string`: The phone number, in E.164 format, the fax will be sent to or SIP URI
    * user_id `string`: Identifier of the user to whom the fax belongs
  * record_type `string` (values: event): Identifies the type of the resource.

### FaxSendingStarted
* FaxSendingStarted `object`
  * event_type `string` (values: fax.sending.started): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * payload `object`
    * connection_id `string`: The ID of the connection that was used to send the fax.
    * from `string`: The phone number, in E.164 format, the fax will be sent from.
    * id `string`: Identifies the fax.
    * original_media_url `string`: The original URL to the PDF used for the fax's media.
    * status `string` (values: sending): The status of the fax.
    * to `string`: The phone number, in E.164 format, the fax will be sent to or SIP URI
    * user_id `string`: Identifier of the user to whom the fax belongs
  * record_type `string` (values: event): Identifies the type of the resource.

### Filter
* Filter `object`
  * billing_group `string`
  * cld `string`
  * cld_filter `string` (values: contains, starts_with, ends_with)
  * cli `string`
  * cli_filter `string` (values: contains, starts_with, ends_with)
  * filter_type `string` (values: and, or)
  * tags_list `string`

### FirstCommandTimeout
* First Command Timeout `boolean`: Specifies whether calls to phone numbers associated with this connection should hangup after timing out.

### FirstCommandTimeoutSecs
* First Command Timeout Secs `integer`: Specifies how many seconds to wait before timing out a dial command.

### Fqdn
* Fqdn `object`
  * connection_id `string`: ID of the FQDN connection to which this FQDN is attached.
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * dns_record_type `string`: The DNS record type for the FQDN. For cases where a port is not set, the DNS record type must be 'srv'. For cases where a port is set, the DNS record type must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060 will be used.
  * fqdn `string`: FQDN represented by this resource.
  * id `string`: Identifies the resource.
  * port `integer`: Port to use when connecting to this FQDN.
  * record_type `string`: Identifies the type of the resource.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### FqdnConnection
* Fqdn Connection `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * default_on_hold_comfort_noise_enabled `boolean`: When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * encode_contact_header_enabled `boolean`: Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
  * encrypted_media `string` (values: SRTP, ZRTP): Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
  * id `string`: Identifies the resource.
  * inbound [InboundFqdn](#inboundfqdn)
  * onnet_t38_passthrough_enabled `boolean`: Enable on-net T38 if you prefer that the sender and receiver negotiate T38 directly when both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call according to each leg's settings.
  * record_type `string`: Identifies the type of the resource.
  * rtcp_settings [ConnectionRtcpSettings](#connectionrtcpsettings)
  * transport_protocol `string` (values: UDP, TCP, TLS): One of UDP, TLS, or TCP.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### GatherUsingAudioRequest
* Gather Using Audio Request `object`
  * audio_url **required** `string`: The URL of a file to be played back at the beginning of each prompt. The URL can point to either a WAV or MP3 file.
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * inter_digit_timeout_millis `integer`: The number of milliseconds to wait for input between digits.
  * invalid_audio_url `string`: The URL of a file to play when digits don't match the `valid_digits` parameter or the number of digits is not between `min` and `max`. The URL can point to either a WAV or MP3 file.
  * maximum_digits `integer`: The maximum number of digits to fetch. This parameter has a maximum value of 128.
  * maximum_tries `integer`: The maximum number of times the file should be played if there is no input from the user on the call.
  * minimum_digits `integer`: The minimum number of digits to fetch. This parameter has a minimum value of 1.
  * terminating_digit `string`: The digit used to terminate input if fewer than `maximum_digits` digits have been gathered.
  * timeout_millis `integer`: The number of milliseconds to wait for a DTMF response after file playback ends before a replaying the sound file.
  * valid_digits `string`: A list of all digits accepted as valid.

### GatherUsingSpeakRequest
* Gather Using Speak Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * inter_digit_timeout_millis `integer`: The number of milliseconds to wait for input between digits.
  * invalid_payload `string`: The text or SSML to be converted into speech when digits don't match the `valid_digits` parameter or the number of digits is not between `min` and `max`. There is a 5,000 character limit.
  * language **required** `string` (values: arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-MX, es-US, fr-CA, fr-FR, hi-IN, is-IS, it-IT, ja-JP, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR): The language you want spoken.
  * maximum_digits `integer`: The maximum number of digits to fetch. This parameter has a maximum value of 128.
  * maximum_tries `integer`: The maximum number of times that a file should be played back if there is no input from the user on the call.
  * minimum_digits `integer`: The minimum number of digits to fetch. This parameter has a minimum value of 1.
  * payload **required** `string`: The text or SSML to be converted into speech. There is a 5,000 character limit.
  * payload_type `string` (values: text, ssml): The type of the provided payload. The payload can either be plain text, or Speech Synthesis Markup Language (SSML).
  * service_level `string` (values: basic, premium): This parameter impacts speech quality, language options and payload types. When using `basic`, only the `en-US` language and payload type `text` are allowed.
  * terminating_digit `string`: The digit used to terminate input if fewer than `maximum_digits` digits have been gathered.
  * timeout_millis `integer`: The number of milliseconds to wait for a DTMF response after speak ends before a replaying the sound file.
  * valid_digits `string`: A list of all digits accepted as valid.
  * voice **required** `string` (values: male, female): The gender of the voice used to speak back the text.

### HangupRequest
* Hangup Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.

### HostedNumber
* HostedNumber `object`
  * id `string`: Identifies the type of resource.
  * phone_number `string`: The messaging hosted phone number (+E.164 format)
  * record_type `string`
  * status `string` (values: deleted, failed, pending, successful)

### InboundFqdn
* Inbound Fqdn `object`
  * ani_number_format `string` (values: +E.164, E.164, +E.164-national, E.164-national): This setting allows you to set the format with which the caller's number (ANI) is sent for inbound phone calls.
  * channel_limit `integer`: When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
  * codecs `array`: Defines the list of codecs that Telnyx will send for inbound calls to a specific number on your portal account, in priority order. OPUS and H.264 codecs are available only when using TCP or TLS transport for SIP.
    * items `string`
  * default_routing_method `string` (values: sequential, round-robin): Default routing method to be used when a number is associated with the connection. Must be one of the routing method types or left blank, other values are not allowed.
  * dnis_number_format `string` (values: +e164, e164, national)
  * generate_ringback_tone `boolean`: Generate ringback tone through 183 session progress message with early media.
  * isup_headers_enabled `boolean`: When set, inbound phone calls will receive ISUP parameters via SIP headers. (Only when available and only when using TCP or TLS transport.)
  * prack_enabled `boolean`: Enable PRACK messages as defined in RFC3262.
  * privacy_zone_enabled `boolean`: By default, Telnyx does not send caller-id information when the caller has chosen to hide this information. When this option is enabled, Telnyx will send the SIP header Privacy:id plus the caller-id information so that the receiver side can choose when to hide it.
  * sip_compact_headers_enabled `boolean`: Defaults to true.
  * sip_region `string` (values: US, Europe, Australia): Selects which `sip_region` to receive inbound calls from. If null, the default region (US) will be used.
  * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
  * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * timeout_1xx_secs `integer`: Time(sec) before aborting if connection is not made.
  * timeout_2xx_secs `integer`: Time(sec) before aborting if call is unanswered (min: 1, max: 600).

### InboundIp
* Inbound Ip `object`
  * ani_number_format `string` (values: +E.164, E.164, +E.164-national, E.164-national): This setting allows you to set the format with which the caller's number (ANI) is sent for inbound phone calls.
  * channel_limit `integer`: When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
  * codecs `array`: Defines the list of codecs that Telnyx will send for inbound calls to a specific number on your portal account, in priority order. This only works when the Connection the number is assigned to uses Media Handling mode: default. OPUS and H.264 codecs are available only when using TCP or TLS transport for SIP.
    * items `string`
  * default_primary_ip_id `string`: The default primary IP to use for the number. Only settable if the connection is
  * default_routing_method `string` (values: sequential, round-robin): Default routing method to be used when a number is associated with the connection. Must be one of the routing method types or left blank, other values are not allowed.
  * default_secondary_ip_id `string`: The default secondary IP to use for the number. Only settable if the connection is
  * default_tertiary_ip_id `string`: The default tertiary IP to use for the number. Only settable if the connection is
  * dnis_number_format `string` (values: +e164, e164, national)
  * generate_ringback_tone `boolean`: Generate ringback tone through 183 session progress message with early media.
  * isup_headers_enabled `boolean`: When set, inbound phone calls will receive ISUP parameters via SIP headers. (Only when available and only when using TCP or TLS transport.)
  * prack_enabled `boolean`: Enable PRACK messages as defined in RFC3262.
  * privacy_zone_enabled `boolean`: By default, Telnyx does not send caller-id information when the caller has chosen to hide this information. When this option is enabled, Telnyx will send the SIP header Privacy:id plus the caller-id information so that the receiver side can choose when to hide it.
  * sip_compact_headers_enabled `boolean`: Defaults to true.
  * sip_region `string` (values: US, Europe, Australia): Selects which `sip_region` to receive inbound calls from. If null, the default region (US) will be used.
  * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
  * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * timeout_1xx_secs `integer`: Time(sec) before aborting if connection is not made.
  * timeout_2xx_secs `integer`: Time(sec) before aborting if call is unanswered (min: 1, max: 600).

### InboundMessage
* InboundMessage `object`
  * event_type `string` (values: message.received): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * payload [InboundMessagePayload](#inboundmessagepayload)
  * record_type `string` (values: event): Identifies the type of the resource.

### InboundMessageEvent
* InboundMessageEvent `object`
  * data [InboundMessage](#inboundmessage)

### InboundMessagePayload
* InboundMessagePayload `object`
  * tags `array`: Tags associated with the resource.
    * items `string`
  * cc `array`
    * items `object`
      * carrier `string`: The carrier of the receiver.
      * line_type `string` (values: Wireline, Wireless, VoWiFi, VoIP, Pre-Paid Wireless, ): The line-type of the receiver.
      * phone_number `string`: Receiving address (+E.164 formatted phone number or short code).
      * status `string` (values: queued, sending, sent, delivered, sending_failed, delivery_failed, delivery_unconfirmed)
  * completed_at `string`: Not used for inbound messages.
  * cost `object`
    * amount `string`: The amount deducted from your account.
    * currency `string`: The ISO 4217 currency identifier.
  * direction `string` (values: inbound): The direction of the message. Inbound messages are sent to you whereas outbound messages are sent from you.
  * encoding `string`: Encoding scheme used for the message body.
  * errors `array`: These errors may point at addressees when referring to unsuccessful/unconfirmed delivery statuses.
    * items [Error](#error)
  * from `object`
    * carrier `string`: The carrier of the sender.
    * line_type `string` (values: Wireline, Wireless, VoWiFi, VoIP, Pre-Paid Wireless, ): The line-type of the sender.
    * phone_number `string`: Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).
    * status `string` (values: received, delivered)
  * id `string`: Identifies the type of resource.
  * media `array`
    * items `object`
      * content_type `string`: The MIME type of the requested media.
      * hash_sha256 `string`: The SHA256 hash of the requested media.
      * size `integer`: The size of the requested media.
      * url `string`: The url of the media requested to be sent.
  * messaging_profile_id `string`: Unique identifier for a messaging profile.
  * parts `integer`: Number of parts into which the message's body must be split.
  * received_at `string`: ISO 8601 formatted date indicating when the message request was received.
  * record_type `string` (values: message): Identifies the type of the resource.
  * sent_at `string`: Not used for inbound messages.
  * text `string`: Message body (i.e., content) as a non-empty string.
  * to `array`
    * items `object`
      * carrier `string`: The carrier of the receiver.
      * line_type `string` (values: Wireline, Wireless, VoWiFi, VoIP, Pre-Paid Wireless, ): The line-type of the receiver.
      * phone_number `string`: Receiving address (+E.164 formatted phone number or short code).
      * status `string` (values: queued, sending, sent, delivered, sending_failed, delivery_failed, delivery_unconfirmed, webhook_delivered)
  * type `string` (values: SMS, MMS): The type of message. This value can be either 'sms' or 'mms'.
  * valid_until `string`: Not used for inbound messages.
  * webhook_failover_url `string`: The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.
  * webhook_url `string`: The URL where webhooks related to this message will be sent.

### IntId
* IntId `string`: Identifies the resource.

### Ip
* Ip `object`
  * connection_id `string`: ID of the IP Connection to which this IP should be attached.
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * id `string`: Identifies the type of resource.
  * ip_address `string`: IP adddress represented by this resource.
  * port `integer`: Port to use when connecting to this IP.
  * record_type `string`: Identifies the type of the resource.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### IpConnection
* Ip Connection `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * default_on_hold_comfort_noise_enabled `boolean`: When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * encode_contact_header_enabled `boolean`: Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
  * encrypted_media `string` (values: SRTP, ZRTP): Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
  * id `string`: Identifies the type of resource.
  * inbound [InboundIp](#inboundip)
  * onnet_t38_passthrough_enabled `boolean`: Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.
  * outbound [OutboundIp](#outboundip)
  * record_type `string`: Identifies the type of the resource.
  * rtcp_settings [ConnectionRtcpSettings](#connectionrtcpsettings)
  * transport_protocol `string` (values: UDP, TCP, TLS): One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### JoinConferenceRequest
* Join Conference Request `object`
  * call_control_id **required** `string`: Unique identifier and token for controlling the call
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
  * end_conference_on_exit `boolean`: Whether the conference should end and all remaining participants be hung up after the participant leaves the conference. Defaults to "false".
  * hold `boolean`: Whether the participant should be put on hold immediately after joining the conference. Defaults to "false".
  * hold_audio_url `string`: The URL of an audio file to be played to the participant when they are put on hold after joining the conference. This property takes effect only if "hold" is set to "true".
  * mute `boolean`: Whether the participant should be muted immediately after joining the conference. Defaults to "false".
  * soft_end_conference_on_exit `boolean`: Whether the conference should end after the participant leaves the conference. NOTE this doesn't hang up the other participants. Defaults to "false".
  * start_conference_on_enter `boolean`: Whether the conference should be started after the participant joins the conference. Defaults to "false".
  * supervisor_role `string` (values: barge, monitor, none, whisper): Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
  * whisper_call_control_ids `array`: Array of unique call_control_ids the joining supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.
    * items `string`

### LedgerBillingGroupReport
* LedgerBillingGroupReport `object`
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * id `string`: Identifies the type of resource.
  * organization_id `string`: Uniquely identifies the organization that owns the resource.
  * record_type `string` (values: ledger_billing_group_report): Identifies the type of the resource.
  * report_url `string`: External url of the ledger billing group report, if the status is complete
  * status `string` (values: pending, complete, failed, deleted): Status of the ledger billing group report
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### ListVerificationsResponse
* ListVerificationsResponse `object`
  * data **required** `array`
    * items [Verification](#verification)
  * meta **required** [Meta](#meta)

### ListVerifyProfilesResponse
* ListVerifyProfilesResponse `object`: A paginated list of Verify profiles
  * data **required** `array`
    * items [VerifyProfile](#verifyprofile)
  * meta **required** [Meta](#meta)

### Loopcount


### MdrDeleteDetailReportV2Resp
* MdrDeleteDetailReportV2Resp `object`
  * data [MdrDetailReportV2Resp](#mdrdetailreportv2resp)

### MdrDeleteUsageReportsV2Resp
* MdrDeleteUsageReportsV2Resp `object`
  * data [MdrUsageReportV2Resp](#mdrusagereportv2resp)

### MdrDetailReportV2Resp
* MdrDetailReportV2Resp `object`
  * connections `array`
    * items `integer`
  * created_at `string`
  * directions `array`
    * items `string` (values: INBOUND, OUTBOUND)
  * end_date `string`
  * filters `array`
    * items [Filter](#filter)
  * id `string`: Identifies the resource
  * profiles `string`
  * record_type `string`
  * record_types `array`
    * items `string` (values: INCOMPLETE, COMPLETED, ERRORS)
  * report_name `string`
  * report_url `string`
  * start_date `string`
  * status `string` (values: PENDING, COMPLETE, FAILED, EXPIRED)
  * updated_at `string`

### MdrDetailV2Resp
* MdrDetailV2Resp `object`
  * cld `string`: The destination number for a call, or the callee
  * cli `string`: The number associated with the person initiating the call, or the caller
  * cost `string`: Final cost. Cost is calculated as rate * parts
  * created_at `string`: Message sent time
  * direction `string`: Direction of message - inbound or outbound.
  * id `string`: Id of message detail record
  * parts `number`: Number of parts this message has. Max number of character is 160. If message contains more characters then that it will be broken down in multiple parts
  * profile_name `string`: Configured profile name. New profiles can be created and configured on Telnyx portal
  * rate `string`: Rate applied to the message
  * record_type `string`
  * status `string` (values: GW_TIMEOUT, DELIVERED, DLR_UNCONFIRMED, DLR_TIMEOUT, RECEIVED, GW_REJECT, FAILED): Message status

### MdrGetDetailReportByIdV2Resp
* MdrGetDetailReportByIdV2Resp `object`
  * data [MdrDetailReportV2Resp](#mdrdetailreportv2resp)

### MdrGetDetailReportV2Resp
* MdrGetDetailReportV2Resp `object`
  * data `array`
    * items [MdrDetailReportV2Resp](#mdrdetailreportv2resp)
  * meta [PaginationMeta](#paginationmeta)

### MdrGetDetailV2Resp
* MdrGetDetailV2Resp `object`
  * data `array`
    * items [MdrDetailV2Resp](#mdrdetailv2resp)
  * meta [DetailRecordPaginationMeta](#detailrecordpaginationmeta)

### MdrGetUsageReportsByIdV2Resp
* MdrGetUsageReportsByIdV2Resp `object`
  * data [MdrUsageReportV2Resp](#mdrusagereportv2resp)

### MdrGetUsageReportsV2Resp
* MdrGetUsageReportsV2Resp `object`
  * data `array`
    * items [MdrUsageReportV2Resp](#mdrusagereportv2resp)
  * meta [PaginationMeta](#paginationmeta)

### MdrPostDetailReportV2Req
* MdrPostDetailReportV2Req `object`
  * connections `array`
    * items `integer`
  * directions `array`
    * items `string` (values: INBOUND, OUTBOUND)
  * end_date **required** `string`
  * filters `array`
    * items [Filter](#filter)
  * include_message_body `boolean`
  * profiles `string`
  * record_types `array`
    * items `string` (values: INCOMPLETE, COMPLETED, ERRORS)
  * report_name `string`
  * start_date **required** `string`

### MdrPostDetailReportV2Resp
* MdrPostDetailReportV2Resp `object`
  * data [MdrDetailReportV2Resp](#mdrdetailreportv2resp)

### MdrPostUsageReportV2Req
* MdrPostUsageReportV2Req `object`
  * aggregation_type **required** `string` (values: NO_AGGREGATION, PROFILE, TAGS)
  * end_date **required** `string`
  * profiles `string`
  * start_date **required** `string`

### MdrPostUsageReportsV2Resp
* MdrPostUsageReportsV2Resp `object`
  * data [MdrUsageReportV2Resp](#mdrusagereportv2resp)

### MdrUsageRecord
* MdrUsageRecord `object`
  * tags `string`
  * connection `string`
  * cost `string`
  * currency `string`
  * delivered `string`
  * direction `string`
  * parts `string`
  * product `string`
  * profile_id `string`
  * received `string`
  * sent `string`

### MdrUsageReportV2Resp
* MdrUsageReportV2Resp `object`
  * aggregation_type `string` (values: NO_AGGREGATION, PROFILE, TAGS)
  * connections `array`
    * items `integer`
  * created_at `string`
  * end_date `string`
  * id `string`: Identifies the resource
  * profiles `string`
  * record_type `string`
  * report_url `string`
  * result `array`
    * items [MdrUsageRecord](#mdrusagerecord)
  * start_date `string`
  * status `string` (values: PENDING, COMPLETE, FAILED, EXPIRED)
  * updated_at `string`

### MediaFeatures
* MediaFeatures `object`: The media features settings for a phone number.
  * accept_any_rtp_packets_enabled `boolean`: When enabled, Telnyx will accept RTP packets from any customer-side IP address and port, not just those to which Telnyx is sending RTP.
  * media_handling_mode `string` (values: default, proxy): Controls how media is handled for the phone number. default: media routed through Telnyx with transcode support. proxy: media routed through Telnyx with no transcode support.
  * rtp_auto_adjust_enabled `boolean`: When RTP Auto-Adjust is enabled, the destination RTP address port will be automatically changed to match the source of the incoming RTP packets.
  * t38_fax_gateway_enabled `boolean`: Controls whether Telnyx will accept a T.38 re-INVITE for this phone number. Note that Telnyx will not send a T.38 re-INVITE; this option only controls whether one will be accepted.

### MessagingFeatureSet
* MessagingFeatureSet `object`: The set of features available for a specific messaging use case (SMS or MMS). Features
  * domestic_two_way **required** `boolean`: Send messages to and receive messages from numbers in the same country.
  * international_inbound **required** `boolean`: Receive messages from numbers in other countries.
  * international_outbound **required** `boolean`: Send messages to numbers in other countries.

### MessagingHostedNumberOrder
* MessagingHostedNumberOrder `object`
  * id `string`: Resource unique identifier.
  * messaging_profile_id `string`: Automatically associate the number with this messaging profile ID when the order is complete.
  * phone_numbers `array`
    * items [HostedNumber](#hostednumber)
  * record_type `string`: Identifies the type of the resource.
  * status `string` (values: failed, pending, successful)

### MessagingProfile
* MessagingProfile `object`
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * enabled `boolean`: Specifies whether the messaging profile is enabled or not.
  * id `string`: Identifies the type of resource.
  * name `string`: A user friendly name for the messaging profile.
  * number_pool_settings [NumberPoolSettings](#numberpoolsettings)
  * record_type `string` (values: messaging_profile): Identifies the type of the resource.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.
  * url_shortener_settings [UrlShortenerSettings](#urlshortenersettings)
  * v1_secret `string`: Secret used to authenticate with v1 endpoints.
  * webhook_api_version `string` (values: 1, 2, 2010-04-01): Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.
  * webhook_failover_url `string`: The failover URL where webhooks related to this messaging profile will be sent if sending to the primary URL fails.
  * webhook_url `string`: The URL where webhooks related to this messaging profile will be sent.
  * whitelisted_destinations `array`: Destinations to which the messaging profile is allowed to send. If set to `null`, all destinations will be allowed. Setting a value of `["*"]` has the equivalent effect. The elements in the list must be valid ISO 3166-1 alpha-2 country codes.
    * items `string`: ISO 3166-1 alpha-2 country code.

### MessagingProfileDetailedMetric
* MessagingProfileDetailedMetric `object`
  * metrics `array`
    * items [MessagingProfileMessageTypeMetrics](#messagingprofilemessagetypemetrics)
  * timestamp `string`: The timestamp of the aggregated data.

### MessagingProfileDetailedMetrics
* MessagingProfileDetailedMetrics `object`
  * detailed `array`
    * items [MessagingProfileDetailedMetric](#messagingprofiledetailedmetric)
  * overview [MessagingProfileHighLevelMetrics](#messagingprofilehighlevelmetrics)

### MessagingProfileHighLevelMetrics
* MessagingProfileHighLevelMetrics `object`
  * inbound `object`
    * received `number`: The number of inbound messages received.
  * messaging_profile_id `string`: Identifies the type of resource.
  * outbound `object`
    * delivered `number`: The number of outbound messages successfully delivered.
    * error_ratio `number`: The ratio of messages sent that resulted in errors.
    * sent `number`: The number of outbound messages sent.
  * phone_numbers `number`: The number of phone numbers associated with the messaging profile.
  * record_type `string` (values: messaging_profile_metrics): Identifies the type of the resource.

### MessagingProfileMessageTypeMetrics
* MessagingProfileMessageTypeMetrics `object`
  * delivered `number`: The number of outbound messages successfully delivered.
  * label `string`: The metric type.
  * outbound_error_ratio `number`: The ratio of outbound messages sent that resulted in errors.
  * received `number`: The number of inbound messages received.
  * sent `number`: The number of outbound messages sent.

### MessagingUrlDomain
* MessagingUrlDomain `object`
  * id `string`
  * record_type `string`
  * url_domain `string`
  * use_case `string`

### Meta
* Meta `object`
  * page_number `integer`
  * page_size `integer`
  * total_pages `integer`
  * total_results `integer`

### Metadata
* Metadata `object`
  * page_number `number`: Current Page based on pagination settings (included when defaults are used.)
  * page_size `number`: Number of results to return per page based on pagination settings (included when defaults are used.)
  * total_pages `number`: Total number of pages based on pagination settings
  * total_results `number`: Total number of results

### MobileOperatorNetwork
* MobileOperatorNetwork `object`
  * country_code `string`: The mobile operator two-character (ISO 3166-1 alpha-2) origin country code.
  * id `string`: Identifies the resource.
  * mcc `string`: MCC stands for Mobile Country Code. It's a three decimal digit that identifies a country.<br/><br/>
  * mnc `string`: MNC stands for Mobile Network Code. It's a two to three decimal digits that identify a network.<br/><br/>
  * name `string`: The operator network name.
  * record_type `string`: Identifies the type of the resource.
  * tadig `string`: TADIG stands for Transferred Account Data Interchange Group. The TADIG code is a unique identifier for network operators in GSM mobile networks.

### MobileOperatorNetworkPreferencesRequest
* MobileOperatorNetworkPreferencesRequest `object`
  * mobile_operator_network_id `string`: The mobile operator network resource identification UUID.
  * priority `integer`: It determines what is the priority of a specific operator network that should be assumed by a SIM card when connecting to a network. The highest priority is 0, the second highest is 1 and so on.

### MobileOperatorNetworkPreferencesResponse
* MobileOperatorNetworkPreferencesResponse `object`
  * mobile_operator_network_id `string`: The mobile operator network resource identification UUID.
  * mobile_operator_network_name `string`: The mobile operator network resource name.
  * priority `integer`: It determines what is the priority of a specific operator network that should be assumed by a SIM card when connecting to a network. The highest priority is 0, the second highest is 1 and so on.

### MobileOperatorNetworksPreferencesRequest
* MobileOperatorNetworksPreferencesRequest `array`: A list of mobile operator networks and the priority that should be applied when the SIM is connecting to the network.
  * items [MobileOperatorNetworkPreferencesRequest](#mobileoperatornetworkpreferencesrequest)

### MobileOperatorNetworksPreferencesResponse
* MobileOperatorNetworksPreferencesResponse `array`: A list of mobile operator networks and the priority that should be applied when the SIM is connecting to the network.
  * items [MobileOperatorNetworkPreferencesResponse](#mobileoperatornetworkpreferencesresponse)

### MultipleOutboundVoiceProfiles
* MultipleOutboundVoiceProfiles `object`
  * data `array`
    * items [OutboundVoiceProfile](#outboundvoiceprofile)
  * meta [PaginationMeta](#paginationmeta)

### NewBillingGroup
* NewBillingGroup `object`
  * name `string`: A name for the billing group

### NewLedgerBillingGroupReport
* NewLedgerBillingGroupReport `object`
  * month `integer`: Month of the ledger billing group report
  * year `integer`: Year of the ledger billing group report

### NotificationChannel
* NotificationChannel `object`: A Notification Channel
  * channel_destination `string`: The destination associated with the channel type.
  * channel_type_id `string` (values: sms, voice, email, webhook): A Channel Type ID
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * id `string`: A UUID.
  * notification_profile_id `string`: A UUID reference to the associated Notification Profile.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### NotificationEvent
* NotificationEvent `object`: An object representing the available notifications.
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * enabled `boolean`
  * id `string`: A UUID.
  * name `string`: A human readable name.
  * notification_category `string`
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### NotificationEventCondition
* NotificationEventCondition `object`
  * parameters `array`
    * items `object`
      * data_type `string`
      * name `string`
      * optional `boolean`
  * allow_multiple_channels `boolean`: Dictates whether a notification channel id needs to be provided when creating a notficiation setting.
  * associated_record_type `string` (values: account, phone_number)
  * asynchronous `boolean`: Dictates whether a notification setting will take effect immediately.
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * description `string`
  * enabled `boolean`
  * id `string`: A UUID.
  * name `string`
  * notification_event_id `string`
  * supported_channels `array`: Dictates the supported notification channel types that can be emitted.
    * items `string`
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### NotificationProfile
* NotificationProfile `object`: A Collection of Notification Channels
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * id `string`: A UUID.
  * name `string`: A human readable name.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### NotificationSetting
* NotificationSetting `object`
  * parameters `array`
    * items `object`
      * name `string`
      * value `string`
  * associated_record_type `string`
  * associated_record_type_value `string`
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * id `string`: A UUID.
  * notification_channel_id `string`: A UUID reference to the associated Notification Channel.
  * notification_event_condition_id `string`: A UUID reference to the associated Notification Event Condition.
  * notification_profile_id `string`: A UUID reference to the associated Notification Profile.
  * status `string` (values: enabled, enable-received, enable-pending, enable-submtited, delete-received, delete-pending, delete-submitted, deleted): Most preferences apply immediately; however, other may needs to propagate.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### NumberHealthMetrics
* NumberHealthMetrics `object`: High level health metrics about the number and it's messaging sending patterns.
  * inbound_outbound_ratio **required** `number`: The ratio of messages received to the number of messages sent.
  * message_count **required** `integer`: The number of messages analyzed for the health metrics.
  * spam_ratio **required** `number`: The ratio of messages blocked for spam to the number of messages attempted.
  * success_ratio **required** `number`: The ratio of messages sucessfully delivered to the number of messages attempted.

### NumberLookupRecord
* NumberLookup `object`
  * caller_name [CallerName](#callername)
  * carrier [Carrier](#carrier)
  * country_code `string`: Region code that matches the specific country calling code
  * fraud `string`: Unused
  * national_format `string`: Hyphen-separated national number, preceded by the national destination code (NDC), with a 0 prefix, if an NDC is found
  * phone_number `string`: E164-formatted phone number
  * portability [Portability](#portability)
  * record_type `string`: Identifies the type of record

### NumberOrder
* NumberOrder `object`
  * connection_id `string`: Identifies the connection associated with this phone number.
  * created_at `string`: An ISO 8901 datetime string denoting when the number order was created.
  * customer_reference `string`: A customer reference string for customer look ups.
  * id `string`
  * messaging_profile_id `string`: Identifies the messaging profile associated with the phone number.
  * phone_numbers `array`
    * items [PhoneNumber](#phonenumber)
  * phone_numbers_count `integer`: The count of phone numbers in the number order.
  * record_type `string`
  * requirements_met `boolean`: True if all requirements are met for every phone number, false otherwise.
  * status `string` (values: pending, success, failure): The status of the order.
  * updated_at `string`: An ISO 8901 datetime string for when the number order was updated.

### NumberOrderDocument
* NumberOrderDocument `object`
  * created_at `string`: An ISO 8901 datetime string denoting when the number order document was uploaded.
  * customer_reference `string`: A customer reference string for customer look ups.
  * file_id `string`: The id of the file to associate as a number order document.
  * id `string`
  * record_type `string`
  * requirement_type `string` (values: address_proof, identification, reg_form)
  * requirements_id `string`: Unique id for a requirement.

### NumberOrdered
* Number Order Event Data `object`
  * event_type `string`: The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * payload [NumberOrder](#numberorder)
  * record_type `string` (values: event): Identifies the type of the resource.

### NumberOrderedEvent
* Number Order Event `object`
  * data [NumberOrdered](#numberordered)

### NumberPoolSettings
* NumberPoolSettings `object`: Number Pool allows you to send messages from a pool of numbers of different types, assigning
  * geomatch `boolean`: If set to true, Number Pool will try to choose a sending number with the same area code as the destination
  * long_code_weight **required** `number`: Defines the probability weight for a Long Code number to be selected when sending a message.
  * skip_unhealthy **required** `boolean`: If set to true all unhealthy numbers will be automatically excluded from the pool.
  * sticky_sender `boolean`: If set to true, Number Pool will try to choose the same sending number for all messages to a particular
  * toll_free_weight **required** `number`: Defines the probability weight for a Toll Free number to be selected when sending a message.

### NumberReservation
* NumberReservation `object`
  * created_at `string`: An ISO 8901 datetime string denoting when the numbers reservation was created.
  * customer_reference `string`: A customer reference string for customer look ups.
  * id `string`
  * phone_numbers `array`
    * items [ReservedPhoneNumber](#reservedphonenumber)
  * record_type `string`
  * status `string` (values: pending, success, failure): The status of the entire reservation.
  * updated_at `string`: An ISO 8901 datetime string for when the number reservation was updated.

### OutboundIp
* Outband Ip `object`
  * ani_override `string`: Set a phone number as the ani_override value to override caller id number on outbound calls.
  * ani_override_type `string` (values: always, normal, emergency): Specifies when we apply your ani_override setting. Only applies when ani_override is not blank.
  * call_parking_enabled `boolean`: Forces all SIP calls originated on this connection to be "parked" instead of "bridged" to the destination specified on the URI. Parked calls will return ringback to the caller and will await for a Call Control command to define which action will be taken next.
  * channel_limit `integer`: When set, this will limit the total number of outbound calls to phone numbers associated with this connection.
  * generate_ringback_tone `boolean`: Generate ringback tone through 183 session progress message with early media.
  * instant_ringback_enabled `boolean`: When set, ringback will not wait for indication before sending ringback tone to calling party.
  * ip_authentication_method `string` (values: tech-prefixp-charge-info, token)
  * ip_authentication_token `string`
  * localization `string`: A 2-character country code specifying the country whose national dialing rules should be used. For example, if set to `US` then any US number can be dialed without preprending +1 to the number. When left blank, Telnyx will try US and GB dialing rules, in that order, by default.
  * outbound_voice_profile_id [OutboundVoiceProfileId](#outboundvoiceprofileid)
  * t38_reinvite_source `string` (values: telnyx, customer, disabled, passthru, caller-passthru, callee-passthru): This setting only affects connections with Fax-type Outbound Voice Profiles. The setting dictates whether or not Telnyx sends a t.38 reinvite.<br/><br/> By default, Telnyx will send the re-invite. If set to `customer`, the caller is expected to send the t.38 reinvite.
  * tech_prefix `string`: Numerical chars only, exactly 4 characters.

### OutboundMessage
* OutboundMessage `object`
  * event_type `string` (values: message.sent, message.finalized): The type of event being delivered.
  * id `string`: Identifies the type of resource.
  * occurred_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * payload [OutboundMessagePayload](#outboundmessagepayload)
  * record_type `string` (values: event): Identifies the type of the resource.

### OutboundMessageEvent
* OutboundMessageEvent `object`
  * data [OutboundMessage](#outboundmessage)

### OutboundMessagePayload
* OutboundMessagePayload `object`
  * tags `array`: Tags associated with the resource.
    * items `string`
  * completed_at `string`: ISO 8601 formatted date indicating when the message was finalized.
  * cost `object`
    * amount `string`: The amount deducted from your account.
    * currency `string`: The ISO 4217 currency identifier.
  * direction `string` (values: outbound): The direction of the message. Inbound messages are sent to you whereas outbound messages are sent from you.
  * encoding `string`: Encoding scheme used for the message body.
  * errors `array`: These errors may point at addressees when referring to unsuccessful/unconfirmed delivery statuses.
    * items [Error](#error)
  * from `object`
    * carrier `string`: The carrier of the receiver.
    * line_type `string` (values: Wireline, Wireless, VoWiFi, VoIP, Pre-Paid Wireless, ): The line-type of the receiver.
    * phone_number `string`: Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).
  * id `string`: Identifies the type of resource.
  * media `array`
    * items `object`
      * content_type `string`: The MIME type of the requested media.
      * sha256 `string`: The SHA256 hash of the requested media.
      * size `integer`: The size of the requested media.
      * url `string`: The url of the media requested to be sent.
  * messaging_profile_id `string`: Unique identifier for a messaging profile.
  * parts `integer`: Number of parts into which the message's body must be split.
  * received_at `string`: ISO 8601 formatted date indicating when the message request was received.
  * record_type `string` (values: message): Identifies the type of the resource.
  * sent_at `string`: ISO 8601 formatted date indicating when the message was sent.
  * subject `string`: Subject of multimedia message
  * text `string`: Message body (i.e., content) as a non-empty string.
  * to `array`
    * items `object`
      * carrier `string`: The carrier of the receiver.
      * line_type `string` (values: Wireline, Wireless, VoWiFi, VoIP, Pre-Paid Wireless, ): The line-type of the receiver.
      * phone_number `string`: Receiving address (+E.164 formatted phone number or short code).
      * status `string` (values: queued, sending, sent, expired, sending_failed, delivery_unconfirmed, delivered, delivery_failed): The delivery status of the message.
  * type `string` (values: SMS, MMS): The type of message.
  * valid_until `string`: Message must be out of the queue by this time or else it will be discarded and marked as 'sending_failed'. Once the message moves out of the queue, this field will be nulled
  * webhook_failover_url `string`: The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.
  * webhook_url `string`: The URL where webhooks related to this message will be sent.

### OutboundVoiceProfile
* Outbound Voice Profile `object`
  * tags `array`
    * items `string`
  * billing_group_id `string`: The ID of the billing group associated with the outbound proflile. Defaults to null (for no group assigned).
  * call_recording `object`
    * call_recording_caller_phone_numbers `array`: When call_recording_type is 'by_caller_phone_number', only outbound calls using one of these numbers will be recorded. Numbers must be specified in E164 format.
      * items `string`
    * call_recording_channels `string` (values: single, dual): When using 'dual' channels, the final audio file will be a stereo recording with the first leg on channel A, and the rest on channel B.
    * call_recording_format `string` (values: wav, mp3): The audio file format for calls being recorded.
    * call_recording_type `string` (values: all, none, by_call_phone_number): Specifies which calls are recorded.
  * concurrent_call_limit `integer`: Must be no more than your global concurrent call limit. Null means no limit.
  * connections_count `integer`: Amount of connections associated with this outbound voice profile.
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * daily_spend_limit `string`: The maximum amount of usage charges, in USD, you want Telnyx to allow on this outbound voice profile in a day before disallowing new calls.
  * daily_spend_limit_enabled `boolean`: Specifies whether to enforce the daily_spend_limit on this outbound voice profile.
  * enabled `boolean`: Specifies whether the outbound voice profile can be used. Disabled profiles will result in outbound calls being blocked for the associated Connections.
  * id `string`: Identifies the resource.
  * max_destination_rate `number`: Maximum rate (price per minute) for a Destination to be allowed when making outbound calls.
  * name `string`: A user-supplied name to help with organization.
  * record_type `string`: Identifies the type of the resource.
  * service_plan `string` (values: us, international, global): Indicates the coverage of the termination regions. International and Global are the same but International may only be used for high volume/short duration Outbound Voice Profiles.
  * traffic_type `string` (values: conversational, short_duration): Specifies the type of traffic allowed in this profile.
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.
  * usage_payment_method `string` (values: tariff, rate-deck): Setting for how costs for outbound profile are calculated.
  * whitelisted_destinations `array`: The list of destinations you want to be able to call using this outbound voice profile formatted in alpha2.
    * items `string`

### OutboundVoiceProfileId
* Outbound Voice Profile ID `string`: Identifies the associated outbound voice profile.

### OutboundVoiceProfileWritable
* Outbound Voice Profile `object`
  * tags `array`
    * items `string`
  * billing_group_id `string`: The ID of the billing group associated with the outbound proflile. Defaults to null (for no group assigned).
  * call_recording `object`
    * call_recording_caller_phone_numbers `array`: When call_recording_type is 'by_caller_phone_number', only outbound calls using one of these numbers will be recorded. Numbers must be specified in E164 format.
      * items `string`
    * call_recording_channels `string` (values: single, dual): When using 'dual' channels, the final audio file will be a stereo recording with the first leg on channel A, and the rest on channel B.
    * call_recording_format `string` (values: wav, mp3): The audio file format for calls being recorded.
    * call_recording_type `string` (values: all, none, by_call_phone_number): Specifies which calls are recorded.
  * concurrent_call_limit `integer`: Must be no more than your global concurrent call limit. Null means no limit.
  * daily_spend_limit `string`: The maximum amount of usage charges, in USD, you want Telnyx to allow on this outbound voice profile in a day before disallowing new calls.
  * daily_spend_limit_enabled `boolean`: Specifies whether to enforce the daily_spend_limit on this outbound voice profile.
  * enabled `boolean`: Specifies whether the outbound voice profile can be used. Disabled profiles will result in outbound calls being blocked for the associated Connections.
  * max_destination_rate `number`: Maximum rate (price per minute) for a Destination to be allowed when making outbound calls.
  * name `string`: A user-supplied name to help with organization.
  * service_plan `string` (values: us, international, global): Indicates the coverage of the termination regions. International and Global are the same but International may only be used for high volume/short duration Outbound Voice Profiles.
  * traffic_type `string` (values: conversational, short_duration): Specifies the type of traffic allowed in this profile.
  * usage_payment_method `string` (values: tariff, rate-deck): Setting for how costs for outbound profile are calculated.
  * whitelisted_destinations `array`: The list of destinations you want to be able to call using this outbound voice profile formatted in alpha2.
    * items `string`

### PaginationMeta
* PaginationMeta `object`
  * page_number `integer`
  * page_size `integer`
  * total_pages `integer`
  * total_results `integer`

### PaginationMetaSimple
* PaginationMetaSimple `object`
  * page_number `integer`
  * page_size `integer`
  * total_pages `integer`
  * total_results `integer`

### Participant
* Participant `object`
  * call_control_id **required** `string`: Call Control ID associated with the partiipant of the conference
  * call_leg_id **required** `string`: Uniquely identifies the call leg associated with the participant
  * conference **required** `object`: Info about the conference that the participant is in
    * id `string`: Uniquely identifies the conference
    * name `string`: Name of the conference
  * created_at **required** `string`: ISO 8601 formatted date of when the participant was created
  * end_conference_on_exit **required** `boolean`: Whether the conference will end and all remaining participants be hung up after the participant leaves the conference.
  * id **required** `string`: Uniquely identifies the participant
  * muted **required** `boolean`: Whether the participant is muted.
  * on_hold **required** `boolean`: Whether the participant is put on_hold.
  * record_type **required** `string` (values: participant)
  * soft_end_conference_on_exit **required** `boolean`: Whether the conference will end after the participant leaves the conference.
  * status **required** `string` (values: joining, joined, left): The status of the participant with respect to the lifecycle within the conference
  * updated_at **required** `string`: ISO 8601 formatted date of when the participant was last updated
  * whisper_call_control_ids **required** `array`: Array of unique call_control_ids the participant can whisper to..
    * items `string`

### PauseRecordingRequest
* Pause Recording Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.

### PhoneNumber
* PhoneNumber `object`
  * id `string`
  * phone_number `string`
  * record_type `string`
  * regulatory_group_id `string`
  * regulatory_requirements `array`
    * items [PhoneNumberRegulatoryRequirement](#phonenumberregulatoryrequirement)
  * requirements_met `boolean`: True if all requirements are met for a phone number, false otherwise.
  * status `string` (values: pending, success, failure): The status of the phone number in the order.

### PhoneNumberDetailed
* PhoneNumberDetailed `object`
  * tags `array`: A list of user-assigned tags to help manage the phone number.
    * items `string`
  * billing_group_id `string`: Identifies the billing group associated with the phone number.
  * call_forwarding_enabled `boolean`: Indicates if call forwarding will be enabled for this number if forwards_to and forwarding_type are filled in. Defaults to true for backwards compatibility with APIV1 use of numbers endpoints.
  * call_recording_enabled `boolean`: Indicates whether call recording is enabled for this number.
  * caller_id_name_enabled `boolean`: Indicates whether caller ID is enabled for this number.
  * cnam_listing_enabled `boolean`: Indicates whether a CNAM listing is enabled for this number.
  * connection_id `string`: Identifies the connection associated with the phone number.
  * connection_name `string`: The user-assigned name of the connection to be associated with this phone number.
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * customer_reference `string`: A customer reference string for customer look ups.
  * emergency_address_id `string`: Identifies the emergency address associated with the phone number.
  * emergency_enabled `boolean`: Indicates whether emergency services are enabled for this number.
  * external_pin `string`: If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, Telnyx will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.
  * id [IntId](#intid)
  * messaging_profile_id `string`: Identifies the messaging profile associated with the phone number.
  * messaging_profile_name `string`: The name of the messaging profile associated with the phone number.
  * phone_number `string`: The +E.164-formatted phone number associated with this record.
  * purchased_at `string`: ISO 8601 formatted date indicating when the resource was purchased.
  * record_type `string`: Identifies the type of the resource.
  * status `string` (values: purchase-pending, purchase-failed, port-pending, port-failed, active, deleted, emergency-only, ported-out, port-out-pending): The phone number's current status.
  * t38_fax_gateway_enabled `boolean`: Indicates whether T38 Fax Gateway for inbound calls to this number.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### PhoneNumberEnableEmergencyRequest
* PhoneNumberEnableEmergencyRequest `object`
  * emergency_address_id **required** `string`: Identifies the address to be used with emergency services.
  * emergency_enabled **required** `boolean`: Indicates whether to enable emergency services on this number.

### PhoneNumberRegulatoryGroup
* PhoneNumberRegulatoryGroup `object`
  * phone_number `string`
  * record_type `string`
  * regulatory_group_id `string`
  * regulatory_requirements `array`
    * items [RegulatoryRequirement](#regulatoryrequirement)

### PhoneNumberRegulatoryRequirement
* PhoneNumberRegulatoryRequirement `object`
  * field_type `string` (values: string, datetime, address_id, number_order_document_id)
  * field_value `string`: The value of the requirement, this could be an id to a resource or a string value.
  * record_type `string`
  * requirement_id `string`: Unique id for a requirement.

### PhoneNumberWithMessagingSettings
* PhoneNumberWithMessagingSettings `object`
  * country_code `string`: ISO 3166-1 alpha-2 country code.
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * eligible_messaging_products `array`: The messaging products that this number can be registered to use
    * items `string`
  * features `object`
    * mms [MessagingFeatureSet](#messagingfeatureset)
    * sms [MessagingFeatureSet](#messagingfeatureset)
  * health [NumberHealthMetrics](#numberhealthmetrics)
  * id `string`: Identifies the type of resource.
  * messaging_product `string`: The messaging product that the number is registered to use
  * messaging_profile_id `string`: Unique identifier for a messaging profile.
  * phone_number `string`: +E.164 formatted phone number.
  * record_type `string` (values: messaging_phone_number, messaging_settings): Identifies the type of the resource.
  * traffic_type `string`: The messaging traffic or use case for which the number is currently configured.
  * type `string` (values: long-code, toll-free, short-code, longcode, tollfree, shortcode): The type of the phone number
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### PhoneNumberWithVoiceSettings
* PhoneNumberWithVoiceSettings `object`
  * call_forwarding [CallForwarding](#callforwarding)
  * call_recording [CallRecording](#callrecording)
  * cnam_listing [CnamListing](#cnamlisting)
  * connection_id `string`: Identifies the connection associated with this phone number.
  * customer_reference `string`: A customer reference string for customer look ups.
  * emergency [EmergencySettings](#emergencysettings)
  * id `string`: Identifies the type of resource.
  * media_features [MediaFeatures](#mediafeatures)
  * phone_number `string`: The phone number in +E164 format.
  * record_type `string`: Identifies the type of the resource.
  * tech_prefix_enabled `boolean`: Controls whether a tech prefix is enabled for this phone number.
  * translated_number `string`: This field allows you to rewrite the destination number of an inbound call before the call is routed to you. The value of this field may be any alphanumeric value, and the value will replace the number originally dialed.
  * usage_payment_method `string` (values: pay-per-minute, channel): Controls whether a number is billed per minute or uses your concurrent channels.

### PlayAudioUrlRequest
* Play Audio URL Request `object`
  * audio_url **required** `string`: The URL of the file to be played back on the call. The URL can point to either a WAV or MP3 file.
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * loop [Loopcount](#loopcount)
  * overlay `boolean`: When enabled, audio will be mixed on top of any other audio that is actively being played back. Note that `overlay: true` will only work if there is another audio file already being played on the call.
  * stop `string`: When specified, it stops the current audio being played.  Specify `current` to stop the current audio being played, and to play the next file in the queue. Specify `all` to stop the current audio file being played and to also clear all audio files from the queue.
  * target_legs `string`: Specifies the leg or legs on which audio will be played. If supplied, the value must be either `self`, `opposite` or `both`.

### PlaybackStopRequest
* Playback Stop Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * stop `string`: Use `current` to stop only the current audio or `all` to stop all audios in the queue.

### Portability
* Portability `object`
  * altspid `string`: Alternative SPID (Service Provider ID). Often used when a carrier is using a number from another carrier
  * altspid_carrier_name `string`: Alternative service provider name
  * altspid_carrier_type `string`: Alternative service provider type
  * city `string`: City name extracted from the locality in the Local Exchange Routing Guide (LERG) database
  * line_type `string`: Type of number
  * lrn `string`: Local Routing Number, if assigned to the requested phone number
  * ocn `string`: Operating Company Name (OCN) as per the Local Exchange Routing Guide (LERG) database
  * ported_date `string`: ISO-formatted date when the requested phone number has been ported
  * ported_status `string` (values: Y, N): Indicates whether or not the requested phone number has been ported
  * spid `string`: SPID (Service Provider ID)
  * spid_carrier_name `string`: Service provider name
  * spid_carrier_type `string`: Service provider type
  * state `string`

### PortabilityCheckDetails
* PortabilityCheckDetails `object`
  * fast_portable `boolean`: Indicates whether this phone number is FastPort eligible
  * not_portable_reason `string`: If this phone number is not portable, explains why. Empty string if the number is portable.
  * phone_number `string`: The +E.164 formatted phone number this result is about
  * portable `boolean`: Indicates whether this phone number is portable
  * record_type `string`: Identifies the type of the resource.

### PortoutComment
* PortoutComment `object`
  * body **required** `string`: Comment body
  * created_at **required** `string`: Comment creation timestamp in ISO 8601 format
  * id **required** `string`
  * portout_id `string`: Identifies the associated port request
  * record_type `string`: Identifies the type of the resource.
  * user_id **required** `string`: Identifies the user who created the comment. Will be null if created by Telnyx Admin

### PortoutDetails
* PortoutDetails `object`
  * carrier_name `string`: Carrier the number will be ported out to
  * created_at `string`: ISO 8601 formatted date of when the portout was created
  * foc_date `string`: ISO 8601 formatted Date/Time of the FOC date
  * id `string`
  * phone_numbers `array`: Phone numbers associated with this portout
    * items `string`: E164 formatted phone number
  * record_type `string`: Identifies the type of the resource.
  * requested_foc_date `string`: ISO 8601 formatted Date/Time of the user requested FOC date
  * spid `string`: New service provider spid
  * status `string` (values: pending, authorized, ported, rejected): Status of portout request
  * updated_at `string`: ISO 8601 formatted date of when the portout was last updated

### Recording
* Recording `object`
  * call_leg_id `string`: If a call recording, uniquely identifies the recorded call leg
  * call_session_id `string`: If a call recording, uniquely identifies the recorded call session
  * channels **required** `string` (values: single, dual): When `dual`, final audio file has the first leg on channel A, and the rest on channel B.
  * conference_id `string`: If a conference recording, uniquely identifies the recorded conference
  * created_at **required** `string`: ISO 8601 formatted date of when the recording was created
  * download_urls **required** `object`: The links to download the recording files
    * mp3 `string`: Link to download the recording in mp3 format
    * wav `string`: Link to download the recording in wav format
  * duration_millis **required** `integer`: The duration of the recording in milliseconds
  * id **required** `string`: Uniquely identifies the recording
  * record_type **required** `string` (values: recording)
  * recording_ended_at **required** `string`: ISO 8601 formatted date of when the recording ended
  * recording_started_at **required** `string`: ISO 8601 formatted date of when the recording started
  * source **required** `string` (values: conference, call): The kind of event that led to this recording being created
  * status **required** `string` (values: completed): The status of the recording. Only resources for `completed` recordings are currently supported
  * updated_at **required** `string`: ISO 8601 formatted date of when the recording was last updated

### ReferRequest
* Refer request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
  * custom_headers `array`: Custom headers to be added to the SIP INVITE.
    * items [CustomSipHeader](#customsipheader)
  * sip_address **required** `string`: The SIP URI to which the call will be referred to.
  * sip_auth_password `string`: SIP Authentication password used for SIP challenges.
  * sip_auth_username `string`: SIP Authentication username used for SIP challenges.

### RegionInformation
* RegionInformation `object`
  * region_name `string`
  * region_type `string` (values: country_code, rate_center, state, location)

### RegulatoryRequirement
* RegulatoryRequirement `object`
  * description `string`
  * field_type `string` (values: file upload, text field, address, datetime)
  * label `string`
  * record_type `string`: Identifies the type of the resource.
  * requirement_type `string` (values: end user proof of address, entity identification, end user address)

### RegulatoryRequirementCriteria
* RegulatoryRequirementCriteria `object`
  * criteria_type `string` (values: country, phone_number_type)
  * criteria_value `string`
  * record_type `string`

### RejectRequest
* Reject Request `object`
  * cause **required** `string` (values: CALL_REJECTED, USER_BUSY): Cause for call rejection.
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.

### ReplacedLinkClick
* ReplacedLinkClick `object`
  * message_id `string`: The message ID associated with the clicked link.
  * record_type `string`: Identifies the type of the resource.
  * time_clicked `string`: ISO 8601 formatted date indicating when the message request was received.
  * to `string`: Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).
  * url `string`: The original link that was sent in the message.

### ReplacedLinkClickEvent
* ReplacedLinkClickEvent `object`
  * data [ReplacedLinkClick](#replacedlinkclick)

### ReservedPhoneNumber
* ReservedPhoneNumber `object`
  * created_at `string`: An ISO 8901 datetime string denoting when the individual number reservation was created.
  * errors `string`: Errors the reservation could happen upon
  * expired_at `string`: An ISO 8901 datetime string for when the individual number reservation is going to expire
  * id `string`
  * phone_number `string`
  * record_type `string`
  * status `string` (values: pending, success, failure): The status of the phone number's reservation.
  * updated_at `string`: An ISO 8901 datetime string for when the the individual number reservation was updated.

### ResumeRecordingRequest
* Pause Recording Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.

### RetrieveVerificationResponse
* RetrieveVerifyVerificationResponse `object`
  * data **required** [Verification](#verification)

### SIMCard
* SIMCard `object`
  * tags `array`: Searchable tags associated with the SIM card
    * items `string`
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * iccid `string`: The ICCID is the identifier of the specific SIM card/chip. Each SIM is internationally identified by its integrated circuit card identifier (ICCID). ICCIDs are stored in the SIM card's memory and are also engraved or printed on the SIM card body during a process called personalization.
  * id `string`: Identifies the resource.
  * imsi `string`: SIM cards are identified on their individual operator networks by a unique International Mobile Subscriber Identity (IMSI). <br/>
  * ipv4 `string`: The SIM's address in the currently connected network. This IPv4 address is usually obtained dynamically, so it may vary according to the location or new connections.
  * ipv6 `string`: The SIM's address in the currently connected network. This IPv6 address is usually obtained dynamically, so it may vary according to the location or new connections.
  * msisdn `string`: Mobile Station International Subscriber Directory Number (MSISDN) is a number used to identify a mobile phone number internationally. <br/>
  * record_type `string`
  * sim_card_group_id `string`: The group SIMCardGroup identification. This attribute can be <code>null</code> when it's present in an associated resource.
  * status `string` (values: registering, enabling, enabled, disabling, disabled, data_limit_exceeded): The current status of the SIM card. It will be one of the following: <br/>
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### SIMCardGroup
* SIMCardGroup `object`
  * consumed_data [ConsumedData](#consumeddata)
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * data_enabled `boolean`: It toggles data consumption on all SIM cards in a group. <br/><br/> It's important to note that the data_limit will be respected even though this attribute is set to `true`.
  * data_limit `integer`: Upper limit on the amount of data the SIM cards, within the group, can use.
  * default `boolean`: Indicates whether the SIM card group is the users default group.<br/>The default group is created for the user and can not be removed.
  * id `string`: Identifies the resource.
  * name `string`: A user friendly name for the SIM card group.
  * record_type `string`: Identifies the type of the resource.
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### SIMCardGroupCreate
* SIMCardGroupCreate `object`
  * data_enabled `boolean`: It enables or not data consumption on all SIM cards in a group. <br/><br/> It's important to note that the data_limit will be respected even though this attribute is set to `true`.
  * data_limit `integer`: Upper limit on the amount of data the SIM cards, within the group, can use.
  * name **required** `string`: A user friendly name for the SIM card group.

### SIMCardGroupPatch
* SIMCardGroupPatch `object`
  * data_enabled `boolean`: It enables or not data consumption on all SIM cards in a group. <br/><br/> It's important to note that the data_limit will be respected even though this attribute is set to `true`.
  * data_limit `integer`: Upper limit on the amount of data the SIM cards, within the group, can use.
  * name `string`: A user friendly name for the SIM card group.

### SIMCardNetworkPreference
* SIMCardNetworkPreference `object`
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * mobile_operator_networks_preferences [MobileOperatorNetworksPreferencesResponse](#mobileoperatornetworkspreferencesresponse)
  * record_type `string`
  * sim_card_id `string`
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### SIMCardNetworkPreferenceWithOTAUpdates
* SIMCardNetworkPreferenceWithOTAUpdates `object`
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * mobile_operator_networks_preferences [MobileOperatorNetworksPreferencesResponse](#mobileoperatornetworkspreferencesresponse)
  * ota_updates `array`
    * items [CompleteOTAUpdate](#completeotaupdate)
  * record_type `string`
  * sim_card_id `string`
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### SIMCardPublicIP
* SIMCardPublicIP `object`
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * ip `string`: The provisioned IP address. This attribute will only be available when underlying resource status is in a "provisioned" status.
  * record_type `string`
  * sim_card_id `string`
  * status [SIMCardPublicIPStatus](#simcardpublicipstatus)
  * type `string` (values: ipv4)
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### SIMCardPublicIPStatus
* SIMCardPublicIPStatus `object`: The current status of the SIM card's public IP. <ul>
  * code `string`: This attribute is an [error code](https://developers.telnyx.com/docs/api/v2/overview#errors) related to the failure reason.
  * description `string`: This attribute provides a human-readable explanation of why a failure happened.
  * value `string` (values: provisioning, provisioned, failed)

### SIMCardRegistration
* SIMCardRegistration `object`
  * tags `array`: Searchable tags associated with the SIM card
    * items `string`
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * iccid `string`: The ICCID is the identifier of the specific SIM card/chip. Each SIM is internationally identified by its integrated circuit card identifier (ICCID). ICCIDs are stored in the SIM card's memory and are also engraved or printed on the SIM card body during a process called personalization.
  * id `string`: Identifies the resource.
  * imsi `string`: SIM cards are identified on their individual operator networks by a unique International Mobile Subscriber Identity (IMSI). <br/>
  * ipv4 `string`: The SIM's address in the currently connected network. This IPv4 address is usually obtained dynamically, so it may vary according to the location or new connections.
  * ipv6 `string`: The SIM's address in the currently connected network. This IPv6 address is usually obtained dynamically, so it may vary according to the location or new connections.
  * msisdn `string`: Mobile Station International Subscriber Directory Number (MSISDN) is a number used to identify a mobile phone number internationally. <br/>
  * record_type `string`
  * registration_codes `array`
    * items `string`
  * sim_card_group_id `string`: The group SIMCardGroup identification. This attribute can be <code>null</code> when it's present in an associated resource.
  * status `string` (values: registering, enabling, enabled, disabling, disabled, data_limit_exceeded): The current status of the SIM card. It will be one of the following: <br/>
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### SendDTMFRequest
* Send DTMF Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * digits **required** `string`: DTMF digits to send. Valid digits are 0-9, A-D, *, and #. Pauses can be added using w (0.5s) and W (1s).
  * duration_millis `integer`: Specifies for how many milliseconds each digit will be played in the audio stream. Ranges from 100 to 500ms

### SendFaxRequest
* Send fax request `object`
  * connection_id **required** `string`: The connection ID to send the fax with.
  * from `string`: The phone number, in E.164 format, the fax will be sent from.
  * media_url **required** `string`: The URL to the PDF used for the fax's media.
  * quality `string`: The quality of the fax. Can be normal, high, very_high
  * to **required** `string`: The phone number, in E.164 format, the fax will be sent to or SIP URI

### ShortCode
* ShortCode `object`
  * country_code `string`: ISO 3166-1 alpha-2 country code.
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * id `string`: Identifies the type of resource.
  * messaging_profile_id **required** `string`: Unique identifier for a messaging profile.
  * record_type `string` (values: short_code): Identifies the type of the resource.
  * short_code `string`: Short digit sequence used to address messages.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.

### SimpleSIMCard
* SIMCard `object`
  * tags `array`: Searchable tags associated with the SIM card
    * items `string`
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * iccid `string`: The ICCID is the identifier of the specific SIM card/chip. Each SIM is internationally identified by its integrated circuit card identifier (ICCID). ICCIDs are stored in the SIM card's memory and are also engraved or printed on the SIM card body during a process called personalization.
  * id `string`: Identifies the resource.
  * imsi `string`: SIM cards are identified on their individual operator networks by a unique International Mobile Subscriber Identity (IMSI). <br/>
  * msisdn `string`: Mobile Station International Subscriber Directory Number (MSISDN) is a number used to identify a mobile phone number internationally. <br/>
  * record_type `string`
  * sim_card_group_id `string`: The group SIMCardGroup identification. This attribute can be <code>null</code> when it's present in an associated resource.
  * status `string` (values: registering, enabling, enabled, disabling, disabled, data_limit_exceeded): The current status of the SIM card. It will be one of the following: <br/>
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### SimplifiedOTAUpdate
* OTAUpdate `object`: This object represents an Over the Air (OTA) update request. It allows tracking the current status of a operation that apply settings in a particular SIM card. <br/><br/>
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * id `string`: Identifies the resource.
  * record_type `string`
  * sim_card_id `string`: The indentification UUID of the related SIM card resource.
  * status `string` (values: in-progress, completed, failed)
  * type `string` (values: sim_card_network_preferences): Represents the type of the operation requested. This will relate directly to the source of the request.
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### SingleOutboundVoiceProfile
* SingleOutboundVoiceProfile `object`
  * data [OutboundVoiceProfile](#outboundvoiceprofile)

### SpeakRequest
* Speak Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * language **required** `string` (values: arb, cmn-CN, cy-GB, da-DK, de-DE, en-AU, en-GB, en-GB-WLS, en-IN, en-US, es-ES, es-MX, es-US, fr-CA, fr-FR, hi-IN, is-IS, it-IT, ja-JP, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sv-SE, tr-TR): The language you want spoken.
  * payload **required** `string`: The text or SSML to be converted into speech. There is a 5,000 character limit.
  * payload_type `string` (values: text, ssml): The type of the provided payload. The payload can either be plain text, or Speech Synthesis Markup Language (SSML).
  * service_level `string` (values: basic, premium): This parameter impacts speech quality, language options and payload types. When using `basic`, only the `en-US` language and payload type `text` are allowed.
  * stop `string`: When specified, it stops the current audio being played.  Specify `current` to stop the current audio being played, and to play the next file in the queue. Specify `all` to stop the current audio file being played and to also clear all audio files from the queue.
  * voice **required** `string` (values: male, female): The gender of the voice used to speak back the text.

### StartForkingRequest
* Start Forking Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * rx `string`: The network target, <udp:ip_address:port>, where the call's incoming RTP media packets should be forwarded.
  * stream_type `string` (values: raw, decrypted): Optionally specify a media type to stream. If `decrpyted` selected, Telnyx will decrypt incoming SIP media before forking to the target. `rx` and `tx` are required fields if `decrypted` selected.
  * target `string`: The network target, <udp:ip_address:port>, where the call's RTP media packets should be forwarded. Both incoming and outgoing media packets will be delivered to the specified target, and information about the stream will be included in the encapsulation protocol header, including the direction (0 = inbound; 1 = outbound), leg (0 = A-leg; 1 = B-leg), and call_leg_id.
  * tx `string`: The network target, <udp:ip_address:port>, where the call's outgoing RTP media packets should be forwarded.

### StartRecordingRequest
* Start Recording Request `object`
  * channels **required** `string` (values: single, dual): When `dual`, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * format **required** `string` (values: wav, mp3): The audio file format used when storing the call recording. Can be either `mp3` or `wav`.
  * play_beep `boolean`: If enabled, a beep sound will be played at the start of a recording.

### StopForkingRequest
* Stop Forking Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.

### StopGatherRequest
* Stop Gather Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.

### StopRecordingRequest
* Stop Recording Request `object`
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.

### TelephonyCredential
* On-demand Credential `object`
  * created_at `string`: ISO-8601 formatted date indicating when the resource was created.
  * expired `boolean`: Defaults to false
  * expires_at `string`: ISO-8601 formatted date indicating when the resource will expire.
  * id `string`: Identifies the resource.
  * name `string`
  * record_type `string`: Identifies the type of the resource.
  * resource_id `string`: Identifies the resource this credential is associated with.
  * sip_password `string`: The randomly generated SIP password for the credential.
  * sip_username `string`: The randomly generated SIP username for the credential.
  * updated_at `string`: ISO-8601 formatted date indicating when the resource was updated.

### TelephonyCredentialCreate
* TelephonyCredentialCreate `object`
  * connection_id `string`: Identifies the Credential Connection this credential is associated with.
  * expires_at `string`: ISO-8601 formatted date indicating when the credential will expire.
  * name `string`
  * tag `string`: Tags a credential to filter for bulk operations. A single tag can hold at maximum 1000 credentials.

### TelephonyCredentialUpdate
* TelephonyCredentialUpdate `object`
  * connection_id `string`: Identifies the Credential Connection this credential is associated with.
  * expires_at `string`: ISO-8601 formatted date indicating when the credential will expire.
  * name `string`
  * tag `string`: Tags a credential to filter for bulk operations. A single tag can hold at maximum 1000 credentials.

### TexmlApplication
* Texml Application `object`
  * active [ConnectionActive](#connectionactive)
  * anchorsite_override [AnchorsiteOverride](#anchorsiteoverride)
  * created_at [CreatedAt](#createdat)
  * dtmf_type [DtmfType](#dtmftype)
  * first_command_timeout [FirstCommandTimeout](#firstcommandtimeout)
  * first_command_timeout_secs [FirstCommandTimeoutSecs](#firstcommandtimeoutsecs)
  * friendly_name [ApplicationName](#applicationname)
  * id [IntId](#intid)
  * inbound `object`
    * channel_limit `integer`: When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
    * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
    * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * outbound `object`
    * channel_limit `integer`: When set, this will limit the total number of outbound calls to phone numbers associated with this connection.
    * outbound_voice_profile_id [OutboundVoiceProfileId](#outboundvoiceprofileid)
  * record_type `string`: Identifies the type of the resource.
  * status_callback `string`: URL for Telnyx to send requests to containing information about call progress events.
  * status_callback_method `string` (values: get, post): HTTP request method Telnyx should use when requesting the status_callback URL.
  * updated_at [UpdatedAt](#updatedat)
  * voice_fallback_url `string`: URL to which Telnyx will deliver your XML Translator webhooks if we get an error response from your voice_url.
  * voice_method `string` (values: get, post): HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either 'get' or 'post'.
  * voice_url `string`: URL to which Telnyx will deliver your XML Translator webhooks.

### ToNumber
* ToNumber `string`: Receiving address (+E.164 formatted phone number or short code).

### TransferCallRequest
* Transfer Call Request `object`
  * answering_machine_detection `string` (values: detect, detect_beep, detect_words, greeting_end, disabled): Enables Answering Machine Detection. When a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If 'greeting_end' or 'detect_words' is used and a 'machine' is detected, you will receive another 'call.machine.greeting.ended' webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive 'call.machine.greeting.ended' if a beep is detected.
  * answering_machine_detection_config `object`: Optional configuration parameters to modify 'answering_machine_detection' performance.
    * after_greeting_silence_millis `integer`: Silence duration threshold after a greeting message or voice for it be considered human.
    * between_words_silence_millis `integer`: Maximum threshold for silence between words.
    * greeting_duration_millis `integer`: Maximum threshold of a human greeting. If greeting longer than this value, considered machine.
    * greeting_silence_duration_millis `integer`: If machine already detected, maximum threshold for silence between words. If exceeded, the greeting is considered ended.
    * greeting_total_analysis_time_millis `integer`: If machine already detected, maximum timeout threshold to determine the end of the machine greeting.
    * initial_silence_millis `integer`: If initial silence duration is greater than this value, consider it a machine.
    * maximum_number_of_words `integer`: If number of detected words is greater than this value, consder it a machine.
    * maximum_word_length_millis `integer`: If a single word lasts longer than this threshold, consider it a machine.
    * silence_threshold `integer`: Minimum noise threshold for any analysis.
    * total_analysis_time_millis `integer`: Maximum timeout threshold for overall detection.
  * audio_url `string`: Audio URL to be played back when the transfer destination answers before bridging the call. The URL can point to either a WAV or MP3 file.
  * client_state `string`: Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
  * command_id `string`: Use this field to avoid duplicate commands. Telnyx will ignore commands with the same `command_id`.
  * custom_headers `array`: Custom headers to be added to the SIP INVITE.
    * items [CustomSipHeader](#customsipheader)
  * from `string`: The `from` number to be used as the caller id presented to the destination (`to` number). The number should be in +E164 format. This attribute will default to the `from` number of the original call if omitted.
  * sip_auth_password `string`: SIP Authentication password used for SIP challenges.
  * sip_auth_username `string`: SIP Authentication username used for SIP challenges.
  * time_limit_secs `integer`: Sets the maximum duration of a Call Control Leg in seconds. If the time limit is reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `time_limit` will be sent. For example, by setting a time limit of 120 seconds, a Call Leg will be automatically terminated two minutes after being answered. The default time limit is 14400 seconds or 4 hours and this is also the maximum allowed call length.
  * timeout_secs `integer`: The number of seconds that Telnyx will wait for the call to be answered by the destination to which it is being transferred. If the timeout is reached before an answer is received, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum value is 120 seconds.
  * to **required** `string`: The DID or SIP URI to dial out and bridge to the given call.
  * webhook_url `string`: Use this field to override the URL for which Telnyx will send subsuqeunt webhooks to for this call.
  * webhook_url_method `string` (values: POST, GET): HTTP request type used for `webhook_url`.

### UpdateBillingGroup
* UpdateBillingGroup `object`
  * name `string`: A name for the billing group

### UpdateCallControlApplicationRequest
* Update Call Control Application Request `object`
  * active `boolean`: Specifies whether the connection can be used.
  * anchorsite_override `string` (values: "Latency", "Chicago, IL", "Ashburn, VA", "San Jose, CA"): <code>Latency</code> directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * application_name **required** `string`: A user-assigned name to help manage the application.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * first_command_timeout `boolean`: Specifies whether calls to phone numbers associated with this connection should hangup after timing out.
  * first_command_timeout_secs `integer`: Specifies how many seconds to wait before timing out a dial command.
  * inbound [CallControlApplicationInbound](#callcontrolapplicationinbound)
  * outbound [CallControlApplicationOutbound](#callcontrolapplicationoutbound)
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url **required** `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### UpdateCredentialConnectionRequest
* Update Credential Connection Request `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * default_on_hold_comfort_noise_enabled `boolean`: When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * encode_contact_header_enabled `boolean`: Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
  * encrypted_media `string` (values: SRTP, ZRTP): Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
  * inbound [CredentialInbound](#credentialinbound)
  * onnet_t38_passthrough_enabled `boolean`: Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.
  * outbound [CredentialOutbound](#credentialoutbound)
  * password `string`: The password to be used as part of the credentials. Must be 8 to 128 characters long.
  * rtcp_settings `object`
    * capture_enabled `boolean`: BETA - Enable the capture and storage of RTCP messages to create QoS reports on the Telnyx Mission Control Portal.
    * port `string` (values: rtcp-mux, rtp+1): RTCP port by default is rtp+1, it can also be set to rtcp-mux
    * report_frequency_seconds `integer`: RTCP reports are sent to customers based on the frequency set. Frequency is in seconds and it can be set to values from 5 to 3000 seconds.
  * sip_uri_calling_preference `string` (values: disabled, unrestricted, internal): This feature enables inbound SIP URI calls to your Credential Auth Connection. If enabled for all (unrestricted) then anyone who calls the SIP URI <your-username>@telnyx.com will be connected to your Connection. You can also choose to allow only calls that are originated on any Connections under your account (internal).
  * user_name `string`: The user name to be used as part of the credentials. Must be 4-32 characters long and alphanumeric values only (no spaces or special characters).
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### UpdateFaxApplicationRequest
* Update Fax Application Request `object`
  * active [ConnectionActive](#connectionactive)
  * anchorsite_override [AnchorsiteOverride](#anchorsiteoverride)
  * application_name **required** [ApplicationName](#applicationname)
  * inbound `object`
    * channel_limit `integer`: When set, this will limit the number of concurrent inbound calls to phone numbers associated with this connection.
    * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
    * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * outbound `object`
    * channel_limit `integer`: When set, this will limit the number of concurrent outbound calls to phone numbers associated with this connection.
    * outbound_voice_profile_id [OutboundVoiceProfileId](#outboundvoiceprofileid)
  * webhook_event_failover_url [WebhookEventFailoverUrl](#webhookeventfailoverurl)
  * webhook_event_url **required** [WebhookEventUrl](#webhookeventurl)
  * webhook_timeout_secs [WebhookTimeoutSecs](#webhooktimeoutsecs)

### UpdateFqdnConnectionRequest
* Update Fqdn Connection Request `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * default_on_hold_comfort_noise_enabled `boolean`: When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * encode_contact_header_enabled `boolean`: Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
  * encrypted_media `string` (values: SRTP, ZRTP): Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
  * inbound [InboundFqdn](#inboundfqdn)
  * onnet_t38_passthrough_enabled `boolean`: Enable on-net T38 if you prefer that the sender and receiver negotiate T38 directly when both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call according to each leg's settings.
  * rtcp_settings [ConnectionRtcpSettings](#connectionrtcpsettings)
  * transport_protocol `string` (values: UDP, TCP, TLS): One of UDP, TLS, or TCP.
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### UpdateFqdnRequest
* Update Fqdn Request `object`
  * connection_id `string`: ID of the FQDN connection to which this IP should be attached.
  * dns_record_type `string`: The DNS record type for the FQDN. For cases where a port is not set, the DNS record type must be 'srv'. For cases where a port is set, the DNS record type must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060 will be used.
  * fqdn **required** `string`: FQDN represented by this resource.
  * port `integer`: Port to use when connecting to this FQDN.

### UpdateIpConnectionRequest
* Update Ip Connection Request `object`
  * active `boolean`: Defaults to true
  * anchorsite_override `string` (values: Latency, Chicago, IL, Ashburn, VA, San Jose, CA, Sydney, Australia, Amsterdam, Netherlands, London, UK, Toronto, Canada, Vancouver, Canada, Frankfurt, Germany): `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
  * connection_name `string`
  * default_on_hold_comfort_noise_enabled `boolean`: When enabled, Telnyx will generate comfort noise when you place the call on hold. If disabled, you will need to generate comfort noise or on hold music to avoid RTP timeout.
  * dtmf_type `string` (values: RFC 2833, Inband, SIP INFO): Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
  * encode_contact_header_enabled `boolean`: Encode the SIP contact header sent by Telnyx to avoid issues for NAT or ALG scenarios.
  * encrypted_media `string` (values: SRTP, ZRTP): Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
  * inbound [InboundIp](#inboundip)
  * onnet_t38_passthrough_enabled `boolean`: Enable on-net T38 if you prefer the sender and receiver negotiating T38 directly if both are on the Telnyx network. If this is disabled, Telnyx will be able to use T38 on just one leg of the call depending on each leg's settings.
  * outbound [OutboundIp](#outboundip)
  * rtcp_settings [ConnectionRtcpSettings](#connectionrtcpsettings)
  * transport_protocol `string` (values: UDP, TCP, TLS): One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.
  * webhook_api_version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.
  * webhook_event_failover_url `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.
  * webhook_event_url `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.
  * webhook_timeout_secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### UpdateIpRequest
* Update Ip Request `object`
  * connection_id `string`: ID of the IP Connection to which this IP should be attached.
  * ip_address **required** `string`: IP adddress represented by this resource.
  * port `integer`: Port to use when connecting to this IP.

### UpdateMessagingProfileRequest
* UpdateMessagingProfileRequest `object`
  * created_at `string`: ISO 8601 formatted date indicating when the resource was created.
  * enabled `boolean`: Specifies whether the messaging profile is enabled or not.
  * id `string`: Identifies the type of resource.
  * name `string`: A user friendly name for the messaging profile.
  * number_pool_settings [NumberPoolSettings](#numberpoolsettings)
  * record_type `string` (values: messaging_profile): Identifies the type of the resource.
  * updated_at `string`: ISO 8601 formatted date indicating when the resource was updated.
  * url_shortener_settings [UrlShortenerSettings](#urlshortenersettings)
  * v1_secret `string`: Secret used to authenticate with v1 endpoints.
  * webhook_api_version `string` (values: 1, 2, 2010-04-01): Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.
  * webhook_failover_url `string`: The failover URL where webhooks related to this messaging profile will be sent if sending to the primary URL fails.
  * webhook_url `string`: The URL where webhooks related to this messaging profile will be sent.
  * whitelisted_destinations `array`: Destinations to which the messaging profile is allowed to send. If set to `null`, all destinations will be allowed. Setting a value of `["*"]` has the equivalent effect. The elements in the list must be valid ISO 3166-1 alpha-2 country codes.
    * items `string`: ISO 3166-1 alpha-2 country code.

### UpdateNumberOrderDocumentRequest
* UpdateNumberOrderDocumentRequest `object`
  * created_at `string`: An ISO 8901 datetime string denoting when the number order document was uploaded.
  * customer_reference `string`: A customer reference string for customer look ups.
  * file_id `string`: The id of the file to associate as a number order document.
  * id `string`
  * record_type `string`
  * requirement_type `string` (values: address_proof, identification, reg_form)
  * requirements_id `string`: Unique id for a requirement.

### UpdateNumberOrderRequest
* UpdateNumberOrderRequest `object`
  * created_at `string`: An ISO 8901 datetime string denoting when the number order was created.
  * customer_reference `string`: A customer reference string for customer look ups.
  * id `string`
  * phone_numbers `array`
    * items [PhoneNumber](#phonenumber)
  * phone_numbers_count `integer`: The count of phone numbers in the number order.
  * record_type `string`
  * requirements_met `boolean`: True if all requirements are met for every phone number, false otherwise.
  * status `string` (values: pending, success, failure): The status of the order.
  * updated_at `string`: An ISO 8901 datetime string for when the number order was updated.

### UpdatePhoneNumberMessagingSettingsRequest
* UpdatePhoneNumberMessagingSettingsRequest `object`
  * messaging_product `string`: The requested messaging product the number should be on
  * messaging_profile_id `string`: Unique identifier for a messaging profile.

### UpdatePhoneNumberRequest
* UpdatePhoneNumberRequest `object`
  * tags `array`: A list of user-assigned tags to help organize phone numbers.
    * items `string`
  * billing_group_id `string`: Identifies the billing group associated with the phone number.
  * connection_id `string`: Identifies the connection associated with the phone number.
  * customer_reference `string`: A customer reference string for customer look ups.
  * external_pin `string`: If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, we will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.
  * id `string`: Identifies the type of resource.

### UpdatePhoneNumberVoiceSettingsRequest
* UpdatePhoneNumberVoiceSettingsRequest `object`
  * call_forwarding [CallForwarding](#callforwarding)
  * call_recording [CallRecording](#callrecording)
  * cnam_listing [CnamListing](#cnamlisting)
  * media_features [MediaFeatures](#mediafeatures)
  * tech_prefix_enabled `boolean`: Controls whether a tech prefix is enabled for this phone number.
  * translated_number `string`: This field allows you to rewrite the destination number of an inbound call before the call is routed to you. The value of this field may be any alphanumeric value, and the value will replace the number originally dialed.
  * usage_payment_method `string` (values: pay-per-minute, channel): Controls whether a number is billed per minute or uses your concurrent channels.

### UpdateShortCodeRequest
* UpdateShortCodeRequest `object`
  * messaging_profile_id **required** `string`: Unique identifier for a messaging profile.

### UpdateTexmlApplicationRequest
* Update Texml Application Request `object`
  * active [ConnectionActive](#connectionactive)
  * anchorsite_override [AnchorsiteOverride](#anchorsiteoverride)
  * dtmf_type [DtmfType](#dtmftype)
  * first_command_timeout [FirstCommandTimeout](#firstcommandtimeout)
  * first_command_timeout_secs [FirstCommandTimeoutSecs](#firstcommandtimeoutsecs)
  * friendly_name **required** [ApplicationName](#applicationname)
  * inbound `object`
    * channel_limit `integer`: When set, this will limit the total number of inbound calls to phone numbers associated with this connection.
    * sip_subdomain `string`: Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.
    * sip_subdomain_receive_settings `string` (values: only_my_connections, from_anyone): This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in the public Internet) or "Only my connections" (any connection assigned to the same Telnyx user).
  * outbound `object`
    * channel_limit `integer`: When set, this will limit the total number of outbound calls to phone numbers associated with this connection.
    * outbound_voice_profile_id [OutboundVoiceProfileId](#outboundvoiceprofileid)
  * status_callback `string`: URL for Telnyx to send requests to containing information about call progress events.
  * status_callback_method `string` (values: get, post): HTTP request method Telnyx should use when requesting the status_callback URL.
  * voice_fallback_url `string`: URL to which Telnyx will deliver your XML Translator webhooks if we get an error response from your voice_url.
  * voice_method `string` (values: get, post): HTTP request method Telnyx will use to interact with your XML Translator webhooks. Either 'get' or 'post'.
  * voice_url **required** `string`: URL to which Telnyx will deliver your XML Translator webhooks.

### UpdateVerifyProfileResponse
* UpdateVerifyProfileResponse `object`
  * data **required** [VerifyProfile](#verifyprofile)

### UpdatedAt
* Updated At `string`: ISO 8601 formatted date indicating when the resource was updated.

### UploadFileMessagingHostedNumberOrderRequest
* UploadFileMessagingHostedNumberOrderRequest `object`
  * bill `string`: Must be the last month's bill with proof of ownership of all of the numbers in the order in PDF format.
  * loa `string`: Must be a signed LOA for the numbers in the order in PDF format.

### UrlShortenerSettings
* UrlShortenerSettings `object`: The URL shortener feature allows automatic replacement of URLs that were generated using
  * domain **required** `string`: One of the domains provided by the Telnyx URL shortener service.
  * prefix `string`: Optional prefix that can be used to identify your brand, and will appear in the Telnyx generated URLs after the domain name.
  * replace_blacklist_only `boolean`: Use the link replacement tool only for links that are specifically blacklisted by Telnyx.
  * send_webhooks `boolean`: Receive webhooks for when your replaced links are clicked. Webhooks are sent to the webhooks on the messaging profile.

### UserBalance
* UserBalance `object`
  * available_credit `string`: Available amount to spend (balance + credit limit)
  * balance `string`: The account's current balance.
  * credit_limit `string`: The account's credit limit.
  * currency `string`: The ISO 4217 currency identifier.
  * record_type `string` (values: balance): Identifies the type of the resource.

### ValidateAddress
* ValidateAddress `object`
  * administrative_area [administrative_area](#administrative_area)
  * country_code [country_code](#country_code)
  * extended_address [extended_address](#extended_address)
  * locality [locality](#locality)
  * postal_code [postal_code](#postal_code)
  * street_address [street_address](#street_address)

### ValidateAddressRequest
* ValidateAddressRequest `object`
  * administrative_area **required** [administrative_area](#administrative_area)
  * country_code **required** [country_code](#country_code)
  * extended_address [extended_address](#extended_address)
  * locality **required** [locality](#locality)
  * postal_code **required** [postal_code](#postal_code)
  * street_address **required** [street_address](#street_address)

### ValidateAddressResult
* Validate address action result `object`
  * record_type `string`: Identifies the type of the resource.
  * result **required** `string` (values: valid, invalid): Indicates whether an address is valid or invalid.
  * suggested **required** [ValidateAddress](#validateaddress)

### Verification
* Verification `object`
  * created_at **required** `string`
  * id **required** `string`
  * phone_number **required** `string`: +E164 formatted phone number.
  * record_type `string`: Identifies the type of the resource.
  * status **required** [VerificationStatus](#verificationstatus)
  * timeout_secs `integer`: This is the number of seconds before the code of the request is expired. Once this request has expired, the code will no longer verify the user. Note: this will override the `default_timeout_secs` on the Verify profile.
  * type **required** [VerificationType](#verificationtype)
  * updated_at **required** `string`
  * verify_profile_id **required** `string`: The identifier of the associated Verify profile.

### VerificationAggregate
* VerificationAggregate `object`
  * data `array`
    * items `object`
      * aggregations `object`
        * count `integer`
      * fields `object`
        * status `string`
        * verify_profile_id `string`

### VerificationCodeRequest
* VerifyVerificationCodeRequest `object`
  * code **required** `string`: This is the code the user submits for verification.

### VerificationRequest
* VerifyVerificationRequest `object`: The request body when creating a verification.
  * phone_number **required** `string`: +E164 formatted phone number.
  * timeout_secs `integer`: This is the number of seconds before the code of the request is expired. Once this request has expired, the code will no longer verify the user. Note: this will override the `default_timeout_secs` on the Verify profile.
  * type **required** [VerificationType](#verificationtype)
  * verify_profile_id **required** `string`: The identifier of the associated Verify profile.

### VerificationStatus
* VerifyVerificationStatus `string` (values: pending, sms_delivery_failed, accepted, expired, not_enough_credit, network_error, number_unreachable, internal_error, invalid_destination, timed_out): The possible statuses of the verification request.

### VerificationSubmissionReponseCode
* VerifyVerificationSubmissionReponseCode `string` (values: accepted, rejected): Identifies if the verification code has been accepted or rejected.

### VerificationSubmissionResponse
* VerifyVerificationSubmissionResponse `object`
  * phone_number **required** `string`: +E164 formatted phone number.
  * response_code **required** [VerificationSubmissionReponseCode](#verificationsubmissionreponsecode)

### VerificationType
* VerificationType `string` (values: sms): The verification request type.

### VerificationVerify
* VerificationVerify `object`
  * data **required** [VerificationSubmissionResponse](#verificationsubmissionresponse)

### VerifyProfile
* VerifyProfile `object`
  * created_at **required** `string`
  * default_timeout_secs **required** `integer`: For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.
  * id **required** `string`
  * messaging_enabled `boolean`: Enables SMS text messaging for the Verify profile.
  * messaging_template `string`: Optionally sets a messaging text template when sending the verification code. Uses `{code}` to template in the actual verification code.
  * name **required** `string`: The name of the Verify profile.
  * rcs_enabled **required** `boolean`: Enables RCS messaging for the Verify profile.
  * record_type `string`: Identifies the type of the resource.
  * updated_at **required** `string`

### VerifyProfileRequest
* VerifyProfileRequest `object`: The request body when creating a Verify profile.
  * default_timeout_secs `integer`: For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.
  * messaging_enabled `boolean`: Enables SMS text messaging for the Verify profile.
  * messaging_template `string`: Optionally sets a messaging text template when sending the verification code. Uses `{code}` to template in the actual verification code.
  * name **required** `string`: The human readable label for the Verify profile.
  * rcs_enabled `boolean`: Enables RCS messaging for the Verify profile.

### WdrReport
* WdrReport `object`
  * created_at `string`: ISO 8601 formatted date-time indicating when the resource was created.
  * end_time `string`: ISO 8601 formatted date-time indicating the end time.
  * id `string`: Identifies the resource.
  * record_type `string`
  * report_url `string`: The URL where the report content, when generated, will be published to.
  * start_time `string`: ISO 8601 formatted date-time indicating the start time.
  * status `string` (values: pending, complete, failed, deleted): Indicates the status of the report, which is updated asynchronously.
  * updated_at `string`: ISO 8601 formatted date-time indicating when the resource was updated.

### WdrReportRequest
* WdrReportRequest `object`
  * end_time `string`: ISO 8601 formatted date-time indicating the end time.
  * start_time `string`: ISO 8601 formatted date-time indicating the start time.

### WebhookApiVersion
* Webhook API Version `string` (values: 1, 2): Determines which webhook format will be used, Telnyx API v1 or v2.

### WebhookEventFailoverUrl
* Webhook Event Failover URL `string`: The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as 'https'.

### WebhookEventUrl
* Webhook Event URL `string`: The URL where webhooks related to this connection will be sent. Must include a scheme, such as 'https'.

### WebhookTimeoutSecs
* Webhook Timeout Secs `integer`: Specifies how many seconds to wait before timing out a webhook.

### address_book
* address_book `boolean`: Indicates whether or not the address should be considered part of your list of addresses that appear for regular use.

### administrative_area
* administrative_area `string`: The locality of the address. For US addresses, this corresponds to the state of the address.

### attempt
* attempt `object`: Webhook delivery attempt details.
  * errors `array`: Webhook delivery errors.
    * items [error](#error)
  * finished_at `string`: ISO 8601 timestamp indicating when the attempt has finished.
  * http [http](#http)
  * started_at `string`: ISO 8601 timestamp indicating when the attempt was initiated.
  * status `string` (values: delivered, failed)

### borough
* borough `string`: The borough of the address. This field is not used for addresses in the US but is used for some international addresses.

### business_name
* business_name `string`: The business name associated with the address. An address must have either a first last name or a business name.

### country_code
* country_code `string`: The two-character (ISO 3166-1 alpha-2) country code of the address.

### customer_reference
* customer_reference `string`: A customer reference string for customer look ups.

### error
* error `object`
  * code `string`
  * detail `string`
  * title `string`

### extended_address
* extended_address `string`: Additional street address information about the address such as, but not limited to, unit number or apartment number.

### first_name
* first_name `string`: The first name associated with the address. An address must have either a first last name or a business name.

### http
* http `object`: HTTP request and response information.
  * request `object`: Request details.
    * headers [http_headers](#http_headers)
    * url `string`
  * response `object`: Response details, optional.
    * body `string`: Raw response body, limited to 10kB.
    * headers [http_headers](#http_headers)
    * status `integer`

### http_headers
* http_headers `array`: List of headers, limited to 10kB.
  * items `string`

### last_name
* last_name `string`: The last name associated with the address. An address must have either a first last name or a business name.

### locality
* locality `string`: The locality of the address. For US addresses, this corresponds to the city of the address.

### neighborhood
* neighborhood `string`: The neighborhood of the address. This field is not used for addresses in the US but is used for some international addresses.

### phone_number
* phone_number `string`: The phone number associated with the address.

### postal_code
* postal_code `string`: The postal code of the address.

### street_address
* street_address `string`: The primary street address information about the address.

### webhook_delivery
* webhook_delivery `object`: Record of all attempts to deliver a webhook.
  * attempts `array`: Detailed delivery attempts, ordered by most recent.
    * items [attempt](#attempt)
  * finished_at `string`: ISO 8601 timestamp indicating when the last webhook response has been received.
  * id `string`: Uniquely identifies the webhook_delivery record.
  * record_type `string`: Identifies the type of the resource.
  * started_at `string`: ISO 8601 timestamp indicating when the first request attempt was initiated.
  * status `string` (values: delivered, failed): Delivery status: 'delivered' when successfuly delivered or 'failed' if all attempts have failed.
  * user_id `string`: Uniquely identifies the user that owns the webhook_delivery record.
  * webhook `object`: Original webhook JSON data. Payload fields vary according to event type.
    * event_type `string` (values: webhook.command): The type of event being delivered.
    * id `string`: Identifies the type of resource.
    * occurred_at `string`: ISO 8601 datetime of when the event occurred.
    * payload `object`
    * record_type `string` (values: event): Identifies the type of the resource.


