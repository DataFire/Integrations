# @datafire/github

Client library for GitHub

## Installation and Usage
```bash
npm install --save @datafire/github
```
```js
let github = require('@datafire/github').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

github.users.get({}).then(data => {
  console.log(data);
})
```

## Description

Powerful collaboration, code review, and code management for open source and private projects.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
github.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
github.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### emojis.get
Lists all the emojis available to use on GitHub.


```js
github.emojis.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [emojis](#emojis)

### events.get
List public events.


```js
github.events.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [events](#events)

### feeds.get
List Feeds.
GitHub provides several timeline resources in Atom format. The Feeds API
 lists all the feeds available to the authenticating user.



```js
github.feeds.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [feeds](#feeds)

### gists.get
List the authenticated user's gists or if called anonymously, this will
return all public gists.



```js
github.gists.get({}, context)
```

#### Parameters
* input `object`
  * since `string`: Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [gists](#gists)

### gists.post
Create a gist.


```js
github.gists.post({
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * body **required** [postGist](#postGist)

#### Output
* output [gist](#gist)

### gists.public.get
List all public gists.


```js
github.gists.public.get({}, context)
```

#### Parameters
* input `object`
  * since `string`: Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.

#### Output
* output [gists](#gists)

### gists.starred.get
List the authenticated user's starred gists.


```js
github.gists.starred.get({}, context)
```

#### Parameters
* input `object`
  * since `string`: Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.

#### Output
* output [gists](#gists)

### gists.id.delete
Delete a gist.


```js
github.gists.id.delete({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.

#### Output
*Output schema unknown*

### gists.id.get
Get a single gist.


```js
github.gists.id.get({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.

#### Output
* output [gist](#gist)

### gists.id.patch
Edit a gist.


```js
github.gists.id.patch({
  "id": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.
  * body **required** [patchGist](#patchGist)

#### Output
* output [gist](#gist)

### gists.id.comments.get
List comments on a gist.


```js
github.gists.id.comments.get({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.
  * page `integer`

#### Output
* output [comments](#comments)

### gists.id.comments.post
Create a commen


```js
github.gists.id.comments.post({
  "id": 0,
  "body": {
    "body": ""
  }
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.
  * body **required** [commentBody](#commentBody)

#### Output
* output [comment](#comment)

### gists.id.comments.commentId.delete
Delete a comment.


```js
github.gists.id.comments.commentId.delete({
  "id": 0,
  "commentId": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.
  * commentId **required** `integer`: Id of comment.

#### Output
*Output schema unknown*

### gists.id.comments.commentId.get
Get a single comment.


```js
github.gists.id.comments.commentId.get({
  "id": 0,
  "commentId": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.
  * commentId **required** `integer`: Id of comment.

#### Output
* output [comment](#comment)

### gists.id.comments.commentId.patch
Edit a comment.


```js
github.gists.id.comments.commentId.patch({
  "id": 0,
  "commentId": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.
  * commentId **required** `integer`: Id of comment.
  * body **required** [comment](#comment)

#### Output
* output [comment](#comment)

### gists.id.forks.post
Fork a gist.


```js
github.gists.id.forks.post({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.

#### Output
*Output schema unknown*

### gists.id.star.delete
Unstar a gist.


```js
github.gists.id.star.delete({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.

#### Output
*Output schema unknown*

### gists.id.star.get
Check if a gist is starred.


```js
github.gists.id.star.get({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.

#### Output
*Output schema unknown*

### gists.id.star.put
Star a gist.


```js
github.gists.id.star.put({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of gist.

#### Output
*Output schema unknown*

### gitignore.templates.get
Listing available templates.
List all templates available to pass as an option when creating a repository.



```js
github.gitignore.templates.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [gitignore](#gitignore)

### gitignore.templates.language.get
Get a single template.


```js
github.gitignore.templates.language.get({
  "language": ""
}, context)
```

#### Parameters
* input `object`
  * language **required** `string`

#### Output
* output [gitignore-lang](#gitignore-lang)

### issues.get
List issues.
List all issues across all the authenticated user's visible repositories.



```js
github.issues.get({
  "filter": "",
  "state": "",
  "labels": "",
  "sort": "",
  "direction": ""
}, context)
```

#### Parameters
* input `object`
  * filter **required** `string` (values: assigned, created, mentioned, subscribed, all): Issues assigned to you / created by you / mentioning you / you're
  * state **required** `string` (values: open, closed)
  * labels **required** `string`: String list of comma separated Label names. Example - bug,ui,@high.
  * sort **required** `string` (values: created, updated, comments)
  * direction **required** `string` (values: asc, desc)
  * since `string`: Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [issues](#issues)

### legacy.issues.search.owner.repository.state.keyword.get
Find issues by state and keyword.


```js
github.legacy.issues.search.owner.repository.state.keyword.get({
  "keyword": "",
  "state": "",
  "owner": "",
  "repository": ""
}, context)
```

#### Parameters
* input `object`
  * keyword **required** `string`: The search term.
  * state **required** `string` (values: open, closed): Indicates the state of the issues to return. Can be either open or closed.
  * owner **required** `string`
  * repository **required** `string`

#### Output
* output [search-issues-by-keyword](#search-issues-by-keyword)

### legacy.repos.search.keyword.get
Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.


```js
github.legacy.repos.search.keyword.get({
  "keyword": ""
}, context)
```

#### Parameters
* input `object`
  * keyword **required** `string`: The search term
  * order `string` (values: desc, asc): The sort field. if sort param is provided. Can be either asc or desc.
  * language `string`: Filter results by language
  * start_page `string`: The page number to fetch
  * sort `string` (values: updated, stars, forks): The sort field. One of stars, forks, or updated. Default: results are sorted by best match.

#### Output
* output [search-repositories-by-keyword](#search-repositories-by-keyword)

### legacy.user.email.email.get
This API call is added for compatibility reasons only.


```js
github.legacy.user.email.email.get({
  "email": ""
}, context)
```

#### Parameters
* input `object`
  * email **required** `string`: The email address

#### Output
* output [search-user-by-email](#search-user-by-email)

### legacy.user.search.keyword.get
Find users by keyword.


```js
github.legacy.user.search.keyword.get({
  "keyword": ""
}, context)
```

#### Parameters
* input `object`
  * keyword **required** `string`: The search term
  * order `string` (values: desc, asc): The sort field. if sort param is provided. Can be either asc or desc.
  * start_page `string`: The page number to fetch
  * sort `string` (values: updated, stars, forks): The sort field. One of stars, forks, or updated. Default: results are sorted by best match.

#### Output
* output [search-users-by-keyword](#search-users-by-keyword)

### markdown.post
Render an arbitrary Markdown document


```js
github.markdown.post({
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * body **required** [markdown](#markdown)

#### Output
*Output schema unknown*

### markdown.raw.post
Render a Markdown document in raw mode


```js
github.markdown.raw.post(null, context)
```

#### Parameters
*This action has no parameters*

#### Output
*Output schema unknown*

### meta.get
This gives some information about GitHub.com, the service.


```js
github.meta.get(null, context)
```

#### Parameters
*This action has no parameters*

#### Output
* output [meta](#meta)

### networks.owner.repo.events.get
List public events for a network of repositories.


```js
github.networks.owner.repo.events.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of the owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [events](#events)

### notifications.get
List your notifications.
List all notifications for the current user, grouped by repository.



```js
github.notifications.get({}, context)
```

#### Parameters
* input `object`
  * all `boolean`: True to show notifications marked as read.
  * participating `boolean`: True to show only notifications in which the user is directly participating
  * since `string`: The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [notifications](#notifications)

### notifications.put
Mark as read.
Marking a notification as "read" removes it from the default view on GitHub.com.



```js
github.notifications.put({
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * body **required** [notificationMarkRead](#notificationMarkRead)

#### Output
*Output schema unknown*

### notifications.threads.id.get
View a single thread.


```js
github.notifications.threads.id.get({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of thread.

#### Output
* output [notifications](#notifications)

### notifications.threads.id.patch
Mark a thread as read


```js
github.notifications.threads.id.patch({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of thread.

#### Output
*Output schema unknown*

### notifications.threads.id.subscription.delete
Delete a Thread Subscription.


```js
github.notifications.threads.id.subscription.delete({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of thread.

#### Output
*Output schema unknown*

### notifications.threads.id.subscription.get
Get a Thread Subscription.


```js
github.notifications.threads.id.subscription.get({
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of thread.

#### Output
* output [subscription](#subscription)

### notifications.threads.id.subscription.put
Set a Thread Subscription.
This lets you subscribe to a thread, or ignore it. Subscribing to a thread
is unnecessary if the user is already subscribed to the repository. Ignoring
a thread will mute all future notifications (until you comment or get @mentioned).



```js
github.notifications.threads.id.subscription.put({
  "id": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * id **required** `integer`: Id of thread.
  * body **required** [putSubscription](#putSubscription)

#### Output
* output [subscription](#subscription)

### orgs.org.get
Get an Organization.


```js
github.orgs.org.get({
  "org": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.

#### Output
* output [organization](#organization)

### orgs.org.patch
Edit an Organization.


```js
github.orgs.org.patch({
  "org": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * body **required** [patchOrg](#patchOrg)

#### Output
* output [organization](#organization)

### orgs.org.events.get
List public events for an organization.


```js
github.orgs.org.events.get({
  "org": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * page `integer`

#### Output
* output [events](#events)

### orgs.org.issues.get
List issues.
List all issues for a given organization for the authenticated user.



```js
github.orgs.org.issues.get({
  "org": "",
  "filter": "",
  "state": "",
  "labels": "",
  "sort": "",
  "direction": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * filter **required** `string` (values: assigned, created, mentioned, subscribed, all): Issues assigned to you / created by you / mentioning you / you're
  * state **required** `string` (values: open, closed)
  * labels **required** `string`: String list of comma separated Label names. Example - bug,ui,@high.
  * sort **required** `string` (values: created, updated, comments)
  * direction **required** `string` (values: asc, desc)
  * since `string`: Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [issues](#issues)

### orgs.org.members.get
Members list.
List all users who are members of an organization. A member is a user tha
belongs to at least 1 team in the organization. If the authenticated user
is also an owner of this organization then both concealed and public members
will be returned. If the requester is not an owner of the organization the
query will be redirected to the public members list.



```js
github.orgs.org.members.get({
  "org": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * page `integer`

#### Output
* output [users](#users)

### orgs.org.members.username.delete
Remove a member.
Removing a user from this list will remove them from all teams and they
will no longer have any access to the organization's repositories.



```js
github.orgs.org.members.username.delete({
  "org": "",
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * username **required** `string`: Name of the user.

#### Output
*Output schema unknown*

### orgs.org.members.username.get
Check if a user is, publicly or privately, a member of the organization.


```js
github.orgs.org.members.username.get({
  "org": "",
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * username **required** `string`: Name of the user.

#### Output
*Output schema unknown*

### orgs.org.public_members.get
Public members list.
Members of an organization can choose to have their membership publicized
or not.



```js
github.orgs.org.public_members.get({
  "org": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * page `integer`

#### Output
* output [users](#users)

### orgs.org.public_members.username.delete
Conceal a user's membership.


```js
github.orgs.org.public_members.username.delete({
  "org": "",
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * username **required** `string`: Name of the user.

#### Output
*Output schema unknown*

### orgs.org.public_members.username.get
Check public membership.


```js
github.orgs.org.public_members.username.get({
  "org": "",
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * username **required** `string`: Name of the user.

#### Output
*Output schema unknown*

### orgs.org.public_members.username.put
Publicize a user's membership.


```js
github.orgs.org.public_members.username.put({
  "org": "",
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * username **required** `string`: Name of the user.

#### Output
*Output schema unknown*

### orgs.org.repos.get
List repositories for the specified org.


```js
github.orgs.org.repos.get({
  "org": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * type `string` (values: all, public, private, forks, sources, member)
  * page `integer`

#### Output
* output [repos](#repos)

### orgs.org.repos.post
Create a new repository for the authenticated user. OAuth users must supply
repo scope.



```js
github.orgs.org.repos.post({
  "org": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * body **required** [postRepo](#postRepo)

#### Output
* output [repos](#repos)

### orgs.org.teams.get
List teams.


```js
github.orgs.org.teams.get({
  "org": ""
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * page `integer`

#### Output
* output [teams](#teams)

### orgs.org.teams.post
Create team.
In order to create a team, the authenticated user must be an owner of organization.



```js
github.orgs.org.teams.post({
  "org": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* input `object`
  * org **required** `string`: Name of organisation.
  * body **required** [orgTeamsPost](#orgTeamsPost)

#### Output
* output [team](#team)

### rate_limit.get
Get your current rate limit status
Note: Accessing this endpoint does not count against your rate limit.



```js
github.rate_limit.get(null, context)
```

#### Parameters
*This action has no parameters*

#### Output
* output [rate_limit](#rate_limit)

### repos.owner.repo.delete
Delete a Repository.
Deleting a repository requires admin access. If OAuth is used, the delete_repo
scope is required.



```js
github.repos.owner.repo.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.

#### Output
*Output schema unknown*

### repos.owner.repo.get
Get repository.


```js
github.repos.owner.repo.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.

#### Output
* output [repo](#repo)

### repos.owner.repo.patch
Edit repository.


```js
github.repos.owner.repo.patch({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [repoEdit](#repoEdit)

#### Output
* output [repo](#repo)

### repos.owner.repo.assignees.get
List assignees.
This call lists all the available assignees (owner + collaborators) to which
issues may be assigned.



```js
github.repos.owner.repo.assignees.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [assignees](#assignees)

### repos.owner.repo.assignees.assignee.get
Check assignee.
You may also check to see if a particular user is an assignee for a repository.



```js
github.repos.owner.repo.assignees.assignee.get({
  "owner": "",
  "repo": "",
  "assignee": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * assignee **required** `string`: Login of the assignee.

#### Output
*Output schema unknown*

### repos.owner.repo.branches.get
Get list of branches


```js
github.repos.owner.repo.branches.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [branches](#branches)

### repos.owner.repo.branches.branch.get
Get Branch


```js
github.repos.owner.repo.branches.branch.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * branch **required** `string`: Name of the branch.

#### Output
* output [branch](#branch)

### repos.owner.repo.collaborators.get
List.
When authenticating as an organization owner of an organization-owned
repository, all organization owners are included in the list of
collaborators. Otherwise, only users with access to the repository are
returned in the collaborators list.



```js
github.repos.owner.repo.collaborators.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [users](#users)

### repos.owner.repo.collaborators.user.delete
Remove collaborator.


```js
github.repos.owner.repo.collaborators.user.delete({
  "owner": "",
  "repo": "",
  "user": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * user **required** `string`: Login of the user.

#### Output
*Output schema unknown*

### repos.owner.repo.collaborators.user.get
Check if user is a collaborator


```js
github.repos.owner.repo.collaborators.user.get({
  "owner": "",
  "repo": "",
  "user": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * user **required** `string`: Login of the user.

#### Output
*Output schema unknown*

### repos.owner.repo.collaborators.user.put
Add collaborator.


```js
github.repos.owner.repo.collaborators.user.put({
  "owner": "",
  "repo": "",
  "user": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * user **required** `string`: Login of the user.

#### Output
*Output schema unknown*

### repos.owner.repo.comments.get
List commit comments for a repository.
Comments are ordered by ascending ID.



```js
github.repos.owner.repo.comments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [repoComments](#repoComments)

### repos.owner.repo.comments.commentId.delete
Delete a commit comment


```js
github.repos.owner.repo.comments.commentId.delete({
  "owner": "",
  "repo": "",
  "commentId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * commentId **required** `integer`: Id of comment.

#### Output
*Output schema unknown*

### repos.owner.repo.comments.commentId.get
Get a single commit comment.


```js
github.repos.owner.repo.comments.commentId.get({
  "owner": "",
  "repo": "",
  "commentId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * commentId **required** `integer`: Id of comment.

#### Output
* output [commitComments](#commitComments)

### repos.owner.repo.comments.commentId.patch
Update a commit comment.


```js
github.repos.owner.repo.comments.commentId.patch({
  "owner": "",
  "repo": "",
  "commentId": 0,
  "body": {
    "body": ""
  }
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * commentId **required** `integer`: Id of comment.
  * body **required** [commentBody](#commentBody)

#### Output
* output [commitComments](#commitComments)

### repos.owner.repo.commits.get
List commits on a repository.


```js
github.repos.owner.repo.commits.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * since `string`: The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * sha `string`: Sha or branch to start listing commits from.
  * path `string`: Only commits containing this file path will be returned.
  * author `string`: GitHub login, name, or email by which to filter by commit author.
  * until `string`: ISO 8601 Date - Only commits before this date will be returned.
  * page `integer`

#### Output
* output [commits](#commits)

### repos.owner.repo.commits.ref.status.get
Get the combined Status for a specific Ref
The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details.
To access this endpoint during the preview period, you must provide a custom media type in the Accept header:
application/vnd.github.she-hulk-preview+json



```js
github.repos.owner.repo.commits.ref.status.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * ref **required** `string`
  * page `integer`

#### Output
* output [refStatus](#refStatus)

### repos.owner.repo.commits.shaCode.get
Get a single commit.


```js
github.repos.owner.repo.commits.shaCode.get({
  "owner": "",
  "repo": "",
  "shaCode": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * shaCode **required** `string`: SHA-1 code of the commit.

#### Output
* output [commit](#commit)

### repos.owner.repo.commits.shaCode.comments.get
List comments for a single commitList comments for a single commit.


```js
github.repos.owner.repo.commits.shaCode.comments.get({
  "owner": "",
  "repo": "",
  "shaCode": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * shaCode **required** `string`: SHA-1 code of the commit.
  * page `integer`

#### Output
* output [repoComments](#repoComments)

### repos.owner.repo.commits.shaCode.comments.post
Create a commit comment.


```js
github.repos.owner.repo.commits.shaCode.comments.post({
  "owner": "",
  "repo": "",
  "shaCode": "",
  "body": {
    "sha": "",
    "body": ""
  }
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * shaCode **required** `string`: SHA-1 code of the commit.
  * body **required** [commitBody](#commitBody)

#### Output
* output [commitComments](#commitComments)

### repos.owner.repo.compare.baseId...headId.get
Compare two commits


```js
github.repos.owner.repo.compare.baseId...headId.get({
  "owner": "",
  "repo": "",
  "baseId": "",
  "headId": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * baseId **required** `string`
  * headId **required** `string`

#### Output
* output [compare-commits](#compare-commits)

### repos.owner.repo.contents.path.delete
Delete a file.
This method deletes a file in a repository.



```js
github.repos.owner.repo.contents.path.delete({
  "owner": "",
  "repo": "",
  "path": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * path **required** `string`
  * body **required** [deleteFileBody](#deleteFileBody)

#### Output
* output [deleteFile](#deleteFile)

### repos.owner.repo.contents.path.get
Get contents.
This method returns the contents of a file or directory in a repository.
Files and symlinks support a custom media type for getting the raw content.
Directories and submodules do not support custom media types.
Note: This API supports files up to 1 megabyte in size.
Here can be many outcomes. For details see "http://developer.github.com/v3/repos/contents/"



```js
github.repos.owner.repo.contents.path.get({
  "owner": "",
  "repo": "",
  "path": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * path **required** `string`
  * path_query `string`: The content path.
  * ref `string`: The String name of the Commit/Branch/Tag. Defaults to 'master'.

#### Output
* output [contents-path](#contents-path)

### repos.owner.repo.contents.path.put
Create a file.


```js
github.repos.owner.repo.contents.path.put({
  "owner": "",
  "repo": "",
  "path": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * path **required** `string`
  * body **required** [createFileBody](#createFileBody)

#### Output
* output [createFile](#createFile)

### repos.owner.repo.contributors.get
Get list of contributors.


```js
github.repos.owner.repo.contributors.get({
  "owner": "",
  "repo": "",
  "anon": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * anon **required** `string`: Set to 1 or true to include anonymous contributors in results.
  * page `integer`

#### Output
* output [contributors](#contributors)

### repos.owner.repo.deployments.get
Users with pull access can view deployments for a repository


```js
github.repos.owner.repo.deployments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [repo-deployments](#repo-deployments)

### repos.owner.repo.deployments.post
Users with push access can create a deployment for a given ref


```js
github.repos.owner.repo.deployments.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [deployment](#deployment)

#### Output
* output [deployment-resp](#deployment-resp)

### repos.owner.repo.deployments.id.statuses.get
Users with pull access can view deployment statuses for a deployment


```js
github.repos.owner.repo.deployments.id.statuses.get({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * id **required** `integer`: The Deployment ID to list the statuses from.
  * page `integer`

#### Output
* output [deployment-statuses](#deployment-statuses)

### repos.owner.repo.deployments.id.statuses.post
Create a Deployment Status
Users with push access can create deployment statuses for a given deployment:



```js
github.repos.owner.repo.deployments.id.statuses.post({
  "owner": "",
  "repo": "",
  "id": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * id **required** `integer`: The Deployment ID to list the statuses from.
  * body **required** [deployment-statuses-create](#deployment-statuses-create)

#### Output
*Output schema unknown*

### repos.owner.repo.downloads.get
Deprecated. List downloads for a repository.


```js
github.repos.owner.repo.downloads.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [downloads](#downloads)

### repos.owner.repo.downloads.downloadId.delete
Deprecated. Delete a download.


```js
github.repos.owner.repo.downloads.downloadId.delete({
  "owner": "",
  "repo": "",
  "downloadId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * downloadId **required** `integer`: Id of download.

#### Output
*Output schema unknown*

### repos.owner.repo.downloads.downloadId.get
Deprecated. Get a single download.


```js
github.repos.owner.repo.downloads.downloadId.get({
  "owner": "",
  "repo": "",
  "downloadId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * downloadId **required** `integer`: Id of download.

#### Output
* output [downloads](#downloads)

### repos.owner.repo.events.get
Get list of repository events.


```js
github.repos.owner.repo.events.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [events](#events)

### repos.owner.repo.forks.get
List forks.


```js
github.repos.owner.repo.forks.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * sort `string` (values: newes, oldes, watchers)
  * page `integer`

#### Output
* output [forks](#forks)

### repos.owner.repo.forks.post
Create a fork.
Forking a Repository happens asynchronously. Therefore, you may have to wai
a short period before accessing the git objects. If this takes longer than 5
minutes, be sure to contact Support.



```js
github.repos.owner.repo.forks.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [forkBody](#forkBody)

#### Output
* output [fork](#fork)

### repos.owner.repo.git.blobs.post
Create a Blob.


```js
github.repos.owner.repo.git.blobs.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [blob](#blob)

#### Output
* output [blobs](#blobs)

### repos.owner.repo.git.blobs.shaCode.get
Get a Blob.
Since blobs can be any arbitrary binary data, the input and responses for
the blob API takes an encoding parameter that can be either utf-8 or
base64. If your data cannot be losslessly sent as a UTF-8 string, you can
base64 encode it.



```js
github.repos.owner.repo.git.blobs.shaCode.get({
  "owner": "",
  "repo": "",
  "shaCode": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * shaCode **required** `string`: SHA-1 code.

#### Output
* output [blob](#blob)

### repos.owner.repo.git.commits.post
Create a Commit.


```js
github.repos.owner.repo.git.commits.post({
  "owner": "",
  "repo": "",
  "body": {
    "message": "",
    "parents": [],
    "tree": ""
  }
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [repoCommitBody](#repoCommitBody)

#### Output
* output [gitCommit](#gitCommit)

### repos.owner.repo.git.commits.shaCode.get
Get a Commit.


```js
github.repos.owner.repo.git.commits.shaCode.get({
  "owner": "",
  "repo": "",
  "shaCode": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * shaCode **required** `string`: SHA-1 code.

#### Output
* output [repoCommit](#repoCommit)

### repos.owner.repo.git.refs.get
Get all References


```js
github.repos.owner.repo.git.refs.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [refs](#refs)

### repos.owner.repo.git.refs.post
Create a Reference


```js
github.repos.owner.repo.git.refs.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [refsBody](#refsBody)

#### Output
* output [headBranch](#headBranch)

### repos.owner.repo.git.refs.ref.delete
Delete a Reference
Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a 
Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0



```js
github.repos.owner.repo.git.refs.ref.delete({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * ref **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.git.refs.ref.get
Get a Reference


```js
github.repos.owner.repo.git.refs.ref.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * ref **required** `string`

#### Output
* output [headBranch](#headBranch)

### repos.owner.repo.git.refs.ref.patch
Update a Reference


```js
github.repos.owner.repo.git.refs.ref.patch({
  "owner": "",
  "repo": "",
  "ref": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * ref **required** `string`
  * body **required** [gitRefPatch](#gitRefPatch)

#### Output
* output [headBranch](#headBranch)

### repos.owner.repo.git.tags.post
Create a Tag Object.
Note that creating a tag object does not create the reference that makes a
tag in Git. If you want to create an annotated tag in Git, you have to do
this call to create the tag object, and then create the refs/tags/[tag]
reference. If you want to create a lightweight tag, you only have to create
the tag reference - this call would be unnecessary.



```js
github.repos.owner.repo.git.tags.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [tag](#tag)

#### Output
* output [tags](#tags)

### repos.owner.repo.git.tags.shaCode.get
Get a Tag.


```js
github.repos.owner.repo.git.tags.shaCode.get({
  "owner": "",
  "repo": "",
  "shaCode": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * shaCode **required** `string`

#### Output
* output [tag](#tag)

### repos.owner.repo.git.trees.post
Create a Tree.
The tree creation API will take nested entries as well. If both a tree and
a nested path modifying that tree are specified, it will overwrite the
contents of that tree with the new path contents and write a new tree out.



```js
github.repos.owner.repo.git.trees.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [tree](#tree)

#### Output
* output [trees](#trees)

### repos.owner.repo.git.trees.shaCode.get
Get a Tree.


```js
github.repos.owner.repo.git.trees.shaCode.get({
  "owner": "",
  "repo": "",
  "shaCode": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * shaCode **required** `string`: Tree SHA.
  * recursive `integer`: Get a Tree Recursively. (0 or 1)

#### Output
* output [tree](#tree)

### repos.owner.repo.hooks.get
Get list of hooks.


```js
github.repos.owner.repo.hooks.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [hook](#hook)

### repos.owner.repo.hooks.post
Create a hook.


```js
github.repos.owner.repo.hooks.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [hookBody](#hookBody)

#### Output
* output [hook](#hook)

### repos.owner.repo.hooks.hookId.delete
Delete a hook.


```js
github.repos.owner.repo.hooks.hookId.delete({
  "owner": "",
  "repo": "",
  "hookId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * hookId **required** `integer`: Id of hook.

#### Output
*Output schema unknown*

### repos.owner.repo.hooks.hookId.get
Get single hook.


```js
github.repos.owner.repo.hooks.hookId.get({
  "owner": "",
  "repo": "",
  "hookId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * hookId **required** `integer`: Id of hook.

#### Output
* output [hook](#hook)

### repos.owner.repo.hooks.hookId.patch
Edit a hook.


```js
github.repos.owner.repo.hooks.hookId.patch({
  "owner": "",
  "repo": "",
  "hookId": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * hookId **required** `integer`: Id of hook.
  * body **required** [hookBody](#hookBody)

#### Output
* output [hook](#hook)

### repos.owner.repo.hooks.hookId.tests.post
Test a push hook.
This will trigger the hook with the latest push to the current repository
if the hook is subscribed to push events. If the hook is not subscribed
to push events, the server will respond with 204 but no test POST will
be generated.
Note: Previously /repos/:owner/:repo/hooks/:id/tes



```js
github.repos.owner.repo.hooks.hookId.tests.post({
  "owner": "",
  "repo": "",
  "hookId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * hookId **required** `integer`: Id of hook.

#### Output
*Output schema unknown*

### repos.owner.repo.issues.get
List issues for a repository.


```js
github.repos.owner.repo.issues.get({
  "owner": "",
  "repo": "",
  "filter": "",
  "state": "",
  "labels": "",
  "sort": "",
  "direction": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * filter **required** `string` (values: assigned, created, mentioned, subscribed, all): Issues assigned to you / created by you / mentioning you / you're
  * state **required** `string` (values: open, closed)
  * labels **required** `string`: String list of comma separated Label names. Example - bug,ui,@high.
  * sort **required** `string` (values: created, updated, comments)
  * direction **required** `string` (values: asc, desc)
  * since `string`: Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [issues](#issues)

### repos.owner.repo.issues.post
Create an issue.
Any user with pull access to a repository can create an issue.



```js
github.repos.owner.repo.issues.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [issue](#issue)

#### Output
* output [issue](#issue)

### repos.owner.repo.issues.comments.get
List comments in a repository.


```js
github.repos.owner.repo.issues.comments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * direction `string`: Ignored without 'sort' parameter.
  * sort `string` (values: created, updated)
  * since `string`: The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [issuesComments](#issuesComments)

### repos.owner.repo.issues.comments.commentId.delete
Delete a comment.


```js
github.repos.owner.repo.issues.comments.commentId.delete({
  "owner": "",
  "repo": "",
  "commentId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * commentId **required** `integer`: ID of comment.

#### Output
*Output schema unknown*

### repos.owner.repo.issues.comments.commentId.get
Get a single comment.


```js
github.repos.owner.repo.issues.comments.commentId.get({
  "owner": "",
  "repo": "",
  "commentId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * commentId **required** `integer`: ID of comment.

#### Output
* output [issuesComment](#issuesComment)

### repos.owner.repo.issues.comments.commentId.patch
Edit a comment.


```js
github.repos.owner.repo.issues.comments.commentId.patch({
  "owner": "",
  "repo": "",
  "commentId": 0,
  "body": {
    "body": ""
  }
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * commentId **required** `integer`: ID of comment.
  * body **required** [commentBody](#commentBody)

#### Output
* output [issuesComment](#issuesComment)

### repos.owner.repo.issues.events.get
List issue events for a repository.


```js
github.repos.owner.repo.issues.events.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [events](#events)

### repos.owner.repo.issues.events.eventId.get
Get a single event.


```js
github.repos.owner.repo.issues.events.eventId.get({
  "owner": "",
  "repo": "",
  "eventId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * eventId **required** `integer`: Id of the event.

#### Output
* output [event](#event)

### repos.owner.repo.issues.number.get
Get a single issue


```js
github.repos.owner.repo.issues.number.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.

#### Output
* output [issue](#issue)

### repos.owner.repo.issues.number.patch
Edit an issue.
Issue owners and users with push access can edit an issue.



```js
github.repos.owner.repo.issues.number.patch({
  "owner": "",
  "repo": "",
  "number": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.
  * body **required** [issue](#issue)

#### Output
* output [issue](#issue)

### repos.owner.repo.issues.number.comments.get
List comments on an issue.


```js
github.repos.owner.repo.issues.number.comments.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.
  * page `integer`

#### Output
* output [issuesComments](#issuesComments)

### repos.owner.repo.issues.number.comments.post
Create a comment.


```js
github.repos.owner.repo.issues.number.comments.post({
  "owner": "",
  "repo": "",
  "number": 0,
  "body": {
    "body": ""
  }
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.
  * body **required** [commentBody](#commentBody)

#### Output
* output [issuesComment](#issuesComment)

### repos.owner.repo.issues.number.events.get
List events for an issue.


```js
github.repos.owner.repo.issues.number.events.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.
  * page `integer`

#### Output
* output [events](#events)

### repos.owner.repo.issues.number.labels.delete
Remove all labels from an issue.


```js
github.repos.owner.repo.issues.number.labels.delete({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.

#### Output
*Output schema unknown*

### repos.owner.repo.issues.number.labels.get
List labels on an issue.


```js
github.repos.owner.repo.issues.number.labels.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.
  * page `integer`

#### Output
* output [labels](#labels)

### repos.owner.repo.issues.number.labels.post
Add labels to an issue.


```js
github.repos.owner.repo.issues.number.labels.post({
  "owner": "",
  "repo": "",
  "number": 0,
  "body": []
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.
  * body **required** [emailsPost](#emailsPost)

#### Output
* output [label](#label)

### repos.owner.repo.issues.number.labels.put
Replace all labels for an issue.
Sending an empty array ([]) will remove all Labels from the Issue.



```js
github.repos.owner.repo.issues.number.labels.put({
  "owner": "",
  "repo": "",
  "number": 0,
  "body": []
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.
  * body **required** [emailsPost](#emailsPost)

#### Output
* output [label](#label)

### repos.owner.repo.issues.number.labels.name.delete
Remove a label from an issue.


```js
github.repos.owner.repo.issues.number.labels.name.delete({
  "owner": "",
  "repo": "",
  "number": 0,
  "name": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of issue.
  * name **required** `string`: Name of the label.

#### Output
*Output schema unknown*

### repos.owner.repo.keys.get
Get list of keys.


```js
github.repos.owner.repo.keys.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [keys](#keys)

### repos.owner.repo.keys.post
Create a key.


```js
github.repos.owner.repo.keys.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [user-keys-post](#user-keys-post)

#### Output
* output [user-keys-keyId](#user-keys-keyId)

### repos.owner.repo.keys.keyId.delete
Delete a key.


```js
github.repos.owner.repo.keys.keyId.delete({
  "owner": "",
  "repo": "",
  "keyId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * keyId **required** `integer`: Id of key.

#### Output
*Output schema unknown*

### repos.owner.repo.keys.keyId.get
Get a key


```js
github.repos.owner.repo.keys.keyId.get({
  "owner": "",
  "repo": "",
  "keyId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * keyId **required** `integer`: Id of key.

#### Output
* output [user-keys-keyId](#user-keys-keyId)

### repos.owner.repo.labels.get
List all labels for this repository.


```js
github.repos.owner.repo.labels.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [labels](#labels)

### repos.owner.repo.labels.post
Create a label.


```js
github.repos.owner.repo.labels.post({
  "owner": "",
  "repo": "",
  "body": []
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [emailsPost](#emailsPost)

#### Output
* output [label](#label)

### repos.owner.repo.labels.name.delete
Delete a label.


```js
github.repos.owner.repo.labels.name.delete({
  "owner": "",
  "repo": "",
  "name": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * name **required** `string`: Name of the label.

#### Output
*Output schema unknown*

### repos.owner.repo.labels.name.get
Get a single label.


```js
github.repos.owner.repo.labels.name.get({
  "owner": "",
  "repo": "",
  "name": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * name **required** `string`: Name of the label.

#### Output
* output [label](#label)

### repos.owner.repo.labels.name.patch
Update a label.


```js
github.repos.owner.repo.labels.name.patch({
  "owner": "",
  "repo": "",
  "name": "",
  "body": []
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * name **required** `string`: Name of the label.
  * body **required** [emailsPost](#emailsPost)

#### Output
* output [label](#label)

### repos.owner.repo.languages.get
List languages.
List languages for the specified repository. The value on the right of a
language is the number of bytes of code written in that language.



```js
github.repos.owner.repo.languages.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [languages](#languages)

### repos.owner.repo.merges.post
Perform a merge.


```js
github.repos.owner.repo.merges.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [mergesBody](#mergesBody)

#### Output
* output [mergesSuccessful](#mergesSuccessful)

### repos.owner.repo.milestones.get
List milestones for a repository.


```js
github.repos.owner.repo.milestones.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * state `string` (values: open, closed): String to filter by state.
  * direction `string`: Ignored without 'sort' parameter.
  * sort `string` (values: due_date, completeness)
  * page `integer`

#### Output
* output [milestone](#milestone)

### repos.owner.repo.milestones.post
Create a milestone.


```js
github.repos.owner.repo.milestones.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [milestoneUpdate](#milestoneUpdate)

#### Output
* output [milestone](#milestone)

### repos.owner.repo.milestones.number.delete
Delete a milestone.


```js
github.repos.owner.repo.milestones.number.delete({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of milestone.

#### Output
*Output schema unknown*

### repos.owner.repo.milestones.number.get
Get a single milestone.


```js
github.repos.owner.repo.milestones.number.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of milestone.

#### Output
* output [milestone](#milestone)

### repos.owner.repo.milestones.number.patch
Update a milestone.


```js
github.repos.owner.repo.milestones.number.patch({
  "owner": "",
  "repo": "",
  "number": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of milestone.
  * body **required** [milestoneUpdate](#milestoneUpdate)

#### Output
* output [milestone](#milestone)

### repos.owner.repo.milestones.number.labels.get
Get labels for every issue in a milestone.


```js
github.repos.owner.repo.milestones.number.labels.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Number of milestone.
  * page `integer`

#### Output
* output [labels](#labels)

### repos.owner.repo.notifications.get
List your notifications in a repository
List all notifications for the current user.



```js
github.repos.owner.repo.notifications.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * all `boolean`: True to show notifications marked as read.
  * participating `boolean`: True to show only notifications in which the user is directly participating
  * since `string`: The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [notifications](#notifications)

### repos.owner.repo.notifications.put
Mark notifications as read in a repository.
Marking all notifications in a repository as "read" removes them from the
default view on GitHub.com.



```js
github.repos.owner.repo.notifications.put({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [notificationMarkRead](#notificationMarkRead)

#### Output
*Output schema unknown*

### repos.owner.repo.pulls.get
List pull requests.


```js
github.repos.owner.repo.pulls.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * state `string` (values: open, closed): String to filter by state.
  * head `string`: Filter pulls by head user and branch name in the format of 'user:ref-name'.
  * base `string`: Filter pulls by base branch name. Example - gh-pages.
  * page `integer`

#### Output
* output [pulls](#pulls)

### repos.owner.repo.pulls.post
Create a pull request.


```js
github.repos.owner.repo.pulls.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [pullsPost](#pullsPost)

#### Output
* output [pulls](#pulls)

### repos.owner.repo.pulls.comments.get
List comments in a repository.
By default, Review Comments are ordered by ascending ID.



```js
github.repos.owner.repo.pulls.comments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * direction `string`: Ignored without 'sort' parameter.
  * sort `string` (values: created, updated)
  * since `string`: The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [issuesComments](#issuesComments)

### repos.owner.repo.pulls.comments.commentId.delete
Delete a comment.


```js
github.repos.owner.repo.pulls.comments.commentId.delete({
  "owner": "",
  "repo": "",
  "commentId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * commentId **required** `integer`: Id of comment.

#### Output
*Output schema unknown*

### repos.owner.repo.pulls.comments.commentId.get
Get a single comment.


```js
github.repos.owner.repo.pulls.comments.commentId.get({
  "owner": "",
  "repo": "",
  "commentId": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * commentId **required** `integer`: Id of comment.

#### Output
* output [pullsComment](#pullsComment)

### repos.owner.repo.pulls.comments.commentId.patch
Edit a comment.


```js
github.repos.owner.repo.pulls.comments.commentId.patch({
  "owner": "",
  "repo": "",
  "commentId": 0,
  "body": {
    "body": ""
  }
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * commentId **required** `integer`: Id of comment.
  * body **required** [commentBody](#commentBody)

#### Output
* output [pullsComment](#pullsComment)

### repos.owner.repo.pulls.number.get
Get a single pull request.


```js
github.repos.owner.repo.pulls.number.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Id of pull.

#### Output
* output [pullRequest](#pullRequest)

### repos.owner.repo.pulls.number.patch
Update a pull request.


```js
github.repos.owner.repo.pulls.number.patch({
  "owner": "",
  "repo": "",
  "number": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Id of pull.
  * body **required** [pullUpdate](#pullUpdate)

#### Output
* output [repo](#repo)

### repos.owner.repo.pulls.number.comments.get
List comments on a pull request.


```js
github.repos.owner.repo.pulls.number.comments.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Id of pull.
  * page `integer`

#### Output
* output [pullsComment](#pullsComment)

### repos.owner.repo.pulls.number.comments.post
Create a comment.
  #TODO Alternative input ( http://developer.github.com/v3/pulls/comments/ )
  description: |
    Alternative Input.
    Instead of passing commit_id, path, and position you can reply to an
    existing Pull Request Comment like this:

        body
           Required string
        in_reply_to
           Required number - Comment id to reply to.



```js
github.repos.owner.repo.pulls.number.comments.post({
  "owner": "",
  "repo": "",
  "number": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Id of pull.
  * body **required** [pullsCommentPost](#pullsCommentPost)

#### Output
* output [pullsComment](#pullsComment)

### repos.owner.repo.pulls.number.commits.get
List commits on a pull request.


```js
github.repos.owner.repo.pulls.number.commits.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Id of pull.
  * page `integer`

#### Output
* output [commits](#commits)

### repos.owner.repo.pulls.number.files.get
List pull requests files.


```js
github.repos.owner.repo.pulls.number.files.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Id of pull.
  * page `integer`

#### Output
* output [pulls](#pulls)

### repos.owner.repo.pulls.number.merge.get
Get if a pull request has been merged.


```js
github.repos.owner.repo.pulls.number.merge.get({
  "owner": "",
  "repo": "",
  "number": 0
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Id of pull.

#### Output
*Output schema unknown*

### repos.owner.repo.pulls.number.merge.put
Merge a pull request (Merge Button's)


```js
github.repos.owner.repo.pulls.number.merge.put({
  "owner": "",
  "repo": "",
  "number": 0,
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * number **required** `integer`: Id of pull.
  * body **required** [mergePullBody](#mergePullBody)

#### Output
* output [merge](#merge)

### repos.owner.repo.readme.get
Get the README.
This method returns the preferred README for a repository.



```js
github.repos.owner.repo.readme.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * ref `string`: The String name of the Commit/Branch/Tag. Defaults to master.

#### Output
* output [contents-path](#contents-path)

### repos.owner.repo.releases.get
Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only


```js
github.repos.owner.repo.releases.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [releases](#releases)

### repos.owner.repo.releases.post
Create a release
Users with push access to the repository can create a release.



```js
github.repos.owner.repo.releases.post({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [release-create](#release-create)

#### Output
* output [release](#release)

### repos.owner.repo.releases.assets.id.delete
Delete a release asset


```js
github.repos.owner.repo.releases.assets.id.delete({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * id **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.releases.assets.id.get
Get a single release asset


```js
github.repos.owner.repo.releases.assets.id.get({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * id **required** `string`

#### Output
* output [asset](#asset)

### repos.owner.repo.releases.assets.id.patch
Edit a release asset
Users with push access to the repository can edit a release asset.



```js
github.repos.owner.repo.releases.assets.id.patch({
  "owner": "",
  "repo": "",
  "id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * id **required** `string`
  * body **required** [assetPatch](#assetPatch)

#### Output
* output [asset](#asset)

### repos.owner.repo.releases.id.delete
Users with push access to the repository can delete a release.


```js
github.repos.owner.repo.releases.id.delete({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * id **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.releases.id.get
Get a single release


```js
github.repos.owner.repo.releases.id.get({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * id **required** `string`

#### Output
* output [release](#release)

### repos.owner.repo.releases.id.patch
Users with push access to the repository can edit a release


```js
github.repos.owner.repo.releases.id.patch({
  "owner": "",
  "repo": "",
  "id": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * id **required** `string`
  * body **required** [release-create](#release-create)

#### Output
* output [release](#release)

### repos.owner.repo.releases.id.assets.get
List assets for a release


```js
github.repos.owner.repo.releases.id.assets.get({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * id **required** `string`
  * page `integer`

#### Output
* output [assets](#assets)

### repos.owner.repo.stargazers.get
List Stargazers.


```js
github.repos.owner.repo.stargazers.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [users](#users)

### repos.owner.repo.stats.code_frequency.get
Get the number of additions and deletions per week.
Returns a weekly aggregate of the number of additions and deletions pushed
to a repository.



```js
github.repos.owner.repo.stats.code_frequency.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.

#### Output
* output [codeFrequencyStats](#codeFrequencyStats)

### repos.owner.repo.stats.commit_activity.get
Get the last year of commit activity data.
Returns the last year of commit activity grouped by week. The days array
is a group of commits per day, starting on Sunday.



```js
github.repos.owner.repo.stats.commit_activity.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.

#### Output
* output [commitActivityStats](#commitActivityStats)

### repos.owner.repo.stats.contributors.get
Get contributors list with additions, deletions, and commit counts.


```js
github.repos.owner.repo.stats.contributors.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [contributorsStats](#contributorsStats)

### repos.owner.repo.stats.participation.get
Get the weekly commit count for the repo owner and everyone else.


```js
github.repos.owner.repo.stats.participation.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.

#### Output
* output [participationStats](#participationStats)

### repos.owner.repo.stats.punch_card.get
Get the number of commits per hour in each day.
Each array contains the day number, hour number, and number of commits
0-6 Sunday - Saturday
0-23 Hour of day
Number of commits

For example, [2, 14, 25] indicates that there were 25 total commits, during
the 2.00pm hour on Tuesdays. All times are based on the time zone of
individual commits.



```js
github.repos.owner.repo.stats.punch_card.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.

#### Output
* output [codeFrequencyStats](#codeFrequencyStats)

### repos.owner.repo.statuses.ref.get
List Statuses for a specific Ref.


```js
github.repos.owner.repo.statuses.ref.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * ref **required** `string`: Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.

#### Output
* output [ref](#ref)

### repos.owner.repo.statuses.ref.post
Create a Status.


```js
github.repos.owner.repo.statuses.ref.post({
  "owner": "",
  "repo": "",
  "ref": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * ref **required** `string`: Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
  * body **required** [headBranch](#headBranch)

#### Output
* output [ref](#ref)

### repos.owner.repo.subscribers.get
List watchers.


```js
github.repos.owner.repo.subscribers.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [users](#users)

### repos.owner.repo.subscription.delete
Delete a Repository Subscription.


```js
github.repos.owner.repo.subscription.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.

#### Output
*Output schema unknown*

### repos.owner.repo.subscription.get
Get a Repository Subscription.


```js
github.repos.owner.repo.subscription.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.

#### Output
* output [subscribition](#subscribition)

### repos.owner.repo.subscription.put
Set a Repository Subscription


```js
github.repos.owner.repo.subscription.put({
  "owner": "",
  "repo": "",
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * body **required** [subscribitionBody](#subscribitionBody)

#### Output
* output [subscribition](#subscribition)

### repos.owner.repo.tags.get
Get list of tags.


```js
github.repos.owner.repo.tags.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [tags](#tags)

### repos.owner.repo.teams.get
Get list of teams


```js
github.repos.owner.repo.teams.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [teams](#teams)

### repos.owner.repo.watchers.get
List Stargazers. New implementation.


```js
github.repos.owner.repo.watchers.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * page `integer`

#### Output
* output [users](#users)

### repos.owner.repo.archive_format.path.get
Get archive link.
This method will return a 302 to a URL to download a tarball or zipball
archive for a repository. Please make sure your HTTP framework is
configured to follow redirects or you will need to use the Location header
to make a second GET request.
Note: For private repositories, these links are temporary and expire quickly.



```js
github.repos.owner.repo.archive_format.path.get({
  "owner": "",
  "repo": "",
  "archive_format": "",
  "path": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of repository owner.
  * repo **required** `string`: Name of repository.
  * archive_format **required** `string` (values: tarball, zipball)
  * path **required** `string`: Valid Git reference, defaults to 'master'.

#### Output
*Output schema unknown*

### repositories.get
List all public repositories.
This provides a dump of every public repository, in the order that they
were created.
Note: Pagination is powered exclusively by the since parameter. is the
Link header to get the URL for the next page of repositories.



```js
github.repositories.get({}, context)
```

#### Parameters
* input `object`
  * since `string`: The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [repositories](#repositories)

### search.code.get
Search code.


```js
github.search.code.get({
  "q": ""
}, context)
```

#### Parameters
* input `object`
  * order `string` (values: desc, asc): The sort field. if sort param is provided. Can be either asc or desc.
  * q **required** `string`: The search terms. This can be any combination of the supported code
  * sort `string` (values: indexed): Can only be 'indexed', which indicates how recently a file has been indexed

#### Output
* output [search-code](#search-code)

### search.issues.get
Find issues by state and keyword. (This method returns up to 100 results per page.)


```js
github.search.issues.get({
  "q": ""
}, context)
```

#### Parameters
* input `object`
  * order `string` (values: desc, asc): The sort field. if sort param is provided. Can be either asc or desc.
  * q **required** `string`: The q search term can also contain any combination of the supported issue search qualifiers:
  * sort `string` (values: updated, created, comments): The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
  * page `integer`

#### Output
* output [search-issues](#search-issues)

### search.repositories.get
Search repositories.


```js
github.search.repositories.get({
  "q": ""
}, context)
```

#### Parameters
* input `object`
  * order `string` (values: desc, asc): The sort field. if sort param is provided. Can be either asc or desc.
  * q **required** `string`: The search terms. This can be any combination of the supported repository
  * sort `string` (values: stars, forks, updated): If not provided, results are sorted by best match.
  * page `integer`

#### Output
* output [search-repositories](#search-repositories)

### search.users.get
Search users.


```js
github.search.users.get({
  "q": ""
}, context)
```

#### Parameters
* input `object`
  * order `string` (values: desc, asc): The sort field. if sort param is provided. Can be either asc or desc.
  * q **required** `string`: The search terms. This can be any combination of the supported user
  * sort `string` (values: followers, repositories, joined): If not provided, results are sorted by best match.
  * page `integer`

#### Output
* output [search-users](#search-users)

### teams.teamId.delete
Delete team.
In order to delete a team, the authenticated user must be an owner of the
org that the team is associated with.



```js
github.teams.teamId.delete({
  "teamId": 0
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.

#### Output
*Output schema unknown*

### teams.teamId.get
Get team.


```js
github.teams.teamId.get({
  "teamId": 0
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.

#### Output
* output [team](#team)

### teams.teamId.patch
Edit team.
In order to edit a team, the authenticated user must be an owner of the org
that the team is associated with.



```js
github.teams.teamId.patch({
  "teamId": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * body **required** [editTeam](#editTeam)

#### Output
* output [team](#team)

### teams.teamId.members.get
List team members.
In order to list members in a team, the authenticated user must be a member
of the team.



```js
github.teams.teamId.members.get({
  "teamId": 0
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * page `integer`

#### Output
* output [users](#users)

### teams.teamId.members.username.delete
The "Remove team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.

Remove team member.
In order to remove a user from a team, the authenticated user must have 'admin'
permissions to the team or be an owner of the org that the team is associated
with.
NOTE This does not delete the user, it just remove them from the team.



```js
github.teams.teamId.members.username.delete({
  "teamId": 0,
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * username **required** `string`: Name of a member.

#### Output
*Output schema unknown*

### teams.teamId.members.username.get
The "Get team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.

Get team member.
In order to get if a user is a member of a team, the authenticated user mus
be a member of the team.



```js
github.teams.teamId.members.username.get({
  "teamId": 0,
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * username **required** `string`: Name of a member.

#### Output
*Output schema unknown*

### teams.teamId.members.username.put
The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.

Add team member.
In order to add a user to a team, the authenticated user must have 'admin'
permissions to the team or be an owner of the org that the team is associated
with.



```js
github.teams.teamId.members.username.put({
  "teamId": 0,
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * username **required** `string`: Name of a member.

#### Output
*Output schema unknown*

### teams.teamId.memberships.username.delete
Remove team membership.
In order to remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.



```js
github.teams.teamId.memberships.username.delete({
  "teamId": 0,
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * username **required** `string`: Name of a member.

#### Output
*Output schema unknown*

### teams.teamId.memberships.username.get
Get team membership.
In order to get a user's membership with a team, the authenticated user must be a member of the team or an owner of the team's organization.



```js
github.teams.teamId.memberships.username.get({
  "teamId": 0,
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * username **required** `string`: Name of a member.

#### Output
* output [teamMembership](#teamMembership)

### teams.teamId.memberships.username.put
Add team membership.
In order to add a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with.

If the user is already a part of the team's organization (meaning they're on at least one other team in the organization), this endpoint will add the user to the team.

If the user is completely unaffiliated with the team's organization (meaning they're on none of the organization's teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the 'pending' state until the user accepts the invitation, at which point the membership will transition to the 'active' state and the user will be added as a member of the team.



```js
github.teams.teamId.memberships.username.put({
  "teamId": 0,
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * username **required** `string`: Name of a member.

#### Output
* output [teamMembership](#teamMembership)

### teams.teamId.repos.get
List team repos


```js
github.teams.teamId.repos.get({
  "teamId": 0
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * page `integer`

#### Output
* output [teamRepos](#teamRepos)

### teams.teamId.repos.org.repo.put
In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.


```js
github.teams.teamId.repos.org.repo.put({
  "teamId": 0,
  "org": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * org **required** `string`: Name of a organization.
  * repo **required** `string`: Name of a repository.

#### Output
*Output schema unknown*

### teams.teamId.repos.owner.repo.delete
In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.


```js
github.teams.teamId.repos.owner.repo.delete({
  "teamId": 0,
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * owner **required** `string`: Name of a repository owner.
  * repo **required** `string`: Name of a repository.

#### Output
*Output schema unknown*

### teams.teamId.repos.owner.repo.get
Check if a team manages a repository


```js
github.teams.teamId.repos.owner.repo.get({
  "teamId": 0,
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * teamId **required** `integer`: Id of team.
  * owner **required** `string`: Name of a repository owner.
  * repo **required** `string`: Name of a repository.

#### Output
*Output schema unknown*

### user.get
Get the authenticated user.


```js
github.user.get(null, context)
```

#### Parameters
*This action has no parameters*

#### Output
* output [user](#user)

### user.patch
Update the authenticated user.


```js
github.user.patch({
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * body **required** [user-update](#user-update)

#### Output
* output [user](#user)

### user.emails.delete
Delete email address(es).
You can include a single email address or an array of addresses.



```js
github.user.emails.delete({
  "body": []
}, context)
```

#### Parameters
* input `object`
  * body **required** [user-emails](#user-emails)

#### Output
*Output schema unknown*

### user.emails.get
List email addresses for a user.
In the final version of the API, this method will return an array of hashes
with extended information for each email address indicating if the address
has been verified and if it's primary email address for GitHub.
Until API v3 is finalized, use the application/vnd.github.v3 media type to
get other response format.



```js
github.user.emails.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [user-emails](#user-emails)

### user.emails.post
Add email address(es).
You can post a single email address or an array of addresses.



```js
github.user.emails.post({
  "body": []
}, context)
```

#### Parameters
* input `object`
  * body **required** [emailsPost](#emailsPost)

#### Output
*Output schema unknown*

### user.followers.get
List the authenticated user's followers


```js
github.user.followers.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [users](#users)

### user.following.get
List who the authenticated user is following.


```js
github.user.following.get(null, context)
```

#### Parameters
*This action has no parameters*

#### Output
* output [users](#users)

### user.following.username.delete
Unfollow a user.
Unfollowing a user requires the user to be logged in and authenticated with
basic auth or OAuth with the user:follow scope.



```js
github.user.following.username.delete({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.

#### Output
*Output schema unknown*

### user.following.username.get
Check if you are following a user.


```js
github.user.following.username.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.

#### Output
*Output schema unknown*

### user.following.username.put
Follow a user.
Following a user requires the user to be logged in and authenticated with
basic auth or OAuth with the user:follow scope.



```js
github.user.following.username.put({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.

#### Output
*Output schema unknown*

### user.issues.get
List issues.
List all issues across owned and member repositories for the authenticated
user.



```js
github.user.issues.get({
  "filter": "",
  "state": "",
  "labels": "",
  "sort": "",
  "direction": ""
}, context)
```

#### Parameters
* input `object`
  * filter **required** `string` (values: assigned, created, mentioned, subscribed, all): Issues assigned to you / created by you / mentioning you / you're
  * state **required** `string` (values: open, closed)
  * labels **required** `string`: String list of comma separated Label names. Example - bug,ui,@high.
  * sort **required** `string` (values: created, updated, comments)
  * direction **required** `string` (values: asc, desc)
  * since `string`: Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [issues](#issues)

### user.keys.get
List your public keys.
Lists the current user's keys. Management of public keys via the API requires
that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.



```js
github.user.keys.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [gitignore](#gitignore)

### user.keys.post
Create a public key.


```js
github.user.keys.post({
  "body": {}
}, context)
```

#### Parameters
* input `object`
  * body **required** [user-keys-post](#user-keys-post)

#### Output
* output [user-keys-keyId](#user-keys-keyId)

### user.keys.keyId.delete
Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.


```js
github.user.keys.keyId.delete({
  "keyId": 0
}, context)
```

#### Parameters
* input `object`
  * keyId **required** `integer`: ID of key.

#### Output
*Output schema unknown*

### user.keys.keyId.get
Get a single public key.


```js
github.user.keys.keyId.get({
  "keyId": 0
}, context)
```

#### Parameters
* input `object`
  * keyId **required** `integer`: ID of key.

#### Output
* output [user-keys-keyId](#user-keys-keyId)

### user.orgs.get
List public and private organizations for the authenticated user.


```js
github.user.orgs.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [gitignore](#gitignore)

### user.repos.get
List repositories for the authenticated user. Note that this does not include
repositories owned by organizations which the user can access. You can lis
user organizations and list organization repositories separately.



```js
github.user.repos.get({}, context)
```

#### Parameters
* input `object`
  * type `string` (values: all, public, private, forks, sources, member)
  * page `integer`

#### Output
* output [repos](#repos)

### user.repos.post
Create a new repository for the authenticated user. OAuth users must supply
repo scope.



```js
github.user.repos.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* input `object`
  * body **required** [postRepo](#postRepo)

#### Output
* output [repos](#repos)

### user.starred.get
List repositories being starred by the authenticated user.


```js
github.user.starred.get({}, context)
```

#### Parameters
* input `object`
  * direction `string`: Ignored without 'sort' parameter.
  * sort `string` (values: created, updated)

#### Output
* output [gitignore](#gitignore)

### user.starred.owner.repo.delete
Unstar a repository


```js
github.user.starred.owner.repo.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of a repository owner.
  * repo **required** `string`: Name of a repository.

#### Output
*Output schema unknown*

### user.starred.owner.repo.get
Check if you are starring a repository.


```js
github.user.starred.owner.repo.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of a repository owner.
  * repo **required** `string`: Name of a repository.

#### Output
*Output schema unknown*

### user.starred.owner.repo.put
Star a repository.


```js
github.user.starred.owner.repo.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of a repository owner.
  * repo **required** `string`: Name of a repository.

#### Output
*Output schema unknown*

### user.subscriptions.get
List repositories being watched by the authenticated user.


```js
github.user.subscriptions.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [user-userId-subscribitions](#user-userId-subscribitions)

### user.subscriptions.owner.repo.delete
Stop watching a repository


```js
github.user.subscriptions.owner.repo.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of the owner.
  * repo **required** `string`: Name of repository.

#### Output
*Output schema unknown*

### user.subscriptions.owner.repo.get
Check if you are watching a repository.


```js
github.user.subscriptions.owner.repo.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of the owner.
  * repo **required** `string`: Name of repository.

#### Output
*Output schema unknown*

### user.subscriptions.owner.repo.put
Watch a repository.


```js
github.user.subscriptions.owner.repo.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* input `object`
  * owner **required** `string`: Name of the owner.
  * repo **required** `string`: Name of repository.

#### Output
*Output schema unknown*

### user.teams.get
List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.


```js
github.user.teams.get({}, context)
```

#### Parameters
* input `object`
  * page `integer`

#### Output
* output [teams-list](#teams-list)

### users.get
Get all users.
This provides a dump of every user, in the order that they signed up for GitHub.
Note: Pagination is powered exclusively by the since parameter. Use the Link
header to get the URL for the next page of users.



```js
github.users.get({}, context)
```

#### Parameters
* input `object`
  * since `integer`: The integer ID of the last User that you've seen.
  * page `integer`

#### Output
* output [users](#users)

### users.username.get
Get a single user.


```js
github.users.username.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.

#### Output
* output [users](#users)

### users.username.events.get
If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.


```js
github.users.username.events.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * page `integer`

#### Output
*Output schema unknown*

### users.username.events.orgs.org.get
This is the user's organization dashboard. You must be authenticated as the user to view this.


```js
github.users.username.events.orgs.org.get({
  "username": "",
  "org": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * org **required** `string`

#### Output
*Output schema unknown*

### users.username.followers.get
List a user's followers


```js
github.users.username.followers.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * page `integer`

#### Output
* output [users](#users)

### users.username.following.targetUser.get
Check if one user follows another.


```js
github.users.username.following.targetUser.get({
  "username": "",
  "targetUser": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * targetUser **required** `string`: Name of user.

#### Output
*Output schema unknown*

### users.username.gists.get
List a users gists.


```js
github.users.username.gists.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * since `string`: The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * page `integer`

#### Output
* output [gists](#gists)

### users.username.keys.get
List public keys for a user.
Lists the verified public keys for a user. This is accessible by anyone.



```js
github.users.username.keys.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * page `integer`

#### Output
* output [gitignore](#gitignore)

### users.username.orgs.get
List all public organizations for a user.


```js
github.users.username.orgs.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * page `integer`

#### Output
* output [gitignore](#gitignore)

### users.username.received_events.get
These are events that you'll only see public events.


```js
github.users.username.received_events.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * page `integer`

#### Output
*Output schema unknown*

### users.username.received_events.public.get
List public events that a user has received


```js
github.users.username.received_events.public.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.

#### Output
*Output schema unknown*

### users.username.repos.get
List public repositories for the specified user.


```js
github.users.username.repos.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * type `string` (values: all, public, private, forks, sources, member)
  * page `integer`

#### Output
* output [repos](#repos)

### users.username.starred.get
List repositories being starred by a user.


```js
github.users.username.starred.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.

#### Output
*Output schema unknown*

### users.username.subscriptions.get
List repositories being watched by a user.


```js
github.users.username.subscriptions.get({
  "username": ""
}, context)
```

#### Parameters
* input `object`
  * username **required** `string`: Name of user.
  * page `integer`

#### Output
*Output schema unknown*



## Definitions

### asset
* asset `object`
  * content_type `string`
  * created_at `string`
  * download_count `number`
  * id `number`
  * label `string`
  * name `string`
  * size `number`
  * state `string`
  * updated_at `string`
  * uploader `object`
    * avatar_url `string`
    * events_url `string`
    * followers_url `string`
    * following_url `string`
    * gists_url `string`
    * gravatar_id `string`
    * html_url `string`
    * id `number`
    * login `string`
    * organizations_url `string`
    * received_events_url `string`
    * repos_url `string`
    * site_admin `boolean`
    * starred_url `string`
    * subscriptions_url `string`
    * type `string`
    * url `string`
  * url `string`

### assetPatch
* assetPatch `object`
  * label `string`
  * name **required** `string`

### assets
* assets `array`
  * items `object`
    * content_type `string`
    * created_at `string`
    * download_count `number`
    * id `number`
    * label `string`
    * name `string`
    * size `number`
    * state `string`
    * updated_at `string`
    * uploader `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `number`
      * login `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`
    * url `string`

### assignees
* assignees `array`
  * items `object`
    * avatar_url `integer`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### blob
* blob `object`
  * content `string`
  * encoding `string` (values: utf-8, base64)
  * sha `string`
  * size `integer`

### blobs
* blobs `object`
  * sha `string`

### branch
* branch `object`
  * _links `object`
    * html `string`
    * self `string`
  * commit `object`
    * author `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * commit `object`
      * author `object`
        * date `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * email `string`
        * name `string`
      * committer `object`
        * date `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * email `string`
        * name `string`
      * message `string`
      * tree `object`
        * sha `string`
        * url `string`
      * url `string`
    * committer `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * parents `array`
      * items `object`
        * sha `string`
        * url `string`
    * sha `string`
    * url `string`
  * name `string`

### branches
* branches `array`
  * items `object`
    * commit `object`
      * sha `string`
      * url `string`
    * name `string`

### codeFrequencyStats
* codeFrequencyStats `array`
  * items `integer`

### collaborators
* collaborators `array`
  * items `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### comment
* comment `object`
  * body `string`

### commentBody
* commentBody `object`
  * body **required** `string`

### comments
* comments `array`
  * items `object`
    * body `string`
    * created_at `string`: ISO 8601.
    * id `integer`
    * url `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`

### commit
* commit `object`
  * author `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`
  * commit `object`
    * author `object`
      * date `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      * email `string`
      * name `string`
    * committer `object`
      * date `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      * email `string`
      * name `string`
    * message `string`
    * tree `object`
      * sha `string`
      * url `string`
    * url `string`
  * committer `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`
  * files `array`
    * items `object`
      * additions `integer`
      * blob_url `string`
      * changes `integer`
      * deletions `integer`
      * filename `string`
      * patch `string`
      * raw_url `string`
      * status `string`
  * parents `array`
    * items `object`
      * sha `string`
      * url `string`
  * sha `string`
  * stats `object`
    * additions `integer`
    * deletions `integer`
    * total `integer`
  * url `string`

### commitActivityStats
* commitActivityStats `array`
  * items `object`
    * days `array`
      * items `integer`
    * total `integer`
    * week `integer`

### commitBody
* commitBody `object`
  * body **required** `string`
  * line `string`: Deprecated - Use position parameter instead.
  * number `string`: Line number in the file to comment on. Defaults to null.
  * path `string`: Relative path of the file to comment on.
  * position `integer`: Line index in the diff to comment on.
  * sha **required** `string`: SHA of the commit to comment on.

### commitComments
* commitComments `object`
  * body `string`
  * commit_id `string`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * html_url `string`
  * id `integer`
  * line `integer`
  * path `string`
  * position `integer`
  * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * url `string`
  * user `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### commits
* commits `array`
  * items `object`
    * author `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * commit `object`
      * author `object`
        * date `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * email `string`
        * name `string`
      * committer `object`
        * date `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * email `string`
        * name `string`
      * message `string`
      * tree `object`
        * sha `string`
        * url `string`
      * url `string`
    * committer `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * parents `array`
      * items `object`
        * sha `string`
        * url `string`
    * sha `string`
    * url `string`

### compare-commits
* compare-commits `object`
  * ahead_by `integer`
  * base_commit `object`
    * author `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`
    * commit `object`
      * author `object`
        * date `string`
        * email `string`
        * name `string`
      * committer `object`
        * date `string`
        * email `string`
        * name `string`
      * message `string`
      * tree `object`
        * sha `string`
        * url `string`
      * url `string`
    * committer `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`
    * parents `array`
      * items `object`
        * sha `string`
        * url `string`
    * sha `string`
    * url `string`
  * behind_by `integer`
  * commits `array`
    * items `object`
      * author `object`
        * avatar_url `string`
        * events_url `string`
        * followers_url `string`
        * following_url `string`
        * gists_url `string`
        * gravatar_id `string`
        * html_url `string`
        * id `integer`
        * login `string`
        * organizations_url `string`
        * received_events_url `string`
        * repos_url `string`
        * site_admin `boolean`
        * starred_url `string`
        * subscriptions_url `string`
        * type `string`
        * url `string`
      * commit `object`
        * author `object`
          * date `string`
          * email `string`
          * name `string`
        * committer `object`
          * date `string`
          * email `string`
          * name `string`
        * message `string`
        * tree `object`
          * sha `string`
          * url `string`
        * url `string`
      * committer `object`
        * avatar_url `string`
        * events_url `string`
        * followers_url `string`
        * following_url `string`
        * gists_url `string`
        * gravatar_id `string`
        * html_url `string`
        * id `integer`
        * login `string`
        * organizations_url `string`
        * received_events_url `string`
        * repos_url `string`
        * site_admin `boolean`
        * starred_url `string`
        * subscriptions_url `string`
        * type `string`
        * url `string`
      * parents `array`
        * items `object`
          * sha `string`
          * url `string`
      * sha `string`
      * url `string`
  * diff_url `string`
  * files `array`
    * items `object`
      * additions `integer`
      * blob_url `string`
      * changes `integer`
      * contents_url `string`
      * deletions `integer`
      * filename `string`
      * patch `string`
      * raw_url `string`
      * sha `string`
      * status `string`
  * html_url `string`
  * patch_url `string`
  * permalink_url `string`
  * status `string`
  * total_commits `integer`
  * url `string`

### contents-path
* contents-path `object`
  * _links `object`
    * git `string`
    * html `string`
    * self `string`
  * content `string`
  * encoding `string`
  * git_url `string`
  * html_url `string`
  * name `string`
  * path `string`
  * sha `string`
  * size `integer`
  * type `string`
  * url `string`

### contributors
* contributors `array`
  * items `object`
    * avatar_url `string`
    * contributions `integer`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### contributorsStats
* contributorsStats `array`
  * items `object`
    * author `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * total `integer`: The Total number of commits authored by the contributor.
    * weeks `array`
      * items `object`
        * a `integer`: Number of additions.
        * c `integer`: Number of commits.
        * d `integer`: Number of deletions.
        * w `string`: Start of the week.

### createDownload
* createDownload `object`
  * accesskeyid `string`
  * acl `string`
  * bucket `string`
  * content_type `string`
  * description `string`
  * download_count `integer`
  * expirationdate `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * html_url `string`
  * id `integer`
  * mime_type `string`
  * name `string`
  * path `string`
  * policy `string`
  * prefix `string`
  * redirect `boolean`
  * s3_url `string`
  * signature `string`
  * size `integer`
  * url `string`

### createFile
* createFile `object`
  * commit `object`
    * author `object`
      * date `string`
      * email `string`
      * name `string`
    * committer `object`
      * date `string`
      * email `string`
      * name `string`
    * html_url `string`
    * message `string`
    * parents `array`
      * items `object`
        * html_url `string`
        * sha `string`
        * url `string`
    * sha `string`
    * tree `object`
      * sha `string`
      * url `string`
    * url `string`
  * content `object`
    * _links `object`
      * git `string`
      * html `string`
      * self `string`
    * git_url `string`
    * html_url `string`
    * name `string`
    * path `string`
    * sha `string`
    * size `integer`
    * type `string`
    * url `string`

### createFileBody
* createFileBody `object`
  * committer `object`
    * email `string`
    * name `string`
  * content `string`
  * message `string`

### deleteFile
* deleteFile `object`
  * commit `object`
    * author `object`
      * date `string`
      * email `string`
      * name `string`
    * committer `object`
      * date `string`
      * email `string`
      * name `string`
    * html_url `string`
    * message `string`
    * parents `object`
      * html_url `string`
      * sha `string`
      * url `string`
    * sha `string`
    * tree `object`
      * sha `string`
      * url `string`
    * url `string`
  * content `string`

### deleteFileBody
* deleteFileBody `object`
  * committer `object`
    * email `string`
    * name `string`
  * message `string`
  * sha `string`

### deployment
* deployment `object`
  * description `string`
  * payload `object`
    * deploy_user `string`
    * environment `string`
    * room_id `number`
  * ref `string`

### deployment-resp
* deployment-resp `object`
  * created_at `string`
  * creator `object`
    * avatar_url `string`
    * events_url `string`
    * followers_url `string`
    * following_url `string`
    * gists_url `string`
    * gravatar_id `string`
    * html_url `string`
    * id `integer`
    * login `string`
    * organizations_url `string`
    * received_events_url `string`
    * repos_url `string`
    * site_admin `boolean`
    * starred_url `string`
    * subscriptions_url `string`
    * type `string`
    * url `string`
  * description `string`
  * id `integer`
  * payload `string`
  * sha `string`
  * statuses_url `string`
  * updated_at `string`
  * url `string`

### deployment-statuses
* deployment-statuses `array`
  * items `object`
    * created_at `string`
    * creator `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`
    * description `string`
    * id `integer`
    * payload `string`
    * state `string`
    * target_url `string`
    * updated_at `string`
    * url `string`

### deployment-statuses-create
* deployment-statuses-create `object`
  * description `string`
  * state `string`
  * target_url `string`

### downloadBody
* downloadBody `object`
  * content_type `string`
  * description `string`
  * name **required** `string`
  * size **required** `integer`: Size of file in bytes.

### downloads
* downloads `object`
  * content_type `string`
  * description `string`
  * download_count `integer`
  * html_url `string`
  * id `integer`
  * name `string`
  * size `integer`
  * url `string`

### editTeam
* editTeam `object`
  * name **required** `string`
  * permission `string` (values: pull, push, admin)

### emailsPost
* emailsPost `array`
  * items `string`

### emojis
* emojis `object`
  * 100 `string`
  * 1234 `string`
  * +1 `string`
  * -1 `string`
  * 8ball `string`
  * a `string`
  * ab `string`

### event
* event `object`
  * actor `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`
  * commit_id `string`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * event `string`
  * issue `object`
    * assignee `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * body `string`
    * closed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * comments `integer`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * html_url `string`
    * labels `array`
      * items `object`
        * color `string`
        * name `string`
        * url `string`
    * milestone `object`
      * closed_issues `integer`
      * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      * creator `object`
        * avatar_url `string`
        * gravatar_id `string`
        * id `integer`
        * login `string`
        * url `string`
      * description `string`
      * due_on `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      * number `integer`
      * open_issues `integer`
      * state `string` (values: open, closed)
      * title `string`
      * url `string`
    * number `integer`
    * pull_request `object`
      * diff_url `string`
      * html_url `string`
      * patch_url `string`
    * state `string` (values: open, closed)
    * title `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
  * url `string`

### events
* events `object`
  * actor `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`
  * created_at `object`
  * id `integer`
  * org `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`
  * payload `object`
  * public `boolean`
  * repo `object`
    * id `integer`
    * name `string`
    * url `string`
  * type `string`

### feeds
* feeds `object`
  * _links `object`
    * current_user `object`
      * href `string`
      * type `string`
    * current_user_actor `object`
      * href `string`
      * type `string`
    * current_user_organization `object`
      * href `string`
      * type `string`
    * current_user_public `object`
      * href `string`
      * type `string`
    * timeline `object`
      * href `string`
      * type `string`
    * user `object`
      * href `string`
      * type `string`
  * current_user_actor_url `string`
  * current_user_organization_url `string`
  * current_user_public `string`
  * current_user_url `string`
  * timeline_url `string`
  * user_url `string`

### fork
* fork `object`
  * clone_url `string`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * description `string`
  * fork `boolean`
  * forks `integer`
  * forks_count `integer`
  * full_name `string`
  * git_url `string`
  * homepage `string`
  * html_url `string`
  * id `integer`
  * language `string`
  * master_branch `string`
  * mirror_url `string`
  * name `string`
  * open_issues `integer`
  * open_issues_count `integer`
  * owner `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`
  * private `boolean`
  * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * size `integer`
  * ssh_url `string`
  * svn_url `string`
  * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * url `string`
  * watchers `integer`
  * watchers_count `integer`

### forkBody
* forkBody `object`
  * organization `string`

### forks
* forks `array`
  * items `object`
    * clone_url `string`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * description `string`
    * fork `boolean`
    * forks `integer`
    * forks_count `integer`
    * full_name `string`
    * git_url `string`
    * homepage `string`
    * html_url `string`
    * id `integer`
    * language `string`
    * master_branch `string`
    * mirror_url `string`
    * name `string`
    * open_issues `integer`
    * open_issues_count `integer`
    * owner `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * private `boolean`
    * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * size `integer`
    * ssh_url `string`
    * svn_url `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * watchers `integer`
    * watchers_count `integer`

### gist
* gist `object`
  * comments `integer`
  * comments_url `string`
  * created_at `string`: Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  * description `string`
  * files `object`
    * ring.erl `object`
      * filename `string`
      * raw_url `string`
      * size `integer`
  * forks `array`
    * items `object`
      * created_at `string`: Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
      * url `string`
      * user `object`
        * avatar_url `string`
        * gravatar_id `string`
        * id `integer`
        * login `string`
        * url `string`
  * git_pull_url `string`
  * git_push_url `string`
  * history `array`
    * items `object`
      * change_status `object`
        * additions `integer`
        * deletions `integer`
        * total `integer`
      * committed_at `string`: Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
      * url `string`
      * user `object`
        * avatar_url `string`
        * gravatar_id `string`
        * id `integer`
        * login `string`
        * url `string`
      * version `string`
  * html_url `string`
  * id `string`
  * public `boolean`
  * url `string`
  * user `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### gists
* gists `array`
  * items `object`
    * comments `integer`
    * comments_url `string`
    * created_at `string`
    * description `string`
    * files `object`
      * ring.erl `object`
        * filename `string`
        * raw_url `string`
        * size `integer`
    * git_pull_url `string`
    * git_push_url `string`
    * html_url `string`
    * id `string`
    * public `boolean`
    * url `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`

### gitCommit
* gitCommit `object`
  * author `object`
    * date `string`
    * email `string`
    * name `string`
  * message `string`
  * parents `string`
  * tree `string`

### gitRefPatch
* gitRefPatch `object`
  * force `boolean`
  * sha `string`

### gitignore
* gitignore `array`


### gitignore-lang
* gitignore-lang `object`
  * name `string`
  * source `string`

### headBranch
* headBranch `object`
  * object `object`
    * sha `string`
    * type `string`
    * url `string`
  * ref `string`
  * url `string`

### headBranchBody
* headBranchBody `object`
  * force **required** `boolean`: Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
  * sha **required** `string`: String of the SHA1 value to set this reference to.

### heads
* heads `array`
  * items `object`
    * commit `object`
      * sha `string`
      * url `string`
    * name `string`
    * tarball_url `string`
    * zipball_url `string`

### hook
* hook `array`
  * items `object`
    * active `boolean`
    * config `object`
      * content_type `string`
      * url `string`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * events `array`
      * items `string` (values: push, issues, issue_comment, commit_comment, pull_request, pull_request_review_comment, gollum, watch, download, fork, fork_apply, member, public, team_add, status)
    * id `integer`
    * name `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`

### hookBody
* hookBody `object`
  * active `boolean`
  * add_events `array`
    * items `string`

### issue
* issue `object`
  * assignee `string`
  * body `string`
  * labels `array`
    * items `string`
  * milestone `number`
  * title `string`

### issueBody
* issueBody `object`
  * assignee `string`
  * body `string`
  * labels `array`
    * items `string`
  * milestone `number`
  * title `string`

### issues
* issues `array`
  * items `object`
    * assignee `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * body `string`
    * closed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * comments `integer`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * html_url `string`
    * labels `array`
      * items `object`
        * color `string`
        * name `string`
        * url `string`
    * milestone `object`
      * closed_issues `integer`
      * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      * creator `object`
        * avatar_url `string`
        * gravatar_id `string`
        * id `integer`
        * login `string`
        * url `string`
      * description `string`
      * due_on `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      * number `integer`
      * open_issues `integer`
      * state `string` (values: open, closed)
      * title `string`
      * url `string`
    * number `integer`
    * pull_request `object`
      * diff_url `string`
      * html_url `string`
      * patch_url `string`
    * state `string` (values: open, closed)
    * title `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`

### issuesComment
* issuesComment `object`
  * body `string`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * html_url `string`
  * id `integer`
  * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * url `string`
  * user `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### issuesComments
* issuesComments `array`
  * items `object`
    * _links `object`
      * html `object`
        * href `string`
      * pull_request `object`
        * href `string`
      * self `object`
        * href `string`
    * body `string`
    * commit_id `string`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * id `integer`
    * path `string`
    * position `integer`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`

### key
* key `object`
  * id `integer`
  * key `string`
  * title `string`
  * url `string`

### keyBody
* keyBody `object`
  * key `string`
  * title `string`

### keys
* keys `array`
  * items `object`
    * id `integer`
    * key `string`
    * title `string`
    * url `string`

### label
* label `object`
  * color `string`
  * name `string`
  * url `string`

### labels
* labels `array`
  * items `object`
    * color `string`
    * name `string`
    * url `string`

### labelsBody
* labelsBody `array`
  * items `string`

### languages
* languages `object`

### markdown
* markdown `object`
  * context `string`
  * mode `string`
  * text `string`

### members
* members `array`
  * items `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### merge
* merge `object`
  * merged `boolean`
  * message `string`
  * sha `string`

### mergePullBody
* mergePullBody `object`
  * commit_message `string`

### mergesBody
* mergesBody `object`
  * base `string`
  * commit_message `string`
  * head `string`

### mergesConflict
* mergesConflict `object`
  * message `string`: Error message

### mergesSuccessful
* mergesSuccessful `object`
  * author `object`
    * avatar_url `string`
    * events_url `string`
    * followers_url `string`
    * following_url `string`
    * gists_url `string`
    * gravatar_id `string`
    * html_url `string`
    * id `integer`
    * login `string`
    * organizations_url `string`
    * received_events_url `string`
    * repos_url `string`
    * starred_url `string`
    * subscriptions_url `string`
    * type `string`
    * url `string`
  * comments_url `string`
  * commit `object`
    * author `object`
      * date `string`
      * email `string`
      * name `string`
    * comment_count `integer`
    * committer `object`
      * date `string`
      * email `string`
      * name `string`
    * message `string`
    * tree `object`
      * sha `string`
      * url `string`
    * url `string`
  * committer `object`
    * avatar_url `string`
    * events_url `string`
    * followers_url `string`
    * following_url `string`
    * gists_url `string`
    * gravatar_id `string`
    * html_url `string`
    * id `integer`
    * login `string`
    * organizations_url `string`
    * received_events_url `string`
    * repos_url `string`
    * starred_url `string`
    * subscriptions_url `string`
    * type `string`
    * url `string`
  * merged `boolean`
  * message `string`
  * parents `array`
    * items `object`
      * sha `string`
      * url `string`
  * sha `string`
  * url `string`

### meta
* meta `object`
  * git `array`
    * items `string`: An Array of IP addresses in CIDR format specifying the Git servers at GitHub.
  * hooks `array`
    * items `string`: An Array of IP addresses in CIDR format specifying the addresses that incoming service hooks will originate from.

### milestone
* milestone `object`
  * closed_issues `integer`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * creator `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`
  * description `string`
  * due_on `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * number `integer`
  * open_issues `integer`
  * state `string` (values: open, closed)
  * title `string`
  * url `string`

### milestoneBody
* milestoneBody `object`
  * description `string`
  * due_on `string`
  * state `string`
  * title `string`

### milestoneUpdate
* milestoneUpdate `object`
  * description `string`
  * due_on `string`
  * state `string`
  * title `string`

### notificationMarkRead
* notificationMarkRead `object`
  * last_read_at `string`

### notifications
* notifications `object`
  * id `integer`
  * last_read_at `string`
  * reason `string`
  * repository `object`
    * description `string`
    * fork `boolean`
    * full_name `string`
    * html_url `string`
    * id `integer`
    * name `string`
    * owner `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * private `boolean`
    * url `string`
  * subject `object`
    * latest_comment_url `string`
    * title `string`
    * type `string`
    * url `string`
  * unread `boolean`
  * updated_at `string`
  * url `string`

### orgMembers
* orgMembers `array`
  * items `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### orgPublicMembers
* orgPublicMembers `array`
  * items `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### orgTeams
* orgTeams `array`
  * items `object`
    * id `integer`
    * name `string`
    * url `string`

### orgTeamsPost
* orgTeamsPost `object`
  * name **required** `string`
  * permission `string` (values: pull, push, admin)
  * repo_names `array`
    * items `string`

### organization
* organization `object`
  * avatar_url `string`
  * blog `string`
  * company `string`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * email `string`
  * followers `integer`
  * following `integer`
  * html_url `string`
  * id `integer`
  * location `string`
  * login `string`
  * name `string`
  * public_gists `integer`
  * public_repos `integer`
  * type `string`
  * url `string`

### organizationAsTeamMember
* organizationAsTeamMember `object`
  * errors `array`
    * items `object`
      * code `string`
      * field `string`
      * resource `string`
  * message `string`

### participationStats
* participationStats `object`
  * all `array`
    * items `integer`
  * owner `array`
    * items `integer`

### patchGist
* patchGist `object`
  * description `string`
  * files `object`
    * delete_this_file.txt `string`
    * file1.txt `object`
      * content `string`
    * new_file.txt `object`
      * content `string`
    * old_name.txt `object`
      * content `string`
      * filename `string`

### patchOrg
* patchOrg `object`
  * billing_email `string`: Billing email address. This address is not publicized.
  * company `string`
  * email `string`: Publicly visible email address.
  * location `string`
  * name `string`

### postComment
* postComment `object`
  * body **required** `string`

### postGist
* postGist `object`
  * description `string`
  * files `object`
    * file1.txt `object`
      * content `string`
  * public `boolean`

### postRepo
* postRepo `object`
  * auto_init `boolean`: True to create an initial commit with empty README. Default is false.
  * description `string`
  * gitignore_template `string`: Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell" Ignored if auto_init parameter is not provided. 
  * has_downloads `boolean`: True to enable downloads for this repository, false to disable them. Default is true.
  * has_issues `boolean`: True to enable issues for this repository, false to disable them. Default is true.
  * has_wiki `boolean`: True to enable the wiki for this repository, false to disable it. Default is true.
  * homepage `string`
  * name **required** `string`
  * private `boolean`: True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account.
  * team_id `integer`: The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.

### pullRequest
* pullRequest `object`
  * _links `object`
    * comments `object`
      * href `string`
    * html `object`
      * href `string`
    * review_comments `object`
      * href `string`
    * self `object`
      * href `string`
  * additions `integer`
  * base `object`
    * label `string`
    * ref `string`
    * repo `object`
      * clone_url `string`
      * created_at `string`
      * description `string`
      * fork `boolean`
      * forks `integer`
      * forks_count `integer`
      * full_name `string`
      * git_url `string`
      * homepage `string`
      * html_url `string`
      * id `integer`
      * language `null`
      * master_branch `string`
      * mirror_url `string`
      * name `string`
      * open_issues `integer`
      * open_issues_count `integer`
      * owner `object`
        * avatar_url `string`
        * gravatar_id `string`
        * id `integer`
        * login `string`
        * url `string`
      * private `boolean`
      * pushed_at `string`
      * size `integer`
      * ssh_url `string`
      * svn_url `string`
      * updated_at `string`
      * url `string`
      * watchers `integer`
      * watchers_count `integer`
    * sha `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
  * body `string`
  * changed_files `integer`
  * closed_at `string`
  * comments `integer`
  * commits `integer`
  * created_at `string`
  * deletions `integer`
  * diff_url `string`
  * head `object`
    * label `string`
    * ref `string`
    * repo `object`
      * clone_url `string`
      * created_at `string`
      * description `string`
      * fork `boolean`
      * forks `integer`
      * forks_count `integer`
      * full_name `string`
      * git_url `string`
      * homepage `string`
      * html_url `string`
      * id `integer`
      * language `null`
      * master_branch `string`
      * mirror_url `string`
      * name `string`
      * open_issues `integer`
      * open_issues_count `integer`
      * owner `object`
        * avatar_url `string`
        * gravatar_id `string`
        * id `integer`
        * login `string`
        * url `string`
      * private `boolean`
      * pushed_at `string`
      * size `integer`
      * ssh_url `string`
      * svn_url `string`
      * updated_at `string`
      * url `string`
      * watchers `integer`
      * watchers_count `integer`
    * sha `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
  * html_url `string`
  * issue_url `string`
  * merge_commit_sha `string`
  * mergeable `boolean`
  * merged `boolean`
  * merged_at `string`
  * merged_by `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`
  * number `integer`
  * patch_url `string`
  * state `string`
  * title `string`
  * updated_at `string`
  * url `string`
  * user `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### pullUpdate
* pullUpdate `object`
  * body `string`
  * state `string`
  * title `string`

### pulls
* pulls `array`
  * items `object`
    * _links `object`
      * comments `object`
        * href `string`
      * html `object`
        * href `string`
      * review_comments `object`
        * href `string`
      * self `object`
        * href `string`
    * base `object`
      * label `string`
      * ref `string`
      * repo `object`
        * clone_url `string`
        * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * description `string`
        * fork `boolean`
        * forks `integer`
        * forks_count `integer`
        * full_name `string`
        * git_url `string`
        * homepage `string`
        * html_url `string`
        * id `integer`
        * language `string`
        * master_branch `string`
        * mirror_url `string`
        * name `string`
        * open_issues `integer`
        * open_issues_count `integer`
        * owner `object`
          * avatar_url `string`
          * gravatar_id `string`
          * id `integer`
          * login `string`
          * url `string`
        * private `boolean`
        * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * size `integer`
        * ssh_url `string`
        * svn_url `string`
        * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * url `string`
        * watchers `integer`
        * watchers_count `integer`
      * sha `string`
      * user `object`
        * avatar_url `string`
        * gravatar_id `string`
        * id `integer`
        * login `string`
        * url `string`
    * body `string`
    * closed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * diff_url `string`
    * head `object`
      * label `string`
      * ref `string`
      * repo `object`
        * clone_url `string`
        * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * description `string`
        * fork `boolean`
        * forks `integer`
        * forks_count `integer`
        * full_name `string`
        * git_url `string`
        * homepage `string`
        * html_url `string`
        * id `integer`
        * language `string`
        * master_branch `string`
        * mirror_url `string`
        * name `string`
        * open_issues `integer`
        * open_issues_count `integer`
        * owner `object`
          * avatar_url `string`
          * gravatar_id `string`
          * id `integer`
          * login `string`
          * url `string`
        * private `boolean`
        * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * size `integer`
        * ssh_url `string`
        * svn_url `string`
        * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        * url `string`
        * watchers `integer`
        * watchers_count `integer`
      * sha `string`
      * user `object`
        * avatar_url `string`
        * gravatar_id `string`
        * id `integer`
        * login `string`
        * url `string`
    * html_url `string`
    * issue_url `string`
    * merged_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * number `integer`
    * patch_url `string`
    * state `string` (values: open, closed)
    * title `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`

### pullsComment
* pullsComment `object`
  * _links `object`
    * html `object`
      * href `string`
    * pull_request `object`
      * href `string`
    * self `object`
      * href `string`
  * body `string`
  * commit_id `string`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * id `integer`
  * path `string`
  * position `integer`
  * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * url `string`
  * user `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### pullsCommentPost
* pullsCommentPost `object`
  * body `string`
  * commit_id `string`
  * path `string`
  * position `number`

### pullsComments
* pullsComments `array`
  * items `object`
    * _links `object`
      * html `object`
        * href `string`
      * pull_request `object`
        * href `string`
      * self `object`
        * href `string`
    * body `string`
    * commit_id `string`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * id `integer`
    * path `string`
    * position `integer`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`

### pullsPost
* pullsPost `object`
  * base `string`
  * body `string`
  * head `string`
  * title `string`

### punchCardStats
* punchCardStats `array`
  * items `integer`

### putSubscription
* putSubscription `object`
  * created_at `string`
  * ignored `boolean`
  * reason `object`
  * subscribed `boolean`
  * thread_url `string`
  * url `string`

### rate_limit
* rate_limit `object`
  * rate `object`
    * limit `integer`
    * remaining `integer`
    * reset `integer`

### readme
* readme `object`
  * _links `object`
    * git `string`
    * html `string`
    * self `string`
  * content `string`
  * encoding `string`
  * git_url `string`
  * html_url `string`
  * name `string`
  * path `string`
  * sha `string`
  * size `integer`
  * type `string`
  * url `string`

### ref
* ref `array`
  * items `object`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * creator `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * description `string`
    * id `integer`
    * state `string`
    * target_url `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`

### refBody
* refBody `object`
  * object `object`
    * sha `string`
    * type `string`
    * url `string`
  * ref `string`
  * url `string`

### refStatus
* refStatus `array`
  * items `object`
    * commit_url `string`
    * name `string`
    * repository_url `string`
    * sha `string`
    * state `string`
    * statuses `array`
      * items `object`
        * context `string`
        * created_at `string`
        * description `string`
        * id `number`
        * state `string`
        * target_url `string`
        * updated_at `string`
        * url `string`

### refs
* refs `array`
  * items `object`
    * object `object`
      * sha `string`
      * type `string`
      * url `string`
    * ref `string`
    * url `string`

### refsBody
* refsBody `object`
  * ref `string`
  * sha `string`

### release
* release `object`
  * assets `array`
    * items `object`
      * content_type `string`
      * created_at `string`
      * download_count `integer`
      * id `integer`
      * label `string`
      * name `string`
      * size `integer`
      * state `string`
      * updated_at `string`
      * uploader `object`
        * avatar_url `string`
        * events_url `string`
        * followers_url `string`
        * following_url `string`
        * gists_url `string`
        * gravatar_id `string`
        * html_url `string`
        * id `integer`
        * login `string`
        * organizations_url `string`
        * received_events_url `string`
        * repos_url `string`
        * site_admin `boolean`
        * starred_url `string`
        * subscriptions_url `string`
        * type `string`
        * url `string`
      * url `string`
  * assets_url `string`
  * author `object`
    * avatar_url `string`
    * events_url `string`
    * followers_url `string`
    * following_url `string`
    * gists_url `string`
    * gravatar_id `string`
    * html_url `string`
    * id `integer`
    * login `string`
    * organizations_url `string`
    * received_events_url `string`
    * repos_url `string`
    * site_admin `boolean`
    * starred_url `string`
    * subscriptions_url `string`
    * type `string`
    * url `string`
  * body `string`
  * created_at `string`
  * draft `boolean`
  * html_url `string`
  * id `integer`
  * name `string`
  * prerelease `boolean`
  * published_at `string`
  * tag_name `string`
  * tarball_url `string`
  * target_commitish `string`
  * upload_url `string`
  * url `string`
  * zipball_url `string`

### release-create
* release-create `object`
  * body `string`
  * draft `boolean`
  * name `string`
  * prerelease `boolean`
  * tag_name `string`
  * target_commitish `string`

### releases
* releases `array`
  * items `object`
    * assets `array`
      * items `object`
        * content_type `string`
        * created_at `string`
        * download_count `integer`
        * id `integer`
        * label `string`
        * name `string`
        * size `integer`
        * state `string`
        * updated_at `string`
        * uploader `object`
          * avatar_url `string`
          * events_url `string`
          * followers_url `string`
          * following_url `string`
          * gists_url `string`
          * gravatar_id `string`
          * html_url `string`
          * id `integer`
          * login `string`
          * organizations_url `string`
          * received_events_url `string`
          * repos_url `string`
          * site_admin `boolean`
          * starred_url `string`
          * subscriptions_url `string`
          * type `string`
          * url `string`
        * url `string`
    * assets_url `string`
    * author `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`
    * body `string`
    * created_at `string`
    * draft `boolean`
    * html_url `string`
    * id `integer`
    * name `string`
    * prerelease `boolean`
    * published_at `string`
    * tag_name `string`
    * tarball_url `string`
    * target_commitish `string`
    * upload_url `string`
    * url `string`
    * zipball_url `string`

### repo
* repo `object`
  * clone_url `string`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * description `string`
  * fork `boolean`
  * forks `integer`
  * forks_count `integer`
  * full_name `string`
  * git_url `string`
  * has_downloads `boolean`
  * has_issues `boolean`
  * has_wiki `boolean`
  * homepage `string`
  * html_url `string`
  * id `integer`
  * language `string`
  * master_branch `string`
  * mirror_url `string`
  * name `string`
  * open_issues `integer`
  * open_issues_count `integer`
  * organization `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * type `string`
    * url `string`
  * owner `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`
  * parent `object`: Is present when the repo is a fork. Parent is the repo this repo was forked from.
    * clone_url `string`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * description `string`
    * fork `boolean`
    * forks `integer`
    * forks_count `integer`
    * full_name `string`
    * git_url `string`
    * homepage `string`
    * html_url `string`
    * id `integer`
    * language `string`
    * master_branch `string`
    * mirror_url `string`
    * name `string`
    * open_issues `integer`
    * open_issues_count `integer`
    * owner `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * private `boolean`
    * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * size `integer`
    * ssh_url `string`
    * svn_url `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * watchers `integer`
    * watchers_count `integer`
  * private `boolean`
  * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * size `integer`
  * source `object`: Is present when the repo is a fork. Source is the ultimate source for the network.
    * clone_url `string`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * description `string`
    * fork `boolean`
    * forks `integer`
    * forks_count `integer`
    * full_name `string`
    * git_url `string`
    * homepage `string`
    * html_url `string`
    * id `integer`
    * language `string`
    * master_branch `string`
    * mirror_url `string`
    * name `string`
    * open_issues `integer`
    * open_issues_count `integer`
    * owner `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * private `boolean`
    * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * size `integer`
    * ssh_url `string`
    * svn_url `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * watchers `integer`
    * watchers_count `integer`
  * ssh_url `string`
  * svn_url `string`
  * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * url `string`
  * watchers `integer`
  * watchers_count `integer`

### repo-deployments
* repo-deployments `array`
  * items `object`
    * created_at `string`
    * creator `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`
    * description `string`
    * id `integer`
    * payload `string`
    * sha `string`
    * statuses_url `string`
    * updated_at `string`
    * url `string`

### repoComments
* repoComments `array`
  * items `object`
    * body `string`
    * commit_id `string`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * html_url `string`
    * id `integer`
    * line `integer`
    * path `string`
    * position `integer`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * user `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`

### repoCommit
* repoCommit `object`
  * author `object`
    * date `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * email `string`
    * name `string`
  * committer `object`
    * date `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * email `string`
    * name `string`
  * message `string`
  * parents `array`
    * items `object`
      * sha `string`
      * url `string`
  * sha `string`
  * tree `object`
    * sha `string`
    * url `string`
  * url `string`

### repoCommitBody
* repoCommitBody `object`
  * author `object`
    * date `string`
    * email `string`
    * name `string`
  * message **required** `string`
  * parents **required** `array`
    * items `string`
  * tree **required** `string`

### repoEdit
* repoEdit `object`
  * description `string`
  * has_downloads `boolean`
  * has_issues `boolean`
  * has_wiki `boolean`
  * homepage `string`
  * name `string`
  * private `boolean`

### repos
* repos `array`
  * items `object`
    * clone_url `string`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * description `string`
    * fork `boolean`
    * forks `integer`
    * forks_count `integer`
    * full_name `string`
    * git_url `string`
    * homepage `string`
    * html_url `string`
    * id `integer`
    * language `string`
    * master_branch `string`
    * mirror_url `string`
    * name `string`
    * open_issues `integer`
    * open_issues_count `integer`
    * owner `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * private `boolean`
    * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * size `integer`
    * ssh_url `string`
    * svn_url `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * watchers `integer`
    * watchers_count `integer`

### repositories
* repositories `array`
  * items `object`
    * description `string`
    * fork `boolean`
    * full_name `string`
    * html_url `string`
    * id `integer`
    * name `string`
    * owner `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * private `boolean`
    * url `string`

### search-code
* search-code `object`
  * items `array`
    * items `object`
      * git_url `string`
      * html_url `string`
      * name `string`
      * path `string`
      * repository `object`
        * archive_url `string`
        * assignees_url `string`
        * blobs_url `string`
        * branches_url `string`
        * collaborators_url `string`
        * comments_url `string`
        * commits_url `string`
        * compare_url `string`
        * contents_url `string`
        * contributors_url `string`
        * description `string`
        * downloads_url `string`
        * events_url `string`
        * fork `boolean`
        * forks_url `string`
        * full_name `string`
        * git_commits_url `string`
        * git_refs_url `string`
        * git_tags_url `string`
        * hooks_url `string`
        * html_url `string`
        * id `integer`
        * issue_comment_url `string`
        * issue_events_url `string`
        * issues_url `string`
        * keys_url `string`
        * labels_url `string`
        * languages_url `string`
        * merges_url `string`
        * milestones_url `string`
        * name `string`
        * notifications_url `string`
        * owner `object`
          * avatar_url `string`
          * events_url `string`
          * followers_url `string`
          * following_url `string`
          * gists_url `string`
          * gravatar_id `string`
          * html_url `string`
          * id `integer`
          * login `string`
          * organizations_url `string`
          * received_events_url `string`
          * repos_url `string`
          * starred_url `string`
          * subscriptions_url `string`
          * type `string`
          * url `string`
        * private `boolean`
        * pulls_url `string`
        * stargazers_url `string`
        * statuses_url `string`
        * subscribers_url `string`
        * subscription_url `string`
        * tags_url `string`
        * teams_url `string`
        * trees_url `string`
        * url `string`
      * score `number`
      * sha `string`
      * url `string`
  * total_count `integer`

### search-issues
* search-issues `object`
  * items `array`
    * items `object`
      * assignee `null`
      * body `string`
      * closed_at `null`
      * comments `integer`
      * comments_url `string`
      * created_at `string`
      * events_url `string`
      * html_url `string`
      * id `integer`
      * labels `array`
        * items `object`
          * color `string`
          * name `string`
          * url `string`
      * labels_url `string`
      * milestone `null`
      * number `integer`
      * pull_request `object`
        * diff_url `null`
        * html_url `null`
        * patch_url `null`
      * score `number`
      * state `string`
      * title `string`
      * updated_at `string`
      * url `string`
      * user `object`
        * avatar_url `string`
        * events_url `string`
        * followers_url `string`
        * following_url `string`
        * gists_url `string`
        * gravatar_id `string`
        * html_url `string`
        * id `integer`
        * login `string`
        * organizations_url `string`
        * received_events_url `string`
        * repos_url `string`
        * starred_url `string`
        * subscriptions_url `string`
        * type `string`
        * url `string`
  * total_count `integer`

### search-issues-by-keyword
* search-issues-by-keyword `object`
  * issues `array`
    * items `object`
      * body `string`
      * comments `integer`
      * created_at `string`
      * gravatar_id `string`
      * html_url `string`
      * labels `array`
        * items `string`
      * number `integer`
      * position `integer`
      * state `string`
      * title `string`
      * updated_at `string`
      * user `string`
      * votes `integer`

### search-repositories
* search-repositories `object`
  * items `array`
    * items `object`
      * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      * default_branch `string`
      * description `string`
      * fork `boolean`
      * forks `integer`
      * forks_count `integer`
      * full_name `string`
      * homepage `string`
      * html_url `string`
      * id `integer`
      * language `string`
      * master_branch `string`
      * name `string`
      * open_issues `integer`
      * open_issues_count `integer`
      * owner `object`
        * avatar_url `string`
        * gravatar_id `string`
        * id `integer`
        * login `string`
        * received_events_url `string`
        * type `string`
        * url `string`
      * private `boolean`
      * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      * score `number`
      * size `integer`
      * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      * url `string`
      * watchers `integer`
      * watchers_count `integer`
  * total_count `integer`

### search-repositories-by-keyword
* search-repositories-by-keyword `object`
  * repositories `array`
    * items `object`
      * created `string`
      * created_at `string`
      * description `string`
      * followers `integer`
      * fork `boolean`
      * forks `integer`
      * has_downloads `boolean`
      * has_issues `boolean`
      * has_wiki `boolean`
      * homepage `string`
      * language `string`
      * name `string`
      * open_issues `integer`
      * owner `string`
      * private `boolean`
      * pushed `string`
      * pushed_at `string`
      * score `number`
      * size `integer`
      * type `string`
      * url `string`
      * username `string`
      * watchers `integer`

### search-user-by-email
* search-user-by-email `object`
  * user `object`
    * blog `string`
    * company `string`
    * created `string`
    * created_at `string`
    * email `string`
    * followers_count `integer`
    * following_count `integer`
    * gravatar_id `string`
    * id `integer`
    * location `string`
    * login `string`
    * name `string`
    * public_gist_count `integer`
    * public_repo_count `integer`
    * type `string`

### search-users
* search-users `object`
  * items `array`
    * items `object`
      * avatar_url `string`
      * followers_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * score `number`
      * subscriptions_url `string`
      * type `string`
      * url `string`
  * total_count `integer`

### search-users-by-keyword
* search-users-by-keyword `object`
  * users `array`
    * items `object`
      * created `string`
      * created_at `string`
      * followers `integer`
      * followers_count `integer`
      * fullname `string`
      * gravatar_id `string`
      * id `string`
      * language `string`
      * location `string`
      * login `string`
      * name `string`
      * public_repo_count `integer`
      * repos `integer`
      * score `number`
      * type `string`
      * username `string`

### stargazers
* stargazers `array`
  * items `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### subscribition
* subscribition `object`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * ignored `boolean`
  * reason `string`
  * repository_url `string`
  * subscribed `boolean`
  * url `string`

### subscribitionBody
* subscribitionBody `object`
  * ignored `boolean`
  * subscribed `boolean`

### subscription
* subscription `object`
  * created_at `string`
  * ignored `boolean`
  * reason `boolean`
  * subscribed `boolean`
  * thread_url `string`
  * url `string`

### tag
* tag `object`
  * message `string`
  * object `object`
    * sha `string`
    * type `string`
    * url `string`
  * sha `string`
  * tag `string`
  * tagger `object`
    * date `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * email `string`
    * name `string`
  * url `string`

### tags
* tags `object`
  * message **required** `string`: String of the tag message.
  * object **required** `string`: String of the SHA of the git object this is tagging.
  * tag **required** `string`
  * tagger **required** `object`
    * date `string`: Timestamp of when this object was tagged.
    * email `string`: String of the email of the author of the tag.
    * name `string`: String of the name of the author of the tag.
  * type **required** `string`: String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.

### team
* team `object`
  * id `integer`
  * members_count `integer`
  * name `string`
  * permission `string`
  * repos_count `integer`
  * url `string`

### teamMembership
* teamMembership `object`
  * state `string`
  * url `string`

### teamRepos
* teamRepos `array`
  * items `object`
    * clone_url `string`
    * created_at `string`
    * description `string`
    * fork `boolean`
    * forks `integer`
    * forks_count `integer`
    * full_name `string`
    * git_url `string`
    * homepage `string`
    * html_url `string`
    * id `integer`
    * language `null`
    * master_branch `string`
    * mirror_url `string`
    * name `string`
    * open_issues `integer`
    * open_issues_count `integer`
    * owner `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * private `boolean`
    * pushed_at `string`
    * size `integer`
    * ssh_url `string`
    * svn_url `string`
    * updated_at `string`
    * url `string`
    * watchers `integer`
    * watchers_count `integer`

### teams
* teams `array`
  * items `object`
    * id `integer`
    * name `string`
    * url `string`

### teams-list
* teams-list `array`
  * items `object`
    * id `integer`
    * members_count `integer`
    * name `string`
    * organization `object`
      * avatar_url `string`
      * id `integer`
      * login `string`
      * url `string`
    * permission `string`
    * repos_count `integer`
    * url `string`

### tree
* tree `object`
  * sha `string`
  * tree `array`
    * items `object`
      * mode `string`
      * path `string`
      * sha `string`
      * size `integer`
      * type `string`
      * url `string`
  * url `string`

### trees
* trees `object`
  * base_tree `string`
  * sha `string`: SHA1 checksum ID of the object in the tree.
  * tree `array`
    * items `object`
      * mode `string` (values: 100644, 100755, 040000, 160000, 120000): One of 100644 for file (blob), 100755 for executable (blob), 040000 for subdirectory (tree), 160000 for submodule (commit) or 120000 for a blob that specifies the path of a symlink.
      * path `string`
      * sha `string`: SHA1 checksum ID of the object in the tree.
      * type `string` (values: blob, tree, commit)
      * url `string`
  * url `string`

### user
* user `object`
  * avatar_url `string`
  * bio `string`
  * blog `string`
  * collaborators `integer`
  * company `string`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * disk_usage `integer`
  * email `string`
  * followers `integer`
  * following `integer`
  * gravatar_id `string`
  * hireable `boolean`
  * html_url `string`
  * id `integer`
  * location `string`
  * login `string`
  * name `string`
  * owned_private_repos `integer`
  * plan `object`
    * collaborators `integer`
    * name `string`
    * private_repos `integer`
    * space `integer`
  * private_gists `integer`
  * public_gists `integer`
  * public_repos `integer`
  * total_private_repos `integer`
  * type `string`
  * url `string`

### user-emails
* user-emails `array`
  * items `string`

### user-emails_final
* user-emails_final `array`


### user-keys
* user-keys `array`


### user-keys-keyId
* user-keys-keyId `object`
  * id `integer`
  * key `string`
  * title `string`
  * url `string`

### user-keys-post
* user-keys-post `object`
  * key `string`
  * title `string`

### user-update
* user-update `object`
  * bio `string`
  * blog `string`
  * company `string`
  * email `string`
  * hireable `boolean`
  * location `string`
  * name `string`

### user-userId
* user-userId `object`
  * avatar_url `string`
  * bio `string`
  * blog `string`
  * company `string`
  * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  * email `string`: Note: The returned email is the user’s publicly visible email address (or null if the user has not specified a public email address in their profile).
  * followers `integer`
  * following `integer`
  * gravatar_id `string`
  * hireable `boolean`
  * html_url `string`
  * id `integer`
  * location `string`
  * login `string`
  * name `string`
  * public_gists `integer`
  * public_repos `integer`
  * type `string`
  * url `string`

### user-userId-starred
* user-userId-starred `array`


### user-userId-subscribitions
* user-userId-subscribitions `array`
  * items `object`
    * clone_url `string`
    * created_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * description `string`
    * fork `boolean`
    * forks `integer`
    * forks_count `integer`
    * full_name `string`
    * git_url `string`
    * homepage `string`
    * html_url `string`
    * id `integer`
    * language `string`
    * master_branch `integer`
    * mirror_url `string`
    * name `string`
    * open_issues `integer`
    * open_issues_count `integer`
    * owner `object`
      * avatar_url `string`
      * gravatar_id `string`
      * id `integer`
      * login `string`
      * url `string`
    * private `boolean`
    * pushed_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * size `integer`
    * ssh_url `string`
    * svn_url `string`
    * updated_at `string`: ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    * url `string`
    * watchers `integer`
    * watchers_count `integer`

### users
* users `array`
  * items `object`
    * avatar_url `string`
    * gravatar_id `string`
    * id `integer`
    * login `string`
    * url `string`

### users-userId-keys
* users-userId-keys `array`


### users-userId-orgs
* users-userId-orgs `array`



