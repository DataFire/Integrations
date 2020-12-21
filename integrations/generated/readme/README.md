# @datafire/readme

Client library for API Endpoints

## Installation and Usage
```bash
npm install --save @datafire/readme
```
```js
let readme = require('@datafire/readme').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Create beautiful product and API documentation with our developer friendly platform.

## Actions

### getProject
Returns project data for API key


```js
readme.getProject(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getAPISpecification
Get API specification metadata


```js
readme.getAPISpecification({
  "x-readme-version": ""
}, context)
```

#### Input
* input `object`
  * perPage `integer`: Number of items to include in pagination (up to 100, defaults to 10)
  * page `integer`: Used to specify further pages (starts at 1)
  * x-readme-version **required** `string`: Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.

#### Output
*Output schema unknown*

### uploadAPISpecification
Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github


```js
readme.uploadAPISpecification({
  "x-readme-version": ""
}, context)
```

#### Input
* input `object`
  * x-readme-version **required** `string`: Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
  * spec `string`: OpenAPI/Swagger file

#### Output
*Output schema unknown*

### deleteAPISpecification
Delete an API specification in ReadMe


```js
readme.deleteAPISpecification({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.

#### Output
*Output schema unknown*

### updateAPISpecification
Update an API specification in ReadMe


```js
readme.updateAPISpecification({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.
  * spec `string`: OpenAPI/Swagger file

#### Output
*Output schema unknown*

### getCategory
Returns the category with this slug


```js
readme.getCategory({
  "slug": "",
  "x-readme-version": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category "Getting Started", enter the slug "getting-started"
  * x-readme-version **required** `string`: Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.

#### Output
*Output schema unknown*

### getCategoryDocs
Returns the docs and children docs within this category


```js
readme.getCategoryDocs({
  "slug": "",
  "x-readme-version": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category "Getting Started", enter the slug "getting-started"
  * x-readme-version **required** `string`: Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.

#### Output
*Output schema unknown*

### getChangelogs
Returns a list of changelogs associated with the project API key


```js
readme.getChangelogs({}, context)
```

#### Input
* input `object`
  * perPage `integer`: Number of items to include in pagination (up to 100, defaults to 10)
  * page `integer`: Used to specify further pages (starts at 1)

#### Output
*Output schema unknown*

### createChangelog
Create a new changelog inside of this project


```js
readme.createChangelog({
  "body": {
    "title": "",
    "body": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Changelog](#changelog)

#### Output
*Output schema unknown*

### deleteChangelog
Delete the changelog with this slug


```js
readme.deleteChangelog({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of changelog

#### Output
*Output schema unknown*

### getChangelog
Returns the changelog with this slug


```js
readme.getChangelog({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of changelog

#### Output
*Output schema unknown*

### updateChangelog
Update a changelog with this slug


```js
readme.updateChangelog({
  "slug": "",
  "body": {
    "title": "",
    "body": ""
  }
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of changelog
  * body **required** [Changelog](#changelog)

#### Output
*Output schema unknown*

### getCustomPages
Returns a list of custom pages associated with the project API key


```js
readme.getCustomPages({}, context)
```

#### Input
* input `object`
  * perPage `integer`: Number of items to include in pagination (up to 100, defaults to 10)
  * page `integer`: Used to specify further pages (starts at 1)

#### Output
*Output schema unknown*

### createCustomPage
Create a new custom page inside of this project


```js
readme.createCustomPage({
  "body": {
    "title": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CustomPage](#custompage)

#### Output
*Output schema unknown*

### deleteCustomPage
Delete the custom page with this slug


```js
readme.deleteCustomPage({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of custom page

#### Output
*Output schema unknown*

### getCustomPage
Returns the custom page with this slug


```js
readme.getCustomPage({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of custom page

#### Output
*Output schema unknown*

### updateCustomPage
Update a custom page with this slug


```js
readme.updateCustomPage({
  "slug": "",
  "body": {
    "title": ""
  }
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of custom page
  * body **required** [CustomPage](#custompage)

#### Output
*Output schema unknown*

### createDoc
Create a new doc inside of this project


```js
readme.createDoc({
  "x-readme-version": "",
  "body": {
    "title": "",
    "category": ""
  }
}, context)
```

#### Input
* input `object`
  * x-readme-version **required** `string`: Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
  * body **required** [Doc](#doc)

#### Output
*Output schema unknown*

### searchDocs
Returns all docs that match the search


```js
readme.searchDocs({
  "search": "",
  "x-readme-version": ""
}, context)
```

#### Input
* input `object`
  * search **required** `string`: Search string to look for
  * x-readme-version **required** `string`: Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.

#### Output
*Output schema unknown*

### deleteDoc
Delete the doc with this slug


```js
readme.deleteDoc({
  "slug": "",
  "x-readme-version": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"
  * x-readme-version **required** `string`: Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.

#### Output
*Output schema unknown*

### getDoc
Returns the doc with this slug


```js
readme.getDoc({
  "slug": "",
  "x-readme-version": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"
  * x-readme-version **required** `string`: Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.

#### Output
*Output schema unknown*

### updateDoc
Update a doc with this slug


```js
readme.updateDoc({
  "slug": "",
  "x-readme-version": "",
  "body": {
    "title": "",
    "category": ""
  }
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"
  * x-readme-version **required** `string`: Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
  * body **required** [Doc](#doc)

#### Output
*Output schema unknown*

### getErrors
Returns with all of the error page types for this project


```js
readme.getErrors(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### uploadSwagger
DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe


```js
readme.uploadSwagger({}, context)
```

#### Input
* input `object`
  * swagger `string`: Swagger file

#### Output
*Output schema unknown*

### deleteSwagger
DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe


```js
readme.deleteSwagger({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of swagger the file

#### Output
*Output schema unknown*

### updateSwagger
DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.


```js
readme.updateSwagger({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of the Swagger file
  * swagger `string`: Swagger file

#### Output
*Output schema unknown*

### getVersions
Retrieve a list of versions associated with a project API key


```js
readme.getVersions(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### createVersion
Create a new version


```js
readme.createVersion({
  "body": {
    "version": "",
    "from": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Version](#version)

#### Output
*Output schema unknown*

### deleteVersion
Delete a version


```js
readme.deleteVersion({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: Semver version indentifier

#### Output
*Output schema unknown*

### getVersion
Returns the version with this version ID


```js
readme.getVersion({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: Semver version indentifier

#### Output
*Output schema unknown*

### updateVersion
Update an existing version


```js
readme.updateVersion({
  "versionId": "",
  "body": {
    "version": "",
    "from": ""
  }
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: Semver version indentifier
  * body **required** [Version](#version)

#### Output
*Output schema unknown*



## Definitions

### Changelog
* Changelog `object`
  * body **required** `string`: Body content of the changelog
  * hidden `boolean`: Visibility of the changelog
  * title **required** `string`: Title of the changelog
  * type `string` (values: , added, fixed, improved, deprecated, removed)

### CustomPage
* CustomPage `object`
  * body `string`: Body formatted in Markdown (displayed by default).
  * hidden `boolean`: Visibility of the custom page
  * html `string`: Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).
  * htmlmode `boolean`: **true** if `html` should be displayed, **false** if `body` should be displayed.
  * title **required** `string`: Title of the custom page

### Doc
* Doc `object`
  * body `string`: Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters
  * category **required** `string`: Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory 
  * hidden `boolean`: Visibility of the page
  * parentDoc `string`: For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc
  * title **required** `string`: Title of the page
  * type `string` (values: basic, error, link): Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link)

### Version
* Version `object`
  * codename `string`: Dubbed name of version
  * from **required** `string`: Semantic Version to use as the base fork
  * is_beta `boolean`
  * is_deprecated `boolean`: Should this be deprecated? Only allowed in PUT operations
  * is_hidden `boolean`: Should this be publically accessible?
  * is_stable `boolean`: Should this be the **main** version
  * version **required** `string`: Semantic Version


