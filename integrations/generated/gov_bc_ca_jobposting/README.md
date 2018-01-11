# @datafire/gov_bc_ca_jobposting

Client library for WorkBC Job Posting

## Installation and Usage
```bash
npm install --save @datafire/gov_bc_ca_jobposting
```
```js
let gov_bc_ca_jobposting = require('@datafire/gov_bc_ca_jobposting').create();

gov_bc_ca_jobposting.jobs.post({}).then(data => {
  console.log(data);
})
```

## Description

This API allows you to receive a feed of jobs from WorkBC's Job Board. Please see our <a href="https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice" target="_blank">data collection notice</a>.

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
  * lastRequestDate `string`: The date of the last request. Only job postings changed or deleted after this time will be included in the response. Default is _today_ - 10 days.
  * region `integer`: The unique id of a region within B.C. Only job postings located within the specified region will be included in the response. If not specified, the data is not filtered by region.
  * city `string`: The name of a city within B.C. Only job postings located within the specified city will be included in the response. If not specified, the data is not filtered by city.
  * jobTypes `array`: ID values for types of job to filter on. Only job postings matching all specified values will be included in the response. If not specified, the data is not filtered by job type.
  * majorProjects `boolean`: When true, only include job postings that have a Major Project associated with them.  When false, only include job postings that do not have a Major Project associated with them. If not specified, the data is not filtered by major project, unless the MajorProjectID parameter is used.
  * majorProjectID `integer`: The unique id of a major project within the WorkBC Job Board database. When specified, only job postings associated with the specified major project will be included in the response. This parameter has no effect if the MajorProjects parameter is supplied with the value false. If not specified, the data is not filtered by major project, unless the MajorProjects parameter is used.
  * industries `array`: ID values for industries to filter on. Only job postings matching all specified values will be included in the response. If not specified, the data is not filtered by industry.
  * subIndustries `array`: ID values for sub industries to filter on. Only job postings matching all specified values will be included in the response. If not specified, the data is not filtered by sub industry.

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

**This integration has no definitions**
