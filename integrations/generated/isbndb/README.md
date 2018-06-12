# @datafire/isbndb

Client library for ISBNdb

## Installation and Usage
```bash
npm install --save @datafire/isbndb
```
```js
let isbndb = require('@datafire/isbndb').create({
  api_key: ""
});

isbndb.author.name.get({
  "name": ""
}).then(data => {
  console.log(data);
});
```

## Description

Definition of ISBNdb.com API

## Actions

### author.name.get
Returns the name and a list of books by the author.


```js
isbndb.author.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: A string to search for in the Author's database

#### Output
* output [Author](#author)

### authors.query.get
This returns a list of authors whos name matches the given query


```js
isbndb.authors.query.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`

#### Output
*Output schema unknown*

### book.isbn.get
Returns the book details


```js
isbndb.book.isbn.get({
  "isbn": ""
}, context)
```

#### Input
* input `object`
  * isbn **required** `string`

#### Output
* output [Book](#book)

### books.query.get
This returns a list of books that match the query


```js
isbndb.books.query.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`

#### Output
*Output schema unknown*

### publisher.name.get
Returns details and a list of books by the publisher.


```js
isbndb.publisher.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [Publisher](#publisher)

### publishers.query.get
This returns a list of publishers that match the given query


```js
isbndb.publishers.query.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`

#### Output
*Output schema unknown*

### stats.get



```js
isbndb.stats.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

### Author
* Author `object`
  * books `array`
    * items `object`
      * isbn `string`
  * name `string`

### Book
* Book `object`
  * authors `array`
    * items `string`
  * date_published `string`
  * dewey_decimal `string`
  * dimensions `string`
  * edition `string`
  * excerpt `string`
  * format `string`
  * isbn `string`
  * isbn13 `string`
  * language `string`
  * overview `string`
  * pages `integer`
  * publisher `string`
  * reviews `array`
    * items `string`
  * subjects `array`
    * items `string`
  * synopsys `string`
  * title `string`
  * title_long `string`

### Publisher
* Publisher `object`
  * books `array`
    * items `object`
      * isbn `string`
  * category `string`
  * location `string`
  * name `string`

### Subject
* Subject `object`
  * parent `string`
  * subject `string`


