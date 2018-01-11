# @datafire/google_firebaserules

Client library for Firebase Rules

## Installation and Usage
```bash
npm install --save @datafire/google_firebaserules
```
```js
let google_firebaserules = require('@datafire/google_firebaserules').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_firebaserules.projects.releases.delete({}).then(data => {
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

#### Input
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
google_firebaserules.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### projects.releases.delete
Delete a `Release` by resource name.


```js
google_firebaserules.projects.releases.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name for the `Release` to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### projects.releases.get
Get a `Release` by name.


```js
google_firebaserules.projects.releases.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name of the `Release`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Release](#release)

### projects.releases.patch
Update a `Release` via PATCH.

Only updates to the `ruleset_name` and `test_suite_name` fields will be
honored. `Release` rename is not supported. To create a `Release` use the
CreateRelease method.


```js
google_firebaserules.projects.releases.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateReleaseRequest](#updatereleaserequest)
  * name **required** `string`: Resource name for the project which owns this `Release`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Release](#release)

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

#### Input
* input `object`
  * name **required** `string`: Resource name for the `Release`.
  * body [Release](#release)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Release](#release)

### projects.releases.list
List the `Release` values for a project. This list may optionally be
filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any
combination thereof.


```js
google_firebaserules.projects.releases.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: `Release` filter. The list method supports filters with restrictions on the
  * name **required** `string`: Resource name for the project.
  * pageSize `integer`: Page size to load. Maximum of 100. Defaults to 10.
  * pageToken `string`: Next page token for the next batch of `Release` instances.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListReleasesResponse](#listreleasesresponse)

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

#### Input
* input `object`
  * name **required** `string`: Resource name for the project which owns this `Release`.
  * body [Release](#release)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Release](#release)

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

#### Input
* input `object`
  * filter `string`: `Ruleset` filter. The list method supports filters with restrictions on
  * name **required** `string`: Resource name for the project.
  * pageSize `integer`: Page size to load. Maximum of 100. Defaults to 10.
  * pageToken `string`: Next page token for loading the next batch of `Ruleset` instances.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListRulesetsResponse](#listrulesetsresponse)

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

#### Input
* input `object`
  * name **required** `string`: Resource name for Project which owns this `Ruleset`.
  * body [Ruleset](#ruleset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Ruleset](#ruleset)

### projects.releases.getExecutable
Get the `Release` executable to use when enforcing rules.


```js
google_firebaserules.projects.releases.getExecutable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * executableVersion `string` (values: RELEASE_EXECUTABLE_VERSION_UNSPECIFIED, FIREBASE_RULES_EXECUTABLE_V1, FIREBASE_RULES_EXECUTABLE_V2): The requested runtime executable version.
  * name **required** `string`: Resource name of the `Release`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GetReleaseExecutableResponse](#getreleaseexecutableresponse)

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

#### Input
* input `object`
  * body [TestRulesetRequest](#testrulesetrequest)
  * name **required** `string`: Tests may either provide `source` or a `Ruleset` resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TestRulesetResponse](#testrulesetresponse)



## Definitions

### Arg
* Arg `object`: Arg matchers for the mock function.
  * anyValue [Empty](#empty)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### File
* File `object`: `File` containing source content.
  * content `string`: Textual Content.
  * fingerprint `string`: Fingerprint (e.g. github sha) associated with the `File`.
  * name `string`: File name.

### FunctionCall
* FunctionCall `object`: Represents a service-defined function call that was invoked during test
  * args `array`: The arguments that were provided to the function.

  * function `string`: Name of the function invoked.

### FunctionMock
* FunctionMock `object`: Mock function definition.
  * args `array`: The list of `Arg` values to match. The order in which the arguments are
    * items [Arg](#arg)
  * function `string`: The name of the function.
  * result [Result](#result)

### GetReleaseExecutableResponse
* GetReleaseExecutableResponse `object`: The response for FirebaseRulesService.GetReleaseExecutable
  * executable `string`: Executable view of the `Ruleset` referenced by the `Release`.
  * executableVersion `string` (values: RELEASE_EXECUTABLE_VERSION_UNSPECIFIED, FIREBASE_RULES_EXECUTABLE_V1, FIREBASE_RULES_EXECUTABLE_V2): The Rules runtime version of the executable.
  * language `string` (values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS): `Language` used to generate the executable bytes.
  * rulesetName `string`: `Ruleset` name associated with the `Release` executable.
  * updateTime `string`: Timestamp for the most recent `Release.update_time`.

### Issue
* Issue `object`: Issues include warnings, errors, and deprecation notices.
  * description `string`: Short error description.
  * severity `string` (values: SEVERITY_UNSPECIFIED, DEPRECATION, WARNING, ERROR): The severity of the issue.
  * sourcePosition [SourcePosition](#sourceposition)

### ListReleasesResponse
* ListReleasesResponse `object`: The response for FirebaseRulesService.ListReleases.
  * nextPageToken `string`: The pagination token to retrieve the next page of results. If the value is
  * releases `array`: List of `Release` instances.
    * items [Release](#release)

### ListRulesetsResponse
* ListRulesetsResponse `object`: The response for FirebaseRulesService.ListRulesets.
  * nextPageToken `string`: The pagination token to retrieve the next page of results. If the value is
  * rulesets `array`: List of `Ruleset` instances.
    * items [Ruleset](#ruleset)

### Release
* Release `object`: `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a
  * createTime `string`: Time the release was created.
  * name `string`: Resource name for the `Release`.
  * rulesetName `string`: Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must
  * updateTime `string`: Time the release was updated.

### Result
* Result `object`: Possible result values from the function mock invocation.
  * undefined [Empty](#empty)

### Ruleset
* Ruleset `object`: `Ruleset` is an immutable copy of `Source` with a globally unique identifier
  * createTime `string`: Time the `Ruleset` was created.
  * name `string`: Name of the `Ruleset`. The ruleset_id is auto generated by the service.
  * source [Source](#source)

### Source
* Source `object`: `Source` is one or more `File` messages comprising a logical set of rules.
  * files `array`: `File` set constituting the `Source` bundle.
    * items [File](#file)

### SourcePosition
* SourcePosition `object`: Position in the `Source` content including its line, column number, and an
  * column `integer`: First column on the source line associated with the source fragment.
  * fileName `string`: Name of the `File`.
  * line `integer`: Line number of the source fragment. 1-based.

### TestCase
* TestCase `object`: `TestCase` messages provide the request context and an expectation as to
  * expectation `string` (values: EXPECTATION_UNSPECIFIED, ALLOW, DENY): Test expectation.
  * functionMocks `array`: Optional function mocks for service-defined functions. If not set, any
    * items [FunctionMock](#functionmock)

### TestResult
* TestResult `object`: Test result message containing the state of the test as well as a
  * debugMessages `array`: Debug messages related to test execution issues encountered during
    * items `string`
  * errorPosition [SourcePosition](#sourceposition)
  * functionCalls `array`: The set of function calls made to service-defined methods.
    * items [FunctionCall](#functioncall)
  * state `string` (values: STATE_UNSPECIFIED, SUCCESS, FAILURE): State of the test.

### TestRulesetRequest
* TestRulesetRequest `object`: The request for FirebaseRulesService.TestRuleset.
  * source [Source](#source)
  * testSuite [TestSuite](#testsuite)

### TestRulesetResponse
* TestRulesetResponse `object`: The response for FirebaseRulesService.TestRuleset.
  * issues `array`: Syntactic and semantic `Source` issues of varying severity. Issues of
    * items [Issue](#issue)
  * testResults `array`: The set of test results given the test cases in the `TestSuite`.
    * items [TestResult](#testresult)

### TestSuite
* TestSuite `object`: `TestSuite` is a collection of `TestCase` instances that validate the logical
  * testCases `array`: Collection of test cases associated with the `TestSuite`.
    * items [TestCase](#testcase)

### UpdateReleaseRequest
* UpdateReleaseRequest `object`: The request for FirebaseRulesService.UpdateReleasePatch.
  * release [Release](#release)
  * updateMask `string`: Specifies which fields to update.


