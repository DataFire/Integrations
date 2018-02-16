# @datafire/google_searchconsole

Client library for Google Search Console URL Testing Tools

## Installation and Usage
```bash
npm install --save @datafire/google_searchconsole
```
```js
let google_searchconsole = require('@datafire/google_searchconsole').create();

google_searchconsole.urlTestingTools.mobileFriendlyTest.run({}).then(data => {
  console.log(data);
});
```

## Description

Provides tools for running validation tests against single URLs

## Actions

### urlTestingTools.mobileFriendlyTest.run
Runs Mobile-Friendly Test for a given URL.


```js
google_searchconsole.urlTestingTools.mobileFriendlyTest.run({}, context)
```

#### Input
* input `object`
  * body [RunMobileFriendlyTestRequest](#runmobilefriendlytestrequest)
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
* output [RunMobileFriendlyTestResponse](#runmobilefriendlytestresponse)



## Definitions

### BlockedResource
* BlockedResource `object`: Blocked resource.
  * url `string`: URL of the blocked resource.

### Image
* Image `object`: Describe image data.
  * data `string`: Image data in format determined by the mime type. Currently, the format
  * mimeType `string`: The mime-type of the image data.

### MobileFriendlyIssue
* MobileFriendlyIssue `object`: Mobile-friendly issue.
  * rule `string` (values: MOBILE_FRIENDLY_RULE_UNSPECIFIED, USES_INCOMPATIBLE_PLUGINS, CONFIGURE_VIEWPORT, FIXED_WIDTH_VIEWPORT, SIZE_CONTENT_TO_VIEWPORT, USE_LEGIBLE_FONT_SIZES, TAP_TARGETS_TOO_CLOSE): Rule violated.

### ResourceIssue
* ResourceIssue `object`: Information about a resource with issue.
  * blockedResource [BlockedResource](#blockedresource)

### RunMobileFriendlyTestRequest
* RunMobileFriendlyTestRequest `object`: Mobile-friendly test request.
  * requestScreenshot `boolean`: Whether or not screenshot is requested. Default is false.
  * url `string`: URL for inspection.

### RunMobileFriendlyTestResponse
* RunMobileFriendlyTestResponse `object`: Mobile-friendly test response, including mobile-friendly issues and resource
  * mobileFriendliness `string` (values: MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED, MOBILE_FRIENDLY, NOT_MOBILE_FRIENDLY): Test verdict, whether the page is mobile friendly or not.
  * mobileFriendlyIssues `array`: List of mobile-usability issues.
    * items [MobileFriendlyIssue](#mobilefriendlyissue)
  * resourceIssues `array`: Information about embedded resources issues.
    * items [ResourceIssue](#resourceissue)
  * screenshot [Image](#image)
  * testStatus [TestStatus](#teststatus)

### TestStatus
* TestStatus `object`: Final state of the test, including error details if necessary.
  * details `string`: Error details if applicable.
  * status `string` (values: TEST_STATUS_UNSPECIFIED, COMPLETE, INTERNAL_ERROR, PAGE_UNREACHABLE): Status of the test.


