# @datafire/motaword

Client library for MotaWord API

## Installation and Usage
```bash
npm install --save @datafire/motaword
```
```js
let motaword = require('@datafire/motaword').create({
  username: "",
  password: "",
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

### downloadAsync
Download async request files


```js
motaword.downloadAsync({
  "async_request_key": ""
}, context)
```

#### Input
* input `object`
  * async_request_key **required** `string`: Async operation key

#### Output
* output `string`

### getBlogPosts
Get blog posts - ordered by created desc by default


```js
motaword.getBlogPosts({}, context)
```

#### Input
* input `object`
  * locale `string`: Article language, default `en`. When no blog article is available and `fallback=true` is specified, it falls back to `en`.
  * fallback `boolean`: When `true`, and no article is found in the locale, it falls back to `locale=en`.
  * page `integer`
  * per_page `integer`

#### Output
* output [BlogArticleList](#blogarticlelist)

### getCommissions
Returns a commission list of current client.


```js
motaword.getCommissions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CommissionList](#commissionlist)

### getCommissionsByFilter
Returns a commission list of current client.


```js
motaword.getCommissionsByFilter({}, context)
```

#### Input
* input `object`
  * body [ReportFilter](#reportfilter)

#### Output
* output [CommissionList](#commissionlist)

### getCorporateUsers
Get a list of users for this corporate id


```js
motaword.getCorporateUsers({
  "corporateId": 0
}, context)
```

#### Input
* input `object`
  * corporateId **required** `integer`: Corporate ID

#### Output
* output [UserList](#userlist)

### deleteAccount
Delete requester account


```js
motaword.deleteAccount(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationStatus](#operationstatus)

### getDocuments
Get a list of your documents


```js
motaword.getDocuments({}, context)
```

#### Input
* input `object`
  * recent `boolean`: When true, this will return the most 4 recent active documents.
  * search `string`
  * type_filter `string` (values: ALL, TEXT_DOCUMENTS, PRESENTATIONS, SPREADSHEETS, PDFS, IMAGES, SUBTITLES, DESIGNS, LOCALIZATION, WEB, STYLE_GUIDES, GLOSSARIES)
  * language_code `string`: searches in source language of documents, in source and target languages of document's quote
  * page `integer`
  * per_page `integer`
  * order_by `string` (values: id, updated_at, created_at, name)
  * order_type `string` (values: asc, desc)
  * with[] `array`: Attach further information. Possible values 'preview' to fetch temporary preview URLs for Box.com or native PDF. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.

#### Output
* output [DocumentList](#documentlist)

### getSimilarDocuments
Find documents similar to this document. Optionally, include translation information.


```js
motaword.getSimilarDocuments({
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * documentId **required** `integer`: Document ID
  * per_page `integer`: Determines the number of similar documents to return.
  * with[] `array`: Attach further information. Possible values 'preview' to fetch temporary preview URLs for Box.com or native PDF. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.

#### Output
* output [DocumentList](#documentlist)

### useAsDraft
Use the translation of given source manual document as manual draft source for the given target document.


```js
motaword.useAsDraft({
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * documentId **required** `integer`: Document ID
  * body [UseAsDraftPayload](#useasdraftpayload)

#### Output
* output [OperationStatus](#operationstatus)

### useAsRegular
Use the translation of the given manual document as a regular file.


```js
motaword.useAsRegular({
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * documentId **required** `integer`: Document ID
  * body [UseAsRegularPayload](#useasregularpayload)

#### Output
* output [OperationStatus](#operationstatus)

### downgradeProofreader



```js
motaword.downgradeProofreader(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationStatus](#operationstatus)

### getEarnings
Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.


```js
motaword.getEarnings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Earnings](#earnings)

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

### freezeAccount
Freeze requester account for project notifications


```js
motaword.freezeAccount(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationStatus](#operationstatus)

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
  * glossary **required** `string`: Glossary file. Currently supported formats: .xlsx, .tbx

#### Output
* output [OperationStatus](#operationstatus)

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

### logLocation
Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.


```js
motaword.logLocation({}, context)
```

#### Input
* input `object`
  * body [LocationUpdateContent](#locationupdatecontent)

#### Output
* output [OperationStatus](#operationstatus)

### makeProofreader



```js
motaword.makeProofreader(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationStatus](#operationstatus)

### getMe
Get your user information, including client or vendor specific info.


```js
motaword.getMe(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### updateMe
Update your user information.


```js
motaword.updateMe({}, context)
```

#### Input
* input `object`
  * body [UserUpdateContent](#userupdatecontent)

#### Output
* output [User](#user)

### subscribeNotification



```js
motaword.subscribeNotification({}, context)
```

#### Input
* input `object`
  * body [NotificationSubscription](#notificationsubscription)

#### Output
* output [OperationStatus](#operationstatus)

### unsubscribeNotification



```js
motaword.unsubscribeNotification({}, context)
```

#### Input
* input `object`
  * body [NotificationSubscription](#notificationsubscription)

#### Output
* output [OperationStatus](#operationstatus)

### updatePassword
Update user password. Password should contain at least one uppercase, lowercase character and one number


```js
motaword.updatePassword({}, context)
```

#### Input
* input `object`
  * body [PasswordUpdateContent](#passwordupdatecontent)

#### Output
* output [OperationStatus](#operationstatus)

### getPaymentInfo
Get your payment Info


```js
motaword.getPaymentInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PaymentInfo](#paymentinfo)

### updatePaymentInfo
Update payment info


```js
motaword.updatePaymentInfo({}, context)
```

#### Input
* input `object`
  * body [UpdatePaymentInfo](#updatepaymentinfo)

#### Output
* output [PaymentInfo](#paymentinfo)

### uploadProfilePicture



```js
motaword.uploadProfilePicture({
  "profile_picture": ""
}, context)
```

#### Input
* input `object`
  * profile_picture **required** `string`: Profile picture file contents. Accepted extensions are png, jpg.

#### Output
* output [OperationStatus](#operationstatus)

### getProjects
Get a list of your projects


```js
motaword.getProjects({}, context)
```

#### Input
* input `object`
  * page `integer`
  * per_page `integer`
  * status[] `array`: Filter projects by status. Accepts multiple statuses. Possible values 'pending', 'started', 'completed'
  * with_pending `boolean`: deprecated. use `status[]` param.
  * with_started `boolean`: deprecated. use `status[]` param.
  * with_completed `boolean`: deprecated. use `status[]` param.
  * order_by `string` (values: id, status, delivery, price)
  * order_type `string` (values: asc, desc)

#### Output
* output [ProjectList](#projectlist)

### createProject
Create a new project


```js
motaword.createProject({}, context)
```

#### Input
* input `object`
  * callback_url `string`: Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
  * coupon_code `string`: Coupon code to redeem
  * custom `array`: Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value.
  * documents[] `string`: Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls.
  * glossaries[] `string`: Optional. Only one glossary is supported at the moment.
  * source_language `string`
  * styleguides[] `string`: Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls.
  * target_languages[] `array`

#### Output
* output [Project](#project)

### getVendorProjects
Get a list of your vendor projects


```js
motaword.getVendorProjects({}, context)
```

#### Input
* input `object`
  * joined `boolean`: Return only projects that this user has already joined
  * completed `boolean`: Return only projects that have been completed. When `true`, this makes `joined` true as well.
  * page `integer`
  * per_page `integer`

#### Output
* output [ProjectList](#projectlist)

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
* output [OperationStatus](#operationstatus)

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
  * with[] `array`: Include detailed information. Possible values 'client', 'vendor', 'score'

#### Output
* output [Project](#project)

### updateProject
Update project language pairs


```js
motaword.updateProject({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * callback_url `string`: Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
  * coupon_code `string`: Coupon code to redeem
  * custom `array`: Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced.
  * source_language `string`
  * target_languages[] `array`

#### Output
* output [Project](#project)

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
* output [OperationStatus](#operationstatus)

### deliverProject
Deliver project


```js
motaword.deliverProject({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output [OperationStatus](#operationstatus)

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

### getInvoice
Get invoice details


```js
motaword.getInvoice({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output [Invoice](#invoice)

### downloadHtmlInvoice
Download invoice as html by project id.


```js
motaword.downloadHtmlInvoice({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output `string`

### downloadPdfInvoice
Download invoice as pdf by project id.


```js
motaword.downloadPdfInvoice({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

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
  * bin `string`: Last 4 digits of the credit card you are using one-time. This parameter is only required when stripe_token is provided.
  * budget_code `string`: Optional with corporate accounts. Not available for others.
  * card_id `integer`: Optional. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin.
  * payment_code `string`: Optional. `corporate` payment method requires this.s
  * payment_method `string` (values: corporate, client, app, credit, corporate_card): Optional. Determines which method to use for payment. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin. `corporate` method follows corporate account policy automatically, either follows invoicing flow or automatically charges corporate's primary card.
  * stripe_token `string`: This is required if you are using a one-time credit card. This is the token generted from frontend via Stripe SDK. If you are using a one-time card with `stripe_token`, you must also provide `bin`, last 4 digits of the card.

#### Output
* output [ProjectLaunchResponse](#projectlaunchresponse)

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
  * raw `boolean`: This will return a more raw progress information for translation and proofreading. For instance, when completed, we will return 100% for both tasks by default, whereas their actual progress may be lower than 100%.

#### Output
* output [Progress](#progress)

### recreateProject
Recreate your translation project from scratch. This is a risky action, you will lose current translations.


```js
motaword.recreateProject({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output [OperationStatus](#operationstatus)

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
* output [OperationStatus](#operationstatus)

### deleteProjectWebhook
Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.


```js
motaword.deleteProjectWebhook({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output [OperationStatus](#operationstatus)

### getProjectWebhooks
Get project information (includes callback_url for webhook). Currently projects can have only 1 webhook registered.


```js
motaword.getProjectWebhooks({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID

#### Output
* output [Project](#project)

### postProjectWebhook
Update project webhook URL


```js
motaword.postProjectWebhook({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * body `object`
    * callback_url `string`: Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.

#### Output
* output [Project](#project)

### updateProjectWebhook
Update project webhook URL


```js
motaword.updateProjectWebhook({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Project ID
  * body `object`
    * callback_url `string`: Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.

#### Output
* output [Project](#project)

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

### getProjectDocuments
Get a list of documents


```js
motaword.getProjectDocuments({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * with[] `array`: Attach further information. Possible values 'preview' to fetch temporary preview URLs for Box.com or native PDF. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.

#### Output
* output [DocumentList](#documentlist)

### createProjectDocument
Upload a new document


```js
motaword.createProjectDocument({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documents[] `array`: You can add as many files as you want in documents[] parameter.
  * schemes[] `string`: JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.
  * source-links[] `array`: When provided, we will download the files from these URLs, in addition to files provded in `documents` parameter and then save as source documents

#### Output
* output [DocumentList](#documentlist)

### deleteProjectDocument
Delete the document


```js
motaword.deleteProjectDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documentId **required** `integer`: Document ID

#### Output
* output [OperationStatus](#operationstatus)

### getProjectDocument
Get single document


```js
motaword.getProjectDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documentId **required** `integer`: Document ID
  * with[] `array`: Attach further information. Possible values 'preview' to fetch temporary preview URLs for Box.com or native PDF. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.

#### Output
* output [Document](#document)

### updateProjectDocument
Update the document. File name and contents will replaced with the new one.


```js
motaword.updateProjectDocument({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documentId **required** `integer`: Document ID
  * documents `string`: Single file data. The name is plural to provide a consistent naming convention.
  * schemes `string`: JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.
  * source-link `object`

#### Output
* output [Document](#document)

### downloadProjectDocument
Download a document


```js
motaword.downloadProjectDocument({
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

### getDocumentTranslations
Get a list of strings and its translations in the document.


```js
motaword.getDocumentTranslations({
  "projectId": 0,
  "documentId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documentId **required** `integer`: Document ID

#### Output
* output [StringList](#stringlist)

### getDocumentTranslationsForLanguage
Get a list of strings and its translations in the document for this target language of the project.


```js
motaword.getDocumentTranslationsForLanguage({
  "projectId": 0,
  "documentId": 0,
  "language": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * documentId **required** `integer`: Document ID
  * language **required** `string`: Target language code.

#### Output
* output [StringList](#stringlist)

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
  * glossaries **required** `string`: You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.

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
* output [OperationStatus](#operationstatus)

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
  * glossaries **required** `string`: Single file data. The name is plural to provide a consistent naming convention.

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

### getProjectStrings
Get a list of strings and its translations in the project.


```js
motaword.getProjectStrings({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID

#### Output
* output [StringList](#stringlist)

### packageProjectTranslationMemory
Get the translation memory of a project in TMX format


```js
motaword.packageProjectTranslationMemory({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * async `integer`: If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.
  * format `string`: Translation Memory file format

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

### packageProjectTranslationMemoryStatus
If package call was async, check the status of the request


```js
motaword.packageProjectTranslationMemoryStatus({
  "projectId": 0,
  "async_request_key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * async_request_key **required** `string`: Async operation key

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

### packageProjectTranslationMemoryForLanguage
Get the translation memory of a project in TMX format


```js
motaword.packageProjectTranslationMemoryForLanguage({
  "projectId": 0,
  "languageCode": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * languageCode **required** `string`: Language Code
  * async `integer`: If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.
  * format `string`: Translation Memory file format

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

### packageProjectTranslationMemoryForLanguageStatus
If package call was async, check the status of the request


```js
motaword.packageProjectTranslationMemoryForLanguageStatus({
  "projectId": 0,
  "languageCode": "",
  "async_request_key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * languageCode **required** `string`: Language Code
  * async_request_key **required** `string`: Async operation key

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

### getProjectStringsForLanguage
Get a list of strings and its translations in the project for this target language in the project.


```js
motaword.getProjectStringsForLanguage({
  "projectId": 0,
  "language": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * language **required** `string`: Target language code

#### Output
* output [StringList](#stringlist)

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
  * with[] `array`: Attach further information. Possible values 'preview' to fetch temporary preview URLs for Box.com or native PDF. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.

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
  * styleguides[] **required** `string`: You can add as many files as you want in styleguides[] parameter.

#### Output
* output [StyleGuideList](#styleguidelist)

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
* output [OperationStatus](#operationstatus)

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
  * with[] `array`: Attach further information. Possible values 'preview' to fetch temporary preview URLs for Box.com or native PDF. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.

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
  * styleguides **required** `string`: Single file data. The name is plural to provide a consistent naming convention.

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

### getProjectTranslations
Deprecated. Use /projects/{projectId}/strings instead.


```js
motaword.getProjectTranslations({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID

#### Output
* output [StringList](#stringlist)

### getProjectTranslationsForLanguage
Deprecated. use /projects/{projectId}/strings/{language} instead.


```js
motaword.getProjectTranslationsForLanguage({
  "projectId": 0,
  "language": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID
  * language **required** `string`: Target language code

#### Output
* output [StringList](#stringlist)

### getProjectVendors
Get a list of vendors.


```js
motaword.getProjectVendors({
  "projectId": 0
}, context)
```

#### Input
* input `object`
  * projectId **required** `integer`: Project ID

#### Output
* output [UserList](#userlist)

### getLanguagePairsReport
Returns a report of language pairs.


```js
motaword.getLanguagePairsReport({}, context)
```

#### Input
* input `object`
  * body [ReportFilter](#reportfilter)

#### Output
* output [LanguagePairsReport](#languagepairsreport)

### getProjectsReport
Returns a report of corporate account users.


```js
motaword.getProjectsReport({}, context)
```

#### Input
* input `object`
  * body [ReportFilter](#reportfilter)

#### Output
* output [ProjectList](#projectlist)

### getUsersReport
Returns a report of corporate account users.


```js
motaword.getUsersReport({}, context)
```

#### Input
* input `object`
  * body [ReportFilter](#reportfilter)

#### Output
* output [UsersReport](#usersreport)

### sendEmailConfirmation
Sends email confirmation email for current user


```js
motaword.sendEmailConfirmation(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output
  * status [OperationStatusEnum](#operationstatusenum)
  * status `string` (values: success, already_confirmed)

### getResponsivity
Returns your vendor responsivity stats


```js
motaword.getResponsivity({}, context)
```

#### Input
* input `object`
  * period `string` (values: monthly, weekly): Period for calcualtion.

#### Output
* output [ResponsivityList](#responsivitylist)

### searchEverywhere
Search everywhere! Including projects, documents, translations...


```js
motaword.searchEverywhere({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: Search query term
  * include[] `array`: Search in these entities. Current oprions are projects, documents, strings. Can be multiple. When not provided, we'll search through all entities.
  * page `integer`
  * per_page `integer`

#### Output
* output [SearchEverywhereResult](#searcheverywhereresult)

### reindexDocuments
Reindex for search all of the client source and translation documents.


```js
motaword.reindexDocuments(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

### checkDocumentsReindex
Check reindex status of the client source and translation documents.


```js
motaword.checkDocumentsReindex({
  "async_request_key": ""
}, context)
```

#### Input
* input `object`
  * async_request_key **required** `string`: Async operation key

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

### getStats
Returns your client and vendor statistics. This used to be called "summary" (\@deprecated).


```js
motaword.getStats(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Stats](#stats)

### getCommissionStats
Returns the total commissions stats.


```js
motaword.getCommissionStats(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CommissionStats](#commissionstats)

### getCommissionStatsByFilter
Returns the total commissions stats by report filter.


```js
motaword.getCommissionStatsByFilter({}, context)
```

#### Input
* input `object`
  * body [ReportFilter](#reportfilter)

#### Output
* output [CommissionStats](#commissionstats)

### getPopularPairs
Returns the language pairs that you have ordered most.


```js
motaword.getPopularPairs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PopularLanguagePairs](#popularlanguagepairs)

### getProjectStats
Returns your project statistics.


```js
motaword.getProjectStats(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ClientProjectStats](#clientprojectstats)

### getStringStats
Returns your string statistics.


```js
motaword.getStringStats(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ClientStringStats](#clientstringstats)

### getStrings
Get a list of client/corporate strings (20 per page)


```js
motaword.getStrings({}, context)
```

#### Input
* input `object`
  * source_language `string`: Source Language Code
  * page `integer`: Requested page

#### Output
* output [ClientStrings](#clientstrings)

### postStrings
Translate Strings with MT


```js
motaword.postStrings({}, context)
```

#### Input
* input `object`
  * body `object`
    * contents `array`
      * items `string`
    * source_language `string`
    * target_languages `array`
      * items `string`

#### Output
* output [MachineTranslatedStrings](#machinetranslatedstrings)

### packageUserTranslationMemory
Get the translation memory of a client or corporate in TMX format


```js
motaword.packageUserTranslationMemory({
  "languageCode": ""
}, context)
```

#### Input
* input `object`
  * languageCode **required** `string`: Source Language Code
  * async `integer`: If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.
  * email `integer`: If you don't need us to email the TMX, set this to '0'. Default is 1.

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

### packageUserTranslationMemoryForLanguageStatus
If package call was async, check the status of the request


```js
motaword.packageUserTranslationMemoryForLanguageStatus({
  "languageCode": "",
  "async_request_key": ""
}, context)
```

#### Input
* input `object`
  * languageCode **required** `string`: Language Code
  * async_request_key **required** `string`: Async operation key

#### Output
* output [AsyncOperationStatus](#asyncoperationstatus)

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
  * styleguide **required** `string`: Style guide file. Currently supported formats: .pdf, .docx, .txt

#### Output
* output [OperationStatus](#operationstatus)

### getSwaggerJson
Get Swagger JSON


```js
motaword.getSwaggerJson(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### getAccessToken
MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call. Currently, we only allow Client Credential type flow.



```js
motaword.getAccessToken({
  "grant_type": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * grant_type **required** `string`: OAuth2 grant type. Supports 'client_credentials', 'password' or 'refresh_token', 'user_id' available.
  * password `string`: MW Account password (to be used in password grant type)
  * refresh_token `string`: Refresh token value for refresh token flow.
  * scope **required** `string`: Authorization scope. Use 'privileged' for private endpoints.
  * user_id `integer`: Value for user_id grant type flow.
  * username `string`: MW Account email (to be used in password grant type)

#### Output
* output [Token](#token)

### unfreezeAccount
Unfreeze requester account for project notifications


```js
motaword.unfreezeAccount(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationStatus](#operationstatus)

### getUsers
Get a list of platform users


```js
motaword.getUsers({}, context)
```

#### Input
* input `object`
  * page `integer`
  * per_page `integer`
  * user_type `string` (values: vendor, all)

#### Output
* output [UserList](#userlist)

### sendPasswordReminder
Sends password reset email to the user's registered email address


```js
motaword.sendPasswordReminder({}, context)
```

#### Input
* input `object`
  * body [Email](#email)

#### Output
* output [OperationStatus](#operationstatus)

### getUser
Get user information, including client or vendor specific info.


```js
motaword.getUser({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [User](#user)

### updateUser



```js
motaword.updateUser({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID
  * body [UserUpdateContent](#userupdatecontent)

#### Output
* output [User](#user)

### approveVendorApplication



```js
motaword.approveVendorApplication({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [OperationStatus](#operationstatus)

### deleteUserAccount
Delete requester account


```js
motaword.deleteUserAccount({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [OperationStatus](#operationstatus)

### getUserDocuments
Get a list of your documents


```js
motaword.getUserDocuments({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID
  * recent `boolean`: When true, this will return the most 4 recent active documents.
  * search `string`
  * type_filter `string` (values: ALL, TEXT_DOCUMENTS, PRESENTATIONS, SPREADSHEETS, PDFS, IMAGES, SUBTITLES, DESIGNS, LOCALIZATION, WEB, STYLE_GUIDES, GLOSSARIES)
  * language_code `string`: searches in source language of documents, in source and target languages of document's quote
  * page `integer`
  * per_page `integer`
  * order_by `string` (values: id, updated_at, created_at, name)
  * order_type `string` (values: asc, desc)

#### Output
* output [DocumentList](#documentlist)

### downgradeUserProofreader



```js
motaword.downgradeUserProofreader({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [OperationStatus](#operationstatus)

### getUserEarnings
Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.


```js
motaword.getUserEarnings({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [Earnings](#earnings)

### freezeUserAccount
Freeze requester account for project notifications


```js
motaword.freezeUserAccount({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [OperationStatus](#operationstatus)

### makeUserProofreader



```js
motaword.makeUserProofreader({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [OperationStatus](#operationstatus)

### subscribeUserNotification



```js
motaword.subscribeUserNotification({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID
  * body [NotificationSubscription](#notificationsubscription)

#### Output
* output [OperationStatus](#operationstatus)

### unsubscribeUserNotification



```js
motaword.unsubscribeUserNotification({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID
  * body [NotificationSubscription](#notificationsubscription)

#### Output
* output [OperationStatus](#operationstatus)

### getUserPaymentInfo
Get user payment Info


```js
motaword.getUserPaymentInfo({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [PaymentInfo](#paymentinfo)

### updateUserPaymentInfo
Update user payment info


```js
motaword.updateUserPaymentInfo({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID
  * body [PaymentInfo](#paymentinfo)

#### Output
* output [OperationStatus](#operationstatus)

### uploadUserProfilePicture



```js
motaword.uploadUserProfilePicture({
  "userId": 0,
  "profile_picture": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID
  * profile_picture **required** `string`: Profile picture file contents. Accepted extensions are png, jpg.

#### Output
* output [OperationStatus](#operationstatus)

### rejectVendorApplication



```js
motaword.rejectVendorApplication({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [OperationStatus](#operationstatus)

### sendUserEmailConfirmation
Sends email confirmation email for a user


```js
motaword.sendUserEmailConfirmation({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output
  * status [OperationStatusEnum](#operationstatusenum)
  * status `string` (values: success)

### getUserResponsivity
Returns a user's vendor responsivity stats


```js
motaword.getUserResponsivity({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID
  * period `string` (values: monthly, weekly): Period for calcualtion.

#### Output
* output [ResponsivityList](#responsivitylist)

### getUserStats
Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).


```js
motaword.getUserStats({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [Stats](#stats)

### getUserPopularPairs
Returns the language pairs that the user has ordered most.


```js
motaword.getUserPopularPairs({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [PopularLanguagePairs](#popularlanguagepairs)

### getUserProjectStats
Returns a user's project statistics.


```js
motaword.getUserProjectStats({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [ClientProjectStats](#clientprojectstats)

### suspendUser



```js
motaword.suspendUser({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID
  * body `object`
    * reason `string`: Suspension reason for vendor

#### Output
* output [OperationStatus](#operationstatus)

### unfreezeUserAccount
Unfreeze requester account for project notifications


```js
motaword.unfreezeUserAccount({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [OperationStatus](#operationstatus)



## Definitions

### Activity
* Activity `object`
  * activity_at `integer`: Unix epoch time
  * id `integer`
  * links [ActivityLinks](#activitylinks)
  * source_text `string`: Source text
  * target_text `string`: Target text of the activity, which is actually the translation of the source text.
  * translator `integer`: Unique identifier of the translator/proofreader of this activity.
  * type `string` (values: translated, proofread): Currently there are two available activity types; 'translated', 'proofread'.

### ActivityLinks
* ActivityLinks
  * self [Href](#href)
  * comments [Href](#href)
  * project [Href](#href)

### ActivityList
* ActivityList `object`
  * activities `array`
    * items [Activity](#activity)
  * meta [PagingMeta](#pagingmeta)

### Address
* Address `object`
  * city `string`
  * country `string`
  * state `string`
  * street `string`
  * zip `string`

### AsyncOperationStatus
* AsyncOperationStatus `object`
  * duration `integer`: operation duration in milliseconds
  * key `string`
  * message `object`
  * status [AsyncOperationStatusEnum](#asyncoperationstatusenum)

### AsyncOperationStatusEnum
* AsyncOperationStatusEnum `string` (values: sent, started, completed, failed)

### BillingAddress
* BillingAddress
  * city `string`
  * country `string`
  * state `string`
  * street `string`
  * zip `string`
  * name `string`: addressing name, such as company name. used in billing address.

### BlogArticle
* BlogArticle `object`
  * announcement_type `string` (values: article, case, famous-translators, sales)
  * author `string`
  * content `string`: Article content
  * created_at `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * excerpt `string`: Article excerpt
  * id `integer`
  * language `string`: language code
  * links [BlogArticleLinks](#blogarticlelinks)
  * slug `string`
  * title `string`
  * topic `string`

### BlogArticleLinks
* BlogArticleLinks
  * self [Href](#href)
  * android [Href](#href)
  * header_image [Href](#href)
  * ios [Href](#href)
  * web [Href](#href)

### BlogArticleList
* BlogArticleList `object`
  * articles `array`
    * items [BlogArticle](#blogarticle)
  * meta [PagingMeta](#pagingmeta)

### CallbackResult
* CallbackResult `object`
  * data [Project](#project)
  * result `string`: Callback response returned from `url`.
  * type [ProjectStatus](#projectstatus)
  * url `string`: The URL that received the callback.

### ClientProjectStat
* ClientProjectStat `object`
  * languages `array`
    * items `string`
  * month `string`
  * number_of_projects `integer`
  * total_spending `number`
  * week `string`

### ClientProjectStats
* ClientProjectStats `object`
  * stats `array`
    * items [ClientProjectStat](#clientprojectstat)

### ClientStats
* ClientStats `object`
  * document_count `integer`
  * nps `number`
  * started_project_count `integer`
  * total_discounted [Monetary](#monetary)
  * total_project_count `integer`
  * total_spending `number`
  * translator_count `integer`

### ClientStringStats
* ClientStringStats `object`
  * language_counts `array`
    * items [LanguageStringStat](#languagestringstat)
  * total_project_strings_count `integer`
  * total_tm_strings_count `integer`

### ClientStringTranslation
* ClientStringTranslation `object`
  * content `string`
  * last_changed `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * resource `string`
  * resource_id `string`
  * state `string` (values: Translated, Approved)
  * target_language `string`

### ClientStringWithTranslations
* ClientStringWithTranslations `object`
  * content `string`
  * language `string`
  * last_changed `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * translations `array`
    * items [ClientStringTranslation](#clientstringtranslation)

### ClientStrings
* ClientStrings `object`
  * meta [PagingMeta](#pagingmeta)
  * strings `array`
    * items [ClientStringWithTranslations](#clientstringwithtranslations)

### Comment
* Comment `object`
  * comment `string`: Comment text.
  * commented_at `integer`: Unix epoch time
  * id `integer`
  * links [CommentLinks](#commentlinks)

### CommentLinks
* CommentLinks
  * self [Href](#href)
  * activity [Href](#href)
  * project [Href](#href)

### CommentList
* CommentList `object`
  * activities `array`
    * items [Comment](#comment)
  * meta [PagingMeta](#pagingmeta)

### Commission
* Commission `object`
  * amount [Monetary](#monetary)
  * date `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * project [Project](#project)
  * status `string` (values: completed, unclaimed, failed, sent, waiting, waiting_invoice)

### CommissionList
* CommissionList `object`
  * commissions `array`
    * items [Commission](#commission)
  * meta [PagingMeta](#pagingmeta)

### CommissionStats
* CommissionStats `object`
  * balance [Monetary](#monetary)
  * paid [Monetary](#monetary)
  * quote_total [Monetary](#monetary)
  * total [Monetary](#monetary)

### CreditCard
* CreditCard `object`
  * bin `string`
  * id `integer`

### Document
* Document `object`
  * file_type `string`: Extension of the file
  * id `integer`
  * links [DocumentLinks](#documentlinks)
  * manual_files [ManualFiles](#manualfiles)
  * name `string`
  * review_in_manual_editor `boolean`
  * scheme `object`
  * source_language `string`
  * subject `string`
  * target_languages `array`
    * items `string`
  * uploaded_at `integer`: Unix epoch time
  * word_count `integer`

### DocumentInSearch
* DocumentInSearch
  * file_type `string`: Extension of the file
  * id `integer`
  * links [DocumentLinks](#documentlinks)
  * manual_files [ManualFiles](#manualfiles)
  * name `string`
  * review_in_manual_editor `boolean`
  * scheme `object`
  * source_language `string`
  * subject `string`
  * target_languages `array`
    * items `string`
  * uploaded_at `integer`: Unix epoch time
  * word_count `integer`
  * search_result_reason `string`

### DocumentLinks
* DocumentLinks
  * self [Href](#href)
  * admins `object`
  * download [Href](#href)
  * editors `object`
  * preview-box [Href](#href)
  * preview-pdf [Href](#href)
  * preview-pdf-viewer [Href](#href)
  * project [Href](#href)
  * thumbnail [Href](#href)

### DocumentList
* DocumentList `object`
  * documents `array`
    * items [Document](#document)
  * meta [PagingMeta](#pagingmeta)

### Earning
* Earning `object`
  * amount `number`
  * currency `string`
  * due_date `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * status `string` (values: paid, pending, failed)
  * words `integer`
  * words_approved `integer`
  * words_translated `integer`

### EarningWithTQS
* EarningWithTQS
  * amount `number`
  * currency `string`
  * due_date `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * status `string` (values: paid, pending, failed)
  * words `integer`
  * words_approved `integer`
  * words_translated `integer`
  * is_above_average `boolean`: Is this score above or below the average among other vendors in the same project?
  * score `number`
  * strings_edited `integer`: The number of translated strings by this translator which was edited by a proofreader.
  * strings_translated `integer`: The number of translated strings by this translator.
  * project_id `integer`

### Earnings
* Earnings `object`
  * completed `array`
    * items [EarningWithTQS](#earningwithtqs)
  * ongoing `array`
    * items [EarningWithTQS](#earningwithtqs)
  * total `number`

### Email
* Email `object`
  * email `string`

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
  * uploaded_at `integer`: Unix epoch time

### GlossaryList
* GlossaryList `object`
  * glossaries `array`
    * items [Glossary](#glossary)
  * meta [PagingMeta](#pagingmeta)

### Href
* Href `object`
  * href `string`

### Invoice
* Invoice `object`
  * amount `number`: Monetary amount
  * billing [BillingAddress](#billingaddress)
  * currency `string`
  * id `integer`
  * invoice_no `integer`
  * invoiced_at `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * links [InvoiceLinks](#invoicelinks)
  * status `string`

### InvoiceLinks
* InvoiceLinks
  * self [Href](#href)
  * corporate [Href](#href)
  * html [Href](#href)
  * json [Href](#href)
  * pdf [Href](#href)
  * project [Href](#href)
  * view [Href](#href)

### Language
* Language `object`
  * code `string`
  * name `string`

### LanguagePair
* LanguagePair `object`
  * source_language `string`
  * target_language `string`

### LanguagePairsReport
* LanguagePairsReport `object`
  * meta [PagingMeta](#pagingmeta)
  * report `array`
    * items `object`
      * language_pair `object`
        * source_language `string`
        * target_language `string`
      * spending `number`
      * word_count `integer`

### LanguageScore
* LanguageScore `number`

### LanguageStringStat
* LanguageStringStat `object`
  * project_string_count `integer`
  * source_language `string`
  * tm_string_count `integer`

### LinkedSourceDocument
* LinkedSourceDocument `object`
  * name `string`
  * size `integer`: file size in bytes. optional.
  * source `string` (values: dropbox, googledrive, icloud): Preferred source names are listed as enum. If you have a custom file type, simply enter that name.
  * url `string`

### LinksMeta
* LinksMeta `object`
  * self [Href](#href)

### ListOrderType
* ListOrderType `string` (values: asc, desc)

### LocationUpdateContent
* LocationUpdateContent `object`
  * lat **required** `number`: Latitude of location
  * lon **required** `number`: Longitude of location
  * timestamp `integer`

### MachineTranslatedStrings
* MachineTranslatedStrings `object`
  * cost [Monetary](#monetary)
  * strings `array`
    * items [ClientStringWithTranslations](#clientstringwithtranslations)

### ManualFile
* ManualFile `object`
  * driveFileId `integer`
  * isProofread `boolean`
  * isTranslated `boolean`
  * language `string`
  * proofreadingFileId `integer`
  * translationFileId `integer`

### ManualFiles
* ManualFiles `array`
  * items [ManualFile](#manualfile)

### Monetary
* Monetary `object`
  * amount `number`
  * currency `string`

### NotificationSubscription
* NotificationSubscription `object`
  * device `string` (values: iOS, Android, Chrome, Firefox, Safari, Edge, Amazon, WindowsPhone, Windows, MacOS)
  * endpoint `string`: OneSignal calls this "player ID".
  * type `string` (values: OneSignal)

### OperationStatus
* OperationStatus `object`
  * status [OperationStatusEnum](#operationstatusenum)

### OperationStatusEnum
* OperationStatusEnum `string` (values: success, error)

### Package
* Package
  * status [PackageStatusEnum](#packagestatusenum)
  * key `string`: This is the unique package tracking key. You can use this key to track the current progress of the translation packaging with /package/check call.

### PackageStatus
* PackageStatus `object`
  * status [PackageStatusEnum](#packagestatusenum)

### PackageStatusEnum
* PackageStatusEnum `string` (values: started, packaging, completed): The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package.

### PagingLinksMeta
* PagingLinksMeta
  * self [Href](#href)
  * next `string`
  * previous `string`

### PagingMeta
* PagingMeta `object`
  * paging `object`
    * links [PagingLinksMeta](#paginglinksmeta)
    * page `integer`
    * per_page `integer`
    * total_count `integer`

### PasswordUpdateContent
* PasswordUpdateContent `object`
  * password `string`: New Password

### PaymentInfo
* PaymentInfo `object`
  * billing [BillingAddress](#billingaddress)
  * card [CreditCard](#creditcard)
  * corporate `object`
    * allow_api_invoicing `boolean`
    * allow_payment_code `boolean`
    * auto_charge `boolean`
    * billing [BillingAddress](#billingaddress)
    * card [CreditCard](#creditcard)

### PopularLanguagePairs
* PopularLanguagePairs `object`
  * pairs `array`
    * items [LanguagePair](#languagepair)

### Progress
* Progress
  * languages `object`
  * links [ProgressLink](#progresslink)
  * project_status [ProjectStatus](#projectstatus)
  * proofreading `number`
  * total `number`
  * translation `number`

### ProgressLink
* ProgressLink
  * self [Href](#href)
  * project [Href](#href)

### ProgressSub
* ProgressSub `object`
  * proofreading `number`
  * total `number`
  * translation `number`

### Project
* Project `object`
  * average_scores `object`
  * budget_code `string`
  * callback_url `string`: Callback URL to notify when project status changed.
  * client [User](#user)
  * completed_on `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * created_at `integer`: Unix epoch time
  * custom `object`: Custom data provided while creating a new project.
  * delivery_at `integer`: Unix epoch time
  * errors `array`: A list of errors. Visible when creating a project and uploading your documents at the same time, in case of multiple errors.
    * items [Error](#error)
  * id `integer`
  * is_manual `boolean`
  * links [ProjectLinks](#projectlinks)
  * pairs [VendorProjectPairs](#vendorprojectpairs)
  * price `object`
    * amount `number`
    * currency `string`
    * usd_amount `number`: USD is our base pricing currency. If `currency` is different, this will help.
  * price_without_discount `object`
    * amount `number`
    * currency `string`
    * usd_amount `number`: USD is our base pricing currency. If `currency` is different, this will help.
  * role [VendorProjectRole](#vendorprojectrole)
  * source [ProjectSource](#projectsource)
  * source_language `string`
  * status [ProjectStatus](#projectstatus)
  * subjects `array`
    * items `string`
  * target_languages `array`
    * items `string`
  * tms_name `string`: TMS project name for this MW project. Requires privileged scope.
  * valid_until `integer`: Unix epoch time. Available only if status is `pending`.
  * vendor_word_count `integer`
  * word_count `integer`

### ProjectInSearch
* ProjectInSearch
  * average_scores `object`
  * budget_code `string`
  * callback_url `string`: Callback URL to notify when project status changed.
  * client [User](#user)
  * completed_on `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * created_at `integer`: Unix epoch time
  * custom `object`: Custom data provided while creating a new project.
  * delivery_at `integer`: Unix epoch time
  * errors `array`: A list of errors. Visible when creating a project and uploading your documents at the same time, in case of multiple errors.
    * items [Error](#error)
  * id `integer`
  * is_manual `boolean`
  * links [ProjectLinks](#projectlinks)
  * pairs [VendorProjectPairs](#vendorprojectpairs)
  * price `object`
    * amount `number`
    * currency `string`
    * usd_amount `number`: USD is our base pricing currency. If `currency` is different, this will help.
  * price_without_discount `object`
    * amount `number`
    * currency `string`
    * usd_amount `number`: USD is our base pricing currency. If `currency` is different, this will help.
  * role [VendorProjectRole](#vendorprojectrole)
  * source [ProjectSource](#projectsource)
  * source_language `string`
  * status [ProjectStatus](#projectstatus)
  * subjects `array`
    * items `string`
  * target_languages `array`
    * items `string`
  * tms_name `string`: TMS project name for this MW project. Requires privileged scope.
  * valid_until `integer`: Unix epoch time. Available only if status is `pending`.
  * vendor_word_count `integer`
  * word_count `integer`
  * search_result_reason `string`

### ProjectLaunchResponse
* ProjectLaunchResponse `object`
  * status [ProjectLaunchResponseEnum](#projectlaunchresponseenum)

### ProjectLaunchResponseEnum
* ProjectLaunchResponseEnum `string` (values: started)

### ProjectLinks
* ProjectLinks
  * self [Href](#href)
  * documents [Href](#href)
  * glossaries [Href](#href)
  * styleguides [Href](#href)

### ProjectList
* ProjectList `object`
  * meta [PagingMeta](#pagingmeta)
  * projects `array`
    * items [Project](#project)

### ProjectSource
* ProjectSource `string` (values: api, web)

### ProjectStatus
* ProjectStatus `string` (values: pending, started, completed, translated, proofread)

### ProjectTQS
* ProjectTQS `object`
  * is_above_average `boolean`: Is this score above or below the average among other vendors in the same project?
  * score `number`
  * strings_edited `integer`: The number of translated strings by this translator which was edited by a proofreader.
  * strings_translated `integer`: The number of translated strings by this translator.

### ReportFilter
* ReportFilter `object`
  * budget_code `string`: budget code filter. valid for corporate accounts only.
  * date_from `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * date_to `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * source_languages `array`: List of source language codes.
    * items `string`
  * target_languages `array`: List of target language codes.
    * items `string`
  * users `array`: List of corporate user IDs. Valid for corporate accounts only.
    * items `integer`

### Responsivity
* Responsivity `object`
  * invited `integer`
  * month `string`
  * notEntered `integer`
  * onlyEntered `integer`
  * score `number`
  * week `string`
  * worked `integer`

### ResponsivityList
* ResponsivityList `object`
  * links
    * self [Href](#href)
  * responsivity `array`
    * items [Responsivity](#responsivity)

### SearchEverywhereResult
* SearchEverywhereResult `object`
  * meta [PagingMeta](#pagingmeta)
  * result `object`
    * documents `array`
      * items [DocumentInSearch](#documentinsearch)
    * projects `array`
      * items [ProjectInSearch](#projectinsearch)
    * strings `array`
      * items [StringInSearch](#stringinsearch)

### SingleString
* SingleString `object`
  * content `string`: source string content
  * file_id `integer`
  * id `string`

### SocialMedia
* SocialMedia `object`
  * facebook_url `string`
  * linkedIn_url `string`
  * twitter_url `string`

### Stats
* Stats `object`
  * client [ClientStats](#clientstats)
  * vendor [VendorStats](#vendorstats)

### StringInSearch
* StringInSearch `object`
  * file_id `integer`
  * internal_project_id `integer`
  * last_updated `string`: the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
  * project_id `integer`
  * search_score `number`
  * source `string`
  * status [StringTranslationState](#stringtranslationstate)
  * string_id `integer`
  * target `string`
  * targets `array`
    * items `string`
  * tm_name `string`
  * type `string` (values: LOCAL_PROJECT, IMPORTED_TM): String search result typ from ZNT. Options are LOCAL_PROJECT, IMPORTED_TM. Imported TM results should probably not be visible to end users.

### StringList
* StringList `object`
  * meta [PagingMeta](#pagingmeta)
  * translations `array`
    * items [StringWithTranslations](#stringwithtranslations)

### StringTranslation
* StringTranslation `object`
  * content `string`: source string content
  * id `string`
  * state [StringTranslationState](#stringtranslationstate)

### StringTranslationState
* StringTranslationState `string` (values: Approved, Translated)

### StringWithTranslations
* StringWithTranslations
  * content `string`: source string content
  * file_id `integer`
  * id `string`
  * translations `object`

### StyleGuide
* StyleGuide `object`
  * id `integer`
  * links [DocumentLinks](#documentlinks)
  * name `string`
  * uploaded_at `integer`: Unix epoch time

### StyleGuideList
* StyleGuideList `object`
  * meta [PagingMeta](#pagingmeta)
  * styleguides `array`
    * items [StyleGuide](#styleguide)

### Tag
* Tag `string`

### Token
* Token `object`
  * access_token `string`
  * expires_in `integer`
  * refresh_token `string`
  * scope `string`
  * token_type `string`
  * user_id `integer`

### TokenError
* TokenError
  * code `string`
  * help `string`
  * http_code `integer`
  * message `string`
  * account_status `string` (values: registered, email_confirmed, deleted, suspended, rejected, approved, resume, webinar, course)

### UpdatePaymentInfo
* UpdatePaymentInfo
  * city `string`
  * country `string`
  * state `string`
  * street `string`
  * zip `string`
  * bin `string`
  * stripeToken `string`

### UseAsDraftPayload
* UseAsDraftPayload `object`
  * fromFileId `number`
  * fromManualTranslationFileId `number`
  * toManualTranslationFileId `number`

### UseAsRegularPayload
* UseAsRegularPayload `object`
  * allowReviewInManualEditor `boolean`
  * disableInvitations `boolean`
  * fromManualTranslationFileId `number`
  * hideNumbers `boolean`
  * recreate `boolean`

### User
* User `object`
  * billing [BillingAddress](#billingaddress)
  * birthday `string`
  * can_work_manual_files `boolean`: \@deprecated. use `vendor` key
  * city `string`: \@deprecated. use mailing or billing key.
  * client `object`
    * corporate `object`
      * email `string`
      * id `integer`
      * logo `string`
      * name `string`
    * nps `number`
    * subjects `object`
  * corporate_id `integer`
  * country `string`: \@deprecated. use mailing or billing key.
  * created_at `integer`: Unix epoch time
  * do_not_contact `boolean`
  * email `string`
  * first_name `string`
  * id `integer`
  * is_client `boolean`
  * is_developer `boolean`
  * is_proofreader `boolean`: \@deprecated. use `vendor` key
  * is_prospect `boolean`
  * is_sales_person `boolean`
  * is_vendor `boolean`
  * language_pairs `array`: \@deprecated. use `vendor` key
    * items [LanguagePair](#languagepair)
  * last_name `string`
  * last_seen_online_at `integer`: Unix epoch time
  * links [UserLinks](#userlinks)
  * locale `string`: User Locale
  * mailing [Address](#address)
  * name `string`
  * native_language `string`: \@deprecated. Native language of user
  * nps `number`: \@deprecated. use /stats endpoint for the current nps value.
  * phone_number `string`
  * profile_picture_path `string`
  * social_media [SocialMedia](#socialmedia)
  * state `string`: \@deprecated. use mailing or billing key.
  * status `string`
  * street `string`: \@deprecated. use mailing or billing key.
  * timezone `string`
  * tms_user_name `string`: \@deprecated. use `vendor` key
  * vendor `object`
    * tags `array`
      * items [Tag](#tag)
    * can_work_manual_files `boolean`
    * is_frozen `boolean`
    * is_proofreader `boolean`
    * language_pairs `array`
      * items [LanguagePair](#languagepair)
    * native_language `string`: Native language of user
    * paypal_email `string`
    * require_1099 `boolean`
    * tms_user_name `string`
  * zip_code `string`: \@deprecated. use mailing or billing key. new key name is "zip".

### UserLinks
* UserLinks
  * self [Href](#href)
  * projects [Href](#href)
  * responsivity [Href](#href)
  * stats [Href](#href)

### UserList
* UserList `object`
  * meta [PagingMeta](#pagingmeta)
  * users `array`
    * items [User](#user)

### UserUpdateContent
* UserUpdateContent
  * city `string`
  * country `string`
  * state `string`
  * street `string`
  * zip `string`
  * email `string`: Optional. User e-mail.
  * first_name `string`: Optional. User first name.
  * last_name `string`: Optional. User last name.
  * notifications `object`: Notification settings
    * phone_number `string`: User phone number
    * sms_enabled `boolean`: User sms notification setting
  * paypal_email `string`: Optional. Vendor paypal e-mail
  * require_1099 `boolean`: Optional. Whether this vendor requires 1099 form in US for their earnings.

### UsersReport
* UsersReport `object`
  * meta [PagingMeta](#pagingmeta)
  * report `array`
    * items `object`
      * spending `number`
      * user [User](#user)
      * word_count `integer`

### VendorEarningStats
* VendorEarningStats `object`
  * total `number`: total amount of USD that this user has earned in the platform so far.

### VendorProjectPair
* VendorProjectPair `object`
  * currency `string`
  * is_proofreader `boolean`: Indicates if the vendor be able to proofred this pair
  * proofreader [User](#user)
  * proofreading_rate `number`
  * source_language `string`: Source language code
  * target_language `string`: Target language code
  * translation_rate `number`

### VendorProjectPairs
* VendorProjectPairs `array`
  * items [VendorProjectPair](#vendorprojectpair)

### VendorProjectRole
* VendorProjectRole `string` (values: translator, proofreader): Currently authed vendor's role in this project. If vendor has already joined, this contains the role they joined the project with. If not joined yet, this is the role that they can join the project with.

### VendorProjectStats
* VendorProjectStats `object`
  * invited `integer`: total number of projects that this user was invited to. TODO this key is to replace "total" key due to naming ambiguity.
  * total `integer`: total number of projects that this user was invited to.
  * worked `integer`: total number of projects that this user actually worked on.

### VendorStats
* VendorStats `object`
  * earnings [VendorEarningStats](#vendorearningstats)
  * projects [VendorProjectStats](#vendorprojectstats)
  * words [VendorWordStats](#vendorwordstats)

### VendorWordStats
* VendorWordStats `object`
  * approved `integer`: total number of words that this user has approved so far.
  * translated `integer`: total number of words that this user has translated so far.


