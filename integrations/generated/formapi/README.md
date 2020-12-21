# @datafire/formapi

Client library for API v1

## Installation and Usage
```bash
npm install --save @datafire/formapi
```
```js
let formapi = require('@datafire/formapi').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

DocSpring is a service that helps you fill out and sign PDF templates.

## Actions

### testAuthentication
Test Authentication


```js
formapi.testAuthentication(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * status **required** `string` (values: success)

### combineSubmissions
Merge generated PDFs together


```js
formapi.combineSubmissions({
  "body": {
    "submission_ids": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * expires_in `integer`
    * metadata `object`
    * submission_ids **required** `array`
      * items `string`
    * test `boolean`

#### Output
* output `object`
  * combined_submission **required** `object`
    * actions `array`
      * items [combined_submission_action](#combined_submission_action)
    * download_url `string`
    * expired **required** `boolean`
    * expires_at `string`
    * id **required** `string`
    * metadata `object`
    * pdf_hash `string`
    * source_pdfs **required** `array`
    * state **required** `string` (values: pending, processed, error)
    * submission_ids **required** `array`
      * items `string`
  * errors `array`
    * items `string`
  * status **required** `string` (values: success, error)

### expireCombinedSubmission
Expire a combined submission


```js
formapi.expireCombinedSubmission({
  "combined_submission_id": ""
}, context)
```

#### Input
* input `object`
  * combined_submission_id **required** `string`

#### Output
* output `object`
  * actions `array`
    * items [combined_submission_action](#combined_submission_action)
  * download_url `string`
  * expired **required** `boolean`
  * expires_at `string`
  * id **required** `string`
  * metadata `object`
  * pdf_hash `string`
  * source_pdfs **required** `array`
  * state **required** `string` (values: pending, processed, error)
  * submission_ids **required** `array`
    * items `string`

### getCombinedSubmission
Check the status of a combined submission (merged PDFs)


```js
formapi.getCombinedSubmission({
  "combined_submission_id": ""
}, context)
```

#### Input
* input `object`
  * combined_submission_id **required** `string`

#### Output
* output `object`
  * actions `array`
    * items [combined_submission_action](#combined_submission_action)
  * download_url `string`
  * expired **required** `boolean`
  * expires_at `string`
  * id **required** `string`
  * metadata `object`
  * pdf_hash `string`
  * source_pdfs **required** `array`
  * state **required** `string` (values: pending, processed, error)
  * submission_ids **required** `array`
    * items `string`

### combinePdfs
Merge submission PDFs, template PDFs, or custom files


```js
formapi.combinePdfs({
  "body": {
    "source_pdfs": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * delete_custom_files `boolean`
    * expires_in `integer`
    * metadata `object`
    * source_pdfs **required** `array`
    * test `boolean`

#### Output
* output `object`
  * combined_submission **required** `object`
    * actions `array`
      * items [combined_submission_action](#combined_submission_action)
    * download_url `string`
    * expired **required** `boolean`
    * expires_at `string`
    * id **required** `string`
    * metadata `object`
    * pdf_hash `string`
    * source_pdfs **required** `array`
    * state **required** `string` (values: pending, processed, error)
    * submission_ids **required** `array`
      * items `string`
  * errors `array`
    * items `string`
  * status **required** `string` (values: success, error)

### createCustomFileFromUpload
Create a new custom file from a cached presign upload


```js
formapi.createCustomFileFromUpload({
  "body": {
    "cache_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * cache_id **required** `string`

#### Output
* output `object`
  * custom_file **required** `object`
    * id **required** `string`
    * url **required** `string`
  * errors `array`
    * items `string`
  * status **required** `string` (values: success, error)

### getDataRequest
Look up a submission data request


```js
formapi.getDataRequest({
  "data_request_id": ""
}, context)
```

#### Input
* input `object`
  * data_request_id **required** `string`

#### Output
* output [submission_data_request](#submission_data_request)

### updateDataRequest
Update a submission data request


```js
formapi.updateDataRequest({
  "data_request_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * data_request_id **required** `string`
  * body **required** `object`
    * auth_phone_number_hash `string`
    * auth_provider `string`
    * auth_second_factor_type `string` (values: none, phone_number, totp, mobile_push, security_key, fingerprint)
    * auth_session_id_hash `string`
    * auth_session_started_at `string`
    * auth_type `string` (values: none, password, oauth, email_link, phone_number, ldap, saml)
    * auth_user_id_hash `string`
    * auth_username_hash `string`
    * email `string`
    * fields `array`
      * items `string`
    * metadata `object`
    * name `string`
    * order `integer`

#### Output
* output `object`
  * data_request **required** [submission_data_request](#submission_data_request)
  * errors `array`
    * items `string`
  * status **required** `string` (values: success, error)

### createDataRequestToken
Creates a new data request token for form authentication


```js
formapi.createDataRequestToken({
  "data_request_id": ""
}, context)
```

#### Input
* input `object`
  * data_request_id **required** `string`

#### Output
* output `object`
  * errors `array`
    * items `string`
  * status **required** `string` (values: success, error)
  * token **required** `object`
    * data_request_url **required** `string`
    * expires_at **required** `string`
    * id **required** `string`
    * secret **required** `string`

### listFolders
Get a list of all folders


```js
formapi.listFolders({}, context)
```

#### Input
* input `object`
  * parent_folder_id `string`: Filter By Folder Id

#### Output
* output `array`
  * items `object`
    * id `string`
    * name `string`
    * parent_folder_id `string`
    * path `string`

### createFolder
Create a folder


```js
formapi.createFolder({
  "body": {
    "folder": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * folder **required** `object`
      * name **required** `string`
      * parent_folder_id `string`

#### Output
* output `object`
  * id `string`
  * name `string`
  * parent_folder_id `string`
  * path `string`

### deleteFolder
Delete a folder


```js
formapi.deleteFolder({
  "folder_id": ""
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`

#### Output
* output `object`
  * id `string`
  * name `string`
  * parent_folder_id `string`
  * path `string`

### moveFolderToFolder
Move a folder


```js
formapi.moveFolderToFolder({
  "folder_id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`
  * body **required** `object`
    * parent_folder_id `string`

#### Output
* output `object`
  * id `string`
  * name `string`
  * parent_folder_id `string`
  * path `string`

### renameFolder
Rename a folder


```js
formapi.renameFolder({
  "folder_id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * folder_id **required** `string`
  * body **required** `object`
    * name **required** `string`

#### Output
*Output schema unknown*

### batchGeneratePdfs
Generates multiple PDFs


```js
formapi.batchGeneratePdfs({
  "body": {
    "submissions": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * metadata `object`
    * submissions **required** `array`
      * items `object`
        * css `string`
        * data **required** `object`
        * html `string`
        * metadata `object`
        * template_id **required** `string`
        * test `boolean`
    * template_id `string`
    * test `boolean`

#### Output
* output `object`
  * error `string`
  * errors `array`
    * items `string`
  * status **required** `string` (values: success, error)
  * submission_batch **required** `object`
    * completion_percentage **required** `integer`
    * error_count **required** `integer`
    * id **required** `string`
    * metadata **required** `object`
    * pending_count **required** `integer`
    * processed_at **required** `string`
    * state **required** `string` (values: pending, processed, error)
    * submissions `array`
      * items [submission](#submission)
    * total_count **required** `integer`
  * submissions **required** `array`
    * items `object`
      * errors `array`
        * items `string`
      * status **required** `string` (values: success, error, valid_but_not_saved)
      * submission [submission](#submission)

### getSubmissionBatch
Check the status of a submission batch job


```js
formapi.getSubmissionBatch({
  "submission_batch_id": ""
}, context)
```

#### Input
* input `object`
  * submission_batch_id **required** `string`
  * include_submissions `boolean`

#### Output
* output `object`
  * completion_percentage **required** `integer`
  * error_count **required** `integer`
  * id **required** `string`
  * metadata **required** `object`
  * pending_count **required** `integer`
  * processed_at **required** `string`
  * state **required** `string` (values: pending, processed, error)
  * submissions `array`
    * items [submission](#submission)
  * total_count **required** `integer`

### expireSubmission
Expire a PDF submission


```js
formapi.expireSubmission({
  "submission_id": ""
}, context)
```

#### Input
* input `object`
  * submission_id **required** `string`

#### Output
* output [submission](#submission)

### getSubmission
Check the status of a PDF


```js
formapi.getSubmission({
  "submission_id": ""
}, context)
```

#### Input
* input `object`
  * submission_id **required** `string`
  * include_data `boolean`

#### Output
* output [submission](#submission)

### listTemplates
Get a list of all templates


```js
formapi.listTemplates({}, context)
```

#### Input
* input `object`
  * query `string`: Search By Name
  * parent_folder_id `string`: Filter By Folder Id
  * page `integer`: Default: 1
  * per_page `integer`: Default: 50

#### Output
* output `array`
  * items `object`
    * allow_additional_properties **required** `boolean`
    * description **required** `string`
    * document_url `string`
    * editable_submissions **required** `boolean`
    * expiration_interval `string` (values: minutes, hours, days)
    * expire_after `number`
    * expire_submissions **required** `boolean`
    * id **required** `string`
    * locked **required** `boolean`
    * name **required** `string`
    * page_dimensions `array`
      * items `array`
        * items `number`
    * parent_folder_id `string`
    * path `string`
    * permanent_document_url `string`
    * public_submissions **required** `boolean`
    * public_web_form **required** `boolean`
    * redirect_url **required** `string`
    * slack_webhook_url **required** `string`
    * template_type **required** `string`
    * webhook_url **required** `string`

### createPDFTemplate
Create a new PDF template with a form POST file upload


```js
formapi.createPDFTemplate({
  "template[document]": "",
  "template[name]": ""
}, context)
```

#### Input
* input `object`
  * template[document] **required** `string`
  * template[name] **required** `string`
  * template[parent_folder_id] `string`

#### Output
* output `object`
  * allow_additional_properties **required** `boolean`
  * description **required** `string`
  * editable_submissions **required** `boolean`
  * expiration_interval `string` (values: minutes, hours, days)
  * expire_after `number`
  * expire_submissions **required** `boolean`
  * id **required** `string`
  * locked **required** `boolean`
  * name **required** `string`
  * parent_folder_id `string`
  * path `string`
  * public_submissions **required** `boolean`
  * public_web_form **required** `boolean`
  * redirect_url **required** `string`
  * slack_webhook_url **required** `string`
  * template_type **required** `string`
  * webhook_url **required** `string`

### getTemplate
Get a single template


```js
formapi.getTemplate({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`

#### Output
* output `object`
  * allow_additional_properties **required** `boolean`
  * description **required** `string`
  * document_url `string`
  * editable_submissions **required** `boolean`
  * expiration_interval `string` (values: minutes, hours, days)
  * expire_after `number`
  * expire_submissions **required** `boolean`
  * id **required** `string`
  * locked **required** `boolean`
  * name **required** `string`
  * page_dimensions `array`
    * items `array`
      * items `number`
  * parent_folder_id `string`
  * path `string`
  * permanent_document_url `string`
  * public_submissions **required** `boolean`
  * public_web_form **required** `boolean`
  * redirect_url **required** `string`
  * slack_webhook_url **required** `string`
  * template_type **required** `string`
  * webhook_url **required** `string`

### updateTemplate
Update a Template


```js
formapi.updateTemplate({
  "template_id": "",
  "body": {
    "template": {}
  }
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`
  * body **required** `object`
    * template **required** `object`
      * allow_additional_properties `boolean`
      * description `string`
      * editable_submissions `boolean`
      * expiration_interval `string` (values: minutes, hours, days)
      * expire_after `number`
      * expire_submissions `boolean`
      * footer_html `string`
      * header_html `string`
      * html `string`
      * name `string`
      * public_submissions `boolean`
      * public_web_form `boolean`
      * redirect_url `string`
      * scss `string`
      * slack_webhook_url `string`
      * webhook_url `string`

#### Output
* output `object`
  * errors `array`
    * items `string`
  * status **required** `string` (values: success, error)

### addFieldsToTemplate
Add new fields to a Template


```js
formapi.addFieldsToTemplate({
  "template_id": "",
  "body": {
    "fields": []
  }
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`
  * body **required** `object`
    * fields **required** `array`
      * items `object`
        * alignment `string` (values: left, center, right)
        * autoCalculateMaxLength `boolean`
        * backgroundColor `string`
        * backgroundColorFieldName `string`
        * backgroundColorFieldRequired `boolean`
        * barcodeSymbology `string`
        * bold `boolean`
        * characterSpacing `number`
        * checkCharacter `string` (values: &#10003;, &#10004;, &#10006;, &#10007;, &#10008;)
        * checkColor `string`
        * checkColorFieldName `string`
        * checkColorFieldRequired `boolean`
        * color `string`
        * colorFieldName `string`
        * colorFieldRequired `boolean`
        * comb `boolean`
        * combNumberOfCells `number`
        * combValueOffset `number`
        * combinedFieldFormat `string`
        * combinedFieldNames `string`
        * combinedFieldSeparator `string`
        * combinedFieldType `string`
        * condition `string`
        * currency `boolean`
        * dateTimeFormat `string`
        * decimalPlaces `number`
        * default `string`
        * description `string`
        * displayType `string` (values: text, check, qrcode, barcode, image, shape)
        * exclusiveMaximum `boolean`
        * exclusiveMinimum `boolean`
        * falseText `string`
        * fontSize `number`
        * height `number`
        * hidden `boolean`
        * id `number`
        * imageGravity `string` (values: NorthWest, North, NorthEast, West, Center, East, SouthWest, South, SouthEast)
        * imageScaleType `string` (values: fit, fill, stretch)
        * includeTime `boolean`
        * integer `boolean`
        * invertBooleanCondition `boolean`
        * maxLength `number`
        * maximum `number`
        * metadata `string`
        * minLength `number`
        * minimum `number`
        * multiline `boolean`
        * multilineLines `number`
        * name **required** `string`
        * numberConditionRangeExclusiveMax `boolean`
        * numberConditionRangeExclusiveMin `boolean`
        * numberConditionRangeMax `number`
        * numberConditionRangeMin `number`
        * numberConditionType `string` (values: equals, range, gte, gt, lte, lt)
        * opacity `number`
        * optionList `string`
        * overflow `string` (values: shrink_to_fit, truncate)
        * page **required** `number`
        * qrcodeColor `string`
        * qrcodeColorFieldName `string`
        * qrcodeColorFieldRequired `boolean`
        * required `boolean`
        * rotation `number`
        * shapeBorderColor `string`
        * shapeBorderColorFieldName `string`
        * shapeBorderColorFieldRequired `boolean`
        * shapeBorderWidth `number`
        * shapeFillColor `string`
        * shapeFillColorFieldName `string`
        * shapeFillColorFieldRequired `boolean`
        * shapeType `string` (values: square, rectangle, circle, ellipse)
        * signatureAllowDraw `boolean`
        * signatureAllowType `boolean`
        * static `boolean`
        * strikethrough `boolean`
        * stringConditionType `string` (values: equals, contains, starts_with, ends_with, regex)
        * title `string`
        * trueText `string`
        * type `string` (values: string, number, boolean, date, address, country, email, url, image, signature, barcode, combined)
        * typeface `string`
        * uppercase `boolean`
        * vAlignment `string` (values: bottom, center, top)
        * width `number`
        * x `number`
        * y `number`

#### Output
* output `object`
  * errors `array`
    * items `string`
  * new_field_ids `array`
    * items `integer`
  * status **required** `string` (values: success, error)

### copyTemplate
Copy a Template


```js
formapi.copyTemplate({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`
  * body `object`
    * name `string`
    * parent_folder_id **required** `string`

#### Output
* output `object`
  * allow_additional_properties **required** `boolean`
  * description **required** `string`
  * document_url `string`
  * editable_submissions **required** `boolean`
  * expiration_interval `string` (values: minutes, hours, days)
  * expire_after `number`
  * expire_submissions **required** `boolean`
  * id **required** `string`
  * locked **required** `boolean`
  * name **required** `string`
  * page_dimensions `array`
    * items `array`
      * items `number`
  * parent_folder_id `string`
  * path `string`
  * permanent_document_url `string`
  * public_submissions **required** `boolean`
  * public_web_form **required** `boolean`
  * redirect_url **required** `string`
  * slack_webhook_url **required** `string`
  * template_type **required** `string`
  * webhook_url **required** `string`

### moveTemplateToFolder
Move Template to folder


```js
formapi.moveTemplateToFolder({
  "template_id": "",
  "body": {
    "parent_folder_id": ""
  }
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`
  * body **required** `object`
    * parent_folder_id **required** `string`

#### Output
* output `object`
  * allow_additional_properties **required** `boolean`
  * description **required** `string`
  * document_url `string`
  * editable_submissions **required** `boolean`
  * expiration_interval `string` (values: minutes, hours, days)
  * expire_after `number`
  * expire_submissions **required** `boolean`
  * id **required** `string`
  * locked **required** `boolean`
  * name **required** `string`
  * page_dimensions `array`
    * items `array`
      * items `number`
  * parent_folder_id `string`
  * path `string`
  * permanent_document_url `string`
  * public_submissions **required** `boolean`
  * public_web_form **required** `boolean`
  * redirect_url **required** `string`
  * slack_webhook_url **required** `string`
  * template_type **required** `string`
  * webhook_url **required** `string`

### getTemplateSchema
Fetch the JSON schema for a template


```js
formapi.getTemplateSchema({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`

#### Output
* output `object`
  * definitions `object`
  * $schema `string`
  * additionalProperties `boolean`
  * description `string`
  * id `string`
  * properties `object`
  * required `array`
  * title `string`
  * type `string`

### generatePDF
Generates a new PDF


```js
formapi.generatePDF({
  "template_id": "",
  "body": {
    "data": {}
  }
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`
  * body **required** `object`
    * css `string`
    * data **required** `object`
    * data_requests `array`
      * items `object`
        * auth_phone_number_hash `string`
        * auth_provider `string`
        * auth_second_factor_type `string` (values: none, phone_number, totp, mobile_push, security_key, fingerprint)
        * auth_session_id_hash `string`
        * auth_session_started_at `string`
        * auth_type **required** `string` (values: none, password, oauth, email_link, phone_number, ldap, saml)
        * auth_user_id_hash `string`
        * auth_username_hash `string`
        * email **required** `string`
        * fields `array`
          * items `string`
        * metadata `object`
        * name `string`
        * order `integer`
    * field_overrides `object`
    * html `string`
    * metadata `object`
    * test `boolean`

#### Output
* output `object`
  * errors `array`
    * items `string`
  * status **required** `string` (values: success, error)
  * submission **required** [submission](#submission)

### batchGeneratePdfV1
Generates multiple PDFs


```js
formapi.batchGeneratePdfV1({
  "template_id": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`
  * body **required** `array`
    * css `string`
    * data **required** `object`
    * data_requests `array`
      * items `object`
        * auth_phone_number_hash `string`
        * auth_provider `string`
        * auth_second_factor_type `string` (values: none, phone_number, totp, mobile_push, security_key, fingerprint)
        * auth_session_id_hash `string`
        * auth_session_started_at `string`
        * auth_type **required** `string` (values: none, password, oauth, email_link, phone_number, ldap, saml)
        * auth_user_id_hash `string`
        * auth_username_hash `string`
        * email **required** `string`
        * fields `array`
          * items `string`
        * metadata `object`
        * name `string`
        * order `integer`
    * html `string`
    * metadata `object`
    * test `boolean`
    * items `object`

#### Output
* output `array`
  * items `object`
    * errors `array`
      * items `string`
    * status **required** `string` (values: success, error)
    * submission **required** [submission](#submission)

### createPDFTemplateFromUpload
Create a new PDF template from a cached presign upload


```js
formapi.createPDFTemplateFromUpload({
  "body": {
    "template": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * template **required** `object`
      * allow_additional_properties `boolean`
      * description `string`
      * document `object`
        * id **required** `string`
        * metadata **required** `object`
          * filename **required** `string`
          * mime_type **required** `string` (values: application/pdf)
          * size **required** `integer`
        * storage **required** `string` (values: cache)
      * editable_submissions `boolean`
      * expiration_interval `string` (values: minutes, hours, days)
      * expire_after `number`
      * expire_submissions `boolean`
      * footer_html `string`
      * header_html `string`
      * html `string`
      * name **required** `string`
      * public_submissions `boolean`
      * public_web_form `boolean`
      * redirect_url `string`
      * scss `string`
      * slack_webhook_url `string`
      * template_type `string` (values: pdf, html)
      * webhook_url `string`

#### Output
* output `object`
  * allow_additional_properties **required** `boolean`
  * description **required** `string`
  * editable_submissions **required** `boolean`
  * expiration_interval `string` (values: minutes, hours, days)
  * expire_after `number`
  * expire_submissions **required** `boolean`
  * id **required** `string`
  * locked **required** `boolean`
  * name **required** `string`
  * parent_folder_id `string`
  * path `string`
  * public_submissions **required** `boolean`
  * public_web_form **required** `boolean`
  * redirect_url **required** `string`
  * slack_webhook_url **required** `string`
  * template_type **required** `string`
  * webhook_url **required** `string`

### createHTMLTemplate
Create a new HTML template


```js
formapi.createHTMLTemplate({
  "body": {
    "template": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * template **required** `object`
      * allow_additional_properties `boolean`
      * description `string`
      * editable_submissions `boolean`
      * expiration_interval `string` (values: minutes, hours, days)
      * expire_after `number`
      * expire_submissions `boolean`
      * footer_html `string`
      * header_html `string`
      * html `string`
      * name **required** `string`
      * public_submissions `boolean`
      * public_web_form `boolean`
      * redirect_url `string`
      * scss `string`
      * slack_webhook_url `string`
      * template_type `string` (values: pdf, html)
      * webhook_url `string`

#### Output
* output `object`
  * allow_additional_properties **required** `boolean`
  * description **required** `string`
  * editable_submissions **required** `boolean`
  * expiration_interval `string` (values: minutes, hours, days)
  * expire_after `number`
  * expire_submissions **required** `boolean`
  * id **required** `string`
  * locked **required** `boolean`
  * name **required** `string`
  * parent_folder_id `string`
  * path `string`
  * public_submissions **required** `boolean`
  * public_web_form **required** `boolean`
  * redirect_url **required** `string`
  * slack_webhook_url **required** `string`
  * template_type **required** `string`
  * webhook_url **required** `string`

### getPresignUrl
Get a presigned URL so that you can upload a file to our AWS S3 bucket


```js
formapi.getPresignUrl(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * fields **required** `object`
    * key **required** `string`
    * policy **required** `string`
    * x-amz-algorithm **required** `string`
    * x-amz-credential **required** `string`
    * x-amz-date **required** `string`
    * x-amz-signature **required** `string`
  * headers **required** `object`
  * method `string` (values: post)
  * url **required** `string`



## Definitions

### authentication_error
* authentication_error_response `object`
  * error **required** `string`
  * status `string` (values: error)

### combined_submission_action
* combined_submission_action `object`
  * action_category **required** `string` (values: notification, file_upload)
  * action_type **required** `string` (values: webhook, slack_webhook, email, aws_s3_upload)
  * id **required** `string`
  * integration_id **required** `string`
  * result_data **required** `object`
  * state **required** `string` (values: pending, processed, failed, error)

### error
* error_response `object`
  * error **required** `string`
  * status **required** `string` (values: error)

### invalid_request
* invalid_request_response `object`
  * errors **required** `array`
    * items `string`
  * status **required** `string` (values: error)

### submission
* submission `object`
  * actions `array`
    * items [submission_action](#submission_action)
  * batch_id `string`
  * data `object`
  * data_requests `array`
    * items [submission_data_request](#submission_data_request)
  * download_url `string`
  * editable `boolean`
  * expired **required** `boolean`
  * expires_at `string`
  * id **required** `string`
  * metadata `object`
  * pdf_hash `string`
  * permanent_download_url `string`
  * processed_at `string`
  * referrer `string`
  * source `string`
  * state **required** `string` (values: pending, processed, invalid_data, error, image_download_failed, image_processing_failed, waiting_for_data_requests, syntax_error, account_suspended, license_revoked, accidental)
  * template_id `string`
  * test **required** `boolean`
  * truncated_text `object`

### submission_action
* submission_action `object`
  * action_category **required** `string` (values: notification, file_upload)
  * action_type **required** `string` (values: webhook, slack_webhook, email, aws_s3_upload)
  * id **required** `string`
  * integration_id **required** `string`
  * result_data **required** `object`
  * state **required** `string` (values: pending, processed, failed, error)

### submission_data_request
* submission_data_request `object`
  * auth_phone_number_hash `string`
  * auth_provider `string`
  * auth_second_factor_type `string` (values: none, phone_number, totp, mobile_push, security_key, fingerprint)
  * auth_session_id_hash `string`
  * auth_session_started_at `string`
  * auth_type `string` (values: none, password, oauth, email_link, phone_number, ldap, saml)
  * auth_user_id_hash `string`
  * auth_username_hash `string`
  * completed_at `string`
  * email **required** `string`
  * fields **required** `array`
    * items `string`
  * id **required** `string`
  * ip_address `string`
  * metadata **required** `object`
  * name **required** `string`
  * order **required** `integer`
  * sort_order **required** `integer`
  * state **required** `string` (values: pending, completed)
  * user_agent `string`
  * viewed_at `string`


