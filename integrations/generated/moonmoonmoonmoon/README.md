# @datafire/moonmoonmoonmoon

Client library for Moon by Ai Weiwei & Olafur Eliasson

## Installation and Usage
```bash
npm install --save @datafire/moonmoonmoonmoon
```
```js
let moonmoonmoonmoon = require('@datafire/moonmoonmoonmoon').create();

moonmoonmoonmoon.api.marks.get({}).then(data => {
  console.log(data);
})
```

## Description

Turn nothing into something – make a drawing, make a mark.

## Actions

### api.hashtags.get
Search for specified tag (no pound sign necessary). If <b>tag</b> is empty, the 50 most popular hashtags will be returned.


```js
moonmoonmoonmoon.api.hashtags.get({}, context)
```

#### Input
* input `object`
  * tag `string`: Hashtag to search for

#### Output
*Output schema unknown*

### api.marks.get
The main method for querying the marks database. You may use the following options:
        <ol style='list-style-type: lower-roman;'>
        <li>No parameters to retrieve all marks in descending chronological order (use <b>before</b> for pagination)</li>
        <li><b>popular</b> (and optionally <b>last_popular_id</b>) to retrieve all popular marks</li>
        <li><b>featured</b> to retrieve all featured marks</li>
        <li><b>x & y</b> to retrieve mark at specific coordinate</li>
        <li><b>user</b> to retrieve all marks created by the specified user</li>
        <li><b>collection</b> to retrieve all marks collected by the specified user</li>
        </ol>


```js
moonmoonmoonmoon.api.marks.get({}, context)
```

#### Input
* input `object`
  * before `string`: Before ID (pagination purposes)
  * popular `boolean`: Popular marks
  * last_popular_id `string`: Last popular ID (for pagination purposes)
  * featured `boolean`: Featured marks
  * x `integer`: X coordinate
  * y `integer`: Y coordinate
  * user `string`: Created by user ID
  * collection `string`: Collection ID

#### Output
*Output schema unknown*



## Definitions

** No definitions **
