# @datafire/motaword

Client library for MotaWord

## Installation and Usage
```bash
npm install --save datafire @datafire/motaword
```

```js
let datafire = require('datafire');
let motaword = require('@datafire/motaword').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    motaword: account,
  }
})

motaword.getProjects({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
motaword.oauthRefresh(null, context)
```


### getEndpoints
The root endpoint will provide you a JSON Swagger definition.



```js
motaword.getEndpoints(null, context)
```


### getFormats
Get a list of supported formats for documents, style guides and extensions.



```js
motaword.getFormats(null, context)
```


### downloadGlobalGlossary
Download your corporate account's global glossary. This endpoint is available only for corporate account customers.


```js
motaword.downloadGlobalGlossary(null, context)
```


### updateGlobalGlossary
Update your corporate account's global glossary. This endpoint is available only for corporate account customers.


```js
motaword.updateGlobalGlossary({
  "glossary": ""
}, context)
```

#### Parameters
* glossary (string) **required** - Glossary file. Currently supported formats: .xlsx, .tbx

### getLanguages
Get a list of supported languages


```js
motaword.getLanguages(null, context)
```


### getAccount
Get your account information and summary.


```js
motaword.getAccount(null, context)
```


### getProjects
Get a list of your projects


```js
motaword.getProjects({}, context)
```

#### Parameters
* page (integer)
* per_page (integer)

### createProject
Create a new project


```js
motaword.createProject({
  "source_language": "",
  "target_languages[]": []
}, context)
```

#### Parameters
* source_language (string) **required**
* target_languages[] (array) **required**
* callback_url (string) - Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
* custom (array) - Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value.
* documents[] (string) - Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls.
* styleguides[] (string) - Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls.
* glossaries[] (string) - Optional. Only one glossary is supported at the moment.

### getProject
Get single project


```js
motaword.getProject({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Project ID

### updateProject
Update project language pairs


```js
motaword.updateProject({
  "id": 0,
  "source_language": "",
  "target_languages[]": []
}, context)
```

#### Parameters
* id (integer) **required** - Project ID
* source_language (string) **required**
* target_languages[] (array) **required**
* callback_url (string) - Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
* custom (array) - Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced.

### download
Download the latest translation package. You must have given a /package call beforehand and wait until the packaging status is 'completed'.


```js
motaword.download({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Project ID

### downloadLanguage
Download only the translation package of this language. You must have given a /package call beforehand and wait until the packaging status is 'completed'.


```js
motaword.downloadLanguage({
  "id": 0,
  "language": ""
}, context)
```

#### Parameters
* id (integer) **required** - Project ID
* language (string) **required** - Language code. You can download the translation of only a specific language.

### launchProject
Launch your translation project


```js
motaword.launchProject({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Project ID
* payment_method (string) - Optional. Determines which method to use for payment. Options are 'corporate', 'client'.
* payment_code (string) - Optional. According to your corporate account configuration, this may be required.
* budget_code (string) - Optional with corporate accounts. Not available for others.

### package
Package the translation project, make it ready to be downloaded.


```js
motaword.package({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Project ID
* async (integer) - If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.

### trackPackage
This request will tell you the current progress of the translation packaging. You will use the 'key' provided by the /package call.


```js
motaword.trackPackage({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Project ID
* key (string) - This is the package tracking key provided in the response of a /package call.

### packageLanguage
Package the translation project, make it ready to be downloaded.


```js
motaword.packageLanguage({
  "id": 0,
  "language": ""
}, context)
```

#### Parameters
* id (integer) **required** - Project ID
* language (string) **required** - Language code. You can package the translation of only a specific language.
* async (integer) - If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.

### getProgress
Get the progress of an already launched project.


```js
motaword.getProgress({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Project ID

### getActivities
Get a list of realtime activities on the project, such as translation suggestion and translation approval.


```js
motaword.getActivities({
  "projectId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* page (integer)
* per_page (integer)

### getActivity
Get a single realtime activity.


```js
motaword.getActivity({
  "projectId": 0,
  "activityId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* activityId (integer) **required** - Activity ID

### submitComment
Submit a comment to an activity.


```js
motaword.submitComment({
  "projectId": 0,
  "activityId": 0,
  "comment": ""
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* activityId (integer) **required** - Activity ID
* comment (string) **required** - Comment text.

### getActivityComments
Get a list of comments belonging to this activity.


```js
motaword.getActivityComments({
  "projectId": 0,
  "activityId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* activityId (integer) **required** - Activity ID

### getComments
Get a list of activity comments throughout the whole project.


```js
motaword.getComments({
  "projectId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* page (integer)
* per_page (integer)

### getDocuments
Get a list of documents


```js
motaword.getDocuments({
  "projectId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID

### createDocument
Upload a new document


```js
motaword.createDocument({
  "projectId": 0,
  "documents[]": ""
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* documents[] (string) **required** - You can add as many files as you want in documents[] parameter.

### deleteDocument
Delete the document


```js
motaword.deleteDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* documentId (integer) **required** - Document ID

### getDocument
Get single document


```js
motaword.getDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* documentId (integer) **required** - Document ID

### updateDocument
Update the document. File name and contents will replaced with the new one.


```js
motaword.updateDocument({
  "projectId": 0,
  "documentId": 0,
  "documents": ""
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* documentId (integer) **required** - Document ID
* documents (string) **required** - Single file data. The name is plural to provide a consistent naming convention.

### downloadDocument
Download a document


```js
motaword.downloadDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* documentId (integer) **required** - Document ID

### getGlossaries
Get a list of glossaries


```js
motaword.getGlossaries({
  "projectId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID

### createGlossary
Upload a new glossary


```js
motaword.createGlossary({
  "projectId": 0,
  "glossaries": ""
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* glossaries (string) **required** - You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.

### deleteGlossary
Delete the glossary


```js
motaword.deleteGlossary({
  "projectId": 0,
  "glossaryId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* glossaryId (integer) **required** - Glossary ID

### getGlossary
Get single glossary


```js
motaword.getGlossary({
  "projectId": 0,
  "glossaryId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* glossaryId (integer) **required** - Glossary ID

### updateGlossary
Update the glossary. File name and contents will replaced with the new one.


```js
motaword.updateGlossary({
  "projectId": 0,
  "glossaryId": 0,
  "glossaries": ""
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* glossaryId (integer) **required** - Glossary ID
* glossaries (string) **required** - Single file data. The name is plural to provide a consistent naming convention.

### downloadGlossary
Download a glossary


```js
motaword.downloadGlossary({
  "projectId": 0,
  "glossaryId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* glossaryId (integer) **required** - Glossary ID

### getStyleGuides
Get a list of style guides


```js
motaword.getStyleGuides({
  "projectId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID

### createStyleGuide
Upload a new style guide


```js
motaword.createStyleGuide({
  "projectId": 0,
  "styleguides[]": ""
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* styleguides[] (string) **required** - You can add as many files as you want in styleguides[] parameter.

### deleteStyleGuide
Delete the style guide


```js
motaword.deleteStyleGuide({
  "projectId": 0,
  "styleGuideId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* styleGuideId (integer) **required** - Style Guide ID

### getStyleGuide
Get single style guide


```js
motaword.getStyleGuide({
  "projectId": 0,
  "styleGuideId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* styleGuideId (integer) **required** - Style Guide ID

### updteStyleGuide
Update the style guide. File name and contents will replaced with the new one.


```js
motaword.updteStyleGuide({
  "projectId": 0,
  "styleGuideId": 0,
  "styleguides": ""
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* styleGuideId (integer) **required** - Style guide ID
* styleguides (string) **required** - Single file data. The name is plural to provide a consistent naming convention.

### downloadStyleGuide
Download a style guide


```js
motaword.downloadStyleGuide({
  "projectId": 0,
  "styleGuideId": 0
}, context)
```

#### Parameters
* projectId (integer) **required** - Project ID
* styleGuideId (integer) **required** - Style Guide ID

### downloadGlobalStyleGuide
Download your corporate account's global style guide. This endpoint is available only for corporate account customers.


```js
motaword.downloadGlobalStyleGuide(null, context)
```


### updateGlobalStyleGuide
Update your corporate account's global style guide. This endpoint is available only for corporate account customers.


```js
motaword.updateGlobalStyleGuide({
  "styleguide": ""
}, context)
```

#### Parameters
* styleguide (string) **required** - Style guide file. Currently supported formats: .pdf, .docx, .txt

### getAccessToken
MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call. Currently, we only allow Client Credential type flow.



```js
motaword.getAccessToken({
  "grant_type": "",
  "Authorization": ""
}, context)
```

#### Parameters
* grant_type (string) **required** - OAuth2 grant type. Currently only 'client_credentials' available.
* Authorization (string) **required** - HTTP Basic Authorization header.

