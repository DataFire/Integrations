# @datafire/pivotaltracker
Access and manipulate agile project management data including projects, stories and tasks.

## Operation: tokens.active.get
Returns an API token associated with the user. This method requires HTTP Basic authentication.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: tokens.active.post
Returns an API token associated with the user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The user's name."
    },
    "password": {
      "type": "string",
      "description": "The user's password."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "password"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: activities.get
Retrieves the recent activity of all your projects.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "Limits the number of activity feed items. Note the default value is 10, and there is a upper cap of 100",
      "minimum": 1
    },
    "occurred_since_date": {
      "type": "string",
      "description": "Restricts the activity feed to only those items that occurred after a supplied date (example format: 2009/12/18 21:00:00 UTC)"
    },
    "newer_than_version": {
      "type": "string",
      "description": "Restricts the activity feed to only those items that have a greater than supplied version"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.activities.get
Retrieves the recent activity of a specific project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "Limits the number of activity feed items. Note the default value is 10, and there is a upper cap of 100",
      "minimum": 1
    },
    "occurred_since_date": {
      "type": "string",
      "description": "Restricts the activity feed to only those items that occurred after a supplied date (example format: 2009/12/18 21:00:00 UTC)"
    },
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project to retrieve the activity for"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.get
Retrieves information about a project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project to retrieve"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.get
Retrieves all of the user's projects.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: projects.post
Adds a new project.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.memberships.get
Retrieves all memberships for a project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.memberships.post
Adds a new membership to a project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.memberships.MEMBERSHIP_ID.get
Retrieves information about a single membership.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "MEMBERSHIP_ID": {
      "type": "string",
      "description": "The ID of the membership"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "MEMBERSHIP_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.memberships.MEMBERSHIP_ID.delete
Removes a membership from a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "MEMBERSHIP_ID": {
      "type": "string",
      "description": "The ID of the membership"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "MEMBERSHIP_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.iterations.get
Retrieves all iterations, with stories.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.iterations.done.get
Retrieves iterations from the "done" group, with stories.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "offset": {
      "type": "integer",
      "description": "Controls the number of iterations to skip from the beginning of the result."
    },
    "limit": {
      "type": "integer",
      "description": "Controls the maximum number of iterations returned.",
      "minimum": 1
    },
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.iterations.current.get
Retrieves iterations from the "current" group, with stories.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.iterations.backlog.get
Retrieves iterations from the "backlog" group, with stories.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "offset": {
      "type": "integer",
      "description": "Controls the number of iterations to skip from the beginning of the result."
    },
    "limit": {
      "type": "integer",
      "description": "Controls the maximum number of iterations returned.",
      "minimum": 1
    },
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.iterations.current_backlog.get
Retrieves iterations from the "current" and "backlog" groups, with stories.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "offset": {
      "type": "integer",
      "description": "Controls the number of iterations to skip from the beginning of the result."
    },
    "limit": {
      "type": "integer",
      "description": "Controls the maximum number of iterations returned.",
      "minimum": 1
    },
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.get
Retrieves information about a single story.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.put
Updates a story

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.delete
Deletes a story

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.get
Retrieves all stories for a project, or those matching filter(s)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filter": {
      "type": "string",
      "description": "A filter for the returned stories to match. See the API documentation for more details."
    },
    "offset": {
      "type": "integer",
      "description": "Controls the number of stories to skip from the beginning of the result."
    },
    "limit": {
      "type": "integer",
      "description": "Controls the maximum number of stories returned.",
      "minimum": 1
    },
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.post
Adds a new story

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.notes.put
Adds a note (comment)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.deliver_all_finished.post
Takes all finished stories and marks them as delivered. This could be used to automate a demo deploy process. The updated stories are returned as the result.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.moves.post
Moves a story before or after another story. The moved story is returned in the response.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.tasks.TASK_ID.get
Returns information about a single task

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    },
    "TASK_ID": {
      "type": "string",
      "description": "The ID of the task"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID",
    "TASK_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.tasks.TASK_ID.put
Updates a task

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    },
    "TASK_ID": {
      "type": "string",
      "description": "The ID of the task"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID",
    "TASK_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.tasks.TASK_ID.delete
Deletes a task

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    },
    "TASK_ID": {
      "type": "string",
      "description": "The ID of the task"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID",
    "TASK_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.tasks.get
Returns all tasks for a story

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.tasks.post
Adds a task to a story

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: projects.PROJECT_ID.stories.STORY_ID.attachments.post
Uploads an attachment to a story.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PROJECT_ID": {
      "type": "string",
      "description": "The ID of the project"
    },
    "STORY_ID": {
      "type": "string",
      "description": "The ID of the story"
    }
  },
  "additionalProperties": false,
  "required": [
    "PROJECT_ID",
    "STORY_ID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: source_commits.post
Allows integration with post-commit hooks of Source Control Management (SCM) systems such as Subversion, Git, etc.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
