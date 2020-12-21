# @datafire/google_consumersurveys

Client library for Consumer Surveys

## Installation and Usage
```bash
npm install --save @datafire/google_consumersurveys
```
```js
let google_consumersurveys = require('@datafire/google_consumersurveys').create({
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

Creates and conducts surveys, lists the surveys that an authenticated user owns, and retrieves survey results and information about specified surveys.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_consumersurveys.oauthCallback({
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
google_consumersurveys.oauthRefresh(null, context)
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

### mobileapppanels.list
Lists the MobileAppPanels available to the authenticated user.


```js
google_consumersurveys.mobileapppanels.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * startIndex `integer`
  * token `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MobileAppPanelsListResponse](#mobileapppanelslistresponse)

### mobileapppanels.get
Retrieves a MobileAppPanel that is available to the authenticated user.


```js
google_consumersurveys.mobileapppanels.get({
  "panelId": ""
}, context)
```

#### Input
* input `object`
  * panelId **required** `string`: External URL ID for the panel.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MobileAppPanel](#mobileapppanel)

### mobileapppanels.update
Updates a MobileAppPanel. Currently the only property that can be updated is the owners property.


```js
google_consumersurveys.mobileapppanels.update({
  "panelId": ""
}, context)
```

#### Input
* input `object`
  * panelId **required** `string`: External URL ID for the panel.
  * body [MobileAppPanel](#mobileapppanel)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MobileAppPanel](#mobileapppanel)

### surveys.list
Lists the surveys owned by the authenticated user.


```js
google_consumersurveys.surveys.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * startIndex `integer`
  * token `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SurveysListResponse](#surveyslistresponse)

### surveys.insert
Creates a survey.


```js
google_consumersurveys.surveys.insert({}, context)
```

#### Input
* input `object`
  * body [Survey](#survey)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Survey](#survey)

### surveys.start
Begins running a survey.


```js
google_consumersurveys.surveys.start({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`
  * body [SurveysStartRequest](#surveysstartrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SurveysStartResponse](#surveysstartresponse)

### surveys.stop
Stops a running survey.


```js
google_consumersurveys.surveys.stop({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SurveysStopResponse](#surveysstopresponse)

### surveys.delete
Removes a survey from view in all user GET requests.


```js
google_consumersurveys.surveys.delete({
  "surveyUrlId": ""
}, context)
```

#### Input
* input `object`
  * surveyUrlId **required** `string`: External URL ID for the survey.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SurveysDeleteResponse](#surveysdeleteresponse)

### surveys.get
Retrieves information about the specified survey.


```js
google_consumersurveys.surveys.get({
  "surveyUrlId": ""
}, context)
```

#### Input
* input `object`
  * surveyUrlId **required** `string`: External URL ID for the survey.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Survey](#survey)

### surveys.update
Updates a survey. Currently the only property that can be updated is the owners property.


```js
google_consumersurveys.surveys.update({
  "surveyUrlId": ""
}, context)
```

#### Input
* input `object`
  * surveyUrlId **required** `string`: External URL ID for the survey.
  * body [Survey](#survey)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Survey](#survey)

### results.get
Retrieves any survey results that have been produced so far. Results are formatted as an Excel file. You must add "?alt=media" to the URL as an argument to get results.


```js
google_consumersurveys.results.get({
  "surveyUrlId": ""
}, context)
```

#### Input
* input `object`
  * surveyUrlId **required** `string`: External URL ID for the survey.
  * body [ResultsGetRequest](#resultsgetrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SurveyResults](#surveyresults)



## Definitions

### FieldMask
* FieldMask `object`
  * fields `array`
    * items [FieldMask](#fieldmask)
  * id `integer`

### MobileAppPanel
* MobileAppPanel `object`
  * country `string`
  * isPublicPanel `boolean`
  * language `string`
  * mobileAppPanelId `string`
  * name `string`
  * owners `array`
    * items `string`

### MobileAppPanelsListResponse
* MobileAppPanelsListResponse `object`
  * pageInfo [PageInfo](#pageinfo)
  * requestId `string`: Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
  * resources `array`: An individual predefined panel of Opinion Rewards mobile users.
    * items [MobileAppPanel](#mobileapppanel)
  * tokenPagination [TokenPagination](#tokenpagination)

### PageInfo
* PageInfo `object`
  * resultPerPage `integer`
  * startIndex `integer`
  * totalResults `integer`

### ResultsGetRequest
* ResultsGetRequest `object`
  * resultMask [ResultsMask](#resultsmask)

### ResultsMask
* ResultsMask `object`
  * fields `array`
    * items [FieldMask](#fieldmask)
  * projection `string`

### Survey
* Survey `object`
  * audience [SurveyAudience](#surveyaudience)
  * cost [SurveyCost](#surveycost)
  * customerData `string`
  * description `string`
  * owners `array`
    * items `string`
  * questions `array`
    * items [SurveyQuestion](#surveyquestion)
  * rejectionReason [SurveyRejection](#surveyrejection)
  * state `string`
  * surveyUrlId `string`
  * title `string`
  * wantedResponseCount `integer`

### SurveyAudience
* SurveyAudience `object`
  * ages `array`
    * items `string`
  * country `string`
  * countrySubdivision `string`
  * gender `string`
  * languages `array`
    * items `string`
  * mobileAppPanelId `string`
  * populationSource `string`

### SurveyCost
* SurveyCost `object`
  * costPerResponseNanos `string`
  * currencyCode `string`
  * maxCostPerResponseNanos `string`
  * nanos `string`

### SurveyQuestion
* SurveyQuestion `object`
  * answerOrder `string`
  * answers `array`
    * items `string`
  * hasOther `boolean`
  * highValueLabel `string`
  * images `array`
    * items [SurveyQuestionImage](#surveyquestionimage)
  * lastAnswerPositionPinned `boolean`
  * lowValueLabel `string`
  * mustPickSuggestion `boolean`
  * numStars `string`
  * openTextPlaceholder `string`
  * openTextSuggestions `array`
    * items `string`
  * question `string`
  * sentimentText `string`
  * singleLineResponse `boolean`
  * thresholdAnswers `array`
    * items `string`
  * type `string`
  * unitOfMeasurementLabel `string`
  * videoId `string`

### SurveyQuestionImage
* SurveyQuestionImage `object`
  * altText `string`
  * data `string`
  * url `string`

### SurveyRejection
* SurveyRejection `object`
  * explanation `string`
  * type `string`

### SurveyResults
* SurveyResults `object`
  * status `string`
  * surveyUrlId `string`

### SurveysDeleteResponse
* SurveysDeleteResponse `object`
  * requestId `string`: Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.

### SurveysListResponse
* SurveysListResponse `object`
  * pageInfo [PageInfo](#pageinfo)
  * requestId `string`: Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
  * resources `array`: An individual survey resource.
    * items [Survey](#survey)
  * tokenPagination [TokenPagination](#tokenpagination)

### SurveysStartRequest
* SurveysStartRequest `object`
  * maxCostPerResponseNanos `string`: Threshold to start a survey automically if the quoted prices is less than or equal to this value. See Survey.Cost for more details.

### SurveysStartResponse
* SurveysStartResponse `object`
  * requestId `string`: Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.

### SurveysStopResponse
* SurveysStopResponse `object`
  * requestId `string`: Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.

### TokenPagination
* TokenPagination `object`
  * nextPageToken `string`
  * previousPageToken `string`


