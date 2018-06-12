# @datafire/amazonaws_a4b

Client library for Alexa For Business

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_a4b
```
```js
let amazonaws_a4b = require('@datafire/amazonaws_a4b').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_a4b.AssociateContactWithAddressBook({
  "ContactArn": "",
  "AddressBookArn": ""
}).then(data => {
  console.log(data);
});
```

## Description

Alexa for Business makes it easy for you to use Alexa in your organization. Alexa for Business gives you the tools you need for managing Alexa devices, enroll your users, and assign skills, at scale. You can build your own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations. You can make also these available as private skills for your organization. Alexa for Business makes it easy to voice-enable your products and services, providing context-aware voice experiences for your customers.

## Actions

### AssociateContactWithAddressBook



```js
amazonaws_a4b.AssociateContactWithAddressBook({
  "ContactArn": "",
  "AddressBookArn": ""
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required** [Arn](#arn)
  * ContactArn **required** [Arn](#arn)

#### Output
* output [AssociateContactWithAddressBookResponse](#associatecontactwithaddressbookresponse)

### AssociateDeviceWithRoom



```js
amazonaws_a4b.AssociateDeviceWithRoom({}, context)
```

#### Input
* input `object`
  * DeviceArn [Arn](#arn)
  * RoomArn [Arn](#arn)

#### Output
* output [AssociateDeviceWithRoomResponse](#associatedevicewithroomresponse)

### AssociateSkillGroupWithRoom



```js
amazonaws_a4b.AssociateSkillGroupWithRoom({}, context)
```

#### Input
* input `object`
  * RoomArn [Arn](#arn)
  * SkillGroupArn [Arn](#arn)

#### Output
* output [AssociateSkillGroupWithRoomResponse](#associateskillgroupwithroomresponse)

### CreateAddressBook



```js
amazonaws_a4b.CreateAddressBook({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Description [AddressBookDescription](#addressbookdescription)
  * Name **required** [AddressBookName](#addressbookname)

#### Output
* output [CreateAddressBookResponse](#createaddressbookresponse)

### CreateContact



```js
amazonaws_a4b.CreateContact({
  "FirstName": "",
  "PhoneNumber": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * DisplayName [ContactName](#contactname)
  * FirstName **required** [ContactName](#contactname)
  * LastName [ContactName](#contactname)
  * PhoneNumber **required** [E164PhoneNumber](#e164phonenumber)

#### Output
* output [CreateContactResponse](#createcontactresponse)

### CreateProfile



```js
amazonaws_a4b.CreateProfile({
  "ProfileName": "",
  "Timezone": "",
  "Address": "",
  "DistanceUnit": "",
  "TemperatureUnit": "",
  "WakeWord": ""
}, context)
```

#### Input
* input `object`
  * Address **required** [Address](#address)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * DistanceUnit **required** [DistanceUnit](#distanceunit)
  * MaxVolumeLimit [MaxVolumeLimit](#maxvolumelimit)
  * PSTNEnabled [Boolean](#boolean)
  * ProfileName **required** [ProfileName](#profilename)
  * SetupModeDisabled [Boolean](#boolean)
  * TemperatureUnit **required** [TemperatureUnit](#temperatureunit)
  * Timezone **required** [Timezone](#timezone)
  * WakeWord **required** [WakeWord](#wakeword)

#### Output
* output [CreateProfileResponse](#createprofileresponse)

### CreateRoom



```js
amazonaws_a4b.CreateRoom({
  "RoomName": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Description [RoomDescription](#roomdescription)
  * ProfileArn [Arn](#arn)
  * ProviderCalendarId [ProviderCalendarId](#providercalendarid)
  * RoomName **required** [RoomName](#roomname)
  * Tags [TagList](#taglist)

#### Output
* output [CreateRoomResponse](#createroomresponse)

### CreateSkillGroup



```js
amazonaws_a4b.CreateSkillGroup({
  "SkillGroupName": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Description [SkillGroupDescription](#skillgroupdescription)
  * SkillGroupName **required** [SkillGroupName](#skillgroupname)

#### Output
* output [CreateSkillGroupResponse](#createskillgroupresponse)

### CreateUser



```js
amazonaws_a4b.CreateUser({
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Email [Email](#email)
  * FirstName [user_FirstName](#user_firstname)
  * LastName [user_LastName](#user_lastname)
  * Tags [TagList](#taglist)
  * UserId **required** [user_UserId](#user_userid)

#### Output
* output [CreateUserResponse](#createuserresponse)

### DeleteAddressBook



```js
amazonaws_a4b.DeleteAddressBook({
  "AddressBookArn": ""
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required** [Arn](#arn)

#### Output
* output [DeleteAddressBookResponse](#deleteaddressbookresponse)

### DeleteContact



```js
amazonaws_a4b.DeleteContact({
  "ContactArn": ""
}, context)
```

#### Input
* input `object`
  * ContactArn **required** [Arn](#arn)

#### Output
* output [DeleteContactResponse](#deletecontactresponse)

### DeleteProfile



```js
amazonaws_a4b.DeleteProfile({}, context)
```

#### Input
* input `object`
  * ProfileArn [Arn](#arn)

#### Output
* output [DeleteProfileResponse](#deleteprofileresponse)

### DeleteRoom



```js
amazonaws_a4b.DeleteRoom({}, context)
```

#### Input
* input `object`
  * RoomArn [Arn](#arn)

#### Output
* output [DeleteRoomResponse](#deleteroomresponse)

### DeleteRoomSkillParameter



```js
amazonaws_a4b.DeleteRoomSkillParameter({
  "SkillId": "",
  "ParameterKey": ""
}, context)
```

#### Input
* input `object`
  * ParameterKey **required** [RoomSkillParameterKey](#roomskillparameterkey)
  * RoomArn [Arn](#arn)
  * SkillId **required** [SkillId](#skillid)

#### Output
* output [DeleteRoomSkillParameterResponse](#deleteroomskillparameterresponse)

### DeleteSkillGroup



```js
amazonaws_a4b.DeleteSkillGroup({}, context)
```

#### Input
* input `object`
  * SkillGroupArn [Arn](#arn)

#### Output
* output [DeleteSkillGroupResponse](#deleteskillgroupresponse)

### DeleteUser



```js
amazonaws_a4b.DeleteUser({
  "EnrollmentId": ""
}, context)
```

#### Input
* input `object`
  * EnrollmentId **required** [EnrollmentId](#enrollmentid)
  * UserArn [Arn](#arn)

#### Output
* output [DeleteUserResponse](#deleteuserresponse)

### DisassociateContactFromAddressBook



```js
amazonaws_a4b.DisassociateContactFromAddressBook({
  "ContactArn": "",
  "AddressBookArn": ""
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required** [Arn](#arn)
  * ContactArn **required** [Arn](#arn)

#### Output
* output [DisassociateContactFromAddressBookResponse](#disassociatecontactfromaddressbookresponse)

### DisassociateDeviceFromRoom



```js
amazonaws_a4b.DisassociateDeviceFromRoom({}, context)
```

#### Input
* input `object`
  * DeviceArn [Arn](#arn)

#### Output
* output [DisassociateDeviceFromRoomResponse](#disassociatedevicefromroomresponse)

### DisassociateSkillGroupFromRoom



```js
amazonaws_a4b.DisassociateSkillGroupFromRoom({}, context)
```

#### Input
* input `object`
  * RoomArn [Arn](#arn)
  * SkillGroupArn [Arn](#arn)

#### Output
* output [DisassociateSkillGroupFromRoomResponse](#disassociateskillgroupfromroomresponse)

### GetAddressBook



```js
amazonaws_a4b.GetAddressBook({
  "AddressBookArn": ""
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required** [Arn](#arn)

#### Output
* output [GetAddressBookResponse](#getaddressbookresponse)

### GetContact



```js
amazonaws_a4b.GetContact({
  "ContactArn": ""
}, context)
```

#### Input
* input `object`
  * ContactArn **required** [Arn](#arn)

#### Output
* output [GetContactResponse](#getcontactresponse)

### GetDevice



```js
amazonaws_a4b.GetDevice({}, context)
```

#### Input
* input `object`
  * DeviceArn [Arn](#arn)

#### Output
* output [GetDeviceResponse](#getdeviceresponse)

### GetProfile



```js
amazonaws_a4b.GetProfile({}, context)
```

#### Input
* input `object`
  * ProfileArn [Arn](#arn)

#### Output
* output [GetProfileResponse](#getprofileresponse)

### GetRoom



```js
amazonaws_a4b.GetRoom({}, context)
```

#### Input
* input `object`
  * RoomArn [Arn](#arn)

#### Output
* output [GetRoomResponse](#getroomresponse)

### GetRoomSkillParameter



```js
amazonaws_a4b.GetRoomSkillParameter({
  "SkillId": "",
  "ParameterKey": ""
}, context)
```

#### Input
* input `object`
  * ParameterKey **required** [RoomSkillParameterKey](#roomskillparameterkey)
  * RoomArn [Arn](#arn)
  * SkillId **required** [SkillId](#skillid)

#### Output
* output [GetRoomSkillParameterResponse](#getroomskillparameterresponse)

### GetSkillGroup



```js
amazonaws_a4b.GetSkillGroup({}, context)
```

#### Input
* input `object`
  * SkillGroupArn [Arn](#arn)

#### Output
* output [GetSkillGroupResponse](#getskillgroupresponse)

### ListDeviceEvents



```js
amazonaws_a4b.ListDeviceEvents({
  "DeviceArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DeviceArn **required** [Arn](#arn)
  * EventType [DeviceEventType](#deviceeventtype)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListDeviceEventsResponse](#listdeviceeventsresponse)

### ListSkills



```js
amazonaws_a4b.ListSkills({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [SkillListMaxResults](#skilllistmaxresults)
  * NextToken [NextToken](#nexttoken)
  * SkillGroupArn [Arn](#arn)

#### Output
* output [ListSkillsResponse](#listskillsresponse)

### ListTags



```js
amazonaws_a4b.ListTags({
  "Arn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Arn **required** [Arn](#arn)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListTagsResponse](#listtagsresponse)

### PutRoomSkillParameter



```js
amazonaws_a4b.PutRoomSkillParameter({
  "SkillId": "",
  "RoomSkillParameter": {
    "ParameterKey": "",
    "ParameterValue": ""
  }
}, context)
```

#### Input
* input `object`
  * RoomArn [Arn](#arn)
  * RoomSkillParameter **required** [RoomSkillParameter](#roomskillparameter)
  * SkillId **required** [SkillId](#skillid)

#### Output
* output [PutRoomSkillParameterResponse](#putroomskillparameterresponse)

### ResolveRoom



```js
amazonaws_a4b.ResolveRoom({
  "UserId": "",
  "SkillId": ""
}, context)
```

#### Input
* input `object`
  * SkillId **required** [SkillId](#skillid)
  * UserId **required** [UserId](#userid)

#### Output
* output [ResolveRoomResponse](#resolveroomresponse)

### RevokeInvitation



```js
amazonaws_a4b.RevokeInvitation({}, context)
```

#### Input
* input `object`
  * EnrollmentId [EnrollmentId](#enrollmentid)
  * UserArn [Arn](#arn)

#### Output
* output [RevokeInvitationResponse](#revokeinvitationresponse)

### SearchAddressBooks



```js
amazonaws_a4b.SearchAddressBooks({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

#### Output
* output [SearchAddressBooksResponse](#searchaddressbooksresponse)

### SearchContacts



```js
amazonaws_a4b.SearchContacts({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

#### Output
* output [SearchContactsResponse](#searchcontactsresponse)

### SearchDevices



```js
amazonaws_a4b.SearchDevices({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

#### Output
* output [SearchDevicesResponse](#searchdevicesresponse)

### SearchProfiles



```js
amazonaws_a4b.SearchProfiles({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

#### Output
* output [SearchProfilesResponse](#searchprofilesresponse)

### SearchRooms



```js
amazonaws_a4b.SearchRooms({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

#### Output
* output [SearchRoomsResponse](#searchroomsresponse)

### SearchSkillGroups



```js
amazonaws_a4b.SearchSkillGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

#### Output
* output [SearchSkillGroupsResponse](#searchskillgroupsresponse)

### SearchUsers



```js
amazonaws_a4b.SearchUsers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

#### Output
* output [SearchUsersResponse](#searchusersresponse)

### SendInvitation



```js
amazonaws_a4b.SendInvitation({}, context)
```

#### Input
* input `object`
  * UserArn [Arn](#arn)

#### Output
* output [SendInvitationResponse](#sendinvitationresponse)

### StartDeviceSync



```js
amazonaws_a4b.StartDeviceSync({
  "Features": []
}, context)
```

#### Input
* input `object`
  * DeviceArn [Arn](#arn)
  * Features **required** [Features](#features)
  * RoomArn [Arn](#arn)

#### Output
* output [StartDeviceSyncResponse](#startdevicesyncresponse)

### TagResource



```js
amazonaws_a4b.TagResource({
  "Arn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * Arn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_a4b.UntagResource({
  "Arn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * Arn **required** [Arn](#arn)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateAddressBook



```js
amazonaws_a4b.UpdateAddressBook({
  "AddressBookArn": ""
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required** [Arn](#arn)
  * Description [AddressBookDescription](#addressbookdescription)
  * Name [AddressBookName](#addressbookname)

#### Output
* output [UpdateAddressBookResponse](#updateaddressbookresponse)

### UpdateContact



```js
amazonaws_a4b.UpdateContact({
  "ContactArn": ""
}, context)
```

#### Input
* input `object`
  * ContactArn **required** [Arn](#arn)
  * DisplayName [ContactName](#contactname)
  * FirstName [ContactName](#contactname)
  * LastName [ContactName](#contactname)
  * PhoneNumber [E164PhoneNumber](#e164phonenumber)

#### Output
* output [UpdateContactResponse](#updatecontactresponse)

### UpdateDevice



```js
amazonaws_a4b.UpdateDevice({}, context)
```

#### Input
* input `object`
  * DeviceArn [Arn](#arn)
  * DeviceName [DeviceName](#devicename)

#### Output
* output [UpdateDeviceResponse](#updatedeviceresponse)

### UpdateProfile



```js
amazonaws_a4b.UpdateProfile({}, context)
```

#### Input
* input `object`
  * Address [Address](#address)
  * DistanceUnit [DistanceUnit](#distanceunit)
  * MaxVolumeLimit [MaxVolumeLimit](#maxvolumelimit)
  * PSTNEnabled [Boolean](#boolean)
  * ProfileArn [Arn](#arn)
  * ProfileName [ProfileName](#profilename)
  * SetupModeDisabled [Boolean](#boolean)
  * TemperatureUnit [TemperatureUnit](#temperatureunit)
  * Timezone [Timezone](#timezone)
  * WakeWord [WakeWord](#wakeword)

#### Output
* output [UpdateProfileResponse](#updateprofileresponse)

### UpdateRoom



```js
amazonaws_a4b.UpdateRoom({}, context)
```

#### Input
* input `object`
  * Description [RoomDescription](#roomdescription)
  * ProfileArn [Arn](#arn)
  * ProviderCalendarId [ProviderCalendarId](#providercalendarid)
  * RoomArn [Arn](#arn)
  * RoomName [RoomName](#roomname)

#### Output
* output [UpdateRoomResponse](#updateroomresponse)

### UpdateSkillGroup



```js
amazonaws_a4b.UpdateSkillGroup({}, context)
```

#### Input
* input `object`
  * Description [SkillGroupDescription](#skillgroupdescription)
  * SkillGroupArn [Arn](#arn)
  * SkillGroupName [SkillGroupName](#skillgroupname)

#### Output
* output [UpdateSkillGroupResponse](#updateskillgroupresponse)



## Definitions

### Address
* Address `string`

### AddressBook
* AddressBook `object`: An address book with attributes.
  * AddressBookArn [Arn](#arn)
  * Description [AddressBookDescription](#addressbookdescription)
  * Name [AddressBookName](#addressbookname)

### AddressBookData
* AddressBookData `object`: Information related to an address book.
  * AddressBookArn [Arn](#arn)
  * Description [AddressBookDescription](#addressbookdescription)
  * Name [AddressBookName](#addressbookname)

### AddressBookDataList
* AddressBookDataList `array`
  * items [AddressBookData](#addressbookdata)

### AddressBookDescription
* AddressBookDescription `string`

### AddressBookName
* AddressBookName `string`

### AlreadyExistsException
* AlreadyExistsException `object`: The resource being created already exists. HTTP Status Code: 400
  * Message [ErrorMessage](#errormessage)

### Arn
* Arn `string`

### AssociateContactWithAddressBookRequest
* AssociateContactWithAddressBookRequest `object`
  * AddressBookArn **required** [Arn](#arn)
  * ContactArn **required** [Arn](#arn)

### AssociateContactWithAddressBookResponse
* AssociateContactWithAddressBookResponse `object`

### AssociateDeviceWithRoomRequest
* AssociateDeviceWithRoomRequest `object`
  * DeviceArn [Arn](#arn)
  * RoomArn [Arn](#arn)

### AssociateDeviceWithRoomResponse
* AssociateDeviceWithRoomResponse `object`

### AssociateSkillGroupWithRoomRequest
* AssociateSkillGroupWithRoomRequest `object`
  * RoomArn [Arn](#arn)
  * SkillGroupArn [Arn](#arn)

### AssociateSkillGroupWithRoomResponse
* AssociateSkillGroupWithRoomResponse `object`

### Boolean
* Boolean `boolean`

### ClientRequestToken
* ClientRequestToken `string`: User specified token that is used to support idempotency during Create Resource

### ConnectionStatus
* ConnectionStatus `string` (values: ONLINE, OFFLINE)

### Contact
* Contact `object`: A contact with attributes.
  * ContactArn [Arn](#arn)
  * DisplayName [ContactName](#contactname)
  * FirstName [ContactName](#contactname)
  * LastName [ContactName](#contactname)
  * PhoneNumber [E164PhoneNumber](#e164phonenumber)

### ContactData
* ContactData `object`: Information related to a contact.
  * ContactArn [Arn](#arn)
  * DisplayName [ContactName](#contactname)
  * FirstName [ContactName](#contactname)
  * LastName [ContactName](#contactname)
  * PhoneNumber [E164PhoneNumber](#e164phonenumber)

### ContactDataList
* ContactDataList `array`
  * items [ContactData](#contactdata)

### ContactName
* ContactName `string`

### CreateAddressBookRequest
* CreateAddressBookRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Description [AddressBookDescription](#addressbookdescription)
  * Name **required** [AddressBookName](#addressbookname)

### CreateAddressBookResponse
* CreateAddressBookResponse `object`
  * AddressBookArn [Arn](#arn)

### CreateContactRequest
* CreateContactRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * DisplayName [ContactName](#contactname)
  * FirstName **required** [ContactName](#contactname)
  * LastName [ContactName](#contactname)
  * PhoneNumber **required** [E164PhoneNumber](#e164phonenumber)

### CreateContactResponse
* CreateContactResponse `object`
  * ContactArn [Arn](#arn)

### CreateProfileRequest
* CreateProfileRequest `object`
  * Address **required** [Address](#address)
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * DistanceUnit **required** [DistanceUnit](#distanceunit)
  * MaxVolumeLimit [MaxVolumeLimit](#maxvolumelimit)
  * PSTNEnabled [Boolean](#boolean)
  * ProfileName **required** [ProfileName](#profilename)
  * SetupModeDisabled [Boolean](#boolean)
  * TemperatureUnit **required** [TemperatureUnit](#temperatureunit)
  * Timezone **required** [Timezone](#timezone)
  * WakeWord **required** [WakeWord](#wakeword)

### CreateProfileResponse
* CreateProfileResponse `object`
  * ProfileArn [Arn](#arn)

### CreateRoomRequest
* CreateRoomRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Description [RoomDescription](#roomdescription)
  * ProfileArn [Arn](#arn)
  * ProviderCalendarId [ProviderCalendarId](#providercalendarid)
  * RoomName **required** [RoomName](#roomname)
  * Tags [TagList](#taglist)

### CreateRoomResponse
* CreateRoomResponse `object`
  * RoomArn [Arn](#arn)

### CreateSkillGroupRequest
* CreateSkillGroupRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Description [SkillGroupDescription](#skillgroupdescription)
  * SkillGroupName **required** [SkillGroupName](#skillgroupname)

### CreateSkillGroupResponse
* CreateSkillGroupResponse `object`
  * SkillGroupArn [Arn](#arn)

### CreateUserRequest
* CreateUserRequest `object`
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Email [Email](#email)
  * FirstName [user_FirstName](#user_firstname)
  * LastName [user_LastName](#user_lastname)
  * Tags [TagList](#taglist)
  * UserId **required** [user_UserId](#user_userid)

### CreateUserResponse
* CreateUserResponse `object`
  * UserArn [Arn](#arn)

### DeleteAddressBookRequest
* DeleteAddressBookRequest `object`
  * AddressBookArn **required** [Arn](#arn)

### DeleteAddressBookResponse
* DeleteAddressBookResponse `object`

### DeleteContactRequest
* DeleteContactRequest `object`
  * ContactArn **required** [Arn](#arn)

### DeleteContactResponse
* DeleteContactResponse `object`

### DeleteProfileRequest
* DeleteProfileRequest `object`
  * ProfileArn [Arn](#arn)

### DeleteProfileResponse
* DeleteProfileResponse `object`

### DeleteRoomRequest
* DeleteRoomRequest `object`
  * RoomArn [Arn](#arn)

### DeleteRoomResponse
* DeleteRoomResponse `object`

### DeleteRoomSkillParameterRequest
* DeleteRoomSkillParameterRequest `object`
  * ParameterKey **required** [RoomSkillParameterKey](#roomskillparameterkey)
  * RoomArn [Arn](#arn)
  * SkillId **required** [SkillId](#skillid)

### DeleteRoomSkillParameterResponse
* DeleteRoomSkillParameterResponse `object`

### DeleteSkillGroupRequest
* DeleteSkillGroupRequest `object`
  * SkillGroupArn [Arn](#arn)

### DeleteSkillGroupResponse
* DeleteSkillGroupResponse `object`

### DeleteUserRequest
* DeleteUserRequest `object`
  * EnrollmentId **required** [EnrollmentId](#enrollmentid)
  * UserArn [Arn](#arn)

### DeleteUserResponse
* DeleteUserResponse `object`

### Device
* Device `object`: A device with attributes.
  * DeviceArn [Arn](#arn)
  * DeviceName [DeviceName](#devicename)
  * DeviceSerialNumber [DeviceSerialNumber](#deviceserialnumber)
  * DeviceStatus [DeviceStatus](#devicestatus)
  * DeviceStatusInfo [DeviceStatusInfo](#devicestatusinfo)
  * DeviceType [DeviceType](#devicetype)
  * MacAddress [MacAddress](#macaddress)
  * RoomArn [Arn](#arn)
  * SoftwareVersion [SoftwareVersion](#softwareversion)

### DeviceData
* DeviceData `object`: Device attributes.
  * DeviceArn [Arn](#arn)
  * DeviceName [DeviceName](#devicename)
  * DeviceSerialNumber [DeviceSerialNumber](#deviceserialnumber)
  * DeviceStatus [DeviceStatus](#devicestatus)
  * DeviceStatusInfo [DeviceStatusInfo](#devicestatusinfo)
  * DeviceType [DeviceType](#devicetype)
  * MacAddress [MacAddress](#macaddress)
  * RoomArn [Arn](#arn)
  * RoomName [RoomName](#roomname)
  * SoftwareVersion [SoftwareVersion](#softwareversion)

### DeviceDataList
* DeviceDataList `array`
  * items [DeviceData](#devicedata)

### DeviceEvent
* DeviceEvent `object`: The list of device events.
  * Timestamp [Timestamp](#timestamp)
  * Type [DeviceEventType](#deviceeventtype)
  * Value [DeviceEventValue](#deviceeventvalue)

### DeviceEventList
* DeviceEventList `array`
  * items [DeviceEvent](#deviceevent)

### DeviceEventType
* DeviceEventType `string` (values: CONNECTION_STATUS, DEVICE_STATUS)

### DeviceEventValue
* DeviceEventValue `string`

### DeviceName
* DeviceName `string`

### DeviceSerialNumber
* DeviceSerialNumber `string`

### DeviceStatus
* DeviceStatus `string` (values: READY, PENDING, WAS_OFFLINE, DEREGISTERED)

### DeviceStatusDetail
* DeviceStatusDetail `object`: Details of a device’s status.
  * Code [DeviceStatusDetailCode](#devicestatusdetailcode)

### DeviceStatusDetailCode
* DeviceStatusDetailCode `string` (values: DEVICE_SOFTWARE_UPDATE_NEEDED, DEVICE_WAS_OFFLINE)

### DeviceStatusDetails
* DeviceStatusDetails `array`
  * items [DeviceStatusDetail](#devicestatusdetail)

### DeviceStatusInfo
* DeviceStatusInfo `object`: Detailed information about a device's status.
  * ConnectionStatus [ConnectionStatus](#connectionstatus)
  * DeviceStatusDetails [DeviceStatusDetails](#devicestatusdetails)

### DeviceType
* DeviceType `string`

### DisassociateContactFromAddressBookRequest
* DisassociateContactFromAddressBookRequest `object`
  * AddressBookArn **required** [Arn](#arn)
  * ContactArn **required** [Arn](#arn)

### DisassociateContactFromAddressBookResponse
* DisassociateContactFromAddressBookResponse `object`

### DisassociateDeviceFromRoomRequest
* DisassociateDeviceFromRoomRequest `object`
  * DeviceArn [Arn](#arn)

### DisassociateDeviceFromRoomResponse
* DisassociateDeviceFromRoomResponse `object`

### DisassociateSkillGroupFromRoomRequest
* DisassociateSkillGroupFromRoomRequest `object`
  * RoomArn [Arn](#arn)
  * SkillGroupArn [Arn](#arn)

### DisassociateSkillGroupFromRoomResponse
* DisassociateSkillGroupFromRoomResponse `object`

### DistanceUnit
* DistanceUnit `string` (values: METRIC, IMPERIAL)

### E164PhoneNumber
* E164PhoneNumber `string`

### Email
* Email `string`

### EnrollmentId
* EnrollmentId `string`

### EnrollmentStatus
* EnrollmentStatus `string` (values: INITIALIZED, PENDING, REGISTERED, DISASSOCIATING, DEREGISTERING)

### ErrorMessage
* ErrorMessage `string`

### Feature
* Feature `string` (values: BLUETOOTH, VOLUME, NOTIFICATIONS, LISTS, SKILLS, ALL)

### Features
* Features `array`
  * items [Feature](#feature)

### Filter
* Filter `object`: A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria.
  * Key **required** [FilterKey](#filterkey)
  * Values **required** [FilterValueList](#filtervaluelist)

### FilterKey
* FilterKey `string`

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterValue
* FilterValue `string`

### FilterValueList
* FilterValueList `array`
  * items [FilterValue](#filtervalue)

### GetAddressBookRequest
* GetAddressBookRequest `object`
  * AddressBookArn **required** [Arn](#arn)

### GetAddressBookResponse
* GetAddressBookResponse `object`
  * AddressBook [AddressBook](#addressbook)

### GetContactRequest
* GetContactRequest `object`
  * ContactArn **required** [Arn](#arn)

### GetContactResponse
* GetContactResponse `object`
  * Contact [Contact](#contact)

### GetDeviceRequest
* GetDeviceRequest `object`
  * DeviceArn [Arn](#arn)

### GetDeviceResponse
* GetDeviceResponse `object`
  * Device [Device](#device)

### GetProfileRequest
* GetProfileRequest `object`
  * ProfileArn [Arn](#arn)

### GetProfileResponse
* GetProfileResponse `object`
  * Profile [Profile](#profile)

### GetRoomRequest
* GetRoomRequest `object`
  * RoomArn [Arn](#arn)

### GetRoomResponse
* GetRoomResponse `object`
  * Room [Room](#room)

### GetRoomSkillParameterRequest
* GetRoomSkillParameterRequest `object`
  * ParameterKey **required** [RoomSkillParameterKey](#roomskillparameterkey)
  * RoomArn [Arn](#arn)
  * SkillId **required** [SkillId](#skillid)

### GetRoomSkillParameterResponse
* GetRoomSkillParameterResponse `object`
  * RoomSkillParameter [RoomSkillParameter](#roomskillparameter)

### GetSkillGroupRequest
* GetSkillGroupRequest `object`
  * SkillGroupArn [Arn](#arn)

### GetSkillGroupResponse
* GetSkillGroupResponse `object`
  * SkillGroup [SkillGroup](#skillgroup)

### InvalidUserStatusException
* InvalidUserStatusException `object`: The attempt to update a user is invalid due to the user's current status. HTTP Status Code: 400
  * Message [ErrorMessage](#errormessage)

### LimitExceededException
* LimitExceededException `object`: You are performing an action that would put you beyond your account's limits. HTTP Status Code: 400
  * Message [ErrorMessage](#errormessage)

### ListDeviceEventsRequest
* ListDeviceEventsRequest `object`
  * DeviceArn **required** [Arn](#arn)
  * EventType [DeviceEventType](#deviceeventtype)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListDeviceEventsResponse
* ListDeviceEventsResponse `object`
  * DeviceEvents [DeviceEventList](#deviceeventlist)
  * NextToken [NextToken](#nexttoken)

### ListSkillsRequest
* ListSkillsRequest `object`
  * MaxResults [SkillListMaxResults](#skilllistmaxresults)
  * NextToken [NextToken](#nexttoken)
  * SkillGroupArn [Arn](#arn)

### ListSkillsResponse
* ListSkillsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * SkillSummaries [SkillSummaryList](#skillsummarylist)

### ListTagsRequest
* ListTagsRequest `object`
  * Arn **required** [Arn](#arn)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)

### ListTagsResponse
* ListTagsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Tags [TagList](#taglist)

### MacAddress
* MacAddress `string`

### MaxResults
* MaxResults `integer`

### MaxVolumeLimit
* MaxVolumeLimit `integer`

### NameInUseException
* NameInUseException `object`: The name sent in the request is already in use. HTTP Status Code: 400
  * Message [ErrorMessage](#errormessage)

### NextToken
* NextToken `string`

### NotFoundException
* NotFoundException `object`: The resource is not found. HTTP Status Code: 400
  * Message [ErrorMessage](#errormessage)

### Profile
* Profile `object`: A room profile with attributes.
  * Address [Address](#address)
  * DistanceUnit [DistanceUnit](#distanceunit)
  * MaxVolumeLimit [MaxVolumeLimit](#maxvolumelimit)
  * PSTNEnabled [Boolean](#boolean)
  * ProfileArn [Arn](#arn)
  * ProfileName [ProfileName](#profilename)
  * SetupModeDisabled [Boolean](#boolean)
  * TemperatureUnit [TemperatureUnit](#temperatureunit)
  * Timezone [Timezone](#timezone)
  * WakeWord [WakeWord](#wakeword)

### ProfileData
* ProfileData `object`: The data of a room profile.
  * Address [Address](#address)
  * DistanceUnit [DistanceUnit](#distanceunit)
  * ProfileArn [Arn](#arn)
  * ProfileName [ProfileName](#profilename)
  * TemperatureUnit [TemperatureUnit](#temperatureunit)
  * Timezone [Timezone](#timezone)
  * WakeWord [WakeWord](#wakeword)

### ProfileDataList
* ProfileDataList `array`
  * items [ProfileData](#profiledata)

### ProfileName
* ProfileName `string`

### ProviderCalendarId
* ProviderCalendarId `string`

### PutRoomSkillParameterRequest
* PutRoomSkillParameterRequest `object`
  * RoomArn [Arn](#arn)
  * RoomSkillParameter **required** [RoomSkillParameter](#roomskillparameter)
  * SkillId **required** [SkillId](#skillid)

### PutRoomSkillParameterResponse
* PutRoomSkillParameterResponse `object`

### ResolveRoomRequest
* ResolveRoomRequest `object`
  * SkillId **required** [SkillId](#skillid)
  * UserId **required** [UserId](#userid)

### ResolveRoomResponse
* ResolveRoomResponse `object`
  * RoomArn [Arn](#arn)
  * RoomName [RoomName](#roomname)
  * RoomSkillParameters [RoomSkillParameters](#roomskillparameters)

### ResourceInUseException
* ResourceInUseException `object`: The resource in the request is already in use. HTTP Status Code: 400
  * ClientRequestToken [ClientRequestToken](#clientrequesttoken)
  * Message [ErrorMessage](#errormessage)

### RevokeInvitationRequest
* RevokeInvitationRequest `object`
  * EnrollmentId [EnrollmentId](#enrollmentid)
  * UserArn [Arn](#arn)

### RevokeInvitationResponse
* RevokeInvitationResponse `object`

### Room
* Room `object`: A room with attributes.
  * Description [RoomDescription](#roomdescription)
  * ProfileArn [Arn](#arn)
  * ProviderCalendarId [ProviderCalendarId](#providercalendarid)
  * RoomArn [Arn](#arn)
  * RoomName [RoomName](#roomname)

### RoomData
* RoomData `object`: The data of a room.
  * Description [RoomDescription](#roomdescription)
  * ProfileArn [Arn](#arn)
  * ProfileName [ProfileName](#profilename)
  * ProviderCalendarId [ProviderCalendarId](#providercalendarid)
  * RoomArn [Arn](#arn)
  * RoomName [RoomName](#roomname)

### RoomDataList
* RoomDataList `array`
  * items [RoomData](#roomdata)

### RoomDescription
* RoomDescription `string`

### RoomName
* RoomName `string`

### RoomSkillParameter
* RoomSkillParameter `object`: A skill parameter associated with a room.
  * ParameterKey **required** [RoomSkillParameterKey](#roomskillparameterkey)
  * ParameterValue **required** [RoomSkillParameterValue](#roomskillparametervalue)

### RoomSkillParameterKey
* RoomSkillParameterKey `string`

### RoomSkillParameterValue
* RoomSkillParameterValue `string`

### RoomSkillParameters
* RoomSkillParameters `array`
  * items [RoomSkillParameter](#roomskillparameter)

### SearchAddressBooksRequest
* SearchAddressBooksRequest `object`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

### SearchAddressBooksResponse
* SearchAddressBooksResponse `object`
  * AddressBooks [AddressBookDataList](#addressbookdatalist)
  * NextToken [NextToken](#nexttoken)
  * TotalCount [TotalCount](#totalcount)

### SearchContactsRequest
* SearchContactsRequest `object`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

### SearchContactsResponse
* SearchContactsResponse `object`
  * Contacts [ContactDataList](#contactdatalist)
  * NextToken [NextToken](#nexttoken)
  * TotalCount [TotalCount](#totalcount)

### SearchDevicesRequest
* SearchDevicesRequest `object`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

### SearchDevicesResponse
* SearchDevicesResponse `object`
  * Devices [DeviceDataList](#devicedatalist)
  * NextToken [NextToken](#nexttoken)
  * TotalCount [TotalCount](#totalcount)

### SearchProfilesRequest
* SearchProfilesRequest `object`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

### SearchProfilesResponse
* SearchProfilesResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Profiles [ProfileDataList](#profiledatalist)
  * TotalCount [TotalCount](#totalcount)

### SearchRoomsRequest
* SearchRoomsRequest `object`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

### SearchRoomsResponse
* SearchRoomsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * Rooms [RoomDataList](#roomdatalist)
  * TotalCount [TotalCount](#totalcount)

### SearchSkillGroupsRequest
* SearchSkillGroupsRequest `object`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

### SearchSkillGroupsResponse
* SearchSkillGroupsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * SkillGroups [SkillGroupDataList](#skillgroupdatalist)
  * TotalCount [TotalCount](#totalcount)

### SearchUsersRequest
* SearchUsersRequest `object`
  * Filters [FilterList](#filterlist)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortCriteria [SortList](#sortlist)

### SearchUsersResponse
* SearchUsersResponse `object`
  * NextToken [NextToken](#nexttoken)
  * TotalCount [TotalCount](#totalcount)
  * Users [UserDataList](#userdatalist)

### SendInvitationRequest
* SendInvitationRequest `object`
  * UserArn [Arn](#arn)

### SendInvitationResponse
* SendInvitationResponse `object`

### SkillGroup
* SkillGroup `object`: A skill group with attributes.
  * Description [SkillGroupDescription](#skillgroupdescription)
  * SkillGroupArn [Arn](#arn)
  * SkillGroupName [SkillGroupName](#skillgroupname)

### SkillGroupData
* SkillGroupData `object`: The attributes of a skill group.
  * Description [SkillGroupDescription](#skillgroupdescription)
  * SkillGroupArn [Arn](#arn)
  * SkillGroupName [SkillGroupName](#skillgroupname)

### SkillGroupDataList
* SkillGroupDataList `array`
  * items [SkillGroupData](#skillgroupdata)

### SkillGroupDescription
* SkillGroupDescription `string`

### SkillGroupName
* SkillGroupName `string`

### SkillId
* SkillId `string`

### SkillListMaxResults
* SkillListMaxResults `integer`

### SkillName
* SkillName `string`

### SkillSummary
* SkillSummary `object`: The summary of skills.
  * SkillId [SkillId](#skillid)
  * SkillName [SkillName](#skillname)
  * SupportsLinking [boolean](#boolean)

### SkillSummaryList
* SkillSummaryList `array`
  * items [SkillSummary](#skillsummary)

### SoftwareVersion
* SoftwareVersion `string`

### Sort
* Sort `object`: An object representing a sort criteria. 
  * Key **required** [SortKey](#sortkey)
  * Value **required** [SortValue](#sortvalue)

### SortKey
* SortKey `string`

### SortList
* SortList `array`
  * items [Sort](#sort)

### SortValue
* SortValue `string` (values: ASC, DESC)

### StartDeviceSyncRequest
* StartDeviceSyncRequest `object`
  * DeviceArn [Arn](#arn)
  * Features **required** [Features](#features)
  * RoomArn [Arn](#arn)

### StartDeviceSyncResponse
* StartDeviceSyncResponse `object`

### Tag
* Tag `object`: A key-value pair that can be associated with a resource. 
  * Key [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * Arn **required** [Arn](#arn)
  * Tags **required** [TagList](#taglist)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TemperatureUnit
* TemperatureUnit `string` (values: FAHRENHEIT, CELSIUS)

### Timestamp
* Timestamp `string`

### Timezone
* Timezone `string`

### TotalCount
* TotalCount `integer`

### UntagResourceRequest
* UntagResourceRequest `object`
  * Arn **required** [Arn](#arn)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAddressBookRequest
* UpdateAddressBookRequest `object`
  * AddressBookArn **required** [Arn](#arn)
  * Description [AddressBookDescription](#addressbookdescription)
  * Name [AddressBookName](#addressbookname)

### UpdateAddressBookResponse
* UpdateAddressBookResponse `object`

### UpdateContactRequest
* UpdateContactRequest `object`
  * ContactArn **required** [Arn](#arn)
  * DisplayName [ContactName](#contactname)
  * FirstName [ContactName](#contactname)
  * LastName [ContactName](#contactname)
  * PhoneNumber [E164PhoneNumber](#e164phonenumber)

### UpdateContactResponse
* UpdateContactResponse `object`

### UpdateDeviceRequest
* UpdateDeviceRequest `object`
  * DeviceArn [Arn](#arn)
  * DeviceName [DeviceName](#devicename)

### UpdateDeviceResponse
* UpdateDeviceResponse `object`

### UpdateProfileRequest
* UpdateProfileRequest `object`
  * Address [Address](#address)
  * DistanceUnit [DistanceUnit](#distanceunit)
  * MaxVolumeLimit [MaxVolumeLimit](#maxvolumelimit)
  * PSTNEnabled [Boolean](#boolean)
  * ProfileArn [Arn](#arn)
  * ProfileName [ProfileName](#profilename)
  * SetupModeDisabled [Boolean](#boolean)
  * TemperatureUnit [TemperatureUnit](#temperatureunit)
  * Timezone [Timezone](#timezone)
  * WakeWord [WakeWord](#wakeword)

### UpdateProfileResponse
* UpdateProfileResponse `object`

### UpdateRoomRequest
* UpdateRoomRequest `object`
  * Description [RoomDescription](#roomdescription)
  * ProfileArn [Arn](#arn)
  * ProviderCalendarId [ProviderCalendarId](#providercalendarid)
  * RoomArn [Arn](#arn)
  * RoomName [RoomName](#roomname)

### UpdateRoomResponse
* UpdateRoomResponse `object`

### UpdateSkillGroupRequest
* UpdateSkillGroupRequest `object`
  * Description [SkillGroupDescription](#skillgroupdescription)
  * SkillGroupArn [Arn](#arn)
  * SkillGroupName [SkillGroupName](#skillgroupname)

### UpdateSkillGroupResponse
* UpdateSkillGroupResponse `object`

### UserData
* UserData `object`: Information related to a user.
  * Email [Email](#email)
  * EnrollmentId [EnrollmentId](#enrollmentid)
  * EnrollmentStatus [EnrollmentStatus](#enrollmentstatus)
  * FirstName [user_FirstName](#user_firstname)
  * LastName [user_LastName](#user_lastname)
  * UserArn [Arn](#arn)

### UserDataList
* UserDataList `array`
  * items [UserData](#userdata)

### UserId
* UserId `string`

### WakeWord
* WakeWord `string` (values: ALEXA, AMAZON, ECHO, COMPUTER)

### boolean
* boolean `boolean`

### user_FirstName
* user_FirstName `string`

### user_LastName
* user_LastName `string`

### user_UserId
* user_UserId `string`


