# @datafire/zoom_us

Client library for Zoom

## Installation and Usage
```bash
npm install --save @datafire/zoom_us
```
```js
let zoom_us = require('@datafire/zoom_us').create({
  global: ""
});

zoom_us.users({}).then(data => {
  console.log(data);
});
```

## Description

API Description

## Actions

### accounts
List all the sub accounts under the master account.


```js
zoom_us.accounts({}, context)
```

#### Input
* input `object`
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

#### Output
* output [AccountList](#accountlist)

### accountCreate
Create a sub account under the master account <aside>Your account must be a master account and have this privilege to create sub account. Zoom only assign this privilege to trusted partner. The created user will not receive the confirmation email.</aside>


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
Disassociate a sub account from the master account


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
Retrieve a sub account under the master account <aside>Your account must be a master account and have this privilege to get sub account. Zoom only assign this privilege to trusted partner</aside>


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
    * plan_audio `object`: Additional Audio Conferencing Plan type
      * callout_countries `string`: Call-out countries, multiple value separated by comma
      * ddi_numbers `integer`: Dedicated Dial-In Numbers
      * premium_countries `string`: Premium countries, multiple value separated by comma
      * tollfree_countries `string`: Toll-free countries, multiple value separated by comma
      * type `string`: Additional Audio Conferencing Plan type
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
    * name `string`: Group name.

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
  * total_members `integer`: Total number of members in this group.

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
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

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
        * id `string`: User ID.

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
  * search_by_account `boolean`: Members can search others under same account.
  * search_by_domain `boolean`: Members can search others in the same email domain.
  * search_by_ma_account `boolean`: Members can search others under same master account, including all sub accounts.
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
  * total_members `integer`: Total number of members in this group.
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
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

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
        * id `string`: User ID.

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
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### meetingUpdate
Update a meeting's details


```js
zoom_us.meetingUpdate({
  "meetingId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID
  * body **required** [MeetingUpdate](#meetingupdate)

#### Output
*Output schema unknown*

### recordingDelete
Delete a meeting's recordings


```js
zoom_us.recordingDelete({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * action `string` (values: trash, delete): The recording delete action

#### Output
*Output schema unknown*

### recordingGet
Retrieve a meeting’s all recordings


```js
zoom_us.recordingGet({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.

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
      * deleted_time `string`: The recording delete time.Response in trash query
      * download_url `string`: The recording download url.Response in general query
      * file_size `number`: The recording file size.
      * file_type `string`: The recording file type.
      * id `string`: The recording file ID.Response in general query
      * meeting_id `string`: The meeting ID. 
      * play_url `string`: The recording file play url.Response in general query
      * recording_end `string`: The recording end time.Response in general query
      * recording_start `string`: The recording start time.
      * status `string`: The recording status.Response in general query

### recordingStatusUpdate
Recover a meeting's recordings


```js
zoom_us.recordingStatusUpdate({
  "meetingId": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * body **required** `object`
    * action `string` (values: recover)

#### Output
*Output schema unknown*

### recordingDeleteOne
Delete one meeting recording file


```js
zoom_us.recordingDeleteOne({
  "meetingId": 0,
  "recordingId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * recordingId **required** `string`: The recording ID
  * action `string` (values: trash, delete): The recording delete action

#### Output
*Output schema unknown*

### recordingStatusUpdateOne
Recover a meeting one recording


```js
zoom_us.recordingStatusUpdateOne({
  "meetingId": 0,
  "recordingId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
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
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

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
  * occurrence_ids `string`: Occurrence IDs, could get this value from Meeting Get API. Multiple value separated by comma.
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
Get CRC Port usage hour by hour for a specified time period <aside class='notice'>We will report a maximum of one month. For example, if "from" is set to "2017-08-05" and "to" is "2017-10-10" we will adjust "from" to "2017-09-10"</aside>


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
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
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
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
  * meetings `array`: Array of meeting objects
    * items [MeetingMetric](#meetingmetric)

### dashboardMeetingDetail
Retrieve live or past meetings detail


```js
zoom_us.dashboardMeetingDetail({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * type `string` (values: past, pastOne, live): The meeting type

#### Output
* output [MeetingMetric](#meetingmetric)

### dashboardMeetingParticipants
Retrieve live or past meetings participants


```js
zoom_us.dashboardMeetingParticipants({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * type `string` (values: past, pastOne, live): The meeting type
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
  * participants `array`: Array of user objects
    * items `object`
      * device `string`: Participant device
      * domain `string`: Participant domain
      * harddisk_id `string`: Participant hard disk id
      * id `string`: Participant UUID
      * ip_address `string`: Participant IP Address
      * join_time `string`: Participant join time
      * leave_time `string`: Participant leave time
      * location `string`: Participant location
      * mac_addr `string`: Participant MAC Address
      * network_type `string`: Participant network type
      * pc_name `string`: Participant PC name
      * recording `boolean`: Participant record
      * share_application `boolean`: Did participant share application
      * share_desktop `boolean`: Did participant share desktop
      * share_whiteboard `boolean`: Did participant share whiteboard
      * user_id `string`: Participant ID
      * user_name `string`: Participant display name
      * version `string`: Participant version

### dashboardMeetingParticipantsQOS
Retrieve list of live or past meetings participants quality of service


```js
zoom_us.dashboardMeetingParticipantsQOS({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * type `string` (values: past, live): The meeting type
  * page_size `integer`: Number of items returned per page
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output [QOSParticipantList](#qosparticipantlist)

### dashboardMeetingParticipantShare
Retrieve sharing/recording details of live or past meetings participant


```js
zoom_us.dashboardMeetingParticipantShare({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * type `string` (values: past, live): The meeting type
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
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
  "meetingId": 0,
  "participantId": ""
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * participantId **required** `string`: The participant ID, such as 16778240
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
  * type `string` (values: past, live): The webinar type
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
  * webinars `array`: Array of webinar objects
    * items [WebinarMetric](#webinarmetric)

### dashboardWebinarDetail
Retrieve live  or past webinars detail


```js
zoom_us.dashboardWebinarDetail({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * type `string` (values: past, live): The webinar type

#### Output
* output [WebinarMetric](#webinarmetric)

### dashboardWebinarParticipants
Retrieve live or past webinar participants


```js
zoom_us.dashboardWebinarParticipants({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * type `string` (values: past, live): The webinar type
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
  * participants `array`: Array of user objects
    * items `object`
      * device `string`: Participant device
      * domain `string`: Participant domain
      * harddisk_id `string`: Participant hard disk id
      * id `string`: Participant UUID
      * ip_address `string`: Participant IP Address
      * join_time `string`: Participant join time
      * leave_time `string`: Participant leave time
      * location `string`: Participant location
      * mac_addr `string`: Participant MAC Address
      * network_type `string`: Participant network type
      * pc_name `string`: Participant PC name
      * recording `boolean`: Participant record
      * share_application `boolean`: Did participant share application
      * share_desktop `boolean`: Did participant share desktop
      * share_whiteboard `boolean`: Did participant share whiteboard
      * user_id `string`: Participant ID
      * user_name `string`: Participant display name
      * version `string`: Participant version

### dashboardWebinarParticipantsQOS
Retrieve list of live or past webinar participants quality of service


```js
zoom_us.dashboardWebinarParticipantsQOS({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * type `string` (values: past, live): The webinar type
  * page_size `integer`: Number of items returned per page
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output [QOSParticipantList](#qosparticipantlist)

### dashboardWebinarParticipantShare
Retrieve sharing/recording details of live or past webinar participant


```js
zoom_us.dashboardWebinarParticipantShare({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * type `string` (values: past, live): The webinar type
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
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
  "webinarId": 0,
  "participantId": ""
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * participantId **required** `string`: The participant ID, such as 16778240
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
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

#### Output
* output [ZoomRoomList](#zoomroomlist)

### dashboardZoomRoom
Retrieve zoom room on account


```js
zoom_us.dashboardZoomRoom({
  "zoomroomId": 0,
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * zoomroomId **required** `integer`: The Zoom Room ID
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

#### Output
* output
  * account_type `string`: Zoom Room email type
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
    * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
    * page_count `integer`: The number of items returned on this page.
    * page_size `integer`: The amount of records returns within a single API call. 
    * total_records `integer`: The number of all records available across pages.
    * meetings `array`: Array of meeting objects
      * items [MeetingMetric](#meetingmetric)

### reportDaily
Retrieve daily report for one month, can only get daily report for recent 6 months.


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
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.

#### Output
* output `object`
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

### reportMeetingParticipants
Retrieve ended meeting participants report


```js
zoom_us.reportMeetingParticipants({
  "meetingId": 0
}, context)
```

#### Input
* input `object`
  * meetingId **required** `integer`: The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance.
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
  * participants `array`: Array of meeting participant objects
    * items `object`
      * attentiveness_score `integer`: Participant attentiveness score
      * duration `integer`: Participant duration
      * join_time `string`: Participant join time
      * leave_time `string`: Participant leave time
      * name `string`: Participant display name
      * user_email `string`: Participant email

### reportTelephone
Retrieve telephone report for a specified period <aside>Toll Report API is provided for enabled 'Toll Report' option.</aside>


```js
zoom_us.reportTelephone({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: 1, 2): Audio type
  * from **required** `string`: Start Date
  * to **required** `string`: End Date
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.
  * telephony_usage `array`: Array of telephony objects
    * items `object`
      * dept `string`: User department
      * duration `integer`: Meeting duration
      * end_time `string`: Meeting end time
      * host_email `string`: User email
      * host_name `string`: User display name
      * meeting_id `integer`: Meeting ID
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
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.
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
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * from `string`: Start date for this report
  * to `string`: End date for this report
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
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
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.

#### Output
* output `object`
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

### reportWebinarParticipants
Retrieve ended webinar participants report


```js
zoom_us.reportWebinarParticipants({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.

#### Output
* output
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
  * participants `array`: Array of webinar participant objects
    * items `object`
      * attentiveness_score `string`: Participant attentiveness score
      * duration `integer`: Participant duration
      * join_time `string`: Participant join time
      * leave_time `string`: Participant leave time
      * name `string`: Participant display name
      * user_email `string`: Participant email

### reportWebinarPolls
Retrieve ended webinar polls report


```js
zoom_us.reportWebinarPolls({
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.

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
  "webinarId": 0
}, context)
```

#### Input
* input `object`
  * webinarId **required** `integer`: The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance.

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
List TSP dial-in numbers under account


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
      * number `string`: Dial-in number, length is less than 16.
      * type `string`
  * tsp_provider `string`

### users
List users on your account


```js
zoom_us.users({}, context)
```

#### Input
* input `object`
  * status `string` (values: active, inactive, pending): User status
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

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
    * action **required** `string` (values: create, autoCreate, custCreate, ssoCreate): Action to take for user creation
    * user_info `object`
      * email **required** `string`: User's email address.
      * first_name `string`: User's first name. Cannot contain more than 5 Chinese words.
      * last_name `string`: User's last name. Cannot contain more than 5 Chinese words.
      * password `string`: User’s password. Only for "autoCreate" action.
      * type **required** `integer` (values: 1, 2, 3): User's type

#### Output
* output `object`
  * email `string`: User's email address.
  * first_name `string`: User's first name.
  * id `string`: User ID
  * last_name `string`: User's last name.
  * type `integer` (values: 1, 2, 3): User's type

### userEmail
Check if the user email exists.


```js
zoom_us.userEmail({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: User email

#### Output
* output `object`
  * existed_email `boolean`

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
  * email **required** `string`: User's email address.
  * first_name `string`: User's first name.
  * last_client_version `string`: User last login client version
  * last_login_time `string`: User last login time
  * last_name `string`: User's last name.
  * pmi `string`: Personal Meeting ID
  * timezone `string`: Time Zone
  * type **required** `integer` (values: 1, 2, 3): User's type
  * pic_url `string`
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
  * type `string` (values: scheduled, live): The meeting type
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

#### Output
* output [MeetingList](#meetinglist)

### meetingCreate
Create a meeting for a user


```js
zoom_us.meetingCreate({
  "userId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The user ID or email address
  * body **required** [Meeting](#meeting)

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
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

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
    * password **required** `string`: User’s password. Character length is less than 32.

#### Output
*Output schema unknown*

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
  * pic_file **required** `string`: User picture file, must be a jpg/jpeg file

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
  * page_size `integer`: The amount of records returns within a single API call. 
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * mc `string`: Query mc 
  * trash `boolean`: Query trash 

#### Output
* output [RecordingList](#recordinglist)

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
  * body **required** [UserSettings](#usersettings)

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
  * type `string` (values: token, zpk): User token type

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
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

#### Output
* output [WebinarList](#webinarlist)

### webinarCreate
Create a webinar for a user


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
  * type `integer` (values: 5, 6, 9): Webinar Type

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
  * webhook_id `string`: Webhook Id.
  * auth_password **required** `string`: Webhook auth password.
  * auth_user **required** `string`: Webhook auth user name.
  * events **required** `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left): List of events objects.
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
  * webhook_id `string`: Webhook Id.
  * auth_password **required** `string`: Webhook auth password.
  * auth_user **required** `string`: Webhook auth user name.
  * events **required** `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left): List of events objects.
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
  * page_size `integer`: The amount of records returns within a single API call. 
  * page_number `integer`: Current page number of returned records.

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
    * status `string` (values: end)

#### Output
*Output schema unknown*



## Definitions

### Account
* Account `object`: The account object represents an account on zoom. The person who created the account, or who the account was created for, is referred to as the Account owner. You can read more about the Zoom account structure <a href='https://developer.zoom.us/blog/a-brief-look-at-zoom-account-structures/' target='_blank'>here</a>.
  * email **required** `string`: User's email address.
  * first_name **required** `string`: User's first name.
  * last_name **required** `string`: User's last name.
  * options [AccountOptions](#accountoptions)
  * password **required** `string`: User's password.

### AccountList
* Account List `object`: List of Accounts
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.
  * accounts `array`: List of Account objects.
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
  * accounts `array`: List of Account objects.
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
  * meeting_connectors `string`: Meeting Connector, multiple value separated by comma.
  * pay_mode `string` (values: master, sub): Payee
  * room_connectors `string`: Virtual Room Connector, multiple value separated by comma.
  * share_mc `boolean`: Enable Share Meeting Connector.
  * share_rc `boolean`: Enable Share Virtual Room Connector.

### AccountPlan
* AccountPlan `object`: Account plan object
  * hosts `integer`: Account plan number of hosts
  * type `string`: Account plan type

### AccountPlanBaseRequired
* AccountPlanBaseRequired `object`: Account base plan object
  * hosts **required** `integer`: Account base plan number of hosts. For a Pro Plan, please select a value between 1 and 9. For a Business Plan, please select a value between 10 and 49. For a Education Plan, please select a value between 20 and 149. For a Free Trial Plan, please select a value between 1 and 9999.
  * type **required** `string`: Account base plan type

### AccountPlanRequired
* AccountPlanRequired `object`: Account plan object
  * hosts **required** `integer`: Account plan number of hosts.
  * type **required** `string`: Account <a href="#plans">plan type</a>

### AccountPlans
* AccountPlans `object`: Account Plans object
  * plan_audio `object`: Additional Audio Conferencing Plan type
    * callout_countries `string`: Call-out countries, multiple value separated by comma
    * ddi_numbers `integer`: Dedicated Dial-In Numbers
    * premium_countries `string`: Premium countries, multiple value separated by comma
    * tollfree_countries `string`: Toll-free countries, multiple value separated by comma
    * type `string`: Additional Audio Conferencing Plan type
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
  * alternative_host_reminder `boolean`: When an alternative host is set or removed from a meeting
  * cancel_meeting_reminder `boolean`: When a meeting is cancelled
  * cloud_recording_avaliable_reminder `boolean`: Allow keep recording from being automatically deleted
  * jbh_reminder `boolean`: When attendees join meeting before host
  * low_host_count_reminder `boolean`: When host licenses are running low

### AccountSettingsFeature
* AccountSettingsFeature `object`: Account Settings: Feature
  * meeting_capacity `integer`: Meeting capacity

### AccountSettingsInMeeting
* AccountSettingsInMeeting `object`: Account Settings: In Meeting
  * alert_guest_join `boolean`: Identify guest participants in the meeting/webinar
  * allow_show_zoom_windows `boolean`: Allow to share Zoom windows in desktop sharing
  * annotation `boolean`: Annotation
  * anonymous_question_answer `boolean`: Allow Anonymous Q&A in Webinar
  * attendee_on_hold `boolean`: Allow host to put attendee on hold
  * attention_tracking `boolean`: Attention tracking
  * auto_answer `boolean`: Enable Auto Answer Group
  * auto_saving_chat `boolean`: Auto Saving Chats
  * breakout_room `boolean`: Breakout room
  * chat `boolean`: Chat
  * closed_caption `boolean`: Closed caption
  * co_host `boolean`: Co-Host
  * dscp_audio `integer`: DSCP Audio
  * dscp_marking `boolean`: DSCP marking
  * dscp_video `integer`: DSCP Video
  * e2e_encryption `boolean`: End-to-End Encryption
  * far_end_camera_control `boolean`: Far end camera control
  * feedback `boolean`: Feedback to Zoom
  * file_transfer `boolean`: File transfer
  * group_hd `boolean`: Group HD video
  * original_audio `boolean`: Allow users to select original sound in their client settings
  * p2p_connetion `boolean`: Peer to Peer connection while only 2 people in a meeting
  * p2p_ports `boolean`: Listening ports range
  * polling `boolean`: Polling
  * ports_range `string`: Listening ports range, separated by comma (ex 55,56). The ports range is between 1 to 65535
  * post_meeting_feedback `boolean`: Display end-of-meeting experience feedback survey
  * private_chat `boolean`: Private Chat
  * remote_control `boolean`: Remote control
  * screen_sharing `boolean`: Screen sharing
  * sending_default_email_invites `boolean`: Only show default email when sending email invites
  * show_meeting_control_toolbar `boolean`: Always show meeting control toolbar
  * stereo_audio `boolean`: Allow users to select stereo audio in their client settings
  * use_html_format_email `boolean`: Use HTML format email for Outlook plugin
  * virtual_background `boolean`: Virtual background
  * watermark `boolean`: Add watermark when viewing shared screen
  * webinar_question_answer `boolean`: Q&A in webinar
  * whiteboard `boolean`: Whiteboard

### AccountSettingsIntegration
* AccountSettingsIntegration `object`: Account Settings: Integration
  * box `boolean`: Box
  * dropbox `boolean`: Dropbox
  * google_calendar `boolean`: Google Calendar
  * google_drive `boolean`: Google Drive
  * kubi `boolean`: Kubi
  * microsoft_one_drive `boolean`: Microsoft OneDrive

### AccountSettingsRecording
* AccountSettingsRecording `object`: Account Settings: Recording
  * account_user_access_recording `boolean`: Only users on my account can access cloud recordings
  * auto_delete_cmr `boolean`: Auto delete cloud recordings after days
  * auto_delete_cmr_days `integer`: A specified number of days of auto delete cloud recordings
  * auto_recording `string` (values: local, cloud, none): Automatic recording
  * cloud_recording `boolean`: Cloud recording
  * cloud_recording_download `boolean`: Cloud Recording Downloads
  * cloud_recording_download_host `boolean`: Only the host can download cloud recordings
  * local_recording `boolean`: Local recording
  * record_audio_file `boolean`: Record an audio only file
  * record_gallery_view `boolean`: Record the gallery view
  * record_speaker_view `boolean`: Record the active speaker view
  * recording_audio_transcript `boolean`: Audio transcript
  * save_chat_text `boolean`: Save chat text from the meeting
  * show_timestamp `boolean`: Show timestamp on video

### AccountSettingsScheduleMeeting
* AccountSettingsScheduleMeeting `object`: Account Settings: Schedule Meeting
  * audio_type `string` (values: both, telephony, voip, thirdParty): Audio Type
  * enforce_login `boolean`: Only signed-in users can join meetings
  * enforce_login_domains `string`: Only signed-in users with a specified domains
  * enforce_login_with_domains `boolean`: Only signed-in users with a specified domains can join meetings
  * force_pmi_jbh_password `boolean`: Require a password for Personal Meetings if attendees can join before host
  * host_video `boolean`: Host Video
  * join_before_host `boolean`: Join Before Host
  * not_store_meeting_topic `boolean`: Always display "Zoom Meeting" as the meeting topic
  * participant_video `boolean`: Participants Video

### AccountSettingsSecurity
* AccountSettingsSecurity `object`: Account Settings: Security
  * admin_change_name_pic `boolean`: Only account administrators can change user's username and picture
  * hide_billing_info `boolean`: Hide billing information
  * import_photos_from_devices `boolean`: Allow importing of photos from photo library on the user's device

### AccountSettingsTelephony
* AccountSettingsTelephony `object`: Account Settings: Telephony
  * audio_conference_info `string`: 3rd party audio conference info
  * third_party_audio `boolean`: 3rd party audio conference

### AccountSettingsZoomRooms
* AccountSettingsZoomRooms `object`: Account Settings: Zoom Rooms
  * auto_start_stop_scheduled_meetings `boolean`: Automatic start/stop scheduled meetings
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
  * address `string`: Billing Contact's address.
  * apt `string`: Billing Contact's apartment/suite.
  * city `string`: Billing Contact's city.
  * country `string`: Billing Contact's country.
  * email `string`: Billing Contact's email address.
  * first_name `string`: Billing Contact's first name.
  * last_name `string`: Billing Contact's last name.
  * phone_number `string`: Billing Contact's phone number.
  * state `string`: Billing Contact's state.
  * zip `string`: Billing Contact's zip/postal code.

### BillingContactRequired
* BillingContactRequired `object`: Billing Contact object
  * address **required** `string`: Billing Contact's address.
  * apt `string`: Billing Contact's apartment/suite.
  * city **required** `string`: Billing Contact's city.
  * country **required** `string`: Billing Contact's country.
  * email **required** `string`: Billing Contact's email address.
  * first_name **required** `string`: Billing Contact's first name.
  * last_name **required** `string`: Billing Contact's last name.
  * phone_number **required** `string`: Billing Contact's phone number.
  * state **required** `string`: Billing Contact's state.
  * zip **required** `string`: Billing Contact's zip/postal code.

### CustomQuestion
* CustomQuestion `object`: Custom Question
  * title `string`
  * value `string`

### DateTime
* DateTime `object`: DateTime Object
  * from `string`: Start Date,
  * to `string`: End Date

### Group
* Group `object`: Group object
  * name `string`: Group name
  * total_members `integer`: Total number of members in this group.

### GroupList
* GroupList `object`: List of Groups
  * groups `array`: List of Group objects.
    * items
      * id `string`: Group ID
      * name `string`: Group name
      * total_members `integer`: Total number of members in this group.
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
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.
  * members `array`: List of Group member objects.
    * items [GroupMember](#groupmember)

### IMGroup
* IMGroup `object`: IM Group object
  * name `string`: Group name
  * total_members `integer`: Total number of members in this group.
  * search_by_account `boolean`: Members can search others under same account
  * search_by_domain `boolean`: Members can search others in the same email domain
  * search_by_ma_account `boolean`: Members can search others under same master account, including all sub accounts
  * type `string` (values: normal, shared, restricted): IM Group type

### IMGroupList
* IM Group List `object`: List of IM Groups
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.
  * groups `array`: List of Group objects.
    * items
      * id `string`: IM Group ID
      * name `string`: Group name
      * total_members `integer`: Total number of members in this group.
      * search_by_account `boolean`: Members can search others under same account
      * search_by_domain `boolean`: Members can search others in the same email domain
      * search_by_ma_account `boolean`: Members can search others under same master account, including all sub accounts
      * type `string` (values: normal, shared, restricted): IM Group type

### Meeting
* Meeting `object`: Meeting object
  * agenda `string`: Meeting description
  * duration `integer`: Meeting duration (minutes). Used for scheduled meeting only.
  * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings [MeetingSettings](#meetingsettings)
  * start_time `string`: Meeting start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled meeting and recurring meeting with fixed time.
  * timezone `string`: Timezone to format start_time, like "America/Los_Angeles". For scheduled meeting only. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * topic `string`: Meeting topic
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
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### MeetingList
* Group List `object`: List of Meetings
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.
  * meetings `array`: List of Meeting objects.
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
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
  * registrants `array`: List of Registrant objects.
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
      * status `string`

### MeetingSettings
* MeetingSettings `object`: Meeting Settings
  * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
  * approval_type `integer` (values: 0, 1, 2)
  * audio `string` (values: both, telephony, voip): Meeting audio options
  * auto_recording `string` (values: local, cloud, none)
  * cn_meeting `boolean`: Host meeting in China
  * enforce_login `boolean`: Only signed-in users can join this meeting
  * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
  * host_video `boolean`: Start video when host join meeting
  * in_meeting `boolean`: Host meeting in India
  * join_before_host `boolean`: Join meeting before host start the meeting. Only used for scheduled or recurring meetings
  * mute_upon_entry `boolean`: Mute participants upon entry
  * participant_video `boolean`: Start video when participants join meeting
  * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring meeting with fixed time only.
  * use_pmi `boolean`: Use Personal Meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time
  * watermark `boolean`: Enable watermark when viewing the shared screen

### MeetingUpdate
* MeetingUpdate `object`: Meeting object
  * agenda `string`: Meeting description
  * duration `integer`: Meeting duration (minutes). Used for scheduled meeting only.
  * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings
    * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
    * approval_type `integer` (values: 0, 1, 2)
    * audio `string` (values: both, telephony, voip): Meeting audio options
    * auto_recording `string` (values: local, cloud, none)
    * cn_meeting `boolean`: Host meeting in China
    * enforce_login `boolean`: Only signed-in users can join this meeting
    * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
    * host_video `boolean`: Start video when host join meeting
    * in_meeting `boolean`: Host meeting in India
    * join_before_host `boolean`: Join meeting before host start the meeting. Only used for scheduled or recurring meetings
    * mute_upon_entry `boolean`: Mute participants upon entry
    * participant_video `boolean`: Start video when participants join meeting
    * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring meeting with fixed time only.
    * use_pmi `boolean`: Use Personal Meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time
    * watermark `boolean`: Enable watermark when viewing the shared screen
    * registrants_confirmation_email `boolean`: Send confirmation Email to Registrants
  * start_time `string`: Meeting start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled meeting and recurring meeting with fixed time.
  * timezone `string`: Timezone to format start_time, like "America/Los_Angeles". For scheduled meeting only. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * topic `string`: Meeting topic
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

### Pagination
* Pagination `object`: Pagination Object
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.

### PaginationToken
* PaginationToken `object`: Pagination Object
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.

### PaginationToken4Qos
* PaginationToken4Qos `object`: Pagination Object
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The number of items per page.
  * total_records `integer`: The number of all records available across pages.

### Panelist
* Panelist `object`: Panelist base object
  * email `string`: Panelist's email
  * name `string`: Panelist's full name

### PanelistList
* Panelist List `object`: List of Panelist
  * panelists `array`: List of Panelist objects.
    * items
      * id `string`: Panelist's ID
      * email `string`: Panelist's email
      * name `string`: Panelist's full name
      * join_url `string`: Join url
  * total_records `integer`: Total records.

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
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The number of items per page.
  * total_records `integer`: The number of all records available across pages.
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
* Recording `object`: The recording meeting object
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
      * deleted_time `string`: The recording delete time.Response in trash query
      * download_url `string`: The recording download url.Response in general query
      * file_size `number`: The recording file size.
      * file_type `string`: The recording file type.
      * id `string`: The recording file ID.Response in general query
      * meeting_id `string`: The meeting ID. 
      * play_url `string`: The recording file play url.Response in general query
      * recording_end `string`: The recording end time.Response in general query
      * recording_start `string`: The recording start time.
      * status `string`: The recording status.Response in general query

### RecordingFile
* RecordingFile `object`: RecordingFile Object
  * deleted_time `string`: The recording delete time.Response in trash query
  * download_url `string`: The recording download url.Response in general query
  * file_size `number`: The recording file size.
  * file_type `string`: The recording file type.
  * id `string`: The recording file ID.Response in general query
  * meeting_id `string`: The meeting ID. 
  * play_url `string`: The recording file play url.Response in general query
  * recording_end `string`: The recording end time.Response in general query
  * recording_start `string`: The recording start time.
  * status `string`: The recording status.Response in general query

### RecordingFileList
* Recording file List `object`: List of Recording file
  * recording_files `array`: List of Recording file
    * items
      * deleted_time `string`: The recording delete time.Response in trash query
      * download_url `string`: The recording download url.Response in general query
      * file_size `number`: The recording file size.
      * file_type `string`: The recording file type.
      * id `string`: The recording file ID.Response in general query
      * meeting_id `string`: The meeting ID. 
      * play_url `string`: The recording file play url.Response in general query
      * recording_end `string`: The recording end time.Response in general query
      * recording_start `string`: The recording start time.
      * status `string`: The recording status.Response in general query

### RecordingList
* Recording List `object`: List of Recording
  * from `string`: Start Date,
  * to `string`: End Date
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
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
          * deleted_time `string`: The recording delete time.Response in trash query
          * download_url `string`: The recording download url.Response in general query
          * file_size `number`: The recording file size.
          * file_type `string`: The recording file type.
          * id `string`: The recording file ID.Response in general query
          * meeting_id `string`: The meeting ID. 
          * play_url `string`: The recording file play url.Response in general query
          * recording_end `string`: The recording end time.Response in general query
          * recording_start `string`: The recording start time.
          * status `string`: The recording status.Response in general query

### Recurrence
* Recurrence `object`: Recurrence object
  * end_date_time `string`: Recurrence Meeting End Date. Should be UTC time, such as 2017-11-25T12:00:00Z.
  * end_times `integer`: Recurrence Meeting End occurrences times
  * monthly_day `integer`: Recurrence Meeting Occurs on a month day. The value range is from 1 to 31
  * monthly_week `integer` (values: -1, 1, 2, 3, 4): Recurrence Meeting Occurs on the week of a month.
  * monthly_week_day `integer` (values: 1, 2, 3, 4, 5, 6, 7): Recurrence Meeting Occurs on the week day of a month
  * repeat_interval `integer`: Recurrence meeting repeat interval. For a Daily Meeting, max of 90. For a Weekly Meeting, max of 12. For a Monthly Meeting, max of 3.
  * type `integer` (values: 1, 2, 3): Recurrence meeting type
  * weekly_days `integer` (values: 1, 2, 3, 4, 5, 6, 7): Recurrence Meeting Occurs on week days, multiple value separated by comma

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
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
  * registrants `array`: List of Registrant objects.
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
  * duration `integer`: Meeting duration (minutes). Used for scheduled meeting only.
  * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings [MeetingSettings](#meetingsettings)
  * start_time `string`: Meeting start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled meeting and recurring meeting with fixed time.
  * timezone `string`: Timezone to format start_time, like "America/Los_Angeles". For scheduled meeting only. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * topic `string`: Meeting topic
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### SessionUpdate
* SessionUpdate `object`: Base object for sessions
  * agenda `string`: Meeting description
  * duration `integer`: Meeting duration (minutes). Used for scheduled meeting only.
  * password `string`: Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings
    * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
    * approval_type `integer` (values: 0, 1, 2)
    * audio `string` (values: both, telephony, voip): Meeting audio options
    * auto_recording `string` (values: local, cloud, none)
    * cn_meeting `boolean`: Host meeting in China
    * enforce_login `boolean`: Only signed-in users can join this meeting
    * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
    * host_video `boolean`: Start video when host join meeting
    * in_meeting `boolean`: Host meeting in India
    * join_before_host `boolean`: Join meeting before host start the meeting. Only used for scheduled or recurring meetings
    * mute_upon_entry `boolean`: Mute participants upon entry
    * participant_video `boolean`: Start video when participants join meeting
    * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring meeting with fixed time only.
    * use_pmi `boolean`: Use Personal Meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time
    * watermark `boolean`: Enable watermark when viewing the shared screen
    * registrants_confirmation_email `boolean`: Send confirmation Email to Registrants
  * start_time `string`: Meeting start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled meeting and recurring meeting with fixed time.
  * timezone `string`: Timezone to format start_time, like "America/Los_Angeles". For scheduled meeting only. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * topic `string`: Meeting topic
  * type `integer` (values: 1, 2, 3, 8): Meeting Type

### SessionWebinar
* SessionWebinar `object`: Base webinar object for sessions
  * agenda `string`: Webinar description
  * duration `integer`: Webinar duration (minutes). Used for scheduled webinar only.
  * password `string`: Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings [WebinarSettings](#webinarsettings)
  * start_time `string`: Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
  * timezone `string`: Timezone to format start_time, like "America/Los_Angeles". For scheduled webinar only. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * topic `string`: Webinar topic
  * type `integer` (values: 5, 6, 9): Webinar Type

### SessionWebinarUpdate
* SessionWebinarUpdate `object`: Base webinar object for sessions
  * agenda `string`: Webinar description
  * duration `integer`: Webinar duration (minutes). Used for scheduled webinar only.
  * password `string`: Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings
    * allow_multiple_devices `boolean`: Allow attendees to join from multiple devices.
    * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
    * approval_type `integer` (values: 0, 1, 2)
    * audio `string` (values: both, telephony, voip): Meeting audio options
    * auto_recording `string` (values: local, cloud, none)
    * close_registration `boolean`: Close registration after event date.
    * enforce_login `boolean`: Only signed-in users can join this meeting
    * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
    * hd_video `boolean`: Default to HD Video
    * host_video `boolean`: Start video when host join webinar
    * panelists_video `boolean`: Start video when panelists join webinar
    * practice_session `boolean`: Enable Practice Session
    * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring webinar with fixed time only.
    * show_share_button `boolean`: Show social share buttons on registration page.
    * registrants_confirmation_email `boolean`: Send confirmation Email to Registrants
  * start_time `string`: Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
  * timezone `string`: Timezone to format start_time, like "America/Los_Angeles". For scheduled webinar only. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * topic `string`: Webinar topic
  * type `integer` (values: 5, 6, 9): Webinar Type

### TSP
* TSP `object`: TSP Account object
  * conference_code **required** `string`: Conference code, numeric value, length is less than 16.
  * dial_in_numbers `object`: Dial In Numbers object
    * code **required** `string`: Country Code
    * number **required** `string`: Dial-in number, length is less than 16.
  * leader_pin **required** `string`: Leader PIN, numeric value, length is less than 16.

### User
* User `object`: The user object represents a User on Zoom.
  * created_at `string`: User create time
  * dept `string`: Department
  * email **required** `string`: User's email address.
  * first_name `string`: User's first name.
  * last_client_version `string`: User last login client version
  * last_login_time `string`: User last login time
  * last_name `string`: User's last name.
  * pmi `string`: Personal Meeting ID
  * timezone `string`: Time Zone
  * type **required** `integer` (values: 1, 2, 3): User's type

### UserAssistantsList
* User assistants List `object`: List of User's assistants
  * assistants `array`: List of User's assistants.
    * items `object`
      * email `string`: User email address. Must have id or email, if given id, the email is ignored.
      * id `string`: User ID

### UserList
* User List `object`: List of Users
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.
  * users `array`: List of User objects.
    * items
      * id `string`: User ID
      * created_at `string`: User create time
      * dept `string`: Department
      * email **required** `string`: User's email address.
      * first_name `string`: User's first name.
      * last_client_version `string`: User last login client version
      * last_login_time `string`: User last login time
      * last_name `string`: User's last name.
      * pmi `string`: Personal Meeting ID
      * timezone `string`: Time Zone
      * type **required** `integer` (values: 1, 2, 3): User's type

### UserSettings
* User settings `object`
  * email_notification [UserSettingsEmailNotification](#usersettingsemailnotification)
  * feature [UserSettingsFeature](#usersettingsfeature)
  * in_meeting [UserSettingsInMeeting](#usersettingsinmeeting)
  * recording [UserSettingsRecording](#usersettingsrecording)
  * scheduled_meeting [UserSettingsScheduledMeeting](#usersettingsscheduledmeeting)
  * telephony [UserSettingsTelephony](#usersettingstelephony)

### UserSettingsEmailNotification
* User settings: Notification settings `object`
  * alternative_host_reminder `boolean`: When an alternative host is set or removed from a meeting
  * cancel_meeting_reminder `boolean`: When a meeting is cancelled
  * jbh_reminder `boolean`: When attendees join meeting before host

### UserSettingsFeature
* User settings: Feature settings `object`
  * large_meeting `boolean`: Large meting feature
  * large_meeting_capacity `integer`: Large meeting capacity, can be 100, 200, 300 or 500, depends on if having related large meeting capacity plan subscription or not.
  * meeting_capacity `integer`: User’s meeting capacity.
  * webinar `boolean`: Webinar feature
  * webinar_capacity `integer`: Webinar capacity, can be 100, 500, 1000, 3000, 5000 or 10000, depends on if having related webinar capacity plan subscription or not.

### UserSettingsInMeeting
* User settings: Meeting settings `object`
  * annotation `boolean`: Annotation
  * attendee_on_hold `boolean`: Allow host to put attendee on hold
  * attention_tracking `boolean`: Attention tracking
  * auto_saving_chat `boolean`: Auto saving chats
  * breakout_room `boolean`: Breakout room
  * chat `boolean`: Chat
  * closed_caption `boolean`: Closed caption
  * co_host `boolean`: Co-host
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
  * share_dual_camera `boolean`: Share dual camera
  * virtual_background `boolean`: Virtual background
  * waiting_room `boolean`: Waiting room

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

### UserSettingsScheduledMeeting
* User settings: Meeting settings `object`
  * audio_type `string` (values: both, telephony, voip, thirdParty): Meeting audio
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

### UserUpdate
* UserUpdate `object`: The user update object represents a User on Zoom.
  * cms_user_id `string`: Kaltura User Id.
  * dept `string`: Department for user profile, use for report.
  * first_name `string`: User's first name. Cannot contain more than 5 Chinese words.
  * host_key `string`: Host Key, should be 6-digit number.
  * last_name `string`: User's last name. Cannot contain more than 5 Chinese words.
  * pmi `string`: Personal Meeting ID,length must be 10.
  * timezone `string`: The time zone id for user profile. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * type `integer` (values: 1, 2, 3): User's type
  * vanity_name `string`: Personal meeting room name.

### Webhook
* Webhook `object`: Webhook base object, only available for version 2 webhook
  * auth_password **required** `string`: Webhook auth password.
  * auth_user **required** `string`: Webhook auth user name.
  * events **required** `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left): List of events objects.
    * items `string`
  * url **required** `string`: Webhook endpoint

### WebhookList
* Webhook List `object`: List of Webhooks
  * total_records `integer`: The number of all records available across pages.
  * webhooks `array`: List of Webhook objects.
    * items
      * webhook_id `string`: Webhook Id.
      * auth_password **required** `string`: Webhook auth password.
      * auth_user **required** `string`: Webhook auth user name.
      * events **required** `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left): List of events objects.
        * items `string`
      * url **required** `string`: Webhook endpoint

### WebhookUpdate
* WebhookUpdate `object`: Webhook base object
  * auth_password `string`: Webhook auth password.
  * auth_user `string`: Webhook auth user name.
  * events `array` (values: meeting_started, meeting_ended, meeting_jbh, meeting_join, recording_completed, participant_joined, participant_left): List of events objects.
    * items `string`
  * url `string`: Webhook endpoint.

### Webinar
* Webinar `object`: Webinar object
  * agenda `string`: Webinar description
  * duration `integer`: Webinar duration (minutes). Used for scheduled webinar only.
  * password `string`: Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings [WebinarSettings](#webinarsettings)
  * start_time `string`: Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
  * timezone `string`: Timezone to format start_time, like "America/Los_Angeles". For scheduled webinar only. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * topic `string`: Webinar topic
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
  * type `integer` (values: 5, 6, 9): Webinar Type

### WebinarList
* User List `object`: List of Webinars
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.
  * webinars `array`: List of Webinar objects.
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
  * panelists `array`: List of Panelist objects.
    * items
      * email `string`: Panelist's email
      * name `string`: Panelist's full name

### WebinarPanelistList
* WebinarPanelistList `object`: Webinar panelist
  * panelists `array`: List of Panelist objects.
    * items
      * id `string`: Panelist's ID
      * email `string`: Panelist's email
      * name `string`: Panelist's full name
      * join_url `string`: Join url
  * total_records `integer`: Total records.

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
  * next_page_token `string`: Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes.
  * page_count `integer`: The number of items returned on this page.
  * page_size `integer`: The amount of records returns within a single API call. 
  * total_records `integer`: The number of all records available across pages.
  * registrants `array`: List of Registrant objects.
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
      * status `string`

### WebinarSettings
* WebinarSettings `object`: Webinar Settings
  * allow_multiple_devices `boolean`: Allow attendees to join from multiple devices.
  * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
  * approval_type `integer` (values: 0, 1, 2)
  * audio `string` (values: both, telephony, voip): Meeting audio options
  * auto_recording `string` (values: local, cloud, none)
  * close_registration `boolean`: Close registration after event date.
  * enforce_login `boolean`: Only signed-in users can join this meeting
  * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
  * hd_video `boolean`: Default to HD Video
  * host_video `boolean`: Start video when host join webinar
  * panelists_video `boolean`: Start video when panelists join webinar
  * practice_session `boolean`: Enable Practice Session
  * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring webinar with fixed time only.
  * show_share_button `boolean`: Show social share buttons on registration page.

### WebinarUpdate
* WebinarUpdate `object`: Webinar object
  * agenda `string`: Webinar description
  * duration `integer`: Webinar duration (minutes). Used for scheduled webinar only.
  * password `string`: Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters.
  * recurrence [Recurrence](#recurrence)
  * settings
    * allow_multiple_devices `boolean`: Allow attendees to join from multiple devices.
    * alternative_hosts `string`: Alternative hosts emails or IDs. Multiple value separated by comma.
    * approval_type `integer` (values: 0, 1, 2)
    * audio `string` (values: both, telephony, voip): Meeting audio options
    * auto_recording `string` (values: local, cloud, none)
    * close_registration `boolean`: Close registration after event date.
    * enforce_login `boolean`: Only signed-in users can join this meeting
    * enforce_login_domains `string`: Only signed-in users with specified domains can join meetings
    * hd_video `boolean`: Default to HD Video
    * host_video `boolean`: Start video when host join webinar
    * panelists_video `boolean`: Start video when panelists join webinar
    * practice_session `boolean`: Enable Practice Session
    * registration_type `integer` (values: 1, 2, 3): Registration type. Used for recurring webinar with fixed time only.
    * show_share_button `boolean`: Show social share buttons on registration page.
    * registrants_confirmation_email `boolean`: Send confirmation Email to Registrants
  * start_time `string`: Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
  * timezone `string`: Timezone to format start_time, like "America/Los_Angeles". For scheduled webinar only. For this parameter value please refer to the id value in [timezone](#timezones) list.
  * topic `string`: Webinar topic
  * type `integer` (values: 5, 6, 9): Webinar Type

### ZoomRoom
* Zoom Room `object`: Zoom Room
  * account_type `string`: Zoom Room email type
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
  * page_count `integer`: The number of items returned on this page.
  * page_number `integer`: The page number of current results.
  * page_size `integer`: The amount of records returns within a single API call.
  * total_records `integer`: The number of all records available across pages.
  * zoom_rooms `array`: Array of Zoom Rooms
    * items [ZoomRoom](#zoomroom)


