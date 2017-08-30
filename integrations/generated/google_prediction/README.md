# @datafire/google_prediction

Client library for Prediction

## Installation and Usage
```bash
npm install --save datafire @datafire/google_prediction
```

```js
let datafire = require('datafire');
let google_prediction = require('@datafire/google_prediction').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_prediction.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### hostedmodels.predict
Submit input and request an output against a hosted model.


```js
google_prediction.hostedmodels.predict({
  "project": "",
  "hostedModelName": ""
}, context)
```

#### Parameters
* project (string) **required** - The project associated with the model.
* hostedModelName (string) **required** - The name of a hosted model.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### trainedmodels.insert
Train a Prediction API model.


```js
google_prediction.trainedmodels.insert({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The project associated with the model.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### trainedmodels.list
List available models.


```js
google_prediction.trainedmodels.list({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The project associated with the model.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Pagination token.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### trainedmodels.delete
Delete a trained model.


```js
google_prediction.trainedmodels.delete({
  "project": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - The project associated with the model.
* id (string) **required** - The unique name for the predictive model.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### trainedmodels.get
Check training status of your model.


```js
google_prediction.trainedmodels.get({
  "project": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - The project associated with the model.
* id (string) **required** - The unique name for the predictive model.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### trainedmodels.update
Add new data to a trained model.


```js
google_prediction.trainedmodels.update({
  "project": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - The project associated with the model.
* id (string) **required** - The unique name for the predictive model.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### trainedmodels.analyze
Get analysis of the model and the data the model was trained on.


```js
google_prediction.trainedmodels.analyze({
  "project": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - The project associated with the model.
* id (string) **required** - The unique name for the predictive model.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### trainedmodels.predict
Submit model id and request a prediction.


```js
google_prediction.trainedmodels.predict({
  "project": "",
  "id": ""
}, context)
```

#### Parameters
* project (string) **required** - The project associated with the model.
* id (string) **required** - The unique name for the predictive model.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

