# @datafire/fungenerators_trivia

Client library for Fun Generators API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_trivia
```
```js
let fungenerators_trivia = require('@datafire/fungenerators_trivia').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Below is the documentation for the API calls. You can try them out right here. 


## Actions

### trivia.delete
Create a random Trivia entry.


```js
fungenerators_trivia.trivia.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Trivia ID

#### Output
*Output schema unknown*

### trivia.get
Get a Trivia entry for a given id. Retrieves a trivia question and answer based on the id.


```js
fungenerators_trivia.trivia.get({}, context)
```

#### Input
* input `object`
  * id `string`: ID of the trivia to fetch

#### Output
*Output schema unknown*

### trivia.put
Create a random Trivia entry.


```js
fungenerators_trivia.trivia.put({
  "question": "",
  "category": "",
  "answer": ""
}, context)
```

#### Input
* input `object`
  * question **required** `string`: Trivia Question
  * category **required** `string`: Category of the trivia
  * answer **required** `string`: Answer(s) to the trivia question

#### Output
*Output schema unknown*

### trivia.categories.get
Get a random Trivia.


```js
fungenerators_trivia.trivia.categories.get({}, context)
```

#### Input
* input `object`
  * start `integer`: start

#### Output
*Output schema unknown*

### trivia.random.get
Get a random trivia for a given category(optional)


```js
fungenerators_trivia.trivia.random.get({}, context)
```

#### Input
* input `object`
  * category `string`: Category to get the trivia from

#### Output
*Output schema unknown*

### trivia.search.get
Search for random trivia which has the text in the query, for a given category(optional).


```js
fungenerators_trivia.trivia.search.get({}, context)
```

#### Input
* input `object`
  * query `string`: Text to search for in the trivia
  * category `string`: Category to get the trivia from

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
