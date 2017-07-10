# @datafire/gitlab
The platform for modern developers
GitLab unifies issues, code review, CI and CD into a single UI

## Operation: getV3ApplicationSettings
Get the current application settings

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationSetting"
}
```
## Operation: putV3ApplicationSettings
Modify application settings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "default_branch_protection": {
      "type": "integer",
      "format": "int32",
      "description": "Determine if developers can push to master",
      "enum": [
        0,
        1,
        2
      ]
    },
    "default_project_visibility": {
      "type": "integer",
      "format": "int32",
      "description": "The default project visibility",
      "enum": [
        0,
        10,
        20
      ]
    },
    "default_snippet_visibility": {
      "type": "integer",
      "format": "int32",
      "description": "The default snippet visibility",
      "enum": [
        0,
        10,
        20
      ]
    },
    "default_group_visibility": {
      "type": "integer",
      "format": "int32",
      "description": "The default group visibility",
      "enum": [
        0,
        10,
        20
      ]
    },
    "restricted_visibility_levels": {
      "type": "array",
      "description": "Selected levels cannot be used by non-admin users for projects or snippets. If the public level is restricted, user profiles are only visible to logged in users."
    },
    "import_sources": {
      "type": "array",
      "description": "Enabled sources for code import during project creation. OmniAuth must be configured for GitHub, Bitbucket, and GitLab.com",
      "enum": [
        "github",
        "bitbucket",
        "gitlab",
        "google_code",
        "fogbugz",
        "git",
        "gitlab_project"
      ]
    },
    "disabled_oauth_sign_in_sources": {
      "type": "array",
      "description": "Disable certain OAuth sign-in sources"
    },
    "enabled_git_access_protocol": {
      "type": "string",
      "description": "Allow only the selected protocols to be used for Git access.",
      "enum": [
        "ssh",
        "http",
        "nil"
      ]
    },
    "gravatar_enabled": {
      "type": "boolean",
      "description": "Flag indicating if the Gravatar service is enabled"
    },
    "default_projects_limit": {
      "type": "integer",
      "format": "int32",
      "description": "The maximum number of personal projects"
    },
    "max_attachment_size": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum attachment size in MB"
    },
    "session_expire_delay": {
      "type": "integer",
      "format": "int32",
      "description": "Session duration in minutes. GitLab restart is required to apply changes."
    },
    "user_oauth_applications": {
      "type": "boolean",
      "description": "Allow users to register any application to use GitLab as an OAuth provider"
    },
    "user_default_external": {
      "type": "boolean",
      "description": "Newly registered users will by default be external"
    },
    "signup_enabled": {
      "type": "boolean",
      "description": "Flag indicating if sign up is enabled"
    },
    "send_user_confirmation_email": {
      "type": "boolean",
      "description": "Send confirmation email on sign-up"
    },
    "domain_whitelist": {
      "type": "string",
      "description": "ONLY users with e-mail addresses that match these domain(s) will be able to sign-up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com"
    },
    "domain_blacklist_enabled": {
      "type": "boolean",
      "description": "Enable domain blacklist for sign ups"
    },
    "domain_blacklist": {
      "type": "string",
      "description": "Users with e-mail addresses that match these domain(s) will NOT be able to sign-up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com"
    },
    "after_sign_up_text": {
      "type": "string",
      "description": "Text shown after sign up"
    },
    "signin_enabled": {
      "type": "boolean",
      "description": "Flag indicating if sign in is enabled"
    },
    "require_two_factor_authentication": {
      "type": "boolean",
      "description": "Require all users to setup Two-factor authentication"
    },
    "two_factor_grace_period": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication"
    },
    "home_page_url": {
      "type": "string",
      "description": "We will redirect non-logged in users to this page"
    },
    "after_sign_out_path": {
      "type": "string",
      "description": "We will redirect users to this page after they sign out"
    },
    "sign_in_text": {
      "type": "string",
      "description": "The sign in text of the GitLab application"
    },
    "help_page_text": {
      "type": "string",
      "description": "Custom text displayed on the help page"
    },
    "shared_runners_enabled": {
      "type": "boolean",
      "description": "Enable shared runners for new projects"
    },
    "shared_runners_text": {
      "type": "string",
      "description": "Shared runners text "
    },
    "max_artifacts_size": {
      "type": "integer",
      "format": "int32",
      "description": "Set the maximum file size each build's artifacts can have"
    },
    "container_registry_token_expire_delay": {
      "type": "integer",
      "format": "int32",
      "description": "Authorization token duration (minutes)"
    },
    "metrics_enabled": {
      "type": "boolean",
      "description": "Enable the InfluxDB metrics"
    },
    "metrics_host": {
      "type": "string",
      "description": "The InfluxDB host"
    },
    "metrics_port": {
      "type": "integer",
      "format": "int32",
      "description": "The UDP port to use for connecting to InfluxDB"
    },
    "metrics_pool_size": {
      "type": "integer",
      "format": "int32",
      "description": "The amount of InfluxDB connections to open"
    },
    "metrics_timeout": {
      "type": "integer",
      "format": "int32",
      "description": "The amount of seconds after which an InfluxDB connection will time out"
    },
    "metrics_method_call_threshold": {
      "type": "integer",
      "format": "int32",
      "description": "A method call is only tracked when it takes longer to complete than the given amount of milliseconds."
    },
    "metrics_sample_interval": {
      "type": "integer",
      "format": "int32",
      "description": "The sampling interval in seconds"
    },
    "metrics_packet_size": {
      "type": "integer",
      "format": "int32",
      "description": "The amount of points to store in a single UDP packet"
    },
    "sidekiq_throttling_enabled": {
      "type": "boolean",
      "description": "Enable Sidekiq Job Throttling"
    },
    "sidekiq_throttling_queus": {
      "type": "array",
      "description": "Choose which queues you wish to throttle"
    },
    "sidekiq_throttling_factor": {
      "type": "number",
      "format": "float",
      "description": "The factor by which the queues should be throttled. A value between 0.0 and 1.0, exclusive."
    },
    "recaptcha_enabled": {
      "type": "boolean",
      "description": "Helps prevent bots from creating accounts"
    },
    "recaptcha_site_key": {
      "type": "string",
      "description": "Generate site key at http://www.google.com/recaptcha"
    },
    "recaptcha_private_key": {
      "type": "string",
      "description": "Generate private key at http://www.google.com/recaptcha"
    },
    "akismet_enabled": {
      "type": "boolean",
      "description": "Helps prevent bots from creating issues"
    },
    "akismet_api_key": {
      "type": "string",
      "description": "Generate API key at http://www.akismet.com"
    },
    "admin_notification_email": {
      "type": "string",
      "description": "Abuse reports will be sent to this address if it is set. Abuse reports are always available in the admin area."
    },
    "sentry_enabled": {
      "type": "boolean",
      "description": "Sentry is an error reporting and logging tool which is currently not shipped with GitLab, get it here: https://getsentry.com"
    },
    "sentry_dsn": {
      "type": "string",
      "description": "Sentry Data Source Name"
    },
    "repository_storage": {
      "type": "string",
      "description": "Storage paths for new projects"
    },
    "repository_checks_enabled": {
      "type": "boolean",
      "description": "GitLab will periodically run 'git fsck' in all project and wiki repositories to look for silent disk corruption issues."
    },
    "koding_enabled": {
      "type": "boolean",
      "description": "Enable Koding"
    },
    "koding_url": {
      "type": "string",
      "description": "The Koding team URL"
    },
    "plantuml_enabled": {
      "type": "boolean",
      "description": "Enable PlantUML"
    },
    "plantuml_url": {
      "type": "string",
      "description": "The PlantUML server URL"
    },
    "version_check_enabled": {
      "type": "boolean",
      "description": "Let GitLab inform you when an update is available."
    },
    "email_author_in_body": {
      "type": "boolean",
      "description": "Some email servers do not support overriding the email sender name. Enable this option to include the name of the author of the issue, merge request or comment in the email body instead."
    },
    "html_emails_enabled": {
      "type": "boolean",
      "description": "By default GitLab sends emails in HTML and plain text formats so mail clients can choose what format to use. Disable this option if you only want to send emails in plain text format."
    },
    "housekeeping_enabled": {
      "type": "boolean",
      "description": "Enable automatic repository housekeeping (git repack, git gc)"
    },
    "housekeeping_bitmaps_enabled": {
      "type": "boolean",
      "description": "Creating pack file bitmaps makes housekeeping take a little longer but bitmaps should accelerate 'git clone' performance."
    },
    "housekeeping_incremental_repack_period": {
      "type": "integer",
      "format": "int32",
      "description": "Number of Git pushes after which an incremental 'git repack' is run."
    },
    "housekeeping_full_repack_period": {
      "type": "integer",
      "format": "int32",
      "description": "Number of Git pushes after which a full 'git repack' is run."
    },
    "housekeeping_gc_period": {
      "type": "integer",
      "format": "int32",
      "description": "Number of Git pushes after which 'git gc' is run."
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_blacklist",
    "two_factor_grace_period",
    "shared_runners_text",
    "metrics_host",
    "metrics_port",
    "metrics_pool_size",
    "metrics_timeout",
    "metrics_method_call_threshold",
    "metrics_sample_interval",
    "metrics_packet_size",
    "sidekiq_throttling_queus",
    "sidekiq_throttling_factor",
    "recaptcha_site_key",
    "recaptcha_private_key",
    "akismet_api_key",
    "sentry_dsn",
    "koding_url",
    "plantuml_url",
    "housekeeping_bitmaps_enabled",
    "housekeeping_incremental_repack_period",
    "housekeeping_full_repack_period",
    "housekeeping_gc_period"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationSetting"
}
```
## Operation: postV3CiLint
Validation of .gitlab-ci.yml content

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "string",
      "description": "Content of .gitlab-ci.yml"
    }
  },
  "additionalProperties": false,
  "required": [
    "content"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3DeployKeys


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3Dockerfiles
This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TemplatesList"
}
```
## Operation: getV3DockerfilesName
This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the template"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
## Operation: getV3Gitignores
This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TemplatesList"
}
```
## Operation: getV3GitignoresName
This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the template"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
## Operation: getV3GitlabCiYmls
This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TemplatesList"
}
```
## Operation: getV3GitlabCiYmlsName
This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the template"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
## Operation: getV3Groups
Get a groups list

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "statistics": {
      "type": "boolean",
      "description": "Include project statistics"
    },
    "skip_groups": {
      "type": "array",
      "description": "Array of group ids to exclude from list"
    },
    "all_available": {
      "type": "boolean",
      "description": "Show all group that you have access to"
    },
    "search": {
      "type": "string",
      "description": "Search for a specific group"
    },
    "order_by": {
      "type": "string",
      "description": "Order by name or path",
      "enum": [
        "name",
        "path"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Sort by asc (ascending) or desc (descending)",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: postV3Groups
Create a group. Available only for users who can create groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the group"
    },
    "path": {
      "type": "string",
      "description": "The path of the group"
    },
    "description": {
      "type": "string",
      "description": "The description of the group"
    },
    "visibility_level": {
      "type": "integer",
      "format": "int32",
      "description": "The visibility level of the group"
    },
    "lfs_enabled": {
      "type": "boolean",
      "description": "Enable/disable LFS for the projects in this group"
    },
    "request_access_enabled": {
      "type": "boolean",
      "description": "Allow users to request member access"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "path"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: getV3GroupsOwned
Get list of owned groups for authenticated user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "statistics": {
      "type": "boolean",
      "description": "Include project statistics"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: deleteV3GroupsId
Remove a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a group"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3GroupsId
Get a single group, with containing projects.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a group"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupDetail"
}
```
## Operation: putV3GroupsId
Update a group. Available only for users who can administrate groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a group"
    },
    "name": {
      "type": "string",
      "description": "The name of the group"
    },
    "path": {
      "type": "string",
      "description": "The path of the group"
    },
    "description": {
      "type": "string",
      "description": "The description of the group"
    },
    "visibility_level": {
      "type": "integer",
      "format": "int32",
      "description": "The visibility level of the group"
    },
    "lfs_enabled": {
      "type": "boolean",
      "description": "Enable/disable LFS for the projects in this group"
    },
    "request_access_enabled": {
      "type": "boolean",
      "description": "Allow users to request member access"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Group"
}
```
## Operation: getV3GroupsIdAccessRequests
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessRequester"
}
```
## Operation: postV3GroupsIdAccessRequests
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessRequester"
}
```
## Operation: deleteV3GroupsIdAccessRequestsUserId
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the access requester"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3GroupsIdAccessRequestsUserIdApprove
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the access requester"
    },
    "access_level": {
      "type": "integer",
      "format": "int32",
      "description": "A valid access level (defaults: `30`, developer access level)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: getV3GroupsIdIssues
Get a list of group issues

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a group"
    },
    "state": {
      "type": "string",
      "description": "Return opened, closed, or all issues",
      "enum": [
        "opened",
        "closed",
        "all"
      ]
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of label names"
    },
    "milestone": {
      "type": "string",
      "description": "Return issues for a specific milestone"
    },
    "order_by": {
      "type": "string",
      "description": "Return issues ordered by `created_at` or `updated_at` fields.",
      "enum": [
        "created_at",
        "updated_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return issues sorted in `asc` or `desc` order.",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: getV3GroupsIdMembers
Gets a list of group or project members viewable by the authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID"
    },
    "query": {
      "type": "string",
      "description": "A query string to search for members"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: postV3GroupsIdMembers
Adds a member to a group or project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the new member"
    },
    "access_level": {
      "type": "integer",
      "format": "int32",
      "description": "A valid access level (defaults: `30`, developer access level)"
    },
    "expires_at": {
      "type": "string",
      "format": "date-time",
      "description": "Date string in the format YEAR-MONTH-DAY"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id",
    "access_level"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: deleteV3GroupsIdMembersUserId
Removes a user from a group or project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the member"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3GroupsIdMembersUserId
Gets a member of a group or project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the member"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: putV3GroupsIdMembersUserId
Updates a member of a group or project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the new member"
    },
    "access_level": {
      "type": "integer",
      "format": "int32",
      "description": "A valid access level"
    },
    "expires_at": {
      "type": "string",
      "format": "date-time",
      "description": "Date string in the format YEAR-MONTH-DAY"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id",
    "access_level"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: getV3GroupsIdNotificationSettings
This feature was introduced in GitLab 8.12

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID or project ID or project NAMESPACE/PROJECT_NAME"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationSetting"
}
```
## Operation: putV3GroupsIdNotificationSettings
This feature was introduced in GitLab 8.12

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID or project ID or project NAMESPACE/PROJECT_NAME"
    },
    "level": {
      "type": "string",
      "description": "The group notification level"
    },
    "new_note": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "new_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reopen_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "close_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reassign_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "new_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reopen_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "close_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reassign_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "merge_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "failed_pipeline": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "success_pipeline": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationSetting"
}
```
## Operation: getV3GroupsIdProjects
Get a list of projects in this group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a group"
    },
    "archived": {
      "type": "boolean",
      "description": "Limit by archived status"
    },
    "visibility": {
      "type": "string",
      "description": "Limit by visibility",
      "enum": [
        "public",
        "internal",
        "private"
      ]
    },
    "search": {
      "type": "string",
      "description": "Return list of authorized projects matching the search criteria"
    },
    "order_by": {
      "type": "string",
      "description": "Return projects ordered by field",
      "enum": [
        "id",
        "name",
        "path",
        "created_at",
        "updated_at",
        "last_activity_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return projects sorted in ascending and descending order",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "simple": {
      "type": "boolean",
      "description": "Return only the ID, URL, name, and path of each project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: postV3GroupsIdProjectsProjectId
Transfer a project to the group namespace. Available only for admin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a group"
    },
    "project_id": {
      "type": "string",
      "description": "The ID or path of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "project_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupDetail"
}
```
## Operation: getV3Hooks
Get the list of system hooks

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Hook"
}
```
## Operation: postV3Hooks
Create a new system hook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "The URL to send the request to"
    },
    "token": {
      "type": "string",
      "description": "The token used to validate payloads"
    },
    "push_events": {
      "type": "boolean",
      "description": "Trigger hook on push events"
    },
    "tag_push_events": {
      "type": "boolean",
      "description": "Trigger hook on tag push events"
    },
    "enable_ssl_verification": {
      "type": "boolean",
      "description": "Do SSL verification when triggering the hook"
    }
  },
  "additionalProperties": false,
  "required": [
    "url"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Hook"
}
```
## Operation: deleteV3HooksId
Delete a hook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the system hook"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Hook"
}
```
## Operation: getV3HooksId
Test a hook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the system hook"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Hook"
}
```
## Operation: postV3InternalAllowed


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3InternalBroadcastMessage


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3InternalCheck


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3InternalDiscover


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: postV3InternalLfsAuthenticate


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3InternalMergeRequestUrls


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: postV3InternalTwoFactorRecoveryCodes


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3Issues
Get currently authenticated user's issues

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "state": {
      "type": "string",
      "description": "Return opened, closed, or all issues",
      "enum": [
        "opened",
        "closed",
        "all"
      ]
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of label names"
    },
    "milestone": {
      "type": "string",
      "description": "Return issues for a specific milestone"
    },
    "order_by": {
      "type": "string",
      "description": "Return issues ordered by `created_at` or `updated_at` fields.",
      "enum": [
        "created_at",
        "updated_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return issues sorted in `asc` or `desc` order.",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: getV3KeysId
Get single ssh key by id. Only available to admin users

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKeyWithUser"
}
```
## Operation: getV3Licenses
This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "popular": {
      "type": "boolean",
      "description": "If passed, returns only popular licenses"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoLicense"
}
```
## Operation: getV3LicensesName
This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the template"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoLicense"
}
```
## Operation: getV3Namespaces
Get a namespaces list

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "search": {
      "type": "string",
      "description": "Search query for namespaces"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Namespace"
}
```
## Operation: getV3NotificationSettings
This feature was introduced in GitLab 8.12

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GlobalNotificationSetting"
}
```
## Operation: putV3NotificationSettings
This feature was introduced in GitLab 8.12

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "level": {
      "type": "string",
      "description": "The global notification level"
    },
    "notification_email": {
      "type": "string",
      "description": "The email address to send notifications"
    },
    "new_note": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "new_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reopen_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "close_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reassign_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "new_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reopen_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "close_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reassign_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "merge_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "failed_pipeline": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "success_pipeline": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GlobalNotificationSetting"
}
```
## Operation: getV3Projects
Get a projects list for authenticated user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "order_by": {
      "type": "string",
      "description": "Return projects ordered by field",
      "enum": [
        "id",
        "name",
        "path",
        "created_at",
        "updated_at",
        "last_activity_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return projects sorted in ascending and descending order",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "archived": {
      "type": "boolean",
      "description": "Limit by archived status"
    },
    "visibility": {
      "type": "string",
      "description": "Limit by visibility",
      "enum": [
        "public",
        "internal",
        "private"
      ]
    },
    "search": {
      "type": "string",
      "description": "Return list of authorized projects matching the search criteria"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "simple": {
      "type": "boolean",
      "description": "Return only the ID, URL, name, and path of each project"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BasicProjectDetails"
}
```
## Operation: postV3Projects
Create new project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the project"
    },
    "path": {
      "type": "string",
      "description": "The path of the repository"
    },
    "description": {
      "type": "string",
      "description": "The description of the project"
    },
    "issues_enabled": {
      "type": "boolean",
      "description": "Flag indication if the issue tracker is enabled"
    },
    "merge_requests_enabled": {
      "type": "boolean",
      "description": "Flag indication if merge requests are enabled"
    },
    "wiki_enabled": {
      "type": "boolean",
      "description": "Flag indication if the wiki is enabled"
    },
    "builds_enabled": {
      "type": "boolean",
      "description": "Flag indication if builds are enabled"
    },
    "snippets_enabled": {
      "type": "boolean",
      "description": "Flag indication if snippets are enabled"
    },
    "shared_runners_enabled": {
      "type": "boolean",
      "description": "Flag indication if shared runners are enabled for that project"
    },
    "container_registry_enabled": {
      "type": "boolean",
      "description": "Flag indication if the container registry is enabled for that project"
    },
    "lfs_enabled": {
      "type": "boolean",
      "description": "Flag indication if Git LFS is enabled for that project"
    },
    "public": {
      "type": "boolean",
      "description": "Create a public project. The same as visibility_level = 20."
    },
    "visibility_level": {
      "type": "integer",
      "format": "int32",
      "description": "Create a public project. The same as visibility_level = 20.",
      "enum": [
        0,
        10,
        20
      ]
    },
    "public_builds": {
      "type": "boolean",
      "description": "Perform public builds"
    },
    "request_access_enabled": {
      "type": "boolean",
      "description": "Allow users to request member access"
    },
    "only_allow_merge_if_build_succeeds": {
      "type": "boolean",
      "description": "Only allow to merge if builds succeed"
    },
    "only_allow_merge_if_all_discussions_are_resolved": {
      "type": "boolean",
      "description": "Only allow to merge if all discussions are resolved"
    },
    "namespace_id": {
      "type": "integer",
      "format": "int32",
      "description": "Namespace ID for the new project. Default to the user namespace."
    },
    "import_url": {
      "type": "string",
      "description": "URL from which the project is imported"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: getV3ProjectsAll
Get all projects for admin user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "order_by": {
      "type": "string",
      "description": "Return projects ordered by field",
      "enum": [
        "id",
        "name",
        "path",
        "created_at",
        "updated_at",
        "last_activity_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return projects sorted in ascending and descending order",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "archived": {
      "type": "boolean",
      "description": "Limit by archived status"
    },
    "visibility": {
      "type": "string",
      "description": "Limit by visibility",
      "enum": [
        "public",
        "internal",
        "private"
      ]
    },
    "search": {
      "type": "string",
      "description": "Return list of authorized projects matching the search criteria"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "simple": {
      "type": "boolean",
      "description": "Return only the ID, URL, name, and path of each project"
    },
    "statistics": {
      "type": "boolean",
      "description": "Include project statistics"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BasicProjectDetails"
}
```
## Operation: postV3ProjectsForkId
Fork new project for the current user or provided namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "namespace": {
      "type": "string",
      "description": "The ID or name of the namespace that the project will be forked into"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: getV3ProjectsOwned
Get an owned projects list for authenticated user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "order_by": {
      "type": "string",
      "description": "Return projects ordered by field",
      "enum": [
        "id",
        "name",
        "path",
        "created_at",
        "updated_at",
        "last_activity_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return projects sorted in ascending and descending order",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "archived": {
      "type": "boolean",
      "description": "Limit by archived status"
    },
    "visibility": {
      "type": "string",
      "description": "Limit by visibility",
      "enum": [
        "public",
        "internal",
        "private"
      ]
    },
    "search": {
      "type": "string",
      "description": "Return list of authorized projects matching the search criteria"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "simple": {
      "type": "boolean",
      "description": "Return only the ID, URL, name, and path of each project"
    },
    "statistics": {
      "type": "boolean",
      "description": "Include project statistics"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BasicProjectDetails"
}
```
## Operation: getV3ProjectsSearchQuery
Search for projects the current user has access to

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The project name to be searched"
    },
    "order_by": {
      "type": "string",
      "description": "Return projects ordered by field",
      "enum": [
        "id",
        "name",
        "path",
        "created_at",
        "updated_at",
        "last_activity_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return projects sorted in ascending and descending order",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: getV3ProjectsStarred
Gets starred project for the authenticated user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "order_by": {
      "type": "string",
      "description": "Return projects ordered by field",
      "enum": [
        "id",
        "name",
        "path",
        "created_at",
        "updated_at",
        "last_activity_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return projects sorted in ascending and descending order",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "archived": {
      "type": "boolean",
      "description": "Limit by archived status"
    },
    "visibility": {
      "type": "string",
      "description": "Limit by visibility",
      "enum": [
        "public",
        "internal",
        "private"
      ]
    },
    "search": {
      "type": "string",
      "description": "Return list of authorized projects matching the search criteria"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "simple": {
      "type": "boolean",
      "description": "Return only the ID, URL, name, and path of each project"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BasicProjectDetails"
}
```
## Operation: postV3ProjectsUserUserId
Create new project for a specified user. Only available to admin users.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the project"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a user"
    },
    "default_branch": {
      "type": "string",
      "description": "The default branch of the project"
    },
    "description": {
      "type": "string",
      "description": "The description of the project"
    },
    "issues_enabled": {
      "type": "boolean",
      "description": "Flag indication if the issue tracker is enabled"
    },
    "merge_requests_enabled": {
      "type": "boolean",
      "description": "Flag indication if merge requests are enabled"
    },
    "wiki_enabled": {
      "type": "boolean",
      "description": "Flag indication if the wiki is enabled"
    },
    "builds_enabled": {
      "type": "boolean",
      "description": "Flag indication if builds are enabled"
    },
    "snippets_enabled": {
      "type": "boolean",
      "description": "Flag indication if snippets are enabled"
    },
    "shared_runners_enabled": {
      "type": "boolean",
      "description": "Flag indication if shared runners are enabled for that project"
    },
    "container_registry_enabled": {
      "type": "boolean",
      "description": "Flag indication if the container registry is enabled for that project"
    },
    "lfs_enabled": {
      "type": "boolean",
      "description": "Flag indication if Git LFS is enabled for that project"
    },
    "public": {
      "type": "boolean",
      "description": "Create a public project. The same as visibility_level = 20."
    },
    "visibility_level": {
      "type": "integer",
      "format": "int32",
      "description": "Create a public project. The same as visibility_level = 20.",
      "enum": [
        0,
        10,
        20
      ]
    },
    "public_builds": {
      "type": "boolean",
      "description": "Perform public builds"
    },
    "request_access_enabled": {
      "type": "boolean",
      "description": "Allow users to request member access"
    },
    "only_allow_merge_if_build_succeeds": {
      "type": "boolean",
      "description": "Only allow to merge if builds succeed"
    },
    "only_allow_merge_if_all_discussions_are_resolved": {
      "type": "boolean",
      "description": "Only allow to merge if all discussions are resolved"
    },
    "namespace_id": {
      "type": "integer",
      "format": "int32",
      "description": "Namespace ID for the new project. Default to the user namespace."
    },
    "import_url": {
      "type": "string",
      "description": "URL from which the project is imported"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: getV3ProjectsVisible
Get a list of visible projects for authenticated user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "order_by": {
      "type": "string",
      "description": "Return projects ordered by field",
      "enum": [
        "id",
        "name",
        "path",
        "created_at",
        "updated_at",
        "last_activity_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return projects sorted in ascending and descending order",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "archived": {
      "type": "boolean",
      "description": "Limit by archived status"
    },
    "visibility": {
      "type": "string",
      "description": "Limit by visibility",
      "enum": [
        "public",
        "internal",
        "private"
      ]
    },
    "search": {
      "type": "string",
      "description": "Return list of authorized projects matching the search criteria"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "simple": {
      "type": "boolean",
      "description": "Return only the ID, URL, name, and path of each project"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BasicProjectDetails"
}
```
## Operation: deleteV3ProjectsId
Remove a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsId
Get a single project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectWithAccess"
}
```
## Operation: putV3ProjectsId
Update an existing project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "name": {
      "type": "string",
      "description": "The name of the project"
    },
    "default_branch": {
      "type": "string",
      "description": "The default branch of the project"
    },
    "path": {
      "type": "string",
      "description": "The path of the repository"
    },
    "description": {
      "type": "string",
      "description": "The description of the project"
    },
    "issues_enabled": {
      "type": "boolean",
      "description": "Flag indication if the issue tracker is enabled"
    },
    "merge_requests_enabled": {
      "type": "boolean",
      "description": "Flag indication if merge requests are enabled"
    },
    "wiki_enabled": {
      "type": "boolean",
      "description": "Flag indication if the wiki is enabled"
    },
    "builds_enabled": {
      "type": "boolean",
      "description": "Flag indication if builds are enabled"
    },
    "snippets_enabled": {
      "type": "boolean",
      "description": "Flag indication if snippets are enabled"
    },
    "shared_runners_enabled": {
      "type": "boolean",
      "description": "Flag indication if shared runners are enabled for that project"
    },
    "container_registry_enabled": {
      "type": "boolean",
      "description": "Flag indication if the container registry is enabled for that project"
    },
    "lfs_enabled": {
      "type": "boolean",
      "description": "Flag indication if Git LFS is enabled for that project"
    },
    "public": {
      "type": "boolean",
      "description": "Create a public project. The same as visibility_level = 20."
    },
    "visibility_level": {
      "type": "integer",
      "format": "int32",
      "description": "Create a public project. The same as visibility_level = 20.",
      "enum": [
        0,
        10,
        20
      ]
    },
    "public_builds": {
      "type": "boolean",
      "description": "Perform public builds"
    },
    "request_access_enabled": {
      "type": "boolean",
      "description": "Allow users to request member access"
    },
    "only_allow_merge_if_build_succeeds": {
      "type": "boolean",
      "description": "Only allow to merge if builds succeed"
    },
    "only_allow_merge_if_all_discussions_are_resolved": {
      "type": "boolean",
      "description": "Only allow to merge if all discussions are resolved"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: v3.projects.id._ref.ref._trigger.builds.post
Trigger a GitLab project build

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "ref": {
      "type": "string",
      "description": "The commit sha or name of a branch or tag"
    },
    "token": {
      "type": "string",
      "description": "The unique token of trigger"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "ref",
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TriggerRequest"
}
```
## Operation: getV3ProjectsIdAccessRequests
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessRequester"
}
```
## Operation: postV3ProjectsIdAccessRequests
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessRequester"
}
```
## Operation: deleteV3ProjectsIdAccessRequestsUserId
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the access requester"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdAccessRequestsUserIdApprove
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the access requester"
    },
    "access_level": {
      "type": "integer",
      "format": "int32",
      "description": "A valid access level (defaults: `30`, developer access level)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: postV3ProjectsIdArchive
Archive a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: getV3ProjectsIdBoards
This feature was introduced in 8.13

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Board"
}
```
## Operation: getV3ProjectsIdBoardsBoardIdLists
Does not include `backlog` and `done` lists. This feature was introduced in 8.13

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "board_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a board"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "board_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/List"
}
```
## Operation: postV3ProjectsIdBoardsBoardIdLists
This feature was introduced in 8.13

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "board_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a board"
    },
    "label_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an existing label"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "board_id",
    "label_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/List"
}
```
## Operation: deleteV3ProjectsIdBoardsBoardIdListsListId
This feature was introduced in 8.13

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "board_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a board"
    },
    "list_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a board list"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "board_id",
    "list_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/List"
}
```
## Operation: getV3ProjectsIdBoardsBoardIdListsListId
This feature was introduced in 8.13

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "board_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a board"
    },
    "list_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a list"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "board_id",
    "list_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/List"
}
```
## Operation: putV3ProjectsIdBoardsBoardIdListsListId
This feature was introduced in 8.13

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "board_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a board"
    },
    "list_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a list"
    },
    "position": {
      "type": "integer",
      "format": "int32",
      "description": "The position of the list"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "board_id",
    "list_id",
    "position"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/List"
}
```
## Operation: getV3ProjectsIdBuilds
Get a project builds

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "scope": {
      "type": "string",
      "description": "The scope of builds to show",
      "enum": [
        "pending",
        "running",
        "failed",
        "success",
        "canceled"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: getV3ProjectsIdBuildsArtifactsRefNameDownload
This feature was introduced in GitLab 8.10

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "ref_name": {
      "type": "string",
      "description": "The ref from repository"
    },
    "job": {
      "type": "string",
      "description": "The name for the build"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "ref_name",
    "job"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdBuildsBuildId
Get a specific build of a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "build_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a build"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "build_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: getV3ProjectsIdBuildsBuildIdArtifacts
This feature was introduced in GitLab 8.5

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "build_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a build"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "build_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdBuildsBuildIdArtifactsKeep
Keep the artifacts to prevent them from being deleted

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "build_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a build"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "build_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: postV3ProjectsIdBuildsBuildIdCancel
Cancel a specific build of a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "build_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a build"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "build_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: postV3ProjectsIdBuildsBuildIdErase
Erase build (remove artifacts and build trace)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "build_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a build"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "build_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: postV3ProjectsIdBuildsBuildIdPlay
This feature was added in GitLab 8.11

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "build_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a Build"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "build_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: postV3ProjectsIdBuildsBuildIdRetry
Retry a specific build of a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "build_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a build"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "build_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: getV3ProjectsIdBuildsBuildIdTrace
Get a trace of a specific build of a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "build_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a build"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "build_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdDeployKeys
Get a specific project's deploy keys

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: postV3ProjectsIdDeployKeys
Add new deploy key to currently authenticated user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key": {
      "type": "string",
      "description": "The new deploy key"
    },
    "title": {
      "type": "string",
      "description": "The name of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key",
    "title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: deleteV3ProjectsIdDeployKeysKeyId
Delete deploy key for a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: getV3ProjectsIdDeployKeysKeyId
Get single deploy key

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: deleteV3ProjectsIdDeployKeysKeyIdDisable
This feature was added in GitLab 8.11

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: postV3ProjectsIdDeployKeysKeyIdEnable
This feature was added in GitLab 8.11

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: getV3ProjectsIdDeployments
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: getV3ProjectsIdDeploymentsDeploymentId
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "deployment_id": {
      "type": "integer",
      "format": "int32",
      "description": "The deployment ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "deployment_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Deployment"
}
```
## Operation: getV3ProjectsIdEnvironments
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Environment"
}
```
## Operation: postV3ProjectsIdEnvironments
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "name": {
      "type": "string",
      "description": "The name of the environment to be created"
    },
    "external_url": {
      "type": "string",
      "description": "URL on which this deployment is viewable"
    },
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Environment"
}
```
## Operation: deleteV3ProjectsIdEnvironmentsEnvironmentId
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "environment_id": {
      "type": "integer",
      "format": "int32",
      "description": "The environment ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "environment_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Environment"
}
```
## Operation: putV3ProjectsIdEnvironmentsEnvironmentId
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "environment_id": {
      "type": "integer",
      "format": "int32",
      "description": "The environment ID"
    },
    "name": {
      "type": "string",
      "description": "The new environment name"
    },
    "external_url": {
      "type": "string",
      "description": "The new URL on which this deployment is viewable"
    },
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "environment_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Environment"
}
```
## Operation: getV3ProjectsIdEvents
Get events for a single project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Event"
}
```
## Operation: deleteV3ProjectsIdFork
Remove a forked_from relationship

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdForkForkedFromId
Mark this project as forked from another

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "forked_from_id": {
      "type": "string",
      "description": "The ID of the project it was forked from"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "forked_from_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdHooks
Get project hooks

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectHook"
}
```
## Operation: postV3ProjectsIdHooks
Add hook to project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "url": {
      "type": "string",
      "description": "The URL to send the request to"
    },
    "push_events": {
      "type": "boolean",
      "description": "Trigger hook on push events"
    },
    "issues_events": {
      "type": "boolean",
      "description": "Trigger hook on issues events"
    },
    "merge_requests_events": {
      "type": "boolean",
      "description": "Trigger hook on merge request events"
    },
    "tag_push_events": {
      "type": "boolean",
      "description": "Trigger hook on tag push events"
    },
    "note_events": {
      "type": "boolean",
      "description": "Trigger hook on note(comment) events"
    },
    "build_events": {
      "type": "boolean",
      "description": "Trigger hook on build events"
    },
    "pipeline_events": {
      "type": "boolean",
      "description": "Trigger hook on pipeline events"
    },
    "wiki_page_events": {
      "type": "boolean",
      "description": "Trigger hook on wiki events"
    },
    "enable_ssl_verification": {
      "type": "boolean",
      "description": "Do SSL verification when triggering the hook"
    },
    "token": {
      "type": "string",
      "description": "Secret token to validate received payloads; this will not be returned in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "url"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectHook"
}
```
## Operation: deleteV3ProjectsIdHooksHookId
Deletes project hook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "hook_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the hook to delete"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "hook_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectHook"
}
```
## Operation: getV3ProjectsIdHooksHookId
Get a project hook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "hook_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project hook"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "hook_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectHook"
}
```
## Operation: putV3ProjectsIdHooksHookId
Update an existing project hook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "hook_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the hook to update"
    },
    "url": {
      "type": "string",
      "description": "The URL to send the request to"
    },
    "push_events": {
      "type": "boolean",
      "description": "Trigger hook on push events"
    },
    "issues_events": {
      "type": "boolean",
      "description": "Trigger hook on issues events"
    },
    "merge_requests_events": {
      "type": "boolean",
      "description": "Trigger hook on merge request events"
    },
    "tag_push_events": {
      "type": "boolean",
      "description": "Trigger hook on tag push events"
    },
    "note_events": {
      "type": "boolean",
      "description": "Trigger hook on note(comment) events"
    },
    "build_events": {
      "type": "boolean",
      "description": "Trigger hook on build events"
    },
    "pipeline_events": {
      "type": "boolean",
      "description": "Trigger hook on pipeline events"
    },
    "wiki_page_events": {
      "type": "boolean",
      "description": "Trigger hook on wiki events"
    },
    "enable_ssl_verification": {
      "type": "boolean",
      "description": "Do SSL verification when triggering the hook"
    },
    "token": {
      "type": "string",
      "description": "Secret token to validate received payloads; this will not be returned in the response"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "hook_id",
    "url"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectHook"
}
```
## Operation: getV3ProjectsIdIssues
Get a list of project issues

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "state": {
      "type": "string",
      "description": "Return opened, closed, or all issues",
      "enum": [
        "opened",
        "closed",
        "all"
      ]
    },
    "iid": {
      "type": "integer",
      "format": "int32",
      "description": "Return the issue having the given `iid`"
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of label names"
    },
    "milestone": {
      "type": "string",
      "description": "Return issues for a specific milestone"
    },
    "order_by": {
      "type": "string",
      "description": "Return issues ordered by `created_at` or `updated_at` fields.",
      "enum": [
        "created_at",
        "updated_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return issues sorted in `asc` or `desc` order.",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: postV3ProjectsIdIssues
Create a new project issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "title": {
      "type": "string",
      "description": "The title of an issue"
    },
    "created_at": {
      "type": "string",
      "format": "date-time",
      "description": "Date time when the issue was created. Available only for admins and project owners."
    },
    "merge_request_for_resolving_discussions": {
      "type": "integer",
      "format": "int32",
      "description": "The IID of a merge request for which to resolve discussions"
    },
    "description": {
      "type": "string",
      "description": "The description of an issue"
    },
    "assignee_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a user to assign issue"
    },
    "milestone_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a milestone to assign issue"
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of label names"
    },
    "due_date": {
      "type": "string",
      "description": "Date time string in the format YEAR-MONTH-DAY"
    },
    "confidential": {
      "type": "boolean",
      "description": "Boolean parameter if the issue should be confidential"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: deleteV3ProjectsIdIssuesIssueId
Delete a project issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project issue"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdIssuesIssueId
Get a single project issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project issue"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: putV3ProjectsIdIssuesIssueId
Update an existing issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project issue"
    },
    "title": {
      "type": "string",
      "description": "The title of an issue"
    },
    "updated_at": {
      "type": "string",
      "format": "date-time",
      "description": "Date time when the issue was updated. Available only for admins and project owners."
    },
    "state_event": {
      "type": "string",
      "description": "State of the issue",
      "enum": [
        "reopen",
        "close"
      ]
    },
    "description": {
      "type": "string",
      "description": "The description of an issue"
    },
    "assignee_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a user to assign issue"
    },
    "milestone_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a milestone to assign issue"
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of label names"
    },
    "due_date": {
      "type": "string",
      "description": "Date time string in the format YEAR-MONTH-DAY"
    },
    "confidential": {
      "type": "boolean",
      "description": "Boolean parameter if the issue should be confidential"
    },
    "created_at": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: postV3ProjectsIdIssuesIssueIdAddSpentTime
Add spent time for a project issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project issue"
    },
    "duration": {
      "type": "string",
      "description": "The duration to be parsed"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id",
    "duration"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdIssuesIssueIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an Issue, Merge Request or Snippet"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdIssuesIssueIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of a award_emoji (without colons)"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an award emoji"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the award"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdIssuesIssueIdMove
Move an existing issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project issue"
    },
    "to_project_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the new project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id",
    "to_project_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of a award_emoji (without colons)"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "id",
    "issue_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an award emoji"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "issue_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the award"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "issue_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdIssuesIssueIdResetSpentTime
Reset spent time for a project issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project issue"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdIssuesIssueIdResetTimeEstimate
Reset the time estimate for a project issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project issue"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdIssuesIssueIdTimeEstimate
Set a time estimate for a project issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project issue"
    },
    "duration": {
      "type": "string",
      "description": "The duration to be parsed"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id",
    "duration"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdIssuesIssueIdTimeStats
Show time stats for a project issue

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project issue"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdIssuesIssueIdTodo
Create a todo on an issuable

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "issue_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an issuable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "issue_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Todo"
}
```
## Operation: getV3ProjectsIdIssuesNoteableIdNotes
Get a list of project +noteable+ notes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: postV3ProjectsIdIssuesNoteableIdNotes
Create a new +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "body": {
      "type": "string",
      "description": "The content of a note"
    },
    "created_at": {
      "type": "string",
      "description": "The creation date of the note"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: deleteV3ProjectsIdIssuesNoteableIdNotesNoteId
Delete a +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "note_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a note"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: getV3ProjectsIdIssuesNoteableIdNotesNoteId
Get a single +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "note_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a note"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "note_id",
    "noteable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: putV3ProjectsIdIssuesNoteableIdNotesNoteId
Update an existing +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "note_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a note"
    },
    "body": {
      "type": "string",
      "description": "The content of a note"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id",
    "note_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: deleteV3ProjectsIdIssuesSubscribableIdSubscription
Unsubscribe from a resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "subscribable_id": {
      "type": "string",
      "description": "The ID of a resource"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "subscribable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: postV3ProjectsIdIssuesSubscribableIdSubscription
Subscribe to a resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "subscribable_id": {
      "type": "string",
      "description": "The ID of a resource"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "subscribable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: getV3ProjectsIdKeys
Get a specific project's deploy keys

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: postV3ProjectsIdKeys
Add new deploy key to currently authenticated user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key": {
      "type": "string",
      "description": "The new deploy key"
    },
    "title": {
      "type": "string",
      "description": "The name of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key",
    "title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: deleteV3ProjectsIdKeysKeyId
Delete deploy key for a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: getV3ProjectsIdKeysKeyId
Get single deploy key

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: deleteV3ProjectsIdKeysKeyIdDisable
This feature was added in GitLab 8.11

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: postV3ProjectsIdKeysKeyIdEnable
This feature was added in GitLab 8.11

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the project"
    },
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the deploy key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: deleteV3ProjectsIdLabels
Delete an existing label

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "name": {
      "type": "string",
      "description": "The name of the label to be deleted"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: getV3ProjectsIdLabels
Get all labels of the project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: postV3ProjectsIdLabels
Create a new label

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "name": {
      "type": "string",
      "description": "The name of the label to be created"
    },
    "color": {
      "type": "string",
      "description": "The color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)"
    },
    "description": {
      "type": "string",
      "description": "The description of label to be created"
    },
    "priority": {
      "type": "integer",
      "format": "int32",
      "description": "The priority of the label"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "name",
    "color"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: putV3ProjectsIdLabels
Update an existing label. At least one optional parameter is required.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "name": {
      "type": "string",
      "description": "The name of the label to be updated"
    },
    "new_name": {
      "type": "string",
      "description": "The new name of the label"
    },
    "color": {
      "type": "string",
      "description": "The new color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)"
    },
    "description": {
      "type": "string",
      "description": "The new description of label"
    },
    "priority": {
      "type": "integer",
      "format": "int32",
      "description": "The priority of the label"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: deleteV3ProjectsIdLabelsSubscribableIdSubscription
Unsubscribe from a resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "subscribable_id": {
      "type": "string",
      "description": "The ID of a resource"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "subscribable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: postV3ProjectsIdLabelsSubscribableIdSubscription
Subscribe to a resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "subscribable_id": {
      "type": "string",
      "description": "The ID of a resource"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "subscribable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Label"
}
```
## Operation: getV3ProjectsIdMembers
Gets a list of group or project members viewable by the authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "query": {
      "type": "string",
      "description": "A query string to search for members"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: postV3ProjectsIdMembers
Adds a member to a group or project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the new member"
    },
    "access_level": {
      "type": "integer",
      "format": "int32",
      "description": "A valid access level (defaults: `30`, developer access level)"
    },
    "expires_at": {
      "type": "string",
      "format": "date-time",
      "description": "Date string in the format YEAR-MONTH-DAY"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id",
    "access_level"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: deleteV3ProjectsIdMembersUserId
Removes a user from a group or project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the member"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdMembersUserId
Gets a member of a group or project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the member"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: putV3ProjectsIdMembersUserId
Updates a member of a group or project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "The user ID of the new member"
    },
    "access_level": {
      "type": "integer",
      "format": "int32",
      "description": "A valid access level"
    },
    "expires_at": {
      "type": "string",
      "format": "date-time",
      "description": "Date string in the format YEAR-MONTH-DAY"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "user_id",
    "access_level"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Member"
}
```
## Operation: getV3ProjectsIdMergeRequestMergeRequestId
This endpoint is deprecated and will be removed in GitLab 9.0.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a merge request"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: putV3ProjectsIdMergeRequestMergeRequestId
Update a merge request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "title": {
      "type": "string",
      "description": "The title of the merge request"
    },
    "target_branch": {
      "type": "string",
      "description": "The target branch"
    },
    "state_event": {
      "type": "string",
      "description": "Status of the merge request",
      "enum": [
        "close",
        "reopen",
        "merge"
      ]
    },
    "description": {
      "type": "string",
      "description": "The description of the merge request"
    },
    "assignee_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a user to assign the merge request"
    },
    "milestone_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a milestone to assign the merge request"
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of label names"
    },
    "remove_source_branch": {
      "type": "boolean",
      "description": "Remove source branch when merging"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds
Cancel merge if "Merge When Pipeline Succeeds" is enabled

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: getV3ProjectsIdMergeRequestMergeRequestIdChanges
Show the merge request changes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequestChanges"
}
```
## Operation: getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues
List issues that will be closed on merge

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MRNote"
}
```
## Operation: getV3ProjectsIdMergeRequestMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MRNote"
}
```
## Operation: postV3ProjectsIdMergeRequestMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "note": {
      "type": "string",
      "description": "The text of the comment"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "note",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MRNote"
}
```
## Operation: getV3ProjectsIdMergeRequestMergeRequestIdCommits
Get the commits of a merge request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoCommit"
}
```
## Operation: putV3ProjectsIdMergeRequestMergeRequestIdMerge
Merge a merge request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_commit_message": {
      "type": "string",
      "description": "Custom merge commit message"
    },
    "should_remove_source_branch": {
      "type": "boolean",
      "description": "When true, the source branch will be deleted if possible"
    },
    "merge_when_build_succeeds": {
      "type": "boolean",
      "description": "When true, this merge request will be merged when the pipeline succeeds"
    },
    "sha": {
      "type": "string",
      "description": "When present, must have the HEAD SHA of the source branch"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: deleteV3ProjectsIdMergeRequestSubscribableIdSubscription
Unsubscribe from a resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "subscribable_id": {
      "type": "string",
      "description": "The ID of a resource"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "subscribable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: postV3ProjectsIdMergeRequestSubscribableIdSubscription
Subscribe to a resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "subscribable_id": {
      "type": "string",
      "description": "The ID of a resource"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "subscribable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: getV3ProjectsIdMergeRequests
List merge requests

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "state": {
      "type": "string",
      "description": "Return opened, closed, merged, or all merge requests",
      "enum": [
        "opened",
        "closed",
        "merged",
        "all"
      ]
    },
    "order_by": {
      "type": "string",
      "description": "Return merge requests ordered by `created_at` or `updated_at` fields.",
      "enum": [
        "created_at",
        "updated_at"
      ]
    },
    "sort": {
      "type": "string",
      "description": "Return merge requests sorted in `asc` or `desc` order.",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "iid": {
      "type": "array",
      "description": "The IID of the merge requests"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: postV3ProjectsIdMergeRequests
Create a merge request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "title": {
      "type": "string",
      "description": "The title of the merge request"
    },
    "source_branch": {
      "type": "string",
      "description": "The source branch"
    },
    "target_branch": {
      "type": "string",
      "description": "The target branch"
    },
    "target_project_id": {
      "type": "integer",
      "format": "int32",
      "description": "The target project of the merge request defaults to the :id of the project"
    },
    "description": {
      "type": "string",
      "description": "The description of the merge request"
    },
    "assignee_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a user to assign the merge request"
    },
    "milestone_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a milestone to assign the merge request"
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of label names"
    },
    "remove_source_branch": {
      "type": "boolean",
      "description": "Remove source branch when merging"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "title",
    "source_branch",
    "target_branch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: deleteV3ProjectsIdMergeRequestsMergeRequestId
Delete a merge request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a merge request"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestId
Get a single merge request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: putV3ProjectsIdMergeRequestsMergeRequestId
Update a merge request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "title": {
      "type": "string",
      "description": "The title of the merge request"
    },
    "target_branch": {
      "type": "string",
      "description": "The target branch"
    },
    "state_event": {
      "type": "string",
      "description": "Status of the merge request",
      "enum": [
        "close",
        "reopen",
        "merge"
      ]
    },
    "description": {
      "type": "string",
      "description": "The description of the merge request"
    },
    "assignee_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a user to assign the merge request"
    },
    "milestone_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a milestone to assign the merge request"
    },
    "labels": {
      "type": "string",
      "description": "Comma-separated list of label names"
    },
    "remove_source_branch": {
      "type": "boolean",
      "description": "Remove source branch when merging"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime
Add spent time for a project merge_request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project merge_request"
    },
    "duration": {
      "type": "string",
      "description": "The duration to be parsed"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id",
    "duration"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an Issue, Merge Request or Snippet"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of a award_emoji (without colons)"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an award emoji"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the award"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds
Cancel merge if "Merge When Pipeline Succeeds" is enabled

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdChanges
Show the merge request changes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequestChanges"
}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues
List issues that will be closed on merge

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MRNote"
}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MRNote"
}
```
## Operation: postV3ProjectsIdMergeRequestsMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "note": {
      "type": "string",
      "description": "The text of the comment"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "note",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MRNote"
}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdCommits
Get the commits of a merge request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoCommit"
}
```
## Operation: putV3ProjectsIdMergeRequestsMergeRequestIdMerge
Merge a merge request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_commit_message": {
      "type": "string",
      "description": "Custom merge commit message"
    },
    "should_remove_source_branch": {
      "type": "boolean",
      "description": "When true, the source branch will be deleted if possible"
    },
    "merge_when_build_succeeds": {
      "type": "boolean",
      "description": "When true, this merge request will be merged when the pipeline succeeds"
    },
    "sha": {
      "type": "string",
      "description": "When present, must have the HEAD SHA of the source branch"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of a award_emoji (without colons)"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "id",
    "merge_request_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an award emoji"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "merge_request_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the award"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "merge_request_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime
Reset spent time for a project merge_request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project merge_request"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate
Reset the time estimate for a project merge_request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project merge_request"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate
Set a time estimate for a project merge_request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project merge_request"
    },
    "duration": {
      "type": "string",
      "description": "The duration to be parsed"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id",
    "duration"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats
Show time stats for a project merge_request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project merge_request"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdMergeRequestsMergeRequestIdTodo
Create a todo on an issuable

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an issuable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Todo"
}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdVersions
This feature was introduced in GitLab 8.12.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a merge request"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequestDiff"
}
```
## Operation: getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId
This feature was introduced in GitLab 8.12.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "merge_request_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a merge request"
    },
    "version_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a merge request diff version"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "merge_request_id",
    "version_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequestDiffFull"
}
```
## Operation: getV3ProjectsIdMergeRequestsNoteableIdNotes
Get a list of project +noteable+ notes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: postV3ProjectsIdMergeRequestsNoteableIdNotes
Create a new +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "body": {
      "type": "string",
      "description": "The content of a note"
    },
    "created_at": {
      "type": "string",
      "description": "The creation date of the note"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
Delete a +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "note_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a note"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
Get a single +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "note_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a note"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "note_id",
    "noteable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
Update an existing +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "note_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a note"
    },
    "body": {
      "type": "string",
      "description": "The content of a note"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id",
    "note_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription
Unsubscribe from a resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "subscribable_id": {
      "type": "string",
      "description": "The ID of a resource"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "subscribable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: postV3ProjectsIdMergeRequestsSubscribableIdSubscription
Subscribe to a resource

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "subscribable_id": {
      "type": "string",
      "description": "The ID of a resource"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "subscribable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MergeRequest"
}
```
## Operation: getV3ProjectsIdMilestones
Get a list of project milestones

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "state": {
      "type": "string",
      "description": "Return \"active\", \"closed\", or \"all\" milestones",
      "enum": [
        "active",
        "closed",
        "all"
      ]
    },
    "iid": {
      "type": "array",
      "description": "The IID of the milestone"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Milestone"
}
```
## Operation: postV3ProjectsIdMilestones
Create a new project milestone

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "title": {
      "type": "string",
      "description": "The title of the milestone"
    },
    "description": {
      "type": "string",
      "description": "The description of the milestone"
    },
    "due_date": {
      "type": "string",
      "description": "The due date of the milestone. The ISO 8601 date format (%Y-%m-%d)"
    },
    "start_date": {
      "type": "string",
      "description": "The start date of the milestone. The ISO 8601 date format (%Y-%m-%d)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Milestone"
}
```
## Operation: getV3ProjectsIdMilestonesMilestoneId
Get a single project milestone

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "milestone_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project milestone"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "milestone_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Milestone"
}
```
## Operation: putV3ProjectsIdMilestonesMilestoneId
Update an existing project milestone

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "milestone_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project milestone"
    },
    "title": {
      "type": "string",
      "description": "The title of the milestone"
    },
    "state_event": {
      "type": "string",
      "description": "The state event of the milestone ",
      "enum": [
        "close",
        "activate"
      ]
    },
    "description": {
      "type": "string",
      "description": "The description of the milestone"
    },
    "due_date": {
      "type": "string",
      "description": "The due date of the milestone. The ISO 8601 date format (%Y-%m-%d)"
    },
    "start_date": {
      "type": "string",
      "description": "The start date of the milestone. The ISO 8601 date format (%Y-%m-%d)"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "milestone_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Milestone"
}
```
## Operation: getV3ProjectsIdMilestonesMilestoneIdIssues
Get all issues for a single project milestone

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "milestone_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project milestone"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "milestone_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Issue"
}
```
## Operation: getV3ProjectsIdNotificationSettings
This feature was introduced in GitLab 8.12

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID or project ID or project NAMESPACE/PROJECT_NAME"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationSetting"
}
```
## Operation: putV3ProjectsIdNotificationSettings
This feature was introduced in GitLab 8.12

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The group ID or project ID or project NAMESPACE/PROJECT_NAME"
    },
    "level": {
      "type": "string",
      "description": "The project notification level"
    },
    "new_note": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "new_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reopen_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "close_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reassign_issue": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "new_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reopen_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "close_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "reassign_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "merge_merge_request": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "failed_pipeline": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    },
    "success_pipeline": {
      "type": "boolean",
      "description": "Enable/disable this notification"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NotificationSetting"
}
```
## Operation: postV3ProjectsIdPipeline
This feature was introduced in GitLab 8.14

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "ref": {
      "type": "string",
      "description": "Reference"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "ref"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Pipeline"
}
```
## Operation: getV3ProjectsIdPipelines
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "scope": {
      "type": "string",
      "description": "Either running, branches, or tags",
      "enum": [
        "running",
        "branches",
        "tags"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Pipeline"
}
```
## Operation: getV3ProjectsIdPipelinesPipelineId
This feature was introduced in GitLab 8.11

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "pipeline_id": {
      "type": "integer",
      "format": "int32",
      "description": "The pipeline ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "pipeline_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Pipeline"
}
```
## Operation: postV3ProjectsIdPipelinesPipelineIdCancel
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "pipeline_id": {
      "type": "integer",
      "format": "int32",
      "description": "The pipeline ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "pipeline_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Pipeline"
}
```
## Operation: postV3ProjectsIdPipelinesPipelineIdRetry
This feature was introduced in GitLab 8.11.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "pipeline_id": {
      "type": "integer",
      "format": "int32",
      "description": "The pipeline ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "pipeline_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Pipeline"
}
```
## Operation: getV3ProjectsIdRepositoryArchive
Get an archive of the repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "The commit sha of the archive to be downloaded"
    },
    "format": {
      "type": "string",
      "description": "The archive format"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdRepositoryBlobsSha
Get a raw file contents

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "The commit, branch name, or tag name"
    },
    "filepath": {
      "type": "string",
      "description": "The path to the file to display"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha",
    "filepath"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdRepositoryBranches
Get a project repository branches

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoBranch"
}
```
## Operation: postV3ProjectsIdRepositoryBranches
Create branch

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "branch_name": {
      "type": "string",
      "description": "The name of the branch"
    },
    "ref": {
      "type": "string",
      "description": "Create branch from commit sha or existing branch"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "branch_name",
    "ref"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoBranch"
}
```
## Operation: deleteV3ProjectsIdRepositoryBranchesBranch
Delete a branch

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "branch": {
      "type": "string",
      "description": "The name of the branch"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "branch"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdRepositoryBranchesBranch
Get a single branch

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "branch": {
      "type": "string",
      "description": "The name of the branch"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "branch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoBranch"
}
```
## Operation: putV3ProjectsIdRepositoryBranchesBranchProtect
Protect a single branch

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "branch": {
      "type": "string",
      "description": "The name of the branch"
    },
    "developers_can_push": {
      "type": "boolean",
      "description": "Flag if developers can push to that branch"
    },
    "developers_can_merge": {
      "type": "boolean",
      "description": "Flag if developers can merge to that branch"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "branch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoBranch"
}
```
## Operation: putV3ProjectsIdRepositoryBranchesBranchUnprotect
Unprotect a single branch

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "branch": {
      "type": "string",
      "description": "The name of the branch"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "branch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoBranch"
}
```
## Operation: getV3ProjectsIdRepositoryCommits
Get a project repository commits

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "ref_name": {
      "type": "string",
      "description": "The name of a repository branch or tag, if not given the default branch is used"
    },
    "since": {
      "type": "string",
      "description": "Only commits after or in this date will be returned"
    },
    "until": {
      "type": "string",
      "description": "Only commits before or in this date will be returned"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "The page for pagination"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "The number of results per page"
    },
    "path": {
      "type": "string",
      "description": "The file path"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoCommit"
}
```
## Operation: postV3ProjectsIdRepositoryCommits
This feature was introduced in GitLab 8.13

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "branch_name": {
      "type": "string",
      "description": "The name of branch"
    },
    "commit_message": {
      "type": "string",
      "description": "Commit message"
    },
    "actions": {
      "type": "array",
      "description": "Actions to perform in commit"
    },
    "author_email": {
      "type": "string",
      "description": "Author email for commit"
    },
    "author_name": {
      "type": "string",
      "description": "Author name for commit"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "branch_name",
    "commit_message",
    "actions"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoCommitDetail"
}
```
## Operation: getV3ProjectsIdRepositoryCommitsSha
Get a specific commit of a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "A commit sha, or the name of a branch or tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoCommitDetail"
}
```
## Operation: getV3ProjectsIdRepositoryCommitsShaBlob
Get a raw file contents

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "The commit, branch name, or tag name"
    },
    "filepath": {
      "type": "string",
      "description": "The path to the file to display"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha",
    "filepath"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdRepositoryCommitsShaBuilds
Get builds for a specific commit of a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "The SHA id of a commit"
    },
    "scope": {
      "type": "string",
      "description": "The scope of builds to show",
      "enum": [
        "pending",
        "running",
        "failed",
        "success",
        "canceled"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: postV3ProjectsIdRepositoryCommitsShaCherryPick
This feature was introduced in GitLab 8.15

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "A commit sha to be cherry picked"
    },
    "branch": {
      "type": "string",
      "description": "The name of the branch"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha",
    "branch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoCommit"
}
```
## Operation: getV3ProjectsIdRepositoryCommitsShaComments
Get a commit's comments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "sha": {
      "type": "string",
      "description": "A commit sha, or the name of a branch or tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitNote"
}
```
## Operation: postV3ProjectsIdRepositoryCommitsShaComments
Post comment to commit

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "The commit's SHA"
    },
    "note": {
      "type": "string",
      "description": "The text of the comment"
    },
    "path": {
      "type": "string",
      "description": "The file path"
    },
    "line": {
      "type": "integer",
      "format": "int32",
      "description": "The line number"
    },
    "line_type": {
      "type": "string",
      "description": "The type of the line",
      "enum": [
        "new",
        "old"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha",
    "note",
    "line",
    "line_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitNote"
}
```
## Operation: getV3ProjectsIdRepositoryCommitsShaDiff
Get the diff for a specific commit of a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "A commit sha, or the name of a branch or tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdRepositoryCommitsShaStatuses
Get a commit's statuses

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "The commit hash"
    },
    "ref": {
      "type": "string",
      "description": "The ref"
    },
    "stage": {
      "type": "string",
      "description": "The stage"
    },
    "name": {
      "type": "string",
      "description": "The name"
    },
    "all": {
      "type": "string",
      "description": "Show all statuses, default: false"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitStatus"
}
```
## Operation: getV3ProjectsIdRepositoryCompare
Compare two branches, tags, or commits

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "from": {
      "type": "string",
      "description": "The commit, branch name, or tag name to start comparison"
    },
    "to": {
      "type": "string",
      "description": "The commit, branch name, or tag name to stop comparison"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Compare"
}
```
## Operation: getV3ProjectsIdRepositoryContributors
Get repository contributors

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Contributor"
}
```
## Operation: deleteV3ProjectsIdRepositoryFiles
Delete an existing file in repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "file_path": {
      "type": "string",
      "description": "The path to new file. Ex. lib/class.rb"
    },
    "branch_name": {
      "type": "string",
      "description": "The name of branch"
    },
    "commit_message": {
      "type": "string",
      "description": "Commit Message"
    },
    "author_email": {
      "type": "string",
      "description": "The email of the author"
    },
    "author_name": {
      "type": "string",
      "description": "The name of the author"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "file_path",
    "branch_name",
    "commit_message"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdRepositoryFiles
Get a file from repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "file_path": {
      "type": "string",
      "description": "The path to the file. Ex. lib/class.rb"
    },
    "ref": {
      "type": "string",
      "description": "The name of branch, tag, or commit"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "file_path",
    "ref"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdRepositoryFiles
Create new file in repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "file_path": {
      "type": "string",
      "description": "The path to new file. Ex. lib/class.rb"
    },
    "branch_name": {
      "type": "string",
      "description": "The name of branch"
    },
    "commit_message": {
      "type": "string",
      "description": "Commit Message"
    },
    "author_email": {
      "type": "string",
      "description": "The email of the author"
    },
    "author_name": {
      "type": "string",
      "description": "The name of the author"
    },
    "content": {
      "type": "string",
      "description": "File content"
    },
    "encoding": {
      "type": "string",
      "description": "File encoding",
      "enum": [
        "base64"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "file_path",
    "branch_name",
    "commit_message",
    "content"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdRepositoryFiles
Update existing file in repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The project ID"
    },
    "file_path": {
      "type": "string",
      "description": "The path to new file. Ex. lib/class.rb"
    },
    "branch_name": {
      "type": "string",
      "description": "The name of branch"
    },
    "commit_message": {
      "type": "string",
      "description": "Commit Message"
    },
    "author_email": {
      "type": "string",
      "description": "The email of the author"
    },
    "author_name": {
      "type": "string",
      "description": "The name of the author"
    },
    "content": {
      "type": "string",
      "description": "File content"
    },
    "encoding": {
      "type": "string",
      "description": "File encoding",
      "enum": [
        "base64"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "file_path",
    "branch_name",
    "commit_message",
    "content"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteV3ProjectsIdRepositoryMergedBranches


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdRepositoryRawBlobsSha
Get a raw blob contents by blob sha

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "The commit, branch name, or tag name"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdRepositoryTags
Get a project repository tags

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoTag"
}
```
## Operation: postV3ProjectsIdRepositoryTags
Create a new repository tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "tag_name": {
      "type": "string",
      "description": "The name of the tag"
    },
    "ref": {
      "type": "string",
      "description": "The commit sha or branch name"
    },
    "message": {
      "type": "string",
      "description": "Specifying a message creates an annotated tag"
    },
    "release_description": {
      "type": "string",
      "description": "Specifying release notes stored in the GitLab database"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tag_name",
    "ref"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoTag"
}
```
## Operation: deleteV3ProjectsIdRepositoryTagsTagName
Delete a repository tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "tag_name": {
      "type": "string",
      "description": "The name of the tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tag_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdRepositoryTagsTagName
Get a single repository tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "tag_name": {
      "type": "string",
      "description": "The name of the tag"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tag_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoTag"
}
```
## Operation: postV3ProjectsIdRepositoryTagsTagNameRelease
Add a release note to a tag

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "tag_name": {
      "type": "string",
      "description": "The name of the tag"
    },
    "description": {
      "type": "string",
      "description": "Release notes with markdown support"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tag_name",
    "description"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Release"
}
```
## Operation: putV3ProjectsIdRepositoryTagsTagNameRelease
Update a tag's release note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "tag_name": {
      "type": "string",
      "description": "The name of the tag"
    },
    "description": {
      "type": "string",
      "description": "Release notes with markdown support"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "tag_name",
    "description"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Release"
}
```
## Operation: getV3ProjectsIdRepositoryTree
Get a project repository tree

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "ref_name": {
      "type": "string",
      "description": "The name of a repository branch or tag, if not given the default branch is used"
    },
    "path": {
      "type": "string",
      "description": "The path of the tree"
    },
    "recursive": {
      "type": "boolean",
      "description": "Used to get a recursive tree"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoTreeObject"
}
```
## Operation: getV3ProjectsIdRunners
Get runners available for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "scope": {
      "type": "string",
      "description": "The scope of specific runners to show",
      "enum": [
        "active",
        "paused",
        "online",
        "specific",
        "shared"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Runner"
}
```
## Operation: postV3ProjectsIdRunners
Enable a runner for a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "runner_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the runner"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "runner_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Runner"
}
```
## Operation: deleteV3ProjectsIdRunnersRunnerId
Disable project's runner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "runner_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the runner"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "runner_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Runner"
}
```
## Operation: putV3ProjectsIdServicesAsana
Set asana service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string",
      "description": "User API token"
    },
    "restrict_to_branch": {
      "type": "string",
      "description": "Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesAssembla
Set assembla service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The authentication token"
    },
    "subdomain": {
      "type": "string",
      "description": "Subdomain setting"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesBamboo
Set bamboo service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bamboo_url": {
      "type": "string",
      "description": "Bamboo root URL like https://bamboo.example.com"
    },
    "build_key": {
      "type": "string",
      "description": "Bamboo build plan key like"
    },
    "username": {
      "type": "string",
      "description": "A user with API access, if applicable"
    },
    "password": {
      "type": "string",
      "description": "Passord of the user"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "bamboo_url",
    "build_key",
    "username",
    "password",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesBugzilla
Set bugzilla service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "new_issue_url": {
      "type": "string",
      "description": "New issue URL"
    },
    "issues_url": {
      "type": "string",
      "description": "Issues URL"
    },
    "project_url": {
      "type": "string",
      "description": "Project URL"
    },
    "description": {
      "type": "string",
      "description": "Description"
    },
    "title": {
      "type": "string",
      "description": "Title"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "new_issue_url",
    "issues_url",
    "project_url",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesBuildkite
Set buildkite service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Buildkite project GitLab token"
    },
    "project_url": {
      "type": "string",
      "description": "The buildkite project URL"
    },
    "enable_ssl_verification": {
      "type": "boolean",
      "description": "Enable SSL verification for communication"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "project_url",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesBuildsEmail
Set builds-email service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipients": {
      "type": "string",
      "description": "Comma-separated list of recipient email addresses"
    },
    "add_pusher": {
      "type": "boolean",
      "description": "Add pusher to recipients list"
    },
    "notify_only_broken_builds": {
      "type": "boolean",
      "description": "Notify only broken builds"
    },
    "build_events": {
      "type": "string",
      "description": "Event will be triggered when a build status changes"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipients",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesCampfire
Set campfire service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Campfire token"
    },
    "subdomain": {
      "type": "string",
      "description": "Campfire subdomain"
    },
    "room": {
      "type": "string",
      "description": "Campfire room"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesCustomIssueTracker
Set custom-issue-tracker service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "new_issue_url": {
      "type": "string",
      "description": "New issue URL"
    },
    "issues_url": {
      "type": "string",
      "description": "Issues URL"
    },
    "project_url": {
      "type": "string",
      "description": "Project URL"
    },
    "description": {
      "type": "string",
      "description": "Description"
    },
    "title": {
      "type": "string",
      "description": "Title"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "new_issue_url",
    "issues_url",
    "project_url",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesDroneCi
Set drone-ci service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Drone CI token"
    },
    "drone_url": {
      "type": "string",
      "description": "Drone CI URL"
    },
    "enable_ssl_verification": {
      "type": "boolean",
      "description": "Enable SSL verification for communication"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "merge_request_events": {
      "type": "string",
      "description": "Event will be triggered when a merge request is created/updated/merged"
    },
    "tag_push_events": {
      "type": "string",
      "description": "Event will be triggered when a new tag is pushed to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "drone_url",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesEmailsOnPush
Set emails-on-push service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipients": {
      "type": "string",
      "description": "Comma-separated list of recipient email addresses"
    },
    "disable_diffs": {
      "type": "boolean",
      "description": "Disable code diffs"
    },
    "send_from_committer_email": {
      "type": "boolean",
      "description": "Send from committer"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "tag_push_events": {
      "type": "string",
      "description": "Event will be triggered when a new tag is pushed to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipients",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesExternalWiki
Set external-wiki service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "external_wiki_url": {
      "type": "string",
      "description": "The URL of the external Wiki"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "external_wiki_url",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesFlowdock
Set flowdock service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Flowdock token"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesGemnasium
Set gemnasium service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string",
      "description": "Your personal API key on gemnasium.com"
    },
    "token": {
      "type": "string",
      "description": "The project's slug on gemnasium.com"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key",
    "token",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesHipchat
Set hipchat service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The room token"
    },
    "room": {
      "type": "string",
      "description": "The room name or ID"
    },
    "color": {
      "type": "string",
      "description": "The room color"
    },
    "notify": {
      "type": "boolean",
      "description": "Enable notifications"
    },
    "api_version": {
      "type": "string",
      "description": "Leave blank for default (v2)"
    },
    "server": {
      "type": "string",
      "description": "Leave blank for default. https://hipchat.example.com"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "issue_events": {
      "type": "string",
      "description": "Event will be triggered when an issue is created/updated/closed"
    },
    "confidential_issue_events": {
      "type": "string",
      "description": "Event will be triggered when a confidential issue is created/updated/closed"
    },
    "merge_request_events": {
      "type": "string",
      "description": "Event will be triggered when a merge request is created/updated/merged"
    },
    "note_events": {
      "type": "string",
      "description": "Event will be triggered when someone adds a comment"
    },
    "tag_push_events": {
      "type": "string",
      "description": "Event will be triggered when a new tag is pushed to the repository"
    },
    "build_events": {
      "type": "string",
      "description": "Event will be triggered when a build status changes"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesIrker
Set irker service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipients": {
      "type": "string",
      "description": "Recipients/channels separated by whitespaces"
    },
    "default_irc_uri": {
      "type": "string",
      "description": "Default: irc://irc.network.net:6697"
    },
    "server_host": {
      "type": "string",
      "description": "Server host. Default localhost"
    },
    "server_port": {
      "type": "integer",
      "format": "int32",
      "description": "Server port. Default 6659"
    },
    "colorize_messages": {
      "type": "boolean",
      "description": "Colorize messages"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipients",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesJira
Set jira service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "The URL to the JIRA project which is being linked to this GitLab project, e.g., https://jira.example.com"
    },
    "project_key": {
      "type": "string",
      "description": "The short identifier for your JIRA project, all uppercase, e.g., PROJ"
    },
    "username": {
      "type": "string",
      "description": "The username of the user created to be used with GitLab/JIRA"
    },
    "password": {
      "type": "string",
      "description": "The password of the user created to be used with GitLab/JIRA"
    },
    "jira_issue_transition_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a transition that moves issues to a closed state. You can find this number under the JIRA workflow administration (**Administration > Issues > Workflows**) by selecting **View** under **Operations** of the desired workflow of your project. The ID of each state can be found inside the parenthesis of each transition name under the **Transitions (id)** column ([see screenshot][trans]). By default, this ID is set to `2`"
    },
    "commit_events": {
      "type": "string",
      "description": "Event will be triggered when a commit is created/updated"
    },
    "merge_request_events": {
      "type": "string",
      "description": "Event will be triggered when a merge request is created/updated/merged"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "url",
    "project_key",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesKubernetes
Set kubernetes service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "namespace": {
      "type": "string",
      "description": "The Kubernetes namespace to use"
    },
    "api_url": {
      "type": "string",
      "description": "The URL to the Kubernetes cluster API, e.g., https://kubernetes.example.com"
    },
    "token": {
      "type": "string",
      "description": "The service token to authenticate against the Kubernetes cluster with"
    },
    "ca_pem": {
      "type": "string",
      "description": "A custom certificate authority bundle to verify the Kubernetes cluster with (PEM format)"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "namespace",
    "api_url",
    "token",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesMattermost
Set mattermost service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "webhook": {
      "type": "string",
      "description": "The Mattermost webhook. e.g. http://mattermost_host/hooks/..."
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "issue_events": {
      "type": "string",
      "description": "Event will be triggered when an issue is created/updated/closed"
    },
    "confidential_issue_events": {
      "type": "string",
      "description": "Event will be triggered when a confidential issue is created/updated/closed"
    },
    "merge_request_events": {
      "type": "string",
      "description": "Event will be triggered when a merge request is created/updated/merged"
    },
    "note_events": {
      "type": "string",
      "description": "Event will be triggered when someone adds a comment"
    },
    "tag_push_events": {
      "type": "string",
      "description": "Event will be triggered when a new tag is pushed to the repository"
    },
    "build_events": {
      "type": "string",
      "description": "Event will be triggered when a build status changes"
    },
    "pipeline_events": {
      "type": "string"
    },
    "wiki_page_events": {
      "type": "string",
      "description": "Event will be triggered when a wiki page is created/updated"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "webhook",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesMattermostSlashCommands
Set mattermost-slash-commands service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The Mattermost token"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdServicesMattermostSlashCommandsTrigger
Added in GitLab 8.13

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "token": {
      "type": "string",
      "description": "The Mattermost token"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesPipelinesEmail
Set pipelines-email service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipients": {
      "type": "string",
      "description": "Comma-separated list of recipient email addresses"
    },
    "notify_only_broken_builds": {
      "type": "boolean",
      "description": "Notify only broken builds"
    },
    "pipeline_events": {
      "type": "string"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipients",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesPivotaltracker
Set pivotaltracker service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The Pivotaltracker token"
    },
    "restrict_to_branch": {
      "type": "string",
      "description": "Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches."
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesPushover
Set pushover service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string",
      "description": "The application key"
    },
    "user_key": {
      "type": "string",
      "description": "The user key"
    },
    "priority": {
      "type": "string",
      "description": "The priority"
    },
    "device": {
      "type": "string",
      "description": "Leave blank for all active devices"
    },
    "sound": {
      "type": "string",
      "description": "The sound of the notification"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key",
    "user_key",
    "priority",
    "device",
    "sound",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesRedmine
Set redmine service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "new_issue_url": {
      "type": "string",
      "description": "The new issue URL"
    },
    "project_url": {
      "type": "string",
      "description": "The project URL"
    },
    "issues_url": {
      "type": "string",
      "description": "The issues URL"
    },
    "description": {
      "type": "string",
      "description": "The description of the tracker"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "new_issue_url",
    "project_url",
    "issues_url",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesSlack
Set slack service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "webhook": {
      "type": "string",
      "description": "The Slack webhook. e.g. https://hooks.slack.com/services/..."
    },
    "new_issue_url": {
      "type": "string",
      "description": "The user name"
    },
    "channel": {
      "type": "string",
      "description": "The channel name"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "issue_events": {
      "type": "string",
      "description": "Event will be triggered when an issue is created/updated/closed"
    },
    "confidential_issue_events": {
      "type": "string",
      "description": "Event will be triggered when a confidential issue is created/updated/closed"
    },
    "merge_request_events": {
      "type": "string",
      "description": "Event will be triggered when a merge request is created/updated/merged"
    },
    "note_events": {
      "type": "string",
      "description": "Event will be triggered when someone adds a comment"
    },
    "tag_push_events": {
      "type": "string",
      "description": "Event will be triggered when a new tag is pushed to the repository"
    },
    "build_events": {
      "type": "string",
      "description": "Event will be triggered when a build status changes"
    },
    "pipeline_events": {
      "type": "string"
    },
    "wiki_page_events": {
      "type": "string",
      "description": "Event will be triggered when a wiki page is created/updated"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "webhook",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesSlackSlashCommands
Set slack-slash-commands service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "The Slack token"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postV3ProjectsIdServicesSlackSlashCommandsTrigger
Added in GitLab 8.13

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "token": {
      "type": "string",
      "description": "The Slack token"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putV3ProjectsIdServicesTeamcity
Set teamcity service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamcity_url": {
      "type": "string",
      "description": "TeamCity root URL like https://teamcity.example.com"
    },
    "build_type": {
      "type": "string",
      "description": "Build configuration ID"
    },
    "username": {
      "type": "string",
      "description": "A user with permissions to trigger a manual build"
    },
    "password": {
      "type": "string",
      "description": "The password of the user"
    },
    "push_events": {
      "type": "string",
      "description": "Event will be triggered by a push to the repository"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamcity_url",
    "build_type",
    "username",
    "password",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteV3ProjectsIdServicesServiceSlug
Delete a service for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "service_slug": {
      "type": "string",
      "description": "The name of the service",
      "enum": [
        "asana",
        "assembla",
        "bamboo",
        "bugzilla",
        "buildkite",
        "builds-email",
        "campfire",
        "custom-issue-tracker",
        "drone-ci",
        "emails-on-push",
        "external-wiki",
        "flowdock",
        "gemnasium",
        "hipchat",
        "irker",
        "jira",
        "kubernetes",
        "mattermost-slash-commands",
        "slack-slash-commands",
        "pipelines-email",
        "pivotaltracker",
        "pushover",
        "redmine",
        "slack",
        "mattermost",
        "teamcity"
      ]
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "service_slug",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdServicesServiceSlug
Get the service settings for project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "service_slug": {
      "type": "string",
      "description": "The name of the service",
      "enum": [
        "asana",
        "assembla",
        "bamboo",
        "bugzilla",
        "buildkite",
        "builds-email",
        "campfire",
        "custom-issue-tracker",
        "drone-ci",
        "emails-on-push",
        "external-wiki",
        "flowdock",
        "gemnasium",
        "hipchat",
        "irker",
        "jira",
        "kubernetes",
        "mattermost-slash-commands",
        "slack-slash-commands",
        "pipelines-email",
        "pivotaltracker",
        "pushover",
        "redmine",
        "slack",
        "mattermost",
        "teamcity"
      ]
    },
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "service_slug",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectService"
}
```
## Operation: postV3ProjectsIdShare
Share the project with a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "group_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a group"
    },
    "group_access": {
      "type": "integer",
      "format": "int32",
      "description": "The group access level",
      "enum": [
        10,
        20,
        30,
        40
      ]
    },
    "expires_at": {
      "type": "string",
      "format": "date",
      "description": "Share expiration date"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "group_id",
    "group_access"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectGroupLink"
}
```
## Operation: deleteV3ProjectsIdShareGroupId


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "group_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the group"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "group_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdSnippets
Get all project snippets

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectSnippet"
}
```
## Operation: postV3ProjectsIdSnippets
Create a new project snippet

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "title": {
      "type": "string",
      "description": "The title of the snippet"
    },
    "file_name": {
      "type": "string",
      "description": "The file name of the snippet"
    },
    "code": {
      "type": "string",
      "description": "The content of the snippet"
    },
    "visibility_level": {
      "type": "integer",
      "format": "int32",
      "description": "The visibility level of the snippet",
      "enum": [
        0,
        10,
        20
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "title",
    "file_name",
    "code",
    "visibility_level"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectSnippet"
}
```
## Operation: getV3ProjectsIdSnippetsNoteableIdNotes
Get a list of project +noteable+ notes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: postV3ProjectsIdSnippetsNoteableIdNotes
Create a new +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "body": {
      "type": "string",
      "description": "The content of a note"
    },
    "created_at": {
      "type": "string",
      "description": "The creation date of the note"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId
Delete a +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "note_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a note"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: getV3ProjectsIdSnippetsNoteableIdNotesNoteId
Get a single +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "note_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a note"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "note_id",
    "noteable_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: putV3ProjectsIdSnippetsNoteableIdNotesNoteId
Update an existing +noteable+ note

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "noteable_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the noteable"
    },
    "note_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a note"
    },
    "body": {
      "type": "string",
      "description": "The content of a note"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "noteable_id",
    "note_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: deleteV3ProjectsIdSnippetsSnippetId
Delete a project snippet

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project snippet"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "snippet_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdSnippetsSnippetId
Get a single project snippet

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project snippet"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "snippet_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectSnippet"
}
```
## Operation: putV3ProjectsIdSnippetsSnippetId
Update an existing project snippet

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project snippet"
    },
    "title": {
      "type": "string",
      "description": "The title of the snippet"
    },
    "file_name": {
      "type": "string",
      "description": "The file name of the snippet"
    },
    "code": {
      "type": "string",
      "description": "The content of the snippet"
    },
    "visibility_level": {
      "type": "integer",
      "format": "int32",
      "description": "The visibility level of the snippet",
      "enum": [
        0,
        10,
        20
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "snippet_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProjectSnippet"
}
```
## Operation: getV3ProjectsIdSnippetsSnippetIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an Issue, Merge Request or Snippet"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "snippet_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdSnippetsSnippetIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of a award_emoji (without colons)"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "id",
    "snippet_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an award emoji"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "snippet_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the award"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "snippet_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "snippet_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of a award_emoji (without colons)"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "id",
    "snippet_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of an award emoji"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "snippet_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "award_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the award"
    },
    "id": {
      "type": "integer",
      "format": "int32"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32"
    },
    "note_id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "award_id",
    "id",
    "snippet_id",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AwardEmoji"
}
```
## Operation: getV3ProjectsIdSnippetsSnippetIdRaw
Get a raw project snippet

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "snippet_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a project snippet"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "snippet_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteV3ProjectsIdStar
Unstar a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: postV3ProjectsIdStar
Star a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: postV3ProjectsIdStatusesSha
Post status to a commit

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "sha": {
      "type": "string",
      "description": "The commit hash"
    },
    "state": {
      "type": "string",
      "description": "The state of the status",
      "enum": [
        "pending",
        "running",
        "success",
        "failed",
        "canceled"
      ]
    },
    "ref": {
      "type": "string",
      "description": "The ref"
    },
    "target_url": {
      "type": "string",
      "description": "The target URL to associate with this status"
    },
    "description": {
      "type": "string",
      "description": "A short description of the status"
    },
    "name": {
      "type": "string",
      "description": "A string label to differentiate this status from the status of other systems. Default: \"default\""
    },
    "context": {
      "type": "string",
      "description": "A string label to differentiate this status from the status of other systems. Default: \"default\""
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "sha",
    "state"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CommitStatus"
}
```
## Operation: getV3ProjectsIdTriggers
Get triggers list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Trigger"
}
```
## Operation: postV3ProjectsIdTriggers
Create a trigger

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Trigger"
}
```
## Operation: deleteV3ProjectsIdTriggersToken
Delete a trigger

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "token": {
      "type": "string",
      "description": "The unique token of trigger"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Trigger"
}
```
## Operation: getV3ProjectsIdTriggersToken
Get specific trigger of a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "token": {
      "type": "string",
      "description": "The unique token of trigger"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Trigger"
}
```
## Operation: postV3ProjectsIdUnarchive
Unarchive a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: postV3ProjectsIdUploads
Upload a file

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "file": {
      "type": "string",
      "description": "The file to be uploaded"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "file"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3ProjectsIdUsers
Get the users list of a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "search": {
      "type": "string",
      "description": "Return list of users matching the search criteria"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserBasic"
}
```
## Operation: getV3ProjectsIdVariables
Get project variables

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Variable"
}
```
## Operation: postV3ProjectsIdVariables
Create a new variable in a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "key": {
      "type": "string",
      "description": "The key of the variable"
    },
    "value": {
      "type": "string",
      "description": "The value of the variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key",
    "value"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Variable"
}
```
## Operation: deleteV3ProjectsIdVariablesKey
Delete an existing variable from a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "key": {
      "type": "string",
      "description": "The key of the variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Variable"
}
```
## Operation: getV3ProjectsIdVariablesKey
Get a specific variable from a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "key": {
      "type": "string",
      "description": "The key of the variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Variable"
}
```
## Operation: putV3ProjectsIdVariablesKey
Update an existing variable from a project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of a project"
    },
    "key": {
      "type": "string",
      "description": "The key of the variable"
    },
    "value": {
      "type": "string",
      "description": "The value of the variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Variable"
}
```
## Operation: getV3Runners
Get runners available for user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of specific runners to show",
      "enum": [
        "active",
        "paused",
        "online"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Runner"
}
```
## Operation: getV3RunnersAll
Get all runners - shared and specific

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "scope": {
      "type": "string",
      "description": "The scope of specific runners to show",
      "enum": [
        "active",
        "paused",
        "online",
        "specific",
        "shared"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Runner"
}
```
## Operation: deleteV3RunnersId
Remove a runner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the runner"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Runner"
}
```
## Operation: getV3RunnersId
Get runner's details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the runner"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RunnerDetails"
}
```
## Operation: putV3RunnersId
Update runner's details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the runner"
    },
    "description": {
      "type": "string",
      "description": "The description of the runner"
    },
    "active": {
      "type": "boolean",
      "description": "The state of a runner"
    },
    "tag_list": {
      "type": "array",
      "description": "The list of tags for a runner"
    },
    "run_untagged": {
      "type": "boolean",
      "description": "Flag indicating the runner can execute untagged jobs"
    },
    "locked": {
      "type": "boolean",
      "description": "Flag indicating the runner is locked"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RunnerDetails"
}
```
## Operation: postV3Session
Login to get token

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "login": {
      "type": "string",
      "description": "The username"
    },
    "email": {
      "type": "string",
      "description": "The email of the user"
    },
    "password": {
      "type": "string",
      "description": "The password of the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "password"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserWithPrivateToken"
}
```
## Operation: getV3SidekiqCompoundMetrics
Get the Sidekiq Compound metrics. Includes queue, process, and job statistics

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3SidekiqJobStats
Get the Sidekiq job statistics

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3SidekiqProcessMetrics
Get the Sidekiq process metrics

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3SidekiqQueueMetrics
Get the Sidekiq queue metrics

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3Snippets
This feature was introduced in GitLab 8.15.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PersonalSnippet"
}
```
## Operation: postV3Snippets
This feature was introduced in GitLab 8.15.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "The title of a snippet"
    },
    "file_name": {
      "type": "string",
      "description": "The name of a snippet file"
    },
    "content": {
      "type": "string",
      "description": "The content of a snippet"
    },
    "visibility_level": {
      "type": "integer",
      "format": "int32",
      "description": "The visibility level of the snippet",
      "enum": [
        0,
        10,
        20
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "title",
    "file_name",
    "content"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PersonalSnippet"
}
```
## Operation: getV3SnippetsPublic
This feature was introduced in GitLab 8.15.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PersonalSnippet"
}
```
## Operation: deleteV3SnippetsId
This feature was introduced in GitLab 8.15.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a snippet"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PersonalSnippet"
}
```
## Operation: getV3SnippetsId
This feature was introduced in GitLab 8.15.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a snippet"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PersonalSnippet"
}
```
## Operation: putV3SnippetsId
This feature was introduced in GitLab 8.15.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a snippet"
    },
    "title": {
      "type": "string",
      "description": "The title of a snippet"
    },
    "file_name": {
      "type": "string",
      "description": "The name of a snippet file"
    },
    "content": {
      "type": "string",
      "description": "The content of a snippet"
    },
    "visibility_level": {
      "type": "integer",
      "format": "int32",
      "description": "The visibility level of the snippet",
      "enum": [
        0,
        10,
        20
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PersonalSnippet"
}
```
## Operation: getV3SnippetsIdRaw
This feature was introduced in GitLab 8.15.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of a snippet"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3TemplatesDockerfiles
This feature was introduced in GitLab 8.15.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TemplatesList"
}
```
## Operation: getV3TemplatesDockerfilesName
This feature was introduced in GitLab 8.15.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the template"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
## Operation: getV3TemplatesGitignores
This feature was introduced in GitLab 8.8.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TemplatesList"
}
```
## Operation: getV3TemplatesGitignoresName
This feature was introduced in GitLab 8.8.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the template"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
## Operation: getV3TemplatesGitlabCiYmls
This feature was introduced in GitLab 8.9.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TemplatesList"
}
```
## Operation: getV3TemplatesGitlabCiYmlsName
This feature was introduced in GitLab 8.9.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the template"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Template"
}
```
## Operation: getV3TemplatesLicenses
This feature was introduced in GitLab 8.7.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "popular": {
      "type": "boolean",
      "description": "If passed, returns only popular licenses"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoLicense"
}
```
## Operation: getV3TemplatesLicensesName
This feature was introduced in GitLab 8.7.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the template"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepoLicense"
}
```
## Operation: deleteV3Todos
Mark all todos as done

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getV3Todos
Get a todo list

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Todo"
}
```
## Operation: deleteV3TodosId
Mark a todo as done

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the todo being marked as done"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Todo"
}
```
## Operation: getV3User
Get the currently authenticated user

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserPublic"
}
```
## Operation: getV3UserEmails
Get the currently authenticated user's email addresses

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Email"
}
```
## Operation: postV3UserEmails
Add new email address to the currently authenticated user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The new email"
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Email"
}
```
## Operation: deleteV3UserEmailsEmailId
Delete an email address from the currently authenticated user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the email"
    }
  },
  "additionalProperties": false,
  "required": [
    "email_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3UserEmailsEmailId
Get a single email address owned by the currently authenticated user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the email"
    }
  },
  "additionalProperties": false,
  "required": [
    "email_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Email"
}
```
## Operation: getV3UserKeys
Get the currently authenticated user's SSH keys

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: postV3UserKeys
Add a new SSH key to the currently authenticated user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "The new SSH key"
    },
    "title": {
      "type": "string",
      "description": "The title of the new SSH key"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: deleteV3UserKeysKeyId
Delete an SSH key from the currently authenticated user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the SSH key"
    }
  },
  "additionalProperties": false,
  "required": [
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: getV3UserKeysKeyId
Get a single key owned by currently authenticated user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the SSH key"
    }
  },
  "additionalProperties": false,
  "required": [
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: getV3Users
Get the list of users

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "username": {
      "type": "string",
      "description": "Get a single user with a specific username"
    },
    "search": {
      "type": "string",
      "description": "Search for a username"
    },
    "active": {
      "type": "boolean",
      "description": "Filters only active users"
    },
    "external": {
      "type": "boolean",
      "description": "Filters only external users"
    },
    "blocked": {
      "type": "boolean",
      "description": "Filters only blocked users"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserBasic"
}
```
## Operation: postV3Users
Create a user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "The email of the user"
    },
    "password": {
      "type": "string",
      "description": "The password of the new user"
    },
    "name": {
      "type": "string",
      "description": "The name of the user"
    },
    "username": {
      "type": "string",
      "description": "The username of the user"
    },
    "skype": {
      "type": "string",
      "description": "The Skype username"
    },
    "linkedin": {
      "type": "string",
      "description": "The LinkedIn username"
    },
    "twitter": {
      "type": "string",
      "description": "The Twitter username"
    },
    "website_url": {
      "type": "string",
      "description": "The website of the user"
    },
    "organization": {
      "type": "string",
      "description": "The organization of the user"
    },
    "projects_limit": {
      "type": "integer",
      "format": "int32",
      "description": "The number of projects a user can create"
    },
    "extern_uid": {
      "type": "string",
      "description": "The external authentication provider UID"
    },
    "provider": {
      "type": "string",
      "description": "The external provider"
    },
    "bio": {
      "type": "string",
      "description": "The biography of the user"
    },
    "location": {
      "type": "string",
      "description": "The location of the user"
    },
    "admin": {
      "type": "boolean",
      "description": "Flag indicating the user is an administrator"
    },
    "can_create_group": {
      "type": "boolean",
      "description": "Flag indicating the user can create groups"
    },
    "confirm": {
      "type": "boolean",
      "description": "Flag indicating the account needs to be confirmed"
    },
    "external": {
      "type": "boolean",
      "description": "Flag indicating the user is an external user"
    }
  },
  "additionalProperties": false,
  "required": [
    "email",
    "password",
    "name",
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserPublic"
}
```
## Operation: deleteV3UsersId
Delete a user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Email"
}
```
## Operation: getV3UsersId
Get a single user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserBasic"
}
```
## Operation: putV3UsersId
Update a user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    },
    "email": {
      "type": "string",
      "description": "The email of the user"
    },
    "password": {
      "type": "string",
      "description": "The password of the new user"
    },
    "name": {
      "type": "string",
      "description": "The name of the user"
    },
    "username": {
      "type": "string",
      "description": "The username of the user"
    },
    "skype": {
      "type": "string",
      "description": "The Skype username"
    },
    "linkedin": {
      "type": "string",
      "description": "The LinkedIn username"
    },
    "twitter": {
      "type": "string",
      "description": "The Twitter username"
    },
    "website_url": {
      "type": "string",
      "description": "The website of the user"
    },
    "organization": {
      "type": "string",
      "description": "The organization of the user"
    },
    "projects_limit": {
      "type": "integer",
      "format": "int32",
      "description": "The number of projects a user can create"
    },
    "extern_uid": {
      "type": "string",
      "description": "The external authentication provider UID"
    },
    "provider": {
      "type": "string",
      "description": "The external provider"
    },
    "bio": {
      "type": "string",
      "description": "The biography of the user"
    },
    "location": {
      "type": "string",
      "description": "The location of the user"
    },
    "admin": {
      "type": "boolean",
      "description": "Flag indicating the user is an administrator"
    },
    "can_create_group": {
      "type": "boolean",
      "description": "Flag indicating the user can create groups"
    },
    "confirm": {
      "type": "boolean",
      "description": "Flag indicating the account needs to be confirmed"
    },
    "external": {
      "type": "boolean",
      "description": "Flag indicating the user is an external user"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserPublic"
}
```
## Operation: putV3UsersIdBlock
Block a user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3UsersIdEmails
Get the emails addresses of a specified user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Email"
}
```
## Operation: postV3UsersIdEmails
Add an email address to a specified user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    },
    "email": {
      "type": "string",
      "description": "The email of the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "email"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Email"
}
```
## Operation: deleteV3UsersIdEmailsEmailId
Delete an email address of a specified user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    },
    "email_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the email"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "email_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Email"
}
```
## Operation: getV3UsersIdEvents
This feature was introduced in GitLab 8.13.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Current page number"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of items per page"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Event"
}
```
## Operation: getV3UsersIdKeys
Get the SSH keys of a specified user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: postV3UsersIdKeys
Add an SSH key to a specified user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    },
    "key": {
      "type": "string",
      "description": "The new SSH key"
    },
    "title": {
      "type": "string",
      "description": "The title of the new SSH key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key",
    "title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: deleteV3UsersIdKeysKeyId
Delete an existing SSH key from a specified user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    },
    "key_id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the SSH key"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "key_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SSHKey"
}
```
## Operation: putV3UsersIdUnblock
Unblock a user. Available only for admins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "The ID of the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getV3Version
This feature was introduced in GitLab 8.13.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
