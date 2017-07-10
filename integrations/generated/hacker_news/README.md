# @datafire/hacker-news.firebaseio.com
Hacker News is a social news website focusing on computer science and entrepreneurship

## Operation: getStories
Get an up-to-date list of stories for the given type

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "storyType": {
      "type": "string",
      "description": "The type of stories to retrieve\n",
      "enum": [
        "top",
        "new",
        "job",
        "show",
        "ask"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "array",
  "items": {
    "type": "integer"
  }
}
```
## Operation: getItem
Get details for a given item

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "itemID": {
      "type": "integer",
      "description": "The ID of the item to retrieve"
    }
  },
  "additionalProperties": false,
  "required": [
    "itemID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Item"
}
```
## Operation: getUser
Get details for a given user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "The unique username for this user"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
