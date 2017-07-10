# @datafire/mozilla_kinto


## Operation: server_info


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "additionalProperties": {},
  "title": "SchemaNode",
  "type": "object"
}
```
## Operation: get_openapi_spec


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "additionalProperties": {},
  "title": "SchemaNode",
  "type": "object"
}
```
## Operation: __heartbeat__


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "additionalProperties": {},
  "title": "SchemaNode",
  "type": "object"
}
```
## Operation: __lbheartbeat__


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "title": "SchemaNode",
  "type": "object"
}
```
## Operation: __version__


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "additionalProperties": {},
  "title": "SchemaNode",
  "type": "object"
}
```
## Operation: batch


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "BatchPayloadSchema": {
      "properties": {
        "defaults": {
          "properties": {
            "body": {
              "additionalProperties": {},
              "title": "Body",
              "type": "object"
            },
            "headers": {
              "additionalProperties": {},
              "title": "Headers",
              "type": "object"
            },
            "method": {
              "enum": [
                "GET",
                "HEAD",
                "DELETE",
                "TRACE",
                "POST",
                "PUT",
                "PATCH"
              ],
              "title": "Method",
              "type": "string"
            },
            "path": {
              "pattern": "^/",
              "title": "Path",
              "type": "string"
            }
          },
          "title": "Defaults",
          "type": "object"
        },
        "requests": {
          "items": {
            "properties": {
              "body": {
                "additionalProperties": {},
                "title": "Body",
                "type": "object"
              },
              "headers": {
                "additionalProperties": {},
                "title": "Headers",
                "type": "object"
              },
              "method": {
                "enum": [
                  "GET",
                  "HEAD",
                  "DELETE",
                  "TRACE",
                  "POST",
                  "PUT",
                  "PATCH"
                ],
                "title": "Method",
                "type": "string"
              },
              "path": {
                "pattern": "^/",
                "title": "Path",
                "type": "string"
              }
            },
            "required": [
              "path"
            ],
            "type": "object"
          },
          "title": "Requests",
          "type": "array"
        }
      },
      "required": [
        "requests"
      ],
      "title": "BatchPayloadSchema",
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "BatchPayloadSchema"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "responses": {
      "items": {
        "properties": {
          "body": {
            "additionalProperties": {},
            "title": "Body",
            "type": "object"
          },
          "headers": {
            "additionalProperties": {},
            "title": "Headers",
            "type": "object"
          },
          "path": {
            "title": "Path",
            "type": "string"
          },
          "status": {
            "title": "Status",
            "type": "integer"
          }
        },
        "required": [
          "status",
          "path"
        ],
        "type": "object"
      },
      "title": "Responses",
      "type": "array"
    }
  },
  "required": [
    "responses"
  ],
  "title": "BatchResponseBodySchema",
  "type": "object"
}
```
## Operation: get_buckets


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "_limit": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_sort": {
      "type": "array"
    },
    "_token": {
      "type": "string"
    },
    "_since": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_to": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_before": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "id": {
      "type": "string"
    },
    "last_modified": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_fields": {
      "type": "array"
    },
    "If-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "If-None-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "additionalProperties": {},
        "default": {},
        "type": "object"
      },
      "type": "array"
    }
  },
  "title": "Schema",
  "type": "object"
}
```
## Operation: get_changess


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "_limit": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_sort": {
      "type": "array"
    },
    "_token": {
      "type": "string"
    },
    "_since": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_to": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_before": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "id": {
      "type": "string"
    },
    "last_modified": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_fields": {
      "type": "array"
    },
    "If-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "If-None-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "properties": {
          "bucket": {
            "title": "Bucket",
            "type": "string"
          },
          "collection": {
            "title": "Collection",
            "type": "string"
          },
          "host": {
            "title": "Host",
            "type": "string"
          }
        },
        "required": [
          "host",
          "bucket",
          "collection"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "title": "Schema",
  "type": "object"
}
```
## Operation: get_collections


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_limit": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_sort": {
      "type": "array"
    },
    "_token": {
      "type": "string"
    },
    "_since": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_to": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_before": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "id": {
      "type": "string"
    },
    "last_modified": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_fields": {
      "type": "array"
    },
    "If-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "If-None-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "bucket_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "additionalProperties": {},
        "default": {},
        "properties": {
          "cache_expires": {
            "title": "Cache Expires",
            "type": "integer"
          },
          "schema": {
            "additionalProperties": {},
            "title": "Schema",
            "type": "object"
          }
        },
        "type": "object"
      },
      "type": "array"
    }
  },
  "title": "Schema",
  "type": "object"
}
```
## Operation: get_records


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_limit": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_sort": {
      "type": "array"
    },
    "_token": {
      "type": "string"
    },
    "_since": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_to": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_before": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "id": {
      "type": "string"
    },
    "last_modified": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_fields": {
      "type": "array"
    },
    "If-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "If-None-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "bucket_id": {
      "type": "string"
    },
    "collection_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket_id",
    "collection_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "additionalProperties": {},
        "default": {},
        "type": "object"
      },
      "type": "array"
    }
  },
  "title": "Schema",
  "type": "object"
}
```
## Operation: get_record


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_fields": {
      "type": "array"
    },
    "If-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "If-None-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "bucket_id": {
      "type": "string"
    },
    "collection_id": {
      "type": "string"
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket_id",
    "collection_id",
    "id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "additionalProperties": {},
      "default": {},
      "type": "object"
    },
    "permissions": {
      "properties": {
        "read": {
          "items": {
            "type": "string"
          },
          "title": "Read",
          "type": "array"
        },
        "write": {
          "items": {
            "type": "string"
          },
          "title": "Write",
          "type": "array"
        }
      },
      "title": "Permissions",
      "type": "object"
    }
  },
  "title": "RecordSchema",
  "type": "object"
}
```
## Operation: get_collection


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_fields": {
      "type": "array"
    },
    "If-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "If-None-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "bucket_id": {
      "type": "string"
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket_id",
    "id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "additionalProperties": {},
      "default": {},
      "properties": {
        "cache_expires": {
          "title": "Cache Expires",
          "type": "integer"
        },
        "schema": {
          "additionalProperties": {},
          "title": "Schema",
          "type": "object"
        }
      },
      "type": "object"
    },
    "permissions": {
      "properties": {
        "read": {
          "items": {
            "type": "string"
          },
          "title": "Read",
          "type": "array"
        },
        "record:create": {
          "items": {
            "type": "string"
          },
          "title": "Record:Create",
          "type": "array"
        },
        "write": {
          "items": {
            "type": "string"
          },
          "title": "Write",
          "type": "array"
        }
      },
      "title": "Permissions",
      "type": "object"
    }
  },
  "title": "RecordSchema",
  "type": "object"
}
```
## Operation: get_groups


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_limit": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_sort": {
      "type": "array"
    },
    "_token": {
      "type": "string"
    },
    "_since": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_to": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_before": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "id": {
      "type": "string"
    },
    "last_modified": {
      "type": "integer",
      "maximum": 9223372036854776000,
      "minimum": 0
    },
    "_fields": {
      "type": "array"
    },
    "If-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "If-None-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "bucket_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "additionalProperties": {},
        "properties": {
          "members": {
            "items": {
              "type": "string"
            },
            "title": "Members",
            "type": "array"
          }
        },
        "required": [
          "members"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "title": "Schema",
  "type": "object"
}
```
## Operation: get_group


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_fields": {
      "type": "array"
    },
    "If-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "If-None-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "bucket_id": {
      "type": "string"
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "bucket_id",
    "id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "additionalProperties": {},
      "properties": {
        "members": {
          "items": {
            "type": "string"
          },
          "title": "Members",
          "type": "array"
        }
      },
      "required": [
        "members"
      ],
      "type": "object"
    },
    "permissions": {
      "properties": {
        "read": {
          "items": {
            "type": "string"
          },
          "title": "Read",
          "type": "array"
        },
        "write": {
          "items": {
            "type": "string"
          },
          "title": "Write",
          "type": "array"
        }
      },
      "title": "Permissions",
      "type": "object"
    }
  },
  "required": [
    "data"
  ],
  "title": "RecordSchema",
  "type": "object"
}
```
## Operation: get_bucket


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "_fields": {
      "type": "array"
    },
    "If-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "If-None-Match": {
      "type": "string",
      "pattern": "^\"([0-9]+?)\"$|\\*"
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "additionalProperties": {},
      "default": {},
      "type": "object"
    },
    "permissions": {
      "properties": {
        "collection:create": {
          "items": {
            "type": "string"
          },
          "title": "Collection:Create",
          "type": "array"
        },
        "group:create": {
          "items": {
            "type": "string"
          },
          "title": "Group:Create",
          "type": "array"
        },
        "read": {
          "items": {
            "type": "string"
          },
          "title": "Read",
          "type": "array"
        },
        "write": {
          "items": {
            "type": "string"
          },
          "title": "Write",
          "type": "array"
        }
      },
      "title": "Permissions",
      "type": "object"
    }
  },
  "title": "RecordSchema",
  "type": "object"
}
```
## Operation: contribute


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "additionalProperties": {},
  "title": "SchemaNode",
  "type": "object"
}
```
## Operation: get_blocklist


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_ver:\\d+": {
      "type": "string"
    },
    "metrics:.*": {
      "type": "string"
    },
    "prefix": {
      "type": "string"
    },
    "application_guid": {
      "type": "string"
    },
    "application_ver": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_ver:\\d+",
    "metrics:.*",
    "prefix",
    "application_guid",
    "application_ver"
  ]
}
```
### Output Schema
```json
{}
```
