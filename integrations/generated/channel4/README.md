# @datafire/channel4

Client library for Channel 4

## Installation and Usage
```bash
npm install --save @datafire/channel4
```
```js
let channel4 = require('@datafire/channel4').create({
  apikey: ""
});

channel4.Coming_Soon_feed({}).then(data => {
  console.log(data);
})
```

## Description

This is the place to come for all the technical details you need to power your applications with Channel 4's deep programmes data.

## Actions

### 4oD_Browse_by_Date_Feed
Information of daily broadcast content available on 4oD, according to 
  broadcast date

  http://api.channel4.com/pmlsd/4od/episode-list/date/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/date/2010/11/28.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.4oD_Browse_by_Date_Feed({
  "yyyy": "",
  "mm": "",
  "dd": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * yyyy **required** `string`: The date for which you wish to see programming information
  * mm **required** `string`: The date for which you wish to see programming information
  * dd **required** `string`: The date for which you wish to see programming information

#### Output
* output [atom](#atom)

### 4oD_Most_Popular_Episodes_Feed
Information of the most popular content available on 4oD, according to user 
  data driven.

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.4oD_Most_Popular_Episodes_Feed({}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.

#### Output
* output [atom](#atom)

### 4oD_Clips_Catch_Up_Feed
A feed containing metadata about short-form content relating to 4oD Episodes 
  recently added to 4oD based on linear transmission. The entries for the 
  Clips Landing Feed contain references to each short-form asset. It will 
  return up to 20 entries.

  http://api.channel4.com/pmlsd/4od/recently-added/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.4oD_Clips_Catch_Up_Feed({}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.

#### Output
* output [atom](#atom)

### A_to_Z_Landing_Feed
Lists Channel 4 programmes alphabetically from A to Z, providing the same 
  functionality and information as is available in the A to Z section of the 
  Channel 4 Programmes page, http://www.channel4.com/programmes.

  http://api.channel4.com/pmlsd/atoz.atom

  http://api.channel4.com/pmlsd/atoz.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.A_to_Z_Landing_Feed({}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.

#### Output
* output [atom](#atom)

### A_to_Z_Letter_Feed
Lists Channel 4 programmes whose names begin with the associated letter.

  http://api.channel4.com/pmlsd/atoz/start_letter.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/atoz/a.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.A_to_Z_Letter_Feed({
  "start_letter": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * start_letter **required** `string`: The letter of the alphabet for which you seek associated Channel 4 programmes

#### Output
* output [atom](#atom)

### atoz.start_letter.page_pageno.atom.get
Lists Channel 4 programmes whose names begin with the associated letter.

  http://api.channel4.com/pmlsd/atoz/start_letter/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/atoz/a.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.atoz.start_letter.page_pageno.atom.get({
  "start_letter": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * start_letter **required** `string`: The letter of the alphabet for which you seek associated Channel 4 programmes
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### 4oD_Title_All_Brands_Feed
Lists all Channel 4 programmes available on 4oD.  By default, the programmes 
  are listed by title in alphabetical order (case unsensitive).

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.4oD_Title_All_Brands_Feed({}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.

#### Output
* output [atom](#atom)

### brands.4od.page_pageno.atom.get
Lists all Channel 4 programmes available on 4oD.  By default, the programmes 
  are listed by title in alphabetical order (case unsensitive).

  http://api.channel4.com/pmlsd/brands/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.brands.4od.page_pageno.atom.get({
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### 4oD_Popular_All_Brands_Feed
Lists all Channel 4 programmes available on 4oD by popularity considering 
  the data gathered within the last 7 days.

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.4oD_Popular_All_Brands_Feed({}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.

#### Output
* output [atom](#atom)

### brands.4od.popular.page_pageno.atom.get
Lists all Channel 4 programmes available on 4oD by popularity considering 
  the data gathered within the last 7 days.

  http://api.channel4.com/pmlsd/brands/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.brands.4od.popular.page_pageno.atom.get({
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### Popular_Brands_Feed
Lists all Channel 4 programmes by popularity considering the data gathered 
  within the last 7 days.

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Popular_Brands_Feed({}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.

#### Output
* output [atom](#atom)

### brands.popular.page_pageno.atom.get
Lists all Channel 4 programmes by popularity considering the data gathered 
  within the last 7 days.

  http://api.channel4.com/pmlsd/brands/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.brands.popular.page_pageno.atom.get({
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### Categories_Landing_Feed
Lists Channel 4 programmes by category (/ tag).

  http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Categories_Landing_Feed({}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.

#### Output
* output [atom](#atom)

### All_Programmes_by_TX_Date
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.All_Programmes_by_TX_Date({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### 4oD_Programmes_by_TX_Date
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.4oD_Programmes_by_TX_Date({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.4od.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.4od.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### Most_Popular_Brands_Feed
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Most_Popular_Brands_Feed({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.4od.popular.page_pageno.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.4od.popular.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### 4oD_Programmes_by_Title
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.4oD_Programmes_by_Title({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.4od.title.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/4od/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.4od.title.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.channel.channel.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.atom.get({
  "category": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes

#### Output
* output [atom](#atom)

### categories.category.channel.channel.4od.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.4od.atom.get({
  "category": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes

#### Output
* output [atom](#atom)

### categories.category.channel.channel.4od.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.4od.page_pageno.atom.get({
  "category": "",
  "channel": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.channel.channel.4od.popular.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.4od.popular.atom.get({
  "category": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes

#### Output
* output [atom](#atom)

### categories.category.channel.channel.4od.popular.page_pageno.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.4od.popular.page_pageno.atom.get({
  "category": "",
  "channel": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.channel.channel.4od.title.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.4od.title.atom.get({
  "category": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes

#### Output
* output [atom](#atom)

### categories.category.channel.channel.4od.title.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.4od.title.page_pageno.atom.get({
  "category": "",
  "channel": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.channel.channel.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.page_pageno.atom.get({
  "category": "",
  "channel": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.channel.channel.title.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.title.atom.get({
  "category": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes

#### Output
* output [atom](#atom)

### categories.category.channel.channel.title.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.channel.channel.title.page_pageno.atom.get({
  "category": "",
  "channel": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The name of the channel for which you seek associated Channel 4oD programmes
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.derived.ad.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.atom.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.derived.ad.4od.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.4od.atom.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.derived.ad.4od.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.4od.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.derived.ad.4od.popular.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.4od.popular.atom.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.derived.ad.4od.popular.page_pageno.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.4od.popular.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.derived.ad.4od.title.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.4od.title.atom.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.derived.ad.4od.title.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.4od.title.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.derived.ad.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.derived.ad.title.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.title.atom.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.derived.ad.title.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.derived.ad.title.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### categories.category.popular.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.popular.atom.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.popular.page_pageno.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.popular.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### All_Programmes_by_Title
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.All_Programmes_by_Title({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)

#### Output
* output [atom](#atom)

### categories.category.title.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.categories.category.title.page_pageno.atom.get({
  "category": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### collections.collection_name.atom.get
Collections are editorially controlled groups of brands, series, episodes or 
  other collections used for promotion and discovery of content. A SIMPLE 
  collection can contain an assortment of Brands, Series, Episodes or Freeform 
  items. A GROUP collection contains other collections.

  http://api.channel4.com/pmlsd/collections/collection_name.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.collections.collection_name.atom.get({
  "collection_name": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * collection_name **required** `string`: Web safe title for the collection.

#### Output
* output [atom](#atom)

### Collections_Feed
Collections are editorially controlled groups of brands, series, episodes or 
  other collections used for promotion and discovery of content. A SIMPLE 
  collection can contain an assortment of Brands, Series, Episodes or Freeform 
  items. A GROUP collection contains other collections.

  http://api.channel4.com/pmlsd/collections/collection_name/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Collections_Feed({
  "collection_name": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * collection_name **required** `string`: Web safe title for the collection.

#### Output
* output [atom](#atom)

### collections.collection_name.flattened.atom.get
The Flattened Collections Feed is only applicable for GROUP collections and 
  its purpose is mainly return 3 items (BRAND, SERIES or EPSIODE) of each of 
  the simple collections assigned to the GROUP.

  http://api.channel4.com/pmlsd/collections/collection_name/flattened.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.collections.collection_name.flattened.atom.get({
  "collection_name": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * collection_name **required** `string`: Web safe title for the collection.

#### Output
* output [atom](#atom)

### Flattened_Collection_Feed
The Flattened Collections Feed is only applicable for GROUP collections and 
  its purpose is mainly return 3 items (BRAND, SERIES or EPSIODE) of each of 
  the simple collections assigned to the GROUP.

  http://api.channel4.com/pmlsd/collections/collection_name/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Flattened_Collection_Feed({
  "collection_name": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * collection_name **required** `string`: Web safe title for the collection.

#### Output
* output [atom](#atom)

### Coming_Soon_feed
Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Coming_Soon_feed({}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.

#### Output
* output [atom](#atom)

### coming_soon.category.atom.get
Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon/[category].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.coming_soon.category.atom.get({
  "category": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * category **required** `string`: The category websafe_title to filter the coming soon programmes on TV.

#### Output
* output [atom](#atom)

### Programme_Feed
A feed containing all long-form content currently or previously available 
  for a specified Programme Id. The entries for the Programme feed contain 
  references to long-form assets for each platform.

  http://api.channel4.com/pmlsd/programme/[programme-id].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/programme/33881-001/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Programme_Feed({
  "programme-id": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * programme-id **required** `string`: The websafe programme identifier for the episode for which you seek on-demand content

#### Output
* output [atom](#atom)

### Search_Feed
Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search.atom?q=search-term&apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Search_Feed({
  "q": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * q **required** `string`: The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded.

#### Output
* output [atom](#atom)

### search.page_pageno.atom.get
Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/page-{pageno}.atom?q=search-term&apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.search.page_pageno.atom.get({
  "q": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * q **required** `string`: The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded.
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### search.q.atom.get
Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/search-term.atom?apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.search.q.atom.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * q **required** `string`: The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded.

#### Output
* output [atom](#atom)

### search.q.page_pageno.atom.get
Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/search-term/page-{pageno}.atom?apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.search.q.page_pageno.atom.get({
  "q": "",
  "pageno": 0
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * q **required** `string`: The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded.
  * pageno **required** `integer`: Page number of results to return

#### Output
* output [atom](#atom)

### TV_Listings_Feed
EPG Information of daily broadcast content aired per channels, according to 
  broadcast date

  http://api.channel4.com/pmlsd/tv-listings/daily/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/tv-listings/daily/2010/11/28.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.TV_Listings_Feed({
  "yyyy": "",
  "mm": "",
  "dd": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * yyyy **required** `string`: The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
  * mm **required** `string`: The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
  * dd **required** `string`: The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.

#### Output
* output [atom](#atom)

### tv_listings.daily.yyyy.mm.dd.channel.atom.get
EPG Information of daily broadcast content aired per channels, according to 
  broadcast date

  http://api.channel4.com/pmlsd/tv-listings/daily/[yyyy]/[mm]/[dd]/[channel].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/tv-listings/daily/2010/11/28.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.tv_listings.daily.yyyy.mm.dd.channel.atom.get({
  "yyyy": "",
  "mm": "",
  "dd": "",
  "channel": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * yyyy **required** `string`: The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
  * mm **required** `string`: The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
  * dd **required** `string`: The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day.
  * channel **required** `string` (values: c4, f4, e4, m4, 4m, 4s): The EPG for a specific channel (c4, e4, m4, 4m, f4, 4s)

#### Output
* output [atom](#atom)

### Hub_Feed
The basis for all brand information

  http://api.channel4.com/pmlsd/brand-web-safe-title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Hub_Feed({
  "brand-web-safe-title": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: The title of the programme for which you seek associated data

#### Output
* output [atom](#atom)

### 4oD_Feed
A feed containing all available on-demand long-form content for a specified 
  brand. The entries for the 4oD feed contain references to each long-form 
  asset for a brand, ordered by series number and episode number.

  http://api.channel4.com/pmlsd/[brand-web-safe-title]/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.4oD_Feed({
  "brand-web-safe-title": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: The title of the programme for which you seek on-demand content

#### Output
* output [atom](#atom)

### Brand_EPG_Atom_Feed
This feed contains metadata about upcoming electronic programme guide (EPG) 
  information for a brand. The entry details upcoming transmission slots for 
  this brand.

  http://api.channel4.com/pmlsd/brand-web-safe-title/epg.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-simpsons/epg.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Brand_EPG_Atom_Feed({
  "brand-web-safe-title": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: Title of the programme for which you seek EPG information

#### Output
* output [atom](#atom)

### Episode_Guide_Feed_Series_Landing
A feed containing metadata about all series for a specified brand. The 
  entries in this feed contain references to each of the series (where 
  metadata has been published), with some convenient links.

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/father-ted/episode-guide.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Episode_Guide_Feed_Series_Landing({
  "brand-web-safe-title": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: The title of the programme for which you seek episode-guide information

#### Output
* output [atom](#atom)

### Episode_Guide_Feed_Series_Detail
A feed containing metadata about all the episodes for a specific series. The 
  entries in this feed contain references to each of the episodes (where 
  metadata has been published), with some convenient links.

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide/series-series_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/chelmsford-123/episode-guide/series-1.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Episode_Guide_Feed_Series_Detail({
  "brand-web-safe-title": "",
  "series_number": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: The title of the programme for which you seek series-related information
  * series_number **required** `string`: Unique enumerated identifier of the series within its brand

#### Output
* output [atom](#atom)

### Episode_Guide_Feed_Episode_Detail
A feed containing metadata about a specified episode. (This feed does not 
  contain any entries and only contains a feed element regarding this 
  episode.)

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide/series-series_number/episode-episode_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/episode-guide/series-1/episode-1.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Episode_Guide_Feed_Episode_Detail({
  "brand-web-safe-title": "",
  "series_number": "",
  "episode_number": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: Title of the brand to which the episode belongs
  * series_number **required** `string`: Unique enumerated identifier of the series within its brand to which the episode belongs
  * episode_number **required** `string`: Unique enumerated identifier of the episode within its series

#### Output
* output [atom](#atom)

### Clips_Landing_Feed_Brand_Series_and_Episode_Levels
A feed containing metadata about all the short-form (clip) videos. The clips 
  feed can be accessed at different levels: the content is then filtered 
  depending on the level, but the structure is identical.When accessed: from 
  the top, the feed contains all the clips for the brand;  at series level, 
  the feed contains only clips from the series; and  at episode level, the 
  feed contains only clips for the episode (and is very unlikely to require 
  pagination). The entries for the Clips Landing Feed contain references to 
  each short-form asset.

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/all.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/peep-show/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Clips_Landing_Feed_Brand_Series_and_Episode_Levels({
  "brand-web-safe-title": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: Title of brand to which clips belong

#### Output
* output [atom](#atom)

### brand_web_safe_title.videos.series_series_number.atom.get
A feed containing metadata about all the short-form (clip) videos. The clips 
  feed can be accessed at different levels: the content is then filtered 
  depending on the level, but the structure is identical.When accessed: from 
  the top, the feed contains all the clips for the brand;  at series level, 
  the feed contains only clips from the series; and  at episode level, the 
  feed contains only clips for the episode (and is very unlikely to require 
  pagination). The entries for the Clips Landing Feed contain references to 
  each short-form asset.

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/series-series_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/peep-show/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.brand_web_safe_title.videos.series_series_number.atom.get({
  "brand-web-safe-title": "",
  "series_number": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: Title of brand to which clips belong
  * series_number **required** `string`: Unique identifier of series to which clips belong

#### Output
* output [atom](#atom)

### brand_web_safe_title.videos.series_series_number.episode_episode_number.atom.get
A feed containing metadata about all the short-form (clip) videos. The clips 
  feed can be accessed at different levels: the content is then filtered 
  depending on the level, but the structure is identical.When accessed: from 
  the top, the feed contains all the clips for the brand;  at series level, 
  the feed contains only clips from the series; and  at episode level, the 
  feed contains only clips for the episode (and is very unlikely to require 
  pagination). The entries for the Clips Landing Feed contain references to 
  each short-form asset.

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/series-series_number/episode-episode_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/peep-show/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.brand_web_safe_title.videos.series_series_number.episode_episode_number.atom.get({
  "brand-web-safe-title": "",
  "series_number": "",
  "episode_number": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: Title of brand to which clips belong
  * series_number **required** `string`: Unique identifier of series to which clips belong
  * episode_number **required** `string`: Unique identifier of episode to which clips belong

#### Output
* output [atom](#atom)

### Clip_Detail_Atom_Feed
A feed containing metadata about a single short-form video (clip).

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/clip-asset-id.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/videos/TCGS_CLIP_0000001015.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx


```js
channel4.Clip_Detail_Atom_Feed({
  "brand-web-safe-title": "",
  "clip-asset-id": ""
}, context)
```

#### Input
* input `object`
  * platform `string` (values: c4, ps3, yv, ios, fm, p06, ctv, freesat, android, samsung): The platform to use for the query. Alias 'client'.
  * brand-web-safe-title **required** `string`: Title of the brand for which you seek a clip
  * clip-asset-id **required** `string`: Asset id for this clip

#### Output
* output [atom](#atom)



## Definitions

### ContentTypeType
* ContentTypeType `object`

### KnownRelCodeType
* KnownRelCodeType `string` (values: alternate, related, self, enclosure, via): alternate: The value "alternate" signifies that the IRI in the value of the href attribute identifies an alternate version of the resource described by the containing element.related: The value "related" signifies that the IRI in the value of the href attribute identifies a resource related to the resource described by the containing element. For example, the feed for a site that discusses the performance of the search engine at "http://search.example.com" might contain, as a child of atom:feed. An identical link might appear as a child of any atom:entry whose content contains a discussion of that same search engine.self: The value "self" signifies that the IRI in the value of the href attribute identifies a resource equivalent to the containing element.enclosure: The value "enclosure" signifies that the IRI in the value of the href attribute identifies a related resource that is potentially large in size and might require special handling. For atom:link elements with rel="enclosure", the length attribute SHOULD be provided.via: The value "via" signifies that the IRI in the value of the href attribute identifies a resource that is the source of the information provided in the containing element.

### MimeType
* MimeType `string`: XML encoded identifier of a standard MIME type, possibly a parameterized MIME type. Copied from ows 2.0.1

### RelCodeType
* RelCodeType `object`

### atom
* converted/atomSchema.xsd `object`: This version of the Atom schema is based on version 1.0 of the format specifications, found here http://www.atomenabled.org/developers/syndication/atom-format-spec.php. The original namespace was http://www.w3.org/2005/Atom but we changed it to http://www.opengis.net/atom/2005 to avoid conflicting definitions of the same namespace in the future. NOT DONE YET. There is no XSD official schema for atom but this one seems to be the most known: http://www.kbcafe.com/rss/atom.xsd.xml (The Atom Publishing Protocol was issued as a Proposed Standard in IETF RFC 5023 in October 2007 http://tools.ietf.org/html/rfc5023)
  * feed **required** [feedType](#feedtype)

### categoryType
* categoryType `object`: The Atom category construct is defined in section 4.2.2 of the format spec.

### commonAttributes
* commonAttributes `object`
  * xml:base `string`
  * xml:lang `string`

### contentType
* contentType `object`: The Atom content construct is defined in section 4.1.3 of the format spec.

### dateTimeType
* dateTimeType `object`

### emailType
* emailType `string`: Schema definition for an email address.

### entry
* entry [entryType](#entrytype)

### entryType
* entryType `object`: The Atom entry construct is defined in section 4.1.2 of the format spec.

### feedType
* feedType `object`: The Atom feed construct is defined in section 4.1.1 of the format spec.

### generatorType
* generatorType `object`: The Atom generator element is defined in section 4.2.4 of the format spec.

### iconType
* iconType `object`: The Atom icon construct is defined in section 4.2.5 of the format spec.

### idType
* idType `object`: The Atom id construct is defined in section 4.2.6 of the format spec.

### linkType
* linkType `object`: The Atom link construct is defined in section 3.4 of the format spec.

### logoType
* logoType `object`: The Atom logo construct is defined in section 4.2.8 of the format spec.

### personType
* personType `object`: The Atom person construct is defined in section 3.2 of the format spec.

### sourceType
* sourceType `object`: The Atom source construct is defined in section 4.2.11 of the format spec.

### textType
* textType `object`: The Atom text construct is defined in section 3.1 of the format spec.

### textTypeType
* textTypeType `string` (values: text, html, xhtml)

### uriType
* uriType `object`


