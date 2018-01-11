# @datafire/redmine

Client library for Redmine API

## Installation and Usage
```bash
npm install --save @datafire/redmine
```
```js
let redmine = require('@datafire/redmine').create({
  api_key: "",
  host: ""
});

redmine.projects.json.get({}).then(data => {
  console.log(data);
})
```

## Description

Redmine exposes some of its data through a REST API. This API provides 
access and basic CRUD operations (create, update, delete) for the resources 
described below. The API supports both XML and JSON formats.


## Actions

### issues.json.get
Returns a paginated list of issues. By default, it returns open issues only.  
NB: operators containing ">", "<" or "=" should be hex-encoded so they're parsed correctly. Most evolved API clients will do that for you by default, but for the sake of clarity the following examples have been written with no such magic feature in mind.



```js
redmine.issues.json.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: skip this number of issues in response (optional)
  * limit `integer`: number of issues per page (optional)
  * sort `string`: column to sort with. Append :desc to invert the order.
  * project_id `integer`: get issues from the project with the given id (a numeric value, not a project identifier).
  * subproject_id `string`: get issues from the subproject with the given id. You can use project_id=XXX&subproject_id=!* to get only the issues of a given project and none of its subprojects.
  * tracker_id `integer`: get issues from the tracker with the given id
  * status_id `string`: get issues with the given status id only. Possible values: open, closed, * to get open and closed issues, status id
  * assigned_to_id `string`: get issues which are assigned to the given user id. me can be used instead an ID to fetch all issues from the logged in user (via API key or HTTP auth)
  * cf_x `string`: get issues with the given value for custom field with an ID of x. (Custom field must have 'used as a filter' checked.)

#### Output
* output `object`
  * issues **required** `array`
    * items [Issue](#issue)
  * total_count **required** `integer`
  * offset **required** `integer`
  * limit **required** `integer`

### issues.json.post
|aa|bb|
|--|--|
|aa|bb|

Creating an issue



```js
redmine.issues.json.post({}, context)
```

#### Input
* input `object`
  * BodyJson `object`: 
    * issue **required** `object`: 
      * project_id **required** `integer`
      * tracker_id **required** `integer`
      * status_id **required** `string`
      * priority_id `integer`
      * subject `string`
      * description `string`
      * category_id `integer`
      * fixed_version_id `string`: 'ID of the Target Versions (previously called 'Fixed Version' and still referred to as such in the API)'
      * assigned_to_id `string`: 'ID of the user to assign the issue to (currently no mechanism to assign by name)'
      * parent_issue_id `string`: 'ID of the parent issue'
      * custom_fields `string`: 'See Custom fields'
      * watcher_user_ids `string`: 'Array of user ids to add as watchers (since 2.3.0)'
      * is_private `boolean` (values: false, true): 'Use true or false to indicate whether the issue is private or not'
      * estimated_hours `string`: 'Number of hours estimated for issue'

#### Output
*Output schema unknown*

### issues.issue_id.json.get
Showing an issue


```js
redmine.issues.issue_id.json.get({
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * issue_id **required** `number`: The user identifier number

#### Output
* output `object`
  * issue **required** [Issue](#issue)

### issues.issue_id.json.put
Updating an issue


```js
redmine.issues.issue_id.json.put({
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * issue_id **required** `number`: The user identifier number

#### Output
*Output schema unknown*

### issues.issue_id.json.delete
Deleting an issue


```js
redmine.issues.issue_id.json.delete({
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * issue_id **required** `number`: The user identifier number

#### Output
*Output schema unknown*

### issues.issue_id.watchers.json.post
Adding a watcher


```js
redmine.issues.issue_id.watchers.json.post({
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * BodyJson `object`
    * user_id **required** `string`: id of the user to add as a watcher
  * issue_id **required** `number`: The user identifier number

#### Output
*Output schema unknown*

### issues.issue_id.watchers.user_id.json.delete
Removing a watcher


```js
redmine.issues.issue_id.watchers.user_id.json.delete({
  "issue_id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * issue_id **required** `number`: The user identifier number
  * user_id **required** `number`: The user identifier number

#### Output
*Output schema unknown*

### projects.json.get
Returns all projects (all public projects and private projects where user have access to)


```js
redmine.projects.json.get({}, context)
```

#### Input
* input `object`
  * include `string`: fetch associated data (optional). Possible values: trackers, issue_categories, enabled_modules (since 2.6.0).

#### Output
* output `object`
  * projects **required** `array`
    * items [Project](#project)
  * total_count `integer`
  * offset **required** `integer`
  * limit **required** `integer`

### projects.json.post
Creates a the project.


```js
redmine.projects.json.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### projects.project_id.json.get
Returns the project of given id or identifier.


```js
redmine.projects.project_id.json.get({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: The user identifier number

#### Output
*Output schema unknown*

### projects.project_id.json.put
Updates the project of given id or identifier.


```js
redmine.projects.project_id.json.put({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: The user identifier number

#### Output
*Output schema unknown*

### projects.project_id.json.delete
Deletes the project of given id or identifier.


```js
redmine.projects.project_id.json.delete({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: The user identifier number

#### Output
*Output schema unknown*



## Definitions

### Issue
* Issue `object`
  * id **required** `integer`
  * project **required** [IdName](#idname)
  * tracker **required** [IdName](#idname)
  * status **required** [IdName](#idname)
  * priority **required** [IdName](#idname)
  * author **required** [IdName](#idname)
  * subject **required** `string`
  * description **required** `string`
  * start_date **required** `string`
  * done_ratio **required** `string`
  * created_on **required** `string`
  * updated_on **required** `string`

### IdName
* IdName `object`
  * id **required** `integer`
  * name **required** `string`

### Project
* Project `object`
  * id **required** `integer`
  * name **required** `integer`
  * identifier **required** `integer`
  * description **required** `integer`
  * status **required** `integer`
  * is_public `boolean`
  * trackers `array`
    * items `string`
  * issue_categories `array`
    * items `string`
  * created_on **required** `string`
  * updated_on **required** `string`


