# @datafire/producthunt


## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: users.username.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: categories.category.posts.get


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "category": {
      "type": "string"
    },
    "days_ago": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
