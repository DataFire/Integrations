# @datafire/google_firebaserules

Client library for Firebase Rules API

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

.then(data => {
  console.log(data);
});
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

### firebaserules.projects.rulesets.delete
Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.


```js
google_firebaserules.firebaserules.projects.rulesets.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name for the ruleset to delete. Format: `projects/{project_id}/rulesets/{ruleset_id}`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### firebaserules.projects.rulesets.get
Get a `Ruleset` by name including the full `Source` contents.


```js
google_firebaserules.firebaserules.projects.rulesets.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name for the ruleset to get. Format: `projects/{project_id}/rulesets/{ruleset_id}`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Ruleset](#ruleset)

### firebaserules.projects.releases.patch
Update a `Release` via PATCH. Only updates to the `ruleset_name` and `test_suite_name` fields will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.


```js
google_firebaserules.firebaserules.projects.releases.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name for the project which owns this `Release`. Format: `projects/{project_id}`
  * body [UpdateReleaseRequest](#updatereleaserequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Release](#release)

### firebaserules.projects.releases.list
List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.


```js
google_firebaserules.firebaserules.projects.releases.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name for the project. Format: `projects/{project_id}`
  * filter `string`: `Release` filter. The list method supports filters with restrictions on the `Release.name`, `Release.ruleset_name`, and `Release.test_suite_name`. Example 1: A filter of 'name=prod*' might return `Release`s with names within 'projects/foo' prefixed with 'prod': Name | Ruleset Name ------------------------------|------------- projects/foo/releases/prod | projects/foo/rulesets/uuid1234 projects/foo/releases/prod/v1 | projects/foo/rulesets/uuid1234 projects/foo/releases/prod/v2 | projects/foo/rulesets/uuid8888 Example 2: A filter of `name=prod* ruleset_name=uuid1234` would return only `Release` instances for 'projects/foo' with names prefixed with 'prod' referring to the same `Ruleset` name of 'uuid1234': Name | Ruleset Name ------------------------------|------------- projects/foo/releases/prod | projects/foo/rulesets/1234 projects/foo/releases/prod/v1 | projects/foo/rulesets/1234 In the examples, the filter parameters refer to the search filters are relative to the project. Fully qualified prefixed may also be used. e.g. `test_suite_name=projects/foo/testsuites/uuid1`
  * pageSize `integer`: Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load fewer than `page_size` results due to the size of the output. To traverse all of the releases, the caller should iterate until the `page_token` on the response is empty.
  * pageToken `string`: Next page token for the next batch of `Release` instances.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListReleasesResponse](#listreleasesresponse)

### firebaserules.projects.releases.create
Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name | Ruleset Name --------------------------------|------------- projects/foo/releases/prod | projects/foo/rulesets/uuid123 projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123 projects/foo/releases/prod/v23 | projects/foo/rulesets/uuid456 The table reflects the `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.


```js
google_firebaserules.firebaserules.projects.releases.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name for the project which owns this `Release`. Format: `projects/{project_id}`
  * body [Release](#release)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Release](#release)

### firebaserules.projects.rulesets.list
List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.


```js
google_firebaserules.firebaserules.projects.rulesets.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name for the project. Format: `projects/{project_id}`
  * filter `string`: `Ruleset` filter. The list method supports filters with restrictions on `Ruleset.name`. Filters on `Ruleset.create_time` should use the `date` function which parses strings that conform to the RFC 3339 date/time specifications. Example: `create_time > date("2017-01-01T00:00:00Z") AND name=UUID-*`
  * pageSize `integer`: Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty.
  * pageToken `string`: Next page token for loading the next batch of `Ruleset` instances.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListRulesetsResponse](#listrulesetsresponse)

### firebaserules.projects.rulesets.create
Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.


```js
google_firebaserules.firebaserules.projects.rulesets.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name for Project which owns this `Ruleset`. Format: `projects/{project_id}`
  * body [Ruleset](#ruleset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Ruleset](#ruleset)

### firebaserules.projects.releases.getExecutable
Get the `Release` executable to use when enforcing rules.


```js
google_firebaserules.firebaserules.projects.releases.getExecutable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name of the `Release`. Format: `projects/{project_id}/releases/{release_id}`
  * executableVersion `string` (values: RELEASE_EXECUTABLE_VERSION_UNSPECIFIED, FIREBASE_RULES_EXECUTABLE_V1, FIREBASE_RULES_EXECUTABLE_V2): The requested runtime executable version. Defaults to FIREBASE_RULES_EXECUTABLE_V1.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GetReleaseExecutableResponse](#getreleaseexecutableresponse)

### firebaserules.projects.test
Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }


```js
google_firebaserules.firebaserules.projects.test({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Tests may either provide `source` or a `Ruleset` resource name. For tests against `source`, the resource name must refer to the project: Format: `projects/{project_id}` For tests against a `Ruleset`, this must be the `Ruleset` resource name: Format: `projects/{project_id}/rulesets/{ruleset_id}`
  * body [TestRulesetRequest](#testrulesetrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TestRulesetResponse](#testrulesetresponse)



## Definitions

### Arg
* Arg `object`: Arg matchers for the mock function.
  * anyValue [Empty](#empty)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ExpressionReport
* ExpressionReport `object`: Describes where in a file an expression is found and what it was evaluated to over the course of its use.
  * children `array`: Subexpressions
    * items [ExpressionReport](#expressionreport)
  * sourcePosition [SourcePosition](#sourceposition)
  * values `array`: Values that this expression evaluated to when encountered.
    * items [ValueCount](#valuecount)

### File
* File `object`: `File` containing source content.
  * content `string`: Textual Content.
  * fingerprint `string`: Fingerprint (e.g. github sha) associated with the `File`.
  * name `string`: File name.

### FunctionCall
* FunctionCall `object`: Represents a service-defined function call that was invoked during test execution.
  * args `array`: The arguments that were provided to the function.
  * function `string`: Name of the function invoked.

### FunctionMock
* FunctionMock `object`: Mock function definition. Mocks must refer to a function declared by the target service. The type of the function args and result will be inferred at test time. If either the arg or result values are not compatible with function type declaration, the request will be considered invalid. More than one `FunctionMock` may be provided for a given function name so long as the `Arg` matchers are distinct. There may be only one function for a given overload where all `Arg` values are `Arg.any_value`.
  * args `array`: The list of `Arg` values to match. The order in which the arguments are provided is the order in which they must appear in the function invocation.
    * items [Arg](#arg)
  * function `string`: The name of the function. The function name must match one provided by a service declaration.
  * result [Result](#result)

### GetReleaseExecutableResponse
* GetReleaseExecutableResponse `object`: The response for FirebaseRulesService.GetReleaseExecutable
  * executable `string`: Executable view of the `Ruleset` referenced by the `Release`.
  * executableVersion `string` (values: RELEASE_EXECUTABLE_VERSION_UNSPECIFIED, FIREBASE_RULES_EXECUTABLE_V1, FIREBASE_RULES_EXECUTABLE_V2): The Rules runtime version of the executable.
  * language `string` (values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS): `Language` used to generate the executable bytes.
  * rulesetName `string`: `Ruleset` name associated with the `Release` executable.
  * syncTime `string`: Optional, indicates the freshness of the result. The response is guaranteed to be the latest within an interval up to the sync_time (inclusive).
  * updateTime `string`: Timestamp for the most recent `Release.update_time`.

### Issue
* Issue `object`: Issues include warnings, errors, and deprecation notices.
  * description `string`: Short error description.
  * severity `string` (values: SEVERITY_UNSPECIFIED, DEPRECATION, WARNING, ERROR): The severity of the issue.
  * sourcePosition [SourcePosition](#sourceposition)

### ListReleasesResponse
* ListReleasesResponse `object`: The response for FirebaseRulesService.ListReleases.
  * nextPageToken `string`: The pagination token to retrieve the next page of results. If the value is empty, no further results remain.
  * releases `array`: List of `Release` instances.
    * items [Release](#release)

### ListRulesetsResponse
* ListRulesetsResponse `object`: The response for FirebaseRulesService.ListRulesets.
  * nextPageToken `string`: The pagination token to retrieve the next page of results. If the value is empty, no further results remain.
  * rulesets `array`: List of `Ruleset` instances.
    * items [Ruleset](#ruleset)

### Metadata
* Metadata `object`: Metadata for a Ruleset.
  * services `array`: Services that this ruleset has declarations for (e.g., "cloud.firestore"). There may be 0+ of these.
    * items `string`

### Release
* Release `object`: `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
  * createTime `string`: Time the release was created. Output only.
  * name `string`: Resource name for the `Release`. `Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2` which affords developers a great deal of flexibility in mapping the name to the style that best fits their existing development practices. For example, a name could refer to an environment, an app, a version, or some combination of three. In the table below, for the project name `projects/foo`, the following relative release paths show how flat and structured names might be chosen to match a desired development / deployment strategy. Use Case | Flat Name | Structured Name -------------|---------------------|---------------- Environments | releases/qa | releases/qa Apps | releases/app1_qa | releases/app1/qa Versions | releases/app1_v2_qa | releases/app1/v2/qa The delimiter between the release name path elements can be almost anything and it should work equally well with the release name list filter, but in many ways the structured paths provide a clearer picture of the relationship between `Release` instances. Format: `projects/{project_id}/releases/{release_id}`
  * rulesetName `string`: Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist the `Release` to be created.
  * updateTime `string`: Time the release was updated. Output only.

### Result
* Result `object`: Possible result values from the function mock invocation.
  * undefined [Empty](#empty)

### Ruleset
* Ruleset `object`: `Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.
  * createTime `string`: Time the `Ruleset` was created. Output only.
  * metadata [Metadata](#metadata)
  * name `string`: Name of the `Ruleset`. The ruleset_id is auto generated by the service. Format: `projects/{project_id}/rulesets/{ruleset_id}` Output only.
  * source [Source](#source)

### Source
* Source `object`: `Source` is one or more `File` messages comprising a logical set of rules.
  * files `array`: `File` set constituting the `Source` bundle.
    * items [File](#file)

### SourcePosition
* SourcePosition `object`: Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
  * column `integer`: First column on the source line associated with the source fragment.
  * currentOffset `integer`: Start position relative to the beginning of the file.
  * endOffset `integer`: End position relative to the beginning of the file.
  * fileName `string`: Name of the `File`.
  * line `integer`: Line number of the source fragment. 1-based.

### TestCase
* TestCase `object`: `TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.
  * expectation `string` (values: EXPECTATION_UNSPECIFIED, ALLOW, DENY): Test expectation.
  * expressionReportLevel `string` (values: LEVEL_UNSPECIFIED, NONE, FULL, VISITED): Specifies what should be included in the response.
  * functionMocks `array`: Optional function mocks for service-defined functions. If not set, any service defined function is expected to return an error, which may or may not influence the test outcome.
    * items [FunctionMock](#functionmock)
  * pathEncoding `string` (values: ENCODING_UNSPECIFIED, URL_ENCODED, PLAIN): Specifies whether paths (such as request.path) are encoded and how.

### TestResult
* TestResult `object`: Test result message containing the state of the test as well as a description and source position for test failures.
  * debugMessages `array`: Debug messages related to test execution issues encountered during evaluation. Debug messages may be related to too many or too few invocations of function mocks or to runtime errors that occur during evaluation. For example: ```Unable to read variable [name: "resource"]```
    * items `string`
  * errorPosition [SourcePosition](#sourceposition)
  * expressionReports `array`: The mapping from expression in the ruleset AST to the values they were evaluated to. Partially-nested to mirror AST structure. Note that this field is actually tracking expressions and not permission statements in contrast to the "visited_expressions" field above. Literal expressions are omitted.
    * items [ExpressionReport](#expressionreport)
  * functionCalls `array`: The set of function calls made to service-defined methods. Function calls are included in the order in which they are encountered during evaluation, are provided for both mocked and unmocked functions, and included on the response regardless of the test `state`.
    * items [FunctionCall](#functioncall)
  * state `string` (values: STATE_UNSPECIFIED, SUCCESS, FAILURE): State of the test.
  * visitedExpressions `array`: The set of visited permission expressions for a given test. This returns the positions and evaluation results of all visited permission expressions which were relevant to the test case, e.g. ``` match /path { allow read if: } ``` For a detailed report of the intermediate evaluation states, see the `expression_reports` field
    * items [VisitedExpression](#visitedexpression)

### TestRulesetRequest
* TestRulesetRequest `object`: The request for FirebaseRulesService.TestRuleset.
  * source [Source](#source)
  * testSuite [TestSuite](#testsuite)

### TestRulesetResponse
* TestRulesetResponse `object`: The response for FirebaseRulesService.TestRuleset.
  * issues `array`: Syntactic and semantic `Source` issues of varying severity. Issues of `ERROR` severity will prevent tests from executing.
    * items [Issue](#issue)
  * testResults `array`: The set of test results given the test cases in the `TestSuite`. The results will appear in the same order as the test cases appear in the `TestSuite`.
    * items [TestResult](#testresult)

### TestSuite
* TestSuite `object`: `TestSuite` is a collection of `TestCase` instances that validate the logical correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within a `TestRuleset` invocation or as part of a `Release` object as a pre-release check.
  * testCases `array`: Collection of test cases associated with the `TestSuite`.
    * items [TestCase](#testcase)

### UpdateReleaseRequest
* UpdateReleaseRequest `object`: The request for FirebaseRulesService.UpdateReleasePatch.
  * release [Release](#release)
  * updateMask `string`: Specifies which fields to update.

### ValueCount
* ValueCount `object`: Tuple for how many times an Expression was evaluated to a particular ExpressionValue.
  * count `integer`: The amount of times that expression returned.

### VisitedExpression
* VisitedExpression `object`: Store the position and access outcome for an expression visited in rules.
  * sourcePosition [SourcePosition](#sourceposition)


