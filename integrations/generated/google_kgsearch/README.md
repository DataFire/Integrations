# @datafire/google_kgsearch

Client library for Knowledge Graph Search

## Installation and Usage
```bash
npm install --save datafire @datafire/google_kgsearch
```

```js
let datafire = require('datafire');
let google_kgsearch = require('@datafire/google_kgsearch').actions;
let context = new datafire.Context();

google_kgsearch.entities.search({}, context).then(data => {
  console.log(data);
})
```

## Description
Searches the Google Knowledge Graph for entities.

## Actions
### entities.search
Searches Knowledge Graph for entities that match the constraints.
A list of matched entities will be returned in response, which will be in
JSON-LD format and compatible with http://schema.org


```js
google_kgsearch.entities.search({}, context)
```


