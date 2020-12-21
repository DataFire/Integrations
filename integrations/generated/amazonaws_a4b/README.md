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

.then(data => {
  console.log(data);
});
```

## Description

Alexa for Business helps you use Alexa in your organization. Alexa for Business provides you with the tools to manage Alexa devices, enroll your users, and assign skills, at scale. You can build your own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations. You can also make these available as private skills for your organization. Alexa for Business makes it efficient to voice-enable your products and services, thus providing context-aware voice experiences for your customers. Device makers building with the Alexa Voice Service (AVS) can create fully integrated solutions, register their products with Alexa for Business, and manage them as shared devices in their organization. 

## Actions

### ApproveSkill



```js
amazonaws_a4b.ApproveSkill({
  "SkillId": null
}, context)
```

#### Input
* input `object`
  * SkillId **required**

#### Output
* output [ApproveSkillResponse](#approveskillresponse)

### AssociateContactWithAddressBook



```js
amazonaws_a4b.AssociateContactWithAddressBook({
  "ContactArn": null,
  "AddressBookArn": null
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required**
  * ContactArn **required**

#### Output
* output [AssociateContactWithAddressBookResponse](#associatecontactwithaddressbookresponse)

### AssociateDeviceWithNetworkProfile



```js
amazonaws_a4b.AssociateDeviceWithNetworkProfile({
  "DeviceArn": null,
  "NetworkProfileArn": null
}, context)
```

#### Input
* input `object`
  * DeviceArn **required**
  * NetworkProfileArn **required**

#### Output
* output [AssociateDeviceWithNetworkProfileResponse](#associatedevicewithnetworkprofileresponse)

### AssociateDeviceWithRoom



```js
amazonaws_a4b.AssociateDeviceWithRoom({}, context)
```

#### Input
* input `object`
  * DeviceArn
  * RoomArn

#### Output
* output [AssociateDeviceWithRoomResponse](#associatedevicewithroomresponse)

### AssociateSkillGroupWithRoom



```js
amazonaws_a4b.AssociateSkillGroupWithRoom({}, context)
```

#### Input
* input `object`
  * RoomArn
  * SkillGroupArn

#### Output
* output [AssociateSkillGroupWithRoomResponse](#associateskillgroupwithroomresponse)

### AssociateSkillWithSkillGroup



```js
amazonaws_a4b.AssociateSkillWithSkillGroup({
  "SkillId": null
}, context)
```

#### Input
* input `object`
  * SkillGroupArn
  * SkillId **required**

#### Output
* output [AssociateSkillWithSkillGroupResponse](#associateskillwithskillgroupresponse)

### AssociateSkillWithUsers



```js
amazonaws_a4b.AssociateSkillWithUsers({
  "SkillId": null
}, context)
```

#### Input
* input `object`
  * SkillId **required**

#### Output
* output [AssociateSkillWithUsersResponse](#associateskillwithusersresponse)

### CreateAddressBook



```js
amazonaws_a4b.CreateAddressBook({
  "Name": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * Description
  * Name **required**

#### Output
* output [CreateAddressBookResponse](#createaddressbookresponse)

### CreateBusinessReportSchedule



```js
amazonaws_a4b.CreateBusinessReportSchedule({
  "Format": null,
  "ContentRange": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * ContentRange **required**
    * Interval **required**
  * Format **required**
  * Recurrence
    * StartDate
  * S3BucketName
  * S3KeyPrefix
  * ScheduleName
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateBusinessReportScheduleResponse](#createbusinessreportscheduleresponse)

### CreateConferenceProvider



```js
amazonaws_a4b.CreateConferenceProvider({
  "ConferenceProviderName": null,
  "ConferenceProviderType": null,
  "MeetingSetting": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * ConferenceProviderName **required**
  * ConferenceProviderType **required**
  * IPDialIn
    * CommsProtocol **required**
    * Endpoint **required**
  * MeetingSetting **required**
    * RequirePin **required**
  * PSTNDialIn
    * CountryCode **required**
    * OneClickIdDelay **required**
    * OneClickPinDelay **required**
    * PhoneNumber **required**

#### Output
* output [CreateConferenceProviderResponse](#createconferenceproviderresponse)

### CreateContact



```js
amazonaws_a4b.CreateContact({
  "FirstName": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DisplayName
  * FirstName **required**
  * LastName
  * PhoneNumber
  * PhoneNumbers
    * items [PhoneNumber](#phonenumber)
  * SipAddresses
    * items [SipAddress](#sipaddress)

#### Output
* output [CreateContactResponse](#createcontactresponse)

### CreateGatewayGroup



```js
amazonaws_a4b.CreateGatewayGroup({
  "Name": null,
  "ClientRequestToken": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken **required**
  * Description
  * Name **required**

#### Output
* output [CreateGatewayGroupResponse](#creategatewaygroupresponse)

### CreateNetworkProfile



```js
amazonaws_a4b.CreateNetworkProfile({
  "NetworkProfileName": null,
  "Ssid": null,
  "SecurityType": null,
  "ClientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn
  * ClientRequestToken **required** [ClientRequestToken](#clientrequesttoken)
  * CurrentPassword
  * Description
  * EapMethod
  * NetworkProfileName **required**
  * NextPassword
  * SecurityType **required**
  * Ssid **required**
  * TrustAnchors
    * items [TrustAnchor](#trustanchor)

#### Output
* output [CreateNetworkProfileResponse](#createnetworkprofileresponse)

### CreateProfile



```js
amazonaws_a4b.CreateProfile({
  "ProfileName": null,
  "Timezone": null,
  "Address": null,
  "DistanceUnit": null,
  "TemperatureUnit": null,
  "WakeWord": null
}, context)
```

#### Input
* input `object`
  * Address **required**
  * ClientRequestToken
  * DistanceUnit **required**
  * Locale
  * MaxVolumeLimit
  * MeetingRoomConfiguration
    * EndOfMeetingReminder [CreateEndOfMeetingReminder](#createendofmeetingreminder)
    * InstantBooking
      * DurationInMinutes **required**
      * Enabled **required**
    * RequireCheckIn
      * Enabled **required**
      * ReleaseAfterMinutes **required**
    * RoomUtilizationMetricsEnabled
  * PSTNEnabled
  * ProfileName **required**
  * SetupModeDisabled
  * Tags
    * items [Tag](#tag)
  * TemperatureUnit **required**
  * Timezone **required**
  * WakeWord **required**

#### Output
* output [CreateProfileResponse](#createprofileresponse)

### CreateRoom



```js
amazonaws_a4b.CreateRoom({
  "RoomName": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * Description
  * ProfileArn
  * ProviderCalendarId
  * RoomName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateRoomResponse](#createroomresponse)

### CreateSkillGroup



```js
amazonaws_a4b.CreateSkillGroup({
  "SkillGroupName": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * Description
  * SkillGroupName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateSkillGroupResponse](#createskillgroupresponse)

### CreateUser



```js
amazonaws_a4b.CreateUser({
  "UserId": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * Email
  * FirstName
  * LastName
  * Tags
    * items [Tag](#tag)
  * UserId **required**

#### Output
* output [CreateUserResponse](#createuserresponse)

### DeleteAddressBook



```js
amazonaws_a4b.DeleteAddressBook({
  "AddressBookArn": null
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required**

#### Output
* output [DeleteAddressBookResponse](#deleteaddressbookresponse)

### DeleteBusinessReportSchedule



```js
amazonaws_a4b.DeleteBusinessReportSchedule({
  "ScheduleArn": null
}, context)
```

#### Input
* input `object`
  * ScheduleArn **required**

#### Output
* output [DeleteBusinessReportScheduleResponse](#deletebusinessreportscheduleresponse)

### DeleteConferenceProvider



```js
amazonaws_a4b.DeleteConferenceProvider({
  "ConferenceProviderArn": null
}, context)
```

#### Input
* input `object`
  * ConferenceProviderArn **required**

#### Output
* output [DeleteConferenceProviderResponse](#deleteconferenceproviderresponse)

### DeleteContact



```js
amazonaws_a4b.DeleteContact({
  "ContactArn": null
}, context)
```

#### Input
* input `object`
  * ContactArn **required**

#### Output
* output [DeleteContactResponse](#deletecontactresponse)

### DeleteDevice



```js
amazonaws_a4b.DeleteDevice({
  "DeviceArn": null
}, context)
```

#### Input
* input `object`
  * DeviceArn **required**

#### Output
* output [DeleteDeviceResponse](#deletedeviceresponse)

### DeleteDeviceUsageData



```js
amazonaws_a4b.DeleteDeviceUsageData({
  "DeviceArn": null,
  "DeviceUsageType": null
}, context)
```

#### Input
* input `object`
  * DeviceArn **required**
  * DeviceUsageType **required**

#### Output
* output [DeleteDeviceUsageDataResponse](#deletedeviceusagedataresponse)

### DeleteGatewayGroup



```js
amazonaws_a4b.DeleteGatewayGroup({
  "GatewayGroupArn": null
}, context)
```

#### Input
* input `object`
  * GatewayGroupArn **required**

#### Output
* output [DeleteGatewayGroupResponse](#deletegatewaygroupresponse)

### DeleteNetworkProfile



```js
amazonaws_a4b.DeleteNetworkProfile({
  "NetworkProfileArn": null
}, context)
```

#### Input
* input `object`
  * NetworkProfileArn **required**

#### Output
* output [DeleteNetworkProfileResponse](#deletenetworkprofileresponse)

### DeleteProfile



```js
amazonaws_a4b.DeleteProfile({}, context)
```

#### Input
* input `object`
  * ProfileArn

#### Output
* output [DeleteProfileResponse](#deleteprofileresponse)

### DeleteRoom



```js
amazonaws_a4b.DeleteRoom({}, context)
```

#### Input
* input `object`
  * RoomArn

#### Output
* output [DeleteRoomResponse](#deleteroomresponse)

### DeleteRoomSkillParameter



```js
amazonaws_a4b.DeleteRoomSkillParameter({
  "SkillId": null,
  "ParameterKey": null
}, context)
```

#### Input
* input `object`
  * ParameterKey **required**
  * RoomArn
  * SkillId **required**

#### Output
* output [DeleteRoomSkillParameterResponse](#deleteroomskillparameterresponse)

### DeleteSkillAuthorization



```js
amazonaws_a4b.DeleteSkillAuthorization({
  "SkillId": null
}, context)
```

#### Input
* input `object`
  * RoomArn
  * SkillId **required**

#### Output
* output [DeleteSkillAuthorizationResponse](#deleteskillauthorizationresponse)

### DeleteSkillGroup



```js
amazonaws_a4b.DeleteSkillGroup({}, context)
```

#### Input
* input `object`
  * SkillGroupArn

#### Output
* output [DeleteSkillGroupResponse](#deleteskillgroupresponse)

### DeleteUser



```js
amazonaws_a4b.DeleteUser({
  "EnrollmentId": null
}, context)
```

#### Input
* input `object`
  * EnrollmentId **required**
  * UserArn

#### Output
* output [DeleteUserResponse](#deleteuserresponse)

### DisassociateContactFromAddressBook



```js
amazonaws_a4b.DisassociateContactFromAddressBook({
  "ContactArn": null,
  "AddressBookArn": null
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required**
  * ContactArn **required**

#### Output
* output [DisassociateContactFromAddressBookResponse](#disassociatecontactfromaddressbookresponse)

### DisassociateDeviceFromRoom



```js
amazonaws_a4b.DisassociateDeviceFromRoom({}, context)
```

#### Input
* input `object`
  * DeviceArn

#### Output
* output [DisassociateDeviceFromRoomResponse](#disassociatedevicefromroomresponse)

### DisassociateSkillFromSkillGroup



```js
amazonaws_a4b.DisassociateSkillFromSkillGroup({
  "SkillId": null
}, context)
```

#### Input
* input `object`
  * SkillGroupArn
  * SkillId **required**

#### Output
* output [DisassociateSkillFromSkillGroupResponse](#disassociateskillfromskillgroupresponse)

### DisassociateSkillFromUsers



```js
amazonaws_a4b.DisassociateSkillFromUsers({
  "SkillId": null
}, context)
```

#### Input
* input `object`
  * SkillId **required**

#### Output
* output [DisassociateSkillFromUsersResponse](#disassociateskillfromusersresponse)

### DisassociateSkillGroupFromRoom



```js
amazonaws_a4b.DisassociateSkillGroupFromRoom({}, context)
```

#### Input
* input `object`
  * RoomArn
  * SkillGroupArn

#### Output
* output [DisassociateSkillGroupFromRoomResponse](#disassociateskillgroupfromroomresponse)

### ForgetSmartHomeAppliances



```js
amazonaws_a4b.ForgetSmartHomeAppliances({
  "RoomArn": null
}, context)
```

#### Input
* input `object`
  * RoomArn **required**

#### Output
* output [ForgetSmartHomeAppliancesResponse](#forgetsmarthomeappliancesresponse)

### GetAddressBook



```js
amazonaws_a4b.GetAddressBook({
  "AddressBookArn": null
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required**

#### Output
* output [GetAddressBookResponse](#getaddressbookresponse)

### GetConferencePreference



```js
amazonaws_a4b.GetConferencePreference({}, context)
```

#### Input
* input `object`

#### Output
* output [GetConferencePreferenceResponse](#getconferencepreferenceresponse)

### GetConferenceProvider



```js
amazonaws_a4b.GetConferenceProvider({
  "ConferenceProviderArn": null
}, context)
```

#### Input
* input `object`
  * ConferenceProviderArn **required**

#### Output
* output [GetConferenceProviderResponse](#getconferenceproviderresponse)

### GetContact



```js
amazonaws_a4b.GetContact({
  "ContactArn": null
}, context)
```

#### Input
* input `object`
  * ContactArn **required**

#### Output
* output [GetContactResponse](#getcontactresponse)

### GetDevice



```js
amazonaws_a4b.GetDevice({}, context)
```

#### Input
* input `object`
  * DeviceArn

#### Output
* output [GetDeviceResponse](#getdeviceresponse)

### GetGateway



```js
amazonaws_a4b.GetGateway({
  "GatewayArn": null
}, context)
```

#### Input
* input `object`
  * GatewayArn **required**

#### Output
* output [GetGatewayResponse](#getgatewayresponse)

### GetGatewayGroup



```js
amazonaws_a4b.GetGatewayGroup({
  "GatewayGroupArn": null
}, context)
```

#### Input
* input `object`
  * GatewayGroupArn **required**

#### Output
* output [GetGatewayGroupResponse](#getgatewaygroupresponse)

### GetInvitationConfiguration



```js
amazonaws_a4b.GetInvitationConfiguration({}, context)
```

#### Input
* input `object`

#### Output
* output [GetInvitationConfigurationResponse](#getinvitationconfigurationresponse)

### GetNetworkProfile



```js
amazonaws_a4b.GetNetworkProfile({
  "NetworkProfileArn": null
}, context)
```

#### Input
* input `object`
  * NetworkProfileArn **required**

#### Output
* output [GetNetworkProfileResponse](#getnetworkprofileresponse)

### GetProfile



```js
amazonaws_a4b.GetProfile({}, context)
```

#### Input
* input `object`
  * ProfileArn

#### Output
* output [GetProfileResponse](#getprofileresponse)

### GetRoom



```js
amazonaws_a4b.GetRoom({}, context)
```

#### Input
* input `object`
  * RoomArn

#### Output
* output [GetRoomResponse](#getroomresponse)

### GetRoomSkillParameter



```js
amazonaws_a4b.GetRoomSkillParameter({
  "SkillId": null,
  "ParameterKey": null
}, context)
```

#### Input
* input `object`
  * ParameterKey **required**
  * RoomArn
  * SkillId **required**

#### Output
* output [GetRoomSkillParameterResponse](#getroomskillparameterresponse)

### GetSkillGroup



```js
amazonaws_a4b.GetSkillGroup({}, context)
```

#### Input
* input `object`
  * SkillGroupArn

#### Output
* output [GetSkillGroupResponse](#getskillgroupresponse)

### ListBusinessReportSchedules



```js
amazonaws_a4b.ListBusinessReportSchedules({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListBusinessReportSchedulesResponse](#listbusinessreportschedulesresponse)

### ListConferenceProviders



```js
amazonaws_a4b.ListConferenceProviders({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListConferenceProvidersResponse](#listconferenceprovidersresponse)

### ListDeviceEvents



```js
amazonaws_a4b.ListDeviceEvents({
  "DeviceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DeviceArn **required**
  * EventType
  * MaxResults
  * NextToken

#### Output
* output [ListDeviceEventsResponse](#listdeviceeventsresponse)

### ListGatewayGroups



```js
amazonaws_a4b.ListGatewayGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListGatewayGroupsResponse](#listgatewaygroupsresponse)

### ListGateways



```js
amazonaws_a4b.ListGateways({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * GatewayGroupArn
  * MaxResults
  * NextToken

#### Output
* output [ListGatewaysResponse](#listgatewaysresponse)

### ListSkills



```js
amazonaws_a4b.ListSkills({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EnablementType
  * MaxResults
  * NextToken
  * SkillGroupArn
  * SkillType

#### Output
* output [ListSkillsResponse](#listskillsresponse)

### ListSkillsStoreCategories



```js
amazonaws_a4b.ListSkillsStoreCategories({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListSkillsStoreCategoriesResponse](#listskillsstorecategoriesresponse)

### ListSkillsStoreSkillsByCategory



```js
amazonaws_a4b.ListSkillsStoreSkillsByCategory({
  "CategoryId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CategoryId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListSkillsStoreSkillsByCategoryResponse](#listskillsstoreskillsbycategoryresponse)

### ListSmartHomeAppliances



```js
amazonaws_a4b.ListSmartHomeAppliances({
  "RoomArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * RoomArn **required**

#### Output
* output [ListSmartHomeAppliancesResponse](#listsmarthomeappliancesresponse)

### ListTags



```js
amazonaws_a4b.ListTags({
  "Arn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Arn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListTagsResponse](#listtagsresponse)

### PutConferencePreference



```js
amazonaws_a4b.PutConferencePreference({
  "ConferencePreference": null
}, context)
```

#### Input
* input `object`
  * ConferencePreference **required**
    * DefaultConferenceProviderArn

#### Output
* output [PutConferencePreferenceResponse](#putconferencepreferenceresponse)

### PutInvitationConfiguration



```js
amazonaws_a4b.PutInvitationConfiguration({
  "OrganizationName": null
}, context)
```

#### Input
* input `object`
  * ContactEmail
  * OrganizationName **required**
  * PrivateSkillIds
    * items [SkillId](#skillid)

#### Output
* output [PutInvitationConfigurationResponse](#putinvitationconfigurationresponse)

### PutRoomSkillParameter



```js
amazonaws_a4b.PutRoomSkillParameter({
  "SkillId": null,
  "RoomSkillParameter": null
}, context)
```

#### Input
* input `object`
  * RoomArn
  * RoomSkillParameter **required**
    * ParameterKey **required**
    * ParameterValue **required**
  * SkillId **required**

#### Output
* output [PutRoomSkillParameterResponse](#putroomskillparameterresponse)

### PutSkillAuthorization



```js
amazonaws_a4b.PutSkillAuthorization({
  "AuthorizationResult": null,
  "SkillId": null
}, context)
```

#### Input
* input `object`
  * AuthorizationResult **required**
  * RoomArn
  * SkillId **required**

#### Output
* output [PutSkillAuthorizationResponse](#putskillauthorizationresponse)

### RegisterAVSDevice



```js
amazonaws_a4b.RegisterAVSDevice({
  "ClientId": null,
  "UserCode": null,
  "ProductId": null,
  "AmazonId": null
}, context)
```

#### Input
* input `object`
  * AmazonId **required**
  * ClientId **required**
  * DeviceSerialNumber
  * ProductId **required**
  * RoomArn
  * UserCode **required**

#### Output
* output [RegisterAVSDeviceResponse](#registeravsdeviceresponse)

### RejectSkill



```js
amazonaws_a4b.RejectSkill({
  "SkillId": null
}, context)
```

#### Input
* input `object`
  * SkillId **required**

#### Output
* output [RejectSkillResponse](#rejectskillresponse)

### ResolveRoom



```js
amazonaws_a4b.ResolveRoom({
  "UserId": null,
  "SkillId": null
}, context)
```

#### Input
* input `object`
  * SkillId **required**
  * UserId **required**

#### Output
* output [ResolveRoomResponse](#resolveroomresponse)

### RevokeInvitation



```js
amazonaws_a4b.RevokeInvitation({}, context)
```

#### Input
* input `object`
  * EnrollmentId
  * UserArn

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
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

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
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

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
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

#### Output
* output [SearchDevicesResponse](#searchdevicesresponse)

### SearchNetworkProfiles



```js
amazonaws_a4b.SearchNetworkProfiles({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

#### Output
* output [SearchNetworkProfilesResponse](#searchnetworkprofilesresponse)

### SearchProfiles



```js
amazonaws_a4b.SearchProfiles({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

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
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

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
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

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
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

#### Output
* output [SearchUsersResponse](#searchusersresponse)

### SendAnnouncement



```js
amazonaws_a4b.SendAnnouncement({
  "RoomFilters": null,
  "Content": null,
  "ClientRequestToken": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken **required**
  * Content **required**
    * AudioList
      * items [Audio](#audio)
    * SsmlList
      * items [Ssml](#ssml)
    * TextList
      * items [Text](#text)
  * RoomFilters **required**
    * items [Filter](#filter)
  * TimeToLiveInSeconds

#### Output
* output [SendAnnouncementResponse](#sendannouncementresponse)

### SendInvitation



```js
amazonaws_a4b.SendInvitation({}, context)
```

#### Input
* input `object`
  * UserArn

#### Output
* output [SendInvitationResponse](#sendinvitationresponse)

### StartDeviceSync



```js
amazonaws_a4b.StartDeviceSync({
  "Features": null
}, context)
```

#### Input
* input `object`
  * DeviceArn
  * Features **required**
    * items [Feature](#feature)
  * RoomArn

#### Output
* output [StartDeviceSyncResponse](#startdevicesyncresponse)

### StartSmartHomeApplianceDiscovery



```js
amazonaws_a4b.StartSmartHomeApplianceDiscovery({
  "RoomArn": null
}, context)
```

#### Input
* input `object`
  * RoomArn **required**

#### Output
* output [StartSmartHomeApplianceDiscoveryResponse](#startsmarthomeappliancediscoveryresponse)

### TagResource



```js
amazonaws_a4b.TagResource({
  "Arn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * Arn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_a4b.UntagResource({
  "Arn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * Arn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateAddressBook



```js
amazonaws_a4b.UpdateAddressBook({
  "AddressBookArn": null
}, context)
```

#### Input
* input `object`
  * AddressBookArn **required**
  * Description
  * Name

#### Output
* output [UpdateAddressBookResponse](#updateaddressbookresponse)

### UpdateBusinessReportSchedule



```js
amazonaws_a4b.UpdateBusinessReportSchedule({
  "ScheduleArn": null
}, context)
```

#### Input
* input `object`
  * Format
  * Recurrence
    * StartDate
  * S3BucketName
  * S3KeyPrefix
  * ScheduleArn **required**
  * ScheduleName

#### Output
* output [UpdateBusinessReportScheduleResponse](#updatebusinessreportscheduleresponse)

### UpdateConferenceProvider



```js
amazonaws_a4b.UpdateConferenceProvider({
  "ConferenceProviderArn": null,
  "ConferenceProviderType": null,
  "MeetingSetting": null
}, context)
```

#### Input
* input `object`
  * ConferenceProviderArn **required**
  * ConferenceProviderType **required**
  * IPDialIn
    * CommsProtocol **required**
    * Endpoint **required**
  * MeetingSetting **required**
    * RequirePin **required**
  * PSTNDialIn
    * CountryCode **required**
    * OneClickIdDelay **required**
    * OneClickPinDelay **required**
    * PhoneNumber **required**

#### Output
* output [UpdateConferenceProviderResponse](#updateconferenceproviderresponse)

### UpdateContact



```js
amazonaws_a4b.UpdateContact({
  "ContactArn": null
}, context)
```

#### Input
* input `object`
  * ContactArn **required**
  * DisplayName
  * FirstName
  * LastName
  * PhoneNumber
  * PhoneNumbers
    * items [PhoneNumber](#phonenumber)
  * SipAddresses
    * items [SipAddress](#sipaddress)

#### Output
* output [UpdateContactResponse](#updatecontactresponse)

### UpdateDevice



```js
amazonaws_a4b.UpdateDevice({}, context)
```

#### Input
* input `object`
  * DeviceArn
  * DeviceName

#### Output
* output [UpdateDeviceResponse](#updatedeviceresponse)

### UpdateGateway



```js
amazonaws_a4b.UpdateGateway({
  "GatewayArn": null
}, context)
```

#### Input
* input `object`
  * Description
  * GatewayArn **required**
  * Name
  * SoftwareVersion

#### Output
* output [UpdateGatewayResponse](#updategatewayresponse)

### UpdateGatewayGroup



```js
amazonaws_a4b.UpdateGatewayGroup({
  "GatewayGroupArn": null
}, context)
```

#### Input
* input `object`
  * Description
  * GatewayGroupArn **required**
  * Name

#### Output
* output [UpdateGatewayGroupResponse](#updategatewaygroupresponse)

### UpdateNetworkProfile



```js
amazonaws_a4b.UpdateNetworkProfile({
  "NetworkProfileArn": null
}, context)
```

#### Input
* input `object`
  * CertificateAuthorityArn
  * CurrentPassword
  * Description
  * NetworkProfileArn **required**
  * NetworkProfileName
  * NextPassword
  * TrustAnchors
    * items [TrustAnchor](#trustanchor)

#### Output
* output [UpdateNetworkProfileResponse](#updatenetworkprofileresponse)

### UpdateProfile



```js
amazonaws_a4b.UpdateProfile({}, context)
```

#### Input
* input `object`
  * Address
  * DistanceUnit
  * IsDefault
  * Locale
  * MaxVolumeLimit
  * MeetingRoomConfiguration
    * EndOfMeetingReminder
      * Enabled
      * ReminderAtMinutes
        * items [Minutes](#minutes)
      * ReminderType
    * InstantBooking
      * DurationInMinutes
      * Enabled
    * RequireCheckIn
      * Enabled
      * ReleaseAfterMinutes
    * RoomUtilizationMetricsEnabled
  * PSTNEnabled
  * ProfileArn
  * ProfileName
  * SetupModeDisabled
  * TemperatureUnit
  * Timezone
  * WakeWord

#### Output
* output [UpdateProfileResponse](#updateprofileresponse)

### UpdateRoom



```js
amazonaws_a4b.UpdateRoom({}, context)
```

#### Input
* input `object`
  * Description
  * ProfileArn
  * ProviderCalendarId
  * RoomArn
  * RoomName

#### Output
* output [UpdateRoomResponse](#updateroomresponse)

### UpdateSkillGroup



```js
amazonaws_a4b.UpdateSkillGroup({}, context)
```

#### Input
* input `object`
  * Description
  * SkillGroupArn
  * SkillGroupName

#### Output
* output [UpdateSkillGroupResponse](#updateskillgroupresponse)



## Definitions

### Address
* Address `string`

### AddressBook
* AddressBook `object`: An address book with attributes.
  * AddressBookArn
  * Description
  * Name

### AddressBookData
* AddressBookData `object`: Information related to an address book.
  * AddressBookArn
  * Description
  * Name

### AddressBookDataList
* AddressBookDataList `array`
  * items [AddressBookData](#addressbookdata)

### AddressBookDescription
* AddressBookDescription `string`

### AddressBookName
* AddressBookName `string`

### AlreadyExistsException


### AmazonId
* AmazonId `string`

### ApplianceDescription
* ApplianceDescription `string`

### ApplianceFriendlyName
* ApplianceFriendlyName `string`

### ApplianceManufacturerName
* ApplianceManufacturerName `string`

### ApproveSkillRequest
* ApproveSkillRequest `object`
  * SkillId **required**

### ApproveSkillResponse
* ApproveSkillResponse `object`

### Arn
* Arn `string`

### AssociateContactWithAddressBookRequest
* AssociateContactWithAddressBookRequest `object`
  * AddressBookArn **required**
  * ContactArn **required**

### AssociateContactWithAddressBookResponse
* AssociateContactWithAddressBookResponse `object`

### AssociateDeviceWithNetworkProfileRequest
* AssociateDeviceWithNetworkProfileRequest `object`
  * DeviceArn **required**
  * NetworkProfileArn **required**

### AssociateDeviceWithNetworkProfileResponse
* AssociateDeviceWithNetworkProfileResponse `object`

### AssociateDeviceWithRoomRequest
* AssociateDeviceWithRoomRequest `object`
  * DeviceArn
  * RoomArn

### AssociateDeviceWithRoomResponse
* AssociateDeviceWithRoomResponse `object`

### AssociateSkillGroupWithRoomRequest
* AssociateSkillGroupWithRoomRequest `object`
  * RoomArn
  * SkillGroupArn

### AssociateSkillGroupWithRoomResponse
* AssociateSkillGroupWithRoomResponse `object`

### AssociateSkillWithSkillGroupRequest
* AssociateSkillWithSkillGroupRequest `object`
  * SkillGroupArn
  * SkillId **required**

### AssociateSkillWithSkillGroupResponse
* AssociateSkillWithSkillGroupResponse `object`

### AssociateSkillWithUsersRequest
* AssociateSkillWithUsersRequest `object`
  * SkillId **required**

### AssociateSkillWithUsersResponse
* AssociateSkillWithUsersResponse `object`

### Audio
* Audio `object`: <p>The audio message. There is a 1 MB limit on the audio file input and the only supported format is MP3. To convert your MP3 audio files to an Alexa-friendly, </p> <p>required codec version (MPEG version 2) and bit rate (48 kbps), you might use converter software. One option for this is a command-line tool, FFmpeg. For more information, see <a href="https://www.ffmpeg.org/">FFmpeg</a>. The following command converts the provided &lt;input-file&gt; to an MP3 file that is played in the announcement:</p> <p> <code>ffmpeg -i &lt;input-file&gt; -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 &lt;output-file.mp3&gt;</code> </p>
  * Locale **required**
  * Location **required**

### AudioList
* AudioList `array`
  * items [Audio](#audio)

### AudioLocation
* AudioLocation `string`

### AuthorizationResult
* AuthorizationResult `object`

### Boolean
* Boolean `boolean`

### BulletPoint
* BulletPoint `string`

### BulletPoints
* BulletPoints `array`
  * items [BulletPoint](#bulletpoint)

### BusinessReport
* BusinessReport `object`: Usage report with specified parameters.
  * DeliveryTime
  * DownloadUrl
  * FailureCode
  * S3Location
    * BucketName
    * Path
  * Status

### BusinessReportContentRange
* BusinessReportContentRange `object`: The content range of the report.
  * Interval **required**

### BusinessReportDeliveryTime
* BusinessReportDeliveryTime `string`

### BusinessReportDownloadUrl
* BusinessReportDownloadUrl `string`

### BusinessReportFailureCode
* BusinessReportFailureCode `string` (values: ACCESS_DENIED, NO_SUCH_BUCKET, INTERNAL_FAILURE)

### BusinessReportFormat
* BusinessReportFormat `string` (values: CSV, CSV_ZIP)

### BusinessReportInterval
* BusinessReportInterval `string` (values: ONE_DAY, ONE_WEEK, THIRTY_DAYS)

### BusinessReportRecurrence
* BusinessReportRecurrence `object`: The recurrence of the reports.
  * StartDate

### BusinessReportS3Location
* BusinessReportS3Location `object`: The S3 location of the output reports.
  * BucketName
  * Path

### BusinessReportS3Path
* BusinessReportS3Path `string`

### BusinessReportSchedule
* BusinessReportSchedule `object`: The schedule of the usage report.
  * ContentRange
    * Interval **required**
  * Format
  * LastBusinessReport
    * DeliveryTime
    * DownloadUrl
    * FailureCode
    * S3Location
      * BucketName
      * Path
    * Status
  * Recurrence
    * StartDate
  * S3BucketName
  * S3KeyPrefix
  * ScheduleArn
  * ScheduleName

### BusinessReportScheduleList
* BusinessReportScheduleList `array`
  * items [BusinessReportSchedule](#businessreportschedule)

### BusinessReportScheduleName
* BusinessReportScheduleName `string`

### BusinessReportStatus
* BusinessReportStatus `string` (values: RUNNING, SUCCEEDED, FAILED)

### Category
* Category `object`: The skill store category that is shown. Alexa skills are assigned a specific skill category during creation, such as News, Social, and Sports.
  * CategoryId
  * CategoryName

### CategoryId
* CategoryId `integer`

### CategoryList
* CategoryList `array`
  * items [Category](#category)

### CategoryName
* CategoryName `string`

### CertificateTime
* CertificateTime `string`

### ClientId
* ClientId `string`

### ClientRequestToken
* ClientRequestToken `string`: A unique, user-specified identifier for the request that ensures idempotency.

### CommsProtocol
* CommsProtocol `string` (values: SIP, SIPS, H323)

### ConcurrentModificationException


### ConferencePreference
* ConferencePreference `object`: The default conference provider that is used if no other scheduled meetings are detected.
  * DefaultConferenceProviderArn

### ConferenceProvider
* ConferenceProvider `object`: An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom. 
  * Arn
  * IPDialIn
    * CommsProtocol **required**
    * Endpoint **required**
  * MeetingSetting
    * RequirePin **required**
  * Name
  * PSTNDialIn
    * CountryCode **required**
    * OneClickIdDelay **required**
    * OneClickPinDelay **required**
    * PhoneNumber **required**
  * Type

### ConferenceProviderName
* ConferenceProviderName `string`

### ConferenceProviderType
* ConferenceProviderType `string` (values: CHIME, BLUEJEANS, FUZE, GOOGLE_HANGOUTS, POLYCOM, RINGCENTRAL, SKYPE_FOR_BUSINESS, WEBEX, ZOOM, CUSTOM)

### ConferenceProvidersList
* ConferenceProvidersList `array`
  * items [ConferenceProvider](#conferenceprovider)

### ConnectionStatus
* ConnectionStatus `string` (values: ONLINE, OFFLINE)

### ConnectionStatusUpdatedTime
* ConnectionStatusUpdatedTime `string`

### Contact
* Contact `object`: A contact with attributes.
  * ContactArn
  * DisplayName
  * FirstName
  * LastName
  * PhoneNumber
  * PhoneNumbers
    * items [PhoneNumber](#phonenumber)
  * SipAddresses
    * items [SipAddress](#sipaddress)

### ContactData
* ContactData `object`: Information related to a contact.
  * ContactArn
  * DisplayName
  * FirstName
  * LastName
  * PhoneNumber
  * PhoneNumbers
    * items [PhoneNumber](#phonenumber)
  * SipAddresses
    * items [SipAddress](#sipaddress)

### ContactDataList
* ContactDataList `array`
  * items [ContactData](#contactdata)

### ContactName
* ContactName `string`

### Content
* Content `object`: The content definition. This can contain only one text, SSML, or audio list object.
  * AudioList
    * items [Audio](#audio)
  * SsmlList
    * items [Ssml](#ssml)
  * TextList
    * items [Text](#text)

### CountryCode
* CountryCode `string`

### CreateAddressBookRequest
* CreateAddressBookRequest `object`
  * ClientRequestToken
  * Description
  * Name **required**

### CreateAddressBookResponse
* CreateAddressBookResponse `object`
  * AddressBookArn

### CreateBusinessReportScheduleRequest
* CreateBusinessReportScheduleRequest `object`
  * ClientRequestToken
  * ContentRange **required**
    * Interval **required**
  * Format **required**
  * Recurrence
    * StartDate
  * S3BucketName
  * S3KeyPrefix
  * ScheduleName
  * Tags
    * items [Tag](#tag)

### CreateBusinessReportScheduleResponse
* CreateBusinessReportScheduleResponse `object`
  * ScheduleArn

### CreateConferenceProviderRequest
* CreateConferenceProviderRequest `object`
  * ClientRequestToken
  * ConferenceProviderName **required**
  * ConferenceProviderType **required**
  * IPDialIn
    * CommsProtocol **required**
    * Endpoint **required**
  * MeetingSetting **required**
    * RequirePin **required**
  * PSTNDialIn
    * CountryCode **required**
    * OneClickIdDelay **required**
    * OneClickPinDelay **required**
    * PhoneNumber **required**

### CreateConferenceProviderResponse
* CreateConferenceProviderResponse `object`
  * ConferenceProviderArn

### CreateContactRequest
* CreateContactRequest `object`
  * ClientRequestToken
  * DisplayName
  * FirstName **required**
  * LastName
  * PhoneNumber
  * PhoneNumbers
    * items [PhoneNumber](#phonenumber)
  * SipAddresses
    * items [SipAddress](#sipaddress)

### CreateContactResponse
* CreateContactResponse `object`
  * ContactArn

### CreateEndOfMeetingReminder
* CreateEndOfMeetingReminder `object`: Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.
  * Enabled **required**
  * ReminderAtMinutes **required**
    * items [Minutes](#minutes)
  * ReminderType **required**

### CreateGatewayGroupRequest
* CreateGatewayGroupRequest `object`
  * ClientRequestToken **required**
  * Description
  * Name **required**

### CreateGatewayGroupResponse
* CreateGatewayGroupResponse `object`
  * GatewayGroupArn

### CreateInstantBooking
* CreateInstantBooking `object`: Creates settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available.
  * DurationInMinutes **required**
  * Enabled **required**

### CreateMeetingRoomConfiguration
* CreateMeetingRoomConfiguration `object`: Creates meeting room settings of a room profile.
  * EndOfMeetingReminder [CreateEndOfMeetingReminder](#createendofmeetingreminder)
  * InstantBooking
    * DurationInMinutes **required**
    * Enabled **required**
  * RequireCheckIn
    * Enabled **required**
    * ReleaseAfterMinutes **required**
  * RoomUtilizationMetricsEnabled

### CreateNetworkProfileRequest
* CreateNetworkProfileRequest `object`
  * CertificateAuthorityArn
  * ClientRequestToken **required** [ClientRequestToken](#clientrequesttoken)
  * CurrentPassword
  * Description
  * EapMethod
  * NetworkProfileName **required**
  * NextPassword
  * SecurityType **required**
  * Ssid **required**
  * TrustAnchors
    * items [TrustAnchor](#trustanchor)

### CreateNetworkProfileResponse
* CreateNetworkProfileResponse `object`
  * NetworkProfileArn

### CreateProfileRequest
* CreateProfileRequest `object`
  * Address **required**
  * ClientRequestToken
  * DistanceUnit **required**
  * Locale
  * MaxVolumeLimit
  * MeetingRoomConfiguration
    * EndOfMeetingReminder [CreateEndOfMeetingReminder](#createendofmeetingreminder)
    * InstantBooking
      * DurationInMinutes **required**
      * Enabled **required**
    * RequireCheckIn
      * Enabled **required**
      * ReleaseAfterMinutes **required**
    * RoomUtilizationMetricsEnabled
  * PSTNEnabled
  * ProfileName **required**
  * SetupModeDisabled
  * Tags
    * items [Tag](#tag)
  * TemperatureUnit **required**
  * Timezone **required**
  * WakeWord **required**

### CreateProfileResponse
* CreateProfileResponse `object`
  * ProfileArn

### CreateRequireCheckIn
* CreateRequireCheckIn `object`: Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.
  * Enabled **required**
  * ReleaseAfterMinutes **required**

### CreateRoomRequest
* CreateRoomRequest `object`
  * ClientRequestToken
  * Description
  * ProfileArn
  * ProviderCalendarId
  * RoomName **required**
  * Tags
    * items [Tag](#tag)

### CreateRoomResponse
* CreateRoomResponse `object`
  * RoomArn

### CreateSkillGroupRequest
* CreateSkillGroupRequest `object`
  * ClientRequestToken
  * Description
  * SkillGroupName **required**
  * Tags
    * items [Tag](#tag)

### CreateSkillGroupResponse
* CreateSkillGroupResponse `object`
  * SkillGroupArn

### CreateUserRequest
* CreateUserRequest `object`
  * ClientRequestToken
  * Email
  * FirstName
  * LastName
  * Tags
    * items [Tag](#tag)
  * UserId **required**

### CreateUserResponse
* CreateUserResponse `object`
  * UserArn

### CurrentWiFiPassword
* CurrentWiFiPassword `string`

### CustomerS3BucketName
* CustomerS3BucketName `string`

### Date
* Date `string`

### DeleteAddressBookRequest
* DeleteAddressBookRequest `object`
  * AddressBookArn **required**

### DeleteAddressBookResponse
* DeleteAddressBookResponse `object`

### DeleteBusinessReportScheduleRequest
* DeleteBusinessReportScheduleRequest `object`
  * ScheduleArn **required**

### DeleteBusinessReportScheduleResponse
* DeleteBusinessReportScheduleResponse `object`

### DeleteConferenceProviderRequest
* DeleteConferenceProviderRequest `object`
  * ConferenceProviderArn **required**

### DeleteConferenceProviderResponse
* DeleteConferenceProviderResponse `object`

### DeleteContactRequest
* DeleteContactRequest `object`
  * ContactArn **required**

### DeleteContactResponse
* DeleteContactResponse `object`

### DeleteDeviceRequest
* DeleteDeviceRequest `object`
  * DeviceArn **required**

### DeleteDeviceResponse
* DeleteDeviceResponse `object`

### DeleteDeviceUsageDataRequest
* DeleteDeviceUsageDataRequest `object`
  * DeviceArn **required**
  * DeviceUsageType **required**

### DeleteDeviceUsageDataResponse
* DeleteDeviceUsageDataResponse `object`

### DeleteGatewayGroupRequest
* DeleteGatewayGroupRequest `object`
  * GatewayGroupArn **required**

### DeleteGatewayGroupResponse
* DeleteGatewayGroupResponse `object`

### DeleteNetworkProfileRequest
* DeleteNetworkProfileRequest `object`
  * NetworkProfileArn **required**

### DeleteNetworkProfileResponse
* DeleteNetworkProfileResponse `object`

### DeleteProfileRequest
* DeleteProfileRequest `object`
  * ProfileArn

### DeleteProfileResponse
* DeleteProfileResponse `object`

### DeleteRoomRequest
* DeleteRoomRequest `object`
  * RoomArn

### DeleteRoomResponse
* DeleteRoomResponse `object`

### DeleteRoomSkillParameterRequest
* DeleteRoomSkillParameterRequest `object`
  * ParameterKey **required**
  * RoomArn
  * SkillId **required**

### DeleteRoomSkillParameterResponse
* DeleteRoomSkillParameterResponse `object`

### DeleteSkillAuthorizationRequest
* DeleteSkillAuthorizationRequest `object`
  * RoomArn
  * SkillId **required**

### DeleteSkillAuthorizationResponse
* DeleteSkillAuthorizationResponse `object`

### DeleteSkillGroupRequest
* DeleteSkillGroupRequest `object`
  * SkillGroupArn

### DeleteSkillGroupResponse
* DeleteSkillGroupResponse `object`

### DeleteUserRequest
* DeleteUserRequest `object`
  * EnrollmentId **required**
  * UserArn

### DeleteUserResponse
* DeleteUserResponse `object`

### DeveloperInfo
* DeveloperInfo `object`: The details about the developer that published the skill.
  * DeveloperName
  * Email
  * PrivacyPolicy
  * Url

### DeveloperName
* DeveloperName `string`

### Device
* Device `object`: A device with attributes.
  * DeviceArn
  * DeviceName
  * DeviceSerialNumber
  * DeviceStatus
  * DeviceStatusInfo
    * ConnectionStatus
    * ConnectionStatusUpdatedTime
    * DeviceStatusDetails
      * items [DeviceStatusDetail](#devicestatusdetail)
  * DeviceType
  * MacAddress
  * NetworkProfileInfo
    * CertificateArn
    * CertificateExpirationTime
    * NetworkProfileArn
  * RoomArn
  * SoftwareVersion

### DeviceData
* DeviceData `object`: Device attributes.
  * CreatedTime
  * DeviceArn
  * DeviceName
  * DeviceSerialNumber
  * DeviceStatus
  * DeviceStatusInfo
    * ConnectionStatus
    * ConnectionStatusUpdatedTime
    * DeviceStatusDetails
      * items [DeviceStatusDetail](#devicestatusdetail)
  * DeviceType
  * MacAddress
  * NetworkProfileArn
  * NetworkProfileName
  * RoomArn
  * RoomName
  * SoftwareVersion

### DeviceDataCreatedTime
* DeviceDataCreatedTime `string`

### DeviceDataList
* DeviceDataList `array`
  * items [DeviceData](#devicedata)

### DeviceEvent
* DeviceEvent `object`: The list of device events.
  * Timestamp
  * Type
  * Value

### DeviceEventList
* DeviceEventList `array`
  * items [DeviceEvent](#deviceevent)

### DeviceEventTime
* DeviceEventTime `string`

### DeviceEventType
* DeviceEventType `string` (values: CONNECTION_STATUS, DEVICE_STATUS)

### DeviceEventValue
* DeviceEventValue `string`

### DeviceLocale
* DeviceLocale `string`

### DeviceName
* DeviceName `string`

### DeviceNetworkProfileInfo
* DeviceNetworkProfileInfo `object`: Detailed information about a device's network profile.
  * CertificateArn
  * CertificateExpirationTime
  * NetworkProfileArn

### DeviceNotRegisteredException


### DeviceRoomName
* DeviceRoomName `string`

### DeviceSerialNumber
* DeviceSerialNumber `string`

### DeviceSerialNumberForAVS
* DeviceSerialNumberForAVS `string`

### DeviceStatus
* DeviceStatus `string` (values: READY, PENDING, WAS_OFFLINE, DEREGISTERED, FAILED)

### DeviceStatusDetail
* DeviceStatusDetail `object`: Details of a device’s status.
  * Code
  * Feature

### DeviceStatusDetailCode
* DeviceStatusDetailCode `string` (values: DEVICE_SOFTWARE_UPDATE_NEEDED, DEVICE_WAS_OFFLINE, CREDENTIALS_ACCESS_FAILURE, TLS_VERSION_MISMATCH, ASSOCIATION_REJECTION, AUTHENTICATION_FAILURE, DHCP_FAILURE, INTERNET_UNAVAILABLE, DNS_FAILURE, UNKNOWN_FAILURE, CERTIFICATE_ISSUING_LIMIT_EXCEEDED, INVALID_CERTIFICATE_AUTHORITY, NETWORK_PROFILE_NOT_FOUND, INVALID_PASSWORD_STATE, PASSWORD_NOT_FOUND, PASSWORD_MANAGER_ACCESS_DENIED, CERTIFICATE_AUTHORITY_ACCESS_DENIED)

### DeviceStatusDetails
* DeviceStatusDetails `array`
  * items [DeviceStatusDetail](#devicestatusdetail)

### DeviceStatusInfo
* DeviceStatusInfo `object`: Detailed information about a device's status.
  * ConnectionStatus
  * ConnectionStatusUpdatedTime
  * DeviceStatusDetails
    * items [DeviceStatusDetail](#devicestatusdetail)

### DeviceType
* DeviceType `string`

### DeviceUsageType
* DeviceUsageType `string` (values: VOICE)

### DisassociateContactFromAddressBookRequest
* DisassociateContactFromAddressBookRequest `object`
  * AddressBookArn **required**
  * ContactArn **required**

### DisassociateContactFromAddressBookResponse
* DisassociateContactFromAddressBookResponse `object`

### DisassociateDeviceFromRoomRequest
* DisassociateDeviceFromRoomRequest `object`
  * DeviceArn

### DisassociateDeviceFromRoomResponse
* DisassociateDeviceFromRoomResponse `object`

### DisassociateSkillFromSkillGroupRequest
* DisassociateSkillFromSkillGroupRequest `object`
  * SkillGroupArn
  * SkillId **required**

### DisassociateSkillFromSkillGroupResponse
* DisassociateSkillFromSkillGroupResponse `object`

### DisassociateSkillFromUsersRequest
* DisassociateSkillFromUsersRequest `object`
  * SkillId **required**

### DisassociateSkillFromUsersResponse
* DisassociateSkillFromUsersResponse `object`

### DisassociateSkillGroupFromRoomRequest
* DisassociateSkillGroupFromRoomRequest `object`
  * RoomArn
  * SkillGroupArn

### DisassociateSkillGroupFromRoomResponse
* DisassociateSkillGroupFromRoomResponse `object`

### DistanceUnit
* DistanceUnit `string` (values: METRIC, IMPERIAL)

### Email
* Email `string`

### EnablementType
* EnablementType `string` (values: ENABLED, PENDING)

### EnablementTypeFilter
* EnablementTypeFilter `string` (values: ENABLED, PENDING)

### EndOfMeetingReminder
* EndOfMeetingReminder `object`: Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. 
  * Enabled
  * ReminderAtMinutes
    * items [Minutes](#minutes)
  * ReminderType

### EndOfMeetingReminderMinutesList
* EndOfMeetingReminderMinutesList `array`
  * items [Minutes](#minutes)

### EndOfMeetingReminderType
* EndOfMeetingReminderType `string` (values: ANNOUNCEMENT_TIME_CHECK, ANNOUNCEMENT_VARIABLE_TIME_LEFT, CHIME, KNOCK)

### EndUserLicenseAgreement
* EndUserLicenseAgreement `string`

### Endpoint
* Endpoint `string`

### EnrollmentId
* EnrollmentId `string`

### EnrollmentStatus
* EnrollmentStatus `string` (values: INITIALIZED, PENDING, REGISTERED, DISASSOCIATING, DEREGISTERING)

### Feature
* Feature `string` (values: BLUETOOTH, VOLUME, NOTIFICATIONS, LISTS, SKILLS, NETWORK_PROFILE, SETTINGS, ALL)

### Features
* Features `array`
  * items [Feature](#feature)

### Filter
* Filter `object`: A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria.
  * Key **required**
  * Values **required**
    * items [FilterValue](#filtervalue)

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

### ForgetSmartHomeAppliancesRequest
* ForgetSmartHomeAppliancesRequest `object`
  * RoomArn **required**

### ForgetSmartHomeAppliancesResponse
* ForgetSmartHomeAppliancesResponse `object`

### Gateway
* Gateway `object`: The details of the gateway. 
  * Arn
  * Description
  * GatewayGroupArn
  * Name
  * SoftwareVersion

### GatewayDescription
* GatewayDescription `string`

### GatewayGroup
* GatewayGroup `object`: The details of the gateway group.
  * Arn
  * Description
  * Name

### GatewayGroupDescription
* GatewayGroupDescription `string`

### GatewayGroupName
* GatewayGroupName `string`

### GatewayGroupSummaries
* GatewayGroupSummaries `array`
  * items [GatewayGroupSummary](#gatewaygroupsummary)

### GatewayGroupSummary
* GatewayGroupSummary `object`: The summary of a gateway group.
  * Arn
  * Description
  * Name

### GatewayName
* GatewayName `string`

### GatewaySummaries
* GatewaySummaries `array`
  * items [GatewaySummary](#gatewaysummary)

### GatewaySummary
* GatewaySummary `object`: The summary of a gateway.
  * Arn
  * Description
  * GatewayGroupArn
  * Name
  * SoftwareVersion

### GatewayVersion
* GatewayVersion `string`

### GenericKeyword
* GenericKeyword `string`

### GenericKeywords
* GenericKeywords `array`
  * items [GenericKeyword](#generickeyword)

### GetAddressBookRequest
* GetAddressBookRequest `object`
  * AddressBookArn **required**

### GetAddressBookResponse
* GetAddressBookResponse `object`
  * AddressBook
    * AddressBookArn
    * Description
    * Name

### GetConferencePreferenceRequest
* GetConferencePreferenceRequest `object`

### GetConferencePreferenceResponse
* GetConferencePreferenceResponse `object`
  * Preference
    * DefaultConferenceProviderArn

### GetConferenceProviderRequest
* GetConferenceProviderRequest `object`
  * ConferenceProviderArn **required**

### GetConferenceProviderResponse
* GetConferenceProviderResponse `object`
  * ConferenceProvider
    * Arn
    * IPDialIn
      * CommsProtocol **required**
      * Endpoint **required**
    * MeetingSetting
      * RequirePin **required**
    * Name
    * PSTNDialIn
      * CountryCode **required**
      * OneClickIdDelay **required**
      * OneClickPinDelay **required**
      * PhoneNumber **required**
    * Type

### GetContactRequest
* GetContactRequest `object`
  * ContactArn **required**

### GetContactResponse
* GetContactResponse `object`
  * Contact
    * ContactArn
    * DisplayName
    * FirstName
    * LastName
    * PhoneNumber
    * PhoneNumbers
      * items [PhoneNumber](#phonenumber)
    * SipAddresses
      * items [SipAddress](#sipaddress)

### GetDeviceRequest
* GetDeviceRequest `object`
  * DeviceArn

### GetDeviceResponse
* GetDeviceResponse `object`
  * Device
    * DeviceArn
    * DeviceName
    * DeviceSerialNumber
    * DeviceStatus
    * DeviceStatusInfo
      * ConnectionStatus
      * ConnectionStatusUpdatedTime
      * DeviceStatusDetails
        * items [DeviceStatusDetail](#devicestatusdetail)
    * DeviceType
    * MacAddress
    * NetworkProfileInfo
      * CertificateArn
      * CertificateExpirationTime
      * NetworkProfileArn
    * RoomArn
    * SoftwareVersion

### GetGatewayGroupRequest
* GetGatewayGroupRequest `object`
  * GatewayGroupArn **required**

### GetGatewayGroupResponse
* GetGatewayGroupResponse `object`
  * GatewayGroup [GatewayGroup](#gatewaygroup)

### GetGatewayRequest
* GetGatewayRequest `object`
  * GatewayArn **required**

### GetGatewayResponse
* GetGatewayResponse `object`
  * Gateway
    * Arn
    * Description
    * GatewayGroupArn
    * Name
    * SoftwareVersion

### GetInvitationConfigurationRequest
* GetInvitationConfigurationRequest `object`

### GetInvitationConfigurationResponse
* GetInvitationConfigurationResponse `object`
  * ContactEmail
  * OrganizationName
  * PrivateSkillIds
    * items [SkillId](#skillid)

### GetNetworkProfileRequest
* GetNetworkProfileRequest `object`
  * NetworkProfileArn **required**

### GetNetworkProfileResponse
* GetNetworkProfileResponse `object`
  * NetworkProfile
    * CertificateAuthorityArn
    * CurrentPassword
    * Description
    * EapMethod
    * NetworkProfileArn
    * NetworkProfileName
    * NextPassword
    * SecurityType
    * Ssid
    * TrustAnchors
      * items [TrustAnchor](#trustanchor)

### GetProfileRequest
* GetProfileRequest `object`
  * ProfileArn

### GetProfileResponse
* GetProfileResponse `object`
  * Profile
    * Address
    * AddressBookArn
    * DistanceUnit
    * IsDefault
    * Locale
    * MaxVolumeLimit
    * MeetingRoomConfiguration
      * EndOfMeetingReminder
        * Enabled
        * ReminderAtMinutes
          * items [Minutes](#minutes)
        * ReminderType
      * InstantBooking
        * DurationInMinutes
        * Enabled
      * RequireCheckIn
        * Enabled
        * ReleaseAfterMinutes
      * RoomUtilizationMetricsEnabled
    * PSTNEnabled
    * ProfileArn
    * ProfileName
    * SetupModeDisabled
    * TemperatureUnit
    * Timezone
    * WakeWord

### GetRoomRequest
* GetRoomRequest `object`
  * RoomArn

### GetRoomResponse
* GetRoomResponse `object`
  * Room
    * Description
    * ProfileArn
    * ProviderCalendarId
    * RoomArn
    * RoomName

### GetRoomSkillParameterRequest
* GetRoomSkillParameterRequest `object`
  * ParameterKey **required**
  * RoomArn
  * SkillId **required**

### GetRoomSkillParameterResponse
* GetRoomSkillParameterResponse `object`
  * RoomSkillParameter
    * ParameterKey **required**
    * ParameterValue **required**

### GetSkillGroupRequest
* GetSkillGroupRequest `object`
  * SkillGroupArn

### GetSkillGroupResponse
* GetSkillGroupResponse `object`
  * SkillGroup
    * Description
    * SkillGroupArn
    * SkillGroupName

### IPDialIn
* IPDialIn `object`: The IP endpoint and protocol for calling.
  * CommsProtocol **required**
  * Endpoint **required**

### IconUrl
* IconUrl `string`

### InstantBooking
* InstantBooking `object`: Settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available.
  * DurationInMinutes
  * Enabled

### InvalidCertificateAuthorityException


### InvalidDeviceException


### InvalidSecretsManagerResourceException


### InvalidServiceLinkedRoleStateException


### InvalidUserStatusException


### InvocationPhrase
* InvocationPhrase `string`

### Key
* Key `string`

### LimitExceededException


### ListBusinessReportSchedulesRequest
* ListBusinessReportSchedulesRequest `object`
  * MaxResults
  * NextToken

### ListBusinessReportSchedulesResponse
* ListBusinessReportSchedulesResponse `object`
  * BusinessReportSchedules
    * items [BusinessReportSchedule](#businessreportschedule)
  * NextToken

### ListConferenceProvidersRequest
* ListConferenceProvidersRequest `object`
  * MaxResults
  * NextToken

### ListConferenceProvidersResponse
* ListConferenceProvidersResponse `object`
  * ConferenceProviders
    * items [ConferenceProvider](#conferenceprovider)
  * NextToken

### ListDeviceEventsRequest
* ListDeviceEventsRequest `object`
  * DeviceArn **required**
  * EventType
  * MaxResults
  * NextToken

### ListDeviceEventsResponse
* ListDeviceEventsResponse `object`
  * DeviceEvents
    * items [DeviceEvent](#deviceevent)
  * NextToken

### ListGatewayGroupsRequest
* ListGatewayGroupsRequest `object`
  * MaxResults
  * NextToken

### ListGatewayGroupsResponse
* ListGatewayGroupsResponse `object`
  * GatewayGroups
    * items [GatewayGroupSummary](#gatewaygroupsummary)
  * NextToken

### ListGatewaysRequest
* ListGatewaysRequest `object`
  * GatewayGroupArn
  * MaxResults
  * NextToken

### ListGatewaysResponse
* ListGatewaysResponse `object`
  * Gateways
    * items [GatewaySummary](#gatewaysummary)
  * NextToken

### ListSkillsRequest
* ListSkillsRequest `object`
  * EnablementType
  * MaxResults
  * NextToken
  * SkillGroupArn
  * SkillType

### ListSkillsResponse
* ListSkillsResponse `object`
  * NextToken
  * SkillSummaries
    * items [SkillSummary](#skillsummary)

### ListSkillsStoreCategoriesRequest
* ListSkillsStoreCategoriesRequest `object`
  * MaxResults
  * NextToken

### ListSkillsStoreCategoriesResponse
* ListSkillsStoreCategoriesResponse `object`
  * CategoryList
    * items [Category](#category)
  * NextToken

### ListSkillsStoreSkillsByCategoryRequest
* ListSkillsStoreSkillsByCategoryRequest `object`
  * CategoryId **required**
  * MaxResults
  * NextToken

### ListSkillsStoreSkillsByCategoryResponse
* ListSkillsStoreSkillsByCategoryResponse `object`
  * NextToken
  * SkillsStoreSkills
    * items [SkillsStoreSkill](#skillsstoreskill)

### ListSmartHomeAppliancesRequest
* ListSmartHomeAppliancesRequest `object`
  * MaxResults
  * NextToken
  * RoomArn **required**

### ListSmartHomeAppliancesResponse
* ListSmartHomeAppliancesResponse `object`
  * NextToken
  * SmartHomeAppliances
    * items [SmartHomeAppliance](#smarthomeappliance)

### ListTagsRequest
* ListTagsRequest `object`
  * Arn **required**
  * MaxResults
  * NextToken

### ListTagsResponse
* ListTagsResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### Locale
* Locale `string` (values: en-US)

### MacAddress
* MacAddress `string`

### MaxResults
* MaxResults `integer`

### MaxVolumeLimit
* MaxVolumeLimit `integer`

### MeetingRoomConfiguration
* MeetingRoomConfiguration `object`: Meeting room settings of a room profile.
  * EndOfMeetingReminder
    * Enabled
    * ReminderAtMinutes
      * items [Minutes](#minutes)
    * ReminderType
  * InstantBooking
    * DurationInMinutes
    * Enabled
  * RequireCheckIn
    * Enabled
    * ReleaseAfterMinutes
  * RoomUtilizationMetricsEnabled

### MeetingSetting
* MeetingSetting `object`: <p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul>
  * RequirePin **required**

### Minutes
* Minutes `integer`

### NameInUseException


### NetworkEapMethod
* NetworkEapMethod `string` (values: EAP_TLS)

### NetworkProfile
* NetworkProfile `object`: The network profile associated with a device.
  * CertificateAuthorityArn
  * CurrentPassword
  * Description
  * EapMethod
  * NetworkProfileArn
  * NetworkProfileName
  * NextPassword
  * SecurityType
  * Ssid
  * TrustAnchors
    * items [TrustAnchor](#trustanchor)

### NetworkProfileData
* NetworkProfileData `object`: The data associated with a network profile.
  * CertificateAuthorityArn
  * Description
  * EapMethod
  * NetworkProfileArn
  * NetworkProfileName
  * SecurityType
  * Ssid

### NetworkProfileDataList
* NetworkProfileDataList `array`
  * items [NetworkProfileData](#networkprofiledata)

### NetworkProfileDescription
* NetworkProfileDescription `string`

### NetworkProfileName
* NetworkProfileName `string`

### NetworkSecurityType
* NetworkSecurityType `string` (values: OPEN, WEP, WPA_PSK, WPA2_PSK, WPA2_ENTERPRISE)

### NetworkSsid
* NetworkSsid `string`

### NewInThisVersionBulletPoints
* NewInThisVersionBulletPoints `array`
  * items [BulletPoint](#bulletpoint)

### NextToken
* NextToken `string`

### NextWiFiPassword
* NextWiFiPassword `string`

### NotFoundException


### OneClickIdDelay
* OneClickIdDelay `string`

### OneClickPinDelay
* OneClickPinDelay `string`

### OrganizationName
* OrganizationName `string`

### OutboundPhoneNumber
* OutboundPhoneNumber `string`

### PSTNDialIn
* PSTNDialIn `object`: The information for public switched telephone network (PSTN) conferencing.
  * CountryCode **required**
  * OneClickIdDelay **required**
  * OneClickPinDelay **required**
  * PhoneNumber **required**

### PhoneNumber
* PhoneNumber `object`: The phone number for the contact containing the raw number and phone number type.
  * Number **required**
  * Type **required**

### PhoneNumberList
* PhoneNumberList `array`
  * items [PhoneNumber](#phonenumber)

### PhoneNumberType
* PhoneNumberType `string` (values: MOBILE, WORK, HOME)

### PrivacyPolicy
* PrivacyPolicy `string`

### ProductDescription
* ProductDescription `string`

### ProductId
* ProductId `string`

### Profile
* Profile `object`: A room profile with attributes.
  * Address
  * AddressBookArn
  * DistanceUnit
  * IsDefault
  * Locale
  * MaxVolumeLimit
  * MeetingRoomConfiguration
    * EndOfMeetingReminder
      * Enabled
      * ReminderAtMinutes
        * items [Minutes](#minutes)
      * ReminderType
    * InstantBooking
      * DurationInMinutes
      * Enabled
    * RequireCheckIn
      * Enabled
      * ReleaseAfterMinutes
    * RoomUtilizationMetricsEnabled
  * PSTNEnabled
  * ProfileArn
  * ProfileName
  * SetupModeDisabled
  * TemperatureUnit
  * Timezone
  * WakeWord

### ProfileData
* ProfileData `object`: The data of a room profile.
  * Address
  * DistanceUnit
  * IsDefault
  * Locale
  * ProfileArn
  * ProfileName
  * TemperatureUnit
  * Timezone
  * WakeWord

### ProfileDataList
* ProfileDataList `array`
  * items [ProfileData](#profiledata)

### ProfileName
* ProfileName `string`

### ProviderCalendarId
* ProviderCalendarId `string`

### PutConferencePreferenceRequest
* PutConferencePreferenceRequest `object`
  * ConferencePreference **required**
    * DefaultConferenceProviderArn

### PutConferencePreferenceResponse
* PutConferencePreferenceResponse `object`

### PutInvitationConfigurationRequest
* PutInvitationConfigurationRequest `object`
  * ContactEmail
  * OrganizationName **required**
  * PrivateSkillIds
    * items [SkillId](#skillid)

### PutInvitationConfigurationResponse
* PutInvitationConfigurationResponse `object`

### PutRoomSkillParameterRequest
* PutRoomSkillParameterRequest `object`
  * RoomArn
  * RoomSkillParameter **required**
    * ParameterKey **required**
    * ParameterValue **required**
  * SkillId **required**

### PutRoomSkillParameterResponse
* PutRoomSkillParameterResponse `object`

### PutSkillAuthorizationRequest
* PutSkillAuthorizationRequest `object`
  * AuthorizationResult **required**
  * RoomArn
  * SkillId **required**

### PutSkillAuthorizationResponse
* PutSkillAuthorizationResponse `object`

### RawPhoneNumber
* RawPhoneNumber `string`

### RegisterAVSDeviceRequest
* RegisterAVSDeviceRequest `object`
  * AmazonId **required**
  * ClientId **required**
  * DeviceSerialNumber
  * ProductId **required**
  * RoomArn
  * UserCode **required**

### RegisterAVSDeviceResponse
* RegisterAVSDeviceResponse `object`
  * DeviceArn

### RejectSkillRequest
* RejectSkillRequest `object`
  * SkillId **required**

### RejectSkillResponse
* RejectSkillResponse `object`

### ReleaseDate
* ReleaseDate `string`

### RequireCheckIn
* RequireCheckIn `object`: Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. 
  * Enabled
  * ReleaseAfterMinutes

### RequirePin
* RequirePin `string` (values: YES, NO, OPTIONAL)

### ResolveRoomRequest
* ResolveRoomRequest `object`
  * SkillId **required**
  * UserId **required**

### ResolveRoomResponse
* ResolveRoomResponse `object`
  * RoomArn
  * RoomName
  * RoomSkillParameters
    * items [RoomSkillParameter](#roomskillparameter)

### ResourceAssociatedException


### ResourceInUseException


### ReviewKey
* ReviewKey `string`

### ReviewValue
* ReviewValue `string`

### Reviews
* Reviews `object`

### RevokeInvitationRequest
* RevokeInvitationRequest `object`
  * EnrollmentId
  * UserArn

### RevokeInvitationResponse
* RevokeInvitationResponse `object`

### Room
* Room `object`: A room with attributes.
  * Description
  * ProfileArn
  * ProviderCalendarId
  * RoomArn
  * RoomName

### RoomData
* RoomData `object`: The data of a room.
  * Description
  * ProfileArn
  * ProfileName
  * ProviderCalendarId
  * RoomArn
  * RoomName

### RoomDataList
* RoomDataList `array`
  * items [RoomData](#roomdata)

### RoomDescription
* RoomDescription `string`

### RoomName
* RoomName `string`

### RoomSkillParameter
* RoomSkillParameter `object`: A skill parameter associated with a room.
  * ParameterKey **required**
  * ParameterValue **required**

### RoomSkillParameterKey
* RoomSkillParameterKey `string`

### RoomSkillParameterValue
* RoomSkillParameterValue `string`

### RoomSkillParameters
* RoomSkillParameters `array`
  * items [RoomSkillParameter](#roomskillparameter)

### S3KeyPrefix
* S3KeyPrefix `string`

### SampleUtterances
* SampleUtterances `array`
  * items [Utterance](#utterance)

### SearchAddressBooksRequest
* SearchAddressBooksRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

### SearchAddressBooksResponse
* SearchAddressBooksResponse `object`
  * AddressBooks
    * items [AddressBookData](#addressbookdata)
  * NextToken
  * TotalCount

### SearchContactsRequest
* SearchContactsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

### SearchContactsResponse
* SearchContactsResponse `object`
  * Contacts
    * items [ContactData](#contactdata)
  * NextToken
  * TotalCount

### SearchDevicesRequest
* SearchDevicesRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

### SearchDevicesResponse
* SearchDevicesResponse `object`
  * Devices
    * items [DeviceData](#devicedata)
  * NextToken
  * TotalCount

### SearchNetworkProfilesRequest
* SearchNetworkProfilesRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

### SearchNetworkProfilesResponse
* SearchNetworkProfilesResponse `object`
  * NetworkProfiles
    * items [NetworkProfileData](#networkprofiledata)
  * NextToken
  * TotalCount

### SearchProfilesRequest
* SearchProfilesRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

### SearchProfilesResponse
* SearchProfilesResponse `object`
  * NextToken
  * Profiles
    * items [ProfileData](#profiledata)
  * TotalCount

### SearchRoomsRequest
* SearchRoomsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

### SearchRoomsResponse
* SearchRoomsResponse `object`
  * NextToken
  * Rooms
    * items [RoomData](#roomdata)
  * TotalCount

### SearchSkillGroupsRequest
* SearchSkillGroupsRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

### SearchSkillGroupsResponse
* SearchSkillGroupsResponse `object`
  * NextToken
  * SkillGroups
    * items [SkillGroupData](#skillgroupdata)
  * TotalCount

### SearchUsersRequest
* SearchUsersRequest `object`
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken
  * SortCriteria
    * items [Sort](#sort)

### SearchUsersResponse
* SearchUsersResponse `object`
  * NextToken
  * TotalCount
  * Users
    * items [UserData](#userdata)

### SendAnnouncementRequest
* SendAnnouncementRequest `object`
  * ClientRequestToken **required**
  * Content **required**
    * AudioList
      * items [Audio](#audio)
    * SsmlList
      * items [Ssml](#ssml)
    * TextList
      * items [Text](#text)
  * RoomFilters **required**
    * items [Filter](#filter)
  * TimeToLiveInSeconds

### SendAnnouncementResponse
* SendAnnouncementResponse `object`
  * AnnouncementArn

### SendInvitationRequest
* SendInvitationRequest `object`
  * UserArn

### SendInvitationResponse
* SendInvitationResponse `object`

### ShortDescription
* ShortDescription `string`

### ShortSkillIdList
* ShortSkillIdList `array`
  * items [SkillId](#skillid)

### SipAddress
* SipAddress `object`: The SIP address for the contact containing the URI and SIP address type.
  * Type **required**
  * Uri **required**

### SipAddressList
* SipAddressList `array`
  * items [SipAddress](#sipaddress)

### SipType
* SipType `string` (values: WORK)

### SipUri
* SipUri `string`

### SkillDetails
* SkillDetails `object`: Granular information about the skill.
  * BulletPoints
    * items [BulletPoint](#bulletpoint)
  * DeveloperInfo
    * DeveloperName
    * Email
    * PrivacyPolicy
    * Url
  * EndUserLicenseAgreement
  * GenericKeywords
    * items [GenericKeyword](#generickeyword)
  * InvocationPhrase
  * NewInThisVersionBulletPoints
    * items [BulletPoint](#bulletpoint)
  * ProductDescription
  * ReleaseDate
  * Reviews
  * SkillTypes
    * items [SkillStoreType](#skillstoretype)

### SkillGroup
* SkillGroup `object`: A skill group with attributes.
  * Description
  * SkillGroupArn
  * SkillGroupName

### SkillGroupData
* SkillGroupData `object`: The attributes of a skill group.
  * Description
  * SkillGroupArn
  * SkillGroupName

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

### SkillNotLinkedException


### SkillStoreType
* SkillStoreType `string`

### SkillSummary
* SkillSummary `object`: The summary of skills.
  * EnablementType
  * SkillId
  * SkillName
  * SkillType
  * SupportsLinking

### SkillSummaryList
* SkillSummaryList `array`
  * items [SkillSummary](#skillsummary)

### SkillType
* SkillType `string` (values: PUBLIC, PRIVATE)

### SkillTypeFilter
* SkillTypeFilter `string` (values: PUBLIC, PRIVATE, ALL)

### SkillTypes
* SkillTypes `array`
  * items [SkillStoreType](#skillstoretype)

### SkillsStoreSkill
* SkillsStoreSkill `object`: The detailed information about an Alexa skill.
  * IconUrl
  * SampleUtterances
    * items [Utterance](#utterance)
  * ShortDescription
  * SkillDetails
    * BulletPoints
      * items [BulletPoint](#bulletpoint)
    * DeveloperInfo
      * DeveloperName
      * Email
      * PrivacyPolicy
      * Url
    * EndUserLicenseAgreement
    * GenericKeywords
      * items [GenericKeyword](#generickeyword)
    * InvocationPhrase
    * NewInThisVersionBulletPoints
      * items [BulletPoint](#bulletpoint)
    * ProductDescription
    * ReleaseDate
    * Reviews
    * SkillTypes
      * items [SkillStoreType](#skillstoretype)
  * SkillId
  * SkillName
  * SupportsLinking

### SkillsStoreSkillList
* SkillsStoreSkillList `array`
  * items [SkillsStoreSkill](#skillsstoreskill)

### SmartHomeAppliance
* SmartHomeAppliance `object`: A smart home appliance that can connect to a central system. Any domestic device can be a smart appliance. 
  * Description
  * FriendlyName
  * ManufacturerName

### SmartHomeApplianceList
* SmartHomeApplianceList `array`
  * items [SmartHomeAppliance](#smarthomeappliance)

### SoftwareVersion
* SoftwareVersion `string`

### Sort
* Sort `object`: An object representing a sort criteria. 
  * Key **required**
  * Value **required**

### SortKey
* SortKey `string`

### SortList
* SortList `array`
  * items [Sort](#sort)

### SortValue
* SortValue `string` (values: ASC, DESC)

### Ssml
* Ssml `object`: The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>.
  * Locale **required**
  * Value **required**

### SsmlList
* SsmlList `array`
  * items [Ssml](#ssml)

### SsmlValue
* SsmlValue `string`

### StartDeviceSyncRequest
* StartDeviceSyncRequest `object`
  * DeviceArn
  * Features **required**
    * items [Feature](#feature)
  * RoomArn

### StartDeviceSyncResponse
* StartDeviceSyncResponse `object`

### StartSmartHomeApplianceDiscoveryRequest
* StartSmartHomeApplianceDiscoveryRequest `object`
  * RoomArn **required**

### StartSmartHomeApplianceDiscoveryResponse
* StartSmartHomeApplianceDiscoveryResponse `object`

### Tag
* Tag `object`: A key-value pair that can be associated with a resource. 
  * Key **required**
  * Value **required**

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
  * Arn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TemperatureUnit
* TemperatureUnit `string` (values: FAHRENHEIT, CELSIUS)

### Text
* Text `object`: The text message.
  * Locale **required**
  * Value **required**

### TextList
* TextList `array`
  * items [Text](#text)

### TextValue
* TextValue `string`

### TimeToLiveInSeconds
* TimeToLiveInSeconds `integer`

### Timezone
* Timezone `string`

### TotalCount
* TotalCount `integer`

### TrustAnchor
* TrustAnchor `string`

### TrustAnchorList
* TrustAnchorList `array`
  * items [TrustAnchor](#trustanchor)

### UnauthorizedException


### UntagResourceRequest
* UntagResourceRequest `object`
  * Arn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateAddressBookRequest
* UpdateAddressBookRequest `object`
  * AddressBookArn **required**
  * Description
  * Name

### UpdateAddressBookResponse
* UpdateAddressBookResponse `object`

### UpdateBusinessReportScheduleRequest
* UpdateBusinessReportScheduleRequest `object`
  * Format
  * Recurrence
    * StartDate
  * S3BucketName
  * S3KeyPrefix
  * ScheduleArn **required**
  * ScheduleName

### UpdateBusinessReportScheduleResponse
* UpdateBusinessReportScheduleResponse `object`

### UpdateConferenceProviderRequest
* UpdateConferenceProviderRequest `object`
  * ConferenceProviderArn **required**
  * ConferenceProviderType **required**
  * IPDialIn
    * CommsProtocol **required**
    * Endpoint **required**
  * MeetingSetting **required**
    * RequirePin **required**
  * PSTNDialIn
    * CountryCode **required**
    * OneClickIdDelay **required**
    * OneClickPinDelay **required**
    * PhoneNumber **required**

### UpdateConferenceProviderResponse
* UpdateConferenceProviderResponse `object`

### UpdateContactRequest
* UpdateContactRequest `object`
  * ContactArn **required**
  * DisplayName
  * FirstName
  * LastName
  * PhoneNumber
  * PhoneNumbers
    * items [PhoneNumber](#phonenumber)
  * SipAddresses
    * items [SipAddress](#sipaddress)

### UpdateContactResponse
* UpdateContactResponse `object`

### UpdateDeviceRequest
* UpdateDeviceRequest `object`
  * DeviceArn
  * DeviceName

### UpdateDeviceResponse
* UpdateDeviceResponse `object`

### UpdateEndOfMeetingReminder
* UpdateEndOfMeetingReminder `object`: Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. 
  * Enabled
  * ReminderAtMinutes
    * items [Minutes](#minutes)
  * ReminderType

### UpdateGatewayGroupRequest
* UpdateGatewayGroupRequest `object`
  * Description
  * GatewayGroupArn **required**
  * Name

### UpdateGatewayGroupResponse
* UpdateGatewayGroupResponse `object`

### UpdateGatewayRequest
* UpdateGatewayRequest `object`
  * Description
  * GatewayArn **required**
  * Name
  * SoftwareVersion

### UpdateGatewayResponse
* UpdateGatewayResponse `object`

### UpdateInstantBooking
* UpdateInstantBooking `object`: Updates settings for the instant booking feature that are applied to a room profile. If instant booking is enabled, Alexa automatically reserves a room if it is free when a user joins a meeting with Alexa.
  * DurationInMinutes
  * Enabled

### UpdateMeetingRoomConfiguration
* UpdateMeetingRoomConfiguration `object`: Updates meeting room settings of a room profile.
  * EndOfMeetingReminder
    * Enabled
    * ReminderAtMinutes
      * items [Minutes](#minutes)
    * ReminderType
  * InstantBooking
    * DurationInMinutes
    * Enabled
  * RequireCheckIn
    * Enabled
    * ReleaseAfterMinutes
  * RoomUtilizationMetricsEnabled

### UpdateNetworkProfileRequest
* UpdateNetworkProfileRequest `object`
  * CertificateAuthorityArn
  * CurrentPassword
  * Description
  * NetworkProfileArn **required**
  * NetworkProfileName
  * NextPassword
  * TrustAnchors
    * items [TrustAnchor](#trustanchor)

### UpdateNetworkProfileResponse
* UpdateNetworkProfileResponse `object`

### UpdateProfileRequest
* UpdateProfileRequest `object`
  * Address
  * DistanceUnit
  * IsDefault
  * Locale
  * MaxVolumeLimit
  * MeetingRoomConfiguration
    * EndOfMeetingReminder
      * Enabled
      * ReminderAtMinutes
        * items [Minutes](#minutes)
      * ReminderType
    * InstantBooking
      * DurationInMinutes
      * Enabled
    * RequireCheckIn
      * Enabled
      * ReleaseAfterMinutes
    * RoomUtilizationMetricsEnabled
  * PSTNEnabled
  * ProfileArn
  * ProfileName
  * SetupModeDisabled
  * TemperatureUnit
  * Timezone
  * WakeWord

### UpdateProfileResponse
* UpdateProfileResponse `object`

### UpdateRequireCheckIn
* UpdateRequireCheckIn `object`: Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. 
  * Enabled
  * ReleaseAfterMinutes

### UpdateRoomRequest
* UpdateRoomRequest `object`
  * Description
  * ProfileArn
  * ProviderCalendarId
  * RoomArn
  * RoomName

### UpdateRoomResponse
* UpdateRoomResponse `object`

### UpdateSkillGroupRequest
* UpdateSkillGroupRequest `object`
  * Description
  * SkillGroupArn
  * SkillGroupName

### UpdateSkillGroupResponse
* UpdateSkillGroupResponse `object`

### Url
* Url `string`

### UserCode
* UserCode `string`

### UserData
* UserData `object`: Information related to a user.
  * Email
  * EnrollmentId
  * EnrollmentStatus
  * FirstName
  * LastName
  * UserArn

### UserDataList
* UserDataList `array`
  * items [UserData](#userdata)

### UserId
* UserId `string`

### Utterance
* Utterance `string`

### Value
* Value `string`

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


