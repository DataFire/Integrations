# @datafire/amazonaws_cloudhsm

Client library for Amazon CloudHSM

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudhsm
```

```js
let datafire = require('datafire');
let amazonaws_cloudhsm = require('@datafire/amazonaws_cloudhsm').create();

amazonaws_cloudhsm.AddTagsToResource({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CloudHSM Service</fullname>

## Actions
### AddTagsToResource



```js
amazonaws_cloudhsm.AddTagsToResource({}, context)
```


### CreateHapg



```js
amazonaws_cloudhsm.CreateHapg({}, context)
```


### CreateHsm



```js
amazonaws_cloudhsm.CreateHsm({}, context)
```


### CreateLunaClient



```js
amazonaws_cloudhsm.CreateLunaClient({}, context)
```


### DeleteHapg



```js
amazonaws_cloudhsm.DeleteHapg({}, context)
```


### DeleteHsm



```js
amazonaws_cloudhsm.DeleteHsm({}, context)
```


### DeleteLunaClient



```js
amazonaws_cloudhsm.DeleteLunaClient({}, context)
```


### DescribeHapg



```js
amazonaws_cloudhsm.DescribeHapg({}, context)
```


### DescribeHsm



```js
amazonaws_cloudhsm.DescribeHsm({}, context)
```


### DescribeLunaClient



```js
amazonaws_cloudhsm.DescribeLunaClient({}, context)
```


### GetConfig



```js
amazonaws_cloudhsm.GetConfig({}, context)
```


### ListAvailableZones



```js
amazonaws_cloudhsm.ListAvailableZones({}, context)
```


### ListHapgs



```js
amazonaws_cloudhsm.ListHapgs({}, context)
```


### ListHsms



```js
amazonaws_cloudhsm.ListHsms({}, context)
```


### ListLunaClients



```js
amazonaws_cloudhsm.ListLunaClients({}, context)
```


### ListTagsForResource



```js
amazonaws_cloudhsm.ListTagsForResource({}, context)
```


### ModifyHapg



```js
amazonaws_cloudhsm.ModifyHapg({}, context)
```


### ModifyHsm



```js
amazonaws_cloudhsm.ModifyHsm({}, context)
```


### ModifyLunaClient



```js
amazonaws_cloudhsm.ModifyLunaClient({}, context)
```


### RemoveTagsFromResource



```js
amazonaws_cloudhsm.RemoveTagsFromResource({}, context)
```


