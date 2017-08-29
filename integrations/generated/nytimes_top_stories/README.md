# @datafire/nytimes_top_stories

Client library for Top Stories

## Installation and Usage
```bash
npm install --save datafire @datafire/nytimes_top_stories
```

```js
let datafire = require('datafire');
let nytimes_top_stories = require('@datafire/nytimes_top_stories').create({
  apikey: "",
});

nytimes_top_stories.section.format.get({}).then(data => {
  console.log(data);
})
```

## Description
The Top Stories API provides lists of articles and associated images by section.

## Actions
### section.format.get
The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.



```js
nytimes_top_stories.section.format.get({
  "section": "",
  "format": ""
}, context)
```

#### Parameters
* section (string) **required** - The section the story appears in.
* format (string) **required** - if this is JSONP or JSON
* callback (string) - The name of the function the API call results will be passed to. Required when using JSONP. This parameter has only one valid value per section. The format is {section_name}TopStoriesCallback.

