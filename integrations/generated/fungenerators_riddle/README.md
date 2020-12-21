# @datafire/fungenerators_riddle

Client library for Fun Generators API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_riddle
```
```js
let fungenerators_riddle = require('@datafire/fungenerators_riddle').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Below is the documentation for the API calls. You can try them out right here. 


## Actions

### riddle.delete
Create a random Riddle entry.


```js
fungenerators_riddle.riddle.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Riddle ID

#### Output
*Output schema unknown*

### riddle.get
Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.


```js
fungenerators_riddle.riddle.get({}, context)
```

#### Input
* input `object`
  * id `string`: ID of the riddle to fetch

#### Output
*Output schema unknown*

### riddle.post
Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.


```js
fungenerators_riddle.riddle.post({
  "question": "",
  "category": "",
  "answer": ""
}, context)
```

#### Input
* input `object`
  * question **required** `string`: Riddle Question
  * category **required** `string`: Category of the riddle
  * answer **required** `string`: Answer(s) to the riddle question

#### Output
*Output schema unknown*

### riddle.put
Create a random Riddle entry.


```js
fungenerators_riddle.riddle.put({
  "question": "",
  "category": "",
  "answer": ""
}, context)
```

#### Input
* input `object`
  * question **required** `string`: Riddle Question
  * category **required** `string`: Category of the riddle
  * answer **required** `string`: Answer(s) to the riddle question

#### Output
*Output schema unknown*

### riddle.random.get
Get a random riddle for a given category(optional)


```js
fungenerators_riddle.riddle.random.get({}, context)
```

#### Input
* input `object`
  * category `string`: Category to get the riddle from

#### Output
*Output schema unknown*

### riddle.search.get
Search for random riddle which has the text in the query, for a given category(optional).


```js
fungenerators_riddle.riddle.search.get({}, context)
```

#### Input
* input `object`
  * query `string`: Text to search for in the riddle
  * category `string`: Category to get the riddle from

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
