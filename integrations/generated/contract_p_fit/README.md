# @datafire/contract_p_fit

Client library for Contract.fit API

## Installation and Usage
```bash
npm install --save @datafire/contract_p_fit
```
```js
let contract_p_fit = require('@datafire/contract_p_fit').create({
  username: "",
  password: "",
  token: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This describes the Contract.fit product API. If you don't have authorization keys yet, please request them there: https://contract.fit/contact-us

## Actions

### post_simple_documents_resource



```js
contract_p_fit.post_simple_documents_resource({
  "file": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`, `object`: File to handle
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * inbox_id `string`
  * key_value_flag `boolean`

#### Output
*Output schema unknown*

### delete_document_resource



```js
contract_p_fit.delete_document_resource({
  "document_id": ""
}, context)
```

#### Input
* input `object`
  * document_id **required** `string`

#### Output
*Output schema unknown*

### get_document_resource



```js
contract_p_fit.get_document_resource({
  "document_id": ""
}, context)
```

#### Input
* input `object`
  * X-Fields `string`: An optional fields mask
  * document_id **required** `string`

#### Output
* output [DocumentModelGet](#documentmodelget)

### get_document_original_file_resource



```js
contract_p_fit.get_document_original_file_resource({
  "document_id": ""
}, context)
```

#### Input
* input `object`
  * document_id **required** `string`

#### Output
*Output schema unknown*

### get_document_page_image_resource



```js
contract_p_fit.get_document_page_image_resource({
  "page_range": "",
  "document_id": ""
}, context)
```

#### Input
* input `object`
  * page_range **required** `string`: The number of the page, starting from 0. A range of pages, separated by ":" is also allowed to return a zip file.
  * document_id **required** `string`

#### Output
*Output schema unknown*

### get_document_text_resource



```js
contract_p_fit.get_document_text_resource({
  "document_id": ""
}, context)
```

#### Input
* input `object`
  * document_id **required** `string`

#### Output
*Output schema unknown*

### post_documents_resource



```js
contract_p_fit.post_documents_resource({
  "file": "",
  "inbox_id": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`, `object`: File to handle
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * hints `string`: Additional hints as a dictionary. Example: {"VAT_number":{"blacklist":"XXXX.XXX.XXX", "whitelist": ["YYYY.YYY.YYY", "ZZZZ.ZZZ.ZZZ"]}}
  * sync `boolean`
  * inbox_id **required** `string`

#### Output
*Output schema unknown*



## Definitions

### DocumentModelGet
* DocumentModelGet `object`
  * escalate [StateModelGet](#statemodelget)
  * evaluation_data `array`
    * items `object`
  * feedback `object`
  * files `object`
  * flag_for_review `boolean`
  * id **required** `string`
  * inbox **required** `string`
  * last_version `string`
  * lock [StateModelGet](#statemodelget)
  * meta_information `object`
  * original_filename **required** `string`
  * page_count **required** `integer`
  * prediction `object`
  * status_data [StatusDataModel](#statusdatamodel)
  * submitted [StateModelGet](#statemodelget)
  * timings [TimingsModelGet](#timingsmodelget)
  * usage_data `object`

### StateModelGet
* StateModelGet `object`
  * by `string`
  * since `string`
  * value `boolean`

### StatusDataModel
* StatusDataModel `object`
  * archived `boolean`
  * data `boolean`
  * escalate `boolean`
  * feedback `boolean`
  * lock `boolean`
  * ready_accepted `boolean`
  * ready_attempts `integer`
  * reject `boolean`
  * reject_accepted `boolean`
  * reject_attempts `integer`
  * sampling `boolean`
  * submit_accepted `boolean`
  * submit_attempts `integer`
  * success `boolean`

### TimingsModelGet
* TimingsModelGet `object`
  * done_time `string`
  * feedback_time `string`
  * processing_period `number`
  * receive_time `string`
  * start_time `string`


