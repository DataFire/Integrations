# @datafire/runscope
Manage Runscope programmatically.

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
## Operation: account.get
Information about the authorized account.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Account"
    },
    "meta": {
      "$ref": "#/definitions/Meta"
    }
  },
  "type": "object"
}
```
## Operation: buckets.get
Returns a list of buckets.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/Account"
    },
    "meta": {
      "$ref": "#/definitions/Meta"
    }
  },
  "type": "object"
}
```
## Operation: buckets.post
Create a new bucket

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "NewBucket": {
      "$ref": "#/definitions/NewBucket"
    }
  },
  "additionalProperties": false,
  "required": [
    "NewBucket"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.bucketKey.delete
Delete a single bucket resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.get
Returns a single bucket resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.bucketKey.environments.get
Returns list of shared environments for a specified bucket.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.environments.post
Create new shared environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "NewEnvironment": {
      "$ref": "#/definitions/NewEnvironment"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "NewEnvironment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.environments.environmentId.put
Update the details of a test environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "environmentId": {
      "type": "string",
      "description": "Unique identifier for a test environment"
    },
    "ModifiedEnvironment": {
      "$ref": "#/definitions/NewEnvironment"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "environmentId",
    "ModifiedEnvironment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.errors.get
Retrieve a list of error messages in a bucket

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "count": {
      "type": "integer",
      "description": "Maxiumum number of messages to return. Default 50, max 1000."
    },
    "since": {
      "type": "integer",
      "description": "Only return messages after the given Unix timestamp"
    },
    "before": {
      "type": "integer",
      "description": "Only return messages before the given Unix timestamp"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.bucketKey.messages.delete
Clear a bucket (remove all messages).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.bucketKey.messages.get
Retrieve a list of messages in a bucket

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "count": {
      "type": "integer",
      "description": "Maxiumum number of messages to return. Default 50, max 1000."
    },
    "since": {
      "type": "integer",
      "description": "Only return messages after the given Unix timestamp"
    },
    "before": {
      "type": "integer",
      "description": "Only return messages before the given Unix timestamp"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.bucketKey.messages.post
Create a message

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "NewMessage": {
      "$ref": "#/definitions/NewMessage"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "NewMessage"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.bucketKey.messages.messageId.get
Retrieve the details for a single message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "messageId": {
      "type": "string",
      "description": "The unique identifier for this message"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "messageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Bucket"
}
```
## Operation: buckets.bucketKey.tests.get
Returns a list of tests.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Test"
      },
      "type": "array"
    },
    "meta": {
      "$ref": "#/definitions/Meta"
    }
  }
}
```
## Operation: buckets.bucketKey.tests.post
Create a test.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "NewTest": {
      "$ref": "#/definitions/NewTest"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "NewTest"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Test"
      },
      "type": "array"
    },
    "meta": {
      "$ref": "#/definitions/Meta"
    }
  }
}
```
## Operation: buckets.bucketKey.tests.testId.delete
Delete a single test.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "testId": {
      "type": "string",
      "description": "Unique identifier for a test"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "testId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.tests.testId.environments.get
Return details of the test's environments (only those that belong to the specified test)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "testId": {
      "type": "string",
      "description": "Unique identifier for a test"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "testId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.tests.testId.environments.post
Create new test environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "testId": {
      "type": "string",
      "description": "Unique identifier for a test"
    },
    "NewEnvironment": {
      "$ref": "#/definitions/NewEnvironment"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "testId",
    "NewEnvironment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.tests.testId.environments.environmentId.put
Update the details of a test environment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "testId": {
      "type": "string",
      "description": "Unique identifier for a test"
    },
    "environmentId": {
      "type": "string",
      "description": "Unique identifier for a test environment"
    },
    "ModifiedEnvironment": {
      "$ref": "#/definitions/NewEnvironment"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "testId",
    "environmentId",
    "ModifiedEnvironment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.tests.testId.steps.get
List test steps for a test.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "testId": {
      "type": "string",
      "description": "Unique identifier for a test"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "testId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.tests.testId.steps.post
Add new test step.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "testId": {
      "type": "string",
      "description": "Unique identifier for a test"
    },
    "NewStep": {
      "$ref": "#/definitions/NewStep"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "testId",
    "NewStep"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.tests.testId.steps.stepId.delete
Delete a step from a test.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "testId": {
      "type": "string",
      "description": "Unique identifier for a test"
    },
    "stepId": {
      "type": "string",
      "description": "Unique identifier for a test step"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "testId",
    "stepId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: buckets.bucketKey.tests.testId.steps.stepId.put
Update the details of a single test step.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "bucketKey": {
      "type": "string",
      "description": "Unique identifier for a bucket"
    },
    "testId": {
      "type": "string",
      "description": "Unique identifier for a test"
    },
    "stepId": {
      "type": "string",
      "description": "Unique identifier for a test step"
    },
    "NewStep": {
      "$ref": "#/definitions/NewStep"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucketKey",
    "testId",
    "stepId",
    "NewStep"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: teams.teamId.integrations.get
Returns a list of integrations configured for the team.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "string",
      "description": "Unique identifier for team"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Account"
  },
  "type": "array"
}
```
## Operation: teams.teamId.people.get
List people and integrations associated with a given team.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "string",
      "description": "Unique identifier for team"
    }
  },
  "additionalProperties": false,
  "required": [
    "teamId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Account"
  },
  "type": "array"
}
```
