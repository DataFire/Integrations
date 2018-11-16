# @datafire/microsoft_cognitiveservices_prediction

Client library for PredictionEndpoint

## Installation and Usage
```bash
npm install --save @datafire/microsoft_cognitiveservices_prediction
```
```js
let microsoft_cognitiveservices_prediction = require('@datafire/microsoft_cognitiveservices_prediction').create();

microsoft_cognitiveservices_prediction.PredictImage({
  "projectId": "",
  "imageData": "",
  "Prediction-Key": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### PredictImage
Predict an image and saves the result


```js
microsoft_cognitiveservices_prediction.PredictImage({
  "projectId": "",
  "imageData": "",
  "Prediction-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * iterationId `string`: Optional. Specifies the id of a particular iteration to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint
  * imageData **required** `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * Prediction-Key **required** `string`

#### Output
* output [ImagePredictionResultModel](#imagepredictionresultmodel)

### PredictImageWithNoStore
Predict an image without saving the result


```js
microsoft_cognitiveservices_prediction.PredictImageWithNoStore({
  "projectId": "",
  "imageData": "",
  "Prediction-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * iterationId `string`: Optional. Specifies the id of a particular iteration to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint
  * imageData **required** `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * Prediction-Key **required** `string`

#### Output
* output [ImagePredictionResultModel](#imagepredictionresultmodel)

### PredictImageUrl
Predict an image url and saves the result


```js
microsoft_cognitiveservices_prediction.PredictImageUrl({
  "projectId": "",
  "imageUrl": {},
  "Prediction-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * imageUrl **required** [ImageUrl](#imageurl)
  * iterationId `string`: Optional. Specifies the id of a particular iteration to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint
  * Prediction-Key **required** `string`

#### Output
* output [ImagePredictionResultModel](#imagepredictionresultmodel)

### PredictImageUrlWithNoStore
Predict an image url without saving the result


```js
microsoft_cognitiveservices_prediction.PredictImageUrlWithNoStore({
  "projectId": "",
  "imageUrl": {},
  "Prediction-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * imageUrl **required** [ImageUrl](#imageurl)
  * iterationId `string`: Optional. Specifies the id of a particular iteration to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint
  * Prediction-Key **required** `string`

#### Output
* output [ImagePredictionResultModel](#imagepredictionresultmodel)



## Definitions

### ImagePredictionResultModel
* ImagePredictionResultModel `object`: result of an image prediction request
  * Created `string`
  * Id `string`
  * Iteration `string`
  * Predictions `array`
    * items [ImageTagPredictionModel](#imagetagpredictionmodel)
  * Project `string`

### ImageTagPredictionModel
* ImageTagPredictionModel `object`
  * Probability `number`
  * Tag `string`
  * TagId `string`

### ImageUrl
* ImageUrl `object`
  * Url `string`


