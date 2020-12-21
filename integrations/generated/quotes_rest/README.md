# @datafire/quotes_rest

Client library for They Said So Quotes API

## Installation and Usage
```bash
npm install --save @datafire/quotes_rest
```
```js
let quotes_rest = require('@datafire/quotes_rest').create({
  "X-TheySaidSo-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

 They Said So Quotes API offers a complete feature rich REST API access to its quotes platform.  This is the documentation for the world famous [quotes API](https://theysaidso.com/api).  If you are a subscriber and you are trying this from a console add 'X-TheySaidSo-Api-Secret' header and add your api key as the header value. You can test and play with the API right here on this web page. For using the private end points and subscribing to the API please visit https://theysaidso.com/api.

## Actions

### qod.get
Gets `Quote of the Day`. Optional `category` param determines the category of returned quote of the day



```js
quotes_rest.qod.get({}, context)
```

#### Input
* input `object`
  * category `string`: QOD Category
  * language `string`: Language of the QOD. The language must be supported in our QOD system.

#### Output
* output [QuoteResponse](#quoteresponse)

### qod.categories.get
Gets a list of `Quote of the Day` Categories.



```js
quotes_rest.qod.categories.get({}, context)
```

#### Input
* input `object`
  * language `string`: Language of the QOD category. The language must be supported in our QOD system.
  * detailed `boolean`: Return detailed information of the categories. Note the data format changes between the two values of this switch.

#### Output
*Output schema unknown*

### qod.languages.get
Gets a list of supported languages for `Quote of the Day`. 



```js
quotes_rest.qod.languages.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### qshow.delete
Delete a qshow.



```js
quotes_rest.qshow.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Qshow ID

#### Output
*Output schema unknown*

### qshow.get
Gets a details about a qshow.



```js
quotes_rest.qshow.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Qshow ID

#### Output
*Output schema unknown*

### qshow.patch
Update an existing qshow.


```js
quotes_rest.qshow.patch({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Qshow ID
  * title `string`: Qshow title
  * description `string`: Qshow description
  * tags `array`: Tags for the qshow

#### Output
*Output schema unknown*

### qshow.put
Create and add a new qshow to your private collection.


```js
quotes_rest.qshow.put({
  "title": ""
}, context)
```

#### Input
* input `object`
  * title **required** `string`: Qshow title
  * description `string`: Qshow description
  * tags `array`: Tags for the qshow

#### Output
*Output schema unknown*

### qshow.list.get
Get the list of Qshows in They Said So platform.


```js
quotes_rest.qshow.list.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Response is paged. This parameter controls where response starts the listing at
  * public `boolean`: Should include public qshows or not in the list

#### Output
*Output schema unknown*

### qshow.quotes.get
Get the quotes in a given Qshow.


```js
quotes_rest.qshow.quotes.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Qshow ID

#### Output
*Output schema unknown*

### qshow.quotes.add.post
Add a quote to a given Qshow.


```js
quotes_rest.qshow.quotes.add.post({
  "id": "",
  "quoteid": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Qshow ID
  * quoteid **required** `string`: Quote ID to add the qshow collection

#### Output
*Output schema unknown*

### qshow.quotes.remove.post
Remove a quote to a given Qshow.


```js
quotes_rest.qshow.quotes.remove.post({
  "id": "",
  "quoteid": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Qshow ID
  * quoteid **required** `string`: Quote ID to remove from the qshow collection

#### Output
*Output schema unknown*

### quote.delete
Delete a quote. The user needs to be the owner of the quote to be able to delete it.



```js
quotes_rest.quote.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Quote ID

#### Output
*Output schema unknown*

### quote.get
Gets a `Quote` with a given `id`.


```js
quotes_rest.quote.get({}, context)
```

#### Input
* input `object`
  * id `string`: Quote ID

#### Output
* output [QuoteResponse](#quoteresponse)

### quote.patch
Update a quote


```js
quotes_rest.quote.patch({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Quote ID
  * quote `string`: Quote
  * author `string`: Quote Author
  * language `string`: Language. If not supplied an auto detection mechanism will be used to detect a language.
  * tags `string`: Comma Separated tags

#### Output
*Output schema unknown*

### quote.post
Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.


```js
quotes_rest.quote.post({
  "quote": ""
}, context)
```

#### Input
* input `object`
  * quote **required** `string`: Quote
  * author `string`: Quote Author
  * tags `string`: Comma Separated tags
  * language `string`: Language. If not supplied an auto detection mechanism will be used to detect a language.

#### Output
*Output schema unknown*

### quote.put
Add a new quote to your private collection.


```js
quotes_rest.quote.put({
  "quote": ""
}, context)
```

#### Input
* input `object`
  * quote **required** `string`: Quote
  * author `string`: Quote Author
  * tags `string`: Comma Separated tags
  * language `string`: Language. If not supplied an auto detection mechanism will be used to detect a language.

#### Output
*Output schema unknown*

### quote.authors.popular.get
Gets a list of popular author names in the system. 



```js
quotes_rest.quote.authors.popular.get({}, context)
```

#### Input
* input `object`
  * language `string`: Language. A same author may have quotes in two or more different languages. So for example 'Mahatma Gandhi' may be returned for language "en"(English), and "மஹாத்மா காந்தி" may be returned when the language is "ta" (Tamil).
  * detailed `boolean`: Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels.
  * start `integer`: Response is paged. This parameter controls where response starts the listing at
  * limit `integer`: Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.

#### Output
*Output schema unknown*

### quote.authors.search.get
Gets a list of author names in the system. 



```js
quotes_rest.quote.authors.search.get({}, context)
```

#### Input
* input `object`
  * query `string`: Text string to search for in author names
  * language `string`: Language. A same author may have quotes in two or more different languages. So for example 'Mahatma Gandhi' may be returned for language "en"(English), and "மஹாத்மா காந்தி" may be returned when the language is "ta" (Tamil).
  * detailed `boolean`: Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels.
  * start `integer`: Response is paged. This parameter controls where response starts the listing at
  * limit `integer`: Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.

#### Output
*Output schema unknown*

### quote.categories.popular.get
Gets a list of popular `Quote` Categories.



```js
quotes_rest.quote.categories.popular.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Response is paged. This parameter controls where response starts the listing at
  * limit `integer`: Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.

#### Output
*Output schema unknown*

### quote.categories.search.get
Gets a list of `Quote` Categories matching the query string.



```js
quotes_rest.quote.categories.search.get({}, context)
```

#### Input
* input `object`
  * query `string`: Text string to search for in the categories
  * start `integer`: Response is paged. This parameter controls where response starts the listing at
  * limit `integer`: Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.

#### Output
*Output schema unknown*

### quote.dislike.delete
Remove the disLike for the given Quote as a user of the API Key.


```js
quotes_rest.quote.dislike.delete({
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * quote_id **required** `string`: Quote ID

#### Output
*Output schema unknown*

### quote.dislike.post
Dislike the given Quote as a user of the API Key. Same as `put` but a convenient alias for those clients that don't support `put` cleanly.


```js
quotes_rest.quote.dislike.post({
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * quote_id **required** `string`: Quote ID

#### Output
*Output schema unknown*

### quote.dislike.put
Dislike the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.


```js
quotes_rest.quote.dislike.put({
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * quote_id **required** `string`: Quote ID

#### Output
*Output schema unknown*

### quote.image.delete
Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.



```js
quotes_rest.quote.image.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Quote Image ID

#### Output
*Output schema unknown*

### quote.image.get
Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`



```js
quotes_rest.quote.image.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Quote Image id
  * binary `boolean`: Should the response be a direct file download of the image or a base64 encoded image file wrapped in json?

#### Output
*Output schema unknown*

### quote.image.put
Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!



```js
quotes_rest.quote.image.put({
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * quote_id **required** `string`: Quote id
  * bgimage_id `string`: Background Image id ( Will override bgcolor if supplied)
  * bg_color `string`: Background Color(if background image id is not supplied)
  * font_id `string`: Font id
  * text_color `string`: Text Color
  * text_size `string`: Text/font size
  * halign `string`: Horizontal text Alignment Value
  * valign `string`: Vertical text Alignment Value
  * width `integer`: Image Width(By default this takes the width of the background image)
  * height `integer`: Image Height(By default this takes the height of the background image)
  * branding `boolean`: Disable They Said So branding (Only available in certain subscription levels. Ignored in other levels)
  * include_transparent_layer `boolean`: Should include a transparent layer between the text and the background image? This helps when the background image is bright and obscures the text.

#### Output
*Output schema unknown*

### quote.image.background.delete
Delete a background image file. The user needs to be the owner of the background image to be able to delete it.



```js
quotes_rest.quote.image.background.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Font ID

#### Output
*Output schema unknown*

### quote.image.background.post
Add an image for use later as a quote background image.


```js
quotes_rest.quote.image.background.post({
  "image": ""
}, context)
```

#### Input
* input `object`
  * image **required** `string`: Image file to add to your collection (png/jpg/gif are supported)
  * tags `string`: Optional comma separated tags

#### Output
*Output schema unknown*

### quote.image.background.list.get
Lists background images in your private collection. 



```js
quotes_rest.quote.image.background.list.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Response is paged. This parameter determines where the response should start.

#### Output
*Output schema unknown*

### quote.image.background.search.get
Searches for a background image with a given tag. 



```js
quotes_rest.quote.image.background.search.get({}, context)
```

#### Input
* input `object`
  * query `string`: Tag string

#### Output
*Output schema unknown*

### quote.image.background.tags.add.post
Add a tag to a given Image.


```js
quotes_rest.quote.image.background.tags.add.post({
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Image ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*

### quote.image.background.tags.remove.post
Remove a tag from a given Image.


```js
quotes_rest.quote.image.background.tags.remove.post({
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Image ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*

### quote.image.font.delete
Delete a font file. The user needs to be the owner of the font to be able to delete it.



```js
quotes_rest.quote.image.font.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Font ID

#### Output
*Output schema unknown*

### quote.image.font.post
Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.


```js
quotes_rest.quote.image.font.post({
  "font": ""
}, context)
```

#### Input
* input `object`
  * font **required** `string`: Font file to add to your collection (ttf/otf are supported)
  * tags `string`: Optional comma separated tags

#### Output
*Output schema unknown*

### quote.image.font.list.get
Lists background images in your private collection. 



```js
quotes_rest.quote.image.font.list.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Response is paged. This parameter determines where the response should start.

#### Output
*Output schema unknown*

### quote.image.font.search.get
Searches for a font with a given tag. 



```js
quotes_rest.quote.image.font.search.get({}, context)
```

#### Input
* input `object`
  * query `string`: Tag string

#### Output
*Output schema unknown*

### quote.image.font.tags.add.post
Add a tag to a given font.


```js
quotes_rest.quote.image.font.tags.add.post({
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Font ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*

### quote.image.font.tags.remove.post
Remove a tag from a given Font.


```js
quotes_rest.quote.image.font.tags.remove.post({
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Font ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*

### quote.image.search.get
Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 



```js
quotes_rest.quote.image.search.get({}, context)
```

#### Input
* input `object`
  * category `string`: Quote Category
  * author `string`: Quote Author
  * private `boolean`: Should search private collection. Default searches public image collection.

#### Output
*Output schema unknown*

### quote.like.delete
Remove the Like for the given Quote as a user of the API Key.


```js
quotes_rest.quote.like.delete({
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * quote_id **required** `string`: Quote ID

#### Output
*Output schema unknown*

### quote.like.post
Like the given Quote as a user of the API Key. Same as `PUT` but a convenient alias for those clients that don't support `PUT` cleanly.


```js
quotes_rest.quote.like.post({
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * quote_id **required** `string`: Quote ID

#### Output
*Output schema unknown*

### quote.like.put
Like the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.


```js
quotes_rest.quote.like.put({
  "quote_id": ""
}, context)
```

#### Input
* input `object`
  * quote_id **required** `string`: Quote ID

#### Output
*Output schema unknown*

### quote.list.get
Get the list of quotes in your private collection.


```js
quotes_rest.quote.list.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Response is paged. This parameter controls where response starts the listing at
  * limit `integer`: Response is paged. This parameter controls how many is returned in the result.

#### Output
*Output schema unknown*

### quote.random.get
Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.


```js
quotes_rest.quote.random.get({}, context)
```

#### Input
* input `object`
  * language `string`: Language of the Quote. The language must be supported in our system.
  * limit `integer`: No of quotes to return. The max limit depends on the subscription level.

#### Output
* output [QuoteResponse](#quoteresponse)

### quote.search.get
Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 


```js
quotes_rest.quote.search.get({}, context)
```

#### Input
* input `object`
  * category `string`: Quote Category
  * author `string`: Quote Author
  * minlength `integer`: Quote minimum Length
  * maxlength `integer`: Quote maximum Length
  * query `string`: keyword to search for in the quote
  * private `boolean`: Should search private collection? Default searches public collection.
  * language `string`: Language of the Quote. The language must be supported in our system.
  * limit `integer`: No of quotes to return. The max limit depends on the subscription level.
  * sfw `boolean`: Should search only SFW (Safe For Work) quotes?

#### Output
* output [QuoteResponse](#quoteresponse)

### quote.tags.add.post
Add a tag to a given Quote.


```js
quotes_rest.quote.tags.add.post({
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Quote ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*

### quote.tags.remove.post
Remove a tag from a given quote.


```js
quotes_rest.quote.tags.remove.post({
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Quote ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*



## Definitions

### NewQuote
* NewQuote `object`
  * tags `array`: Array of tags/categories.
    * items `string`
  * author `string`: Author name of quote.
  * quote **required** `string`: The Quote.

### QOD
* QOD
  * tags `array`: Array of tags/categories.
    * items `string`
  * author `string`: Author name of quote.
  * quote **required** `string`: The Quote.
  * id **required** `string`: Unique identifier representing a specific quote in theysaidso.com.
  * image `string`: Image URL that can be used for background to display this quote.
  * length `integer`: Length of the quote string.
  * date **required** `string`: Date this quote of the day belongs to

### Quote
* Quote
  * tags `array`: Array of tags/categories.
    * items `string`
  * author `string`: Author name of quote.
  * quote **required** `string`: The Quote.
  * id **required** `string`: Unique identifier representing a specific quote in theysaidso.com.
  * image `string`: Image URL that can be used for background to display this quote.
  * length `integer`: Length of the quote string.

### QuoteResponse
* QuoteResponse `object`
  * contents `object`
    * quotes `array`: List of quotes
      * items [Quote](#quote)
  * success `string`: Metadata about this successful call


