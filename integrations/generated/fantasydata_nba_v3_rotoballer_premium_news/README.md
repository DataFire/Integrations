# @datafire/fantasydata_nba_v3_rotoballer_premium_news

Client library for NBA v3 RotoBaller Premium News

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nba_v3_rotoballer_premium_news
```
```js
let fantasydata_nba_v3_rotoballer_premium_news = require('@datafire/fantasydata_nba_v3_rotoballer_premium_news').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### PremiumNews
Premium News


```js
fantasydata_nba_v3_rotoballer_premium_news.PremiumNews({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [News](#news)

### PremiumNewsByDate
Premium News by Date


```js
fantasydata_nba_v3_rotoballer_premium_news.PremiumNewsByDate({
  "format": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * date **required** `string`: The date of the news.

#### Output
* output `array`
  * items [News](#news)

### PremiumNewsByPlayer
Premium News by Player


```js
fantasydata_nba_v3_rotoballer_premium_news.PremiumNewsByPlayer({
  "format": "",
  "playerid": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
  * playerid **required** `string`: Unique FantasyData Player ID.

#### Output
* output `array`
  * items [News](#news)



## Definitions

### News
* News `object`
  * Author `string`
  * Categories `string`
  * Content `string`
  * NewsID `integer`
  * PlayerID `integer`
  * PlayerID2 `integer`
  * Source `string`
  * Team `string`
  * Team2 `string`
  * TeamID `integer`
  * TeamID2 `integer`
  * TermsOfUse `string`
  * TimeAgo `string`
  * Title `string`
  * Updated `string`
  * Url `string`


