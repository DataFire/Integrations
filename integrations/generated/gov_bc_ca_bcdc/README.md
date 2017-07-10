# @datafire/gov_bc_ca_bcdc
This API provides live access to the BC Data Catalogue. Further documentation on the API is available from http://docs.ckan.org/en/latest/ Confirm the version of the API available from the catalogue by requesting https://catalogue.data.gov.bc.ca/api/3/action/status_show 

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
## Operation: action.organization_activity_list.get
Return an organization's activity stream

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id or name of the organization"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.organization_activity_list_html.get
Return an organization's activity stream as HTML

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id or name of the organization"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.organization_autocomplete.get
Return a list of organization names that contain a string

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "q": {
      "type": "string",
      "description": "The string to search for"
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of organizations to return (optional)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.organization_follower_count.get
Return the number of followers of an organization

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id or name of the organization"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.organization_follower_list.get
Return a list of users that are following a given organization

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id or name of the organization"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.organization_list.get
Returns the names of all indexed organizations

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "description": "The offset (index) of the first organizations to return"
    },
    "limit": {
      "type": "integer",
      "description": "The number of organizations to be returned per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.organization_list_for_user.get
Return the organizations that the user has a given permission for

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "permission": {
      "type": "string",
      "description": "The permission the user has against the returned organization"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.organization_revision_list.get
Return an organization's revisions

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The name or id of the organization"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.organization_show.get
Return the details of an organization

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id or name of the organization"
    },
    "include_datasets": {
      "type": "boolean",
      "description": "include a list of the organization's datasets"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.package_activity_list.get
Returns a package's activity stream

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id or name of the package"
    },
    "offset": {
      "type": "integer",
      "description": "Where to start getting activity items from"
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of activities to return"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.package_activity_list_html.get
The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id or name of the package"
    },
    "offset": {
      "type": "integer",
      "description": "Where to start getting activity items from"
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of activities to return"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.package_autocomplete.get
Return a list of datasets that match a string

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "q": {
      "type": "string",
      "description": "The string to query"
    },
    "limit": {
      "type": "integer",
      "description": "The maximum number of resource formats to return"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.package_list.get
Returns the names of all indexed packages (datasets)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "description": "The offset (index) of the first package to return"
    },
    "limit": {
      "type": "integer",
      "description": "The number of packages to be returned per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.package_relationships_list.get
Return a dataset's relationships

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id or name of the first package"
    },
    "id2": {
      "type": "string",
      "description": "The id or name of the second package"
    },
    "rel": {
      "type": "string",
      "description": "relationship as string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.package_revision_list.get
Return a dataset's revision as a list of dictionaries

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id or name of the dataset"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.package_search.get
Searches for packages (datasets) matching the specified query terms

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "q": {
      "type": "string",
      "description": "A query string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.package_show.get
Returns metadata about the package (dataset) corresponding to the specified unique name

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The package name"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.related_list.get
Returns a dataset's related items.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "id or name of the dataset (optional)"
    },
    "dataset": {
      "type": "string",
      "description": "Dataset dictionary of the dataset (optional)"
    },
    "type_filter": {
      "type": "string",
      "description": "The type of related item to show (optional)"
    },
    "sort": {
      "type": "string",
      "description": "The order to sort the related items in"
    },
    "featured": {
      "type": "string",
      "description": "whether or not to restrict the results to only featured items"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.resource_search.get
Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "The search criteria string or list of strings of the form ``{field}:{term1}``"
    },
    "fields": {
      "type": "string",
      "description": "Depreciated"
    },
    "order_by": {
      "type": "string",
      "description": "A field on the resource model that orders the results"
    },
    "offset": {
      "type": "integer",
      "description": "Apply an offset to the query"
    },
    "limit": {
      "type": "integer",
      "description": "Apply a limit to the query"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.resource_show.get
Return the metadata of a resource

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The id of the resource"
    },
    "include_tracking": {
      "type": "boolean",
      "description": "Add tracking information to dataset"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: action.status_show.get
Returns the site status

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: action.tag_list.get
Returns the names of all indexed tags

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "description": "The offset (index) of the first tag to return"
    },
    "limit": {
      "type": "integer",
      "description": "The number of tags to be returned per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
