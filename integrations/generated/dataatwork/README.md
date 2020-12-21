# @datafire/dataatwork

Client library for Open Skills API

## Installation and Usage
```bash
npm install --save @datafire/dataatwork
```
```js
let dataatwork = require('@datafire/dataatwork').create();

.then(data => {
  console.log(data);
});
```

## Description

A complete and standard data store for canonical and emerging skills, knowledge, abilities, tools, technolgies, and how they relate to jobs.

## Actions

### jobs.get
Retrieves the names, descriptions, and UUIDs of all job titles.


```js
dataatwork.jobs.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Pagination offset. Default is 0.
  * limit `integer`: Maximum number of items per page. Default is 20 and cannot exceed 500.

#### Output
* output [Jobs](#jobs)

### jobs.autocomplete.get
Retrieves the names, descriptions, and UUIDs of all job titles matching a given search criteria.


```js
dataatwork.jobs.autocomplete.get({}, context)
```

#### Input
* input `object`
  * begins_with `string`: Find job titles beginning with the given text fragment
  * contains `string`: Find job titles containing the given text fragment
  * ends_with `string`: Find job titles ending with the given text fragment

#### Output
* output [Jobs](#jobs)

### jobs.normalize.get
Retrieves the canonical job title for a synonymous job title


```js
dataatwork.jobs.normalize.get({
  "job_title": ""
}, context)
```

#### Input
* input `object`
  * job_title **required** `string`: Find the canonical job title(s) for jobs matching the given text fragment
  * limit `integer`: Maximumn number of job title synonyms to return. Default is 1 and cannot exceed 10.

#### Output
* output [NormalizedJobs](#normalizedjobs)

### jobs.unusual_titles.get
Retrieves a list of unusual job titles and the UUIDs of their canonical jobs.


```js
dataatwork.jobs.unusual_titles.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [NormalizedJobs](#normalizedjobs)

### jobs.id.get
Retrieves the name, description, and UUID of a job by specifying its O*NET SOC Code or UUID.


```js
dataatwork.jobs.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The O*NET SOC Code or UUID of the job title to retrieve
  * fips `string`: The FIPS Code of a Core-Based Statistical Area. Only return the job if present in this area

#### Output
* output [Job](#job)

### jobs.id.related_jobs.get
Retrieves a collection of jobs associated with a specified job.


```js
dataatwork.jobs.id.related_jobs.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the job to retrieve related jobs for

#### Output
* output [JobRelatedJobs](#jobrelatedjobs)

### jobs.id.related_skills.get
Retrieves a collection of skills associated with a specified job.


```js
dataatwork.jobs.id.related_skills.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the job to retrieve skills for

#### Output
* output [JobSkills](#jobskills)

### skills.get
Retrieve the names, descriptions, and UUIDs of all skills.


```js
dataatwork.skills.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Pagination offset. Default is 0.
  * limit `integer`: Maximum number of items per page. Default is 20 and cannot exceed 500.

#### Output
* output [Skills](#skills)

### skills.autocomplete.get
Retrieves the names, descriptions, and UUIDs of all skills matching a given search criteria.


```js
dataatwork.skills.autocomplete.get({}, context)
```

#### Input
* input `object`
  * begins_with `string`: Find skill names beginning with the given text fragment
  * contains `string`: Find skill names containing the given text fragment
  * ends_with `string`: Find skill names ending with the given text fragment

#### Output
* output [SkillJobs](#skilljobs)

### skills.normalize.get
Retrieves the canonical skill name for a synonymous skill name


```js
dataatwork.skills.normalize.get({
  "skill_name": ""
}, context)
```

#### Input
* input `object`
  * skill_name **required** `string`: Find the canonical skill name(s) for skills matching the given text fragment

#### Output
* output [NormalizedSkills](#normalizedskills)

### skills.id.get
Retrieves the name, description, and UUID of a job by specifying its UUID.


```js
dataatwork.skills.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the skill name to retrieve

#### Output
* output [Skill](#skill)

### skills.id.related_jobs.get
Retrieves a collection of jobs associated with a specified skill.


```js
dataatwork.skills.id.related_jobs.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the skill to retrieve jobs for

#### Output
* output [SkillJobs](#skilljobs)

### skills.id.related_skills.get
Retrieves a collection of skills associated with a specified skill.


```js
dataatwork.skills.id.related_skills.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The UUID of the skill to retrieve related skills for

#### Output
* output [SkillRelatedSkills](#skillrelatedskills)



## Definitions

### Error
* Error `object`
  * code `integer`
  * message `string`

### Job
* Job `object`
  * normalized_job_title `string`: Normalized job title
  * parent_uuid `string`: UUID for the job's parent job category
  * title `string`: Job title
  * uuid `string`: Universally Unique Identifier for the job

### JobRelatedJob
* JobRelatedJob `object`
  * parent_uuid `string`: Universally Unique Identifier for the job's canonical job title
  * title `string`: Job title
  * uuid `string`: Universally Unique Identifier for the job

### JobRelatedJobs
* JobRelatedJobs `object`
  * related_job_titles `array`
    * items [JobRelatedJob](#jobrelatedjob)
  * uuid `string`: Universally Unique Identifier for the job

### JobSkill
* JobSkill `object`
  * importance `number`: O*NET importance score indicating how important skill is to job.
  * job_title `string`: Job title
  * job_uuid `string`: Universally Unique Identifier for the job
  * level `number`: O*NET level score indicating the skill level required for the job.
  * normalized_job_title `string`: Normalized job title

### JobSkills
* JobSkills `object`
  * job_title `string`: Title of the job associated with the UUID
  * job_uuid `string`: Universally Unique Identifier for the job
  * normalized_job_title `string`: Normalized title of the job associated with the UUID
  * skills `array`
    * items [SkillJob](#skilljob)

### Jobs
* Jobs `array`
  * links `array`
    * items [PageLink](#pagelink)
  * items [Job](#job)

### NormalizedJob
* NormalizedJob `object`
  * parent_uuid `string`: Universal Unique Identifier for the canonical job title
  * relevance_score `string`: Relevance score for job title.
  * title `string`: Job title for the synonymous job title
  * uuid `string`: Universally Unique Identifier for the synonymous job title

### NormalizedJobs
* NormalizedJobs `array`
  * items [NormalizedJob](#normalizedjob)

### NormalizedSkill
* NormalizedSkill `object`
  * skill_name `string`: Canonical skill name
  * uuid `string`: Universally Unique Identifier for the canonical skill name

### NormalizedSkills
* NormalizedSkills `array`
  * items [NormalizedSkill](#normalizedskill)

### PageLink
* PageLink `object`
  * href `string`: Link URI
  * rel `string`: Link descriptor (e.g. self, first, prev, next, last)

### Skill
* Skill `object`
  * name `string`: Skill name
  * normalized_skill_name `string`: Normalized skill name
  * onet_element_id `string`: O*NET Element Identifier
  * uuid `string`: Universally Unique Identifier for the skill

### SkillJob
* SkillJob `object`
  * description `string`: Description of the skill
  * importance `number`: O*NET importance score
  * level `number`: O*NET level score
  * normalized_skill_name `string`: Normalized skill name
  * skill_name `string`: Name of the skill
  * skill_uuid `string`: Universally Unique Identifier for the skill

### SkillJobs
* SkillJobs `object`
  * jobs `array`
    * items [JobSkill](#jobskill)
  * normalized_job_title `string`: Normalized title of the job associated with the UUID
  * skill_name `string`: Title of the job associated with the UUID
  * skill_uuid `string`: Universally Unique Identifier for the job

### SkillRelatedSkill
* SkillRelatedSkill `object`
  * skill_name `string`: Skill name
  * uuid `string`: Universally Unique Identifier for the skill

### SkillRelatedSkills
* SkillRelatedSkills `object`
  * related_skill_name `array`
    * items [SkillRelatedSkill](#skillrelatedskill)
  * uuid `string`: Universally Unique Identifier for the skills

### Skills
* Skills `array`
  * links `array`
    * items [PageLink](#pagelink)
  * items [Skill](#skill)


