# @datafire/zoom_us

Client library for Zoom API

## Installation and Usage
```bash
npm install --save @datafire/zoom_us
```
```js
let zoom_us = require('@datafire/zoom_us').create({
  global: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API Description

## Actions

### accounts
List all the sub accounts under the master account


```js
zoom_us.accounts({}, context)
```

#### Input
* input `object`
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output [AccountList](#accountlist)

### accountCreate
Create a sub account under the master account. <aside>Your account must be a master account and have this privilege to create sub account. Zoom only assigns this privilege to trusted partners. The created user will not receive a confirmation email.</aside>.


```js
zoom_us.accountCreate({
  "body": {
    "email": "",
    "first_name": "",
    "last_name": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Account](#account)

#### Output
* output `object`
  * created_at `string`: Account created date time
  * id `string`: Account ID
  * owner_email `string`: Account owner email
  * owner_id `string`: Account Owner ID

### accountDisassociate
Disassociate a sub account from the master account. This will leave the account intact but the sub account will not longer be associated with the master account.


```js
zoom_us.accountDisassociate({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID

#### Output
*Output schema unknown*

### account
Retrieve a sub account under the master account. <aside>Your account must be a master account and have this privilege to read sub accounts. Zoom only assigns this privilege to trusted partners</aside>.


```js
zoom_us.account({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID

#### Output
* output `object`
  * created_at `string`: Account creation date/time
  * id `string`: Account ID
  * options [AccountOptions](#accountoptions)
  * owner_email `string`: Account Owner email
  * owner_id `string`: Account Owner ID
  * vanity_url `string`: Account Vanity URL

### accountBilling
Retrieve billing information for a sub account under the master account


```js
zoom_us.accountBilling({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID

#### Output
* output [BillingContactRequired](#billingcontactrequired)

### accountBillingUpdate
Update billing information for a sub account under the master account <aside>Only for the sub account which is a paid account and paid by master account</aside>


```js
zoom_us.accountBillingUpdate({
  "accountId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID
  * body **required** [BillingContact](#billingcontact)

#### Output
*Output schema unknown*

### accountManagedDomain
Retrieve a sub account's managed domains under the master account


```js
zoom_us.accountManagedDomain({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID

#### Output
* output [DomainsList](#domainslist)

### accountOptionsUpdate
Update a sub account's options under the master account


```js
zoom_us.accountOptionsUpdate({
  "accountId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID
  * body **required** [AccountOptions](#accountoptions)

#### Output
*Output schema unknown*

### accountPlans
Retrieve plan information for a sub account under the master account  <aside>Only for the sub account which is paid by master account</aside>


```js
zoom_us.accountPlans({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID

#### Output
* output [AccountPlans](#accountplans)

### accountPlanCreate
Subscribe plans for a sub account of the master account <aside>Can only subscribe plans for the sub account which is a free account and paid by master account</aside>


```js
zoom_us.accountPlanCreate({
  "accountId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID
  * body **required**
    * contact [BillingContactRequired](#billingcontactrequired)
    * plan_audio `object`: Additional Audio Conferencing <a href="#plans">plan type</a>
      * callout_countries `string`: Call-out countries, multiple value separated by comma
      * ddi_numbers `integer`: Dedicated Dial-In Numbers
      * premium_countries `string`: Premium countries, multiple value separated by comma
      * tollfree_countries `string`: Toll-free countries, multiple value separated by comma
      * type `string`: Additional Audio Conferencing <a href="#plans">plan type</a>
    * plan_base [AccountPlanBaseRequired](#accountplanbaserequired)
    * plan_large_meeting `array`: Additional Large Meeting Plans
      * items [AccountPlan](#accountplan)
    * plan_recording `string`: Additional Cloud Recording Plan
    * plan_room_connector [AccountPlan](#accountplan)
    * plan_webinar `array`: Additional Webinar Plans
      * items [AccountPlan](#accountplan)
    * plan_zoom_rooms [AccountPlan](#accountplan)

#### Output
* output [AccountPlans](#accountplans)

### accountPlanAddonCreate
Add an additional plan for sub account <aside>Can only add an Additional plan for the sub account which is a paid account and paid by master account</aside>


```js
zoom_us.accountPlanAddonCreate({
  "accountId": "",
  "body": {
    "type": "",
    "hosts": 0
  }
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID
  * body **required** [AccountPlanRequired](#accountplanrequired)

#### Output
*Output schema unknown*

### accountPlanAddonUpdate
Update an additional plan for sub account<aside>Can only update an Additional plan for the sub account which is a paid account and paid by master account</aside>


```js
zoom_us.accountPlanAddonUpdate({
  "accountId": "",
  "body": {
    "type": "",
    "hosts": 0
  }
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID
  * body **required** [AccountPlanRequired](#accountplanrequired)

#### Output
*Output schema unknown*

### accountPlanBaseUpdate
Update a base plan for a sub account <aside>Can only update a base plan for the sub account which is a paid account and paid by master account</aside>


```js
zoom_us.accountPlanBaseUpdate({
  "accountId": "",
  "body": {
    "type": "",
    "hosts": 0
  }
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID
  * body **required** [AccountPlanBaseRequired](#accountplanbaserequired)

#### Output
*Output schema unknown*

### accountSettings
Retrieve a sub account's settings under the master account


```js
zoom_us.accountSettings({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID

#### Output
* output [AccountSettings](#accountsettings)

### accountSettingsUpdate
Update a sub account's settings under the master account


```js
zoom_us.accountSettingsUpdate({
  "accountId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID
  * body **required** [AccountSettings](#accountsettings)

#### Output
*Output schema unknown*

### groups
List groups under your account


```js
zoom_us.groups(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GroupList](#grouplist)

### groupCreate
Create a group under your account


```js
zoom_us.groupCreate({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * name `string`: Group name

#### Output
* output `object`
  * id `string`: Group ID
  * name `string`: Group name
  * total_members `integer`: Group member count

### groupDelete
Delete a group under your account


```js
zoom_us.groupDelete({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID

#### Output
*Output schema unknown*

### group
Retrieve a group under your account


```js
zoom_us.group({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID

#### Output
* output
  * id `string`: Group ID
  * name `string`: Group name
  * total_members `integer`: Total number of members in this group

### groupUpdate
Update a group under your account


```js
zoom_us.groupUpdate({
  "groupId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
  * body **required** `object`
    * name `string`: Group name. Must be unique in one account. Character length is less than 128.

#### Output
*Output schema unknown*

### groupMembers
List a group's members under your account


```js
zoom_us.groupMembers({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output [GroupMemberList](#groupmemberlist)

### groupMembersCreate
Add members to a group under your account


```js
zoom_us.groupMembersCreate({
  "groupId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
  * body **required** `object`
    * members `array`: List of Group members
      * items `object`
        * email `string`: User email. If ID given, email is ignored.
        * id `string`: User ID

#### Output
* output `object`
  * added_at `string`
  * ids `string`

### groupMembersDelete
Delete a member from a group under your account


```js
zoom_us.groupMembersDelete({
  "groupId": "",
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
  * memberId **required** `string`: The member ID

#### Output
*Output schema unknown*

### deviceList
List H.323/SIP Devices on your Zoom account.


```js
zoom_us.deviceList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [DeviceList](#devicelist)

### deviceCreate
Create a H.323/SIP Device on your Zoom account


```js
zoom_us.deviceCreate({
  "body": {
    "name": "",
    "protocol": "",
    "ip": "",
    "encryption": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Device](#device)

#### Output
* output
  * id `string`: Device ID
  * encryption **required** `string` (values: auto, yes, no): Device encryption
  * ip **required** `string`: Device Ip
  * name **required** `string`: Device name
  * protocol **required** `string` (values: H.323, SIP): Device protocol

### deviceDelete
Delete a H.323/SIP Device on your Zoom account


```js
zoom_us.deviceDelete({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`: The device ID

#### Output
*Output schema unknown*

### deviceUpdate
Update a H.323/SIP Device on your Zoom account


```js
zoom_us.deviceUpdate({
  "deviceId": "",
  "body": {
    "name": "",
    "protocol": "",
    "ip": "",
    "encryption": ""
  }
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`: The device ID
  * body **required** [Device](#device)

#### Output
*Output schema unknown*

### imChatSessions
Retrieve IM Chat sessions for a specified period <aside>This API only supports oauth2.</aside>


```js
zoom_us.imChatSessions({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * from `string`: Start date
  * to `string`: End date
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_size `integer`: The amount of records returns within a single API call. 
  * sessions `array`: Array of session objects
    * items `object`
      * last_message_sent_time `string`: Last message sent time
      * name `string`: Meeting topic
      * session_id `string`: IM Chat session ID
      * type `string`: IM Chat session type

### imChatMessages
Retrieve IM Chat messages for a specified period <aside>This API only supports oauth2.</aside>


```js
zoom_us.imChatMessages({
  "sessionId": "",
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * sessionId **required** `string`: IM Chat Session ID
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * from `string`: Start date
  * session_id `string`: IM Chat session ID
  * to `string`: End date
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_size `integer`: The amount of records returns within a single API call. 
  * messages `array`: Array of session objects
    * items `object`
      * action `string`: IM Chat message action
      * action_time `string`: Action time
      * date_time `string`: IM Chat message sent time
      * message `string`: IM Chat message content
      * sender `string`: IM Chat message sender

### imGroups
List IM groups under your account


```js
zoom_us.imGroups(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [IMGroupList](#imgrouplist)

### imGroupCreate
Create a IM Group under your account


```js
zoom_us.imGroupCreate({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * name `string`: Group name, must be unique in one account
    * search_by_account `boolean`: Members can search others under same account
    * search_by_domain `boolean`: Members can search others in the same email domain
    * search_by_ma_account `boolean`: Members can search others under same master account, including all sub accounts
    * type `string` (values: normal, shared, restricted): IM Group type

#### Output
* output `object`
  * id `string`: Group ID
  * name `string`: Group name
  * search_by_account `boolean`: Members can search others under same account
  * search_by_domain `boolean`: Members can search others in the same email domain
  * search_by_ma_account `boolean`: Members can search others under same master account, including all sub accounts
  * total_members `integer`: Group member count

### imGroupDelete
Delete an IM Group under your account


```js
zoom_us.imGroupDelete({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID

#### Output
*Output schema unknown*

### imGroup
Retrieve an IM Group under your account


```js
zoom_us.imGroup({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID

#### Output
* output
  * id `string`: Group ID
  * name `string`: Group name
  * total_members `integer`: Total number of members in this group
  * search_by_account `boolean`: Members can search others under same account
  * search_by_domain `boolean`: Members can search others in the same email domain
  * search_by_ma_account `boolean`: Members can search others under same master account, including all sub accounts
  * type `string` (values: normal, shared, restricted): IM Group type

### imGroupUpdate
Update an IM Group under your account


```js
zoom_us.imGroupUpdate({
  "groupId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
  * body **required** `object`
    * name `string`: Group name, must be unique in one account
    * search_by_account `boolean`: Members can search others under same account
    * search_by_domain `boolean`: Members can search others in the same email domain
    * search_by_ma_account `boolean`: Members can search others under same master account, including all sub accounts
    * type `string` (values: normal, shared, restricted): IM Group type

#### Output
*Output schema unknown*

### imGroupMembers
List an IM Group's members under your account


```js
zoom_us.imGroupMembers({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output [GroupMemberList](#groupmemberlist)

### imGroupMembersCreate
Add members to an IM Group under your account


```js
zoom_us.imGroupMembersCreate({
  "groupId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
  * body **required** `object`
    * members `array`: List of IM Group members
      * items `object`
        * email `string`: User email. If ID given, email is ignored.
        * id `string`: User ID

#### Output
* output `object`
  * added_at `string`
  * ids `string`

### imGroupMembersDelete
Delete a member from an IM Group under your account


```js
zoom_us.imGroupMembersDelete({
  "groupId": "",
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
  * memberId **required** `string`: The member ID

#### Output
*Output schema unknown*

### meetingDelete
Delete a meeting


```js
zoom_us.meetingDelete({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * occurrence_id `string`: The meeting occurrence ID

#### Output
*Output schema unknown*

### meeting
Retrieve a meeting's details


```js
zoom_us.meeting({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID

#### Output
* output
  * host_id `string`: ID of the user set as host of meeting
  * id `string`: Meeting ID, also know as meeting number
  * uuid `string`: Meeting unique ID
  * agenda `string`: Agenda
  * created_at `string`: Create time
  * duration `integer`: Meeting duration
  * h323_password `string`: H.323/SIP room system password
  * join_url `string`: Join url
  * occurrences [Occurrences](#occurrences)
  * password `string`: Meeting password
  * settings [MeetingSettings](#meetingsettings)
  * start_time `string`: Meeting start time
  * start_url `string`: Start url
  * timezone `string`: Timezone to format start_time
  * topic `string`: Meeting topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### meetingUpdate
Update a meeting's details


```js
zoom_us.meetingUpdate({
  "meetingId": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * body **required**
    * schedule_for `string`: Email or userId if you want to schedule meeting for another user.
    * agenda `string`: Meeting description
    * duration `integer`: Meeting duration (minutes). Used for scheduled meetings only
    * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
    * recurrence [Recurrence](#recurrence)
    * settings
      * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
      * approval_type `integer` (values: 0, 1, 2)
      * audio `string` (values: both, telephony, voip): Determine how participants can join the audio portion of the meeting
      * auto_recording `string` (values: local, cloud, none)
      * close_registration `boolean`: Close registration after event date
      * cn_meeting `boolean`: Host meeting in China
      * enforce_login `boolean`: Only signed-in users can join this meeting
      * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
      * host_video `boolean`: Start video when host joins meeting
      * in_meeting `boolean`: Host meeting in India
      * join_before_host `boolean`: Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
      * mute_upon_entry `boolean`: Mute participants upon entry
      * participant_video `boolean`: Start video when participants join meeting
      * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring meeting with fixed time only.
      * use_pmi `boolean`: Use Personal Meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time.
      * waiting_room `boolean`: Enable waiting room
      * watermark `boolean`: Add watermark when viewing shared screen
      * registrants_confirmation_email `boolean`: Send confirmation Email to Registrants
    * start_time `string`: Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and you will need to specify the time zone. Only used for scheduled meetings and recurring meetings with fixed time.
    * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
    * topic `string`: Meeting topic
    * tracking_fields `array`: Tracking fields
      * items `object`
        * field `string`: Tracking fields type
        * value `string`: Tracking fields value
    * type `integer` (values: 1, 2, 3, 8): Meeting Type

#### Output
*Output schema unknown*

### meetingInvitation
Retrieve a meeting invitation


```js
zoom_us.meetingInvitation({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID

#### Output
* output [MeetingInvitation](#meetinginvitation)

### meetingLiveStreamUpdate
Update a meeting's live stream


```js
zoom_us.meetingLiveStreamUpdate({
  "meetingId": 0,
  "body": {
    "stream_url": "",
    "stream_key": ""
  }
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * body **required** [MeetingLiveStream](#meetinglivestream)

#### Output
*Output schema unknown*

### meetingLiveStreamStatusUpdate
Update a meeting's live stream status


```js
zoom_us.meetingLiveStreamStatusUpdate({
  "meetingId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * body **required** [MeetingLiveStreamStatus](#meetinglivestreamstatus)

#### Output
*Output schema unknown*

### meetingPolls
List polls of a meeting


```js
zoom_us.meetingPolls({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID

#### Output
* output [PollList](#polllist)

### meetingPollCreate
Create a poll for a meeting


```js
zoom_us.meetingPollCreate({
  "meetingId": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * body **required**
    * questions `array`: Array of Polls
      * items `object`
        * answers `array`: Question answers
          * items `string`
        * name `string`: Question name
        * type `string` (values: single, multiple): Question type
    * title `string`: Poll Title

#### Output
* output
  * id `string`: Meeting Poll ID
  * status `string` (values: notstart, started, ended, sharing): Status of the Meeting Poll
  * questions `array`: Array of Polls
    * items `object`
      * answers `array`: Question answers
        * items `string`
      * name `string`: Question name
      * type `string` (values: single, multiple): Question type
  * title `string`: Poll Title

### meetingPollDelete
Delete a meeting's Poll


```js
zoom_us.meetingPollDelete({
  "meetingId": 0,
  "pollId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * pollId **required** `string`: The poll ID

#### Output
*Output schema unknown*

### meetingPollGet
Retrieve a meeting's poll


```js
zoom_us.meetingPollGet({
  "meetingId": 0,
  "pollId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * pollId **required** `string`: The poll ID

#### Output
* output
  * id `string`: Meeting Poll ID
  * status `string` (values: notstart, started, ended, sharing): Status of the Meeting Poll
  * questions `array`: Array of Polls
    * items `object`
      * answers `array`: Question answers
        * items `string`
      * name `string`: Question name
      * type `string` (values: single, multiple): Question type
  * title `string`: Poll Title

### meetingPollUpdate
Update a meeting's poll


```js
zoom_us.meetingPollUpdate({
  "meetingId": 0,
  "pollId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * pollId **required** `string`: The poll ID
  * body **required**
    * questions `array`: Array of Polls
      * items `object`
        * answers `array`: Question answers
          * items `string`
        * name `string`: Question name
        * type `string` (values: single, multiple): Question type
    * title `string`: Poll Title

#### Output
*Output schema unknown*

### recordingDelete
Delete a meeting's recordings


```js
zoom_us.recordingDelete({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * action `string` (values: trash, delete): The recording delete action

#### Output
*Output schema unknown*

### recordingGet
Retrieve a meeting’s all recordings


```js
zoom_us.recordingGet({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.

#### Output
* output
  * account_id `string`: ID of the user account
  * duration `integer`: Meeting duration
  * host_id `string`: ID of the user set as host of meeting
  * id `string`: Meeting ID, also know as meeting number
  * recording_count `string`: Recording count
  * start_time `string`: Meeting start time
  * topic `string`: Meeting topic
  * total_size `string`: Total size
  * uuid `string`: Meeting unique ID
  * recording_files `array`: List of Recording file
    * items
      * deleted_time `string`: The recording delete time. Response in trash query.
      * download_url `string`: The recording download url. Response in general query.
      * file_size `number`: The recording file size.
      * file_type `string`: The recording file type.
      * id `string`: The recording file ID.Response in general query.
      * meeting_id `string`: The meeting ID. 
      * play_url `string`: The recording file play url. Response in general query.
      * recording_end `string`: The recording end time. Response in general query.
      * recording_start `string`: The recording start time.
      * recording_type `string`: The recording file type.
      * status `string`: The recording status. Response in general query.

### recordingSettingUpdate
Retrieve a meeting recording's settings


```js
zoom_us.recordingSettingUpdate({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.

#### Output
* output [RecordingSettings](#recordingsettings)

### recordingSettingsUpdate
Update a meeting recording's settings


```js
zoom_us.recordingSettingsUpdate({
  "meetingId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * body **required** [RecordingSettings](#recordingsettings)

#### Output
*Output schema unknown*

### recordingStatusUpdate
Recover a meeting's recordings


```js
zoom_us.recordingStatusUpdate({
  "meetingId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * body **required** `object`
    * action `string` (values: recover)

#### Output
*Output schema unknown*

### recordingDeleteOne
Delete one meeting recording file


```js
zoom_us.recordingDeleteOne({
  "meetingId": "",
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * recordingId **required** `string`: The recording ID
  * action `string` (values: trash, delete): The recording delete action

#### Output
*Output schema unknown*

### recordingStatusUpdateOne
Recover a single recording


```js
zoom_us.recordingStatusUpdateOne({
  "meetingId": "",
  "recordingId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * recordingId **required** `string`: The recording ID
  * body **required** `object`
    * action `string` (values: recover)

#### Output
*Output schema unknown*

### meetingRegistrants
List registrants of a meeting


```js
zoom_us.meetingRegistrants({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * occurrence_id `string`: The meeting occurrence ID
  * status `string` (values: pending, approved, denied): The registrant status
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output [MeetingRegistrantList](#meetingregistrantlist)

### meetingRegistrantCreate
Register a participant for a meeting


```js
zoom_us.meetingRegistrantCreate({
  "meetingId": 0,
  "body": {
    "email": "",
    "first_name": "",
    "last_name": ""
  }
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * occurrence_ids `string`: Occurrence IDs. You can find these with the meeting get API. Multiple values separated by comma.
  * body **required** [MeetingRegistrant](#meetingregistrant)

#### Output
* output `object`
  * id `string`: Registrant ID
  * join_url `string`: Join URL for this registrant
  * registrant_id `string`: Registrant ID
  * start_time `string`: Start time
  * topic `string`: Topic

### meetingRegistrantStatus
Update a meeting registrant's status


```js
zoom_us.meetingRegistrantStatus({
  "meetingId": 0,
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * occurrence_id `string`: The meeting occurrence ID
  * body **required** [RegistrantStatus](#registrantstatus)

#### Output
*Output schema unknown*

### meetingStatus
Update a meeting's status


```js
zoom_us.meetingStatus({
  "meetingId": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * body **required** `object`
    * action `string` (values: end)

#### Output
*Output schema unknown*

### dashboardCRC
Get CRC Port usage hour by hour for a specified time period <aside class='notice'>We will report a maximum of one month. For example, if "from" is set to "2017-08-05" and "to" is "2017-10-10" we will adjust "from" to "2017-09-10"</aside>.


```js
zoom_us.dashboardCRC({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Start Date
  * to **required** `string`: End Date

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * crc_ports_usage `array`
    * items `object`
      * crc_ports_hour_usage `array`
        * items `object`
          * hour `string`
          * max_usage `integer`
          * total_usage `integer`
      * date_time `string`: Date and time

### dashboardIM
Retrieve metrics of Zoom IM


```js
zoom_us.dashboardIM({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * users `array`
    * items `object`
      * calls_receive `integer`
      * calls_send `integer`
      * email `string`: User email
      * emoji_receive `integer`
      * emoji_send `integer`
      * files_receive `integer`
      * files_send `integer`
      * group_receive `integer`
      * group_send `integer`
      * images_receive `integer`
      * images_send `integer`
      * total_receive `integer`
      * total_send `integer`
      * user_id `string`: User ID
      * user_name `string`: User display name
      * videos_receive `integer`
      * videos_send `integer`
      * voice_receive `integer`
      * voice_send `integer`

### dashboardMeetings
List live meetings or past meetings for a specified period


```js
zoom_us.dashboardMeetings({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: past, pastOne, live): The meeting type
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * meetings `array`: Array of meeting objects
    * items [MeetingMetric](#meetingmetric)

### dashboardMeetingDetail
Retrieve live or past meetings detail


```js
zoom_us.dashboardMeetingDetail({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * type `string` (values: past, pastOne, live): The meeting type

#### Output
* output [MeetingMetric](#meetingmetric)

### dashboardMeetingParticipants
Retrieve live or past meetings participants


```js
zoom_us.dashboardMeetingParticipants({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * type `string` (values: past, pastOne, live): The meeting type
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * participants `array`: Array of user objects
    * items `object`
      * connection_type `string`: Participant connection type
      * data_center `string`: Participant data center
      * device `string`: Participant device
      * domain `string`: Participant domain
      * harddisk_id `string`: Participant hard disk id
      * id `string`: Participant UUID
      * ip_address `string`: Participant IP Address
      * join_time `string`: Participant join time
      * leave_time `string`: Participant leave time
      * location `string`: Participant location
      * mac_addr `string`: Participant MAC Address
      * microphone `string`: Participant microphone
      * network_type `string`: Participant network type
      * pc_name `string`: Participant PC name
      * recording `boolean`: Participant record
      * share_application `boolean`: Did participant share application
      * share_desktop `boolean`: Did participant share desktop
      * share_whiteboard `boolean`: Did participant share whiteboard
      * speaker `string`: Participant speaker
      * user_id `string`: Participant ID
      * user_name `string`: Participant display name
      * version `string`: Participant version

### dashboardMeetingParticipantsQOS
Retrieve list of live or past meetings participants quality of service


```js
zoom_us.dashboardMeetingParticipantsQOS({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * type `string` (values: past, live): The meeting type
  * page_size `integer`: Number of items returned per page
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output [QOSParticipantList](#qosparticipantlist)

### dashboardMeetingParticipantShare
Retrieve sharing/recording details of live or past meetings participant


```js
zoom_us.dashboardMeetingParticipantShare({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * type `string` (values: past, live): The meeting type
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * participants `array`: Array of participants
    * items `object`
      * details `array`: Array of sharing and recording details
        * items `object`
          * content `string`: Type of content shared
          * end_time `string`: End time of sharing
          * start_time `string`: Start time of sharing
      * id `string`: Participant UUID
      * user_id `string`: Participant ID
      * user_name `string`: Participant display name

### dashboardMeetingParticipantQOS
Retrieve live or past meetings participant quality of service


```js
zoom_us.dashboardMeetingParticipantQOS({
  "meetingId": "",
  "participantId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * participantId **required** `string`: Participant ID
  * type `string` (values: past, live): The meeting type

#### Output
* output [QOSParticipant](#qosparticipant)

### dashboardWebinars
List live webinars or past webinars for a specified period


```js
zoom_us.dashboardWebinars({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: past, pastOne, live): The webinar type
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * webinars `array`: Array of webinar objects
    * items [WebinarMetric](#webinarmetric)

### dashboardWebinarDetail
Retrieve live  or past webinars detail


```js
zoom_us.dashboardWebinarDetail({
  "webinarId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `string`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * type `string` (values: past, live): The webinar type

#### Output
* output [WebinarMetric](#webinarmetric)

### dashboardWebinarParticipants
Retrieve live or past webinar participants


```js
zoom_us.dashboardWebinarParticipants({
  "webinarId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `string`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * type `string` (values: past, live): The webinar type
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * participants `array`: Array of user objects
    * items `object`
      * connection_type `string`: Participant connection type
      * data_center `string`: Participant data center
      * device `string`: Participant device
      * domain `string`: Participant domain
      * harddisk_id `string`: Participant hard disk id
      * id `string`: Participant UUID
      * ip_address `string`: Participant IP Address
      * join_time `string`: Participant join time
      * leave_time `string`: Participant leave time
      * location `string`: Participant location
      * mac_addr `string`: Participant MAC Address
      * microphone `string`: Participant microphone
      * network_type `string`: Participant network type
      * pc_name `string`: Participant PC name
      * recording `boolean`: Participant record
      * share_application `boolean`: Did participant share application
      * share_desktop `boolean`: Did participant share desktop
      * share_whiteboard `boolean`: Did participant share whiteboard
      * speaker `string`: Participant speaker
      * user_id `string`: Participant ID
      * user_name `string`: Participant display name
      * version `string`: Participant version

### dashboardWebinarParticipantsQOS
Retrieve list of live or past webinar participants quality of service


```js
zoom_us.dashboardWebinarParticipantsQOS({
  "webinarId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `string`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * type `string` (values: past, live): The webinar type
  * page_size `integer`: Number of items returned per page
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output [QOSParticipantList](#qosparticipantlist)

### dashboardWebinarParticipantShare
Retrieve sharing/recording details of live or past webinar participant


```js
zoom_us.dashboardWebinarParticipantShare({
  "webinarId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `string`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * type `string` (values: past, live): The webinar type
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * participants `array`: Array of participants
    * items `object`
      * details `array`: Array of sharing and recording details
        * items `object`
          * content `string`: Type of content shared
          * end_time `string`: End time of sharing
          * start_time `string`: Start time of sharing
      * id `string`: Participant UUID
      * user_id `string`: Participant ID
      * user_name `string`: Participant display name

### dashboardWebinarParticipantQOS
Retrieve live or past webinar participant quality of service


```js
zoom_us.dashboardWebinarParticipantQOS({
  "webinarId": "",
  "participantId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `string`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * participantId **required** `string`: Participant ID
  * type `string` (values: past, live): The webinar type

#### Output
* output [QOSParticipant](#qosparticipant)

### dashboardZoomRooms
List all zoom rooms on account


```js
zoom_us.dashboardZoomRooms({}, context)
```

#### Input
* input `object`
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output [ZoomRoomList](#zoomroomlist)

### dashboardZoomRoom
Retrieve zoom room on account


```js
zoom_us.dashboardZoomRoom({
  "zoomroomId": "",
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * zoomroomId **required** `string`: The Zoom Room ID
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output
  * account_type `string`: Zoom Room email type
  * calender_name `string`: Zoom Calendar name
  * camera `string`: Zoom Room camera
  * device_ip `string`: Zoom Room device IP
  * email `string`: Zoom Room email
  * id `string`: Zoom Room ID
  * last_start_time `string`: Zoom Room last start time
  * microphone `string`: Zoom Room microphone
  * room_name `string`: Zoom Room name
  * speaker `string`: Zoom Room speaker
  * status `string`: Zoom Room status
  * live_meeting [MeetingMetric](#meetingmetric)
  * past_meetings `object`
    * from `string`: Start date for this report
    * to `string`: End date for this report
    * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
    * page_count `integer`: The number of items returned on this page
    * page_size `integer`: The number of records returned within a single API call.
    * total_records `integer`: The number of all records available across pages
    * meetings `array`: Array of meeting objects
      * items [MeetingMetric](#meetingmetric)

### pastMeetings
List of ended meeting instances


```js
zoom_us.pastMeetings({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID

#### Output
* output [MeetingInstances](#meetinginstances)

### pastMeetingDetails
Retrieve ended meeting details


```js
zoom_us.pastMeetingDetails({
  "meetingUUID": ""
}, context)
```

#### Input
* input `object`
  * meetingUUID **required** `string`: The meeting UUID.

#### Output
* output `object`
  * duration `integer`: Meeting duration
  * end_time `string`: Meeting end time
  * host_id `integer`: Host ID
  * id `integer`: Meeting ID
  * participants_count `integer`: Number of meeting participants
  * start_time `string`: Meeting start time
  * topic `string`: Meeting topic
  * total_minutes `integer`: Number of meeting minutes
  * type `integer`: Meeting type
  * user_email `string`: User email
  * user_name `string`: User display name
  * uuid `string`: Meeting UUID

### pastMeetingParticipants
Retrieve ended meeting participants


```js
zoom_us.pastMeetingParticipants({
  "meetingUUID": ""
}, context)
```

#### Input
* input `object`
  * meetingUUID **required** `string`: The meeting UUID.
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * participants `array`: Array of meeting participant objects
    * items `object`
      * id `string`: Participant UUID
      * name `string`: Participant display name

### pastWebinars
List of ended webinar instances


```js
zoom_us.pastWebinars({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID

#### Output
* output [WebinarInstances](#webinarinstances)

### reportCloudRecording
Retrieve cloud recording usage report for a specified period. You can only get cloud recording reports for the most recent period of 6 months. The date gap between from and to dates should be smaller or equal to 30 days.


```js
zoom_us.reportCloudRecording({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Start Date
  * to **required** `string`: End Date

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * cloud_recording_storage `array`: Array of cloud usage objects
    * items `object`
      * date `string`
      * free_usage `string`
      * plan_usage `string`
      * usage `string`

### reportDaily
Retrieve daily report for one month, can only get daily report for recent 6 months


```js
zoom_us.reportDaily({}, context)
```

#### Input
* input `object`
  * year `integer`: Year for this report
  * month `integer`: Month for this report

#### Output
* output `object`
  * dates `array`: Array of date objects
    * items `object`
      * date `string`: Date for this object
      * meeting_minutes `integer`: Number of meeting minutes on this date
      * meetings `integer`: Number of meetings on this date
      * new_users `integer`: Number of new users on this date
      * participants `integer`: Number of participants on this date
  * month `integer`: Month for this report
  * year `integer`: Year for this report

### reportMeetingDetails
Retrieve ended meeting details report


```js
zoom_us.reportMeetingDetails({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.

#### Output
* output `object`
  * duration `integer`: Meeting duration
  * end_time `string`: Meeting end time
  * id `integer`: Meeting ID
  * participants_count `integer`: Number of meeting participants
  * start_time `string`: Meeting start time
  * topic `string`: Meeting topic
  * total_minutes `integer`: Number of meeting minutes
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer`: Meeting type
  * user_email `string`: User email
  * user_name `string`: User display name
  * uuid `string`: Meeting UUID

### reportMeetingParticipants
Retrieve ended meeting participants report


```js
zoom_us.reportMeetingParticipants({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * participants `array`: Array of meeting participant objects
    * items `object`
      * attentiveness_score `integer`: Participant attentiveness score
      * duration `integer`: Participant duration
      * id `string`: Participant UUID
      * join_time `string`: Participant join time
      * leave_time `string`: Participant leave time
      * name `string`: Participant display name
      * user_email `string`: Participant email
      * user_id `string`: Participant ID

### reportMeetingPolls
Retrieve ended meeting polls report


```js
zoom_us.reportMeetingPolls({
  "meetingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `string`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.

#### Output
* output `object`
  * id `integer`: Meeting ID
  * questions `array`: Array of Meeting question objects
    * items `object`
      * email `string`: Participant email
      * name `string`: Participant display name
      * question_details `array`: Array of questions from user
        * items `object`
          * answer `string`: Given answer
          * question `string`: Asked question
  * start_time `string`: Meeting start time
  * uuid `string`: Meeting UUID

### reportTelephone
Retrieve telephone report for a specified period <aside>Toll Report option would be removed.</aside>.


```js
zoom_us.reportTelephone({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: 1): Audio type
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * telephony_usage `array`: Array of telephony objects
    * items `object`
      * call_in_number `string`: Call in number
      * country_name `string`: Country Name
      * dept `string`: User department
      * duration `integer`: Meeting duration
      * end_time `string`: Meeting end time
      * host_email `string`: User email
      * host_name `string`: User display name
      * meeting_id `integer`: Meeting ID
      * meeting_type `string`: Meeting Type
      * phone_number `string`: Telephone Number
      * start_time `string`: Meeting start time
      * total `number`: Total

### reportUsers
Retrieve active or inactive hosts report for a specified period


```js
zoom_us.reportUsers({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: active, inactive): Active hosts or inactive hosts
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * total_meeting_minutes `integer`: Number of meeting minutes for this range
  * total_meetings `integer`: Number of meetings for this range
  * total_participants `integer`: Number of participants for this range
  * users `array`: Array of user objects
    * items `object`
      * dept `string`: User department
      * email `string`: User email
      * id `string`: User ID
      * meeting_minutes `integer`: Number of meeting minutes for user
      * meetings `integer`: Number of meetings for user
      * participants `integer`: Number of participants in meetings for user
      * type `integer`: User type
      * user_name `string`: User display name

### reportMeetings
Retrieve ended meetings report for a specified period


```js
zoom_us.reportMeetings({
  "userId": "",
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * meetings `array`: Array of meeting objects
    * items `object`
      * duration `integer`: Meeting duration
      * end_time `string`: Meeting end time
      * id `integer`: Meeting ID
      * participants_count `integer`: Number of meeting participants
      * start_time `string`: Meeting start time
      * topic `string`: Meeting topic
      * total_minutes `integer`: Number of meeting minutes
      * type `integer`: Meeting type
      * user_email `string`: User email
      * user_name `string`: User display name
      * uuid `string`: Meeting UUID

### reportWebinarDetails
Retrieve ended webinar details report


```js
zoom_us.reportWebinarDetails({
  "webinarId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `string`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.

#### Output
* output `object`
  * duration `integer`: Meeting duration
  * end_time `string`: Meeting end time
  * id `integer`: Meeting ID
  * participants_count `integer`: Number of meeting participants
  * start_time `string`: Meeting start time
  * topic `string`: Meeting topic
  * total_minutes `integer`: Number of meeting minutes
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer`: Meeting type
  * user_email `string`: User email
  * user_name `string`: User display name
  * uuid `string`: Meeting UUID

### reportWebinarParticipants
Retrieve ended webinar participants report


```js
zoom_us.reportWebinarParticipants({
  "webinarId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `string`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * participants `array`: Array of webinar participant objects
    * items `object`
      * attentiveness_score `string`: Participant attentiveness score
      * duration `integer`: Participant duration
      * id `string`: Participant UUID
      * join_time `string`: Participant join time
      * leave_time `string`: Participant leave time
      * name `string`: Participant display name
      * user_email `string`: Participant email
      * user_id `string`: Participant ID

### reportWebinarPolls
Retrieve ended webinar polls report


```js
zoom_us.reportWebinarPolls({
  "webinarId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `string`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.

#### Output
* output `object`
  * id `integer`: Webinar ID
  * questions `array`: Array of webinar question objects
    * items `object`
      * email `string`: Participant email
      * name `string`: Participant display name
      * question_details `array`: Array of questions from user
        * items `object`
          * answer `string`: Given answer
          * question `string`: Asked question
  * start_time `string`: Webinar start time
  * uuid `string`: Webinar UUID

### reportWebinarQA
Retrieve ended webinar Q&A report


```js
zoom_us.reportWebinarQA({
  "webinarId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `string`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.

#### Output
* output `object`
  * id `integer`: Webinar ID
  * questions `array`: Array of webinar question objects
    * items `object`
      * email `string`: Participant email
      * name `string`: Participant display name
      * question_details `array`: Array of questions from user
        * items `object`
          * answer `string`: Given answer
          * question `string`: Asked question
  * start_time `string`: Webinar start time
  * uuid `string`: Webinar UUID

### tsp
Retrieve TSP information on account level


```js
zoom_us.tsp(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * dial_in_numbers `array`
    * items `object`
      * code `string`: Country Code
      * number `string`: Dial-in number, length is less than 16
      * type `string`
  * enable `boolean`: Enable 3rd party audio conferencing for account users
  * tsp_provider `string`: 3rd party audio conferencing provider

### tspUpdate
Update TSP information on account level


```js
zoom_us.tspUpdate({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * enable `boolean`: Enable 3rd party audio conferencing for account users
    * tsp_provider `string`: 3rd party audio conferencing provider

#### Output
*Output schema unknown*

### users
List users on your account


```js
zoom_us.users({}, context)
```

#### Input
* input `object`
  * status `string` (values: active, inactive, pending): User status
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output [UserList](#userlist)

### userCreate
Create a user on your account


```js
zoom_us.userCreate({
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * action **required** `string` (values: create, autoCreate, custCreate, ssoCreate): Specify how to create the new user
    * user_info `object`
      * email **required** `string`: User's email address
      * first_name `string`: User's first name. Cannot contain more than 5 Chinese words.
      * last_name `string`: User's last name. Cannot contain more than 5 Chinese words.
      * password `string`: User’s password. Only for "autoCreate" action.
      * type **required** `integer` (values: 1, 2, 3): User's type

#### Output
* output `object`
  * email `string`: User's email address
  * first_name `string`: User's first name
  * id `string`: User ID
  * last_name `string`: User's last name
  * type `integer` (values: 1, 2, 3): User's type

### userEmail
Check if the user email exists


```js
zoom_us.userEmail({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: Zoom work email

#### Output
* output `object`
  * existed_email `boolean`

### userVanityName
Check if the user's personal meeting room name exists


```js
zoom_us.userVanityName({
  "vanity_name": ""
}, context)
```

#### Input
* input `object`
  * vanity_name **required** `string`: Personal meeting room name

#### Output
* output `object`
  * existed `boolean`

### userZPK
Check if the zpk is expired. The zpk is used to authenticate a user.


```js
zoom_us.userZPK({
  "zpk": ""
}, context)
```

#### Input
* input `object`
  * zpk **required** `string`: User zpk

#### Output
* output `object`
  * expire_in `integer`

### userDelete
Delete a user on your account


```js
zoom_us.userDelete({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * action `string` (values: disassociate, delete): Delete action type
  * transfer_email `string`: Transfer email
  * transfer_meeting `boolean`: Transfer meeting
  * transfer_webinar `boolean`: Transfer webinar
  * transfer_recording `boolean`: Transfer recording

#### Output
*Output schema unknown*

### user
Retrieve a user on your account


```js
zoom_us.user({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * login_type `string` (values: 0, 1, 99, 100, 101)

#### Output
* output
  * id `string`: User ID
  * created_at `string`: User create time
  * dept `string`: Department
  * email **required** `string`: User's email address
  * first_name `string`: User's first name
  * last_client_version `string`: User last login client version
  * last_login_time `string`: User last login time
  * last_name `string`: User's last name
  * pmi `string`: Personal Meeting ID
  * timezone `string`: Time Zone
  * type **required** `integer` (values: 1, 2, 3): User's type
  * account_id `string`
  * cms_user_id `string`
  * group_ids `array`
    * items `string`
  * host_key `string`
  * im_group_ids `array`
    * items `string`
  * language `string`
  * personal_meeting_url `string`
  * pic_url `string`
  * use_pmi `boolean`
  * vanity_url `string`
  * verified `integer`

### userUpdate
Update a user on your account


```js
zoom_us.userUpdate({
  "userId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required** [UserUpdate](#userupdate)

#### Output
*Output schema unknown*

### userAssistantsDelete
Delete all of a user'sassitants


```js
zoom_us.userAssistantsDelete({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address

#### Output
*Output schema unknown*

### userAssistants
List a user's assistants


```js
zoom_us.userAssistants({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address

#### Output
* output [UserAssistantsList](#userassistantslist)

### userAssistantCreate
Add assistants to a user


```js
zoom_us.userAssistantCreate({
  "userId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required** [UserAssistantsList](#userassistantslist)

#### Output
* output `object`
  * add_at `string`
  * ids `string`: User ID

### userAssistantDelete
Delete one of a user's assistants


```js
zoom_us.userAssistantDelete({
  "userId": "",
  "assistantId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * assistantId **required** `string`: Assistant's ID

#### Output
*Output schema unknown*

### userEmailUpdate
Update a user's email


```js
zoom_us.userEmailUpdate({
  "userId": "",
  "body": {
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required** `object`
    * email **required** `string`: User’s email. Character length is less than 128.

#### Output
*Output schema unknown*

### meetings
List meetings for a user


```js
zoom_us.meetings({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * type `string` (values: scheduled, live, upcoming): The meeting type
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output [MeetingList](#meetinglist)

### meetingCreate
Create a meeting for a user <aside>The expiration time of start_url is two hours. But for API users, the expiration time is 90 days.</aside>


```js
zoom_us.meetingCreate({
  "userId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required**
    * schedule_for `string`: Email or userId if you want to schedule meeting for another user.
    * agenda `string`: Meeting description
    * duration `integer`: Meeting duration (minutes). Used for scheduled meetings only
    * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
    * recurrence [Recurrence](#recurrence)
    * settings [MeetingSettings](#meetingsettings)
    * start_time `string`: Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and you will need to specify the time zone. Only used for scheduled meetings and recurring meetings with fixed time.
    * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
    * topic `string`: Meeting topic
    * tracking_fields `array`: Tracking fields
      * items `object`
        * field `string`: Tracking fields type
        * value `string`: Tracking fields value
    * type `integer` (values: 1, 2, 3, 8): Meeting Type

#### Output
* output
  * host_id `string`: ID of the user set as host of meeting
  * id `string`: Meeting ID, also known as meeting number
  * uuid `string`: Meeting unique ID
  * agenda `string`: Agenda
  * created_at `string`: Create time
  * duration `integer`: Meeting duration
  * h323_password `string`: H.323/SIP room system password
  * join_url `string`: Join url
  * occurrences [Occurrences](#occurrences)
  * password `string`: Meeting password
  * settings [MeetingSettings](#meetingsettings)
  * start_time `string`: Meeting start time
  * start_url `string`: Start url
  * timezone `string`: Timezone to format start_time
  * topic `string`: Meeting topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### userPACs
List user's PAC accounts


```js
zoom_us.userPACs({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address

#### Output
* output `object`
  * tsp_accounts `array`
    * items [PAC](#pac)

### userPassword
Update a user's password


```js
zoom_us.userPassword({
  "userId": "",
  "body": {
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required** `object`
    * password **required** `string`: User’s password. Character length is less than 32,

#### Output
*Output schema unknown*

### userPermission
Retrieve a user's permissions


```js
zoom_us.userPermission({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address

#### Output
* output [UserPermissions](#userpermissions)

### userPicture
Upload a user's profile picture


```js
zoom_us.userPicture({
  "userId": "",
  "pic_file": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * pic_file **required** `string`, `object`: User picture file, must be a jpg/jpeg file
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
*Output schema unknown*

### recordingsList
List all the recordings


```js
zoom_us.recordingsList({
  "userId": "",
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The number of records returned within a single API call
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * mc `string`: Query mc 
  * trash `boolean`: Query trash 

#### Output
* output [RecordingMeetingList](#recordingmeetinglist)

### userSchedulersDelete
Delete all of a user'schedulers


```js
zoom_us.userSchedulersDelete({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address

#### Output
*Output schema unknown*

### userSchedulers
List a user's schedulers


```js
zoom_us.userSchedulers({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address

#### Output
* output [UserSchedulersList](#userschedulerslist)

### userSchedulerDelete
Delete one of a user's schedulers


```js
zoom_us.userSchedulerDelete({
  "userId": "",
  "schedulerId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * schedulerId **required** `string`: Scheduler's ID

#### Output
*Output schema unknown*

### userSettings
Retrieve a user's settings


```js
zoom_us.userSettings({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * login_type `string` (values: 0, 1, 99, 100, 101)

#### Output
* output [UserSettings](#usersettings)

### userSettingsUpdate
Update a user's settings


```js
zoom_us.userSettingsUpdate({
  "userId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required** [UserSettingsUpdate](#usersettingsupdate)

#### Output
*Output schema unknown*

### userStatus
Update a user's status


```js
zoom_us.userStatus({
  "userId": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required** `object`: The action
    * action **required** `string` (values: activate, deactivate): The action type

#### Output
*Output schema unknown*

### userSSOTokenDelete
Revoke a user's SSO token


```js
zoom_us.userSSOTokenDelete({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address

#### Output
*Output schema unknown*

### userToken
Retrieve a user's token


```js
zoom_us.userToken({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * type `string` (values: token, zpk, zak): User token type

#### Output
* output `object`
  * token `string`: User ID

### userTSPs
List user's TSP accounts


```js
zoom_us.userTSPs({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address

#### Output
* output `object`
  * tsp_accounts `array`
    * items [TSP](#tsp)

### userTSPCreate
Add a user's TSP account


```js
zoom_us.userTSPCreate({
  "userId": "",
  "body": {
    "conference_code": "",
    "leader_pin": ""
  }
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required** [TSP](#tsp)

#### Output
* output [TSP](#tsp)

### userTSPDelete
Delete a user's TSP account


```js
zoom_us.userTSPDelete({
  "userId": "",
  "tspId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * tspId **required** `string`: TSP account index

#### Output
*Output schema unknown*

### userTSP
Retrieve a user's TSP account


```js
zoom_us.userTSP({
  "userId": "",
  "tspId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * tspId **required** `string`: TSP account index

#### Output
* output [TSP](#tsp)

### userTSPUpdate
Update a user's TSP account


```js
zoom_us.userTSPUpdate({
  "userId": "",
  "tspId": "",
  "body": {
    "conference_code": "",
    "leader_pin": ""
  }
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * tspId **required** `string`: TSP account index
  * body **required** [TSP](#tsp)

#### Output
*Output schema unknown*

### webinars
List webinars for a user


```js
zoom_us.webinars({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output [WebinarList](#webinarlist)

### webinarCreate
Create a webinar for a user <aside>The expiration time of start_url is two hours. But for API users, the expiration time is 90 days.</aside>


```js
zoom_us.webinarCreate({
  "userId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required** [Webinar](#webinar)

#### Output
* output
  * host_id `string`: ID of the user set as host of Webinar
  * id `string`: Webinar ID, also known as Webinar number
  * uuid `string`: Webinar unique ID
  * agenda `string`: Webinar agenda
  * created_at `string`: Create time
  * duration `integer`: Webinar duration
  * join_url `string`: Join url
  * occurrences [Occurrences](#occurrences)
  * settings [WebinarSettings](#webinarsettings)
  * start_time `string`: Webinar start time
  * start_url `string`: Start url
  * timezone `string`: Timezone to format start_time
  * topic `string`: Webinar topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 5, 6, 9): Webinar Type

### trackingfieldList
List Tracking Fields on your Zoom account.


```js
zoom_us.trackingfieldList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TrackingFieldList](#trackingfieldlist)

### trackingfieldCreate
Create a Tracking Field on your Zoom account


```js
zoom_us.trackingfieldCreate({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [TrackingField](#trackingfield)

#### Output
* output
  * id `string`: Tracking Field ID
  * field `string`: Tracking Field Name
  * recommended_values `array`: Array of recommended values
    * items `string`
  * required `boolean`: Tracking Field Required
  * visible `boolean`: Tracking Field Visible

### trackingfieldDelete
Delete a Tracking Field on your Zoom account


```js
zoom_us.trackingfieldDelete({
  "fieldId": ""
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The Tracking Field ID

#### Output
*Output schema unknown*

### trackingfieldGet
Retrieve a tracking field


```js
zoom_us.trackingfieldGet({
  "fieldId": ""
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The Tracking Field ID

#### Output
* output
  * id `string`: Tracking Field ID
  * field `string`: Tracking Field Name
  * recommended_values `array`: Array of recommended values
    * items `string`
  * required `boolean`: Tracking Field Required
  * visible `boolean`: Tracking Field Visible

### trackingfieldUpdate
Update a Tracking Field on your Zoom account


```js
zoom_us.trackingfieldUpdate({
  "fieldId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * fieldId **required** `string`: The Tracking Field ID
  * body **required** [TrackingField](#trackingfield)

#### Output
*Output schema unknown*

### webhooks
List webhooks for a account


```js
zoom_us.webhooks(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WebhookList](#webhooklist)

### webhookCreate
Create a webhook for a account


```js
zoom_us.webhookCreate({
  "body": {
    "url": "",
    "auth_user": "",
    "auth_password": "",
    "events": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Webhook](#webhook)

#### Output
* output
  * webhook_id `string`: Webhook Id
  * auth_password **required** `string`: Webhook auth password
  * auth_user **required** `string`: Webhook auth user name
  * events **required** `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left, meeting_registered, recording_transcript_completed): List of events objects.
    * items `string`
  * url **required** `string`: Webhook endpoint
  * created_at `string`: Webhook create time

### webhookSwitch
Switch webhook version


```js
zoom_us.webhookSwitch({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * version **required** `string` (values: v1, v2)

#### Output
*Output schema unknown*

### webhookDelete
Delete a webhook


```js
zoom_us.webhookDelete({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: The webhook ID

#### Output
*Output schema unknown*

### webhook
Retrieve a webhook


```js
zoom_us.webhook({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: The webhook ID

#### Output
* output
  * webhook_id `string`: Webhook Id
  * auth_password **required** `string`: Webhook auth password
  * auth_user **required** `string`: Webhook auth user name
  * events **required** `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left, meeting_registered, recording_transcript_completed): List of events objects.
    * items `string`
  * url **required** `string`: Webhook endpoint
  * created_at `string`: Webhook create time

### webhookUpdate
Update a webhook


```js
zoom_us.webhookUpdate({
  "webhookId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`: The webhook ID
  * body **required** [WebhookUpdate](#webhookupdate)

#### Output
*Output schema unknown*

### webinarDelete
Delete a webinar


```js
zoom_us.webinarDelete({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * occurrence_id `string`: The meeting occurrence ID

#### Output
*Output schema unknown*

### webinar
Retrieve a webinar


```js
zoom_us.webinar({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID

#### Output
* output
  * host_id `string`: ID of the user set as host of webinar
  * id `string`: Webinar ID, also know as webinar number
  * uuid `string`: Webinar unique ID
  * agenda `string`: Webinar agenda
  * created_at `string`: Create time
  * duration `integer`: Webinar duration
  * join_url `string`: Join url
  * occurrences [Occurrences](#occurrences)
  * settings [WebinarSettings](#webinarsettings)
  * start_time `string`: Webinar start time
  * start_url `string`: Start url
  * timezone `string`: Timezone to format start_time
  * topic `string`: Webinar topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 5, 6, 9): Webinar Type

### webinarUpdate
Update a webinar


```js
zoom_us.webinarUpdate({
  "webinarId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * body **required** [WebinarUpdate](#webinarupdate)

#### Output
*Output schema unknown*

### webinarPanelistsDelete
Remove all panelists from a webinar


```js
zoom_us.webinarPanelistsDelete({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID

#### Output
*Output schema unknown*

### webinarPanelists
List panelists for a webinar


```js
zoom_us.webinarPanelists({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID

#### Output
* output [WebinarPanelistList](#webinarpanelistlist)

### webinarPanelistCreate
Add panelist to webinar


```js
zoom_us.webinarPanelistCreate({
  "webinarId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * body **required** [WebinarPanelist](#webinarpanelist)

#### Output
* output `object`
  * id `string`: Panelist ID
  * join_url `string`: Join URL for this panelist

### webinarPanelistDelete
Remove a panelist from a webinar


```js
zoom_us.webinarPanelistDelete({
  "webinarId": 0,
  "panelistId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * panelistId **required** `integer`: The panelist ID

#### Output
*Output schema unknown*

### webinarPolls
List polls of a webinar


```js
zoom_us.webinarPolls({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID

#### Output
* output [PollList](#polllist)

### webinarPollCreate
Create a poll for a webinar


```js
zoom_us.webinarPollCreate({
  "webinarId": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * body **required**
    * questions `array`: Array of Polls
      * items `object`
        * answers `array`: Question answers
          * items `string`
        * name `string`: Question name
        * type `string` (values: single, multiple): Question type
    * title `string`: Poll Title

#### Output
* output
  * id `string`: Webinar Poll ID
  * status `string` (values: notstart, started, ended, sharing): Status of the Webinar Poll
  * questions `array`: Array of Polls
    * items `object`
      * answers `array`: Question answers
        * items `string`
      * name `string`: Question name
      * type `string` (values: single, multiple): Question type
  * title `string`: Poll Title

### webinarPollDelete
Delete a webinar's Poll


```js
zoom_us.webinarPollDelete({
  "webinarId": 0,
  "pollId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * pollId **required** `string`: The poll ID

#### Output
*Output schema unknown*

### webinarPollGet
Retrieve a webinar's poll


```js
zoom_us.webinarPollGet({
  "webinarId": 0,
  "pollId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * pollId **required** `string`: The poll ID

#### Output
* output
  * id `string`: Webinar Poll ID
  * status `string` (values: notstart, started, ended, sharing): Status of the Webinar Poll
  * questions `array`: Array of Polls
    * items `object`
      * answers `array`: Question answers
        * items `string`
      * name `string`: Question name
      * type `string` (values: single, multiple): Question type
  * title `string`: Poll Title

### webinarPollUpdate
Update a webinar's poll


```js
zoom_us.webinarPollUpdate({
  "webinarId": 0,
  "pollId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * pollId **required** `string`: The poll ID
  * body **required**
    * questions `array`: Array of Polls
      * items `object`
        * answers `array`: Question answers
          * items `string`
        * name `string`: Question name
        * type `string` (values: single, multiple): Question type
    * title `string`: Poll Title

#### Output
*Output schema unknown*

### webinarRegistrants
List registrants for a webinar


```js
zoom_us.webinarRegistrants({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * occurrence_id `string`: The meeting occurrence ID
  * status `string` (values: pending, approved, denied): The registrant status
  * page_size `integer`: The number of records returned within a single API call
  * page_number `integer`: Current page number of returned records

#### Output
* output [WebinarRegistrantList](#webinarregistrantlist)

### webinarRegistrantCreate
Add a registrant for a webinar


```js
zoom_us.webinarRegistrantCreate({
  "webinarId": 0,
  "body": {
    "email": "",
    "first_name": "",
    "last_name": ""
  }
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * occurrence_ids `string`: Occurrence IDs, could get this value from Webinar Get API. Multiple value separated by comma.
  * body **required** [WebinarRegistrant](#webinarregistrant)

#### Output
* output `object`
  * id `string`: Registrant ID
  * join_url `string`: Join URL for this registrant
  * registrant_id `string`: Registrant ID
  * start_time `string`: Start time
  * topic `string`: Topic

### webinarRegistrantStatus
Update a webinar registrant's status


```js
zoom_us.webinarRegistrantStatus({
  "webinarId": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * occurrence_id `string`: The meeting occurrence ID
  * body **required** `object`
    * action **required** `string` (values: approve, cancel, deny)
    * registrants `array`: List of registrants
      * items `object`
        * email `string`
        * id `string`

#### Output
*Output schema unknown*

### webinarStatus
Update a webinar's status


```js
zoom_us.webinarStatus({
  "webinarId": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID
  * body **required** `object`
    * action `string` (values: end)

#### Output
*Output schema unknown*



## Definitions

### Account
* Account `object`: The account object represents an account on zoom. The person who created the account, or who the account was created for, is referred to as the account owner. You can read more about the Zoom account structure <a href='https://developer.zoom.us/blog/a-brief-look-at-zoom-account-structures/' target='_blank'>here</a>.
  * email **required** `string`: User's email address
  * first_name **required** `string`: User's first name
  * last_name **required** `string`: User's last name
  * options [AccountOptions](#accountoptions)
  * password **required** `string`: User's password

### AccountList
* Account List `object`: List of Accounts
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * accounts `array`: List of Account objects
    * items `object`
      * account_name `string`: Account name
      * account_type `string`: Account type
      * created_at `string`: Account creation date/time
      * id `string`: Account ID
      * owner_email `string`: Account owner email
      * seats `integer`: Account seats
      * subscription_end_time `string`: Account subscription end date/time
      * subscription_start_time `string`: Account subscription start date/time

### AccountListItem
* AccountListItem `object`: Account object in account list
  * accounts `array`: List of Account objects
    * items `object`
      * account_name `string`: Account name
      * account_type `string`: Account type
      * created_at `string`: Account creation date/time
      * id `string`: Account ID
      * owner_email `string`: Account owner email
      * seats `integer`: Account seats
      * subscription_end_time `string`: Account subscription end date/time
      * subscription_start_time `string`: Account subscription start date/time

### AccountOptions
* AccountOptions `object`: Account options object
  * meeting_connectors `string`: Meeting Connector, multiple values separated by comma
  * pay_mode `string` (values: master, sub): Payee
  * room_connectors `string`: Virtual Room Connector, multiple value separated by comma
  * share_mc `boolean`: Enable Share Meeting Connector
  * share_rc `boolean`: Enable Share Virtual Room Connector

### AccountPlan
* AccountPlan `object`: Account plan object
  * hosts `integer`: Account plan number of hosts
  * type `string`: Account <a href="#plans">plan type</a>

### AccountPlanBaseRequired
* AccountPlanBaseRequired `object`: Account base plan object
  * hosts **required** `integer`: Account base plan number of hosts. For a Pro Plan, please select a value between 1 and 9. For a Business Plan, please select a value between 10 and 49. For a Education Plan, please select a value between 20 and 149. For a Free Trial Plan, please select a value between 1 and 9999.
  * type **required** `string`: Account base <a href="#plans">plan type</a>

### AccountPlanRequired
* AccountPlanRequired `object`: Account plan object
  * hosts **required** `integer`: Account plan number of hosts
  * type **required** `string`: Account <a href="#plans">plan type</a>

### AccountPlans
* AccountPlans `object`: Account Plans object
  * plan_audio `object`: Additional Audio Conferencing <a href="#plans">plan type</a>
    * callout_countries `string`: Call-out countries, multiple value separated by comma
    * ddi_numbers `integer`: Dedicated Dial-In Numbers
    * premium_countries `string`: Premium countries, multiple value separated by comma
    * tollfree_countries `string`: Toll-free countries, multiple value separated by comma
    * type `string`: Additional Audio Conferencing <a href="#plans">plan type</a>
  * plan_base [AccountPlanBaseRequired](#accountplanbaserequired)
  * plan_large_meeting `array`: Additional Large Meeting Plans
    * items [AccountPlan](#accountplan)
  * plan_recording `string`: Additional Cloud Recording Plan
  * plan_room_connector [AccountPlan](#accountplan)
  * plan_webinar `array`: Additional Webinar Plans
    * items [AccountPlan](#accountplan)
  * plan_zoom_rooms [AccountPlan](#accountplan)

### AccountSettings
* Account settings `object`
  * email_notification [AccountSettingsEmailNotification](#accountsettingsemailnotification)
  * feature [AccountSettingsFeature](#accountsettingsfeature)
  * in_meeting [AccountSettingsInMeeting](#accountsettingsinmeeting)
  * integration [AccountSettingsIntegration](#accountsettingsintegration)
  * recording [AccountSettingsRecording](#accountsettingsrecording)
  * schedule_meting [AccountSettingsScheduleMeeting](#accountsettingsschedulemeeting)
  * security [AccountSettingsSecurity](#accountsettingssecurity)
  * telephony [AccountSettingsTelephony](#accountsettingstelephony)
  * zoom_rooms [AccountSettingsZoomRooms](#accountsettingszoomrooms)

### AccountSettingsEmailNotification
* AccountSettingsEmailNotification `object`: Account Settings: Notification
  * alternative_host_reminder `boolean`: Notify when an alternative host is set or removed from a meeting
  * cancel_meeting_reminder `boolean`: Notify host and participants when the meeting is cancelled
  * cloud_recording_avaliable_reminder `boolean`: Notify host when cloud recording is available
  * jbh_reminder `boolean`: Notify host when participants join the meeting before them
  * low_host_count_reminder `boolean`: Notify when host licenses are running low

### AccountSettingsFeature
* AccountSettingsFeature `object`: Account Settings: Feature
  * meeting_capacity `integer`: Set the maximum number of participants this user can have in a single meeting

### AccountSettingsInMeeting
* AccountSettingsInMeeting `object`: Account Settings: In Meeting
  * alert_guest_join `boolean`: Identify guest participants in the meeting/webinar
  * allow_live_streaming `boolean`: Allow live streaming
  * allow_show_zoom_windows `boolean`: Show Zoom Desktop application when sharing screen
  * annotation `boolean`: Allow participants to use annotation tools to add information to shared screens
  * anonymous_question_answer `boolean`: Allow Anonymous Q&A in Webinar
  * attendee_on_hold `boolean`: Allow hosts to temporarily remove an attendee from the meeting
  * attention_tracking `boolean`: Lets the host see an indicator in the participant panel if a meeting/webinar attendee does not have Zoom in focus during screen sharing
  * auto_answer `boolean`: Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered.
  * auto_saving_chat `boolean`: Automatically save all in-meeting chats so that hosts do not need to manually save the text of the chat after the meeting starts
  * breakout_room `boolean`: Allow host to split meeting participants into separate, smaller rooms
  * chat `boolean`: Allow meeting participants to send a message visible to all participants
  * closed_caption `boolean`: Allow host to type closed captions or assign a participant/third party device to add closed captions
  * co_host `boolean`: Allow the host to add co-hosts
  * custom_live_streaming `boolean`: Custom live streaming
  * custom_service_instructions `string`: Custom service instructions
  * dscp_audio `integer`: DSCP Audio
  * dscp_marking `boolean`: DSCP marking
  * dscp_video `integer`: DSCP Video
  * e2e_encryption `boolean`: Require that all meetings are encrypted using AES
  * far_end_camera_control `boolean`: Allow another user to take control of your camera during a meeting
  * feedback `boolean`: Add a Feedback tab to the Windows Settings or Mac Preferences dialog, and also enable users to provide feedback to Zoom at the end of the meeting
  * file_transfer `boolean`: Hosts and participants can send files through the in-meeting chat
  * group_hd `boolean`: Activate higher quality video for host and participants. (This will use more bandwidth.)
  * original_audio `boolean`: Allow users to select original sound in their client settings
  * p2p_connetion `boolean`: Peer to Peer connection while only 2 people are in a meeting
  * p2p_ports `boolean`: P2P listening ports range
  * polling `boolean`: Add 'Polls' to the meeting controls.
  * ports_range `string`: Listening ports range, separated by comma (ex 55,56). The ports range must be between 1 to 65535.
  * post_meeting_feedback `boolean`: Display a thumbs up/down survey at the end of each meeting
  * private_chat `boolean`: Allow meeting participants to send a private 1:1 message to another participants
  * remote_control `boolean`: Allow users to request remote control
  * screen_sharing `boolean`: Allow screen sharing
  * sending_default_email_invites `boolean`: Only show default email when sending email invites
  * show_meeting_control_toolbar `boolean`: Always show meeting control toolbar
  * stereo_audio `boolean`: Allow users to select stereo audio in their client settings
  * use_html_format_email `boolean`: Use HTML format email for Outlook plugin
  * virtual_background `boolean`: Allow users to replace their background with any selected image. Choose or upload an image in the Zoom Desktop application settings.
  * watermark `boolean`: Add watermark when viewing shared screen
  * webinar_question_answer `boolean`: Q&A in webinar
  * whiteboard `boolean`: Allow participants to share a whiteboard that includes annotation tools
  * workplace_by_facebook `boolean`: Workplace by facebook

### AccountSettingsIntegration
* AccountSettingsIntegration `object`: Account Settings: Integration
  * box `boolean`: Enables users who join a meeting from their mobile device to share content from their Box account
  * dropbox `boolean`: Enables users who join a meeting from their mobile device to share content from their Dropbox account
  * google_calendar `boolean`: Enables meetings to be scheduled using Google Calendars
  * google_drive `boolean`: Enables users who join a meeting from their mobile device to share content from their Google Drive
  * kubi `boolean`: Enables users to control a connected Kubi device from within a Zoom meeting
  * microsoft_one_drive `boolean`: Enables users who join a meeting from their mobile device to share content from their Microsoft OneDrive account

### AccountSettingsRecording
* AccountSettingsRecording `object`: Account Settings: Recording
  * account_user_access_recording `boolean`: Cloud recordings are only accessible to account members. People outside of your organization cannot open links that provide access to cloud recordings.
  * auto_delete_cmr `boolean`: Allow Zoom to automatically delete recordings permanently after a specified number of days
  * auto_delete_cmr_days `integer`: When `auto_delete_cmr` is 'true' this value will set the number of days before auto deletion of cloud recordings
  * auto_recording `string` (values: local, cloud, none): Record meetings automatically as they start
  * cloud_recording `boolean`: Allow hosts to record and save the meeting in the cloud
  * cloud_recording_download `boolean`: Cloud Recording Downloads
  * cloud_recording_download_host `boolean`: Only the host can download cloud recordings
  * local_recording `boolean`: Allow hosts and participants to record the meeting to a local file
  * record_audio_file `boolean`: Record an audio only file
  * record_gallery_view `boolean`: Record gallery view with shared screen
  * record_speaker_view `boolean`: Record active speaker with shared screen
  * recording_audio_transcript `boolean`: Automatically transcribe the audio of the meeting or webinar to the cloud
  * save_chat_text `boolean`: Save chat text from the meeting
  * show_timestamp `boolean`: Add a timestamp to the recording

### AccountSettingsScheduleMeeting
* AccountSettingsScheduleMeeting `object`: Account Settings: Schedule Meeting
  * audio_type `string` (values: both, telephony, voip, thirdParty): Determine how participants can join the audio portion of the meeting
  * enforce_login `boolean`: Only signed-in (Zoom users) users can join meetings
  * enforce_login_domains `string`: Only signed-in users with a specified domains
  * enforce_login_with_domains `boolean`: Only signed-in users with a specific domain can join meetings
  * force_pmi_jbh_password `boolean`: Require a password for Personal Meetings if attendees can join before host
  * host_video `boolean`: Start meetings with host video on
  * join_before_host `boolean`: Allow participants to join the meeting before the host arrives
  * not_store_meeting_topic `boolean`: Always display "Zoom Meeting" as the meeting topic
  * participant_video `boolean`: Start meetings with participant video on. Participants can change this during the meeting.

### AccountSettingsSecurity
* AccountSettingsSecurity `object`: Account Settings: Security
  * admin_change_name_pic `boolean`: Only account administrators can change user's username and picture
  * hide_billing_info `boolean`: Hide billing information
  * import_photos_from_devices `boolean`: Allow importing of photos from photo library on the user's device

### AccountSettingsTelephony
* AccountSettingsTelephony `object`: Account Settings: Telephony
  * audio_conference_info `string`: 3rd party audio conference info
  * third_party_audio `boolean`: Users can join the meeting using the existing 3rd party audio configuration

### AccountSettingsZoomRooms
* AccountSettingsZoomRooms `object`: Account Settings: Zoom Rooms
  * auto_start_stop_scheduled_meetings `boolean`: Automatic start/stop for scheduled meetings
  * cmr_for_instant_meeting `boolean`: Cloud recording for instant meetings
  * force_private_meeting `boolean`: Transform all meetings to private
  * hide_host_information `boolean`: Hide host and meeting ID from private meetings
  * list_meetings_with_calendar `boolean`: Display meeting list with calendar integration
  * start_airplay_manually `boolean`: Start AirPlay service manually
  * ultrasonic `boolean`: Automatic direct sharing using ultrasonic proximity signal
  * upcoming_meeting_alert `boolean`: Upcoming meeting alert
  * weekly_system_restart `boolean`: Weekly system restart
  * zr_post_meeting_feedback `boolean`: Zoom Room post meeting feedback

### BillingContact
* BillingContact `object`: Billing Contact object
  * address `string`: Billing Contact's address
  * apt `string`: Billing Contact's apartment/suite
  * city `string`: Billing Contact's city
  * country `string`: Billing Contact's country
  * email `string`: Billing Contact's email address
  * first_name `string`: Billing Contact's first name
  * last_name `string`: Billing Contact's last name
  * phone_number `string`: Billing Contact's phone number
  * state `string`: Billing Contact's state
  * zip `string`: Billing Contact's zip/postal code

### BillingContactRequired
* BillingContactRequired `object`: Billing Contact object
  * address **required** `string`: Billing Contact's address
  * apt `string`: Billing Contact's apartment/suite
  * city **required** `string`: Billing Contact's city
  * country **required** `string`: Billing Contact's country
  * email **required** `string`: Billing Contact's email address
  * first_name **required** `string`: Billing Contact's first name
  * last_name **required** `string`: Billing Contact's last name
  * phone_number **required** `string`: Billing Contact's phone number
  * state **required** `string`: Billing Contact's state
  * zip **required** `string`: Billing Contact's zip/postal code

### CustomQuestion
* CustomQuestion `object`: Custom Question
  * title `string`
  * value `string`

### DateTime
* DateTime `object`: DateTime Object
  * from `string`: Start Date,
  * to `string`: End Date

### Device
* The H.323/SIP device object. `object`: The H.323/SIP device object.
  * encryption **required** `string` (values: auto, yes, no): Device encryption
  * ip **required** `string`: Device Ip
  * name **required** `string`: Device name
  * protocol **required** `string` (values: H.323, SIP): Device protocol

### DeviceList
* H.323/SIP Device List `object`: List of H.323/SIP Devices
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * devices `array`: List of H.323/SIP Device objects
    * items
      * id `string`: Device ID
      * encryption **required** `string` (values: auto, yes, no): Device encryption
      * ip **required** `string`: Device Ip
      * name **required** `string`: Device name
      * protocol **required** `string` (values: H.323, SIP): Device protocol

### DomainsList
* DomainsList `object`: List of Managed Domains
  * domains `array`: List of Managed Domains objects
    * items
      * domain `string`: Domain Name
      * status `string`: Domain Status
  * total_records `integer`: Total records

### Group
* Group `object`: Group object
  * name `string`: Group name
  * total_members `integer`: Total number of members in this group

### GroupList
* GroupList `object`: List of Groups
  * groups `array`: List of Group objects
    * items
      * id `string`: Group ID
      * name `string`: Group name
      * total_members `integer`: Total number of members in this group
  * total_records `integer`: Total records

### GroupMember
* GroupMember `object`: Group member object
  * email `string`: User email
  * first_name `string`: User first name
  * id `string`: User ID
  * last_name `string`: User last name
  * type `integer`: User type

### GroupMemberList
* Group Member List `object`: List of Group Members
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * members `array`: List of Group member objects
    * items [GroupMember](#groupmember)

### IMGroup
* IMGroup `object`: IM Group object
  * name `string`: Group name
  * total_members `integer`: Total number of members in this group
  * search_by_account `boolean`: Members can search others under same account
  * search_by_domain `boolean`: Members can search others in the same email domain
  * search_by_ma_account `boolean`: Members can search others under same master account, including all sub accounts
  * type `string` (values: normal, shared, restricted): IM Group type

### IMGroupList
* IM Group List `object`: List of IM Groups
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * groups `array`: List of Group objects
    * items
      * id `string`: IM Group ID
      * name `string`: Group name
      * total_members `integer`: Total number of members in this group
      * search_by_account `boolean`: Members can search others under same account
      * search_by_domain `boolean`: Members can search others in the same email domain
      * search_by_ma_account `boolean`: Members can search others under same master account, including all sub accounts
      * type `string` (values: normal, shared, restricted): IM Group type

### Meeting
* Meeting `object`: Meeting object
  * agenda `string`: Meeting description
  * duration `integer`: Meeting duration (minutes). Used for scheduled meetings only
  * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings [MeetingSettings](#meetingsettings)
  * start_time `string`: Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and you will need to specify the time zone. Only used for scheduled meetings and recurring meetings with fixed time.
  * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
  * topic `string`: Meeting topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### MeetingInfo
* MeetingInfo `object`: Meeting object
  * agenda `string`: Agenda
  * created_at `string`: Create time
  * duration `integer`: Meeting duration
  * h323_password `string`: H.323/SIP room system password
  * join_url `string`: Join url
  * occurrences [Occurrences](#occurrences)
  * password `string`: Meeting password
  * settings [MeetingSettings](#meetingsettings)
  * start_time `string`: Meeting start time
  * start_url `string`: Start url
  * timezone `string`: Timezone to format start_time
  * topic `string`: Meeting topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### MeetingInstances
* Meeting instances `object`: List of Meetings
  * meetings `array`: List of ended meeting instances.
    * items
      * start_time `string`: Start time
      * uuid `string`: MeetingUUID

### MeetingInvitation
* Meeting Invitation `object`: Meeting invitation details
  * invitation `string`: Meeting invitation

### MeetingList
* Group List `object`: List of Meetings
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * meetings `array`: List of Meeting objects
    * items
      * created_at `string`: Create time
      * duration `integer`: Meeting duration
      * host_id `string`: ID of the user set as host of meeting
      * id `string`: Meeting ID, also know as meeting number
      * join_url `string`: Join url
      * start_time `string`: Meeting start time
      * timezone `string`: Timezone to format start_time
      * topic `string`: Meeting topic
      * type `integer` (values: 1, 2, 3, 8): Meeting Type
      * uuid `string`: Meeting unique ID

### MeetingLiveStream
* MeetingLiveStream `object`: Meeting Live Stream
  * page_url `string`: View URL.
  * stream_key **required** `string`: Stream name/key.
  * stream_url **required** `string`: Server URL.

### MeetingLiveStreamStatus
* MeetingLiveStreamStatus `object`: Meeting Live Stream Status
  * action `string` (values: start, stop): Action
  * settings `object`
    * active_speaker_name `boolean`: Live stream active speaker name.
    * display_name `string`: Live stream display name.

### MeetingMetric
* Meeting Metrics `object`: Meeting metric details
  * duration `string`: Meeting duration
  * email `string`: User email
  * end_time `string`: Meeting end time
  * has_3rd_party_audio `boolean`
  * has_pstn `boolean`
  * has_recording `boolean`
  * has_screen_share `boolean`
  * has_sip `boolean`
  * has_video `boolean`
  * has_voip `boolean`
  * host `string`: User display name
  * id `integer`: Meeting ID
  * participants `integer`: Meeting participant count
  * start_time `string`: Meeting start time
  * topic `string`: Meeting topic
  * user_type `string`: User type
  * uuid `string`: Meeting UUID

### MeetingRecordingRegistrantList
* Registration List `object`: List of meeting recording registrant
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * registrants `array`: List of Registrant objects
    * items
      * id `string`
      * address `string`: Address
      * city `string`: City
      * comments `string`: Questions & Comments
      * country `string`: Country
      * custom_questions `array`: Custom Questions
        * items [CustomQuestion](#customquestion)
      * email **required** `string`: A valid email address
      * first_name **required** `string`: User’s first name
      * industry `string`: Industry
      * job_title `string`: Job Title
      * last_name **required** `string`: User’s last name
      * no_of_employees `string` (values: 1-20, 21-50, 51-100, 101-500, 500-1,000, 1,001-5,000, 5,001-10,000, More than 10,000): Number of Employees
      * org `string`: Organization
      * phone `string`: Phone
      * purchasing_time_frame `string` (values: Within a month, 1-3 months, 4-6 months, More than 6 months, No timeframe): Purchasing Time Frame
      * role_in_purchase_process `string` (values: Decision Maker, Evaluator/Recommender, Influencer, Not involved): Role in Purchase Process
      * state `string`: State/Province
      * zip `string`: Zip/Postal Code

### MeetingRegistrant
* MeetingRegistrant `object`: Meeting registrant
  * address `string`: Address
  * city `string`: City
  * comments `string`: Questions & Comments
  * country `string`: Country
  * custom_questions `array`: Custom Questions
    * items [CustomQuestion](#customquestion)
  * email **required** `string`: A valid email address
  * first_name **required** `string`: User’s first name
  * industry `string`: Industry
  * job_title `string`: Job Title
  * last_name **required** `string`: User’s last name
  * no_of_employees `string` (values: 1-20, 21-50, 51-100, 101-500, 500-1,000, 1,001-5,000, 5,001-10,000, More than 10,000): Number of Employees
  * org `string`: Organization
  * phone `string`: Phone
  * purchasing_time_frame `string` (values: Within a month, 1-3 months, 4-6 months, More than 6 months, No timeframe): Purchasing Time Frame
  * role_in_purchase_process `string` (values: Decision Maker, Evaluator/Recommender, Influencer, Not involved): Role in Purchase Process
  * state `string`: State/Province
  * zip `string`: Zip/Postal Code

### MeetingRegistrantList
* Registration List `object`: List of Users
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * registrants `array`: List of Registrant objects
    * items
      * id `string`
      * address `string`: Address
      * city `string`: City
      * comments `string`: Questions & Comments
      * country `string`: Country
      * custom_questions `array`: Custom Questions
        * items [CustomQuestion](#customquestion)
      * email **required** `string`: A valid email address
      * first_name **required** `string`: User’s first name
      * industry `string`: Industry
      * job_title `string`: Job Title
      * last_name **required** `string`: User’s last name
      * no_of_employees `string` (values: 1-20, 21-50, 51-100, 101-500, 500-1,000, 1,001-5,000, 5,001-10,000, More than 10,000): Number of Employees
      * org `string`: Organization
      * phone `string`: Phone
      * purchasing_time_frame `string` (values: Within a month, 1-3 months, 4-6 months, More than 6 months, No timeframe): Purchasing Time Frame
      * role_in_purchase_process `string` (values: Decision Maker, Evaluator/Recommender, Influencer, Not involved): Role in Purchase Process
      * state `string`: State/Province
      * zip `string`: Zip/Postal Code
      * create_time `string`
      * join_url `string`
      * status `string`

### MeetingSettings
* MeetingSettings `object`: Meeting Settings
  * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
  * approval_type `integer` (values: 0, 1, 2)
  * audio `string` (values: both, telephony, voip): Determine how participants can join the audio portion of the meeting
  * auto_recording `string` (values: local, cloud, none)
  * close_registration `boolean`: Close registration after event date
  * cn_meeting `boolean`: Host meeting in China
  * enforce_login `boolean`: Only signed-in users can join this meeting
  * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
  * host_video `boolean`: Start video when host joins meeting
  * in_meeting `boolean`: Host meeting in India
  * join_before_host `boolean`: Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
  * mute_upon_entry `boolean`: Mute participants upon entry
  * participant_video `boolean`: Start video when participants join meeting
  * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring meeting with fixed time only.
  * use_pmi `boolean`: Use Personal Meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time.
  * waiting_room `boolean`: Enable waiting room
  * watermark `boolean`: Add watermark when viewing shared screen

### MeetingUpdate
* MeetingUpdate `object`: Meeting object
  * agenda `string`: Meeting description
  * duration `integer`: Meeting duration (minutes). Used for scheduled meetings only
  * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings
    * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
    * approval_type `integer` (values: 0, 1, 2)
    * audio `string` (values: both, telephony, voip): Determine how participants can join the audio portion of the meeting
    * auto_recording `string` (values: local, cloud, none)
    * close_registration `boolean`: Close registration after event date
    * cn_meeting `boolean`: Host meeting in China
    * enforce_login `boolean`: Only signed-in users can join this meeting
    * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
    * host_video `boolean`: Start video when host joins meeting
    * in_meeting `boolean`: Host meeting in India
    * join_before_host `boolean`: Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
    * mute_upon_entry `boolean`: Mute participants upon entry
    * participant_video `boolean`: Start video when participants join meeting
    * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring meeting with fixed time only.
    * use_pmi `boolean`: Use Personal Meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time.
    * waiting_room `boolean`: Enable waiting room
    * watermark `boolean`: Add watermark when viewing shared screen
    * registrants_confirmation_email `boolean`: Send confirmation Email to Registrants
  * start_time `string`: Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and you will need to specify the time zone. Only used for scheduled meetings and recurring meetings with fixed time.
  * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
  * topic `string`: Meeting topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### Occurrence
* Occurrence `object`: Occurence object
  * duration `integer`: Duration
  * occurrence_id `integer`: Occurrence Id
  * start_time `string`: Start time
  * status `string`: Occurrence status

### Occurrences
* Occurrences `array`: Array of occurrence objects
  * items [Occurrence](#occurrence)

### PAC
* PAC Accounts List `object`: List of PAC Accounts
  * conference_id `integer`: Conference ID
  * dedicated_dial_in_number `array`: List of Dedicated Dial In Numbers
    * items `object`
      * country `string`: Country Code
      * number `string`: Dial-in number, length is less than 16
  * global_dial_in_numbers `array`: List of Global Dial In Numbers
    * items `object`
      * country `string`: Country Code
      * number `string`: Dial-in number, length is less than 16
  * listen_only_password `string`: Listen-Only Password, numeric value, length is less than 6
  * participant_password `string`: Participant Password, numeric value, length is less than 6

### Pagination
* Pagination `object`: Pagination Object
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages

### PaginationToken
* PaginationToken `object`: Pagination Object
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages

### PaginationToken4IMChat
* PaginationToken4IMChat `object`: Pagination Object
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_size `integer`: The amount of records returns within a single API call. 

### PaginationToken4Qos
* PaginationToken4Qos `object`: Pagination Object
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of items per page
  * total_records `integer`: The number of all records available across pages

### Panelist
* Panelist `object`: Panelist base object
  * email `string`: Panelist's email
  * name `string`: Panelist's full name

### PanelistList
* Panelist List `object`: List of Panelist
  * panelists `array`: List of Panelist objects
    * items
      * id `string`: Panelist's ID
      * email `string`: Panelist's email
      * name `string`: Panelist's full name
      * join_url `string`: Join url
  * total_records `integer`: Total records

### Poll
* Poll `object`: Poll
  * questions `array`: Array of Polls
    * items `object`
      * answers `array`: Question answers
        * items `string`
      * name `string`: Question name
      * type `string` (values: single, multiple): Question type
  * title `string`: Poll Title

### PollList
* Poll List `object`: Poll List
  * polls `array`: Array of Polls
    * items
      * id `string`: ID of Poll
      * status `string` (values: notstart, started, ended, sharing): Status of Poll
      * questions `array`: Array of Polls
        * items `object`
          * answers `array`: Question answers
          * name `string`: Question name
          * type `string` (values: single, multiple): Question type
      * title `string`: Poll Title
  * total_records `integer`: The number of all records available across pages

### QOSAudio
* QOS Object `object`: Quality of Service object
  * avg_loss `string`: Average Loss
  * bitrate `string`: Bitrate
  * jitter `string`: Jitter
  * latency `string`: Latency
  * max_loss `string`: Max Loss

### QOSParticipant
* Participant QOS `object`: Participant QOS
  * device `string`: Participant device
  * domain `string`: Participant domain
  * harddisk_id `string`: Participant hard disk id
  * ip_address `string`: Participant IP Address
  * join_time `string`: Participant join time
  * leave_time `string`: Participant leave time
  * location `string`: Participant location
  * mac_addr `string`: Participant MAC Address
  * pc_name `string`: Participant PC name
  * user_id `string`: Participant ID
  * user_name `string`: Participant display name
  * user_qos `object`: User quality of service
    * as_input [QOSVideo](#qosvideo)
    * as_output [QOSVideo](#qosvideo)
    * audio_input [QOSAudio](#qosaudio)
    * audio_output [QOSAudio](#qosaudio)
    * cpu_usage `object`
      * system_max_cpu_usage `string`: System Maximum CPU Usage
      * zoom_avg_cpu_usage `string`: Zoom Average CPU Usage
      * zoom_max_cpu_usage `string`: Zoom Maximum CPU Usage
      * zoom_min_cpu_usage `string`: Zoom Minimum CPU Usage
    * date_time `string`: Datetime of QOS
    * video_input [QOSVideo](#qosvideo)
    * video_output [QOSVideo](#qosvideo)
  * version `string`: Participant version

### QOSParticipantList
* Participant QOS List `object`: Participant QOS List
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of items per page
  * total_records `integer`: The number of all records available across pages
  * participants `array`: Array of user objects
    * items [QOSParticipant](#qosparticipant)

### QOSVideo
* QOS Object `object`: Quality of Service object
  * avg_loss `string`: Average Loss
  * bitrate `string`: Bitrate
  * jitter `string`: Jitter
  * latency `string`: Latency
  * max_loss `string`: Max Loss
  * frame_rate `string`: Frame Rate
  * resolution `string`: Resolution

### Recording
* Recording `object`: Recording file Object
  * deleted_time `string`: The recording delete time. Response in trash query.
  * download_url `string`: The recording download url. Response in general query.
  * file_size `number`: The recording file size.
  * file_type `string`: The recording file type.
  * id `string`: The recording file ID.Response in general query.
  * meeting_id `string`: The meeting ID. 
  * play_url `string`: The recording file play url. Response in general query.
  * recording_end `string`: The recording end time. Response in general query.
  * recording_start `string`: The recording start time.
  * recording_type `string`: The recording file type.
  * status `string`: The recording status. Response in general query.

### RecordingList
* Recording file List `object`: List of Recording file
  * recording_files `array`: List of Recording file
    * items
      * deleted_time `string`: The recording delete time. Response in trash query.
      * download_url `string`: The recording download url. Response in general query.
      * file_size `number`: The recording file size.
      * file_type `string`: The recording file type.
      * id `string`: The recording file ID.Response in general query.
      * meeting_id `string`: The meeting ID. 
      * play_url `string`: The recording file play url. Response in general query.
      * recording_end `string`: The recording end time. Response in general query.
      * recording_start `string`: The recording start time.
      * recording_type `string`: The recording file type.
      * status `string`: The recording status. Response in general query.

### RecordingMeeting
* RecordingMeeting `object`: The recording meeting object
  * account_id `string`: ID of the user account
  * duration `integer`: Meeting duration
  * host_id `string`: ID of the user set as host of meeting
  * id `string`: Meeting ID, also know as meeting number
  * recording_count `string`: Recording count
  * start_time `string`: Meeting start time
  * topic `string`: Meeting topic
  * total_size `string`: Total size
  * uuid `string`: Meeting unique ID
  * recording_files `array`: List of Recording file
    * items
      * deleted_time `string`: The recording delete time. Response in trash query.
      * download_url `string`: The recording download url. Response in general query.
      * file_size `number`: The recording file size.
      * file_type `string`: The recording file type.
      * id `string`: The recording file ID.Response in general query.
      * meeting_id `string`: The meeting ID. 
      * play_url `string`: The recording file play url. Response in general query.
      * recording_end `string`: The recording end time. Response in general query.
      * recording_start `string`: The recording start time.
      * recording_type `string`: The recording file type.
      * status `string`: The recording status. Response in general query.

### RecordingMeetingList
* Recording List `object`: List of Recording
  * from `string`: Start Date,
  * to `string`: End Date
  * next_page_token `string`: Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
  * page_count `integer`: The number of items returned on this page
  * page_size `integer`: The number of records returned within a single API call.
  * total_records `integer`: The number of all records available across pages
  * meetings `array`: List of Recording
    * items
      * account_id `string`: ID of the user account
      * duration `integer`: Meeting duration
      * host_id `string`: ID of the user set as host of meeting
      * id `string`: Meeting ID, also know as meeting number
      * recording_count `string`: Recording count
      * start_time `string`: Meeting start time
      * topic `string`: Meeting topic
      * total_size `string`: Total size
      * uuid `string`: Meeting unique ID
      * recording_files `array`: List of Recording file
        * items
          * deleted_time `string`: The recording delete time. Response in trash query.
          * download_url `string`: The recording download url. Response in general query.
          * file_size `number`: The recording file size.
          * file_type `string`: The recording file type.
          * id `string`: The recording file ID.Response in general query.
          * meeting_id `string`: The meeting ID. 
          * play_url `string`: The recording file play url. Response in general query.
          * recording_end `string`: The recording end time. Response in general query.
          * recording_start `string`: The recording start time.
          * recording_type `string`: The recording file type.
          * status `string`: The recording status. Response in general query.

### RecordingRegistrantList
* Recording Registration List `object`: List of Recording Registration
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * registrants `array`: List of Registrant objects
    * items
      * id `string`
      * address `string`: Address
      * city `string`: City
      * comments `string`: Questions & Comments
      * country `string`: Country
      * custom_questions `array`: Custom Questions
        * items [CustomQuestion](#customquestion)
      * email **required** `string`: A valid email address
      * first_name **required** `string`: User’s first name
      * industry `string`: Industry
      * job_title `string`: Job Title
      * last_name **required** `string`: User’s last name
      * no_of_employees `string` (values: 1-20, 21-50, 51-100, 101-500, 500-1,000, 1,001-5,000, 5,001-10,000, More than 10,000): Number of Employees
      * org `string`: Organization
      * phone `string`: Phone
      * purchasing_time_frame `string` (values: Within a month, 1-3 months, 4-6 months, More than 6 months, No timeframe): Purchasing Time Frame
      * role_in_purchase_process `string` (values: Decision Maker, Evaluator/Recommender, Influencer, Not involved): Role in Purchase Process
      * state `string`: State/Province
      * zip `string`: Zip/Postal Code

### RecordingRegistrantStatus
* RecordingRegistrantStatus `object`: Registrant Status
  * action **required** `string` (values: approve, deny)
  * registrants `array`: List of registrants
    * items `object`
      * id `string`

### RecordingSettings
* Recording settings `object`
  * approval_type `integer` (values: 0, 1, 2): Approval type
  * on_demand `boolean`: Registration required
  * password `string`: Password protect
  * send_email_to_host `boolean`: Send an email to host when someone registers
  * share_recording `string` (values: publicly, internally, none): Determine if the meeting recording is shared
  * show_social_share_buttons `boolean`: Show social share buttons on registration page
  * viewer_download `boolean`: Host video

### Recurrence
* Recurrence `object`: Recurrence object
  * end_date_time `string`: Select a date the meeting will occur before it is canceled.. Should be UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
  * end_times `integer`: Select how many times the meeting will occur before it is canceled. (Cannot be used with "end_date_time".)
  * monthly_day `integer`: Day of the month for the meeting to be scheduled. The value range is from 1 to 31.
  * monthly_week `integer` (values: -1, 1, 2, 3, 4): Week for which the meeting should recur each month,
  * monthly_week_day `integer` (values: 1, 2, 3, 4, 5, 6, 7): Day for which the meeting should recur each month
  * repeat_interval `integer`: At which interval should the meeting repeat? For a daily meeting, max of 90 days. For a weekly meeting, max of 12 weeks. For a monthly meeting, max of 3 months.
  * type `integer` (values: 1, 2, 3): Recurrence meeting type
  * weekly_days `integer` (values: 1, 2, 3, 4, 5, 6, 7): Days of the week the meeting should repeat, multiple values separated by comma

### Registrant
* Registrant `object`: Registrant base object
  * address `string`: Address
  * city `string`: City
  * comments `string`: Questions & Comments
  * country `string`: Country
  * custom_questions `array`: Custom Questions
    * items [CustomQuestion](#customquestion)
  * email **required** `string`: A valid email address
  * first_name **required** `string`: User’s first name
  * industry `string`: Industry
  * job_title `string`: Job Title
  * last_name **required** `string`: User’s last name
  * no_of_employees `string` (values: 1-20, 21-50, 51-100, 101-500, 500-1,000, 1,001-5,000, 5,001-10,000, More than 10,000): Number of Employees
  * org `string`: Organization
  * phone `string`: Phone
  * purchasing_time_frame `string` (values: Within a month, 1-3 months, 4-6 months, More than 6 months, No timeframe): Purchasing Time Frame
  * role_in_purchase_process `string` (values: Decision Maker, Evaluator/Recommender, Influencer, Not involved): Role in Purchase Process
  * state `string`: State/Province
  * zip `string`: Zip/Postal Code

### RegistrantList
* Registration List `object`: List of Users
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * registrants `array`: List of Registrant objects
    * items
      * id `string`
      * address `string`: Address
      * city `string`: City
      * comments `string`: Questions & Comments
      * country `string`: Country
      * custom_questions `array`: Custom Questions
        * items [CustomQuestion](#customquestion)
      * email **required** `string`: A valid email address
      * first_name **required** `string`: User’s first name
      * industry `string`: Industry
      * job_title `string`: Job Title
      * last_name **required** `string`: User’s last name
      * no_of_employees `string` (values: 1-20, 21-50, 51-100, 101-500, 500-1,000, 1,001-5,000, 5,001-10,000, More than 10,000): Number of Employees
      * org `string`: Organization
      * phone `string`: Phone
      * purchasing_time_frame `string` (values: Within a month, 1-3 months, 4-6 months, More than 6 months, No timeframe): Purchasing Time Frame
      * role_in_purchase_process `string` (values: Decision Maker, Evaluator/Recommender, Influencer, Not involved): Role in Purchase Process
      * state `string`: State/Province
      * zip `string`: Zip/Postal Code
      * create_time `string`
      * join_url `string`
      * status `string`

### RegistrantStatus
* RegistrantStatus `object`: Registrant Status
  * action **required** `string` (values: approve, cancel, deny)
  * registrants `array`: List of registrants
    * items `object`
      * email `string`
      * id `string`

### Session
* Session `object`: Base object for sessions
  * agenda `string`: Meeting description
  * duration `integer`: Meeting duration (minutes). Used for scheduled meetings only
  * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings [MeetingSettings](#meetingsettings)
  * start_time `string`: Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and you will need to specify the time zone. Only used for scheduled meetings and recurring meetings with fixed time.
  * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
  * topic `string`: Meeting topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### SessionUpdate
* SessionUpdate `object`: Base object for sessions
  * agenda `string`: Meeting description
  * duration `integer`: Meeting duration (minutes). Used for scheduled meetings only
  * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings
    * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
    * approval_type `integer` (values: 0, 1, 2)
    * audio `string` (values: both, telephony, voip): Determine how participants can join the audio portion of the meeting
    * auto_recording `string` (values: local, cloud, none)
    * close_registration `boolean`: Close registration after event date
    * cn_meeting `boolean`: Host meeting in China
    * enforce_login `boolean`: Only signed-in users can join this meeting
    * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
    * host_video `boolean`: Start video when host joins meeting
    * in_meeting `boolean`: Host meeting in India
    * join_before_host `boolean`: Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
    * mute_upon_entry `boolean`: Mute participants upon entry
    * participant_video `boolean`: Start video when participants join meeting
    * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring meeting with fixed time only.
    * use_pmi `boolean`: Use Personal Meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time.
    * waiting_room `boolean`: Enable waiting room
    * watermark `boolean`: Add watermark when viewing shared screen
    * registrants_confirmation_email `boolean`: Send confirmation Email to Registrants
  * start_time `string`: Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and you will need to specify the time zone. Only used for scheduled meetings and recurring meetings with fixed time.
  * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
  * topic `string`: Meeting topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### SessionWebinar
* SessionWebinar `object`: Base webinar object for sessions
  * agenda `string`: Webinar description
  * duration `integer`: Webinar duration (minutes). Used for scheduled webinar only
  * password `string`: Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings [WebinarSettings](#webinarsettings)
  * start_time `string`: Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
  * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
  * topic `string`: Webinar topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 5, 6, 9): Webinar Type

### SessionWebinarUpdate
* SessionWebinarUpdate `object`: Base webinar object for sessions
  * agenda `string`: Webinar description
  * duration `integer`: Webinar duration (minutes). Used for scheduled webinar only
  * password `string`: Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings
    * allow_multiple_devices `boolean`: Allow attendees to join from multiple devices
    * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple values separated by comma.
    * approval_type `integer` (values: 0, 1, 2)
    * audio `string` (values: both, telephony, voip): Determine how participants can join the audio portion of the meeting
    * auto_recording `string` (values: local, cloud, none)
    * close_registration `boolean`: Close registration after event date
    * enforce_login `boolean`: Only signed-in users can join this meeting
    * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
    * hd_video `boolean`: Default to HD Video
    * host_video `boolean`: Start video when host joins webinar
    * on_demand `boolean`: Make the webinar on-demand
    * panelists_video `boolean`: Start video when panelists join webinar
    * practice_session `boolean`: Enable Practice Session
    * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring webinar with fixed time only.
    * show_share_button `boolean`: Show social share buttons on registration page
    * registrants_confirmation_email `boolean`: Send confirmation Email to Registrants
  * start_time `string`: Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
  * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
  * topic `string`: Webinar topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 5, 6, 9): Webinar Type

### TSP
* TSP Accounts List `object`: List of TSP Accounts
  * conference_code **required** `string`: Conference code, numeric value, length is less than 16.
  * dial_in_numbers `array`: List of Dial In Numbers
    * items `object`
      * code `string`: Country Code
      * country_label `string`: Country Label, if passed, will display in place of code.
      * number `string`: Dial-in number, length is less than 16.
      * type `string` (values: toll, tollfree, media_link): Dial-in number type.
  * leader_pin **required** `string`: Leader PIN, numeric value, length is less than 16.

### TrackingField
* Tracking Field `object`: Tracking Field
  * field `string`: Tracking Field Name
  * recommended_values `array`: Array of recommended values
    * items `string`
  * required `boolean`: Tracking Field Required
  * visible `boolean`: Tracking Field Visible

### TrackingFieldList
* Tracking Field List `object`: Tracking Field List
  * total_records `integer`: The number of all records available across pages
  * tracking_fields `array`: Array of Tracking Fields
    * items
      * id `string`: ID of Tracking Field
      * field `string`: Tracking Field Name
      * recommended_values `array`: Array of recommended values
        * items `string`
      * required `boolean`: Tracking Field Required
      * visible `boolean`: Tracking Field Visible

### User
* User `object`: The user object represents a User on Zoom
  * created_at `string`: User create time
  * dept `string`: Department
  * email **required** `string`: User's email address
  * first_name `string`: User's first name
  * last_client_version `string`: User last login client version
  * last_login_time `string`: User last login time
  * last_name `string`: User's last name
  * pmi `string`: Personal Meeting ID
  * timezone `string`: Time Zone
  * type **required** `integer` (values: 1, 2, 3): User's type

### UserAssistantsList
* User assistants List `object`: List of User's assistants
  * assistants `array`: List of User's assistants
    * items `object`
      * email `string`: User email address. Must have id or email, if given id, the email is ignored.
      * id `string`: User ID

### UserList
* User List `object`: List of Users
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * users `array`: List of User objects
    * items
      * id `string`: User ID
      * created_at `string`: User create time
      * dept `string`: Department
      * email **required** `string`: User's email address
      * first_name `string`: User's first name
      * last_client_version `string`: User last login client version
      * last_login_time `string`: User last login time
      * last_name `string`: User's last name
      * pmi `string`: Personal Meeting ID
      * timezone `string`: Time Zone
      * type **required** `integer` (values: 1, 2, 3): User's type
      * group_ids `array`
        * items `string`
      * im_group_ids `array`
        * items `string`

### UserPermissions
* UserPermissions `object`
  * permissions `array`: List of user permissions
    * items `string`

### UserSchedulersList
* User schedulers List `object`: List of User's schedulers
  * assistants `array`: List of User's schedulers.
    * items `object`
      * email `string`: User email address.
      * id `string`: User ID

### UserSettings
* User settings `object`
  * email_notification [UserSettingsEmailNotification](#usersettingsemailnotification)
  * feature [UserSettingsFeature](#usersettingsfeature)
  * in_meeting [UserSettingsInMeeting](#usersettingsinmeeting)
  * recording [UserSettingsRecording](#usersettingsrecording)
  * schedule_meeting [UserSettingsScheduleMeeting](#usersettingsschedulemeeting)
  * telephony [UserSettingsTelephony](#usersettingstelephony)

### UserSettingsEmailNotification
* User settings: Notification settings `object`
  * alternative_host_reminder `boolean`: When an alternative host is set or removed from a meeting
  * cancel_meeting_reminder `boolean`: When a meeting is cancelled
  * jbh_reminder `boolean`: When attendees join meeting before host

### UserSettingsFeature
* User settings: Feature settings `object`
  * cn_meeting `boolean`: CN meeting feature
  * in_meeting `boolean`: IN meeting feature
  * large_meeting `boolean`: Large meting feature
  * large_meeting_capacity `integer`: Large meeting capacity, can be 100, 200, 300 or 500, depends on if having related large meeting capacity plan subscription or not
  * meeting_capacity `integer`: User’s meeting capacity
  * webinar `boolean`: Webinar feature
  * webinar_capacity `integer`: Webinar capacity, can be 100, 500, 1000, 3000, 5000 or 10000, depends on if having related webinar capacity plan subscription or not

### UserSettingsFeatureUpdate
* User settings: Feature settings `object`
  * large_meeting `boolean`: Large meting feature
  * large_meeting_capacity `integer`: Large meeting capacity, can be 100, 200, 300 or 500, depends on if having related large meeting capacity plan subscription or not
  * meeting_capacity `integer`: User’s meeting capacity
  * webinar `boolean`: Webinar feature
  * webinar_capacity `integer`: Webinar capacity, can be 100, 500, 1000, 3000, 5000 or 10000, depends on if having related webinar capacity plan subscription or not

### UserSettingsInMeeting
* User settings: Meeting settings `object`
  * allow_live_streaming `boolean`: Allow live streaming
  * annotation `boolean`: Annotation
  * attendee_on_hold `boolean`: Allow host to put attendee on hold
  * attention_tracking `boolean`: Attention tracking
  * auto_saving_chat `boolean`: Auto saving chats
  * breakout_room `boolean`: Breakout room
  * chat `boolean`: Chat
  * closed_caption `boolean`: Closed caption
  * co_host `boolean`: Co-host
  * custom_live_streaming `boolean`: Custom live streaming
  * custom_service_instructions `string`: Custom service instructions
  * e2e_encryption `boolean`: End-to-end encryption
  * entry_exit_chime `string` (values: host, all, none): Play sound on join/leave
  * far_end_camera_control `boolean`: Far end camera control
  * feedback `boolean`: Feedback to Zoom
  * file_transfer `boolean`: File transfer
  * group_hd `boolean`: Group HD video
  * non_verbal_feedback `boolean`: Non-verbal feedback
  * polling `boolean`: Polling
  * private_chat `boolean`: Private chat
  * record_play_voice `boolean`: Record and play their own voice
  * remote_control `boolean`: Remote control
  * remote_support `boolean`: Remote support
  * share_dual_camera `boolean`: Share dual camera (Deprecated)
  * virtual_background `boolean`: Virtual background
  * waiting_room `boolean`: Waiting room
  * workplace_by_facebook `boolean`: Workplace by facebook

### UserSettingsRecording
* User settings: Recording settings `object`
  * auto_delete_cmr `boolean`: Auto delete cloud recordings
  * auto_delete_cmr_days `integer`: A specified number of days of auto delete cloud recordings
  * auto_recording `string` (values: local, cloud, none): Automatic recording
  * cloud_recording `boolean`: Cloud recording
  * local_recording `boolean`: Local recording
  * record_audio_file `boolean`: Record an audio only file
  * record_gallery_view `boolean`: Record the gallery view
  * record_speaker_view `boolean`: Record the active speaker view
  * recording_audio_transcript `boolean`: Audio transcript
  * save_chat_text `boolean`: Save chat text from the meeting
  * show_timestamp `boolean`: Show timestamp on video

### UserSettingsScheduleMeeting
* User settings: Meeting settings `object`
  * audio_type `string` (values: both, telephony, voip, thirdParty): Determine how participants can join the audio portion of the meeting
  * force_pmi_jbh_password `boolean`: Require a password for Personal Meetings if attendees can join before host
  * host_video `boolean`: Host video
  * join_before_host `boolean`: Join before host
  * participants_video `boolean`: Participants video
  * pstn_password_protected `boolean`: Generate and require password for participants joining by phone

### UserSettingsTelephony
* User settings: Meeting settings `object`
  * audio_conference_info `string`: 3rd party audio conference info
  * show_international_numbers_link `boolean`: Show international numbers link on the invitation email
  * third_party_audio `boolean`: 3rd party audio conference

### UserSettingsUpdate
* User settings `object`
  * email_notification [UserSettingsEmailNotification](#usersettingsemailnotification)
  * feature [UserSettingsFeatureUpdate](#usersettingsfeatureupdate)
  * in_meeting [UserSettingsInMeeting](#usersettingsinmeeting)
  * recording [UserSettingsRecording](#usersettingsrecording)
  * schedule_meeting [UserSettingsScheduleMeeting](#usersettingsschedulemeeting)
  * telephony [UserSettingsTelephony](#usersettingstelephony)

### UserUpdate
* UserUpdate `object`: The user update object represents a User on Zoom
  * cms_user_id `string`: Kaltura User Id
  * dept `string`: Department for user profile, use for report
  * first_name `string`: User's first name. Cannot contain more than 5 Chinese words.
  * host_key `string`: Host Key, should be 6-digit number
  * language `string`: language
  * last_name `string`: User's last name. Cannot contain more than 5 Chinese words.
  * pmi `string`: Personal Meeting ID,length must be 10
  * timezone `string`: The time zone id for user profile. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * type `integer` (values: 1, 2, 3): User's type
  * use_pmi `boolean`: Use Personal Meeting ID for instant meetings.
  * vanity_name `string`: Personal meeting room name

### Webhook
* Webhook `object`: Webhook base object, only available for version 2 webhook
  * auth_password **required** `string`: Webhook auth password
  * auth_user **required** `string`: Webhook auth user name
  * events **required** `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left, meeting_registered, recording_transcript_completed): List of events objects.
    * items `string`
  * url **required** `string`: Webhook endpoint

### WebhookList
* Webhook List `object`: List of Webhooks
  * total_records `integer`: The number of all records available across pages
  * webhooks `array`: List of Webhook objects
    * items
      * webhook_id `string`: Webhook Id
      * auth_password **required** `string`: Webhook auth password
      * auth_user **required** `string`: Webhook auth user name
      * events **required** `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left, meeting_registered, recording_transcript_completed): List of events objects.
        * items `string`
      * url **required** `string`: Webhook endpoint
      * created_at `string`: Webhook create time

### WebhookUpdate
* WebhookUpdate `object`: Webhook base object
  * auth_password `string`: Webhook auth password
  * auth_user `string`: Webhook auth user name
  * events `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left, meeting_registered, recording_transcript_completed): List of events objects
    * items `string`
  * url `string`: Webhook endpoint

### Webinar
* Webinar `object`: Webinar object
  * agenda `string`: Webinar description
  * duration `integer`: Webinar duration (minutes). Used for scheduled webinar only
  * password `string`: Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings [WebinarSettings](#webinarsettings)
  * start_time `string`: Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
  * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
  * topic `string`: Webinar topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 5, 6, 9): Webinar Type

### WebinarInfo
* WebinarInfo `object`: Webinar object
  * agenda `string`: Webinar agenda
  * created_at `string`: Create time
  * duration `integer`: Webinar duration
  * join_url `string`: Join url
  * occurrences [Occurrences](#occurrences)
  * settings [WebinarSettings](#webinarsettings)
  * start_time `string`: Webinar start time
  * start_url `string`: Start url
  * timezone `string`: Timezone to format start_time
  * topic `string`: Webinar topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 5, 6, 9): Webinar Type

### WebinarInstances
* Webinar instances `object`: List of Webinars
  * webinars `array`: List of ended webinar instances.
    * items
      * start_time `string`: Start time
      * uuid `string`: WebinarUUID

### WebinarList
* User List `object`: List of Webinars
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * webinars `array`: List of Webinar objects
    * items
      * created_at `string`: Create time
      * duration `integer`: Meeting duration
      * host_id `string`: ID of the user set as host of webinar
      * id `string`: Webinar ID, also know as webinar number
      * join_url `string`: Join url
      * timezone `string`: Timezone to format start_time
      * topic `string`: Meeting topic
      * type `integer` (values: 5, 6, 9): Meeting Type
      * uuid `string`: Webinar unique ID

### WebinarMetric
* Webinar Metrics `object`: Webinar metric details
  * duration `string`: Webinar duration
  * email `string`: User email
  * end_time `string`: Webinar end time
  * has_3rd_party_audio `boolean`
  * has_pstn `boolean`
  * has_recording `boolean`
  * has_screen_share `boolean`
  * has_sip `boolean`
  * has_video `boolean`
  * has_voip `boolean`
  * host `string`: User display name
  * id `integer`: Webinar ID
  * participants `integer`: Webinar participant count
  * start_time `string`: Webinar start time
  * topic `string`: Webinar topic
  * user_type `string`: User type
  * uuid `string`: Webinar UUID

### WebinarPanelist
* WebinarPanelist `object`: Webinar panelist
  * panelists `array`: List of Panelist objects
    * items
      * email `string`: Panelist's email
      * name `string`: Panelist's full name

### WebinarPanelistList
* WebinarPanelistList `object`: Webinar panelist
  * panelists `array`: List of Panelist objects
    * items
      * id `string`: Panelist's ID
      * email `string`: Panelist's email
      * name `string`: Panelist's full name
      * join_url `string`: Join url
  * total_records `integer`: Total records

### WebinarRegistrant
* WebinarRegistrant `object`: Webianr registrant
  * address `string`: Address
  * city `string`: City
  * comments `string`: Questions & Comments
  * country `string`: Country
  * custom_questions `array`: Custom Questions
    * items [CustomQuestion](#customquestion)
  * email **required** `string`: A valid email address
  * first_name **required** `string`: User’s first name
  * industry `string`: Industry
  * job_title `string`: Job Title
  * last_name **required** `string`: User’s last name
  * no_of_employees `string` (values: 1-20, 21-50, 51-100, 101-500, 500-1,000, 1,001-5,000, 5,001-10,000, More than 10,000): Number of Employees
  * org `string`: Organization
  * phone `string`: Phone
  * purchasing_time_frame `string` (values: Within a month, 1-3 months, 4-6 months, More than 6 months, No timeframe): Purchasing Time Frame
  * role_in_purchase_process `string` (values: Decision Maker, Evaluator/Recommender, Influencer, Not involved): Role in Purchase Process
  * state `string`: State/Province
  * zip `string`: Zip/Postal Code

### WebinarRegistrantList
* Registration List `object`: List of Users
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * registrants `array`: List of Registrant objects
    * items
      * id `string`
      * address `string`: Address
      * city `string`: City
      * comments `string`: Questions & Comments
      * country `string`: Country
      * custom_questions `array`: Custom Questions
        * items [CustomQuestion](#customquestion)
      * email **required** `string`: A valid email address
      * first_name **required** `string`: User’s first name
      * industry `string`: Industry
      * job_title `string`: Job Title
      * last_name **required** `string`: User’s last name
      * no_of_employees `string` (values: 1-20, 21-50, 51-100, 101-500, 500-1,000, 1,001-5,000, 5,001-10,000, More than 10,000): Number of Employees
      * org `string`: Organization
      * phone `string`: Phone
      * purchasing_time_frame `string` (values: Within a month, 1-3 months, 4-6 months, More than 6 months, No timeframe): Purchasing Time Frame
      * role_in_purchase_process `string` (values: Decision Maker, Evaluator/Recommender, Influencer, Not involved): Role in Purchase Process
      * state `string`: State/Province
      * zip `string`: Zip/Postal Code
      * create_time `string`
      * join_url `string`
      * status `string`

### WebinarSettings
* WebinarSettings `object`: Webinar Settings
  * allow_multiple_devices `boolean`: Allow attendees to join from multiple devices
  * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple values separated by comma.
  * approval_type `integer` (values: 0, 1, 2)
  * audio `string` (values: both, telephony, voip): Determine how participants can join the audio portion of the meeting
  * auto_recording `string` (values: local, cloud, none)
  * close_registration `boolean`: Close registration after event date
  * enforce_login `boolean`: Only signed-in users can join this meeting
  * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
  * hd_video `boolean`: Default to HD Video
  * host_video `boolean`: Start video when host joins webinar
  * on_demand `boolean`: Make the webinar on-demand
  * panelists_video `boolean`: Start video when panelists join webinar
  * practice_session `boolean`: Enable Practice Session
  * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring webinar with fixed time only.
  * show_share_button `boolean`: Show social share buttons on registration page

### WebinarUpdate
* WebinarUpdate `object`: Webinar object
  * agenda `string`: Webinar description
  * duration `integer`: Webinar duration (minutes). Used for scheduled webinar only
  * password `string`: Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings
    * allow_multiple_devices `boolean`: Allow attendees to join from multiple devices
    * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple values separated by comma.
    * approval_type `integer` (values: 0, 1, 2)
    * audio `string` (values: both, telephony, voip): Determine how participants can join the audio portion of the meeting
    * auto_recording `string` (values: local, cloud, none)
    * close_registration `boolean`: Close registration after event date
    * enforce_login `boolean`: Only signed-in users can join this meeting
    * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
    * hd_video `boolean`: Default to HD Video
    * host_video `boolean`: Start video when host joins webinar
    * on_demand `boolean`: Make the webinar on-demand
    * panelists_video `boolean`: Start video when panelists join webinar
    * practice_session `boolean`: Enable Practice Session
    * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring webinar with fixed time only.
    * show_share_button `boolean`: Show social share buttons on registration page
    * registrants_confirmation_email `boolean`: Send confirmation Email to Registrants
  * start_time `string`: Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
  * timezone `string`: Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats.
  * topic `string`: Webinar topic
  * tracking_fields `array`: Tracking fields
    * items `object`
      * field `string`: Tracking fields type
      * value `string`: Tracking fields value
  * type `integer` (values: 5, 6, 9): Webinar Type

### ZoomRoom
* Zoom Room `object`: Zoom Room
  * account_type `string`: Zoom Room email type
  * calender_name `string`: Zoom Calendar name
  * camera `string`: Zoom Room camera
  * device_ip `string`: Zoom Room device IP
  * email `string`: Zoom Room email
  * id `string`: Zoom Room ID
  * last_start_time `string`: Zoom Room last start time
  * microphone `string`: Zoom Room microphone
  * room_name `string`: Zoom Room name
  * speaker `string`: Zoom Room speaker
  * status `string`: Zoom Room status

### ZoomRoomList
* Zoom Room List `object`: Zoom Room List
  * page_count `integer`: The number of items returned on this page
  * page_number `integer`: The page number of current results
  * page_size `integer`: The number of records returned within a single API call
  * total_records `integer`: The number of all records available across pages
  * zoom_rooms `array`: Array of Zoom Rooms
    * items [ZoomRoom](#zoomroom)


