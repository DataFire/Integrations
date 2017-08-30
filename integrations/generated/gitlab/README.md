# @datafire/gitlab

Client library for Gitlab

## Installation and Usage
```bash
npm install --save datafire @datafire/gitlab
```

```js
let datafire = require('datafire');
let gitlab = require('@datafire/gitlab').create({
  private_token_header: "",
  private_token_query: "",
});

gitlab.getV3Users({}).then(data => {
  console.log(data);
})
```

## Description
The platform for modern developers
GitLab unifies issues, code review, CI and CD into a single UI

## Actions
### getV3ApplicationSettings
Get the current application settings


```js
gitlab.getV3ApplicationSettings(null, context)
```

#### Parameters
*This action has no parameters*

### putV3ApplicationSettings
Modify application settings


```js
gitlab.putV3ApplicationSettings({
  "domain_blacklist": "",
  "two_factor_grace_period": 0,
  "shared_runners_text": "",
  "metrics_host": "",
  "metrics_port": 0,
  "metrics_pool_size": 0,
  "metrics_timeout": 0,
  "metrics_method_call_threshold": 0,
  "metrics_sample_interval": 0,
  "metrics_packet_size": 0,
  "sidekiq_throttling_queus": [],
  "sidekiq_throttling_factor": 0,
  "recaptcha_site_key": "",
  "recaptcha_private_key": "",
  "akismet_api_key": "",
  "sentry_dsn": "",
  "koding_url": "",
  "plantuml_url": "",
  "housekeeping_bitmaps_enabled": true,
  "housekeeping_incremental_repack_period": 0,
  "housekeeping_full_repack_period": 0,
  "housekeeping_gc_period": 0
}, context)
```

#### Parameters
* default_branch_protection (integer) - Determine if developers can push to master
* default_project_visibility (integer) - The default project visibility
* default_snippet_visibility (integer) - The default snippet visibility
* default_group_visibility (integer) - The default group visibility
* restricted_visibility_levels (array) - Selected levels cannot be used by non-admin users for projects or snippets. If the public level is restricted, user profiles are only visible to logged in users.
* import_sources (array) - Enabled sources for code import during project creation. OmniAuth must be configured for GitHub, Bitbucket, and GitLab.com
* disabled_oauth_sign_in_sources (array) - Disable certain OAuth sign-in sources
* enabled_git_access_protocol (string) - Allow only the selected protocols to be used for Git access.
* gravatar_enabled (boolean) - Flag indicating if the Gravatar service is enabled
* default_projects_limit (integer) - The maximum number of personal projects
* max_attachment_size (integer) - Maximum attachment size in MB
* session_expire_delay (integer) - Session duration in minutes. GitLab restart is required to apply changes.
* user_oauth_applications (boolean) - Allow users to register any application to use GitLab as an OAuth provider
* user_default_external (boolean) - Newly registered users will by default be external
* signup_enabled (boolean) - Flag indicating if sign up is enabled
* send_user_confirmation_email (boolean) - Send confirmation email on sign-up
* domain_whitelist (string) - ONLY users with e-mail addresses that match these domain(s) will be able to sign-up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com
* domain_blacklist_enabled (boolean) - Enable domain blacklist for sign ups
* domain_blacklist (string) **required** - Users with e-mail addresses that match these domain(s) will NOT be able to sign-up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com
* after_sign_up_text (string) - Text shown after sign up
* signin_enabled (boolean) - Flag indicating if sign in is enabled
* require_two_factor_authentication (boolean) - Require all users to setup Two-factor authentication
* two_factor_grace_period (integer) **required** - Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication
* home_page_url (string) - We will redirect non-logged in users to this page
* after_sign_out_path (string) - We will redirect users to this page after they sign out
* sign_in_text (string) - The sign in text of the GitLab application
* help_page_text (string) - Custom text displayed on the help page
* shared_runners_enabled (boolean) - Enable shared runners for new projects
* shared_runners_text (string) **required** - Shared runners text 
* max_artifacts_size (integer) - Set the maximum file size each build's artifacts can have
* container_registry_token_expire_delay (integer) - Authorization token duration (minutes)
* metrics_enabled (boolean) - Enable the InfluxDB metrics
* metrics_host (string) **required** - The InfluxDB host
* metrics_port (integer) **required** - The UDP port to use for connecting to InfluxDB
* metrics_pool_size (integer) **required** - The amount of InfluxDB connections to open
* metrics_timeout (integer) **required** - The amount of seconds after which an InfluxDB connection will time out
* metrics_method_call_threshold (integer) **required** - A method call is only tracked when it takes longer to complete than the given amount of milliseconds.
* metrics_sample_interval (integer) **required** - The sampling interval in seconds
* metrics_packet_size (integer) **required** - The amount of points to store in a single UDP packet
* sidekiq_throttling_enabled (boolean) - Enable Sidekiq Job Throttling
* sidekiq_throttling_queus (array) **required** - Choose which queues you wish to throttle
* sidekiq_throttling_factor (number) **required** - The factor by which the queues should be throttled. A value between 0.0 and 1.0, exclusive.
* recaptcha_enabled (boolean) - Helps prevent bots from creating accounts
* recaptcha_site_key (string) **required** - Generate site key at http://www.google.com/recaptcha
* recaptcha_private_key (string) **required** - Generate private key at http://www.google.com/recaptcha
* akismet_enabled (boolean) - Helps prevent bots from creating issues
* akismet_api_key (string) **required** - Generate API key at http://www.akismet.com
* admin_notification_email (string) - Abuse reports will be sent to this address if it is set. Abuse reports are always available in the admin area.
* sentry_enabled (boolean) - Sentry is an error reporting and logging tool which is currently not shipped with GitLab, get it here: https://getsentry.com
* sentry_dsn (string) **required** - Sentry Data Source Name
* repository_storage (string) - Storage paths for new projects
* repository_checks_enabled (boolean) - GitLab will periodically run 'git fsck' in all project and wiki repositories to look for silent disk corruption issues.
* koding_enabled (boolean) - Enable Koding
* koding_url (string) **required** - The Koding team URL
* plantuml_enabled (boolean) - Enable PlantUML
* plantuml_url (string) **required** - The PlantUML server URL
* version_check_enabled (boolean) - Let GitLab inform you when an update is available.
* email_author_in_body (boolean) - Some email servers do not support overriding the email sender name. Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.
* html_emails_enabled (boolean) - By default GitLab sends emails in HTML and plain text formats so mail clients can choose what format to use. Disable this option if you only want to send emails in plain text format.
* housekeeping_enabled (boolean) - Enable automatic repository housekeeping (git repack, git gc)
* housekeeping_bitmaps_enabled (boolean) **required** - Creating pack file bitmaps makes housekeeping take a little longer but bitmaps should accelerate 'git clone' performance.
* housekeeping_incremental_repack_period (integer) **required** - Number of Git pushes after which an incremental 'git repack' is run.
* housekeeping_full_repack_period (integer) **required** - Number of Git pushes after which a full 'git repack' is run.
* housekeeping_gc_period (integer) **required** - Number of Git pushes after which 'git gc' is run.

### postV3CiLint
Validation of .gitlab-ci.yml content


```js
gitlab.postV3CiLint({
  "content": ""
}, context)
```

#### Parameters
* content (string) **required** - Content of .gitlab-ci.yml

### getV3DeployKeys



```js
gitlab.getV3DeployKeys(null, context)
```

#### Parameters
*This action has no parameters*

### getV3Dockerfiles
This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3Dockerfiles(null, context)
```

#### Parameters
*This action has no parameters*

### getV3DockerfilesName
This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3DockerfilesName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the template

### getV3Gitignores
This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3Gitignores(null, context)
```

#### Parameters
*This action has no parameters*

### getV3GitignoresName
This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3GitignoresName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the template

### getV3GitlabCiYmls
This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3GitlabCiYmls(null, context)
```

#### Parameters
*This action has no parameters*

### getV3GitlabCiYmlsName
This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3GitlabCiYmlsName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the template

### getV3Groups
Get a groups list


```js
gitlab.getV3Groups({}, context)
```

#### Parameters
* statistics (boolean) - Include project statistics
* skip_groups (array) - Array of group ids to exclude from list
* all_available (boolean) - Show all group that you have access to
* search (string) - Search for a specific group
* order_by (string) - Order by name or path
* sort (string) - Sort by asc (ascending) or desc (descending)
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3Groups
Create a group. Available only for users who can create groups.


```js
gitlab.postV3Groups({
  "name": "",
  "path": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the group
* path (string) **required** - The path of the group
* description (string) - The description of the group
* visibility_level (integer) - The visibility level of the group
* lfs_enabled (boolean) - Enable/disable LFS for the projects in this group
* request_access_enabled (boolean) - Allow users to request member access

### getV3GroupsOwned
Get list of owned groups for authenticated user


```js
gitlab.getV3GroupsOwned({}, context)
```

#### Parameters
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* statistics (boolean) - Include project statistics

### deleteV3GroupsId
Remove a group.


```js
gitlab.deleteV3GroupsId({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a group

### getV3GroupsId
Get a single group, with containing projects.


```js
gitlab.getV3GroupsId({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a group

### putV3GroupsId
Update a group. Available only for users who can administrate groups.


```js
gitlab.putV3GroupsId({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a group
* name (string) - The name of the group
* path (string) - The path of the group
* description (string) - The description of the group
* visibility_level (integer) - The visibility level of the group
* lfs_enabled (boolean) - Enable/disable LFS for the projects in this group
* request_access_enabled (boolean) - Allow users to request member access

### getV3GroupsIdAccessRequests
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3GroupsIdAccessRequests({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The group ID
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3GroupsIdAccessRequests
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3GroupsIdAccessRequests({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The group ID

### deleteV3GroupsIdAccessRequestsUserId
This feature was introduced in GitLab 8.11.


```js
gitlab.deleteV3GroupsIdAccessRequestsUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The group ID
* user_id (integer) **required** - The user ID of the access requester

### putV3GroupsIdAccessRequestsUserIdApprove
This feature was introduced in GitLab 8.11.


```js
gitlab.putV3GroupsIdAccessRequestsUserIdApprove({
  "id": "",
  "user_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The group ID
* user_id (integer) **required** - The user ID of the access requester
* access_level (integer) - A valid access level (defaults: `30`, developer access level)

### getV3GroupsIdIssues
Get a list of group issues


```js
gitlab.getV3GroupsIdIssues({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a group
* state (string) - Return opened, closed, or all issues
* labels (string) - Comma-separated list of label names
* milestone (string) - Return issues for a specific milestone
* order_by (string) - Return issues ordered by `created_at` or `updated_at` fields.
* sort (string) - Return issues sorted in `asc` or `desc` order.
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3GroupsIdMembers
Gets a list of group or project members viewable by the authenticated user.


```js
gitlab.getV3GroupsIdMembers({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The group ID
* query (string) - A query string to search for members
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3GroupsIdMembers
Adds a member to a group or project.


```js
gitlab.postV3GroupsIdMembers({
  "id": "",
  "user_id": 0,
  "access_level": 0
}, context)
```

#### Parameters
* id (string) **required** - The group ID
* user_id (integer) **required** - The user ID of the new member
* access_level (integer) **required** - A valid access level (defaults: `30`, developer access level)
* expires_at (string) - Date string in the format YEAR-MONTH-DAY

### deleteV3GroupsIdMembersUserId
Removes a user from a group or project.


```js
gitlab.deleteV3GroupsIdMembersUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The group ID
* user_id (integer) **required** - The user ID of the member

### getV3GroupsIdMembersUserId
Gets a member of a group or project.


```js
gitlab.getV3GroupsIdMembersUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The group ID
* user_id (integer) **required** - The user ID of the member

### putV3GroupsIdMembersUserId
Updates a member of a group or project.


```js
gitlab.putV3GroupsIdMembersUserId({
  "id": "",
  "user_id": 0,
  "access_level": 0
}, context)
```

#### Parameters
* id (string) **required** - The group ID
* user_id (integer) **required** - The user ID of the new member
* access_level (integer) **required** - A valid access level
* expires_at (string) - Date string in the format YEAR-MONTH-DAY

### getV3GroupsIdNotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.getV3GroupsIdNotificationSettings({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The group ID or project ID or project NAMESPACE/PROJECT_NAME

### putV3GroupsIdNotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.putV3GroupsIdNotificationSettings({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The group ID or project ID or project NAMESPACE/PROJECT_NAME
* level (string) - The group notification level
* new_note (boolean) - Enable/disable this notification
* new_issue (boolean) - Enable/disable this notification
* reopen_issue (boolean) - Enable/disable this notification
* close_issue (boolean) - Enable/disable this notification
* reassign_issue (boolean) - Enable/disable this notification
* new_merge_request (boolean) - Enable/disable this notification
* reopen_merge_request (boolean) - Enable/disable this notification
* close_merge_request (boolean) - Enable/disable this notification
* reassign_merge_request (boolean) - Enable/disable this notification
* merge_merge_request (boolean) - Enable/disable this notification
* failed_pipeline (boolean) - Enable/disable this notification
* success_pipeline (boolean) - Enable/disable this notification

### getV3GroupsIdProjects
Get a list of projects in this group.


```js
gitlab.getV3GroupsIdProjects({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a group
* archived (boolean) - Limit by archived status
* visibility (string) - Limit by visibility
* search (string) - Return list of authorized projects matching the search criteria
* order_by (string) - Return projects ordered by field
* sort (string) - Return projects sorted in ascending and descending order
* simple (boolean) - Return only the ID, URL, name, and path of each project
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3GroupsIdProjectsProjectId
Transfer a project to the group namespace. Available only for admin.


```js
gitlab.postV3GroupsIdProjectsProjectId({
  "id": "",
  "project_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a group
* project_id (string) **required** - The ID or path of the project

### getV3Hooks
Get the list of system hooks


```js
gitlab.getV3Hooks(null, context)
```

#### Parameters
*This action has no parameters*

### postV3Hooks
Create a new system hook


```js
gitlab.postV3Hooks({
  "url": ""
}, context)
```

#### Parameters
* url (string) **required** - The URL to send the request to
* token (string) - The token used to validate payloads
* push_events (boolean) - Trigger hook on push events
* tag_push_events (boolean) - Trigger hook on tag push events
* enable_ssl_verification (boolean) - Do SSL verification when triggering the hook

### deleteV3HooksId
Delete a hook


```js
gitlab.deleteV3HooksId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the system hook

### getV3HooksId
Test a hook


```js
gitlab.getV3HooksId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the system hook

### postV3InternalAllowed



```js
gitlab.postV3InternalAllowed(null, context)
```

#### Parameters
*This action has no parameters*

### getV3InternalBroadcastMessage



```js
gitlab.getV3InternalBroadcastMessage(null, context)
```

#### Parameters
*This action has no parameters*

### getV3InternalCheck



```js
gitlab.getV3InternalCheck(null, context)
```

#### Parameters
*This action has no parameters*

### getV3InternalDiscover



```js
gitlab.getV3InternalDiscover(null, context)
```

#### Parameters
*This action has no parameters*

### postV3InternalLfsAuthenticate



```js
gitlab.postV3InternalLfsAuthenticate(null, context)
```

#### Parameters
*This action has no parameters*

### getV3InternalMergeRequestUrls



```js
gitlab.getV3InternalMergeRequestUrls(null, context)
```

#### Parameters
*This action has no parameters*

### postV3InternalTwoFactorRecoveryCodes



```js
gitlab.postV3InternalTwoFactorRecoveryCodes(null, context)
```

#### Parameters
*This action has no parameters*

### getV3Issues
Get currently authenticated user's issues


```js
gitlab.getV3Issues({}, context)
```

#### Parameters
* state (string) - Return opened, closed, or all issues
* labels (string) - Comma-separated list of label names
* milestone (string) - Return issues for a specific milestone
* order_by (string) - Return issues ordered by `created_at` or `updated_at` fields.
* sort (string) - Return issues sorted in `asc` or `desc` order.
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3KeysId
Get single ssh key by id. Only available to admin users


```js
gitlab.getV3KeysId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### getV3Licenses
This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3Licenses({}, context)
```

#### Parameters
* popular (boolean) - If passed, returns only popular licenses

### getV3LicensesName
This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3LicensesName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the template

### getV3Namespaces
Get a namespaces list


```js
gitlab.getV3Namespaces({}, context)
```

#### Parameters
* search (string) - Search query for namespaces
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3NotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.getV3NotificationSettings(null, context)
```

#### Parameters
*This action has no parameters*

### putV3NotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.putV3NotificationSettings({}, context)
```

#### Parameters
* level (string) - The global notification level
* notification_email (string) - The email address to send notifications
* new_note (boolean) - Enable/disable this notification
* new_issue (boolean) - Enable/disable this notification
* reopen_issue (boolean) - Enable/disable this notification
* close_issue (boolean) - Enable/disable this notification
* reassign_issue (boolean) - Enable/disable this notification
* new_merge_request (boolean) - Enable/disable this notification
* reopen_merge_request (boolean) - Enable/disable this notification
* close_merge_request (boolean) - Enable/disable this notification
* reassign_merge_request (boolean) - Enable/disable this notification
* merge_merge_request (boolean) - Enable/disable this notification
* failed_pipeline (boolean) - Enable/disable this notification
* success_pipeline (boolean) - Enable/disable this notification

### getV3Projects
Get a projects list for authenticated user


```js
gitlab.getV3Projects({}, context)
```

#### Parameters
* order_by (string) - Return projects ordered by field
* sort (string) - Return projects sorted in ascending and descending order
* archived (boolean) - Limit by archived status
* visibility (string) - Limit by visibility
* search (string) - Return list of authorized projects matching the search criteria
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* simple (boolean) - Return only the ID, URL, name, and path of each project

### postV3Projects
Create new project


```js
gitlab.postV3Projects({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the project
* path (string) - The path of the repository
* description (string) - The description of the project
* issues_enabled (boolean) - Flag indication if the issue tracker is enabled
* merge_requests_enabled (boolean) - Flag indication if merge requests are enabled
* wiki_enabled (boolean) - Flag indication if the wiki is enabled
* builds_enabled (boolean) - Flag indication if builds are enabled
* snippets_enabled (boolean) - Flag indication if snippets are enabled
* shared_runners_enabled (boolean) - Flag indication if shared runners are enabled for that project
* container_registry_enabled (boolean) - Flag indication if the container registry is enabled for that project
* lfs_enabled (boolean) - Flag indication if Git LFS is enabled for that project
* public (boolean) - Create a public project. The same as visibility_level = 20.
* visibility_level (integer) - Create a public project. The same as visibility_level = 20.
* public_builds (boolean) - Perform public builds
* request_access_enabled (boolean) - Allow users to request member access
* only_allow_merge_if_build_succeeds (boolean) - Only allow to merge if builds succeed
* only_allow_merge_if_all_discussions_are_resolved (boolean) - Only allow to merge if all discussions are resolved
* namespace_id (integer) - Namespace ID for the new project. Default to the user namespace.
* import_url (string) - URL from which the project is imported

### getV3ProjectsAll
Get all projects for admin user


```js
gitlab.getV3ProjectsAll({}, context)
```

#### Parameters
* order_by (string) - Return projects ordered by field
* sort (string) - Return projects sorted in ascending and descending order
* archived (boolean) - Limit by archived status
* visibility (string) - Limit by visibility
* search (string) - Return list of authorized projects matching the search criteria
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* simple (boolean) - Return only the ID, URL, name, and path of each project
* statistics (boolean) - Include project statistics

### postV3ProjectsForkId
Fork new project for the current user or provided namespace.


```js
gitlab.postV3ProjectsForkId({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* namespace (string) - The ID or name of the namespace that the project will be forked into

### getV3ProjectsOwned
Get an owned projects list for authenticated user


```js
gitlab.getV3ProjectsOwned({}, context)
```

#### Parameters
* order_by (string) - Return projects ordered by field
* sort (string) - Return projects sorted in ascending and descending order
* archived (boolean) - Limit by archived status
* visibility (string) - Limit by visibility
* search (string) - Return list of authorized projects matching the search criteria
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* simple (boolean) - Return only the ID, URL, name, and path of each project
* statistics (boolean) - Include project statistics

### getV3ProjectsSearchQuery
Search for projects the current user has access to


```js
gitlab.getV3ProjectsSearchQuery({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - The project name to be searched
* order_by (string) - Return projects ordered by field
* sort (string) - Return projects sorted in ascending and descending order
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3ProjectsStarred
Gets starred project for the authenticated user


```js
gitlab.getV3ProjectsStarred({}, context)
```

#### Parameters
* order_by (string) - Return projects ordered by field
* sort (string) - Return projects sorted in ascending and descending order
* archived (boolean) - Limit by archived status
* visibility (string) - Limit by visibility
* search (string) - Return list of authorized projects matching the search criteria
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* simple (boolean) - Return only the ID, URL, name, and path of each project

### postV3ProjectsUserUserId
Create new project for a specified user. Only available to admin users.


```js
gitlab.postV3ProjectsUserUserId({
  "name": "",
  "user_id": 0
}, context)
```

#### Parameters
* name (string) **required** - The name of the project
* user_id (integer) **required** - The ID of a user
* default_branch (string) - The default branch of the project
* description (string) - The description of the project
* issues_enabled (boolean) - Flag indication if the issue tracker is enabled
* merge_requests_enabled (boolean) - Flag indication if merge requests are enabled
* wiki_enabled (boolean) - Flag indication if the wiki is enabled
* builds_enabled (boolean) - Flag indication if builds are enabled
* snippets_enabled (boolean) - Flag indication if snippets are enabled
* shared_runners_enabled (boolean) - Flag indication if shared runners are enabled for that project
* container_registry_enabled (boolean) - Flag indication if the container registry is enabled for that project
* lfs_enabled (boolean) - Flag indication if Git LFS is enabled for that project
* public (boolean) - Create a public project. The same as visibility_level = 20.
* visibility_level (integer) - Create a public project. The same as visibility_level = 20.
* public_builds (boolean) - Perform public builds
* request_access_enabled (boolean) - Allow users to request member access
* only_allow_merge_if_build_succeeds (boolean) - Only allow to merge if builds succeed
* only_allow_merge_if_all_discussions_are_resolved (boolean) - Only allow to merge if all discussions are resolved
* namespace_id (integer) - Namespace ID for the new project. Default to the user namespace.
* import_url (string) - URL from which the project is imported

### getV3ProjectsVisible
Get a list of visible projects for authenticated user


```js
gitlab.getV3ProjectsVisible({}, context)
```

#### Parameters
* order_by (string) - Return projects ordered by field
* sort (string) - Return projects sorted in ascending and descending order
* archived (boolean) - Limit by archived status
* visibility (string) - Limit by visibility
* search (string) - Return list of authorized projects matching the search criteria
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* simple (boolean) - Return only the ID, URL, name, and path of each project

### deleteV3ProjectsId
Remove a project


```js
gitlab.deleteV3ProjectsId({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### getV3ProjectsId
Get a single project


```js
gitlab.getV3ProjectsId({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### putV3ProjectsId
Update an existing project


```js
gitlab.putV3ProjectsId({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* name (string) - The name of the project
* default_branch (string) - The default branch of the project
* path (string) - The path of the repository
* description (string) - The description of the project
* issues_enabled (boolean) - Flag indication if the issue tracker is enabled
* merge_requests_enabled (boolean) - Flag indication if merge requests are enabled
* wiki_enabled (boolean) - Flag indication if the wiki is enabled
* builds_enabled (boolean) - Flag indication if builds are enabled
* snippets_enabled (boolean) - Flag indication if snippets are enabled
* shared_runners_enabled (boolean) - Flag indication if shared runners are enabled for that project
* container_registry_enabled (boolean) - Flag indication if the container registry is enabled for that project
* lfs_enabled (boolean) - Flag indication if Git LFS is enabled for that project
* public (boolean) - Create a public project. The same as visibility_level = 20.
* visibility_level (integer) - Create a public project. The same as visibility_level = 20.
* public_builds (boolean) - Perform public builds
* request_access_enabled (boolean) - Allow users to request member access
* only_allow_merge_if_build_succeeds (boolean) - Only allow to merge if builds succeed
* only_allow_merge_if_all_discussions_are_resolved (boolean) - Only allow to merge if all discussions are resolved

### v3.projects.id._ref.ref._trigger.builds.post
Trigger a GitLab project build


```js
gitlab.v3.projects.id._ref.ref._trigger.builds.post({
  "id": "",
  "ref": "",
  "token": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* ref (string) **required** - The commit sha or name of a branch or tag
* token (string) **required** - The unique token of trigger

### getV3ProjectsIdAccessRequests
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdAccessRequests({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdAccessRequests
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3ProjectsIdAccessRequests({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID

### deleteV3ProjectsIdAccessRequestsUserId
This feature was introduced in GitLab 8.11.


```js
gitlab.deleteV3ProjectsIdAccessRequestsUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* user_id (integer) **required** - The user ID of the access requester

### putV3ProjectsIdAccessRequestsUserIdApprove
This feature was introduced in GitLab 8.11.


```js
gitlab.putV3ProjectsIdAccessRequestsUserIdApprove({
  "id": "",
  "user_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* user_id (integer) **required** - The user ID of the access requester
* access_level (integer) - A valid access level (defaults: `30`, developer access level)

### postV3ProjectsIdArchive
Archive a project


```js
gitlab.postV3ProjectsIdArchive({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### getV3ProjectsIdBoards
This feature was introduced in 8.13


```js
gitlab.getV3ProjectsIdBoards({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### getV3ProjectsIdBoardsBoardIdLists
Does not include `backlog` and `done` lists. This feature was introduced in 8.13


```js
gitlab.getV3ProjectsIdBoardsBoardIdLists({
  "id": "",
  "board_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* board_id (integer) **required** - The ID of a board

### postV3ProjectsIdBoardsBoardIdLists
This feature was introduced in 8.13


```js
gitlab.postV3ProjectsIdBoardsBoardIdLists({
  "id": "",
  "board_id": 0,
  "label_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* board_id (integer) **required** - The ID of a board
* label_id (integer) **required** - The ID of an existing label

### deleteV3ProjectsIdBoardsBoardIdListsListId
This feature was introduced in 8.13


```js
gitlab.deleteV3ProjectsIdBoardsBoardIdListsListId({
  "id": "",
  "board_id": 0,
  "list_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* board_id (integer) **required** - The ID of a board
* list_id (integer) **required** - The ID of a board list

### getV3ProjectsIdBoardsBoardIdListsListId
This feature was introduced in 8.13


```js
gitlab.getV3ProjectsIdBoardsBoardIdListsListId({
  "id": "",
  "board_id": 0,
  "list_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* board_id (integer) **required** - The ID of a board
* list_id (integer) **required** - The ID of a list

### putV3ProjectsIdBoardsBoardIdListsListId
This feature was introduced in 8.13


```js
gitlab.putV3ProjectsIdBoardsBoardIdListsListId({
  "id": "",
  "board_id": 0,
  "list_id": 0,
  "position": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* board_id (integer) **required** - The ID of a board
* list_id (integer) **required** - The ID of a list
* position (integer) **required** - The position of the list

### getV3ProjectsIdBuilds
Get a project builds


```js
gitlab.getV3ProjectsIdBuilds({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* scope (string) - The scope of builds to show
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3ProjectsIdBuildsArtifactsRefNameDownload
This feature was introduced in GitLab 8.10


```js
gitlab.getV3ProjectsIdBuildsArtifactsRefNameDownload({
  "id": "",
  "ref_name": "",
  "job": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* ref_name (string) **required** - The ref from repository
* job (string) **required** - The name for the build

### getV3ProjectsIdBuildsBuildId
Get a specific build of a project


```js
gitlab.getV3ProjectsIdBuildsBuildId({
  "id": "",
  "build_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* build_id (integer) **required** - The ID of a build

### getV3ProjectsIdBuildsBuildIdArtifacts
This feature was introduced in GitLab 8.5


```js
gitlab.getV3ProjectsIdBuildsBuildIdArtifacts({
  "id": "",
  "build_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* build_id (integer) **required** - The ID of a build

### postV3ProjectsIdBuildsBuildIdArtifactsKeep
Keep the artifacts to prevent them from being deleted


```js
gitlab.postV3ProjectsIdBuildsBuildIdArtifactsKeep({
  "id": "",
  "build_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* build_id (integer) **required** - The ID of a build

### postV3ProjectsIdBuildsBuildIdCancel
Cancel a specific build of a project


```js
gitlab.postV3ProjectsIdBuildsBuildIdCancel({
  "id": "",
  "build_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* build_id (integer) **required** - The ID of a build

### postV3ProjectsIdBuildsBuildIdErase
Erase build (remove artifacts and build trace)


```js
gitlab.postV3ProjectsIdBuildsBuildIdErase({
  "id": "",
  "build_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* build_id (integer) **required** - The ID of a build

### postV3ProjectsIdBuildsBuildIdPlay
This feature was added in GitLab 8.11


```js
gitlab.postV3ProjectsIdBuildsBuildIdPlay({
  "id": "",
  "build_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* build_id (integer) **required** - The ID of a Build

### postV3ProjectsIdBuildsBuildIdRetry
Retry a specific build of a project


```js
gitlab.postV3ProjectsIdBuildsBuildIdRetry({
  "id": "",
  "build_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* build_id (integer) **required** - The ID of a build

### getV3ProjectsIdBuildsBuildIdTrace
Get a trace of a specific build of a project


```js
gitlab.getV3ProjectsIdBuildsBuildIdTrace({
  "id": "",
  "build_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* build_id (integer) **required** - The ID of a build

### getV3ProjectsIdDeployKeys
Get a specific project's deploy keys


```js
gitlab.getV3ProjectsIdDeployKeys({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project

### postV3ProjectsIdDeployKeys
Add new deploy key to currently authenticated user


```js
gitlab.postV3ProjectsIdDeployKeys({
  "id": "",
  "key": "",
  "title": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key (string) **required** - The new deploy key
* title (string) **required** - The name of the deploy key

### deleteV3ProjectsIdDeployKeysKeyId
Delete deploy key for a project


```js
gitlab.deleteV3ProjectsIdDeployKeysKeyId({
  "id": "",
  "key_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key_id (integer) **required** - The ID of the deploy key

### getV3ProjectsIdDeployKeysKeyId
Get single deploy key


```js
gitlab.getV3ProjectsIdDeployKeysKeyId({
  "id": "",
  "key_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key_id (integer) **required** - The ID of the deploy key

### deleteV3ProjectsIdDeployKeysKeyIdDisable
This feature was added in GitLab 8.11


```js
gitlab.deleteV3ProjectsIdDeployKeysKeyIdDisable({
  "id": "",
  "key_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key_id (integer) **required** - The ID of the deploy key

### postV3ProjectsIdDeployKeysKeyIdEnable
This feature was added in GitLab 8.11


```js
gitlab.postV3ProjectsIdDeployKeysKeyIdEnable({
  "id": "",
  "key_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key_id (integer) **required** - The ID of the deploy key

### getV3ProjectsIdDeployments
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdDeployments({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3ProjectsIdDeploymentsDeploymentId
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdDeploymentsDeploymentId({
  "id": "",
  "deployment_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* deployment_id (integer) **required** - The deployment ID

### getV3ProjectsIdEnvironments
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdEnvironments({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdEnvironments
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3ProjectsIdEnvironments({
  "id": "",
  "name": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* name (string) **required** - The name of the environment to be created
* external_url (string) - URL on which this deployment is viewable
* slug (string)

### deleteV3ProjectsIdEnvironmentsEnvironmentId
This feature was introduced in GitLab 8.11.


```js
gitlab.deleteV3ProjectsIdEnvironmentsEnvironmentId({
  "id": "",
  "environment_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* environment_id (integer) **required** - The environment ID

### putV3ProjectsIdEnvironmentsEnvironmentId
This feature was introduced in GitLab 8.11.


```js
gitlab.putV3ProjectsIdEnvironmentsEnvironmentId({
  "id": "",
  "environment_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* environment_id (integer) **required** - The environment ID
* name (string) - The new environment name
* external_url (string) - The new URL on which this deployment is viewable
* slug (string)

### getV3ProjectsIdEvents
Get events for a single project


```js
gitlab.getV3ProjectsIdEvents({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### deleteV3ProjectsIdFork
Remove a forked_from relationship


```js
gitlab.deleteV3ProjectsIdFork({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### postV3ProjectsIdForkForkedFromId
Mark this project as forked from another


```js
gitlab.postV3ProjectsIdForkForkedFromId({
  "id": "",
  "forked_from_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* forked_from_id (string) **required** - The ID of the project it was forked from

### getV3ProjectsIdHooks
Get project hooks


```js
gitlab.getV3ProjectsIdHooks({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdHooks
Add hook to project


```js
gitlab.postV3ProjectsIdHooks({
  "id": "",
  "url": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* url (string) **required** - The URL to send the request to
* push_events (boolean) - Trigger hook on push events
* issues_events (boolean) - Trigger hook on issues events
* merge_requests_events (boolean) - Trigger hook on merge request events
* tag_push_events (boolean) - Trigger hook on tag push events
* note_events (boolean) - Trigger hook on note(comment) events
* build_events (boolean) - Trigger hook on build events
* pipeline_events (boolean) - Trigger hook on pipeline events
* wiki_page_events (boolean) - Trigger hook on wiki events
* enable_ssl_verification (boolean) - Do SSL verification when triggering the hook
* token (string) - Secret token to validate received payloads; this will not be returned in the response

### deleteV3ProjectsIdHooksHookId
Deletes project hook


```js
gitlab.deleteV3ProjectsIdHooksHookId({
  "id": "",
  "hook_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* hook_id (integer) **required** - The ID of the hook to delete

### getV3ProjectsIdHooksHookId
Get a project hook


```js
gitlab.getV3ProjectsIdHooksHookId({
  "id": "",
  "hook_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* hook_id (integer) **required** - The ID of a project hook

### putV3ProjectsIdHooksHookId
Update an existing project hook


```js
gitlab.putV3ProjectsIdHooksHookId({
  "id": "",
  "hook_id": 0,
  "url": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* hook_id (integer) **required** - The ID of the hook to update
* url (string) **required** - The URL to send the request to
* push_events (boolean) - Trigger hook on push events
* issues_events (boolean) - Trigger hook on issues events
* merge_requests_events (boolean) - Trigger hook on merge request events
* tag_push_events (boolean) - Trigger hook on tag push events
* note_events (boolean) - Trigger hook on note(comment) events
* build_events (boolean) - Trigger hook on build events
* pipeline_events (boolean) - Trigger hook on pipeline events
* wiki_page_events (boolean) - Trigger hook on wiki events
* enable_ssl_verification (boolean) - Do SSL verification when triggering the hook
* token (string) - Secret token to validate received payloads; this will not be returned in the response

### getV3ProjectsIdIssues
Get a list of project issues


```js
gitlab.getV3ProjectsIdIssues({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* state (string) - Return opened, closed, or all issues
* iid (integer) - Return the issue having the given `iid`
* labels (string) - Comma-separated list of label names
* milestone (string) - Return issues for a specific milestone
* order_by (string) - Return issues ordered by `created_at` or `updated_at` fields.
* sort (string) - Return issues sorted in `asc` or `desc` order.
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdIssues
Create a new project issue


```js
gitlab.postV3ProjectsIdIssues({
  "id": "",
  "title": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* title (string) **required** - The title of an issue
* created_at (string) - Date time when the issue was created. Available only for admins and project owners.
* merge_request_for_resolving_discussions (integer) - The IID of a merge request for which to resolve discussions
* description (string) - The description of an issue
* assignee_id (integer) - The ID of a user to assign issue
* milestone_id (integer) - The ID of a milestone to assign issue
* labels (string) - Comma-separated list of label names
* due_date (string) - Date time string in the format YEAR-MONTH-DAY
* confidential (boolean) - Boolean parameter if the issue should be confidential

### deleteV3ProjectsIdIssuesIssueId
Delete a project issue


```js
gitlab.deleteV3ProjectsIdIssuesIssueId({
  "id": "",
  "issue_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of a project issue

### getV3ProjectsIdIssuesIssueId
Get a single project issue


```js
gitlab.getV3ProjectsIdIssuesIssueId({
  "id": "",
  "issue_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of a project issue

### putV3ProjectsIdIssuesIssueId
Update an existing issue


```js
gitlab.putV3ProjectsIdIssuesIssueId({
  "id": "",
  "issue_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of a project issue
* title (string) - The title of an issue
* updated_at (string) - Date time when the issue was updated. Available only for admins and project owners.
* state_event (string) - State of the issue
* description (string) - The description of an issue
* assignee_id (integer) - The ID of a user to assign issue
* milestone_id (integer) - The ID of a milestone to assign issue
* labels (string) - Comma-separated list of label names
* due_date (string) - Date time string in the format YEAR-MONTH-DAY
* confidential (boolean) - Boolean parameter if the issue should be confidential
* created_at (string)

### postV3ProjectsIdIssuesIssueIdAddSpentTime
Add spent time for a project issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdAddSpentTime({
  "id": "",
  "issue_id": 0,
  "duration": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of a project issue
* duration (string) **required** - The duration to be parsed

### getV3ProjectsIdIssuesIssueIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdIssuesIssueIdAwardEmoji({
  "id": "",
  "issue_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of an Issue, Merge Request or Snippet
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdIssuesIssueIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.postV3ProjectsIdIssuesIssueIdAwardEmoji({
  "name": "",
  "id": 0,
  "issue_id": 0
}, context)
```

#### Parameters
* name (string) **required** - The name of a award_emoji (without colons)
* id (integer) **required**
* issue_id (integer) **required**

### deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "issue_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of an award emoji
* id (integer) **required**
* issue_id (integer) **required**

### getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "issue_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of the award
* id (integer) **required**
* issue_id (integer) **required**

### postV3ProjectsIdIssuesIssueIdMove
Move an existing issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdMove({
  "id": "",
  "issue_id": 0,
  "to_project_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of a project issue
* to_project_id (integer) **required** - The ID of the new project

### getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji({
  "id": 0,
  "issue_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* id (integer) **required**
* issue_id (integer) **required**
* note_id (integer) **required**

### postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji({
  "name": "",
  "id": 0,
  "issue_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* name (string) **required** - The name of a award_emoji (without colons)
* id (integer) **required**
* issue_id (integer) **required**
* note_id (integer) **required**

### deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "issue_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of an award emoji
* id (integer) **required**
* issue_id (integer) **required**
* note_id (integer) **required**

### getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "issue_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of the award
* id (integer) **required**
* issue_id (integer) **required**
* note_id (integer) **required**

### postV3ProjectsIdIssuesIssueIdResetSpentTime
Reset spent time for a project issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdResetSpentTime({
  "id": "",
  "issue_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of a project issue

### postV3ProjectsIdIssuesIssueIdResetTimeEstimate
Reset the time estimate for a project issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdResetTimeEstimate({
  "id": "",
  "issue_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of a project issue

### postV3ProjectsIdIssuesIssueIdTimeEstimate
Set a time estimate for a project issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdTimeEstimate({
  "id": "",
  "issue_id": 0,
  "duration": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of a project issue
* duration (string) **required** - The duration to be parsed

### getV3ProjectsIdIssuesIssueIdTimeStats
Show time stats for a project issue


```js
gitlab.getV3ProjectsIdIssuesIssueIdTimeStats({
  "id": "",
  "issue_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of a project issue

### postV3ProjectsIdIssuesIssueIdTodo
Create a todo on an issuable


```js
gitlab.postV3ProjectsIdIssuesIssueIdTodo({
  "id": "",
  "issue_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* issue_id (integer) **required** - The ID of an issuable

### getV3ProjectsIdIssuesNoteableIdNotes
Get a list of project +noteable+ notes


```js
gitlab.getV3ProjectsIdIssuesNoteableIdNotes({
  "id": "",
  "noteable_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdIssuesNoteableIdNotes
Create a new +noteable+ note


```js
gitlab.postV3ProjectsIdIssuesNoteableIdNotes({
  "id": "",
  "noteable_id": 0,
  "body": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* body (string) **required** - The content of a note
* created_at (string) - The creation date of the note

### deleteV3ProjectsIdIssuesNoteableIdNotesNoteId
Delete a +noteable+ note


```js
gitlab.deleteV3ProjectsIdIssuesNoteableIdNotesNoteId({
  "id": "",
  "noteable_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* note_id (integer) **required** - The ID of a note

### getV3ProjectsIdIssuesNoteableIdNotesNoteId
Get a single +noteable+ note


```js
gitlab.getV3ProjectsIdIssuesNoteableIdNotesNoteId({
  "id": "",
  "note_id": 0,
  "noteable_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* note_id (integer) **required** - The ID of a note
* noteable_id (integer) **required** - The ID of the noteable

### putV3ProjectsIdIssuesNoteableIdNotesNoteId
Update an existing +noteable+ note


```js
gitlab.putV3ProjectsIdIssuesNoteableIdNotesNoteId({
  "id": "",
  "noteable_id": 0,
  "note_id": 0,
  "body": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* note_id (integer) **required** - The ID of a note
* body (string) **required** - The content of a note

### deleteV3ProjectsIdIssuesSubscribableIdSubscription
Unsubscribe from a resource


```js
gitlab.deleteV3ProjectsIdIssuesSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* subscribable_id (string) **required** - The ID of a resource

### postV3ProjectsIdIssuesSubscribableIdSubscription
Subscribe to a resource


```js
gitlab.postV3ProjectsIdIssuesSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* subscribable_id (string) **required** - The ID of a resource

### getV3ProjectsIdKeys
Get a specific project's deploy keys


```js
gitlab.getV3ProjectsIdKeys({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project

### postV3ProjectsIdKeys
Add new deploy key to currently authenticated user


```js
gitlab.postV3ProjectsIdKeys({
  "id": "",
  "key": "",
  "title": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key (string) **required** - The new deploy key
* title (string) **required** - The name of the deploy key

### deleteV3ProjectsIdKeysKeyId
Delete deploy key for a project


```js
gitlab.deleteV3ProjectsIdKeysKeyId({
  "id": "",
  "key_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key_id (integer) **required** - The ID of the deploy key

### getV3ProjectsIdKeysKeyId
Get single deploy key


```js
gitlab.getV3ProjectsIdKeysKeyId({
  "id": "",
  "key_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key_id (integer) **required** - The ID of the deploy key

### deleteV3ProjectsIdKeysKeyIdDisable
This feature was added in GitLab 8.11


```js
gitlab.deleteV3ProjectsIdKeysKeyIdDisable({
  "id": "",
  "key_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key_id (integer) **required** - The ID of the deploy key

### postV3ProjectsIdKeysKeyIdEnable
This feature was added in GitLab 8.11


```js
gitlab.postV3ProjectsIdKeysKeyIdEnable({
  "id": "",
  "key_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of the project
* key_id (integer) **required** - The ID of the deploy key

### deleteV3ProjectsIdLabels
Delete an existing label


```js
gitlab.deleteV3ProjectsIdLabels({
  "id": "",
  "name": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* name (string) **required** - The name of the label to be deleted

### getV3ProjectsIdLabels
Get all labels of the project


```js
gitlab.getV3ProjectsIdLabels({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### postV3ProjectsIdLabels
Create a new label


```js
gitlab.postV3ProjectsIdLabels({
  "id": "",
  "name": "",
  "color": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* name (string) **required** - The name of the label to be created
* color (string) **required** - The color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)
* description (string) - The description of label to be created
* priority (integer) - The priority of the label

### putV3ProjectsIdLabels
Update an existing label. At least one optional parameter is required.


```js
gitlab.putV3ProjectsIdLabels({
  "id": "",
  "name": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* name (string) **required** - The name of the label to be updated
* new_name (string) - The new name of the label
* color (string) - The new color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)
* description (string) - The new description of label
* priority (integer) - The priority of the label

### deleteV3ProjectsIdLabelsSubscribableIdSubscription
Unsubscribe from a resource


```js
gitlab.deleteV3ProjectsIdLabelsSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* subscribable_id (string) **required** - The ID of a resource

### postV3ProjectsIdLabelsSubscribableIdSubscription
Subscribe to a resource


```js
gitlab.postV3ProjectsIdLabelsSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* subscribable_id (string) **required** - The ID of a resource

### getV3ProjectsIdMembers
Gets a list of group or project members viewable by the authenticated user.


```js
gitlab.getV3ProjectsIdMembers({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* query (string) - A query string to search for members
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdMembers
Adds a member to a group or project.


```js
gitlab.postV3ProjectsIdMembers({
  "id": "",
  "user_id": 0,
  "access_level": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* user_id (integer) **required** - The user ID of the new member
* access_level (integer) **required** - A valid access level (defaults: `30`, developer access level)
* expires_at (string) - Date string in the format YEAR-MONTH-DAY

### deleteV3ProjectsIdMembersUserId
Removes a user from a group or project.


```js
gitlab.deleteV3ProjectsIdMembersUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* user_id (integer) **required** - The user ID of the member

### getV3ProjectsIdMembersUserId
Gets a member of a group or project.


```js
gitlab.getV3ProjectsIdMembersUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* user_id (integer) **required** - The user ID of the member

### putV3ProjectsIdMembersUserId
Updates a member of a group or project.


```js
gitlab.putV3ProjectsIdMembersUserId({
  "id": "",
  "user_id": 0,
  "access_level": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* user_id (integer) **required** - The user ID of the new member
* access_level (integer) **required** - A valid access level
* expires_at (string) - Date string in the format YEAR-MONTH-DAY

### getV3ProjectsIdMergeRequestMergeRequestId
This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of a merge request

### putV3ProjectsIdMergeRequestMergeRequestId
Update a merge request


```js
gitlab.putV3ProjectsIdMergeRequestMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* title (string) - The title of the merge request
* target_branch (string) - The target branch
* state_event (string) - Status of the merge request
* description (string) - The description of the merge request
* assignee_id (integer) - The ID of a user to assign the merge request
* milestone_id (integer) - The ID of a milestone to assign the merge request
* labels (string) - Comma-separated list of label names
* remove_source_branch (boolean) - Remove source branch when merging
* merge_request_id (integer) **required**

### postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds
Cancel merge if "Merge When Pipeline Succeeds" is enabled


```js
gitlab.postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestMergeRequestIdChanges
Show the merge request changes


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestIdChanges({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues
List issues that will be closed on merge


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestIdComments({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* merge_request_id (integer) **required**

### postV3ProjectsIdMergeRequestMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0


```js
gitlab.postV3ProjectsIdMergeRequestMergeRequestIdComments({
  "id": "",
  "note": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* note (string) **required** - The text of the comment
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestMergeRequestIdCommits
Get the commits of a merge request


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestIdCommits({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required**

### putV3ProjectsIdMergeRequestMergeRequestIdMerge
Merge a merge request


```js
gitlab.putV3ProjectsIdMergeRequestMergeRequestIdMerge({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_commit_message (string) - Custom merge commit message
* should_remove_source_branch (boolean) - When true, the source branch will be deleted if possible
* merge_when_build_succeeds (boolean) - When true, this merge request will be merged when the pipeline succeeds
* sha (string) - When present, must have the HEAD SHA of the source branch
* merge_request_id (integer) **required**

### deleteV3ProjectsIdMergeRequestSubscribableIdSubscription
Unsubscribe from a resource


```js
gitlab.deleteV3ProjectsIdMergeRequestSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* subscribable_id (string) **required** - The ID of a resource

### postV3ProjectsIdMergeRequestSubscribableIdSubscription
Subscribe to a resource


```js
gitlab.postV3ProjectsIdMergeRequestSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* subscribable_id (string) **required** - The ID of a resource

### getV3ProjectsIdMergeRequests
List merge requests


```js
gitlab.getV3ProjectsIdMergeRequests({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* state (string) - Return opened, closed, merged, or all merge requests
* order_by (string) - Return merge requests ordered by `created_at` or `updated_at` fields.
* sort (string) - Return merge requests sorted in `asc` or `desc` order.
* iid (array) - The IID of the merge requests
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdMergeRequests
Create a merge request


```js
gitlab.postV3ProjectsIdMergeRequests({
  "id": "",
  "title": "",
  "source_branch": "",
  "target_branch": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* title (string) **required** - The title of the merge request
* source_branch (string) **required** - The source branch
* target_branch (string) **required** - The target branch
* target_project_id (integer) - The target project of the merge request defaults to the :id of the project
* description (string) - The description of the merge request
* assignee_id (integer) - The ID of a user to assign the merge request
* milestone_id (integer) - The ID of a milestone to assign the merge request
* labels (string) - Comma-separated list of label names
* remove_source_branch (boolean) - Remove source branch when merging

### deleteV3ProjectsIdMergeRequestsMergeRequestId
Delete a merge request


```js
gitlab.deleteV3ProjectsIdMergeRequestsMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of a merge request

### getV3ProjectsIdMergeRequestsMergeRequestId
Get a single merge request


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required**

### putV3ProjectsIdMergeRequestsMergeRequestId
Update a merge request


```js
gitlab.putV3ProjectsIdMergeRequestsMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* title (string) - The title of the merge request
* target_branch (string) - The target branch
* state_event (string) - Status of the merge request
* description (string) - The description of the merge request
* assignee_id (integer) - The ID of a user to assign the merge request
* milestone_id (integer) - The ID of a milestone to assign the merge request
* labels (string) - Comma-separated list of label names
* remove_source_branch (boolean) - Remove source branch when merging
* merge_request_id (integer) **required**

### postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime
Add spent time for a project merge_request


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime({
  "id": "",
  "merge_request_id": 0,
  "duration": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of a project merge_request
* duration (string) **required** - The duration to be parsed

### getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of an Issue, Merge Request or Snippet
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji({
  "name": "",
  "id": 0,
  "merge_request_id": 0
}, context)
```

#### Parameters
* name (string) **required** - The name of a award_emoji (without colons)
* id (integer) **required**
* merge_request_id (integer) **required**

### deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "merge_request_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of an award emoji
* id (integer) **required**
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "merge_request_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of the award
* id (integer) **required**
* merge_request_id (integer) **required**

### postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds
Cancel merge if "Merge When Pipeline Succeeds" is enabled


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestsMergeRequestIdChanges
Show the merge request changes


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdChanges({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues
List issues that will be closed on merge


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestsMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdComments({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* merge_request_id (integer) **required**

### postV3ProjectsIdMergeRequestsMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdComments({
  "id": "",
  "note": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* note (string) **required** - The text of the comment
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestsMergeRequestIdCommits
Get the commits of a merge request


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdCommits({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required**

### putV3ProjectsIdMergeRequestsMergeRequestIdMerge
Merge a merge request


```js
gitlab.putV3ProjectsIdMergeRequestsMergeRequestIdMerge({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_commit_message (string) - Custom merge commit message
* should_remove_source_branch (boolean) - When true, the source branch will be deleted if possible
* merge_when_build_succeeds (boolean) - When true, this merge request will be merged when the pipeline succeeds
* sha (string) - When present, must have the HEAD SHA of the source branch
* merge_request_id (integer) **required**

### getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji({
  "id": 0,
  "merge_request_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* id (integer) **required**
* merge_request_id (integer) **required**
* note_id (integer) **required**

### postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji({
  "name": "",
  "id": 0,
  "merge_request_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* name (string) **required** - The name of a award_emoji (without colons)
* id (integer) **required**
* merge_request_id (integer) **required**
* note_id (integer) **required**

### deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "merge_request_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of an award emoji
* id (integer) **required**
* merge_request_id (integer) **required**
* note_id (integer) **required**

### getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "merge_request_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of the award
* id (integer) **required**
* merge_request_id (integer) **required**
* note_id (integer) **required**

### postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime
Reset spent time for a project merge_request


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of a project merge_request

### postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate
Reset the time estimate for a project merge_request


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of a project merge_request

### postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate
Set a time estimate for a project merge_request


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate({
  "id": "",
  "merge_request_id": 0,
  "duration": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of a project merge_request
* duration (string) **required** - The duration to be parsed

### getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats
Show time stats for a project merge_request


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of a project merge_request

### postV3ProjectsIdMergeRequestsMergeRequestIdTodo
Create a todo on an issuable


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdTodo({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of an issuable

### getV3ProjectsIdMergeRequestsMergeRequestIdVersions
This feature was introduced in GitLab 8.12.


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdVersions({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of a merge request

### getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId
This feature was introduced in GitLab 8.12.


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId({
  "id": "",
  "merge_request_id": 0,
  "version_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* merge_request_id (integer) **required** - The ID of a merge request
* version_id (integer) **required** - The ID of a merge request diff version

### getV3ProjectsIdMergeRequestsNoteableIdNotes
Get a list of project +noteable+ notes


```js
gitlab.getV3ProjectsIdMergeRequestsNoteableIdNotes({
  "id": "",
  "noteable_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdMergeRequestsNoteableIdNotes
Create a new +noteable+ note


```js
gitlab.postV3ProjectsIdMergeRequestsNoteableIdNotes({
  "id": "",
  "noteable_id": 0,
  "body": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* body (string) **required** - The content of a note
* created_at (string) - The creation date of the note

### deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
Delete a +noteable+ note


```js
gitlab.deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId({
  "id": "",
  "noteable_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* note_id (integer) **required** - The ID of a note

### getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
Get a single +noteable+ note


```js
gitlab.getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId({
  "id": "",
  "note_id": 0,
  "noteable_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* note_id (integer) **required** - The ID of a note
* noteable_id (integer) **required** - The ID of the noteable

### putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
Update an existing +noteable+ note


```js
gitlab.putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId({
  "id": "",
  "noteable_id": 0,
  "note_id": 0,
  "body": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* note_id (integer) **required** - The ID of a note
* body (string) **required** - The content of a note

### deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription
Unsubscribe from a resource


```js
gitlab.deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* subscribable_id (string) **required** - The ID of a resource

### postV3ProjectsIdMergeRequestsSubscribableIdSubscription
Subscribe to a resource


```js
gitlab.postV3ProjectsIdMergeRequestsSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* subscribable_id (string) **required** - The ID of a resource

### getV3ProjectsIdMilestones
Get a list of project milestones


```js
gitlab.getV3ProjectsIdMilestones({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* state (string) - Return "active", "closed", or "all" milestones
* iid (array) - The IID of the milestone
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdMilestones
Create a new project milestone


```js
gitlab.postV3ProjectsIdMilestones({
  "id": "",
  "title": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* title (string) **required** - The title of the milestone
* description (string) - The description of the milestone
* due_date (string) - The due date of the milestone. The ISO 8601 date format (%Y-%m-%d)
* start_date (string) - The start date of the milestone. The ISO 8601 date format (%Y-%m-%d)

### getV3ProjectsIdMilestonesMilestoneId
Get a single project milestone


```js
gitlab.getV3ProjectsIdMilestonesMilestoneId({
  "id": "",
  "milestone_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* milestone_id (integer) **required** - The ID of a project milestone

### putV3ProjectsIdMilestonesMilestoneId
Update an existing project milestone


```js
gitlab.putV3ProjectsIdMilestonesMilestoneId({
  "id": "",
  "milestone_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* milestone_id (integer) **required** - The ID of a project milestone
* title (string) - The title of the milestone
* state_event (string) - The state event of the milestone 
* description (string) - The description of the milestone
* due_date (string) - The due date of the milestone. The ISO 8601 date format (%Y-%m-%d)
* start_date (string) - The start date of the milestone. The ISO 8601 date format (%Y-%m-%d)

### getV3ProjectsIdMilestonesMilestoneIdIssues
Get all issues for a single project milestone


```js
gitlab.getV3ProjectsIdMilestonesMilestoneIdIssues({
  "id": "",
  "milestone_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* milestone_id (integer) **required** - The ID of a project milestone
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3ProjectsIdNotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.getV3ProjectsIdNotificationSettings({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The group ID or project ID or project NAMESPACE/PROJECT_NAME

### putV3ProjectsIdNotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.putV3ProjectsIdNotificationSettings({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The group ID or project ID or project NAMESPACE/PROJECT_NAME
* level (string) - The project notification level
* new_note (boolean) - Enable/disable this notification
* new_issue (boolean) - Enable/disable this notification
* reopen_issue (boolean) - Enable/disable this notification
* close_issue (boolean) - Enable/disable this notification
* reassign_issue (boolean) - Enable/disable this notification
* new_merge_request (boolean) - Enable/disable this notification
* reopen_merge_request (boolean) - Enable/disable this notification
* close_merge_request (boolean) - Enable/disable this notification
* reassign_merge_request (boolean) - Enable/disable this notification
* merge_merge_request (boolean) - Enable/disable this notification
* failed_pipeline (boolean) - Enable/disable this notification
* success_pipeline (boolean) - Enable/disable this notification

### postV3ProjectsIdPipeline
This feature was introduced in GitLab 8.14


```js
gitlab.postV3ProjectsIdPipeline({
  "id": "",
  "ref": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* ref (string) **required** - Reference

### getV3ProjectsIdPipelines
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdPipelines({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* scope (string) - Either running, branches, or tags

### getV3ProjectsIdPipelinesPipelineId
This feature was introduced in GitLab 8.11


```js
gitlab.getV3ProjectsIdPipelinesPipelineId({
  "id": "",
  "pipeline_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* pipeline_id (integer) **required** - The pipeline ID

### postV3ProjectsIdPipelinesPipelineIdCancel
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3ProjectsIdPipelinesPipelineIdCancel({
  "id": "",
  "pipeline_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* pipeline_id (integer) **required** - The pipeline ID

### postV3ProjectsIdPipelinesPipelineIdRetry
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3ProjectsIdPipelinesPipelineIdRetry({
  "id": "",
  "pipeline_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* pipeline_id (integer) **required** - The pipeline ID

### getV3ProjectsIdRepositoryArchive
Get an archive of the repository


```js
gitlab.getV3ProjectsIdRepositoryArchive({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) - The commit sha of the archive to be downloaded
* format (string) - The archive format

### getV3ProjectsIdRepositoryBlobsSha
Get a raw file contents


```js
gitlab.getV3ProjectsIdRepositoryBlobsSha({
  "id": "",
  "sha": "",
  "filepath": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - The commit, branch name, or tag name
* filepath (string) **required** - The path to the file to display

### getV3ProjectsIdRepositoryBranches
Get a project repository branches


```js
gitlab.getV3ProjectsIdRepositoryBranches({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### postV3ProjectsIdRepositoryBranches
Create branch


```js
gitlab.postV3ProjectsIdRepositoryBranches({
  "id": "",
  "branch_name": "",
  "ref": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* branch_name (string) **required** - The name of the branch
* ref (string) **required** - Create branch from commit sha or existing branch

### deleteV3ProjectsIdRepositoryBranchesBranch
Delete a branch


```js
gitlab.deleteV3ProjectsIdRepositoryBranchesBranch({
  "id": "",
  "branch": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* branch (string) **required** - The name of the branch

### getV3ProjectsIdRepositoryBranchesBranch
Get a single branch


```js
gitlab.getV3ProjectsIdRepositoryBranchesBranch({
  "id": "",
  "branch": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* branch (string) **required** - The name of the branch

### putV3ProjectsIdRepositoryBranchesBranchProtect
Protect a single branch


```js
gitlab.putV3ProjectsIdRepositoryBranchesBranchProtect({
  "id": "",
  "branch": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* branch (string) **required** - The name of the branch
* developers_can_push (boolean) - Flag if developers can push to that branch
* developers_can_merge (boolean) - Flag if developers can merge to that branch

### putV3ProjectsIdRepositoryBranchesBranchUnprotect
Unprotect a single branch


```js
gitlab.putV3ProjectsIdRepositoryBranchesBranchUnprotect({
  "id": "",
  "branch": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* branch (string) **required** - The name of the branch

### getV3ProjectsIdRepositoryCommits
Get a project repository commits


```js
gitlab.getV3ProjectsIdRepositoryCommits({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* ref_name (string) - The name of a repository branch or tag, if not given the default branch is used
* since (string) - Only commits after or in this date will be returned
* until (string) - Only commits before or in this date will be returned
* page (integer) - The page for pagination
* per_page (integer) - The number of results per page
* path (string) - The file path

### postV3ProjectsIdRepositoryCommits
This feature was introduced in GitLab 8.13


```js
gitlab.postV3ProjectsIdRepositoryCommits({
  "id": "",
  "branch_name": "",
  "commit_message": "",
  "actions": []
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* branch_name (string) **required** - The name of branch
* commit_message (string) **required** - Commit message
* actions (array) **required** - Actions to perform in commit
* author_email (string) - Author email for commit
* author_name (string) - Author name for commit

### getV3ProjectsIdRepositoryCommitsSha
Get a specific commit of a project


```js
gitlab.getV3ProjectsIdRepositoryCommitsSha({
  "id": "",
  "sha": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - A commit sha, or the name of a branch or tag

### getV3ProjectsIdRepositoryCommitsShaBlob
Get a raw file contents


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaBlob({
  "id": "",
  "sha": "",
  "filepath": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - The commit, branch name, or tag name
* filepath (string) **required** - The path to the file to display

### getV3ProjectsIdRepositoryCommitsShaBuilds
Get builds for a specific commit of a project


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaBuilds({
  "id": "",
  "sha": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - The SHA id of a commit
* scope (string) - The scope of builds to show
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdRepositoryCommitsShaCherryPick
This feature was introduced in GitLab 8.15


```js
gitlab.postV3ProjectsIdRepositoryCommitsShaCherryPick({
  "id": "",
  "sha": "",
  "branch": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - A commit sha to be cherry picked
* branch (string) **required** - The name of the branch

### getV3ProjectsIdRepositoryCommitsShaComments
Get a commit's comments


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaComments({
  "id": "",
  "sha": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* sha (string) **required** - A commit sha, or the name of a branch or tag

### postV3ProjectsIdRepositoryCommitsShaComments
Post comment to commit


```js
gitlab.postV3ProjectsIdRepositoryCommitsShaComments({
  "id": "",
  "sha": "",
  "note": "",
  "line": 0,
  "line_type": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - The commit's SHA
* note (string) **required** - The text of the comment
* path (string) - The file path
* line (integer) **required** - The line number
* line_type (string) **required** - The type of the line

### getV3ProjectsIdRepositoryCommitsShaDiff
Get the diff for a specific commit of a project


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaDiff({
  "id": "",
  "sha": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - A commit sha, or the name of a branch or tag

### getV3ProjectsIdRepositoryCommitsShaStatuses
Get a commit's statuses


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaStatuses({
  "id": "",
  "sha": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - The commit hash
* ref (string) - The ref
* stage (string) - The stage
* name (string) - The name
* all (string) - Show all statuses, default: false
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3ProjectsIdRepositoryCompare
Compare two branches, tags, or commits


```js
gitlab.getV3ProjectsIdRepositoryCompare({
  "id": "",
  "from": "",
  "to": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* from (string) **required** - The commit, branch name, or tag name to start comparison
* to (string) **required** - The commit, branch name, or tag name to stop comparison

### getV3ProjectsIdRepositoryContributors
Get repository contributors


```js
gitlab.getV3ProjectsIdRepositoryContributors({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### deleteV3ProjectsIdRepositoryFiles
Delete an existing file in repository


```js
gitlab.deleteV3ProjectsIdRepositoryFiles({
  "id": "",
  "file_path": "",
  "branch_name": "",
  "commit_message": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* file_path (string) **required** - The path to new file. Ex. lib/class.rb
* branch_name (string) **required** - The name of branch
* commit_message (string) **required** - Commit Message
* author_email (string) - The email of the author
* author_name (string) - The name of the author

### getV3ProjectsIdRepositoryFiles
Get a file from repository


```js
gitlab.getV3ProjectsIdRepositoryFiles({
  "id": "",
  "file_path": "",
  "ref": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* file_path (string) **required** - The path to the file. Ex. lib/class.rb
* ref (string) **required** - The name of branch, tag, or commit

### postV3ProjectsIdRepositoryFiles
Create new file in repository


```js
gitlab.postV3ProjectsIdRepositoryFiles({
  "id": "",
  "file_path": "",
  "branch_name": "",
  "commit_message": "",
  "content": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* file_path (string) **required** - The path to new file. Ex. lib/class.rb
* branch_name (string) **required** - The name of branch
* commit_message (string) **required** - Commit Message
* author_email (string) - The email of the author
* author_name (string) - The name of the author
* content (string) **required** - File content
* encoding (string) - File encoding

### putV3ProjectsIdRepositoryFiles
Update existing file in repository


```js
gitlab.putV3ProjectsIdRepositoryFiles({
  "id": "",
  "file_path": "",
  "branch_name": "",
  "commit_message": "",
  "content": ""
}, context)
```

#### Parameters
* id (string) **required** - The project ID
* file_path (string) **required** - The path to new file. Ex. lib/class.rb
* branch_name (string) **required** - The name of branch
* commit_message (string) **required** - Commit Message
* author_email (string) - The email of the author
* author_name (string) - The name of the author
* content (string) **required** - File content
* encoding (string) - File encoding

### deleteV3ProjectsIdRepositoryMergedBranches



```js
gitlab.deleteV3ProjectsIdRepositoryMergedBranches({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### getV3ProjectsIdRepositoryRawBlobsSha
Get a raw blob contents by blob sha


```js
gitlab.getV3ProjectsIdRepositoryRawBlobsSha({
  "id": "",
  "sha": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - The commit, branch name, or tag name

### getV3ProjectsIdRepositoryTags
Get a project repository tags


```js
gitlab.getV3ProjectsIdRepositoryTags({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### postV3ProjectsIdRepositoryTags
Create a new repository tag


```js
gitlab.postV3ProjectsIdRepositoryTags({
  "id": "",
  "tag_name": "",
  "ref": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* tag_name (string) **required** - The name of the tag
* ref (string) **required** - The commit sha or branch name
* message (string) - Specifying a message creates an annotated tag
* release_description (string) - Specifying release notes stored in the GitLab database

### deleteV3ProjectsIdRepositoryTagsTagName
Delete a repository tag


```js
gitlab.deleteV3ProjectsIdRepositoryTagsTagName({
  "id": "",
  "tag_name": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* tag_name (string) **required** - The name of the tag

### getV3ProjectsIdRepositoryTagsTagName
Get a single repository tag


```js
gitlab.getV3ProjectsIdRepositoryTagsTagName({
  "id": "",
  "tag_name": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* tag_name (string) **required** - The name of the tag

### postV3ProjectsIdRepositoryTagsTagNameRelease
Add a release note to a tag


```js
gitlab.postV3ProjectsIdRepositoryTagsTagNameRelease({
  "id": "",
  "tag_name": "",
  "description": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* tag_name (string) **required** - The name of the tag
* description (string) **required** - Release notes with markdown support

### putV3ProjectsIdRepositoryTagsTagNameRelease
Update a tag's release note


```js
gitlab.putV3ProjectsIdRepositoryTagsTagNameRelease({
  "id": "",
  "tag_name": "",
  "description": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* tag_name (string) **required** - The name of the tag
* description (string) **required** - Release notes with markdown support

### getV3ProjectsIdRepositoryTree
Get a project repository tree


```js
gitlab.getV3ProjectsIdRepositoryTree({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* ref_name (string) - The name of a repository branch or tag, if not given the default branch is used
* path (string) - The path of the tree
* recursive (boolean) - Used to get a recursive tree

### getV3ProjectsIdRunners
Get runners available for project


```js
gitlab.getV3ProjectsIdRunners({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* scope (string) - The scope of specific runners to show
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdRunners
Enable a runner for a project


```js
gitlab.postV3ProjectsIdRunners({
  "id": "",
  "runner_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* runner_id (integer) **required** - The ID of the runner

### deleteV3ProjectsIdRunnersRunnerId
Disable project's runner


```js
gitlab.deleteV3ProjectsIdRunnersRunnerId({
  "id": "",
  "runner_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* runner_id (integer) **required** - The ID of the runner

### putV3ProjectsIdServicesAsana
Set asana service for project


```js
gitlab.putV3ProjectsIdServicesAsana({
  "api_key": "",
  "id": 0
}, context)
```

#### Parameters
* api_key (string) **required** - User API token
* restrict_to_branch (string) - Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesAssembla
Set assembla service for project


```js
gitlab.putV3ProjectsIdServicesAssembla({
  "token": "",
  "id": 0
}, context)
```

#### Parameters
* token (string) **required** - The authentication token
* subdomain (string) - Subdomain setting
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesBamboo
Set bamboo service for project


```js
gitlab.putV3ProjectsIdServicesBamboo({
  "bamboo_url": "",
  "build_key": "",
  "username": "",
  "password": "",
  "id": 0
}, context)
```

#### Parameters
* bamboo_url (string) **required** - Bamboo root URL like https://bamboo.example.com
* build_key (string) **required** - Bamboo build plan key like
* username (string) **required** - A user with API access, if applicable
* password (string) **required** - Passord of the user
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesBugzilla
Set bugzilla service for project


```js
gitlab.putV3ProjectsIdServicesBugzilla({
  "new_issue_url": "",
  "issues_url": "",
  "project_url": "",
  "id": 0
}, context)
```

#### Parameters
* new_issue_url (string) **required** - New issue URL
* issues_url (string) **required** - Issues URL
* project_url (string) **required** - Project URL
* description (string) - Description
* title (string) - Title
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesBuildkite
Set buildkite service for project


```js
gitlab.putV3ProjectsIdServicesBuildkite({
  "token": "",
  "project_url": "",
  "id": 0
}, context)
```

#### Parameters
* token (string) **required** - Buildkite project GitLab token
* project_url (string) **required** - The buildkite project URL
* enable_ssl_verification (boolean) - Enable SSL verification for communication
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesBuildsEmail
Set builds-email service for project


```js
gitlab.putV3ProjectsIdServicesBuildsEmail({
  "recipients": "",
  "id": 0
}, context)
```

#### Parameters
* recipients (string) **required** - Comma-separated list of recipient email addresses
* add_pusher (boolean) - Add pusher to recipients list
* notify_only_broken_builds (boolean) - Notify only broken builds
* build_events (string) - Event will be triggered when a build status changes
* id (integer) **required**

### putV3ProjectsIdServicesCampfire
Set campfire service for project


```js
gitlab.putV3ProjectsIdServicesCampfire({
  "token": "",
  "id": 0
}, context)
```

#### Parameters
* token (string) **required** - Campfire token
* subdomain (string) - Campfire subdomain
* room (string) - Campfire room
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesCustomIssueTracker
Set custom-issue-tracker service for project


```js
gitlab.putV3ProjectsIdServicesCustomIssueTracker({
  "new_issue_url": "",
  "issues_url": "",
  "project_url": "",
  "id": 0
}, context)
```

#### Parameters
* new_issue_url (string) **required** - New issue URL
* issues_url (string) **required** - Issues URL
* project_url (string) **required** - Project URL
* description (string) - Description
* title (string) - Title
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesDroneCi
Set drone-ci service for project


```js
gitlab.putV3ProjectsIdServicesDroneCi({
  "token": "",
  "drone_url": "",
  "id": 0
}, context)
```

#### Parameters
* token (string) **required** - Drone CI token
* drone_url (string) **required** - Drone CI URL
* enable_ssl_verification (boolean) - Enable SSL verification for communication
* push_events (string) - Event will be triggered by a push to the repository
* merge_request_events (string) - Event will be triggered when a merge request is created/updated/merged
* tag_push_events (string) - Event will be triggered when a new tag is pushed to the repository
* id (integer) **required**

### putV3ProjectsIdServicesEmailsOnPush
Set emails-on-push service for project


```js
gitlab.putV3ProjectsIdServicesEmailsOnPush({
  "recipients": "",
  "id": 0
}, context)
```

#### Parameters
* recipients (string) **required** - Comma-separated list of recipient email addresses
* disable_diffs (boolean) - Disable code diffs
* send_from_committer_email (boolean) - Send from committer
* push_events (string) - Event will be triggered by a push to the repository
* tag_push_events (string) - Event will be triggered when a new tag is pushed to the repository
* id (integer) **required**

### putV3ProjectsIdServicesExternalWiki
Set external-wiki service for project


```js
gitlab.putV3ProjectsIdServicesExternalWiki({
  "external_wiki_url": "",
  "id": 0
}, context)
```

#### Parameters
* external_wiki_url (string) **required** - The URL of the external Wiki
* id (integer) **required**

### putV3ProjectsIdServicesFlowdock
Set flowdock service for project


```js
gitlab.putV3ProjectsIdServicesFlowdock({
  "token": "",
  "id": 0
}, context)
```

#### Parameters
* token (string) **required** - Flowdock token
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesGemnasium
Set gemnasium service for project


```js
gitlab.putV3ProjectsIdServicesGemnasium({
  "api_key": "",
  "token": "",
  "id": 0
}, context)
```

#### Parameters
* api_key (string) **required** - Your personal API key on gemnasium.com
* token (string) **required** - The project's slug on gemnasium.com
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesHipchat
Set hipchat service for project


```js
gitlab.putV3ProjectsIdServicesHipchat({
  "token": "",
  "id": 0
}, context)
```

#### Parameters
* token (string) **required** - The room token
* room (string) - The room name or ID
* color (string) - The room color
* notify (boolean) - Enable notifications
* api_version (string) - Leave blank for default (v2)
* server (string) - Leave blank for default. https://hipchat.example.com
* push_events (string) - Event will be triggered by a push to the repository
* issue_events (string) - Event will be triggered when an issue is created/updated/closed
* confidential_issue_events (string) - Event will be triggered when a confidential issue is created/updated/closed
* merge_request_events (string) - Event will be triggered when a merge request is created/updated/merged
* note_events (string) - Event will be triggered when someone adds a comment
* tag_push_events (string) - Event will be triggered when a new tag is pushed to the repository
* build_events (string) - Event will be triggered when a build status changes
* id (integer) **required**

### putV3ProjectsIdServicesIrker
Set irker service for project


```js
gitlab.putV3ProjectsIdServicesIrker({
  "recipients": "",
  "id": 0
}, context)
```

#### Parameters
* recipients (string) **required** - Recipients/channels separated by whitespaces
* default_irc_uri (string) - Default: irc://irc.network.net:6697
* server_host (string) - Server host. Default localhost
* server_port (integer) - Server port. Default 6659
* colorize_messages (boolean) - Colorize messages
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesJira
Set jira service for project


```js
gitlab.putV3ProjectsIdServicesJira({
  "url": "",
  "project_key": "",
  "id": 0
}, context)
```

#### Parameters
* url (string) **required** - The URL to the JIRA project which is being linked to this GitLab project, e.g., https://jira.example.com
* project_key (string) **required** - The short identifier for your JIRA project, all uppercase, e.g., PROJ
* username (string) - The username of the user created to be used with GitLab/JIRA
* password (string) - The password of the user created to be used with GitLab/JIRA
* jira_issue_transition_id (integer) - The ID of a transition that moves issues to a closed state. You can find this number under the JIRA workflow administration (**Administration > Issues > Workflows**) by selecting **View** under **Operations** of the desired workflow of your project. The ID of each state can be found inside the parenthesis of each transition name under the **Transitions (id)** column ([see screenshot][trans]). By default, this ID is set to `2`
* commit_events (string) - Event will be triggered when a commit is created/updated
* merge_request_events (string) - Event will be triggered when a merge request is created/updated/merged
* id (integer) **required**

### putV3ProjectsIdServicesKubernetes
Set kubernetes service for project


```js
gitlab.putV3ProjectsIdServicesKubernetes({
  "namespace": "",
  "api_url": "",
  "token": "",
  "id": 0
}, context)
```

#### Parameters
* namespace (string) **required** - The Kubernetes namespace to use
* api_url (string) **required** - The URL to the Kubernetes cluster API, e.g., https://kubernetes.example.com
* token (string) **required** - The service token to authenticate against the Kubernetes cluster with
* ca_pem (string) - A custom certificate authority bundle to verify the Kubernetes cluster with (PEM format)
* id (integer) **required**

### putV3ProjectsIdServicesMattermost
Set mattermost service for project


```js
gitlab.putV3ProjectsIdServicesMattermost({
  "webhook": "",
  "id": 0
}, context)
```

#### Parameters
* webhook (string) **required** - The Mattermost webhook. e.g. http://mattermost_host/hooks/...
* push_events (string) - Event will be triggered by a push to the repository
* issue_events (string) - Event will be triggered when an issue is created/updated/closed
* confidential_issue_events (string) - Event will be triggered when a confidential issue is created/updated/closed
* merge_request_events (string) - Event will be triggered when a merge request is created/updated/merged
* note_events (string) - Event will be triggered when someone adds a comment
* tag_push_events (string) - Event will be triggered when a new tag is pushed to the repository
* build_events (string) - Event will be triggered when a build status changes
* pipeline_events (string)
* wiki_page_events (string) - Event will be triggered when a wiki page is created/updated
* id (integer) **required**

### putV3ProjectsIdServicesMattermostSlashCommands
Set mattermost-slash-commands service for project


```js
gitlab.putV3ProjectsIdServicesMattermostSlashCommands({
  "token": "",
  "id": 0
}, context)
```

#### Parameters
* token (string) **required** - The Mattermost token
* id (integer) **required**

### postV3ProjectsIdServicesMattermostSlashCommandsTrigger
Added in GitLab 8.13


```js
gitlab.postV3ProjectsIdServicesMattermostSlashCommandsTrigger({
  "id": "",
  "token": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* token (string) **required** - The Mattermost token

### putV3ProjectsIdServicesPipelinesEmail
Set pipelines-email service for project


```js
gitlab.putV3ProjectsIdServicesPipelinesEmail({
  "recipients": "",
  "id": 0
}, context)
```

#### Parameters
* recipients (string) **required** - Comma-separated list of recipient email addresses
* notify_only_broken_builds (boolean) - Notify only broken builds
* pipeline_events (string)
* id (integer) **required**

### putV3ProjectsIdServicesPivotaltracker
Set pivotaltracker service for project


```js
gitlab.putV3ProjectsIdServicesPivotaltracker({
  "token": "",
  "id": 0
}, context)
```

#### Parameters
* token (string) **required** - The Pivotaltracker token
* restrict_to_branch (string) - Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches.
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesPushover
Set pushover service for project


```js
gitlab.putV3ProjectsIdServicesPushover({
  "api_key": "",
  "user_key": "",
  "priority": "",
  "device": "",
  "sound": "",
  "id": 0
}, context)
```

#### Parameters
* api_key (string) **required** - The application key
* user_key (string) **required** - The user key
* priority (string) **required** - The priority
* device (string) **required** - Leave blank for all active devices
* sound (string) **required** - The sound of the notification
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesRedmine
Set redmine service for project


```js
gitlab.putV3ProjectsIdServicesRedmine({
  "new_issue_url": "",
  "project_url": "",
  "issues_url": "",
  "id": 0
}, context)
```

#### Parameters
* new_issue_url (string) **required** - The new issue URL
* project_url (string) **required** - The project URL
* issues_url (string) **required** - The issues URL
* description (string) - The description of the tracker
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### putV3ProjectsIdServicesSlack
Set slack service for project


```js
gitlab.putV3ProjectsIdServicesSlack({
  "webhook": "",
  "id": 0
}, context)
```

#### Parameters
* webhook (string) **required** - The Slack webhook. e.g. https://hooks.slack.com/services/...
* new_issue_url (string) - The user name
* channel (string) - The channel name
* push_events (string) - Event will be triggered by a push to the repository
* issue_events (string) - Event will be triggered when an issue is created/updated/closed
* confidential_issue_events (string) - Event will be triggered when a confidential issue is created/updated/closed
* merge_request_events (string) - Event will be triggered when a merge request is created/updated/merged
* note_events (string) - Event will be triggered when someone adds a comment
* tag_push_events (string) - Event will be triggered when a new tag is pushed to the repository
* build_events (string) - Event will be triggered when a build status changes
* pipeline_events (string)
* wiki_page_events (string) - Event will be triggered when a wiki page is created/updated
* id (integer) **required**

### putV3ProjectsIdServicesSlackSlashCommands
Set slack-slash-commands service for project


```js
gitlab.putV3ProjectsIdServicesSlackSlashCommands({
  "token": "",
  "id": 0
}, context)
```

#### Parameters
* token (string) **required** - The Slack token
* id (integer) **required**

### postV3ProjectsIdServicesSlackSlashCommandsTrigger
Added in GitLab 8.13


```js
gitlab.postV3ProjectsIdServicesSlackSlashCommandsTrigger({
  "id": "",
  "token": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* token (string) **required** - The Slack token

### putV3ProjectsIdServicesTeamcity
Set teamcity service for project


```js
gitlab.putV3ProjectsIdServicesTeamcity({
  "teamcity_url": "",
  "build_type": "",
  "username": "",
  "password": "",
  "id": 0
}, context)
```

#### Parameters
* teamcity_url (string) **required** - TeamCity root URL like https://teamcity.example.com
* build_type (string) **required** - Build configuration ID
* username (string) **required** - A user with permissions to trigger a manual build
* password (string) **required** - The password of the user
* push_events (string) - Event will be triggered by a push to the repository
* id (integer) **required**

### deleteV3ProjectsIdServicesServiceSlug
Delete a service for project


```js
gitlab.deleteV3ProjectsIdServicesServiceSlug({
  "service_slug": "",
  "id": 0
}, context)
```

#### Parameters
* service_slug (string) **required** - The name of the service
* id (integer) **required**

### getV3ProjectsIdServicesServiceSlug
Get the service settings for project


```js
gitlab.getV3ProjectsIdServicesServiceSlug({
  "service_slug": "",
  "id": 0
}, context)
```

#### Parameters
* service_slug (string) **required** - The name of the service
* id (integer) **required**

### postV3ProjectsIdShare
Share the project with a group


```js
gitlab.postV3ProjectsIdShare({
  "id": "",
  "group_id": 0,
  "group_access": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* group_id (integer) **required** - The ID of a group
* group_access (integer) **required** - The group access level
* expires_at (string) - Share expiration date

### deleteV3ProjectsIdShareGroupId



```js
gitlab.deleteV3ProjectsIdShareGroupId({
  "id": "",
  "group_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* group_id (integer) **required** - The ID of the group

### getV3ProjectsIdSnippets
Get all project snippets


```js
gitlab.getV3ProjectsIdSnippets({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdSnippets
Create a new project snippet


```js
gitlab.postV3ProjectsIdSnippets({
  "id": "",
  "title": "",
  "file_name": "",
  "code": "",
  "visibility_level": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* title (string) **required** - The title of the snippet
* file_name (string) **required** - The file name of the snippet
* code (string) **required** - The content of the snippet
* visibility_level (integer) **required** - The visibility level of the snippet

### getV3ProjectsIdSnippetsNoteableIdNotes
Get a list of project +noteable+ notes


```js
gitlab.getV3ProjectsIdSnippetsNoteableIdNotes({
  "id": "",
  "noteable_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdSnippetsNoteableIdNotes
Create a new +noteable+ note


```js
gitlab.postV3ProjectsIdSnippetsNoteableIdNotes({
  "id": "",
  "noteable_id": 0,
  "body": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* body (string) **required** - The content of a note
* created_at (string) - The creation date of the note

### deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId
Delete a +noteable+ note


```js
gitlab.deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId({
  "id": "",
  "noteable_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* note_id (integer) **required** - The ID of a note

### getV3ProjectsIdSnippetsNoteableIdNotesNoteId
Get a single +noteable+ note


```js
gitlab.getV3ProjectsIdSnippetsNoteableIdNotesNoteId({
  "id": "",
  "note_id": 0,
  "noteable_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* note_id (integer) **required** - The ID of a note
* noteable_id (integer) **required** - The ID of the noteable

### putV3ProjectsIdSnippetsNoteableIdNotesNoteId
Update an existing +noteable+ note


```js
gitlab.putV3ProjectsIdSnippetsNoteableIdNotesNoteId({
  "id": "",
  "noteable_id": 0,
  "note_id": 0,
  "body": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* noteable_id (integer) **required** - The ID of the noteable
* note_id (integer) **required** - The ID of a note
* body (string) **required** - The content of a note

### deleteV3ProjectsIdSnippetsSnippetId
Delete a project snippet


```js
gitlab.deleteV3ProjectsIdSnippetsSnippetId({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* snippet_id (integer) **required** - The ID of a project snippet

### getV3ProjectsIdSnippetsSnippetId
Get a single project snippet


```js
gitlab.getV3ProjectsIdSnippetsSnippetId({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* snippet_id (integer) **required** - The ID of a project snippet

### putV3ProjectsIdSnippetsSnippetId
Update an existing project snippet


```js
gitlab.putV3ProjectsIdSnippetsSnippetId({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* snippet_id (integer) **required** - The ID of a project snippet
* title (string) - The title of the snippet
* file_name (string) - The file name of the snippet
* code (string) - The content of the snippet
* visibility_level (integer) - The visibility level of the snippet

### getV3ProjectsIdSnippetsSnippetIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdSnippetsSnippetIdAwardEmoji({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* snippet_id (integer) **required** - The ID of an Issue, Merge Request or Snippet
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdSnippetsSnippetIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.postV3ProjectsIdSnippetsSnippetIdAwardEmoji({
  "name": "",
  "id": 0,
  "snippet_id": 0
}, context)
```

#### Parameters
* name (string) **required** - The name of a award_emoji (without colons)
* id (integer) **required**
* snippet_id (integer) **required**

### deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "snippet_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of an award emoji
* id (integer) **required**
* snippet_id (integer) **required**

### getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "snippet_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of the award
* id (integer) **required**
* snippet_id (integer) **required**

### getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji({
  "id": 0,
  "snippet_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* page (integer) - Current page number
* per_page (integer) - Number of items per page
* id (integer) **required**
* snippet_id (integer) **required**
* note_id (integer) **required**

### postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji({
  "name": "",
  "id": 0,
  "snippet_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* name (string) **required** - The name of a award_emoji (without colons)
* id (integer) **required**
* snippet_id (integer) **required**
* note_id (integer) **required**

### deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "snippet_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of an award emoji
* id (integer) **required**
* snippet_id (integer) **required**
* note_id (integer) **required**

### getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "snippet_id": 0,
  "note_id": 0
}, context)
```

#### Parameters
* award_id (integer) **required** - The ID of the award
* id (integer) **required**
* snippet_id (integer) **required**
* note_id (integer) **required**

### getV3ProjectsIdSnippetsSnippetIdRaw
Get a raw project snippet


```js
gitlab.getV3ProjectsIdSnippetsSnippetIdRaw({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* snippet_id (integer) **required** - The ID of a project snippet

### deleteV3ProjectsIdStar
Unstar a project


```js
gitlab.deleteV3ProjectsIdStar({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### postV3ProjectsIdStar
Star a project


```js
gitlab.postV3ProjectsIdStar({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### postV3ProjectsIdStatusesSha
Post status to a commit


```js
gitlab.postV3ProjectsIdStatusesSha({
  "id": "",
  "sha": "",
  "state": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* sha (string) **required** - The commit hash
* state (string) **required** - The state of the status
* ref (string) - The ref
* target_url (string) - The target URL to associate with this status
* description (string) - A short description of the status
* name (string) - A string label to differentiate this status from the status of other systems. Default: "default"
* context (string) - A string label to differentiate this status from the status of other systems. Default: "default"

### getV3ProjectsIdTriggers
Get triggers list


```js
gitlab.getV3ProjectsIdTriggers({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdTriggers
Create a trigger


```js
gitlab.postV3ProjectsIdTriggers({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### deleteV3ProjectsIdTriggersToken
Delete a trigger


```js
gitlab.deleteV3ProjectsIdTriggersToken({
  "id": "",
  "token": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* token (string) **required** - The unique token of trigger

### getV3ProjectsIdTriggersToken
Get specific trigger of a project


```js
gitlab.getV3ProjectsIdTriggersToken({
  "id": "",
  "token": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* token (string) **required** - The unique token of trigger

### postV3ProjectsIdUnarchive
Unarchive a project


```js
gitlab.postV3ProjectsIdUnarchive({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project

### postV3ProjectsIdUploads
Upload a file


```js
gitlab.postV3ProjectsIdUploads({
  "id": "",
  "file": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* file (string) **required** - The file to be uploaded

### getV3ProjectsIdUsers
Get the users list of a project


```js
gitlab.getV3ProjectsIdUsers({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* search (string) - Return list of users matching the search criteria
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3ProjectsIdVariables
Get project variables


```js
gitlab.getV3ProjectsIdVariables({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3ProjectsIdVariables
Create a new variable in a project


```js
gitlab.postV3ProjectsIdVariables({
  "id": "",
  "key": "",
  "value": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* key (string) **required** - The key of the variable
* value (string) **required** - The value of the variable

### deleteV3ProjectsIdVariablesKey
Delete an existing variable from a project


```js
gitlab.deleteV3ProjectsIdVariablesKey({
  "id": "",
  "key": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* key (string) **required** - The key of the variable

### getV3ProjectsIdVariablesKey
Get a specific variable from a project


```js
gitlab.getV3ProjectsIdVariablesKey({
  "id": "",
  "key": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* key (string) **required** - The key of the variable

### putV3ProjectsIdVariablesKey
Update an existing variable from a project


```js
gitlab.putV3ProjectsIdVariablesKey({
  "id": "",
  "key": ""
}, context)
```

#### Parameters
* id (string) **required** - The ID of a project
* key (string) **required** - The key of the variable
* value (string) - The value of the variable

### getV3Runners
Get runners available for user


```js
gitlab.getV3Runners({}, context)
```

#### Parameters
* scope (string) - The scope of specific runners to show
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3RunnersAll
Get all runners - shared and specific


```js
gitlab.getV3RunnersAll({}, context)
```

#### Parameters
* scope (string) - The scope of specific runners to show
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### deleteV3RunnersId
Remove a runner


```js
gitlab.deleteV3RunnersId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the runner

### getV3RunnersId
Get runner's details


```js
gitlab.getV3RunnersId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the runner

### putV3RunnersId
Update runner's details


```js
gitlab.putV3RunnersId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the runner
* description (string) - The description of the runner
* active (boolean) - The state of a runner
* tag_list (array) - The list of tags for a runner
* run_untagged (boolean) - Flag indicating the runner can execute untagged jobs
* locked (boolean) - Flag indicating the runner is locked

### postV3Session
Login to get token


```js
gitlab.postV3Session({
  "password": ""
}, context)
```

#### Parameters
* login (string) - The username
* email (string) - The email of the user
* password (string) **required** - The password of the user

### getV3SidekiqCompoundMetrics
Get the Sidekiq Compound metrics. Includes queue, process, and job statistics


```js
gitlab.getV3SidekiqCompoundMetrics(null, context)
```

#### Parameters
*This action has no parameters*

### getV3SidekiqJobStats
Get the Sidekiq job statistics


```js
gitlab.getV3SidekiqJobStats(null, context)
```

#### Parameters
*This action has no parameters*

### getV3SidekiqProcessMetrics
Get the Sidekiq process metrics


```js
gitlab.getV3SidekiqProcessMetrics(null, context)
```

#### Parameters
*This action has no parameters*

### getV3SidekiqQueueMetrics
Get the Sidekiq queue metrics


```js
gitlab.getV3SidekiqQueueMetrics(null, context)
```

#### Parameters
*This action has no parameters*

### getV3Snippets
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3Snippets({}, context)
```

#### Parameters
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3Snippets
This feature was introduced in GitLab 8.15.


```js
gitlab.postV3Snippets({
  "title": "",
  "file_name": "",
  "content": ""
}, context)
```

#### Parameters
* title (string) **required** - The title of a snippet
* file_name (string) **required** - The name of a snippet file
* content (string) **required** - The content of a snippet
* visibility_level (integer) - The visibility level of the snippet

### getV3SnippetsPublic
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3SnippetsPublic({}, context)
```

#### Parameters
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### deleteV3SnippetsId
This feature was introduced in GitLab 8.15.


```js
gitlab.deleteV3SnippetsId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of a snippet

### getV3SnippetsId
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3SnippetsId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of a snippet

### putV3SnippetsId
This feature was introduced in GitLab 8.15.


```js
gitlab.putV3SnippetsId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of a snippet
* title (string) - The title of a snippet
* file_name (string) - The name of a snippet file
* content (string) - The content of a snippet
* visibility_level (integer) - The visibility level of the snippet

### getV3SnippetsIdRaw
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3SnippetsIdRaw({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of a snippet

### getV3TemplatesDockerfiles
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3TemplatesDockerfiles(null, context)
```

#### Parameters
*This action has no parameters*

### getV3TemplatesDockerfilesName
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3TemplatesDockerfilesName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the template

### getV3TemplatesGitignores
This feature was introduced in GitLab 8.8.


```js
gitlab.getV3TemplatesGitignores(null, context)
```

#### Parameters
*This action has no parameters*

### getV3TemplatesGitignoresName
This feature was introduced in GitLab 8.8.


```js
gitlab.getV3TemplatesGitignoresName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the template

### getV3TemplatesGitlabCiYmls
This feature was introduced in GitLab 8.9.


```js
gitlab.getV3TemplatesGitlabCiYmls(null, context)
```

#### Parameters
*This action has no parameters*

### getV3TemplatesGitlabCiYmlsName
This feature was introduced in GitLab 8.9.


```js
gitlab.getV3TemplatesGitlabCiYmlsName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the template

### getV3TemplatesLicenses
This feature was introduced in GitLab 8.7.


```js
gitlab.getV3TemplatesLicenses({}, context)
```

#### Parameters
* popular (boolean) - If passed, returns only popular licenses

### getV3TemplatesLicensesName
This feature was introduced in GitLab 8.7.


```js
gitlab.getV3TemplatesLicensesName({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the template

### deleteV3Todos
Mark all todos as done


```js
gitlab.deleteV3Todos(null, context)
```

#### Parameters
*This action has no parameters*

### getV3Todos
Get a todo list


```js
gitlab.getV3Todos({}, context)
```

#### Parameters
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### deleteV3TodosId
Mark a todo as done


```js
gitlab.deleteV3TodosId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the todo being marked as done

### getV3User
Get the currently authenticated user


```js
gitlab.getV3User(null, context)
```

#### Parameters
*This action has no parameters*

### getV3UserEmails
Get the currently authenticated user's email addresses


```js
gitlab.getV3UserEmails(null, context)
```

#### Parameters
*This action has no parameters*

### postV3UserEmails
Add new email address to the currently authenticated user


```js
gitlab.postV3UserEmails({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The new email

### deleteV3UserEmailsEmailId
Delete an email address from the currently authenticated user


```js
gitlab.deleteV3UserEmailsEmailId({
  "email_id": 0
}, context)
```

#### Parameters
* email_id (integer) **required** - The ID of the email

### getV3UserEmailsEmailId
Get a single email address owned by the currently authenticated user


```js
gitlab.getV3UserEmailsEmailId({
  "email_id": 0
}, context)
```

#### Parameters
* email_id (integer) **required** - The ID of the email

### getV3UserKeys
Get the currently authenticated user's SSH keys


```js
gitlab.getV3UserKeys(null, context)
```

#### Parameters
*This action has no parameters*

### postV3UserKeys
Add a new SSH key to the currently authenticated user


```js
gitlab.postV3UserKeys({
  "key": "",
  "title": ""
}, context)
```

#### Parameters
* key (string) **required** - The new SSH key
* title (string) **required** - The title of the new SSH key

### deleteV3UserKeysKeyId
Delete an SSH key from the currently authenticated user


```js
gitlab.deleteV3UserKeysKeyId({
  "key_id": 0
}, context)
```

#### Parameters
* key_id (integer) **required** - The ID of the SSH key

### getV3UserKeysKeyId
Get a single key owned by currently authenticated user


```js
gitlab.getV3UserKeysKeyId({
  "key_id": 0
}, context)
```

#### Parameters
* key_id (integer) **required** - The ID of the SSH key

### getV3Users
Get the list of users


```js
gitlab.getV3Users({}, context)
```

#### Parameters
* username (string) - Get a single user with a specific username
* search (string) - Search for a username
* active (boolean) - Filters only active users
* external (boolean) - Filters only external users
* blocked (boolean) - Filters only blocked users
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### postV3Users
Create a user. Available only for admins.


```js
gitlab.postV3Users({
  "email": "",
  "password": "",
  "name": "",
  "username": ""
}, context)
```

#### Parameters
* email (string) **required** - The email of the user
* password (string) **required** - The password of the new user
* name (string) **required** - The name of the user
* username (string) **required** - The username of the user
* skype (string) - The Skype username
* linkedin (string) - The LinkedIn username
* twitter (string) - The Twitter username
* website_url (string) - The website of the user
* organization (string) - The organization of the user
* projects_limit (integer) - The number of projects a user can create
* extern_uid (string) - The external authentication provider UID
* provider (string) - The external provider
* bio (string) - The biography of the user
* location (string) - The location of the user
* admin (boolean) - Flag indicating the user is an administrator
* can_create_group (boolean) - Flag indicating the user can create groups
* confirm (boolean) - Flag indicating the account needs to be confirmed
* external (boolean) - Flag indicating the user is an external user

### deleteV3UsersId
Delete a user. Available only for admins.


```js
gitlab.deleteV3UsersId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user

### getV3UsersId
Get a single user


```js
gitlab.getV3UsersId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user

### putV3UsersId
Update a user. Available only for admins.


```js
gitlab.putV3UsersId({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user
* email (string) - The email of the user
* password (string) - The password of the new user
* name (string) - The name of the user
* username (string) - The username of the user
* skype (string) - The Skype username
* linkedin (string) - The LinkedIn username
* twitter (string) - The Twitter username
* website_url (string) - The website of the user
* organization (string) - The organization of the user
* projects_limit (integer) - The number of projects a user can create
* extern_uid (string) - The external authentication provider UID
* provider (string) - The external provider
* bio (string) - The biography of the user
* location (string) - The location of the user
* admin (boolean) - Flag indicating the user is an administrator
* can_create_group (boolean) - Flag indicating the user can create groups
* confirm (boolean) - Flag indicating the account needs to be confirmed
* external (boolean) - Flag indicating the user is an external user

### putV3UsersIdBlock
Block a user. Available only for admins.


```js
gitlab.putV3UsersIdBlock({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user

### getV3UsersIdEmails
Get the emails addresses of a specified user. Available only for admins.


```js
gitlab.getV3UsersIdEmails({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user

### postV3UsersIdEmails
Add an email address to a specified user. Available only for admins.


```js
gitlab.postV3UsersIdEmails({
  "id": 0,
  "email": ""
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user
* email (string) **required** - The email of the user

### deleteV3UsersIdEmailsEmailId
Delete an email address of a specified user. Available only for admins.


```js
gitlab.deleteV3UsersIdEmailsEmailId({
  "id": 0,
  "email_id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user
* email_id (integer) **required** - The ID of the email

### getV3UsersIdEvents
This feature was introduced in GitLab 8.13.


```js
gitlab.getV3UsersIdEvents({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user
* page (integer) - Current page number
* per_page (integer) - Number of items per page

### getV3UsersIdKeys
Get the SSH keys of a specified user. Available only for admins.


```js
gitlab.getV3UsersIdKeys({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user

### postV3UsersIdKeys
Add an SSH key to a specified user. Available only for admins.


```js
gitlab.postV3UsersIdKeys({
  "id": 0,
  "key": "",
  "title": ""
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user
* key (string) **required** - The new SSH key
* title (string) **required** - The title of the new SSH key

### deleteV3UsersIdKeysKeyId
Delete an existing SSH key from a specified user. Available only for admins.


```js
gitlab.deleteV3UsersIdKeysKeyId({
  "id": 0,
  "key_id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user
* key_id (integer) **required** - The ID of the SSH key

### putV3UsersIdUnblock
Unblock a user. Available only for admins.


```js
gitlab.putV3UsersIdUnblock({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The ID of the user

### getV3Version
This feature was introduced in GitLab 8.13.


```js
gitlab.getV3Version(null, context)
```

#### Parameters
*This action has no parameters*

