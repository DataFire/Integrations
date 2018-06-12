# @datafire/letmc_reporting

Client library for LetMC Api V3, reporting

## Installation and Usage
```bash
npm install --save @datafire/letmc_reporting
```
```js
let letmc_reporting = require('@datafire/letmc_reporting').create({
  apiKey: "",
  username: "",
  password: ""
});

letmc_reporting.ReportingController_ApplicantsRegisteredByStaffMember({
  "shortName": "",
  "branchID": "",
  "days": 0,
  "offset": 0,
  "count": 0
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### ReportingController_ApplicantsRegisteredByStaffMember
A call to return all prospects created in the previous number of days.


```js
letmc_reporting.ReportingController_ApplicantsRegisteredByStaffMember({
  "shortName": "",
  "branchID": "",
  "days": 0,
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * days **required** `number`: Number of days to search
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [ApplicantsRegisteredByStaffMemberModelResults](#applicantsregisteredbystaffmembermodelresults)



## Definitions

### ApplicantDetailsModel
* ApplicantDetailsModel `object`: A model containing the representation structure of a prospect
  * Name `string`: Name
  * OID `string`: OID
  * Postcode `string`: Postcode

### ApplicantsRegisteredByStaffMemberData
* ApplicantsRegisteredByStaffMemberData `object`: Sort the prospect and staff data into a list
  * Staff `array`: A list of staff member objects.
    * items [StaffDetailsModel](#staffdetailsmodel)

### ApplicantsRegisteredByStaffMemberModelResults
* ApplicantsRegisteredByStaffMemberModelResults `object`: A call containing the main pagination results model for the "ApplicantsRegisteredByStaffMemberModel" method
  * Count `integer`: The total number of results available for all pages:-
  * Data [ApplicantsRegisteredByStaffMemberData](#applicantsregisteredbystaffmemberdata)

### StaffDetailsModel
* StaffDetailsModel `object`: A model containing the representation structure of a staff member
  * ApplicantRegisteredPerDay `number`: Applicant Registered Per Day
  * ApplicantRegisteredWithPostcode `number`: The number of applicants logged that contain an address.
  * LinkedApplicants `array`: Linked Applicants, A list of prospect objects
    * items [ApplicantDetailsModel](#applicantdetailsmodel)
  * OID `string`: The OID of the staff member
  * StaffName `string`: The staff name
  * TotalRegisteredApplicants `integer`: Total Registered Applicants


