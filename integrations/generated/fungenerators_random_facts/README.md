# @datafire/fungenerators_random_facts

Client library for Facts API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_random_facts
```
```js
let fungenerators_random_facts = require('@datafire/fungenerators_random_facts').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

A full featured Facts API. REST access with json/xml/jsonp result support. On this day birth and death support, random fact, keyword search support etc. Below is the documentation for the Random Facts API calls. You can try them out right here. [Click here to subscribe](http://fungenerators.com/api/facts/)


## Actions

### fact.delete
Delete a Fact entry identified by the id.


```js
fungenerators_random_facts.fact.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Fact ID

#### Output
*Output schema unknown*

### fact.get
Get a Fact belonging to the id.


```js
fungenerators_random_facts.fact.get({}, context)
```

#### Input
* input `object`
  * id `string`: ID of the fact to fetch

#### Output
*Output schema unknown*

### fact.put
Add a Fact entry to the database (private collection).


```js
fungenerators_random_facts.fact.put({
  "fact": "",
  "category": "",
  "subcategory": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * fact **required** `string`: Fact Text
  * category **required** `string`: Category of the fact
  * subcategory **required** `string`: Sub Category of the fact
  * tags **required** `string`: Tags

#### Output
*Output schema unknown*

### fact.categories.get
Get a random Fact.


```js
fungenerators_random_facts.fact.categories.get({}, context)
```

#### Input
* input `object`
  * start `integer`: start

#### Output
*Output schema unknown*

### fact.fod.get
Get fact of the day for the given category.


```js
fungenerators_random_facts.fact.fod.get({}, context)
```

#### Input
* input `object`
  * category `string`: Category to get the fact of the day from. Must be one from the list returned from /fact/fod/categories

#### Output
*Output schema unknown*

### fact.fod.categories.get
Get the list of supported fact of the day categories.


```js
fungenerators_random_facts.fact.fod.categories.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### fact.numbers.get
Get a random fact about a number


```js
fungenerators_random_facts.fact.numbers.get({
  "number": 0
}, context)
```

#### Input
* input `object`
  * number **required** `integer`: Number value

#### Output
*Output schema unknown*

### fact.onthisday.born.get
Returns a random ( famous/ relatively famous ) person born on a given day and month


```js
fungenerators_random_facts.fact.onthisday.born.get({}, context)
```

#### Input
* input `object`
  * month `string`: Optional month (1-12). Defaults to current month
  * day `string`: Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.

#### Output
*Output schema unknown*

### fact.onthisday.died.get
Returns a random ( famous/ relatively famous ) person died on a given day and month


```js
fungenerators_random_facts.fact.onthisday.died.get({}, context)
```

#### Input
* input `object`
  * month `string`: Optional month (1-12). Defaults to current month
  * day `string`: Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.

#### Output
*Output schema unknown*

### fact.onthisday.event.get
Returns a random ( famous/ relatively famous ) historic event on a given day and month


```js
fungenerators_random_facts.fact.onthisday.event.get({}, context)
```

#### Input
* input `object`
  * month `string`: Optional month (1-12). Defaults to current month
  * day `string`: Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.

#### Output
*Output schema unknown*

### fact.random.get
Get a random Fact for a given category(optional) and subcategory(optional).


```js
fungenerators_random_facts.fact.random.get({}, context)
```

#### Input
* input `object`
  * category `string`: Category to get the fact from
  * subcategory `string`: Sub Category to get the fact from

#### Output
*Output schema unknown*

### fact.search.get
Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).


```js
fungenerators_random_facts.fact.search.get({}, context)
```

#### Input
* input `object`
  * query `string`: Text to search for in the facts
  * category `string`: Category to get the fact from
  * subcategory `string`: Sub Category to get the fact from

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
