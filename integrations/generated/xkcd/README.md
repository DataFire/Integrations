# @datafire/xkcd

Client library for XKCD

## Installation and Usage
```bash
npm install --save datafire @datafire/xkcd
```

```js
let datafire = require('datafire');
let xkcd = require('@datafire/xkcd').create();

xkcd.info.0.json.get({}).then(data => {
  console.log(data);
})
```

## Description
Webcomic of romance, sarcasm, math, and language.

## Actions
### info.0.json.get
Fetch current comic and metadata.



```js
xkcd.info.0.json.get(null, context)
```

#### Parameters
*This action has no parameters*

### comicId.info.0.json.get
Fetch comics and metadata  by comic id.



```js
xkcd.comicId.info.0.json.get({
  "comicId": 0
}, context)
```

#### Parameters
* comicId (number) **required**

