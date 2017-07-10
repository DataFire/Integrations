# @datafire/circleci
The CircleCI API is a RESTful, fully-featured API that allows you to do almost anything in CircleCI.
You can access all information and trigger all actions.
The only thing we don’t provide access to is billing functions, which must be done from the CircleCI web UI.


## Operation: me.get
Provides information about the signed in user.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: project.username.project.get
Build summary for each of the last 30 builds for a single git repo.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of builds to return. Maximum 100, defaults to 30.\n",
      "maximum": 100
    },
    "offset": {
      "type": "integer",
      "description": "The API returns builds starting from this offset, defaults to 0.\n"
    },
    "filter": {
      "type": "string",
      "description": "Restricts which builds are returned.\nSet to \"completed\", \"successful\", \"failed\", \"running\", or defaults to no filter.\n",
      "enum": [
        "completed",
        "successful",
        "failed",
        "running"
      ]
    },
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Builds"
}
```
## Operation: project.username.project.post
Triggers a new build, returns a summary of the build.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "properties": {
        "build_parameters": {
          "$ref": "#/definitions/BuildParameters"
        },
        "parallel": {
          "$ref": "#/definitions/Parallel"
        },
        "revision": {
          "$ref": "#/definitions/Revision"
        },
        "tag": {
          "$ref": "#/definitions/Tag"
        }
      },
      "type": "object"
    },
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BuildSummary"
}
```
## Operation: project.username.project.build_cache.delete
Clears the cache for a project.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: project.username.project.checkout_key.get
Lists checkout keys.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Keys"
}
```
## Operation: project.username.project.checkout_key.post
Creates a new checkout key.
Only usable with a user API token.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "enum": [
        "deploy-key",
        "github-user-key"
      ],
      "type": "string"
    },
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Key"
}
```
## Operation: project.username.project.checkout_key.fingerprint.delete
Delete a checkout key.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "fingerprint": {
      "type": "string",
      "description": "XXXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "fingerprint"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "message": {
      "enum": [
        "OK"
      ],
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: project.username.project.checkout_key.fingerprint.get
Get a checkout key.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "fingerprint": {
      "type": "string",
      "description": "XXXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "fingerprint"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Key"
}
```
## Operation: project.username.project.envvar.get
Lists the environment variables for :project


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Envvars"
}
```
## Operation: project.username.project.envvar.post
Creates a new environment variable


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Envvar"
}
```
## Operation: project.username.project.envvar.name.delete
Deletes the environment variable named ':name'


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "name": {
      "type": "string",
      "description": "XXXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "name"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "message": {
      "enum": [
        "OK"
      ],
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: project.username.project.envvar.name.get
Gets the hidden value of environment variable :name


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "name": {
      "type": "string",
      "description": "XXXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Envvar"
}
```
## Operation: project.username.project.ssh_key.post
Create an ssh key used to access external systems that require SSH key-based authentication


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "enum": [
        "application/json"
      ]
    },
    "body": {
      "properties": {
        "hostname": {
          "type": "string"
        },
        "private_key": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "body",
    "username",
    "project"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "message": {
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: project.username.project.tree.branch.post
Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "properties": {
        "build_parameters": {
          "$ref": "#/definitions/BuildParameters"
        },
        "parallel": {
          "$ref": "#/definitions/Parallel"
        },
        "revision": {
          "$ref": "#/definitions/Revision"
        }
      },
      "type": "object"
    },
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "branch": {
      "type": "string",
      "description": "The branch name should be url-encoded.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "branch"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: project.username.project.build_num.get
Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "build_num": {
      "type": "integer",
      "description": "XXXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "build_num"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BuildDetail"
}
```
## Operation: project.username.project.build_num.artifacts.get
List the artifacts produced by a given build.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "build_num": {
      "type": "integer",
      "description": "XXXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "build_num"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Artifacts"
}
```
## Operation: project.username.project.build_num.cancel.post
Cancels the build, returns a summary of the build.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "build_num": {
      "type": "integer",
      "description": "XXXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "build_num"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: project.username.project.build_num.retry.post
Retries the build, returns a summary of the new build.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "build_num": {
      "type": "integer",
      "description": "XXXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "build_num"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: project.username.project.build_num.tests.get
Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "project": {
      "type": "string",
      "description": "XXXXXXXXX\n"
    },
    "build_num": {
      "type": "integer",
      "description": "XXXXXXXXXX\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "project",
    "build_num"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Tests"
}
```
## Operation: projects.get
List of all the projects you're following on CircleCI, with build information organized by branch.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Projects"
}
```
## Operation: recent_builds.get
Build summary for each of the last 30 recent builds, ordered by build_num.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "The number of builds to return. Maximum 100, defaults to 30.\n",
      "maximum": 100
    },
    "offset": {
      "type": "integer",
      "description": "The API returns builds starting from this offset, defaults to 0.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Builds"
}
```
## Operation: user.heroku_key.post
Adds your Heroku API key to CircleCI, takes apikey as form param name.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "message": {
      "type": "string"
    }
  },
  "type": "object"
}
```
