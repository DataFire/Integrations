# @datafire/digitallinguistics

Client library for DLx

## Installation and Usage
```bash
npm install --save @datafire/digitallinguistics
```
```js
let digitallinguistics = require('@datafire/digitallinguistics').create({
  Authorization: ""
});

digitallinguistics.upsertLexeme({}).then(data => {
  console.log(data);
});
```

## Description

The Digital Linguistics (DLx) REST API

## Actions

### getLanguages
Retrieves all the Languages that the authenticated user or client has permission to access.


```js
digitallinguistics.getLanguages({}, context)
```

#### Input
* input `object`
  * continuation `string`: The `dlx-continuation` header is used to send a continuation token with the request, when retrieving the next page of results.
  * deleted `boolean`: Setting the `deleted` option to `true` will return results that have been marked for deletion, but not yet deleted from the database. Otherwise requests for a resource marked for deletion will return a 410 error.
  * ifModifiedSince `string`: The `If-Modified-Since` header is used to retrieve only results modified since a given time. The value of this header must be a valid date string.
  * maxItemCount `string`: The `dlx-max-item-count` header is used to limit the number of results to a certain amount at a time (by default all results will be returned). If there are more results to be returned, a continuation token will also be sent in the `dlx-continuation` header.
  * public `string`: Set this parameter to `true` to include all publicly-accessible resources, not just those that the user is listed as an Owner, Contributor, or Viewer for.

#### Output
*Output schema unknown*

### addLanguage
Add a new Language


```js
digitallinguistics.addLanguage({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`

#### Output
*Output schema unknown*

### upsertLanguage
Creates a Language if it does not yet exist (i.e. if the resource does not have an `id` property yet), or replaces the existing Language resource if it does. Note that this replaces the *entire* Language. It is not a partial update.


```js
digitallinguistics.upsertLanguage({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
  * ifMatch `string`: The `If-Match` header is used with PUT and DELETE requests to check whether you have the most up-to-date version of the resource before updating or deleting it. The value of the `If-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to avoid data conflicts.

#### Output
*Output schema unknown*

### deleteLanguage
Delete a Language by ID


```js
digitallinguistics.deleteLanguage({
  "languageID": ""
}, context)
```

#### Input
* input `object`
  * languageID **required** `string`: The ID of the Language to perform the operation on
  * ifMatch `string`: The `If-Match` header is used with PUT and DELETE requests to check whether you have the most up-to-date version of the resource before updating or deleting it. The value of the `If-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to avoid data conflicts.

#### Output
*Output schema unknown*

### getLanguage
Retrieve a Language by ID


```js
digitallinguistics.getLanguage({
  "languageID": ""
}, context)
```

#### Input
* input `object`
  * languageID **required** `string`: The ID of the Language to perform the operation on
  * deleted `boolean`: Setting the `deleted` option to `true` will return results that have been marked for deletion, but not yet deleted from the database. Otherwise requests for a resource marked for deletion will return a 410 error.
  * ifNoneMatch `string`: If `If-None-Match` header is used with GET requests to check whether you already have the most up-to-date version of the resource, and therefore do not need the resource sent again. The value of the `If-None-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to reduce bandwidth.

#### Output
*Output schema unknown*

### updateLanguage
Performs a partial update the Language whose ID is specified in the URL. If the Language object has an `id` property, is ignored in favor of the ID in the URL.


```js
digitallinguistics.updateLanguage({
  "languageID": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * languageID **required** `string`: The ID of the Language to perform the operation on
  * body **required** `object`
  * ifMatch `string`: The `If-Match` header is used with PUT and DELETE requests to check whether you have the most up-to-date version of the resource before updating or deleting it. The value of the `If-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to avoid data conflicts.

#### Output
*Output schema unknown*

### getLexemesByLanguage
Get all Lexemes for a Language


```js
digitallinguistics.getLexemesByLanguage({
  "languageID": ""
}, context)
```

#### Input
* input `object`
  * languageID **required** `string`: The ID of the Language to perform the operation on
  * continuation `string`: The `dlx-continuation` header is used to send a continuation token with the request, when retrieving the next page of results.
  * deleted `boolean`: Setting the `deleted` option to `true` will return results that have been marked for deletion, but not yet deleted from the database. Otherwise requests for a resource marked for deletion will return a 410 error.
  * ifModifiedSince `string`: The `If-Modified-Since` header is used to retrieve only results modified since a given time. The value of this header must be a valid date string.
  * maxItemCount `string`: The `dlx-max-item-count` header is used to limit the number of results to a certain amount at a time (by default all results will be returned). If there are more results to be returned, a continuation token will also be sent in the `dlx-continuation` header.
  * public `string`: Set this parameter to `true` to include all publicly-accessible resources, not just those that the user is listed as an Owner, Contributor, or Viewer for.

#### Output
*Output schema unknown*

### addLexemeByLanguage
Add a new Lexeme to a Language


```js
digitallinguistics.addLexemeByLanguage({
  "languageID": ""
}, context)
```

#### Input
* input `object`
  * languageID **required** `string`: The ID of the Language to perform the operation on

#### Output
*Output schema unknown*

### upsertLexemeByLanguage
Upsert (add or replace) a Lexeme


```js
digitallinguistics.upsertLexemeByLanguage({
  "languageID": ""
}, context)
```

#### Input
* input `object`
  * languageID **required** `string`: The ID of the Language to perform the operation on
  * ifMatch `string`: The `If-Match` header is used with PUT and DELETE requests to check whether you have the most up-to-date version of the resource before updating or deleting it. The value of the `If-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to avoid data conflicts.

#### Output
*Output schema unknown*

### deleteLexemeByLanguage
Delete a Lexeme by ID


```js
digitallinguistics.deleteLexemeByLanguage({
  "languageID": "",
  "lexemeID": ""
}, context)
```

#### Input
* input `object`
  * languageID **required** `string`: The ID of the Language to perform the operation on
  * lexemeID **required** `string`: The ID of the Lexeme to perform the operation on
  * ifMatch `string`: The `If-Match` header is used with PUT and DELETE requests to check whether you have the most up-to-date version of the resource before updating or deleting it. The value of the `If-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to avoid data conflicts.

#### Output
*Output schema unknown*

### getLexemeByLanguage
Get a Lexeme by ID


```js
digitallinguistics.getLexemeByLanguage({
  "languageID": "",
  "lexemeID": ""
}, context)
```

#### Input
* input `object`
  * languageID **required** `string`: The ID of the Language to perform the operation on
  * lexemeID **required** `string`: The ID of the Lexeme to perform the operation on
  * deleted `boolean`: Setting the `deleted` option to `true` will return results that have been marked for deletion, but not yet deleted from the database. Otherwise requests for a resource marked for deletion will return a 410 error.
  * ifNoneMatch `string`: If `If-None-Match` header is used with GET requests to check whether you already have the most up-to-date version of the resource, and therefore do not need the resource sent again. The value of the `If-None-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to reduce bandwidth.

#### Output
*Output schema unknown*

### updateLexemeByLanguage
Perform a partial update on a Lexeme


```js
digitallinguistics.updateLexemeByLanguage({
  "languageID": "",
  "lexemeID": ""
}, context)
```

#### Input
* input `object`
  * languageID **required** `string`: The ID of the Language to perform the operation on
  * lexemeID **required** `string`: The ID of the Lexeme to perform the operation on
  * ifMatch `string`: The `If-Match` header is used with PUT and DELETE requests to check whether you have the most up-to-date version of the resource before updating or deleting it. The value of the `If-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to avoid data conflicts.

#### Output
*Output schema unknown*

### getLexemes
Retrieve all Lexemes that the authenticated user has permission to access. Include a `languageID` query parameter to limit results to Lexemes from a particular Language.


```js
digitallinguistics.getLexemes({}, context)
```

#### Input
* input `object`
  * continuation `string`: The `dlx-continuation` header is used to send a continuation token with the request, when retrieving the next page of results.
  * deleted `boolean`: Setting the `deleted` option to `true` will return results that have been marked for deletion, but not yet deleted from the database. Otherwise requests for a resource marked for deletion will return a 410 error.
  * ifModifiedSince `string`: The `If-Modified-Since` header is used to retrieve only results modified since a given time. The value of this header must be a valid date string.
  * languageID `string`: The ID of the Language to perform the operation on
  * maxItemCount `string`: The `dlx-max-item-count` header is used to limit the number of results to a certain amount at a time (by default all results will be returned). If there are more results to be returned, a continuation token will also be sent in the `dlx-continuation` header.
  * public `string`: Set this parameter to `true` to include all publicly-accessible resources, not just those that the user is listed as an Owner, Contributor, or Viewer for.

#### Output
*Output schema unknown*

### addLexeme
Add a new Lexeme. A `languageID` must be provided either as a query parameter, or as an attribute on the Lexeme body.


```js
digitallinguistics.addLexeme({}, context)
```

#### Input
* input `object`
  * languageID `string`: The ID of the Language to perform the operation on

#### Output
*Output schema unknown*

### upsertLexeme
Upsert (add or replace) a Lexeme. A `languageID` must be provided either as a query parameter, or as an attribute on the Lexeme body.


```js
digitallinguistics.upsertLexeme({}, context)
```

#### Input
* input `object`
  * ifMatch `string`: The `If-Match` header is used with PUT and DELETE requests to check whether you have the most up-to-date version of the resource before updating or deleting it. The value of the `If-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to avoid data conflicts.
  * languageID `string`: The ID of the Language to perform the operation on

#### Output
*Output schema unknown*

### deleteLexeme
Delete a Lexeme by ID


```js
digitallinguistics.deleteLexeme({
  "lexemeID": ""
}, context)
```

#### Input
* input `object`
  * lexemeID **required** `string`: The ID of the Lexeme to perform the operation on
  * ifMatch `string`: The `If-Match` header is used with PUT and DELETE requests to check whether you have the most up-to-date version of the resource before updating or deleting it. The value of the `If-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to avoid data conflicts.

#### Output
*Output schema unknown*

### getLexeme
Get a Lexeme by ID


```js
digitallinguistics.getLexeme({
  "lexemeID": ""
}, context)
```

#### Input
* input `object`
  * lexemeID **required** `string`: The ID of the Lexeme to perform the operation on
  * deleted `boolean`: Setting the `deleted` option to `true` will return results that have been marked for deletion, but not yet deleted from the database. Otherwise requests for a resource marked for deletion will return a 410 error.
  * ifNoneMatch `string`: If `If-None-Match` header is used with GET requests to check whether you already have the most up-to-date version of the resource, and therefore do not need the resource sent again. The value of the `If-None-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to reduce bandwidth.

#### Output
*Output schema unknown*

### updateLexeme
Perform a partial update on a Lexeme.


```js
digitallinguistics.updateLexeme({
  "lexemeID": ""
}, context)
```

#### Input
* input `object`
  * lexemeID **required** `string`: The ID of the Lexeme to perform the operation on
  * ifMatch `string`: The `If-Match` header is used with PUT and DELETE requests to check whether you have the most up-to-date version of the resource before updating or deleting it. The value of the `If-Match` header is the ETag (`_etag`) property of the resource. It is recommended that your application use this header whenever possible to avoid data conflicts.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
