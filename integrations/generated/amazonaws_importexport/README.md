# @datafire/amazonaws_importexport

Client library for AWS Import/Export

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_importexport
```

```js
let datafire = require('datafire');
let amazonaws_importexport = require('@datafire/amazonaws_importexport').actions;
let context = new datafire.Context();

amazonaws_importexport.CancelJob({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.

## Actions
### CancelJob



```js
amazonaws_importexport.CancelJob({}, context)
```

#### Parameters

### CreateJob



```js
amazonaws_importexport.CreateJob({}, context)
```

#### Parameters

### GetShippingLabel



```js
amazonaws_importexport.GetShippingLabel({}, context)
```

#### Parameters

### GetStatus



```js
amazonaws_importexport.GetStatus({}, context)
```

#### Parameters

### ListJobs



```js
amazonaws_importexport.ListJobs({}, context)
```

#### Parameters
* MaxJobs (string)
* Marker (string)

### UpdateJob



```js
amazonaws_importexport.UpdateJob({}, context)
```

#### Parameters

