# @datafire/graphhopper
Our Route Optimization API solves the so called vehicle routing problem fast. It calculates an optimal tour for a set of vehicles, services and constraints

## Operation: postVrp
This endpoint for solving vehicle routing problems, i.e. traveling salesman or vehicle routing problems, and returns the solution.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "your API key"
    },
    "body": {
      "$ref": "#/definitions/Request"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobId"
}
```
## Operation: getSolution
This endpoint returns the solution of a large problems. You can fetch it with the job_id, you have been sent.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "your API key"
    },
    "jobId": {
      "type": "string",
      "description": "Request solution with jobId"
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Response"
}
```
