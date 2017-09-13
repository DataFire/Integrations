# @datafire/callfire

Client library for CallFire

## Installation and Usage
```bash
npm install --save datafire @datafire/callfire
```

```js
let datafire = require('datafire');
let callfire = require('@datafire/callfire').create({
  username: "",
  password: "",
});

callfire.findWebhookResources({}).then(data => {
  console.log(data);
})
```

## Description
CallFire

## Actions
### findCalls
To search for all calls sent or received by the user. Use "id=0" for the campaignId parameter to query for all calls sent through the POST /calls API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)


```js
callfire.findCalls({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* id (array) - Lists the Call ids to search for. If calls ids are specified then other query parameters can be ignored
* campaignId (integer) - An id of a campaign, queries for calls included to a particular campaign. Specify null for all campaigns and 0 for default campaign
* batchId (integer) - An id of a contact batch, queries for calls of a particular contact batch
* fromNumber (string) - Phone number in E.164 format (11-digit) that call was from. Example: 12132000384
* toNumber (string) - Phone number in E.164 format (11-digit) that call was sent to. Example: 12132000384
* label (string) - A label for a specific call
* states (string) - Searches for all calls which correspond to statuses listed in a comma separated string. Available values: READY, SELECTED, CALLBACK, FINISHED, DISABLED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
* results (string) - Searches for all calls with statuses listed in a comma separated string. Available values: SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
* inbound (boolean) - Filters inbound calls for "true" value and outbound calls for "false" value
* intervalBegin (integer) - Start of the find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
* intervalEnd (integer) - End of the find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT

### sendCalls
Use the /calls API to send individual calls quickly. A verified Caller ID and sufficient credits are required to make a call. CallRecipient represents a single recipient identified by phone number or contact id in CallFire system. You can attach user-defined attributes to a Call action via CallRecipient.attributes property, attributes are available in Call action response


```js
callfire.sendCalls({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* campaignId (integer) - Specifies a campaignId to send calls quickly on a previously created campaign
* defaultLiveMessage (string) - Text to be turned into a sound, this text will be played when the phone is answered. Parameter can be overridden for any particular CallRecipient
* defaultMachineMessage (string) - Text to be turned into a sound, this text will be played when answering machine is detected. Parameter can be overridden for any particular CallRecipient
* defaultLiveMessageSoundId (integer) - Id of sound file to play if phone is answered. Parameter can be overridden for any particular CallRecipient
* defaultMachineMessageSoundId (integer) - An id of a sound file to play if answering machine is detected. Parameter can be overridden for any particular CallRecipient
* defaultVoice (string) - The voice set by default for all text-to-speech messages defined in CallRecipient objects or as default *Message properties
* strictValidation (boolean) - Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
* body (array)

### findCallBroadcasts
Searches for all voice broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of voice broadcasts


```js
callfire.findCallBroadcasts({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* label (string) - A label of a voice broadcast
* name (string) - A name of voice broadcast
* running (boolean) - Specify whether the campaigns should be running or not

### createCallBroadcast
Creates a call broadcast campaign using the Call Broadcast API. Send a CallBroadcast in the message body to add details in a voice broadcast campaign. The campaign can be created without contacts and bare minimum configuration, but contacts will have to be added further on to use the campaign


```js
callfire.createCallBroadcast({}, context)
```

#### Parameters
* start (boolean) - Specify whether to immediately start this campaign (not required)
* strictValidation (boolean) - Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
* body (object) - Call broadcast can be used to send out a voice message to a group of numbers. It supports IVR scripting, scheduling, retry logic, playing pre-recorded sounds, answering machine detection

### getCallBroadcast
Returns a single CallBroadcast instance for a given call broadcast campaign id


```js
callfire.getCallBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a CallBroadcast
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### updateCallBroadcast
This operation lets the user modify the configuration of a voice broadcast campaign after call broadcast campaign is created. See CallBroadcast for more information on what can/can't be updated on this API


```js
callfire.updateCallBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a voice broadcast
* strictValidation (boolean) - Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
* body (object) - Call broadcast can be used to send out a voice message to a group of numbers. It supports IVR scripting, scheduling, retry logic, playing pre-recorded sounds, answering machine detection

### archiveVoiceBroadcast
Archives a voice broadcast (voice broadcast will be hidden in search results)


```js
callfire.archiveVoiceBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a voice broadcast to archive

### getCallBroadcastBatches
This endpoint will enable the user to page through all of the batches for a particular voice broadcast campaign


```js
callfire.getCallBroadcastBatches({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a call broadcast
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

### addCallBroadcastBatch
The 'add batch' API allows user to add additional batches to an already created voice broadcast campaign. The added batch will go through the CallFire validation process, unlike in the recipients version of this API. That is why you can use the scrubDuplicates flag to remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers


```js
callfire.addCallBroadcastBatch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a call broadcast
* strictValidation (boolean) - Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
* body (object) - Request object is used for adding new batch to an existing broadcast

### getCallBroadcastCalls
This endpoint will enable the user to page through all calls for a particular call broadcast campaign


```js
callfire.getCallBroadcastCalls({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An Id of a call broadcast
* batchId (integer) - An id of a particular batch associated with broadcast
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

### addCallBroadcastRecipients
Use this API to add the recipients to an existing voice broadcast. Post a list of Recipient objects to be added to the voice broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers


```js
callfire.addCallBroadcastRecipients({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a call broadcast
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* strictValidation (boolean) - Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
* body (array)

### startVoiceBroadcast
Start a voice broadcast


```js
callfire.startVoiceBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of voice broadcast to start

### getCallBroadcastStats
Returns broadcast statistics like total number of sent/received actions, total cost, number of remaining outbound actions, error count, etc


```js
callfire.getCallBroadcastStats({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a call broadcast
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* begin (integer) - Start of the search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
* end (integer) - End of the search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT

### stopVoiceBroadcast
Stop a voice broadcast


```js
callfire.stopVoiceBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of voice broadcast to stop

### getCallRecording
Returns metadata of recording of a particular call. Metadata contains a link to a MP3 recording


```js
callfire.getCallRecording({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - ~
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getCallRecordingMp3
Returns an MP3 recording of particular call, response contains binary data, content type is 'audio/mpeg'


```js
callfire.getCallRecordingMp3({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a call

### getCall
Returns a single Call instance for a given call id.


```js
callfire.getCall({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a call
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getCallRecordings
Returns a list of recordings metadata of particular call. Metadata contains link to a MP3 recording


```js
callfire.getCallRecordings({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a call
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getCallRecordingByName
Returns recording metadata of particular call. Metadata contains link to a MP3 recording


```js
callfire.getCallRecordingByName({
  "id": 0,
  "name": ""
}, context)
```

#### Parameters
* id (integer) **required** - An id of a call
* name (string) **required** - A name of a recording
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getCallRecordingMp3ByName
Returns a MP3 recording of a particular call, response contains binary data, content type is 'audio/mpeg'


```js
callfire.getCallRecordingMp3ByName({
  "id": 0,
  "name": ""
}, context)
```

#### Parameters
* id (integer) **required** - An id of a call
* name (string) **required** - A name of a recording

### getCampaignBatch
Returns a single Batch instance for a given batch id. This API is useful for determining the state of a validating batch


```js
callfire.getCampaignBatch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a batch
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### updateCampaignBatch
Updates a single Batch instance, currently batch can only be turned "on/off"


```js
callfire.updateCampaignBatch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a batch to update
* body (object) - A batch represents a group of contacts which can be dialed or texted via call/text broadcast

### findCampaignSounds
To find all campaign sounds which were created by user. Returns all sounds available to be used in campaigns


```js
callfire.findCampaignSounds({}, context)
```

#### Parameters
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* filter (string) - Name of a file to search for
* includeArchived (boolean) - Includes ARCHIVED sounds for "true" value
* includePending (boolean) - Includes UPLOAD/RECORDING sounds for "true" value
* includeScrubbed (boolean) - Includes SCRUBBED sounds for "true" value
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### postCallCampaignSound
Use this API to create a sound via a phone call. Provide the required phone number in the CallCreateSound object inside the request, and user will receive a call shortly after with instructions on how to record a sound over the phone.


```js
callfire.postCallCampaignSound({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* body (object) - Request object is used for creating sound via a phone call. This sound will appear in account's sound library

### postFileCampaignSound
Create a campaign sound file via a supplied .mp3 or .wav file


```js
callfire.postFileCampaignSound({
  "file": ""
}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* file (string) **required** - A sound file encoded in binary form
* name (string) - Optional name of a sound file, if the name is empty than it will be taken from a file

### postTTSCampaignSound
Use this API to create a sound file via a supplied string of text. Add a text in the TextToSpeech.message field, and pick a voice in the TextToSpeech.voice field. Available voices are: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1


```js
callfire.postTTSCampaignSound({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* body (object) - Request object is used to create a sound from provided text using text to speech engine

### deleteCampaignSound
Deletes a single campaign sound instance for a specific campaign sound id, this operation does not delete sound completely, it sets sound status to ARCHIVED which means that sound will no longer appear in 'find' operation results, but still accessible via 'get' operation


```js
callfire.deleteCampaignSound({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a campaign sound

### getCampaignSound
Returns a single CampaignSound instance for a given sound id in campaign. This is a meta data to the sounds. No audio data is returned from this API


```js
callfire.getCampaignSound({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a sound campaign
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getCampaignSoundDataMp3
Download the MP3 version of a hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type


```js
callfire.getCampaignSoundDataMp3({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a campaign sound

### getCampaignSoundDataWav
Download the WAV version of the hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type


```js
callfire.getCampaignSoundDataWav({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a campaign sound

### findContacts
Find user's contacts by id, contact list, or on any property name. Returns a paged list of contacts


```js
callfire.findContacts({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* id (array) - A list of contact IDs. If the id parameter is included, the other query parameters are ignored.
* number (array) - Multiple contact numbers can be specified. If the number parameter is included, the other query parameters are ignored.
* contactListId (integer) - Filters contacts by a particular contact list
* propertyName (string) - Name of a contact property to search by
* propertyValue (string) - Value of a contact property to search by

### createContacts
Creates contacts in CallFire system. These contacts are not validated on creation. They will be validated upon being added to a campaign


```js
callfire.createContacts({}, context)
```

#### Parameters
* body (array)

### findDoNotContacts
Searches for all Do Not Contact (DNC) objects created by user. These DoNotContact entries only affect calls/texts/campaigns on this account. Returns a paged list of DoNotContact objects


```js
callfire.findDoNotContacts({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* prefix (string) - Prefix (1-10 digits) of phone numbers
* campaignId (integer) - A campaign id which was used to send a message to a DNC number
* source (string) - A DNC source name to search for DNCs
* call (boolean) - Show only Do-Not-Call numbers
* text (boolean) - Show only Do-Not-Text numbers
* number (array) - ~

### addDoNotContacts
Add or update a list of Do Not Contact (DNC) contact entries. Can toggle whether the DNCs are enabled for calls/texts.


```js
callfire.addDoNotContacts({}, context)
```

#### Parameters
* body (object) - Request object for adding new Do-Not-Contact records to account.

### deleteDoNotContactsBySource
Delete Do Not Contact (DNC) contact entries contained in source.


```js
callfire.deleteDoNotContactsBySource({
  "source": ""
}, context)
```

#### Parameters
* source (string) **required** - Source associated with Do Not Contact (DNC) entry.

### getUniversalDoNotContacts
Searches for a UniversalDoNotContact object for a given phone number. Shows whether inbound/outbound actions are allowed for a given number


```js
callfire.getUniversalDoNotContacts({
  "toNumber": ""
}, context)
```

#### Parameters
* toNumber (string) **required** - A required destination phone number in E.164 format (11-digit). Example: 12132000384
* fromNumber (string) - An optional destination/source number for DNC, specified in E.164 format (11-digit). Example: 12132000384
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### deleteDoNotContact
Delete a Do Not Contact (DNC) contact entry.


```js
callfire.deleteDoNotContact({
  "number": ""
}, context)
```

#### Parameters
* number (string) **required** - Number associated with Do Not Contact (DNC) entry.

### getDoNotContact
Get Do Not Contact (DNC) object create by user. This DoNotContact entry only affects calls/texts/campaigns on this account.


```js
callfire.getDoNotContact({
  "number": ""
}, context)
```

#### Parameters
* number (string) **required** - Number associated with Do Not Contact (DNC) entry.

### updateDoNotContact
Update a Do Not Contact (DNC) contact entry. Can toggle whether the DNC is enabled for calls/texts.


```js
callfire.updateDoNotContact({
  "number": ""
}, context)
```

#### Parameters
* number (string) **required** - ~
* body (object) - Represents an opted out contact

### findContactLists
Searches for all contact lists which are available for the current user. Returns a paged list of contact lists


```js
callfire.findContactLists({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* name (string) - A name or a partial name of a contact list

### createContactList
Creates a contact list for use with campaigns using 1 of 3 inputs. A List of Contact objects, a list of String E.164 numbers, or a list of CallFire contactIds can be used as the data source for the created contact list. After contact list is added into the CallFire system, contact lists goes through seven system safeguards that check the accuracy and consistency of the data. For example, our system checks that contact number is formatted correctly, is valid, is not duplicated in another contact list, or is not added on a specific DNC list. You can configure to keep/merge or remove contacts which do not complies these rules. If contacts were not added to a contact list after the validation, this means the data needs to be properly formatted and corrected before calling this API


```js
callfire.createContactList({}, context)
```

#### Parameters
* body (object) - A request object is used to create a contact list from one of available contact sources

### createContactListFromFile
Creates a contact list to be used with campaigns through uploading a .csv file. Returns the id of created list


```js
callfire.createContactListFromFile({
  "file": ""
}, context)
```

#### Parameters
* file (string) **required** - CSV file to be uploaded
* name (string) - A name of a contact list
* useCustomFields (boolean) - A flag to indicate how to define property names for contacts. If true, uses the field and property names exactly as defined. If false will assign custom properties and fields to A, B, C, etc

### deleteContactList
Deletes a contact list, included contacts will not be deleted.


```js
callfire.deleteContactList({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of the contact list to be deleted

### getContactList
Returns a single ContactList instance for a given contact list id


```js
callfire.getContactList({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a contact list to return
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### updateContactList
Updates contact list instance.


```js
callfire.updateContactList({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of contact list to update
* body (object) - A request object which is used to update a contact list

### removeContactListItems
Deletes contacts from a contact list. List the contact ids in request to delete multiple contacts with one request.


```js
callfire.removeContactListItems({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - A id of a contact list
* contactId (array) - An id of a contact entity in the CallFire system

### getContactListItems
Searches for all entries in a contact list with specified id. Returns a paged list of contact entries


```js
callfire.getContactListItems({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a contact list
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

### addContactListItems
Adds contacts to a contact list. Available contact sources are: list of the contact entities, list of ids of existing contacts in user's account, list of phone numbers in E.164 format (11-digits)


```js
callfire.addContactListItems({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a contact list
* body (object) - Request object for adding new contacts to an existing contact list

### removeContactListItem
Deletes a single contact from a contact list


```js
callfire.removeContactListItem({
  "id": 0,
  "contactId": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a contact list
* contactId (integer) **required** - An id of a contact

### deleteContact
Deletes a contact instance from account


```js
callfire.deleteContact({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An Id of a contact

### getContact
Returns a Contact instance for a given contact id. Deleted contacts can be still retrieved but will be marked as deleted. Deleted contacts will not be shown in search request.


```js
callfire.getContact({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a contact
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### updateContact
Updates a single contact instance with id specified


```js
callfire.updateContact({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a contact
* body (object) - Represents a contact in CallFire platform. Contains info about the people you want to contact. It allows you to store a user-defined properties for each contact

### getContactHistory
Searches for all texts and calls attributed to a contact. Returns a list of calls and texts a contact has been involved with


```js
callfire.getContactHistory({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An Id of a contact
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### findKeywords
Searches for all keywords available for purchase on the CallFire platform. If a keyword appears in the response, it is available for purchase. List the 'keywords' in a query parameter to search for multiple keywords (at least one keyword should be sent in request)


```js
callfire.findKeywords({}, context)
```

#### Parameters
* keywords (array) - A keyword to search for

### findKeywordLeases
Searches for all keywords owned by user. A keyword lease is the ownership information involving a keyword


```js
callfire.findKeywordLeases({}, context)
```

#### Parameters
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getKeywordLease
Searches for all keywords owned by user


```js
callfire.getKeywordLease({
  "keyword": ""
}, context)
```

#### Parameters
* keyword (string) **required** - Keyword text that a lease is desired for
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### updateKeywordLease
Updates a keyword lease. Turns the autoRenew on/off.


```js
callfire.updateKeywordLease({
  "keyword": ""
}, context)
```

#### Parameters
* keyword (string) **required** - To update a keyword lease
* body (object) - Represents a lease object for a given keyword

### isKeywordAvailable
Searches for the specific keyword to purchase on the CallFire platform. Returns 'true' if keyword is available.


```js
callfire.isKeywordAvailable({
  "keyword": ""
}, context)
```

#### Parameters
* keyword (string) **required** - To specify a keyword to search for. Example: SUN, MOON

### getAccount
Searches for the user account details. Details include name, email, and basic account permissions


```js
callfire.getAccount(null, context)
```

#### Parameters
*This action has no parameters*

### findApiCredentials
Searches for all credentials generated by user. Returns a paged list of the API credentials. Only ACCOUNT_HOLDER can invoke this API


```js
callfire.findApiCredentials({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

### createApiCredential
Creates an API credentials for the CallFire API. This endpoint requires full CallFire account credentials to be used, authenticated using Basic Authentication. At the moment user provides only the name for the credentials. The generated credentials can be used to access any CallFire APIs


```js
callfire.createApiCredential({}, context)
```

#### Parameters
* body (object) - An object represents API user in CallFire system. Use /me/api/credentials endpoint to manage API users on your account

### deleteApiCredential
Deletes a specified API credential. Currently, removes the ability to access the API. Only ACCOUNT_HOLDER can invoke this API


```js
callfire.deleteApiCredential({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of an API credential

### getApiCredential
Returns an API credential instance for a given api credential id. Only ACCOUNT_HOLDER can invoke this API


```js
callfire.getApiCredential({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of an API credential
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getCreditUsage
Find credit usage for the user. Returns credits usage for time period specified or if unspecified then total for all time.


```js
callfire.getCreditUsage({}, context)
```

#### Parameters
* intervalBegin (integer) - Beginning of usage period formatted in unix time milliseconds. Example: 1473781817000
* intervalEnd (integer) - End of usage period formatted in unix time milliseconds. Example: 1473781817000

### getBillingPlanUsage
Searches for the data of a billing plan usage for the user. Returns the data of a billing plan usage for the current month


```js
callfire.getBillingPlanUsage(null, context)
```

#### Parameters
*This action has no parameters*

### getCallerIds
Returns a list of verified caller ids. If the number is not shown in the list, then it is not verified. In this case sending of a verification code is required.


```js
callfire.getCallerIds(null, context)
```

#### Parameters
*This action has no parameters*

### sendVerificationCodeToCallerId
Generates and sends a verification code to the phone number provided in the path. The verification code is delivered via a phone call. This code needs to be submitted to the verify caller id API endpoint to complete verification.


```js
callfire.sendVerificationCodeToCallerId({
  "callerid": ""
}, context)
```

#### Parameters
* callerid (string) **required** - A phone number in E.164 format (11-digit) which needs to be verified. Example: 12132000384

### verifyCallerId
With the verification code received from the Create caller id endpoint, a call to this endpoint is required to finish verification


```js
callfire.verifyCallerId({
  "callerid": ""
}, context)
```

#### Parameters
* callerid (string) **required** - A phone number in E.164 format (11-digit) which needs to be verified. Example: 12132000384
* body (object) - Request which is used to verify a new caller id number

### createMedia
Uploads media file to account, acceptable media formats: bmp, gif, jpg, m4a, mp3, mp4, png, wav


```js
callfire.createMedia({
  "file": ""
}, context)
```

#### Parameters
* file (string) **required** - Binary media file
* name (string) - A name of a media file

### getMediaDataByKey
Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc


```js
callfire.getMediaDataByKey({
  "key": "",
  "extension": ""
}, context)
```

#### Parameters
* key (string) **required** - A hash-key of a media resource
* extension (string) **required** - Media file type, available types: bmp, gif, jpg, m4a, mp3, mp4, png, wav

### getMedia
Get media resource by id


```js
callfire.getMedia({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a media resource
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getMediaData
Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc


```js
callfire.getMediaData({
  "id": 0,
  "extension": ""
}, context)
```

#### Parameters
* id (integer) **required** - An id of a media resource
* extension (string) **required** - Media file type. Available types: bmp, gif, jpg, m4a, mp3, mp4, png, wav

### getMediaDataBinary
Download a MP3 media, endpoint returns application/binary content-type


```js
callfire.getMediaDataBinary({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a media resource

### findNumberLeases
Searches for all numbers leased by account user. This API is useful for finding all numbers currently owned by the user. Returns a paged list of number leases.


```js
callfire.findNumberLeases({}, context)
```

#### Parameters
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* prefix (string) - A 4-7 digit prefix
* city (string) - A city name
* state (string) - A two-letter state code. Example: CA, IL, etc.
* zipcode (string) - A five-digit Zipcode
* lata (string) - A local access and transport area (LATA)
* rateCenter (string) - A rate center. A rate center is a geographical area used by a Local Exchange Carrier (LEC) to determine the boundaries for local calling, billing and allocation of phone numbers
* labelName (string) - A label name
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### findNumberLeaseConfigs
Searches for all number lease configs for the user. Returns a paged list of NumberConfig


```js
callfire.findNumberLeaseConfigs({}, context)
```

#### Parameters
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* prefix (string) - A 4-7 digit prefix
* city (string) - A city name
* state (string) - A two-letter state code. Example: CA, IL, etc.
* zipcode (string) - A five-digit Zipcode
* lata (string) - A local access and transport area (LATA)
* rateCenter (string) - A rate center. A rate center is a geographical area used by a Local Exchange Carrier (LEC) to determine the boundaries for local calling, billing and assigning phone numbers
* labelName (string) - A label name
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getNumberLeaseConfig
Returns a single NumberConfig instance for a given number lease


```js
callfire.getNumberLeaseConfig({
  "number": ""
}, context)
```

#### Parameters
* number (string) **required** - A phone number in E.164 format (11-digit). Example: 12132000384
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### updateNumberLeaseConfig
Updates a phone number lease configuration. Use this API endpoint to add an Inbound IVR or Call Tracking feature to a CallFire phone number. Call tracking configuration allows you to track the incoming calls, to analyze and to respond customers using sms or voice replies. For more information see [call tracking page](https://www.callfire.com/products/call-tracking)


```js
callfire.updateNumberLeaseConfig({
  "number": ""
}, context)
```

#### Parameters
* number (string) **required** - A phone number in E.164 format (11-digit) which needs to be verified. Example: 12132000384
* body (object) - Represents the configuration of a phone number purchased by user. You can configure number to accept inbound calls, play sounds to customer, make a transfer or setup an IVR script to interact with customer. See [CallFire IVR](https://www.callfire.com/products/ivr) for more info

### getNumberLease
Returns a single NumberLease instance for a given number


```js
callfire.getNumberLease({
  "number": ""
}, context)
```

#### Parameters
* number (string) **required** - A phone number in E.164 format (11-digit). Example: 12132000384
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### updateNumberLease
Updates a number lease instance. Ability to turn on/off autoRenew and toggle call/text features for a particular number


```js
callfire.updateNumberLease({
  "number": ""
}, context)
```

#### Parameters
* number (string) **required** - A phone number in E.164 format (11-digit). Example: 12132000384
* body (object) - Represents a lease object for a given phone number

### findNumbersLocal
Searches for numbers available for purchase in CallFire local numbers catalog . At least one additional parameter is required. User may filter local numbers by their region information.


```js
callfire.findNumbersLocal({}, context)
```

#### Parameters
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* prefix (string) - A 4-7 digit prefix
* city (string) - A city name
* state (string) - A two-letter state code. Example: CA, IL, etc.
* zipcode (string) - A five-digit Zipcode
* lata (string) - A local access and transport area (LATA)
* rateCenter (string) - A rate center. A rate center is a geographical area used by a Local Exchange Carrier (LEC) to determine the boundaries for local calling, billing and assigning phone numbers.
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### findNumberRegions
Searches for region information. Use this API to obtain detailed region information that can be used to query for more specific phone numbers than a general query.


```js
callfire.findNumberRegions({}, context)
```

#### Parameters
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* prefix (string) - A 4-7 digit prefix
* city (string) - A city name
* state (string) - A two-letter state code. Example: CA, IL, etc.
* zipcode (string) - A five-digit Zipcode
* lata (string) - A local access and transport area (LATA)
* rateCenter (string) - A rate center. A rate center is a geographical area used by a Local Exchange Carrier (LEC) to determine the boundaries for local calling, billing and assigning phone numbers.
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### findNumbersTollfree
Searches for the toll free numbers which are available for purchase in the CallFire catalog


```js
callfire.findNumbersTollfree({}, context)
```

#### Parameters
* pattern (string) - Filter toll free numbers by prefix, pattern must be 3 char long and should end with '*'. Examples: 8**, 85*, 87* (but 855 will fail because pattern must end with '*').
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### orderKeywords
Purchase keywords. Send a list of available keywords into this API to purchase them using CallFire credits. Make sure the account has enough credits before trying to purchase the keywords


```js
callfire.orderKeywords({}, context)
```

#### Parameters
* body (object) - Request object is used to purchase keywords

### orderNumbers
Purchase numbers. There are many ways to purchase a number. Set either 'tollFreeCount' or 'localCount' along with some querying fields to purchase numbers by bulk query. Set the list of numbers to purchase by list. Available numbers will be purchased using CallFire credits owned by the user. Make sure the account has enough credits before trying to purchase


```js
callfire.orderNumbers({}, context)
```

#### Parameters
* body (object) - Request object is used to order a local or toll-free numbers

### getOrder
Returns a single NumberOrder instance for a given order id. Order contains information about purchased keywords, local, toll-free numbers


```js
callfire.getOrder({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of an order
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### findTexts
Searches for texts sent or received by user. Use "campaignId=0" parameter to query for all texts sent through the POST /texts API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)


```js
callfire.findTexts({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* id (array) - List of Text ids to search for, if ids specified other query params ignored
* campaignId (integer) - An id of a campaign, queries for texts inside a particular campaign. Specify null to list texts of all campaigns or 0 for a default campaign
* batchId (integer) - An Id of a contact batch, queries for texts which are used in the particular contact batch
* fromNumber (string) - A phone number in E.164 format (11-digit). Example: 12132000384, 67076
* toNumber (string) - A phone number in E.164 format (11-digit). Example: 12132000384, 67076
* label (string) - A label of a text message
* states (string) - Expected text statuses in comma separated string, available values: READY, SELECTED, CALLBACK, FINISHED, DISABLED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
* results (string) - Expected text results in comma separated string, available values: SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
* inbound (boolean) - Specify true for inbound or false for outbounds. Do not specify this parameter if you need to get both inbound and outbound texts listed in response
* intervalBegin (integer) - Start of the find time interval, formatted in unix time milliseconds. Example: 1473781817000
* intervalEnd (integer) - End of the find time interval, formatted in unix time milliseconds. Example: 1473781817000

### sendTexts
Use the /texts API to send individual texts quickly. By default all texts are going out from CallFire's dedicated short code 67076


```js
callfire.sendTexts({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* campaignId (integer) - Specifies a campaignId to send texts through a previously created campaign
* defaultMessage (string) - Text message can be overridden by TextRecipient.message field. If multiple recipients have the same text message to a different recipients it is better to specify a single default message and do not duplicate it in each recipient.
* strictValidation (boolean) - Turns on strict validation for recipients
* body (array)

### findTextAutoReplys
Find all text autoreplies created by user. Returns a paged list of TextAutoReply


```js
callfire.findTextAutoReplys({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* number (string) - Phone number in E.164 format (11-digit) which contains a TextAutoReply. Example: 12132000384. If number is empty then operator returns all autoreplies configured for the user's account

### createTextAutoReply
CallFire gives you possibility to set up auto reply messages for your numbers and keywords. You can set a general auto reply for anyone who texts your number, keyword, and/or include a text to match, so that the auto reply would be sent only to those who text the matched text


```js
callfire.createTextAutoReply({}, context)
```

#### Parameters
* body (object) - CallFire allows you to set up auto reply messages for your numbers CallFire allows you to set up auto reply messages for your numbers and keywords. You can set a general auto reply for anyone who texts your number (keyword). Also you can include a text to match, so that the auto reply would be sent only to those recipients whose texts the matched text

### deleteTextAutoReply
Deletes a text auto reply and removes the configuration. Can not delete a TextAutoReply which is currently active for a campaign


```js
callfire.deleteTextAutoReply({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text auto reply

### getTextAutoReply
Returns a single TextAutoReply instance for a given text auto reply id


```js
callfire.getTextAutoReply({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text auto reply
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### findTextBroadcasts
Searches for all text broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of text broadcasts


```js
callfire.findTextBroadcasts({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* label (string) - A label of a text broadcast
* name (string) - A name of text broadcast
* running (boolean) - Returns broadcasts only in running state.

### createTextBroadcast
Creates a text broadcast campaign using the Text Broadcast API. Send a TextBroadcast object in the message body to detail a text broadcast campaign. A campaign can be created without contacts and with bare minimum configuration, but contacts have to be added further on to use the campaign. It supports scheduling, retry logic, pattern-based messages.


```js
callfire.createTextBroadcast({}, context)
```

#### Parameters
* start (boolean) - If true then starts the campaign immediately (not required).
* strictValidation (boolean) - Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
* body (object) - A text campaign allows you to send a text message to a number of recipients. It supports scheduling, retry logic and pattern-based messages

### getTextBroadcast
Returns a single TextBroadcast instance for a given text broadcast id


```js
callfire.getTextBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text broadcast
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### updateTextBroadcast
Allows modifying the configuration of existing text broadcast campaign. See TextBroadcast for more information on what can/can't be updated on this API


```js
callfire.updateTextBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text broadcast
* strictValidation (boolean) - Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
* body (object) - A text campaign allows you to send a text message to a number of recipients. It supports scheduling, retry logic and pattern-based messages

### archiveTextBroadcast
Archives a text broadcast (and hides it in the search results)


```js
callfire.archiveTextBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text broadcast to archive

### getTextBroadcastBatches
This endpoint will enable the user to page through all of the batches for a particular text broadcast campaign


```js
callfire.getTextBroadcastBatches({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text broadcast
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

### addTextBroadcastBatch
Allows adding an extra batches to an already created text broadcast campaign. The batches which being  added pass the CallFire validation process (unlike in the recipients version of this API). That is why using of a scrubDuplicates flag remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers


```js
callfire.addTextBroadcastBatch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text broadcast
* strictValidation (boolean) - Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
* body (object) - Request object is used for adding new batch to an existing broadcast

### addTextBroadcastRecipients
Use this API to add recipients to a text broadcast which is already created. Post a list of Recipient objects to be immediately added to the text broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers


```js
callfire.addTextBroadcastRecipients({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text broadcast
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* strictValidation (boolean) - Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
* body (array)

### startTextBroadcast
Starts a text broadcast


```js
callfire.startTextBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text broadcast to start

### getTextBroadcastStats
Returns the broadcast statistics. Example: total number of the sent/received actions, total cost, number of remaining outbound actions, error count, etc


```js
callfire.getTextBroadcastStats({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text broadcast
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* begin (integer) - Start of a search find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
* end (integer) - End of a search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT

### stopTextBroadcast
Stops a text broadcast


```js
callfire.stopTextBroadcast({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An Id of a text broadcast. To stop the broadcast

### getTextBroadcastTexts
This endpoint will enable the user to page through all of the texts for a particular text broadcast campaign


```js
callfire.getTextBroadcastTexts({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text broadcast
* batchId (integer) - ~
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.

### getText
Returns a single Text instance for a given text id


```js
callfire.getText({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a text
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### findWebhooks
Searches all webhooks available for a current user. Searches by name, resource, event, callback URL, or whether they are enabled. Returns a paged list of Webhooks


```js
callfire.findWebhooks({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
* limit (integer) - To set the maximum number of records to return in a paged list response. The default is 100
* offset (integer) - Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
* name (string) - A name of a webhook
* resource (string) - A name of a resource, available values: 'CccCampaign', 'CallBroadcast', 'TextBroadcast',  'OutboundCall', 'OutboundText', 'InboundCall', 'InboundText', 'ContactList'
* event (string) - A name of event, available values: 'started', 'stopped', 'finished'
* callback (string) - A callback URL
* enabled (boolean) - Specifies whether webhook is enabled

### createWebhook
Create a Webhook for notification in the CallFire system. Use the webhooks API to receive notifications of important CallFire events. Select the resource to listen to, and then choose the resource events to receive notifications on. When an event triggers, a POST will be made to the callback URL with a payload of notification information. Available resources and their events include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed']. Webhooks support secret token which is used as signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)


```js
callfire.createWebhook({}, context)
```

#### Parameters
* body (object) - Webhook is a user-defined callback, which can be maintained via API. Callfire will send POST request to a client's endpoint defined in webhook once one of assigned events is triggered. See [webhooks guide](https://developers.callfire.com/webhooks-guide.html) for more information about CallFire Webhooks API.

### findWebhookResources
Searches for webhook resources. Available resources include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed']


```js
callfire.findWebhookResources({}, context)
```

#### Parameters
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### getWebhookResource
Returns information about supported events for a given webhook resource


```js
callfire.getWebhookResource({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - A name of a webhook resource. Available resources include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed']
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### deleteWebhook
Deletes a webhook instance. Will be removed permanently


```js
callfire.deleteWebhook({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An Id of a webhook

### getWebhook
Returns a single Webhook instance for a given webhook id


```js
callfire.getWebhook({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a webhook
* fields (string) - Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.

### updateWebhook
Updates the information in existing webhook


```js
callfire.updateWebhook({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - An id of a webhook
* body (object) - Webhook is a user-defined callback, which can be maintained via API. Callfire will send POST request to a client's endpoint defined in webhook once one of assigned events is triggered. See [webhooks guide](https://developers.callfire.com/webhooks-guide.html) for more information about CallFire Webhooks API.

