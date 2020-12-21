# @datafire/fantasydata_nfl_v3_rotoballer_articles

Client library for NFL v3 RotoBaller Articles

## Installation and Usage
```bash
npm install --save @datafire/fantasydata_nfl_v3_rotoballer_articles
```
```js
let fantasydata_nfl_v3_rotoballer_articles = require('@datafire/fantasydata_nfl_v3_rotoballer_articles').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### RotoballerArticles
RotoBaller Articles


```js
fantasydata_nfl_v3_rotoballer_articles.RotoballerArticles({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: xml, json): Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.

#### Output
* output `array`
  * items [Article](#article)

### RotoballerArticlesByDate
RotoBaller Articles by Date


```js
fantasydata_nfl_v3_rotoballer_articles.RotoballerArticlesByDate({
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
  * items [Article](#article)

### RotoballerArticlesByPlayer
RotoBaller Articles by Player


```js
fantasydata_nfl_v3_rotoballer_articles.RotoballerArticlesByPlayer({
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
  * items [Article](#article)



## Definitions

### Article
* Article `object`
  * ArticleID `integer`
  * Author `string`
  * Content `string`
  * Players `array`
    * items [PlayerInfo](#playerinfo)
  * Source `string`
  * TermsOfUse `string`
  * Title `string`
  * Updated `string`
  * Url `string`

### PlayerInfo
* PlayerInfo `object`
  * Name `string`
  * PlayerID `integer`
  * Position `string`
  * Team `string`
  * TeamID `integer`


