# @datafire/versioneye

Client library for Available API endpoints

## Installation and Usage
```bash
npm install --save @datafire/versioneye
```
```js
let versioneye = require('@datafire/versioneye').create();

versioneye.getProjects({}).then(data => {
  console.log(data);
})
```

## Description

VersionEye is a cross-platform search engine for free/libre/open source software libraries.

## Actions

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

#### Input
* input `object`
  * lang `string`: Filter by language
  * private `boolean`: Filter by visibility
  * org_name `string`: Filter by name of organization
  * org_type `string`: Filter by type of organization
  * page `string`: Number of page
  * only_imported `boolean`: Show only imported repositories

#### Output
*Output schema unknown*

### postGithubHookProjectId
This endpoint is registered as service hook on GitHub. It triggers a project re-parse on each git push. 


```js
versioneye.postGithubHookProjectId({
  "project_id": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `string`: Project ID

#### Output
*Output schema unknown*

### getGithubSync

Reimports ALL GitHub Repositories. This Endpoint fetches meta information to all
repositories in your GitHub account. Meta information such as repo name, branches and
supported project files.

This endpoint works asynchronously and returns a status code. The status code is either
**running** or **done**.
        


```js
versioneye.getGithubSync(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * repo_key **required** `string`: encoded repo-key
  * branch `string`: the name of the branch

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * repo_key **required** `string`: encoded repo name with optional branch info.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * repo_key **required** `string`: encoded repo name
  * branch `string`: the name of the branch
  * file `string`: the project file (default is Gemfile)

#### Output
*Output schema unknown*

### getMe
On Swagger, you can create session by adding additional parameter :api_key.


```js
versioneye.getMe(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getMeComments
shows comments of authorized user


```js
versioneye.getMeComments({}, context)
```

#### Input
* input `object`
  * page `integer`: page number for pagination

#### Output
*Output schema unknown*

### getMeFavorites
shows the packages you are following


```js
versioneye.getMeFavorites({}, context)
```

#### Input
* input `object`
  * page `integer`: page number for pagination

#### Output
*Output schema unknown*

### getMeNotifications

This Endpoint returns the 30 latest notifications.

If there are new versions out there for software packages you follow directly on VersionEye, then
each new version is a new **notification** for your account.
        


```js
versioneye.getMeNotifications({}, context)
```

#### Input
* input `object`
  * page `integer`: Specify page for paging

#### Output
*Output schema unknown*

### getOrganisations

This endpoint requires the API key from a user. The result is a set of organisations and their API keys.
              


```js
versioneye.getOrganisations(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getOrganisationsOrgaNameInventory

Find a detailed description here: https://github.com/versioneye/versioneye-api/blob/master/docs/api/v2/organisation.md
              


```js
versioneye.getOrganisationsOrgaNameInventory({
  "orga_name": 0
}, context)
```

#### Input
* input `object`
  * team_name `string`: Filter by team name
  * language `string`: Filter by programming language
  * project_version `string`: Filter down by project version
  * post_filter `string`: Post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates'
  * orga_name **required** `integer`

#### Output
*Output schema unknown*

### getOrganisationsOrgaNameInventoryDiff
Returns the inventory diff object


```js
versioneye.getOrganisationsOrgaNameInventoryDiff({
  "orga_name": 0
}, context)
```

#### Input
* input `object`
  * inventory_diff_id `string`: ID of the inventory diff object
  * orga_name **required** `integer`

#### Output
*Output schema unknown*

### postOrganisationsOrgaNameInventoryDiff

This Endpoint takes 2 inventory filters and calculates the difference between them.
The diff object contains wich items have been removed and/or added compared to the inventory1 filter.
The response of this Endpoint is the ID of the diff object, which is calculated async in the background.
              


```js
versioneye.postOrganisationsOrgaNameInventoryDiff({
  "orga_name": 0
}, context)
```

#### Input
* input `object`
  * f1_team_name `string`: Inventory1, filter by team name
  * f1_language `string`: Inventory1, filter by programming language
  * f1_project_version `string`: Inventory1, filter down by project version
  * f1_post_filter `string`: Inventory1, post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates'
  * f2_team_name `string`: Inventory2, filter by team name
  * f2_language `string`: Inventory2, filter by programming language
  * f2_project_version `string`: Inventory2, filter down by project version
  * f2_post_filter `string`: Inventory2, post processing filter. Possible values are 'ALL', 'duplicates_only', 'show_duplicates'
  * orga_name **required** `integer`

#### Output
*Output schema unknown*

### getOrganisationsOrgaNameProjects
Returns the list of projects


```js
versioneye.getOrganisationsOrgaNameProjects({
  "orga_name": 0
}, context)
```

#### Input
* input `object`
  * orga_name **required** `integer`

#### Output
*Output schema unknown*

### getOrganisationsOrgaNameTeams
Returns the list of teams


```js
versioneye.getOrganisationsOrgaNameTeams({
  "orga_name": 0
}, context)
```

#### Input
* input `object`
  * orga_name **required** `integer`

#### Output
*Output schema unknown*

### getProductsSearchQ

This resource returns same results as our web application. But you get it as JSON objects -
the result is an JSON array of product objects.

When there's no match for the query, the result array will be empty.
              


```js
versioneye.getProductsSearchQ({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: Query string. At least 2 characters.
  * lang `string`: Filter results by programming languages;
  * g `string`: Filter by GroupID. This is Java/Maven specific
  * page `integer`: Specify page for paging

#### Output
*Output schema unknown*

### getProductsShaSha

This Endpoint expects a SHA value and returns the corresponding product to it, if available.
              


```js
versioneye.getProductsShaSha({
  "sha": 0
}, context)
```

#### Input
* input `object`
  * sha **required** `integer`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * lang **required** `string`: "Name of programming language"
  * prod_key **required** `string`: "Encoded product key, replace all `/` and `.`
  * prod_version `string`: "Version string"

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * lang **required** `string`: Programming language
  * prod_key **required** `string`: Package specifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * lang **required** `string`: "Name of programming language"
  * prod_key **required** `string`: Package specifier

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * lang **required** `string`: Programming language
  * prod_key **required** `string`:  Package product key. 

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * lang **required** `string`: Language
  * prod_key **required** `string`: Product Key
  * page `integer`: Page for paging

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * lang **required** `string`: "Name of programming language"
  * prod_key **required** `string`: "Encoded product key, replace all `/` and `.`

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * lang **required** `string`:  programming language 
  * prod_key **required** `string`:  product key 
  * prod_version **required** `string`:  product version 
  * license_name **required** `string`:  name of the license 
  * license_source **required** `string`:  source of the license. Where did you find it? 
  * comments `string`:  you wanna say anyting important to this license? 

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * lang **required** `string`:  programming language 
  * prod_key **required** `string`:  product key 
  * prod_version **required** `string`:  product version 

#### Output
*Output schema unknown*

### getProjects

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.getProjects({}, context)
```

#### Input
* input `object`
  * orga_name `string`: The name of the organisation the project is assigned to.
  * team_name `string`: The name of the team in the organisation this project is assigned to.

#### Output
*Output schema unknown*

### postProjects

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.postProjects({
  "upload": ""
}, context)
```

#### Input
* input `object`
  * upload **required** `string`: Project file - [maven.pom, Gemfile ...]
  * visibility `string`: By default 'public'. If 'public' everybody can see the project.
  * name `string`: The name of the VersionEye project. By default it is the filename.
  * orga_name `string`: The name of the organisation this project should be assigned to.
  * team_name `string`: The name of the team in the organisation this project should be assigned to.
  * temp `string`: If 'true' this project will not show up in the UI and gets removed later.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * group_id **required** `string`: GroupId of the parent project
  * artifact_id **required** `string`: ArtifactId of the parent project
  * child_id **required** `string`: Project ID of the child

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * parent_id **required** `string`: Project ID of the parent
  * child_id **required** `string`: Project ID of the child

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * parent_id **required** `string`: Project ID of the parent
  * child_id **required** `string`: Project ID of the child

#### Output
*Output schema unknown*

### deleteProjectsProjectKey

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.deleteProjectsProjectKey({
  "project_key": ""
}, context)
```

#### Input
* input `object`
  * project_key **required** `string`: Delete project with given project ID.

#### Output
*Output schema unknown*

### getProjectsProjectKey
 It shows detailed info of your project. 


```js
versioneye.getProjectsProjectKey({
  "project_key": ""
}, context)
```

#### Input
* input `object`
  * project_key **required** `string`: Project ID

#### Output
*Output schema unknown*

### postProjectsProjectKey

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.postProjectsProjectKey({
  "project_key": "",
  "project_file": ""
}, context)
```

#### Input
* input `object`
  * project_key **required** `string`: Project ID
  * project_file **required** `string`: Project file - [maven.pom, Gemfile ...]

#### Output
*Output schema unknown*

### putProjectsProjectKey

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"

With this Endpoint an existing project can be updated. This are the fields which 
can be updated: 

```
{
  public: false,
  name: "toto",
  description: "beschreibung",
  license: "Lizenz",
  version: "Versionio"
}
```
            


```js
versioneye.putProjectsProjectKey({
  "project_key": ""
}, context)
```

#### Input
* input `object`
  * project_key **required** `string`: Project ID

#### Output
*Output schema unknown*

### getProjectsProjectKeyDependencies

This Endpoint returns a list of ALL dependencies of the project. This list includes
dependencies of child projects as well.

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.getProjectsProjectKeyDependencies({
  "project_key": ""
}, context)
```

#### Input
* input `object`
  * project_key **required** `string`: Project ID or project_key

#### Output
*Output schema unknown*

### getProjectsProjectKeyLicenses

To use this resource you need either an active session or you have to append
your API Key to the URL as parameter. For example: "?api_key=666_your_api_key_666"
            


```js
versioneye.getProjectsProjectKeyLicenses({
  "project_key": ""
}, context)
```

#### Input
* input `object`
  * project_key **required** `string`: Project ID or project_key

#### Output
*Output schema unknown*

### getSecurity
Security Vulnerabilities


```js
versioneye.getSecurity({
  "language": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string`: Filter by programming languages
  * prod_key `string`: prod_key of the package
  * page `integer`: Specify page for paging
  * asc_sort `string`: Asc sort by value
  * desc_sort `string`: Desc sort by value

#### Output
*Output schema unknown*

### getServicesPing
check is the service up and running


```js
versioneye.getServicesPing(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### deleteSessions
Close current session. It's very handy method when you re-generated your current API-key.


```js
versioneye.deleteSessions(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getSessions

If current user has active session, then this
method will return 200 with short user profile.
For othercase, it will return error message with status code 401.
              


```js
versioneye.getSessions(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### postSessions
 You need to append your api_key to request. 


```js
versioneye.postSessions({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: your personal token for API.

#### Output
*Output schema unknown*

### postSessionsLogin
 You need to append your api_key to request. 


```js
versioneye.postSessionsLogin({
  "username": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: email or username
  * password **required** `string`: password

#### Output
*Output schema unknown*

### getUsersUsername
shows profile of given user_id


```js
versioneye.getUsersUsername({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username

#### Output
*Output schema unknown*

### getUsersUsernameComments
shows user's comments


```js
versioneye.getUsersUsernameComments({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: VersionEye users' nickname
  * page `integer`: pagination number

#### Output
*Output schema unknown*

### getUsersUsernameFavorites
shows user's favorite packages


```js
versioneye.getUsersUsernameFavorites({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username
  * page `integer`: Pagination number

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
