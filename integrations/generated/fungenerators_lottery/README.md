# @datafire/fungenerators_lottery

Client library for Random Lottery Number generator API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_lottery
```
```js
let fungenerators_lottery = require('@datafire/fungenerators_lottery').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Below is the documentation for the API calls. You can try them out right here. 


## Actions

### lottery.countries.get
Get the complete list of countries supported in the number generation API.


```js
fungenerators_lottery.lottery.countries.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### lottery.draw.get
Generate random draw for a given lottery game.


```js
fungenerators_lottery.lottery.draw.get({
  "game": ""
}, context)
```

#### Input
* input `object`
  * game **required** `string`: Lottery Game Name
  * count `integer`: Number of draws (max 5 per request)

#### Output
*Output schema unknown*

### lottery.supported.get
Get the list of supported lottery games supported in the given country.


```js
fungenerators_lottery.lottery.supported.get({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: Country Name

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
