# @datafire/versioneye

Client library for Available API endpoints

## Installation and Usage
```bash
npm install --save datafire @datafire/versioneye
```

```js
let datafire = require('datafire');
let versioneye = require('@datafire/versioneye').actions;
let context = new datafire.Context();

versioneye.getProjects({}, context).then(data => {
  console.log(data);
})
```

## Description
VersionEye is a cross-platform search engine for free/libre/open source software libraries.

## Actions
### getFacebookPing
ping pong


```js
versioneye.getFacebookPing(null, context)
```


### postFacebookPing
ping pong


```js
versioneye.postFacebookPing(null, context)
```


### getGithub

This endpoint shows all imported repositories from your Github account.

This enpoint expects that you have a GitHub account connected and the token
is still valid. If that is not the case please visit **https://www.versioneye.com/settings/connect**.
to update your GitHub credentials.

If it shows no or old data, then you can use the `github/sync` endpoint
to update your account with the current meta data from GitHub.
        


```js
versioneye.getGithub({}, context)
```


### postGithubHookProjectId
This endpoint is registered as service hook on GitHub. It triggers a project re-parse on each git push. 


```js
versioneye.postGithubHookProjectId({
  "project_id": ""
}, context)
```

#### Parameters
* project_id (string) **required** - Project ID

### getGithubSync

Reimports ALL GitHub Repositories. This Endpoint fetches meta information to all
repositories in your GitHub account. Meta information such as repo name, branches and
supported project files.

This endpoint works asynchronously and returns a status code. The status code is either
**running** or **done**.
        


```js
versioneye.getGithubSync(null, context)
```


### deleteGithubRepoKey

This Endpoint deletes a project on VersionEye!

Due the limits of our current API framework, the repo key has to be
encoded as url-safe string. That means all '/' has to be replaced with
colons ':' and '.' has to be replaced with '~'.

For example,  repository with fullname `versioneye/veye` has to transformed
to `versioneye:veye`.
        


```js
versioneye.deleteGithubRepoKey({
  "repo_key": ""
}, context)
```

#### Parameters
* repo_key (string) **required** - encoded repo-key
* branch (string) - the name of the branch

### getGithubRepoKey

This Endpoint returns detailed information about a GitHub repository.

Due the limits of our current API framework, the repo key has to be
encoded as url-safe string. That means all '/' has to be replaced with
colons ':' and '.' has to be replaced with '~'.

For example,  repository with fullname `versioneye/veye` has to transformed
to `versioneye:veye`.
        


```js
versioneye.getGithubRepoKey({
  "repo_key": ""
}, context)
```

#### Parameters
* repo_key (string) **required** - encoded repo name with optional branch info.

### postGithubRepoKey

Use this Endpoint to import a project file from GitHub. This will create a new project on VersionEye.

Due the limits of our current API framework, the repo key has to be
encoded as url-safe string. That means all '/' has to be replaced with
colons ':' and '.' has to be replaced with '~'.

For example,  repository with fullname `versioneye/veye` has to transformed
to `versioneye:veye`.
        


```js
versioneye.postGithubRepoKey({
  "repo_key": ""
}, context)
```

#### Parameters
* repo_key (string) **required** - encoded repo name
* branch (string) - the name of the branch
* file (string) - the project file (default is Gemfile)

### getMe
On Swagger, you can create session by adding additional parameter :api_key.


```js
versioneye.getMe(null, context)
```


### getMeComments
shows comments of authorized user


```js
versioneye.getMeComments({}, context)
```


### getMeFavorites
shows the packages you are following


```js
versioneye.getMeFavorites({}, context)
```


### getMeNotifications

This Endpoint returns the 30 latest notifications.

If there are new versions out there for software packages you follow directly on VersionEye, then
each new version is a new **notification** for your account.
        


```js
versioneye.getMeNotifications({}, context)
```


### getOrganisations

This endpoint requires the API key from a user. The result is a set of organisations and their API keys.
              


```js
versioneye.getOrganisations(null, context)
```


### getOrganisationsOrgaNameInventory

Find a detailed description here: https://github.com/versioneye/versioneye-api/blob/master/docs/api/v2/organisation.md
              


```js
versioneye.getOrganisationsOrgaNameInventory({
  "orga_name": 0
}, context)
```

#### Parameters
* team_name (string) - Filter by team name
* language (string) - Filter by programming language
* project_version (string) - Filter down by project version
* post_filter (string) - Post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates'
* orga_name (integer) **required**

### getOrganisationsOrgaNameProjects
Returns the list of projects


```js
versioneye.getOrganisationsOrgaNameProjects({
  "orga_name": 0
}, context)
```

#### Parameters
* orga_name (integer) **required**

### getOrganisationsOrgaNameTeams
Returns the list of teams


```js
versioneye.getOrganisationsOrgaNameTeams({
  "orga_name": 0
}, context)
```

#### Parameters
* orga_name (integer) **required**

### getProductsSearchQ

This resource returns same results as our web application. But you get it as JSON objects -
the result is an JSON array of product objects.

When there's no match for the query, the result array will be empty.
              


```js
versioneye.getProductsSearchQ({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - Query string. At least 2 characters.
* lang (string) - Filter results by programming languages;
* g (string) - Filter by GroupID. This is Java/Maven specific
* page (integer) - Specify page for paging

### getProductsShaSha

This Endpoint expects a SHA value and returns the corresponding product to it, if available.
              


```js
versioneye.getProductsShaSha({
  "sha": 0
}, context)
```

#### Parameters
* sha (integer) **required**

### getProductsLangProdKey

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

  * API returns 404, when the product with given product key doesnt exists.

  * Response 302 means that you didnt encode prod_key correctly.* (Replace all dots & slashes ) *
              


```js
versioneye.getProductsLangProdKey({
  "lang": "",
  "prod_key": ""
}, context)
```

#### Parameters
* lang (string) **required** - "Name of programming language"
* prod_key (string) **required** - "Encoded product key, replace all `/` and `.`
* prod_version (string) - "Version string"

### deleteProductsLangProdKeyFollow

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Response codes

  * 400 - bad request; you used wrong product key;
  * 401 - unauthorized - please append api_key
  * 403 - forbidden; you are not authorized; or just missed api_key;
        


```js
versioneye.deleteProductsLangProdKeyFollow({
  "lang": "",
  "prod_key": ""
}, context)
```

#### Parameters
* lang (string) **required** - Programming language
* prod_key (string) **required** - Package specifier

### getProductsLangProdKeyFollow

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

This resource will returns the status code 404 if there is no product
for the given prod_key.
              


```js
versioneye.getProductsLangProdKeyFollow({
  "lang": "",
  "prod_key": ""
}, context)
```

#### Parameters
* lang (string) **required** - "Name of programming language"
* prod_key (string) **required** - Package specifier

### postProductsLangProdKeyFollow

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

It will respond 404, when you are using wrong product key or encode it uncorrectly.
              


```js
versioneye.postProductsLangProdKeyFollow({
  "lang": "",
  "prod_key": ""
}, context)
```

#### Parameters
* lang (string) **required** - Programming language
* prod_key (string) **required** -  Package product key. 

### getProductsLangProdKeyReferences

It returns the references of a package.

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

This resource will return the status code 404 if there is no product for
the given prod_key or the product has 0 references.
              


```js
versioneye.getProductsLangProdKeyReferences({
  "lang": "",
  "prod_key": ""
}, context)
```

#### Parameters
* lang (string) **required** - Language
* prod_key (string) **required** - Product Key
* page (integer) - Page for paging

### getProductsLangProdKeyVersions

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

  * API returns 404, when the product with given product key doesnt exists.

  * Response 302 means that you didnt encode prod_key correctly.* (Replace all dots & slashes ) *
              


```js
versioneye.getProductsLangProdKeyVersions({
  "lang": "",
  "prod_key": ""
}, context)
```

#### Parameters
* lang (string) **required** - "Name of programming language"
* prod_key (string) **required** - "Encoded product key, replace all `/` and `.`

### postProductsLangProdKeyProdVersionLicense
With this endpoint users can suggest a license for an artifact.


```js
versioneye.postProductsLangProdKeyProdVersionLicense({
  "lang": "",
  "prod_key": "",
  "prod_version": "",
  "license_name": "",
  "license_source": ""
}, context)
```

#### Parameters
* lang (string) **required** -  programming language 
* prod_key (string) **required** -  product key 
* prod_version (string) **required** -  product version 
* license_name (string) **required** -  name of the license 
* license_source (string) **required** -  source of the license. Where did you find it? 
* comments (string) -  you wanna say anyting important to this license? 

### postProductsLangProdKeyProdVersionScmChanges

This resource can parse a changelog.xml from the maven-changelog-plugin, assign
it to a specific artifact and display the changelog infos on the product page.

Please replace all slashes `/` through colons `:` and all dots `.` through `~`!

Example: The clojure package `yummy.json/json` has to be transformed to  `yummy~json:json`.

#### Notes about status codes

It will respond 404, when you are using wrong product key or encode it uncorrectly.
              


```js
versioneye.postProductsLangProdKeyProdVersionScmChanges({
  "lang": "",
  "prod_key": "",
  "prod_version": ""
}, context)
```

#### Parameters
* lang (string) **required** -  programming language 
* prod_key (string) **required** -  product key 
* prod_version (string) **required** -  product version 

### getProjects

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.getProjects({}, context)
```


### postProjects

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.postProjects({
  "upload": ""
}, context)
```

#### Parameters
* upload (string) **required** - Project file - [maven.pom, Gemfile ...]
* visibility (string) - By default 'public'. If 'public' everybody can see the project.
* name (string) - The name of the VersionEye project. By default it is the filename.
* orga_name (string) - The name of the organisation this project should be assigned to.
* team_name (string) - The name of the team in the organisation this project should be assigned to.
* temp (string) - If 'true' this project will not show up in the UI and gets removed later.

### getProjectsGroupIdArtifactIdMergeGaChildId

This endpoint merges a project (child_id) into another project (group_id/artifact_id).
This endpoint is specially for Maven based projects!
To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.getProjectsGroupIdArtifactIdMergeGaChildId({
  "group_id": "",
  "artifact_id": "",
  "child_id": ""
}, context)
```

#### Parameters
* group_id (string) **required** - GroupId of the parent project
* artifact_id (string) **required** - ArtifactId of the parent project
* child_id (string) **required** - Project ID of the child

### getProjectsParentIdMergeChildId

This endpoint merges a project (child_id) into another project (parent_id).
To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.getProjectsParentIdMergeChildId({
  "parent_id": "",
  "child_id": ""
}, context)
```

#### Parameters
* parent_id (string) **required** - Project ID of the parent
* child_id (string) **required** - Project ID of the child

### getProjectsParentIdUnmergeChildId

This endpoint unmerges a project (child_id) from another project (parent_id). It makes the
chilld again a separate project!
To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.getProjectsParentIdUnmergeChildId({
  "parent_id": "",
  "child_id": ""
}, context)
```

#### Parameters
* parent_id (string) **required** - Project ID of the parent
* child_id (string) **required** - Project ID of the child

### deleteProjectsProjectKey

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.deleteProjectsProjectKey({
  "project_key": ""
}, context)
```

#### Parameters
* project_key (string) **required** - Delete project with given project ID.

### getProjectsProjectKey
 It shows detailed info of your project. 


```js
versioneye.getProjectsProjectKey({
  "project_key": ""
}, context)
```

#### Parameters
* project_key (string) **required** - Project ID

### postProjectsProjectKey

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.postProjectsProjectKey({
  "project_key": "",
  "project_file": ""
}, context)
```

#### Parameters
* project_key (string) **required** - Project ID
* project_file (string) **required** - Project file - [maven.pom, Gemfile ...]

### getProjectsProjectKeyLicenses

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.getProjectsProjectKeyLicenses({
  "project_key": ""
}, context)
```

#### Parameters
* project_key (string) **required** - Project ID or project_key

### getSecurity
Security Vulnerabilities


```js
versioneye.getSecurity({
  "language": ""
}, context)
```

#### Parameters
* language (string) **required** - Filter by programming languages
* prod_key (string) - prod_key of the package
* page (integer) - Specify page for paging
* asc_sort (string) - Asc sort by value
* desc_sort (string) - Desc sort by value

### getServicesPing
check is the service up and running


```js
versioneye.getServicesPing(null, context)
```


### deleteSessions
Close current session. It's very handy method when you re-generated your current API-key.


```js
versioneye.deleteSessions(null, context)
```


### getSessions

If current user has active session, then this
method will return 200 with short user profile.
For othercase, it will return error message with status code 401.
              


```js
versioneye.getSessions(null, context)
```


### postSessions
 You need to append your api_key to request. 


```js
versioneye.postSessions({
  "api_key": ""
}, context)
```

#### Parameters
* api_key (string) **required** - your personal token for API.

### postSessionsLogin
 You need to append your api_key to request. 


```js
versioneye.postSessionsLogin({
  "username": "",
  "password": ""
}, context)
```

#### Parameters
* username (string) **required** - email or username
* password (string) **required** - password

### getUsersUsername
shows profile of given user_id


```js
versioneye.getUsersUsername({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - username

### getUsersUsernameComments
shows user's comments


```js
versioneye.getUsersUsernameComments({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - VersionEye users' nickname
* page (integer) - pagination number

### getUsersUsernameFavorites
shows user's favorite packages


```js
versioneye.getUsersUsernameFavorites({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - username
* page (integer) - Pagination number

