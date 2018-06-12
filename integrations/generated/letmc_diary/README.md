# @datafire/letmc_diary

Client library for LetMC Api V3, diary

## Installation and Usage
```bash
npm install --save @datafire/letmc_diary
```
```js
let letmc_diary = require('@datafire/letmc_diary').create({
  apiKey: "",
  username: "",
  password: ""
});

letmc_diary.DiaryController_GetAllocations({
  "shortName": "",
  "preferredDate": "",
  "propertyIdentifier": "",
  "appointmentType": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### DiaryController_GetAllocations
Get a list of all available allocations for a date + 7 days for a specified appointment type


```js
letmc_diary.DiaryController_GetAllocations({
  "shortName": "",
  "preferredDate": "",
  "propertyIdentifier": "",
  "appointmentType": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * preferredDate **required** `string`: The date to search from
  * propertyIdentifier **required** `string`: The unique property identifier (Sales or Lettings)
  * appointmentType **required** `string`: The unique appointment type identifier
  * lettings `boolean`: Sales or Lettings property?

#### Output
* output `array`
  * items [ViewingBookingModel](#viewingbookingmodel)

### DiaryController_DeleteAppointment
Update an existing appointment using its unique identifier


```js
letmc_diary.DiaryController_DeleteAppointment({
  "shortName": "",
  "appointmentID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * appointmentID **required** `string`: The unique appointment id

#### Output
* output `string`

### DiaryController_PostAppointment
Post an appointment into a valid diary allocation


```js
letmc_diary.DiaryController_PostAppointment({
  "shortName": "",
  "propertyIdentifier": "",
  "appointmentDetails": {}
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * propertyIdentifier **required** `string`: The unique property identifier (Sales or Lettings)
  * appointmentDetails **required** [AppointmentDetails](#appointmentdetails)
  * lettings `boolean`: Sales or Lettings property?

#### Output
* output `string`

### DiaryController_PutAppointment
Update an existing appointment using its unique identifier


```js
letmc_diary.DiaryController_PutAppointment({
  "shortName": "",
  "appointmentID": "",
  "appointmentDetails": {}
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * appointmentID **required** `string`: The unique appointment id
  * appointmentDetails **required** [AppointmentDetails](#appointmentdetails)
  * lettings `boolean`: Sales or Lettings property?

#### Output
* output `string`

### DiaryController_GetAppointmentsBetweenDates
A collection of diary appointments linked to a company filtered between specific dates and by appointment type


```js
letmc_diary.DiaryController_GetAppointmentsBetweenDates({
  "shortName": "",
  "branchID": "",
  "startDate": "",
  "endDate": "",
  "appointmentTypesToSearch": [],
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * startDate **required** `string`: The search from date
  * endDate **required** `string`: The search to date
  * appointmentTypesToSearch **required** `array`: The appointment IDs to search for
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [DiaryAppointmentModelResults](#diaryappointmentmodelresults)

### DiaryController_GetAppointmentTypes
A collection of all diary appointment types


```js
letmc_diary.DiaryController_GetAppointmentTypes({
  "shortName": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [DiaryAppointmentTypeModelResults](#diaryappointmenttypemodelresults)



## Definitions

### AppointmentDetails
* AppointmentDetails `object`: Helper Model - Structure to submit the appointment details
  * AllocationDetails [ViewingBookingModel](#viewingbookingmodel)
  * AppointmentType `string`: The Appointment Type ID
  * ExtraComments `string`: Additional appointment comments
  * Guests `array`: A collection of guests linked to the appointment. If none leave empty
    * items [GuestDetails](#guestdetails)
  * Subject `string`: The subject of the appointment

### DiaryAppointmentModel
* DiaryAppointmentModel `object`: Represents a single diary appointment for a staff member.
  * AppointmentType `string`: The diary appointment type.
  * Cancelled `boolean`: Whether the appointment has been cancelled.
  * Comment `string`: The appointment comments text.
  * CreatedAt `string`: The date/time this appointment was created.
  * CreatedBy `string`: The staff member that created this appointment.
  * ETag `string`: A unique identifier defining the object and change revision.
  * End `string`: The end date/time of this appointment.
  * LinkedProperties `array`: A collection of properties linked to the appointment:-
    * items [LinkedPropertiesModel](#linkedpropertiesmodel)
  * OID `string`: The unique Object ID (OID).
  * RemindAt `string`: The date/time to remind the staff member of this appointment.
  * RemindBefore `string` (values: Min, Min2, Min5, Min10, Min15, Min30, Min45, Hour, Hour2, Hour3, Hour6, Hour12, Day, Day2, Day3, Week, NoReminder): The number of minutes before the appointment start date/time to remind the staff member. -1 means don't remind.
  * Staff `string`: The staff member holding this appointment.
  * Start `string`: The start date/time of this appointment.
  * Subject `string`: The appointment subject text.

### DiaryAppointmentModelResults
* DiaryAppointmentModelResults `object`: Holds results from a paged query returning DiaryAppointmentModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [DiaryAppointmentModel](#diaryappointmentmodel)

### DiaryAppointmentTypeModel
* DiaryAppointmentTypeModel `object`: Represents a diary appointment type.
  * ETag `string`: A unique identifier defining the object and change revision.
  * Name `string`: The appointment type name.
  * OID `string`: The unique Object ID (OID).
  * SystemType `string` (values: Viewing, ViewAndValue, OpeningInspection, InterimInspection, ClosingInspection, SalesAppraisal, Custom): The appointment system type.

### DiaryAppointmentTypeModelResults
* DiaryAppointmentTypeModelResults `object`: Holds results from a paged query returning DiaryAppointmentTypeModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [DiaryAppointmentTypeModel](#diaryappointmenttypemodel)

### GuestDetails
* GuestDetails `object`: Helper Model – Structure to submit appointment guest details
  * EmailAddress `string`: Email address
  * Forename `string`: Forename
  * MobilePhone `string`: Mobile phone
  * OID `string`: The unique identifier of a user, only submit this is known
  * Surname `string`: Surname

### LatestTenancyModel
* LatestTenancyModel `object`: Holds information on the most recent tenancy linked to the property.
  * ETag `string`: ETag
  * EndDate `string`: The end date of the Tenancy
  * FixedDate `string`: The fixed date of the Tenancy
  * GlobalReference `string`: The unique global reference of the Tenancy
  * IsTenancyEnded `boolean`: Has the Tenancy ended?
  * LinkedTenants `array`: A collection of tenants linked to the tenancy:-
    * items [LinkedTenantModel](#linkedtenantmodel)
  * OID `string`: OID
  * StartDate `string`: The start date of the Tenancy

### LinkedLandlordModel
* LinkedLandlordModel `object`: Holds information on landlords
  * ETag `string`: ETag
  * Forename `string`: Forename
  * OID `string`: OID
  * Surname `string`: Surname
  * Title `string`: Title

### LinkedPropertiesModel
* LinkedPropertiesModel `object`: Holds information on linked properties
  * Address1 `string`: Address 1
  * Address2 `string`: Address2
  * Address3 `string`: Address 3
  * Address4 `string`: Address 4
  * AddressFlatRoomNumber `string`: Address Flat Room Number
  * AddressNumber `string`: Address Number
  * ETag `string`: ETag
  * LatestTenancy [LatestTenancyModel](#latesttenancymodel)
  * MainLandlord [LinkedLandlordModel](#linkedlandlordmodel)
  * OID `string`: OID
  * Postcode `string`: Postcode

### LinkedTenantModel
* LinkedTenantModel `object`: Holds information on tenants
  * ETag `string`: ETag
  * Forename `string`: Forename
  * OID `string`: OID
  * Surname `string`: Surname
  * Title `string`: Title

### ViewingBookingModel
* ViewingBookingModel `object`: Represents a viewing booking slot
  * End `string`: The end time of the booking
  * StaffID `string`: The unique ID of the staff member this booking is with
  * StaffName `string`: The name of the staff member this booking is with
  * Start `string`: The start time of the booking


