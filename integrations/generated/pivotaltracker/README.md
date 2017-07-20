# @datafire/pivotaltracker

Client library for Pivotal Tracker

## Installation and Usage
```bash
npm install --save datafire @datafire/pivotaltracker
```

```js
let datafire = require('datafire');
let pivotaltracker = require('@datafire/pivotaltracker').actions;
let context = new datafire.Context();

pivotaltracker.activities.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Access and manipulate agile project management data including projects, stories and tasks.

## Actions
### tokens.active.get
Returns an API token associated with the user. This method requires HTTP Basic authentication.


```js
pivotaltracker.tokens.active.get(null, context)
```


### tokens.active.post
Returns an API token associated with the user.


```js
pivotaltracker.tokens.active.post({
  "username": "",
  "password": ""
}, context)
```

#### Parameters
* username (string) **required** - The user's name.
* password (string) **required** - The user's password.

### activities.get
Retrieves the recent activity of all your projects.


```js
pivotaltracker.activities.get({}, context)
```

#### Parameters
* limit (integer) - Limits the number of activity feed items. Note the default value is 10, and there is a upper cap of 100
* occurred_since_date (string) - Restricts the activity feed to only those items that occurred after a supplied date (example format: 2009/12/18 21:00:00 UTC)
* newer_than_version (string) - Restricts the activity feed to only those items that have a greater than supplied version

### projects.PROJECT_ID.activities.get
Retrieves the recent activity of a specific project.


```js
pivotaltracker.projects.PROJECT_ID.activities.get({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* limit (integer) - Limits the number of activity feed items. Note the default value is 10, and there is a upper cap of 100
* occurred_since_date (string) - Restricts the activity feed to only those items that occurred after a supplied date (example format: 2009/12/18 21:00:00 UTC)
* PROJECT_ID (string) **required** - The ID of the project to retrieve the activity for

### projects.PROJECT_ID.get
Retrieves information about a project.


```js
pivotaltracker.projects.PROJECT_ID.get({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project to retrieve

### projects.get
Retrieves all of the user's projects.


```js
pivotaltracker.projects.get(null, context)
```


### projects.post
Adds a new project.


```js
pivotaltracker.projects.post(null, context)
```


### projects.PROJECT_ID.memberships.get
Retrieves all memberships for a project.


```js
pivotaltracker.projects.PROJECT_ID.memberships.get({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.memberships.post
Adds a new membership to a project.


```js
pivotaltracker.projects.PROJECT_ID.memberships.post({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.memberships.MEMBERSHIP_ID.get
Retrieves information about a single membership.


```js
pivotaltracker.projects.PROJECT_ID.memberships.MEMBERSHIP_ID.get({
  "PROJECT_ID": "",
  "MEMBERSHIP_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* MEMBERSHIP_ID (string) **required** - The ID of the membership

### projects.PROJECT_ID.memberships.MEMBERSHIP_ID.delete
Removes a membership from a project


```js
pivotaltracker.projects.PROJECT_ID.memberships.MEMBERSHIP_ID.delete({
  "PROJECT_ID": "",
  "MEMBERSHIP_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* MEMBERSHIP_ID (string) **required** - The ID of the membership

### projects.PROJECT_ID.iterations.get
Retrieves all iterations, with stories.


```js
pivotaltracker.projects.PROJECT_ID.iterations.get({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.iterations.done.get
Retrieves iterations from the "done" group, with stories.


```js
pivotaltracker.projects.PROJECT_ID.iterations.done.get({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* offset (integer) - Controls the number of iterations to skip from the beginning of the result.
* limit (integer) - Controls the maximum number of iterations returned.
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.iterations.current.get
Retrieves iterations from the "current" group, with stories.


```js
pivotaltracker.projects.PROJECT_ID.iterations.current.get({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.iterations.backlog.get
Retrieves iterations from the "backlog" group, with stories.


```js
pivotaltracker.projects.PROJECT_ID.iterations.backlog.get({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* offset (integer) - Controls the number of iterations to skip from the beginning of the result.
* limit (integer) - Controls the maximum number of iterations returned.
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.iterations.current_backlog.get
Retrieves iterations from the "current" and "backlog" groups, with stories.


```js
pivotaltracker.projects.PROJECT_ID.iterations.current_backlog.get({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* offset (integer) - Controls the number of iterations to skip from the beginning of the result.
* limit (integer) - Controls the maximum number of iterations returned.
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.stories.STORY_ID.get
Retrieves information about a single story.


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.get({
  "PROJECT_ID": "",
  "STORY_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story

### projects.PROJECT_ID.stories.STORY_ID.put
Updates a story


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.put({
  "PROJECT_ID": "",
  "STORY_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story

### projects.PROJECT_ID.stories.STORY_ID.delete
Deletes a story


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.delete({
  "PROJECT_ID": "",
  "STORY_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story

### projects.PROJECT_ID.stories.get
Retrieves all stories for a project, or those matching filter(s)


```js
pivotaltracker.projects.PROJECT_ID.stories.get({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* filter (string) - A filter for the returned stories to match. See the API documentation for more details.
* offset (integer) - Controls the number of stories to skip from the beginning of the result.
* limit (integer) - Controls the maximum number of stories returned.
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.stories.post
Adds a new story


```js
pivotaltracker.projects.PROJECT_ID.stories.post({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.stories.STORY_ID.notes.put
Adds a note (comment)


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.notes.put({
  "PROJECT_ID": "",
  "STORY_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story

### projects.PROJECT_ID.stories.deliver_all_finished.post
Takes all finished stories and marks them as delivered. This could be used to automate a demo deploy process. The updated stories are returned as the result.


```js
pivotaltracker.projects.PROJECT_ID.stories.deliver_all_finished.post({
  "PROJECT_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project

### projects.PROJECT_ID.stories.STORY_ID.moves.post
Moves a story before or after another story. The moved story is returned in the response.


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.moves.post({
  "PROJECT_ID": "",
  "STORY_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story

### projects.PROJECT_ID.stories.STORY_ID.tasks.TASK_ID.get
Returns information about a single task


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.tasks.TASK_ID.get({
  "PROJECT_ID": "",
  "STORY_ID": "",
  "TASK_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story
* TASK_ID (string) **required** - The ID of the task

### projects.PROJECT_ID.stories.STORY_ID.tasks.TASK_ID.put
Updates a task


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.tasks.TASK_ID.put({
  "PROJECT_ID": "",
  "STORY_ID": "",
  "TASK_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story
* TASK_ID (string) **required** - The ID of the task

### projects.PROJECT_ID.stories.STORY_ID.tasks.TASK_ID.delete
Deletes a task


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.tasks.TASK_ID.delete({
  "PROJECT_ID": "",
  "STORY_ID": "",
  "TASK_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story
* TASK_ID (string) **required** - The ID of the task

### projects.PROJECT_ID.stories.STORY_ID.tasks.get
Returns all tasks for a story


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.tasks.get({
  "PROJECT_ID": "",
  "STORY_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story

### projects.PROJECT_ID.stories.STORY_ID.tasks.post
Adds a task to a story


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.tasks.post({
  "PROJECT_ID": "",
  "STORY_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story

### projects.PROJECT_ID.stories.STORY_ID.attachments.post
Uploads an attachment to a story.


```js
pivotaltracker.projects.PROJECT_ID.stories.STORY_ID.attachments.post({
  "PROJECT_ID": "",
  "STORY_ID": ""
}, context)
```

#### Parameters
* PROJECT_ID (string) **required** - The ID of the project
* STORY_ID (string) **required** - The ID of the story

### source_commits.post
Allows integration with post-commit hooks of Source Control Management (SCM) systems such as Subversion, Git, etc.


```js
pivotaltracker.source_commits.post(null, context)
```


