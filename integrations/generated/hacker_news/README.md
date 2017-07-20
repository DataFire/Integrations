# @datafire/hacker-news.firebaseio.com

Client library for Hacker News

## Installation and Usage
```bash
npm install --save datafire @datafire/hacker-news.firebaseio.com
```

```js
let datafire = require('datafire');
let hacker-news.firebaseio.com = require('@datafire/hacker-news.firebaseio.com').actions;
let context = new datafire.Context();

hacker-news.firebaseio.com.getStories({}, context).then(data => {
  console.log(data);
})
```

## Description
Hacker News is a social news website focusing on computer science and entrepreneurship

## Actions
### getStories
Get an up-to-date list of stories for the given type


```js
hacker-news.firebaseio.com.getStories({}, context)
```


### getItem
Get details for a given item


```js
hacker-news.firebaseio.com.getItem({
  "itemID": 0
}, context)
```

#### Parameters
* itemID (integer) **required** - The ID of the item to retrieve

### getUser
Get details for a given user


```js
hacker-news.firebaseio.com.getUser({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - The unique username for this user

