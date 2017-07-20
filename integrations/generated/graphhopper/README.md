# @datafire/graphhopper

Client library for Route Optimization

## Installation and Usage
```bash
npm install --save datafire @datafire/graphhopper
```

```js
let datafire = require('datafire');
let graphhopper = require('@datafire/graphhopper').actions;

let account = {
  api_key: "",
}
let context = new datafire.Context({
  accounts: {
    graphhopper: account,
  }
})

graphhopper.postVrp({}, context).then(data => {
  console.log(data);
})
```

## Description
Our Route Optimization API solves the so called vehicle routing problem fast. It calculates an optimal tour for a set of vehicles, services and constraints

## Actions
### postVrp
This endpoint for solving vehicle routing problems, i.e. traveling salesman or vehicle routing problems, and returns the solution.



```js
graphhopper.postVrp({
  "key": "",
  "body": {}
}, context)
```

#### Parameters
* key (string) **required** - your API key
* body (object) **required**

### getSolution
This endpoint returns the solution of a large problems. You can fetch it with the job_id, you have been sent.



```js
graphhopper.getSolution({
  "key": "",
  "jobId": ""
}, context)
```

#### Parameters
* key (string) **required** - your API key
* jobId (string) **required** - Request solution with jobId

