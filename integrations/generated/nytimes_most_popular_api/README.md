# @datafire/nytimes_most_popular_api
Get lists of NYT Articles based on shares, emails, and views.

## Operation: mostemailed.section.time_period.json.get
Most Emailed by Section & Time Period

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "section": {
      "type": "string",
      "description": "Limits the results by one or more sections. You can use\n`all-sections` or one or more section names seperated by semicolons. See `viewed/sections.json` call to get a list of sections. \n",
      "enum": [
        "Arts",
        "Automobiles",
        "Blogs",
        "Books",
        "Business Day",
        "Education",
        "Fashion & Style",
        "Food",
        "Health",
        "Job Market",
        "Magazine",
        "membercenter",
        "Movies",
        "Multimedia",
        "N.Y.%20%2F%20Region",
        "NYT Now",
        "Obituaries",
        "Open",
        "Opinion",
        "Public Editor",
        "Real Estate",
        "Science",
        "Sports",
        "Style",
        "Sunday Review",
        "T Magazine",
        "Technology",
        "The Upshot",
        "Theater",
        "Times Insider",
        "Today’s Paper",
        "Travel",
        "U.S.",
        "World",
        "Your Money",
        "all-sections"
      ]
    },
    "time-period": {
      "type": "string",
      "description": "Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.",
      "enum": [
        "1",
        "7",
        "30"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "section",
    "time-period"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "copyright": {
      "type": "string"
    },
    "num_results": {
      "type": "integer"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/ArticleWithCountType"
      },
      "type": "array"
    },
    "status": {
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: mostshared.section.time_period.json.get
Most Shared by Section & Time Period

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "section": {
      "type": "string",
      "description": "Limits the results by one or more sections. You can use\n`all-sections` or one or more section names seperated by semicolons. See `viewed/sections.json` call to get a list of sections. \n",
      "enum": [
        "Arts",
        "Automobiles",
        "Blogs",
        "Books",
        "Business Day",
        "Education",
        "Fashion & Style",
        "Food",
        "Health",
        "Job Market",
        "Magazine",
        "membercenter",
        "Movies",
        "Multimedia",
        "N.Y.%20%2F%20Region",
        "NYT Now",
        "Obituaries",
        "Open",
        "Opinion",
        "Public Editor",
        "Real Estate",
        "Science",
        "Sports",
        "Style",
        "Sunday Review",
        "T Magazine",
        "Technology",
        "The Upshot",
        "Theater",
        "Times Insider",
        "Today’s Paper",
        "Travel",
        "U.S.",
        "World",
        "Your Money",
        "all-sections"
      ]
    },
    "time-period": {
      "type": "string",
      "description": "Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.",
      "enum": [
        "1",
        "7",
        "30"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "section",
    "time-period"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "copyright": {
      "type": "string"
    },
    "num_results": {
      "type": "integer"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/Article"
      },
      "type": "array"
    },
    "status": {
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: mostviewed.section.time_period.json.get
Most Viewed by Section & Time Period

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "section": {
      "type": "string",
      "description": "Limits the results by one or more sections. You can use\n`all-sections` or one or more section names seperated by semicolons. See `viewed/sections.json` call to get a list of sections. \n",
      "enum": [
        "Arts",
        "Automobiles",
        "Blogs",
        "Books",
        "Business Day",
        "Education",
        "Fashion & Style",
        "Food",
        "Health",
        "Job Market",
        "Magazine",
        "membercenter",
        "Movies",
        "Multimedia",
        "N.Y.%20%2F%20Region",
        "NYT Now",
        "Obituaries",
        "Open",
        "Opinion",
        "Public Editor",
        "Real Estate",
        "Science",
        "Sports",
        "Style",
        "Sunday Review",
        "T Magazine",
        "Technology",
        "The Upshot",
        "Theater",
        "Times Insider",
        "Today’s Paper",
        "Travel",
        "U.S.",
        "World",
        "Your Money",
        "all-sections"
      ]
    },
    "time-period": {
      "type": "string",
      "description": "Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.",
      "enum": [
        "1",
        "7",
        "30"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "section",
    "time-period"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "copyright": {
      "type": "string"
    },
    "num_results": {
      "type": "integer"
    },
    "results": {
      "items": {
        "$ref": "#/definitions/Article"
      },
      "type": "array"
    },
    "status": {
      "type": "string"
    }
  },
  "type": "object"
}
```
