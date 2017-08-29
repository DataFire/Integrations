# @datafire/amazonaws_appstream2

Client library for Amazon AppStream

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_appstream2
```

```js
let datafire = require('datafire');
let amazonaws_appstream2 = require('@datafire/amazonaws_appstream2').create();

amazonaws_appstream2.AssociateFleet({}).then(data => {
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


### CreateFleet



```js
amazonaws_appstream2.CreateFleet({}, context)
```


### CreateStack



```js
amazonaws_appstream2.CreateStack({}, context)
```


### CreateStreamingURL



```js
amazonaws_appstream2.CreateStreamingURL({}, context)
```


### DeleteFleet



```js
amazonaws_appstream2.DeleteFleet({}, context)
```


### DeleteStack



```js
amazonaws_appstream2.DeleteStack({}, context)
```


### DescribeFleets



```js
amazonaws_appstream2.DescribeFleets({}, context)
```


### DescribeImages



```js
amazonaws_appstream2.DescribeImages({}, context)
```


### DescribeSessions



```js
amazonaws_appstream2.DescribeSessions({}, context)
```


### DescribeStacks



```js
amazonaws_appstream2.DescribeStacks({}, context)
```


### DisassociateFleet



```js
amazonaws_appstream2.DisassociateFleet({}, context)
```


### ExpireSession



```js
amazonaws_appstream2.ExpireSession({}, context)
```


### ListAssociatedFleets



```js
amazonaws_appstream2.ListAssociatedFleets({}, context)
```


### ListAssociatedStacks



```js
amazonaws_appstream2.ListAssociatedStacks({}, context)
```


### StartFleet



```js
amazonaws_appstream2.StartFleet({}, context)
```


### StopFleet



```js
amazonaws_appstream2.StopFleet({}, context)
```


### UpdateFleet



```js
amazonaws_appstream2.UpdateFleet({}, context)
```


### UpdateStack



```js
amazonaws_appstream2.UpdateStack({}, context)
```


