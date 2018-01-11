# @datafire/nytimes_books_api

Client library for Books

## Installation and Usage
```bash
npm install --save @datafire/nytimes_books_api
```
```js
let nytimes_books_api = require('@datafire/nytimes_books_api').create({
  "api-key": ""
});

nytimes_books_api.lists.best_sellers.history.json.get({}).then(data => {
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

#### Input
* input `object`
  * list `string`: The name of the Times best-seller list. To get valid values, use a list names request.
  * weeks-on-list `integer`: The number of weeks that the best seller has been on list-name, as of bestsellers-date
  * bestsellers-date `string`: YYYY-MM-DD
  * date `string`: YYYY-MM-DD  The date the best-seller list was published on NYTimes.com (compare bestsellers-date)
  * isbn `string`: International Standard Book Number, 10 or 13 digits
  * published-date `string`: YYYY-MM-DD
  * rank `integer`: The rank of the best seller on list-name as of bestsellers-date
  * rank-last-week `integer`: The rank of the best seller on list-name one week prior to bestsellers-date
  * offset `integer`: Sets the starting point of the result set
  * sort-order `string` (values: ASC, DESC): Sets the sort order of the result set
  * format **required** `string` (values: json, jsonp)

#### Output
* output `object`
  * copyright `string`
  * last_modified `string`
  * num_results `integer`
  * results `array`
    * items `object`
      * amazon_product_url `string`
      * asterisk `integer`
      * bestsellers_date `string`
      * book_details `array`
        * items `object`
          * age_group `string`
          * author `string`
          * contributor `string`
          * contributor_note `string`
          * description `string`
          * price `integer`
          * primary_isbn10 `string`
          * primary_isbn13 `string`
          * publisher `string`
          * title `string`
      * dagger `integer`
      * display_name `string`
      * isbns `array`
        * items `object`
          * isbn10 `string`
          * isbn13 `string`
      * list_name `string`
      * published_date `string`
      * rank `integer`
      * rank_last_week `integer`
      * reviews `array`
        * items `object`
          * article_chapter_link `string`
          * book_review_link `string`
          * first_chapter_link `string`
          * sunday_review_link `string`
      * weeks_on_list `integer`
  * status `string`

### lists.best_sellers.history.json.get
Best Seller History List


```js
nytimes_books_api.lists.best_sellers.history.json.get({}, context)
```

#### Input
* input `object`
  * age-group `string`: The target age group for the best seller.
  * author `string`: The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).
  * contributor `string`: The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).
  * isbn `string`: International Standard Book Number, 10 or 13 digits
  * price `string`: The publisher's list price of the best seller, including decimal point
  * publisher `string`: The standardized name of the publisher
  * title `string`: The title of the best seller

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items `object`
      * age_group `string`
      * author `string`
      * contributor `string`
      * contributor_note `string`
      * description `string`
      * isbns `array`
        * items `object`
          * isbn10 `string`
          * isbn13 `string`
      * price `integer`
      * publisher `string`
      * ranks_history `array`
        * items `object`
          * asterisk `integer`
          * bestsellers_date `string`
          * dagger `integer`
          * display_name `string`
          * list_name `string`
          * primary_isbn10 `string`
          * primary_isbn13 `string`
          * published_date `string`
          * rank `integer`
          * ranks_last_week `null`
          * weeks_on_list `integer`
      * reviews `array`
        * items `object`
          * article_chapter_link `string`
          * book_review_link `string`
          * first_chapter_link `string`
          * sunday_review_link `string`
      * title `string`
  * status `string`

### lists.names.format.get
Best Seller List Names


```js
nytimes_books_api.lists.names.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * api-key `string`
  * format **required** `string` (values: json, jsonp)

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items `object`
      * display_name `string`
      * list_name `string`
      * list_name_encoded `string`
      * newest_published_date `string`
      * oldest_published_date `string`
      * updated `string`
  * status `string`

### lists.overview.format.get
Best Seller List Overview


```js
nytimes_books_api.lists.overview.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * published_date `string`: The best-seller list publication date. YYYY-MM-DD
  * api-key `string`
  * format **required** `string` (values: json, jsonp)

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `object`
    * bestsellers_date `string`
    * lists `array`
      * items `object`
        * books `array`
          * items `object`
            * age_group `string`
            * author `string`
            * contributor `string`
            * contributor_note `string`
            * created_date `string`
            * description `string`
            * price `integer`
            * primary_isbn10 `string`
            * primary_isbn13 `string`
            * publisher `string`
            * rank `integer`
            * title `string`
            * updated_date `string`
        * display_name `string`
        * list_id `integer`
        * list_image `string`
        * list_name `string`
        * updated `string`
    * published_date `string`
  * status `string`

### lists.date.list.json.get
Best Seller List by Date


```js
nytimes_books_api.lists.date.list.json.get({
  "date": "",
  "list": ""
}, context)
```

#### Input
* input `object`
  * isbn `integer`: International Standard Book Number, 10 or 13 digits
  * list-name `string`: The name of the Times best-seller list. To get valid values, use a list names request.
  * published-date `string`: YYYY-MM-DD
  * bestsellers-date `string`: YYYY-MM-DD
  * weeks-on-list `integer`: The number of weeks that the best seller has been on list-name, as of bestsellers-date
  * rank `string`: The rank of the best seller on list-name as of bestsellers-date
  * rank-last-week `integer`: The rank of the best seller on list-name one week prior to bestsellers-date
  * offset `integer`: Sets the starting point of the result set
  * sort-order `string` (values: ASC, DESC): The default is ASC (ascending). The sort-order parameter is used with the sort-by parameter — for details, see each request type.
  * date **required** `string`
  * list **required** `string`: Name of the Best Sellers List. You can get the full list from /lists/names.json

#### Output
* output `object`
  * copyright `string`
  * last_modified `string`
  * num_results `integer`
  * results `object`
    * bestsellers_date `string`
    * books `array`
      * items `object`
        * age_group `string`
        * amazon_product_url `string`
        * article_chapter_link `string`
        * asterisk `integer`
        * author `string`
        * book_image `string`
        * book_review_link `string`
        * contributor `string`
        * contributor_note `string`
        * dagger `integer`
        * description `string`
        * first_chapter_link `string`
        * isbns `array`
          * items `object`
            * isbn10 `string`
            * isbn13 `string`
        * price `integer`
        * primary_isbn10 `string`
        * primary_isbn13 `string`
        * publisher `string`
        * rank `integer`
        * rank_last_week `integer`
        * sunday_review_link `string`
        * title `string`
        * weeks_on_list `integer`
    * corrections `array`
      * items `object`
    * display_name `string`
    * list_name `string`
    * normal_list_ends_at `integer`
    * published_date `string`
    * updated `string`
  * status `string`

### reviews.format.get
Reviews


```js
nytimes_books_api.reviews.format.get({
  "format": ""
}, context)
```

#### Input
* input `object`
  * isbn `integer`: Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.
  * title `string`: You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.
  * author `string`: You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.
  * api-key `string`
  * format **required** `string` (values: json, jsonp)

#### Output
* output `object`
  * copyright `string`
  * num_results `integer`
  * results `array`
    * items `object`
      * book_author `string`
      * book_title `string`
      * byline `string`
      * isbn13 `array`
        * items `string`
      * publication_dt `string`
      * summary `string`
      * url `string`
  * status `string`



## Definitions

**This integration has no definitions**
