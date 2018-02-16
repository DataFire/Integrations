# @datafire/azure_resources_features

Client library for FeatureClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_features
```
```js
let azure_resources_features = require('@datafire/azure_resources_features').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_resources_features.Features_ListAll({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Feature Exposure Control (AFEC) provides a mechanism for the resource providers to control feature exposure to users. Resource providers typically use this mechanism to provide public/private preview for new features prior to making them generally available. Users need to explicitly register for AFEC features to get access to such functionality.

## Actions

### Features_ListAll
Gets all the preview features that are available through AFEC for the subscription.


```js
azure_resources_features.Features_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [FeatureOperationsListResult](#featureoperationslistresult)

### Features_List
Gets all the preview features in a provider namespace that are available through AFEC for the subscription.


```js
azure_resources_features.Features_List({
  "resourceProviderNamespace": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider for getting features.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [FeatureOperationsListResult](#featureoperationslistresult)

### Features_Get
Gets the preview feature with the specified name.


```js
azure_resources_features.Features_Get({
  "resourceProviderNamespace": "",
  "featureName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceProviderNamespace **required** `string`: The resource provider namespace for the feature.
  * featureName **required** `string`: The name of the feature to get.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [FeatureResult](#featureresult)

### Features_Register
Registers the preview feature for the subscription.


```js
azure_resources_features.Features_Register({
  "resourceProviderNamespace": "",
  "featureName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * featureName **required** `string`: The name of the feature to register.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [FeatureResult](#featureresult)



## Definitions

### FeatureOperationsListResult
* FeatureOperationsListResult `object`: List of previewed features.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The array of features.
    * items [FeatureResult](#featureresult)

### FeatureProperties
* FeatureProperties `object`: Information about feature.
  * state `string`: The registration state of the feature for the subscription.

### FeatureResult
* FeatureResult `object`: Previewed feature information.
  * id `string`: The resource ID of the feature.
  * name `string`: The name of the feature.
  * properties [FeatureProperties](#featureproperties)
  * type `string`: The resource type of the feature.


