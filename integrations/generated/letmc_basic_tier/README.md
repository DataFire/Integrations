# @datafire/letmc_basic_tier

Client library for LetMC Api V2, Basic (Tier 2)

## Installation and Usage
```bash
npm install --save @datafire/letmc_basic_tier
```
```js
let letmc_basic_tier = require('@datafire/letmc_basic_tier').create({
  apiKey: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### v2.tier2.shortName.area.areas.get
A collection of all the areas for a company


```js
letmc_basic_tier.v2.tier2.shortName.area.areas.get({
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
* output [AreaModelResults](#areamodelresults)

### v2.tier2.shortName.area.areas.areaID.get
Get a specific area given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.area.areas.areaID.get({
  "shortName": "",
  "areaID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * areaID **required** `string`: The unique ID of the Area

#### Output
* output [AreaModel](#areamodel)

### v2.tier2.shortName.branch.branches.get
All branches defined for a company


```js
letmc_basic_tier.v2.tier2.shortName.branch.branches.get({
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
* output [BranchModelResults](#branchmodelresults)

### v2.tier2.shortName.branch.branches.branchID.get
Get a specific branch given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.branch.branches.branchID.get({
  "shortName": "",
  "branchID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch

#### Output
* output [BranchModel](#branchmodel)

### CompanyController_GetCompany
Information about a specific company


```js
letmc_basic_tier.CompanyController_GetCompany({
  "shortName": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name

#### Output
* output [CompanyModel](#companymodel)

### v2.tier2.shortName.county.counties.get
A collection of all counties available for a company


```js
letmc_basic_tier.v2.tier2.shortName.county.counties.get({
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
* output [CountyModelResults](#countymodelresults)

### v2.tier2.shortName.county.counties.countyID.get
Get a specific county given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.county.counties.countyID.get({
  "shortName": "",
  "countyID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * countyID **required** `string`: The unique ID of the County

#### Output
* output [CountyModel](#countymodel)

### CountyController_GetCountiesBranches
A collection of branches that manage a specific county


```js
letmc_basic_tier.CountyController_GetCountiesBranches({
  "shortName": "",
  "countyID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * countyID **required** `string`: The unique ID of the County
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [BranchModelResults](#branchmodelresults)

### v2.tier2.shortName.diary.allocations.get
A collection of all diary allocations


```js
letmc_basic_tier.v2.tier2.shortName.diary.allocations.get({
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
* output [DiaryAllocationModelResults](#diaryallocationmodelresults)

### v2.tier2.shortName.diary.allocations.diaryAllocationID.get
Get a specific diary allocation given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.diary.allocations.diaryAllocationID.get({
  "shortName": "",
  "diaryAllocationID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * diaryAllocationID **required** `string`: The unique ID of the DiaryAllocation

#### Output
* output [DiaryAllocationModel](#diaryallocationmodel)

### v2.tier2.shortName.diary.appointments.get
A collection of all diary appointments


```js
letmc_basic_tier.v2.tier2.shortName.diary.appointments.get({
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
* output [DiaryAppointmentModelResults](#diaryappointmentmodelresults)

### v2.tier2.shortName.diary.appointments.diaryAppointmentID.get
Get a specific diary appointment given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.diary.appointments.diaryAppointmentID.get({
  "shortName": "",
  "diaryAppointmentID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * diaryAppointmentID **required** `string`: The unique ID of the DiaryAppointment

#### Output
* output [DiaryAppointmentModel](#diaryappointmentmodel)

### v2.tier2.shortName.diary.appointmenttypes.get
A collection of all diary appointment types


```js
letmc_basic_tier.v2.tier2.shortName.diary.appointmenttypes.get({
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

### v2.tier2.shortName.diary.appointmenttypes.diaryAppointmentTypeID.get
Get a specific diary appointment type given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.diary.appointmenttypes.diaryAppointmentTypeID.get({
  "shortName": "",
  "diaryAppointmentTypeID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * diaryAppointmentTypeID **required** `string`: The unique ID of the DiaryAppointmentType

#### Output
* output [DiaryAppointmentTypeModel](#diaryappointmenttypemodel)

### LettingsController_GetAdvertised
Search all properties available for rent given a range of search criteria.


```js
letmc_basic_tier.LettingsController_GetAdvertised({
  "shortName": "",
  "branchID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)
  * areaID `string`: The unique ID of the Area
  * rentMinimum `number`: The minimum advertised rent to search for
  * rentMaximum `number`: The maximum advertised rent to search for
  * maximumTenants `integer`: The maximum number of tenants a property can accommodate
  * wantSharedProperties `boolean`: Search for shared properties?
  * wantStudentProperties `boolean`: Search for student properties?

#### Output
* output [TenancyModelResults](#tenancymodelresults)

### LettingsController_GetAdvertisedBetweenDates
Search all properties available for rent given a range of search criteria and dates.


```js
letmc_basic_tier.LettingsController_GetAdvertisedBetweenDates({
  "shortName": "",
  "branchID": "",
  "offset": 0,
  "count": 0,
  "rangeStartDate": "",
  "rangeEndDate": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)
  * rangeStartDate **required** `string`: The date to search from
  * rangeEndDate **required** `string`: The date to search to
  * areaID `string`: The unique ID of the Area
  * rentMinimum `number`: The minimum advertised rent to search for
  * rentMaximum `number`: The maximum advertised rent to search for
  * maximumTenants `integer`: The maximum number of tenants a property can accommodate
  * wantSharedProperties `boolean`: Search for shared properties?
  * wantStudentProperties `boolean`: Search for student properties?

#### Output
* output [TenancyModelResults](#tenancymodelresults)

### v2.tier2.shortName.lettings.tenancies.get
A collection of all the company's tenancies


```js
letmc_basic_tier.v2.tier2.shortName.lettings.tenancies.get({
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
* output [TenancyModelResults](#tenancymodelresults)

### v2.tier2.shortName.lettings.tenancies.tenancyID.get
Get a specific tenancy given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.lettings.tenancies.tenancyID.get({
  "shortName": "",
  "tenancyID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * tenancyID **required** `string`: The unique ID of the Tenancy

#### Output
* output [TenancyModel](#tenancymodel)

### LettingsController_GetTenancyBrochure
Downloads the brochure relating to the latest advertised rental of a property


```js
letmc_basic_tier.LettingsController_GetTenancyBrochure({
  "shortName": "",
  "tenancyID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * tenancyID **required** `string`: The unique ID of the tenancy

#### Output
* output [Object](#object)

### v2.tier2.shortName.photo.photos.get
A collection of all photos in the company


```js
letmc_basic_tier.v2.tier2.shortName.photo.photos.get({
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
* output [PhotoModelResults](#photomodelresults)

### v2.tier2.shortName.photo.photos.photoID.get
Get a specific photo given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.photo.photos.photoID.get({
  "shortName": "",
  "photoID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * photoID **required** `string`: The unique ID of the Photo

#### Output
* output [PhotoModel](#photomodel)

### PhotoController_GetPhotoDownload
Downloads the photo of a property given the property and photo ID.


```js
letmc_basic_tier.PhotoController_GetPhotoDownload({
  "shortName": "",
  "photoID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * photoID **required** `string`: The unique ID of the photo on the property
  * width `integer`: An optional parameter specifying the image width
  * height `integer`: An optional parameter specifying the image height

#### Output
* output [Object](#object)

### v2.tier2.shortName.property.properties.get
A collection of all properties within a company


```js
letmc_basic_tier.v2.tier2.shortName.property.properties.get({
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
* output [PropertyModelResults](#propertymodelresults)

### v2.tier2.shortName.property.properties.propertyID.get
Get a specific property given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.property.properties.propertyID.get({
  "shortName": "",
  "propertyID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * propertyID **required** `string`: The unique ID of the Property

#### Output
* output [PropertyModel](#propertymodel)

### PropertyController_GetPropertiesFacilities
A collection of facilities linked to a block, property or room


```js
letmc_basic_tier.PropertyController_GetPropertiesFacilities({
  "shortName": "",
  "propertyID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * propertyID **required** `string`: The unique ID of the Property
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [PropertyFacilityModelResults](#propertyfacilitymodelresults)

### PropertyController_GetPropertiesPhotos
A collection showing all the photos linked to a specific block, property or room


```js
letmc_basic_tier.PropertyController_GetPropertiesPhotos({
  "shortName": "",
  "propertyID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * propertyID **required** `string`: The unique ID of the Property
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [PhotoModelResults](#photomodelresults)

### PropertyController_GetPropertiesRooms
A collection of the rooms that belong to this property or block


```js
letmc_basic_tier.PropertyController_GetPropertiesRooms({
  "shortName": "",
  "propertyID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * propertyID **required** `string`: The unique ID of the Property
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [PropertyRoomModelResults](#propertyroommodelresults)

### PropertyController_GetPropertiesTenancies
A collection of all tenancies associated with this block, property or room


```js
letmc_basic_tier.PropertyController_GetPropertiesTenancies({
  "shortName": "",
  "propertyID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * propertyID **required** `string`: The unique ID of the Property
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [TenancyModelResults](#tenancymodelresults)

### PropertyController_GetPropertyEERDownload
Downloads the energy efficiency report (EER) graph for a property


```js
letmc_basic_tier.PropertyController_GetPropertyEERDownload({
  "shortName": "",
  "propertyStructureID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * propertyStructureID **required** `string`: The unique ID of the property structure

#### Output
* output [Object](#object)

### PropertyController_GetPropertyEIRDownload
Downloads the environmental impact report (EIR) graph for a property


```js
letmc_basic_tier.PropertyController_GetPropertyEIRDownload({
  "shortName": "",
  "propertyStructureID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * propertyStructureID **required** `string`: The unique ID of the property structure

#### Output
* output [Object](#object)

### SalesController_GetAdvertisedSales
Search all sales properties available given a range of search criteria


```js
letmc_basic_tier.SalesController_GetAdvertisedSales({
  "shortName": "",
  "branchID": "",
  "offset": 0,
  "count": 0,
  "onlyDevelopement": true,
  "onlyInvestements": true
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)
  * onlyDevelopement **required** `boolean`: Show only development properties?
  * onlyInvestements **required** `boolean`: Show only investment properties?
  * minimumPrice `number`: The minimum price to search for
  * maximumPrice `number`: The maximum price to search for
  * minimumBeds `integer`: The minimum beds to search for
  * minimumBathrooms `integer`: The minimum bathrooms to search for
  * minimumEnsuites `integer`: The minimum ensuite bathrooms to search for
  * minimumToilets `integer`: The minimum toilets to search for
  * minimumReception `integer`: The minimum reception rooms to search for

#### Output
* output [SalesInstructionModelResults](#salesinstructionmodelresults)

### SalesController_GetEER
Downloads the energy efficiency report (EER) graph for a sales instruction


```js
letmc_basic_tier.SalesController_GetEER({
  "shortName": "",
  "salesInstructionID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * salesInstructionID **required** `string`: The unique ID of the SalesInstruction

#### Output
* output [Object](#object)

### SalesController_GetEIR
Downloads the energy efficiency report (EIR) graph for a sales instruction


```js
letmc_basic_tier.SalesController_GetEIR({
  "shortName": "",
  "salesInstructionID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * salesInstructionID **required** `string`: The unique ID of the SalesInstruction

#### Output
* output [Object](#object)

### v2.tier2.shortName.sales.salesfeaturetypes.get
A collection of all sales feature types linked to a company


```js
letmc_basic_tier.v2.tier2.shortName.sales.salesfeaturetypes.get({
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
* output [SalesFeatureTypeModelResults](#salesfeaturetypemodelresults)

### v2.tier2.shortName.sales.salesfeaturetypes.salesFeatureTypeID.get
Get a specific sales feature type given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.sales.salesfeaturetypes.salesFeatureTypeID.get({
  "shortName": "",
  "salesFeatureTypeID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * salesFeatureTypeID **required** `string`: The unique ID of the SalesFeatureType

#### Output
* output [SalesFeatureTypeModel](#salesfeaturetypemodel)

### v2.tier2.shortName.sales.salesinstructions.get
A collection of all sales instructions linked to a company


```js
letmc_basic_tier.v2.tier2.shortName.sales.salesinstructions.get({
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
* output [SalesInstructionModelResults](#salesinstructionmodelresults)

### v2.tier2.shortName.sales.salesinstructions.salesInstructionID.get
Get a specific sales instruction given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.sales.salesinstructions.salesInstructionID.get({
  "shortName": "",
  "salesInstructionID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * salesInstructionID **required** `string`: The unique ID of the SalesInstruction

#### Output
* output [SalesInstructionModel](#salesinstructionmodel)

### SalesController_GetSalesInstructionsFeatures
A collection of all features linked to a sales instruction


```js
letmc_basic_tier.SalesController_GetSalesInstructionsFeatures({
  "shortName": "",
  "salesInstructionID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * salesInstructionID **required** `string`: The unique ID of the SalesInstruction
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [SalesFeatureModelResults](#salesfeaturemodelresults)

### SalesController_GetSalesInstructionsFloorPlans
A collection of floor plans linked to an instruction


```js
letmc_basic_tier.SalesController_GetSalesInstructionsFloorPlans({
  "shortName": "",
  "salesInstructionID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * salesInstructionID **required** `string`: The unique ID of the SalesInstruction
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [PhotoModelResults](#photomodelresults)

### SalesController_GetSalesInstructionsPhotos
A collection of photos linked to an instruction


```js
letmc_basic_tier.SalesController_GetSalesInstructionsPhotos({
  "shortName": "",
  "salesInstructionID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * salesInstructionID **required** `string`: The unique ID of the SalesInstruction
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [PhotoModelResults](#photomodelresults)

### SalesController_GetSalesInstructionsRooms
A collection of rooms linked to an instruction


```js
letmc_basic_tier.SalesController_GetSalesInstructionsRooms({
  "shortName": "",
  "salesInstructionID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * salesInstructionID **required** `string`: The unique ID of the SalesInstruction
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [PropertyRoomModelResults](#propertyroommodelresults)

### v2.tier2.shortName.staff.staff.get
A collection of all the staff members linked to a specific company


```js
letmc_basic_tier.v2.tier2.shortName.staff.staff.get({
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
* output [ApplicationStaffModelResults](#applicationstaffmodelresults)

### v2.tier2.shortName.staff.staff.applicationStaffID.get
Get a specific application staff given its unique Object ID (OID)


```js
letmc_basic_tier.v2.tier2.shortName.staff.staff.applicationStaffID.get({
  "shortName": "",
  "applicationStaffID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * applicationStaffID **required** `string`: The unique ID of the ApplicationStaff

#### Output
* output [ApplicationStaffModel](#applicationstaffmodel)

### ViewingController_GetBookings
Gets a list of available viewing slots for one or more properties


```js
letmc_basic_tier.ViewingController_GetBookings({
  "shortName": "",
  "preferredDate": "",
  "propertyIDsToView": []
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * preferredDate **required** `string`: The preferred date for a viewing
  * propertyIDsToView **required** `array`: An array of unique IDs of properties to view

#### Output
* output `array`
  * items [ViewingBookingModel](#viewingbookingmodel)

### ViewingController_MakeBooking
Book an appointment for a viewing slot returned from the GET verb


```js
letmc_basic_tier.ViewingController_MakeBooking({
  "shortName": "",
  "forename": "",
  "surname": "",
  "mobilePhone": "",
  "emailAddress": "",
  "propertyIDsToView": [],
  "selectedViewingSlot": {
    "Start": "",
    "End": "",
    "StaffName": "",
    "StaffID": ""
  }
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * forename **required** `string`: The forename of the prospect
  * surname **required** `string`: The surname of the prospect
  * mobilePhone **required** `string`: The mobile phone number of the prospect
  * emailAddress **required** `string`: The email address of the prospect
  * propertyIDsToView **required** `array`: An array of unique IDs of properties to view
  * selectedViewingSlot **required** [ViewingBookingModel](#viewingbookingmodel)
  * wantRoomInSharedProperty `boolean`: Whether the prospect wants a shared property
  * alertMinRent `number`: The minimum rent amount the prospect is looking for
  * alertMaxRent `number`: The maximum rent amount the prospect is looking for
  * alertNumberOfBeds `integer`: The minimum number of beds the prospect is looking for
  * alertAreaID `string`: The unique ID of the area the prospect is looking for
  * alertTenantType `string` (values: Employed, SelfEmployed, Unemployed, Student, OwnMeans, Retired, Company, Council): The tenanct type the prospect is looking for
  * subscribeToEmailAlerts `boolean`: Whether to subscribe the prospect to email alerts
  * subscribeToSMSAlerts `boolean`: Whether to subscribe the prospect to SMS alerts

#### Output
* output `boolean`



## Definitions

### ApplicationStaffModel
* ApplicationStaffModel `object`: Holds the information about a member of staff.
  * ContactEMail `string`: The user's email contact.
  * ContactMobile `string`: The user's mobile contact.
  * DateOfBirth `string`: The user's date of birth.
  * ETag `string`: A unique identifier defining the object and change revision.
  * Forename `string`: The user's forename.
  * GlobalReference `string`: The global reference to this user.
  * IsEnabled `boolean`: Is this staff member enabled?
  * ManagedBy `string`: The branch linked to this user
  * Middlename `string`: The user's middlename.
  * OID `string`: The unique Object ID (OID).
  * Surname `string`: The user's surname.
  * Title `string`: The user's title.

### ApplicationStaffModelResults
* ApplicationStaffModelResults `object`: Holds results from a paged query returning ApplicationStaffModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [ApplicationStaffModel](#applicationstaffmodel)

### AreaModel
* AreaModel `object`: Stores the information about a single property area.
  * Branch `string`: The branch that manages this area.
  * ETag `string`: A unique identifier defining the object and change revision.
  * Name `string`: The property area name.
  * OID `string`: The unique Object ID (OID).
  * ShowOnSites `boolean`: Show the area on sites?

### AreaModelResults
* AreaModelResults `object`: Holds results from a paged query returning AreaModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [AreaModel](#areamodel)

### BranchModel
* BranchModel `object`: Defines a single branch of a client.
  * Address1 `string`: Branch address line 1.
  * Address2 `string`: Branch address line 2.
  * Address3 `string`: Branch address line 3.
  * Address4 `string`: Branch address line 4.
  * CompanyName `string`: The relevant company name, if not the one specified on the branch then the one on company.
  * County `string`: County
  * EMailAddress `string`: Branch email address.
  * ETag `string`: A unique identifier defining the object and change revision.
  * FaxPhone `string`: Branch fax phone number.
  * LandPhone `string`: Branch land phone number.
  * Name `string`: The branch name.
  * OID `string`: The unique Object ID (OID).
  * Postcode `string`: Branch address postcode.
  * WebAddress `string`: Branch web address.

### BranchModelResults
* BranchModelResults `object`: Holds results from a paged query returning BranchModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [BranchModel](#branchmodel)

### CompanyModel
* CompanyModel `object`: The search code for the ApplicationCompany storage object.
  * CompanyName `string`: Company name
  * CompanyRegistration `string`: Company registration number
  * ETag `string`: A unique identifier defining the object and change revision.
  * MarketingCompanyName `string`: Company Marketing Name
  * OID `string`: The unique Object ID (OID).
  * ShortName `string`: The unique identifier assigned to the client

### CountyModel
* CountyModel `object`: Stores the information about a single property County. A County can have a number of areas linked to it.
  * ETag `string`: A unique identifier defining the object and change revision.
  * Name `string`: The property county name.
  * OID `string`: The unique Object ID (OID).

### CountyModelResults
* CountyModelResults `object`: Holds results from a paged query returning CountyModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [CountyModel](#countymodel)

### DiaryAllocationModel
* DiaryAllocationModel `object`: Represents a single diary allocation, capable of holding a number
  * AppointmentType `string`: The diary appointment type.
  * ETag `string`: A unique identifier defining the object and change revision.
  * End `string`: The end date/time of this allocation.
  * OID `string`: The unique Object ID (OID).
  * Staff `string`: The staff member holding this allocation.
  * Start `string`: The start date/time of this allocation.

### DiaryAllocationModelResults
* DiaryAllocationModelResults `object`: Holds results from a paged query returning DiaryAllocationModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [DiaryAllocationModel](#diaryallocationmodel)

### DiaryAppointmentModel
* DiaryAppointmentModel `object`: Represents a single diary appointment for a staff member.
  * AppointmentType `string`: The diary appointment type.
  * Cancelled `boolean`: Whether the appointment has been cancelled.
  * Comment `string`: The appointment comments text.
  * CreatedAt `string`: The date/time this appointment was created.
  * CreatedBy `string`: The staff member that created this appointment.
  * ETag `string`: A unique identifier defining the object and change revision.
  * End `string`: The end date/time of this appointment.
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

### Object
* Object `object`

### PhotoModel
* PhotoModel `object`: Stores a photo related to a property structure.
  * ETag `string`: A unique identifier defining the object and change revision.
  * FileName `string`: The file name.
  * InspectionItem `string`: The inspection item the photo is assigned to (if applicable).
  * InterimInspection `string`: The inspection the photo is assigned to (if applicable).
  * InventoryItem `string`: The inventory item the photo is assigned to (if applicable).
  * Name `string`: The photo name.
  * OID `string`: The unique Object ID (OID).
  * PhotoNumber `integer`: The photo ordering number
  * PhotoType `string` (values: Photo, Map, FloorPlan, SiteMap, AerialPhoto): The photo type.
  * Property `string`: The property the photo is assigned to.
  * Room `string`: The room the photo is assigned to. (If applicable)

### PhotoModelResults
* PhotoModelResults `object`: Holds results from a paged query returning PhotoModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [PhotoModel](#photomodel)

### PropertyFacilityModel
* PropertyFacilityModel `object`: Stores the information about a single property facility.
  * ETag `string`: A unique identifier defining the object and change revision.
  * Name `string`: Display Name
  * OID `string`: The unique Object ID (OID).

### PropertyFacilityModelResults
* PropertyFacilityModelResults `object`: Holds results from a paged query returning PropertyFacilityModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [PropertyFacilityModel](#propertyfacilitymodel)

### PropertyModel
* PropertyModel `object`: Stores the 'Sales' type fields for property ownable as a stepping stone to a full on BO when we finally get the go ahead to write sales!!
  * Area `string`: The area the property is located in.
  * Branch `string`: The branch the block, property or room is assigned to
  * Description `string`: The block, property or room description.
  * ETag `string`: A unique identifier defining the object and change revision.
  * FullAddress `string`: The full address of a block, property or room, formatted with line breaks such that it may be used on a letter directly.
  * GlobalReference `string`: The global reference to this block, property or room
  * MainPhoto `string`: Gets the main photo, if there is one.
  * ManagedByStaff `string`: The staff memeber that manages the block, property or room
  * OID `string`: The unique Object ID (OID).
  * PropertySource `string`: The block, property or room source type
  * PropertyType `string` (values: House, FlatApartment, Bungalow, Land, HouseFlatShare, GarageParking, CommercialProperty, Block, TerracedHouse, EndTerraceHouse, SemiDetachedHouse, DetachedHouse, SemiDetachedBungalow, TownHouse, Cottage, ServicedApartment, Studio, Apartment, Barn, FarmHouse, Penthouse, BuildingPlot, DetachedBungalow, LinkDetached, MidTerracedBungalow, LandResidential): The block or property type.
  * RoomName `string`: The room name (if applicable).
  * VideoURL `string`: URL of the video linked to the property

### PropertyModelResults
* PropertyModelResults `object`: Holds results from a paged query returning PropertyModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [PropertyModel](#propertymodel)

### PropertyRoomModel
* PropertyRoomModel `object`: A single room (bedroom) property structure.
  * Area `string`: The area the property is located in.
  * Branch `string`: The branch the block, property or room is assigned to
  * Description `string`: The block, property or room description.
  * ETag `string`: A unique identifier defining the object and change revision.
  * FullAddress `string`: The full address of a block, property or room, formatted with line breaks such that it may be used on a letter directly.
  * GlobalReference `string`: The global reference to this block, property or room
  * HeightCentimeters `integer`: Gets the CentiMeter part of the room Height.
  * HeightMeters `integer`: Gets the Meter part of the room Height.
  * LengthCentimeters `integer`: Gets the CentiMeter part of the room Length.
  * LengthMeters `integer`: Gets the Meter part of the room Length.
  * MainPhoto `string`: Gets the main photo, if there is one.
  * ManagedByStaff `string`: The staff memeber that manages the block, property or room
  * OID `string`: The unique Object ID (OID).
  * PropertySource `string`: The block, property or room source type
  * RoomFloor `string` (values: Basement, Ground, First, Second, Third, Fourth, Fifth, SixthPlus, Unknown): Gets and sets the room floor.
  * RoomName `string`: The room name (if applicable).
  * WidthCentiMeters `integer`: Gets the CentiMeter part of the room width.
  * WidthMeters `integer`: Gets the Meter part of the room width.

### PropertyRoomModelResults
* PropertyRoomModelResults `object`: Holds results from a paged query returning PropertyRoomModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [PropertyRoomModel](#propertyroommodel)

### SalesFeatureModel
* SalesFeatureModel `object`
  * Comment `string`: The feature comment
  * ETag `string`: A unique identifier defining the object and change revision.
  * OID `string`: The unique Object ID (OID).
  * Type `string`: The feature type

### SalesFeatureModelResults
* SalesFeatureModelResults `object`: Holds results from a paged query returning SalesFeatureModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [SalesFeatureModel](#salesfeaturemodel)

### SalesFeatureTypeModel
* SalesFeatureTypeModel `object`
  * ETag `string`: A unique identifier defining the object and change revision.
  * Name `string`: The name of the feature type
  * OID `string`: The unique Object ID (OID).

### SalesFeatureTypeModelResults
* SalesFeatureTypeModelResults `object`: Holds results from a paged query returning SalesFeatureTypeModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [SalesFeatureTypeModel](#salesfeaturetypemodel)

### SalesInstructionModel
* SalesInstructionModel `object`
  * Address1 `string`: Address 1 of the property to be sold
  * Address2 `string`: Address 2 of the property to be sold
  * Address3 `string`: Address 3 of the property to be sold
  * Address4 `string`: Address 4 of the property to be sold
  * AddressNumber `string`: Address number of the property to be sold
  * Area `string`: The area linked to the instruction
  * Bathrooms `integer`: Number of bathrooms linked to the instruction
  * BathroomsEnsuite `integer`: How many of the bathrooms are ensuite?
  * Bedrooms `integer`: Number of bedrooms linked to the instruction
  * ContractType `string` (values: Pending, SoleAgency, SoleSellingRights, JointSoleAgency, MultiAgency, SubAgent): The contract type
  * Country `string` (values: Afghanistan, Albania, Algeria, Andorra, Angola, AntiguaAndBarbuda, Argentina, Armenia, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bhutan, Bolivia, BosniaAndHerzegovina, Botswana, Brazil, Brunei, Bulgaria, BurkinaFaso, Burundi, Cambodia, Cameroon, Canada, CapeVerde, CentralAfricanRepublic, Chad, Chile, China, Colombia, Comoros, CongoBrazzaville, CongoDemocraticRepublicOfThe, CostaRica, CoteDIvoire, Croatia, Cuba, Cyprus, CzechRepublic, Denmark, Djibouti, Dominica, DominicanRepublic, EastTimorTimorTimur, Ecuador, Egypt, ElSalvador, EquatorialGuinea, Eritrea, Estonia, Ethiopia, Fiji, Finland, France, Gabon, GambiaThe, Georgia, Germany, Ghana, Greece, Grenada, Guatemala, Guinea, GuineaBissau, Guyana, Haiti, Honduras, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Israel, Italy, Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kiribati, KoreaNorth, KoreaSouth, Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, MacedoniaFormerYugoslavRepublicOf, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, MarshallIslands, Mauritania, Mauritius, Mexico, MicronesiaFederatedStatesOf, Moldova, Monaco, Mongolia, Morocco, Mozambique, Myanmar, Namibia, Nauru, Nepal, Netherlands, NewZealand, Nicaragua, Niger, Nigeria, Norway, Oman, Pakistan, Palau, Panama, PapuaNewGuinea, Paraguay, Peru, Philippines, Poland, Portugal, Qatar, Romania, Russia, Rwanda, SaintKittsAndNevis, SaintLucia, SaintVincentAndTheGrenadines, Samoa, SanMarino, SaoTomeAndPrincipe, SaudiArabia, Senegal, SerbiaAndMontenegro, Seychelles, SierraLeone, Singapore, Slovakia, Slovenia, SolomonIslands, Somalia, SouthAfrica, Spain, SriLanka, Sudan, Suriname, Swaziland, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Togo, Tonga, TrinidadAndTobago, Tunisia, Turkey, Turkmenistan, Tuvalu, Uganda, Ukraine, UnitedArabEmirates, UnitedKingdom, UnitedStates, Uruguay, Uzbekistan, Vanuatu, VaticanCity, Venezuela, Vietnam, WesternSahara, Yemen, Zambia, Zimbabwe, UnknownCountry, HongKong, Jersey, ChannelIslands, Bermuda, BritishOverseasTerritory): Address country of the property to be sold
  * Description `string`: The instruction description
  * DevelopmentOpp `boolean`: Is the instruction a development opportunity?
  * Directions `string`: Directions linked to the instruction
  * EPCCurrentEER `integer`: Current EER value
  * EPCCurrentEI `integer`: Current EI value
  * EPCPotentialEER `integer`: Potential EER value
  * EPCPotentialEI `integer`: Potential EI value
  * ETag `string`: A unique identifier defining the object and change revision.
  * HasElectricitySupply `boolean`: Does the instruction have an electrical supply linked to it?
  * HasGasSupply `boolean`: Does the instruction have an gas supply linked to it?
  * HasWaterMeter `boolean`: Does the instruction have a water meter linked to it?
  * InvestmentOpp `boolean`: Is the instruction a investment opportunity?
  * Kitchens `integer`: Number of kitchens linked to the property instruction
  * OID `string`: The unique Object ID (OID).
  * OutsideSpaceBalcony `boolean`: Does the instruction have an outside balcony linked to it?
  * OutsideSpaceCommunalGarden `boolean`: Does the instruction have a communal garden linked to it?
  * OutsideSpaceConservatory `boolean`: Does the instruction have a conservatory linked to it?
  * OutsideSpaceGarden `boolean`: Does the instruction have a garden linked to it?
  * OutsideSpaceLargeGarden `boolean`: Does the instruction have a large garden linked to it?
  * OutsideSpacePatio `boolean`: Does the instruction have a patio linked to it?
  * OutsideSpaceRoofTerrace `boolean`: Does the instruction have a roof terrace linked to it?
  * OutsideSpaceSouthFacingGarden `boolean`: Does the instruction have a south facing garden?
  * ParkingAllocated `boolean`: Is there any parking allocation linked to the instruction?
  * ParkingCarport `boolean`: Does the instruction have a carport linked to it?
  * ParkingDoubleGarage `boolean`: Does the instruction have a double garage linked to it?
  * ParkingGarage `boolean`: Does the instruction have a garage linked to it?
  * ParkingOffRoad `boolean`: Is there off road parking linked to the instruction?
  * ParkingOnRoad `boolean`: Is there on road parking linked to the instruction?
  * ParkingPermit `boolean`: Is a parking permit required?
  * ParkingSecureGated `boolean`: Is there any secured gate parking linked to the instruction?
  * ParkingTripleGarage `boolean`: Does the instruction have a triple garage linked to it?
  * Postcode `string`: Postcode of the property to be sold
  * Price `number`: The price of the property to be sold
  * PropertyOwnableType `string` (values: House, FlatApartment, Bungalow, Land, HouseFlatShare, GarageParking, CommercialProperty, Block, TerracedHouse, EndTerraceHouse, SemiDetachedHouse, DetachedHouse, SemiDetachedBungalow, TownHouse, Cottage, ServicedApartment, Studio, Apartment, Barn, FarmHouse, Penthouse, BuildingPlot, DetachedBungalow, LinkDetached, MidTerracedBungalow, LandResidential): The property type
  * ReceptionRooms `integer`: Number of reception rooms linked to the instruction
  * State `string` (values: MarketAppraisal, LostAppraisal, Instructed, Advertised, UnderOffer, ContractsExchanged, Completed, FallenThrough, Withdrawn): The current instruction state
  * Tenure `string` (values: Freehold, Leasehold, Commonhold, ShareOfFreehold, FlyingFreehold, ShareTransfer, Unknown): Instruction tenure
  * VideoURL `string`: The URL of the video linked to the Sales Instruction

### SalesInstructionModelResults
* SalesInstructionModelResults `object`: Holds results from a paged query returning SalesInstructionModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [SalesInstructionModel](#salesinstructionmodel)

### TenancyModel
* TenancyModel `object`: Represents a single tenancy on a property structure. This class may
  * AdvertiseFrom `string`: The date to advertise this tenancy from.
  * Area `string`: The area containing the instruction.
  * BondRequired `number`: The total bond required.
  * Branch `string`: The branch the tenancy is assigned to..
  * ETag `string`: A unique identifier defining the object and change revision.
  * Furnished `string` (values: Unfurnished, PartFurnished, Furnished): The property furnished type.
  * GlobalReference `string`: The global reference for a tenancy.
  * IsShareProperty `boolean`: Is this property a shared property.
  * IsStudentProperty `boolean`: Is this property a student property.
  * IsTenancyAdvertised `boolean`: Gets a value indicating whether this tenancy is being advertised. Note
  * IsTenancyProposed `boolean`: Is the tenancy a proposed tenancy?
  * MaximumTenants `integer`: The maximum number of tenants to advertise for.
  * MinimumTenants `integer`: The minimum number of tenants to advertise for.
  * OID `string`: The unique Object ID (OID).
  * RentAdvertised `number`: The advertised amount of rent for the property.
  * RentRecurrence `integer`: The rent schedule recurrence
  * RentSchedule `string` (values: Once, Daily, Weekly, Monthly, Yearly): The tenancy rent schedule
  * TenancyProperty `string`: The property linked to this tenancy.
  * TenantSystemTypes `array`: The specific tenant type list, or empty if for all types.
    * items `string` (values: Employed, SelfEmployed, Unemployed, Student, OwnMeans, Retired, Company, Council)
  * TermMaximum `integer`: The instruction maximum term.
  * TermMinimum `integer`: The minimum term.
  * TermStart `string`: The instruction start date.
  * UtilityCouncilTax `string` (values: Tenant, Landlord): Who's responsible for council tax bills.
  * UtilityElectricity `string` (values: Tenant, Landlord): Who's responsible for electricity bills.
  * UtilityGas `string` (values: Tenant, Landlord): Who's responsible for Gas bills.
  * UtilityTelephone `string` (values: Tenant, Landlord): Who's responsible for telephone bills.
  * UtilityWater `string` (values: Tenant, Landlord): Who's responsible for water bills.

### TenancyModelResults
* TenancyModelResults `object`: Holds results from a paged query returning TenancyModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [TenancyModel](#tenancymodel)

### ViewingBookingModel
* ViewingBookingModel `object`: Represents a viewing booking slot
  * End **required** `string`: The end time of the booking
  * StaffID **required** `string`: The unique ID of the staff member this booking is with
  * StaffName **required** `string`: The name of the staff member this booking is with
  * Start **required** `string`: The start time of the booking


