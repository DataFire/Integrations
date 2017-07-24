# @datafire/amazonaws_rekognition

Client library for Amazon Rekognition

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_rekognition
```

```js
let datafire = require('datafire');
let amazonaws_rekognition = require('@datafire/amazonaws_rekognition').actions;
let context = new datafire.Context();

amazonaws_rekognition.CompareFaces({}, context).then(data => {
  console.log(data);
})
```

## Description
This is the Amazon Rekognition API reference.

## Actions
### CompareFaces



```js
amazonaws_rekognition.CompareFaces({}, context)
```


### CreateCollection



```js
amazonaws_rekognition.CreateCollection({}, context)
```


### DeleteCollection



```js
amazonaws_rekognition.DeleteCollection({}, context)
```


### DeleteFaces



```js
amazonaws_rekognition.DeleteFaces({}, context)
```


### DetectFaces



```js
amazonaws_rekognition.DetectFaces({}, context)
```


### DetectLabels



```js
amazonaws_rekognition.DetectLabels({}, context)
```


### DetectModerationLabels



```js
amazonaws_rekognition.DetectModerationLabels({}, context)
```


### IndexFaces



```js
amazonaws_rekognition.IndexFaces({}, context)
```


### ListCollections



```js
amazonaws_rekognition.ListCollections({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListFaces



```js
amazonaws_rekognition.ListFaces({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### SearchFaces



```js
amazonaws_rekognition.SearchFaces({}, context)
```


### SearchFacesByImage



```js
amazonaws_rekognition.SearchFacesByImage({}, context)
```


