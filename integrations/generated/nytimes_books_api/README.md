# @datafire/nytimes_books_api

Client library for Books

## Installation and Usage
```bash
npm install --save datafire @datafire/nytimes_books_api
```

```js
let datafire = require('datafire');
let nytimes_books_api = require('@datafire/nytimes_books_api').actions;

let account = {
  api-key: "",
}
let context = new datafire.Context({
  accounts: {
    nytimes_books_api: account,
  }
})


nytimes_books_api.lists.best_sellers.history.json.get({}, context).then(data => {
  console.log(data);
})
```

## Description
The Books API provides information about book reviews and The New York Times bestsellers lists.

## Actions
### lists.format.get
Best Seller List


```js
nytimes_books_api.lists.format.get({
  "format": ""
}, context)
```

#### Parameters
* list (string) - The name of the Times best-seller list. To get valid values, use a list names request.
* weeks-on-list (integer) - The number of weeks that the best seller has been on list-name, as of bestsellers-date
* bestsellers-date (string) - YYYY-MM-DD
* date (string) - YYYY-MM-DD  The date the best-seller list was published on NYTimes.com (compare bestsellers-date)
* isbn (string) - International Standard Book Number, 10 or 13 digits
* published-date (string) - YYYY-MM-DD
* rank (integer) - The rank of the best seller on list-name as of bestsellers-date
* rank-last-week (integer) - The rank of the best seller on list-name one week prior to bestsellers-date
* offset (integer) - Sets the starting point of the result set
* sort-order (string) - Sets the sort order of the result set
* format (string) **required**

### lists.best_sellers.history.json.get
Best Seller History List


```js
nytimes_books_api.lists.best_sellers.history.json.get({}, context)
```


### lists.names.format.get
Best Seller List Names


```js
nytimes_books_api.lists.names.format.get({
  "format": ""
}, context)
```

#### Parameters
* api-key (string)
* format (string) **required**

### lists.overview.format.get
Best Seller List Overview


```js
nytimes_books_api.lists.overview.format.get({
  "format": ""
}, context)
```

#### Parameters
* published_date (string) - The best-seller list publication date. YYYY-MM-DD
* api-key (string)
* format (string) **required**

### lists.date.list.json.get
Best Seller List by Date


```js
nytimes_books_api.lists.date.list.json.get({
  "date": "",
  "list": ""
}, context)
```

#### Parameters
* isbn (integer) - International Standard Book Number, 10 or 13 digits
* list-name (string) - The name of the Times best-seller list. To get valid values, use a list names request.
* published-date (string) - YYYY-MM-DD
* bestsellers-date (string) - YYYY-MM-DD
* weeks-on-list (integer) - The number of weeks that the best seller has been on list-name, as of bestsellers-date
* rank (string) - The rank of the best seller on list-name as of bestsellers-date
* rank-last-week (integer) - The rank of the best seller on list-name one week prior to bestsellers-date
* offset (integer) - Sets the starting point of the result set
* sort-order (string) - The default is ASC (ascending). The sort-order parameter is used with the sort-by parameter — for details, see each request type.
* date (string) **required**
* list (string) **required** - Name of the Best Sellers List. You can get the full list from /lists/names.json

### reviews.format.get
Reviews


```js
nytimes_books_api.reviews.format.get({
  "format": ""
}, context)
```

#### Parameters
* isbn (integer) - Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.
* title (string) - You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.
* author (string) - You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.
* api-key (string)
* format (string) **required**

