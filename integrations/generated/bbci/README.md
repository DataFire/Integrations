# @datafire/bbci

Client library for BBC iPlayer Business Layer

## Installation and Usage
```bash
npm install --save datafire @datafire/bbci
```

```js
let datafire = require('datafire');
let bbci = require('@datafire/bbci').actions;

let account = {
  api_key: "",
  username: "",
  password: "",
}
let context = new datafire.Context({
  accounts: {
    bbci: account,
  }
})

bbci.atoz.letter.programmes.get({}, context).then(data => {
  console.log(data);
})
```

## Description
The definitive iPlayer API.

## Actions
### atoz.letter.programmes.get
Get the Programmes whose title begins with the given initial character.


```js
bbci.atoz.letter.programmes.get({
  "letter": "",
  "rights": "",
  "page": 0,
  "per_page": 0,
  "initial_child_count": 0,
  "sort": "",
  "sort_direction": "",
  "availability": ""
}, context)
```

#### Parameters
* letter (string) **required** - Letter to search by, a to z or the string '0-9'
* rights (string) **required** - The rights group to limit results to.
* page (integer) **required** - The page index.
* per_page (integer) **required** - The number of results to return.
* initial_child_count (integer) **required** - The depth to return child entities.
* sort (string) **required** - The sort order of the results.
* sort_direction (string) **required** - Whether to sort ascending or descending
* availability (string) **required** - Whether to return all, or available programmes

### Get_Categories_
Get the list of all the categories in TV & iPlayer.


```js
bbci.Get_Categories_({
  "lang": ""
}, context)
```

#### Parameters
* lang (string) **required** - The language for any applicable localised strings.

### categories.category.get
Get sub-categories


```js
bbci.categories.category.get({
  "category": "",
  "lang": ""
}, context)
```

#### Parameters
* category (string) **required** - The category identifier to return results from.
* lang (string) **required** - The language for any applicable localised strings.

### categories.category.episodes.get
Get the list of all the episodes for a given category in TV & iPlayer.


```js
bbci.categories.category.episodes.get({
  "category": "",
  "lang": "",
  "rights": "",
  "availability": "",
  "page": 0,
  "per_page": 0
}, context)
```

#### Parameters
* category (string) **required** - The category identifier to return results from.
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* page (integer) **required** - The page index.
* per_page (integer) **required** - The number of results to return.
* sort (string) - The sort order of the results.

### categories.category.highlights.get
Get the editorial highlights of a given category in TV & iPlayer.


```js
bbci.categories.category.highlights.get({
  "category": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* category (string) **required** - The category identifier to return results from.
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* mixin (array) - Request additional data in the output

### categories.category.programmes.get
Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.


```js
bbci.categories.category.programmes.get({
  "category": "",
  "lang": "",
  "rights": "",
  "availability": "",
  "page": 0,
  "per_page": 0
}, context)
```

#### Parameters
* category (string) **required** - The category identifier to return results from.
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* page (integer) **required** - The page index.
* per_page (integer) **required** - The number of results to return.

### Get_Channels_
Get the list of all the channels TV & iPlayer.


```js
bbci.Get_Channels_({
  "lang": ""
}, context)
```

#### Parameters
* region (string) - The region to get the channels for.
* lang (string) **required** - The language for any applicable localised strings.

### channels.channel.broadcasts.get
Get broadcasts by channel


```js
bbci.channels.channel.broadcasts.get({
  "channel": "",
  "lang": "",
  "rights": "",
  "availability": "",
  "per_page": 0
}, context)
```

#### Parameters
* channel (string) **required** - The channel identifier to limit results to.
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* mixin (array) - Request additional data in the output
* per_page (integer) **required** - The number of results to return.
* from (string) - Time to return results from, e.g. -3h

### channels.channel.highlights.get
Get the editorial highlights of a given channel in TV & iPlayer.


```js
bbci.channels.channel.highlights.get({
  "channel": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* channel (string) **required** - The channel identifier to limit results to.
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* live (boolean) - Whether to include live programmes
* mixin (array) - Request additional data in the output

### channels.channel.programmes.get
Get programmes by channel


```js
bbci.channels.channel.programmes.get({
  "channel": "",
  "lang": "",
  "rights": "",
  "availability": "",
  "page": 0,
  "per_page": 0
}, context)
```

#### Parameters
* channel (string) **required** - The channel identifier to limit results to.
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* page (integer) **required** - The page index.
* per_page (integer) **required** - The number of results to return.

### channels.channel.schedule.date.get
Get schedule by channel


```js
bbci.channels.channel.schedule.date.get({
  "channel": "",
  "date": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* channel (string) **required** - The channel identifier to limit results to.
* date (string) **required** - The date to return the schedule for, yyyy-mm-dd format
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes

### Get_Clips_
Get Clips


```js
bbci.Get_Clips_({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* pid (string) **required** - The programme identifier.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes

### episodes.pid.get
Get the episode for a given episode identifier.


```js
bbci.episodes.pid.get({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* pid (string) **required** - The programme identifier.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* mixin (array) - Request additional data in the output

### Get_Onward_Journey
Get Onward Journey (next programme)


```js
bbci.Get_Onward_Journey({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* pid (string) **required** - The programme identifier.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes

### getPostRolls
Get Follow-ups (post-rolls)


```js
bbci.getPostRolls({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* pid (string) **required** - The programme identifier.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes

### episodes.pid.prerolls.get
Get Trailers (pre-rolls)


```js
bbci.episodes.pid.prerolls.get({
  "pid": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* pid (string) **required** - The programme identifier.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes

### episodes.pid.recommendations.get
Get programme recommendations


```js
bbci.episodes.pid.recommendations.get({
  "pid": "",
  "rights": "",
  "availability": "",
  "page": 0,
  "per_page": 0
}, context)
```

#### Parameters
* pid (string) **required** - The programme identifier.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* page (integer) **required** - The page index.
* per_page (integer) **required** - The number of results to return.

### groups.popular.episodes.get
Get programmes popular


```js
bbci.groups.popular.episodes.get({
  "rights": "",
  "page": 0,
  "per_page": 0,
  "initial_child_count": 0,
  "sort": "",
  "sort_direction": "",
  "availability": ""
}, context)
```

#### Parameters
* rights (string) **required** - The rights group to limit results to.
* page (integer) **required** - The page index.
* per_page (integer) **required** - The number of results to return.
* initial_child_count (integer) **required** - The depth to return child entities.
* sort (string) **required** - The sort order of the results.
* sort_direction (string) **required** - Whether to sort ascending or descending
* availability (string) **required** - Whether to return all, or available programmes
* mixin (array) - Request additional data in the output

### groups.pid.episodes.get
Get episodes by group, brand or series


```js
bbci.groups.pid.episodes.get({
  "pid": "",
  "rights": "",
  "page": 0,
  "per_page": 0,
  "initial_child_count": 0,
  "sort": "",
  "sort_direction": "",
  "availability": ""
}, context)
```

#### Parameters
* pid (string) **required** - The programme identifier.
* rights (string) **required** - The rights group to limit results to.
* page (integer) **required** - The page index.
* per_page (integer) **required** - The number of results to return.
* initial_child_count (integer) **required** - The depth to return child entities.
* sort (string) **required** - The sort order of the results.
* sort_direction (string) **required** - Whether to sort ascending or descending
* availability (string) **required** - Whether to return all, or available programmes
* mixin (array) - Request additional data in the output

### home.highlights.get
Get programme highlights


```js
bbci.home.highlights.get({
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* mixin (array) - Request additional data in the output

### programmes.pid.get
Get the programme for a given programme identifier.


```js
bbci.programmes.pid.get({
  "pid": "",
  "rights": "",
  "availability": "",
  "initial_child_count": 0
}, context)
```

#### Parameters
* pid (string) **required** - The programme identifier.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* initial_child_count (integer) **required** - The depth to return child entities.

### programmes.pid.episodes.get
Get the child episodes belonging to a given programme identifier.


```js
bbci.programmes.pid.episodes.get({
  "pid": "",
  "rights": "",
  "availability": "",
  "initial_child_count": 0
}, context)
```

#### Parameters
* pid (string) **required** - The programme identifier.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes
* initial_child_count (integer) **required** - The depth to return child entities.

### Get_Regions_
Get the list of all the regions TV & iPlayer.


```js
bbci.Get_Regions_({
  "lang": ""
}, context)
```

#### Parameters
* lang (string) **required** - The language for any applicable localised strings.

### Get_Schema_
Get schema


```js
bbci.Get_Schema_(null, context)
```


### Search_
Search


```js
bbci.Search_({
  "q": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* q (string) **required** - The term to search for.
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes

### search_suggest.get
Search-suggest


```js
bbci.search_suggest.get({
  "q": "",
  "lang": "",
  "rights": "",
  "availability": ""
}, context)
```

#### Parameters
* q (string) **required** - The term to search for.
* lang (string) **required** - The language for any applicable localised strings.
* rights (string) **required** - The rights group to limit results to.
* availability (string) **required** - Whether to return all, or available programmes

### Get_Status_
Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.


```js
bbci.Get_Status_(null, context)
```


### user.purchases.get
Get user store purchases


```js
bbci.user.purchases.get({
  "identity_cookie": 0
}, context)
```

#### Parameters
* identity_cookie (number) **required** - The BBC-id cookie value

### user.recommendations.get
Get user store recommendations


```js
bbci.user.recommendations.get({
  "identity_cookie": 0
}, context)
```

#### Parameters
* identity_cookie (number) **required** - The BBC-id cookie value

### user.watching.get
Get user watching


```js
bbci.user.watching.get({
  "identity_cookie": 0
}, context)
```

#### Parameters
* identity_cookie (number) **required** - The BBC-id cookie value

