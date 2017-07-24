# @datafire/amazonaws_appstream2

Client library for Amazon AppStream

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_appstream2
```

```js
let datafire = require('datafire');
let amazonaws_appstream2 = require('@datafire/amazonaws_appstream2').actions;
let context = new datafire.Context();

amazonaws_appstream2.AssociateFleet({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon AppStream 2.0</fullname> <p>API documentation for Amazon AppStream 2.0.</p>

## Actions
### AssociateFleet



```js
amazonaws_appstream2.AssociateFleet({}, context)
```

#### Parameters

### CreateFleet



```js
amazonaws_appstream2.CreateFleet({}, context)
```

#### Parameters

### CreateStack



```js
amazonaws_appstream2.CreateStack({}, context)
```

#### Parameters

### CreateStreamingURL



```js
amazonaws_appstream2.CreateStreamingURL({}, context)
```

#### Parameters

### DeleteFleet



```js
amazonaws_appstream2.DeleteFleet({}, context)
```

#### Parameters

### DeleteStack



```js
amazonaws_appstream2.DeleteStack({}, context)
```

#### Parameters

### DescribeFleets



```js
amazonaws_appstream2.DescribeFleets({}, context)
```

#### Parameters

### DescribeImages



```js
amazonaws_appstream2.DescribeImages({}, context)
```

#### Parameters

### DescribeSessions



```js
amazonaws_appstream2.DescribeSessions({}, context)
```

#### Parameters

### DescribeStacks



```js
amazonaws_appstream2.DescribeStacks({}, context)
```

#### Parameters

### DisassociateFleet



```js
amazonaws_appstream2.DisassociateFleet({}, context)
```

#### Parameters

### ExpireSession



```js
amazonaws_appstream2.ExpireSession({}, context)
```

#### Parameters

### ListAssociatedFleets



```js
amazonaws_appstream2.ListAssociatedFleets({}, context)
```

#### Parameters

### ListAssociatedStacks



```js
amazonaws_appstream2.ListAssociatedStacks({}, context)
```

#### Parameters

### StartFleet



```js
amazonaws_appstream2.StartFleet({}, context)
```

#### Parameters

### StopFleet



```js
amazonaws_appstream2.StopFleet({}, context)
```

#### Parameters

### UpdateFleet



```js
amazonaws_appstream2.UpdateFleet({}, context)
```

#### Parameters

### UpdateStack



```js
amazonaws_appstream2.UpdateStack({}, context)
```

#### Parameters

