# @datafire/amazonaws_cloudhsm

Client library for Amazon CloudHSM

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudhsm
```

```js
let datafire = require('datafire');
let amazonaws_cloudhsm = require('@datafire/amazonaws_cloudhsm').actions;
let context = new datafire.Context();

amazonaws_cloudhsm.AddTagsToResource({}, context).then(data => {
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

#### Parameters

### CreateHapg



```js
amazonaws_cloudhsm.CreateHapg({}, context)
```

#### Parameters

### CreateHsm



```js
amazonaws_cloudhsm.CreateHsm({}, context)
```

#### Parameters

### CreateLunaClient



```js
amazonaws_cloudhsm.CreateLunaClient({}, context)
```

#### Parameters

### DeleteHapg



```js
amazonaws_cloudhsm.DeleteHapg({}, context)
```

#### Parameters

### DeleteHsm



```js
amazonaws_cloudhsm.DeleteHsm({}, context)
```

#### Parameters

### DeleteLunaClient



```js
amazonaws_cloudhsm.DeleteLunaClient({}, context)
```

#### Parameters

### DescribeHapg



```js
amazonaws_cloudhsm.DescribeHapg({}, context)
```

#### Parameters

### DescribeHsm



```js
amazonaws_cloudhsm.DescribeHsm({}, context)
```

#### Parameters

### DescribeLunaClient



```js
amazonaws_cloudhsm.DescribeLunaClient({}, context)
```

#### Parameters

### GetConfig



```js
amazonaws_cloudhsm.GetConfig({}, context)
```

#### Parameters

### ListAvailableZones



```js
amazonaws_cloudhsm.ListAvailableZones({}, context)
```

#### Parameters

### ListHapgs



```js
amazonaws_cloudhsm.ListHapgs({}, context)
```

#### Parameters

### ListHsms



```js
amazonaws_cloudhsm.ListHsms({}, context)
```

#### Parameters

### ListLunaClients



```js
amazonaws_cloudhsm.ListLunaClients({}, context)
```

#### Parameters

### ListTagsForResource



```js
amazonaws_cloudhsm.ListTagsForResource({}, context)
```

#### Parameters

### ModifyHapg



```js
amazonaws_cloudhsm.ModifyHapg({}, context)
```

#### Parameters

### ModifyHsm



```js
amazonaws_cloudhsm.ModifyHsm({}, context)
```

#### Parameters

### ModifyLunaClient



```js
amazonaws_cloudhsm.ModifyLunaClient({}, context)
```

#### Parameters

### RemoveTagsFromResource



```js
amazonaws_cloudhsm.RemoveTagsFromResource({}, context)
```

#### Parameters

