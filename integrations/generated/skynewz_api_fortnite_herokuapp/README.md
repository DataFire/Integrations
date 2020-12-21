# @datafire/skynewz_api_fortnite_herokuapp

Client library for FORTNITE REST API

## Installation and Usage
```bash
npm install --save @datafire/skynewz_api_fortnite_herokuapp
```
```js
let skynewz_api_fortnite_herokuapp = require('@datafire/skynewz_api_fortnite_herokuapp').create({
  Bearer: ""
});

.then(data => {
  console.log(data);
});
```

## Description

REST API about Fortnite game

## Actions

### check.get
Get Fortnite game status


```js
skynewz_api_fortnite_herokuapp.check.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * status `boolean`

### news.get
Get Fortnite News


```js
skynewz_api_fortnite_herokuapp.news.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * br `object`
    * _type `string`: Type of news
    * body `string`
    * image `string`: Image path of this news
    * title `string`
  * common `object`
    * _type `string`
    * body `string`
    * title `string`
  * loginmessage `object`
    * _type `string`
    * body `string`
    * title `string`
  * survivalmessage `object`
    * _type `string`
    * body `string`
    * title `string`

### oauth.token.post
Get a Bearer token


```js
skynewz_api_fortnite_herokuapp.oauth.token.post({
  "email": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`
  * password **required** `string`

#### Output
* output `object`
  * access_toekn `string`
  * expiresIn `string`: Time in seconds for the validity of token

### pve.info.get
Get Fortnite PVE Info (storm, etc)


```js
skynewz_api_fortnite_herokuapp.pve.info.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### pve.user.username.get
Get PVE Stat by given username


```js
skynewz_api_fortnite_herokuapp.pve.user.username.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Fortnite username

#### Output
* output `object`

### stats.id.plateform.id.get
Get user's stats by user id


```js
skynewz_api_fortnite_herokuapp.stats.id.plateform.id.get({
  "plateform": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * plateform **required** `string`: Playing plateform, can be xb1, ps4 or pc
  * id **required** `string`: Player ID

#### Output
* output `object`
  * group `object`: Stats on solo, duo or squad
    * duo `object`
      * k/d `number`: Ratio Kill/Dead
      * kills `integer`: Number of kills
      * killsPerMatch `string`: Number of kill/match
      * killsPerMin `string`: Number of kill/minute
      * score `integer`
      * timePlayed `string`: Number of days, hours and minutes played
      * top10 `integer`: Number of top10
      * top12 `integer`: Number of top12
      * top25 `integer`: Number of top25
      * top3 `integer`: Number of top3
      * top5 `integer`: Number of top5
      * top6 `integer`: Number of top6
      * win% `number`: Wins ratio
      * wins `integer`: Number of top1
    * solo `object`
      * k/d `number`: Ratio Kill/Dead
      * kills `integer`: Number of kills
      * killsPerMatch `string`: Number of kill/match
      * killsPerMin `string`: Number of kill/minute
      * score `integer`
      * timePlayed `string`: Number of days, hours and minutes played
      * top10 `integer`: Number of top10
      * top12 `integer`: Number of top12
      * top25 `integer`: Number of top25
      * top3 `integer`: Number of top3
      * top5 `integer`: Number of top5
      * top6 `integer`: Number of top6
      * win% `number`: Wins ratio
      * wins `integer`: Number of top1
    * squad `object`
      * k/d `number`: Ratio Kill/Dead
      * kills `integer`: Number of kills
      * killsPerMatch `string`: Number of kill/match
      * killsPerMin `string`: Number of kill/minute
      * score `integer`
      * timePlayed `string`: Number of days, hours and minutes played
      * top10 `integer`: Number of top10
      * top12 `integer`: Number of top12
      * top25 `integer`: Number of top25
      * top3 `integer`: Number of top3
      * top5 `integer`: Number of top5
      * top6 `integer`: Number of top6
      * win% `number`: Wins ratio
      * wins `integer`: Number of top1
  * info `object`: Display user info
    * accountId `integer`
    * plateform `string`
    * username `string`
  * lifetimeStats `object`
    * k/d `number`: Ratio Kill/Dead
    * kills `integer`: Number of kills
    * killsPerMatch `string`: Number of kill/match
    * killsPerMin `string`: Number of kill/minute
    * score `integer`
    * timePlayed `string`: Number of days, hours and minutes played
    * top10 `integer`: Number of top10
    * top12 `integer`: Number of top12
    * top25 `integer`: Number of top25
    * top3 `integer`: Number of top3
    * top5 `integer`: Number of top5
    * top6 `integer`: Number of top6
    * win% `number`: Wins ratio
    * wins `integer`: Number of top1

### stats.plateform.username.get
Get user's stats by username


```js
skynewz_api_fortnite_herokuapp.stats.plateform.username.get({
  "plateform": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * plateform **required** `string`: Playing plateform, can be xb1, ps4 or pc
  * username **required** `string`: Player username

#### Output
* output `object`
  * group `object`: Stats on solo, duo or squad
    * duo `object`
      * k/d `number`: Ratio Kill/Dead
      * kills `integer`: Number of kills
      * killsPerMatch `string`: Number of kill/match
      * killsPerMin `string`: Number of kill/minute
      * score `integer`
      * timePlayed `string`: Number of days, hours and minutes played
      * top10 `integer`: Number of top10
      * top12 `integer`: Number of top12
      * top25 `integer`: Number of top25
      * top3 `integer`: Number of top3
      * top5 `integer`: Number of top5
      * top6 `integer`: Number of top6
      * win% `number`: Wins ratio
      * wins `integer`: Number of top1
    * solo `object`
      * k/d `number`: Ratio Kill/Dead
      * kills `integer`: Number of kills
      * killsPerMatch `string`: Number of kill/match
      * killsPerMin `string`: Number of kill/minute
      * score `integer`
      * timePlayed `string`: Number of days, hours and minutes played
      * top10 `integer`: Number of top10
      * top12 `integer`: Number of top12
      * top25 `integer`: Number of top25
      * top3 `integer`: Number of top3
      * top5 `integer`: Number of top5
      * top6 `integer`: Number of top6
      * win% `number`: Wins ratio
      * wins `integer`: Number of top1
    * squad `object`
      * k/d `number`: Ratio Kill/Dead
      * kills `integer`: Number of kills
      * killsPerMatch `string`: Number of kill/match
      * killsPerMin `string`: Number of kill/minute
      * score `integer`
      * timePlayed `string`: Number of days, hours and minutes played
      * top10 `integer`: Number of top10
      * top12 `integer`: Number of top12
      * top25 `integer`: Number of top25
      * top3 `integer`: Number of top3
      * top5 `integer`: Number of top5
      * top6 `integer`: Number of top6
      * win% `number`: Wins ratio
      * wins `integer`: Number of top1
  * info `object`: Display user info
    * accountId `integer`
    * plateform `string`
    * username `string`
  * lifetimeStats `object`
    * k/d `number`: Ratio Kill/Dead
    * kills `integer`: Number of kills
    * killsPerMatch `string`: Number of kill/match
    * killsPerMin `string`: Number of kill/minute
    * score `integer`
    * timePlayed `string`: Number of days, hours and minutes played
    * top10 `integer`: Number of top10
    * top12 `integer`: Number of top12
    * top25 `integer`: Number of top25
    * top3 `integer`: Number of top3
    * top5 `integer`: Number of top5
    * top6 `integer`: Number of top6
    * win% `number`: Wins ratio
    * wins `integer`: Number of top1

### store.get
Get Fortnite Store


```js
skynewz_api_fortnite_herokuapp.store.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### user.plateform.username.get
Get a user by username


```js
skynewz_api_fortnite_herokuapp.user.plateform.username.get({
  "plateform": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * plateform **required** `string`: Playing plateform, can be xb1, ps4 or pc
  * username **required** `string`: Player username

#### Output
* output `object`
  * displayName `string`
  * id `string`: ID of player



## Definitions

*This integration has no definitions*
