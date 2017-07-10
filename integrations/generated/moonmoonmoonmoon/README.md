# @datafire/moonmoonmoonmoon
Turn nothing into something – make a drawing, make a mark.

## Operation: api.hashtags.get
Search for specified tag (no pound sign necessary). If <b>tag</b> is empty, the 50 most popular hashtags will be returned.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "tag": {
      "type": "string",
      "description": "Hashtag to search for"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.marks.get
The main method for querying the marks database. You may use the following options:
        <ol style='list-style-type: lower-roman;'>
        <li>No parameters to retrieve all marks in descending chronological order (use <b>before</b> for pagination)</li>
        <li><b>popular</b> (and optionally <b>last_popular_id</b>) to retrieve all popular marks</li>
        <li><b>featured</b> to retrieve all featured marks</li>
        <li><b>x & y</b> to retrieve mark at specific coordinate</li>
        <li><b>user</b> to retrieve all marks created by the specified user</li>
        <li><b>collection</b> to retrieve all marks collected by the specified user</li>
        </ol>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "before": {
      "type": "string",
      "description": "Before ID (pagination purposes)"
    },
    "popular": {
      "type": "boolean",
      "description": "Popular marks"
    },
    "last_popular_id": {
      "type": "string",
      "description": "Last popular ID (for pagination purposes)"
    },
    "featured": {
      "type": "boolean",
      "description": "Featured marks"
    },
    "x": {
      "type": "integer",
      "description": "X coordinate"
    },
    "y": {
      "type": "integer",
      "description": "Y coordinate"
    },
    "user": {
      "type": "string",
      "description": "Created by user ID"
    },
    "collection": {
      "type": "string",
      "description": "Collection ID"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
