# @datafire/google_firebaserules

Client library for Firebase Rules

## Installation and Usage
```bash
npm install --save datafire @datafire/google_firebaserules
```

```js
let datafire = require('datafire');
let google_firebaserules = require('@datafire/google_firebaserules').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_firebaserules: account,
  }
})


google_firebaserules.projects.releases.delete({}, context).then(data => {
  console.log(data);
})
```

## Description
Creates and manages rules that determine when a Firebase Rules-enabled service should permit a request.


## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_firebaserules.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_firebaserules.oauthRefresh(null, context)
```


### projects.releases.delete
Delete a `Release` by resource name.


```js
google_firebaserules.projects.releases.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Resource name for the `Release` to delete.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### projects.releases.get
Get a `Release` by name.


```js
google_firebaserules.projects.releases.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Resource name of the `Release`.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### projects.releases.update
Update a `Release`.

Only updates to the `ruleset_name` and `test_suite_name` fields will be
honored. `Release` rename is not supported. To create a `Release` use the
CreateRelease method.


```js
google_firebaserules.projects.releases.update({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Resource name for the `Release`.
* body (object) - `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### projects.releases.list
List the `Release` values for a project. This list may optionally be
filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any
combination thereof.


```js
google_firebaserules.projects.releases.list({
  "name": ""
}, context)
```

#### Parameters
* filter (string) - `Release` filter. The list method supports filters with restrictions on the
* name (string) **required** - Resource name for the project.
* pageSize (integer) - Page size to load. Maximum of 100. Defaults to 10.
* pageToken (string) - Next page token for the next batch of `Release` instances.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### projects.releases.create
Create a `Release`.

Release names should reflect the developer's deployment practices. For
example, the release name may include the environment name, application
name, application version, or any other name meaningful to the developer.
Once a `Release` refers to a `Ruleset`, the rules can be enforced by
Firebase Rules-enabled services.

More than one `Release` may be 'live' concurrently. Consider the following
three `Release` names for `projects/foo` and the `Ruleset` to which they
refer.

Release Name                    | Ruleset Name
--------------------------------|-------------
projects/foo/releases/prod      | projects/foo/rulesets/uuid123
projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123
projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456

The table reflects the `Ruleset` rollout in progress. The `prod` and
`prod/beta` releases refer to the same `Ruleset`. However, `prod/v23`
refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be
updated using the UpdateRelease method.


```js
google_firebaserules.projects.releases.create({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Resource name for the project which owns this `Release`.
* body (object) - `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### projects.rulesets.list
List `Ruleset` metadata only and optionally filter the results by `Ruleset`
name.

The full `Source` contents of a `Ruleset` may be retrieved with
GetRuleset.


```js
google_firebaserules.projects.rulesets.list({
  "name": ""
}, context)
```

#### Parameters
* filter (string) - `Ruleset` filter. The list method supports filters with restrictions on
* name (string) **required** - Resource name for the project.
* pageSize (integer) - Page size to load. Maximum of 100. Defaults to 10.
* pageToken (string) - Next page token for loading the next batch of `Ruleset` instances.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### projects.rulesets.create
Create a `Ruleset` from `Source`.

The `Ruleset` is given a unique generated name which is returned to the
caller. `Source` containing syntactic or semantics errors will result in an
error response indicating the first error encountered. For a detailed view
of `Source` issues, use TestRuleset.


```js
google_firebaserules.projects.rulesets.create({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Resource name for Project which owns this `Ruleset`.
* body (object) - `Ruleset` is an immutable copy of `Source` with a globally unique identifier
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### projects.test
Test `Source` for syntactic and semantic correctness. Issues present, if
any, will be returned to the caller with a description, severity, and
source location.

The test method may be executed with `Source` or a `Ruleset` name.
Passing `Source` is useful for unit testing new rules. Passing a `Ruleset`
name is useful for regression testing an existing rule.

The following is an example of `Source` that permits users to upload images
to a bucket bearing their user id and matching the correct metadata:

_*Example*_

    // Users are allowed to subscribe and unsubscribe to the blog.
    service firebase.storage {
      match /users/{userId}/images/{imageName} {
          allow write: if userId == request.auth.uid
              && (imageName.matches('*.png$')
              || imageName.matches('*.jpg$'))
              && resource.mimeType.matches('^image/')
      }
    }


```js
google_firebaserules.projects.test({
  "name": ""
}, context)
```

#### Parameters
* body (object) - The request for FirebaseRulesService.TestRuleset.
* name (string) **required** - Tests may either provide `source` or a `Ruleset` resource name.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

