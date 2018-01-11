# @datafire/formapi

Client library for API V1

## Installation and Usage
```bash
npm install --save @datafire/formapi
```
```js
let formapi = require('@datafire/formapi').create({
  username: "",
  password: ""
});

formapi.combineSubmissions({}).then(data => {
  console.log(data);
})
```

## Description



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
formapi.combineSubmissions({}, context)
```

#### Input
* input `object`
  * data `object`
    * expires_in `number`
    * metadata `object`
    * submission_ids **required** `array`
      * items `string`
    * test `boolean`

#### Output
* output `object`
  * combined_submission **required** `object`
    * download_url `string`
    * expired **required** `boolean`
    * expires_at `string`
    * id **required** `string`
    * metadata `object`
    * state **required** `string` (values: pending, processed, error)
    * submission_ids **required** `array`
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
  * download_url `string`
  * expired **required** `boolean`
  * expires_at `string`
  * id **required** `string`
  * metadata `object`
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
  * download_url `string`
  * expired **required** `boolean`
  * expires_at `string`
  * id **required** `string`
  * metadata `object`
  * state **required** `string` (values: pending, processed, error)
  * submission_ids **required** `array`
    * items `string`

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
* output `object`
  * download_url `string`
  * expired **required** `boolean`
  * expires_at `string`
  * id **required** `string`
  * metadata `object`
  * state **required** `string` (values: pending, processed, invalid_data, error, image_download_failed, image_processing_failed)
  * test **required** `boolean`

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

#### Output
* output `object`
  * download_url `string`
  * expired **required** `boolean`
  * expires_at `string`
  * id **required** `string`
  * metadata `object`
  * state **required** `string` (values: pending, processed, invalid_data, error, image_download_failed, image_processing_failed)
  * test **required** `boolean`

### generatePDF
Generates a new PDF


```js
formapi.generatePDF({
  "template_id": ""
}, context)
```

#### Input
* input `object`
  * template_id **required** `string`
  * data `object`
    * data **required** `object`
    * metadata `object`
    * test `boolean`

#### Output
* output `object`
  * status **required** `string` (values: success, error)
  * submission **required** `object`
    * download_url `string`
    * expired **required** `boolean`
    * expires_at `string`
    * id **required** `string`
    * metadata `object`
    * state **required** `string` (values: pending, processed, invalid_data, error, image_download_failed, image_processing_failed)
    * test **required** `boolean`



## Definitions

*This integration has no definitions*
