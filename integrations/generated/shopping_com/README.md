# @datafire/shopping_com

Client library for Shopping.com

## Installation and Usage
```bash
npm install --save datafire @datafire/shopping_com
```

```js
let datafire = require('datafire');
let shopping_com = require('@datafire/shopping_com').actions;
let context = new datafire.Context();

shopping_com.CategoryTree.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Shopping.com offers Publishers rich content via the Shopping.com's API.

## Actions
### GeneralSearch.get
Searches for products by offer. See API docs for request parameters/format.


```js
shopping_com.GeneralSearch.get({}, context)
```


### CategoryTree.get
Returns information on a single category (e.g. name) or the relationship hierarchy between categories.


```js
shopping_com.CategoryTree.get({}, context)
```


