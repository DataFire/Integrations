# @datafire/rubygems
Interact with RubyGems.org to query and create gems, mange owners and more.

## Operation: gems.name.format.get
Returns some basic information about the given gem.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Gem name."
    },
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: search.format.get
Submit a search to Gemcutter for active gems, just like a search query on the site.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    },
    "query": {
      "type": "string",
      "description": "Query to search for."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "query"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gems.format.get
List all gems that you own.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gems.post
Submit a gem to RubyGems.org. Must post a built RubyGem in the request body.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: gems.yank.delete
Remove a gem from RubyGems.org’s index.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "gem_name": {
      "type": "string",
      "description": "Gem name."
    },
    "version": {
      "type": "string",
      "description": "Gem version."
    },
    "platform": {
      "type": "string",
      "description": "Gem platform."
    }
  },
  "additionalProperties": false,
  "required": [
    "gem_name",
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gems.unyank.put
Update a previously yanked gem back into RubyGems.org’s index.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "gem_name": {
      "type": "string",
      "description": "Gem name."
    },
    "version": {
      "type": "string",
      "description": "Gem version."
    },
    "platform": {
      "type": "string",
      "description": "Gem platform."
    }
  },
  "additionalProperties": false,
  "required": [
    "gem_name",
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gems.latest.format.get
Pulls the 50 newest first-version gems added to RubyGems.org.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gems.just_updated.format.get
Pulls the 50 most recently updated gems.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: versions.name.format.get
Returns an array of gem version details.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Gem name."
    },
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: downloads.format.get
Returns an object containing the total number of downloads on RubyGems.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: downloads.top.format.get
Returns an object containing the top 50 downloaded gem versions for today.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: downloads.all.format.get
Returns an object containing the top 50 downloaded gem versions of all time.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: downloads.name_version.format.get
Returns an object containing the total number of downloads for a paritcular gem as well as the total number of downloads for the specified version.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Gem name."
    },
    "version": {
      "type": "string",
      "description": "Gem version."
    },
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "version",
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: versions.name_version.downloads.format.get
Returns an object containing the number of downloads by day for a particular gem version for 90 days of data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Gem name."
    },
    "version": {
      "type": "string",
      "description": "Gem version."
    },
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "version",
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: versions.name_version.downloads.search.format.get
Returns an object containing the number of downloads by day for a particular gem version between a date range, specified by the parameters from and to. Dates values should be specified in the format YYYY-MM-DD.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Gem name."
    },
    "version": {
      "type": "string",
      "description": "Gem version."
    },
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "yaml"
      ]
    },
    "from": {
      "type": "string",
      "description": "Start date from where to search for. (YYYY-MM-DD)"
    },
    "to": {
      "type": "string",
      "description": "End date to where to search for. (YYYY-MM-DD)"
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "version",
    "format",
    "from",
    "to"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gems.name.owners.format.get
View all owners of a gem. These users can all push to this gem.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Gem name."
    },
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gems.name.owners.post
Add an owner to a RubyGem you own, giving that user permission to manage it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Gem name."
    },
    "email": {
      "type": "string",
      "description": "Gem owner email."
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: gems.name.owners.delete
Remove a user’s permission to manage a RubyGem you own.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Gem name."
    },
    "email": {
      "type": "string",
      "description": "Gem owner email."
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "email"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: web_hooks.format.get
List the webhooks registered under your account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: web_hooks.post
Create a webhook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "gem_name": {
      "type": "string",
      "description": "Gem name. Could specify * to apply the hook globally to all gems."
    },
    "url": {
      "type": "string",
      "description": "WebHook URL."
    }
  },
  "additionalProperties": false,
  "required": [
    "gem_name",
    "url"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: web_hooks.remove.delete
Remove a webhook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "gem_name": {
      "type": "string",
      "description": "Gem name. Could specify * to apply the hook globally to all gems."
    },
    "url": {
      "type": "string",
      "description": "WebHook URL."
    }
  },
  "additionalProperties": false,
  "required": [
    "gem_name",
    "url"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: web_hooks.fire.post
Test fire a webhook. This can be used to test out an endpoint at any time, for example when you’re developing your application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "gem_name": {
      "type": "string",
      "description": "Gem name. Could specify * to apply the hook globally to all gems."
    },
    "url": {
      "type": "string",
      "description": "WebHook URL."
    }
  },
  "additionalProperties": false,
  "required": [
    "gem_name",
    "url"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api_key.format.get
Retrieve your API key using HTTP basic auth.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml",
        "yaml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: dependencies.get
Returns a marshalled array of hashes for all versions of given gems. Each hash contains a gem version with its dependencies making this useful for resolving dependencies.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "gems": {
      "type": "string",
      "description": "Comma delimited Gem names."
    }
  },
  "additionalProperties": false,
  "required": [
    "gems"
  ]
}
```
### Output Schema
```json
{}
```
