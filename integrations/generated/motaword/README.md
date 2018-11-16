# @datafire/motaword

Client library for MotaWord

## Installation and Usage
```bash
npm install --save @datafire/motaword
```
```js
let motaword = require('@datafire/motaword').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

motaword.getProjects({}).then(data => {
  console.log(data);
});
```

## Description

Use MotaWord API to post and track your translation projects.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
motaword.oauthCallback({
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
motaword.oauthRefresh(null, context)
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

### getEndpoints
The root endpoint will provide you a JSON Swagger definition.



```js
motaword.getEndpoints(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### getFormats
Get a list of supported formats for documents, style guides and extensions.



```js
motaword.getFormats(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * items [Formats](#formats)

### downloadGlobalGlossary
Download your corporate account's global glossary. This endpoint is available only for corporate account customers.


```js
motaword.downloadGlobalGlossary(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### updateGlobalGlossary
Update your corporate account's global glossary. This endpoint is available only for corporate account customers.


```js
motaword.updateGlobalGlossary({
  "glossary": ""
}, context)
```

#### Input
* input `object`
  * glossary **required** `string`, `object`: Glossary file. Currently supported formats: .xlsx, .tbx
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * status `string`

### getLanguages
Get a list of supported languages


```js
motaword.getLanguages(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Language](#language)

### getAccount
Get your account information and summary.


```js
motaword.getAccount(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Account](#account)

### getProjects
Get a list of your projects


```js
motaword.getProjects({}, context)
```

#### Input
* input `object`
  * page `integer`
  * per_page `integer`

#### Output
* output `object`
  * items [ProjectList](#projectlist)

### createProject
Create a new project


```js
motaword.createProject({
  "source_language": "",
  "target_languages[]": []
}, context)
```

#### Input
* input `object`
  * source_language **required** `string`
  * target_languages[] **required** `array`
  * callback_url `string`: Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
  * custom `array`: Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value.
  * documents[] `string`, `object`: Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * styleguides[] `string`, `object`: Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * glossaries[] `string`, `object`: Optional. Only one glossary is supported at the moment.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * items [Project](#project)

### deleteProject
Delete(cancel) a project.


```js
motaword.deleteProject({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output `object`
  * status `string`

### getProject
Get single project


```js
motaword.getProject({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output [Project](#project)

### updateProject
Update project language pairs


```js
motaword.updateProject({
  "id": 0,
  "source_language": "",
  "target_languages[]": []
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * source_language **required** `string`
  * target_languages[] **required** `array`
  * callback_url `string`: Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
  * custom `array`: Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced.

#### Output
* output `object`
  * items [Project](#project)

### triggerCallback
Trigger a call to your callback URL related to this project.


```js
motaword.triggerCallback({
  "id": 0,
  "actionType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * actionType **required** `string` (values: translated, proofread, completed): Callback type

#### Output
* output [CallbackResult](#callbackresult)

### cancelProject
Cancel your translation project


```js
motaword.cancelProject({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * reason `string`: Cancellation reason

#### Output
* output `object`
  * status `string`

### download
Download the latest translation package. You must have given a /package call beforehand and wait until the packaging status is 'completed'.


```js
motaword.download({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output `string`

### downloadLanguage
Download only the translation package of this language. You must have given a /package call beforehand and wait until the packaging status is 'completed'.


```js
motaword.downloadLanguage({
  "id": 0,
  "language": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * language **required** `string`: Language code. You can download the translation of only a specific language.

#### Output
* output `string`

### launchProject
Launch your translation project


```js
motaword.launchProject({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * payment_method `string` (values: corporate, client): Optional. Determines which method to use for payment. Options are 'corporate', 'client'.
  * payment_code `string`: Optional. According to your corporate account configuration, this may be required.
  * budget_code `string`: Optional with corporate accounts. Not available for others.

#### Output
* output `object`
  * status `string`

### package
Package the translation project, make it ready to be downloaded.


```js
motaword.package({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * async `integer`: If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.

#### Output
* output `string`

### trackPackage
This request will tell you the current progress of the translation packaging. You will use the 'key' provided by the /package call.


```js
motaword.trackPackage({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * key `string`: This is the package tracking key provided in the response of a /package call.

#### Output
* output [PackageStatus](#packagestatus)

### packageLanguage
Package the translation project, make it ready to be downloaded.


```js
motaword.packageLanguage({
  "id": 0,
  "language": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * language **required** `string`: Language code. You can package the translation of only a specific language.
  * async `integer`: If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.

#### Output
* output [Package](#package)

### getProgress
Get the progress of an already launched project.


```js
motaword.getProgress({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output [Progress](#progress)

### submitProjectReports
Submit reports for a project


```js
motaword.submitProjectReports({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * activity_type `string`: Activity Type
  * message `string`: Report Message

#### Output
* output `object`
  * status `string`

### getActivities
Get a list of realtime activities on the project, such as translation suggestion and translation approval.


```js
motaword.getActivities({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * page `integer`
  * per_page `integer`

#### Output
* output [ActivityList](#activitylist)

### getActivity
Get a single realtime activity.


```js
motaword.getActivity({
  "projectId": 0,
  "activityId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * activityId **required** `integer`: Activity ID

#### Output
* output [Activity](#activity)

### submitComment
Submit a comment to an activity.


```js
motaword.submitComment({
  "projectId": 0,
  "activityId": 0,
  "comment": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * activityId **required** `integer`: Activity ID
  * comment **required** `string`: Comment text.

#### Output
* output [Comment](#comment)

### getActivityComments
Get a list of comments belonging to this activity.


```js
motaword.getActivityComments({
  "projectId": 0,
  "activityId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * activityId **required** `integer`: Activity ID

#### Output
* output [CommentList](#commentlist)

### getComments
Get a list of activity comments throughout the whole project.


```js
motaword.getComments({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * page `integer`
  * per_page `integer`

#### Output
* output [CommentList](#commentlist)

### getDocuments
Get a list of documents


```js
motaword.getDocuments({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID

#### Output
* output [DocumentList](#documentlist)

### createDocument
Upload a new document


```js
motaword.createDocument({
  "projectId": 0,
  "documents[]": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documents[] **required** `string`, `object`: You can add as many files as you want in documents[] parameter.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * schemes[] `string`: JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.

#### Output
* output [Document](#document)

### deleteDocument
Delete the document


```js
motaword.deleteDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documentId **required** `integer`: Document ID

#### Output
* output `object`
  * status `string`

### getDocument
Get single document


```js
motaword.getDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documentId **required** `integer`: Document ID

#### Output
* output [Document](#document)

### updateDocument
Update the document. File name and contents will replaced with the new one.


```js
motaword.updateDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documentId **required** `integer`: Document ID
  * documents `string`, `object`: Single file data. The name is plural to provide a consistent naming convention.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * schemes `string`: JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.

#### Output
* output [Document](#document)

### downloadDocument
Download a document


```js
motaword.downloadDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documentId **required** `integer`: Document ID

#### Output
* output `string`

### getGlossaries
Get a list of glossaries


```js
motaword.getGlossaries({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID

#### Output
* output [GlossaryList](#glossarylist)

### createGlossary
Upload a new glossary


```js
motaword.createGlossary({
  "projectId": 0,
  "glossaries": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * glossaries **required** `string`, `object`: You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [Glossary](#glossary)

### deleteGlossary
Delete the glossary


```js
motaword.deleteGlossary({
  "projectId": 0,
  "glossaryId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * glossaryId **required** `integer`: Glossary ID

#### Output
* output `object`
  * status `string`

### getGlossary
Get single glossary


```js
motaword.getGlossary({
  "projectId": 0,
  "glossaryId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * glossaryId **required** `integer`: Glossary ID

#### Output
* output [Glossary](#glossary)

### updateGlossary
Update the glossary. File name and contents will replaced with the new one.


```js
motaword.updateGlossary({
  "projectId": 0,
  "glossaryId": 0,
  "glossaries": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * glossaryId **required** `integer`: Glossary ID
  * glossaries **required** `string`, `object`: Single file data. The name is plural to provide a consistent naming convention.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [Glossary](#glossary)

### downloadGlossary
Download a glossary


```js
motaword.downloadGlossary({
  "projectId": 0,
  "glossaryId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * glossaryId **required** `integer`: Glossary ID

#### Output
* output `string`

### getStyleGuides
Get a list of style guides


```js
motaword.getStyleGuides({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID

#### Output
* output [StyleGuideList](#styleguidelist)

### createStyleGuide
Upload a new style guide


```js
motaword.createStyleGuide({
  "projectId": 0,
  "styleguides[]": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * styleguides[] **required** `string`, `object`: You can add as many files as you want in styleguides[] parameter.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [StyleGuide](#styleguide)

### deleteStyleGuide
Delete the style guide


```js
motaword.deleteStyleGuide({
  "projectId": 0,
  "styleGuideId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * styleGuideId **required** `integer`: Style Guide ID

#### Output
* output `object`
  * status `string`

### getStyleGuide
Get single style guide


```js
motaword.getStyleGuide({
  "projectId": 0,
  "styleGuideId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * styleGuideId **required** `integer`: Style Guide ID

#### Output
* output [StyleGuide](#styleguide)

### updateStyleGuide
Update the style guide. File name and contents will replaced with the new one.


```js
motaword.updateStyleGuide({
  "projectId": 0,
  "styleGuideId": 0,
  "styleguides": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * styleGuideId **required** `integer`: Style guide ID
  * styleguides **required** `string`, `object`: Single file data. The name is plural to provide a consistent naming convention.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [StyleGuide](#styleguide)

### downloadStyleGuide
Download a style guide


```js
motaword.downloadStyleGuide({
  "projectId": 0,
  "styleGuideId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * styleGuideId **required** `integer`: Style Guide ID

#### Output
* output `string`

### downloadGlobalStyleGuide
Download your corporate account's global style guide. This endpoint is available only for corporate account customers.


```js
motaword.downloadGlobalStyleGuide(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### updateGlobalStyleGuide
Update your corporate account's global style guide. This endpoint is available only for corporate account customers.


```js
motaword.updateGlobalStyleGuide({
  "styleguide": ""
}, context)
```

#### Input
* input `object`
  * styleguide **required** `string`, `object`: Style guide file. Currently supported formats: .pdf, .docx, .txt
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output `object`
  * status `string`

### getAccessToken
MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call. Currently, we only allow Client Credential type flow.



```js
motaword.getAccessToken({
  "grant_type": "",
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * grant_type **required** `string`: OAuth2 grant type. Currently only 'client_credentials' available.
  * Authorization **required** `string`: HTTP Basic Authorization header.

#### Output
* output [Token](#token)



## Definitions

### Account
* Account `object`
  * billing `object`
    * city `string`
    * country `string`
    * name `string`
    * state `string`
    * street `string`
    * zip `string`
  * created_at `integer`
  * id `integer`
  * links `object`
    * projects `object`
      * href `string`
    * self `object`
      * href `string`
  * name `string`
  * stats `object`
    * started_projects `integer`
    * total_projects `integer`

### Activity
* Activity `object`
  * activity_at `string`
  * id `integer`
  * links [ActivityLinks](#activitylinks)
  * source_text `string`: Source text
  * target_text `string`: Target text of the activity, which is actually the translation of the source text.
  * translator `integer`: Unique identifier of the translator/proofreader of this activity.
  * type `string` (values: translated, proofread): Currently there are two available activity types; 'translated', 'proofread'.

### ActivityLinks
* ActivityLinks `object`
  * comments `object`
    * href `string`
  * project `object`
    * href `string`
  * self `object`
    * href `string`

### ActivityList
* ActivityList `object`
  * activities `array`
    * items [Activity](#activity)
  * meta [PagingMeta](#pagingmeta)

### CallbackResult
* CallbackResult `object`
  * data [Project](#project)
  * result `string`: Callback response returned from `url`.
  * type `string` (values: translated, proofread, completed)
  * url `string`: The URL that received the callback.

### Comment
* Comment `object`
  * comment `string`: Comment text.
  * commented_at `string`
  * id `integer`
  * links [CommentLinks](#commentlinks)

### CommentLinks
* CommentLinks `object`
  * activity `object`: Link to the activity to which this comment was submitted.
    * href `string`
  * project `object`
    * href `string`
  * self `object`
    * href `string`

### CommentList
* CommentList `object`
  * activities `array`
    * items [Comment](#comment)
  * meta [PagingMeta](#pagingmeta)

### Document
* Document `object`
  * id `integer`
  * links [DocumentLinks](#documentlinks)
  * name `string`
  * scheme `object`
  * uploaded_at `string`
  * word_count `integer`

### DocumentLinks
* DocumentLinks `object`
  * download `object`
    * href `string`
  * project `object`
    * href `string`
  * self `object`
    * href `string`

### DocumentList
* DocumentList `object`
  * documents `array`
    * items [Document](#document)
  * meta [PagingMeta](#pagingmeta)

### Error
* Error `object`
  * code `string`
  * help `string`
  * http_code `integer`
  * message `string`

### Formats
* Formats `object`
  * documents `object`
    * extensions `array`
      * items `string`
    * mimes `array`
      * items `string`
  * glossaries `object`
    * extensions `array`
      * items `string`
  * styleguides `object`
    * extensions `array`
      * items `string`

### Glossary
* Glossary `object`
  * id `integer`
  * links [DocumentLinks](#documentlinks)
  * name `string`
  * uploaded_at `string`

### GlossaryList
* GlossaryList `object`
  * glossaries `array`
    * items [Glossary](#glossary)
  * meta [PagingMeta](#pagingmeta)

### Language
* Language `object`
  * code `string`
  * name `string`

### LanguageProgress
* LanguageProgress `object`
  * languageCode [ProgressSub](#progresssub)

### LinksMeta
* LinksMeta `object`
  * self `object`
    * href `string`

### Package
* Package `object`
  * key `string`: This is the unique package tracking key. You can use this key to track the current progress of the translation packaging with /package/check call.
  * status `string` (values: started, packaging, completed): The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package.

### PackageStatus
* PackageStatus `object`
  * status `string` (values: started, packaging, completed): The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package.

### PagingLinksMeta
* PagingLinksMeta `object`
  * next `string`
  * previous `string`
  * self `object`
    * href `string`

### PagingMeta
* PagingMeta `object`
  * paging `object`
    * links [PagingLinksMeta](#paginglinksmeta)
    * page `integer`
    * per_page `integer`
    * total_count `integer`

### Progress
* Progress `object`
  * languages [LanguageProgress](#languageprogress)
  * links [ProgressLink](#progresslink)
  * proofreading `integer`
  * total `integer`
  * translation `integer`

### ProgressLink
* ProgressLink `object`
  * project `object`
    * href `string`
  * self `object`
    * href `string`

### ProgressSub
* ProgressSub `object`
  * proofreading `integer`
  * total `integer`
  * translation `integer`

### Project
* Project `object`
  * callback_url `string`: Callback URL to notify when project status changed.
  * created_at `string`
  * custom `object`: Custom data provided while creating a new project.
  * delivery_at `string`
  * errors `array`: A list of errors. Visible when creating a project and uploading your documents at the same time, in case of multiple errors.
    * items [Error](#error)
  * id `integer`
  * links [ProjectLinks](#projectlinks)
  * price `object`
    * amount `number`
    * currency `string`
  * source_language `string`
  * status `string` (values: pending, started, completed)
  * target_languages `array`
    * items `string`
  * valid_until `string`: Available only if status is `pending`
  * word_count `integer`

### ProjectLinks
* ProjectLinks `object`
  * documents `object`
    * href `string`
  * glossaries `object`
    * href `string`
  * styleguides `object`
    * href `string`
  * self `object`
    * href `string`

### ProjectList
* ProjectList `object`
  * meta [PagingMeta](#pagingmeta)
  * projects `array`
    * items [Project](#project)

### StyleGuide
* StyleGuide `object`
  * id `integer`
  * links [DocumentLinks](#documentlinks)
  * name `string`
  * uploaded_at `string`

### StyleGuideList
* StyleGuideList `object`
  * meta [PagingMeta](#pagingmeta)
  * styleguides `array`
    * items [StyleGuide](#styleguide)

### Token
* Token `object`
  * access_token `string`
  * expires_in `integer`
  * scope `string`
  * token_type `string`


