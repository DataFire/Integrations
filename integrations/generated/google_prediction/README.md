# @datafire/google_prediction

Client library for Prediction

## Installation and Usage
```bash
npm install --save @datafire/google_prediction
```
```js
let google_prediction = require('@datafire/google_prediction').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_prediction.hostedmodels.predict({}).then(data => {
  console.log(data);
})
```

## Description

Lets you access a cloud hosted machine learning service that makes it easy to build smart apps

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_prediction.oauthCallback({
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
google_prediction.oauthRefresh(null, context)
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

### hostedmodels.predict
Submit input and request an output against a hosted model.


```js
google_prediction.hostedmodels.predict({
  "project": "",
  "hostedModelName": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project associated with the model.
  * hostedModelName **required** `string`: The name of a hosted model.
  * body [Input](#input)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Output](#output)

### trainedmodels.insert
Train a Prediction API model.


```js
google_prediction.trainedmodels.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project associated with the model.
  * body [Insert](#insert)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Insert2](#insert2)

### trainedmodels.list
List available models.


```js
google_prediction.trainedmodels.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project associated with the model.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Pagination token.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [List](#list)

### trainedmodels.delete
Delete a trained model.


```js
google_prediction.trainedmodels.delete({
  "project": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project associated with the model.
  * id **required** `string`: The unique name for the predictive model.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### trainedmodels.get
Check training status of your model.


```js
google_prediction.trainedmodels.get({
  "project": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project associated with the model.
  * id **required** `string`: The unique name for the predictive model.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Insert2](#insert2)

### trainedmodels.update
Add new data to a trained model.


```js
google_prediction.trainedmodels.update({
  "project": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project associated with the model.
  * id **required** `string`: The unique name for the predictive model.
  * body [Update](#update)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Insert2](#insert2)

### trainedmodels.analyze
Get analysis of the model and the data the model was trained on.


```js
google_prediction.trainedmodels.analyze({
  "project": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project associated with the model.
  * id **required** `string`: The unique name for the predictive model.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Analyze](#analyze)

### trainedmodels.predict
Submit model id and request a prediction.


```js
google_prediction.trainedmodels.predict({
  "project": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project associated with the model.
  * id **required** `string`: The unique name for the predictive model.
  * body [Input](#input)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Output](#output)



## Definitions

### Analyze
* Analyze `object`
  * dataDescription `object`: Description of the data the model was trained on.
    * features `array`: Description of the input features in the data set.
      * items `object`
        * categorical `object`: Description of the categorical values of this feature.
          * count `string`: Number of categorical values for this feature in the data.
          * values `array`: List of all the categories for this feature in the data set.
            * items `object`
              * count `string`: Number of times this feature had this value.
              * value `string`: The category name.
        * index `string`: The feature index.
        * numeric `object`: Description of the numeric values of this feature.
          * count `string`: Number of numeric values for this feature in the data set.
          * mean `string`: Mean of the numeric values of this feature in the data set.
          * variance `string`: Variance of the numeric values of this feature in the data set.
        * text `object`: Description of multiple-word text values of this feature.
          * count `string`: Number of multiple-word text values for this feature.
    * outputFeature `object`: Description of the output value or label.
      * numeric `object`: Description of the output values in the data set.
        * count `string`: Number of numeric output values in the data set.
        * mean `string`: Mean of the output values in the data set.
        * variance `string`: Variance of the output values in the data set.
      * text `array`: Description of the output labels in the data set.
        * items `object`
          * count `string`: Number of times the output label occurred in the data set.
          * value `string`: The output label.
  * errors `array`: List of errors with the data.
    * items `object`
  * id `string`: The unique name for the predictive model.
  * kind `string`: What kind of resource this is.
  * modelDescription `object`: Description of the model.
    * confusionMatrix `object`: An output confusion matrix. This shows an estimate for how this model will do in predictions. This is first indexed by the true class label. For each true class label, this provides a pair {predicted_label, count}, where count is the estimated number of times the model will predict the predicted label given the true label. Will not output if more then 100 classes (Categorical models only).
    * confusionMatrixRowTotals `object`: A list of the confusion matrix row totals.
    * modelinfo [Insert2](#insert2)
  * selfLink `string`: A URL to re-request this resource.

### Input
* Input `object`
  * input `object`: Input to the model for a prediction.
    * csvInstance `array`: A list of input features, these can be strings or doubles.


### Insert
* Insert `object`
  * id `string`: The unique name for the predictive model.
  * modelType `string`: Type of predictive model (classification or regression).
  * sourceModel `string`: The Id of the model to be copied over.
  * storageDataLocation `string`: Google storage location of the training data file.
  * storagePMMLLocation `string`: Google storage location of the preprocessing pmml file.
  * storagePMMLModelLocation `string`: Google storage location of the pmml model file.
  * trainingInstances `array`: Instances to train model on.
    * items `object`
      * csvInstance `array`: The input features for this instance.

      * output `string`: The generic output value - could be regression or class label.
  * utility `array`: A class weighting function, which allows the importance weights for class labels to be specified (Categorical models only).
    * items `object`: Class label (string).

### Insert2
* Insert2 `object`
  * created `string`: Insert time of the model (as a RFC 3339 timestamp).
  * id `string`: The unique name for the predictive model.
  * kind `string`: What kind of resource this is.
  * modelInfo `object`: Model metadata.
    * classWeightedAccuracy `string`: Estimated accuracy of model taking utility weights into account (Categorical models only).
    * classificationAccuracy `string`: A number between 0.0 and 1.0, where 1.0 is 100% accurate. This is an estimate, based on the amount and quality of the training data, of the estimated prediction accuracy. You can use this is a guide to decide whether the results are accurate enough for your needs. This estimate will be more reliable if your real input data is similar to your training data (Categorical models only).
    * meanSquaredError `string`: An estimated mean squared error. The can be used to measure the quality of the predicted model (Regression models only).
    * modelType `string`: Type of predictive model (CLASSIFICATION or REGRESSION).
    * numberInstances `string`: Number of valid data instances used in the trained model.
    * numberLabels `string`: Number of class labels in the trained model (Categorical models only).
  * modelType `string`: Type of predictive model (CLASSIFICATION or REGRESSION).
  * selfLink `string`: A URL to re-request this resource.
  * storageDataLocation `string`: Google storage location of the training data file.
  * storagePMMLLocation `string`: Google storage location of the preprocessing pmml file.
  * storagePMMLModelLocation `string`: Google storage location of the pmml model file.
  * trainingComplete `string`: Training completion time (as a RFC 3339 timestamp).
  * trainingStatus `string`: The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND

### List
* List `object`
  * items `array`: List of models.
    * items [Insert2](#insert2)
  * kind `string`: What kind of resource this is.
  * nextPageToken `string`: Pagination token to fetch the next page, if one exists.
  * selfLink `string`: A URL to re-request this resource.

### Output
* Output `object`
  * id `string`: The unique name for the predictive model.
  * kind `string`: What kind of resource this is.
  * outputLabel `string`: The most likely class label (Categorical models only).
  * outputMulti `array`: A list of class labels with their estimated probabilities (Categorical models only).
    * items `object`
      * label `string`: The class label.
      * score `string`: The probability of the class label.
  * outputValue `string`: The estimated regression value (Regression models only).
  * selfLink `string`: A URL to re-request this resource.

### Update
* Update `object`
  * csvInstance `array`: The input features for this instance.

  * output `string`: The generic output value - could be regression or class label.


