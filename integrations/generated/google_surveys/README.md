# @datafire/google_surveys

Client library for Surveys

## Installation and Usage
```bash
npm install --save @datafire/google_surveys
```
```js
let google_surveys = require('@datafire/google_surveys').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_surveys.surveys.insert({}).then(data => {
  console.log(data);
});
```

## Description

Creates and conducts surveys, lists the surveys that an authenticated user owns, and retrieves survey results and information about specified surveys.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_surveys.oauthCallback({
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
google_surveys.oauthRefresh(null, context)
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
google_surveys.mobileapppanels.list({}, context)
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
google_surveys.mobileapppanels.get({
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
google_surveys.mobileapppanels.update({
  "panelId": ""
}, context)
```

#### Input
* input `object`
  * body [MobileAppPanel](#mobileapppanel)
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

### surveys.list
Lists the surveys owned by the authenticated user.


```js
google_surveys.surveys.list({}, context)
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
google_surveys.surveys.insert({}, context)
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
google_surveys.surveys.start({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * body [SurveysStartRequest](#surveysstartrequest)
  * resourceId **required** `string`
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
google_surveys.surveys.stop({
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
google_surveys.surveys.delete({
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
google_surveys.surveys.get({
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
google_surveys.surveys.update({
  "surveyUrlId": ""
}, context)
```

#### Input
* input `object`
  * body [Survey](#survey)
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

### results.get
Retrieves any survey results that have been produced so far. Results are formatted as an Excel file. You must add "?alt=media" to the URL as an argument to get results.


```js
google_surveys.results.get({
  "surveyUrlId": ""
}, context)
```

#### Input
* input `object`
  * body [ResultsGetRequest](#resultsgetrequest)
  * surveyUrlId **required** `string`: External URL ID for the survey.
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
* MobileAppPanel `object`: Representation of an individual pre-defined panel object defining a targeted audience of opinion rewards mobile app users.
  * country `string`: Country code for the country of the users that the panel contains. Uses standard ISO 3166-1 2-character language codes. For instance, 'US' for the United States, and 'GB' for the United Kingdom. Any survey created targeting this panel must also target the corresponding country.
  * isPublicPanel `boolean`: Whether or not the panel is accessible to all API users.
  * language `string`: Language code that the panel can target. For instance, 'en-US'. Uses standard BCP47 language codes. See specification. Any survey created targeting this panel must also target the corresponding language.
  * mobileAppPanelId `string`: Unique panel ID string. This corresponds to the mobile_app_panel_id used in Survey Insert requests.
  * name `string`: Human readable name of the audience panel.
  * owners `array`: List of email addresses for users who can target members of this panel. Must contain at least the address of the user making the API call for panels that are not public. This field will be empty for public panels.
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
* Survey `object`: Representation of an individual survey object.
  * audience [SurveyAudience](#surveyaudience)
  * cost [SurveyCost](#surveycost)
  * customerData `string`: Additional information to store on behalf of the API consumer and associate with this question. This binary blob is treated as opaque. This field is limited to 64K bytes.
  * description `string`: Text description of the survey.
  * owners `array`: List of email addresses for survey owners. Must contain at least the address of the user making the API call.
    * items `string`
  * questions `array`: List of questions defining the survey.
    * items [SurveyQuestion](#surveyquestion)
  * rejectionReason [SurveyRejection](#surveyrejection)
  * state `string`: State that the survey is in.
  * surveyUrlId `string`: Unique survey ID, that is viewable in the URL of the Survey Creator UI
  * title `string`: Optional name that will be given to the survey.
  * wantedResponseCount `integer`: Number of responses desired for the survey.

### SurveyAudience
* SurveyAudience `object`: Specifications for the target audience of a survey run through the API.
  * ages `array`: Optional list of age buckets to target. Supported age buckets are: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+']
    * items `string`
  * country `string`: Required country code that surveys should be targeted to. Accepts standard ISO 3166-1 2 character language codes. For instance, 'US' for the United States, and 'GB' for the United Kingdom.
  * countrySubdivision `string`: Country subdivision (states/provinces/etc) that surveys should be targeted to. For all countries except GB, ISO-3166-2 subdivision code is required (eg. 'US-OH' for Ohio, United States). For GB, NUTS 1 statistical region codes for the United Kingdom is required (eg. 'UK-UKC' for North East England).
  * gender `string`: Optional gender to target.
  * languages `array`: Language code that surveys should be targeted to. For instance, 'en-US'. Surveys may target bilingual users by specifying a list of language codes (for example, 'de' and 'en-US'). In that case, all languages will be used for targeting users but the survey content (which is displayed) must match the first language listed. Accepts standard BCP47 language codes. See specification.
    * items `string`
  * mobileAppPanelId `string`: Key for predefined panel that causes survey to be sent to a predefined set of Opinion Rewards App users. You must set PopulationSource to ANDROID_APP_PANEL to use this field.
  * populationSource `string`: Online population source where the respondents are sampled from.

### SurveyCost
* SurveyCost `object`: Message defining the cost to run a given survey through API.
  * costPerResponseNanos `string`: Cost per survey response in nano units of the given currency. To get the total cost for a survey, multiply this value by wanted_response_count.
  * currencyCode `string`: Currency code that the cost is given in.
  * maxCostPerResponseNanos `string`: Threshold to start a survey automatically if the quoted price is at most this value. When a survey has a Screener (threshold) question, it must go through an incidence pricing test to determine the final cost per response. Typically you will have to make a followup call to start the survey giving the final computed cost per response. If the survey has no threshold_answers, setting this property will return an error. By specifying this property, you indicate the max price per response you are willing to pay in advance of the incidence test. If the price turns out to be lower than the specified value, the survey will begin immediately and you will be charged at the rate determined by the incidence pricing test. If the price turns out to be greater than the specified value the survey will not be started and you will instead be notified what price was determined by the incidence test. At that point, you must raise the value of this property to be greater than or equal to that cost before attempting to start the survey again. This will immediately start the survey as long the incidence test was run within the last 21 days.
  * nanos `string`: Cost of survey in nano units of the given currency. DEPRECATED in favor of cost_per_response_nanos

### SurveyQuestion
* SurveyQuestion `object`: Message defining the question specifications.
  * answerOrder `string`: The randomization option for multiple choice and multi-select questions. If not specified, this option defaults to randomize.
  * answers `array`: Required list of answer options for a question.
    * items `string`
  * hasOther `boolean`: Option to allow open-ended text box for Single Answer and Multiple Answer question types. This can be used with SINGLE_ANSWER, SINGLE_ANSWER_WITH_IMAGE, MULTIPLE_ANSWERS, and MULTIPLE_ANSWERS_WITH_IMAGE question types.
  * highValueLabel `string`: For rating questions, the text for the higher end of the scale, such as 'Best'. For numeric questions, a string representing a floating-point that is the maximum allowed number for a response.
  * images `array`
    * items [SurveyQuestionImage](#surveyquestionimage)
  * lastAnswerPositionPinned `boolean`: Currently only support pinning an answer option to the last position.
  * lowValueLabel `string`: For rating questions, the text for the lower end of the scale, such as 'Worst'. For numeric questions, a string representing a floating-point that is the minimum allowed number for a response.
  * mustPickSuggestion `boolean`: Option to force the user to pick one of the open text suggestions. This requires that suggestions are provided for this question.
  * numStars `string`: Number of stars to use for ratings questions.
  * openTextPlaceholder `string`: Placeholder text for an open text question.
  * openTextSuggestions `array`: A list of suggested answers for open text question auto-complete. This is only valid if single_line_response is true.
    * items `string`
  * question `string`: Required question text shown to the respondent.
  * sentimentText `string`: Used by the Rating Scale with Text question type. This text goes along with the question field that is presented to the respondent, and is the actual text that the respondent is asked to rate.
  * singleLineResponse `boolean`: Option to allow multiple line open text responses instead of a single line response. Note that we don't show auto-complete suggestions with multiple line responses.
  * thresholdAnswers `array`: The threshold/screener answer options, which will screen a user into the rest of the survey. These will be a subset of the answer option strings.
    * items `string`
  * type `string`: Required field defining the question type. For details about configuring different type of questions, consult the question configuration guide.
  * unitOfMeasurementLabel `string`: Optional unit of measurement for display (for example: hours, people, miles).
  * videoId `string`: The YouTube video ID to be show in video questions.

### SurveyQuestionImage
* SurveyQuestionImage `object`: Container object for image data and alt_text.
  * altText `string`: The alt text property used in image tags is required for all images.
  * data `string`: Inline jpeg, gif, tiff, bmp, or png image raw bytes for an image question types.
  * url `string`: The read-only URL for the hosted images.

### SurveyRejection
* SurveyRejection `object`: Message representing why the survey was rejected from review, if it was.
  * explanation `string`: A human-readable explanation of what was wrong with the survey.
  * type `string`: Which category of rejection this was. See the  Google Surveys Help Center for additional details on each category.

### SurveyResults
* SurveyResults `object`: Reference to the current results for a given survey.
  * status `string`: Human readable string describing the status of the request.
  * surveyUrlId `string`: External survey ID as viewable by survey owners in the editor view.

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


