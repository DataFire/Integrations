# @datafire/callfire

Client library for CallFire

## Installation and Usage
```bash
npm install --save @datafire/callfire
```
```js
let callfire = require('@datafire/callfire').create({
  username: "",
  password: ""
});

callfire.findWebhookResources({}).then(data => {
  console.log(data);
});
```

## Description

CallFire

## Actions

### findCalls
To search for all calls sent or received by the user. Use "id=0" for the campaignId parameter to query for all calls sent through the POST /calls API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)


```js
callfire.findCalls({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * id `array`: Lists the Call ids to search for. If calls ids are specified then other query parameters can be ignored
  * campaignId `integer`: An id of a campaign, queries for calls included to a particular campaign. Specify null for all campaigns and 0 for default campaign
  * batchId `integer`: An id of a contact batch, queries for calls of a particular contact batch
  * fromNumber `string`: Phone number in E.164 format (11-digit) that call was from. Example: 12132000384
  * toNumber `string`: Phone number in E.164 format (11-digit) that call was sent to. Example: 12132000384
  * label `string`: A label for a specific call
  * states `string`: Searches for all calls which correspond to statuses listed in a comma separated string. Available values: READY, SELECTED, CALLBACK, FINISHED, DISABLED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
  * results `string`: Searches for all calls with statuses listed in a comma separated string. Available values: SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
  * inbound `boolean`: Filters inbound calls for "true" value and outbound calls for "false" value
  * intervalBegin `integer`: Start of the find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * intervalEnd `integer`: End of the find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT

#### Output
* output [CallPage](#callpage)

### sendCalls
Use the /calls API to send individual calls quickly. A verified Caller ID and sufficient credits are required to make a call. CallRecipient represents a single recipient identified by phone number or contact id in CallFire system. You can attach user-defined attributes to a Call action via CallRecipient.attributes property, attributes are available in Call action response


```js
callfire.sendCalls({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * campaignId `integer`: Specifies a campaignId to send calls quickly on a previously created campaign
  * defaultLiveMessage `string`: Text to be turned into a sound, this text will be played when the phone is answered. Parameter can be overridden for any particular CallRecipient
  * defaultMachineMessage `string`: Text to be turned into a sound, this text will be played when answering machine is detected. Parameter can be overridden for any particular CallRecipient
  * defaultLiveMessageSoundId `integer`: Id of sound file to play if phone is answered. Parameter can be overridden for any particular CallRecipient
  * defaultMachineMessageSoundId `integer`: An id of a sound file to play if answering machine is detected. Parameter can be overridden for any particular CallRecipient
  * defaultVoice `string` (values: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1): The voice set by default for all text-to-speech messages defined in CallRecipient objects or as default *Message properties
  * strictValidation `boolean`: Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
  * body `array`
    * items [CallRecipient](#callrecipient)

#### Output
* output [CallList](#calllist)

### findCallBroadcasts
Searches for all voice broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of voice broadcasts


```js
callfire.findCallBroadcasts({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * label `string`: A label of a voice broadcast
  * name `string`: A name of voice broadcast
  * running `boolean`: Specify whether the campaigns should be running or not

#### Output
* output [CallBroadcastPage](#callbroadcastpage)

### createCallBroadcast
Creates a call broadcast campaign using the Call Broadcast API. Send a CallBroadcast in the message body to add details in a voice broadcast campaign. The campaign can be created without contacts and bare minimum configuration, but contacts will have to be added further on to use the campaign


```js
callfire.createCallBroadcast({}, context)
```

#### Input
* input `object`
  * start `boolean`: Specify whether to immediately start this campaign (not required)
  * strictValidation `boolean`: Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
  * body [CallBroadcast](#callbroadcast)

#### Output
* output [ResourceId](#resourceid)

### getCallBroadcast
Returns a single CallBroadcast instance for a given call broadcast campaign id


```js
callfire.getCallBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a CallBroadcast
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [CallBroadcast](#callbroadcast)

### updateCallBroadcast
This operation lets the user modify the configuration of a voice broadcast campaign after call broadcast campaign is created. See CallBroadcast for more information on what can/can't be updated on this API


```js
callfire.updateCallBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a voice broadcast
  * strictValidation `boolean`: Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
  * body [CallBroadcast](#callbroadcast)

#### Output
*Output schema unknown*

### archiveVoiceBroadcast
Archives a voice broadcast (voice broadcast will be hidden in search results)


```js
callfire.archiveVoiceBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a voice broadcast to archive

#### Output
*Output schema unknown*

### getCallBroadcastBatches
This endpoint will enable the user to page through all of the batches for a particular voice broadcast campaign


```js
callfire.getCallBroadcastBatches({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a call broadcast
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

#### Output
* output [BatchPage](#batchpage)

### addCallBroadcastBatch
The 'add batch' API allows user to add additional batches to an already created voice broadcast campaign. The added batch will go through the CallFire validation process, unlike in the recipients version of this API. That is why you can use the scrubDuplicates flag to remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers


```js
callfire.addCallBroadcastBatch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a call broadcast
  * strictValidation `boolean`: Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
  * body [BatchRequest](#batchrequest)

#### Output
* output [ResourceId](#resourceid)

### getCallBroadcastCalls
This endpoint will enable the user to page through all calls for a particular call broadcast campaign


```js
callfire.getCallBroadcastCalls({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An Id of a call broadcast
  * batchId `integer`: An id of a particular batch associated with broadcast
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

#### Output
* output [CallPage](#callpage)

### addCallBroadcastRecipients
Use this API to add the recipients to an existing voice broadcast. Post a list of Recipient objects to be added to the voice broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers


```js
callfire.addCallBroadcastRecipients({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a call broadcast
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * strictValidation `boolean`: Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
  * body `array`
    * items [Recipient](#recipient)

#### Output
* output [CallList](#calllist)

### startVoiceBroadcast
Start a voice broadcast


```js
callfire.startVoiceBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of voice broadcast to start

#### Output
*Output schema unknown*

### getCallBroadcastStats
Returns broadcast statistics like total number of sent/received actions, total cost, number of remaining outbound actions, error count, etc


```js
callfire.getCallBroadcastStats({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a call broadcast
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * begin `integer`: Start of the search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * end `integer`: End of the search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT

#### Output
* output [CallBroadcastStats](#callbroadcaststats)

### stopVoiceBroadcast
Stop a voice broadcast


```js
callfire.stopVoiceBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of voice broadcast to stop

#### Output
*Output schema unknown*

### getCallRecording
Returns metadata of recording of a particular call. Metadata contains a link to a MP3 recording


```js
callfire.getCallRecording({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ~
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [CallRecording](#callrecording)

### getCallRecordingMp3
Returns an MP3 recording of particular call, response contains binary data, content type is 'audio/mpeg'


```js
callfire.getCallRecordingMp3({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a call

#### Output
* output `file`

### getCall
Returns a single Call instance for a given call id.


```js
callfire.getCall({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a call
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [Call](#call)

### getCallRecordings
Returns a list of recordings metadata of particular call. Metadata contains link to a MP3 recording


```js
callfire.getCallRecordings({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a call
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [CallRecordingList](#callrecordinglist)

### getCallRecordingByName
Returns recording metadata of particular call. Metadata contains link to a MP3 recording


```js
callfire.getCallRecordingByName({
  "id": 0,
  "name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a call
  * name **required** `string`: A name of a recording
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [CallRecording](#callrecording)

### getCallRecordingMp3ByName
Returns a MP3 recording of a particular call, response contains binary data, content type is 'audio/mpeg'


```js
callfire.getCallRecordingMp3ByName({
  "id": 0,
  "name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a call
  * name **required** `string`: A name of a recording

#### Output
* output `file`

### getCampaignBatch
Returns a single Batch instance for a given batch id. This API is useful for determining the state of a validating batch


```js
callfire.getCampaignBatch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a batch
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [Batch](#batch)

### updateCampaignBatch
Updates a single Batch instance, currently batch can only be turned "on/off"


```js
callfire.updateCampaignBatch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a batch to update
  * body [Batch](#batch)

#### Output
*Output schema unknown*

### findCampaignSounds
To find all campaign sounds which were created by user. Returns all sounds available to be used in campaigns


```js
callfire.findCampaignSounds({}, context)
```

#### Input
* input `object`
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * filter `string`: Name of a file to search for
  * includeArchived `boolean`: Includes ARCHIVED sounds for "true" value
  * includePending `boolean`: Includes UPLOAD/RECORDING sounds for "true" value
  * includeScrubbed `boolean`: Includes SCRUBBED sounds for "true" value
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [CampaignSoundPage](#campaignsoundpage)

### postCallCampaignSound
Use this API to create a sound via a phone call. Provide the required phone number in the CallCreateSound object inside the request, and user will receive a call shortly after with instructions on how to record a sound over the phone.


```js
callfire.postCallCampaignSound({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * body [CallCreateSound](#callcreatesound)

#### Output
* output [CampaignSound](#campaignsound)

### postFileCampaignSound
Create a campaign sound file via a supplied .mp3 or .wav file


```js
callfire.postFileCampaignSound({
  "file": ""
}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * file **required** `string`: A sound file encoded in binary form
  * name `string`: Optional name of a sound file, if the name is empty than it will be taken from a file

#### Output
* output [CampaignSound](#campaignsound)

### postTTSCampaignSound
Use this API to create a sound file via a supplied string of text. Add a text in the TextToSpeech.message field, and pick a voice in the TextToSpeech.voice field. Available voices are: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1


```js
callfire.postTTSCampaignSound({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * body [TextToSpeech](#texttospeech)

#### Output
* output [CampaignSound](#campaignsound)

### deleteCampaignSound
Deletes a single campaign sound instance for a specific campaign sound id, this operation does not delete sound completely, it sets sound status to ARCHIVED which means that sound will no longer appear in 'find' operation results, but still accessible via 'get' operation


```js
callfire.deleteCampaignSound({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a campaign sound

#### Output
*Output schema unknown*

### getCampaignSound
Returns a single CampaignSound instance for a given sound id in campaign. This is a meta data to the sounds. No audio data is returned from this API


```js
callfire.getCampaignSound({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a sound campaign
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [CampaignSound](#campaignsound)

### getCampaignSoundDataMp3
Download the MP3 version of a hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type


```js
callfire.getCampaignSoundDataMp3({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a campaign sound

#### Output
* output `file`

### getCampaignSoundDataWav
Download the WAV version of the hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type


```js
callfire.getCampaignSoundDataWav({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a campaign sound

#### Output
* output `file`

### findContacts
Find user's contacts by id, contact list, or on any property name. Returns a paged list of contacts


```js
callfire.findContacts({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * id `array`: A list of contact IDs. If the id parameter is included, the other query parameters are ignored.
  * number `array`: Multiple contact numbers can be specified. If the number parameter is included, the other query parameters are ignored.
  * contactListId `integer`: Filters contacts by a particular contact list
  * propertyName `string`: Name of a contact property to search by
  * propertyValue `string`: Value of a contact property to search by

#### Output
* output [ContactPage](#contactpage)

### createContacts
Creates contacts in CallFire system. These contacts are not validated on creation. They will be validated upon being added to a campaign


```js
callfire.createContacts({}, context)
```

#### Input
* input `object`
  * body `array`
    * items [Contact](#contact)

#### Output
* output [ResourceIdList](#resourceidlist)

### findDoNotContacts
Searches for all Do Not Contact (DNC) objects created by user. These DoNotContact entries only affect calls/texts/campaigns on this account. Returns a paged list of DoNotContact objects


```js
callfire.findDoNotContacts({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * prefix `string`: Prefix (1-10 digits) of phone numbers
  * campaignId `integer`: A campaign id which was used to send a message to a DNC number
  * source `string`: A DNC source name to search for DNCs
  * call `boolean`: Show only Do-Not-Call numbers
  * text `boolean`: Show only Do-Not-Text numbers
  * number `array`: ~

#### Output
* output [DoNotContactPage](#donotcontactpage)

### addDoNotContacts
Add or update a list of Do Not Contact (DNC) contact entries. Can toggle whether the DNCs are enabled for calls/texts.


```js
callfire.addDoNotContacts({}, context)
```

#### Input
* input `object`
  * body [AddDoNotContactRequest](#adddonotcontactrequest)

#### Output
* output [JResponse](#jresponse)

### deleteDoNotContactsBySource
Delete Do Not Contact (DNC) contact entries contained in source.


```js
callfire.deleteDoNotContactsBySource({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string`: Source associated with Do Not Contact (DNC) entry.

#### Output
*Output schema unknown*

### getUniversalDoNotContacts
Searches for a UniversalDoNotContact object for a given phone number. Shows whether inbound/outbound actions are allowed for a given number


```js
callfire.getUniversalDoNotContacts({
  "toNumber": ""
}, context)
```

#### Input
* input `object`
  * toNumber **required** `string`: A required destination phone number in E.164 format (11-digit). Example: 12132000384
  * fromNumber `string`: An optional destination/source number for DNC, specified in E.164 format (11-digit). Example: 12132000384
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [ItemList](#itemlist)

### deleteDoNotContact
Delete a Do Not Contact (DNC) contact entry.


```js
callfire.deleteDoNotContact({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: Number associated with Do Not Contact (DNC) entry.

#### Output
*Output schema unknown*

### getDoNotContact
Get Do Not Contact (DNC) object create by user. This DoNotContact entry only affects calls/texts/campaigns on this account.


```js
callfire.getDoNotContact({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: Number associated with Do Not Contact (DNC) entry.

#### Output
* output [DoNotContact](#donotcontact)

### updateDoNotContact
Update a Do Not Contact (DNC) contact entry. Can toggle whether the DNC is enabled for calls/texts.


```js
callfire.updateDoNotContact({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: ~
  * body [DoNotContact](#donotcontact)

#### Output
*Output schema unknown*

### findContactLists
Searches for all contact lists which are available for the current user. Returns a paged list of contact lists


```js
callfire.findContactLists({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * name `string`: A name or a partial name of a contact list

#### Output
* output [ContactListPage](#contactlistpage)

### createContactList
Creates a contact list for use with campaigns using 1 of 3 inputs. A List of Contact objects, a list of String E.164 numbers, or a list of CallFire contactIds can be used as the data source for the created contact list. After contact list is added into the CallFire system, contact lists goes through seven system safeguards that check the accuracy and consistency of the data. For example, our system checks that contact number is formatted correctly, is valid, is not duplicated in another contact list, or is not added on a specific DNC list. You can configure to keep/merge or remove contacts which do not complies these rules. If contacts were not added to a contact list after the validation, this means the data needs to be properly formatted and corrected before calling this API


```js
callfire.createContactList({}, context)
```

#### Input
* input `object`
  * body [CreateContactListRequest](#createcontactlistrequest)

#### Output
* output [ResourceId](#resourceid)

### createContactListFromFile
Creates a contact list to be used with campaigns through uploading a .csv file. Returns the id of created list


```js
callfire.createContactListFromFile({
  "file": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`: CSV file to be uploaded
  * name `string`: A name of a contact list
  * useCustomFields `boolean`: A flag to indicate how to define property names for contacts. If true, uses the field and property names exactly as defined. If false will assign custom properties and fields to A, B, C, etc

#### Output
* output [ResourceId](#resourceid)

### deleteContactList
Deletes a contact list, included contacts will not be deleted.


```js
callfire.deleteContactList({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of the contact list to be deleted

#### Output
*Output schema unknown*

### getContactList
Returns a single ContactList instance for a given contact list id


```js
callfire.getContactList({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a contact list to return
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [ContactList](#contactlist)

### updateContactList
Updates contact list instance.


```js
callfire.updateContactList({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of contact list to update
  * body [UpdateContactListRequest](#updatecontactlistrequest)

#### Output
*Output schema unknown*

### removeContactListItems
Deletes contacts from a contact list. List the contact ids in request to delete multiple contacts with one request.


```js
callfire.removeContactListItems({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A id of a contact list
  * contactId `array`: An id of a contact entity in the CallFire system

#### Output
*Output schema unknown*

### getContactListItems
Searches for all entries in a contact list with specified id. Returns a paged list of contact entries


```js
callfire.getContactListItems({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a contact list
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

#### Output
* output [ContactPage](#contactpage)

### addContactListItems
Adds contacts to a contact list. Available contact sources are: list of the contact entities, list of ids of existing contacts in user's account, list of phone numbers in E.164 format (11-digits)


```js
callfire.addContactListItems({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a contact list
  * body [AddContactListContactsRequest](#addcontactlistcontactsrequest)

#### Output
*Output schema unknown*

### removeContactListItem
Deletes a single contact from a contact list


```js
callfire.removeContactListItem({
  "id": 0,
  "contactId": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a contact list
  * contactId **required** `integer`: An id of a contact

#### Output
*Output schema unknown*

### deleteContact
Deletes a contact instance from account


```js
callfire.deleteContact({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An Id of a contact

#### Output
*Output schema unknown*

### getContact
Returns a Contact instance for a given contact id. Deleted contacts can be still retrieved but will be marked as deleted. Deleted contacts will not be shown in search request.


```js
callfire.getContact({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a contact
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [Contact](#contact)

### updateContact
Updates a single contact instance with id specified


```js
callfire.updateContact({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a contact
  * body [Contact](#contact)

#### Output
*Output schema unknown*

### getContactHistory
Searches for all texts and calls attributed to a contact. Returns a list of calls and texts a contact has been involved with


```js
callfire.getContactHistory({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An Id of a contact
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [ContactHistory](#contacthistory)

### findKeywords
Searches for all keywords available for purchase on the CallFire platform. If a keyword appears in the response, it is available for purchase. List the 'keywords' in a query parameter to search for multiple keywords (at least one keyword should be sent in request)


```js
callfire.findKeywords({}, context)
```

#### Input
* input `object`
  * keywords `array`: A keyword to search for

#### Output
* output [KeywordList](#keywordlist)

### findKeywordLeases
Searches for all keywords owned by user. A keyword lease is the ownership information involving a keyword


```js
callfire.findKeywordLeases({}, context)
```

#### Input
* input `object`
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [KeywordLeasePage](#keywordleasepage)

### getKeywordLease
Searches for all keywords owned by user


```js
callfire.getKeywordLease({
  "keyword": ""
}, context)
```

#### Input
* input `object`
  * keyword **required** `string`: Keyword text that a lease is desired for
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [KeywordLease](#keywordlease)

### updateKeywordLease
Updates a keyword lease. Turns the autoRenew on/off.


```js
callfire.updateKeywordLease({
  "keyword": ""
}, context)
```

#### Input
* input `object`
  * keyword **required** `string`: To update a keyword lease
  * body [KeywordLease](#keywordlease)

#### Output
*Output schema unknown*

### isKeywordAvailable
Searches for the specific keyword to purchase on the CallFire platform. Returns 'true' if keyword is available.


```js
callfire.isKeywordAvailable({
  "keyword": ""
}, context)
```

#### Input
* input `object`
  * keyword **required** `string`: To specify a keyword to search for. Example: SUN, MOON

#### Output
* output `boolean`

### getAccount
Searches for the user account details. Details include name, email, and basic account permissions


```js
callfire.getAccount(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Account](#account)

### findApiCredentials
Searches for all credentials generated by user. Returns a paged list of the API credentials. Only ACCOUNT_HOLDER can invoke this API


```js
callfire.findApiCredentials({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

#### Output
* output [ApiCredentialPage](#apicredentialpage)

### createApiCredential
Creates an API credentials for the CallFire API. This endpoint requires full CallFire account credentials to be used, authenticated using Basic Authentication. At the moment user provides only the name for the credentials. The generated credentials can be used to access any CallFire APIs


```js
callfire.createApiCredential({}, context)
```

#### Input
* input `object`
  * body [ApiCredential](#apicredential)

#### Output
* output [ApiCredential](#apicredential)

### deleteApiCredential
Deletes a specified API credential. Currently, removes the ability to access the API. Only ACCOUNT_HOLDER can invoke this API


```js
callfire.deleteApiCredential({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of an API credential

#### Output
*Output schema unknown*

### getApiCredential
Returns an API credential instance for a given api credential id. Only ACCOUNT_HOLDER can invoke this API


```js
callfire.getApiCredential({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of an API credential
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [ApiCredential](#apicredential)

### getCreditUsage
Find credit usage for the user. Returns credits usage for time period specified or if unspecified then total for all time.


```js
callfire.getCreditUsage({}, context)
```

#### Input
* input `object`
  * intervalBegin `integer`: Beginning of usage period formatted in unix time milliseconds. Example: 1473781817000
  * intervalEnd `integer`: End of usage period formatted in unix time milliseconds. Example: 1473781817000

#### Output
* output [CreditUsage](#creditusage)

### getBillingPlanUsage
Searches for the data of a billing plan usage for the user. Returns the data of a billing plan usage for the current month


```js
callfire.getBillingPlanUsage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BillingPlanUsage](#billingplanusage)

### getCallerIds
Returns a list of verified caller ids. If the number is not shown in the list, then it is not verified. In this case sending of a verification code is required.


```js
callfire.getCallerIds(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CallerIdList](#calleridlist)

### sendVerificationCodeToCallerId
Generates and sends a verification code to the phone number provided in the path. The verification code is delivered via a phone call. This code needs to be submitted to the verify caller id API endpoint to complete verification.


```js
callfire.sendVerificationCodeToCallerId({
  "callerid": ""
}, context)
```

#### Input
* input `object`
  * callerid **required** `string`: A phone number in E.164 format (11-digit) which needs to be verified. Example: 12132000384

#### Output
*Output schema unknown*

### verifyCallerId
With the verification code received from the Create caller id endpoint, a call to this endpoint is required to finish verification


```js
callfire.verifyCallerId({
  "callerid": ""
}, context)
```

#### Input
* input `object`
  * callerid **required** `string`: A phone number in E.164 format (11-digit) which needs to be verified. Example: 12132000384
  * body [CallerIdVerificationRequest](#calleridverificationrequest)

#### Output
* output `boolean`

### createMedia
Uploads media file to account, acceptable media formats: bmp, gif, jpg, m4a, mp3, mp4, png, wav


```js
callfire.createMedia({
  "file": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`: Binary media file
  * name `string`: A name of a media file

#### Output
* output [ResourceId](#resourceid)

### getMediaDataByKey
Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc


```js
callfire.getMediaDataByKey({
  "key": "",
  "extension": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: A hash-key of a media resource
  * extension **required** `string`: Media file type, available types: bmp, gif, jpg, m4a, mp3, mp4, png, wav

#### Output
* output `file`

### getMedia
Get media resource by id


```js
callfire.getMedia({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a media resource
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [Media](#media)

### getMediaData
Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc


```js
callfire.getMediaData({
  "id": 0,
  "extension": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a media resource
  * extension **required** `string`: Media file type. Available types: bmp, gif, jpg, m4a, mp3, mp4, png, wav

#### Output
* output `file`

### getMediaDataBinary
Download a MP3 media, endpoint returns application/binary content-type


```js
callfire.getMediaDataBinary({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a media resource

#### Output
* output `file`

### findNumberLeases
Searches for all numbers leased by account user. This API is useful for finding all numbers currently owned by the user. Returns a paged list of number leases.


```js
callfire.findNumberLeases({}, context)
```

#### Input
* input `object`
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * prefix `string`: A 4-7 digit prefix
  * city `string`: A city name
  * state `string`: A two-letter state code. Example: CA, IL, etc.
  * zipcode `string`: A five-digit Zipcode
  * lata `string`: A local access and transport area (LATA)
  * rateCenter `string`: A rate center. A rate center is a geographical area used by a Local Exchange Carrier (LEC) to determine the boundaries for local calling, billing and allocation of phone numbers
  * labelName `string`: A label name
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [NumberLeasePage](#numberleasepage)

### findNumberLeaseConfigs
Searches for all number lease configs for the user. Returns a paged list of NumberConfig


```js
callfire.findNumberLeaseConfigs({}, context)
```

#### Input
* input `object`
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * prefix `string`: A 4-7 digit prefix
  * city `string`: A city name
  * state `string`: A two-letter state code. Example: CA, IL, etc.
  * zipcode `string`: A five-digit Zipcode
  * lata `string`: A local access and transport area (LATA)
  * rateCenter `string`: A rate center. A rate center is a geographical area used by a Local Exchange Carrier (LEC) to determine the boundaries for local calling, billing and assigning phone numbers
  * labelName `string`: A label name
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [NumberConfigPage](#numberconfigpage)

### getNumberLeaseConfig
Returns a single NumberConfig instance for a given number lease


```js
callfire.getNumberLeaseConfig({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: A phone number in E.164 format (11-digit). Example: 12132000384
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [NumberConfig](#numberconfig)

### updateNumberLeaseConfig
Updates a phone number lease configuration. Use this API endpoint to add an Inbound IVR or Call Tracking feature to a CallFire phone number. Call tracking configuration allows you to track the incoming calls, to analyze and to respond customers using sms or voice replies. For more information see [call tracking page](https://www.callfire.com/products/call-tracking)


```js
callfire.updateNumberLeaseConfig({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: A phone number in E.164 format (11-digit) which needs to be verified. Example: 12132000384
  * body [NumberConfig](#numberconfig)

#### Output
*Output schema unknown*

### getNumberLease
Returns a single NumberLease instance for a given number


```js
callfire.getNumberLease({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: A phone number in E.164 format (11-digit). Example: 12132000384
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [NumberLease](#numberlease)

### updateNumberLease
Updates a number lease instance. Ability to turn on/off autoRenew and toggle call/text features for a particular number


```js
callfire.updateNumberLease({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: A phone number in E.164 format (11-digit). Example: 12132000384
  * body [NumberLease](#numberlease)

#### Output
*Output schema unknown*

### findNumbersLocal
Searches for numbers available for purchase in CallFire local numbers catalog . At least one additional parameter is required. User may filter local numbers by their region information.


```js
callfire.findNumbersLocal({}, context)
```

#### Input
* input `object`
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * prefix `string`: A 4-7 digit prefix
  * city `string`: A city name
  * state `string`: A two-letter state code. Example: CA, IL, etc.
  * zipcode `string`: A five-digit Zipcode
  * lata `string`: A local access and transport area (LATA)
  * rateCenter `string`: A rate center. A rate center is a geographical area used by a Local Exchange Carrier (LEC) to determine the boundaries for local calling, billing and assigning phone numbers.
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [NumberList](#numberlist)

### findNumberRegions
Searches for region information. Use this API to obtain detailed region information that can be used to query for more specific phone numbers than a general query.


```js
callfire.findNumberRegions({}, context)
```

#### Input
* input `object`
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * prefix `string`: A 4-7 digit prefix
  * city `string`: A city name
  * state `string`: A two-letter state code. Example: CA, IL, etc.
  * zipcode `string`: A five-digit Zipcode
  * lata `string`: A local access and transport area (LATA)
  * rateCenter `string`: A rate center. A rate center is a geographical area used by a Local Exchange Carrier (LEC) to determine the boundaries for local calling, billing and assigning phone numbers.
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [RegionPage](#regionpage)

### findNumbersTollfree
Searches for the toll free numbers which are available for purchase in the CallFire catalog


```js
callfire.findNumbersTollfree({}, context)
```

#### Input
* input `object`
  * pattern `string`: Filter toll free numbers by prefix, pattern must be 3 char long and should end with '*'. Examples: 8**, 85*, 87* (but 855 will fail because pattern must end with '*').
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [NumberList](#numberlist)

### orderKeywords
Purchase keywords. Send a list of available keywords into this API to purchase them using CallFire credits. Make sure the account has enough credits before trying to purchase the keywords


```js
callfire.orderKeywords({}, context)
```

#### Input
* input `object`
  * body [KeywordPurchaseRequest](#keywordpurchaserequest)

#### Output
* output [ResourceId](#resourceid)

### orderNumbers
Purchase numbers. There are many ways to purchase a number. Set either 'tollFreeCount' or 'localCount' along with some querying fields to purchase numbers by bulk query. Set the list of numbers to purchase by list. Available numbers will be purchased using CallFire credits owned by the user. Make sure the account has enough credits before trying to purchase


```js
callfire.orderNumbers({}, context)
```

#### Input
* input `object`
  * body [NumberPurchaseRequest](#numberpurchaserequest)

#### Output
* output [ResourceId](#resourceid)

### getOrder
Returns a single NumberOrder instance for a given order id. Order contains information about purchased keywords, local, toll-free numbers


```js
callfire.getOrder({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of an order
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [NumberOrder](#numberorder)

### findTexts
Searches for texts sent or received by user. Use "campaignId=0" parameter to query for all texts sent through the POST /texts API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)


```js
callfire.findTexts({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * id `array`: List of Text ids to search for, if ids specified other query params ignored
  * campaignId `integer`: An id of a campaign, queries for texts inside a particular campaign. Specify null to list texts of all campaigns or 0 for a default campaign
  * batchId `integer`: An Id of a contact batch, queries for texts which are used in the particular contact batch
  * fromNumber `string`: A phone number in E.164 format (11-digit). Example: 12132000384, 67076
  * toNumber `string`: A phone number in E.164 format (11-digit). Example: 12132000384, 67076
  * label `string`: A label of a text message
  * states `string`: Expected text statuses in comma separated string, available values: READY, SELECTED, CALLBACK, FINISHED, DISABLED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
  * results `string`: Expected text results in comma separated string, available values: SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
  * inbound `boolean`: Specify true for inbound or false for outbounds. Do not specify this parameter if you need to get both inbound and outbound texts listed in response
  * intervalBegin `integer`: Start of the find time interval, formatted in unix time milliseconds. Example: 1473781817000
  * intervalEnd `integer`: End of the find time interval, formatted in unix time milliseconds. Example: 1473781817000

#### Output
* output [TextPage](#textpage)

### sendTexts
Use the /texts API to send individual texts quickly. By default all texts are going out from CallFire's dedicated short code 67076


```js
callfire.sendTexts({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * campaignId `integer`: Specifies a campaignId to send texts through a previously created campaign
  * defaultMessage `string`: Text message can be overridden by TextRecipient.message field. If multiple recipients have the same text message to a different recipients it is better to specify a single default message and do not duplicate it in each recipient.
  * strictValidation `boolean`: Turns on strict validation for recipients
  * body `array`
    * items [TextRecipient](#textrecipient)

#### Output
* output [TextList](#textlist)

### findTextAutoReplys
Find all text autoreplies created by user. Returns a paged list of TextAutoReply


```js
callfire.findTextAutoReplys({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * number `string`: Phone number in E.164 format (11-digit) which contains a TextAutoReply. Example: 12132000384. If number is empty then operator returns all autoreplies configured for the user's account

#### Output
* output [TextAutoReplyPage](#textautoreplypage)

### createTextAutoReply
CallFire gives you possibility to set up auto reply messages for your numbers and keywords. You can set a general auto reply for anyone who texts your number, keyword, and/or include a text to match, so that the auto reply would be sent only to those who text the matched text


```js
callfire.createTextAutoReply({}, context)
```

#### Input
* input `object`
  * body [TextAutoReply](#textautoreply)

#### Output
* output [ResourceId](#resourceid)

### deleteTextAutoReply
Deletes a text auto reply and removes the configuration. Can not delete a TextAutoReply which is currently active for a campaign


```js
callfire.deleteTextAutoReply({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text auto reply

#### Output
*Output schema unknown*

### getTextAutoReply
Returns a single TextAutoReply instance for a given text auto reply id


```js
callfire.getTextAutoReply({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text auto reply
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [TextAutoReply](#textautoreply)

### findTextBroadcasts
Searches for all text broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of text broadcasts


```js
callfire.findTextBroadcasts({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * label `string`: A label of a text broadcast
  * name `string`: A name of text broadcast
  * running `boolean`: Returns broadcasts only in running state.

#### Output
* output [TextBroadcastPage](#textbroadcastpage)

### createTextBroadcast
Creates a text broadcast campaign using the Text Broadcast API. Send a TextBroadcast object in the message body to detail a text broadcast campaign. A campaign can be created without contacts and with bare minimum configuration, but contacts have to be added further on to use the campaign. It supports scheduling, retry logic, pattern-based messages.


```js
callfire.createTextBroadcast({}, context)
```

#### Input
* input `object`
  * start `boolean`: If true then starts the campaign immediately (not required).
  * strictValidation `boolean`: Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
  * body [TextBroadcast](#textbroadcast)

#### Output
* output [ResourceId](#resourceid)

### getTextBroadcast
Returns a single TextBroadcast instance for a given text broadcast id


```js
callfire.getTextBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text broadcast
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [TextBroadcast](#textbroadcast)

### updateTextBroadcast
Allows modifying the configuration of existing text broadcast campaign. See TextBroadcast for more information on what can/can't be updated on this API


```js
callfire.updateTextBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text broadcast
  * strictValidation `boolean`: Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
  * body [TextBroadcast](#textbroadcast)

#### Output
*Output schema unknown*

### archiveTextBroadcast
Archives a text broadcast (and hides it in the search results)


```js
callfire.archiveTextBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text broadcast to archive

#### Output
*Output schema unknown*

### getTextBroadcastBatches
This endpoint will enable the user to page through all of the batches for a particular text broadcast campaign


```js
callfire.getTextBroadcastBatches({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text broadcast
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

#### Output
* output [BatchPage](#batchpage)

### addTextBroadcastBatch
Allows adding an extra batches to an already created text broadcast campaign. The batches which being  added pass the CallFire validation process (unlike in the recipients version of this API). That is why using of a scrubDuplicates flag remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers


```js
callfire.addTextBroadcastBatch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text broadcast
  * strictValidation `boolean`: Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
  * body [BatchRequest](#batchrequest)

#### Output
* output [ResourceId](#resourceid)

### addTextBroadcastRecipients
Use this API to add recipients to a text broadcast which is already created. Post a list of Recipient objects to be immediately added to the text broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers


```js
callfire.addTextBroadcastRecipients({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text broadcast
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * strictValidation `boolean`: Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
  * body `array`
    * items [TextRecipient](#textrecipient)

#### Output
* output [TextList](#textlist)

### startTextBroadcast
Starts a text broadcast


```js
callfire.startTextBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text broadcast to start

#### Output
*Output schema unknown*

### getTextBroadcastStats
Returns the broadcast statistics. Example: total number of the sent/received actions, total cost, number of remaining outbound actions, error count, etc


```js
callfire.getTextBroadcastStats({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text broadcast
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * begin `integer`: Start of a search find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * end `integer`: End of a search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT

#### Output
* output [TextBroadcastStatsDto](#textbroadcaststatsdto)

### stopTextBroadcast
Stops a text broadcast


```js
callfire.stopTextBroadcast({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An Id of a text broadcast. To stop the broadcast

#### Output
*Output schema unknown*

### getTextBroadcastTexts
This endpoint will enable the user to page through all of the texts for a particular text broadcast campaign


```js
callfire.getTextBroadcastTexts({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text broadcast
  * batchId `integer`: ~
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

#### Output
* output [TextPage](#textpage)

### getText
Returns a single Text instance for a given text id


```js
callfire.getText({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a text
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [Text](#text)

### findWebhooks
Searches all webhooks available for a current user. Searches by name, resource, event, callback URL, or whether they are enabled. Returns a paged list of Webhooks


```js
callfire.findWebhooks({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
  * limit `integer`: To set the maximum number of records to return in a paged list response. The default is 100
  * offset `integer`: Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
  * name `string`: A name of a webhook
  * resource `string`: A name of a resource, available values: 'CccCampaign', 'CallBroadcast', 'TextBroadcast',  'OutboundCall', 'OutboundText', 'InboundCall', 'InboundText', 'ContactList'
  * event `string`: A name of event, available values: 'started', 'stopped', 'finished'
  * callback `string`: A callback URL
  * enabled `boolean`: Specifies whether webhook is enabled

#### Output
* output [WebhookPage](#webhookpage)

### createWebhook
Create a Webhook for notification in the CallFire system. Use the webhooks API to receive notifications of important CallFire events. Select the resource to listen to, and then choose the resource events to receive notifications on. When an event triggers, a POST will be made to the callback URL with a payload of notification information. Available resources and their events include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed']. Webhooks support secret token which is used as signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)


```js
callfire.createWebhook({}, context)
```

#### Input
* input `object`
  * body [Webhook](#webhook)

#### Output
* output [ResourceId](#resourceid)

### findWebhookResources
Searches for webhook resources. Available resources include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed']


```js
callfire.findWebhookResources({}, context)
```

#### Input
* input `object`
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [ItemList](#itemlist)

### getWebhookResource
Returns information about supported events for a given webhook resource


```js
callfire.getWebhookResource({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: A name of a webhook resource. Available resources include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed']
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [WebhookResource](#webhookresource)

### deleteWebhook
Deletes a webhook instance. Will be removed permanently


```js
callfire.deleteWebhook({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An Id of a webhook

#### Output
*Output schema unknown*

### getWebhook
Returns a single Webhook instance for a given webhook id


```js
callfire.getWebhook({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a webhook
  * fields `string`: Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

#### Output
* output [Webhook](#webhook)

### updateWebhook
Updates the information in existing webhook


```js
callfire.updateWebhook({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: An id of a webhook
  * body [Webhook](#webhook)

#### Output
*Output schema unknown*



## Definitions

### Account
* Account `object`: Object represents user account in Callfire system
  * email `string`: Email address associated with an account
  * firstName `string`: First name of an account holder
  * id `integer`: An id of an account
  * lastName `string`: Last name of an account holder
  * name `string`: Name associated with an account
  * permissions `array`: User permissions (API, ACCOUNT_HOLDER, AGENT)
    * items `string`

### AddContactListContactsRequest
* AddContactListContactsRequest `object`: Request object for adding new contacts to an existing contact list
  * contactIds `array`: A list of ids of existing contacts in Callfire system
    * items `integer`
  * contactNumbers `array`: A phone number in E.164 format (11-digit). Examples: 12132000384
    * items `string`
  * contactNumbersField `string`: A type of phone number (homePhone, workPhone, mobilePhone). This parameter works together with contactNumbers and specifies which types of numbers are included to a list
  * contacts `array`: A list of new contact objects which need to be added
    * items [Contact](#contact)
  * useCustomFields `boolean`: A flag to indicate how to define property names for contacts. If true, uses the field and property names exactly as defined. If false will assign custom properties and fields to A, B, C, etc

### AddDoNotContactRequest
* AddDoNotContactRequest `object`: Request object for adding new Do-Not-Contact records to account.
  * call `boolean`: If set to true add all given numbers to Do-Not-Call list. Default value: true
  * numbers `array`: A list of phone numbers in E.164 format (11-digit), example: 12132000384, 14142777322
    * items `string`
  * source `string`: A list of new contact objects which need to be added. Default value: Api V2
  * text `boolean`: If set to true add all given numbers to Do-Not-Text list. Default value: true

### ApiCredential
* ApiCredential `object`: An object represents API user in CallFire system. Use /me/api/credentials endpoint to manage API users on your account
  * enabled `boolean`: Is credential enabled
  * id `integer`: An id of an API credential
  * name `string`: A name of an API credential
  * password `string`: A password for credential
  * username `string`: Username for credential

### ApiCredentialPage
* ApiCredentialPage `object`: ~
  * items `array`: ~
    * items [ApiCredential](#apicredential)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### Batch
* Batch `object`: A batch represents a group of contacts which can be dialed or texted via call/text broadcast
  * broadcastId `integer`: An id of broadcast which batch belongs to
  * created `integer`: A date and time when batch was created, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * enabled `boolean`: An enabled batch. If batch is disabled its contacts remain undialed/untexted
  * id `integer`: A id of a batch
  * name `string`: A batch name
  * remaining `integer`: A number of contacts remaining undialed/untexted
  * size `integer`: A total number of contacts in batch
  * status `string` (values: NEW, VALIDATING, ERRORS, SOURCE_ERROR, ACTIVE): A status of batch (NEW, VALIDATING, ERRORS, SOURCE_ERROR, ACTIVE). NEW - batch is queued for validation; VALIDATING - batch is currently validating; ERRORS - batch is processed, some validation errors occurred; SOURCE_ERROR - if contact source is contact list in Callfire system and it has an error; ACTIVE - batch is processed and ready

### BatchPage
* BatchPage `object`: ~
  * items `array`: ~
    * items [Batch](#batch)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### BatchRequest
* BatchRequest `object`: Request object is used for adding new batch to an existing broadcast
  * contactListId `integer`: An id of existing contact list
  * name `string`: A name of batch
  * recipients `array`: A list of Recipient objects. For each recipient you can set its phone number or existing contact id to use contact which already exists in account
    * items [Recipient](#recipient)
  * scrubDuplicates `boolean`: Removes duplicate recipients from batch if true

### BillingPlanUsage
* BillingPlanUsage `object`: Contains statistics of billing plan usage
  * intervalEnd `integer`: End of usage period formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * intervalStart `integer`: Start of usage period formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * remainingPayAsYouGoCredits `number`: Remaining pay as you go credits are rounded to nearest whole value
  * remainingPlanCredits `number`: Remaining credits are rounded to nearest whole value associated with a plan
  * totalRemainingCredits `number`: Total number of remaining credits (remainingPlanCredits + remainingPayAsYouGoCredits)

### Call
* Call `object`: Represents a call action sent or received by Callfire platform
  * agentCall `boolean`: An internal call to an agent
  * attributes `object`: Map of user-defined string attributes associated with an action
  * batchId `integer`: An id of contact batch associated with an action
  * campaignId `integer`: An id of broadcast associated with an action if call is sent as part of call broadcast
  * contact [Contact](#contact)
  * created `integer`: The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT 
  * finalCallResult `string` (values: LA, AM, BUSY, DNC, XFER, NO_ANS, XFER_LEG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED, SD, POSTPONED, ABANDONED, SKIPPED): Result of a call (LA, AM, BUSY, DNC, XFER, NO_ANS, XFER_LEG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED, SD, POSTPONED, ABANDONED, SKIPPED). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
  * fromNumber `string`: A sender's phone number in E.164 (11-digit) format
  * id `integer`: An id of  an action
  * inbound `boolean`: Is action inbound
  * labels `array`: Labels associated with action or broadcast for this action
    * items `string`
  * modified `integer`: The time when the given resource was modified, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT 
  * notes `array`: Notes of call added by an agent
    * items [Note](#note)
  * records `array`: List of call records, each record contains call details like originate time, duration, cost, notes made by agents. A single contact may have a multiple phone numbers. In this case if given call was sent as a part of broadcast with configured retry logic then each call record will contain details about attempted phone number
    * items [CallRecord](#callrecord)
  * state `string` (values: READY, SELECTED, CALLBACK, FINISHED, DISABLED, SKIPPED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT): State of an action (READY, SELECTED, CALLBACK, DISABLED, FINISHED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
  * toNumber `string`: A recipient's phone number in E.164 (11-digit) format

### CallBroadcast
* CallBroadcast `object`: Call broadcast can be used to send out a voice message to a group of numbers. It supports IVR scripting, scheduling, retry logic, playing pre-recorded sounds, answering machine detection
  * answeringMachineConfig `string` (values: AM_ONLY, AM_AND_LIVE, LIVE_WITH_AMD, LIVE_IMMEDIATE): Specifies which action should be taken if answering machine was detected, default value: AM_AND_LIVE. Available values: AM_ONLY - run AMD (Answering Machine Detection), hang up if LA (Live Answer); AM_AND_LIVE - run AMD, play separate live vs. machine sound; LIVE_WITH_AMD, run AMD, hang up if machine answers; LIVE_IMMEDIATE - no AMD, play live sound immediately
  * dialplanXml `string`: IVR xml is a document which describes the dialplan to setup the IVR broadcast
  * fromNumber `string`: Phone number in E.164 format (11-digit) or short code for text. Example: 12132000384, 67076
  * id `integer`: A unique id of broadcast (readonly)
  * labels `array`: Labels of a broadcast
    * items `string`
  * lastModified `integer`: The time when a given resource was updated, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT 
  * localTimeRestriction [LocalTimeRestriction](#localtimerestriction)
  * maxActive `integer`: Sets a maximum number of calls to be dialed by Callfire at once
  * maxActiveTransfers `integer`: A maximum number of active transfers
  * name `string`: A name of a broadcast
  * recipients `array`: Recipients of a call broadcast, can be either existing contacts or a new ones
    * items [Recipient](#recipient)
  * resumeNextDay `boolean`: If true resumes the unfinished campaign to the next day
  * retryConfig [RetryConfig](#retryconfig)
  * schedules `array`: A list of schedule objects which specifies a range of time when broadcast should be started and stopped. Supports the scheduling per day of week
    * items [Schedule](#schedule)
  * sounds [CallBroadcastSounds](#callbroadcastsounds)
  * status `string` (values: TEST, SETUP, START_PENDING, RUNNING, SCHEDULED, STOPPED, SUSPENDED, FINISHED, ARCHIVED, VALIDATING_START, VALIDATING_EMAIL): A status of a broadcast (read only). SETUP - campaign isn't configured yet; START_PENDING - waiting for contact batch population; RUNNING - campaign is running; STOPPED - campaign is stopped; FINISHED - campaign is finished; ARCHIVED - campaign was archived

### CallBroadcastPage
* CallBroadcastPage `object`: ~
  * items `array`: ~
    * items [CallBroadcast](#callbroadcast)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### CallBroadcastSounds
* CallBroadcastSounds `object`: A set of sounds assigned to a voice broadcast to play according to an answering machine configuration. You can add the existing sounds from the account's sound library or to provide a text which will be converted into a speech. There are four sound options available for a Voice Broadcast campaign
  * dncDigit `string`: Digit pressed to place contact in DNC list
  * dncSoundId `integer`: An id of sound file to play when recipient decided to opt out and pressed DNC digit
  * dncSoundText `string`: Text to be turned into sound, plays to notify that Do Not Call digit has been pressed and inform your contact of their placement on the Do Not Call list
  * dncSoundTextVoice `string` (values: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1): The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1)
  * liveSoundId `integer`: An id of sound file to play if phone is answered
  * liveSoundText `string`: Text to be used to turned into a sound. This text will be played when the phone is answered
  * liveSoundTextVoice `string` (values: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1): The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1) for a live sound
  * machineSoundId `integer`: An id of a sound file to play if answering machine is detected
  * machineSoundText `string`: Text to be turned into a sound. This text will be played when answering machine is detected
  * machineSoundTextVoice `string` (values: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1): The voice to be used (MALE1, FEMALE1 , FEMALE2, SPANISH1, FRENCHCANADIAN1) for a machine sound
  * transferDigit `string`: Digit pressed to initiate a transfer
  * transferNumber `string`: Phone number in E.164 format (11-digit) to transfer call to.  Example: 12132000384, 67076
  * transferSoundId `integer`: An id of a file to play if call is transferred
  * transferSoundText `string`: Text to be turned into a sound. This text will be played when the transfer digit is played
  * transferSoundTextVoice `string` (values: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1): The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1) for a sound transfer

### CallBroadcastStats
* CallBroadcastStats `object`: ~
  * answeringMachineCount `integer`: ~
  * billedAmount `number`: ~
  * billedDuration `integer`: ~
  * busyCount `integer`: ~
  * callsAttempted `integer`: ~
  * callsAwaitingRedial `integer`: ~
  * callsDuration `integer`: ~
  * callsLiveAnswer `integer`: ~
  * callsPlaced `integer`: ~
  * callsRemaining `integer`: ~
  * dialedCount `integer`: ~
  * doNotCallCount `integer`: ~
  * errorCount `integer`: ~
  * liveCount `integer`: ~
  * miscCount `integer`: ~
  * noAnswerCount `integer`: ~
  * remainingOutboundCount `integer`: ~
  * responseRatePercent `integer`: ~
  * totalCount `integer`: ~
  * totalOutboundCount `integer`: ~
  * transferCount `integer`: ~

### CallCreateSound
* CallCreateSound `object`: Request object is used for creating sound via a phone call. This sound will appear in account's sound library
  * name `string`: Name of a sound to create
  * toNumber `string`: Phone number in E.164 11-digit format to call to record a sound.  Example: 12132000384

### CallList
* CallList `object`: ~
  * items `array`: ~
    * items [Call](#call)

### CallPage
* CallPage `object`: ~
  * items `array`: ~
    * items [Call](#call)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### CallRecipient
* CallRecipient `object`: Recipient of a campaign action. Can be a phone number, contact, or contact list with attributes added to action. It is required to specify one of this values
  * attributes `object`: Map of user-defined string attributes associated with recipient
  * contactId `integer`: An id of existing contact used as recipient
  * dialplanXml `string`: An IVR xml document describing dialplan to setup an IVR broadcast. If dialplan is set there is no need to set live, machine and transfer sounds (or vice versa)
  * fromNumber `string`: ~
  * liveMessage `string`: Text to be turned into a sound, this text will be played when the phone is answered
  * liveMessageSoundId `integer`: An id of a sound file to play if phone is answered
  * machineMessage `string`: Text to be used to turn into sound, this text will be played when answering machine is detected
  * machineMessageSoundId `integer`: An id of a sound file to play if answering machine is detected
  * phoneNumber `string`: Recipient's phone number in E.164 format (11-digit) or short code. Example: 12132000384
  * transferDigit `string`: A digit pressed to initiate the transfer
  * transferMessage `string`: Text to be turned into sound, this text will be played when the transfer digit is played
  * transferMessageSoundId `integer`: An id of a sound file to play if call is transferred
  * transferNumber `string`: Phone number in E.164 format (11-digit) to transfer the call to. Example: 12132000384
  * voice `string` (values: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1): The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1)

### CallRecord
* CallRecord `object`: Represents a call sent to a contact's number
  * answerTime `integer`: Timestamp when call was answered, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * billedAmount `number`: A cost of the call
  * callerName `string`: ~
  * duration `integer`: Duration of the call in seconds
  * finishTime `integer`: Timestamp when call was finished, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * id `integer`: An id of a call record
  * labels `array`: Labels associated with a call action
    * items `string`
  * notes `array`: Notes of call added by agent
    * items [Note](#note)
  * originateTime `integer`: A date and time (timestamp) when call was originated by Callfire platform and went to downstream provider, formatted in unix time milliseconds (read only). Example: 1473781817000 
  * questionResponses `array`: Notes of call added by an agent
    * items [QuestionResponse](#questionresponse)
  * recordings `array`: A list of voice recordings of the call
    * items [CallRecording](#callrecording)
  * result `string` (values: LA, AM, BUSY, DNC, XFER, NO_ANS, XFER_LEG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED, SD, POSTPONED, ABANDONED, SKIPPED): ~
  * switchId `string`: ~
  * toNumber `string`: A phone number to which a call was addressed. Phone number in E.164 format (11-digit). Example: 12132000384

### CallRecording
* CallRecording `object`: Represents a recording of a voice call
  * callId `integer`: An id of a call action
  * campaignId `integer`: Contains broadcast id if call was sent as a part of voice broadcast
  * created `integer`: The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * hash `string`: A unique string hash identifier of a recording
  * id `integer`: An id of a call recording
  * lengthInBytes `integer`: A size of a recording file in bytes
  * lengthInSeconds `integer`: Duration of a recording in seconds
  * mp3Url `string`: A public URL of a call recording
  * name `string`: A name of a recording
  * state `string` (values: RECORDING, READY, ERROR): Current state of a recording, available values: RECORDING - recording is in progress, READY - recording is ready, ERROR - error has occurred and recording can be broken

### CallRecordingList
* CallRecordingList `object`: ~
  * items `array`: ~
    * items [CallRecording](#callrecording)

### CallTrackingConfig
* CallTrackingConfig `object`: Call tracking configuration allows you track incoming calls, analyze, respond to customers using sms or voice replies. For more information see [call tracking page](https://www.callfire.com/products/call-tracking)
  * failedTransferSoundId `integer`: An id of sound file, played if caller can not be connected to transfer number for any reason
  * googleAnalytics [GoogleAnalytics](#googleanalytics)
  * introSoundId `integer`: An id of sound file, played if call is answered
  * recorded `boolean`: Records all inbound calls
  * screen `boolean`: Screens the incoming calls
  * transferNumbers `array`: List of phone numbers in E.164 format (11-digit) are used for transfer. Example: 12132000384
    * items `string`
  * voicemail `boolean`: Enables voicemail if call is not transferred
  * voicemailSoundId `integer`: An id of sound file, played if voicemail is enabled and a call isn't transferred
  * weeklySchedule [WeeklySchedule](#weeklyschedule)
  * whisperSoundId `integer`: An id of sound file, played if call is screened

### CallerId
* CallerId `object`: ~
  * phoneNumber `string`: ~

### CallerIdList
* CallerIdList `object`: ~
  * items `array`: ~
    * items [CallerId](#callerid)

### CallerIdVerificationRequest
* CallerIdVerificationRequest `object`: Request which is used to verify a new caller id number
  * verificationCode `string`: The code used to verify a caller id number

### CampaignSound
* CampaignSound `object`: Represents a sound recording from account's sound library which can be used in different API operations
  * created `integer`: The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * duplicate `boolean`: True if the same sound file exists in a sound library of account
  * id `integer`: An id of a sound file
  * lengthInSeconds `integer`: Length of a sound in seconds
  * name `string`: A name of a sound file
  * status `string` (values: UPLOAD, RECORDING, ACTIVE, ACTIVE_SYSTEM, FAILED, ARCHIVED, SCRUBBED): A current status of a sound, available values: UPLOAD - uploading is in progress, RECORDING - recording of sound is in progress, ACTIVE - sound is ready, FAILED, ARCHIVED - sound was archived, SCRUBBED - sound was scrubbed 

### CampaignSoundPage
* CampaignSoundPage `object`: ~
  * items `array`: ~
    * items [CampaignSound](#campaignsound)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### Contact
* Contact `object`: Represents a contact in CallFire platform. Contains info about the people you want to contact. It allows you to store a user-defined properties for each contact
  * deleted `boolean`: A deleted contact, deleted contacts are hidden from search results
  * externalId `string`: An external id of a contact for syncing with external sources
  * externalSystem `string`: External system that external id refers to
  * extraPhone1 `string`: Phone number in E.164 format (11-digit). Example: 12132000384
  * extraPhone2 `string`: Phone number in E.164 format (11-digit). Example: 12132000384
  * extraPhone3 `string`: Phone number in E.164 format (11-digit). Example: 12132000384
  * firstName `string`: A first name of a contact
  * homePhone `string`: Phone number in E.164 format (11-digit). Example: 12132000384
  * id `integer`: An id of a contact
  * lastName `string`: A last name of a contact
  * mobilePhone `string`: Phone number in E.164 format (11-digit). Example: 12132000384
  * properties `object`: Map of user-defined string properties for contact
  * workPhone `string`: Phone number in E.164 format (11-digit). Example: 12132000384
  * zipcode `string`: A Zip code of a contact

### ContactHistory
* ContactHistory `object`: Contains history of all calls and texts addressed to a given contact
  * calls `array`: List of Call objects addressed to a given contact
    * items [Call](#call)
  * id `integer`: An id of a contact
  * texts `array`: List of Text objects addressed to a given contact
    * items [Text](#text)

### ContactList
* ContactList `object`: Represents a contact list in CallFire system
  * created `integer`: A time when a given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * id `integer`: An Id of a contact list
  * name `string`: A name of a contact list
  * size `integer`: A number of contacts in a contact list
  * status `string` (values: ACTIVE, VALIDATING, IMPORTING, IMPORT_FAILED, ERRORS, DELETED, PARSE_FAILED, COLUMN_TOO_LARGE): A current status of a contact list, available values: ACTIVE - contact list is ready, VALIDATING - contact list validation is in progress, IMPORTING - importing is in progress, IMPORT_FAILED - in case of errors occurred during the importing, ERRORS - contact list has validation errors, DELETED - contact list was deleted, PARSE_FAILED - contacts cannot be parsed, COLUMN_TOO_LARGE - if size of phone number or any other column exceeds 255 characters

### ContactListPage
* ContactListPage `object`: ~
  * items `array`: ~
    * items [ContactList](#contactlist)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### ContactPage
* ContactPage `object`: ~
  * items `array`: ~
    * items [Contact](#contact)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### CreateContactListRequest
* CreateContactListRequest `object`: A request object is used to create a contact list from one of available contact sources
  * contactIds `array`: A list of ids of existing contacts in Callfire system
    * items `integer`
  * contactNumbers `array`: List of numbers in E.164 format (11-digit). Example: 12132000384
    * items `string`
  * contactNumbersField `string`: A type of a phone number (homePhone, workPhone, mobilePhone). This parameter is used with contactNumbers and specifies which types of phone numbers are included to a contact list
  * contacts `array`: A list of new contact objects to be added
    * items [Contact](#contact)
  * name `string`: A name of a contact list
  * useCustomFields `boolean`: A flag to indicate how to define property names for contacts. If true, uses the field and property names exactly as defined. If false will assign custom properties and fields to A, B, C, etc

### CreditUsage
* CreditUsage `object`: Contains statistics of billing plan usage
  * callsDurationMinutes `integer`: Sum of calls duration rounded to nearest whole minute
  * creditsUsed `number`: Total credits used calls and texts.
  * intervalBegin `integer`: Start of usage period formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * intervalEnd `integer`: End of usage period formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * textsSent `integer`: Number of texts sent

### DncListDto
* DncListDto: ~
  * items `array`: ~
    * items `object`
  * items `array`
    * items [DoNotContact](#donotcontact)

### DoNotContact
* DoNotContact `object`: Represents an opted out contact
  * call `boolean`: A number on Do-Not-Call list
  * campaignId `integer`: An Id of a campaign which was used to send a message to DNC number
  * created `integer`: A time when a given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * number `string`: A single DNC number in E.164 format (11-digit). Example: 12132000384
  * source `string`: The name of DNC source (can be the name of DNC list that user uploads to CallFire)
  * text `boolean`: A number on Do-Not-Text list

### DoNotContactPage
* DoNotContactPage `object`: ~
  * items `array`: ~
    * items [DoNotContact](#donotcontact)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### ErrorResponse
* ErrorResponse `object`: Error response containing error info
  * developerMessage `string`: ~
  * helpLink `string`: ~
  * httpStatusCode `integer`: ~
  * internalCode `integer`: ~
  * message `string`: ~

### GoogleAnalytics
* GoogleAnalytics `object`: Google Analytics for Call Tracking
  * category `string`: A category to group. For example: Sales or Support
  * domain `string`: A domain name for analytics
  * googleAccountId `string`: An id of a Google account, example: UA-XXXXX-2X

### InputStream
* InputStream `object`: ~

### ItemList
* ItemList `object`: ~
  * items `array`: ~
    * items `object`

### IvrInboundConfig
* IvrInboundConfig `object`: ~
  * dialplanXml `string`: ~

### JResponse
* JResponse `object`: ~
  * entity `object`: ~
  * metadata `object`: ~
  * status `integer`: ~
  * statusType [StatusType](#statustype)
  * type [Type](#type)

### Keyword
* Keyword `object`: ~
  * keyword `string`: ~
  * shortCode `string`: ~

### KeywordLease
* KeywordLease `object`: Represents a lease object for a given keyword
  * autoRenew `boolean`: Enables the auto renewal of a keyword lease at the end of each billing cycle
  * keyword `string`: A text used as a keyword
  * leaseBegin `integer`: A time of a lease timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * leaseEnd `integer`: A date and time when the keyword lease is finishes. Timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000
  * shortCode `string`: A short code assigned to keyword. Example: 67076
  * status `string` (values: PENDING, ACTIVE, RELEASED, UNAVAILABLE): A lease status. Available values: PENDING, ACTIVE, RELEASED, UNAVAILABLE

### KeywordLeasePage
* KeywordLeasePage `object`: ~
  * items `array`: ~
    * items [KeywordLease](#keywordlease)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### KeywordList
* KeywordList `object`: ~
  * items `array`: ~
    * items [Keyword](#keyword)

### KeywordPurchaseRequest
* KeywordPurchaseRequest `object`: Request object is used to purchase keywords
  * keywords `array`: A list of keywords
    * items `string`

### LocalDate
* LocalDate `object`: Represents a date object (without time part)
  * day `integer`: A day of the month. Available values: 1-31
  * month `integer`: A month of the year. Available values: 1-12
  * year `integer`: A year. Example: 2020

### LocalTime
* LocalTime `object`: Represents a time part of a given date
  * hour `integer`: An hour of the day. Available values: 0-23
  * minute `integer`: The minutes. Available values: 0-59
  * second `integer`: The seconds.  Available values: 0-59

### LocalTimeRestriction
* LocalTimeRestriction `object`: Represents a range of time during which Callfire will send a call or text to recipients. Timeframe uses the local timezone of recipient's number
  * beginHour `integer`: An hour of restriction start
  * beginMinute `integer`: The minutes to start a restriction
  * enabled `boolean`: A restriction enabled
  * endHour `integer`: An hour of restriction end
  * endMinute `integer`: The minutes of restriction end

### Media
* Media `object`: Represents a media file which can be added to a text message
  * accountId `integer`: ~
  * created `integer`: The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 
  * id `integer`: An id of a media file
  * lengthInBytes `integer`: A size of a media file in bytes
  * mediaType `string`: A MIME type of media file, ex: image/jpeg, image/png, video/mp4, audio/mp3, etc
  * name `string`: A name of a media file
  * publicUrl `string`: A public URL of a media file

### Note
* Note `object`: Represents a note which can be added to a call
  * created `integer`: The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000
  * text `string`: A text of a note

### Number
* Number `object`: ~
  * nationalFormat `string`: ~
  * number `string`: ~
  * region [Region](#region)
  * tollFree `boolean`: ~

### NumberConfig
* NumberConfig `object`: Represents the configuration of a phone number purchased by user. You can configure number to accept inbound calls, play sounds to customer, make a transfer or setup an IVR script to interact with customer. See [CallFire IVR](https://www.callfire.com/products/ivr) for more info
  * callTrackingConfig [CallTrackingConfig](#calltrackingconfig)
  * configType `string` (values: IVR, TRACKING): A type of config. Available values: TRACKING, IVR
  * ivrInboundConfig [IvrInboundConfig](#ivrinboundconfig)
  * number `string`: Phone number in E.164 format (11-digit). Example: 12132000384

### NumberConfigPage
* NumberConfigPage `object`: ~
  * items `array`: ~
    * items [NumberConfig](#numberconfig)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### NumberLease
* NumberLease `object`: Represents a lease object for a given phone number
  * autoRenew `boolean`: Enables the auto renewal of number lease at end of each billing cycle
  * callFeatureStatus `string` (values: UNSUPPORTED, PENDING, DISABLED, ENABLED): A status of a call feature. Available values: DISABLED, ENABLED
  * labels `array`: ~
    * items `string`
  * leaseBegin `integer`: A date and time of a lease start. Timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000
  * leaseEnd `integer`: A data and time of a lease finish. Timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000
  * nationalFormat `string`: Formatted number with a country code
  * number `string`: A phone number in E.164 format (11-digit). Example: 12132000384
  * region [Region](#region)
  * status `string` (values: PENDING, ACTIVE, RELEASED, UNAVAILABLE): A lease status. Available values: PENDING, ACTIVE, RELEASED, UNAVAILABLE
  * textFeatureStatus `string` (values: UNSUPPORTED, PENDING, DISABLED, ENABLED): A status of a text feature. Available values: DISABLED, ENABLED
  * tollFree `boolean`: A  toll-free number

### NumberLeasePage
* NumberLeasePage `object`: ~
  * items `array`: ~
    * items [NumberLease](#numberlease)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### NumberList
* NumberList `object`: ~
  * items `array`: ~
    * items [Number](#number)

### NumberOrder
* NumberOrder `object`: Represents an order created on the CallFire platform
  * created `integer`: The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000
  * id `integer`: An id of an order
  * keywords [NumberOrderItem](#numberorderitem)
  * localNumbers [NumberOrderItem](#numberorderitem)
  * status `string` (values: NEW, PROCESSING, FINISHED, ERRORED, VOID, WAIT_FOR_PAYMENT, ADJUSTED, APPROVE_TIER_ONE, APPROVE_TIER_TWO, REJECTED): A current status of an order. Available values: NEW, PROCESSING, FINISHED, ERRORED, VOID, WAIT_FOR_PAYMENT, REJECTED
  * tollFreeNumbers [NumberOrderItem](#numberorderitem)
  * totalCost `number`: A total cost of an order

### NumberOrderItem
* NumberOrderItem `object`: Represents an order item of a particular order
  * fulfilled `array`: List of fulfilled items, e.g. phone numbers, keywords
    * items `string`
  * ordered `integer`: A total number of items bought within a single order item
  * unitCost `number`: A cost of unit

### NumberPurchaseRequest
* NumberPurchaseRequest `object`: Request object is used to order a local or toll-free numbers
  * city `string`: City of requested numbers
  * lata `string`: Local access and transport area of requested numbers 
  * localCount `integer`: Total count of local numbers requested
  * numbers `array`: A list of phone numbers in E.164 format (11-digit) to buy. Example: 12132000384
    * items `string`
  * prefix `string`: Country prefix of requested numbers
  * rateCenter `string`: A rate center of requested numbers
  * state `string`: A two-letter state code of requested numbers
  * tollFreeCount `integer`: Total count of toll-free numbers requested
  * zipcode `string`: A five-digit Zip code of requested numbers

### QuestionResponse
* QuestionResponse `object`: Object represents the question and client's answer, used in cloud call center / IVR campaign
  * question `string`: A text of a question
  * response `string`: Client's answer

### Recipient
* Recipient `object`: A recipient of a campaign action. It can be a phone number, contact, or contact list with attributes added to an action, one of these values should be set
  * attributes `object`: Map of user-defined string attributes associated with recipient
  * contactId `integer`: An id of existing contact used as recipient
  * fromNumber `string`: ~
  * phoneNumber `string`: A recipient's phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076

### Region
* Region `object`: Every local number associated with a region. You can query regions to use them in subsequent purchase requests
  * city `string`: A city of a region
  * country `string`: A country of a region
  * lata `string`: A local access and transport area of region
  * latitude `number`: A latitude of a region
  * longitude `number`: A longitude of a region
  * prefix `string`: A country prefix of a region. 4-7 digit
  * rateCenter `string`: A rate center of a region
  * state `string`: A two-letter state code of region
  * timeZone `string`: A timezone of a region
  * zipcode `string`: A five-digit zip code of a region

### RegionPage
* RegionPage `object`: ~
  * items `array`: ~
    * items [Region](#region)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### ResourceId
* ResourceId `object`: An id of a resource
  * id `integer`: An id of a resource

### ResourceIdList
* ResourceIdList `object`: ~
  * items `array`: ~
    * items [ResourceId](#resourceid)

### RetryConfig
* RetryConfig `object`: Retry configuration will help you to resend a call or text if it was not delivered first time
  * maxAttempts `integer`: Maximum number of retry attempts. Default value: 1
  * minutesBetweenAttempts `integer`: A number of minutes between retry attempts. Default value: 60
  * retryPhoneTypes `array`: A list of phone number types to retry. Available values: FIRST_NUMBER, HOME_PHONE, WORK_PHONE, MOBILE_PHONE
    * items `string`
  * retryResults `array`: List of result states when a call/text should be addressed to this contact again. Supports any combination of result statuses. Available values: LA, BUSY, AM, NO_ANS, SENT, RECEIVED, etc. See [call/text states and results](https://developers.callfire.com/results-responses-errors.html)
    * items `string`

### Schedule
* Schedule `object`: A campaign schedule
  * campaignId `integer`: ~
  * daysOfWeek `array`: ~
    * items `string`
  * id `integer`: ~
  * startDate [LocalDate](#localdate)
  * startTimeOfDay [LocalTime](#localtime)
  * stopDate [LocalDate](#localdate)
  * stopTimeOfDay [LocalTime](#localtime)
  * timeZone `string`: ~

### StatusType
* StatusType `object`: ~
  * family `string` (values: INFORMATIONAL, SUCCESSFUL, REDIRECTION, CLIENT_ERROR, SERVER_ERROR, OTHER): Family
  * reasonPhrase `string`: Reason phrase
  * statusCode `integer`: Status code

### StreamingOutput
* StreamingOutput `object`: ~

### StringList
* StringList: ~
  * items `array`: ~
    * items `object`
  * items `array`
    * items `string`

### Text
* Text `object`: Represents a text action sent or received by Callfire platform
  * attributes `object`: Map of user-defined string attributes associated with an action
  * batchId `integer`: An id of contact batch associated with an action
  * campaignId `integer`: An id of broadcast if given text was sent as a part of text broadcast
  * contact [Contact](#contact)
  * created `integer`: The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * finalTextResult `string` (values: SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED): Result of text (SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
  * fromNumber `string`: Sender's phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076
  * id `integer`: An id of an action
  * inbound `boolean`: An action inbound
  * labels `array`: Labels associated with an action
    * items `string`
  * media `array`: ~
    * items [Media](#media)
  * message `string`: A text message
  * modified `integer`: The time when the given resource was modified, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
  * records `array`: List of text records, each record contains additional details: time of sending, cost, current state.  A single contact may have multiple numbers. If given text was sent as part of broadcast with configured retry logic then each text record will contain details about attempted number
    * items [TextRecord](#textrecord)
  * state `string` (values: READY, SELECTED, CALLBACK, FINISHED, DISABLED, SKIPPED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT): Current state of an action (READY, SELECTED, CALLBACK, DISABLED, FINISHED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
  * toNumber `string`: Recipient's phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076

### TextAutoReply
* TextAutoReply `object`: CallFire allows you to set up auto reply messages for your numbers CallFire allows you to set up auto reply messages for your numbers and keywords. You can set a general auto reply for anyone who texts your number (keyword). Also you can include a text to match, so that the auto reply would be sent only to those recipients whose texts the matched text
  * id `integer`: An id of a text auto reply
  * keyword `string`: Setup autoreply for a given keyword
  * match `string`: Text to match. If it is set then autoreply will be sent to a person who texted message with matched text. Case insensitive, if parameter is not specified then all texts will be matched
  * message `string`: A text message to return as an auto reply
  * number `string`: Setup autoreply for a given phone number, E.164 format (11-digit). Example: 12132000384

### TextAutoReplyPage
* TextAutoReplyPage `object`: ~
  * items `array`: ~
    * items [TextAutoReply](#textautoreply)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### TextBroadcast
* TextBroadcast `object`: A text campaign allows you to send a text message to a number of recipients. It supports scheduling, retry logic and pattern-based messages
  * bigMessageStrategy `string` (values: SEND_MULTIPLE, DO_NOT_SEND, TRIM, MMS): If message length exceeds 160 characters, multiple messages will be sent, SEND_MULTIPLE strategy is chosen by default. Available values: SEND_MULTIPLE - send text as multiple messages, DO_NOT_SEND - do not send text if it exceeds 160 characters, TRIM - trims text message to 160 characters
  * fromNumber `string`: A phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076, etc
  * id `integer`: A unique id of a broadcast
  * labels `array`: A labels of a broadcast
    * items `string`
  * lastModified `integer`: A time when the given resource was updated, formatted in unix time milliseconds (read only). Example: 1473781817000
  * localTimeRestriction [LocalTimeRestriction](#localtimerestriction)
  * maxActive `integer`: A maximum number of calls that CallFire dials at once
  * media `array`: ~
    * items [Media](#media)
  * message `string`: A text message
  * name `string`: A name of a broadcast
  * recipients `array`: Recipients of a text campaign, can be an existing contacts or a new one
    * items [TextRecipient](#textrecipient)
  * resumeNextDay `boolean`: ~
  * schedules `array`: ~
    * items [Schedule](#schedule)
  * status `string` (values: TEST, SETUP, START_PENDING, RUNNING, SCHEDULED, STOPPED, SUSPENDED, FINISHED, ARCHIVED, VALIDATING_START, VALIDATING_EMAIL): A status of a broadcast. SETUP - campaign isn't configured yet; START_PENDING - waiting for contact batch population; RUNNING - campaign is running; STOPPED - campaign is stopped; FINISHED - campaign is finished; ARCHIVED - campaign was archived

### TextBroadcastPage
* TextBroadcastPage `object`: ~
  * items `array`: ~
    * items [TextBroadcast](#textbroadcast)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### TextBroadcastStatsDto
* TextBroadcastStatsDto `object`: ~
  * billedAmount `number`: ~
  * doNotTextCount `integer`: ~
  * errorCount `integer`: ~
  * recievedCount `integer`: ~
  * remainingOutboundCount `integer`: ~
  * sentCount `integer`: ~
  * tooBigCount `integer`: ~
  * totalOutboundCount `integer`: ~
  * unsentCount `integer`: ~

### TextList
* TextList `object`: ~
  * items `array`: ~
    * items [Text](#text)

### TextPage
* TextPage `object`: ~
  * items `array`: ~
    * items [Text](#text)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### TextRecipient
* TextRecipient `object`: A recipient of a text message. You should provide either phone number or contact id of existing contact
  * attributes `object`: A map of string attributes associated with a recipient
  * contactId `integer`: An id of existing contact in account
  * fromNumber `string`: ~
  * media `array`: A list of media objects' ids associated with a text message
    * items [Media](#media)
  * message `string`: A text message
  * phoneNumber `string`: Phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076

### TextRecord
* TextRecord `object`: Represents a text message sent to a contact's number
  * billedAmount `number`: A cost of a sent text
  * callerName `string`: ~
  * finishTime `integer`: A time when the given resource was updated, formatted in unix time milliseconds (read only). Example: 1473781817000
  * id `integer`: An id of a text record
  * labels `array`: Labels associated with a text action
    * items `string`
  * message `string`: A text message
  * switchId `string`: ~
  * textResult `string` (values: SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED): Result of a text (SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
  * toNumber `string`: An attempted phone number

### TextToSpeech
* TextToSpeech `object`: Request object is used to create a sound from provided text using text to speech engine
  * message `string`: A text to be turned into sound
  * voice `string` (values: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1): A voice to be used. Available values: MALE1, FEMALE1 , FEMALE2, SPANISH1, FRENCHCANADIAN1

### Type
* Type `object`: ~
  * typeName `string`: A name of a type

### UpdateContactListRequest
* UpdateContactListRequest `object`: A request object which is used to update a contact list
  * name `string`: A name of a contact list

### Webhook
* Webhook `object`: Webhook is a user-defined callback, which can be maintained via API. Callfire will send POST request to a client's endpoint defined in webhook once one of assigned events is triggered. See [webhooks guide](https://developers.callfire.com/webhooks-guide.html) for more information about CallFire Webhooks API.
  * callback `string`: URL that webhook will send POST to on resource event trigger
  * createdAt `integer`: A time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000
  * enabled `boolean`: A parameter which allows the webhook to send requests to unknown ssl endpoints (ssl certificate verification is disabled)
  * events `array`: Comma separated list of events on resource that will trigger callbacks (ex: STARTED, STOPPED, FINISHED, etc...). 
    * items `string`
  * expiresAt `integer`: ~
  * fields `string`: A limit callback response to a particular fields
  * id `integer`: An id of a webhook
  * name `string`: A name of a webhook
  * nonStrictSsl `boolean`: A parameter which allows the webhook to send requests to unknown ssl endpoints (ssl certificate verification is disabled)
  * resource `string`: A resource name that webhook is watching events on. Use GET /webhooks/resources to determine resources and events available (ex: InboundCall, OutboundCall, InboundText, OutboundText, CallBroadcast, TextBroadcast, etc...)
  * secret `string`: Webhook secret token which is used as a signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)
  * singleUse `boolean`: If true is set then webhook triggers only once. Afterwards the webhook will be deleted
  * updatedAt `integer`: A time when the given resource was updated, formatted in unix time milliseconds (read only). Example: 1473781817000

### WebhookPage
* WebhookPage `object`: ~
  * items `array`: ~
    * items [Webhook](#webhook)
  * limit `integer`: ~
  * offset `integer`: ~
  * totalCount `integer`: ~

### WebhookResource
* WebhookResource `object`: WebhookResource describes a resource and a list of supported events, once event is triggered Callfire performs an HTTP POST request to a client's endpoint
  * resource `string`: A name of a webhook resource (ex: InboundCall, OutboundCall, InboundText, OutboundText, CallBroadcast, TextBroadcast, etc...)
  * supportedEvents `array`: A list of event names which are supported by webhook resource (ex: Started, Stopped, Finished, etc.)
    * items `string`

### WeeklySchedule
* WeeklySchedule `object`: Weekly schedule allows to schedule operations by day of week and time of the day
  * daysOfWeek `array`: A scheduled days when operation will trigger
    * items `string`
  * startTimeOfDay [LocalTime](#localtime)
  * stopTimeOfDay [LocalTime](#localtime)
  * timeZone `string`: A user's timezone


