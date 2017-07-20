# @datafire/nytimes_article_search

Client library for Article Search

## Installation and Usage
```bash
npm install --save datafire @datafire/nytimes_article_search
```

```js
let datafire = require('datafire');
let nytimes_article_search = require('@datafire/nytimes_article_search').actions;

let account = {
  apikey: "",
}
let context = new datafire.Context({
  accounts: {
    nytimes_article_search: account,
  }
})


nytimes_article_search.articlesearch.json.get({}, context).then(data => {
  console.log(data);
})
```

## Description
With the Article Search API, you can search New York Times articles from Sept. 18, 1851 to today, retrieving headlines, abstracts, lead paragraphs, links to associated multimedia and other article metadata.  

 Note: In URI examples and field names, italics indicate placeholders for variables or values. Brackets [ ] indicate optional items. Parentheses ( ) are not a convention — when URIs include parentheses, interpret them literally.

## Actions
### articlesearch.json.get
Article Search requests use the following URI structure:



```js
nytimes_article_search.articlesearch.json.get({}, context)
```


