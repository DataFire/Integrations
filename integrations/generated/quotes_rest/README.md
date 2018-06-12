# @datafire/quotes_rest

Client library for They Said So Quotes

## Installation and Usage
```bash
npm install --save @datafire/quotes_rest
```
```js
let quotes_rest = require('@datafire/quotes_rest').create();

quotes_rest.qod.categories.get({}).then(data => {
  console.log(data);
});
```

## Description

 They Said So Quotes API offers a complete feature rich REST API access to its quotes platform.  This is the documentation for the world famous [quotes API](https://theysaidso.com/api).  If you are a subscriber and you are trying this from a console add 'X-TheySaidSo-Api-Secret' header and add your api key as the header value. You can test and play with the API right here on this web page. For using the private end points and subscribing to the API please visit https://theysaidso.com/api.

## Actions

### qod.get
Gets `Quote of the Day`.
Optional `category` param determines
the category of returned quote of the day



```js
quotes_rest.qod.get({}, context)
```

#### Input
* input `object`
  * category `string`: QOD Category
  * X-TheySaidSo-Api-Secret `string`: API Key

#### Output
* output [QuoteResponse](#quoteresponse)

### qod.categories.get
Gets a list of `Quote of the Day` Categories.



```js
quotes_rest.qod.categories.get({}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret `string`: API Key

#### Output
*Output schema unknown*

### qshow.delete
Delete a qshow.



```js
quotes_rest.qshow.delete({
  "id": "",
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Qshow ID
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
*Output schema unknown*

### qshow.get
Gets a details about a qshow.



```js
quotes_rest.qshow.get({
  "id": "",
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Qshow ID
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
*Output schema unknown*

### qshow.patch
Update an existing qshow.


```js
quotes_rest.qshow.patch({
  "id": "",
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Qshow ID
  * title `string`: Qshow title
  * description `string`: Qshow description
  * tags `array`: Tags for the qshow
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
*Output schema unknown*

### qshow.put
Create and add a new qshow to your private collection.


```js
quotes_rest.qshow.put({
  "title": "",
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * title **required** `string`: Qshow title
  * description `string`: Qshow description
  * tags `array`: Tags for the qshow
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
*Output schema unknown*

### qshow.list.get
Get the list of Qshows in They Said So platform.


```js
quotes_rest.qshow.list.get({
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key
  * start `integer`: Response is paged. This parameter controls where response starts the listing at
  * public `boolean`: Should include public qshows or not in the list

#### Output
*Output schema unknown*

### qshow.quotes.get
Get the quotes in a given Qshow.


```js
quotes_rest.qshow.quotes.get({
  "X-TheySaidSo-Api-Secret": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key
  * id **required** `string`: Qshow ID

#### Output
*Output schema unknown*

### qshow.quotes.add.post
Add a quote to a given Qshow.


```js
quotes_rest.qshow.quotes.add.post({
  "X-TheySaidSo-Api-Secret": "",
  "id": "",
  "quoteid": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key
  * id **required** `string`: Qshow ID
  * quoteid **required** `string`: Quote ID to add the qshow collection

#### Output
*Output schema unknown*

### qshow.quotes.remove.post
Remove a quote to a given Qshow.


```js
quotes_rest.qshow.quotes.remove.post({
  "X-TheySaidSo-Api-Secret": "",
  "id": "",
  "quoteid": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key
  * id **required** `string`: Qshow ID
  * quoteid **required** `string`: Quote ID to remove from the qshow collection

#### Output
*Output schema unknown*

### quote.delete
Delete a quote. The user needs to be the owner of the quote to be able to delete it.



```js
quotes_rest.quote.delete({
  "id": "",
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Quote ID
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
*Output schema unknown*

### quote.get
Gets a `Quote` with a given `id`.


```js
quotes_rest.quote.get({
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * id `string`: Quote ID
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
* output [QuoteResponse](#quoteresponse)

### quote.patch
Update a quote


```js
quotes_rest.quote.patch({
  "id": "",
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Quote ID
  * quote `string`: Quote
  * author `string`: Quote Author
  * tags `string`: Comma Separated tags
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
*Output schema unknown*

### quote.put
Add a new quote to your private collection.


```js
quotes_rest.quote.put({
  "quote": "",
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * quote **required** `string`: Quote
  * author `string`: Quote Author
  * tags `string`: Comma Separated tags
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
*Output schema unknown*

### quote.authors.get
Gets a list of author names in the system. 



```js
quotes_rest.quote.authors.get({
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key
  * start `integer`: Response is paged. This parameter controls where response starts the listing at

#### Output
*Output schema unknown*

### quote.categories.get
Gets a list of `Quote` Categories.



```js
quotes_rest.quote.categories.get({
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key
  * start `integer`: Response is paged. This parameter controls where response starts the listing at

#### Output
*Output schema unknown*

### quote.image.search.get
Gets a Random Quote image. Optional `category` param determinesthe category of quote used in the image. Optional `author` param gets the quote image of a given author. 



```js
quotes_rest.quote.image.search.get({
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * category `string`: Quote Category
  * author `string`: Quote Author
  * private `boolean`: Should search private collection. Default searches public image collection.
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
*Output schema unknown*

### quote.list.get
Get the list of quotes in your private collection.


```js
quotes_rest.quote.list.get({
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key
  * start `integer`: Response is paged. This parameter controls where response starts the listing at

#### Output
*Output schema unknown*

### quote.random.get
Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.


```js
quotes_rest.quote.random.get({
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
* output [QuoteResponse](#quoteresponse)

### quote.search.get
Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 


```js
quotes_rest.quote.search.get({
  "X-TheySaidSo-Api-Secret": ""
}, context)
```

#### Input
* input `object`
  * category `string`: Quote Category
  * author `string`: Quote Author
  * minlength `integer`: Quote minimum Length
  * maxlength `integer`: Quote maximum Length
  * query `string`: keyword to search for in the quote
  * private `boolean`: Should search private collection? Default searches public collection.
  * X-TheySaidSo-Api-Secret **required** `string`: API Key

#### Output
* output [QuoteResponse](#quoteresponse)

### quote.tags.add.post
Add a tag to a given Quote.


```js
quotes_rest.quote.tags.add.post({
  "X-TheySaidSo-Api-Secret": "",
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key
  * id **required** `string`: Quote ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*

### quote.tags.remove.post
Remove a tag from a given quote.


```js
quotes_rest.quote.tags.remove.post({
  "X-TheySaidSo-Api-Secret": "",
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * X-TheySaidSo-Api-Secret **required** `string`: API Key
  * id **required** `string`: Quote ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*



## Definitions

### NewQuote
* NewQuote `object`
  * author `string`: Author name of quote.
  * quote **required** `string`: The Quote.
  * tags `array`: Array of tags/categories.
    * items `string`

### QOD
* QOD
  * author `string`: Author name of quote.
  * quote **required** `string`: The Quote.
  * tags `array`: Array of tags/categories.
    * items `string`
  * id **required** `string`: Unique identifier representing a specific quote in theysaidso.com.
  * image `string`: Image URL that can be used for background to display this quote.
  * length `integer`: Length of the quote string.
  * date **required** `string`: Date this quote of the day belongs to

### Quote
* Quote
  * author `string`: Author name of quote.
  * quote **required** `string`: The Quote.
  * tags `array`: Array of tags/categories.
    * items `string`
  * id **required** `string`: Unique identifier representing a specific quote in theysaidso.com.
  * image `string`: Image URL that can be used for background to display this quote.
  * length `integer`: Length of the quote string.

### QuoteResponse
* QuoteResponse `object`
  * contents `object`
    * quotes `array`: List of quotes
      * items [Quote](#quote)
  * success `string`: Metadata about this successful call


