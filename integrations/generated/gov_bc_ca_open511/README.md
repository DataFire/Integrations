# @datafire/gov_bc_ca_open511

Client library for DriveBC's Open511

## Installation and Usage
```bash
npm install --save datafire @datafire/gov_bc_ca_open511
```

```js
let datafire = require('datafire');
let gov_bc_ca_open511 = require('@datafire/gov_bc_ca_open511').actions;
let context = new datafire.Context();

gov_bc_ca_open511.jurisdictiongeography.get({}, context).then(data => {
  console.log(data);
})
```

## Description
This API is DriveBC's implementation of the Open511 specification.  It provides information about known road events (traffic accidents, construction, etc.) in British Columbia, Canada.

## Actions
### areas.get
Lists the geographical areas (e.g. districts) that can be used to filter events.


```js
gov_bc_ca_open511.areas.get({}, context)
```


### events.get
The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided. 


```js
gov_bc_ca_open511.events.get({}, context)
```


### jurisdiction.get
Lists the jurisdictions publishing data through this Open511 API implementation


```js
gov_bc_ca_open511.jurisdiction.get({}, context)
```


### jurisdictiongeography.get
Provides the geographical boundaries for all the jurisdictions.


```js
gov_bc_ca_open511.jurisdictiongeography.get({}, context)
```


