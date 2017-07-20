# @datafire/schooldigger

Client library for SchoolDigger API V1

## Installation and Usage
```bash
npm install --save datafire @datafire/schooldigger
```

```js
let datafire = require('datafire');
let schooldigger = require('@datafire/schooldigger').actions;
let context = new datafire.Context();

schooldigger.Districts_GetAllDistricts({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* st (string) **required** - Two character state (e.g. 'CA') - required
* q (string) - Search term - note: will match district name or city (optional)
* city (string) - Search for districts in this city (optional)
* zip (string) - Search for districts in this 5-digit zip code (optional)
* nearLatitude (number) - Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.)
* nearLongitude (number) - Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.)
* boundaryAddress (string) - Full U.S. address: flag returned districts that include this address in its attendance boundary. Example: '123 Main St. AnyTown CA 90001' (optional) (Enterprise API level only)
* distanceMiles (integer) - Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only)
* isInBoundaryOnly (boolean) - Return only the districts that include given location (nearLatitdue/nearLongitude) or (nearAddress) in its attendance boundary (Enterprise API level only)
* boxLatitudeNW (number) - Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)
* boxLongitudeNW (number) - Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)
* boxLatitudeSE (number) - Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)
* boxLongitudeSE (number) - Search for districts within a 'box' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional)
* page (integer) - Page number to retrieve (optional, default: 1)
* perPage (integer) - Number of districts to retrieve on a page (50 max) (optional, default: 10)
* sortBy (string) - Sort list. Values are: districtname, distance, rank. For descending order, preceed with '-' i.e. -districtname (optional, default: districtname)
* appID (string) **required** - Your API app id
* appKey (string) **required** - Your API app key

### Districts_GetDistrict
Retrieve a single district record from the SchoolDigger database


```js
schooldigger.Districts_GetDistrict({
  "id": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Parameters
* id (string) **required** - The 7 digit District ID (e.g. 0642150)
* appID (string) **required** - Your API app id
* appKey (string) **required** - Your API app key

### v1.rankings.districts.st.get
Returns a SchoolDigger district ranking list


```js
schooldigger.v1.rankings.districts.st.get({
  "st": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Parameters
* st (string) **required** - Two character state (e.g. 'CA')
* year (integer) - The ranking year (leave blank for most recent year)
* page (integer) - Page number to retrieve (optional, default: 1)
* perPage (integer) - Number of districts to retrieve on a page (50 max) (optional, default: 10)
* appID (string) **required** - Your API app id
* appKey (string) **required** - Your API app key

### v1.rankings.schools.st.get
Returns a SchoolDigger school ranking list


```js
schooldigger.v1.rankings.schools.st.get({
  "st": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Parameters
* st (string) **required** - Two character state (e.g. 'CA')
* year (integer) - The ranking year (leave blank for most recent year)
* level (string) - Level of ranking: 'Elementary', 'Middle', or 'High'
* page (integer) - Page number to retrieve (optional, default: 1)
* perPage (integer) - Number of schools to retrieve on a page (50 max) (optional, default: 10)
* appID (string) **required** - Your API app id
* appKey (string) **required** - Your API app key

### Schools_GetAllSchools
Search the SchoolDigger database for schools. You may use any combination of criteria as query parameters.


```js
schooldigger.Schools_GetAllSchools({
  "st": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Parameters
* st (string) **required** - Two character state (e.g. 'CA') - required
* q (string) - Search term - note: will match school name or city (optional)
* districtID (string) - Search for schools within this district (7 digit district id) (optional)
* level (string) - Search for schools at this level. Valid values: 'Elementary', 'Middle', 'High', 'Alt', 'Private' (optional)
* city (string) - Search for schools in this city (optional)
* zip (string) - Search for schools in this 5-digit zip code (optional)
* isMagnet (boolean) - True = return only magnet schools, False = return only non-magnet schools (optional) (Pro, Enterprise API levels only)
* isCharter (boolean) - True = return only charter schools, False = return only non-charter schools (optional) (Pro, Enterprise API levels only)
* isVirtual (boolean) - True = return only virtual schools, False = return only non-virtual schools (optional) (Pro, Enterprise API levels only)
* isTitleI (boolean) - True = return only Title I schools, False = return only non-Title I schools (optional) (Pro, Enterprise API levels only)
* isTitleISchoolwide (boolean) - True = return only Title I schoolwide schools, False = return only non-Title I Schoolwide schools (optional) (Pro, Enterprise API levels only)
* nearLatitude (number) - Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag schools that include lat/long in its attendance boundary.)
* nearLongitude (number) - Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag schools that include lat/long in its attendance boundary.)
* boundaryAddress (string) - Full U.S. address: flag returned schools that include this address in its attendance boundary. Example: '123 Main St. AnyTown CA 90001' (optional) (Enterprise API level only)
* distanceMiles (integer) - Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only)
* isInBoundaryOnly (boolean) - Return only the schools that include given location (nearLatitdue/nearLongitude) or (nearAddress) in its attendance boundary (Enterprise API level only)
* boxLatitudeNW (number) - Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)
* boxLongitudeNW (number) - Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)
* boxLatitudeSE (number) - Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)
* boxLongitudeSE (number) - Search for schools within a 'box' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional)
* page (integer) - Page number to retrieve (optional, default: 1)
* perPage (integer) - Number of schools to retrieve on a page (50 max) (optional, default: 10)
* sortBy (string) - Sort list. Values are: schoolname, distance, rank. For descending order, preceed with '-' i.e. -schoolname (optional, default: schoolname)
* appID (string) **required** - Your API app id
* appKey (string) **required** - Your API app key

### Schools_GetSchool
Retrieve a school record from the SchoolDigger database


```js
schooldigger.Schools_GetSchool({
  "id": "",
  "appID": "",
  "appKey": ""
}, context)
```

#### Parameters
* id (string) **required** - The 12 digit School ID (e.g. 064215006903)
* appID (string) **required** - Your API app id
* appKey (string) **required** - Your API app key

