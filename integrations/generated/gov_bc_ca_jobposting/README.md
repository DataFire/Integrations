# @datafire/gov_bc_ca_jobposting

Client library for WorkBC Job Posting API

## Installation and Usage
```bash
npm install --save @datafire/gov_bc_ca_jobposting
```
```js
let gov_bc_ca_jobposting = require('@datafire/gov_bc_ca_jobposting').create();

.then(data => {
  console.log(data);
});
```

## Description

This API allows you to receive a feed of jobs from WorkBC's Job Board. Please see our <a href="https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice" target="_blank">data collection notice</a>. Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.

## Actions

### Industries.get
The Industries endpoint returns all the Industries and related sub industries 
defined in WorkBC's Job Board. The response includes the id and caption for 
each industry and each sub industry.



```js
gov_bc_ca_jobposting.Industries.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Industry](#industry)

### jobTypes.get
The Job Types endpoint returns details of all of the
job types defined in WorkBC's Job Board. The response includes the
id and caption.



```js
gov_bc_ca_jobposting.jobTypes.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [JobType](#jobtype)

### jobs.post
The job feed endpoint returns an array of job records that satisfy the supplied criteria.


```js
gov_bc_ca_jobposting.jobs.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * city `string` (values: Victoria, Vancouver): The name of a city within B.C. Only job postings located within the specified city will be included in the response. If not specified, the data is not filtered by city.
    * jobTypes `integer` (values: 1, 2): ID values for types of job to filter on. Only job postings matching all specified values will be included in the response. If not specified, the data is not filtered by job type.
    * lastRequestDate `string` (values: 2018-08-29T00:00:00.000Z): The date of the last request. Only job postings changed or deleted after this time will be included in the response. Default is _today_ - 10 days.
    * majorProjects `boolean`: When true, only include job postings that have a Major Project associated with them. When false, only include job postings that do not have a Major Project associated with them. If not specified, the data is not filtered by major project, unless the MajorProjectID parameter is used.
    * region `integer` (values: 1, 2): The unique id of a region within B.C. Only job postings located within the specified region will be included in the response. If not specified, the data is not filtered by region

#### Output
* output [JobFeedResponse](#jobfeedresponse)

### majorProjects.get
The Major Projects endpoint returns details of all of the
major projects defined in WorkBC's Job Board. The response includes the
id and caption.



```js
gov_bc_ca_jobposting.majorProjects.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [MajorProject](#majorproject)

### regions.get
The Regions endpoint returns details of all of the
regions defined in WorkBC's Job Board. The response includes the
id and caption.



```js
gov_bc_ca_jobposting.regions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Region](#region)



## Definitions

### Error
* Error `object`
  * Message `string`

### Industry
* Industry `object`
  * Caption `string`: The name of the Industries.
  * ID `integer`: Industry ID.
  * SubIndustries `array`
    * items [SubIndustry](#subindustry)

### Job
* Job `object`
  * EmployerName `string`: The name of the employer who is offering the job.
  * ExpiryDate `string`: The date that the job will expire. It is the caller's responsibility to remove job postings once they expire. After this date the supplied Url will show a 404 page.
  * JobDescription `string`: Details of the job posting. This is limited to 250 characters, and HTML tags are stripped out. For a full description, use the Url property to view the job posting on the WorkBC website.
  * JobID `integer`: The unique id of the job in the WorkBC Job Board database.
  * JobTitle `string`: The name of the job posting.
  * JobTypes `array`: The types of work associated with this job.
    * items [JobType](#jobtype)
  * Locations `array`: Details of all of the locations where the job is available.
    * items [Location](#location)
  * MajorProject [MajorProject](#majorproject)
  * PostedDate `string`: The date that the job was posted.
  * RecordType [RecordType](#recordtype)
  * SalaryMax `number`
  * SalaryMin `number`
  * SalaryMultiplier `integer`: The amount to multiply SalaryMin and SalaryMax by in order to convert to annual values. This is needed if you want to compare salaries for jobs that have been posted using different salary types.
  * SalaryType `string`
  * Url `string`: The URL for the live job posting on the WorkBC website.

### JobFeedResponse
* JobFeedResponse `object`
  * Jobs `array`
    * items [Job](#job)

### JobType
* JobType `object`
  * Caption `string`: The name of the Job Type.
  * ID [JobTypeID](#jobtypeid)

### JobTypeID
* JobTypeID `integer` (values: Undefined0, Full-Time, Part-Time, Contract, Undefined4, Undefined5, Student, Undefined7, Undefined8, Casual, Seasonal, Temporary, Permanent, Co-op, Apprenticeship): The type of work.

### Location
* Location `object`: Details of where a job is located. A job can have up to three associated locations.
  * City `string`: The name of the city where the job is located.
  * Province `string`: The name of the province where the job is located.
  * RegionID [Region](#region)
  * RegionName `string`: The name of the region in B.C. where the job is located.

### MajorProject
* MajorProject `object`
  * Caption `string`: The name of the Major Project.
  * ID `integer`: The unique ID of the Major Project in the WorkBC Job Board database. Use this when restricting the Job Feed to only one Major Project.

### RecordType
* RecordType `integer` (values: Undefined, Update, Delete): The type of change that has happened to this job.

### Region
* Region `object`
  * Caption `string`: The name of the Region.
  * ID [RegionID](#regionid)

### RegionID
* RegionID `integer` (values: Undefined, Vancouver Island/Coast, Mainland/Southwest, Thompson-Okanagan, Kootenay, Cariboo, North Coast, Nechako, Northeast): A region within B.C.

### SubIndustry
* SubIndustry `object`
  * Caption `string`: The name of the SubIndustries.
  * ID `integer`: Sub Industry ID.


