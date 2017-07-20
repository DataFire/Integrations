# @datafire/onenote

Client library for OneNote

## Installation and Usage
```bash
npm install --save datafire @datafire/onenote
```

```js
let datafire = require('datafire');
let onenote = require('@datafire/onenote').actions;
let context = new datafire.Context();

onenote.pages.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Easily capture content into OneNote with this REST API.

## Actions
### sections.sectionId.get
Returns a specific section.


```js
onenote.sections.sectionId.get({
  "sectionId": ""
}, context)
```

#### Parameters
* select (string) - The properties to return. Example: name,pagesUrl,createdTime
* expand (string) - The navigation properties (parentNotebook, or parentSectionGroup) to return inline in the response. Example: parentNotebook
* sectionId (string) **required** - Specifies the specific Section

### sections.get
Returns a collection of sections.


```js
onenote.sections.get({}, context)
```


### sectionGroups.sectionGroupId.sectionGroups.get
Returns a collection of section groups within a specific section group.


```js
onenote.sectionGroups.sectionGroupId.sectionGroups.get({
  "sectionGroupId": ""
}, context)
```

#### Parameters
* count (boolean) - true, to return the number of entities in the collection.
* filter (string) - The filter for the query. Example: createdTime ge 2015-09-01
* orderby (string) - The property to order by. Default is "name asc". Example: lastModifiedTime desc
* select (string) - The properties to return. Example: name,sectionsUrl,createdTime
* top (undefined) - The number of entities to return from the result set. Example: 10
* expand (string) - The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.  Example: sections,sectionGroups
* skip (undefined) - The number of entities to skip in the result set. Example: 10
* sectionGroupId (string) **required** - Specifies the section group.

### sectionGroups.sectionGroupId.sections.get
Returns a collection of sections within a specific section group.


```js
onenote.sectionGroups.sectionGroupId.sections.get({
  "sectionGroupId": ""
}, context)
```

#### Parameters
* count (boolean) - true, to return the number of entities in the collection.
* filter (string) - The filter for the query. Example: createdTime ge 2015-09-01
* orderby (string) - The property to order by. Default is "name asc". Example: lastModifiedTime desc
* select (string) - The properties to return. Example: name,pagesUrl,createdTime
* top (undefined) - The number of entities to return from the result set. Example: 10
* expand (string) - The navigation properties (parentNotebook or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.
* skip (undefined) - The number of entities to skip in the result set. Example: 10
* sectionGroupId (string) **required** - Specifies the section group.

### sectionGroups.sectionGroupId.get
Returns a specific section group object.


```js
onenote.sectionGroups.sectionGroupId.get({
  "sectionGroupId": ""
}, context)
```

#### Parameters
* select (string) - The properties to return. Example: name,sectionsUrl,createdTime
* expand (string) - The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. Example: sections,parentNotebook
* sectionGroupId (string) **required** - Specifies the specific section group

### sectionGroups.get
Returns a collection of section groups.


```js
onenote.sectionGroups.get({}, context)
```


### notebooks.notebookId.sectiongroups.get
Returns a collection of section groups within a specific notebook.


```js
onenote.notebooks.notebookId.sectiongroups.get({
  "notebookId": ""
}, context)
```

#### Parameters
* count (boolean) - true, to return the number of entities in the collection.
* filter (string) - The filter for the query. Example: createdTime ge 2015-09-01
* orderby (string) - The property to order by. Default is "name asc". Example: lastModifiedTime desc
* select (string) - The properties to return. Example: name,sectionsUrl,createdTime
* top (undefined) - The number of entities to return from the result set. Example: 10
* expand (string) - The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.  Example: sections,sectionGroups
* skip (undefined) - The number of entities to skip in the result set. Example: 10
* notebookId (string) **required** - Specifies the notebook.

### notebooks.notebookId.sections.get
Returns a collection of sections within a specific notebook.


```js
onenote.notebooks.notebookId.sections.get({
  "notebookId": ""
}, context)
```

#### Parameters
* count (boolean) - true, to return the number of entities in the collection.
* filter (string) - The filter for the query. Example: createdTime ge 2015-09-01
* orderby (string) - The property to order by. Default is "name asc". Example: lastModifiedTime desc
* select (string) - The properties to return. Example: name,pagesUrl,createdTime
* top (undefined) - The number of entities to return from the result set. Example: 10
* expand (string) - The navigation properties (parentNotebook or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.
* skip (undefined) - The number of entities to skip in the result set. Example: 10
* notebookId (string) **required** - Specifies the notebook.

### notebooks.notebookId.sections.post
Creates a new section in a specific notebook.


```js
onenote.notebooks.notebookId.sections.post({
  "Content-Type": "",
  "notebookId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Required: indicates type of content being sent
* notebookId (string) **required** - Specifies the notebook.

### notebooks.notebookId.get
Returns a specific notebook object.


```js
onenote.notebooks.notebookId.get({
  "notebookId": ""
}, context)
```

#### Parameters
* select (string) - The properties to return. Example: name,sectionsUrl,links
* expand (string) - The navigation properties (sections and sectionGroups) to return inline in the response. Example: sections,sectionGroups
* notebookId (string) **required** - Specifies the specific notebook

### notebooks.get
Returns a collection of notebooks.


```js
onenote.notebooks.get({}, context)
```


### notebooks.post
Creates a new notebook.


```js
onenote.notebooks.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Required: indicates type of content being sent

### pages.pageId.content.get
Returns HTML content of the specified page.


```js
onenote.pages.pageId.content.get({
  "Accept": "",
  "pageId": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Required: indicates type of content returned in the response.
* includeIDs (string) - Optional: set to true to get generated IDs to use for PATCH operations.
* pageId (string) **required** - Specifies the page whose content you want to retrieve.

### pages.pageId.delete
Deletes the specified page.


```js
onenote.pages.pageId.delete({
  "pageId": ""
}, context)
```

#### Parameters
* pageId (string) **required** - Specifies the page to delete.

### pages.pageId.get
Returns the specified page.


```js
onenote.pages.pageId.get({
  "pageId": ""
}, context)
```

#### Parameters
* select (string) - The properties to return. Example: title,contentUrl,links
* pageId (string) **required** - Specifies the page to delete.

### sections.sectionId.pages.get
Get the pages (metadata) in the specified section.


```js
onenote.sections.sectionId.pages.get({
  "sectionId": ""
}, context)
```

#### Parameters
* count (boolean) - true, to return the number of entities in the collection.
* filter (string) - The filter for the query. Example: title eq 'Homework'
* orderby (string) - The property to order by. Default is "lastModifiedTime desc". Example: createdTime desc
* select (string) - The properties to return. Example: title,self,createdTime
* top (undefined) - The number of entities to return from the result set. Default is 20, maximum is 100. Example: 10
* search (string) - The term or phrase to search for. Example: todo
* skip (undefined) - The number of entities to skip in the result set. Example: 10
* sectionId (string) **required** - Specifies the section that contains the pages.

### sections.sectionId.pages.post
Creates a new page in a specific section.


```js
onenote.sections.sectionId.pages.post({
  "Content-Type": "",
  "sectionId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Required: indicates type of content sent
* sectionId (string) **required** - Specifies the section that contains the pages.

### pages.get
Get the pages (metadata) from all notebooks in OneDrive that are owned by the user.


```js
onenote.pages.get({}, context)
```


### pages.post
Creates a new page in the default notebook and section.


```js
onenote.pages.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Required: indicates type of content sent
* sectionName (string) - Optional: indicates the name of the section in the default notebook that the page should be created in. This section will be created if it does not already exist.

