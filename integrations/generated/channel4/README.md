# @datafire/channel4
This is the place to come for all the technical details you need to power your applications with Channel 4's deep programmes data.

## Operation: 4oD_Browse_by_Date_Feed
Information of daily broadcast content available on 4oD, according to 
  broadcast date

  http://api.channel4.com/pmlsd/4od/episode-list/date/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/date/2010/11/28.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "yyyy": {
      "type": "string",
      "description": "The date for which you wish to see programming information"
    },
    "mm": {
      "type": "string",
      "description": "The date for which you wish to see programming information"
    },
    "dd": {
      "type": "string",
      "description": "The date for which you wish to see programming information"
    }
  },
  "additionalProperties": false,
  "required": [
    "yyyy",
    "mm",
    "dd"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: 4oD_Most_Popular_Episodes_Feed
Information of the most popular content available on 4oD, according to user 
  data driven.

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: 4oD_Clips_Catch_Up_Feed
A feed containing metadata about short-form content relating to 4oD Episodes 
  recently added to 4oD based on linear transmission. The entries for the 
  Clips Landing Feed contain references to each short-form asset. It will 
  return up to 20 entries.

  http://api.channel4.com/pmlsd/4od/recently-added/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/4od/episode-list/videos.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: A_to_Z_Landing_Feed
Lists Channel 4 programmes alphabetically from A to Z, providing the same 
  functionality and information as is available in the A to Z section of the 
  Channel 4 Programmes page, http://www.channel4.com/programmes.

  http://api.channel4.com/pmlsd/atoz.atom

  http://api.channel4.com/pmlsd/atoz.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: A_to_Z_Letter_Feed
Lists Channel 4 programmes whose names begin with the associated letter.

  http://api.channel4.com/pmlsd/atoz/start_letter.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/atoz/a.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "start_letter": {
      "type": "string",
      "description": "The letter of the alphabet for which you seek associated Channel 4 programmes"
    }
  },
  "additionalProperties": false,
  "required": [
    "start_letter"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: atoz.start_letter.page_pageno.atom.get
Lists Channel 4 programmes whose names begin with the associated letter.

  http://api.channel4.com/pmlsd/atoz/start_letter/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/atoz/a.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "start_letter": {
      "type": "string",
      "description": "The letter of the alphabet for which you seek associated Channel 4 programmes"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "start_letter",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: 4oD_Title_All_Brands_Feed
Lists all Channel 4 programmes available on 4oD.  By default, the programmes 
  are listed by title in alphabetical order (case unsensitive).

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: brands.4od.page_pageno.atom.get
Lists all Channel 4 programmes available on 4oD.  By default, the programmes 
  are listed by title in alphabetical order (case unsensitive).

  http://api.channel4.com/pmlsd/brands/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: 4oD_Popular_All_Brands_Feed
Lists all Channel 4 programmes available on 4oD by popularity considering 
  the data gathered within the last 7 days.

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: brands.4od.popular.page_pageno.atom.get
Lists all Channel 4 programmes available on 4oD by popularity considering 
  the data gathered within the last 7 days.

  http://api.channel4.com/pmlsd/brands/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Popular_Brands_Feed
Lists all Channel 4 programmes by popularity considering the data gathered 
  within the last 7 days.

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: brands.popular.page_pageno.atom.get
Lists all Channel 4 programmes by popularity considering the data gathered 
  within the last 7 days.

  http://api.channel4.com/pmlsd/brands/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/brands/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Categories_Landing_Feed
Lists Channel 4 programmes by category (/ tag).

  http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: All_Programmes_by_TX_Date
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: 4oD_Programmes_by_TX_Date
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.4od.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Most_Popular_Brands_Feed
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.4od.popular.page_pageno.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: 4oD_Programmes_by_Title
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.4od.title.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/4od/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.4od.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.4od.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.4od.popular.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.4od.popular.page_pageno.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.4od.title.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.4od.title.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/4od/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.title.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.channel.channel.title.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/channel/[channel]/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "channel": {
      "type": "string",
      "description": "The name of the channel for which you seek associated Channel 4oD programmes",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "channel",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.4od.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.4od.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag).By default, the programmes are listed in order of Transmission (TX) 
  Date, with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals/4oD.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.4od.popular.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.4od.popular.page_pageno.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.4od.title.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.4od.title.page_pageno.atom.get
Lists all Channel 4oD programmes associated with the specified category 
  (tag), alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/4od/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/religion-and-belief/4oD/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.title.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.derived.ad.title.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/derived/ad/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag).  
  By default, the programmes are listed in order of Transmission (TX) Date, 
  with the most-recently-transmitted programmes listed first.

  http://api.channel4.com/pmlsd/categories/category/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/animals.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.popular.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.popular.page_pageno.atom.get
Lists all Channel 4oD most popular brands for the given category within the 
  last 7 days, in order of popularity.

  http://api.channel4.com/pmlsd/categories/category/popular/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/comedy/4od/popular.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: All_Programmes_by_Title
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: categories.category.title.page_pageno.atom.get
Lists all Channel 4 programmes associated with the specified category (tag), 
  alphanumerically in order of Title.

  http://api.channel4.com/pmlsd/categories/category/title/page-{pageno}.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/categories/history/title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The name of the category for which you seek associated Channel 4 programmes. (For a full list of categories, please see http://api.channel4.com/pmlsd/categories.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx)"
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: collections.collection_name.atom.get
Collections are editorially controlled groups of brands, series, episodes or 
  other collections used for promotion and discovery of content. A SIMPLE 
  collection can contain an assortment of Brands, Series, Episodes or Freeform 
  items. A GROUP collection contains other collections.

  http://api.channel4.com/pmlsd/collections/collection_name.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "collection_name": {
      "type": "string",
      "description": "Web safe title for the collection."
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Collections_Feed
Collections are editorially controlled groups of brands, series, episodes or 
  other collections used for promotion and discovery of content. A SIMPLE 
  collection can contain an assortment of Brands, Series, Episodes or Freeform 
  items. A GROUP collection contains other collections.

  http://api.channel4.com/pmlsd/collections/collection_name/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "collection_name": {
      "type": "string",
      "description": "Web safe title for the collection."
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: collections.collection_name.flattened.atom.get
The Flattened Collections Feed is only applicable for GROUP collections and 
  its purpose is mainly return 3 items (BRAND, SERIES or EPSIODE) of each of 
  the simple collections assigned to the GROUP.

  http://api.channel4.com/pmlsd/collections/collection_name/flattened.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "collection_name": {
      "type": "string",
      "description": "Web safe title for the collection."
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Flattened_Collection_Feed
The Flattened Collections Feed is only applicable for GROUP collections and 
  its purpose is mainly return 3 items (BRAND, SERIES or EPSIODE) of each of 
  the simple collections assigned to the GROUP.

  http://api.channel4.com/pmlsd/collections/collection_name/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/collections/4od-home-promo/flattened/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "collection_name": {
      "type": "string",
      "description": "Web safe title for the collection."
    }
  },
  "additionalProperties": false,
  "required": [
    "collection_name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Coming_Soon_feed
Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: coming_soon.category.atom.get
Coming Soon feed display a list of episodes coming soon to linear TV so that 
  I can promote new Channel 4 content.

  http://api.channel4.com/pmlsd/coming-soon/[category].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/coming-soon.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "category": {
      "type": "string",
      "description": "The category websafe_title to filter the coming soon programmes on TV."
    }
  },
  "additionalProperties": false,
  "required": [
    "category"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Programme_Feed
A feed containing all long-form content currently or previously available 
  for a specified Programme Id. The entries for the Programme feed contain 
  references to long-form assets for each platform.

  http://api.channel4.com/pmlsd/programme/[programme-id].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/programme/33881-001/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "programme-id": {
      "type": "string",
      "description": "The websafe programme identifier for the episode for which you seek on-demand content"
    }
  },
  "additionalProperties": false,
  "required": [
    "programme-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Search_Feed
Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search.atom?q=search-term&apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "q": {
      "type": "string",
      "description": "The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded."
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: search.page_pageno.atom.get
Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/page-{pageno}.atom?q=search-term&apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "q": {
      "type": "string",
      "description": "The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded."
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "q",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: search.q.atom.get
Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/search-term.atom?apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "q": {
      "type": "string",
      "description": "The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded."
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: search.q.page_pageno.atom.get
Lists all Channel 4 programmes where title (brand name) matching the search 
  term. Matches are made from the beginning of individual words in the title.

  http://api.channel4.com/pmlsd/search/search-term/page-{pageno}.atom?apikey=xxx

  http://api.channel4.com/pmlsd/search.atom?q=the+it+crowd&apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "q": {
      "type": "string",
      "description": "The programme name to look for, minimum length: 2 chars.Looking for programme names with special chars might be URL encoded."
    },
    "pageno": {
      "type": "integer",
      "description": "Page number of results to return"
    }
  },
  "additionalProperties": false,
  "required": [
    "q",
    "pageno"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: TV_Listings_Feed
EPG Information of daily broadcast content aired per channels, according to 
  broadcast date

  http://api.channel4.com/pmlsd/tv-listings/daily/[yyyy]/[mm]/[dd].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/tv-listings/daily/2010/11/28.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "yyyy": {
      "type": "string",
      "description": "The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day."
    },
    "mm": {
      "type": "string",
      "description": "The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day."
    },
    "dd": {
      "type": "string",
      "description": "The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day."
    }
  },
  "additionalProperties": false,
  "required": [
    "yyyy",
    "mm",
    "dd"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: tv_listings.daily.yyyy.mm.dd.channel.atom.get
EPG Information of daily broadcast content aired per channels, according to 
  broadcast date

  http://api.channel4.com/pmlsd/tv-listings/daily/[yyyy]/[mm]/[dd]/[channel].atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/tv-listings/daily/2010/11/28.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "yyyy": {
      "type": "string",
      "description": "The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day."
    },
    "mm": {
      "type": "string",
      "description": "The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day."
    },
    "dd": {
      "type": "string",
      "description": "The date for which you wish to see programming information. Note the schedule days start from 6am and run until 6am on the next calendar day."
    },
    "channel": {
      "type": "string",
      "description": "The EPG for a specific channel (c4, e4, m4, 4m, f4, 4s)",
      "enum": [
        "c4",
        "f4",
        "e4",
        "m4",
        "4m",
        "4s"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "yyyy",
    "mm",
    "dd",
    "channel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Hub_Feed
The basis for all brand information

  http://api.channel4.com/pmlsd/brand-web-safe-title.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "The title of the programme for which you seek associated data"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: 4oD_Feed
A feed containing all available on-demand long-form content for a specified 
  brand. The entries for the 4oD feed contain references to each long-form 
  asset for a brand, ordered by series number and episode number.

  http://api.channel4.com/pmlsd/[brand-web-safe-title]/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/4od.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "The title of the programme for which you seek on-demand content"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Brand_EPG_Atom_Feed
This feed contains metadata about upcoming electronic programme guide (EPG) 
  information for a brand. The entry details upcoming transmission slots for 
  this brand.

  http://api.channel4.com/pmlsd/brand-web-safe-title/epg.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-simpsons/epg.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "Title of the programme for which you seek EPG information"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Episode_Guide_Feed_Series_Landing
A feed containing metadata about all series for a specified brand. The 
  entries in this feed contain references to each of the series (where 
  metadata has been published), with some convenient links.

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/father-ted/episode-guide.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "The title of the programme for which you seek episode-guide information"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Episode_Guide_Feed_Series_Detail
A feed containing metadata about all the episodes for a specific series. The 
  entries in this feed contain references to each of the episodes (where 
  metadata has been published), with some convenient links.

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide/series-series_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/chelmsford-123/episode-guide/series-1.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "The title of the programme for which you seek series-related information"
    },
    "series_number": {
      "type": "string",
      "description": "Unique enumerated identifier of the series within its brand"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title",
    "series_number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Episode_Guide_Feed_Episode_Detail
A feed containing metadata about a specified episode. (This feed does not 
  contain any entries and only contains a feed element regarding this 
  episode.)

  http://api.channel4.com/pmlsd/brand-web-safe-title/episode-guide/series-series_number/episode-episode_number.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/episode-guide/series-1/episode-1.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "Title of the brand to which the episode belongs"
    },
    "series_number": {
      "type": "string",
      "description": "Unique enumerated identifier of the series within its brand to which the episode belongs"
    },
    "episode_number": {
      "type": "string",
      "description": "Unique enumerated identifier of the episode within its series"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title",
    "series_number",
    "episode_number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Clips_Landing_Feed_Brand_Series_and_Episode_Levels
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "Title of brand to which clips belong"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: brand_web_safe_title.videos.series_series_number.atom.get
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "Title of brand to which clips belong"
    },
    "series_number": {
      "type": "string",
      "description": "Unique identifier of series to which clips belong"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title",
    "series_number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: brand_web_safe_title.videos.series_series_number.episode_episode_number.atom.get
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "Title of brand to which clips belong"
    },
    "series_number": {
      "type": "string",
      "description": "Unique identifier of series to which clips belong"
    },
    "episode_number": {
      "type": "string",
      "description": "Unique identifier of episode to which clips belong"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title",
    "series_number",
    "episode_number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
## Operation: Clip_Detail_Atom_Feed
A feed containing metadata about a single short-form video (clip).

  http://api.channel4.com/pmlsd/brand-web-safe-title/videos/clip-asset-id.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

  http://api.channel4.com/pmlsd/the-it-crowd/videos/TCGS_CLIP_0000001015.atom?apikey=xxxxxxxxxxxxxxxxxxxxxxxx

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "description": "The platform to use for the query. Alias 'client'.",
      "enum": [
        "c4",
        "ps3",
        "yv",
        "ios",
        "fm",
        "p06",
        "ctv",
        "freesat",
        "android",
        "samsung"
      ]
    },
    "brand-web-safe-title": {
      "type": "string",
      "description": "Title of the brand for which you seek a clip"
    },
    "clip-asset-id": {
      "type": "string",
      "description": "Asset id for this clip"
    }
  },
  "additionalProperties": false,
  "required": [
    "brand-web-safe-title",
    "clip-asset-id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/atom"
}
```
