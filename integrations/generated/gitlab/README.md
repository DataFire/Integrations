# @datafire/gitlab

Client library for Gitlab

## Installation and Usage
```bash
npm install --save @datafire/gitlab
```
```js
let gitlab = require('@datafire/gitlab').create({
  private_token_header: "",
  private_token_query: ""
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

#### Input
*This action has no parameters*

#### Output
* output [ApplicationSetting](#applicationsetting)

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

#### Input
* input `object`
  * default_branch_protection `integer` (values: 0, 1, 2): Determine if developers can push to master
  * default_project_visibility `integer` (values: 0, 10, 20): The default project visibility
  * default_snippet_visibility `integer` (values: 0, 10, 20): The default snippet visibility
  * default_group_visibility `integer` (values: 0, 10, 20): The default group visibility
  * restricted_visibility_levels `array`: Selected levels cannot be used by non-admin users for projects or snippets. If the public level is restricted, user profiles are only visible to logged in users.
  * import_sources `array` (values: github, bitbucket, gitlab, google_code, fogbugz, git, gitlab_project): Enabled sources for code import during project creation. OmniAuth must be configured for GitHub, Bitbucket, and GitLab.com
  * disabled_oauth_sign_in_sources `array`: Disable certain OAuth sign-in sources
  * enabled_git_access_protocol `string` (values: ssh, http, nil): Allow only the selected protocols to be used for Git access.
  * gravatar_enabled `boolean`: Flag indicating if the Gravatar service is enabled
  * default_projects_limit `integer`: The maximum number of personal projects
  * max_attachment_size `integer`: Maximum attachment size in MB
  * session_expire_delay `integer`: Session duration in minutes. GitLab restart is required to apply changes.
  * user_oauth_applications `boolean`: Allow users to register any application to use GitLab as an OAuth provider
  * user_default_external `boolean`: Newly registered users will by default be external
  * signup_enabled `boolean`: Flag indicating if sign up is enabled
  * send_user_confirmation_email `boolean`: Send confirmation email on sign-up
  * domain_whitelist `string`: ONLY users with e-mail addresses that match these domain(s) will be able to sign-up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com
  * domain_blacklist_enabled `boolean`: Enable domain blacklist for sign ups
  * domain_blacklist **required** `string`: Users with e-mail addresses that match these domain(s) will NOT be able to sign-up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com
  * after_sign_up_text `string`: Text shown after sign up
  * signin_enabled `boolean`: Flag indicating if sign in is enabled
  * require_two_factor_authentication `boolean`: Require all users to setup Two-factor authentication
  * two_factor_grace_period **required** `integer`: Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication
  * home_page_url `string`: We will redirect non-logged in users to this page
  * after_sign_out_path `string`: We will redirect users to this page after they sign out
  * sign_in_text `string`: The sign in text of the GitLab application
  * help_page_text `string`: Custom text displayed on the help page
  * shared_runners_enabled `boolean`: Enable shared runners for new projects
  * shared_runners_text **required** `string`: Shared runners text 
  * max_artifacts_size `integer`: Set the maximum file size each build's artifacts can have
  * container_registry_token_expire_delay `integer`: Authorization token duration (minutes)
  * metrics_enabled `boolean`: Enable the InfluxDB metrics
  * metrics_host **required** `string`: The InfluxDB host
  * metrics_port **required** `integer`: The UDP port to use for connecting to InfluxDB
  * metrics_pool_size **required** `integer`: The amount of InfluxDB connections to open
  * metrics_timeout **required** `integer`: The amount of seconds after which an InfluxDB connection will time out
  * metrics_method_call_threshold **required** `integer`: A method call is only tracked when it takes longer to complete than the given amount of milliseconds.
  * metrics_sample_interval **required** `integer`: The sampling interval in seconds
  * metrics_packet_size **required** `integer`: The amount of points to store in a single UDP packet
  * sidekiq_throttling_enabled `boolean`: Enable Sidekiq Job Throttling
  * sidekiq_throttling_queus **required** `array`: Choose which queues you wish to throttle
  * sidekiq_throttling_factor **required** `number`: The factor by which the queues should be throttled. A value between 0.0 and 1.0, exclusive.
  * recaptcha_enabled `boolean`: Helps prevent bots from creating accounts
  * recaptcha_site_key **required** `string`: Generate site key at http://www.google.com/recaptcha
  * recaptcha_private_key **required** `string`: Generate private key at http://www.google.com/recaptcha
  * akismet_enabled `boolean`: Helps prevent bots from creating issues
  * akismet_api_key **required** `string`: Generate API key at http://www.akismet.com
  * admin_notification_email `string`: Abuse reports will be sent to this address if it is set. Abuse reports are always available in the admin area.
  * sentry_enabled `boolean`: Sentry is an error reporting and logging tool which is currently not shipped with GitLab, get it here: https://getsentry.com
  * sentry_dsn **required** `string`: Sentry Data Source Name
  * repository_storage `string`: Storage paths for new projects
  * repository_checks_enabled `boolean`: GitLab will periodically run 'git fsck' in all project and wiki repositories to look for silent disk corruption issues.
  * koding_enabled `boolean`: Enable Koding
  * koding_url **required** `string`: The Koding team URL
  * plantuml_enabled `boolean`: Enable PlantUML
  * plantuml_url **required** `string`: The PlantUML server URL
  * version_check_enabled `boolean`: Let GitLab inform you when an update is available.
  * email_author_in_body `boolean`: Some email servers do not support overriding the email sender name. Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.
  * html_emails_enabled `boolean`: By default GitLab sends emails in HTML and plain text formats so mail clients can choose what format to use. Disable this option if you only want to send emails in plain text format.
  * housekeeping_enabled `boolean`: Enable automatic repository housekeeping (git repack, git gc)
  * housekeeping_bitmaps_enabled **required** `boolean`: Creating pack file bitmaps makes housekeeping take a little longer but bitmaps should accelerate 'git clone' performance.
  * housekeeping_incremental_repack_period **required** `integer`: Number of Git pushes after which an incremental 'git repack' is run.
  * housekeeping_full_repack_period **required** `integer`: Number of Git pushes after which a full 'git repack' is run.
  * housekeeping_gc_period **required** `integer`: Number of Git pushes after which 'git gc' is run.

#### Output
* output [ApplicationSetting](#applicationsetting)

### postV3CiLint
Validation of .gitlab-ci.yml content


```js
gitlab.postV3CiLint({
  "content": ""
}, context)
```

#### Input
* input `object`
  * content **required** `string`: Content of .gitlab-ci.yml

#### Output
*Output schema unknown*

### getV3DeployKeys



```js
gitlab.getV3DeployKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3Dockerfiles
This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3Dockerfiles(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TemplatesList](#templateslist)

### getV3DockerfilesName
This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3DockerfilesName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the template

#### Output
* output [Template](#template)

### getV3Gitignores
This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3Gitignores(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TemplatesList](#templateslist)

### getV3GitignoresName
This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3GitignoresName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the template

#### Output
* output [Template](#template)

### getV3GitlabCiYmls
This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3GitlabCiYmls(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TemplatesList](#templateslist)

### getV3GitlabCiYmlsName
This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3GitlabCiYmlsName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the template

#### Output
* output [Template](#template)

### getV3Groups
Get a groups list


```js
gitlab.getV3Groups({}, context)
```

#### Input
* input `object`
  * statistics `boolean`: Include project statistics
  * skip_groups `array`: Array of group ids to exclude from list
  * all_available `boolean`: Show all group that you have access to
  * search `string`: Search for a specific group
  * order_by `string` (values: name, path): Order by name or path
  * sort `string` (values: asc, desc): Sort by asc (ascending) or desc (descending)
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Group](#group)

### postV3Groups
Create a group. Available only for users who can create groups.


```js
gitlab.postV3Groups({
  "name": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the group
  * path **required** `string`: The path of the group
  * description `string`: The description of the group
  * visibility_level `integer`: The visibility level of the group
  * lfs_enabled `boolean`: Enable/disable LFS for the projects in this group
  * request_access_enabled `boolean`: Allow users to request member access

#### Output
* output [Group](#group)

### getV3GroupsOwned
Get list of owned groups for authenticated user


```js
gitlab.getV3GroupsOwned({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * statistics `boolean`: Include project statistics

#### Output
* output [Group](#group)

### deleteV3GroupsId
Remove a group.


```js
gitlab.deleteV3GroupsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a group

#### Output
*Output schema unknown*

### getV3GroupsId
Get a single group, with containing projects.


```js
gitlab.getV3GroupsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a group

#### Output
* output [GroupDetail](#groupdetail)

### putV3GroupsId
Update a group. Available only for users who can administrate groups.


```js
gitlab.putV3GroupsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a group
  * name `string`: The name of the group
  * path `string`: The path of the group
  * description `string`: The description of the group
  * visibility_level `integer`: The visibility level of the group
  * lfs_enabled `boolean`: Enable/disable LFS for the projects in this group
  * request_access_enabled `boolean`: Allow users to request member access

#### Output
* output [Group](#group)

### getV3GroupsIdAccessRequests
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3GroupsIdAccessRequests({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [AccessRequester](#accessrequester)

### postV3GroupsIdAccessRequests
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3GroupsIdAccessRequests({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID

#### Output
* output [AccessRequester](#accessrequester)

### deleteV3GroupsIdAccessRequestsUserId
This feature was introduced in GitLab 8.11.


```js
gitlab.deleteV3GroupsIdAccessRequestsUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID
  * user_id **required** `integer`: The user ID of the access requester

#### Output
*Output schema unknown*

### putV3GroupsIdAccessRequestsUserIdApprove
This feature was introduced in GitLab 8.11.


```js
gitlab.putV3GroupsIdAccessRequestsUserIdApprove({
  "id": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID
  * user_id **required** `integer`: The user ID of the access requester
  * access_level `integer`: A valid access level (defaults: `30`, developer access level)

#### Output
* output [Member](#member)

### getV3GroupsIdIssues
Get a list of group issues


```js
gitlab.getV3GroupsIdIssues({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a group
  * state `string` (values: opened, closed, all): Return opened, closed, or all issues
  * labels `string`: Comma-separated list of label names
  * milestone `string`: Return issues for a specific milestone
  * order_by `string` (values: created_at, updated_at): Return issues ordered by `created_at` or `updated_at` fields.
  * sort `string` (values: asc, desc): Return issues sorted in `asc` or `desc` order.
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Issue](#issue)

### getV3GroupsIdMembers
Gets a list of group or project members viewable by the authenticated user.


```js
gitlab.getV3GroupsIdMembers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID
  * query `string`: A query string to search for members
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Member](#member)

### postV3GroupsIdMembers
Adds a member to a group or project.


```js
gitlab.postV3GroupsIdMembers({
  "id": "",
  "user_id": 0,
  "access_level": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID
  * user_id **required** `integer`: The user ID of the new member
  * access_level **required** `integer`: A valid access level (defaults: `30`, developer access level)
  * expires_at `string`: Date string in the format YEAR-MONTH-DAY

#### Output
* output [Member](#member)

### deleteV3GroupsIdMembersUserId
Removes a user from a group or project.


```js
gitlab.deleteV3GroupsIdMembersUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID
  * user_id **required** `integer`: The user ID of the member

#### Output
*Output schema unknown*

### getV3GroupsIdMembersUserId
Gets a member of a group or project.


```js
gitlab.getV3GroupsIdMembersUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID
  * user_id **required** `integer`: The user ID of the member

#### Output
* output [Member](#member)

### putV3GroupsIdMembersUserId
Updates a member of a group or project.


```js
gitlab.putV3GroupsIdMembersUserId({
  "id": "",
  "user_id": 0,
  "access_level": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID
  * user_id **required** `integer`: The user ID of the new member
  * access_level **required** `integer`: A valid access level
  * expires_at `string`: Date string in the format YEAR-MONTH-DAY

#### Output
* output [Member](#member)

### getV3GroupsIdNotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.getV3GroupsIdNotificationSettings({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID or project ID or project NAMESPACE/PROJECT_NAME

#### Output
* output [NotificationSetting](#notificationsetting)

### putV3GroupsIdNotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.putV3GroupsIdNotificationSettings({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID or project ID or project NAMESPACE/PROJECT_NAME
  * level `string`: The group notification level
  * new_note `boolean`: Enable/disable this notification
  * new_issue `boolean`: Enable/disable this notification
  * reopen_issue `boolean`: Enable/disable this notification
  * close_issue `boolean`: Enable/disable this notification
  * reassign_issue `boolean`: Enable/disable this notification
  * new_merge_request `boolean`: Enable/disable this notification
  * reopen_merge_request `boolean`: Enable/disable this notification
  * close_merge_request `boolean`: Enable/disable this notification
  * reassign_merge_request `boolean`: Enable/disable this notification
  * merge_merge_request `boolean`: Enable/disable this notification
  * failed_pipeline `boolean`: Enable/disable this notification
  * success_pipeline `boolean`: Enable/disable this notification

#### Output
* output [NotificationSetting](#notificationsetting)

### getV3GroupsIdProjects
Get a list of projects in this group.


```js
gitlab.getV3GroupsIdProjects({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a group
  * archived `boolean`: Limit by archived status
  * visibility `string` (values: public, internal, private): Limit by visibility
  * search `string`: Return list of authorized projects matching the search criteria
  * order_by `string` (values: id, name, path, created_at, updated_at, last_activity_at): Return projects ordered by field
  * sort `string` (values: asc, desc): Return projects sorted in ascending and descending order
  * simple `boolean`: Return only the ID, URL, name, and path of each project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Project](#project)

### postV3GroupsIdProjectsProjectId
Transfer a project to the group namespace. Available only for admin.


```js
gitlab.postV3GroupsIdProjectsProjectId({
  "id": "",
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a group
  * project_id **required** `string`: The ID or path of the project

#### Output
* output [GroupDetail](#groupdetail)

### getV3Hooks
Get the list of system hooks


```js
gitlab.getV3Hooks(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Hook](#hook)

### postV3Hooks
Create a new system hook


```js
gitlab.postV3Hooks({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL to send the request to
  * token `string`: The token used to validate payloads
  * push_events `boolean`: Trigger hook on push events
  * tag_push_events `boolean`: Trigger hook on tag push events
  * enable_ssl_verification `boolean`: Do SSL verification when triggering the hook

#### Output
* output [Hook](#hook)

### deleteV3HooksId
Delete a hook


```js
gitlab.deleteV3HooksId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the system hook

#### Output
* output [Hook](#hook)

### getV3HooksId
Test a hook


```js
gitlab.getV3HooksId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the system hook

#### Output
* output [Hook](#hook)

### postV3InternalAllowed



```js
gitlab.postV3InternalAllowed(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3InternalBroadcastMessage



```js
gitlab.getV3InternalBroadcastMessage(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3InternalCheck



```js
gitlab.getV3InternalCheck(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3InternalDiscover



```js
gitlab.getV3InternalDiscover(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### postV3InternalLfsAuthenticate



```js
gitlab.postV3InternalLfsAuthenticate(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3InternalMergeRequestUrls



```js
gitlab.getV3InternalMergeRequestUrls(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### postV3InternalTwoFactorRecoveryCodes



```js
gitlab.postV3InternalTwoFactorRecoveryCodes(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3Issues
Get currently authenticated user's issues


```js
gitlab.getV3Issues({}, context)
```

#### Input
* input `object`
  * state `string` (values: opened, closed, all): Return opened, closed, or all issues
  * labels `string`: Comma-separated list of label names
  * milestone `string`: Return issues for a specific milestone
  * order_by `string` (values: created_at, updated_at): Return issues ordered by `created_at` or `updated_at` fields.
  * sort `string` (values: asc, desc): Return issues sorted in `asc` or `desc` order.
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Issue](#issue)

### getV3KeysId
Get single ssh key by id. Only available to admin users


```js
gitlab.getV3KeysId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output [SSHKeyWithUser](#sshkeywithuser)

### getV3Licenses
This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3Licenses({}, context)
```

#### Input
* input `object`
  * popular `boolean`: If passed, returns only popular licenses

#### Output
* output [RepoLicense](#repolicense)

### getV3LicensesName
This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3LicensesName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the template

#### Output
* output [RepoLicense](#repolicense)

### getV3Namespaces
Get a namespaces list


```js
gitlab.getV3Namespaces({}, context)
```

#### Input
* input `object`
  * search `string`: Search query for namespaces
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Namespace](#namespace)

### getV3NotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.getV3NotificationSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GlobalNotificationSetting](#globalnotificationsetting)

### putV3NotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.putV3NotificationSettings({}, context)
```

#### Input
* input `object`
  * level `string`: The global notification level
  * notification_email `string`: The email address to send notifications
  * new_note `boolean`: Enable/disable this notification
  * new_issue `boolean`: Enable/disable this notification
  * reopen_issue `boolean`: Enable/disable this notification
  * close_issue `boolean`: Enable/disable this notification
  * reassign_issue `boolean`: Enable/disable this notification
  * new_merge_request `boolean`: Enable/disable this notification
  * reopen_merge_request `boolean`: Enable/disable this notification
  * close_merge_request `boolean`: Enable/disable this notification
  * reassign_merge_request `boolean`: Enable/disable this notification
  * merge_merge_request `boolean`: Enable/disable this notification
  * failed_pipeline `boolean`: Enable/disable this notification
  * success_pipeline `boolean`: Enable/disable this notification

#### Output
* output [GlobalNotificationSetting](#globalnotificationsetting)

### getV3Projects
Get a projects list for authenticated user


```js
gitlab.getV3Projects({}, context)
```

#### Input
* input `object`
  * order_by `string` (values: id, name, path, created_at, updated_at, last_activity_at): Return projects ordered by field
  * sort `string` (values: asc, desc): Return projects sorted in ascending and descending order
  * archived `boolean`: Limit by archived status
  * visibility `string` (values: public, internal, private): Limit by visibility
  * search `string`: Return list of authorized projects matching the search criteria
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * simple `boolean`: Return only the ID, URL, name, and path of each project

#### Output
* output [BasicProjectDetails](#basicprojectdetails)

### postV3Projects
Create new project


```js
gitlab.postV3Projects({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the project
  * path `string`: The path of the repository
  * description `string`: The description of the project
  * issues_enabled `boolean`: Flag indication if the issue tracker is enabled
  * merge_requests_enabled `boolean`: Flag indication if merge requests are enabled
  * wiki_enabled `boolean`: Flag indication if the wiki is enabled
  * builds_enabled `boolean`: Flag indication if builds are enabled
  * snippets_enabled `boolean`: Flag indication if snippets are enabled
  * shared_runners_enabled `boolean`: Flag indication if shared runners are enabled for that project
  * container_registry_enabled `boolean`: Flag indication if the container registry is enabled for that project
  * lfs_enabled `boolean`: Flag indication if Git LFS is enabled for that project
  * public `boolean`: Create a public project. The same as visibility_level = 20.
  * visibility_level `integer` (values: 0, 10, 20): Create a public project. The same as visibility_level = 20.
  * public_builds `boolean`: Perform public builds
  * request_access_enabled `boolean`: Allow users to request member access
  * only_allow_merge_if_build_succeeds `boolean`: Only allow to merge if builds succeed
  * only_allow_merge_if_all_discussions_are_resolved `boolean`: Only allow to merge if all discussions are resolved
  * namespace_id `integer`: Namespace ID for the new project. Default to the user namespace.
  * import_url `string`: URL from which the project is imported

#### Output
* output [Project](#project)

### getV3ProjectsAll
Get all projects for admin user


```js
gitlab.getV3ProjectsAll({}, context)
```

#### Input
* input `object`
  * order_by `string` (values: id, name, path, created_at, updated_at, last_activity_at): Return projects ordered by field
  * sort `string` (values: asc, desc): Return projects sorted in ascending and descending order
  * archived `boolean`: Limit by archived status
  * visibility `string` (values: public, internal, private): Limit by visibility
  * search `string`: Return list of authorized projects matching the search criteria
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * simple `boolean`: Return only the ID, URL, name, and path of each project
  * statistics `boolean`: Include project statistics

#### Output
* output [BasicProjectDetails](#basicprojectdetails)

### postV3ProjectsForkId
Fork new project for the current user or provided namespace.


```js
gitlab.postV3ProjectsForkId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * namespace `string`: The ID or name of the namespace that the project will be forked into

#### Output
* output [Project](#project)

### getV3ProjectsOwned
Get an owned projects list for authenticated user


```js
gitlab.getV3ProjectsOwned({}, context)
```

#### Input
* input `object`
  * order_by `string` (values: id, name, path, created_at, updated_at, last_activity_at): Return projects ordered by field
  * sort `string` (values: asc, desc): Return projects sorted in ascending and descending order
  * archived `boolean`: Limit by archived status
  * visibility `string` (values: public, internal, private): Limit by visibility
  * search `string`: Return list of authorized projects matching the search criteria
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * simple `boolean`: Return only the ID, URL, name, and path of each project
  * statistics `boolean`: Include project statistics

#### Output
* output [BasicProjectDetails](#basicprojectdetails)

### getV3ProjectsSearchQuery
Search for projects the current user has access to


```js
gitlab.getV3ProjectsSearchQuery({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The project name to be searched
  * order_by `string` (values: id, name, path, created_at, updated_at, last_activity_at): Return projects ordered by field
  * sort `string` (values: asc, desc): Return projects sorted in ascending and descending order
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Project](#project)

### getV3ProjectsStarred
Gets starred project for the authenticated user


```js
gitlab.getV3ProjectsStarred({}, context)
```

#### Input
* input `object`
  * order_by `string` (values: id, name, path, created_at, updated_at, last_activity_at): Return projects ordered by field
  * sort `string` (values: asc, desc): Return projects sorted in ascending and descending order
  * archived `boolean`: Limit by archived status
  * visibility `string` (values: public, internal, private): Limit by visibility
  * search `string`: Return list of authorized projects matching the search criteria
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * simple `boolean`: Return only the ID, URL, name, and path of each project

#### Output
* output [BasicProjectDetails](#basicprojectdetails)

### postV3ProjectsUserUserId
Create new project for a specified user. Only available to admin users.


```js
gitlab.postV3ProjectsUserUserId({
  "name": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the project
  * user_id **required** `integer`: The ID of a user
  * default_branch `string`: The default branch of the project
  * description `string`: The description of the project
  * issues_enabled `boolean`: Flag indication if the issue tracker is enabled
  * merge_requests_enabled `boolean`: Flag indication if merge requests are enabled
  * wiki_enabled `boolean`: Flag indication if the wiki is enabled
  * builds_enabled `boolean`: Flag indication if builds are enabled
  * snippets_enabled `boolean`: Flag indication if snippets are enabled
  * shared_runners_enabled `boolean`: Flag indication if shared runners are enabled for that project
  * container_registry_enabled `boolean`: Flag indication if the container registry is enabled for that project
  * lfs_enabled `boolean`: Flag indication if Git LFS is enabled for that project
  * public `boolean`: Create a public project. The same as visibility_level = 20.
  * visibility_level `integer` (values: 0, 10, 20): Create a public project. The same as visibility_level = 20.
  * public_builds `boolean`: Perform public builds
  * request_access_enabled `boolean`: Allow users to request member access
  * only_allow_merge_if_build_succeeds `boolean`: Only allow to merge if builds succeed
  * only_allow_merge_if_all_discussions_are_resolved `boolean`: Only allow to merge if all discussions are resolved
  * namespace_id `integer`: Namespace ID for the new project. Default to the user namespace.
  * import_url `string`: URL from which the project is imported

#### Output
* output [Project](#project)

### getV3ProjectsVisible
Get a list of visible projects for authenticated user


```js
gitlab.getV3ProjectsVisible({}, context)
```

#### Input
* input `object`
  * order_by `string` (values: id, name, path, created_at, updated_at, last_activity_at): Return projects ordered by field
  * sort `string` (values: asc, desc): Return projects sorted in ascending and descending order
  * archived `boolean`: Limit by archived status
  * visibility `string` (values: public, internal, private): Limit by visibility
  * search `string`: Return list of authorized projects matching the search criteria
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * simple `boolean`: Return only the ID, URL, name, and path of each project

#### Output
* output [BasicProjectDetails](#basicprojectdetails)

### deleteV3ProjectsId
Remove a project


```js
gitlab.deleteV3ProjectsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
*Output schema unknown*

### getV3ProjectsId
Get a single project


```js
gitlab.getV3ProjectsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [ProjectWithAccess](#projectwithaccess)

### putV3ProjectsId
Update an existing project


```js
gitlab.putV3ProjectsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * name `string`: The name of the project
  * default_branch `string`: The default branch of the project
  * path `string`: The path of the repository
  * description `string`: The description of the project
  * issues_enabled `boolean`: Flag indication if the issue tracker is enabled
  * merge_requests_enabled `boolean`: Flag indication if merge requests are enabled
  * wiki_enabled `boolean`: Flag indication if the wiki is enabled
  * builds_enabled `boolean`: Flag indication if builds are enabled
  * snippets_enabled `boolean`: Flag indication if snippets are enabled
  * shared_runners_enabled `boolean`: Flag indication if shared runners are enabled for that project
  * container_registry_enabled `boolean`: Flag indication if the container registry is enabled for that project
  * lfs_enabled `boolean`: Flag indication if Git LFS is enabled for that project
  * public `boolean`: Create a public project. The same as visibility_level = 20.
  * visibility_level `integer` (values: 0, 10, 20): Create a public project. The same as visibility_level = 20.
  * public_builds `boolean`: Perform public builds
  * request_access_enabled `boolean`: Allow users to request member access
  * only_allow_merge_if_build_succeeds `boolean`: Only allow to merge if builds succeed
  * only_allow_merge_if_all_discussions_are_resolved `boolean`: Only allow to merge if all discussions are resolved

#### Output
* output [Project](#project)

### v3.projects.id._ref.ref._trigger.builds.post
Trigger a GitLab project build


```js
gitlab.v3.projects.id._ref.ref._trigger.builds.post({
  "id": "",
  "ref": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * ref **required** `string`: The commit sha or name of a branch or tag
  * token **required** `string`: The unique token of trigger

#### Output
* output [TriggerRequest](#triggerrequest)

### getV3ProjectsIdAccessRequests
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdAccessRequests({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [AccessRequester](#accessrequester)

### postV3ProjectsIdAccessRequests
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3ProjectsIdAccessRequests({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID

#### Output
* output [AccessRequester](#accessrequester)

### deleteV3ProjectsIdAccessRequestsUserId
This feature was introduced in GitLab 8.11.


```js
gitlab.deleteV3ProjectsIdAccessRequestsUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * user_id **required** `integer`: The user ID of the access requester

#### Output
*Output schema unknown*

### putV3ProjectsIdAccessRequestsUserIdApprove
This feature was introduced in GitLab 8.11.


```js
gitlab.putV3ProjectsIdAccessRequestsUserIdApprove({
  "id": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * user_id **required** `integer`: The user ID of the access requester
  * access_level `integer`: A valid access level (defaults: `30`, developer access level)

#### Output
* output [Member](#member)

### postV3ProjectsIdArchive
Archive a project


```js
gitlab.postV3ProjectsIdArchive({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [Project](#project)

### getV3ProjectsIdBoards
This feature was introduced in 8.13


```js
gitlab.getV3ProjectsIdBoards({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [Board](#board)

### getV3ProjectsIdBoardsBoardIdLists
Does not include `backlog` and `done` lists. This feature was introduced in 8.13


```js
gitlab.getV3ProjectsIdBoardsBoardIdLists({
  "id": "",
  "board_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * board_id **required** `integer`: The ID of a board

#### Output
* output [List](#list)

### postV3ProjectsIdBoardsBoardIdLists
This feature was introduced in 8.13


```js
gitlab.postV3ProjectsIdBoardsBoardIdLists({
  "id": "",
  "board_id": 0,
  "label_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * board_id **required** `integer`: The ID of a board
  * label_id **required** `integer`: The ID of an existing label

#### Output
* output [List](#list)

### deleteV3ProjectsIdBoardsBoardIdListsListId
This feature was introduced in 8.13


```js
gitlab.deleteV3ProjectsIdBoardsBoardIdListsListId({
  "id": "",
  "board_id": 0,
  "list_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * board_id **required** `integer`: The ID of a board
  * list_id **required** `integer`: The ID of a board list

#### Output
* output [List](#list)

### getV3ProjectsIdBoardsBoardIdListsListId
This feature was introduced in 8.13


```js
gitlab.getV3ProjectsIdBoardsBoardIdListsListId({
  "id": "",
  "board_id": 0,
  "list_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * board_id **required** `integer`: The ID of a board
  * list_id **required** `integer`: The ID of a list

#### Output
* output [List](#list)

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

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * board_id **required** `integer`: The ID of a board
  * list_id **required** `integer`: The ID of a list
  * position **required** `integer`: The position of the list

#### Output
* output [List](#list)

### getV3ProjectsIdBuilds
Get a project builds


```js
gitlab.getV3ProjectsIdBuilds({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * scope `string` (values: pending, running, failed, success, canceled): The scope of builds to show
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Build](#build)

### getV3ProjectsIdBuildsArtifactsRefNameDownload
This feature was introduced in GitLab 8.10


```js
gitlab.getV3ProjectsIdBuildsArtifactsRefNameDownload({
  "id": "",
  "ref_name": "",
  "job": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * ref_name **required** `string`: The ref from repository
  * job **required** `string`: The name for the build

#### Output
*Output schema unknown*

### getV3ProjectsIdBuildsBuildId
Get a specific build of a project


```js
gitlab.getV3ProjectsIdBuildsBuildId({
  "id": "",
  "build_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * build_id **required** `integer`: The ID of a build

#### Output
* output [Build](#build)

### getV3ProjectsIdBuildsBuildIdArtifacts
This feature was introduced in GitLab 8.5


```js
gitlab.getV3ProjectsIdBuildsBuildIdArtifacts({
  "id": "",
  "build_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * build_id **required** `integer`: The ID of a build

#### Output
*Output schema unknown*

### postV3ProjectsIdBuildsBuildIdArtifactsKeep
Keep the artifacts to prevent them from being deleted


```js
gitlab.postV3ProjectsIdBuildsBuildIdArtifactsKeep({
  "id": "",
  "build_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * build_id **required** `integer`: The ID of a build

#### Output
* output [Build](#build)

### postV3ProjectsIdBuildsBuildIdCancel
Cancel a specific build of a project


```js
gitlab.postV3ProjectsIdBuildsBuildIdCancel({
  "id": "",
  "build_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * build_id **required** `integer`: The ID of a build

#### Output
* output [Build](#build)

### postV3ProjectsIdBuildsBuildIdErase
Erase build (remove artifacts and build trace)


```js
gitlab.postV3ProjectsIdBuildsBuildIdErase({
  "id": "",
  "build_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * build_id **required** `integer`: The ID of a build

#### Output
* output [Build](#build)

### postV3ProjectsIdBuildsBuildIdPlay
This feature was added in GitLab 8.11


```js
gitlab.postV3ProjectsIdBuildsBuildIdPlay({
  "id": "",
  "build_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * build_id **required** `integer`: The ID of a Build

#### Output
* output [Build](#build)

### postV3ProjectsIdBuildsBuildIdRetry
Retry a specific build of a project


```js
gitlab.postV3ProjectsIdBuildsBuildIdRetry({
  "id": "",
  "build_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * build_id **required** `integer`: The ID of a build

#### Output
* output [Build](#build)

### getV3ProjectsIdBuildsBuildIdTrace
Get a trace of a specific build of a project


```js
gitlab.getV3ProjectsIdBuildsBuildIdTrace({
  "id": "",
  "build_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * build_id **required** `integer`: The ID of a build

#### Output
*Output schema unknown*

### getV3ProjectsIdDeployKeys
Get a specific project's deploy keys


```js
gitlab.getV3ProjectsIdDeployKeys({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project

#### Output
* output [SSHKey](#sshkey)

### postV3ProjectsIdDeployKeys
Add new deploy key to currently authenticated user


```js
gitlab.postV3ProjectsIdDeployKeys({
  "id": "",
  "key": "",
  "title": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key **required** `string`: The new deploy key
  * title **required** `string`: The name of the deploy key

#### Output
* output [SSHKey](#sshkey)

### deleteV3ProjectsIdDeployKeysKeyId
Delete deploy key for a project


```js
gitlab.deleteV3ProjectsIdDeployKeysKeyId({
  "id": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key_id **required** `integer`: The ID of the deploy key

#### Output
* output [SSHKey](#sshkey)

### getV3ProjectsIdDeployKeysKeyId
Get single deploy key


```js
gitlab.getV3ProjectsIdDeployKeysKeyId({
  "id": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key_id **required** `integer`: The ID of the deploy key

#### Output
* output [SSHKey](#sshkey)

### deleteV3ProjectsIdDeployKeysKeyIdDisable
This feature was added in GitLab 8.11


```js
gitlab.deleteV3ProjectsIdDeployKeysKeyIdDisable({
  "id": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key_id **required** `integer`: The ID of the deploy key

#### Output
* output [SSHKey](#sshkey)

### postV3ProjectsIdDeployKeysKeyIdEnable
This feature was added in GitLab 8.11


```js
gitlab.postV3ProjectsIdDeployKeysKeyIdEnable({
  "id": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key_id **required** `integer`: The ID of the deploy key

#### Output
* output [SSHKey](#sshkey)

### getV3ProjectsIdDeployments
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdDeployments({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Deployment](#deployment)

### getV3ProjectsIdDeploymentsDeploymentId
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdDeploymentsDeploymentId({
  "id": "",
  "deployment_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * deployment_id **required** `integer`: The deployment ID

#### Output
* output [Deployment](#deployment)

### getV3ProjectsIdEnvironments
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdEnvironments({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Environment](#environment)

### postV3ProjectsIdEnvironments
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3ProjectsIdEnvironments({
  "id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * name **required** `string`: The name of the environment to be created
  * external_url `string`: URL on which this deployment is viewable
  * slug `string`

#### Output
* output [Environment](#environment)

### deleteV3ProjectsIdEnvironmentsEnvironmentId
This feature was introduced in GitLab 8.11.


```js
gitlab.deleteV3ProjectsIdEnvironmentsEnvironmentId({
  "id": "",
  "environment_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * environment_id **required** `integer`: The environment ID

#### Output
* output [Environment](#environment)

### putV3ProjectsIdEnvironmentsEnvironmentId
This feature was introduced in GitLab 8.11.


```js
gitlab.putV3ProjectsIdEnvironmentsEnvironmentId({
  "id": "",
  "environment_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * environment_id **required** `integer`: The environment ID
  * name `string`: The new environment name
  * external_url `string`: The new URL on which this deployment is viewable
  * slug `string`

#### Output
* output [Environment](#environment)

### getV3ProjectsIdEvents
Get events for a single project


```js
gitlab.getV3ProjectsIdEvents({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Event](#event)

### deleteV3ProjectsIdFork
Remove a forked_from relationship


```js
gitlab.deleteV3ProjectsIdFork({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
*Output schema unknown*

### postV3ProjectsIdForkForkedFromId
Mark this project as forked from another


```js
gitlab.postV3ProjectsIdForkForkedFromId({
  "id": "",
  "forked_from_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * forked_from_id **required** `string`: The ID of the project it was forked from

#### Output
*Output schema unknown*

### getV3ProjectsIdHooks
Get project hooks


```js
gitlab.getV3ProjectsIdHooks({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [ProjectHook](#projecthook)

### postV3ProjectsIdHooks
Add hook to project


```js
gitlab.postV3ProjectsIdHooks({
  "id": "",
  "url": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * url **required** `string`: The URL to send the request to
  * push_events `boolean`: Trigger hook on push events
  * issues_events `boolean`: Trigger hook on issues events
  * merge_requests_events `boolean`: Trigger hook on merge request events
  * tag_push_events `boolean`: Trigger hook on tag push events
  * note_events `boolean`: Trigger hook on note(comment) events
  * build_events `boolean`: Trigger hook on build events
  * pipeline_events `boolean`: Trigger hook on pipeline events
  * wiki_page_events `boolean`: Trigger hook on wiki events
  * enable_ssl_verification `boolean`: Do SSL verification when triggering the hook
  * token `string`: Secret token to validate received payloads; this will not be returned in the response

#### Output
* output [ProjectHook](#projecthook)

### deleteV3ProjectsIdHooksHookId
Deletes project hook


```js
gitlab.deleteV3ProjectsIdHooksHookId({
  "id": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * hook_id **required** `integer`: The ID of the hook to delete

#### Output
* output [ProjectHook](#projecthook)

### getV3ProjectsIdHooksHookId
Get a project hook


```js
gitlab.getV3ProjectsIdHooksHookId({
  "id": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * hook_id **required** `integer`: The ID of a project hook

#### Output
* output [ProjectHook](#projecthook)

### putV3ProjectsIdHooksHookId
Update an existing project hook


```js
gitlab.putV3ProjectsIdHooksHookId({
  "id": "",
  "hook_id": 0,
  "url": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * hook_id **required** `integer`: The ID of the hook to update
  * url **required** `string`: The URL to send the request to
  * push_events `boolean`: Trigger hook on push events
  * issues_events `boolean`: Trigger hook on issues events
  * merge_requests_events `boolean`: Trigger hook on merge request events
  * tag_push_events `boolean`: Trigger hook on tag push events
  * note_events `boolean`: Trigger hook on note(comment) events
  * build_events `boolean`: Trigger hook on build events
  * pipeline_events `boolean`: Trigger hook on pipeline events
  * wiki_page_events `boolean`: Trigger hook on wiki events
  * enable_ssl_verification `boolean`: Do SSL verification when triggering the hook
  * token `string`: Secret token to validate received payloads; this will not be returned in the response

#### Output
* output [ProjectHook](#projecthook)

### getV3ProjectsIdIssues
Get a list of project issues


```js
gitlab.getV3ProjectsIdIssues({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * state `string` (values: opened, closed, all): Return opened, closed, or all issues
  * iid `integer`: Return the issue having the given `iid`
  * labels `string`: Comma-separated list of label names
  * milestone `string`: Return issues for a specific milestone
  * order_by `string` (values: created_at, updated_at): Return issues ordered by `created_at` or `updated_at` fields.
  * sort `string` (values: asc, desc): Return issues sorted in `asc` or `desc` order.
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Issue](#issue)

### postV3ProjectsIdIssues
Create a new project issue


```js
gitlab.postV3ProjectsIdIssues({
  "id": "",
  "title": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * title **required** `string`: The title of an issue
  * created_at `string`: Date time when the issue was created. Available only for admins and project owners.
  * merge_request_for_resolving_discussions `integer`: The IID of a merge request for which to resolve discussions
  * description `string`: The description of an issue
  * assignee_id `integer`: The ID of a user to assign issue
  * milestone_id `integer`: The ID of a milestone to assign issue
  * labels `string`: Comma-separated list of label names
  * due_date `string`: Date time string in the format YEAR-MONTH-DAY
  * confidential `boolean`: Boolean parameter if the issue should be confidential

#### Output
* output [Issue](#issue)

### deleteV3ProjectsIdIssuesIssueId
Delete a project issue


```js
gitlab.deleteV3ProjectsIdIssuesIssueId({
  "id": "",
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of a project issue

#### Output
*Output schema unknown*

### getV3ProjectsIdIssuesIssueId
Get a single project issue


```js
gitlab.getV3ProjectsIdIssuesIssueId({
  "id": "",
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of a project issue

#### Output
* output [Issue](#issue)

### putV3ProjectsIdIssuesIssueId
Update an existing issue


```js
gitlab.putV3ProjectsIdIssuesIssueId({
  "id": "",
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of a project issue
  * title `string`: The title of an issue
  * updated_at `string`: Date time when the issue was updated. Available only for admins and project owners.
  * state_event `string` (values: reopen, close): State of the issue
  * description `string`: The description of an issue
  * assignee_id `integer`: The ID of a user to assign issue
  * milestone_id `integer`: The ID of a milestone to assign issue
  * labels `string`: Comma-separated list of label names
  * due_date `string`: Date time string in the format YEAR-MONTH-DAY
  * confidential `boolean`: Boolean parameter if the issue should be confidential
  * created_at `string`

#### Output
* output [Issue](#issue)

### postV3ProjectsIdIssuesIssueIdAddSpentTime
Add spent time for a project issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdAddSpentTime({
  "id": "",
  "issue_id": 0,
  "duration": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of a project issue
  * duration **required** `string`: The duration to be parsed

#### Output
*Output schema unknown*

### getV3ProjectsIdIssuesIssueIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdIssuesIssueIdAwardEmoji({
  "id": "",
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of an Issue, Merge Request or Snippet
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [AwardEmoji](#awardemoji)

### postV3ProjectsIdIssuesIssueIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.postV3ProjectsIdIssuesIssueIdAwardEmoji({
  "name": "",
  "id": 0,
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of a award_emoji (without colons)
  * id **required** `integer`
  * issue_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * award_id **required** `integer`: The ID of an award emoji
  * id **required** `integer`
  * issue_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * award_id **required** `integer`: The ID of the award
  * id **required** `integer`
  * issue_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### postV3ProjectsIdIssuesIssueIdMove
Move an existing issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdMove({
  "id": "",
  "issue_id": 0,
  "to_project_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of a project issue
  * to_project_id **required** `integer`: The ID of the new project

#### Output
* output [Issue](#issue)

### getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji({
  "id": 0,
  "issue_id": 0,
  "note_id": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * id **required** `integer`
  * issue_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

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

#### Input
* input `object`
  * name **required** `string`: The name of a award_emoji (without colons)
  * id **required** `integer`
  * issue_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

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

#### Input
* input `object`
  * award_id **required** `integer`: The ID of an award emoji
  * id **required** `integer`
  * issue_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

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

#### Input
* input `object`
  * award_id **required** `integer`: The ID of the award
  * id **required** `integer`
  * issue_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### postV3ProjectsIdIssuesIssueIdResetSpentTime
Reset spent time for a project issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdResetSpentTime({
  "id": "",
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of a project issue

#### Output
*Output schema unknown*

### postV3ProjectsIdIssuesIssueIdResetTimeEstimate
Reset the time estimate for a project issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdResetTimeEstimate({
  "id": "",
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of a project issue

#### Output
*Output schema unknown*

### postV3ProjectsIdIssuesIssueIdTimeEstimate
Set a time estimate for a project issue


```js
gitlab.postV3ProjectsIdIssuesIssueIdTimeEstimate({
  "id": "",
  "issue_id": 0,
  "duration": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of a project issue
  * duration **required** `string`: The duration to be parsed

#### Output
*Output schema unknown*

### getV3ProjectsIdIssuesIssueIdTimeStats
Show time stats for a project issue


```js
gitlab.getV3ProjectsIdIssuesIssueIdTimeStats({
  "id": "",
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of a project issue

#### Output
*Output schema unknown*

### postV3ProjectsIdIssuesIssueIdTodo
Create a todo on an issuable


```js
gitlab.postV3ProjectsIdIssuesIssueIdTodo({
  "id": "",
  "issue_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * issue_id **required** `integer`: The ID of an issuable

#### Output
* output [Todo](#todo)

### getV3ProjectsIdIssuesNoteableIdNotes
Get a list of project +noteable+ notes


```js
gitlab.getV3ProjectsIdIssuesNoteableIdNotes({
  "id": "",
  "noteable_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Note](#note)

### postV3ProjectsIdIssuesNoteableIdNotes
Create a new +noteable+ note


```js
gitlab.postV3ProjectsIdIssuesNoteableIdNotes({
  "id": "",
  "noteable_id": 0,
  "body": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * body **required** `string`: The content of a note
  * created_at `string`: The creation date of the note

#### Output
* output [Note](#note)

### deleteV3ProjectsIdIssuesNoteableIdNotesNoteId
Delete a +noteable+ note


```js
gitlab.deleteV3ProjectsIdIssuesNoteableIdNotesNoteId({
  "id": "",
  "noteable_id": 0,
  "note_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * note_id **required** `integer`: The ID of a note

#### Output
* output [Note](#note)

### getV3ProjectsIdIssuesNoteableIdNotesNoteId
Get a single +noteable+ note


```js
gitlab.getV3ProjectsIdIssuesNoteableIdNotesNoteId({
  "id": "",
  "note_id": 0,
  "noteable_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * note_id **required** `integer`: The ID of a note
  * noteable_id **required** `integer`: The ID of the noteable

#### Output
* output [Note](#note)

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

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * note_id **required** `integer`: The ID of a note
  * body **required** `string`: The content of a note

#### Output
* output [Note](#note)

### deleteV3ProjectsIdIssuesSubscribableIdSubscription
Unsubscribe from a resource


```js
gitlab.deleteV3ProjectsIdIssuesSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * subscribable_id **required** `string`: The ID of a resource

#### Output
* output [Issue](#issue)

### postV3ProjectsIdIssuesSubscribableIdSubscription
Subscribe to a resource


```js
gitlab.postV3ProjectsIdIssuesSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * subscribable_id **required** `string`: The ID of a resource

#### Output
* output [Issue](#issue)

### getV3ProjectsIdKeys
Get a specific project's deploy keys


```js
gitlab.getV3ProjectsIdKeys({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project

#### Output
* output [SSHKey](#sshkey)

### postV3ProjectsIdKeys
Add new deploy key to currently authenticated user


```js
gitlab.postV3ProjectsIdKeys({
  "id": "",
  "key": "",
  "title": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key **required** `string`: The new deploy key
  * title **required** `string`: The name of the deploy key

#### Output
* output [SSHKey](#sshkey)

### deleteV3ProjectsIdKeysKeyId
Delete deploy key for a project


```js
gitlab.deleteV3ProjectsIdKeysKeyId({
  "id": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key_id **required** `integer`: The ID of the deploy key

#### Output
* output [SSHKey](#sshkey)

### getV3ProjectsIdKeysKeyId
Get single deploy key


```js
gitlab.getV3ProjectsIdKeysKeyId({
  "id": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key_id **required** `integer`: The ID of the deploy key

#### Output
* output [SSHKey](#sshkey)

### deleteV3ProjectsIdKeysKeyIdDisable
This feature was added in GitLab 8.11


```js
gitlab.deleteV3ProjectsIdKeysKeyIdDisable({
  "id": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key_id **required** `integer`: The ID of the deploy key

#### Output
* output [SSHKey](#sshkey)

### postV3ProjectsIdKeysKeyIdEnable
This feature was added in GitLab 8.11


```js
gitlab.postV3ProjectsIdKeysKeyIdEnable({
  "id": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the project
  * key_id **required** `integer`: The ID of the deploy key

#### Output
* output [SSHKey](#sshkey)

### deleteV3ProjectsIdLabels
Delete an existing label


```js
gitlab.deleteV3ProjectsIdLabels({
  "id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * name **required** `string`: The name of the label to be deleted

#### Output
* output [Label](#label)

### getV3ProjectsIdLabels
Get all labels of the project


```js
gitlab.getV3ProjectsIdLabels({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [Label](#label)

### postV3ProjectsIdLabels
Create a new label


```js
gitlab.postV3ProjectsIdLabels({
  "id": "",
  "name": "",
  "color": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * name **required** `string`: The name of the label to be created
  * color **required** `string`: The color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)
  * description `string`: The description of label to be created
  * priority `integer`: The priority of the label

#### Output
* output [Label](#label)

### putV3ProjectsIdLabels
Update an existing label. At least one optional parameter is required.


```js
gitlab.putV3ProjectsIdLabels({
  "id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * name **required** `string`: The name of the label to be updated
  * new_name `string`: The new name of the label
  * color `string`: The new color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)
  * description `string`: The new description of label
  * priority `integer`: The priority of the label

#### Output
* output [Label](#label)

### deleteV3ProjectsIdLabelsSubscribableIdSubscription
Unsubscribe from a resource


```js
gitlab.deleteV3ProjectsIdLabelsSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * subscribable_id **required** `string`: The ID of a resource

#### Output
* output [Label](#label)

### postV3ProjectsIdLabelsSubscribableIdSubscription
Subscribe to a resource


```js
gitlab.postV3ProjectsIdLabelsSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * subscribable_id **required** `string`: The ID of a resource

#### Output
* output [Label](#label)

### getV3ProjectsIdMembers
Gets a list of group or project members viewable by the authenticated user.


```js
gitlab.getV3ProjectsIdMembers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * query `string`: A query string to search for members
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Member](#member)

### postV3ProjectsIdMembers
Adds a member to a group or project.


```js
gitlab.postV3ProjectsIdMembers({
  "id": "",
  "user_id": 0,
  "access_level": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * user_id **required** `integer`: The user ID of the new member
  * access_level **required** `integer`: A valid access level (defaults: `30`, developer access level)
  * expires_at `string`: Date string in the format YEAR-MONTH-DAY

#### Output
* output [Member](#member)

### deleteV3ProjectsIdMembersUserId
Removes a user from a group or project.


```js
gitlab.deleteV3ProjectsIdMembersUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * user_id **required** `integer`: The user ID of the member

#### Output
*Output schema unknown*

### getV3ProjectsIdMembersUserId
Gets a member of a group or project.


```js
gitlab.getV3ProjectsIdMembersUserId({
  "id": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * user_id **required** `integer`: The user ID of the member

#### Output
* output [Member](#member)

### putV3ProjectsIdMembersUserId
Updates a member of a group or project.


```js
gitlab.putV3ProjectsIdMembersUserId({
  "id": "",
  "user_id": 0,
  "access_level": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * user_id **required** `integer`: The user ID of the new member
  * access_level **required** `integer`: A valid access level
  * expires_at `string`: Date string in the format YEAR-MONTH-DAY

#### Output
* output [Member](#member)

### getV3ProjectsIdMergeRequestMergeRequestId
This endpoint is deprecated and will be removed in GitLab 9.0.


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of a merge request

#### Output
* output [MergeRequest](#mergerequest)

### putV3ProjectsIdMergeRequestMergeRequestId
Update a merge request


```js
gitlab.putV3ProjectsIdMergeRequestMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * title `string`: The title of the merge request
  * target_branch `string`: The target branch
  * state_event `string` (values: close, reopen, merge): Status of the merge request
  * description `string`: The description of the merge request
  * assignee_id `integer`: The ID of a user to assign the merge request
  * milestone_id `integer`: The ID of a milestone to assign the merge request
  * labels `string`: Comma-separated list of label names
  * remove_source_branch `boolean`: Remove source branch when merging
  * merge_request_id **required** `integer`

#### Output
* output [MergeRequest](#mergerequest)

### postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds
Cancel merge if "Merge When Pipeline Succeeds" is enabled


```js
gitlab.postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`

#### Output
* output [MergeRequest](#mergerequest)

### getV3ProjectsIdMergeRequestMergeRequestIdChanges
Show the merge request changes


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestIdChanges({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`

#### Output
* output [MergeRequestChanges](#mergerequestchanges)

### getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues
List issues that will be closed on merge


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * merge_request_id **required** `integer`

#### Output
* output [MRNote](#mrnote)

### getV3ProjectsIdMergeRequestMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestIdComments({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * merge_request_id **required** `integer`

#### Output
* output [MRNote](#mrnote)

### postV3ProjectsIdMergeRequestMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0


```js
gitlab.postV3ProjectsIdMergeRequestMergeRequestIdComments({
  "id": "",
  "note": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * note **required** `string`: The text of the comment
  * merge_request_id **required** `integer`

#### Output
* output [MRNote](#mrnote)

### getV3ProjectsIdMergeRequestMergeRequestIdCommits
Get the commits of a merge request


```js
gitlab.getV3ProjectsIdMergeRequestMergeRequestIdCommits({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`

#### Output
* output [RepoCommit](#repocommit)

### putV3ProjectsIdMergeRequestMergeRequestIdMerge
Merge a merge request


```js
gitlab.putV3ProjectsIdMergeRequestMergeRequestIdMerge({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_commit_message `string`: Custom merge commit message
  * should_remove_source_branch `boolean`: When true, the source branch will be deleted if possible
  * merge_when_build_succeeds `boolean`: When true, this merge request will be merged when the pipeline succeeds
  * sha `string`: When present, must have the HEAD SHA of the source branch
  * merge_request_id **required** `integer`

#### Output
* output [MergeRequest](#mergerequest)

### deleteV3ProjectsIdMergeRequestSubscribableIdSubscription
Unsubscribe from a resource


```js
gitlab.deleteV3ProjectsIdMergeRequestSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * subscribable_id **required** `string`: The ID of a resource

#### Output
* output [MergeRequest](#mergerequest)

### postV3ProjectsIdMergeRequestSubscribableIdSubscription
Subscribe to a resource


```js
gitlab.postV3ProjectsIdMergeRequestSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * subscribable_id **required** `string`: The ID of a resource

#### Output
* output [MergeRequest](#mergerequest)

### getV3ProjectsIdMergeRequests
List merge requests


```js
gitlab.getV3ProjectsIdMergeRequests({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * state `string` (values: opened, closed, merged, all): Return opened, closed, merged, or all merge requests
  * order_by `string` (values: created_at, updated_at): Return merge requests ordered by `created_at` or `updated_at` fields.
  * sort `string` (values: asc, desc): Return merge requests sorted in `asc` or `desc` order.
  * iid `array`: The IID of the merge requests
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [MergeRequest](#mergerequest)

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

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * title **required** `string`: The title of the merge request
  * source_branch **required** `string`: The source branch
  * target_branch **required** `string`: The target branch
  * target_project_id `integer`: The target project of the merge request defaults to the :id of the project
  * description `string`: The description of the merge request
  * assignee_id `integer`: The ID of a user to assign the merge request
  * milestone_id `integer`: The ID of a milestone to assign the merge request
  * labels `string`: Comma-separated list of label names
  * remove_source_branch `boolean`: Remove source branch when merging

#### Output
* output [MergeRequest](#mergerequest)

### deleteV3ProjectsIdMergeRequestsMergeRequestId
Delete a merge request


```js
gitlab.deleteV3ProjectsIdMergeRequestsMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of a merge request

#### Output
*Output schema unknown*

### getV3ProjectsIdMergeRequestsMergeRequestId
Get a single merge request


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`

#### Output
* output [MergeRequest](#mergerequest)

### putV3ProjectsIdMergeRequestsMergeRequestId
Update a merge request


```js
gitlab.putV3ProjectsIdMergeRequestsMergeRequestId({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * title `string`: The title of the merge request
  * target_branch `string`: The target branch
  * state_event `string` (values: close, reopen, merge): Status of the merge request
  * description `string`: The description of the merge request
  * assignee_id `integer`: The ID of a user to assign the merge request
  * milestone_id `integer`: The ID of a milestone to assign the merge request
  * labels `string`: Comma-separated list of label names
  * remove_source_branch `boolean`: Remove source branch when merging
  * merge_request_id **required** `integer`

#### Output
* output [MergeRequest](#mergerequest)

### postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime
Add spent time for a project merge_request


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime({
  "id": "",
  "merge_request_id": 0,
  "duration": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of a project merge_request
  * duration **required** `string`: The duration to be parsed

#### Output
*Output schema unknown*

### getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of an Issue, Merge Request or Snippet
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [AwardEmoji](#awardemoji)

### postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji({
  "name": "",
  "id": 0,
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of a award_emoji (without colons)
  * id **required** `integer`
  * merge_request_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * award_id **required** `integer`: The ID of an award emoji
  * id **required** `integer`
  * merge_request_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * award_id **required** `integer`: The ID of the award
  * id **required** `integer`
  * merge_request_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds
Cancel merge if "Merge When Pipeline Succeeds" is enabled


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`

#### Output
* output [MergeRequest](#mergerequest)

### getV3ProjectsIdMergeRequestsMergeRequestIdChanges
Show the merge request changes


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdChanges({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`

#### Output
* output [MergeRequestChanges](#mergerequestchanges)

### getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues
List issues that will be closed on merge


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * merge_request_id **required** `integer`

#### Output
* output [MRNote](#mrnote)

### getV3ProjectsIdMergeRequestsMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdComments({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * merge_request_id **required** `integer`

#### Output
* output [MRNote](#mrnote)

### postV3ProjectsIdMergeRequestsMergeRequestIdComments
Duplicate. DEPRECATED and WILL BE REMOVED in 9.0


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdComments({
  "id": "",
  "note": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * note **required** `string`: The text of the comment
  * merge_request_id **required** `integer`

#### Output
* output [MRNote](#mrnote)

### getV3ProjectsIdMergeRequestsMergeRequestIdCommits
Get the commits of a merge request


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdCommits({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`

#### Output
* output [RepoCommit](#repocommit)

### putV3ProjectsIdMergeRequestsMergeRequestIdMerge
Merge a merge request


```js
gitlab.putV3ProjectsIdMergeRequestsMergeRequestIdMerge({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_commit_message `string`: Custom merge commit message
  * should_remove_source_branch `boolean`: When true, the source branch will be deleted if possible
  * merge_when_build_succeeds `boolean`: When true, this merge request will be merged when the pipeline succeeds
  * sha `string`: When present, must have the HEAD SHA of the source branch
  * merge_request_id **required** `integer`

#### Output
* output [MergeRequest](#mergerequest)

### getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji({
  "id": 0,
  "merge_request_id": 0,
  "note_id": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * id **required** `integer`
  * merge_request_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

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

#### Input
* input `object`
  * name **required** `string`: The name of a award_emoji (without colons)
  * id **required** `integer`
  * merge_request_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

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

#### Input
* input `object`
  * award_id **required** `integer`: The ID of an award emoji
  * id **required** `integer`
  * merge_request_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

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

#### Input
* input `object`
  * award_id **required** `integer`: The ID of the award
  * id **required** `integer`
  * merge_request_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime
Reset spent time for a project merge_request


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of a project merge_request

#### Output
*Output schema unknown*

### postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate
Reset the time estimate for a project merge_request


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of a project merge_request

#### Output
*Output schema unknown*

### postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate
Set a time estimate for a project merge_request


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate({
  "id": "",
  "merge_request_id": 0,
  "duration": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of a project merge_request
  * duration **required** `string`: The duration to be parsed

#### Output
*Output schema unknown*

### getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats
Show time stats for a project merge_request


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of a project merge_request

#### Output
*Output schema unknown*

### postV3ProjectsIdMergeRequestsMergeRequestIdTodo
Create a todo on an issuable


```js
gitlab.postV3ProjectsIdMergeRequestsMergeRequestIdTodo({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of an issuable

#### Output
* output [Todo](#todo)

### getV3ProjectsIdMergeRequestsMergeRequestIdVersions
This feature was introduced in GitLab 8.12.


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdVersions({
  "id": "",
  "merge_request_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of a merge request

#### Output
* output [MergeRequestDiff](#mergerequestdiff)

### getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId
This feature was introduced in GitLab 8.12.


```js
gitlab.getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId({
  "id": "",
  "merge_request_id": 0,
  "version_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * merge_request_id **required** `integer`: The ID of a merge request
  * version_id **required** `integer`: The ID of a merge request diff version

#### Output
* output [MergeRequestDiffFull](#mergerequestdifffull)

### getV3ProjectsIdMergeRequestsNoteableIdNotes
Get a list of project +noteable+ notes


```js
gitlab.getV3ProjectsIdMergeRequestsNoteableIdNotes({
  "id": "",
  "noteable_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Note](#note)

### postV3ProjectsIdMergeRequestsNoteableIdNotes
Create a new +noteable+ note


```js
gitlab.postV3ProjectsIdMergeRequestsNoteableIdNotes({
  "id": "",
  "noteable_id": 0,
  "body": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * body **required** `string`: The content of a note
  * created_at `string`: The creation date of the note

#### Output
* output [Note](#note)

### deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
Delete a +noteable+ note


```js
gitlab.deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId({
  "id": "",
  "noteable_id": 0,
  "note_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * note_id **required** `integer`: The ID of a note

#### Output
* output [Note](#note)

### getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
Get a single +noteable+ note


```js
gitlab.getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId({
  "id": "",
  "note_id": 0,
  "noteable_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * note_id **required** `integer`: The ID of a note
  * noteable_id **required** `integer`: The ID of the noteable

#### Output
* output [Note](#note)

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

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * note_id **required** `integer`: The ID of a note
  * body **required** `string`: The content of a note

#### Output
* output [Note](#note)

### deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription
Unsubscribe from a resource


```js
gitlab.deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * subscribable_id **required** `string`: The ID of a resource

#### Output
* output [MergeRequest](#mergerequest)

### postV3ProjectsIdMergeRequestsSubscribableIdSubscription
Subscribe to a resource


```js
gitlab.postV3ProjectsIdMergeRequestsSubscribableIdSubscription({
  "id": "",
  "subscribable_id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * subscribable_id **required** `string`: The ID of a resource

#### Output
* output [MergeRequest](#mergerequest)

### getV3ProjectsIdMilestones
Get a list of project milestones


```js
gitlab.getV3ProjectsIdMilestones({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * state `string` (values: active, closed, all): Return "active", "closed", or "all" milestones
  * iid `array`: The IID of the milestone
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Milestone](#milestone)

### postV3ProjectsIdMilestones
Create a new project milestone


```js
gitlab.postV3ProjectsIdMilestones({
  "id": "",
  "title": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * title **required** `string`: The title of the milestone
  * description `string`: The description of the milestone
  * due_date `string`: The due date of the milestone. The ISO 8601 date format (%Y-%m-%d)
  * start_date `string`: The start date of the milestone. The ISO 8601 date format (%Y-%m-%d)

#### Output
* output [Milestone](#milestone)

### getV3ProjectsIdMilestonesMilestoneId
Get a single project milestone


```js
gitlab.getV3ProjectsIdMilestonesMilestoneId({
  "id": "",
  "milestone_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * milestone_id **required** `integer`: The ID of a project milestone

#### Output
* output [Milestone](#milestone)

### putV3ProjectsIdMilestonesMilestoneId
Update an existing project milestone


```js
gitlab.putV3ProjectsIdMilestonesMilestoneId({
  "id": "",
  "milestone_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * milestone_id **required** `integer`: The ID of a project milestone
  * title `string`: The title of the milestone
  * state_event `string` (values: close, activate): The state event of the milestone 
  * description `string`: The description of the milestone
  * due_date `string`: The due date of the milestone. The ISO 8601 date format (%Y-%m-%d)
  * start_date `string`: The start date of the milestone. The ISO 8601 date format (%Y-%m-%d)

#### Output
* output [Milestone](#milestone)

### getV3ProjectsIdMilestonesMilestoneIdIssues
Get all issues for a single project milestone


```js
gitlab.getV3ProjectsIdMilestonesMilestoneIdIssues({
  "id": "",
  "milestone_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * milestone_id **required** `integer`: The ID of a project milestone
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Issue](#issue)

### getV3ProjectsIdNotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.getV3ProjectsIdNotificationSettings({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID or project ID or project NAMESPACE/PROJECT_NAME

#### Output
* output [NotificationSetting](#notificationsetting)

### putV3ProjectsIdNotificationSettings
This feature was introduced in GitLab 8.12


```js
gitlab.putV3ProjectsIdNotificationSettings({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The group ID or project ID or project NAMESPACE/PROJECT_NAME
  * level `string`: The project notification level
  * new_note `boolean`: Enable/disable this notification
  * new_issue `boolean`: Enable/disable this notification
  * reopen_issue `boolean`: Enable/disable this notification
  * close_issue `boolean`: Enable/disable this notification
  * reassign_issue `boolean`: Enable/disable this notification
  * new_merge_request `boolean`: Enable/disable this notification
  * reopen_merge_request `boolean`: Enable/disable this notification
  * close_merge_request `boolean`: Enable/disable this notification
  * reassign_merge_request `boolean`: Enable/disable this notification
  * merge_merge_request `boolean`: Enable/disable this notification
  * failed_pipeline `boolean`: Enable/disable this notification
  * success_pipeline `boolean`: Enable/disable this notification

#### Output
* output [NotificationSetting](#notificationsetting)

### postV3ProjectsIdPipeline
This feature was introduced in GitLab 8.14


```js
gitlab.postV3ProjectsIdPipeline({
  "id": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * ref **required** `string`: Reference

#### Output
* output [Pipeline](#pipeline)

### getV3ProjectsIdPipelines
This feature was introduced in GitLab 8.11.


```js
gitlab.getV3ProjectsIdPipelines({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * scope `string` (values: running, branches, tags): Either running, branches, or tags

#### Output
* output [Pipeline](#pipeline)

### getV3ProjectsIdPipelinesPipelineId
This feature was introduced in GitLab 8.11


```js
gitlab.getV3ProjectsIdPipelinesPipelineId({
  "id": "",
  "pipeline_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * pipeline_id **required** `integer`: The pipeline ID

#### Output
* output [Pipeline](#pipeline)

### postV3ProjectsIdPipelinesPipelineIdCancel
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3ProjectsIdPipelinesPipelineIdCancel({
  "id": "",
  "pipeline_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * pipeline_id **required** `integer`: The pipeline ID

#### Output
* output [Pipeline](#pipeline)

### postV3ProjectsIdPipelinesPipelineIdRetry
This feature was introduced in GitLab 8.11.


```js
gitlab.postV3ProjectsIdPipelinesPipelineIdRetry({
  "id": "",
  "pipeline_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * pipeline_id **required** `integer`: The pipeline ID

#### Output
* output [Pipeline](#pipeline)

### getV3ProjectsIdRepositoryArchive
Get an archive of the repository


```js
gitlab.getV3ProjectsIdRepositoryArchive({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha `string`: The commit sha of the archive to be downloaded
  * format `string`: The archive format

#### Output
*Output schema unknown*

### getV3ProjectsIdRepositoryBlobsSha
Get a raw file contents


```js
gitlab.getV3ProjectsIdRepositoryBlobsSha({
  "id": "",
  "sha": "",
  "filepath": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: The commit, branch name, or tag name
  * filepath **required** `string`: The path to the file to display

#### Output
*Output schema unknown*

### getV3ProjectsIdRepositoryBranches
Get a project repository branches


```js
gitlab.getV3ProjectsIdRepositoryBranches({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [RepoBranch](#repobranch)

### postV3ProjectsIdRepositoryBranches
Create branch


```js
gitlab.postV3ProjectsIdRepositoryBranches({
  "id": "",
  "branch_name": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * branch_name **required** `string`: The name of the branch
  * ref **required** `string`: Create branch from commit sha or existing branch

#### Output
* output [RepoBranch](#repobranch)

### deleteV3ProjectsIdRepositoryBranchesBranch
Delete a branch


```js
gitlab.deleteV3ProjectsIdRepositoryBranchesBranch({
  "id": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * branch **required** `string`: The name of the branch

#### Output
*Output schema unknown*

### getV3ProjectsIdRepositoryBranchesBranch
Get a single branch


```js
gitlab.getV3ProjectsIdRepositoryBranchesBranch({
  "id": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * branch **required** `string`: The name of the branch

#### Output
* output [RepoBranch](#repobranch)

### putV3ProjectsIdRepositoryBranchesBranchProtect
Protect a single branch


```js
gitlab.putV3ProjectsIdRepositoryBranchesBranchProtect({
  "id": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * branch **required** `string`: The name of the branch
  * developers_can_push `boolean`: Flag if developers can push to that branch
  * developers_can_merge `boolean`: Flag if developers can merge to that branch

#### Output
* output [RepoBranch](#repobranch)

### putV3ProjectsIdRepositoryBranchesBranchUnprotect
Unprotect a single branch


```js
gitlab.putV3ProjectsIdRepositoryBranchesBranchUnprotect({
  "id": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * branch **required** `string`: The name of the branch

#### Output
* output [RepoBranch](#repobranch)

### getV3ProjectsIdRepositoryCommits
Get a project repository commits


```js
gitlab.getV3ProjectsIdRepositoryCommits({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * ref_name `string`: The name of a repository branch or tag, if not given the default branch is used
  * since `string`: Only commits after or in this date will be returned
  * until `string`: Only commits before or in this date will be returned
  * page `integer`: The page for pagination
  * per_page `integer`: The number of results per page
  * path `string`: The file path

#### Output
* output [RepoCommit](#repocommit)

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

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * branch_name **required** `string`: The name of branch
  * commit_message **required** `string`: Commit message
  * actions **required** `array`: Actions to perform in commit
  * author_email `string`: Author email for commit
  * author_name `string`: Author name for commit

#### Output
* output [RepoCommitDetail](#repocommitdetail)

### getV3ProjectsIdRepositoryCommitsSha
Get a specific commit of a project


```js
gitlab.getV3ProjectsIdRepositoryCommitsSha({
  "id": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: A commit sha, or the name of a branch or tag

#### Output
* output [RepoCommitDetail](#repocommitdetail)

### getV3ProjectsIdRepositoryCommitsShaBlob
Get a raw file contents


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaBlob({
  "id": "",
  "sha": "",
  "filepath": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: The commit, branch name, or tag name
  * filepath **required** `string`: The path to the file to display

#### Output
*Output schema unknown*

### getV3ProjectsIdRepositoryCommitsShaBuilds
Get builds for a specific commit of a project


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaBuilds({
  "id": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: The SHA id of a commit
  * scope `string` (values: pending, running, failed, success, canceled): The scope of builds to show
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Build](#build)

### postV3ProjectsIdRepositoryCommitsShaCherryPick
This feature was introduced in GitLab 8.15


```js
gitlab.postV3ProjectsIdRepositoryCommitsShaCherryPick({
  "id": "",
  "sha": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: A commit sha to be cherry picked
  * branch **required** `string`: The name of the branch

#### Output
* output [RepoCommit](#repocommit)

### getV3ProjectsIdRepositoryCommitsShaComments
Get a commit's comments


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaComments({
  "id": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * sha **required** `string`: A commit sha, or the name of a branch or tag

#### Output
* output [CommitNote](#commitnote)

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

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: The commit's SHA
  * note **required** `string`: The text of the comment
  * path `string`: The file path
  * line **required** `integer`: The line number
  * line_type **required** `string` (values: new, old): The type of the line

#### Output
* output [CommitNote](#commitnote)

### getV3ProjectsIdRepositoryCommitsShaDiff
Get the diff for a specific commit of a project


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaDiff({
  "id": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: A commit sha, or the name of a branch or tag

#### Output
*Output schema unknown*

### getV3ProjectsIdRepositoryCommitsShaStatuses
Get a commit's statuses


```js
gitlab.getV3ProjectsIdRepositoryCommitsShaStatuses({
  "id": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: The commit hash
  * ref `string`: The ref
  * stage `string`: The stage
  * name `string`: The name
  * all `string`: Show all statuses, default: false
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [CommitStatus](#commitstatus)

### getV3ProjectsIdRepositoryCompare
Compare two branches, tags, or commits


```js
gitlab.getV3ProjectsIdRepositoryCompare({
  "id": "",
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * from **required** `string`: The commit, branch name, or tag name to start comparison
  * to **required** `string`: The commit, branch name, or tag name to stop comparison

#### Output
* output [Compare](#compare)

### getV3ProjectsIdRepositoryContributors
Get repository contributors


```js
gitlab.getV3ProjectsIdRepositoryContributors({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [Contributor](#contributor)

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

#### Input
* input `object`
  * id **required** `string`: The project ID
  * file_path **required** `string`: The path to new file. Ex. lib/class.rb
  * branch_name **required** `string`: The name of branch
  * commit_message **required** `string`: Commit Message
  * author_email `string`: The email of the author
  * author_name `string`: The name of the author

#### Output
*Output schema unknown*

### getV3ProjectsIdRepositoryFiles
Get a file from repository


```js
gitlab.getV3ProjectsIdRepositoryFiles({
  "id": "",
  "file_path": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The project ID
  * file_path **required** `string`: The path to the file. Ex. lib/class.rb
  * ref **required** `string`: The name of branch, tag, or commit

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * id **required** `string`: The project ID
  * file_path **required** `string`: The path to new file. Ex. lib/class.rb
  * branch_name **required** `string`: The name of branch
  * commit_message **required** `string`: Commit Message
  * author_email `string`: The email of the author
  * author_name `string`: The name of the author
  * content **required** `string`: File content
  * encoding `string` (values: base64): File encoding

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * id **required** `string`: The project ID
  * file_path **required** `string`: The path to new file. Ex. lib/class.rb
  * branch_name **required** `string`: The name of branch
  * commit_message **required** `string`: Commit Message
  * author_email `string`: The email of the author
  * author_name `string`: The name of the author
  * content **required** `string`: File content
  * encoding `string` (values: base64): File encoding

#### Output
*Output schema unknown*

### deleteV3ProjectsIdRepositoryMergedBranches



```js
gitlab.deleteV3ProjectsIdRepositoryMergedBranches({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
*Output schema unknown*

### getV3ProjectsIdRepositoryRawBlobsSha
Get a raw blob contents by blob sha


```js
gitlab.getV3ProjectsIdRepositoryRawBlobsSha({
  "id": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: The commit, branch name, or tag name

#### Output
*Output schema unknown*

### getV3ProjectsIdRepositoryTags
Get a project repository tags


```js
gitlab.getV3ProjectsIdRepositoryTags({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [RepoTag](#repotag)

### postV3ProjectsIdRepositoryTags
Create a new repository tag


```js
gitlab.postV3ProjectsIdRepositoryTags({
  "id": "",
  "tag_name": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * tag_name **required** `string`: The name of the tag
  * ref **required** `string`: The commit sha or branch name
  * message `string`: Specifying a message creates an annotated tag
  * release_description `string`: Specifying release notes stored in the GitLab database

#### Output
* output [RepoTag](#repotag)

### deleteV3ProjectsIdRepositoryTagsTagName
Delete a repository tag


```js
gitlab.deleteV3ProjectsIdRepositoryTagsTagName({
  "id": "",
  "tag_name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * tag_name **required** `string`: The name of the tag

#### Output
*Output schema unknown*

### getV3ProjectsIdRepositoryTagsTagName
Get a single repository tag


```js
gitlab.getV3ProjectsIdRepositoryTagsTagName({
  "id": "",
  "tag_name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * tag_name **required** `string`: The name of the tag

#### Output
* output [RepoTag](#repotag)

### postV3ProjectsIdRepositoryTagsTagNameRelease
Add a release note to a tag


```js
gitlab.postV3ProjectsIdRepositoryTagsTagNameRelease({
  "id": "",
  "tag_name": "",
  "description": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * tag_name **required** `string`: The name of the tag
  * description **required** `string`: Release notes with markdown support

#### Output
* output [Release](#release)

### putV3ProjectsIdRepositoryTagsTagNameRelease
Update a tag's release note


```js
gitlab.putV3ProjectsIdRepositoryTagsTagNameRelease({
  "id": "",
  "tag_name": "",
  "description": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * tag_name **required** `string`: The name of the tag
  * description **required** `string`: Release notes with markdown support

#### Output
* output [Release](#release)

### getV3ProjectsIdRepositoryTree
Get a project repository tree


```js
gitlab.getV3ProjectsIdRepositoryTree({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * ref_name `string`: The name of a repository branch or tag, if not given the default branch is used
  * path `string`: The path of the tree
  * recursive `boolean`: Used to get a recursive tree

#### Output
* output [RepoTreeObject](#repotreeobject)

### getV3ProjectsIdRunners
Get runners available for project


```js
gitlab.getV3ProjectsIdRunners({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * scope `string` (values: active, paused, online, specific, shared): The scope of specific runners to show
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Runner](#runner)

### postV3ProjectsIdRunners
Enable a runner for a project


```js
gitlab.postV3ProjectsIdRunners({
  "id": "",
  "runner_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * runner_id **required** `integer`: The ID of the runner

#### Output
* output [Runner](#runner)

### deleteV3ProjectsIdRunnersRunnerId
Disable project's runner


```js
gitlab.deleteV3ProjectsIdRunnersRunnerId({
  "id": "",
  "runner_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * runner_id **required** `integer`: The ID of the runner

#### Output
* output [Runner](#runner)

### putV3ProjectsIdServicesAsana
Set asana service for project


```js
gitlab.putV3ProjectsIdServicesAsana({
  "api_key": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: User API token
  * restrict_to_branch `string`: Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesAssembla
Set assembla service for project


```js
gitlab.putV3ProjectsIdServicesAssembla({
  "token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The authentication token
  * subdomain `string`: Subdomain setting
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * bamboo_url **required** `string`: Bamboo root URL like https://bamboo.example.com
  * build_key **required** `string`: Bamboo build plan key like
  * username **required** `string`: A user with API access, if applicable
  * password **required** `string`: Passord of the user
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * new_issue_url **required** `string`: New issue URL
  * issues_url **required** `string`: Issues URL
  * project_url **required** `string`: Project URL
  * description `string`: Description
  * title `string`: Title
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesBuildkite
Set buildkite service for project


```js
gitlab.putV3ProjectsIdServicesBuildkite({
  "token": "",
  "project_url": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Buildkite project GitLab token
  * project_url **required** `string`: The buildkite project URL
  * enable_ssl_verification `boolean`: Enable SSL verification for communication
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesBuildsEmail
Set builds-email service for project


```js
gitlab.putV3ProjectsIdServicesBuildsEmail({
  "recipients": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * recipients **required** `string`: Comma-separated list of recipient email addresses
  * add_pusher `boolean`: Add pusher to recipients list
  * notify_only_broken_builds `boolean`: Notify only broken builds
  * build_events `string`: Event will be triggered when a build status changes
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesCampfire
Set campfire service for project


```js
gitlab.putV3ProjectsIdServicesCampfire({
  "token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Campfire token
  * subdomain `string`: Campfire subdomain
  * room `string`: Campfire room
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * new_issue_url **required** `string`: New issue URL
  * issues_url **required** `string`: Issues URL
  * project_url **required** `string`: Project URL
  * description `string`: Description
  * title `string`: Title
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesDroneCi
Set drone-ci service for project


```js
gitlab.putV3ProjectsIdServicesDroneCi({
  "token": "",
  "drone_url": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Drone CI token
  * drone_url **required** `string`: Drone CI URL
  * enable_ssl_verification `boolean`: Enable SSL verification for communication
  * push_events `string`: Event will be triggered by a push to the repository
  * merge_request_events `string`: Event will be triggered when a merge request is created/updated/merged
  * tag_push_events `string`: Event will be triggered when a new tag is pushed to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesEmailsOnPush
Set emails-on-push service for project


```js
gitlab.putV3ProjectsIdServicesEmailsOnPush({
  "recipients": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * recipients **required** `string`: Comma-separated list of recipient email addresses
  * disable_diffs `boolean`: Disable code diffs
  * send_from_committer_email `boolean`: Send from committer
  * push_events `string`: Event will be triggered by a push to the repository
  * tag_push_events `string`: Event will be triggered when a new tag is pushed to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesExternalWiki
Set external-wiki service for project


```js
gitlab.putV3ProjectsIdServicesExternalWiki({
  "external_wiki_url": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * external_wiki_url **required** `string`: The URL of the external Wiki
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesFlowdock
Set flowdock service for project


```js
gitlab.putV3ProjectsIdServicesFlowdock({
  "token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: Flowdock token
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesGemnasium
Set gemnasium service for project


```js
gitlab.putV3ProjectsIdServicesGemnasium({
  "api_key": "",
  "token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: Your personal API key on gemnasium.com
  * token **required** `string`: The project's slug on gemnasium.com
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesHipchat
Set hipchat service for project


```js
gitlab.putV3ProjectsIdServicesHipchat({
  "token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The room token
  * room `string`: The room name or ID
  * color `string`: The room color
  * notify `boolean`: Enable notifications
  * api_version `string`: Leave blank for default (v2)
  * server `string`: Leave blank for default. https://hipchat.example.com
  * push_events `string`: Event will be triggered by a push to the repository
  * issue_events `string`: Event will be triggered when an issue is created/updated/closed
  * confidential_issue_events `string`: Event will be triggered when a confidential issue is created/updated/closed
  * merge_request_events `string`: Event will be triggered when a merge request is created/updated/merged
  * note_events `string`: Event will be triggered when someone adds a comment
  * tag_push_events `string`: Event will be triggered when a new tag is pushed to the repository
  * build_events `string`: Event will be triggered when a build status changes
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesIrker
Set irker service for project


```js
gitlab.putV3ProjectsIdServicesIrker({
  "recipients": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * recipients **required** `string`: Recipients/channels separated by whitespaces
  * default_irc_uri `string`: Default: irc://irc.network.net:6697
  * server_host `string`: Server host. Default localhost
  * server_port `integer`: Server port. Default 6659
  * colorize_messages `boolean`: Colorize messages
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesJira
Set jira service for project


```js
gitlab.putV3ProjectsIdServicesJira({
  "url": "",
  "project_key": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL to the JIRA project which is being linked to this GitLab project, e.g., https://jira.example.com
  * project_key **required** `string`: The short identifier for your JIRA project, all uppercase, e.g., PROJ
  * username `string`: The username of the user created to be used with GitLab/JIRA
  * password `string`: The password of the user created to be used with GitLab/JIRA
  * jira_issue_transition_id `integer`: The ID of a transition that moves issues to a closed state. You can find this number under the JIRA workflow administration (**Administration > Issues > Workflows**) by selecting **View** under **Operations** of the desired workflow of your project. The ID of each state can be found inside the parenthesis of each transition name under the **Transitions (id)** column ([see screenshot][trans]). By default, this ID is set to `2`
  * commit_events `string`: Event will be triggered when a commit is created/updated
  * merge_request_events `string`: Event will be triggered when a merge request is created/updated/merged
  * id **required** `integer`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * namespace **required** `string`: The Kubernetes namespace to use
  * api_url **required** `string`: The URL to the Kubernetes cluster API, e.g., https://kubernetes.example.com
  * token **required** `string`: The service token to authenticate against the Kubernetes cluster with
  * ca_pem `string`: A custom certificate authority bundle to verify the Kubernetes cluster with (PEM format)
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesMattermost
Set mattermost service for project


```js
gitlab.putV3ProjectsIdServicesMattermost({
  "webhook": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * webhook **required** `string`: The Mattermost webhook. e.g. http://mattermost_host/hooks/...
  * push_events `string`: Event will be triggered by a push to the repository
  * issue_events `string`: Event will be triggered when an issue is created/updated/closed
  * confidential_issue_events `string`: Event will be triggered when a confidential issue is created/updated/closed
  * merge_request_events `string`: Event will be triggered when a merge request is created/updated/merged
  * note_events `string`: Event will be triggered when someone adds a comment
  * tag_push_events `string`: Event will be triggered when a new tag is pushed to the repository
  * build_events `string`: Event will be triggered when a build status changes
  * pipeline_events `string`
  * wiki_page_events `string`: Event will be triggered when a wiki page is created/updated
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesMattermostSlashCommands
Set mattermost-slash-commands service for project


```js
gitlab.putV3ProjectsIdServicesMattermostSlashCommands({
  "token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The Mattermost token
  * id **required** `integer`

#### Output
*Output schema unknown*

### postV3ProjectsIdServicesMattermostSlashCommandsTrigger
Added in GitLab 8.13


```js
gitlab.postV3ProjectsIdServicesMattermostSlashCommandsTrigger({
  "id": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * token **required** `string`: The Mattermost token

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesPipelinesEmail
Set pipelines-email service for project


```js
gitlab.putV3ProjectsIdServicesPipelinesEmail({
  "recipients": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * recipients **required** `string`: Comma-separated list of recipient email addresses
  * notify_only_broken_builds `boolean`: Notify only broken builds
  * pipeline_events `string`
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesPivotaltracker
Set pivotaltracker service for project


```js
gitlab.putV3ProjectsIdServicesPivotaltracker({
  "token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The Pivotaltracker token
  * restrict_to_branch `string`: Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches.
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * api_key **required** `string`: The application key
  * user_key **required** `string`: The user key
  * priority **required** `string`: The priority
  * device **required** `string`: Leave blank for all active devices
  * sound **required** `string`: The sound of the notification
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * new_issue_url **required** `string`: The new issue URL
  * project_url **required** `string`: The project URL
  * issues_url **required** `string`: The issues URL
  * description `string`: The description of the tracker
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesSlack
Set slack service for project


```js
gitlab.putV3ProjectsIdServicesSlack({
  "webhook": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * webhook **required** `string`: The Slack webhook. e.g. https://hooks.slack.com/services/...
  * new_issue_url `string`: The user name
  * channel `string`: The channel name
  * push_events `string`: Event will be triggered by a push to the repository
  * issue_events `string`: Event will be triggered when an issue is created/updated/closed
  * confidential_issue_events `string`: Event will be triggered when a confidential issue is created/updated/closed
  * merge_request_events `string`: Event will be triggered when a merge request is created/updated/merged
  * note_events `string`: Event will be triggered when someone adds a comment
  * tag_push_events `string`: Event will be triggered when a new tag is pushed to the repository
  * build_events `string`: Event will be triggered when a build status changes
  * pipeline_events `string`
  * wiki_page_events `string`: Event will be triggered when a wiki page is created/updated
  * id **required** `integer`

#### Output
*Output schema unknown*

### putV3ProjectsIdServicesSlackSlashCommands
Set slack-slash-commands service for project


```js
gitlab.putV3ProjectsIdServicesSlackSlashCommands({
  "token": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The Slack token
  * id **required** `integer`

#### Output
*Output schema unknown*

### postV3ProjectsIdServicesSlackSlashCommandsTrigger
Added in GitLab 8.13


```js
gitlab.postV3ProjectsIdServicesSlackSlashCommandsTrigger({
  "id": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * token **required** `string`: The Slack token

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * teamcity_url **required** `string`: TeamCity root URL like https://teamcity.example.com
  * build_type **required** `string`: Build configuration ID
  * username **required** `string`: A user with permissions to trigger a manual build
  * password **required** `string`: The password of the user
  * push_events `string`: Event will be triggered by a push to the repository
  * id **required** `integer`

#### Output
*Output schema unknown*

### deleteV3ProjectsIdServicesServiceSlug
Delete a service for project


```js
gitlab.deleteV3ProjectsIdServicesServiceSlug({
  "service_slug": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * service_slug **required** `string` (values: asana, assembla, bamboo, bugzilla, buildkite, builds-email, campfire, custom-issue-tracker, drone-ci, emails-on-push, external-wiki, flowdock, gemnasium, hipchat, irker, jira, kubernetes, mattermost-slash-commands, slack-slash-commands, pipelines-email, pivotaltracker, pushover, redmine, slack, mattermost, teamcity): The name of the service
  * id **required** `integer`

#### Output
*Output schema unknown*

### getV3ProjectsIdServicesServiceSlug
Get the service settings for project


```js
gitlab.getV3ProjectsIdServicesServiceSlug({
  "service_slug": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * service_slug **required** `string` (values: asana, assembla, bamboo, bugzilla, buildkite, builds-email, campfire, custom-issue-tracker, drone-ci, emails-on-push, external-wiki, flowdock, gemnasium, hipchat, irker, jira, kubernetes, mattermost-slash-commands, slack-slash-commands, pipelines-email, pivotaltracker, pushover, redmine, slack, mattermost, teamcity): The name of the service
  * id **required** `integer`

#### Output
* output [ProjectService](#projectservice)

### postV3ProjectsIdShare
Share the project with a group


```js
gitlab.postV3ProjectsIdShare({
  "id": "",
  "group_id": 0,
  "group_access": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * group_id **required** `integer`: The ID of a group
  * group_access **required** `integer` (values: 10, 20, 30, 40): The group access level
  * expires_at `string`: Share expiration date

#### Output
* output [ProjectGroupLink](#projectgrouplink)

### deleteV3ProjectsIdShareGroupId



```js
gitlab.deleteV3ProjectsIdShareGroupId({
  "id": "",
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * group_id **required** `integer`: The ID of the group

#### Output
*Output schema unknown*

### getV3ProjectsIdSnippets
Get all project snippets


```js
gitlab.getV3ProjectsIdSnippets({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [ProjectSnippet](#projectsnippet)

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

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * title **required** `string`: The title of the snippet
  * file_name **required** `string`: The file name of the snippet
  * code **required** `string`: The content of the snippet
  * visibility_level **required** `integer` (values: 0, 10, 20): The visibility level of the snippet

#### Output
* output [ProjectSnippet](#projectsnippet)

### getV3ProjectsIdSnippetsNoteableIdNotes
Get a list of project +noteable+ notes


```js
gitlab.getV3ProjectsIdSnippetsNoteableIdNotes({
  "id": "",
  "noteable_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Note](#note)

### postV3ProjectsIdSnippetsNoteableIdNotes
Create a new +noteable+ note


```js
gitlab.postV3ProjectsIdSnippetsNoteableIdNotes({
  "id": "",
  "noteable_id": 0,
  "body": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * body **required** `string`: The content of a note
  * created_at `string`: The creation date of the note

#### Output
* output [Note](#note)

### deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId
Delete a +noteable+ note


```js
gitlab.deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId({
  "id": "",
  "noteable_id": 0,
  "note_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * note_id **required** `integer`: The ID of a note

#### Output
* output [Note](#note)

### getV3ProjectsIdSnippetsNoteableIdNotesNoteId
Get a single +noteable+ note


```js
gitlab.getV3ProjectsIdSnippetsNoteableIdNotesNoteId({
  "id": "",
  "note_id": 0,
  "noteable_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * note_id **required** `integer`: The ID of a note
  * noteable_id **required** `integer`: The ID of the noteable

#### Output
* output [Note](#note)

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

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * noteable_id **required** `integer`: The ID of the noteable
  * note_id **required** `integer`: The ID of a note
  * body **required** `string`: The content of a note

#### Output
* output [Note](#note)

### deleteV3ProjectsIdSnippetsSnippetId
Delete a project snippet


```js
gitlab.deleteV3ProjectsIdSnippetsSnippetId({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * snippet_id **required** `integer`: The ID of a project snippet

#### Output
*Output schema unknown*

### getV3ProjectsIdSnippetsSnippetId
Get a single project snippet


```js
gitlab.getV3ProjectsIdSnippetsSnippetId({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * snippet_id **required** `integer`: The ID of a project snippet

#### Output
* output [ProjectSnippet](#projectsnippet)

### putV3ProjectsIdSnippetsSnippetId
Update an existing project snippet


```js
gitlab.putV3ProjectsIdSnippetsSnippetId({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * snippet_id **required** `integer`: The ID of a project snippet
  * title `string`: The title of the snippet
  * file_name `string`: The file name of the snippet
  * code `string`: The content of the snippet
  * visibility_level `integer` (values: 0, 10, 20): The visibility level of the snippet

#### Output
* output [ProjectSnippet](#projectsnippet)

### getV3ProjectsIdSnippetsSnippetIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdSnippetsSnippetIdAwardEmoji({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * snippet_id **required** `integer`: The ID of an Issue, Merge Request or Snippet
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [AwardEmoji](#awardemoji)

### postV3ProjectsIdSnippetsSnippetIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.postV3ProjectsIdSnippetsSnippetIdAwardEmoji({
  "name": "",
  "id": 0,
  "snippet_id": 0
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of a award_emoji (without colons)
  * id **required** `integer`
  * snippet_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "snippet_id": 0
}, context)
```

#### Input
* input `object`
  * award_id **required** `integer`: The ID of an award emoji
  * id **required** `integer`
  * snippet_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId({
  "award_id": 0,
  "id": 0,
  "snippet_id": 0
}, context)
```

#### Input
* input `object`
  * award_id **required** `integer`: The ID of the award
  * id **required** `integer`
  * snippet_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji
This feature was introduced in 8.9


```js
gitlab.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji({
  "id": 0,
  "snippet_id": 0,
  "note_id": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page
  * id **required** `integer`
  * snippet_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

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

#### Input
* input `object`
  * name **required** `string`: The name of a award_emoji (without colons)
  * id **required** `integer`
  * snippet_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

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

#### Input
* input `object`
  * award_id **required** `integer`: The ID of an award emoji
  * id **required** `integer`
  * snippet_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

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

#### Input
* input `object`
  * award_id **required** `integer`: The ID of the award
  * id **required** `integer`
  * snippet_id **required** `integer`
  * note_id **required** `integer`

#### Output
* output [AwardEmoji](#awardemoji)

### getV3ProjectsIdSnippetsSnippetIdRaw
Get a raw project snippet


```js
gitlab.getV3ProjectsIdSnippetsSnippetIdRaw({
  "id": "",
  "snippet_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * snippet_id **required** `integer`: The ID of a project snippet

#### Output
*Output schema unknown*

### deleteV3ProjectsIdStar
Unstar a project


```js
gitlab.deleteV3ProjectsIdStar({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [Project](#project)

### postV3ProjectsIdStar
Star a project


```js
gitlab.postV3ProjectsIdStar({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [Project](#project)

### postV3ProjectsIdStatusesSha
Post status to a commit


```js
gitlab.postV3ProjectsIdStatusesSha({
  "id": "",
  "sha": "",
  "state": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * sha **required** `string`: The commit hash
  * state **required** `string` (values: pending, running, success, failed, canceled): The state of the status
  * ref `string`: The ref
  * target_url `string`: The target URL to associate with this status
  * description `string`: A short description of the status
  * name `string`: A string label to differentiate this status from the status of other systems. Default: "default"
  * context `string`: A string label to differentiate this status from the status of other systems. Default: "default"

#### Output
* output [CommitStatus](#commitstatus)

### getV3ProjectsIdTriggers
Get triggers list


```js
gitlab.getV3ProjectsIdTriggers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Trigger](#trigger)

### postV3ProjectsIdTriggers
Create a trigger


```js
gitlab.postV3ProjectsIdTriggers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [Trigger](#trigger)

### deleteV3ProjectsIdTriggersToken
Delete a trigger


```js
gitlab.deleteV3ProjectsIdTriggersToken({
  "id": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * token **required** `string`: The unique token of trigger

#### Output
* output [Trigger](#trigger)

### getV3ProjectsIdTriggersToken
Get specific trigger of a project


```js
gitlab.getV3ProjectsIdTriggersToken({
  "id": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * token **required** `string`: The unique token of trigger

#### Output
* output [Trigger](#trigger)

### postV3ProjectsIdUnarchive
Unarchive a project


```js
gitlab.postV3ProjectsIdUnarchive({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project

#### Output
* output [Project](#project)

### postV3ProjectsIdUploads
Upload a file


```js
gitlab.postV3ProjectsIdUploads({
  "id": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * file **required** `string`: The file to be uploaded

#### Output
*Output schema unknown*

### getV3ProjectsIdUsers
Get the users list of a project


```js
gitlab.getV3ProjectsIdUsers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * search `string`: Return list of users matching the search criteria
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [UserBasic](#userbasic)

### getV3ProjectsIdVariables
Get project variables


```js
gitlab.getV3ProjectsIdVariables({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Variable](#variable)

### postV3ProjectsIdVariables
Create a new variable in a project


```js
gitlab.postV3ProjectsIdVariables({
  "id": "",
  "key": "",
  "value": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * key **required** `string`: The key of the variable
  * value **required** `string`: The value of the variable

#### Output
* output [Variable](#variable)

### deleteV3ProjectsIdVariablesKey
Delete an existing variable from a project


```js
gitlab.deleteV3ProjectsIdVariablesKey({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * key **required** `string`: The key of the variable

#### Output
* output [Variable](#variable)

### getV3ProjectsIdVariablesKey
Get a specific variable from a project


```js
gitlab.getV3ProjectsIdVariablesKey({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * key **required** `string`: The key of the variable

#### Output
* output [Variable](#variable)

### putV3ProjectsIdVariablesKey
Update an existing variable from a project


```js
gitlab.putV3ProjectsIdVariablesKey({
  "id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a project
  * key **required** `string`: The key of the variable
  * value `string`: The value of the variable

#### Output
* output [Variable](#variable)

### getV3Runners
Get runners available for user


```js
gitlab.getV3Runners({}, context)
```

#### Input
* input `object`
  * scope `string` (values: active, paused, online): The scope of specific runners to show
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Runner](#runner)

### getV3RunnersAll
Get all runners - shared and specific


```js
gitlab.getV3RunnersAll({}, context)
```

#### Input
* input `object`
  * scope `string` (values: active, paused, online, specific, shared): The scope of specific runners to show
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Runner](#runner)

### deleteV3RunnersId
Remove a runner


```js
gitlab.deleteV3RunnersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the runner

#### Output
* output [Runner](#runner)

### getV3RunnersId
Get runner's details


```js
gitlab.getV3RunnersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the runner

#### Output
* output [RunnerDetails](#runnerdetails)

### putV3RunnersId
Update runner's details


```js
gitlab.putV3RunnersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the runner
  * description `string`: The description of the runner
  * active `boolean`: The state of a runner
  * tag_list `array`: The list of tags for a runner
  * run_untagged `boolean`: Flag indicating the runner can execute untagged jobs
  * locked `boolean`: Flag indicating the runner is locked

#### Output
* output [RunnerDetails](#runnerdetails)

### postV3Session
Login to get token


```js
gitlab.postV3Session({
  "password": ""
}, context)
```

#### Input
* input `object`
  * login `string`: The username
  * email `string`: The email of the user
  * password **required** `string`: The password of the user

#### Output
* output [UserWithPrivateToken](#userwithprivatetoken)

### getV3SidekiqCompoundMetrics
Get the Sidekiq Compound metrics. Includes queue, process, and job statistics


```js
gitlab.getV3SidekiqCompoundMetrics(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3SidekiqJobStats
Get the Sidekiq job statistics


```js
gitlab.getV3SidekiqJobStats(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3SidekiqProcessMetrics
Get the Sidekiq process metrics


```js
gitlab.getV3SidekiqProcessMetrics(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3SidekiqQueueMetrics
Get the Sidekiq queue metrics


```js
gitlab.getV3SidekiqQueueMetrics(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3Snippets
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3Snippets({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [PersonalSnippet](#personalsnippet)

### postV3Snippets
This feature was introduced in GitLab 8.15.


```js
gitlab.postV3Snippets({
  "title": "",
  "file_name": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * title **required** `string`: The title of a snippet
  * file_name **required** `string`: The name of a snippet file
  * content **required** `string`: The content of a snippet
  * visibility_level `integer` (values: 0, 10, 20): The visibility level of the snippet

#### Output
* output [PersonalSnippet](#personalsnippet)

### getV3SnippetsPublic
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3SnippetsPublic({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [PersonalSnippet](#personalsnippet)

### deleteV3SnippetsId
This feature was introduced in GitLab 8.15.


```js
gitlab.deleteV3SnippetsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of a snippet

#### Output
* output [PersonalSnippet](#personalsnippet)

### getV3SnippetsId
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3SnippetsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of a snippet

#### Output
* output [PersonalSnippet](#personalsnippet)

### putV3SnippetsId
This feature was introduced in GitLab 8.15.


```js
gitlab.putV3SnippetsId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of a snippet
  * title `string`: The title of a snippet
  * file_name `string`: The name of a snippet file
  * content `string`: The content of a snippet
  * visibility_level `integer` (values: 0, 10, 20): The visibility level of the snippet

#### Output
* output [PersonalSnippet](#personalsnippet)

### getV3SnippetsIdRaw
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3SnippetsIdRaw({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of a snippet

#### Output
*Output schema unknown*

### getV3TemplatesDockerfiles
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3TemplatesDockerfiles(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TemplatesList](#templateslist)

### getV3TemplatesDockerfilesName
This feature was introduced in GitLab 8.15.


```js
gitlab.getV3TemplatesDockerfilesName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the template

#### Output
* output [Template](#template)

### getV3TemplatesGitignores
This feature was introduced in GitLab 8.8.


```js
gitlab.getV3TemplatesGitignores(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TemplatesList](#templateslist)

### getV3TemplatesGitignoresName
This feature was introduced in GitLab 8.8.


```js
gitlab.getV3TemplatesGitignoresName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the template

#### Output
* output [Template](#template)

### getV3TemplatesGitlabCiYmls
This feature was introduced in GitLab 8.9.


```js
gitlab.getV3TemplatesGitlabCiYmls(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TemplatesList](#templateslist)

### getV3TemplatesGitlabCiYmlsName
This feature was introduced in GitLab 8.9.


```js
gitlab.getV3TemplatesGitlabCiYmlsName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the template

#### Output
* output [Template](#template)

### getV3TemplatesLicenses
This feature was introduced in GitLab 8.7.


```js
gitlab.getV3TemplatesLicenses({}, context)
```

#### Input
* input `object`
  * popular `boolean`: If passed, returns only popular licenses

#### Output
* output [RepoLicense](#repolicense)

### getV3TemplatesLicensesName
This feature was introduced in GitLab 8.7.


```js
gitlab.getV3TemplatesLicensesName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the template

#### Output
* output [RepoLicense](#repolicense)

### deleteV3Todos
Mark all todos as done


```js
gitlab.deleteV3Todos(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getV3Todos
Get a todo list


```js
gitlab.getV3Todos({}, context)
```

#### Input
* input `object`
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Todo](#todo)

### deleteV3TodosId
Mark a todo as done


```js
gitlab.deleteV3TodosId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the todo being marked as done

#### Output
* output [Todo](#todo)

### getV3User
Get the currently authenticated user


```js
gitlab.getV3User(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserPublic](#userpublic)

### getV3UserEmails
Get the currently authenticated user's email addresses


```js
gitlab.getV3UserEmails(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Email](#email)

### postV3UserEmails
Add new email address to the currently authenticated user


```js
gitlab.postV3UserEmails({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: The new email

#### Output
* output [Email](#email)

### deleteV3UserEmailsEmailId
Delete an email address from the currently authenticated user


```js
gitlab.deleteV3UserEmailsEmailId({
  "email_id": 0
}, context)
```

#### Input
* input `object`
  * email_id **required** `integer`: The ID of the email

#### Output
*Output schema unknown*

### getV3UserEmailsEmailId
Get a single email address owned by the currently authenticated user


```js
gitlab.getV3UserEmailsEmailId({
  "email_id": 0
}, context)
```

#### Input
* input `object`
  * email_id **required** `integer`: The ID of the email

#### Output
* output [Email](#email)

### getV3UserKeys
Get the currently authenticated user's SSH keys


```js
gitlab.getV3UserKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SSHKey](#sshkey)

### postV3UserKeys
Add a new SSH key to the currently authenticated user


```js
gitlab.postV3UserKeys({
  "key": "",
  "title": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The new SSH key
  * title **required** `string`: The title of the new SSH key

#### Output
* output [SSHKey](#sshkey)

### deleteV3UserKeysKeyId
Delete an SSH key from the currently authenticated user


```js
gitlab.deleteV3UserKeysKeyId({
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * key_id **required** `integer`: The ID of the SSH key

#### Output
* output [SSHKey](#sshkey)

### getV3UserKeysKeyId
Get a single key owned by currently authenticated user


```js
gitlab.getV3UserKeysKeyId({
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * key_id **required** `integer`: The ID of the SSH key

#### Output
* output [SSHKey](#sshkey)

### getV3Users
Get the list of users


```js
gitlab.getV3Users({}, context)
```

#### Input
* input `object`
  * username `string`: Get a single user with a specific username
  * search `string`: Search for a username
  * active `boolean`: Filters only active users
  * external `boolean`: Filters only external users
  * blocked `boolean`: Filters only blocked users
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [UserBasic](#userbasic)

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

#### Input
* input `object`
  * email **required** `string`: The email of the user
  * password **required** `string`: The password of the new user
  * name **required** `string`: The name of the user
  * username **required** `string`: The username of the user
  * skype `string`: The Skype username
  * linkedin `string`: The LinkedIn username
  * twitter `string`: The Twitter username
  * website_url `string`: The website of the user
  * organization `string`: The organization of the user
  * projects_limit `integer`: The number of projects a user can create
  * extern_uid `string`: The external authentication provider UID
  * provider `string`: The external provider
  * bio `string`: The biography of the user
  * location `string`: The location of the user
  * admin `boolean`: Flag indicating the user is an administrator
  * can_create_group `boolean`: Flag indicating the user can create groups
  * confirm `boolean`: Flag indicating the account needs to be confirmed
  * external `boolean`: Flag indicating the user is an external user

#### Output
* output [UserPublic](#userpublic)

### deleteV3UsersId
Delete a user. Available only for admins.


```js
gitlab.deleteV3UsersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user

#### Output
* output [Email](#email)

### getV3UsersId
Get a single user


```js
gitlab.getV3UsersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user

#### Output
* output [UserBasic](#userbasic)

### putV3UsersId
Update a user. Available only for admins.


```js
gitlab.putV3UsersId({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user
  * email `string`: The email of the user
  * password `string`: The password of the new user
  * name `string`: The name of the user
  * username `string`: The username of the user
  * skype `string`: The Skype username
  * linkedin `string`: The LinkedIn username
  * twitter `string`: The Twitter username
  * website_url `string`: The website of the user
  * organization `string`: The organization of the user
  * projects_limit `integer`: The number of projects a user can create
  * extern_uid `string`: The external authentication provider UID
  * provider `string`: The external provider
  * bio `string`: The biography of the user
  * location `string`: The location of the user
  * admin `boolean`: Flag indicating the user is an administrator
  * can_create_group `boolean`: Flag indicating the user can create groups
  * confirm `boolean`: Flag indicating the account needs to be confirmed
  * external `boolean`: Flag indicating the user is an external user

#### Output
* output [UserPublic](#userpublic)

### putV3UsersIdBlock
Block a user. Available only for admins.


```js
gitlab.putV3UsersIdBlock({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user

#### Output
*Output schema unknown*

### getV3UsersIdEmails
Get the emails addresses of a specified user. Available only for admins.


```js
gitlab.getV3UsersIdEmails({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user

#### Output
* output [Email](#email)

### postV3UsersIdEmails
Add an email address to a specified user. Available only for admins.


```js
gitlab.postV3UsersIdEmails({
  "id": 0,
  "email": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user
  * email **required** `string`: The email of the user

#### Output
* output [Email](#email)

### deleteV3UsersIdEmailsEmailId
Delete an email address of a specified user. Available only for admins.


```js
gitlab.deleteV3UsersIdEmailsEmailId({
  "id": 0,
  "email_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user
  * email_id **required** `integer`: The ID of the email

#### Output
* output [Email](#email)

### getV3UsersIdEvents
This feature was introduced in GitLab 8.13.


```js
gitlab.getV3UsersIdEvents({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user
  * page `integer`: Current page number
  * per_page `integer`: Number of items per page

#### Output
* output [Event](#event)

### getV3UsersIdKeys
Get the SSH keys of a specified user. Available only for admins.


```js
gitlab.getV3UsersIdKeys({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user

#### Output
* output [SSHKey](#sshkey)

### postV3UsersIdKeys
Add an SSH key to a specified user. Available only for admins.


```js
gitlab.postV3UsersIdKeys({
  "id": 0,
  "key": "",
  "title": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user
  * key **required** `string`: The new SSH key
  * title **required** `string`: The title of the new SSH key

#### Output
* output [SSHKey](#sshkey)

### deleteV3UsersIdKeysKeyId
Delete an existing SSH key from a specified user. Available only for admins.


```js
gitlab.deleteV3UsersIdKeysKeyId({
  "id": 0,
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user
  * key_id **required** `integer`: The ID of the SSH key

#### Output
* output [SSHKey](#sshkey)

### putV3UsersIdUnblock
Unblock a user. Available only for admins.


```js
gitlab.putV3UsersIdUnblock({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the user

#### Output
*Output schema unknown*

### getV3Version
This feature was introduced in GitLab 8.13.


```js
gitlab.getV3Version(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

**This integration has no definitions**
