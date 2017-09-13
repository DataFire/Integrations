# @datafire/dataatwork

Client library for Open Skills

## Installation and Usage
```bash
npm install --save datafire @datafire/dataatwork
```

```js
let datafire = require('datafire');
let dataatwork = require('@datafire/dataatwork').create();

dataatwork.skills.autocomplete.get({}).then(data => {
  console.log(data);
})
```

## Description
A complete and standard data store for canonical and emerging skills, knowledge, abilities, tools, technolgies, and how they relate to jobs.

## Actions
### jobs.get
Retrieves the names, descriptions, and UUIDs of all job titles.


```js
dataatwork.jobs.get({}, context)
```

#### Parameters
* offset (integer) - Pagination offset. Default is 0.
* limit (integer) - Maximum number of items per page. Default is 20 and cannot exceed 500.

### jobs.autocomplete.get
Retrieves the names, descriptions, and UUIDs of all job titles matching a given search criteria.


```js
dataatwork.jobs.autocomplete.get({}, context)
```

#### Parameters
* begins_with (string) - Find job titles beginning with the given text fragment
* contains (string) - Find job titles containing the given text fragment
* ends_with (string) - Find job titles ending with the given text fragment

### jobs.normalize.get
Retrieves the canonical job title for a synonymous job title


```js
dataatwork.jobs.normalize.get({
  "job_title": ""
}, context)
```

#### Parameters
* job_title (string) **required** - Find the canonical job title(s) for jobs matching the given text fragment
* limit (integer) - Maximumn number of job title synonyms to return. Default is 1 and cannot exceed 10.

### jobs.unusual_titles.get
Retrieves a list of unusual job titles and the UUIDs of their canonical jobs.


```js
dataatwork.jobs.unusual_titles.get(null, context)
```

#### Parameters
*This action has no parameters*

### jobs.id.get
Retrieves the name, description, and UUID of a job by specifying its O*NET SOC Code or UUID.


```js
dataatwork.jobs.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The O*NET SOC Code or UUID of the job title to retrieve
* fips (string) - The FIPS Code of a Core-Based Statistical Area. Only return the job if present in this area

### jobs.id.related_jobs.get
Retrieves a collection of jobs associated with a specified job.


```js
dataatwork.jobs.id.related_jobs.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The UUID of the job to retrieve related jobs for

### jobs.id.related_skills.get
Retrieves a collection of skills associated with a specified job.


```js
dataatwork.jobs.id.related_skills.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The UUID of the job to retrieve skills for

### skills.get
Retrieve the names, descriptions, and UUIDs of all skills.


```js
dataatwork.skills.get({}, context)
```

#### Parameters
* offset (integer) - Pagination offset. Default is 0.
* limit (integer) - Maximum number of items per page. Default is 20 and cannot exceed 500.

### skills.autocomplete.get
Retrieves the names, descriptions, and UUIDs of all skills matching a given search criteria.


```js
dataatwork.skills.autocomplete.get({}, context)
```

#### Parameters
* begins_with (string) - Find skill names beginning with the given text fragment
* contains (string) - Find skill names containing the given text fragment
* ends_with (string) - Find skill names ending with the given text fragment

### skills.normalize.get
Retrieves the canonical skill name for a synonymous skill name


```js
dataatwork.skills.normalize.get({
  "skill_name": ""
}, context)
```

#### Parameters
* skill_name (string) **required** - Find the canonical skill name(s) for skills matching the given text fragment

### skills.id.get
Retrieves the name, description, and UUID of a job by specifying its UUID.


```js
dataatwork.skills.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The UUID of the skill name to retrieve

### skills.id.related_jobs.get
Retrieves a collection of jobs associated with a specified skill.


```js
dataatwork.skills.id.related_jobs.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The UUID of the skill to retrieve jobs for

### skills.id.related_skills.get
Retrieves a collection of skills associated with a specified skill.


```js
dataatwork.skills.id.related_skills.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The UUID of the skill to retrieve related skills for

