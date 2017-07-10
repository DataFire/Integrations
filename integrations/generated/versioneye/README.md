# @datafire/versioneye
VersionEye is a cross-platform search engine for free/libre/open source software libraries.

## Operation: getFacebookPing
ping pong

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: postFacebookPing
ping pong

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getGithub

This endpoint shows all imported repositories from your Github account.

This enpoint expects that you have a GitHub account connected and the token
is still valid. If that is not the case please visit **https://www.versioneye.com/settings/connect**.
to update your GitHub credentials.

If it shows no or old data, then you can use the `github/sync` endpoint
to update your account with the current meta data from GitHub.
        

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "lang": {
      "type": "string",
      "description": "Filter by language"
    },
    "private": {
      "type": "boolean",
      "description": "Filter by visibility"
    },
    "org_name": {
      "type": "string",
      "description": "Filter by name of organization"
    },
    "org_type": {
      "type": "string",
      "description": "Filter by type of organization"
    },
    "page": {
      "type": "string",
      "description": "Number of page"
    },
    "only_imported": {
      "type": "boolean",
      "description": "Show only imported repositories"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: postGithubHookProjectId
This endpoint is registered as service hook on GitHub. It triggers a project re-parse on each git push. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string",
      "description": "Project ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getGithubSync

Reimports ALL GitHub Repositories. This Endpoint fetches meta information to all
repositories in your GitHub account. Meta information such as repo name, branches and
supported project files.

This endpoint works asynchronously and returns a status code. The status code is either
**running** or **done**.
        

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: deleteGithubRepoKey

This Endpoint deletes a project on VersionEye!

Due the limits of our current API framework, the repo key has to be
encoded as url-safe string. That means all '/' has to be replaced with
colons ':' and '.' has to be replaced with '~'.

For example,  repository with fullname `versioneye/veye` has to transformed
to `versioneye:veye`.
        

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "repo_key": {
      "type": "string",
      "description": "encoded repo-key"
    },
    "branch": {
      "type": "string",
      "description": "the name of the branch"
    }
  },
  "additionalProperties": false,
  "required": [
    "repo_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getGithubRepoKey

This Endpoint returns detailed information about a GitHub repository.

Due the limits of our current API framework, the repo key has to be
encoded as url-safe string. That means all '/' has to be replaced with
colons ':' and '.' has to be replaced with '~'.

For example,  repository with fullname `versioneye/veye` has to transformed
to `versioneye:veye`.
        

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "repo_key": {
      "type": "string",
      "description": "encoded repo name with optional branch info."
    }
  },
  "additionalProperties": false,
  "required": [
    "repo_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postGithubRepoKey

Use this Endpoint to import a project file from GitHub. This will create a new project on VersionEye.

Due the limits of our current API framework, the repo key has to be
encoded as url-safe string. That means all '/' has to be replaced with
colons ':' and '.' has to be replaced with '~'.

For example,  repository with fullname `versioneye/veye` has to transformed
to `versioneye:veye`.
        

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "repo_key": {
      "type": "string",
      "description": "encoded repo name"
    },
    "branch": {
      "type": "string",
      "description": "the name of the branch"
    },
    "file": {
      "type": "string",
      "description": "the project file (default is Gemfile)"
    }
  },
  "additionalProperties": false,
  "required": [
    "repo_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMe
On Swagger, you can create session by adding additional parameter :api_key.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getMeComments
shows comments of authorized user

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
      "description": "page number for pagination"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getMeFavorites
shows the packages you are following

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
      "description": "page number for pagination"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getMeNotifications

This Endpoint returns the 30 latest notifications.

If there are new versions out there for software packages you follow directly on VersionEye, then
each new version is a new **notification** for your account.
        

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
      "description": "Specify page for paging"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getOrganisations

This endpoint requires the API key from a user. The result is a set of organisations and their API keys.
              

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getOrganisationsOrgaNameInventory

Find a detailed description here: https://github.com/versioneye/versioneye-api/blob/master/docs/api/v2/organisation.md
              

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "team_name": {
      "type": "string",
      "description": "Filter by team name"
    },
    "language": {
      "type": "string",
      "description": "Filter by programming language"
    },
    "project_version": {
      "type": "string",
      "description": "Filter down by project version"
    },
    "post_filter": {
      "type": "string",
      "description": "Post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates'"
    },
    "orga_name": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "orga_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganisationsOrgaNameProjects
Returns the list of projects

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orga_name": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "orga_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOrganisationsOrgaNameTeams
Returns the list of teams

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orga_name": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "orga_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProductsSearchQ

This resource returns same results as our web application. But you get it as JSON objects -
the result is an JSON array of product objects.

When there's no match for the query, the result array will be empty.
              

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "Query string. At least 2 characters."
    },
    "lang": {
      "type": "string",
      "description": "Filter results by programming languages;\n                                  For filtering multiple languages submit a comma separated list of language strings.\n                                "
    },
    "g": {
      "type": "string",
      "description": "Filter by GroupID. This is Java/Maven specific"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Specify page for paging"
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProductsShaSha

This Endpoint expects a SHA value and returns the corresponding product to it, if available.
              

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sha": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "sha"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProductsLangProdKey

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

  * API returns 404, when the product with given product key doesnt exists.

  * Response 302 means that you didnt encode prod_key correctly.* (Replace all dots & slashes ) *
              

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": "\"Name of programming language\""
    },
    "prod_key": {
      "type": "string",
      "description": "\"Encoded product key, replace all `/` and `.`"
    },
    "prod_version": {
      "type": "string",
      "description": "\"Version string\""
    }
  },
  "additionalProperties": false,
  "required": [
    "lang",
    "prod_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteProductsLangProdKeyFollow

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Response codes

  * 400 - bad request; you used wrong product key;
  * 401 - unauthorized - please append api_key
  * 403 - forbidden; you are not authorized; or just missed api_key;
        

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": "Programming language"
    },
    "prod_key": {
      "type": "string",
      "description": "Package specifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "lang",
    "prod_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProductsLangProdKeyFollow

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

This resource will returns the status code 404 if there is no product
for the given prod_key.
              

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": "\"Name of programming language\""
    },
    "prod_key": {
      "type": "string",
      "description": "Package specifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "lang",
    "prod_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postProductsLangProdKeyFollow

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

It will respond 404, when you are using wrong product key or encode it uncorrectly.
              

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": "Programming language"
    },
    "prod_key": {
      "type": "string",
      "description": " Package product key. "
    }
  },
  "additionalProperties": false,
  "required": [
    "lang",
    "prod_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProductsLangProdKeyReferences

It returns the references of a package.

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

This resource will return the status code 404 if there is no product for
the given prod_key or the product has 0 references.
              

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": "Language"
    },
    "prod_key": {
      "type": "string",
      "description": "Product Key"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Page for paging"
    }
  },
  "additionalProperties": false,
  "required": [
    "lang",
    "prod_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProductsLangProdKeyVersions

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

  * API returns 404, when the product with given product key doesnt exists.

  * Response 302 means that you didnt encode prod_key correctly.* (Replace all dots & slashes ) *
              

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": "\"Name of programming language\""
    },
    "prod_key": {
      "type": "string",
      "description": "\"Encoded product key, replace all `/` and `.`"
    }
  },
  "additionalProperties": false,
  "required": [
    "lang",
    "prod_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postProductsLangProdKeyProdVersionLicense
With this endpoint users can suggest a license for an artifact.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": " programming language "
    },
    "prod_key": {
      "type": "string",
      "description": " product key "
    },
    "prod_version": {
      "type": "string",
      "description": " product version "
    },
    "license_name": {
      "type": "string",
      "description": " name of the license "
    },
    "license_source": {
      "type": "string",
      "description": " source of the license. Where did you find it? "
    },
    "comments": {
      "type": "string",
      "description": " you wanna say anyting important to this license? "
    }
  },
  "additionalProperties": false,
  "required": [
    "lang",
    "prod_key",
    "prod_version",
    "license_name",
    "license_source"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postProductsLangProdKeyProdVersionScmChanges

This resource can parse a changelog.xml from the maven-changelog-plugin, assign
it to a specific artifact and display the changelog infos on the product page.

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

It will respond 404, when you are using wrong product key or encode it uncorrectly.
              

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lang": {
      "type": "string",
      "description": " programming language "
    },
    "prod_key": {
      "type": "string",
      "description": " product key "
    },
    "prod_version": {
      "type": "string",
      "description": " product version "
    }
  },
  "additionalProperties": false,
  "required": [
    "lang",
    "prod_key",
    "prod_version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProjects

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "orga_name": {
      "type": "string",
      "description": "The name of the organisation the project is assigned to."
    },
    "team_name": {
      "type": "string",
      "description": "The name of the team in the organisation this project is assigned to."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: postProjects

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "upload": {
      "type": "string",
      "description": "Project file - [maven.pom, Gemfile ...]"
    },
    "visibility": {
      "type": "string",
      "description": "By default 'public'. If 'public' everybody can see the project."
    },
    "name": {
      "type": "string",
      "description": "The name of the VersionEye project. By default it is the filename."
    },
    "orga_name": {
      "type": "string",
      "description": "The name of the organisation this project should be assigned to."
    },
    "team_name": {
      "type": "string",
      "description": "The name of the team in the organisation this project should be assigned to."
    },
    "temp": {
      "type": "string",
      "description": "If 'true' this project will not show up in the UI and gets removed later."
    }
  },
  "additionalProperties": false,
  "required": [
    "upload"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProjectsGroupIdArtifactIdMergeGaChildId

This endpoint merges a project (child_id) into another project (group_id/artifact_id).
This endpoint is specially for Maven based projects!
To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group_id": {
      "type": "string",
      "description": "GroupId of the parent project"
    },
    "artifact_id": {
      "type": "string",
      "description": "ArtifactId of the parent project"
    },
    "child_id": {
      "type": "string",
      "description": "Project ID of the child"
    }
  },
  "additionalProperties": false,
  "required": [
    "group_id",
    "artifact_id",
    "child_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProjectsParentIdMergeChildId

This endpoint merges a project (child_id) into another project (parent_id).
To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parent_id": {
      "type": "string",
      "description": "Project ID of the parent"
    },
    "child_id": {
      "type": "string",
      "description": "Project ID of the child"
    }
  },
  "additionalProperties": false,
  "required": [
    "parent_id",
    "child_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProjectsParentIdUnmergeChildId

This endpoint unmerges a project (child_id) from another project (parent_id). It makes the
chilld again a separate project!
To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parent_id": {
      "type": "string",
      "description": "Project ID of the parent"
    },
    "child_id": {
      "type": "string",
      "description": "Project ID of the child"
    }
  },
  "additionalProperties": false,
  "required": [
    "parent_id",
    "child_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteProjectsProjectKey

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_key": {
      "type": "string",
      "description": "Delete project with given project ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "project_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProjectsProjectKey
 It shows detailed info of your project. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_key": {
      "type": "string",
      "description": "Project ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postProjectsProjectKey

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_key": {
      "type": "string",
      "description": "Project ID"
    },
    "project_file": {
      "type": "string",
      "description": "Project file - [maven.pom, Gemfile ...]"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_key",
    "project_file"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getProjectsProjectKeyLicenses

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "project_key": {
      "type": "string",
      "description": "Project ID or project_key"
    }
  },
  "additionalProperties": false,
  "required": [
    "project_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getSecurity
Security Vulnerabilities

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "language": {
      "type": "string",
      "description": "Filter by programming languages"
    },
    "prod_key": {
      "type": "string",
      "description": "prod_key of the package"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Specify page for paging"
    },
    "asc_sort": {
      "type": "string",
      "description": "Asc sort by value"
    },
    "desc_sort": {
      "type": "string",
      "description": "Desc sort by value"
    }
  },
  "additionalProperties": false,
  "required": [
    "language"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getServicesPing
check is the service up and running

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: deleteSessions
Close current session. It's very handy method when you re-generated your current API-key.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getSessions

If current user has active session, then this
method will return 200 with short user profile.
For othercase, it will return error message with status code 401.
              

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: postSessions
 You need to append your api_key to request. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string",
      "description": "your personal token for API."
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postSessionsLogin
 You need to append your api_key to request. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "email or username"
    },
    "password": {
      "type": "string",
      "description": "password"
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
## Operation: getUsersUsername
shows profile of given user_id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "username"
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
{}
```
## Operation: getUsersUsernameComments
shows user's comments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "VersionEye users' nickname"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "pagination number"
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
{}
```
## Operation: getUsersUsernameFavorites
shows user's favorite packages

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "username"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Pagination number"
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
{}
```
