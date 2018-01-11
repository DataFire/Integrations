# @datafire/onenote

Client library for OneNote

## Installation and Usage
```bash
npm install --save @datafire/onenote
```
```js
let onenote = require('@datafire/onenote').create();

onenote.pages.get({}).then(data => {
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

#### Input
* input `object`
  * select `string`: The properties to return. Example: name,pagesUrl,createdTime
  * expand `string`: The navigation properties (parentNotebook, or parentSectionGroup) to return inline in the response. Example: parentNotebook
  * sectionId **required** `string`: Specifies the specific Section

#### Output
*Output schema unknown*

### sections.get
Returns a collection of sections.


```js
onenote.sections.get({}, context)
```

#### Input
* input `object`
  * count `boolean`: true, to return the number of entities in the collection.
  * filter `string`: The filter for the query. Example: createdTime ge 2015-09-01
  * orderby `string`: The property to order by. Default is "name asc". Example: lastModifiedTime desc
  * select `string`: The properties to return. Example: name,pagesUrl,createdTime
  * expand `string`: The navigation properties (parentNotebook or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.

#### Output
*Output schema unknown*

### sectionGroups.sectionGroupId.sectionGroups.get
Returns a collection of section groups within a specific section group.


```js
onenote.sectionGroups.sectionGroupId.sectionGroups.get({
  "sectionGroupId": ""
}, context)
```

#### Input
* input `object`
  * count `boolean`: true, to return the number of entities in the collection.
  * filter `string`: The filter for the query. Example: createdTime ge 2015-09-01
  * orderby `string`: The property to order by. Default is "name asc". Example: lastModifiedTime desc
  * select `string`: The properties to return. Example: name,sectionsUrl,createdTime
  * expand `string`: The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.  Example: sections,sectionGroups
  * sectionGroupId **required** `string`: Specifies the section group.

#### Output
*Output schema unknown*

### sectionGroups.sectionGroupId.sections.get
Returns a collection of sections within a specific section group.


```js
onenote.sectionGroups.sectionGroupId.sections.get({
  "sectionGroupId": ""
}, context)
```

#### Input
* input `object`
  * count `boolean`: true, to return the number of entities in the collection.
  * filter `string`: The filter for the query. Example: createdTime ge 2015-09-01
  * orderby `string`: The property to order by. Default is "name asc". Example: lastModifiedTime desc
  * select `string`: The properties to return. Example: name,pagesUrl,createdTime
  * expand `string`: The navigation properties (parentNotebook or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.
  * sectionGroupId **required** `string`: Specifies the section group.

#### Output
*Output schema unknown*

### sectionGroups.sectionGroupId.get
Returns a specific section group object.


```js
onenote.sectionGroups.sectionGroupId.get({
  "sectionGroupId": ""
}, context)
```

#### Input
* input `object`
  * select `string`: The properties to return. Example: name,sectionsUrl,createdTime
  * expand `string`: The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. Example: sections,parentNotebook
  * sectionGroupId **required** `string`: Specifies the specific section group

#### Output
*Output schema unknown*

### sectionGroups.get
Returns a collection of section groups.


```js
onenote.sectionGroups.get({}, context)
```

#### Input
* input `object`
  * count `boolean`: true, to return the number of entities in the collection.
  * filter `string`: The filter for the query. Example: createdTime ge 2015-09-01
  * orderby `string`: The property to order by. Default is "name asc". Example: lastModifiedTime desc
  * select `string`: The properties to return. Example: name,sectionsUrl,createdTime
  * expand `string`: The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.  Example: sections,sectionGroups

#### Output
*Output schema unknown*

### notebooks.notebookId.sectiongroups.get
Returns a collection of section groups within a specific notebook.


```js
onenote.notebooks.notebookId.sectiongroups.get({
  "notebookId": ""
}, context)
```

#### Input
* input `object`
  * count `boolean`: true, to return the number of entities in the collection.
  * filter `string`: The filter for the query. Example: createdTime ge 2015-09-01
  * orderby `string`: The property to order by. Default is "name asc". Example: lastModifiedTime desc
  * select `string`: The properties to return. Example: name,sectionsUrl,createdTime
  * expand `string`: The navigation properties (sections, sectionGroups, parentNotebook, or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.  Example: sections,sectionGroups
  * notebookId **required** `string`: Specifies the notebook.

#### Output
*Output schema unknown*

### notebooks.notebookId.sections.get
Returns a collection of sections within a specific notebook.


```js
onenote.notebooks.notebookId.sections.get({
  "notebookId": ""
}, context)
```

#### Input
* input `object`
  * count `boolean`: true, to return the number of entities in the collection.
  * filter `string`: The filter for the query. Example: createdTime ge 2015-09-01
  * orderby `string`: The property to order by. Default is "name asc". Example: lastModifiedTime desc
  * select `string`: The properties to return. Example: name,pagesUrl,createdTime
  * expand `string`: The navigation properties (parentNotebook or parentSectionGroup) to return inline in the response. The default query expands parentNotebook and parentSectionGroup, and selects their id, name, and self properties.
  * notebookId **required** `string`: Specifies the notebook.

#### Output
*Output schema unknown*

### notebooks.notebookId.sections.post
Creates a new section in a specific notebook.


```js
onenote.notebooks.notebookId.sections.post({
  "Content-Type": "",
  "notebookId": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: Required: indicates type of content being sent
  * notebookId **required** `string`: Specifies the notebook.

#### Output
*Output schema unknown*

### notebooks.notebookId.get
Returns a specific notebook object.


```js
onenote.notebooks.notebookId.get({
  "notebookId": ""
}, context)
```

#### Input
* input `object`
  * select `string`: The properties to return. Example: name,sectionsUrl,links
  * expand `string`: The navigation properties (sections and sectionGroups) to return inline in the response. Example: sections,sectionGroups
  * notebookId **required** `string`: Specifies the specific notebook

#### Output
*Output schema unknown*

### notebooks.get
Returns a collection of notebooks.


```js
onenote.notebooks.get({}, context)
```

#### Input
* input `object`
  * count `boolean`: true, to return the number of entities in the collection.
  * filter `string`: The filter for the query. Example: createdTime ge 2015-09-01
  * orderby `string`: The property to order by. Default is "name asc". Example: lastModifiedTime desc
  * select `string`: The properties to return. Example: name,self,links
  * expand `string`: The navigation properties (sections or sectionGroups) to return inline in the response. Example: sections

#### Output
*Output schema unknown*

### notebooks.post
Creates a new notebook.


```js
onenote.notebooks.post({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: Required: indicates type of content being sent

#### Output
*Output schema unknown*

### pages.pageId.content.get
Returns HTML content of the specified page.


```js
onenote.pages.pageId.content.get({
  "Accept": "",
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string`: Required: indicates type of content returned in the response.
  * includeIDs `string`: Optional: set to true to get generated IDs to use for PATCH operations.
  * pageId **required** `string`: Specifies the page whose content you want to retrieve.

#### Output
*Output schema unknown*

### pages.pageId.delete
Deletes the specified page.


```js
onenote.pages.pageId.delete({
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * pageId **required** `string`: Specifies the page to delete.

#### Output
*Output schema unknown*

### pages.pageId.get
Returns the specified page.


```js
onenote.pages.pageId.get({
  "pageId": ""
}, context)
```

#### Input
* input `object`
  * select `string`: The properties to return. Example: title,contentUrl,links
  * pageId **required** `string`: Specifies the page to delete.

#### Output
*Output schema unknown*

### sections.sectionId.pages.get
Get the pages (metadata) in the specified section.


```js
onenote.sections.sectionId.pages.get({
  "sectionId": ""
}, context)
```

#### Input
* input `object`
  * count `boolean`: true, to return the number of entities in the collection.
  * filter `string`: The filter for the query. Example: title eq 'Homework'
  * orderby `string`: The property to order by. Default is "lastModifiedTime desc". Example: createdTime desc
  * select `string`: The properties to return. Example: title,self,createdTime
  * search `string`: The term or phrase to search for. Example: todo
  * sectionId **required** `string`: Specifies the section that contains the pages.

#### Output
*Output schema unknown*

### sections.sectionId.pages.post
Creates a new page in a specific section.


```js
onenote.sections.sectionId.pages.post({
  "Content-Type": "",
  "sectionId": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: Required: indicates type of content sent
  * sectionId **required** `string`: Specifies the section that contains the pages.

#### Output
*Output schema unknown*

### pages.get
Get the pages (metadata) from all notebooks in OneDrive that are owned by the user.


```js
onenote.pages.get({}, context)
```

#### Input
* input `object`
  * count `boolean`: true, to return the number of entities in the collection.
  * filter `string`: The filter for the query. Example: title eq 'Homework'
  * orderby `string`: The property to order by. Default is "lastModifiedTime desc". Example: createdTime desc
  * select `string`: The properties to return. Example: title,self,createdTime
  * search `string`: The term or phrase to search for. Example: todo

#### Output
*Output schema unknown*

### pages.post
Creates a new page in the default notebook and section.


```js
onenote.pages.post({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: Required: indicates type of content sent
  * sectionName `string`: Optional: indicates the name of the section in the default notebook that the page should be created in. This section will be created if it does not already exist.

#### Output
*Output schema unknown*



## Definitions

** No definitions **
