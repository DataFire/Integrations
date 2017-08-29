# @datafire/github

Client library for GitHub

## Installation and Usage
```bash
npm install --save datafire @datafire/github
```

```js
let datafire = require('datafire');
let github = require('@datafire/github').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
github.oauthRefresh(null, context)
```


### emojis.get
Lists all the emojis available to use on GitHub.


```js
github.emojis.get({}, context)
```

#### Parameters
* page (integer)

### events.get
List public events.


```js
github.events.get({}, context)
```

#### Parameters
* page (integer)

### feeds.get
List Feeds.
GitHub provides several timeline resources in Atom format. The Feeds API
 lists all the feeds available to the authenticating user.



```js
github.feeds.get({}, context)
```

#### Parameters
* page (integer)

### gists.get
List the authenticated user's gists or if called anonymously, this will
return all public gists.



```js
github.gists.get({}, context)
```

#### Parameters
* since (string) - Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

### gists.post
Create a gist.


```js
github.gists.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### gists.public.get
List all public gists.


```js
github.gists.public.get({}, context)
```

#### Parameters
* since (string) - Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.

### gists.starred.get
List the authenticated user's starred gists.


```js
github.gists.starred.get({}, context)
```

#### Parameters
* since (string) - Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.

### gists.id.delete
Delete a gist.


```js
github.gists.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.

### gists.id.get
Get a single gist.


```js
github.gists.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.

### gists.id.patch
Edit a gist.


```js
github.gists.id.patch({
  "id": 0,
  "body": {}
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.
* body (object) **required**

### gists.id.comments.get
List comments on a gist.


```js
github.gists.id.comments.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.
* page (integer)

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
* id (integer) **required** - Id of gist.
* body (object) **required**

### gists.id.comments.commentId.delete
Delete a comment.


```js
github.gists.id.comments.commentId.delete({
  "id": 0,
  "commentId": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.
* commentId (integer) **required** - Id of comment.

### gists.id.comments.commentId.get
Get a single comment.


```js
github.gists.id.comments.commentId.get({
  "id": 0,
  "commentId": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.
* commentId (integer) **required** - Id of comment.

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
* id (integer) **required** - Id of gist.
* commentId (integer) **required** - Id of comment.
* body (object) **required**

### gists.id.forks.post
Fork a gist.


```js
github.gists.id.forks.post({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.

### gists.id.star.delete
Unstar a gist.


```js
github.gists.id.star.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.

### gists.id.star.get
Check if a gist is starred.


```js
github.gists.id.star.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.

### gists.id.star.put
Star a gist.


```js
github.gists.id.star.put({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of gist.

### gitignore.templates.get
Listing available templates.
List all templates available to pass as an option when creating a repository.



```js
github.gitignore.templates.get({}, context)
```

#### Parameters
* page (integer)

### gitignore.templates.language.get
Get a single template.


```js
github.gitignore.templates.language.get({
  "language": ""
}, context)
```

#### Parameters
* language (string) **required**

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
* filter (string) **required** - Issues assigned to you / created by you / mentioning you / you're
* state (string) **required**
* labels (string) **required** - String list of comma separated Label names. Example - bug,ui,@high.
* sort (string) **required**
* direction (string) **required**
* since (string) - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

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
* keyword (string) **required** - The search term.
* state (string) **required** - Indicates the state of the issues to return. Can be either open or closed.
* owner (string) **required**
* repository (string) **required**

### legacy.repos.search.keyword.get
Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.


```js
github.legacy.repos.search.keyword.get({
  "keyword": ""
}, context)
```

#### Parameters
* keyword (string) **required** - The search term
* order (string) - The sort field. if sort param is provided. Can be either asc or desc.
* language (string) - Filter results by language
* start_page (string) - The page number to fetch
* sort (string) - The sort field. One of stars, forks, or updated. Default: results are sorted by best match.

### legacy.user.email.email.get
This API call is added for compatibility reasons only.


```js
github.legacy.user.email.email.get({
  "email": ""
}, context)
```

#### Parameters
* email (string) **required** - The email address

### legacy.user.search.keyword.get
Find users by keyword.


```js
github.legacy.user.search.keyword.get({
  "keyword": ""
}, context)
```

#### Parameters
* keyword (string) **required** - The search term
* order (string) - The sort field. if sort param is provided. Can be either asc or desc.
* start_page (string) - The page number to fetch
* sort (string) - The sort field. One of stars, forks, or updated. Default: results are sorted by best match.

### markdown.post
Render an arbitrary Markdown document


```js
github.markdown.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### markdown.raw.post
Render a Markdown document in raw mode


```js
github.markdown.raw.post(null, context)
```


### meta.get
This gives some information about GitHub.com, the service.


```js
github.meta.get(null, context)
```


### networks.owner.repo.events.get
List public events for a network of repositories.


```js
github.networks.owner.repo.events.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of the owner.
* repo (string) **required** - Name of repository.
* page (integer)

### notifications.get
List your notifications.
List all notifications for the current user, grouped by repository.



```js
github.notifications.get({}, context)
```

#### Parameters
* all (boolean) - True to show notifications marked as read.
* participating (boolean) - True to show only notifications in which the user is directly participating
* since (string) - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

### notifications.put
Mark as read.
Marking a notification as "read" removes it from the default view on GitHub.com.



```js
github.notifications.put({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### notifications.threads.id.get
View a single thread.


```js
github.notifications.threads.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of thread.

### notifications.threads.id.patch
Mark a thread as read


```js
github.notifications.threads.id.patch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of thread.

### notifications.threads.id.subscription.delete
Delete a Thread Subscription.


```js
github.notifications.threads.id.subscription.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of thread.

### notifications.threads.id.subscription.get
Get a Thread Subscription.


```js
github.notifications.threads.id.subscription.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of thread.

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
* id (integer) **required** - Id of thread.
* body (object) **required**

### orgs.org.get
Get an Organization.


```js
github.orgs.org.get({
  "org": ""
}, context)
```

#### Parameters
* org (string) **required** - Name of organisation.

### orgs.org.patch
Edit an Organization.


```js
github.orgs.org.patch({
  "org": "",
  "body": {}
}, context)
```

#### Parameters
* org (string) **required** - Name of organisation.
* body (object) **required**

### orgs.org.events.get
List public events for an organization.


```js
github.orgs.org.events.get({
  "org": ""
}, context)
```

#### Parameters
* org (string) **required** - Name of organisation.
* page (integer)

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
* org (string) **required** - Name of organisation.
* filter (string) **required** - Issues assigned to you / created by you / mentioning you / you're
* state (string) **required**
* labels (string) **required** - String list of comma separated Label names. Example - bug,ui,@high.
* sort (string) **required**
* direction (string) **required**
* since (string) - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

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
* org (string) **required** - Name of organisation.
* page (integer)

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
* org (string) **required** - Name of organisation.
* username (string) **required** - Name of the user.

### orgs.org.members.username.get
Check if a user is, publicly or privately, a member of the organization.


```js
github.orgs.org.members.username.get({
  "org": "",
  "username": ""
}, context)
```

#### Parameters
* org (string) **required** - Name of organisation.
* username (string) **required** - Name of the user.

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
* org (string) **required** - Name of organisation.
* page (integer)

### orgs.org.public_members.username.delete
Conceal a user's membership.


```js
github.orgs.org.public_members.username.delete({
  "org": "",
  "username": ""
}, context)
```

#### Parameters
* org (string) **required** - Name of organisation.
* username (string) **required** - Name of the user.

### orgs.org.public_members.username.get
Check public membership.


```js
github.orgs.org.public_members.username.get({
  "org": "",
  "username": ""
}, context)
```

#### Parameters
* org (string) **required** - Name of organisation.
* username (string) **required** - Name of the user.

### orgs.org.public_members.username.put
Publicize a user's membership.


```js
github.orgs.org.public_members.username.put({
  "org": "",
  "username": ""
}, context)
```

#### Parameters
* org (string) **required** - Name of organisation.
* username (string) **required** - Name of the user.

### orgs.org.repos.get
List repositories for the specified org.


```js
github.orgs.org.repos.get({
  "org": ""
}, context)
```

#### Parameters
* org (string) **required** - Name of organisation.
* type (string)
* page (integer)

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
* org (string) **required** - Name of organisation.
* body (object) **required**

### orgs.org.teams.get
List teams.


```js
github.orgs.org.teams.get({
  "org": ""
}, context)
```

#### Parameters
* org (string) **required** - Name of organisation.
* page (integer)

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
* org (string) **required** - Name of organisation.
* body (object) **required**

### rate_limit.get
Get your current rate limit status
Note: Accessing this endpoint does not count against your rate limit.



```js
github.rate_limit.get(null, context)
```


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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.

### repos.owner.repo.get
Get repository.


```js
github.repos.owner.repo.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* assignee (string) **required** - Login of the assignee.

### repos.owner.repo.branches.get
Get list of branches


```js
github.repos.owner.repo.branches.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* branch (string) **required** - Name of the branch.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* user (string) **required** - Login of the user.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* user (string) **required** - Login of the user.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* user (string) **required** - Login of the user.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* commentId (integer) **required** - Id of comment.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* commentId (integer) **required** - Id of comment.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* commentId (integer) **required** - Id of comment.
* body (object) **required**

### repos.owner.repo.commits.get
List commits on a repository.


```js
github.repos.owner.repo.commits.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* since (string) - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* sha (string) - Sha or branch to start listing commits from.
* path (string) - Only commits containing this file path will be returned.
* author (string) - GitHub login, name, or email by which to filter by commit author.
* until (string) - ISO 8601 Date - Only commits before this date will be returned.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* ref (string) **required**
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* shaCode (string) **required** - SHA-1 code of the commit.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* shaCode (string) **required** - SHA-1 code of the commit.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* shaCode (string) **required** - SHA-1 code of the commit.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* baseId (string) **required**
* headId (string) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* path (string) **required**
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* path (string) **required**
* path_query (string) - The content path.
* ref (string) - The String name of the Commit/Branch/Tag. Defaults to 'master'.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* path (string) **required**
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* anon (string) **required** - Set to 1 or true to include anonymous contributors in results.
* page (integer)

### repos.owner.repo.deployments.get
Users with pull access can view deployments for a repository


```js
github.repos.owner.repo.deployments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* id (integer) **required** - The Deployment ID to list the statuses from.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* id (integer) **required** - The Deployment ID to list the statuses from.
* body (object) **required**

### repos.owner.repo.downloads.get
Deprecated. List downloads for a repository.


```js
github.repos.owner.repo.downloads.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* downloadId (integer) **required** - Id of download.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* downloadId (integer) **required** - Id of download.

### repos.owner.repo.events.get
Get list of repository events.


```js
github.repos.owner.repo.events.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

### repos.owner.repo.forks.get
List forks.


```js
github.repos.owner.repo.forks.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* sort (string)
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* shaCode (string) **required** - SHA-1 code.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* shaCode (string) **required** - SHA-1 code.

### repos.owner.repo.git.refs.get
Get all References


```js
github.repos.owner.repo.git.refs.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* ref (string) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* ref (string) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* ref (string) **required**
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* shaCode (string) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* shaCode (string) **required** - Tree SHA.
* recursive (integer) - Get a Tree Recursively. (0 or 1)

### repos.owner.repo.hooks.get
Get list of hooks.


```js
github.repos.owner.repo.hooks.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* hookId (integer) **required** - Id of hook.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* hookId (integer) **required** - Id of hook.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* hookId (integer) **required** - Id of hook.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* hookId (integer) **required** - Id of hook.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* filter (string) **required** - Issues assigned to you / created by you / mentioning you / you're
* state (string) **required**
* labels (string) **required** - String list of comma separated Label names. Example - bug,ui,@high.
* sort (string) **required**
* direction (string) **required**
* since (string) - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

### repos.owner.repo.issues.comments.get
List comments in a repository.


```js
github.repos.owner.repo.issues.comments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* direction (string) - Ignored without 'sort' parameter.
* sort (string)
* since (string) - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* commentId (integer) **required** - ID of comment.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* commentId (integer) **required** - ID of comment.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* commentId (integer) **required** - ID of comment.
* body (object) **required**

### repos.owner.repo.issues.events.get
List issue events for a repository.


```js
github.repos.owner.repo.issues.events.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* eventId (integer) **required** - Id of the event.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.
* body (array) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.
* body (array) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of issue.
* name (string) **required** - Name of the label.

### repos.owner.repo.keys.get
Get list of keys.


```js
github.repos.owner.repo.keys.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* keyId (integer) **required** - Id of key.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* keyId (integer) **required** - Id of key.

### repos.owner.repo.labels.get
List all labels for this repository.


```js
github.repos.owner.repo.labels.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (array) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* name (string) **required** - Name of the label.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* name (string) **required** - Name of the label.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* name (string) **required** - Name of the label.
* body (array) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

### repos.owner.repo.milestones.get
List milestones for a repository.


```js
github.repos.owner.repo.milestones.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* state (string) - String to filter by state.
* direction (string) - Ignored without 'sort' parameter.
* sort (string)
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of milestone.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of milestone.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of milestone.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Number of milestone.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* all (boolean) - True to show notifications marked as read.
* participating (boolean) - True to show only notifications in which the user is directly participating
* since (string) - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

### repos.owner.repo.pulls.get
List pull requests.


```js
github.repos.owner.repo.pulls.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* state (string) - String to filter by state.
* head (string) - Filter pulls by head user and branch name in the format of 'user:ref-name'.
* base (string) - Filter pulls by base branch name. Example - gh-pages.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* direction (string) - Ignored without 'sort' parameter.
* sort (string)
* since (string) - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* commentId (integer) **required** - Id of comment.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* commentId (integer) **required** - Id of comment.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* commentId (integer) **required** - Id of comment.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Id of pull.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Id of pull.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Id of pull.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Id of pull.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Id of pull.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Id of pull.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Id of pull.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* number (integer) **required** - Id of pull.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* ref (string) - The String name of the Commit/Branch/Tag. Defaults to master.

### repos.owner.repo.releases.get
Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only


```js
github.repos.owner.repo.releases.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* id (string) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* id (string) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* id (string) **required**
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* id (string) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* id (string) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* id (string) **required**
* body (object) **required**

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* id (string) **required**
* page (integer)

### repos.owner.repo.stargazers.get
List Stargazers.


```js
github.repos.owner.repo.stargazers.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.

### repos.owner.repo.stats.contributors.get
Get contributors list with additions, deletions, and commit counts.


```js
github.repos.owner.repo.stats.contributors.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

### repos.owner.repo.stats.participation.get
Get the weekly commit count for the repo owner and everyone else.


```js
github.repos.owner.repo.stats.participation.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* ref (string) **required** - Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* ref (string) **required** - Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
* body (object) **required**

### repos.owner.repo.subscribers.get
List watchers.


```js
github.repos.owner.repo.subscribers.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

### repos.owner.repo.subscription.delete
Delete a Repository Subscription.


```js
github.repos.owner.repo.subscription.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.

### repos.owner.repo.subscription.get
Get a Repository Subscription.


```js
github.repos.owner.repo.subscription.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* body (object) **required**

### repos.owner.repo.tags.get
Get list of tags.


```js
github.repos.owner.repo.tags.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

### repos.owner.repo.teams.get
Get list of teams


```js
github.repos.owner.repo.teams.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

### repos.owner.repo.watchers.get
List Stargazers. New implementation.


```js
github.repos.owner.repo.watchers.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* page (integer)

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
* owner (string) **required** - Name of repository owner.
* repo (string) **required** - Name of repository.
* archive_format (string) **required**
* path (string) **required** - Valid Git reference, defaults to 'master'.

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
* since (string) - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

### search.code.get
Search code.


```js
github.search.code.get({
  "q": ""
}, context)
```

#### Parameters
* order (string) - The sort field. if sort param is provided. Can be either asc or desc.
* q (string) **required** - The search terms. This can be any combination of the supported code
* sort (string) - Can only be 'indexed', which indicates how recently a file has been indexed

### search.issues.get
Find issues by state and keyword. (This method returns up to 100 results per page.)


```js
github.search.issues.get({
  "q": ""
}, context)
```

#### Parameters
* order (string) - The sort field. if sort param is provided. Can be either asc or desc.
* q (string) **required** - The q search term can also contain any combination of the supported issue search qualifiers:
* sort (string) - The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
* page (integer)

### search.repositories.get
Search repositories.


```js
github.search.repositories.get({
  "q": ""
}, context)
```

#### Parameters
* order (string) - The sort field. if sort param is provided. Can be either asc or desc.
* q (string) **required** - The search terms. This can be any combination of the supported repository
* sort (string) - If not provided, results are sorted by best match.
* page (integer)

### search.users.get
Search users.


```js
github.search.users.get({
  "q": ""
}, context)
```

#### Parameters
* order (string) - The sort field. if sort param is provided. Can be either asc or desc.
* q (string) **required** - The search terms. This can be any combination of the supported user
* sort (string) - If not provided, results are sorted by best match.
* page (integer)

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
* teamId (integer) **required** - Id of team.

### teams.teamId.get
Get team.


```js
github.teams.teamId.get({
  "teamId": 0
}, context)
```

#### Parameters
* teamId (integer) **required** - Id of team.

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
* teamId (integer) **required** - Id of team.
* body (object) **required**

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
* teamId (integer) **required** - Id of team.
* page (integer)

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
* teamId (integer) **required** - Id of team.
* username (string) **required** - Name of a member.

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
* teamId (integer) **required** - Id of team.
* username (string) **required** - Name of a member.

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
* teamId (integer) **required** - Id of team.
* username (string) **required** - Name of a member.

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
* teamId (integer) **required** - Id of team.
* username (string) **required** - Name of a member.

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
* teamId (integer) **required** - Id of team.
* username (string) **required** - Name of a member.

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
* teamId (integer) **required** - Id of team.
* username (string) **required** - Name of a member.

### teams.teamId.repos.get
List team repos


```js
github.teams.teamId.repos.get({
  "teamId": 0
}, context)
```

#### Parameters
* teamId (integer) **required** - Id of team.
* page (integer)

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
* teamId (integer) **required** - Id of team.
* org (string) **required** - Name of a organization.
* repo (string) **required** - Name of a repository.

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
* teamId (integer) **required** - Id of team.
* owner (string) **required** - Name of a repository owner.
* repo (string) **required** - Name of a repository.

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
* teamId (integer) **required** - Id of team.
* owner (string) **required** - Name of a repository owner.
* repo (string) **required** - Name of a repository.

### user.get
Get the authenticated user.


```js
github.user.get(null, context)
```


### user.patch
Update the authenticated user.


```js
github.user.patch({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### user.emails.delete
Delete email address(es).
You can include a single email address or an array of addresses.



```js
github.user.emails.delete({
  "body": []
}, context)
```

#### Parameters
* body (array) **required**

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
* page (integer)

### user.emails.post
Add email address(es).
You can post a single email address or an array of addresses.



```js
github.user.emails.post({
  "body": []
}, context)
```

#### Parameters
* body (array) **required**

### user.followers.get
List the authenticated user's followers


```js
github.user.followers.get({}, context)
```

#### Parameters
* page (integer)

### user.following.get
List who the authenticated user is following.


```js
github.user.following.get(null, context)
```


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
* username (string) **required** - Name of user.

### user.following.username.get
Check if you are following a user.


```js
github.user.following.username.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.

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
* username (string) **required** - Name of user.

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
* filter (string) **required** - Issues assigned to you / created by you / mentioning you / you're
* state (string) **required**
* labels (string) **required** - String list of comma separated Label names. Example - bug,ui,@high.
* sort (string) **required**
* direction (string) **required**
* since (string) - Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

### user.keys.get
List your public keys.
Lists the current user's keys. Management of public keys via the API requires
that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.



```js
github.user.keys.get({}, context)
```

#### Parameters
* page (integer)

### user.keys.post
Create a public key.


```js
github.user.keys.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### user.keys.keyId.delete
Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.


```js
github.user.keys.keyId.delete({
  "keyId": 0
}, context)
```

#### Parameters
* keyId (integer) **required** - ID of key.

### user.keys.keyId.get
Get a single public key.


```js
github.user.keys.keyId.get({
  "keyId": 0
}, context)
```

#### Parameters
* keyId (integer) **required** - ID of key.

### user.orgs.get
List public and private organizations for the authenticated user.


```js
github.user.orgs.get({}, context)
```

#### Parameters
* page (integer)

### user.repos.get
List repositories for the authenticated user. Note that this does not include
repositories owned by organizations which the user can access. You can lis
user organizations and list organization repositories separately.



```js
github.user.repos.get({}, context)
```

#### Parameters
* type (string)
* page (integer)

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
* body (object) **required**

### user.starred.get
List repositories being starred by the authenticated user.


```js
github.user.starred.get({}, context)
```

#### Parameters
* direction (string) - Ignored without 'sort' parameter.
* sort (string)

### user.starred.owner.repo.delete
Unstar a repository


```js
github.user.starred.owner.repo.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of a repository owner.
* repo (string) **required** - Name of a repository.

### user.starred.owner.repo.get
Check if you are starring a repository.


```js
github.user.starred.owner.repo.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of a repository owner.
* repo (string) **required** - Name of a repository.

### user.starred.owner.repo.put
Star a repository.


```js
github.user.starred.owner.repo.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of a repository owner.
* repo (string) **required** - Name of a repository.

### user.subscriptions.get
List repositories being watched by the authenticated user.


```js
github.user.subscriptions.get({}, context)
```

#### Parameters
* page (integer)

### user.subscriptions.owner.repo.delete
Stop watching a repository


```js
github.user.subscriptions.owner.repo.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of the owner.
* repo (string) **required** - Name of repository.

### user.subscriptions.owner.repo.get
Check if you are watching a repository.


```js
github.user.subscriptions.owner.repo.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of the owner.
* repo (string) **required** - Name of repository.

### user.subscriptions.owner.repo.put
Watch a repository.


```js
github.user.subscriptions.owner.repo.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Parameters
* owner (string) **required** - Name of the owner.
* repo (string) **required** - Name of repository.

### user.teams.get
List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.


```js
github.user.teams.get({}, context)
```

#### Parameters
* page (integer)

### users.get
Get all users.
This provides a dump of every user, in the order that they signed up for GitHub.
Note: Pagination is powered exclusively by the since parameter. Use the Link
header to get the URL for the next page of users.



```js
github.users.get({}, context)
```

#### Parameters
* since (integer) - The integer ID of the last User that you've seen.
* page (integer)

### users.username.get
Get a single user.


```js
github.users.username.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.

### users.username.events.get
If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.


```js
github.users.username.events.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* page (integer)

### users.username.events.orgs.org.get
This is the user's organization dashboard. You must be authenticated as the user to view this.


```js
github.users.username.events.orgs.org.get({
  "username": "",
  "org": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* org (string) **required**

### users.username.followers.get
List a user's followers


```js
github.users.username.followers.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* page (integer)

### users.username.following.targetUser.get
Check if one user follows another.


```js
github.users.username.following.targetUser.get({
  "username": "",
  "targetUser": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* targetUser (string) **required** - Name of user.

### users.username.gists.get
List a users gists.


```js
github.users.username.gists.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* since (string) - The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
* page (integer)

### users.username.keys.get
List public keys for a user.
Lists the verified public keys for a user. This is accessible by anyone.



```js
github.users.username.keys.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* page (integer)

### users.username.orgs.get
List all public organizations for a user.


```js
github.users.username.orgs.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* page (integer)

### users.username.received_events.get
These are events that you'll only see public events.


```js
github.users.username.received_events.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* page (integer)

### users.username.received_events.public.get
List public events that a user has received


```js
github.users.username.received_events.public.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.

### users.username.repos.get
List public repositories for the specified user.


```js
github.users.username.repos.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* type (string)
* page (integer)

### users.username.starred.get
List repositories being starred by a user.


```js
github.users.username.starred.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.

### users.username.subscriptions.get
List repositories being watched by a user.


```js
github.users.username.subscriptions.get({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Name of user.
* page (integer)

