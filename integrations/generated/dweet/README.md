# @datafire/dweet
Dweet.io allows users to share data from mobile, tablets, and pcs, and them to other devices and accounts across social media platforms. Dweet.io provides an API to access the different functionality of the Dweet.io service. Users can make REST calls to read and create dweets, lock and unlock things, and perform other calls. The API returns JSON and JSONP.

## Operation: createAlertGET
Create an alert for a thing. A thing must be locked before an alert can be set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "who": {
      "type": "string",
      "description": "A comma separated list of Email addresses to send the alert to."
    },
    "thing": {
      "type": "string",
      "description": "A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions."
    },
    "condition": {
      "type": "string",
      "description": "A condition that returns a string or a true value if a condition is met."
    },
    "key": {
      "type": "string",
      "description": "A valid key for a locked thing. If the thing is not locked, this can be ignored."
    }
  },
  "additionalProperties": false,
  "required": [
    "who",
    "thing",
    "condition",
    "key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: dweet.for.thing.post
Create a dweet for a thing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions."
    },
    "key": {
      "type": "string",
      "description": "A valid key for a locked thing. If the thing is not locked, this can be ignored."
    },
    "content": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "thing",
    "content"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: dweet.quietly.for.thing.post
Create a dweet for a thing.  This method differs from /dweet/for/{thing} only in that successful dweets result in an HTTP 204 response rather than the typical verbose response.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing. It is recommended that you use a GUID as to avoid name collisions."
    },
    "key": {
      "type": "string",
      "description": "A valid key for a locked thing. If the thing is not locked, this can be ignored."
    },
    "content": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "thing",
    "content"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAlert
Get the alert attached to a thing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing."
    },
    "key": {
      "type": "string",
      "description": "A valid key for a locked thing. If the thing is not locked, this can be ignored."
    }
  },
  "additionalProperties": false,
  "required": [
    "thing",
    "key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: get.dweets.for.thing.get
Read the last 5 cached dweets for a thing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing."
    },
    "key": {
      "type": "string",
      "description": "A valid key for a locked thing. If the thing is not locked, this can be ignored."
    }
  },
  "additionalProperties": false,
  "required": [
    "thing"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getLatestDweet
Read the latest dweet for a thing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing."
    },
    "key": {
      "type": "string",
      "description": "A valid key for a locked thing. If the thing is not locked, this can be ignored."
    }
  },
  "additionalProperties": false,
  "required": [
    "thing"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getStoredAlerts
Read all the saved alerts for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing."
    },
    "key": {
      "type": "string",
      "description": "A valid key for a locked thing. If the thing is not locked, this can be ignored."
    },
    "date": {
      "type": "string",
      "description": "The calendar date (YYYY-MM-DD) from which you'd like to start your query.  The response will be a maximum of one day."
    },
    "hour": {
      "type": "string",
      "description": "The hour of the day represented in the date parameter in 24-hour (00-23) format.  If this parameter is included, a maximum of 1 hour will be returned starting at this hour."
    },
    "responseType": {
      "type": "string",
      "description": "Current valid parameters for this are 'csv' and 'json'.  If this parameter is left blank, all responses default to hapi-json dweet-speak."
    }
  },
  "additionalProperties": false,
  "required": [
    "thing",
    "key",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: get.stored.dweets.for.thing.get
Read all the saved dweets for a thing from long term storage.  You can query a maximum of 1 day per request and a granularly of 1 hour.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing."
    },
    "key": {
      "type": "string",
      "description": "A valid key for a locked thing. If the thing is not locked, this can be ignored."
    },
    "date": {
      "type": "string",
      "description": "The calendar date (YYYY-MM-DD) from which you'd like to start your query.  The response will be a maximum of one day."
    },
    "hour": {
      "type": "string",
      "description": "The hour of the day represented in the date parameter in 24-hour (00-23) format.  If this parameter is included, a maximum of 1 hour will be returned starting at this hour."
    },
    "responseType": {
      "type": "string",
      "description": "Current valid parameters for this are 'csv' and 'json'.  If this parameter is left blank, all responses default to hapi-json dweet-speak."
    }
  },
  "additionalProperties": false,
  "required": [
    "thing",
    "key",
    "date"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listenForDweets
Sorry, this function uses HTTP chunked responses and cannot be tested here. Try something like: <pre>curl --raw https://dweet.io/listen/for/dweets/from/{thing}</pre>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "thing"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: lockThing
Reserve and lock a thing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing."
    },
    "lock": {
      "type": "string",
      "description": "A valid dweet.io lock."
    },
    "key": {
      "type": "string",
      "description": "A valid dweet.io master key."
    }
  },
  "additionalProperties": false,
  "required": [
    "thing",
    "lock",
    "key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: removeAlert
Remove an alert for a thing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing."
    },
    "key": {
      "type": "string",
      "description": "A valid key for a locked thing. If the thing is not locked, this can be ignored."
    }
  },
  "additionalProperties": false,
  "required": [
    "thing",
    "key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: removeLock
Remove a lock from thing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "lock": {
      "type": "string",
      "description": "A valid dweet.io lock."
    },
    "key": {
      "type": "string",
      "description": "A valid dweet.io master key."
    }
  },
  "additionalProperties": false,
  "required": [
    "lock",
    "key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: unlockThing
Unlock a thing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "thing": {
      "type": "string",
      "description": "A unique name of a thing."
    },
    "key": {
      "type": "string",
      "description": "A valid dweet.io master key."
    }
  },
  "additionalProperties": false,
  "required": [
    "thing",
    "key"
  ]
}
```
### Output Schema
```json
{}
```
