# @datafire/heroku
Manage your Heroku apps, configs, collaborators & resources

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
## Operation: addons.get
List all available addons.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.addons.get
List addons installed on an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.addons.addon.post
Install an addon to an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "addon": {
      "type": "string",
      "description": "the addon name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app",
    "addon"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.addons.addon.put
Upgrade an addon to an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "addon": {
      "type": "string",
      "description": "the addon name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app",
    "addon"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.addons.addon.delete
Uninstall an addon from an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "addon": {
      "type": "string",
      "description": "the addon name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app",
    "addon"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.get
List apps.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.post
Create an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.name.get
Get info for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "name": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.name.delete
Destroy an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "name": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.collaborators.get
List collaborators for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.collaborators.email.delete
Remove a collaborator from an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "email": {
      "type": "string",
      "description": "The email of the user to remove as a collaborator."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app",
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.config_vars.get
List config vars for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.config_vars.put
Add config vars to an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.config_vars.key.delete
Remove a config var from an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "key": {
      "type": "string",
      "description": "The config var to remove."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app",
    "key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.domains.get
List domains for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.domains.domain_name.delete
Remove a domain from an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "domain_name": {
      "type": "string",
      "description": "The domain to remove."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app",
    "domain_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.keys.get
List SSH keys.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.keys.post
Associate an SSH key with this account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.keys.key.delete
Remove an SSH key from this account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "key": {
      "type": "string",
      "description": "The username@hostname description field of the key."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.logs.get
Get logs for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "logplex": {
      "type": "string",
      "description": "Use logplex to stream logs (always true)."
    },
    "num": {
      "type": "integer",
      "description": "The number of lines to display."
    },
    "ps": {
      "type": "string",
      "description": "Only display logs from a given process."
    },
    "source": {
      "type": "string",
      "description": "Only display logs from a given source."
    },
    "tail": {
      "type": "string",
      "description": "1: continually stream logs - <blank>: display only num logs"
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app",
    "logplex"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.ps.get
List processes for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.ps.post
Run a one-off process.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "command": {
      "type": "string",
      "description": "The command to run."
    },
    "attach": {
      "type": "string",
      "description": "true: use rendezvous to access stdin/stdout - <blank>: stream process output to the application log"
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "command",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.ps.restart.post
Restart processes of an app. Specify either ps or type to restart only the specified processes. Leave both blank to restart the entire app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "ps": {
      "type": "string",
      "description": "The name of a process to restart."
    },
    "type": {
      "type": "string",
      "description": "The type of process to restart."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.ps.stop.post
Stop processes of an app. Specify either ps or type to stop the specified processes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.ps.scale.post
Scale processes of an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "type": {
      "type": "string",
      "description": "The type of process to scale."
    },
    "qty": {
      "type": "string",
      "description": "The desired number of processes of this type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app",
    "type",
    "qty"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.releases.get
List releases for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.releases.post
Rollback to a release.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "rollback": {
      "type": "string",
      "description": "The release to which to roll back."
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "rollback",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.releases.release.get
Get info for a release.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    },
    "release": {
      "type": "string",
      "description": "The release name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app",
    "release"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.stack.get
List available stacks for an app.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apps.app.stack.put
Migrate an app to a new stack.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    },
    "app": {
      "type": "string",
      "description": "The app name."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "app"
  ]
}
```
### Output Schema
```json
{}
```
