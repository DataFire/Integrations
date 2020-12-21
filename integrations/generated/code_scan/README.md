# @datafire/code_scan

Client library for CodeScan API

## Installation and Usage
```bash
npm install --save @datafire/code_scan
```
```js
let code_scan = require('@datafire/code_scan').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Manage your Hosted CodeScan Service

## Actions

### job.get
Fetches the status of a job


```js
code_scan.job.get({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: Id of the Job to retrieve

#### Output
* output [Job](#job)

### job.post
Creates a new job


```js
code_scan.job.post({
  "job": {
    "projectKey": ""
  }
}, context)
```

#### Input
* input `object`
  * job **required** [NewJob](#newjob)

#### Output
* output [Job](#job)



## Definitions

### Error
* Error `object`
  * error `number`: generally set to 1
  * message `string`: Message of the error

### Job
* Job `object`
  * alert `string`: Quality Gate status of a completed job
  * alertDescription `string`: Quality Gate errors of a completed job
  * analysisMode `string`: When set to preview, analysis is not added to the database
  * commit `string`: The git commit that this job is evaluating
  * created `string`: DateTime that this job was queued
  * emailReportTo `string`: List of usernames to email the report to
  * finished `string`: If the job has finished, then the datetime that the job finished processing
  * jobId `string`: The jobId of this job
  * projectBranch `string`: The project branch that this job is evaluating
  * projectKey `string`: The projectKey that this job is running
  * started `string`: If the job has started, then the datetime that the job started processing
  * status `string`: The status of the job
  * url `string`: The url to view the output report
  * version `string`: The project version that this job is evaluating
  * warnings `string`: When creating a new job, any warnings will be listed here.

### NewJob
* NewJob `object`
  * analysisMode `string`: When set to preview, analysis is not added to the database
  * commitOverride `string`: When the project is based on git, the git commit that this job should run. Leave blank to use the project's default
  * emailReportTo `string`: List of usernames to email the report to
  * projectBranch `string`: he project branch that this job is evaluating
  * projectKey **required** `string`: The key of the project to start
  * version `string`: Use this as the analysis' version. On success the Project's default version will be set to this


