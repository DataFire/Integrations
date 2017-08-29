# @datafire/deutschebahn_betriebsstellen

Client library for Betriebsstellen

## Installation and Usage
```bash
npm install --save datafire @datafire/deutschebahn_betriebsstellen
```

```js
let datafire = require('datafire');
let deutschebahn_betriebsstellen = require('@datafire/deutschebahn_betriebsstellen').create();

deutschebahn_betriebsstellen.betriebsstellen.get({}).then(data => {
  console.log(data);
})
```

## Description
This REST-API enables you to query station and stop infos

## Actions
### betriebsstellen.get
Get all station and stop infos


```js
deutschebahn_betriebsstellen.betriebsstellen.get({}, context)
```

#### Parameters
* name (string) - A station name or part of it

### betriebsstellen.abbrev.get
Get information about a specific station or stop by abbrevation


```js
deutschebahn_betriebsstellen.betriebsstellen.abbrev.get({
  "abbrev": ""
}, context)
```

#### Parameters
* abbrev (string) **required** - Station or stop abbrevation

