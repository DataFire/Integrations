# @datafire/google_webfonts

Client library for Google Fonts Developer

## Installation and Usage
```bash
npm install --save datafire @datafire/google_webfonts
```

```js
let datafire = require('datafire');
let google_webfonts = require('@datafire/google_webfonts').actions;
let context = new datafire.Context();

google_webfonts.webfonts.list({}, context).then(data => {
  console.log(data);
})
```

## Description
Accesses the metadata for all families served by Google Fonts, providing a list of families currently available (including available styles and a list of supported script subsets).

## Actions
### webfonts.list
Retrieves the list of fonts currently served by the Google Fonts Developer API


```js
google_webfonts.webfonts.list({}, context)
```


