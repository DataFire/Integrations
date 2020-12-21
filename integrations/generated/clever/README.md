# @datafire/clever

Client library for Data API

## Installation and Usage
```bash
npm install --save @datafire/clever
```
```js
let clever = require('@datafire/clever').create({
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

Serves the Clever Data API

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
clever.oauthCallback({
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
clever.oauthRefresh(null, context)
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

### getContacts
Returns a list of student contacts


```js
clever.getContacts({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`

#### Output
* output [StudentContactsResponse](#studentcontactsresponse)

### getContact
Returns a specific student contact


```js
clever.getContact({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [StudentContactResponse](#studentcontactresponse)

### getDistrictForStudentContact
Returns the district for a student contact


```js
clever.getDistrictForStudentContact({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DistrictResponse](#districtresponse)

### getStudentForContact
Returns the student for a student contact


```js
clever.getStudentForContact({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [StudentResponse](#studentresponse)

### getDistrictAdmins
Returns a list of district admins


```js
clever.getDistrictAdmins({}, context)
```

#### Input
* input `object`
  * starting_after `string`
  * ending_before `string`
  * show_links `string`

#### Output
* output [DistrictAdminsResponse](#districtadminsresponse)

### getDistrictAdmin
Returns a specific district admin


```js
clever.getDistrictAdmin({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DistrictAdminResponse](#districtadminresponse)

### getDistricts
Returns a list of districts


```js
clever.getDistricts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [DistrictsResponse](#districtsresponse)

### getDistrict
Returns a specific district


```js
clever.getDistrict({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * include `string`

#### Output
* output [DistrictResponse](#districtresponse)

### getAdminsForDistrict
Returns the admins for a district


```js
clever.getAdminsForDistrict({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DistrictAdminsResponse](#districtadminsresponse)

### getSchoolsForDistrict
Returns the schools for a district


```js
clever.getSchoolsForDistrict({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [SchoolsResponse](#schoolsresponse)

### getSectionsForDistrict
Returns the sections for a district


```js
clever.getSectionsForDistrict({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [SectionsResponse](#sectionsresponse)

### getDistrictStatus
Returns the status of the district


```js
clever.getDistrictStatus({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DistrictStatusResponses](#districtstatusresponses)

### getStudentsForDistrict
Returns the students for a district


```js
clever.getStudentsForDistrict({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [StudentsResponse](#studentsresponse)

### getTeachersForDistrict
Returns the teachers for a district


```js
clever.getTeachersForDistrict({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [TeachersResponse](#teachersresponse)

### getSchoolAdmins
Returns a list of school admins


```js
clever.getSchoolAdmins({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [SchoolAdminsResponse](#schooladminsresponse)

### getSchoolAdmin
Returns a specific school admin


```js
clever.getSchoolAdmin({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * include `string`

#### Output
* output [SchoolAdminResponse](#schooladminresponse)

### getSchoolsForSchoolAdmin
Returns the schools for a school admin


```js
clever.getSchoolsForSchoolAdmin({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`

#### Output
* output [SchoolsResponse](#schoolsresponse)

### getSchools
Returns a list of schools


```js
clever.getSchools({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [SchoolsResponse](#schoolsresponse)

### getSchool
Returns a specific school


```js
clever.getSchool({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [SchoolResponse](#schoolresponse)

### getDistrictForSchool
Returns the district for a school


```js
clever.getDistrictForSchool({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DistrictResponse](#districtresponse)

### getSectionsForSchool
Returns the sections for a school


```js
clever.getSectionsForSchool({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [SectionsResponse](#sectionsresponse)

### getStudentsForSchool
Returns the students for a school


```js
clever.getStudentsForSchool({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [StudentsResponse](#studentsresponse)

### getTeachersForSchool
Returns the teachers for a school


```js
clever.getTeachersForSchool({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [TeachersResponse](#teachersresponse)

### getSections
Returns a list of sections


```js
clever.getSections({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [SectionsResponse](#sectionsresponse)

### getSection
Returns a specific section


```js
clever.getSection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [SectionResponse](#sectionresponse)

### getDistrictForSection
Returns the district for a section


```js
clever.getDistrictForSection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DistrictResponse](#districtresponse)

### getSchoolForSection
Returns the school for a section


```js
clever.getSchoolForSection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [SchoolResponse](#schoolresponse)

### getStudentsForSection
Returns the students for a section


```js
clever.getStudentsForSection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`

#### Output
* output [StudentsResponse](#studentsresponse)

### getTeacherForSection
Returns the primary teacher for a section


```js
clever.getTeacherForSection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [TeacherResponse](#teacherresponse)

### getTeachersForSection
Returns the teachers for a section


```js
clever.getTeachersForSection({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`

#### Output
* output [TeachersResponse](#teachersresponse)

### getStudents
Returns a list of students


```js
clever.getStudents({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [StudentsResponse](#studentsresponse)

### getStudent
Returns a specific student


```js
clever.getStudent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * include `string`

#### Output
* output [StudentResponse](#studentresponse)

### getContactsForStudent
Returns the contacts for a student


```js
clever.getContactsForStudent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`

#### Output
* output [StudentContactsForStudentResponse](#studentcontactsforstudentresponse)

### getDistrictForStudent
Returns the district for a student


```js
clever.getDistrictForStudent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DistrictResponse](#districtresponse)

### getSchoolForStudent
Returns the primary school for a student


```js
clever.getSchoolForStudent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [SchoolResponse](#schoolresponse)

### getSectionsForStudent
Returns the sections for a student


```js
clever.getSectionsForStudent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`

#### Output
* output [SectionsResponse](#sectionsresponse)

### getTeachersForStudent
Returns the teachers for a student


```js
clever.getTeachersForStudent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`

#### Output
* output [TeachersResponse](#teachersresponse)

### getTeachers
Returns a list of teachers


```js
clever.getTeachers({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`
  * where `string`

#### Output
* output [TeachersResponse](#teachersresponse)

### getTeacher
Returns a specific teacher


```js
clever.getTeacher({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * include `string`

#### Output
* output [TeacherResponse](#teacherresponse)

### getDistrictForTeacher
Returns the district for a teacher


```js
clever.getDistrictForTeacher({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DistrictResponse](#districtresponse)

### getGradeLevelsForTeacher
Returns the grade levels for sections a teacher teaches


```js
clever.getGradeLevelsForTeacher({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [GradeLevelsResponse](#gradelevelsresponse)

### getSchoolForTeacher
Retrieves school info for a teacher.


```js
clever.getSchoolForTeacher({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [SchoolResponse](#schoolresponse)

### getSectionsForTeacher
Returns the sections for a teacher


```js
clever.getSectionsForTeacher({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`

#### Output
* output [SectionsResponse](#sectionsresponse)

### getStudentsForTeacher
Returns the students for a teacher


```js
clever.getStudentsForTeacher({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * limit `integer`
  * starting_after `string`
  * ending_before `string`

#### Output
* output [StudentsResponse](#studentsresponse)



## Definitions

### BadRequest
* BadRequest `object`
  * message `string`

### Credentials
* Credentials `object`
  * district_username `string`

### District
* District `object`
  * id `string`
  * mdr_number `string`
  * name `string`

### DistrictAdmin
* DistrictAdmin `object`
  * district `string`
  * email `string`
  * id `string`
  * name [Name](#name)
  * title `string`

### DistrictAdminResponse
* DistrictAdminResponse `object`
  * data [DistrictAdmin](#districtadmin)

### DistrictAdminsResponse
* DistrictAdminsResponse `object`
  * data `array`
    * items [DistrictAdmin](#districtadmin)

### DistrictResponse
* DistrictResponse `object`
  * data [District](#district)

### DistrictStatus
* DistrictStatus `object`
  * error `string`
  * id `string`
  * instant_login `boolean`
  * last_sync `string`
  * launch_date `string`
  * pause_end `string`
  * pause_start `string`
  * sis_type `string`
  * state `string` (values: running, pending, error, paused)

### DistrictStatusResponse
* DistrictStatusResponse `object`
  * data [DistrictStatus](#districtstatus)

### DistrictStatusResponses
* DistrictStatusResponses `object`
  * data `array`
    * items [DistrictStatusResponse](#districtstatusresponse)

### DistrictsResponse
* DistrictsResponse `object`
  * data `array`
    * items [DistrictResponse](#districtresponse)

### GradeLevelsResponse
* GradeLevelsResponse `object`
  * data `array`
    * items `string`

### InternalError
* InternalError `object`
  * message `string`

### Location
* Location `object`
  * address `string`
  * city `string`
  * lat `string`
  * lon `string`
  * state `string`
  * zip `string`

### Name
* Name `object`
  * first `string`
  * last `string`
  * middle `string`

### NotFound
* NotFound `object`
  * message `string`

### Principal
* Principal `object`
  * email `string`
  * name `string`

### School
* School `object`
  * created `string`
  * district `string`
  * high_grade `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, PreKindergarten, Kindergarten, PostGraduate, Other)
  * id `string`
  * last_modified `string`
  * location [Location](#location)
  * low_grade `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, PreKindergarten, Kindergarten, PostGraduate, Other)
  * mdr_number `string`
  * name `string`
  * nces_id `string`
  * phone `string`
  * principal [Principal](#principal)
  * school_number `string`
  * sis_id `string`
  * state_id `string`

### SchoolAdmin
* SchoolAdmin `object`
  * credentials [Credentials](#credentials)
  * district `string`
  * email `string`
  * id `string`
  * name [Name](#name)
  * schools `array`
    * items `string`
  * staff_id `string`
  * title `string`

### SchoolAdminResponse
* SchoolAdminResponse `object`
  * data [SchoolAdmin](#schooladmin)

### SchoolAdminsResponse
* SchoolAdminsResponse `object`
  * data `array`
    * items [SchoolAdminResponse](#schooladminresponse)

### SchoolResponse
* SchoolResponse `object`
  * data [School](#school)

### SchoolsResponse
* SchoolsResponse `object`
  * data `array`
    * items [SchoolResponse](#schoolresponse)

### Section
* Section `object`
  * course_description `string`
  * course_name `string`
  * course_number `string`
  * created `string`
  * district `string`
  * grade `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, PreKindergarten, Kindergarten, PostGraduate, Other)
  * id `string`
  * last_modified `string`
  * name `string`
  * period `string`
  * school `string`
  * section_number `string`
  * sis_id `string`
  * students `array`
    * items `string`
  * subject `string` (values: english/language arts, math, science, social studies, language, homeroom/advisory, interventions/online learning, technology and engineering, PE and health, arts and music, other)
  * teacher `string`
  * teachers `array`
    * items `string`
  * term [Term](#term)

### SectionResponse
* SectionResponse `object`
  * data [Section](#section)

### SectionsResponse
* SectionsResponse `object`
  * data `array`
    * items [SectionResponse](#sectionresponse)

### Student
* Student `object`
  * created `string`
  * credentials [Credentials](#credentials)
  * district `string`
  * dob `string`
  * ell_status `string` (values: Y, N, )
  * email `string`
  * gender `string` (values: M, F, )
  * grade `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, PreKindergarten, Kindergarten, PostGraduate, Other)
  * graduation_year `string`
  * hispanic_ethnicity `string` (values: Y, N, )
  * id `string`
  * last_modified `string`
  * location [Location](#location)
  * name [Name](#name)
  * race `string` (values: Caucasian, Asian, Black or African American, American Indian, Hawaiian or Other Pacific Islander, Two or More Races, Unknown, )
  * school `string`
  * schools `array`
    * items `string`
  * sis_id `string`
  * state_id `string`
  * student_number `string`

### StudentContact
* StudentContact `object`
  * district `string`
  * email `string`
  * id `string`
  * name `string`
  * phone `string`
  * phone_type `string`
  * relationship `string`
  * sis_id `string`
  * student `string`
  * type `string`

### StudentContactResponse
* StudentContactResponse `object`
  * data [StudentContact](#studentcontact)

### StudentContactsForStudentResponse
* StudentContactsForStudentResponse `object`
  * data `array`
    * items [StudentContact](#studentcontact)

### StudentContactsResponse
* StudentContactsResponse `object`
  * data `array`
    * items [StudentContactResponse](#studentcontactresponse)

### StudentResponse
* StudentResponse `object`
  * data [Student](#student)

### StudentsResponse
* StudentsResponse `object`
  * data `array`
    * items [StudentResponse](#studentresponse)

### Teacher
* Teacher `object`
  * created `string`
  * credentials [Credentials](#credentials)
  * district `string`
  * email `string`
  * id `string`
  * last_modified `string`
  * name [Name](#name)
  * school `string`
  * schools `array`
    * items `string`
  * sis_id `string`
  * state_id `string`
  * teacher_number `string`
  * title `string`

### TeacherResponse
* TeacherResponse `object`
  * data [Teacher](#teacher)

### TeachersResponse
* TeachersResponse `object`
  * data `array`
    * items [TeacherResponse](#teacherresponse)

### Term
* Term `object`
  * end_date `string`
  * name `string`
  * start_date `string`


