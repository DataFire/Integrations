# @datafire/google_searchconsole

Client library for Google Search Console URL Testing Tools

## Installation and Usage
```bash
npm install --save datafire @datafire/google_searchconsole
```

```js
let datafire = require('datafire');
let google_searchconsole = require('@datafire/google_searchconsole').actions;
let context = new datafire.Context();

google_searchconsole.urlTestingTools.mobileFriendlyTest.run({}, context).then(data => {
  console.log(data);
})
```

## Description
Provides tools for running validation tests against single URLs

## Actions
### urlTestingTools.mobileFriendlyTest.run
Runs Mobile-Friendly Test for a given URL.


```js
google_searchconsole.urlTestingTools.mobileFriendlyTest.run({}, context)
```


