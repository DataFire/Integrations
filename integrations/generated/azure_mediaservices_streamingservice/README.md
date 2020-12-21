# @datafire/azure_mediaservices_streamingservice

Client library for Azure Media Services

## Installation and Usage
```bash
npm install --save @datafire/azure_mediaservices_streamingservice
```
```js
let azure_mediaservices_streamingservice = require('@datafire/azure_mediaservices_streamingservice').create({
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

Streaming resource management client for Azure Media Services

## Actions

### LiveEvents_List
Lists the Live Events in the account.


```js
azure_mediaservices_streamingservice.LiveEvents_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
* output [LiveEventListResult](#liveeventlistresult)

### LiveEvents_Delete
Deletes a Live Event.


```js
azure_mediaservices_streamingservice.LiveEvents_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### LiveEvents_Get
Gets a Live Event.


```js
azure_mediaservices_streamingservice.LiveEvents_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
* output [LiveEvent](#liveevent)

### LiveEvents_Update
Updates a existing Live Event.


```js
azure_mediaservices_streamingservice.LiveEvents_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * api-version **required** `string`: The Version of the API to be used with the client request.
  * parameters **required** [LiveEvent](#liveevent)

#### Output
* output [LiveEvent](#liveevent)

### LiveEvents_Create
Creates a Live Event.


```js
azure_mediaservices_streamingservice.LiveEvents_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * api-version **required** `string`: The Version of the API to be used with the client request.
  * autoStart `boolean`: The flag indicates if the resource should be automatically started on creation.
  * parameters **required** [LiveEvent](#liveevent)

#### Output
* output [LiveEvent](#liveevent)

### LiveOutputs_List
Lists the Live Outputs in the Live Event.


```js
azure_mediaservices_streamingservice.LiveOutputs_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
* output [LiveOutputListResult](#liveoutputlistresult)

### LiveOutputs_Delete
Deletes a Live Output.


```js
azure_mediaservices_streamingservice.LiveOutputs_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "liveOutputName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * liveOutputName **required** `string`: The name of the Live Output.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### LiveOutputs_Get
Gets a Live Output.


```js
azure_mediaservices_streamingservice.LiveOutputs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "liveOutputName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * liveOutputName **required** `string`: The name of the Live Output.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
* output [LiveOutput](#liveoutput)

### LiveOutputs_Create
Creates a Live Output.


```js
azure_mediaservices_streamingservice.LiveOutputs_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "liveOutputName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * liveOutputName **required** `string`: The name of the Live Output.
  * api-version **required** `string`: The Version of the API to be used with the client request.
  * parameters **required** [LiveOutput](#liveoutput)

#### Output
* output [LiveOutput](#liveoutput)

### LiveEvents_Reset
Resets an existing Live Event.


```js
azure_mediaservices_streamingservice.LiveEvents_Reset({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### LiveEvents_Start
Starts an existing Live Event.


```js
azure_mediaservices_streamingservice.LiveEvents_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### LiveEvents_Stop
Stops an existing Live Event.


```js
azure_mediaservices_streamingservice.LiveEvents_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "liveEventName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * liveEventName **required** `string`: The name of the Live Event.
  * api-version **required** `string`: The Version of the API to be used with the client request.
  * parameters **required** [LiveEventActionInput](#liveeventactioninput)

#### Output
*Output schema unknown*

### StreamingEndpoints_List
Lists the StreamingEndpoints in the account.


```js
azure_mediaservices_streamingservice.StreamingEndpoints_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
* output [StreamingEndpointListResult](#streamingendpointlistresult)

### StreamingEndpoints_Delete
Deletes a StreamingEndpoint.


```js
azure_mediaservices_streamingservice.StreamingEndpoints_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "streamingEndpointName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * streamingEndpointName **required** `string`: The name of the StreamingEndpoint.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### StreamingEndpoints_Get
Gets a StreamingEndpoint.


```js
azure_mediaservices_streamingservice.StreamingEndpoints_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "streamingEndpointName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * streamingEndpointName **required** `string`: The name of the StreamingEndpoint.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
* output [StreamingEndpoint](#streamingendpoint)

### StreamingEndpoints_Update
Updates a existing StreamingEndpoint.


```js
azure_mediaservices_streamingservice.StreamingEndpoints_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "streamingEndpointName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * streamingEndpointName **required** `string`: The name of the StreamingEndpoint.
  * api-version **required** `string`: The Version of the API to be used with the client request.
  * parameters **required** [StreamingEndpoint](#streamingendpoint)

#### Output
* output [StreamingEndpoint](#streamingendpoint)

### StreamingEndpoints_Create
Creates a StreamingEndpoint.


```js
azure_mediaservices_streamingservice.StreamingEndpoints_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "streamingEndpointName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * streamingEndpointName **required** `string`: The name of the StreamingEndpoint.
  * api-version **required** `string`: The Version of the API to be used with the client request.
  * autoStart `boolean`: The flag indicates if the resource should be automatically started on creation.
  * parameters **required** [StreamingEndpoint](#streamingendpoint)

#### Output
* output [StreamingEndpoint](#streamingendpoint)

### StreamingEndpoints_Scale
Scales an existing StreamingEndpoint.


```js
azure_mediaservices_streamingservice.StreamingEndpoints_Scale({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "streamingEndpointName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * streamingEndpointName **required** `string`: The name of the StreamingEndpoint.
  * api-version **required** `string`: The Version of the API to be used with the client request.
  * parameters **required** [StreamingEntityScaleUnit](#streamingentityscaleunit)

#### Output
*Output schema unknown*

### StreamingEndpoints_Start
Starts an existing StreamingEndpoint.


```js
azure_mediaservices_streamingservice.StreamingEndpoints_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "streamingEndpointName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * streamingEndpointName **required** `string`: The name of the StreamingEndpoint.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### StreamingEndpoints_Stop
Stops an existing StreamingEndpoint.


```js
azure_mediaservices_streamingservice.StreamingEndpoints_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "streamingEndpointName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The unique identifier for a Microsoft Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group within the Azure subscription.
  * accountName **required** `string`: The Media Services account name.
  * streamingEndpointName **required** `string`: The name of the StreamingEndpoint.
  * api-version **required** `string`: The Version of the API to be used with the client request.

#### Output
*Output schema unknown*



## Definitions

### AkamaiAccessControl
* AkamaiAccessControl `object`: Akamai access control
  * akamaiSignatureHeaderAuthenticationKeyList `array`: authentication key list
    * items [AkamaiSignatureHeaderAuthenticationKey](#akamaisignatureheaderauthenticationkey)

### AkamaiSignatureHeaderAuthenticationKey
* AkamaiSignatureHeaderAuthenticationKey `object`: Akamai Signature Header authentication key.
  * base64Key `string`: authentication key
  * expiration `string`: The expiration time of the authentication key.
  * identifier `string`: identifier of the key

### ApiError
* ApiError `object`: The API error.
  * error [ODataError](#odataerror)

### CrossSiteAccessPolicies
* CrossSiteAccessPolicies `object`: The client access policy.
  * clientAccessPolicy `string`: The content of clientaccesspolicy.xml used by Silverlight.
  * crossDomainPolicy `string`: The content of crossdomain.xml used by Silverlight.

### Hls
* Hls `object`: The HLS configuration.
  * fragmentsPerTsSegment `integer`: The amount of fragments per HTTP Live Streaming (HLS) segment.

### IPAccessControl
* IPAccessControl `object`: The IP access control.
  * allow `array`: The IP allow list.
    * items [IPRange](#iprange)

### IPRange
* IPRange `object`: The IP address range in the CIDR scheme.
  * address `string`: The IP address.
  * name `string`: The friendly name for the IP address range.
  * subnetPrefixLength `integer`: The subnet mask prefix length (see CIDR notation).

### LiveEvent
* LiveEvent `object`: The Live Event.
  * properties [LiveEventProperties](#liveeventproperties)
  * location `string`: The Azure Region of the resource.
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource ID for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### LiveEventActionInput
* LiveEventActionInput `object`: The LiveEvent action input parameter definition.
  * removeOutputsOnStop `boolean`: The flag indicates if remove LiveOutputs on Stop.

### LiveEventEncoding
* LiveEventEncoding `object`: The Live Event encoding.
  * encodingType `string` (values: None, Basic, Standard, Premium1080p): The encoding type for Live Event.  This value is specified at creation time and cannot be updated.
  * presetName `string`: The encoding preset name.  This value is specified at creation time and cannot be updated.

### LiveEventEndpoint
* LiveEventEndpoint `object`: The Live Event endpoint.
  * protocol `string`: The endpoint protocol.
  * url `string`: The endpoint URL.

### LiveEventInput
* LiveEventInput `object`: The Live Event input.
  * accessControl [LiveEventInputAccessControl](#liveeventinputaccesscontrol)
  * accessToken `string`: A unique identifier for a stream.  This can be specified at creation time but cannot be updated.  If omitted, the service will generate a unique value.
  * endpoints `array`: The input endpoints for the Live Event.
    * items [LiveEventEndpoint](#liveeventendpoint)
  * keyFrameIntervalDuration `string`: ISO 8601 timespan duration of the key frame interval duration.
  * streamingProtocol **required** `string` (values: FragmentedMP4, RTMP): The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated.

### LiveEventInputAccessControl
* LiveEventInputAccessControl `object`: The IP access control for Live Event Input.
  * ip [IPAccessControl](#ipaccesscontrol)

### LiveEventInputTrackSelection
* LiveEventInputTrackSelection `object`: A track selection condition.
  * operation `string`: Comparing operation.
  * property `string`: Property name to select.
  * value `string`: Property value to select.

### LiveEventListResult
* LiveEventListResult `object`: The LiveEvent list result.
  * @odata.count `integer`: The number of result.
  * @odata.nextLink `string`: Th link to the next set of results. Not empty if value contains incomplete list of Live Outputs.
  * value `array`: The result of the List Live Event operation.
    * items [LiveEvent](#liveevent)

### LiveEventOutputTranscriptionTrack
* LiveEventOutputTranscriptionTrack `object`: Describes a transcription track in the output of a Live Event, generated using speech-to-text transcription.
  * trackName **required** `string`: The output track name.

### LiveEventPreview
* LiveEventPreview `object`: The Live Event preview.
  * accessControl [LiveEventPreviewAccessControl](#liveeventpreviewaccesscontrol)
  * alternativeMediaId `string`: An Alternative Media Identifier associated with the StreamingLocator created for the preview.  This value is specified at creation time and cannot be updated.  The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
  * endpoints `array`: The endpoints for preview.
    * items [LiveEventEndpoint](#liveeventendpoint)
  * previewLocator `string`: The identifier of the preview locator in Guid format.  Specifying this at creation time allows the caller to know the preview locator url before the event is created.  If omitted, the service will generate a random identifier.  This value cannot be updated once the live event is created.
  * streamingPolicyName `string`: The name of streaming policy used for the LiveEvent preview.  This value is specified at creation time and cannot be updated.

### LiveEventPreviewAccessControl
* LiveEventPreviewAccessControl `object`: The IP access control for Live Event preview.
  * ip [IPAccessControl](#ipaccesscontrol)

### LiveEventProperties
* LiveEventProperties `object`: The Live Event properties.
  * created `string`: The exact time the Live Event was created.
  * crossSiteAccessPolicies [CrossSiteAccessPolicies](#crosssiteaccesspolicies)
  * description `string`: The Live Event description.
  * encoding [LiveEventEncoding](#liveeventencoding)
  * input **required** [LiveEventInput](#liveeventinput)
  * lastModified `string`: The exact time the Live Event was last modified.
  * preview [LiveEventPreview](#liveeventpreview)
  * provisioningState `string`: The provisioning state of the Live Event.
  * resourceState `string` (values: Stopped, Starting, Running, Stopping, Deleting): The resource state of the Live Event.
  * streamOptions `array`: The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated.
    * items `string` (values: Default, LowLatency)
  * transcriptions `array`: The Live Event transcription.
    * items [LiveEventTranscription](#liveeventtranscription)
  * vanityUrl `boolean`: Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated.

### LiveEventTranscription
* LiveEventTranscription `object`: Describes the transcription tracks in the output of a Live Event, generated using speech-to-text transcription.
  * inputTrackSelection `array`: Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied.
    * items [LiveEventInputTrackSelection](#liveeventinputtrackselection)
  * language `string`: Specifies the language (locale) used for speech-to-text transcription � it should match the spoken language in the audio track. The value should be in BCP-47 format of 'language tag-region' (e.g: 'en-US'). The list of supported languages are 'en-US' and 'en-GB'.
  * outputTranscriptionTrack [LiveEventOutputTranscriptionTrack](#liveeventoutputtranscriptiontrack)

### LiveOutput
* LiveOutput `object`: The Live Output.
  * properties [LiveOutputProperties](#liveoutputproperties)
  * id `string`: Fully qualified resource ID for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### LiveOutputListResult
* LiveOutputListResult `object`: The LiveOutput list result.
  * @odata.count `integer`: The number of result.
  * @odata.nextLink `string`: Th link to the next set of results. Not empty if value contains incomplete list of Live Outputs.
  * value `array`: The result of the List Live Output operation.
    * items [LiveOutput](#liveoutput)

### LiveOutputProperties
* LiveOutputProperties `object`: The JSON object that contains the properties required to create a Live Output.
  * archiveWindowLength **required** `string`: ISO 8601 timespan duration of the archive window length. This is duration that customer want to retain the recorded content.
  * assetName **required** `string`: The asset name.
  * created `string`: The exact time the Live Output was created.
  * description `string`: The description of the Live Output.
  * hls [Hls](#hls)
  * lastModified `string`: The exact time the Live Output was last modified.
  * manifestName `string`: The manifest file name.  If not provided, the service will generate one automatically.
  * outputSnapTime `integer`: The output snapshot time.
  * provisioningState `string`: The provisioning state of the Live Output.
  * resourceState `string` (values: Creating, Running, Deleting): The resource state of the Live Output.

### ODataError
* ODataError `object`: Information about an error.
  * code `string`: A language-independent error name.
  * details `array`: The error details.
    * items [ODataError](#odataerror)
  * message `string`: The error message.
  * target `string`: The target of the error (for example, the name of the property in error).

### StreamingEndpoint
* StreamingEndpoint `object`: The StreamingEndpoint.
  * properties [StreamingEndpointProperties](#streamingendpointproperties)
  * location `string`: The Azure Region of the resource.
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource ID for the resource.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### StreamingEndpointAccessControl
* StreamingEndpointAccessControl `object`: StreamingEndpoint access control definition.
  * akamai [AkamaiAccessControl](#akamaiaccesscontrol)
  * ip [IPAccessControl](#ipaccesscontrol)

### StreamingEndpointListResult
* StreamingEndpointListResult `object`: The StreamingEndpoint list result.
  * @odata.count `integer`: The number of result.
  * @odata.nextLink `string`: Th link to the next set of results. Not empty if value contains incomplete list of StreamingEndpoints.
  * value `array`: The result of the List StreamingEndpoint operation.
    * items [StreamingEndpoint](#streamingendpoint)

### StreamingEndpointProperties
* StreamingEndpointProperties `object`: The StreamingEndpoint properties.
  * accessControl [StreamingEndpointAccessControl](#streamingendpointaccesscontrol)
  * availabilitySetName `string`: The name of the AvailabilitySet used with this StreamingEndpoint for high availability streaming.  This value can only be set at creation time.
  * cdnEnabled `boolean`: The CDN enabled flag.
  * cdnProfile `string`: The CDN profile name.
  * cdnProvider `string`: The CDN provider name.
  * created `string`: The exact time the StreamingEndpoint was created.
  * crossSiteAccessPolicies [CrossSiteAccessPolicies](#crosssiteaccesspolicies)
  * customHostNames `array`: The custom host names of the StreamingEndpoint
    * items `string`: custom host name
  * description `string`: The StreamingEndpoint description.
  * freeTrialEndTime `string`: The free trial expiration time.
  * hostName `string`: The StreamingEndpoint host name.
  * lastModified `string`: The exact time the StreamingEndpoint was last modified.
  * maxCacheAge `integer`: Max cache age
  * provisioningState `string`: The provisioning state of the StreamingEndpoint.
  * resourceState `string` (values: Stopped, Starting, Running, Stopping, Deleting, Scaling): The resource state of the StreamingEndpoint.
  * scaleUnits **required** `integer`: The number of scale units.  Use the Scale operation to adjust this value.

### StreamingEntityScaleUnit
* StreamingEntityScaleUnit `object`: scale units definition
  * scaleUnit `integer`: The scale unit number of the StreamingEndpoint.


