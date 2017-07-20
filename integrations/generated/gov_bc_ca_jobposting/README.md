# @datafire/gov_bc_ca_jobposting

Client library for WorkBC Job Posting

## Installation and Usage
```bash
npm install --save datafire @datafire/gov_bc_ca_jobposting
```

```js
let datafire = require('datafire');
let gov_bc_ca_jobposting = require('@datafire/gov_bc_ca_jobposting').actions;
let context = new datafire.Context();

gov_bc_ca_jobposting.jobs.post({}, context).then(data => {
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


### jobs.post
The job feed endpoint returns an array of job records that satisfy the supplied criteria.


```js
gov_bc_ca_jobposting.jobs.post({}, context)
```


### majorProjects.get
The Major Projects endpoint returns details of all of the
major projects defined in WorkBC's Job Board. The response includes the
id and caption.



```js
gov_bc_ca_jobposting.majorProjects.get(null, context)
```


### regions.get
The Regions endpoint returns details of all of the
regions defined in WorkBC's Job Board. The response includes the
id and caption.



```js
gov_bc_ca_jobposting.regions.get(null, context)
```


