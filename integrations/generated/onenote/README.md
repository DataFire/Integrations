# @datafire/onenote
Easily capture content into OneNote with this REST API.

## Operation: sections.sectionId.get
Returns a specific section.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,pagesUrl,createdTime"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (parentNotebook, or parentSectionGroup) to return inline in the response. Example: parentNotebook"
    },
    "sectionId": {
      "type": "string",
      "description": "Specifies the specific Section"
    }
  },
  "additionalProperties": false,
  "required": [
    "sectionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sections.get
Returns a collection of sections.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "boolean",
      "description": "true, to return the number of entities in the collection."
    },
    "filter": {
      "type": "string",
      "description": "The filter for the query. Example: createdTime ge 2015-09-01"
    },
    "orderby": {
      "type": "string",
      "description": "The property to order by. Default is \"name asc\". Example: lastModifiedTime desc"
    },
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,pagesUrl,createdTime"
    },
    "top": {
      "description": "The number of entities to return from the result set. Example: 10"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (parentNotebook or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties."
    },
    "skip": {
      "description": "The number of entities to skip in the result set. Example: 10"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: sectionGroups.sectionGroupId.sectionGroups.get
Returns a collection of section groups within a specific section group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "count": {
      "type": "boolean",
      "description": "true, to return the number of entities in the collection."
    },
    "filter": {
      "type": "string",
      "description": "The filter for the query. Example: createdTime ge 2015-09-01"
    },
    "orderby": {
      "type": "string",
      "description": "The property to order by. Default is \"name asc\". Example: lastModifiedTime desc"
    },
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,sectionsUrl,createdTime"
    },
    "top": {
      "description": "The number of entities to return from the result set. Example: 10"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.  Example: sections,sectionGroups"
    },
    "skip": {
      "description": "The number of entities to skip in the result set. Example: 10"
    },
    "sectionGroupId": {
      "type": "string",
      "description": "Specifies the section group."
    }
  },
  "additionalProperties": false,
  "required": [
    "sectionGroupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sectionGroups.sectionGroupId.sections.get
Returns a collection of sections within a specific section group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "count": {
      "type": "boolean",
      "description": "true, to return the number of entities in the collection."
    },
    "filter": {
      "type": "string",
      "description": "The filter for the query. Example: createdTime ge 2015-09-01"
    },
    "orderby": {
      "type": "string",
      "description": "The property to order by. Default is \"name asc\". Example: lastModifiedTime desc"
    },
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,pagesUrl,createdTime"
    },
    "top": {
      "description": "The number of entities to return from the result set. Example: 10"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (parentNotebook or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties."
    },
    "skip": {
      "description": "The number of entities to skip in the result set. Example: 10"
    },
    "sectionGroupId": {
      "type": "string",
      "description": "Specifies the section group."
    }
  },
  "additionalProperties": false,
  "required": [
    "sectionGroupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sectionGroups.sectionGroupId.get
Returns a specific section group object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,sectionsUrl,createdTime"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. Example: sections,parentNotebook"
    },
    "sectionGroupId": {
      "type": "string",
      "description": "Specifies the specific section group"
    }
  },
  "additionalProperties": false,
  "required": [
    "sectionGroupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sectionGroups.get
Returns a collection of section groups.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "boolean",
      "description": "true, to return the number of entities in the collection."
    },
    "filter": {
      "type": "string",
      "description": "The filter for the query. Example: createdTime ge 2015-09-01"
    },
    "orderby": {
      "type": "string",
      "description": "The property to order by. Default is \"name asc\". Example: lastModifiedTime desc"
    },
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,sectionsUrl,createdTime"
    },
    "top": {
      "description": "The number of entities to return from the result set. Example: 10"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.  Example: sections,sectionGroups"
    },
    "skip": {
      "description": "The number of entities to skip in the result set. Example: 10"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: notebooks.notebookId.sectiongroups.get
Returns a collection of section groups within a specific notebook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "count": {
      "type": "boolean",
      "description": "true, to return the number of entities in the collection."
    },
    "filter": {
      "type": "string",
      "description": "The filter for the query. Example: createdTime ge 2015-09-01"
    },
    "orderby": {
      "type": "string",
      "description": "The property to order by. Default is \"name asc\". Example: lastModifiedTime desc"
    },
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,sectionsUrl,createdTime"
    },
    "top": {
      "description": "The number of entities to return from the result set. Example: 10"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.  Example: sections,sectionGroups"
    },
    "skip": {
      "description": "The number of entities to skip in the result set. Example: 10"
    },
    "notebookId": {
      "type": "string",
      "description": "Specifies the notebook."
    }
  },
  "additionalProperties": false,
  "required": [
    "notebookId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notebooks.notebookId.sections.get
Returns a collection of sections within a specific notebook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "count": {
      "type": "boolean",
      "description": "true, to return the number of entities in the collection."
    },
    "filter": {
      "type": "string",
      "description": "The filter for the query. Example: createdTime ge 2015-09-01"
    },
    "orderby": {
      "type": "string",
      "description": "The property to order by. Default is \"name asc\". Example: lastModifiedTime desc"
    },
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,pagesUrl,createdTime"
    },
    "top": {
      "description": "The number of entities to return from the result set. Example: 10"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (parentNotebook or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties."
    },
    "skip": {
      "description": "The number of entities to skip in the result set. Example: 10"
    },
    "notebookId": {
      "type": "string",
      "description": "Specifies the notebook."
    }
  },
  "additionalProperties": false,
  "required": [
    "notebookId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notebooks.notebookId.sections.post
Creates a new section in a specific notebook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Required: indicates type of content being sent"
    },
    "notebookId": {
      "type": "string",
      "description": "Specifies the notebook."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "notebookId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notebooks.notebookId.get
Returns a specific notebook object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,sectionsUrl,links"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (sections and sectionGroups) to return inline in the response. Example: sections,sectionGroups"
    },
    "notebookId": {
      "type": "string",
      "description": "Specifies the specific notebook"
    }
  },
  "additionalProperties": false,
  "required": [
    "notebookId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: notebooks.get
Returns a collection of notebooks.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "boolean",
      "description": "true, to return the number of entities in the collection."
    },
    "filter": {
      "type": "string",
      "description": "The filter for the query. Example: createdTime ge 2015-09-01"
    },
    "orderby": {
      "type": "string",
      "description": "The property to order by. Default is \"name asc\". Example: lastModifiedTime desc"
    },
    "select": {
      "type": "string",
      "description": "The properties to return. Example: name,self,links"
    },
    "top": {
      "description": "The number of entities to return from the result set. Example: 10"
    },
    "expand": {
      "type": "string",
      "description": "The navigation properties (sections or sectionGroups) to return inline in the response. Example: sections"
    },
    "skip": {
      "description": "The number of entities to skip in the result set. Example: 10"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: notebooks.post
Creates a new notebook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Required: indicates type of content being sent"
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: pages.pageId.content.get
Returns HTML content of the specified page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept": {
      "type": "string",
      "description": "Required: indicates type of content returned in the response."
    },
    "includeIDs": {
      "type": "string",
      "description": "Optional: set to true to get generated IDs to use for PATCH operations."
    },
    "pageId": {
      "type": "string",
      "description": "Specifies the page whose content you want to retrieve."
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept",
    "pageId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: pages.pageId.delete
Deletes the specified page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageId": {
      "type": "string",
      "description": "Specifies the page to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "pageId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: pages.pageId.get
Returns the specified page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "select": {
      "type": "string",
      "description": "The properties to return. Example: title,contentUrl,links"
    },
    "pageId": {
      "type": "string",
      "description": "Specifies the page to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "pageId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sections.sectionId.pages.get
Get the pages (metadata) in the specified section.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "count": {
      "type": "boolean",
      "description": "true, to return the number of entities in the collection."
    },
    "filter": {
      "type": "string",
      "description": "The filter for the query. Example: title eq 'Homework'"
    },
    "orderby": {
      "type": "string",
      "description": "The property to order by. Default is \"lastModifiedTime desc\". Example: createdTime desc"
    },
    "select": {
      "type": "string",
      "description": "The properties to return. Example: title,self,createdTime"
    },
    "top": {
      "description": "The number of entities to return from the result set. Default is 20, maximum is 100. Example: 10"
    },
    "search": {
      "type": "string",
      "description": "The term or phrase to search for. Example: todo"
    },
    "skip": {
      "description": "The number of entities to skip in the result set. Example: 10"
    },
    "sectionId": {
      "type": "string",
      "description": "Specifies the section that contains the pages."
    }
  },
  "additionalProperties": false,
  "required": [
    "sectionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sections.sectionId.pages.post
Creates a new page in a specific section.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Required: indicates type of content sent"
    },
    "sectionId": {
      "type": "string",
      "description": "Specifies the section that contains the pages."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "sectionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: pages.get
Get the pages (metadata) from all notebooks in OneDrive that are owned by the user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "boolean",
      "description": "true, to return the number of entities in the collection."
    },
    "filter": {
      "type": "string",
      "description": "The filter for the query. Example: title eq 'Homework'"
    },
    "orderby": {
      "type": "string",
      "description": "The property to order by. Default is \"lastModifiedTime desc\". Example: createdTime desc"
    },
    "select": {
      "type": "string",
      "description": "The properties to return. Example: title,self,createdTime"
    },
    "top": {
      "description": "The number of entities to return from the result set. Default is 20, maximum is 100. Example: 10"
    },
    "search": {
      "type": "string",
      "description": "The term or phrase to search for. Example: todo"
    },
    "skip": {
      "description": "The number of entities to skip in the result set. Example: 10"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: pages.post
Creates a new page in the default notebook and section.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Required: indicates type of content sent"
    },
    "sectionName": {
      "type": "string",
      "description": "Optional: indicates the name of the section in the default notebook that the page should be created in. This section will be created if it does not already exist."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
