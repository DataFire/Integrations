# @datafire/hacker_news

Client library for Hacker News

## Installation and Usage
```bash
npm install --save datafire @datafire/hacker_news
```

```js
let datafire = require('datafire');
let hacker_news = require('@datafire/hacker_news').actions;
let context = new datafire.Context();

hacker_news.getStories({}, context).then(data => {
  console.log(data);
})
```

## Description
Hacker News is a social news website focusing on computer science and entrepreneurship

## Actions
### getStories
Get an up-to-date list of stories for the given type


```js
hacker_news.getStories({}, context)
```

#### Parameters
* storyType (string) - The type of stories to retrieve

### getItem
Get details for a given item


```js
hacker_news.getItem({
  "itemID": 0
}, context)
```

#### Parameters
* itemID (integer) **required** - The ID of the item to retrieve

### getUser
Get details for a given user


```js
hacker_news.getUser({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - The unique username for this user

