# @datafire/isbndb

Client library for ISBNdb API

## Installation and Usage
```bash
npm install --save @datafire/isbndb
```
```js
let isbndb = require('@datafire/isbndb').create({
  api_key: ""
});

.then(data => {
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
  * name **required** `string`: The name of an author in the Author's database
  * page `string`: The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them
  * pageSize `string`: How many items should be returned per page, maximum of 1,000

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
  * pageSize `string`: How many items should be returned per page, maximum of 1,000
  * query **required** `string`: A string to search for in the Author’s database
  * page `string`: The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them

#### Output
* output [AuthorQueryResults](#authorqueryresults)

### book.isbn.get
Returns the book details


```js
isbndb.book.isbn.get({
  "isbn": ""
}, context)
```

#### Input
* input `object`
  * isbn **required** `string`: an ISBN 10 or ISBN 13 in the Books database

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
  * query **required** `string`: A string to search for in the Book’s database
  * page `string`: The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them
  * author `string`: Filters the query results by author
  * pageSize `string`: How many items should be returned per page, maximum of 1,000

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
  * name **required** `string`: The name of a publisher in the Publisher's database
  * page `string`: The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them
  * pageSize `string`: How many items should be returned per page, maximum of 1,000

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
  * pageSize `string`: How many items should be returned per page, maximum of 1,000
  * query **required** `string`: A string to search for in the Publisher’s database
  * page `string`: The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them

#### Output
*Output schema unknown*

### search.get
Uses a free query string compatible with ElasticSearch 6 to search in any of the ISBNDB's databases


```js
isbndb.search.get({}, context)
```

#### Input
* input `object`
  * q `string`: A query string compatible with ElasticSearch 6

#### Output
*Output schema unknown*

### stats.get
Returns a status object about the ISBNDB database.


```js
isbndb.stats.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### subject.name.get
Returns details and a list of books with subject.


```js
isbndb.subject.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: A subject in the Subject's database

#### Output
* output [Subject](#subject)

### subjects.query.get
This returns a list of subjects that match the given query


```js
isbndb.subjects.query.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * pageSize `string`: How many items should be returned per page, maximum of 1,000
  * query **required** `string`: A string to search for in the Subject’s database
  * page `string`: The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them

#### Output
*Output schema unknown*



## Definitions

### Author
* Author `object`: Describes the name of an author and the books written by that author in the database
  * author `string`
  * books `array`
    * items [Book](#book)

### AuthorQueryResults
* AuthorQueryResults `object`: Describes the results of a query in the author's database
  * authors `array`
    * items `string`
  * total `integer`

### Book
* Book `object`: Describes a book in the book's database
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
  * name `string`

### Subject
* Subject `object`
  * parent `string`
  * subject `string`


