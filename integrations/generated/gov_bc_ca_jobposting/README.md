# @datafire/gov_bc_ca_jobposting

Client library for WorkBC Job Posting

## Installation and Usage
```bash
npm install --save datafire @datafire/gov_bc_ca_jobposting
```

```js
let datafire = require('datafire');
let gov_bc_ca_jobposting = require('@datafire/gov_bc_ca_jobposting').create();

gov_bc_ca_jobposting.jobs.post({}).then(data => {
  console.log(data);
})
```

## Description
This API allows you to receive a feed of jobs from WorkBC's Job Board. Please see our <a href="https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice" target="_blank">data collection notice</a>.

## Actions
### jobTypes.get
The Job Types endpoint returns details of all of the
job types defined in WorkBC's Job Board. The response includes the
id and caption.



```js
gov_bc_ca_jobposting.jobTypes.get(null, context)
```

#### Parameters
*This action has no parameters*

### jobs.post
The job feed endpoint returns an array of job records that satisfy the supplied criteria.


```js
gov_bc_ca_jobposting.jobs.post({}, context)
```

#### Parameters
* lastRequestDate (string) - The date of the last request. Only job postings changed or deleted after this time will be included in the response. Default is _today_ - 10 days.
* region (integer) - The unique id of a region within B.C. Only job postings located within the specified region will be included in the response. If not specified, the data is not filtered by region.
* city (string) - The name of a city within B.C. Only job postings located within the specified city will be included in the response. If not specified, the data is not filtered by city.
* jobTypes (array) - ID values for types of job to filter on. Only job postings matching all specified values will be included in the response. If not specified, the data is not filtered by job type.
* majorProjects (boolean) - When true, only include job postings that have a Major Project associated with them.  When false, only include job postings that do not have a Major Project associated with them. If not specified, the data is not filtered by major project, unless the MajorProjectID parameter is used.
* majorProjectID (integer) - The unique id of a major project within the WorkBC Job Board database. When specified, only job postings associated with the specified major project will be included in the response. This parameter has no effect if the MajorProjects parameter is supplied with the value false. If not specified, the data is not filtered by major project, unless the MajorProjects parameter is used.

### majorProjects.get
The Major Projects endpoint returns details of all of the
major projects defined in WorkBC's Job Board. The response includes the
id and caption.



```js
gov_bc_ca_jobposting.majorProjects.get(null, context)
```

#### Parameters
*This action has no parameters*

### regions.get
The Regions endpoint returns details of all of the
regions defined in WorkBC's Job Board. The response includes the
id and caption.



```js
gov_bc_ca_jobposting.regions.get(null, context)
```

#### Parameters
*This action has no parameters*

