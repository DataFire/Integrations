# @datafire/openalpr

Client library for OpenALPR CarCheck API

## Installation and Usage
```bash
npm install --save @datafire/openalpr
```
```js
let openalpr = require('@datafire/openalpr').create();

.then(data => {
  console.log(data);
});
```

## Description

The OpenALPR CarCheck API allows you to send images to the cloud for processing. 
The image will be analyzed for license plates and vehicle make/models.  The results 
are returned in JSON format


## Actions

### getConfig
Get a list of available results for plate and vehicle recognition



```js
openalpr.getConfig(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * countries `array`
    * items `object`
      * code `string`
      * name `string`
  * vehicle_labels `object`
    * bodytype `array`
      * items `string`
    * color `array`
      * items `string`
    * make `array`
      * items `string`
    * makemodel `array`
      * items `string`
    * orientation `array`
      * items `string`
    * year `array`
      * items `string`

### recognizeFile
Send an image for OpenALPR to analyze and provide metadata back
The image is sent as a file using a form data POST



```js
openalpr.recognizeFile({
  "image": "",
  "secret_key": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * image **required** `string`, `object`: The image file that you wish to analyze
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * secret_key **required** `string`: The secret key used to authenticate your account.  You can view your 
  * recognize_vehicle `integer` (values: 0, 1): If set to 1, the vehicle will also be recognized in the image
  * country **required** `string`: Defines the training data used by OpenALPR.  "us" analyzes 
  * return_image `integer` (values: 0, 1): If set to 1, the image you uploaded will be encoded in base64 and 
  * topn `integer`: The number of results you would like to be returned for plate 
  * is_cropped `integer` (values: 0, 1): When providing a plate or vehicle that is already cropped,  

#### Output
* output `object`
  * credit_cost `integer`: The number of API credits that were used to process this image
  * credits_monthly_total `integer`: The maximum number of API credits available this month according to your plan
  * credits_monthly_used `integer`: The number of API credits used this month
  * data_type `string` (values: alpr_results, alpr_group, heartbeat): Specifies the type of data in this response
  * epoch_time `number`: Epoch time that the image was processed in milliseconds
  * img_height `integer`: Height of the input image in pixels
  * img_width `integer`: Width of the uploaded image in pixels
  * processing_time `object`
    * plates `number`: Time spent performing license plate recognition (in milliseconds)
    * total `number`: Time spent processing all tasks (in milliseconds)
    * vehicles `number`: Time spent performing vehicle recognition (in milliseconds)
  * regions_of_interest `array`: Describes the areas analyzed in the input image
    * items [region_of_interest](#region_of_interest)
  * results `array`
    * items [plate_details](#plate_details)
  * vehicles `array`: Describes all vehicles found in the input image
    * items [vehicles](#vehicles)
  * version `integer`: API format version

### recognizeBytes
Send an image for OpenALPR to analyze and provide metadata back
The image is sent as base64 encoded bytes.



```js
openalpr.recognizeBytes({
  "image_bytes": "",
  "secret_key": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * image_bytes **required** `string`
  * secret_key **required** `string`: The secret key used to authenticate your account.  You can view your 
  * recognize_vehicle `integer` (values: 0, 1): If set to 1, the vehicle will also be recognized in the image
  * country **required** `string`: Defines the training data used by OpenALPR.  "us" analyzes 
  * return_image `integer` (values: 0, 1): If set to 1, the image you uploaded will be encoded in base64 and 
  * topn `integer`: The number of results you would like to be returned for plate 

#### Output
* output `object`
  * credit_cost `integer`: The number of API credits that were used to process this image
  * credits_monthly_total `integer`: The maximum number of API credits available this month according to your plan
  * credits_monthly_used `integer`: The number of API credits used this month
  * data_type `string` (values: alpr_results, alpr_group, heartbeat): Specifies the type of data in this response
  * epoch_time `number`: Epoch time that the image was processed in milliseconds
  * img_height `integer`: Height of the input image in pixels
  * img_width `integer`: Width of the uploaded image in pixels
  * processing_time `object`
    * plates `number`: Time spent performing license plate recognition (in milliseconds)
    * total `number`: Time spent processing all tasks (in milliseconds)
    * vehicles `number`: Time spent performing vehicle recognition (in milliseconds)
  * regions_of_interest `array`: Describes the areas analyzed in the input image
    * items [region_of_interest](#region_of_interest)
  * results `array`
    * items [plate_details](#plate_details)
  * vehicles `array`: Describes all vehicles found in the input image
    * items [vehicles](#vehicles)
  * version `integer`: API format version

### recognizeUrl
Send an image for OpenALPR to analyze and provide metadata back
The image is sent as a URL.  The OpenALPR service will download the image 
and process it



```js
openalpr.recognizeUrl({
  "image_url": "",
  "secret_key": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * image_url **required** `string`: A URL to an image that you wish to analyze
  * secret_key **required** `string`: The secret key used to authenticate your account.  You can view your 
  * recognize_vehicle `integer` (values: 0, 1): If set to 1, the vehicle will also be recognized in the image
  * country **required** `string`: Defines the training data used by OpenALPR.  "us" analyzes 
  * return_image `integer` (values: 0, 1): If set to 1, the image you uploaded will be encoded in base64 and 
  * topn `integer`: The number of results you would like to be returned for plate 

#### Output
* output `object`
  * credit_cost `integer`: The number of API credits that were used to process this image
  * credits_monthly_total `integer`: The maximum number of API credits available this month according to your plan
  * credits_monthly_used `integer`: The number of API credits used this month
  * data_type `string` (values: alpr_results, alpr_group, heartbeat): Specifies the type of data in this response
  * epoch_time `number`: Epoch time that the image was processed in milliseconds
  * img_height `integer`: Height of the input image in pixels
  * img_width `integer`: Width of the uploaded image in pixels
  * processing_time `object`
    * plates `number`: Time spent performing license plate recognition (in milliseconds)
    * total `number`: Time spent processing all tasks (in milliseconds)
    * vehicles `number`: Time spent performing vehicle recognition (in milliseconds)
  * regions_of_interest `array`: Describes the areas analyzed in the input image
    * items [region_of_interest](#region_of_interest)
  * results `array`
    * items [plate_details](#plate_details)
  * vehicles `array`: Describes all vehicles found in the input image
    * items [vehicles](#vehicles)
  * version `integer`: API format version



## Definitions

### coordinate
* coordinate `object`
  * x `integer`
  * y `integer`

### plate_candidate
* plate_candidate `object`
  * confidence `number`: Confidence percentage that the plate number is correct
  * matches_template `integer`: Indicates whether the plate matched a regional text pattern
  * plate `string`: Plate number

### plate_details
* plate_details `object`
  * candidates `array`: All the top N candidates that could be the correct plate number
    * items [plate_candidate](#plate_candidate)
  * confidence `number`: Confidence percentage that the plate number is correct
  * coordinates `array`: The X/Y coordinates of the license plate in the image
    * items [coordinate](#coordinate)
  * matches_template `integer`: Indicates whether the plate matched a regional text pattern
  * plate `string`: Best plate number for this plate
  * processing_time_ms `number`: Number of milliseconds to process the license plate
  * region `string`: Specified or detected region (e.g., tx for Texas)
  * region_confidence `number`: Confidence percentage that the plate region is correct
  * requested_topn `integer`: The max number of results requested
  * vehicle [vehicle_details](#vehicle_details)
  * vehicle_region [region_of_interest](#region_of_interest)

### region_of_interest
* region_of_interest `object`
  * height `integer`
  * width `integer`
  * x `integer`
  * y `integer`

### vehicle_candidate
* vehicle_candidate `object`
  * confidence `number`: confidence of value (percent)
  * name `string`: name of value

### vehicle_details
* vehicle_details `object`
  * body_type `array`
    * items [vehicle_candidate](#vehicle_candidate)
  * color `array`
    * items [vehicle_candidate](#vehicle_candidate)
  * make `array`
    * items [vehicle_candidate](#vehicle_candidate)
  * make_model `array`
    * items [vehicle_candidate](#vehicle_candidate)
  * orientation `array`
    * items [vehicle_candidate](#vehicle_candidate)
  * year `array`
    * items [vehicle_candidate](#vehicle_candidate)

### vehicles
* vehicles `object`
  * details [vehicle_details](#vehicle_details)
  * height `integer`
  * width `integer`
  * x `integer`
  * y `integer`


