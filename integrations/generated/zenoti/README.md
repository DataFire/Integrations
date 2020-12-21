# @datafire/zenoti

Client library for Zenoti Open

## Installation and Usage
```bash
npm install --save @datafire/zenoti
```
```js
let zenoti = require('@datafire/zenoti').create({
  username: "",
  password: "",
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

Zenoti Open APIs now help you manage the powerful capabilities offered through a suite of Open APIs.



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
zenoti.oauthCallback({
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
zenoti.oauthRefresh(null, context)
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

### packages.packageId.get
Returns details of a package


```js
zenoti.packages.packageId.get({
  "centerId": "",
  "packageId": ""
}, context)
```

#### Input
* input `object`
  * centerId **required** `string`: DataType: UniqueIdentifier(GUID)
  * packageId **required** `string`: DataType: UniqueIdentifier(GUID)

#### Output
* output `object`

### v1.Catalog.Appointments.AvailableTimes.post
Returns the open slots for the requested date and service at the requested center. 
Optionally, you can request a specific therapist to perform a service. In this case, the API returns the available slots for that therapist.

To get the slots, one has to request the following:

| Key | Type | Description |
| -------- | -------- | -------- |
|  RequiredSlotsCount | int| No of Slots you would like to request |
|  CenterId `*` | GUID | Unique Identifier of a Center |
|  CenterDate `*` | YYYY-MM-DDThh:mm:ssZ| Date of the availability you would like to check |
|  SlotBookings `*` |Array of *`slotBooking`* object| Service id has to be passed inside SlotBookings object. Service Id is mandatory. Optionally, you can pass Therapist Id too. For more details, refer to *'SlotBooking'* object |


Note: Fields marked with  `*` are Mandatory. 

Example Request:

```
{
 "CenterId":"3af2cf2e-9d36-45ca-84bc-eb7a7ee4be0e",
 "CenterDate":"2017-10-25",
 "SlotBookings":[
 {
   "Services":[{
     "Service":{
       "Id":"ac3589f0-f3a0-4772-b2c5-f6e1c81312db"
     },
      "RequestedTherapist": {
                        "Id": "1a08e842-77c8-49b4-9d42-336c2dea4c0b"
     	
     }
   }]
 }]
}
```


```js
zenoti.v1.Catalog.Appointments.AvailableTimes.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** [GetCatalogAvaliableSlotsRequest](#getcatalogavaliableslotsrequest)

#### Output
* output `object`: Returns the ***ReservationId, SlotBookings, Open slots*** and ***error*** json blocks

### v1.Catalog.Appointments.ConfirmReservation.post
Returns the confirmed reservation.

Request body parameters:

| Fields | Value type | Description |
| -------- | -------- |  -------- |
| ReservationNotes  | string     | Optional Notes at the time of confirmation
| ApplyAutomaticMembership     | bool     | Set it to 'true' if you want to apply membership
| CenterId `*`    | GUID     | Unique Identifier of the center
| ReservationId  `*`   | GUID     | Unique Identifier of the Reservation from the ReserveSlots API Response
| BookingSource   | Enum - `Store = 0,Mobile = 1,Web = 2 `    | Source of the API caller


Note: Fields marked with `*` are mandatory.


```js
zenoti.v1.Catalog.Appointments.ConfirmReservation.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`

#### Output
* output `object`: Returns following Json fields.

### v1.Catalog.Appointments.ReserveSlots.post
Reserves slots for the Appointment based on CenterId, CenterTime, GuestId, ServiceId and optionally, TherapistId.

The following are the details of the request

| key | Value type | Description |
| -------- | -------- |  -------- |
|CreateInvoice| boolean| Set this to 'true' if you want Invoice to be created |
|  ForceApplyAutomaticMembership| boolean| Set this to 'true' if you want to apply membership of the user |
|  CenterId `*` | GUID| Unique Identifier of the center |
|  CenterTime `*` | YYYY-MM-DDThh:mm:ssZ| Your preferred time slot |
|  ReservationNotes | string| Optional notes during the reservation |
|  SlotBookings `*` |Array of *slotBooking* object| This must  contain ServiceId and GuestId. Refer to *slotBooking* for structure. You can optionally pass TherapistId

Note: Fields marked with `*` are mandatory.

Example Request : 
```
{
  "CreateInvoice": true,
  "ForceApplyAutomaticMembership": true,
 "CenterId":"3af2cf2e-9d36-45ca-84bc-eb7a7ee4be0e",
 "CenterTime": "2017-09-27T17:00:00",
 "SlotBookings":[
 {
   "GuestId": "e08a1e29-29b5-4757-abd6-6ed0a09b9f94",
   "Services":[{
     "Service":{
       "Id":"ac3589f0-f3a0-4772-b2c5-f6e1c81312db"
     },
     "RequestTherapistGender":3,
     "RequestedTherapist": {
                        "Id": "1a08e842-77c8-49b4-9d42-336c2dea4c0b"
     	
     }
   }]
 }]
}
```


```js
zenoti.v1.Catalog.Appointments.ReserveSlots.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`

#### Output
* output `object`: Returns a json containing the following:

### v1.Catalog.Appointments.AppointmentGroupId.Feedback.get
Gets Feedback for a AppointmentgroupId.


```js
zenoti.v1.Catalog.Appointments.AppointmentGroupId.Feedback.get({
  "AppointmentGroupId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * AppointmentGroupId **required** `string`

#### Output
* output `object`

### v1.Catalog.Appointments.AppointmentGroupId.Feedback.post
Creates Feedback for a AppointmentgroupId.


```js
zenoti.v1.Catalog.Appointments.AppointmentGroupId.Feedback.post({
  "body": {},
  "AppointmentGroupId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`: All of the below fields are nullable
  * AppointmentGroupId **required** `string`

#### Output
* output `object`

### v1.Catalog.Appointments.AppointmentId.AddOnService.post
Adds an Add on service To an Existing Appointment of the user.


```js
zenoti.v1.Catalog.Appointments.AppointmentId.AddOnService.post({
  "body": {},
  "AppointmentId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`: Service id of the requested add on service is given as a json.
  * AppointmentId **required** `string`

#### Output
* output `object`: returns the status of the add on service and appointment id of the add on service.

### v1.Catalog.Appointments.AppointmentId.Cancel.post
Changes the appointment status to cancelled and also returns a boolean for "IsCancelChargesApplied" feild.

Appointment status("Status" feild) of cancelled is -1.

|status|enum|
| -------- | -------- |
| NoShow | -2|
|Cancelled | -1|
|New | 0|
|Closed | 1|
|Checkin | 2|
|Confirm | 4|
| Break | 10|
|NotSpecified | 11|
|Available | 20|



```js
zenoti.v1.Catalog.Appointments.AppointmentId.Cancel.post({
  "body": {},
  "AppointmentId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`: Below are the Fields of input Json.
  * AppointmentId **required** `string`

#### Output
* output `object`: returns the status of the add on service and appointment id of the add on service.

### v1.Catalog.Appointments.AppointmentId.CustomData.Html.get
Gets the Html form for a particular AppointmentId


```js
zenoti.v1.Catalog.Appointments.AppointmentId.CustomData.Html.get({
  "AppointmentId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * AppointmentId **required** `string`

#### Output
* output `object`

### v1.Catalog.Appointments.AppointmentId.HtmlCustomData.get
Gets the Html form data for a particular AppointmentId


```js
zenoti.v1.Catalog.Appointments.AppointmentId.HtmlCustomData.get({
  "AppointmentId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * AppointmentId **required** `string`

#### Output
* output `object`: Description for the Json fields in the output Json

### v1.Catalog.Appointments.AppointmentId.HtmlCustomData.post
Creates a Html form data for a particular AppointmentId


```js
zenoti.v1.Catalog.Appointments.AppointmentId.HtmlCustomData.post({
  "body": {},
  "AppointmentId": ""
}, context)
```

#### Input
* input `object`
  * body **required** `object`: Description for the Json fields in the Input Json
  * AppointmentId **required** `string`

#### Output
* output `object`: Success field is a bool , confirms success of form being created.

### v1.Catalog.Appointments.ReservationId.CancelReservation.post
Cancels a Reservation.


```js
zenoti.v1.Catalog.Appointments.ReservationId.CancelReservation.post({
  "ReservationId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * ReservationId **required** `string`

#### Output
* output `object`: Returns following Json Fields

### v1.Catalog.Centers.get
Gets the list of centers in the organization. Optionally, you can pass one or more Service Ids to see the Service-Specific centers that are available.


```js
zenoti.v1.Catalog.Centers.get({}, context)
```

#### Input
* input `object`
  * ServiceIds `string`: List of Service Ids given separately. Each Service Id is a unique identifier
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output [CenterModel](#centermodel)

### v1.Catalog.Centers.Organization.get
Gets List of all the Centers in the Organization


```js
zenoti.v1.Catalog.Centers.Organization.get({}, context)
```

#### Input
* input `object`
  * CatalogEnabled `boolean`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output [CenterModel](#centermodel)

### v1.Catalog.Guests.CheckUserName.get
Check if the guest is already existing in the system based on UserName. UserName is mandatory


```js
zenoti.v1.Catalog.Guests.CheckUserName.get({}, context)
```

#### Input
* input `object`
  * userName `string`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output `object`: 

### v1.Catalog.Guests.ForgottenPassword.post
Get password reset link


```js
zenoti.v1.Catalog.Guests.ForgottenPassword.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`

#### Output
* output `object`

### v1.Catalog.Guests.Guest.GuestId.CreditCardsOnFile.get
Gets the Credit Cards on File for guest

Transaction Form

| Enum | Value |
| -------- | -------- |
| Web     | 1     |
| WebStore     | 2     |
| CheckWeb     | 4     |
| Mobile     | 8     |
| MobilePOS     | 16     |


```js
zenoti.v1.Catalog.Guests.Guest.GuestId.CreditCardsOnFile.get({
  "GuestId": "",
  "CenterId": "",
  "GuestId_path": ""
}, context)
```

#### Input
* input `object`
  * GuestId **required** `string`
  * CenterId **required** `string`
  * TransactionForm `integer`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * GuestId_path **required** `string`

#### Output
* output [GetCreditCardsOnFileResponse](#getcreditcardsonfileresponse)

### v1.Catalog.Guests.Guests.Memberships.UserMembershipId.get
Get balance details of a User MembershipId


```js
zenoti.v1.Catalog.Guests.Guests.Memberships.UserMembershipId.get({
  "UserMembershipId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * UserMembershipId **required** `string`

#### Output
* output `object`

### v1.Catalog.Guests.Guests.GuestId.get
Obtain profile details of a guest user.


```js
zenoti.v1.Catalog.Guests.Guests.GuestId.get({
  "GuestId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * GuestId **required** `string`

#### Output
* output [GetGuestResponse](#getguestresponse)

### v1.Catalog.Guests.Logout.post
Delete a token on logout


```js
zenoti.v1.Catalog.Guests.Logout.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`

#### Output
* output `object`

### v1.Catalog.Guests.LoyaltyPrograms.get
Gets the Loyalty Programs that the guest possesses. Additionally, it fetches the following details of Loyalty Programs:
| Id | Name | Balance |
| -------- | -------- | -------- |
| 61acbc7a-a37e-43ea-8a94-b1bf0aa6518e     | lp test     | 1987     |




```js
zenoti.v1.Catalog.Guests.LoyaltyPrograms.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### v1.Catalog.Guests.LoyaltyPrograms.Summary.get
Returns the summary of loyalty points of a guest. It contains the following:

1. Balance
1. TierName
1. StartDate
1. EnrollmentStatus
1. LPTierMaintainSpent
1. SpentTillNow
1. DowngradeDate
1. DirectEnrollment
1. ByPassDowngrade
1. RecentEnrollDate
1. PointsToSpendToStayInSameTierByDowngradeDate


```js
zenoti.v1.Catalog.Guests.LoyaltyPrograms.Summary.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### v1.Catalog.Guests.LoyaltyPrograms.ProgramId.get
Additional details of a particular Loyalty Program of a Guest by Program Id are returned, transaction wise.

* GuestId
* InvoiceId
* AppGroupId(AppointmentGroupId)
* CenterName
* ByPassDowngrade
* PointsDate
* RedemptionFrom
* RedemptionTo
* CreateDate
* Loyalty Program Details - Id, Name, Earned, Redeemed, Available


```js
zenoti.v1.Catalog.Guests.LoyaltyPrograms.ProgramId.get({
  "ProgramId": ""
}, context)
```

#### Input
* input `object`
  * ProgramId **required** `string`

#### Output
* output `object`

### v1.Catalog.Guests.PastAppointments.get
To get the list of past bookings for the logged in guest


```js
zenoti.v1.Catalog.Guests.PastAppointments.get({}, context)
```

#### Input
* input `object`
  * Page `integer`
  * Size `integer`
  * Sorters `string`
  * Filters `string`
  * startDate `string`
  * endDate `string`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output [GetPastAppointmentsResponse](#getpastappointmentsresponse)

### v1.Catalog.Guests.Register.post
Creates a new guest user account by providing the mandatory fields. First name and Last name are mandatory. According to your organization settings, email/phone number is mandatory to maintain uniqueness of the guest. Along side, the recent verificationId has to be passed in the request. CenterId is mandatory.

The request contains the following:



| Field | Value Type | Description |
| -------- | -------- | -------- |
| VerificationId   `*` | GUID     | VerificationId you get from OTP API
| CenterId  `*`   | GUID     | Unique Identifier. Guest should register at a center
| Guest   `*`  | `Guest Model` object     | FirstName, LastName, Gender, Mobile Number, Email, Password

Fields marked with `*` are mandatory.

Exapmle request :

```
{
  "VerificationId": "string",
  "CenterId": "string",
  "Guest": {
    "FirstName": "string",
    "LastName": "string",
    "Email": "string",
    "MobileNumber": "string",
    "MobilePhoneModel": {
      "CountryId": 0,
      "Number": "string",
      "DisplayNumber": "string"
    },
    "Gender": 0,
    "DateOfBirth": "2017-09-13T04:48:01.773Z",
    "AnniversaryDate": "2017-09-13T04:48:01.773Z",
    "Address1": "string",
    "Address2": "string",
    "City": "string",
    "PostalCode": "string",
    "State": {
      "Id": 0,
      "Code": "string",
      "Name": "string",
      "ShortName": "string"
    },
    "Country": {
      "Id": 0,
      "Code": "string",
      "Name": "string",
      "PhoneCode": 0,
      "Nationality": "string"
    },
    "Nationality": {
      "Id": 0,
      "Code": "string",
      "Name": "string",
      "PhoneCode": 0,
      "Nationality": "string"
    },
    "ReferralSource": {
      "Id": "string",
      "Name": "string"
    },
    "ReferredGuestId": "string",
    "ReceiveTransactionalSms": true,
    "ReceiveMarketingEmail": true,
    "ReceiveTransactionalEmail": true,
    "ReceiveMarketingSms": true,
    "DOB_IncompleteYear": "string",
    "Password": "string",
    "UserName": "string",
  }
}
```





```js
zenoti.v1.Catalog.Guests.Register.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`

#### Output
* output `object`

### v1.Catalog.Guests.SendOtp.post
Create OTP for a guest account verification

Example Request :

```
{
  "Email": "string",
  "Phone": {
    "CountryId": 0,
    "Number": "string",
    "DisplayNumber": "string"
  },
  "CenterId": "string"
}
```


```js
zenoti.v1.Catalog.Guests.SendOtp.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`

#### Output
* output `object`

### v1.Catalog.Guests.UpcomingAppointments.get
To get the list of future bookings for the logged in guest


```js
zenoti.v1.Catalog.Guests.UpcomingAppointments.get({}, context)
```

#### Input
* input `object`
  * Page `integer`
  * Size `integer`
  * Sorters `string`
  * Filters `string`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output [GetUpcomingAppointmentsResponse](#getupcomingappointmentsresponse)

### v1.Catalog.Guests.Update.post
Creates a new guest user account by providing an email address or through a Facebook sign-up.


```js
zenoti.v1.Catalog.Guests.Update.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`

#### Output
* output `object`

### v1.Catalog.Guests.VerifyOtp.post
Verify a guest account based on the generated OTP

Example Request :

```
{
  "VerificationId": "string",
  "OTP": "string",
  "CenterId": "string"
}
```


```js
zenoti.v1.Catalog.Guests.VerifyOtp.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`

#### Output
* output `object`

### v1.Catalog.Invoices.ApplyCampaign.post
Apply a Promo or Campaign given a Campaign Code


```js
zenoti.v1.Catalog.Invoices.ApplyCampaign.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * body **required** `object`: Input Json Fields

#### Output
* output [AppointmentGroupModel](#appointmentgroupmodel)

### v1.Catalog.Invoices.InvoiceId.get
Returns the requested invoice details. {InvoiceId} is a Unique Identifier and is mandatory.


```js
zenoti.v1.Catalog.Invoices.InvoiceId.get({
  "InvoiceId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * InvoiceId **required** `string`

#### Output
* output [AppointmentGroupModel](#appointmentgroupmodel)

### v1.Catalog.Organization.get
Gets Details of the Organization


```js
zenoti.v1.Catalog.Organization.get({}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output [OrganizationModel](#organizationmodel)

### v1.Catalog.Organization.Label.get
Gets Labels of the Organization


```js
zenoti.v1.Catalog.Organization.Label.get({}, context)
```

#### Input
* input `object`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output [OrganizationModel](#organizationmodel)

### v1.Catalog.Services.get
Gets the list of all the services available in a specific center.
If a service category is requested along, the services in that category are returned.


```js
zenoti.v1.Catalog.Services.get({
  "CenterId": ""
}, context)
```

#### Input
* input `object`
  * CenterId **required** `string`: Unique Identifier of the Selected Center
  * page `integer`: Page number of the results
  * size `integer`: Number of results in each page
  * defaultPage `integer`
  * defaultSize `integer`
  * Sorters `array`
  * filters `array`
  * CategoryId `string`: Unique Identifier of the Category
  * SearchString `string`
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output [CenterModel](#centermodel)

### v1.Catalog.Services.Categories.get
Gets the list of service categories that are used for grouping services into different areas such as hair or skin.
You can request categories under a particular center or a particular parent category


```js
zenoti.v1.Catalog.Services.Categories.get({}, context)
```

#### Input
* input `object`
  * CenterId `string`: Unique Identifier of the center
  * parentCategoryId `string`: Unqiue Identifier of Parent Category
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output [CenterModel](#centermodel)

### v1.Catalog.Services.ServiceId.get
Gets detailed information about a particular service. {ServiceId} is a Unique Identifer of a service.


```js
zenoti.v1.Catalog.Services.ServiceId.get({
  "CenterId": "",
  "ServiceId": ""
}, context)
```

#### Input
* input `object`
  * CenterId **required** `string`: Unique Identifier of the center
  * parentCategoryId `string`: Unique Identifier of the Category
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal
  * ServiceId **required** `string`

#### Output
* output [CenterModel](#centermodel)

### v1.Catalog.Therapists.get
Gets the available therapists for a specified time, service and center


```js
zenoti.v1.Catalog.Therapists.get({
  "CenterId": "",
  "searchString": ""
}, context)
```

#### Input
* input `object`
  * CenterId **required** `string`: Center Id
  * searchString **required** `string`: string
  * page `string`: Page number of the results
  * size `string`: Number of results in each page
  * defaultPage `string`
  * defaultSize `string`
  * Sorters `array`
  * filters `array`
  * ServiceId `string`: GUID
  * forDate `string`: YYYY-MM-DD
  * Authorization `string`: Security token
  * Apikey `string`: Issued Api key issued from apigee portal

#### Output
* output [CenterModel](#centermodel)

### v1.Collections.Center.CenterId.get





```js
zenoti.v1.Collections.Center.CenterId.get({
  "CenterId": ""
}, context)
```

#### Input
* input `object`
  * StartDate `string`
  * EndDate `string`
  * ShowTaxBreakUp `boolean`
  * Authorization `string`: Access Token
  * Content-Type `string`: Application/Json
  * CenterId **required** `string`

#### Output
* output [GetCenterCollectionsResponse](#getcentercollectionsresponse)

### v1.Collections.OnlineTransactions.CenterId.get
Below is the description of the enums used.

TransactionType - enum

| enum | value |
| -------- | -------- |
| All     | 0     |
| Authorize     | 1     |
| Refund     | 2     |
| Reversal     | 3     |
| Sale     | 4     |
| Voided |  5  |

TransactionStatus - enum

| feild | value |
| -------- | -------- |
| All     | 0     |
| CCCompleteNotYetSubmitted     | 1     |
| Error     | 2     |
| Failed     | 3     |
| Originated     | 4     |
| Pending     | 5     |
| Queued     | 6     |
| Returned     | 7     |
| Settled     | 8     |
| Success     | 9     |
| Voided     | 10     |

View - enum

| feild | value |
| -------- | -------- |
| Default     | 1     |
| Deposit     | 2     |




```js
zenoti.v1.Collections.OnlineTransactions.CenterId.get({
  "CenterId": ""
}, context)
```

#### Input
* input `object`
  * StartDate `string`
  * EndDate `string`
  * TransctionType `integer`: enum
  * TranctionStatus `integer`: enum
  * CardLogo `string`
  * View `integer`: enum
  * Authorization `string`: Access Token
  * Content-Type `string`: Application/Json
  * CenterId **required** `string`

#### Output
* output [GetOnlineTransactionResponse](#getonlinetransactionresponse)

### v1.Collections.PaymentGroups.get





```js
zenoti.v1.Collections.PaymentGroups.get({}, context)
```

#### Input
* input `object`
  * StartDate `string`
  * EndDate `string`
  * Page `integer`
  * Authorization `string`: Access Token
  * Content-Type `string`: Application/Json

#### Output
* output `object`

### v1.Collections.PaymentStatus.post
below is the example for request body

```
{
  "CenterId": "7f7ace7c-574a-4e7f-922a-388a9f59f2b5",
  "data": [
    {
      "PaymentID": 1,
      "Status": "sample string 2",
      "Amount": 3.0
    },
    {
      "PaymentID": 1,
      "Status": "sample string 2",
      "Amount": 3.0
    }
  ]
}
```




```js
zenoti.v1.Collections.PaymentStatus.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Access Token
  * Content-Type `string`: Application/Json
  * body **required** `object`

#### Output
* output `object`

### v1.Invoices.Add.post
Add an Invoice. Add Services, Memberships, Packages, GiftCards through creating an invoice.

Sample Request ( For Buying a membership):

{
  "Invoice": {
    "InvoiceMemberships": [
      {
        "AppointmentMembership": {
          "Membership": {
            "VersionId": "2431EBCB-097B-48AD-BE20-DAB1E979C145"
          },
          "Employee": {
            "Id": "6372bb51-e507-4431-b0cc-6be2143bb99a"
          },
          "Quantity": 1
        }
      }
    ]
  },
  "CenterId": "9a895b3c-1994-42c0-bc61-efda4a6e2828",
  "GuestId": "51c5d84b-a4db-4cd6-bb3e-0d410642da66",
  "IsForced": true,
  "Notes": "text"
}


```js
zenoti.v1.Invoices.Add.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * CenterId `string`: Unique Identifer
  * GuestId `string`: Unique Identifer
  * IsForced `boolean`: Invoice to be forced
  * Notes `string`: Any  notes to be required
  * Invoice `string`: Invoice model object
  * body **required** `object`: {

#### Output
* output `object`: {

### v1.Invoices.Checkout.post
Check out Invoice

Sample Request:

{
  "InvoiceId": "22b0d290-1284-4075-9439-9855bd18da27",
  "AppointmentGroupId": "aa979551-8f99-4aad-a833-f53096485bac"
}


```js
zenoti.v1.Invoices.Checkout.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`: {

#### Output
* output `object`: {

### v1.Invoices.InvoiceId.get
Get Invoice Details via Invoice Id


```js
zenoti.v1.Invoices.InvoiceId.get({
  "InvoiceId": ""
}, context)
```

#### Input
* input `object`
  * InvoiceId **required** `string`: Unique Identifier

#### Output
* output `object`: {

### v1.Revenues.InvoiceItem.CenterId.get

| ItemType | value |
| -------- | -------- |
| Service     | 0     |
| Product     | 2     |
| Membership     | 3     |
| Package     | 4     |
| Day Package     | 5     |
| Pre-Paid/GiftCard     | 6     |


```js
zenoti.v1.Revenues.InvoiceItem.CenterId.get({
  "CenterId": ""
}, context)
```

#### Input
* input `object`
  * StartDate `string`
  * EndDate `string`
  * ItemType `integer`
  * MembershipType `integer`
  * IncludeExpiredPackageRevenue `boolean`
  * ConsiderRefunds `boolean`
  * Authorization `string`: Access Token
  * Content-Type `string`: Application/Json
  * CenterId **required** `string`: UniqueIdentifier

#### Output
* output [GetRevenueInvoiceItemResponse](#getrevenueinvoiceitemresponse)

### v1.appointments.get
API returns a list of appointments based on multiple criterias provided by the caller. 


```js
zenoti.v1.appointments.get({
  "startdate": "",
  "enddate": ""
}, context)
```

#### Input
* input `object`
  * centerid `string`: Center id
  * startdate **required** `string`: Start date and time of the appointment
  * enddate **required** `string`: End date and time of the appointment
  * status `integer` (values: -2, -1, 0, 1, 2, 4, 10, 11, 20): Status of the appointment

#### Output
* output `array`
  * items [appointment](#appointment)

### AppointmentsApi_ConfirmReservation
API is used to create a confirmed appointment. It is expected that following information is sent as the request body.

```
{"CenterId":"adb0c9cd-5357-440d-8ee4-4557c6241271","ReservationId":"ab2549c1-aea3-476e-b16b-d856f4363b03"}
```

Security:
`API requires a security token of user with write permission on Appointments.`


```js
zenoti.AppointmentsApi_ConfirmReservation({
  "body": {}
}, context)
```

#### Input
* input `object`
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token
  * body **required** [ConfirmReservationRequest](#confirmreservationrequest)

#### Output
* output `object`

### v1.appointments.put
API is used to update the existing appointment.


```js
zenoti.v1.appointments.put({
  "body": {
    "appointment_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [appointment](#appointment)

#### Output
*Output schema unknown*

### v1.appointments.AddFeedback.post













```js
zenoti.v1.appointments.AddFeedback.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.AddNotes.post













```js
zenoti.v1.appointments.AddNotes.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.Admin.Sessions.get













```js
zenoti.v1.appointments.Admin.Sessions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### v1.appointments.Admin.Sessions.post
To enroll/register a guest for a session by Admin


```js
zenoti.v1.appointments.Admin.Sessions.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
*Output schema unknown*

### v1.appointments.ConfirmReservation.post
Example Request :
```
{
  "CenterId": "string",
  "ReservationId": "string",
  "BookingSource": 0,
  "HostId": "string",
  "SlotBookings": [
    {
      "GuestId": "string",
      "AppointmentGroupId": "string",
      "Services": [
        {
          "AppointmentId": "string",
          "InvoiceItemId": "string",
          "CartItemId": "string",
          "AppointmentSegmentId": "string",
          "PackageId": "string",
          "Package": {
            "Id": "string",
            "Name": "string",
            "Description": "string",
            "Code": "string",
            "Type": 1,
            "Price": {
              "CurrencyId": 0,
              "Sales": 0,
              "Tax": 0,
              "Final": 0,
              "Final1": 0,
              "Discount": 0,
              "Tip": 0,
              "SSG": 0,
              "RoundingCorrection": 0
            },
            "Services": [
              {
                "Id": "string",
                "Name": "string",
                "Price": {
                  "CurrencyId": 0,
                  "Sales": 0,
                  "Tax": 0,
                  "Final": 0,
                  "Final1": 0,
                  "Discount": 0,
                  "Tip": 0,
                  "SSG": 0,
                  "RoundingCorrection": 0
                },
                "Duration": 0,
                "CategoryId": "string",
                "IsAddOn": true,
                "HasAddOns": true,
                "AddOnToServiceId": "string",
                "CategoryName": "string",
                "AddOns": [
                  {}
                ],
                "IsVariant": true,
                "HasVariant": true,
                "ParentServiceId": "string",
                "CartItemId": "string"
              }
            ],
            "Items": [
              {
                "Type": 1,
                "Id": "string",
                "Name": "string",
                "Quantity": 0,
                "Order": 0,
                "Service": {
                  "Id": "string",
                  "Name": "string",
                  "Price": {
                    "CurrencyId": 0,
                    "Sales": 0,
                    "Tax": 0,
                    "Final": 0,
                    "Final1": 0,
                    "Discount": 0,
                    "Tip": 0,
                    "SSG": 0,
                    "RoundingCorrection": 0
                  },
                  "Duration": 0,
                  "CategoryId": "string",
                  "IsAddOn": true,
                  "HasAddOns": true,
                  "AddOnToServiceId": "string",
                  "CategoryName": "string",
                  "AddOns": [
                    {}
                  ],
                  "IsVariant": true,
                  "HasVariant": true,
                  "ParentServiceId": "string",
                  "CartItemId": "string"
                }
              }
            ]
          },
          "Service": {
            "Id": "string",
            "Name": "string",
            "Price": {
              "CurrencyId": 0,
              "Sales": 0,
              "Tax": 0,
              "Final": 0,
              "Final1": 0,
              "Discount": 0,
              "Tip": 0,
              "SSG": 0,
              "RoundingCorrection": 0
            },
            "Duration": 0,
            "CategoryId": "string",
            "IsAddOn": true,
            "HasAddOns": true,
            "AddOnToServiceId": "string",
            "CategoryName": "string",
            "AddOns": [
              {}
            ],
            "IsVariant": true,
            "HasVariant": true,
            "ParentServiceId": "string",
            "CartItemId": "string"
          },
          "RequestedTherapistGender": 0,
          "StartTime": "2017-09-04T04:51:31.647Z",
          "EndTime": "2017-09-04T04:51:31.647Z",
          "StartTimeInCenter": "2017-09-04T04:51:31.647Z",
          "EndTimeInCenter": "2017-09-04T04:51:31.647Z",
          "Room": {
            "Id": "string",
            "Name": "string"
          },
          "Lock": true,
          "Equipment": {
            "Id": "string",
            "Name": "string"
          },
          "Status": 0,
          "RequestedTherapist": {
            "Id": "string",
            "ShortName": "string",
            "NickName": "string",
            "FullName": "string",
            "Email": "string",
            "PhoneNumber": "string",
            "MobilePhoneModel": {
              "CountryId": 0,
              "Number": "string",
              "DisplayNumber": "string"
            },
            "Gender": 0,
            "FirstName": "string",
            "LastName": "string",
            "IsAvailable": true,
            "VanityImageUrl": "string",
            "ScalingFactor": 0,
            "ScaledPrice": 0,
            "ServiceTime": 0,
            "DisplayName": "string"
          },
          "Quantity": 0,
          "Price": {
            "CurrencyId": 0,
            "Sales": 0,
            "Tax": 0,
            "Final": 0,
            "Final1": 0,
            "Discount": 0,
            "Tip": 0,
            "SSG": 0,
            "RoundingCorrection": 0
          },
          "SCD": "string",
          "ActualStartTime": "2017-09-04T04:51:31.647Z",
          "CompletedTime": "2017-09-04T04:51:31.647Z",
          "Progress": 0,
          "ParentAppointmentId": "string",
          "ServiceCustomData": {
            "Permission": {
              "CanView": true,
              "CanEdit": true
            }
          },
          "ItemActions": "string",
          "EquivalenceFactor": 0,
          "EquivalentName": "string",
          "IsMembershipApplied": true,
          "IsAddOn": true,
          "AddonAppointmentId": "string",
          "IsPackageApplied": true,
          "IsDiscountApplied": true,
          "CanModifyTherapist": true
        }
      ],
      "TherapistId": "string",
      "RoomId": "string",
      "Quantity": 0,
      "BookingNotes": "string",
      "Price": {
        "CurrencyId": 0,
        "Sales": 0,
        "Tax": 0,
        "Final": 0,
        "Final1": 0,
        "Discount": 0,
        "Tip": 0,
        "SSG": 0,
        "RoundingCorrection": 0
      },
      "VirtualGuest": {
        "FirstName": "string",
        "LastName": "string",
        "Email": "string",
        "Mobile": {
          "CountryId": 0,
          "Number": "string",
          "DisplayNumber": "string"
        },
        "Gender": 0
      },
      "CartItemIds": [
        "string"
      ]
    }
  ]
}
```


```js
zenoti.v1.appointments.ConfirmReservation.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output [ConfirmReservationResponse](#confirmreservationresponse)

### v1.appointments.CustomData.post













```js
zenoti.v1.appointments.CustomData.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.Month.Year.Month.get













```js
zenoti.v1.appointments.Month.Year.Month.get({
  "Year": "",
  "Month": ""
}, context)
```

#### Input
* input `object`
  * Year **required** `string`
  * Month **required** `string`

#### Output
* output `object`

### v1.appointments.add.post
This API can be called to add an appointment.

Parameters


| Parameter  | Type | Description |
| -------- | -------- | -------- |
| AppointmentGroupId    | GUID     | Unique identifier for the appointment    ||
| Comments    | String     | Comments for No Show    |

Security:  Permissions required to call this API.











```js
zenoti.v1.appointments.add.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.alternatives.put
Update the appointment for the alternative


```js
zenoti.v1.appointments.alternatives.put({
  "body": {
    "appointment_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [appointment](#appointment)

#### Output
* output [appointment](#appointment)

### AppointmentsApi_GetAvailableSlotsV2
The API returns a list of available appointments. API expects that following information be passed in the Request body.

```
{"CenterId":"adb0c9cd-5357-440d-8ee4-4557c6241271","CenterDate":"2017-05-08","SlotBookings":[{"Services":[{"Service":{"Id":"8b15f00d-0594-4975-8d27-c88a3c64bfab"}}]}]}
```


Security:
`API requires a security token for a user with read permission on Appointments.`


```js
zenoti.AppointmentsApi_GetAvailableSlotsV2({
  "body": {}
}, context)
```

#### Input
* input `object`
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token
  * body **required** `object`

#### Output
* output [GetAvailableSlotsV2Response](#getavailableslotsv2response)

### v1.appointments.availabletimes.post













```js
zenoti.v1.appointments.availabletimes.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.bulkbookingGuestdetails.post













```js
zenoti.v1.appointments.bulkbookingGuestdetails.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.bulkbookingavailabletimes.post













```js
zenoti.v1.appointments.bulkbookingavailabletimes.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.bulkbookingconfirmreservation.post













```js
zenoti.v1.appointments.bulkbookingconfirmreservation.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.bulkbookingreserveslots.post













```js
zenoti.v1.appointments.bulkbookingreserveslots.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.cancel.post
This API can be  called to cancel an existing appointment.

Parameters


| Parameter  | Type | Description |
| -------- | -------- | -------- |
| AppointmentGroupId    | GUID     | Unique identifier for the appointment    |
| ReasonId    | INT     |  Reason for cancellation of appointment    |
| Comments    | String     | Comments for cancellation    |

Security:  Permissions required to call this API.











```js
zenoti.v1.appointments.cancel.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CancelAppointmentRequest](#cancelappointmentrequest)

#### Output
*Output schema unknown*

### v1.appointments.noshow.post
This API can be  called to Mark No Show for an existing appointment.

Parameters


| Parameter  | Type | Description |
| -------- | -------- | -------- |
| AppointmentGroupId    | GUID     | Unique identifier for the appointment    ||
| Comments    | String     | Comments for No Show    |

Security:  Permissions required to call this API.











```js
zenoti.v1.appointments.noshow.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.reebook.post
This API can be  called to cancel an existing appointment.

Parameters


| Parameter  | Type | Description |
| -------- | -------- | -------- |
| AppointmentGroupId    | GUID     | Unique identifier for the appointment    |
| ReasonId    | INT     |  Reason for cancellation of appointment    |
| Comments    | String     | Comments for cancellation    |

Security:  Permissions required to call this API.











```js
zenoti.v1.appointments.reebook.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.reserveslots.post













```js
zenoti.v1.appointments.reserveslots.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.setstatus.post
Below are the respective statuses for the value of the status tag in the input.

| status  | value  |
| -------- | -------- |
| New | 0 |
| Checkin     | 2     |
| Undo Checkin     | 0     |
| Confirm     | 4     |




```js
zenoti.v1.appointments.setstatus.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * API Key `string`: issued key
  * Authorization `string`: security token
  * body **required** `object`

#### Output
* output `object`

### AppointmentsApi_ReserveSlots
The API is used to reserve a temporary Appointment slot. API expects following information be sent in the Request body.

```
{"CenterId":"adb0c9cd-5357-440d-8ee4-4557c6241271","CenterTime":"2017-05-05 12:00:00","SlotBookings":[{"GuestId":"2e24d650-d7b4-473e-9bf3-b835c882cf35","Services":[{"Service":{"Id":"8b15f00d-0594-4975-8d27-c88a3c64bfab"}}],"StartTime":"2017-05-05 12:00:00"}]}
```

Security:
`API requires a security token for user with write permission on  Appointments.`


```js
zenoti.AppointmentsApi_ReserveSlots({
  "body": {}
}, context)
```

#### Input
* input `object`
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token
  * body **required** [ReserveSlotsRequest](#reserveslotsrequest)

#### Output
* output [ReserveSlotsResponse](#reserveslotsresponse)

### v1.appointments.update.post
This API can be  called to cancel an existing appointment.

Parameters


| Parameter  | Type | Description |
| -------- | -------- | -------- |
| AppointmentGroupId    | GUID     | Unique identifier for the appointment    |
| ReasonId    | INT     |  Reason for cancellation of appointment    |
| Comments    | String     | Comments for cancellation    |

Security:  Permissions required to call this API.











```js
zenoti.v1.appointments.update.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.updatebulkbookingGuestdetails.post













```js
zenoti.v1.appointments.updatebulkbookingGuestdetails.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v1.appointments.AppointmentFieldId.CustomDataFile.post













```js
zenoti.v1.appointments.AppointmentFieldId.CustomDataFile.post({
  "body": {},
  "AppointmentFieldId": ""
}, context)
```

#### Input
* input `object`
  * AppointmentId `string`: GUID
  * body **required** `object`
  * AppointmentFieldId **required** `string`

#### Output
* output `object`

### v1.appointments.AppointmentFieldValue.CustomDataImage.get













```js
zenoti.v1.appointments.AppointmentFieldValue.CustomDataImage.get({
  "AppointmentFieldValue": ""
}, context)
```

#### Input
* input `object`
  * AppointmentId `string`: GUID
  * AppointmentFieldValue **required** `string`

#### Output
* output `object`

### v1.appointments.AppointmentFieldValue.CustomDataImage.post
Uploads service custom data image for a given field. The file name should be of the format [field id].[extension] of image


```js
zenoti.v1.appointments.AppointmentFieldValue.CustomDataImage.post({
  "AppointmentFieldValue": ""
}, context)
```

#### Input
* input `object`
  * AppointmentFieldValue **required** `string`

#### Output
* output `object`

### v1.appointments.AppointmentFieldValue.UploadCustomDataImage.post
Uploads service custom data image for a given field. The file name should be of the format [field id].[extension] of image


```js
zenoti.v1.appointments.AppointmentFieldValue.UploadCustomDataImage.post({
  "AppointmentFieldValue": ""
}, context)
```

#### Input
* input `object`
  * AppointmentFieldValue **required** `string`

#### Output
* output `object`

### v1.appointments.AppointmentGroupId.setprogress.post
Below are the respective statuses for the value of the status tag in the input.

| status  | value  |
| New | 0 |
| Checkin     | 1     |
| Undo Checkin     | 2     |
| Confirm     | 3     |




```js
zenoti.v1.appointments.AppointmentGroupId.setprogress.post({
  "body": {},
  "AppointmentGroupId": ""
}, context)
```

#### Input
* input `object`
  * API Key `string`: issued key
  * Authorization `string`: security token
  * body **required** `object`
  * AppointmentGroupId **required** `string`

#### Output
* output `object`

### v1.appointments.AppointmentId.CustomData.get













```js
zenoti.v1.appointments.AppointmentId.CustomData.get({
  "AppointmentId": ""
}, context)
```

#### Input
* input `object`
  * AppointmentId **required** `string`

#### Output
* output `object`

### v1.appointments.AppointmentId.CustomData.History.get













```js
zenoti.v1.appointments.AppointmentId.CustomData.History.get({
  "AppointmentId": ""
}, context)
```

#### Input
* input `object`
  * AppointmentId **required** `string`

#### Output
* output `object`

### v1.appointments.AppointmentId.CustomData.AppointmentFieldId.Annotations.get













```js
zenoti.v1.appointments.AppointmentId.CustomData.AppointmentFieldId.Annotations.get({
  "AppointmentId": "",
  "AppointmentFieldId": ""
}, context)
```

#### Input
* input `object`
  * AppointmentId **required** `string`
  * AppointmentFieldId **required** `string`

#### Output
* output `object`

### v1.appointments.AppointmentId.SendMail.post













```js
zenoti.v1.appointments.AppointmentId.SendMail.post({
  "body": {},
  "AppointmentId": ""
}, context)
```

#### Input
* input `object`
  * AppointmentId_query `string`: GUID
  * body **required** `object`
  * AppointmentId **required** `string`

#### Output
* output `object`

### v1.appointments.appointmentgroupid.get
This API gets us an appointment group json object, which has the details of the appointment for the particular appointment group id.


```js
zenoti.v1.appointments.appointmentgroupid.get({
  "appointmentgroupid": ""
}, context)
```

#### Input
* input `object`
  * API key `string`: Issued API key
  * Authorization `string`: Security Token
  * appointmentgroupid **required** `string`

#### Output
* output [GetAppointmentGroupResponse](#getappointmentgroupresponse)

### v1.appointments.appointmentgroupid.invoice.get
Gets invoice Details for a particular appointment group id


```js
zenoti.v1.appointments.appointmentgroupid.invoice.get({
  "appointmentgroupid": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: security token
  * API Key `string`: issued API key
  * appointmentgroupid **required** `string`

#### Output
* output `object`

### CentersApi_GetCenters
API returns a list of Centers that the user is authorized to view.

Security:
`API requires a security token for a user with read permission on Centers.`


```js
zenoti.CentersApi_GetCenters({}, context)
```

#### Input
* input `object`
  * CatalogEnabled `boolean`: True  shows only catalog enabled values
  * ApiKey `string`: Issued API  key
  * Authorization `string`: Security token

#### Output
* output [GetCentersResponse](#getcentersresponse)

### CentersApi_GetCenterDetails
API returns the details of a specific center.

Security:
`API requires a security token for a user with read permission on Centers.`


```js
zenoti.CentersApi_GetCenterDetails({
  "CenterId": ""
}, context)
```

#### Input
* input `object`
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token
  * CenterId **required** `string`

#### Output
* output [GetCenterDetailsResponse](#getcenterdetailsresponse)

### v1.employees.post
fields that need to be unique : Code , UserName , Email


```js
zenoti.v1.employees.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * Authorization `string`: Token
  * body **required** [AddEmployeeDetailRequest](#addemployeedetailrequest)

#### Output
* output [AddEmployeeDetailResponse](#addemployeedetailresponse)

### v1.employees.performance.get
For providing the performance data for the employee.


```js
zenoti.v1.employees.performance.get({}, context)
```

#### Input
* input `object`
  * start_date `string`: Start Date to show the Employee performance report.
  * end_date `string`: EndDate till which the performance is to be displayed
  * employee_id `string`: Employee Id to provide the performance report for.
  * job_id `string`: Job id to filter out the employees with that job
  * center_id `string`: Center Id to check for
  * Authorization `string`: To authorize the api from unwanted calls

#### Output
* output `object`
  * employee_perfomances `array`
    * items [employee_performance](#employee_performance)
  * error [error](#error)

### v1.employees.sales.get
Get Sales report of employees


```js
zenoti.v1.employees.sales.get({
  "start_date": "",
  "end_date": ""
}, context)
```

#### Input
* input `object`
  * start_date **required** `string`: StartDate for the sales report to be calculated
  * end_date **required** `string`: EndDate for the sales report to be calculated
  * employee_id `string`: Employee id to provide report for
  * job_id `string`: JobId is to fetch for the employees with that job id.
  * center_id `string`: Center Id to look for
  * Authorization `string`: To Authorize the api calls

#### Output
* output `object`
  * employee_sales [employee_sales](#employee_sales)
  * error [error](#error)

### v1.employees.employee_id.payroll.get
Get the payroll report of the employee


```js
zenoti.v1.employees.employee_id.payroll.get({
  "employee_id": ""
}, context)
```

#### Input
* input `object`
  * start_date `string`: Start Date to get the payroll report for
  * end_date `string`: End Date to get the payroll report for
  * employee_id **required** `string`

#### Output
*Output schema unknown*

### v1.giftcards.giftcard_id.get
Get details of a giftcard. API accepts a giftcard_id to return the response. Giftcard_id refers to the unique identifier stored in Zenoti and is not the same as the giftcard number.

`Security:  A user who has read access to giftcards object can call this API to get giftcard details. User role must also have API Access permission.`

Note:  It is not secure to create a GET API that fetches giftcard details by passing giftcard number as either a path parameter or a query parameter, because this information may reside in browser history, and can be misused.  If we need an API that returns giftcard details by passing a giftcard number,  we will need to create a POST api that accepts giftcard number in the request body.


```js
zenoti.v1.giftcards.giftcard_id.get({
  "giftcard_id": ""
}, context)
```

#### Input
* input `object`
  * giftcard_id **required** `string`

#### Output
* output `object`
  * error [error](#error)
  * giftcard **required** [giftcard](#giftcard)

### GuestsApi_SearchGuests
This API returns a list of Guest objects that match one or more of the parameters listed below. For instance, if there is a need to check if a Guest already exists in the system based on an email, this API can help. 

```
a. UserCode
b. MobileNumber
c. Email
d. FirstName
e. LastName
```
										
In the response JSON, only the following fields have desired values, others are reserved for future use. 
                
```
a. Guest id - This is a GUID that refers to the guest. 
b. First name
c. Last name
d. Mobile phone model - DisplayNumber contains the full mobile number to use, other fields are reserved for future use.
e. Gender
f. Email
```
										
Return values: 
```
a. If request.count value is  not provided, the API returns a maximum of 100 records. 
b. If the search string doesn't match any guest, it will return 200 OK, with no guests in the response JSON
c. The results will be sorted on the basis of first name only
```

Security:
`API requires a security token of an admin user with read permission on Guests.`


```js
zenoti.GuestsApi_SearchGuests({}, context)
```

#### Input
* input `object`
  * request.centerId `string`: CenterId in GUID format
  * request.searchValue `string`: Search string across five different fields
  * request.count `integer`: Controls total number of records in results
  * request.page `integer`: Specific page count to be returned
  * request.size `integer`: Not used
  * request.sorters `array`: Fields on which results are sorted
  * request.filters `array`: Not used
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token

#### Output
* output [SearchGuestsResponse](#searchguestsresponse)

### GuestsApi_AddGuest
First name and Last name are always mandatory. Depending on the settings on your system, more fields will be mandatory - check the Add Guest page on your site (Loyalty→Manage Guests). One or more of the following may be set as mandatory:
```
a. Mobile number
b. Email
c. Birthday
d. Address1
e. City
f. State
g. Country
h. Nationality
i. Referral Source
j. Gender
```
 Please note that the API user has to send one of the following values for Gender:

 -1 - NotSpecified

 0 - Female

 1 - Male

  Validate = true should be passed at all time so that input can be validated.

Security:
`API requires a security token of an admin user with write permission on Guest.`


```js
zenoti.GuestsApi_AddGuest({
  "body": {}
}, context)
```

#### Input
* input `object`
  * ApiKey `string`: Issues API key
  * Authorization `string`: Security Token
  * body **required** [AddGuestRequest](#addguestrequest)

#### Output
* output [AddGuestResponse](#addguestresponse)

### GuestsApi_GetGuest
API can be used to obtain details of a particular Guest user by passing a GuestId.

Security:
`API requires security  token of an admin with read permission on Guest, or that of a user who has permission to read information for a particular Guest.`


```js
zenoti.GuestsApi_GetGuest({
  "guest_id": ""
}, context)
```

#### Input
* input `object`
  * request.type `integer` (values: 0, 1): User Type
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token
  * guest_id **required** `string`

#### Output
* output [GetGuestResponse](#getguestresponse)

### v1.guests.guest_id.put
API is used to perform update on the details of a guest. One or more values from below list can be updated.

| Parameter  | Data Type | Description |
| -------- | -------- | -------- |
| firstname    | string  |  First name of the guest   |
| middlename    | string  |  Middle name of the guest   |
| lastname    | string   |  Last name of the guest   |
| email*    | string   |  Email address of the guest   |
| password    | string   |  New password   |
| mobilephonemodel  | object  |  Refer to phone object definition. |
| homephonemodel  | object   |  Refer to phone object definition.  |
| gender  | string   |  male, female, other  |
| dateofbirth  | datetime   |  yyyy-mm-ddThh:mm:ss.SSSZ   |
| anniversarydate  | datetime   |  yyyy-mm-ddThh:mm:ss.SSSZ   |
| address1  | string   |  Address field |
| address2  | string   |  Address field  |
| city  |  string  |  City of the guest   |
| postalcode  |  string  |  Zip code  |
| state  |  object  |  Refer to state object definition in request body   |
| country  |  object  | Refer to country object definition in request body   |
| nationality  |  object  |  Refer to nationality object definition in  request body   |
| referralsource  |  object  |  Refer to referralsource object definition in request body   |
| referredguest_id  |  string  |   |
| receivetransactionalemail  |  boolean  |   |
| receivetransactionalsms  |  boolean  |   |
| receivemarketingemail  |  boolean  |   |
| receivemarketingsms  |  boolean  |   |
| creationdate  |  datetime  |   |
| updatedate  |  datetime  |   |
| center_id  |  string  |   |
| is_member  |  boolean  | Indicates if guest is a valid member.  |
| dob_incompleteyear  |  string  |  Date of birth without year information.  |

Security:  `Requires an authorization for read and write permission on the guest object. * Edit Email and Edit Mobile permission should be enabled for the user.`


API Specific Errors:

| Error Code | Error Message | Note |
| -------- | -------- | -------- |
| 503 | MissingInput | One or more required input is missing |
| 414 | GuestNotFound | Guest is not found |
| 441 | UserCodeAlreadyExists | Code already exists |
| 442 | UserEmailAlreadyExists | Email address already exists |
| 481 | GuestMandatoryFieldsMissing | Mandatory fields are missing |
| 482 | MobileNumberNotInLengthRange | Mobile  Number is outside the length range |
| 484 | CountryIsNotValid | Invalid code provided for the country |
| 484 | NationalityIsNotValid | Invalid code provided for the nationality |
| 484 | StateIsNotValid | Invalid code provided for the state |

Sample code:

```
{
  "guest": {
    "firstname": "TestGuest2SK",
    "middlename": "Changed",
    "lastname": "TestGuest1SK",
    "email": "TestGuest1SrK@zenoti.com",
    "mobilephonemodel": {
      "countryid": 91,
      "number": "9000498410"
    },
  "password":"changed1",
   "ReferralSource":{
     "Id":"3db2bb19-7430-4608-b34e-be44e64ac692"
   }
  }
}
```


```js
zenoti.v1.guests.guest_id.put({
  "body": {},
  "guest_id": ""
}, context)
```

#### Input
* input `object`
  * apikey `string`
  * authorization `string`
  * body **required** `object`
    * guest [guest](#guest)
  * guest_id **required** `string`

#### Output
* output `object`: Response body. 
  * guest [guest](#guest)

### v1.guests.guest_id.loyaltypoints.get
Get Guest Loyalty Points


```js
zenoti.v1.guests.guest_id.loyaltypoints.get({
  "guest_id": ""
}, context)
```

#### Input
* input `object`
  * guest_id **required** `string`

#### Output
* output `array`
  * items [guest_loyaltypoints](#guest_loyaltypoints)

### v1.guests.guest_id.notes.get
Returns notes associated with a guest

NoteType - enum


| enum | value |
| -------- | -------- |
| Generic     | 2     |
|Checkin | 3   |
| Booking     | 4     |
| Payment     |8    |
| Profile     | 10     |

Security: `Requires read permission on guest and notes. Guest can view only her information.`


```js
zenoti.v1.guests.guest_id.notes.get({
  "guest_id": ""
}, context)
```

#### Input
* input `object`
  * guest_id **required** `string`

#### Output
* output `array`
  * items [guest_notes](#guest_notes)

### v1.guests.guest_id.notes.post
Create a note associated with the guest.

NoteType - enum


| enum | value |
| -------- | -------- |
| Generic     | 2     |
|Checkin | 3   |
| Booking     | 4     |
| Payment     |8    |
| Profile     | 10     |



Security:`Write permission on notes object.`


```js
zenoti.v1.guests.guest_id.notes.post({
  "body": {},
  "guest_id": ""
}, context)
```

#### Input
* input `object`
  * body **required** [guest_notes](#guest_notes)
  * guest_id **required** `string`

#### Output
* output `object`
  * IsNoteAdded `string`
  * Note [guest_notes](#guest_notes)

### v1.guests.guest_id.notes.note_id.delete
Delete a note associated with the guest.

Security:`Write permission on notes object.`


```js
zenoti.v1.guests.guest_id.notes.note_id.delete({
  "guest_id": "",
  "note_id": ""
}, context)
```

#### Input
* input `object`
  * guest_id **required** `string`
  * note_id **required** `string`

#### Output
*Output schema unknown*

### v1.guests.guest_id.packages.get
Returns packages bought by a guest.

Security:  `Required read permission on the guest and packages object. Guest user can only view her information.`




```js
zenoti.v1.guests.guest_id.packages.get({
  "CenterId": "",
  "guest_id": ""
}, context)
```

#### Input
* input `object`
  * CenterId **required** `string`: Unique Identifier
  * InvoiceId `string`: Unique Identifier
  * guest_id **required** `string`

#### Output
* output `array`
  * items [guest_packages](#guest_packages)

### v1.otp.post
API is used to create an OTP associated with a provided email address or phone number.  Below are the samples. The user has to pass either email or phone number (but not both) in the  request body.

Case 1:  Generate OTP and send to email
```
{
  "CenterId": "3ECC3E05-8AAF-4792-BA0A-EC3D822FA6C5",
  "Email": "danjohn@zenoti.com"
}
```

Case 2: Genetate OTP and send to phone number.
```
{
   "CenterId": "3ECC3E05-8AAF-4792-BA0A-EC3D822FA6C5",
   "Phone": {
    "CountryId": 91,
    "Number": "3434443339",
    "DisplayNumber": "3434443339"
  }
}
```








```js
zenoti.v1.otp.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token
  * body **required** `object`

#### Output
* output `object`

### v1.otp.put
API can be used to check if the provided OTP matches with the issued OTP to a given email address or phone number.

PUT method has been used for security reasons. Following request has to be sent in the body.

```
{
  "VerificationId": "4d0cf94f-be9a-43b1-9b7b-8aab57fbc7e2",
  "OTP": "234954",
  "CenterId": "3ECC3E05-8AAF-4792-BA0A-EC3D822FA6C5"
}
```


```js
zenoti.v1.otp.put({
  "body": {}
}, context)
```

#### Input
* input `object`
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token
  * body **required** `object`

#### Output
* output `object`

### ServicesApi_GetServices
API returns a list of services. Following filter options are supported.

```
a. centerId - To return services in a particular center.
b. categoryId - To return services in a specified category only.
c. isCatalogEnabled - To return services that can be displayed in a webstore.
d. tag - To return services which are tagged by
```

Security:
`Required read permisson on Services`


```js
zenoti.ServicesApi_GetServices({}, context)
```

#### Input
* input `object`
  * request.centerId `string`: Id of the center
  * request.categoryId `string`: Id of a category
  * request.pageNum `integer`: Page number to be returned.
  * request.pageSize `integer`: Size of the page.
  * CatalogEnabled `boolean`: True shows only catalog enabled values
  * Tag `string`: Tag name
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token

#### Output
* output [GetServicesResponse](#getservicesresponse)

### ServicesApi_GetServiceCategories
API returns a list of main categories for the services. The API exposes following two filters.

```
a. centerId - To view the categories only for a particular center.
b. parentCategoryId - To view child categories of a particular main category.
```



Security:
`Requires read permisson on Services.`


```js
zenoti.ServicesApi_GetServiceCategories({}, context)
```

#### Input
* input `object`
  * request.centerId `string`: Id of a particular Center
  * request.parentCategoryId `string`: Id of parent category
  * CatalogEnabled `boolean`: True shows only catalog enabled values
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token

#### Output
* output [GetServiceCategoriesResponse](#getservicecategoriesresponse)

### ServicesApi_GetServiceDetail
Get details of a Service


```js
zenoti.ServicesApi_GetServiceDetail({
  "ServiceId": ""
}, context)
```

#### Input
* input `object`
  * ApiKey `string`: Issued API key
  * Authorization `string`: Security token
  * ServiceId **required** `string`

#### Output
* output [GetServiceDetailResponse](#getservicedetailresponse)

### v1.tokens.post
This API is used to create a token for a valid user. The token can subsequenty be used as a Authorization token for other API calls.
The request body should be a string in the below format. (grant_type should be passed as "password").

```
username={{username}}&password={{password}}&clientid={{clientid}}&grant_type={{grant_type}}
```

Note:  OAuth2 token is not required to be passed in the header. Only API key is required.


```js
zenoti.v1.tokens.post({
  "body": ""
}, context)
```

#### Input
* input `object`
  * ApiKey `string`: Issued API key
  * body **required** `string`

#### Output
* output `object`

### v2.0.appointments.availabletimes.post













```js
zenoti.v2.0.appointments.availabletimes.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
* output `object`

### v2.Organizations.Customfields.get
Get the custom fields of an organization


```js
zenoti.v2.Organizations.Customfields.get({}, context)
```

#### Input
* input `object`
  * custom_field_type `number`: 1-Service , 2 - Guest , 3 - Opportunity
  * active `number`: 0 - all, 1- active, 2 - inactive

#### Output
* output [GetOrganizationCustomFieldResponse](#getorganizationcustomfieldresponse)

### v2.appointments.get
Status - Enum

| Enum | Value |
| -------- | -------- |
| NoShow     | -2     |
| Cancelled     | -1     |
| New     | 0     |
| Closed     | 1    |
| Checkin     | 2     |
| Confirm     | 4     |
| Break     | 10    |
| NotSpecified     | 11     |
| Available     | 20     |


```js
zenoti.v2.appointments.get({
  "center_id": "",
  "start_date": "",
  "end_date": ""
}, context)
```

#### Input
* input `object`
  * center_id **required** `string`: DataType: UniqueIdentifier(GUID)
  * start_date **required** `string`: DataType: DateTime(YYYY-MM-DD)
  * end_date **required** `string`: DataType: DateTime(YYYY-MM-DD)
  * status `number`: | Enum | Value |
  * guest_id `string`: DataType: UniqueIdentifier(GUID)
  * therapist_id `string`: DataType: UniqueIdentifier(GUID)

#### Output
* output `object`

### v2.guests.guestId.memberships.get
Returns membership information of a guest.

Security: `Read permission on guest and memberships.  Guest can only view her information.`


```js
zenoti.v2.guests.guestId.memberships.get({
  "guestId": ""
}, context)
```

#### Input
* input `object`
  * guestId **required** `string`

#### Output
* output `array`
  * items [guest_memberships](#guest_memberships)

### v2.guests.guest_id.customdata.get
Returns custom data of a guest.

Security:`Write permission on the custom data.`


```js
zenoti.v2.guests.guest_id.customdata.get({
  "guest_id": ""
}, context)
```

#### Input
* input `object`
  * guest_id **required** `string`

#### Output
* output `object`
  * guestcustomdata `array`
    * items [guest_customdata](#guest_customdata)
  * success `boolean`
  * total `integer`

### v2.guests.guest_id.customdata.post
Create Guest Custom Data


```js
zenoti.v2.guests.guest_id.customdata.post({
  "guest_id": ""
}, context)
```

#### Input
* input `object`
  * guest_id **required** `string`

#### Output
*Output schema unknown*

### v2.opportunities.get
Gives list of Opportunities based on the filter


```js
zenoti.v2.opportunities.get({
  "view_id": "",
  "page_num": 0,
  "records": 0
}, context)
```

#### Input
* input `object`
  * view_id **required** `string`: view_id : center_id or organization_Id  for center view or organization view respectively)
  * page_num **required** `number`: range: starts from 1
  * records **required** `number`: number of records per page
  * keywords `string`: searches on opportunity_title,opportunity_description,first_name , last_name and opportunity no(when the passed string is a valid number)
  * owner `string`: GUID of the employee who is owning the opportunity
  * type `string`
  * status_id `string`: GUID of the status of the Opportunity,
  * priority_id `string`: GUID of the priority of the Opportunity,
  * guest_id `string`: GUID of the guest of the Opportunity,
  * creation_from_date `string`: start date for filter on date range of creation_date(date on which the opportunity is created) ,
  * creation_to_date `string`: end date for filter on date range of creation_date(date on which the opportunity is created) ,
  * followup_from_date `string`: start date for filter on date range of followup_date (Data Type : DateTime (yyyy-mm-dd))
  * followup_to_date `string`: end date for filter on date range of followup_date (Data Type : DateTime (yyyy-mm-dd))
  * disposition_id `string`: GUID of the required Opportunity Disposition based on which the opportunities are filtered, DataType: Unique Identifier(GUID)
  * Authorization `string`: access token
  * Content-Type `string`: application/json

#### Output
* output [OpportunitiesCustomSearchResponse](#opportunitiescustomsearchresponse)

### v2.opportunities.post
Example Request:
```
{
	"center_id"  : "bcaf32ac-83a8-4988-8ebf-4a6d125835de",
	"opportunity_title" : "rda",
	"opportunity_description" : "hey its a good day",
	"opportunity_owner_id" : "ede781ef-7891-47b8-961e-a4729925431f",
	"guest_id" : "9dcd0709-74a8-48cd-9997-878e465f566d",
	"created_by_id" : "ede781ef-7891-47b8-961e-a4729925431f",
	"priority_type_id" : "E5196EC3-4E3C-4677-8AA2-B8E306F0FA5C",
	"status_id" : "5E61ACFD-CDE5-451E-B9BC-716B400453A4",
	"type" : "type",
	"followup_date" : "2016-12-15",
	"expected_close_date" : "2018-12-14",
	"listed_amount" : 1253,
	"offered_amount" : 1000,
	"optional_field_1" : "op1",
	"optional_field_2" : "op2",
	"optional_field_3" : "op3",
	"ticket_id" : "E5196EC3-1111-4677-8AA2-B8E306F0FA5C",
	"change_guest_center" : false,
	"disposition_id" : "5E61ACFD-CDE5-451E-B9BC-716B400453A4",
	 "custom_fields": {
		"ED727888-AE73-439E-AEF2-22E48A5AF3AF":"value1",
    "0fb8a958-682e-4025-adef-0bac63359e05":"value2"
	},
	"lead_source" : {
	"id" : "0fb8a958-682e-4025-adef-0bac63359e05",
	"code" : "GH103"
	}
}
```


```js
zenoti.v2.opportunities.post({
  "Authorization": "",
  "body": {
    "center_id": "",
    "followup_date": "",
    "guest_id": "",
    "opportunity_title": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: access token
  * Content-Type `string`: application/json
  * body **required** [CreateOpportunityRequest](#createopportunityrequest)

#### Output
* output `object`: 

### v2.opportunities.metadata.section.get
section : {
                   All or -1 ,
                   Priority or 1,
                   Stage  or 2,
                   Source or 3,
                   Disposition or 4
                }

Enum - active:{
                           0 - All,
													 1 - Active,
													 2 - Inactive,
                         }
							


```js
zenoti.v2.opportunities.metadata.section.get({
  "section": ""
}, context)
```

#### Input
* input `object`
  * active `number`: for choosing between active,inactive and all for lead_sources and stages
  * source_code `string`: pass lead source code
  * section **required** `string`

#### Output
* output [OpportunityMetaDataResponse](#opportunitymetadataresponse)

### v2.opportunities.OpportunityId.delete
Deletes an Opportunity


```js
zenoti.v2.opportunities.OpportunityId.delete({
  "OpportunityId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: access token
  * Content-Type `string`: application/json
  * OpportunityId **required** `string`: Data Type: Unique Identifier(GUID)

#### Output
* output `object`

### v2.opportunities.OpportunityId.get
Gets Details of an opportunity


```js
zenoti.v2.opportunities.OpportunityId.get({
  "Authorization": "",
  "OpportunityId": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: access token
  * Content-Type `string`: application/json
  * OpportunityId **required** `string`: Data Type: Unique Identifier(GUID)

#### Output
* output [GetOpportunityDetailsResponse](#getopportunitydetailsresponse)

### v2.opportunities.OpportunityId.put
Example Request:

```
{
	"center_id"  : "bcaf32ac-83a8-4988-8ebf-4a6d125835de",
	"opportunity_title" : "stafdfgcz5",
	"opportunity_description" : "hey its a good day",
	"opportunity_owner_id" : "ede781ef-7891-47b8-961e-a4729925431f",
	"guest_id" : "9dcd0709-74a8-48cd-9997-878e465f566d",
	"priority_type_id" : "E5196EC3-4E3C-4677-8AA2-B8E306F0FA5C",
	"stage_id" : "5E61ACFD-CDE5-451E-B9BC-716B400453A4",
	"type" : "package",
	"followup_date" : "2017-12-15",
	"expected_close_date" : "2018-12-14",
	"listed_amount" : 1253,
	"offered_amount" : 1000,
	"optional_field_1" : "op1",
	"optional_field_2" : "op2",
	"optional_field_3" : "op3",
	"change_guest_center" : false,
	"disposition_id" : "5E61ACFD-CDE5-451E-B9BC-716B400453A4",
  "custom_fields": {
		"ED727888-AE73-439E-AEF2-22E48A5AF3AF":"value1",
    "0fb8a958-682e-4025-adef-0bac63359e05":"value2"
	},
	"lead_source" : {
	"id" : "0fb8a958-682e-4025-adef-0bac63359e05",
	"code" : "GH103"
	}
}
```


```js
zenoti.v2.opportunities.OpportunityId.put({
  "Authorization": "",
  "body": {
    "center_id": ""
  },
  "OpportunityId": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: access token
  * Content-Type `string`: application/json
  * body **required** [UpdateOpportunityRequest](#updateopportunityrequest)
  * OpportunityId **required** `string`: Data Type: Unique Identifier(GUID)

#### Output
* output `object`

### v2.opportunities.OpportunityId.notes.get
Gives list of Opportunity Notes


```js
zenoti.v2.opportunities.OpportunityId.notes.get({
  "OpportunityId": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: access token
  * Content-Type `string`: application/json
  * OpportunityId **required** `string`

#### Output
* output [GetOpportunityNotesHistoryResponse](#getopportunitynoteshistoryresponse)

### v2.opportunities.OpportunityId.notes.post
Example Request:
```
{
	"notes" : "height 6 feet",
	"updated_by_id" : "ede781ef-7891-47b8-961e-a4729925431f"
}
```


```js
zenoti.v2.opportunities.OpportunityId.notes.post({
  "Authorization": "",
  "body": {},
  "OpportunityId": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: access token
  * Content-Type `string`: application/json
  * body **required** [AddOpportunityNotesRequest](#addopportunitynotesrequest)
  * OpportunityId **required** `string`

#### Output
* output `object`: 

### v2.sales.salesreport.get
Get sales report of a center


```js
zenoti.v2.sales.salesreport.get({
  "center_id": "",
  "start_date": "",
  "end_date": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * center_id **required** `string`: Unique Identifier
  * start_date **required** `string`
  * end_date **required** `string`
  * status `integer`: 0 - open , 1 - closed , 2 - all
  * item_type `integer`: 0 - Service,
  * Authorization **required** `string`: access token
  * Content-Type `string`: application/json

#### Output
* output [CenterSalesReportResponse](#centersalesreportresponse)

### v5.guests.get
search_value passed is used to search over below attributes

| Guest Properties |
| --- |
| UserCode |
| Username |
| HomePhone |
| WorkPhone |
| FirstName  |
| LastName |
| MobilePhone |
| Email |



```js
zenoti.v5.guests.get({
  "search_value": ""
}, context)
```

#### Input
* input `object`
  * center_id `string`: DataType: Unique Identifier(GUID)
  * search_value **required** `string`: Cannot be Null or WhiteSpace
  * in_center `boolean`: searches across center for **false**. *center_id* should be passed,if this field is passed as **true**
  * include_employees `boolean`: searches for guest who are employees too. false if not employees are not needed
  * page_num `number`: page number needed. First page is 0. By default number of records overall is restricted to 25.
  * page_size `string`: page size needed. By default number of records overall is restricted to 25.

#### Output
* output [GetGuestsResponseV5](#getguestsresponsev5)



## Definitions

### AddAppointmentGroupRequest
* AddAppointmentGroupRequest `object`
  * CenterId `string`
  * DayPromoPackages `array`
    * items [AppointmentDayPromoPackageModel](#appointmentdaypromopackagemodel)
  * GiftCards `array`
    * items [AppointmentGiftCardModel](#appointmentgiftcardmodel)
  * GuestId `string`
  * IsForced `boolean`
  * Memberships `array`
    * items [AppointmentMembershipModel](#appointmentmembershipmodel)
  * Notes `string`
  * Products `array`
    * items [AppointmentProductModel](#appointmentproductmodel)
  * SeriesPackages `array`
    * items [AppointmentSeriesPackageModel](#appointmentseriespackagemodel)
  * Services `array`
    * items [AppointmentServiceModel](#appointmentservicemodel)

### AddAppointmentGroupResponse
* AddAppointmentGroupResponse `object`
  * AppointmentGroup [AppointmentGroupModel](#appointmentgroupmodel)
  * CreditCardsOnFile `array`
    * items [CreditCardOnFileModel](#creditcardonfilemodel)
  * Error [ApiResponseError](#apiresponseerror)
  * IsAppointmentAdded `boolean`

### AddCashPaymentRequest
* AddCashPaymentRequest `object`
  * Amount `number`
  * CashRegisterId `string`
  * TipAmount `number`

### AddCashPaymentResponse
* AddCashPaymentResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsCashPaymentAdded `boolean`

### AddCustomPaymentRequest
* AddCustomPaymentRequest `object`
  * AdditionalData `string`
  * Amount `number`
  * CashRegisterId `string`
  * CustomPaymentId `string`
  * TipAmount `number`

### AddCustomPaymentResponse
* AddCustomPaymentResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsCustomPaymentAdded `boolean`

### AddEmailMobileRequest
* AddEmailMobileRequest `object`
  * Email `string`
  * MobilePhoneModel [PhoneModel](#phonemodel)

### AddEmailMobileResponse
* AddEmailMobileResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsEmailMobileAdded `boolean`

### AddEmployeeDetailRequest
* AddEmployeeDetailRequest `object`
  * EmployeeDetail [EmployeeDetailModel](#employeedetailmodel)

### AddEmployeeDetailResponse
* AddEmployeeDetailResponse `object`
  * EmployeeDetail [EmployeeDetailModel](#employeedetailmodel)
  * Error [ApiResponseError](#apiresponseerror)
  * IsEmployeeAdded `boolean`

### AddGuestRequest
* AddGuestRequest `object`
  * AllowDuplicateEmail `boolean`: To force email duplication
  * CenterId `string`: CenterId of the guest
  * Guest [GuestModel](#guestmodel)
  * Validate `boolean`: To force validation of input

### AddGuestResponse
* AddGuestResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * GuestCode `string`: Created based on an Org level setting
  * GuestId `string`
  * SendRegisterationMail `integer`

### AddInvoiceRequest
* AddInvoiceRequest `object`
  * CenterId `string`
  * GuestId `string`
  * Invoice [InvoiceModel](#invoicemodel)
  * IsForced `boolean`
  * Notes `string`

### AddInvoiceResponse
* AddInvoiceResponse `object`
  * Checkout [CheckoutResponse](#checkoutresponse)
  * Error [ApiResponseError](#apiresponseerror)
  * IsInvoiceAdded `boolean`

### AddNotesRequest
* AddNotesRequest `object`
  * CenterId `string`
  * GuestId `string`
  * Note [NoteModel](#notemodel)

### AddNotesResponse
* AddNotesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsNoteAdded `boolean`
  * Note [NoteModel](#notemodel)

### AddOnServiceRequest
* AddOnServiceRequest `object`
  * ServiceId `string`

### AddOnServiceResponse
* AddOnServiceResponse `object`
  * AddOnAppointmentId `string`
  * Error [ApiResponseError](#apiresponseerror)
  * IsAddOnServiceAdded `boolean`

### AddOpportunityNotesRequest
* AddOpportunityNotesRequest `object`
  * notes `string`: Information stored in the notes
  * updated_by_id `string`: DataType : UniqueIdentifier(GUID),GUID of the employee by whom the notes is updated

### AddPaymentCreditCardRequest
* AddPaymentCreditCardRequest `object`
  * Amount `number`
  * CashRegisterId `string`
  * CreditCardGateway `string`
  * InvoiceId `string`
  * Source `integer` (values: 0, 1, 2, 3, 4, 5, 6)
  * TipAmount `number`
  * transaction [Object](#object)

### AddPaymentCreditCardResponse
* AddPaymentCreditCardResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * GroupInvoice [GroupInvoiceModel](#groupinvoicemodel)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsGroupInvoice `boolean`

### AddPaymentRequest
* AddPaymentRequest `object`
  * Amount `number`
  * CashRegisterId `string`
  * CenterId `string`
  * CustomPayment [CustomPaymentModel](#custompaymentmodel)
  * GuestId `string`
  * InvoiceId `string`
  * PaymentOption [PaymentOptionModel](#paymentoptionmodel)
  * TipAmount `number`

### AddPaymentResponse
* AddPaymentResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsPaymentAdded `boolean`

### AddPaymentSavedCardRequest
* AddPaymentSavedCardRequest `object`
  * Amount `number`
  * CardId `string`
  * CashRegisterId `string`
  * CreditCardGateway `string`
  * InvoiceId `string`
  * Source `integer` (values: 0, 1, 2, 3, 4, 5, 6)
  * TipAmount `number`

### AddPaymentSavedCardResponse
* AddPaymentSavedCardResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)

### AddPayworksReaderRequest
* AddPayworksReaderRequest `object`
  * CenterId `string`
  * SerialNumber `string`

### AddPayworksReaderResponse
* AddPayworksReaderResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsReaderAdded `boolean`

### AddScheduleRequest
* AddScheduleRequest `object`
  * Capacity `integer`
  * CenterId `string`
  * EndTime `string`
  * EnforceAddonConflict `boolean`
  * Frequency `integer`
  * InstructorId `string`
  * IsFreeSession `boolean`
  * IsRecurring `boolean`
  * NumOccurrences `integer`
  * OverrideConflictCheck `boolean`
  * RecurrenceEndTime `string`
  * RecurrenceStartTime `string`
  * RecurrenceType `integer`
  * RoomId `string`
  * StartTime `string`
  * WeekDays `integer`

### AddScheduleResponse
* AddScheduleResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Id `integer`
  * IsScheduleAdded `boolean`

### AddServiceRequest
* AddServiceRequest `object`
  * ServiceDetails [ServiceDetailModel](#servicedetailmodel)
  * ServicePrices `array`
    * items [ServicePrice](#serviceprice)

### AddServiceResponse
* AddServiceResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsServiceAdded `boolean`
  * ServiceDetails [ServiceDetailModel](#servicedetailmodel)
  * ServicePrices `array`
    * items [ServicePrice](#serviceprice)

### AdjustPriceRequest
* AdjustPriceRequest `object`
  * Authority [Credentials](#credentials)
  * InvoiceItemId `string`
  * NewDiscountAmount `number`
  * NewSalePrice `number`

### AdjustPriceResponse
* AdjustPriceResponse `object`
  * AdjustedInvoice [InvoiceModel](#invoicemodel)
  * Error [ApiResponseError](#apiresponseerror)
  * IsPriceAdjusted `boolean`

### Annotation
* Annotation `object`
  * ShapeHeight `number`
  * ShapeType `string`
  * ShapeWidth `number`
  * ShapeX `number`
  * ShapeY `number`
  * Value `string`
  * ValueType `string`

### ApiResponseError
* ApiResponseError `object`
  * Message `string`
  * StatusCode `integer`

### AppInitialSettings
* AppInitialSettings `object`
  * AboutUsUrl `string`
  * Announcements `array`
    * items `string`
  * AppForceUpdate `boolean`
  * AppRequiresUpdate `boolean`
  * AppUpdateMessage `string`
  * CallSupportPhone `string`
  * PrivacyPolicyUrl `string`
  * TermsAndConditionsUrl `string`

### ApplyCouponRequest
* ApplyCouponRequest `object`
  * CouponNumber `integer`
  * InvoiceId `string`

### ApplyCouponResponse
* ApplyCouponResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsCouponApplied `boolean`

### ApplyDiscountRequest
* ApplyDiscountRequest `object`
  * DiscountAmount `number`
  * DiscountId `string`
  * InvoiceId `string`

### ApplyDiscountResponse
* ApplyDiscountResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsDiscountApplied `boolean`

### ApplyGiftCardRequest
* ApplyGiftCardRequest `object`
  * Amount `number`
  * CardNumber `string`
  * CashRegisterId `string`
  * InvoiceId `string`
  * TipAmount `number`

### ApplyGiftCardResponse
* ApplyGiftCardResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsGiftCardApplied `boolean`

### ApplyLoyaltyPointsRequest
* ApplyLoyaltyPointsRequest `object`
  * InvoiceId `string`
  * Points `number`
  * ProgramId `string`

### ApplyLoyaltyPointsResponse
* ApplyLoyaltyPointsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsLoyaltyPointsApplied `boolean`

### ApplyMembershipRequest
* ApplyMembershipRequest `object`
  * Amount `number`
  * InvoiceId `string`
  * MembershipUserId `string`

### ApplyMembershipResponse
* ApplyMembershipResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsMembershipApplied `boolean`

### ApplyPackagesRequest
* ApplyPackagesRequest `object`
  * InvoiceId `string`
  * PackageUserId `string`

### ApplyPackagesResponse
* ApplyPackagesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsPackageApplied `boolean`

### ApplyTipsRequest
* ApplyTipsRequest `object`
  * EmployeeTips `array`
    * items [EmployeeTipModel](#employeetipmodel)
  * InvoiceId `string`

### ApplyTipsResponse
* ApplyTipsResponse `object`
  * EmployeeTips `array`
    * items [EmployeeTipModel](#employeetipmodel)
  * Error [ApiResponseError](#apiresponseerror)

### AppointmentDayPromoPackageModel
* AppointmentDayPromoPackageModel `object`
  * InvoiceItemId `string`
  * Package [PackageModel](#packagemodel)
  * Services `array`
    * items [AppointmentServiceModel](#appointmentservicemodel)

### AppointmentGiftCardModel
* AppointmentGiftCardModel `object`
  * Employee [TherapistModel](#therapistmodel)
  * GiftCard [GiftCardModel](#giftcardmodel)
  * InvoiceItemId `string`
  * Price [PriceModel](#pricemodel)
  * Quantity `integer`

### AppointmentGiftCards
* AppointmentGiftCards `array`
  * items [AppointmentGiftCardModel](#appointmentgiftcardmodel)

### AppointmentGroupModel
* AppointmentGroupModel `object`
  * AppointmentGroupId `string`
  * InvoiceId `string`
  * IsRebooking `boolean`
  * Notes `string`

### AppointmentMembershipModel
* AppointmentMembershipModel `object`
  * Employee [TherapistModel](#therapistmodel)
  * InvoiceItemId `string`
  * Membership [MembershipModel](#membershipmodel)
  * Price [PriceModel](#pricemodel)
  * Quantity `integer`

### AppointmentMemberships
* AppointmentMemberships `array`
  * items [AppointmentMembershipModel](#appointmentmembershipmodel)

### AppointmentModel
* AppointmentModel `object`
  * AI `string`
  * AS `integer` (values: 0, 1, 2, 3, 4)
  * ASI `string`
  * Cat `string`
  * EFN `string`
  * EG `integer` (values: 0, 1, 2, 3, 4)
  * EI `string`
  * ELN `string`
  * ET `string`
  * EVI `string`
  * GFN `string`
  * GI `string`: Group Id
  * GID `string`
  * GLN `string`
  * GP `string`
  * GPC `integer`
  * GuI `string`
  * IL `boolean`
  * Inv `string`
  * Not `string`
  * Price [PriceModel](#pricemodel)
  * Pro `integer` (values: 0, 1, 2)
  * SC `string`
  * SCD `string`
  * SN `string`
  * ST `string`
  * Sta `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)

### AppointmentProductModel
* AppointmentProductModel `object`
  * Employee [TherapistModel](#therapistmodel)
  * InvoiceItemId `string`
  * Price [PriceModel](#pricemodel)
  * Product [ProductModel](#productmodel)
  * Quantity `integer`

### AppointmentProducts
* AppointmentProducts `array`
  * items [AppointmentProductModel](#appointmentproductmodel)

### AppointmentSeriesPackageModel
* AppointmentSeriesPackageModel `object`
  * Employee [TherapistModel](#therapistmodel)
  * InvoiceItemId `string`
  * Package [PackageModel](#packagemodel)
  * Price [PriceModel](#pricemodel)
  * Quantity `integer`

### AppointmentSeriesPackages
* AppointmentSeriesPackages `array`
  * items [AppointmentSeriesPackageModel](#appointmentseriespackagemodel)

### AppointmentServiceModel
* AppointmentServiceModel `object`
  * ActualStartTime `string`
  * AppointmentId `string`
  * CartItemId `string`
  * CompletedTime `string`
  * EndTime `string`
  * EndTimeInCenter `string`
  * Equipment [EquipmentModel](#equipmentmodel)
  * InvoiceItemId `string`
  * Lock `boolean`
  * Package [PackageModel](#packagemodel)
  * PackageId `string`
  * ParentAppointmentId `string`
  * Price [PriceModel](#pricemodel)
  * Progress `integer` (values: 0, 1, 2)
  * Quantity `integer`
  * RequestedTherapist [TherapistModel](#therapistmodel)
  * RequestedTherapistGender `integer` (values: 0, 1, 2, 3, 4)
  * Room [RoomModel](#roommodel)
  * SCD `string`
  * Service [ServiceModel](#servicemodel)
  * ServiceCustomData [ServiceCustomData](#servicecustomdata)
  * StartTime `string`
  * StartTimeInCenter `string`
  * Status `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)

### AppointmentServices
* AppointmentServices `array`
  * items [AppointmentServiceModel](#appointmentservicemodel)

### Area
* Area `object`
  * Latitude `number`
  * Longitude `number`
  * Radius `integer`

### AssignCashRegisterRequest
* AssignCashRegisterRequest `object`
  * CashRegisterId `string`
  * CenterId `string`
  * Force `boolean`

### AssignCashRegisterResponse
* AssignCashRegisterResponse `object`
  * AlreadyAssignedTo `string`
  * CashRegisterId `string`
  * Error [ApiResponseError](#apiresponseerror)
  * IsRegisterAssigned `boolean`
  * UserId `string`

### BusinessUnitModel
* BusinessUnitModel `object`
  * Description `string`
  * Id `integer`
  * Name `string`
  * OrganizationId `string`

### CancelAppointmentRequest
* CancelAppointmentRequest `object`
  * AppointmentGroupId `string`
  * Comments `string`
  * ReasonId `integer`

### CancelAppointmentResponse
* CancelAppointmentResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsAppointmentStatusSet `boolean`
  * IsCancelChargeApplied `boolean`
  * Status `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)

### CancelReservationRequest
* CancelReservationRequest `object`

### CancelReservationResponse
* CancelReservationResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsCancelled `boolean`
  * ReservationId `string`

### CancelScheduleRequest
* CancelScheduleRequest `object`
  * CenterId `string`
  * RecurrenceId `integer`
  * ScheduleIds `array`
    * items `integer`

### CancelScheduleResponse
* CancelScheduleResponse `object`
  * CancelledIds `array`
    * items `integer`
  * Error [ApiResponseError](#apiresponseerror)
  * UnSuccessfulCancellations `array`
    * items [FailedReasons](#failedreasons)

### CancelTrainingRegistrationResponse
* CancelTrainingRegistrationResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsRegnCancelled `boolean`

### CardTransactionModel
* CardTransactionModel `object`
  * CardBrand `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 21)
  * CardTransactionId `string`
  * CardType `integer` (values: 0, 1, 2)
  * IsSwipe `boolean`
  * LastFour `string`
  * SSGAmount `number`
  * TipAmount `number`
  * TransactionAmount `number`
  * TransactionDate `string`
  * TransactionId `string`
  * TransactionSource `integer` (values: 0, 1, 2, 3, 4, 5, 6)
  * TransactionStatus `string`
  * TransactionType `integer` (values: 0, 1, 2, 7, 8, 10, 11, 12, 13)

### CashRegisterModel
* CashRegisterModel `object`
  * Id `string`
  * IsDisplayTerminalEnabled `boolean`
  * Name `string`

### CenterAppointmentSettings
* CenterAppointmentSettings `object`
  * AllowGuestAppointmentsOverlap `boolean`
  * EnableServiceCustomData `boolean`
  * EnableServiceCustomDataPostInvoiceClose `boolean`
  * EnforceServiceCustomFields `boolean`
  * IsCommentsMandatoryForCancelNoShow `boolean`

### CenterClassTaxesModel
* CenterClassTaxesModel `object`
  * CenterTaxId `string`
  * TaxGroupId `string`
  * TaxGroupName `string`

### CenterCollectionModel
* CenterCollectionModel `object`
  * BU `string`: BusinessUnit
  * C `number`: Cash
  * CC `number`: Card
  * CHK `number`: Check
  * CST `number`: Custom
  * Cat `string`: Category
  * DT `string`: Date
  * EC `string`: Employee Code
  * EJC `string`: Employee Job Code
  * EN `string`: Employee Name
  * G `integer` (values: 0, 1, 2, 3, 4): Gender
  * GC `number`: Giftcard
  * GCODE `string`: Guest Code
  * GE `string`: GuestEmail
  * GIV `number`: GrossInvoiceValue
  * GM `string`: Guest Mobile
  * GMM `string`: GuestMembership
  * Guest `string`: Guest
  * I `string`: Item
  * IBP `string`: IsBundledProduct
  * IC `string`: Item Code
  * ICC `string`: InvoiceCenterCode
  * ID `string`: InvoiceItemId
  * IDF `string`: Invoice Date Full
  * IDSC `number`: ItemDiscount
  * IDT `string`: InvoiceDate
  * IN `string`: Item Name
  * INV `string`: Invoice
  * INVC `string`: InvoiceCenter
  * INVD `number`: InvoiceDiscount
  * IQTY `integer`: ItemQuantity
  * IRR `integer`: ItemRowNum
  * IT `string`: Item Tags
  * LP `number`: Loyalty Points
  * NIV `number`: NetInvoiceValue
  * NP `number`: NetPrice
  * PNO `string`: PaymentNo
  * PPC `number`: Prepaidcard
  * RCPT `string`: Receipt
  * RN `integer`: RowNum
  * SC `string`: SubCategory
  * TC `number`: TotalCollection
  * TS `object`: Tax Split
  * TT `number`: TotalTax
  * UP `number`: UnitPrice

### CenterGeneralSettings
* CenterGeneralSettings `object`
  * CenterCodeMd5Hash `string`
  * CenterCountryId `integer`
  * CenterEmail `string`
  * CreditCardEntryForAppointment `integer` (values: 0, 1, 2)
  * EmployeeCodeMd5Hash `string`
  * EnforceInactivityLogin `boolean`
  * FinancialDataLockDate `string`
  * FinancialDataLockDays `integer`
  * Geofence [Area](#area)
  * Labels [CustomLabels](#customlabels)
  * TrackEmployeeForPayments `boolean`

### CenterGuestSettings
* CenterGuestSettings `object`
  * AllowDuplicateMobileNumbers `boolean`
  * CanReceiveMarketingMessages `boolean`
  * CanReceiveTransactionalMessages `boolean`
  * GuestMandatoryFields `array`
    * items `string`
  * IsMobileNumberMandatory `boolean`
  * IsRoomMandatoryForAppointment `boolean`
  * MembershipMandatoryFields `array`
    * items `string`
  * PhoneNumberLengthRange `string`
  * SearchGuestAcrossCenters `boolean`
  * SearchGuestAcrossCentersByDefault `boolean`

### CenterInvoiceSettings
* CenterInvoiceSettings `object`
  * CashRegisters `array`
    * items [CashRegisterModel](#cashregistermodel)
  * DisplayTerminalAdvertisementUrl `string`
  * EnableDiscountAdjustment `boolean`
  * EnableDiscountOnInvoice `boolean`
  * EnableDisplayTerminal `boolean`
  * EnablePriceAdjustment `boolean`
  * EnablePriceIncreaseOnly `boolean`
  * EnableSSG `boolean`
  * EnableSplitTip `boolean`
  * EnforceSaleByProductsSale `boolean`
  * GiftCardSettings [GiftCardSettings](#giftcardsettings)
  * LoyaltyPointsSettings [LoyaltyPointSettings](#loyaltypointsettings)
  * MembershipSettings [MembershipSettings](#membershipsettings)
  * PackageSettings [PackageSettings](#packagesettings)
  * PrepaidCardSettings [PrepaidCardSettings](#prepaidcardsettings)
  * PriceSettings [PriceSettings](#pricesettings)
  * RequiresAuthenticationForDiscount `boolean`
  * TipSettings [TipSettings](#tipsettings)

### CenterModel
* CenterModel `object`
  * Address `string`
  * CurrencyId `integer`
  * Email `string`
  * Id `string`
  * Name `string`
  * OrganizationLogoUrl `string`
  * OrganizationName `string`
  * Phone `string`
  * SecurityRole [EmployeeRoleModel](#employeerolemodel)
  * SecurityRoles `array`
    * items [EmployeeRoleModel](#employeerolemodel)
  * TimeZoneId `integer`

### CenterSalesReportResponse
* CenterSalesReportResponse `object`
  * center_sales_report `array`
    * items `object`
      * HSN `string`
      * SAC `string`
      * business_unit_name `string`
      * card `number`
      * cash `number`
      * cashback_redemption `number`
      * center `object`
        * center_code `string`
        * center_name `string`
      * check `number`
      * coupon_printed `string`
      * created_date_in_center `string`
      * custom `number`
      * discount `number`
      * due `number`
      * employee `object`
        * code `string`
        * job_code `string`
        * name `string`
      * final_sale_price `number`
      * first_visit `string`
      * gift_card_code `object`
      * guest `object`
        * guest_code `string`
        * guest_id `string`: Unique Identifier
        * guest_name `string`
      * invoice_item_id `string`: Unique Identifier
      * invoice_no `string`: Unique Identifier
      * item `object`
        * code `string`
        * name `object`
        * type `number`
      * item_row_num `number`
      * last_payment_date `string`
      * loyalty_point_redemption `number`
      * membership_paid `number`
      * membership_redmption `number`
      * package `string`
      * package_invoice `string`
      * package_redemption `number`
      * payment_type `string`
      * points `number`
      * prepaid_card `number`
      * prepaid_card_redemption `number`
      * promotion `string`
      * quantity `number`
      * receipt_no `string`
      * rounding_adjustment `number`
      * row_num `number`
      * sale_price `number`
      * serviced_on `string`
      * sold_on `string`
      * state_code `string`
      * tags `string`
      * tax_break_up `object`: Dictionnary<string,Decimal>
      * tax_code `string`
      * tips `number`
      * total_tax `number`
      * unit_price `number`

### CenterSettings
* CenterSettings `object`
  * CreditCardEntryForAppointment `integer` (values: 0, 1, 2)
  * EnablePriceAdjustment `boolean`
  * EnablePriceIncrease `boolean`
  * EnforceSaleByProductsSale `boolean`
  * FinancialDataLockDate `string`
  * FinancialDataLockDays `integer`
  * Geofence [Area](#area)
  * GuestMandatoryFields `array`
    * items `string`
  * IsMobileNumberMandatory `boolean`
  * IsRoomMandatoryForAppointment `boolean`
  * PhoneNumberRange `string`
  * TrackEmployeeForPayments `boolean`

### CenterTaxGroupModel
* CenterTaxGroupModel `object`
  * CenterTaxId `string`
  * Id `string`
  * IsApplicableToClasses `boolean`
  * IsApplicableToGC `boolean`
  * IsApplicableToMemberships `boolean`
  * IsApplicableToPMSRooms `boolean`
  * IsApplicableToPackages `boolean`
  * IsApplicableToProducts `boolean`
  * IsApplicableToServices `boolean`
  * IsApplicableToVendors `boolean`
  * Name `string`
  * TaxPercentage `number`

### CentersAssocModel
* CentersAssocModel `object`
  * CenterTaxId `string`
  * CenterTaxes `array`
    * items [CenterClassTaxesModel](#centerclasstaxesmodel)
  * Id `string`
  * IncludesTax `boolean`
  * IsAssociated `integer`
  * Name `string`
  * Price `number`

### CheckConflictsRequest
* CheckConflictsRequest `object`
  * CenterId `string`
  * ClassDuration `integer`
  * EndTime `string`
  * Frequency `integer`
  * InstructorId `string`
  * IsRecurring `boolean`
  * NumOccurrences `integer`
  * RecurrenceEndTime `string`
  * RecurrenceStartTime `string`
  * RecurrenceType `integer`
  * RoomId `string`
  * ScheduleIds `string`
  * StartTime `string`
  * WeekDays `integer`

### CheckConflictsResponse
* CheckConflictsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * UnavailableDates `array`
    * items [UnavailableDatesModel](#unavailabledatesmodel)

### CheckInEmployeeResponse
* CheckInEmployeeResponse `object`
  * EmployeeCheckedIn `boolean`
  * Error [ApiResponseError](#apiresponseerror)

### CheckOutEmployeeResponse
* CheckOutEmployeeResponse `object`
  * EmployeeCheckedOut `boolean`
  * Error [ApiResponseError](#apiresponseerror)

### CheckinToCenterRequest
* CheckinToCenterRequest `object`
  * AppointmentGroupIds `string`
  * CenterId `string`
  * IsCheckinToCenter `boolean`
  * SessionIds `string`

### CheckinToCenterResponse
* CheckinToCenterResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsCheckinAppointmentSuccess `boolean`
  * IsCheckinDetailsSaved `boolean`
  * IsCheckintoSessionSuccess `boolean`
  * UserMembershipId `string`

### CheckoutRequest
* CheckoutRequest `object`
  * AppointmentGroupId `string`
  * InvoiceId `string`

### CheckoutResponse
* CheckoutResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * PaymentOptions `array`
    * items [PaymentOptionModel](#paymentoptionmodel)

### ClassCentersModel
* ClassCentersModel `object`
  * CenterId `string`
  * CenterTaxId `string`
  * IncludesTax `boolean`
  * Price `number`

### ClassDurationModel
* ClassDurationModel `object`
  * ClassTimeDetailText `string`
  * ClassTimeDetailValue `string`

### ClassModel
* ClassModel `object`
  * BusinessUnitName `string`
  * CategoryId `integer`
  * CategoryName `string`
  * Code `string`
  * Duration `integer`
  * Id `integer`
  * Level `integer`
  * Name `string`
  * ParentCategoryName `string`
  * Price [PriceModel](#pricemodel)

### CommissionModel
* CommissionModel `object`
  * CP `number`: Commission Percentage
  * CT `string`: Commission Type
  * Cat `string`: Category
  * EC `string`: Employee Code
  * EJC `string`: Employee Job Code
  * EN `string`: Employee Name
  * ID `string`: Invoice Date
  * IN `string`: Item Name
  * IP `number`: Invoice Price
  * IT `number`: Item Tax
  * InvNum `string`: Invoice #
  * SC `string`: Sub Category
  * Type `string`: Item Type

### ConfirmReservationRequest
* ConfirmReservationRequest `object`
  * CenterId `string`
  * ReservationId `string`

### ConfirmReservationResponse
* ConfirmReservationResponse `object`
  * ConfirmationId `string`
  * ConfirmedBookings `array`
    * items [SlotBooking](#slotbooking)
  * Error [ApiResponseError](#apiresponseerror)
  * IsConfirmed `boolean`

### CopyCenterDetailModel
* CopyCenterDetailModel `object`
  * CenterId `string`
  * Status `boolean`

### CopyCenterRequest
* CopyCenterRequest `object`
  * Groups `integer`: General = 1, Services = 2, Products = 4, Jobs = 8, Packages = 16, Memberships = 32, Campaigns = 64, TaxGroups = 128
  * Level `integer`: 1 - Shallow Copy, 2 - Deep Copy
  * Mode `integer`: LeftOnly = 1, AllLeft =2 , SyncLeft=3
  * ToCenterIds `array`: List of Center ids
    * items `string`

### CopyCenterResponse
* CopyCenterResponse `object`
  * CopyDetails `array`
    * items [CopyCenterDetailModel](#copycenterdetailmodel)
  * Error [ApiResponseError](#apiresponseerror)
  * Status `boolean`

### CopyEmployeeDetailModel
* CopyEmployeeDetailModel `object`
  * EmployeeId `string`
  * Status `boolean`

### CopyEmployeeRequest
* CopyEmployeeRequest `object`
  * Groups `integer`: General = 1, Roles = 2, Services = 4, Service_and_ServiceCommissions = 8, ProductCommissions = 16, MembershipCommissions = 32, Commissions = 64
  * Level `integer`: ShallowCopy = 1, DeepCopy = 2
  * Mode `integer`: LeftOnly = 1, AllLeft = 2, SyncLeft = 3
  * ToEmployeeIds `array`: List of employee ids
    * items `string`

### CopyEmployeeResponse
* CopyEmployeeResponse `object`
  * CopyDetails `array`
    * items [CopyEmployeeDetailModel](#copyemployeedetailmodel)
  * Error [ApiResponseError](#apiresponseerror)
  * Status `boolean`

### CountryModel
* CountryModel `object`
  * Code `string`
  * Id `integer`
  * Name `string`
  * Nationality `string`
  * PhoneCode `integer`

### CreateOpportunityRequest
* CreateOpportunityRequest `object`
  * center_id **required** `string`: Data Type : Unique Identifier(GUID)
  * change_guest_center `boolean`: boolean which changes guest's center to the valid center_id passed if made true
  * created_by_id `string`: GUID of the employee by whom the opportunity is being created,
  * custom_data `object`: Key has the FieldId of the custom field and Value has the value of the custom field,
  * disposition_id `string`: GUID of the Disposition
  * expected_close_date `string`: Expected Date of closure,
  * followup_date **required** `string`: Data Type :DateTime (yyyy-mm-dd)
  * guest_id **required** `string`: GUID of the guest,
  * lead_source `object`
    * code `string`
    * id `string`: Data Type: Unque Identifier (GUID)
  * listed_amount `number`: listed price of the opportunity
  * offered_amount `number`: offered price of the opportunity
  * opportunity_description `string`
  * opportunity_owner_id `string`: GUID of the employee who owns the opportunity,
  * opportunity_title **required** `string`
  * optional_field_1 `string`
  * optional_field_2 `string`
  * optional_field_3 `string`
  * priority_type_id `string`: GUID of the priority type of the opportunity,
  * status_id `string`: GUID of the stage type (or) status type of the opportunity,
  * ticket_id `string`: Data Type: Unque Identifier (GUID)
  * type `string`: opportunity type

### CreatePayworksAccountRequest
* CreatePayworksAccountRequest `object`
  * CenterId `string`

### CreatePayworksAccountResponse
* CreatePayworksAccountResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * PayworksMerchantIdentifier `string`
  * PayworksMerchantSecretKey `string`

### CreateStripeAccountRequest
* CreateStripeAccountRequest `object`
  * AccountEmail `string`
  * AddressLine1 `string`
  * AddressLine2 `string`
  * CenterId `string`
  * City `string`
  * ContactPhone `string`
  * EnablePayworks `boolean`
  * PostalCode `string`

### CreateStripeAccountResponse
* CreateStripeAccountResponse `object`
  * ApplicationFeePercent `number`
  * Error [ApiResponseError](#apiresponseerror)
  * PayworksMerchantIdentifier `string`
  * PayworksMerchantSecretKey `string`
  * StatementDescriptorPrefix `string`
  * StripeAccountId `string`
  * StripePublishableKey `string`
  * TransactionFee `number`

### Credentials
* Credentials `object`
  * GrantType `integer` (values: 0, 1, 2)
  * Password `string`
  * UserName `string`

### CreditCardOnFileModel
* CreditCardOnFileModel `object`
  * CardBrand `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 21)
  * CardType `integer` (values: 0, 1, 2)
  * ExpirationMonth `integer`
  * ExpirationYear `integer`
  * ExtParams `string`
  * Id `string`
  * IsSupportedCardType `boolean`
  * LastFour `string`

### CultureModel
* CultureModel `object`
  * Code `string`
  * Id `integer`
  * Name `string`

### CurrencyModel
* CurrencyModel `object`
  * Code `string`
  * Id `integer`
  * Name `string`
  * Symbol `string`

### CustomField
* CustomField `object`
  * Annotations `array`
    * items [Annotation](#annotation)
  * FieldId `string`
  * FieldValue `string`
  * FieldValueId `string`
  * Type `string`

### CustomLabels
* CustomLabels `object`
  * CustomFormMacro `string`
  * GuestLabel `string`
  * InstructorLabel `string`
  * InvoiceNumLabel `string`
  * PaymentNumLabel `string`
  * PhysicalBillLabel `string`
  * PostalCodeLabel `string`
  * ReceiptNumLabel `string`
  * RelationshipManagerLabel `string`
  * SSGLabel `string`
  * ServiceCustomDataLabel `string`
  * TherapistLabel `string`
  * TipsLabel `string`

### CustomMetricCategoryFullDTO
* CustomMetricCategoryFullDTO `object`
  * CustomMetrics `array`
    * items [CustomMetricShortDTO](#custommetricshortdto)
  * Description `string`
  * Id `integer`
  * Name `string`

### CustomMetricCategoryShortDTO
* CustomMetricCategoryShortDTO `object`
  * Description `string`
  * Id `integer`
  * Name `string`

### CustomMetricDTO
* CustomMetricDTO `object`
  * CustomMetricCategoryId `integer`
  * CustomMetricDrillDownShortDTO `array`
    * items [CustomMetricDrillDownShortDTO](#custommetricdrilldownshortdto)
  * CustomMetricFilters `array`
    * items [CustomMetricFilterValuesDTO](#custommetricfiltervaluesdto)
  * Description `string`
  * HasTotal `boolean`
  * Id `integer`
  * Name `string`
  * OrganizationId `string`
  * ZenotiMetricDTO [ZenotiMetricDTO](#zenotimetricdto)

### CustomMetricDetails
* CustomMetricDetails `object`
  * customMetricDTO [CustomMetricDTO](#custommetricdto)
  * customMetricDrillDownShortDTO `array`
    * items [CustomMetricDrillDownShortDTO](#custommetricdrilldownshortdto)
  * zenotiFilterShortDTO `array`
    * items [ZenotiFilterShortDTO](#zenotifiltershortdto)
  * zenotiFilterValuesDTOList `array`
    * items [ZenotiFilterValuesDTO](#zenotifiltervaluesdto)

### CustomMetricDrillDownDTO
* CustomMetricDrillDownDTO `object`
  * CustomMetricId `integer`
  * CustomReportId `integer`
  * ReportColumns `array`
    * items [CustomReportColumnValueDTO](#customreportcolumnvaluedto)
  * ReportParameters `array`
    * items [CustomReportParameterValueDTO](#customreportparametervaluedto)
  * ReportRows `array`
    * items [CustomReportRowValueDTO](#customreportrowvaluedto)
  * Value `string`

### CustomMetricDrillDownShortDTO
* CustomMetricDrillDownShortDTO `object`
  * CustomMetricDrillDownId `integer`
  * CustomMetricId `integer`
  * DimFactAttributesId `integer`
  * DisplayName `string`
  * DisplayOrder `integer`
  * FactDimId `integer`
  * FactDimSource `string`
  * IsActive `boolean`
  * IsFact `boolean`

### CustomMetricFilterValuesDTO
* CustomMetricFilterValuesDTO `object`
  * FilterValues `array`
    * items [FilterValueDTO](#filtervaluedto)
  * Id `integer`
  * ZenotiFilterDTO [ZenotiFilterDTO](#zenotifilterdto)

### CustomMetricShortDTO
* CustomMetricShortDTO `object`
  * Description `string`
  * Id `integer`
  * MetricType `string`
  * Name `string`
  * ZenotiMetricId `integer`

### CustomPaymentModel
* CustomPaymentModel `object`
  * CollectAdditionalData `boolean`
  * Id `string`
  * Name `string`

### CustomReportColumnDTO
* CustomReportColumnDTO `object`
  * CustomReportId `integer`
  * ZenotiReportColumn [ZenotiReportColumnDTO](#zenotireportcolumndto)

### CustomReportColumnValueDTO
* CustomReportColumnValueDTO `object`
  * CustomReportColumn [CustomReportColumnDTO](#customreportcolumndto)
  * Value `string`

### CustomReportDTO
* CustomReportDTO `object`
  * CustomMetrics `array`
    * items [CustomMetricShortDTO](#custommetricshortdto)
  * Description `string`
  * DisplayOrder `integer`
  * HasReportSql `boolean`
  * Id `integer`
  * IsActive `boolean`
  * Name `string`
  * OrganizationId `string`
  * ReportCode `string`
  * ReportColumns `array`
    * items [CustomReportColumnDTO](#customreportcolumndto)
  * ReportParameters `array`
    * items [ZenotiReportParameterDTO](#zenotireportparameterdto)
  * ReportRows `array`
    * items [CustomReportRowDTO](#customreportrowdto)
  * SubjectAreaID `integer`

### CustomReportParameterValueDTO
* CustomReportParameterValueDTO `object`
  * ReportParameter [ZenotiReportParameterDTO](#zenotireportparameterdto)
  * Value `string`

### CustomReportRowDTO
* CustomReportRowDTO `object`
  * CustomReportId `integer`
  * ZenotiReportRow [ZenotiReportRowDTO](#zenotireportrowdto)

### CustomReportRowValueDTO
* CustomReportRowValueDTO `object`
  * CustomReportRow [CustomReportRowDTO](#customreportrowdto)
  * Value `string`

### CustomReportShortDTO
* CustomReportShortDTO `object`
  * Description `string`
  * DisplayOrder `integer`
  * HasReportSql `boolean`
  * Id `integer`
  * IsActive `boolean`
  * Name `string`
  * ReportCode `string`

### DataObjectRequest
* DataObjectRequest `object`
  * EndDate `string`
  * ObjectType `string`
  * StartDate `string`

### DeleteScheduleRequest
* DeleteScheduleRequest `object`
  * CenterId `string`
  * RecurrenceId `integer`
  * ScheduleIds `array`
    * items `integer`

### DeleteScheduleResponse
* DeleteScheduleResponse `object`
  * DeletedIds `array`
    * items `integer`
  * Error [ApiResponseError](#apiresponseerror)
  * UnSuccessfulDeletions `array`
    * items [FailedReasons](#failedreasons)

### DesignationModel
* DesignationModel `object`
  * Id `string`
  * Name `string`

### DiscountViewModel
* DiscountViewModel `object`
  * Id `string`
  * Name `string`

### DrilldownColumnsFull
* DrilldownColumnsFull `object`
  * Description `string`
  * DimFactAttrInfoList `array`
    * items [DrilldownDimFactAttrInfo](#drilldowndimfactattrinfo)
  * Id `integer`
  * IsFact `boolean`
  * Name `string`

### DrilldownDimFactAttrInfo
* DrilldownDimFactAttrInfo `object`
  * Description `string`
  * Id `integer`
  * IsDefault `boolean`
  * Name `string`

### EditScheduleRequest
* EditScheduleRequest `object`
  * Capacity `integer`
  * CenterId `string`
  * EndTime `string`
  * EnforceEditonConflict `boolean`
  * InstructorId `string`
  * IsFreeSession `boolean`
  * MoveToWaitiList `boolean`
  * OverrideConflictCheck `boolean`
  * RecurrenceId `integer`
  * RoomId `string`
  * ScheduleIds `array`
    * items `integer`
  * ScheduleType `integer`
  * StartTime `string`

### EditScheduleResponse
* EditScheduleResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsScheduleUpdated `boolean`

### EmployeeAccess
* EmployeeAccess `object`
  * AccessCode `string`
  * AccessEmployeeMobileApp `boolean`
  * AccessManagerMobileApp `boolean`
  * AllowApiAccess `boolean`
  * AllowOfflineAccess `boolean`
  * WaiveBiometricCheckin `boolean`

### EmployeeApp_Actor
* EmployeeApp_Actor `object`
  * ActorDName `string`
  * ActorFName `string`
  * ActorLName `string`
  * id `string`

### EmployeeApp_Appt
* EmployeeApp_Appt `object`
  * HasCD `string`
  * StartTime `string`
  * actors `array`
    * items [EmployeeApp_Actor](#employeeapp_actor)
  * apptgroup_id `string`
  * guests `array`
    * items [EmployeeApp_ApptGuest](#employeeapp_apptguest)
  * id `string`
  * locations `array`
    * items [Object](#object)
  * services `array`
    * items [EmployeeApp_GuestServiceModel](#employeeapp_guestservicemodel)

### EmployeeApp_ApptGuest
* EmployeeApp_ApptGuest `object`
  * GuestFName `string`
  * GuestFlagFT `string`
  * GuestFlagHS `string`
  * GuestFlagLF `string`
  * GuestFlagMB `string`
  * GuestFlagNS `string`
  * GuestFlagRC `string`
  * GuestFlagReg `string`
  * GuestLName `string`
  * MobilePhone `string`
  * id `string`

### EmployeeApp_Guest
* EmployeeApp_Guest `object`
  * guests `array`
    * items [EmployeeApp_GuestDetailModel](#employeeapp_guestdetailmodel)
  * success `boolean`

### EmployeeApp_GuestDetailModel
* EmployeeApp_GuestDetailModel `object`
  * Address1 `string`
  * Address2 `string`
  * AmountDue `number`
  * AnniversaryDate `string`
  * CardsOnFile `array`
    * items [CreditCardOnFileModel](#creditcardonfilemodel)
  * City `string`
  * CountryFk `string`
  * CountryName `string`
  * DOB `string`
  * DOB_IncompleteYear `string`
  * Email `string`
  * Gender `string`
  * GuestFName `string`
  * GuestFlagCTA `string`
  * GuestFlagCardOnFile `boolean`
  * GuestFlagFT `string`
  * GuestFlagHS `string`
  * GuestFlagHasProfileAlert `boolean`
  * GuestFlagLF `string`
  * GuestFlagMB `string`
  * GuestFlagNS `string`
  * GuestFlagOtherCenter `boolean`
  * GuestFlagPack `string`
  * GuestFlagRC `string`
  * GuestFlagReg `string`
  * GuestLName `string`
  * GuestPhone `string`
  * GuesthistoryFlag `string`
  * HasActiveMemberships `integer`
  * HasCD `string`
  * HomePhone `string`
  * HomePhoneModel [PhoneModel](#phonemodel)
  * LastMembership `string`
  * LastPackage `string`
  * LastService `string`
  * LastTherapist `string`
  * LastVisit `string`
  * MembershipBalance `number`
  * MobilePhoneModel [PhoneModel](#phonemodel)
  * NonExpirePackages `integer`
  * OpenAppts `integer`
  * ReceiveLpStmt `string`
  * ReceiveMarketingEMail `string`
  * ReceiveMarketingSMS `string`
  * ReceiveTransactionalEMail `string`
  * ReceiveTransactionalSMS `string`
  * StateFK `string`
  * StateName `string`
  * TotalSpent `number`
  * TotalVisits `integer`
  * WorkPhone `string`
  * WorkPhoneModel [PhoneModel](#phonemodel)
  * appts `array`
    * items [EmployeeApp_Appt](#employeeapp_appt)
  * id `string`
  * memberships `array`
    * items [EmployeeApp_GuestMembershipModel](#employeeapp_guestmembershipmodel)
  * packages `array`
    * items [Object](#object)
  * products `array`
    * items [EmployeeApp_GuestProductModel](#employeeapp_guestproductmodel)

### EmployeeApp_GuestMembershipModel
* EmployeeApp_GuestMembershipModel `object`
  * MembershipBalance `string`
  * MembershipEndD `string`
  * MembershipName `string`
  * MembershipStartD `string`
  * guest_id `string`
  * id `string`

### EmployeeApp_GuestProductDetailModel
* EmployeeApp_GuestProductDetailModel `object`
  * id `string`
  * productCode `string`
  * productName `string`

### EmployeeApp_GuestProductModel
* EmployeeApp_GuestProductModel `object`
  * CenterId `string`
  * CenterName `string`
  * CreatedDate `string`
  * FinalSalePrice `string`
  * InvoiceNo `string`
  * Notes [Object](#object)
  * Quantity `string`
  * actors `array`
    * items [EmployeeApp_Actor](#employeeapp_actor)
  * id `string`
  * products `array`
    * items [EmployeeApp_GuestProductDetailModel](#employeeapp_guestproductdetailmodel)

### EmployeeApp_GuestServiceModel
* EmployeeApp_GuestServiceModel `object`
  * ServiceName `string`
  * id `string`

### EmployeeDetailModel
* EmployeeDetailModel `object`
  * AccessInfo [EmployeeAccess](#employeeaccess)
  * AdditionalField1 `string`
  * AdditionalField2 `string`
  * AddressLine1 `string`
  * AddressLine2 `string`
  * AnniversaryDate `string`
  * BirthDate `string`
  * CenterId `string`
  * CityName `string`
  * Code **required** `string`
  * CountryId `integer`
  * Credentials **required** [UserCredentials](#usercredentials)
  * Email `string`
  * FirstName **required** `string`
  * FullName `string`
  * Gender `integer` (values: 0, 1, 2, 3, 4)
  * HomePhone `string`
  * HomePhoneModel [PhoneModel](#phonemodel)
  * Id `string`
  * IsAvailable `boolean`
  * IsConsultant `boolean`
  * Job **required** [EmployeeJob](#employeejob)
  * Keyword `string`
  * LastName **required** `string`
  * MiddleName `string`
  * MobilePhoneModel [PhoneModel](#phonemodel)
  * NickName `string`
  * PhoneNumber `string`
  * Preferences [EmployeePreferences](#employeepreferences)
  * ScaledPrice `number`
  * ScalingFactor `number`
  * ServiceTime `integer`
  * ShortName `string`
  * StateId `integer`
  * StateOther `string`
  * VanityImageUrl `string`
  * WorkPhone `string`
  * WorkPhoneModel [PhoneModel](#phonemodel)

### EmployeeJob
* EmployeeJob `object`
  * CompanyName `string`
  * DesignationId `string`
  * EligibleForCommissionBonus `boolean`
  * EndDate `string`
  * HourlyRate `number`
  * JobId **required** `string`
  * MandatoryBreakMinutesPerDay `integer`
  * MaximumWorkHours `integer`
  * RequestTherapistBonus `number`
  * Salary `number`
  * SpecialLeaveDays `integer`
  * StartDate `string`
  * TargetRevenue `number`
  * TenureStartDate `string`
  * VacationDays `integer`

### EmployeeModel
* EmployeeModel `object`
  * AdditionalField1 `string`
  * AdditionalField2 `string`
  * AddressLine1 `string`
  * AddressLine2 `string`
  * AnniversaryDate `string`
  * BirthDate `string`
  * CenterId `string`
  * CityName `string`
  * Code `string`
  * CountryId `integer`
  * Email `string`
  * FirstName `string`
  * FullName `string`
  * Gender `integer` (values: 0, 1, 2, 3, 4)
  * HomePhone `string`
  * HomePhoneModel [PhoneModel](#phonemodel)
  * Id `string`
  * IsAvailable `boolean`
  * IsConsultant `boolean`
  * Keyword `string`
  * LastName `string`
  * MiddleName `string`
  * MobilePhoneModel [PhoneModel](#phonemodel)
  * NickName `string`
  * PhoneNumber `string`
  * ScaledPrice `number`
  * ScalingFactor `number`
  * ServiceTime `integer`
  * ShortName `string`
  * StateId `integer`
  * StateOther `string`
  * VanityImageUrl `string`
  * WorkPhone `string`
  * WorkPhoneModel [PhoneModel](#phonemodel)

### EmployeePreferences
* EmployeePreferences `object`
  * CultureId `integer`
  * ReceiveDailyReports `boolean`
  * ReceiveMarketingEmails `boolean`
  * ReceiveMarketingTextMessages `boolean`
  * ReceiveRegisterClosureReports `boolean`
  * ReceiveTransactionalEmails `boolean`
  * ReceiveTransactionalTextMessages `boolean`
  * SearchTags `string`
  * SendConfirmationForAppointments `boolean`

### EmployeeRoleModel
* EmployeeRoleModel `object`
  * CanAccessAdministratorMode `boolean`
  * CanAccessAppointmentBook `boolean`
  * CanViewGuestHistory `boolean`
  * CanViewServiceHistory `boolean`
  * Id `string`
  * Name `string`
  * OrgOrZoneOrCenterName `string`
  * Permissions `array`
    * items [EmployeeRolePermissionModel](#employeerolepermissionmodel)
  * Scope `integer` (values: 0, 1, 2, 3)
  * ScopeId `string`

### EmployeeRolePermissionModel
* EmployeeRolePermissionModel `object`
  * ObjectName `string`
  * PermissionBitMask `integer`

### EmployeeTipModel
* EmployeeTipModel `object`
  * Employee [TherapistModel](#therapistmodel)
  * TipAmount `number`

### EquipmentModel
* EquipmentModel `object`
  * Id `string`
  * Name `string`

### ExportClassesRequest
* ExportClassesRequest `object`
  * CenterId `string`
  * ClassName `string`
  * ExpandedPaths `string`
  * Format `string`
  * SelectedDate `string`
  * ShowInCatalog `integer`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### ExportUploadResult
* ExportUploadResult `object`
  * ImportId `integer`
  * Successful `boolean`

### FailedReasons
* FailedReasons `object`
  * Date `string`
  * Id `integer`
  * Reason `string`

### FilterValueDTO
* FilterValueDTO `object`
  * DisplayName `string`
  * IsSelected `boolean`
  * Value `string`

### Filters
* Filters `object`
  * Property `string`
  * Value `array`
    * items `string`

### GUID
* GUID `object`

### GetAddOnsRequest
* GetAddOnsRequest `object`
  * CenterId `string`

### GetAddOnsResponse
* GetAddOnsResponse `object`
  * AddOns `array`
    * items [ServiceModel](#servicemodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetAdminEquipmentsForServiceRequest
* GetAdminEquipmentsForServiceRequest `object`
  * CenterId `string`
  * ServiceId `string`

### GetAdminEquipmentsForServiceResponse
* GetAdminEquipmentsForServiceResponse `object`
  * Equipments `array`
    * items [EquipmentModel](#equipmentmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetAdminRoomsForServiceRequest
* GetAdminRoomsForServiceRequest `object`
  * CenterId `string`
  * ServiceId `string`

### GetAdminRoomsForServiceResponse
* GetAdminRoomsForServiceResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Rooms `array`
    * items [RoomModel](#roommodel)

### GetAppSettingsRequest
* GetAppSettingsRequest `object`
  * AppVersion `string`
  * DeviceType `integer` (values: 0, 1, 2, 3, 4)
  * OSType `integer` (values: 0, 1, 2, 21)
  * OSVersion `string`

### GetAppointmentCustomDataAnnotationsResponse
* GetAppointmentCustomDataAnnotationsResponse `object`
  * Annotations `array`
    * items [ImageAnnotation](#imageannotation)
  * Error [ApiResponseError](#apiresponseerror)
  * Success `boolean`

### GetAppointmentCustomDataResponse
* GetAppointmentCustomDataResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * servicecustomdata [Object](#object)
  * success `boolean`
  * total `integer`

### GetAppointmentGroupResponse
* GetAppointmentGroupResponse `object`
  * AppointmentGroup [AppointmentGroupModel](#appointmentgroupmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetAppointmentsRequest
* GetAppointmentsRequest `object`
  * CenterId `string`
  * EndDate `string`
  * StartDate `string`
  * Status `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)

### GetAppointmentsResponse
* GetAppointmentsResponse `object`
  * Appointments `array`
    * items [AppointmentModel](#appointmentmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetAvailableSlotsRequest
* GetAvailableSlotsRequest `object`
  * AppointmentGroupId `string`
  * AppointmentServices `array`
    * items [AppointmentServiceModel](#appointmentservicemodel)
  * CenterId `string`
  * GuestId `string`

### GetAvailableSlotsResponse
* GetAvailableSlotsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * GuestBookedSlots `array`
    * items `integer`
  * OpenSlots `array`
    * items `integer`

### GetAvailableSlotsV2Request
* GetAvailableSlotsV2Request `object`
  * AppointmentGroupId `string`
  * CenterDate `string`
  * CenterId `string`
  * ReservationId `string`
  * SlotBookings `array`
    * items [SlotBooking](#slotbooking)

### GetAvailableSlotsV2Response
* GetAvailableSlotsV2Response `object`
  * Error [ApiResponseError](#apiresponseerror)
  * OpenSlots `array`
    * items [TimeSlot](#timeslot)
  * ReservationId `string`
  * SlotBookings `array`
    * items [SlotBooking](#slotbooking)

### GetAvailableTagsResponse
* GetAvailableTagsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [TagsModel](#tagsmodel)

### GetBusinessUnitsResponse
* GetBusinessUnitsResponse `object`
  * BusinessUnits `array`
    * items [BusinessUnitModel](#businessunitmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetCatalogAvaliableSlotsRequest
* GetCatalogAvaliableSlotsRequest `object`

### GetCategoriesRequest
* GetCategoriesRequest `object`
  * CenterId `string`
  * ParentCategoryId `integer`

### GetCategoriesResponse
* GetCategoriesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [TrainingCategoryModel](#trainingcategorymodel)
  * total `integer`

### GetCenterAppointmentSettingsResponse
* GetCenterAppointmentSettingsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Settings [CenterAppointmentSettings](#centerappointmentsettings)

### GetCenterCollectionsRequest
* GetCenterCollectionsRequest `object`
  * CenterId `string`: Center for which the Collections have to be retrieved. This parameter is mandatory
  * EndDate `string`: The date till which the api has to retrieve the data. By default considers the current date.
  * ShowTaxBreakUp `boolean`: Shows the break up for the tax for an item in an invoice.
  * StartDate `string`: The date from which the api has to retrieve the data. By default considers the current date.

### GetCenterCollectionsResponse
* GetCenterCollectionsResponse `object`
  * CenterCode `string`: Center Code for which the collections are retrieved
  * CenterCollections `array`: Collections in the given period for the center
    * items [CenterCollectionModel](#centercollectionmodel)
  * CenterName `string`: Center Name for which the collections are retrieved
  * Error [ApiResponseError](#apiresponseerror)
  * TotalRows `integer`: Total rows retrieved through the api
  * Zone `string`: Zone to which the center belongs to

### GetCenterDetailsResponse
* GetCenterDetailsResponse `object`
  * Center [CenterModel](#centermodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetCenterGeneralSettingsResponse
* GetCenterGeneralSettingsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Settings [CenterGeneralSettings](#centergeneralsettings)

### GetCenterGuestSettingsResponse
* GetCenterGuestSettingsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Settings [CenterGuestSettings](#centerguestsettings)

### GetCenterInvoiceSettingsResponse
* GetCenterInvoiceSettingsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * PaymentGateway [PaymentGatewayModel](#paymentgatewaymodel)
  * Settings [CenterInvoiceSettings](#centerinvoicesettings)
  * StripePaymentSignUpUrl `string`

### GetCenterSettingsResponse
* GetCenterSettingsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * PaymentGateway [PaymentGatewayModel](#paymentgatewaymodel)
  * Settings [CenterSettings](#centersettings)

### GetCentersListRequest
* GetCentersListRequest `object`
  * CenterId `string`
  * ClassId `integer`
  * ZoneId `string`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetCentersListResponse
* GetCentersListResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [CentersAssocModel](#centersassocmodel)
  * total `integer`

### GetCentersResponse
* GetCentersResponse `object`
  * Centers `array`
    * items [CenterModel](#centermodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetClassDetailsResponse
* GetClassDetailsResponse `object`
  * ClassDetail [TrainingClassDetailModel](#trainingclassdetailmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetClassDurationOptionsResponse
* GetClassDurationOptionsResponse `object`
  * ClassDurationOptions `array`
    * items [ClassDurationModel](#classdurationmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetClassImagesResponse
* GetClassImagesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `string`

### GetClassesRequest
* GetClassesRequest `object`
  * CenterId `string`
  * ClassName `string`
  * ExpandedPaths `string`
  * SelectedDate `string`
  * ShowInCatalog `integer`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetClassesResponse
* GetClassesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [ClassModel](#classmodel)
  * total `integer`

### GetCommissionRequest
* GetCommissionRequest `object`
  * CenterId `string`: Center for which the Split Commission are to be retrieved. This parameter is mandatory.
  * EmployeeType `integer`: default 1, can have one of the three values - 1 ‘All’, 2 ‘Employees’, 3 ‘Consultants’
  * EndDate `string`: The date till which the api has to retrieve the data. By default considers the current date.
  * ReportType `integer`: default 1, can have one of the two values - 1 ‘Sale based’, 2 ‘Collections based’
  * StartDate `string`: The date from which the api has to retrieve the data. By default considers the current date.

### GetCommissionResponse
* GetCommissionResponse `object`
  * CenterCode `string`: Center Code
  * CenterName `string`: Center Name
  * Commissions `array`: Split Commissions
    * items [CommissionModel](#commissionmodel)
  * Error [ApiResponseError](#apiresponseerror)
  * TotalRows `integer`: Total Split Commissions retrieved through the api

### GetCreditCardsOnFileRequest
* GetCreditCardsOnFileRequest `object`
  * CenterId `string`
  * GuestId `string`
  * TransactionFrom `integer` (values: 1, 2, 4, 8, 16)

### GetCreditCardsOnFileResponse
* GetCreditCardsOnFileResponse `object`
  * CreditCardsOnFile `array`
    * items [CreditCardOnFileModel](#creditcardonfilemodel)
  * Error [ApiResponseError](#apiresponseerror)
  * HasExpiredCards `boolean`

### GetCustomDataImageResponse
* GetCustomDataImageResponse `object`
  * AssetId `string`
  * AssetUrl `string`
  * Error [ApiResponseError](#apiresponseerror)

### GetCustomPaymentDataResponse
* GetCustomPaymentDataResponse `object`
  * CustomPaymentData `array`
    * items [CustomPaymentModel](#custompaymentmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetDashboadCenterSalesRequest
* GetDashboadCenterSalesRequest `object`
  * CenterId `string`

### GetDashboadCenterSalesResponse
* GetDashboadCenterSalesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * ProjectedSales `number`
  * TotalSalesActual `number`
  * TotalSalesTargetForMonth `number`
  * TotalSalesTargetTillDay `number`

### GetDashboardAttendanceRequest
* GetDashboardAttendanceRequest `object`
  * CenterId `string`
  * EndDate `string`
  * OrganizationId `string`
  * StartDate `string`
  * ZoneId `string`

### GetDashboardAttendanceResponse
* GetDashboardAttendanceResponse `object`
  * Attendance `integer`
  * Error [ApiResponseError](#apiresponseerror)

### GetDashboardFirstvisitsRequest
* GetDashboardFirstvisitsRequest `object`
  * CenterId `string`
  * EndDate `string`
  * OrganizationId `string`
  * StartDate `string`
  * ZoneId `string`

### GetDashboardFirstvisitsResponse
* GetDashboardFirstvisitsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * FirstVisits `integer`

### GetDashboardFreeTrialsRequest
* GetDashboardFreeTrialsRequest `object`
  * CenterId `string`
  * EndDate `string`
  * OrganizationId `string`
  * StartDate `string`
  * ZoneId `string`

### GetDashboardFreeTrialsResponse
* GetDashboardFreeTrialsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * FreeTrials `integer`

### GetDashboardNewMembersRequest
* GetDashboardNewMembersRequest `object`
  * CenterId `string`
  * EndDate `string`
  * StartDate `string`

### GetDashboardNewMembersResponse
* GetDashboardNewMembersResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * NewMembersCount `integer`

### GetDashboardOnlineBookingsRequest
* GetDashboardOnlineBookingsRequest `object`
  * CenterId `string`
  * EndDate `string`
  * OrganizationId `string`
  * StartDate `string`
  * ZoneId `string`

### GetDashboardOnlineBookingsResponse
* GetDashboardOnlineBookingsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * OnlineBookings `integer`

### GetDesignationResponse
* GetDesignationResponse `object`
  * Designation `array`
    * items [DesignationModel](#designationmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetDiscountsRequest
* GetDiscountsRequest `object`
  * AppointmentDate `string`
  * CenterId `string`
  * GuestId `string`
  * InvoiceId `string`

### GetDiscountsResponse
* GetDiscountsResponse `object`
  * Discounts `array`
    * items [DiscountViewModel](#discountviewmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetDisplayTerminalSettingsResponse
* GetDisplayTerminalSettingsResponse `object`
  * CenterId `string`
  * DisplayTerminalAdvertisementUrl `string`
  * EnableDisplayTerminal `boolean`
  * Error [ApiResponseError](#apiresponseerror)

### GetEmployeeDetailResponse
* GetEmployeeDetailResponse `object`
  * EmployeeDetail [EmployeeDetailModel](#employeedetailmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetEmployeeResponse
* GetEmployeeResponse `object`
  * Employee [EmployeeModel](#employeemodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetEmployeeRolesRequest
* GetEmployeeRolesRequest `object`
  * CenterId `string`
  * EmployeeId `string`
  * ReturnPermissions `boolean`

### GetEmployeeRolesResponse
* GetEmployeeRolesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * SecurityRoles `array`
    * items [EmployeeRoleModel](#employeerolemodel)

### GetEmployeeTipsResponse
* GetEmployeeTipsResponse `object`
  * EmployeeTips `array`
    * items [EmployeeTipModel](#employeetipmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetEmployeesRequest
* GetEmployeesRequest `object`
  * CenterId `string`
  * Date `string`

### GetEmployeesResponse
* GetEmployeesResponse `object`
  * Employees `array`
    * items [TherapistModel](#therapistmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetEquipmentsForServiceRequest
* GetEquipmentsForServiceRequest `object`
  * AppointmentId `string`
  * CenterId `string`
  * RoomId `string`
  * ServiceId `string`

### GetEquipmentsForServiceResponse
* GetEquipmentsForServiceResponse `object`
  * Equipments `array`
    * items [EquipmentModel](#equipmentmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetForgotPasswordRequest
* GetForgotPasswordRequest `object`
  * Email `string`
  * Phone `string`
  * UseraName `string`

### GetForgotPasswordResponse
* GetForgotPasswordResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Success `boolean`

### GetGiftTypesResponse
* GetGiftTypesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * GiftCardTypes `array`
    * items [GiftTypeModel](#gifttypemodel)

### GetGuestCheckinRequest
* GetGuestCheckinRequest `object`
  * CenterId `string`

### GetGuestCheckinResponse
* GetGuestCheckinResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsNumberVisitsExceeded `boolean`
  * IsSignedIn `boolean`

### GetGuestCustomDataResponse
* GetGuestCustomDataResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * guestcustomdata [Object](#object)
  * success `boolean`
  * total `integer`

### GetGuestDetailsByCodeResponse
* GetGuestDetailsByCodeResponse `object`
  * Code `string`
  * Email `string`
  * Error [ApiResponseError](#apiresponseerror)
  * FirstName `string`
  * Id `string`
  * LastName `string`
  * MiddleName `string`
  * MobilePhoneModel [PhoneModel](#phonemodel)

### GetGuestRequest
* GetGuestRequest `object`
  * Type `integer` (values: 0, 1)

### GetGuestResponse
* GetGuestResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * GuestDetails [EmployeeApp_Guest](#employeeapp_guest)
  * Success `boolean`

### GetGuestsResponseV5
* GetGuestsResponseV5 `object`
  * error `object`
  * guests `array`
    * items `object`
      * center `object`
        * id `string`: DataType: Unique Identifier(GUID)
        * name `string`
      * code `string`: Guest Code
      * email `string`: Email associated with the Guest
      * first_name `string`: First Name of the Guest
      * gender `number`: NotSpecified = -1,
      * home_phone `object`
        * country_id `number`
        * number `string`
      * id `string`: DataType: Unique Identifier(GUID)
      * last_name `string`: Last Name of the Guest
      * mobile_phone `object`
        * country_id `number`
        * number `string`
      * work_phone `object`
        * country_id `number`
        * number `string`

### GetImportStatusByImportIdResponse
* GetImportStatusByImportIdResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * ImportStatus [ImportStatus](#importstatus)

### GetImportStatusResponse
* GetImportStatusResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * ImportStatuses `array`
    * items [ImportStatus](#importstatus)

### GetInstructorsRequest
* GetInstructorsRequest `object`
  * ClassId `integer`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetInstructorsResponse
* GetInstructorsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [InstructorsModel](#instructorsmodel)
  * total `integer`

### GetInstructorsforAdminResponse
* GetInstructorsforAdminResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [InstructorsModelforAdmin](#instructorsmodelforadmin)
  * total `integer`

### GetInvoiceResponse
* GetInvoiceResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * GroupInvoice [GroupInvoiceModel](#groupinvoicemodel)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsGroupInvoice `boolean`

### GetIssuesAndNotificationsRequest
* GetIssuesAndNotificationsRequest `object`
  * GuestId `string`
  * Option `integer` (values: 0, 1)
  * PageNum `integer`
  * PageSize `integer`

### GetIssuesAndNotificationsResponse
* GetIssuesAndNotificationsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Issues `array`
    * items [IssueModel](#issuemodel)
  * Notifications `array`
    * items [MessageModel](#messagemodel)

### GetJobsRequest
* GetJobsRequest `object`
  * CenterId `string`

### GetJobsResponse
* GetJobsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Jobs `array`
    * items [JobModel](#jobmodel)

### GetLoginRequest
* GetLoginRequest `object`
  * Password `string`
  * UserName `string`

### GetLoginResponse
* GetLoginResponse `object`
  * CenterId `string`
  * Error [ApiResponseError](#apiresponseerror)
  * FirstName `string`
  * GuestCode `string`
  * GuestId `string`
  * LastName `string`
  * WebSessionId `string`

### GetLogoutRequest
* GetLogoutRequest `object`
  * WebSessionId `string`

### GetLogoutResponse
* GetLogoutResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Success `boolean`

### GetLoyaltyProgramsRequest
* GetLoyaltyProgramsRequest `object`
  * GuestId `string`
  * InvoiceId `string`

### GetLoyaltyProgramsResponse
* GetLoyaltyProgramsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * LoyaltyPrograms `array`
    * items [LoyaltyModel](#loyaltymodel)

### GetMembershipsDetailsResponse
* GetMembershipsDetailsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * MembershipDetails [MembershipDetailModel](#membershipdetailmodel)

### GetMembershipsRequest
* GetMembershipsRequest `object`
  * CenterId `string`
  * GuestId `string`
  * ShowInCatalog `boolean`

### GetMembershipsResponse
* GetMembershipsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Memberships `array`
    * items [MembershipModel](#membershipmodel)
  * total `integer`

### GetMonthlyAppointmentsDatesRequest
* GetMonthlyAppointmentsDatesRequest `object`
  * CenterId `string`
  * Month `integer`
  * TherapistId `string`
  * Year `integer`

### GetMonthlyAppointmentsDatesResponse
* GetMonthlyAppointmentsDatesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * MonthlyAppointmentDates `array`
    * items [MonthlyAppointmentDatesModel](#monthlyappointmentdatesmodel)

### GetNotesResponse
* GetNotesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Notes `array`
    * items [NoteModel](#notemodel)

### GetNotificationsRequest
* GetNotificationsRequest `object`
  * Page `integer`
  * Size `integer`

### GetNotificationsResponse
* GetNotificationsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Notifications `array`
    * items [PushNotification](#pushnotification)

### GetOnlineTransactionRequest
* GetOnlineTransactionRequest `object`
  * CardLogo `string`: The transactions for the given card logo for which the api has to retrieve the data. By default considers all type of card logos.
  * CenterId `string`: Center for which the Revenue has to be retrieved. This parameter is mandatory
  * EndDate `string`: The date till which the api has to retrieve the data. By default considers the current date.
  * StartDate `string`: The date from which the api has to retrieve the data. By default considers the current date.
  * TransactionStatus `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10): The transaction status for which the api has to retrieve the data. By default considers all transaction statuses.
  * TransactionType `integer` (values: 0, 1, 2, 3, 4, 5): The transaction type for which the api has to retrieve the data. By default considers all transaction types.
  * View `integer` (values: 1, 2): The view for which the api has to retrieve the data. By default considers the default view.

### GetOnlineTransactionResponse
* GetOnlineTransactionResponse `object`
  * CenterCode `string`: Center Code for which the online transactions is retrieved
  * CenterName `string`: Center Name for which the online transactions is retrieved
  * Error [ApiResponseError](#apiresponseerror)
  * OnlineTransactions `array`: Online transactions in the given period for the center
    * items [OnlineTransactionModel](#onlinetransactionmodel)
  * TotalRows `integer`: Total rows retrieved through the api

### GetOpportunityDetailsResponse
* GetOpportunityDetailsResponse `object`
  * oppportunity `object`
    * center `object`
      * center_id `string`: DataType: Unique Identifier(GUID)
      * center_name `string`
    * created_by `string`: Name of the employee who created the opportunity
    * creation_date `string`: DataType: DateTime(YYYY-MM-DD), Center Time
    * custom_fields `object`
      * id `string`: DataType: Unique Identifier(GUID), GUID of a custom Field
      * name `string`
      * value `string`: value of the respective custom field
    * expected_close_date `string`: DataType: DateTime(YYYY-MM-DD), Center Time
    * followup_date `string`: DataType: DateTime(YYYY-MM-DD), Center Time
    * guest `object`: Details of the guest in the context of the opportunity
      * guest_id `string`: DataType: Unique Identifier(GUID)
      * guest_name `string`
    * lead_source `object`: lead source details of the opportunity
      * code `string`: unique code for the lead source
      * id `string`: DataType: Unique Identifier(GUID)
      * name `string`
    * opportunity_description `string`
    * opportunity_id `string`: Data Type : Unique Identifier(GUID) , unique for an opportunity
    * opportunity_no `number`: unique number of the opportunity
    * opportunity_owner_id `string`: DataType: Unique identifier(GUID), GUID of the employee who owns the opportunity
    * opportunity_title `string`: title of the opportunity
    * opportunity_type `string`: type of the opportunity as defined by the organization
    * opportunity_user_id `string`: DataType: Unique identifier(GUID), GUID of the employee who created the opportunity
    * optional `object`
      * optional_field_1 `string`
      * optional_field_2 `string`
      * optional_field_3 `string`
    * price `object`
      * listed_price `number`: price listed in the catalogue
      * offered_price `number`: price offered
    * priority `object`
      * priority_id `string`: DataType: Unique Identifier(GUID), GUID of a custom Field
      * priority_name `string`
    * sales_owner `string`: Name of the employee who owns the opportunity
    * stage `object`
      * stage_id `string`: DataType: Unique Identifier(GUID)
      * stage_name `string`
    * therapist_id `string`: DataType: Unique Identifier(GUID)
    * ticket_id `object`

### GetOpportunityNotesHistoryResponse
* GetOpportunityNotesHistoryResponse `object`
  * notes `array`
    * items `object`
      * creation_date `string`: DataType : DateTime(YYYY-MM-DD), Date on which the notes is Created
      * id `string`: DataType : UniqueIdentifier(GUID)
      * updated_by_id `string`: DataType : UniqueIdentifier(GUID),GUID of the employee who updated the notes
      * value `string`: content of the notes

### GetOrganizationCustomFieldResponse
* GetOrganizationCustomFieldResponse `object`
  * custom_field_details `array`
    * items `object`
      * active `boolean`: true : active, false : inactive
      * allow_guest_to_edit `boolean`
      * allow_guest_to_view `boolean`
      * custom_field_type `number`: 1-Service , 2 - Guest , 3 - Opportunity
      * data_type `string`
      * default_value `string`
      * entity_definition_FK `number`
      * field_attributes `string`
      * field_code `string`
      * field_description `string`
      * field_id `string`: DataType: Unique Identifier(GUID)
      * field_name `string`
      * field_order `number`: Order of fields to be displayed
      * field_type `string`: DataType: Unique Identifier(GUID)
      * group_id `number`: DataType: Unique Identifier(GUID)
      * is_required `boolean`: true : mandatory , false : not mandatory
      * list_id `string`: DataType: Unique Identifier(GUID)
      * print_on_receipt `boolean`
      * reference_entity_definition_FK `number`
      * reference_id `string`: DataType: Unique Identifier(GUID)
      * updated_on `string`: DataType: DateTime (YYYY-MM-DD)

### GetOrganizationDetailsResponse
* GetOrganizationDetailsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Organization [OrganizationModel](#organizationmodel)

### GetOrganizationGeneralSettingsResponse
* GetOrganizationGeneralSettingsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Settings [OrganizationGeneralSettings](#organizationgeneralsettings)

### GetOrganizationGuestSettingsResponse
* GetOrganizationGuestSettingsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Settings [OrganizationGuestSettings](#organizationguestsettings)

### GetOrganizationInvoiceSettingsResponse
* GetOrganizationInvoiceSettingsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Settings [OrganizationInvoiceSettings](#organizationinvoicesettings)

### GetPackageServicesRequest
* GetPackageServicesRequest `object`
  * CenterId `string`
  * PackageId `string`

### GetPackageServicesResponse
* GetPackageServicesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Services `array`
    * items [ServiceModel](#servicemodel)

### GetPackagesRequest
* GetPackagesRequest `object`
  * AppointmentDate `string`
  * CenterId `string`
  * Type `integer` (values: 1, 2, 3)

### GetPackagesResponse
* GetPackagesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Packages `array`
    * items [PackageModel](#packagemodel)

### GetPastAppointmentsRequest
* GetPastAppointmentsRequest `object`
  * EndDate `string`
  * StartDate `string`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetPastAppointmentsResponse
* GetPastAppointmentsResponse `object`
  * Appointments `array`
    * items [AppointmentGroupModel](#appointmentgroupmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetPayrollRequest
* GetPayrollRequest `object`
  * CenterId `string`: Center for which the employee payroll are to be retrieved. This parameter is mandatory.
  * EmployeeId `string`: Employee for which the Payroll is to be retrieved. This parameter is optional.
  * EndDate `string`: The date till which the api has to retrieve the data. By default considers the current date.
  * ReportType `integer`: default 1, can have one of the two values  1 'Summary', 2 'Details'
  * StartDate `string`: The date from which the api has to retrieve the data. By default considers the current date.

### GetPayrollResponse
* GetPayrollResponse `object`
  * CenterCode `string`: Center Code
  * CenterName `string`: Center Name
  * Error [ApiResponseError](#apiresponseerror)
  * Payroll `array`: Payroll
    * items [PayrollModel](#payrollmodel)
  * TotalRows `integer`: Total rows for the employee payroll retrieved through the api

### GetPodDetailsResponse
* GetPodDetailsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Pod [PodModel](#podmodel)

### GetPointsResponse
* GetPointsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * tiers `array`
    * items [GuestPointsTierModel](#guestpointstiermodel)

### GetProductCategoriesRequest
* GetProductCategoriesRequest `object`
  * CenterId `string`

### GetProductCategoriesResponse
* GetProductCategoriesResponse `object`
  * Categories `array`
    * items [ProductCategoryModel](#productcategorymodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetProductMasterListRequest
* GetProductMasterListRequest `object`
  * CenterId `string`
  * OrganizationId `string`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetProductMasterListResponse
* GetProductMasterListResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [ProductMasterListModel](#productmasterlistmodel)
  * total `integer`

### GetProductsRequest
* GetProductsRequest `object`
  * CategoryId `string`
  * CenterId `string`
  * PageNum `integer`
  * PageSize `integer`

### GetProductsResponse
* GetProductsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Products `array`
    * items [ProductModel](#productmodel)
  * ProductsCount `integer`

### GetProfilePictureResponse
* GetProfilePictureResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * PictureUrl `string`

### GetPurchaseOrderRequest
* GetPurchaseOrderRequest `object`
  * CenterId `string`: Center for which the Purchase Orders are retrieved. This parameter is mandatory.
  * DateCriteria `integer`: default 2, can have one of the three values - 1 ‘raised’, 2 ‘completed’, 3 ‘delivered’
  * EndDate `string`: The date till which the api has to retrieve the data. By default considers the current date.
  * ShowDeliveryDetails `boolean`: default ‘false’, returns only PO details. When this is true, PO includes the details of delivery as well.
  * StartDate `string`: The date from which the api has to retrieve the data. By default considers the current date.

### GetPurchaseOrderResponse
* GetPurchaseOrderResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * PurchaseOrders `array`: purchase orders
    * items [PurchaseOrderModel](#purchaseordermodel)
  * TotalPurchaseOrders `integer`: Total Purchase Orders retrieved through the api

### GetReasonsRequest
* GetReasonsRequest `object`
  * Action `integer` (values: 0)
  * Object `integer` (values: 0, 1, 2)

### GetReasonsResponse
* GetReasonsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Reasons `array`
    * items [ReasonModel](#reasonmodel)

### GetRecurrencesRequest
* GetRecurrencesRequest `object`
  * StartDate `string`
  * Status `integer` (values: 0, 1, 2, 3, 4)

### GetRecurrencesResponse
* GetRecurrencesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [RecurrenceSchedulesModel](#recurrenceschedulesmodel)
  * total `integer`

### GetRevenueInvoiceItemRequest
* GetRevenueInvoiceItemRequest `object`
  * CenterId `string`: Center for which the Revenue has to be retrieved. This parameter is mandatory
  * ConsiderRefunds `boolean`: Should the api consider the refunds while retrieving the revenue
  * EndDate `string`: The date till which the api has to retrieve the data. By default considers the current date.
  * IncludeExpiredPackageRevenue `boolean`: Specify if the api has to consider the revenue from the expired packages or not. If not specified api considers the value configured for the Organization.
  * ItemType `integer`: The type of items for which the api has to return the data. By default gives the revenue for all types of items. -1: all other item types,7-Prepaid card
  * MembershipType `integer`: Specify for the kind of memberships for which the revenue is to be retrieved. -1 :all 0:non recurring 1:recurring. By default it gives data for all.
  * StartDate `string`: The date from which the api has to retrieve the data. By default considers the current date.

### GetRevenueInvoiceItemResponse
* GetRevenueInvoiceItemResponse `object`
  * CenterCode `string`: Center Code for which the Revenue is retrieved
  * CenterName `string`: Center Name for which the Revenue is retrieved
  * Error [ApiResponseError](#apiresponseerror)
  * InvoiceItems `array`: Revenue for each invoice item in the given period for the center
    * items [RevenueInvoiceItemModel](#revenueinvoiceitemmodel)
  * TotalRows `integer`: Total rows retrieved through the api

### GetRoomsForServiceRequest
* GetRoomsForServiceRequest `object`
  * AppointmentId `string`
  * CenterId `string`
  * ServiceId `string`
  * StartTime `string`
  * TherapistId `string`

### GetRoomsForServiceResponse
* GetRoomsForServiceResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Rooms `array`
    * items [RoomModel](#roommodel)

### GetRoomsRequest
* GetRoomsRequest `object`
  * ClassId `integer`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetRoomsResponse
* GetRoomsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [RoomsModel](#roomsmodel)
  * total `integer`

### GetSchedulesSummaryRequest
* GetSchedulesSummaryRequest `object`
  * CenterId `string`
  * Status `integer` (values: 0, 1, 2, 3, 4)
  * ZoneId `string`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetSchedulesSummaryResponse
* GetSchedulesSummaryResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [ScheduleSummaryModel](#schedulesummarymodel)
  * total `integer`

### GetSendOtpRequest
* GetSendOtpRequest `object`
  * Email `string`
  * Phone `string`

### GetSendOtpResponse
* GetSendOtpResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * VerificationId `string`

### GetServiceCategoriesRequest
* GetServiceCategoriesRequest `object`
  * CenterId `string`
  * ParentCategoryId `string`

### GetServiceCategoriesResponse
* GetServiceCategoriesResponse `object`
  * Categories `array`
    * items [ServiceCategoryModel](#servicecategorymodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetServiceDetailResponse
* GetServiceDetailResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * ServiceDetail [ServiceDetailModel](#servicedetailmodel)

### GetServicePricesRequest
* GetServicePricesRequest `object`
  * ServiceId `string`

### GetServicePricesResponse
* GetServicePricesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * ServicePrices `array`
    * items [ServicePrice](#serviceprice)

### GetServicesRequest
* GetServicesRequest `object`
  * CategoryId `string`
  * CenterId `string`
  * PageNum `integer`
  * PageSize `integer`

### GetServicesResponse
* GetServicesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Services `array`
    * items [ServiceModel](#servicemodel)
  * ServicesCount `integer`

### GetSimpleTrainingSchedulesRequest
* GetSimpleTrainingSchedulesRequest `object`
  * CenterId `string`
  * ClassId `integer`
  * ClassName `string`
  * EndDate `string`
  * ExcludeCategoryIds `string`
  * ExcludeClassIds `string`
  * ExcludeInstructorIds `string`
  * ExcludeRoomIds `string`
  * ExpandedPaths `string`
  * RecurrenceId `integer`
  * RegistrationId `integer`
  * SessionId `integer`
  * ShowInCatalog `integer`
  * StartDate `string`
  * Status `integer` (values: 0, 1, 2, 3, 4)
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetSimpleTrainingSchedulesResponse
* GetSimpleTrainingSchedulesResponse `object`
  * Categories `array`
    * items [TrainingCategorySimple](#trainingcategorysimple)
  * Classes `array`
    * items [TrainingClassSimple](#trainingclasssimple)
  * Error [ApiResponseError](#apiresponseerror)
  * Instructors `array`
    * items [TrainingInstructorSimple](#traininginstructorsimple)
  * Rooms `array`
    * items [TrainingRoomSimple](#trainingroomsimple)
  * results `array`
    * items [TrainingSessionSimpleModel](#trainingsessionsimplemodel)
  * total `integer`

### GetStripeSettingsResponse
* GetStripeSettingsResponse `object`
  * ApplicationFeePercent `number`
  * Error [ApiResponseError](#apiresponseerror)
  * PayworksMerchantIdentifier `string`
  * PayworksMerchantSecretKey `string`
  * StatementDescriptorPrefix `string`
  * StripeAccountId `string`
  * StripePublishableKey `string`
  * TransactionFee `number`

### GetTagsRequest
* GetTagsRequest `object`
  * ClassId `integer`

### GetTaxGroupsResponse
* GetTaxGroupsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * TaxGroups `array`
    * items [CenterTaxGroupModel](#centertaxgroupmodel)

### GetTherapistsForServiceRequest
* GetTherapistsForServiceRequest `object`
  * CenterId `string`
  * ServiceId `string`

### GetTherapistsForServiceResponse
* GetTherapistsForServiceResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Therapists `array`
    * items [TherapistModel](#therapistmodel)

### GetTherapistsRequest
* GetTherapistsRequest `object`
  * AppointmentId `string`
  * CenterId `string`
  * EndTime `string`
  * SearchValue `string`
  * ServiceId `string`
  * StartTime `string`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetTherapistsResponse
* GetTherapistsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Therapists `array`
    * items [TherapistModel](#therapistmodel)
  * Total `integer`

### GetTipsRequest
* GetTipsRequest `object`
  * CenterId `string`: Center for which the Split Tips are to be retrieved. This parameter is mandatory.
  * EmployeeId `string`: Employee for which the Split Tips are to be retrieved. This parameter is optional.
  * EndDate `string`: The date till which the api has to retrieve the data. By default considers the current date.
  * ReportType `integer`: default 1, can have one of the two values - 1 ‘Based on collections’, 2 ‘Based on sales’, 3 'Based on closing'
  * StartDate `string`: The date from which the api has to retrieve the data. By default considers the current date.
  * Status `integer`: default 1, can have one of the three values - 1 ‘Open’, 2 ‘Closed’, 3 ‘All’

### GetTipsResponse
* GetTipsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Tips `array`: Split Tips
    * items [TipModel](#tipmodel)
  * TotalRows `integer`: Total Split tips retrieved through the api

### GetTrainingLevelDetailsResponse
* GetTrainingLevelDetailsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * TrainingLevelDetails [TrainingLevelModel](#traininglevelmodel)

### GetTrainingLevelsRequest
* GetTrainingLevelsRequest `object`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetTrainingLevelsResponse
* GetTrainingLevelsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [TrainingLevelModel](#traininglevelmodel)
  * total `integer`

### GetTrainingSchedulesRequest
* GetTrainingSchedulesRequest `object`
  * CenterId `string`
  * ClassId `integer`
  * ClassName `string`
  * EndDate `string`
  * ExpandedPaths `string`
  * RecurrenceId `integer`
  * ShowInCatalog `integer`
  * StartDate `string`
  * Status `integer` (values: 0, 1, 2, 3, 4)
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetTrainingSchedulesResponse
* GetTrainingSchedulesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * results `array`
    * items [SessionModel](#sessionmodel)
  * total `integer`

### GetTrainingSessionResponse
* GetTrainingSessionResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * SessionDetail [TrainingSessionDetailModel](#trainingsessiondetailmodel)

### GetUpcomingAppointmentsRequest
* GetUpcomingAppointmentsRequest `object`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### GetUpcomingAppointmentsResponse
* GetUpcomingAppointmentsResponse `object`
  * Appointments `array`
    * items [AppointmentGroupModel](#appointmentgroupmodel)
  * Error [ApiResponseError](#apiresponseerror)

### GetUserMembershipsRequest
* GetUserMembershipsRequest `object`
  * CenterId `string`
  * GuestId `string`
  * InvoiceId `string`

### GetUserMembershipsResponse
* GetUserMembershipsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * UserMemberships `array`
    * items [MembershipUserModel](#membershipusermodel)

### GetUserPackagesRequest
* GetUserPackagesRequest `object`
  * CenterId `string`
  * GuestId `string`
  * InvoiceId `string`

### GetUserPackagesResponse
* GetUserPackagesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * UserPackages `array`
    * items [PackageUserModel](#packageusermodel)

### GetUserRegistrationsAdminResponse
* GetUserRegistrationsAdminResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Success `boolean`
  * results `array`
    * items [RegistrationModel](#registrationmodel)
  * total `integer`

### GetUserRegistrationsRequest
* GetUserRegistrationsRequest `object`
  * CenterId `string`
  * UserId `string`
  * endDate `string`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)
  * startDate `string`

### GetUserRegistrationsResponse
* GetUserRegistrationsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Success `boolean`
  * results `array`
    * items [RegistrationModelSimple](#registrationmodelsimple)
  * total `integer`

### GetUtilizationRequest
* GetUtilizationRequest `object`
  * CenterId `string`: Center for which the employee utilization are to be retrieved. This parameter is mandatory.
  * EmployeeId `string`: Employee for which the Utilization are to be retrieved. This parameter is optional.
  * EndDate `string`: The date till which the api has to retrieve the data. By default considers the current date.
  * JobId `string`: Employees having a particular job for which the Utilization are to be retrieved. This parameter is optional.
  * StartDate `string`: The date from which the api has to retrieve the data. By default considers the current date.

### GetUtilizationResponse
* GetUtilizationResponse `object`
  * CenterCode `string`: Center Code
  * CenterName `string`: Center Name
  * Error [ApiResponseError](#apiresponseerror)
  * TotalRows `integer`: Total rows for the employee utilization retrieved through the api
  * Utilization `array`: Utilization
    * items [UtilizationModel](#utilizationmodel)

### GetVerifyOtpRequest
* GetVerifyOtpRequest `object`
  * OTP `string`
  * VerificationId `string`

### GetVerifyOtpResponse
* GetVerifyOtpResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Verified `boolean`

### GiftCardModel
* GiftCardModel `object`
  * Code `string`
  * ExpiryDate `string`
  * GiftTypeId `string`
  * Id `string`
  * IsOneTimeUse `boolean`
  * Notes `string`
  * Price [PriceModel](#pricemodel)
  * PurchasePrice `number`
  * Recipient [GuestModel](#guestmodel)
  * SendEmailToRecipient `boolean`
  * Services [GiftCardServicesModel](#giftcardservicesmodel)
  * ValidityDays `integer`
  * Value `number`

### GiftCardPriceAndValue
* GiftCardPriceAndValue `object`
  * AllowDifference `boolean`
  * RequiresAuthorization `boolean`

### GiftCardServicesModel
* GiftCardServicesModel `object`
  * Services `array`
    * items [ServiceModel](#servicemodel)

### GiftCardSettings
* GiftCardSettings `object`
  * EnableSale `boolean`
  * PriceAndValue [GiftCardPriceAndValue](#giftcardpriceandvalue)

### GiftTypeModel
* GiftTypeModel `object`
  * Id `string`
  * Name `string`

### GroupInvoiceModel
* GroupInvoiceModel `object`
  * Id `string`
  * Invoices `array`
    * items [InvoiceModel](#invoicemodel)
  * Payments `array`
    * items [PaymentModel](#paymentmodel)
  * Price [PriceModel](#pricemodel)
  * Redemptions `array`
    * items [RedemptionModel](#redemptionmodel)

### Guest
* Guest [GuestModel](#guestmodel)

### GuestFields
* GuestFields `object`
  * HomePhoneModel [PhoneModel](#phonemodel)
  * MobilePhoneModel [PhoneModel](#phonemodel)
  * WorkPhoneModel [PhoneModel](#phonemodel)
  * address1 `string`
  * address2 `string`
  * anniversarydate `string`
  * city `string`
  * countryFK `string`
  * dob `string`
  * dob_incompleteyear `string`
  * dtAnniversaryDate `string`
  * dtDOB `string`
  * email `string`
  * firstName `string`
  * gender `string`
  * homephone `string`
  * lastName `string`
  * mobile `string`
  * receiveMarketingEMail `boolean`
  * receiveMarketingSMS `boolean`
  * receiveTransactionalEMail `boolean`
  * receiveTransactionalSMS `boolean`
  * referralsourceid `string`
  * stateFK `string`
  * userId `string`
  * workphone `string`
  * zipCode `string`

### GuestModel
* GuestModel `object`
  * Address1 `string`
  * Address2 `string`
  * AnniversaryDate `string`
  * CenterCode `string`
  * CenterId `string`
  * CenterName `string`
  * City `string`
  * Code `string`: Code assigned to Guest
  * Country [CountryModel](#countrymodel)
  * CreationDate `string`
  * DOB_IncompleteYear `string`
  * DateOfBirth `string`
  * Email `string`: Email
  * FirstName `string`: First Name
  * Gender `integer` (values: -1, 0, 1): -1 - NotSpecified, 0 - Female, 1- Male
  * GuestIndicator `string`
  * HomePhone `string`
  * HomePhoneModel [PhoneModel](#phonemodel)
  * Id `string`: Unique Id of Guest
  * IsMember `integer`
  * LastName `string`: Last Name
  * LastUpdated `string`
  * MergeIntoCode `string`
  * MergeIntoGuestId `string`
  * MiddleName `string`: Middle Name
  * MobileNumber `string`
  * MobilePhoneModel [PhoneModel](#phonemodel)
  * Nationality [CountryModel](#countrymodel)
  * PostalCode `string`
  * ReceiveMarketingEmail `boolean`: Receive marketing email
  * ReceiveMarketingSms `boolean`: Receive marketing SMS
  * ReceiveTransactionalEmail `boolean`: Receive Email for transactions
  * ReceiveTransactionalSms `boolean`: Receive SMS alert for transactions
  * ReferralSource [ReferralSourceModel](#referralsourcemodel)
  * ReferredGuestId `string`
  * State [StateModel](#statemodel)

### GuestPointsTierModel
* GuestPointsTierModel `object`
  * EndDate `string`
  * GuestId `string`
  * Id `integer`
  * StartDate `string`
  * TierId `string`
  * TierName `string`

### Guid
* Guid [GUID](#guid)

### ImageAnnotation
* ImageAnnotation `object`
  * CreatedBy `string`
  * CreatedDate `string`
  * CustomFieldType `integer`
  * CustomFieldValueId `string`
  * ImageAnnotationId `string`
  * ModifiedBy `string`
  * ModifiedDate `string`
  * ShapeHeight `number`
  * ShapeType `string`
  * ShapeWidth `number`
  * ShapeX `number`
  * ShapeY `number`
  * Value `string`
  * ValueType `integer`
  * Void `boolean`

### ImportStatus
* ImportStatus `object`
  * ErrorLogFile `string`
  * ImportAction `string`
  * ImportDate `string`
  * ImportId `integer`
  * ImportType `string`
  * ImportedBy `string`
  * SourceFile `string`
  * Status `string`
  * TotalRows `integer`
  * ValidRows `integer`

### ImportUploadResult
* ImportUploadResult `object`
  * FileName `string`
  * ImportId `integer`
  * Successful `boolean`

### InitiatePaymentCreditCardRequest
* InitiatePaymentCreditCardRequest `object`
  * Amount `number`
  * CashRegisterId `string`
  * CreditCardGateway `string`
  * GuestId `string`
  * InvoiceId `string`
  * Source `integer` (values: 0, 1, 2, 3, 4, 5, 6)
  * TipAmount `number`

### InitiatePaymentCreditCardResponse
* InitiatePaymentCreditCardResponse `object`
  * CreditCardGateway `string`
  * Error [ApiResponseError](#apiresponseerror)
  * GatewaySettings `object`
  * OrderId `string`

### InstructorsModel
* InstructorsModel `object`
  * Description `string`
  * Id `string`
  * ImagePaths `object`
  * IsAssociated `integer`
  * Name `string`
  * NumSessions `integer`

### InstructorsModelforAdmin
* InstructorsModelforAdmin `object`
  * Email `string`
  * FirstName `string`
  * FullName `string`
  * Gender `integer` (values: 0, 1, 2, 3, 4)
  * Id `string`
  * ImagePaths `object`
  * IsAssociated `integer`
  * IsAvailable `boolean`
  * LastName `string`
  * MobilePhoneModel [PhoneModel](#phonemodel)
  * PhoneNumber `string`
  * ScaledPrice `number`
  * ScalingFactor `number`
  * ServiceTime `integer`
  * ShortName `string`
  * VanityImageUrl `string`

### InvoiceCloseRequest
* InvoiceCloseRequest `object`
  * InvoiceId `string`

### InvoiceCloseResponse
* InvoiceCloseResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsInvoiceClosed `boolean`
  * Status `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)

### InvoiceDiscountModel
* InvoiceDiscountModel `object`
  * Action `string`
  * CampaignId `string`
  * CouponId `integer`
  * DiscountAmount `number`
  * DiscountId `string`
  * Type `integer` (values: 0, 1, 2)

### InvoiceGiftCardBuyModel
* InvoiceGiftCardBuyModel `object`
  * AppliedDiscount [InvoiceDiscountModel](#invoicediscountmodel)
  * AppliedMembership [InvoiceMembershipModel](#invoicemembershipmodel)
  * AppliedPackage [InvoicePackageModel](#invoicepackagemodel)
  * AppointmentGiftCard [AppointmentGiftCardModel](#appointmentgiftcardmodel)

### InvoiceMembershipBuyModel
* InvoiceMembershipBuyModel `object`
  * AppliedDiscount [InvoiceDiscountModel](#invoicediscountmodel)
  * AppliedMembership [InvoiceMembershipModel](#invoicemembershipmodel)
  * AppliedPackage [InvoicePackageModel](#invoicepackagemodel)
  * AppointmentMembership [AppointmentMembershipModel](#appointmentmembershipmodel)

### InvoiceMembershipModel
* InvoiceMembershipModel `object`
  * Action `string`
  * DiscountAmount `number`
  * MembershipId `string`

### InvoiceModel
* InvoiceModel `object`
  * AppointmentGroupId `string`
  * Guest [GuestModel](#guestmodel)
  * GuestId `string`
  * Id `string`
  * InvoiceGiftCards `array`
    * items [InvoiceGiftCardBuyModel](#invoicegiftcardbuymodel)
  * InvoiceMemberships `array`
    * items [InvoiceMembershipBuyModel](#invoicemembershipbuymodel)
  * InvoiceNumber `string`
  * InvoiceProducts `array`
    * items [InvoiceProductModel](#invoiceproductmodel)
  * InvoiceSeriesPackages `array`
    * items [InvoiceSeriesPackageBuyModel](#invoiceseriespackagebuymodel)
  * InvoiceServices `array`
    * items [InvoiceServiceModel](#invoiceservicemodel)
  * IsRebooking `boolean`
  * Notes `string`
  * Payments `array`
    * items [PaymentModel](#paymentmodel)
  * Price [PriceModel](#pricemodel)
  * ReceiptNumber `string`
  * Redemptions `array`
    * items [RedemptionModel](#redemptionmodel)
  * RefundItems `array`
    * items [RefundItemModel](#refunditemmodel)
  * ReservationId `string`
  * SaleDate `string`
  * Status `integer` (values: 0, 1, 4, 11)

### InvoicePackageModel
* InvoicePackageModel `object`
  * Action `string`
  * DiscountAmount `number`
  * PackageId `string`

### InvoiceProductModel
* InvoiceProductModel `object`
  * AppliedDiscount [InvoiceDiscountModel](#invoicediscountmodel)
  * AppliedMembership [InvoiceMembershipModel](#invoicemembershipmodel)
  * AppliedPackage [InvoicePackageModel](#invoicepackagemodel)
  * AppointmentProduct [AppointmentProductModel](#appointmentproductmodel)

### InvoiceReOpenRequest
* InvoiceReOpenRequest `object`
  * Comments `string`
  * InvoiceId `string`

### InvoiceReOpenResponse
* InvoiceReOpenResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsInvoiceReOpen `boolean`
  * Status `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)

### InvoiceSeriesPackageBuyModel
* InvoiceSeriesPackageBuyModel `object`
  * AppliedDiscount [InvoiceDiscountModel](#invoicediscountmodel)
  * AppliedMembership [InvoiceMembershipModel](#invoicemembershipmodel)
  * AppliedPackage [InvoicePackageModel](#invoicepackagemodel)
  * AppointmentSeriesPackage [AppointmentSeriesPackageModel](#appointmentseriespackagemodel)

### InvoiceServiceModel
* InvoiceServiceModel `object`
  * AppliedDiscount [InvoiceDiscountModel](#invoicediscountmodel)
  * AppliedMembership [InvoiceMembershipModel](#invoicemembershipmodel)
  * AppliedPackage [InvoicePackageModel](#invoicepackagemodel)
  * AppointmentService [AppointmentServiceModel](#appointmentservicemodel)

### InvoiceSummaryModel
* InvoiceSummaryModel `object`
  * AppointmentStatus `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)
  * Guest [GuestModel](#guestmodel)
  * InvoiceId `string`
  * InvoiceNumber `string`
  * Price [PriceModel](#pricemodel)
  * ReceiptNumber `string`
  * SaleDate `string`
  * Status `integer` (values: 0, 1, 4, 11)

### IsCancellationChargeToBeApplied
* IsCancellationChargeToBeApplied `boolean`

### IsGiftCardAvailableResponse
* IsGiftCardAvailableResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * GiftCardAvailable `boolean`

### IsNoShowChargeToBeApplied
* IsNoShowChargeToBeApplied `boolean`

### IsPaymentOrRedemptionApplied
* IsPaymentOrRedemptionApplied `boolean`

### IssueModel
* IssueModel `object`
  * CenterName `string`
  * CreationDate `string`
  * Description `string`
  * PriorityName `string`
  * Status `string`
  * Title `string`

### JobModel
* JobModel `object`
  * Id `string`
  * Name `string`

### LanguageModel
* LanguageModel `object`
  * Code `string`
  * Id `integer`
  * Name `string`

### LoyaltyModel
* LoyaltyModel `object`
  * Id `string`
  * Name `string`
  * TotalPointsAvailable `number`
  * TotalPointsEarned `number`
  * TotalPointsRedeemed `number`

### LoyaltyPointSettings
* LoyaltyPointSettings `object`
  * MinPointsForRedemption `number`

### MarkAppointmentNoShowRequest
* MarkAppointmentNoShowRequest `object`
  * AppointmentGroupId `string`
  * Comments `string`

### MarkAppointmentNoShowResponse
* MarkAppointmentNoShowResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsAppointmentStatusSet `boolean`
  * IsNoShowChargeApplied `boolean`
  * Status `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)

### MembershipDetailModel
* MembershipDetailModel `object`
  * BusinessUnitId `string`
  * CanBook `boolean`
  * CategoryId `string`
  * Code `string`
  * CreditAmount `number`
  * CreditAmountExpiration `boolean`
  * Days `integer`
  * Description `string`
  * DisplayName `string`
  * DisplayPrice `string`
  * HTMLDescription `string`
  * Id `string`
  * ImagePaths `object`
  * Months `integer`
  * Name `string`
  * NumGuests `integer`
  * Price [PriceModel](#pricemodel)
  * SaleEndDate `string`
  * SaleStartDate `string`
  * ShowPrice `boolean`
  * TermsandConditions `string`
  * Type `integer`
  * VersionId `string`

### MembershipModel
* MembershipModel `object`
  * CanBook `boolean`
  * DisplayName `string`
  * DisplayPrice `string`
  * Id `string`
  * ImagePaths `object`
  * Name `string`
  * Price [PriceModel](#pricemodel)
  * ShowPrice `boolean`
  * VersionId `string`

### MembershipSettings
* MembershipSettings `object`
  * EnableSale `boolean`

### MembershipUserModel
* MembershipUserModel `object`
  * Id `string`
  * Name `string`
  * ServiceCreditAmount `number`
  * ServiceCreditAmountLeft `number`
  * ServiceCreditAmountUsed `number`
  * ValidityDate `string`

### MessageModel
* MessageModel `object`
  * MessageQueueTextId `string`
  * Reason `string`
  * SentOn `string`
  * Status `string`
  * Template `string`
  * Type `string`

### MonthlyAppointmentDatesModel
* MonthlyAppointmentDatesModel `object`
  * Date `string`
  * HasAppointment `boolean`

### NoteModel
* NoteModel `object`
  * CreateDate `string`
  * Id `string`
  * IsPrivate `boolean`
  * NoteType `integer` (values: 0, 2, 3, 4, 8, 10)
  * Text `string`

### Object
* Object `object`

### OnlineTransactionModel
* OnlineTransactionModel `object`
  * AO `string`: Available On
  * Amt `number`: Amount
  * CI `string`: Card Info
  * CL `string`: CardLogo
  * DT `string`: Date
  * Fee `number`: Fees
  * GC `string`: Guest Code
  * Guest `string`: Guest
  * InvNum `string`: Invoice Number
  * Net `number`: Net
  * PID `string`: Payment Id
  * RID `string`: Reference #
  * S `string`: Status
  * SRC `string`: Source
  * T `string`: Type
  * TID `string`: Transaction #
  * TT `number`: Total
  * Tip `number`: Tip

### OpportunitiesCustomSearchResponse
* OpportunitiesCustomSearchResponse `object`
  * opportunities `array`
    * items `object`
      * call_status `string`
      * center_name `string`
      * creation_date `string`: Date on which the opportunity is created ,
      * followup_date `string`: Date on which a followup call is planned,
      * guest `object`: Guest Details
        * guest_code `string`
        * guest_id `string`: Data Type : Unique Identifier(GUID)
        * guest_name `string`
        * phone_number `string`
      * opportunity_id `string`: Data Type : Unique Identifier(GUID)
      * opportunity_no `number`
      * opportunity_title `string`
      * price `number`: offered price, gives listed price if offered price doesn't exist or zero
      * sales_owner `string`: Name of the opportunity owner
      * status `string`: status name or stage name of the opportunity
  * total_records `number`: total number of opportunities

### OpportunityMetaDataResponse
* OpportunityMetaDataResponse `object`
  * dispositions `array`
    * items `object`
      * description `string`
      * followup_days `number`: Number of Days
      * id `string`: DataType: UniqueIdentifier(GUID)
      * name `string`
  * lead_sources `array`
    * items `object`
      * active `boolean`
      * code `string`
      * description `string`
      * id `string`: DataType: UniqueIdentifier(GUID)
      * name `string`
      * optional_field_1 `string`
      * optional_field_2 `string`
      * optional_field_3 `string`
      * optional_field_4 `string`
  * priorities `array`
    * items `object`
      * id `string`: DataType: UniqueIdentifier(GUID)
      * name `string`
      * priority `number`: priority score in priorities(not rank)
  * stages `array`
    * items `object`
      * active `boolean`
      * code `string`
      * description `string`
      * id `string`: DataType: UniqueIdentifier(GUID)
      * name `string`
      * priority `number`: priority score in stages(not rank)

### OrderServicesRequest
* OrderServicesRequest `object`
  * CenterId `string`
  * Services `array`
    * items [AppointmentServiceModel](#appointmentservicemodel)

### OrderServicesResponse
* OrderServicesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * OrderedServices `array`
    * items [AppointmentServiceModel](#appointmentservicemodel)

### OrganizationGeneralSettings
* OrganizationGeneralSettings `object`
  * CreditCardEntryForAppointment `integer` (values: 0, 1, 2)
  * EnforceInactivityLogin `boolean`
  * FinancialDataLockDate `string`
  * FinancialDataLockDays `integer`

### OrganizationGuestSettings
* OrganizationGuestSettings `object`
  * GuestMandatoryFields `array`
    * items `string`
  * IsMobileNumberMandatory `boolean`
  * IsRoomMandatoryForAppointment `boolean`
  * PhoneNumberRange `string`
  * SearchGuestAcrossCenters `boolean`

### OrganizationInvoiceSettings
* OrganizationInvoiceSettings `object`
  * EnablePriceAdjustment `boolean`
  * EnablePriceIncrease `boolean`
  * EnforceSaleByProductsSale `boolean`

### OrganizationModel
* OrganizationModel `object`
  * AccountName `string`
  * Address `string`
  * Id `string`
  * LogoUrl `string`
  * Name `string`

### PackageModel
* PackageModel `object`
  * Code `string`
  * Description `string`
  * Id `string`
  * Name `string`
  * Price [PriceModel](#pricemodel)
  * Type `integer` (values: 1, 2, 3)

### PackageSettings
* PackageSettings `object`
  * EnableSale `boolean`

### PackageUserModel
* PackageUserModel `object`
  * Id `string`
  * Name `string`

### PartialOrderItemModel
* PartialOrderItemModel `object`
  * CQD `integer`: Consumable Quantity Delivered
  * CQO `integer`: Consumable Quantity Ordered
  * DT `number`: Delivery Tax
  * DTD `integer`: Discount Type Delivered
  * DTN `string`: Delivery Tax Group Name
  * DVD `number`: Discount Value Delivered
  * MRP `number`: MRP
  * Notes `string`: product notes
  * OT `number`: Order Tax
  * OTN `string`: Order Tax Group Name
  * PC `string`: Product Code
  * PN `string`: Product Name
  * RQD `integer`: Retail Quantity Delivered
  * RQO `integer`: Retail Quantity Ordered
  * UPD `number`: Unit Price Delivered
  * UPO `number`: Unit Price Ordered

### PaymentDetails
* PaymentDetails `object`
  * Name `string`
  * PaymentInstrumentId `string`
  * PaymentType `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17)

### PaymentGatewayModel
* PaymentGatewayModel `object`
  * AVSSource `integer`
  * AvailableFor `array`
    * items `string`
  * CanProcessorSaveCards `boolean`
  * CanRefund `boolean`
  * CanSaveCards `boolean`
  * CanVoid `boolean`
  * Credentials `object`
  * EnableAVS `boolean`
  * FormSubmitMethod `string`
  * Mode `integer` (values: 0, 1, 2)
  * NotSupportedCardTypes `array`
    * items `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 21)
  * ProcessorId `string`
  * ProcessorVersionId `string`
  * ShareCardsToWeb `boolean`
  * SupportsPaymentAccountUpdate `boolean`

### PaymentModel
* PaymentModel `object`
  * AmountPaid `number`
  * PaymentDate `string`
  * PaymentOption [PaymentOptionModel](#paymentoptionmodel)
  * SSGAmount `number`
  * TipAmount `number`
  * TotalAmountPaid `number`
  * TransactionId `string`

### PaymentOptionModel
* PaymentOptionModel `object`
  * CardNumber `string`
  * Id `string`
  * PaymentMode `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  * PaymentName `string`

### PayrollModel
* PayrollModel `object`
  * EC `string`: Employee Code
  * EN `string`: Employee Name

### PhoneModel
* PhoneModel `object`
  * CountryId `integer`
  * DisplayNumber `string`
  * Number `string`

### PodModel
* PodModel `object`
  * AccountName `string`
  * ApiVersion `string`
  * MachineName `string`
  * PodName `string`
  * SiteName `string`

### PrepaidCardModel
* PrepaidCardModel `object`
  * Code `string`
  * ExpiryDate `string`
  * Id `string`
  * IsOneTimeUse `boolean`
  * ValidityDays `integer`
  * Value `number`

### PrepaidCardPriceAndValue
* PrepaidCardPriceAndValue `object`
  * AllowDifference `boolean`
  * RequiresAuthorization `boolean`

### PrepaidCardSettings
* PrepaidCardSettings `object`
  * EnableSale `boolean`
  * PriceAndValue [PrepaidCardPriceAndValue](#prepaidcardpriceandvalue)

### PriceModel
* PriceModel `object`
  * CurrencyId `integer`
  * Discount `number`
  * Final `number`
  * Final1 `number`
  * RoundingCorrection `number`
  * SSG `number`
  * Sales `number`
  * Tax `number`
  * Tip `number`

### PriceSettings
* PriceSettings `object`
  * RoundingDecimals `integer`

### ProductCategoryModel
* ProductCategoryModel `object`
  * Id `string`
  * Name `string`
  * ProductsCount `integer`

### ProductMasterListModel
* ProductMasterListModel `object`
  * Amt `number`: Amount
  * BC `array`: Barcodes
    * items `string`
  * BU `string`: Business Unit
  * CA `number`: Commission Adjustment
  * CT `integer`: Commission Type
  * Cat `string`: Category
  * Code `string`: Product Code
  * Desc `string`: Description
  * IC `boolean`: Is Consumable
  * ICom `boolean`: Is Commissionable
  * IR `boolean`: Is Retail
  * IU `boolean`: In Use
  * Id `string`: Product Id
  * MRP `number`: MRP
  * Name `string`: Product Name
  * SC `string`: Sub Category
  * Tags `array`: Tags
    * items `string`
  * Unit `string`: Unit

### ProductModel
* ProductModel `object`
  * CategoryId `string`
  * Id `string`
  * Name `string`
  * Price [PriceModel](#pricemodel)
  * Url `string`

### PurchaseOrderModel
* PurchaseOrderModel `object`
  * CD `string`: Closed Date
  * CST# `string`: Vendor CST
  * InvNum `string`: Invoice #
  * OD `string`: Ordered Date
  * Partials `array`: Partials
    * items [PurchaseOrderPartialModel](#purchaseorderpartialmodel)
  * RD `string`: Rasied Date
  * RN `string`: Reference Number
  * Status `string`: Status
  * TIN# `string`: Vendor TIN
  * VC `string`: Vendor Code
  * VN `string`: Vendor Name

### PurchaseOrderPartialModel
* PurchaseOrderPartialModel `object`
  * DD `string`: Delivered Date
  * DV `number`: Discount Value
  * Items `array`: Items
    * items [PartialOrderItemModel](#partialorderitemmodel)
  * Notes `string`: Partial PO notes
  * Other `number`: Other
  * SAH `number`: Shipping And Handling

### PushNotification
* PushNotification `object`
  * AppointmentId `string`
  * EmployeeId `string`
  * GuestFName `string`
  * GuestLName `string`
  * Id `string`
  * InvoiceId `string`
  * MessageType `integer` (values: 61, 62)
  * NotificationTime `string`
  * ServiceName `string`
  * StartTime `string`

### ReasonModel
* ReasonModel `object`
  * Id `integer`
  * Name `string`

### RebookAppointmentRequest
* RebookAppointmentRequest `object`
  * AppointmentGroupId `string`
  * InvoiceId `string`
  * Services `array`
    * items [AppointmentServiceModel](#appointmentservicemodel)

### RebookAppointmentResponse
* RebookAppointmentResponse `object`
  * AppointmentGroup [AppointmentGroupModel](#appointmentgroupmodel)
  * Error [ApiResponseError](#apiresponseerror)
  * IsAppointmentRebooked `boolean`

### RecurrenceModel
* RecurrenceModel `object`
  * DaysofWeek `string`
  * Frequency `integer`
  * NumOccurrences `integer`
  * Type `integer`
  * WeekDays `integer`

### RecurrenceSchedulesModel
* RecurrenceSchedulesModel `object`
  * Capacity `integer`
  * CenterId `string`
  * EndTime `string`
  * Id `integer`
  * InstructorId `string`
  * InstructorName `string`
  * IsFreeSession `boolean`
  * Price `number`
  * RecurrenceType `integer`
  * RegisteredCount `integer`
  * RoomId `string`
  * RoomName `string`
  * StartTime `string`
  * Status `integer` (values: 0, 1, 2, 3, 4)
  * WaitListedCount `integer`
  * WeekDays `string`

### RedemptionModel
* RedemptionModel `object`
  * Amount `number`
  * Option [RedemptionOptionModel](#redemptionoptionmodel)
  * PaymentDate `string`
  * TransactionId `string`

### RedemptionOptionModel
* RedemptionOptionModel `object`
  * Id `string`
  * Mode `integer` (values: 0, 1, 2)
  * Name `string`

### ReferralSourceModel
* ReferralSourceModel `object`
  * Id `string`
  * Name `string`

### RefundFailure
* RefundFailure `object`
  * Error [ApiResponseError](#apiresponseerror)
  * RefundPayment [PaymentModel](#paymentmodel)

### RefundItemModel
* RefundItemModel `object`
  * InvoiceItemId `string`
  * ItemId `string`
  * Quantity `integer`
  * RefundAmount `number`
  * RefundDate `string`

### RefundRequest
* RefundRequest `object`
  * CashRegisterId `string`
  * InvoiceId `string`
  * RefundItems `array`
    * items [RefundItemModel](#refunditemmodel)
  * RefundPayments `array`
    * items [PaymentModel](#paymentmodel)
  * RefundTip `boolean`
  * Source `integer` (values: 0, 1, 2, 3, 4, 5, 6)

### RefundResponse
* RefundResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * RefundErrors `array`
    * items [RefundFailure](#refundfailure)
  * RefundInvoice [InvoiceModel](#invoicemodel)
  * ToppedPrepaidCard [PrepaidCardModel](#prepaidcardmodel)

### RegisterPushNotificationRequest
* RegisterPushNotificationRequest `object`
  * AppId `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 19, 20, 21)
  * AppVersionCode `string`
  * AppVersionNumber `string`
  * DeviceId `string`
  * DeviceLocale `string`
  * DeviceModel `string`
  * DeviceType `integer` (values: 0, 1, 2, 3, 4)
  * NotificationId `string`
  * OsType `integer` (values: 0, 1, 2, 21)
  * OsVersion `string`

### RegisterPushNotificationResponse
* RegisterPushNotificationResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsRegistered `boolean`

### RegistrationModel
* RegistrationModel `object`
  * Center `string`
  * EndTime `string`
  * Id `integer`
  * Instructor `string`
  * RegistrationStatus `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  * SessionName `string`
  * SessionStatus `integer` (values: 0, 1, 2, 3, 4)
  * StartTime `string`

### RegistrationModelSimple
* RegistrationModelSimple `object`
  * Center `string`
  * EndTime `string`
  * Id `integer`
  * Instructor `string`
  * RegistrationStatus `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  * SessionName `string`
  * SessionStatus `integer` (values: 0, 1, 2, 3, 4)
  * StartTime `string`

### RelatedTransactionsResponse
* RelatedTransactionsResponse `object`
  * CardTransactions `array`
    * items [CardTransactionModel](#cardtransactionmodel)
  * Error [ApiResponseError](#apiresponseerror)

### RemoveAddOnServiceResponse
* RemoveAddOnServiceResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsAddOnServiceRemoved `boolean`

### RemoveClassResponse
* RemoveClassResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsClassDeleted `boolean`

### RemoveCreditCardOnFileResponse
* RemoveCreditCardOnFileResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsCreditOnFileRemoved `boolean`

### RemoveNotesResponse
* RemoveNotesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsNoteRemoved `boolean`

### RemovePaymentCreditCardRequest
* RemovePaymentCreditCardRequest `object`
  * CardTransactionId `string`
  * CashRegisterId `string`
  * InvoiceId `string`
  * RefundAmount `number`
  * RefundTip `boolean`
  * TransactionId `string`

### RemovePaymentCreditCardResponse
* RemovePaymentCreditCardResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsPaymentRemoved `boolean`
  * RefundTransaction [CardTransactionModel](#cardtransactionmodel)

### RemovePaymentRequest
* RemovePaymentRequest `object`
  * CashRegisterId `string`
  * InvoiceId `string`
  * TransactionId `string`

### RemovePaymentResponse
* RemovePaymentResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsPaymentRemoved `boolean`

### RemoveTrainingLevelResponse
* RemoveTrainingLevelResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsTrainingLevelDeleted `boolean`

### ReserveSlotsRequest
* ReserveSlotsRequest `object`
  * CenterId `string`
  * CenterTime `string`
  * ReservationId `string`
  * ReservationNotes `string`
  * SlotBookings `array`
    * items [SlotBooking](#slotbooking)

### ReserveSlotsResponse
* ReserveSlotsResponse `object`
  * BlockingTime `integer`
  * CenterId `string`
  * CenterTime `string`
  * Error [ApiResponseError](#apiresponseerror)
  * ExpiryTime `string`
  * IsReserved `boolean`
  * ReservationId `string`
  * SlotBookings `array`
    * items [SlotBooking](#slotbooking)

### RevenueInvoiceItemModel
* RevenueInvoiceItemModel `object`
  * CD `string`: Closed Date
  * CR `number`: Cash Revenue
  * Cat `string`: Category
  * GC `string`: Guest Code
  * GCR `number`: GiftCard Revenue
  * Gender `integer` (values: 0, 1, 2, 3, 4): Gender
  * Guest `string`: Guest
  * ID `string`: Invoice Date
  * IN `string`: Item Name
  * IT `string`: Item Type
  * InvNum `string`: Invoice Number
  * MIRR `number`: Membership Initial Recognized Revenue
  * MMRR `number`: Membership Monthly Recognized Revenue
  * MRR `number`: Membership Redemption Revenue
  * MSRR `number`: Membership Service Redemption Revenue
  * PIRR `number`: Package Initial Recognition Revenue
  * PPCR `number`: Prepaid Card Revenue
  * PRR `number`: Package Redemption Revenue
  * Qty `integer`: Quantity
  * RFEP `number`: Revenue From Expired Packages
  * SC `string`: Sub Category
  * TR `number`: Total Revenue

### RoomModel
* RoomModel `object`
  * Id `string`
  * Name `string`

### RoomsModel
* RoomsModel `object`
  * Capacity `integer`
  * Id `string`
  * IsAssociated `integer`
  * Name `string`

### SaveCardOnFileRequest
* SaveCardOnFileRequest `object`
  * CardToken `string`
  * CashRegisterId `string`
  * CenterId `string`
  * CreditCardGateway `string`
  * GuestId `string`
  * Source `integer` (values: 0, 1, 2, 3, 4, 5, 6)

### SaveCardOnFileResponse
* SaveCardOnFileResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * SavedCard [CreditCardOnFileModel](#creditcardonfilemodel)

### ScheduleSummaryModel
* ScheduleSummaryModel `object`
  * CenterId `string`
  * EndTime `string`
  * Id `integer`
  * InstructorId `string`
  * InstructorName `string`
  * RecurrenceDetails [RecurrenceModel](#recurrencemodel)
  * RecurrenceId `integer`
  * RoomId `string`
  * RoomName `string`
  * SessionsCount `integer`
  * StartTime `string`
  * Status `integer` (values: 0, 1, 2, 3, 4)

### SearchAppointmentsRequest
* SearchAppointmentsRequest `object`
  * CenterId `string`
  * EndDate `string`
  * GuestId `string`
  * PageNum `integer`
  * PageSize `integer`
  * SearchValue `string`
  * StartDate `string`

### SearchAppointmentsResponse
* SearchAppointmentsResponse `object`
  * Appointments `array`
    * items [AppointmentModel](#appointmentmodel)
  * Error [ApiResponseError](#apiresponseerror)

### SearchGuestsRequest
* SearchGuestsRequest `object`
  * CenterId `string`
  * Count `integer`
  * SearchValue `string`
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### SearchGuestsResponse
* SearchGuestsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Guests `array`
    * items [GuestModel](#guestmodel)
  * Total `integer`: Count of results in the response

### SearchInvoicesRequest
* SearchInvoicesRequest `object`
  * CenterId `string`
  * EndDate `string`
  * PageNum `integer`
  * PageSize `integer`
  * SearchValue `string`
  * StartDate `string`

### SearchInvoicesResponse
* SearchInvoicesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoices `array`
    * items [InvoiceSummaryModel](#invoicesummarymodel)

### SearchProductsRequest
* SearchProductsRequest `object`
  * BarCode `string`
  * CenterId `string`
  * SearchValue `string`

### SearchProductsResponse
* SearchProductsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Products `array`
    * items [ProductModel](#productmodel)

### SearchServicesRequest
* SearchServicesRequest `object`
  * CenterId `string`
  * IncludeDayPackages `boolean`
  * SearchValue `string`
  * TherapistId `string`
  * TherapistPreference `integer` (values: 0, 1, 2, 3, 4)
  * filters `array`
    * items [Filters](#filters)
  * page `integer`
  * size `integer`
  * sorters `array`
    * items [Sorters](#sorters)

### SearchServicesResponse
* SearchServicesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Packages `array`
    * items [PackageModel](#packagemodel)
  * Services `array`
    * items [ServiceModel](#servicemodel)
  * TotalServices `integer`

### SendMailCustomDataResponse
* SendMailCustomDataResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Success `boolean`

### SendReceiptMailRequest
* SendReceiptMailRequest `object`
  * Email `string`
  * InvoiceId `string`

### SendReceiptMailResponse
* SendReceiptMailResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsReceiptMailSent `boolean`

### ServiceCategoryModel
* ServiceCategoryModel `object`
  * Id `string`
  * Name `string`
  * ServicesCount `integer`

### ServiceCustomData
* ServiceCustomData `object`
  * Permission [ServiceCustomDataPermission](#servicecustomdatapermission)

### ServiceCustomDataPermission
* ServiceCustomDataPermission `object`
  * CanEdit `boolean`
  * CanView `boolean`

### ServiceDetailModel
* ServiceDetailModel `object`
  * CategoryId `string`
  * Code `string`
  * Duration `integer`
  * Id `string`
  * Name `string`
  * RecoveryTime `integer`
  * SubCategoryId `string`

### ServiceModel
* ServiceModel `object`
  * AddOns `array`
    * items [ServiceModel](#servicemodel)
  * CategoryId `string`
  * CategoryName `string`
  * Duration `integer`
  * HasAddOns `boolean`
  * Id `string`
  * IsAddOn `boolean`
  * Name `string`
  * Price [PriceModel](#pricemodel)

### ServicePrice
* ServicePrice `object`
  * Center [CenterModel](#centermodel)
  * CenterTaxId `string`
  * IsTaxIncluded `boolean`
  * SalePrice `number`
  * ServiceId `string`

### SessionModel
* SessionModel `object`
  * CatalogName `string`
  * CatalogPrice `string`
  * CenterId `string`
  * ClassId `integer`
  * Code `string`
  * Description `string`
  * EndTime `string`
  * HtmlDescription `string`
  * Id `integer`
  * InstructorId `string`
  * IsCancelled `boolean`
  * IsFreeSession `boolean`
  * IsOpenForRegistration `boolean`
  * Name `string`
  * RecurrenceId `integer`
  * RoomId `string`
  * ShowInCatalog `integer`
  * StartTime `string`
  * StatusId `integer`
  * capacity `integer`
  * webCapacity `integer`

### SetAppointmentCustomDataRequest
* SetAppointmentCustomDataRequest `object`
  * AppointmentId `string`
  * FieldValues `array`
    * items [CustomField](#customfield)

### SetAppointmentCustomDataResponse
* SetAppointmentCustomDataResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * message `string`
  * servicecustomdata `array`
    * items [CustomField](#customfield)
  * success `boolean`

### SetAppointmentFeedbackRequest
* SetAppointmentFeedbackRequest `object`
  * Ambience `integer` (values: 1, 2, 3, 4)
  * AppointmentGroupId `string`
  * Cleanliness `integer` (values: 1, 2, 3, 4)
  * Comments `string`
  * Recommendation `boolean`
  * Service `integer` (values: 1, 2, 3, 4)
  * ShareFeedback `boolean`
  * Therapist `integer` (values: 1, 2, 3, 4)

### SetAppointmentFeedbackResponse
* SetAppointmentFeedbackResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsAppointmentFeedbackSaved `boolean`

### SetAppointmentNotesRequest
* SetAppointmentNotesRequest `object`
  * InvoiceId `string`
  * Notes `string`

### SetAppointmentNotesResponse
* SetAppointmentNotesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)

### SetAppointmentProgressRequest
* SetAppointmentProgressRequest `object`
  * Action `integer` (values: 0, 1, 2)
  * AppointmentId `string`
  * SegmentId `string`

### SetAppointmentProgressResponse
* SetAppointmentProgressResponse `object`
  * AppointmentService [AppointmentServiceModel](#appointmentservicemodel)
  * Error [ApiResponseError](#apiresponseerror)
  * IsAppointmentProgressSet `boolean`

### SetAppointmentStatusRequest
* SetAppointmentStatusRequest `object`
  * AppointmentGroupId `string`
  * Status `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)

### SetAppointmentStatusResponse
* SetAppointmentStatusResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsAppointmentStatusSet `boolean`
  * Status `integer` (values: 0, 1, 2, 4, 10, 11, -2, -1)

### SetCatalogRequest
* SetCatalogRequest `object`
  * AllowWebBooking `boolean`
  * CatalogPrice `string`
  * DisplayName `string`
  * ShowInCatalog `integer`
  * ShowPrice `boolean`
  * WebCapacity `integer`

### SetCatalogResponse
* SetCatalogResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsCatalogSaved `boolean`

### SetClassImageRequest
* SetClassImageRequest `object`
  * AssetId `string`
  * Remove `boolean`

### SetClassImageResponse
* SetClassImageResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * ImagePaths `object`
  * IsSuccess `boolean`

### SetDisplayTerminalSettingsRequest
* SetDisplayTerminalSettingsRequest `object`
  * AdvertisementUrl `string`
  * CenterId `string`

### SetDisplayTerminalSettingsResponse
* SetDisplayTerminalSettingsResponse `object`
  * AdvertisementUrl `string`
  * CenterId `string`
  * Error [ApiResponseError](#apiresponseerror)

### SetGuestCustomDataRequest
* SetGuestCustomDataRequest `object`
  * ContactFieldValues [GuestFields](#guestfields)
  * FieldValues `array`
    * items [CustomField](#customfield)
  * GuestId `string`

### SetGuestCustomDataResponse
* SetGuestCustomDataResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * guestcustomdata `array`
    * items [CustomField](#customfield)
  * message `string`
  * success `boolean`

### SetInstructorsRequest
* SetInstructorsRequest `object`
  * Instructors `array`
    * items [TrainingInstructorModel](#traininginstructormodel)

### SetInstructorsResponse
* SetInstructorsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Success `boolean`

### SetRoomRequest
* SetRoomRequest `object`
  * Rooms `array`
    * items [TrainingRoomModel](#trainingroommodel)

### SetRoomResponse
* SetRoomResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Success `boolean`

### SetTrainingCategoryRequest
* SetTrainingCategoryRequest `object`
  * Description `string`
  * HtmlDescription `string`
  * Id `integer`
  * Name `string`
  * ParentCategoryId `integer`
  * ShowInCatalog `integer`
  * SortOrder `integer`

### SetTrainingCategoryResponse
* SetTrainingCategoryResponse `object`
  * CategoryId `integer`
  * Error [ApiResponseError](#apiresponseerror)
  * IsCategorySaved `boolean`

### SetTrainingCentersRequest
* SetTrainingCentersRequest `object`
  * TrainingCenters `array`
    * items [CentersAssocModel](#centersassocmodel)

### SetTrainingCentersResponse
* SetTrainingCentersResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Success `boolean`

### SetTrainingClassRequest
* SetTrainingClassRequest `object`
  * AllowCancellationFee `boolean`
  * AllowDirectBooking `boolean`
  * AllowFreeSession `boolean`
  * AllowNoshowFee `boolean`
  * BusinessUnitId `integer`
  * Capacity `integer`
  * CategoryId `integer`
  * ClassEndDate `string`
  * ClassStartDate `string`
  * Code `string`
  * CommissionDetails [TrainingCommissionModel](#trainingcommissionmodel)
  * CommissionModel `integer`
  * Description `string`
  * DurationInMins `integer`
  * EnableEnrollment `boolean`
  * HtmlDescription `string`
  * Id `integer`
  * InternalCost `number`
  * LevelId `integer`
  * Name `string`
  * RegistrationNotes `string`
  * TagList `array`
    * items [TagsModel](#tagsmodel)
  * WaitlistLockWindow `integer`

### SetTrainingClassResponse
* SetTrainingClassResponse `object`
  * ClassId `integer`
  * Error [ApiResponseError](#apiresponseerror)
  * IsClassSaved `boolean`

### SetTrainingLevelRequest
* SetTrainingLevelRequest `object`
  * Code `string`
  * Description `string`
  * HtmlDesc `string`
  * Id `integer`
  * IsActive `boolean`
  * Name `string`
  * SortOrder `integer`

### SetTrainingLevelResponse
* SetTrainingLevelResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Id `integer`
  * IsTrainingLevelSaved `boolean`

### SetTrainingRegistrationRequest
* SetTrainingRegistrationRequest `object`
  * BookingSrc `integer` (values: 0, 1, 2)
  * GuestId `string`
  * Notes `string`
  * Payment [PaymentDetails](#paymentdetails)
  * RegistrationId `integer`
  * SessionId `integer`

### SetTrainingRegistrationResponse
* SetTrainingRegistrationResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * RegistrationId `integer`
  * RegistrationStatusId `integer`
  * Success `boolean`

### SetupGeofenceRequest
* SetupGeofenceRequest `object`
  * CenterId `string`
  * Enable `boolean`
  * Geofence [Area](#area)

### SetupGeofenceResponse
* SetupGeofenceResponse `object`
  * CenterId `string`
  * Error [ApiResponseError](#apiresponseerror)
  * Geofence [Area](#area)
  * IsEnabled `boolean`

### SlotBooking
* SlotBooking `object`
  * AppointmentGroupId `string`
  * BookingNotes `string`
  * GuestId `string`
  * Price [PriceModel](#pricemodel)
  * Quantity `integer`
  * RoomId `string`
  * Services `array`
    * items [AppointmentServiceModel](#appointmentservicemodel)
  * TherapistId `string`

### SlotWarning
* SlotWarning `object`
  * GuestId `string`
  * Message `string`
  * RoomId `string`
  * ServiceId `string`
  * TherapistId `string`
  * Type `integer` (values: 0, 1, 2, 3, 4, 5, 6)

### Sorters
* Sorters `object`
  * Ascending `boolean`
  * Property `string`

### StateModel
* StateModel `object`
  * Code `string`
  * Id `integer`
  * Name `string`
  * ShortName `string`

### StopImportModel
* StopImportModel `object`
  * ImportStatus [ImportStatus](#importstatus)
  * Message `string`

### StopImportResponse
* StopImportResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * StopImport [StopImportModel](#stopimportmodel)

### SubjectAreasDTO
* SubjectAreasDTO `object`
  * FactId `integer`
  * Id `integer`
  * SubjectAreaName `string`

### SuggestedTip
* SuggestedTip `object`
  * Amount `number`
  * IsPercent `boolean`

### SynchronousImportRequest
* SynchronousImportRequest `object`
  * FilePath `string`
  * ImportType `string`
  * JustValidate `boolean`

### SynchronousImportResponse
* SynchronousImportResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * QueueImport [SynchronousImportStatus](#synchronousimportstatus)

### SynchronousImportStatus
* SynchronousImportStatus `object`
  * ErrorLogFile `string`
  * ImportAction `string`
  * ImportDate `string`
  * ImportId `integer`
  * ImportType `string`
  * ImportedBy `string`
  * SourceFile `string`
  * Status `string`
  * TotalRows `integer`
  * ValidRows `integer`
  * WarningFileName `string`

### TagsModel
* TagsModel `object`
  * Id `string`
  * IsAssociated `integer`
  * Name `string`

### TherapistModel
* TherapistModel `object`
  * Email `string`
  * FirstName `string`
  * FullName `string`
  * Gender `integer` (values: 0, 1, 2, 3, 4)
  * Id `string`
  * IsAvailable `boolean`
  * LastName `string`
  * MobilePhoneModel [PhoneModel](#phonemodel)
  * PhoneNumber `string`
  * ScaledPrice `number`
  * ScalingFactor `number`
  * ServiceTime `integer`
  * ShortName `string`
  * VanityImageUrl `string`

### TimeSlot
* TimeSlot `object`
  * Priority `integer`
  * Time `string`
  * Warnings `array`
    * items [SlotWarning](#slotwarning)

### TimeZoneModel
* TimeZoneModel `object`
  * Id `integer`
  * Name `string`
  * StandardName `string`
  * Symbol `string`

### TipModel
* TipModel `object`
  * Cash `number`: Cash
  * Check `number`: Check
  * Custom `number`: Custom
  * EC `string`: Employee Code
  * EN `string`: Employee Name
  * GN `string`: Guest Name
  * InvNum `string`: Invoice #
  * PPC `number`: Prepaid Card
  * Status `string`: Status
  * Tip `number`: Tip

### TipSettings
* TipSettings `object`
  * EnableSplitTip `boolean`
  * EnableTips `boolean`
  * SuggestedTip [SuggestedTip](#suggestedtip)

### TrainingCategoryModel
* TrainingCategoryModel `object`
  * CategoryDesc `string`
  * CategoryHtmlDesc `string`
  * Id `integer`
  * Name `string`
  * NumSessions `integer`
  * ParentId `integer`
  * ShowInCatalog `integer`
  * SortOrder `integer`

### TrainingCategorySimple
* TrainingCategorySimple `object`
  * Id `integer`
  * Name `string`
  * ParentId `integer`

### TrainingClassDetailModel
* TrainingClassDetailModel `object`
  * AllowCancellationFee `boolean`
  * AllowDirectBooking `boolean`
  * AllowFreeSession `boolean`
  * AllowNoshowFee `boolean`
  * AllowWaitlist `boolean`
  * AllowWebBooking `boolean`
  * BusinessUnitId `integer`
  * Capacity `integer`
  * CatalogPrice `string`
  * CategoryId `integer`
  * CategoryName `string`
  * CentersList `array`
    * items [ClassCentersModel](#classcentersmodel)
  * ClassEndDate `string`
  * ClassStartDate `string`
  * Code `string`
  * CommissionDetails [TrainingCommissionModel](#trainingcommissionmodel)
  * CommissionModel `integer`
  * Description `string`
  * DisplayName `string`
  * DurationInMins `integer`
  * EnableEnrollment `boolean`
  * EnablePayments `boolean`
  * HtmlDescription `string`
  * Id `integer`
  * ImagePaths `object`
  * InstructorList `array`
    * items `string`
  * InternalCost `number`
  * LevelId `integer`
  * Name `string`
  * ParentCategoryId `integer`
  * ParentCategoryName `string`
  * RegistrationNotes `string`
  * RoomsList `array`
    * items `string`
  * ShowInCatalog `integer`
  * ShowPrice `boolean`
  * SortOrder `integer`
  * WaitlistLockWindow `integer`
  * WebCapacity `integer`

### TrainingClassSimple
* TrainingClassSimple `object`
  * AllowCancellationFee `boolean`
  * AllowDirectBooking `boolean`
  * AllowNoshowFee `boolean`
  * AllowWaitlist `boolean`
  * AllowWebBooking `boolean`
  * Capacity `integer`
  * CatalogPrice `string`
  * CategoryId `integer`
  * ClassEndDate `string`
  * ClassStartDate `string`
  * Description `string`
  * DisplayName `string`
  * EnableEnrollment `boolean`
  * EnablePayments `boolean`
  * HtmlDescription `string`
  * Id `integer`
  * ImagePaths `object`
  * LevelId `integer`
  * Name `string`
  * RegistrationNotes `string`
  * ShowInCatalog `integer`
  * ShowPrice `boolean`
  * SortOrder `integer`
  * WaitlistLockWindow `integer`
  * WebCapacity `integer`

### TrainingCommissionModel
* TrainingCommissionModel `object`
  * BonusMinGuests `integer`
  * BonusPerGuest `number`
  * IncrementalCommissionList `array`
    * items [TrainingIncrementalCommissionModel](#trainingincrementalcommissionmodel)
  * MaxPay `number`
  * MinPay `number`
  * Rate `number`

### TrainingIncrementalCommissionModel
* TrainingIncrementalCommissionModel `object`
  * BonusMinGuests `integer`
  * CommissionFk `integer`
  * CommissionLevel `integer`
  * MaxGuests `integer`
  * MinGuests `integer`
  * Rate `number`
  * VersionId `string`
  * Void `boolean`

### TrainingInstructorModel
* TrainingInstructorModel `object`
  * Id `string`
  * IsAssociated `integer`

### TrainingInstructorSimple
* TrainingInstructorSimple `object`
  * Description `string`
  * Id `string`
  * ImagePaths `object`
  * Name `string`

### TrainingLevelModel
* TrainingLevelModel `object`
  * Code `string`
  * Description `string`
  * Guid `string`
  * HTMLDesc `string`
  * Id `integer`
  * IsActive `boolean`
  * LastUpdated `string`
  * LastUpdatedBy `string`
  * Name `string`
  * OrganizationId `string`
  * SortOrder `integer`
  * Void `boolean`

### TrainingRoomModel
* TrainingRoomModel `object`
  * Id `string`
  * IsAssociated `integer`

### TrainingRoomSimple
* TrainingRoomSimple `object`
  * Id `string`
  * Name `string`

### TrainingSessionDetailModel
* TrainingSessionDetailModel `object`
  * AllowDirectBooking `boolean`
  * AllowSubstitution `boolean`
  * AllowWaitlist `boolean`
  * AllowWebBooking `boolean`
  * AssistantId `string`
  * BookingStage `integer`
  * CanBook `boolean`
  * CanCancel `boolean`
  * CancelStage `integer`
  * CatalogName `string`
  * CatalogPrice `string`
  * CenterId `string`
  * ClassId `integer`
  * Code `string`
  * ComissionEligible `boolean`
  * CommissionFactor `number`
  * CommissionType `integer`
  * CreatedBy `string`
  * CreatedDate `string`
  * Description `string`
  * EarlyCancellationFee `number`
  * EndTime `string`
  * FlatCommissionValue `number`
  * Guid `string`
  * HtmlDescription `string`
  * Id `integer`
  * InstructorId `string`
  * InstructorName `string`
  * IsDeleted `boolean`
  * IsFreeSession `boolean`
  * IsOpenForRegistration `boolean`
  * LastUpdated `string`
  * LastUpdatedBy `string`
  * LateCancellationFee `number`
  * Lock `integer`
  * MinsAfterRegistrationForEarlyCancel `integer`
  * MinsBeforeClassForEarlyCancel `integer`
  * MinsBeforeClassWebBookingClose `integer`
  * Name `string`
  * NoshowFee `number`
  * OrganizationId `string`
  * Price `number`
  * RecoveryTime `integer`
  * RecurrenceId `integer`
  * RegisteredCount `integer`
  * RegistrationId `integer`
  * RegistrationStatus `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  * RoomId `string`
  * RoomName `string`
  * ShowInCatalog `integer`
  * ShowPrice `boolean`
  * SignupInstructions `string`
  * SortOrder `integer`
  * StartTime `string`
  * Status `integer` (values: 0, 1, 2, 3, 4)
  * StatusId `integer`
  * WaitListedCount `integer`
  * WaitlistLockWindow `integer`
  * capacity `integer`
  * webCapacity `integer`

### TrainingSessionSimpleModel
* TrainingSessionSimpleModel `object`
  * AssistantId `string`
  * BookingStage `integer`
  * CanBook `boolean`
  * CanCancel `boolean`
  * CancelStage `integer`
  * CenterId `string`
  * ClassId `integer`
  * EndTime `string`
  * Id `integer`
  * InstructorId `string`
  * IsFreeSession `boolean`
  * Name `string`
  * Price `number`
  * RecurrenceId `integer`
  * RegistrationId `integer`
  * RegistrationStatus `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  * RoomId `string`
  * StartTime `string`
  * Status `integer` (values: 0, 1, 2, 3, 4)

### TransactionalColumnsFull
* TransactionalColumnsFull `object`
  * Description `string`
  * DimFactAttrInfoList `array`
    * items [TransactionalDimFactAttrInfo](#transactionaldimfactattrinfo)
  * Id `integer`
  * IsFact `boolean`
  * Name `string`

### TransactionalDimFactAttrInfo
* TransactionalDimFactAttrInfo `object`
  * AttrType `string`
  * Description `string`
  * HasTotal `boolean`
  * Id `integer`
  * Name `string`

### TransactionalReportColumnsDTO
* TransactionalReportColumnsDTO `object`
  * AttrDisplayName `string`
  * AttrType `string`
  * CustomReportId `integer`
  * DimFactAttributesId `integer`
  * DisplayOrder `integer`
  * HasTotal `boolean`
  * TxnReportAttributesID `integer`

### TransactionalReportShortDTO
* TransactionalReportShortDTO `object`
  * Description `string`
  * DisplayOrder `integer`
  * HasReportSql `boolean`
  * Id `integer`
  * IsActive `boolean`
  * Name `string`
  * ReportCode `string`
  * SubjectArea `string`

### TransactionalReportsDTO
* TransactionalReportsDTO `object`
  * Description `string`
  * DisplayOrder `integer`
  * HasReportSql `boolean`
  * Id `integer`
  * IsActive `boolean`
  * Name `string`
  * OrganizationId `string`
  * ReportCode `string`
  * SubjectArea [SubjectAreasDTO](#subjectareasdto)
  * SubjectAreaID `integer`
  * TxnReportColumns `array`
    * items [TransactionalReportColumnsDTO](#transactionalreportcolumnsdto)
  * TxnReportParameters `array`
    * items [ZenotiReportParameterDTO](#zenotireportparameterdto)

### UnapplyGiftCardRequest
* UnapplyGiftCardRequest `object`
  * InvoiceId `string`

### UnapplyGiftCardResponse
* UnapplyGiftCardResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsGiftCardUnapplied `boolean`

### UnapplyItemMembershipRequest
* UnapplyItemMembershipRequest `object`
  * InvoiceId `string`
  * InvoiceItemId `string`
  * MembershipUserId `string`

### UnapplyItemMembershipResponse
* UnapplyItemMembershipResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsMembershipUnapplied `boolean`

### UnapplyLoyaltyPointsRequest
* UnapplyLoyaltyPointsRequest `object`
  * InvoiceId `string`

### UnapplyLoyaltyPointsResponse
* UnapplyLoyaltyPointsResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsLoyaltyPointsUnapplied `boolean`

### UnapplyMembershipRequest
* UnapplyMembershipRequest `object`
  * ApplyCredits `boolean`
  * InvoiceId `string`
  * MembershipUserId `string`

### UnapplyMembershipResponse
* UnapplyMembershipResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsMembershipUnapplied `boolean`

### UnapplyPackagesRequest
* UnapplyPackagesRequest `object`
  * InvoiceId `string`
  * PackageUserId `string`

### UnapplyPackagesResponse
* UnapplyPackagesResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsPackageUnapplied `boolean`

### UnavailableDatesModel
* UnavailableDatesModel `object`
  * IsInstructorAvailable `boolean`
  * IsRoomAvailable `boolean`
  * UnavailableDate `string`

### UpdateAppointmentGroupRequest
* UpdateAppointmentGroupRequest `object`
  * AppointmentGroupId `string`
  * DayPromoPackages `array`
    * items [AppointmentDayPromoPackageModel](#appointmentdaypromopackagemodel)
  * GiftCards `array`
    * items [AppointmentGiftCardModel](#appointmentgiftcardmodel)
  * InvoiceId `string`
  * IsForced `boolean`
  * Memberships `array`
    * items [AppointmentMembershipModel](#appointmentmembershipmodel)
  * Notes `string`
  * Products `array`
    * items [AppointmentProductModel](#appointmentproductmodel)
  * SeriesPackages `array`
    * items [AppointmentSeriesPackageModel](#appointmentseriespackagemodel)
  * Services `array`
    * items [AppointmentServiceModel](#appointmentservicemodel)
  * Time `string`

### UpdateAppointmentGroupResponse
* UpdateAppointmentGroupResponse `object`
  * AppointmentGroup [AppointmentGroupModel](#appointmentgroupmodel)
  * Error [ApiResponseError](#apiresponseerror)
  * IsAppointmentUpdated `boolean`

### UpdateEmployeeDetailRequest
* UpdateEmployeeDetailRequest `object`
  * EmployeeDetail [EmployeeDetailModel](#employeedetailmodel)

### UpdateEmployeeDetailResponse
* UpdateEmployeeDetailResponse `object`
  * EmployeeDetail [EmployeeDetailModel](#employeedetailmodel)
  * Error [ApiResponseError](#apiresponseerror)
  * IsEmployeeAdded `boolean`

### UpdateInvoiceRequest
* UpdateInvoiceRequest `object`
  * Invoice [InvoiceModel](#invoicemodel)
  * IsForced `boolean`

### UpdateInvoiceResponse
* UpdateInvoiceResponse `object`
  * Checkout [CheckoutResponse](#checkoutresponse)
  * Error [ApiResponseError](#apiresponseerror)
  * IsInvoiceUpdated `boolean`

### UpdateInvoiceV2Request
* UpdateInvoiceV2Request `object`
  * Invoices `array`
    * items [InvoiceModel](#invoicemodel)

### UpdateInvoiceV2Response
* UpdateInvoiceV2Response `object`
  * CheckoutList `array`
    * items [CheckoutResponse](#checkoutresponse)
  * Error [ApiResponseError](#apiresponseerror)
  * IsUpdated `boolean`

### UpdateOpportunityRequest
* UpdateOpportunityRequest `object`
  * center_id **required** `string`: Data Type: Unique Identifier(GUID)
  * change_guest_center `boolean`: if true changes the guest center to center_id passed
  * custom_fields `object`: **Key :** Custom Field Id, **Value :** CustomField Value that needs to be changed or added,
  * disposition_id `string`: Data Type : Unique Identifier(GUID)
  * expected_close_date `string`: Date on which the opportunity is expected to close ,Data Type : DateTime(yyyy-mm-dd)
  * followup_date `string`: Date on which followup should be done,Data Type : DateTime(yyyy-mm-dd)
  * guest_id `string`: GUID of guest ,Data Type : Unique Identifier(GUID)
  * lead_source `object`
    * code `string`
    * id `string`: GUID of the lead source ,Data Type : Unique Identifier(GUID)
  * listed_amount `number`: listed price
  * offered_amount `number`: Offered Price
  * opportunity_description `string`: Description of the Opportunity
  * opportunity_owner_id `string`: GUID of the Employee who owns the opportunity, Data Type : Unique Identifier(GUID)
  * opportunity_title `string`: title of the opportunity, it can't be  null ,empty or whitespace
  * optional_field_1 `string`
  * optional_field_2 `string`
  * optional_field_3 `string`
  * priority_type_id `string`: GUID of the priority type,Data Type : Unique Identifier(GUID)
  * stage_id `string`: GUID of the stage type,Data Type : Unique Identifier(GUID)
  * type `string`: Opportunity type

### UpdateSSGRequest
* UpdateSSGRequest `object`
  * Authorization [Credentials](#credentials)
  * SSG `number`

### UpdateSSGResponse
* UpdateSSGResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * Invoice [InvoiceModel](#invoicemodel)
  * IsSSGChanged `boolean`

### UpdateServiceRequest
* UpdateServiceRequest `object`
  * ServiceDetails [ServiceDetailModel](#servicedetailmodel)
  * ServicePrices `array`
    * items [ServicePrice](#serviceprice)

### UpdateServiceResponse
* UpdateServiceResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * IsServiceUpdated `boolean`
  * ServiceDetails [ServiceDetailModel](#servicedetailmodel)
  * ServicePrices `array`
    * items [ServicePrice](#serviceprice)

### UploadClassImageResponse
* UploadClassImageResponse `object`
  * AssetId `string`
  * Error [ApiResponseError](#apiresponseerror)
  * ImagePaths `object`

### UploadCustomDataImageResponse
* UploadCustomDataImageResponse `object`
  * AssetId `string`
  * AssetUrl `string`
  * Error [ApiResponseError](#apiresponseerror)

### UploadProfilePictureResponse
* UploadProfilePictureResponse `object`
  * Error [ApiResponseError](#apiresponseerror)
  * PictureUrl `string`

### UserCredentials
* UserCredentials `object`
  * Password **required** `string`
  * UserName **required** `string`

### UtilizationModel
* UtilizationModel `object`
  * DT `string`: Date
  * Day `integer`: Day
  * EC `string`: Employee Code
  * EJC `string`: Employee Job Code
  * EJN `string`: Employee Job Name
  * EN `string`: Employee Name
  * MBH `number`: Mandatory Break Hours
  * MM `integer`: Month
  * SH `number`: Service Hours
  * ST `number`: Scheduled Time
  * TS `string`: Time Slot
  * UT `number`: Utilized Time
  * YY `integer`: Year

### ZenotiFilterDTO
* ZenotiFilterDTO `object`
  * Description `string`
  * Id `integer`
  * IsMandatoryFilter `boolean`
  * Name `string`

### ZenotiFilterShortDTO
* ZenotiFilterShortDTO `object`
  * Description `string`
  * Id `integer`
  * IsMandatoryFilter `boolean`
  * Name `string`

### ZenotiFilterValuesDTO
* ZenotiFilterValuesDTO `object`
  * FilterValues `array`
    * items [FilterValueDTO](#filtervaluedto)
  * ZenotiFilterDTO [ZenotiFilterDTO](#zenotifilterdto)

### ZenotiGroupByAttributes
* ZenotiGroupByAttributes `object`
  * Description `string`
  * Id `integer`
  * Name `string`

### ZenotiGroupByDTO
* ZenotiGroupByDTO `object`
  * Attributes `array`
    * items [ZenotiGroupByAttributes](#zenotigroupbyattributes)
  * Description `string`
  * Id `integer`
  * Name `string`

### ZenotiMetricCategoryFullDTO
* ZenotiMetricCategoryFullDTO `object`
  * Description `string`
  * Id `integer`
  * Name `string`
  * ZenotiMetrics `array`
    * items [ZenotiMetricDTO](#zenotimetricdto)

### ZenotiMetricCategoryShortDTO
* ZenotiMetricCategoryShortDTO `object`
  * Description `string`
  * Id `integer`
  * Name `string`

### ZenotiMetricDTO
* ZenotiMetricDTO `object`
  * Description `string`
  * HasTotal `boolean`
  * Id `integer`
  * MetricType `string`
  * Name `string`
  * ZenotiMetricCategoryId `integer`

### ZenotiMetricShortDTO
* ZenotiMetricShortDTO `object`
  * Description `string`
  * Id `integer`
  * Name `string`

### ZenotiReportColumnDTO
* ZenotiReportColumnDTO `object`
  * Description `string`
  * Id `integer`
  * Name `string`

### ZenotiReportParameterDTO
* ZenotiReportParameterDTO `object`
  * Description `string`
  * Id `integer`
  * Name `string`
  * ParameterName `string`

### ZenotiReportRowDTO
* ZenotiReportRowDTO `object`
  * Description `string`
  * Id `integer`
  * Name `string`

### alternative_type
* alternative_type `integer` (values: 1, 2): Appointment alternative type

### appointment
* appointment `object`: Representation of appointment model in a summary view.
  * actual_completed_time `string`: Actual completed time
  * actual_start_time `string`: Actual start time
  * alternative_room_id `string`
  * alternative_therapist_id `string`
  * appointment_group_id `string`: Appointment group id
  * appointment_id **required** `string`: Appointment id
  * appointment_progress [appointment_progress](#appointment_progress)
  * appointment_segment_id `string`: Appointment segment id
  * appointment_source [appointment_source](#appointment_source)
  * available_rooms `array`
    * items [appointment_room](#appointment_room)
  * available_therapists `array`
    * items [appointment_therapist](#appointment_therapist)
  * category `string`: Category
  * checkin_time `string`: Check in time
  * employee_vanity_image_url `string`
  * end_date `string`: End date and time of appointment
  * form_id `string`: Form id
  * guest [appointment_guest](#appointment_guest)
  * invoice_id `string`: Invoice id
  * locked `boolean`: Is appointment locked
  * notes `string`: Notes
  * price [PriceModel](#pricemodel)
  * service [appointment_service](#appointment_service)
  * service_custom_data_indicator `string`: Service custom data indicator
  * start_date `string`: Start date and time of appointment
  * status [appointment_status](#appointment_status)
  * sub_category `string`: Sub category
  * therapist [appointment_therapist](#appointment_therapist)
  * therapist_preference_type [requested_gender](#requested_gender)

### appointment_guest
* appointment_guest `object`
  * first_name `string`
  * gender [gender](#gender)
  * id `string`
  * indicator `string`
  * last_name `string`
  * phone [phone](#phone)

### appointment_progress
* appointment_progress `integer` (values: 0, 1, 2): | Name | Value |

### appointment_room
* appointment_room `object`
  * id `string`
  * name `string`

### appointment_service
* appointment_service `object`
  * id `string`
  * name `string`

### appointment_source
* appointment_source `integer` (values: 0, 1, 2, 3, 4): | Name | Value |

### appointment_status
* appointment_status `integer` (values: -2, -1, 0, 1, 2, 4, 10, 11, 20): | Name | Value |

### appointment_therapist
* appointment_therapist `object`
  * first_name `string`
  * gender [gender](#gender)
  * id `string`
  * last_name `string`

### appointments_response
* appointments_response `object`
  * appointments `array`: List of appointments
    * items [appointment](#appointment)
  * error [error](#error)

### employee_performance
* employee_performance `object`
  * employee_id `string`: Id of the employee
  * performance [performance](#performance)

### employee_sales
* employee_sales `object`: For providing the models for giving the employee sales data.
  * employee_id `string`: Id of the employee
  * guest_sales [guest_sales](#guest_sales)
  * item_sales `array`: Item sale data for the employee
    * items [item_sales](#item_sales)

### error
* error `object`: Definition for the error object. 
  * Message `string`: Descriptive error message
  * StatusCode `integer`: Code of the error

### filter
* filter `object`: Appointment filter
  * room_id `array`
    * items `string`
  * therapist_id `array`
    * items `string`

### gender
* gender `integer` (values: 0, 1, -1): | Name | Value |

### giftcard
* giftcard `object`
  * balance `number`
  * code `string`
  * creation_date `string`
  * expiry_date `string`
  * gift_type_id `string`
  * id `string`
  * is_commission_eligible `boolean`
  * is_onetimeuse `boolean`
  * notes `string`
  * price [PriceModel](#pricemodel)
  * recipient [GuestModel](#guestmodel)
  * send_email_to_recipient `boolean`
  * services [GiftCardServicesModel](#giftcardservicesmodel)
  * validity_days `integer`
  * value `number`

### guest
* guest `object`: Definition of the representation for the guest object. 
  * CenterId `string`: Base center of the guest.
  * address1 `string`: Address 1
  * address2 `string`: Address 2
  * anniversarydate `string`: Anniversary Date
  * city `string`: City
  * code `string`: Code assigned to Guest
  * country [CountryModel](#countrymodel)
  * creationdate `string`: Creation date and time of guest record.
  * dateofbirth `string`: Date of Birth
  * dob_incompleteyear `string`: Date of birth without year
  * email `string`: Email
  * firstname `string`: First Name
  * gender `string` (values: male, female, other): Gender
  * guestindicator `string`: Category of a guest
  * homephonemodel [phone](#phone)
  * id `string`: Unique Id of Guest
  * is_member `integer`: Indicates if guest has membership
  * lastname `string`: Last Name
  * lastupdated `string`: Last updated date and time of guest record.
  * middlename `string`: Middle Name
  * mobilephonemodel [phone](#phone)
  * nationality [CountryModel](#countrymodel)
  * postalcode `string`: Zipcode or postal code.
  * receivemarketingemail `boolean`: Receive marketing email preference.
  * receivemarketingsms `boolean`: Receive marketing SMS preference.
  * receivetransactionalemail `boolean`: Receive Email for transactions  preference.
  * receivetransactionalsms `boolean`: Receive SMS alert for transactions  preference.
  * referralsource [ReferralSourceModel](#referralsourcemodel)
  * referredguest_id `string`: Guest who referred the guest.
  * state [StateModel](#statemodel)
  * username `string`: Username of guest

### guest_customdata
* guest_customdata `object`
  * Active `boolean`
  * AllowGuestToEdit `boolean`
  * AllowGuestToView `boolean`
  * DefaultValue `string`
  * FieldAttributes `string`
  * FieldId `string`: Id of the custom field
  * FieldName `string`: Name of the field
  * FieldOrder `integer`
  * FieldValue `string`
  * FieldValueId `string`
  * GroupColor `string`
  * GroupId `string`
  * GroupName `string`
  * GroupOrder `integer`
  * GuestFieldId `string`: Id of the guest?
  * IsRequired `boolean`
  * PrintOnReceipt `boolean`
  * Required `boolean`
  * SpanAcrossColumns `integer`
  * TypeName `string`: Type of the field
  * editInCatalog `boolean`
  * listvalues `string`
  * showInCatalog `boolean`

### guest_loyaltypoints
* guest_loyaltypoints `object`: Represention of loyalty points of a guest. 
  * Id `string`
  * Name `string`
  * TotalPointsAvailable `number`
  * TotalPointsEarned `number`
  * TotalPointsRedeemed `number`

### guest_memberships
* guest_memberships `object`: Representation of membership associated with a guest.
  * Id `string`
  * Name `string`
  * ServiceCreditAmount `number`
  * ServiceCreditAmountLeft `number`
  * ServiceCreditAmountUsed `number`
  * ValidityDate `string`

### guest_notes
* guest_notes `object`
  * CreateDate `string`
  * Id `string`
  * IsPrivate `boolean`
  * NoteType `integer` (values: 0, 2, 3, 4, 8, 10): | enum | value |
  * Text `string`

### guest_packages
* guest_packages `object`: Representation of package object
  * id `string`: Unique  identifier of package
  * name `string`: Name of the package

### guest_sales
* guest_sales `object`: For displaying the guest sales for employees
  * number_of_guest_products `integer`: Provides the guests who also buyed products from the employee
  * number_of_guest_requests `integer`: Provides the number of guests who requested the employee
  * number_of_guests `integer`: Provides the number of guests the therapist has made
  * number_of_guests_rebooked `integer`: Provides the guests who rebooked the appointmented done by the employee
  * number_of_new_guests `integer`: Provides the number of new guests the therapists has made

### item_sales
* item_sales `object`: For Displaying the sales fo the employee
  * item_type `string` (values: service, 0, product, 2, Membership, 3, Packages, 4, GiftCard, 6): Type of item that the employee sold.
  * numbers `integer`: Number of services sold
  * revenue `number`: Revenue for the services sold
  * target_number `integer`: Target number employee should sold
  * target_revenue `number`: Target revenue employee should be achieving

### package
* package `object`
  * code `string`
  * description `string`
  * id `string`
  * name `string`
  * price [PriceModel](#pricemodel)
  * services `array`
    * items [service](#service)
  * type `integer` (values: 1, 2, 3)

### payroll
* payroll `object`

### payroll_old
* payroll_old `object`
  * EC `string`: Employee Code
  * EN `string`: Employee Name
  * phone [phone](#phone)
  * services `array`
    * items [service](#service)

### performance
* performance `object`
  * attendance `integer`: Attendance of the employee.
  * punctuality `number`: Punctuality of the employee
  * retention `number`: Retention for the employee
  * satisfaction `number`: Satisfaction of the employee
  * utilization `number`: Utilization of the employee

### phone
* phone `object`: Representation for phone object. 
  * country_id `integer`: Country id
  * displaynumber `string`: Phone number with display format.
  * number `string`: Phone number

### price
* price `object`
  * discount `number`: Discount amount
  * final_price `number`: Final amount
  * final_price1 `number`: Final amount 1
  * id `integer`: Currency ID
  * rounding_correction `number`: Rounding correction
  * sales `number`: Sale Price
  * ssg `number`: SSG
  * tax `number`: Tax Amount
  * tip `number`: Tip amount

### requested_gender
* requested_gender `integer` (values: 0, 1, 2, 3, 4): | Name | Value |

### service
* service `object`
  * AddOns `array`
    * items [ServiceModel](#servicemodel)
  * CategoryId `string`
  * CategoryName `string`
  * Duration `integer`
  * HasAddOns `boolean`
  * Id `string`
  * IsAddOn `boolean`
  * Name `string`
  * Price [PriceModel](#pricemodel)


