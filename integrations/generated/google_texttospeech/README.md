# @datafire/google_texttospeech

Client library for Cloud Text-to-Speech API

## Installation and Usage
```bash
npm install --save @datafire/google_texttospeech
```
```js
let google_texttospeech = require('@datafire/google_texttospeech').create({
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

Synthesizes natural-sounding speech by applying powerful neural network models.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_texttospeech.oauthCallback({
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
google_texttospeech.oauthRefresh(null, context)
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

### texttospeech.text.synthesize
Synthesizes speech synchronously: receive results after all text input has been processed.


```js
google_texttospeech.texttospeech.text.synthesize({}, context)
```

#### Input
* input `object`
  * body [SynthesizeSpeechRequest](#synthesizespeechrequest)
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
* output [SynthesizeSpeechResponse](#synthesizespeechresponse)

### texttospeech.voices.list
Returns a list of Voice supported for synthesis.


```js
google_texttospeech.texttospeech.voices.list({}, context)
```

#### Input
* input `object`
  * languageCode `string`: Optional. Recommended. [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If specified, the ListVoices call will only return voices that can be used to synthesize this language_code. E.g. when specifying "en-NZ", you will get supported "en-\*" voices; when specifying "no", you will get supported "no-\*" (Norwegian) and "nb-\*" (Norwegian Bokmal) voices; specifying "zh" will also get supported "cmn-\*" voices; specifying "zh-hk" will also get supported "yue-\*" voices.
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
* output [ListVoicesResponse](#listvoicesresponse)



## Definitions

### AudioConfig
* AudioConfig `object`: Description of audio data to be synthesized.
  * audioEncoding `string` (values: AUDIO_ENCODING_UNSPECIFIED, LINEAR16, MP3, MP3_64_KBPS, OGG_OPUS, MULAW): Required. The format of the audio byte stream.
  * effectsProfileId `array`: Optional. Input only. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given. See [audio profiles](https://cloud.google.com/text-to-speech/docs/audio-profiles) for current supported profile ids.
    * items `string`
  * pitch `number`: Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
  * sampleRateHertz `integer`: Optional. The synthesis sample rate (in hertz) for this audio. When this is specified in SynthesizeSpeechRequest, if this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality), unless the specified sample rate is not supported for the encoding chosen, in which case it will fail the request and return google.rpc.Code.INVALID_ARGUMENT.
  * speakingRate `number`: Optional. Input only. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error.
  * volumeGainDb `number`: Optional. Input only. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. Strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

### ListVoicesResponse
* ListVoicesResponse `object`: The message returned to the client by the `ListVoices` method.
  * voices `array`: The list of voices.
    * items [Voice](#voice)

### SynthesisInput
* SynthesisInput `object`: Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 characters.
  * ssml `string`: The SSML document to be synthesized. The SSML document must be valid and well-formed. Otherwise the RPC will fail and return google.rpc.Code.INVALID_ARGUMENT. For more information, see [SSML](https://cloud.google.com/text-to-speech/docs/ssml).
  * text `string`: The raw text to be synthesized.

### SynthesizeSpeechRequest
* SynthesizeSpeechRequest `object`: The top-level message sent by the client for the `SynthesizeSpeech` method.
  * audioConfig [AudioConfig](#audioconfig)
  * enableTimePointing `array`: Whether and what timepoints are returned in the response.
    * items `string` (values: TIMEPOINT_TYPE_UNSPECIFIED, SSML_MARK)
  * input [SynthesisInput](#synthesisinput)
  * voice [VoiceSelectionParams](#voiceselectionparams)

### SynthesizeSpeechResponse
* SynthesizeSpeechResponse `object`: The message returned to the client by the `SynthesizeSpeech` method.
  * audioConfig [AudioConfig](#audioconfig)
  * audioContent `string`: The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
  * timepoints `array`: A link between a position in the original request input and a corresponding time in the output audio. It's only supported via of SSML input.
    * items [Timepoint](#timepoint)

### Timepoint
* Timepoint `object`: This contains a mapping between a certain point in the input text and a corresponding time in the output audio.
  * markName `string`: Timepoint name as received from the client within tag.
  * timeSeconds `number`: Time offset in seconds from the start of the synthesized audio.

### Voice
* Voice `object`: Description of a voice supported by the TTS service.
  * languageCodes `array`: The languages that this voice supports, expressed as [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags (e.g. "en-US", "es-419", "cmn-tw").
    * items `string`
  * name `string`: The name of this voice. Each distinct voice has a unique name.
  * naturalSampleRateHertz `integer`: The natural sample rate (in hertz) for this voice.
  * ssmlGender `string` (values: SSML_VOICE_GENDER_UNSPECIFIED, MALE, FEMALE, NEUTRAL): The gender of this voice.

### VoiceSelectionParams
* VoiceSelectionParams `object`: Description of which voice to use for a synthesis request.
  * languageCode `string`: Required. The language (and potentially also the region) of the voice expressed as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g. "en-US". This should not include a script tag (e.g. use "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn't a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian Bokmal) instead of "no" (Norwegian)".
  * name `string`: The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and gender.
  * ssmlGender `string` (values: SSML_VOICE_GENDER_UNSPECIFIED, MALE, FEMALE, NEUTRAL): The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.


