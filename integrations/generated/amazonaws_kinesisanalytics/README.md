# @datafire/amazonaws_kinesisanalytics

Client library for Amazon Kinesis Analytics

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_kinesisanalytics
```

```js
let datafire = require('datafire');
let amazonaws_kinesisanalytics = require('@datafire/amazonaws_kinesisanalytics').actions;
let context = new datafire.Context();

amazonaws_kinesisanalytics.AddApplicationInput({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### AddApplicationInput



```js
amazonaws_kinesisanalytics.AddApplicationInput({}, context)
```


### AddApplicationOutput



```js
amazonaws_kinesisanalytics.AddApplicationOutput({}, context)
```


### AddApplicationReferenceDataSource



```js
amazonaws_kinesisanalytics.AddApplicationReferenceDataSource({}, context)
```


### CreateApplication



```js
amazonaws_kinesisanalytics.CreateApplication({}, context)
```


### DeleteApplication



```js
amazonaws_kinesisanalytics.DeleteApplication({}, context)
```


### DeleteApplicationOutput



```js
amazonaws_kinesisanalytics.DeleteApplicationOutput({}, context)
```


### DeleteApplicationReferenceDataSource



```js
amazonaws_kinesisanalytics.DeleteApplicationReferenceDataSource({}, context)
```


### DescribeApplication



```js
amazonaws_kinesisanalytics.DescribeApplication({}, context)
```


### DiscoverInputSchema



```js
amazonaws_kinesisanalytics.DiscoverInputSchema({}, context)
```


### ListApplications



```js
amazonaws_kinesisanalytics.ListApplications({}, context)
```


### StartApplication



```js
amazonaws_kinesisanalytics.StartApplication({}, context)
```


### StopApplication



```js
amazonaws_kinesisanalytics.StopApplication({}, context)
```


### UpdateApplication



```js
amazonaws_kinesisanalytics.UpdateApplication({}, context)
```


