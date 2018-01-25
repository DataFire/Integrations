# @datafire/schooldigger

Client library for SchoolDigger API V1

## Installation and Usage
```bash
npm install --save @datafire/schooldigger
```
```js
let schooldigger = require('@datafire/schooldigger').create();

schooldigger.Districts_GetAllDistricts({
  "st": "",
  "appID": "",
  "appKey": ""
}).then(data => {
  console.log(data);
});
```

## Description

Get detailed data on over 120,000 schools and 18,500 districts in the U.S.

## Actions

### Districts_GetAllDistricts
Search the SchoolDigger database for districts. You may use any combination of criteria as query parameters.


```js
schooldigger.Districts_GetAllDistricts({
  "st": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Input
* input `object`
  * st **required** `string`: Two character state (e.g. 'CA') - required
  * q `string`: Search term - note: will match district name or city (optional)
  * city `string`: Search for districts in this city (optional)
  * zip `string`: Search for districts in this 5-digit zip code (optional)
  * nearLatitude `number`: Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.)
  * nearLongitude `number`: Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.)
  * boundaryAddress `string`: Full U.S. address: flag returned districts that include this address in its attendance boundary. Example: '123 Main St. AnyTown CA 90001' (optional) (Enterprise API level only)
  * distanceMiles `integer`: Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only)
  * isInBoundaryOnly `boolean`: Return only the districts that include given location (nearLatitdue/nearLongitude) or (nearAddress) in its attendance boundary (Enterprise API level only)
  * boxLatitudeNW `number`: Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)
  * boxLongitudeNW `number`: Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)
  * boxLatitudeSE `number`: Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)
  * boxLongitudeSE `number`: Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)
  * page `integer`: Page number to retrieve (optional, default: 1)
  * perPage `integer`: Number of districts to retrieve on a page (50 max) (optional, default: 10)
  * sortBy `string`: Sort list. Values are: districtname, distance, rank. For descending order, preceed with '-' i.e. -districtname (optional, default: districtname)
  * appID **required** `string`: Your API app id
  * appKey **required** `string`: Your API app key

#### Output
* output [APIDistrictList](#apidistrictlist)

### Districts_GetDistrict
Retrieve a single district record from the SchoolDigger database


```js
schooldigger.Districts_GetDistrict({
  "id": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The 7 digit District ID (e.g. 0642150)
  * appID **required** `string`: Your API app id
  * appKey **required** `string`: Your API app key

#### Output
* output [APIDistrict](#apidistrict)

### v1.rankings.districts.st.get
Returns a SchoolDigger district ranking list


```js
schooldigger.v1.rankings.districts.st.get({
  "st": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Input
* input `object`
  * st **required** `string`: Two character state (e.g. 'CA')
  * year `integer`: The ranking year (leave blank for most recent year)
  * page `integer`: Page number to retrieve (optional, default: 1)
  * perPage `integer`: Number of districts to retrieve on a page (50 max) (optional, default: 10)
  * appID **required** `string`: Your API app id
  * appKey **required** `string`: Your API app key

#### Output
* output [APIDistrictListRank](#apidistrictlistrank)

### v1.rankings.schools.st.get
Returns a SchoolDigger school ranking list


```js
schooldigger.v1.rankings.schools.st.get({
  "st": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Input
* input `object`
  * st **required** `string`: Two character state (e.g. 'CA')
  * year `integer`: The ranking year (leave blank for most recent year)
  * level `string`: Level of ranking: 'Elementary', 'Middle', or 'High'
  * page `integer`: Page number to retrieve (optional, default: 1)
  * perPage `integer`: Number of schools to retrieve on a page (50 max) (optional, default: 10)
  * appID **required** `string`: Your API app id
  * appKey **required** `string`: Your API app key

#### Output
* output [APISchoolListRank](#apischoollistrank)

### Schools_GetAllSchools
Search the SchoolDigger database for schools. You may use any combination of criteria as query parameters.


```js
schooldigger.Schools_GetAllSchools({
  "st": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Input
* input `object`
  * st **required** `string`: Two character state (e.g. 'CA') - required
  * q `string`: Search term - note: will match school name or city (optional)
  * districtID `string`: Search for schools within this district (7 digit district id) (optional)
  * level `string`: Search for schools at this level. Valid values: 'Elementary', 'Middle', 'High', 'Alt', 'Private' (optional)
  * city `string`: Search for schools in this city (optional)
  * zip `string`: Search for schools in this 5-digit zip code (optional)
  * isMagnet `boolean`: True = return only magnet schools, False = return only non-magnet schools (optional) (Pro, Enterprise API levels only)
  * isCharter `boolean`: True = return only charter schools, False = return only non-charter schools (optional) (Pro, Enterprise API levels only)
  * isVirtual `boolean`: True = return only virtual schools, False = return only non-virtual schools (optional) (Pro, Enterprise API levels only)
  * isTitleI `boolean`: True = return only Title I schools, False = return only non-Title I schools (optional) (Pro, Enterprise API levels only)
  * isTitleISchoolwide `boolean`: True = return only Title I schoolwide schools, False = return only non-Title I Schoolwide schools (optional) (Pro, Enterprise API levels only)
  * nearLatitude `number`: Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag schools that include lat/long in its attendance boundary.)
  * nearLongitude `number`: Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag schools that include lat/long in its attendance boundary.)
  * boundaryAddress `string`: Full U.S. address: flag returned schools that include this address in its attendance boundary. Example: '123 Main St. AnyTown CA 90001' (optional) (Enterprise API level only)
  * distanceMiles `integer`: Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only)
  * isInBoundaryOnly `boolean`: Return only the schools that include given location (nearLatitdue/nearLongitude) or (nearAddress) in its attendance boundary (Enterprise API level only)
  * boxLatitudeNW `number`: Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)
  * boxLongitudeNW `number`: Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)
  * boxLatitudeSE `number`: Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)
  * boxLongitudeSE `number`: Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)
  * page `integer`: Page number to retrieve (optional, default: 1)
  * perPage `integer`: Number of schools to retrieve on a page (50 max) (optional, default: 10)
  * sortBy `string`: Sort list. Values are: schoolname, distance, rank. For descending order, preceed with '-' i.e. -schoolname (optional, default: schoolname)
  * appID **required** `string`: Your API app id
  * appKey **required** `string`: Your API app key

#### Output
* output [APISchoolList](#apischoollist)

### Schools_GetSchool
Retrieve a school record from the SchoolDigger database


```js
schooldigger.Schools_GetSchool({
  "id": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The 12 digit School ID (e.g. 064215006903)
  * appID **required** `string`: Your API app id
  * appKey **required** `string`: Your API app key

#### Output
* output [APISchool](#apischool)



## Definitions

### APIBoundary
* APIBoundary `object`
  * hasBoundary `boolean`: States whether there is a boundary available
  * polylineCollection `array`: Collection of one or more polylines that can be used to create the boundary on a map. NOTE: this value is JSON encoded. Specifically, backslashes will be returned escaped (two backslashes). Make sure to decode the polyline before you use it
    * items [APIPolyline](#apipolyline)

### APICounty
* APICounty `object`
  * countyName `string`: County in which the school or district is located
  * countyURL `string`: SchoolDigger URL for all schools in this county

### APIDistrict
* APIDistrict `object`
  * address [APILocation](#apilocation)
  * boundary [APIBoundary](#apiboundary)
  * county [APICounty](#apicounty)
  * districtID `string`: SchoolDigger District ID Number (7 digits)
  * districtName `string`: District name
  * districtYearlyDetails `array`: District yearly metrics
    * items [APILEAYearlyDetail](#apileayearlydetail)
  * highGrade `string`: The high grade served by this district
  * isWithinBoundary `boolean`: Indicates whether this district's boundary includes the specified location from fromLatitude/fromLongitude
  * lowGrade `string`: The low grade served by this district (PK = Prekindergarten, K = Kindergarten)
  * numberAlternativeSchools `integer`
  * numberHighSchools `integer`
  * numberMiddleSchools `integer`
  * numberPrimarySchools `integer`
  * numberTotalSchools `integer`
  * phone `string`: District phone number
  * rankHistory `array`: SchoolDigger yearly rank history of the district
    * items [APILEARankHistory](#apilearankhistory)
  * testScores `array`: Test scores (district and state) -- requires Pro or Enterprise level API subscription
    * items [APITestScoreWrapper](#apitestscorewrapper)
  * url `string`: SchoolDigger URL for this district

### APIDistrict1
* APIDistrict1 `object`
  * address [APILocation](#apilocation)
  * county [APICounty](#apicounty)
  * distance `number`: Distance from nearLatitude/nearLongitude (if supplied)
  * districtID `string`: SchoolDigger District ID Number (7 digits). Use /districts/{districtID} to retrieve the entire district record
  * districtName `string`: District name
  * districtYearlyDetails `array`: District yearly metrics
    * items [APILEAYearlyDetail](#apileayearlydetail)
  * hasBoundary `boolean`: Indicates that an attendance boundary is available for this district. (To retrieve, look up district with /districts/{id})
  * highGrade `string`: The high grade served by this district
  * isWithinBoundary `boolean`: Indicates whether this district's boundary includes the specified location from fromLatitude/fromLongitude
  * locationIsWithinBoundary `boolean`: Indicates whether this school's boundary includes the specified location from fromLatitude/fromLongitude or boundaryAddress (Enterprise API level)
  * lowGrade `string`: The low grade served by this district (PK = Prekindergarten, K = Kindergarten)
  * numberAlternativeSchools `integer`: Count of schools designated as other/alternative schools
  * numberHighSchools `integer`: Count of schools designated as high schools
  * numberMiddleSchools `integer`: Count of schools designated as middle schools
  * numberPrimarySchools `integer`: Count of schools designated as primary schools
  * numberTotalSchools `integer`: Count of schools in the district
  * phone `string`: District phone number
  * rankHistory `array`: SchoolDigger yearly rank history of the district
    * items [APILEARankHistory](#apilearankhistory)
  * testScores `array`: Test scores (district and state) -- requires Pro or Enterprise level API subscription
    * items [APITestScoreWrapper](#apitestscorewrapper)
  * url `string`: SchoolDigger URL for this district

### APIDistrictList
* APIDistrictList `object`
  * districtList `array`
    * items [APIDistrict1](#apidistrict1)
  * numberOfDistricts `integer`: The total count of districts that match your query
  * numberOfPages `integer`: The total count of pages in your query list based on given per_page value

### APIDistrictListRank
* APIDistrictListRank `object`
  * districtList `array`
    * items [APIDistrict1](#apidistrict1)
  * numberOfDistricts `integer`: The total count of districts in the entire rank list
  * numberOfPages `integer`: The total count of pages in your query list based on given per_page value
  * rankCompareYear `integer`
  * rankYear `integer`: Year this ranking list represents (2017 = 2016-17)
  * rankYearCompare `integer`: Year rankings returned for comparison (2017 = 2016-17)
  * rankYearsAvailable `array`: The years for which SchoolDigger district rankings are available for this state
    * items `integer`

### APIDistrictSum
* APIDistrictSum `object`: District Summary
  * districtID `string`: The 7 digit SchoolDigger District id number
  * districtName `string`
  * rankURL `string`: The URL to see the district in the SchoolDigger ranking list
  * url `string`: The URL to see the district details on SchoolDigger

### APILEARankHistory
* APILEARankHistory `object`
  * rank `integer`: Statewide rank of this district
  * rankOf `integer`: Count of district ranked in this state
  * rankScore `number`: The rank score calculated by SchoolDigger (see https://www.schooldigger.com/aboutranking.aspx)
  * rankStars `integer`: The number of stars SchoolDigger awarded in the ranking of the district (0-5, 5 is best)
  * rankStatewidePercentage `number`: Percentile of this district's rank (e.g. this district performed better than (x)% of this state's districts)
  * year `integer`: School year (2017 - 2016-17)

### APILEAYearlyDetail
* APILEAYearlyDetail `object`
  * numberOfAids `number`: Number of full-time equivalent instructional aids employed by the district
  * numberOfCoordsSupervisors `number`: Number of full-time equivalent instructional coordinators/supervisors employed by the district
  * numberOfEnglishLanguageLearnerStudents `integer`: The number of English language learner (ELL) students served in appropriate programs
  * numberOfGuidanceElem `number`: Number of full-time equivalent elementary guidance counselors employed by the district
  * numberOfGuidanceSecondary `number`: Number of full-time equivalent secondary guidance counselors employed by the district
  * numberOfGuidanceTotal `number`: Total number of full-time equivalent guidance counselors employed by the district
  * numberOfLEAAdministrators `number`: Number of full-time equivalent LEA administrators employed by the district (LEA)
  * numberOfLEASupportStaff `number`: Number of full-time equivalent LEA administrative support staff employed by the district (LEA)
  * numberOfLibrarians `number`: Number of full-time equivalent librarians/media specialists employed by the district
  * numberOfLibraryStaff `number`: Number of full-time equivalent librarians/media support staff employed by the district
  * numberOfOtherSupportStaff `number`: Number of full-time equivalent all other support staff employed by the district (LEA)
  * numberOfSchoolAdminSupportStaff `number`: Number of full-time equivalent school administrative support staff employed by the district (LEA)
  * numberOfSchoolAdministrators `number`: Number of full-time equivalent school administrators employed by the district (LEA)
  * numberOfSpecialEdStudents `integer`: The number of students having a written Individualized Education Program (IEP) under the Individuals With Disabilities Education Act (IDEA)
  * numberOfStudentSupportStaff `number`: Number of full-time equivalent student support services staff employed by the district (LEA)
  * numberOfStudents `integer`: Number of students enrolled in the district
  * numberOfTeachers `number`: Number of full-time equivalent teachers employed by the district
  * numberOfTeachersElementary `number`: Number of full-time equivalent elementary teachers employed by the district
  * numberOfTeachersK `number`: Number of full-time equivalent kindergarten teachers employed by the district
  * numberOfTeachersPK `number`: Number of full-time equivalent pre-kindergarten teachers employed by the district
  * numberOfTeachersSecondary `number`: Number of full-time equivalent secondary teachers employed by the district
  * year `integer`: School year (2017 = 2016-17)

### APILatLong
* APILatLong `object`
  * latitude `number`
  * longitude `number`

### APILocation
* APILocation `object`
  * city `string`
  * cityURL `string`: SchoolDigger URL for schools in this city
  * html `string`: HTML formatted address
  * latLong [APILatLong](#apilatlong)
  * state `string`
  * stateFull `string`: Full state name (WA = Washington)
  * street `string`
  * zip `string`
  * zip4 `string`
  * zipURL `string`: SchoolDigger URL for schools in this zip code

### APIPolyline
* APIPolyline `object`
  * numberEncodedPoints `integer`: Number of encoded points in polyline
  * polylineOverlayEncodedPoints `string`: Polyline for use with Google Maps or other mapping software. NOTE: this value is JSON encoded. Specifically, backslashes will be returned escaped (two backslashes). Make sure to decode the polyline before you use it

### APIRankHistory
* APIRankHistory `object`
  * averageStandardScore `number`: The Average Standard score calculated by SchoolDigger (see: https://www.schooldigger.com/aboutrankingmethodology.aspx)
  * rank `integer`: Statewide rank of this School
  * rankLevel `string`: The level for which this school is ranked (Elementary, Middle, High)
  * rankOf `integer`: Count of schools ranked at this state/level
  * rankStars `integer`: The number of stars SchoolDigger awarded in the ranking of the school (0-5, 5 is best)
  * rankStatewidePercentage `number`: Percentile of this school's rank (e.g. this school performed better than (x)% of this state's elementary schools)
  * year `integer`: School year (2017 - 2016-17)

### APISchool
* APISchool `object`
  * address [APILocation](#apilocation)
  * boundary [APIBoundary](#apiboundary)
  * county [APICounty](#apicounty)
  * district [APIDistrictSum](#apidistrictsum)
  * highGrade `string`: The high grade served by this school
  * isCharterSchool `string`: Indicates if school is a charter school (Yes/No/n-a)
  * isMagnetSchool `string`: Indicates if school is a magnet school (Yes/No/n-a)
  * isPrivate `boolean`: Indicates if school is a private school (Yes/No)
  * isTitleISchool `string`: Indicates if school is a Title I school (Yes/No/n-a)
  * isTitleISchoolwideSchool `string`: Indicates if a school-wide Title I school (Yes/No/n-a)
  * isVirtualSchool `string`: Indicates if school is a virtual school (Yes/No/n-a)
  * locale `string`: NCES Locale of school (https://nces.ed.gov/ccd/rural_locales.asp)
  * lowGrade `string`: The low grade served by this school (PK = Prekindergarten, K = Kindergarten)
  * phone `string`: School phone number
  * privateCoed `string`: Coed/Boys/Girls (private schools only)
  * privateDays `integer`: Days in the school year (private schools only)
  * privateHasLibrary `boolean`: Indicates if the school has a library (private schools only)
  * privateHours `number`: Hours in the school day (private schools only)
  * privateOrientation `string`: Affiliation of the school (private schools only)
  * rankHistory `array`: SchoolDigger yearly rank history of the school
    * items [APIRankHistory](#apirankhistory)
  * rankMovement `integer`: Returns the movement of rank for this school between current and previous year
  * schoolLevel `string`: The level of school (Elementary, Middle, High, Private, Alternative)
  * schoolName `string`: School name
  * schoolYearlyDetails `array`: School Yearly metrics
    * items [APIYearlyDemographics](#apiyearlydemographics)
  * schoolid `string`: SchoolDigger School ID Number (12 digits)
  * testScores `array`: Test scores (including district and state) -- requires Pro or Enterprise level API subscription
    * items [APITestScoreWrapper](#apitestscorewrapper)
  * url `string`: SchoolDigger URL for this school
  * urlCompare `string`: SchoolDigger URL for comparing this school to nearby schools

### APISchool1
* APISchool1 `object`: APISchool1: A summary of a school record. For the full school record, call /schools/{id}
  * address [APILocation](#apilocation)
  * county [APICounty](#apicounty)
  * distance `number`: Distance from nearLatitude/nearLongitude (if supplied)
  * district [APIDistrictSum](#apidistrictsum)
  * hasBoundary `boolean`: Indicates that an attendance boundary is available for this school. (To retrieve, look up school with /schools/{id})
  * highGrade `string`: The high grade served by this school
  * isCharterSchool `string`: Indicates if school is a charter school (Yes/No/n-a)
  * isMagnetSchool `string`: Indicates if school is a magnet school (Yes/No/n-a)
  * isPrivate `boolean`: Indicates if school is a private school (Yes/No)
  * isTitleISchool `string`: Indicates if school is a Title I school (Yes/No/n-a)
  * isTitleISchoolwideSchool `string`: Indicates if a school-wide Title I school (Yes/No/n-a)
  * isVirtualSchool `string`: Indicates if school is a virtual school (Yes/No/n-a)
  * locationIsWithinBoundary `boolean`: Indicates whether this school's boundary includes the specified location from fromLatitude/fromLongitude or boundaryAddress. (Enterprise API level only)
  * lowGrade `string`: The low grade served by this school (PK = Prekindergarten, K = Kindergarten)
  * phone `string`: School phone number
  * privateCoed `string`: Coed/Boys/Girls (private schools only)
  * privateDays `integer`: Days in the school year (private schools only)
  * privateHasLibrary `boolean`: Indicates if the school has a library (private schools only)
  * privateHours `number`: Hours in the school day (private schools only)
  * privateOrientation `string`: Affiliation of the school (private schools only)
  * rankHistory `array`: SchoolDigger yearly rank history of the school. To retrieve all years, call /schools/{id}.
    * items [APIRankHistory](#apirankhistory)
  * rankMovement `integer`: Returns the movement of rank for this school between current and previous year
  * schoolLevel `string`: The level of school (Elementary, Middle, High, Private, Alternative)
  * schoolName `string`: School name
  * schoolYearlyDetails `array`: School Yearly metrics. To retrieve all years, call /schools/{id}.
    * items [APIYearlyDemographics](#apiyearlydemographics)
  * schoolid `string`: SchoolDigger School ID Number (12 digits). Use /schools/{schoolID} to retrieve the full school record
  * url `string`: SchoolDigger URL for this school
  * urlCompare `string`: SchoolDigger URL for comparing this school to others

### APISchoolList
* APISchoolList `object`
  * numberOfPages `integer`: The total count of pages in your query list based on given per_page value
  * numberOfSchools `integer`: The total count of schools that match your query
  * schoolList `array`
    * items [APISchool1](#apischool1)

### APISchoolListRank
* APISchoolListRank `object`
  * numberOfPages `integer`: The total count of pages this ranking list based on given per_page value
  * numberOfSchools `integer`: The total count of schools in this ranking list
  * rankYear `integer`: Year this ranking list represents (2017 = 2016-17)
  * rankYearCompare `integer`: Year rankings returned for comparison (2017 = 2016-17)
  * rankYearsAvailable `array`: The years for which SchoolDigger rankings are available for this state and level
    * items `integer`
  * schoolList `array`: The schools in the ranking list
    * items [APISchool1](#apischool1)

### APITestScore
* APITestScore `object`
  * meanScaledScore `number`: Mean scale score
  * numTier1 `integer`: Count of students performing at tier 1 (Enterprise API level only)
  * numTier2 `integer`: Count of students performing at tier 2 (Enterprise API level only)
  * numTier3 `integer`: Count of students performing at tier 3 (Enterprise API level only)
  * numTier4 `integer`: Count of students performing at tier 4 (Enterprise API level only)
  * numTier5 `integer`: Count of students performing at tier 5 (Enterprise API level only)
  * numberMetStandard `number`: Count of students meeting state standard
  * percentMetStandard `number`: Percent of students meeting state standard
  * percentTier1 `number`: Percent of students performing at tier 1 (Enterprise API level only)
  * percentTier2 `number`: Percent of students performing at tier 2 (Enterprise API level only)
  * percentTier3 `number`: Percent of students performing at tier 3 (Enterprise API level only)
  * percentTier4 `number`: Percent of students performing at tier 4 (Enterprise API level only)
  * percentTier5 `number`: Percent of students performing at tier 5 (Enterprise API level only)
  * studentsEligible `integer`: Count of students eligible to take test
  * studentsTested `integer`: Count of students tested

### APITestScoreWrapper
* APITestScoreWrapper `object`
  * districtTestScore [APITestScore](#apitestscore)
  * grade `string`
  * schoolTestScore [APITestScore](#apitestscore)
  * stateTestScore [APITestScore](#apitestscore)
  * subject `string`: Test subject
  * test `string`: The name of the state-administed test
  * tier1 `string`: Tier 1 test score description (Enterprise API level only)
  * tier2 `string`: Tier 2 test score description (Enterprise API level only)
  * tier3 `string`: Tier 3 test score description (Enterprise API level only)
  * tier4 `string`: Tier 4 test score description (Enterprise API level only)
  * tier5 `string`: Tier 5 test score description (Enterprise API level only)
  * year `integer`: Year test was administered (2017 = 2016-17)

### APIYearlyDemographics
* APIYearlyDemographics `object`
  * numberOfStudents `integer`: Count of students attending the school
  * numberofAfricanAmericanStudents `integer`: NCES definition: A person having origins in any of the black racial groups of Africa.  (https://nces.ed.gov/statprog/2002/std1_5.asp)
  * numberofAsianStudents `integer`: NCES definition: A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam.  (https://nces.ed.gov/statprog/2002/std1_5.asp)
  * numberofHispanicStudents `integer`: NCES definition: A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race. (https://nces.ed.gov/statprog/2002/std1_5.asp)
  * numberofIndianStudents `integer`: NCES definition: A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam. (https://nces.ed.gov/statprog/2002/std1_5.asp)
  * numberofPacificIslanderStudents `integer`: NCES definition: A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands. (https://nces.ed.gov/statprog/2002/std1_5.asp)
  * numberofTwoOrMoreRaceStudents `integer`: NCES definition: Includes any combination of two or more races and not Hispanic/Latino ethnicity. (https://nces.ed.gov/statprog/2002/std1_5.asp)
  * numberofUnspecifiedRaceStudents `integer`
  * numberofWhiteStudents `integer`: NCES definition: A person having origins in any of the original peoples of Europe, the Middle East, or North Africa. (https://nces.ed.gov/statprog/2002/std1_5.asp)
  * percentFreeDiscLunch `number`: Percent of students receiving a free or discounted lunch in the National School Lunch Program
  * percentofAfricanAmericanStudents `number`
  * percentofAsianStudents `number`
  * percentofHispanicStudents `number`
  * percentofIndianStudents `number`
  * percentofPacificIslanderStudents `number`
  * percentofTwoOrMoreRaceStudents `number`
  * percentofUnspecifiedRaceStudents `number`
  * percentofWhiteStudents `number`
  * pupilTeacherRatio `number`: Number of students / number of full-time equivalent teachers
  * teachersFulltime `number`: Number of full-time equvalent teachers employed at the school
  * year `integer`: School year (2017 = 2016-17)


