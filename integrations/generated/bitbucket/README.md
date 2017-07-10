# @datafire/bitbucket
Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: addon.delete


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: addon.put


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: addon.linkers.get


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: addon.linkers.linker_key.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "linker_key": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "linker_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: addon.linkers.linker_key.values.delete


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "linker_key": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "linker_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: addon.linkers.linker_key.values.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "linker_key": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "linker_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: addon.linkers.linker_key.values.post


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "linker_key": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "linker_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: addon.linkers.linker_key.values.put


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "linker_key": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "linker_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: addon.linkers.linker_key.values.delete


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "linker_key": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "linker_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: addon.linkers.linker_key.values.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "linker_key": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "linker_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: hook_events.get
Returns the webhook resource or subject types on which webhooks can
be registered.

Each resource/subject type contains an `events` link that returns the
paginated list of specific events each individual subject type can
emit.

This endpoint is publicly accessible and does not require
authentication or scopes.

Example:

```
$ curl https://api.bitbucket.org/2.0/hook_events

{
    "repository": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/repository"
            }
        }
    },
    "team": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/team"
            }
        }
    },
    "user": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/user"
            }
        }
    }
}
```

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/subject_types"
}
```
## Operation: hook_events.subject_type.get
Returns a paginated list of all valid webhook events for the
specified entity.

This is public data that does not require any scopes or authentication.

Example:

NOTE: The following example is a truncated response object for the `team` `subject_type`.
We return the same structure for the other `subject_type` objects.

```
$ curl https://api.bitbucket.org/2.0/hook_events/team
{
    "page": 1,
    "pagelen": 30,
    "size": 21,
    "values": [
        {
            "category": "Repository",
            "description": "Whenever a repository push occurs",
            "event": "repo:push",
            "label": "Push"
        },
        {
            "category": "Repository",
            "description": "Whenever a repository fork occurs",
            "event": "repo:fork",
            "label": "Fork"
        },
        ...
        {
            "category": "Repository",
            "description": "Whenever a repository import occurs",
            "event": "repo:imported",
            "label": "Import"
        }
    ]
}
```

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subject_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "subject_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_hook_events"
}
```
## Operation: repositories.get
Returns a paginated list of all public repositories.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../meta/filtering) for more details.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "Filter the results to include only repositories create on or\nafter this [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)\n timestamp. Example: `YYYY-MM-DDTHH:mm:ss.sssZ`"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_repositories"
}
```
## Operation: repositories.username.get
Returns a paginated list of all repositories owned by the specified
account or UUID.

The result can be narrowed down based on the authenticated user's role.

E.g. with `?role=contributor`, only those repositories that the
authenticated user has write access to are returned (this includes any
repo the user is an admin on, as that implies write access).

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../../meta/filtering) for more details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "role": {
      "type": "string",
      "description": "\nFilters the result based on the authenticated user's role on each repository.\n\n* **member**: returns repositories to which the user has explicit read access\n* **contributor**: returns repositories to which the user has explicit write access\n* **admin**: returns repositories to which the user has explicit administrator access\n* **owner**: returns all repositories owned by the current user\n",
      "enum": [
        "admin",
        "contributor",
        "member",
        "owner"
      ]
    },
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_repositories"
}
```
## Operation: repositories.username.repo_slug.delete
Deletes the repository. This is an irreversible operation.

This does not affect its forks.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.get
Returns the object describing this repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repository"
}
```
## Operation: repositories.username.repo_slug.post
Creates a new repository.

Note: In order to set the project for the newly created repository,
pass in either the project key or the project UUID as part of the
request body as shown in the examples below:

```
$ curl -X POST -H "Content-Type: application/json" -d '{
    "scm": "git",
    "project": {
        "key": "MARS"
    }
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
```

or

```
$ curl -X POST -H "Content-Type: application/json" -d '{
    "scm": "git",
    "project": {
        "key": "{ba516952-992a-4c2d-acbd-17d502922f96}"
    }
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
```

The project must only be assigned for repositories belonging to a team.
If the repository owner is a team and the project is not provided, the
repository is automatically assigned to the oldest project in the team.

Note: In the examples above, the username `teamsinspace`,
and/or the repository name `hablanding` can be replaced by UUIDs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/repository"
    },
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repository"
}
```
## Operation: repositories.username.repo_slug.put
Since this endpoint can be used to both update and to create a
repository, the request body depends on the intent.

### Creation

See the POST documentation for the repository endpoint for an example
of the request body.

### Update

Note: Changing the `name` of the repository will cause the location to
be changed. This is because the URL of the repo is derived from the
name (a process called slugification). In such a scenario, it is
possible for the request to fail if the newly created slug conflicts
with an existing repository's slug. But if there is no conflict,
the new location will be returned in the `Location` header of the
response.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/repository"
    },
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/repository"
}
```
## Operation: repositories.username.repo_slug.branch_restrictions.get
Returns a paginated list of all branch restrictions on the
repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_branchrestrictions"
}
```
## Operation: repositories.username.repo_slug.branch_restrictions.post
Creates a new branch restriction rule for a repository.

`kind` describes what will be restricted. Allowed values are: `push`,
`force`, `delete`, and `restrict_merges`.

Different kinds of branch restrictions have different requirements:

* `push` and `restrict_merges` require `users` and `groups` to be
  specified. Empty lists are allowed, in which case permission is
  denied for everybody.
* `force` can not be specified in a Mercurial repository.

`pattern` is used to determine which branches will be restricted.

A `'*'` in `pattern` will expand to match zero or more characters, and
every other character matches itself. For example, `'foo*'` will match
`'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all
branches.

`users` and `groups` are lists of user names and group names.

`kind` and `pattern` must be unique within a repository; adding new
users or groups to an existing restriction should be done via `PUT`.

Note that branch restrictions with overlapping patterns are allowed,
but the resulting behavior may be surprising.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/branchrestriction"
    },
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "_body",
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/branchrestriction"
}
```
## Operation: repositories.username.repo_slug.branch_restrictions.id.delete
Deletes an existing branch restriction rule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.branch_restrictions.id.get
Returns a specific branch restriction rule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/branchrestriction"
}
```
## Operation: repositories.username.repo_slug.branch_restrictions.id.put
Updates an existing branch restriction rule.

Fields not present in the request body are ignored.

See [`POST`](../../branch-restrictions#post) for details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/branchrestriction"
    },
    "username": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "_body",
    "username",
    "id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/branchrestriction"
}
```
## Operation: repositories.username.repo_slug.commit.node.approve.delete
Redact the authenticated user's approval of the specified commit.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "node": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "node",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.commit.node.approve.post
Approve the specified commit as the authenticated user.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "node": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "node",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/participant"
}
```
## Operation: repositories.username.repo_slug.commit.node.statuses.get
Returns all statuses (e.g. build results) for a specific commit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "node": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "node",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_commitstatuses"
}
```
## Operation: repositories.username.repo_slug.commit.node.statuses.build.post
Creates a new build status against the specified commit.

If the specified key already exists, the existing status object will
be overwritten.

When creating a new commit status, you can use a URI template for the URL.
Templates are URLs that contain variable names that Bitbucket will
evaluate at runtime whenever the URL is displayed anywhere similar to
parameter substitution in
[Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
For example, one could use `https://foo.com/builds/{repository.full_name}`
which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
The context variables available are `repository` and `commit`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "node": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "node",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commitstatus"
}
```
## Operation: repositories.username.repo_slug.commit.node.statuses.build.key.get
Returns the specified build status for a commit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "node": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "node",
    "key",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commitstatus"
}
```
## Operation: repositories.username.repo_slug.commit.node.statuses.build.key.put
Used to update the current status of a build status object on the
specific commit.

This operation can also be used to change other properties of the
build status:

* `state`
* `name`
* `description`
* `url`
* `refname`

The `key` cannot be changed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/commitstatus"
    },
    "username": {
      "type": "string"
    },
    "node": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "node",
    "key",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commitstatus"
}
```
## Operation: repositories.username.repo_slug.commit.revision.get
Returns the specified commit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "revision": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "revision",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/commit"
}
```
## Operation: repositories.username.repo_slug.commit.sha.comments.get
Returns the commit's comments.

This includes both global and inline comments.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "sha": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "sha",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.commit.sha.comments.comment_id.get
Returns the specified commit comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "sha": {
      "type": "string"
    },
    "comment_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "sha",
    "comment_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.commits.get
These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log` and
`hg log`. Like these tools, the DAG can be filtered.

## GET /repositories/{username}/{repo_slug}/commits/

Returns all commits in the repo in topological order (newest commit
first). All branches and tags are included (similar to
`git log --all` and `hg log`).

## GET /repositories/{username}/{repo_slug}/commits/master

Returns all commits on rev `master` (similar to `git log master`,
`hg log master`).

## GET /repositories/{username}/{repo_slug}/commits/dev?exclude=master

Returns all commits on ref `dev`, except those that are reachable on
`master` (similar to `git log dev ^master`).

## GET /repositories/{username}/{repo_slug}/commits/?exclude=master

Returns all commits in the repo that are not on master
(similar to `git log --all ^master`).

## GET /repositories/{username}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
`fubar` (similar to `git log foo bar ^fu ^fubar`).

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than ca fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.commits.post
Identical to `GET /repositories/{username}/{repo_slug}/commits`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.commits.revision.get
These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log` and
`hg log`. Like these tools, the DAG can be filtered.

## GET /repositories/{username}/{repo_slug}/commits/

Returns all commits in the repo in topological order (newest commit
first). All branches and tags are included (similar to
`git log --all` and `hg log`).

## GET /repositories/{username}/{repo_slug}/commits/master

Returns all commits on rev `master` (similar to `git log master`,
`hg log master`).

## GET /repositories/{username}/{repo_slug}/commits/dev?exclude=master

Returns all commits on ref `dev`, except those that are reachable on
`master` (similar to `git log dev ^master`).

## GET /repositories/{username}/{repo_slug}/commits/?exclude=master

Returns all commits in the repo that are not on master
(similar to `git log --all ^master`).

## GET /repositories/{username}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
`fubar` (similar to `git log foo bar ^fu ^fubar`).

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than ca fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "revision": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "revision",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.commits.revision.post
Identical to `GET /repositories/{username}/{repo_slug}/commits`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "revision": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "revision",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.components.get
Returns the components that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_components"
}
```
## Operation: repositories.username.repo_slug.components.component_id.get
Returns the specified issue tracker component object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "component_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "component_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/component"
}
```
## Operation: repositories.username.repo_slug.default_reviewers.get
Returns the repository's default reviewers.

These are the users that are automatically added as reviewers on every
new pull request that is created.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.default_reviewers.target_username.delete
Removes a default reviewer from the repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "target_username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "target_username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.default_reviewers.target_username.get
Returns the specified reviewer.

This can be used to test whether a user is among the repository's
default reviewers list. A 404 indicates that that specified user is not
a default reviewer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "target_username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "target_username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.default_reviewers.target_username.put
Adds the specified user to the repository's list of default
reviewers.

This method is idempotent. Adding a user a second time has no effect.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "target_username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "target_username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.diff.spec.get
Produces a raw, git-style diff for either a single commit (diffed
against its first parent), or a revspec of 2 commits (e.g.
`3a8b42..9ff173` where the first commit represents the source and the
second commit the destination).

In case of the latter (diffing a revspec), a 3-way diff, or merge diff,
is computed. This shows the changes introduced by the left branch
(`3a8b42` in our example) as compared againt the right branch
(`9ff173`).

This is equivalent to merging the left branch into the right branch and
then computing the diff of the merge commit against its first parent
(the right branch). This follows the same behavior as pull requests
that also show this style of 3-way, or merge diff.

While similar to patches, diffs:

* Don't have a commit header (username, commit message, etc)
* Support the optional `path=foo/bar.py` query param to filter
  the diff to just that one file diff

The raw diff is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "context": {
      "type": "integer",
      "description": "Generate diffs with <n> lines of context instead of the usual three"
    },
    "path": {
      "type": "string",
      "description": "Limit the diff to a single file"
    },
    "username": {
      "type": "string"
    },
    "spec": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "spec",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.downloads.get
Returns a list of download links associated with the repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.downloads.post
Upload new download artifacts.

To upload files, perform a `multipart/form-data` POST containing one
or more `files` fields:

    $ echo Hello World > hello.txt
    $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

When a file is uploaded with the same name as an existing artifact,
then the existing file will be replaced.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.downloads.filename.delete
Deletes the specified download artifact from the repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "filename": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "filename",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.downloads.filename.get
Return a redirect to the contents of a download artifact.

This endpoint returns the actual file contents and not the artifact's
metadata.

    $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
    Hello World

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "filename": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "filename",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.forks.get
Returns a paginated list of all the forks of the specified
repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_repositories"
}
```
## Operation: repositories.username.repo_slug.hooks.get
Returns a paginated list of webhooks installed on this repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_webhook_subscriptions"
}
```
## Operation: repositories.username.repo_slug.hooks.post
Creates a new webhook on the specified repository.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'           https://api.bitbucket.org/2.0/repositories/username/slug/hooks           -d '
    {
      "description": "Webhook Description",
      "url": "https://example.com/",
      "active": true,
      "events": [
        "repo:push",
        "issue:created",
        "issue:updated"
      ]
    }'
```

Note that this call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

Also note that the `url` must properly resolve and cannot be an
internal, non-routed address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook_subscription"
}
```
## Operation: repositories.username.repo_slug.hooks.uid.delete
Deletes the specified webhook subscription from the given
repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "uid",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.hooks.uid.get
Returns the webhook with the specified id installed on the specified
repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "uid",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook_subscription"
}
```
## Operation: repositories.username.repo_slug.hooks.uid.put
Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "uid",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook_subscription"
}
```
## Operation: repositories.username.repo_slug.issues.get
Returns the issues in the issue tracker.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_issues"
}
```
## Operation: repositories.username.repo_slug.issues.post
Creates a new issue.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorisation.

The authenticated user is used for the issue's `reporter` field.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/issue"
    },
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "_body",
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issue"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.delete
Deletes the specified issue. This requires write access to the
repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issue"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.get
Returns the specified issue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/issue"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.attachments.get
Returns all attachments for this issue.

This returns the files' meta data. This does not return the files'
actual contents.

The files are always ordered by their upload date.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_issue_attachments"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.attachments.post
Upload new issue attachments.

To upload files, perform a `multipart/form-data` POST containing one
or more file fields.

When a file is uploaded with the same name as an existing attachment,
then the existing file will be replaced.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.issues.issue_id.attachments.path.delete
Deletes an attachment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "path": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "path",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.issues.issue_id.attachments.path.get
Returns the contents of the specified file attachment.

Note that this endpoint does not return a JSON response, but instead
returns a redirect pointing to the actual file that in turn will return
the raw contents.

The redirect URL contains a one-time token that has a limited lifetime.
As a result, the link should not be persisted, stored, or shared.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "path": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "path",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.issues.issue_id.comments.get
Returns all comments that were made on the specified issue.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.comments.comment_id.get
Returns the specified issue comment object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "comment_id": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "comment_id",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.vote.delete
Retract your vote.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.vote.get
Check whether the authenticated user has voted for this issue.
A 204 status code indicates that the user has voted, while a 404
implies they haven't.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.vote.put
Vote for this issue.

To cast your vote, do an empty PUT. The 204 status code indicates that
the operation was successful.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.watch.delete
Stop watching this issue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.watch.get
Indicated whether or not the authenticated user is watching this
issue.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.issues.issue_id.watch.put
Start watching this issue.

To start watching this issue, do an empty PUT. The 204 status code
indicates that the operation was successful.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "issue_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "issue_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.milestones.get
Returns the milestones that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_milestones"
}
```
## Operation: repositories.username.repo_slug.milestones.milestone_id.get
Returns the specified issue tracker milestone object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "milestone_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "milestone_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/milestone"
}
```
## Operation: repositories.username.repo_slug.patch.spec.get
Produces a raw patch for a single commit (diffed against its first
parent), or a patch-series for a revspec of 2 commits (e.g.
`3a8b42..9ff173` where the first commit represents the source and the
second commit the destination).

In case of the latter (diffing a revspec), a patch series is returned
for the commits on the source branch (`3a8b42` and its ancestors in
our example). For Mercurial, a single patch is returned that combines
the changes of all commits on the source branch.

While similar to diffs, patches:

* Have a commit header (username, commit message, etc)
* Do not support the `path=foo/bar.py` query parameter

The raw patch is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "spec": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "spec",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getPipelinesForRepository
Find pipelines

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_pipelines"
}
```
## Operation: createPipelineForRepository
Endpoint to create and initiate a pipeline. 
There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated.
# Trigger a Pipeline for a branch or tag
One way to trigger pipelines is by specifying the reference for which you want to trigger a pipeline (e.g. a branch or tag). 
The specified reference will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified reference.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
  -d '
  {
    "target": {
      "ref_type": "branch", 
      "type": "pipeline_ref_target", 
      "ref_name": "master"
    }
  }'
```
# Trigger a Pipeline for a commit on a branch or tag
You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark).
The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference. 

The following reference types are supported:

* `branch` 
* `named_branch`
* `bookmark` 
 * `tag`

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
  -d '
  {
    "target": {
      "commit": {
        "type": "commit", 
        "hash": "ce5b7431602f7cbba007062eeb55225c6e18e956"
      }, 
      "ref_type": "branch", 
      "type": "pipeline_ref_target", 
      "ref_name": "master"
    }
  }'
```
# Trigger a specific pipeline definition for a commit
You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit. 
In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
 -d '
  {
     "target": {
      "commit": {
         "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
         "type":"commit"
       },
        "selector": {
           "type":"custom",
              "pattern":"Deploy to production"
          },
        "type":"pipeline_commit_target"
   }
  }'
```
# Trigger a specific pipeline definition for a commit on a branch or tag
You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference. 
In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.

### Example

```
$ curl -X POST -is -u username:password \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
 -d '
  {
     "target": {
      "commit": {
         "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
         "type":"commit"
       },
       "selector": {
          "type": "custom",
          "pattern": "Deploy to production"
       },
       "type": "pipeline_ref_target",
       "ref_name": "master",
       "ref_type": "branch"
     }
  }'
```


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "_body": {
      "$ref": "#/definitions/pipeline"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline"
}
```
## Operation: getPipelineForRepository
Retrieve a specified pipeline

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "pipeline_uuid": {
      "type": "string",
      "description": "The pipeline UUID."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "pipeline_uuid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline"
}
```
## Operation: getPipelineStepsForRepository
Find steps for the given pipeline.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "pipeline_uuid": {
      "type": "string",
      "description": "The UUID of the pipeline."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "pipeline_uuid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_pipeline_steps"
}
```
## Operation: getPipelineStepForRepository
Retrieve a given step of a pipeline.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "pipeline_uuid": {
      "type": "string",
      "description": "The UUID of the pipeline."
    },
    "step_uuid": {
      "type": "string",
      "description": "The UUID of the step."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "pipeline_uuid",
    "step_uuid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_step"
}
```
## Operation: getPipelineStepLogForRepository
Retrieve the log file for a given step of a pipeline.

This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "pipeline_uuid": {
      "type": "string",
      "description": "The UUID of the pipeline."
    },
    "step_uuid": {
      "type": "string",
      "description": "The UUID of the step."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "pipeline_uuid",
    "step_uuid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: stopPipeline
Signal the stop of a pipeline and all of its steps that not have completed yet.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "pipeline_uuid": {
      "type": "string",
      "description": "The UUID of the pipeline."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "pipeline_uuid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRepositoryPipelineConfig
Retrieve the repository pipelines configuration.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipelines_config"
}
```
## Operation: updateRepositoryPipelineConfig
Update the pipelines configuration for a repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "_body": {
      "$ref": "#/definitions/pipelines_config"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipelines_config"
}
```
## Operation: deleteRepositoryPipelineKeyPair
Delete the repository SSH key pair.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRepositoryPipelineSshKeyPair
Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_ssh_key_pair"
}
```
## Operation: updateRepositoryPipelineKeyPair
Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "_body": {
      "$ref": "#/definitions/pipeline_ssh_key_pair"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_ssh_key_pair"
}
```
## Operation: getRepositoryPipelineKnownHosts
Find repository level known hosts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_pipeline_known_hosts"
}
```
## Operation: createRepositoryPipelineKnownHost
Create a repository level known host.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "_body": {
      "$ref": "#/definitions/pipeline_known_host"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_known_host"
}
```
## Operation: deleteRepositoryPipelineKnownHost
Delete a repository level known host.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "known_host_uuid": {
      "type": "string",
      "description": "The UUID of the known host to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "known_host_uuid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRepositoryPipelineKnownHost
Retrieve a repository level known host.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "known_host_uuid": {
      "type": "string",
      "description": "The UUID of the known host to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "known_host_uuid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_known_host"
}
```
## Operation: updateRepositoryPipelineKnownHost
Update a repository level known host.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "known_host_uuid": {
      "type": "string",
      "description": "The UUID of the known host to update."
    },
    "_body": {
      "$ref": "#/definitions/pipeline_known_host"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "known_host_uuid",
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_known_host"
}
```
## Operation: getRepositoryPipelineVariables
Find repository level variables.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_pipeline_variables"
}
```
## Operation: createRepositoryPipelineVariable
Create a repository level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "_body": {
      "$ref": "#/definitions/pipeline_variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_variable"
}
```
## Operation: deleteRepositoryPipelineVariable
Delete a repository level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "variable_uuid": {
      "type": "string",
      "description": "The UUID of the variable to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "variable_uuid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRepositoryPipelineVariable
Retrieve a repository level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "variable_uuid": {
      "type": "string",
      "description": "The UUID of the variable to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "variable_uuid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_variable"
}
```
## Operation: updateRepositoryPipelineVariable
Update a repository level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "repo_slug": {
      "type": "string",
      "description": "The repository."
    },
    "variable_uuid": {
      "type": "string",
      "description": "The UUID of the variable to update."
    },
    "_body": {
      "$ref": "#/definitions/pipeline_variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug",
    "variable_uuid",
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_variable"
}
```
## Operation: repositories.username.repo_slug.pullrequests.get
Returns a paginated list of all pull requests on the specified
repository. By default only open pull requests are returned. This can
be controlled using the `state` query parameter. To retrieve pull
requests that are in one of multiple states, repeat the `state`
parameter for each individual state.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../../../../meta/filtering) for more details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "state": {
      "type": "string",
      "description": "Only return pull requests that are in this state. This parameter can be repeated.",
      "enum": [
        "MERGED",
        "SUPERSEDED",
        "OPEN",
        "DECLINED"
      ]
    },
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_pullrequests"
}
```
## Operation: repositories.username.repo_slug.pullrequests.post
Creates a new pull request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/pullrequest"
    },
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullrequest"
}
```
## Operation: repositories.username.repo_slug.pullrequests.activity.get
Returns a paginated list of the pull request's activity log.

This includes comments that were made by the reviewers, updates and
approvals.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.get
Returns the specified pull request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullrequest"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.put
Mutates the specified pull request.

This can be used to change the pull request's branches or description.

Only open pull requests can be mutated.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/pullrequest"
    },
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullrequest"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.activity.get
Returns a paginated list of the pull request's activity log.

This includes comments that were made by the reviewers, updates and
approvals.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.approve.delete
Redact the authenticated user's approval of the specified pull
request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.approve.post
Approve the specified pull request as the authenticated user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.comments.get
Returns a paginated list of the pull request's comments.

This includes both global, inline comments and replies.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](../../../../../../meta/filtering) for more
details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.comments.comment_id.get
Returns a specific pull request comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "comment_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "comment_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.commits.get
Returns a paginated list of the pull request's commits.

These are the commits that are being merged into the destination
branch when the pull requests gets accepted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.decline.post
Declines the pull request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullrequest"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.diff.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.merge.post
Merges the pull request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/pullrequest_merge_parameters"
    },
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pullrequest"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.patch.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.pullrequests.pull_request_id.statuses.get
Returns all statuses (e.g. build results) for the given pull
request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "pull_request_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "pull_request_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_commitstatuses"
}
```
## Operation: repositories.username.repo_slug.refs.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.refs.branches.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.refs.branches.name.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "name",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.refs.tags.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "\nThe username for the owner of the repository. This can either be the\n`username` of the owner or the `UUID` of the owner (surrounded by\ncurly-braces (`{}`)). Owners can be users or teams.\n"
    },
    "repo_slug": {
      "type": "string",
      "description": "\nThe repo slug for the repository.  This can either be the `repo_slug` of\nthe repository or the `UUID` of the repository (surrounded by\ncurly-braces (`{}`))\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.refs.tags.post
Creates a new tag in the specified repository.

The payload of the POST should consist of a JSON document that
contains the name of the tag and the target hash.

```
{
    "name" : "new tag name",
    "target" : {
        "hash" : "target commit hash",
    }
}
```

This endpoint does support using short hash prefixes for the commit
hash, but it may return a 400 response if the provided prefix is
ambiguous. Using a full commit hash is the preferred approach.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/tag"
    },
    "username": {
      "type": "string",
      "description": "\nThe username for the owner of the repository. This can either be the\n`username` of the owner or the `UUID` of the owner (surrounded by\ncurly-braces (`{}`)). Owners can be users or teams.\n"
    },
    "repo_slug": {
      "type": "string",
      "description": "\nThe repo slug for the repository.  This can either be the `repo_slug` of\nthe repository or the `UUID` of the repository (surrounded by\ncurly-braces (`{}`))\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "_body",
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tag"
}
```
## Operation: repositories.username.repo_slug.refs.tags.name.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "name",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: repositories.username.repo_slug.versions.get
Returns the versions that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_versions"
}
```
## Operation: repositories.username.repo_slug.versions.version_id.get
Returns the specified issue tracker version object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "version_id": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "version_id",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/version"
}
```
## Operation: repositories.username.repo_slug.watchers.get
Returns a paginated list of all the watchers on the specified
repository.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "repo_slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "repo_slug"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: snippets.get
Returns all snippets. Like pull requests, repositories and teams, the
full set of snippets is defined by what the current user has access to.

This includes all snippets owned by the current user, but also all snippets
owned by any of the teams the user is a member of, or snippets by other
users that the current user is either watching or has collaborated on (for
instance by commenting on it).

To limit the set of returned snippets, apply the
`?role=[owner|contributor|member]` query parameter where the roles are
defined as follows:

* `owner`: all snippets owned by the current user
* `contributor`: all snippets owned by, or watched by the current user
* `member`: owned by the user, their teams, or watched by the current user

When no role is specified, all public snippets are returned, as well as all
privately owned snippets watched or commented on.

The returned response is a normal paginated JSON list. This endpoint
only supports `application/json` responses and no
`multipart/form-data` or `multipart/related`. As a result, it is not
possible to include the file contents.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "role": {
      "type": "string",
      "description": "Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).",
      "enum": [
        "owner",
        "contributor",
        "member"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_snippets"
}
```
## Operation: snippets.post
Creates a new snippet under the authenticated user's account.

Snippets can contain multiple files. Both text and binary files are
supported.

The simplest way to create a new snippet from a local file:

    $ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file=@image.png

Creating snippets through curl has a few limitations and so let's look
at a more complicated scenario.

Snippets are created with a multipart POST. Both `multipart/form-data`
and `multipart/related` are supported. Both allow the creation of
snippets with both meta data (title, etc), as well as multiple text
and binary files.

The main difference is that `multipart/related` can use rich encoding
for the meta data (currently JSON).


multipart/related (RFC-2387)
----------------------------

This is the most advanced and efficient way to create a paste.

    POST /2.0/snippets/evzijst HTTP/1.1
    Content-Length: 1188
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
      "title": "My snippet",
      "is_private": true,
      "scm": "hg",
      "files": {
          "foo.txt": {},
          "image.png": {}
        }
    }

    --===============1438169132528273974==
    Content-Type: text/plain; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-ID: "foo.txt"
    Content-Disposition: attachment; filename="foo.txt"

    foo

    --===============1438169132528273974==
    Content-Type: image/png
    MIME-Version: 1.0
    Content-Transfer-Encoding: base64
    Content-ID: "image.png"
    Content-Disposition: attachment; filename="image.png"

    iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
    TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
    cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
    EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
    73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
    AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
    --===============1438169132528273974==--

The request contains multiple parts and is structured as follows.

The first part is the JSON document that describes the snippet's
properties or meta data. It either has to be the first part, or the
request's `Content-Type` header must contain the `start` parameter to
point to it.

The remaining parts are the files of which there can be zero or more.
Each file part should contain the `Content-ID` MIME header through
which the JSON meta data's `files` element addresses it. The value
should be the name of the file.

`Content-Disposition` is an optional MIME header. The header's
optional `filename` parameter can be used to specify the file name
that Bitbucket should use when writing the file to disk. When present,
`filename` takes precedence over the value of `Content-ID`.

When the JSON body omits the `files` element, the remaining parts are
not ignored. Instead, each file is added to the new snippet as if its
name was explicitly linked (the use of the `files` elements is
mandatory for some operations like deleting or renaming files).


multipart/form-data
-------------------

The use of JSON for the snippet's meta data is optional. Meta data can
also be supplied as regular form fields in a more conventional
`multipart/form-data` request:

    $ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title="My snippet"               -F file=@foo.txt -F file=@image.png

    POST /2.0/snippets HTTP/1.1
    Content-Length: 951
    Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="file"; filename="foo.txt"
    Content-Type: text/plain

    foo

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="file"; filename="image.png"
    Content-Type: application/octet-stream

    ?PNG

    IHDR?1??I.....
    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="title"

    My snippet
    ------------------------------63a4b224c59f--

Here the meta data properties are included as flat, top-level form
fields. The file attachments use the `file` field name. To attach
multiple files, simply repeat the field.

The advantage of `multipart/form-data` over `multipart/related` is
that it can be easier to build clients.

Essentially all properties are optional, `title` and `files` included.


Sharing and Visibility
----------------------

Snippets can be either public (visible to anyone on Bitbucket, as well
as anonymous users), or private (visible only to the owner, creator
and members of the team in case the snippet is owned by a team). This
is controlled through the snippet's `is_private` element:

* **is_private=false** -- everyone, including anonymous users can view
  the snippet
* **is_private=true** -- only the owner and team members (for team
  snippets) can view it

To create the snippet under a team account, just append the team name
to the URL (see `/2.0/snippets/{username}`).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/snippet"
    }
  },
  "additionalProperties": false,
  "required": [
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/snippet"
}
```
## Operation: snippets.username.get
Identical to `/snippets`, except that the result is further filtered
by the snippet owner and only those that are owned by `{username}` are
returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "role": {
      "type": "string",
      "description": "Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).",
      "enum": [
        "owner",
        "contributor",
        "member"
      ]
    },
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_snippets"
}
```
## Operation: snippets.username.post
Identical to `/snippets`, except that the new snippet will be
created under the account specified in the path parameter `{username}`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/snippet"
    },
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "_body",
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/snippet"
}
```
## Operation: snippets.username.encoded_id.delete
Deletes a snippet and returns an empty response.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: snippets.username.encoded_id.get
Retrieves a single snippet.

Snippets support multiple content types:

* application/json
* multipart/related
* multipart/form-data


application/json
----------------

The default content type of the response is `application/json`.
Since JSON is always `utf-8`, it cannot reliably contain file contents
for files that are not text. Therefore, JSON snippet documents only
contain the filename and links to the file contents.

This means that in order to retrieve all parts of a snippet, N+1
requests need to be made (where N is the number of files in the
snippet).


multipart/related
-----------------

To retrieve an entire snippet in a single response, use the
`Accept: multipart/related` HTTP request header.

    $ curl -H "Accept: multipart/related" https://api.bitbucket.org/2.0/snippets/evzijst/1

Response:

    HTTP/1.1 200 OK
    Content-Length: 2214
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj"
        },
        "html": {
          "href": "https://bitbucket.org/snippets/evzijst/kypj"
        },
        "comments": {
          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments"
        },
        "watchers": {
          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers"
        },
        "commits": {
          "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits"
        }
      },
      "id": kypj,
      "title": "My snippet",
      "created_on": "2014-12-29T22:22:04.790331+00:00",
      "updated_on": "2014-12-29T22:22:04.790331+00:00",
      "is_private": false,
      "files": {
        "foo.txt": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt"
            },
            "html": {
              "href": "https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt"
            }
          }
        },
        "image.png": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png"
            },
            "html": {
              "href": "https://bitbucket.org/snippets/evzijst/kypj#file-image.png"
            }
          }
        }
      ],
      "owner": {
        "username": "evzijst",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/evzijst"
          },
          "html": {
            "href": "https://bitbucket.org/evzijst"
          },
          "avatar": {
            "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png"
          }
        }
      },
      "creator": {
        "username": "evzijst",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/evzijst"
          },
          "html": {
            "href": "https://bitbucket.org/evzijst"
          },
          "avatar": {
            "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png"
          }
        }
      }
    }

    --===============1438169132528273974==
    Content-Type: text/plain; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-ID: "foo.txt"
    Content-Disposition: attachment; filename="foo.txt"

    foo

    --===============1438169132528273974==
    Content-Type: image/png
    MIME-Version: 1.0
    Content-Transfer-Encoding: base64
    Content-ID: "image.png"
    Content-Disposition: attachment; filename="image.png"

    iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
    TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
    cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
    EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
    73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
    AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
    --===============1438169132528273974==--

multipart/form-data
-------------------

As with creating new snippets, `multipart/form-data` can be used as an
alternative to `multipart/related`. However, the inherently flat
structure of form-data means that only basic, root-level properties
can be returned, while nested elements like `links` are omitted:

    $ curl -H "Accept: multipart/form-data" https://api.bitbucket.org/2.0/snippets/evzijst/kypj

Response:

    HTTP/1.1 200 OK
    Content-Length: 951
    Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="title"
    Content-Type: text/plain; charset="utf-8"

    My snippet
    ------------------------------63a4b224c59f--
    Content-Disposition: attachment; name="file"; filename="foo.txt"
    Content-Type: text/plain

    foo

    ------------------------------63a4b224c59f
    Content-Disposition: attachment; name="file"; filename="image.png"
    Content-Transfer-Encoding: base64
    Content-Type: application/octet-stream

    iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
    TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
    cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
    EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
    73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
    AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
    ------------------------------5957323a6b76--

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/snippet"
}
```
## Operation: snippets.username.encoded_id.put
Used to update a snippet. Use this to add and delete files and to
change a snippet's title.

To update a snippet, one can either PUT a full snapshot, or only the
parts that need to be changed.

The contract for PUT on this API is that properties missing from the
request remain untouched so that snippets can be efficiently
manipulated with differential payloads.

To delete a property (e.g. the title, or a file), include its name in
the request, but omit its value (use `null`).

As in Git, explicit renaming of files is not supported. Instead, to
rename a file, delete it and add it again under another name. This can
be done atomically in a single request. Rename detection is left to
the SCM.

PUT supports three different content types for both request and
response bodies:

* `application/json`
* `multipart/related`
* `multipart/form-data`

The content type used for the request body can be different than that
used for the response. Content types are specified using standard HTTP
headers.

Use the `Content-Type` and `Accept` headers to select the desired
request and response format.


application/json
----------------

As with creation and retrieval, the content type determines what
properties can be manipulated. `application/json` does not support
file contents and is therefore limited to a snippet's meta data.

To update the title, without changing any of its files:

    $ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": "Updated title"}'


To delete the title:

    $ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": null}'

Not all parts of a snippet can be manipulated. The owner and creator
for instance are immutable.


multipart/related
-----------------

`multipart/related` can be used to manipulate all of a snippet's
properties. The body is identical to a POST. properties omitted from
the request are left unchanged. Since the `start` part contains JSON,
the mechanism for manipulating the snippet's meta data is identical
to `application/json` requests.

To update one of a snippet's file contents, while also changing its
title:

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 288
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
      "title": "My updated snippet",
      "files": {
          "foo.txt": {}
        }
    }

    --===============1438169132528273974==
    Content-Type: text/plain; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-ID: "foo.txt"
    Content-Disposition: attachment; filename="foo.txt"

    Updated file contents.

    --===============1438169132528273974==--

Here only the parts that are changed are included in the body. The
other files remain untouched.

Note the use of the `files` list in the JSON part. This list contains
the files that are being manipulated. This list should have
corresponding multiparts in the request that contain the new contents
of these files.

If a filename in the `files` list does not have a corresponding part,
it will be deleted from the snippet, as shown below:

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 188
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
      "files": {
        "image.png": {}
      }
    }

    --===============1438169132528273974==--

To simulate a rename, delete a file and add the same file under
another name:

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 212
    Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
    MIME-Version: 1.0

    --===============1438169132528273974==
    Content-Type: application/json; charset="utf-8"
    MIME-Version: 1.0
    Content-ID: snippet

    {
        "files": {
          "foo.txt": {},
          "bar.txt": {}
        }
    }

    --===============1438169132528273974==
    Content-Type: text/plain; charset="us-ascii"
    MIME-Version: 1.0
    Content-Transfer-Encoding: 7bit
    Content-ID: "bar.txt"
    Content-Disposition: attachment; filename="bar.txt"

    foo

    --===============1438169132528273974==--


multipart/form-data
-----------------

Again, one can also use `multipart/form-data` to manipulate file
contents and meta data atomically.

    $ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title="My updated snippet" -F file=@foo.txt

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 351
    Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="file"; filename="foo.txt"
    Content-Type: text/plain

    foo

    ------------------------------63a4b224c59f
    Content-Disposition: form-data; name="title"

    My updated snippet
    ------------------------------63a4b224c59f

To delete a file, omit its contents while including its name in the
`files` field:

    $ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files=image.png

    PUT /2.0/snippets/evzijst/kypj HTTP/1.1
    Content-Length: 149
    Content-Type: multipart/form-data; boundary=----------------------------ef8871065a86

    ------------------------------ef8871065a86
    Content-Disposition: form-data; name="files"

    image.png
    ------------------------------ef8871065a86--

The explicit use of the `files` element in `multipart/related` and
`multipart/form-data` is only required when deleting files.
The default mode of operation is for file parts to be processed,
regardless of whether or not they are listed in `files`, as a
convenience to the client.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/snippet"
}
```
## Operation: snippets.username.encoded_id.comments.get
Used to retrieve a paginated list of all comments for a specific
snippet.

This resource works identical to commit and pull request comments.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_snippet_comments"
}
```
## Operation: snippets.username.encoded_id.comments.post
Creates a new comment.

The only required field in the body is `content.raw`.

To create a threaded reply to an existing comment, include `parent.id`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/snippet"
    },
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "_body",
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/snippet"
}
```
## Operation: snippets.username.encoded_id.comments.comment_id.delete
Deletes a snippet comment.

Comments can only be removed by their author.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "comment_id": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "comment_id",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: snippets.username.encoded_id.comments.comment_id.get
Returns the specific snippet comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "comment_id": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "comment_id",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/snippet_comment"
}
```
## Operation: snippets.username.encoded_id.comments.comment_id.put
Updates a comment.

Comments can only be updated by their author.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "comment_id": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "comment_id",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: snippets.username.encoded_id.commits.get
Returns the changes (commits) made on this snippet.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_snippet_commit"
}
```
## Operation: snippets.username.encoded_id.commits.revision.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    },
    "revision": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id",
    "revision"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/snippet_commit"
}
```
## Operation: snippets.username.encoded_id.watch.delete
Used to stop watching a specific snippet. Returns 204 (No Content)
to indicate success.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_users"
}
```
## Operation: snippets.username.encoded_id.watch.get
Used to check if the current user is watching a specific snippet.

Returns 204 (No Content) if the user is watching the snippet and 404 if
not.

Hitting this endpoint anonymously always returns a 404.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_users"
}
```
## Operation: snippets.username.encoded_id.watch.put
Used to start watching a specific snippet. Returns 204 (No Content).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_users"
}
```
## Operation: snippets.username.encoded_id.watchers.get
Returns a paginated list of all users watching a specific snippet.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_users"
}
```
## Operation: snippets.username.encoded_id.node_id.delete
Deletes the snippet.

Note that this only works for versioned URLs that point to the latest
commit of the snippet. Pointing to an older commit results in a 405
status code.

To delete a snippet, regardless of whether or not concurrent changes
are being made to it, use `DELETE /snippets/{encoded_id}` instead.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "node_id": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "node_id",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: snippets.username.encoded_id.node_id.get
Identical to `GET /snippets/encoded_id`, except that this endpoint
can be used to retrieve the contents of the snippet as it was at an
older revision, while `/snippets/encoded_id` always returns the
snippet's current revision.

Note that only the snippet's file contents are versioned, not its
meta data properties like the title.

Other than that, the two endpoints are identical in behavior.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "node_id": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "node_id",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/snippet"
}
```
## Operation: snippets.username.encoded_id.node_id.put
Identical to `UPDATE /snippets/encoded_id`, except that this endpoint
takes an explicit commit revision. Only the snippet's "HEAD"/"tip"
(most recent) version can be updated and requests on all other,
older revisions fail by returning a 405 status.

Usage of this endpoint over the unrestricted `/snippets/encoded_id`
could be desired if the caller wants to be sure no concurrent
modifications have taken place between the moment of the UPDATE
request and the original GET.

This can be considered a so-called "Compare And Swap", or CAS
operation.

Other than that, the two endpoints are identical in behavior.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "node_id": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "node_id",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/snippet"
}
```
## Operation: snippets.username.encoded_id.node_id.files.path.get
Retrieves the raw contents of a specific file in the snippet. The
`Content-Disposition` header will be "attachment" to avoid issues with
malevolent executable files.

The file's mime type is derived from its filename and returned in the
`Content-Type` header.

Note that for text files, no character encoding is included as part of
the content type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "path": {
      "type": "string"
    },
    "node_id": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "path",
    "node_id",
    "encoded_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: snippets.username.encoded_id.revision.diff.get
Returns the diff of the specified commit against its first parent.

Note that this resource is different in functionality from the `patch`
resource.

The differences between a diff and a patch are:

* patches have a commit header with the username, message, etc
* diffs support the optional `path=foo/bar.py` query param to filter the
  diff to just that one file diff (not supported for patches)
* for a merge, the diff will show the diff between the merge commit and
  its first parent (identical to how PRs work), while patch returns a
  response containing separate patches for each commit on the second
  parent's ancestry, up to the oldest common ancestor (identical to
  its reachability).

Note that the character encoding of the contents of the diff is
unspecified as Git and Mercurial do not track this, making it hard for
Bitbucket to reliably determine this.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "When used, only one the diff of the specified file will be returned."
    },
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    },
    "revision": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id",
    "revision"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: snippets.username.encoded_id.revision.patch.get
Returns the patch of the specified commit against its first
parent.

Note that this resource is different in functionality from the `diff`
resource.

The differences between a diff and a patch are:

* patches have a commit header with the username, message, etc
* diffs support the optional `path=foo/bar.py` query param to filter the
  diff to just that one file diff (not supported for patches)
* for a merge, the diff will show the diff between the merge commit and
  its first parent (identical to how PRs work), while patch returns a
  response containing separate patches for each commit on the second
  parent's ancestry, up to the oldest common ancestor (identical to
  its reachability).

Note that the character encoding of the contents of the patch is
unspecified as Git and Mercurial do not track this, making it hard for
Bitbucket to reliably determine this.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "encoded_id": {
      "type": "string"
    },
    "revision": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "encoded_id",
    "revision"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.get
Returns all the teams that the authenticated user is associated
with.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "role": {
      "type": "string",
      "description": "\nFilters the teams based on the authenticated user's role on each team.\n\n* **member**: returns a list of all the teams which the caller is a member of\n  at least one team group or repository owned by the team\n* **contributor**: returns a list of teams which the caller has write access\n  to at least one repository owned by the team\n* **admin**: returns a list teams which the caller has team administrator access\n",
      "enum": [
        "admin",
        "contributor",
        "member"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_teams"
}
```
## Operation: teams.owner.projects.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "The team which owns the project. This can either be the `username` of\nthe team or the `UUID` of the team (surrounded by curly-braces (`{}`)).\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_projects"
}
```
## Operation: teams.owner.projects.post
Creates a new project.

Note that the avatar has to be embedded as either a data-url
or a URL to an external image as shown in the examples below:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```

or even:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "http://i.imgur.com/72tRx4w.gif"
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/project"
    },
    "owner": {
      "type": "string",
      "description": "The team which owns the project. This can either be the `username` of\nthe team or the `UUID` of the team (surrounded by curly-braces (`{}`)).\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "_body",
    "owner"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/project"
}
```
## Operation: teams.owner.projects.project_key.delete


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "The team which owns the project. This can either be the `username` of\nthe team or the `UUID` of the team (surrounded by curly-braces (`{}`)).\n"
    },
    "project_key": {
      "type": "string",
      "description": "The project in question. This can either be the actual `key` assigned\nto the project or the `UUID` (surrounded by curly-braces (`{}`)).\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "project_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.owner.projects.project_key.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string",
      "description": "The team which owns the project. This can either be the `username` of\nthe team or the `UUID` of the team (surrounded by curly-braces (`{}`)).\n"
    },
    "project_key": {
      "type": "string",
      "description": "The project in question. This can either be the actual `key` assigned\nto the project or the `UUID` (surrounded by curly-braces (`{}`)).\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner",
    "project_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/project"
}
```
## Operation: teams.owner.projects.project_key.put
Since this endpoint can be used to both update and to create a
project, the request body depends on the intent.

### Creation

See the POST documentation for the project collection for an
example of the request body.

Note: The `key` should not be specified in the body of request
(since it is already present in the URL). The `name` is required,
everything else is optional.

### Update

See the POST documentation for the project collection for an
example of the request body.

Note: The key is not required in the body (since it is already in
the URL). The key may be specified in the body, if the intent is
to change the key itself. In such a scenario, the location of the
project is changed and is returned in the `Location` header of the
response.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_body": {
      "$ref": "#/definitions/project"
    },
    "owner": {
      "type": "string",
      "description": "The team which owns the project. This can either be the `username` of\nthe team or the `UUID` of the team (surrounded by curly-braces (`{}`)).\n"
    },
    "project_key": {
      "type": "string",
      "description": "The project in question. This can either be the actual `key` assigned\nto the project or the `UUID` (surrounded by curly-braces (`{}`)).\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "_body",
    "owner",
    "project_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/project"
}
```
## Operation: teams.username.get
Gets the public information associated with a team.

If the team's profile is private, `location`, `website` and
`created_on` elements are omitted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/team"
}
```
## Operation: teams.username.followers.get
Returns the list of accounts that are following this team.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_users"
}
```
## Operation: teams.username.following.get
Returns the list of accounts this team is following.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_users"
}
```
## Operation: teams.username.hooks.get
Returns a paginated list of webhooks installed on this team.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_webhook_subscriptions"
}
```
## Operation: teams.username.hooks.post
Creates a new webhook on the specified team.

Team webhooks are fired for events from all repositories belonging to
that team account.

Note that only admins can install webhooks on teams.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook_subscription"
}
```
## Operation: teams.username.hooks.uid.delete
Deletes the specified webhook subscription from the given team
account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "uid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.username.hooks.uid.get
Returns the webhook with the specified id installed on the given
team account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "uid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook_subscription"
}
```
## Operation: teams.username.hooks.uid.put
Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "uid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook_subscription"
}
```
## Operation: teams.username.members.get
All members of a team.

Returns all members of the specified team. Any member of any of the
team's groups is considered a member of the team. This includes users
in groups that may not actually have access to any of the team's
repositories.

Note that members using the "private profile" feature are not included.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user"
}
```
## Operation: getPipelineVariablesForTeam
Find account level variables.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_pipeline_variables"
}
```
## Operation: createPipelineVariableForTeam
Create an account level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "_body": {
      "$ref": "#/definitions/pipeline_variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_variable"
}
```
## Operation: deletePipelineVariableForTeam
Delete a team level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "variable_uuid": {
      "type": "string",
      "description": "The UUID of the variable to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "variable_uuid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getPipelineVariableForTeam
Retrieve a team level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "variable_uuid": {
      "type": "string",
      "description": "The UUID of the variable to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "variable_uuid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_variable"
}
```
## Operation: updatePipelineVariableForTeam
Update a team level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "variable_uuid": {
      "type": "string",
      "description": "The UUID of the variable."
    },
    "_body": {
      "$ref": "#/definitions/pipeline_variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "variable_uuid",
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_variable"
}
```
## Operation: teams.username.repositories.get
All repositories owned by a user/team. This includes private
repositories, but filtered down to the ones that the calling user has
access to.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: user.get
Returns the currently logged in user.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user"
}
```
## Operation: user.emails.get
Returns all the authenticated user's email addresses. Both
confirmed and unconfirmed.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
## Operation: user.emails.email.get
Returns details about a specific one of the authenticated user's
email addresses.

Details describe whether the address has been confirmed by the user and
whether it is the user's primary address or not.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string"
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
  "$ref": "#/definitions/error"
}
```
## Operation: users.username.get
Gets the public information associated with a user account.

If the user's profile is private, `location`, `website` and
`created_on` elements are omitted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/user"
}
```
## Operation: users.username.followers.get
Returns the list of accounts that are following this team.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_users"
}
```
## Operation: users.username.following.get
Returns the list of accounts this user is following.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_users"
}
```
## Operation: users.username.hooks.get
Returns a paginated list of webhooks installed on this user account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_webhook_subscriptions"
}
```
## Operation: users.username.hooks.post
Creates a new webhook on the specified user account.

Account-level webhooks are fired for events from all repositories
belonging to that account.

Note that one can only register webhooks on one's own account, not that
of others.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook_subscription"
}
```
## Operation: users.username.hooks.uid.delete
Deletes the specified webhook subscription from the given user
account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "uid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.username.hooks.uid.get
Returns the webhook with the specified id installed on the given
user account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "uid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook_subscription"
}
```
## Operation: users.username.hooks.uid.put
Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "uid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook_subscription"
}
```
## Operation: getPipelineVariablesForUser
Find user level variables.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/paginated_pipeline_variables"
}
```
## Operation: createPipelineVariableForUser
Create a user level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "_body": {
      "$ref": "#/definitions/pipeline_variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_variable"
}
```
## Operation: deletePipelineVariableForUser
Delete an account level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "variable_uuid": {
      "type": "string",
      "description": "The UUID of the variable to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "variable_uuid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getPipelineVariableForUser
Retrieve a user level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "variable_uuid": {
      "type": "string",
      "description": "The UUID of the variable to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "variable_uuid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_variable"
}
```
## Operation: updatePipelineVariableForUser
Update a user level variable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The account."
    },
    "variable_uuid": {
      "type": "string",
      "description": "The UUID of the variable."
    },
    "_body": {
      "$ref": "#/definitions/pipeline_variable"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "variable_uuid",
    "_body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/pipeline_variable"
}
```
## Operation: users.username.repositories.get
All repositories owned by a user/team. This includes private
repositories, but filtered down to the ones that the calling user has
access to.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error"
}
```
