# @datafire/jokes_one

Client library for Jokes One API

## Installation and Usage
```bash
npm install --save @datafire/jokes_one
```
```js
let jokes_one = require('@datafire/jokes_one').create({
  "X-JokesOne-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

 Jokes One API offers a complete feature rich REST API access to its jokes platform.  This is the documentation for the world famous [jokes API](https://jokes.one/api/joke/).  If you are a subscriber and you are trying this from a console add 'X-JokesOne-Api-Secret' header and add your api key as the header value. You can test and play with the API right here on this web page. For using the private end points and subscribing to the API please visit https://jokes.one/api/joke/.

## Actions

### jod.get
Gets `Joke of the Day`.
Optional `category` param determines
the category of returned joke of the day



```js
jokes_one.jod.get({}, context)
```

#### Input
* input `object`
  * category `string`: JOD Category

#### Output
* output [JokeOfTheDayResponse](#jokeofthedayresponse)

### jod.categories.get
Gets a list of `Joke of the Day` Categories.



```js
jokes_one.jod.categories.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### joke.delete
Delete a joke. The user needs to be the owner of the joke to be able to delete it.



```js
jokes_one.joke.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Joke ID

#### Output
*Output schema unknown*

### joke.get
Gets a `Joke` with a given `id`.


```js
jokes_one.joke.get({}, context)
```

#### Input
* input `object`
  * id `string`: Joke ID

#### Output
* output [JokeResponse](#jokeresponse)

### joke.patch
Update a joke


```js
jokes_one.joke.patch({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Joke ID
  * title `string`: title
  * text `string`: text
  * author `string`: Joke Author
  * tags `string`: Comma Separated tags

#### Output
*Output schema unknown*

### joke.put
Add a new joke to your private collection.


```js
jokes_one.joke.put({
  "title": "",
  "text": ""
}, context)
```

#### Input
* input `object`
  * title **required** `string`: Joke Title
  * text **required** `string`: Joke Text
  * author `string`: Joke Author
  * tags `string`: Comma Separated tags

#### Output
*Output schema unknown*

### joke.categories.search.get
Gets a list of `Joke` Categories, based on a query term.



```js
jokes_one.joke.categories.search.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: Search Query
  * start `integer`: Response is paged. This parameter controls where response starts the listing at

#### Output
*Output schema unknown*

### joke.list.get
Get the list of jokes in your private collection.


```js
jokes_one.joke.list.get({}, context)
```

#### Input
* input `object`
  * start `integer`: Response is paged. This parameter controls where response starts the listing at

#### Output
*Output schema unknown*

### joke.random.get
Gets a `Random Joke`. When you are in a hurry this is what you call to get a random famous joke.


```js
jokes_one.joke.random.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [JokeResponse](#jokeresponse)

### joke.search.get
Search for a `Joke` in Jokes One platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the joke. 


```js
jokes_one.joke.search.get({}, context)
```

#### Input
* input `object`
  * category `string`: Joke Category
  * query `string`: keyword to search for in the joke
  * minlength `integer`: Joke minimum Length
  * maxlength `integer`: Joke maximum Length
  * author `string`: Joke Author
  * private `boolean`: Should search private collection? Default searches public collection.

#### Output
* output [JokeResponse](#jokeresponse)

### joke.tags.add.post
Add a tag to a given Joke.


```js
jokes_one.joke.tags.add.post({
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Joke ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*

### joke.tags.remove.post
Remove a tag from a given joke.


```js
jokes_one.joke.tags.remove.post({
  "id": "",
  "tags": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Joke ID
  * tags **required** `string`: Comma Separated tags

#### Output
*Output schema unknown*



## Definitions

### Joke
* Joke
  * author `string`: Author name of joke.
  * joke **required** `string`: The Joke.
  * tags `array`: Array of tags/categories.
    * items `string`
  * title **required** `string`: Title of the Joke.
  * id `string`: Unique identifier representing a specific joke in jokes.one.
  * image `string`: Image URL that can be used for background to display this joke.
  * length `integer`: Length of the joke string.

### JokeOfTheDay
* JokeOfTheDay
  * author `string`: Author name of joke.
  * joke **required** `string`: The Joke.
  * tags `array`: Array of tags/categories.
    * items `string`
  * title **required** `string`: Title of the Joke.
  * id `string`: Unique identifier representing a specific joke in jokes.one.
  * image `string`: Image URL that can be used for background to display this joke.
  * length `integer`: Length of the joke string.
  * date **required** `string`: Date this joke of the day belongs to

### JokeOfTheDayResponse
* JokeOfTheDayResponse `object`
  * contents `object`
    * jokes `array`: List of jokes
      * items [JokeOfTheDay](#jokeoftheday)
  * success `string`: Metadata about this successful call

### JokeResponse
* JokeResponse `object`
  * contents `object`
    * jokes `array`: List of jokes
      * items [Joke](#joke)
  * success `string`: Metadata about this successful call

### NewJoke
* NewJoke `object`
  * author `string`: Author name of joke.
  * joke **required** `string`: The Joke.
  * tags `array`: Array of tags/categories.
    * items `string`
  * title **required** `string`: Title of the Joke.


