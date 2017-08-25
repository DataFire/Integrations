# @datafire/redmine

Client library for Redmine API

## Installation and Usage
```bash
npm install --save datafire @datafire/redmine
```

```js
let datafire = require('datafire');
let redmine = require('@datafire/redmine').actions;

let account = {
  api_key: "",
  host: "",
}
let context = new datafire.Context({
  accounts: {
    redmine: account,
  }
})

redmine.projects.json.get({}, context).then(data => {
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

#### Parameters
* offset (integer) - skip this number of issues in response (optional)
* limit (integer) - number of issues per page (optional)
* sort (string) - column to sort with. Append :desc to invert the order.
* project_id (integer) - get issues from the project with the given id (a numeric value, not a project identifier).
* subproject_id (string) - get issues from the subproject with the given id. You can use project_id=XXX&subproject_id=!* to get only the issues of a given project and none of its subprojects.
* tracker_id (integer) - get issues from the tracker with the given id
* status_id (string) - get issues with the given status id only. Possible values: open, closed, * to get open and closed issues, status id
* assigned_to_id (string) - get issues which are assigned to the given user id. me can be used instead an ID to fetch all issues from the logged in user (via API key or HTTP auth)
* cf_x (string) - get issues with the given value for custom field with an ID of x. (Custom field must have 'used as a filter' checked.)

### issues.json.post
|aa|bb|
|--|--|
|aa|bb|

Creating an issue



```js
redmine.issues.json.post({}, context)
```

#### Parameters
* BodyJson (object) - 

### issues.issue_id.json.get
Showing an issue


```js
redmine.issues.issue_id.json.get({
  "issue_id": 0
}, context)
```

#### Parameters
* issue_id (number) **required** - The user identifier number

### issues.issue_id.json.put
Updating an issue


```js
redmine.issues.issue_id.json.put({
  "issue_id": 0
}, context)
```

#### Parameters
* issue_id (number) **required** - The user identifier number

### issues.issue_id.json.delete
Deleting an issue


```js
redmine.issues.issue_id.json.delete({
  "issue_id": 0
}, context)
```

#### Parameters
* issue_id (number) **required** - The user identifier number

### issues.issue_id.watchers.json.post
Adding a watcher


```js
redmine.issues.issue_id.watchers.json.post({
  "issue_id": 0
}, context)
```

#### Parameters
* BodyJson (object)
* issue_id (number) **required** - The user identifier number

### issues.issue_id.watchers.user_id.json.delete
Removing a watcher


```js
redmine.issues.issue_id.watchers.user_id.json.delete({
  "issue_id": 0,
  "user_id": 0
}, context)
```

#### Parameters
* issue_id (number) **required** - The user identifier number
* user_id (number) **required** - The user identifier number

### projects.json.get
Returns all projects (all public projects and private projects where user have access to)


```js
redmine.projects.json.get({}, context)
```

#### Parameters
* include (string) - fetch associated data (optional). Possible values: trackers, issue_categories, enabled_modules (since 2.6.0).

### projects.json.post
Creates a the project.


```js
redmine.projects.json.post(null, context)
```


### projects.project_id.json.get
Returns the project of given id or identifier.


```js
redmine.projects.project_id.json.get({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required** - The user identifier number

### projects.project_id.json.put
Updates the project of given id or identifier.


```js
redmine.projects.project_id.json.put({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required** - The user identifier number

### projects.project_id.json.delete
Deletes the project of given id or identifier.


```js
redmine.projects.project_id.json.delete({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required** - The user identifier number

