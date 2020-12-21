# @datafire/hacker_news

Client library for Hacker News

## Installation and Usage
```bash
npm install --save @datafire/hacker_news
```
```js
let hacker_news = require('@datafire/hacker_news').create();

.then(data => {
  console.log(data);
});
```

## Description

Hacker News is a social news website focusing on computer science and entrepreneurship

## Actions

### getStories
Get an up-to-date list of stories for the given type


```js
hacker_news.getStories({}, context)
```

#### Input
* input `object`
  * storyType `string` (values: top, new, job, show, ask): The type of stories to retrieve

#### Output
* output `array`
  * items `integer`

### getItem
Get details for a given item


```js
hacker_news.getItem({
  "itemID": 0
}, context)
```

#### Input
* input `object`
  * itemID **required** `integer`: The ID of the item to retrieve

#### Output
* output [Item](#item)

### getUser
Get details for a given user


```js
hacker_news.getUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: The unique username for this user

#### Output
* output [User](#user)



## Definitions

### Item
* Item `object`
  * id `integer`
  * title `string`
  * deleted `boolean`
  * by `string`
  * time `string`
  * text `string`
  * dead `boolean`
  * parent `integer`
  * kids `array`
    * items `integer`
  * url `string`
  * score `integer`
  * parts `array`
    * items `integer`
  * descendants `array`
    * items `integer`

### User
* User `object`
  * id `string`
  * created `integer`
  * delay `integer`
  * karma `integer`
  * about `string`
  * submitted `array`
    * items `integer`


