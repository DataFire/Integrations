# @datafire/google_speech

Client library for Google Cloud Speech

## Installation and Usage
```bash
npm install --save @datafire/google_speech
```
```js
let google_speech = require('@datafire/google_speech').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_speech.speech.recognize({}).then(data => {
  console.log(data);
});
```

## Description

Converts audio to text by applying powerful neural network models.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_speech.oauthCallback({
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
google_speech.oauthRefresh(null, context)
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

### operations.list
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.


```js
google_speech.operations.list({}, context)
```

#### Input
* input `object`
  * filter `string`: The standard list filter.
  * name `string`: The name of the operation's parent resource.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [ListOperationsResponse](#listoperationsresponse)

### operations.delete
Deletes a long-running operation. This method indicates that the client is
no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.


```js
google_speech.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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
* output [Empty](#empty)

### operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_speech.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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
* output [Operation](#operation)

### operations.cancel
Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.


```js
google_speech.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CancelOperationRequest](#canceloperationrequest)
  * name **required** `string`: The name of the operation resource to be cancelled.
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
* output [Empty](#empty)

### speech.longrunningrecognize
Performs asynchronous speech recognition: receive results via the
google.longrunning.Operations interface. Returns either an
`Operation.error` or an `Operation.response` which contains
a `LongRunningRecognizeResponse` message.


```js
google_speech.speech.longrunningrecognize({}, context)
```

#### Input
* input `object`
  * body [LongRunningRecognizeRequest](#longrunningrecognizerequest)
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
* output [Operation](#operation)

### speech.recognize
Performs synchronous speech recognition: receive results after all audio
has been sent and processed.


```js
google_speech.speech.recognize({}, context)
```

#### Input
* input `object`
  * body [RecognizeRequest](#recognizerequest)
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
* output [RecognizeResponse](#recognizeresponse)



## Definitions

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### LongRunningRecognizeRequest
* LongRunningRecognizeRequest `object`: The top-level message sent by the client for the `LongRunningRecognize`
  * audio [RecognitionAudio](#recognitionaudio)
  * config [RecognitionConfig](#recognitionconfig)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### RecognitionAudio
* RecognitionAudio `object`: Contains audio data in the encoding specified in the `RecognitionConfig`.
  * content `string`: The audio data bytes encoded as specified in
  * uri `string`: URI that points to a file that contains audio data bytes as specified in

### RecognitionConfig
* RecognitionConfig `object`: Provides information to the recognizer that specifies how to process the
  * enableWordTimeOffsets `boolean`: *Optional* If `true`, the top result includes a list of words and
  * encoding `string` (values: ENCODING_UNSPECIFIED, LINEAR16, FLAC, MULAW, AMR, AMR_WB, OGG_OPUS, SPEEX_WITH_HEADER_BYTE): *Required* Encoding of audio data sent in all `RecognitionAudio` messages.
  * languageCode `string`: *Required* The language of the supplied audio as a
  * maxAlternatives `integer`: *Optional* Maximum number of recognition hypotheses to be returned.
  * profanityFilter `boolean`: *Optional* If set to `true`, the server will attempt to filter out
  * sampleRateHertz `integer`: *Required* Sample rate in Hertz of the audio data sent in all
  * speechContexts `array`: *Optional* A means to provide context to assist the speech recognition.
    * items [SpeechContext](#speechcontext)

### RecognizeRequest
* RecognizeRequest `object`: The top-level message sent by the client for the `Recognize` method.
  * audio [RecognitionAudio](#recognitionaudio)
  * config [RecognitionConfig](#recognitionconfig)

### RecognizeResponse
* RecognizeResponse `object`: The only message returned to the client by the `Recognize` method. It
  * results `array`: *Output-only* Sequential list of transcription results corresponding to
    * items [SpeechRecognitionResult](#speechrecognitionresult)

### SpeechContext
* SpeechContext `object`: Provides "hints" to the speech recognizer to favor specific words and phrases
  * phrases `array`: *Optional* A list of strings containing words and phrases "hints" so that
    * items `string`

### SpeechRecognitionAlternative
* SpeechRecognitionAlternative `object`: Alternative hypotheses (a.k.a. n-best list).
  * confidence `number`: *Output-only* The confidence estimate between 0.0 and 1.0. A higher number
  * transcript `string`: *Output-only* Transcript text representing the words that the user spoke.
  * words `array`: *Output-only* A list of word-specific information for each recognized word.
    * items [WordInfo](#wordinfo)

### SpeechRecognitionResult
* SpeechRecognitionResult `object`: A speech recognition result corresponding to a portion of the audio.
  * alternatives `array`: *Output-only* May contain one or more recognition hypotheses (up to the
    * items [SpeechRecognitionAlternative](#speechrecognitionalternative)
  * channelTag `integer`: For multi-channel audio, this is the channel number corresponding to the

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### WordInfo
* WordInfo `object`: Word-specific information for recognized words. Word information is only
  * endTime `string`: *Output-only* Time offset relative to the beginning of the audio,
  * startTime `string`: *Output-only* Time offset relative to the beginning of the audio,
  * word `string`: *Output-only* The word corresponding to this set of information.


