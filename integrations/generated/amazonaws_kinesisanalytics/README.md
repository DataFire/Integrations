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

#### Parameters

### AddApplicationOutput



```js
amazonaws_kinesisanalytics.AddApplicationOutput({}, context)
```

#### Parameters

### AddApplicationReferenceDataSource



```js
amazonaws_kinesisanalytics.AddApplicationReferenceDataSource({}, context)
```

#### Parameters

### CreateApplication



```js
amazonaws_kinesisanalytics.CreateApplication({}, context)
```

#### Parameters

### DeleteApplication



```js
amazonaws_kinesisanalytics.DeleteApplication({}, context)
```

#### Parameters

### DeleteApplicationOutput



```js
amazonaws_kinesisanalytics.DeleteApplicationOutput({}, context)
```

#### Parameters

### DeleteApplicationReferenceDataSource



```js
amazonaws_kinesisanalytics.DeleteApplicationReferenceDataSource({}, context)
```

#### Parameters

### DescribeApplication



```js
amazonaws_kinesisanalytics.DescribeApplication({}, context)
```

#### Parameters

### DiscoverInputSchema



```js
amazonaws_kinesisanalytics.DiscoverInputSchema({}, context)
```

#### Parameters

### ListApplications



```js
amazonaws_kinesisanalytics.ListApplications({}, context)
```

#### Parameters

### StartApplication



```js
amazonaws_kinesisanalytics.StartApplication({}, context)
```

#### Parameters

### StopApplication



```js
amazonaws_kinesisanalytics.StopApplication({}, context)
```

#### Parameters

### UpdateApplication



```js
amazonaws_kinesisanalytics.UpdateApplication({}, context)
```

#### Parameters

