# @datafire/healthcare_gov


## Operation: api.articles.json.get
Returns pages content.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/articlesList"
}
```
## Operation: api.blog.json.get
Returns pages content.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/blogList"
}
```
## Operation: api.glossary.json.get
Returns pages content.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/glossaryList"
}
```
## Operation: api.questions.json.get
Returns pages content.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questionsList"
}
```
## Operation: api.states.json.get
Returns pages content.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/statesList"
}
```
## Operation: api.topics.json.get
Returns pages content.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/topicsList"
}
```
## Operation: blog.pageName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/blogPage"
}
```
## Operation: es.blog.pageName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/blogPage"
}
```
## Operation: es.glossary.pageName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/glossaryPage"
}
```
## Operation: es.question.pageName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questionPage"
}
```
## Operation: es.pageName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/page"
}
```
## Operation: es.stateName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stateName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "stateName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/statePage"
}
```
## Operation: glossary.pageName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/glossaryPage"
}
```
## Operation: question.pageName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/questionPage"
}
```
## Operation: pageName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/page"
}
```
## Operation: stateName.json.get
Returns pages content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stateName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "stateName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/statePage"
}
```
